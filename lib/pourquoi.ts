/**
 * La boîte à pourquoi — ce que le parrain apporte.
 *
 * L'enfant dépose une question, son parrain la prépare, ils l'explorent en
 * vrai, côte à côte, et il en reste une carte. L'application n'enseigne rien :
 * elle prépare, elle prolonge, et elle donne quelque chose à attendre. C'est
 * le seul endroit où l'enfant donne le programme et où l'adulte travaille — et
 * on ne peut pas rater une question.
 *
 * Le fichier a trois parties, et elles ne se mélangent pas :
 *
 *   - le vocabulaire (les domaines, les états) ;
 *   - l'accès à la base, écrit à la main contre la migration 015 ;
 *   - la logique pure, sans base ni React, pour que ce que voit l'enfant se
 *     teste (`test/pourquoi.test.ts`).
 *
 * La règle qui gouverne la troisième partie : `pourquoiVivant()` ne renvoie
 * AUCUN nombre, aucune date, aucun prénom. Pas de total, pas de reste, pas de
 * compte. La garantie est structurelle — ce qui n'est pas transmis ne peut pas
 * fuiter dans un écran dans six mois.
 */

import { lignes, ligne, executer } from "./base";
import { aujourdhui } from "./journee";
import { desordonner, formatDe, momentDe, type Carte } from "./collection";
import type { RolePersonne } from "./session";

/* ------------------------------------------------------------------ */
/* Les domaines                                                        */
/* ------------------------------------------------------------------ */

/**
 * Les domaines du parrain ne sont pas des matières scolaires : ce sont des
 * manières de regarder. Ils réutilisent les teintes déjà vérifiées à 4,5:1 —
 * l'ocre est délibérément absent, il signifie déjà « ce qui glisse » ailleurs
 * dans l'application.
 *
 * La liste est celle du type Postgres `domaine_question` : en ajouter un
 * demande une migration, et c'est voulu.
 */
export type DomaineId = "machines" | "vivant" | "ciel" | "mots" | "enigmes";

export type Domaine = { id: DomaineId; libelle: string; teinte: string };

export const domaines: Record<DomaineId, Domaine> = {
  machines: { id: "machines", libelle: "Comment c’est fait", teinte: "bleu" },
  vivant: { id: "vivant", libelle: "Le vivant", teinte: "sauge" },
  ciel: { id: "ciel", libelle: "Le ciel", teinte: "sarcelle" },
  mots: { id: "mots", libelle: "Les mots", teinte: "prune" },
  enigmes: { id: "enigmes", libelle: "Les énigmes", teinte: "encre-douce" },
};

export const ordreDomaines: DomaineId[] = ["machines", "vivant", "ciel", "mots", "enigmes"];

export const estDomaine = (x: unknown): x is DomaineId =>
  typeof x === "string" && (ordreDomaines as string[]).includes(x);

/* ------------------------------------------------------------------ */
/* Les questions                                                       */
/* ------------------------------------------------------------------ */

/**
 * Quatre états, et aucun ne peut se lire comme un refus.
 * `on-cherche` est un état durable, pas un retard : c'est le moment où
 * l'adulte dit qu'il ne sait pas, et c'est le meilleur du dispositif.
 */
export type EtatQuestion = "deposee" | "lue" | "on-cherche" | "exploree";

export type Question = {
  id: string;
  /** Ses mots à lui, jamais reformulés. */
  texte: string;
  etat: EtatQuestion;
  /** Les notes de préparation du parrain. Ne sortent jamais côté enfant. */
  preparation: string;
  /** Renseignés à l'exploration : ce qu'il en reste. */
  domaine: DomaineId | null;
  trace: string;
  /** L'heure exacte du dépôt. Elle ne sert qu'aux adultes. */
  deposee_le: Date;
  /** `AAAA-MM-JJ`, ou `null` tant qu'elle n'est pas explorée. */
  exploree_le: string | null;
};

/** Une personne de la famille, telle que la boîte à pourquoi en a besoin. */
export type Membre = {
  role: RolePersonne;
  prenom: string;
  mot_de_l_enfant: string;
};

/**
 * Le filet : les semaines où la boîte reste vide, c'est le parrain qui
 * propose. Deux textes libres — « samedi », « pourquoi les avions tiennent en
 * l'air » — et jamais une date : une date se compte à rebours.
 */
export type RendezVous = { quand: string; quoi: string };

/* ------------------------------------------------------------------ */
/* La base                                                             */
/* ------------------------------------------------------------------ */

/* `exploree_le` est un `date` : lu tel quel, `pg` en ferait un `Date` à minuit
   dans le fuseau du serveur, qui peut glisser d'un jour. On le lit en texte. */
const COLONNES = `id, texte, etat, preparation, domaine, trace, deposee_le,
                  exploree_le::text as exploree_le`;

/** Toutes les questions d'une famille, par ordre d'arrivée. */
export async function questionsDe(familleId: string): Promise<Question[]> {
  return lignes<Question>(
    `select ${COLONNES} from question
      where famille_id = $1
      order by deposee_le, id`,
    [familleId],
  );
}

/**
 * Les personnes de la famille.
 *
 * L'ordre sert à écrire « papa et maman » toujours de la même façon. À date de
 * création égale — l'amorçage les crée dans la même transaction, donc au même
 * `now()` — il est arbitraire mais stable ; décroissant sur le mot, il donne
 * « papa et maman » comme le reste de l'application.
 */
export async function personnesDe(familleId: string): Promise<Membre[]> {
  return lignes<Membre>(
    `select role, prenom, mot_de_l_enfant from personne
      where famille_id = $1
      order by cree_le, mot_de_l_enfant desc`,
    [familleId],
  );
}

/**
 * Le rendez-vous de la famille, ou `null`.
 *
 * Une ligne aux champs vides n'est pas un rendez-vous : la table les autorise
 * par défaut, l'écran de l'enfant ne doit pas lire « Ton parrain vient . ».
 */
export async function rendezVousDe(
  familleId: string,
): Promise<(RendezVous & { modifie_le: Date }) | null> {
  const r = await ligne<RendezVous & { modifie_le: Date }>(
    `select quand, quoi, modifie_le from rendez_vous where famille_id = $1`,
    [familleId],
  );
  return r && r.quand.trim() && r.quoi.trim() ? r : null;
}

export async function deposerQuestion(familleId: string, texte: string) {
  await executer(`insert into question (famille_id, texte) values ($1, $2)`, [
    familleId,
    texte,
  ]);
}

/*
 * Les gestes du parrain. Chacun porte la famille dans sa clause `where` : un
 * identifiant de question venu du navigateur ne touche jamais la question
 * d'une autre famille, il ne touche rien. Et chacun ne s'applique qu'aux états
 * d'où il a un sens — un double clic, ou deux onglets ouverts, ne font pas
 * revenir une question explorée en arrière.
 */

export async function marquerLue(familleId: string, questionId: string, parAdulte: string) {
  await executer(
    `update question set etat = 'lue', modifiee_par = $3
      where id = $1 and famille_id = $2 and etat = 'deposee'`,
    [questionId, familleId, parAdulte],
  );
}

export async function chercherEncore(familleId: string, questionId: string, parAdulte: string) {
  await executer(
    `update question set etat = 'on-cherche', modifiee_par = $3
      where id = $1 and famille_id = $2 and etat in ('deposee', 'lue')`,
    [questionId, familleId, parAdulte],
  );
}

export async function noterPreparation(
  familleId: string,
  questionId: string,
  preparation: string,
  parAdulte: string,
) {
  await executer(
    `update question set preparation = $3, modifiee_par = $4
      where id = $1 and famille_id = $2 and etat <> 'exploree'`,
    [questionId, familleId, preparation, parAdulte],
  );
}

/**
 * Explorer : la question devient une carte de sa collection.
 *
 * Le jour est celui de Paris, pas celui du serveur. La contrainte
 * `une_exploration_a_sa_carte` de la migration refuse une exploration sans
 * domaine ou sans récit ; l'action serveur les vérifie avant, pour ne jamais
 * faire lever Postgres.
 */
export async function explorer(
  familleId: string,
  questionId: string,
  domaine: DomaineId,
  trace: string,
  parAdulte: string,
) {
  await executer(
    `update question
        set etat = 'exploree', domaine = $3, trace = $4,
            exploree_le = $5::date, modifiee_par = $6
      where id = $1 and famille_id = $2 and etat <> 'exploree'`,
    [questionId, familleId, domaine, trace, aujourdhui(), parAdulte],
  );
}

/** Un seul rendez-vous à la fois : le poser remplace le précédent. */
export async function poserRendezVous(
  familleId: string,
  rdv: RendezVous,
  parAdulte: string,
) {
  await executer(
    `insert into rendez_vous (famille_id, quand, quoi, par_adulte, modifie_le)
     values ($1, $2, $3, $4, now())
     on conflict (famille_id) do update
       set quand = excluded.quand, quoi = excluded.quoi,
           par_adulte = excluded.par_adulte, modifie_le = now()`,
    [familleId, rdv.quand, rdv.quoi, parAdulte],
  );
}

export async function retirerRendezVous(familleId: string) {
  await executer(`delete from rendez_vous where famille_id = $1`, [familleId]);
}

/* ------------------------------------------------------------------ */
/* Ce que l'écran de l'enfant a le droit de savoir                     */
/* ------------------------------------------------------------------ */

const majuscule = (s: string) => s.charAt(0).toLocaleUpperCase("fr-FR") + s.slice(1);

/** « papa », « papa et maman », « papa, maman et tata ». */
function enumerer(mots: string[]) {
  if (mots.length <= 1) return mots.join("");
  return `${mots.slice(0, -1).join(", ")} et ${mots[mots.length - 1]}`;
}

/**
 * Ce qu'il lit d'une question encore en route. Une phrase, jamais un statut.
 *
 * Le mot est `mot_de_l_enfant` : côté enfant on ne dit pas le prénom, on dit
 * « parrain », comme il dit « papa » et « maman ». Les phrases sont accordées
 * au masculin — « ton », « lui » — ce qui tient pour un parrain ; une marraine
 * demanderait de les accorder.
 */
export function phrasesDuParrain(mot: string): Record<Exclude<EtatQuestion, "exploree">, string> {
  return {
    deposee: `C’est parti chez ton ${mot}.`,
    lue: `Ton ${mot} a lu ta question.`,
    "on-cherche": `Ton ${mot} cherche encore. Lui non plus il ne sait pas.`,
  };
}

/**
 * La ligne du rendez-vous, telle qu'il la lit sous sa journée.
 *
 * `null` s'il n'y a rien à attendre : pas de rendez-vous, un rendez-vous vide,
 * ou plus de parrain pour venir. Le point final ajouté ici ne doit pas en
 * doubler un que le parrain aurait tapé.
 */
/**
 * Combien de temps un rendez-vous reste sous la journée de l'enfant.
 *
 * « samedi » ne dit pas quel samedi. Un rendez-vous que personne ne retire
 * resterait affiché après le jour dit, et une promesse qui traîne se lit comme
 * une promesse non tenue — exactement ce qu'un enfant qui redoute de décevoir
 * n'a pas besoin de voir. Au-delà d'une semaine après avoir été posé, il
 * disparaît de son écran ; le parrain le voit toujours dans l'atelier, et le
 * repose s'il tient encore.
 */
export const JOURS_DU_RENDEZ_VOUS = 7;

export function rendezVousPourLEnfant(
  rdv: (RendezVous & { modifie_le?: Date }) | null,
  personnes: Membre[],
  /** L'instant présent. Sans lui, pas d'expiration : c'est ce que les tests purs utilisent. */
  maintenant?: Date,
): { quand: string; phrase: string } | null {
  const parrain = personnes.find((p) => p.role === "proche");
  if (!rdv || !parrain) return null;
  if (
    maintenant &&
    rdv.modifie_le &&
    maintenant.getTime() - rdv.modifie_le.getTime() > JOURS_DU_RENDEZ_VOUS * 24 * 3600 * 1000
  )
    return null;
  const quand = rdv.quand.trim();
  const quoi = rdv.quoi.trim().replace(/[\s.!?…]+$/u, "");
  if (!quand || !quoi) return null;
  return {
    quand,
    phrase: `Ton ${parrain.mot_de_l_enfant} vient. On va regarder ${quoi}.`,
  };
}

export type QuestionEnRoute = { id: string; texte: string; phrase: string };

export type VueDeLEnfant = {
  /** Le mot qui désigne le parrain, ou `null` si la famille n'en a pas. */
  parrain: string | null;
  /** Ce que dit le champ de dépôt. `null` sans parrain : personne pour préparer. */
  boite: {
    /** Qui lit, en clair. */
    quiLit: string;
    bouton: string;
    /** La phrase qui confirme le dépôt. */
    depose: string;
  } | null;
  enRoute: QuestionEnRoute[];
  collection: Carte[];
  /** Le vide de la collection, au futur : un vide dit au passé est un reproche. */
  vide: string;
  rendezVous: { quand: string; phrase: string } | null;
};

/** Le jour où la question a été regardée ; à défaut, celui où elle est arrivée. */
function jourDeLaCarte(q: Question): Date {
  return q.exploree_le ? new Date(`${q.exploree_le}T12:00:00Z`) : q.deposee_le;
}

/**
 * La projection de l'enfant.
 *
 * Elle reçoit tout — les questions avec la préparation du parrain et les dates
 * exactes, les personnes avec leurs prénoms — et n'en rend que des phrases.
 * Aucun nombre, aucune date, aucun prénom, aucune préparation : ce qui ne sort
 * pas d'ici ne peut pas s'afficher par erreur.
 *
 * Les questions en route vont de la plus récente à la plus ancienne : celle
 * qu'il vient de déposer apparaît juste sous le champ, là où il regarde.
 *
 * La collection, elle, ne suit pas le temps : une collection rangée par date se
 * lit comme une frise, et une frise montre ses trous. L'ordre est stable — il
 * ne bouge pas d'une visite à l'autre — mais il ne veut rien dire.
 */
export function pourquoiVivant(
  questions: Question[],
  personnes: Membre[],
  rdv: (RendezVous & { modifie_le?: Date }) | null,
  /** L'instant présent, pour qu'un rendez-vous ancien ne s'affiche plus. */
  maintenant?: Date,
): VueDeLEnfant {
  const adultes = personnes.filter((p) => p.role !== "enfant");
  const parrain = adultes.find((p) => p.role === "proche") ?? null;
  const mot = parrain?.mot_de_l_enfant ?? null;

  /* Sans parrain, la boîte n'a personne pour préparer. Ça n'arrive pas dans
     cette famille ; si ça arrivait, la phrase ne doit ni mentir ni reprocher. */
  const phrases = mot ? phrasesDuParrain(mot) : null;
  const neutre = "Ta question est bien rangée.";

  /* Tous les autres adultes la lisent aussi, et l'écran le dit. */
  const autres = adultes.filter((p) => p !== parrain).map((p) => p.mot_de_l_enfant);
  const aussi =
    autres.length === 0
      ? "Personne d’autre ne la lit."
      : `${majuscule(enumerer(autres))} ${autres.length === 1 ? "peut" : "peuvent"} la lire aussi.`;

  const enRoute: QuestionEnRoute[] = questions
    .filter((q) => q.etat !== "exploree")
    .sort((a, b) => b.deposee_le.getTime() - a.deposee_le.getTime())
    .map((q) => ({
      id: q.id,
      texte: q.texte,
      phrase: phrases ? phrases[q.etat as Exclude<EtatQuestion, "exploree">] : neutre,
    }));

  const collection: Carte[] = desordonner(
    questions
      .filter((q) => q.etat === "exploree" && q.domaine !== null && estDomaine(q.domaine))
      .map((q) => {
        const d = domaines[q.domaine as DomaineId];
        return {
          id: q.id,
          texte: q.texte,
          recit: q.trace,
          moment: momentDe(jourDeLaCarte(q)),
          etiquette: { libelle: d.libelle, teinte: d.teinte },
          format: formatDe(q.id),
        };
      }),
  );

  return {
    parrain: mot,
    boite:
      mot && phrases
        ? {
            quiLit: `Ça part chez ton ${mot}. ${aussi} Il la prépare, et vous la regardez ensemble quand il vient.`,
            bouton: `Envoyer à mon ${mot}`,
            depose: phrases.deposee,
          }
        : null,
    enRoute,
    collection,
    vide: mot
      ? `Quand ton ${mot} et toi aurez regardé une question ensemble, elle viendra se ranger ici.`
      : "Les questions que tu regarderas avec quelqu’un viendront se ranger ici.",
    rendezVous: rendezVousPourLEnfant(rdv, adultes, maintenant),
  };
}

/* ------------------------------------------------------------------ */
/* Ce que les adultes voient                                           */
/* ------------------------------------------------------------------ */

/** L'atelier, lui, a le droit de compter et de trier par arrivée. */
export function atelierDe(questions: Question[]) {
  const parArrivee = [...questions].sort(
    (a, b) => a.deposee_le.getTime() - b.deposee_le.getTime(),
  );
  return {
    aLire: parArrivee.filter((q) => q.etat === "deposee"),
    enPreparation: parArrivee.filter((q) => q.etat === "lue" || q.etat === "on-cherche"),
    explorees: parArrivee.filter((q) => q.etat === "exploree"),
  };
}

export type Exploration = {
  id: string;
  texte: string;
  trace: string;
  /** `AAAA-MM-JJ` : ce document-ci s'adresse aux adultes et à l'inspection. */
  exploree_le: string;
};

export type ExploreesDuDomaine = { domaine: Domaine; questions: Exploration[] };

/**
 * Ce qui a été exploré, groupé par domaine, dans l'ordre des domaines, et par
 * date d'exploration à l'intérieur de chacun. Les domaines sans question
 * n'apparaissent pas.
 */
export function grouperParDomaine(questions: Question[]): ExploreesDuDomaine[] {
  const explorees = questions
    .filter((q) => q.etat === "exploree" && estDomaine(q.domaine))
    .map((q) => ({
      domaine: q.domaine as DomaineId,
      exploration: {
        id: q.id,
        texte: q.texte,
        trace: q.trace,
        /* Une question explorée a toujours son jour ; à défaut — une ligne
           écrite à la main dans la base —, celui de son arrivée, à Paris. */
        exploree_le:
          q.exploree_le ??
          q.deposee_le.toLocaleDateString("sv-SE", { timeZone: "Europe/Paris" }),
      },
    }));

  return ordreDomaines
    .map((id) => ({
      domaine: domaines[id],
      questions: explorees
        .filter((e) => e.domaine === id)
        .map((e) => e.exploration)
        .sort((a, b) => a.exploree_le.localeCompare(b.exploree_le)),
    }))
    .filter((g) => g.questions.length > 0);
}

/**
 * Pour le relevé et la vue du contrôle : « Exploré hors livrets ».
 *
 * Pour un contrôle d'instruction en famille, c'est la matière qui montre une
 * instruction vivante là où un tableau de séances ne montre que des cases.
 */
export async function exploreesParDomaine(familleId: string): Promise<ExploreesDuDomaine[]> {
  return grouperParDomaine(await questionsDe(familleId));
}
