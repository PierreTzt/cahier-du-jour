/**
 * Le relevé d'une période — ce qu'on remet au soignant, ce qu'on remet à
 * l'inspection, et ce qu'on ne remet à personne.
 *
 * La garantie qui compte est une absence, comme pour le contrôle : ce que
 * l'enfant dépose le soir, les mots qu'on lui laisse, les consignes du soignant,
 * les résultats et le portrait du test, le texte de ses questions ne sortent
 * d'aucune des deux versions. Une absence ne se voit pas à l'œil, et elle se
 * casse en silence. On passe donc à `projeterLeReleve` **plus qu'elle ne
 * demande** — des lignes où chaque champ à retirer porte une chaîne témoin —
 * et on vérifie qu'aucune ne ressort.
 *
 * Ensuite ce qui distingue les deux versions : l'inspection ne lit ni la
 * bande ni les notes du soir, et le mot « soignant » n'y figure pas — elle finit
 * dans un dossier administratif. Le soignant ne lit pas l'inventaire de
 * l'instruction.
 *
 * Tout est fabriqué : aucune base, aucune dépendance au calendrier réel.
 */

import { test } from "node:test";
import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import { fileURLToPath } from "node:url";
import { join } from "node:path";
import {
  DESTINATAIRE_PAR_DEFAUT,
  PREMIERE_RENTREE,
  destinataireDe,
  periodeDu,
  periodesVoisines,
  projeterLeReleve,
  type DonneesDuReleve,
  type JourneeLue,
  type ReleveSoignant,
  type ReleveInspection,
  type SeanceMenee,
} from "../lib/releve-periode";
import { dateValide, type NatureDuJour } from "../lib/bande";
import { domaines, type ExploreesDuDomaine } from "../lib/pourquoi";
import type { Sortie } from "../lib/sorties";
import type { LigneTrace } from "../lib/valorisation";
import type { LeconDuManuel } from "../lib/controle";
import type { MatiereId } from "../lib/data";

const RACINE = fileURLToPath(new URL("..", import.meta.url));

/* Un jeudi. La période par défaut va du lundi 20 juillet au dimanche
   11 octobre, et le document s'arrête à aujourd'hui. */
const AUJOURDHUI = "2026-10-08";
const PERIODE = periodeDu(undefined, AUJOURDHUI);

/* Les durées s'écrivent avec des espaces insécables, pour qu'« 1 h 05 » ne se
   coupe pas en fin de ligne. */
const insecables = (s: string) => s.replace(/ /g, String.fromCharCode(0xa0));

/* Des chaînes qu'aucun titre, aucune date, aucun libellé ne peut contenir. */
const TEMOINS = {
  ressentiChoix: "tém-ressenti-choix-q7Zx",
  motDuSoir: "tém-mot-du-soir-Kp3v",
  motLaisse: "tém-mot-laisse-Hd2j",
  consigneDuSoignant: "tém-consigne-du-soignant-Rc7p",
  pourquoiConsigne: "tém-raison-de-la-consigne-Gv2m",
  portrait: "tém-portrait-du-test-Zj5k",
  resultat: "tém-resultat-d-exercice-Ea3w",
  reponseDuManuel: "tém-reponse-du-manuel-Po8d",
  preparation: "tém-preparation-du-parrain-Yt5n",
  texteDeQuestion: "tém-texte-de-la-question-Bw4x",
  consigneDeSeance: "tém-consigne-de-seance-Ck1b",
  seanceMiseDeCote: "tém-seance-mise-de-cote-Mh6s",
  seanceDeDemain: "tém-seance-de-demain-Tr8u",
  seanceAvant: "tém-seance-avant-la-periode-Ja2k",
  sortieAVenir: "tém-sortie-a-venir-Vy9f",
  sortieAvant: "tém-sortie-avant-la-periode-Lq3z",
  traceDuLendemain: "tém-trace-du-lendemain-Xe5c",
  traceAvant: "tém-trace-avant-la-periode-Hn7w",
  explorationAvant: "tém-exploration-avant-la-periode-Df6r",
  noteDeDemain: "tém-note-de-demain-Sg1p",
  noteAvant: "tém-note-avant-la-periode-Cz9m",
};

/* ------------------------------------------------------------------ */
/* Les données propres : ce qu'une lecture exacte rendrait             */
/* ------------------------------------------------------------------ */

/** Une trame inventée : l'année commence le 16 septembre, les week-ends sont des week-ends. */
function natureDe(iso: string): NatureDuJour {
  const jour = new Date(`${iso}T00:00:00Z`).getUTCDay();
  if (jour === 0 || jour === 6) return { nature: "week-end" };
  return { nature: iso < "2026-09-16" ? "hors-annee" : "classe" };
}

const journee = (jour: string, j: Partial<JourneeLue> = {}): JourneeLue => ({
  jour,
  ton: "normale",
  cloture: null,
  note: "",
  note_prenom: null,
  note_role: null,
  seances: 5,
  ...j,
});

const NOTE_ARRET = "Il a posé le crayon après la dictée. On a fini dehors.";
const NOTE_REPOS = "Journée au calme, décidée la veille.";
const NOTE_SAMEDI = "Il a raconté le marché à sa grand-mère.";
const NOTE_ANONYME = "Bonne matinée, fatigué l’après-midi.";

const journeesPropres: JourneeLue[] = [
  journee("2026-09-18", {
    cloture: "arretee",
    ton: "allegee",
    note: NOTE_ARRET,
    note_prenom: "Anatole",
    note_role: "Papa",
  }),
  journee("2026-09-21", { cloture: "terminee" }),
  journee("2026-09-25", {
    ton: "repos",
    seances: 0,
    note: `  ${NOTE_REPOS}\n`,
    note_prenom: "Bérénice",
    note_role: "Maman",
  }),
  journee("2026-10-03", { seances: 0, note: NOTE_SAMEDI, note_prenom: "Bérénice", note_role: "Maman" }),
  /* Écrite par un adulte qui n'a plus d'accès : la note reste, pas son nom. */
  journee("2026-10-06", { cloture: "terminee", note: NOTE_ANONYME }),
  /* Une note faite d'espaces n'est pas une note. */
  journee("2026-10-07", { cloture: "terminee", note: "   \n " }),
];

const manuel: LeconDuManuel[] = [
  { code: "m-1", titre: "Les nombres jusqu’à 9 999", matiere: "maths" },
  { code: "m-2", titre: "Comparer, ranger et encadrer", matiere: "maths" },
  { code: "f-1", titre: "Le verbe et son sujet", matiere: "francais" },
  { code: "s-1", titre: "Les états de l’eau", matiere: "sciences" },
];

const faite = (jour: string, matiere: string, titre: string, minutes: number, lecon = ""): SeanceMenee => ({
  jour,
  matiere,
  titre,
  minutes,
  lecon,
  etat: "faite",
});

const seancesPropres: SeanceMenee[] = [
  faite("2026-09-17", "maths", "Les nombres jusqu’à 9 999", 40, "m-1"),
  faite("2026-09-17", "maths", "Le nombre du jour", 15),
  faite("2026-09-17", "francais", "Dictée de mots", 20),
  /* La même leçon reprise : une fois, sous le titre du manuel. */
  faite("2026-09-28", "maths", "Les nombres jusqu’à 9 999 — on reprend", 40, "m-1"),
  /* Le même rituel un autre jour : une fois. */
  faite("2026-09-28", "francais", "Dictée de mots", 20),
  /* Une leçon de sciences posée sous « à la maison » : la leçon en sciences, le temps à la maison. */
  faite("2026-10-01", "maison", "Une expérience", 45, "s-1"),
  /* Un code que le manuel ne connaît plus : son titre, comme une séance écrite. */
  faite("2026-10-01", "francais", "Lecture à voix haute", 25, "f-ancien"),
];

function sortie(id: string, jour: string, titre: string, quoi: string, matieres: MatiereId[]): Sortie {
  return { id, jour, titre, lieu: "Le port", quoi, matieres, par_adulte: null, par_prenom: null };
}

const sortiesPropres: Sortie[] = [
  sortie("s-a", "2026-09-19", "Le marché aux poissons", "On a pesé, compté, payé.", ["maths", "sciences"]),
  /* Aujourd'hui : elle a eu lieu. */
  sortie("s-b", AUJOURDHUI, "Le beffroi", "La montée, et la date sur la cloche.", ["histoire", "maths"]),
];

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
  /* Les plus récentes d'abord, comme `tracesDe` les rend. */
  /* 21 h 30 UTC le 8 octobre : 23 h 30 à Paris, le jour même. */
  trace("t-2", "Une carte du quartier", "2026-10-08T21:30:00Z", "geographie"),
  trace("t-1", "Un volcan en argile", "2026-09-18T14:00:00Z", "sciences"),
  /* 22 h 30 UTC le dimanche 19 juillet : minuit et demi à Paris, le lundi 20 — le premier jour. */
  trace("t-0", "Un herbier", "2026-07-19T22:30:00Z", "sciences"),
];

const RECIT = "On a fait évaporer un bol d’eau de mer sur le radiateur.";

const explorationsPropres: ExploreesDuDomaine[] = [
  {
    domaine: domaines.vivant,
    questions: [{ id: "q-1", texte: TEMOINS.texteDeQuestion, trace: RECIT, exploree_le: "2026-09-30" }],
  },
];

const personnesDuReleve = { enfant: "Dorian" };

const propres = (destinataire: DonneesDuReleve["destinataire"]): DonneesDuReleve => ({
  destinataire,
  periode: PERIODE,
  aujourdhui: AUJOURDHUI,
  enfant: personnesDuReleve.enfant,
  natureDe,
  journees: journeesPropres,
  seances: seancesPropres,
  manuel,
  sorties: sortiesPropres,
  traces: tracesPropres,
  explorations: explorationsPropres,
});

/* ------------------------------------------------------------------ */
/* Les mêmes, avec tout ce que le relevé doit retirer                  */
/* ------------------------------------------------------------------ */

/* Des objets non annotés : TypeScript les accepte là où une ligne propre est
   attendue, avec leurs champs en trop — exactement ce qui arriverait si une
   lecture devenait un `select *` joint au ressenti et aux mots du jour. */

const soir = {
  ressenti: { choix: TEMOINS.ressentiChoix, mot: TEMOINS.motDuSoir },
  mots: [{ texte: TEMOINS.motLaisse, par_prenom: "Casimir", par_role: "Parrain" }],
};

const bruitees = (destinataire: DonneesDuReleve["destinataire"]) => ({
  ...propres(destinataire),
  journees: [
    ...journeesPropres.map((j) => ({ ...j, ...soir })),
    /* Hors de ce que le document dit : demain, et avant la période. */
    journee("2026-10-09", { note: TEMOINS.noteDeDemain, note_prenom: "Anatole", note_role: "Papa" }),
    journee("2026-07-10", { note: TEMOINS.noteAvant, note_prenom: "Anatole", note_role: "Papa" }),
  ],
  manuel: manuel.map((l) => ({
    ...l,
    exercices: [{ code: `${l.code}-1`, enonce: "Un énoncé.", resultat: TEMOINS.reponseDuManuel }],
  })),
  seances: [
    ...seancesPropres.map((s) => ({
      ...s,
      consigne: TEMOINS.consigneDeSeance,
      travail: [{ exercice: "m-1-1", valeur: TEMOINS.resultat, sait_pas: false }],
      releve: { faits: 6, total: 8, justes: 5 },
    })),
    { ...faite("2026-09-28", "francais", TEMOINS.seanceMiseDeCote, 30, "f-1"), etat: "reportee" as const },
    { ...faite("2026-10-02", "maths", TEMOINS.seanceMiseDeCote, 30, "m-2"), etat: "a-venir" as const },
    faite("2026-10-09", "francais", TEMOINS.seanceDeDemain, 30, "f-1"),
    faite("2026-07-17", "maths", TEMOINS.seanceAvant, 30, "m-2"),
  ],
  sorties: [
    ...sortiesPropres.map((s) => ({ ...s, par_adulte: "un-parent", par_prenom: "Anatole" })),
    /* Samedi prochain, notée d'avance — dans les douze semaines, mais pas encore vécue. */
    sortie("s-z", "2026-10-10", TEMOINS.sortieAVenir, TEMOINS.sortieAVenir, ["arts"]),
    sortie("s-y", "2026-07-18", TEMOINS.sortieAvant, TEMOINS.sortieAvant, ["emc"]),
  ],
  traces: [
    trace("t-9", TEMOINS.traceDuLendemain, "2026-10-08T22:30:00Z", "arts"),
    ...tracesPropres.map((t) => ({ ...t, par_adulte: "un-parent", par_prenom: "Anatole", journee: soir })),
    /* 23 h 30 à Paris le dimanche 19 juillet : la veille du premier jour. */
    trace("t-8", TEMOINS.traceAvant, "2026-07-19T21:30:00Z", "arts"),
  ],
  explorations: [
    {
      domaine: domaines.vivant,
      questions: explorationsPropres[0].questions.map((q) => ({ ...q, preparation: TEMOINS.preparation })),
    },
    {
      domaine: domaines.ciel,
      questions: [{ id: "q-9", texte: TEMOINS.texteDeQuestion, trace: TEMOINS.explorationAvant, exploree_le: "2026-07-01" }],
    },
  ],
  /* Ce qu'un écran de parent aurait aussi sous la main. */
  consignes: [{ texte: TEMOINS.consigneDuSoignant, pourquoi: TEMOINS.pourquoiConsigne, origine: "soignant" }],
  portrait: { notions: [{ libelle: TEMOINS.portrait, etat: "fragile" }] },
});

const soignant = (d: DonneesDuReleve) => projeterLeReleve(d) as ReleveSoignant;
const inspection = (d: DonneesDuReleve) => projeterLeReleve(d) as ReleveInspection;

/* ------------------------------------------------------------------ */
/* Ce qui ne sort d'aucune des deux versions                           */
/* ------------------------------------------------------------------ */

test("les chaînes témoins sont bien dans les données passées — sinon le test ne vérifie rien", () => {
  for (const destinataire of ["soignant", "inspection"] as const) {
    const entree = JSON.stringify(bruitees(destinataire));
    for (const [quoi, temoin] of Object.entries(TEMOINS)) {
      assert.ok(entree.includes(temoin), `le témoin « ${quoi} » n'est pas dans les données`);
    }
  }
});

test("aucune chaîne témoin ne sort du relevé, ni pour le soignant ni pour l'inspection", () => {
  for (const destinataire of ["soignant", "inspection"] as const) {
    const rendu = JSON.stringify(projeterLeReleve(bruitees(destinataire)));
    for (const [quoi, temoin] of Object.entries(TEMOINS)) {
      assert.ok(!rendu.includes(temoin), `« ${quoi} » sort du relevé pour ${destinataire}`);
    }
    /* Ni le ressenti, ni l'adulte qui a laissé un mot, ni le moindre score. */
    for (const mot of ["pas-bien", "Casimir", "justes", "faits", "total", "%", "moyenne", "score"]) {
      assert.ok(!rendu.includes(mot), `« ${mot} » sort du relevé pour ${destinataire}`);
    }
    assert.doesNotMatch(rendu, /\d+\s*\/\s*\d+/, `une fraction sort du relevé pour ${destinataire}`);
  }
});

test("ce qu'il faut retirer ne change rien au document, au caractère près", () => {
  for (const destinataire of ["soignant", "inspection"] as const) {
    assert.deepEqual(
      projeterLeReleve(bruitees(destinataire)),
      projeterLeReleve(propres(destinataire)),
      `le relevé pour ${destinataire} change quand on lui passe ce qu'il doit retirer`,
    );
  }
});

/* ------------------------------------------------------------------ */
/* Deux destinataires, deux documents                                  */
/* ------------------------------------------------------------------ */

test("la version de l'inspection ne dit rien de la façon dont les journées se sont passées", () => {
  const vue = inspection(bruitees("inspection"));
  const rendu = JSON.stringify(vue);

  assert.equal(vue.destinataire, "inspection");
  for (const cle of ["bande", "legende", "constat", "notes"]) {
    assert.ok(!(cle in vue), `la version de l'inspection porte « ${cle} »`);
  }
  for (const note of [NOTE_ARRET, NOTE_REPOS, NOTE_SAMEDI, NOTE_ANONYME]) {
    assert.ok(!rendu.includes(note), `une note du soir sort pour l'inspection : « ${note} »`);
  }
  /* Ni une journée arrêtée, allégée ou en repos, ni un prénom d'adulte. */
  for (const motif of [/arr[eê]t/i, /all[eé]g/i, /repos/i, /Anatole/, /Bérénice/]) {
    assert.doesNotMatch(rendu, motif);
  }
  /* Elle finit dans un dossier administratif : le soignant n'y est pas nommé,
     même pour dire ce qui a été retiré. */
  assert.doesNotMatch(rendu, /soignant/i);
  assert.doesNotMatch(rendu, /soignant|médical|clinique/i);
});

test("la version du soignant ne porte pas l'inventaire de l'instruction", () => {
  const vue = soignant(bruitees("soignant"));
  const rendu = JSON.stringify(vue);

  assert.equal(vue.destinataire, "soignant");
  for (const cle of ["instruction", "sorties", "traces", "explorations"]) {
    assert.ok(!(cle in vue), `la version du soignant porte « ${cle} »`);
  }
  for (const texte of ["Le marché aux poissons", "Un volcan en argile", RECIT, "Dictée de mots", "Les nombres jusqu’à 9 999"]) {
    assert.ok(!rendu.includes(texte), `« ${texte} » sort pour le soignant`);
  }
  assert.equal(vue.bande.length, 12);
  assert.ok(vue.legende.some((l) => l.etat === "arretee" && l.n === 1));
  assert.equal(vue.constat.arretees, 1);
});

test("chaque version dit en tête à qui elle s'adresse, et ce qu'elle ne contient pas", () => {
  const c = soignant(propres("soignant"));
  const i = inspection(propres("inspection"));

  assert.match(c.pourQui, /soignant/);
  assert.match(c.absent.join(" ; "), /dit de sa journée le soir/);
  assert.match(c.absent.join(" ; "), /mots que les adultes lui laissent/);
  assert.match(c.absent.join(" ; "), /portrait du test/);

  assert.match(i.absent.join(" ; "), /résultats de ses exercices/);
  assert.match(i.absent.join(" ; "), /texte des questions/);

  for (const vue of [c, i]) {
    assert.equal(vue.enfant, "Dorian");
    assert.equal(vue.periode, "du lundi 20 juillet au jeudi 8 octobre 2026");
    assert.equal(vue.etabliLe, "jeudi 8 octobre 2026");
  }
});

/* ------------------------------------------------------------------ */
/* Pour le soignant : les notes du soir                                    */
/* ------------------------------------------------------------------ */

test("les notes du soir sortent dans l'ordre des jours, avec l'état du jour et qui les a écrites", () => {
  const vue = soignant(bruitees("soignant"));
  assert.deepEqual(vue.notes, [
    {
      jour: "2026-09-18",
      date: "vendredi 18 septembre",
      etat: "arrêtée en cours · journée allégée",
      texte: NOTE_ARRET,
      auteur: "Anatole · Papa",
    },
    {
      jour: "2026-09-25",
      date: "vendredi 25 septembre",
      etat: "jour de repos",
      texte: NOTE_REPOS,
      auteur: "Bérénice · Maman",
    },
    /* Un samedi n'a pas d'état à dire. */
    { jour: "2026-10-03", date: "samedi 3 octobre", etat: null, texte: NOTE_SAMEDI, auteur: "Bérénice · Maman" },
    {
      jour: "2026-10-06",
      date: "mardi 6 octobre",
      etat: "menée au bout",
      texte: NOTE_ANONYME,
      auteur: "un adulte qui n’a plus d’accès",
    },
  ]);
});

/* ------------------------------------------------------------------ */
/* Pour l'inspection                                                   */
/* ------------------------------------------------------------------ */

test("les sorties à venir sont écartées, et leurs matières ne comptent pas comme touchées", () => {
  const vue = inspection(bruitees("inspection"));
  assert.deepEqual(
    vue.sorties.passees.map((s) => [s.titre, s.date, s.lieu]),
    [
      ["Le marché aux poissons", "samedi 19 septembre", "Le port"],
      ["Le beffroi", "jeudi 8 octobre", "Le port"],
    ],
  );
  assert.deepEqual(vue.sorties.couvertes, ["Mathématiques", "Sciences et technologie", "Histoire"]);
  assert.deepEqual(vue.sorties.passees[1].matieres, ["Histoire", "Mathématiques"]);
});

test("les traces ne sortent que dans la période, datées au jour de Paris", () => {
  const vue = inspection(bruitees("inspection"));
  assert.deepEqual(
    vue.traces.map((t) => [t.titre, t.date, t.matiere]),
    [
      ["Un herbier", "lundi 20 juillet", "Sciences et technologie"],
      ["Un volcan en argile", "vendredi 18 septembre", "Sciences et technologie"],
      ["Une carte du quartier", "jeudi 8 octobre", "Géographie"],
    ],
  );
});

test("une trace s'arrête à la période choisie, pas à aujourd'hui", () => {
  /* Les douze semaines qui finissent le dimanche 20 septembre. */
  const periode = periodeDu("2026-09-20", AUJOURDHUI);
  const vue = inspection({ ...propres("inspection"), periode });
  assert.deepEqual(vue.traces.map((t) => t.titre), ["Un herbier", "Un volcan en argile"]);
  assert.deepEqual(vue.sorties.passees.map((s) => s.titre), ["Le marché aux poissons"]);
  assert.equal(vue.periode, "du lundi 29 juin au dimanche 20 septembre 2026");
});

test("ce qui a été exploré sort par domaine, avec le récit du parrain et jamais le texte de la question", () => {
  const vue = inspection(bruitees("inspection"));
  assert.deepEqual(vue.explorations, [
    { domaine: "Le vivant", recits: [{ id: "q-1", date: "mercredi 30 septembre", recit: RECIT }] },
  ]);
});

test("les séances menées sont rangées par matière : chaque leçon une fois, chaque rituel une fois", () => {
  const vue = inspection(bruitees("inspection"));
  assert.equal(vue.instruction.jours, 3);
  /* 20 + 20 + 25 en français, 40 + 15 + 40 en maths, 45 à la maison. */
  assert.equal(vue.instruction.duree, insecables("3 h 25"));
  assert.deepEqual(vue.instruction.matieres, [
    {
      id: "francais",
      nom: "Français",
      duree: insecables("1 h 05"),
      lecons: [],
      seances: ["Dictée de mots", "Lecture à voix haute"],
    },
    {
      id: "maths",
      nom: "Mathématiques",
      duree: insecables("1 h 35"),
      lecons: ["Les nombres jusqu’à 9 999"],
      seances: ["Le nombre du jour"],
    },
    { id: "sciences", nom: "Sciences et technologie", duree: null, lecons: ["Les états de l’eau"], seances: [] },
    { id: "maison", nom: "À la maison", duree: insecables("45 min"), lecons: [], seances: [] },
  ]);
});

test("une période sans rien ne fabrique ni jour, ni durée, ni rubrique", () => {
  const vide = { ...propres("inspection"), journees: [], seances: [], sorties: [], traces: [], explorations: [] };
  const i = inspection(vide);
  assert.equal(i.instruction.jours, 0);
  assert.equal(i.instruction.duree, insecables("0 min"));
  assert.deepEqual(i.instruction.matieres, []);
  assert.deepEqual(i.sorties, { passees: [], couvertes: [] });
  assert.deepEqual(i.traces, []);
  assert.deepEqual(i.explorations, []);

  const c = soignant({ ...vide, destinataire: "soignant" });
  assert.deepEqual(c.notes, []);
  assert.equal(c.constat.genre, "aucune");
});

test("sans enfant dans la famille, le document ne prête de prénom à personne", () => {
  for (const destinataire of ["soignant", "inspection"] as const) {
    const vue = projeterLeReleve({ ...propres(destinataire), enfant: null });
    assert.equal(vue.enfant, "l’enfant");
    assert.ok(!JSON.stringify(vue).includes("Dorian"));
  }
});

/* ------------------------------------------------------------------ */
/* L'adresse                                                           */
/* ------------------------------------------------------------------ */

test("sans destinataire lisible, c'est la version de l'inspection — la moins bavarde", () => {
  assert.equal(DESTINATAIRE_PAR_DEFAUT, "inspection");
  assert.equal(destinataireDe("soignant"), "soignant");
  assert.equal(destinataireDe("inspection"), "inspection");
  for (const forge of [undefined, "", "Soignant", "tout", ["soignant", "soignant"], 1]) {
    assert.equal(destinataireDe(forge), "inspection", `« ${String(forge)} » choisit un destinataire`);
  }
});

test("la période par défaut : les douze semaines qui finissent sur celle d'aujourd'hui", () => {
  assert.deepEqual(PERIODE, { jusquau: AUJOURDHUI, du: "2026-07-20", au: "2026-10-11", arreteAu: AUJOURDHUI });
  assert.deepEqual(periodeDu("2026-09-20", AUJOURDHUI), {
    jusquau: "2026-09-20",
    du: "2026-06-29",
    au: "2026-09-20",
    arreteAu: "2026-09-20",
  });
});

test("une date forgée ne sort jamais des bornes que Postgres sait lire", () => {
  const forges: unknown[] = [
    "0001-01-01", "9999-12-31", "2026-02-31", "2026-9-1", "demain", "", ["2026-09-20", "2026-10-01"], 20260920, null,
  ];
  for (const forge of forges) {
    const p = periodeDu(forge, AUJOURDHUI);
    for (const [cle, valeur] of Object.entries(p)) {
      assert.ok(dateValide(valeur), `${cle} = ${valeur} pour « ${String(forge)} »`);
    }
    assert.ok(p.jusquau >= PREMIERE_RENTREE && p.jusquau <= AUJOURDHUI, `« ${String(forge)} » sort des bornes`);
    assert.ok(p.arreteAu <= AUJOURDHUI && p.du <= p.arreteAu);
  }
  /* Trop tôt : la première rentrée. Plus tard qu'aujourd'hui : aujourd'hui. */
  assert.equal(periodeDu("0001-01-01", AUJOURDHUI).jusquau, PREMIERE_RENTREE);
  assert.equal(periodeDu("2027-06-01", AUJOURDHUI).jusquau, AUJOURDHUI);
  assert.equal(periodeDu("2026-02-31", AUJOURDHUI).jusquau, AUJOURDHUI);
});

test("les périodes voisines : rien avant la première rentrée, rien après aujourd'hui", () => {
  /* En janvier, la période d'avant finit le vendredi qui précède la grille. */
  assert.deepEqual(periodesVoisines(periodeDu(undefined, "2027-01-15"), "2027-01-15"), {
    plusTot: "2026-10-23",
    plusTard: null,
    cetteSemaine: true,
  });
  /* Celle d'aujourd'hui contient déjà la première rentrée : pas de précédente,
     elle ne ferait que retomber sur celle-ci. */
  assert.equal(periodesVoisines(PERIODE, AUJOURDHUI).plusTot, null);
  /* Et depuis la plus ancienne, la suivante rejoint la semaine en cours. */
  assert.deepEqual(periodesVoisines(periodeDu("0001-01-01", AUJOURDHUI), AUJOURDHUI), {
    plusTot: null,
    plusTard: { jusquau: null },
    cetteSemaine: false,
  });
  assert.deepEqual(periodesVoisines(periodeDu("2026-09-20", "2027-01-15"), "2027-01-15"), {
    plusTot: null,
    plusTard: { jusquau: "2026-12-11" },
    cetteSemaine: false,
  });
});

/* ------------------------------------------------------------------ */
/* La page                                                             */
/* ------------------------------------------------------------------ */

test("la page ferme ses portes avant de lire quoi que ce soit", () => {
  const source = readFileSync(join(RACINE, "app", "releve", "page.tsx"), "utf8");

  const entrer = source.indexOf('if (!moi) redirect(entreeAdulte("/releve"))');
  const enfant = source.search(/if \(moi\.role === "enfant"\)\s*redirect\("\/journee"\)/);
  const proche = source.indexOf('if (!estParent(moi)) return <ReserveAuxParents moi={moi} quoi="Le relevé" />');
  const lecture = source.indexOf("lireLeReleve(moi.famille_id");

  assert.ok(entrer >= 0, "la personne non connectée n'est plus renvoyée vers l'entrée");
  assert.ok(enfant >= 0, "l'enfant n'est plus renvoyé vers sa journée");
  assert.ok(proche >= 0, "le proche n'est plus arrêté à la porte des parents");
  assert.ok(lecture >= 0, "la lecture du relevé n'est plus reconnue");
  assert.ok(entrer < enfant && enfant < proche && proche < lecture, "le relevé est lu avant que les portes soient vérifiées");
});

/**
 * La bande sur papier noir et blanc. Les états s'y distinguent par leur forme,
 * pas seulement leur teinte — et le repos par des rayures que `globals.css`
 * accroche à la classe de sa case. Si la bande change de forme, ces rayures
 * disparaîtraient sans que personne le voie ; ce test le verra.
 */
test("la bande reste lisible en noir et blanc une fois imprimée", () => {
  const bande = readFileSync(join(RACINE, "components", "adulte", "BandeDesJours.tsx"), "utf8");
  const css = readFileSync(join(RACINE, "app", "globals.css"), "utf8");
  const page = readFileSync(join(RACINE, "app", "releve", "page.tsx"), "utf8");

  assert.match(bande, /repos:\s*"bg-reglure"/, "le repos n'a plus la classe à laquelle ses rayures s'accrochent");
  assert.equal(bande.match(/bg-reglure/g)?.length, 1, "une autre forme que le repos porte la classe des rayures");
  assert.match(bande, /etat === "arretee" && <span className="[^"]*h-1\/2 bg-ocre/, "la journée arrêtée n'est plus à moitié remplie");

  const impression = css.slice(css.indexOf("@media print"));
  assert.match(impression, /\.feuille-imprimable \.bg-reglure\s*\{[^}]*repeating-linear-gradient/);
  assert.match(impression, /\.feuille-imprimable\s*\{[^}]*print-color-adjust:\s*exact/);
  assert.match(page, /className="feuille-imprimable /, "le document n'est plus dans la feuille imprimable");
});
