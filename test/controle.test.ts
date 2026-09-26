/**
 * Le mode contrôle — ce qu'on montre à l'inspection, et ce qu'on lui retire.
 *
 * La garantie qui compte est une absence : rien de ce qui relève du suivi de
 * l'enfant ne sort de `projeterLeControle`. Une absence ne se voit pas à l'œil,
 * et elle se casse en silence — une préparation du parrain affichée « parce
 * qu'elle éclaire la question », un `...ligne` écrit pour aller vite.
 *
 * La lecture en base ne sélectionne déjà rien de tout cela : c'est la première
 * garde, et elle ne se teste pas sans base. La seconde est la projection, et
 * c'est elle qu'on vérifie ici, **en lui passant plus qu'elle ne demande** :
 * des lignes entières, telles qu'un écran du soir les lirait, où chaque champ
 * à retirer porte une chaîne témoin qu'aucune phrase ne peut contenir par
 * hasard.
 */

import { test } from "node:test";
import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import { fileURLToPath } from "node:url";
import { join } from "node:path";
import {
  DEBUT_DE_L_ANNEE,
  enHeures,
  projeterLeControle,
  type DonneesDuControle,
  type LeconDuManuel,
  type SeanceLue,
} from "../lib/controle";
import type { Membre, Question } from "../lib/pourquoi";
import type { Sortie } from "../lib/sorties";
import type { LigneTrace } from "../lib/valorisation";
import type { MatiereId } from "../lib/data";

const RACINE = fileURLToPath(new URL("..", import.meta.url));

/* Le jour de consultation. Tout ce qui est après n'a pas encore eu lieu. */
const ARRETE_AU = "2026-10-08";

/* Des chaînes qu'aucun titre, aucune date, aucun libellé ne peut contenir. */
const TEMOINS = {
  ressenti: "tém-ressenti-q7Zx",
  motDuSoir: "tém-mot-du-soir-Kp3v",
  noteDuSoir: "tém-note-du-soir-Wm8r",
  motLaisse: "tém-mot-laisse-Hd2j",
  preparation: "tém-preparation-du-parrain-Yt5n",
  preparationEnCours: "tém-preparation-en-cours-Lb9c",
  questionEnCours: "tém-question-non-exploree-Fs4g",
  questionLue: "tém-question-lue-Nq6e",
  questionDeposee: "tém-question-deposee-Ux1a",
  /* Même explorée, la question reste dans ses mots à lui : seul le récit du
     parrain sort. */
  questionExploree: "tém-question-exploree-Jr3d",
  consigne: "tém-consigne-du-soignant-Rc7p",
  pourquoiConsigne: "tém-raison-de-la-consigne-Gv2m",
  portrait: "tém-portrait-du-test-Zj5k",
  resultat: "tém-resultat-d-exercice-Ea3w",
  reponseDuManuel: "tém-reponse-du-manuel-Po8d",
  commentDuManuel: "tém-comment-du-manuel-Ix4t",
  seanceMiseDeCote: "tém-seance-mise-de-cote-Mh6s",
  consigneDeSeance: "tém-consigne-de-seance-Ck1b",
  sortieAVenir: "tém-sortie-a-venir-Vy9f",
  sortieAVenirQuoi: "tém-ce-qui-se-passera-Ow2l",
};

/* ------------------------------------------------------------------ */
/* Les données propres : ce qu'une lecture exacte rendrait             */
/* ------------------------------------------------------------------ */

const manuel: LeconDuManuel[] = [
  { code: "m-1", titre: "Les nombres jusqu’à 9 999", matiere: "maths" },
  { code: "m-2", titre: "Comparer, ranger et encadrer", matiere: "maths" },
  { code: "m-3", titre: "Les fractions", matiere: "maths" },
  { code: "f-1", titre: "Le verbe et son sujet", matiere: "francais" },
  { code: "f-2", titre: "Le présent", matiere: "francais" },
  { code: "s-1", titre: "Les états de l’eau", matiere: "sciences" },
];

const faite = (jour: string, matiere: string, minutes: number, lecon = ""): SeanceLue => ({
  jour,
  matiere,
  minutes,
  lecon,
  etat: "faite",
});

const seancesPropres: SeanceLue[] = [
  faite("2026-09-17", "maths", 15),
  faite("2026-09-17", "maths", 40, "m-2"),
  faite("2026-09-17", "francais", 30),
  /* La même leçon, reprise dix jours plus tard : elle compte une fois. */
  faite("2026-09-28", "maths", 40, "m-2"),
  faite("2026-09-28", "maths", 35, "m-1"),
  /* Une leçon de sciences posée à la main sous « à la maison » : elle compte
     en sciences, et sa durée à la maison. */
  faite("2026-10-01", "maison", 45, "s-1"),
  /* Un code que le manuel ne connaît plus : du temps, pas de leçon. */
  faite("2026-10-01", "francais", 20, "f-ancien"),
];

const personnes: Membre[] = [
  { role: "parent", prenom: "Anatole", mot_de_l_enfant: "papa" },
  { role: "proche", prenom: "Casimir", mot_de_l_enfant: "parrain" },
  { role: "enfant", prenom: "Dorian", mot_de_l_enfant: "Dorian" },
];

function sortie(id: string, jour: string, titre: string, quoi: string, matieres: MatiereId[]): Sortie {
  return { id, jour, titre, lieu: "Le port", quoi, matieres, par_adulte: null, par_prenom: null };
}

const sortiesPassees: Sortie[] = [
  sortie("s-a", "2026-09-19", "Le marché aux poissons", "On a pesé, compté, payé.", ["maths", "sciences"]),
  sortie("s-b", "2026-10-03", "Le beffroi", "La montée, et la date sur la cloche.", ["histoire", "maths"]),
];

function question(id: string, etat: Question["etat"], texte: string, extra: Partial<Question> = {}): Question {
  return {
    id,
    texte,
    etat,
    preparation: "",
    domaine: null,
    trace: "",
    deposee_le: new Date("2026-09-20T15:00:00Z"),
    exploree_le: null,
    ...extra,
  };
}

const exploreePropre = question("q-1", "exploree", TEMOINS.questionExploree, {
  domaine: "vivant",
  trace: "On a fait évaporer un bol d’eau de mer sur le radiateur.",
  exploree_le: "2026-09-30",
});

const trace = (id: string, titre: string, cree_le: string, matiere: string): LigneTrace => ({
  id,
  titre,
  quoi: `Ce qu’est ${titre.toLowerCase()}.`,
  matiere,
  cree_le: new Date(cree_le),
  par_adulte: null,
  par_prenom: null,
});

const tracesPropres: LigneTrace[] = [
  /* 22 h 30 UTC le 20 septembre : le 21 à Paris. */
  trace("t-2", "Une carte du quartier", "2026-09-20T22:30:00Z", "geographie"),
  trace("t-1", "Un volcan en argile", "2026-09-18T14:00:00Z", "sciences"),
];

const propres: DonneesDuControle = {
  arreteAu: ARRETE_AU,
  personnes,
  bilan: { joursTravailles: 162, heures: 431 },
  manuel,
  seances: seancesPropres,
  sorties: sortiesPassees,
  questions: [exploreePropre],
  traces: tracesPropres,
};

/* ------------------------------------------------------------------ */
/* Les mêmes, avec tout ce que le contrôle doit retirer                */
/* ------------------------------------------------------------------ */

/* Des objets non annotés : TypeScript les accepte là où une ligne propre est
   attendue, avec leurs champs en trop — exactement ce qui arriverait si une
   lecture devenait un `select *` joint au ressenti et aux mots du jour. */

const journeeDifficile = {
  cloture: "arretee",
  ton: "allegee",
  note: TEMOINS.noteDuSoir,
  note_de: "un-parent",
  ressenti: { choix: "pas-bien", mot: TEMOINS.motDuSoir, libelle: TEMOINS.ressenti },
  mots: [{ texte: TEMOINS.motLaisse, par_prenom: "Anatole" }],
};

const manuelEntier = manuel.map((l) => ({
  ...l,
  periode: 1,
  reference: "Un objectif du programme.",
  cours: [{ texte: ["Le cours."] }],
  exemples: [],
  exercices: [
    { code: `${l.code}-1`, enonce: "Un énoncé.", type: "saisie", resultat: TEMOINS.reponseDuManuel, comment: TEMOINS.commentDuManuel },
  ],
}));

const seancesEntieres = [
  ...seancesPropres.map((s) => ({
    ...s,
    titre: "Une séance",
    consigne: TEMOINS.consigneDeSeance,
    journee: journeeDifficile,
    travail: [{ exercice: "m-2-1", valeur: TEMOINS.resultat, sait_pas: false }],
  })),
  /* Mise de côté le jour où il a arrêté : ni sa durée, ni sa leçon. */
  {
    ...faite("2026-09-28", "francais", 30, "f-1"),
    etat: "reportee" as const,
    titre: TEMOINS.seanceMiseDeCote,
    journee: journeeDifficile,
  },
  /* Écrite pour demain : pas encore donnée, même si un état erroné la dit faite. */
  faite("2026-10-09", "francais", 30, "f-2"),
  { ...faite("2026-10-12", "maths", 40, "m-3"), etat: "a-venir" as const },
  /* Avant la rentrée : hors de l'année que l'on contrôle. */
  faite("2026-08-28", "maths", 50, "m-3"),
];

const bruitees = {
  ...propres,
  manuel: manuelEntier,
  seances: seancesEntieres,
  sorties: [
    /* Notées par un adulte : le document ne dit pas qui a noté quoi. */
    ...sortiesPassees.map((s) => ({ ...s, par_adulte: "un-parent", par_prenom: "Anatole" })),
    sortie("s-z", "2026-10-17", TEMOINS.sortieAVenir, TEMOINS.sortieAVenirQuoi, ["arts"]),
  ],
  traces: tracesPropres.map((t) => ({
    ...t,
    par_adulte: "un-parent",
    par_prenom: "Anatole",
    /* Une trace posée le soir d'une journée difficile, avec ce qui l'entoure. */
    journee: journeeDifficile,
  })),
  questions: [
    { ...exploreePropre, preparation: TEMOINS.preparation },
    question("q-2", "on-cherche", TEMOINS.questionEnCours, { preparation: TEMOINS.preparationEnCours }),
    question("q-3", "lue", TEMOINS.questionLue),
    question("q-4", "deposee", TEMOINS.questionDeposee),
  ],
  /* Ce qu'un écran du soir aurait aussi sous la main. */
  ressentis: [{ jour: "2026-09-28", choix: "pas-bien", mot: TEMOINS.motDuSoir, libelle: TEMOINS.ressenti }],
  consignes: [{ texte: TEMOINS.consigne, pourquoi: TEMOINS.pourquoiConsigne, origine: "soignant" }],
  portrait: { notions: [{ libelle: TEMOINS.portrait, etat: "fragile" }] },
};

/* ------------------------------------------------------------------ */
/* Ce qui ne sort pas                                                  */
/* ------------------------------------------------------------------ */

test("les chaînes témoins sont bien dans les données passées — sinon le test ne vérifie rien", () => {
  const entree = JSON.stringify(bruitees);
  for (const [quoi, temoin] of Object.entries(TEMOINS)) {
    assert.ok(entree.includes(temoin), `le témoin « ${quoi} » n'est pas dans les données`);
  }
});

test("aucune chaîne témoin n'apparaît dans ce que la projection rend", () => {
  const rendu = JSON.stringify(projeterLeControle(bruitees));
  for (const [quoi, temoin] of Object.entries(TEMOINS)) {
    assert.ok(!rendu.includes(temoin), `« ${quoi} » sort de la projection du contrôle`);
  }
  /* Ni la façon dont une journée s'est terminée, ni son ton, ni un prénom
     d'adulte — rien de ce qui dirait qu'une journée a été difficile. */
  /* Ni le nom de qui suit l'enfant : le document finit dans un dossier
     administratif. */
  for (const mot of ["arretee", "allegee", "pas-bien", "reportee", "Anatole", "Casimir", "soignant"]) {
    assert.ok(!rendu.includes(mot), `« ${mot} » sort de la projection du contrôle`);
  }
});

test("ce qu'il faut retirer ne change rien à ce qui est montré", () => {
  /* La garantie la plus forte : avec ou sans les ressentis, les notes, les
     questions en cours, les séances mises de côté et les sorties à venir, le
     document est le même, au caractère près. */
  assert.deepEqual(projeterLeControle(bruitees), projeterLeControle(propres));
});

test("ce qui doit être montré l'est — sinon l'absence des témoins ne prouverait rien", () => {
  const vue = projeterLeControle(bruitees);
  const texte = JSON.stringify(vue);
  for (const attendu of [
    "Le marché aux poissons",
    "On a pesé, compté, payé.",
    "On a fait évaporer un bol d’eau de mer sur le radiateur.",
    "Un volcan en argile",
    "Comparer, ranger et encadrer",
  ]) {
    assert.ok(texte.includes(attendu), `« ${attendu} » manque au document`);
  }
  assert.equal(vue.enfant, "Dorian");
});

/* ------------------------------------------------------------------ */
/* Les sorties                                                         */
/* ------------------------------------------------------------------ */

test("les sorties à venir sont exclues, et leurs matières ne comptent pas comme couvertes", () => {
  const vue = projeterLeControle(bruitees);
  assert.deepEqual(
    vue.sorties.passees.map((s) => s.titre),
    ["Le marché aux poissons", "Le beffroi"],
  );
  assert.deepEqual(
    vue.sorties.couvertes.map((m) => m.id),
    ["maths", "sciences", "histoire"],
    "les arts ne sont touchés que par une sortie qui n'a pas encore eu lieu",
  );

  /* La sortie du jour même a eu lieu ; celle du lendemain, non. */
  const bornes = projeterLeControle({
    ...propres,
    sorties: [
      sortie("s-j", ARRETE_AU, "Aujourd’hui", "Ce matin.", ["arts"]),
      sortie("s-l", "2026-10-09", "Demain", "Demain matin.", ["emc"]),
    ],
  });
  assert.deepEqual(bornes.sorties.passees.map((s) => s.titre), ["Aujourd’hui"]);
  assert.equal(bornes.sorties.passees[0].date, "jeudi 8 octobre 2026");
});

/* ------------------------------------------------------------------ */
/* Les nombres                                                         */
/* ------------------------------------------------------------------ */

test("les leçons travaillées par matière sont justes : une fois chacune, dans sa matière du manuel", () => {
  const vue = projeterLeControle(bruitees);
  const par = new Map(vue.instruction.matieres.map((m) => [m.id, m]));

  const maths = par.get("maths")!;
  assert.equal(maths.leconsDeLAnnee, 3);
  /* m-2 donnée puis reprise compte une fois ; m-3 n'a été faite qu'avant la
     rentrée et écrite pour plus tard ; l'ordre est celui du manuel. */
  assert.deepEqual(maths.travaillees, [
    { code: "m-1", titre: "Les nombres jusqu’à 9 999" },
    { code: "m-2", titre: "Comparer, ranger et encadrer" },
  ]);

  const francais = par.get("francais")!;
  assert.equal(francais.leconsDeLAnnee, 2);
  /* f-1 mise de côté, f-2 prévue demain, f-ancien inconnue du manuel. */
  assert.deepEqual(francais.travaillees, []);

  const sciences = par.get("sciences")!;
  assert.equal(sciences.leconsDeLAnnee, 1);
  assert.deepEqual(sciences.travaillees.map((l) => l.code), ["s-1"]);

  /* « À la maison » n'a pas de leçon au manuel, mais du temps. */
  const maison = par.get("maison")!;
  assert.equal(maison.leconsDeLAnnee, 0);
  assert.deepEqual(maison.travaillees, []);

  /* Aucune leçon n'est comptée deux fois, ni hors du manuel. */
  const toutes = vue.instruction.matieres.flatMap((m) => m.travaillees.map((l) => l.code));
  assert.deepEqual([...toutes].sort(), ["m-1", "m-2", "s-1"]);
  assert.equal(vue.cadre.manuel.lecons, 6);
  assert.equal(vue.cadre.manuel.matieres, 3);
});

test("les jours et le temps ne comptent que les séances faites, dans l'année, jusqu'au jour de consultation", () => {
  const vue = projeterLeControle(bruitees);

  /* 17 et 28 septembre, 1er octobre. */
  assert.equal(vue.instruction.jours, 3);
  /* 15 + 40 + 30 + 40 + 35 + 45 + 20 = 225 minutes. */
  assert.equal(vue.instruction.duree, "3 h 45");

  const par = new Map(vue.instruction.matieres.map((m) => [m.id, m.duree]));
  assert.equal(par.get("maths"), "2 h 10");
  assert.equal(par.get("francais"), "50 min");
  assert.equal(par.get("maison"), "45 min");
  assert.equal(par.get("sciences"), null, "la leçon de sciences a été faite sous « à la maison »");

  /* Une matière du manuel où rien n'a été fait garde sa ligne : le total de
     l'année est un fait, même quand rien n'est encore travaillé. Une matière
     sans leçon ni temps n'en a pas. */
  const ids = vue.instruction.matieres.map((m) => m.id);
  assert.deepEqual(ids, ["francais", "maths", "sciences", "maison"]);
});

test("un manuel sans aucune séance faite ne rend ni jour, ni leçon, ni durée inventée", () => {
  const vue = projeterLeControle({ ...propres, seances: [], sorties: [], questions: [], traces: [] });
  assert.equal(vue.instruction.jours, 0);
  assert.equal(vue.instruction.duree, "0 min");
  assert.ok(vue.instruction.matieres.every((m) => m.duree === null && m.travaillees.length === 0));
  assert.deepEqual(vue.sorties, { passees: [], couvertes: [] });
  assert.deepEqual(vue.explorations, []);
  assert.deepEqual(vue.traces, []);
});

test("les durées s'écrivent en heures et minutes, avec des espaces insécables", () => {
  assert.equal(enHeures(0), "0 min");
  assert.equal(enHeures(45), "45 min");
  assert.equal(enHeures(60), "1 h");
  assert.equal(enHeures(125), "2 h 05");
  assert.equal(enHeures(25860), "431 h");
});

/* ------------------------------------------------------------------ */
/* Les explorations et les traces                                      */
/* ------------------------------------------------------------------ */

test("seules les questions explorées sortent, avec leur domaine, leur date et le récit, sans la question ni la préparation", () => {
  const vue = projeterLeControle(bruitees);
  assert.deepEqual(vue.explorations, [
    {
      id: "vivant",
      domaine: "Le vivant",
      teinte: "sauge",
      questions: [
        {
          id: "q-1",
          trace: "On a fait évaporer un bol d’eau de mer sur le radiateur.",
          date: "30 septembre 2026",
        },
      ],
    },
  ]);
});

test("les traces sont datées à Paris, dans l'ordre où elles sont arrivées", () => {
  const vue = projeterLeControle(bruitees);
  assert.deepEqual(
    vue.traces.map((t) => [t.titre, t.date, t.matiere?.nom]),
    [
      ["Un volcan en argile", "18 septembre 2026", "Sciences et technologie"],
      ["Une carte du quartier", "21 septembre 2026", "Géographie"],
    ],
  );
});

/* ------------------------------------------------------------------ */
/* Le document                                                         */
/* ------------------------------------------------------------------ */

test("le document dit en tête ce qu'il retire, et l'année qu'il couvre", () => {
  const vue = projeterLeControle(propres);
  const retire = vue.retire.join(" ; ");
  for (const categorie of [
    "ressentis",
    "notes du soir",
    "mots que les adultes lui laissent",
    "dans ses mots",
    "préparation de son parrain",
    "consignes de son suivi",
    "portrait du test",
    "résultats de ses exercices",
    "journées interrompues",
  ]) {
    assert.ok(retire.includes(categorie), `la liste de ce qui est retiré ne dit plus « ${categorie} »`);
  }
  assert.equal(vue.cadre.annee, "2026-2027");
  assert.equal(vue.cadre.du, "mercredi 16 septembre 2026");
  assert.equal(vue.cadre.au, "vendredi 2 juillet 2027");
  assert.equal(vue.cadre.academie, "Lille (zone B)");
  assert.deepEqual(vue.cadre.rythme, { jours: 162, heures: 431 });
  assert.equal(DEBUT_DE_L_ANNEE, "2026-09-01");
});

test("sans enfant dans la famille, le document ne prête de prénom à personne", () => {
  const vue = projeterLeControle({ ...propres, personnes: personnes.filter((p) => p.role !== "enfant") });
  assert.equal(vue.enfant, "l’enfant");
  assert.ok(!JSON.stringify(vue).includes("Anatole"));
});

/* ------------------------------------------------------------------ */
/* La porte                                                            */
/* ------------------------------------------------------------------ */

test("la page du contrôle renvoie l'enfant vers sa journée, avant de lire quoi que ce soit", () => {
  const source = readFileSync(join(RACINE, "app", "controle", "page.tsx"), "utf8");

  const enfant = source.search(/if \(moi\.role === "enfant"\)\s*redirect\("\/journee"\)/);
  const lecture = source.indexOf("lireLeControle(moi.famille_id");

  assert.ok(enfant >= 0, "l'enfant n'est plus renvoyé vers sa journée");
  assert.ok(lecture >= 0, "la lecture du contrôle n'est plus reconnue");
  assert.ok(enfant < lecture, "le contrôle est lu avant que la porte soit vérifiée");
});
