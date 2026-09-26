import Link from "next/link";
import { notFound, redirect } from "next/navigation";
import { Bureau, Section, Carte, LienTete } from "@/components/adulte/Bureau";
import { MaterielFiche, TexteFiche } from "@/components/adulte/ContenuFiche";
import NoterResultatFiche from "@/components/adulte/NoterResultatFiche";
import { personneConnectee, entreeAdulte } from "@/lib/session";
import { ligne } from "@/lib/base";
import { aujourdhui } from "@/lib/journee";
import { ficheParCode, fichesDuRituel } from "@/lib/fiches";
import { aDesReponses } from "@/lib/fiches/mise-en-page";
import { questionsANoter, rangsDe, resultatsDeJournee } from "@/lib/resultat-fiche";
import { joursDuRituel } from "@/lib/trame";

/**
 * Une fiche, en entier. **Écran d'adulte.**
 *
 * C'est la réponse à une question du parrain, en regardant une journée : trois
 * séances sur sept portaient une leçon du manuel et s'ouvraient d'un clic ;
 * les quatre autres n'affichaient qu'un titre. « Dictée de phrases » ne dit
 * pas lesquelles. « Quinze mots de la liste en cours » renvoyait à une liste
 * qui n'existait nulle part, seize fois dans l'année.
 *
 * Cette page donne à l'adulte ce qu'il lui faut pour mener la séance sans rien
 * préparer : comment on s'y prend, le matériel exact, le corrigé, et ce qu'on
 * regarde ensuite.
 *
 * **Elle porte les corrigés, donc elle est fermée à l'enfant.** Même raison
 * que le manuel : il y trouverait les réponses, il aurait raison d'y aller, et
 * le relevé de ses parents deviendrait faux. `test/portes.test.ts` le vérifie.
 */

export const dynamic = "force-dynamic";

const MOIS = ["janvier","février","mars","avril","mai","juin","juillet","août","septembre","octobre","novembre","décembre"];

function courtEnFrancais(iso: string) {
  const d = new Date(`${iso}T12:00:00`);
  const n = d.getDate();
  return `${n === 1 ? "1er" : n} ${MOIS[d.getMonth()]}`;
}

const UUID = /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i;

export default async function UneFiche({
  params,
  searchParams,
}: {
  params: Promise<{ code: string }>;
  /* La séance d'où l'on vient, quand la fiche est ouverte depuis La journée. */
  searchParams: Promise<{ seance?: string }>;
}) {
  const moi = await personneConnectee();
  if (!moi) redirect(entreeAdulte("/fiches"));
  if (moi.role === "enfant") redirect("/journee");

  const { code } = await params;
  /* Un « % » mal formé dans l'adresse ferait lever `decodeURIComponent` : une
     adresse bricolée mérite une page introuvable, pas une erreur de serveur. */
  let demande = "";
  try {
    demande = decodeURIComponent(code);
  } catch {
    notFound();
  }
  const fiche = ficheParCode.get(demande);
  if (!fiche) notFound();

  /* Où cette fiche tombe dans l'année. La série est ordonnée, et la n-ième
     fiche sert la n-ième fois que le rituel revient : on peut donc dire la
     date sans l'avoir écrite nulle part. */
  const serie = fichesDuRituel(fiche.rituel);
  const rang = serie.findIndex((f) => f.code === fiche.code);
  const jours = joursDuRituel(fiche.rituel);
  const jour = rang >= 0 ? jours[rang] : undefined;
  const avant = serie[rang - 1];
  const apres = serie[rang + 1];

  const paires = aDesReponses(fiche.materiel, fiche.corrige);

  /* Ouverte depuis La journée, la fiche sait de quelle séance on vient : le
     résultat se note en bas, là où l'on est quand la séance finit. Au
     téléphone il fallait revenir à la journée, retrouver la carte et viser un
     lien de 21 px (critique du 21 septembre 2026). La séance doit être de
     cette famille et porter cette fiche ; sinon, rien — la fiche reste une
     fiche. */
  const demandee = (await searchParams).seance;
  const seance =
    demandee && UUID.test(demandee)
      ? await ligne<{ id: string; journee_id: string; jour: string }>(
          `select s.id, s.journee_id, j.jour::text as jour
             from seance s join journee j on j.id = s.journee_id
            where s.id = $1 and j.famille_id = $2 and s.fiche = $3 and s.lecon = ''`,
          [demandee, moi.famille_id, fiche.code],
        )
      : null;
  const resultat = seance
    ? ((await resultatsDeJournee(seance.journee_id)).get(seance.id) ?? null)
    : null;
  const questions = questionsANoter(fiche);

  return (
    <Bureau
      qui={`${moi.prenom} · ${moi.role_affiche}`}
      titre={fiche.titre}
      chapeau={
        <>
          Tout ce qu’il faut pour mener cette séance. Elle ne se passe pas à
          l’écran&nbsp;: c’est vous qui la menez, à l’ardoise, sur le cahier, à
          voix haute ou dehors.{" "}
          <strong className="font-bold text-encre">
            L’enfant ne voit pas cette page
          </strong>{" "}
          — elle porte les réponses.
        </>
      }
      actions={
        <>
          <LienTete href="/fiches">Toutes les fiches</LienTete>
          <LienTete href="/pilotage">La journée</LienTete>
        </>
      }
    >
      <div className="mt-6 flex flex-wrap items-baseline gap-x-5 gap-y-2 text-[0.9375rem]">
        <span className="etiquette text-encre-tenue">{fiche.rituel}</span>
        {rang >= 0 && (
          <span className="chiffres text-encre-tenue">
            {rang + 1}
            <sup>{rang === 0 ? "re" : "e"}</sup> fois sur {serie.length}
          </span>
        )}
        {jour && (
          <Link
            href={`/pilotage?jour=${jour}`}
            className="text-encre-douce underline decoration-bord-fort underline-offset-4 hover:text-encre"
          >
            tombe le {courtEnFrancais(jour)}
          </Link>
        )}
      </div>

      <Section titre="Comment on s’y prend">
        <Carte className="p-5 sm:p-6">
          <ol className="space-y-2.5">
            {fiche.mener.map((m, i) => (
              <li key={i} className="flex gap-3 text-[1.0625rem] leading-relaxed text-encre">
                <span className="chiffres shrink-0 text-encre-tenue">{i + 1}.</span>
                <span>
                  <TexteFiche texte={m} />
                </span>
              </li>
            ))}
          </ol>
        </Carte>
      </Section>

      <Section
        titre={paires ? "Le matériel, et les réponses" : "Le matériel"}
        aide={
          paires
            ? "À dicter ou à donner dans cet ordre. La réponse est en regard, pour vous seul."
            : "Ce qu’il faut avoir sous les yeux. Il n’y a rien d’autre à préparer."
        }
      >
        <Carte className="p-5 sm:p-6">
          <MaterielFiche materiel={fiche.materiel} corrige={fiche.corrige} />
        </Carte>
      </Section>

      {fiche.regarder && (
        <Section
          titre="Ce qu’on regarde"
          aide="Pas une note, pas un score : ce qui dit quoi reprendre demain."
        >
          <Carte accent="neutre" className="p-5">
            <p className="text-[1.0625rem] leading-relaxed text-encre-douce">
              <TexteFiche texte={fiche.regarder} />
            </p>
          </Carte>
        </Section>
      )}

      {seance && (
        <Section
          titre="Après la séance"
          aide="Ce qui est à revoir, et une note si besoin. Il ne voit rien de ce qui se note ici."
        >
          <NoterResultatFiche
            seanceId={seance.id}
            jour={seance.jour}
            questions={questions}
            resultat={resultat}
            rangsNotes={resultat ? rangsDe(questions, resultat.aRevoir) : []}
            sansRetrait
          />
          <Link
            href={`/pilotage${seance.jour === aujourdhui() ? "" : `?jour=${seance.jour}`}#seance-${seance.id}`}
            className="mt-6 inline-flex min-h-11 items-center text-[0.9375rem] text-encre-douce underline decoration-bord-fort underline-offset-4 hover:text-encre"
          >
            ← Revenir à la journée
          </Link>
        </Section>
      )}

      <nav className="mt-12 flex flex-wrap justify-between gap-4 border-t border-bord pt-6">
        {avant ? (
          <Link
            href={`/fiche/${avant.code}`}
            className="max-w-[20rem] text-[0.9375rem] text-encre-douce underline decoration-bord-fort underline-offset-4 hover:text-encre"
          >
            ← {avant.titre}
          </Link>
        ) : (
          <span />
        )}
        {apres && (
          <Link
            href={`/fiche/${apres.code}`}
            className="max-w-[20rem] text-right text-[0.9375rem] text-encre-douce underline decoration-bord-fort underline-offset-4 hover:text-encre"
          >
            {apres.titre} →
          </Link>
        )}
      </nav>
    </Bureau>
  );
}
