import Link from "next/link";
import { notFound, redirect } from "next/navigation";
import AjouterDepuisLeManuel from "@/components/AjouterDepuisLeManuel";
import { Bureau, Section, Carte, LienTete } from "@/components/adulte/Bureau";
import { matieres, teintesDe, type MatiereId } from "@/lib/data";
import { personneConnectee, entreeAdulte } from "@/lib/session";
import { leconParCode, lecons, partieDeLExercice, type Exercice, type Partie } from "@/lib/programme";
import { leconsPosees } from "@/lib/journee";
import { joursDeLaLecon } from "@/lib/trame";

/**
 * Une leçon du manuel, en entier. **Écran d'adulte.**
 *
 * Le parrain : « on connaît le programme mais on ne peut pas cliquer pour voir
 * le cours / questions ». C'était exact — la trame annonçait « Les fractions :
 * partager en parts égales » et personne ne pouvait lire ce qu'il y avait
 * derrière. Un plan dont on ne peut pas ouvrir le contenu demande de faire
 * confiance sur parole, ce qui est précisément ce que ce produit refuse.
 *
 * Cette page montre donc la leçon telle que l'enfant la verra — le cours
 * entier, les exemples traités, les énoncés dans l'ordre — **plus les
 * résultats attendus et la façon de faire**. C'est la seule différence, et
 * elle est le sens même de l'écran : un parent doit pouvoir préparer, corriger
 * le brouillon, et répondre à une question posée à voix haute.
 *
 * D'où la garantie, qui n'est pas décorative : un `role === "enfant"` est
 * renvoyé vers sa journée. Les corrections vivent normalement dans une action
 * serveur, rendues après sa réponse et jamais présentes dans une page qu'il
 * peut ouvrir (voir `poser()` dans `lib/programme`). Ici elles sont dans la
 * page : c'est justement pour ça que cette page ne doit jamais s'ouvrir de son
 * côté.
 */

export const dynamic = "force-dynamic";

const QUAND: Record<number, string> = {
  1: "période 1 · septembre – octobre",
  2: "période 2 · novembre – décembre",
  3: "période 3 · janvier – février",
  4: "période 4 · mars – avril",
  5: "période 5 · mai – juin",
};

const MOIS = ["janvier","février","mars","avril","mai","juin","juillet","août","septembre","octobre","novembre","décembre"];

function courtEnFrancais(iso: string) {
  const d = new Date(`${iso}T12:00:00`);
  const n = d.getDate();
  return `${n === 1 ? "1er" : n} ${MOIS[d.getMonth()]}`;
}

export default async function UneLecon({
  params,
}: {
  params: Promise<{ code: string }>;
}) {
  const moi = await personneConnectee();
  if (!moi) redirect(entreeAdulte("/manuel"));
  if (moi.role === "enfant") redirect("/journee");

  const { code } = await params;
  /* Un `%` mal formé dans l'adresse ferait lever `decodeURIComponent` : une
     adresse bricolée mérite une page introuvable, pas une erreur de serveur. */
  let demande = "";
  try {
    demande = decodeURIComponent(code);
  } catch {
    notFound();
  }
  const lecon = leconParCode.get(demande);
  if (!lecon) notFound();

  const t = teintesDe(lecon.matiere);
  const prevue = joursDeLaLecon(lecon.code);

  /* Quand elle a été donnée, s'il l'a déjà eue. Ce qu'il a répondu se lit sur
     la journée elle-même : une seule page pour ses résultats, sinon il y a
     deux vérités et on finit par les voir diverger. */
  const posees = await leconsPosees(moi.famille_id);
  const donnees = posees.filter((p) => p.lecon === lecon.code).map((p) => p.jour);

  /* De quoi passer à la leçon suivante de la même matière sans repasser par
     l'index : on relit rarement une leçon seule. */
  const memeMatiere = lecons.filter((l) => l.matiere === lecon.matiere);
  const rang = memeMatiere.findIndex((l) => l.code === lecon.code);
  const avant = memeMatiere[rang - 1];
  const apres = memeMatiere[rang + 1];

  return (
    <Bureau
      qui={`${moi.prenom} · ${moi.role_affiche}`}
      titre={lecon.titre}
      chapeau={
        <>
          Le cours et les exemples sont exactement ce que l’enfant lit.{" "}
          <strong className="font-bold text-encre">
            Les résultats attendus, en revanche, il ne les a jamais avant
            d’avoir répondu
          </strong>{" "}
          — ils n’existent de son côté qu’après, dans la correction. Cette page
          est la vôtre : de quoi préparer, corriger son brouillon, et répondre à
          une question posée à voix haute.
        </>
      }
      actions={
        <>
          <LienTete href="/manuel">Le manuel</LienTete>
          <LienTete href="/annee">L’année</LienTete>
        </>
      }
    >
      <div className="mt-6 flex flex-wrap items-baseline gap-x-5 gap-y-2 text-[0.9375rem]">
        <span className={`etiquette ${t.texte}`}>
          {matieres[lecon.matiere as MatiereId].nom}
        </span>
        <span className="text-encre-tenue">{QUAND[lecon.periode]}</span>
        <span className="chiffres text-encre-tenue">
          {lecon.exercices.length} exercices · {lecon.minutes} min
        </span>
      </div>

      {lecon.reserveeAuxParents && (
        /* Ocre, jamais rouge : c'est un avertissement, pas une interdiction.
           La décision du moment reste celle des parents. */
        <Carte accent="ocre" className="mt-6 p-5">
          <p className="text-[1.0625rem] leading-relaxed text-encre">
            <strong className="font-bold">
              Cette leçon est à donner en votre présence.
            </strong>{" "}
            Elle n’arrivera jamais dans sa journée toute seule : il faut qu’un
            adulte l’y place, en ayant choisi le moment.
          </p>
        </Carte>
      )}

      <Section
        titre="Ce que le programme demande"
        aide="L'objectif officiel que la leçon travaille. Les textes eux-mêmes sont sur la page des sources."
      >
        <Carte className="p-5">
          <p className="text-[1.0625rem] leading-relaxed text-encre-douce">
            {lecon.reference}
          </p>
        </Carte>
      </Section>

      <Section
        titre="Quand elle tombe"
        aide="La trame la donne une première fois, puis la reprend une dizaine de jours plus tard : revoir une notion après un délai est ce qui la fixe."
      >
        <ul className="flex flex-wrap gap-x-6 gap-y-2 text-[1rem]">
          {prevue.map((j) => (
            <li key={j}>
              <Link
                href={`/pilotage?jour=${j}`}
                className="text-encre-douce underline decoration-bord-fort underline-offset-4 hover:text-encre"
              >
                {courtEnFrancais(j)}
              </Link>
            </li>
          ))}
          {prevue.length === 0 && (
            <li className="text-encre-tenue">
              La trame ne la place nulle part — elle ne se donne qu’à la main.
            </li>
          )}
        </ul>

        <p className="mt-4 text-[0.9375rem] leading-relaxed text-encre-tenue">
          {donnees.length === 0 ? (
            "Elle ne lui a pas encore été donnée."
          ) : (
            <>
              Donnée le{" "}
              {donnees.map((j, i) => (
                <span key={j}>
                  {i > 0 && ", puis le "}
                  <Link
                    href={`/pilotage?jour=${j}`}
                    className="underline decoration-bord-fort underline-offset-4 hover:text-encre"
                  >
                    {courtEnFrancais(j)}
                  </Link>
                </span>
              ))}
              . Ce qu’il a inscrit se lit sur la journée.
            </>
          )}
        </p>

        <div className="mt-5">
          <AjouterDepuisLeManuel code={lecon.code} />
        </div>
      </Section>

      <Section
        titre="Le cours"
        aide="Mot pour mot ce qu’il lit. Il peut le rouvrir à tout moment pendant les exercices — c’est un manuel, pas une épreuve de mémoire —, et chaque correction lui montre la partie qui explique l’exercice."
      >
        <Carte className="p-6 sm:p-8">
          {lecon.cours.map((p, i) => (
            <section key={i} id={`partie-${i + 1}`} className={`scroll-mt-6 ${i === 0 ? "" : "mt-9"}`}>
              {p.titre && (
                <h3 className="font-display text-[1.25rem] leading-snug tracking-tight text-encre">
                  {p.titre}
                </h3>
              )}
              <div className={p.titre ? "mt-3 space-y-3" : "space-y-3"}>
                {p.texte.map((x, j) => (
                  <p
                    key={j}
                    className="text-[1.0625rem] leading-relaxed text-encre-douce"
                  >
                    {gras(x)}
                  </p>
                ))}
              </div>
              {p.regle && (
                <p className="mt-5 rounded-feuille border border-bord border-l-[6px] border-l-ocre bg-bureau p-4 text-[1.0625rem] leading-relaxed text-encre sm:p-5">
                  <span className="etiquette mb-1.5 block text-encre-tenue">
                    À retenir
                  </span>
                  {gras(p.regle)}
                </p>
              )}
            </section>
          ))}
        </Carte>
      </Section>

      {lecon.exemples.length > 0 && (
        <Section
          titre="Les exemples traités"
          aide="Faits devant lui, pas à pas, avant qu’on lui demande quoi que ce soit."
        >
          <ul className="space-y-4">
            {lecon.exemples.map((ex, i) => (
              <li key={i}>
                <Carte className="p-5">
                  <p className="text-[1.0625rem] font-bold text-encre">
                    {gras(ex.enonce)}
                  </p>
                  <ol className="mt-3 space-y-1.5">
                    {ex.etapes.map((e, j) => (
                      <li
                        key={j}
                        className="flex gap-3 text-[1rem] leading-relaxed text-encre-douce"
                      >
                        <span className="chiffres shrink-0 text-encre-tenue">
                          {j + 1}.
                        </span>
                        <span>{gras(e)}</span>
                      </li>
                    ))}
                  </ol>
                  <p className="mt-3 text-[1.0625rem] text-encre">
                    <span className="etiquette mr-2 text-encre-tenue">
                      On trouve
                    </span>
                    <strong className="font-bold">{ex.resultat}</strong>
                  </p>
                </Carte>
              </li>
            ))}
          </ul>
        </Section>
      )}

      <Section
        titre="Les exercices, avec les réponses"
        aide="Il les fait un par un, sur son brouillon, et n’inscrit que le résultat. Après chaque réponse il reçoit la correction telle qu’elle est écrite ici — la même qu’il ait juste ou faux, sans « bravo » ni « raté »."
      >
        <ListeExercices exercices={lecon.exercices} cours={lecon.cours} />
      </Section>

      {lecon.reprise && lecon.reprise.length > 0 && (
        <Section
          titre="La seconde série, quand la leçon revient"
          aide="Posée à la place de la première quand la leçon revient dans l’année : mêmes compétences, autres nombres et autres phrases — pour voir ce qui a tenu, pas ce dont il se souvient."
        >
          <ListeExercices exercices={lecon.reprise} cours={lecon.cours} />
        </Section>
      )}

      <nav className="mt-12 flex flex-wrap justify-between gap-4 border-t border-bord pt-6">
        {avant ? (
          <Link
            href={`/manuel/${avant.code}`}
            className="max-w-[20rem] text-[0.9375rem] text-encre-douce underline decoration-bord-fort underline-offset-4 hover:text-encre"
          >
            ← {avant.titre}
          </Link>
        ) : (
          <span />
        )}
        {apres && (
          <Link
            href={`/manuel/${apres.code}`}
            className="max-w-[20rem] text-right text-[0.9375rem] text-encre-douce underline decoration-bord-fort underline-offset-4 hover:text-encre"
          >
            {apres.titre} →
          </Link>
        )}
      </nav>
    </Bureau>
  );
}

/** `**gras**` dans les textes du manuel. Repris de l'écran de l'enfant. */
function gras(texte: string) {
  return texte.split(/\*\*(.+?)\*\*/g).map((bout, i) =>
    i % 2 === 1 ? (
      <strong key={i} className="font-bold text-encre">
        {bout}
      </strong>
    ) : (
      bout
    ),
  );
}

/**
 * Une série d'exercices, avec l'attendu, la façon de faire et la partie du
 * cours qu'il rouvre depuis la correction. **Écran d'adulte.**
 */
function ListeExercices({ exercices, cours }: { exercices: Exercice[]; cours: Partie[] }) {
  return (
      <ol className="space-y-3">
        {exercices.map((x, i) => {
          const partie = partieDeLExercice(x.code);
          return (
          <li key={x.code}>
            <Carte className="p-5">
              <div className="flex gap-4">
                <span className="chiffres shrink-0 pt-0.5 text-[1rem] text-encre-tenue">
                  {i + 1}.
                </span>
                <div className="min-w-0 flex-1">
                  <p className="text-[1.0625rem] leading-relaxed text-encre">
                    {gras(x.enonce)}
                  </p>

                  {x.choix && (
                    <ul className="mt-2 flex flex-wrap gap-x-4 gap-y-1">
                      {x.choix.map((c) => (
                        <li
                          key={c}
                          className={`text-[0.9375rem] ${
                            c === x.resultat
                              ? "font-bold text-fini"
                              : "text-encre-tenue"
                          }`}
                        >
                          {c}
                        </li>
                      ))}
                    </ul>
                  )}

                  <p className="mt-3 text-[1rem] text-encre">
                    <span className="etiquette mr-2 text-encre-tenue">
                      Attendu
                    </span>
                    <strong className="font-bold text-fini">
                      {x.resultat}
                    </strong>
                  </p>
                  <p className="mt-1.5 text-[1rem] leading-relaxed text-encre-douce">
                    <span className="etiquette mr-2 text-encre-tenue">
                      Comment on fait
                    </span>
                    {gras(x.comment)}
                  </p>
                  {partie !== null && (
                    <p className="mt-1.5 text-[1rem] leading-relaxed text-encre-douce">
                      <span className="etiquette mr-2 text-encre-tenue">
                        Dans le cours
                      </span>
                      <a
                        href={`#partie-${partie + 1}`}
                        className="underline decoration-bord-fort underline-offset-4 hover:text-encre"
                      >
                        {cours[partie].titre ?? "le début"}
                      </a>
                    </p>
                  )}
                </div>
              </div>
            </Carte>
          </li>
          );
        })}
      </ol>
  );
}
