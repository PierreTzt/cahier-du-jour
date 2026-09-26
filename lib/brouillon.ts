"use client";

import { useEffect, useState } from "react";
import { garderBrouillon, oublierBrouillon, reprendreBrouillon } from "./recharger";

/**
 * Un champ de texte d'adulte qui ne se perd pas.
 *
 * La session d'un adulte se ferme à cinq heures du matin. Un parent qui écrit
 * sa note, une sortie ou une consigne sur une page ouverte la veille est alors
 * renvoyé à la porte des adultes par son geste — et revient, le code tapé, sur
 * la même page. Ce qu'il avait écrit l'attend : chaque frappe est gardée pour
 * l'onglet et pour la journée (seconde critique du 16 septembre).
 *
 * Le brouillon est repris après le montage, jamais pendant le rendu : le
 * serveur ne le connaît pas.
 */
export function useBrouillon(cle: string, initial = "") {
  const [texte, setTexte] = useState(initial);

  useEffect(() => {
    const t = setTimeout(() => {
      const garde = reprendreBrouillon(cle);
      if (garde && garde !== initial) setTexte(garde);
    }, 0);
    return () => clearTimeout(t);
  }, [cle, initial]);

  const changer = (valeur: string) => {
    setTexte(valeur);
    garderBrouillon(cle, valeur === initial ? "" : valeur);
  };
  const oublier = () => oublierBrouillon(cle);

  return [texte, changer, oublier] as const;
}
