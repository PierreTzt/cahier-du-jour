/**
 * La partie du test, dans sa journée.
 *
 * Demande des parents le 16 septembre 2026, premier jour réel : le test venait
 * d'être découpé en une partie par jour (`ceQuiVientAujourdhui`), et un lien
 * « Reprendre le test » à côté du chemin ne disait pas quand le faire. La
 * partie du jour est donc **une étape de la journée**, comme une séance.
 *
 * Trois décisions du parrain, prises ce jour-là :
 *
 *   - **elle se pose d'elle-même**, en tête de ce qui reste à faire, chaque
 *     journée normale, tant que le test n'est pas fini. Rien à préparer ;
 *   - **un adulte la déplace ou la retire** comme une autre séance, et une
 *     partie retirée ne revient pas ce jour-là (`journee.sans_test`) ;
 *   - **il n'y a plus d'autre porte** : ni lien à côté de la journée, ni
 *     `/questions` ouvert un jour où la partie n'est pas dans sa journée.
 *
 * Ni les journées allégées ni le repos : l'allégée est « le socle seulement »,
 * et le test n'en fait pas partie. Changer le ton retire une partie qui
 * n'était pas commencée (`changerTon` dans `app/actions.ts`).
 *
 * Poser la séance pendant un affichage est un geste qui écrit : il se fait
 * dans une transaction, la journée verrouillée, et l'index
 * `seance_un_seul_test` interdit qu'un double rendu en pose deux.
 */

import { executer, transaction } from "./base";
import {
  aujourdhui,
  journeeDe,
  seancesDe,
  terminerSeance,
  type ClotureJour,
  type EtatSeance,
  type Journee,
  type TonJour,
} from "./journee";
import { ceQuiVientAujourdhui, prochaine, type Aujourdhui } from "./positionnement";
import { reponsesDe } from "./reponses";

/** Ce que l'enfant lit sur son chemin. La durée ne lui est pas montrée. */
export const SEANCE_TEST = {
  matiere: "maison",
  consigne:
    "Une partie aujourd’hui, jusqu’au bout. Quand tu ne sais pas, tu le dis : c’est utile aussi.",
  minutes: 20,
} as const;

type Reponse = { exercice: string; jour: string };

/**
 * « Le test du début d’année » la première fois, « La suite du test » ensuite.
 * La trame du premier jour porte déjà une séance du premier nom : le 16
 * septembre, il l’avait cochée, et une deuxième étape au même titre sur le même
 * chemin se serait lue comme « tu dois le refaire ».
 */
export const titreDuTest = (reponses: Reponse[]) =>
  reponses.length > 0 ? "La suite du test" : "Le test du début d’année";

/** La partie du jour a déjà des réponses : son étape dit « Continuer ». */
export function partieCommencee(reponses: Reponse[], ref = aujourdhui()) {
  const vient = ceQuiVientAujourdhui(reponses, ref);
  return vient.etat === "question" && vient.etape.rang > 1;
}

/** Où en est le test pour un jour donné : aujourd'hui, ou un jour à venir. */
export function etatDuTestLe(jour: string, reponses: Reponse[], ref: string): Aujourdhui["etat"] {
  if (jour === ref) return ceQuiVientAujourdhui(reponses, ref).etat;
  return prochaine(reponses.map((r) => r.exercice)) ? "question" : "tout-fini";
}

/**
 * Faut-il poser la partie du test dans cette journée ? **Sans base.**
 *
 * Non pour un jour passé, une journée qui n'est pas normale, une journée déjà
 * refermée, une partie retirée par un adulte, une journée qui en a déjà une,
 * une journée où il ne reste rien à faire — on ne rouvre pas une journée finie
 * pour y ajouter un test — et quand il n'y a pas de partie à faire ce jour-là.
 */
export function doitPlacerLeTest(p: {
  jour: string;
  aujourdhui: string;
  ton: TonJour;
  cloture: ClotureJour | null;
  sansTest: boolean;
  seances: { etat: EtatSeance; test: boolean }[];
  etatDuTest: Aujourdhui["etat"];
}): boolean {
  return (
    p.jour >= p.aujourdhui &&
    p.ton === "normale" &&
    p.cloture === null &&
    !p.sansTest &&
    !p.seances.some((s) => s.test) &&
    p.seances.some((s) => s.etat === "a-venir") &&
    p.etatDuTest === "question"
  );
}

/**
 * Le rang où la poser : celui de la première séance qui reste à faire. Ce qui
 * est fait reste au-dessus, et elle devient l'étape « maintenant ».
 */
export function rangDuTest(seances: { rang: number; etat: EtatSeance }[]): number | null {
  const aFaire = seances.filter((s) => s.etat === "a-venir").map((s) => s.rang);
  return aFaire.length > 0 ? Math.min(...aFaire) : null;
}

/** Poser la partie du test si la journée l'appelle. Rend vrai si elle a été posée. */
export async function placerLeTest(journee: Journee, reponses: Reponse[], ref = aujourdhui()) {
  const etatDuTest = etatDuTestLe(journee.jour, reponses, ref);

  return transaction(async (q) => {
    /* Relue sous verrou : deux écrans qui s'affichent en même temps ne
       décident pas chacun de leur côté. */
    const [j] = await q<{ ton: TonJour; cloture: ClotureJour | null; sans_test: boolean }>(
      `select ton, cloture, sans_test from journee where id = $1 for update`,
      [journee.id],
    );
    if (!j) return false;
    const seances = await q<{ rang: number; etat: EtatSeance; test: boolean }>(
      `select rang, etat, test from seance where journee_id = $1`,
      [journee.id],
    );

    const poser = doitPlacerLeTest({
      jour: journee.jour,
      aujourdhui: ref,
      ton: j.ton,
      cloture: j.cloture,
      sansTest: j.sans_test,
      seances,
      etatDuTest,
    });
    const rang = rangDuTest(seances);
    if (!poser || rang === null) return false;

    await q(`update seance set rang = rang + 1 where journee_id = $1 and rang >= $2`, [
      journee.id,
      rang,
    ]);
    await q(
      `insert into seance
         (journee_id, rang, matiere, titre, reference, consigne, minutes, lecon,
          fiche, par_adulte, origine, test)
       values ($1, $2, $3, $4, '', $5, $6, '', '', null, 'trame', true)`,
      [journee.id, rang, SEANCE_TEST.matiere, titreDuTest(reponses), SEANCE_TEST.consigne, SEANCE_TEST.minutes],
    );
    return true;
  });
}

/**
 * Ce que le test permet aujourd'hui, pour `/questions` et pour `repondre`.
 *
 * `ouvert` : il y a une question à poser, et la partie est dans sa journée,
 * pas faite, la journée pas refermée. C'est la seule porte.
 */
export async function laPartieDuJour(moi: { id: string; famille_id: string }) {
  const ref = aujourdhui();
  const journee = await journeeDe(moi.famille_id, ref);
  const reponses = await reponsesDe(moi.id);
  await placerLeTest(journee, reponses, ref);

  const seance = (await seancesDe(journee.id)).find((s) => s.test);
  const vient = ceQuiVientAujourdhui(reponses, ref);
  const ouvert = vient.etat === "question" && journee.cloture === null && seance?.etat === "a-venir";
  return { vient, ouvert, reponses };
}

/**
 * Après une réponse : la partie du jour finie coche son étape — ce qui peut
 * refermer la journée, comme « J'ai fini » — et le test fini retire les
 * parties déjà posées sur les jours à venir.
 */
export async function apresUneReponse(moi: { id: string; famille_id: string }) {
  const ref = aujourdhui();
  const vient = ceQuiVientAujourdhui(await reponsesDe(moi.id), ref);
  if (vient.etat === "question") return;

  const journee = await journeeDe(moi.famille_id, ref);
  const seance = (await seancesDe(journee.id)).find((s) => s.test && s.etat === "a-venir");
  if (seance) await terminerSeance(journee.id, seance.id);

  if (vient.etat === "tout-fini") {
    await executer(
      `delete from seance s using journee j
        where s.journee_id = j.id and j.famille_id = $1 and j.jour > $2
          and s.test and s.etat = 'a-venir'`,
      [moi.famille_id, ref],
    );
  }
}

/**
 * Il sort de la partie par « Revenir à ma journée » : elle passe après
 * l'étape suivante.
 *
 * Décision du parrain, seconde critique du 16 septembre. La partie restait en
 * tête : le seul bouton de sa journée le renvoyait à la même question, et sa
 * seule autre issue était « On arrête pour aujourd'hui », qui ferme tout. Il
 * fait maintenant l'étape d'après, et la partie revient ensuite, à la même
 * question. S'il ne reste rien après elle, rien ne bouge.
 */
export async function repousserLeTest(journeeId: string) {
  return transaction(async (q) => {
    await q(`select id from journee where id = $1 for update`, [journeeId]);
    const seances = await q<{ id: string; rang: number; test: boolean }>(
      `select id, rang, test from seance
        where journee_id = $1 and etat = 'a-venir' order by rang, cree_le`,
      [journeeId],
    );
    const i = seances.findIndex((s) => s.test);
    const suivante = i >= 0 ? seances[i + 1] : undefined;
    if (!suivante) return false;
    await q(
      `update seance set rang = case when id = $2 then $4::int else $3::int end
        where journee_id = $1 and id in ($2, $5)`,
      [journeeId, seances[i].id, seances[i].rang, suivante.rang, suivante.id],
    );
    return true;
  });
}

/** Changer le ton hors de « normale » retire une partie qui n'était pas faite. */
export async function retirerLeTestAVenir(journeeId: string) {
  await executer(`delete from seance where journee_id = $1 and test and etat = 'a-venir'`, [
    journeeId,
  ]);
}

/** Un adulte remet la partie qu'il avait retirée : elle se repose au prochain affichage. */
export async function remettreLeTest(journeeId: string) {
  await executer(`update journee set sans_test = false where id = $1`, [journeeId]);
}
