/**
 * Où une séance a le droit d'aller quand on la déplace.
 *
 * Deux décisions à garder ensemble : un parent doit pouvoir faire passer une
 * séance d'un jour à un autre (21 septembre 2026), et une journée que
 * l'enfant a finie ou arrêtée ne reçoit plus rien — « pour l'enfant c'est
 * terminé », a tranché le parrain le même soir.
 */

import { test } from "node:test";
import assert from "node:assert/strict";
import { cibleAdmise, joursOuDeplacer, type EtatDuJour } from "../lib/deplacer";

const LUNDI = "2026-09-21";
const MARDI = "2026-09-22";
const ouverte: EtatDuJour = { ton: "normale", cloture: null };

test("une journée refermée ne reçoit rien, qu'il l'ait finie ou arrêtée", () => {
  assert.equal(cibleAdmise(LUNDI, MARDI, LUNDI, { ton: "normale", cloture: "terminee" }), false);
  assert.equal(cibleAdmise(LUNDI, MARDI, LUNDI, { ton: "normale", cloture: "arretee" }), false);
  assert.equal(cibleAdmise(LUNDI, MARDI, LUNDI, ouverte), true);
});

test("ni le passé, ni le jour qu'elle quitte, ni un jour de repos", () => {
  assert.equal(cibleAdmise("2026-09-18", MARDI, LUNDI, ouverte), false, "hier ne lui arrive plus");
  assert.equal(cibleAdmise(MARDI, MARDI, LUNDI, ouverte), false);
  assert.equal(cibleAdmise(LUNDI, MARDI, LUNDI, { ton: "repos", cloture: null }), false);
  /* Une journée allégée l'accepte : c'est à l'adulte de voir ce qu'il charge. */
  assert.equal(cibleAdmise(LUNDI, MARDI, LUNDI, { ton: "allegee", cloture: null }), true);
  /* Une journée que la base n'a pas encore : ouverte, par définition. */
  assert.equal(cibleAdmise("2026-09-24", MARDI, LUNDI, undefined), true);
});

test("on propose les prochains jours de classe, aujourd'hui compris, sans le jour de départ", () => {
  const jours = joursOuDeplacer(MARDI, LUNDI, new Map(), 5);
  assert.deepEqual(jours, ["2026-09-21", "2026-09-23", "2026-09-24", "2026-09-25", "2026-09-28"]);
});

test("aujourd'hui fini n'est pas proposé, ni un mercredi mis en repos", () => {
  const etats = new Map<string, EtatDuJour>([
    [LUNDI, { ton: "normale", cloture: "terminee" }],
    ["2026-09-23", { ton: "repos", cloture: null }],
  ]);
  const jours = joursOuDeplacer(MARDI, LUNDI, etats, 3);
  assert.deepEqual(jours, ["2026-09-24", "2026-09-25", "2026-09-28"]);
});

test("les vacances s'enjambent : après le vendredi, la rentrée", () => {
  /* Jeudi 15 octobre : la Toussaint commence le samedi 17. */
  const jours = joursOuDeplacer("2026-10-15", "2026-10-15", new Map(), 3);
  assert.deepEqual(jours, ["2026-10-16", "2026-11-02", "2026-11-03"]);
});
