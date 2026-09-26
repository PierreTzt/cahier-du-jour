/**
 * Les fiches, et les deux choses qu'elles ne doivent jamais faire.
 *
 *   1. **Se rattacher à un rituel qui n'existe pas.** Une fiche se relie à sa
 *      séance par le titre du rituel, au caractère près. Une apostrophe droite
 *      à la place d'une courbe, une espace ordinaire devant un deux-points, et
 *      la fiche ne s'affiche jamais — sans que rien ne le signale. C'est la
 *      même fragilité que celle des titres de leçon, et elle se garde pareil.
 *
 *   2. **Traverser vers l'écran de l'enfant.** Une fiche porte les corrigés :
 *      les dix réponses du calcul mental, ce qu'on attend des cinq questions
 *      du texte. Elle est à l'adulte qui mène la séance, à personne d'autre.
 */

import { test } from "node:test";
import assert from "node:assert/strict";
import { fiches, ficheParCode, ficheDe, fichesDuRituel } from "../lib/fiches";
import { joursAvecTrame, trameDuJour, joursDuRituel } from "../lib/trame";
import { journeeVivante } from "../lib/journee";
import { enMorceaux, lignesDeLaFiche, aDesReponses } from "../lib/fiches/mise-en-page";
import type { Fiche } from "../lib/fiches";

/** Le texte qu'un adulte lit — pas le code ni le rituel, qui sont des clés. */
const textesLus = (f: Fiche): [string, string][] => [
  ["titre", f.titre],
  ...f.mener.map((t, i): [string, string] => [`mener ${i + 1}`, t]),
  ...f.materiel.map((t, i): [string, string] => [`matériel ${i + 1}`, t]),
  ...(f.corrige ?? []).map((t, i): [string, string] => [`corrigé ${i + 1}`, t]),
  ...(f.regarder ? [["regarder", f.regarder] as [string, string]] : []),
];

/** Les rituels que la trame emploie réellement, et leur nombre d'occurrences. */
const attendus = (() => {
  const m = new Map<string, number>();
  for (const j of joursAvecTrame())
    for (const c of trameDuJour(j).creneaux)
      if (!c.lecon) m.set(c.titre, (m.get(c.titre) ?? 0) + 1);
  return m;
})();

test("chaque fiche se rattache à un rituel qui tombe vraiment dans l'année", () => {
  const orphelines = fiches.filter((f) => !attendus.has(f.rituel));
  assert.deepEqual(
    orphelines.map((f) => `${f.code} → « ${f.rituel} »`),
    [],
    "rituel inconnu de la trame : la fiche ne s'affichera jamais",
  );
});

test("les codes sont uniques : ce sont les clés des fiches à l'écran", () => {
  const codes = fiches.map((f) => f.code);
  assert.equal(new Set(codes).size, codes.length);
  assert.equal(ficheParCode.size, fiches.length);
});

test("un corrigé se lit en vis-à-vis de son matériel, donc il a la même longueur", () => {
  const bancales = fiches.filter(
    (f) => f.corrige !== undefined && f.corrige.length !== f.materiel.length,
  );
  assert.deepEqual(
    bancales.map((f) => `${f.code} : ${f.materiel.length} éléments, ${f.corrige!.length} corrigés`),
    [],
  );
});

test("chaque fiche dit comment on s'y prend, et avec quoi", () => {
  for (const f of fiches) {
    assert.ok(f.mener.length >= 1, `${f.code} : rien dans « mener »`);
    assert.ok(f.materiel.length >= 1, `${f.code} : rien dans « materiel »`);
    assert.ok(f.titre.trim().length > 3, `${f.code} : titre trop maigre`);
  }
});

/**
 * La série d'un rituel se parcourt dans l'ordre, et elle recommence quand
 * elle est épuisée plutôt que de ne rien rendre : une fiche revue des mois
 * plus tard est une révision, un écran vide est un parent devant rien.
 */
test("la série d'un rituel se déroule dans l'ordre, puis recommence", () => {
  const outilles = [...attendus.keys()].filter((r) => fichesDuRituel(r).length > 0);
  assert.ok(outilles.length > 0, "aucun rituel n'a de fiche : le test ne vérifie rien");

  for (const rituel of outilles) {
    const serie = fichesDuRituel(rituel);
    for (let i = 0; i < serie.length; i++) {
      assert.equal(ficheDe(rituel, i)?.code, serie[i].code, `${rituel}, occurrence ${i}`);
    }
    /* Un tour de plus : on revient au début. */
    assert.equal(ficheDe(rituel, serie.length)?.code, serie[0].code);
  }
  assert.equal(ficheDe("Un rituel qui n’existe pas", 0), null);
});

/**
 * La frontière. Le code de la fiche vit sur la séance en base, mais il ne
 * figure pas dans ce que l'écran de l'enfant reçoit — il n'a rien à y faire,
 * et ce qui n'est pas transmis ne peut pas fuiter dans un écran écrit dans
 * six mois.
 */
test("aucune fiche ne traverse vers la projection de l'enfant", () => {
  const vue = journeeVivante(
    [
      {
        id: "a",
        rang: 1,
        matiere: "francais",
        titre: "Dictée de mots",
        reference: "",
        consigne: "Quinze mots.",
        minutes: 20,
        lecon: "",
        fiche: "ed-mots-01",
        origine: "trame",
        par_adulte: null,
        par_mot: null,
        etat: "a-venir",
        test: false,
      },
    ],
    null,
  );
  const traverse = JSON.stringify(vue);
  assert.ok(!traverse.includes("fiche"), "le champ « fiche » traverse la frontière");
  assert.ok(!traverse.includes("ed-mots-01"), "le code de la fiche traverse la frontière");
});

/* ------------------------------------------------------------------ */
/* Ce que l'adulte lit à l'écran                                       */
/* ------------------------------------------------------------------ */

/**
 * Le premier rendu affichait le texte tel quel : des astérisques au milieu
 * des mots, et deux numéros par ligne quand l'auteur avait numéroté ses
 * questions. Mille cent entrées, dont celles de la rédaction, déjà en ligne.
 */
test("le gras s'écrit entre doubles astérisques et ne s'affiche pas tel quel", () => {
  assert.deepEqual(enMorceaux("un **château** fort"), [
    { texte: "un ", gras: false },
    { texte: "château", gras: true },
    { texte: " fort", gras: false },
  ]);
  assert.deepEqual(enMorceaux("**Le début**"), [{ texte: "Le début", gras: true }]);
  /* Une paire jamais refermée n'est pas devinée. */
  assert.deepEqual(enMorceaux("un **château fort"), [{ texte: "un **château fort", gras: false }]);
});

test("chaque gras ouvert dans une fiche est refermé", () => {
  const bancales: string[] = [];
  for (const f of fiches)
    for (const [ou, t] of textesLus(f))
      if (t.split("**").length % 2 === 0) bancales.push(`${f.code} · ${ou}`);
  assert.deepEqual(bancales, [], "une paire d'astérisques ouverte s'afficherait telle quelle");
});

test("une liste sans numéros est numérotée ; une liste numérotée garde les numéros de l'auteur", () => {
  const calcul = lignesDeLaFiche(["2 × 4", "5 × 3"], ["8", "15"]);
  assert.deepEqual(
    calcul.map((l) => [l.numero, l.texte, l.reponse]),
    [["1", "2 × 4", "8"], ["2", "5 × 3", "15"]],
  );

  /* Un texte en deux paragraphes puis deux questions : les questions gardent
     1 et 2, pas 3 et 4, et les paragraphes ne portent pas de numéro. */
  const texte = lignesDeLaFiche(
    ["Il était une fois.", "Il pleuvait.", "1. Qui ?", "2. Quand ?"],
    ["", "", "1. Le chat.", "2. Le soir."],
  );
  assert.deepEqual(
    texte.map((l) => [l.numero, l.texte, l.reponse]),
    [
      [null, "Il était une fois.", ""],
      [null, "Il pleuvait.", ""],
      ["1", "Qui ?", "Le chat."],
      ["2", "Quand ?", "Le soir."],
    ],
  );
});

test("une réponse qui est une phrase ne se serre pas en marge", () => {
  const [court, long] = lignesDeLaFiche(
    ["7 × 8", "sombre"],
    ["56", "Synonyme : obscur. Contraire : clair. Famille : assombrir."],
  );
  assert.equal(court.reponseLongue, false);
  assert.equal(long.reponseLongue, true);
});

test("un corrigé décalé d'une ligne ne s'affiche pas du tout", () => {
  assert.equal(aDesReponses(["a", "b"], ["1"]), false);
  assert.equal(aDesReponses(["a", "b"], ["", ""]), false);
  assert.equal(aDesReponses(["a", "b"], ["", "2"]), true);
  assert.ok(lignesDeLaFiche(["a", "b"], ["1"]).every((l) => l.reponse === ""));
});

/**
 * La typographie française, dans le texte seulement. Trois mille quatre cents
 * chaînes portaient une apostrophe droite ou une espace ordinaire devant un
 * deux-points : à l'écran, le deux-points passait seul à la ligne suivante.
 * Le rituel en est exempté exprès — c'est une clé, et la trame écrit
 * « Géométrie : tracer » avec une espace ordinaire.
 */
test("le texte des fiches porte l'apostrophe courbe et l'espace insécable", () => {
  const fautes: string[] = [];
  for (const f of fiches)
    for (const [ou, t] of textesLus(f)) {
      if (/[A-Za-zÀ-ÿ]'[A-Za-zÀ-ÿ]/.test(t)) fautes.push(`${f.code} · ${ou} : apostrophe droite`);
      if (/ [:;!?]/.test(t)) fautes.push(`${f.code} · ${ou} : espace ordinaire avant la ponctuation`);
      if (/« | »/.test(t)) fautes.push(`${f.code} · ${ou} : espace ordinaire dans les guillemets`);
    }
  assert.deepEqual(fautes.slice(0, 10), [], `${fautes.length} faute(s) de typographie`);
});

/**
 * La date qu'une fiche annonce est celle où elle tombe.
 *
 * La page d'une fiche dit « tombe le 28 septembre » en lisant `joursDuRituel` ;
 * la séance, elle, reçoit son code par la rotation de la trame. Les deux se
 * calculaient chacun de leur côté, et la lecture libre s'est trouvée décalée
 * d'un cran sur toute l'année : le jour du test, posé à la main, comptait pour
 * l'un et pas pour l'autre. Ce test les confronte, rituel par rituel, date par
 * date.
 */
test("la n-ième date d'un rituel porte sa n-ième fiche", () => {
  const ecarts: string[] = [];
  for (const rituel of attendus.keys()) {
    if (fichesDuRituel(rituel).length === 0) continue;
    joursDuRituel(rituel).forEach((jour, n) => {
      const creneau = trameDuJour(jour).creneaux.find((c) => !c.lecon && c.titre === rituel);
      const attendue = ficheDe(rituel, n)?.code;
      if (creneau?.fiche !== attendue)
        ecarts.push(`${rituel}, ${jour} (occurrence ${n + 1}) : ${creneau?.fiche ?? "aucune"} au lieu de ${attendue}`);
    });
  }
  assert.deepEqual(ecarts.slice(0, 8), [], `${ecarts.length} séance(s) décalée(s)`);
});
