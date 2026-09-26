import { redirect } from "next/navigation";
import { Bureau, Section, Carte } from "@/components/adulte/Bureau";
import ReserveAuxParents from "@/components/adulte/ReserveAuxParents";
import FormulaireConsigne from "@/components/adulte/FormulaireConsigne";
import RetirerAvecConfirmation from "@/components/adulte/RetirerAvecConfirmation";
import { retirerConsigne } from "@/app/gestes/suivi";
import { personneConnectee, estParent, type Personne, entreeAdulte } from "@/lib/session";
import { consignesDe, repartir, LIMITES_CONSIGNE, type Consigne } from "@/lib/suivi";
import { enToutesLettres } from "@/lib/sorties";

/**
 * Ce que le soignant recommande. **Réservé aux parents.**
 *
 * Le relevé part chez eux et rien ne revient : leurs consignes vivaient dans
 * la mémoire des adultes, donc différemment dans chaque maison, et pas du tout
 * chez celui qui n'était pas au rendez-vous. Écrites une fois, elles
 * s'appliquent pareil des deux côtés.
 *
 * Réservé aux parents : une consigne de soin n'est pas une donnée
 * d'organisation, même quand elle change la façon d'accompagner. Le parrain,
 * qui accompagne aussi, lit pourquoi la porte est fermée plutôt qu'une erreur ;
 * l'enfant retourne à sa journée. Les deux vérifications viennent **avant** la
 * lecture des consignes, et `test/suivi.test.ts` tient cet ordre.
 */

export const dynamic = "force-dynamic";

export default async function Suivi() {
  const moi = await personneConnectee();
  if (!moi) redirect(entreeAdulte("/suivi"));
  if (moi.role === "enfant") redirect("/journee");
  if (!estParent(moi)) return <ReserveAuxParents moi={moi} quoi="Le suivi médical" />;

  const { actives, retirees } = repartir(await consignesDe(moi.famille_id));

  return (
    <Bureau
      qui={`${moi.prenom} · ${moi.role_affiche}`}
      titre="Ce qu’on nous demande de faire."
      chapeau="Les consignes du soignant, écrites une fois et lues pareil dans chaque maison. Sans ça, elles s’appliquent de mémoire — donc différemment d’un foyer à l’autre, et pas du tout chez celui qui n’était pas au rendez-vous."
    >
      {/* La limite, dite en clair et avant tout le reste : ce n'est pas un
          dossier de santé. */}
      <Carte accent="neutre" className="mt-8 p-5 sm:p-6">
        <p className="text-[1.0625rem] leading-relaxed text-encre-douce">
          On note ici{" "}
          <strong className="font-bold text-encre">ce qu’on doit faire</strong>,
          avec sa raison — <strong className="font-bold text-encre">jamais ce
          qui a été dit du dossier</strong>. Pas de diagnostic, pas de compte
          rendu d’entretien, aucune donnée médicale&nbsp;: une consigne pratique
          n’est pas un dossier de santé. Seuls ses parents lisent cette page.
        </p>
      </Carte>

      <Section
        titre="Les consignes en cours"
        aide={
          <>
            Une consigne qui ne s’applique plus se retire. Elle ne s’efface
            pas&nbsp;: on la retrouve parmi ce qui a été essayé.
          </>
        }
      >
        {actives.length === 0 ? (
          <p className="text-[1.0625rem] text-encre-tenue">
            Aucune consigne notée pour l’instant.
          </p>
        ) : (
          <ul className="space-y-4">
            {actives.map((c) => (
              <li key={c.id}>
                <UneConsigne c={c} moi={moi} />
              </li>
            ))}
          </ul>
        )}
      </Section>

      <Section titre="En noter une">
        <FormulaireConsigne limites={LIMITES_CONSIGNE} />
      </Section>

      {retirees.length > 0 && (
        <Section
          titre="Ce qui a été essayé"
          aide="Les consignes qui ne s’appliquent plus. On les garde pour savoir ce qui a déjà été tenté, et pourquoi."
        >
          {/* Repliées : elles ne doivent pas se lire comme des consignes en
              cours, ni allonger la page qu'on ouvre pour savoir quoi faire. */}
          <details>
            <summary className="cursor-pointer text-[0.9375rem] text-encre-douce underline decoration-bord-fort underline-offset-4 transition-colors hover:text-encre">
              {retirees.length === 1
                ? "Afficher la consigne retirée"
                : `Afficher les ${retirees.length} consignes retirées`}
            </summary>
            <ul className="mt-4 space-y-4">
              {retirees.map((c) => (
                <li key={c.id}>
                  <UneConsigne c={c} moi={moi} />
                </li>
              ))}
            </ul>
          </details>
        </Section>
      )}
    </Bureau>
  );
}

function UneConsigne({ c, moi }: { c: Consigne; moi: Personne }) {
  const par =
    c.par_adulte === moi.id
      ? "notée par vous"
      : c.par_prenom
        ? `notée par ${c.par_prenom}`
        : "notée";

  return (
    <Carte className="p-5 sm:p-6">
      <p className="font-display text-[1.25rem] leading-snug tracking-tight">
        {c.texte}
      </p>

      {c.pourquoi && (
        /* La raison voyage avec la consigne : une consigne dont on a oublié le
           pourquoi finit appliquée de travers. */
        <p className="mt-3 whitespace-pre-line border-l-2 border-bord pl-4 text-[1rem] leading-relaxed text-encre-douce">
          {c.pourquoi}
        </p>
      )}

      <div className="mt-4 flex flex-wrap items-center justify-between gap-x-5 gap-y-2">
        <p className="text-[0.875rem] text-encre-tenue">
          {c.origine} · {par} le {enToutesLettres(c.notee_le)}
          {c.retiree_le && ` · retirée le ${enToutesLettres(c.retiree_le)}`}
        </p>
        {!c.retiree_le && (
          <RetirerAvecConfirmation
            action={retirerConsigne.bind(null, c.id)}
            libelle="elle ne s’applique plus"
            question={"La retirer des consignes en cours ?"}
            oui="oui, la retirer"
          />
        )}
      </div>
    </Carte>
  );
}
