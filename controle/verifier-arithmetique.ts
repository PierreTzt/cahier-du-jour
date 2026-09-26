/**
 * Recalcule les exercices dont l'énoncé est une opération écrite en clair
 * (« Combien font 487 + 356 ? », « Calcule 36 × 4 »…) et compare au résultat
 * attendu du manuel et du test de positionnement.
 *
 * Ne prouve rien sur les autres énoncés ; attrape ce qui est attrapable par
 * une machine. Un résultat faux dans un exercice apprend une bêtise à
 * l'enfant et fausse le relevé de ses parents : c'est la raison d'être de ce
 * contrôle.
 *
 *   npx tsx controle/verifier-arithmetique.ts
 */
import { pathToFileURL } from "node:url";
import { resolve } from "node:path";

type Item = { ou: string; code: string; enonce: string; attendu: string };

const nombre = (s: string) => Number(s.replace(/[\s  ]/g, "").replace(",", "."));
const OP = /(\d[\d\s  ]*(?:,\d+)?)\s*([+\-−×x*÷/:])\s*(\d[\d\s  ]*(?:,\d+)?)/g;

async function principal() {
  const racine = process.cwd();
  const programme = await import(pathToFileURL(resolve(racine, "lib/programme/index.ts")).href);
  const positionnement = await import(pathToFileURL(resolve(racine, "lib/positionnement.ts")).href);

  const items: Item[] = [];
  for (const l of programme.lecons)
    for (const ex of [...l.exercices, ...(l.reprise ?? [])])
      items.push({ ou: l.code, code: ex.code, enonce: ex.enonce, attendu: ex.resultat });
  for (const q of positionnement.questions)
    items.push({ ou: "positionnement", code: q.code, enonce: q.enonce, attendu: q.attendu });

  let verifies = 0;
  let suspects = 0;
  for (const it of items) {
    /* Seuls les énoncés qui sont une opération et rien d'autre. */
    if (!/^(combien font|calcule|calcul\s*:|quel est le résultat de|effectue)/i.test(it.enonce.trim()))
      continue;
    const ops = [...it.enonce.matchAll(OP)];
    if (ops.length !== 1) continue;
    const [, a, op, b] = ops[0];
    const x = nombre(a);
    const y = nombre(b);
    let r: number | null = null;
    if (op === "+") r = x + y;
    else if (op === "-" || op === "−") r = x - y;
    else if (op === "×" || op === "x" || op === "*") r = x * y;
    else if (op === "÷" || op === "/" || op === ":") r = x / y;
    if (r === null || !Number.isFinite(r)) continue;
    verifies++;
    const attendu = it.attendu.replace(/[\s  ]/g, "").replace(",", ".");
    const ok =
      attendu === String(Math.round(r * 100) / 100) ||
      /* les divisions avec reste : « 7 reste 2 » */
      (op === "÷" &&
        Number.isInteger(x) &&
        Number.isInteger(y) &&
        attendu.startsWith(String(Math.floor(x / y))));
    if (!ok) {
      suspects++;
      console.log(
        `SUSPECT ${it.ou} / ${it.code}\n   énoncé : ${it.enonce}\n   attendu : ${it.attendu}   recalculé : ${r}`,
      );
    }
  }
  console.log(`\n${verifies} opérations recalculées, ${suspects} suspecte(s).`);
  if (suspects > 0) process.exit(1);
}

principal();
