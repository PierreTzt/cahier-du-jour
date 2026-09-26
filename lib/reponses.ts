/**
 * Lire et écrire ce que l'enfant répond au test de positionnement.
 *
 * Ce module ne compare rien : il lit et il écrit. La comparaison avec
 * l'attendu — et donc le seul endroit du produit qui sache si une réponse est
 * juste — vit dans `lib/lecture.ts`, que seuls les écrans d'adulte importent.
 * La séparation n'est pas de l'ordre : un module que l'écran de l'enfant a le
 * droit d'importer ne doit pas contenir, même sans l'appeler, une fonction
 * capable de lui dire qu'il s'est trompé. `test/portes.test.ts` suit les
 * imports de chaque page et s'appuie sur cette frontière.
 */

import { lignes, executer } from "./base";

export type LigneReponse = {
  exercice: string;
  valeur: string;
  sait_pas: boolean;
  saisi_le: string;
  /** La date de la réponse, à Paris. Le test ne propose qu'une partie par jour. */
  jour: string;
};

export async function reponsesDe(personneId: string) {
  return lignes<LigneReponse>(
    `select exercice, valeur, sait_pas, saisi_le::text,
            (saisi_le at time zone 'Europe/Paris')::date::text as jour
       from reponse where personne_id = $1 order by saisi_le`,
    [personneId],
  );
}

export async function enregistrerReponse(
  personneId: string,
  exercice: string,
  valeur: string,
  saitPas: boolean,
) {
  await executer(
    `insert into reponse (personne_id, exercice, valeur, sait_pas)
     values ($1, $2, $3, $4)
     on conflict (personne_id, exercice) do update
       set valeur = excluded.valeur,
           sait_pas = excluded.sait_pas,
           saisi_le = now()`,
    [personneId, exercice, valeur.trim(), saitPas],
  );
}

export const codesRepondus = (reponses: LigneReponse[]) =>
  reponses.map((r) => r.exercice);
