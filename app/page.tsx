import Link from "next/link";
import { redirect } from "next/navigation";
import type { CSSProperties } from "react";
import { personneConnectee, estEnfant } from "@/lib/session";

/**
 * L'entrée.
 *
 * Deux portes, et aucun nom. Le site est public : afficher les prénoms de la
 * famille reviendrait à publier sa composition à qui passe. C'est le code qui
 * dit qui vous êtes, pas une liste.
 *
 * Pas d'explication du concept, pas de démonstration, pas de bandeau. À huit
 * heures du matin on ouvre le site et on entre.
 */

export const dynamic = "force-dynamic";

export default async function Accueil() {
  const moi = await personneConnectee();
  /* Déjà connu de cet appareil : on ne lui redemande rien. */
  if (moi) redirect(estEnfant(moi) ? "/journee" : "/pilotage");

  return (
    <main
      className="reglure chaleur flex flex-1 flex-col"
      style={{ "--force-reglure": 0.45 } as CSSProperties}
    >
      <div className="au-dessus mx-auto flex w-full max-w-lg flex-1 flex-col justify-center px-5 py-20 sm:px-8">
        <h1 className="font-display text-[2.5rem] leading-[1.05] tracking-tight sm:text-[3rem]">
          Le cahier du jour.
        </h1>

        <div className="mt-12 flex flex-col gap-3">
          <Link
            href="/entrer?a=enfant"
            className="rounded-feuille bg-encre px-7 py-6 text-center text-xl font-bold text-feuille transition-colors hover:bg-encre/85"
          >
            Entrer
          </Link>
          <Link
            href="/entrer?a=adulte"
            className="rounded-feuille border border-reglure bg-feuille px-7 py-4 text-center text-[1.0625rem] text-encre-douce transition-colors hover:border-encre-tenue hover:text-encre"
          >
            Accès adulte
          </Link>
        </div>
      </div>
    </main>
  );
}
