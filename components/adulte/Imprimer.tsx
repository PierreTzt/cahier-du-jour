"use client";

/**
 * Le bouton qui imprime la page. **Écrans d'adulte.**
 *
 * Un composant à part pour une seule ligne, parce que `window.print()` ne se
 * déclenche que dans le navigateur et que la page qui l'accueille est un
 * composant serveur. Il porte `sans-impression` lui-même : un bouton
 * « Imprimer » sur la feuille imprimée est exactement le parasite qu'on veut
 * éviter.
 */
export default function Imprimer({ libelle = "Imprimer" }: { libelle?: string }) {
  return (
    <button
      type="button"
      onClick={() => window.print()}
      className="sans-impression rounded-full border border-bord-fort bg-carte px-5 py-2.5 text-[0.9375rem] text-encre-douce transition-colors hover:border-encre hover:text-encre"
    >
      {libelle}
    </button>
  );
}
