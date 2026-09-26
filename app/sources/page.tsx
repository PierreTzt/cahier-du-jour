import { redirect } from "next/navigation";
import { Bureau, Section, Carte, LienTete } from "@/components/adulte/Bureau";
import { personneConnectee, entreeAdulte } from "@/lib/session";
import { matieres, type MatiereId } from "@/lib/data";
import { lecons } from "@/lib/programme";
import { ZONE } from "@/lib/trame";

/**
 * Les sources. **Écran d'adulte.**
 *
 * Le parrain l'a demandé : « qu'on ait un lien direct pour aller chercher les
 * informations à la source et celles que tu as utilisées pour construire les
 * cours ».
 *
 * C'est une demande de fond, pas de confort. L'enfant est en instruction en
 * famille : un inspecteur d'académie le contrôle au moins une fois par an, et
 * ce contrôle porte sur le programme en vigueur. Un parent qui peut ouvrir le
 * texte officiel en un clic n'a pas à croire ce manuel sur parole — il peut le
 * vérifier, et le défendre.
 *
 * Cette page dit donc trois choses pour chaque source : ce qu'elle est, ce
 * qu'elle a servi à écrire, et **depuis quand elle s'applique**. C'est ce
 * dernier point qui m'a fait me tromper : j'avais d'abord travaillé sur des
 * attendus périmés, et deux programmes sur trois étaient neufs pour cette
 * rentrée.
 */

export const dynamic = "force-dynamic";

type Source = {
  titre: string;
  lien: string;
  quoi: string;
  quand: string;
  neuf?: true;
  matieres: MatiereId[];
};

const SOURCES: Source[] = [
  {
    titre: "Programme de mathématiques du cycle 3",
    lien: "https://www.education.gouv.fr/sites/default/files/programme-de-math-matiques-pour-le-cycle-3-439827.pdf",
    quoi: "Les trente leçons de mathématiques, et surtout leur ordre : ce programme limite les nombres entiers à quatre chiffres pendant les deux premières périodes, et introduit les décimaux comme des fractions décimales avant l’écriture à virgule.",
    quand: "BO spécial n° 16 du 17 avril 2025 · appliqué au CM1 depuis la rentrée 2025",
    matieres: ["maths"],
  },
  {
    titre: "Programme de français du cycle 3",
    lien: "https://www.education.gouv.fr/sites/default/files/programme-de-fran-ais-pour-le-cycle-3-439824.pdf",
    quoi: "Les trente-et-une leçons de français. Il fixe précisément ce qui est au CM1 et ce qui attend le CM2 : le complément circonstanciel est repéré mais pas encore distingué par sa sorte, et le passé simple n’est pas de cette année.",
    quand: "BO spécial n° 16 du 17 avril 2025 · appliqué au CM1 depuis la rentrée 2025",
    matieres: ["francais"],
  },
  {
    titre: "Programme d’histoire-géographie du cycle 3",
    lien: "https://www.education.gouv.fr/sites/default/files/document/annexe-4-programme-d-histoire-geographie-cycle-3-516779.pdf",
    quoi: "Les dix leçons d’histoire et les dix de géographie. Ce programme a changé les thèmes : le CM1 fait le Moyen Âge, la monarchie des XVIe-XVIIe, les explorations et 1789 ; en géographie, la diversité des modes de vie dans le monde. Chaque thème est rattaché à des périodes précises, que la trame suit.",
    quand: "BO n° 22 du 28 mai 2026 · appliqué au CM1 à cette rentrée",
    neuf: true,
    matieres: ["histoire", "geographie"],
  },
  {
    titre: "Programme de sciences et technologie du cycle 3",
    lien: "https://www.education.gouv.fr/sites/default/files/document/annexe-2-programme-de-sciences-et-technologie-du-cycle-3-519023.pdf",
    quoi: "Les quatorze leçons de sciences, réparties sur les quatre domaines : la matière et les signaux, les êtres vivants, le corps humain, les objets techniques.",
    quand: "BO n° 24 du 11 juin 2026 · appliqué au CM1 à cette rentrée",
    neuf: true,
    matieres: ["sciences"],
  },
  {
    titre: "Attendus de fin d’année de CE2 — mathématiques",
    lien: "https://eduscol.education.fr/document/13960/download",
    quoi: "Les questions de mathématiques du test de positionnement. L’étalon est la fin du CE2 et non le CM1 : on cherche ce qui est consolidé de l’année d’avant.",
    quand: "Éduscol · toujours en ligne",
    matieres: ["maths"],
  },
  {
    titre: "Attendus de fin d’année de CE2 — français",
    lien: "https://eduscol.education.fr/document/13954/download",
    quoi: "Les questions de français du test de positionnement.",
    quand: "Éduscol · toujours en ligne",
    matieres: ["francais"],
  },
  {
    titre: "Repères annuels de progression, cycle 3",
    lien: "https://eduscol.education.fr/document/14026/download",
    quoi: "Ce qui se travaille en quelle période. C’est ce document qui dit que les fractions s’abordent dès la période 1 et que les décimaux attendent la période 2.",
    quand: "Éduscol · accompagne les programmes",
    matieres: ["maths", "francais"],
  },
  {
    titre: "Calendrier scolaire, académie de Lille",
    lien: "https://data.education.gouv.fr/explore/dataset/fr-en-calendrier-scolaire/table/?refine.location=Lille&refine.annee_scolaire=2026-2027",
    quoi: "Les dates de vacances de la trame. Une recherche sur le web m’avait répondu que Lille était en zone A : c’était faux, et l’open data du ministère l’a dit. Une erreur de zone décale une année entière.",
    quand: `Open data du ministère · académie de ${ZONE.academie}, zone ${ZONE.zone}`,
    matieres: [],
  },
  {
    titre: "Ressources d’accompagnement, cycle 3",
    lien: "https://eduscol.education.gouv.fr/4356/enseigner-au-cycle-3",
    quoi: "Le point d’entrée d’Éduscol pour le cycle 3 : les programmes en vigueur, les ressources par matière, et les documents d’accompagnement. À consulter quand une leçon d’ici paraît douteuse.",
    quand: "Éduscol · mis à jour en continu",
    matieres: [],
  },
];

const NON_VERIFIEES: MatiereId[] = ["anglais", "emc", "arts"];

export default async function Sources() {
  const moi = await personneConnectee();
  if (!moi) redirect(entreeAdulte("/sources"));
  if (moi.role === "enfant") redirect("/journee");

  const compte = (m: MatiereId) => lecons.filter((l) => l.matiere === m).length;

  return (
    <Bureau
      qui={`${moi.prenom} · ${moi.role_affiche}`}
      titre="D’où vient ce qu’il apprend"
      chapeau={
        <>
          Chaque leçon de ce manuel est adossée à un texte officiel, et chaque
          texte est ici, en un clic. L’enfant est en instruction en famille :
          un inspecteur d’académie le contrôle au moins une fois par an, et ce
          contrôle porte sur le programme <strong>en vigueur</strong>. Vous
          n’avez donc pas à croire ce manuel sur parole.
        </>
      }
      actions={
        <>
          <LienTete href="/annee">L’année</LienTete>
          <LienTete href="/manuel">Le manuel</LienTete>
          <LienTete href="/pilotage">La journée</LienTete>
        </>
      }
    >
      <Carte accent="ocre" className="mt-8 p-5 sm:p-6">
        <p className="text-[1.0625rem] leading-relaxed text-encre">
          <strong className="font-bold">
            Rien de ce manuel n’a été relu par un enseignant.
          </strong>{" "}
          Cent treize leçons et huit cents exercices écrits d’après les
          programmes officiels, mais par quelqu’un qui n’est pas du métier. Ça
          donne une base utilisable et vérifiable ; ça ne remplace pas le regard
          de quelqu’un qui enseigne. C’est la première chose à faire faire.
        </p>
      </Carte>

      <Section
        titre="Les textes"
        aide="Ceux marqués « neuf » sont entrés en application au CM1 à cette rentrée. C’est ce qui m’a fait me tromper une première fois : j’avais travaillé sur des attendus périmés, et le programme de mathématiques en vigueur séquence l’année autrement."
      >
        <ul className="space-y-4">
          {SOURCES.map((s) => (
            <li key={s.lien}>
              <Carte className="p-5">
                <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
                  <a
                    href={s.lien}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-display text-[1.125rem] leading-snug tracking-tight text-encre underline decoration-bord-fort underline-offset-4 transition-colors hover:decoration-encre"
                  >
                    {s.titre}
                  </a>
                  {s.neuf && (
                    <span className="etiquette rounded-full bg-ocre/12 px-2.5 py-0.5 text-ocre">
                      neuf
                    </span>
                  )}
                </div>

                <p className="chiffres mt-1.5 text-[0.875rem] text-encre-tenue">
                  {s.quand}
                </p>

                <p className="mt-3 text-[1rem] leading-relaxed text-encre-douce">
                  {s.quoi}
                </p>

                {s.matieres.length > 0 && (
                  <p className="mt-3 flex flex-wrap gap-x-4 gap-y-1 text-[0.875rem] text-encre-tenue">
                    {s.matieres.map((m) => (
                      <span key={m}>
                        {matieres[m].nom} · {compte(m)} leçons
                      </span>
                    ))}
                  </p>
                )}
              </Carte>
            </li>
          ))}
        </ul>
      </Section>

      <Section
        titre="Ce que je n’ai pas vérifié"
        aide="Trois matières n’ont pas de programme neuf pour cette rentrée, et je n’ai pas remonté l’article exact qui les régit. Les leçons s’appuient sur les compétences du cycle 3, ce qui est honnête mais moins précis que le reste."
      >
        <Carte accent="neutre" className="p-5">
          <ul className="space-y-2">
            {NON_VERIFIEES.map((m) => (
              <li key={m} className="text-[1.0625rem] text-encre-douce">
                <strong className="font-bold text-encre">
                  {matieres[m].nom}
                </strong>{" "}
                · {compte(m)} leçons · référence au programme de cycle 3, sans
                citation d’article
              </li>
            ))}
          </ul>
          <p className="mt-4 text-[0.9375rem] leading-relaxed text-encre-tenue">
            Et une limite qui n’est pas une question de source : ces matières se
            pratiquent. Une langue s’apprend par l’oreille, les arts avec les
            mains. Les leçons d’ici donnent du vocabulaire et apprennent à
            regarder — elles ne remplacent pas de chanter ou de dessiner, et
            chaque cours le dit.
          </p>
        </Carte>
      </Section>
    </Bureau>
  );
}
