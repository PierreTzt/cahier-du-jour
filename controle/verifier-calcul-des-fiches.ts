/**
 * Recalcule les corrigés des fiches qui sont un calcul en clair.
 *
 * Même raison que `verifier-arithmetique.ts` pour le manuel, et un cran plus
 * grave : le corrigé d'une fiche n'est pas montré à l'enfant, il est **lu à
 * voix haute par l'adulte qui corrige avec lui**. Un « 7 × 8 → 54 » dans une
 * série de calcul mental ne produit pas une erreur d'affichage : il apprend
 * une bêtise à l'enfant et, pire, il la lui fait corriger.
 *
 * Sept formes sont reconnues, parce que le calcul mental se dicte autrement
 * qu'il ne s'écrit — « 7 fois combien font 56 ? » est la forme qui travaille
 * la division sans la nommer, et c'est exactement là qu'une coquille passe
 * inaperçue.
 *
 * Ne prouve rien sur les corrigés qui sont des phrases : la réponse d'une
 * question de lecture ne se recalcule pas. Attrape ce qui est attrapable par
 * une machine, et dit combien il en a attrapé — un contrôle qui ne dit pas sa
 * couverture laisse croire qu'il couvre tout.
 *
 *   npx tsx controle/verifier-calcul-des-fiches.ts
 */
import { pathToFileURL } from "node:url";
import { resolve } from "node:path";

type Fiche = {
  code: string;
  rituel: string;
  titre: string;
  materiel: string[];
  corrige?: string[];
};

/* Les espaces des nombres français : ordinaire, insécable, insécable fine. */
const nombre = (s: string) => Number(s.replace(/[\s  ]/g, "").replace(",", "."));
const N = "(\\d[\\d\\s  ]*(?:,\\d+)?)";

/**
 * Les formes reconnues. Chacune doit décrire **toute** l'entrée : une entrée
 * qui contient autre chose qu'un calcul n'est pas jugée, parce qu'on ne sait
 * pas ce que « autre chose » demandait.
 */
const FORMES: { quoi: RegExp; calcul: (m: RegExpMatchArray) => number | null }[] = [
  {
    quoi: new RegExp(`^\\s*${N}\\s*([+\\-−×x*÷/:])\\s*${N}\\s*=?\\s*$`),
    calcul: (m) => {
      const x = nombre(m[1]);
      const y = nombre(m[3]);
      const op = m[2];
      if (op === "+") return x + y;
      if (op === "-" || op === "−") return x - y;
      if (op === "×" || op === "x" || op === "*") return x * y;
      if ((op === "÷" || op === "/" || op === ":") && y !== 0) return x / y;
      return null;
    },
  },
  /* « 7 fois combien font 56 ? » — la division dite à l'endroit de la table. */
  {
    quoi: new RegExp(`^\\s*${N}\\s+fois\\s+combien\\s+font\\s+${N}\\s*\\??\\s*$`, "i"),
    calcul: (m) => (nombre(m[1]) === 0 ? null : nombre(m[2]) / nombre(m[1])),
  },
  /* « combien de fois 4 pour faire 36 ? » */
  {
    quoi: new RegExp(`^\\s*combien\\s+de\\s+fois\\s+${N}\\s+pour\\s+faire\\s+${N}\\s*\\??\\s*$`, "i"),
    calcul: (m) => (nombre(m[1]) === 0 ? null : nombre(m[2]) / nombre(m[1])),
  },
  /* « combien manque-t-il à 7 pour aller à 10 ? » */
  {
    quoi: new RegExp(
      `^\\s*combien\\s+manque-t-il\\s+à\\s+${N}\\s+pour\\s+aller\\s+à\\s+${N}\\s*\\??\\s*$`,
      "i",
    ),
    calcul: (m) => nombre(m[2]) - nombre(m[1]),
  },
  { quoi: new RegExp(`^\\s*le\\s+double\\s+de\\s+${N}\\s*$`, "i"), calcul: (m) => nombre(m[1]) * 2 },
  {
    quoi: new RegExp(`^\\s*la\\s+moitié\\s+de\\s+${N}\\s*$`, "i"),
    calcul: (m) => nombre(m[1]) / 2,
  },
  { quoi: new RegExp(`^\\s*le\\s+quart\\s+de\\s+${N}\\s*$`, "i"), calcul: (m) => nombre(m[1]) / 4 },
  { quoi: new RegExp(`^\\s*le\\s+tiers\\s+de\\s+${N}\\s*$`, "i"), calcul: (m) => nombre(m[1]) / 3 },
];

/**
 * Le nombre que le corrigé donne pour réponse.
 *
 * Trois écritures coexistent et il faut les distinguer, sans quoi le contrôle
 * se trompe de nombre et crie au loup : « 56 », « 7 × 8 = 56 » — où le premier
 * nombre est un opérande — et « 12, soit 6 + 6 » — où le dernier ne l'est pas
 * non plus.
 */
function reponseDonnee(corrige: string): number | null {
  const t = corrige.trim();
  const apresEgal = t.match(/=\s*(-?\d[\d\s  ]*(?:,\d+)?)\s*(?:[.;,]|$)/);
  if (apresEgal) return nombre(apresEgal[1]);
  const auDebut = t.match(/^(-?\d[\d\s  ]*(?:,\d+)?)\b/);
  if (auDebut) return nombre(auDebut[1]);
  const aLaFin = t.match(/(-?\d[\d\s  ]*(?:,\d+)?)\s*$/);
  if (aLaFin) return nombre(aLaFin[1]);
  return null;
}

async function principal() {
  const racine = process.cwd();
  const mod = await import(pathToFileURL(resolve(racine, "lib/fiches/index.ts")).href);
  const fiches: Fiche[] = mod.fiches;

  let verifies = 0;
  let chiffrees = 0;
  const suspects: string[] = [];
  /* Une fiche de calcul sans aucun corrigé : l'adulte dicte dix opérations et
     n'a rien en face. C'est un trou, pas une erreur de calcul, mais il ne se
     voit que d'ici. */
  const sansCorrige: string[] = [];

  for (const f of fiches) {
    const calculs = f.materiel.filter((m) => FORMES.some((r) => r.quoi.test(m))).length;
    if (calculs >= 3 && !f.corrige) {
      sansCorrige.push(`${f.code} · ${f.titre} — ${calculs} calculs, aucun corrigé`);
      continue;
    }
    if (!f.corrige) continue;

    for (const [i, m] of f.materiel.entries()) {
      if (/\d/.test(m)) chiffrees++;
      const attendu = f.corrige[i];
      if (attendu === undefined) continue;

      for (const forme of FORMES) {
        const trouve = m.match(forme.quoi);
        if (!trouve) continue;
        const r = forme.calcul(trouve);
        if (r === null || !Number.isFinite(r)) break;
        const donne = reponseDonnee(attendu);
        if (donne === null) break;
        verifies++;
        if (Math.round(donne * 1000) !== Math.round(r * 1000)) {
          suspects.push(
            `${f.code} · ${f.titre}\n      « ${m.trim()} » → corrigé « ${attendu.trim()} », calculé ${
              Math.round(r * 1000) / 1000
            }`,
          );
        }
        break;
      }
    }
  }

  console.log(
    `${verifies} calculs recalculés, sur ${chiffrees} entrées de matériel qui portent un chiffre`,
  );
  console.log(
    `le reste — énoncés de problèmes, encadrements, phrases — ne se recalcule pas d'ici et reste à relire`,
  );
  if (sansCorrige.length) {
    console.log(`\n${sansCorrige.length} fiche(s) de calcul sans corrigé :`);
    for (const s of sansCorrige) console.log("  - " + s);
  }
  if (suspects.length === 0) {
    console.log("\naucun corrigé suspect");
    if (sansCorrige.length) process.exit(1);
    return;
  }
  console.log(`\n${suspects.length} corrigé(s) suspect(s) :`);
  for (const s of suspects) console.log("  - " + s);
  process.exit(1);
}

principal();
