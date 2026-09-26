/**
 * La trame de l'année, et les deux choses qu'elle ne doit jamais faire.
 *
 *   1. **Perdre une leçon.** Une leçon jamais donnée est un trou dans
 *      l'année, et il est invisible : personne ne remarque l'absence de ce
 *      qu'il n'a jamais vu. La première version en perdait trente-trois sur
 *      cent treize, en silence, parce qu'elle plaçait les leçons sur des jours
 *      où leur matière n'était pas demandée.
 *   2. **Changer d'un affichage à l'autre.** Un plan qui bouge est
 *      impossible à préparer et impossible à corriger.
 */

import { test } from "node:test";
import assert from "node:assert/strict";
import { demandeDesCalculs, estUneReprise, lecons, leconParCode } from "../lib/programme";
import {
  trameDuJour,
  trameDeLaSemaine,
  joursDeTravail,
  joursAvecTrame,
  selonLeTon,
  bilanDeLAnnee,
  periodeDe,
  lundiDe,
  JOUR_DU_TEST,
  PREMIER_JOUR,
} from "../lib/trame";

test("aucune leçon du programme n'est perdue", () => {
  const donnees = new Set(
    joursDeTravail()
      .flatMap((j) => trameDuJour(j).creneaux)
      .map((c) => c.lecon)
      .filter((c): c is string => Boolean(c)),
  );
  const manquantes = lecons.filter((l) => !donnees.has(l.code));
  assert.deepEqual(
    manquantes.map((l) => l.code),
    [],
    `${manquantes.length} leçon(s) ne sont jamais donnée(s)`,
  );
});

test("chaque leçon est donnée puis reprise", () => {
  const compte = new Map<string, number>();
  for (const j of joursDeTravail())
    for (const c of trameDuJour(j).creneaux)
      if (c.lecon) compte.set(c.lecon, (compte.get(c.lecon) ?? 0) + 1);
  /* Revoir une notion après un délai est ce qui la fixe. Une seule fois ne
     suffit pas, et le test le dit plutôt que de faire confiance au calcul. */
  const uneSeuleFois = [...compte].filter(([, n]) => n < 2).map(([c]) => c);
  assert.ok(
    uneSeuleFois.length <= 6,
    `trop de leçons données une seule fois : ${uneSeuleFois.join(", ")}`,
  );
});

test("une leçon tombe dans sa période", () => {
  const parCode = new Map(lecons.map((l) => [l.code, l]));
  for (const j of joursDeTravail())
    for (const c of trameDuJour(j).creneaux) {
      if (!c.lecon) continue;
      assert.equal(
        parCode.get(c.lecon)!.periode,
        periodeDe(j),
        `${c.lecon} est donnée hors de sa période, le ${j}`,
      );
    }
});

test("la trame ne change pas d'un appel à l'autre", () => {
  for (const j of ["2026-09-17", "2026-11-05", "2027-03-15", "2027-06-08"]) {
    assert.deepEqual(trameDuJour(j), trameDuJour(j));
  }
});

test("le volume tient les trois heures annoncées", () => {
  for (const j of joursDeTravail()) {
    const t = trameDuJour(j);
    if (t.nature === "mercredi") {
      assert.ok(t.minutes <= 120, `mercredi trop chargé : ${j} (${t.minutes}′)`);
    } else {
      assert.ok(
        t.minutes >= 150 && t.minutes <= 200,
        `journée hors des trois heures : ${j} (${t.minutes}′)`,
      );
    }
  }
});

test("ni week-end, ni vacances, ni jour férié", () => {
  /* Un 25 décembre avec du travail écrit dessus serait une faute de goût, et
     surtout un signe que le calendrier n'est pas lu.
     Les dates sont celles de l'académie de Lille, zone B, d'après l'open data
     du ministère. Ce test a d'ailleurs attrapé mes approximations : le 15
     avril est un jour de classe en zone B, pas des vacances. */
  const chomes = [
    "2026-09-19", // un samedi
    "2026-10-20", // vacances de la Toussaint
    "2026-11-11", // Armistice
    "2026-12-25", // vacances de Noël
    "2027-02-24", // vacances d'hiver
    "2027-03-29", // lundi de Pâques — Pâques est tôt en 2027, hors vacances de printemps
    "2027-04-20", // vacances de printemps
    "2027-05-06", // Ascension
    "2027-05-07", // pont de l'Ascension
    "2027-05-17", // lundi de Pentecôte
    "2027-07-05", // après le dernier jour de classe
  ];
  for (const j of chomes) {
    assert.equal(trameDuJour(j).creneaux.length, 0, `du travail le ${j}`);
  }

  /* Et l'inverse : ces jours-là sont bien travaillés. Un calendrier trop
     large est aussi faux qu'un calendrier trop étroit. */
  for (const j of ["2027-04-15", "2027-03-08", "2027-03-30", "2027-05-03"]) {
    assert.ok(trameDuJour(j).creneaux.length > 0, `rien à faire le ${j}`);
  }
});

/**
 * Les jours fériés du calendrier civil qui tombent en semaine, calculés et
 * non recopiés : Pâques se calcule (algorithme de Meeus), et l'Ascension et
 * la Pentecôte en découlent. La première version avait recopié les fériés de
 * mémoire et oublié le lundi de Pâques.
 */
test("aucun jour férié de semaine ne porte de travail", () => {
  const paques = (an: number) => {
    const a = an % 19, b = Math.floor(an / 100), c = an % 100;
    const d = Math.floor(b / 4), e = b % 4, f = Math.floor((b + 8) / 25);
    const g = Math.floor((b - f + 1) / 3), h = (19 * a + b - d - g + 15) % 30;
    const i = Math.floor(c / 4), k = c % 4, l = (32 + 2 * e + 2 * i - h - k) % 7;
    const m = Math.floor((a + 11 * h + 22 * l) / 451);
    const mois = Math.floor((h + l - 7 * m + 114) / 31);
    const jour = ((h + l - 7 * m + 114) % 31) + 1;
    return new Date(Date.UTC(an, mois - 1, jour));
  };
  const plus = (d: Date, n: number) => new Date(d.getTime() + n * 86_400_000).toISOString().slice(0, 10);
  const p = paques(2027);
  assert.equal(plus(p, 0), "2027-03-28", "Pâques 2027");
  const feries = [
    "2026-11-01", "2026-11-11", "2026-12-25", "2027-01-01",
    plus(p, 1), plus(p, 39), plus(p, 50),
    "2027-05-01", "2027-05-08", "2027-07-14",
  ];
  for (const j of feries) {
    assert.equal(trameDuJour(j).creneaux.length, 0, `du travail un jour férié : ${j}`);
  }
});

test("le test de positionnement a son jour, et rien d'autre", () => {
  const t = trameDuJour(JOUR_DU_TEST);
  assert.equal(t.nature, "test");
  assert.ok(t.creneaux.every((c) => !c.lecon), "aucune leçon ce jour-là");
  assert.ok(JOUR_DU_TEST < PREMIER_JOUR, "le test précède le premier cours");
});

test("la semaine rend sept jours, du lundi au dimanche", () => {
  const s = trameDeLaSemaine("2026-09-17");
  assert.equal(s.length, 7);
  assert.equal(s[0].jour, lundiDe("2026-09-17"));
});

test("le bilan de l'année est cohérent avec le calendrier", () => {
  const b = bilanDeLAnnee();
  assert.equal(b.joursTravailles, joursDeTravail().length);
  assert.ok(b.joursTravailles > 150, "une année scolaire fait plus de 150 jours");
  assert.ok(b.heures > 350, "moins de 350 heures ne ferait pas une année");
  assert.equal(b.leconsDistinctes, lecons.length);
});

/**
 * Ce qu'il y a à poser, c'est les jours de cours **plus le jour du test**.
 *
 * Le parrain a ouvert la partie d'un parent et n'a rien vu au mercredi du
 * test. `joursDeTravail()` ne le contient pas — à raison, ce n'est pas un jour
 * de cours — et un bouton « écrire toute l'année » bâti dessus l'aurait sauté
 * en silence, pour la deuxième fois.
 */
test("ce qu'il y a à poser contient le jour du test", () => {
  const a = joursAvecTrame();
  assert.ok(a.includes(JOUR_DU_TEST), "le jour du test est à poser");
  assert.equal(a.length, joursDeTravail().length + 1);
  for (const j of a) {
    assert.ok(
      trameDuJour(j).creneaux.length > 0,
      `${j} est à poser mais ne propose rien`,
    );
  }
});

/**
 * Deux séances d'une même journée ne portent jamais le même titre.
 *
 * Ce n'est pas une question de présentation, même si ça se voyait : sur treize
 * journées de l'année, « Reprendre la leçon de la semaine » sortait deux fois
 * — une fois en maths, une fois en français — et un parent lisait deux lignes
 * identiques sans savoir laquelle était laquelle.
 *
 * C'est surtout une contrainte de structure. `accorderAuTon` compare les
 * séances de la base à celles de la trame **par leur titre** : deux titres
 * identiques dans une journée et il ne peut plus les distinguer, donc il en
 * considère une comme déjà présente, et le rang des deux devient le même.
 */
test("deux séances du même jour ne portent pas le même titre", () => {
  for (const j of joursAvecTrame()) {
    const titres = trameDuJour(j).creneaux.map((c) => c.titre);
    assert.equal(
      new Set(titres).size,
      titres.length,
      `${j} : ${titres.filter((t, i) => titres.indexOf(t) !== i).join(", ")}`,
    );
  }
});

/**
 * Le ton du jour agit, et ne dépasse jamais.
 *
 * « Je clique sur Normal, allégé ou repos, ça n'a pas l'air de changer le
 * programme de la journée » — c'était vrai, c'était un bouton décoratif.
 *
 * Maintenant qu'il agit, deux choses doivent tenir. « Allégée » doit vraiment
 * retirer quelque chose, sinon le bouton ment encore ; et « allégée » ne doit
 * **jamais** vider la journée, sinon elle vaut « repos ». Un enfant à qui on
 * annonce une journée allégée et qui n'y trouve rien n'entend pas « on
 * allège », il entend « on a renoncé ».
 */
test("le ton agit sur la journée, sans jamais la vider", () => {
  for (const j of joursDeTravail().map(trameDuJour)) {
    const normale = selonLeTon(j, "normale");
    assert.equal(normale.creneaux.length, j.creneaux.length, `${j.jour} : normale change quelque chose`);

    const allegee = selonLeTon(j, "allegee");
    assert.ok(
      allegee.creneaux.length < j.creneaux.length,
      `${j.jour} : allégée ne retire rien`,
    );
    assert.ok(
      allegee.creneaux.length > 0,
      `${j.jour} : allégée vide la journée, donc vaut repos`,
    );
    assert.ok(
      allegee.minutes < j.minutes && allegee.minutes > 0,
      `${j.jour} : les minutes ne suivent pas les créneaux`,
    );

    const repos = selonLeTon(j, "repos");
    assert.equal(repos.creneaux.length, 0);
    assert.equal(repos.minutes, 0);
  }
});

/* ------------------------------------------------------------------ */
/* La charge d'une journée — critique du 16 septembre 2026            */
/* ------------------------------------------------------------------ */

test("les jours de classe, il ne reste jamais plus de 90 minutes assis avant de bouger", () => {
  const trop: string[] = [];
  for (const j of joursDeTravail()) {
    const t = trameDuJour(j);
    if (t.nature !== "classe") continue;
    let assis = 0;
    for (const c of t.creneaux) {
      if (c.matiere === "maison" && !c.lecon) break;
      assis += c.minutes;
    }
    if (assis > 90) trop.push(`${j} : ${assis} min`);
  }
  assert.deepEqual(trop, []);
});

test("jamais plus de vingt premières fois dans une semaine, leçons comprises", () => {
  /* La semaine du 21 septembre 2026 en comptait trente et une sur trente et
     une : chaque étape était une façon de travailler inconnue. Les rituels
     entrent maintenant en service un par un (`disponibles` dans la trame). */
  const vus = new Set<string>();
  const parSemaine = new Map<string, number>();
  for (const j of joursDeTravail()) {
    const semaine = lundiDe(j);
    for (const c of trameDuJour(j).creneaux) {
      const id = c.lecon ? `lecon:${c.lecon}` : `rituel:${c.titre}`;
      if (vus.has(id)) continue;
      vus.add(id);
      parSemaine.set(semaine, (parSemaine.get(semaine) ?? 0) + 1);
    }
  }
  const trop = [...parSemaine].filter(([, n]) => n > 20).map(([s, n]) => `${s} : ${n}`);
  assert.deepEqual(trop, []);
});

/* ------------------------------------------------------------------ */
/* Seconde critique du 16 septembre 2026, au soir                      */
/* ------------------------------------------------------------------ */

test("à partir du 21 septembre, pas de rafale de nouveautés dans une journée", () => {
  /* Le 24 septembre posait sept étapes jamais vues sur sept, le 1er octobre
     six : la semaine allait mieux, pas la journée. Les leçons neuves ne se
     déplacent pas ; les rituels neufs attendent un jour qui a de la place. */
  const vus = new Set<string>();
  const trop: string[] = [];
  for (const j of joursAvecTrame()) {
    let neufs = 0;
    let rituelsNeufs = 0;
    for (const c of trameDuJour(j).creneaux) {
      const id = c.lecon ? `lecon:${c.lecon}` : `rituel:${c.titre}`;
      if (vus.has(id)) continue;
      vus.add(id);
      neufs++;
      if (!c.lecon) rituelsNeufs++;
    }
    if (j >= "2026-09-21" && (neufs > 3 || rituelsNeufs > 2)) trop.push(`${j} : ${neufs} dont ${rituelsNeufs} rituels`);
  }
  assert.deepEqual(trop, []);
});

test("la Conjugaison n'arrive qu'après les leçons des quatre temps", () => {
  /* Ses fiches demandent présent, imparfait, futur et passé composé dès la
     première ; la trame l'avait avancée au 29 septembre. */
  const passeCompose = joursDeTravail().find((j) =>
    trameDuJour(j).creneaux.some((c) => c.lecon === "f-p2-passe-compose"),
  )!;
  const tot = joursDeTravail().filter(
    (j) => j <= passeCompose && trameDuJour(j).creneaux.some((c) => c.titre === "Conjugaison"),
  );
  assert.deepEqual(tot, []);
});

test("une leçon qui revient commence par les exercices, et le brouillon ne se nomme que si l'on calcule", () => {
  for (const j of joursDeTravail())
    for (const c of trameDuJour(j).creneaux) {
      if (!c.lecon) continue;
      const lecon = leconParCode.get(c.lecon)!;
      if (estUneReprise(c.titre)) assert.match(c.consigne, /les exercices d’abord/, `${j} ${c.titre}`);
      assert.equal(
        c.consigne.includes("brouillon"),
        demandeDesCalculs(lecon),
        `${j} ${c.titre} : brouillon nommé à tort ou oublié`,
      );
    }
});
