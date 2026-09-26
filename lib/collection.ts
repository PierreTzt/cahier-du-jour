/**
 * Une collection que l'enfant ne peut pas compter.
 *
 * Deux écrans de l'enfant montrent une collection : ce qu'il a exploré avec
 * son parrain (`/pourquoi`) et ce qu'il a fabriqué (`/cahier`). Tous deux
 * obéissent aux mêmes contraintes, venues du POC et de la peur de
 * l'échec qui gouverne tout le produit :
 *
 *   - **aucun nombre** : pas de total, pas de rang, pas de « 3 sur 5 » ;
 *   - **aucune date** : « un jour de novembre », parce qu'une date se compare
 *     et qu'un mois non ;
 *   - **aucun ordre chronologique** : une collection rangée par date se lit
 *     comme une frise, et une frise montre ses trous. L'ordre est stable d'une
 *     visite à l'autre, mais il ne veut rien dire.
 *
 * Ce module est pur — ni base ni React — pour que ces garanties se testent.
 */

/** Ce qu'une carte montre. Rien d'autre ne traverse vers l'écran de l'enfant. */
export type Carte = {
  id: string;
  /** Le titre : sa question dans ses mots, ou le nom de ce qu'il a fait. */
  texte: string;
  /** Ce qui s'est passé. */
  recit: string;
  /** « un jour de novembre ». */
  moment: string;
  /** Une couleur et un libellé, jamais un classement. */
  etiquette: { libelle: string; teinte: string };
  /** Trois gabarits tirés de l'identifiant : rien ne s'aligne, donc rien ne se compte. */
  format: "petite" | "moyenne" | "grande";
};

const MOIS = [
  "janvier", "février", "mars", "avril", "mai", "juin",
  "juillet", "août", "septembre", "octobre", "novembre", "décembre",
];

/**
 * « un jour de novembre », « un jour d’avril ».
 *
 * Le mois se lit à Paris : une question déposée le 31 octobre à 23 h 30 est
 * d'octobre pour la famille, même si le serveur compte en temps universel.
 */
export function momentDe(d: Date): string {
  const mois = MOIS[Number(new Intl.DateTimeFormat("fr-FR", { month: "numeric", timeZone: "Europe/Paris" }).format(d)) - 1];
  return `un jour d${/^[aeiouâéèêî]/.test(mois) ? "’" : "e "}${mois}`;
}

/** Empreinte stable d'une chaîne. Sert à désordonner sans hasard. */
export function empreinte(s: string): number {
  let h = 0;
  for (let i = 0; i < s.length; i++) h = (h * 31 + s.charCodeAt(i)) | 0;
  return Math.abs(h);
}

const FORMATS = ["moyenne", "grande", "petite"] as const;

export const formatDe = (id: string): Carte["format"] => FORMATS[empreinte(id) % FORMATS.length];

/**
 * L'ordre d'affichage : stable, et sans rapport avec le temps.
 *
 * On trie sur l'empreinte de l'identifiant — un uuid tiré au hasard à la
 * création. Deux visites donnent le même ordre ; une carte ajoutée se glisse
 * n'importe où, jamais à la fin, et ne dit donc pas « la dernière ».
 */
export function desordonner<T extends { id: string }>(cartes: T[]): T[] {
  return [...cartes].sort((a, b) => empreinte(a.id) - empreinte(b.id));
}
