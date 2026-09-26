"use server";

/**
 * Les gestes des sorties : en noter une, en effacer une.
 *
 * N'importe lequel des trois adultes peut le faire — une sortie avec le parrain
 * est une sortie. L'enfant, non : ce ne sont pas ses gestes, et ce ne sont pas
 * ses pièces.
 *
 * Comme dans `app/actions.ts`, chaque geste retrouve lui-même qui agit et sur
 * quelle famille. Rien de cela ne vient du navigateur : la famille est celle de
 * la session, et la sortie à effacer n'est cherchée que dans cette famille-là.
 */

import { revalidatePath } from "next/cache";
import { personneConnectee, estParent, estProche, renvoyerALaPorte } from "@/lib/session";
import { validerSortie, enregistrerSortie, supprimerSortie } from "@/lib/sorties";

/**
 * Un adulte connecté, ou `null`.
 *
 * Les deux rôles adultes nommés un par un plutôt que « tout sauf l'enfant » : un
 * rôle ajouté un jour à la base n'hériterait pas de ces gestes sans qu'on l'ait
 * décidé.
 */
async function adulteConnecte() {
  const moi = await personneConnectee();
  /* Session fermée (cinq heures du matin) : retour à la porte des adultes,
     sur la page d'où il venait, plutôt qu'un geste qui ne répond rien. */
  if (!moi) await renvoyerALaPorte();
  return moi && (estParent(moi) || estProche(moi)) ? moi : null;
}

/* Le pilotage montre la liste ; le relevé et la vue du contrôle la reprendront
   pour l'inspection. Revalider une page qui n'existe pas encore ne coûte rien. */
function rafraichir() {
  for (const c of ["/pilotage", "/releve", "/controle"]) revalidatePath(c);
}

/**
 * Noter une sortie.
 *
 * Rend `true` si elle est notée. `false` ne distingue pas une session expirée
 * d'un champ manquant : l'écran le dit une seule fois, avec douceur, et ce qui
 * a été tapé reste dans le formulaire.
 */
export async function noterSortie(donnees: {
  titre: string;
  lieu: string;
  quoi: string;
  jour: string;
  matieres: string[];
}): Promise<boolean> {
  const moi = await adulteConnecte();
  if (!moi) return false;

  const sortie = validerSortie(donnees);
  if (!sortie) return false;

  await enregistrerSortie(moi.famille_id, moi.id, sortie);
  rafraichir();
  return true;
}

/**
 * Effacer une sortie notée par erreur — **la sienne**.
 *
 * N'importe quel adulte, parrain compris, pouvait effacer pour de bon la sortie
 * notée par un autre (critique du 16 septembre 2026). Comme pour un mot ou une
 * trace, seul celui qui l'a notée peut la retirer.
 */
export async function retirerSortie(sortieId: string): Promise<void> {
  const moi = await adulteConnecte();
  if (!moi) return;
  if (typeof sortieId !== "string") return;

  await supprimerSortie(moi.famille_id, sortieId, moi.id);
  rafraichir();
}
