"use client";

import { useOptimistic, useState, useTransition } from "react";
import Link from "next/link";
import { toast } from "sonner";
import { AnimatePresence, MotionConfig, motion } from "motion/react";
import {
  Drawer,
  DrawerContent,
  DrawerDescription,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";
import { classesTeinte, matieres, type MatiereId } from "@/lib/data";
import { Coche } from "@/components/Chemin";
import {
  ajouterSeance,
  retirerSeance,
  deplacerSeance,
  deplacerVersUnAutreJour,
  changerTon,
} from "@/app/actions";
import Bibliotheque, { type LeconDispo } from "@/components/Bibliotheque";
import type { ClotureJour, TonJour } from "@/lib/journee";
import NoterResultatFiche from "@/components/adulte/NoterResultatFiche";
import type { QuestionANoter, ResultatFiche } from "@/lib/resultat-fiche";

/**
 * Remplir la journée de l'enfant.
 *
 * Deux façons de remplir, et il faut les deux.
 *
 * **Depuis la bibliothèque** : on choisit une leçon du programme CM1, et
 * l'enfant aura le cours à l'écran puis les exercices. Le titre, la matière et
 * la durée viennent du programme, pas d'un champ à remplir.
 *
 * **À la main** : le titre, la consigne et la durée sont écrits par un parent,
 * dans ses mots, et le travail se fait ailleurs qu'à l'écran. En instruction
 * en famille tout ne passe pas par un ordinateur, et il ne faut pas que
 * l'outil le prétende. L'enfant lira exactement ce qui est tapé là.
 */

const ordreMatieres: MatiereId[] = [
  "francais",
  "maths",
  "sciences",
  "histoire",
  "geographie",
  "anglais",
  "emc",
  "arts",
  "maison",
];

const durees = [10, 15, 20, 30, 45];

/* Une ligne du panneau des gestes : toute la largeur, 52 px de haut. */
const ligneDuTiroir =
  "flex min-h-[52px] w-full items-center gap-3 px-4 text-left text-[1rem] text-encre transition-colors active:bg-bureau disabled:text-encre-tenue disabled:opacity-60";

/* La teinte d'une séance : celle de sa matière, comme sur son chemin. La
   partie du test n'est d'aucune matière. */
const teinteDe = (s: { matiere: string; test?: boolean }) =>
  classesTeinte[s.test ? "encre-douce" : (matieres[s.matiere as MatiereId]?.teinte ?? "encre-douce")];

const tons: { cle: TonJour; nom: string; quoi: string }[] = [
  {
    cle: "normale",
    nom: "Normale",
    quoi: "la journée prévue par le plan",
  },
  {
    cle: "allegee",
    nom: "Allégée",
    quoi: "le socle seulement — calcul mental, maths, français, écriture. Il ne saura pas qu’elle a été raccourcie.",
  },
  {
    cle: "repos",
    nom: "Repos",
    quoi: "rien aujourd’hui, et l’écran lui dira que c’est prévu",
  },
];

export default function ComposerJournee({
  jour,
  cloture,
  tonActuel,
  tonPar,
  tonLe,
  seances,
  programme,
  periodeDuJour,
  joursPossibles,
  cEstAujourdhui = false,
}: {
  /* La date visée. Un parent prépare le dimanche soir pour la semaine ; sans
     ça, il ne pourrait remplir qu'aujourd'hui, ce qui est trop tard. */
  jour: string;
  /* Finie ou arrêtée : pour lui c'est terminé, on n'y ajoute plus rien
     (le parrain, le 21 septembre 2026). Ce qui restait peut encore partir. */
  cloture: ClotureJour | null;
  tonActuel: TonJour;
  /* Qui a changé le ton, et à quelle heure : l'autre maison doit pouvoir le
     lire, pas seulement celui qui a cliqué. */
  tonPar?: string | null;
  tonLe?: string | null;
  seances: {
    id: string;
    matiere: string;
    titre: string;
    etat: string;
    lecon: string;
    /** Le code de la fiche qui outille l'adulte, pour une séance sans leçon. */
    fiche: string;
    /* Ce que l'enfant lira, mot pour mot. Pour une séance qui ne porte pas de
       leçon — un rituel, un devoir écrit à la main — la consigne **est** tout
       le contenu : il n'y a rien d'autre derrière le titre. Elle n'était pas
       affichée ici, et un parent voyait « Dictée de phrases » sans aucun
       moyen de savoir lesquelles. */
    consigne: string;
    minutes: number;
    /* La partie du test, posée d'elle-même : elle n'a pas de matière. */
    test?: boolean;
    /** Du travail dedans : exercices inscrits ou résultat noté. */
    commencee?: boolean;
    /* Pour une séance menée avec une fiche : ce qui s'y note, et ce qui a
       déjà été noté. Absent pour les autres séances. */
    aNoter?: {
      questions: QuestionANoter[];
      resultat: ResultatFiche | null;
      rangsNotes: number[];
    };
  }[];
  /* Les leçons de l'année, et celles déjà données. Sans ça, on redonne deux
     fois la même leçon en novembre sans s'en apercevoir. */
  programme: LeconDispo[];
  /* La période dans laquelle tombe la date affichée : la bibliothèque s'y
     positionne d'elle-même. */
  periodeDuJour: number;
  /* Les jours où une séance peut partir, avec leur libellé et ce qu'ils
     durent déjà : voir `joursOuDeplacer`. */
  joursPossibles: { jour: string; libelle: string; duree: string }[];
  /* Le jour affiché est aujourd'hui : on peut dire où il en est. */
  cEstAujourdhui?: boolean;
}) {
  const [enCours, demarrer] = useTransition();
  const [ouvert, setOuvert] = useState(false);
  const ferme = cloture !== null;
  /* Où il en est : la première séance à venir, comme sur son chemin — et
     seulement aujourd'hui, sur une journée encore ouverte. */
  /* La séance dont on choisit le jour d'arrivée — une seule à la fois. */
  const [aDeplacer, setADeplacer] = useState<string | null>(null);
  /* Au téléphone, la séance dont les gestes sont dépliés. Les flèches et les
     liens de 20 px, collés en bout de ligne, se visaient mal au pouce —
     « retirer » à quinze pixels de « déplacer » (critique du 21 septembre
     2026) : un seul bouton « Changer » les déplie en vrais boutons. */
  const [aChanger, setAChanger] = useState<string | null>(null);
  /* Dans le panneau des gestes : le choix du jour, et la confirmation du
     retrait — les deux seuls sous-écrans. */
  const [choixDuJour, setChoixDuJour] = useState(false);
  const [retraitAConfirmer, setRetraitAConfirmer] = useState(false);

  /* Ce que l'écran montre pendant que le serveur écrit : la séance a déjà
     bougé, ou disparu, et le ton a déjà changé. Le serveur confirme en
     rafraîchissant la page ; s'il refuse, la liste revient d'elle-même. */
  const [liste, appliquer] = useOptimistic(
    seances,
    (etat, g: { type: "bouger"; id: string; sens: "haut" | "bas" } | { type: "enlever"; id: string }) => {
      if (g.type === "enlever") return etat.filter((x) => x.id !== g.id);
      const i = etat.findIndex((x) => x.id === g.id);
      const j = g.sens === "haut" ? i - 1 : i + 1;
      if (i < 0 || j < 0 || j >= etat.length) return etat;
      const copie = [...etat];
      [copie[i], copie[j]] = [copie[j], copie[i]];
      return copie;
    },
  );
  const [tonVu, voirTon] = useOptimistic(tonActuel);

  /* Où il en est : la première séance à venir, comme sur son chemin — et
     seulement aujourd'hui, sur une journée encore ouverte. */
  const idIci =
    cEstAujourdhui && !ferme ? liste.find((s) => s.etat === "a-venir")?.id : undefined;

  type UneSeance = (typeof seances)[number];
  const nomDuTon = (t: TonJour) => tons.find((x) => x.cle === t)?.nom ?? t;

  /* Chaque geste dit ce qu'il a fait, en bas de l'écran, et propose de
     l'annuler quand c'est possible. Ce retour-là manquait : on cliquait et
     on ne voyait rien changer dans la seconde — ce qui a fait croire au
     parrain qu'un bouton ne servait à rien. */
  function bouger(s: UneSeance, sens: "haut" | "bas") {
    const inverse = sens === "haut" ? "bas" : "haut";
    setAChanger(null);
    demarrer(async () => {
      appliquer({ type: "bouger", id: s.id, sens });
      await deplacerSeance(s.id, sens, jour);
      toast(`« ${s.titre} » ${sens === "haut" ? "remonte" : "descend"} d’un cran`, {
        action: {
          label: "Annuler",
          onClick: () =>
            demarrer(async () => {
              appliquer({ type: "bouger", id: s.id, sens: inverse });
              await deplacerSeance(s.id, inverse, jour);
            }),
        },
      });
    });
  }

  function partirVers(s: UneSeance, j: { jour: string; libelle: string }) {
    setAChanger(null);
    setADeplacer(null);
    setChoixDuJour(false);
    demarrer(async () => {
      appliquer({ type: "enlever", id: s.id });
      const r = await deplacerVersUnAutreJour(s.id, jour, j.jour);
      if (!r) {
        toast("Rien n’a bougé : la séance ou ce jour-là a changé entre-temps.");
        return;
      }
      /* L'annuler la renvoie d'où elle vient, en fin de journée : c'est la
         même séance, rien n'est perdu. */
      toast(`« ${r.titre} » part ${j.libelle}`, {
        action: {
          label: "Annuler",
          onClick: () =>
            demarrer(async () => {
              const retour = await deplacerVersUnAutreJour(s.id, r.jour, jour);
              toast(
                retour
                  ? `« ${r.titre} » est revenue, en fin de journée`
                  : "Elle n’a pas pu revenir : ce jour-là a changé entre-temps.",
              );
            }),
        },
      });
    });
  }

  function retirer(s: UneSeance) {
    setAChanger(null);
    setRetraitAConfirmer(false);
    demarrer(async () => {
      appliquer({ type: "enlever", id: s.id });
      await retirerSeance(s.id, jour);
      toast(`« ${s.titre} » est retirée de sa journée`);
    });
  }

  function changerDeTon(t: TonJour) {
    if (t === tonActuel) return;
    const avant = tonActuel;
    demarrer(async () => {
      voirTon(t);
      const b = await changerTon(t, jour);
      if (!b) return;
      const dits = [
        b.retirees > 0 ? `${b.retirees} séance${b.retirees > 1 ? "s" : ""} retirée${b.retirees > 1 ? "s" : ""}` : null,
        b.ajoutees > 0 ? `${b.ajoutees} remise${b.ajoutees > 1 ? "s" : ""}` : null,
      ].filter(Boolean);
      toast(`Journée ${nomDuTon(t).toLowerCase()} : ${dits.length > 0 ? dits.join(", ") : "rien n’a changé"}`, {
        action: {
          label: "Annuler",
          onClick: () =>
            demarrer(async () => {
              voirTon(avant);
              await changerTon(avant, jour);
            }),
        },
      });
    });
  }
  const [titre, setTitre] = useState("");
  const [consigne, setConsigne] = useState("");
  const [reference, setReference] = useState("");
  const [minutes, setMinutes] = useState(20);
  const [matiere, setMatiere] = useState<MatiereId>("francais");

  return (
    <div>
      {/* Refermée : ni ton, ni ajout. Le dire en une phrase plutôt que laisser
          des boutons qui ne feraient rien. */}
      {ferme && (
        <p className="text-[1.0625rem] leading-relaxed text-encre">
          {cloture === "terminee"
            ? "Il a fini sa journée : pour lui, c’est terminé. On n’y ajoute plus rien — ce qui doit encore se faire se place un autre jour."
            : "Il a arrêté sa journée : on n’y ajoute rien. Ce qui restait peut partir un autre jour, avec « déplacer »."}
        </p>
      )}

      {/* Le ton du jour. Règle n°7 : il ne lui est jamais montré —
          « allégée » se lirait comme un manque. Le repos, lui, se dit :
          un écran vide sans explication est pire.

          Un sélecteur segmenté, comme ceux des applis de téléphone : trois
          états qui s'excluent, dans une seule pièce. Le changement s'affiche
          tout de suite, et la notification qui dit ce qu'il a fait propose de
          l'annuler — la trame se recalcule, c'est réversible. */}
      {!ferme && (
      <>
      <ToggleGroup
        type="single"
        value={tonVu}
        onValueChange={(v) => v && changerDeTon(v as TonJour)}
        aria-label="Le ton du jour"
        className="w-full rounded-full border border-bord bg-bureau p-1 sm:w-fit"
      >
        {tons.map((t) => (
          <ToggleGroupItem
            key={t.cle}
            value={t.cle}
            disabled={enCours}
            title={t.quoi}
            className="h-auto min-h-10 flex-1 rounded-full! px-4 text-[0.9375rem] text-encre-douce transition-[background-color,color,box-shadow] duration-200 hover:bg-transparent hover:text-encre data-[state=on]:bg-carte data-[state=on]:font-bold data-[state=on]:text-encre data-[state=on]:shadow-[0_1px_2px_rgba(29,40,54,0.18),0_4px_12px_-6px_rgba(29,40,54,0.35)] sm:flex-none"
          >
            {t.nom}
          </ToggleGroupItem>
        ))}
      </ToggleGroup>

      <p className="mt-2 text-[0.9375rem] leading-relaxed text-encre-tenue">
        {tons.find((t) => t.cle === tonVu)?.quoi}
        {tonPar && tonVu === tonActuel && (
          <span className="ml-2">
            · choisi par {tonPar}
            {tonLe ? `, ${tonLe}` : ""}
          </span>
        )}
      </p>
      </>
      )}

      {/* Le plan du jour, dans l'ordre où l’enfant le verra — et cet ordre se
          modifie. Commencer par les maths ou par la lecture ne donne pas la
          même journée à un enfant, et c'est à ses parents d'en décider.

          Il se dessine comme son chemin à lui : le même trait au crayon, les
          mêmes pastilles de matière, pleines quand c'est fait. Le parent voit
          la journée que voit son fils, de l'autre côté — carte blanche de
          le parrain, le 21 septembre 2026. Les couleurs disent la matière et
          l'état, jamais la réussite : une séance faite est pleine qu'elle se
          soit bien passée ou non.

          Les séances glissent quand on les réordonne, et celle qu'on retire
          s'efface : on voit ce que le geste a fait, sans attendre le serveur. */}
      <MotionConfig reducedMotion="user">
      <ol className="relative mt-6">
        {liste.length > 0 && (
          <span
            aria-hidden
            className="trait-crayon pointer-events-none absolute bottom-3 left-3 top-3 w-[2px] -translate-x-1/2 rounded-full"
          />
        )}
        <AnimatePresence initial={false}>
        {liste.map((s, i) => {
          /* Pas de leçon, mais une fiche : ce n'est pas un cours qu'il suit
             seul, c'est une séance que vous menez. Au milieu des leçons, une
             ligne parmi d'autres ne le disait pas assez — retour d’un parent,
             le 21 septembre : il faut que ça saute aux yeux. D'où une carte
             blanche sur le fond gris, et l'étiquette. */
          const menee = !s.lecon && !!s.fiche;
          const peutPartir = s.etat === "a-venir" && !s.commencee && !s.test;
          const peutSeRetirer = s.etat === "a-venir" && !s.commencee;
          const ici = s.id === idIci;
          const enCarte = menee || ici;
          const t = teinteDe(s);
          const nomMatiere = s.test ? "Le test" : (matieres[s.matiere as MatiereId]?.nom ?? s.matiere);
          /* La fiche sait de quelle séance on vient : elle propose alors de
             noter le résultat en bas, là où l'on se trouve quand la séance
             finit. */
          const lienFiche = `/fiche/${s.fiche}${s.aNoter ? `?seance=${s.id}` : ""}`;
          const ouvrirLaFiche = menee ? (
            <Link
              href={lienFiche}
              className="inline-flex min-h-11 items-center rounded-full border border-bord-fort bg-carte px-3.5 text-[0.9375rem] font-bold text-encre transition-colors hover:border-encre active:bg-bureau sm:min-h-0 sm:px-4 sm:py-1.5"
            >
              Ouvrir la fiche
              <span className="hidden sm:inline">&nbsp;— ce qu’il faut pour la mener</span>
            </Link>
          ) : null;
          return (
          <motion.li
            key={s.id}
            id={`seance-${s.id}`}
            layout="position"
            initial={{ opacity: 0, y: -6 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, x: -16, transition: { duration: 0.18 } }}
            transition={{ type: "spring", stiffness: 520, damping: 42 }}
            className="relative flex scroll-mt-4 gap-2.5 pb-3.5 sm:gap-3"
          >
            {/* La pastille, sur le trait : pleine et cochée quand c'est fait,
                pleine avec son halo là où il en est, un anneau sinon. Mise de
                côté : un anneau ocre en pointillé — ce qui glisse est ocre,
                jamais rouge. */}
            <span
              aria-hidden
              className={`relative z-10 flex w-6 shrink-0 justify-center ${enCarte ? "pt-4" : "pt-1"}`}
            >
              {s.etat === "faite" ? (
                <span
                  className={`halo flex size-[22px] items-center justify-center rounded-full ${t.puce} ${t.texte}`}
                >
                  <Coche className="size-3.5 text-carte" />
                </span>
              ) : s.etat === "reportee" ? (
                <span className="mt-[3px] size-4 rounded-full border-2 border-dashed border-ocre bg-bureau" />
              ) : ici ? (
                <span className={`halo size-[22px] rounded-full ${t.puce} ${t.texte}`} />
              ) : (
                <span className={`mt-[3px] size-4 rounded-full border-2 ${t.anneau} bg-bureau`} />
              )}
            </span>

            <div
              className={`min-w-0 flex-1 ${
                enCarte
                  ? `rounded-feuille border bg-carte px-3 pb-3.5 pt-3 sm:px-4 ${
                      ici
                        ? "border-bord-fort shadow-[0_14px_30px_-22px_rgba(29,40,54,0.6)]"
                        : "border-bord"
                    }`
                  : "pb-1"
              }`}
            >
          <div className="flex items-start justify-between gap-3">
            <div className="min-w-0">
              <p className="flex flex-wrap items-center gap-x-2 gap-y-1">
                <span className={`etiquette ${t.texte}`}>
                  {ici && <span className="text-encre">Il en est là · </span>}
                  {nomMatiere}
                </span>
                {menee && (
                  <span className="etiquette rounded-full bg-encre px-2 py-[3px] leading-none text-carte">
                    Vous la menez
                  </span>
                )}
              </p>
              <p className="mt-1 text-[1.0625rem] leading-snug text-encre">
                {s.lecon ? (
                  <Link
                    href={`/manuel/${s.lecon}`}
                    className="underline decoration-bord-fort underline-offset-4 hover:decoration-encre"
                  >
                    {s.titre}
                  </Link>
                ) : (
                  s.titre
                )}
              </p>
              <p className="mt-1.5 flex flex-wrap items-center gap-x-2 gap-y-1 text-[0.875rem] text-encre-tenue">
                <span className="chiffres">{s.minutes} min</span>
                {s.lecon && <span>· il la fait seul, à l’écran</span>}
                {s.etat === "faite" && <span>· faite</span>}
                {s.etat === "reportee" && <span className="font-bold text-ocre">· mise de côté</span>}
                {s.etat === "a-venir" && s.commencee && <span>· commencée</span>}
              </p>
            </div>

            <div className="-mr-1 flex shrink-0 items-center">
              {/* Au téléphone : un seul bouton, qui ouvre ses gestes dans un
                  panneau qui monte du bas de l'écran, sous le pouce. */}
              <Drawer
                open={aChanger === s.id}
                onOpenChange={(o) => {
                  setAChanger(o ? s.id : null);
                  setChoixDuJour(false);
                  setRetraitAConfirmer(false);
                }}
              >
                <DrawerTrigger asChild>
                  <button
                    type="button"
                    className="-mt-2 inline-flex min-h-11 items-center rounded-full px-3 text-[0.9375rem] text-encre-douce underline decoration-bord-fort underline-offset-4 transition-colors hover:text-encre sm:hidden"
                  >
                    Changer
                  </button>
                </DrawerTrigger>
                <DrawerContent className="rounded-t-[22px]! border-bord pb-[max(1rem,env(safe-area-inset-bottom))] sm:hidden">
                  <DrawerHeader className="px-5 pb-2 pt-3 text-left!">
                    <p className={`etiquette ${t.texte}`}>{nomMatiere}</p>
                    <DrawerTitle className="font-display text-[1.375rem] font-normal leading-snug tracking-tight">
                      {s.titre}
                    </DrawerTitle>
                    <DrawerDescription className="text-[0.9375rem] text-encre-tenue">
                      {s.minutes} min ·{" "}
                      {s.etat === "faite" ? "faite" : s.etat === "reportee" ? "mise de côté" : s.commencee ? "commencée" : "à venir"}
                      {" "}· {i + 1}<sup>{i === 0 ? "re" : "e"}</sup> de la journée
                    </DrawerDescription>
                  </DrawerHeader>

                  <div className="px-4 pb-2">
                    {!choixDuJour ? (
                      <>
                        <ul className="divide-y divide-bord overflow-hidden rounded-feuille border border-bord bg-carte">
                          <li>
                            <button
                              type="button"
                              disabled={enCours || i === 0}
                              onClick={() => bouger(s, "haut")}
                              className={ligneDuTiroir}
                            >
                              <span aria-hidden className="w-5 text-center text-encre-tenue">↑</span>
                              Monter d’un cran
                            </button>
                          </li>
                          <li>
                            <button
                              type="button"
                              disabled={enCours || i === liste.length - 1}
                              onClick={() => bouger(s, "bas")}
                              className={ligneDuTiroir}
                            >
                              <span aria-hidden className="w-5 text-center text-encre-tenue">↓</span>
                              Descendre d’un cran
                            </button>
                          </li>
                          {peutPartir && (
                            <li>
                              <button
                                type="button"
                                disabled={enCours}
                                onClick={() => setChoixDuJour(true)}
                                className={ligneDuTiroir}
                              >
                                <span aria-hidden className="w-5 text-center text-encre-tenue">→</span>
                                <span className="flex-1">Déplacer à un autre jour</span>
                                <span aria-hidden className="text-encre-tenue">›</span>
                              </button>
                            </li>
                          )}
                        </ul>

                        {s.etat === "a-venir" && s.commencee && (
                          <p className="mt-3 px-1 text-[0.875rem] leading-relaxed text-encre-tenue">
                            Commencée : elle ne se retire plus et ne part pas un autre jour.
                          </p>
                        )}

                        {/* Retirer efface la séance : pas d'« Annuler » possible
                            ensuite, donc une confirmation ici, et ici seulement. */}
                        {peutSeRetirer &&
                          (!retraitAConfirmer ? (
                            <button
                              type="button"
                              disabled={enCours}
                              onClick={() => setRetraitAConfirmer(true)}
                              className="mt-3 flex min-h-12 w-full items-center justify-center rounded-feuille text-[1rem] text-ocre transition-colors hover:bg-bureau"
                            >
                              Retirer de sa journée
                            </button>
                          ) : (
                            <div className="apparaitre mt-3 rounded-feuille border border-ocre/60 bg-[color-mix(in_oklab,var(--color-ocre)_6%,white)] p-4">
                              <p className="text-[0.9375rem] leading-relaxed text-encre">
                                Il ne la verra plus dans sa journée. Pour la garder
                                pour plus tard, déplacez-la plutôt.
                              </p>
                              <div className="mt-3 flex gap-2">
                                <button
                                  type="button"
                                  disabled={enCours}
                                  onClick={() => retirer(s)}
                                  className="inline-flex min-h-11 flex-1 items-center justify-center rounded-full bg-encre px-4 text-[0.9375rem] font-bold text-carte"
                                >
                                  Retirer
                                </button>
                                <button
                                  type="button"
                                  onClick={() => setRetraitAConfirmer(false)}
                                  className="inline-flex min-h-11 flex-1 items-center justify-center rounded-full border border-bord-fort bg-carte px-4 text-[0.9375rem] text-encre-douce"
                                >
                                  La garder
                                </button>
                              </div>
                            </div>
                          ))}
                      </>
                    ) : (
                      <div className="apparaitre">
                        <button
                          type="button"
                          onClick={() => setChoixDuJour(false)}
                          className="-ml-1 mb-1 inline-flex min-h-11 items-center px-1 text-[0.9375rem] text-encre-douce"
                        >
                          ‹ Retour
                        </button>
                        {joursPossibles.length === 0 ? (
                          <p className="px-1 text-[0.9375rem] leading-relaxed text-encre-tenue">
                            Aucun jour de classe ouvert dans les semaines qui viennent.
                          </p>
                        ) : (
                          <div className="grid grid-cols-2 gap-2">
                            {joursPossibles.map((j) => (
                              <button
                                key={j.jour}
                                type="button"
                                disabled={enCours}
                                onClick={() => partirVers(s, j)}
                                className="flex min-h-14 flex-col items-start justify-center rounded-feuille border border-bord-fort bg-carte px-4 text-left transition-colors active:bg-bureau disabled:opacity-60"
                              >
                                <span className="text-[1rem] font-bold leading-tight text-encre">{j.libelle}</span>
                                <span className="chiffres text-[0.8125rem] leading-tight text-encre-tenue">
                                  déjà {j.duree}
                                </span>
                              </button>
                            ))}
                          </div>
                        )}
                      </div>
                    )}
                  </div>
                </DrawerContent>
              </Drawer>

              {/* Sur un écran large, les gestes restent en bout de ligne. Les
                  flèches restent disponibles même sur une séance faite :
                  réorganiser une journée déjà entamée est justement le cas où
                  on en a besoin. */}
              <span className="hidden items-center gap-4 sm:flex">
              <span className="flex items-center gap-1">
                <button
                  type="button"
                  disabled={enCours || i === 0}
                  aria-label={`Remonter ${s.titre}`}
                  onClick={() => bouger(s, "haut")}
                  className="rounded-full px-2 py-0.5 text-[1rem] leading-none text-encre-douce transition-colors hover:bg-bureau hover:text-encre disabled:opacity-30 disabled:hover:bg-transparent"
                >
                  ↑
                </button>
                <button
                  type="button"
                  disabled={enCours || i === liste.length - 1}
                  aria-label={`Descendre ${s.titre}`}
                  onClick={() => bouger(s, "bas")}
                  className="rounded-full px-2 py-0.5 text-[1rem] leading-none text-encre-douce transition-colors hover:bg-bureau hover:text-encre disabled:opacity-30 disabled:hover:bg-transparent"
                >
                  ↓
                </button>
              </span>

              {/* Une séance où il y a déjà du travail — des exercices inscrits,
                  un résultat noté — ne se retire pas : un clic effaçait les
                  deux sans rien demander (seconde critique du 16 septembre).
                  Elle se met de côté de son côté à lui, ou se finit. */}
              {/* Déplacer : les mêmes séances que « retirer », sauf la partie
                  du test, qui revient d'elle-même le prochain jour normal. */}
              {peutPartir && (
                <button
                  type="button"
                  disabled={enCours}
                  aria-expanded={aDeplacer === s.id}
                  onClick={() => setADeplacer(aDeplacer === s.id ? null : s.id)}
                  className="text-[0.875rem] text-encre-douce underline decoration-bord-fort underline-offset-4 hover:text-encre disabled:opacity-60"
                >
                  déplacer
                </button>
              )}
              {peutSeRetirer && (
                <button
                  type="button"
                  disabled={enCours}
                  onClick={() => retirer(s)}
                  className="text-[0.875rem] text-encre-douce underline decoration-bord-fort underline-offset-4 hover:text-encre disabled:opacity-60"
                >
                  retirer
                </button>
              )}
              </span>
            </div>
          </div>

            {/* Vers quel jour, sur un écran large. Les jours de classe à venir
                qui l'acceptent, avec ce qu'ils durent déjà : on déplace pour
                alléger un jour, il faut voir ce qu'on charge en face. */}
            {aDeplacer === s.id && (
              <div className="apparaitre mt-3 hidden sm:block">
                <p className="text-[0.9375rem] text-encre-douce">Vers quel jour ?</p>
                {joursPossibles.length === 0 ? (
                  <p className="mt-1 text-[0.9375rem] text-encre-tenue">
                    Aucun jour de classe ouvert dans les semaines qui viennent.
                  </p>
                ) : (
                  <div className="mt-2 flex flex-wrap gap-2">
                    {joursPossibles.map((j) => (
                      <button
                        key={j.jour}
                        type="button"
                        disabled={enCours}
                        onClick={() => partirVers(s, j)}
                        className="rounded-feuille border border-bord-fort bg-carte px-3.5 py-2 text-center text-encre-douce transition-colors hover:border-encre hover:text-encre disabled:opacity-60"
                      >
                        <span className="block text-[0.875rem] font-bold leading-tight">
                          {j.libelle}
                        </span>
                        <span className="chiffres block text-[0.75rem] leading-tight text-encre-tenue">
                          {j.duree}
                        </span>
                      </button>
                    ))}
                  </div>
                )}
              </div>
            )}

            {/* La consigne, pour les séances qui n'ont pas de leçon derrière
                elles. Là, elle est tout le contenu : « Dictée de phrases » ne
                dit pas lesquelles, ni ce qu'on en fait. L’enfant la lit sur son
                écran, ses parents ne la voyaient nulle part.

                Les séances qui portent une leçon ne l'affichent pas : leur
                consigne est la même phrase pour toutes, et c'est le lien vers
                le manuel qui donne le vrai contenu. */}
            {!s.lecon && s.consigne && (
              <p className="mt-2 text-[0.9375rem] leading-relaxed text-encre-douce">
                {s.consigne}
              </p>
            )}

            {/* Tout ce qu'il faut pour la mener est derrière « Ouvrir la
                fiche » : le déroulé, le matériel, le corrigé. Et, à côté, de
                quoi noter le résultat — deux vrais boutons sur la même ligne,
                plus un lien de 21 px sous la fiche (critique du 21 septembre
                2026). */}
            {s.aNoter ? (
              <NoterResultatFiche
                seanceId={s.id}
                jour={jour}
                questions={s.aNoter.questions}
                resultat={s.aNoter.resultat}
                rangsNotes={s.aNoter.rangsNotes}
                avant={ouvrirLaFiche}
                sansRetrait
                titre={s.titre}
              />
            ) : (
              ouvrirLaFiche && <div className="mt-3">{ouvrirLaFiche}</div>
            )}
            </div>
          </motion.li>
          );
        })}
        </AnimatePresence>
        {liste.length === 0 ? (
          <li className="text-[1.0625rem] text-encre-tenue">
            Rien pour l’instant. Ce que vous ajoutez ici, il le verra.
          </li>
        ) : (
          /* La butée de fin de voie, comme sur son chemin : il voit que ça
             finit, vous aussi. « Il a fini » et « il s'est arrêté » ont le
             même poids. */
          <motion.li layout="position" className="relative flex items-center gap-2.5 sm:gap-3">
            <span aria-hidden className="relative z-10 flex w-6 shrink-0 justify-center">
              <span className="h-[3px] w-6 rounded-full bg-encre-douce" />
            </span>
            <p className="font-display text-[1.0625rem] leading-snug text-encre">
              {cloture === "terminee"
                ? "Il a fini sa journée."
                : cloture === "arretee"
                  ? "Il s’est arrêté là."
                  : "Fin de sa journée"}
            </p>
          </motion.li>
        )}
      </ol>
      </MotionConfig>

      {/* La bibliothèque d'abord : c'est elle qui porte un cours et des
          exercices, donc ce qu'on veut donner par défaut. Rien de tout ça
          sur une journée refermée — le serveur le refuse aussi. */}
      {!ferme && (
      <>
      <Bibliotheque
        lecons={programme}
        jour={jour}
        periodeDuJour={periodeDuJour}
      />

      {!ouvert ? (
        <button
          type="button"
          onClick={() => setOuvert(true)}
          className="mt-3 inline-flex min-h-11 items-center rounded-full border border-bord-fort bg-carte px-5 text-[0.9375rem] text-encre-douce transition-colors hover:border-encre hover:text-encre"
        >
          + Écrire quelque chose à la main
        </button>
      ) : (
        <div className="mt-6 rounded-feuille border border-bord bg-carte p-5 sm:p-6">
          <label htmlFor="titre" className="block text-[0.9375rem] text-encre-douce">
            Ce qu’il verra
          </label>
          <input
            id="titre"
            value={titre}
            onChange={(e) => setTitre(e.target.value)}
            placeholder="Les tables de 7"
            className="mt-2 w-full rounded-feuille border border-bord-fort bg-carte px-4 py-3 text-lg text-encre placeholder:text-encre-tenue focus:border-encre focus:outline-none"
          />

          <label htmlFor="consigne" className="mt-4 block text-[0.9375rem] text-encre-douce">
            La consigne, dans vos mots
          </label>
          <textarea
            id="consigne"
            rows={2}
            value={consigne}
            onChange={(e) => setConsigne(e.target.value)}
            placeholder="On les refait à voix haute, sans écrire."
            className="mt-2 w-full resize-none rounded-feuille border border-bord-fort bg-carte px-4 py-3 text-[1.0625rem] leading-relaxed text-encre placeholder:text-encre-tenue focus:border-encre focus:outline-none"
          />

          <label htmlFor="reference" className="mt-4 block text-[0.9375rem] text-encre-douce">
            Le support, s’il y en a un
          </label>
          <input
            id="reference"
            value={reference}
            onChange={(e) => setReference(e.target.value)}
            placeholder="Livret Mathématiques · séance 12 · p. 34"
            className="mt-2 w-full rounded-feuille border border-bord-fort bg-carte px-4 py-3 text-[1rem] text-encre placeholder:text-encre-tenue focus:border-encre focus:outline-none"
          />

          <fieldset className="mt-5">
            <legend className="text-[0.9375rem] text-encre-douce">La matière</legend>
            <div className="mt-2 flex flex-wrap gap-2">
              {ordreMatieres.map((id) => (
                <button
                  key={id}
                  type="button"
                  aria-pressed={matiere === id}
                  onClick={() => setMatiere(id)}
                  className={`rounded-full border px-4 py-2 text-[0.875rem] transition-colors ${
                    matiere === id
                      ? "border-encre bg-encre font-bold text-carte"
                      : "border-bord-fort text-encre-douce hover:border-encre hover:text-encre"
                  }`}
                >
                  {matieres[id].nom}
                </button>
              ))}
            </div>
          </fieldset>

          <fieldset className="mt-5">
            <legend className="text-[0.9375rem] text-encre-douce">Durée indicative</legend>
            <div className="mt-2 flex flex-wrap gap-2">
              {durees.map((d) => (
                <button
                  key={d}
                  type="button"
                  aria-pressed={minutes === d}
                  onClick={() => setMinutes(d)}
                  className={`chiffres rounded-full border px-4 py-2 text-[0.9375rem] transition-colors ${
                    minutes === d
                      ? "border-encre bg-encre font-bold text-carte"
                      : "border-bord-fort text-encre-douce hover:border-encre hover:text-encre"
                  }`}
                >
                  {d} min
                </button>
              ))}
            </div>
          </fieldset>

          <div className="mt-6 flex flex-wrap gap-3">
            <button
              type="button"
              disabled={!titre.trim() || enCours}
              onClick={() =>
                demarrer(async () => {
                  const pose = await ajouterSeance(
                    {
                      matiere,
                      titre: titre.trim(),
                      consigne: consigne.trim(),
                      reference: reference.trim(),
                      minutes,
                    },
                    jour,
                  );
                  /* Refusée — il a fini sa journée entre-temps : la saisie
                     reste, et la page rechargée dit pourquoi. */
                  if (!pose) return;
                  setTitre("");
                  setConsigne("");
                  setReference("");
                  setOuvert(false);
                })
              }
              className="rounded-full bg-encre px-6 py-3 text-base font-bold text-carte transition-colors hover:bg-encre/85 disabled:cursor-not-allowed disabled:bg-encre-tenue"
            >
              Ajouter
            </button>
            <button
              type="button"
              onClick={() => setOuvert(false)}
              className="rounded-full border border-bord-fort px-5 py-3 text-[0.9375rem] text-encre-douce transition-colors hover:border-encre hover:text-encre"
            >
              Annuler
            </button>
          </div>
        </div>
      )}
      </>
      )}
    </div>
  );
}
