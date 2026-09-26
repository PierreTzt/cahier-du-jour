"use client";

import { useState, useTransition } from "react";
import Link from "next/link";
import { ajouterLecon } from "@/app/actions";

/**
 * Placer, depuis le manuel, la leçon qu'on est en train de lire.
 *
 * Le geste le plus fréquent après avoir lu une leçon est de la donner — et
 * refermer la page pour aller la rechercher dans la bibliothèque serait une
 * corvée gratuite.
 *
 * Aujourd'hui seulement, et c'est volontaire. Choisir une date est déjà
 * possible depuis la journée elle-même, où l'on voit ce qu'il y a d'autre ce
 * jour-là ; un second sélecteur de date ici permettrait de charger un jeudi
 * sans jamais regarder ce qu'il contient.
 */
export default function AjouterDepuisLeManuel({ code }: { code: string }) {
  const [enCours, demarrer] = useTransition();
  const [pose, setPose] = useState(false);

  if (pose) {
    return (
      <p className="text-[0.9375rem] text-fini">
        Ajoutée à sa journée d’aujourd’hui.{" "}
        <Link
          href="/pilotage"
          className="underline decoration-bord-fort underline-offset-4 hover:text-encre"
        >
          Voir la journée
        </Link>
      </p>
    );
  }

  return (
    <p className="flex flex-wrap items-baseline gap-x-4 gap-y-2">
      <button
        type="button"
        disabled={enCours}
        onClick={() =>
          demarrer(async () => {
            /* « ajoutée » seulement si elle l'a été. */
            setPose(await ajouterLecon(code));
          })
        }
        className="rounded-full border border-bord-fort px-4 py-1.5 text-[0.9375rem] text-encre transition-colors hover:border-encre disabled:opacity-60"
      >
        {enCours ? "…" : "l’ajouter à sa journée d’aujourd’hui"}
      </button>
      <span className="text-[0.875rem] text-encre-tenue">
        pour un autre jour, passez par la journée : on y voit ce qu’il y a déjà.
      </span>
    </p>
  );
}
