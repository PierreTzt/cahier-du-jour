"use client";

import { useState, useTransition } from "react";
import { ajouterLecon } from "@/app/actions";

/**
 * Replacer une leçon qui n'a jamais été menée au bout.
 *
 * Elle est ajoutée à la journée affichée comme une leçon **choisie** — origine
 * `main`, donc le ton du jour n'y touchera pas. C'est le sens du geste : un
 * adulte a décidé qu'elle se faisait ce jour-là, et ce n'est pas au calcul de
 * revenir là-dessus.
 */
export default function RattraperLecon({
  code,
  jour,
}: {
  code: string;
  jour: string;
}) {
  const [enCours, demarrer] = useTransition();
  const [pose, setPose] = useState(false);

  if (pose) {
    return (
      <span className="shrink-0 text-[0.875rem] text-fini">
        ajoutée à cette journée
      </span>
    );
  }

  return (
    <button
      type="button"
      disabled={enCours}
      onClick={() =>
        demarrer(async () => {
          /* « ajoutée » seulement si elle l'a été. */
          setPose(await ajouterLecon(code, jour));
        })
      }
      className="shrink-0 rounded-full border border-bord-fort px-4 py-1.5 text-[0.875rem] text-encre transition-colors hover:border-encre disabled:opacity-60"
    >
      {enCours ? "…" : "la placer ici"}
    </button>
  );
}
