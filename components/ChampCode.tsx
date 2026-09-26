"use client";

import { useState } from "react";

/**
 * Quatre cases pour quatre chiffres.
 *
 * Tout ce composant est écrit autour d'une seule idée : **l'échec ne doit
 * rien coûter.** Pas de bordure rouge, pas de secousse, pas de « code
 * incorrect », pas de « 2 essais restants ». Quand ça ne marche pas, les
 * cases se vident et le curseur revient au début — comme une feuille qu'on
 * reprend, pas comme une porte qui claque.
 *
 * C'est la même règle que « bloquer n'est pas échouer » ailleurs dans
 * l'application, appliquée au seul endroit où un enfant de neuf ans peut se
 * retrouver seul face à une machine qui dit non.
 */
export default function ChampCode({ longueur = 4 }: { longueur?: number }) {
  const [chiffres, setChiffres] = useState(() => Array(longueur).fill(""));

  /**
   * Poser ce qui arrive, à partir de la case visée.
   *
   * On répartit au lieu de ne garder qu'un caractère : quand on tape vite —
   * et un enfant de neuf ans tape vite — plusieurs touches atteignent la même
   * case avant que le focus ait bougé. L'ancienne version n'en gardait que la
   * dernière, et le code se saisissait à moitié. Ça gère aussi le collage.
   */
  function poser(i: number, valeur: string) {
    const arrivee = valeur.replace(/\D/g, "");
    const suite = [...chiffres];

    if (arrivee.length === 0) {
      suite[i] = "";
      setChiffres(suite);
      return;
    }

    /* Une case déjà pleine qu'on retape : c'est un remplacement, pas un ajout. */
    const depart = arrivee.length > 1 && chiffres[i] ? i : i;
    for (let k = 0; k < arrivee.length && depart + k < longueur; k++) {
      suite[depart + k] = arrivee[k];
    }
    setChiffres(suite);

    const derniere = Math.min(depart + arrivee.length, longueur - 1);
    document.getElementById(`c${derniere}`)?.focus();
  }

  function reculer(i: number, touche: string) {
    if (touche === "Backspace" && !chiffres[i] && i > 0) {
      document.getElementById(`c${i - 1}`)?.focus();
    }
  }

  const complet = chiffres.every((c) => c !== "");

  return (
    <div>
      <input type="hidden" name="code" value={chiffres.join("")} />

      <div className="flex gap-3">
        {chiffres.map((c, i) => (
          <input
            key={i}
            id={`c${i}`}
            inputMode="numeric"
            autoComplete="off"
            aria-label={`Chiffre ${i + 1}`}
            value={c}
            onChange={(e) => poser(i, e.target.value)}
            onKeyDown={(e) => reculer(i, e.key)}
            autoFocus={i === 0}
            className="chiffres h-20 w-14 rounded-feuille sm:w-16 border-2 border-reglure bg-feuille text-center text-4xl text-encre transition-colors focus:border-encre focus:outline-none"
          />
        ))}
      </div>

      <button
        type="submit"
        disabled={!complet}
        className="mt-8 rounded-full bg-encre px-7 py-3.5 text-base font-bold text-feuille transition-colors hover:bg-encre/85 disabled:cursor-not-allowed disabled:bg-encre-tenue"
      >
        Entrer
      </button>
    </div>
  );
}
