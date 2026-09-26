"use client";

import { useTransition } from "react";
import { remettreLeTest } from "@/app/actions";

/**
 * Remettre la partie du test qu'un adulte a retirée de cette journée.
 *
 * Retirer la partie la fait sortir pour la journée entière — sinon elle
 * reviendrait au premier rechargement. D'où ce chemin de retour, pour un
 * « retirer » cliqué trop vite.
 */
export default function RemettreLeTest({ jour }: { jour: string }) {
  const [enCours, demarrer] = useTransition();
  return (
    <p className="mt-4 text-[0.9375rem] leading-relaxed text-encre-tenue">
      La partie du test a été retirée de cette journée.{" "}
      <button
        type="button"
        disabled={enCours}
        onClick={() => demarrer(() => remettreLeTest(jour))}
        className="text-encre-douce underline decoration-bord-fort underline-offset-4 hover:text-encre disabled:opacity-60"
      >
        la remettre
      </button>
    </p>
  );
}
