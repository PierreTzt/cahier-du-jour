/**
 * Comparer ce qu'il a répondu à ce qui était attendu.
 *
 * Une seule définition, pour le test de positionnement comme pour les
 * exercices du manuel. Elle vivait en deux exemplaires — `lib/reponses.ts` et
 * `lib/travail.ts` — qui avaient déjà commencé à diverger d'un caractère. Deux
 * règles de comparaison pour le même enfant, c'est deux relevés qui ne disent
 * pas la même chose de la même réponse.
 *
 * Tolérante sur la **forme** : « 1 420 » et « 1420 », « 2 h 45 » et « 2h45
 * min », « 215 min » et « 215 », « six » et « 6 », « des chevaux » et
 * « chevaux », « sommes » et « nous sommes » disent la même chose sur ce qu'il
 * sait. On cherche à savoir si la notion est là, pas si la copie est propre.
 *
 * Jamais sur le **fond** : dès que les deux côtés sont des nombres, on exige
 * la même valeur. La tolérance par suffixe est un piège ici — « 4 » se
 * termine comme « 34 » — et une réponse fausse serait présentée aux parents
 * comme juste, donc un trou réel déclaré acquis, ce qui est précisément
 * l'erreur qu'ils ne peuvent pas rattraper. Et sur du texte, on ne tolère
 * que ce qui précède le mot qui compte — un pronom sujet, un article — jamais
 * un morceau de mot : « angle » n'est pas « un triangle », « chat » n'est pas
 * « un vieux chat ».
 *
 * Ce que cette tolérance ne peut pas faire seule, et que l'appelant lui dit
 * par une `Exigence` — critique du 16 septembre 2026, trois tolérances qui
 * jouaient dans le mauvais sens :
 *
 *   - **une question à choix** se compare au choix exact. Les accents retirés,
 *     « a » valait « à » : au test, un mauvais choix sur les homophones était
 *     compté juste — un trou déclaré acquis ;
 *   - **« Écris en chiffres »** refuse les lettres : recopier « deux mille
 *     six » de l'énoncé n'est pas la compétence demandée ;
 *   - **quand l'accent porte la notion** (« j'ai mangé »), il n'est pas retiré.
 *
 * Et la virgule décimale n'est plus de la ponctuation : « 43 » valait « 4,3 ».
 * Reste hors de portée : distinguer « le vois » de « je le vois ».
 */

/** Ce que la question elle-même impose, au-delà de la règle commune. */
export type Exigence = {
  /** Une question à choix : le choix exact, rien d'autre. */
  choix?: boolean;
  /** « Écris en chiffres » : un nombre en lettres ne compte pas. */
  chiffres?: boolean;
  /** L'accent ou la cédille porte la notion : on ne les retire pas. */
  accents?: boolean;
};

/**
 * L'exigence d'une question du test ou d'un exercice, lue sur la question
 * elle-même : son type, son énoncé, et le drapeau `accents` quand il est posé.
 * Une seule lecture, pour que le relevé du test et celui des exercices ne
 * divergent pas.
 */
export function exigenceDe(x: { type: string; enonce: string; accents?: boolean }): Exigence {
  return {
    choix: x.type === "choix",
    /* « Écris en chiffres », « Écris avec des chiffres », « Comment s'écrit … avec
       des chiffres ? » — mais pas « le plus grand nombre de quatre chiffres ». */
    chiffres: /\b(en|avec des) chiffres\b/i.test(x.enonce),
    accents: x.accents === true,
  };
}

const minuscules = (s: string) =>
  s
    .toLowerCase()
    /* La ligature ne se décompose pas : « soeur », ce qu'il tape, doit
       valoir « sœur ». */
    .replace(/œ/g, "oe")
    .replace(/æ/g, "ae")
    .normalize("NFC");

const sansAccents = (s: string) =>
  minuscules(s).normalize("NFD").replace(/[̀-ͯ]/g, "");

/* La virgule décimale, gardée sous une marque que la ponctuation ne retire
   pas. « 4.3 » et « 4,3 » s'écrivent pareil. */
const DECIMALE = "·";

/**
 * Les mots d'une réponse, une fois la forme retirée.
 *
 * Les durées sont ramenées à « 3h45 » avant tout : « 3 heures 45 »,
 * « 3 h 45 min », « 3h45mn » sont la même réponse à « combien de temps ? ».
 */
function mots(s: string, accents = false, liste = false): string[] {
  const texte = accents ? minuscules(s) : sansAccents(s);
  /* Une liste attendue (« 9, 18, 27, 36 ») : la virgule sépare, même tapée
     sans espace. Sans ça, « 9,18,27,36 » devenait un seul nombre décimal. */
  return (liste ? texte : texte.replace(/(\d)[.,](\d)/g, `$1${DECIMALE}$2`))
    /* « 3:45 », comme sur une montre. */
    .replace(/\b(\d{1,2}):(\d{2})\b/g, "$1h$2")
    /* « 3 heures et 45 minutes », comme on le dit. */
    .replace(/(\d)\s*(?:heures?|h)\s*(?:et\s+)?(\d+)\s*(?:min(?:utes?)?|mn)?\b/g, "$1h$2")
    .replace(/(\d)\s*heures?\b/g, "$1h")
    .replace(/[.,;:!?'’"«»()\-€°]/g, " ")
    .split(/\s+/)
    .filter(Boolean);
}

const estNombre = (s: string) => /^\d+(?:·\d+)?$/.test(s);

/**
 * Deux écritures d'un nombre : la même valeur. « 4·30 » vaut « 4·3 » ; mais
 * « 43 » ne vaut pas « 4·3 », et un entier ne vaut un décimal que si ce
 * décimal ne porte que des zéros (« 4·0 »).
 */
function memeNombre(x: string, y: string) {
  const decX = x.includes(DECIMALE);
  const decY = y.includes(DECIMALE);
  if (!decX && !decY) return x === y;
  const valeur = (n: string) => Number(n.replace(DECIMALE, "."));
  const zeros = (n: string) => /·0+$/.test(n);
  if (decX !== decY && !zeros(decX ? x : y)) return false;
  return valeur(x) === valeur(y);
}

/* ------------------------------------------------------------------ */
/* Les nombres écrits en lettres                                       */
/* ------------------------------------------------------------------ */

/* « six » pour 6, « vingt-quatre » pour 24, « quatre-vingt-dix » pour 90 :
   à neuf ans on écrit encore souvent un petit nombre en lettres, et le
   déclarer faux ferait lire « à travailler » sur une notion acquise. */
const PETITS: Record<string, number> = {
  zero: 0, un: 1, une: 1, deux: 2, trois: 3, quatre: 4, cinq: 5, six: 6, sept: 7,
  huit: 8, neuf: 9, dix: 10, onze: 11, douze: 12, treize: 13, quatorze: 14,
  quinze: 15, seize: 16,
};
const DIZAINES: Record<string, number> = {
  vingt: 20, vingts: 20, trente: 30, quarante: 40, cinquante: 50, soixante: 60,
};

/** La valeur d'une suite de mots qui est un nombre en lettres, sinon `null`. */
function nombreEnLettres(m: string[]): number | null {
  if (m.length === 0) return null;
  let total = 0;
  let courant = 0;
  let precedent: string | null = null;
  for (const mot of m) {
    if (mot === "et") {
      precedent = mot;
      continue;
    }
    if (mot in PETITS) courant += PETITS[mot];
    else if (mot in DIZAINES) {
      /* « quatre-vingt » n'est pas 4 + 20. */
      if (precedent === "quatre" && DIZAINES[mot] === 20) courant += 80 - 4;
      else courant += DIZAINES[mot];
    } else if (mot === "cent" || mot === "cents") courant = (courant || 1) * 100;
    else if (mot === "mille") {
      total += (courant || 1) * 1000;
      courant = 0;
    } else return null;
    precedent = mot;
  }
  return total + courant;
}

/* ------------------------------------------------------------------ */
/* Le texte                                                            */
/* ------------------------------------------------------------------ */

/* Ce qui peut précéder le mot qui compte sans changer la réponse : un
   pronom sujet (« sommes » pour « nous sommes »), puis des articles (« le
   triangle » pour « un triangle », « chevaux » pour « des chevaux »). */
const PRONOMS = new Set(["je", "j", "tu", "il", "elle", "on", "nous", "vous", "ils", "elles", "ce", "c"]);
const ARTICLES = new Set(["le", "la", "les", "l", "un", "une", "des", "du", "de", "d"]);

function noyau(m: string[]): string {
  let i = 0;
  if (m.length > 1 && PRONOMS.has(m[0])) i = 1;
  while (i < m.length - 1 && ARTICLES.has(m[i])) i++;
  return m.slice(i).join(" ");
}

/* L'article peut s'omettre, pas se tromper. « le triangle » pour « un
   triangle » dit la même chose ; « un chevaux » pour « des chevaux », ou « un
   lectrice » pour « une lectrice », c'est précisément l'accord que la
   question mesure — critique du 16 septembre au soir. On ne compare que ce
   que l'article dit sans ambiguïté : le nombre, et le genre quand il le
   porte. */
const SINGULIER = new Set(["le", "la", "l", "un", "une", "du"]);
const PLURIEL = new Set(["les", "des"]);
const MASCULIN = new Set(["le", "un", "du"]);
const FEMININ = new Set(["la", "une"]);

function premierArticle(m: string[]): string | null {
  const i = m.length > 1 && PRONOMS.has(m[0]) ? 1 : 0;
  return i < m.length - 1 && ARTICLES.has(m[i]) ? m[i] : null;
}

function articlesCompatibles(a: string[], b: string[]) {
  /* Même règle pour le pronom sujet : omis, oui (« sommes ») ; changé, non
     (« tu lui parle » pour « je lui parle »). */
  if (a.length > 1 && b.length > 1 && PRONOMS.has(a[0]) && PRONOMS.has(b[0]) && a[0] !== b[0])
    return false;
  const x = premierArticle(a);
  const y = premierArticle(b);
  if (!x || !y) return true;
  const oppose = (p: Set<string>, q: Set<string>) =>
    (p.has(x) && q.has(y)) || (q.has(x) && p.has(y));
  return !oppose(SINGULIER, PLURIEL) && !oppose(MASCULIN, FEMININ);
}

/* Les mots qui font partie d'un nombre en lettres : on ne les retire jamais
   de la fin d'une réponse. « six continents » vaut 6 ; « soixante-dix » ne
   vaut pas 60, ni « trois cents » 3. */
const MOT_NOMBRE = (mot: string) =>
  mot in PETITS || mot in DIZAINES || mot === "cent" || mot === "cents" || mot === "mille" || mot === "et";

/* ------------------------------------------------------------------ */

/**
 * « Il a répondu ce qu'on attendait. »
 *
 * Dans l'ordre : égalité une fois la forme retirée ; puis, si l'attendu est
 * un nombre, la même valeur suivie d'une unité (« 215 min », « 100
 * centimètres », « 15 cm² ») ou écrite en lettres (« six ») ; puis, sur du
 * texte, l'égalité une fois retirés un pronom sujet et les articles en tête,
 * des deux côtés — mot à mot, jamais au milieu d'un mot.
 */
export function commeAttendu(
  donne: string,
  attendu: string,
  exigence: Exigence = {},
): boolean {
  /* Un choix se compare au choix. La valeur envoyée est le texte même du
     bouton : seules la casse et la forme de l'apostrophe peuvent différer. */
  if (exigence.choix) {
    const net = (s: string) =>
      minuscules(s).replace(/[’‘]/g, "'").replace(/\s+/g, " ").trim();
    return net(donne) === net(attendu);
  }

  const liste = /\d\s*,\s+\d.*,\s+\d/.test(attendu);
  const a = mots(donne, exigence.accents, liste);
  const b = mots(attendu, exigence.accents, liste);
  if (a.length === 0 || b.length === 0) return false;
  /* Une liste se compare élément par élément : collés, « 91, 82, 73, 6 »
     s'écrivait comme « 9, 18, 27, 36 ». */
  if (liste) return a.join(" ") === b.join(" ");

  const ca = a.join("");
  const cb = b.join("");
  if (estNombre(ca) && estNombre(cb)) return memeNombre(ca, cb);
  if (ca === cb) return true;

  if (estNombre(cb)) {
    /* Le nombre, écrit en chiffres et suivi de son unité : « 215 min ». */
    const avecUnite = ca.match(/^(\d+(?:·\d+)?)([a-z²³]{1,15})$/);
    if (avecUnite) return memeNombre(avecUnite[1], cb);
    /* « Écris en chiffres » : des lettres, c'est l'énoncé recopié. */
    if (exigence.chiffres) return false;
    /* Le nombre en lettres, seul — « six » — ou suivi de ce que l'énoncé
       demandait de compter : « six continents », « trois ans ». Sans ce
       dernier cas, un enfant qui répond exactement ce qu'on lui demande est
       compté faux, et ses parents lisent « à travailler » sur une notion
       acquise ; c'est un vérificateur du manuel qui l'a essayé et trouvé. */
    const bouts = MOT_NOMBRE(a[a.length - 1]) ? [a] : [a, a.slice(0, -1)];
    for (const bout of bouts) {
      const n = nombreEnLettres(bout);
      if (n !== null && String(n) === cb) return true;
    }
    return false;
  }
  if (estNombre(ca)) return false;

  return articlesCompatibles(a, b) && noyau(a) === noyau(b);
}
