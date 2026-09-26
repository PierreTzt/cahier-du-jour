/**
 * Comment le texte d'une fiche devient ce qu'un adulte lit à l'écran.
 *
 * Les fiches sont écrites comme on écrit une fiche de préparation : un mot en
 * gras entre doubles astérisques (« **sombre**, adjectif »), des questions
 * numérotées à la main (« 1. Qui écrit la lettre ? »). Le premier rendu les
 * affichait tels quels. Sur la page, ça donnait des astérisques au milieu des
 * mots, et deux numéros par ligne — « 1. 1. Qui écrit la lettre ? » — parce que
 * la liste numérotait déjà chaque entrée. Mille cent entrées étaient
 * concernées, dont celles de la rédaction, déjà en ligne.
 *
 * Plutôt que de réécrire mille cent chaînes, on accepte ces deux conventions,
 * qui sont les bonnes pour écrire, et on les rend correctement. La décision
 * vit ici, sans JSX, pour qu'un test puisse la tenir.
 *
 * **Réservé aux écrans d'adulte**, comme les fiches elles-mêmes.
 */

export type Morceau = { texte: string; gras: boolean };

/**
 * « un **château** fort » → trois morceaux, le deuxième en gras.
 *
 * Une paire ouverte et jamais refermée n'est pas devinée : le texte reste tel
 * quel, astérisques compris, et `test/fiches.test.ts` signale la fiche. Mieux
 * vaut deux astérisques visibles qu'une moitié de page en gras.
 */
export function enMorceaux(texte: string): Morceau[] {
  const bouts = texte.split("**");
  if (bouts.length % 2 === 0) return [{ texte, gras: false }];
  return bouts
    .map((b, i) => ({ texte: b, gras: i % 2 === 1 }))
    .filter((m) => m.texte.length > 0);
}

/** Le texte sans ses marques, pour mesurer une longueur ou chercher un mot. */
export const sansMarques = (texte: string) => texte.split("**").join("");

/** Un numéro écrit à la main en tête d'entrée : « 3. », « 3) », « 12. ». */
const NUMERO = /^\s*(\d{1,2})[.)]\s+/;

/** Vrai si l'auteur a numéroté au moins une entrée lui-même. */
export const numeroteeALaMain = (materiel: string[]) => materiel.some((m) => NUMERO.test(m));

export type Ligne = {
  /** Le numéro à afficher en marge, ou `null` pour une entrée qui n'en porte pas. */
  numero: string | null;
  /** Le matériel, sans son numéro. */
  texte: string;
  /** La réponse en regard, sans numéro, ou chaîne vide. */
  reponse: string;
  /**
   * Une réponse qui est une phrase plutôt qu'un résultat. « 56 » tient en
   * marge, en gras ; « Synonyme : obscur. Contraire : clair. Famille :
   * assombrir » ne tient pas, et se lit sous le matériel, en texte courant.
   */
  reponseLongue: boolean;
};

/** Au-delà, une réponse n'est plus un résultat qu'on lit d'un coup d'œil. */
const REPONSE_COURTE = 24;

/**
 * Les lignes du matériel, avec leur réponse en regard quand il y en a.
 *
 * La numérotation suit une règle simple, parce qu'elle doit être prévisible :
 *
 *   - **aucune** entrée numérotée à la main — dix multiplications, quinze
 *     mots — on numérote tout, de 1 à n ;
 *   - **certaines** le sont — un texte en quatre paragraphes suivi de cinq
 *     questions numérotées de 1 à 5 — on garde les numéros de l'auteur, et
 *     les paragraphes n'en portent pas. Numéroter les paragraphes ferait
 *     commencer les questions à 5, et l'adulte lirait « question 5 » là où
 *     la fiche dit « question 1 ».
 *
 * Le corrigé ne s'aligne que s'il a exactement la longueur du matériel —
 * c'est la règle des fiches, vérifiée par leur test. Sinon, on ne montre
 * aucune réponse plutôt que des réponses décalées d'une ligne.
 */
export function lignesDeLaFiche(materiel: string[], corrige?: string[]): Ligne[] {
  const enRegard = corrige !== undefined && corrige.length === materiel.length;
  const numerotesALaMain = numeroteeALaMain(materiel);

  return materiel.map((m, i) => {
    const propre = m.match(NUMERO);
    const numero = propre ? propre[1] : numerotesALaMain ? null : String(i + 1);
    const texte = propre ? m.slice(propre[0].length) : m;

    const brute = enRegard ? corrige[i] : "";
    const reponse = brute.replace(NUMERO, "").trim();

    return {
      numero,
      texte,
      reponse,
      reponseLongue: sansMarques(reponse).length > REPONSE_COURTE,
    };
  });
}

/** Vrai quand la fiche a des réponses à montrer en regard du matériel. */
export const aDesReponses = (materiel: string[], corrige?: string[]) =>
  corrige !== undefined &&
  corrige.length === materiel.length &&
  corrige.some((c) => c.trim().length > 0);
