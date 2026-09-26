/**
 * Déplacer une séance vers un autre jour : **où elle a le droit d'aller.**
 *
 * Retour d'un parent, le 21 septembre 2026 : il voulait faire le jour même
 * deux séances du lendemain. Il les a retirées de mardi, et n'a trouvé nulle
 * part où les replacer — la liste des leçons à rattraper ne prend ni les
 * rituels ni un jour qui n'est pas encore passé. Retirer n'est pas déplacer.
 *
 * Les règles sont ici, pures, pour que `npm test` les déroule ; l'écran s'en
 * sert pour proposer des jours, l'action pour refuser les autres, et
 * `deplacerVers` (`lib/journee.ts`) les redemande à la base, lignes
 * verrouillées.
 */

import { decaler, trameDuJour } from "./trame";
import type { ClotureJour, TonJour } from "./journee";

/** Ce que la base sait d'une journée, quand elle existe déjà. */
export type EtatDuJour = { ton: TonJour; cloture: ClotureJour | null };

/**
 * Une date peut-elle accueillir une séance venue d'un autre jour ?
 *
 *   - **pas avant aujourd'hui** : il ne voit jamais qu'aujourd'hui, une
 *     séance posée hier ne lui arriverait pas ;
 *   - **pas une journée refermée**, qu'il l'ait finie ou arrêtée. Le parrain, le
 *     21 septembre 2026 : « pour l'enfant c'est terminé » ;
 *   - **pas un jour de repos** : son écran lui dit qu'il n'a rien, et que
 *     c'est prévu.
 */
export function cibleAdmise(
  cible: string,
  depart: string,
  aujourdhui: string,
  etat: EtatDuJour | undefined,
) {
  if (cible < aujourdhui || cible === depart) return false;
  if (!etat) return true;
  return etat.cloture === null && etat.ton !== "repos";
}

/**
 * Les jours à proposer, dans l'ordre : les prochains jours de classe qui
 * l'admettent, aujourd'hui compris.
 *
 * Seulement des jours de classe : un samedi ou un jour de vacances se remplit
 * encore à la main, mais on ne le propose pas au détour d'un clic. Et une
 * poignée seulement — au-delà de deux semaines, c'est le plan qu'il faut
 * revoir, pas une séance qu'il faut pousser.
 */
export function joursOuDeplacer(
  depart: string,
  aujourdhui: string,
  etats: Map<string, EtatDuJour>,
  combien = 8,
) {
  const jours: string[] = [];
  /* Six semaines au plus : assez pour enjamber deux semaines de vacances. */
  for (let i = 0; i < 42 && jours.length < combien; i++) {
    const d = decaler(aujourdhui, i);
    if (trameDuJour(d).creneaux.length === 0) continue;
    if (cibleAdmise(d, depart, aujourdhui, etats.get(d))) jours.push(d);
  }
  return jours;
}
