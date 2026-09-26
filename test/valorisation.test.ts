/**
 * Le mot et le cahier — et ce qui les sépare d'un bon point.
 *
 * Trois propriétés font d'un jeton un danger : il est conditionnel, il
 * s'accumule vers une cible, et son absence parle. Ces tests vérifient
 * qu'aucune des trois n'a pu revenir par la fenêtre dans ce que l'écran de
 * l'enfant reçoit. Tout est déroulé sans base : ce sont les projections
 * pures de `lib/valorisation.ts`, celles-là mêmes que les pages appellent.
 */

import { test } from "node:test";
import assert from "node:assert/strict";
import {
  cahierVivant,
  etatDuMot,
  motDuJour,
  motRecu,
  ouArriveLeMot,
  texteBorne,
  type LigneMot,
  type LigneTrace,
} from "../lib/valorisation";

/* ------------------------------------------------------------------ */
/* Outils                                                              */
/* ------------------------------------------------------------------ */

/** Toutes les feuilles d'une valeur, à n'importe quelle profondeur. */
function feuilles(x: unknown): unknown[] {
  if (x instanceof Date) return [x];
  if (Array.isArray(x)) return x.flatMap(feuilles);
  if (x && typeof x === "object") return Object.values(x).flatMap(feuilles);
  return [x];
}

/** Les listes rencontrées sous la racine — la racine elle-même exclue. */
function listesSous(x: unknown): unknown[][] {
  const trouvees: unknown[][] = [];
  const visiter = (v: unknown, racine: boolean) => {
    if (Array.isArray(v)) {
      if (!racine) trouvees.push(v);
      v.forEach((e) => visiter(e, false));
    } else if (v && typeof v === "object" && !(v instanceof Date)) {
      Object.values(v).forEach((e) => visiter(e, false));
    }
  };
  visiter(x, true);
  return trouvees;
}

const JOUR = "11111111-2222-4333-8444-555555555555";
const AUTRE_JOUR = "66666666-7777-4888-9999-000000000000";

const mot = (
  id: string,
  texte: string,
  heure: string,
  qui: { prenom: string; mot: string } | null,
  journee = JOUR,
): LigneMot => ({
  id,
  journee_id: journee,
  texte,
  cree_le: new Date(`2026-09-14T${heure}:00+02:00`),
  par_adulte: qui ? `adulte-${qui.prenom}` : null,
  par_prenom: qui?.prenom ?? null,
  par_mot: qui?.mot ?? null,
});

const papa = { prenom: "Anatole", mot: "papa" };
const maman = { prenom: "Bérénice", mot: "maman" };
const parrain = { prenom: "Casimir", mot: "parrain" };

const depose = { choix: "pas-bien" as const, mot: "" };

/* ------------------------------------------------------------------ */
/* Le mot                                                              */
/* ------------------------------------------------------------------ */

test("le mot du jour est un seul mot, le dernier laissé", () => {
  const mots = [
    mot("m1", "Tu as demandé de l’aide au lieu de rester bloqué.", "10:15", papa),
    /* Arrivés dans le désordre : c'est l'heure d'écriture qui décide, pas la
       place dans la liste. */
    mot("m3", "Je t’ai vu recommencer la division trois fois.", "18:40", maman),
    mot("m2", "Tu es venu t’asseoir quand même.", "16:05", parrain),
  ];
  const vu = motDuJour(mots, JOUR);
  assert.ok(vu, "il doit y avoir un mot du jour");
  assert.ok(!Array.isArray(vu), "le mot du jour est un mot, pas une liste");
  assert.equal(vu.id, "m3", "c'est le dernier laissé qui s'affiche");
});

test("sans mot, rien — pas un vide qui parle", () => {
  assert.equal(motDuJour([], JOUR), null);
  assert.equal(motRecu(depose, [], JOUR), null);
  /* Un mot laissé un autre jour ne vient pas remplir celui-ci. */
  const ailleurs = [mot("m9", "Un autre jour.", "09:00", papa, AUTRE_JOUR)];
  assert.equal(motDuJour(ailleurs, JOUR), null);
  assert.equal(motRecu(depose, ailleurs, JOUR), null);
});

test("il ne lit le mot qu'après avoir dit comment il se sent", () => {
  const mots = [mot("m1", "Je t’ai vu t’accrocher.", "11:00", papa)];
  assert.equal(motRecu(null, mots, JOUR), null, "le mot ne précède pas le ressenti");
  /* « Je préfère ne rien dire » est une réponse, et un jour d'effondrement
     aussi : rien dans le mot ne dépend de ce qui a été accompli. */
  assert.ok(motRecu({ choix: null, mot: "" }, mots, JOUR));
  assert.ok(motRecu({ choix: "pas-bien", mot: "j’en ai marre" }, mots, JOUR));
});

test("le mot est signé du mot de l'enfant, jamais d'un prénom", () => {
  const mots = [
    mot("m1", "Tu es venu t’asseoir quand même.", "09:30", maman),
    mot("m2", "Je t’ai vu recommencer la division trois fois.", "17:20", papa),
  ];
  const recu = motRecu(depose, mots, JOUR);
  assert.ok(recu);
  assert.equal(recu.signe, "papa");

  const textes = feuilles(recu).filter((v): v is string => typeof v === "string");
  for (const prenom of [papa.prenom, maman.prenom, parrain.prenom]) {
    assert.ok(
      textes.every((t) => !t.includes(prenom)),
      `le prénom « ${prenom} » traverse vers l'écran de l'enfant`,
    );
  }
  assert.deepEqual(Object.keys(recu).sort(), ["signe", "texte"], "rien d'autre ne traverse");
});

test("un mot dont l'auteur n'a plus d'accès reste, sans signature ni prénom", () => {
  const recu = motRecu(depose, [mot("m1", "Tu as tenu jusqu’au bout.", "15:00", null)], JOUR);
  assert.deepEqual(recu, { texte: "Tu as tenu jusqu’au bout.", signe: null });
});

/* ------------------------------------------------------------------ */
/* Le cahier                                                           */
/* ------------------------------------------------------------------ */

/* Des identifiants de la forme d'un uuid, écrits dans l'ordre de création. */
const IDS = [
  "3f6c1a52-8e0b-4d7a-9c21-5b4e7d9a0f13",
  "a81d4e07-2c9f-4b36-8e5a-1f7c3d6b9e24",
  "5c2b9f71-6d4e-4a18-b3c7-9e0a2f5d8c35",
  "e47a0c93-1b5d-4f62-a8e9-3c6b7d2f1a46",
  "0d9e3b28-7f1a-4c54-9b6d-8a2e5c4f7b57",
];
const DATES = ["2026-09-15", "2026-10-02", "2026-10-21", "2026-11-09", "2026-12-01"];

const traces = (dates = DATES): LigneTrace[] =>
  IDS.map((id, i) => ({
    id,
    titre: ["Le volcan", "La lettre", "La carte du quartier", "Le cerf-volant", "La maquette"][i],
    quoi: "Ce qui s’est passé, dans les mots de l’adulte.",
    matiere: ["sciences", "francais", "geographie", "arts", "maths"][i],
    cree_le: new Date(`${dates[i]}T14:30:00+02:00`),
    par_adulte: "adulte-Anatole",
    par_prenom: "Anatole",
  }));

test("le cahier ne rend aucun nombre, aucune date", () => {
  const cahier = cahierVivant(traces());
  const valeurs = feuilles(cahier);

  assert.deepEqual(
    valeurs.filter((v) => typeof v === "number"),
    [],
    "un nombre est un compteur en puissance",
  );
  assert.deepEqual(
    valeurs.filter((v) => v instanceof Date),
    [],
    "une date se compare, et une collection datée montre ses trous",
  );
  for (const v of valeurs.filter((x): x is string => typeof x === "string")) {
    assert.doesNotMatch(v, /\d{4}-\d{2}-\d{2}|T\d{2}:\d{2}/, `« ${v} » ressemble à une date`);
  }
  for (const carte of cahier) {
    assert.match(carte.moment, /^un jour d/);
    assert.doesNotMatch(carte.moment, /\d/, `« ${carte.moment} » contient un chiffre`);
  }
  /* Le prénom de l'adulte qui a noté la trace ne traverse pas non plus. */
  assert.ok(valeurs.every((v) => v !== "Anatole" && v !== "adulte-Anatole"));
});

test("l'ordre du cahier ne suit pas l'ordre de création", () => {
  const ordre = (t: LigneTrace[]) => cahierVivant(t).map((c) => c.id);
  const cree = IDS;

  assert.notDeepEqual(ordre(traces()), cree, "rangé par arrivée, le cahier se lit comme une frise");
  assert.notDeepEqual(ordre(traces()), [...cree].reverse(), "rangé à rebours, c'est encore une frise");

  /* La vraie propriété : l'ordre ne dépend pas du temps du tout. Mêmes
     traces, dates inversées, ou lues dans un autre ordre — même cahier. */
  assert.deepEqual(ordre(traces([...DATES].reverse())), ordre(traces()));
  assert.deepEqual(ordre([...traces()].reverse()), ordre(traces()));
});

test("la matière colore la carte, et une matière inconnue ne s'invente pas de libellé", () => {
  const [volcan] = cahierVivant(traces()).filter((c) => c.texte === "Le volcan");
  assert.deepEqual(volcan.etiquette, { libelle: "Sciences et technologie", teinte: "sauge" });

  const ancienne = { ...traces()[0], matiere: "histgeo" };
  assert.equal(cahierVivant([ancienne])[0].etiquette.libelle, "");
});

/* ------------------------------------------------------------------ */
/* Ni pile, ni liste                                                   */
/* ------------------------------------------------------------------ */

test("aucune projection destinée à l'enfant ne contient de liste de mots", () => {
  const mots = [
    mot("m1", "Premier mot.", "09:00", papa),
    mot("m2", "Deuxième mot.", "12:00", maman),
    mot("m3", "Troisième mot.", "18:00", parrain),
  ];
  const textesDesMots = mots.map((m) => m.texte);

  /* Ce qu'il lit après son ressenti : un objet plat, aucune liste nulle part. */
  const recu = motRecu(depose, mots, JOUR);
  assert.ok(recu && !Array.isArray(recu));
  assert.deepEqual(listesSous(recu), []);
  const lus = feuilles(recu).filter((v) => textesDesMots.includes(v as string));
  assert.equal(lus.length, 1, "il lit un mot, jamais plusieurs");

  /* Son cahier : une collection de cartes, et chaque carte est plate. Aucun
     mot d'adulte n'y passe. */
  const cahier = cahierVivant(traces());
  assert.deepEqual(listesSous(cahier), [], "une carte porte une liste");
  assert.ok(feuilles(cahier).every((v) => !textesDesMots.includes(v as string)));
});

/* ------------------------------------------------------------------ */
/* Côté adultes                                                        */
/* ------------------------------------------------------------------ */

test("un mot laissé là où il ne sera pas lu est signalé à l'adulte", () => {
  const auj = "2026-09-14";
  assert.equal(ouArriveLeMot({ jour: "2026-09-13", ton: "normale", seances: 5 }, auj), "passe");
  assert.equal(ouArriveLeMot({ jour: auj, ton: "repos", seances: 0 }, auj), "repos");
  assert.equal(ouArriveLeMot({ jour: auj, ton: "normale", seances: 0 }, auj), "vide");
  assert.equal(ouArriveLeMot({ jour: auj, ton: "allegee", seances: 3 }, auj), "ce-soir");
  assert.equal(ouArriveLeMot({ jour: "2026-09-15", ton: "normale", seances: 7 }, auj), "ce-jour-la");
});

test("après son ressenti, un nouveau mot n'est pas promis comme lu", () => {
  const avant = mot("m1", "Je t’ai vu recommencer.", "16:00", papa);
  const apres = mot("m2", "Tu as rangé tes crayons.", "21:00", parrain);
  const mots = [avant, apres];
  const deposeLe = new Date("2026-09-14T17:30:00+02:00");
  const ceSoir = { lira: true, deposeLe };

  /* Ses parents savent : le premier a été lu, le second ne le sera que s'il
     rouvre la fin de sa journée. */
  assert.equal(etatDuMot(avant, mots, JOUR, ceSoir), "lu");
  assert.equal(etatDuMot(apres, mots, JOUR, ceSoir), "lira-s-il-rouvre");

  /* Pas encore passé : le dernier est celui qu'il lira, l'autre est devancé. */
  assert.equal(etatDuMot(apres, mots, JOUR, { lira: true, deposeLe: null }), "lira");
  assert.equal(etatDuMot(avant, mots, JOUR, { lira: true, deposeLe: null }), "devance");

  /* Le proche ne sait pas s'il est passé : une phrase qui ne promet rien, et
     qui ne dit pas qu'il est passé — rien qui ressemble à « lu ». */
  const pourLeProche = { lira: true, deposeLe: undefined };
  assert.equal(etatDuMot(apres, mots, JOUR, pourLeProche), "celui-qu-il-lit");
  assert.equal(etatDuMot(avant, mots, JOUR, pourLeProche), "devance");

  /* Un jour passé : on ne promet plus rien, mais ses parents savent ce qu'il a lu. */
  assert.equal(etatDuMot(avant, mots, JOUR, { lira: false, deposeLe }), "lu");
  assert.equal(etatDuMot(apres, mots, JOUR, { lira: false, deposeLe }), "dernier");
  assert.equal(etatDuMot(apres, mots, JOUR, { lira: false, deposeLe: undefined }), "dernier");
});

test("un texte trop long est refusé, pas tronqué", () => {
  assert.equal(texteBorne("  Je t’ai vu.  ", 1000), "Je t’ai vu.");
  assert.equal(texteBorne("   \n ", 1000), null, "un mot vide n'est pas un mot");
  assert.equal(texteBorne("é".repeat(1000), 1000), "é".repeat(1000));
  assert.equal(texteBorne("é".repeat(1001), 1000), null);
  /* Compté en caractères, comme Postgres : un emoji fait deux unités UTF-16. */
  assert.equal(texteBorne("🌋".repeat(1000), 1000), "🌋".repeat(1000));
  assert.equal(texteBorne(42, 1000), null);
  /* Le caractère nul ferait lever Postgres : il est retiré, pas refusé. */
  assert.equal(texteBorne(`Le ${String.fromCharCode(0)}volcan`, 200), "Le volcan");
});
