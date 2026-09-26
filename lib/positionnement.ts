/**
 * Ce que l'enfant sait en arrivant en CM1.
 *
 * Un vrai test de positionnement : **trente-six notions, cinq questions
 * chacune**, cent quatre-vingts au total, adossées aux attendus officiels de
 * fin de CE2. Cinq items par notion, parce qu'un seul ne mesure rien — on ne
 * distingue ni la réussite de la chance, ni l'ignorance de l'inattention.
 *
 * Sept blocs, un par domaine, vingt-cinq à trente questions chacun. **Dans un
 * bloc, on va jusqu'au bout** : c'est un examen, pas une activité libre. Entre
 * deux blocs, on s'arrête — cent quatre-vingts questions d'affilée
 * fatigueraient n'importe quel enfant de neuf ans, et c'est ainsi que sont
 * construites les évaluations nationales. Et depuis le 16 septembre, entre deux
 * blocs on s'arrête **jusqu'au lendemain** : voir `ceQuiVientAujourdhui`.
 *
 * Ce qui protège l'enfant n'est pas la quantité, c'est l'absence de verdict :
 * ce qui le mettait en difficulté à l'école était de **ne pas réussir**, pas
 * d'avoir du travail. Donc il fait le test en entier, « je ne sais pas » est
 * une réponse légitime à chaque question, et l'écran ne lui dit jamais s'il a
 * juste. Seuls ses parents lisent le résultat.
 *
 * Sources, téléchargées et vérifiées par leur titre le 12 septembre 2026 :
 *   Mathématiques CE2, attendus de fin d'année — eduscol.education.fr/document/13960
 *   Français CE2, attendus de fin d'année — eduscol.education.fr/document/13954
 *
 * Rien de tout ceci n'a été relu par un enseignant. Ça doit l'être.
 */

export type TypeQuestion = "saisie" | "choix";

export type Question = {
  /** Stable : c'est la clé de la réponse en base. Ne jamais le réutiliser. */
  code: string;
  notion: string;
  enonce: string;
  type: TypeQuestion;
  choix?: string[];
  /** Jamais transmis à la vue de l'enfant. Vérifié par un test. */
  attendu: string;
  /** L'accent porte la notion : la comparaison ne le retire pas. Voir `lib/comparer.ts`. */
  accents?: boolean;
};

export type Notion = {
  code: string;
  libelle: string;
  /** L'attendu officiel de fin de CE2 que la notion interroge. */
  reference: string;
  questions: Question[];
};

export type Bloc = {
  code: string;
  titre: string;
  /** Ce que l'enfant lit avant de commencer. */
  annonce: string;
  notions: Notion[];
};

/* Fabriques compactes : cent quatre-vingts énoncés écrits à plat seraient
   illisibles, or ce fichier doit pouvoir être relu par un enseignant. */
const s = (code: string, enonce: string, attendu: string): Omit<Question, "notion"> => ({
  code,
  enonce,
  attendu,
  type: "saisie",
});

const c = (
  code: string,
  enonce: string,
  choix: string[],
  attendu: string,
): Omit<Question, "notion"> => ({ code, enonce, attendu, choix, type: "choix" });

function notion(
  code: string,
  libelle: string,
  reference: string,
  qs: Omit<Question, "notion">[],
): Notion {
  return { code, libelle, reference, questions: qs.map((q) => ({ ...q, notion: code })) };
}

/* ------------------------------------------------------------------ */
/* 1. Les nombres                                                      */
/* ------------------------------------------------------------------ */

const nombres: Bloc = {
  code: "nombres",
  titre: "Les nombres",
  annonce: "Des questions sur les nombres : les lire, les écrire, les comparer.",
  notions: [
    notion(
      "num-position",
      "La valeur des chiffres selon leur position",
      "Il différencie le chiffre des milliers, des centaines, des dizaines et des unités, et trouve le nombre de centaines ou de dizaines contenues dans un nombre.",
      [
        s("num-position-1", "Dans le nombre 4 728, quel est le chiffre des centaines ?", "7"),
        s("num-position-2", "Dans le nombre 9 305, quel est le chiffre des dizaines ?", "0"),
        s("num-position-3", "Dans le nombre 6 471, quel est le chiffre des milliers ?", "6"),
        s("num-position-4", "Dans le nombre 2 856, quel est le chiffre des unités ?", "6"),
        s("num-position-5", "Combien y a-t-il de centaines en tout dans 3 400 ?", "34"),
      ],
    ),
    notion(
      "num-ecrire",
      "Lire et écrire les nombres jusqu’à 10 000",
      "Il écrit en chiffres et en lettres des nombres dictés, jusqu’à 10 000.",
      [
        s("num-ecrire-1", "Écris en chiffres : sept mille quatre cent trente-huit.", "7438"),
        s("num-ecrire-2", "Écris en chiffres : deux mille six.", "2006"),
        s("num-ecrire-3", "Écris en chiffres : quatre mille quatre-vingts.", "4080"),
        s("num-ecrire-4", "Écris en chiffres : neuf mille neuf cent quinze.", "9915"),
        s("num-ecrire-5", "Écris en chiffres : mille trois cent soixante-douze.", "1372"),
      ],
    ),
    notion(
      "num-comparer",
      "Comparer, ranger et encadrer les nombres",
      "Il compare, encadre, intercale des nombres entiers en utilisant =, < et >.",
      [
        c("num-comparer-1", "Quel est le plus grand ?", ["3 099", "3 901"], "3 901"),
        c("num-comparer-2", "Quel est le plus petit ?", ["8 080", "8 008", "8 800"], "8 008"),
        s("num-comparer-3", "Quel nombre vient juste après 5 999 ?", "6000"),
        s("num-comparer-4", "Quel nombre vient juste avant 4 000 ?", "3999"),
        c(
          "num-comparer-5",
          "Entre quels milliers se trouve 6 480 ?",
          ["entre 6 000 et 7 000", "entre 5 000 et 6 000", "entre 7 000 et 8 000"],
          "entre 6 000 et 7 000",
        ),
      ],
    ),
    notion(
      "num-decomposer",
      "Décomposer un nombre",
      "Il connaît et utilise les diverses représentations d’un nombre, dont les décompositions.",
      [
        s("num-decomposer-1", "Quel nombre vaut 5 000 + 200 + 40 + 3 ?", "5243"),
        s("num-decomposer-2", "Quel nombre vaut 3 milliers et 7 dizaines ?", "3070"),
        s("num-decomposer-3", "Quel nombre vaut 8 × 1 000 + 5 × 10 ?", "8050"),
        s("num-decomposer-4", "Combien vaut 40 dizaines ?", "400"),
        s("num-decomposer-5", "Complète : 2 604 = 2 000 + 600 + …", "4"),
      ],
    ),
    notion(
      "num-suites",
      "Les suites de nombres, pair et impair",
      "Il dit la suite des nombres à partir d’un nombre donné et identifie la parité.",
      [
        c("num-suites-1", "Le nombre 47 est-il pair ou impair ?", ["pair", "impair"], "impair"),
        c("num-suites-2", "Le nombre 130 est-il pair ou impair ?", ["pair", "impair"], "pair"),
        s("num-suites-3", "Tu comptes de 10 en 10 : 370, 380, 390, … Quel nombre vient ensuite ?", "400"),
        s("num-suites-4", "Compte de 100 en 100 à partir de 2 500. Quel nombre vient après 2 800 ?", "2900"),
        s("num-suites-5", "Tu comptes de 10 en 10 : 2 970, 2 980, 2 990, … Quel nombre vient ensuite ?", "3000"),
      ],
    ),
  ],
};

/* ------------------------------------------------------------------ */
/* 2. Le calcul                                                        */
/* ------------------------------------------------------------------ */

const calcul: Bloc = {
  code: "calcul",
  titre: "Le calcul",
  annonce: "Des calculs. Tu peux prendre une feuille et un crayon si tu veux.",
  notions: [
    notion(
      "cal-tables",
      "Les tables de multiplication",
      "Il mémorise les tables de multiplication de 1 à 9 et les mobilise.",
      [
        s("cal-tables-1", "Combien font 7 × 8 ?", "56"),
        s("cal-tables-2", "Combien font 6 × 9 ?", "54"),
        s("cal-tables-3", "Combien font 4 × 7 ?", "28"),
        s("cal-tables-4", "Combien font 8 × 8 ?", "64"),
        s("cal-tables-5", "Combien font 9 × 3 ?", "27"),
      ],
    ),
    notion(
      "cal-addition",
      "L’addition avec retenues",
      "Il calcule en ligne ou en colonnes des sommes de nombres entiers.",
      [
        s("cal-addition-1", "Combien font 487 + 356 ?", "843"),
        s("cal-addition-2", "Combien font 1 264 + 738 ?", "2002"),
        s("cal-addition-3", "Combien font 95 + 68 ?", "163"),
        s("cal-addition-4", "Combien font 2 450 + 1 590 ?", "4040"),
        s("cal-addition-5", "Combien font 199 + 199 ?", "398"),
      ],
    ),
    notion(
      "cal-soustraction",
      "La soustraction avec retenues",
      "Il calcule en ligne ou en colonnes des différences de nombres entiers.",
      [
        s("cal-soustraction-1", "Combien font 302 − 178 ?", "124"),
        s("cal-soustraction-2", "Combien font 1 000 − 645 ?", "355"),
        s("cal-soustraction-3", "Combien font 83 − 47 ?", "36"),
        s("cal-soustraction-4", "Combien font 4 500 − 1 750 ?", "2750"),
        s("cal-soustraction-5", "Combien font 206 − 99 ?", "107"),
      ],
    ),
    notion(
      "cal-multiplication",
      "La multiplication posée",
      "Il calcule le produit d’un nombre à deux ou trois chiffres par un nombre à un chiffre.",
      [
        s("cal-multiplication-1", "Combien font 36 × 4 ?", "144"),
        s("cal-multiplication-2", "Combien font 125 × 3 ?", "375"),
        s("cal-multiplication-3", "Combien font 48 × 5 ?", "240"),
        s("cal-multiplication-4", "Combien font 207 × 6 ?", "1242"),
        s("cal-multiplication-5", "Combien font 19 × 7 ?", "133"),
      ],
    ),
    notion(
      "cal-mental",
      "Le calcul mental : doubles, moitiés, compléments",
      "Il mobilise des procédures de calcul mental : doubles, moitiés, compléments à la dizaine ou à la centaine supérieure.",
      [
        s("cal-mental-1", "Quel est le double de 45 ?", "90"),
        s("cal-mental-2", "Quelle est la moitié de 68 ?", "34"),
        s("cal-mental-3", "Combien manque-t-il à 67 pour aller à 100 ?", "33"),
        s("cal-mental-4", "Combien manque-t-il à 640 pour aller à 700 ?", "60"),
        s("cal-mental-5", "Quel est le double de 250 ?", "500"),
      ],
    ),
  ],
};

/* ------------------------------------------------------------------ */
/* 3. Les problèmes                                                    */
/* ------------------------------------------------------------------ */

const problemes: Bloc = {
  code: "problemes",
  titre: "Les problèmes",
  annonce:
    "Des petites histoires avec une question à la fin. Tu peux prendre une feuille et un crayon.",
  notions: [
    notion(
      "pb-additif",
      "Un problème d’addition ou de soustraction",
      "Il résout des problèmes du champ additif en une, deux ou trois étapes.",
      [
        s(
          "pb-additif-1",
          "Trois avions se posent. Il y a 825 passagers dans le premier, 237 dans le deuxième et 358 dans le troisième. Combien de passagers en tout ?",
          "1420",
        ),
        s(
          "pb-additif-2",
          "Léa a 4 530 € sur son compte. Elle achète une tablette à 538 €. Combien lui reste-t-il ?",
          "3992",
        ),
        s(
          "pb-additif-3",
          "Il y avait 4 867 spectateurs au stade. À la mi-temps, il n’en reste que 2 321. Combien sont partis ?",
          "2546",
        ),
        s(
          "pb-additif-4",
          "Dans l’école, il y a 234 garçons et 257 filles. Combien d’élèves en tout ?",
          "491",
        ),
        s(
          "pb-additif-5",
          "Un livre a 180 pages. Tom en a lu 96. Combien lui en reste-t-il à lire ?",
          "84",
        ),
      ],
    ),
    notion(
      "pb-multiplicatif",
      "Un problème de multiplication",
      "Il résout des problèmes du champ multiplicatif en une ou deux étapes.",
      [
        s("pb-multiplicatif-1", "Un paquet contient 12 gâteaux. Combien de gâteaux dans 6 paquets ?", "72"),
        s("pb-multiplicatif-2", "Une place de cinéma coûte 8 €. Combien coûtent 7 places ?", "56"),
        s(
          "pb-multiplicatif-3",
          "Sur un mur, on pose 23 rangées de 4 carreaux. Combien de carreaux a-t-on posés ?",
          "92",
        ),
        s("pb-multiplicatif-4", "Il y a 25 élèves par classe et 4 classes. Combien d’élèves en tout ?", "100"),
        s("pb-multiplicatif-5", "Une boîte contient 6 œufs. Combien d’œufs dans 15 boîtes ?", "90"),
      ],
    ),
    notion(
      "pb-partage",
      "Un problème de partage ou de groupement",
      "Il résout des problèmes de partage et de groupement, y compris ceux où l’on cherche combien de fois une grandeur en contient une autre.",
      [
        s("pb-partage-1", "On partage 96 billes également entre 8 enfants. Combien chacun en reçoit-il ?", "12"),
        s("pb-partage-2", "On range 48 livres sur des étagères de 6 livres. Combien d’étagères faut-il ?", "8"),
        s("pb-partage-3", "On partage 35 bonbons entre 5 enfants. Combien chacun en a-t-il ?", "7"),
        s("pb-partage-4", "Avec 60 fleurs, on fait des bouquets de 4 fleurs. Combien de bouquets ?", "15"),
        s("pb-partage-5", "On partage 100 € entre 4 personnes. Combien chacune reçoit-elle ?", "25"),
      ],
    ),
    notion(
      "pb-etapes",
      "Un problème à deux étapes",
      "Il modélise les problèmes à l’aide de schémas ou d’écritures mathématiques et les résout en plusieurs étapes.",
      [
        s("pb-etapes-1", "Tom achète 3 cahiers à 2 € et un stylo à 4 €. Combien paie-t-il en tout ?", "10"),
        s(
          "pb-etapes-2",
          "Dans la classe, il y a 8 tables de 4 chaises. 6 chaises sont cassées. Combien de chaises peut-on utiliser ?",
          "26",
        ),
        s(
          "pb-etapes-3",
          "La bibliothèque a reçu 180 livres. 45 sont des bandes dessinées et 62 sont des romans. Les autres sont des documentaires. Combien y a-t-il de documentaires ?",
          "73",
        ),
        s("pb-etapes-4", "Léa a 50 €. Elle achète 4 livres à 9 €. Combien lui reste-t-il ?", "14"),
        s(
          "pb-etapes-5",
          "Dans un sac, il y a 6 paquets de 5 bonbons. On en mange 12. Combien en reste-t-il ?",
          "18",
        ),
      ],
    ),
    notion(
      "pb-tableau",
      "Lire un tableau pour répondre",
      "Il résout des problèmes nécessitant l’exploration d’un tableau ou d’un graphique.",
      [
        s(
          "pb-tableau-1",
          "Livres empruntés à la bibliothèque : lundi 24, mardi 18, mercredi 41, jeudi 15, vendredi 32. Combien de livres ont été empruntés dans la semaine ?",
          "130",
        ),
        c(
          "pb-tableau-2",
          "Livres empruntés : lundi 24, mardi 18, mercredi 41, jeudi 15, vendredi 32. Quel jour a-t-on emprunté le plus de livres ?",
          ["lundi", "mercredi", "vendredi"],
          "mercredi",
        ),
        s(
          "pb-tableau-3",
          "Livres empruntés : lundi 24, mardi 18, mercredi 41, jeudi 15, vendredi 32. Combien de livres de plus le mercredi que le jeudi ?",
          "26",
        ),
        s(
          "pb-tableau-4",
          "Prix des entrées au musée : adulte 9 €, enfant 4 €. Combien paie une famille de 2 adultes et 3 enfants ?",
          "30",
        ),
        c(
          "pb-tableau-5",
          "Élèves par classe : CP 22, CE1 25, CE2 24, CM1 27, CM2 23. Quelle classe a le moins d’élèves ?",
          ["le CP", "le CE2", "le CM2"],
          "le CP",
        ),
      ],
    ),
  ],
};

/* ------------------------------------------------------------------ */
/* 4. Les grandeurs et les mesures                                     */
/* ------------------------------------------------------------------ */

const mesures: Bloc = {
  code: "mesures",
  titre: "Les grandeurs et les mesures",
  annonce:
    "Des questions sur les longueurs, les masses, les litres, les durées et l’argent.",
  notions: [
    notion(
      "mes-longueurs",
      "Les longueurs et leurs unités",
      "Il sait que le mm, le cm, le dm, le m et le km mesurent des longueurs, et il fait les correspondances entre elles.",
      [
        s("mes-longueurs-1", "Combien y a-t-il de centimètres dans un mètre ?", "100"),
        s("mes-longueurs-2", "Combien font 6 km en mètres ?", "6000"),
        s("mes-longueurs-3", "Combien font 2 m 15 cm en centimètres ?", "215"),
        s("mes-longueurs-4", "Combien y a-t-il de millimètres dans un centimètre ?", "10"),
        c(
          "mes-longueurs-5",
          "Quelle unité choisis-tu pour mesurer la longueur d’une salle de classe ?",
          ["le millimètre", "le mètre", "le kilomètre"],
          "le mètre",
        ),
      ],
    ),
    notion(
      "mes-masses",
      "Les masses",
      "Il sait que le g, le kg et la t mesurent des masses, et il fait les correspondances entre elles.",
      [
        s("mes-masses-1", "Combien y a-t-il de grammes dans un kilogramme ?", "1000"),
        s("mes-masses-2", "Combien font 2 kg 500 g en grammes ?", "2500"),
        s("mes-masses-3", "Combien font 2 tonnes en kilogrammes ?", "2000"),
        c("mes-masses-4", "Qu’est-ce qui est le plus lourd ?", ["500 g", "1 kg", "250 g"], "1 kg"),
        c(
          "mes-masses-5",
          "Quelle unité choisis-tu pour la masse d’un camion ?",
          ["le gramme", "le kilogramme", "la tonne"],
          "la tonne",
        ),
      ],
    ),
    notion(
      "mes-contenances",
      "Les contenances",
      "Il sait que le L, le dL et le cL mesurent des contenances, et il fait les correspondances entre elles.",
      [
        s("mes-contenances-1", "Combien y a-t-il de centilitres dans un litre ?", "100"),
        s("mes-contenances-2", "Combien y a-t-il de décilitres dans un litre ?", "10"),
        s("mes-contenances-3", "Combien font 3 L en centilitres ?", "300"),
        c(
          "mes-contenances-4",
          "Quelle unité choisis-tu pour la contenance d’une bouteille d’eau ?",
          ["le gramme", "le litre", "le mètre"],
          "le litre",
        ),
        c("mes-contenances-5", "Qu’est-ce qui contient le plus ?", ["50 cL", "1 L", "8 dL"], "1 L"),
      ],
    ),
    notion(
      "mes-durees",
      "Les dates, l’heure et les durées",
      "Il connaît les unités de durée et leurs relations, lit l’heure et résout des problèmes de durées.",
      [
        s("mes-durees-1", "Combien y a-t-il de minutes dans une heure ?", "60"),
        s("mes-durees-2", "Combien y a-t-il de minutes dans un quart d’heure ?", "15"),
        s(
          "mes-durees-3",
          "Lucie part de chez elle à 8 h 45 et rentre à 12 h 30. Combien de temps est-elle restée dehors ? Écris ta réponse comme « 5 h 20 ».",
          "3h45",
        ),
        s(
          "mes-durees-4",
          "Un entraînement de foot va de 13 h 45 à 16 h 15. Combien de temps a-t-il duré ? Écris ta réponse comme « 5 h 20 ».",
          "2h30",
        ),
        s("mes-durees-5", "Combien y a-t-il de minutes dans 3 heures et 35 minutes ?", "215"),
      ],
    ),
    notion(
      "mes-monnaie",
      "La monnaie et les prix",
      "Il résout des problèmes impliquant des prix et sait rendre la monnaie.",
      [
        s("mes-monnaie-1", "Un livre coûte 12 €. Tu paies avec 20 €. Combien te rend-on ?", "8"),
        s(
          "mes-monnaie-2",
          "Combien font 3 pièces de 2 € et 4 pièces de 50 centimes, en euros ?",
          "8",
        ),
        s("mes-monnaie-3", "Tu as 15 €. Tu achètes deux places à 6 €. Combien te reste-t-il ?", "3"),
        s("mes-monnaie-4", "Combien y a-t-il de centimes dans un euro ?", "100"),
        s("mes-monnaie-5", "Un jouet coûte 24 €. Tu paies avec un billet de 50 €. Combien te rend-on ?", "26"),
      ],
    ),
  ],
};

/* ------------------------------------------------------------------ */
/* 5. L’espace et la géométrie                                         */
/* ------------------------------------------------------------------ */

const geometrie: Bloc = {
  code: "geometrie",
  titre: "L’espace et la géométrie",
  annonce: "Des questions sur les figures, les solides, les angles droits et la symétrie.",
  notions: [
    notion(
      "geo-figures",
      "Reconnaître et nommer les figures",
      "Il reconnaît et nomme les figures usuelles : carré, rectangle, triangle, triangle rectangle et cercle.",
      [
        s("geo-figures-1", "Comment s’appelle une figure à trois côtés ?", "un triangle"),
        s(
          "geo-figures-2",
          "Comment s’appelle une figure à quatre côtés de la même longueur et à quatre angles droits ?",
          "un carré",
        ),
        c(
          "geo-figures-3",
          "Un triangle a un angle droit. Comment s’appelle-t-il ?",
          ["un triangle rectangle", "un triangle droit", "un rectangle"],
          "un triangle rectangle",
        ),
        c(
          "geo-figures-4",
          "Quelle figure n’a pas de côtés ?",
          ["le carré", "le cercle", "le triangle"],
          "le cercle",
        ),
        /* À choisir : « le centre du cercle », la réponse la plus naturelle,
           était comptée fausse à la saisie (seconde critique du 16 septembre). */
        c(
          "geo-figures-5",
          "Comment s’appelle le point au milieu d’un cercle ?",
          ["le rayon", "le centre", "le diamètre"],
          "le centre",
        ),
      ],
    ),
    notion(
      "geo-proprietes",
      "Les angles droits et les longueurs des côtés",
      "Il connaît les propriétés des angles et des égalités de longueur pour les carrés et les rectangles, et fait le lien avec les instruments de tracé.",
      [
        s("geo-proprietes-1", "Combien un carré a-t-il d’angles droits ?", "4"),
        s("geo-proprietes-2", "Combien un rectangle a-t-il d’angles droits ?", "4"),
        c(
          "geo-proprietes-3",
          "Avec quel instrument vérifie-t-on un angle droit ?",
          ["la règle", "l’équerre", "le compas"],
          "l’équerre",
        ),
        c(
          "geo-proprietes-4",
          "Avec quel instrument trace-t-on un cercle ?",
          ["la règle", "l’équerre", "le compas"],
          "le compas",
        ),
        s("geo-proprietes-5", "Combien un triangle rectangle a-t-il d’angles droits ?", "1"),
      ],
    ),
    notion(
      "geo-solides",
      "Reconnaître et décrire les solides",
      "Il nomme et décrit le cube, la boule, le cône, la pyramide, le cylindre et le pavé droit, avec les termes face, sommet et arête.",
      [
        s("geo-solides-1", "Combien de faces a un cube ?", "6"),
        c(
          "geo-solides-2",
          "Les faces d’un cube sont des…",
          ["carrés", "rectangles", "triangles"],
          "carrés",
        ),
        s("geo-solides-3", "Combien de sommets a un cube ?", "8"),
        c(
          "geo-solides-4",
          "Une boîte de chaussures a la forme d’un…",
          ["cube", "pavé droit", "cylindre"],
          "pavé droit",
        ),
        c(
          "geo-solides-5",
          "Quel solide n’a aucun sommet ?",
          ["la pyramide", "la boule", "le cube"],
          "la boule",
        ),
      ],
    ),
    notion(
      "geo-symetrie",
      "L’alignement, le milieu et la symétrie",
      "Il reconnaît et utilise les notions d’alignement, de milieu d’un segment et de symétrie.",
      [
        c(
          "geo-symetrie-1",
          "Trois points sont sur une même droite. On dit qu’ils sont…",
          ["alignés", "symétriques", "perpendiculaires"],
          "alignés",
        ),
        s(
          "geo-symetrie-2",
          "Un segment mesure 10 cm. À combien de centimètres de chaque bout se trouve son milieu ?",
          "5",
        ),
        c(
          "geo-symetrie-3",
          "On plie une figure le long de son axe de symétrie. Les deux parties…",
          ["se superposent exactement", "sont différentes", "ne se touchent pas"],
          "se superposent exactement",
        ),
        c(
          "geo-symetrie-4",
          "Quelle lettre a un axe de symétrie vertical ?",
          ["A", "F", "L"],
          "A",
        ),
        c(
          "geo-symetrie-5",
          "Quelle lettre a un axe de symétrie ?",
          ["N", "E", "G"],
          "E",
        ),
      ],
    ),
    notion(
      "geo-reperage",
      "Se repérer et se déplacer",
      "Il situe les objets les uns par rapport aux autres avec un vocabulaire spatial précis, et suit une suite d’instructions de déplacement.",
      [
        c(
          "geo-reperage-1",
          "Sur une carte, le nord est…",
          ["en haut", "en bas", "à droite"],
          "en haut",
        ),
        c(
          "geo-reperage-2",
          "Tu regardes vers le nord. Le sud est donc…",
          ["devant toi", "derrière toi", "à ta gauche"],
          "derrière toi",
        ),
        s(
          "geo-reperage-3",
          "Tu fais 3 pas en avant, 1 pas en arrière, puis 2 pas en avant. À combien de pas du départ es-tu maintenant ?",
          "4",
        ),
        c(
          "geo-reperage-4",
          "Tu avances de 2 cases, tu tournes à droite, tu avances de 2 cases. Quelle forme dessine ton trajet ?",
          ["une ligne droite", "un angle droit", "un cercle"],
          "un angle droit",
        ),
        c(
          "geo-reperage-5",
          "Tu fais deux fois « un quart de tour à droite ». Tu regardes maintenant…",
          ["dans la même direction", "dans la direction opposée", "à ta gauche"],
          "dans la direction opposée",
        ),
      ],
    ),
  ],
};

/* ------------------------------------------------------------------ */
/* 6. Les mots et l’orthographe                                        */
/* ------------------------------------------------------------------ */

const langue: Bloc = {
  code: "langue",
  titre: "Les mots et l’orthographe",
  annonce: "Des questions sur les phrases, la nature des mots et leur orthographe.",
  notions: [
    notion(
      "lan-classes",
      "La nature des mots",
      "Il différencie les principales classes de mots : le nom, le déterminant, l’adjectif qualificatif, le verbe, le pronom personnel sujet.",
      [
        c(
          "lan-classes-1",
          "Dans « le grand chien », quelle est la nature du mot « grand » ?",
          ["un nom", "un adjectif", "un verbe"],
          "un adjectif",
        ),
        c(
          "lan-classes-2",
          "Dans « une maison », quelle est la nature du mot « une » ?",
          ["un déterminant", "un adjectif", "un pronom"],
          "un déterminant",
        ),
        c(
          "lan-classes-3",
          "Dans « ils chantent », quelle est la nature du mot « ils » ?",
          ["un nom", "un pronom", "un déterminant"],
          "un pronom",
        ),
        c(
          "lan-classes-4",
          "Lequel de ces mots est un verbe ?",
          ["la course", "courir", "rapide"],
          "courir",
        ),
        c(
          "lan-classes-5",
          "Lequel de ces mots est un nom ?",
          ["dormir", "sommeil", "endormi"],
          "sommeil",
        ),
      ],
    ),
    notion(
      "lan-sujet-verbe",
      "Le sujet, le verbe et l’infinitif",
      "Il reconnaît les principaux constituants de la phrase — le sujet, le verbe — et trouve l’infinitif d’un verbe conjugué.",
      [
        s(
          "lan-sujet-verbe-1",
          "Dans « Le chien de ma voisine aboie tous les matins », quel est le verbe ?",
          "aboie",
        ),
        s("lan-sujet-verbe-2", "Dans « Les enfants rangent leurs cartables », quel est le sujet ?", "les enfants"),
        s("lan-sujet-verbe-3", "Dans « Demain, ma sœur partira en Espagne », quel est le verbe ?", "partira"),
        s("lan-sujet-verbe-4", "Quel est l’infinitif du verbe dans « nous finissons » ?", "finir"),
        s("lan-sujet-verbe-5", "Quel est l’infinitif du verbe dans « vous prenez » ?", "prendre"),
      ],
    ),
    notion(
      "lan-accords",
      "Les accords dans le groupe du nom",
      "Il utilise les marques d’accord de nombre et de genre pour les noms et les adjectifs, y compris les pluriels en -al/-aux et -ail/-aux.",
      [
        s("lan-accords-1", "Quel est le pluriel de « un cheval » ?", "des chevaux"),
        s("lan-accords-2", "Quel est le pluriel de « un journal » ?", "des journaux"),
        s("lan-accords-3", "Quel est le pluriel de « un gâteau » ?", "des gâteaux"),
        c("lan-accords-4", "Complète : « des voitures … »", ["rouge", "rouges"], "rouges"),
        c(
          "lan-accords-5",
          "Complète : « une histoire … »",
          ["amusant", "amusante", "amusants"],
          "amusante",
        ),
      ],
    ),
    notion(
      "lan-accord-sujet",
      "L’accord du verbe avec son sujet",
      "Il identifie la relation sujet-verbe et réalise l’accord dans les situations simples.",
      [
        c("lan-accord-sujet-1", "Complète : « Les enfants … dans le jardin. »", ["joue", "jouent", "jouens"], "jouent"),
        c("lan-accord-sujet-2", "Complète : « Ma sœur et moi … à la piscine. »", ["vais", "va", "allons"], "allons"),
        c(
          "lan-accord-sujet-3",
          "Complète : « Le chat et le chien … dans la cuisine. »",
          ["dort", "dorment", "dormes"],
          "dorment",
        ),
        c("lan-accord-sujet-4", "Complète : « Tu … très vite. »", ["cours", "court", "courent"], "cours"),
        c("lan-accord-sujet-5", "Complète : « Les fleurs … dans le vase. »", ["fane", "fanent", "fanes"], "fanent"),
      ],
    ),
    notion(
      "lan-conjugaison",
      "Le présent, l’imparfait, le futur et le passé composé",
      "Il mémorise le présent, l’imparfait, le futur et le passé composé pour être, avoir, les verbes du premier groupe et les irréguliers fréquents.",
      [
        s("lan-conjugaison-1", "Conjugue « être » au présent avec « nous ».", "nous sommes"),
        s("lan-conjugaison-2", "Conjugue « avoir » au présent avec « ils ».", "ils ont"),
        s("lan-conjugaison-3", "Mets « je mange » au futur.", "je mangerai"),
        s("lan-conjugaison-4", "Mets « je mange » à l’imparfait.", "je mangeais"),
        /* Le é du participe est la notion : « j'ai mange » ne la montre pas. */
        { ...s("lan-conjugaison-5", "Mets « je mange » au passé composé.", "j’ai mangé"), accents: true },
      ],
    ),
    notion(
      "lan-homophones",
      "Les mots qui se prononcent pareil",
      "Il repère les homophones grammaticaux fréquents et identifie leur classe grammaticale.",
      [
        c("lan-homophones-1", "Complète : « Il … huit ans. »", ["à", "a", "as"], "a"),
        c("lan-homophones-2", "Complète : « Je vais … la piscine. »", ["a", "as", "à"], "à"),
        c("lan-homophones-3", "Complète : « Les livres … sur la table. »", ["son", "sont", "sons"], "sont"),
        c("lan-homophones-4", "Complète : « Il cherche … cartable. »", ["sont", "sons", "son"], "son"),
        c("lan-homophones-5", "Complète : « Mon frère … grand. »", ["et", "es", "est"], "est"),
      ],
    ),
  ],
};

/* ------------------------------------------------------------------ */
/* 7. La lecture et le sens des mots                                   */
/* ------------------------------------------------------------------ */

const lecture: Bloc = {
  code: "lecture",
  titre: "La lecture et le sens des mots",
  annonce: "Des textes courts à lire, et des questions sur le sens des mots.",
  notions: [
    notion(
      "lec-prelever",
      "Retrouver une information dans un texte",
      "Il repère et mémorise les informations importantes d’un texte et les relie entre elles.",
      [
        c(
          "lec-prelever-1",
          "« Quand Marek est rentré, la porte était ouverte et le chat avait disparu. Il a d’abord regardé sous le lit, puis il est sorti l’appeler dans la rue. » Où Marek a-t-il cherché en premier ?",
          ["dans la rue", "sous le lit", "derrière la porte"],
          "sous le lit",
        ),
        c(
          "lec-prelever-2",
          "« Sofia range ses affaires : deux cahiers, un livre de géographie et sa trousse verte. » De quelle couleur est la trousse ?",
          ["verte", "rouge", "on ne le sait pas"],
          "verte",
        ),
        c(
          "lec-prelever-3",
          "« Le train de 8 h 12 était supprimé. Nadia a pris celui de 9 h 40 et elle est arrivée en retard. » Quel train Nadia a-t-elle pris ?",
          ["celui de 8 h 12", "celui de 9 h 40", "aucun des deux"],
          "celui de 9 h 40",
        ),
        c(
          "lec-prelever-4",
          "« Dans le grenier, il y avait trois malles : une bleue, une noire et une couverte de poussière. » Combien de malles y avait-il ?",
          ["deux", "trois", "quatre"],
          "trois",
        ),
        c(
          "lec-prelever-5",
          "« Comme il pleuvait, le match a été reporté au samedi suivant. » Pourquoi le match a-t-il été reporté ?",
          ["il pleuvait", "il faisait nuit", "les joueurs étaient absents"],
          "il pleuvait",
        ),
      ],
    ),
    notion(
      "lec-inferer",
      "Comprendre ce qui n’est pas écrit",
      "Il accède à une compréhension inférentielle en autonomie et propose une interprétation appuyée sur le texte.",
      [
        c(
          "lec-inferer-1",
          "« Elle a soufflé les huit bougies et tout le monde a applaudi. » Que se passe-t-il ?",
          ["un anniversaire", "un incendie", "un spectacle de magie"],
          "un anniversaire",
        ),
        c(
          "lec-inferer-2",
          "« Il a mis son manteau, son bonnet et ses gants avant de sortir. » Quel temps fait-il ?",
          ["il fait froid", "il fait chaud", "c’est l’été"],
          "il fait froid",
        ),
        c(
          "lec-inferer-3",
          "« Le vétérinaire a dit que ce n’était pas grave et qu’il faudrait revenir dans huit jours. » De qui s’occupe-t-on ?",
          ["d’un animal", "d’un enfant", "d’une voiture"],
          "d’un animal",
        ),
        c(
          "lec-inferer-4",
          "« Le paquet de gâteaux était vide et il y avait des miettes partout sur le canapé. » Que s’est-il passé ?",
          ["quelqu’un a mangé les gâteaux", "quelqu’un a rangé le salon", "le paquet était neuf"],
          "quelqu’un a mangé les gâteaux",
        ),
        c(
          "lec-inferer-5",
          "« Papa a sorti la valise et vérifié les billets de train. » Que va-t-il se passer ?",
          ["un voyage", "un repas", "une sieste"],
          "un voyage",
        ),
      ],
    ),
    notion(
      "lec-consigne",
      "Comprendre une consigne",
      "Il met en œuvre une démarche explicite pour comprendre un texte, y compris les consignes de travail.",
      [
        s(
          "lec-consigne-1",
          "« Entoure les animaux qui volent, puis souligne ceux qui nagent. » Combien de choses différentes faut-il faire ?",
          "2",
        ),
        c(
          "lec-consigne-2",
          "« Recopie seulement les mots au pluriel. » Que fait-on des mots au singulier ?",
          ["on les recopie", "on ne les recopie pas", "on les barre"],
          "on ne les recopie pas",
        ),
        c(
          "lec-consigne-3",
          "« Complète la phrase sans utiliser le verbe être. » Peut-on écrire « il est grand » ?",
          ["oui", "non"],
          "non",
        ),
        s(
          "lec-consigne-4",
          "« Range ces quatre nombres du plus petit au plus grand. » Combien de nombres écriras-tu ?",
          "4",
        ),
        c(
          "lec-consigne-5",
          "« Colorie en rouge les carrés et en bleu les triangles. » De quelle couleur colories-tu un triangle ?",
          ["en rouge", "en bleu", "des deux couleurs"],
          "en bleu",
        ),
      ],
    ),
    notion(
      "lec-phrase",
      "La phrase et la ponctuation",
      "Il reconnaît les types de phrases, la forme négative, et utilise la ponctuation de fin de phrase.",
      [
        c(
          "lec-phrase-1",
          "« Où vas-tu ? » Quel type de phrase est-ce ?",
          ["une phrase déclarative", "une phrase interrogative", "une phrase impérative"],
          "une phrase interrogative",
        ),
        c(
          "lec-phrase-2",
          "Quel signe met-on à la fin d’une question ?",
          ["un point", "un point d’interrogation", "un point d’exclamation"],
          "un point d’interrogation",
        ),
        c(
          "lec-phrase-3",
          "Mets « Il vient. » à la forme négative.",
          ["Il ne vient pas.", "Il vient pas ?", "Vient-il ?"],
          "Il ne vient pas.",
        ),
        c(
          "lec-phrase-4",
          "« Ferme la porte. » Quel type de phrase est-ce ?",
          ["une phrase déclarative", "une phrase interrogative", "une phrase impérative"],
          "une phrase impérative",
        ),
        s("lec-phrase-5", "Combien de phrases dans : « Il pleut. Je reste à la maison. » ?", "2"),
      ],
    ),
    notion(
      "lec-vocabulaire",
      "Le sens des mots : familles, synonymes, contraires",
      "Il opère des dérivations, reconnaît la partie commune de certains mots, et mobilise synonymes et antonymes.",
      [
        c(
          "lec-vocabulaire-1",
          "Quel mot est de la même famille que « dent » ?",
          ["dentiste", "dedans", "danser"],
          "dentiste",
        ),
        c("lec-vocabulaire-2", "Quel mot est le contraire de « grand » ?", ["énorme", "petit", "gros"], "petit"),
        c(
          "lec-vocabulaire-3",
          "Quel mot veut dire la même chose que « content » ?",
          ["heureux", "fatigué", "inquiet"],
          "heureux",
        ),
        s("lec-vocabulaire-4", "Avec un préfixe, donne le contraire de « possible ».", "impossible"),
        c(
          "lec-vocabulaire-5",
          "Quel mot n’est pas de la famille de « terre » ?",
          ["terrain", "terrasse", "terrible"],
          "terrible",
        ),
      ],
    ),
  ],
};

/* ------------------------------------------------------------------ */
/* L’instrument                                                        */
/* ------------------------------------------------------------------ */

export const blocs: Bloc[] = [
  nombres,
  calcul,
  problemes,
  mesures,
  geometrie,
  langue,
  lecture,
];

export const notions = blocs.flatMap((b) => b.notions);
export const questions = notions.flatMap((n) => n.questions);
export const parCode = new Map(questions.map((q) => [q.code, q]));
export const blocDeNotion = new Map(
  blocs.flatMap((b) => b.notions.map((n) => [n.code, b] as const)),
);

/* ------------------------------------------------------------------ */
/* Ce que l’écran de l'enfant a le droit de savoir                     */
/* ------------------------------------------------------------------ */

/**
 * L’énoncé, et rien de plus.
 *
 * `attendu` et le code de la notion sont retirés **à la frontière**, et non
 * laissés à la vigilance de l’appelant : ce qui n’est pas transmis ne peut pas
 * fuiter dans un écran écrit dans six mois.
 */
export type QuestionPosee = {
  code: string;
  enonce: string;
  type: TypeQuestion;
  choix?: string[];
};

const poser = (q: Question): QuestionPosee => ({
  code: q.code,
  enonce: q.enonce,
  type: q.type,
  choix: q.choix,
});

/**
 * Le bloc tel qu'il part vers l'enfant : de quoi l'annoncer, et rien de plus.
 *
 * Trouvé par le test des portes, en écrivant le manuel côté adulte. `Etape`
 * rendait le `Bloc` entier — donc ses notions, donc leurs questions, donc
 * **tous les attendus**, jusque dans l'écran de l'enfant. Rien ne les
 * affichait, et `QuestionPosee` juste au-dessus prend soin de les retirer une
 * par une : la précaution était annulée par le champ d'à côté.
 *
 * C'est la forme classique de ce genre de fuite. On protège la chose qu'on
 * regarde, et on laisse passer le conteneur qui la contient.
 */
export type BlocPose = {
  code: string;
  titre: string;
  annonce: string;
  /** Le rang du bloc dans le test, et le nombre de blocs. « Partie 3 sur 7 ». */
  partie: number;
  parties: number;
};

export type Etape = {
  bloc: BlocPose;
  question: QuestionPosee;
  /** Le rang de la question dans le bloc, et la taille du bloc. */
  rang: number;
  total: number;
};

/**
 * La question suivante — et il n’y a pas le choix.
 *
 * **Dans un bloc, on va jusqu’au bout** : tant qu’il reste une question du
 * bloc commencé, c’est elle qui vient. On ne passe au bloc suivant qu’une fois
 * le précédent fini, et rien ne permet de sauter, de choisir ou d’abandonner
 * au milieu. C’est un examen.
 *
 * Ce qui est laissé à l'enfant, c’est de répondre « je ne sais pas » — à
 * chaque question, sans que l’écran ne lui dise jamais s’il a juste.
 */
export function prochaine(codesRepondus: string[]): Etape | null {
  const vus = new Set(codesRepondus);

  for (const [i, bloc] of blocs.entries()) {
    const qs = bloc.notions.flatMap((n) => n.questions);
    const faites = qs.filter((q) => vus.has(q.code)).length;
    if (faites === qs.length) continue;
    const suivante = qs.find((q) => !vus.has(q.code))!;
    return {
      bloc: poserBloc(i),
      question: poser(suivante),
      rang: faites + 1,
      total: qs.length,
    };
  }
  return null;
}

const poserBloc = (i: number): BlocPose => ({
  code: blocs[i].code,
  titre: blocs[i].titre,
  annonce: blocs[i].annonce,
  partie: i + 1,
  parties: blocs.length,
});

/**
 * Ce que le test lui propose aujourd'hui — **une partie par jour, au plus.**
 *
 * Retour des parents le 16 septembre 2026, le jour où il l'a commencé :
 * soixante et une questions en quarante minutes, deux parties finies et une
 * troisième entamée dans la foulée, et c'était « assez lourd ». L'écran
 * enchaînait les parties sans rien dire, par décision : une pause proposée
 * avait été lue comme une sortie annoncée avant l'entrée. Les parents l'ont vu
 * faire, et c'est leur lecture qui tranche.
 *
 * La coupure n'est donc pas une porte qu'il choisirait de prendre — il n'y a
 * toujours rien à valider, rien à abandonner. **C'est le test qui s'arrête** :
 * une partie finie, il n'y en a plus d'autre ce jour-là. Dans une partie, on
 * va toujours jusqu'au bout, et une partie commencée se finit le jour même,
 * même si une autre a déjà été finie ce jour-là : le changement de règle est
 * arrivé au milieu de sa troisième.
 *
 * `jour` est la date, à Paris, de chaque réponse. Une partie est « finie tel
 * jour » le jour de sa dernière réponse.
 */
export type Aujourdhui =
  | { etat: "question"; etape: Etape }
  /** La partie finie aujourd'hui. La suivante attend demain. */
  | { etat: "partie-finie"; partie: BlocPose }
  | { etat: "tout-fini" };

export function ceQuiVientAujourdhui(
  reponses: { exercice: string; jour: string }[],
  aujourdhui: string,
): Aujourdhui {
  const etape = prochaine(reponses.map((r) => r.exercice));
  if (!etape) return { etat: "tout-fini" };

  /* Une partie commencée, ou la toute première : on continue. */
  if (etape.rang > 1 || etape.bloc.partie === 1) return { etat: "question", etape };

  /* La suivante n'est pas commencée : la précédente a-t-elle fini aujourd'hui ? */
  const i = etape.bloc.partie - 2;
  const siens = new Set(blocs[i].notions.flatMap((n) => n.questions.map((q) => q.code)));
  const finiLe = reponses
    .filter((r) => siens.has(r.exercice))
    .reduce((dernier, r) => (r.jour > dernier ? r.jour : dernier), "");

  return finiLe >= aujourdhui
    ? { etat: "partie-finie", partie: poserBloc(i) }
    : { etat: "question", etape };
}

/** Les questions d’un bloc, pour compter. Aucune n’expose l’attendu. */
export const tailleBloc = (b: Bloc) =>
  b.notions.reduce((n, notion) => n + notion.questions.length, 0);

/** Les blocs finis. Sert à l’écran des adultes, et à annoncer le suivant. */
export function blocsFinis(codesRepondus: string[]) {
  const vus = new Set(codesRepondus);
  return blocs.filter((b) =>
    b.notions.flatMap((n) => n.questions).every((q) => vus.has(q.code)),
  );
}
