import Link from "next/link";

/**
 * La coquille des écrans d'adulte.
 *
 * « Le fond est bon, la forme ne va pas du tout » — le parrain, en regardant
 * `/pilotage`. Il avait raison, et le diagnostic était identifiable :
 *
 *   - la **réglure** courait sur toute la page. C'est la métaphore du cahier
 *     de l'enfant ; sur un tableau de bord dense, c'est du bruit derrière le
 *     texte ;
 *   - le fond bleu-gris, les lignes bleues, l'encre bleutée et les étiquettes
 *     bleues rendaient tout **uniformément bleu**, donc rien lisible en
 *     priorité ;
 *   - les bordures étaient à **1,31:1** sur le fond, c'est-à-dire invisibles.
 *     D'où l'impression de délavé, qui n'était pas une impression.
 *
 * Le côté des adultes a donc son propre sol : neutre, sans lignes, avec des
 * cartes blanches et des bordures qu'on voit. Et une hiérarchie qui se lit —
 * un titre de page, des titres de section en vrai texte, les micro-étiquettes
 * réservées aux micro-informations.
 *
 * Ce qui ne change pas : les teintes des matières, les règles sur ce que
 * l'enfant ne doit pas voir, et l'absence totale de rouge.
 */

export function Bureau({
  titre,
  qui,
  chapeau,
  actions,
  children,
}: {
  titre: React.ReactNode;
  /** « Anatole · Papa », au-dessus du titre. */
  qui: string;
  /** Une phrase sous le titre. Ce que cet écran sert à faire. */
  chapeau?: React.ReactNode;
  /** Les liens ou boutons de tête de page. */
  actions?: React.ReactNode;
  children: React.ReactNode;
}) {
  return (
    <main className="flex-1 bg-bureau">
      <div className="mx-auto max-w-5xl px-5 pb-24 pt-8 sm:px-8 sm:pt-12">
        <header className="border-b border-bord pb-6">
          {/* Qui regarde, et les liens : rien de tout ça ne s'imprime. La
              feuille du matin portait « Modifier la journée » et le prénom
              de l'adulte connecté. */}
          <p className="sans-impression text-[0.9375rem] text-encre-tenue">{qui}</p>
          <div className="mt-2 flex flex-wrap items-end justify-between gap-x-6 gap-y-3">
            <h1 className="font-display text-[2rem] leading-[1.1] tracking-tight sm:text-[2.5rem]">
              {titre}
            </h1>
            {actions && (
              <div className="sans-impression flex flex-wrap items-center gap-x-5 gap-y-2">
                {actions}
              </div>
            )}
          </div>
          {chapeau && (
            <p className="mt-3 max-w-3xl text-[1.0625rem] leading-relaxed text-encre-douce">
              {chapeau}
            </p>
          )}
        </header>

        {children}
      </div>
    </main>
  );
}

/**
 * Une section de l'écran.
 *
 * Un vrai titre, pas une micro-étiquette en capitales : sur une page longue,
 * c'est la seule chose qui permette de trouver où l'on est. Les étiquettes
 * restent pour ce qu'elles font bien — nommer un chiffre, une matière, un état.
 */
export function Section({
  titre,
  aide,
  actions,
  id,
  children,
}: {
  titre: string;
  /** Une ligne qui dit à quoi sert la section. Facultatif. */
  aide?: React.ReactNode;
  actions?: React.ReactNode;
  /** Pour y sauter depuis le haut de la page. */
  id?: string;
  children: React.ReactNode;
}) {
  return (
    <section id={id} className="mt-12 scroll-mt-4">
      <div className="flex flex-wrap items-baseline justify-between gap-x-6 gap-y-2">
        <h2 className="font-display text-[1.375rem] leading-snug tracking-tight sm:text-[1.5rem]">
          {titre}
        </h2>
        {actions}
      </div>
      {aide && (
        <p className="mt-2 max-w-3xl text-[0.9375rem] leading-relaxed text-encre-tenue">
          {aide}
        </p>
      )}
      <div className="mt-5">{children}</div>
    </section>
  );
}

/** Une carte blanche, avec une bordure qui se voit. */
export function Carte({
  children,
  accent,
  className = "",
}: {
  children: React.ReactNode;
  /**
   * Ce qui se distingue d'une carte ordinaire. Ce n'est plus une bande de
   * couleur à gauche — le tic de toutes les interfaces générées, relevé par
   * le détecteur le 21 septembre 2026 — mais la carte elle-même :
   *
   *   - `ocre` : ce qui demande l'attention, bordé et à peine teinté d'ocre ;
   *   - `fini` : pareil, en vert ;
   *   - `neutre` : un encart qui explique, en contour seul, sans le blanc
   *     d'une carte — on oppose la présence de la carte, pas sa teinte.
   */
  accent?: "ocre" | "fini" | "neutre";
  className?: string;
}) {
  const allure =
    accent === "ocre"
      ? "border-ocre/60 bg-[color-mix(in_oklab,var(--color-ocre)_6%,white)]"
      : accent === "fini"
        ? "border-fini/60 bg-[color-mix(in_oklab,var(--color-fini)_6%,white)]"
        : accent === "neutre"
          ? "border-bord-fort bg-transparent"
          : "border-bord bg-carte";
  return (
    <div className={`rounded-feuille border ${allure} ${className}`}>
      {children}
    </div>
  );
}

/** Un chiffre et ce qu'il compte. Les compteurs sont permis de ce côté-ci. */
export function Chiffre({
  n,
  quoi,
  teinte,
}: {
  n: React.ReactNode;
  quoi: string;
  teinte?: string;
}) {
  return (
    <div>
      <dt
        className={`chiffres font-display text-[2.25rem] leading-none ${teinte ?? ""}`}
      >
        {n}
      </dt>
      <dd className="mt-1.5 text-[0.875rem] leading-snug text-encre-douce">
        {quoi}
      </dd>
    </div>
  );
}

/** Un lien de tête de page. */
export function LienTete({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) {
  return (
    <Link
      href={href}
      /* 44 px de haut au téléphone : c'est au pouce qu'on le vise. */
      className="-my-2.5 inline-flex min-h-11 items-center text-[0.9375rem] text-encre-douce underline decoration-bord-fort underline-offset-4 transition-colors hover:text-encre sm:my-0 sm:inline sm:min-h-0"
    >
      {children}
    </Link>
  );
}
