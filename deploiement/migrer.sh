#!/usr/bin/env bash
# Appliquer les migrations qui manquent, et rien de plus.
#
# Jusqu'ici le schéma était monté à la main, fichier par fichier, de mémoire.
# Ça marche tant qu'il y a cinq fichiers et une seule personne qui déploie ;
# ça se casse au sixième, et ça se casse silencieusement — une migration
# oubliée donne une colonne manquante et une erreur 500 chez l'enfant.
#
# Le suivi est une table, `migration`, qui garde le nom des fichiers déjà
# passés. Chaque fichier est appliqué dans une transaction : s'il échoue, rien
# n'est écrit et rien n'est marqué.
#
#   ./migrer.sh          applique ce qui manque
#   ./migrer.sh --etat   dit seulement ce qui manque, sans rien écrire
set -euo pipefail

cd "$(dirname "$0")/.."
compose="docker compose -f $PWD/docker-compose.yml"
psql() { sg docker -c "$compose exec -T base psql -U cahier -d cahier -qtA -v ON_ERROR_STOP=1"; }

echo "create table if not exists migration (
        fichier text primary key,
        passee_le timestamptz not null default now());" | psql > /dev/null

passees=$(echo "select fichier from migration;" | psql)

manquantes=()
for f in base/migrations/*.sql; do
  nom=$(basename "$f")
  grep -qxF "$nom" <<< "$passees" || manquantes+=("$nom")
done

if [ ${#manquantes[@]} -eq 0 ]; then
  echo "Le schéma est à jour."
  exit 0
fi

echo "À appliquer : ${manquantes[*]}"
[ "${1:-}" = "--etat" ] && exit 0

# Lancé seul, sans passer par `deployer.sh` : la sauvegarde d'abord. Une
# migration qui réécrit des journées n'a jamais le droit de partir sans rien
# derrière elle (seconde critique du 16 septembre).
if [ "${CAHIER_SAUVEGARDE_FAITE:-}" != "1" ]; then
  echo "— une sauvegarde avant de migrer"
  sudo /usr/local/bin/cahier-sauvegarde
fi

for nom in "${manquantes[@]}"; do
  echo "— $nom"
  # La migration et sa marque dans **la même transaction** : on ne peut pas
  # avoir l'une sans l'autre. La marque était écrite après le `commit;` du
  # fichier — une coupure entre les deux laissait une migration appliquée et
  # non marquée, rejouée au déploiement suivant. Elle est maintenant insérée
  # juste avant le dernier `commit;` ; un fichier sans transaction est
  # enveloppé dans une.
  f="base/migrations/$nom"
  marque="insert into migration (fichier) values ('$nom') on conflict do nothing;"
  if grep -q '^commit;' "$f"; then
    awk -v marque="$marque" '
      { lignes[NR] = $0; if ($0 ~ /^commit;/) dernier = NR }
      END { for (i = 1; i <= NR; i++) { if (i == dernier) print marque; print lignes[i] } }
    ' "$f" | psql > /dev/null
  else
    { echo "begin;"; cat "$f"; echo; echo "$marque"; echo "commit;"; } | psql > /dev/null
  fi
done

echo
echo "Appliquées : ${manquantes[*]}"
