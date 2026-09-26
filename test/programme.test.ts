/**
 * Le programme, et la seule chose qui doit tenir dans six mois.
 *
 * Deux garanties, différentes de celles du test de positionnement, et c'est
 * exactement pour ça qu'elles méritent d'être vérifiées séparément :
 *
 *   1. La correction est due à l'enfant — mais **après** sa réponse. Les
 *      résultats ne doivent pas se trouver dans la page avant qu'il ait
 *      répondu, sinon il les y trouvera, et le relevé de ses parents
 *      deviendra faux.
 *   2. Aucun décompte ne lui est jamais rendu. La correction dit la méthode,
 *      elle ne dit pas « juste » ni « faux », et rien ne totalise ses erreurs
 *      de son côté.
 */

import { test } from "node:test";
import assert from "node:assert/strict";
import {
  lecons,
  leconParCode,
  leconsDePeriode,
  poserLecon,
  corrigerExercice,
  partieDeLExercice,
  tailleLecon,
  SUFFIXE_REPRISE,
} from "../lib/programme";
import { PASSAGES } from "../lib/programme/passages";
import { correction, type LigneTravail } from "../lib/travail";
import { releveDeSeance } from "../lib/releve";
import { commeAttendu } from "../lib/comparer";

const tousExercices = lecons.flatMap((l) => l.exercices);

const fait = (exercice: string, valeur: string, saitPas = false): LigneTravail => ({
  exercice,
  valeur,
  sait_pas: saitPas,
  saisi_le: "2026-09-12",
});

/* ------------------------------------------------------------------ */
/* Ce qui part vers l'enfant                                           */
/* ------------------------------------------------------------------ */

test("la leçon posée ne contient aucun résultat ni aucune correction", () => {
  for (const l of lecons) {
    const posee = poserLecon(l);
    for (const ex of posee.exercices) {
      const clefs = Object.keys(ex);
      assert.ok(
        !clefs.includes("resultat"),
        `le résultat part dans la page : ${ex.code}`,
      );
      assert.ok(
        !clefs.includes("comment"),
        `la correction part dans la page : ${ex.code}`,
      );
      /* Le passage du cours arrive avec la correction, pas avant : savoir
         quelle partie s'applique fait partie de l'exercice. */
      assert.ok(
        !clefs.includes("partie"),
        `le passage du cours part dans la page avant sa réponse : ${ex.code}`,
      );
    }
    /* Sérialisé, parce que c'est sous cette forme que ça traverse vers le
       navigateur : une propriété oubliée dans un objet imbriqué passerait
       la vérification des clés de premier niveau. */
    const json = JSON.stringify(posee.exercices);
    for (const ex of l.exercices) {
      assert.ok(
        !json.includes(ex.comment),
        `la correction de ${ex.code} se retrouve dans le JSON de la leçon`,
      );
    }
  }
});

test("le cours entier part, lui : c'est un manuel", () => {
  /* L'inverse du test précédent. Le cours, les règles et les exemples traités
     doivent bien traverser — y compris leurs résultats, puisqu'un exemple
     traité sans son résultat n'apprend rien. */
  for (const l of lecons) {
    const posee = poserLecon(l);
    assert.deepEqual(posee.cours, l.cours);
    assert.deepEqual(posee.exemples, l.exemples);
    assert.ok(posee.titre.length > 5);
  }
});

test("la correction ne dit ni « juste » ni « faux »", () => {
  for (const ex of tousExercices) {
    const c = correction(ex);
    assert.deepEqual(Object.keys(c).sort(), ["comment", "resultat"]);
    /* Elle est identique quelle que soit sa réponse : c'est ce qui fait
       qu'elle enseigne au lieu de sanctionner. */
    assert.equal(c.comment, ex.comment);
    assert.equal(c.resultat, ex.resultat);
  }
});

test("corrigerExercice retrouve un exercice, et rend null sinon", () => {
  const ex = tousExercices[0];
  assert.deepEqual(corrigerExercice(ex.code), {
    resultat: ex.resultat,
    comment: ex.comment,
    partie: partieDeLExercice(ex.code),
  });
  assert.equal(corrigerExercice("code-qui-n-existe-pas"), null);
});

/**
 * Chaque correction rouvre le cours sur la partie qui explique l'exercice.
 *
 * Retour d'un parent, 23 septembre 2026 : s'il a faux, « un truc qui le
 * redirige vers le morceau de leçon qui correspond pour qu'il le relise ».
 * Le renvoi vient après chaque réponse, juste ou fausse ; il faut donc que
 * chaque exercice, des deux séries, ait sa partie. Elle est désignée par son
 * titre : une partie déplacée ne décale rien, un titre retouché échoue ici.
 */
test("chaque exercice, des deux séries, renvoie à une partie de son cours", () => {
  const connus = new Set<string>();
  for (const l of lecons) {
    const titres = l.cours.map((p) => p.titre ?? "");
    for (const ex of [...l.exercices, ...(l.reprise ?? [])]) {
      connus.add(ex.code);
      const titre = PASSAGES[ex.code];
      assert.ok(titre !== undefined, `${ex.code} (${l.code}) ne renvoie à aucune partie du cours`);
      assert.ok(
        titres.includes(titre),
        `${ex.code} renvoie à « ${titre} », qui n'est pas un titre du cours de ${l.code}`,
      );
      const partie = corrigerExercice(ex.code)?.partie;
      assert.ok(typeof partie === "number", `${ex.code} : la correction ne dit pas sa partie`);
      assert.equal(titres[partie], titre);
    }
  }
  for (const code of Object.keys(PASSAGES))
    assert.ok(connus.has(code), `passages.ts nomme ${code}, qui n'est plus un exercice`);
});

/* ------------------------------------------------------------------ */
/* Le manuel lui-même                                                  */
/* ------------------------------------------------------------------ */

test("chaque leçon a un cours, un exemple traité et des exercices", () => {
  assert.ok(lecons.length >= 10, "la période 1 doit tenir plusieurs semaines");
  for (const l of lecons) {
    assert.ok(l.cours.length >= 2, `cours trop maigre : ${l.code}`);
    assert.ok(
      l.cours.some((p) => p.regle),
      `aucune règle à retenir : ${l.code}`,
    );
    assert.ok(l.exemples.length >= 1, `aucun exemple traité : ${l.code}`);
    for (const ex of l.exemples) {
      assert.ok(ex.etapes.length >= 2, `exemple non détaillé : ${l.code}`);
      assert.ok(ex.resultat.trim().length > 0, `exemple sans résultat : ${l.code}`);
    }
    assert.ok(
      tailleLecon(l) >= 6,
      `${l.code} n'a que ${tailleLecon(l)} exercices : trop peu pour une séance`,
    );
    assert.ok(l.reference.length > 40, `référence trop maigre : ${l.code}`);
    assert.ok(l.minutes >= 10 && l.minutes <= 60, `durée douteuse : ${l.code}`);
  }
});

test("chaque exercice a un résultat et une façon de faire", () => {
  for (const ex of tousExercices) {
    assert.ok(ex.enonce.trim().length > 10, `énoncé trop court : ${ex.code}`);
    assert.ok(ex.resultat.trim().length > 0, `résultat manquant : ${ex.code}`);
    /* Le `comment` est le cœur de l'exercice : sans lui, la correction se
       réduit à donner la réponse, ce qui n'apprend rien. */
    assert.ok(
      ex.comment.trim().length > 30,
      `correction trop maigre pour enseigner quoi que ce soit : ${ex.code}`,
    );
    if (ex.type === "choix") {
      assert.ok(ex.choix && ex.choix.length >= 2, `choix manquants : ${ex.code}`);
      assert.ok(
        ex.choix!.includes(ex.resultat),
        `le résultat ne figure pas parmi les choix : ${ex.code}`,
      );
      assert.equal(new Set(ex.choix).size, ex.choix!.length, `doublon : ${ex.code}`);
    } else {
      assert.equal(ex.choix, undefined, `une saisie avec des choix : ${ex.code}`);
    }
  }
});

test("les codes sont uniques : ce sont les clés du travail en base", () => {
  const codesEx = tousExercices.map((x) => x.code);
  assert.equal(new Set(codesEx).size, codesEx.length);
  const codesLecons = lecons.map((l) => l.code);
  assert.equal(new Set(codesLecons).size, codesLecons.length);
  assert.equal(leconParCode.size, lecons.length);
});

test("l'année entière est couverte, période par période", () => {
  /* Un trou dans une période, c'est un mois sans rien à donner. Le test le
     dit avant qu’un parent ne le découvre un lundi matin. */
  for (const p of [1, 2, 3, 4, 5] as const) {
    const lot = leconsDePeriode(p);
    assert.ok(lot.length >= 6, `la période ${p} n'a que ${lot.length} leçons`);
    assert.ok(
      lot.some((l) => l.matiere === "maths"),
      `la période ${p} n'a pas de mathématiques`,
    );
    assert.ok(
      lot.some((l) => l.matiere === "francais"),
      `la période ${p} n'a pas de français`,
    );
  }
  assert.equal(
    leconsDePeriode(1).length +
      leconsDePeriode(2).length +
      leconsDePeriode(3).length +
      leconsDePeriode(4).length +
      leconsDePeriode(5).length,
    lecons.length,
    "toute leçon appartient à une période",
  );
});

test("les matières annoncées sont toutes servies", () => {
  const servies = new Set(lecons.map((l) => l.matiere));
  for (const m of [
    "maths",
    "francais",
    "sciences",
    "histoire",
    "geographie",
    "anglais",
    "emc",
    "arts",
  ] as const) {
    assert.ok(servies.has(m), `aucune leçon en ${m}`);
  }
});

/* ------------------------------------------------------------------ */
/* Comparer                                                            */
/* ------------------------------------------------------------------ */

test("les espaces des grands nombres ne comptent pas", () => {
  assert.ok(commeAttendu("340 206", "340206"));
  assert.ok(commeAttendu("340206", "340 206"));
  assert.ok(commeAttendu("2 h 45", "2h45"));
  assert.ok(commeAttendu("  18  ", "18"));
});

test("la tolérance par suffixe ne s'applique jamais aux nombres", () => {
  /* « 3 » se termine par les mêmes caractères que « 13 » : si on tolérait le
     suffixe, une réponse fausse serait présentée aux parents comme juste, et
     ils prépareraient le travail de demain là-dessus. */
  assert.equal(commeAttendu("3", "13"), false);
  assert.equal(commeAttendu("206", "340206"), false);
  assert.equal(commeAttendu("", "18"), false);
  /* Mais sur du texte, oui : la notion est là. */
  assert.ok(commeAttendu("chevaux", "des chevaux"));
});

/* ------------------------------------------------------------------ */
/* Ce que les parents lisent                                           */
/* ------------------------------------------------------------------ */

const lecon = lecons[0];
const exos = lecon.exercices;

test("le relevé compte les résultats et détaille ce qui n'est pas passé", () => {
  const tout = exos.map((x) => fait(x.code, x.resultat));
  const plein = releveDeSeance(lecon.code, tout)!;
  assert.equal(plein.faits, exos.length);
  assert.equal(plein.justes, exos.length);
  assert.deepEqual(plein.ecarts, []);

  const avecUnRate = [
    ...tout.slice(0, -1),
    fait(exos.at(-1)!.code, "n’importe quoi"),
  ];
  const partiel = releveDeSeance(lecon.code, avecUnRate)!;
  assert.equal(partiel.justes, exos.length - 1);
  assert.equal(partiel.ecarts.length, 1);
  assert.equal(partiel.ecarts[0].attendu, exos.at(-1)!.resultat);
  assert.equal(partiel.ecarts[0].enonce, exos.at(-1)!.enonce);
});

test("« je ne sais pas » figure au relevé comme tel, pas comme une erreur", () => {
  const r = releveDeSeance(lecon.code, [fait(exos[0].code, "", true)])!;
  assert.equal(r.faits, 1);
  assert.equal(r.justes, 0);
  assert.equal(r.ecarts[0].saitPas, true);
});

test("un exercice non fait ne compte pas comme raté", () => {
  const r = releveDeSeance(lecon.code, [fait(exos[0].code, exos[0].resultat)])!;
  assert.equal(r.faits, 1);
  assert.equal(r.total, exos.length);
  assert.equal(r.ecarts.length, 0, "les exercices non faits ne sont pas des écarts");
});

test("une leçon inconnue ne rend rien plutôt qu'un relevé vide trompeur", () => {
  assert.equal(releveDeSeance("lecon-supprimee", [fait("x", "y")]), null);
});

test("aucune note globale ne sort du relevé", () => {
  /* Un chiffre unique ne se traduit en rien d'actionnable, et il crée une
     valeur à comparer la semaine suivante — donc une courbe, donc des creux
     à expliquer. */
  const r = releveDeSeance(lecon.code, exos.map((x) => fait(x.code, x.resultat)))!;
  for (const interdit of ["note", "score", "moyenne", "niveau", "pourcent"]) {
    assert.ok(
      !Object.keys(r).some((k) => k.toLowerCase().includes(interdit)),
      `le relevé expose « ${interdit} »`,
    );
  }
});

/**
 * Les espaces insécables des titres, qui ne sont pas une question de goût.
 *
 * Un titre de leçon est ce que l'enfant lit **et** la clé sur laquelle
 * `accorder()` reconnaît une séance de la trame dans la base : c'est par lui
 * qu'il décide de la garder, de la retirer ou de la remettre. Une espace
 * ordinaire mise à la place de l'insécable devant un deux-points ne se voit
 * pas à l'œil, ne casse aucun test de logique, et suffit à ce qu'une séance
 * déjà écrite ne soit plus reconnue — elle serait supprimée, puis réinsérée à
 * l'identique.
 *
 * C'est arrivé : une relecture du manuel a normalisé « Décider ensemble : le
 * vote » sans le vouloir, alors que les mille séances de l'année portaient
 * l'insécable. Le test n'est donc pas là pour la typographie, il est là pour
 * la stabilité d'une clé.
 */
test("les titres portent l'espace insécable de la typographie française", () => {
  const fautifs = lecons.filter((l) => / [:;?!»]|« /.test(l.titre));
  assert.deepEqual(
    fautifs.map((l) => `${l.code} : ${l.titre}`),
    [],
    "espace ordinaire devant une ponctuation haute — l'insécable est la clé de la trame",
  );
});

/* ------------------------------------------------------------------ */
/* La seconde série, pour les reprises                                 */
/* ------------------------------------------------------------------ */

test("une leçon posée ne porte ni sa seconde série, ni aucun résultat, ni aucune méthode", () => {
  const l = {
    ...lecons[0],
    reprise: [
      { code: "essai-r1", enonce: "Question de reprise ?", type: "saisie" as const, resultat: "RESULTAT-SECRET", comment: "COMMENT-SECRET" },
    ],
  };
  for (const titre of [l.titre, `${l.titre}${SUFFIXE_REPRISE}`]) {
    const json = JSON.stringify(poserLecon(l, titre));
    assert.ok(!json.includes("RESULTAT-SECRET"), "un résultat de la seconde série part dans la page");
    assert.ok(!json.includes("COMMENT-SECRET"), "une méthode de la seconde série part dans la page");
    assert.ok(!json.includes('"reprise"'), "la seconde série part dans la page");
    for (const ex of l.exercices) assert.ok(!json.includes(JSON.stringify(ex.resultat) + ',"comment"'));
  }
  /* Une reprise sert la seconde série ; la première fois, la première. */
  assert.equal(poserLecon(l, `${l.titre}${SUFFIXE_REPRISE}`).exercices[0].code, "essai-r1");
  assert.equal(poserLecon(l, l.titre).exercices[0].code, l.exercices[0].code);
  /* Sans seconde série, la reprise repose la première. */
  assert.equal(poserLecon(lecons[0], `${lecons[0].titre}${SUFFIXE_REPRISE}`).exercices.length, lecons[0].exercices.length);
});

test("chaque exercice d'une seconde série se corrige, et ses codes ne croisent aucun autre", () => {
  const codes = lecons.flatMap((l) => [...l.exercices, ...(l.reprise ?? [])].map((e) => e.code));
  assert.equal(new Set(codes).size, codes.length, "deux exercices partagent un code");
  for (const l of lecons)
    for (const e of l.reprise ?? []) assert.ok(corrigerExercice(e.code), `${e.code} ne se corrige pas`);
});

/**
 * Les doubles astérisques ne vont que là où l'écran les met en gras.
 *
 * Trouvé le 16 septembre 2026 en essayant une reprise : l'exemple de « Mesurer
 * une masse » affichait « le bol **et** la farine », astérisques comprises. Le
 * manuel mettait bien les étapes en gras, la page de l'enfant non. Le cours,
 * la règle et les exemples passent par `gras` des deux côtés ; un titre, un
 * énoncé d'exercice, un choix, un résultat ou une méthode s'affichent tels
 * quels — et un choix écrit avec des astérisques ne serait plus reconnu.
 */
test("aucune double astérisque là où la page de l'enfant ne met pas en gras", () => {
  const trouves: string[] = [];
  const voir = (ou: string, s: string | undefined) => {
    if (s?.includes("**")) trouves.push(`${ou} : ${s}`);
  };
  for (const l of lecons) {
    voir(`${l.code} (titre)`, l.titre);
    /* Le titre d'une partie s'affiche tel quel, en tête de la partie et dans
       le renvoi « Dans le cours » de chaque correction. */
    for (const p of l.cours) voir(`${l.code} (titre de partie)`, p.titre);
    for (const x of l.exemples) voir(`${l.code} (résultat d'exemple)`, x.resultat);
    for (const e of [...l.exercices, ...(l.reprise ?? [])]) {
      voir(e.code, e.enonce);
      for (const c of e.choix ?? []) voir(`${e.code} (choix)`, c);
      voir(`${e.code} (résultat)`, e.resultat);
      voir(`${e.code} (méthode)`, e.comment);
    }
  }
  assert.deepEqual(trouves, [], `\n${trouves.join("\n")}`);
});
