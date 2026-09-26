"use client";

import { useState, useTransition } from "react";
import { useBrouillon } from "@/lib/brouillon";
import { noterSortie } from "@/app/gestes/sorties";
import { matieres, type MatiereId } from "@/lib/data";

/**
 * Le formulaire d'une sortie.
 *
 * Le champ qui compte est « ce qui s'y est passé » : un contrôle ne retient pas
 * qu'on est allé au musée, il retient ce qui y a été travaillé. Le vocabulaire
 * reste descriptif — le relevé ne prétend rien, il décrit.
 *
 * Les limites de longueur arrivent du composant serveur plutôt que d'être
 * importées : `lib/sorties.ts` parle à Postgres, et l'importer ici tirerait
 * `pg` jusque dans le navigateur.
 */

const ordre = Object.keys(matieres) as MatiereId[];

const champ =
  "mt-2 w-full rounded-feuille border border-bord-fort bg-carte px-4 py-3 text-[1.0625rem] text-encre placeholder:text-encre-tenue focus:border-encre focus:outline-none";

export default function FormulaireSortie({
  jour,
  limites,
}: {
  /** Le jour affiché dans le pilotage : la date proposée par défaut. */
  jour: string;
  limites: { titre: number; lieu: number; quoi: number };
}) {
  const [ouvert, setOuvert] = useState(false);
  const [titre, setTitre] = useState("");
  const [lieu, setLieu] = useState("");
  const [quoi, setQuoi] = useBrouillon("sortie-quoi");
  const [date, setDate] = useState(jour);
  const [choisies, setChoisies] = useState<MatiereId[]>([]);
  const [notee, setNotee] = useState<string | null>(null);
  const [refusee, setRefusee] = useState(false);
  const [enCours, demarrer] = useTransition();

  function bascule(id: MatiereId) {
    setChoisies((m) => (m.includes(id) ? m.filter((x) => x !== id) : [...m, id]));
  }

  if (!ouvert) {
    return (
      <div className="flex flex-wrap items-center gap-4">
        <button
          type="button"
          onClick={() => {
            /* La date se recale à l'ouverture : on a pu changer de jour dans
               le pilotage depuis la dernière sortie, et ce composant, lui, a
               gardé son état. */
            setDate(jour);
            setNotee(null);
            setRefusee(false);
            setOuvert(true);
          }}
          className="rounded-full border border-bord-fort bg-carte px-5 py-2.5 text-[0.9375rem] text-encre-douce transition-colors hover:border-encre hover:text-encre"
        >
          + Noter une sortie
        </button>
        {notee && (
          <p className="text-[0.9375rem] text-fini" role="status">
            «&nbsp;{notee}&nbsp;» est notée.
          </p>
        )}
      </div>
    );
  }

  return (
    <div className="rounded-feuille border border-bord bg-carte p-5 sm:p-6">
      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label htmlFor="sortie-titre" className="block text-[0.9375rem] text-encre-douce">
            Ce que c’était
          </label>
          <input
            id="sortie-titre"
            value={titre}
            maxLength={limites.titre}
            onChange={(e) => setTitre(e.target.value)}
            placeholder="Un marché, un musée, un chantier…"
            className={champ}
          />
        </div>
        <div>
          <label htmlFor="sortie-lieu" className="block text-[0.9375rem] text-encre-douce">
            Où <span className="text-encre-tenue">— facultatif</span>
          </label>
          <input
            id="sortie-lieu"
            value={lieu}
            maxLength={limites.lieu}
            onChange={(e) => setLieu(e.target.value)}
            className={champ}
          />
        </div>
      </div>

      <label htmlFor="sortie-quoi" className="mt-4 block text-[0.9375rem] text-encre-douce">
        Ce qui s’y est passé, et ce que ça travaillait
      </label>
      <p id="sortie-quoi-aide" className="mt-1 text-[0.875rem] leading-relaxed text-encre-tenue">
        Ce qu’il a fait, regardé, demandé&nbsp;: décrit, pas noté. C’est ce que
        le contrôle retiendra.
      </p>
      <textarea
        id="sortie-quoi"
        aria-describedby="sortie-quoi-aide"
        rows={3}
        value={quoi}
        maxLength={limites.quoi}
        onChange={(e) => setQuoi(e.target.value)}
        className={`${champ} resize-y leading-relaxed`}
      />

      <label htmlFor="sortie-date" className="mt-4 block text-[0.9375rem] text-encre-douce">
        Quand
      </label>
      <input
        id="sortie-date"
        type="date"
        value={date}
        onChange={(e) => setDate(e.target.value)}
        className={`${champ} sm:max-w-xs`}
      />

      <fieldset className="mt-5">
        <legend className="text-[0.9375rem] text-encre-douce">
          Les matières que ça touchait{" "}
          <span className="text-encre-tenue">
            — sans rien cocher, elle compte «&nbsp;à la maison&nbsp;»
          </span>
        </legend>
        <div className="mt-2 flex flex-wrap gap-2">
          {ordre.map((id) => {
            const actif = choisies.includes(id);
            return (
              <button
                key={id}
                type="button"
                aria-pressed={actif}
                onClick={() => bascule(id)}
                className={`rounded-full border px-4 py-2 text-[0.875rem] transition-colors ${
                  actif
                    ? "border-encre bg-encre font-bold text-carte"
                    : "border-bord-fort text-encre-douce hover:border-encre hover:text-encre"
                }`}
              >
                {matieres[id].nom}
              </button>
            );
          })}
        </div>
      </fieldset>

      {refusee && (
        /* Pas de rouge : ocre, comme tout ce qui demande l'attention. Le
           bouton ne s'active qu'avec un titre et « ce qui s'est passé », donc
           un refus vient de la date ou d'une session expirée. */
        <p className="mt-5 text-[0.9375rem] leading-relaxed text-ocre" role="status">
          Ça n’a pas été noté. La date est-elle juste&nbsp;? Sinon, votre session
          a pu expirer. Ce que vous avez écrit est toujours là.
        </p>
      )}

      <div className="mt-6 flex flex-wrap gap-3">
        <button
          type="button"
          disabled={!titre.trim() || !quoi.trim() || !date || enCours}
          onClick={() =>
            demarrer(async () => {
              const ok = await noterSortie({
                titre,
                lieu,
                quoi,
                jour: date,
                /* Dans l'ordre des matières, pas dans l'ordre des clics : deux
                   sorties identiques s'écrivent pareil. */
                matieres: ordre.filter((m) => choisies.includes(m)),
              });
              if (!ok) {
                setRefusee(true);
                return;
              }
              setNotee(titre.trim());
              setTitre("");
              setLieu("");
              setQuoi("");
              setChoisies([]);
              setRefusee(false);
              setOuvert(false);
            })
          }
          className="rounded-full bg-encre px-6 py-3 text-base font-bold text-carte transition-colors hover:bg-encre/85 disabled:cursor-not-allowed disabled:bg-encre-tenue"
        >
          {enCours ? "…" : "Noter la sortie"}
        </button>
        <button
          type="button"
          onClick={() => setOuvert(false)}
          className="rounded-full border border-bord-fort px-5 py-3 text-[0.9375rem] text-encre-douce transition-colors hover:border-encre hover:text-encre"
        >
          Annuler
        </button>
      </div>
    </div>
  );
}
