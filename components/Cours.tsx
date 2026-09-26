"use client";

import { useRef, useState, useTransition } from "react";
import { inscrire, terminerSeance } from "@/app/actions";
import { useConstat } from "@/components/ConstatEtape";
import LeCours from "@/components/LeCours";
import CoursAPortee from "@/components/CoursAPortee";
import { recharger } from "@/lib/recharger";
import { useBrouillon } from "@/lib/brouillon";
import type { LeconPosee } from "@/lib/programme";

/** Les classes d'un geste de réponse : « J'ai trouvé » et « Je ne sais pas » ont la même taille. */
const PILULE =
  "rounded-full border px-5 py-3 text-[1.0625rem] transition-colors disabled:opacity-60";

/**
 * Une leçon du programme : le cours, puis les exercices.
 *
 * Le cours d'abord, en entier, et il peut le rouvrir à tout moment pendant
 * les exercices, par-dessus l'exercice — c'est un manuel, pas une épreuve à
 * mémoire : en classe, en primaire, on a son cahier de leçons sur la table.
 * Ensuite les exercices, un par un, et **il fait ses calculs sur son
 * brouillon** : seul le résultat s'inscrit ici.
 *
 * Après chaque réponse, la correction. Toujours la même chose, qu'il ait juste
 * ou faux : le résultat attendu, la façon de faire, et la partie du cours qui
 * l'explique, sans « bravo » ni « raté ». Il compare lui-même, en privé, et
 * personne ne commente. C'est la seule manière qu'une correction enseigne au
 * lieu de sanctionner — et c'est aussi pourquoi elle arrive de l'action et non
 * de la page : avant d'avoir répondu, il n'a pas le résultat sous la main.
 *
 * Ce qu'il n'y a nulle part : un décompte de ses erreurs. Ni pendant, ni à la
 * fin. Ça, c'est pour ses parents.
 */
export default function Cours({
  lecon,
  reprise = false,
  seanceId,
  dejaFaits,
}: {
  lecon: LeconPosee;
  /** La leçon revient (« — on reprend ») : les exercices d'abord. */
  reprise?: boolean;
  seanceId: string;
  dejaFaits: string[];
}) {
  const faits = new Set(dejaFaits);
  const commencee = lecon.exercices.some((x) => faits.has(x.code));

  /* On reprend là où il s'était arrêté, et on ne lui remontre pas le cours
     qu'il vient de lire — mais le bouton pour le rouvrir reste. Ça vaut aussi
     quand tout est fait et qu'il revient seulement refermer la leçon : lui
     redonner le cours à relire avant « C'est fini » serait une corvée.

     Une leçon qui revient commence aussi par les exercices. La reprise sert à
     voir ce qui a tenu dix jours plus tard ; cours relu juste avant, la
     moitié des réponses de sciences, d'histoire et de géographie étaient
     sous ses yeux (seconde critique du 16 septembre). Le cours reste à un
     bouton, jamais retiré. */
  const [phase, setPhase] = useState<"cours" | "exercices">(
    commencee || reprise ? "exercices" : "cours",
  );
  /* Le premier exercice qui n'est pas fait — pas « autant d'exercices qu'il
     y en a de faits » : s'il en manque un au milieu, c'est celui-là qu'on
     repose, et on ne repose jamais un exercice déjà corrigé. */
  const [rang, setRang] = useState(() => {
    const i = lecon.exercices.findIndex((x) => !faits.has(x.code));
    return i === -1 ? lecon.exercices.length : i;
  });
  /* Ce qu'il a tapé survit à un rechargement, exercice par exercice. */
  const [valeur, setValeur] = useBrouillon(
    `exercice-${seanceId}-${lecon.exercices[rang]?.code ?? "fin"}`,
  );
  const [corr, setCorr] = useState<{
    resultat: string;
    comment: string;
    /** La partie du cours qui explique l'exercice, rendue avec la correction. */
    partie?: number | null;
  } | null>(null);
  /* Ce qu'il a répondu, gardé pour l'afficher à côté du résultat attendu :
     « il compare lui-même » suppose qu'il voie les deux. */
  const [donne, setDonne] = useState<{ valeur: string; saitPas: boolean } | null>(null);
  /* Le cours rouvert par-dessus l'exercice : au début, ou sur une partie. */
  const [aPortee, setAPortee] = useState<{ partie: number | null } | null>(null);
  const champ = useRef<HTMLInputElement>(null);
  const [enCours, demarrer] = useTransition();
  const conclure = useConstat();

  const exercice = lecon.exercices[rang];
  const total = lecon.exercices.length;
  const calcule = lecon.calculs;
  const passage =
    corr?.partie !== undefined && corr.partie !== null ? lecon.cours[corr.partie] : undefined;

  function envoyer(v: string, saitPas: boolean) {
    demarrer(async () => {
      const c = await inscrire(seanceId, exercice.code, v, saitPas);
      /* Refusé : la séance n'est plus la sienne (retirée, page d'hier).
         On recharge pour montrer l'état réel, sans rien lui dire. */
      if (!c && recharger()) return;
      setDonne({ valeur: v.trim(), saitPas });
      setCorr(c ?? { resultat: "—", comment: "On regardera celui-là plus tard." });
    });
  }

  function suivant() {
    setCorr(null);
    setDonne(null);
    setValeur("");
    setRang((r) => {
      const i = lecon.exercices.findIndex((x, k) => k > r && !faits.has(x.code));
      return i === -1 ? lecon.exercices.length : i;
    });
  }

  /* ---------------------------------------------------------------- */
  /* Le cours                                                          */
  /* ---------------------------------------------------------------- */

  if (phase === "cours") {
    return (
      <div className="deplier">
        {/* Le matériel d'abord, pas après quatre cents mots de lecture. */}
        <p className="mb-8 text-[1.0625rem] leading-relaxed text-encre-douce">
          {calcule
            ? "Prends une feuille et un crayon : tu en auras besoin pour les exercices."
            : "Ton brouillon est là si tu en as besoin."}
        </p>

        <LeCours lecon={lecon} />

        <div className="mt-10 border-t border-reglure pt-6">
          <p className="text-[1.0625rem] leading-relaxed text-encre-douce">
            {calcule
              ? "Tes calculs sur ta feuille, et seulement le résultat sur l’écran."
              : "Tu écris ta réponse sur l’écran."}{" "}
            Tu pourras revoir le cours pendant les exercices.
          </p>
          <button
            type="button"
            onClick={() => setPhase("exercices")}
            className="mt-5 rounded-full bg-encre px-6 py-3 text-base font-bold text-feuille transition-colors hover:bg-encre/85"
          >
            J’ai lu, je commence les exercices
          </button>
        </div>
      </div>
    );
  }

  /* ---------------------------------------------------------------- */
  /* C'est fini                                                        */
  /* ---------------------------------------------------------------- */

  if (!exercice) {
    return (
      <div className="deplier">
        <p className="text-lg leading-relaxed text-encre">
          Tu as fait tous les exercices de la leçon, jusqu’au dernier.
        </p>
        <p className="mt-3 text-[1.0625rem] leading-relaxed text-encre-douce">
          Ton travail est parti chez papa et maman. Toi, tu n’as plus rien à
          faire là-dessus.
        </p>
        {/* Un constat, pas une fanfare : « fini » veut dire qu'il est allé au
            bout, pas qu'il a eu bon. Le constat est posé dans `ConstatEtape`. */}
        <button
          type="button"
          disabled={enCours}
          onClick={() =>
            demarrer(async () => {
              if (await terminerSeance(seanceId)) conclure({ issue: "fait", titre: lecon.titre });
              else recharger();
            })
          }
          className="mt-8 rounded-full bg-encre px-6 py-3 text-base font-bold text-feuille transition-colors hover:bg-encre/85 disabled:opacity-60"
        >
          C’est fini
        </button>
      </div>
    );
  }

  /* ---------------------------------------------------------------- */
  /* Un exercice, et sa correction                                     */
  /* ---------------------------------------------------------------- */

  return (
    <div>
      {reprise && !commencee && rang === 0 && !corr && (
        <p className="mb-6 text-[1.0625rem] leading-relaxed text-encre-douce">
          {calcule
            ? "On reprend : les exercices d’abord, avec ta feuille et ton crayon. Le cours est là si tu en as besoin."
            : "On reprend : les exercices d’abord. Le cours est là si tu en as besoin."}
        </p>
      )}
      <div className="flex flex-wrap items-center justify-between gap-x-4 gap-y-3">
        {/* Le compteur borne la tâche : il voit que ça finit. Il compte les
            exercices faits, jamais les résultats justes. */}
        <p className="chiffres text-[0.9375rem] text-encre-tenue">
          Exercice {rang + 1} sur {total}
        </p>
        {/* Un vrai bouton, plus un lien gris : le lien « revoir le cours »
            était là depuis le premier jour, et personne ne l'avait vu. */}
        <button
          type="button"
          onClick={() => setAPortee({ partie: null })}
          className="inline-flex items-center gap-2 rounded-full border border-encre-tenue bg-feuille px-4 py-2 text-[0.9375rem] font-bold text-encre transition-colors hover:border-encre hover:bg-papier-chaud"
        >
          <Livre className="size-[1.125rem] shrink-0" />
          Revoir le cours
        </button>
      </div>

      {/* Pas de barre : la règle n°1 n'autorise que le rang écrit. */}
      <div
        aria-busy={enCours}
        className="mt-6 rounded-feuille border border-reglure bg-feuille p-5 transition-opacity sm:p-6"
        style={{ opacity: enCours ? 0.55 : 1 }}
      >
        <p className="font-display text-[1.25rem] leading-snug tracking-tight sm:text-[1.375rem]">
          {exercice.enonce}
        </p>

        {corr ? (
          /* La correction. Identique qu'il ait juste ou faux : pas de « bravo »,
             pas de « raté », pas de couleur de jugement. Il compare. */
          <div className="deplier mt-5 border-t border-reglure pt-5">
            {/* Sa réponse, dans la même encre que le résultat : ni barrée, ni
                colorée. Il regarde les deux, et c'est lui qui compare. */}
            {donne && !donne.saitPas && donne.valeur && (
              <p className="mb-2 text-[1.0625rem] text-encre">
                <span className="etiquette mr-2 text-encre-tenue">Tu as écrit</span>
                <span className="chiffres text-[1.125rem]">{donne.valeur}</span>
              </p>
            )}
            <p className="text-[1.0625rem] text-encre">
              <span className="etiquette mr-2 text-encre-tenue">Résultat</span>
              <span className="chiffres text-[1.125rem] font-bold">
                {corr.resultat}
              </span>
            </p>
            <p className="mt-3 text-[1.0625rem] leading-relaxed text-encre-douce">
              {corr.comment}
            </p>
            {/* Le morceau du cours qui l'explique, après **chaque** réponse.
                Un parent voulait un renvoi quand il a faux ; n'apparaître
                qu'après une erreur, ce serait l'écran qui lui dit « tu t'es
                trompé, va relire ». Toujours là, c'est le « voir la leçon »
                d'un manuel. */}
            {passage && (
              <button
                type="button"
                onClick={() => setAPortee({ partie: corr.partie ?? null })}
                className="mt-5 flex max-w-full items-start gap-3 rounded-feuille border border-encre-tenue bg-papier-chaud px-4 py-3 text-left transition-colors hover:border-encre"
              >
                <Livre className="mt-1 size-5 shrink-0 text-encre-douce" />
                <span className="min-w-0">
                  <span className="etiquette block text-encre-tenue">Dans le cours</span>
                  <span className="mt-0.5 block text-[1.0625rem] leading-snug text-encre">
                    {passage.titre ?? "Le début du cours"}
                  </span>
                </span>
              </button>
            )}
            <div>
              <button
                type="button"
                onClick={suivant}
                className="mt-6 rounded-full bg-encre px-6 py-3 text-base font-bold text-feuille transition-colors hover:bg-encre/85"
              >
                {rang + 1 < total ? "Exercice suivant" : "Terminer la leçon"}
              </button>
            </div>
          </div>
        ) : exercice.type === "choix" ? (
          <div className="mt-5 flex flex-wrap gap-2">
            {exercice.choix?.map((c) => (
              <button
                key={c}
                type="button"
                disabled={enCours}
                onClick={() => envoyer(c, false)}
                className={`${PILULE} border-reglure text-encre hover:border-encre-tenue`}
              >
                {c}
              </button>
            ))}
            <JeNeSaisPas enCours={enCours} onClick={() => envoyer("", true)} />
          </div>
        ) : (
          <div className="mt-5 flex flex-wrap items-center gap-3">
            <input
              ref={champ}
              value={valeur}
              onChange={(e) => setValeur(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === "Enter" && valeur.trim() && !enCours) {
                  e.preventDefault();
                  envoyer(valeur, false);
                }
              }}
              autoFocus
              aria-label="Ton résultat"
              placeholder="Ton résultat"
              className="w-56 rounded-feuille border border-reglure bg-papier/30 px-4 py-3 text-lg text-encre placeholder:text-encre-tenue focus:border-encre-tenue focus:outline-none"
            />
            <button
              type="button"
              disabled={!valeur.trim() || enCours}
              onClick={() => envoyer(valeur, false)}
              className={`${PILULE} border-encre bg-encre font-bold text-feuille hover:bg-encre/85 disabled:cursor-not-allowed disabled:border-reglure disabled:bg-transparent disabled:font-normal disabled:text-encre-tenue disabled:opacity-100`}
            >
              J’ai trouvé
            </button>
            <JeNeSaisPas enCours={enCours} onClick={() => envoyer("", true)} />
          </div>
        )}
      </div>

      {!corr && calcule && (
        <p className="mt-6 text-[0.9375rem] leading-relaxed text-encre-tenue">
          Tes calculs sur ta feuille. Ici, tu écris seulement le résultat.
        </p>
      )}

      <CoursAPortee
        ouvert={aPortee !== null}
        onFermer={() => setAPortee(null)}
        lecon={lecon}
        enonce={exercice.enonce}
        partie={aPortee?.partie ?? null}
        onApresFermeture={() => {
          /* Il revient taper sa réponse : le curseur l'attend dans le champ. */
          if (corr || !champ.current) return false;
          champ.current.focus();
          return true;
        }}
      />
    </div>
  );
}

/**
 * Au même rang que « J'ai trouvé » : même taille, même rangée, pas un lien
 * relégué en dessous. Ne pas savoir déclenche la même correction, et c'est
 * comme ça qu'on apprend quand on est bloqué.
 */
function JeNeSaisPas({ enCours, onClick }: { enCours: boolean; onClick: () => void }) {
  return (
    <button
      type="button"
      disabled={enCours}
      onClick={onClick}
      className={`${PILULE} border-reglure text-encre hover:border-encre-tenue`}
    >
      Je ne sais pas — montre-moi
    </button>
  );
}

/** Un cahier ouvert : le cours, qu'on rouvre. */
function Livre({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.8}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden
      className={className}
    >
      <path d="M12 6.8C10.4 5.5 8.1 4.8 4.5 4.8v12.6c3.6 0 5.9.7 7.5 2 1.6-1.3 3.9-2 7.5-2V4.8c-3.6 0-5.9.7-7.5 2Z" />
      <path d="M12 6.8v12.6" />
    </svg>
  );
}
