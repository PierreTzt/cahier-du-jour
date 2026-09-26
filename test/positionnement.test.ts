/**
 * Le positionnement — et les garanties qui le rendent acceptable.
 *
 * Deux promesses tiennent tout ce dispositif, et elles sont vérifiées ici
 * parce qu'aucune relecture ne les tiendra dans six mois :
 *
 *   1. L'enfant ne sait jamais s'il a juste. Si l'attendu fuitait vers sa vue,
 *      le test deviendrait exactement ce qu'on a refusé de construire.
 *   2. Dans un bloc, on va jusqu'au bout. C'est un examen : rien ne permet de
 *      sauter une question, d'en choisir une autre ou de s'arrêter au milieu.
 *   3. Une partie par jour, au plus. Le test était « assez lourd » d'une
 *      traite ; une partie finie, c'est le test qui s'arrête jusqu'au lendemain.
 */

import { test } from "node:test";
import assert from "node:assert/strict";
import {
  blocs,
  notions,
  questions,
  prochaine,
  ceQuiVientAujourdhui,
  blocsFinis,
  tailleBloc,
} from "../lib/positionnement";
import { lecturePourParents, MAITRISE } from "../lib/lecture";
import type { LigneReponse } from "../lib/reponses";

const tous = questions.map((q) => q.code);
const rep = (exercice: string, valeur: string): LigneReponse => ({
  exercice,
  valeur,
  sait_pas: false,
  saisi_le: "2026-09-12",
  jour: "2026-09-12",
});

/* ------------------------------------------------------------------ */
/* Ce qui part vers l'enfant                                           */
/* ------------------------------------------------------------------ */

test("ce qui part vers l'enfant ne contient ni l'attendu ni la notion", () => {
  /* On déroule tout le test, question par question, et on regarde ce qui
     traverse à chaque fois. Une fuite sur la centième compterait autant. */
  const vus: string[] = [];
  for (let i = 0; i < questions.length; i++) {
    const etape = prochaine(vus);
    assert.ok(etape, `le test s'arrête trop tôt, au rang ${i + 1}`);
    const clefs = Object.keys(etape.question);
    assert.ok(!clefs.includes("attendu"), "l'attendu ne doit jamais sortir");
    assert.ok(
      !clefs.includes("reference"),
      "la référence nomme ce qu'on évalue : elle reste côté adulte",
    );
    /* Le nom de la notion dit ce qu'on mesure. Sur son écran, la question
       suffit — la nommer reviendrait à lui annoncer sur quoi il est jugé. */
    assert.ok(!clefs.includes("notion"));
    vus.push(etape.question.code);
  }
  assert.equal(prochaine(vus), null, "tout répondu, il ne reste rien");
});

/**
 * Et le bloc non plus.
 *
 * La fuite qui avait survécu au test ci-dessus : `Etape` rendait le `Bloc`
 * entier à côté de la question soigneusement épurée. Ses notions, leurs
 * questions, tous leurs attendus — l'instrument complet, dans l'écran de
 * l'enfant, pour afficher « partie 3 sur 7 ».
 *
 * Rien ne l'affichait, donc rien ne se voyait. C'est la forme habituelle de ce
 * genre de trou : on protège la chose qu'on regarde et on laisse passer le
 * conteneur qui la contient.
 */
test("le bloc qui part vers l'enfant ne contient aucune question", () => {
  const etape = prochaine([])!;
  const clefs = Object.keys(etape.bloc).sort();
  assert.deepEqual(clefs, ["annonce", "code", "partie", "parties", "titre"]);

  /* Le contrôle en profondeur, pour que l'ajout d'un champ ne rouvre pas la
     porte. Chercher l'attendu lui-même ne marche pas — beaucoup valent « 7 »
     ou « 12 », qui se retrouvent légitimement dans un énoncé ou dans le
     nombre de parties. Le repère solide est le **code des autres questions** :
     une étape doit en mentionner un seul, le sien. Un conteneur qui repasse
     les fait tous apparaître d'un coup. */
  const traverse = JSON.stringify(etape);
  assert.ok(
    !traverse.includes(`"attendu"`),
    "le mot « attendu » traverse la frontière",
  );
  const autres = questions
    .map((q) => q.code)
    .filter((c) => c !== etape.question.code && traverse.includes(`"${c}"`));
  assert.deepEqual(
    autres,
    [],
    `${autres.length} autres questions traversent : ${autres.slice(0, 3).join(", ")}…`,
  );

  assert.equal(etape.bloc.partie, 1);
  assert.equal(etape.bloc.parties, blocs.length);
});

test("le compteur compte les questions posées, jamais les réponses justes", () => {
  /* Le compteur est assumé — c'est un examen, savoir où l'on en est borne la
     tâche. Mais il ne doit rien savoir des réponses : `rang` est une
     position, et il avance même quand il dit qu'il ne sait pas. */
  const a = prochaine([])!;
  assert.equal(a.rang, 1);

  const b = prochaine([a.question.code])!;
  assert.equal(b.rang, 2, "le rang avance quelle que soit la réponse");
  assert.equal(b.total, a.total);
  assert.equal(a.total, tailleBloc(blocs[0]));
});

/* ------------------------------------------------------------------ */
/* On va jusqu'au bout                                                 */
/* ------------------------------------------------------------------ */

test("dans un bloc, on va jusqu'au bout avant de passer au suivant", () => {
  const premier = blocs[0];
  const codes = premier.notions.flatMap((n) => n.questions.map((q) => q.code));

  /* À chaque étape du premier bloc, c'est encore le premier bloc. */
  for (let i = 0; i < codes.length; i++) {
    const etape = prochaine(codes.slice(0, i))!;
    assert.equal(
      etape.bloc.code,
      premier.code,
      `au rang ${i + 1}, on a changé de bloc avant la fin`,
    );
    assert.equal(etape.question.code, codes[i], "l'ordre du bloc est tenu");
  }

  /* Et seulement une fois le bloc fini, on passe au suivant. */
  const apres = prochaine(codes)!;
  assert.equal(apres.bloc.code, blocs[1].code);
  assert.equal(apres.rang, 1);
});

test("répondre à une question d'un autre bloc ne permet pas de sauter le premier", () => {
  /* Un code forgé dans le navigateur ne doit pas ouvrir de raccourci. */
  const ailleurs = blocs[3].notions[0].questions[0].code;
  const etape = prochaine([ailleurs])!;
  assert.equal(etape.bloc.code, blocs[0].code);
});

test("un bloc n'est fini que quand toutes ses questions sont répondues", () => {
  const premier = blocs[0];
  const codes = premier.notions.flatMap((n) => n.questions.map((q) => q.code));
  assert.deepEqual(blocsFinis(codes.slice(0, -1)), []);
  assert.deepEqual(
    blocsFinis(codes).map((b) => b.code),
    [premier.code],
  );
});

/* ------------------------------------------------------------------ */
/* Une partie par jour                                                 */
/* ------------------------------------------------------------------ */

const codesDu = (i: number) =>
  blocs[i].notions.flatMap((n) => n.questions.map((x) => x.code));
const le = (jour: string, codes: string[]) =>
  codes.map((exercice) => ({ exercice, jour }));

test("une partie finie aujourd'hui ne s'enchaîne pas sur la suivante", () => {
  const faites = le("2026-09-16", codesDu(0));

  const ceJour = ceQuiVientAujourdhui(faites, "2026-09-16");
  assert.equal(ceJour.etat, "partie-finie");
  assert.equal(ceJour.etat === "partie-finie" && ceJour.partie.code, blocs[0].code);

  /* Le lendemain, la suivante vient, depuis sa première question. */
  const demain = ceQuiVientAujourdhui(faites, "2026-09-17");
  assert.equal(demain.etat, "question");
  assert.equal(demain.etat === "question" && demain.etape.bloc.code, blocs[1].code);
  assert.equal(demain.etat === "question" && demain.etape.rang, 1);
});

test("une partie commencée se finit le jour même, même après une autre", () => {
  /* Le 16 septembre : deux parties finies d'affilée, la troisième entamée
     quand la règle est arrivée. Il la termine — on ne coupe pas au milieu. */
  const faites = [
    ...le("2026-09-16", codesDu(0)),
    ...le("2026-09-16", codesDu(1)),
    ...le("2026-09-16", codesDu(2).slice(0, 11)),
  ];
  const vient = ceQuiVientAujourdhui(faites, "2026-09-16");
  assert.equal(vient.etat, "question");
  assert.equal(vient.etat === "question" && vient.etape.bloc.code, blocs[2].code);
  assert.equal(vient.etat === "question" && vient.etape.rang, 12);

  /* Et une fois finie, c'est elle qui arrête la journée. */
  const fin = ceQuiVientAujourdhui(
    [...faites, ...le("2026-09-16", codesDu(2).slice(11))],
    "2026-09-16",
  );
  assert.equal(fin.etat === "partie-finie" && fin.partie.code, blocs[2].code);
});

test("une partie finie un autre jour ne retient pas la suivante", () => {
  const faites = le("2026-09-14", codesDu(0));
  assert.equal(ceQuiVientAujourdhui(faites, "2026-09-16").etat, "question");
});

test("la dernière partie finie, le test est fini — pas « à demain »", () => {
  assert.deepEqual(ceQuiVientAujourdhui(le("2026-09-16", tous), "2026-09-16"), {
    etat: "tout-fini",
  });
});

test("la fin d'une partie, vers l'enfant, ne transporte aucune question", () => {
  const vient = ceQuiVientAujourdhui(le("2026-09-16", codesDu(0)), "2026-09-16");
  assert.equal(vient.etat, "partie-finie");
  const traverse = JSON.stringify(vient);
  assert.ok(!traverse.includes(`"attendu"`));
  assert.deepEqual(
    tous.filter((c) => traverse.includes(`"${c}"`)),
    [],
    "aucun code de question ne doit traverser",
  );
});

/* ------------------------------------------------------------------ */
/* L'instrument lui-même                                              */
/* ------------------------------------------------------------------ */

test("cinq questions par notion, au minimum", () => {
  for (const n of notions) {
    assert.ok(
      n.questions.length >= 5,
      `${n.code} n'a que ${n.questions.length} question(s) : une seule ne ` +
        `distingue pas la réussite de la chance`,
    );
  }
  assert.ok(notions.length >= 30, "l'instrument doit couvrir le programme");
});

test("les codes sont uniques : ce sont les clés des réponses en base", () => {
  assert.equal(new Set(tous).size, tous.length);
  const codesNotions = notions.map((n) => n.code);
  assert.equal(new Set(codesNotions).size, codesNotions.length);
});

test("chaque notion porte l'attendu officiel qu'elle interroge", () => {
  for (const n of notions) {
    assert.ok(n.reference.length > 30, `référence trop maigre : ${n.code}`);
    assert.ok(n.libelle.length > 5, `libellé trop maigre : ${n.code}`);
  }
});

test("chaque question a un attendu, et les choix le contiennent", () => {
  for (const q of questions) {
    assert.ok(q.attendu.trim().length > 0, `attendu manquant : ${q.code}`);
    assert.ok(q.enonce.trim().length > 10, `énoncé trop court : ${q.code}`);
    if (q.type === "choix") {
      assert.ok(q.choix && q.choix.length >= 2, `choix manquants : ${q.code}`);
      assert.ok(
        q.choix!.includes(q.attendu),
        `l'attendu ne figure pas parmi les choix : ${q.code}`,
      );
      assert.equal(
        new Set(q.choix).size,
        q.choix!.length,
        `choix en double : ${q.code}`,
      );
    } else {
      assert.equal(q.choix, undefined, `une saisie avec des choix : ${q.code}`);
    }
  }
});

/* ------------------------------------------------------------------ */
/* Ce que les parents lisent                                           */
/* ------------------------------------------------------------------ */

const notionTest = blocs[0].notions[0];
const q = (i: number) => notionTest.questions[i];
const lire = (reponses: LigneReponse[]) =>
  lecturePourParents(reponses)
    .flatMap((b) => b.notions)
    .find((n) => n.code === notionTest.code)!;

test("la lecture est tolérante sur la forme, pas sur la notion", () => {
  /* « 1420 » et « 1 420 » disent la même chose sur ce qu'il sait. */
  const espace = lire([rep(q(4).code, ` ${q(4).attendu} `)]);
  assert.equal(espace.justes, 1);

  /* Mais une vraie erreur reste une erreur. */
  const faux = lire([rep(q(0).code, "9")]);
  assert.equal(faux.justes, 0);
  assert.equal(faux.ecarts[0].donne, "9");
  assert.equal(faux.ecarts[0].attendu, q(0).attendu);
});

test("la tolérance par suffixe ne s'applique jamais aux nombres", () => {
  /* « 34 » attendu, « 4 » donné : les caractères se terminent pareil, mais
     la réponse est fausse. Le déclarer acquis cacherait aux parents un trou
     réel — l'exacte erreur qu'ils ne peuvent pas rattraper. */
  const attendu = q(4).attendu;
  assert.equal(attendu, "34", "le cas de test suppose cet attendu");
  const lu = lire([rep(q(4).code, "4")]);
  assert.equal(lu.justes, 0, "« 4 » ne vaut pas « 34 »");
});

test("« je ne sais pas » est une information, pas une erreur muette", () => {
  const lu = lire([
    { exercice: q(0).code, valeur: "", sait_pas: true, saisi_le: "2026-09-12", jour: "2026-09-12" },
  ]);
  assert.equal(lu.justes, 0);
  assert.equal(lu.posees, 1);
  assert.equal(lu.etat, "en-cours", "une notion incomplète ne se juge pas");
  assert.equal(lu.ecarts[0].saitPas, true);
});

/* L'échelle du bilan de fin de cycle du livret scolaire, choisie le
   16 septembre 2026 : quatre sur cinq ne se lit plus « fragile ». */
test("l'échelle du livret scolaire : 5 très bonne, 4 satisfaisante, 3 fragile, en dessous insuffisante", () => {
  const attendus: [number, string, string][] = [
    [5, "tres-bonne", "très bonne maîtrise"],
    [4, "satisfaisante", "maîtrise satisfaisante"],
    [3, "fragile", "maîtrise fragile"],
    [2, "insuffisante", "maîtrise insuffisante"],
    [1, "insuffisante", "maîtrise insuffisante"],
    [0, "insuffisante", "maîtrise insuffisante"],
  ];
  for (const [justes, etat, mots] of attendus) {
    const reponses = notionTest.questions.map((x, i) =>
      i < justes ? rep(x.code, x.attendu) : rep(x.code, "zzz"),
    );
    const lu = lire(reponses);
    assert.equal(lu.justes, justes);
    assert.equal(lu.etat, etat, `${justes} sur 5`);
    assert.equal(MAITRISE[lu.etat as keyof typeof MAITRISE], mots);
  }

  /* « Je ne sais pas » compte comme une réponse manquée, pas comme une
     question retirée : quatre justes et un « je ne sais pas », c'est quatre. */
  const avecSaitPas = [
    ...notionTest.questions.slice(0, 4).map((x) => rep(x.code, x.attendu)),
    { exercice: q(4).code, valeur: "", sait_pas: true, saisi_le: "2026-09-12", jour: "2026-09-12" },
  ];
  assert.equal(lire(avecSaitPas).etat, "satisfaisante");
});

test("un bloc dont rien n'a été posé ne figure pas dans la lecture", () => {
  const lu = lecturePourParents([rep(q(0).code, q(0).attendu)]);
  assert.equal(lu.length, 1);
  assert.equal(lu[0].code, blocs[0].code);
  assert.equal(lu[0].fini, false);
});

test("aucune note globale ne sort de la lecture", () => {
  /* Un chiffre unique ne dit pas quoi faire lundi matin, et il crée une
     valeur à comparer au trimestre suivant — donc une courbe, donc des creux
     à expliquer. Aucun champ de la lecture ne doit en porter un. */
  const lu = lecturePourParents(questions.map((x) => rep(x.code, x.attendu)));
  for (const bloc of lu) {
    const clefs = Object.keys(bloc);
    for (const interdit of ["note", "score", "moyenne", "niveau", "pourcent"]) {
      assert.ok(
        !clefs.some((k) => k.toLowerCase().includes(interdit)),
        `la lecture expose « ${interdit} »`,
      );
    }
  }
});
