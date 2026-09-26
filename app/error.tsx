"use client";

import type { CSSProperties } from "react";
import { useEffect, useState } from "react";
import { peutRecharger, recharger } from "@/lib/recharger";

/**
 * Quand quelque chose casse, l'écran ne le dit pas comme une panne.
 *
 * Sans ce fichier, Next affichait sa propre page : un triangle, « This page
 * couldn't load », « Reload », en anglais et en plein écran. Un Wi-Fi coupé
 * une seconde, une mise en ligne pendant la pause, la base qui redémarre —
 * et un enfant de neuf ans lisait qu'il avait cassé quelque chose, parfois
 * juste après avoir appuyé sur « On arrête pour aujourd'hui ».
 *
 * Ici : le papier de son cahier, une phrase, et la page se recharge d'elle-
 * même. Recharger repart de ce qui est en base — rien de ce qu'il a fait
 * n'est perdu, et ce qu'il était en train d'écrire est gardé à part
 * (`lib/recharger.ts`). Si recharger ne suffit pas (la base ne répond plus),
 * on ne clignote pas en boucle : on le dit calmement, et on attend.
 *
 * Les mots conviennent aussi à un adulte ; aucun ne parle d'erreur.
 */
export default function Erreur({ error }: { error: Error & { digest?: string } }) {
  const [attendre, setAttendre] = useState(false);

  useEffect(() => {
    console.error(error);
    const t = setTimeout(() => {
      if (!recharger()) setAttendre(true);
    }, 1200);
    return () => clearTimeout(t);
  }, [error]);

  return (
    <main
      className="reglure chaleur flex flex-1 flex-col"
      style={{ "--force-reglure": 0.45 } as CSSProperties}
    >
      <div className="au-dessus mx-auto flex w-full max-w-xl flex-1 flex-col justify-center px-5 py-20 sm:px-8">
        <h1 className="font-display text-4xl tracking-tight sm:text-5xl">Un instant.</h1>
        {attendre || !peutRecharger() ? (
          <>
            <p className="mt-4 text-lg leading-relaxed text-encre-douce">
              Le cahier ne répond pas pour l’instant. Rien de ce que tu as fait
              n’est perdu. On pourra y revenir un peu plus tard.
            </p>
            <button
              type="button"
              onClick={() => window.location.reload()}
              className="mt-8 self-start rounded-full border border-reglure px-5 py-3 text-[0.9375rem] text-encre-douce transition-colors hover:border-encre-tenue hover:text-encre"
            >
              Essayer encore
            </button>
          </>
        ) : (
          <p className="mt-4 text-lg leading-relaxed text-encre-douce">
            La page se remet en place.
          </p>
        )}
      </div>
    </main>
  );
}
