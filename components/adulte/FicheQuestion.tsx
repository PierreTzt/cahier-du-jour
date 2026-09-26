"use client";

import { useState, useTransition } from "react";
import { classesTeinte } from "@/lib/data";
import { Carte } from "@/components/adulte/Bureau";
import {
  chercherEncore,
  explorer,
  marquerLue,
  noterPreparation,
} from "@/app/gestes/pourquoi";
import type { Domaine, DomaineId, EtatQuestion } from "@/lib/pourquoi";

/** Ce que la page transmet d'une question : du texte, déjà mis en forme. */
export type QuestionDeLAtelier = {
  id: string;
  texte: string;
  etat: EtatQuestion;
  preparation: string;
  /** « lundi 14 septembre » : de ce côté-ci, une date exacte est permise. */
  arrivee: string;
  /** La phrase qu'il lit pour cette question, mot pour mot. */
  ceQuIlLit: string;
};

/** Les prénoms de la famille et le mot qu'il emploie pour chacun. */
export type Appellation = { prenom: string; mot: string };

const echapper = (s: string) => s.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");

/**
 * Les prénoms qu'un récit contient.
 *
 * Le récit devient une carte de sa collection, et l'enfant ne lit jamais un
 * prénom d'adulte : il lit « parrain », « papa », « maman ». Le parrain qui
 * raconte « Casimir avait apporté le ventilateur » l'écrirait sans y penser.
 * On le signale sans bloquer : « pierre » est aussi un mot, et une carte sur
 * les cailloux n'a rien à corriger.
 */
function prenomsDans(recit: string, appellations: Appellation[]) {
  return appellations.filter((a) =>
    new RegExp(`(^|[^\\p{L}])${echapper(a.prenom)}($|[^\\p{L}])`, "iu").test(recit),
  );
}

const bouton =
  "rounded-full bg-encre px-5 py-2.5 text-[0.9375rem] font-bold text-carte transition-colors hover:bg-encre/85 disabled:cursor-not-allowed disabled:bg-encre-tenue";
const boutonDiscret =
  "rounded-full border border-bord-fort bg-carte px-5 py-2.5 text-[0.9375rem] text-encre-douce transition-colors hover:border-encre hover:text-encre disabled:opacity-60";
const champ =
  "mt-2 w-full resize-none rounded-feuille border border-bord-fort bg-carte px-4 py-3 text-[1rem] leading-relaxed text-encre focus:border-encre focus:outline-none";

/**
 * Une question dans l'atelier.
 *
 * Le geste le plus important est le plus petit : « Je l'ai lue » n'accuse pas
 * réception pour le parrain, il fait apparaître une phrase chez l'enfant.
 *
 * « On cherche encore » n'est pas un retard : c'est le moment où l'adulte dit
 * qu'il ne sait pas. Un enfant qui croit que les adultes savent vit dans un
 * monde où ne pas savoir est une anomalie personnelle.
 *
 * `ecrire` n'est vrai que pour le proche, et les actions le revérifient côté
 * serveur : masquer un bouton n'a jamais protégé personne.
 */
export default function FicheQuestion({
  question,
  ecrire,
  domaines,
  appellations,
}: {
  question: QuestionDeLAtelier;
  ecrire: boolean;
  domaines: Domaine[];
  appellations: Appellation[];
}) {
  const [note, setNote] = useState(question.preparation);
  const [noteGardee, setNoteGardee] = useState(false);
  const [explorerOuvert, setExplorerOuvert] = useState(false);
  const [recit, setRecit] = useState("");
  const [domaine, setDomaine] = useState<DomaineId | null>(null);
  const [enCours, demarrer] = useTransition();

  const prenoms = prenomsDans(recit, appellations);

  /* Une note tapée puis suivie d'un autre geste était perdue sans un mot : on
     écrit dans le champ, on clique « On cherche encore », et au rechargement il
     est vide. Chaque geste garde d'abord la note qui attend. */
  const garderLaNoteEnAttente = async () => {
    if (note !== question.preparation) await noterPreparation(question.id, note);
  };

  return (
    <Carte className="p-5 sm:p-6">
      <div className="flex flex-wrap items-baseline justify-between gap-x-5 gap-y-1">
        <p className="font-display text-[1.25rem] leading-snug tracking-tight">{question.texte}</p>
        <p className="shrink-0 text-[0.875rem] text-encre-tenue">arrivée {question.arrivee}</p>
      </div>

      {/* Ce que ses gestes produisent de l'autre côté. Sans ça, « Je l'ai
          lue » ressemble à une case administrative. */}
      <p className="mt-2 text-[0.9375rem] text-encre-tenue">
        Il lit&nbsp;: «&nbsp;{question.ceQuIlLit}&nbsp;»
      </p>

      {!ecrire ? (
        question.preparation && (
          <div className="mt-4 border-l-2 border-bord pl-4">
            <p className="etiquette text-encre-tenue">La préparation</p>
            <p className="mt-1 whitespace-pre-line text-[0.9375rem] leading-relaxed text-encre-douce">
              {question.preparation}
            </p>
          </div>
        )
      ) : question.etat === "deposee" ? (
        /* Un bouton, immédiat, rien à remplir. */
        <button
          type="button"
          disabled={enCours}
          onClick={() => demarrer(() => marquerLue(question.id))}
          className={`mt-4 ${bouton}`}
        >
          Je l’ai lue
        </button>
      ) : (
        <>
          <label htmlFor={`prep-${question.id}`} className="mt-5 block text-[0.9375rem] text-encre-douce">
            Ce que vous préparez — il ne le voit jamais
          </label>
          <textarea
            id={`prep-${question.id}`}
            rows={3}
            maxLength={4000}
            value={note}
            onChange={(e) => {
              setNote(e.target.value);
              setNoteGardee(false);
            }}
            className={champ}
          />

          <div className="mt-4 flex flex-wrap items-center gap-3">
            <button
              type="button"
              disabled={enCours || note === question.preparation}
              onClick={() =>
                demarrer(async () => {
                  if (await noterPreparation(question.id, note)) setNoteGardee(true);
                })
              }
              className={boutonDiscret}
            >
              Garder la note
            </button>
            {noteGardee && <p className="text-[0.9375rem] text-fini">C’est noté.</p>}
          </div>

          <div className="mt-5 flex flex-wrap gap-3 border-t border-bord pt-5">
            <button
              type="button"
              aria-expanded={explorerOuvert}
              onClick={() => setExplorerOuvert(!explorerOuvert)}
              className={bouton}
            >
              On l’a explorée
            </button>
            {question.etat === "lue" && (
              <button
                type="button"
                disabled={enCours}
                onClick={() =>
                  demarrer(async () => {
                    await garderLaNoteEnAttente();
                    await chercherEncore(question.id);
                  })
                }
                className={boutonDiscret}
              >
                On cherche encore
              </button>
            )}
          </div>

          {explorerOuvert && (
            <div className="mt-5 rounded-feuille border border-bord bg-bureau p-5">
              <label htmlFor={`recit-${question.id}`} className="block text-[0.9375rem] text-encre-douce">
                Ce que vous avez fait ensemble — il le relira sur sa carte
              </label>
              <p className="mt-1 text-[0.875rem] leading-relaxed text-encre-tenue">
                Ce qu’on a fait, pas ce qu’il a appris&nbsp;: sinon c’est un bulletin.
                Il ne lit jamais de prénom d’adulte.
              </p>
              <textarea
                id={`recit-${question.id}`}
                rows={4}
                maxLength={4000}
                value={recit}
                onChange={(e) => setRecit(e.target.value)}
                className={champ}
              />
              {prenoms.length > 0 && (
                /* En ocre, jamais en rouge : c'est une remarque, pas une faute. */
                <p className="mt-2 text-[0.9375rem] leading-relaxed text-ocre">
                  {prenoms.map((a, i) => (
                    <span key={a.prenom}>
                      {i > 0 && <>&nbsp;; </>}
                      «&nbsp;{a.prenom}&nbsp;» se lira tel quel — il dit «&nbsp;{a.mot}&nbsp;»
                    </span>
                  ))}
                  .
                </p>
              )}

              <fieldset className="mt-5">
                <legend className="text-[0.9375rem] text-encre-douce">Le domaine</legend>
                <div className="mt-2 flex flex-wrap gap-2">
                  {domaines.map((d) => {
                    const t = classesTeinte[d.teinte] ?? classesTeinte.bleu;
                    const actif = domaine === d.id;
                    return (
                      <button
                        key={d.id}
                        type="button"
                        aria-pressed={actif}
                        onClick={() => setDomaine(d.id)}
                        className={`flex items-center gap-2 rounded-full border px-4 py-2 text-[0.875rem] transition-colors ${
                          actif
                            ? `${t.bord} ${t.fond} font-bold ${t.texte}`
                            : "border-bord-fort bg-carte text-encre-douce hover:border-encre hover:text-encre"
                        }`}
                      >
                        <span className={`h-2.5 w-2.5 rounded-full ${t.puce}`} />
                        {d.libelle}
                      </button>
                    );
                  })}
                </div>
              </fieldset>

              <button
                type="button"
                disabled={enCours || !recit.trim() || domaine === null}
                onClick={() =>
                  demarrer(async () => {
                    if (!domaine) return;
                    await garderLaNoteEnAttente();
                    await explorer(question.id, domaine, recit);
                  })
                }
                className={`mt-5 ${bouton}`}
              >
                Ajouter à sa collection
              </button>
            </div>
          )}
        </>
      )}
    </Carte>
  );
}
