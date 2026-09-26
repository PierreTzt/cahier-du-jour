"use client";

import { useState, useTransition } from "react";

/**
 * Retirer quelque chose, en deux temps.
 *
 * Côté adulte, la règle n°9 ne s'applique pas : elle protège l'enfant au
 * moment de l'effondrement, pas un parent devant une liste. Ici, un clic de
 * travers effacerait une sortie notée pour l'inspection, ou sortirait une
 * consigne de ce qu'on applique — rien ne se défait ensuite depuis l'écran.
 * D'où une question, posée sur place : pas de fenêtre du navigateur, qui
 * interrompt, et pas de justification demandée.
 *
 * `action` est une action serveur liée à son identifiant par le composant
 * serveur (`retirerSortie.bind(null, id)`) : ce composant ne sait pas ce qu'il
 * retire, et il n'a pas à le savoir.
 */
export default function RetirerAvecConfirmation({
  action,
  libelle,
  question,
  oui,
}: {
  /* Ce qu'elle rend ne compte pas ici : la page se rafraîchit d'elle-même. */
  action: () => Promise<unknown>;
  /** Le lien discret : « retirer ». */
  libelle: string;
  /** Ce qu'on demande avant d'agir. */
  question: string;
  /** Le bouton qui agit : « oui, l’effacer ». */
  oui: string;
}) {
  const [demande, setDemande] = useState(false);
  const [enCours, demarrer] = useTransition();

  if (!demande) {
    return (
      <button
        type="button"
        onClick={() => setDemande(true)}
        className="text-[0.875rem] text-encre-douce underline decoration-bord-fort underline-offset-4 transition-colors hover:text-encre"
      >
        {libelle}
      </button>
    );
  }

  return (
    <span className="flex flex-wrap items-center gap-x-3 gap-y-2">
      <span className="text-[0.875rem] text-encre-douce">{question}</span>
      <button
        type="button"
        disabled={enCours}
        onClick={() =>
          demarrer(async () => {
            await action();
          })
        }
        className="rounded-full border border-bord-fort px-3.5 py-1 text-[0.875rem] text-encre transition-colors hover:border-encre disabled:opacity-60"
      >
        {enCours ? "…" : oui}
      </button>
      <button
        type="button"
        disabled={enCours}
        onClick={() => setDemande(false)}
        className="text-[0.875rem] text-encre-douce underline decoration-bord-fort underline-offset-4 transition-colors hover:text-encre disabled:opacity-60"
      >
        non
      </button>
    </span>
  );
}
