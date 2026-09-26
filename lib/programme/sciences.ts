/**
 * Sciences et technologie, CM1 — l'année entière.
 *
 * Adossé au **programme de sciences et technologie du cycle 3 publié au BO
 * n° 24 du 11 juin 2026**, appliqué au CM1 à la rentrée 2026. C'est un
 * programme neuf, et c'est celui de l'année de l'enfant.
 *
 * Quatre domaines : la matière, les mouvements et les signaux ; les êtres
 * vivants dans leur environnement ; le corps humain et la santé ; les objets
 * techniques au cœur de la société.
 *
 * Une remarque importante sur ce qui suit. Les sciences s'apprennent en
 * manipulant : peser, transvaser, tamiser, filtrer, planter, observer. Les
 * leçons qui suivent **ne remplacent pas les manipulations**, elles les
 * préparent et les prolongent. Chaque cours dit ce qu'il y aurait à faire avec
 * les mains, et c'est aux parents de le faire faire — un écran ne fait pas
 * dissoudre du sel dans de l'eau.
 *
 * La leçon sur la puberté fait partie du programme de CM1. Elle est marquée
 * `reserveeAuxParents` : aucune leçon n'arrive dans la journée sans qu'un
 * adulte l'y place, et celle-là mérite que le moment soit choisi.
 *
 * Rien de tout ceci n'a été relu par un enseignant. Ça doit l'être.
 */

import { e, q, type Lecon } from "./types";

/* ================================================================== */
/* PÉRIODE 1                                                           */
/* ================================================================== */

const masse: Lecon = {
  code: "s-p1-masse",
  matiere: "sciences",
  periode: 1,
  titre: "Mesurer une masse",
  reference:
    "Comparer les masses de différents objets à l’aide d’un dispositif simple ; mesurer la masse d’un solide ou d’un liquide à l’aide d’une balance, en tarant la balance le cas échéant.",
  minutes: 30,
  cours: [
    {
      texte: [
        "Ce qu’une balance mesure s’appelle la **masse**. Dans la vie de tous les jours, on dit souvent « le poids » ; en sciences, on dit « la masse ». Elle se mesure en **grammes** (g) et en **kilogrammes** (kg) : 1 kg = 1 000 g. Un morceau de sucre pèse environ 5 g, une pomme environ 150 g, un litre d’eau 1 kg.",
        "Avant de mesurer, on peut comparer. Deux objets dans les mains : lequel est le plus lourd ? Ça marche quand l’écart est grand, et ça ne marche plus quand il est petit.",
        "C’est pour ça qu’on a inventé les balances.",
      ],
    },
    {
      titre: "Comparer, sans chiffres",
      texte: [
        "Une **balance à plateaux**, seule, ne donne pas de nombre : elle dit seulement lequel des deux côtés est le plus lourd. Le plateau qui descend porte le plus lourd.",
        "Si les deux plateaux sont à la même hauteur, les masses sont égales. On dit que la balance est en équilibre.",
        "La barre qui porte les deux plateaux s’appelle le **fléau**. Un cintre pendu à une ficelle, avec un sac accroché à chaque bout, fait la même chose qu’une balance à plateaux : il compare.",
      ],
      regle:
        "Comparer, c’est dire lequel est le plus lourd. Mesurer, c’est dire de combien. Ce sont deux opérations différentes.",
    },
    {
      titre: "Mesurer, avec une unité",
      texte: [
        "Pour obtenir un nombre, il faut une unité : le gramme, le kilogramme.",
        "Sur une balance à plateaux, on met l’objet d’un côté et, de l’autre, des **masses marquées** : de petits poids en métal dont la masse est écrite dessus, 10 g, 50 g, 100 g. On en ajoute jusqu’à l’équilibre, puis on additionne ce qui est écrit sur les masses posées.",
        "Une balance électronique fait ce travail toute seule et affiche le résultat.",
      ],
    },
    {
      titre: "La tare : peser ce qui coule",
      texte: [
        "Comment peser un liquide ? On ne peut pas le poser sur le plateau.",
        "Première méthode : peser le récipient vide, puis le récipient plein, et faire la **différence**. Un bol vide de 200 g qui pèse 550 g plein contient 350 g de liquide.",
        "Deuxième méthode : poser le récipient vide sur la balance et appuyer sur le bouton **tare**. La balance repart de zéro et oublie le récipient. On verse alors, et elle affiche seulement le liquide.",
      ],
      regle:
        "Tarer, c’est dire à la balance d’oublier ce qui est déjà dessus. C’est un raccourci pour la soustraction.",
    },
    {
      titre: "Plus tard, avec les mains",
      texte: [
        "Ce n’est pas à faire maintenant, tout seul : garde-le pour un moment avec papa ou maman. Vous pourrez fabriquer une balance qui compare : un cintre pendu à une ficelle, un sac en plastique accroché à chaque bout. Une pomme d’un côté, des cuillères de l’autre, jusqu’à ce que le cintre soit droit : combien de cuillères vaut une pomme ?",
        "Puis avec la balance de cuisine : pèse un verre vide et note le nombre ; remplis-le d’eau, pèse encore, et calcule la masse de l’eau. Ensuite refais-le avec le bouton « tare » : tu dois trouver le même nombre sans soustraction.",
        "Enfin, pèse un ballon de baudruche gonflé et une petite pierre. Le plus gros n’est pas le plus lourd.",
      ],
    },
  ],
  exemples: [
    {
      enonce: "Un bol vide pèse 180 g. Rempli de farine, il pèse 620 g. Quelle est la masse de la farine ?",
      etapes: [
        "La balance a pesé le bol **et** la farine.",
        "Pour n’avoir que la farine, je retire la masse du bol.",
        "620 − 180 = 440 g.",
      ],
      resultat: "440 g",
    },
  ],
  exercices: [
    q("s-p1-ma-1", "Sur une balance à plateaux, le plateau qui descend porte l’objet…", ["le plus lourd", "le plus léger", "le plus gros"], "le plus lourd", "La balance penche du côté de la plus grande masse. Le plus gros n’est pas toujours le plus lourd : un ballon gonflé est plus gros qu’une pomme, et bien plus léger."),
    q("s-p1-ma-2", "Deux plateaux à la même hauteur veulent dire…", ["les masses sont égales", "la balance est cassée", "un plateau est vide"], "les masses sont égales", "On dit que la balance est en équilibre."),
    e("s-p1-ma-3", "Un saladier vide pèse 150 g. Rempli de riz, il pèse 700 g. Quelle est la masse du riz, en grammes ?", "550", "La balance a pesé les deux ensemble. On retire le saladier : 700 − 150 = 550 g."),
    q("s-p1-ma-4", "À quoi sert le bouton « tare » d’une balance ?", ["à oublier ce qui est déjà dessus", "à changer d’unité", "à l’éteindre"], "à oublier ce qui est déjà dessus", "La balance repart de zéro : c’est un raccourci pour la soustraction."),
    q("s-p1-ma-5", "Quelle est la différence entre comparer et mesurer ?", ["mesurer donne un nombre", "c’est la même chose", "comparer est plus précis"], "mesurer donne un nombre", "Comparer dit lequel est le plus lourd ; mesurer dit de combien, avec une unité."),
    q("s-p1-ma-6", "Tu poses un bol de 90 g sur la balance et tu appuies sur « tare ». Puis tu verses 250 g de sucre. Qu’affiche la balance ?", ["250 g", "340 g", "160 g"], "250 g", "Après la tare, la balance a oublié le bol : elle affiche seulement ce qu’on verse. Sans la tare, elle aurait affiché 90 + 250 = 340 g."),
    e("s-p1-ma-7", "Un sac de pommes pèse 3 kg. Combien de grammes cela fait-il ?", "3 000", "1 kg, c’est 1 000 g. Trois kilogrammes, c’est trois fois 1 000 g : 3 000 g."),
    e("s-p1-ma-8", "Sur une balance à plateaux, tu poses une pomme à gauche. L’équilibre arrive quand tu mets à droite une masse marquée de 100 g et une de 50 g. Quelle est la masse de la pomme, en grammes ?", "150", "À l’équilibre, les deux côtés ont la même masse. On additionne les masses marquées : 100 + 50 = 150 g."),
  ],
  reprise: [
    q("s-p1-ma-r1", "Sur une balance à plateaux, tu poses une orange à gauche et une pomme à droite. Le plateau de gauche descend. Que peux-tu dire ?", ["l’orange est plus lourde que la pomme", "la pomme est plus lourde que l’orange", "l’orange est plus grosse que la pomme"], "l’orange est plus lourde que la pomme", "Le plateau qui descend porte la plus grande masse. La balance ne dit rien de la taille : elle compare seulement les masses."),
    q("s-p1-ma-r2", "Sur une balance à plateaux, tu mets une gomme d’un côté et trois billes de l’autre. Les deux plateaux sont à la même hauteur. Que peux-tu dire ?", ["la gomme a la même masse que les trois billes ensemble", "la gomme est plus lourde que les trois billes", "la balance ne marche pas"], "la gomme a la même masse que les trois billes ensemble", "Plateaux à la même hauteur : la balance est en équilibre, et les masses des deux côtés sont égales."),
    e("s-p1-ma-r3", "Tu pèses un seau vide : 300 g. Tu le remplis de sable et tu le pèses encore : 950 g. Combien pèse le sable seul, en grammes ?", "650", "La balance a pesé le seau et le sable ensemble. On retire le seau : 950 − 300 = 650 g."),
    q("s-p1-ma-r4", "Tu poses un verre vide sur une balance électronique et tu appuies sur « tare ». Qu’affiche la balance tout de suite après ?", ["0 g", "la masse du verre", "rien, elle s’éteint"], "0 g", "Tarer, c’est dire à la balance d’oublier ce qui est déjà dessus : elle repart de zéro. Ensuite, elle n’affiche que ce qu’on ajoute."),
    q("s-p1-ma-r5", "Une balance à plateaux, utilisée seule, sans masses marquées, permet de…", ["comparer deux masses", "mesurer une masse en grammes", "mesurer une longueur"], "comparer deux masses", "Seule, elle dit lequel des deux côtés est le plus lourd, sans donner de nombre. Pour mesurer, il faut une unité : les masses marquées."),
    q("s-p1-ma-r6", "Un bol est posé sur la balance, et on a appuyé sur « tare ». On y met des cerises : la balance affiche 200 g. Quelle est la masse des cerises ?", ["200 g", "plus de 200 g", "on ne peut pas savoir sans peser le bol"], "200 g", "Après la tare, la balance a oublié le bol : ce qu’elle affiche, c’est seulement ce qu’on a ajouté. Pas besoin de soustraction."),
    e("s-p1-ma-r7", "Un cartable rempli pèse 4 kg. Quelle est sa masse en grammes ?", "4 000", "1 kg, c’est 1 000 g. Quatre kilogrammes, c’est quatre fois 1 000 g : 4 000 g."),
    e("s-p1-ma-r8", "Une poire est posée sur un plateau de la balance. L’équilibre arrive avec, sur l’autre plateau, une masse marquée de 100 g et deux de 10 g. Combien pèse la poire, en grammes ?", "120", "À l’équilibre, les deux plateaux portent la même masse. On additionne toutes les masses marquées posées : 100 + 10 + 10 = 120 g."),
  ],
};

const melanges: Lecon = {
  code: "s-p1-melanges",
  matiere: "sciences",
  periode: 1,
  titre: "Les mélanges, et comment les séparer",
  reference:
    "Distinguer des mélanges homogènes et des mélanges hétérogènes ; séparer les constituants d’un mélange de solides ou d’un mélange solide-liquide par tamisage, décantation, filtration.",
  minutes: 30,
  cours: [
    {
      texte: [
        "Quand on met plusieurs choses ensemble, on obtient un **mélange**. Les choses qu’on a mélangées s’appellent les **constituants** du mélange : dans une salade de fruits, les constituants sont les morceaux de pomme, de banane et d’orange. Et il y a deux sortes de mélanges, qu’on distingue à l’œil.",
      ],
    },
    {
      titre: "Homogène ou hétérogène",
      texte: [
        "Un mélange **hétérogène** : on distingue encore les différents constituants. De l’eau et du sable, de l’huile et du vinaigre, une salade.",
        "Un mélange **homogène** : on ne les distingue plus, tout se ressemble. De l’eau et du sel dissous, de l’eau et du sirop.",
        "Les mots le disent : « hétéro » veut dire différent, « homo » veut dire semblable.",
      ],
      regle:
        "Hétérogène : on voit encore les morceaux. Homogène : on ne voit plus qu’une seule chose.",
    },
    {
      titre: "Trois façons de séparer",
      texte: [
        "Le **tamisage** sépare des solides de tailles différentes. Un tamis retient ce qui est plus gros que ses mailles. Pour séparer des cailloux, du gravier et du sable, on commence par le tamis aux mailles les plus larges. Ce n’est pas obligatoire, mais c’est plus pratique : pris en premier, le tamis fin porterait tout le mélange d’un coup, il se boucherait vite, et les gros cailloux pourraient l’abîmer.",
        "La **décantation** laisse les solides tomber au fond. On attend, ça se dépose, et on récupère doucement le liquide clair au-dessus. Elle marche aussi pour deux liquides qui ne se mélangent pas : l’huile remonte au-dessus de l’eau, et on peut la retirer à la cuillère.",
        "La **filtration** fait passer le liquide à travers un filtre qui retient les solides : filtre à café, tissu, papier absorbant.",
      ],
      regle:
        "Tamiser : solides de tailles différentes. Décanter : attendre que ça tombe. Filtrer : retenir les solides au passage.",
    },
    {
      titre: "Plus tard, avec les mains",
      texte: [
        "Ce n’est pas à faire maintenant, tout seul : garde-le pour un moment avec papa ou maman. Vous pourrez mélanger de la terre et de l’eau dans une bouteille, attendre, observer le dépôt ; puis filtrer avec un filtre à café et comparer.",
        "Et tamiser un mélange de gravier et de sable dans les deux ordres, pour voir ce que l’ordre change. Une passoire et un tamis à farine font deux tailles de mailles.",
        "Enfin, verse de l’huile et du vinaigre dans un bocal, secoue fort, et regarde : d’abord tout est trouble, puis deux couches se reforment. C’est une décantation, sans rien faire d’autre qu’attendre.",
      ],
    },
  ],
  exemples: [
    {
      enonce: "Tu as un mélange de cailloux, de gravier et de sable. Dans quel ordre utiliser tes tamis ?",
      etapes: [
        "Le tamis aux mailles les plus larges d’abord : il retient les cailloux et laisse passer le reste.",
        "Puis le tamis moyen : il retient le gravier, le sable passe.",
        "Si on commençait par le plus fin, le sable passerait quand même. Mais les cailloux et le gravier resteraient tous ensemble sur ce tamis fin : il se boucherait vite, les cailloux pourraient l’abîmer, et il faudrait encore trier ce qui reste dessus. Commencer par le plus large est plus pratique.",
      ],
      resultat: "du plus large au plus fin",
    },
  ],
  exercices: [
    q("s-p1-me-1", "Du jus de citron versé dans de l’eau, puis bien remué, forme un mélange…", ["hétérogène", "homogène"], "homogène", "On ne distingue plus le jus de citron de l’eau : tout se ressemble. « Homo » veut dire semblable."),
    q("s-p1-me-2", "Des pâtes dans l’eau de la casserole forment un mélange…", ["hétérogène", "homogène"], "hétérogène", "On distingue encore les pâtes dans l’eau : ce sont deux constituants différents. « Hétéro » veut dire différent."),
    q("s-p1-me-3", "Tu verses un mélange de pommes de pin, de glands et de terre fine dans un tamis aux mailles larges, puis ce qui est passé dans un tamis aux mailles fines. Qu’est-ce qui reste sur le tamis aux mailles fines ?", ["les pommes de pin", "les glands", "la terre fine"], "les glands", "Le tamis aux mailles larges retient les pommes de pin, les plus grosses ; les glands et la terre passent. Le tamis aux mailles fines retient ensuite les glands, et la terre fine passe à travers."),
    q("s-p1-me-4", "Après un orage, l’eau d’une flaque est toute trouble. Le lendemain matin, la terre s’est déposée au fond et l’eau est claire au-dessus. Quelle séparation s’est faite toute seule ?", ["la décantation", "la filtration", "le tamisage"], "la décantation", "Personne n’a rien filtré ni tamisé : on a seulement attendu, et la terre est tombée au fond. C’est une décantation."),
    q("s-p1-me-5", "Pour séparer la terre de l’eau, quel outil retient la terre et laisse passer l’eau ?", ["un filtre", "un tamis à grosses mailles", "une balance"], "un filtre", "Le filtre retient les solides fins et laisse passer l’eau. Un tamis à grosses mailles laisserait passer la terre avec l’eau."),
    q("s-p1-me-6", "Du chocolat en poudre bien remué dans du lait chaud, jusqu’à ne plus voir un seul grain, forme un mélange…", ["hétérogène", "homogène"], "homogène", "On ne distingue plus le chocolat du lait : tout a la même couleur. « Homo » veut dire semblable."),
    q("s-p1-me-7", "Un tamis a des trous de 5 millimètres. Tu y verses des perles de 3 millimètres et des perles de 8 millimètres. Lesquelles restent dans le tamis ?", ["les perles de 8 millimètres", "les perles de 3 millimètres", "toutes les perles"], "les perles de 8 millimètres", "Un tamis retient ce qui est plus gros que ses trous. Les perles de 8 millimètres sont plus grosses que les trous de 5 millimètres : elles restent. Celles de 3 millimètres, plus petites que les trous, passent à travers."),
    q("s-p1-me-8", "Des graines de tournesol et des grains de riz mélangés dans un bocal forment un mélange…", ["homogène", "hétérogène"], "hétérogène", "On distingue encore les graines de tournesol et les grains de riz : ce sont des constituants différents. « Hétéro » veut dire différent."),
  ],
  reprise: [
    q("s-p1-me-r1", "Des céréales versées dans un bol de lait forment un mélange…", ["hétérogène", "homogène"], "hétérogène", "On distingue encore les céréales dans le lait : « hétéro » veut dire différent."),
    q("s-p1-me-r2", "Lequel de ces mélanges est hétérogène ?", ["de l’eau où du sucre s’est complètement dissous", "des billes au fond d’un verre d’eau", "de la grenadine bien mélangée à de l’eau"], "des billes au fond d’un verre d’eau", "Dans un mélange hétérogène, on distingue encore les constituants : on voit les billes dans l’eau. Le sucre dissous et la grenadine bien mélangée ne se distinguent plus de l’eau : ces deux mélanges-là sont homogènes."),
    q("s-p1-me-r3", "Tu as un tamis à grosses mailles et un tamis à mailles fines. Pour séparer des noix, des lentilles et de la farine, lequel utilises-tu en premier ?", ["le tamis à grosses mailles", "le tamis à mailles fines"], "le tamis à grosses mailles", "Le tamis à grosses mailles retient les noix et laisse passer les lentilles et la farine. Le tamis fin retient ensuite les lentilles, et la farine passe."),
    q("s-p1-me-r4", "Pour qu’une bouteille d’eau boueuse se sépare en un dépôt de terre au fond et de l’eau plus claire au-dessus, que faut-il faire ?", ["attendre sans la bouger", "la secouer fort", "la verser dans un tamis à grosses mailles"], "attendre sans la bouger", "C’est la décantation : on laisse reposer, la terre tombe au fond, et on récupère doucement le liquide clair au-dessus."),
    q("s-p1-me-r5", "Tu verses de l’eau mélangée à du sable dans un filtre à café. Qu’est-ce qui passe à travers le filtre ?", ["l’eau", "le sable", "l’eau et le sable"], "l’eau", "Le filtre laisse passer le liquide et retient les solides : le sable reste dans le filtre."),
    q("s-p1-me-r6", "Lequel de ces mélanges est homogène ?", ["une salade de tomates et de concombres", "du sable et des coquillages", "de l’eau où du miel s’est complètement dissous"], "de l’eau où du miel s’est complètement dissous", "Dans un mélange homogène, on ne distingue plus les constituants : le miel dissous ne se voit plus dans l’eau. Dans la salade, et dans le sable avec ses coquillages, on voit encore chaque constituant : ces deux mélanges-là sont hétérogènes."),
    q("s-p1-me-r7", "Dans un tamis, le sable passe à travers et les cailloux restent dessus. Pourquoi ?", ["les grains de sable sont plus petits que les trous du tamis", "le sable est plus lourd que les cailloux", "les cailloux sont mouillés"], "les grains de sable sont plus petits que les trous du tamis", "Un tamis retient ce qui est plus gros que ses mailles et laisse passer ce qui est plus petit : il trie selon la taille."),
    q("s-p1-me-r8", "Tu verses un peu de vinaigre dans un verre d’eau et tu remues : on ne distingue plus le vinaigre de l’eau. C’est un mélange…", ["homogène", "hétérogène"], "homogène", "Quand on ne distingue plus les constituants et que tout se ressemble, le mélange est homogène. « Homo » veut dire semblable."),
  ],
};

/* ================================================================== */
/* PÉRIODE 2                                                           */
/* ================================================================== */

const dissolution: Lecon = {
  code: "s-p2-dissolution",
  matiere: "sciences",
  periode: 2,
  titre: "Dissoudre, et la limite",
  reference:
    "Constater que certains solides peuvent se dissoudre dans l’eau ; observer le phénomène de saturation lors du mélange d’un solide dans l’eau et en rendre compte quantitativement.",
  minutes: 30,
  cours: [
    {
      texte: [
        "Mets du sel dans de l’eau et remue : il disparaît. Mets du sable et remue : il tombe au fond. Les deux ne font pas la même chose, et le mot « disparaître » est trompeur.",
      ],
    },
    {
      titre: "Dissoudre n’est pas disparaître",
      texte: [
        "Le sel ne disparaît pas : il se **dissout**. Il est toujours là, réparti dans toute l’eau, mais en morceaux trop petits pour être vus.",
        "La preuve : l’eau a un goût salé. Et si on la laisse s’évaporer, le sel réapparaît au fond du récipient.",
        "Autre preuve, plus forte : la masse. 200 g d’eau plus 10 g de sel donnent 210 g de mélange. Rien n’est perdu.",
      ],
      regle:
        "Un solide dissous est toujours présent. Il n’est plus visible, mais la masse totale ne change pas.",
    },
    {
      titre: "Le test du filtre",
      texte: [
        "Comment savoir si un solide s’est dissous ou s’est juste déposé ? On filtre.",
        "Le sable reste sur le filtre : il ne s’était pas dissous.",
        "Le sel passe à travers avec l’eau : il s’était dissous, et le filtre ne peut pas le retenir.",
      ],
      regle:
        "Si un filtre ne peut pas le récupérer, c’est qu’il était dissous. C’est le critère.",
    },
    {
      titre: "La saturation : il y a une limite",
      texte: [
        "On peut dissoudre beaucoup de sel dans un verre d’eau — mais pas indéfiniment.",
        "À partir d’un certain moment, on remue et le sel ne disparaît plus : il reste au fond. On dit que l’eau est **saturée**.",
        "Cette limite est mesurable : on ajoute le sel cuillère par cuillère en comptant, avec toujours la même quantité d’eau. Dans 100 g d’eau, on peut dissoudre environ 36 g de sel, mais environ 200 g de sucre : la limite dépend du solide.",
        "Elle dépend aussi de la température : l’eau chaude dissout le sucre plus vite, et elle peut en dissoudre davantage avant d’être saturée. Au passage, « fondre » est encore un mot trompeur : le sucre ne fond pas dans le chocolat chaud, il se dissout. Fondre, c’est passer de solide à liquide sous l’effet de la chaleur, comme la glace au soleil.",
      ],
      regle:
        "Pour comparer deux expériences, il faut que tout soit pareil sauf une chose. Même quantité d’eau, même température : sinon on ne compare rien.",
    },
    {
      titre: "Plus tard, avec les mains",
      texte: [
        "Deux verres avec la même quantité d’eau. Une cuillère de sel dans l’un, une cuillère de sable dans l’autre, remue : le sel disparaît, le sable tombe. Filtre les deux avec un filtre à café pour vérifier le critère.",
        "Pose un verre d’eau sur la balance, tare, ajoute deux morceaux de sucre et note la masse. Remue jusqu’à ce qu’ils aient disparu, pèse encore : rien n’est perdu.",
        "Puis sature : ajoute du sel cuillère par cuillère dans un verre d’eau, en comptant et en remuant, jusqu’à ce qu’il reste au fond. Avec le sel, c’est rapide. Pour voir l’effet de la température, prends du sucre : même quantité d’eau froide puis chaude, il en faudra beaucoup de cuillères, et encore plus dans l’eau chaude.",
        "Pour finir, verse un peu d’eau salée dans une assiette et laisse-la plusieurs jours près d’une fenêtre. Quand l’eau est partie, le sel est revenu.",
      ],
    },
  ],
  exemples: [
    {
      enonce: "On verse 200 g d’eau, on ajoute 10 g de sucre et on remue jusqu’à ce qu’il disparaisse. Combien pèse le mélange ?",
      etapes: [
        "Le sucre s’est dissous, donc il est toujours là.",
        "La masse totale est la somme des deux : 200 + 10.",
        "Le mélange pèse 210 g. Rien ne s’est perdu.",
      ],
      resultat: "210 g",
    },
  ],
  exercices: [
    q("s-p2-di-1", "Le sel qui « disparaît » dans l’eau est…", ["toujours là, dissous", "vraiment disparu", "transformé en eau"], "toujours là, dissous", "Il est réparti dans toute l’eau en morceaux invisibles. Le goût et la masse le prouvent."),
    e("s-p2-di-2", "Dans 250 g d’eau, on dissout 20 g de sucre. Combien pèse le mélange, en grammes ?", "270", "Rien ne se perd en se dissolvant : 250 + 20 = 270 g."),
    q("s-p2-di-3", "Comment savoir qu’un solide s’est dissous et non déposé ?", ["on filtre et on ne le récupère pas", "on regarde la couleur", "on attend"], "on filtre et on ne le récupère pas", "Le sable reste sur le filtre ; le sel dissous passe avec l’eau."),
    q("s-p2-di-4", "Comment récupérer le sel dissous dans de l’eau ?", ["laisser l’eau s’évaporer", "filtrer", "remuer plus fort"], "laisser l’eau s’évaporer", "L’eau part, le sel reste au fond. C’est ainsi qu’on récolte le sel marin."),
    q("s-p2-di-5", "Que veut dire « l’eau est saturée de sel » ?", ["elle ne peut plus dissoudre de sel", "elle est trop froide", "elle est sale"], "elle ne peut plus dissoudre de sel", "Le sel ajouté reste au fond même en remuant. La limite est atteinte pour ce solide-là."),
    q("s-p2-di-6", "Pour comparer deux expériences de dissolution, que faut-il faire ?", ["ne changer qu’une seule chose", "changer tout", "ne rien mesurer"], "ne changer qu’une seule chose", "Même quantité d’eau, même température : sinon on ne sait pas ce qui explique la différence."),
    q("s-p2-di-7", "Après avoir dissous du sel dans l’eau, on filtre. Que trouve-t-on sur le filtre ?", ["rien", "le sel", "de l’eau"], "rien", "Le sel dissous est en morceaux trop petits pour être retenus : il passe avec l’eau. C’est le critère de la dissolution."),
    q("s-p2-di-8", "Tu mets du sucre dans du thé chaud et dans de l’eau froide, même quantité. Lequel peut en dissoudre le plus ?", ["le thé chaud", "l’eau froide", "autant l’un que l’autre"], "le thé chaud", "L’eau chaude dissout le sucre plus vite et peut en dissoudre davantage avant d’être saturée."),
  ],
};

const mouvement: Lecon = {
  code: "s-p2-mouvement",
  matiere: "sciences",
  periode: 2,
  titre: "Mesurer un déplacement",
  reference:
    "Mesurer une distance lors du déplacement d’un objet ; mesurer une durée, comme intervalle entre deux instants ; une première approche des concepts de reproductibilité et de variabilité des mesures.",
  minutes: 30,
  cours: [
    {
      texte: [
        "Pour décrire un mouvement, deux mesures suffisent : la **distance** parcourue et la **durée** du parcours. Avec les deux, on peut dire si c’était rapide ou lent.",
      ],
    },
    {
      titre: "Mesurer une distance",
      texte: [
        "La distance parcourue, c’est l’écart entre le point de départ et le point d’arrivée. On la mesure avec un mètre ruban ou un décamètre, en centimètres, en mètres, en kilomètres.",
        "Il faut marquer les deux points, à la craie ou avec du ruban adhésif, et tendre le ruban bien droit entre les deux. Un ruban qui fait des vagues donne une distance trop grande.",
      ],
    },
    {
      titre: "Mesurer une durée",
      texte: [
        "Une durée est un **intervalle entre deux instants** : le départ et l’arrivée. Ce n’est pas un instant, c’est un écart.",
        "Il faut donc marquer clairement les deux : où commence-t-on à compter, où s’arrête-t-on ? Si le départ est flou, la mesure ne vaut rien.",
        "On mesure en secondes, minutes, heures — les mêmes unités qu’en mathématiques.",
      ],
      regle: "Une durée demande deux instants. Un seul ne donne rien.",
    },
    {
      titre: "Refaire la mesure",
      texte: [
        "Fais rouler une petite voiture trois fois sur la même pente et chronomètre. Tu ne trouveras pas exactement le même temps : peut-être 2,1 s, puis 2,3 s, puis 2,0 s.",
        "Ce n’est pas que tu mesures mal. **Toute mesure varie un peu** — c’est vrai en classe comme dans un laboratoire.",
        "C’est pour ça qu’on mesure plusieurs fois. Si les trois résultats sont proches, on peut y croire. Si l’un est très différent, quelque chose s’est passé et il faut chercher quoi.",
      ],
      regle:
        "Une seule mesure ne prouve rien. On mesure plusieurs fois, et on regarde si les résultats se ressemblent.",
    },
    {
      titre: "Comparer deux déplacements",
      texte: [
        "Même distance, durée plus courte : c’était plus rapide.",
        "Même durée, distance plus grande : c’était plus rapide aussi.",
        "Si les deux changent, il faut réfléchir — et c’est là que la mesure devient vraiment utile.",
      ],
    },
    {
      titre: "Plus tard, avec les mains",
      texte: [
        "Pose une planche sur un livre pour faire une pente. Marque la ligne de départ en haut et une ligne d’arrivée au sol. Mesure la distance entre les deux avec un mètre ruban.",
        "Lâche une petite voiture sans la pousser, et chronomètre du lâcher à la ligne d’arrivée — le chronomètre d’un téléphone suffit. Refais-le cinq fois et note les cinq durées dans un tableau.",
        "Puis ajoute un deuxième livre sous la planche et recommence. Même distance, durées plus courtes ? Alors la voiture allait plus vite.",
      ],
    },
  ],
  exemples: [
    {
      enonce: "Une voiture jouet parcourt 3 m en 2 s, une autre 3 m en 5 s. Laquelle va le plus vite ?",
      etapes: [
        "Les deux distances sont identiques : 3 m.",
        "Je compare donc les durées : 2 s contre 5 s.",
        "La même distance en moins de temps veut dire plus rapide.",
      ],
      resultat: "la première",
    },
  ],
  exercices: [
    q("s-p2-mv-1", "Qu’est-ce qu’une durée ?", ["l’intervalle entre deux instants", "un instant précis", "une distance"], "l’intervalle entre deux instants", "Il faut marquer le départ et l’arrivée. Un seul instant ne donne aucune durée."),
    q("s-p2-mv-2", "Deux voitures parcourent 3 m, l’une en 2 s, l’autre en 5 s. Laquelle va le plus vite ?", ["celle de 2 s", "celle de 5 s"], "celle de 2 s", "Même distance, moins de temps : plus rapide."),
    q("s-p2-mv-3", "Tu chronomètres trois fois le même trajet et tu trouves 2,1 s, 2,3 s, 2,0 s. Que faut-il en conclure ?", ["toute mesure varie un peu", "tu mesures mal", "la voiture est cassée"], "toute mesure varie un peu", "C’est normal, et c’est vrai aussi dans un laboratoire. On mesure plusieurs fois pour cette raison."),
    q("s-p2-mv-4", "Pourquoi refait-on une mesure plusieurs fois ?", ["pour vérifier qu’on peut y croire", "pour perdre du temps", "pour user le chronomètre"], "pour vérifier qu’on peut y croire", "Si les résultats se ressemblent, la mesure est fiable. Sinon, il faut chercher pourquoi."),
    q("s-p2-mv-5", "Deux coureurs courent pendant 10 s. L’un fait 40 m, l’autre 60 m. Lequel va le plus vite ?", ["celui qui fait 60 m", "celui qui fait 40 m"], "celui qui fait 60 m", "Même durée, plus grande distance : plus rapide."),
    q("s-p2-mv-6", "Sur trois mesures, tu trouves 2,1 s, 2,2 s et 9,4 s. Que faut-il faire ?", ["chercher ce qui s’est passé", "garder la moyenne", "garder 9,4 s"], "chercher ce qui s’est passé", "Un résultat très différent des autres signale un incident : un mauvais départ, un obstacle. Il faut comprendre avant de calculer."),
    e("s-p2-mv-7", "Une bille est lâchée quand le chronomètre marque 12 s, et elle arrive quand il marque 19 s. Combien de secondes a duré son trajet ?", "7", "Une durée est l’écart entre deux instants : 19 − 12 = 7 s."),
    q("s-p2-mv-8", "Avec quoi mesure-t-on la distance parcourue par une voiture jouet sur le sol ?", ["un mètre ruban", "un chronomètre", "une balance"], "un mètre ruban", "La distance se mesure en centimètres ou en mètres, ruban bien tendu entre le départ et l’arrivée. Le chronomètre mesure la durée."),
  ],
};

const objetsTechniques: Lecon = {
  code: "s-p2-objets",
  matiere: "sciences",
  periode: 2,
  titre: "Comment marche un objet technique",
  reference:
    "Identifier les fonctions assurées par les différents composants d’un objet technique ; associer les solutions technologiques aux fonctions ; identifier les sous-ensembles constituant un objet ; décrire à l’aide d’un croquis le fonctionnement d’un objet.",
  minutes: 30,
  cours: [
    {
      texte: [
        "Tous les objets qui nous entourent ont été conçus par quelqu’un, pour répondre à un besoin. Les démonter du regard, c’est comprendre comment on résout un problème.",
      ],
    },
    {
      titre: "Le besoin, puis la fonction",
      texte: [
        "Le **besoin** est ce qu’on veut obtenir : écrire, se déplacer, garder au frais, voir la nuit.",
        "La **fonction** est ce que fait une pièce pour y contribuer. Un stylo : contenir l’encre, la déposer sur le papier, la protéger du séchage, tenir dans la main.",
        "Chaque pièce a une fonction. Aucune n’est là par hasard — même le petit trou au bout du capuchon d’un stylo bille sert à quelque chose : il laisse passer l’air si quelqu’un avale le capuchon par accident.",
      ],
      regle:
        "Devant un objet, demande d’abord : à quoi sert chaque pièce ? C’est la question qui ouvre tout.",
    },
    {
      titre: "Une fonction, plusieurs solutions",
      texte: [
        "La fonction « déposer de l’encre » se résout par une bille dans un stylo bille, par une plume dans un stylo-plume, par une mèche dans un feutre.",
        "La fonction « garder l’heure » se résout par des rouages, par un quartz, par un affichage électronique.",
        "Le contexte décide : un stylo doit être bon marché, une plume doit être agréable. On ne choisit pas la même solution selon l’usage.",
      ],
      regle: "Une même fonction peut se résoudre de plusieurs façons. La bonne dépend de l’usage.",
    },
    {
      titre: "Des pièces qui travaillent ensemble",
      texte: [
        "Dans un objet compliqué, les pièces se regroupent en **sous-ensembles** : plusieurs pièces qui, ensemble, assurent une fonction.",
        "Sur un vélo : les pédales, la chaîne et la roue arrière forment le sous-ensemble qui fait avancer. Les poignées de frein, les câbles et les patins forment celui qui freine. Le guidon et la fourche forment celui qui dirige.",
        "Pour comprendre un objet, on le découpe donc en sous-ensembles, puis chaque sous-ensemble en pièces.",
      ],
    },
    {
      titre: "Le croquis",
      texte: [
        "Pour décrire un objet, un dessin à main levée vaut mieux qu’un paragraphe — à condition de **légender** : chaque pièce nommée, avec un trait qui la désigne.",
        "Un croquis n’a pas besoin d’être beau. Il doit être juste, et compris par quelqu’un d’autre.",
      ],
    },
    {
      titre: "Plus tard, avec les mains",
      texte: [
        "Démonte un stylo bille à bouton : le corps, la cartouche, le ressort, le bouton. Pose les pièces sur une feuille, dans l’ordre, et écris à côté de chacune à quoi elle sert. Appuie sur le ressort : à ton avis, quelle est sa fonction ?",
        "Remonte-le, puis fais un croquis du stylo avec une légende pour chaque pièce. Montre-le à quelqu’un qui n’a pas vu le stylo : comprend-il ?",
        "Même jeu avec un vélo, sans rien démonter : cherche les trois sous-ensembles — avancer, freiner, diriger — et nomme les pièces de chacun.",
      ],
    },
  ],
  exemples: [
    {
      enonce: "Liste les fonctions des pièces d’un stylo bille.",
      etapes: [
        "Le corps : tenir dans la main, contenir la cartouche.",
        "La cartouche : contenir l’encre.",
        "La bille : déposer l’encre sur le papier en roulant.",
        "Le capuchon : protéger la bille et empêcher l’encre de sécher.",
      ],
      resultat: "tenir · contenir · déposer · protéger",
    },
  ],
  exercices: [
    q("s-p2-ot-1", "Dans un stylo bille, quelle est la fonction de la bille ?", ["déposer l’encre en roulant", "contenir l’encre", "tenir dans la main"], "déposer l’encre en roulant", "Elle roule sur le papier et y laisse une trace d’encre."),
    q("s-p2-ot-2", "Quelle est la fonction du capuchon ?", ["protéger et empêcher le séchage", "décorer", "alourdir le stylo"], "protéger et empêcher le séchage", "Il protège la bille et limite le contact de l’encre avec l’air."),
    q("s-p2-ot-3", "Une même fonction peut-elle avoir plusieurs solutions ?", ["oui", "non"], "oui", "Déposer de l’encre : une bille, une plume, une mèche de feutre. Le choix dépend de l’usage."),
    q("s-p2-ot-4", "Qu’est-ce qu’un besoin, pour un objet technique ?", ["ce qu’on veut obtenir", "le prix de l’objet", "sa couleur"], "ce qu’on veut obtenir", "Écrire, se déplacer, garder au frais : le besoin précède l’objet."),
    q("s-p2-ot-5", "Que doit porter un croquis pour être utile ?", ["des légendes", "des couleurs", "une signature"], "des légendes", "Chaque pièce nommée, avec un trait qui la désigne. Le croquis doit être juste, pas beau."),
    q("s-p2-ot-6", "Pourquoi une montre à quartz et une montre à rouages existent-elles toutes les deux ?", ["même fonction, solutions différentes", "l’une ne marche pas", "elles ne servent pas à la même chose"], "même fonction, solutions différentes", "Garder l’heure peut se résoudre de plusieurs façons, selon le coût et la précision voulus."),
    q("s-p2-ot-7", "Sur un vélo, les pédales, la chaîne et la roue arrière forment ensemble le sous-ensemble qui sert à…", ["faire avancer", "freiner", "diriger"], "faire avancer", "Un sous-ensemble, c’est plusieurs pièces qui assurent ensemble une fonction. Les freins et le guidon en sont deux autres."),
    q("s-p2-ot-8", "Dans un stylo bille à bouton, quelle est la fonction du ressort ?", ["faire sortir et rentrer la pointe quand on appuie", "contenir l’encre", "écrire plus gros"], "faire sortir et rentrer la pointe quand on appuie", "Le ressort pousse la cartouche : la pointe sort ou rentre selon qu’on appuie sur le bouton. Rentrée, elle est protégée, comme par un capuchon."),
  ],
};

/* ================================================================== */
/* PÉRIODE 3                                                           */
/* ================================================================== */

const ombres: Lecon = {
  code: "s-p3-ombres",
  matiere: "sciences",
  periode: 3,
  titre: "La lumière et les ombres",
  reference:
    "Observer et classer des matériaux selon qu’ils sont transparents, translucides ou opaques ; produire expérimentalement une ombre ; associer la position et la taille de l’ombre aux positions respectives de la source, de l’objet et de l’écran.",
  minutes: 30,
  cours: [
    {
      texte: [
        "Une ombre n’est pas quelque chose de noir qu’on ajoute : c’est un **manque de lumière**. Là où un objet bloque la lumière, il reste une zone non éclairée.",
        "Comprendre ça résout d’un coup toutes les questions sur les ombres.",
      ],
    },
    {
      titre: "Trois sortes de matériaux",
      texte: [
        "**Transparent** : la lumière passe et on voit distinctement à travers. Une vitre, l’eau claire.",
        "**Translucide** : la lumière passe mais on ne voit pas nettement. Du papier calque, un verre dépoli, du brouillard.",
        "**Opaque** : la lumière ne passe pas. Du carton, du bois, du métal.",
        "Seuls les objets opaques donnent une ombre nette.",
      ],
      regle: "transparent → on voit à travers · translucide → la lumière passe seulement · opaque → rien ne passe.",
    },
    {
      titre: "Trois éléments, et rien d’autre",
      texte: [
        "Pour avoir une ombre, il faut une **source** de lumière, un **objet** opaque, et un **écran** où l’ombre se pose. Toujours dans cet ordre : la lumière part, l’objet bloque, l’écran reçoit.",
        "L’ombre est donc toujours du côté **opposé** à la source. Si la lampe est à gauche, l’ombre est à droite.",
        "Il y a même deux ombres à distinguer : l’ombre **propre**, la partie non éclairée de l’objet lui-même, et l’ombre **portée**, celle qui se dessine sur l’écran.",
      ],
      regle: "source → objet → écran. L’ombre est toujours du côté opposé à la lumière.",
    },
    {
      titre: "La taille change, et on peut le prévoir",
      texte: [
        "Rapproche l’objet de la lampe, sans bouger l’écran : l’ombre grandit, parce que l’objet bloque une plus grande part de la lumière. Éloigne-le de la lampe : elle rétrécit.",
        "La hauteur de la source compte aussi. Une lampe placée haut, presque au-dessus de l’objet, donne une ombre courte sur le sol. Une lampe placée bas donne une ombre qui s’étire loin sur le sol.",
        "C’est pour ça que ton ombre au soleil est très longue le matin et le soir, quand le Soleil est bas, et courte à midi, quand il est haut : ce n’est pas toi qui changes, c’est la position du Soleil.",
        "Une fois la règle comprise, on peut **prévoir** ce qui va se passer avant de le faire. C’est ce qu’on appelle modéliser : on remplace le Soleil par une lampe et toi par une figurine, et on regarde ce qui se passe.",
      ],
      regle: "Objet près de la lampe : grande ombre. Source basse : ombre longue sur le sol.",
    },
    {
      titre: "Plus tard, avec les mains",
      texte: [
        "Dans une pièce sombre, une lampe de poche, une figurine et un mur. Déplace la lampe à gauche, à droite, en haut : où va l’ombre ? Rapproche la figurine de la lampe : l’ombre grandit-elle ?",
        "Classe des matériaux en les mettant devant la lampe : un verre, du papier calque ou du papier cuisson, un sac plastique, du carton, une feuille d’aluminium. Transparent, translucide ou opaque ?",
        "Un jour de soleil, plante un bâton dans un pot de terre dehors, et trace le bout de son ombre à la craie toutes les heures. Le soir, tu auras dessiné le mouvement du Soleil dans le ciel.",
      ],
    },
  ],
  exemples: [
    {
      enonce: "Une lampe est à gauche d’une balle, posée devant un mur. Où est l’ombre, et que se passe-t-il si on rapproche la balle de la lampe ?",
      etapes: [
        "La lumière part de la gauche, la balle la bloque : l’ombre se forme du côté opposé, donc à droite, sur le mur.",
        "En rapprochant la balle de la lampe, elle bloque une plus grande part de la lumière.",
        "L’ombre grandit.",
      ],
      resultat: "à droite, sur le mur · elle grandit",
    },
  ],
  exercices: [
    q("s-p3-om-1", "Qu’est-ce qu’une ombre ?", ["un manque de lumière", "une couleur noire", "un reflet"], "un manque de lumière", "Là où l’objet bloque la lumière, il reste une zone non éclairée."),
    q("s-p3-om-2", "Du papier calque est…", ["translucide", "transparent", "opaque"], "translucide", "La lumière passe, mais on ne voit pas nettement à travers."),
    q("s-p3-om-3", "Quel matériau donne une ombre nette ?", ["opaque", "transparent", "translucide"], "opaque", "Seul un matériau qui bloque toute la lumière donne une ombre franche."),
    q("s-p3-om-4", "La lampe est à gauche. Où est l’ombre ?", ["à droite", "à gauche", "en dessous"], "à droite", "L’ombre est toujours du côté opposé à la source de lumière."),
    q("s-p3-om-5", "Sans bouger le mur, on rapproche l’objet de la lampe. L’ombre sur le mur…", ["grandit", "rétrécit", "ne change pas"], "grandit", "L’objet bloque une plus grande part de la lumière, donc l’ombre portée est plus grande."),
    q("s-p3-om-6", "Pourquoi ton ombre est-elle plus longue le matin qu’à midi ?", ["le Soleil est plus bas", "tu es plus grand le matin", "l’air est plus froid"], "le Soleil est plus bas", "C’est la position de la source qui change, pas la tienne. Une source basse étire l’ombre sur le sol."),
    q("s-p3-om-7", "Comment s’appelle l’ombre qui se dessine sur le mur ?", ["l’ombre portée", "l’ombre propre", "l’ombre nette"], "l’ombre portée", "L’ombre propre est la partie non éclairée de l’objet lui-même ; l’ombre portée est celle qui se dessine sur l’écran."),
    q("s-p3-om-8", "Une vitre propre est…", ["transparente", "translucide", "opaque"], "transparente", "La lumière passe et on voit distinctement à travers. Le papier calque, lui, laisse passer la lumière sans qu’on voie nettement."),
  ],
};

const lune: Lecon = {
  code: "s-p3-lune",
  matiere: "sciences",
  periode: 3,
  titre: "Les phases de la Lune",
  reference:
    "Observer, schématiser et nommer les phases de la Lune ; associer le phénomène observé à sa représentation simplifiée.",
  minutes: 30,
  cours: [
    {
      texte: [
        "La Lune change de forme au fil du mois. Sauf qu’elle ne change pas de forme du tout : c’est une boule, et elle le reste.",
        "Ce qui change, c’est la part que nous en voyons éclairée.",
      ],
    },
    {
      titre: "La Lune ne brille pas",
      texte: [
        "La Lune n’est pas une source de lumière : elle est éclairée par le Soleil, comme une balle par une lampe.",
        "La moitié tournée vers le Soleil est toujours éclairée. L’autre moitié est toujours dans le noir.",
        "Ce qui varie, c’est notre point de vue : selon où la Lune est autour de la Terre, nous voyons une part plus ou moins grande de sa face éclairée.",
      ],
      regle:
        "La Lune est toujours à moitié éclairée. C’est la part que **nous** en voyons qui change.",
    },
    {
      titre: "Les quatre phases",
      texte: [
        "La **nouvelle lune** : nous ne voyons rien, sa face éclairée est tournée de l’autre côté.",
        "Le **premier quartier**, environ une semaine plus tard : nous voyons la moitié droite éclairée, en forme de D.",
        "La **pleine lune**, encore une semaine plus tard : nous voyons toute la face éclairée, un disque complet.",
        "Le **dernier quartier**, une semaine après : nous voyons la moitié gauche éclairée, en forme de C.",
        "Entre deux de ces phases, la Lune est un croissant mince, ou au contraire presque pleine. Pour savoir si elle grossit ou si elle maigrit, regarde de quel côté est la partie éclairée, vue depuis la France : à droite, elle croît ; à gauche, elle décroît.",
        "Truc de mémoire : la Lune est menteuse. Quand elle a la forme d’un **D**, c’est qu’elle **croît** ; quand elle a la forme d’un **C**, c’est qu’elle **décroît**.",
        "Et ce n’est pas l’ombre de la Terre qui la cache. L’ombre de la Terre sur la Lune, c’est une éclipse, et c’est rare. Les phases, elles, reviennent chaque mois.",
      ],
      regle: "D comme… décroissant ? Non : D veut dire croissante. La Lune est menteuse.",
    },
    {
      titre: "Un mois",
      texte: [
        "Le cycle complet prend environ 29 jours et demi — un peu moins d’un mois. Le mot « mois » vient d’ailleurs de là. Nouvelle lune, premier quartier, pleine lune, dernier quartier, puis nouvelle lune : à chaque fois, une semaine environ.",
        "À faire : observer la Lune un soir sur deux pendant trois semaines et dessiner ce qu’on voit, avec la date. C’est l’une des rares expériences de sciences qui demande de la patience plutôt que du matériel.",
        "À faire aussi, dans une pièce sombre : une lampe posée sur une table, c’est le Soleil ; une balle claire tenue à bout de bras, c’est la Lune ; ta tête, c’est la Terre. Tourne lentement sur toi-même en regardant la balle : tu verras passer toutes les phases. C’est ce qu’on appelle un modèle.",
      ],
    },
  ],
  exemples: [
    {
      enonce: "La Lune apparaît en forme de C. Est-elle croissante ou décroissante ?",
      etapes: [
        "La partie éclairée est à gauche, comme le ventre d’un C.",
        "La Lune est menteuse : la forme ne dit pas ce qu’on croirait.",
        "Le C annonce une lune décroissante, qui va vers la nouvelle lune.",
      ],
      resultat: "décroissante",
    },
  ],
  exercices: [
    q("s-p3-lu-1", "La Lune brille-t-elle par elle-même ?", ["non, elle est éclairée par le Soleil", "oui", "seulement la nuit"], "non, elle est éclairée par le Soleil", "Comme une balle éclairée par une lampe : elle renvoie la lumière du Soleil."),
    q("s-p3-lu-2", "Quelle part de la Lune est éclairée à un instant donné ?", ["la moitié", "tout", "rien"], "la moitié", "La face tournée vers le Soleil, toujours. Ce qui change, c’est ce que nous en voyons."),
    q("s-p3-lu-3", "Pendant la nouvelle lune, on ne voit rien parce que…", ["sa face éclairée est de l’autre côté", "elle a disparu", "il y a des nuages"], "sa face éclairée est de l’autre côté", "Elle est bien là, mais nous regardons sa face non éclairée."),
    q("s-p3-lu-4", "Une Lune en forme de C est…", ["décroissante", "croissante"], "décroissante", "La Lune est menteuse : le C annonce une lune qui décroît, le D une lune qui croît."),
    q("s-p3-lu-5", "Comment appelle-t-on la phase où l’on voit un disque complet ?", ["la pleine lune", "le premier quartier", "la nouvelle lune"], "la pleine lune", "Nous voyons alors toute la face éclairée."),
    q("s-p3-lu-6", "Combien de temps dure environ un cycle complet de la Lune ?", ["un mois", "une semaine", "une année"], "un mois", "Environ 29 jours et demi, soit un peu moins d’un mois. Le mot « mois » vient de là ; chaque phase dure environ une semaine."),
    q("s-p3-lu-7", "Vue depuis la France, la partie éclairée de la Lune est à droite. La Lune est…", ["croissante", "décroissante"], "croissante", "Éclairée à droite, elle a le ventre d’un D : elle croît, vers la pleine lune. Éclairée à gauche, ventre d’un C, elle décroît."),
    q("s-p3-lu-8", "Qu’est-ce qui fait changer la forme de la Lune au fil du mois ?", ["la part de sa face éclairée que nous voyons", "l’ombre de la Terre", "des nuages"], "la part de sa face éclairée que nous voyons", "La Lune reste une boule à moitié éclairée par le Soleil. Selon sa position autour de la Terre, nous en voyons plus ou moins. L’ombre de la Terre, c’est une éclipse, et c’est rare."),
  ],
};

/* ================================================================== */
/* PÉRIODE 4                                                           */
/* ================================================================== */

const espece: Lecon = {
  code: "s-p4-espece",
  matiere: "sciences",
  periode: 4,
  titre: "Qu’est-ce qu’une espèce ?",
  reference:
    "Définir une espèce comme un ensemble d’individus capables de se reproduire entre eux ; réaliser une classification en groupes emboîtés à partir d’attributs ; identifier des espèces en utilisant une clé de détermination.",
  minutes: 30,
  cours: [
    {
      texte: [
        "Il y a énormément d’êtres vivants différents. Pour s’y retrouver, les scientifiques les rangent — et la façon dont ils les rangent a changé, parce qu’on a compris quelque chose.",
      ],
    },
    {
      titre: "Une espèce, c’est une question de descendance",
      texte: [
        "Une **espèce** rassemble les individus capables de se reproduire entre eux et d’avoir des petits qui pourront se reproduire à leur tour.",
        "Un chihuahua et un dogue allemand ne se ressemblent pas du tout, et ils sont de la même espèce : le chien. Un chat et un lapin se ressemblent plus qu’un chihuahua et un dogue, et ils sont d’espèces différentes.",
        "La ressemblance ne suffit donc pas. C’est la reproduction qui définit l’espèce.",
        "Un cheval et un âne peuvent avoir un petit ensemble, le mulet. Mais le mulet ne peut pas avoir de petits à son tour. Le cheval et l’âne sont donc deux espèces différentes : il faut que les petits puissent eux-mêmes se reproduire.",
      ],
      regle:
        "Même espèce = peuvent avoir ensemble des petits qui pourront eux-mêmes en avoir. Pas « se ressemblent ».",
    },
    {
      titre: "Classer par ce qu’on possède",
      texte: [
        "On ne classe pas les animaux par ce qu’ils **ne** possèdent pas — « les animaux sans pattes » ne forme pas un groupe intéressant, ça mélange les serpents et les vers.",
        "On les classe par ce qu’ils **possèdent** : un squelette interne, quatre membres, des plumes, du lait pour nourrir leurs petits. Un caractère qu’on possède s’appelle un **attribut**.",
        "Les animaux qui ont un squelette interne avec une colonne vertébrale forment le groupe des **vertébrés** : les poissons, les grenouilles, les lézards, les oiseaux, les mammifères — et toi.",
        "Et les groupes s’**emboîtent** : tous les animaux à plumes ont aussi un squelette. Le groupe « à plumes », les oiseaux, est donc à l’intérieur du groupe « squelette », les vertébrés. Comme une petite boîte rangée dans une plus grande.",
      ],
      regle: "On classe par ce qu’on a, pas par ce qu’on n’a pas. Et les groupes s’emboîtent comme des boîtes.",
    },
    {
      titre: "La clé de détermination",
      texte: [
        "Pour identifier un être vivant qu’on ne connaît pas, on suit une clé : une suite de questions à deux réponses.",
        "« A-t-il des ailes ? Oui → va à la question 4. Non → va à la question 2. »",
        "Chaque réponse élimine une partie des possibilités. En cinq ou six questions, on arrive au nom.",
      ],
    },
    {
      titre: "Plus tard, avec les mains",
      texte: [
        "Vide une boîte de boutons ou de briques de construction sur la table. Trie-les par ce qu’ils possèdent : quatre trous, une couleur, une forme ronde. Dessine des boîtes emboîtées : « ronds », et dedans « ronds à quatre trous ».",
        "Ramasse six feuilles d’arbres différents. Écris une clé de détermination à deux réponses : « Le bord est-il découpé ? Oui → … Non → … ». Fais-la essayer à quelqu’un avec une septième feuille.",
        "Dans un guide des oiseaux ou une application d’identification, suis une vraie clé pour nommer un oiseau du jardin.",
      ],
    },
  ],
  exemples: [
    {
      enonce: "Un chihuahua et un dogue allemand sont-ils de la même espèce ? Et un chat et un lapin ?",
      etapes: [
        "Chihuahua et dogue : ils peuvent avoir des petits ensemble, qui pourront eux-mêmes se reproduire.",
        "Donc même espèce, malgré l’énorme différence d’apparence : ce sont deux races de chien.",
        "Chat et lapin : ils ne peuvent pas avoir de petits ensemble. Espèces différentes, malgré des ressemblances.",
      ],
      resultat: "même espèce · espèces différentes",
    },
  ],
  exercices: [
    q("s-p4-es-1", "Qu’est-ce qui définit une espèce ?", ["pouvoir se reproduire entre eux", "se ressembler", "vivre au même endroit"], "pouvoir se reproduire entre eux", "Et avoir des petits qui pourront eux aussi se reproduire."),
    q("s-p4-es-2", "Un chihuahua et un dogue allemand sont…", ["de la même espèce", "d’espèces différentes"], "de la même espèce", "Ce sont deux races de chien. La ressemblance ne décide pas : la reproduction décide."),
    q("s-p4-es-3", "Comment classe-t-on les êtres vivants aujourd’hui ?", ["par ce qu’ils possèdent", "par ce qui leur manque", "par leur taille"], "par ce qu’ils possèdent", "« Les animaux sans pattes » mélangerait les serpents et les vers : ce n’est pas un groupe utile."),
    q("s-p4-es-4", "Tous les animaux à plumes ont aussi…", ["un squelette", "des dents", "quatre pattes"], "un squelette", "Le groupe « à plumes » est emboîté dans le groupe « squelette »."),
    q("s-p4-es-5", "Qu’est-ce qu’une clé de détermination ?", ["une suite de questions pour identifier", "un dictionnaire", "une carte"], "une suite de questions pour identifier", "Chaque réponse élimine une partie des possibilités."),
    q("s-p4-es-6", "Que veut dire « groupes emboîtés » ?", ["un groupe est à l’intérieur d’un autre", "les groupes se mélangent", "les groupes sont séparés"], "un groupe est à l’intérieur d’un autre", "Comme des boîtes dans des boîtes : les oiseaux sont dans les vertébrés."),
    q("s-p4-es-7", "Un cheval et un âne ont un petit ensemble, le mulet, qui ne peut pas avoir de petits. Le cheval et l’âne sont…", ["d’espèces différentes", "de la même espèce"], "d’espèces différentes", "Pour être de la même espèce, il faut que les petits puissent eux-mêmes se reproduire. Le mulet ne le peut pas."),
    q("s-p4-es-8", "Quel attribut range un animal dans le groupe des vertébrés ?", ["un squelette interne avec une colonne vertébrale", "des poils", "le fait de vivre dans l’eau"], "un squelette interne avec une colonne vertébrale", "Poissons, grenouilles, lézards, oiseaux, mammifères : tous ont une colonne vertébrale. Les poils ne concernent que les mammifères."),
  ],
};

const developpement: Lecon = {
  code: "s-p4-developpement",
  matiere: "sciences",
  periode: 4,
  titre: "Comment grandissent les animaux",
  reference:
    "Décrire les étapes du développement des animaux ; mettre en relation le type de fécondation, interne ou externe, avec le milieu de vie et le devenir de la larve ou du jeune.",
  minutes: 30,
  cours: [
    {
      texte: [
        "Tous les animaux naissent, grandissent et deviennent adultes. Mais le chemin n’est pas le même pour tous, et les différences s’expliquent.",
      ],
    },
    {
      titre: "Deux façons de grandir",
      texte: [
        "Certains jeunes ressemblent déjà à leurs parents en petit : un chaton ressemble à un chat, un poussin à une poule. Ils grandissent, c’est tout.",
        "D’autres passent par des formes complètement différentes. Une chenille ne ressemble pas à un papillon ; un têtard ne ressemble pas à une grenouille. On appelle ces jeunes des **larves**, et cette transformation une **métamorphose**.",
        "Le papillon : œuf, chenille, chrysalide, papillon. La grenouille : œuf, têtard avec une queue et des branchies, puis pattes et poumons.",
      ],
      regle:
        "Larve = une forme jeune très différente de l’adulte. Métamorphose = la transformation qui mène de l’une à l’autre.",
    },
    {
      titre: "Où les œufs sont fécondés",
      texte: [
        "Un nouvel animal commence quand une cellule du mâle rencontre une cellule de la femelle. Cette rencontre s’appelle la **fécondation**. Elle peut se passer dehors ou dedans.",
        "La **fécondation externe** se passe dehors, dans l’eau : la femelle pond ses œufs, le mâle dépose ses cellules par-dessus. Poissons, grenouilles.",
        "La **fécondation interne** se passe dans le corps de la femelle. Oiseaux, mammifères, reptiles.",
        "Ce n’est pas un détail : la fécondation externe n’est possible que dans l’eau, parce que les cellules ont besoin d’un liquide pour se rencontrer et ne pas sécher.",
      ],
      regle:
        "Fécondation externe → milieu aquatique. Fécondation interne → possible sur la terre ferme.",
    },
    {
      titre: "Sortir d’un œuf, ou du ventre de sa mère",
      texte: [
        "Chez les **ovipares**, la femelle pond des œufs, et le petit se développe dedans avant d’en sortir : les oiseaux, les poissons, les grenouilles, les tortues, les insectes.",
        "Chez les **vivipares**, le petit se développe dans le ventre de sa mère, et il en sort déjà formé : les mammifères, comme le chat, la vache, le dauphin — et les humains.",
        "Attention : vivipare ne veut pas dire « fécondation interne ». Les oiseaux ont une fécondation interne, et pourtant ils pondent des œufs.",
      ],
    },
    {
      titre: "Beaucoup d’œufs, ou peu de petits",
      texte: [
        "Une grenouille pond des milliers d’œufs, et presque tous sont mangés. Un couple d’oiseaux élève trois ou quatre petits et les protège.",
        "Deux stratégies opposées : miser sur le nombre, ou miser sur la protection. Les deux marchent, puisque les deux existent encore.",
      ],
    },
    {
      titre: "Plus tard, avec les mains",
      texte: [
        "Élève des vers de farine, qu’on trouve en animalerie : une boîte avec de la farine ou des flocons d’avoine, un morceau de pomme pour l’eau. En quelques semaines, tu verras la larve, puis la nymphe immobile, puis le petit coléoptère noir. Dessine chaque étape avec la date.",
        "Au printemps, cherche dans une mare des œufs de grenouille, en paquet gélatineux, puis des têtards. Regarde, dessine, mais ne les emporte pas : les grenouilles sont protégées.",
        "Sur une plante du jardin, une chenille : note sur quelle feuille elle mange et reviens la voir chaque jour.",
      ],
    },
  ],
  exemples: [
    {
      enonce: "Cite les étapes du développement du papillon, et dis si sa jeune forme est une larve.",
      etapes: [
        "Œuf, puis chenille, puis chrysalide, puis papillon adulte.",
        "La chenille ne ressemble pas du tout au papillon : c’est donc une larve.",
        "Le passage de la chenille au papillon est une métamorphose.",
      ],
      resultat: "œuf, chenille, chrysalide, papillon · oui, une larve",
    },
  ],
  exercices: [
    q("s-p4-dv-1", "Comment appelle-t-on une forme jeune très différente de l’adulte ?", ["une larve", "un bébé", "un œuf"], "une larve", "La chenille et le têtard sont des larves."),
    q("s-p4-dv-2", "Comment appelle-t-on la transformation de la chenille en papillon ?", ["une métamorphose", "une croissance", "une mue"], "une métamorphose", "C’est un changement complet de forme, pas seulement une croissance."),
    e("s-p4-dv-3", "Combien d’étapes compte le développement du papillon, de l’œuf à l’adulte ? Compte l’œuf et l’adulte.", "4", "Œuf, chenille, chrysalide, papillon : quatre étapes."),
    q("s-p4-dv-4", "La fécondation externe est possible surtout…", ["dans l’eau", "sur la terre", "dans l’air"], "dans l’eau", "Les cellules ont besoin d’un liquide pour se rencontrer et ne pas sécher."),
    q("s-p4-dv-5", "Chez les oiseaux, la fécondation est…", ["interne", "externe"], "interne", "Elle se passe dans le corps de la femelle, ce qui rend la reproduction possible hors de l’eau."),
    q("s-p4-dv-6", "Pourquoi une grenouille pond-elle des milliers d’œufs ?", ["presque tous sont mangés", "elle en perd", "c’est plus rapide"], "presque tous sont mangés", "Miser sur le nombre est une stratégie ; protéger peu de petits en est une autre."),
    q("s-p4-dv-7", "La poule pond des œufs. La poule est…", ["ovipare", "vivipare"], "ovipare", "Le poussin se développe dans l’œuf avant d’en sortir. Chez les vivipares, comme le chat, le petit se développe dans le ventre de sa mère."),
    q("s-p4-dv-8", "Un chaton ressemble à un chat en plus petit. Passe-t-il par une larve ?", ["non, il grandit seulement", "oui, comme la chenille", "oui, dans l’eau"], "non, il grandit seulement", "Une larve est une forme jeune très différente de l’adulte. Le chaton a déjà la forme du chat : pas de métamorphose."),
  ],
};

const ecosystemes: Lecon = {
  code: "s-p4-ecosystemes",
  matiere: "sciences",
  periode: 4,
  titre: "Les écosystèmes et les chaînes alimentaires",
  reference:
    "Définir un écosystème comme un ensemble d’êtres vivants et leur milieu ; représenter par un réseau les liens alimentaires entre les êtres vivants d’un écosystème ; envisager les conséquences d’une action humaine sur un écosystème.",
  minutes: 30,
  cours: [
    {
      texte: [
        "Dans une mare, une forêt, un jardin, les êtres vivants ne sont pas côte à côte par hasard : ils dépendent les uns des autres, et de leur milieu. Cet ensemble s’appelle un **écosystème**.",
      ],
    },
    {
      titre: "Qui mange qui",
      texte: [
        "Une **chaîne alimentaire** se lit dans le sens de ce qui est mangé vers celui qui mange : herbe → lapin → renard. La flèche veut dire « est mangé par ».",
        "Au départ, il y a toujours un **végétal**. Les plantes n’ont pas besoin de manger d’autres êtres vivants : avec de l’eau et des sels minéraux puisés dans le sol, un gaz pris dans l’air (le dioxyde de carbone) et la lumière du Soleil, elles fabriquent elles-mêmes leur matière. On dit qu’elles sont des **producteurs** ; les animaux, qui mangent, sont des **consommateurs**.",
        "C’est pour ça que le premier de la chaîne est toujours une plante, jamais un animal.",
        "Et à la fin ? Les feuilles mortes, les animaux morts, les crottes sont mangés par les vers de terre, les cloportes, les champignons : les **décomposeurs**. Ils rendent au sol les sels minéraux que les plantes vont reprendre. Rien ne se perd, tout tourne.",
      ],
      regle:
        "La flèche se lit « est mangé par ». Et une chaîne commence toujours par un végétal.",
    },
    {
      titre: "Un réseau, pas une ligne",
      texte: [
        "En réalité, rien n’est aussi simple qu’une chaîne. Le renard mange aussi des mulots et des baies ; le lapin est mangé par le renard, le rapace et le lynx.",
        "Quand on dessine toutes les flèches, on obtient un **réseau alimentaire** : beaucoup de chemins qui se croisent.",
        "Un réseau riche est plus solide qu’une chaîne unique. Si une espèce disparaît, les autres ont d’autres chemins.",
      ],
    },
    {
      titre: "Toucher à un maillon touche tout",
      texte: [
        "Si on supprime les renards, les lapins se multiplient, mangent toute l’herbe, puis manquent de nourriture et meurent en masse.",
        "Si on supprime l’herbe, tout s’effondre d’un coup.",
        "C’est ce qui rend les conséquences d’une action humaine difficiles à prévoir : elles ne s’arrêtent jamais au maillon qu’on visait.",
      ],
      regle:
        "Dans un écosystème, on ne touche jamais à une seule espèce. Tout ce qui est relié est concerné.",
    },
    {
      titre: "Plus tard, avec les mains",
      texte: [
        "Choisis un carré de jardin ou de parc, d’un mètre de côté. Pendant un quart d’heure, note tout ce qui y vit : plantes, insectes, vers, escargots, oiseaux qui passent. Soulève une pierre ou une planche : dessous, cloportes et vers de terre travaillent.",
        "Sur une feuille, écris chaque être vivant trouvé et relie-les par des flèches « est mangé par ». Un guide, ou une recherche avec un adulte, t’aidera pour ce que tu ne sais pas. Tu obtiens un réseau.",
        "Puis barre une espèce et suis les flèches : qui manque de nourriture ? Qui se multiplie ?",
      ],
    },
  ],
  exemples: [
    {
      enonce: "Écris une chaîne alimentaire avec l’herbe, le renard et le lapin, et explique le sens des flèches.",
      etapes: [
        "Le premier doit être un végétal : l’herbe.",
        "L’herbe est mangée par le lapin.",
        "Le lapin est mangé par le renard.",
        "Les flèches se lisent « est mangé par », donc : herbe → lapin → renard.",
      ],
      resultat: "herbe → lapin → renard",
    },
  ],
  exercices: [
    q("s-p4-ec-1", "Qu’est-ce qu’un écosystème ?", ["des êtres vivants et leur milieu", "une liste d’animaux", "un paysage"], "des êtres vivants et leur milieu", "L’ensemble compte : les vivants, le milieu, et les liens entre eux."),
    q("s-p4-ec-2", "Dans « herbe → lapin → renard », que veut dire la flèche ?", ["est mangé par", "mange", "vit avec"], "est mangé par", "L’herbe est mangée par le lapin, qui est mangé par le renard."),
    q("s-p4-ec-3", "Par quoi commence toujours une chaîne alimentaire ?", ["un végétal", "un grand prédateur", "un insecte"], "un végétal", "Les plantes fabriquent elles-mêmes leur matière avec de l’eau, des sels minéraux, un gaz de l’air et la lumière du Soleil."),
    q("s-p4-ec-4", "Pourquoi parle-t-on de réseau plutôt que de chaîne ?", ["chaque espèce a plusieurs liens", "c’est plus joli", "les chaînes n’existent pas"], "chaque espèce a plusieurs liens", "Le renard mange aussi des mulots et des baies : les chemins se croisent."),
    q("s-p4-ec-5", "Que se passe-t-il si on supprime tous les renards ?", ["les lapins se multiplient puis manquent de nourriture", "rien", "l’herbe pousse mieux"], "les lapins se multiplient puis manquent de nourriture", "Les conséquences ne s’arrêtent pas au maillon qu’on visait."),
    q("s-p4-ec-6", "Un réseau alimentaire riche est…", ["plus solide", "plus fragile", "identique"], "plus solide", "Si une espèce disparaît, les autres ont d’autres chemins."),
    q("s-p4-ec-7", "Les vers de terre et les champignons qui mangent les feuilles mortes sont des…", ["décomposeurs", "producteurs", "prédateurs"], "décomposeurs", "Ils rendent au sol les sels minéraux que les plantes vont reprendre. Les producteurs, ce sont les plantes."),
    q("s-p4-ec-8", "Dans la chaîne « salade → escargot → hérisson », qui mange l’escargot ?", ["le hérisson", "la salade", "personne"], "le hérisson", "La flèche se lit « est mangé par » : l’escargot est mangé par le hérisson. Le hérisson mange en effet des escargots, des limaces et des insectes."),
  ],
};

/* ================================================================== */
/* PÉRIODE 5                                                           */
/* ================================================================== */

const meteo: Lecon = {
  code: "s-p5-meteo",
  matiere: "sciences",
  periode: 5,
  titre: "La météo et les saisons",
  reference:
    "Réaliser et exploiter des mesures météorologiques : température, pluviométrie, direction et vitesse du vent ; caractériser à partir de données physiques les variations au cours de l’année.",
  minutes: 30,
  cours: [
    {
      texte: [
        "La météo, c’est le temps qu’il fait maintenant et dans les jours qui viennent. Le climat, c’est le temps qu’il fait **habituellement** dans une région, mesuré sur des dizaines d’années. Ce ne sont pas les mêmes choses, et on les confond souvent.",
      ],
      regle:
        "Un jour froid ne dit rien sur le climat. Une moyenne sur trente ans, oui.",
    },
    {
      titre: "Ce qu’on mesure, et avec quoi",
      texte: [
        "La **température**, avec un thermomètre, en degrés Celsius. À l’ombre, sinon on mesure le soleil et pas l’air.",
        "Les **précipitations**, avec un pluviomètre, en millimètres. Un millimètre de pluie veut dire que l’eau tombée formerait une couche d’un millimètre sur un sol plat.",
        "Le **vent** : sa direction avec une girouette — on nomme le vent d’où il vient, un vent d’ouest vient de l’ouest — et sa force avec un anémomètre.",
      ],
    },
    {
      titre: "Mesurer toujours pareil",
      texte: [
        "Pour comparer des mesures d’un jour à l’autre, il faut mesurer au même endroit, à la même heure, de la même façon.",
        "Un thermomètre au soleil le lundi et à l’ombre le mardi ne compare rien. C’est la règle la plus importante de toute mesure scientifique.",
      ],
      regle: "Même lieu, même heure, même méthode. Sinon, les mesures ne se comparent pas.",
    },
    {
      titre: "Les saisons ne viennent pas de la distance",
      texte: [
        "On croit souvent qu’il fait plus chaud en été parce que la Terre est plus près du Soleil. C’est faux.",
        "La Terre est **inclinée**. En été, notre moitié du globe est penchée vers le Soleil : les rayons arrivent plus droit, et les journées sont plus longues. En hiver, c’est l’inverse.",
        "Preuve simple : quand c’est l’été en France, c’est l’hiver en Australie. Si la distance au Soleil expliquait tout, les deux auraient la même saison en même temps. Et il y a plus étonnant : la Terre est un peu **plus près** du Soleil début janvier, en plein hiver chez nous, qu’en juillet.",
      ],
      regle: "Les saisons viennent de l’inclinaison de la Terre, pas de sa distance au Soleil.",
    },
    {
      titre: "Plus tard, avec les mains",
      texte: [
        "Fabrique un pluviomètre : coupe le haut d’une bouteille en plastique, retourne-le dans la bouteille comme un entonnoir, colle une règle le long de la paroi. Comme le fond n’est pas plat, verse d’abord de l’eau jusqu’au zéro de la règle. Pose-le dehors, loin des murs et des arbres, et relève la hauteur d’eau chaque matin à la même heure.",
        "Accroche un thermomètre dehors, à l’ombre, à l’abri de la pluie. Note la température chaque jour à la même heure pendant deux semaines dans un tableau, avec la pluie et le vent. Puis trace la courbe.",
        "Pour le vent : un ruban léger attaché au bout d’un bâton flotte du côté où le vent va ; le vent vient donc du côté opposé. Note la direction avec une boussole.",
      ],
    },
  ],
  exemples: [
    {
      enonce: "Il fait 3 °C un matin de juin. Peut-on en conclure que le climat s’est refroidi ?",
      etapes: [
        "3 °C en juin est inhabituel, mais c’est une mesure d’un seul jour.",
        "La météo varie énormément d’un jour à l’autre : c’est normal.",
        "Le climat se mesure sur des dizaines d’années. Un jour ne prouve rien, dans un sens comme dans l’autre.",
      ],
      resultat: "non, un jour ne dit rien sur le climat",
    },
  ],
  exercices: [
    q("s-p5-mt-1", "Quelle est la différence entre météo et climat ?", ["le climat se mesure sur des dizaines d’années", "il n’y en a pas", "la météo est plus précise"], "le climat se mesure sur des dizaines d’années", "La météo est le temps du moment ; le climat, ce qui est habituel."),
    q("s-p5-mt-2", "Où faut-il placer un thermomètre pour mesurer la température de l’air ?", ["à l’ombre", "au soleil", "peu importe"], "à l’ombre", "Au soleil, on mesure le rayonnement et non la température de l’air."),
    q("s-p5-mt-3", "Avec quoi mesure-t-on la pluie ?", ["un pluviomètre", "un thermomètre", "une girouette"], "un pluviomètre", "Il mesure la hauteur d’eau tombée, en millimètres."),
    q("s-p5-mt-4", "Un vent d’ouest…", ["vient de l’ouest", "va vers l’ouest"], "vient de l’ouest", "On nomme toujours un vent par sa provenance."),
    q("s-p5-mt-5", "Pourquoi fait-il plus chaud en été ?", ["la Terre est inclinée", "la Terre est plus près du Soleil", "le Soleil chauffe plus"], "la Terre est inclinée", "Notre moitié du globe est penchée vers le Soleil : les rayons arrivent plus droit et les jours sont plus longs."),
    q("s-p5-mt-6", "Quand c’est l’été en France, en Australie c’est…", ["l’hiver", "l’été", "l’automne"], "l’hiver", "C’est la preuve que les saisons viennent de l’inclinaison et non de la distance au Soleil."),
    q("s-p5-mt-7", "Le pluviomètre indique 10 mm. Qu’est-ce que cela veut dire ?", ["l’eau tombée ferait une couche de 10 mm sur un sol plat", "il a plu pendant 10 minutes", "il est tombé 10 gouttes"], "l’eau tombée ferait une couche de 10 mm sur un sol plat", "La pluie se mesure en hauteur d’eau, en millimètres. 10 mm, c’est une bonne pluie."),
    q("s-p5-mt-8", "Pour comparer la température de lundi et celle de mardi, il faut mesurer…", ["au même endroit et à la même heure", "à l’heure qu’on veut", "une fois au soleil, une fois à l’ombre"], "au même endroit et à la même heure", "Même lieu, même heure, même méthode : sinon on ne sait pas si c’est le temps qui a changé ou la façon de mesurer."),
  ],
};

const cerveau: Lecon = {
  code: "s-p5-cerveau",
  matiere: "sciences",
  periode: 5,
  titre: "Le cerveau et l’attention",
  reference:
    "Localiser le cerveau et l’identifier comme un organe ; comprendre quelques mécanismes perceptifs ; déterminer des stratégies pour focaliser son attention.",
  minutes: 30,
  cours: [
    {
      texte: [
        "Le cerveau est un **organe**, comme le cœur ou l’estomac, protégé par les os du crâne. Il reçoit des informations des sens — les yeux, les oreilles, la peau, le nez, la langue —, les traite, garde des souvenirs, et commande les muscles. Tout ce que tu penses et ressens s’y passe.",
        "Les messages circulent par les **nerfs**, des sortes de fils qui relient chaque organe au cerveau. Quand tu attrapes une balle : les yeux envoient l’image au cerveau, le cerveau décide, et il envoie l’ordre aux muscles du bras. Tout ça en une fraction de seconde.",
      ],
    },
    {
      titre: "Le cerveau interprète, il ne photographie pas",
      texte: [
        "Ce que tu vois n’est pas une photographie de la réalité : c’est ce que ton cerveau reconstruit à partir des signaux de tes yeux.",
        "C’est pourquoi les illusions d’optique marchent : deux traits de la même longueur paraissent différents selon ce qui les entoure. Ton cerveau applique une règle utile d’habitude, qui se trompe ici.",
        "Ce n’est pas un défaut : reconstruire vite avec peu d’informations est extrêmement utile. Mais ça veut dire qu’on peut se tromper de bonne foi — et c’est pour ça qu’en sciences on mesure au lieu de juger à l’œil.",
      ],
      regle:
        "Le cerveau interprète. Voilà pourquoi une mesure vaut mieux qu’une impression.",
    },
    {
      titre: "L’attention est limitée, et ça ne se décide pas",
      texte: [
        "On ne peut pas vraiment faire deux choses qui demandent de réfléchir en même temps. On alterne très vite, et chaque changement coûte du temps.",
        "C’est mesurable : lire un texte avec de la musique à paroles prend plus de temps et on en retient moins.",
        "Ce n’est donc pas une question de volonté ni de sérieux. C’est ainsi que le cerveau fonctionne, pour tout le monde.",
      ],
      regle:
        "Faire deux choses à la fois n’existe pas : on alterne, et on perd à chaque passage.",
    },
    {
      titre: "Ce qui aide vraiment",
      texte: [
        "Retirer ce qui interrompt : téléphone loin, notifications coupées, bureau dégagé.",
        "Travailler en tranches, avec de vraies pauses entre les deux. Se reposer fait partie du travail.",
        "Se tester au lieu de relire : essayer de redire une leçon sans la regarder apprend beaucoup plus que la relire trois fois. C’est prouvé, et ça surprend tout le monde.",
        "Dormir. Le cerveau range et consolide ce qui a été appris pendant le sommeil — une nuit courte efface une partie du travail de la journée.",
      ],
    },
    {
      titre: "Plus tard, avec les mains",
      texte: [
        "Trace deux traits de 6 cm, l’un au-dessus de l’autre. Au bout du premier, dessine des pointes de flèche tournées vers l’extérieur ; au bout du second, des pointes tournées vers l’intérieur. Regarde : l’un paraît plus long. Mesure avec la règle : ils sont égaux. Ton cerveau a interprété.",
        "Demande à quelqu’un de te lire dix mots pendant que tu comptes à rebours de 50 à 0, à voix haute. Combien de mots retiens-tu ? Recommence avec dix autres mots, sans compter. Compare.",
        "Ce soir, relis une leçon une fois, ferme le cahier, et redis-la à quelqu’un. Ce que tu n’as pas retrouvé, regarde-le, puis réessaie demain : c’est exactement comme ça que ça s’accroche.",
      ],
    },
  ],
  exemples: [
    {
      enonce: "Pour apprendre une leçon, vaut-il mieux la relire quatre fois, ou la relire une fois puis essayer de la redire ?",
      etapes: [
        "Relire est confortable : on reconnaît le texte, on a l’impression de savoir.",
        "Se tester est moins confortable : on cherche, et on ne trouve pas toujours du premier coup.",
        "Or c’est justement l’effort de chercher qui fixe le souvenir — même quand on ne trouve pas : dès qu’on relit la réponse, elle s’accroche mieux. Les mesures le montrent nettement.",
      ],
      resultat: "la relire une fois, puis se tester",
    },
  ],
  exercices: [
    q("s-p5-ce-1", "Où se trouve le cerveau ?", ["dans le crâne", "dans le thorax", "dans le ventre"], "dans le crâne", "C’est un organe protégé par les os du crâne."),
    q("s-p5-ce-2", "Ce que tu vois est…", ["reconstruit par ton cerveau", "une photographie exacte", "toujours juste"], "reconstruit par ton cerveau", "C’est pourquoi les illusions d’optique fonctionnent sur tout le monde."),
    q("s-p5-ce-3", "Pourquoi mesure-t-on en sciences plutôt que de juger à l’œil ?", ["parce que le cerveau interprète", "parce que c’est plus long", "par tradition"], "parce que le cerveau interprète", "On peut se tromper de bonne foi : la mesure met tout le monde d’accord."),
    q("s-p5-ce-4", "Peut-on faire deux choses qui demandent de réfléchir en même temps ?", ["non, on alterne", "oui, facilement", "seulement les adultes"], "non, on alterne", "Et chaque changement coûte du temps. Ce n’est pas une question de volonté."),
    q("s-p5-ce-5", "Pour apprendre une leçon, qu’est-ce qui marche le mieux ?", ["se tester sans regarder", "la relire quatre fois", "la recopier"], "se tester sans regarder", "L’effort de retrouver fixe le souvenir. Relire donne l’impression de savoir sans le faire."),
    q("s-p5-ce-6", "À quoi sert le sommeil pour apprendre ?", ["le cerveau consolide ce qui a été appris", "à rien", "à se reposer seulement"], "le cerveau consolide ce qui a été appris", "Une nuit courte efface une partie du travail de la journée."),
    q("s-p5-ce-7", "Par quoi passent les messages entre les yeux, le cerveau et les muscles ?", ["les nerfs", "le sang", "les os"], "les nerfs", "Les nerfs relient chaque organe au cerveau, comme des fils. Les yeux envoient, le cerveau décide, les muscles obéissent."),
    q("s-p5-ce-8", "Tu essaies de redire ta leçon et tu ne retrouves pas un mot. Que vaut-il mieux faire ?", ["regarder la réponse, puis réessayer plus tard", "relire toute la leçon dix fois", "arrêter de se tester"], "regarder la réponse, puis réessayer plus tard", "Ne pas trouver n’est pas un échec : c’est le moment où le cerveau se prépare à retenir la réponse qu’il va lire. Réessayer le lendemain fixe le souvenir."),
  ],
};

const puberte: Lecon = {
  code: "s-p5-puberte",
  matiere: "sciences",
  periode: 5,
  titre: "Grandir : les changements du corps",
  reference:
    "Décrire et identifier les changements morphologiques du corps à la puberté ; comprendre que la puberté se produit à des âges différents selon les individus.",
  minutes: 25,
  reserveeAuxParents: true,
  cours: [
    {
      texte: [
        "Entre l’enfance et l’âge adulte, le corps se transforme. Cette période s’appelle la **puberté**. Ce n’est pas une maladie et ce n’est pas un choix : c’est une étape que tout le monde traverse.",
      ],
    },
    {
      titre: "Ce qui change",
      texte: [
        "On grandit vite — jusqu’à 8 ou 10 centimètres en une seule année — et la silhouette se modifie : les épaules s’élargissent chez les garçons, les hanches chez les filles.",
        "Des poils apparaissent à de nouveaux endroits : sous les bras, sur le sexe, et sur le visage chez les garçons. La transpiration change d’odeur, et se laver chaque jour devient plus important. La peau devient parfois plus grasse, avec des boutons.",
        "La voix change, surtout chez les garçons, parce que le larynx, l’organe de la voix dans la gorge, grandit.",
        "Chez les filles, la poitrine se développe et les règles apparaissent : quelques jours par mois, un peu de sang s’écoule par le sexe. Ce n’est pas une blessure ; c’est le signe que le corps devient capable, bien plus tard, de porter un bébé. Chez les garçons, les organes génitaux se développent.",
        "Tout cela est commandé par des messagers chimiques que le corps fabrique, appelés hormones.",
      ],
      regle:
        "Ces changements ne sont ni choisis ni évitables. Ils arrivent à tout le monde, dans un ordre à peu près constant.",
    },
    {
      titre: "Pas au même âge, et ce n’est pas une course",
      texte: [
        "La puberté commence en général entre 8 et 13 ans chez les filles, entre 9 et 14 ans chez les garçons — et elle dure plusieurs années. Ce ne sont que des repères.",
        "Dans une classe du même âge, certains ont déjà beaucoup changé et d’autres pas du tout. Les deux sont parfaitement normaux.",
        "Commencer tôt ou tard ne dit rien sur la taille qu’on aura, ni sur rien d’autre. Ce n’est pas une compétition, et il n’y a pas d’avance ni de retard.",
      ],
      regle: "Chacun a son calendrier. Il n’y a ni avance ni retard.",
    },
    {
      titre: "Des questions, c’est normal",
      texte: [
        "Un corps qui change vite peut mettre mal à l’aise, et se poser des questions est le contraire d’un problème.",
        "Les bonnes personnes à qui les poser : ses parents, un médecin. Pas les rumeurs de cour de récréation, qui racontent beaucoup de choses fausses.",
      ],
    },
    {
      titre: "À faire",
      texte: [
        "Regarde des photos de toi bébé, à trois ans, à six ans, et aujourd’hui : ton corps a déjà énormément changé, sans que tu aies rien décidé. La puberté est une étape de plus sur ce chemin.",
        "Sur une toise ou contre un mur, marque ta taille avec la date. Refais-le tous les six mois : un jour, tu verras la croissance accélérer.",
      ],
    },
  ],
  exemples: [
    {
      enonce: "Deux élèves du même âge : l’un a beaucoup grandi cette année, l’autre presque pas. Lequel est normal ?",
      etapes: [
        "La puberté ne commence pas au même âge chez tout le monde.",
        "Les écarts entre deux personnes du même âge peuvent être de plusieurs années.",
        "Les deux sont donc normaux, et cela ne dit rien sur leur taille future.",
      ],
      resultat: "les deux",
    },
  ],
  exercices: [
    q("s-p5-pu-1", "Comment appelle-t-on la période où le corps passe de l’enfance à l’âge adulte ?", ["la puberté", "la croissance", "la vieillesse"], "la puberté", "C’est une étape que tout le monde traverse, commandée par des hormones."),
    q("s-p5-pu-2", "La puberté commence-t-elle au même âge pour tout le monde ?", ["non", "oui"], "non", "Les écarts entre deux personnes du même âge peuvent atteindre plusieurs années."),
    q("s-p5-pu-3", "Pourquoi la voix change-t-elle à la puberté ?", ["le larynx grandit", "les poumons rétrécissent", "on parle plus fort"], "le larynx grandit", "L’organe de la voix se modifie, surtout chez les garçons."),
    q("s-p5-pu-4", "Qu’est-ce qui commande ces changements ?", ["des hormones", "l’alimentation seule", "la volonté"], "des hormones", "Ce sont des messagers chimiques fabriqués par le corps. Rien n’est choisi."),
    q("s-p5-pu-5", "Commencer sa puberté plus tard que les autres veut dire…", ["rien de particulier", "qu’on sera plus petit", "qu’il y a un problème"], "rien de particulier", "Ce n’est pas une course, et il n’y a ni avance ni retard."),
    q("s-p5-pu-6", "À qui poser ses questions sur son corps ?", ["à ses parents ou à un médecin", "aux camarades", "à personne"], "à ses parents ou à un médecin", "Les rumeurs racontent beaucoup de choses fausses. Se poser des questions est normal."),
    q("s-p5-pu-7", "La puberté dure…", ["plusieurs années", "quelques jours", "un mois"], "plusieurs années", "Les changements arrivent les uns après les autres, dans un ordre à peu près constant, sur plusieurs années."),
    q("s-p5-pu-8", "Pourquoi se laver chaque jour devient-il plus important à la puberté ?", ["la transpiration change d’odeur", "la peau devient plus fine", "on grandit"], "la transpiration change d’odeur", "La peau se met à fabriquer une transpiration qui sent plus fort. Se laver et changer de vêtements suffit."),
  ],
};

const programmation: Lecon = {
  code: "s-p5-programmation",
  matiere: "sciences",
  periode: 5,
  titre: "Donner des instructions à une machine",
  reference:
    "Traduire un programme simple en langage naturel ; utiliser un programme pour agir sur le comportement d’un objet technique ; comprendre et produire un algorithme simple.",
  minutes: 30,
  cours: [
    {
      texte: [
        "Une machine ne comprend rien. Elle exécute des instructions, exactement dans l’ordre donné, sans rien deviner. C’est à la fois sa force et sa limite. La liste des instructions qu’on lui donne s’appelle un **programme**.",
      ],
    },
    {
      titre: "Un algorithme est une suite d’étapes",
      texte: [
        "Une recette de cuisine est un algorithme : une suite d’étapes dans un ordre précis, qui mène à un résultat.",
        "« Avance de 3 cases ; tourne à droite ; avance de 2 cases » est un algorithme de déplacement.",
        "L’ordre compte absolument. « Tourne puis avance » et « avance puis tourne » ne mènent pas au même endroit.",
      ],
      regle:
        "Un algorithme, c’est une suite d’instructions dans un ordre précis. Change l’ordre, change le résultat.",
    },
    {
      titre: "La machine ne devine pas",
      texte: [
        "Si tu oublies une étape, la machine ne la rajoute pas. Si tu dis « avance » sans dire combien, elle ne choisit pas pour toi.",
        "Un être humain comprend « fais le tour de la table ». Une machine a besoin qu’on découpe : avance, tourne, avance, tourne, avance, tourne, avance.",
        "C’est pour ça que programmer apprend à être précis : la moindre imprécision se voit immédiatement.",
      ],
      regle: "La machine fait exactement ce qu’on écrit, pas ce qu’on voulait écrire.",
    },
    {
      titre: "Répéter, plutôt que recopier",
      texte: [
        "Pour faire un carré, on pourrait écrire huit instructions. Ou dire : **répète 4 fois** (avance de 3, tourne à droite).",
        "C’est plus court, plus clair, et plus rapide à corriger : si on veut un carré plus grand, on ne change qu’un seul nombre.",
        "Cette idée de boucle est l’une des plus importantes de toute la programmation.",
      ],
    },
    {
      titre: "Plus tard, avec les mains",
      texte: [
        "Joue au robot : un adulte est le robot, les yeux fermés, et tu es le programmeur. Il ne comprend que quatre instructions : « avance d’un pas », « recule d’un pas », « tourne à droite », « tourne à gauche ». Guide-le jusqu’à la porte. Puis échangez les rôles.",
        "Dessine une grille de 5 cases sur 5 sur une feuille, pose un pion et un trésor. Écris le programme qui mène le pion au trésor, puis fais-le exécuter par quelqu’un d’autre, à la lettre. Ça marche ? Essaie ensuite de l’écrire plus court avec une boucle « répète ».",
        "Si tu as accès à un ordinateur ou à une tablette, le logiciel gratuit Scratch fait exactement ça avec un petit chat à l’écran. Un robot programmable, comme ceux qu’on trouve dans certaines classes, fait la même chose sur le sol.",
      ],
    },
  ],
  exemples: [
    {
      enonce: "Écris l’algorithme le plus court pour faire dessiner un carré à un robot.",
      etapes: [
        "Un carré a quatre côtés égaux et quatre angles droits.",
        "Un côté demande deux instructions : avancer, puis tourner à droite.",
        "Les quatre côtés se font donc en répétant quatre fois ces deux instructions.",
      ],
      resultat: "répète 4 fois : avance de 3, tourne à droite",
    },
  ],
  exercices: [
    q("s-p5-pg-1", "Qu’est-ce qu’un algorithme ?", ["une suite d’étapes dans un ordre précis", "une machine", "un calcul"], "une suite d’étapes dans un ordre précis", "Une recette de cuisine en est un."),
    q("s-p5-pg-2", "« Tourne puis avance » et « avance puis tourne » donnent…", ["des résultats différents", "le même résultat"], "des résultats différents", "L’ordre des instructions compte absolument."),
    e("s-p5-pg-3", "Combien de fois faut-il répéter « avance, tourne à droite » pour faire un carré ?", "4", "Un carré a quatre côtés et quatre angles droits."),
    q("s-p5-pg-4", "Si tu oublies une instruction, la machine…", ["ne la rajoute pas", "la devine", "te demande de la donner"], "ne la rajoute pas", "Elle fait exactement ce qu’on écrit, pas ce qu’on voulait écrire."),
    q("s-p5-pg-5", "Programme : choisis un nombre ; ajoute 2 ; multiplie par 4. Avec 5, que trouve-t-on ?", ["28", "22", "20"], "28", "5 + 2 = 7, puis 7 × 4 = 28. Multiplier d’abord donnerait 22 : l’ordre compte."),
    q("s-p5-pg-6", "À quoi sert une boucle dans un programme ?", ["répéter sans recopier", "ralentir la machine", "corriger les erreurs"], "répéter sans recopier", "C’est plus court, plus clair, et il n’y a qu’un nombre à changer pour modifier tout."),
    e("s-p5-pg-7", "Programme : « répète 3 fois : avance de 2 cases ». De combien de cases avance-t-on en tout ?", "6", "Trois fois « avance de 2 » : 2 + 2 + 2 = 6 cases. La boucle remplace trois instructions identiques."),
    q("s-p5-pg-8", "Un robot regarde vers le nord. Programme : « tourne à droite ; avance de 2 ». Vers où avance-t-il ?", ["vers l’est", "vers l’ouest", "vers le nord"], "vers l’est", "Face au nord, tourner à droite fait regarder vers l’est. Puis il avance de 2 cases vers l’est. L’ordre compte : avancer d’abord l’aurait mené vers le nord."),
  ],
};

export const sciences: Lecon[] = [
  masse,
  melanges,
  dissolution,
  mouvement,
  objetsTechniques,
  ombres,
  lune,
  espece,
  developpement,
  ecosystemes,
  meteo,
  cerveau,
  puberte,
  programmation,
];
