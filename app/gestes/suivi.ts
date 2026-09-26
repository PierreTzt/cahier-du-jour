"use server";

/**
 * Les gestes du suivi médical : noter une consigne, la retirer.
 *
 * **Réservés aux parents**, et vérifiés ici, pas seulement par la page : une
 * action serveur est une adresse qu'on peut appeler sans passer par l'écran.
 * Le parrain accompagne aussi, mais il reçoit ces consignes de ses parents, pas
 * d'ici — c'est la promesse faite à l'enfant sur qui lit quoi.
 */

import { revalidatePath } from "next/cache";
import { personneConnectee, estParent, renvoyerALaPorte } from "@/lib/session";
import { validerConsigne, enregistrerConsigne, marquerRetiree } from "@/lib/suivi";

/** Un parent connecté, ou `null`. La famille sera celle de sa session. */
async function parentConnecte() {
  const moi = await personneConnectee();
  /* Session fermée (cinq heures du matin) : retour à la porte des adultes,
     sur la page d'où il venait, plutôt qu'un geste qui ne répond rien. */
  if (!moi) await renvoyerALaPorte();
  return moi && estParent(moi) ? moi : null;
}

/**
 * Noter une consigne.
 *
 * Rend `true` si elle est notée. Le formulaire garde ce qui a été tapé quand
 * ça échoue : une consigne perdue à la saisie est une consigne qu'on ne
 * réécrira peut-être pas.
 */
export async function noterConsigne(donnees: {
  texte: string;
  pourquoi: string;
  origine: string;
}): Promise<boolean> {
  const moi = await parentConnecte();
  if (!moi) return false;

  const consigne = validerConsigne(donnees);
  if (!consigne) return false;

  await enregistrerConsigne(moi.famille_id, moi.id, consigne);
  revalidatePath("/suivi");
  return true;
}

/** Retirer une consigne qui ne s'applique plus. Elle reste parmi les retirées. */
export async function retirerConsigne(consigneId: string): Promise<void> {
  const moi = await parentConnecte();
  if (!moi) return;
  if (typeof consigneId !== "string") return;

  await marquerRetiree(moi.famille_id, consigneId);
  revalidatePath("/suivi");
}
