/**
 * La projection destinée à l'enfant.
 *
 * C'est la seule règle du produit qu'une régression peut casser en silence :
 * un compteur ajouté « pour le débogage », une séance reportée laissée
 * visible, et l'écran de l'enfant se met à montrer un manque sans que
 * personne s'en aperçoive à l'œil.
 */

import { test } from "node:test";
import assert from "node:assert/strict";
import {
  journeeVivante,
  aRedistribuer,
  accorder,
  insertionDeTrame,
  COLONNES_TRAME,
} from "../lib/journee";
import { trameDuJour, selonLeTon, joursDeTravail } from "../lib/trame";

type L = Parameters<typeof journeeVivante>[0][number];

function seance(id: string, etat: L["etat"], rang: number): L {
  return {
    id,
    rang,
    matiere: "francais",
    titre: `séance ${id}`,
    reference: "",
    consigne: "",
    minutes: 20,
    lecon: "",
    fiche: "",
    origine: "trame" as const,
    par_adulte: null,
    par_mot: null,
    etat,
    test: false,
  };
}

/** Tous les nombres rendus, avec le nom du champ d'où ils viennent. */
function nombres(x: unknown, chemin = ""): string[] {
  if (Array.isArray(x)) return x.flatMap((v) => nombres(v, chemin));
  if (x && typeof x === "object")
    return Object.entries(x).flatMap(([k, v]) => nombres(v, k));
  return typeof x === "number" ? [chemin] : [];
}

test("aucun agrégat ne sort de la projection de l'enfant", () => {
  const vue = journeeVivante(
    [seance("a", "faite", 1), seance("b", "a-venir", 2), seance("c", "a-venir", 3)],
    null,
  );

  /* La durée indicative est permise — elle est affichée depuis toujours, et
     rien ne la mesure ni ne la compare. Ce qui est interdit, c'est un
     agrégat : un total, un nombre de faites, un reste. C'est ça qu'un enfant
     lit comme une évaluation, et c'est précisément ce que l'ancienne version
     transmettait en comptant sur l'appelant pour ne pas l'afficher. */
  const aggregats = nombres(vue).filter((champ) => champ !== "minutes");
  assert.deepEqual(
    aggregats,
    [],
    `champ(s) numérique(s) inattendu(s) : ${aggregats.join(", ")}`,
  );
});

test("la séance courante est la première encore à venir", () => {
  const vue = journeeVivante(
    [seance("a", "faite", 1), seance("b", "a-venir", 2), seance("c", "a-venir", 3)],
    null,
  );
  assert.equal(vue.courante?.id, "b");
  assert.equal(vue.ouverte, true);
});

test("journée arrêtée : plus rien n'est « maintenant », et le reste disparaît", () => {
  /* Ce qui restait ne doit ni être barré ni grisé : il ne doit plus être là.
     `reportee` est l'état que l'écran ne dessine pas. */
  const vue = journeeVivante(
    [seance("a", "faite", 1), seance("b", "a-venir", 2)],
    "arretee",
  );
  assert.equal(vue.courante, null);
  assert.equal(vue.ouverte, false);
  /* Et il n'est pas seulement caché à l'écran : il ne part pas vers son
     navigateur. Filtré côté client, il restait lisible dans la page. */
  assert.equal(vue.etapes.find((e) => e.id === "b"), undefined);
  assert.deepEqual(vue.etapes.map((e) => e.id), ["a"]);
});

test("une séance mise de côté n'est jamais « à venir »", () => {
  const vue = journeeVivante(
    [seance("a", "reportee", 1), seance("b", "a-venir", 2)],
    null,
  );
  assert.equal(vue.etapes.find((e) => e.id === "a"), undefined, "elle n'est plus là, pas même cachée");
  assert.equal(vue.courante?.id, "b", "la suivante prend la main sans trou");
});

test("le décompte à replacer existe, mais hors de la vue de l'enfant", () => {
  const seances = [seance("a", "reportee", 1), seance("b", "a-venir", 2)];
  assert.equal(aRedistribuer(seances, null).length, 1);
  /* Journée arrêtée : ce qui restait est aussi à replacer. */
  assert.equal(aRedistribuer(seances, "arretee").length, 2);
});

/* ------------------------------------------------------------------ */
/* Accorder une journée à son ton                                      */
/* ------------------------------------------------------------------ */

/**
 * La décision du ton, déroulée sans base.
 *
 * C'est le code le plus risqué du dépôt : il supprime, il insère et il
 * renumérote la journée d'un enfant. Tant qu'il vivait dans quatre requêtes
 * SQL, il n'était couvert que par des essais à la main en ligne. La décision
 * est maintenant une fonction pure, et voici les cas qui font mal.
 */

type S = Parameters<typeof accorder>[0][number];
const s = (id: string, titre: string, origine: S["origine"], etat: S["etat"], rang: number): S =>
  ({ id, titre, origine, etat, rang });

/* Une journée réelle de la trame, et ses trois tons. */
const jour = trameDuJour("2026-09-21");
const normale = selonLeTon(jour, "normale").creneaux;
const allegee = selonLeTon(jour, "allegee").creneaux;
const posee = (): S[] => normale.map((c, i) => s(`t${i + 1}`, c.titre, "trame", "a-venir", i + 1));

test("le ton ne touche ni ce qui est écrit à la main, ni ce qui est fait", () => {
  const journee = [...posee(), s("m1", "Sortie au marché", "main", "a-venir", 8)];
  journee[1] = { ...journee[1], etat: "faite" };
  journee[2] = { ...journee[2], etat: "reportee" };

  const plan = accorder(journee, allegee);
  assert.ok(!plan.aRetirer.includes("m1"), "une séance écrite à la main est retirée");
  assert.ok(!plan.aRetirer.includes("t2"), "une séance faite est retirée");
  assert.ok(!plan.aRetirer.includes("t3"), "une séance mise de côté est retirée");
  assert.ok(plan.aRetirer.length > 0, "allégée ne retire rien");
  assert.deepEqual(plan.aAjouter, [], "rien à ajouter en allégeant");
});

test("une séance commencée ne se retire pas, et ne revient pas en double", () => {
  /* Ce que rend la requête d'`accorderAuTon` : une séance avec du travail
     garde `origine = 'trame'` et porte `commencee`. Jusqu'au 16 septembre au
     soir, elle y passait pour écrite à la main — et le premier clic sur un
     ton, même sur celui déjà choisi, la reposait vierge à côté d'elle. */
  const auSocle = normale.findIndex((c) => allegee.some((a) => a.titre === c.titre));
  const horsSocle = normale.findIndex((c) => !allegee.some((a) => a.titre === c.titre));
  assert.ok(auSocle >= 0 && horsSocle >= 0, "la journée d'essai n'a plus les deux cas");

  for (const etat of ["faite", "reportee", "a-venir"] as const) {
    const journee = posee();
    journee[auSocle] = { ...journee[auSocle], etat, commencee: true };
    journee[horsSocle] = { ...journee[horsSocle], etat, commencee: true };

    const tons: [string, { titre: string }[]][] = [["normale", normale], ["allégée", allegee], ["repos", []]];
    for (const [nom, voulus] of tons) {
      const plan = accorder(journee, voulus);
      assert.ok(
        !plan.aRetirer.includes(journee[auSocle].id) && !plan.aRetirer.includes(journee[horsSocle].id),
        `${nom} retire une séance commencée (${etat})`,
      );
      assert.ok(
        !plan.aAjouter.includes(journee[auSocle].titre) && !plan.aAjouter.includes(journee[horsSocle].titre),
        `${nom} repose en double une séance commencée (${etat})`,
      );
    }
  }
});

test("la journée allégée est exactement le socle, et normale la rétablit", () => {
  const apresAllegee = accorder(posee(), allegee);
  const restees = posee().filter((x) => !apresAllegee.aRetirer.includes(x.id));
  assert.deepEqual(
    restees.map((x) => x.titre),
    allegee.map((c) => c.titre),
    "ce qui reste n'est pas le socle",
  );

  const retour = accorder(restees, normale);
  assert.deepEqual(retour.aRetirer, []);
  assert.deepEqual(
    retour.aAjouter.sort(),
    normale.filter((c) => !c.socle).map((c) => c.titre).sort(),
    "normale ne remet pas exactement ce qu'allégée avait retiré",
  );
});

test("ce qui revient reprend sa place dans la trame, et le reste ne bouge pas", () => {
  /* Un parent a glissé une séance à lui entre deux créneaux de la trame. */
  const journee = posee();
  journee.splice(2, 0, s("m1", "Sortie au marché", "main", "a-venir", 3));
  journee.forEach((x, i) => (x.rang = i + 1));

  const allege = accorder(journee, allegee);
  const restees = journee.filter((x) => !allege.aRetirer.includes(x.id));
  const retour = accorder(restees, normale);

  /* L'ordre final, titre par titre, doit être la journée d'origine. */
  const titreDe = (cle: string) =>
    cle.startsWith("nouveau:") ? cle.slice(8) : journee.find((x) => x.id === cle)!.titre;
  assert.deepEqual(retour.ordre.map(titreDe), journee.map((x) => x.titre));
});

test("une séance faite reste au-dessus de celle en cours après un allégement", () => {
  const journee = posee();
  journee[0] = { ...journee[0], etat: "faite" };
  const plan = accorder(journee, allegee);
  assert.equal(plan.ordre[0], "t1", "la séance faite a quitté la tête de journée");
});

test("repos vide la trame et normale la remet en tête, avant ce qui est à la main", () => {
  const journee = [...posee(), s("m1", "Sortie au marché", "main", "a-venir", 8)];
  const repos = accorder(journee, []);
  assert.equal(repos.aRetirer.length, normale.length);
  const restees = journee.filter((x) => !repos.aRetirer.includes(x.id));
  assert.deepEqual(restees.map((x) => x.id), ["m1"]);

  const retour = accorder(restees, normale);
  assert.deepEqual(retour.aAjouter, normale.map((c) => c.titre));
  assert.equal(retour.ordre.at(-1), "m1", "la séance écrite à la main n'est plus en fin de journée");
  assert.deepEqual(
    retour.ordre.slice(0, -1).map((c) => c.slice(8)),
    normale.map((c) => c.titre),
    "la trame ne revient pas dans son ordre",
  );
});

test("un titre de rituel écrit à la main n'est jamais pris pour le rituel", () => {
  /* Un parent écrit « Lecture libre » à la main. Allégée ne doit pas le
     retirer, et normale ne doit pas croire que le rituel est déjà là. */
  const rituel = normale.find((c) => !c.socle)!;
  const journee = [...posee().filter((x) => x.titre !== rituel.titre), s("m1", rituel.titre, "main", "a-venir", 9)];
  const plan = accorder(journee, normale);
  assert.ok(!plan.aRetirer.includes("m1"));
  assert.ok(plan.aAjouter.includes(rituel.titre), "le rituel manquant n'est pas remis");
});

test("un créneau déplacé vers un autre jour ne revient pas au premier clic sur un ton", () => {
  /* Un parent déplace la dictée de mardi vers lundi. Mardi matin, un parent
     allège : sans `ailleurs`, la dictée revenait mardi, et il l'aurait faite
     deux fois (migration 025). */
  const partie = allegee.find((c) => c.fiche)!;
  assert.ok(partie, "la journée d'essai n'a plus de rituel au socle");
  const restees = posee().filter((x) => x.titre !== partie.titre);

  assert.ok(
    accorder(restees, allegee).aAjouter.includes(partie.titre),
    "sans le savoir, le ton la repose — le test ne prouve plus rien",
  );
  for (const voulus of [allegee, normale]) {
    const plan = accorder(restees, voulus, [partie.titre]);
    assert.ok(!plan.aAjouter.includes(partie.titre), "la séance partie revient");
    assert.ok(!plan.ordre.includes(`nouveau:${partie.titre}`));
  }
  /* Et rien d'autre ne change : normale remet le reste, comme toujours. */
  assert.deepEqual(accorder(restees, normale, [partie.titre]).aAjouter, []);
});

test("accorder est idempotent : une journée déjà accordée ne bouge pas", () => {
  for (const j of joursDeTravail().slice(0, 40)) {
    const t = selonLeTon(trameDuJour(j), "normale").creneaux;
    const journee = t.map((c, i) => s(`t${i + 1}`, c.titre, "trame", "a-venir", i + 1));
    const plan = accorder(journee, t);
    assert.deepEqual(plan.aRetirer, [], j);
    assert.deepEqual(plan.aAjouter, [], j);
    assert.deepEqual(plan.ordre, journee.map((x) => x.id), j);
  }
});

/**
 * Repasser une journée allégée en normale levait une erreur Postgres : la
 * liste de colonnes portait `fiche`, la ligne de valeurs non. Le 16
 * septembre 2026, premier jour réel. On compte donc, ligne par ligne, autant
 * d'expressions que de colonnes — et la fiche doit arriver à sa place.
 */
test("l'insertion de la trame a autant de valeurs que de colonnes, fiche comprise", () => {
  const avecFiche = normale.filter((c) => c.fiche);
  assert.ok(avecFiche.length > 0, "le cas de test suppose une séance à fiche");

  for (const rang of [(i: number) => i + 1, () => 0]) {
    const { sql, lignes, valeurs } = insertionDeTrame("j", normale, rang);
    assert.ok(sql.includes("fiche"));
    for (const l of lignes) {
      const expressions = l.slice(1, -1).split(",").map((x) => x.trim());
      assert.equal(expressions.length, COLONNES_TRAME.length, `ligne mal formée : ${l}`);

      /* Chaque paramètre désigne la bonne valeur. */
      const colonne = (nom: string) => expressions[COLONNES_TRAME.indexOf(nom as never)];
      const valeurDe = (nom: string) => valeurs[Number(colonne(nom).slice(1)) - 1];
      const titre = valeurDe("titre") as string;
      const creneau = normale.find((c) => c.titre === titre)!;
      assert.ok(creneau, `titre inattendu : ${titre}`);
      assert.equal(valeurDe("fiche"), creneau.fiche ?? "");
      assert.equal(valeurDe("lecon"), creneau.lecon ?? "");
      assert.equal(valeurDe("minutes"), creneau.minutes);
    }
    const derniere = Math.max(
      ...[...sql.matchAll(/\$(\d+)/g)].map((m) => Number(m[1])),
    );
    assert.equal(derniere, valeurs.length, "des paramètres sans valeur, ou l'inverse");
  }
});
