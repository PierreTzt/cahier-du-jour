/**
 * La partie du test dans sa journée.
 *
 * Ce qui est tenu ici, sans base : quand la partie se pose, où elle se pose,
 * et qu'une fois dans la journée elle n'emmène pas l'enfant au mauvais écran
 * ni ne gonfle ce que les parents ont « à replacer ».
 */

import { test } from "node:test";
import assert from "node:assert/strict";
import { doitPlacerLeTest, etatDuTestLe, rangDuTest, titreDuTest } from "../lib/test-du-jour";
import { aRedistribuer, journeeVivante } from "../lib/journee";
import { blocs, questions } from "../lib/positionnement";

const AUJ = "2026-09-17";

const cas = (autre: Partial<Parameters<typeof doitPlacerLeTest>[0]> = {}) =>
  doitPlacerLeTest({
    jour: AUJ,
    aujourdhui: AUJ,
    ton: "normale",
    cloture: null,
    sansTest: false,
    seances: [
      { etat: "a-venir", test: false },
      { etat: "a-venir", test: false },
    ],
    etatDuTest: "question",
    ...autre,
  });

test("une journée normale, ouverte, avec du travail et une partie à faire : on la pose", () => {
  assert.equal(cas(), true);
  assert.equal(cas({ jour: "2026-09-21" }), true, "un jour à venir aussi");
});

test("ni un jour passé, ni une journée allégée ou de repos", () => {
  assert.equal(cas({ jour: "2026-09-16" }), false);
  assert.equal(cas({ ton: "allegee" }), false);
  assert.equal(cas({ ton: "repos" }), false);
});

test("ni une journée refermée, ni une journée où il ne reste rien à faire", () => {
  assert.equal(cas({ cloture: "terminee" }), false);
  assert.equal(cas({ cloture: "arretee" }), false);
  assert.equal(cas({ seances: [{ etat: "faite", test: false }] }), false);
  assert.equal(cas({ seances: [] }), false, "un samedi vide ne reçoit pas le test seul");
});

test("retirée par un adulte, elle ne revient pas ; déjà là, elle ne se double pas", () => {
  assert.equal(cas({ sansTest: true }), false);
  assert.equal(
    cas({ seances: [{ etat: "faite", test: true }, { etat: "a-venir", test: false }] }),
    false,
  );
});

test("pas de partie à faire ce jour-là : la partie du jour finie, ou le test fini", () => {
  assert.equal(cas({ etatDuTest: "partie-finie" }), false);
  assert.equal(cas({ etatDuTest: "tout-fini" }), false);
});

test("l'état du test : une partie par jour aujourd'hui, et seulement fini ou pas un autre jour", () => {
  const premier = blocs[0].notions.flatMap((n) => n.questions.map((q) => q.code));
  const faites = premier.map((exercice) => ({ exercice, jour: AUJ }));
  assert.equal(etatDuTestLe(AUJ, faites, AUJ), "partie-finie");
  assert.equal(etatDuTestLe("2026-09-18", faites, AUJ), "question");

  const tout = questions.map((q) => ({ exercice: q.code, jour: AUJ }));
  assert.equal(etatDuTestLe("2026-09-18", tout, AUJ), "tout-fini");
});

test("elle se pose en tête de ce qui reste : ce qui est fait reste au-dessus", () => {
  assert.equal(
    rangDuTest([
      { rang: 1, etat: "faite" },
      { rang: 2, etat: "reportee" },
      { rang: 3, etat: "a-venir" },
      { rang: 4, etat: "a-venir" },
    ]),
    3,
  );
  assert.equal(rangDuTest([{ rang: 1, etat: "faite" }]), null);
});

test("commencé, le test s’annonce comme sa suite", () => {
  assert.equal(titreDuTest([]), "Le test du début d’année");
  assert.equal(titreDuTest([{ exercice: questions[0].code, jour: AUJ }]), "La suite du test");
});

/* Une séance en base, telle que `seancesDe` la rend. */
const seance = (id: string, etat: "a-venir" | "faite" | "reportee", rang: number, t = false) => ({
  id,
  rang,
  matiere: "maison",
  titre: t ? "Le test du début d’année" : `séance ${id}`,
  reference: "",
  consigne: "",
  minutes: 20,
  lecon: "",
  fiche: "",
  origine: "trame" as const,
  par_adulte: null,
  par_mot: null,
  etat,
  test: t,
});

test("sur son chemin, l'étape du test se reconnaît — c'est ce qui l'emmène vers les questions", () => {
  const vue = journeeVivante([seance("t", "a-venir", 1, true), seance("a", "a-venir", 2)], null);
  assert.equal(vue.courante?.id, "t");
  assert.equal(vue.courante?.test, true);
  assert.equal(vue.etapes[1].test, undefined, "une séance ordinaire n'est pas marquée");
});

test("une journée arrêtée ne met pas la partie du test « à replacer »", () => {
  const seances = [seance("t", "a-venir", 1, true), seance("a", "a-venir", 2)];
  assert.deepEqual(
    aRedistribuer(seances, "arretee").map((s) => s.id),
    ["a"],
  );
});
