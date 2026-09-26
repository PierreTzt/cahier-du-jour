"use client";

import { useEffect, useRef } from "react";

/**
 * Ramène au centre, dans une bande qui défile de côté, l'élément marqué
 * `aria-current`. Au téléphone, la bande des jours tient sur une ligne : sans
 * ça, choisir jeudi rechargeait la page avec jeudi hors de l'écran.
 *
 * Posé comme premier enfant de la bande ; il ne rend rien de visible.
 */
export default function AuCentre() {
  const repere = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const bande = repere.current?.parentElement;
    const actuel = bande?.querySelector<HTMLElement>("[aria-current]");
    if (!bande || !actuel || bande.scrollWidth <= bande.clientWidth) return;
    const ecart = actuel.getBoundingClientRect().left - bande.getBoundingClientRect().left;
    bande.scrollLeft += ecart - (bande.clientWidth - actuel.offsetWidth) / 2;
  });

  return <span ref={repere} hidden />;
}
