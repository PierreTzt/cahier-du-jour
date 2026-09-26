import type { Personne } from "@/lib/session";
import { estParent, estProche } from "@/lib/session";
import { Section, Carte } from "@/components/adulte/Bureau";
import FormulaireSortie from "@/components/adulte/FormulaireSortie";
import RetirerAvecConfirmation from "@/components/adulte/RetirerAvecConfirmation";
import { retirerSortie } from "@/app/gestes/sorties";
import { sortiesDe, enToutesLettres, LIMITES_SORTIE, type Sortie } from "@/lib/sorties";
import { matieres, teintesDe } from "@/lib/data";

/**
 * Les sorties, dans le pilotage : en noter une, relire celles qui le sont.
 *
 * Un marché, un musée, un chantier regardé depuis le trottoir **sont** de
 * l'instruction en famille, et c'est ce qu'un contrôle cherche à établir. Un
 * tableau de séances cochées montre un programme ; une sortie racontée montre
 * une instruction vivante.
 *
 * Côté adultes seulement, les trois : l'enfant ne voit pas cette liste. Le
 * pilotage renvoie déjà l'enfant vers sa journée, et ce composant ne compte pas
 * dessus — il ne rend rien à qui n'est pas un adulte.
 */

/* Au-delà, les plus anciennes se replient. Le pilotage est une page qu'on ouvre
   tous les jours ; une année de sorties dépliées la rallongerait sans fin,
   alors que c'est la dernière notée qu'on vient vérifier. */
const RECENTES = 5;

export default async function NoterSortie(props: { jour: string; moi: Personne }) {
  const { jour, moi } = props;
  if (!estParent(moi) && !estProche(moi)) return null;

  const sorties = await sortiesDe(moi.famille_id);
  const recentes = sorties.slice(0, RECENTES);
  const anciennes = sorties.slice(RECENTES);

  return (
    <Section
      titre="Les sorties"
      aide={
        <>
          Un marché, un musée, un chantier regardé une heure&nbsp;: ça compte pour
          le contrôle et le relevé. Il ne voit pas cette liste.
        </>
      }
    >
      <FormulaireSortie jour={jour} limites={LIMITES_SORTIE} />

      {sorties.length === 0 ? (
        <p className="mt-5 text-[1.0625rem] text-encre-tenue">
          Aucune sortie notée pour l’instant.
        </p>
      ) : (
        <>
          <ul className="mt-6 space-y-3">
            {recentes.map((s) => (
              <li key={s.id}>
                <UneSortie s={s} moi={moi} />
              </li>
            ))}
          </ul>

          {anciennes.length > 0 && (
            <details className="mt-4">
              <summary className="cursor-pointer text-[0.9375rem] text-encre-douce underline decoration-bord-fort underline-offset-4 transition-colors hover:text-encre">
                {anciennes.length === 1
                  ? "Une sortie plus ancienne"
                  : `Les ${anciennes.length} sorties plus anciennes`}
              </summary>
              <ul className="mt-3 space-y-3">
                {anciennes.map((s) => (
                  <li key={s.id}>
                    <UneSortie s={s} moi={moi} />
                  </li>
                ))}
              </ul>
            </details>
          )}
        </>
      )}
    </Section>
  );
}

function UneSortie({ s, moi }: { s: Sortie; moi: Personne }) {
  const par =
    s.par_adulte === moi.id
      ? "notée par vous"
      : s.par_prenom
        ? `notée par ${s.par_prenom}`
        : null;

  return (
    <Carte className="p-5">
      <div className="flex flex-wrap items-baseline justify-between gap-x-5 gap-y-1">
        <h3 className="font-display text-[1.125rem] leading-snug tracking-tight">
          {s.titre}
        </h3>
        <span className="chiffres text-[0.9375rem] text-encre-tenue">
          {enToutesLettres(s.jour, { avecLeJour: true })}
        </span>
      </div>

      {s.lieu && (
        <p className="mt-1 text-[0.9375rem] text-encre-tenue">{s.lieu}</p>
      )}

      {/* Tel qu'il a été écrit, retours à la ligne compris. */}
      <p className="mt-3 whitespace-pre-line text-[1.0625rem] leading-relaxed text-encre-douce">
        {s.quoi}
      </p>

      <div className="mt-4 flex flex-wrap items-center justify-between gap-x-5 gap-y-2 border-t border-bord pt-3">
        <ul className="flex flex-wrap items-center gap-x-4 gap-y-1">
          {s.matieres.map((m) => (
            <li key={m} className="text-[0.875rem] text-encre-douce">
              <span
                aria-hidden
                className={`mr-2 inline-block h-2 w-2 rounded-full align-middle ${teintesDe(m).puce}`}
              />
              {matieres[m].nom}
            </li>
          ))}
        </ul>
        <span className="flex flex-wrap items-center gap-x-4 gap-y-2">
          {par && <span className="text-[0.875rem] text-encre-tenue">{par}</span>}
          {s.par_adulte === moi.id && (
            <RetirerAvecConfirmation
              action={retirerSortie.bind(null, s.id)}
              libelle="effacer"
              question={"L’effacer pour de bon ?"}
              oui="oui, l’effacer"
            />
          )}
        </span>
      </div>
    </Carte>
  );
}
