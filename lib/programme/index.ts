/**
 * Le programme de CM1 : le cours, puis les exercices.
 *
 * Ce dossier est le manuel. Il contient ce qu'un livret du CNED contiendrait :
 * une leçon écrite, des exemples traités pas à pas, puis des exercices. Le
 * cours se lit à l'écran ; **le brouillon reste sur papier**, et seul le
 * résultat entre dans le site — c'est ce qui permet d'en garder la trace sans
 * demander à un enfant de neuf ans de taper une division posée.
 *
 * Un fichier par matière, parce que ce manuel doit pouvoir être relu par
 * quelqu'un du métier, et qu'on ne relit pas douze mille lignes d'un bloc.
 *
 * ## Les programmes, et pourquoi ils comptent
 *
 * Trois programmes officiels **différents** s'appliquent au CM1 en 2026-2027,
 * et deux d'entre eux sont neufs. C'est exactement l'année de l'enfant, donc
 * ce sont ceux-là et pas d'autres :
 *
 *   - **Français et mathématiques** : BO spécial n° 16 du 17 avril 2025,
 *     appliqué au CM1 depuis la rentrée 2025.
 *   - **Histoire et géographie** : BO n° 22 du 28 mai 2026, appliqué au CM1 à
 *     la rentrée 2026 — les thèmes sont rattachés à des périodes précises.
 *   - **Sciences et technologie** : BO n° 24 du 11 juin 2026, appliqué au CM1
 *     à la rentrée 2026.
 *
 * La première version de ce manuel suivait les anciens « attendus de fin
 * d'année », qui sont périmés. Ça n'était pas un détail : le nouveau programme
 * de mathématiques limite les entiers à quatre chiffres pendant les deux
 * premières périodes, là où l'ancien allait jusqu'au million. Un enfant en
 * instruction en famille peut être contrôlé sur le programme en vigueur, donc
 * ce fichier doit citer le bon.
 *
 * Pour l'anglais, l'enseignement moral et civique et les arts, aucun programme
 * de cycle 3 n'a été refait pour cette rentrée : les références renvoient au
 * programme de cycle 3 en vigueur, sans prétendre à une précision d'article
 * que je n'ai pas vérifiée. C'est dit dans chaque fichier.
 *
 * Rien de tout ceci n'a été relu par un enseignant. Ça doit l'être.
 */

import type { Exercice, Lecon, Periode } from "./types";
import { PASSAGES } from "./passages";
import { maths } from "./maths";
import { francais } from "./francais";
import { sciences } from "./sciences";
import { histoire } from "./histoire";
import { geographie } from "./geographie";
import { anglais } from "./anglais";
import { emc } from "./emc";
import { arts } from "./arts";

export type { Exercice, Lecon, Partie, Exemple, Periode, TypeExercice } from "./types";

/** Les leçons de l'année, dans l'ordre de la progression. */
export const lecons: Lecon[] = [
  ...maths,
  ...francais,
  ...sciences,
  ...histoire,
  ...geographie,
  ...anglais,
  ...emc,
  ...arts,
];

/** Les leçons d'une matière, dans l'ordre des périodes. */
export const leconsDeMatiere = (m: Lecon["matiere"]) =>
  lecons.filter((l) => l.matiere === m);

export const leconParCode = new Map(lecons.map((l) => [l.code, l]));

export const leconsDePeriode = (p: Periode) =>
  lecons.filter((l) => l.periode === p);

/** Combien d'exercices porte une leçon. Pour le bornage de la tâche. */
export const tailleLecon = (l: Lecon) => l.exercices.length;

/**
 * Combien de mots ce manuel fait, et ce qu'on compte.
 *
 * La définition est ici et pas dans un écran, parce qu'elle a déjà divergé :
 * la page du manuel comptait la seule prose du cours (27 000) pendant que le
 * README annonçait trente-sept mille. Deux chiffres pour la même chose, et
 * aucun des deux faux — ils ne comptaient simplement pas la même chose.
 *
 * On compte **ce qui se lit comme un cours** : le texte, les règles encadrées
 * et les exemples traités. Les énoncés et les corrections en font presque
 * vingt mille de plus, mais ce n'est pas du cours, c'est du travail.
 */
export function motsDuManuel() {
  const mots = (s: string) => s.trim().split(/\s+/).filter(Boolean).length;
  let n = 0;
  for (const l of lecons) {
    for (const p of l.cours) {
      n += mots(p.texte.join(" "));
      if (p.regle) n += mots(p.regle);
    }
    for (const e of l.exemples) {
      n += mots(e.enonce) + mots(e.etapes.join(" ")) + mots(e.resultat);
    }
  }
  return n;
}

/* ------------------------------------------------------------------ */
/* Ce que l'écran de l'enfant reçoit                                   */
/* ------------------------------------------------------------------ */

/**
 * L'exercice tel qu'il part vers l'enfant : l'énoncé, et rien de plus.
 *
 * La correction lui est due — dans un exercice il doit apprendre, c'est toute
 * la différence avec le test de positionnement. Mais elle lui est due **après
 * qu'il a répondu**, pas avant : le résultat et le comment sont retirés ici et
 * renvoyés par l'action, une fois sa réponse inscrite.
 *
 * Ce n'est pas de la méfiance, c'est de la lucidité. Un enfant dont l'angoisse
 * est d'échouer trouvera la réponse dans la page si elle y est, et il aura
 * raison de le faire — ce serait la solution la moins coûteuse. Sauf que le
 * relevé de ses parents deviendrait faux, donc le travail qu'ils lui
 * prépareraient aussi. La tentation ne se combat pas par la confiance, elle
 * s'enlève.
 */
export type ExercicePose = {
  code: string;
  enonce: string;
  type: Exercice["type"];
  choix?: string[];
};

export const poser = (ex: Exercice): ExercicePose => ({
  code: ex.code,
  enonce: ex.enonce,
  type: ex.type,
  choix: ex.choix,
});

/** Ce que la trame ajoute au titre d'une leçon qui revient. */
export const SUFFIXE_REPRISE = " — on reprend";

export const estUneReprise = (titreSeance: string) => titreSeance.endsWith(SUFFIXE_REPRISE);

/**
 * Les exercices d'une séance : la seconde série quand la séance reprend la
 * leçon et que cette série existe, la première sinon.
 */
export const exercicesDeSeance = (l: Lecon, titreSeance: string, dejaFaits: string[] = []): Exercice[] => {
  const servie =
    estUneReprise(titreSeance) && l.reprise && l.reprise.length > 0 ? l.reprise : l.exercices;
  /* Une séance déjà commencée sur l'autre série — une reprise ouverte avant
     que sa seconde série soit écrite — continue sur celle-là : sinon il
     repartait du cours et de l'exercice 1 (seconde critique du 16 septembre). */
  const autre = servie === l.exercices ? (l.reprise ?? []) : l.exercices;
  const dans = (s: Exercice[]) => s.filter((x) => dejaFaits.includes(x.code)).length;
  return dans(autre) > dans(servie) ? autre : servie;
};

/**
 * Une leçon où l'on calcule. Décide si l'écran nomme le brouillon — « Les
 * mélanges » est en sciences et ne demande aucun calcul, et une date
 * d'histoire n'est pas un calcul. Les maths, toujours ; ailleurs, quand au
 * moins trois résultats sont un nombre, avec ou sans unité.
 */
export const demandeDesCalculs = (l: Lecon) =>
  l.matiere === "maths" ||
  [...l.exercices, ...(l.reprise ?? [])].filter((x) =>
    /^[\d\s  ,.:/×+=-]+(\s*[a-zµ²³]{1,3})?$/i.test(x.resultat.trim()),
  ).length >= 3;

/** La leçon telle qu'elle part vers l'enfant : le cours entier, les énoncés. */
export type LeconPosee = Omit<Lecon, "exercices" | "reprise"> & {
  exercices: ExercicePose[];
  /** Si l'on y calcule — un booléen, jamais les résultats dont il vient. */
  calculs: boolean;
};

/**
 * Poser la leçon d'une séance. La seconde série est **retirée** de l'objet,
 * pas seulement ignorée : elle porte ses résultats, et un `...l` l'aurait
 * envoyée entière dans la page.
 */
export const poserLecon = (
  l: Lecon,
  titreSeance: string = l.titre,
  dejaFaits: string[] = [],
): LeconPosee => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { exercices, reprise, ...reste } = l;
  return {
    ...reste,
    exercices: exercicesDeSeance(l, titreSeance, dejaFaits).map(poser),
    calculs: demandeDesCalculs(l),
  };
};

/* ------------------------------------------------------------------ */
/* Le passage du cours qui explique un exercice                        */
/* ------------------------------------------------------------------ */

/**
 * Le numéro, dans sa leçon, de la partie du cours qui explique un exercice.
 *
 * `passages.ts` désigne la partie par son titre et non par son rang : une
 * partie insérée ou déplacée par une relecture ne décale rien en silence, et
 * un titre retouché fait échouer `programme.test.ts` au lieu d'envoyer
 * l'enfant relire le mauvais morceau.
 */
const partieParExercice = new Map<string, number>();
for (const l of lecons) {
  for (const x of [...l.exercices, ...(l.reprise ?? [])]) {
    const titre = PASSAGES[x.code];
    if (titre === undefined) continue;
    const i = l.cours.findIndex((p) => (p.titre ?? "") === titre);
    if (i >= 0) partieParExercice.set(x.code, i);
  }
}

export const partieDeLExercice = (code: string): number | null =>
  partieParExercice.get(code) ?? null;

/**
 * Le résultat, la façon de faire et le passage du cours, renvoyés après sa
 * réponse.
 *
 * Le passage vient avec la correction, **qu'il ait juste ou faux** : un renvoi
 * au cours qui n'apparaîtrait qu'après une erreur serait l'écran qui lui dit
 * « tu t'es trompé, va relire » (demande d'un parent, 23 septembre 2026). Il
 * ne part pas avant sa réponse non plus : savoir quelle partie s'applique fait
 * partie de l'exercice.
 */
export const corrigerExercice = (code: string) => {
  for (const l of lecons) {
    const ex = [...l.exercices, ...(l.reprise ?? [])].find((x) => x.code === code);
    if (ex) return { resultat: ex.resultat, comment: ex.comment, partie: partieDeLExercice(code) };
  }
  return null;
};
