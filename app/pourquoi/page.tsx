import type { CSSProperties } from "react";
import Link from "next/link";
import { redirect } from "next/navigation";
import Collection from "@/components/Collection";
import DeposerQuestion from "@/components/DeposerQuestion";
import { personneConnectee, estEnfant } from "@/lib/session";
import { personnesDe, pourquoiVivant, questionsDe, rendezVousDe } from "@/lib/pourquoi";

/**
 * La boîte à pourquoi, côté enfant.
 *
 * L'écran n'apprend rien et n'explique rien : la transmission se fait en vrai,
 * à côté de lui. Ici il dépose, et il retrouve ce qui reste.
 *
 * C'est le seul endroit de l'application où c'est lui qui donne le programme
 * et l'adulte qui travaille. Pour un enfant dont l'angoisse est de ne pas
 * savoir, un endroit où ne pas savoir est le ticket d'entrée est un
 * renversement complet — et on ne peut pas rater une question.
 *
 * Tout ce que la page affiche de dynamique sort de `pourquoiVivant()`, qui ne
 * rend ni nombre, ni date, ni prénom, ni la préparation du parrain. La page ne
 * lit rien d'autre dans les questions.
 */

export const dynamic = "force-dynamic";

export default async function BoiteAPourquoi() {
  const moi = await personneConnectee();
  if (!moi) redirect("/entrer");
  /* Cet écran est le sien. Les adultes lisent les mêmes questions dans
     l'atelier, avec leurs propres gestes. */
  if (!estEnfant(moi)) redirect("/atelier");

  const [questions, personnes, rdv] = await Promise.all([
    questionsDe(moi.famille_id),
    personnesDe(moi.famille_id),
    rendezVousDe(moi.famille_id),
  ]);
  const vue = pourquoiVivant(questions, personnes, rdv, new Date());

  return (
    <main
      className="reglure chaleur flex-1"
      style={{ "--force-reglure": 0.3 } as CSSProperties}
    >
      <div className="au-dessus mx-auto max-w-3xl px-5 pb-20 pt-10 sm:px-8 sm:pt-14">
        {vue.parrain && (
          <p className="etiquette deplier text-encre-tenue">Ton {vue.parrain} et toi</p>
        )}

        <h1
          className="font-display deplier mt-3 text-[2.5rem] leading-[1.05] tracking-tight sm:text-[3rem]"
          style={{ animationDelay: "60ms" }}
        >
          La boîte à pourquoi.
        </h1>

        <p
          className="deplier mt-4 text-lg leading-relaxed text-encre-douce"
          style={{ animationDelay: "120ms" }}
        >
          Tu peux demander n’importe quoi. Même les trucs que tout le monde
          croit savoir.
          {vue.parrain && (
            <>
              {" "}
              Même les trucs que ton {vue.parrain} ne sait pas — c’est souvent
              les meilleurs.
            </>
          )}
        </p>

        <section
          className="deplier mt-9 rounded-feuille border border-reglure bg-feuille/70 p-6 sm:p-7"
          style={{ animationDelay: "180ms" }}
        >
          {vue.boite ? (
            <DeposerQuestion
              quiLit={vue.boite.quiLit}
              bouton={vue.boite.bouton}
              depose={vue.boite.depose}
            />
          ) : (
            /* Sans proche dans la famille, personne ne prépare. Le cas n'existe
               pas aujourd'hui ; s'il arrivait, on le dit au futur, sans rien
               lui reprocher et sans lui promettre ce que personne ne tiendra. */
            <p className="text-[1.0625rem] leading-relaxed text-encre-douce">
              La boîte s’ouvrira quand quelqu’un sera là pour préparer tes
              questions avec toi.
            </p>
          )}
        </section>

        {/* Ce qui est en route. Des phrases, jamais un statut ni un compte :
            une pile de questions en attente se lit comme une dette. */}
        {vue.enRoute.length > 0 && (
          <section className="deplier mt-9" style={{ animationDelay: "240ms" }}>
            <h2 className="etiquette text-encre-tenue">En ce moment</h2>
            <ul className="mt-4 space-y-4">
              {vue.enRoute.map((q) => (
                <li key={q.id} className="border-l-2 border-reglure pl-4 leading-relaxed">
                  <p className="font-display text-[1.125rem] tracking-tight">{q.texte}</p>
                  <p className="mt-1 text-[1rem] text-encre-douce">{q.phrase}</p>
                </li>
              ))}
            </ul>
          </section>
        )}

        <section className="deplier mt-12" style={{ animationDelay: "300ms" }}>
          <h2 className="font-display text-[1.625rem] tracking-tight sm:text-[1.875rem]">
            Ce qu’on a regardé, tous les deux.
          </h2>
          <div className="mt-6">
            <Collection cartes={vue.collection} vide={vue.vide} />
          </div>
        </section>

        <div className="mt-14 border-t border-reglure pt-5">
          <Link
            href="/journee"
            className="inline-block rounded-full border border-reglure px-5 py-3 text-[0.9375rem] text-encre-douce transition-colors hover:border-encre-tenue hover:text-encre"
          >
            Retour à ma journée
          </Link>
          {vue.rendezVous && (
            <p className="mt-5 flex flex-wrap items-baseline gap-x-3 gap-y-1">
              <span className="etiquette shrink-0 text-sarcelle">{vue.rendezVous.quand}</span>
              <span className="text-[1rem] leading-snug text-encre-douce">
                {vue.rendezVous.phrase}
              </span>
            </p>
          )}
        </div>
      </div>
    </main>
  );
}
