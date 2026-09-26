# Installer le cahier pour une famille

Le cahier n'est pas une application à télécharger : c'est un site que la
famille héberge elle-même, sur un petit serveur loué. C'est voulu. Ce que
l'enfant dépose le soir, ce que ses parents notent et les consignes de son
suivi médical n'ont rien à faire chez un tiers.

Le prix de ce choix : **quelqu'un doit administrer le serveur.** Rien
d'extraordinaire — une heure pour l'installer, quelques minutes par mois
ensuite —, mais il faut être à l'aise avec un terminal. Si personne dans votre
entourage ne l'est, faites-vous aider pour l'installation, et gardez cette
personne sous la main.

## Ce qu'il faut

- **Un serveur Linux** (Debian ou Ubuntu). Un VPS d'entrée de gamme suffit :
  2 cœurs et 4 Go de mémoire (la construction de l'application en demande
  plus que son fonctionnement), autour de 5 € par mois. L'ensemble tourne
  ensuite dans moins d'un gigaoctet. Choisissez un hébergeur en Europe.
- **Un nom de domaine**, autour de 10 € par an. Choisissez un nom qui ne
  contient ni le prénom de l'enfant ni rien qui parle de difficulté : c'est
  l'adresse que l'inspecteur verra. Activez le renouvellement automatique.
- **Un espace de stockage ailleurs** que chez l'hébergeur du serveur, pour
  les sauvegardes chiffrées (n'importe quel service que `rclone` sait joindre).

Trois conteneurs tournent sur la machine : Postgres, l'application Next.js,
et Caddy devant pour le certificat HTTPS.

## 1. Durcir la machine avant d'y mettre quoi que ce soit

Connecté en `root` (ou après `sudo -i`) :

```bash
apt update && apt full-upgrade -y
apt install -y curl git ufw fail2ban unattended-upgrades rclone gnupg
dpkg-reconfigure -plow unattended-upgrades
```

Les mises à jour de sécurité s'appliquent seules — c'est ce qui permet de ne
pas regarder la machine pendant des mois.

Le pare-feu ne laisse entrer que SSH et le web :

```bash
ufw default deny incoming
ufw default allow outgoing
ufw allow OpenSSH
ufw allow 80/tcp
ufw allow 443/tcp
ufw enable
```

Puis, une fois votre clé SSH en place et **testée depuis une seconde
session** (`ssh-copy-id utilisateur@adresse-du-serveur` depuis votre poste),
fermez l'entrée par mot de passe dans `/etc/ssh/sshd_config` :

```
PasswordAuthentication no
PermitRootLogin prohibit-password
```

```bash
systemctl restart ssh
```

> Tester la clé avant de couper le mot de passe, sans exception. Se
> verrouiller dehors se répare par la console de secours de l'hébergeur, mais
> un dimanche soir ça prend l'heure qu'on n'a pas.

> `fail2ban` bannit celui qui le teste : deux échecs d'authentification pour
> vérifier que le mot de passe est bien coupé, et c'est dix minutes sans SSH.
> Le site, lui, continue de répondre.

## 2. Docker

Depuis le dépôt officiel, pas celui de la distribution, qui traîne plusieurs
versions de retard :

```bash
curl -fsSL https://get.docker.com | sh
systemctl enable --now docker
```

## 3. Le domaine

Chez le registraire du domaine, dans la zone DNS, deux enregistrements `A`
vers l'adresse IPv4 du serveur :

| Type | Sous-domaine | Cible                    |
| ---- | ------------ | ------------------------ |
| `A`  | *(vide)*     | adresse IPv4 du serveur  |
| `A`  | `www`        | adresse IPv4 du serveur  |

Supprimez les enregistrements de parking que le registraire a posés. Pas
d'`AAAA` tant que vous n'avez pas vérifié que le serveur répond en IPv6 : un
`AAAA` qui ne répond pas fait échouer une demande de certificat sur deux.

**Attendez que le domaine résolve avant de démarrer quoi que ce soit** : Caddy
demande son certificat dès le premier démarrage, et plusieurs échecs de suite
font tomber sous la limitation de Let's Encrypt pour une heure.

```bash
getent hosts votre-domaine.fr    # doit rendre l'adresse du serveur, et rien d'autre
```

## 4. L'application

Les scripts de `deploiement/` supposent que le cahier vit dans
`/opt/le-cahier`. Gardez ce chemin.

```bash
mkdir -p /opt/le-cahier && cd /opt/le-cahier
git clone https://github.com/PierreTzt/cahier-du-jour.git .
cp .env.exemple .env
chmod 600 .env
```

Remplissez `.env` : le domaine, puis deux secrets.

```bash
openssl rand -base64 32   # pour POSTGRES_PASSWORD
openssl rand -base64 32   # pour SAUVEGARDE_PHRASE
```

> La phrase de sauvegarde doit être **notée ailleurs que sur le serveur**.
> Une sauvegarde chiffrée dont la clé a disparu avec la machine ne protège
> rien.

Démarrez la base seule, posez le schéma, puis le reste :

```bash
docker compose up -d base
CAHIER_SAUVEGARDE_FAITE=1 ./deploiement/migrer.sh
docker compose up -d --build
docker compose logs -f caddy     # attendre « certificate obtained successfully »
```

`CAHIER_SAUVEGARDE_FAITE=1` ne sert qu'à cette première fois : ensuite,
chaque migration commence par une sauvegarde, et il n'y a encore rien à
sauvegarder.

## 5. La famille

Les prénoms se passent en variables. L'enfant et un parent sont
obligatoires ; le second parent et le proche (parrain, marraine, grand-parent)
sont facultatifs. `mot1`, `mot2` et `mot3` disent comment l'enfant appelle
chacun — « papa », « maman », « parrain » par défaut. Ce sont ces mots, jamais
les prénoms des adultes, qui apparaissent sur ses écrans.

```bash
cd /opt/le-cahier && set -a && . ./.env && set +a
docker compose exec -T base psql -U cahier -d cahier -v ON_ERROR_STOP=1 \
  -v enfant=Tom -v parent1=Karim -v parent2=Sophie -v proche=Julien \
  -v domaine="$DOMAINE" \
  < base/graines/famille.sql > acces.txt
chmod 600 acces.txt
cat acces.txt
```

`acces.txt` contient le code de chacun : quatre chiffres pour l'enfant, six
pour les adultes. C'est le seul endroit où ils existent en clair — la base
n'en garde qu'une empreinte. Donnez-les de vive voix ; ils n'ont rien à faire
dans un courriel ou une messagerie.

On entre sur le site par « Entrer » (l'enfant) ou « Accès adulte », puis le
code. La session de l'enfant tient un an sur l'appareil ; celle d'un adulte se
ferme chaque nuit à cinq heures.

**Refaire les codes** (un code oublié, ou vu par quelqu'un) : relancer la même
commande. Les personnes ne sont pas dupliquées, mais **tous les codes
changent d'un coup** et les sessions ouvertes se ferment — prévenez la famille
avant.

## 6. L'année

Connecté comme adulte, ouvrez **L'année** (`/annee`) et le bouton **« écrire
toute l'année »**. Il pose les 163 journées de la trame — leçons, rituels,
mercredis, vacances et jours fériés compris. Rien n'est écrit dans une journée
qui a déjà des séances, donc cliquer deux fois ne double rien, et chaque
journée reste modifiable ensuite.

Avant de cliquer, lisez les limites du `README.md` : la trame de cette
version est celle de l'année **2026-2027**, académie de **Lille**, **zone B**,
et commence le 16 septembre 2026. Une autre zone ou une autre année demande
d'adapter `lib/trame.ts` (les dates de vacances, les jours fériés, le premier
jour) **avant** d'écrire l'année.

Sans session ouverte, depuis un poste qui a Node, le même SQL peut se
produire et se relire avant d'être appliqué :

```bash
npx tsx deploiement/ecrire-lannee.ts --depuis 2026-10-05 > annee.sql
```

## 7. Les sauvegardes

C'est l'étape qu'on ne saute pas. L'instantané que proposent les hébergeurs
est souvent conservé un seul jour, chez eux : il dépanne un plantage, il ne
protège ni d'une erreur remarquée trois jours plus tard, ni d'un incident qui
emporte l'hébergeur.

```bash
rclone config                     # créer la destination distante
cp deploiement/sauvegarde.sh /usr/local/bin/cahier-sauvegarde
chmod +x /usr/local/bin/cahier-sauvegarde
crontab -e
```

```
15 3 * * *  /usr/local/bin/cahier-sauvegarde >> /var/log/cahier-sauvegarde.log 2>&1
```

Puis renseignez `SAUVEGARDE_DESTINATION` dans `.env`. Le script vide la base,
comprime et chiffre à la volée — le contenu en clair n'atteint jamais le
disque —, **relit le fichier produit en entier**, l'envoie à la destination
distante et garde trente jours en local.

**Et une restauration d'essai, une fois, pour de vrai** :

```bash
cd /opt/le-cahier && set -a && . ./.env && set +a
docker compose exec -T base psql -U cahier -d cahier -c 'create database essai_restauration'
gpg --batch --quiet --decrypt --passphrase "$SAUVEGARDE_PHRASE" /var/sauvegardes/cahier/cahier-….sql.gz.gpg \
  | gzip -dc \
  | docker compose exec -T base psql -U cahier -d essai_restauration
```

Comparez le nombre de lignes de quelques tables avec la base `cahier`, puis
`drop database essai_restauration`. Tant que cette commande n'a pas réussi
une fois, vous n'avez pas de sauvegarde : vous avez un fichier dont vous
espérez quelque chose.

## 8. Mettre à jour

```bash
cd /opt/le-cahier && ./deploiement/deployer.sh
```

Le script tire la dernière version, **fait une sauvegarde de la base**, passe
les migrations, garde l'image en service sous l'étiquette `precedente`,
reconstruit l'application, vérifie qu'aucun prénom de la famille n'est parti
dans le JavaScript envoyé au navigateur, et n'annonce rien tant que le site
n'a pas répondu sur le domaine.

**Pas pendant que l'enfant travaille.** Une page ouverte avant la mise à jour
peut échouer au clic suivant ; faites-le le soir, et rechargez les pages
ouvertes.

Pour revenir à l'image d'avant, en quelques secondes :

```bash
cd /opt/le-cahier && ./deploiement/revenir.sh
```

Il ne touche ni à la base, ni au code sur le disque : si une migration est en
cause, c'est la sauvegarde faite juste avant qui sert.

## 9. Essayer sans toucher aux données de l'enfant

Parcourir le test ou une leçon depuis l'accès de l'enfant enregistre des
réponses à son nom, et le relevé des parents les lui attribue. Pour essayer,
créez plutôt une base jetable dans le même conteneur :

```bash
docker compose exec -T base psql -U cahier -d cahier -c 'create database essai'
```

… passez-y les migrations et une famille d'essai, puis
`drop database essai`. Si c'est l'accès réel qui a servi,
`./deploiement/remettre-le-test-a-zero.sh` efface les réponses au test de
positionnement (sans `oui`, il montre seulement ce qu'il effacerait).

## Pièges déjà rencontrés

**Un cookie ne se pose pas pendant le rendu d'une page**, seulement dans une
action serveur ou un gestionnaire de route.

**Derrière un proxy, `NextResponse.redirect` renvoie l'adresse interne** du
conteneur. Un en-tête `Location` relatif règle la question.

**Après une modification de la zone DNS**, deux caches à vider si rien ne
bouge : `resolvectl flush-caches` sur le serveur, celui du navigateur ou du
système sur votre poste.
