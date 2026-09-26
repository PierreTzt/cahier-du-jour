"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { matieres, teintesDe, type MatiereId } from "@/lib/data";

/**
 * Parcourir les cent treize leçons, et en ouvrir une.
 *
 * Voisine de `Bibliotheque`, et ce n'est pas un doublon : celle-ci sert à
 * **lire**, l'autre à **poser**. Les deux gestes n'ont ni le même endroit ni le
 * même moment — on lit une leçon de novembre en septembre, on la pose le jour
 * où on la donne — et les fusionner donnerait un composant qui fait mal les
 * deux.
 *
 * Filtrer par matière et par période, chercher par mot, et rien d'autre. Pas
 * de tri, pas de favoris : chaque réglage ajouté est un réglage à comprendre.
 */

export type LeconAuManuel = {
  code: string;
  matiere: string;
  periode: number;
  titre: string;
  minutes: number;
  exercices: number;
  /** La date en français du premier jour où elle a été donnée, ou `null`. */
  dejaLe: string | null;
  reserveeAuxParents: boolean;
};

const PERIODES = [1, 2, 3, 4, 5] as const;

const QUAND: Record<number, string> = {
  1: "septembre – octobre",
  2: "novembre – décembre",
  3: "janvier – février",
  4: "mars – avril",
  5: "mai – juin",
};

/* Sans accents ni casse : on cherche « ecole » et on trouve « école ». */
const net = (s: string) =>
  s
    .toLowerCase()
    .normalize("NFD")
    .replace(/[̀-ͯ]/g, "");

export default function ParcourirLeManuel({
  lecons,
}: {
  lecons: LeconAuManuel[];
}) {
  const [matiere, setMatiere] = useState<MatiereId | "toutes">("toutes");
  const [periode, setPeriode] = useState<number | "toutes">("toutes");
  const [recherche, setRecherche] = useState("");

  const matieresPresentes = useMemo(() => {
    const vues = new Set(lecons.map((l) => l.matiere));
    return (Object.keys(matieres) as MatiereId[]).filter((m) => vues.has(m));
  }, [lecons]);

  const resultats = useMemo(() => {
    const mots = net(recherche).trim();
    return lecons.filter(
      (l) =>
        (matiere === "toutes" || l.matiere === matiere) &&
        (periode === "toutes" || l.periode === periode) &&
        (mots === "" || net(l.titre).includes(mots)),
    );
  }, [lecons, matiere, periode, recherche]);

  const puce = (m: string) =>
    matieres[m as MatiereId] ? teintesDe(m as MatiereId).puce : "bg-encre-tenue";

  return (
    <div>
      <div className="flex flex-wrap gap-2">
        <Onglet actif={matiere === "toutes"} onClick={() => setMatiere("toutes")}>
          Toutes les matières
        </Onglet>
        {matieresPresentes.map((m) => (
          <Onglet
            key={m}
            actif={matiere === m}
            onClick={() => setMatiere(m)}
          >
            {matieres[m].nom}
          </Onglet>
        ))}
      </div>

      <div className="mt-3 flex flex-wrap gap-2">
        <Onglet actif={periode === "toutes"} onClick={() => setPeriode("toutes")}>
          Toute l’année
        </Onglet>
        {PERIODES.map((p) => (
          <Onglet key={p} actif={periode === p} onClick={() => setPeriode(p)}>
            P{p} · {QUAND[p]}
          </Onglet>
        ))}
      </div>

      <input
        type="search"
        value={recherche}
        onChange={(e) => setRecherche(e.target.value)}
        placeholder="Chercher un titre — « fractions », « verbe », « Moyen Âge »…"
        aria-label="Chercher une leçon"
        className="mt-4 w-full rounded-feuille border border-bord-fort bg-carte px-4 py-2.5 text-[1rem] text-encre placeholder:text-encre-tenue focus:border-encre focus:outline-none"
      />

      <p className="chiffres mt-5 text-[0.875rem] text-encre-tenue">
        {resultats.length === 0
          ? "Aucune leçon ne correspond."
          : `${resultats.length} leçon${resultats.length > 1 ? "s" : ""}`}
      </p>

      <ul className="mt-2">
        {resultats.map((l) => (
          <li key={l.code} className="border-b border-bord">
            <Link
              href={`/manuel/${l.code}`}
              className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1 py-3 transition-colors hover:bg-carte"
            >
              <span className="flex-1 text-[1.0625rem] text-encre">
                <span
                  className={`mr-2.5 inline-block h-2 w-2 rounded-full align-middle ${puce(l.matiere)}`}
                  aria-hidden
                />
                {l.titre}
                <span className="chiffres ml-3 whitespace-nowrap text-[0.875rem] text-encre-tenue">
                  P{l.periode} · {l.exercices} ex. · {l.minutes} min
                </span>
                {l.reserveeAuxParents && (
                  <span className="ml-3 whitespace-nowrap text-[0.875rem] text-ocre">
                    à donner en votre présence
                  </span>
                )}
              </span>
              <span className="shrink-0 text-[0.875rem] text-encre-tenue">
                {l.dejaLe ? `donnée le ${l.dejaLe}` : "lire"}
              </span>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

function Onglet({
  actif,
  onClick,
  children,
}: {
  actif: boolean;
  onClick: () => void;
  children: React.ReactNode;
}) {
  return (
    <button
      type="button"
      aria-pressed={actif}
      onClick={onClick}
      className={`rounded-full border px-3.5 py-1.5 text-[0.875rem] transition-colors ${
        actif
          ? "border-encre bg-encre font-bold text-carte"
          : "border-bord-fort text-encre-douce hover:border-encre hover:text-encre"
      }`}
    >
      {children}
    </button>
  );
}
