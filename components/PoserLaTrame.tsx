"use client";

import { useState, useTransition } from "react";
import { poserLaTrame } from "@/app/actions";

/**
 * Écrire la trame en base, pour un jour, une semaine, ou jusqu'aux vacances.
 *
 * Le bouton dit ce qui a été fait, et surtout ce qui **n'a pas** été fait :
 * les journées déjà écrites ne sont jamais touchées, et il faut le voir. Sans
 * ce retour, quelqu'un qui reclique et voit « 0 journée » croirait à une
 * panne, alors que c'est la garantie qui fonctionne.
 */
export default function PoserLaTrame({
  portee,
  jour,
  large,
}: {
  portee: "jour" | "semaine" | "periode" | "annee";
  jour: string;
  /** Le bouton principal d'un écran, plutôt qu'une action de liste. */
  large?: boolean;
}) {
  const [enCours, demarrer] = useTransition();
  const [dit, setDit] = useState<string | null>(null);

  const mots = {
    jour: "écrire cette journée",
    semaine: "écrire la semaine",
    periode: "écrire jusqu’aux vacances",
    annee: "écrire toute l’année",
  }[portee];

  function poser() {
    demarrer(async () => {
      const r = await poserLaTrame(portee, jour);
      if (!r) {
        setDit("Rien n’a été écrit.");
        return;
      }
      const ignorees = r.examinees - r.posees;
      setDit(
        r.posees === 0
          ? "Rien à écrire : ces journées existent déjà."
          : `${r.posees} journée${r.posees > 1 ? "s" : ""} écrite${r.posees > 1 ? "s" : ""}` +
              (ignorees > 0
                ? ` · ${ignorees} laissée${ignorees > 1 ? "s" : ""} telle${ignorees > 1 ? "s" : ""} quelle${ignorees > 1 ? "s" : ""}`
                : ""),
      );
    });
  }

  return (
    <span className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
      <button
        type="button"
        disabled={enCours}
        onClick={poser}
        className={
          large
            ? "rounded-full bg-encre px-6 py-3 text-base font-bold text-carte transition-colors hover:bg-encre/85 disabled:opacity-60"
            : "rounded-full border border-bord-fort px-4 py-1.5 text-[0.875rem] text-encre transition-colors hover:border-encre disabled:opacity-60"
        }
      >
        {enCours ? "…" : mots}
      </button>
      {dit && (
        <span className="text-[0.875rem] text-encre-tenue">{dit}</span>
      )}
    </span>
  );
}
