/**
 * Ce qui a été prévu et jamais donné.
 *
 * Le parrain a posé la bonne question : « quand on change de normale à
 * allégée, ça change tout le plan pour la suite ». Il y a deux façons de
 * répondre, et une seule tient.
 *
 * **Faire glisser le plan** — décaler tout d'un jour à chaque journée allégée
 * — casse la seule propriété qui rende la trame utilisable : qu'une date donne
 * toujours la même journée. Un plan qui bouge sous les pieds ne se prépare pas
 * le dimanche soir, et ne se corrige pas.
 *
 * **Tenir la liste de ce qui manque**, au contraire, ne casse rien. La trame
 * reste fixe, et ce qui n'a pas été donné apparaît quelque part au lieu de
 * disparaître. C'est ce que fait ce fichier.
 *
 * Deux principes, repris du reste du produit :
 *
 *   - Le retard n'existe **que côté adulte**. Rien de ce qui suit ne traverse
 *     vers l'écran de l'enfant. Il ne doit pas pouvoir lire la liste de ce
 *     qu'il n'a pas fait — c'est exactement ce que la règle n°3 interdit.
 *   - On ne compte que ce qui est **actionnable**. Un rituel de calcul mental
 *     manqué ne se rattrape pas, il revient le lendemain de toute façon ; une
 *     leçon du programme jamais donnée, si.
 */

import { lignes } from "./base";
import { leconParCode, type Lecon, type Periode } from "./programme";
import { joursDeTravail, trameDuJour } from "./trame";

export type ALeconRattraper = {
  lecon: Lecon;
  /** Le jour où la trame l'avait prévue. */
  prevueLe: string;
  /** Combien de fois la trame la prévoit encore plus tard. */
  reviendra: number;
};

/**
 * Les leçons prévues jusqu'à une date et jamais données.
 *
 * « Jamais donnée » veut dire : aucune séance portant ce code de leçon n'a été
 * menée au bout, dans aucune journée. Une leçon posée mais mise de côté compte
 * donc comme à rattraper — ce qui est le sens de « mise de côté ».
 *
 * Une leçon que la trame reprévoit plus tard n'est pas urgente, et c'est dit :
 * un parent n'a pas à courir après ce qui revient de lui-même la semaine
 * suivante.
 */
export async function aRattraper(familleId: string, jusquA: string) {
  const faites = new Set(
    (
      await lignes<{ lecon: string }>(
        `select distinct s.lecon
           from seance s
           join journee j on j.id = s.journee_id
          where j.famille_id = $1 and s.lecon <> '' and s.etat = 'faite'`,
        [familleId],
      )
    ).map((r) => r.lecon),
  );

  /* Les séances encore à venir dans une journée d'aujourd'hui ou plus tard
     ne sont pas du retard : elles sont devant. */
  const devant = new Set(
    (
      await lignes<{ lecon: string }>(
        `select distinct s.lecon
           from seance s
           join journee j on j.id = s.journee_id
          where j.famille_id = $1 and s.lecon <> ''
            and s.etat = 'a-venir' and j.jour >= $2::date`,
        [familleId, jusquA],
      )
    ).map((r) => r.lecon),
  );

  const jours = joursDeTravail();
  const passe = jours.filter((j) => j < jusquA);
  const avenir = jours.filter((j) => j >= jusquA);

  /* Combien de fois chaque leçon revient encore dans la trame. */
  const reviendra = new Map<string, number>();
  for (const j of avenir)
    for (const c of trameDuJour(j).creneaux)
      if (c.lecon) reviendra.set(c.lecon, (reviendra.get(c.lecon) ?? 0) + 1);

  const vues = new Set<string>();
  const liste: ALeconRattraper[] = [];
  for (const j of passe) {
    for (const c of trameDuJour(j).creneaux) {
      if (!c.lecon || vues.has(c.lecon)) continue;
      if (faites.has(c.lecon) || devant.has(c.lecon)) continue;
      const lecon = leconParCode.get(c.lecon);
      if (!lecon) continue;
      vues.add(c.lecon);
      liste.push({ lecon, prevueLe: j, reviendra: reviendra.get(c.lecon) ?? 0 });
    }
  }

  return liste;
}

/**
 * Où en est chaque période : combien de leçons prévues, combien menées au
 * bout. **Écran d'adulte.**
 *
 * Un chiffre par période, et pas un pourcentage global : « douze sur
 * trente-deux en période 2 » dit quoi faire, « 43 % » ne dit rien.
 */
export async function avancementDesPeriodes(familleId: string) {
  const faites = new Set(
    (
      await lignes<{ lecon: string }>(
        `select distinct s.lecon
           from seance s
           join journee j on j.id = s.journee_id
          where j.famille_id = $1 and s.lecon <> '' and s.etat = 'faite'`,
        [familleId],
      )
    ).map((r) => r.lecon),
  );

  return ([1, 2, 3, 4, 5] as Periode[]).map((p) => {
    const prevues = new Set<string>();
    for (const j of joursDeTravail()) {
      for (const c of trameDuJour(j).creneaux) {
        if (c.lecon && leconParCode.get(c.lecon)?.periode === p)
          prevues.add(c.lecon);
      }
    }
    return {
      periode: p,
      prevues: prevues.size,
      menees: [...prevues].filter((c) => faites.has(c)).length,
    };
  });
}
