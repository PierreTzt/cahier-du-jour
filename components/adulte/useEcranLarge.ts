"use client";

import { useSyncExternalStore } from "react";

/* La même limite que `sm` dans Tailwind : en dessous, c'est un téléphone. */
const LARGE = "(min-width: 640px)";

function sAbonner(prevenir: () => void) {
  const m = window.matchMedia(LARGE);
  m.addEventListener("change", prevenir);
  return () => m.removeEventListener("change", prevenir);
}

/**
 * L'écran est-il assez large pour ouvrir un panneau sous la séance, ou
 * faut-il le faire monter du bas, comme sur un téléphone ?
 *
 * Côté serveur, on répond « large » : c'est le rendu qu'avait la page avant,
 * et rien ne s'ouvre avant qu'on touche un bouton — le téléphone a corrigé
 * la réponse bien avant.
 */
export function useEcranLarge() {
  return useSyncExternalStore(
    sAbonner,
    () => window.matchMedia(LARGE).matches,
    () => true,
  );
}
