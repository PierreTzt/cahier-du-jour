"use client";

import { useCallback } from "react";
import { Dialog } from "radix-ui";
import LeCours from "@/components/LeCours";
import type { LeconPosee } from "@/lib/programme";

/**
 * Le cours, rouvert par-dessus l'exercice.
 *
 * Retour d'un parent, 23 septembre 2026 : « quand c'est le moment des
 * questions, ça serait cool qu'il ait la possibilité de faire pop la leçon
 * s'il a un doute ou un trou ». Le lien « revoir le cours » existait depuis
 * le premier jour, et personne ne l'avait vu : petit, gris, et il remplaçait
 * l'exercice par le cours entier — pour revenir, il fallait redescendre
 * jusqu'au bouton du bas. Ici le cours glisse par la droite, l'énoncé
 * rappelé en haut, et le fermer rend l'exercice tel qu'il était, ce qu'il
 * avait tapé compris.
 *
 * Ouvert depuis une correction, il s'ouvre sur la partie qui explique
 * l'exercice. Ouvert avant de répondre, il s'ouvre au début : c'est son
 * cahier de leçons, pas un indice sur la règle à appliquer.
 *
 * Rien n'est noté quand il l'ouvre. Si relire se voyait chez ses parents, il
 * ne relirait plus.
 */
export default function CoursAPortee({
  ouvert,
  onFermer,
  lecon,
  enonce,
  partie,
  onApresFermeture,
}: {
  ouvert: boolean;
  onFermer: () => void;
  lecon: Pick<LeconPosee, "titre" | "cours" | "exemples">;
  /** L'énoncé de l'exercice en cours, rappelé en haut du panneau. */
  enonce: string | null;
  /** La partie à montrer, ou `null` pour ouvrir le cours au début. */
  partie: number | null;
  /** Rendre la main au champ de réponse, plutôt qu'au bouton qui a ouvert. */
  onApresFermeture?: () => boolean;
}) {
  /* Le panneau naît déjà défilé jusqu'à la partie : les nœuds du cours
     existent quand React attache la référence du conteneur. */
  const defiler = useCallback(
    (el: HTMLDivElement | null) => {
      if (!el || partie === null) return;
      const cible = el.querySelector<HTMLElement>(`[data-partie="${partie}"]`);
      if (cible) el.scrollTop = Math.max(0, cible.offsetTop - 20);
    },
    [partie],
  );

  return (
    <Dialog.Root open={ouvert} onOpenChange={(o) => !o && onFermer()}>
      <Dialog.Portal>
        <Dialog.Overlay className="voile fixed inset-0 z-50 bg-encre/25" />
        <Dialog.Content
          aria-describedby={undefined}
          onCloseAutoFocus={(e) => {
            if (onApresFermeture?.()) e.preventDefault();
          }}
          className="glisser chaleur fixed inset-y-0 right-0 z-50 flex w-full flex-col shadow-[-16px_0_40px_-16px_rgb(29_40_54/0.35)] sm:w-[min(38rem,calc(100vw-4rem))] sm:border-l sm:border-reglure"
        >
          <header className="border-b border-reglure bg-papier-chaud px-5 pb-4 pt-5 sm:px-8">
            <div className="flex items-start justify-between gap-4">
              <div className="min-w-0">
                <p className="etiquette text-encre-tenue">Le cours</p>
                <Dialog.Title className="font-display mt-1 text-[1.25rem] font-normal leading-snug tracking-tight text-encre">
                  {lecon.titre}
                </Dialog.Title>
              </div>
              <Dialog.Close className="shrink-0 rounded-full bg-encre px-5 py-2.5 text-[0.9375rem] font-bold text-feuille transition-colors hover:bg-encre/85">
                Revenir à l’exercice
              </Dialog.Close>
            </div>
            {enonce && (
              <p className="mt-3 text-[0.9375rem] leading-relaxed text-encre-douce">
                <span className="etiquette mr-2 text-encre-tenue">Ton exercice</span>
                {enonce}
              </p>
            )}
          </header>

          <div ref={defiler} className="relative min-h-0 flex-1 overflow-y-auto px-5 py-7 sm:px-8">
            <LeCours lecon={lecon} marquee={partie} />
            <div className="mt-10 border-t border-reglure pt-6">
              <Dialog.Close className="rounded-full bg-encre px-6 py-3 text-base font-bold text-feuille transition-colors hover:bg-encre/85">
                Revenir à l’exercice
              </Dialog.Close>
            </div>
          </div>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
}
