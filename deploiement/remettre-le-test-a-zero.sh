#!/usr/bin/env bash
# Effacer les réponses du test de positionnement, et rien d'autre.
#
# Sert après un essai : quand un adulte a parcouru le test depuis l'accès de
# l'enfant, ses réponses sont enregistrées sur le profil de l'enfant, et la
# lecture côté parents les lui attribuerait.
#
# Ce script ne touche QUE la table `reponse`, et seulement les lignes de
# l'enfant. Les personnes, les codes d'accès, les journées, les séances et les
# ressentis ne sont jamais concernés.
#
# Il exige le mot « oui » en argument : une commande destructrice ne doit pas
# pouvoir partir d'un rappel d'historique ou d'un copier-coller distrait.
#
#   ./remettre-le-test-a-zero.sh oui
set -euo pipefail

compose="docker compose -f /opt/le-cahier/docker-compose.yml"
psql() { sg docker -c "$compose exec -T base psql -U cahier -d cahier -qtA"; }

avant=$(echo "select count(*) from reponse r join personne p on p.id = r.personne_id where p.role = 'enfant';" | psql)

if [ "${1:-}" != "oui" ]; then
  echo "Réponses enregistrées pour l'enfant : $avant"
  echo
  echo "Ceci les efface toutes, définitivement, et le test repart de la"
  echo "première question. Rien d'autre n'est touché."
  echo
  echo "Pour confirmer :  $0 oui"
  exit 1
fi

echo "select 1;" | psql > /dev/null
cat <<'SQL' | psql > /dev/null
begin;
delete from reponse r using personne p
 where p.id = r.personne_id and p.role = 'enfant';
commit;
SQL

apres=$(echo "select count(*) from reponse;" | psql)
echo "Réponses effacées : $avant → $apres"
[ "$apres" = "0" ] || { echo "INATTENDU — il reste des réponses en base"; exit 1; }
echo "Le test repart de la première question."
