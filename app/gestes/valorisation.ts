"use server";

/**
 * Les gestes du mot et du cahier. **Réservés aux adultes.**
 *
 * Même règle que `app/actions.ts` : chaque action retrouve elle-même qui agit
 * et sur quelle famille, rien de tout ça ne vient du navigateur. Ce qui en
 * vient — un identifiant, un texte, une matière — est vérifié comme ce qu'il
 * est : une valeur que n'importe qui peut forger en envoyant la bonne requête.
 *
 * Aucun geste pour l'enfant ici, et c'est voulu : il ne demande pas son mot,
 * il le trouve. Le mot lui arrive par le rendu de `/ressenti`, une fois son
 * ressenti déposé, et jamais par un appel qu'il pourrait faire avant.
 *
 * Chaque action rend `true` quand elle a écrit, pour que l'écran de l'adulte
 * ne dise « c'est laissé » que si c'est vrai.
 */

import { revalidatePath } from "next/cache";
import { personneConnectee, estParent, estProche, renvoyerALaPorte } from "@/lib/session";
import { aujourdhui } from "@/lib/journee";
import * as V from "@/lib/valorisation";

/* Les bornes de la migration 015. `quoi` n'en a pas en base ; celle-ci tient
   le récit d'une trace sur une carte, et une requête dans des proportions
   raisonnables. */
const MOT_MAX = 1000;
const TITRE_MAX = 200;
const QUOI_MAX = 2000;

const UUID = /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i;
/* Postgres lève sur un uuid mal formé : on filtre avant, pour qu'une valeur
   forgée ne fasse rien plutôt que de faire une erreur. */
const estUuid = (x: unknown): x is string => typeof x === "string" && UUID.test(x);

/** Les trois adultes — les parents et le parrain. Pas l'enfant, et rien d'autre. */
async function adulte() {
  const moi = await personneConnectee();
  /* Session fermée (cinq heures du matin) : retour à la porte des adultes,
     sur la page d'où il venait, plutôt qu'un geste qui ne répond rien. */
  if (!moi) await renvoyerALaPorte();
  return moi && (estParent(moi) || estProche(moi)) ? moi : null;
}

/* Le mot se lit sur `/ressenti`, la trace sur `/cahier`, et les adultes voient
   les deux sur `/pilotage`. */
function rafraichir() {
  for (const c of ["/pilotage", "/ressenti", "/cahier"]) revalidatePath(c);
}

/* ------------------------------------------------------------------ */
/* Le mot                                                              */
/* ------------------------------------------------------------------ */

export async function laisserUnMot(journeeId: string, texte: string): Promise<boolean> {
  const moi = await adulte();
  if (!moi || !estUuid(journeeId)) return false;
  const propre = V.texteBorne(texte, MOT_MAX);
  if (propre === null) return false;

  /* La famille et la date sont vérifiées dans la requête : voir `ecrireMot`. */
  const ecrit = await V.ecrireMot(journeeId, moi.famille_id, propre, moi.id, aujourdhui());
  if (ecrit) rafraichir();
  return ecrit;
}

export async function retirerUnMot(motId: string): Promise<boolean> {
  const moi = await adulte();
  if (!moi || !estUuid(motId)) return false;
  const retire = await V.retirerMot(motId, moi.famille_id, moi.id);
  if (retire) rafraichir();
  return retire;
}

/* ------------------------------------------------------------------ */
/* La trace                                                            */
/* ------------------------------------------------------------------ */

export async function noterUneTrace(donnees: {
  titre: string;
  quoi: string;
  matiere: string;
}): Promise<boolean> {
  const moi = await adulte();
  if (!moi || !donnees || typeof donnees !== "object") return false;

  const titre = V.texteBorne(donnees.titre, TITRE_MAX);
  const quoi = V.texteBorne(donnees.quoi, QUOI_MAX);
  /* La matière est une clé de `lib/data.ts`, pas un texte libre : c'est elle
     qui donne la couleur de la carte, et une valeur inconnue n'en a pas. */
  if (titre === null || quoi === null || !V.estMatiere(donnees.matiere)) return false;

  const ecrit = await V.ecrireTrace(
    moi.famille_id,
    { titre, quoi, matiere: donnees.matiere },
    moi.id,
  );
  if (ecrit) rafraichir();
  return ecrit;
}

export async function retirerUneTrace(traceId: string): Promise<boolean> {
  const moi = await adulte();
  if (!moi || !estUuid(traceId)) return false;
  const retire = await V.retirerTrace(traceId, moi.famille_id, moi.id);
  if (retire) rafraichir();
  return retire;
}
