"use client";

import { useTransition } from "react";
import Link from "next/link";
import { arreterJournee, reprendreJournee } from "@/app/actions";
import { recharger } from "@/lib/recharger";

/**
 * Les deux gestes du bas de journée.
 *
 * « On arrête pour aujourd'hui » ne demande ni motif ni confirmation :
 * exiger de se justifier au moment de l'effondrement, c'est ajouter une
 * évaluation à une crise d'évaluation. Et revenir sur sa décision lui
 * appartient — l'application ne referme pas ce qu'il vient de rouvrir.
 */
export default function GestesJournee({
  ouverte,
  arretee,
  ressentiDepose,
  vide,
}: {
  ouverte: boolean;
  arretee: boolean;
  ressentiDepose: boolean;
  /* Une journée sans séance n'a rien à arrêter : proposer « on arrête »
     laisserait croire qu'il y avait quelque chose à faire. */
  vide: boolean;
}) {
  const [enCours, demarrer] = useTransition();

  if (vide) return null;

  if (ouverte) {
    return (
      <button
        type="button"
        disabled={enCours}
        onClick={() =>
          demarrer(async () => {
            /* Refusé (session perdue, page d'hier) : on montre l'état réel. */
            if (!(await arreterJournee())) recharger();
          })
        }
        className="rounded-full border border-reglure px-5 py-2.5 text-[0.9375rem] text-encre-douce transition-colors hover:border-encre-tenue hover:text-encre disabled:opacity-60"
      >
        On arrête pour aujourd’hui
      </button>
    );
  }

  if (ressentiDepose) {
    /* Le mot d'un adulte s'y lit, et il s'écrit souvent après : un parent le
       laisse le soir, quand l’enfant a déjà dit comment il se sent. Il faut
       donc pouvoir y revenir. Le lien est là **tous les soirs**, avec ou sans
       mot — un lien qui n'apparaîtrait que les soirs où quelqu'un a écrit
       ferait parler son absence les autres soirs. */
    return (
      <p className="text-[0.9375rem] text-encre-douce">
        Tu as dit comment tu te sens. Bonne soirée.{" "}
        <Link
          href="/ressenti"
          className="underline decoration-reglure underline-offset-4 transition-colors hover:text-encre"
        >
          La fin de ma journée
        </Link>
      </p>
    );
  }

  return (
    <div className="flex flex-wrap items-center gap-4">
      <Link
        href="/ressenti"
        className="rounded-full bg-encre px-5 py-3 text-[0.9375rem] font-bold text-feuille transition-colors hover:bg-encre/85"
      >
        Dire comment je me sens
      </Link>
      {arretee && (
        <button
          type="button"
          disabled={enCours}
          onClick={() =>
            demarrer(async () => {
              if (!(await reprendreJournee())) recharger();
            })
          }
          className="text-[0.9375rem] text-encre-douce underline decoration-reglure underline-offset-4 transition-colors hover:text-encre disabled:opacity-60"
        >
          Finalement, je continue
        </button>
      )}
    </div>
  );
}
