"use server";

/**
 * Les gestes de la boîte à pourquoi.
 *
 * Deux côtés, et ils ne se croisent pas :
 *
 *   - **déposer** une question est à l'enfant. Un adulte qui, depuis sa propre
 *     session, déposerait une question la ferait lire à son parrain comme une
 *     question de l'enfant ;
 *   - **tout le reste** est au proche : la lire, chercher, préparer, explorer,
 *     fixer le rendez-vous. Les parents lisent l'atelier, ils n'y écrivent pas —
 *     sans cette asymétrie, le parrain ne serait qu'un accès restreint.
 *
 * Vérifié ici et pas seulement par la page : une action serveur est une adresse
 * qu'on peut appeler sans passer par l'écran. La famille vient toujours de la
 * session, jamais de ce qu'envoie le navigateur, et chaque requête porte la
 * famille dans sa clause `where` — voir `lib/pourquoi.ts`.
 *
 * Une action refusée ne fait rien, silencieusement, comme dans `app/actions.ts`.
 */

import { revalidatePath } from "next/cache";
import { personneConnectee, estEnfant, estProche, renvoyerALaPorte } from "@/lib/session";
import * as P from "@/lib/pourquoi";

/* La boîte, l'atelier, et la journée qui porte le rendez-vous. Le relevé et la
   vue du contrôle liront les explorations : on les rafraîchit aussi. */
function rafraichir() {
  for (const c of ["/pourquoi", "/atelier", "/journee", "/releve", "/controle"]) {
    revalidatePath(c);
  }
}

/* Un identifiant mal formé ferait lever Postgres sur le cast en `uuid` : on
   l'écarte avant, pour qu'un geste forgé ne produise pas une page d'erreur. */
const UUID = /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i;
const estUuid = (x: unknown): x is string => typeof x === "string" && UUID.test(x);

/**
 * Un texte nettoyé et borné, compté comme Postgres le compte.
 *
 * `Array.from` découpe par caractère et non par unité UTF-16 : un émoji compte
 * pour un, comme dans `length()`, et on ne coupe jamais un caractère en deux.
 */
function borner(x: unknown, max: number): string {
  if (typeof x !== "string") return "";
  return Array.from(x.trim()).slice(0, max).join("").trim();
}

/** Le proche connecté, ou `null`. La famille sera celle de sa session. */
async function procheConnecte() {
  const moi = await personneConnectee();
  /* Session fermée (cinq heures du matin) : retour à la porte des adultes,
     sur la page d'où il venait, plutôt qu'un geste qui ne répond rien. */
  if (!moi) await renvoyerALaPorte();
  return moi && estProche(moi) ? moi : null;
}

/* ------------------------------------------------------------------ */
/* Côté enfant                                                       */
/* ------------------------------------------------------------------ */

/**
 * Déposer une question.
 *
 * Rend `true` quand elle est partie : l'écran ne dit « C'est parti » que si
 * c'est vrai, et garde ce qui a été tapé sinon. Ce n'est pas un verdict — il
 * n'y a rien à réussir dans une question.
 *
 * Aucune longueur minimale, aucune catégorie : ses mots, tels quels. Au-delà de
 * cinq cents caractères — la limite de la table —, le champ l'arrête déjà ;
 * ici on coupe plutôt que de refuser.
 */
export async function deposerQuestion(texte: string): Promise<boolean> {
  const moi = await personneConnectee();
  if (!moi || !estEnfant(moi)) return false;

  const propre = borner(texte, 500);
  if (!propre) return false;

  await P.deposerQuestion(moi.famille_id, propre);
  rafraichir();
  return true;
}

/* ------------------------------------------------------------------ */
/* Côté parrain                                                        */
/* ------------------------------------------------------------------ */

/**
 * « Je l'ai lue. » Le geste le plus important est le plus petit : il fait
 * apparaître une phrase chez l'enfant. S'il demandait le moindre effort, il ne
 * serait pas fait certains soirs — et ce sont exactement ceux où il compte.
 */
export async function marquerLue(questionId: string): Promise<void> {
  const moi = await procheConnecte();
  if (!moi || !estUuid(questionId)) return;
  await P.marquerLue(moi.famille_id, questionId, moi.id);
  rafraichir();
}

/**
 * « On cherche encore. » Pas un retard : le moment où l'adulte dit qu'il ne
 * sait pas. Voir un adulte ne pas savoir, et chercher devant lui, vaut dix
 * explications réussies pour un enfant qui croit que ne pas savoir est une
 * anomalie personnelle.
 */
export async function chercherEncore(questionId: string): Promise<void> {
  const moi = await procheConnecte();
  if (!moi || !estUuid(questionId)) return;
  await P.chercherEncore(moi.famille_id, questionId, moi.id);
  rafraichir();
}

/** La préparation. Elle ne sort jamais côté enfant. */
export async function noterPreparation(questionId: string, note: string): Promise<boolean> {
  const moi = await procheConnecte();
  if (!moi || !estUuid(questionId)) return false;
  await P.noterPreparation(moi.famille_id, questionId, borner(note, 4000), moi.id);
  rafraichir();
  return true;
}

/**
 * Explorer : un domaine et le récit de ce qu'on a fait, qui devient la carte
 * de sa collection. Les deux sont exigés — la migration refuserait l'un sans
 * l'autre, et une carte sans récit ne raconte rien.
 */
export async function explorer(
  questionId: string,
  domaine: string,
  trace: string,
): Promise<boolean> {
  const moi = await procheConnecte();
  if (!moi || !estUuid(questionId) || !P.estDomaine(domaine)) return false;

  const recit = borner(trace, 4000);
  if (!recit) return false;

  await P.explorer(moi.famille_id, questionId, domaine, recit, moi.id);
  rafraichir();
  return true;
}

/**
 * Fixer le rendez-vous, ou le changer.
 *
 * Deux textes courts : ils tiennent en une ligne sous la journée de l'enfant,
 * et la journée doit tenir sur un écran.
 */
export async function poserRendezVous(quand: string, quoi: string): Promise<boolean> {
  const moi = await procheConnecte();
  if (!moi) return false;

  const rdv = { quand: borner(quand, 40), quoi: borner(quoi, 90) };
  if (!rdv.quand || !rdv.quoi) return false;

  await P.poserRendezVous(moi.famille_id, rdv, moi.id);
  rafraichir();
  return true;
}

export async function retirerRendezVous(): Promise<void> {
  const moi = await procheConnecte();
  if (!moi) return;
  await P.retirerRendezVous(moi.famille_id);
  rafraichir();
}
