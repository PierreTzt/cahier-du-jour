/**
 * La trame de l'année : ce que l'enfant fait, jour par jour.
 *
 * La bibliothèque contient cent treize leçons. Elle ne sert à rien si personne
 * ne compose la journée — et demander à un parent de choisir six séances tous
 * les soirs pendant dix mois, c'est lui demander d'abandonner en trois
 * semaines. Ce fichier découpe donc le programme en journées.
 *
 * ## Trois heures par jour, et pourquoi pas vingt-quatre
 *
 * Le parrain a fixé trois heures de cours et d'exercices par jour. Le
 * programme officiel prévoit vingt-quatre heures hebdomadaires en classe —
 * mais une classe de trente élèves passe un temps considérable en
 * déplacements, en mises en rang, en attente, en distribution de feuilles.
 * En instruction en famille, avec un seul enfant, le temps utile est bien plus
 * dense. Trois heures à la maison valent une journée d'école, et c'est le
 * constat ordinaire des familles qui pratiquent l'IEF.
 *
 * Quatre jours à trois heures et un mercredi plus court font treize heures
 * trente par semaine. Les proportions entre matières suivent celles du
 * programme, réduites d'autant : français le plus, puis mathématiques, puis
 * le reste.
 *
 * ## Le mercredi est à part
 *
 * Plus court, et orienté vers autre chose : une expérience, une sortie, une
 * question creusée. C'est le jour où le parrain est là, et c'est écrit dans la
 * trame plutôt que laissé au hasard.
 *
 * ## Tout est en écran, non
 *
 * Une journée n'est pas faite que de leçons à l'écran, et ce serait une
 * mauvaise journée. La trame place donc aussi du travail qui n'y est pas :
 * calcul mental à l'ardoise, dictée, copie, lecture à voix haute, production
 * d'écrit, dehors. Ces séances portent un titre et une consigne, exactement
 * comme celles qu'un parent écrirait à la main — parce que c'est ce qu'elles
 * sont.
 *
 * ## Rien n'est aléatoire
 *
 * `trameDuJour()` rend toujours la même chose pour une date donnée. Un plan
 * qui changerait d'un affichage à l'autre serait impossible à préparer, et
 * impossible à corriger. Les rituels tournent sur des listes, indexées par le
 * rang du jour dans l'année.
 *
 * ## Le calendrier est celui de Lille, et il est officiel
 *
 * Cette version suit l'académie de **Lille**, **zone B**. Les dates
 * ci-dessous viennent de l'open data du ministère, pas d'une approximation :
 *
 *   data.education.gouv.fr/explore/dataset/fr-en-calendrier-scolaire
 *   (annee_scolaire = 2026-2027, location = Lille)
 *
 * Une recherche sur le web m'avait répondu que Lille était en zone A. C'était
 * faux, et c'est exactement le genre d'erreur qui décale une année entière :
 * la source fait foi, pas le résumé. Mes premières dates étaient justes pour
 * la Toussaint et Noël, fausses d'une semaine pour l'hiver et le printemps, et
 * fausses de quatre jours pour la fin de l'année.
 */

import type { MatiereId } from "./data";
import { demandeDesCalculs, lecons, SUFFIXE_REPRISE, type Lecon, type Periode } from "./programme";
import { ficheDe, fichesDuRituel } from "./fiches";

/* ------------------------------------------------------------------ */
/* Le calendrier                                                       */
/* ------------------------------------------------------------------ */

/** Le premier jour de travail. Le test de positionnement tombe la veille. */
export const PREMIER_JOUR = "2026-09-17";

/** L'académie dont viennent les dates de vacances. Affiché côté adulte. */
export const ZONE = { academie: "Lille", zone: "B" } as const;

/** Les vacances, pour l'écran des adultes. */
export const lesVacances = () => VACANCES.map((v) => ({ ...v }));

/** Le jour du test de positionnement : le parrain voit l'enfant. */
export const JOUR_DU_TEST = "2026-09-16";

/** Le dernier jour de classe, d'après le calendrier officiel de Lille. */
export const DERNIER_JOUR = "2027-07-02";

/**
 * Les vacances, bornes incluses.
 *
 * Ces dates ne sont plus approximatives : elles viennent de l'open data du
 * ministère pour l'académie de Lille, zone B. La version d'avant les estimait,
 * et trois des cinq étaient fausses — une semaine d'écart sur l'hiver et le
 * printemps, quatre jours sur la fin de l'année.
 */
const VACANCES: { nom: string; du: string; au: string }[] = [
  { nom: "Vacances de la Toussaint", du: "2026-10-17", au: "2026-11-01" },
  { nom: "Vacances de Noël", du: "2026-12-19", au: "2027-01-03" },
  { nom: "Vacances d’hiver", du: "2027-02-20", au: "2027-03-07" },
  { nom: "Vacances de printemps", du: "2027-04-17", au: "2027-05-02" },
];

/**
 * Les jours fériés et les ponts qui tombent en semaine pendant l'année.
 *
 * Le 1er mai et le 8 mai 2027 tombent un samedi : ils ne changent rien et ne
 * figurent donc pas ici. Le pont de l'Ascension, lui, est dans le calendrier
 * officiel de Lille — le vendredi 7 mai est vacant.
 *
 * Le lundi de Pâques manquait à la première version : Pâques tombe le
 * 28 mars 2027, tôt, donc en dehors des vacances de printemps de la zone B
 * (17 avril – 2 mai). L'open data du ministère ne liste que les vacances,
 * pas les jours fériés, et c'est ainsi qu'un lundi férié s'est retrouvé avec
 * sept séances écrites dessus. Les fériés viennent du calendrier civil, et
 * chacun est vérifié à la main contre lui.
 */
const FERIES: Record<string, string> = {
  "2026-11-11": "Armistice",
  "2027-03-29": "Lundi de Pâques",
  "2027-05-06": "Ascension",
  "2027-05-07": "Pont de l’Ascension",
  "2027-05-17": "Lundi de Pentecôte",
};

/** Le début de chaque période, qui suit les vacances. */
const DEBUTS_PERIODE: Record<Periode, string> = {
  1: "2026-09-01",
  2: "2026-11-02",
  3: "2027-01-04",
  4: "2027-03-08",
  5: "2027-05-03",
};

const jourDeLaSemaine = (iso: string) => new Date(`${iso}T12:00:00`).getDay();

export const estWeekEnd = (iso: string) =>
  jourDeLaSemaine(iso) === 0 || jourDeLaSemaine(iso) === 6;

export const vacancesDe = (iso: string) =>
  VACANCES.find((v) => iso >= v.du && iso <= v.au) ?? null;

export const ferieDe = (iso: string) => FERIES[iso] ?? null;

/** Dans quelle période tombe une date. */
export function periodeDe(iso: string): Periode {
  let p: Periode = 1;
  for (const n of [1, 2, 3, 4, 5] as const) {
    if (iso >= DEBUTS_PERIODE[n]) p = n;
  }
  return p;
}

/** Le lundi de la semaine d'une date. */
export function lundiDe(iso: string) {
  const d = new Date(`${iso}T12:00:00`);
  const decalage = (d.getDay() + 6) % 7;
  d.setDate(d.getDate() - decalage);
  return d.toISOString().slice(0, 10);
}

export function decaler(iso: string, jours: number) {
  const d = new Date(`${iso}T12:00:00`);
  d.setDate(d.getDate() + jours);
  return d.toISOString().slice(0, 10);
}

/** Tous les jours de travail de l'année, dans l'ordre. */
export function joursDeTravail(): string[] {
  const jours: string[] = [];
  let j = PREMIER_JOUR;
  while (j <= DERNIER_JOUR) {
    if (!estWeekEnd(j) && !vacancesDe(j) && !ferieDe(j)) jours.push(j);
    j = decaler(j, 1);
  }
  return jours;
}

/**
 * Toutes les dates pour lesquelles la trame propose quelque chose.
 *
 * C'est `joursDeTravail()` **plus le jour du test**, qui n'est pas un jour de
 * cours — il ne compte ni dans le volume ni dans les leçons — mais qui a bien
 * une journée à écrire. Le parrain l'a signalé le premier : « mercredi, je ne
 * vois rien alors que c'est censé être le jour du test ».
 *
 * D'où une fonction séparée plutôt qu'un `joursDeTravail()` élargi : les deux
 * questions sont différentes. « Combien de jours de cours dans l'année » ne
 * doit pas compter le test ; « quelles journées y a-t-il à poser » doit.
 */
export function joursAvecTrame(): string[] {
  return [JOUR_DU_TEST, ...joursDeTravail()];
}

/**
 * Les dates auxquelles un rituel tombe, dans l'ordre.
 *
 * Les fiches d'un rituel forment une série, et la n-ième sert la n-ième fois
 * qu'il revient : cette liste dit donc, sans qu'aucune date ne soit écrite
 * dans une fiche, quel jour chacune tombera.
 */
export function joursDuRituel(titre: string): string[] {
  return joursAvecTrame().filter((j) =>
    trameDuJour(j).creneaux.some((c) => !c.lecon && c.titre === titre),
  );
}

/**
 * Les dates auxquelles la trame place une leçon donnée.
 *
 * Deux en général : la fois où elle est donnée, et la reprise une dizaine de
 * jours plus tard. Sert à situer une leçon quand on la lit hors de son
 * contexte — « celle-ci tombe le 24 septembre, et revient le 5 octobre ».
 */
export function joursDeLaLecon(code: string): string[] {
  return joursDeTravail().filter((j) =>
    trameDuJour(j).creneaux.some((c) => c.lecon === code),
  );
}

/* ------------------------------------------------------------------ */
/* Les rituels, qui ne sont pas à l'écran                              */
/* ------------------------------------------------------------------ */

type Rituel = { titre: string; consigne: string; minutes: number };

/** Le calcul mental du matin. Quinze minutes, à l'ardoise, tous les jours. */
const CALCUL_MENTAL: Rituel[] = [
  { titre: "Les tables de multiplication", consigne: "Dix multiplications dictées, à l’ardoise. On efface entre chaque. On redit celles qui ont hésité.", minutes: 15 },
  { titre: "Les doubles et les moitiés", consigne: "Des doubles et des moitiés. Dix questions, à l’ardoise.", minutes: 15 },
  { titre: "Les compléments à 100", consigne: "Combien manque-t-il pour aller à 100 ? Dix questions, à l’ardoise.", minutes: 15 },
  { titre: "Ajouter 9, 19, 29", consigne: "On ajoute la dizaine ronde et on retire 1. Dix questions, en disant la procédure à voix haute.", minutes: 15 },
  { titre: "Multiplier par 10, 100, 1 000", consigne: "Dix questions, à l’oral.", minutes: 15 },
  { titre: "Multiplier par 4 et par 8", consigne: "Par 4, c’est doubler deux fois. Par 8, trois fois. Dix questions en disant les étapes.", minutes: 15 },
  { titre: "Multiplier par 5 et par 50", consigne: "Par 5, c’est la moitié de par 10. Par 50, la moitié de par 100. Dix questions.", minutes: 15 },
  { titre: "Les fractions d’une quantité", consigne: "La moitié, le tiers, le quart d’une quantité. Dix questions à l’oral.", minutes: 15 },
  { titre: "Les problèmes en une phrase", consigne: "Cinq problèmes dictés, très courts. La réponse sur l’ardoise, sans écrire le calcul.", minutes: 15 },
  { titre: "Encadrer et arrondir", consigne: "Entre quelles dizaines se trouve un nombre ? Dix questions, à l’ardoise.", minutes: 15 },
  { titre: "Les unités de mesure", consigne: "Combien de grammes dans 2 kg 500 ? De centimètres dans 3 m 50 ? Dix questions.", minutes: 15 },
  { titre: "Les durées", consigne: "Combien de temps entre deux heures ? Cinq calculs de durée, à l’oral.", minutes: 15 },
];

/** Dictée, copie, orthographe. Vingt minutes, sur le cahier. */
const ECRITURE: Rituel[] = [
  { titre: "Dictée de mots", consigne: "Quinze mots de la liste en cours. On corrige ensemble, et ceux qui ont hésité reviennent dans une prochaine dictée.", minutes: 20 },
  { titre: "Dictée de phrases", consigne: "Trois phrases, sous la dictée. Avant de corriger, on regarde les accords ensemble.", minutes: 20 },
  { titre: "Copie soignée", consigne: "Copier huit lignes du texte du jour, le plus soigneusement possible. On relit avant de rendre.", minutes: 20 },
  { titre: "Dictée préparée", consigne: "On lit le texte ensemble, puis on le dicte et on compare avec l’original.", minutes: 20 },
  { titre: "Les mots invariables", consigne: "Apprendre dix mots invariables, puis les écrire sous la dictée.", minutes: 20 },
  { titre: "Transformer des phrases", consigne: "Mettre cinq phrases au pluriel, en respectant toute la chaîne d’accords. À l’écrit.", minutes: 20 },
  { titre: "Dictée à trous", consigne: "Le texte est écrit, il manque les terminaisons des verbes. On les complète en justifiant.", minutes: 20 },
  { titre: "Auto-dictée", consigne: "Lire quatre lignes plusieurs fois, les cacher, puis les écrire de mémoire.", minutes: 20 },
];

/** La lecture. Trente minutes, à voix haute ou silencieuse. */
const LECTURE: Rituel[] = [
  { titre: "Lecture à voix haute", consigne: "Une page préparée, lue à voix haute en respectant la ponctuation. On marque au crayon où respirer.", minutes: 30 },
  { titre: "Lecture silencieuse", consigne: "Vingt minutes de lecture, seul, puis raconter ce qui vient de se passer.", minutes: 30 },
  { titre: "Lecture et questions", consigne: "Un texte court, puis cinq questions : trois sur ce qui est écrit, deux sur ce qui se déduit.", minutes: 30 },
  { titre: "Lecture d’un documentaire", consigne: "Une double page documentaire. Relever la nature et la source du document avant de lire.", minutes: 30 },
  { titre: "Poésie", consigne: "Lire un poème à voix haute, plusieurs fois. Repérer les rimes et les images. En apprendre quatre vers.", minutes: 30 },
  { titre: "Lecture d’une bande dessinée", consigne: "Une planche. Puis expliquer ce que les images racontent et que le texte ne dit pas.", minutes: 30 },
  { titre: "Lecture de théâtre", consigne: "Une scène, lue à deux voix. Les didascalies ne se disent pas : elles se jouent.", minutes: 30 },
  { titre: "Lecture libre", consigne: "Le livre que tu veux, sans compte à rendre.", minutes: 30 },
];

/** La production d'écrit. Vingt-cinq minutes. */
const REDACTION: Rituel[] = [
  { titre: "Écrire la suite", consigne: "Lire le début d’un récit, puis en écrire la suite : dix lignes. Brouillon d’abord.", minutes: 25 },
  { titre: "Raconter sa journée d’hier", consigne: "Dix lignes au passé. Vérifier que les temps ne changent pas en cours de route.", minutes: 25 },
  { titre: "Écrire un dialogue", consigne: "Deux personnages, six répliques. Tirets, verbes de parole variés, une ligne par personne.", minutes: 25 },
  { titre: "Décrire un lieu", consigne: "Dix lignes sur un endroit que tu connais. Au moins trois adjectifs qui servent vraiment.", minutes: 25 },
  { titre: "Donner son avis", consigne: "Ce que je pense, pourquoi, un exemple. Huit lignes. Les trois morceaux doivent y être.", minutes: 25 },
  { titre: "Expliquer une règle", consigne: "Réécrire avec tes mots une leçon de la semaine, pour quelqu’un qui ne l’a pas eue.", minutes: 25 },
  { titre: "Écrire une lettre", consigne: "Une lettre à quelqu’un de la famille. Formule d’appel, corps, formule de fin.", minutes: 25 },
  { titre: "Inventer un problème", consigne: "Écrire un problème de mathématiques à deux étapes, avec sa solution sur une autre feuille.", minutes: 25 },
];

/** Dehors, et le corps. Trente minutes, jamais devant un écran. */
const DEHORS: Rituel[] = [
  { titre: "Course et endurance", consigne: "Courir à ton rythme, et marcher quand il le faut. Rien ne se chronomètre, rien ne se compare.", minutes: 30 },
  { titre: "Jeux de ballon", consigne: "Passes contre un mur, tirs, jonglages. On regarde le ballon revenir, on ne compte rien.", minutes: 30 },
  { titre: "Vélo", consigne: "Une sortie. Repérer le trajet sur un plan avant de partir, puis le raconter au retour.", minutes: 30 },
  { titre: "Parcours et équilibre", consigne: "Un parcours à installer soi-même : sauter, grimper, tenir en équilibre, ramper.", minutes: 30 },
  { titre: "Marche et observation", consigne: "Une marche d’une demi-heure. Rapporter trois choses observées, à noter ou à dessiner.", minutes: 30 },
  { titre: "Jeux de raquette", consigne: "Échanges contre un mur ou à deux. On cherche un geste souple, on ne compte rien.", minutes: 30 },
  { titre: "Danse et rythme", consigne: "Suivre une pulsation, inventer une suite de mouvements de huit temps, la refaire à l’identique.", minutes: 30 },
  { titre: "Jardinage ou bricolage", consigne: "Planter, arroser, mesurer, réparer. Le travail des mains compte autant que le reste.", minutes: 30 },
];

/** Le mercredi. Quarante-cinq minutes, et ce n'est pas un cours. */
const MERCREDI: Rituel[] = [
  { titre: "Une expérience", consigne: "Mélanger, dissoudre, filtrer, peser. Écrire ce qu’on croit qu’il va se passer AVANT de le faire, puis comparer.", minutes: 45 },
  { titre: "La boîte à pourquoi", consigne: "Prendre une question que tu as posée cette semaine, chercher la réponse ensemble, et s’arrêter quand on ne sait plus.", minutes: 45 },
  { titre: "Construire quelque chose", consigne: "Un objet qui marche : un pont en papier qui porte un livre, un moulin, un circuit. Croquis d’abord.", minutes: 45 },
  { titre: "Une sortie", consigne: "Marché, médiathèque, musée, chantier, gare, ferme. On prépare une question avant de partir, et on y répond au retour.", minutes: 45 },
  { titre: "Cuisine et mesures", consigne: "Une recette, en pesant et en convertissant. Doubler les quantités pour voir ce que ça change.", minutes: 45 },
  { titre: "Démonter un objet", consigne: "Un vieil appareil, un stylo, une serrure. Nommer les pièces et dire à quoi chacune sert.", minutes: 45 },
  { titre: "Une carte", consigne: "Dessiner le plan du quartier de mémoire, puis le comparer à une vraie carte. Chercher ce qui manque.", minutes: 45 },
  { titre: "Programmer un déplacement", consigne: "Écrire une suite d’instructions pour faire tracer une figure, puis l’exécuter à la lettre — même si c’est faux.", minutes: 45 },
  { titre: "Un métier", consigne: "Choisir un métier, chercher ce qu’il demande d’apprendre, et qui l’exerce autour de nous.", minutes: 45 },
  { titre: "Musique", consigne: "Écouter un morceau en entier, sans rien faire d’autre. Repérer la pulsation, les instruments, ce qui revient.", minutes: 45 },
  { titre: "Dessin d’observation", consigne: "Dessiner un objet réel en le regardant, pas de mémoire. Vingt minutes sur le même objet.", minutes: 45 },
  { titre: "Un projet à suivre", consigne: "Reprendre un projet commencé un autre mercredi et l’avancer d’un cran. Tout ne se finit pas en un jour.", minutes: 45 },
];

/** Les révisions de mathématiques, entre deux leçons neuves. */
const ENTRAINEMENT_MATHS: Rituel[] = [
  { titre: "Opérations posées", consigne: "Quatre additions, quatre soustractions, deux multiplications. Estimer avant, vérifier après.", minutes: 30 },
  { titre: "Problèmes du jour", consigne: "Trois problèmes sur le cahier. Pour chacun : ce qu’on cherche, ce qu’on sait, le calcul, la phrase de réponse.", minutes: 30 },
  { titre: "Reprendre la leçon de maths", consigne: "Des exercices neufs sur une leçon de maths déjà vue, sur le cahier cette fois.", minutes: 30 },
  { titre: "Géométrie : tracer", consigne: "Un programme de construction à suivre pas à pas, avec tes instruments de géométrie. On prend son temps.", minutes: 30 },
  { titre: "Mesurer pour de vrai", consigne: "Mesurer des objets de la maison, noter en deux unités différentes, comparer aux estimations faites avant.", minutes: 30 },
  { titre: "Le nombre du jour", consigne: "Un nombre au tableau. Le décomposer de cinq façons, l’encadrer, dire son nombre de centaines, le doubler.", minutes: 30 },
];

/** Les révisions de français. */
const ENTRAINEMENT_FRANCAIS: Rituel[] = [
  { titre: "Analyser des phrases", consigne: "Cinq phrases : souligner le sujet, entourer le verbe, encadrer les compléments. Dire lesquels se déplacent.", minutes: 25 },
  { titre: "Conjugaison", consigne: "Trois verbes, aux quatre temps connus, à toutes les personnes. Sur le cahier, sans modèle.", minutes: 25 },
  { titre: "Reprendre la leçon de français", consigne: "Reprendre une leçon de français déjà vue, sur le cahier, avec des phrases neuves.", minutes: 25 },
  { titre: "Les homophones", consigne: "Un texte à trous sur des mots qui se prononcent pareil. Justifier chaque choix par le test de remplacement.", minutes: 25 },
  { titre: "Vocabulaire", consigne: "Dix mots : chercher, quand il y en a, un synonyme, un contraire et un mot de la même famille.", minutes: 25 },
  { titre: "Le dictionnaire", consigne: "Chercher cinq mots rencontrés cette semaine. Relever la nature du mot et ses différents sens.", minutes: 25 },
];

/* ------------------------------------------------------------------ */
/* La répartition des leçons du programme                              */
/* ------------------------------------------------------------------ */

/** Le rang d'un jour dans l'année de travail. Sert à tout indexer. */
const RANG = (() => {
  const m = new Map<string, number>();
  joursDeTravail().forEach((j, i) => m.set(j, i));
  return m;
})();

/** Choisir dans une liste sans hasard : le même jour donne le même rituel. */
const tourner = <T,>(liste: T[], rang: number, decalage = 0) =>
  liste[(rang + decalage) % liste.length];

/**
 * Le rituel d'un jour, dans sa liste.
 *
 * Il rendait aussi un « rang dans la série », `indice / longueur`, qui servait
 * à choisir la fiche. C'était faux : un rituel n'est posé que les jours où
 * aucune leçon ne prend sa place, et le mercredi tourne sur d'autres indices.
 * La division ne comptait donc pas ses vraies apparitions, et les fiches —
 * écrites dans l'ordre d'une progression — tombaient dans le désordre : la
 * poésie 9 jamais, la 10 deux fois, le vocabulaire commencé à la série 3. Le
 * rang se compte maintenant pour de vrai, dans `trameDuJour`.
 */
function choisir(iso: string, liste: Rituel[], indice: number, rang?: number) {
  /* Sans rang : la rotation simple (le mercredi, qui tourne déjà lentement). */
  if (rang === undefined) return { rituel: liste[indice % liste.length] };

  const cle = `${iso}|${liste[0].titre}`;
  if (!construction) {
    const r = choixDeLAnnee().get(cle);
    return { rituel: r ?? liste[indice % liste.length] };
  }

  /* Pendant la construction de l'année, jour après jour : le rituel le moins
     donné parmi ceux en service — jamais celui de la veille s'il y en a un
     autre. Un rituel qui vient d'entrer en service rattrape donc les autres
     un jour sur deux, sans rafale ; et sur l'année, chacun revient à peu
     près autant de fois que ses fiches le prévoient. À égalité, l'ordre de
     rotation d'avant. */
  const n = disponibles(liste, rang);
  const donnes = (r: Rituel) => construction!.donnes.get(r.titre) ?? 0;
  /* Pondéré par la série : un rituel qui a dix-huit fiches revient plus
     souvent qu'un rituel qui en a quatre. Les séries ont été écrites pour
     l'année ; sans ce poids, l'équilibre en laissait une cinquantaine jamais
     données et en redonnait d'autres. */
  const avance = (r: Rituel) => donnes(r) / Math.max(1, fichesDuRituel(r.titre).length);
  const hier = construction.veille.get(liste[0].titre);
  const neuf = construction.neuf?.jour === iso ? construction.neuf : null;
  const candidats = Array.from({ length: n }, (_, i) => liste[(indice + i) % n]).filter((r) =>
    enService(r, iso),
  );
  const meilleurDe = (liste: Rituel[]) =>
    liste.reduce<Rituel | null>((m, r) => (!m || avance(r) < avance(m) ? r : m), null);
  /* D'abord sans le rituel de la veille, et sans nouveauté si la journée en a
     déjà assez ; puis on relâche, dans cet ordre, plutôt que de ne rien
     poser. Refaire le rituel de la dernière fois vaut mieux qu'une nouveauté
     de trop : c'est une habitude qui s'installe. */
  const pasHier = (r: Rituel) => !(n > 1 && r.titre === hier);
  /* Sauf si tout ce qui est connu a épuisé ses fiches : redonner la même
     dictée ou le même sujet d'écrit pour éviter une nouveauté, c'est pire. */
  const connus = candidats.filter((r) => donnes(r) > 0);
  const epuises =
    connus.length > 0 && connus.every((r) => donnes(r) >= fichesDuRituel(r.titre).length);
  const dansLeBudget = (r: Rituel) => epuises || !(neuf && neuf.reste <= 0 && donnes(r) === 0);
  const retenu =
    meilleurDe(candidats.filter((r) => pasHier(r) && dansLeBudget(r))) ??
    meilleurDe(candidats.filter(dansLeBudget)) ??
    meilleurDe(candidats.filter(pasHier)) ??
    meilleurDe(candidats) ??
    liste[indice % n];
  if (neuf && donnes(retenu) === 0) neuf.reste--;
  construction.donnes.set(retenu.titre, donnes(retenu) + 1);
  construction.veille.set(liste[0].titre, retenu.titre);
  construction.choix.set(cle, retenu);
  return { rituel: retenu };
}

/**
 * Le rituel de chaque jour de l'année, calculé une fois, dans l'ordre des
 * jours. Une date donne toujours la même journée : le choix dépend de ce qui
 * précède, donc il se calcule d'un bout à l'autre et se garde.
 */
let CHOIX: Map<string, Rituel> | null = null;
let construction: {
  choix: Map<string, Rituel>;
  donnes: Map<string, number>;
  veille: Map<string, string>;
  /** Combien de rituels jamais donnés la journée en construction peut encore accueillir. */
  neuf: { jour: string; reste: number } | null;
} | null = null;

function choixDeLAnnee(): Map<string, Rituel> {
  if (CHOIX) return CHOIX;
  construction = { choix: new Map(), donnes: new Map(), veille: new Map(), neuf: null };
  try {
    for (const j of joursDeTravail()) trameBrute(j);
    CHOIX = construction.choix;
  } finally {
    construction = null;
  }
  return CHOIX!;
}

/**
 * Combien de rituels d'une liste sont déjà en service, le rang-ième jour.
 *
 * Deux au départ, un de plus chaque semaine. Avant, chaque liste tournait sur
 * tous ses rituels dès le premier jour : la semaine du 21 septembre 2026, les
 * trente et une étapes étaient toutes une première fois — six ou sept façons
 * de travailler inconnues par jour, pour un enfant que la nouveauté inquiète
 * (critique du 16 septembre 2026). On installe maintenant quelques habitudes,
 * et on en ajoute une à la fois. Sans `rang`, la liste entière : c'est le
 * mercredi, qui tourne déjà lentement.
 */
const NOUVEAU_RITUEL_TOUS_LES = 5;
function disponibles(liste: Rituel[], rang?: number) {
  if (rang === undefined) return liste.length;
  return Math.min(liste.length, 2 + Math.floor(rang / NOUVEAU_RITUEL_TOUS_LES));
}

/**
 * Au plus deux nouveautés par jour, leçons comprises, et un seul rituel neuf.
 *
 * `disponibles` faisait entrer un rituel de plus dans les sept listes **le
 * même jour** : la semaine allait mieux, pas la journée. Le 24 septembre 2026
 * posait sept étapes sur sept jamais vues, le 1er octobre six (seconde
 * critique du 16 septembre). Un rituel neuf attend donc un jour qui a de la
 * place. Les leçons, elles, ne se déplacent pas : un jour à trois leçons
 * neuves n'accueille aucun rituel neuf, mais garde ses leçons.
 *
 * Seulement à partir du 21 septembre : les journées d'avant sont en base, et
 * leurs fiches portent déjà leur rang.
 */
const NOUVEAUTES_PAR_JOUR = 2;
const RITUELS_NEUFS_PAR_JOUR = 1;
const FREIN_DES_NOUVEAUTES = "2026-09-21";

/**
 * Un rituel qui suppose des leçons n'entre pas en service avant elles.
 *
 * Les fiches de « Conjugaison » demandent quatre temps dès la première ; la
 * nouvelle trame du 16 septembre l'avait avancée au 29 septembre, six semaines
 * avant l'imparfait, le futur et le passé composé. Pour cet enfant, c'était
 * un échec écrit d'avance.
 */
const APRES_LA_LECON: Record<string, string> = {
  Conjugaison: "f-p2-passe-compose",
};

function enService(r: Rituel, iso: string) {
  const code = APRES_LA_LECON[r.titre];
  if (!code) return true;
  const premiere = premiereFoisDeLaLecon(code);
  return premiere !== null && iso > premiere;
}

/** Le jour où une leçon est donnée pour la première fois, d'après les plans. */
const PREMIERES_FOIS = new Map<string, string | null>();
function premiereFoisDeLaLecon(code: string): string | null {
  if (!PREMIERES_FOIS.has(code)) {
    let premiere: string | null = null;
    for (const plan of PLANS.values())
      for (const [jour, v] of plan)
        if (v.lecon.code === code && !v.reprise && (premiere === null || jour < premiere))
          premiere = jour;
    PREMIERES_FOIS.set(code, premiere);
  }
  return PREMIERES_FOIS.get(code)!;
}

/** La matière de découverte du jour, en rotation sur les jours de travail. */
const DECOUVERTE: MatiereId[] = [
  "sciences",
  "histoire",
  "geographie",
  "sciences",
  "anglais",
  "histoire",
  "geographie",
  "emc",
  "sciences",
  "anglais",
  "histoire",
  "arts",
];

/**
 * Quelles matières ont un créneau de leçon un jour donné.
 *
 * Calculé **sans regarder les leçons**, et c'est le point : la répartition
 * s'appuie dessus pour ne placer une leçon que là où sa matière sera
 * effectivement demandée.
 *
 * La première version répartissait chaque matière sur tous les jours de la
 * période. Résultat : une leçon de géographie tombait un jour où le créneau
 * de découverte demandait des sciences, et elle n'était jamais lue. Trente-
 * trois leçons sur cent treize ne sortaient jamais — en silence.
 */
function matieresDuJour(iso: string): MatiereId[] {
  const rang = RANG.get(iso);
  if (rang === undefined) return [];
  if (jourDeLaSemaine(iso) === 3) return [tourner(DECOUVERTE, Math.floor(rang / 4))];
  return ["maths", "francais", tourner(DECOUVERTE, rang)];
}

/**
 * Les leçons d'une matière pour une période, étalées sur les jours.
 *
 * Chaque leçon est donnée une première fois, puis **reprise** une seconde fois
 * une dizaine de jours plus tard. Ce n'est pas du remplissage : revoir une
 * notion après un délai est ce qui la fixe, et la seconde série d'exercices se
 * lit séparément côté parents — on voit donc ce qui a tenu.
 */
function repartir(matiere: MatiereId, p: Periode, jours: string[]) {
  const lot = lecons.filter((l) => l.matiere === matiere && l.periode === p);
  const plan = new Map<string, { lecon: Lecon; reprise: boolean }>();
  if (lot.length === 0 || jours.length === 0) return plan;

  /* Placer au jour visé, ou au premier jour libre qui suit.
     La première version abandonnait la leçon quand la date était déjà prise,
     et perdait ainsi trente-trois leçons sur cent treize — sans rien dire.
     Une leçon jamais donnée est exactement ce qu'une trame doit empêcher, donc
     on décale au lieu de renoncer. */
  const poser = (vise: number, lecon: Lecon, reprise: boolean) => {
    for (let k = 0; k < jours.length; k++) {
      const j = jours[(Math.max(0, vise) + k) % jours.length];
      if (!plan.has(j)) {
        plan.set(j, { lecon, reprise });
        return;
      }
    }
  };

  /* Premier passage : réparti régulièrement sur les six premiers dixièmes de
     la période, pour laisser de la place aux reprises ensuite. */
  const fin = Math.max(1, Math.floor(jours.length * 0.6));
  lot.forEach((lecon, i) => poser(Math.floor((i * fin) / lot.length), lecon, false));

  /* Second passage : les mêmes, dans le même ordre, sur la fin de la période.
     Revoir une notion après un délai est ce qui la fixe, et la seconde série
     d'exercices se lit séparément côté parents. */
  lot.forEach((lecon, i) =>
    poser(fin + Math.floor((i * (jours.length - fin)) / lot.length), lecon, true),
  );

  return plan;
}

/** Les plans par matière, calculés une fois et gardés. */
const PLANS = (() => {
  const tous = joursDeTravail();
  const parMatiere = new Map<string, Map<string, { lecon: Lecon; reprise: boolean }>>();
  const matieresProgramme: MatiereId[] = [
    "maths",
    "francais",
    "sciences",
    "histoire",
    "geographie",
    "anglais",
    "emc",
    "arts",
  ];
  for (const m of matieresProgramme) {
    const fusion = new Map<string, { lecon: Lecon; reprise: boolean }>();
    for (const p of [1, 2, 3, 4, 5] as const) {
      /* Seuls les jours où cette matière a un créneau. */
      const jours = tous.filter(
        (j) => periodeDe(j) === p && matieresDuJour(j).includes(m),
      );
      for (const [j, v] of repartir(m, p, jours)) fusion.set(j, v);
    }
    parMatiere.set(m, fusion);
  }
  return parMatiere;
})();


/* ------------------------------------------------------------------ */
/* Une journée                                                         */
/* ------------------------------------------------------------------ */

export type Creneau = {
  /** Le code d'une leçon du programme, ou rien pour une séance écrite. */
  lecon?: string;
  /**
   * Le code de la fiche qui outille l'adulte, pour les séances qui ne sont pas
   * à l'écran. C'est là que vivent les quinze mots à dicter et les dix
   * questions à poser. **Réservé aux adultes** : une fiche porte ses corrigés.
   */
  fiche?: string;
  matiere: MatiereId;
  titre: string;
  consigne: string;
  minutes: number;
  /**
   * Ce qui reste une journée allégée.
   *
   * Alléger ne veut pas dire couper au hasard : ça veut dire garder ce qui
   * perd le plus à être sauté. Le calcul mental, les mathématiques et le
   * français sont quotidiens et cumulatifs — un jour manqué se rattrape mal.
   * La découverte, la production d'écrit et le dehors se déplacent sans
   * dommage. C'est donc ceux-là qui partent.
   */
  socle: boolean;
};

export type NatureJour =
  | "classe"
  | "mercredi"
  | "test"
  | "week-end"
  | "vacances"
  | "ferie"
  | "avant-le-debut"
  | "hors-annee";

export type JourneeTramee = {
  jour: string;
  nature: NatureJour;
  /** Le nom des vacances ou du jour férié, quand c'en est un. */
  pourquoi?: string;
  periode: Periode;
  creneaux: Creneau[];
  minutes: number;
};

/** Le ton d'une journée, tel qu'un adulte le choisit. */
export type Ton = "normale" | "allegee" | "repos";

/**
 * Ce que le ton fait à une journée.
 *
 * `normale` : tout. `allegee` : le socle seulement — le calcul mental, les
 * mathématiques, le français, l'écriture. `repos` : rien.
 *
 * Ce n'est pas une réduction cosmétique : une journée allégée passe d'environ
 * trois heures à une heure quarante, et il reste ce qui perd le plus à être
 * sauté. L'enfant ne voit jamais le mot « allégée » — règle n°7, ça se lirait
 * comme un manque. Il voit simplement une journée plus courte.
 */
export function selonLeTon(j: JourneeTramee, ton: Ton): JourneeTramee {
  if (ton === "normale") return j;
  const creneaux = ton === "repos" ? [] : j.creneaux.filter((c) => c.socle);
  return { ...j, creneaux, minutes: creneaux.reduce((t, c) => t + c.minutes, 0) };
}


/**
 * Ce que l'enfant fait un jour donné.
 *
 * Toujours le même résultat pour la même date : un plan qui changerait d'un
 * affichage à l'autre serait impossible à préparer et impossible à corriger.
 */
/**
 * La journée d'un jour, **et la fiche de chacun de ses rituels**.
 *
 * Deux temps. `trameBrute` pose les créneaux, sans fiche. Puis la fiche d'un
 * rituel est celle de son rang réel dans l'année : la n-ième fois qu'il tombe,
 * en parcourant les jours dans l'ordre depuis le jour du test compris, il
 * reçoit la n-ième fiche de sa série. C'est exactement ce que `joursDuRituel`
 * compte pour afficher la date d'une fiche, et `test/fiches.test.ts` vérifie
 * que les deux disent la même chose, date par date.
 *
 * Le code seul traverse, jamais la fiche : elle porte les corrigés.
 */
export function trameDuJour(iso: string): JourneeTramee {
  const brute = trameBrute(iso);
  if (brute.creneaux.length === 0) return brute;
  const rangs = rangsDesRituels();
  return {
    ...brute,
    creneaux: brute.creneaux.map((c) =>
      c.lecon ? c : { ...c, fiche: ficheDe(c.titre, rangs.get(`${iso}|${c.titre}`) ?? 0)?.code },
    ),
  };
}

/** Pour chaque jour et chaque rituel : combien de fois ce rituel est déjà tombé. */
let RANGS: Map<string, number> | null = null;
function rangsDesRituels(): Map<string, number> {
  if (RANGS) return RANGS;
  const deja = new Map<string, number>();
  const rangs = new Map<string, number>();
  for (const jour of joursAvecTrame())
    for (const c of trameBrute(jour).creneaux) {
      if (c.lecon) continue;
      const n = deja.get(c.titre) ?? 0;
      rangs.set(`${jour}|${c.titre}`, n);
      deja.set(c.titre, n + 1);
    }
  RANGS = rangs;
  return rangs;
}

function trameBrute(iso: string): JourneeTramee {
  const periode = periodeDe(iso);
  const vide = (nature: NatureJour, pourquoi?: string): JourneeTramee => ({
    jour: iso,
    nature,
    pourquoi,
    periode,
    creneaux: [],
    minutes: 0,
  });

  if (iso === JOUR_DU_TEST) {
    return {
      jour: iso,
      nature: "test",
      periode,
      /* Les consignes sont lues par l'enfant, sur son écran : elles lui
         parlent à lui. La première version s'adressait aux parents — « il
         fait, vous lirez » — et c'est lui qui l'aurait lue, le premier jour. */
      creneaux: [
        {
          matiere: "maison",
          titre: "Le test du début d’année",
          consigne:
            "Reviens à ta journée, et clique en bas sur le bouton « Le test du début d’année ». Sept parties, une à la fois. Il n’y a rien à préparer : tu réponds, et quand tu ne sais pas, tu le dis.",
          minutes: 90,
          socle: true,
        },
        {
          matiere: "maison",
          titre: "Lecture libre",
          consigne:
            "Après le test, le livre que tu veux, sans compte à rendre. La journée s’arrête là.",
          minutes: 30,
          socle: false,
        },
      ],
      minutes: 120,
    };
  }

  if (iso < JOUR_DU_TEST) return vide("avant-le-debut");
  if (iso > DERNIER_JOUR) return vide("hors-annee");
  if (estWeekEnd(iso)) return vide("week-end");
  const v = vacancesDe(iso);
  if (v) return vide("vacances", v.nom);
  const f = ferieDe(iso);
  if (f) return vide("ferie", f);

  const rang = RANG.get(iso) ?? 0;
  const mercredi = jourDeLaSemaine(iso) === 3;
  const creneaux: Creneau[] = [];

  const ajouter = (
    m: MatiereId,
    choix: { rituel: Rituel },
    socle = false,
  ) =>
    creneaux.push({
      matiere: m,
      titre: choix.rituel.titre,
      consigne: choix.rituel.consigne,
      minutes: choix.rituel.minutes,
      socle,
    });

  const ajouterLecon = (m: MatiereId, socle = false) => {
    const prevu = PLANS.get(m)?.get(iso);
    if (!prevu) return false;
    creneaux.push({
      lecon: prevu.lecon.code,
      matiere: m,
      titre: prevu.reprise ? `${prevu.lecon.titre}${SUFFIXE_REPRISE}` : prevu.lecon.titre,
      consigne: consigneDeLecon(prevu.lecon, prevu.reprise),
      minutes: prevu.lecon.minutes,
      socle,
    });
    return true;
  };

  const demandees = matieresDuJour(iso);

  /* Ce que la journée peut accueillir de rituels neufs, une fois comptées
     ses leçons neuves. Voir `NOUVEAUTES_PAR_JOUR`. */
  if (construction) {
    const matieres = mercredi ? [demandees[0]] : ["maths", "francais", demandees[2]];
    const leconsNeuves = matieres.filter((m) => {
      const prevu = PLANS.get(m)?.get(iso);
      return prevu && !prevu.reprise;
    }).length;
    construction.neuf =
      iso >= FREIN_DES_NOUVEAUTES
        ? { jour: iso, reste: Math.min(RITUELS_NEUFS_PAR_JOUR, NOUVEAUTES_PAR_JOUR - leconsNeuves) }
        : null;
  }

  /* Le calcul mental ouvre toutes les journées, mercredi compris. Il fait
     partie du socle : quinze minutes quotidiennes valent mieux qu'une heure
     une fois par semaine, et c'est vrai de tout automatisme. */
  ajouter("maths", choisir(iso, CALCUL_MENTAL, rang, rang), true);

  if (mercredi) {
    /* Le mercredi : une leçon de découverte, et un temps qui n'est pas un
       cours. C'est le jour du parrain, et la trame le dit.

       La lecture de remplacement est du **français**, comme les autres jours,
       et pas « à la maison ». Elle l'était : le même « Lecture à voix haute »
       s'affichait en français seize fois dans l'année et à la maison deux
       fois, avec la même consigne et la même durée — seule la pastille de
       matière changeait, sans que rien ne le justifie. Ce qui n'est pas un
       cours le mercredi, c'est le temps d'après, pas la lecture. */
    if (!ajouterLecon(demandees[0])) ajouter("francais", choisir(iso, LECTURE, rang + 3, rang));
    ajouter("maison", choisir(iso, MERCREDI, Math.floor(rang / 4)));
  } else {
    if (!ajouterLecon("maths", true))
      ajouter("maths", choisir(iso, ENTRAINEMENT_MATHS, rang, rang), true);
    if (!ajouterLecon("francais", true))
      ajouter("francais", choisir(iso, ENTRAINEMENT_FRANCAIS, rang, rang), true);

    /* Dehors après les maths et le français, plus en dernier. Il enchaînait
       deux heures et demie assis avant de bouger (critique du 16 septembre
       2026) ; le corps sert ici de respiration au milieu de la journée. */
    ajouter("maison", choisir(iso, DEHORS, rang, rang));

    ajouter("francais", choisir(iso, ECRITURE, rang, rang), true);
    ajouter("francais", choisir(iso, LECTURE, rang, rang));

    /* La découverte du jour. Rien de prévu veut dire que la matière a fini
       ses leçons de la période : on écrit, plutôt que de tourner à vide. */
    if (!ajouterLecon(demandees[2])) ajouter("francais", choisir(iso, REDACTION, rang, rang));
  }

  return {
    jour: iso,
    nature: mercredi ? "mercredi" : "classe",
    periode,
    creneaux,
    minutes: creneaux.reduce((t, c) => t + c.minutes, 0),
  };
}

/**
 * La consigne d'une séance à leçon, qu'il lit sur son chemin.
 *
 * « Tes calculs sur ton brouillon » s'affichait avant une leçon d'histoire ou
 * d'EMC : une consigne qui ne correspond à rien fait chercher ce qu'on a mal
 * compris. Le brouillon ne se nomme que là où l'on calcule — et « les
 * sciences » ne suffisaient pas : « Les mélanges » ne demande aucun calcul
 * (seconde critique du 16 septembre). On regarde donc la leçon elle-même.
 */
export function consigneDeLecon(lecon: Lecon, reprise: boolean) {
  /* La reprise commence par les exercices : voir `Cours`. */
  const debut = reprise
    ? "On reprend : les exercices d’abord, le cours est là si tu en as besoin."
    : "Lis la leçon, puis fais les exercices.";
  return demandeDesCalculs(lecon)
    ? `${debut} Tes calculs sur ton brouillon, le résultat sur l’écran.`
    : debut;
}

/** La semaine d'une date, du lundi au dimanche. */
export function trameDeLaSemaine(iso: string): JourneeTramee[] {
  const lundi = lundiDe(iso);
  return [0, 1, 2, 3, 4, 5, 6].map((n) => trameDuJour(decaler(lundi, n)));
}

/** Toutes les semaines de l'année, pour la vue d'ensemble. */
export function semainesDeLAnnee() {
  const semaines: { lundi: string; periode: Periode; jours: JourneeTramee[] }[] = [];
  let lundi = lundiDe(JOUR_DU_TEST);
  while (lundi <= DERNIER_JOUR) {
    const jours = trameDeLaSemaine(lundi);
    semaines.push({ lundi, periode: periodeDe(lundi), jours });
    lundi = decaler(lundi, 7);
  }
  return semaines;
}

/** Le volume d'une année, pour pouvoir le vérifier au lieu de l'affirmer. */
export function bilanDeLAnnee() {
  const jours = joursDeTravail().map(trameDuJour);
  const minutes = jours.reduce((t, j) => t + j.minutes, 0);
  const avecLecon = jours.flatMap((j) => j.creneaux).filter((c) => c.lecon);
  return {
    joursTravailles: jours.length,
    heures: Math.round(minutes / 60),
    creneaux: jours.reduce((t, j) => t + j.creneaux.length, 0),
    creneauxAvecLecon: avecLecon.length,
    leconsDistinctes: new Set(avecLecon.map((c) => c.lecon)).size,
  };
}
