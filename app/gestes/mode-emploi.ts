"use server";

/**
 * Les gestes du mode d'emploi : le refermer, cocher « J'ai tout compris ».
 *
 * **Réservés aux adultes**, vérifiés ici : une action serveur est une adresse
 * qu'on peut appeler sans passer par l'écran. L'enfant n'a pas de mode
 * d'emploi, et rien de ce qu'il fait ne doit pouvoir écrire sur une personne.
 *
 * Aucun des deux ne revalide de page : la fenêtre se ferme dans le navigateur,
 * et ce qui est écrit ne sert qu'au prochain chargement.
 */

import { executer } from "@/lib/base";
import { aujourdhui } from "@/lib/journee";
import { personneConnectee, estEnfant } from "@/lib/session";

async function adulteConnecte() {
  const moi = await personneConnectee();
  return moi && !estEnfant(moi) ? moi : null;
}

/** Refermé sans la case : il ne revient pas avant demain. */
export async function fermerLeModeDEmploi() {
  const moi = await adulteConnecte();
  if (!moi) return;
  await executer(`update personne set mode_emploi_ferme_le = $2 where id = $1`, [
    moi.id,
    aujourdhui(),
  ]);
}

/** La case. La décocher la remet à zéro : il reviendra demain. */
export async function marquerCompris(compris: boolean) {
  const moi = await adulteConnecte();
  if (!moi) return;
  await executer(
    `update personne
        set mode_emploi_compris_le = case when $2 then now() else null end
      where id = $1`,
    [moi.id, compris === true],
  );
}
