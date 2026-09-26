/**
 * La boîte à pourquoi, vue par l'enfant.
 *
 * C'est une règle du produit qu'une régression peut casser en silence : un
 * compteur ajouté « pour le débogage », un tri par date « pour que ce soit plus
 * logique », un prénom glissé dans une phrase, la préparation du parrain
 * affichée « parce qu'elle est intéressante » — et l'écran de l'enfant se met à
 * montrer un manque, ou à dire qui est qui autrement qu'il ne le dit, sans que
 * personne s'en aperçoive à l'œil.
 *
 * `pourquoiVivant()` reçoit tout ce que la base contient, et doit n'en rendre
 * que des phrases. On lui donne donc tout : des dates exactes, des prénoms,
 * des préparations, un rendez-vous avec son horodatage.
 */

import { test } from "node:test";
import assert from "node:assert/strict";
import {
  atelierDe,
  grouperParDomaine,
  phrasesDuParrain,
  pourquoiVivant,
  rendezVousPourLEnfant,
  type Membre,
  type Question,
} from "../lib/pourquoi";

/* Des prénoms qu'aucune phrase ne peut contenir par hasard : « Pierre » serait
   un mauvais témoin, une question sur les cailloux le contiendrait. */
const famille: Membre[] = [
  { role: "parent", prenom: "Anatole", mot_de_l_enfant: "papa" },
  { role: "parent", prenom: "Bérénice", mot_de_l_enfant: "maman" },
  { role: "proche", prenom: "Casimir", mot_de_l_enfant: "parrain" },
  { role: "enfant", prenom: "Dorian", mot_de_l_enfant: "Dorian" },
];
const prenomsAdultes = famille.filter((p) => p.role !== "enfant").map((p) => p.prenom);

/* Ce que le parrain écrit pour lui-même. Ne doit sortir nulle part. */
const SECRET = "Préparation-témoin : emmener le vieux ventilateur";

let rang = 0;
function question(id: string, etat: Question["etat"], extra: Partial<Question> = {}): Question {
  rang += 1;
  return {
    id,
    texte: `Pourquoi la question ${id.slice(0, 4)} ?`,
    etat,
    preparation: SECRET,
    domaine: null,
    trace: "",
    /* Une par jour, dans l'ordre de création : l'ordre d'arrivée est connu. */
    deposee_le: new Date(Date.UTC(2026, 8, rang, 16, 30)),
    exploree_le: null,
    ...extra,
  };
}

function exploree(id: string, domaine: Question["domaine"], jour: string) {
  return question(id, "exploree", {
    domaine,
    trace: "On a démonté quelque chose sur la table de la cuisine.",
    exploree_le: jour,
  });
}

const questions: Question[] = [
  question("0b6f1c9e-1d2a-4c8e-9f3b-5a7d2e4c6b81", "deposee"),
  question("1c7e2dae-2e3b-4d9f-8a4c-6b8e3f5d7c92", "lue"),
  question("2d8f3ebf-3f4c-4eaf-9b5d-7c9f4a6e8da3", "on-cherche"),
  exploree("3e9a4fca-4a5d-4fba-8c6e-8daf5b7f9eb4", "machines", "2026-09-20"),
  exploree("4fab5adb-5b6e-4acb-9d7f-9ebf6c8aafc5", "ciel", "2026-10-03"),
  exploree("5abc6bec-6c7f-4bdc-8e8a-afca7d9bbad6", "mots", "2026-10-31"),
  exploree("6bcd7cfd-7d8a-4ced-9f9b-badb8eacbbe7", "vivant", "2026-11-12"),
  exploree("7cde8dae-8e9b-4dfe-8aac-cbec9fbdccf8", "enigmes", "2026-12-01"),
  exploree("8def9ebf-9fac-4eaf-9bbd-dcfdaacedda9", "machines", "2027-01-15"),
];

const rdv = { quand: "samedi", quoi: "ce qui fait tenir un pont", modifie_le: new Date() };

/** Toutes les feuilles d'une valeur, avec leur chemin. Une `Date` est une feuille. */
function feuilles(x: unknown, chemin = "vue"): { chemin: string; valeur: unknown }[] {
  if (x instanceof Date) return [{ chemin, valeur: x }];
  if (Array.isArray(x)) return x.flatMap((v, i) => feuilles(v, `${chemin}[${i}]`));
  if (x && typeof x === "object")
    return Object.entries(x).flatMap(([k, v]) => feuilles(v, `${chemin}.${k}`));
  return [{ chemin, valeur: x }];
}

/** Toutes les clés d'une valeur, à toutes les profondeurs. */
function cles(x: unknown): string[] {
  if (Array.isArray(x)) return x.flatMap(cles);
  if (x && typeof x === "object")
    return Object.entries(x).flatMap(([k, v]) => [k, ...cles(v)]);
  return [];
}

const vue = pourquoiVivant(questions, famille, rdv);

/* ------------------------------------------------------------------ */

test("règle n°1 — la projection de l'enfant ne rend aucun nombre", () => {
  const nombres = feuilles(vue).filter(
    (f) => typeof f.valeur === "number" || typeof f.valeur === "bigint",
  );
  assert.deepEqual(
    nombres.map((f) => f.chemin),
    [],
    "un nombre est sorti de la projection : c'est un compteur en puissance",
  );
});

test("aucune date ne sort de la projection — ni objet Date, ni date ISO", () => {
  const dates = feuilles(vue).filter((f) => f.valeur instanceof Date);
  assert.deepEqual(dates.map((f) => f.chemin), [], "un objet Date a traversé la projection");

  for (const f of feuilles(vue)) {
    if (typeof f.valeur !== "string") continue;
    assert.doesNotMatch(
      f.valeur,
      /\d{4}-\d{2}-\d{2}|\d{1,2}:\d{2}/,
      `${f.chemin} contient une date ou une heure : « ${f.valeur} »`,
    );
  }

  assert.ok(vue.collection.length > 0, "la collection témoin est vide : le test ne vérifie rien");
  for (const carte of vue.collection) {
    assert.match(carte.moment, /^un jour d(e |’)[a-zéû]+$/);
    assert.doesNotMatch(
      carte.moment,
      /\d/,
      `« ${carte.moment} » contient un chiffre — un mois ne se compare pas, une date si`,
    );
  }
});

test("l'ordre de la collection est stable, et ne suit pas l'ordre d'arrivée", () => {
  const ordre = (qs: Question[]) =>
    pourquoiVivant(qs, famille, rdv).collection.map((c) => c.id);

  const direct = ordre(questions);
  assert.deepEqual(ordre(questions), direct, "l'ordre doit être stable d'une visite à l'autre");
  assert.deepEqual(
    ordre([...questions].reverse()),
    direct,
    "l'ordre ne doit pas dépendre de l'ordre dans lequel la base les rend",
  );

  const explorees = questions.filter((q) => q.etat === "exploree");
  const parArrivee = [...explorees]
    .sort((a, b) => a.deposee_le.getTime() - b.deposee_le.getTime())
    .map((q) => q.id);
  const parExploration = [...explorees]
    .sort((a, b) => a.exploree_le!.localeCompare(b.exploree_le!))
    .map((q) => q.id);

  assert.equal(direct.length, explorees.length);
  for (const [nom, chrono] of [
    ["d'arrivée", parArrivee],
    ["d'arrivée inversé", [...parArrivee].reverse()],
    ["d'exploration", parExploration],
    ["d'exploration inversé", [...parExploration].reverse()],
  ] as const) {
    assert.notDeepEqual(
      direct,
      chrono,
      `la collection suit l'ordre ${nom} : une frise montre ses trous`,
    );
  }
});

test("les phrases disent le mot de l'enfant, et aucun prénom d'adulte n'apparaît", () => {
  assert.ok(vue.boite, "une famille avec un parrain doit avoir une boîte ouverte");
  assert.equal(vue.parrain, "parrain");

  assert.ok(vue.enRoute.length >= 3, "les trois états en route doivent être couverts");
  for (const q of vue.enRoute) {
    assert.match(q.phrase, /\bparrain\b/, `« ${q.phrase} » ne nomme pas le parrain comme il le nomme`);
  }
  assert.match(vue.boite.quiLit, /chez ton parrain/);
  assert.match(vue.boite.quiLit, /Papa et maman peuvent la lire aussi/);
  assert.match(vue.boite.bouton, /parrain/);
  assert.match(vue.rendezVous?.phrase ?? "", /Ton parrain vient\./);

  const tout = JSON.stringify(vue).toLocaleLowerCase("fr-FR");
  for (const prenom of prenomsAdultes) {
    assert.ok(
      !tout.includes(prenom.toLocaleLowerCase("fr-FR")),
      `le prénom « ${prenom} » est sorti de la projection : il ne dit pas le prénom de ses adultes`,
    );
  }
});

test("le mot vient de la base, il n'est pas écrit dans le code", () => {
  const autre: Membre[] = [
    { role: "parent", prenom: "Anatole", mot_de_l_enfant: "papou" },
    { role: "proche", prenom: "Casimir", mot_de_l_enfant: "tonton" },
  ];
  const v = pourquoiVivant(questions, autre, rdv);
  /* Les valeurs seulement : `parrain` est aussi le nom d'un champ. */
  const tout = feuilles(v)
    .map((f) => f.valeur)
    .filter((x) => typeof x === "string")
    .join("\n");

  assert.match(v.boite?.quiLit ?? "", /chez ton tonton\. Papou peut la lire aussi\./);
  for (const q of v.enRoute) assert.match(q.phrase, /tonton/);
  assert.match(v.rendezVous?.phrase ?? "", /tonton/);
  for (const mot of ["parrain", "papa", "maman", "Anatole", "Casimir"]) {
    assert.ok(!tout.includes(mot), `« ${mot} » est écrit en dur quelque part dans la projection`);
  }
});

test("la préparation du parrain n'apparaît jamais dans la projection de l'enfant", () => {
  assert.ok(
    !JSON.stringify(vue).includes("ventilateur"),
    "la préparation du parrain est sortie vers l'écran de l'enfant",
  );
  assert.ok(
    !cles(vue).some((k) => /prepar/i.test(k)),
    "un champ de préparation existe dans la projection, même vide : il finira affiché",
  );
});

/* ------------------------------------------------------------------ */
/* Le reste de ce qu'il lit                                            */
/* ------------------------------------------------------------------ */

test("chaque état en route a une phrase, et aucune ne dit un refus ou un retard", () => {
  const phrases = phrasesDuParrain("parrain");
  for (const [etat, phrase] of Object.entries(phrases)) {
    assert.ok(phrase, `l'état « ${etat} » laisserait l'enfant sans réponse`);
    assert.doesNotMatch(
      phrase,
      /attente|retard|pas encore|toujours pas|refus|oubli/i,
      `« ${phrase} » se lit comme un reproche`,
    );
  }
  /* « On cherche encore » doit dire que l'adulte ne sait pas : c'est le
     meilleur moment du dispositif, il ne doit pas devenir un statut. */
  assert.equal(phrases["on-cherche"], "Ton parrain cherche encore. Lui non plus il ne sait pas.");
  assert.equal(phrases.deposee, "C’est parti chez ton parrain.");
  assert.equal(phrases.lue, "Ton parrain a lu ta question.");
});

test("une question explorée quitte les questions en route, et la collection se dit au futur quand elle est vide", () => {
  const enRoute = new Set(vue.enRoute.map((q) => q.id));
  for (const carte of vue.collection) {
    assert.ok(!enRoute.has(carte.id), "une question explorée resterait affichée comme en route");
  }

  const vide = pourquoiVivant(questions.slice(0, 3), famille, null);
  assert.deepEqual(vide.collection, []);
  assert.match(vide.vide, /viendra/, "un vide dit au passé est un reproche");
  assert.equal(vide.rendezVous, null);
});

test("une carte sans domaine n'entre pas dans la collection", () => {
  const bancale = question("9aef0fca-0abd-4fba-8cce-edaebbdfeeba", "exploree", { trace: "…" });
  assert.deepEqual(pourquoiVivant([bancale], famille, null).collection, []);
});

test("le rendez-vous : rien s'il est vide, et jamais deux points à la fin", () => {
  assert.equal(rendezVousPourLEnfant(null, famille), null);
  assert.equal(rendezVousPourLEnfant({ quand: " ", quoi: "les ponts" }, famille), null);
  assert.equal(rendezVousPourLEnfant({ quand: "samedi", quoi: "" }, famille), null);
  /* Sans parrain, personne ne vient : on ne promet rien. */
  assert.equal(
    rendezVousPourLEnfant(rdv, famille.filter((p) => p.role !== "proche")),
    null,
  );
  assert.deepEqual(rendezVousPourLEnfant({ quand: "samedi", quoi: "pourquoi le ciel est bleu ?" }, famille), {
    quand: "samedi",
    phrase: "Ton parrain vient. On va regarder pourquoi le ciel est bleu.",
  });
});

test("sans parrain, la boîte ne promet rien et ne laisse passer aucun trou", () => {
  const sansParrain = famille.filter((p) => p.role !== "proche");
  const v = pourquoiVivant(questions, sansParrain, rdv);
  assert.equal(v.boite, null);
  assert.equal(v.parrain, null);
  for (const f of feuilles(v)) {
    if (typeof f.valeur !== "string") continue;
    assert.doesNotMatch(f.valeur, /undefined|null/, `${f.chemin} : un trou est devenu du texte`);
  }
  assert.ok(v.enRoute.length > 0);
  for (const q of v.enRoute) assert.ok(q.phrase.length > 0);
});

/* ------------------------------------------------------------------ */
/* Ce que voient les adultes                                           */
/* ------------------------------------------------------------------ */

test("l'atelier trie par arrivée, et range chaque question à sa place", () => {
  const { aLire, enPreparation, explorees } = atelierDe([...questions].reverse());
  assert.deepEqual(aLire.map((q) => q.etat), ["deposee"]);
  assert.deepEqual(enPreparation.map((q) => q.etat), ["lue", "on-cherche"]);
  assert.equal(explorees.length, 6);
  const temps = explorees.map((q) => q.deposee_le.getTime());
  assert.deepEqual(temps, [...temps].sort((a, b) => a - b));
});

test("les explorées, groupées par domaine avec leur date, pour le relevé et le contrôle", () => {
  const groupes = grouperParDomaine([...questions].reverse());
  assert.deepEqual(
    groupes.map((g) => g.domaine.id),
    ["machines", "vivant", "ciel", "mots", "enigmes"],
    "les domaines suivent leur ordre, et un domaine vide n'apparaît pas",
  );
  const machines = groupes[0].questions;
  assert.deepEqual(
    machines.map((q) => q.exploree_le),
    ["2026-09-20", "2027-01-15"],
    "dans un domaine, les explorations vont de la plus ancienne à la plus récente",
  );
  assert.ok(!cles(groupes).some((k) => /prepar/i.test(k)), "la préparation n'a rien à faire dans le relevé");
  assert.deepEqual(grouperParDomaine(questions.slice(0, 3)), []);
});

test("un rendez-vous posé il y a plus d'une semaine ne s'affiche plus chez l'enfant", () => {
  const pose = new Date("2026-10-01T10:00:00Z");
  const ancien = { quand: "samedi", quoi: "les ponts", modifie_le: pose };
  const sixJours = new Date("2026-10-07T10:00:00Z");
  const huitJours = new Date("2026-10-09T10:00:00Z");
  assert.notEqual(rendezVousPourLEnfant(ancien, famille, sixJours), null);
  assert.equal(rendezVousPourLEnfant(ancien, famille, huitJours), null);
  assert.equal(pourquoiVivant([], famille, ancien, huitJours).rendezVous, null);
});
