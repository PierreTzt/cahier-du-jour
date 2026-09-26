import Link from "next/link";
import type { LigneRelevee } from "@/lib/releve";

/**
 * Ce qui n'est pas passé dans une leçon, exercice par exercice : l'énoncé, ce
 * qu'il a répondu, ce qu'on attendait, et la partie du cours qui l'explique.
 * « Six sur huit » ne dit pas quoi reprendre demain ; ça, si — au morceau
 * près.
 *
 * Le soir de La journée et la page de la cloche le montrent pareil.
 *
 * Sa réponse est posée sur son papier — le crème de son cahier, bordé de la
 * réglure : ce qui vient de lui se reconnaît sans lire la phrase (carte
 * blanche du parrain, 21 septembre 2026). Ce qu'on attendait reste en encre.
 */
export default function Ecarts({ ecarts, lecon }: { ecarts: LigneRelevee[]; lecon: string }) {
  return (
    <ul className="mt-3 space-y-3">
      {ecarts.map((e) => (
        <li key={e.enonce}>
          <p className="text-[0.9375rem] leading-relaxed text-encre-douce">{e.enonce}</p>
          <p className="mt-1.5 flex flex-wrap items-baseline gap-x-2 gap-y-1.5 text-[0.875rem] text-encre-tenue">
            <span>{e.saitPas ? "il a dit" : "il a répondu"}</span>
            <span className="rounded-md border border-reglure bg-papier-chaud px-2 py-0.5 text-[0.9375rem] font-bold text-encre">
              {e.saitPas ? "je ne sais pas" : e.donne}
            </span>
            <span>
              on attendait <span className="font-bold text-encre">{e.attendu}</span>
            </span>
          </p>
          {e.passage && (
            <p className="mt-1.5 text-[0.875rem] leading-relaxed text-encre-tenue">
              dans le cours :{" "}
              <Link
                href={`/manuel/${lecon}#partie-${e.passage.numero}`}
                className="text-encre-douce underline decoration-bord-fort underline-offset-4 hover:text-encre"
              >
                {/* Sans guillemets autour : certains titres en portent déjà
                    (« Chiffre des » et « nombre de »…), et le soulignement
                    suffit à dire où il commence et finit. */}
                {e.passage.titre ?? "le début"}
              </Link>
            </p>
          )}
        </li>
      ))}
    </ul>
  );
}
