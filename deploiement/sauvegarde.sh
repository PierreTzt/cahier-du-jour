#!/usr/bin/env bash
#
# Sauvegarde chiffrée de la base, poussée hors OVH.
#
# Pourquoi ce script existe alors qu'OVH propose déjà une sauvegarde
# automatisée : celle d'OVH est un instantané de la machine entière, conservé
# un jour, et stocké chez OVH. Trois faiblesses, chacune suffisante.
#
#   Un jour de rétention  — une corruption passe rarement inaperçue moins de
#                           vingt-quatre heures. Quand on s'en aperçoit, la
#                           bonne version est déjà écrasée.
#   Chez le même hébergeur — un incident qui emporte le VPS peut emporter ses
#                           instantanés. C'est rare ; ce n'est pas impossible.
#   Machine entière       — restaurer un VPS pour récupérer une table, c'est
#                           long, et ça se fait mal sous la pression.
#
# Ce que contient cette base : l'unique trace de l'année scolaire de l'enfant,
# celle qui sert au soignant et au contrôle de l'inspection. Elle n'est pas
# reconstituable.
#
# Installation sur le VPS :
#   cp deploiement/sauvegarde.sh /usr/local/bin/cahier-sauvegarde
#   chmod +x /usr/local/bin/cahier-sauvegarde
#   crontab -e   →   15 3 * * *  /usr/local/bin/cahier-sauvegarde >> /var/log/cahier-sauvegarde.log 2>&1

set -euo pipefail

RACINE="${RACINE:-/opt/le-cahier}"
DEPOT="${DEPOT:-/var/sauvegardes/cahier}"
RETENTION_JOURS="${RETENTION_JOURS:-30}"

cd "$RACINE"
# shellcheck disable=SC1091
set -a && . ./.env && set +a

: "${SAUVEGARDE_PHRASE:?phrase de chiffrement absente — voir .env}"

horodatage="$(date +%Y-%m-%dT%H%M)"
fichier="$DEPOT/cahier-$horodatage.sql.gz.gpg"
mkdir -p "$DEPOT"

echo "[$(date -Is)] sauvegarde en cours → $fichier"

# Le vidage sort du conteneur, se comprime et se chiffre à la volée : le dump
# en clair n'est jamais écrit sur le disque, même une seconde.
docker compose exec -T base \
	pg_dump --username "${POSTGRES_USER:-cahier}" --dbname "${POSTGRES_DB:-cahier}" \
		--format=plain --no-owner --no-privileges \
	| gzip -9 \
	| gpg --batch --yes --symmetric --cipher-algo AES256 \
		--passphrase "$SAUVEGARDE_PHRASE" \
		--output "$fichier"

taille="$(du -h "$fichier" | cut -f1)"
echo "[$(date -Is)] chiffré, $taille"

# Une sauvegarde qu'on n'a jamais ouverte n'est pas une sauvegarde : on relit
# le fichier produit. **En entier**, et c'est tout le point.
#
# La première version s'arrêtait après deux cents octets (`head -c 200`) pour
# vérifier l'en-tête. Elle fermait ainsi le tuyau au nez de gpg, qui recevait
# SIGPIPE et sortait en 141 ; `pipefail`, tout en haut, transformait ça en
# échec. Le script déclarait donc illisible une sauvegarde parfaitement
# lisible — puis sortait en erreur, donc **sans jamais envoyer hors site ni
# faire la rotation**. Ça ne s'est pas vu tout de suite : tant que la base
# tenait en deux kilo-octets, gpg avait fini d'écrire avant que head ne ferme.
# La nuit où l'année a été écrite en base, le dump est passé à 55 ko et la
# sauvegarde a commencé à échouer toutes les nuits.
#
# Relire tout coûte une seconde et vérifie bien davantage : gzip contrôle son
# CRC à la fin, donc une archive tronquée échoue ici et nulle part ailleurs.
# Et on ne se contente plus de l'en-tête : on exige les six tables qui portent
# l'année de l'enfant. Un vidage qui aurait perdu `seance` en cours de route
# passait l'ancien contrôle sans broncher.
reperes='^(-- PostgreSQL database dump$|COPY public\.(journee|seance|personne|reponse|travail|ressenti) )'
trouves="$(gpg --batch --quiet --decrypt --passphrase "$SAUVEGARDE_PHRASE" "$fichier" 2>/dev/null \
	| gzip -dc \
	| grep -cE "$reperes")" || trouves=0

if [ "$trouves" -lt 7 ]; then
	echo "[$(date -Is)] ÉCHEC : le fichier produit ne se relit pas — $trouves repères sur 7. Rien n'est envoyé." >&2
	exit 1
fi
echo "[$(date -Is)] relu en entier : $trouves repères sur 7"

# Hors OVH. Tant que cette variable est vide, la sauvegarde reste sur la même
# machine que la donnée qu'elle protège — autrement dit elle ne protège rien.
if [ -n "${SAUVEGARDE_DESTINATION:-}" ]; then
	rclone copy "$fichier" "$SAUVEGARDE_DESTINATION" --quiet
	echo "[$(date -Is)] envoyé vers $SAUVEGARDE_DESTINATION"
else
	echo "[$(date -Is)] ATTENTION : aucune destination configurée, la copie reste sur le VPS." >&2
fi

# Rotation locale. La rétention à distance se règle chez le fournisseur.
find "$DEPOT" -name 'cahier-*.sql.gz.gpg' -mtime "+$RETENTION_JOURS" -delete
echo "[$(date -Is)] terminé"
