/**
 * La cloche des adultes.
 *
 * Ce qui est tenu ici : elle sonne **dès deux exercices pas passés** ou sur
 * une leçon mise de côté, et pas avant ; une leçon ne se juge qu'une fois
 * qu'il en a fini ; « je ne sais pas » compte ; ce qui est déjà vu ne sonne
 * plus ; et chaque leçon dit ce qu'est devenue sa reprise.
 */

import { test } from "node:test";
import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import { join } from "node:path";
import { fileURLToPath } from "node:url";
import { leconParCode, SUFFIXE_REPRISE } from "../lib/programme";
import {
  SEUIL,
  ceQuiEstAReprendre,
  nouveaux,
  sonne,
  type SeanceDeLecon,
} from "../lib/a-reprendre";

const RACINE = fileURLToPath(new URL("..", import.meta.url));
const AUJ = "2026-09-21";
const lecon = leconParCode.get("m-p1-nombres")!;

/** Une séance de la leçon, avec `rates` réponses fausses et `saitPas` « je ne sais pas ». */
function seance(
  id: string,
  jour: string,
  {
    faits = lecon.exercices.length,
    rates = 0,
    saitPas = 0,
    etat = "faite",
    cloture = null,
    titre = lecon.titre,
    moment = 1000,
  }: Partial<{
    faits: number;
    rates: number;
    saitPas: number;
    etat: SeanceDeLecon["etat"];
    cloture: SeanceDeLecon["cloture"];
    titre: string;
    moment: number;
  }> = {},
): SeanceDeLecon {
  const serie = titre.endsWith(SUFFIXE_REPRISE) && lecon.reprise ? lecon.reprise : lecon.exercices;
  return {
    id,
    jour,
    rang: 1,
    lecon: lecon.code,
    titre,
    etat,
    cloture,
    moment,
    travail: serie.slice(0, faits).map((ex, i) => ({
      exercice: ex.code,
      valeur: i < rates ? "zzz" : i < rates + saitPas ? "" : ex.resultat,
      sait_pas: i >= rates && i < rates + saitPas,
      saisi_le: `${jour} 10:0${i}:00+02`,
    })),
  };
}

test("le seuil est celui choisi par le parrain : deux", () => {
  assert.equal(SEUIL, 2);
  assert.equal(sonne(0, false), false);
  assert.equal(sonne(1, false), false);
  assert.equal(sonne(2, false), true);
  assert.equal(sonne(0, true), true);
});

test("tout passé : rien ; un exercice pas passé : gardé sans sonner ; deux : ça sonne", () => {
  const items = ceQuiEstAReprendre(
    [
      seance("a", "2026-09-15"),
      seance("b", "2026-09-16", { rates: 1 }),
      seance("c", "2026-09-17", { rates: 2 }),
    ],
    AUJ,
  );
  assert.deepEqual(
    items.map((x) => [x.seanceId, x.sonne, x.ecarts.length]),
    [
      ["c", true, 2],
      ["b", false, 1],
    ],
  );
});

test("« je ne sais pas » compte comme un exercice pas passé", () => {
  const [x] = ceQuiEstAReprendre([seance("a", "2026-09-17", { rates: 1, saitPas: 1 })], AUJ);
  assert.equal(x.sonne, true);
  assert.deepEqual(
    x.ecarts.map((e) => e.saitPas),
    [false, true],
  );
});

test("une leçon mise de côté sonne, même sans un seul exercice", () => {
  const [x] = ceQuiEstAReprendre([seance("a", AUJ, { faits: 0, etat: "reportee" })], AUJ);
  assert.equal(x.miseDeCote, true);
  assert.equal(x.faits, 0);
  assert.equal(x.sonne, true);
});

test("pendant qu'il travaille, on ne juge pas ; une fois fini, si", () => {
  const enCours = seance("a", AUJ, { faits: 3, rates: 2, etat: "a-venir" });
  assert.deepEqual(ceQuiEstAReprendre([enCours], AUJ), []);

  /* Tous ses exercices inscrits, sans avoir encore coché. */
  const toutInscrit = seance("b", AUJ, { rates: 2, etat: "a-venir" });
  assert.equal(ceQuiEstAReprendre([toutInscrit], AUJ).length, 1);

  /* La journée arrêtée en route. */
  const arretee = seance("c", AUJ, { faits: 3, rates: 2, etat: "a-venir", cloture: "arretee" });
  assert.equal(ceQuiEstAReprendre([arretee], AUJ)[0].faits, 3);

  /* Le lendemain, ce qui est resté ouvert se lit. */
  assert.equal(ceQuiEstAReprendre([enCours], "2026-09-22").length, 1);
});

test("rien d'un jour à venir, et le plus récent d'abord", () => {
  const items = ceQuiEstAReprendre(
    [
      seance("a", "2026-09-10", { rates: 3 }),
      seance("b", "2026-09-17", { rates: 3 }),
      seance("c", "2026-09-24", { rates: 3 }),
    ],
    AUJ,
  );
  assert.deepEqual(
    items.map((x) => x.seanceId),
    ["b", "a"],
  );
});

test("chaque leçon dit ce qu'est devenue sa reprise", () => {
  const reprise = `${lecon.titre}${SUFFIXE_REPRISE}`;

  const prevue = ceQuiEstAReprendre(
    [seance("a", "2026-09-17", { rates: 2 }), seance("r", "2026-09-29", { etat: "a-venir", faits: 0, titre: reprise })],
    AUJ,
  );
  assert.deepEqual(prevue[0].suite, { quand: "prevue", jour: "2026-09-29" });

  const faite = ceQuiEstAReprendre(
    [seance("a", "2026-09-07", { rates: 2 }), seance("r", "2026-09-17", { titre: reprise })],
    AUJ,
  );
  /* La reprise, toute passée, n'est pas elle-même à reprendre. */
  assert.equal(faite.length, 1);
  assert.equal(faite[0].suite?.quand, "faite");
  assert.equal(faite[0].suite?.quand === "faite" && faite[0].suite.pasPasses, 0);

  /* Une reprise passée sans rien d'inscrit ne dit rien ici. */
  const oubliee = ceQuiEstAReprendre(
    [seance("a", "2026-09-07", { rates: 2 }), seance("r", "2026-09-17", { etat: "a-venir", faits: 0, titre: reprise })],
    AUJ,
  );
  assert.equal(oubliee[0].suite, null);
});

test("une reprise se relève sur sa seconde série, et se dit reprise", () => {
  if (!lecon.reprise) return;
  const [x] = ceQuiEstAReprendre(
    [seance("r", "2026-09-17", { rates: 2, titre: `${lecon.titre}${SUFFIXE_REPRISE}` })],
    AUJ,
  );
  assert.equal(x.reprise, true);
  assert.equal(x.total, lecon.reprise.length);
});

test("la cloche ne compte que ce qui sonne et n'a pas été vu", () => {
  const items = ceQuiEstAReprendre(
    [
      seance("vieux", "2026-09-15", { rates: 2, moment: 100 }),
      seance("un-seul", "2026-09-16", { rates: 1, moment: 300 }),
      seance("neuf", "2026-09-17", { rates: 2, moment: 300 }),
    ],
    AUJ,
  );
  assert.deepEqual(
    nouveaux(items, null).map((x) => x.seanceId),
    ["neuf", "vieux"],
  );
  assert.deepEqual(
    nouveaux(items, 200).map((x) => x.seanceId),
    ["neuf"],
  );
  assert.deepEqual(nouveaux(items, 300), []);
});

test("le geste de la cloche vérifie qu'un adulte agit, avant d'écrire", () => {
  const source = readFileSync(join(RACINE, "app", "gestes", "a-reprendre.ts"), "utf8");
  const porte = source.search(/const moi = await adulteConnecte\(\);\s*if \(!moi\) return;/);
  const ecriture = source.indexOf("await executer(");
  assert.ok(porte >= 0, "clocheOuverte ne vérifie plus qui agit");
  assert.ok(ecriture > porte, "clocheOuverte écrit avant de vérifier qui agit");
  assert.match(source, /return moi && !estEnfant\(moi\) \? moi : null;/);
});

test("la cloche ne part vers le navigateur qu'avec deux nombres", () => {
  const source = readFileSync(join(RACINE, "components", "adulte", "Cloche.tsx"), "utf8");
  assert.match(source, /^"use client";/);
  /* Rien du manuel, du relevé ni de la base dans ce qui est envoyé. */
  assert.doesNotMatch(source, /from "@\/lib\/(a-reprendre|releve|programme|base|travail)"/);
  const entete = readFileSync(join(RACINE, "components", "Entete.tsx"), "utf8");
  assert.match(entete, /<Cloche nouveaux=\{[^}]+\} dernier=\{[^}]+\} \/>/);
});
