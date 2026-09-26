"use client";

import { useEffect, useState, useTransition } from "react";
import { deposerQuestion } from "@/app/gestes/pourquoi";
import { garderBrouillon, oublierBrouillon, reprendreBrouillon } from "@/lib/recharger";

/**
 * Un champ, un bouton, et rien d'autre.
 *
 * Pas de titre, pas de catégorie, pas de longueur minimale : un enfant qui pose
 * une question ne remplit pas un formulaire, et lui demander de classer sa
 * question — « c'est des sciences ou de l'histoire ? » — est déjà une
 * évaluation, dans laquelle il peut se tromper.
 *
 * Aucun message d'erreur n'est possible sur cet écran. Le bouton est inerte
 * tant que le champ est vide ; si le dépôt n'aboutit pas, ce qu'il a tapé
 * reste là, et rien ne lui dit qu'il a mal fait. Pas de compteur de
 * caractères non plus : « 423 / 500 » est un compteur. Le champ s'arrête
 * simplement à la limite de la table.
 *
 * Toutes les phrases viennent de la page, qui les tient de `pourquoiVivant()` :
 * ce composant ne connaît ni le mot qui désigne le parrain, ni celui des
 * parents — et donc aucun prénom.
 */
export default function DeposerQuestion({
  quiLit,
  bouton,
  depose,
}: {
  quiLit: string;
  bouton: string;
  depose: string;
}) {
  const [texte, setTexte] = useState("");
  const [envoye, setEnvoye] = useState(false);
  const [enCours, demarrer] = useTransition();

  /* « Ce qu'il a tapé reste là » vaut aussi après un rechargement : une
     erreur réseau passe par la page d'erreur, qui recharge. */
  useEffect(() => {
    const t = setTimeout(() => {
      const brouillon = reprendreBrouillon("question");
      if (brouillon) setTexte(brouillon);
    }, 0);
    return () => clearTimeout(t);
  }, []);

  function deposer() {
    if (!texte.trim()) return;
    demarrer(async () => {
      if (await deposerQuestion(texte)) {
        oublierBrouillon("question");
        setTexte("");
        setEnvoye(true);
      }
    });
  }

  return (
    <div>
      <label
        htmlFor="question"
        className="font-display block text-[1.375rem] leading-snug tracking-tight sm:text-[1.5rem]"
      >
        Tu veux savoir quelque chose&nbsp;?
      </label>

      <textarea
        id="question"
        rows={3}
        maxLength={500}
        value={texte}
        onChange={(e) => {
          setTexte(e.target.value);
          garderBrouillon("question", e.target.value);
          setEnvoye(false);
        }}
        className="mt-4 w-full resize-none rounded-feuille border border-reglure bg-feuille p-4 text-lg leading-relaxed text-encre focus:border-encre-tenue focus:outline-none"
      />

      {/* Dire qui lit. Une question sur le monde n'est pas une confidence,
          mais un enfant ne fait pas cette distinction tout seul — et il
          finira par glisser autre chose qu'une question de physique. */}
      <p className="mt-3 text-sm leading-relaxed text-encre-tenue">{quiLit}</p>

      <div className="mt-6 flex flex-wrap items-center gap-4">
        <button
          type="button"
          onClick={deposer}
          disabled={!texte.trim() || enCours}
          className="rounded-full bg-encre px-6 py-3.5 text-base font-bold text-feuille transition-colors hover:bg-encre/85 disabled:cursor-not-allowed disabled:bg-encre-tenue"
        >
          {bouton}
        </button>

        {envoye && <p className="text-[0.9375rem] text-fini">{depose}</p>}
      </div>
    </div>
  );
}
