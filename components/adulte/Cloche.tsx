"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

/**
 * La cloche du bandeau : des leçons qu'il a faites seul méritent d'être
 * retravaillées, et vous ne les avez pas encore vues.
 *
 * Demandée par un parent le 21 septembre 2026 — « une petite cloche sur
 * l'écran, et quand il clique dessus, tout l'historique ». Le seuil et ce
 * qu'elle compte sont dans `lib/a-reprendre.ts` ; ici, seulement deux nombres.
 *
 * Elle s'éteint dès qu'on ouvre la page, sans attendre le serveur : le bandeau
 * n'est pas relu d'une page à l'autre, et une cloche qui reste allumée après
 * qu'on l'a ouverte ferait croire qu'il reste autre chose à voir. Elle se
 * rallume quand le serveur annonce une leçon plus récente que celle qu'on a vue.
 *
 * Pas de rouge (règle n° 4) : la pastille est couleur miel. Ce n'est pas une
 * faute, c'est du travail à reprendre.
 */
export default function Cloche({
  nouveaux,
  dernier,
}: {
  /** Les leçons qui sonnent et que cette personne n'a pas vues. */
  nouveaux: number;
  /** Le moment de la plus récente, en secondes. */
  dernier: number;
}) {
  const ici = usePathname() === "/a-reprendre";
  const [vueJusqua, setVueJusqua] = useState(0);
  if (ici && vueJusqua < dernier) setVueJusqua(dernier);

  const allumee = nouveaux > 0 && !ici && dernier > vueJusqua;
  const dit = allumee
    ? `À reprendre : ${nouveaux} leçon${nouveaux > 1 ? "s" : ""} à regarder`
    : "À reprendre";

  return (
    <Link
      href="/a-reprendre"
      aria-label={dit}
      title={dit}
      aria-current={ici ? "page" : undefined}
      className={`relative inline-flex size-11 items-center justify-center rounded-full sm:size-8 transition-colors hover:bg-papier/10 hover:text-papier ${
        allumee || ici ? "text-papier" : "text-papier/80"
      }`}
    >
      <svg
        viewBox="0 0 24 24"
        width="19"
        height="19"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden
      >
        <path d="M6 16v-5a6 6 0 0 1 12 0v5l1.5 2h-15z" />
        <path d="M10 20.5a2 2 0 0 0 4 0" />
      </svg>
      {allumee && (
        <span
          aria-hidden
          className="chiffres absolute -right-1 -top-0.5 flex h-[18px] min-w-[18px] items-center justify-center rounded-full bg-miel px-1 text-[0.6875rem] font-bold leading-none text-encre"
        >
          {nouveaux}
        </span>
      )}
    </Link>
  );
}
