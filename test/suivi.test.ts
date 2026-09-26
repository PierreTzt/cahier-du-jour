/**
 * Le suivi des consignes du soignant.
 *
 * Deux garanties : une consigne retirée quitte ce qu'on applique sans
 * disparaître de ce qui a été essayé, et la page comme les gestes sont fermés
 * à qui n'est pas parent. La seconde ne tient que par la lecture du code, donc
 * elle est vérifiée en lisant le code.
 */

import { test } from "node:test";
import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import { fileURLToPath } from "node:url";
import { join } from "node:path";
import { repartir, validerConsigne, type Consigne } from "../lib/suivi";

const RACINE = fileURLToPath(new URL("..", import.meta.url));

function consigne(id: string, retiree_le: string | null, notee_le = "2026-09-01"): Consigne {
  return {
    id,
    texte: `consigne ${id}`,
    pourquoi: "",
    origine: "soignant",
    par_adulte: null,
    par_prenom: null,
    notee_le,
    retiree_le,
  };
}

/* ------------------------------------------------------------------ */
/* Retirer n'est pas effacer                                           */
/* ------------------------------------------------------------------ */

test("une consigne retirée n'apparaît plus parmi les actives et reste parmi les retirées", () => {
  const avant = [consigne("a", null), consigne("b", null), consigne("c", null)];
  assert.deepEqual(repartir(avant).actives.map((c) => c.id), ["a", "b", "c"]);
  assert.deepEqual(repartir(avant).retirees, []);

  const apres = avant.map((c) => (c.id === "b" ? { ...c, retiree_le: "2026-10-14" } : c));
  const { actives, retirees } = repartir(apres);

  assert.deepEqual(actives.map((c) => c.id), ["a", "c"], "elle ne s'applique plus");
  assert.deepEqual(retirees.map((c) => c.id), ["b"], "on doit pouvoir retrouver ce qui a été essayé");

  /* Rien ne se perd entre les deux listes, et rien n'y figure deux fois. */
  assert.equal(actives.length + retirees.length, apres.length);
});

test("les actives gardent leur ordre, les retirées viennent de la plus récemment retirée", () => {
  const { actives, retirees } = repartir([
    consigne("a", "2026-10-02"),
    consigne("b", null),
    consigne("c", "2026-11-20"),
    consigne("d", null),
    consigne("e", "2026-10-15"),
  ]);
  assert.deepEqual(actives.map((c) => c.id), ["b", "d"]);
  assert.deepEqual(retirees.map((c) => c.id), ["c", "e", "a"]);
});

/* ------------------------------------------------------------------ */
/* Ce qu'un geste accepte                                              */
/* ------------------------------------------------------------------ */

test("une consigne vide ou faite d'espaces est refusée", () => {
  for (const vide of ["", "   ", "\n\t  "]) {
    assert.equal(
      validerConsigne({ texte: vide, pourquoi: "une raison", origine: "soignant" }),
      null,
      JSON.stringify(vide),
    );
  }
  assert.equal(validerConsigne({ pourquoi: "une raison" }), null);
  assert.equal(validerConsigne({ texte: 3 }), null);
  assert.equal(validerConsigne(null), null);
});

test("la raison est facultative, l'origine retombe sur « soignant », rien n'est tronqué", () => {
  assert.deepEqual(validerConsigne({ texte: "  Une consigne. ", pourquoi: "  ", origine: "" }), {
    texte: "Une consigne.",
    pourquoi: "",
    origine: "soignant",
  });
  assert.equal(
    validerConsigne({ texte: "Une consigne.", pourquoi: "", origine: " soignant, entretien d’octobre " })
      ?.origine,
    "soignant, entretien d’octobre",
  );

  /* La contrainte de la migration 015 est à 500 caractères. Une consigne
     coupée au milieu peut dire le contraire de ce qu'elle disait. */
  assert.equal(validerConsigne({ texte: "a".repeat(501) }), null);
  assert.ok(validerConsigne({ texte: "a".repeat(500) }));
});

/* ------------------------------------------------------------------ */
/* Réservé aux parents                                                 */
/* ------------------------------------------------------------------ */

test("la page du suivi renvoie l'enfant et montre la porte fermée au non-parent, avant de lire", () => {
  const source = readFileSync(join(RACINE, "app", "suivi", "page.tsx"), "utf8");

  const enfant = source.search(/if \(moi\.role === "enfant"\)\s*redirect\("\/journee"\)/);
  const proche = source.search(
    /if \(!estParent\(moi\)\)\s*return <ReserveAuxParents moi=\{moi\} quoi="Le suivi médical" \/>/,
  );
  const lecture = source.indexOf("consignesDe(moi.famille_id)");

  assert.ok(enfant >= 0, "l'enfant n'est plus renvoyé vers sa journée");
  assert.ok(proche >= 0, "un non-parent ne reçoit plus ReserveAuxParents");
  assert.ok(lecture >= 0, "la lecture des consignes n'est plus reconnue");
  assert.ok(
    enfant < lecture && proche < lecture,
    "les consignes sont lues avant que la porte soit vérifiée",
  );
});

test("chaque geste du suivi vérifie qu'un parent agit, avant toute chose", () => {
  const source = readFileSync(join(RACINE, "app", "gestes", "suivi.ts"), "utf8");
  const gestes = source.split(/export async function /).slice(1);
  assert.ok(gestes.length >= 2, "les gestes du suivi ne sont plus reconnus");
  for (const g of gestes) {
    assert.match(
      g,
      /^\w+\([^]*?\)[^{]*\{\s*const moi = await parentConnecte\(\);\s*if \(!moi\) return/,
      `${g.split("(")[0]} n'ouvre pas sur la vérification du parent`,
    );
  }
  assert.match(
    source,
    /async function parentConnecte\(\)[^]*?estParent\(moi\) \? moi : null/,
    "parentConnecte ne vérifie plus le rôle de parent",
  );
});
