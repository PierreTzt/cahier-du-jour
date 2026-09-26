import Link from "next/link";
import type { Personne } from "@/lib/session";
import { Bureau } from "@/components/adulte/Bureau";

/**
 * La porte d'un écran réservé aux parents, vue par un proche.
 *
 * Une page qui explique plutôt qu'une erreur : le parrain n'est pas un intrus,
 * il est de l'autre côté d'une règle qu'on a promise à l'enfant. Son écran de
 * ressenti lui dit « ça part chez papa et maman, personne d'autre ne le lit » ;
 * le journal, le relevé et les consignes du soignant sont du même côté de cette
 * promesse.
 */
export default function ReserveAuxParents({ moi, quoi }: { moi: Personne; quoi: string }) {
  return (
    <Bureau
      qui={`${moi.prenom} · ${moi.role_affiche}`}
      titre={`${quoi} est réservé à ses parents.`}
      chapeau={
        <>
          Vous avez toute l’organisation : les journées, l’année, le manuel, les
          fiches, l’atelier et la vue du contrôle. Ce que l’enfant dépose le soir,
          ce que ses parents en notent et ce que le soignant leur recommande restent
          entre eux. Ce n’est pas une question de confiance : c’est que l’enfant
          doit pouvoir savoir exactement qui le lit.
        </>
      }
    >
      <div className="mt-8 flex flex-wrap gap-3">
        <Link
          href="/pilotage"
          className="rounded-full bg-encre px-6 py-3 text-base font-bold text-carte transition-colors hover:bg-encre/85"
        >
          La journée
        </Link>
        <Link
          href="/atelier"
          className="rounded-full border border-bord-fort px-5 py-3 text-[0.9375rem] text-encre transition-colors hover:bg-bureau"
        >
          L’atelier
        </Link>
      </div>
    </Bureau>
  );
}
