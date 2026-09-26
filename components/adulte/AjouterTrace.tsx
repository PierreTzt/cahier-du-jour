import { Section, Carte } from "@/components/adulte/Bureau";
import NoterUneTrace from "@/components/adulte/NoterUneTrace";
import RetirerAvecConfirmation from "@/components/adulte/RetirerAvecConfirmation";
import { retirerUneTrace } from "@/app/gestes/valorisation";
import type { Personne } from "@/lib/session";
import { classesTeinte, matieres } from "@/lib/data";
import {
  dateEnFrancais,
  estMatiere,
  tracesDe,
  type LigneTrace,
} from "@/lib/valorisation";

/**
 * Noter une trace — une chose que l'enfant a fabriquée.
 *
 * La règle qui protège tout le dispositif : **ce qu'il a fabriqué, pas ce
 * qu'il a réussi.** Un volcan, une lettre, une carte dessinée de mémoire — un
 * objet, pas un résultat. On ne peut pas rater un dessin, alors qu'on peut
 * rater une division ; si la trace se mettait à consigner des exercices menés
 * à bien, elle redeviendrait un bulletin et l'absence de trace vaudrait échec.
 *
 * De ce côté-ci, les traces sont datées et rangées de la plus récente à la
 * plus ancienne : c'est ce qui sert à s'y retrouver. Du côté de l'enfant,
 * `/cahier` les montre sans date, sans nombre et sans ordre.
 */

/* Au-delà, les plus anciennes se replient : la page du jour est déjà longue,
   et une année de traces la rallongerait d'autant. */
const VISIBLES = 5;

export default async function AjouterTrace({ moi }: { moi: Personne }) {
  const traces = await tracesDe(moi.famille_id);
  const recentes = traces.slice(0, VISIBLES);
  const anciennes = traces.slice(VISIBLES);

  return (
    <Section
      titre="Ce qu’il a fabriqué"
      aide={
        <>
          Un objet, un texte, un dessin, une expérience — ce qu’il a fait, pas
          ce qu’il a réussi. Il les retrouve depuis sa journée, sans date ni
          nombre.
        </>
      }
    >
      <NoterUneTrace />

      {recentes.length > 0 && (
        <ul className="mt-5 space-y-2">
          {recentes.map((t) => (
            <UneTrace key={t.id} t={t} moi={moi} />
          ))}
        </ul>
      )}

      {anciennes.length > 0 && (
        <details className="mt-3">
          <summary className="cursor-pointer text-[0.9375rem] text-encre-douce underline decoration-bord-fort underline-offset-4 hover:text-encre">
            {anciennes.length === 1
              ? "La plus ancienne"
              : `Les ${anciennes.length} plus anciennes`}
          </summary>
          <ul className="mt-3 space-y-2">
            {anciennes.map((t) => (
              <UneTrace key={t.id} t={t} moi={moi} />
            ))}
          </ul>
        </details>
      )}
    </Section>
  );
}

function UneTrace({ t, moi }: { t: LigneTrace; moi: Personne }) {
  const matiere = estMatiere(t.matiere) ? matieres[t.matiere] : null;
  const teinte = matiere ? classesTeinte[matiere.teinte] : null;
  const deMoi = t.par_adulte === moi.id;

  return (
    <li>
      <Carte className="p-4">
        <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
          <span className={`etiquette ${teinte?.texte ?? "text-encre-tenue"}`}>
            {matiere?.nom ?? t.matiere}
          </span>
          <h3 className="font-display text-[1.125rem] leading-snug tracking-tight">
            {t.titre}
          </h3>
        </div>
        {t.quoi && (
          <p className="mt-1.5 whitespace-pre-line text-[0.9375rem] leading-relaxed text-encre-douce">
            {t.quoi}
          </p>
        )}
        <div className="mt-2 flex flex-wrap items-baseline gap-x-3 gap-y-1 text-[0.875rem] text-encre-tenue">
          <span className="chiffres">{dateEnFrancais(t.cree_le)}</span>
          <span>
            {deMoi ? "par vous" : t.par_prenom ? `par ${t.par_prenom}` : "par un adulte qui n’a plus d’accès"}
          </span>
          {deMoi && (
            <RetirerAvecConfirmation
              action={retirerUneTrace.bind(null, t.id)}
              libelle="retirer"
              question="Elle disparaîtra de son cahier."
              oui="retirer cette trace"
            />
          )}
        </div>
      </Carte>
    </li>
  );
}
