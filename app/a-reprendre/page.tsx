import Link from "next/link";
import { redirect } from "next/navigation";
import { Bureau, Section, Carte, LienTete } from "@/components/adulte/Bureau";
import Ecarts from "@/components/adulte/Ecarts";
import ClocheOuverte from "@/components/adulte/ClocheOuverte";
import { personneConnectee, entreeAdulte } from "@/lib/session";
import { aujourdhui } from "@/lib/journee";
import { dateEnLettres } from "@/lib/bande";
import { classesTeinte, matieres } from "@/lib/data";
import {
  ceQuiEstAReprendre,
  seancesDeLecon,
  vuLeDe,
  SEUIL,
  type AReprendre,
  type Suite,
} from "@/lib/a-reprendre";

/**
 * Ce qui est à reprendre — la page derrière la cloche.
 *
 * Demandée par un parent le 21 septembre 2026 : les leçons, l'enfant les fait
 * seul, et le soir de La journée ne se lit que sur la bonne date. Ici,
 * l'historique entier, du plus récent au plus ancien : ce qui mérite d'être
 * retravaillé d'abord — c'est ce qui allume la cloche —, puis, replié, les
 * leçons où un seul exercice n'est pas passé.
 *
 * Chaque leçon dit ce qu'elle est devenue : sa reprise, prévue ou faite. C'est
 * ce qui permet de décider s'il faut s'en mêler ou laisser la reprise faire.
 *
 * Il n'en voit rien, et rien ne change chez lui. Les compteurs sont permis de
 * ce côté-ci.
 */

export const dynamic = "force-dynamic";

const exercices = (n: number) => `${n} exercice${n > 1 ? "s" : ""}`;

/** « 2 exercices sur 8 ne sont pas passés ». */
function pasPasses(n: number, sur: number) {
  return `${exercices(n)} sur ${sur} ${n > 1 ? "ne sont pas passés" : "n’est pas passé"}`;
}

/** Ce qui s'est passé dans la séance, en une ligne. */
function constat(x: AReprendre) {
  const n = x.ecarts.length;
  if (x.miseDeCote) {
    if (x.faits === 0) return "mise de côté avant les exercices";
    return `mise de côté après ${exercices(x.faits)}${n > 0 ? ` — ${pasPasses(n, x.faits)}` : ""}`;
  }
  return x.faits < x.total
    ? `${pasPasses(n, x.faits)} — il en a fait ${x.faits} sur ${x.total}`
    : pasPasses(n, x.faits);
}

/** Ce qu'est devenue la leçon après. */
function suiteEnMots(s: Suite, auj: string) {
  if (s.quand === "prevue") {
    return s.jour === auj
      ? "Elle revient d’elle-même aujourd’hui."
      : `Elle revient d’elle-même le ${dateEnLettres(s.jour)}.`;
  }
  return s.pasPasses === 0
    ? `Reprise le ${dateEnLettres(s.jour)} : tout est passé.`
    : `Reprise le ${dateEnLettres(s.jour)} : ${pasPasses(s.pasPasses, s.faits)}.`;
}

function CarteLecon({ x, nouveau, auj }: { x: AReprendre; nouveau: boolean; auj: string }) {
  /* La couleur de sa matière, comme sur son chemin et sur La journée. La
     bande ocre de ce qui sonne faisait doublon avec la section qui le range. */
  const t = classesTeinte[matieres[x.lecon.matiere]?.teinte ?? "encre-douce"];
  return (
    <Carte className="p-5">
      <div className="flex flex-wrap items-center gap-x-3 gap-y-1">
        <span className={`etiquette flex items-center gap-2 ${t.texte}`}>
          <span aria-hidden className={`size-2.5 rounded-full ${t.puce}`} />
          {matieres[x.lecon.matiere]?.nom}
        </span>
        {nouveau && (
          <span className="etiquette rounded-full bg-miel px-2 py-0.5 text-encre">nouveau</span>
        )}
      </div>
      <h3 className="mt-1.5 font-display text-[1.125rem] leading-snug tracking-tight">
        <Link
          href={`/manuel/${x.lecon.code}`}
          className="underline decoration-bord-fort underline-offset-4 hover:decoration-encre"
        >
          {x.lecon.titre}
        </Link>
        {x.reprise && (
          <span className="ml-2 font-sans text-[0.9375rem] text-encre-tenue">— la reprise</span>
        )}
      </h3>
      <p className="mt-1 text-[0.9375rem] leading-relaxed text-encre-douce">
        <Link
          href={`/pilotage?jour=${x.jour}`}
          className="underline decoration-bord-fort underline-offset-4 hover:text-encre"
        >
          {x.jour === auj ? "aujourd’hui" : dateEnLettres(x.jour)}
        </Link>{" "}
        · {constat(x)}
      </p>
      {x.ecarts.length > 0 && <Ecarts ecarts={x.ecarts} lecon={x.lecon.code} />}
      {x.suite && (
        <p className="mt-3 text-[0.9375rem] leading-relaxed text-encre">{suiteEnMots(x.suite, auj)}</p>
      )}
    </Carte>
  );
}

export default async function PageAReprendre() {
  const moi = await personneConnectee();
  if (!moi) redirect(entreeAdulte("/a-reprendre"));
  if (moi.role === "enfant") redirect("/journee");

  /* Le moment de la lecture, pris avant de lire les leçons : ce qui bouge
     pendant qu'on la lit n'a pas été vu. */
  const { vu, maintenant: lueA } = await vuLeDe(moi.id);
  const auj = aujourdhui();
  const tout = ceQuiEstAReprendre(await seancesDeLecon(moi.famille_id), auj);
  const aRetravailler = tout.filter((x) => x.sonne);
  const sousLeSeuil = tout.filter((x) => !x.sonne);
  const nouveau = (x: AReprendre) => x.sonne && (vu === null || (x.moment ?? 0) > vu);

  return (
    <Bureau
      qui={`${moi.prenom} · ${moi.role_affiche}`}
      titre="Ce qui est à reprendre"
      chapeau="Les leçons qu’il fait seul, à l’écran, quand des exercices ne sont pas passés. Il ne voit rien de cette page."
      actions={<LienTete href="/pilotage">La journée</LienTete>}
    >
      <ClocheOuverte lueA={lueA} />

      <Section
        titre="Mérite d’être retravaillé"
        aide={`Dès ${SEUIL} exercices pas passés — « je ne sais pas » compris —, ou quand il a mis la leçon de côté. C’est ce qui allume la cloche.`}
      >
        {aRetravailler.length === 0 ? (
          <p className="text-[1.0625rem] text-encre-tenue">
            Rien pour l’instant. La cloche s’allumera quand une leçon faite seul méritera d’être
            retravaillée.
          </p>
        ) : (
          <ul className="space-y-4">
            {aRetravailler.map((x) => (
              <li key={x.seanceId}>
                <CarteLecon x={x} nouveau={nouveau(x)} auj={auj} />
              </li>
            ))}
          </ul>
        )}
      </Section>

      {sousLeSeuil.length > 0 && (
        <details className="mt-12 border-t border-bord pt-6">
          <summary className="cursor-pointer font-display text-[1.375rem] leading-snug tracking-tight sm:text-[1.5rem]">
            {SEUIL === 2 ? "Un seul exercice pas passé" : `Moins de ${SEUIL} exercices pas passés`}
            <span className="chiffres ml-3 font-sans text-[1rem] text-encre-tenue">
              {sousLeSeuil.length} leçon{sousLeSeuil.length > 1 ? "s" : ""}
            </span>
          </summary>
          <p className="mt-2 max-w-3xl text-[0.9375rem] leading-relaxed text-encre-tenue">
            La cloche ne sonne pas pour ça. C’est gardé ici pour voir ce qui revient.
          </p>
          <ul className="mt-5 space-y-4">
            {sousLeSeuil.map((x) => (
              <li key={x.seanceId}>
                <CarteLecon x={x} nouveau={false} auj={auj} />
              </li>
            ))}
          </ul>
        </details>
      )}
    </Bureau>
  );
}
