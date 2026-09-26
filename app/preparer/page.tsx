import Link from "next/link";
import { redirect } from "next/navigation";
import { Bureau, Section, Carte, LienTete } from "@/components/adulte/Bureau";
import SurOrdinateur from "@/components/adulte/SurOrdinateur";
import { MaterielFiche, TexteFiche } from "@/components/adulte/ContenuFiche";
import Imprimer from "@/components/adulte/Imprimer";
import NoterResultatFiche from "@/components/adulte/NoterResultatFiche";
import { matieres, type MatiereId } from "@/lib/data";
import { personneConnectee, entreeAdulte } from "@/lib/session";
import { aujourdhui, journeeDe, seancesDe } from "@/lib/journee";
import { leconParCode } from "@/lib/programme";
import { ficheParCode } from "@/lib/fiches";
import { questionsANoter, rangsDe, resultatsDeJournee } from "@/lib/resultat-fiche";

/**
 * La journée entière, avec tout son matériel, sur une seule page.
 * **Écran d'adulte.**
 *
 * Le pilotage sert à composer la journée ; celle-ci sert à la **mener**. Le
 * matin, on n'a pas besoin de boutons, on a besoin d'avoir sous les yeux, dans
 * l'ordre, les quinze mots à dicter puis les dix questions à poser. Avec un
 * lien par séance il fallait ouvrir sept pages ; ici il n'y en a qu'une, et
 * elle s'imprime.
 *
 * Ce qu'on y trouve pour chaque séance :
 *
 *   - une leçon du manuel → ce qu'elle travaille, et le rappel que l'enfant la
 *     fait seul. Le cours entier reste au manuel : le recopier ici ferait
 *     dix pages et personne ne le lirait ;
 *   - un rituel avec sa fiche → tout, écrit là : comment on s'y prend, le
 *     matériel, le corrigé, ce qu'on regarde ;
 *   - un rituel sans fiche encore écrite, ou une séance écrite à la main → sa
 *     consigne, seule, et c'est dit.
 *
 * **Elle porte les corrigés, donc elle est fermée à l'enfant.**
 *
 * Et on y note le résultat de chaque séance à fiche, sous la fiche elle-même.
 * Mener se faisait ici et noter sur la journée : sept allers-retours pour
 * quatre séances (critique du 16 septembre 2026). Le bouton « Imprimer »,
 * promis par le mode d'emploi, n'existait pas.
 */

export const dynamic = "force-dynamic";

const MOIS = ["janvier","février","mars","avril","mai","juin","juillet","août","septembre","octobre","novembre","décembre"];
const JOURS = ["dimanche","lundi","mardi","mercredi","jeudi","vendredi","samedi"];

function enFrancais(iso: string) {
  const d = new Date(`${iso}T12:00:00`);
  const n = d.getDate();
  return `${JOURS[d.getDay()]} ${n === 1 ? "1er" : n} ${MOIS[d.getMonth()]}`;
}

function dateValide(s: string) {
  if (!/^\d{4}-\d{2}-\d{2}$/.test(s)) return false;
  const d = new Date(`${s}T12:00:00`);
  return !Number.isNaN(d.getTime()) && d.toISOString().slice(0, 10) === s;
}

/** « 45 min », « 2 h », « 2 h 05 » — pas « 0 h 45 » ni « 2 h 5 ». */
function duree(minutes: number) {
  const h = Math.floor(minutes / 60);
  const m = minutes % 60;
  if (h === 0) return `${m} min`;
  return m === 0 ? `${h} h` : `${h} h ${String(m).padStart(2, "0")}`;
}

const pluriel = (n: number, mot: string) => `${n} ${mot}${n > 1 ? "s" : ""}`;

export default async function Preparer({
  searchParams,
}: {
  searchParams: Promise<{ jour?: string }>;
}) {
  const moi = await personneConnectee();
  if (!moi) redirect(entreeAdulte("/preparer"));
  if (moi.role === "enfant") redirect("/journee");

  const demande = (await searchParams).jour;
  const date = demande && dateValide(demande) ? demande : aujourdhui();
  const jour = await journeeDe(moi.famille_id, date);
  const seances = await seancesDe(jour.id);
  const minutes = seances.reduce((t, s) => t + s.minutes, 0);
  const resultats = await resultatsDeJournee(jour.id);

  return (
    <Bureau
      qui={`${moi.prenom} · ${moi.role_affiche}`}
      titre={enFrancais(jour.jour)}
      chapeau={
        seances.length === 0 ? (
          "Rien n’est écrit pour ce jour-là."
        ) : (
          <>
            La journée entière, dans l’ordre, avec tout ce qu’il faut pour la
            mener. {pluriel(seances.length, "séance")}, {duree(minutes)}. Cette page s’imprime.{" "}
            <strong className="font-bold text-encre">
              L’enfant ne la voit pas
            </strong>{" "}
            — elle porte les réponses.
          </>
        )
      }
      actions={
        <>
          {seances.length > 0 && <Imprimer />}
          <LienTete href={`/pilotage?jour=${jour.jour}`}>Modifier la journée</LienTete>
          <LienTete href="/fiches">Toutes les fiches</LienTete>
        </>
      }
    >
      <SurOrdinateur imprimer />
      {seances.map((s, i) => {
        const lecon = s.lecon ? leconParCode.get(s.lecon) : undefined;
        const fiche = s.fiche ? ficheParCode.get(s.fiche) : undefined;

        return (
          <Section
            key={s.id}
            titre={`${i + 1}. ${s.titre}`}
            aide={
              <>
                <span className="etiquette">
                  {s.test ? "Le test" : (matieres[s.matiere as MatiereId]?.nom ?? s.matiere)}
                </span>
                <span className="chiffres"> · {s.minutes} min</span>
                {(lecon || s.test) && <> · il la fait seul, à l’écran</>}
              </>
            }
            actions={
              lecon ? (
                <LienTete href={`/manuel/${lecon.code}`}>le cours entier</LienTete>
              ) : fiche ? (
                <LienTete href={`/fiche/${fiche.code}`}>la fiche seule</LienTete>
              ) : undefined
            }
          >
            {s.test ? (
              /* La partie du test n'est pas un rituel : elle n'a pas de fiche
                 et n'en aura jamais. « Aucune fiche n'est encore écrite… le
                 matériel est à vous » laissait croire qu'il y avait quelque
                 chose à préparer (seconde critique du 16 septembre). */
              <Carte accent="neutre" className="feuille-imprimable p-5">
                <p className="text-[1.0625rem] leading-relaxed text-encre">
                  Rien à préparer. Il répond seul, une partie par jour, et ne
                  voit jamais s’il a juste. Ce qu’il sait se lit sur{" "}
                  <Link
                    href="/positionnement"
                    className="underline decoration-bord-fort underline-offset-4 hover:text-encre"
                  >
                    le portrait du test
                  </Link>
                  .
                </p>
              </Carte>
            ) : lecon ? (
              <Carte className="feuille-imprimable p-5">
                <p className="text-[1rem] leading-relaxed text-encre-douce">
                  {lecon.reference}
                </p>
                <p className="mt-3 text-[0.9375rem] leading-relaxed text-encre-tenue">
                  {lecon.exercices.length} exercices. Il lit le cours puis les
                  fait un par un, sur son brouillon, et n’inscrit que le
                  résultat. La correction lui est montrée après chaque réponse —
                  la même qu’il ait juste ou faux. Vous n’avez rien à préparer ;
                  ce qu’il a inscrit se lit le soir sur la journée.
                </p>
              </Carte>
            ) : fiche ? (
              <Carte className="feuille-imprimable p-5 sm:p-6">
                <p className="font-display text-[1.125rem] leading-snug tracking-tight">
                  {fiche.titre}
                </p>

                <ol className="mt-3 space-y-2">
                  {fiche.mener.map((m, k) => (
                    <li key={k} className="flex gap-3 text-[1rem] leading-relaxed text-encre-douce">
                      <span className="chiffres shrink-0 text-encre-tenue">{k + 1}.</span>
                      <span>
                        <TexteFiche texte={m} />
                      </span>
                    </li>
                  ))}
                </ol>

                <div className="mt-5 border-t border-bord pt-4">
                  <MaterielFiche
                    materiel={fiche.materiel}
                    corrige={fiche.corrige}
                    taille="preparer"
                  />
                </div>

                {fiche.regarder && (
                  <p className="mt-5 border-t border-bord pt-4 text-[0.9375rem] leading-relaxed text-encre-tenue">
                    <span className="etiquette mr-2">Ce qu’on regarde</span>
                    <TexteFiche texte={fiche.regarder} />
                  </p>
                )}

                {/* Noter ici, la séance à peine menée. Pas sur papier. */}
                <div className="sans-impression mt-5 border-t border-bord pt-3">
                  <NoterResultatFiche
                    seanceId={s.id}
                    jour={jour.jour}
                    questions={questionsANoter(fiche)}
                    resultat={resultats.get(s.id) ?? null}
                    rangsNotes={
                      resultats.get(s.id)
                        ? rangsDe(questionsANoter(fiche), resultats.get(s.id)!.aRevoir)
                        : []
                    }
                  />
                </div>
              </Carte>
            ) : (
              <Carte accent="neutre" className="feuille-imprimable p-5">
                <p className="text-[1.0625rem] leading-relaxed text-encre">
                  {s.consigne || "Pas de consigne."}
                </p>
                {!s.lecon && !s.fiche && s.origine === "trame" && (
                  <p className="mt-3 text-[0.9375rem] leading-relaxed text-encre-tenue">
                    Aucune fiche n’est encore écrite pour ce rituel : le matériel
                    est à vous. C’est dit ici plutôt que découvert ce matin.
                  </p>
                )}
              </Carte>
            )}
          </Section>
        );
      })}

      {seances.length === 0 && (
        <p className="mt-6 text-[1.0625rem] text-encre-tenue">
          Rien pour ce jour-là.{" "}
          <Link
            href={`/pilotage?jour=${jour.jour}`}
            className="underline decoration-bord-fort underline-offset-4 hover:text-encre"
          >
            Écrire la journée
          </Link>
          .
        </p>
      )}
    </Bureau>
  );
}
