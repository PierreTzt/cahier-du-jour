#!/usr/bin/env bash
#
# Passer du nom d'hôte du VPS au vrai domaine.
#
# À lancer sur le VPS **une fois que le domaine résout vers cette machine**.
# Le script refuse de continuer sinon : Caddy demanderait un certificat qui
# échouerait, et quelques échecs d'affilée font tomber sous la limitation de
# Let's Encrypt pour une heure.
#
#   ./deploiement/basculer-domaine.sh votre-domaine.fr

set -euo pipefail

DOMAINE="${1:?usage : basculer-domaine.sh <domaine>}"
RACINE="${RACINE:-/opt/le-cahier}"
cd "$RACINE"

IP_LOCALE=$(curl -s --max-time 10 https://api.ipify.org || true)
IP_DOMAINE=$(getent hosts "$DOMAINE" | awk '{print $1}' | head -1 || true)
IP_WWW=$(getent hosts "www.$DOMAINE" | awk '{print $1}' | head -1 || true)

echo "IP de cette machine : ${IP_LOCALE:-inconnue}"
echo "IP du domaine       : ${IP_DOMAINE:-ne résout pas}"

echo "IP du www           : ${IP_WWW:-ne résout pas}"

if [ -z "$IP_WWW" ]; then
	echo "ARRÊT : www.$DOMAINE ne résout pas. Caddy le demanderait et échouerait." >&2
	exit 1
fi
if [ -z "$IP_DOMAINE" ]; then
	echo "ARRÊT : $DOMAINE ne résout pas encore. Réessayer plus tard." >&2
	exit 1
fi
if [ -n "$IP_LOCALE" ] && [ "$IP_DOMAINE" != "$IP_LOCALE" ]; then
	echo "ARRÊT : $DOMAINE pointe ailleurs que sur cette machine." >&2
	exit 1
fi

echo "→ bascule du .env"
sed -i "s|^DOMAINE=.*|DOMAINE=\"$DOMAINE, www.$DOMAINE\"|" .env
# Vider CADDY_TLS rend la main à Let's Encrypt : Caddy obtient et renouvelle
# le certificat tout seul à partir de là.
sed -i "s|^CADDY_TLS=.*|CADDY_TLS=|" .env

echo "→ redémarrage de Caddy"
sg docker -c "docker compose up -d caddy"

echo "→ attente du certificat (jusqu'à deux minutes)"
for _ in $(seq 1 24); do
	# Sans -k : on veut que le certificat soit *vraiment* valide.
	if curl -s --max-time 8 -o /dev/null "https://$DOMAINE/"; then
		echo "✓ certificat obtenu, le site répond en HTTPS vérifié"
		echo
		echo "Les codes d'accès ne dépendent pas du domaine : rien à refaire."
		echo "Vérifier ensuite que l'application répond : ./deploiement/deployer.sh"
		exit 0
	fi
	sleep 5
done

echo "Le certificat n'est pas encore là. Voir : docker compose logs caddy" >&2
exit 1
