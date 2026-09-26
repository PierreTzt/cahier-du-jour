"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import SeDeconnecter from "@/components/SeDeconnecter";
import { OUVRIR_MODE_EMPLOI } from "@/components/adulte/ModeDEmploi";

/**
 * Le bandeau des adultes, au téléphone.
 *
 * Un parent fait tout depuis son téléphone. Le bandeau de l'ordinateur y
 * prenait quatre lignes — dix portes, la cloche, le mode d'emploi, le nom,
 * « Quitter » —, un cinquième de l'écran sur chaque page, avec des liens de
 * 28 px de haut (critique du 21 septembre 2026). Au téléphone il ne garde
 * que ce qui sert tous les jours — La journée et la cloche — et un « Menu »
 * pour le reste.
 *
 * Le menu range à part ce qui est pensé pour un ordinateur (`ordinateur` dans
 * `lib/mode-emploi.ts`) sans le fermer : une page qui refuse de s'ouvrir
 * ressemble à une panne (décision du parrain, le même jour).
 *
 * Les portes viennent de la même liste que le mode d'emploi, donc du bandeau
 * de l'ordinateur : elles ne peuvent pas diverger. Rien de tout ça ne
 * s'affiche au-delà de `sm`.
 */
export type Porte = { chemin: string; nom: string; ordinateur?: true };

const JOURNEE = "/pilotage";

const lienDuMenu =
  "flex min-h-11 items-center rounded-lg px-3 text-[0.9375rem] text-papier/85 transition-colors hover:bg-papier/10 hover:text-papier aria-[current=page]:bg-papier/15 aria-[current=page]:font-bold aria-[current=page]:text-papier";

export default function MenuTelephone({
  portes,
  qui,
}: {
  /** Les portes du bandeau, La journée comprise. */
  portes: Porte[];
  /** « Anatole · Papa ». */
  qui: string;
}) {
  const chemin = usePathname();
  const [ouvert, setOuvert] = useState(false);
  const [cheminVu, setCheminVu] = useState(chemin);
  const bouton = useRef<HTMLButtonElement>(null);
  const panneau = useRef<HTMLDivElement>(null);

  /* Une page atteinte referme le menu. */
  if (chemin !== cheminVu) {
    setCheminVu(chemin);
    setOuvert(false);
  }

  /* Échap, ou un toucher ailleurs, le referment aussi. */
  useEffect(() => {
    if (!ouvert) return;
    const clavier = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setOuvert(false);
        bouton.current?.focus();
      }
    };
    const ailleurs = (e: PointerEvent) => {
      const cible = e.target as Node;
      if (!panneau.current?.contains(cible) && !bouton.current?.contains(cible)) setOuvert(false);
    };
    document.addEventListener("keydown", clavier);
    document.addEventListener("pointerdown", ailleurs);
    return () => {
      document.removeEventListener("keydown", clavier);
      document.removeEventListener("pointerdown", ailleurs);
    };
  }, [ouvert]);

  const autres = portes.filter((p) => p.chemin !== JOURNEE);
  const auTelephone = autres.filter((p) => !p.ordinateur);
  const surOrdinateur = autres.filter((p) => p.ordinateur);

  const lien = (p: Porte) => (
    <li key={p.chemin}>
      <Link
        href={p.chemin}
        aria-current={chemin === p.chemin ? "page" : undefined}
        className={lienDuMenu}
      >
        {p.nom}
      </Link>
    </li>
  );

  return (
    <>
      <Link
        href={JOURNEE}
        aria-current={chemin === JOURNEE ? "page" : undefined}
        className="order-first -ml-1 flex min-h-11 items-center rounded-lg px-1 font-display text-[1.1875rem] leading-none tracking-tight text-papier sm:hidden"
      >
        La journée
      </Link>

      <button
        ref={bouton}
        type="button"
        aria-expanded={ouvert}
        aria-controls="menu-adulte"
        onClick={() => setOuvert((o) => !o)}
        className="order-last -mr-1 flex min-h-11 items-center gap-2 rounded-lg px-3 text-[0.9375rem] text-papier transition-colors hover:bg-papier/10 aria-expanded:bg-papier/15 sm:hidden"
      >
        <svg
          viewBox="0 0 24 24"
          width="18"
          height="18"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
          aria-hidden
        >
          {ouvert ? (
            <path d="M6 6l12 12M18 6L6 18" />
          ) : (
            <path d="M4 7h16M4 12h16M4 17h16" />
          )}
        </svg>
        Menu
      </button>

      <div
        ref={panneau}
        id="menu-adulte"
        hidden={!ouvert}
        className="apparaitre absolute inset-x-0 top-full z-30 border-t border-papier/15 bg-encre px-3 pb-4 pt-2 shadow-[0_12px_24px_-12px_rgb(29_40_54/0.6)] sm:hidden"
      >
        <nav aria-label="Les autres pages">
          <ul className="grid grid-cols-2 gap-x-2">{auTelephone.map(lien)}</ul>
          {surOrdinateur.length > 0 && (
            <>
              <p className="mt-3 px-3 pb-1 text-[0.8125rem] text-papier/65">
                Mieux sur un ordinateur — tout reste lisible ici, en plus long
              </p>
              <ul className="grid grid-cols-2 gap-x-2">{surOrdinateur.map(lien)}</ul>
            </>
          )}
        </nav>
        <div className="mt-3 flex flex-wrap items-center justify-between gap-x-3 border-t border-papier/15 pt-2">
          <button
            type="button"
            onClick={() => {
              setOuvert(false);
              window.dispatchEvent(new Event(OUVRIR_MODE_EMPLOI));
            }}
            className="flex min-h-11 items-center rounded-lg px-3 text-[0.9375rem] text-papier/85 transition-colors hover:bg-papier/10 hover:text-papier"
          >
            <span
              aria-hidden
              className="mr-1.5 inline-grid size-4 place-items-center rounded-full border border-current text-[0.625rem] font-bold leading-none"
            >
              ?
            </span>
            Mode d’emploi
          </button>
          <span className="flex items-center">
            <span className="text-[0.8125rem] text-papier/65">{qui}</span>
            <span className="flex items-center [&>button]:min-h-11">
              <SeDeconnecter clair />
            </span>
          </span>
        </div>
      </div>
    </>
  );
}
