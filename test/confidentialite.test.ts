/**
 * Rien de ce qui nomme la famille ne part dans le JavaScript du navigateur.
 *
 * Le site est public, et sa page d'accueil ne doit rien dire de qui l'utilise.
 * Le HTML le respectait ; le JavaScript, non. Le mode d'emploi des adultes est
 * un composant client rendu par la mise en page racine, et il importait son
 * texte : le prénom de l'enfant et son lieu de soin partaient dans un fichier chargé
 * par la page d'accueil, avant toute connexion (constaté en production le
 * 16 septembre 2026).
 *
 * La règle tenue ici : un composant client ne contient ni le prénom de
 * l'enfant, ni « soignant », ni une importation de valeur depuis un module de
 * texte qui les contient. Ces textes arrivent en props, construits par le
 * serveur pour la personne connectée. Les commentaires ne comptent pas : ils
 * ne partent pas dans le JavaScript compilé.
 */

import { test } from "node:test";
import assert from "node:assert/strict";
import { readdirSync, readFileSync, statSync } from "node:fs";
import { fileURLToPath } from "node:url";
import { join, relative } from "node:path";

const RACINE = fileURLToPath(new URL("..", import.meta.url));

function fichiers(dossier: string): string[] {
  return readdirSync(dossier).flatMap((nom) => {
    const chemin = join(dossier, nom);
    if (statSync(chemin).isDirectory()) return fichiers(chemin);
    return /\.(tsx?|jsx?)$/.test(nom) ? [chemin] : [];
  });
}

const sansCommentaires = (s: string) =>
  s.replace(/\/\*[\s\S]*?\*\//g, "").replace(/(^|[^:"'`])\/\/.*$/gm, "$1");

const clients = [...fichiers(join(RACINE, "components")), ...fichiers(join(RACINE, "app"))]
  .map((chemin) => ({ chemin, source: readFileSync(chemin, "utf8") }))
  .filter(({ source }) => /^\s*["']use client["']/.test(source));

/** Modules de texte qui nomment la famille : un client n'en importe que des types. */
const MODULES_NOMMANTS = ["@/lib/mode-emploi"];

test("aucun composant client n'écrit le prénom de l'enfant ni « soignant »", () => {
  const fautes = clients
    .filter(({ source }) => /[Ss]oignant/.test(sansCommentaires(source)))
    .map(({ chemin }) => relative(RACINE, chemin));
  assert.deepEqual(fautes, []);
});

test("aucun composant client n'importe de valeur d'un module qui nomme la famille", () => {
  const fautes: string[] = [];
  for (const { chemin, source } of clients)
    for (const nomDeModule of MODULES_NOMMANTS) {
      const importations =
        source.match(new RegExp(`import[^;]*from\\s+["']${nomDeModule}["']`, "g")) ?? [];
      if (importations.some((i) => !/^import\s+type\b/.test(i)))
        fautes.push(`${relative(RACINE, chemin)} → ${nomDeModule}`);
    }
  assert.deepEqual(fautes, []);
});

test("le contrôle voit bien une fuite", () => {
  assert.ok(/[Ss]oignant/.test(sansCommentaires('const t = "Le soignant a écrit";')));
  assert.ok(!/[Ss]oignant/.test(sansCommentaires("/* soignant */ const t = 1;")));
  assert.ok(clients.length > 10);
  /* Le composant du mode d'emploi importe bien ce module — en type seulement.
     Si la recherche ne le trouvait pas, le test d'importation ne verrait rien. */
  const mode = clients.find(({ chemin }) => chemin.endsWith("ModeDEmploi.tsx"));
  assert.ok(mode && /from\s+["']@\/lib\/mode-emploi["']/.test(mode.source));
});
