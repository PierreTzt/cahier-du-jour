"use client";

import { useTransition } from "react";
import { usePathname } from "next/navigation";
import { seDeconnecter } from "@/app/actions";

/**
 * Quitter.
 *
 * Utile à tout le monde, et pas seulement aux adultes : l'appareil est
 * partagé dans la maison, et l'enfant qui rend la tablette à son père ne doit
 * pas lui laisser sa session ouverte. Réciproquement, un parent qui a consulté
 * le soir ne doit pas laisser traîner un accès au journal.
 *
 * Discret, et sans confirmation : « es-tu sûr ? » pour un geste qui se répare
 * en tapant quatre chiffres serait une question de trop.
 *
 * `masquerSur` : pendant une partie du test, « Quitter » était la seule sortie
 * visible — la plus brutale, qui le déconnecte. Décision du 16 septembre 2026 :
 * il disparaît de son en-tête sur `/questions`, où un lien doux ramène à sa
 * journée à la place.
 */
export default function SeDeconnecter({
  clair,
  masquerSur = [],
}: {
  clair?: boolean;
  masquerSur?: string[];
}) {
  const [enCours, demarrer] = useTransition();
  const chemin = usePathname();

  if (masquerSur.includes(chemin)) return null;

  return (
    <button
      type="button"
      disabled={enCours}
      onClick={() => demarrer(() => seDeconnecter())}
      className={`whitespace-nowrap rounded-full px-3 py-1 text-[0.8125rem] transition-colors disabled:opacity-50 ${
        clair
          ? "text-papier/60 hover:bg-papier/10 hover:text-papier"
          : "text-encre-tenue hover:text-encre"
      }`}
    >
      Quitter
    </button>
  );
}
