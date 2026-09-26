/**
 * Vérifie la structure d'UN fichier de matière du manuel, sans charger les
 * autres.
 *
 * Sert à un relecteur qui travaille sur son seul fichier : `npm test` charge
 * les huit matières, et un fichier en cours d'édition par quelqu'un d'autre le
 * ferait échouer pour une raison qui n'est pas la sienne. Les contrôles sont
 * ceux de `test/programme.test.ts`, plus une liste de mots qui n'ont rien à
 * faire face à un enfant dont l'angoisse est d'échouer.
 *
 *   npx tsx controle/verifier-matiere.ts lib/programme/maths.ts
 */
import { pathToFileURL } from "node:url";
import { resolve } from "node:path";

type Ex = {
  code: string;
  enonce: string;
  type: "saisie" | "choix";
  choix?: string[];
  resultat: string;
  comment: string;
};
type Lecon = {
  code: string;
  matiere: string;
  periode: number;
  titre: string;
  reference: string;
  cours: { titre?: string; texte: string[]; regle?: string }[];
  exemples: { enonce: string; etapes: string[]; resultat: string }[];
  exercices: Ex[];
  /** La seconde série, servie sur une séance de reprise. */
  reprise?: Ex[];
  minutes: number;
};

/* Ce qu'un enfant de neuf ans qui vient d'échouer lirait comme un reproche.
   Pas de `\b` : en JavaScript il ne connaît que les lettres ASCII, et
   « raté » ou « évidemment » passaient au travers (critique du 16 septembre
   au soir). Les bornes se prennent sur les lettres Unicode. */
const INTERDITS =
  /(?<!\p{L})(bravo|rat[ée]e?s?|facile|évidemment|tu devrais|nul|nulle|honte|bête|idiot|mauvais élève|c’est simple|tout le monde sait|pièges?)(?!\p{L})/iu;

async function principal() {
  const chemin = process.argv[2];
  if (!chemin) {
    console.error("usage : npx tsx controle/verifier-matiere.ts lib/programme/<matiere>.ts");
    process.exit(2);
  }

  const mod = await import(pathToFileURL(resolve(process.cwd(), chemin)).href);
  const lecons = Object.values(mod).find((v) => Array.isArray(v)) as Lecon[] | undefined;
  if (!lecons) {
    console.error("aucun tableau de leçons exporté");
    process.exit(1);
  }

  const erreurs: string[] = [];
  const codesEx = new Set<string>();
  const codesLecons = new Set<string>();

  for (const l of lecons) {
    if (codesLecons.has(l.code)) erreurs.push(`${l.code} : code de leçon en double`);
    codesLecons.add(l.code);
    if (!(l.cours.length >= 2)) erreurs.push(`${l.code} : cours trop maigre`);
    if (!l.cours.some((p) => p.regle)) erreurs.push(`${l.code} : aucune règle à retenir`);
    if (!(l.exemples.length >= 1)) erreurs.push(`${l.code} : aucun exemple traité`);
    for (const ex of l.exemples) {
      if (!(ex.etapes.length >= 2)) erreurs.push(`${l.code} : exemple non détaillé`);
      if (!ex.resultat.trim()) erreurs.push(`${l.code} : exemple sans résultat`);
    }
    if (!(l.exercices.length >= 6))
      erreurs.push(`${l.code} : ${l.exercices.length} exercices, il en faut au moins 6`);
    if (!(l.reference.length > 40)) erreurs.push(`${l.code} : référence trop maigre`);
    if (!(l.minutes >= 10 && l.minutes <= 60)) erreurs.push(`${l.code} : durée douteuse`);
    if (![1, 2, 3, 4, 5].includes(l.periode)) erreurs.push(`${l.code} : période invalide`);

    if (l.reprise && l.reprise.length < l.exercices.length)
      erreurs.push(`${l.code} : seconde série de ${l.reprise.length} exercices pour ${l.exercices.length}`);

    for (const ex of [...l.exercices, ...(l.reprise ?? [])]) {
      if (codesEx.has(ex.code)) erreurs.push(`${ex.code} : code d'exercice en double`);
      codesEx.add(ex.code);
      if (!(ex.enonce.trim().length > 10)) erreurs.push(`${ex.code} : énoncé trop court`);
      if (!ex.resultat.trim()) erreurs.push(`${ex.code} : résultat manquant`);
      if (!(ex.comment.trim().length > 30))
        erreurs.push(`${ex.code} : correction trop maigre (< 30 caractères)`);
      if (ex.type === "choix") {
        if (!ex.choix || ex.choix.length < 2) erreurs.push(`${ex.code} : choix manquants`);
        else {
          if (!ex.choix.includes(ex.resultat))
            erreurs.push(`${ex.code} : le résultat « ${ex.resultat} » n'est pas parmi les choix`);
          if (new Set(ex.choix).size !== ex.choix.length) erreurs.push(`${ex.code} : choix en double`);
        }
      } else if (ex.choix !== undefined) {
        erreurs.push(`${ex.code} : une saisie avec des choix`);
      }
      const m = (ex.comment + " " + ex.enonce).match(INTERDITS);
      if (m) erreurs.push(`${ex.code} : mot à éviter face à un enfant anxieux : « ${m[0]} »`);
    }
    for (const p of l.cours) {
      const m = [p.titre ?? "", ...p.texte, p.regle ?? ""].join(" ").match(INTERDITS);
      if (m) erreurs.push(`${l.code} (cours) : mot à éviter : « ${m[0]} »`);
    }
    for (const ex of l.exemples) {
      const m = [ex.enonce, ...ex.etapes, ex.resultat].join(" ").match(INTERDITS);
      if (m) erreurs.push(`${l.code} (exemple) : mot à éviter : « ${m[0]} »`);
    }
  }

  const nEx = lecons.reduce((t, l) => t + l.exercices.length, 0);
  const nRe = lecons.reduce((t, l) => t + (l.reprise?.length ?? 0), 0);
  console.log(`${chemin} : ${lecons.length} leçons, ${nEx} exercices, ${nRe} en seconde série`);
  if (erreurs.length === 0) {
    console.log("structure : OK");
  } else {
    console.log(`structure : ${erreurs.length} problème(s)`);
    for (const e of erreurs) console.log("  - " + e);
    process.exit(1);
  }
}

principal();
