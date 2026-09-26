/**
 * Le résultat d'une séance menée avec une fiche.
 *
 * Ce qui est tenu ici : on note ce qui est à revoir **en recopiant la fiche**,
 * pas ce que le navigateur prétend ; une fiche sans corrigé n'a que sa note ;
 * et un résultat noté se rouvre tel qu'il a été laissé.
 */

import { test } from "node:test";
import assert from "node:assert/strict";
import { fiches, ficheParCode } from "../lib/fiches";
import { aDesReponses } from "../lib/fiches/mise-en-page";
import {
  NOTE_MAX,
  questionsANoter,
  rangsDe,
  resultatDepuis,
} from "../lib/resultat-fiche";

const tables = ficheParCode.get("cm-tables-01")!;

test("une fiche de calcul mental se note question par question", () => {
  const qs = questionsANoter(tables);
  assert.equal(qs.length, tables.materiel.length);
  assert.equal(qs[0].texte, "2 × 4");
  assert.equal(qs[0].reponse, "8");
  assert.deepEqual(
    qs.map((q) => q.rang),
    tables.materiel.map((_, i) => i),
  );
});

test("ce qui est à revoir est recopié de la fiche, sur le nombre de questions", () => {
  const r = resultatDepuis(tables, [0, 3], "  il compte encore sur ses doigts  ")!;
  assert.deepEqual(r.aRevoir, ["2 × 4", "2 × 8"]);
  assert.equal(r.sur, 10);
  assert.equal(r.note, "il compte encore sur ses doigts");
});

test("un rang qui ne désigne aucune question est ignoré, pas inventé", () => {
  const r = resultatDepuis(tables, [-1, 42, 2], "")!;
  assert.deepEqual(r.aRevoir, ["10 × 7"]);
});

test("une note trop longue est refusée, pas tronquée", () => {
  assert.equal(resultatDepuis(tables, [], "x".repeat(NOTE_MAX + 1)), null);
  assert.ok(resultatDepuis(tables, [], "x".repeat(NOTE_MAX)));
});

test("une fiche sans corrigé n'a que sa note", () => {
  const sans = fiches.find((f) => !aDesReponses(f.materiel, f.corrige))!;
  assert.ok(sans, "le cas de test suppose une fiche sans corrigé");
  assert.deepEqual(questionsANoter(sans), []);
  const r = resultatDepuis(sans, [0, 1], "bien lu")!;
  assert.deepEqual(r.aRevoir, []);
  assert.equal(r.sur, null);
});

test("un texte suivi de questions ne se note que sur ses questions", () => {
  /* Les paragraphes n'ont pas de réponse en regard : ils ne se ratent pas. */
  const mixte = fiches.find(
    (f) =>
      aDesReponses(f.materiel, f.corrige) &&
      f.corrige!.some((c) => c.trim() === ""),
  );
  assert.ok(mixte, "le cas de test suppose une fiche à paragraphes et questions");
  const qs = questionsANoter(mixte);
  assert.ok(qs.length > 0 && qs.length < mixte.materiel.length);
  for (const q of qs) assert.ok(q.reponse.length > 0);
});

test("un résultat noté se rouvre avec les mêmes questions marquées", () => {
  const qs = questionsANoter(tables);
  const r = resultatDepuis(tables, [1, 7], "")!;
  assert.deepEqual(rangsDe(qs, r.aRevoir), [1, 7]);
});
