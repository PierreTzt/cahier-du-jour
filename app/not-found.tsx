import type { CSSProperties } from "react";
import Link from "next/link";

/**
 * Une adresse qui ne mène nulle part — un vieux lien, une faute de frappe.
 *
 * Pas de « 404 », pas de « page introuvable » : ce n'est la faute de personne,
 * et il n'y a rien à comprendre. Un chemin vers l'entrée du cahier, c'est tout.
 */
export default function Introuvable() {
  return (
    <main
      className="reglure chaleur flex flex-1 flex-col"
      style={{ "--force-reglure": 0.45 } as CSSProperties}
    >
      <div className="au-dessus mx-auto flex w-full max-w-xl flex-1 flex-col justify-center px-5 py-20 sm:px-8">
        <h1 className="font-display text-4xl tracking-tight sm:text-5xl">Il n’y a rien ici.</h1>
        <p className="mt-4 text-lg leading-relaxed text-encre-douce">
          Cette page n’existe pas dans le cahier.
        </p>
        <Link
          href="/"
          className="mt-8 self-start rounded-full bg-encre px-6 py-3 text-base font-bold text-feuille transition-colors hover:bg-encre/85"
        >
          Revenir au cahier
        </Link>
      </div>
    </main>
  );
}
