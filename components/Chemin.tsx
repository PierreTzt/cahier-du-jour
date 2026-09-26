"use client";

import type { CSSProperties } from "react";
import Link from "next/link";
import { matieres, teintesDe } from "@/lib/data";
import type { EtapeVivante } from "@/lib/journee";

export function Coche({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 16 16" aria-hidden className={className} fill="none">
      <path
        d="M3.5 8.5 6.5 11.5 12.5 4.5"
        stroke="currentColor"
        strokeWidth="2.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

type Props = {
  etapes: EtapeVivante[];
  cloture: null | "terminee" | "arretee";
  /** Affiche le bouton « Commencer » sur l'étape courante. */
  interactif?: boolean;
  /** Rendu réduit, pour le storyboard du scénario. */
  compact?: boolean;
  anime?: boolean;
};

const finLibelle = {
  ouverte: "Fini pour aujourd’hui",
  terminee: "C’est fini.",
  arretee: "On s’arrête là.",
};

/* L'étiquette d'une étape : sa matière, ou « Le test » pour la partie du
   test, qui n'est d'aucune matière. */
const etiquetteDe = (e: EtapeVivante) => (e.test ? "Le test" : matieres[e.matiere].nom);

export default function Chemin({
  etapes,
  cloture,
  interactif = false,
  compact = false,
  anime = true,
}: Props) {
  /* Une étape reportée disparaît purement et simplement de sa vue.
     Elle n'est ni barrée ni grisée : elle n'est plus là. */
  const visibles = etapes.filter((e) => e.etat !== "reportee");

  /* La règle n°2 : la journée tient sur un écran, il doit voir la fin sans
     défiler. Avec trois séances c'était acquis ; la trame de l'année en pose
     sept, et à 768×1024 ça débordait de treize pixels — mesuré, pas supposé.
     Au-delà de cinq étapes, le rythme vertical se resserre donc d'un cran.
     Resserrer est préférable à faire défiler : ce qu'il ne voit pas, il ne
     peut pas savoir que ça finit. */
  const serre = visibles.length > 5;

  const cls = anime ? "deplier" : "";
  const styleDe = (delai: number): CSSProperties | undefined =>
    anime ? { animationDelay: `${delai}ms` } : undefined;

  return (
    <ol
      className={`relative ${compact ? "space-y-3" : serre ? "space-y-2.5" : "space-y-4"}`}
    >
      <span
        aria-hidden
        className={`${anime ? "tracer" : ""} trait-crayon pointer-events-none absolute bottom-5 left-3 top-3 w-[2px] -translate-x-1/2 rounded-full`}
        style={anime ? { animationDelay: "150ms" } : undefined}
      />

      {visibles.map((etape, i) => {
        const t = teintesDe(etape.matiere);
        const retard = styleDe(200 + i * 90);

        if (etape.etat === "fait") {
          return (
            <li key={etape.id} className={`relative flex gap-4 ${cls}`} style={retard}>
              <span className="relative z-10 flex w-6 shrink-0 justify-center pt-0.5">
                <span
                  className={`halo flex h-6 w-6 items-center justify-center rounded-full ${t.puce} ${t.texte} text-feuille`}
                >
                  <Coche className="h-3.5 w-3.5" />
                </span>
              </span>
              <div className="min-w-0">
                <p className={`etiquette ${t.texte}`}>
                  {etiquetteDe(etape)}
                </p>
                <p
                  className={`mt-1 text-encre-douce ${compact || serre ? "text-base" : "text-lg"}`}
                >
                  {etape.titre}
                </p>
                {!compact && (
                  <p className="mt-1 text-sm font-bold text-fini">Fait</p>
                )}
              </div>
            </li>
          );
        }

        if (etape.etat === "maintenant") {
          return (
            <li key={etape.id} className={`relative flex gap-4 ${cls}`} style={retard}>
              <span
                className={`relative z-10 flex w-6 shrink-0 justify-center ${compact ? "pt-4" : "pt-5"}`}
              >
                <span className={`halo h-6 w-6 rounded-full ${t.puce} ${t.texte}`} />
              </span>

              <div
                className={`min-w-0 flex-1 rounded-feuille border border-l-[6px] ${t.bord} ${t.bordG} bg-feuille shadow-[0_12px_32px_-20px_rgba(29,40,54,0.55)] ${
                  compact ? "p-4" : "p-5 sm:p-6"
                }`}
              >
                <p className={`etiquette ${t.texte}`}>
                  Maintenant · {etiquetteDe(etape)}
                </p>

                <h2
                  className={`font-display leading-tight ${
                    compact
                      ? "mt-2 text-xl"
                      : serre
                        ? "mt-1.5 text-xl sm:text-2xl"
                        : "mt-2 text-2xl sm:text-3xl"
                  }`}
                >
                  {etape.titre}
                </h2>

                {etape.reference && (
                  <p
                    className={`text-encre-tenue ${
                    compact || serre ? "mt-1.5 text-xs" : "mt-2.5 text-sm"
                  }`}
                  >
                    {etape.reference}
                  </p>
                )}

                {!compact && (
                  <p
                    className={`leading-relaxed text-encre-douce ${
                      serre ? "mt-2.5 text-[1rem]" : "mt-4 text-[1.0625rem]"
                    }`}
                  >
                    {etape.consigne}
                  </p>
                )}

                {interactif && (
                  <div
                    className={`flex flex-wrap items-center gap-4 ${serre ? "mt-4" : "mt-6"}`}
                  >
                    <Link
                      href={etape.test ? "/questions" : "/etape"}
                      className="rounded-full bg-encre px-6 py-3 text-base font-bold text-feuille transition-colors hover:bg-encre/85"
                    >
                      {etape.commencee ? "Continuer" : "Commencer"}
                    </Link>
                    {/* Rien sur la durée du test : c'est une décision de
                        l'écran du test lui-même, qui ne l'annonce pas. */}
                    {!etape.test && (
                      <span className="text-sm text-encre-tenue">
                        à peu près {etape.minutes} minutes
                      </span>
                    )}
                  </div>
                )}
              </div>
            </li>
          );
        }

        return (
          <li key={etape.id} className={`relative flex gap-4 ${cls}`} style={retard}>
            <span className="relative z-10 flex w-6 shrink-0 justify-center pt-1">
              <span className={`h-4 w-4 rounded-full border-2 ${t.bord} bg-feuille`} />
            </span>
            <div className="min-w-0">
              <p className={`etiquette ${t.texte}`}>
                {etiquetteDe(etape)}
                {etape.parMot && (
                  <span className="ml-2 font-normal normal-case tracking-normal text-encre-tenue">
                    ajouté par {etape.parMot}
                  </span>
                )}
              </p>
              <p
                className={`mt-1 ${t.texte} ${compact || serre ? "text-base" : "text-lg"}`}
              >
                {etape.titre}
              </p>
            </div>
          </li>
        );
      })}

      {/* Le terminus : une butée de fin de voie. */}
      <li
        className={`relative flex items-center gap-4 ${cls}`}
        style={styleDe(200 + visibles.length * 90)}
      >
        <span className="relative z-10 flex w-6 shrink-0 justify-center">
          <span className="h-[3px] w-6 rounded-full bg-encre-douce" />
        </span>
        <p className={`font-display text-encre ${compact ? "text-base" : "text-xl"}`}>
          {cloture ? finLibelle[cloture] : finLibelle.ouverte}
        </p>
      </li>
    </ol>
  );
}
