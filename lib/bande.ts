/**
 * La bande des douze semaines, et ce qu'on peut en dire.
 *
 * Lire douze lignes de journal ne montre pas un motif ; douze semaines côte à
 * côte, si. La grille met les jours de la semaine en lignes : ce qui revient le
 * même jour se voit comme une bande. C'est le seul endroit de l'application qui
 * produit une **hypothèse** plutôt qu'un compte rendu, et c'est exactement ce
 * qu'une équipe soignante peut exploiter — à condition que l'hypothèse ne soit
 * pas fabriquée.
 *
 * Dans le POC, le constat était écrit en dur, avec son explication : « c'est
 * le jour de la dictée ». Ici il est **calculé**, il reste vrai quand les
 * données changent, et il ne propose aucune explication : la page compte des
 * jours, elle ne sait pas ce qui s'y est passé. L'interprétation revient à ceux
 * qui suivent l'enfant, pas au fichier.
 *
 * Tout ce qui suit est pur — ni base, ni horloge, et de la trame rien que ses
 * types. Les journées, le jour de référence, aujourd'hui et la nature de
 * chaque date sont donnés par l'appelant, ce qui permet à `test/bande.test.ts`
 * de fabriquer n'importe quelle période et de vérifier chaque état un par un.
 *
 * Ces imports de types suffisent à `test/portes.test.ts` pour compter toute
 * page qui rend la bande parmi celles qui atteignent les fiches : il suit les
 * `from`, pas ce qu'on en tire. C'est prudent dans le bon sens — une telle
 * page doit de toute façon renvoyer l'enfant vers sa journée.
 */

import type { NatureJour } from "./trame";
import type { ClotureJour, EtatSeance, TonJour } from "./journee";

/* ------------------------------------------------------------------ */
/* Les dates                                                           */
/* ------------------------------------------------------------------ */

/* Des dates sans heure, calculées en UTC. `lib/trame.ts` passe par midi
   heure locale, ce qui tient tant que le serveur est en Europe ; ici on ne
   dépend pas du fuseau de la machine du tout — un conteneur réglé sur UTC ou
   un poste de développement à l'autre bout du monde rendent la même grille. */
const enDate = (iso: string) => new Date(`${iso}T00:00:00Z`);
const enIso = (d: Date) => d.toISOString().slice(0, 10);

export function decalerDe(iso: string, jours: number) {
  const d = enDate(iso);
  d.setUTCDate(d.getUTCDate() + jours);
  return enIso(d);
}

/** 0 pour lundi, 6 pour dimanche. */
const rangDansLaSemaine = (iso: string) => (enDate(iso).getUTCDay() + 6) % 7;

/**
 * Le lundi de la semaine d'une date. Un samedi ou un dimanche appartient à la
 * semaine qui se termine sur lui : c'est la semaine qu'on vient de vivre.
 */
export const lundiDeLaSemaine = (iso: string) => decalerDe(iso, -rangDansLaSemaine(iso));

/** `AAAA-MM-JJ`, et une date qui existe vraiment : un 31 février n'en est pas une. */
export function dateValide(s: unknown): s is string {
  if (typeof s !== "string" || !/^\d{4}-\d{2}-\d{2}$/.test(s)) return false;
  const d = enDate(s);
  return !Number.isNaN(d.getTime()) && enIso(d) === s;
}

const MOIS = ["janvier", "février", "mars", "avril", "mai", "juin", "juillet", "août", "septembre", "octobre", "novembre", "décembre"];
const MOIS_COURTS = ["janv.", "févr.", "mars", "avr.", "mai", "juin", "juil.", "août", "sept.", "oct.", "nov.", "déc."];
const JOURS = ["lundi", "mardi", "mercredi", "jeudi", "vendredi", "samedi", "dimanche"];

/** « vendredi 9 octobre », « jeudi 1er octobre 2026 » : le premier est ordinal. */
export function dateEnLettres(iso: string, { annee = false, jour = true } = {}) {
  const d = enDate(iso);
  const n = d.getUTCDate();
  const date = `${n === 1 ? "1er" : n} ${MOIS[d.getUTCMonth()]}${annee ? ` ${d.getUTCFullYear()}` : ""}`;
  return jour ? `${JOURS[rangDansLaSemaine(iso)]} ${date}` : date;
}

/** Ce que l'en-tête d'une colonne affiche : le numéro du lundi, et son mois abrégé. */
export function enTeteDeSemaine(lundi: string) {
  const d = enDate(lundi);
  return { numero: d.getUTCDate(), mois: MOIS_COURTS[d.getUTCMonth()] };
}

/* ------------------------------------------------------------------ */
/* Les états d'une case                                                */
/* ------------------------------------------------------------------ */

/** Du lundi au vendredi : les lignes de la grille. */
export const JOURS_OUVRES = ["lundi", "mardi", "mercredi", "jeudi", "vendredi"] as const;

/** Les colonnes de la grille. Douze semaines, soit à peu près une période et demie. */
export const SEMAINES = 12;

/**
 * Comment s'est passé un jour.
 *
 * Aucun de ces mots ne juge, et aucune couleur ne sera rouge : une journée
 * arrêtée est une information, pas une faute. « Sans séance posée » dit
 * qu'aucune journée n'a été écrite pour un jour de classe passé — ce qui n'est
 * pas la même chose qu'un jour de vacances, et c'est pour ça que la trame est
 * consultée : un jour de vacances n'est pas un jour manquant.
 */
export type EtatCase =
  | "menee"
  | "arretee"
  | "ouverte"
  | "en-cours"
  | "repos"
  | "conge"
  | "sans-seance"
  | "a-venir"
  | "hors-annee";

/** L'ordre de la légende : ce qui a été vécu d'abord, le reste ensuite. */
export const ETATS: EtatCase[] = [
  "menee",
  "arretee",
  "ouverte",
  "en-cours",
  "repos",
  "conge",
  "sans-seance",
  "a-venir",
  "hors-annee",
];

export const LIBELLES: Record<EtatCase, string> = {
  menee: "menée au bout",
  arretee: "arrêtée en cours",
  ouverte: "ouverte sans avoir été close",
  "en-cours": "en cours aujourd’hui",
  repos: "jour de repos",
  conge: "vacances ou jour férié",
  "sans-seance": "jour de classe sans séance posée",
  "a-venir": "à venir",
  /* Pas « scolaire » : du 1er au 15 septembre, l'année scolaire a commencé,
     celle du cahier non. */
  "hors-annee": "hors de l’année",
};

/** Ce que la trame dit d'une date, réduit à ce dont la grille a besoin. */
export type NatureDuJour = { nature: NatureJour; pourquoi?: string };

/** Ce qu'il faut savoir d'une journée en base pour colorer sa case. */
export type JourneeResumee = {
  jour: string;
  ton: TonJour;
  cloture: ClotureJour | null;
  /** Le nombre de séances posées ce jour-là, quel que soit leur état. */
  seances: number;
};

export type CaseDuJour = {
  jour: string;
  etat: EtatCase;
  /** Pour une case de congé : la nature exacte, et le nom des vacances ou du férié. */
  nature?: NatureJour;
  pourquoi?: string;
};

export type SemaineDeLaBande = { lundi: string; cases: CaseDuJour[] };

/**
 * L'état d'un jour.
 *
 * L'ordre des questions est l'essentiel, et chacun de ses choix est voulu :
 *
 *   1. **Ce qui s'est passé l'emporte sur ce qui était prévu.** Une journée
 *      close l'est, même un jour de vacances ou un jour passé en repos après
 *      coup. Le cas réel est celui-ci : il arrête le matin, et un parent passe
 *      la journée en repos à midi. Ce qui compte pour la bande, c'est l'arrêt ;
 *      le ton se lit dans le détail.
 *   2. **Le repos est une décision**, et il se dit comme telle — passé ou à
 *      venir. Sur un jour de repos, son écran ne propose ni de cocher ni
 *      d'arrêter : il ne peut donc pas y avoir de clôture après lui.
 *   3. **Des séances posées et jamais closes** : ouverte si le jour est passé,
 *      en cours si c'est aujourd'hui, à venir sinon. Poser la trame d'une
 *      semaine crée ses journées à l'avance ; ce n'est qu'une fois le jour
 *      passé que « pas close » devient une information.
 *   4. **Sans séance, c'est la trame qui parle.** Une journée vide en base ne
 *      prouve rien : ouvrir `/pilotage` sur une date la crée à la volée.
 */
export function etatDuJour(
  jour: string,
  aujourdhui: string,
  journee: JourneeResumee | undefined,
  nature: NatureDuJour,
): Omit<CaseDuJour, "jour"> {
  if (journee?.cloture === "terminee") return { etat: "menee" };
  if (journee?.cloture === "arretee") return { etat: "arretee" };
  if (journee?.ton === "repos") return { etat: "repos" };

  if (journee && journee.seances > 0) {
    if (jour < aujourdhui) return { etat: "ouverte" };
    return { etat: jour === aujourdhui ? "en-cours" : "a-venir" };
  }

  switch (nature.nature) {
    case "vacances":
    case "ferie":
    case "week-end":
      return { etat: "conge", nature: nature.nature, pourquoi: nature.pourquoi };
    case "avant-le-debut":
    case "hors-annee":
      return { etat: "hors-annee" };
    default:
      /* Classe, mercredi, jour du test : un jour où quelque chose était prévu. */
      return { etat: jour < aujourdhui ? "sans-seance" : "a-venir" };
  }
}

/**
 * L'état d'un jour en toutes lettres. Pour un congé, son nom plutôt que la
 * catégorie : « vacances de la Toussaint », « Armistice, pas de classe ».
 */
export function etatEnLettres(c: Omit<CaseDuJour, "jour">) {
  if (c.etat === "conge" && c.pourquoi) {
    /* « Vacances de la Toussaint » se lit mieux sans sa majuscule au milieu
       d'une phrase ; « Armistice » garde la sienne. */
    return c.nature === "vacances"
      ? c.pourquoi.charAt(0).toLowerCase() + c.pourquoi.slice(1)
      : `${c.pourquoi}, pas de classe`;
  }
  return LIBELLES[c.etat];
}

/** Ce qu'une case dit en toutes lettres, pour qui ne voit pas sa couleur. */
export function descriptionDeLaCase(c: CaseDuJour) {
  return `${dateEnLettres(c.jour, { annee: true })} : ${etatEnLettres(c)}`;
}

/** Le premier et le dernier jour couverts par la bande, week-ends compris. */
export function bornesDeLaBande(jusquau: string) {
  const dernier = lundiDeLaSemaine(jusquau);
  return { du: decalerDe(dernier, -(SEMAINES - 1) * 7), au: decalerDe(dernier, 6) };
}

/**
 * La grille : douze colonnes qui finissent sur la semaine du jour de
 * référence, cinq cases par colonne.
 *
 * Deux dates distinctes, et ce n'est pas une redondance : `jusquau` choisit la
 * période qu'on regarde, `aujourdhui` décide de ce qui est passé. Regarder
 * l'automne en février ne rend pas « à venir » les journées de novembre.
 */
export function construireBande({
  jusquau,
  aujourdhui,
  journees,
  natureDe,
}: {
  jusquau: string;
  aujourdhui: string;
  journees: JourneeResumee[];
  natureDe: (iso: string) => NatureDuJour;
}): SemaineDeLaBande[] {
  const parJour = new Map(journees.map((j) => [j.jour, j]));
  const { du } = bornesDeLaBande(jusquau);

  return Array.from({ length: SEMAINES }, (_, s) => {
    const lundi = decalerDe(du, s * 7);
    return {
      lundi,
      cases: JOURS_OUVRES.map((_, l) => {
        const jour = decalerDe(lundi, l);
        return { jour, ...etatDuJour(jour, aujourdhui, parJour.get(jour), natureDe(jour)) };
      }),
    };
  });
}

/* ------------------------------------------------------------------ */
/* La légende                                                          */
/* ------------------------------------------------------------------ */

/* Toujours affichés, même à zéro : « 0 arrêtée en cours » est une information,
   et c'est la question qu'on vient poser à cette page. Les autres états
   n'apparaissent que s'ils sont dans la grille — neuf lignes dont six à zéro
   noieraient les trois qui comptent. */
const TOUJOURS_DANS_LA_LEGENDE = new Set<EtatCase>(["menee", "arretee"]);

export type LigneDeLegende = { etat: EtatCase; libelle: string; n: number };

/**
 * La légende porte les chiffres : elle dit à elle seule tout ce que la grille
 * montre, pour qui ne peut pas la voir. Ses nombres additionnés font donc
 * exactement le nombre de cases, et `test/bande.test.ts` le vérifie.
 */
export function legendeDe(bande: SemaineDeLaBande[]): LigneDeLegende[] {
  const compte = new Map<EtatCase, number>();
  for (const s of bande) for (const c of s.cases) compte.set(c.etat, (compte.get(c.etat) ?? 0) + 1);
  return ETATS.map((etat) => ({ etat, libelle: LIBELLES[etat], n: compte.get(etat) ?? 0 })).filter(
    (l) => l.n > 0 || TOUJOURS_DANS_LA_LEGENDE.has(l.etat),
  );
}

/* ------------------------------------------------------------------ */
/* Le constat                                                          */
/* ------------------------------------------------------------------ */

/**
 * En dessous de cinq journées arrêtées, la page ne dit rien d'un jour de la
 * semaine. Avec quatre, trois tombent sur le même jour à peu près une fois
 * sur sept par pur hasard ; avec cinq, trois le même jour, près d'une fois
 * sur trois. Ce serait fabriquer une piste.
 */
export const ARRETEES_MINIMUM = 5;

/**
 * Le jour qui ressort doit compter au moins deux arrêts de plus que le
 * suivant. Six vendredis contre cinq jeudis, ce n'est pas « un jour » : ce
 * sont deux jours, et en nommer un seul orienterait la lecture. Dans ce cas
 * la page dit qu'aucun jour ne ressort **seul**, et donne la répartition.
 */
export const ECART_MINIMUM = 2;

/**
 * La probabilité, au plus, qu'un tel regroupement vienne du hasard : une
 * chance sur vingt.
 *
 * Une part fixe (« la moitié des arrêts ») ne tient pas aux deux bouts. Sur
 * six arrêts, trois le même jour arrivent par hasard une fois sur deux ; sur
 * vingt, neuf le même jour n'arrivent plus qu'une fois sur vingt, et une
 * moitié exigée les manquerait. Le seuil suit donc le nombre d'arrêts. Ce que ça donne
 * quand chaque jour de la semaine a été vécu autant que les autres :
 *
 *    arrêts sur la période    5   6   7   8   9  10  12  15  20
 *    le même jour, au moins   4   5   5   6   6   6   7   8   9
 *
 * « Le hasard », c'est chaque arrêt tombant sur un jour en proportion des
 * journées closes ce jour-là (menées au bout ou arrêtées). Si les vendredis
 * sont les seuls jours où une journée a été close, que les arrêts tombent
 * le vendredi n'apprend rien, et la page ne le signale pas. Le calcul est
 * binomial, multiplié par cinq parce qu'on regarde cinq jours à la fois :
 * c'est grossier et prudent, ce qui est le bon sens de l'erreur ici.
 */
export const HASARD_MAXIMUM = 0.05;

export type Constat = {
  /** Toutes les journées arrêtées de la grille. */
  arretees: number;
  /** Les arrêts, jour par jour, du lundi au vendredi. */
  parJour: number[];
  /**
   * `aucune` : pas une journée arrêtée. `trop-peu` : sous le minimum.
   * `aucun-jour` : assez d'arrêts, mais pas de jour qui en concentre nettement
   * une part. `un-jour` : le constat peut se dire, et `ligne` dit lequel.
   */
  genre: "aucune" | "trop-peu" | "aucun-jour" | "un-jour";
  ligne: number | null;
};

/** P(X ≥ k) pour X qui suit une loi binomiale de paramètres n et p. */
function auMoins(n: number, p: number, k: number) {
  let total = 0;
  let coefficient = 1; // C(n, 0)
  for (let i = 0; i <= n; i++) {
    if (i >= k) total += coefficient * p ** i * (1 - p) ** (n - i);
    coefficient = (coefficient * (n - i)) / (i + 1);
  }
  return Math.min(1, total);
}

export function constatDe(bande: SemaineDeLaBande[]): Constat {
  const parJour = JOURS_OUVRES.map(() => 0);
  const closes = JOURS_OUVRES.map(() => 0);
  for (const s of bande)
    s.cases.forEach((c, l) => {
      if (c.etat === "arretee") parJour[l]++;
      if (c.etat === "arretee" || c.etat === "menee") closes[l]++;
    });

  const arretees = parJour.reduce((a, b) => a + b, 0);
  const sans = (genre: Constat["genre"]): Constat => ({ arretees, parJour, genre, ligne: null });

  if (arretees === 0) return sans("aucune");
  if (arretees < ARRETEES_MINIMUM) return sans("trop-peu");

  const ligne = parJour.indexOf(Math.max(...parJour));
  const suivant = Math.max(...parJour.filter((_, l) => l !== ligne));
  if (parJour[ligne] - suivant < ECART_MINIMUM) return sans("aucun-jour");

  const part = closes[ligne] / closes.reduce((a, b) => a + b, 0);
  const hasard = JOURS_OUVRES.length * auMoins(arretees, part, parJour[ligne]);
  if (hasard >= HASARD_MAXIMUM) return sans("aucun-jour");

  return { arretees, parJour, genre: "un-jour", ligne };
}

/** La phrase du constat. Des nombres et un jour, jamais une explication. */
export function phraseDuConstat(c: Constat) {
  switch (c.genre) {
    case "aucune":
      return "Aucune journée arrêtée sur la période.";
    case "trop-peu":
      return c.arretees === 1
        ? "Une seule journée arrêtée sur la période : c’est trop peu pour qu’un jour de la semaine ressorte."
        : `${c.arretees} journées arrêtées sur la période : c’est trop peu pour qu’un jour de la semaine ressorte.`;
    case "aucun-jour":
      return `Sur les ${c.arretees} journées arrêtées de la période, aucun jour de la semaine ne ressort seul.`;
    case "un-jour":
      return `Sur les ${c.arretees} journées arrêtées de la période, ${c.parJour[c.ligne!]} sont tombées un ${JOURS_OUVRES[c.ligne!]}.`;
  }
}

/** « lundi 1, mardi 0, mercredi 0, jeudi 1, vendredi 5 » — la ligne que la grille montre. */
export function repartitionDesArrets(c: Constat) {
  return JOURS_OUVRES.map((j, l) => `${j} ${c.parJour[l]}`).join(", ");
}

/* ------------------------------------------------------------------ */
/* Le détail, jour par jour                                            */
/* ------------------------------------------------------------------ */

/** Ce qu'il faut d'une journée pour savoir s'il y a quelque chose à en raconter. */
export type JourneeARaconter = {
  jour: string;
  ton: TonJour;
  cloture: ClotureJour | null;
  note: string;
  seances: readonly { etat: EtatSeance }[];
  ressenti: unknown | null;
  mots: readonly unknown[];
};

/**
 * Une journée figure dans le détail s'il s'y est passé quelque chose : une
 * clôture, un ton choisi, une séance faite ou mise de côté, un ressenti, une
 * note, un mot. Une journée posée à l'avance et que personne n'a touchée
 * n'est pas un événement — la grille la montre déjà.
 *
 * Et rien d'après aujourd'hui : un mot écrit la veille pour demain se lira
 * demain, dans la journée où il aura été lu.
 */
export function aRaconter(j: JourneeARaconter, aujourdhui: string) {
  if (j.jour > aujourdhui) return false;
  return (
    j.cloture !== null ||
    j.ton !== "normale" ||
    j.note.trim() !== "" ||
    j.ressenti !== null ||
    j.mots.length > 0 ||
    j.seances.some((s) => s.etat !== "a-venir")
  );
}

/**
 * Les séances faites, et celles mises de côté.
 *
 * Sur une journée arrêtée, ce qui restait à venir compte comme mis de côté :
 * c'est la définition d'`aRedistribuer` dans `lib/journee.ts`, et son écran
 * le lui montre ainsi — quand il arrête, ce qui restait disparaît de sa vue.
 */
export function seancesDuDetail<S extends { etat: EtatSeance }>(
  seances: S[],
  cloture: ClotureJour | null,
) {
  return {
    faites: seances.filter((s) => s.etat === "faite"),
    deCote: seances.filter(
      (s) => s.etat === "reportee" || (cloture === "arretee" && s.etat === "a-venir"),
    ),
  };
}
