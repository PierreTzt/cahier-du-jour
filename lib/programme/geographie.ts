/**
 * Géographie, CM1 — l'année entière.
 *
 * Adossé au **programme d'histoire-géographie du cycle 3 publié au BO n° 22 du
 * 28 mai 2026**, appliqué au CM1 à la rentrée 2026.
 *
 * Le titre du programme de CM1 est « la diversité des modes de vie dans le
 * monde », et il comporte quatre thèmes : se nourrir, les inégalités dans le
 * monde, se déplacer, communiquer avec Internet. Le CM2 s'occupera de la
 * France et de l'Union européenne.
 *
 * Les quatre questions de la géographie reviennent dans chaque leçon :
 * « où ? », « qui ? », « comment ? », « pourquoi ici et pas ailleurs ? ».
 *
 * Rien de tout ceci n'a été relu par un enseignant. Ça doit l'être.
 */

import { e, q, type Lecon } from "./types";

/* ================================================================== */
/* THÈME 1 — Se nourrir                                               */
/* ================================================================== */

const seNourrir: Lecon = {
  code: "g-p1-se-nourrir",
  matiere: "geographie",
  periode: 1,
  titre: "Comment se nourrit-on dans le monde ?",
  reference:
    "Décrire les différences des pratiques alimentaires entre un pays riche et un pays en développement ; repères : deux pays à ration alimentaire très riche et deux pays à ration insuffisante, situés sur des continents différents.",
  minutes: 35,
  cours: [
    {
      texte: [
        "On ne mange pas la même chose partout, et pas la même quantité non plus. La première différence est une question de goût et d’habitude ; la seconde est une question de moyens, et elle est beaucoup plus grave.",
      ],
    },
    {
      titre: "L’aliment de base change selon les régions",
      texte: [
        "En Europe et en Amérique du Nord : le blé, sous forme de pain et de pâtes.",
        "En Asie de l’Est et du Sud-Est : le riz, à presque tous les repas.",
        "En Afrique subsaharienne : le mil, le sorgho, le manioc, l’igname.",
        "En Amérique centrale : le maïs, sous forme de galettes.",
        "Ce n’est pas un hasard : chaque région cultive ce qui pousse chez elle. Le riz a besoin de beaucoup d’eau et de chaleur, le blé supporte les climats tempérés.",
      ],
      regle:
        "L’alimentation de base d’une région dépend d’abord de ce que son climat permet de cultiver.",
    },
    {
      titre: "Ce qui se mesure : la ration alimentaire",
      texte: [
        "La **ration alimentaire**, c’est ce qu’une personne mange dans une journée. On la compte en **calories** : l’unité qui dit combien d’énergie un aliment apporte au corps.",
        "Un adulte a besoin d’environ 2 000 à 2 500 calories par jour. Un enfant de ton âge un peu moins ; quelqu’un qui travaille dehors toute la journée, davantage.",
        "Dans les pays riches, la moyenne dépasse souvent 3 400 calories par personne : c’est plus que nécessaire, et une partie est gaspillée.",
        "Dans certains pays d’Afrique subsaharienne ou d’Asie du Sud, la moyenne est bien plus basse : une partie de la population ne mange pas assez.",
        "Retiens bien ce mot de **moyenne** : il ne dit pas ce que mange une personne précise. Dans un pays à 3 400 calories, certains manquent ; dans un pays où la moyenne est basse, d’autres mangent à leur faim.",
      ],
      regle:
        "La ration alimentaire se compte en calories, par jour et par personne. Un adulte a besoin d’environ 2 000 à 2 500 calories.",
    },
    {
      titre: "Quatre pays repères",
      texte: [
        "Deux pays où la ration moyenne est très riche : les **États-Unis**, en Amérique du Nord, et la **France**, en Europe. Dans les deux, la moyenne dépasse 3 400 calories par jour.",
        "Deux pays où elle est insuffisante : **Madagascar**, en Afrique, et l’**Afghanistan**, en Asie. Dans les deux, une grande part de la population ne mange pas à sa faim.",
        "Quatre pays, quatre continents. Place-les sur un planisphère, la carte qui montre le monde entier à plat : c’est le repère à garder de cette leçon.",
        "Et pose la question du géographe : **pourquoi ici et pas ailleurs ?** Le climat n’explique pas tout à lui seul. Un pays peut avoir de bonnes terres et manquer quand même — à cause d’une sécheresse, d’une guerre, ou de routes coupées qui empêchent la nourriture d’arriver.",
      ],
    },
    {
      titre: "Deux mots à ne pas confondre",
      texte: [
        "La **sous-nutrition** : on ne mange pas assez, en quantité. On a faim.",
        "La **malnutrition** : on mange peut-être assez, mais mal — il manque des éléments indispensables, des protéines, des vitamines. On peut être mal nourri sans avoir faim.",
        "Les deux existent en même temps dans le monde, et parfois dans le même pays.",
      ],
      regle:
        "Sous-nutrition = pas assez. Malnutrition = mal équilibré. Ce n’est pas la même chose.",
    },
  ],
  exemples: [
    {
      enonce: "Pourquoi le riz est-il l’aliment de base en Asie du Sud-Est et pas en Europe du Nord ?",
      etapes: [
        "Le riz a besoin de beaucoup d’eau et d’une chaleur constante pour pousser.",
        "L’Asie du Sud-Est réunit les deux : moussons et climat chaud.",
        "En Europe du Nord, il fait trop frais : c’est le blé qui pousse, et c’est donc le blé qu’on mange.",
      ],
      resultat: "à cause du climat",
    },
  ],
  exercices: [
    q("g-p1-sn-1", "Lequel de ces aliments est un aliment de base en Afrique subsaharienne ?", ["le blé", "le manioc", "le riz"], "le manioc", "Le manioc est une grosse racine qui pousse bien sous le climat chaud de l’Afrique subsaharienne. Chaque région mange d’abord ce qui pousse chez elle."),
    q("g-p1-sn-2", "Quel est l’aliment de base en Europe ?", ["le blé", "le riz", "le manioc"], "le blé", "Sous forme de pain et de pâtes. Il supporte les climats tempérés."),
    q("g-p1-sn-3", "Dans une région où il fait chaud toute l’année et où il pleut beaucoup, quelle céréale pousse le mieux ?", ["le riz", "le blé"], "le riz", "Le riz a besoin de beaucoup d’eau et de chaleur : cette région lui convient. C’est le climat qui décide d’abord de ce qu’on cultive, donc de ce qu’on mange."),
    q("g-p1-sn-4", "De combien de calories par jour un adulte a-t-il besoin environ ?", ["entre 2 000 et 2 500", "entre 200 et 250", "entre 20 000 et 25 000"], "entre 2 000 et 2 500", "Cela dépend de l’âge et de l’activité : on a besoin de plus quand on travaille dehors toute la journée."),
    q("g-p1-sn-5", "Que veut dire « sous-nutrition » ?", ["ne pas manger assez", "mal manger", "manger trop"], "ne pas manger assez", "C’est une question de quantité. La malnutrition, elle, est une question d’équilibre."),
    q("g-p1-sn-6", "Dans une région, les habitants mangent à leur faim, mais presque toujours le même plat de céréales, sans fruits, sans légumes, sans viande ni poisson. Sont-ils bien nourris ?", ["oui, puisqu’ils n’ont pas faim", "non, leurs repas sont mal équilibrés"], "non, leurs repas sont mal équilibrés", "Manger assez ne suffit pas : il leur manque des protéines et des vitamines. C’est la malnutrition : on peut être mal nourri sans avoir faim."),
  ],
  reprise: [
    q("g-p1-sn-r1", "En Amérique centrale, l’aliment de base se mange surtout sous forme de galettes. Avec quelle céréale sont-elles faites ?", ["le maïs", "le riz", "le mil"], "le maïs", "Le maïs est l’aliment de base de l’Amérique centrale, et on le mange surtout en galettes. Chaque région mange d’abord ce qu’elle cultive."),
    q("g-p1-sn-r2", "Le mil et le sorgho sont des aliments de base…", ["en Afrique subsaharienne", "en Europe", "en Amérique du Nord"], "en Afrique subsaharienne", "Avec le manioc et l’igname, ce sont les cultures de l’Afrique subsaharienne : on y mange d’abord ce qui pousse sur place."),
    q("g-p1-sn-r3", "Dans une région au climat tempéré, sans grande chaleur, laquelle de ces deux céréales pousse le mieux ?", ["le blé", "le riz"], "le blé", "Le blé supporte les climats tempérés ; le riz a besoin de beaucoup d’eau et de chaleur. Le climat décide d’abord de ce qu’on cultive, donc de ce qu’on mange."),
    q("g-p1-sn-r4", "Dans les pays riches, la ration alimentaire moyenne dépasse souvent…", ["3 400 calories par jour", "340 calories par jour", "34 000 calories par jour"], "3 400 calories par jour", "C’est plus que les 2 000 à 2 500 calories dont un adulte a besoin, et une partie de cette nourriture est gaspillée."),
    q("g-p1-sn-r5", "Pendant une sécheresse, les récoltes manquent et des familles n’ont plus assez à manger. Quel mot de la leçon décrit cette situation ?", ["la sous-nutrition", "la malnutrition", "le gaspillage"], "la sous-nutrition", "Ne pas manger assez, en quantité, c’est la sous-nutrition : on a faim. La malnutrition, c’est manger mal équilibré."),
    q("g-p1-sn-r6", "Un enfant mange assez pour ne plus avoir faim, mais ses repas manquent de protéines et de vitamines. Quel mot de la leçon décrit cette situation ?", ["la malnutrition", "la sous-nutrition"], "la malnutrition", "La quantité y est, pas l’équilibre : c’est la malnutrition. On peut être mal nourri sans avoir faim."),
  ],
};

const produits: Lecon = {
  code: "g-p1-produits",
  matiere: "geographie",
  periode: 1,
  titre: "D’où vient ce qu’on mange ?",
  reference:
    "Décrire la différence entre produits agricoles et produits transformés ; connaître la provenance des principaux aliments consommés ; mots-clés : produit agricole, produit alimentaire transformé.",
  minutes: 25,
  cours: [
    {
      texte: [
        "Ouvre un placard de cuisine et regarde les étiquettes : la plupart des aliments viennent de loin, et presque aucun n’est arrivé tel qu’il a poussé.",
      ],
    },
    {
      titre: "Agricole ou transformé",
      texte: [
        "Un **produit agricole** sort du champ ou de la ferme sans avoir été modifié : une pomme, un œuf, du blé, du lait cru.",
        "Un **produit transformé** a été fabriqué à partir de produits agricoles : du pain, un yaourt, une compote, des pâtes, un biscuit.",
        "La transformation permet de conserver plus longtemps, de transporter plus facilement, et de rendre mangeable ce qui ne l’était pas — on ne mange pas du blé à la cuillère.",
      ],
      regle:
        "Produit agricole : tel qu’il vient du champ. Produit transformé : il est passé par une usine ou une cuisine.",
    },
    {
      titre: "Lire une étiquette",
      texte: [
        "Une étiquette dit d’où vient le produit, ce qu’il contient, et souvent où il a été fabriqué — ce qui n’est pas le même endroit.",
        "La liste des ingrédients est rangée **du plus abondant au moins abondant**. Si le sucre est en premier, c’est qu’il y a surtout du sucre.",
        "Un même paquet peut mêler des ingrédients de trois continents : cacao d’Afrique, sucre d’Amérique, lait d’Europe.",
      ],
    },
    {
      titre: "Pourquoi ça vient de loin",
      texte: [
        "Parce que certains produits ne poussent pas en France métropolitaine, la partie de la France qui est en Europe : le cacao, le café, le poivre, la banane. La banane pousse pourtant en France, mais outre-mer, en Guadeloupe et en Martinique : elle traverse l’océan pour arriver jusqu’ici.",
        "Parce que les saisons sont inversées dans l’hémisphère sud : quand c’est l’hiver ici, c’est l’été là-bas. Les fraises de janvier viennent donc de loin — ou bien de serres chauffées, plus près, ce qui coûte beaucoup d’énergie.",
        "Et parce que c’est parfois moins cher de produire ailleurs, même en payant le transport.",
        "Chaque kilomètre a un coût, en argent et en énergie. C’est pourquoi on parle de manger local et de saison.",
      ],
      regle:
        "Trois raisons pour qu’un aliment vienne de loin : ça ne pousse pas ici, ce n’est pas la saison, ou c’est moins cher.",
    },
  ],
  exemples: [
    {
      enonce: "Un yaourt aux fruits : quels produits agricoles a-t-il fallu, et pourquoi est-ce un produit transformé ?",
      etapes: [
        "Produits agricoles de départ : du lait, des fruits, du sucre issu de la betterave ou de la canne.",
        "Le lait a été chauffé, ensemencé de bactéries, refroidi ; les fruits ont été cuits et sucrés.",
        "Rien n’est arrivé tel quel dans le pot : c’est donc un produit transformé.",
      ],
      resultat: "lait, fruits, sucre — transformés en usine",
    },
  ],
  exercices: [
    q("g-p1-pr-1", "Une pomme cueillie sur l’arbre est un produit…", ["agricole", "transformé"], "agricole", "Elle sort du verger sans avoir été modifiée."),
    q("g-p1-pr-2", "Un yaourt est un produit…", ["transformé", "agricole"], "transformé", "Il est fabriqué à partir de lait, un produit agricole."),
    q("g-p1-pr-3", "Dans quel ordre est rangée la liste des ingrédients d’une étiquette ?", ["du plus abondant au moins abondant", "par ordre alphabétique", "au hasard"], "du plus abondant au moins abondant", "Si le sucre est en premier, c’est qu’il y en a plus que tout le reste."),
    q("g-p1-pr-4", "Pourquoi le cacao vient-il de loin ?", ["il ne pousse pas en France métropolitaine", "il est trop lourd", "il est interdit"], "il ne pousse pas en France métropolitaine", "Le cacaoyer a besoin d’un climat chaud et humide toute l’année : il ne pousse pas en France métropolitaine, où les hivers sont trop froids."),
    q("g-p1-pr-5", "Pourquoi trouve-t-on des fraises en janvier ?", ["elles viennent de l’hémisphère sud ou de serres", "elles poussent en hiver", "elles sont conservées un an"], "elles viennent de l’hémisphère sud ou de serres", "Les saisons y sont inversées. Ou bien elles sont cultivées sous serre chauffée."),
    q("g-p1-pr-6", "À quoi sert la transformation d’un aliment ?", ["conserver, transporter, rendre mangeable", "le rendre plus cher", "changer sa couleur"], "conserver, transporter, rendre mangeable", "On ne mange pas du blé à la cuillère : il faut le moudre et le cuire."),
  ],
  reprise: [
    q("g-p1-pr-r2", "Un morceau de fromage est un produit…", ["transformé", "agricole"], "transformé", "Il est fabriqué à partir de lait : le lait est le produit agricole, le fromage le produit transformé."),
    q("g-p1-pr-r1", "Une carotte tout juste arrachée du champ est un produit…", ["transformé", "agricole"], "agricole", "Elle sort du champ telle qu’elle a poussé, sans avoir été modifiée."),
    q("g-p1-pr-r3", "Sur un paquet de biscuits, la liste des ingrédients commence par « farine de blé », puis « sucre ». Quel ingrédient y a-t-il en plus grande quantité ?", ["la farine de blé", "le sucre", "on ne peut pas le savoir"], "la farine de blé", "La liste est rangée du plus abondant au moins abondant : le premier ingrédient est celui dont il y a le plus."),
    q("g-p1-pr-r4", "Lequel de ces aliments vient de loin parce qu’il ne pousse pas ici ?", ["le café", "la pomme de terre", "le blé"], "le café", "Le café pousse dans des pays chauds toute l’année, loin d’ici. La pomme de terre et le blé, eux, poussent dans nos champs."),
    q("g-p1-pr-r5", "Des raisins vendus chez nous en février ont poussé dans l’hémisphère sud. Quelle saison est-ce là-bas en février ?", ["l’été", "l’hiver", "l’automne"], "l’été", "Les saisons sont inversées dans l’hémisphère sud : quand c’est l’hiver chez nous, c’est l’été là-bas, et les fruits y mûrissent."),
    q("g-p1-pr-r6", "Pourquoi transforme-t-on des fruits en compote, dans des pots fermés ?", ["pour les conserver plus longtemps", "pour qu’ils poussent plus vite", "pour qu’ils soient plus lourds"], "pour les conserver plus longtemps", "Un fruit frais s’abîme en quelques jours ; cuit et mis en pot, il se garde beaucoup plus longtemps. Transformer sert aussi à transporter et à rendre mangeable."),
  ],
};

const chaineProduction: Lecon = {
  code: "g-p2-chaine",
  matiere: "geographie",
  periode: 2,
  titre: "La chaîne de production d’un aliment",
  reference:
    "Décrire la chaîne de production d’un aliment consommé : yaourt, biscuit, fruit ; décrire les différences des pratiques alimentaires entre un pays riche et un pays en développement.",
  minutes: 30,
  cours: [
    {
      texte: [
        "Entre le champ et l’assiette, il y a une suite d’étapes, de lieux et de métiers. Suivre cette chaîne, c’est comprendre comment le monde est organisé.",
      ],
    },
    {
      titre: "Les cinq étapes",
      texte: [
        "**Produire** : cultiver, élever. À la ferme.",
        "**Collecter** : rassembler ce qui a été produit chez beaucoup de producteurs. Le camion-citerne qui passe dans les fermes.",
        "**Transformer** : l’usine, où le lait devient yaourt et le blé devient farine puis biscuit.",
        "**Transporter et distribuer** : les entrepôts, les camions, les magasins.",
        "**Consommer** : chez nous.",
        "À chaque étape, des gens travaillent, et une part du prix leur revient.",
      ],
      regle:
        "Le prix payé en magasin se partage tout le long de la chaîne. La part qui revient à celui qui produit est souvent la plus petite.",
    },
    {
      titre: "Suivre un yaourt",
      texte: [
        "Le lait est trait à la ferme, deux fois par jour, et stocké au froid.",
        "Un camion-citerne le collecte dans plusieurs fermes et l’amène à la laiterie.",
        "À la laiterie : chauffage pour détruire les microbes, ajout de bactéries utiles, mise en pot, repos à 45 degrés pendant quelques heures, puis refroidissement.",
        "Les fruits arrivent d’ailleurs, ont été cuits et sucrés ailleurs encore.",
        "Puis entrepôt, camion, magasin, réfrigérateur.",
      ],
    },
    {
      titre: "Ce que la chaîne dit du monde",
      texte: [
        "Dans un pays riche, la chaîne est longue et industrielle : beaucoup d’étapes, beaucoup de transport, des produits très transformés.",
        "On appelle **pays en développement** un pays où l’école, les soins et les revenus progressent encore, en partant de loin. Le mot revient dans la leçon sur les inégalités, où l’on verra comment on le mesure.",
        "Dans un pays en développement, une grande partie de l’alimentation vient de très près : on cultive pour sa famille, on vend le surplus au marché voisin. La chaîne est courte.",
        "Aucune des deux n’est meilleure en tout : la chaîne longue nourrit les villes et évite les pénuries locales, mais elle dépend du transport et de l’énergie. La chaîne courte est plus fragile face à une mauvaise récolte.",
      ],
      regle:
        "Chaîne longue : plus de choix, plus de dépendance. Chaîne courte : moins de transport, plus de risque local.",
    },
  ],
  exemples: [
    {
      enonce: "Range dans l’ordre : transformer, consommer, produire, distribuer, collecter.",
      etapes: [
        "Tout commence à la ferme : produire.",
        "Puis on rassemble ce qui a été produit : collecter.",
        "Puis l’usine : transformer.",
        "Puis les entrepôts et les magasins : distribuer.",
        "Et enfin : consommer.",
      ],
      resultat: "produire, collecter, transformer, distribuer, consommer",
    },
  ],
  exercices: [
    q("g-p2-ch-1", "Par quelle étape commence la chaîne de production ?", ["produire", "transformer", "distribuer"], "produire", "Tout commence à la ferme ou au champ."),
    q("g-p2-ch-2", "Où le lait devient-il yaourt ?", ["à la laiterie", "à la ferme", "au magasin"], "à la laiterie", "C’est l’étape de transformation : chauffage, ajout de bactéries, mise en pot."),
    q("g-p2-ch-3", "À quoi sert le camion-citerne ?", ["collecter le lait dans plusieurs fermes", "transformer le lait", "vendre le lait"], "collecter le lait dans plusieurs fermes", "La collecte rassemble ce qui a été produit chez beaucoup de producteurs."),
    q("g-p2-ch-4", "Dans un pays en développement, la chaîne alimentaire est souvent…", ["plus courte", "plus longue", "identique"], "plus courte", "On cultive souvent pour sa famille et on vend le surplus au marché voisin."),
    q("g-p2-ch-5", "Quel est l’inconvénient d’une chaîne longue ?", ["elle dépend du transport et de l’énergie", "elle offre moins de choix", "elle est plus sûre"], "elle dépend du transport et de l’énergie", "Si le transport s’interrompt, les magasins se vident."),
    q("g-p2-ch-6", "Qui touche souvent la plus petite part du prix payé en magasin ?", ["celui qui produit", "le magasin", "le transporteur"], "celui qui produit", "Le prix se partage le long de la chaîne, et l’agriculteur en reçoit souvent le moins."),
  ],
};

/* ================================================================== */
/* THÈME 2 — Les inégalités dans le monde                              */
/* ================================================================== */

const inegalites: Lecon = {
  code: "g-p2-inegalites",
  matiere: "geographie",
  periode: 2,
  titre: "Les inégalités de niveau de vie",
  reference:
    "Identifier les manifestations des inégalités de niveau de vie dans le monde ; mot-clé : inégalités.",
  minutes: 35,
  cours: [
    {
      texte: [
        "Tous les habitants de la planète n’ont pas les mêmes conditions de vie. Ce n’est pas une opinion : ça se mesure, et ça se voit sur une carte.",
      ],
    },
    {
      titre: "Ce qu’on mesure",
      texte: [
        "L’**espérance de vie** : l’âge moyen auquel on meurt dans un pays. Elle dépasse 82 ans au Japon et descend sous 55 ans dans certains pays d’Afrique centrale. Près de trente ans d’écart.",
        "La **mortalité infantile** : combien d’enfants sur mille meurent avant un an. C’est l’indicateur le plus parlant, parce qu’il dit tout de la santé et de l’eau potable.",
        "Le **taux d’alphabétisation** : la part des adultes qui savent lire et écrire.",
        "Le **revenu moyen** par habitant.",
      ],
      regle:
        "Ces chiffres sont des **moyennes**. Dans un pays riche, il y a des pauvres ; dans un pays pauvre, il y a des riches. La moyenne cache toujours quelque chose.",
    },
    {
      titre: "Où ça se voit",
      texte: [
        "Les niveaux de vie les plus élevés se trouvent en Amérique du Nord, en Europe de l’Ouest, au Japon, en Corée du Sud, en Australie.",
        "Les plus bas se trouvent surtout en Afrique subsaharienne et dans certaines régions d’Asie du Sud.",
        "Entre les deux, des pays qui se développent vite, comme la Chine, l’Inde, le Brésil.",
      ],
    },
    {
      titre: "Un seul nombre pour résumer : l’IDH",
      texte: [
        "Comparer les pays avec quatre indicateurs à la fois devient vite compliqué. On a donc fabriqué un chiffre unique, l’**IDH** — l’indice de développement humain.",
        "Il mélange trois choses : la **santé** (l’espérance de vie), l’**éducation** (le temps passé à l’école) et le **niveau de vie** (le revenu par habitant).",
        "Le résultat est un nombre entre 0 et 1. Plus il approche de 1, meilleures sont les conditions de vie. La Norvège et la Suisse dépassent 0,95 ; plusieurs pays d’Afrique subsaharienne restent en dessous de 0,45.",
        "On appelle **pays en développement** ceux dont l’IDH est encore bas : l’école, les soins et les revenus y progressent, mais partent de loin. C’est une mesure de ce qui reste à construire, pas un jugement sur ceux qui y vivent.",
      ],
      regle:
        "L’IDH résume la santé, l’école et le revenu en un seul nombre, entre 0 et 1. Comme toute moyenne, il simplifie.",
    },
    {
      titre: "Inégalités entre pays, et à l’intérieur",
      texte: [
        "Il y a des inégalités **entre** les pays, et c’est ce qu’on voit sur une carte du monde.",
        "Mais il y en a aussi **à l’intérieur** de chaque pays : entre la ville et la campagne, entre les quartiers d’une même ville, entre les régions.",
        "Une carte à l’échelle mondiale ne les montre pas. Il faut changer d’échelle pour les voir — et changer d’échelle est l’un des gestes de base du géographe.",
      ],
      regle:
        "Changer d’échelle fait apparaître d’autres inégalités. Ce qu’on voit dépend de la distance d’où l’on regarde.",
    },
  ],
  exemples: [
    {
      enonce: "Pourquoi la mortalité infantile renseigne-t-elle bien sur le niveau de vie d’un pays ?",
      etapes: [
        "Un nourrisson dépend entièrement de son environnement.",
        "Sa survie exige de l’eau potable, des vaccins, des soins, du personnel formé, et une mère elle-même en bonne santé.",
        "Ce chiffre unique résume donc l’état de la santé, de l’eau et de l’organisation du pays.",
      ],
      resultat: "parce qu’il résume la santé, l’eau et les soins",
    },
  ],
  exercices: [
    q("g-p2-in-1", "Qu’est-ce que l’espérance de vie ?", ["l’âge moyen auquel on meurt dans un pays", "l’âge du plus vieil habitant", "l’âge de la retraite"], "l’âge moyen auquel on meurt dans un pays", "Elle varie de près de trente ans selon les pays."),
    q("g-p2-in-2", "Quel indicateur renseigne le mieux sur la santé et l’eau potable ?", ["la mortalité infantile", "le revenu moyen", "la population totale"], "la mortalité infantile", "La survie d’un nourrisson dépend de tout l’environnement."),
    q("g-p2-in-3", "Dans quelle région du monde les niveaux de vie sont-ils les plus bas ?", ["en Afrique subsaharienne", "en Europe de l’Ouest", "au Japon"], "en Afrique subsaharienne", "Ainsi que dans certaines régions d’Asie du Sud."),
    q("g-p2-in-4", "Que cache une moyenne nationale ?", ["les écarts à l’intérieur du pays", "rien", "la population"], "les écarts à l’intérieur du pays", "Dans un pays riche il y a des pauvres, et l’inverse. La moyenne les fait disparaître."),
    q("g-p2-in-5", "Que faut-il faire pour voir les inégalités à l’intérieur d’un pays ?", ["changer d’échelle", "changer de carte du monde", "compter la population"], "changer d’échelle", "Une carte mondiale ne montre pas les écarts entre deux quartiers d’une même ville."),
    q("g-p2-in-6", "Qu’est-ce que le taux d’alphabétisation ?", ["la part des adultes qui savent lire et écrire", "le nombre d’écoles", "le nombre de livres"], "la part des adultes qui savent lire et écrire", "C’est l’un des indicateurs du niveau de développement."),
  ],
};

const airesRegionales: Lecon = {
  code: "g-p3-aires",
  matiere: "geographie",
  periode: 3,
  titre: "Se repérer sur un planisphère",
  reference:
    "Localiser et nommer sur un planisphère les aires régionales : Afrique subsaharienne, Maghreb, Amérique du Nord, Amérique du Sud, Asie du Sud-Est, Asie de l’Est, Europe, Océanie.",
  minutes: 35,
  cours: [
    {
      texte: [
        "Pour parler du monde, il faut d’abord pouvoir le montrer. Cette leçon donne les repères qui serviront toute l’année — et toutes les années suivantes.",
      ],
    },
    {
      titre: "Les continents et les océans",
      texte: [
        "Six continents habités : l’Europe, l’Asie, l’Afrique, l’Amérique du Nord, l’Amérique du Sud, l’Océanie. Et l’Antarctique, sans population permanente.",
        "Tu entendras parfois parler de cinq continents : on compte alors l’Amérique d’un seul tenant. Les deux façons de compter existent ; dans ce manuel, on en compte six.",
        "Cinq océans : le Pacifique — le plus grand —, l’Atlantique, l’Indien, l’Arctique, l’Austral.",
        "L’**équateur** partage le globe en deux hémisphères, nord et sud. Plus on s’en éloigne, plus il fait généralement froid.",
      ],
      regle:
        "Sur une carte, le nord est en haut, l’est à droite. Ce n’est qu’une convention — mais tout le monde l’utilise.",
    },
    {
      titre: "Les aires régionales",
      texte: [
        "Un continent est parfois trop grand pour qu’on en parle d’un bloc. On le découpe alors en **aires régionales**, qui rassemblent des pays proches et comparables.",
        "En Afrique : le **Maghreb** au nord — Maroc, Algérie, Tunisie — et l’**Afrique subsaharienne** au sud du Sahara.",
        "En Amérique : l’**Amérique du Nord** — Canada, États-Unis, Mexique — et l’**Amérique du Sud**.",
        "En Asie : l’**Asie de l’Est** — Chine, Japon, Corées — et l’**Asie du Sud-Est** — Vietnam, Thaïlande, Indonésie, Philippines.",
        "Plus l’**Europe** et l’**Océanie**.",
      ],
    },
    {
      titre: "Comment tenir ces repères",
      texte: [
        "Pour placer une aire régionale, cherche d’abord deux choses sur la carte : l’équateur, et l’océan qui la borde. L’Atlantique sépare l’Amérique de l’Europe et de l’Afrique ; le Pacifique sépare l’Asie de l’Amérique.",
        "L’**Amérique du Sud** est la partie basse du continent américain : Brésil, Argentine, Pérou, Chili. Entre elle et l’Amérique du Nord s’étire l’**Amérique centrale**, du Guatemala au Panama, avec les îles des Caraïbes.",
        "L’**Océanie** est au sud-est de l’Asie, pour l’essentiel au sud de l’équateur : l’Australie, la Nouvelle-Zélande, la Papouasie-Nouvelle-Guinée, et des milliers d’îles dans le Pacifique.",
        "La confusion la plus fréquente est entre l’Asie de l’Est et l’Asie du Sud-Est. Un moyen de s’y retrouver : l’Asie de l’Est est la plus au nord — Chine, Japon, Corées. L’Asie du Sud-Est est juste en dessous, autour de l’équateur — Vietnam, Thaïlande, Indonésie, Philippines.",
      ],
      regle:
        "On ne retient pas une carte par cœur. On se repère par rapport à ce qu’on connaît déjà : l’équateur, les océans, un pays voisin.",
    },
    {
      titre: "Pourquoi ce découpage",
      texte: [
        "Parce que le Sahara sépare réellement : climat, langues, histoire, échanges. Parler de « l’Afrique » d’un seul bloc n’a pas grand sens.",
        "Le géographe découpe selon ce qu’il veut comprendre. Un autre découpage serait possible — et ce n’est pas un défaut, c’est un choix qu’il faut savoir justifier.",
      ],
      regle:
        "Une aire régionale n’est pas une frontière naturelle : c’est un regroupement utile, choisi et discutable.",
    },
  ],
  exemples: [
    {
      enonce: "Où se trouve le Maghreb, et pourquoi le distingue-t-on de l’Afrique subsaharienne ?",
      etapes: [
        "Le Maghreb est au nord-ouest de l’Afrique : Maroc, Algérie, Tunisie.",
        "Le Sahara le sépare du reste du continent.",
        "Climat, langues, histoire et échanges diffèrent de part et d’autre du désert : le distinguer aide à comprendre.",
      ],
      resultat: "au nord-ouest de l’Afrique, séparé par le Sahara",
    },
  ],
  exercices: [
    e("g-p3-ai-1", "Combien de continents habités la leçon nomme-t-elle ? Réponds par un nombre.", "6", "Europe, Asie, Afrique, Amérique du Nord, Amérique du Sud, Océanie. L’Antarctique n’a pas de population permanente."),
    q("g-p3-ai-2", "Quel est le plus grand océan ?", ["le Pacifique", "l’Atlantique", "l’Indien"], "le Pacifique", "Il couvre à lui seul près d’un tiers de la surface du globe."),
    q("g-p3-ai-3", "Où se trouve le Maghreb ?", ["au nord-ouest de l’Afrique", "en Asie", "au sud de l’Afrique"], "au nord-ouest de l’Afrique", "Maroc, Algérie, Tunisie — au nord du Sahara."),
    q("g-p3-ai-4", "Quels pays sont en Asie de l’Est ?", ["la Chine et le Japon", "le Vietnam et la Thaïlande", "l’Inde et le Pakistan"], "la Chine et le Japon", "Le Vietnam et la Thaïlande sont en Asie du Sud-Est."),
    q("g-p3-ai-5", "Que sépare l’équateur ?", ["les hémisphères nord et sud", "les continents", "les océans"], "les hémisphères nord et sud", "Plus on s’en éloigne, plus il fait généralement froid."),
    q("g-p3-ai-6", "Une aire régionale est…", ["un regroupement utile et discutable", "une frontière naturelle", "un pays"], "un regroupement utile et discutable", "Le géographe découpe selon ce qu’il veut comprendre, et doit pouvoir justifier son choix."),
  ],
};

const accesInegal: Lecon = {
  code: "g-p3-acces",
  matiere: "geographie",
  periode: 3,
  titre: "L’inégal accès à l’eau, à la santé, à l’école",
  reference:
    "Connaître et comprendre l’inégal accès à l’eau, ou à la santé, ou à l’éducation ; identifier les manifestations des inégalités de niveau de vie dans le monde.",
  minutes: 30,
  cours: [
    {
      texte: [
        "Certaines choses paraissent aller de soi quand on les a : de l’eau au robinet, un médecin quand on est malade, une école à côté de chez soi. Des centaines de millions de personnes n’ont aucune des trois.",
      ],
    },
    {
      titre: "L’eau",
      texte: [
        "Environ deux milliards de personnes n’ont pas d’eau potable sûre chez elles.",
        "Le problème n’est presque jamais qu’il n’y a pas d’eau : c’est qu’elle n’est pas **potable**, ou qu’elle est trop loin. Il faut des tuyaux, des pompes, des stations de traitement — des installations coûteuses.",
        "Conséquence directe : les maladies. Une eau souillée transmet le choléra, la typhoïde, des diarrhées qui tuent les jeunes enfants.",
        "Conséquence indirecte, et lourde : ce sont le plus souvent les femmes et les filles qui vont chercher l’eau, parfois plusieurs heures par jour. Ces heures-là ne sont pas passées à l’école.",
      ],
      regle:
        "L’accès à l’eau, à la santé et à l’école ne sont pas trois problèmes séparés : chacun aggrave les autres.",
    },
    {
      titre: "La santé",
      texte: [
        "Le nombre de médecins par habitant varie énormément : environ un pour trois cents habitants en France, un pour plusieurs milliers dans certains pays.",
        "Il faut aussi des hôpitaux, des médicaments, des vaccins, de l’électricité pour conserver les vaccins au froid, et des routes pour y arriver.",
        "Et il faut pouvoir payer. Là où les soins ne sont pas gratuits, une maladie peut ruiner une famille.",
      ],
    },
    {
      titre: "L’école",
      texte: [
        "Des dizaines de millions d’enfants ne vont pas à l’école. Dans les pays les plus pauvres, ce sont plus souvent les filles qui n’y vont pas, ou qui s’arrêtent les premières.",
        "Les raisons sont concrètes : l’école est trop loin, il faut travailler ou s’occuper des petits frères, la scolarité coûte, ou bien une guerre a tout arrêté.",
        "Sans école, pas de lecture ; sans lecture, moins de travail possible, moins de soins compris, moins de droits exercés. Le manque se transmet à la génération suivante.",
      ],
      regle:
        "Priver un enfant d’école a des effets qui durent toute sa vie, et souvent au-delà.",
    },
  ],
  exemples: [
    {
      enonce: "En quoi le manque d’eau potable empêche-t-il d’aller à l’école ?",
      etapes: [
        "Quand l’eau est loin, il faut aller la chercher chaque jour, parfois plusieurs heures.",
        "Ce sont le plus souvent les filles qui le font.",
        "Ces heures ne sont pas passées en classe — et l’eau souillée rend malade, ce qui fait manquer davantage encore.",
      ],
      resultat: "le temps du transport et les maladies",
    },
  ],
  exercices: [
    q("g-p3-ac-1", "Quel est le principal problème d’accès à l’eau dans le monde ?", ["elle n’est pas potable ou trop loin", "il n’y a pas d’eau", "elle est trop chère"], "elle n’est pas potable ou trop loin", "Il faut des tuyaux, des pompes et des stations de traitement, qui coûtent cher."),
    q("g-p3-ac-2", "Qui va le plus souvent chercher l’eau ?", ["les femmes et les filles", "les hommes", "les enfants des deux sexes également"], "les femmes et les filles", "Parfois plusieurs heures par jour — des heures qui ne sont pas passées à l’école."),
    q("g-p3-ac-3", "Quelle maladie une eau souillée peut-elle transmettre ?", ["le choléra", "la grippe", "la varicelle"], "le choléra", "Ainsi que la typhoïde et des diarrhées, qui tuent surtout les jeunes enfants."),
    q("g-p3-ac-4", "Pourquoi faut-il de l’électricité pour vacciner ?", ["pour conserver les vaccins au froid", "pour éclairer", "pour les fabriquer sur place"], "pour conserver les vaccins au froid", "Sans chaîne du froid, les vaccins deviennent inutilisables."),
    q("g-p3-ac-5", "Dans les pays les plus pauvres, qui s’arrête le plus souvent d’aller à l’école ?", ["les filles", "les garçons", "personne"], "les filles", "Elles sont plus souvent retenues à la maison pour le travail domestique et pour aller chercher l’eau."),
    q("g-p3-ac-6", "Pourquoi dit-on que ces trois inégalités sont liées ?", ["chacune aggrave les autres", "elles sont identiques", "elles sont indépendantes"], "chacune aggrave les autres", "Pas d’eau propre → maladies → absences → pas d’école → moins de soins compris."),
  ],
};

/* ================================================================== */
/* THÈME 3 — Se déplacer (période 4)                                   */
/* ================================================================== */

const seDeplacer: Lecon = {
  code: "g-p4-se-deplacer",
  matiere: "geographie",
  periode: 4,
  titre: "Comment se déplace-t-on dans le monde ?",
  reference:
    "Connaître les principaux modes de transport de personnes et les infrastructures associées : avion/aéroport, bateau/port, train/gare, voiture/route, métro/station, vélo/voie cyclable.",
  minutes: 25,
  cours: [
    {
      texte: [
        "Chaque moyen de transport a besoin d’une installation pour fonctionner. Sans elle, il ne sert à rien — et ces installations façonnent les paysages.",
      ],
    },
    {
      titre: "Chaque transport, son infrastructure",
      texte: [
        "L’avion a besoin d’un **aéroport** : des pistes longues de plusieurs kilomètres, des terminaux, des radars.",
        "Le bateau a besoin d’un **port** : des quais, des grues, de la profondeur d’eau.",
        "Le train a besoin de **rails** et de **gares**.",
        "La voiture a besoin de **routes**, de parkings, de stations-service.",
        "Le métro a besoin de **tunnels** et de **stations**.",
        "Le vélo a besoin de **voies cyclables** et de stationnements sûrs.",
        "Et la marche, elle, n’a besoin que d’un trottoir — c’est le mode de déplacement le plus utilisé au monde, et le moins compté.",
      ],
      regle:
        "Un moyen de transport sans infrastructure ne transporte personne. C’est pourquoi les infrastructures sont des choix politiques.",
    },
    {
      titre: "À chaque distance son transport",
      texte: [
        "Dans la journée : la marche, le vélo, le métro, le bus. Des distances de quelques kilomètres.",
        "Dans la semaine : la voiture, le train régional. Des dizaines de kilomètres.",
        "Plus rarement : le train à grande vitesse, l’avion. Des centaines ou des milliers de kilomètres.",
        "Personne ne prend l’avion pour aller chercher le pain, et personne ne marche jusqu’en Australie. Le choix dépend de la distance et du temps disponible.",
      ],
    },
    {
      titre: "Qui peut se déplacer",
      texte: [
        "Se déplacer coûte, et tout le monde ne peut pas. Un habitant d’un pays riche prend l’avion plusieurs fois dans sa vie ; une grande partie de l’humanité ne l’a jamais pris.",
        "Dans un même pays, ceux qui n’ont pas de voiture dépendent entièrement des transports en commun — et il y en a beaucoup moins à la campagne qu’en ville.",
      ],
      regle:
        "La liberté de se déplacer n’est pas la même pour tous. C’est une inégalité, comme l’eau ou l’école.",
    },
  ],
  exemples: [
    {
      enonce: "Quelle infrastructure faut-il pour un avion, et pourquoi ne peut-on pas atterrir n’importe où ?",
      etapes: [
        "Un avion a besoin d’un aéroport.",
        "Il faut une piste longue de plusieurs kilomètres, parfaitement plane et dégagée.",
        "Plus des terminaux, des radars, du carburant, du personnel. Rien de tout cela ne s’improvise.",
      ],
      resultat: "un aéroport, avec de longues pistes",
    },
  ],
  exercices: [
    q("g-p4-sd-1", "Quelle infrastructure faut-il pour un train ?", ["des rails et des gares", "des routes", "des pistes"], "des rails et des gares", "Sans voie ferrée ni gare pour y monter, un train ne transporte personne."),
    q("g-p4-sd-2", "Quelle infrastructure faut-il pour un bateau ?", ["un port", "un aéroport", "une gare"], "un port", "Des quais, des grues, et assez de profondeur d’eau."),
    q("g-p4-sd-3", "Quel est le mode de déplacement le plus utilisé au monde ?", ["la marche", "la voiture", "le train"], "la marche", "Et c’est aussi le moins compté dans les statistiques."),
    q("g-p4-sd-4", "Pour un trajet de deux kilomètres en ville, quel mode est le plus adapté ?", ["la marche ou le vélo", "l’avion", "le bateau"], "la marche ou le vélo", "Le choix du transport dépend de la distance et du temps."),
    q("g-p4-sd-5", "Pourquoi les infrastructures sont-elles des choix politiques ?", ["elles décident qui peut se déplacer", "elles coûtent peu", "elles sont naturelles"], "elles décident qui peut se déplacer", "Construire une voie cyclable ou une autoroute n’aide pas les mêmes personnes."),
    q("g-p4-sd-6", "Qui dépend le plus des transports en commun ?", ["ceux qui n’ont pas de voiture", "les habitants des villes seulement", "personne"], "ceux qui n’ont pas de voiture", "Et il y en a beaucoup moins à la campagne qu’en ville."),
  ],
};

const distances: Lecon = {
  code: "g-p4-distances",
  matiere: "geographie",
  periode: 4,
  titre: "Deux façons de mesurer une distance",
  reference:
    "Identifier la diversité des modalités de déplacement au cours de différentes périodes de temps, en les associant à la distance à parcourir ; deux unités de mesure des déplacements : la distance kilométrique et la distance en temps.",
  minutes: 30,
  cours: [
    {
      texte: [
        "« C’est loin ? » — la question paraît simple, et il y a deux réponses possibles, qui ne disent pas la même chose.",
      ],
    },
    {
      titre: "Les kilomètres, et le temps",
      texte: [
        "La **distance kilométrique** ne bouge pas : Paris et Marseille sont séparées d’environ 660 km à vol d’oiseau, aujourd’hui comme il y a deux siècles. Par la route on compte environ 780 km, parce qu’une route contourne les reliefs.",
        "La **distance en temps** change tout le temps : à pied il fallait des semaines, en diligence environ une semaine, en train à grande vitesse aujourd’hui trois heures.",
        "C’est cette seconde distance qui compte dans la vie réelle. Personne ne dit « j’habite à 12 km du travail », on dit « j’en ai pour vingt minutes ».",
      ],
      regle:
        "Les kilomètres ne bougent pas. Le temps de trajet, lui, dépend du transport, de l’heure et des infrastructures.",
    },
    {
      titre: "Le monde s’est rétréci",
      texte: [
        "L’expédition partie avec Magellan en 1519 a mis trois ans à faire le tour du monde : elle est rentrée en 1522, sans lui — il était mort en chemin. Aujourd’hui, un avion de ligne boucle le tour de la Terre en une cinquantaine d’heures de vol.",
        "Les géographes parlent de **contraction de l’espace-temps** : les kilomètres sont les mêmes, mais le monde est devenu plus petit en durée.",
        "Cette contraction n’est pas égale partout. Deux capitales bien reliées sont « proches » ; deux villages sans route restent loin l’un de l’autre, même à trente kilomètres.",
      ],
    },
    {
      titre: "Plus près en temps qu’en kilomètres",
      texte: [
        "À vol d’oiseau, Londres et Clermont-Ferrand sont presque à la même distance de Paris : environ 345 km chacune.",
        "Pourtant on met à peu près 2 h 15 pour rejoindre Londres, contre 3 h 30 environ pour Clermont-Ferrand. Le tunnel sous la Manche et un train direct à grande vitesse font toute la différence.",
        "Une bonne desserte rapproche plus sûrement que la carte. C’est une réponse à la question « pourquoi ici et pas ailleurs ? » : ce qui compte n’est pas seulement où sont les lieux, mais comment ils sont reliés.",
      ],
      regle:
        "Être proche en kilomètres et être proche en temps sont deux choses différentes. Les transports décident de la seconde.",
    },
  ],
  exemples: [
    {
      enonce: "Londres et Clermont-Ferrand sont à peu près à la même distance de Paris. Pourquoi dit-on que Londres est plus « proche » ?",
      etapes: [
        "À vol d’oiseau, les deux sont à environ 345 km de Paris : en kilomètres, c’est presque à égalité.",
        "En temps, l’écart apparaît : environ 2 h 15 vers Londres, avec un train direct à grande vitesse.",
        "Vers Clermont-Ferrand, la liaison est plus lente : environ 3 h 30. La desserte compte plus que la distance.",
      ],
      resultat: "parce qu’il est mieux desservi",
    },
  ],
  exercices: [
    q("g-p4-di-1", "La distance en kilomètres entre deux villes change-t-elle avec le temps ?", ["non", "oui"], "non", "Les deux villes sont à la même place qu’il y a deux siècles. C’est le temps du trajet qui a changé, pas la distance."),
    q("g-p4-di-2", "Qu’est-ce qui a changé le temps de trajet Paris-Marseille ?", ["les moyens de transport", "la distance", "le climat"], "les moyens de transport", "Des semaines à pied, une semaine en diligence, trois heures en train."),
    q("g-p4-di-3", "Comment les géographes appellent-ils le fait que le monde paraisse plus petit ?", ["la contraction de l’espace-temps", "la mondialisation", "le rétrécissement"], "la contraction de l’espace-temps", "Les kilomètres sont les mêmes, mais les durées ont fondu."),
    q("g-p4-di-4", "Cette contraction est-elle égale partout ?", ["non", "oui"], "non", "Deux capitales bien reliées sont proches ; deux villages sans route restent loin."),
    q("g-p4-di-5", "Quelle distance utilise-t-on dans la vie de tous les jours ?", ["la distance en temps", "la distance en kilomètres"], "la distance en temps", "On dit « j’en ai pour vingt minutes », pas « j’habite à 12 km »."),
    e("g-p4-di-6", "Combien d’années a duré le premier tour du monde, celui de l’expédition de Magellan ? Réponds par un nombre.", "3", "Partie en 1519, rentrée en 1522. Un avion de ligne le fait aujourd’hui en une cinquantaine d’heures de vol."),
  ],
};

/* ================================================================== */
/* THÈME 4 — Communiquer avec Internet (période 5)                     */
/* ================================================================== */

const internet: Lecon = {
  code: "g-p5-internet",
  matiere: "geographie",
  periode: 5,
  titre: "Comment marche Internet",
  reference:
    "Expliquer qu’Internet repose sur un réseau de câbles continentaux et sous-marins reliant les aires régionales, ainsi que sur des satellites ; repère : les principales concentrations de câbles sous-marins.",
  minutes: 35,
  cours: [
    {
      texte: [
        "Quand tu envoies un message, il ne voyage pas « dans les airs ». Il passe presque toujours par des **câbles**, dont une grande partie repose au fond des océans.",
        "C’est l’une des choses les plus surprenantes de la géographie contemporaine : le réseau le plus moderne du monde est fait de fils posés sur le plancher marin.",
      ],
    },
    {
      titre: "Ce qu’est un réseau",
      texte: [
        "Un **réseau**, c’est un ensemble de lignes qui relient des points entre eux : des routes entre des villes, des rails entre des gares, des câbles entre des continents.",
        "Tu en as déjà rencontré un dans la leçon sur les déplacements. Internet fonctionne de la même façon, avec des lignes qu’on ne voit pas.",
        "Dans un réseau, tous les points ne se valent pas. Certains sont des **nœuds** : beaucoup de lignes y passent, et si le nœud s’arrête, une grande partie du réseau s’arrête avec lui.",
      ],
      regle:
        "Un réseau, ce sont des lignes et des nœuds. Route, rail ou câble : le géographe les lit de la même manière.",
    },
    {
      titre: "Des câbles, surtout",
      texte: [
        "Presque toutes les données qui traversent un océan — plus de 95 pour cent — passent par des **câbles sous-marins** : de la fibre optique à peine plus épaisse qu’un tuyau d’arrosage, posée au fond de l’eau par des navires spécialisés.",
        "Il y en a plus de cinq cents, totalisant plus d’un million de kilomètres.",
        "À l’intérieur, l’information voyage sous forme de **lumière**, à une vitesse considérable — mais pas infinie : un message Paris-Sydney met un peu de temps, et ça se mesure.",
        "Les satellites, eux, servent surtout là où le câble ne va pas : en mer, dans les déserts, dans les zones isolées.",
      ],
      regle:
        "Internet n’est pas dans le ciel. Il est au fond de l’eau, et c’est ce qui le rend vulnérable : un chalutier ou un séisme peut couper un câble.",
    },
    {
      titre: "Où passent les câbles",
      texte: [
        "Les concentrations les plus fortes se trouvent dans l’Atlantique Nord, entre l’Amérique du Nord et l’Europe de l’Ouest ; entre l’Europe et l’Asie via la Méditerranée, la mer Rouge et l’océan Indien ; et dans le Pacifique, entre l’Asie de l’Est et l’Amérique.",
        "Certains passages sont des goulots : le détroit de Bab el-Mandeb, le canal de Suez. Quelques câbles y passent côte à côte, et un incident y affecte un continent entier.",
      ],
    },
    {
      titre: "Et les centres de données",
      texte: [
        "Une page web n’existe pas seulement dans l’écran : elle est enregistrée sur des ordinateurs, dans de grands bâtiments appelés **centres de données**.",
        "Ces bâtiments consomment beaucoup d’électricité, et beaucoup d’eau ou d’air pour se refroidir. On les installe donc là où l’électricité est abondante et où il fait frais — en Islande, dans le nord de la Suède.",
        "Envoyer un message a donc un coût matériel et énergétique, même si on ne le voit pas.",
      ],
      regle:
        "Rien n’est immatériel dans le numérique : il y a des câbles, des bâtiments, de l’électricité et de l’eau.",
    },
  ],
  exemples: [
    {
      enonce: "Pourquoi installe-t-on des centres de données en Islande ?",
      etapes: [
        "Un centre de données consomme énormément d’électricité et chauffe beaucoup.",
        "L’Islande produit une électricité abondante et bon marché, d’origine géothermique et hydraulique.",
        "Et il y fait froid toute l’année : le refroidissement coûte donc beaucoup moins cher.",
      ],
      resultat: "électricité abondante et climat froid",
    },
  ],
  exercices: [
    q("g-p5-in-1", "Par quoi passent presque toutes les données échangées entre les continents ?", ["des câbles sous-marins", "des satellites", "des antennes"], "des câbles sous-marins", "Plus de 95 pour cent. Les satellites servent surtout là où le câble ne va pas."),
    q("g-p5-in-2", "Sous quelle forme l’information voyage-t-elle dans un câble de fibre optique ?", ["sous forme de lumière", "sous forme de son", "sous forme d’air"], "sous forme de lumière", "À très grande vitesse, mais pas infinie : la distance se mesure encore."),
    q("g-p5-in-3", "Qu’est-ce qui rend les câbles sous-marins vulnérables ?", ["un chalutier ou un séisme peut les couper", "la pluie", "le vent"], "un chalutier ou un séisme peut les couper", "Et quelques passages étroits concentrent beaucoup de câbles à la fois."),
    q("g-p5-in-4", "Où sont stockées les pages web ?", ["dans des centres de données", "dans les satellites", "dans l’écran de l’ordinateur"], "dans des centres de données", "De grands bâtiments remplis d’ordinateurs, qui consomment beaucoup d’électricité."),
    q("g-p5-in-5", "Pourquoi installe-t-on des centres de données dans les pays froids ?", ["pour économiser le refroidissement", "pour la beauté du paysage", "par hasard"], "pour économiser le refroidissement", "Les machines chauffent beaucoup, et le froid extérieur fait le travail gratuitement."),
    q("g-p5-in-6", "Le numérique est-il immatériel ?", ["non", "oui"], "non", "Il y a des câbles, des bâtiments, de l’électricité et de l’eau. On ne les voit simplement pas."),
  ],
};

const fractureNumerique: Lecon = {
  code: "g-p5-fracture",
  matiere: "geographie",
  periode: 5,
  titre: "Tout le monde n’a pas Internet",
  reference:
    "Décrire les inégalités d’accès à Internet à l’échelle mondiale à partir de la carte du taux d’accès de la population par pays, et à l’échelle nationale à partir de la carte du déploiement de la 5G en France.",
  minutes: 25,
  cours: [
    {
      texte: [
        "Internet paraît universel quand on l’a. Environ un tiers de l’humanité n’y a pourtant aucun accès, et cet écart s’appelle la **fracture numérique**.",
      ],
    },
    {
      titre: "À l’échelle du monde",
      texte: [
        "Dans les pays riches, plus de neuf personnes sur dix sont connectées.",
        "Dans certains pays d’Afrique subsaharienne, c’est moins de trois sur dix.",
        "Les raisons s’empilent : il faut des câbles et des antennes — donc de l’argent —, de l’électricité fiable, un appareil à acheter, un abonnement à payer, et savoir lire.",
        "Là où l’électricité s’interrompt plusieurs heures par jour, aucun réseau ne tient.",
      ],
      regle:
        "L’accès à Internet dépend de l’électricité, de l’argent et de l’école. C’est une inégalité qui s’ajoute aux autres, et qui les aggrave.",
    },
    {
      titre: "À l’échelle de la France",
      texte: [
        "Même dans un pays riche, l’accès n’est pas égal. Les villes sont couvertes par la fibre et la 5G bien avant les campagnes.",
        "On parle de **zones blanches** : des endroits où le réseau mobile ne passe pas, ou très mal. Il en reste en montagne et dans les campagnes peu peuplées.",
        "La raison est économique : installer une antenne coûte le même prix pour cent habitants que pour cent mille. Les opérateurs commencent donc par les zones denses.",
      ],
    },
    {
      titre: "Pourquoi ça compte de plus en plus",
      texte: [
        "Beaucoup de démarches ne se font plus qu’en ligne : déclarer ses impôts, demander un papier, prendre un rendez-vous médical, s’inscrire à l’école.",
        "Ne pas avoir Internet, ou ne pas savoir s’en servir, devient donc un empêchement d’exercer ses droits.",
        "Et cela touche deux populations différentes : ceux qui n’ont pas le réseau, et ceux qui l’ont mais n’ont pas appris à l’utiliser.",
      ],
      regle:
        "Il y a deux fractures : celle du réseau, et celle de l’usage. La seconde ne se règle pas avec des câbles.",
    },
  ],
  exemples: [
    {
      enonce: "Pourquoi la 5G arrive-t-elle plus tard à la campagne qu’en ville ?",
      etapes: [
        "Installer une antenne coûte à peu près le même prix partout.",
        "En ville, elle servira à des dizaines de milliers de personnes ; à la campagne, à quelques centaines.",
        "Les opérateurs commencent donc par là où ça rapporte, et l’État doit intervenir pour le reste.",
      ],
      resultat: "parce que le coût par habitant est beaucoup plus élevé",
    },
  ],
  exercices: [
    q("g-p5-fr-1", "Comment appelle-t-on l’inégalité d’accès à Internet ?", ["la fracture numérique", "la zone blanche", "le réseau"], "la fracture numérique", "Environ un tiers de l’humanité n’a aucun accès à Internet."),
    q("g-p5-fr-2", "Qu’est-ce qu’une zone blanche ?", ["un endroit sans réseau mobile", "une zone enneigée", "un centre de données"], "un endroit sans réseau mobile", "Il en reste en montagne et dans les campagnes peu peuplées."),
    q("g-p5-fr-3", "Pourquoi la 5G arrive-t-elle d’abord en ville ?", ["une antenne y sert plus de monde", "il y fait plus chaud", "c’est plus facile techniquement"], "une antenne y sert plus de monde", "Le coût est le même, le nombre d’habitants desservis ne l’est pas."),
    q("g-p5-fr-4", "Que faut-il, en plus d’un câble, pour avoir Internet ?", ["de l’électricité fiable", "une voiture", "un aéroport"], "de l’électricité fiable", "Là où l’électricité s’interrompt plusieurs heures par jour, aucun réseau ne tient."),
    q("g-p5-fr-5", "Combien y a-t-il de fractures numériques d’après la leçon ?", ["deux : le réseau et l’usage", "une seule", "trois"], "deux : le réseau et l’usage", "Avoir le réseau ne suffit pas : il faut aussi avoir appris à s’en servir."),
    q("g-p5-fr-6", "Pourquoi l’accès à Internet devient-il un droit important ?", ["beaucoup de démarches ne se font plus qu’en ligne", "pour jouer", "pour regarder des vidéos"], "beaucoup de démarches ne se font plus qu’en ligne", "Impôts, rendez-vous médicaux, inscriptions : sans accès, on ne peut plus exercer ses droits."),
  ],
};

export const geographie: Lecon[] = [
  seNourrir,
  produits,
  chaineProduction,
  inegalites,
  airesRegionales,
  accesInegal,
  seDeplacer,
  distances,
  internet,
  fractureNumerique,
];
