import { personnesDe, rendezVousDe, rendezVousPourLEnfant } from "@/lib/pourquoi";

/**
 * Ce que l'enfant attend, sous sa journée.
 *
 * Une ligne sous le chemin, jamais une étape : pas de case à cocher, pas de
 * pastille, pas de rappel, pas de « dans trois jours ». Une pastille est une
 * sollicitation, une sollicitation est une dette, et un compte à rebours est
 * un compteur. Dans l'agenda d'un enfant qui redoute presque tout ce qui s'y
 * trouve, il y a une chose qu'il attend — et elle ne lui demande rien.
 *
 * Pas un lien non plus : la porte de la boîte à pourquoi est juste en dessous,
 * et deux liens vers le même endroit, l'un sur l'autre, font une ligne de trop.
 *
 * Sobre par nécessité : la journée doit tenir sur un écran, et elle le tenait
 * au pixel près à 768×1024. Pas d'encadré, pas de marge généreuse — le POC
 * avait mesuré qu'un bloc de plus la faisait déborder de 68 px. Sans
 * rendez-vous, rien du tout, pas même un espace.
 */
export default async function RendezVousDuParrain({ familleId }: { familleId: string }) {
  const [rdv, personnes] = await Promise.all([rendezVousDe(familleId), personnesDe(familleId)]);
  const ligne = rendezVousPourLEnfant(rdv, personnes, new Date());
  if (!ligne) return null;

  return (
    <p className="mt-3 flex flex-wrap items-baseline gap-x-3 text-[0.9375rem] leading-snug">
      <span className="etiquette shrink-0 text-sarcelle">{ligne.quand}</span>
      <span className="text-encre-douce">{ligne.phrase}</span>
    </p>
  );
}
