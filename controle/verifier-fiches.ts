/**
 * Vérifie la structure d'UN fichier de fiches, sans charger les autres.
 *
 * Même raison que `verifier-matiere.ts` : onze auteurs écrivent en parallèle,
 * et `npm test` charge tout — un fichier en cours d'édition ferait échouer la
 * vérification de quelqu'un d'autre, pour une raison qui n'est pas la sienne.
 *
 *   npx tsx controle/verifier-fiches.ts lib/fiches/calcul-nombres.ts
 *
 * Sans argument, il vérifie l'ensemble et dit la couverture de l'année :
 * combien de rituels ont assez de fiches pour ne jamais se répéter, et
 * combien tournent encore en boucle.
 */
import { pathToFileURL } from "node:url";
import { resolve } from "node:path";

type Fiche = {
  code: string;
  rituel: string;
  titre: string;
  mener: string[];
  materiel: string[];
  corrige?: string[];
  regarder?: string;
};

/**
 * Ce qui n'a pas sa place dans une fiche : le jugement et la comparaison.
 *
 * La liste est **plus étroite** que celle du manuel, et c'est délibéré. Une
 * fiche est lue par l'adulte, et son matériel contient des récits : « le chat
 * a trouvé ça trop bête », « une balle facile à renvoyer », « nulle part »,
 * « une marche sous la pluie n'est pas une marche ratée ». Traquer ces mots-là
 * produisait vingt-six alertes dont aucune n'était fondée — et un contrôleur
 * qui crie au loup se fait ignorer, ce qui est pire que pas de contrôleur.
 *
 * On traque donc ce qui vise **l'enfant** : un jugement qu'on lui adresse, une
 * comparaison à un autre ou à une norme d'âge, et la note — qui n'existe nulle
 * part dans ce produit et n'a aucune raison d'entrer par ici.
 */
const INTERDITS = new RegExp(
  [
    /* un jugement adressé à l'enfant */
    "\\bbravo\\b",
    "\\btu devrais\\b",
    "\\bmauvais élève\\b",
    "\\bidiot\\b",
    "niveau faible",
    "erreur grossière",
    /* « c'est facile » lâché tel quel diminue l'enfant qui peine. Mais
       « c'est simple à dire et difficile à faire », adressé à l'adulte à propos
       de l'exercice, dit le contraire : on n'attrape donc la formule que
       lorsqu'elle se referme sur elle-même, en fin de proposition. */
    "c['’]est (?:très )?(?:facile|simple)\\s*(?:[.,;!…]|$)",
    "rien de plus simple",
    /* une comparaison : à un autre enfant, à un âge, à une moyenne */
    "pour son âge",
    "normalement à cet âge",
    "comme les autres enfants",
    "la moyenne des enfants",
    "un enfant de son âge devrait",
    /* Une note, qui n'existe nulle part ailleurs dans ce produit.
       « sur dix » tout court ne suffit pas à en désigner une : les fiches du
       dehors mesurent des distances (« un sprint sur dix mètres »), des terrains
       (« quinze mètres sur dix ») et des mesures musicales (« sur vingt-quatre
       temps »). Ce qui fait la note, c'est le score qui la précède ou le verbe
       qui l'annonce — pas le nombre qui la suit. */
    "\\bnot[ée]e?s? sur (?:dix|vingt|10|20)\\b",
    "\\b(?:mettre|donner|attribuer) une note\\b",
    "\\bune note de \\d",
    "\\bmoyenne de la classe\\b",
    /* « barème » n'est pas dans la liste : le seul endroit où le mot apparaît
       est une fiche qui le refuse (« ce n'est pas un barème, c'est un choix
       d'exigence qu'il fait lui-même »), et cette phrase-là mérite de rester
       telle quelle. Une vraie note se dit autrement, et les règles ci-dessus
       l'attrapent. */
  ].join("|"),
  "i",
);

async function principal() {
  const cible = process.argv[2];
  const racine = process.cwd();

  const fichiers = cible
    ? [cible]
    : [
        "calcul-nombres", "calcul-grandeurs", "ecriture-dictees", "ecriture-copie",
        "lecture-textes", "lecture-formes", "redaction", "entrainement-maths",
        "entrainement-francais", "dehors", "mercredi", "rentree", "vocabulaire",
        "lecture-documentaires", "lecture-questions", "dictionnaire", "conjugaison",
        "reprise-francais", "mercredi-faire", "mercredi-monde",
      ].map((n) => `lib/fiches/${n}.ts`);

  /* Les titres de rituel que la trame emploie réellement, et le nombre de fois
     qu'ils tombent : une fiche rattachée à un titre qui n'existe pas ne
     s'affichera jamais, et c'est une faute muette. */
  const T = await import(pathToFileURL(resolve(racine, "lib/trame.ts")).href);
  const attendus = new Map<string, number>();
  for (const j of T.joursAvecTrame())
    for (const c of T.trameDuJour(j).creneaux)
      if (!c.lecon) attendus.set(c.titre, (attendus.get(c.titre) ?? 0) + 1);

  const erreurs: string[] = [];
  const vues: Fiche[] = [];
  const codes = new Set<string>();

  for (const chemin of fichiers) {
    const mod = await import(pathToFileURL(resolve(racine, chemin)).href);
    const lot = Object.values(mod).find((v) => Array.isArray(v)) as Fiche[] | undefined;
    if (!lot) {
      erreurs.push(`${chemin} : aucun tableau de fiches exporté`);
      continue;
    }
    for (const f of lot) {
      vues.push(f);
      const ou = `${f.code}`;
      if (codes.has(f.code)) erreurs.push(`${ou} : code en double`);
      codes.add(f.code);
      if (!/^[a-z]{2,3}-[a-z0-9-]+-\d{2}$/.test(f.code))
        erreurs.push(`${ou} : code hors convention (attendu « xx-abrege-01 »)`);
      if (!attendus.has(f.rituel))
        erreurs.push(`${ou} : rituel « ${f.rituel} » absent de la trame — la fiche ne s'affichera jamais`);
      if (!(f.titre?.trim().length > 3)) erreurs.push(`${ou} : titre trop maigre`);
      if (!(f.mener?.length >= 1)) erreurs.push(`${ou} : rien dans « mener »`);
      if (!(f.materiel?.length >= 1)) erreurs.push(`${ou} : rien dans « materiel »`);
      if (f.corrige && f.corrige.length !== f.materiel.length)
        erreurs.push(
          `${ou} : ${f.materiel.length} éléments de matériel pour ${f.corrige.length} corrigés — ` +
            `ils se lisent en vis-à-vis, donc ils doivent aller par paires`,
        );
      const tout = [...(f.mener ?? []), ...(f.materiel ?? []), f.regarder ?? "", f.titre ?? ""].join(" ");
      const m = tout.match(INTERDITS);
      if (m) erreurs.push(`${ou} : mot à éviter — « ${m[0]} »`);
    }
    if (cible) console.log(`${chemin} : ${lot.length} fiches`);
  }

  /* La couverture : un rituel dont la série est plus courte que le nombre
     d'occurrences recommence au début. Ce n'est pas une faute — une fiche
     revue en mai est une révision — mais ça doit se savoir. */
  const parRituel = new Map<string, number>();
  for (const f of vues) parRituel.set(f.rituel, (parRituel.get(f.rituel) ?? 0) + 1);

  const sans: string[] = [];
  const boucle: string[] = [];
  for (const [titre, fois] of [...attendus].sort((a, b) => b[1] - a[1])) {
    const n = parRituel.get(titre) ?? 0;
    if (n === 0) sans.push(`${titre} (${fois} fois)`);
    else if (n < fois) boucle.push(`${titre} : ${n} fiches pour ${fois} séances`);
  }

  if (!cible) {
    const couvertes = [...attendus].reduce(
      (t, [titre, fois]) => t + Math.min(parRituel.get(titre) ?? 0, fois),
      0,
    );
    const total = [...attendus.values()].reduce((a, b) => a + b, 0);
    console.log(`${vues.length} fiches, ${parRituel.size} rituels outillés sur ${attendus.size}`);
    console.log(`couverture de l'année : ${couvertes} séances sur ${total} sans répétition`);
    if (sans.length) {
      console.log(`\n${sans.length} rituel(s) sans aucune fiche :`);
      for (const s of sans) console.log("  - " + s);
    }
    if (boucle.length) {
      console.log(`\n${boucle.length} série(s) qui recommencent :`);
      for (const s of boucle) console.log("  - " + s);
    }
  }

  if (erreurs.length === 0) {
    console.log("structure : OK");
  } else {
    console.log(`structure : ${erreurs.length} problème(s)`);
    for (const e of erreurs) console.log("  - " + e);
    process.exit(1);
  }
}

principal();
