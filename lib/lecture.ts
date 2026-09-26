/**
 * Ce que les parents lisent du test de positionnement.
 *
 * `lecturePourParents()` est la seule fonction du produit qui compare ce que
 * l'enfant a répondu à ce qui était attendu. Rien de ce qu'elle rend ne
 * traverse jamais vers un écran d'enfant — et le module lui-même n'est importé
 * que par des écrans d'adulte, ce que `test/portes.test.ts` vérifie en suivant
 * les imports de chaque page.
 */

import { blocs, tailleBloc } from "./positionnement";
import { commeAttendu, exigenceDe } from "./comparer";
import type { LigneReponse } from "./reponses";

/**
 * L'échelle du bilan de fin de cycle du livret scolaire unique, à quatre
 * crans : maîtrise insuffisante, fragile, satisfaisante, très bonne.
 *
 * Jusqu'au 16 septembre 2026, il fallait cinq sur cinq pour « sait », et
 * quatre sur cinq se lisait « fragile ». Les parents l'ont trouvé dur, à
 * raison : une réponse manquée sur cinq ne fait pas une notion fragile.
 * Choix du parrain parmi trois échelles : celle de l'école. C'est avec elle
 * qu'on remplit le bilan de fin de CE2 — l'étalon même de ce test —, et
 * « satisfaisante » y est le niveau visé pour tous les élèves.
 *
 * Ce qui ne change pas : la réponse manquée reste écrite en dessous, et c'est
 * elle qui dit quoi reprendre, pas le cran.
 */
export type EtatNotion =
  | "tres-bonne"
  | "satisfaisante"
  | "fragile"
  | "insuffisante"
  | "en-cours"
  | "pas-pose";

/** Les mots de l'échelle, tels que le livret scolaire les écrit. */
export const MAITRISE: Record<Exclude<EtatNotion, "en-cours" | "pas-pose">, string> = {
  "tres-bonne": "très bonne maîtrise",
  satisfaisante: "maîtrise satisfaisante",
  fragile: "maîtrise fragile",
  insuffisante: "maîtrise insuffisante",
};

export type Ecart = {
  enonce: string;
  donne: string;
  attendu: string;
  /** Il a vu la question et a dit qu'il ne savait pas. */
  saitPas: boolean;
};

export type LigneNotion = {
  code: string;
  libelle: string;
  /** L'attendu officiel de fin de CE2, pour que le parent situe la notion. */
  reference: string;
  etat: EtatNotion;
  justes: number;
  posees: number;
  total: number;
  /**
   * Combien de « je ne sais pas ». Ils comptent comme non justes sur
   * l'échelle, mais ne disent pas la même chose qu'une erreur : un parent
   * doit pouvoir les distinguer sans lire le détail (seconde critique du
   * 16 septembre).
   */
  saitPas: number;
  /** Le détail de ce qui n'est pas passé. C'est là que le travail se décide. */
  ecarts: Ecart[];
};

export type LectureBloc = {
  code: string;
  titre: string;
  fini: boolean;
  posees: number;
  total: number;
  /**
   * Les jours où ce bloc a été fait, et le moment de la première réponse.
   * Une partie faite le lendemain d'une leçon sur la même notion ne mesure
   * plus seulement ce qui était acquis en arrivant : le portrait doit le dire.
   */
  jours: string[];
  debut: string | null;
  notions: LigneNotion[];
};

/* Sur cinq questions : 5, 4, 3, puis 2 et moins. */
function etatDe(justes: number, posees: number, total: number): EtatNotion {
  if (posees === 0) return "pas-pose";
  if (posees < total) return "en-cours";
  if (justes === total) return "tres-bonne";
  if (justes === total - 1) return "satisfaisante";
  if (justes >= 3) return "fragile";
  return "insuffisante";
}

/**
 * Le portrait, bloc par bloc, notion par notion.
 *
 * Pas de note globale, pas de « niveau », pas de pourcentage d'ensemble : un
 * chiffre unique ne dit pas quoi faire lundi matin, et il crée une valeur à
 * comparer au trimestre suivant — donc une courbe, donc des creux à
 * expliquer. Ce qui est utilisable, c'est « les tables de multiplication,
 * trois sur cinq, voilà lesquelles ».
 *
 * « N'a pas tenté » est une information, pas un manque : il a lu la question
 * et a répondu qu'il ne savait pas, ce qui est exactement ce qu'on voulait
 * apprendre.
 */
export function lecturePourParents(reponses: LigneReponse[]): LectureBloc[] {
  const parEx = new Map(reponses.map((r) => [r.exercice, r]));

  return blocs
    .map((bloc) => {
      const jours = new Set<string>();
      let debut: string | null = null;
      const notions = bloc.notions.map((n) => {
        let justes = 0;
        let posees = 0;
        let saitPas = 0;
        const ecarts: Ecart[] = [];

        for (const q of n.questions) {
          const r = parEx.get(q.code);
          if (!r) continue;
          posees += 1;
          if (r.jour) jours.add(r.jour);
          if (r.saisi_le && (debut === null || r.saisi_le < debut)) debut = r.saisi_le;
          if (r.sait_pas) saitPas += 1;
          if (!r.sait_pas && commeAttendu(r.valeur, q.attendu, exigenceDe(q))) {
            justes += 1;
            continue;
          }
          ecarts.push({
            enonce: q.enonce,
            donne: r.valeur,
            attendu: q.attendu,
            saitPas: r.sait_pas,
          });
        }

        return {
          code: n.code,
          libelle: n.libelle,
          reference: n.reference,
          etat: etatDe(justes, posees, n.questions.length),
          justes,
          posees,
          total: n.questions.length,
          saitPas,
          ecarts,
        };
      });

      const posees = notions.reduce((t, n) => t + n.posees, 0);
      const total = tailleBloc(bloc);
      return {
        code: bloc.code,
        titre: bloc.titre,
        fini: posees === total,
        posees,
        total,
        jours: [...jours].sort(),
        debut,
        notions,
      };
    })
    /* Un bloc dont rien n'a été posé n'a rien à dire. */
    .filter((b) => b.posees > 0);
}

/** Où en est le test. Côté adulte seulement. */
export function avancement(reponses: LigneReponse[]) {
  const total = blocs.reduce((t, b) => t + tailleBloc(b), 0);
  const repondues = new Set(reponses.map((r) => r.exercice)).size;
  return { repondues, total };
}
