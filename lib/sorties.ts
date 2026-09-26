/**
 * Les sorties — l'instruction qui n'a pas lieu à la table.
 *
 * En instruction en famille, un marché, un musée ou un chantier regardé une
 * heure **sont** de l'instruction, et c'est exactement ce qu'un contrôle
 * cherche à établir : que l'enfant reçoit un enseignement, pas qu'il coche des
 * livrets.
 *
 * Elles vivent du côté des adultes : ce sont des pièces pour l'inspection, pas
 * un palmarès. L'enfant ne les voit pas — une liste de sorties qu'on lui
 * montrerait deviendrait une liste qu'on peut comparer, et les semaines sans
 * sortie s'y liraient comme des trous.
 *
 * Le fichier a deux moitiés : la logique pure, que `test/sorties.test.ts`
 * vérifie sans base, puis la lecture et l'écriture en base. Les gestes, eux,
 * sont dans `app/gestes/sorties.ts` : c'est là qu'on vérifie qui agit.
 */

import { lignes, executer } from "./base";
import { matieres, type Matiere, type MatiereId } from "./data";

/* Les longueurs acceptées. Le titre suit la contrainte de la migration 015 :
   un titre trop long refusé ici n'arrive jamais jusqu'à une erreur Postgres
   qui ferait tomber l'écran. Les autres n'ont pas de limite en base ; elles en
   ont une ici, large, pour qu'un collage accidentel ne remplisse pas le relevé. */
export const LIMITES_SORTIE = { titre: 200, lieu: 200, quoi: 4000 } as const;

export type Sortie = {
  id: string;
  titre: string;
  lieu: string;
  /* Ce qui s'y est passé, et ce que ça travaillait. Descriptif, jamais
     évaluatif : le relevé ne prétend rien, il décrit. */
  quoi: string;
  /* `AAAA-MM-JJ`. Une vraie date : ce document-ci s'adresse à l'inspection. */
  jour: string;
  matieres: MatiereId[];
  par_adulte: string | null;
  /* Le prénom de l'adulte qui l'a notée, pour les autres adultes. `null` quand
     il n'a plus d'accès : il n'emporte pas ce qu'il a écrit (migration 015). */
  par_prenom: string | null;
};

/** Ce qu'un geste a le droit d'écrire, une fois vérifié. */
export type SortieValidee = Pick<Sortie, "titre" | "lieu" | "quoi" | "jour" | "matieres">;

/* ------------------------------------------------------------------ */
/* La logique pure                                                     */
/* ------------------------------------------------------------------ */

/**
 * `AAAA-MM-JJ`, et une date qui existe vraiment — pas un 31 février.
 *
 * La même que dans `app/actions.ts`, qui ne peut pas la prêter : un fichier
 * `"use server"` n'exporte que des actions, et une fonction synchrone n'en est
 * pas une.
 */
export function dateValide(s: unknown): s is string {
  if (typeof s !== "string" || !/^\d{4}-\d{2}-\d{2}$/.test(s)) return false;
  const d = new Date(`${s}T12:00:00`);
  return !Number.isNaN(d.getTime()) && d.toISOString().slice(0, 10) === s;
}

/** Un texte sans ses espaces de bord, ou `null` s'il ne reste rien ou s'il déborde. */
function texte(v: unknown, max: number): string | null {
  if (typeof v !== "string") return null;
  const net = v.trim();
  return net.length === 0 || net.length > max ? null : net;
}

/**
 * Les matières d'une sortie : connues, sans doublon, et jamais aucune.
 *
 * Une sortie sans matière retombe sur « à la maison » plutôt que de rester
 * vide. Un marché où l'on n'a rien coché reste une journée d'instruction en
 * famille, et une ligne sans matière disparaîtrait de toute couverture — donc
 * du contrôle.
 *
 * Les identifiants inconnus sont écartés : la liste des matières vit dans
 * `lib/data.ts`, pas dans un type Postgres, et c'est ici qu'on la fait
 * respecter. `hasOwnProperty` et pas `in` : `"constructor" in matieres` est
 * vrai.
 */
export function matieresDe(ids: unknown): MatiereId[] {
  const vues: MatiereId[] = [];
  if (Array.isArray(ids)) {
    for (const id of ids) {
      if (
        typeof id === "string" &&
        Object.prototype.hasOwnProperty.call(matieres, id) &&
        !vues.includes(id as MatiereId)
      ) {
        vues.push(id as MatiereId);
      }
    }
  }
  return vues.length > 0 ? vues : ["maison"];
}

/**
 * Ce qu'un adulte a envoyé, vérifié champ par champ — ou `null`.
 *
 * Tout arrive du navigateur, donc rien n'est présumé : ni la forme de l'objet,
 * ni le type des champs. Le titre et « ce qui s'est passé » sont exigés, le
 * second parce que c'est le seul qui compte au contrôle : une sortie réduite à
 * son titre dit qu'on est allé quelque part, pas qu'on y a appris quelque
 * chose. Le lieu peut rester vide.
 */
export function validerSortie(brut: unknown): SortieValidee | null {
  if (!brut || typeof brut !== "object") return null;
  const b = brut as Record<string, unknown>;

  const titre = texte(b.titre, LIMITES_SORTIE.titre);
  const quoi = texte(b.quoi, LIMITES_SORTIE.quoi);
  if (!titre || !quoi || !dateValide(b.jour)) return null;

  /* Le lieu est facultatif : vide, il vaut une chaîne vide ; trop long, la
     sortie est refusée plutôt que tronquée en silence. */
  let lieu = "";
  if (typeof b.lieu === "string" && b.lieu.trim().length > 0) {
    const l = texte(b.lieu, LIMITES_SORTIE.lieu);
    if (!l) return null;
    lieu = l;
  }

  return { titre, lieu, quoi, jour: b.jour, matieres: matieresDe(b.matieres) };
}

/**
 * Les matières touchées par un ensemble de sorties, dans l'ordre d'apparition,
 * chacune une seule fois. Sert au relevé et à la vue du contrôle.
 *
 * Une matière listée deux fois donnerait au contrôle une impression fausse de
 * ce qui a été couvert. L'ordre est celui des sorties reçues : chronologique
 * avec `sortiesDeLaPeriode`, la première sortie ouvre la liste.
 */
export function matieresCouvertes(sorties: { matieres: readonly string[] }[]): Matiere[] {
  const vues: MatiereId[] = [];
  for (const s of sorties) {
    for (const m of matieresDe(s.matieres)) if (!vues.includes(m)) vues.push(m);
  }
  return vues.map((id) => matieres[id]);
}

const MOIS = ["janvier", "février", "mars", "avril", "mai", "juin", "juillet", "août", "septembre", "octobre", "novembre", "décembre"];
const JOURS = ["dimanche", "lundi", "mardi", "mercredi", "jeudi", "vendredi", "samedi"];

/**
 * « samedi 12 septembre 2026 », « 1er octobre 2026 ».
 *
 * Avec l'année, contrairement au pilotage qui ne regarde que la semaine : une
 * pièce pour l'inspection se relit des mois plus tard, et « 12 septembre » ne
 * dit pas de quelle année scolaire.
 */
export function enToutesLettres(iso: string, { avecLeJour = false } = {}) {
  const d = new Date(`${iso}T12:00:00`);
  const n = d.getDate();
  const date = `${n === 1 ? "1er" : n} ${MOIS[d.getMonth()]} ${d.getFullYear()}`;
  return avecLeJour ? `${JOURS[d.getDay()]} ${date}` : date;
}

/* ------------------------------------------------------------------ */
/* En base                                                             */
/* ------------------------------------------------------------------ */

type LigneSortie = Omit<Sortie, "matieres"> & { matieres: string[] };

const COLONNES = `s.id, s.titre, s.lieu, s.quoi, s.jour::text as jour, s.matieres,
                  s.par_adulte, p.prenom as par_prenom`;

/* Ce qui sort de la base repasse par `matieresDe` : la colonne a `'{}'` pour
   valeur par défaut, et une matière retirée du code un jour y resterait
   écrite. L'écran ne doit voir ni l'un ni l'autre. */
const propre = (l: LigneSortie): Sortie => ({ ...l, matieres: matieresDe(l.matieres) });

/** Les sorties d'une famille, les plus récentes d'abord. Pour `/pilotage`. */
export async function sortiesDe(familleId: string): Promise<Sortie[]> {
  const ls = await lignes<LigneSortie>(
    `select ${COLONNES}
       from sortie s
       left join personne p on p.id = s.par_adulte
      where s.famille_id = $1
      order by s.jour desc, s.cree_le desc`,
    [familleId],
  );
  return ls.map(propre);
}

/**
 * Les sorties d'une famille entre deux dates incluses, dans l'ordre où elles
 * ont eu lieu. Pour le relevé et la vue du contrôle, avec `matieresCouvertes`.
 *
 * Une période mal formée lève plutôt que de rendre une liste vide : un relevé
 * qui dirait « aucune sortie » par erreur de date serait une pièce fausse
 * remise à l'inspection.
 */
export async function sortiesDeLaPeriode(
  familleId: string,
  du: string,
  au: string,
): Promise<Sortie[]> {
  if (!dateValide(du) || !dateValide(au)) {
    throw new Error(`Période de sorties invalide : ${du} → ${au}`);
  }
  const ls = await lignes<LigneSortie>(
    `select ${COLONNES}
       from sortie s
       left join personne p on p.id = s.par_adulte
      where s.famille_id = $1 and s.jour between $2::date and $3::date
      order by s.jour, s.cree_le`,
    [familleId, du, au],
  );
  return ls.map(propre);
}

export async function enregistrerSortie(
  familleId: string,
  parAdulte: string,
  s: SortieValidee,
) {
  await executer(
    `insert into sortie (famille_id, titre, lieu, quoi, jour, matieres, par_adulte)
     values ($1, $2, $3, $4, $5::date, $6::text[], $7)`,
    [familleId, s.titre, s.lieu, s.quoi, s.jour, s.matieres, parAdulte],
  );
}

/**
 * Effacer une sortie notée — seulement si elle est de cette famille.
 *
 * Un vrai `delete` : le schéma ne prévoit pas de sortie « retirée », et une
 * sortie qu'on efface est une sortie notée par erreur, pas une pièce qu'on
 * voudrait retrouver.
 *
 * `id::text` plutôt que `id` : l'identifiant vient du navigateur, et une chaîne
 * qui n'a pas la forme d'un uuid ferait lever Postgres au lieu de ne rien
 * trouver. La famille, elle, vient de la session.
 */
export async function supprimerSortie(familleId: string, sortieId: string, parAdulte: string) {
  await executer(
    `delete from sortie where id::text = $1 and famille_id = $2 and par_adulte = $3`,
    [sortieId, familleId, parAdulte],
  );
}
