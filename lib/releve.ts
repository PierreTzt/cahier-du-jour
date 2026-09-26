/**
 * Ce que les parents lisent d'une séance du programme.
 *
 * Séparé de `lib/travail.ts` pour une raison de frontière, pas de rangement :
 * ce module importe le manuel entier, avec ses résultats. Un module que
 * l'écran de l'enfant a le droit d'importer ne doit pas contenir, même sans
 * l'appeler, de quoi comparer sa réponse à l'attendu. `test/portes.test.ts`
 * suit les imports de chaque page et s'appuie là-dessus.
 */

import { exercicesDeSeance, leconParCode, partieDeLExercice, type Lecon } from "./programme";
import { commeAttendu, exigenceDe } from "./comparer";
import type { LigneTravail } from "./travail";

export type LigneRelevee = {
  enonce: string;
  donne: string;
  attendu: string;
  saitPas: boolean;
  /**
   * La partie du cours qui explique l'exercice : ce qu'on reprend avec lui,
   * au morceau près. `numero` compte à partir de 1, comme l'ancre du manuel.
   */
  passage: { numero: number; titre: string | null } | null;
};

export type Releve = {
  lecon: Lecon;
  /** Exercices inscrits, sur le total de la leçon. */
  faits: number;
  total: number;
  /** Résultats conformes à l'attendu. Jamais montré à l'enfant. */
  justes: number;
  /** Le détail de ce qui n'est pas passé. C'est là que le travail se décide. */
  ecarts: LigneRelevee[];
};

/**
 * Le relevé d'une séance du programme.
 *
 * Pas de note, pas de pourcentage : « six sur huit, et voilà lesquels » se
 * traduit en quelque chose à faire demain. Un chiffre unique ne se traduit en
 * rien, et il crée une valeur à comparer la semaine suivante.
 */
export function releveDeSeance(
  leconCode: string,
  travail: LigneTravail[],
  /* Le titre de la séance : une reprise se relève sur sa seconde série. */
  titreSeance?: string,
): Releve | null {
  const lecon = leconParCode.get(leconCode);
  if (!lecon) return null;
  const parEx = new Map(travail.map((t) => [t.exercice, t]));

  /* La série que la séance sert aujourd'hui — sauf si le travail inscrit est
     celui de l'autre : une reprise faite avant que sa seconde série soit
     écrite porte les codes de la première, et ne se relevait plus du tout
     (seconde critique du 16 septembre). On relève la série où il a écrit. */
  const servie = exercicesDeSeance(lecon, titreSeance ?? lecon.titre);
  const autre = servie === lecon.exercices ? (lecon.reprise ?? []) : lecon.exercices;
  const dans = (s: typeof servie) => s.filter((ex) => parEx.has(ex.code)).length;
  const serie = dans(autre) > dans(servie) ? autre : servie;
  let faits = 0;
  let justes = 0;
  const ecarts: LigneRelevee[] = [];

  for (const ex of serie) {
    const t = parEx.get(ex.code);
    if (!t) continue;
    faits += 1;
    if (!t.sait_pas && commeAttendu(t.valeur, ex.resultat, exigenceDe(ex))) {
      justes += 1;
      continue;
    }
    const partie = partieDeLExercice(ex.code);
    ecarts.push({
      enonce: ex.enonce,
      donne: t.valeur,
      attendu: ex.resultat,
      saitPas: t.sait_pas,
      passage:
        partie === null
          ? null
          : { numero: partie + 1, titre: lecon.cours[partie].titre ?? null },
    });
  }

  return { lecon, faits, total: serie.length, justes, ecarts };
}
