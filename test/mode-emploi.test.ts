/**
 * Le mode d'emploi des adultes.
 *
 * Ce qu'une régression casserait en silence : un écran ajouté au bandeau sans
 * sa page d'explication — et on revient à dix portes dont personne ne sait à
 * quoi elles servent — ou, pire, une page qui explique au parrain le journal
 * qu'il ne peut pas ouvrir, et lui raconte ce que l'enfant dépose le soir.
 *
 * La liste des portes n'est pas recopiée ici : elle est lue dans l'en-tête,
 * comme le fait `portes.test.ts`.
 */

import { test } from "node:test";
import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import { fileURLToPath } from "node:url";
import { join } from "node:path";
import { aOuvrirDEmblee, ecransDuModeDEmploi, RYTHMES } from "../lib/mode-emploi";

const RACINE = fileURLToPath(new URL("..", import.meta.url));
const entete = readFileSync(join(RACINE, "components", "Entete.tsx"), "utf8");

/** Les portes du bandeau adulte, dans l'ordre, et celles réservées aux parents. */
function portesDuBandeau() {
  const toutes = [...entete.matchAll(/(\{parent && )?<Link href="(\/[a-z-]+)"/g)]
    .map((m) => ({ chemin: m[2], parents: Boolean(m[1]) }))
    /* La seule porte de l'enfant. */
    .filter((p) => p.chemin !== "/journee");
  return {
    parent: toutes.map((p) => p.chemin),
    proche: toutes.filter((p) => !p.parents).map((p) => p.chemin),
  };
}

test("chaque porte du bandeau a sa page, dans le même ordre, et rien de plus", () => {
  const portes = portesDuBandeau();
  assert.ok(portes.parent.length >= 8, `le bandeau n'a plus que ${portes.parent.join(", ")}`);

  assert.deepEqual(ecransDuModeDEmploi("parent").map((e) => e.chemin), portes.parent);
  assert.deepEqual(ecransDuModeDEmploi("proche").map((e) => e.chemin), portes.proche);
});

test("le parrain n'a pas de page sur ce qu'il ne peut pas ouvrir, ni sur ce que l’enfant dépose le soir", () => {
  const proche = ecransDuModeDEmploi("proche");
  for (const ferme of ["/journal", "/releve", "/suivi"]) {
    assert.ok(!proche.some((e) => e.chemin === ferme), `le parrain a une page sur ${ferme}`);
  }
  for (const e of proche) {
    const texte = [e.quand, e.accroche, ...e.points, e.aRetenir ?? ""].join(" ");
    assert.doesNotMatch(texte, /ce qu’il a déposé|dépose le soir/, `« ${e.nom} » parle du soir au parrain`);
  }
});

test("une page par écran reste courte, et le nom est celui du bandeau", () => {
  for (const lecteur of ["parent", "proche"] as const) {
    for (const e of ecransDuModeDEmploi(lecteur)) {
      assert.ok(e.accroche.trim() && e.quand.trim(), `« ${e.nom} » n'a pas d'accroche`);
      assert.ok(e.points.length >= 1 && e.points.length <= 4, `« ${e.nom} » a ${e.points.length} points`);
      assert.ok(RYTHMES.some((r) => r.cle === e.rythme));
      assert.ok(
        entete.includes(`<Link href="${e.chemin}" className={lien}>${e.nom}</Link>`),
        `le bandeau n'appelle pas ${e.chemin} « ${e.nom} »`,
      );
    }
  }
});

test("un seul écran sert tous les jours : La journée", () => {
  for (const lecteur of ["parent", "proche"] as const) {
    const quotidiens = ecransDuModeDEmploi(lecteur).filter((e) => e.rythme === "tous-les-jours");
    assert.deepEqual(quotidiens.map((e) => e.chemin), ["/pilotage"]);
  }
});

test("il s'ouvre d'office tant que la case n'est pas cochée, une fois par jour", () => {
  const jour = "2026-09-16";
  assert.equal(aOuvrirDEmblee({ compris: false, fermeLe: null }, jour), true);
  assert.equal(aOuvrirDEmblee({ compris: false, fermeLe: "2026-09-15" }, jour), true);
  assert.equal(aOuvrirDEmblee({ compris: false, fermeLe: jour }, jour), false);
  assert.equal(aOuvrirDEmblee({ compris: true, fermeLe: null }, jour), false);
  assert.equal(aOuvrirDEmblee({ compris: true, fermeLe: "2026-09-15" }, jour), false);
});

test("une page rangée « sur ordinateur » dans le menu du téléphone le dit en tête, et elle seule", () => {
  /* Rangée, jamais bloquée (le parrain, 21 septembre 2026) : le menu du
     téléphone la met à part, la page le dit en une ligne. Les deux viennent
     de deux fichiers — ce test les tient ensemble. */
  for (const e of ecransDuModeDEmploi("parent")) {
    const page = readFileSync(join(RACINE, "app", e.chemin.slice(1), "page.tsx"), "utf8");
    if (e.ordinateur) {
      assert.match(page, /<SurOrdinateur( imprimer)? \/>/, `${e.chemin} est rangé à part sans le dire`);
    } else {
      assert.doesNotMatch(page, /<SurOrdinateur/, `${e.chemin} se dit « pour ordinateur » sans être rangé à part`);
    }
  }
  assert.ok(!ecransDuModeDEmploi("parent").find((e) => e.chemin === "/pilotage")?.ordinateur);
});

test("au téléphone, le bandeau garde la cloche et donne les autres portes au menu", () => {
  assert.match(entete, /<MenuTelephone\s+portes=\{ecransDuModeDEmploi\(/);
  /* Le mode d'emploi reste dans le bandeau toujours affiché : rangé dans un
     menu fermé, sa fenêtre ne pourrait plus s'ouvrir d'elle-même. */
  assert.match(entete, /<ModeDEmploi[\s\S]*?classeDuLien=\{`\$\{lien\} hidden /);
});

test("chaque geste du mode d'emploi vérifie qu'un adulte agit, avant d'écrire", () => {
  const source = readFileSync(join(RACINE, "app", "gestes", "mode-emploi.ts"), "utf8");
  const gestes = [...source.matchAll(/export async function (\w+)/g)];
  assert.ok(gestes.length >= 2);

  for (const [i, g] of gestes.entries()) {
    const corps = source.slice(g.index, gestes[i + 1]?.index ?? source.length);
    const porte = corps.search(/const moi = await adulteConnecte\(\);\s*if \(!moi\) return;/);
    const ecriture = corps.indexOf("await executer(");
    assert.ok(porte >= 0, `${g[1]} ne vérifie plus qui agit`);
    assert.ok(ecriture > porte, `${g[1]} écrit avant de vérifier qui agit`);
  }
  assert.match(source, /return moi && !estEnfant\(moi\) \? moi : null;/);
});
