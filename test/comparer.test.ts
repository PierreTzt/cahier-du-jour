/**
 * La comparaison d'une réponse à l'attendu.
 *
 * Une seule fonction pour le test et pour les exercices, et deux exigences
 * contraires qu'elle doit tenir en même temps : tolérer la forme — un enfant
 * de neuf ans ne tape ni les espaces des grands nombres, ni les articles, ni
 * toujours l'unité de la même façon, et il écrit « six » — et ne jamais
 * tolérer le fond, parce qu'une réponse fausse déclarée juste cache à ses
 * parents un trou réel.
 */

import { test } from "node:test";
import assert from "node:assert/strict";
import { commeAttendu, exigenceDe } from "../lib/comparer";

test("la forme ne compte pas : espaces, casse, accents, ponctuation, ligatures", () => {
  assert.ok(commeAttendu("340 206", "340206"));
  assert.ok(commeAttendu("340206", "340 206"));
  assert.ok(commeAttendu("  18  ", "18"));
  assert.ok(commeAttendu("Des Chevaux", "des chevaux"));
  assert.ok(commeAttendu("des gateaux", "des gâteaux"));
  assert.ok(commeAttendu("jai mangé", "j’ai mangé"));
  assert.ok(commeAttendu("j'ai mangé.", "j’ai mangé"));
  assert.ok(commeAttendu("Il ne vient pas", "Il ne vient pas."));
  assert.ok(commeAttendu("ma soeur", "ma sœur"));
});

test("les durées : 3 heures 45, 3 h 45 min et 3h45 sont la même réponse", () => {
  assert.ok(commeAttendu("2 h 45", "2h45"));
  assert.ok(commeAttendu("3h45min", "3h45"));
  assert.ok(commeAttendu("3 h 45 mn", "3h45"));
  assert.ok(commeAttendu("3 heures 45", "3h45"));
  assert.ok(commeAttendu("3 heures 45 minutes", "3h45"));
  assert.ok(commeAttendu("2 heures", "2h"));
  /* Mais 225 minutes n'est pas « 3h45 » : c'est la même durée écrite dans
     une autre unité, et la question demandait l'heure. */
  assert.equal(commeAttendu("225", "3h45"), false);
  assert.equal(commeAttendu("3h50", "3h45"), false);
});

test("un nombre suivi de son unité vaut le nombre", () => {
  assert.ok(commeAttendu("215 min", "215"));
  assert.ok(commeAttendu("215min", "215"));
  assert.ok(commeAttendu("6 000 mètres", "6000"));
  assert.ok(commeAttendu("8 €", "8"));
  assert.ok(commeAttendu("8 euros", "8"));
  assert.ok(commeAttendu("100 cm", "100"));
  assert.ok(commeAttendu("15 cm²", "15"));
  /* Les unités longues aussi : le relecteur du test les avait vues refusées. */
  assert.ok(commeAttendu("100 centimètres", "100"));
  assert.ok(commeAttendu("2000 kilogrammes", "2000"));
  assert.ok(commeAttendu("10 millimètres", "10"));
  /* Deux nombres, ce n'est plus un nombre et son unité. */
  assert.equal(commeAttendu("2 kg 500", "2500"), false);
});

test("un nombre écrit en lettres vaut le nombre", () => {
  assert.ok(commeAttendu("six", "6"));
  assert.ok(commeAttendu("un", "1"));
  assert.ok(commeAttendu("Zéro", "0"));
  assert.ok(commeAttendu("dix-sept", "17"));
  assert.ok(commeAttendu("vingt-quatre", "24"));
  assert.ok(commeAttendu("vingt et un", "21"));
  assert.ok(commeAttendu("soixante-dix", "70"));
  assert.ok(commeAttendu("soixante et onze", "71"));
  assert.ok(commeAttendu("quatre-vingts", "80"));
  assert.ok(commeAttendu("quatre-vingt-dix-neuf", "99"));
  assert.ok(commeAttendu("cent", "100"));
  assert.ok(commeAttendu("deux cents", "200"));
  assert.ok(commeAttendu("deux mille six", "2006"));
  /* En lettres et suivi de ce que l'énoncé demandait de compter : c'est ce
     qu'un enfant de neuf ans écrit quand on lui demande combien il y a de
     continents. Le refuser ferait lire « à travailler » sur une notion sue. */
  assert.ok(commeAttendu("six continents", "6"));
  assert.ok(commeAttendu("trois ans", "3"));
  assert.ok(commeAttendu("six faces", "6"));
  assert.ok(commeAttendu("vingt-quatre heures", "24"));
  assert.ok(commeAttendu("6 continents", "6"));
  /* Un nombre faux en lettres reste faux, avec ou sans unité. */
  assert.equal(commeAttendu("sept", "6"), false);
  assert.equal(commeAttendu("sept continents", "6"), false);
  assert.equal(commeAttendu("quatre vingt", "24"), false);
  /* Et deux mots dont aucun n'est un nombre ne deviennent pas un nombre. */
  assert.equal(commeAttendu("beaucoup de continents", "6"), false);
});

test("jamais de tolérance sur un nombre", () => {
  /* « 4 » se termine comme « 34 » : déclarer juste cacherait un trou réel. */
  assert.equal(commeAttendu("4", "34"), false);
  assert.equal(commeAttendu("3", "13"), false);
  assert.equal(commeAttendu("206", "340206"), false);
  assert.equal(commeAttendu("1420", "1421"), false);
  assert.equal(commeAttendu("", "18"), false);
  assert.equal(commeAttendu("   ", "18"), false);
  assert.equal(commeAttendu("dix-huit", "17"), false);
});

test("sur du texte, on peut omettre un pronom sujet et les articles — rien d'autre", () => {
  assert.ok(commeAttendu("chevaux", "des chevaux"));
  assert.ok(commeAttendu("des chevaux", "chevaux"));
  assert.ok(commeAttendu("sommes", "nous sommes"));
  assert.ok(commeAttendu("ai mangé", "j’ai mangé"));
  assert.ok(commeAttendu("centre", "le centre"));
  assert.ok(commeAttendu("le triangle", "un triangle"));
  assert.ok(commeAttendu("l'équerre", "l’équerre"));
  assert.ok(commeAttendu("équerre", "l’équerre"));
  assert.ok(commeAttendu("enfants", "les enfants"));
  /* Jamais au milieu d'un mot, jamais un mot qui compte. */
  assert.equal(commeAttendu("angle", "un triangle"), false);
  assert.equal(commeAttendu("it", "petit"), false);
  assert.equal(commeAttendu("gateau", "des gâteaux"), false);
  assert.equal(commeAttendu("le milieu", "le centre"), false);
  assert.equal(commeAttendu("le carré", "un triangle"), false);
  assert.equal(commeAttendu("chat", "un vieux chat"), false);
  assert.equal(commeAttendu("mangé", "j’ai mangé"), false);
  assert.equal(commeAttendu("très petit", "petit"), false);
  /* Un mot qui n'est qu'un article ne s'efface pas : « le » n'est pas « le centre ». */
  assert.equal(commeAttendu("le", "le centre"), false);
  /* Un pronom seul est une réponse entière. */
  assert.ok(commeAttendu("elle", "elle"));
  assert.equal(commeAttendu("il", "elle"), false);
});

/* ------------------------------------------------------------------ */
/* Critique du 16 septembre 2026 : trois tolérances dans le mauvais sens */
/* ------------------------------------------------------------------ */

test("la virgule décimale compte : « 43 » n'est pas « 4,3 »", () => {
  assert.equal(commeAttendu("43", "4,3"), false);
  assert.equal(commeAttendu("25", "2,5"), false);
  assert.ok(commeAttendu("4,3", "4,3"));
  assert.ok(commeAttendu("4.3", "4,3"));
  assert.ok(commeAttendu("4,30", "4,3"));
  assert.ok(commeAttendu("2,5 kg", "2,5"));
  assert.ok(commeAttendu("1 250,75", "1250,75"));
  assert.equal(commeAttendu("4,3", "43"), false);
});

test("une question à choix se compare au choix exact : « a » n'est pas « à »", () => {
  assert.equal(commeAttendu("a", "à", { choix: true }), false);
  assert.equal(commeAttendu("nous lancons", "nous lançons", { choix: true }), false);
  assert.ok(commeAttendu("à", "à", { choix: true }));
  assert.ok(commeAttendu("j'achète", "j’achète", { choix: true }));
});

test("« Écris en chiffres » : recopier les lettres de l'énoncé ne compte pas", () => {
  assert.equal(commeAttendu("deux mille six", "2006", { chiffres: true }), false);
  assert.ok(commeAttendu("2 006", "2006", { chiffres: true }));
  /* Sans l'exigence, un petit nombre en lettres reste accepté. */
  assert.ok(commeAttendu("six", "6"));
  /* L'exigence se lit sur l'énoncé, quelle que soit la tournure. */
  const lue = (enonce: string) => exigenceDe({ type: "saisie", enonce }).chiffres;
  assert.ok(lue("Écris en chiffres : deux mille six."));
  assert.ok(lue("Écris avec des chiffres le nombre six mille deux cent cinquante-neuf."));
  assert.ok(lue("Comment s’écrit « cinq mille trois » avec des chiffres ?"));
  assert.equal(lue("Quel est le plus grand nombre de quatre chiffres ?"), false);
});

test("quand l'accent porte la notion, il compte", () => {
  assert.equal(commeAttendu("j'ai mange", "j’ai mangé", { accents: true }), false);
  assert.ok(commeAttendu("J'ai mangé.", "j’ai mangé", { accents: true }));
  assert.ok(commeAttendu("j'ai mange", "j’ai mangé"));
});

/* ------------------------------------------------------------------ */
/* Seconde critique du 16 septembre 2026, au soir                      */
/* ------------------------------------------------------------------ */

test("un nombre en lettres n'est jamais amputé de son dernier mot", () => {
  /* « soixante-dix » valait 60, « trois cents » valait 3 : le dernier mot
     était retiré comme s'il était l'unité comptée. */
  assert.equal(commeAttendu("soixante-dix", "60"), false);
  assert.equal(commeAttendu("vingt-quatre", "20"), false);
  assert.equal(commeAttendu("trois cents", "3"), false);
  assert.equal(commeAttendu("quatre-vingts", "4"), false);
  assert.equal(commeAttendu("soixante et un", "60"), false);
  assert.ok(commeAttendu("soixante", "60"));
  assert.ok(commeAttendu("six continents", "6"));
});

test("l'article peut s'omettre, pas se tromper de nombre ni de genre", () => {
  assert.equal(commeAttendu("un chevaux", "des chevaux"), false);
  assert.equal(commeAttendu("les cheval", "le cheval"), false);
  assert.equal(commeAttendu("un lectrice attentive", "une lectrice attentive"), false);
  assert.ok(commeAttendu("chevaux", "des chevaux"));
  assert.ok(commeAttendu("les chevaux", "des chevaux"));
  assert.ok(commeAttendu("le triangle", "un triangle"));
  assert.ok(commeAttendu("l'équerre", "une équerre"));
});

test("une liste se tape avec ou sans espaces, et se compare élément par élément", () => {
  assert.ok(commeAttendu("9,18,27,36", "9, 18, 27, 36"));
  assert.ok(commeAttendu("9, 18, 27, 36", "9, 18, 27, 36"));
  assert.ok(commeAttendu("9 18 27 36", "9, 18, 27, 36"));
  assert.equal(commeAttendu("91, 82, 73, 6", "9, 18, 27, 36"), false);
  assert.equal(commeAttendu("9, 18, 27", "9, 18, 27, 36"), false);
  /* Et une virgule seule reste décimale. */
  assert.equal(commeAttendu("43", "4,3"), false);
});

test("une durée se dit aussi « 3 heures et 45 minutes », ou s'écrit « 3:45 »", () => {
  assert.ok(commeAttendu("3 heures et 45 minutes", "3h45"));
  assert.ok(commeAttendu("3:45", "3h45"));
  assert.ok(commeAttendu("3 h et 45", "3h45"));
  assert.equal(commeAttendu("3:40", "3h45"), false);
});

test("le pronom sujet peut s'omettre, pas changer", () => {
  assert.equal(commeAttendu("tu lui parle", "je lui parle"), false);
  assert.equal(commeAttendu("elles jouent", "ils jouent"), false);
  assert.ok(commeAttendu("lui parle", "je lui parle"));
  assert.ok(commeAttendu("sommes", "nous sommes"));
  assert.ok(commeAttendu("Je lui parle.", "je lui parle"));
});
