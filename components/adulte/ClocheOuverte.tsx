"use client";

import { useEffect } from "react";
import { clocheOuverte } from "@/app/gestes/a-reprendre";

/**
 * Dire au serveur que la page de la cloche a été lue.
 *
 * Un geste, pas un effet du rendu : une page qui écrit en se rendant écrit
 * aussi quand on ne la lit pas — préchargement, rechargement. Il part une fois
 * la page affichée, avec le moment où elle a été lue.
 */
export default function ClocheOuverte({ lueA }: { lueA: number }) {
  useEffect(() => {
    clocheOuverte(lueA).catch(() => {
      /* Au pire, la cloche sonnera encore au prochain passage. */
    });
  }, [lueA]);
  return null;
}
