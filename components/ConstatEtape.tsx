"use client";

import { createContext, useContext, useState, type ReactNode } from "react";
import Link from "next/link";
import { Coche } from "@/components/Chemin";

/**
 * Le constat d'une séance, qui survit à la page d'après.
 *
 * Quand l'enfant clique « J'ai fini », « C'est fini » ou « Je bloque », l'action
 * écrit en base puis le serveur renvoie `/etape` — où la séance courante est
 * déjà la **suivante**. Deux façons de rater ce moment ont existé :
 *
 *   - le message était porté par le composant de la séance, démonté par le
 *     nouveau rendu : il ne s'affichait jamais ;
 *   - le composant n'était pas démonté, et gardait son état au-dessus de la
 *     séance suivante : la leçon de français s'ouvrait avec la correction de
 *     l'exercice de maths d'avant, et « C'est mis de côté » sous une leçon
 *     encore ouverte. Vu en production le 16 septembre 2026.
 *
 * Le constat vit donc ici, au-dessus de la séance, et quand il est posé il
 * **remplace** tout ce que le serveur a renvoyé. Le titre affiché est celui
 * de la séance qu'il vient de quitter, gardé au moment du geste. « Continuer »
 * ramène à la journée, qui dit la suite.
 */

type Constat = { issue: "fait" | "cote"; titre: string };

const Contexte = createContext<(c: Constat) => void>(() => {});

/** Poser le constat depuis un geste de la séance. */
export const useConstat = () => useContext(Contexte);

export default function ConstatEtape({ children }: { children: ReactNode }) {
  const [constat, poser] = useState<Constat | null>(null);

  if (constat) {
    return (
      <main
        className="reglure chaleur flex flex-1 flex-col"
        style={{ "--force-reglure": 0.45 } as React.CSSProperties}
      >
        <div className="au-dessus deplier mx-auto flex w-full max-w-2xl flex-1 flex-col justify-center px-5 py-16 sm:px-8">
          {constat.issue === "fait" ? (
            /* Un constat, pas une fanfare. Célébrer trop fort la réussite,
               c'est rendre l'échec plus lourd par contraste. */
            <>
              <span className="flex h-14 w-14 items-center justify-center rounded-full bg-fini text-feuille">
                <Coche className="h-7 w-7" />
              </span>
              <h1 className="font-display mt-6 text-3xl tracking-tight sm:text-4xl">
                C’est fait.
              </h1>
              <p className="mt-3 text-lg text-encre-douce">{constat.titre}</p>
            </>
          ) : (
            <>
              <h1 className="font-display text-3xl tracking-tight sm:text-4xl">
                C’est mis de côté.
              </h1>
              <p className="mt-3 text-lg leading-relaxed text-encre-douce">
                On le regardera un autre jour. Tu n’as rien à expliquer.
              </p>
            </>
          )}
          <Link
            href="/journee"
            className="mt-8 self-start rounded-full bg-encre px-6 py-3 text-base font-bold text-feuille transition-colors hover:bg-encre/85"
          >
            Continuer
          </Link>
        </div>
      </main>
    );
  }

  return <Contexte.Provider value={poser}>{children}</Contexte.Provider>;
}
