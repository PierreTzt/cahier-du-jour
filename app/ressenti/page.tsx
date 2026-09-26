import type { CSSProperties } from "react";
import { redirect } from "next/navigation";
import DeposerRessenti from "@/components/DeposerRessenti";
import { personneConnectee, estEnfant } from "@/lib/session";
import { aujourdhui, journeeDe, ressentiDe } from "@/lib/journee";
import { motsDe, motRecu } from "@/lib/valorisation";

/**
 * Le dépôt du soir.
 *
 * Ce qu'il écrit ici ne lui revient jamais : il dépose, ça part chez ses
 * parents, et l'écran le lui dit.
 *
 * Et une fois déposé, il peut y trouver le mot d'un adulte — un seul, le
 * dernier du jour, signé « papa », « maman » ou « parrain ». Les mots ne sont
 * lus en base **qu'une fois le ressenti déposé** : avant, ils ne sont même pas
 * dans ce que le serveur envoie à son navigateur. Et un jour sans mot, il n'y
 * a rien à envoyer, donc rien à dessiner.
 */

export const dynamic = "force-dynamic";

export default async function CommentJeMeSens() {
  const moi = await personneConnectee();
  if (!moi) redirect("/entrer");
  /* Le ressenti est le sien : un adulte ne le dépose pas à sa place. */
  if (!estEnfant(moi)) redirect("/pilotage");

  const jour = await journeeDe(moi.famille_id, aujourdhui());
  const deja = await ressentiDe(jour.id);
  const mot = deja ? motRecu(deja, await motsDe(jour.id, moi.famille_id), jour.id) : null;

  /* Un seul composant, à la même place, que le ressenti soit déposé ou non.
     Déposer revalide cette page, et le serveur la rend aussitôt à nouveau :
     avec deux branches ici, ce nouveau rendu démontait le formulaire au
     moment où il affichait « C'est envoyé » — le défaut déjà rencontré sur
     `/etape`. Ici le composant reste monté, garde qu'il vient d'envoyer, et
     reçoit le mot par ce même rendu, sans second aller-retour. */
  return (
    <main
      className="reglure chaleur flex flex-1 flex-col"
      style={{ "--force-reglure": 0.45 } as CSSProperties}
    >
      <DeposerRessenti prenom={moi.prenom} dejaEnvoye={deja !== null} motRecu={mot} />
    </main>
  );
}
