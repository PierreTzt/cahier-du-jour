"use client";

import { useMemo, useState, useTransition } from "react";
import Link from "next/link";
import { matieres, teintesDe, type MatiereId } from "@/lib/data";
import { ajouterLecon } from "@/app/actions";

/**
 * La bibliothèque des leçons de l'année.
 *
 * Cent treize leçons, huit matières, cinq périodes. Une liste à plat était
 * utilisable à douze leçons et ne l'est plus : il faut pouvoir trouver.
 *
 * Trois filtres, et c'est tout : la matière, la période, et une recherche par
 * mot. Pas de tri configurable, pas de vue en grille, pas de favoris — chaque
 * réglage ajouté est un réglage à comprendre, et celui qui compose la journée
 * de l'enfant un dimanche soir n'a pas de temps à donner à une interface.
 *
 * La période est **présélectionnée sur celle du jour**. C'est le seul choix
 * d'ergonomie un peu appuyé de cet écran, et il est délibéré : dans
 * l'immense majorité des cas, on cherche une leçon de la période en cours.
 *
 * Deux informations comptent plus que les autres et sont donc toujours
 * visibles : ce qui a **déjà été donné**, pour ne pas redonner deux fois la
 * même leçon en novembre ; et ce qui est **réservé aux parents**, pour qu'un
 * clic distrait ne décide pas du moment d'une leçon sur la puberté.
 */

export type LeconDispo = {
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

/** Les mois de chaque période, pour que le filtre veuille dire quelque chose. */
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

export default function Bibliotheque({
  lecons,
  jour,
  periodeDuJour,
}: {
  lecons: LeconDispo[];
  jour: string;
  /** La période dans laquelle tombe la date affichée. */
  periodeDuJour: number;
}) {
  const [enCours, demarrer] = useTransition();
  const [ouvert, setOuvert] = useState(false);
  const [matiere, setMatiere] = useState<MatiereId | "toutes">("toutes");
  const [periode, setPeriode] = useState<number | "toutes">(periodeDuJour);
  const [recherche, setRecherche] = useState("");

  /* Les matières réellement présentes, dans l'ordre du fichier de données :
     afficher un filtre qui ne renvoie rien serait un piège. */
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
    <div className="mt-7">
      <button
        type="button"
        aria-expanded={ouvert}
        onClick={() => setOuvert((v) => !v)}
        /* Un bouton comme son voisin « Écrire quelque chose à la main » : ce
           sont les deux façons d'ajouter. C'était une ligne en capitales qui
           se lisait comme un titre. */
        className="inline-flex min-h-11 items-center gap-2 rounded-full border border-bord-fort bg-carte px-5 text-[0.9375rem] text-encre-douce transition-colors hover:border-encre hover:text-encre aria-expanded:border-encre aria-expanded:text-encre"
      >
        {ouvert ? (
          "Fermer la bibliothèque"
        ) : (
          <>
            + Une leçon de la bibliothèque
            <span className="chiffres text-encre-tenue">{lecons.length}</span>
          </>
        )}
      </button>

      {!ouvert ? null : (
        <div className="mt-5">
          {/* Les filtres. La période est déjà sur celle du jour. */}
          <label htmlFor="recherche" className="sr-only">
            Chercher une leçon
          </label>
          <input
            id="recherche"
            value={recherche}
            onChange={(e) => setRecherche(e.target.value)}
            placeholder="Chercher : fractions, imparfait, Moyen Âge…"
            className="w-full rounded-feuille border border-bord-fort bg-carte px-4 py-2.5 text-[1rem] text-encre placeholder:text-encre-tenue focus:border-encre focus:outline-none"
          />

          <fieldset className="mt-4">
            <legend className="etiquette text-encre-tenue">La matière</legend>
            <div className="mt-2 flex flex-wrap gap-2">
              <Onglet
                actif={matiere === "toutes"}
                onClick={() => setMatiere("toutes")}
              >
                toutes
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
          </fieldset>

          <fieldset className="mt-4">
            <legend className="etiquette text-encre-tenue">La période</legend>
            <div className="mt-2 flex flex-wrap gap-2">
              <Onglet
                actif={periode === "toutes"}
                onClick={() => setPeriode("toutes")}
              >
                toute l’année
              </Onglet>
              {PERIODES.map((p) => (
                <Onglet key={p} actif={periode === p} onClick={() => setPeriode(p)}>
                  {p} · {QUAND[p]}
                </Onglet>
              ))}
            </div>
          </fieldset>

          <p className="chiffres mt-5 text-[0.875rem] text-encre-tenue">
            {resultats.length === 0
              ? "Aucune leçon ne correspond."
              : `${resultats.length} leçon${resultats.length > 1 ? "s" : ""}`}
          </p>

          <ul className="mt-2 max-h-[26rem] overflow-y-auto pr-1">
            {resultats.map((l) => (
              <li
                key={l.code}
                className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1 border-b border-bord py-2.5"
              >
                <span className="flex-1 text-[1.0625rem]">
                  <span
                    className={`mr-2.5 inline-block h-2 w-2 rounded-full align-middle ${puce(l.matiere)}`}
                    aria-hidden
                  />
                  {l.titre}
                  <span className="chiffres ml-3 whitespace-nowrap text-[0.875rem] text-encre-tenue">
                    P{l.periode} · {l.exercices} ex. · {l.minutes} min
                  </span>
                  {l.reserveeAuxParents && (
                    /* Ocre, jamais rouge : c'est un avertissement, pas une
                       interdiction. La décision reste celle des parents. */
                    <span className="ml-3 whitespace-nowrap text-[0.875rem] text-ocre">
                      à donner en votre présence
                    </span>
                  )}
                </span>

                <span className="flex shrink-0 items-baseline gap-3">
                  {/* Lire avant de donner : c'est le geste qui manquait, et il
                      vient d'abord — on choisit une leçon d'après ce qu'elle
                      contient, pas d'après son titre. */}
                  <Link
                    href={`/manuel/${l.code}`}
                    className="text-[0.875rem] text-encre-douce underline decoration-bord-fort underline-offset-4 hover:text-encre"
                  >
                    lire
                  </Link>
                {l.dejaLe ? (
                  <span className="flex items-baseline gap-3">
                    <span className="text-[0.875rem] text-encre-tenue">
                      donnée le {l.dejaLe}
                    </span>
                    <button
                      type="button"
                      disabled={enCours}
                      onClick={() => demarrer(async () => { await ajouterLecon(l.code, jour); })}
                      className="text-[0.875rem] text-encre-douce underline decoration-bord-fort underline-offset-4 hover:text-encre disabled:opacity-60"
                    >
                      redonner
                    </button>
                  </span>
                ) : (
                  <button
                    type="button"
                    disabled={enCours}
                    onClick={() => demarrer(async () => { await ajouterLecon(l.code, jour); })}
                    className="rounded-full border border-bord-fort px-4 py-1.5 text-[0.875rem] text-encre transition-colors hover:border-encre disabled:opacity-60"
                  >
                    ajouter
                  </button>
                )}
                </span>
              </li>
            ))}
          </ul>
        </div>
      )}
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
      className={`rounded-full border px-4 py-1.5 text-[0.875rem] transition-colors ${
        actif
          ? "border-encre bg-encre font-bold text-carte"
          : "border-bord-fort text-encre-douce hover:border-encre hover:text-encre"
      }`}
    >
      {children}
    </button>
  );
}
