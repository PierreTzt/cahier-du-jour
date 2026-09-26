/**
 * Le vocabulaire visuel : les matières et leurs teintes, les mots du ressenti.
 *
 * Ce fichier ne contient plus aucune donnée : la journée, les séances et ce
 * que l'enfant dépose vivent en base. Il ne reste ici que ce qui relève du
 * système — des couleurs et des mots, pas des faits.
 *
 * Toutes les teintes ont été vérifiées au calcul à 4,5:1 minimum sur les deux
 * papiers, le froid des adultes et le crème de l'enfant.
 */

export type MatiereId =
  | "francais"
  | "maths"
  | "sciences"
  | "histoire"
  | "geographie"
  | "anglais"
  | "emc"
  | "arts"
  | "maison";

export type Matiere = { id: MatiereId; nom: string; teinte: string };

/* Histoire et géographie étaient réunies sous `histgeo`, ce qui allait tant que
   rien ne portait de leçon. Le programme les traite séparément — quatre thèmes
   chacune, répartis sur des périodes différentes — donc l'application aussi. */
export const matieres: Record<MatiereId, Matiere> = {
  francais: { id: "francais", nom: "Français", teinte: "bleu" },
  maths: { id: "maths", nom: "Mathématiques", teinte: "ocre" },
  anglais: { id: "anglais", nom: "Anglais", teinte: "sarcelle" },
  sciences: { id: "sciences", nom: "Sciences et technologie", teinte: "sauge" },
  histoire: { id: "histoire", nom: "Histoire", teinte: "prune" },
  geographie: { id: "geographie", nom: "Géographie", teinte: "terre" },
  emc: { id: "emc", nom: "Enseignement moral et civique", teinte: "bleu" },
  arts: { id: "arts", nom: "Arts", teinte: "framboise" },
  maison: { id: "maison", nom: "À la maison", teinte: "encre-douce" },
};

/* On demande son état, jamais sa performance : « comment tu te sens ? » et
   non « c'était dur ? », qui serait une auto-évaluation déguisée. */
export type Ressenti = "bien" | "ca-va" | "bof" | "pas-bien";

export const ressentis: Record<Ressenti, { mot: string; teinte: string }> = {
  bien: { mot: "Bien", teinte: "sauge" },
  "ca-va": { mot: "Ça va", teinte: "bleu" },
  bof: { mot: "Bof", teinte: "ocre" },
  "pas-bien": { mot: "Pas bien", teinte: "prune" },
};

/* Tailwind a besoin de classes littérales pour les générer : on ne peut pas
   composer `bg-${teinte}` à la volée. */
type Teintes = {
  texte: string;
  fond: string;
  bord: string;
  bordG: string;
  puce: string;
  /** L'anneau plein d'une pastille à venir, sur le chemin des adultes. */
  anneau: string;
};

export const classesTeinte: Record<string, Teintes> = {
  bleu: { texte: "text-bleu", fond: "bg-bleu/10", bord: "border-bleu/35", bordG: "border-l-bleu/45", puce: "bg-bleu", anneau: "border-bleu" },
  ocre: { texte: "text-ocre", fond: "bg-ocre/10", bord: "border-ocre/35", bordG: "border-l-ocre/45", puce: "bg-ocre", anneau: "border-ocre" },
  sauge: { texte: "text-sauge", fond: "bg-sauge/10", bord: "border-sauge/35", bordG: "border-l-sauge/45", puce: "bg-sauge", anneau: "border-sauge" },
  prune: { texte: "text-prune", fond: "bg-prune/10", bord: "border-prune/35", bordG: "border-l-prune/45", puce: "bg-prune", anneau: "border-prune" },
  sarcelle: { texte: "text-sarcelle", fond: "bg-sarcelle/10", bord: "border-sarcelle/35", bordG: "border-l-sarcelle/45", puce: "bg-sarcelle", anneau: "border-sarcelle" },
  terre: { texte: "text-terre", fond: "bg-terre/10", bord: "border-terre/35", bordG: "border-l-terre/45", puce: "bg-terre", anneau: "border-terre" },
  framboise: { texte: "text-framboise", fond: "bg-framboise/10", bord: "border-framboise/35", bordG: "border-l-framboise/45", puce: "bg-framboise", anneau: "border-framboise" },
  "encre-douce": { texte: "text-encre-douce", fond: "bg-encre-douce/10", bord: "border-encre-douce/30", bordG: "border-l-encre-douce/40", puce: "bg-encre-douce", anneau: "border-encre-douce" },
};

export function teintesDe(matiere: MatiereId) {
  return classesTeinte[matieres[matiere].teinte];
}
