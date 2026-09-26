/**
 * Ce qu'a donné une séance menée avec une fiche. **Réservé aux adultes.**
 *
 * Retour des parents le 16 septembre 2026, premier jour réel : les séances
 * d'écran rendent leur relevé toutes seules, et celles qu'un adulte mène avec
 * une fiche — calcul mental à l'ardoise, questions sur un texte, dictée — ne
 * laissaient rien. Le corrigé était sous leurs yeux, il n'y avait nulle part
 * où dire ce qui avait résisté. On le dit désormais depuis la journée.
 *
 * Ce qu'on garde est **ce qui est à revoir**, sur combien de questions, et une
 * note. C'est ce que la fiche elle-même demande de retenir : « ce qui se garde,
 * c'est la question à reposer demain ». Le « 8 / 10 » qui en découle se lit
 * de ce côté-ci, comme le relevé des exercices, et nulle part ailleurs.
 *
 * Deux choses que ce module ne fait pas, exprès :
 *
 *   - **il ne touche pas à l'état de la séance.** « J'ai fini » reste le geste
 *     de l'enfant (voir `contexteEnfant` dans `app/actions.ts`) ; un adulte
 *     qui note un résultat ne referme pas sa journée derrière lui ;
 *   - **il ne se fie pas au navigateur** pour savoir ce qui est à revoir :
 *     l'écran envoie des rangs, et le texte recopié vient de la fiche.
 *
 * Ce module porte les réponses des fiches (`questionsANoter`) :
 * `test/portes.test.ts` le compte parmi ceux qu'un écran d'enfant ne doit
 * jamais atteindre.
 */

import { lignes, executer } from "./base";
import { aDesReponses, lignesDeLaFiche, sansMarques } from "./fiches/mise-en-page";
import type { Fiche } from "./fiches/types";

/** Une question de la fiche qui a une réponse, donc qui peut être à revoir. */
export type QuestionANoter = {
  /** Le rang de l'entrée dans le matériel. C'est ce que l'écran renvoie. */
  rang: number;
  numero: string | null;
  texte: string;
  reponse: string;
};

export type ResultatFiche = {
  /** Les questions à revoir, recopiées telles que la fiche les écrit. */
  aRevoir: string[];
  /** Sur combien de questions. `null` : la fiche n'a pas de corrigé. */
  sur: number | null;
  note: string;
};

export const NOTE_MAX = 1000;

/**
 * Les questions d'une fiche qui se notent : celles qui ont une réponse en
 * regard. Une dictée, un texte lu à voix haute n'en ont aucune — il reste la
 * note. Un texte suivi de cinq questions n'en a que cinq : les paragraphes ne
 * se ratent pas.
 */
export function questionsANoter(fiche: Pick<Fiche, "materiel" | "corrige">): QuestionANoter[] {
  if (!aDesReponses(fiche.materiel, fiche.corrige)) return [];
  return lignesDeLaFiche(fiche.materiel, fiche.corrige)
    .map((l, rang) => ({ rang, numero: l.numero, texte: l.texte, reponse: l.reponse }))
    .filter((q) => q.reponse.trim().length > 0);
}

/**
 * Le résultat à écrire, depuis ce que l'écran a envoyé.
 *
 * Un rang qui ne désigne pas une question notable est ignoré plutôt que
 * refusé : il ne peut venir que d'un navigateur trafiqué ou d'une fiche
 * corrigée entre l'affichage et l'envoi, et dans les deux cas la note reste
 * bonne à garder. Une note trop longue, elle, est refusée et pas tronquée —
 * couper le texte d'un parent sans le lui dire, c'est perdre ce qu'il a écrit.
 */
export function resultatDepuis(
  fiche: Pick<Fiche, "materiel" | "corrige">,
  rangsARevoir: number[],
  note: string,
): ResultatFiche | null {
  if (note.length > NOTE_MAX) return null;
  const qs = questionsANoter(fiche);
  const voulus = new Set(rangsARevoir);
  return {
    aRevoir: qs.filter((q) => voulus.has(q.rang)).map((q) => sansMarques(q.texte)),
    sur: qs.length > 0 ? qs.length : null,
    note: note.trim(),
  };
}

/** Les rangs déjà marqués, pour rouvrir un résultat noté. */
export function rangsDe(questions: QuestionANoter[], aRevoir: string[]): number[] {
  const marques = new Set(aRevoir);
  return questions.filter((q) => marques.has(sansMarques(q.texte))).map((q) => q.rang);
}

export async function resultatsDeJournee(journeeId: string) {
  const rangs = await lignes<{ seance_id: string; a_revoir: string[]; sur: number | null; note: string }>(
    `select r.seance_id, r.a_revoir, r.sur, r.note
       from resultat_fiche r join seance s on s.id = r.seance_id
      where s.journee_id = $1`,
    [journeeId],
  );
  return new Map<string, ResultatFiche>(
    rangs.map((r) => [r.seance_id, { aRevoir: r.a_revoir, sur: r.sur, note: r.note }]),
  );
}

/** `seanceId` est vérifié par l'appelant contre la journée de la session. */
export async function noterResultat(seanceId: string, r: ResultatFiche, parAdulte: string) {
  await executer(
    `insert into resultat_fiche (seance_id, a_revoir, sur, note, par_adulte)
     values ($1, $2, $3, $4, $5)
     on conflict (seance_id) do update
       set a_revoir = excluded.a_revoir,
           sur = excluded.sur,
           note = excluded.note,
           par_adulte = excluded.par_adulte,
           note_le = now()`,
    [seanceId, r.aRevoir, r.sur, r.note, parAdulte],
  );
}
