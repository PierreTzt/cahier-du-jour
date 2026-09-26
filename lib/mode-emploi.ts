/**
 * Le mode d'emploi des adultes, écran par écran.
 *
 * « C'est très complet, mais un peu usine à gaz côté parent » — retour des
 * parents le premier jour réel, le 16 septembre 2026. Le reproche ne visait
 * pas un écran : il visait le fait d'en avoir dix sans savoir lesquels
 * comptent. D'où la première chose que dit ce mode d'emploi, avant toute
 * explication : **un seul écran sert tous les jours**. Les autres s'ouvrent de
 * temps en temps, et chacun dit quand.
 *
 * Le contenu vit ici et pas dans le composant, pour deux raisons :
 *
 *   - il dépend de qui lit. Le parrain n'a ni le journal, ni le relevé, ni le
 *     suivi, et l'atelier ne se raconte pas pareil à celui qui l'écrit et à
 *     ceux qui le lisent ;
 *   - `test/mode-emploi.test.ts` vérifie que chaque porte du bandeau a sa
 *     page, et qu'aucune page n'explique une porte que la personne n'a pas.
 *     Un écran ajouté au bandeau sans explication fait échouer le test.
 *
 * Rien ici ne touche la base : le composant qui l'affiche tourne dans le
 * navigateur.
 */

export type Lecteur = "parent" | "proche";

export type Rythme =
  | "tous-les-jours"
  | "pour-preparer"
  | "de-temps-en-temps"
  | "pour-rendre-compte";

/** Dans l'ordre où l'accueil les présente. */
export const RYTHMES: { cle: Rythme; nom: string }[] = [
  { cle: "tous-les-jours", nom: "Tous les jours" },
  { cle: "pour-preparer", nom: "Pour préparer" },
  { cle: "de-temps-en-temps", nom: "De temps en temps" },
  { cle: "pour-rendre-compte", nom: "Pour rendre compte" },
];

export type Ecran = {
  /** Le chemin, tel qu'il est écrit dans le bandeau. */
  chemin: string;
  /** Le nom, tel qu'il est écrit dans le bandeau. */
  nom: string;
  rythme: Rythme;
  /** Quand on l'ouvre, en quelques mots. */
  quand: string;
  /** À quoi il sert, en une phrase. */
  accroche: string;
  /** Ce qu'on y fait. Quatre au plus : au-delà, c'est l'écran qu'il faut relire. */
  points: string[];
  /** La chose à ne pas oublier, s'il y en a une. */
  aRetenir?: string;
  /**
   * Pensé pour un ordinateur : une année de cinquante écrans, un catalogue,
   * un document à remettre. Au téléphone, le menu le range à part et la page
   * le dit en une ligne — rangé, jamais bloqué : un parent fait tout depuis
   * son téléphone, et une page qui refuse de s'ouvrir ressemble à une panne
   * (décision du parrain, 21 septembre 2026).
   */
  ordinateur?: true;
};

export const ACCUEIL = {
  titre: "Le cahier, écran par écran",
  texte: [
    "{prénom} ouvre sa journée le matin et la suit, une étape après l’autre. Les leçons, il les fait seul à l’écran ; les séances à fiche, vous les menez avec lui.",
    "De votre côté, un écran sert tous les jours : La journée, avec sa page « Le matériel du jour, à imprimer ». Les autres s’ouvrent pour préparer, de temps en temps, ou quand on vous demande de rendre compte.",
    "La cloche, en haut à droite, s’allume quand une leçon qu’il a faite seul mérite d’être retravaillée : dès deux exercices pas passés, ou s’il l’a mise de côté. Elle mène à tout l’historique, et s’éteint quand vous l’avez ouverte.",
    "Votre accès se referme chaque nuit à cinq heures : le matin, on retape son code. Sur la tablette de {prénom}, pensez à « Quitter ».",
  ],
};

export const FIN = {
  titre: "Et {prénom} ?",
  texte: [
    "Il ne voit que sa journée d’aujourd’hui : un chemin, une étape à la fois, sans note. Les seuls nombres qu’il lit disent où il en est — « exercice 3 sur 8 » —, jamais s’il a juste.",
    "Tout ce qui compte, compare ou prévoit reste de ce côté-ci. C’est pour ça qu’il y a tant d’écrans chez vous, et si peu chez lui.",
  ],
};

/**
 * Les écrans qu'une personne trouve dans son bandeau, dans le même ordre.
 */
export function ecransDuModeDEmploi(lecteur: Lecteur): Ecran[] {
  const parent = lecteur === "parent";

  const ecrans: (Ecran | false)[] = [
    {
      chemin: "/pilotage",
      nom: "La journée",
      rythme: "tous-les-jours",
      quand: "Tous les jours",
      accroche:
        "Le seul écran à ouvrir chaque jour : ce que {prénom} va faire, et ce qui s’est passé.",
      points: [
        "En haut, choisissez le jour. La page suit la journée : « Ce matin » (sa journée, que vous pouvez modifier ou alléger), « Un mot pour lui », puis « Ce soir » (ses leçons et les séances notées).",
        "« Le matériel du jour, à imprimer » rassemble les fiches des séances que vous menez, avec les corrigés ; le résultat se note sous chaque fiche, ou dans « Ce matin ». Une séance à venir se retire, ou part un autre jour avec « déplacer » — au téléphone, derrière « Changer » —, tant qu’elle n’est pas commencée. Une journée qu’il a finie ou arrêtée ne reçoit plus rien : pour lui, c’est terminé.",
        parent
          ? "Le soir, vous lisez ce qu’il a dit de sa journée et laissez votre note. Si l’autre parent a écrit entre-temps, sa note s’affiche avant d’être remplacée."
          : "Ce qu’il a fabriqué et les sorties se notent tout en bas, dans « Noter autre chose ».",
        "Le portrait du test se lit à part : « Ce qu’il sait en arrivant », dans la section du test.",
      ],
      aRetenir:
        "Sa journée, le mot pour lui et ce qu’il a fabriqué, il les voit. Le ton, les chiffres et le soir, jamais.",
    },
    {
      chemin: "/annee",
      nom: "L’année",
      rythme: "pour-preparer",
      ordinateur: true,
      quand: "De temps en temps",
      accroche: "Le plan de tout le CM1, semaine par semaine, de septembre à la fin juin.",
      points: [
        "L’année est écrite d’après ce plan : les semaines marquées sont de vraies journées, et il n’y a rien à poser pour que {prénom} ait la sienne.",
        "Il sert à voir où l’on va : ce qui vient la semaine prochaine, les vacances, et où en est chaque période.",
        "« Ouvrir cette journée » mène à La journée, pour la modifier.",
      ],
      aRetenir: "Une journée que vous avez modifiée n’est jamais écrasée par le plan.",
    },
    {
      chemin: "/manuel",
      nom: "Le manuel",
      rythme: "pour-preparer",
      quand: "Pour préparer une leçon",
      accroche:
        "Les leçons que {prénom} fait seul à l’écran : le cours, les exercices et leurs réponses.",
      points: [
        "Pour lire à l’avance ce qu’il va voir, ou pour l’aider quand il bloque.",
        "Les titres soulignés dans La journée et dans L’année s’ouvrent ici.",
      ],
      aRetenir: "Les réponses sont écrites dedans : cet écran ne s’ouvre jamais de son côté.",
    },
    {
      chemin: "/fiches",
      nom: "Les fiches",
      rythme: "pour-preparer",
      ordinateur: true,
      quand: "Pour préparer une séance",
      accroche:
        "Ce qui ne se fait pas à l’écran et qu’un adulte mène : calcul mental, dictée, lecture à voix haute, écriture, dehors, le mercredi.",
      points: [
        "Chaque fiche dit comment s’y prendre, le matériel à prévoir, et le corrigé.",
        "Au jour le jour, inutile de venir les chercher ici : « Le matériel du jour » rassemble déjà celles du jour.",
        "Après la séance, ce qui est à revoir se note en bas de la fiche ouverte depuis La journée, ou dans « Le matériel du jour ».",
      ],
    },
    {
      chemin: "/atelier",
      nom: "L’atelier",
      rythme: "de-temps-en-temps",
      ...(parent
        ? {
            quand: "Quand vous voulez",
            accroche: "Le coin du parrain, autour des questions que {prénom} se pose.",
            points: [
              "{prénom} dépose ses questions dans sa boîte à pourquoi. Son parrain les lit, les prépare, et fixe un moment pour les explorer avec lui.",
              "Vous lisez tout ce qui s’y passe ; vous n’y écrivez pas. C’est l’endroit du parrain.",
            ],
          }
        : {
            quand: "Quand il a posé une question",
            accroche:
              "Votre endroit : les questions que {prénom} se pose, et ce que vous en faites ensemble.",
            points: [
              "Il dépose ses questions dans sa boîte à pourquoi. Vous les lisez, vous préparez, et vous fixez un rendez-vous pour les explorer.",
              "« Je l’ai lue » fait apparaître une phrase chez lui. Votre préparation, il ne la voit jamais.",
              "Ses parents lisent l’atelier, mais n’y écrivent pas.",
            ],
          }),
    },
    {
      chemin: "/sources",
      nom: "Les sources",
      rythme: "de-temps-en-temps",
      quand: "Au besoin",
      accroche: "Les textes officiels d’où vient chaque leçon, en un clic.",
      points: [
        "Pour vérifier ce que dit le manuel, plutôt que de le croire sur parole.",
        "Et pour pouvoir le défendre : l’inspection porte sur le programme en vigueur, et plusieurs textes sont neufs à cette rentrée.",
      ],
    },
    parent && {
      chemin: "/journal",
      nom: "Le journal",
      rythme: "pour-rendre-compte",
      quand: "Le soir, ou en fin de semaine",
      accroche: "Ses journées sur douze semaines, pour les deux maisons.",
      points: [
        "D’abord une bande de douze semaines : d’un coup d’œil, les journées menées au bout, celles arrêtées en route, les jours de repos. Ce qui revient se voit.",
        "En dessous, le détail jour par jour : vos notes du soir, ce qu’il a déposé, et les mots qu’on lui a laissés.",
      ],
      aRetenir:
        "Réservé à ses parents. {prénom} sait que ce qu’il dépose le soir va chez papa et maman, et chez personne d’autre.",
    },
    parent && {
      chemin: "/releve",
      nom: "Le relevé",
      rythme: "pour-rendre-compte",
      ordinateur: true,
      quand: "Quand on vous le demande",
      accroche: "Le document à imprimer et à remettre, sur douze semaines.",
      points: [
        "Deux versions, à choisir en haut : pour le soignant, comment les journées se sont passées ; pour l’inspection, ce qui a été étudié.",
        "Ne remettez pas la version du soignant à l’inspection : elle porte vos notes du soir.",
      ],
      aRetenir: "Ni l’une ni l’autre ne contient ce que {prénom} dépose le soir.",
    },
    parent && {
      chemin: "/suivi",
      nom: "Le suivi",
      rythme: "pour-rendre-compte",
      quand: "Après un rendez-vous chez le soignant",
      accroche: "Les consignes du soignant, écrites une fois pour les deux maisons.",
      points: [
        "Pour qu’elles s’appliquent pareil chez chacun, y compris chez celui qui n’était pas au rendez-vous.",
        "Une consigne qui ne s’applique plus se retire : on la retrouve parmi ce qui a été essayé.",
      ],
      aRetenir:
        "On y note ce qu’il faut faire, avec sa raison — jamais ce qui a été dit du dossier.",
    },
    {
      chemin: "/controle",
      nom: "Le contrôle",
      rythme: "pour-rendre-compte",
      ordinateur: true,
      quand: "Le jour de l’inspection",
      accroche: "Ce qu’on ouvre, ou qu’on imprime, devant l’inspecteur d’académie.",
      points: [
        "Il montre l’instruction donnée : les séances faites, les sorties, ce qui a été exploré et fabriqué.",
        "Il se remplit tout seul au fil des journées : rien à préparer d’ici là.",
        "Il dit en tête ce qu’il ne montre pas, et pourquoi.",
      ],
      aRetenir:
        "Les sorties comptent comme de l’instruction : notez-les en bas de La journée, dans « Noter autre chose ».",
    },
  ];

  return ecrans.filter((e): e is Ecran => e !== false);
}

/**
 * Faut-il ouvrir le mode d'emploi dès l'arrivée sur l'écran ?
 *
 * Tant que la case n'est pas cochée, oui — sauf s'il a déjà été refermé
 * aujourd'hui. « À chaque connexion » ne pouvait pas se prendre au mot : une
 * session tient un an, il ne serait jamais revenu. Une fois par jour, choix de
 * le parrain.
 */
/** Tout ce que la fenêtre affiche, prêt à lui être passé. */
export type ContenuModeDEmploi = {
  accueil: { titre: string; texte: string[] };
  fin: { titre: string; texte: string[] };
  rythmes: { cle: Rythme; nom: string }[];
  ecrans: Ecran[];
};

/**
 * Le contenu du mode d'emploi, **construit sur le serveur** et passé au
 * composant en props.
 *
 * Le composant est un composant client rendu par l'en-tête, donc par la mise
 * en page racine. Tant qu'il importait ce module, tout ce texte — le prénom
 * de l'enfant, « les consignes du soignant » — partait dans le JavaScript chargé
 * par la page d'accueil, **avant toute connexion**. Vérifié en production le
 * 16 septembre 2026 : le prénom de l'enfant et son lieu de soin, en clair, dans un fichier
 * servi à qui passe. Passé en props, il n'est plus envoyé qu'à un adulte
 * connecté, dans la page qu'il ouvre.
 *
 * Le prénom vient de la base, pas du code.
 */
export function contenuDuModeDEmploi(lecteur: Lecteur, prenomEnfant: string): ContenuModeDEmploi {
  const nommer = (t: string) => t.split("{prénom}").join(prenomEnfant);
  const bloc = (b: { titre: string; texte: string[] }) => ({
    titre: nommer(b.titre),
    texte: b.texte.map(nommer),
  });
  return {
    accueil: bloc(ACCUEIL),
    fin: bloc(FIN),
    rythmes: RYTHMES,
    ecrans: ecransDuModeDEmploi(lecteur).map((e) => ({
      ...e,
      quand: nommer(e.quand),
      accroche: nommer(e.accroche),
      points: e.points.map(nommer),
      aRetenir: e.aRetenir && nommer(e.aRetenir),
    })),
  };
}

export function aOuvrirDEmblee(
  etat: { compris: boolean; fermeLe: string | null },
  aujourdhui: string,
): boolean {
  return !etat.compris && etat.fermeLe !== aujourdhui;
}
