"use client";

import { useTransition } from "react";
import { useBrouillon } from "@/lib/brouillon";
import { repondre } from "@/app/actions";
import { recharger } from "@/lib/recharger";
import type { QuestionPosee } from "@/lib/positionnement";

/** Les deux réponses, et les choix, ont la même forme et la même taille. */
const PILULE =
  "rounded-full border px-5 py-3 text-[1.0625rem] transition-colors disabled:opacity-60";

/**
 * Une question, et deux façons d'y répondre.
 *
 * « Je ne sais pas » est au même rang que « J'ai répondu » : même place, même
 * taille, même forme, dans la même rangée. Ne pas savoir est une information
 * utile à ses parents, exactement comme savoir — et le lui dire ainsi est la
 * seule façon que l'examen ne devienne pas une épreuve.
 *
 * Jusqu'au 16 septembre 2026, ce commentaire le disait et le code faisait le
 * contraire : un bouton plein pour « J'ai répondu », un lien gris souligné en
 * dessous pour « Je ne sais pas ». Tant qu'il n'a rien écrit, c'est
 * maintenant « Je ne sais pas » qui est le geste disponible ; dès qu'il écrit,
 * les deux restent côte à côte.
 *
 * Ce qu'il n'y a pas ici : aucun retour sur la justesse, et aucun moyen de
 * passer sans répondre. L'action `repondre` ne rend que « enregistré » ou non,
 * jamais « juste », donc cet écran est structurellement incapable de lui
 * apprendre qu'il s'est trompé ; et la question suivante n'arrive qu'une fois
 * celle-ci répondue, parce que `repondre` revalide la route et que le parent
 * remonte le composant.
 */
export default function UneQuestion({ question }: { question: QuestionPosee }) {
  /* Ce qu'il a tapé survit à un rechargement — une mise en ligne, le Wi-Fi
     coupé — et revient sur la même question (seconde critique du 16 septembre). */
  const [valeur, setValeur, oublier] = useBrouillon(`test-${question.code}`);
  const [enCours, demarrer] = useTransition();

  function envoyer(v: string, saitPas: boolean) {
    demarrer(async () => {
      try {
        /* Refusée (partie retirée par un adulte, page d'hier) : sans ça, le
           bouton ne ferait plus rien, indéfiniment. On montre l'état réel. */
        if (await repondre(question.code, v, saitPas)) oublier();
        else recharger();
      } catch {
        /* Une mise en ligne pendant que la page est ouverte rend l'action
           introuvable, et le Wi-Fi coupé la fait échouer. Pour lui, ce serait
           « j'ai cassé le test ». On recharge : la page repart de ce qui est
           en base, la même question ou la suivante. */
        recharger();
      }
    });
  }

  const jeNeSaisPas = (
    <button
      type="button"
      disabled={enCours}
      onClick={() => envoyer("", true)}
      className={`${PILULE} border-reglure text-encre hover:border-encre-tenue`}
    >
      Je ne sais pas
    </button>
  );

  return (
    <div
      aria-busy={enCours}
      className="rounded-feuille border border-reglure bg-feuille p-5 transition-opacity sm:p-6"
      style={{ opacity: enCours ? 0.55 : 1 }}
    >
      <p className="font-display text-[1.25rem] leading-snug tracking-tight sm:text-[1.375rem]">
        {question.enonce}
      </p>

      {question.type === "choix" ? (
        <div className="mt-5 flex flex-wrap gap-2">
          {question.choix?.map((c) => (
            <button
              key={c}
              type="button"
              disabled={enCours}
              onClick={() => envoyer(c, false)}
              className={`${PILULE} border-reglure text-encre hover:border-encre-tenue`}
            >
              {c}
            </button>
          ))}
          {jeNeSaisPas}
        </div>
      ) : (
        <div className="mt-5 flex flex-wrap items-center gap-3">
          <input
            value={valeur}
            onChange={(e) => setValeur(e.target.value)}
            /* Entrée valide : il écrit sa réponse et continue sans lâcher le
               clavier. Cent quatre-vingts allers-retours vers la souris
               transformeraient le test en corvée mécanique. */
            onKeyDown={(e) => {
              if (e.key === "Enter" && valeur.trim() && !enCours) {
                e.preventDefault();
                envoyer(valeur, false);
              }
            }}
            autoFocus
            aria-label="Ta réponse"
            placeholder="Ta réponse"
            className="w-56 rounded-feuille border border-reglure bg-papier/30 px-4 py-3 text-lg text-encre placeholder:text-encre-tenue focus:border-encre-tenue focus:outline-none"
          />
          <button
            type="button"
            disabled={!valeur.trim() || enCours}
            onClick={() => envoyer(valeur, false)}
            className={`${PILULE} border-encre bg-encre font-bold text-feuille hover:bg-encre/85 disabled:cursor-not-allowed disabled:border-reglure disabled:bg-transparent disabled:font-normal disabled:text-encre-tenue disabled:opacity-100`}
          >
            J’ai répondu
          </button>
          {jeNeSaisPas}
        </div>
      )}
    </div>
  );
}
