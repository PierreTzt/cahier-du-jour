/**
 * Le manuel ne corrige jamais une question du test.
 *
 * Le test lui promet qu'il ne saura jamais s'il a juste. Le manuel, lui, lui
 * montre la correction après chaque réponse. Si un exercice reprend une
 * question du test, la promesse tombe : le lendemain, la leçon lui apprend
 * s'il a « réussi l'examen ». C'est arrivé : le 16 septembre 2026, il a
 * répondu aux questions de la partie 1, et la leçon du 17 en reposait sept sur
 * huit, correction comprise. Le test s'étalant désormais sur une semaine où
 * l'on enseigne, l'inverse fausse aussi le portrait : une notion vue corrigée
 * la veille se lit « très bonne maîtrise ».
 *
 * On refuse donc l'identique, et le presque identique — mêmes mots à un ou
 * deux près, ou même opération sur les mêmes nombres.
 */

import { test } from "node:test";
import assert from "node:assert/strict";
import { lecons } from "../lib/programme";
import { questions } from "../lib/positionnement";

const mots = (s: string) =>
  s
    .normalize("NFD")
    .replace(/[̀-ͯ]/g, "")
    .toLowerCase()
    .replace(/(\d)[\s  ](?=\d{3}\b)/g, "$1")
    .split(/[^a-z0-9]+/)
    .filter((m) => m.length > 0);

const nombres = (s: string) => mots(s).filter((m) => /^\d+$/.test(m));

/** Part des mots en commun, sur l'ensemble des mots des deux énoncés. */
function ressemblance(a: string, b: string) {
  const x = new Set(mots(a));
  const y = new Set(mots(b));
  const communs = [...x].filter((m) => y.has(m)).length;
  return communs / new Set([...x, ...y]).size;
}

function memesNombres(a: string, b: string) {
  const x = nombres(a).sort().join(" ");
  const y = nombres(b).sort().join(" ");
  return x.length > 0 && x === y && nombres(a).length >= 2;
}

/* Les deux séries : la première fois, et la reprise. */
const exercices = lecons.flatMap((l) =>
  [...l.exercices, ...(l.reprise ?? [])].map((e) => ({ lecon: l.code, e })),
);

/** Une question à choix se reconnaît à ses choix autant qu'à son énoncé. */
const texte = (x: { enonce: string; choix?: string[] }) =>
  [x.enonce, ...(x.choix ?? [])].join(" ");

test("aucun exercice du manuel ne reprend une question du test", () => {
  const trouves: string[] = [];
  for (const q of questions)
    for (const { lecon, e } of exercices) {
      const r = ressemblance(texte(q), texte(e));
      if (r >= 0.8 || memesNombres(texte(q), texte(e)))
        trouves.push(`${e.code} (${lecon}) ≈ ${q.code} [${r.toFixed(2)}] : ${e.enonce}`);
    }
  assert.deepEqual(trouves, [], `\n${trouves.join("\n")}`);
});

/**
 * Le cours non plus ne corrige pas le test.
 *
 * Les exercices réécrits, le cours de la leçon du 17 septembre disait encore
 * « Dans 4 728, le chiffre des centaines est 7 » — la réponse d'une question
 * de la veille. On ne peut pas interdire au cours d'enseigner ce que le test
 * interroge ; on interdit qu'un paragraphe, une règle ou un exemple reprenne
 * **les nombres d'une question et sa réponse** : c'est la question elle-même,
 * résolue. Les puissances de dix (100, 1 000) ne comptent pas, elles sont
 * partout ; et il faut au moins un nombre à trois chiffres dans la question.
 */
test("aucun paragraphe de cours ni exemple ne reprend une question du test et sa réponse", () => {
  const ronds = new Set(["10", "100", "1000", "10000"]);
  const trouves: string[] = [];
  for (const q of questions) {
    const significatifs = nombres(texte(q)).filter((n) => !ronds.has(n));
    if (!significatifs.some((n) => n.length >= 3)) continue;
    const reponse = nombres(q.attendu);
    /* Une réponse qui n'est pas un nombre (« pair ») et un seul nombre dans
       la question : ce nombre peut apparaître partout pour d'autres raisons. */
    if (reponse.length !== 1 && significatifs.length < 2) continue;
    const cherches = reponse.length === 1 ? [...significatifs, reponse[0]] : significatifs;
    for (const l of lecons) {
      const morceaux = [
        ...l.cours.map((p) => [...p.texte, p.regle ?? ""].join(" ")),
        ...l.exemples.map((x) => [x.enonce, ...x.etapes, x.resultat].join(" ")),
      ];
      for (const m of morceaux) {
        const presents = new Set(nombres(m));
        if (cherches.every((n) => presents.has(n)))
          trouves.push(`${l.code} ≈ ${q.code} : ${q.enonce}`);
      }
    }
  }
  assert.deepEqual([...new Set(trouves)], [], `\n${[...new Set(trouves)].join("\n")}`);
});

/**
 * Un exercice ne reprend pas l'exemple résolu de sa propre leçon.
 *
 * Trouvé le 16 septembre 2026 en relisant « Additionner et soustraire » :
 * l'exemple résolvait « 4 807 + 2 396 = 7 203 », et l'exercice 2 demandait
 * « Calcule 4 807 + 2 396 ». Il recopie, et le relevé dit « juste ». Dix cas
 * dans le manuel, en maths, en français et en histoire.
 */
test("aucun exercice ne reprend l'exemple résolu de sa leçon", () => {
  const trouves: string[] = [];
  for (const l of lecons)
    for (const x of l.exemples)
      for (const e of [...l.exercices, ...(l.reprise ?? [])])
        if (ressemblance(x.enonce, e.enonce) >= 0.8 || memesNombres(x.enonce, e.enonce))
          trouves.push(`${e.code} ≈ exemple de ${l.code} : ${e.enonce}`);
  assert.deepEqual(trouves, [], `\n${trouves.join("\n")}`);
});

/**
 * La seconde série ne reprend pas la première.
 *
 * Elle existe pour ça : la reprise reposait les huit exercices déjà corrigés
 * dix jours plus tôt. Une seconde série qui les recopierait mesurerait encore
 * le souvenir de la correction.
 */
test("la seconde série d'une leçon ne reprend aucun exercice de la première", () => {
  const trouves: string[] = [];
  for (const l of lecons)
    for (const r of l.reprise ?? [])
      for (const e of l.exercices)
        if (ressemblance(texte(r), texte(e)) >= 0.8 || memesNombres(texte(r), texte(e)))
          trouves.push(`${r.code} ≈ ${e.code} : ${r.enonce}`);
  assert.deepEqual(trouves, [], `\n${trouves.join("\n")}`);
});

test("le contrôle voit bien un exercice recopié du test", () => {
  const q = questions[0];
  assert.ok(ressemblance(q.enonce, q.enonce) === 1);
  assert.ok(ressemblance(q.enonce, q.enonce.replace(/\?$/, " ?")) >= 0.8);
  assert.ok(memesNombres("Calcule 207 × 6.", "Combien font 6 × 207 ?"));
});
