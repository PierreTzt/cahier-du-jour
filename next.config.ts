import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* Auto-hébergement sur un VPS : `standalone` ne copie que ce qui sert
     réellement à tourner, node_modules compris. L'image Docker passe de
     plusieurs centaines de mégaoctets à quelques dizaines, ce qui compte
     quand on redéploie depuis une ligne ADSL.

     Contrepartie documentée : `public` et `.next/static` ne sont pas repris
     automatiquement — le Dockerfile les copie à la main. */
  output: "standalone",

  /* Caddy retire déjà son propre en-tête `Server` ; Next n'a pas non plus à
     annoncer ce qu'il est à qui passe. */
  poweredByHeader: false,
};

export default nextConfig;
