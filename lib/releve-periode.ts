/**
 * Le relevé d'une période — le document que les parents impriment et
 * remettent. **Réservé aux parents.**
 *
 * À ne pas confondre avec `lib/releve.ts`, qui dit aux adultes ce qu'une
 * séance du programme a donné, exercice par exercice. Celui-ci est une pièce
 * datée, sur douze semaines, qui sort de la maison.
 *
 * Il a deux destinataires, et ils ne lisent pas la même chose :
 *
 *   - **le soignant** lit comment les journées se sont passées : la bande des
 *     douze semaines, ce qu'on peut en dire, et les notes du soir des parents ;
 *   - **l'inspection** lit ce qui a été étudié et fait : les séances menées,
 *     les sorties, ce qu'il a fabriqué, ce qu'il a exploré. Pas une journée
 *     arrêtée, pas une note du soir — un inspecteur contrôle une instruction,
 *     il n'a pas à lire l'anxiété d'un enfant. `/controle` retire la même
 *     chose, pour la même raison.
 *
 * Et une liste de ce qui n'y figure jamais, quel que soit le destinataire :
 * ce que l'enfant dépose le soir — son écran lui promet « Ça part chez papa
 * et maman. Personne d'autre ne le lit. », et un document remis au soignant
 * romprait cette promesse —, les mots que les adultes lui laissent, les
 * consignes du soignant, les résultats d'exercices, le portrait du test, et le
 * texte des questions qu'il a confiées à son parrain.
 *
 * ## Deux gardes, comme pour le contrôle
 *
 *   - **La lecture ne va pas chercher ce qui ne sort pas.** Aucune requête de
 *     ce fichier ne lit `ressenti`, `mot`, `consigne`, `reponse` ni `travail`.
 *     C'est pour ça que le relevé n'emprunte pas `journeesDeLaPeriode` au
 *     journal : elle rend le ressenti et les mots, qu'on jetterait aussitôt.
 *   - **La projection ne recopie jamais une ligne** : chaque champ de sortie
 *     est nommé. `test/releve-periode.test.ts` lui passe des lignes truffées de
 *     chaînes témoins et vérifie qu'aucune ne ressort, pour l'un comme pour
 *     l'autre destinataire.
 *
 * Tout ce qui décide est pur — la période, le destinataire, la projection. La
 * lecture en base est à la fin, et ne fait que remplir `DonneesDuReleve`.
 */

import { lignes } from "./base";
import {
  bornesDeLaBande,
  constatDe,
  construireBande,
  dateEnLettres,
  dateValide,
  decalerDe,
  etatDuJour,
  etatEnLettres,
  legendeDe,
  lundiDeLaSemaine,
  SEMAINES,
  type Constat,
  type LigneDeLegende,
  type NatureDuJour,
  type SemaineDeLaBande,
} from "./bande";
import type { ClotureJour, EtatSeance, TonJour } from "./journee";
import { natureSelonLaTrame, prenomDeLEnfant } from "./journal";
import { matieres, type MatiereId } from "./data";
import { matieresCouvertes, matieresDe, sortiesDeLaPeriode, type Sortie } from "./sorties";
import { estMatiere, jourDe, tracesDe, type LigneTrace } from "./valorisation";
import { exploreesParDomaine, type ExploreesDuDomaine } from "./pourquoi";
import { enHeures, type LeconDuManuel } from "./controle";
import { lecons } from "./programme";

/* ------------------------------------------------------------------ */
/* Le destinataire                                                     */
/* ------------------------------------------------------------------ */

export type Destinataire = "soignant" | "inspection";

/**
 * Sans destinataire dans l'adresse, c'est la version de l'inspection.
 *
 * Pas parce qu'elle sert le plus souvent — le soignant revient plus souvent que
 * l'inspecteur —, mais parce que c'est la moins bavarde. Un parent qui clique
 * sur « Le relevé » et imprime sans regarder l'en-tête remet au pire au soignant
 * un document incomplet ; dans l'autre sens, il remettrait à l'administration
 * la bande des arrêts et les notes du soir. Quand on se trompe de feuille,
 * c'est celle-ci qu'il vaut mieux avoir en main.
 */
export const DESTINATAIRE_PAR_DEFAUT: Destinataire = "inspection";

/** Ce que dit l'adresse, ramené à l'un des deux. Un paramètre répété ou inconnu ne choisit rien. */
export function destinataireDe(brut: unknown): Destinataire {
  return brut === "soignant" || brut === "inspection" ? brut : DESTINATAIRE_PAR_DEFAUT;
}

/* ------------------------------------------------------------------ */
/* La période                                                          */
/* ------------------------------------------------------------------ */

/**
 * La rentrée où le cahier a commencé. Avant, il n'y a rien à relever.
 *
 * Écrite en dur, et pas tirée de la trame : la trame passera à l'année
 * suivante, et le relevé de l'automne 2026 devra toujours pouvoir s'imprimer.
 * Elle sert surtout de garde-fou : `dateValide` accepte le 1er janvier de
 * l'an 1, dont la grille remonterait à l'an 0 — une année que Postgres ne
 * connaît pas, et la page tomberait.
 */
export const PREMIERE_RENTREE = "2026-09-01";

export type PeriodeDuReleve = {
  /** Le jour choisi, une fois borné. La grille finit sur sa semaine. */
  jusquau: string;
  /** Le lundi de la première des douze semaines. */
  du: string;
  /** Le dimanche de la dernière. */
  au: string;
  /**
   * Le dernier jour dont le document parle : `au`, ou aujourd'hui si la
   * période n'est pas finie. Une sortie notée pour samedi prochain n'a pas eu
   * lieu, et un document daté n'annonce rien.
   */
  arreteAu: string;
};

/**
 * La période, par l'adresse : `?jusquau=AAAA-MM-JJ`, comme le journal.
 *
 * Un seul paramètre plutôt que `du` et `au` : la bande du soignant fait douze
 * semaines par construction, et les deux versions d'un même relevé doivent
 * couvrir la même période — passer de l'une à l'autre ne change que le
 * destinataire.
 *
 * Tout ce qui n'est pas une date réelle retombe sur aujourd'hui, tout ce qui
 * dépasse aujourd'hui aussi, et rien ne remonte avant la première rentrée :
 * quelle que soit la valeur forgée, les bornes restent des dates que
 * Postgres sait lire.
 */
export function periodeDu(brut: unknown, aujourdhui: string): PeriodeDuReleve {
  let jusquau = dateValide(brut) ? brut : aujourdhui;
  if (jusquau > aujourdhui) jusquau = aujourdhui;
  if (jusquau < PREMIERE_RENTREE) jusquau = PREMIERE_RENTREE;
  const { du, au } = bornesDeLaBande(jusquau);
  return { jusquau, du, au, arreteAu: au < aujourdhui ? au : aujourdhui };
}

/**
 * Les périodes voisines, bout à bout, comme dans le journal. `null` quand il
 * n'y a pas où aller ; `jusquau: null` pour revenir à la semaine en cours.
 */
export function periodesVoisines(p: PeriodeDuReleve, aujourdhui: string) {
  const lundiCourant = lundiDeLaSemaine(aujourdhui);
  const lundiDeFin = lundiDeLaSemaine(p.jusquau);
  const apres = decalerDe(lundiDeFin, SEMAINES * 7 + 4);
  return {
    /* Le vendredi qui précède la grille — sauf si elle contient déjà la
       première rentrée : la période d'avant retomberait sur celle-ci. */
    plusTot: p.du > PREMIERE_RENTREE ? decalerDe(p.du, -3) : null,
    plusTard:
      lundiDeFin >= lundiCourant
        ? null
        : { jusquau: lundiDeLaSemaine(apres) >= lundiCourant ? null : apres },
    cetteSemaine: lundiDeFin === lundiCourant,
  };
}

/* ------------------------------------------------------------------ */
/* Ce qui est lu                                                       */
/* ------------------------------------------------------------------ */

/** Une journée telle que le relevé la lit : ni ressenti, ni mot, ni séance une à une. */
export type JourneeLue = {
  jour: string;
  ton: TonJour;
  cloture: ClotureJour | null;
  note: string;
  /* `null` quand l'adulte a été retiré de la famille : sa note reste, son nom non. */
  note_prenom: string | null;
  note_role: string | null;
  /** Le nombre de séances posées, quel que soit leur état. La grille n'en demande pas plus. */
  seances: number;
};

/** Une séance faite, telle que la version de l'inspection la lit. Ni la consigne, ni le support. */
export type SeanceMenee = {
  jour: string;
  matiere: string;
  titre: string;
  minutes: number;
  /** Le code d'une leçon du manuel, ou vide. */
  lecon: string;
  etat: EtatSeance;
};

export type DonneesDuReleve = {
  destinataire: Destinataire;
  periode: PeriodeDuReleve;
  /** `AAAA-MM-JJ`, à Paris : ce qui est passé, et la date d'édition. */
  aujourdhui: string;
  enfant: string | null;
  /** La nature de chaque date selon la trame. Donnée par l'appelant, pour que les tests en inventent une. */
  natureDe: (iso: string) => NatureDuJour;
  /* Pour le soignant. */
  journees: JourneeLue[];
  /* Pour l'inspection. */
  seances: SeanceMenee[];
  manuel: LeconDuManuel[];
  sorties: Sortie[];
  traces: LigneTrace[];
  explorations: ExploreesDuDomaine[];
};

/* ------------------------------------------------------------------ */
/* Ce que le document montre                                           */
/* ------------------------------------------------------------------ */

type EnTete = {
  enfant: string;
  titre: string;
  pourQui: string;
  /** « du lundi 29 juin au lundi 14 septembre 2026 ». */
  periode: string;
  /** « lundi 14 septembre 2026 ». */
  etabliLe: string;
  preambule: string;
  /** Ce que ce relevé ne contient pas, dit avant tout le reste. */
  absent: string[];
};

export type NoteDuReleve = {
  jour: string;
  date: string;
  /** « arrêtée en cours · journée allégée », ou rien quand ce serait du bruit. */
  etat: string | null;
  texte: string;
  /** « Anatole · Papa ». */
  auteur: string;
};

export type ReleveSoignant = EnTete & {
  destinataire: "soignant";
  bande: SemaineDeLaBande[];
  legende: LigneDeLegende[];
  constat: Constat;
  notes: NoteDuReleve[];
};

export type MatiereDuReleve = {
  id: string;
  nom: string;
  /** `null` : aucune séance faite dans cette matière, seulement une leçon rangée sous une autre. */
  duree: string | null;
  /** Les titres des leçons du manuel, dans l'ordre du manuel, chacune une fois. */
  lecons: string[];
  /** Les autres séances — rituels, séances écrites à la main —, chacune une fois. */
  seances: string[];
};

export type ReleveInspection = EnTete & {
  destinataire: "inspection";
  instruction: {
    /** Les jours où au moins une séance a été faite. */
    jours: number;
    duree: string;
    matieres: MatiereDuReleve[];
  };
  sorties: {
    passees: { id: string; date: string; titre: string; lieu: string; quoi: string; matieres: string[] }[];
    couvertes: string[];
  };
  traces: { id: string; date: string; titre: string; quoi: string; matiere: string | null }[];
  explorations: { domaine: string; recits: { id: string; date: string; recit: string }[] }[];
};

export type VueDuReleve = ReleveSoignant | ReleveInspection;

/** « Anatole · Papa ». Un adulte retiré de la famille laisse ce qu'il a écrit, sans son nom. */
function auteur(prenom: string | null, role: string | null) {
  if (!prenom) return "un adulte qui n’a plus d’accès";
  return role ? `${prenom} · ${role}` : prenom;
}

/**
 * L'état d'un jour de note, dans les mots de la grille — le même que sa case.
 * Rien pour ce qui n'a pas de nom utile : un week-end, un jour hors de
 * l'année, un jour « à venir » qui a pourtant déjà sa note.
 */
function etatDeLaNote(j: JourneeLue, d: DonneesDuReleve) {
  const c = etatDuJour(
    j.jour,
    d.aujourdhui,
    { jour: j.jour, ton: j.ton, cloture: j.cloture, seances: j.seances },
    d.natureDe(j.jour),
  );
  const etat =
    c.etat === "a-venir" || c.etat === "hors-annee" || (c.etat === "conge" && c.nature === "week-end")
      ? null
      : etatEnLettres(c);
  /* Le ton, quand l'état ne le dit pas déjà : une journée arrêtée puis passée
     en repos dit les deux. */
  const ton =
    j.ton === "allegee"
      ? "journée allégée"
      : j.ton === "repos" && c.etat !== "repos"
        ? "passée en repos"
        : null;
  return [etat, ton].filter(Boolean).join(" · ") || null;
}

/**
 * La projection du relevé. Pure : pas de base, pas d'horloge.
 *
 * Elle reçoit des lignes et rend un document arrêté à `periode.arreteAu`.
 * Chaque version ne lit que ce qui la concerne : passer au soignant les sorties
 * et les traces ne les fait pas apparaître, passer à l'inspection les
 * journées et leurs notes non plus.
 */
export function projeterLeReleve(d: DonneesDuReleve): VueDuReleve {
  const { du, arreteAu } = d.periode;
  const dedans = (jour: string) => jour >= du && jour <= arreteAu;

  const enfant = d.enfant ?? "l’enfant";
  /* L'année ne s'écrit dans le corps du document que si la période en couvre
     deux : l'en-tête la donne déjà. */
  const surDeuxAnnees = du.slice(0, 4) !== arreteAu.slice(0, 4);
  const date = (iso: string) => dateEnLettres(iso, { annee: surDeuxAnnees });

  const commun = {
    enfant,
    periode: `du ${dateEnLettres(du, { annee: surDeuxAnnees })} au ${dateEnLettres(arreteAu, { annee: true })}`,
    etabliLe: dateEnLettres(d.aujourdhui, { annee: true }),
  };

  if (d.destinataire === "soignant") {
    const bande = construireBande({
      jusquau: d.periode.jusquau,
      aujourdhui: d.aujourdhui,
      /* Quatre champs, pas la ligne : la grille n'a besoin de rien d'autre. */
      journees: d.journees.map((j) => ({ jour: j.jour, ton: j.ton, cloture: j.cloture, seances: j.seances })),
      natureDe: d.natureDe,
    });

    return {
      destinataire: "soignant",
      ...commun,
      titre: "Relevé d’observation des journées",
      pourQui: "À l’intention de l’équipe soignante",
      preambule: `Établi par les parents de ${enfant}, à partir de ce qu’ils notent chaque jour dans son cahier. Il décrit comment les journées se sont passées ; il n’en interprète aucune, et ne contient aucune donnée médicale.`,
      absent: [
        `ce que ${enfant} dit de sa journée le soir, et les mots qu’il écrit : l’écran où il les dépose lui promet que seuls ses parents les lisent`,
        "les mots que les adultes lui laissent, qui sont pour lui",
        "les résultats de ses exercices et le portrait du test de début d’année",
      ],
      bande,
      legende: legendeDe(bande),
      constat: constatDe(bande),
      /* Dans l'ordre des jours : un document se lit de haut en bas, et le
         temps y va dans le même sens. */
      notes: d.journees
        .filter((j) => dedans(j.jour) && j.note.trim() !== "")
        .sort((a, b) => a.jour.localeCompare(b.jour))
        .map((j) => ({
          jour: j.jour,
          date: date(j.jour),
          etat: etatDeLaNote(j, d),
          texte: j.note.trim(),
          auteur: auteur(j.note_prenom, j.note_role),
        })),
    };
  }

  /* ---- L'instruction donnée ------------------------------------------ */

  /* La lecture ne rend que des séances faites ; le filtre est refait ici pour
     qu'une séance mise de côté ou à venir ne compte jamais, quoi qu'on passe. */
  const faites = d.seances
    .filter((s) => s.etat === "faite" && dedans(s.jour))
    .sort((a, b) => a.jour.localeCompare(b.jour));

  const duManuel = new Map(d.manuel.map((l) => [l.code, l]));
  const minutesPar = new Map<string, number>();
  const codesPar = new Map<string, Set<string>>();
  const titresPar = new Map<string, string[]>();
  const ajouter = <T>(m: Map<string, T>, cle: string, vide: () => T) => {
    if (!m.has(cle)) m.set(cle, vide());
    return m.get(cle)!;
  };

  for (const s of faites) {
    minutesPar.set(s.matiere, (minutesPar.get(s.matiere) ?? 0) + s.minutes);
    const lecon = s.lecon ? duManuel.get(s.lecon) : undefined;
    if (lecon) {
      /* Une leçon compte dans sa matière du manuel, et une seule fois : sa
         reprise quinze jours plus tard porte le même code, et le même titre.
         Comme dans la vue du contrôle. */
      ajouter(codesPar, lecon.matiere, () => new Set<string>()).add(lecon.code);
    } else {
      /* Un rituel, une séance écrite à la main, ou une leçon que le manuel ne
         connaît plus : son titre, tel qu'il l'a lu sur son chemin. Jamais sa
         consigne — elle n'est pas lue. */
      const titres = ajouter(titresPar, s.matiere, () => []);
      const titre = s.titre.trim();
      if (titre && !titres.includes(titre)) titres.push(titre);
    }
  }

  const touchees = new Set([...minutesPar.keys(), ...codesPar.keys(), ...titresPar.keys()]);
  const ordre = [
    ...(Object.keys(matieres) as MatiereId[]).filter((id) => touchees.has(id)),
    /* Une matière que `lib/data.ts` ne connaît plus garde sa ligne, sous son
       identifiant : la durée totale doit rester la somme des lignes. */
    ...[...touchees].filter((id) => !estMatiere(id)),
  ];

  const parMatiere: MatiereDuReleve[] = ordre.map((id) => {
    const minutes = minutesPar.get(id) ?? 0;
    const codes = codesPar.get(id) ?? new Set<string>();
    return {
      id,
      nom: estMatiere(id) ? matieres[id].nom : id,
      duree: minutes > 0 ? enHeures(minutes) : null,
      lecons: d.manuel.filter((l) => codes.has(l.code)).map((l) => l.titre),
      seances: titresPar.get(id) ?? [],
    };
  });

  /* ---- Les sorties ---------------------------------------------------- */

  /* Celles qui ont eu lieu : une sortie peut être notée d'avance, et une
     sortie à venir n'est pas de l'instruction donnée. Ses matières ne
     comptent pas non plus parmi celles qui ont été touchées. */
  const passees = d.sorties
    .filter((s) => dedans(s.jour))
    .sort((a, b) => a.jour.localeCompare(b.jour));

  /* ---- Ce qu'il a fabriqué -------------------------------------------- */

  /* Le jour d'une trace est celui de Paris : notée à minuit moins le quart,
     elle est du jour même, pas du lendemain que dirait un serveur en UTC. */
  const traces = d.traces
    .map((t) => ({ t, jour: jourDe(t.cree_le) }))
    .filter(({ jour }) => dedans(jour))
    .sort((a, b) => a.t.cree_le.getTime() - b.t.cree_le.getTime())
    .map(({ t, jour }) => ({
      id: t.id,
      date: date(jour),
      titre: t.titre,
      quoi: t.quoi.trim(),
      matiere: estMatiere(t.matiere) ? matieres[t.matiere].nom : null,
    }));

  /* ---- Ce qui a été exploré ------------------------------------------- */

  /* Le domaine et le récit du parrain — ce qu'ils ont fait ensemble. Jamais
     le texte de la question : l'écran de la boîte à pourquoi promet à
     l’enfant qu'elle va à son parrain et à ses parents, pas plus loin. */
  const explorations = d.explorations
    .map((g) => ({
      domaine: g.domaine.libelle,
      recits: g.questions
        .filter((q) => dedans(q.exploree_le))
        .map((q) => ({ id: q.id, date: date(q.exploree_le), recit: q.trace.trim() })),
    }))
    .filter((g) => g.recits.length > 0);

  return {
    destinataire: "inspection",
    ...commun,
    titre: "Relevé de l’instruction",
    pourQui: "Pour le contrôle de l’instruction dans la famille",
    preambule: `Établi par les parents de ${enfant}. Il décrit ce qui a été étudié et fait pendant la période : les séances menées, les sorties, ce qu’il a fabriqué et ce qu’il a exploré avec son parrain.`,
    absent: [
      "les résultats de ses exercices, et toute évaluation",
      `ce que ${enfant} écrit pour ses parents, et ce qu’ils notent le soir : ce document décrit son instruction, pas ses journées`,
      "le texte des questions qu’il a posées : elles restent entre lui et ceux à qui il les a confiées, et il en reste ce qui a été fait ensemble",
    ],
    instruction: {
      jours: new Set(faites.map((s) => s.jour)).size,
      duree: enHeures(faites.reduce((t, s) => t + s.minutes, 0)),
      matieres: parMatiere,
    },
    sorties: {
      passees: passees.map((s) => ({
        id: s.id,
        date: date(s.jour),
        titre: s.titre,
        lieu: s.lieu,
        quoi: s.quoi,
        matieres: matieresDe(s.matieres).map((m) => matieres[m].nom),
      })),
      couvertes: matieresCouvertes(passees).map((m) => m.nom),
    },
    traces,
    explorations,
  };
}

/* ------------------------------------------------------------------ */
/* La lecture en base                                                  */
/* ------------------------------------------------------------------ */

/**
 * Ce qu'il faut pour un destinataire, et rien pour l'autre.
 *
 * Les bornes viennent de `periodeDu` : ce sont toujours des dates réelles,
 * jamais d'avant la première rentrée ni d'après aujourd'hui, et Postgres ne
 * peut pas lever sur une adresse forgée.
 */
export async function lireLeReleve(
  familleId: string,
  destinataire: Destinataire,
  periode: PeriodeDuReleve,
  aujourdhui: string,
): Promise<DonneesDuReleve> {
  const vide: Omit<DonneesDuReleve, "destinataire" | "periode" | "aujourdhui" | "enfant"> = {
    natureDe: natureSelonLaTrame,
    journees: [],
    seances: [],
    manuel: [],
    sorties: [],
    traces: [],
    explorations: [],
  };
  const base = { destinataire, periode, aujourdhui };

  if (destinataire === "soignant") {
    const [enfant, journees] = await Promise.all([
      prenomDeLEnfant(familleId),
      /* Toute la grille, jusqu'au dimanche : une semaine en cours a ses cases
         à venir. Les notes, elles, s'arrêtent à aujourd'hui dans la projection. */
      lignes<JourneeLue>(
        `select j.jour::text as jour, j.ton::text as ton, j.cloture::text as cloture,
                j.note, p.prenom as note_prenom, p.role_affiche as note_role,
                (select count(*) from seance s where s.journee_id = j.id)::int as seances
           from journee j
           left join personne p on p.id = j.note_de
          where j.famille_id = $1 and j.jour between $2::date and $3::date
          order by j.jour`,
        [familleId, periode.du, periode.au],
      ),
    ]);
    return { ...base, ...vide, enfant, journees };
  }

  const [enfant, seances, sorties, traces, explorations] = await Promise.all([
    prenomDeLEnfant(familleId),
    lignes<SeanceMenee>(
      `select j.jour::text as jour, s.matiere, s.titre, s.minutes, s.lecon, case when (s.etat = 'faite' or exists (select 1 from resultat_fiche rf where rf.seance_id = s.id)) then 'faite' else s.etat::text end as etat
         from seance s
         join journee j on j.id = s.journee_id
        where j.famille_id = $1
          and (s.etat = 'faite' or exists (select 1 from resultat_fiche rf where rf.seance_id = s.id))
          /* La partie du test est une évaluation, pas de l'instruction : elle
             sortait sous « À la maison » dans un document qui annonce ne
             contenir « aucune évaluation » (seconde critique du 16 septembre). */
          and not s.test
          and j.jour between $2::date and $3::date
        order by j.jour, s.rang, s.cree_le`,
      [familleId, periode.du, periode.arreteAu],
    ),
    sortiesDeLaPeriode(familleId, periode.du, periode.arreteAu),
    tracesDe(familleId),
    exploreesParDomaine(familleId),
  ]);

  return {
    ...base,
    ...vide,
    enfant,
    seances,
    /* Du manuel, les titres seulement : il porte aussi les réponses. */
    manuel: lecons.map((l) => ({ code: l.code, titre: l.titre, matiere: l.matiere })),
    sorties,
    traces,
    explorations,
  };
}
