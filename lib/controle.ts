/**
 * Le mode contrôle — ce qu'on ouvre le jour de l'inspection.
 *
 * L'instruction en famille de l'enfant est autorisée au titre de son état de
 * santé, pour une année scolaire, et un inspecteur de l'Éducation nationale le
 * contrôle au moins une fois par an. Ce jour-là, quelqu'un va demander à voir.
 * S'il regarde l'application par-dessus l'épaule d'un parent, il tombe sur le
 * journal du soir et sur des phrases que l'enfant a écrites pour ses parents.
 * `/controle` est l'écran qu'on lui ouvre : il montre **l'instruction**, et il
 * annonce en tête ce qu'il retire.
 *
 * Le cercle de lecture court (règle n° 10) est ici opposé à l'administration,
 * pour la même raison qu'ailleurs : on a dit à l'enfant qui lit ce qu'il
 * dépose, et la liste ne comprend pas l'inspection.
 *
 * Le POC montrait les livrets du CNED et les devoirs qui lui étaient adressés.
 * Il n'y en a plus : l'instruction, aujourd'hui, c'est le manuel de
 * l'application et la trame de l'année, plus ce qui se passe hors de la table.
 *
 * ## Deux gardes, l'une derrière l'autre
 *
 *   - **La lecture ne touche pas au suivi.** Aucune requête de ce fichier, ni
 *     de ceux qu'il appelle, ne lit `ressenti`, `mot`, `consigne`, `reponse`
 *     ni `travail`, ni les colonnes `note` et `cloture` de la journée, ni la
 *     préparation du parrain, ni les questions encore en cours. Ce qui n'est
 *     pas lu ne peut pas fuiter.
 *   - **La projection ne recopie jamais une ligne** : elle en choisit les
 *     champs, un par un. Les modules des autres écrans rendent des lignes plus
 *     larges que ce qu'on montre ici — une leçon du manuel porte ses réponses,
 *     une question porte la préparation du parrain —, et une projection qui
 *     ferait `...ligne` les laisserait passer le jour où quelqu'un les
 *     afficherait « pour compléter ». `test/controle.test.ts` lui passe donc
 *     des lignes entières, truffées de chaînes témoins, et vérifie qu'aucune
 *     n'en sort.
 *
 * ## Des faits
 *
 * Des jours, des durées, des leçons, des sorties, des questions explorées, des
 * objets fabriqués. Pas de taux, pas de retard, rien de rapporté à ce qui était
 * prévu : le rythme prévu figure dans le cadre, et rien ne le divise. Ce qui a
 * été mis de côté, ce qui reste à rattraper, la façon dont une journée s'est
 * terminée — tout cela relève du suivi, et n'apparaît pas.
 */

import { lignes } from "./base";
import type { EtatSeance } from "./journee";
import { bilanDeLAnnee, DERNIER_JOUR, JOUR_DU_TEST, ZONE } from "./trame";
import { lecons, type Lecon } from "./programme";
import { matieres, type MatiereId } from "./data";
import {
  enToutesLettres,
  matieresCouvertes,
  matieresDe,
  sortiesDeLaPeriode,
  type Sortie,
} from "./sorties";
import { grouperParDomaine, personnesDe, type Membre, type Question } from "./pourquoi";
import { estMatiere, jourDe, tracesDe, type LigneTrace } from "./valorisation";

/* ------------------------------------------------------------------ */
/* L'année                                                             */
/* ------------------------------------------------------------------ */

/**
 * Le début de ce que le contrôle regarde : la rentrée, le 1er septembre.
 *
 * Pas le jour du test. L'autorisation vaut pour l'année scolaire, qui commence
 * à la rentrée — c'est aussi le début de la période 1 dans `lib/trame.ts` —, et
 * une sortie notée le samedi 12 septembre en fait partie. La borner au
 * 16 septembre la retirerait d'une pièce remise à l'inspection, sans rien dire.
 *
 * Calculée depuis l'année du jour du test plutôt qu'écrite une seconde fois :
 * le jour où la trame passera à l'année suivante, cette borne suivra.
 */
export const DEBUT_DE_L_ANNEE = `${JOUR_DU_TEST.slice(0, 4)}-09-01`;

/* Le bilan de la trame ne dépend d'aucune donnée : il se calcule une fois. */
let BILAN: { joursTravailles: number; heures: number } | null = null;
function bilan() {
  if (!BILAN) {
    const b = bilanDeLAnnee();
    BILAN = { joursTravailles: b.joursTravailles, heures: b.heures };
  }
  return BILAN;
}

/* ------------------------------------------------------------------ */
/* Ce qui est lu                                                       */
/* ------------------------------------------------------------------ */

/** Une séance, telle que le contrôle la lit : cinq colonnes, pas une de plus. */
export type SeanceLue = {
  /** `AAAA-MM-JJ`, le jour de la journée qui la porte. */
  jour: string;
  matiere: string;
  /** La durée prévue. Rien ne chronomètre l'enfant, et l'écran le dit. */
  minutes: number;
  /** Le code d'une leçon du manuel, ou vide. */
  lecon: string;
  etat: EtatSeance;
};

/** D'une leçon du manuel, le contrôle ne connaît que ceci. */
export type LeconDuManuel = Pick<Lecon, "code" | "titre" | "matiere">;

export type DonneesDuControle = {
  /** Le jour de consultation, `AAAA-MM-JJ`, à Paris. Rien d'après ne compte. */
  arreteAu: string;
  personnes: Membre[];
  bilan: { joursTravailles: number; heures: number };
  manuel: LeconDuManuel[];
  seances: SeanceLue[];
  sorties: Sortie[];
  questions: Question[];
  traces: LigneTrace[];
};

/**
 * Tout ce que l'écran du contrôle a besoin de savoir, et rien d'autre.
 *
 * Chaque lecture est bornée à l'année scolaire et au jour de consultation.
 * `arreteAu` vient de `aujourdhui()`, donc de Paris : une sortie notée pour
 * demain n'y entre pas à vingt-trois heures trente.
 */
export async function lireLeControle(
  familleId: string,
  arreteAu: string,
): Promise<DonneesDuControle> {
  const [seances, sorties, questions, traces, personnes] = await Promise.all([
    /* Une séance menée avec une fiche dont un adulte a noté le résultat
       compte comme faite : sans ça, une dictée menée un matin où il n'a pas
       cliqué « J'ai fini » n'entrait pas dans l'instruction montrée à
       l'inspecteur (critique du 16 septembre 2026).

       Les séances faites seulement. Ni le titre ni la consigne : l'écran ne
       montre pas les séances une à une, et une consigne écrite à la main un
       jour difficile peut en dire plus long qu'une durée. */
    lignes<SeanceLue>(
      `select j.jour::text as jour, s.matiere, s.minutes, s.lecon, case when (s.etat = 'faite' or exists (select 1 from resultat_fiche rf where rf.seance_id = s.id)) then 'faite' else s.etat::text end as etat
         from seance s
         join journee j on j.id = s.journee_id
        where j.famille_id = $1
          and (s.etat = 'faite' or exists (select 1 from resultat_fiche rf where rf.seance_id = s.id))
          /* La partie du test est une évaluation, pas de l'instruction : elle
             sortait sous « À la maison » dans un document qui annonce ne
             contenir « aucune évaluation » (seconde critique du 16 septembre). */
          and not s.test
          and j.jour between $2::date and $3::date
        order by j.jour, s.rang`,
      [familleId, DEBUT_DE_L_ANNEE, arreteAu],
    ),

    sortiesDeLaPeriode(familleId, DEBUT_DE_L_ANNEE, arreteAu),

    /* Les questions explorées, lues ici plutôt que par `questionsDe` : celle-ci
       rend aussi la préparation du parrain et les questions encore en cours,
       que l'écran jetterait ensuite. On ne les lit pas du tout.

       Le texte de la question non plus : ce sont ses mots, et la boîte à
       pourquoi lui promet qu'ils vont à son parrain et à ses parents — pas
       dans un dossier d'inspection. Le récit du parrain dit ce qui a été
       exploré. Texte et préparation sont remis à vide pour garder la forme
       d'une `Question`, que `grouperParDomaine` attend. */
    lignes<Omit<Question, "preparation" | "texte">>(
      `select id, etat, domaine, trace, deposee_le,
              exploree_le::text as exploree_le
         from question
        where famille_id = $1 and etat = 'exploree'
        order by exploree_le, deposee_le, id`,
      [familleId],
    ).then((qs) => qs.map((q): Question => ({ ...q, texte: "", preparation: "" }))),

    tracesDe(familleId),
    personnesDe(familleId),
  ]);

  return {
    arreteAu,
    personnes,
    bilan: bilan(),
    manuel: lecons,
    seances,
    sorties,
    questions,
    traces,
  };
}

/* ------------------------------------------------------------------ */
/* Ce que l'écran montre                                               */
/* ------------------------------------------------------------------ */

export type MatiereMontree = { id: string; nom: string; teinte: string };

export type VueDuControle = {
  enfant: string;
  /** « lundi 14 septembre 2026 ». */
  arreteAu: string;
  /** Ce que cet écran retire, dit en clair, avant tout le reste. */
  retire: string[];
  cadre: {
    regime: string;
    niveau: string;
    annee: string;
    du: string;
    au: string;
    academie: string;
    rythme: { jours: number; heures: number };
    manuel: { lecons: number; matieres: number };
  };
  instruction: {
    /** Les jours où au moins une séance a été faite. */
    jours: number;
    duree: string;
    matieres: (MatiereMontree & {
      /** `null` : aucune séance faite dans cette matière. */
      duree: string | null;
      /** Le nombre de leçons du manuel pour l'année. Zéro hors manuel. */
      leconsDeLAnnee: number;
      /** Les leçons travaillées, dans l'ordre du manuel. */
      travaillees: { code: string; titre: string }[];
    })[];
  };
  sorties: {
    passees: {
      id: string;
      date: string;
      titre: string;
      lieu: string;
      quoi: string;
      matieres: MatiereMontree[];
    }[];
    couvertes: MatiereMontree[];
  };
  explorations: {
    id: string;
    domaine: string;
    teinte: string;
    questions: { id: string; trace: string; date: string }[];
  }[];
  traces: {
    id: string;
    titre: string;
    quoi: string;
    matiere: MatiereMontree | null;
    date: string;
  }[];
};

/** « 45 min », « 3 h », « 12 h 05 » — avec des espaces insécables. */
export function enHeures(minutes: number) {
  const h = Math.floor(minutes / 60);
  const m = minutes % 60;
  if (h === 0) return `${m} min`;
  return m === 0 ? `${h} h` : `${h} h ${String(m).padStart(2, "0")}`;
}

const montree = (id: MatiereId): MatiereMontree => ({
  id,
  nom: matieres[id].nom,
  teinte: matieres[id].teinte,
});

/**
 * La projection du contrôle. Pure : pas de base, pas d'horloge.
 *
 * Elle reçoit des lignes, et elle en rend des faits arrêtés au jour de
 * consultation. Chaque champ de sortie est nommé ici ; aucune ligne d'entrée
 * n'est recopiée telle quelle, et c'est ce qui la rend sûre même quand on lui
 * passe plus qu'elle n'en demande.
 */
export function projeterLeControle(d: DonneesDuControle): VueDuControle {
  const dedans = (jour: string) => jour >= DEBUT_DE_L_ANNEE && jour <= d.arreteAu;

  const enfant = d.personnes.find((p) => p.role === "enfant")?.prenom ?? "l’enfant";

  /* ---- L'instruction donnée ---------------------------------------- */

  /* La lecture ne rend que des séances faites ; le filtre est refait ici, pour
     que la projection ne compte jamais une séance mise de côté ou à venir,
     quoi qu'on lui passe. */
  const faites = d.seances.filter((s) => s.etat === "faite" && dedans(s.jour));

  const minutesPar = new Map<string, number>();
  for (const s of faites) minutesPar.set(s.matiere, (minutesPar.get(s.matiere) ?? 0) + s.minutes);

  /* Une leçon compte une fois, qu'elle ait été donnée puis reprise. Et elle
     compte dans **sa** matière, celle du manuel : une leçon de sciences posée à
     la main sous « à la maison » reste une leçon de sciences. Un code que le
     manuel ne connaît plus ne compte nulle part — il n'a pas de titre à
     montrer, et il ferait dépasser le total de l'année. Sa durée, elle, compte :
     la séance a eu lieu. */
  const codesFaits = new Set(faites.map((s) => s.lecon).filter((c) => c !== ""));

  const avecLecons = new Set(d.manuel.map((l) => l.matiere));
  const ordre: string[] = [
    ...(Object.keys(matieres) as MatiereId[]).filter(
      (id) => avecLecons.has(id) || minutesPar.has(id),
    ),
    /* Une matière que `lib/data.ts` ne connaît plus garde sa ligne et son
       temps, sous son identifiant : le temps total doit rester la somme des
       lignes, sinon le document se contredit. */
    ...[...minutesPar.keys()].filter((id) => !estMatiere(id)),
  ];

  const parMatiere = ordre.map((id) => {
    const connue = estMatiere(id) ? montree(id) : { id, nom: id, teinte: "encre-douce" };
    const duManuel = d.manuel.filter((l) => l.matiere === id);
    const minutes = minutesPar.get(id) ?? 0;
    return {
      ...connue,
      duree: minutes > 0 ? enHeures(minutes) : null,
      leconsDeLAnnee: duManuel.length,
      travaillees: duManuel
        .filter((l) => codesFaits.has(l.code))
        .map((l) => ({ code: l.code, titre: l.titre })),
    };
  });

  /* ---- Les sorties ------------------------------------------------- */

  /* Celles qui ont eu lieu. Une sortie notée d'avance pour la semaine
     prochaine n'est pas de l'instruction donnée. */
  const passees = d.sorties
    .filter((s) => dedans(s.jour))
    .sort((a, b) => a.jour.localeCompare(b.jour));

  /* ---- Ce qui a été exploré hors du manuel ------------------------- */

  /* `grouperParDomaine` ne garde que les questions explorées, et ne rend ni la
     préparation ni l'état : la question encore en cours et les notes du
     parrain s'arrêtent là. */
  const explorations = grouperParDomaine(d.questions)
    .map((g) => ({
      id: g.domaine.id,
      domaine: g.domaine.libelle,
      teinte: g.domaine.teinte,
      questions: g.questions
        .filter((q) => dedans(q.exploree_le))
        .map((q) => ({
          id: q.id,
          trace: q.trace,
          date: enToutesLettres(q.exploree_le),
        })),
    }))
    .filter((g) => g.questions.length > 0);

  /* ---- Ce qu'il a fabriqué ----------------------------------------- */

  /* Le jour d'une trace est celui de Paris : notée à minuit moins le quart un
     21 septembre, elle est du 21, pas du 22 que dirait un serveur en UTC — ni
     du 20. Dans l'ordre où elles sont arrivées : ce document-ci se relit comme
     une chronologie, contrairement au cahier de l'enfant. */
  const traces = d.traces
    .map((t) => ({ t, jour: jourDe(t.cree_le) }))
    .filter(({ jour }) => dedans(jour))
    .sort((a, b) => a.t.cree_le.getTime() - b.t.cree_le.getTime())
    .map(({ t, jour }) => ({
      id: t.id,
      titre: t.titre,
      quoi: t.quoi,
      matiere: estMatiere(t.matiere) ? montree(t.matiere) : null,
      date: enToutesLettres(jour),
    }));

  /* ---- Le document -------------------------------------------------- */

  const annee = Number(JOUR_DU_TEST.slice(0, 4));

  return {
    enfant,
    arreteAu: enToutesLettres(d.arreteAu, { avecLeJour: true }),
    retire: [
      `les ressentis que ${enfant} dépose en fin de journée, et les mots qu’il y ajoute`,
      "les notes du soir de ses parents",
      "les mots que les adultes lui laissent",
      "les questions qu’il a posées, dans ses mots, et les notes de préparation de son parrain",
      /* Sans nommer qui les donne : ce document finit dans un dossier
         administratif, et le régime de l'instruction dit déjà ce qu'il faut. */
      "les consignes de son suivi",
      "le portrait du test de début d’année et les résultats de ses exercices",
      "les journées interrompues, et les séances mises de côté",
    ],
    cadre: {
      regime: "Instruction en famille, au titre de l’état de santé de l’enfant",
      niveau: "CM1",
      annee: `${annee}-${annee + 1}`,
      du: enToutesLettres(JOUR_DU_TEST, { avecLeJour: true }),
      au: enToutesLettres(DERNIER_JOUR, { avecLeJour: true }),
      academie: `${ZONE.academie} (zone ${ZONE.zone})`,
      rythme: { jours: d.bilan.joursTravailles, heures: d.bilan.heures },
      manuel: { lecons: d.manuel.length, matieres: avecLecons.size },
    },
    instruction: {
      jours: new Set(faites.map((s) => s.jour)).size,
      duree: enHeures(faites.reduce((t, s) => t + s.minutes, 0)),
      matieres: parMatiere,
    },
    sorties: {
      passees: passees.map((s) => ({
        id: s.id,
        date: enToutesLettres(s.jour, { avecLeJour: true }),
        titre: s.titre,
        lieu: s.lieu,
        quoi: s.quoi,
        matieres: matieresDe(s.matieres).map(montree),
      })),
      couvertes: matieresCouvertes(passees).map((m) => montree(m.id)),
    },
    explorations,
    traces,
  };
}
