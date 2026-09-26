"use client";

import { useState, useTransition } from "react";
import { poserRendezVous, retirerRendezVous } from "@/app/gestes/pourquoi";
import type { RendezVous as LeRendezVous } from "@/lib/pourquoi";

const champ =
  "mt-2 w-full rounded-feuille border border-bord-fort bg-carte px-4 py-3 text-[1.0625rem] text-encre focus:border-encre focus:outline-none";

/**
 * Le prochain rendez-vous, dans l'atelier.
 *
 * Le filet : les semaines où la boîte reste vide, c'est le parrain qui
 * propose. Chez l'enfant, ça devient une ligne sous son chemin — sans case à
 * cocher, sans compte à rebours.
 *
 * Deux textes libres et courts plutôt qu'un calendrier : « samedi » se lit
 * comme une promesse, « dans 3 jours » comme un décompte. Aucun des deux champs
 * ne propose d'exemple : ce qui s'afficherait chez l'enfant doit venir du
 * parrain, pas d'un texte de remplissage.
 *
 * Un rendez-vous ne s'efface pas tout seul — « samedi » ne dit pas quel samedi.
 * C'est pourquoi les adultes voient le jour où il a été posé : un rendez-vous
 * d'il y a dix jours est probablement passé, et c'est au parrain de le retirer
 * avant que l'enfant attende quelqu'un qui ne vient pas.
 */
export default function RendezVous({
  rendezVous,
  ceQuIlLit,
  poseLe,
  ecrire,
  qui,
}: {
  rendezVous: LeRendezVous | null;
  /** La ligne telle qu'il la lit sous sa journée, déjà composée par la page. */
  ceQuIlLit: { quand: string; phrase: string } | null;
  /** « lundi 14 septembre ». */
  poseLe: string | null;
  /** Vrai pour le proche seulement ; les gestes le revérifient côté serveur. */
  ecrire: boolean;
  /** Le prénom du proche, pour les parents qui lisent : « Casimir vient… ». */
  qui: string | null;
}) {
  const [quand, setQuand] = useState(rendezVous?.quand ?? "");
  const [quoi, setQuoi] = useState(rendezVous?.quoi ?? "");
  const [pose, setPose] = useState(false);
  const [enCours, demarrer] = useTransition();

  const inchange =
    rendezVous !== null && quand.trim() === rendezVous.quand && quoi.trim() === rendezVous.quoi;

  return (
    <div>
      {ceQuIlLit ? (
        <div className="rounded-feuille border border-bord bg-carte p-5">
          <p className="text-[0.9375rem] text-encre-tenue">
            {ecrire || !qui ? "Sous sa journée, il lit" : `${qui} a posé ce rendez-vous. Sous sa journée, il lit`}
            &nbsp;:
          </p>
          <p className="mt-2 flex flex-wrap items-baseline gap-x-3">
            <span className="etiquette text-sarcelle">{ceQuIlLit.quand}</span>
            <span className="text-[1.0625rem] text-encre">{ceQuIlLit.phrase}</span>
          </p>
          {poseLe && (
            <p className="mt-2 text-[0.875rem] text-encre-tenue">Posé {poseLe}.</p>
          )}
        </div>
      ) : (
        <p className="text-[1.0625rem] leading-relaxed text-encre-douce">
          Rien de prévu pour l’instant. Sous sa journée, il n’y a donc rien — pas
          même une place vide.
        </p>
      )}

      {ecrire && (
        <div className="mt-6">
          <div className="grid gap-4 sm:grid-cols-[12rem_1fr]">
            <div>
              <label htmlFor="rdv-quand" className="block text-[0.9375rem] text-encre-douce">
                Quand, comme vous le lui diriez
              </label>
              <input
                id="rdv-quand"
                maxLength={40}
                value={quand}
                onChange={(e) => {
                  setQuand(e.target.value);
                  setPose(false);
                }}
                className={champ}
              />
            </div>
            <div>
              <label htmlFor="rdv-quoi" className="block text-[0.9375rem] text-encre-douce">
                On va regarder…
              </label>
              <input
                id="rdv-quoi"
                maxLength={90}
                value={quoi}
                onChange={(e) => {
                  setQuoi(e.target.value);
                  setPose(false);
                }}
                className={champ}
              />
            </div>
          </div>

          <p className="mt-3 text-[0.875rem] leading-relaxed text-encre-tenue">
            Court, et sans date à compter&nbsp;: la ligne doit tenir sous sa journée,
            qui tient sur un écran.
          </p>

          <div className="mt-5 flex flex-wrap items-center gap-4">
            <button
              type="button"
              disabled={enCours || !quand.trim() || !quoi.trim() || inchange}
              onClick={() =>
                demarrer(async () => {
                  if (await poserRendezVous(quand, quoi)) setPose(true);
                })
              }
              className="rounded-full bg-encre px-6 py-3 text-base font-bold text-carte transition-colors hover:bg-encre/85 disabled:cursor-not-allowed disabled:bg-encre-tenue"
            >
              {rendezVous ? "Le changer" : "Le poser sous sa journée"}
            </button>
            {rendezVous && (
              <button
                type="button"
                disabled={enCours}
                onClick={() =>
                  demarrer(async () => {
                    await retirerRendezVous();
                    setQuand("");
                    setQuoi("");
                    setPose(false);
                  })
                }
                className="text-[0.9375rem] text-encre-douce underline decoration-bord-fort underline-offset-4 transition-colors hover:text-encre disabled:opacity-60"
              >
                Le retirer
              </button>
            )}
            {pose && <p className="text-[0.9375rem] text-fini">C’est posé.</p>}
          </div>
        </div>
      )}
    </div>
  );
}
