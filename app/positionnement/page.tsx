import { redirect } from "next/navigation";
import { Bureau, Section, Carte, Chiffre, LienTete } from "@/components/adulte/Bureau";
import { personneConnectee, entreeAdulte } from "@/lib/session";
import { lignes } from "@/lib/base";
import { aujourdhui } from "@/lib/journee";
import { reponsesDe } from "@/lib/reponses";
import { lecturePourParents, avancement, MAITRISE } from "@/lib/lecture";
import {
  blocs,
  ceQuiVientAujourdhui,
  notions,
  questions,
  tailleBloc,
} from "@/lib/positionnement";

/**
 * Le test de positionnement, question par question. **Écran d'adulte.**
 *
 * L'autre corpus que personne ne pouvait lire. Les parents voyaient le
 * résultat du test — ce qui est su, ce qui est fragile — sans jamais pouvoir
 * regarder ce qui avait été demandé. Or un portrait qui dit « fragile en
 * fractions » ne veut rien dire tant qu'on n'a pas vu les cinq questions
 * posées : c'est en les lisant qu'on juge si l'instrument est bon.
 *
 * Et il y a une raison plus concrète : l'enfant est contrôlé au moins une fois
 * par an. Pouvoir montrer l'instrument, et pas seulement sa conclusion, change
 * la nature de la conversation.
 *
 * **Ses réponses se lisent ici, en tête, et nulle part ailleurs.** Elles
 * étaient sur la journée, où le portrait grandissait à chaque partie et
 * repoussait la note du soir tout en bas (critique du 16 septembre 2026). Un
 * seul endroit pour cette lecture, à côté des questions qu'elle lit.
 */

/**
 * Cinq points, un par question, pleins pour les bonnes réponses.
 *
 * Muette pour les lecteurs d'écran : le « 4 / 5 » écrit à côté dit la même
 * chose. Les points pleins prennent la teinte du cran ; les vides gardent le
 * contour `bord-fort`, le seul qui se voie sur la carte blanche.
 */
function Jauge({ justes, total }: { justes: number; total: number }) {
  return (
    <span aria-hidden className="flex items-center gap-1 self-center">
      {Array.from({ length: total }, (_, i) => (
        <span
          key={i}
          className={`size-2.5 rounded-full ${i < justes ? "bg-current" : "border border-bord-fort"}`}
        />
      ))}
    </span>
  );
}

export const dynamic = "force-dynamic";

/** « 21 septembre ». */
const jourEnFrancais = (iso: string) =>
  new Date(`${iso}T12:00:00`).toLocaleDateString("fr-FR", {
    day: "numeric",
    month: "long",
    timeZone: "Europe/Paris",
  });

/** « le 16 septembre », « les 16 et 17 septembre ». */
const lesJours = (jours: string[]) =>
  jours.length <= 1
    ? `le ${jourEnFrancais(jours[0])}`
    : `les ${jours.slice(0, -1).map(jourEnFrancais).join(", ")} et ${jourEnFrancais(jours.at(-1)!)}`;

/**
 * Les leçons du manuel qu'une partie du test peut avoir rencontrées avant
 * d'être faite. Le test s'étale sur une semaine où l'on enseigne : la partie
 * « Les mots et l'orthographe » du 21 septembre mesurait onze questions sur
 * trente enseignées le 17 et le 18. Décision du parrain : rien ne change chez
 * l'enfant, mais le portrait le dit (seconde critique du 16 septembre).
 */
const MATIERES_DU_BLOC: Record<string, string[]> = {
  nombres: ["m-"],
  calcul: ["m-"],
  problemes: ["m-"],
  mesures: ["m-", "s-"],
  geometrie: ["m-"],
  langue: ["f-"],
  lecture: ["f-"],
};

export default async function Positionnement() {
  const moi = await personneConnectee();
  if (!moi) redirect(entreeAdulte("/positionnement"));
  if (moi.role === "enfant") redirect("/journee");

  const enfant = await lignes<{ id: string }>(
    `select id from personne where famille_id = $1 and role = 'enfant' limit 1`,
    [moi.famille_id],
  );
  const reponses = enfant[0] ? await reponsesDe(enfant[0].id) : [];
  const portrait = lecturePourParents(reponses);
  const ou = avancement(reponses);
  const testDuJour = ceQuiVientAujourdhui(reponses, aujourdhui());

  /* Chaque leçon travaillée, et le moment de son premier exercice inscrit. */
  const leconsTravaillees = await lignes<{ lecon: string; titre: string; premier: string; jour: string }>(
    `select s.lecon, min(s.titre) as titre, min(t.saisi_le)::text as premier,
            (min(t.saisi_le) at time zone 'Europe/Paris')::date::text as jour
       from travail t
       join seance s on s.id = t.seance_id
       join journee j on j.id = s.journee_id
      where j.famille_id = $1 and s.lecon <> ''
      group by s.lecon`,
    [moi.famille_id],
  );
  const leconsAvant = (code: string, debut: string | null) =>
    debut === null
      ? []
      : leconsTravaillees
          .filter(
            (l) =>
              (MATIERES_DU_BLOC[code] ?? []).some((p) => l.lecon.startsWith(p)) &&
              l.premier < debut,
          )
          .sort((a, b) => (a.premier < b.premier ? -1 : 1));

  return (
    <Bureau
      qui={`${moi.prenom} · ${moi.role_affiche}`}
      titre="Le test du début d’année"
      chapeau={
        <>
          Les {questions.length} questions, avec ce qui est attendu de chacune.
          L’étalon est la <strong className="font-bold text-encre">fin du CE2</strong>{" "}
          et non le CM1 : ce qu’on cherche, c’est ce qui est consolidé de
          l’année d’avant. Cinq questions par notion, parce qu’une seule ne
          distingue ni la réussite de la chance, ni l’ignorance de
          l’inattention.
        </>
      }
      actions={
        <>
          <LienTete href="/manuel">Le manuel</LienTete>
          <LienTete href="/sources">Les sources</LienTete>
        </>
      }
    >
      <Section
        titre="Ce qu’il sait en arrivant"
        aide="Il ne voit rien de cette partie, et il ne sait jamais s’il a juste."
      >
        {portrait.length === 0 ? (
          <p className="text-[1.0625rem] text-encre-tenue">
            Il n’a pas encore commencé. La partie du jour se pose d’elle-même en
            tête de sa journée.
          </p>
        ) : (
          <>
            <p className="chiffres text-[0.9375rem] text-encre-tenue">
              {ou.repondues} réponse{ou.repondues > 1 ? "s" : ""} sur {ou.total}
              {testDuJour.etat === "partie-finie" &&
                ` · la partie « ${testDuJour.partie.titre} » est finie aujourd’hui ; la suivante viendra un autre jour`}
            </p>

            {/* L'échelle avant les crans, pas cent lignes plus bas : on lit
                « fragile » en sachant déjà ce que ça veut dire. */}
            <p className="mt-3 text-[1rem] leading-relaxed text-encre-douce">
              Chaque notion compte cinq questions, lues sur l’échelle du livret
              scolaire : très bonne maîtrise à cinq, satisfaisante à quatre — le
              niveau que l’école vise pour tous —, fragile à trois, insuffisante
              en dessous. Un «&nbsp;je ne sais pas&nbsp;» compte comme une
              réponse non juste, et il est signalé à part.
            </p>

            <div className="mt-5 space-y-4">
              {portrait.map((b) => {
                const avant = leconsAvant(b.code, b.debut);
                return (
                <Carte key={b.code} className="p-5">
                  <div className="flex flex-wrap items-baseline gap-x-3">
                    <h3 className="font-display text-[1.125rem] leading-snug tracking-tight">
                      {b.titre}
                    </h3>
                    <span className="chiffres text-[0.9375rem] text-encre-tenue">
                      {b.fini ? "terminé" : `${b.posees} / ${b.total}`}
                    </span>
                  </div>
                  {b.jours.length > 0 && (
                    <p className="mt-1 text-[0.9375rem] leading-relaxed text-encre-tenue">
                      Fait {lesJours(b.jours)}
                      {avant.length > 0 ? (
                        <>
                          , après {avant.length > 1 ? "les leçons" : "la leçon"}{" "}
                          {avant.map((l, i) => (
                            <span key={l.lecon}>
                              {i > 0 && (i === avant.length - 1 ? " et " : ", ")}« {l.titre} » ({jourEnFrancais(l.jour)})
                            </span>
                          ))}
                          {" "}— ce qu’elle mesure n’est plus seulement ce qu’il savait en arrivant.
                        </>
                      ) : (
                        "."
                      )}
                    </p>
                  )}

                  <ul className="mt-3 space-y-2.5">
                    {b.notions
                      .filter((n) => n.etat !== "pas-pose")
                      .map((n) => (
                        <li
                          key={n.code}
                          className="border-b border-bord pb-2.5 last:border-0 last:pb-0"
                        >
                          <div className="flex flex-wrap items-baseline justify-between gap-x-5 gap-y-1 text-[1.0625rem]">
                            <span>{n.libelle}</span>
                            <span
                              className={`flex shrink-0 items-center gap-2.5 ${
                                n.etat === "tres-bonne" || n.etat === "satisfaisante"
                                  ? "text-fini"
                                  : n.etat === "en-cours"
                                    ? "text-encre-tenue"
                                    : /* Ocre, jamais rouge : une information, pas une faute. */
                                      "text-ocre"
                              }`}
                            >
                              {n.etat !== "en-cours" && <Jauge justes={n.justes} total={n.total} />}
                              <span className="chiffres text-[0.9375rem] text-encre-tenue">
                                {n.justes} / {n.total}
                                {n.saitPas > 0 &&
                                  ` · ${n.saitPas} « je ne sais pas »`}
                              </span>
                              <span className="font-bold">
                                {n.etat === "en-cours" || n.etat === "pas-pose"
                                  ? "en cours"
                                  : MAITRISE[n.etat]}
                              </span>
                            </span>
                          </div>

                          {/* Le détail, parce que « trois sur cinq » ne dit pas
                              quoi reprendre lundi matin. */}
                          {n.ecarts.length > 0 && (
                            <ul className="mt-2 space-y-1 border-l-2 border-bord pl-3">
                              {n.ecarts.map((e) => (
                                <li
                                  key={e.enonce}
                                  className="text-[0.9375rem] leading-relaxed text-encre-tenue"
                                >
                                  {e.enonce}{" "}
                                  <em className="not-italic text-encre-douce">
                                    {e.saitPas
                                      ? "— il a dit qu’il ne savait pas"
                                      : `— il a répondu « ${e.donne} », on attendait « ${e.attendu} »`}
                                  </em>
                                </li>
                              ))}
                            </ul>
                          )}
                        </li>
                      ))}
                  </ul>
                </Carte>
                );
              })}
            </div>

            <Carte accent="ocre" className="mt-6 p-5">
              <p className="text-[1rem] leading-relaxed text-encre-douce">
                <strong className="font-bold text-encre">
                  Ceci n’a pas été relu par un enseignant.
                </strong>{" "}
                Une indication utile, pas un bilan.
              </p>
            </Carte>
          </>
        )}
      </Section>

      <Section titre="Ce que l’instrument mesure">
        <dl className="grid grid-cols-2 gap-6 sm:grid-cols-4">
          <Chiffre n={blocs.length} quoi="parties" />
          <Chiffre n={notions.length} quoi="notions" />
          <Chiffre n={questions.length} quoi="questions" />
          <Chiffre n={5} quoi="questions par notion" />
        </dl>

        <Carte className="mt-6 p-5">
          <p className="text-[1rem] leading-relaxed text-encre-douce">
            Une partie par jour, au plus. S’il en sort par «&nbsp;Revenir à ma
            journée&nbsp;», elle passe après l’étape suivante et il la reprend
            à la même question. Et{" "}
            <strong className="font-bold text-encre">
              il ne sait jamais s’il a juste
            </strong>{" "}
            — ni pendant, ni à la fin. Il n’y a pas de correction dans un test :
            la comparaison entre ce qu’il a répondu et ce qui était attendu
            n’existe que dans la lecture qui vous est destinée. C’est la
            différence avec un exercice du manuel, où la correction lui est due.
          </p>
        </Carte>
      </Section>

      {blocs.map((b, i) => (
        <Section
          key={b.code}
          titre={`${i + 1}. ${b.titre}`}
          aide={`${b.annonce} — ${b.notions.length} notions, ${tailleBloc(b)} questions.`}
        >
          <ul className="space-y-4">
            {b.notions.map((n) => (
              <li key={n.code}>
                <Carte className="p-5">
                  <h3 className="font-display text-[1.125rem] leading-snug tracking-tight text-encre">
                    {n.libelle}
                  </h3>
                  <p className="mt-1.5 text-[0.9375rem] leading-relaxed text-encre-tenue">
                    {n.reference}
                  </p>

                  <ol className="mt-4 space-y-2.5">
                    {n.questions.map((q, j) => (
                      <li key={q.code} className="flex gap-3">
                        <span className="chiffres shrink-0 pt-0.5 text-[0.9375rem] text-encre-tenue">
                          {j + 1}.
                        </span>
                        <div className="min-w-0 flex-1">
                          <p className="text-[1rem] leading-relaxed text-encre">
                            {q.enonce}
                          </p>
                          {q.choix && (
                            <ul className="mt-1 flex flex-wrap gap-x-4 gap-y-0.5">
                              {q.choix.map((c) => (
                                <li
                                  key={c}
                                  className={`text-[0.875rem] ${
                                    c === q.attendu
                                      ? "font-bold text-fini"
                                      : "text-encre-tenue"
                                  }`}
                                >
                                  {c}
                                </li>
                              ))}
                            </ul>
                          )}
                          {!q.choix && (
                            <p className="mt-1 text-[0.9375rem] text-encre-douce">
                              <span className="etiquette mr-2 text-encre-tenue">
                                Attendu
                              </span>
                              <strong className="font-bold text-fini">
                                {q.attendu}
                              </strong>
                            </p>
                          )}
                        </div>
                      </li>
                    ))}
                  </ol>
                </Carte>
              </li>
            ))}
          </ul>
        </Section>
      ))}
    </Bureau>
  );
}
