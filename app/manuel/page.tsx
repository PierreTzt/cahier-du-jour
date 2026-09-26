import { redirect } from "next/navigation";
import ParcourirLeManuel, {
  type LeconAuManuel,
} from "@/components/adulte/ParcourirLeManuel";
import { Bureau, Section, Carte, Chiffre, LienTete } from "@/components/adulte/Bureau";
import { personneConnectee, entreeAdulte } from "@/lib/session";
import { matieres, type MatiereId } from "@/lib/data";
import { lecons, tailleLecon, motsDuManuel } from "@/lib/programme";
import { leconsPosees } from "@/lib/journee";

/**
 * Le manuel, en entier. **Écran d'adulte.**
 *
 * « On connaît le programme mais on ne peut pas cliquer pour voir le cours. »
 * L'année se voyait, la bibliothèque se filtrait, et rien ne s'ouvrait : les
 * cent treize leçons n'étaient lisibles que par l'enfant, une à la fois, le
 * jour où elle tombait. Un manuel que les adultes ne peuvent pas lire ne peut
 * ni se vérifier, ni se préparer, ni se faire relire par un enseignant — ce
 * qui est pourtant la chose la plus importante qui reste à faire.
 *
 * Cet écran est donc la table des matières, et chaque ligne s'ouvre.
 */

export const dynamic = "force-dynamic";

const MOIS = ["janvier","février","mars","avril","mai","juin","juillet","août","septembre","octobre","novembre","décembre"];

function courtEnFrancais(iso: string) {
  const d = new Date(`${iso}T12:00:00`);
  const n = d.getDate();
  return `${n === 1 ? "1er" : n} ${MOIS[d.getMonth()]}`;
}

export default async function Manuel() {
  const moi = await personneConnectee();
  if (!moi) redirect(entreeAdulte("/manuel"));
  if (moi.role === "enfant") redirect("/journee");

  const posees = await leconsPosees(moi.famille_id);
  const premierJour = new Map<string, string>();
  for (const p of posees) if (!premierJour.has(p.lecon)) premierJour.set(p.lecon, p.jour);

  const liste: LeconAuManuel[] = lecons.map((l) => ({
    code: l.code,
    matiere: l.matiere as string,
    periode: l.periode as number,
    titre: l.titre,
    minutes: l.minutes,
    exercices: tailleLecon(l),
    dejaLe: premierJour.has(l.code)
      ? courtEnFrancais(premierJour.get(l.code)!)
      : null,
    reserveeAuxParents: l.reserveeAuxParents === true,
  }));

  const exercices = lecons.reduce((t, l) => t + tailleLecon(l), 0);
  /* Le texte, les règles et les exemples — ce qui se lit comme un cours. La
     définition vit dans `lib/programme` : elle avait déjà divergé entre cette
     page et le README. */
  const mots = motsDuManuel();
  const parMatiere = (Object.keys(matieres) as MatiereId[])
    .map((m) => ({ m, n: lecons.filter((l) => l.matiere === m).length }))
    .filter((x) => x.n > 0);

  return (
    <Bureau
      qui={`${moi.prenom} · ${moi.role_affiche}`}
      titre="Le manuel"
      chapeau={
        <>
          Les {lecons.length} leçons de l’année, lisibles en entier — le cours
          tel que l’enfant le voit, les exemples traités, et{" "}
          <strong className="font-bold text-encre">
            les énoncés avec leurs réponses
          </strong>
          . De quoi préparer une séance, corriger un brouillon, ou simplement
          vérifier ce qu’il y a derrière un titre de l’emploi du temps.
        </>
      }
      actions={
        <>
          <LienTete href="/annee">L’année</LienTete>
          <LienTete href="/positionnement">Le test</LienTete>
          <LienTete href="/sources">Les sources</LienTete>
        </>
      }
    >
      <Section titre="Ce qu’il contient">
        <dl className="grid grid-cols-2 gap-6 sm:grid-cols-4">
          <Chiffre n={lecons.length} quoi="leçons" />
          <Chiffre n={exercices} quoi="exercices" />
          <Chiffre n={`${Math.round(mots / 1000)} 000`} quoi="mots de cours" />
          <Chiffre n={parMatiere.length} quoi="matières" />
        </dl>

        <Carte accent="ocre" className="mt-6 p-5">
          <p className="text-[1rem] leading-relaxed text-encre">
            <strong className="font-bold">
              Rien de ce manuel n’a été relu par un enseignant.
            </strong>{" "}
            Il est écrit d’après les programmes officiels, mais par quelqu’un
            qui n’est pas du métier. C’est précisément pour ça que cette page
            existe : un texte qu’on ne peut pas lire ne peut pas être corrigé.
            Si une leçon vous paraît fausse, elle l’est peut-être — les textes
            de référence sont sur{" "}
            <a
              href="/sources"
              className="underline decoration-bord-fort underline-offset-4 hover:decoration-encre"
            >
              la page des sources
            </a>
            .
          </p>
        </Carte>
      </Section>

      <Section
        titre="Les leçons"
        aide="Par matière, par période, ou par un mot du titre. Une ligne s’ouvre sur la leçon entière."
      >
        <ParcourirLeManuel lecons={liste} />
      </Section>
    </Bureau>
  );
}
