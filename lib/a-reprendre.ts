/**
 * Ce qui mérite d'être retravaillé, et la cloche qui le dit.
 *
 * Retour d'un parent, le 21 septembre 2026 : quand l'enfant fait une leçon
 * seul, à l'écran, personne n'est à côté de lui. Le relevé du soir existe,
 * mais il ne se lit que sur la bonne journée, et seulement si l'on pense à
 * l'ouvrir. Il voulait une cloche qui dise « cette leçon-là mérite d'être
 * retravaillée », pour la reprendre à la main plus tard — une information de
 * pilotage sur une leçon, pas une alerte sur l'enfant.
 *
 * **La cloche s'allume dès deux exercices pas passés**, « Je ne sais pas »
 * compris, **ou quand il a mis la leçon de côté** (« Je bloque »). Seuil choisi
 * par le parrain parmi quatre : sur les six leçons des 17 et 18 septembre, deux
 * l'auraient allumée, contre cinq au premier exercice raté — une cloche
 * toujours allumée finit par ne plus se regarder. Une leçon avec un seul
 * exercice pas passé reste dans l'historique, sans sonner.
 *
 * Une leçon ne se juge qu'une fois qu'il en a fini : cochée, mise de côté,
 * tous ses exercices inscrits, sa journée refermée, ou le lendemain. Pendant
 * qu'il travaille, deux exercices ratés sur trois ne disent rien des cinq qui
 * viennent.
 *
 * **Réservé aux adultes** : ce module passe par `lib/releve.ts`, donc par le
 * manuel et ses résultats. Rien ne change du côté de l'enfant, dont l'écran dit
 * déjà, à la fin d'une leçon, « Ton travail est parti chez papa et maman ».
 */

import { lignes } from "./base";
import { releveDeSeance, type LigneRelevee } from "./releve";
import { estUneReprise } from "./programme";
import type { LigneTravail } from "./travail";
import type { ClotureJour, EtatSeance } from "./journee";
import type { MatiereId } from "./data";

/** Le nombre d'exercices pas passés qui allume la cloche. */
export const SEUIL = 2;

/** Une séance qui porte une leçon, avec ce qu'il y a inscrit. */
export type SeanceDeLecon = {
  id: string;
  jour: string;
  rang: number;
  lecon: string;
  titre: string;
  etat: EtatSeance;
  cloture: ClotureJour | null;
  /**
   * Le dernier geste sur la séance — un exercice inscrit, « J'ai fini »,
   * « Je bloque » —, en secondes depuis 1970. C'est lui qui dit si c'est
   * nouveau depuis la dernière fois qu'un adulte a ouvert la cloche.
   */
  moment: number | null;
  travail: LigneTravail[];
};

/** Ce qu'est devenue la leçon après : sa reprise, prévue ou faite. */
export type Suite =
  | { quand: "prevue"; jour: string }
  | { quand: "faite"; jour: string; faits: number; pasPasses: number };

export type AReprendre = {
  seanceId: string;
  jour: string;
  moment: number | null;
  lecon: { code: string; titre: string; matiere: MatiereId };
  /** La leçon revenait (« — on reprend ») : ce n'était pas la première fois. */
  reprise: boolean;
  faits: number;
  total: number;
  /** Ce qui n'est pas passé, exercice par exercice. */
  ecarts: LigneRelevee[];
  /** « Je bloque ». */
  miseDeCote: boolean;
  /** Au seuil ou au-delà : la cloche s'allume. */
  sonne: boolean;
  suite: Suite | null;
};

/** La règle de la cloche, seule. */
export const sonne = (pasPasses: number, miseDeCote: boolean) =>
  miseDeCote || pasPasses >= SEUIL;

/**
 * Il en a fini avec cette séance-là.
 *
 * Tant qu'elle est ouverte sous ses yeux, on ne la juge pas : la cloche
 * s'allumerait au deuxième exercice raté, puis s'éteindrait au huitième.
 */
export function finie(
  s: Pick<SeanceDeLecon, "etat" | "cloture" | "jour">,
  faits: number,
  total: number,
  aujourdhui: string,
) {
  return (
    s.etat !== "a-venir" ||
    s.cloture !== null ||
    s.jour < aujourdhui ||
    (total > 0 && faits >= total)
  );
}

/**
 * Tout ce qui est à reprendre, du plus récent au plus ancien.
 *
 * `seances` : toutes les séances de leçon de la famille, **dans l'ordre des
 * journées** — les suivantes servent à dire quand la leçon revient.
 * Pur : la lecture en base est plus bas.
 */
export function ceQuiEstAReprendre(seances: SeanceDeLecon[], aujourdhui: string): AReprendre[] {
  const trouves: AReprendre[] = [];

  seances.forEach((s, i) => {
    if (s.jour > aujourdhui) return;
    const r = releveDeSeance(s.lecon, s.travail, s.titre);
    if (!r) return;
    const miseDeCote = s.etat === "reportee";
    if (r.ecarts.length === 0 && !miseDeCote) return;
    if (!finie(s, r.faits, r.total, aujourdhui)) return;

    trouves.push({
      seanceId: s.id,
      jour: s.jour,
      moment: s.moment,
      lecon: { code: r.lecon.code, titre: r.lecon.titre, matiere: r.lecon.matiere },
      reprise: estUneReprise(s.titre),
      faits: r.faits,
      total: r.total,
      ecarts: r.ecarts,
      miseDeCote,
      sonne: sonne(r.ecarts.length, miseDeCote),
      suite: suiteDe(seances.slice(i + 1).find((x) => x.lecon === s.lecon), aujourdhui),
    });
  });

  return trouves.reverse();
}

/**
 * La prochaine fois que la leçon revient. Une reprise passée sans rien
 * d'inscrit ne dit rien : elle est dans ce qui reste à rattraper, pas ici.
 */
function suiteDe(s: SeanceDeLecon | undefined, aujourdhui: string): Suite | null {
  if (!s) return null;
  const r = releveDeSeance(s.lecon, s.travail, s.titre);
  if (r && r.faits > 0 && finie(s, r.faits, r.total, aujourdhui)) {
    return { quand: "faite", jour: s.jour, faits: r.faits, pasPasses: r.ecarts.length };
  }
  if (s.etat === "a-venir" && s.jour >= aujourdhui) return { quand: "prevue", jour: s.jour };
  return null;
}

/** Ce qui fait sonner la cloche et qu'un adulte n'a pas encore vu. */
export const nouveaux = (items: AReprendre[], vuLe: number | null) =>
  items.filter((x) => x.sonne && (vuLe === null || (x.moment ?? 0) > vuLe));

/* ------------------------------------------------------------------ */
/* La lecture en base                                                  */
/* ------------------------------------------------------------------ */

/**
 * Les séances de leçon d'une famille, avec leur travail.
 *
 * `depuis` (secondes depuis 1970) ne garde que ce qui a bougé après ce
 * moment : c'est ce que lit le bandeau à chaque page, et il n'a besoin que du
 * nouveau. La page de la cloche, elle, lit tout — il lui faut aussi les
 * reprises à venir.
 */
export async function seancesDeLecon(familleId: string, depuis?: number | null) {
  return lignes<SeanceDeLecon>(
    `select * from (
       select s.id, j.jour::text as jour, s.rang, s.lecon, s.titre, s.etat, j.cloture,
              extract(epoch from greatest(
                s.bougee_le,
                (select max(t.saisi_le) from travail t where t.seance_id = s.id)
              ))::float8 as moment,
              coalesce(
                (select json_agg(json_build_object(
                          'exercice', t.exercice, 'valeur', t.valeur,
                          'sait_pas', t.sait_pas, 'saisi_le', t.saisi_le::text)
                        order by t.saisi_le)
                   from travail t where t.seance_id = s.id),
                '[]'::json) as travail,
              s.cree_le
         from seance s
         join journee j on j.id = s.journee_id
        where j.famille_id = $1 and s.lecon <> ''
     ) x
     where $2::float8 is null or x.moment > $2::float8
     order by x.jour, x.rang, x.cree_le`,
    [familleId, depuis ?? null],
  );
}

/**
 * Quand cette personne a ouvert la cloche pour la dernière fois, et l'heure
 * qu'il est — celle de la base, la même horloge que le geste qui l'éteint.
 */
export async function vuLeDe(personneId: string) {
  const r = await lignes<{ vu: number | null; maintenant: number }>(
    `select extract(epoch from a_reprendre_vu_le)::float8 as vu,
            extract(epoch from now())::float8 as maintenant
       from personne where id = $1`,
    [personneId],
  );
  return { vu: r[0]?.vu ?? null, maintenant: r[0]?.maintenant ?? 0 };
}

/**
 * Pour le bandeau : combien de leçons font sonner la cloche depuis la
 * dernière visite, et le moment de la plus récente — c'est lui qui permet au
 * bandeau de s'éteindre dès qu'on a ouvert la page, sans attendre un
 * rechargement.
 */
export async function cloche(familleId: string, personneId: string, aujourdhui: string) {
  const { vu } = await vuLeDe(personneId);
  const n = nouveaux(ceQuiEstAReprendre(await seancesDeLecon(familleId, vu), aujourdhui), vu);
  return {
    nouveaux: n.length,
    dernier: n.reduce((m, x) => Math.max(m, x.moment ?? 0), 0),
  };
}
