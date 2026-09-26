"use server";

/**
 * Le seul geste de la cloche : dire qu'on a ouvert `/a-reprendre`.
 *
 * **Réservé aux adultes**, vérifié ici : une action serveur est une adresse
 * qu'on peut appeler sans passer par l'écran, et rien de ce que l'enfant fait
 * ne doit pouvoir écrire sur une personne.
 *
 * `jusqua` est le moment où la page a été lue, pas celui où ce geste arrive :
 * une leçon finie entre les deux n'a pas été vue, elle doit encore sonner. Il
 * vient du navigateur, donc il est borné par l'heure du serveur — au pire, on
 * s'éteint un peu tôt sur soi-même.
 *
 * Aucune page n'est revalidée : la page qui l'appelle garde ses « nouveau »
 * sous les yeux de celui qui lit, et le bandeau s'éteint de lui-même.
 */

import { executer } from "@/lib/base";
import { personneConnectee, estEnfant } from "@/lib/session";

async function adulteConnecte() {
  const moi = await personneConnectee();
  return moi && !estEnfant(moi) ? moi : null;
}

export async function clocheOuverte(jusqua: number) {
  const moi = await adulteConnecte();
  if (!moi) return;
  if (!Number.isFinite(jusqua)) return;
  await executer(
    `update personne
        set a_reprendre_vu_le = least(to_timestamp($2), now())
      where id = $1
        and (a_reprendre_vu_le is null or a_reprendre_vu_le < least(to_timestamp($2), now()))`,
    [moi.id, jusqua],
  );
}
