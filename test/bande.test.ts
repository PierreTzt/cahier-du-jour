/**
 * La bande des douze semaines.
 *
 * C'est le seul endroit de l'application qui avance une hypothèse, et c'est
 * ce qui la rend dangereuse : un constat faux lu par un soignant oriente une
 * prise en charge. Les garanties tenues ici :
 *
 *   - la grille a toujours la même forme, et elle finit sur le jour choisi ;
 *   - chaque état vient de ce qui s'est passé, puis de la trame — un jour de
 *     vacances n'est pas un jour manquant ;
 *   - le constat ne se dit qu'au-delà de ses seuils, et il dit le bon jour et
 *     les bons nombres ;
 *   - la légende compte exactement ce que la grille contient ;
 *   - et, parce que ça ne tient qu'en lisant le code, la page ferme sa porte
 *     avant de lire quoi que ce soit.
 *
 * Tout est fabriqué : aucune base, aucune dépendance au calendrier réel.
 */

import { test } from "node:test";
import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import { fileURLToPath } from "node:url";
import { join } from "node:path";
import {
  ARRETEES_MINIMUM,
  ETATS,
  JOURS_OUVRES,
  SEMAINES,
  aRaconter,
  bornesDeLaBande,
  constatDe,
  construireBande,
  dateEnLettres,
  dateValide,
  decalerDe,
  descriptionDeLaCase,
  etatDuJour,
  legendeDe,
  lundiDeLaSemaine,
  phraseDuConstat,
  repartitionDesArrets,
  seancesDuDetail,
  type EtatCase,
  type JourneeResumee,
  type NatureDuJour,
  type SemaineDeLaBande,
} from "../lib/bande";

const RACINE = fileURLToPath(new URL("..", import.meta.url));

/* ------------------------------------------------------------------ */
/* Fabriquer                                                           */
/* ------------------------------------------------------------------ */

/** Une trame inventée : des jours de classe partout, sauf ceux qu'on précise. */
const trame =
  (particuliers: Record<string, NatureDuJour> = {}) =>
  (iso: string): NatureDuJour =>
    particuliers[iso] ?? { nature: "classe" };

const journee = (jour: string, j: Partial<JourneeResumee> = {}): JourneeResumee => ({
  jour,
  ton: "normale",
  cloture: null,
  seances: 6,
  ...j,
});

const etatsDe = (bande: SemaineDeLaBande[]) => bande.flatMap((s) => s.cases.map((c) => c.etat));

const caseDu = (bande: SemaineDeLaBande[], jour: string) => {
  const c = bande.flatMap((s) => s.cases).find((x) => x.jour === jour);
  assert.ok(c, `${jour} n'est pas dans la grille`);
  return c;
};

/* ------------------------------------------------------------------ */
/* La forme                                                            */
/* ------------------------------------------------------------------ */

test("la grille a toujours douze colonnes de cinq jours, et la dernière contient le jour de référence", () => {
  /* Un lundi, un mercredi, un vendredi ; un changement d'heure, un passage
     d'année, un 29 février. */
  for (const jusquau of ["2026-11-16", "2026-11-18", "2026-11-20", "2026-10-28", "2027-01-06", "2028-02-29"]) {
    const bande = construireBande({ jusquau, aujourdhui: "2026-11-18", journees: [], natureDe: trame() });

    assert.equal(bande.length, SEMAINES, jusquau);
    assert.equal(SEMAINES, 12);
    for (const s of bande) {
      assert.equal(s.cases.length, 5, `${jusquau} : semaine du ${s.lundi}`);
      s.cases.forEach((c, l) => {
        assert.equal(c.jour, decalerDe(s.lundi, l));
        /* La ligne est bien le jour qu'elle dit être. */
        assert.ok(dateEnLettres(c.jour).startsWith(`${JOURS_OUVRES[l]} `), `${c.jour} n'est pas un ${JOURS_OUVRES[l]}`);
      });
    }
    bande.slice(1).forEach((s, i) => assert.equal(s.lundi, decalerDe(bande[i].lundi, 7), "des semaines qui se suivent"));

    assert.ok(
      bande[SEMAINES - 1].cases.some((c) => c.jour === jusquau),
      `${jusquau} n'est pas dans la dernière colonne`,
    );
    const { du, au } = bornesDeLaBande(jusquau);
    assert.equal(du, bande[0].lundi);
    assert.equal(au, decalerDe(bande[SEMAINES - 1].lundi, 6));
  }
});

test("un samedi ou un dimanche regarde la semaine qui se termine sur lui", () => {
  for (const jusquau of ["2026-11-21", "2026-11-22"]) {
    const bande = construireBande({ jusquau, aujourdhui: jusquau, journees: [], natureDe: trame() });
    assert.equal(bande[SEMAINES - 1].lundi, "2026-11-16");
    assert.equal(lundiDeLaSemaine(jusquau), "2026-11-16");
  }
});

test("seule une date réelle choisit la période", () => {
  for (const bonne of ["2026-11-16", "2028-02-29", "2027-01-01"]) assert.ok(dateValide(bonne), bonne);
  for (const mauvaise of ["2026-02-31", "2027-02-29", "2026-1-16", "16/11/2026", "", undefined, ["2026-11-16"], "2026-11-16'--"])
    assert.equal(dateValide(mauvaise), false, JSON.stringify(mauvaise));
});

/* ------------------------------------------------------------------ */
/* Les états                                                           */
/* ------------------------------------------------------------------ */

test("chaque état vient de la journée, puis de la trame", () => {
  const aujourdhui = "2026-11-12"; // un jeudi
  const natureDe = trame({
    "2026-10-19": { nature: "vacances", pourquoi: "Vacances de la Toussaint" },
    "2026-10-20": { nature: "vacances", pourquoi: "Vacances de la Toussaint" },
    "2026-11-11": { nature: "ferie", pourquoi: "Armistice" },
    "2026-08-31": { nature: "avant-le-debut" },
    "2026-09-02": { nature: "mercredi" },
    "2026-09-16": { nature: "test" },
  });
  const journees = [
    journee("2026-11-09", { ton: "repos", seances: 0 }),
    journee("2026-11-06", { cloture: "arretee" }),
    journee("2026-11-05", { cloture: "terminee" }),
    journee("2026-11-10"), // posée, jamais close
    journee("2026-11-12"), // aujourd'hui, en cours
    journee("2026-11-13"), // posée à l'avance
    journee("2026-11-03", { seances: 0 }), // créée en ouvrant /pilotage, rien dedans
    journee("2026-10-20", { cloture: "terminee" }), // il a travaillé pendant les vacances
    journee("2026-11-02", { cloture: "arretee", ton: "repos" }), // arrêtée, puis passée en repos
    journee("2026-11-11", { seances: 0, ton: "allegee" }), // un férié ouvert dans /pilotage
  ];
  const bande = construireBande({ jusquau: aujourdhui, aujourdhui, journees, natureDe });

  const attendus: Record<string, EtatCase> = {
    "2026-10-19": "conge",
    "2026-11-11": "conge",
    "2026-11-09": "repos",
    "2026-11-06": "arretee",
    "2026-11-05": "menee",
    "2026-11-10": "ouverte",
    "2026-11-12": "en-cours",
    "2026-11-13": "a-venir",
    "2026-11-04": "sans-seance", // aucune journée en base, un jour de classe passé
    "2026-11-03": "sans-seance",
    "2026-10-20": "menee", // ce qui s'est passé l'emporte sur les vacances
    "2026-11-02": "arretee", // l'arrêt l'emporte sur le repos posé après coup
    "2026-08-31": "hors-annee",
    "2026-09-02": "sans-seance",
    "2026-09-16": "sans-seance",
  };
  for (const [jour, etat] of Object.entries(attendus)) {
    assert.equal(caseDu(bande, jour).etat, etat, jour);
  }

  /* Le nom des vacances et du férié traverse jusqu'à la phrase de la case. */
  assert.equal(descriptionDeLaCase(caseDu(bande, "2026-10-19")), "lundi 19 octobre 2026 : vacances de la Toussaint");
  assert.equal(descriptionDeLaCase(caseDu(bande, "2026-11-11")), "mercredi 11 novembre 2026 : Armistice, pas de classe");
  assert.equal(descriptionDeLaCase(caseDu(bande, "2026-11-06")), "vendredi 6 novembre 2026 : arrêtée en cours");
});

test("un jour qui n'est pas encore passé n'est jamais « ouvert » ni « sans séance »", () => {
  const classe: NatureDuJour = { nature: "classe" };
  /* Aujourd'hui sans rien de posé : la journée peut encore s'écrire. */
  assert.equal(etatDuJour("2026-11-12", "2026-11-12", undefined, classe).etat, "a-venir");
  assert.equal(etatDuJour("2026-11-13", "2026-11-12", journee("2026-11-13"), classe).etat, "a-venir");
  /* Un repos décidé à l'avance se dit à l'avance. */
  assert.equal(etatDuJour("2026-11-13", "2026-11-12", journee("2026-11-13", { ton: "repos" }), classe).etat, "repos");
  /* Une période regardée dans le passé : c'est `aujourdhui` qui décide, pas `jusquau`. */
  const bande = construireBande({
    jusquau: "2026-11-12",
    aujourdhui: "2027-02-01",
    journees: [journee("2026-11-12"), journee("2026-11-13")],
    natureDe: trame(),
  });
  assert.equal(caseDu(bande, "2026-11-12").etat, "ouverte");
  assert.equal(caseDu(bande, "2026-11-13").etat, "ouverte");
});

/* ------------------------------------------------------------------ */
/* La légende                                                          */
/* ------------------------------------------------------------------ */

test("la légende compte exactement ce que la grille contient", () => {
  const aujourdhui = "2026-11-12";
  const bande = construireBande({
    jusquau: aujourdhui,
    aujourdhui,
    journees: [
      journee("2026-11-09", { ton: "repos", seances: 0 }),
      journee("2026-11-06", { cloture: "arretee" }),
      journee("2026-11-02", { cloture: "arretee" }),
      journee("2026-11-05", { cloture: "terminee" }),
      journee("2026-11-10"),
      journee("2026-11-12"),
      journee("2026-11-13"),
    ],
    natureDe: trame({
      "2026-10-19": { nature: "vacances", pourquoi: "Vacances de la Toussaint" },
      "2026-11-11": { nature: "ferie", pourquoi: "Armistice" },
      "2026-08-24": { nature: "hors-annee" },
    }),
  });
  const legende = legendeDe(bande);
  const etats = etatsDe(bande);

  assert.equal(
    legende.reduce((t, l) => t + l.n, 0),
    SEMAINES * 5,
    "les nombres de la légende ne font pas les soixante cases",
  );
  for (const l of legende) {
    assert.equal(l.n, etats.filter((e) => e === l.etat).length, l.etat);
  }
  for (const e of new Set(etats)) {
    assert.ok(legende.some((l) => l.etat === e), `${e} est dans la grille et pas dans la légende`);
  }
  assert.deepEqual(
    legende.map((l) => l.etat),
    ETATS.filter((e) => legende.some((l) => l.etat === e)),
    "la légende suit son ordre",
  );
  assert.equal(legende.find((l) => l.etat === "arretee")?.n, 2);
  assert.equal(legende.find((l) => l.etat === "repos")?.n, 1);
  assert.equal(legende.find((l) => l.etat === "hors-annee")?.n, 1);
});

test("« 0 arrêtée en cours » se dit, les états absents ne s'affichent pas", () => {
  const bande = construireBande({
    jusquau: "2026-12-18",
    aujourdhui: "2026-09-01",
    journees: [],
    natureDe: trame(),
  });
  const legende = legendeDe(bande);
  assert.deepEqual(
    legende.map((l) => [l.etat, l.n]),
    [
      ["menee", 0],
      ["arretee", 0],
      ["a-venir", 60],
    ],
  );
});

/* ------------------------------------------------------------------ */
/* Le constat                                                          */
/* ------------------------------------------------------------------ */

/**
 * Douze semaines passées, toutes de classe, toutes menées au bout — sauf les
 * arrêts demandés : `{ 4: 5 }` arrête les cinq derniers vendredis.
 * `autresJours` décide de ce que sont les jours qui ne sont pas arrêtés.
 */
function bandeAvecArrets(
  arrets: Partial<Record<number, number>>,
  autresJours: (ligne: number) => Partial<JourneeResumee> = () => ({ cloture: "terminee" }),
) {
  const jusquau = "2026-12-18";
  const { du } = bornesDeLaBande(jusquau);
  const journees: JourneeResumee[] = [];
  for (let s = 0; s < SEMAINES; s++) {
    for (let l = 0; l < 5; l++) {
      const jour = decalerDe(du, s * 7 + l);
      const arrete = s >= SEMAINES - (arrets[l] ?? 0);
      journees.push(journee(jour, arrete ? { cloture: "arretee" } : autresJours(l)));
    }
  }
  return construireBande({ jusquau, aujourdhui: "2027-01-04", journees, natureDe: trame() });
}

test("sans journée arrêtée, ou trop peu, aucun jour n'est désigné", () => {
  const rien = constatDe(bandeAvecArrets({}));
  assert.equal(rien.genre, "aucune");
  assert.equal(rien.ligne, null);
  assert.equal(phraseDuConstat(rien), "Aucune journée arrêtée sur la période.");

  const une = constatDe(bandeAvecArrets({ 2: 1 }));
  assert.equal(une.genre, "trop-peu");
  assert.equal(
    phraseDuConstat(une),
    "Une seule journée arrêtée sur la période : c’est trop peu pour qu’un jour de la semaine ressorte.",
  );

  /* Juste sous le minimum, et toutes le même jour : toujours rien. */
  const presque = constatDe(bandeAvecArrets({ 4: ARRETEES_MINIMUM - 1 }));
  assert.equal(presque.genre, "trop-peu");
  assert.equal(presque.ligne, null);
  assert.equal(
    phraseDuConstat(presque),
    `${ARRETEES_MINIMUM - 1} journées arrêtées sur la période : c’est trop peu pour qu’un jour de la semaine ressorte.`,
  );
});

test("un jour qui concentre nettement les arrêts est nommé, avec les bons nombres", () => {
  const c = constatDe(bandeAvecArrets({ 0: 1, 1: 1, 4: 5 }));
  assert.equal(c.genre, "un-jour");
  assert.equal(c.ligne, 4);
  assert.equal(c.arretees, 7);
  assert.deepEqual(c.parJour, [1, 1, 0, 0, 5]);
  assert.equal(phraseDuConstat(c), "Sur les 7 journées arrêtées de la période, 5 sont tombées un vendredi.");
  assert.equal(repartitionDesArrets(c), "lundi 1, mardi 1, mercredi 0, jeudi 0, vendredi 5");

  /* Au minimum exact, quatre sur cinq le même jour suffisent — et c'est bien
     le mercredi qui est nommé quand c'est lui. */
  const mercredi = constatDe(bandeAvecArrets({ 2: ARRETEES_MINIMUM - 1, 0: 1 }));
  assert.equal(mercredi.genre, "un-jour");
  assert.equal(
    phraseDuConstat(mercredi),
    `Sur les ${ARRETEES_MINIMUM} journées arrêtées de la période, ${ARRETEES_MINIMUM - 1} sont tombées un mercredi.`,
  );
});

test("une concentration que le hasard explique n'est pas un constat", () => {
  /* Quatre vendredis sur six arrêts : ça arrive par hasard plus d'une fois
     sur douze. Assez d'arrêts, un écart suffisant, et pourtant rien. */
  const quatreSurSix = constatDe(bandeAvecArrets({ 4: 4, 3: 2 }));
  assert.equal(quatreSurSix.genre, "aucun-jour");
  assert.equal(quatreSurSix.ligne, null);
  assert.equal(
    phraseDuConstat(quatreSurSix),
    "Sur les 6 journées arrêtées de la période, aucun jour de la semaine ne ressort seul.",
  );

  /* Cinq sur six, en revanche, se dit. */
  assert.equal(constatDe(bandeAvecArrets({ 4: 5, 0: 1 })).genre, "un-jour");

  /* Étalées sur la semaine : rien. */
  assert.equal(constatDe(bandeAvecArrets({ 0: 2, 1: 2, 2: 1, 3: 1, 4: 2 })).genre, "aucun-jour");
});

test("deux jours presque à égalité ne font pas « un jour »", () => {
  /* Huit vendredis sur quinze arrêts ne viennent pas du hasard — mais sept
     jeudis non plus. Nommer le vendredi seul orienterait la lecture : ce sont
     deux jours, et la répartition le montre. Les nombres sont choisis pour
     que seul l'écart minimum retienne le constat. */
  const c = constatDe(bandeAvecArrets({ 3: 7, 4: 8 }));
  assert.equal(c.genre, "aucun-jour");
  assert.equal(c.arretees, 15);
  assert.equal(repartitionDesArrets(c), "lundi 0, mardi 0, mercredi 0, jeudi 7, vendredi 8");

  /* À égalité parfaite, pareil : on ne choisit pas le premier trouvé. */
  assert.equal(constatDe(bandeAvecArrets({ 1: 8, 4: 8 })).genre, "aucun-jour");

  /* Un écart de deux suffit. */
  assert.equal(constatDe(bandeAvecArrets({ 3: 6, 4: 8 })).ligne, 4);
});

test("si les vendredis sont les seuls jours clos, que les arrêts y tombent n'apprend rien", () => {
  /* Six vendredis arrêtés. Les autres jours menés au bout : c'est un motif. */
  assert.equal(constatDe(bandeAvecArrets({ 4: 6 })).genre, "un-jour");

  /* Les mêmes six vendredis, mais les autres jours posés et jamais clos : les
     arrêts ne peuvent tomber que là où une journée a été close. */
  const seuls = constatDe(bandeAvecArrets({ 4: 6 }, () => ({ cloture: null })));
  assert.equal(seuls.arretees, 6);
  assert.equal(seuls.genre, "aucun-jour");
});

test("le constat ne compte que les journées arrêtées, et les rapporte aux journées closes", () => {
  const vacances: Record<string, NatureDuJour> = {};
  for (let n = 0; n < 14; n++) vacances[decalerDe("2026-10-19", n)] = { nature: "vacances", pourquoi: "Vacances de la Toussaint" };
  const bande = construireBande({
    jusquau: "2026-11-20",
    aujourdhui: "2026-11-18",
    journees: ["2026-09-04", "2026-09-11", "2026-09-18", "2026-09-25", "2026-10-02"].map((j) =>
      journee(j, { cloture: "arretee" }),
    ),
    natureDe: trame(vacances),
  });
  const c = constatDe(bande);
  assert.equal(c.arretees, 5);
  assert.deepEqual(c.parJour, [0, 0, 0, 0, 5]);
  /* Aucun autre jour n'a été clos : cinq vendredis sur cinq journées closes
     n'ont rien de surprenant. */
  assert.equal(c.genre, "aucun-jour");
});

/* ------------------------------------------------------------------ */
/* Le détail                                                           */
/* ------------------------------------------------------------------ */

test("le détail ne raconte que ce qui s'est passé, et jamais demain", () => {
  const vide = { jour: "2026-11-10", ton: "normale" as const, cloture: null, note: "", seances: [{ etat: "a-venir" as const }], ressenti: null, mots: [] };
  assert.equal(aRaconter(vide, "2026-11-12"), false, "une journée posée et jamais touchée");
  assert.equal(aRaconter({ ...vide, note: "   " }, "2026-11-12"), false, "une note faite d'espaces");

  for (const [quoi, j] of [
    ["une clôture", { ...vide, cloture: "arretee" as const }],
    ["un ton", { ...vide, ton: "allegee" as const }],
    ["une note", { ...vide, note: "Il a demandé de l’aide." }],
    ["un ressenti", { ...vide, ressenti: { choix: null, mot: "" } }],
    ["un mot", { ...vide, mots: [{}] }],
    ["une séance mise de côté", { ...vide, seances: [{ etat: "reportee" as const }] }],
  ] as const) {
    assert.equal(aRaconter(j, "2026-11-12"), true, quoi);
    assert.equal(aRaconter({ ...j, jour: "2026-11-13" }, "2026-11-12"), false, `${quoi}, demain`);
  }

  /* Sur une journée arrêtée, ce qui restait à venir a été mis de côté. */
  const seances = [
    { titre: "a", etat: "faite" as const },
    { titre: "b", etat: "reportee" as const },
    { titre: "c", etat: "a-venir" as const },
  ];
  assert.deepEqual(seancesDuDetail(seances, "arretee").deCote.map((s) => s.titre), ["b", "c"]);
  assert.deepEqual(seancesDuDetail(seances, null).deCote.map((s) => s.titre), ["b"]);
  assert.deepEqual(seancesDuDetail(seances, null).faites.map((s) => s.titre), ["a"]);
});

/* ------------------------------------------------------------------ */
/* La page                                                             */
/* ------------------------------------------------------------------ */

test("la page du journal renvoie l'enfant et montre la porte fermée au proche, avant de lire", () => {
  const source = readFileSync(join(RACINE, "app", "journal", "page.tsx"), "utf8");

  const enfant = source.search(/if \(moi\.role === "enfant"\)\s*redirect\("\/journee"\)/);
  const proche = source.search(
    /if \(!estParent\(moi\)\)\s*return <ReserveAuxParents moi=\{moi\} quoi="Le journal" \/>/,
  );
  const lectures = ["journeesDeLaPeriode(", "prenomDeLEnfant("].map((l) => source.indexOf(l, source.indexOf("export default")));

  assert.ok(enfant >= 0, "l'enfant n'est plus renvoyé vers sa journée");
  assert.ok(proche >= 0, "un proche ne reçoit plus ReserveAuxParents");
  for (const lecture of lectures) {
    assert.ok(lecture >= 0, "une lecture en base n'est plus reconnue");
    assert.ok(enfant < lecture && proche < lecture, "le journal est lu avant que la porte soit vérifiée");
  }
});

test("aucun rouge dans le journal", () => {
  for (const fichier of [["app", "journal", "page.tsx"], ["components", "adulte", "BandeDesJours.tsx"]]) {
    const source = readFileSync(join(RACINE, ...fichier), "utf8");
    assert.doesNotMatch(source, /\b(?:text|bg|border|fill|stroke|ring|outline)-(?:red|rose|pink)-/, fichier.join("/"));
    assert.doesNotMatch(source, /#(?:f00|ff0000|e53|dc2626|ef4444)\b/i, fichier.join("/"));
  }
});
