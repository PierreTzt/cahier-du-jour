"use client";

import { useTransition } from "react";
import { terminerSeance, reporterSeance } from "@/app/actions";
import { useConstat } from "@/components/ConstatEtape";
import { recharger } from "@/lib/recharger";

/**
 * Les deux issues d'une séance.
 *
 * « J'ai fini » et « je bloque ». Le second n'est pas un échec et le
 * vocabulaire le dit : on met de côté. Aucun motif n'est demandé, aucune
 * confirmation — exiger de se justifier au moment où on cale, c'est ajouter
 * une évaluation à une difficulté.
 *
 * Sur une leçon du programme, `sansTerminer` retire « J'ai fini » : c'est la
 * fin des exercices qui referme la séance, et deux façons de la terminer
 * laisseraient croire qu'on peut la déclarer faite sans l'avoir faite.
 * « Je bloque » reste, lui, du début à la fin.
 *
 * Le constat qui suit (« C'est fait », « C'est mis de côté ») est posé plus
 * haut, dans `ConstatEtape` : voir pourquoi là-bas. Et quand le geste n'a
 * rien écrit — séance retirée entre-temps, page d'hier —, l'écran se recharge
 * au lieu de confirmer ce qui n'a pas eu lieu.
 */
export default function GestesEtape({
  seanceId,
  titre,
  sansTerminer,
}: {
  seanceId: string;
  titre: string;
  sansTerminer?: boolean;
}) {
  const [enCours, demarrer] = useTransition();
  const conclure = useConstat();

  function geste(action: (id: string) => Promise<boolean>, issue: "fait" | "cote") {
    demarrer(async () => {
      if (await action(seanceId)) conclure({ issue, titre });
      else recharger();
    });
  }

  return (
    <div
      className={`flex flex-wrap items-center gap-4 ${sansTerminer ? "" : "mt-8"}`}
    >
      {!sansTerminer && (
        <button
          type="button"
          disabled={enCours}
          onClick={() => geste(terminerSeance, "fait")}
          className="rounded-full bg-encre px-7 py-3.5 text-base font-bold text-feuille transition-colors hover:bg-encre/85 disabled:opacity-60"
        >
          J’ai fini
        </button>
      )}

      <button
        type="button"
        disabled={enCours}
        onClick={() => geste(reporterSeance, "cote")}
        className="text-[0.9375rem] text-encre-douce underline decoration-reglure underline-offset-4 transition-colors hover:text-encre disabled:opacity-60"
      >
        Je bloque, on met de côté
      </button>
    </div>
  );
}
