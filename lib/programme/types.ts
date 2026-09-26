/**
 * Ce dont une leçon est faite.
 *
 * Les types et les fabriques vivent ici, le contenu vit dans un fichier par
 * matière. Un seul fichier pour l'année entière ferait douze mille lignes :
 * illisible dans un éditeur, donc impossible à faire relire par quelqu'un du
 * métier — ce qui est précisément ce qu'on veut pouvoir faire.
 */

import type { MatiereId } from "../data";

/** Les cinq périodes de l'année scolaire, de vacances à vacances. */
export type Periode = 1 | 2 | 3 | 4 | 5;

/** Un morceau de cours : un titre, du texte, parfois une règle encadrée. */
export type Partie = {
  titre?: string;
  texte: string[];
  /** Ce qu'il faut retenir. Affiché en encadré. */
  regle?: string;
};

/** Un exemple traité pas à pas, avant de lui demander quoi que ce soit. */
export type Exemple = {
  enonce: string;
  etapes: string[];
  resultat: string;
};

export type TypeExercice = "saisie" | "choix";

export type Exercice = {
  /** Stable : c'est la clé du travail en base. Ne jamais le réutiliser. */
  code: string;
  enonce: string;
  type: TypeExercice;
  choix?: string[];
  resultat: string;
  /** Comment on fait. Montré après sa réponse, juste ou fausse. */
  comment: string;
};

export type Lecon = {
  code: string;
  matiere: MatiereId;
  periode: Periode;
  /** Ce que l'enfant lit en haut de l'écran. */
  titre: string;
  /** L'objectif d'apprentissage du programme officiel que la leçon travaille. */
  reference: string;
  cours: Partie[];
  exemples: Exemple[];
  exercices: Exercice[];
  /**
   * La seconde série, posée quand la leçon revient (« — on reprend »). Mêmes
   * compétences, autres nombres et autres phrases. Sans elle, la reprise
   * reposait les huit exercices déjà corrigés dix jours plus tôt, et mesurait
   * le souvenir de la correction plus que ce qui avait tenu (critique du
   * 16 septembre 2026). Facultative : sans série de reprise, la première
   * revient.
   */
  reprise?: Exercice[];
  /** Indicatif, et le reste : rien ne le mesure, rien ne le compare. */
  minutes: number;
  /**
   * À donner par un adulte qui a choisi le moment.
   *
   * Certaines leçons du programme relèvent de ce que des parents veulent
   * aborder eux-mêmes — la puberté en sciences, par exemple. L'architecture
   * les protège déjà, puisqu'aucune leçon n'arrive dans la journée sans qu'un
   * adulte l'y place ; ce drapeau le dit à l'écran, pour qu'un clic distrait
   * ne le fasse pas à leur place.
   */
  reserveeAuxParents?: true;
};

/* ------------------------------------------------------------------ */
/* Fabriques compactes                                                 */
/* ------------------------------------------------------------------ */

/** Un exercice à saisir : il écrit son résultat. */
export const e = (
  code: string,
  enonce: string,
  resultat: string,
  comment: string,
): Exercice => ({ code, enonce, resultat, comment, type: "saisie" });

/** Un exercice à choix : il clique. Le résultat doit figurer dans les choix. */
export const q = (
  code: string,
  enonce: string,
  choix: string[],
  resultat: string,
  comment: string,
): Exercice => ({ code, enonce, resultat, comment, choix, type: "choix" });
