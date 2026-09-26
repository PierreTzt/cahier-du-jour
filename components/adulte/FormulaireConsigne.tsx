"use client";

import { useState, useTransition } from "react";
import { useBrouillon } from "@/lib/brouillon";
import { noterConsigne } from "@/app/gestes/suivi";

/**
 * Noter une consigne du soignant.
 *
 * Le rappel est dans le formulaire et pas seulement en tête de page : c'est au
 * moment d'écrire qu'on est tenté de noter ce qui a été dit plutôt que ce qu'il
 * faut faire. Et la raison a son propre champ, juste sous la consigne, pour
 * qu'on ne l'oublie pas en route.
 *
 * Les exemples grisés décrivent la forme attendue, jamais une consigne : une
 * consigne inventée, même en exemple, pourrait se lire comme une recommandation
 * que le soignant aurait faite.
 */

const champ =
  "mt-2 w-full rounded-feuille border border-bord-fort bg-carte px-4 py-3 text-[1.0625rem] text-encre placeholder:text-encre-tenue focus:border-encre focus:outline-none";

export default function FormulaireConsigne({
  limites,
}: {
  limites: { texte: number; pourquoi: number; origine: number };
}) {
  const [texte, setTexte] = useBrouillon("consigne-texte");
  const [pourquoi, setPourquoi] = useBrouillon("consigne-pourquoi");
  const [origine, setOrigine] = useState("");
  const [notee, setNotee] = useState(false);
  const [refusee, setRefusee] = useState(false);
  const [enCours, demarrer] = useTransition();

  return (
    <div className="rounded-feuille border border-bord bg-carte p-5 sm:p-6">
      <p className="text-[0.9375rem] leading-relaxed text-encre-douce">
        <strong className="font-bold text-encre">Ce qu’on doit faire</strong>, pas
        ce qui a été dit du dossier&nbsp;: ni diagnostic, ni compte rendu
        d’entretien, rien de médical.
      </p>

      <label htmlFor="consigne-texte" className="mt-5 block text-[0.9375rem] text-encre-douce">
        La consigne, en une phrase qu’on peut appliquer
      </label>
      <input
        id="consigne-texte"
        value={texte}
        maxLength={limites.texte}
        onChange={(e) => {
          setTexte(e.target.value);
          setNotee(false);
        }}
        placeholder="Ce qu’on fait, ou ce qu’on évite de faire."
        className={champ}
      />

      <label htmlFor="consigne-pourquoi" className="mt-4 block text-[0.9375rem] text-encre-douce">
        Pourquoi <span className="text-encre-tenue">— pour qu’elle ne s’applique pas de travers</span>
      </label>
      <textarea
        id="consigne-pourquoi"
        rows={2}
        value={pourquoi}
        maxLength={limites.pourquoi}
        onChange={(e) => setPourquoi(e.target.value)}
        placeholder="La raison donnée, telle qu’on l’a comprise."
        className={`${champ} resize-y leading-relaxed`}
      />

      <label htmlFor="consigne-origine" className="mt-4 block text-[0.9375rem] text-encre-douce">
        D’où elle vient <span className="text-encre-tenue">— sans nom de praticien</span>
      </label>
      <input
        id="consigne-origine"
        value={origine}
        maxLength={limites.origine}
        onChange={(e) => setOrigine(e.target.value)}
        placeholder="Entretien d’octobre"
        className={`${champ} sm:max-w-md`}
      />

      {refusee && (
        /* Ocre, jamais rouge. Le bouton ne s'active qu'avec une consigne et
           les longueurs sont bornées à la saisie : un refus vient presque
           toujours d'une session expirée. */
        <p className="mt-5 text-[0.9375rem] leading-relaxed text-ocre" role="status">
          Ça n’a pas été noté&nbsp;: votre session a pu expirer. Ce que vous avez
          écrit est toujours là.
        </p>
      )}

      <div className="mt-6 flex flex-wrap items-center gap-4">
        <button
          type="button"
          disabled={!texte.trim() || enCours}
          onClick={() =>
            demarrer(async () => {
              const ok = await noterConsigne({ texte, pourquoi, origine });
              if (!ok) {
                setRefusee(true);
                return;
              }
              setTexte("");
              setPourquoi("");
              setOrigine("");
              setRefusee(false);
              setNotee(true);
            })
          }
          className="rounded-full bg-encre px-6 py-3 text-base font-bold text-carte transition-colors hover:bg-encre/85 disabled:cursor-not-allowed disabled:bg-encre-tenue"
        >
          {enCours ? "…" : "L’ajouter aux consignes"}
        </button>
        {notee && (
          <p className="text-[0.9375rem] text-fini" role="status">
            C’est noté.
          </p>
        )}
      </div>
    </div>
  );
}
