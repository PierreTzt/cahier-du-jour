import type { CSSProperties } from "react";
import Link from "next/link";
import { redirect } from "next/navigation";
import Collection from "@/components/Collection";
import { personneConnectee, estEnfant } from "@/lib/session";
import { cahierVivant, tracesDe } from "@/lib/valorisation";

/**
 * Ce que l'enfant a fabriqué.
 *
 * La valorisation demandée par un parent, dans sa forme durable : des choses
 * qui existent, pas des exercices réussis. On ne peut pas rater un volcan.
 *
 * Mêmes contraintes que la collection du parrain, et pour la même raison : ni
 * nombre, ni date, ni ordre chronologique (`cahierVivant`, vérifié par
 * `npm test`). Rien n'attend une trace par jour, donc rien ne peut manquer —
 * c'est ce qui sépare ce cahier d'un carnet de bons points, où l'absence est
 * le message le plus fort.
 *
 * Le titre ne dit pas « mon cahier » : dans l'en-tête, « Mon cahier » est déjà
 * sa journée.
 */

export const dynamic = "force-dynamic";

export default async function CeQueJaiFabrique() {
  const moi = await personneConnectee();
  if (!moi) redirect("/entrer");
  /* Cet écran est le sien. Les adultes voient les traces, datées, sur le
     bureau — et c'est là qu'ils les écrivent. */
  if (!estEnfant(moi)) redirect("/pilotage");

  const cartes = cahierVivant(await tracesDe(moi.famille_id));

  return (
    <main
      className="reglure chaleur flex-1"
      style={{ "--force-reglure": 0.45 } as CSSProperties}
    >
      <div className="au-dessus mx-auto max-w-2xl px-5 pb-20 pt-12 sm:px-8 sm:pt-14">
        <p className="etiquette deplier text-encre-tenue">À toi</p>

        <h1
          className="font-display deplier mt-3 text-[2.5rem] leading-[1.05] tracking-tight sm:text-[3rem]"
          style={{ animationDelay: "60ms" }}
        >
          Ce que j’ai fabriqué.
        </h1>

        {/* Seulement quand il y a quelque chose : au-dessus d'une collection
            vide, une phrase au passé se lirait comme un manque. Le vide, lui,
            se dit au futur, dans la collection. */}
        {cartes.length > 0 && (
          <p
            className="deplier mt-4 text-lg leading-relaxed text-encre-douce"
            style={{ animationDelay: "120ms" }}
          >
            Des choses que tu as faites, et qui existent pour de vrai.
          </p>
        )}

        <div className="deplier mt-10" style={{ animationDelay: "180ms" }}>
          <Collection
            cartes={cartes}
            vide="Ici, il y aura les choses que tu auras fabriquées."
          />
        </div>

        <div className="mt-14 border-t border-reglure pt-5">
          <Link
            href="/journee"
            className="inline-block rounded-full border border-reglure px-5 py-3 text-[0.9375rem] text-encre-douce transition-colors hover:border-encre-tenue hover:text-encre"
          >
            Retour à ma journée
          </Link>
        </div>
      </div>
    </main>
  );
}
