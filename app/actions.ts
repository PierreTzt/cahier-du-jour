"use server";

/**
 * Les gestes de la journée, écrits en base.
 *
 * Chaque action retrouve elle-même qui agit et sur quelle famille : rien de
 * tout ça ne vient du navigateur, qui pourrait mentir. Une action sans
 * session ne fait rien — silencieusement, parce qu'un enfant n'a pas à lire
 * un message d'erreur technique quand sa session a expiré.
 */

import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import {
  personneConnectee,
  fermerSession,
  renvoyerALaPorte,
  estParent,
  type Personne,
} from "@/lib/session";
import * as J from "@/lib/journee";
import * as T from "@/lib/trame";
import * as D from "@/lib/deplacer";
import { enregistrerReponse } from "@/lib/reponses";
import { codesInscrits, inscrireResultat, travailDeSeance } from "@/lib/travail";
import { corrigerExercice, exercicesDeSeance, leconParCode } from "@/lib/programme";
import {
  apresUneReponse,
  laPartieDuJour,
  remettreLeTest as remettreLeTestEnBase,
  repousserLeTest,
} from "@/lib/test-du-jour";
import { ficheParCode } from "@/lib/fiches";
import { noterResultat, resultatDepuis } from "@/lib/resultat-fiche";

/** `AAAA-MM-JJ`, et une date qui existe vraiment — pas un 31 février. */
function dateValide(s: string) {
  if (!/^\d{4}-\d{2}-\d{2}$/.test(s)) return false;
  const d = new Date(`${s}T12:00:00`);
  return !Number.isNaN(d.getTime()) && d.toISOString().slice(0, 10) === s;
}

/**
 * Qui agit, et sur quelle journée.
 *
 * `jour` n'est accepté que des adultes : l'enfant ne voit jamais qu'aujourd'hui,
 * et lui laisser désigner une date reviendrait à lui ouvrir la charge des
 * jours à venir — exactement ce que la règle n°3 interdit.
 */
async function contexte(
  jour?: string,
): Promise<{ moi: Personne; journee: J.Journee } | null> {
  const moi = await personneConnectee();
  if (!moi) return null;
  const vise = moi.role === "enfant" ? J.aujourdhui() : (jour ?? J.aujourdhui());
  if (!dateValide(vise)) return null;
  const journee = await J.journeeDe(moi.famille_id, vise);
  return { moi, journee };
}

/**
 * Les gestes de l'enfant sont à l'enfant.
 *
 * Cocher une séance, arrêter la journée, déposer un ressenti, répondre au
 * test : ces gestes disent ce que **l'enfant** a fait et ressenti. Un adulte
 * qui, depuis sa propre session, ouvrirait sa journée et cliquerait « J'ai
 * fini » écrirait dans le relevé de l'enfant quelque chose que l'enfant n'a
 * pas fait — et un ressenti déposé par un parent serait lu le soir comme le
 * sien. Les adultes ont leurs propres gestes, sur `/pilotage`.
 */
async function contexteEnfant() {
  const c = await contexte();
  return c && c.moi.role === "enfant" ? c : null;
}

/**
 * Les gestes d'un adulte. Sans session — elle se ferme à cinq heures du
 * matin — retour à la porte des adultes, sur la page d'où il venait : le
 * geste ne répondait rien, et un formulaire se vidait sans rien écrire.
 */
async function contexteAdulte(jour?: string) {
  if (!(await personneConnectee())) await renvoyerALaPorte();
  const c = await contexte(jour);
  return c && c.moi.role !== "enfant" ? c : null;
}

/* Les écrans de l'enfant et ceux de l'adulte montrent la même journée sous
   deux angles : il faut rafraîchir les deux à chaque geste. */
function rafraichir() {
  for (const c of ["/journee", "/etape", "/ressenti", "/pilotage", "/journal"]) {
    revalidatePath(c);
  }
}

/**
 * Rafraîchir partout **sauf** l'écran qu'on est en train de quitter.
 *
 * Un défaut trouvé en parcourant une leçon pour de vrai : après « J'ai fini »
 * ou « Je bloque », l'écran de confirmation n'apparaissait jamais. La
 * revalidation de `/etape` renvoyait aussitôt le rendu serveur — où la séance
 * n'est plus la courante — et le composant qui portait le message était
 * démonté avant de s'afficher.
 *
 * Or c'est précisément le message qui compte : « c'est mis de côté, on le
 * regardera un autre jour, tu n'as rien à expliquer ». Le perdre, c'est
 * renvoyer un enfant qui vient de caler vers un écran qui ne dit rien.
 *
 * Donc `/etape` n'est pas revalidé ici : le composant montre son constat, et
 * c'est le lien « Continuer » qui ramène à la journée.
 */
function rafraichirSaufEtape() {
  for (const c of ["/journee", "/ressenti", "/pilotage", "/journal"]) {
    revalidatePath(c);
  }
}

/**
 * Quitter — pour tout le monde.
 *
 * L'appareil est partagé : l'enfant qui rend la tablette ne doit pas laisser
 * sa session ouverte, et un parent qui a lu le journal le soir encore moins.
 */
export async function seDeconnecter() {
  await fermerSession();
  redirect("/");
}

/*
 * Les gestes de l'enfant rendent `true` quand ils ont écrit, `false` sinon.
 *
 * Jamais de message pour autant : l'écran qui reçoit `false` se recharge, et
 * montre l'état réel — la séance qu'un adulte a retirée n'y est plus, la
 * journée d'hier a laissé la place à celle d'aujourd'hui. Ce qu'il ne doit
 * plus jamais lire, c'est « C'est fait » ou « C'est envoyé » sur un geste
 * qui n'a rien écrit.
 */

export async function terminerSeance(seanceId: string) {
  const c = await contexteEnfant();
  if (!c) return false;
  const ecrit = await J.terminerSeance(c.journee.id, seanceId);
  if (ecrit) rafraichirSaufEtape();
  return ecrit;
}

export async function reporterSeance(seanceId: string) {
  const c = await contexteEnfant();
  if (!c) return false;
  const ecrit = await J.reporterSeance(c.journee.id, seanceId);
  if (ecrit) rafraichirSaufEtape();
  return ecrit;
}

export async function arreterJournee() {
  const c = await contexteEnfant();
  if (!c) return false;
  await J.arreterJournee(c.journee.id);
  rafraichir();
  return true;
}

export async function reprendreJournee() {
  const c = await contexteEnfant();
  if (!c) return false;
  await J.reprendreJournee(c.journee.id);
  rafraichir();
  return true;
}

export async function deposerRessenti(choix: J.RessentiMot | null, mot: string) {
  const c = await contexteEnfant();
  if (!c) return false;
  /* Quatre mots, et rien d'autre : une valeur forgée n'entre pas en base. */
  const permis: (J.RessentiMot | null)[] = ["bien", "ca-va", "bof", "pas-bien", null];
  if (!permis.includes(choix)) return false;
  await J.deposerRessenti(c.journee.id, choix, mot.slice(0, 2000));
  rafraichir();
  return true;
}

/* ------------------------------------------------------------------ */
/* Réservé aux adultes                                                 */
/* ------------------------------------------------------------------ */

/**
 * Changer le ton du jour — et changer la journée avec.
 *
 * Le parrain l'a signalé : les trois boutons ne changeaient rien. Ils
 * changeaient une colonne, et la journée de l'enfant restait identique.
 * Maintenant le ton recalcule la trame du jour et accorde les séances
 * dessus — sans jamais toucher ce qu'un adulte a voulu, ni ce que l'enfant a
 * déjà fait. Voir `accorderAuTon`.
 *
 * L'enfant ne voit jamais le mot « allégée » : ce serait lisible comme un
 * manque, et c'est la règle n°7. Il voit une journée plus courte, et rien ne
 * lui dit qu'elle a été raccourcie.
 */
export async function changerTon(ton: J.TonJour, jour?: string) {
  const c = await contexteAdulte(jour);
  if (!c || c.moi.role === "enfant") return null;

  if (!["normale", "allegee", "repos"].includes(ton)) return null;

  /* Le repos ne laisse rien à faire, l'allégée garde le socle. Une journée
     que la trame ne prévoit pas — un samedi, des vacances — n'est pas
     réécrite : on ne va pas retirer ce qu'un parent y a mis exprès. Le ton,
     la partie du test et les séances changent ensemble, ou pas du tout. */
  const tramee = T.trameDuJour(c.journee.jour);
  const voulus =
    tramee.creneaux.length > 0 || ton === "repos"
      ? T.selonLeTon(tramee, ton as T.Ton).creneaux
      : null;
  const bilan = await J.accorderAuTon(c.journee.id, ton, voulus, c.moi.id);

  rafraichir();
  return bilan;
}

export async function ajouterSeance(
  donnees: {
    matiere: string;
    titre: string;
    consigne: string;
    minutes: number;
    reference?: string;
  },
  jour?: string,
) {
  const c = await contexteAdulte(jour);
  if (!c || c.moi.role === "enfant") return false;
  /* Refusé sur une journée qu'il a finie ou arrêtée : voir `J.ajouterSeance`.
     La page se rafraîchit quand même, pour montrer pourquoi. */
  const pose = await J.ajouterSeance(c.journee.id, { ...donnees, parAdulte: c.moi.id });
  if (pose) await J.retoucher(c.journee.id);
  rafraichir();
  return pose;
}

export async function retirerSeance(seanceId: string, jour?: string) {
  const c = await contexteAdulte(jour);
  if (!c || c.moi.role === "enfant") return;
  await J.retirerSeance(c.journee.id, seanceId);
  await J.retoucher(c.journee.id);
  rafraichir();
}

/**
 * Déplacer une séance vers un autre jour. Rend son titre et le jour
 * d'arrivée, ou `null` quand rien n'a bougé — l'écran ne confirme que ce qui
 * a été écrit.
 *
 * Le jour de départ est celui de la page ; le jour d'arrivée vient du
 * navigateur, donc il est revérifié ici (`cibleAdmise`) puis en base.
 */
export async function deplacerVersUnAutreJour(seanceId: string, jour: string, cible: string) {
  const c = await contexteAdulte(jour);
  if (!c || c.moi.role === "enfant") return null;
  /* Avant `journeeDe`, qui crée la journée : pas de ligne pour une date
     refusée d'avance. */
  if (!dateValide(cible) || !D.cibleAdmise(cible, c.journee.jour, J.aujourdhui(), undefined))
    return null;
  const arrivee = await J.journeeDe(c.moi.famille_id, cible);
  if (!D.cibleAdmise(cible, c.journee.jour, J.aujourdhui(), arrivee)) return null;

  const trame = T.selonLeTon(T.trameDuJour(cible), arrivee.ton as T.Ton).creneaux;
  const fait = await J.deplacerVers(c.journee.id, arrivee.id, seanceId, trame);
  /* Même refusé, la page se rafraîchit : elle montre alors l'état réel. */
  rafraichir();
  return fait ? { titre: fait.titre, jour: cible } : null;
}

/**
 * Noter ce qu'a donné une séance menée avec une fiche.
 *
 * Un geste d'adulte — le parrain compris, qui mène aussi des séances — et qui
 * ne touche pas à l'état de la séance : « j'ai fini » reste celui de l'enfant.
 * Rend `false` quand rien n'a été écrit, pour que l'écran garde la saisie.
 */
export async function noterResultatFiche(
  seanceId: string,
  rangsARevoir: number[],
  note: string,
  jour?: string,
): Promise<boolean> {
  const c = await contexteAdulte(jour);
  if (!c || c.moi.role === "enfant") return false;
  if (!Array.isArray(rangsARevoir) || !rangsARevoir.every(Number.isInteger)) return false;
  if (typeof note !== "string") return false;

  /* La séance est cherchée dans la journée de la session : un identifiant
     venu du navigateur ne désigne rien par lui-même. */
  const seance = (await J.seancesDe(c.journee.id)).find((x) => x.id === seanceId);
  const fiche = seance && !seance.lecon ? ficheParCode.get(seance.fiche) : undefined;
  if (!fiche) return false;

  const resultat = resultatDepuis(fiche, rangsARevoir, note);
  if (!resultat) return false;
  await noterResultat(seanceId, resultat, c.moi.id);
  await J.retoucher(c.journee.id);
  /* Il se note depuis la journée, depuis la page de préparation, ou en bas
     de la fiche ouverte depuis la journée. */
  revalidatePath("/pilotage");
  revalidatePath("/preparer");
  revalidatePath("/controle");
  revalidatePath("/fiche/[code]", "page");
  return true;
}

/** La note du soir est réservée aux parents, comme le journal. */
export async function noterJournee(note: string, avant: string, jour?: string) {
  const c = await contexteAdulte(jour);
  if (!c || !estParent(c.moi)) return null;
  if (typeof note !== "string" || typeof avant !== "string") return null;
  const r = await J.noterJournee(c.journee.id, note.slice(0, 4000), c.moi.id, avant);
  if (r.ecrit) rafraichir();
  return r;
}

/* ------------------------------------------------------------------ */
/* Les questions de positionnement                                     */
/* ------------------------------------------------------------------ */

/**
 * Enregistrer une réponse.
 *
 * Ne rend que « c'est enregistré » ou non — et jamais si c'était juste.
 * L'action ne compare rien, donc l'écran de l'enfant ne peut pas le lui
 * apprendre, même par accident. La comparaison n'existe que dans la lecture
 * destinée aux parents. Le booléen sert à une seule chose : qu'un bouton
 * « J'ai répondu » refusé (partie retirée par un adulte, page d'hier) recharge
 * l'écran au lieu de ne plus rien faire.
 */
export async function repondre(code: string, valeur: string, saitPas: boolean) {
  const moi = await personneConnectee();
  if (!moi || moi.role !== "enfant") return false;

  /* Seule la question du moment s'enregistre. « On va jusqu'au bout » se
     tient côté serveur : un code forgé dans le navigateur ne peut ni sauter
     une question, ni en remplir une d'un bloc à venir. Un double clic sur la
     même question repasse ici avec le même code, et ne fait rien de plus.
     Une partie par jour se tient au même endroit : la première question de
     la partie suivante est refusée le jour où la précédente a fini. Et la
     seule porte aussi : rien ne s'enregistre un jour où la partie n'est pas
     dans sa journée. */
  const { vient, ouvert } = await laPartieDuJour(moi);
  if (!ouvert || vient.etat !== "question" || vient.etape.question.code !== code) return false;

  await enregistrerReponse(moi.id, code, valeur.slice(0, 500), saitPas);
  /* La partie finie coche son étape dans la journée. */
  await apresUneReponse(moi);
  revalidatePath("/questions");
  rafraichir();
  return true;
}

/**
 * « Revenir à ma journée », depuis le test : la partie passe après l'étape
 * suivante, et il retrouve son chemin. Voir `repousserLeTest`. Sans session
 * d'enfant, on ramène simplement à la journée.
 */
export async function revenirALaJournee() {
  const c = await contexteEnfant();
  if (c && (await repousserLeTest(c.journee.id))) rafraichir();
  redirect("/journee");
}

/** Remettre la partie du test qu'un adulte avait retirée de cette journée. */
export async function remettreLeTest(jour?: string) {
  const c = await contexteAdulte(jour);
  if (!c || c.moi.role === "enfant") return;
  await remettreLeTestEnBase(c.journee.id);
  await J.retoucher(c.journee.id);
  rafraichir();
}

/* ------------------------------------------------------------------ */
/* Les exercices du programme                                          */
/* ------------------------------------------------------------------ */

/**
 * Inscrire un résultat, et rendre la correction.
 *
 * Celle-ci rend quelque chose, contrairement à `repondre` — et la différence
 * est délibérée. Dans un exercice, l'enfant doit apprendre : la façon de faire
 * lui est due. Mais elle lui est due **après** qu'il a répondu, ce qui est
 * précisément pourquoi elle passe par ici et n'était pas dans la page.
 *
 * Ce qui n'est jamais rendu, c'est un verdict : ni « juste », ni « faux », ni
 * un décompte. L'appelant reçoit le résultat attendu et la méthode, les mêmes
 * quelle que soit sa réponse, et c'est lui qui compare.
 *
 * La séance est vérifiée contre la journée de la session : un identifiant venu
 * du navigateur ne mérite aucune confiance.
 */
export async function inscrire(
  seanceId: string,
  code: string,
  valeur: string,
  saitPas: boolean,
) {
  const c = await contexteEnfant();
  if (!c) return null;

  const seances = await J.seancesDe(c.journee.id);
  /* La séance en cours, et pas une autre leçon du jour : sinon on obtenait
     la correction d'une leçon qu'il n'avait pas encore ouverte. */
  const courante = J.journeeVivante(seances, c.journee.cloture).courante;
  const seance = seances.find((s) => s.id === seanceId);
  if (!seance || !seance.lecon || courante?.id !== seance.id) return null;

  /* L'exercice doit être un de ceux de la leçon en cours : sinon un code
     forgé rendrait la correction de n'importe quel exercice du manuel, et
     inscrirait sous cette séance un résultat qui n'en est pas. */
  const lecon = leconParCode.get(seance.lecon);
  /* Les exercices de cette séance-ci : la seconde série si elle reprend la leçon. */
  const dejaFaits = codesInscrits(await travailDeSeance(seance.id));
  if (!lecon || !exercicesDeSeance(lecon, seance.titre, dejaFaits).some((x) => x.code === code))
    return null;

  await inscrireResultat(seanceId, c.moi.id, code, valeur.slice(0, 500), saitPas);
  revalidatePath("/pilotage");

  return corrigerExercice(code);
}

/**
 * Poser une leçon du programme dans une journée.
 *
 * Le titre, la matière et la durée ne viennent **pas** du navigateur : ils
 * sont relus dans `lib/programme.ts` à partir du seul code. Un adulte choisit
 * une leçon, il n'en réécrit pas le contenu — et un code inconnu ne pose
 * rien plutôt que de créer une séance vide que l'enfant trouverait demain.
 */
export async function ajouterLecon(code: string, jour?: string): Promise<boolean> {
  const c = await contexteAdulte(jour);
  if (!c || c.moi.role === "enfant") return false;

  const lecon = leconParCode.get(code);
  if (!lecon) return false;

  const pose = await J.ajouterSeance(c.journee.id, {
    matiere: lecon.matiere,
    titre: lecon.titre,
    consigne: T.consigneDeLecon(lecon, false),
    reference: "",
    minutes: lecon.minutes,
    lecon: lecon.code,
    parAdulte: c.moi.id,
  });
  if (!pose) {
    rafraichir();
    return false;
  }
  await J.retoucher(c.journee.id);
  rafraichir();
  return true;
}

/**
 * Déplacer une séance d'un cran dans la journée.
 *
 * « Modifier le plan du jour » demandé par le parrain : on pouvait ajouter et
 * retirer, pas réordonner. Or l'ordre compte — commencer par les maths ou par
 * la lecture ne donne pas la même journée à un enfant.
 */
export async function deplacerSeance(
  seanceId: string,
  sens: "haut" | "bas",
  jour?: string,
) {
  const c = await contexteAdulte(jour);
  if (!c || c.moi.role === "enfant") return;
  await J.deplacerSeance(c.journee.id, seanceId, sens);
  await J.retoucher(c.journee.id);
  rafraichir();
}

/* ------------------------------------------------------------------ */
/* La trame de l'année                                                 */
/* ------------------------------------------------------------------ */

/**
 * Poser la trame sur une journée, une semaine, ou jusqu'aux vacances.
 *
 * Le parrain a demandé que le plan de l'année existe, pas seulement la
 * bibliothèque : « c'est à toi de créer le plan ». La trame vit dans
 * `lib/trame.ts` et se calcule ; ici, on l'écrit en base, pour qu'un adulte
 * puisse ensuite la corriger — ajouter, retirer, réordonner.
 *
 * Les journées déjà écrites ne sont **jamais** touchées : ce qu'un parent a
 * composé gagne contre la trame, et cliquer deux fois ne double rien.
 */
export async function poserLaTrame(
  portee: "jour" | "semaine" | "periode" | "annee",
  jour: string,
) {
  const moi = await personneConnectee();
  if (!moi) await renvoyerALaPorte();
  if (!moi || moi.role === "enfant") return null;

  const cibles =
    portee === "jour"
      ? [jour]
      : portee === "semaine"
        ? T.trameDeLaSemaine(jour).map((j) => j.jour)
        : portee === "annee"
          ? T.joursAvecTrame()
          : T.joursDeTravail().filter(
              (j) => j >= jour && T.periodeDe(j) === T.periodeDe(jour),
            );

  let posees = 0;
  for (const cible of cibles) {
    const tramee = T.trameDuJour(cible);
    if (tramee.creneaux.length === 0) continue;
    const journee = await J.journeeDe(moi.famille_id, cible);
    /* Le ton d'abord : un jour mis en repos n'est pas vide par oubli, et un
       jour allégé ne reçoit que le socle. « écrire cette journée » remettait
       sept séances dans un mercredi de repos (seconde critique du
       16 septembre). */
    if (journee.ton === "repos") continue;
    const r = await J.poserLaTrame(journee.id, T.selonLeTon(tramee, journee.ton).creneaux);
    if (r.pose) posees += 1;
  }

  rafraichir();
  return { posees, examinees: cibles.length };
}
