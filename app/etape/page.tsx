import type { CSSProperties } from "react";
import Link from "next/link";
import { redirect } from "next/navigation";
import Cours from "@/components/Cours";
import GestesEtape from "@/components/GestesEtape";
import ConstatEtape from "@/components/ConstatEtape";
import { matieres, teintesDe } from "@/lib/data";
import { personneConnectee, estEnfant } from "@/lib/session";
import { estUneReprise, leconParCode, poserLecon } from "@/lib/programme";
import { travailDeSeance, codesInscrits } from "@/lib/travail";
import { aujourdhui, journeeDe, journeeVivante, seancesDe } from "@/lib/journee";

/**
 * Une seule séance à l'écran.
 *
 * Rien d'autre n'est visible : ni ce qui précède, ni ce qui suit, ni combien
 * il en reste. Un enfant qui voit la pile entière en mesure la hauteur.
 *
 * Deux formes de séance cohabitent, et c'est volontaire :
 *
 *   - celle qu'un adulte a écrite à la main — un titre, une consigne, et le
 *     travail se fait ailleurs. C'est ce qui existait, et il faut que ça
 *     continue d'exister : en instruction en famille, tout ne passe pas par
 *     un écran ;
 *   - celle qui porte une leçon du programme : le cours s'affiche, puis les
 *     exercices un par un. Le brouillon reste sur papier, seul le résultat
 *     s'inscrit.
 */

export const dynamic = "force-dynamic";

export default async function EtapeEnCours() {
  const moi = await personneConnectee();
  if (!moi) redirect("/entrer");
  /* L'écran de l'enfant : un adulte lit la leçon dans le manuel, où les
     réponses sont, et ne peut pas inscrire de résultat à sa place. */
  if (!estEnfant(moi)) redirect("/pilotage");

  const jour = await journeeDe(moi.famille_id, aujourdhui());
  /* Un jour de repos n'a rien à faire, même une leçon commencée que le ton a
     gardée : sa journée lui dit « Aujourd'hui, il n'y a rien », et cet écran
     ne doit pas le contredire (seconde critique du 16 septembre). */
  if (jour.ton === "repos") redirect("/journee");
  const seances = await seancesDe(jour.id);
  const vue = journeeVivante(seances, jour.cloture);
  const etape = vue.courante;
  /* La partie du test est une étape, mais son écran est `/questions` : ici
     elle offrirait « J'ai fini » sans une seule question posée. */
  if (etape?.test) redirect("/questions");

  if (!etape) {
    return (
      <ConstatEtape>
        <main
          className="reglure chaleur flex flex-1 flex-col"
          style={{ "--force-reglure": 0.45 } as CSSProperties}
        >
          <div className="au-dessus deplier mx-auto flex w-full max-w-xl flex-1 flex-col justify-center px-5 py-20 sm:px-8">
            <h1 className="font-display text-4xl tracking-tight sm:text-5xl">
              {jour.cloture === "terminee" ? "Tout est fait." : "Il n’y a rien là."}
            </h1>
            <p className="mt-4 text-lg text-encre-douce">
              Il n’y a plus rien à faire aujourd’hui.
            </p>
            <Link
              href="/journee"
              className="mt-10 self-start rounded-full bg-encre px-6 py-3 text-base font-bold text-feuille transition-colors hover:bg-encre/85"
            >
              Retour à ma journée
            </Link>
          </div>
        </main>
      </ConstatEtape>
    );
  }

  const t = teintesDe(etape.matiere);
  const lecon = etape.lecon ? leconParCode.get(etape.lecon) : undefined;
  const travail = lecon ? await travailDeSeance(etape.id) : [];

  /* ---------------------------------------------------------------- */
  /* Une leçon du programme : le cours, puis les exercices             */
  /* ---------------------------------------------------------------- */

  if (lecon) {
    return (
      <ConstatEtape>
        <main
          className="reglure chaleur flex-1"
          style={{ "--force-reglure": 0.45 } as CSSProperties}
        >
          <div className="au-dessus mx-auto w-full max-w-2xl px-5 pb-20 pt-10 sm:px-8 sm:pt-14">
            <p className={`etiquette ${t.texte}`}>{matieres[etape.matiere].nom}</p>

            <h1 className="font-display mt-3 text-[2rem] leading-tight tracking-tight sm:text-[2.5rem]">
              {lecon.titre}
            </h1>

            <div className="mt-8">
              <Cours
                key={etape.id}
                lecon={poserLecon(lecon, etape.titre, codesInscrits(travail))}
                reprise={estUneReprise(etape.titre)}
                seanceId={etape.id}
                dejaFaits={codesInscrits(travail)}
              />
            </div>

            <div className="mt-10 border-t border-reglure pt-5">
              {/* « Je bloque » reste disponible pendant toute la leçon : mettre
                  de côté n'est pas échouer, et c'est la règle n°8. */}
              <GestesEtape seanceId={etape.id} titre={lecon.titre} sansTerminer />
              <Link
                href="/journee"
                className="mt-5 inline-block text-[0.9375rem] text-encre-douce underline decoration-reglure underline-offset-4 transition-colors hover:text-encre"
              >
                Revoir ma journée
              </Link>
            </div>
          </div>
        </main>
      </ConstatEtape>
    );
  }

  /* ---------------------------------------------------------------- */
  /* Une séance écrite à la main                                       */
  /* ---------------------------------------------------------------- */

  return (
    <ConstatEtape>
      <main
        className="reglure chaleur flex flex-1 flex-col"
        style={{ "--force-reglure": 0.45 } as CSSProperties}
      >
        <div className="au-dessus deplier mx-auto flex w-full max-w-2xl flex-1 flex-col justify-center px-5 py-16 sm:px-8">
          <p className={`etiquette ${t.texte}`}>{matieres[etape.matiere].nom}</p>

          <h1 className="font-display mt-3 text-[2.25rem] leading-tight tracking-tight sm:text-[2.75rem]">
            {etape.titre}
          </h1>

          {etape.reference && (
            <p className="mt-3 text-[0.9375rem] text-encre-tenue">{etape.reference}</p>
          )}

          <div className={`mt-7 rounded-feuille border border-l-[6px] ${t.bord} ${t.bordG} bg-feuille p-5 sm:p-6`}>
            <p className="text-[1.125rem] leading-relaxed text-encre">
              {etape.consigne}
            </p>
          </div>

          {/* La durée est indicative et le reste : rien ne la mesure, rien ne
              la compare, personne ne saura s'il a mis le double. */}
          <p className="mt-4 text-sm text-encre-tenue">
            à peu près {etape.minutes} minutes
          </p>

          <GestesEtape seanceId={etape.id} titre={etape.titre} />

          <Link
            href="/journee"
            className="mt-10 self-start text-[0.9375rem] text-encre-douce underline decoration-reglure underline-offset-4 transition-colors hover:text-encre"
          >
            Revoir ma journée
          </Link>
        </div>
      </main>
    </ConstatEtape>
  );
}
