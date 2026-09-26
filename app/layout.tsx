import type { Metadata, Viewport } from "next";
import { Fraunces, Atkinson_Hyperlegible } from "next/font/google";
import "./globals.css";
import Entete from "@/components/Entete";

const fraunces = Fraunces({
  subsets: ["latin"],
  variable: "--font-fraunces",
  display: "swap",
});

/* Atkinson Hyperlegible — dessiné par le Braille Institute pour la lisibilité.
   Choix justifié par le lecteur, pas par le style. */
const atkinson = Atkinson_Hyperlegible({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-atkinson",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Le cahier du jour",
  /* Le site est public : rien dans les métadonnées ne doit dire de qui il
     s'agit, ni de quoi il retourne. */
  description: "",
  robots: { index: false, follow: false, nocache: true },
};

export const viewport: Viewport = {
  themeColor: "#f6f1e8",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="fr"
      className={`${fraunces.variable} ${atkinson.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <Entete />
        <div className="flex flex-1 flex-col">{children}</div>
      </body>
    </html>
  );
}
