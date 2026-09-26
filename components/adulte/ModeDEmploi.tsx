"use client";

import { useEffect, useRef, useState } from "react";
import { usePathname } from "next/navigation";
/* Le type seulement : le contenu arrive en props, construit par le serveur.
   Importer le module ici l'enverrait dans le JavaScript de la page d'accueil,
   prénom compris — voir `contenuDuModeDEmploi`. */
import type { ContenuModeDEmploi } from "@/lib/mode-emploi";
import { fermerLeModeDEmploi, marquerCompris } from "@/app/gestes/mode-emploi";

/**
 * Le mode d'emploi, une page par écran.
 *
 * Demandé par les parents le premier jour réel : « très complet, mais un peu
 * usine à gaz ». Il s'ouvre de lui-même à l'arrivée d'un adulte tant que
 * « J'ai tout compris » n'est pas coché — une fois par jour au plus, voir
 * `aOuvrirDEmblee` — et se rouvre à tout moment depuis le bandeau.
 *
 * La case est en pied de fenêtre, sur **toutes** les pages : celui qui connaît
 * déjà l'application n'a pas à en parcourir douze pour la trouver.
 *
 * Un vrai `<dialog>` ouvert par `showModal()` : le navigateur retient le focus
 * à l'intérieur, Échap le ferme, et l'arrière-plan est inerte. Rien de tout ça
 * n'est à réécrire à la main.
 *
 * Les gestes serveur ne sont jamais attendus. Une page ouverte avant une mise
 * en ligne appelle une action qui n'existe plus : la fenêtre doit se fermer
 * quand même, quitte à revenir demain.
 */
/* La fenêtre ne s'ouvre d'elle-même que sur La journée, et seulement si c'est
   la page où l'on est arrivé. Une liste d'écrans à éviter ne suffisait pas :
   ouvert directement sur le contrôle, devant l'inspecteur, un clic sur « Le
   manuel » la faisait surgir à la page suivante (seconde critique du
   16 septembre). */
const OUVERTURE_D_OFFICE = "/pilotage";

/* Au téléphone, le bouton qui l'ouvre est dans le menu (`MenuTelephone`),
   pas ici : la fenêtre, elle, reste dans le bandeau toujours affiché — rangée
   dans un menu fermé, elle ne pourrait plus s'ouvrir d'elle-même. Le menu
   l'appelle par cet événement. */
export const OUVRIR_MODE_EMPLOI = "cahier:mode-emploi";

export default function ModeDEmploi({
  contenu,
  ouvrirDEmblee,
  comprisAuDepart,
  classeDuLien,
}: {
  contenu: ContenuModeDEmploi;
  ouvrirDEmblee: boolean;
  comprisAuDepart: boolean;
  classeDuLien: string;
}) {
  const { accueil: ACCUEIL, fin: FIN, rythmes: RYTHMES, ecrans } = contenu;
  const chemin = usePathname();
  /* Le chemin d'arrivée, figé au premier rendu : une navigation ensuite ne
     change plus rien. */
  const [cheminDArrivee] = useState(chemin);
  const aEviter = cheminDArrivee !== OUVERTURE_D_OFFICE;
  /* L'accueil, un écran par page, et la fin. */
  const total = ecrans.length + 2;

  const [etape, setEtape] = useState(0);
  const [compris, setCompris] = useState(comprisAuDepart);
  const dialogue = useRef<HTMLDialogElement>(null);
  const corps = useRef<HTMLDivElement>(null);
  const principal = useRef<HTMLButtonElement>(null);
  const dejaOuvert = useRef(false);
  const fermetureNotee = useRef(false);

  function montrer() {
    const d = dialogue.current;
    if (!d) return;
    fermetureNotee.current = false;
    if (!d.open) d.showModal();
    /* Le focus sur « Suivant », pas sur « Fermer » qui vient en premier dans
       la fenêtre : Entrée doit avancer, pas tout refermer. */
    principal.current?.focus();
  }

  /* Une seule ouverture d'office par chargement. Le bandeau peut être rendu
     de nouveau par un geste ailleurs sur la page ; il ne doit pas rouvrir une
     fenêtre qu'on vient de fermer. */
  useEffect(() => {
    if (ouvrirDEmblee && !aEviter && !dejaOuvert.current) {
      dejaOuvert.current = true;
      montrer();
    }
  }, [ouvrirDEmblee, aEviter]);

  useEffect(() => {
    const ouvrir = () => {
      setEtape(0);
      montrer();
    };
    window.addEventListener(OUVRIR_MODE_EMPLOI, ouvrir);
    return () => window.removeEventListener(OUVRIR_MODE_EMPLOI, ouvrir);
  }, []);

  /* Chaque page se lit depuis le haut. */
  useEffect(() => {
    corps.current?.scrollTo({ top: 0 });
  }, [etape]);

  /* Noter qu'on l'a refermé sans la case, une fois par ouverture.
     Les boutons « Fermer » l'appellent eux-mêmes : Chromium ne déclenche
     l'événement `close` qu'à l'image suivante — jamais dans un onglet masqué,
     et pas forcément avant qu'on quitte la page. Trouvé en recette sur le vrai
     site, où la fenêtre revenait au rechargement. `close` et `cancel` restent
     écoutés pour Échap. */
  function noterFermeture() {
    if (fermetureNotee.current) return;
    fermetureNotee.current = true;
    if (!compris) fermerLeModeDEmploi().catch(() => {});
  }

  function fermer() {
    dialogue.current?.close();
    noterFermeture();
  }

  function cocher(valeur: boolean) {
    setCompris(valeur);
    marquerCompris(valeur).catch(() => {});
  }

  const derniere = etape === total - 1;
  const ecran = etape >= 1 && etape <= ecrans.length ? ecrans[etape - 1] : null;

  return (
    <>
      <button
        type="button"
        onClick={() => {
          setEtape(0);
          montrer();
        }}
        className={classeDuLien}
      >
        <span
          aria-hidden
          className="mr-1.5 inline-grid size-4 place-items-center rounded-full border border-current text-[0.625rem] font-bold leading-none"
        >
          ?
        </span>
        Mode d’emploi
      </button>

      <dialog
        ref={dialogue}
        aria-labelledby="mode-emploi-titre"
        onClose={noterFermeture}
        onCancel={noterFermeture}
        className="m-auto max-h-[calc(100dvh-2rem)] w-[calc(100%-2rem)] max-w-2xl overflow-hidden rounded-feuille border border-bord bg-carte p-0 text-encre shadow-2xl backdrop:bg-encre/55"
      >
        {/* Seul le milieu défile : la case et « Suivant » restent sous la
            main, même sur un téléphone. Les 2 px sont la bordure. */}
        <div className="flex max-h-[calc(100dvh-2rem-2px)] flex-col">
          <div className="flex items-center justify-between gap-4 border-b border-bord px-5 py-3 sm:px-8">
            <p className="etiquette chiffres text-encre-tenue">
              Mode d’emploi · {etape + 1} sur {total}
            </p>
            <button
              type="button"
              onClick={fermer}
              className="rounded-full px-3 py-1 text-[0.9375rem] text-encre-douce underline decoration-bord-fort underline-offset-4 transition-colors hover:text-encre"
            >
              Fermer
            </button>
          </div>

          <div ref={corps} className="overflow-y-auto px-5 py-7 sm:px-8 sm:py-9">
            {etape === 0 && (
              <>
                <h2
                  id="mode-emploi-titre"
                  className="font-display text-[1.75rem] leading-tight tracking-tight sm:text-[2rem]"
                >
                  {ACCUEIL.titre}
                </h2>
                {ACCUEIL.texte.map((t) => (
                  <p key={t} className="mt-3 text-[1.0625rem] leading-relaxed text-encre-douce">
                    {t}
                  </p>
                ))}

                {/* Le sommaire, rangé par rythme : c'est la réponse à « usine à
                    gaz » — la plupart de ces écrans ne s'ouvrent pas tous les
                    jours. Chaque nom mène à sa page. */}
                <dl className="mt-7 space-y-4 border-t border-bord pt-6">
                  {RYTHMES.map((r) => {
                    const du = ecrans.filter((e) => e.rythme === r.cle);
                    if (du.length === 0) return null;
                    return (
                      <div key={r.cle} className="grid gap-x-6 gap-y-2 sm:grid-cols-[10.5rem_1fr]">
                        <dt className="pt-1.5 text-[0.9375rem] font-bold text-encre">{r.nom}</dt>
                        <dd className="flex flex-wrap gap-2">
                          {du.map((e) => (
                            <button
                              key={e.chemin}
                              type="button"
                              onClick={() => setEtape(ecrans.indexOf(e) + 1)}
                              className={`rounded-full border px-3.5 py-1 text-[0.9375rem] transition-colors ${
                                r.cle === "tous-les-jours"
                                  ? "border-encre bg-encre font-bold text-papier hover:bg-encre-douce"
                                  : "border-bord-fort text-encre hover:border-encre"
                              }`}
                            >
                              {e.nom}
                            </button>
                          ))}
                        </dd>
                      </div>
                    );
                  })}
                </dl>
              </>
            )}

            {ecran && (
              <>
                <p className="inline-block rounded-full bg-bureau px-3 py-1 text-[0.875rem] font-bold text-encre-douce">
                  {ecran.quand}
                </p>
                <h2
                  id="mode-emploi-titre"
                  className="mt-3 font-display text-[1.75rem] leading-tight tracking-tight sm:text-[2rem]"
                >
                  {ecran.nom}
                </h2>
                <p className="mt-3 text-[1.1875rem] leading-relaxed text-encre">
                  {ecran.accroche}
                </p>

                <ul className="mt-5 space-y-3">
                  {ecran.points.map((p) => (
                    <li
                      key={p}
                      className="relative pl-5 text-[1.0625rem] leading-relaxed text-encre-douce before:absolute before:left-0 before:top-[0.7em] before:size-1.5 before:rounded-full before:bg-encre-tenue"
                    >
                      {p}
                    </li>
                  ))}
                </ul>

                {ecran.aRetenir && (
                  <p className="mt-6 rounded-feuille border-l-[5px] border-l-bord-fort bg-bureau px-5 py-4 text-[1rem] leading-relaxed text-encre">
                    {ecran.aRetenir}
                  </p>
                )}
              </>
            )}

            {derniere && (
              <>
                <h2
                  id="mode-emploi-titre"
                  className="font-display text-[1.75rem] leading-tight tracking-tight sm:text-[2rem]"
                >
                  {FIN.titre}
                </h2>
                {FIN.texte.map((t) => (
                  <p key={t} className="mt-3 text-[1.0625rem] leading-relaxed text-encre-douce">
                    {t}
                  </p>
                ))}
                <p className="mt-6 rounded-feuille border-l-[5px] border-l-bord-fort bg-bureau px-5 py-4 text-[1rem] leading-relaxed text-encre">
                  Ce mode d’emploi se rouvre à tout moment&nbsp;: «&nbsp;Mode
                  d’emploi&nbsp;», en haut de l’écran.
                </p>
              </>
            )}
          </div>

          <div className="flex flex-wrap items-center justify-between gap-x-6 gap-y-4 border-t border-bord px-5 py-4 sm:px-8">
            <label className="flex cursor-pointer items-start gap-3">
              <input
                type="checkbox"
                checked={compris}
                onChange={(e) => cocher(e.target.checked)}
                className="mt-0.5 size-5 shrink-0 cursor-pointer accent-encre"
              />
              <span>
                <span className="block text-[1rem] font-bold leading-snug">
                  J’ai tout compris
                </span>
                <span className="block text-[0.875rem] leading-snug text-encre-tenue">
                  {compris
                    ? "Ce mode d’emploi ne s’ouvrira plus tout seul."
                    : "Sinon, ce mode d’emploi reviendra demain."}
                </span>
              </span>
            </label>

            <div className="ml-auto flex items-center gap-3">
              {/* Toujours là, invisible sur la première page : les boutons ne
                  bougent pas d'une page à l'autre, et le focus reste sur
                  « Suivant » quand on avance au clavier. */}
              <button
                type="button"
                onClick={() => setEtape((n) => Math.max(0, n - 1))}
                disabled={etape === 0}
                className={`rounded-full border border-bord-fort px-4 py-2 text-[0.9375rem] text-encre transition-colors hover:border-encre ${
                  etape === 0 ? "invisible" : ""
                }`}
              >
                Précédent
              </button>
              <button
                ref={principal}
                type="button"
                onClick={() =>
                  derniere ? fermer() : setEtape((n) => n + 1)
                }
                className="rounded-full bg-encre px-5 py-2 text-[0.9375rem] font-bold text-papier transition-colors hover:bg-encre-douce"
              >
                {derniere ? "Fermer" : "Suivant"}
              </button>
            </div>
          </div>
        </div>
      </dialog>
    </>
  );
}
