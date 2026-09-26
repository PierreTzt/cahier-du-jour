/**
 * Les fiches : ce qu'un adulte a besoin d'avoir sous les yeux pour mener une
 * séance qui ne se passe pas à l'écran.
 *
 * ## Pourquoi elles existent
 *
 * L'année compte 1 008 séances. Deux cent vingt-deux portent une leçon du
 * manuel : l'enfant les fait seul, le cours et les exercices sont à l'écran,
 * la correction arrive après sa réponse. Les **785 autres** sont des rituels —
 * calcul mental à l'ardoise, dictée, lecture à voix haute, production d'écrit,
 * dehors, le temps du mercredi — et elles demandent un adulte.
 *
 * Jusqu'ici, ces 785 séances ne portaient qu'un titre et une consigne. La
 * consigne disait quoi faire, pas avec quoi : « quinze mots de la liste en
 * cours », seize fois dans l'année, pour une liste qui n'existait nulle part.
 * Douze rituels sur soixante-neuf renvoyaient ainsi à un matériel que le
 * produit ne fournissait pas. C'était la vraie limite de l'outil, et elle
 * n'était écrite nulle part : l'application portait un quart de l'année et
 * laissait les trois autres quarts à inventer.
 *
 * ## Comment une fiche trouve son jour
 *
 * La trame fait tourner chaque liste de rituels sur le rang du jour :
 * `tourner(ECRITURE, rang)` donne l'élément `rang % 8`. Le même rituel revient
 * donc tous les huit jours, et son **rang d'occurrence** est `rang / 8`. Une
 * fiche n'est pas datée : c'est sa place dans la série qui la situe, ce qui
 * permet d'écrire une progression sans figer un calendrier.
 *
 * Quand la série est plus courte que le nombre d'occurrences, on recommence au
 * début plutôt que de ne rien montrer : une fiche déjà vue vaut mieux qu'un
 * écran vide, et `test/fiches.test.ts` dit combien de rituels tournent encore
 * en boucle.
 *
 * ## La frontière, une fois de plus
 *
 * **Une fiche contient les corrigés. Elle ne s'adresse qu'aux adultes.** Même
 * raison que pour le manuel : un enfant dont l'angoisse est d'échouer y
 * trouverait les réponses, et il aurait raison d'y aller. `/fiche/[code]`
 * renvoie donc l'enfant vers sa journée, et `test/portes.test.ts` le vérifie
 * en suivant les imports.
 */

import type { Fiche } from "./types";
import { calculNombres } from "./calcul-nombres";
import { calculGrandeurs } from "./calcul-grandeurs";
import { ecritureDictees } from "./ecriture-dictees";
import { ecritureCopie } from "./ecriture-copie";
import { lectureTextes } from "./lecture-textes";
import { lectureFormes } from "./lecture-formes";
import { redaction } from "./redaction";
import { entrainementMaths } from "./entrainement-maths";
import { entrainementFrancais } from "./entrainement-francais";
import { dehors } from "./dehors";
import { mercredi } from "./mercredi";
import { rentree } from "./rentree";
import { vocabulaire } from "./vocabulaire";
import { lectureDocumentaires } from "./lecture-documentaires";
import { lectureQuestions } from "./lecture-questions";
import { dictionnaire } from "./dictionnaire";
import { conjugaison } from "./conjugaison";
import { repriseFrancais } from "./reprise-francais";
import { mercrediFaire } from "./mercredi-faire";
import { mercrediMonde } from "./mercredi-monde";

export type { Fiche } from "./types";

/* Onze fichiers plutôt qu'un, pour la même raison que le manuel en a huit :
   un seul ferait des milliers de lignes, et il doit pouvoir être relu par
   quelqu'un du métier — on ne relit pas trois mille lignes d'un bloc. */
export const fiches: Fiche[] = [
  ...calculNombres,
  ...calculGrandeurs,
  ...ecritureDictees,
  ...ecritureCopie,
  ...lectureTextes,
  ...lectureFormes,
  ...redaction,
  ...entrainementMaths,
  ...entrainementFrancais,
  ...dehors,
  ...mercredi,
  ...rentree,
  ...vocabulaire,
  ...lectureDocumentaires,
  ...lectureQuestions,
  ...dictionnaire,
  ...conjugaison,
  ...repriseFrancais,
  ...mercrediFaire,
  ...mercrediMonde,
];

export const ficheParCode = new Map(fiches.map((f) => [f.code, f]));

/** Les fiches d'un rituel, dans l'ordre où elles se donnent. */
const parRituel = (() => {
  const m = new Map<string, Fiche[]>();
  for (const f of fiches) {
    const deja = m.get(f.rituel);
    if (deja) deja.push(f);
    else m.set(f.rituel, [f]);
  }
  return m;
})();

export const fichesDuRituel = (rituel: string): Fiche[] => parRituel.get(rituel) ?? [];

/**
 * La fiche d'un rituel à sa n-ième occurrence dans l'année.
 *
 * Rend `null` si le rituel n'a aucune fiche — l'écran affiche alors la
 * consigne seule, comme avant, plutôt que de mentir sur ce qui existe.
 */
export function ficheDe(rituel: string, occurrence: number): Fiche | null {
  const serie = parRituel.get(rituel);
  if (!serie || serie.length === 0) return null;
  return serie[occurrence % serie.length];
}

/** Ce que le manuel des fiches contient, pour l'écran d'adulte. */
export const rituelsOutilles = () => [...parRituel.keys()].sort();
