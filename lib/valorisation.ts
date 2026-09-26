/**
 * Ce qui revient à l'enfant quand un adulte l'a vu travailler.
 *
 * Un parent a demandé une valorisation, et il avait trouvé un vrai trou :
 * l'application efface volontairement toute reconnaissance — pas de compteur,
 * rien qui remonte à l'enfant — si bien qu'un père qui voit son fils
 * s'accrocher n'a aucun endroit pour le lui dire.
 *
 * Ce n'est pas un bon point, et la nuance est tout le sujet. Un jeton est
 * conditionnel, il s'accumule vers une cible, et **son absence parle** : les
 * mauvais jours il n'y a rien, et ce rien est ce que l'enfant lit le plus
 * fort. Deux registres le remplacent :
 *
 *   le mot   — un adulte décrit ce qu'il a vu, il ne note pas. Ça se laisse
 *              aussi un jour d'effondrement, ce qu'un jeton ne peut pas faire ;
 *   la trace — ce qu'il a FABRIQUÉ, pas ce qu'il a réussi. Un objet, pas un
 *              résultat : on ne peut pas rater un volcan.
 *
 * Le module a deux moitiés, comme `lib/journee.ts` : ce qui lit et écrit en
 * base, et les projections pures de ce que l'écran de l'enfant a le droit de
 * savoir — celles-là sont déroulées par `npm test`.
 */

import { lignes, ligne } from "./base";
import { matieres, type MatiereId } from "./data";
import { desordonner, formatDe, momentDe, type Carte } from "./collection";
import type { Ressenti } from "./journee";

/* ------------------------------------------------------------------ */
/* Ce qui se lit en base                                               */
/* ------------------------------------------------------------------ */

export type LigneMot = {
  id: string;
  journee_id: string;
  texte: string;
  cree_le: Date;
  par_adulte: string | null;
  /* Pour les adultes : qui l'a écrit. Ne traverse jamais vers l'enfant. */
  par_prenom: string | null;
  /* Pour l'enfant : « papa », « maman », « parrain ». `null` quand l'adulte
     n'a plus d'accès — son mot reste, sans signature. */
  par_mot: string | null;
};

export type LigneTrace = {
  id: string;
  titre: string;
  quoi: string;
  /* Un identifiant de `lib/data.ts`, vérifié à l'écriture — mais la liste des
     matières vit dans le code et elle a déjà changé une fois (`histgeo`). */
  matiere: string;
  cree_le: Date;
  par_adulte: string | null;
  par_prenom: string | null;
};

/**
 * Les mots d'une journée, du plus ancien au plus récent.
 *
 * La famille est vérifiée ici aussi, et pas seulement par l'appelant : c'est
 * ce qui fait qu'un identifiant de journée ne suffit pas à lire les mots
 * d'une autre maison.
 */
export async function motsDe(journeeId: string, familleId: string) {
  return lignes<LigneMot>(
    `select m.id, m.journee_id, m.texte, m.cree_le, m.par_adulte,
            p.prenom as par_prenom, p.mot_de_l_enfant as par_mot
       from mot m
       join journee j on j.id = m.journee_id
       left join personne p on p.id = m.par_adulte
      where m.journee_id = $1 and j.famille_id = $2
      order by m.cree_le, m.id`,
    [journeeId, familleId],
  );
}

/**
 * Les traces de la famille, les plus récentes d'abord — l'ordre des adultes.
 * L'écran de l'enfant le défait, voir `cahierVivant`.
 */
export async function tracesDe(familleId: string) {
  return lignes<LigneTrace>(
    `select t.id, t.titre, t.quoi, t.matiere, t.cree_le, t.par_adulte,
            p.prenom as par_prenom
       from trace t
       left join personne p on p.id = t.par_adulte
      where t.famille_id = $1
      order by t.cree_le desc, t.id`,
    [familleId],
  );
}

/* ------------------------------------------------------------------ */
/* Ce qui s'écrit                                                      */
/* ------------------------------------------------------------------ */

/**
 * Laisser un mot, **sur une journée de la famille, et pas une journée passée**.
 *
 * L'identifiant de journée vient du navigateur : le `famille_id = $4` est ce
 * qui empêche d'écrire chez quelqu'un d'autre en le devinant. Et l'enfant ne
 * voit jamais qu'aujourd'hui : un mot laissé sur hier ne lui parviendrait
 * pas, alors que l'adulte croirait l'avoir donné. On le refuse ici, dans la
 * même requête, plutôt que de compter sur l'écran pour ne pas le proposer.
 *
 * Rend `true` si le mot est écrit.
 */
export async function ecrireMot(
  journeeId: string,
  familleId: string,
  texte: string,
  parAdulte: string,
  aujourdhui: string,
) {
  const r = await ligne<{ id: string }>(
    `insert into mot (journee_id, texte, par_adulte)
     select j.id, $2::text, $3::uuid from journee j
      where j.id = $1 and j.famille_id = $4 and j.jour >= $5::date
     returning id`,
    [journeeId, texte, parAdulte, familleId, aujourdhui],
  );
  return r !== null;
}

/** Retirer un mot : le sien seulement, dans sa famille seulement. */
export async function retirerMot(motId: string, familleId: string, parAdulte: string) {
  const r = await ligne<{ id: string }>(
    `delete from mot m using journee j
      where m.id = $1 and j.id = m.journee_id
        and j.famille_id = $2 and m.par_adulte = $3
     returning m.id`,
    [motId, familleId, parAdulte],
  );
  return r !== null;
}

export async function ecrireTrace(
  familleId: string,
  t: { titre: string; quoi: string; matiere: MatiereId },
  parAdulte: string,
) {
  const r = await ligne<{ id: string }>(
    `insert into trace (famille_id, titre, quoi, matiere, par_adulte)
     values ($1, $2, $3, $4, $5)
     returning id`,
    [familleId, t.titre, t.quoi, t.matiere, parAdulte],
  );
  return r !== null;
}

/** Retirer une trace : la sienne seulement, dans sa famille seulement. */
export async function retirerTrace(traceId: string, familleId: string, parAdulte: string) {
  const r = await ligne<{ id: string }>(
    `delete from trace
      where id = $1 and famille_id = $2 and par_adulte = $3
     returning id`,
    [traceId, familleId, parAdulte],
  );
  return r !== null;
}

/* ------------------------------------------------------------------ */
/* Ce qui entre : vérifié, jamais tronqué                              */
/* ------------------------------------------------------------------ */

/**
 * Un texte d'adulte, nettoyé et borné — ou `null` s'il ne passe pas.
 *
 * On refuse plutôt que de couper : un mot tronqué au millième caractère
 * serait une phrase interrompue, et c'est l'enfant qui la lirait. Les bornes
 * sont celles de la migration 015, comptées comme Postgres les compte — en
 * caractères, pas en unités UTF-16.
 */
export function texteBorne(brut: unknown, max: number) {
  if (typeof brut !== "string") return null;
  /* Postgres refuse le caractère nul dans un `text` : on le retire plutôt que
     de faire lever la requête. */
  const propre = brut.split(String.fromCharCode(0)).join("").trim();
  const longueur = Array.from(propre).length;
  return longueur === 0 || longueur > max ? null : propre;
}

export function estMatiere(x: unknown): x is MatiereId {
  return typeof x === "string" && Object.prototype.hasOwnProperty.call(matieres, x);
}

/* ------------------------------------------------------------------ */
/* Ce que l'écran de l'enfant a le droit de savoir                     */
/* ------------------------------------------------------------------ */

/** Ce que l'enfant reçoit d'un mot. Deux chaînes, et rien d'autre. */
export type MotRecu = {
  texte: string;
  /* Le mot qu'il emploie pour l'auteur. Jamais un prénom. */
  signe: string | null;
};

/**
 * Le mot du jour : un seul, le dernier laissé.
 *
 * Jamais une liste. Une pile de mots se compte, se compare, et fabrique des
 * jours creux — « hier il y en avait trois ». Si papa et maman en ont laissé
 * chacun un, il lit le dernier ; les autres restent du côté des adultes.
 *
 * Le filtre sur la journée double celui de la requête : même si on lui passe
 * tous les mots de la famille, il ne sort que celui du jour.
 */
export function motDuJour(mots: LigneMot[], journeeId: string): LigneMot | null {
  let dernier: LigneMot | null = null;
  for (const m of mots) {
    if (m.journee_id !== journeeId) continue;
    /* `>=` : à heure égale, le dernier arrivé dans la liste gagne, et la
       requête les rend dans l'ordre d'écriture. */
    if (!dernier || m.cree_le.getTime() >= dernier.cree_le.getTime()) dernier = m;
  }
  return dernier;
}

/**
 * Ce qu'il lit, et quand.
 *
 * **Seulement après avoir déposé son ressenti** — y compris « je préfère ne
 * rien dire », qui est une réponse, et y compris un jour où il a arrêté : rien
 * ici ne regarde comment la journée s'est passée. S'il n'y a pas de mot, rien
 * du tout : pas de « pas de mot aujourd'hui », pas de case vide. `null`, et
 * l'écran n'a rien à dessiner.
 */
export function motRecu(
  ressenti: Ressenti | null,
  mots: LigneMot[],
  journeeId: string,
): MotRecu | null {
  if (!ressenti) return null;
  const m = motDuJour(mots, journeeId);
  return m ? { texte: m.texte, signe: m.par_mot } : null;
}

/**
 * Les traces, sous la forme d'une collection : aucun nombre, aucune date,
 * aucun ordre chronologique (voir `lib/collection.ts`).
 *
 * La matière donne la couleur et le libellé, jamais un classement : rien
 * n'affiche « il en manque en anglais ». Une matière que `lib/data.ts` ne
 * connaît plus garde sa carte — ce qu'il a fabriqué ne disparaît pas parce
 * qu'une liste a été renommée — mais sans libellé plutôt qu'avec un faux.
 */
export function cahierVivant(traces: LigneTrace[]): Carte[] {
  return desordonner(
    traces.map((t) => {
      const m = estMatiere(t.matiere) ? matieres[t.matiere] : null;
      return {
        id: t.id,
        texte: t.titre,
        recit: t.quoi,
        moment: momentDe(t.cree_le),
        etiquette: { libelle: m?.nom ?? "", teinte: m?.teinte ?? "encre-douce" },
        format: formatDe(t.id),
      };
    }),
  );
}

/* ------------------------------------------------------------------ */
/* Écrans d'adulte                                                     */
/* ------------------------------------------------------------------ */

/**
 * Où arrivera un mot laissé sur ce jour-là.
 *
 * L'écran de l'enfant ne lui propose de dire comment il se sent que quand sa
 * journée a des séances et qu'elle est refermée (`GestesJournee`) ; un jour de
 * repos, il n'y passe pas du tout. Un mot laissé ces jours-là ne serait pas
 * lu, et l'adulte doit le savoir avant de l'écrire plutôt que de croire
 * l'avoir donné.
 */
export function ouArriveLeMot(
  j: { jour: string; ton: string; seances: number },
  aujourdhui: string,
): "ce-soir" | "ce-jour-la" | "passe" | "repos" | "vide" {
  if (j.jour < aujourdhui) return "passe";
  if (j.ton === "repos") return "repos";
  if (j.seances === 0) return "vide";
  return j.jour === aujourdhui ? "ce-soir" : "ce-jour-la";
}

/**
 * Ce que l'écran d'adulte peut dire d'un mot, sans promettre ce qu'il ne sait
 * pas.
 *
 * Il lit le mot du jour en disant comment il se sent, sur l'écran qui suit.
 * Un mot laissé **après** n'arrive que s'il rouvre la fin de sa journée : dire
 * « c'est celui qu'il lira » serait faux, et le mot se croirait donné.
 *
 * `deposeLe` est l'heure de son ressenti, que seuls ses parents connaissent :
 * `null` s'il n'est pas encore passé, `undefined` quand on ne le sait pas —
 * pour le proche, qui ne lit pas le soir et à qui on ne le dit pas même en
 * creux. `lira` : le jour est aujourd'hui ou à venir, et il passera par là.
 */
export type EtatDuMot =
  | "lu"
  | "lira"
  | "lira-s-il-rouvre"
  | "celui-qu-il-lit"
  | "devance"
  | "dernier"
  | null;

export function etatDuMot(
  m: LigneMot,
  mots: LigneMot[],
  journeeId: string,
  { lira, deposeLe }: { lira: boolean; deposeLe: Date | null | undefined },
): EtatDuMot {
  const dernier = motDuJour(mots, journeeId);
  if (deposeLe) {
    const avant = mots.filter((x) => x.cree_le.getTime() <= deposeLe.getTime());
    if (m.id === motDuJour(avant, journeeId)?.id) return "lu";
    if (m.id === dernier?.id) return lira ? "lira-s-il-rouvre" : "dernier";
    return lira ? "devance" : null;
  }
  if (m.id === dernier?.id) {
    if (!lira) return "dernier";
    return deposeLe === null ? "lira" : "celui-qu-il-lit";
  }
  return lira ? "devance" : null;
}

export const LIBELLES_DU_MOT: Record<Exclude<EtatDuMot, null>, string> = {
  lu: "il l’a lu",
  lira: "c’est celui qu’il lira",
  "lira-s-il-rouvre": "laissé après qu’il a dit comment il se sent : il le lira s’il rouvre la fin de sa journée",
  "celui-qu-il-lit": "le dernier du jour : c’est celui qu’il lit",
  devance: "un mot plus récent passe devant",
  dernier: "le dernier du jour",
};

const PARIS = "Europe/Paris";
const MOIS = ["janvier", "février", "mars", "avril", "mai", "juin", "juillet", "août", "septembre", "octobre", "novembre", "décembre"];
const JOURS = ["dimanche", "lundi", "mardi", "mercredi", "jeudi", "vendredi", "samedi"];

/** `AAAA-MM-JJ` du jour où ça s'est passé, à Paris. */
export function jourDe(d: Date) {
  return d.toLocaleDateString("sv-SE", { timeZone: PARIS });
}

/** « lundi 14 septembre », « jeudi 1er octobre » — et l'année si ce n'est pas celle-ci. */
export function dateEnFrancais(d: Date, maintenant = new Date()) {
  const iso = jourDe(d);
  const midi = new Date(`${iso}T12:00:00Z`);
  const n = midi.getUTCDate();
  const annee = iso.slice(0, 4) === jourDe(maintenant).slice(0, 4) ? "" : ` ${iso.slice(0, 4)}`;
  return `${JOURS[midi.getUTCDay()]} ${n === 1 ? "1er" : n} ${MOIS[midi.getUTCMonth()]}${annee}`;
}

/** « 18 h 30 », à Paris. */
export function heureEnFrancais(d: Date) {
  const [h, m] = d
    .toLocaleTimeString("fr-FR", { timeZone: PARIS, hour: "2-digit", minute: "2-digit", hourCycle: "h23" })
    .split(":");
  return `${Number(h)} h ${m}`;
}
