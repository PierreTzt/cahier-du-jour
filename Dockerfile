# Le cahier — image de production.
#
# Trois étapes pour que l'image finale ne contienne ni les sources, ni les
# outils de compilation, ni les dépendances de développement. Sur un VPS-1
# (2 vCore, 4 Go), la compilation passe sans y penser.

# ---- 1. Les dépendances -------------------------------------------------
FROM node:24-alpine AS dependances
WORKDIR /app
# Seulement les manifestes : cette couche est réutilisée tant que les
# dépendances ne bougent pas, ce qui évite de tout retélécharger à chaque
# changement de code.
COPY package.json package-lock.json ./
RUN npm ci

# ---- 2. La compilation --------------------------------------------------
FROM node:24-alpine AS compilation
WORKDIR /app
COPY --from=dependances /app/node_modules ./node_modules
COPY . .
# Rien de secret ici : les variables d'exécution sont lues au démarrage, pas
# à la compilation. Seules les variables NEXT_PUBLIC_ seraient figées dans le
# paquet JavaScript — l'application n'en utilise aucune.
ENV NEXT_TELEMETRY_DISABLED=1
RUN npm run build

# ---- 3. L'exécution -----------------------------------------------------
FROM node:24-alpine AS execution
WORKDIR /app
ENV NODE_ENV=production
ENV NEXT_TELEMETRY_DISABLED=1

# Un utilisateur sans privilèges : si l'application est compromise, elle ne
# l'est pas en root sur le VPS.
RUN addgroup -g 1001 -S nodejs && adduser -S nextjs -u 1001

COPY --from=compilation /app/public ./public
# La sortie standalone embarque son propre serveur et les node_modules utiles.
COPY --from=compilation --chown=nextjs:nodejs /app/.next/standalone ./
# `public` et `.next/static` ne sont pas repris automatiquement par
# standalone : c'est écrit dans la documentation, et c'est le piège classique
# d'un déploiement qui sert des pages sans feuilles de style.
COPY --from=compilation --chown=nextjs:nodejs /app/.next/static ./.next/static

USER nextjs
EXPOSE 3000
ENV PORT=3000
ENV HOSTNAME=0.0.0.0

CMD ["node", "server.js"]
