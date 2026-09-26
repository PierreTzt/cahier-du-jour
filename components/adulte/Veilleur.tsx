"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";

/** Au-delà de cette absence, une page d'adulte se relit en revenant. */
const ABSENCE_MS = 20 * 60 * 1000;

/**
 * Une page d'adulte restée ouverte se remet à jour quand on y revient.
 *
 * Un onglet ouvert le dimanche soir montrait encore la page du dimanche le
 * lundi matin, session fermée ou non : l'écart de la veille, un ressenti, et
 * des boutons qui ne répondaient plus (seconde critique du 16 septembre).
 * Revenu après une longue absence, l'écran redemande au serveur ce qu'il doit
 * montrer — et, si la session s'est fermée à cinq heures, c'est la porte des
 * adultes, avant qu'on ait commencé à écrire.
 */
export default function Veilleur() {
  const router = useRouter();

  useEffect(() => {
    let cache = document.visibilityState === "hidden" ? Date.now() : null;
    const surChangement = () => {
      if (document.visibilityState === "hidden") {
        cache = Date.now();
      } else if (cache !== null) {
        if (Date.now() - cache > ABSENCE_MS) router.refresh();
        cache = null;
      }
    };
    document.addEventListener("visibilitychange", surChangement);
    return () => document.removeEventListener("visibilitychange", surChangement);
  }, [router]);

  return null;
}
