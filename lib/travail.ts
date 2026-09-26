/**
 * Ce que l'enfant inscrit pendant une séance du programme.
 *
 * Le cours et les exercices sont à l'écran, le brouillon reste sur papier, et
 * seul le résultat arrive ici. C'est ce qui permet d'en garder la trace sans
 * demander à un enfant de neuf ans de taper une multiplication posée.
 *
 * Ce module lit et écrit ; il ne compare rien. La comparaison avec le
 * résultat attendu vit ailleurs, et de deux façons différentes :
 *
 *   - pour lui, `corrigerExercice()` dans `lib/programme` : la façon de
 *     faire, renvoyée par l'action après sa réponse, **de la même manière
 *     qu'il ait juste ou faux**. Dans un exercice il doit apprendre, donc la
 *     correction lui est due ;
 *   - pour ses parents, `releveDeSeance()` dans `lib/releve.ts` : le détail
 *     de ce qui n'est pas passé, pour savoir quoi reprendre. Ce module-là
 *     importe le manuel entier, et seuls les écrans d'adulte l'importent.
 *
 * Ce qui n'existe nulle part, c'est un décompte rendu à l'enfant. Aucune
 * fonction de ce fichier ne rend à sa vue un « tu en as raté trois ».
 */

import { lignes, executer } from "./base";
import type { Exercice } from "./programme";

export type LigneTravail = {
  exercice: string;
  valeur: string;
  sait_pas: boolean;
  saisi_le: string;
};

export async function travailDeSeance(seanceId: string) {
  return lignes<LigneTravail>(
    `select exercice, valeur, sait_pas, saisi_le::text
       from travail where seance_id = $1 order by saisi_le`,
    [seanceId],
  );
}

/**
 * Inscrire un résultat.
 *
 * `seance_id` est vérifié par l'appelant contre la journée de la session : un
 * identifiant venu du navigateur ne mérite aucune confiance.
 */
export async function inscrireResultat(
  seanceId: string,
  personneId: string,
  exercice: string,
  valeur: string,
  saitPas: boolean,
) {
  /* La première réponse est la sienne, et elle reste. Après la correction,
     une seconde inscription du même exercice — double clic, page restaurée,
     appel forgé — aurait recopié le résultat attendu par-dessus, et ses
     parents auraient lu « juste » ce qu'il avait trouvé faux. */
  await executer(
    `insert into travail (seance_id, personne_id, exercice, valeur, sait_pas)
     values ($1, $2, $3, $4, $5)
     on conflict (seance_id, exercice) do nothing`,
    [seanceId, personneId, exercice, valeur.trim(), saitPas],
  );
}

/* ------------------------------------------------------------------ */
/* Ce que l'enfant voit après avoir répondu                            */
/* ------------------------------------------------------------------ */

export type Correction = {
  /** Le résultat attendu, écrit tel qu'il est dans le manuel. */
  resultat: string;
  /** Comment on fait. Le cœur de l'exercice, pas un lot de consolation. */
  comment: string;
};

/**
 * La correction d'un exercice.
 *
 * Identique quelle que soit sa réponse : on ne lui dit pas « juste » ou
 * « faux », on lui montre la façon de faire, et il compare lui-même. C'est la
 * seule manière que la correction enseigne au lieu de sanctionner.
 */
export const correction = (ex: Exercice): Correction => ({
  resultat: ex.resultat,
  comment: ex.comment,
});

/** Les codes déjà inscrits, pour savoir où il en est dans la leçon. */
export const codesInscrits = (travail: LigneTravail[]) =>
  travail.map((t) => t.exercice);
