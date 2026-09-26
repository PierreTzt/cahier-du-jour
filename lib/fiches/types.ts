/**
 * Ce dont une fiche est faite.
 *
 * Une **fiche** est à un rituel ce qu'une leçon est à une séance d'écran :
 * son contenu. Le manuel porte les 222 séances que l'enfant fait seul devant
 * l'écran ; les 785 autres sont menées par un adulte, et jusqu'ici elles ne
 * portaient qu'un titre et une consigne. « Quinze mots de la liste en cours »
 * revenait seize fois dans l'année, et cette liste n'existait nulle part :
 * c'est un parent qui devait l'inventer, un mardi matin, pendant dix mois.
 *
 * Une fiche donne donc **le matériel** — les mots à dicter, les questions à
 * poser, le texte à lire — et **le corrigé** quand il y en a un. Elle ne
 * s'adresse qu'aux adultes, et c'est une règle stricte : elle contient les
 * réponses. `test/portes.test.ts` le vérifie comme pour le manuel.
 *
 * Ce qu'une fiche n'est pas : une leçon à l'écran. Ces séances-là se font à
 * l'ardoise, sur le cahier, à voix haute ou dehors, et c'est très bien ainsi.
 * La fiche outille l'adulte, elle ne déplace pas la séance sur un écran.
 */

/** Les cinq périodes de l'année scolaire. Une fiche n'est pas datée : elle
 *  tombe où la trame la place, et la progression tient à son rang. */
export type Fiche = {
  /** Stable : c'est la clé de la fiche à l'écran. Ne jamais le réutiliser. */
  code: string;
  /**
   * Le rituel auquel elle appartient, **exactement** le titre employé dans
   * `lib/trame.ts`. C'est par lui que la trame retrouve ses fiches, et un
   * test vérifie que chaque rituel de l'année en a au moins une.
   */
  rituel: string;
  /** Ce que l'adulte lit en tête : « Liste 3 · les mots en -tion ». */
  titre: string;
  /** Deux ou trois lignes : comment on s'y prend, concrètement. */
  mener: string[];
  /**
   * Le matériel. Les quinze mots, les dix questions, les trois phrases, le
   * texte. C'est ce qui manquait, et c'est le cœur de la fiche : après
   * l'avoir lue, un adulte ne doit plus avoir à chercher quoi que ce soit.
   */
  materiel: string[];
  /**
   * Les réponses, dans l'ordre du matériel, quand la séance en a. Une dictée
   * n'en a pas ; dix questions de calcul mental, si.
   */
  corrige?: string[];
  /**
   * Ce qu'on regarde pour savoir si c'est acquis. Jamais une note, jamais un
   * score : « s'il hésite sur les tables de 7 et 8, c'est là qu'il faut
   * revenir ». C'est ce qui rend la séance utile au lendemain.
   */
  regarder?: string;
};

/** Fabrique compacte : le contenu doit rester lisible dans un éditeur. */
export const f = (
  code: string,
  rituel: string,
  titre: string,
  mener: string[],
  materiel: string[],
  corrige?: string[],
  regarder?: string,
): Fiche => ({ code, rituel, titre, mener, materiel, corrige, regarder });
