import { redirect } from "next/navigation";
import Link from "next/link";
import { Section, Carte, Chiffre, LienTete } from "@/components/adulte/Bureau";
import SurOrdinateur from "@/components/adulte/SurOrdinateur";
import Imprimer from "@/components/adulte/Imprimer";
import { classesTeinte } from "@/lib/data";
import { personneConnectee, entreeAdulte } from "@/lib/session";
import { aujourdhui } from "@/lib/journee";
import {
  lireLeControle,
  projeterLeControle,
  type MatiereMontree,
  type VueDuControle,
} from "@/lib/controle";

/**
 * Le mode contrôle — ce qu'on ouvre le jour de l'inspection. **Les trois
 * adultes.**
 *
 * Il montre l'instruction, et il dit d'abord ce qu'il retire : c'est la
 * première chose qu'on lit, à l'écran comme sur la feuille. Un document qui
 * tait son périmètre laisse croire qu'il est complet ; celui-ci annonce qu'il
 * ne l'est pas, et pourquoi. Tout ce qu'il affiche vient de
 * `projeterLeControle` (`lib/controle.ts`), et rien d'autre : la page ne lit
 * pas la base elle-même.
 *
 * **Les trois adultes**, parrain compris : c'est un document d'instruction, pas
 * de suivi, et le jour du contrôle celui qui ouvre l'application n'est pas
 * forcément un parent. L'enfant est renvoyé vers sa journée — la page atteint
 * le manuel, qui porte les réponses (`test/portes.test.ts`), même si elle n'en
 * affiche que des titres.
 *
 * Elle s'imprime : le bouton et les liens portent `sans-impression`, les
 * leçons repliées à l'écran sont dépliées sur la feuille.
 */

export const dynamic = "force-dynamic";

export default async function Controle() {
  const moi = await personneConnectee();
  if (!moi) redirect(entreeAdulte("/controle"));
  if (moi.role === "enfant") redirect("/journee");

  const vue = projeterLeControle(await lireLeControle(moi.famille_id, aujourdhui()));

  return (
    <main className="flex-1 bg-bureau print:bg-carte">
      <div className="mx-auto max-w-5xl px-5 pb-24 pt-8 sm:px-8 sm:pt-12 print:max-w-none print:px-0 print:pb-0 print:pt-0">
        <header className="border-b border-bord pb-6">
          <p className="etiquette sans-impression text-encre-tenue">
            {moi.prenom} · {moi.role_affiche}
          </p>
          <div className="mt-2 flex flex-wrap items-end justify-between gap-x-6 gap-y-3">
            <h1 className="font-display text-[2rem] leading-[1.1] tracking-tight sm:text-[2.5rem]">
              L’instruction de {vue.enfant}
            </h1>
            <div className="sans-impression flex flex-wrap items-center gap-x-5 gap-y-2">
              <LienTete href="/manuel">Le manuel</LienTete>
              <LienTete href="/sources">Les sources</LienTete>
              <Imprimer />
            </div>
          </div>
          <p className="mt-3 max-w-3xl text-[1.0625rem] leading-relaxed text-encre-douce">
            Instruction en famille, année scolaire {vue.cadre.annee}. État
            arrêté au {vue.arreteAu}.
          </p>
          <p className="sans-impression mt-2 max-w-3xl text-[0.9375rem] leading-relaxed text-encre-tenue">
            L’écran à ouvrir le jour de l’inspection. Il montre l’instruction,
            il dit d’abord ce qu’il laisse de côté, et il s’imprime tel quel.
          </p>
        </header>
        <SurOrdinateur imprimer />

        <CeQuiEstRetire vue={vue} />
        <LeCadre vue={vue} />
        <LInstruction vue={vue} />
        <LesSorties vue={vue} />
        <LesExplorations vue={vue} />
        <LesTraces vue={vue} />
      </div>
    </main>
  );
}

/* ------------------------------------------------------------------ */

/**
 * Avant tout contenu. Une carte à bande, comme la limite dite en tête du suivi
 * du soignant : c'est le même geste, dire où s'arrête la page avant de la remplir.
 */
function CeQuiEstRetire({ vue }: { vue: VueDuControle }) {
  /* En début de phrase : « L’enfant sait », si la famille n'a pas de prénom
     d'enfant à donner. */
  const Enfant = vue.enfant.charAt(0).toLocaleUpperCase("fr-FR") + vue.enfant.slice(1);
  return (
    <Carte accent="neutre" className="mt-8 break-inside-avoid p-5 sm:p-6">
      <h2 className="font-display text-[1.25rem] leading-snug tracking-tight">
        Ce que ce document ne montre pas
      </h2>
      <ul className="mt-3 space-y-1.5 text-[1.0625rem] leading-relaxed text-encre-douce">
        {vue.retire.map((r) => (
          <li key={r} className="flex gap-3">
            <span aria-hidden className="text-encre-tenue">
              —
            </span>
            <span>{r}</span>
          </li>
        ))}
      </ul>
      <p className="mt-4 border-t border-bord pt-4 text-[1.0625rem] leading-relaxed text-encre">
        Ce qui relève du suivi de l’enfant ne relève pas du contrôle de son
        instruction. {Enfant} sait qui lit ce qu’il écrit&nbsp;; ce document
        n’agrandit pas ce cercle.
      </p>
    </Carte>
  );
}

function LeCadre({ vue }: { vue: VueDuControle }) {
  const c = vue.cadre;
  const lignes: [string, React.ReactNode][] = [
    ["Régime", c.regime],
    ["Niveau", c.niveau],
    ["Année scolaire", `${c.annee}, du ${c.du} au ${c.au}`],
    ["Académie", `${c.academie}, dont le calendrier des vacances est suivi`],
    [
      "Rythme prévu",
      <>
        <span className="chiffres">{c.rythme.jours}</span> journées de travail et{" "}
        <span className="chiffres">{c.rythme.heures}</span> heures sur l’année, du
        lundi au vendredi hors vacances et jours fériés, le mercredi plus court
      </>,
    ],
    [
      "Support",
      <>
        Le manuel de l’application&nbsp;: <span className="chiffres">{c.manuel.lecons}</span>{" "}
        leçons en <span className="chiffres">{c.manuel.matieres}</span> matières,
        chacune rattachée à un objectif des programmes officiels
      </>,
    ],
  ];

  return (
    <Section titre="Le cadre">
      <Carte className="break-inside-avoid p-5 sm:p-6">
        <dl className="space-y-3 text-[1.0625rem] leading-relaxed">
          {lignes.map(([terme, valeur]) => (
            <div key={terme} className="grid gap-x-6 sm:grid-cols-[11rem_1fr]">
              <dt className="text-encre-tenue">{terme}</dt>
              <dd className="text-encre">{valeur}</dd>
            </div>
          ))}
        </dl>
      </Carte>
    </Section>
  );
}

/**
 * Des faits : des jours, une durée, des leçons. Jamais un pourcentage, jamais
 * « en avance » ou « en retard » — le rythme prévu est dans le cadre, et rien
 * ici ne s'y rapporte.
 */
function LInstruction({ vue }: { vue: VueDuControle }) {
  const i = vue.instruction;
  return (
    <Section
      titre="L’instruction donnée à ce jour"
      aide={
        <>
          Arrêtée au {vue.arreteAu}. Les durées sont celles prévues pour chaque
          séance faite&nbsp;: rien ne chronomètre {vue.enfant}.
        </>
      }
    >
      {i.jours === 0 ? (
        <p className="text-[1.0625rem] text-encre-tenue">Aucune séance faite à ce jour.</p>
      ) : (
        <dl className="flex flex-wrap gap-x-12 gap-y-5">
          <Chiffre
            n={i.jours}
            quoi={i.jours === 1 ? "jour où une séance a été faite" : "jours où au moins une séance a été faite"}
          />
          <Chiffre n={i.duree} quoi="de séances faites" />
        </dl>
      )}

      <h3 className="mt-8 font-display text-[1.125rem] leading-snug tracking-tight">
        Par matière
      </h3>
      <Carte className="mt-3 divide-y divide-bord">
        {i.matieres.map((m) => (
          <div key={m.id} className="break-inside-avoid px-5 py-4">
            <div className="flex flex-wrap items-baseline justify-between gap-x-6 gap-y-1">
              <p className="text-[1.0625rem] font-bold text-encre">
                <Puce m={m} />
                {m.nom}
              </p>
              <p className="text-[0.9375rem] text-encre-douce">
                <span className="chiffres">{m.duree ?? "—"}</span>
                <span aria-hidden className="text-encre-tenue"> · </span>
                {m.leconsDeLAnnee > 0 ? (
                  <>
                    <span className="chiffres">{m.travaillees.length}</span>{" "}
                    {m.travaillees.length > 1 ? "leçons travaillées" : "leçon travaillée"} sur{" "}
                    {m.leconsDeLAnnee > 1 ? "les " : ""}
                    <span className="chiffres">{m.leconsDeLAnnee}</span> du manuel
                  </>
                ) : (
                  "hors manuel"
                )}
              </p>
            </div>

            {m.travaillees.length > 0 && (
              <>
                {/* Repliées à l'écran : trente titres par matière allongeraient
                    la page qu'on parcourt devant quelqu'un. Dépliées sur la
                    feuille, où un `<details>` fermé ne sortirait pas. */}
                <details className="mt-2 print:hidden">
                  <summary className="cursor-pointer text-[0.9375rem] text-encre-douce underline decoration-bord-fort underline-offset-4 transition-colors hover:text-encre">
                    {m.travaillees.length > 1
                      ? `Les ${m.travaillees.length} leçons travaillées`
                      : "La leçon travaillée"}
                  </summary>
                  <TitresDesLecons lecons={m.travaillees} liens />
                </details>
                <div className="hidden print:block">
                  <TitresDesLecons lecons={m.travaillees} />
                </div>
              </>
            )}
          </div>
        ))}
      </Carte>
    </Section>
  );
}

function TitresDesLecons({
  lecons,
  liens = false,
}: {
  lecons: { code: string; titre: string }[];
  liens?: boolean;
}) {
  return (
    <ul className="mt-2 grid gap-x-8 gap-y-1 text-[0.9375rem] leading-relaxed text-encre-douce sm:grid-cols-2 print:grid-cols-2">
      {lecons.map((l) => (
        <li key={l.code}>
          {liens ? (
            <Link
              href={`/manuel/${l.code}`}
              className="underline decoration-bord underline-offset-4 transition-colors hover:text-encre hover:decoration-bord-fort"
            >
              {l.titre}
            </Link>
          ) : (
            l.titre
          )}
        </li>
      ))}
    </ul>
  );
}

function LesSorties({ vue }: { vue: VueDuControle }) {
  const { passees, couvertes } = vue.sorties;
  return (
    <Section
      titre="Les sorties"
      aide="Celles qui ont eu lieu. Ce qui compte n’est pas le lieu, c’est ce qui s’y est passé."
    >
      {passees.length === 0 ? (
        <p className="text-[1.0625rem] text-encre-tenue">Aucune sortie notée à ce jour.</p>
      ) : (
        <>
          <p className="text-[1.0625rem] text-encre-douce">
            Matières touchées&nbsp;: {couvertes.map((m) => m.nom).join(", ")}.
          </p>
          <ul className="mt-4 space-y-3">
            {passees.map((s) => (
              <li key={s.id} className="break-inside-avoid">
                <Carte className="p-5">
                  <div className="flex flex-wrap items-baseline justify-between gap-x-5 gap-y-1">
                    <h3 className="font-display text-[1.125rem] leading-snug tracking-tight">
                      {s.titre}
                    </h3>
                    <span className="chiffres text-[0.9375rem] text-encre-tenue">{s.date}</span>
                  </div>
                  {s.lieu && <p className="mt-1 text-[0.9375rem] text-encre-tenue">{s.lieu}</p>}
                  {/* Tel qu'il a été écrit, retours à la ligne compris. */}
                  <p className="mt-3 whitespace-pre-line text-[1.0625rem] leading-relaxed text-encre-douce">
                    {s.quoi}
                  </p>
                  <Matieres liste={s.matieres} />
                </Carte>
              </li>
            ))}
          </ul>
        </>
      )}
    </Section>
  );
}

function LesExplorations({ vue }: { vue: VueDuControle }) {
  return (
    <Section
      titre="Exploré hors du manuel"
      aide={
        <>
          Parties d’une question de {vue.enfant}, explorées avec son parrain
          et racontées par lui. Elles ne font l’objet d’aucune évaluation.
        </>
      }
    >
      {vue.explorations.length === 0 ? (
        <p className="text-[1.0625rem] text-encre-tenue">Aucune question explorée à ce jour.</p>
      ) : (
        <div className="space-y-6">
          {vue.explorations.map((g) => (
            <div key={g.id}>
              <h3 className="etiquette text-encre-tenue">
                <Puce m={g} />
                {g.domaine}
              </h3>
              <ul className="mt-3 space-y-3">
                {g.questions.map((q) => (
                  <li key={q.id} className="break-inside-avoid">
                    {/* Le récit du parrain, pas la question : ses mots à lui
                        restent entre lui, son parrain et ses parents. */}
                    <Carte className="p-5">
                      <p className="chiffres text-[0.9375rem] text-encre-tenue">{q.date}</p>
                      <p className="mt-2 whitespace-pre-line text-[1.0625rem] leading-relaxed text-encre-douce">
                        {q.trace}
                      </p>
                    </Carte>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      )}
    </Section>
  );
}

function LesTraces({ vue }: { vue: VueDuControle }) {
  return (
    <Section
      titre="Ce qu’il a fabriqué"
      aide={
        <>
          Des objets, pas des résultats&nbsp;: ce que {vue.enfant} a
          fait, noté par un adulte.
        </>
      }
    >
      {vue.traces.length === 0 ? (
        <p className="text-[1.0625rem] text-encre-tenue">Rien de noté à ce jour.</p>
      ) : (
        <ul className="space-y-3">
          {vue.traces.map((t) => (
            <li key={t.id} className="break-inside-avoid">
              <Carte className="p-5">
                <div className="flex flex-wrap items-baseline justify-between gap-x-5 gap-y-1">
                  <h3 className="font-display text-[1.125rem] leading-snug tracking-tight">
                    {t.titre}
                  </h3>
                  <span className="chiffres text-[0.9375rem] text-encre-tenue">{t.date}</span>
                </div>
                {t.quoi && (
                  <p className="mt-3 whitespace-pre-line text-[1.0625rem] leading-relaxed text-encre-douce">
                    {t.quoi}
                  </p>
                )}
                {t.matiere && <Matieres liste={[t.matiere]} />}
              </Carte>
            </li>
          ))}
        </ul>
      )}
    </Section>
  );
}

/* ------------------------------------------------------------------ */

function Puce({ m }: { m: { teinte: string } }) {
  const t = classesTeinte[m.teinte] ?? classesTeinte["encre-douce"];
  return (
    <span
      aria-hidden
      className={`mr-2 inline-block h-2 w-2 rounded-full align-middle ${t.puce}`}
    />
  );
}

function Matieres({ liste }: { liste: MatiereMontree[] }) {
  return (
    <ul className="mt-4 flex flex-wrap items-center gap-x-4 gap-y-1 border-t border-bord pt-3">
      {liste.map((m) => (
        <li key={m.id} className="text-[0.875rem] text-encre-douce">
          <Puce m={m} />
          {m.nom}
        </li>
      ))}
    </ul>
  );
}
