/**
 * La journée réelle, lue et écrite en base.
 *
 * Remplace `lib/etat.tsx`, qui gardait tout dans le `localStorage` du
 * navigateur : parfait pour montrer, inutilisable dès qu'il y a deux maisons
 * et trois adultes.
 *
 * La garantie de `journeeVivante()` est reprise telle quelle, et renforcée :
 * **la projection destinée à l'enfant ne renvoie aucun compteur.** L'ancienne
 * version rendait `nbFaites` et `nbTotal` en comptant sur l'appelant pour ne
 * pas les afficher ; ici ils n'existent pas. Le décompte de ce qu'il y a à
 * redistribuer est une fonction séparée, que seuls les écrans d'adulte
 * appellent.
 */

import { lignes, ligne, executer, transaction } from "./base";
import type { MatiereId } from "./data";

export type TonJour = "normale" | "allegee" | "repos";
export type ClotureJour = "terminee" | "arretee";
export type EtatSeance = "a-venir" | "faite" | "reportee";
export type RessentiMot = "bien" | "ca-va" | "bof" | "pas-bien";

type LigneSeance = {
  id: string;
  rang: number;
  matiere: string;
  titre: string;
  reference: string;
  consigne: string;
  minutes: number;
  /* Le code d'une leçon de `lib/programme.ts`, ou vide si la séance a été
     écrite à la main par un adulte. */
  lecon: string;
  /* Le code de la fiche qui outille l'adulte, pour une séance qui ne se passe
     pas à l'écran. Vide quand la séance porte une leçon, ou qu'aucune fiche
     n'a encore été écrite pour ce rituel. **Réservé aux adultes** : une fiche
     porte ses corrigés. */
  fiche: string;
  /* `trame` = posée par le calcul, donc reprenable par lui. `main` = voulue
     par un adulte, donc intouchable. */
  origine: "trame" | "main";
  par_adulte: string | null;
  /* Le mot que l'enfant emploie pour celui qui a posé la séance : « papa »,
     « maman », « parrain ». Jamais le prénom, jamais l'identifiant. */
  par_mot: string | null;
  etat: EtatSeance;
  /* La partie du test de positionnement, posée d'elle-même dans la journée.
     Son étape mène à `/questions`, et elle se coche quand la partie est
     finie. Voir `lib/test-du-jour.ts`. */
  test: boolean;
  /* Du travail dedans : des exercices inscrits, ou un résultat noté. Écrans
     d'adulte : `journeeVivante` ne le transmet pas. */
  commencee?: boolean;
};

export type Journee = {
  id: string;
  jour: string;
  ton: TonJour;
  cloture: ClotureJour | null;
  note: string;
  note_de: string | null;
  /* Un adulte a retiré la partie du test de cette journée : elle ne revient
     pas d'elle-même. */
  sans_test: boolean;
};

/** Aujourd'hui, au format `YYYY-MM-DD`, dans le fuseau de la famille. */
export function aujourdhui() {
  return new Date().toLocaleDateString("sv-SE", { timeZone: "Europe/Paris" });
}

/**
 * La journée d'une date, créée à la volée si elle n'existe pas.
 *
 * Créer plutôt que rendre `null` : un enfant qui ouvre l'application un matin
 * où personne n'a rien préparé doit trouver une journée vide, pas une erreur.
 */
export async function journeeDe(familleId: string, jour: string): Promise<Journee> {
  const existante = await ligne<Journee>(
    `select id, jour::text, ton, cloture, note, note_de, sans_test
       from journee where famille_id = $1 and jour = $2`,
    [familleId, jour],
  );
  if (existante) return existante;

  const creee = await ligne<Journee>(
    `insert into journee (famille_id, jour) values ($1, $2)
     on conflict (famille_id, jour) do update set jour = excluded.jour
     returning id, jour::text, ton, cloture, note, note_de, sans_test`,
    [familleId, jour],
  );
  return creee!;
}

export async function seancesDe(journeeId: string) {
  return lignes<LigneSeance>(
    `select s.id, s.rang, s.matiere, s.titre, s.reference, s.consigne,
            s.minutes, s.lecon, s.fiche, s.origine, s.par_adulte,
            p.mot_de_l_enfant as par_mot, s.etat, s.test,
            (exists (select 1 from travail t where t.seance_id = s.id)
              or exists (select 1 from resultat_fiche r where r.seance_id = s.id)) as commencee
       from seance s
       left join personne p on p.id = s.par_adulte
      where s.journee_id = $1
      order by s.rang, s.cree_le`,
    [journeeId],
  );
}

/* ------------------------------------------------------------------ */
/* Ce que l'écran de l'enfant a le droit de savoir                     */
/* ------------------------------------------------------------------ */

export type EtatVivant = "fait" | "maintenant" | "a-venir" | "reportee";

export type EtapeVivante = {
  id: string;
  matiere: MatiereId;
  titre: string;
  reference?: string;
  consigne: string;
  minutes: number;
  /* Quand la séance vient du programme : le cours et les exercices sont à
     l'écran, et il n'inscrit que ses résultats. */
  lecon?: string;
  parMot?: string;
  /* La partie du test : l'étape mène à `/questions`, pas à `/etape`. */
  test?: boolean;
  /* Il l'a déjà commencée : le bouton dit « Continuer ». « Commencer » sur
     une partie à moitié faite se lisait « tout recommencer » (seconde
     critique du 16 septembre). Un oui ou non, rien de ce qu'il a répondu. */
  commencee?: boolean;
  etat: EtatVivant;
};

/**
 * La projection de l'enfant. Aucun nombre n'en sort.
 *
 * Une séance mise de côté n'est ni barrée ni grisée dans sa vue : elle n'est
 * plus là. Et quand la journée est arrêtée, tout ce qui restait disparaît —
 * il ne doit pas pouvoir lire ce qu'il n'a pas fait.
 */
export function journeeVivante(
  seances: LigneSeance[],
  cloture: ClotureJour | null,
  /** La partie du test du jour a déjà des réponses. */
  testCommence = false,
) {
  const restantes = seances.filter((s) => s.etat === "a-venir");
  const idCourante = cloture ? null : (restantes[0]?.id ?? null);

  const toutes: EtapeVivante[] = seances.map((s) => {
    const commun = {
      id: s.id,
      matiere: s.matiere as MatiereId,
      titre: s.titre,
      reference: s.reference || undefined,
      consigne: s.consigne,
      minutes: s.minutes,
      lecon: s.lecon || undefined,
      parMot: s.par_mot ?? undefined,
      test: s.test || undefined,
      commencee: (s.test ? testCommence : s.commencee) || undefined,
    };
    if (s.etat === "faite") return { ...commun, etat: "fait" as const };
    if (s.etat === "reportee") return { ...commun, etat: "reportee" as const };
    if (s.id === idCourante) return { ...commun, etat: "maintenant" as const };
    return { ...commun, etat: (cloture === "arretee" ? "reportee" : "a-venir") as EtatVivant };
  });
  /* Ce qu'il n'a pas fait ne part pas vers son navigateur. L'écran ne le
     dessinait pas, mais la page le contenait : filtré côté client, il restait
     lisible. Critique du 16 septembre 2026. */
  const etapes = toutes.filter((e) => e.etat !== "reportee");

  return {
    etapes,
    courante: etapes.find((e) => e.etat === "maintenant") ?? null,
    ouverte: cloture === null,
  };
}

/**
 * Les leçons du programme déjà placées, et quand. **Écrans d'adulte.**
 *
 * Sert au suivi de la progression : sans ça, un parent n'aurait aucun moyen de
 * savoir ce qui a déjà été donné, et il redonnerait deux fois la même leçon en
 * novembre. Rien de tout ceci ne traverse vers l'écran de l'enfant.
 */
export async function leconsPosees(familleId: string) {
  return lignes<{ lecon: string; jour: string; etat: EtatSeance }>(
    `select s.lecon, j.jour::text, s.etat
       from seance s join journee j on j.id = s.journee_id
      where j.famille_id = $1 and s.lecon <> ''
      order by j.jour desc`,
    [familleId],
  );
}

/** Le décompte de ce qu'il reste à replacer. **Écrans d'adulte seulement.** */
export function aRedistribuer(seances: LigneSeance[], cloture: ClotureJour | null) {
  return seances.filter(
    (s) =>
      /* La partie du test ne se replace pas : elle revient d'elle-même le
         prochain jour normal. */
      !s.test &&
      (s.etat === "reportee" || (cloture === "arretee" && s.etat === "a-venir")),
  );
}

/* ------------------------------------------------------------------ */
/* Ce qui s'écrit                                                      */
/* ------------------------------------------------------------------ */

/**
 * Déplacer une séance, **dans sa journée et pas ailleurs**.
 *
 * L'identifiant de séance vient du navigateur : il ne mérite aucune confiance.
 * La journée, elle, est retrouvée côté serveur à partir de la session. Le
 * `and journee_id = $3` est donc ce qui empêche quelqu'un de faire bouger la
 * séance d'une autre famille en devinant un identifiant. Une seule famille
 * aujourd'hui, mais le schéma a été écrit pour en accueillir d'autres, et ce
 * genre de trou ne se répare pas facilement après coup.
 */
async function bouger(journeeId: string, seanceId: string, etat: EtatSeance) {
  const n = await executer(
    `update seance set etat = $2, bougee_le = now()
      where id = $1 and journee_id = $3`,
    [seanceId, etat, journeeId],
  );
  return n > 0;
}

/**
 * Cocher. Quand il ne reste plus rien, la journée se referme d'elle-même.
 *
 * Rend faux quand la séance n'est pas dans cette journée — retirée par un
 * adulte, ou page restée ouverte d'un jour sur l'autre. Une journée ne se
 * referme pas sur un geste qui n'a rien écrit.
 */
export async function terminerSeance(journeeId: string, seanceId: string) {
  if (!(await bouger(journeeId, seanceId, "faite"))) return false;
  await refermerSiVide(journeeId, "terminee");
  return true;
}

/** « Je bloque » — mettre de côté, ce qui n'est pas échouer. */
export async function reporterSeance(journeeId: string, seanceId: string) {
  if (!(await bouger(journeeId, seanceId, "reportee"))) return false;
  await refermerSiVide(journeeId, "arretee");
  return true;
}

async function refermerSiVide(journeeId: string, cloture: ClotureJour) {
  const reste = await ligne<{ n: string }>(
    `select count(*)::text as n from seance
      where journee_id = $1 and etat = 'a-venir'`,
    [journeeId],
  );
  if (reste && Number(reste.n) === 0) {
    await executer(`update journee set cloture = $2 where id = $1`, [
      journeeId,
      cloture,
    ]);
  }
}

/** « On arrête pour aujourd'hui. » Aucun motif demandé, aucune confirmation. */
export async function arreterJournee(journeeId: string) {
  await executer(`update journee set cloture = 'arretee' where id = $1`, [journeeId]);
}

/** Revenir sur sa décision est à lui, pas à l'application. */
export async function reprendreJournee(journeeId: string) {
  await executer(`update journee set cloture = null where id = $1`, [journeeId]);
}

export async function changerTon(journeeId: string, ton: TonJour) {
  await executer(`update journee set ton = $2 where id = $1`, [journeeId, ton]);
}

/**
 * Écrire la note du soir — sans effacer celle de l'autre maison.
 *
 * Un seul champ pour deux parents. Avant, le dernier « Enregistrer » gagnait
 * en silence : une page ouverte à 18 h chez l'un effaçait à 21 h ce que
 * l'autre avait écrit à 20 h, et la note lui était attribuée (critique du
 * 16 septembre 2026). On n'écrit plus que si la note en base est encore celle
 * que la page avait chargée ; sinon on rend la note actuelle et son auteur,
 * et l'écran les montre sans rien perdre de ce qui a été tapé.
 */
export async function noterJournee(
  journeeId: string,
  note: string,
  parAdulte: string,
  avant: string,
): Promise<{ ecrit: true } | { ecrit: false; note: string; de: string | null }> {
  const n = await executer(
    `update journee set note = $2, note_de = $3 where id = $1 and note = $4`,
    [journeeId, note, parAdulte, avant],
  );
  if (n > 0) return { ecrit: true };
  const actuelle = await ligne<{ note: string; de: string | null }>(
    `select j.note, p.mot_de_l_enfant as de
       from journee j left join personne p on p.id = j.note_de
      where j.id = $1`,
    [journeeId],
  );
  return { ecrit: false, note: actuelle?.note ?? "", de: actuelle?.de ?? null };
}

/**
 * Un adulte a retouché cette journée : la trame ne la réécrira plus jamais.
 * Voir la migration 019 et `deploiement/ecrire-lannee.ts --reprendre`.
 */
export async function retoucher(journeeId: string) {
  await executer(`update journee set retouchee_le = now() where id = $1`, [journeeId]);
}

export async function ajouterSeance(
  journeeId: string,
  s: {
    matiere: string;
    titre: string;
    consigne: string;
    minutes: number;
    reference?: string;
    lecon?: string;
    parAdulte: string | null;
  },
) {
  /* Ajoutée par un adulte, donc `main` : le ton du jour n'y touchera pas.

     Jamais dans une journée refermée. Elle se rouvrait quand un adulte y
     ajoutait quelque chose ; le parrain l'a tranché le 21 septembre 2026 : quand
     l’enfant a fini sa journée, pour lui c'est terminé, et ce qui doit encore
     se faire se place un autre jour. Une journée **arrêtée** non plus : ce
     qu'on y poserait l'attendrait s'il la reprenait. */
  const n = await executer(
    `insert into seance (journee_id, rang, matiere, titre, reference, consigne, minutes, lecon, par_adulte, origine)
     select $1::uuid,
            coalesce((select max(rang) + 1 from seance where journee_id = $1), 1),
            $2::text, $3::text, $4::text, $5::text, $6::int, $7::text, $8::uuid, 'main'
      where exists (select 1 from journee where id = $1 and cloture is null)`,
    [
      journeeId,
      s.matiere,
      s.titre,
      s.reference ?? "",
      s.consigne || "Prends le temps qu’il te faut, il n’y a rien à rendre.",
      s.minutes,
      s.lecon ?? "",
      s.parAdulte,
    ],
  );
  return n > 0;
}

/**
 * Déplacer une séance d'un cran dans la journée.
 *
 * Les rangs sont échangés avec le voisin, dans une seule requête : deux
 * `update` séparés laisseraient une fraction de seconde où les deux séances
 * portent le même rang, et l'écran de l'enfant pourrait les afficher dans un
 * ordre indéterminé pendant ce temps-là.
 *
 * Comme partout, la journée est retrouvée côté serveur : le `journee_id` dans
 * la clause est ce qui empêche de faire bouger la séance d'une autre famille.
 */
export async function deplacerSeance(
  journeeId: string,
  seanceId: string,
  sens: "haut" | "bas",
) {
  const comparaison = sens === "haut" ? "<" : ">";
  const tri = sens === "haut" ? "desc" : "asc";
  await executer(
    `with moi as (
       select id, rang from seance where id = $1 and journee_id = $2
     ), voisine as (
       select s.id, s.rang from seance s, moi
        where s.journee_id = $2 and s.rang ${comparaison} moi.rang
        order by s.rang ${tri} limit 1
     )
     update seance s set rang = case
         when s.id = moi.id then voisine.rang
         else moi.rang
       end
       from moi, voisine
      where s.id in (moi.id, voisine.id) and s.journee_id = $2`,
    [seanceId, journeeId],
  );
}

/**
 * Poser la trame sur une journée — **et seulement si elle est vide**.
 *
 * L'idempotence n'est pas un raffinement ici : « remplir la semaine » sera
 * cliqué deux fois, par distraction ou par doute, et une journée en double
 * serait vue par l'enfant avant par un adulte. Une journée déjà écrite n'est
 * donc jamais touchée — ce qu'un parent a composé ou modifié à la main gagne
 * toujours contre la trame.
 *
 * Tout est inséré en une seule requête, avec les rangs explicites : c'est
 * l'ordre de la trame qui fait l'ordre de la journée.
 *
 * `par_adulte` reste **nul**, et c'est important. L'écran de l'enfant écrit
 * « ajouté par papa » sous une séance qui porte un adulte, pour dire « une
 * personne a choisi ça pour toi aujourd'hui ». La première version attribuait
 * la trame à celui qui avait cliqué : les mille treize séances de l'année
 * portaient donc « ajouté par papa », ce qui détruit exactement le signal
 * qu'on voulait donner. La trame n'est de personne — c'est le programme.
 */
export async function poserLaTrame(
  journeeId: string,
  creneaux: {
    matiere: string;
    titre: string;
    consigne: string;
    minutes: number;
    lecon?: string;
    fiche?: string;
  }[],
) {
  if (creneaux.length === 0) return { pose: false, raison: "rien à poser" };

  const dejaLa = await ligne<{ n: string; cloture: ClotureJour | null }>(
    `select (select count(*) from seance where journee_id = $1)::text as n, cloture
       from journee where id = $1`,
    [journeeId],
  );
  /* Refermée : pour lui c'est terminé, même vide. Voir `ajouterSeance`. */
  if (dejaLa?.cloture) return { pose: false, raison: "journée refermée" };
  if (Number(dejaLa?.n ?? "0") > 0) return { pose: false, raison: "déjà écrite" };

  const { sql, valeurs } = insertionDeTrame(journeeId, creneaux, (i) => i + 1);
  await executer(sql, valeurs);
  return { pose: true, raison: "" };
}

/**
 * L'insertion des séances de la trame, écrite une seule fois.
 *
 * Il y en avait deux copies, une pour écrire la journée et une pour la
 * rétablir quand on repasse en « normale ». La migration 012 a ajouté la
 * colonne `fiche` aux deux listes de colonnes, mais sa valeur à une seule :
 * onze colonnes pour dix expressions, et Postgres refusait tout retour d'une
 * journée allégée ou de repos vers la normale. Trouvé le 16 septembre 2026, le
 * premier jour réel, par les parents. Une seule copie, donc, et
 * `test/journee.test.ts` compte les expressions de chaque ligne.
 *
 * `rang` est un nombre écrit dans la requête, jamais une valeur venue de
 * l'extérieur : c'est la position calculée par l'appelant.
 */
export const COLONNES_TRAME = [
  "journee_id", "rang", "matiere", "titre", "reference", "consigne",
  "minutes", "lecon", "fiche", "par_adulte", "origine",
] as const;

export function insertionDeTrame(
  journeeId: string,
  creneaux: CreneauVoulu[],
  rang: (i: number) => number,
) {
  const valeurs: unknown[] = [journeeId];
  const lignesSql = creneaux.map((c, i) => {
    const d = valeurs.length;
    valeurs.push(c.matiere, c.titre, c.consigne, c.minutes, c.lecon ?? "", c.fiche ?? "");
    const r = Math.trunc(rang(i));
    return `($1, ${r}, $${d + 1}, $${d + 2}, '', $${d + 3}, $${d + 4}, $${d + 5}, $${d + 6}, null, 'trame')`;
  });
  return {
    sql: `insert into seance (${COLONNES_TRAME.join(", ")})
     values ${lignesSql.join(", ")}`,
    lignes: lignesSql,
    valeurs,
  };
}

/* ------------------------------------------------------------------ */
/* Accorder une journée à son ton                                      */
/* ------------------------------------------------------------------ */

/** Ce qu'il faut savoir d'une séance en base pour décider quoi en faire. */
export type SeanceAAccorder = {
  id: string;
  titre: string;
  origine: "trame" | "main";
  etat: EtatSeance;
  rang: number;
  /**
   * Il y a du travail dedans : des exercices inscrits, ou un résultat noté par
   * un adulte. Le ton ne la retire pas — mais elle **reste une séance de la
   * trame**, reconnue par son titre. La première version la faisait passer
   * pour écrite à la main, et le ton la reposait à côté d'elle-même : une leçon
   * finie ou mise de côté revenait à faire, exercices vierges.
   */
  commencee?: boolean;
};

/** Un créneau de la trame, tel que `selonLeTon` le rend. */
export type CreneauVoulu = {
  matiere: string;
  titre: string;
  consigne: string;
  minutes: number;
  lecon?: string;
  fiche?: string;
};

/**
 * Décider ce que le ton fait à une journée — **sans toucher à la base.**
 *
 * C'est le code le plus risqué du dépôt : il supprime, il insère et il
 * renumérote la journée d'un enfant. Il était enfoui dans quatre requêtes SQL
 * et personne ne pouvait le tester sans base. La décision est donc ici, pure,
 * et `accorderAuTon` ne fait que l'appliquer. `test/journee.test.ts` la
 * déroule sur les cas qui font mal.
 *
 * Ce qu'elle rend : les séances à retirer, celles à ajouter, et **l'ordre
 * complet de la journée** une fois le geste fait — une clé par séance,
 * l'identifiant pour celles qui existent, `nouveau:<titre>` pour celles qu'on
 * ajoute.
 *
 * L'ordre respecte deux choses à la fois. Ce qui reste garde sa place : une
 * séance qu'un adulte a déplacée à la main ne saute pas en queue de journée
 * parce qu'on a cliqué sur « allégée », et une séance déjà faite ne se
 * retrouve pas sous celle qu'il est en train de faire — la première version
 * faisait les deux. Et ce qu'on remet revient **à sa place dans la trame** :
 * juste après le créneau de trame qui le précède, ou juste avant celui qui le
 * suit, ou en tête s'il n'y a plus rien de la trame dans la journée.
 *
 * Les séances de la trame sont reconnues par leur titre : c'est tout ce
 * qu'elles ont de stable, et `test/trame.test.ts` garantit que deux créneaux
 * d'un même jour n'en partagent jamais un. Les séances écrites à la main ne
 * sont jamais comparées par leur titre — elles ne sont jamais comparées du
 * tout : un parent peut écrire « Lecture libre » sans que ça la confonde avec
 * le rituel.
 *
 * `ailleurs` : les créneaux de ce jour qu'un adulte a **déplacés vers un autre
 * jour** (migration 025). Ils ne sont plus voulus ici — sans ça, le premier
 * clic sur « allégée » ou « normale » les reposait dans la journée qu'ils
 * venaient de quitter, et la même dictée tombait deux fois.
 */
export function accorder(
  existantes: SeanceAAccorder[],
  tousLesVoulus: { titre: string }[],
  ailleurs: Iterable<string> = [],
) {
  const partis = new Set(ailleurs);
  const voulus = tousLesVoulus.filter((v) => !partis.has(v.titre));
  const titresVoulus = new Set(voulus.map((v) => v.titre));

  const aRetirer = existantes
    .filter(
      (s) =>
        s.origine === "trame" && s.etat === "a-venir" && !s.commencee && !titresVoulus.has(s.titre),
    )
    .map((s) => s.id);
  const retirees = new Set(aRetirer);

  const restantes = existantes
    .filter((s) => !retirees.has(s.id))
    .sort((x, y) => x.rang - y.rang);
  const presents = new Set(restantes.filter((s) => s.origine === "trame").map((s) => s.titre));
  const aAjouter = voulus.filter((v) => !presents.has(v.titre));

  const ordre: { cle: string; titre: string | null }[] = restantes.map((s) => ({
    cle: s.id,
    titre: s.origine === "trame" ? s.titre : null,
  }));
  const positionDe = (titre: string) => ordre.findIndex((o) => o.titre === titre);

  for (const v of aAjouter) {
    const k = voulus.findIndex((x) => x.titre === v.titre);
    let ou = -1;
    for (let j = k - 1; j >= 0 && ou < 0; j--) {
      const i = positionDe(voulus[j].titre);
      if (i >= 0) ou = i + 1;
    }
    for (let j = k + 1; j < voulus.length && ou < 0; j++) {
      const i = positionDe(voulus[j].titre);
      if (i >= 0) ou = i;
    }
    ordre.splice(ou < 0 ? 0 : ou, 0, { cle: `nouveau:${v.titre}`, titre: v.titre });
  }

  return {
    aRetirer,
    aAjouter: aAjouter.map((v) => v.titre),
    ordre: ordre.map((o) => o.cle),
  };
}

/**
 * Accorder les séances de la trame au ton choisi.
 *
 * Le ton du jour était décoratif : trois boutons qui changeaient une colonne et
 * rien d'autre. Le parrain l'a vu tout de suite. Maintenant il agit, sous trois
 * garanties :
 *
 *   - **Seules les séances de la trame bougent.** Ce qu'un adulte a écrit à la
 *     main, ou est allé chercher dans la bibliothèque, reste. Effacer une
 *     décision humaine parce qu'on a cliqué sur « allégée » serait un piège.
 *   - **Seules les séances encore à venir bougent.** Rien de ce que l'enfant a
 *     déjà fait ou mis de côté n'est touché : son travail ne se réécrit pas.
 *   - **C'est réversible.** Repasser en « normale » remet ce qui avait été
 *     retiré, parce que la trame se recalcule au lieu d'être stockée.
 *
 * Les séances retirées sont **supprimées**, pas marquées « reportées » : une
 * journée allégée n'est pas une journée en retard, et faire gonfler le décompte
 * « à replacer » chaque fois qu'on allège donnerait à un parent le sentiment
 * d'accumuler une dette. Ce qui n'a pas été donné se retrouve ailleurs — dans
 * le rattrapage, qui regarde le programme et non les séances.
 *
 * La décision vient d'`accorder()` ; ici on l'applique, dans une transaction
 * et avec les lignes verrouillées : deux adultes qui cliquent sur deux tons
 * en même temps ne peuvent pas laisser la journée à moitié réécrite.
 */
export async function accorderAuTon(
  journeeId: string,
  ton: TonJour,
  /* `null` : un jour que la trame ne prévoit pas — on change le ton, on ne
     réécrit rien. */
  voulus: CreneauVoulu[] | null,
  /* Qui change le ton : l'autre maison le lit sous les boutons (migration 021). */
  parAdulte: string | null = null,
) {
  return transaction(async (q) => {
    /* Tout ou rien, et un seul adulte à la fois : la journée est verrouillée
       avant d'être lue. Le ton, le retrait de la partie du test et les
       séances passaient avant en trois écritures séparées — une panne entre
       deux laissait « repos » en base avec toutes les séances encore là. */
    const [j] = await q<{ jour: string; famille_id: string; cloture: ClotureJour | null }>(
      `select jour::text, famille_id, cloture from journee where id = $1 for update`,
      [journeeId],
    );
    /* Une journée refermée — il l'a finie, ou il l'a arrêtée — ne change plus :
       pour lui, c'est terminé. « Normale » sur une journée allégée qu'il avait
       finie y reposait des séances qu'il ne pouvait plus ouvrir (le parrain, le
       21 septembre 2026 : « pour l’enfant c'est terminé »). */
    if (!j || j.cloture !== null) return null;
    /* Un clic sur le ton déjà choisi ne change ni qui l'a choisi, ni la
       journée : elle ne devient « retouchée » — soustraite pour toujours aux
       corrections de la trame — que si quelque chose bouge vraiment. */
    const change = await q<{ id: string }>(
      `update journee set ton = $2, retouchee_le = now(), ton_par = $3, ton_le = now()
        where id = $1 and ton <> $2 returning id`,
      [journeeId, ton, parAdulte],
    );
    const retoucher = () =>
      q(`update journee set retouchee_le = now() where id = $1`, [journeeId]);
    /* La partie du test n'est que des journées normales. Revenue à la
       normale, elle se repose d'elle-même au prochain affichage. */
    if (ton !== "normale")
      await q(`delete from seance where journee_id = $1 and test and etat = 'a-venir'`, [
        journeeId,
      ]);
    if (!voulus) return null;

    const existantes = await q<SeanceAAccorder>(
      /* Intouchables par le ton :
         - la partie du test, que le ton ne déplace pas : elle compte comme
           écrite à la main ;
         - **une séance commencée** : une leçon dont il a déjà fait des
           exercices, ou une séance dont un adulte a noté le résultat. Elle
           reste « à venir » tant qu'il n'a pas fini — et la supprimer
           effaçait son travail en cascade. Constaté le 16 septembre 2026 :
           quatre exercices sur huit, un parent passe en « repos », et le
           relevé du soir ne montrait plus rien. Elle garde son origine : la
           faire passer pour écrite à la main la faisait reposer en double,
           vierge, par le premier clic sur un ton (critique du 16 septembre
           au soir) ;
         - **une séance venue d'un autre jour** (migration 025) : elle n'est
           pas un créneau de cette date, et un adulte l'a voulue ici. */
      `select s.id, s.titre,
              case when s.test or (s.prevue_le is not null and s.prevue_le <> $2::date)
                   then 'main' else s.origine end as origine,
              (exists (select 1 from travail t where t.seance_id = s.id)
                or exists (select 1 from resultat_fiche r where r.seance_id = s.id)) as commencee,
              s.etat, s.rang
         from seance s
        where s.journee_id = $1 order by s.rang, s.cree_le for update`,
      [journeeId, j.jour],
    );
    /* Les créneaux de cette date partis vers un autre jour. */
    const ailleurs = await q<{ titre: string }>(
      `select s.titre from seance s join journee a on a.id = s.journee_id
        where a.famille_id = $1 and s.prevue_le = $2::date and a.id <> $3`,
      [j.famille_id, j.jour, journeeId],
    );
    const plan = accorder(existantes, voulus, ailleurs.map((x) => x.titre));
    if (change.length === 0 && (plan.aRetirer.length > 0 || plan.aAjouter.length > 0))
      await retoucher();

    if (plan.aRetirer.length > 0) {
      await q(
        `delete from seance
          where journee_id = $1 and origine = 'trame' and etat = 'a-venir'
            and prevue_le is null and id = any($2::uuid[])`,
        [journeeId, plan.aRetirer],
      );
    }

    const identifiants = new Map<string, string>();
    if (plan.aAjouter.length > 0) {
      const ajouts = voulus.filter((c) => plan.aAjouter.includes(c.titre));
      /* Rang 0 : la renumérotation juste en dessous place chacune. */
      const { sql, valeurs } = insertionDeTrame(journeeId, ajouts, () => 0);
      const inserees = await q<{ id: string; titre: string }>(
        `${sql} returning id, titre`,
        valeurs,
      );
      for (const s of inserees) identifiants.set(`nouveau:${s.titre}`, s.id);
    }

    const ordonnes = plan.ordre.map((cle) => identifiants.get(cle) ?? cle);
    await q(
      `update seance s set rang = v.rang
         from unnest($2::uuid[], $3::int[]) as v(id, rang)
        where s.id = v.id and s.journee_id = $1`,
      [journeeId, ordonnes, ordonnes.map((_, i) => i + 1)],
    );

    return { retirees: plan.aRetirer.length, ajoutees: plan.aAjouter.length };
  });
}

/** Retirer, toujours dans la journée de l'appelant. Voir `bouger`. */
export async function retirerSeance(journeeId: string, seanceId: string) {
  /* Jamais une séance où il y a du travail : la suppression emportait en
     cascade ses exercices ou le résultat noté, sur un seul clic. */
  const retiree = await ligne<{ test: boolean }>(
    `delete from seance s where s.id = $1 and s.journee_id = $2
        and not exists (select 1 from travail t where t.seance_id = s.id)
        and not exists (select 1 from resultat_fiche r where r.seance_id = s.id)
      returning s.test`,
    [seanceId, journeeId],
  );
  /* Retirée par un adulte, la partie du test ne revient pas d'elle-même ce
     jour-là. */
  if (retiree?.test) {
    await executer(`update journee set sans_test = true where id = $1`, [journeeId]);
  }
}

/**
 * Faire passer une séance dans la journée d'un autre jour.
 *
 * Retirer n'était pas déplacer : un parent a retiré deux séances de mardi pour
 * les faire lundi, et rien ne permettait de les poser ailleurs (21 septembre
 * 2026). Où elles ont le droit d'aller est dans `lib/deplacer.ts` ; ici on le
 * redemande à la base, les deux journées verrouillées.
 *
 * Ce qui part : ce que « retirer » accepte, et rien de plus — une séance
 * encore à venir, sans travail dedans, qui n'est pas la partie du test.
 * Ce qui reçoit : une journée ouverte, qui n'est pas un jour de repos. Elle y
 * arrive **en fin de journée**, après ce qu'il a déjà fait ; un adulte la
 * remonte ensuite s'il veut.
 *
 * Une séance de la trame garde son origine et retient la date qui l'avait
 * prévue (`prevue_le`, migration 025) : le ton ne la retire pas de la
 * journée qui l'accueille, et ne la repose pas dans celle qu'elle a quittée.
 * Revenue chez elle, elle redevient un créneau comme les autres.
 *
 * Une journée d'arrivée qui n'a jamais été écrite reçoit d'abord sa trame :
 * seule dedans, la séance l'aurait rendue « déjà écrite », et « écrire cette
 * journée » ne l'aurait plus jamais complétée.
 */
export async function deplacerVers(
  departId: string,
  arriveeId: string,
  seanceId: string,
  trameDArrivee: CreneauVoulu[],
): Promise<{ titre: string } | null> {
  if (departId === arriveeId) return null;
  return transaction(async (q) => {
    /* Dans l'ordre des identifiants : deux adultes qui déplacent en sens
       inverse au même moment ne s'attendent pas l'un l'autre à l'infini. */
    const journees = await q<{
      id: string;
      jour: string;
      ton: TonJour;
      cloture: ClotureJour | null;
      retouchee: boolean;
    }>(
      `select id, jour::text, ton, cloture, retouchee_le is not null as retouchee
         from journee where id = any($1::uuid[]) order by id for update`,
      [[departId, arriveeId]],
    );
    const depart = journees.find((j) => j.id === departId);
    const arrivee = journees.find((j) => j.id === arriveeId);
    if (!depart || !arrivee) return null;
    if (arrivee.cloture !== null || arrivee.ton === "repos") return null;

    const [partante] = await q<{ id: string }>(
      `select s.id from seance s
        where s.id = $1 and s.journee_id = $2 and s.etat = 'a-venir' and not s.test
          and not exists (select 1 from travail t where t.seance_id = s.id)
          and not exists (select 1 from resultat_fiche r where r.seance_id = s.id)
        for update`,
      [seanceId, departId],
    );
    if (!partante) return null;

    const [deja] = await q<{ n: number }>(
      `select count(*)::int as n from seance where journee_id = $1`,
      [arriveeId],
    );
    if (deja.n === 0 && !arrivee.retouchee && trameDArrivee.length > 0) {
      const { sql, valeurs } = insertionDeTrame(arriveeId, trameDArrivee, (i) => i + 1);
      await q(sql, valeurs);
    }

    const [deplacee] = await q<{ titre: string }>(
      `update seance s
          set journee_id = $2,
              rang = (select coalesce(max(rang), 0) + 1 from seance where journee_id = $2),
              prevue_le = case
                when s.origine <> 'trame' then null
                when coalesce(s.prevue_le, $3::date) = $4::date then null
                else coalesce(s.prevue_le, $3::date)
              end
        where s.id = $1 and s.journee_id = $5
        returning s.titre`,
      [seanceId, arriveeId, depart.jour, arrivee.jour, departId],
    );
    /* Les deux journées sont retouchées : la trame ne réécrira ni celle qui a
       perdu la séance, ni celle qui l'a reçue (migration 019). */
    await q(`update journee set retouchee_le = now() where id = any($1::uuid[])`, [
      [departId, arriveeId],
    ]);
    return deplacee ?? null;
  });
}

/* ------------------------------------------------------------------ */
/* Le ressenti                                                         */
/* ------------------------------------------------------------------ */

export type Ressenti = { choix: RessentiMot | null; mot: string };

export async function ressentiDe(journeeId: string) {
  return ligne<Ressenti>(
    `select choix, mot from ressenti where journee_id = $1`,
    [journeeId],
  );
}

/**
 * L'heure où il a dit comment il se sent, sans ce qu'il a dit — ou `null`.
 *
 * Pour savoir si le mot du jour a été lu. **À n'appeler que pour un parent** :
 * le proche ne lit pas le soir, et savoir qu'il est passé en dit déjà un peu.
 */
export async function ressentiDeposeLe(journeeId: string): Promise<Date | null> {
  const r = await ligne<{ depose_le: Date }>(
    `select depose_le from ressenti where journee_id = $1`,
    [journeeId],
  );
  return r?.depose_le ?? null;
}

export async function deposerRessenti(
  journeeId: string,
  choix: RessentiMot | null,
  mot: string,
) {
  await executer(
    `insert into ressenti (journee_id, choix, mot) values ($1, $2, $3)
     on conflict (journee_id) do update
       set choix = excluded.choix, mot = excluded.mot, depose_le = now()`,
    [journeeId, choix, mot],
  );
}
