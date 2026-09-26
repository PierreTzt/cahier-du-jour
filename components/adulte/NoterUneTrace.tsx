"use client";

import { useState, useTransition } from "react";
import { matieres, type MatiereId } from "@/lib/data";
import { noterUneTrace } from "@/app/gestes/valorisation";

/**
 * Mettre une chose dans le cahier de l'enfant.
 *
 * Fermé par défaut, comme dans le POC : la trace est occasionnelle par
 * nature, et un formulaire toujours ouvert sur le bureau se lit comme une
 * case à remplir chaque jour. Rien n'en attend une par jour, donc rien ne
 * peut manquer.
 *
 * Aucune matière choisie d'avance : c'est elle qui colore la carte qu'il
 * verra, et une valeur par défaut qu'on oublie de changer met le volcan en
 * français.
 */
export default function NoterUneTrace() {
  const [ouvert, setOuvert] = useState(false);
  const [titre, setTitre] = useState("");
  const [quoi, setQuoi] = useState("");
  const [matiere, setMatiere] = useState<MatiereId | null>(null);
  const [ajoutee, setAjoutee] = useState<string | null>(null);
  const [refusee, setRefusee] = useState(false);
  const [enCours, demarrer] = useTransition();

  if (!ouvert) {
    return (
      <div className="flex flex-wrap items-center gap-4">
        <button
          type="button"
          onClick={() => {
            setOuvert(true);
            setAjoutee(null);
          }}
          className="rounded-full border border-bord-fort bg-carte px-5 py-2.5 text-[0.9375rem] text-encre-douce transition-colors hover:border-encre hover:text-encre"
        >
          + Mettre quelque chose dans son cahier
        </button>
        {ajoutee && (
          <p className="text-[0.9375rem] text-fini">
            «&nbsp;{ajoutee}&nbsp;» est dans son cahier.
          </p>
        )}
      </div>
    );
  }

  const pret = titre.trim() !== "" && quoi.trim() !== "" && matiere !== null;

  return (
    <div className="rounded-feuille border border-bord bg-carte p-5 sm:p-6">
      <label htmlFor="trace-titre" className="block text-[0.9375rem] text-encre-douce">
        Ce que c’est — il le lira en titre
      </label>
      <input
        id="trace-titre"
        value={titre}
        maxLength={200}
        onChange={(e) => {
          setTitre(e.target.value);
          setRefusee(false);
        }}
        placeholder="Le volcan"
        className="mt-2 w-full rounded-feuille border border-bord-fort bg-carte px-4 py-3 text-lg text-encre placeholder:text-encre-tenue focus:border-encre focus:outline-none"
      />

      <label htmlFor="trace-quoi" className="mt-4 block text-[0.9375rem] text-encre-douce">
        Ce qu’il a fait, dans vos mots — il le relira
      </label>
      <textarea
        id="trace-quoi"
        rows={3}
        maxLength={2000}
        value={quoi}
        onChange={(e) => {
          setQuoi(e.target.value);
          setRefusee(false);
        }}
        placeholder="Bicarbonate, vinaigre, et la moitié de la cuisine à nettoyer…"
        className="mt-2 w-full resize-none rounded-feuille border border-bord-fort bg-carte px-4 py-3 text-[1.0625rem] leading-relaxed text-encre placeholder:text-encre-tenue focus:border-encre focus:outline-none"
      />

      <fieldset className="mt-5">
        <legend className="text-[0.9375rem] text-encre-douce">
          La matière — elle donne la couleur de la carte, rien d’autre
        </legend>
        <div className="mt-2 flex flex-wrap gap-2">
          {Object.values(matieres).map((m) => (
            <button
              key={m.id}
              type="button"
              aria-pressed={matiere === m.id}
              onClick={() => setMatiere(m.id)}
              className={`rounded-full border px-4 py-2 text-[0.875rem] transition-colors ${
                matiere === m.id
                  ? "border-encre bg-encre font-bold text-carte"
                  : "border-bord-fort text-encre-douce hover:border-encre hover:text-encre"
              }`}
            >
              {m.nom}
            </button>
          ))}
        </div>
      </fieldset>

      <div className="mt-6 flex flex-wrap items-center gap-3">
        <button
          type="button"
          disabled={!pret || enCours}
          onClick={() =>
            demarrer(async () => {
              const ok = await noterUneTrace({ titre, quoi, matiere: matiere ?? "" });
              if (!ok) {
                setRefusee(true);
                return;
              }
              setAjoutee(titre.trim());
              setTitre("");
              setQuoi("");
              setMatiere(null);
              setOuvert(false);
            })
          }
          className="rounded-full bg-encre px-6 py-3 text-base font-bold text-carte transition-colors hover:bg-encre/85 disabled:cursor-not-allowed disabled:bg-encre-tenue"
        >
          Mettre dans son cahier
        </button>
        <button
          type="button"
          onClick={() => setOuvert(false)}
          className="rounded-full border border-bord-fort px-5 py-3 text-[0.9375rem] text-encre-douce transition-colors hover:border-encre hover:text-encre"
        >
          Annuler
        </button>
        {refusee && (
          <p className="text-[0.9375rem] text-encre-douce">
            Elle n’a pas été enregistrée. Votre texte est encore là&nbsp;:
            copiez-le avant de recharger la page.
          </p>
        )}
      </div>
    </div>
  );
}
