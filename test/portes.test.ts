/**
 * Les pages qui montrent les réponses ne s'ouvrent pas du côté de l'enfant.
 *
 * Tout le produit repose sur une frontière : `poserLecon()` retire les
 * résultats avant qu'ils n'atteignent son écran, et `prochaine()` retire
 * l'attendu des questions du test. Deux tests la vérifient déjà, dans
 * `programme.test.ts` et `positionnement.test.ts`.
 *
 * Le manuel côté adulte contourne cette frontière **exprès** : un parent doit
 * pouvoir lire le cours, les énoncés et les réponses pour préparer une séance
 * et corriger un brouillon. La frontière ne tient donc plus au niveau des
 * données ; elle tient au niveau de la porte.
 *
 * D'où ce test, qui n'a l'air de rien et qui garde la garantie la plus fragile
 * du produit : **toute page qui importe le manuel complet ou l'instrument
 * complet doit renvoyer un enfant vers sa journée.** Une page ajoutée sans ce
 * renvoi donnerait à un enfant dont l'angoisse est d'échouer un endroit où
 * lire toutes les réponses — et il aurait raison d'y aller, ce serait la
 * solution la moins coûteuse. Ensuite le relevé de ses parents serait faux, et
 * le travail qu'ils lui prépareraient aussi.
 *
 * Un test structurel, donc, qui lit les fichiers : c'est la seule façon de
 * vérifier une règle qui porte sur « toute page future » et pas sur une
 * fonction. Il distingue les imports un par un — l'écran de l'enfant importe
 * `prochaine` du même module, et c'est précisément ce qui rend la distinction
 * intéressante à tester : ce qui compte n'est pas le module, c'est ce qu'on en
 * sort.
 *
 * Et il **suit les imports** : une page qui rend un composant, ou appelle une
 * fonction d'un module, qui lui-même importe le manuel brut, est concernée
 * comme si elle l'importait elle-même. La première version ne regardait que
 * la page ; un import indirect passait au travers. C'est pour que ce suivi
 * reste précis que la lecture des parents vit dans ses propres modules —
 * `lib/lecture.ts`, `lib/releve.ts` — séparés de ce que l'écran de l'enfant
 * importe pour lire et écrire ses réponses.
 *
 * Le suivi s'arrête aux actions serveur (`app/actions.ts`) : un composant qui
 * les importe n'obtient qu'un appel distant, jamais leur code ni leurs
 * imports — c'est le mécanisme même de Next. Ce qu'une action **rend** est
 * une autre question, tenue par `programme.test.ts` (`corrigerExercice` ne
 * rend que le résultat et la méthode, après la réponse) et par la signature
 * de `repondre`, qui ne rend rien.
 */

import { test } from "node:test";
import assert from "node:assert/strict";
import { existsSync, readdirSync, readFileSync, statSync } from "node:fs";
import { fileURLToPath } from "node:url";
import { dirname, join, resolve } from "node:path";

const RACINE = fileURLToPath(new URL("..", import.meta.url));
const APP = join(RACINE, "app");

function pages(dossier: string): string[] {
  const trouvees: string[] = [];
  for (const nom of readdirSync(dossier)) {
    const chemin = join(dossier, nom);
    if (statSync(chemin).isDirectory()) trouvees.push(...pages(chemin));
    else if (nom === "page.tsx") trouvees.push(chemin);
  }
  return trouvees;
}

/**
 * Ce qui porte les réponses, export par export.
 *
 * Absents de cette liste, et ce n'est pas un oubli : `poserLecon`, `poser`,
 * `prochaine`, `blocsFinis`, `tailleLecon`. Ce sont les passages qui retirent
 * les réponses ou qui ne comptent que des énoncés, et l'écran de l'enfant les
 * emploie légitimement.
 */
const AVEC_LES_REPONSES: Record<string, string[]> = {
  programme: ["lecons", "leconParCode", "corrigerExercice", "leconsDePeriode", "leconsDeMatiere"],
  positionnement: ["blocs", "notions", "questions", "parCode", "blocDeNotion"],
  /* Les fiches outillent l'adulte pour les séances qui ne sont pas à l'écran,
     et elles portent les corrigés — les dix réponses du calcul mental, les
     cinq questions du texte et ce qu'on attend. Même règle que le manuel. */
  fiches: ["fiches", "ficheParCode", "ficheDe", "fichesDuRituel"],
  /* Ce qu'a donné une séance menée avec une fiche : les questions à noter
     portent leur réponse, et le résultat se lit comme un relevé. */
  "resultat-fiche": ["questionsANoter", "resultatsDeJournee", "rangsDe"],
};

/** Les modules qu'on ne suit pas : la frontière des actions serveur. */
const FRONTIERES = [/[\\/]app[\\/]actions\.ts$/];

/** Ce qu'un fichier importe d'un module donné, nom par nom. `*` = tout. */
function importesDe(source: string, module: string): string[] {
  const noms: string[] = [];
  const nommes = new RegExp(
    `import\\s*(?:type\\s*)?\\{([^}]*)\\}\\s*from\\s*["'][^"']*[\\/]${module}["']`,
    "g",
  );
  for (const m of source.matchAll(nommes)) {
    for (const bout of m[1].split(",")) {
      const nom = bout.trim().replace(/^type\s+/, "").split(/\s+as\s+/)[0].trim();
      if (nom) noms.push(nom);
    }
  }
  const tout = new RegExp(`import\\s*\\*\\s*as\\s+\\w+\\s*from\\s*["'][^"']*[\\/]${module}["']`);
  if (tout.test(source)) noms.push("*");
  return noms;
}

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
 * Tout ce qu'une page atteint par ses imports, elle comprise — sauf les deux
 * modules qui portent les réponses (on regarde ce qu'on en sort, pas ce qu'ils
 * contiennent) et les actions serveur (une frontière).
 */
function graphe(depart: string): Map<string, string> {
  const vus = new Map<string, string>();
  const pile = [depart];
  while (pile.length > 0) {
    const chemin = pile.pop()!;
    if (vus.has(chemin)) continue;
      if (
      /[\\/]lib[\\/](programme[\\/]|programme\.ts|positionnement\.ts|fiches[\\/]|fiches\.ts)/.test(
        chemin,
      )
    )
      continue;
    if (FRONTIERES.some((f) => f.test(chemin))) continue;
    const source = readFileSync(chemin, "utf8");
    vus.set(chemin, source);
    pile.push(...dependances(chemin, source));
  }
  return vus;
}

/** Les imports dangereux atteints depuis une page, avec le fichier fautif. */
function fuitesDepuis(page: string): string[] {
  const fuites: string[] = [];
  for (const [chemin, source] of graphe(page)) {
    for (const [module, exports_] of Object.entries(AVEC_LES_REPONSES)) {
      const noms = importesDe(source, module);
      const dangereux = noms.includes("*") ? exports_ : noms.filter((n) => exports_.includes(n));
      for (const n of dangereux) fuites.push(`${n} (${chemin.slice(RACINE.length)})`);
    }
  }
  return fuites;
}

const RENVOIE_LENFANT = /role === "enfant"\)\s*redirect\("\/journee"\)/;

/**
 * L'exception, et la seule : `/etape` lit une leçon entière parce qu'elle la
 * passe aussitôt par `poserLecon()`, qui en retire les résultats. C'est
 * l'écran de l'enfant, il ne peut pas s'y renvoyer lui-même, et
 * `programme.test.ts` vérifie déjà que rien n'en sort.
 */
const CELLES_DE_LENFANT = new Set(["etape"]);

test("toute page qui touche aux réponses, même par un import indirect, renvoie l'enfant vers sa journée", () => {
  const concernees: string[] = [];

  for (const chemin of pages(APP)) {
    const fuites = fuitesDepuis(chemin);
    if (fuites.length === 0) continue;

    const nom = chemin.split(/[\\/]/).slice(-2, -1)[0];
    concernees.push(nom);
    if (CELLES_DE_LENFANT.has(nom)) continue;

    assert.match(
      readFileSync(chemin, "utf8"),
      RENVOIE_LENFANT,
      `${nom} atteint ${fuites.join(", ")} sans renvoyer l'enfant vers /journee`,
    );
  }

  /* Si plus aucune page n'est reconnue, c'est que les repères ci-dessus ont
     changé de nom et que le test ne vérifie plus rien. Un test vert qui ne
     teste rien est pire qu'un test absent. */
  for (const attendue of [
    "manuel", "positionnement", "pilotage", "annee", "fiches", "preparer", "[code]", "a-reprendre",
  ]) {
    assert.ok(
      concernees.includes(attendue),
      `la page « ${attendue} » n'est plus reconnue comme touchant aux réponses`,
    );
  }
});

/**
 * Et le contrôle inverse : les écrans d'adulte qui ne touchent pas aux
 * réponses doivent quand même refuser l'enfant. Ils portent des compteurs, le
 * retard, et le relevé de ce qu'il a raté — les règles n°1 et n°3.
 */
test("les écrans d'adulte refusent l'enfant, même sans les réponses", () => {
  for (const nom of ["pilotage", "annee", "sources", "manuel", "positionnement", "fiches", "preparer", "atelier", "journal", "suivi", "controle", "a-reprendre"]) {
    const source = readFileSync(join(APP, nom, "page.tsx"), "utf8");
    assert.match(source, RENVOIE_LENFANT, `${nom} laisse entrer l'enfant`);
  }
  /* Les deux pages de détail, qui portent le contenu et les réponses. */
  for (const nom of [["manuel", "[code]"], ["fiche", "[code]"]]) {
    const source = readFileSync(join(APP, ...nom, "page.tsx"), "utf8");
    assert.match(source, RENVOIE_LENFANT, `${nom.join("/")} laisse entrer l'enfant`);
  }
});

/**
 * L'écran de l'enfant n'atteint que la frontière — ni par lui-même, ni par un
 * composant qu'il rend, ni par un module qu'il appelle.
 *
 * Le contrôle le plus direct, et celui qui aurait sauté aux yeux le jour où
 * quelqu'un ajoute `parCode` à `/journee` pour « afficher le libellé de la
 * notion » — ou, plus sournois, une fonction à `lib/journee.ts` qui va lire
 * une leçon. Ce jour-là, l'attendu serait dans sa page.
 */
test("les écrans de l’enfant n'atteignent jamais le manuel ni l'instrument bruts", () => {
  for (const nom of ["journee", "questions", "ressenti", "entrer", "pourquoi", "cahier"]) {
    const fuites = fuitesDepuis(join(APP, nom, "page.tsx"));
    assert.deepEqual(fuites, [], `${nom} atteint ${fuites.join(", ")}`);
  }
});

/**
 * Le suivi des imports doit lui-même fonctionner, sinon les deux tests
 * précédents passent en silence sur du vide. `/etape` importe `leconParCode`
 * directement, et `/pilotage` n'atteint le manuel que par `lib/releve.ts` :
 * les deux doivent être vus.
 */
test("le suivi des imports voit les fuites directes et indirectes", () => {
  assert.ok(
    fuitesDepuis(join(APP, "etape", "page.tsx")).some((f) => f.startsWith("leconParCode")),
    "la fuite directe de /etape n'est pas vue",
  );
  assert.ok(
    fuitesDepuis(join(APP, "pilotage", "page.tsx")).some((f) => f.includes("releve.ts")),
    "la fuite indirecte de /pilotage par lib/releve.ts n'est pas vue",
  );
});

/**
 * Les écrans réservés aux parents ferment la porte au proche.
 *
 * Décision de famille du 14 septembre : le parrain garde l'organisation, le
 * relevé des exercices et le portrait du test, mais pas ce que l'enfant dépose
 * le soir — l'écran de ressenti lui promet que ça part « chez papa et maman »
 * et chez personne d'autre. Le journal, le suivi et le relevé le contiennent
 * ou en découlent.
 *
 * La liste n'est pas recopiée ici : elle est lue dans l'en-tête, là où un lien
 * est réservé aux parents. Ajouter un tel lien sans fermer la page elle-même
 * ferait échouer ce test — masquer un lien n'a jamais fermé une porte. Et la
 * porte se ferme **avant** toute lecture en base : un proche qui tape
 * l'adresse ne doit rien déclencher.
 */
const RESERVE_AU_PROCHE = /if \(!estParent\(moi\)\)\s*return <ReserveAuxParents/;

test("les écrans que l'en-tête réserve aux parents se ferment au proche, avant toute lecture", () => {
  const entete = readFileSync(join(RACINE, "components", "Entete.tsx"), "utf8");
  const reservees = [...entete.matchAll(/\{parent && <Link href="\/([a-z-]+)"/g)].map((m) => m[1]);
  assert.ok(reservees.length >= 3, `l'en-tête ne réserve plus que ${reservees.join(", ") || "rien"} aux parents`);

  for (const nom of reservees) {
    const chemin = join(APP, nom, "page.tsx");
    assert.ok(existsSync(chemin), `l'en-tête mène à /${nom}, qui n'existe pas`);
    const source = readFileSync(chemin, "utf8");
    assert.match(source, RENVOIE_LENFANT, `/${nom} laisse entrer l'enfant`);

    const debut = source.search(/export default async function/);
    const porte = source.search(RESERVE_AU_PROCHE);
    assert.ok(debut >= 0 && porte > debut, `/${nom} ne ferme pas la porte au proche`);

    /* La première attente après la session et l'adresse, c'est la porte. */
    const lectures = [...source.slice(debut).matchAll(/await ([\w.]+)/g)]
      .filter((m) => m[1] !== "personneConnectee" && m[1] !== "searchParams")
      .map((m) => debut + (m.index ?? 0));
    assert.ok(
      lectures.every((i) => i > porte),
      `/${nom} lit la base avant de fermer la porte au proche`,
    );
  }
});
