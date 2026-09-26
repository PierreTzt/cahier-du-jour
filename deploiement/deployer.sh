#!/usr/bin/env bash
# Déployer la dernière version, migrations comprises.
#
# Ce script existait déjà sur le VPS, écrit à la main et jamais versionné. Il
# avait deux défauts que seule une relecture montre :
#
#   - il vérifiait la santé du site sur l'ancien nom d'hôte OVH, donc il
#     répondait « 200 » pendant que le vrai domaine était en panne ;
#   - il ne passait pas les migrations. Le code partait, la colonne manquait,
#     et l'erreur sortait chez l'enfant.
#
# L'ordre compte : on migre **avant** de basculer l'image. Une migration qui
# ajoute une colonne est compatible avec l'ancienne version du code ; l'inverse
# ne l'est pas.
set -euo pipefail

script="$(cd "$(dirname "$0")" && pwd)/$(basename "$0")"
cd "$(dirname "$0")/.."

# D'abord la dernière version — **de ce script aussi**. Bash lit un script au
# fur et à mesure qu'il l'exécute : le 16 septembre 2026, le `git pull` a amené
# une sauvegarde et une vérification de la base ajoutées ici même, et c'est
# l'ancienne version, déjà lue, qui a continué sans elles. Après le pull, le
# script se relance donc lui-même, une fois.
if [ "${CAHIER_SCRIPT_A_JOUR:-}" != "1" ]; then
  # La version en service, notée avant de tirer la nouvelle : c'est elle
  # qu'on remettra si la nouvelle se passe mal (voir plus bas, et `revenir.sh`).
  CAHIER_VERSION_AVANT=$(git rev-parse --short HEAD)
  export CAHIER_VERSION_AVANT
  echo "— la dernière version"
  git pull --ff-only
  CAHIER_SCRIPT_A_JOUR=1 exec "$script" "$@"
fi

# Le domaine vient de `.env`, comme pour Caddy : un nom d'hôte écrit en dur ici
# est exactement ce qui a fait mentir la version précédente.
set -a; . ./.env; set +a
adresse="https://${DOMAINE%%,*}/"

# Une sauvegarde juste avant de migrer. La dernière datait de 3 h 15 : une
# migration qui réécrit des journées l'après-midi n'avait rien derrière elle.
# C'est la sauvegarde de chaque nuit, lancée maintenant — chiffrée, relue.
echo
echo "— une sauvegarde avant de toucher à la base"
if [ -x /usr/local/bin/cahier-sauvegarde ]; then
  sudo /usr/local/bin/cahier-sauvegarde
else
  echo "cahier-sauvegarde introuvable : déploiement interrompu, rien n'a été touché."
  exit 1
fi

echo
echo "— les migrations"
CAHIER_SAUVEGARDE_FAITE=1 ./deploiement/migrer.sh

# L'image en service, gardée sous l'étiquette `precedente` avant d'être
# remplacée. Sans ça, `docker image prune` à la fin l'effaçait, et revenir en
# arrière voulait dire reconstruire l'ancienne version — plusieurs minutes, un
# soir où ça presse. Le parrain l'a demandé le 21 septembre 2026 : une sauvegarde
# pour pouvoir revenir, à chaque déploiement. `deploiement/revenir.sh` la
# remet en service en une commande.
echo
echo "— l'image en service, gardée pour revenir en arrière"
if sg docker -c "docker image inspect le-cahier-application" > /dev/null 2>&1; then
  sg docker -c "docker tag le-cahier-application le-cahier-application:precedente"
  echo "${CAHIER_VERSION_AVANT:-inconnue}" > .version-precedente
  echo "  le-cahier-application:precedente = ${CAHIER_VERSION_AVANT:-version inconnue}"
fi

echo
echo "— l'image"
sg docker -c "docker compose build application"

# Avant de basculer : aucun prénom de la famille ni « soignant » dans ce que le
# navigateur de n'importe quel visiteur peut télécharger. Le test du dépôt lit
# les sources ; ici on lit ce qui partira vraiment (seconde critique du
# 16 septembre). Les prénoms viennent de la base, jamais de ce script.
echo "— rien de nominatif dans le JavaScript servi"
prenoms=$(echo "select string_agg(prenom, '|') from personne where length(prenom) > 2 and prenom not like 'Essai-%';" \
  | sg docker -c "docker compose exec -T base psql -U cahier -d cahier -qtA")
motif="soignant${prenoms:+|$prenoms}"
if sg docker -c "docker run --rm --entrypoint grep le-cahier-application -rlE '$motif' /app/.next/static" > /tmp/cahier-fuite.txt; then
  echo "FUITE : un prénom ou « soignant » est dans .next/static — rien n'a été basculé."
  cat /tmp/cahier-fuite.txt
  exit 1
fi

echo
echo "— le service"
sg docker -c "docker compose up -d"
# Le Caddyfile est monté fichier par fichier : `git pull` le remplace par un
# nouveau fichier, et le conteneur garde l'ancien — un `caddy reload` relisait
# donc l'ancienne version (constaté le 17 septembre, la redirection de `www`
# n'avait pas pris). Quand ils diffèrent, Caddy est recréé : une ou deux
# secondes de coupure, seulement ces jours-là.
dedans=$(sg docker -c "docker compose exec -T caddy sha256sum /etc/caddy/Caddyfile" | cut -d' ' -f1)
dehors=$(sha256sum Caddyfile | cut -d' ' -f1)
if [ "$dedans" != "$dehors" ]; then
  echo "— le Caddyfile a changé : Caddy est recréé"
  sg docker -c "docker compose up -d --force-recreate --no-deps caddy"
fi

# Le temps que Next réponde. Plutôt qu'un `sleep` fixe, on demande jusqu'à ce
# que ça réponde : sur un VPS-1 le démarrage varie du simple au triple selon
# ce que fait la machine par ailleurs.
echo
echo -n "— le site répond"
code=000
for _ in $(seq 1 30); do
  code=$(curl -s -o /dev/null -w "%{http_code}" "$adresse" || echo 000)
  [ "$code" = "200" ] && break
  echo -n "."
  sleep 2
done
echo " $code"

if [ "$code" != "200" ]; then
  echo
  echo "DÉPLOIEMENT SUSPECT — $adresse répond $code."
  echo "Les journaux : sg docker -c 'docker compose logs --tail=50 application'"
  exit 1
fi

# La page d'accueil sans session ne lit rien en base : un 200 ne prouvait pas
# qu'une journée s'affiche. `/sante` fait une vraie requête.
echo -n "— la base répond"
sante=$(curl -s -o /dev/null -w "%{http_code}" "${adresse}sante" || echo 000)
echo " $sante"
if [ "$sante" != "200" ]; then
  echo
  echo "DÉPLOIEMENT SUSPECT — le site répond, mais pas la base (${adresse}sante : $sante)."
  echo "Les journaux : sg docker -c 'docker compose logs --tail=50 application'"
  exit 1
fi

# Le cache de construction grossissait à chaque déploiement sans jamais être
# vidé : 13,5 Go en cinq jours sur un disque de 40. Base pleine, plus rien ne
# s'enregistre. On garde trois jours de cache, pour que la construction
# suivante reste rapide.
echo "— le ménage"
sg docker -c "docker builder prune -f --filter until=72h" > /dev/null
sg docker -c "docker image prune -f" > /dev/null
df -h / | awk 'NR == 2 { print "  disque : " $3 " utilisés sur " $2 " (" $5 ")" }'

echo
echo "En ligne : $adresse"
