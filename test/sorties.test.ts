/**
 * Les sorties — pièces d'instruction pour le contrôle.
 *
 * Ce qui est vérifié ici tient sans base : ce qu'un geste accepte d'écrire, ce
 * que la couverture des matières rend au relevé, et le fait que les écrans de
 * l'enfant n'atteignent ni les sorties ni les consignes du soignant.
 */

import { test } from "node:test";
import assert from "node:assert/strict";
import { existsSync, readdirSync, readFileSync, statSync } from "node:fs";
import { fileURLToPath } from "node:url";
import { dirname, join, resolve } from "node:path";
import {
  dateValide,
  enToutesLettres,
  matieresCouvertes,
  matieresDe,
  validerSortie,
} from "../lib/sorties";

const RACINE = fileURLToPath(new URL("..", import.meta.url));

const valide = {
  titre: "Une sortie",
  lieu: "",
  quoi: "Ce qui s'y est passé.",
  jour: "2026-09-12",
  matieres: ["sciences"],
};

/* ------------------------------------------------------------------ */
/* Les matières                                                        */
/* ------------------------------------------------------------------ */

test("une sortie sans matière retombe sur « à la maison »", () => {
  assert.deepEqual(validerSortie({ ...valide, matieres: [] })?.matieres, ["maison"]);
  assert.deepEqual(validerSortie({ ...valide, matieres: undefined })?.matieres, ["maison"]);

  /* Des identifiants que le code ne connaît pas ne comptent pas comme des
     matières — `constructor` compris, que `in` aurait laissé passer. */
  assert.deepEqual(matieresDe(["histgeo", "constructor", 42]), ["maison"]);

  /* Et à la lecture : une ligne restée à `'{}'` en base compte aussi. */
  assert.deepEqual(
    matieresCouvertes([{ matieres: [] }]).map((m) => m.nom),
    ["À la maison"],
  );
});

test("les matières couvertes sont dédoublonnées, dans l'ordre d'apparition", () => {
  const couvertes = matieresCouvertes([
    { matieres: ["maths", "maison"] },
    { matieres: ["sciences", "maths"] },
    { matieres: ["maison", "histoire", "histoire"] },
  ]).map((m) => m.id);

  assert.deepEqual(
    couvertes,
    ["maths", "maison", "sciences", "histoire"],
    "une matière listée deux fois donnerait au contrôle une impression fausse",
  );
  assert.deepEqual(matieresCouvertes([]), []);
  assert.deepEqual(matieresDe(["maths", "maths", "francais"]), ["maths", "francais"]);
});

/* ------------------------------------------------------------------ */
/* Ce qu'un geste accepte                                              */
/* ------------------------------------------------------------------ */

test("un titre ou un « ce qui s'est passé » vide ou fait d'espaces est refusé", () => {
  for (const vide of ["", "   ", "\n\t  "]) {
    assert.equal(validerSortie({ ...valide, titre: vide }), null, `titre ${JSON.stringify(vide)}`);
    assert.equal(validerSortie({ ...valide, quoi: vide }), null, `quoi ${JSON.stringify(vide)}`);
  }
  /* Rien n'est présumé de ce qui arrive du navigateur. */
  assert.equal(validerSortie({ ...valide, titre: 12 }), null);
  assert.equal(validerSortie(null), null);
  assert.equal(validerSortie("une sortie"), null);

  /* Le lieu, lui, peut rester vide. */
  assert.equal(validerSortie({ ...valide, lieu: "   " })?.lieu, "");
});

test("les textes gardés sont nettoyés de leurs bords, pas tronqués", () => {
  const s = validerSortie({ ...valide, titre: "  Le marché \n", lieu: " Nantes " });
  assert.equal(s?.titre, "Le marché");
  assert.equal(s?.lieu, "Nantes");

  /* Trop long : refusé, jamais coupé en silence. La contrainte de la
     migration 015 est à 200 caractères pour le titre. */
  assert.equal(validerSortie({ ...valide, titre: "a".repeat(201) }), null);
  assert.ok(validerSortie({ ...valide, titre: "a".repeat(200) }));
});

test("la date est une vraie date, pas un 31 février", () => {
  for (const faux of ["2026-02-31", "2026-02-29", "2026-13-01", "12 septembre", "2026-9-1", "", undefined]) {
    assert.equal(dateValide(faux), false, String(faux));
    assert.equal(validerSortie({ ...valide, jour: faux }), null, String(faux));
  }
  assert.equal(dateValide("2028-02-29"), true, "une année bissextile a son 29 février");
  assert.equal(validerSortie(valide)?.jour, "2026-09-12");
});

test("la date s'écrit en toutes lettres, avec son année", () => {
  assert.equal(enToutesLettres("2026-10-01"), "1er octobre 2026");
  assert.equal(enToutesLettres("2026-10-01", { avecLeJour: true }), "jeudi 1er octobre 2026");
  assert.equal(enToutesLettres("2026-09-12", { avecLeJour: true }), "samedi 12 septembre 2026");
});

/* ------------------------------------------------------------------ */
/* L'enfant ne les voit pas                                            */
/* ------------------------------------------------------------------ */

/** Les fichiers du dépôt qu'un fichier importe, résolus sur le disque. */
function dependances(chemin: string, source: string): string[] {
  const trouvees: string[] = [];
  for (const m of source.matchAll(/from\s*["']([^"']+)["']/g)) {
    const spec = m[1];
    let base: string;
    if (spec.startsWith("@/")) base = join(RACINE, spec.slice(2));
    else if (spec.startsWith(".")) base = resolve(dirname(chemin), spec);
    else continue;
    for (const candidat of [base, `${base}.ts`, `${base}.tsx`, join(base, "index.ts")]) {
      if (existsSync(candidat) && statSync(candidat).isFile()) {
        trouvees.push(candidat);
        break;
      }
    }
  }
  return trouvees;
}

/**
 * Tout ce qu'une page atteint par ses imports.
 *
 * Le suivi s'arrête aux fichiers `"use server"`, comme dans `portes.test.ts` :
 * un écran qui importe une action n'en reçoit qu'un appel distant, jamais le
 * code ni les lectures — et les gestes vérifient eux-mêmes qui les appelle.
 */
function atteints(depart: string): string[] {
  const vus = new Set<string>();
  const pile = [depart];
  while (pile.length > 0) {
    const chemin = pile.pop()!;
    if (vus.has(chemin)) continue;
    vus.add(chemin);
    const source = readFileSync(chemin, "utf8");
    if (chemin !== depart && /^\s*["']use server["']/.test(source)) continue;
    pile.push(...dependances(chemin, source));
  }
  return [...vus];
}

function pages(dossier: string): string[] {
  const trouvees: string[] = [];
  for (const nom of readdirSync(dossier)) {
    const chemin = join(dossier, nom);
    if (statSync(chemin).isDirectory()) trouvees.push(...pages(chemin));
    else if (nom === "page.tsx") trouvees.push(chemin);
  }
  return trouvees;
}

test("aucune page que l’enfant peut ouvrir n'atteint les sorties ni les consignes du soignant", () => {
  /* Une page qui ne renvoie pas l'enfant vers sa journée est une page qu'il
     peut ouvrir : les siennes, l'accueil, l'entrée — et toute page d'adulte
     qui aurait oublié la porte. */
  /* La porte, c'est de renvoyer **l'enfant** : `/etape` renvoie aussi vers sa
     journée un jour de repos, et reste pourtant une page à lui. */
  const siennes = pages(join(RACINE, "app")).filter(
    (p) => !readFileSync(p, "utf8").includes(`if (moi.role === "enfant") redirect("/journee")`),
  );
  const noms = siennes.map((p) => p.slice(RACINE.length).replace(/\\/g, "/"));

  /* Un test qui ne regarderait aucune page passerait sur du vide. */
  for (const attendue of ["journee", "etape", "questions", "ressenti"]) {
    assert.ok(
      noms.includes(`app/${attendue}/page.tsx`),
      `la page « ${attendue} » n'est plus reconnue comme une page de l’enfant`,
    );
  }

  const interdits = [join(RACINE, "lib", "sorties.ts"), join(RACINE, "lib", "suivi.ts")];
  for (const page of siennes) {
    const fuites = atteints(page).filter((f) => interdits.includes(f));
    assert.deepEqual(
      fuites.map((f) => f.slice(RACINE.length)),
      [],
      `${page.slice(RACINE.length)} atteint ce que l’enfant ne doit pas lire`,
    );
  }
});

test("le suivi des imports voit bien les sorties depuis le pilotage", () => {
  assert.ok(
    atteints(join(RACINE, "app", "pilotage", "page.tsx")).includes(
      join(RACINE, "lib", "sorties.ts"),
    ),
    "si le pilotage n'atteint plus lib/sorties.ts, le test précédent ne vérifie plus rien",
  );
});

test("chaque geste des sorties vérifie qu'un adulte agit, avant toute chose", () => {
  const source = readFileSync(join(RACINE, "app", "gestes", "sorties.ts"), "utf8");
  const gestes = source.split(/export async function /).slice(1);
  assert.ok(gestes.length >= 2, "les gestes des sorties ne sont plus reconnus");
  for (const g of gestes) {
    assert.match(
      g,
      /^\w+\([^]*?\)[^{]*\{\s*const moi = await adulteConnecte\(\);\s*if \(!moi\) return/,
      `${g.split("(")[0]} n'ouvre pas sur la vérification de l'adulte`,
    );
  }
  assert.match(
    source,
    /async function adulteConnecte\(\)[^]*?estParent\(moi\) \|\| estProche\(moi\)/,
    "adulteConnecte ne nomme plus les rôles adultes",
  );
});
