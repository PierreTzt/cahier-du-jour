#!/usr/bin/env bash
# Revenir à la version d'avant le dernier déploiement, en une commande.
#
#   cd /opt/le-cahier && ./deploiement/revenir.sh
#
# `deployer.sh` garde l'image en service sous l'étiquette `precedente` avant
# de la remplacer, et note sa version dans `.version-precedente`. Ce script la
# remet en service : quelques secondes, rien à reconstruire.
#
# Ce qu'il ne fait pas, exprès :
#
#   - **il ne touche pas à la base.** Un déploiement sans migration ne l'a
#     pas changée ; avec une migration, l'ancienne version du code sait lire
#     la base migrée (on migre toujours de façon compatible, voir
#     `deployer.sh`). S'il faut vraiment la remettre, c'est la sauvegarde
#     faite juste avant le déploiement — `deploiement/README.md`, § 5 ;
#   - **il ne touche pas au dépôt.** Le code sur le disque reste le nouveau :
#     le prochain `deployer.sh` le remettrait en ligne. Corriger, ou annuler
#     le commit dans git (`git revert`), avant de redéployer.
set -euo pipefail
cd "$(dirname "$0")/.."

if ! sg docker -c "docker image inspect le-cahier-application:precedente" > /dev/null 2>&1; then
  echo "Aucune image précédente n'a été gardée : rien n'a été touché."
  exit 1
fi

version=$(cat .version-precedente 2>/dev/null || echo "version inconnue")
echo "— retour à ${version}"
sg docker -c "docker tag le-cahier-application:precedente le-cahier-application:latest"
sg docker -c "docker compose up -d --no-build application"

set -a; . ./.env; set +a
adresse="https://${DOMAINE%%,*}/"
echo -n "— le site répond"
code=000
for _ in $(seq 1 30); do
  code=$(curl -s -o /dev/null -w "%{http_code}" "${adresse}sante" || echo 000)
  [ "$code" = "200" ] && break
  echo -n "."
  sleep 2
done
echo " $code"

echo
echo "En ligne : ${version}. Le dépôt, lui, est toujours sur $(git rev-parse --short HEAD) :"
echo "corriger ou annuler dans git avant le prochain deployer.sh."
