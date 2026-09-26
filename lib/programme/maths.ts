/**
 * Mathématiques, CM1 — l'année entière.
 *
 * Adossé au **programme de mathématiques du cycle 3 publié au BO spécial
 * n° 16 du 17 avril 2025**, en vigueur au CM1 depuis la rentrée 2025. C'est
 * une correction importante : la première version de ce fichier suivait les
 * anciens « attendus de fin d'année de CM1 », qui sont périmés et qui
 * séquencent l'année autrement.
 *
 * Deux contraintes du programme commandent tout l'ordre des leçons, et elles
 * ne sont pas intuitives :
 *
 *   - **Pendant les périodes 1 et 2, les nombres entiers ne dépassent pas
 *     quatre chiffres.** Les cinq et six chiffres n'arrivent qu'en période 3.
 *     Le début d'année est réservé aux fractions et aux décimaux.
 *   - **Les nombres décimaux sont introduits comme des fractions décimales**,
 *     et l'écriture à virgule ne vient qu'ensuite, comme un codage. Au CM1 on
 *     ne va pas au-delà des centièmes.
 *
 * Les six leçons par période suivent les cinq périodes de l'année scolaire.
 * Rien de tout ceci n'a été relu par un enseignant. Ça doit l'être.
 */

import { e, q, type Lecon } from "./types";

/* ================================================================== */
/* PÉRIODE 1 — septembre, octobre                                      */
/* ================================================================== */

const nombresQuatreChiffres: Lecon = {
  code: "m-p1-nombres",
  matiere: "maths",
  periode: 1,
  titre: "Les nombres jusqu’à 9 999",
  reference:
    "Connaître la valeur des chiffres en fonction de leur position dans un nombre ; connaître et utiliser les relations entre les unités de numération ; connaître et utiliser diverses représentations d’un nombre et passer de l’une à l’autre.",
  minutes: 30,
  cours: [
    {
      texte: [
        "Avant d’aller plus loin cette année, on remet d’aplomb ce qui va servir tous les jours : la place des chiffres dans un nombre.",
        "Ce n’est pas une révision pour rien : c’est sa place qui dit ce que vaut un chiffre, et tous les calculs de l’année s’appuient dessus — poser une addition, une multiplication, une division.",
      ],
    },
    {
      titre: "Chaque place a un nom, et une valeur",
      texte: [
        "Dans 2 367, chaque chiffre vaut quelque chose de différent selon sa place : 2 milliers, 3 centaines, 6 dizaines, 7 unités.",
        "Quand on avance d’un cran vers la gauche, la valeur est multipliée par dix. C’est toute l’idée de notre numération, et c’est pour ça qu’on l’appelle décimale.",
        "L’espace entre le 2 et le 367 n’est pas une décoration : elle sépare les milliers des unités, et elle aide à lire.",
      ],
      regle:
        "Un chiffre ne vaut pas la même chose selon où il est. Dans 2 367, le 3 vaut 300 ; dans 2 637, le même 3 vaut 30.",
    },
    {
      titre: "« Chiffre des » et « nombre de » : deux choses différentes",
      texte: [
        "C’est la confusion la plus fréquente, et elle mérite qu’on s’arrête.",
        "Le **chiffre** des centaines, c’est un seul chiffre : celui qui est à cette place. Dans 2 367, le chiffre des centaines est 3.",
        "Le **nombre** de centaines, c’est combien de centaines entières il y a en tout dans le nombre. Dans 2 367, il y a 23 centaines — parce que 23 × 100 = 2 300, et il reste 67.",
        "Truc : pour le nombre de centaines, cache les deux derniers chiffres avec ton doigt. Ce qui reste devant est la réponse.",
      ],
      regle:
        "« Chiffre des » = un seul chiffre, à sa place. « Nombre de » = tout ce qui est devant, une fois les rangs plus petits cachés.",
    },
    {
      titre: "Décomposer, c’est comprendre",
      texte: [
        "Un même nombre s’écrit de plusieurs façons, et savoir passer d’une à l’autre, c’est comprendre le nombre plutôt que le réciter.",
        "2 367, c’est 2 000 + 300 + 60 + 7. C’est aussi (2 × 1 000) + (3 × 100) + (6 × 10) + 7. C’est encore 23 centaines et 67 unités.",
      ],
    },
  ],
  exemples: [
    {
      enonce: "Dans 8 402, quel est le chiffre des dizaines, et quel est le nombre de dizaines ?",
      etapes: [
        "Les dizaines sont l’avant-dernier rang. Le chiffre des dizaines est donc 0.",
        "Pour le nombre de dizaines, je cache le dernier chiffre : il reste 840.",
        "Vérification : 840 × 10 = 8 400, et il reste 2.",
      ],
      resultat: "chiffre des dizaines : 0 · nombre de dizaines : 840",
    },
  ],
  exercices: [
    e("m-p1-nb-1", "Dans 8 315, quel chiffre est à la place des dizaines ?", "1", "Les dizaines sont le deuxième rang en partant de la droite. Dans 8 315 : 5 unités, puis 1 dizaine. Le chiffre des dizaines est 1."),
    e("m-p1-nb-2", "Quel chiffre tient la place des centaines dans 7 052 ?", "0", "En partant de la droite : 2 unités, 5 dizaines, puis 0 centaine. Le zéro est un chiffre comme un autre : il tient la place des centaines, qui sont vides."),
    e("m-p1-nb-3", "Dans le nombre 6 138, quel est le nombre de centaines ?", "61", "Je cache les deux derniers chiffres (38) : il reste 61. Vérification : 61 × 100 = 6 100, et il reste 38."),
    e("m-p1-nb-4", "On range des crayons par paquets de dix. Avec 46 paquets, combien a-t-on de crayons ?", "460", "Chaque paquet de dix est une dizaine. 46 dizaines valent 46 × 10 = 460 crayons."),
    e("m-p1-nb-5", "Écris avec des chiffres le nombre six mille deux cent cinquante-neuf.", "6259", "Six mille donne le 6 des milliers ; deux cent cinquante-neuf donne 259 pour les trois derniers rangs. On écrit 6 259."),
    e("m-p1-nb-6", "Comment s’écrit « cinq mille trois » avec des chiffres ?", "5003", "Cinq mille, puis trois unités. Il n’y a ni centaines ni dizaines : un 0 tient la place de chacun de ces deux rangs vides. On écrit 5 003."),
    e("m-p1-nb-7", "Écris le nombre égal à 6 000 + 900 + 50 + 1.", "6951", "Chaque terme remplit un rang : 6 milliers, 9 centaines, 5 dizaines, 1 unité. On écrit 6 951."),
    e("m-p1-nb-8", "Écris le nombre formé de 5 milliers et 8 dizaines.", "5080", "5 milliers font 5 000 et 8 dizaines font 80. Il n’y a ni centaines ni unités : un 0 tient chacune de ces deux places. On écrit 5 080."),
  ],
  reprise: [
    e("m-p1-nb-r2", "Quel chiffre de 8 019 se trouve au rang des centaines ?", "0", "En partant de la droite : 9 unités, 1 dizaine, puis 0 centaine. Le chiffre des centaines est 0 : il garde la place de ce rang, qui est vide."),
    e("m-p1-nb-r1", "Le nombre 2 794 a quatre chiffres. Lequel est celui des dizaines ?", "9", "En partant de la droite, le premier rang est celui des unités (4), le deuxième celui des dizaines (9). Le chiffre des dizaines de 2 794 est donc 9."),
    e("m-p1-nb-r3", "Combien de centaines entières trouve-t-on dans 7 529 ?", "75", "Je cache les deux derniers chiffres (29) : il reste 75. Vérification : 75 × 100 = 7 500, et il reste 29."),
    e("m-p1-nb-r4", "Un magasin reçoit 83 pochettes de 10 images. Combien d’images a-t-il reçues ?", "830", "Chaque pochette de dix images est une dizaine. 83 dizaines valent 83 × 10 = 830 images."),
    e("m-p1-nb-r5", "Voici un nombre écrit en lettres : huit mille cinq cent vingt-quatre. Écris-le avec des chiffres.", "8524", "Huit mille donne le 8 des milliers ; cinq cent vingt-quatre donne 524 pour les trois derniers rangs. On écrit 8 524."),
    e("m-p1-nb-r6", "Dans un livre, on lit que le sommet d’une montagne est à trois mille huit mètres. Écris ce nombre avec des chiffres.", "3008", "Trois mille, puis huit unités. Il n’y a ni centaines ni dizaines : un 0 garde la place de chacun de ces deux rangs vides. On écrit 3 008."),
    e("m-p1-nb-r7", "3 000 + 600 + 90 + 2 : quel nombre obtient-on ?", "3692", "Chaque terme remplit un rang : 3 milliers, 6 centaines, 9 dizaines, 2 unités. On écrit 3 692."),
    e("m-p1-nb-r8", "Une papeterie a 6 cartons de 1 000 trombones et 9 boîtes de 10 trombones. Combien a-t-elle de trombones en tout ?", "6090", "6 cartons de 1 000, ce sont 6 milliers, soit 6 000 ; 9 boîtes de 10, ce sont 9 dizaines, soit 90. Il n’y a ni centaines ni unités : un 0 tient chacune de ces deux places. On écrit 6 090."),
  ],
};

const comparerNombres: Lecon = {
  code: "m-p1-comparer",
  matiere: "maths",
  periode: 1,
  titre: "Comparer, ranger et encadrer",
  reference:
    "Comparer, encadrer, intercaler des nombres entiers en utilisant les symboles =, < et > ; ordonner des nombres dans l’ordre croissant ou décroissant ; savoir placer des nombres et repérer des points sur une demi-droite graduée.",
  minutes: 25,
  cours: [
    {
      texte: [
        "Comparer deux nombres ne se fait pas à l’œil. Il y a une méthode, elle marche toujours, et elle se fait dans cet ordre.",
      ],
    },
    {
      titre: "La méthode",
      texte: [
        "D’abord, compte les chiffres. Celui qui en a le plus est le plus grand : 1 000 est plus grand que 999, même si les trois 9 impressionnent.",
        "S’ils ont le même nombre de chiffres, compare rang par rang **en partant de la gauche**. Au premier rang où ils diffèrent, c’est réglé.",
        "Exemple : 4 188 et 4 811. Même nombre de chiffres. Premier rang : 4 dans les deux. Deuxième rang : 1 contre 8. Donc 4 188 est le plus petit.",
      ],
      regle:
        "Le signe s’ouvre du côté du plus grand : 4 188 < 4 811. Lis-le à voix haute — « 4 188 est plus petit que 4 811 » — et la phrase te dit dans quel sens va le signe.",
    },
    {
      titre: "Ranger",
      texte: [
        "Dans l’ordre **croissant**, on va du plus petit au plus grand. Ça monte, comme une croissance.",
        "Dans l’ordre **décroissant**, c’est l’inverse.",
      ],
    },
    {
      titre: "Encadrer, et la demi-droite graduée",
      texte: [
        "Encadrer un nombre, c’est le coincer entre deux nombres ronds. On peut le faire de plusieurs façons, selon la précision demandée.",
        "3 260 : à la centaine, c’est 3 200 < 3 260 < 3 300. Au millier, c’est 3 000 < 3 260 < 4 000. Les deux sont justes ; le premier est plus serré, donc plus précis.",
        "Sur une demi-droite graduée, les nombres se rangent dans l’ordre de gauche à droite. Chaque graduation vaut toujours la même chose — c’est la première chose à vérifier avant de placer quoi que ce soit.",
      ],
      regle:
        "Avant de placer un nombre sur une droite graduée, cherche combien vaut un intervalle. Tout le reste en découle.",
    },
  ],
  exemples: [
    {
      enonce: "Range dans l’ordre croissant : 999, 4 188, 4 811, 4 180.",
      etapes: [
        "999 n’a que trois chiffres : c’est le plus petit.",
        "Les trois autres ont quatre chiffres et commencent par 4.",
        "Deuxième rang : 1, 8, 1. On isole 4 811 comme le plus grand.",
        "Entre 4 188 et 4 180 : troisième rang égal (8), quatrième 8 contre 0. Donc 4 180 avant 4 188.",
      ],
      resultat: "999 < 4 180 < 4 188 < 4 811",
    },
  ],
  exercices: [
    q("m-p1-cmp-1", "Lequel de ces deux nombres est le plus grand ?", ["7 082", "7 208"], "7 208", "Même nombre de chiffres, même chiffre des milliers (7). Au rang des centaines : 0 contre 2. Donc 7 208 est le plus grand."),
    q("m-p1-cmp-2", "Parmi ces trois nombres, lequel est le plus petit ?", ["9 191", "9 119", "9 911"], "9 119", "Tous ont quatre chiffres et commencent par 9. Au rang des centaines : 1, 1 et 9 — on écarte 9 911. Au rang des dizaines : 9 contre 1. Le plus petit est 9 119."),
    e("m-p1-cmp-3", "Un compteur affiche 7 999. Il avance de 1. Quel nombre affiche-t-il maintenant ?", "8000", "On ajoute 1. Les trois 9 deviennent des 0 et la retenue monte jusqu’au rang des milliers : 7 999 + 1 = 8 000."),
    e("m-p1-cmp-4", "Tu comptes à rebours : 7 002, 7 001, 7 000… Quel nombre dis-tu ensuite ?", "6999", "Compter à rebours, c’est retirer 1 à chaque fois. 7 000 − 1 = 6 999 : les milliers passent de 7 à 6, et les trois autres rangs se remplissent de 9."),
    e("m-p1-cmp-5", "Quel est le plus grand nombre de quatre chiffres ?", "9999", "Pour faire le plus grand, on met le plus grand chiffre possible à chaque rang : quatre 9."),
    q("m-p1-cmp-6", "Encadre 5 730 à la centaine.", ["5 700 < 5 730 < 5 800", "5 000 < 5 730 < 6 000", "5 720 < 5 730 < 5 740"], "5 700 < 5 730 < 5 800", "À la centaine, les bornes vont de cent en cent : la centaine juste en dessous de 5 730 est 5 700, celle juste au-dessus est 5 800. Les deux autres encadrements sont justes aussi : l’un est fait au millier, l’autre à la dizaine."),
    e("m-p1-cmp-7", "Sur une droite graduée de 10 en 10 à partir de 2 300, quel nombre est sur la quatrième graduation après 2 300 ?", "2340", "Chaque graduation vaut 10. Quatre graduations font 40. Donc 2 300 + 40 = 2 340."),
    q("m-p1-cmp-8", "Lequel de ces nombres est compris entre 4 560 et 4 570 ?", ["4 565", "4 556", "4 605"], "4 565", "4 565 est plus grand que 4 560 et plus petit que 4 570 : il se place entre les deux. 4 556 est plus petit que 4 560, et 4 605 est plus grand que 4 570. N’importe quel nombre de 4 561 à 4 569 aurait convenu."),
  ],
  reprise: [
    q("m-p1-cmp-r1", "Quel nombre est plus grand que l’autre ?", ["2 405", "2 045"], "2 405", "Les deux nombres ont quatre chiffres et le même chiffre des milliers (2). Au rang des centaines : 4 contre 0. Donc 2 405 est le plus grand."),
    q("m-p1-cmp-r2", "Choisis le plus petit de ces trois nombres.", ["6 363", "6 633", "6 336"], "6 336", "Les trois ont quatre chiffres et commencent par 6. Au rang des centaines : 3, 6 et 3 — on écarte 6 633. Au rang des dizaines, entre 6 363 et 6 336 : 6 contre 3. Le plus petit est 6 336."),
    e("m-p1-cmp-r3", "À la piscine, chaque personne qui entre reçoit un ticket numéroté. Le dernier ticket donné porte le numéro 8 999. Quel numéro porte le ticket suivant ?", "9000", "Le ticket suivant porte le numéro d’après : on ajoute 1. Les trois 9 deviennent des 0 et la retenue monte jusqu’au rang des milliers : 8 999 + 1 = 9 000."),
    e("m-p1-cmp-r4", "Une suite de nombres diminue de 1 à chaque fois : 5 002, 5 001, 5 000… Quel nombre vient ensuite ?", "4999", "Diminuer de 1, c’est retirer 1. 5 000 − 1 = 4 999 : les milliers passent de 5 à 4, et les trois autres rangs se remplissent de 9."),
    e("m-p1-cmp-r5", "Avec les chiffres 3, 8, 1 et 5, utilisés une fois chacun, quel est le plus grand nombre que tu peux écrire ?", "8531", "Pour faire le plus grand nombre, on met le plus grand chiffre au rang qui vaut le plus : 8 aux milliers, puis 5 aux centaines, 3 aux dizaines et 1 aux unités. On obtient 8 531."),
    q("m-p1-cmp-r6", "Voici trois encadrements de 4 372. Lequel est fait à la centaine ?", ["4 000 < 4 372 < 5 000", "4 370 < 4 372 < 4 380", "4 300 < 4 372 < 4 400"], "4 300 < 4 372 < 4 400", "À la centaine, les bornes vont de cent en cent : la centaine juste en dessous de 4 372 est 4 300, la suivante est 4 400. Les deux autres encadrements sont justes eux aussi : le premier est fait au millier, le deuxième à la dizaine."),
    e("m-p1-cmp-r7", "Les graduations d’une demi-droite vont de 10 en 10. Sous l’une d’elles, on lit 6 120. Quel nombre faut-il écrire sous la cinquième graduation qui suit ?", "6170", "Chaque graduation vaut 10. Cinq graduations font 5 × 10 = 50. Donc 6 120 + 50 = 6 170."),
    q("m-p1-cmp-r8", "Quel nombre se place entre 7 230 et 7 240 ?", ["7 324", "7 203", "7 236"], "7 236", "7 236 est plus grand que 7 230 et plus petit que 7 240 : il se place entre les deux. 7 203 est plus petit que 7 230, et 7 324 est plus grand que 7 240. Tout nombre de 7 231 à 7 239 aurait convenu."),
  ],
};

const fractionsPartage: Lecon = {
  code: "m-p1-fractions",
  matiere: "maths",
  periode: 1,
  titre: "Les fractions : partager en parts égales",
  reference:
    "Savoir interpréter, représenter, écrire et lire des fractions ; les fractions sont utilisées pour représenter une partie d’un tout dans le cadre d’un partage de ce tout en parts égales.",
  minutes: 30,
  cours: [
    {
      texte: [
        "Une fraction n’est pas un nombre bizarre : c’est une façon d’écrire un partage. Tu en fais déjà tous les jours sans le savoir.",
        "Quand tu dis « une demi-heure », tu utilises une fraction. Quand tu partages une tablette de chocolat en quatre et que tu en prends une, tu prends un quart.",
      ],
    },
    {
      titre: "Les deux nombres, et ce qu’ils disent",
      texte: [
        "Une fraction s’écrit avec deux nombres séparés par une barre. Dans un cahier, on les écrit l’un au-dessus de l’autre : un nombre en haut, la barre couchée, un nombre en bas. À l’écran, on l’écrit souvent sur une seule ligne, comme 3/4 : le nombre du haut vient alors avant la barre, et le nombre du bas après.",
        "Celui du **bas** dit en combien de parts égales on a coupé. On l’appelle le dénominateur — il « dénomme » la part : en deux, ça fait des demis ; en trois, des tiers ; en quatre, des quarts ; en cinq, des cinquièmes ; au-delà, on dit des sixièmes, des septièmes, des dixièmes.",
        "Celui du **haut** dit combien de ces parts on prend. On l’appelle le numérateur : c’est lui qui les compte.",
        "Donc 3/4 se lit « trois quarts » : on a coupé en quatre, on en prend trois.",
      ],
      regle:
        "Le nombre du bas coupe, le nombre du haut compte. Et les parts doivent être **égales** — sinon ce n’est pas un partage, c’est du bricolage.",
    },
    {
      titre: "Plus petit ou plus grand que 1 ?",
      texte: [
        "Si on prend exactement toutes les parts, on a le tout : 4/4 = 1. C’est pareil pour 3/3, 5/5, 100/100.",
        "Si on en prend moins que toutes, la fraction est plus petite que 1 : 3/4 < 1.",
        "Et on peut en prendre plus ! 5/4, c’est cinq quarts : les quatre quarts du premier gâteau, plus un quart du deuxième. Donc 5/4 est plus grand que 1.",
      ],
      regle:
        "Numérateur plus petit que le dénominateur → plus petit que 1. Égal → exactement 1. Plus grand → plus grand que 1.",
    },
    {
      titre: "Comparer deux fractions",
      texte: [
        "Quand le nombre du **bas** est le même, on compare les nombres du haut. 3/7 est plus petit que 5/7, parce que trois parts c’est moins que cinq parts de la même taille.",
        "Quand le nombre du **haut** est le même, attention, c’est l’inverse de ce qu’on croirait : 1/3 est plus grand que 1/5. Plus on coupe en morceaux, plus les morceaux sont petits.",
      ],
      regle:
        "Même dénominateur : le plus grand numérateur gagne. Même numérateur : le plus **petit** dénominateur gagne.",
    },
  ],
  exemples: [
    {
      enonce: "On coupe une tarte en six parts égales et on en mange deux. Écris la fraction mangée, et dis si elle est plus petite ou plus grande que 1.",
      etapes: [
        "On a coupé en six : le nombre du bas est 6, ce sont des sixièmes.",
        "On en prend deux : le nombre du haut est 2.",
        "Donc 2/6, qui se lit « deux sixièmes ».",
        "2 est plus petit que 6, donc la fraction est plus petite que 1 — il reste de la tarte.",
      ],
      resultat: "2/6, plus petit que 1",
    },
  ],
  exercices: [
    q("m-p1-fr-1", "On coupe un gâteau en huit parts égales et on en mange trois. Quelle fraction a-t-on mangée ?", ["trois huitièmes", "huit tiers", "trois quarts"], "trois huitièmes", "Le nombre du bas dit en combien on a coupé : huit, donc des huitièmes. Le nombre du haut dit combien on en prend : trois."),
    e("m-p1-fr-2", "Combien font sept septièmes ?", "1", "On a coupé en sept et on prend les sept parts : on a tout. Sept septièmes font exactement 1."),
    q("m-p1-fr-3", "Sept sixièmes, c’est…", ["plus petit que 1", "égal à 1", "plus grand que 1"], "plus grand que 1", "Six sixièmes font déjà le tout, c’est-à-dire 1. Sept sixièmes, c’est un sixième de plus."),
    q("m-p1-fr-4", "Quelle fraction est la plus grande ?", ["deux cinquièmes", "quatre cinquièmes"], "quatre cinquièmes", "Les parts ont la même taille — des cinquièmes. Quatre parts, c’est plus que deux parts."),
    q("m-p1-fr-5", "Quelle fraction est la plus grande ?", ["un huitième", "un sixième"], "un sixième", "Plus on coupe en morceaux, plus les morceaux sont petits. Couper en six donne des parts plus grosses que couper en huit."),
    q("m-p1-fr-6", "Comment lit-on la fraction 9/10 ?", ["neuf dixièmes", "dix neuvièmes", "neuf dizaines"], "neuf dixièmes", "Le nombre du bas donne le nom de la part : dix, donc des dixièmes. Le nombre du haut les compte : neuf. Les dizaines, elles, sont des paquets de dix, pas des parts de l’unité : ce n’est pas la même chose."),
    e("m-p1-fr-7", "Une barre est partagée en quatre parts égales. On en colorie trois. Combien de parts ne sont pas coloriées ? Réponds par un nombre.", "1", "Il y a quatre parts en tout et trois sont coloriées : 4 − 3 = 1. On a colorié trois quarts, il reste un quart."),
    q("m-p1-fr-8", "Trois enfants se partagent une plaquette de chocolat en parts de la même taille. Chacun reçoit…", ["un tiers", "un quart", "trois parts"], "un tiers", "Partager en trois parts égales, c’est faire des tiers. Chacun en prend une : un tiers."),
  ],
  reprise: [
    q("m-p1-fr-r1", "Un jardin est partagé en sept parcelles égales. On plante des fleurs dans quatre d’entre elles. Quelle fraction du jardin est plantée de fleurs ?", ["sept quarts", "quatre septièmes", "quatre cinquièmes"], "quatre septièmes", "Le nombre du bas dit en combien de parts égales on a partagé : sept, donc des septièmes. Le nombre du haut dit combien de parts on prend : quatre."),
    e("m-p1-fr-r2", "Combien de neuvièmes faut-il prendre pour avoir exactement 1 ?", "9", "Avoir 1, c’est avoir le tout : on prend toutes les parts. On a coupé en neuf, il faut donc les neuf parts. Neuf neuvièmes font exactement 1."),
    q("m-p1-fr-r3", "La fraction 7/8 est…", ["plus petite que 1", "égale à 1", "plus grande que 1"], "plus petite que 1", "Huit huitièmes font le tout, c’est-à-dire 1. Avec sept huitièmes, il manque une part pour faire le tout : la fraction est plus petite que 1."),
    q("m-p1-fr-r4", "Laquelle de ces deux fractions est la plus petite ?", ["six neuvièmes", "quatre neuvièmes"], "quatre neuvièmes", "Les deux fractions comptent des neuvièmes : les parts ont la même taille. Quatre parts, c’est moins que six parts."),
    q("m-p1-fr-r5", "On coupe deux rubans de même longueur : l’un en quatre morceaux égaux, l’autre en six. Quel morceau est le plus long ?", ["un sixième du ruban", "un quart du ruban"], "un quart du ruban", "Plus on coupe en morceaux, plus les morceaux sont petits. Couper en quatre donne des morceaux plus longs que couper en six : un quart est plus grand qu’un sixième."),
    q("m-p1-fr-r6", "Comment dit-on 3/10 à voix haute ?", ["dix tiers", "trois dizaines", "trois dixièmes"], "trois dixièmes", "Le nombre du bas donne le nom de la part : dix, donc des dixièmes. Le nombre du haut les compte : trois. Une dizaine est un paquet de dix unités, alors qu’un dixième est une des dix parts égales d’une unité."),
    e("m-p1-fr-r7", "Un drapeau est partagé en cinq bandes égales. Deux bandes sont bleues, les autres sont blanches. Combien de bandes sont blanches ? Réponds par un nombre.", "3", "Il y a cinq bandes en tout et deux sont bleues : 5 − 2 = 3. Le bleu couvre deux cinquièmes du drapeau, le blanc trois cinquièmes."),
    q("m-p1-fr-r8", "Cinq amis se partagent une pizza en parts de la même taille, une part chacun. Quelle fraction de la pizza reçoit chaque ami ?", ["un cinquième", "cinq parts", "un sixième"], "un cinquième", "Partager en cinq parts égales, c’est faire des cinquièmes. Chaque ami en reçoit une : un cinquième de la pizza."),
  ],
};

const fractionQuantite: Lecon = {
  code: "m-p1-fraction-quantite",
  matiere: "maths",
  periode: 1,
  titre: "La fraction d’une quantité",
  reference:
    "Déterminer une fraction d’une quantité ou d’une grandeur : d’abord avec des fractions unitaires (la moitié, le tiers, le quart, le dixième de…), puis avec des fractions comme les deux tiers ou les trois quarts ; la fraction prend le statut d’opérateur.",
  minutes: 25,
  cours: [
    {
      texte: [
        "Jusqu’ici, la fraction disait une part d’un objet. Maintenant elle va servir à agir sur une quantité : « prends le tiers de 24 billes ».",
        "C’est la même idée, mais elle devient un outil de calcul.",
      ],
    },
    {
      titre: "Une part : on divise",
      texte: [
        "« Le tiers de 24 » veut dire : partage 24 en trois parts égales, et prends-en une. 24 ÷ 3 = 8.",
        "« Le quart de 100 mètres » : 100 ÷ 4 = 25 mètres.",
        "Le nombre du bas de la fraction est donc le nombre par lequel on divise. Rien d’autre.",
      ],
      regle: "Prendre le tiers, c’est diviser par 3. Le quart, diviser par 4. Le dixième, diviser par 10.",
    },
    {
      titre: "Plusieurs parts : on divise, puis on multiplie",
      texte: [
        "« Les deux tiers de 24 » : même partage — 24 ÷ 3 = 8 — mais on en prend deux. 8 × 2 = 16.",
        "« Les trois quarts de 20 » : 20 ÷ 4 = 5, puis 5 × 3 = 15.",
        "Toujours dans cet ordre : diviser d’abord, multiplier ensuite. Les nombres restent petits, et c’est plus sûr.",
      ],
      regle: "On divise par le nombre du bas, puis on multiplie par celui du haut.",
    },
    {
      titre: "Une vérification qui ne coûte rien",
      texte: [
        "Si la fraction est plus petite que 1, le résultat doit être plus petit que la quantité de départ. Les trois quarts de 20 font 15 : c’est bien moins que 20, donc c’est plausible.",
        "Avec une fraction plus petite que 1, un résultat plus grand que la quantité de départ ne peut pas être le bon. On reprend alors le calcul en vérifiant les deux nombres : on divise par le nombre du bas, et on multiplie par celui du haut.",
      ],
    },
  ],
  exemples: [
    {
      enonce: "Combien de minutes durent les trois quarts d’une heure ?",
      etapes: [
        "Une heure fait 60 minutes. C’est la quantité de départ.",
        "Le nombre du bas est 4 : 60 ÷ 4 = 15 minutes pour un quart.",
        "Le nombre du haut est 3 : 15 × 3 = 45 minutes.",
        "Vérification : 45 est bien plus petit que 60.",
      ],
      resultat: "45 minutes",
    },
  ],
  exercices: [
    e("m-p1-fq-1", "Combien font la moitié de 36 ?", "18", "La moitié, c’est un demi : on divise par 2. 36 ÷ 2 = 18."),
    e("m-p1-fq-2", "Combien font le quart de 48 ?", "12", "Le quart, c’est une part sur quatre : 48 ÷ 4 = 12."),
    e("m-p1-fq-3", "Combien font le tiers de 33 cartes ?", "11", "On partage 33 en trois parts égales : 33 ÷ 3 = 11 cartes. On peut couper 33 en 30 et 3 : le tiers de 30 est 10, celui de 3 est 1, et 10 + 1 = 11."),
    e("m-p1-fq-4", "Combien font les deux tiers de 30 ?", "20", "D’abord diviser : 30 ÷ 3 = 10. Puis multiplier : 10 × 2 = 20."),
    e("m-p1-fq-5", "Combien font les trois cinquièmes de 25 ?", "15", "25 ÷ 5 = 5, puis 5 × 3 = 15. Vérification : 15 est plus petit que 25, c’est cohérent."),
    e("m-p1-fq-6", "Combien font le dixième de 120 ?", "12", "Le dixième, c’est diviser par 10 : 120 ÷ 10 = 12."),
    e("m-p1-fq-7", "Le tiers d’une heure, c’est combien de minutes ?", "20", "Une heure fait 60 minutes, et un tiers veut dire divisé par trois : 60 ÷ 3 = 20 minutes."),
    e("m-p1-fq-8", "Dans une classe de 28 élèves, les trois quarts sont présents. Combien d’élèves sont présents ?", "21", "28 ÷ 4 = 7, puis 7 × 3 = 21. Il en manque donc sept, ce qui fait bien un quart."),
  ],
  reprise: [
    e("m-p1-fq-r1", "La moitié de 58, c’est combien ?", "29", "Prendre la moitié, c’est diviser par 2 : 58 ÷ 2 = 29. On peut aussi couper 58 en 50 et 8 : la moitié de 50 est 25, celle de 8 est 4, et 25 + 4 = 29."),
    e("m-p1-fq-r2", "Un fermier a 44 poules. Un quart de ses poules sont rousses. Combien de poules sont rousses ?", "11", "Un quart, c’est une part sur quatre : on divise par 4. 44 ÷ 4 = 11 poules rousses."),
    e("m-p1-fq-r3", "Nina utilise le tiers de ses 27 perles pour un bracelet. Combien de perles utilise-t-elle ?", "9", "On partage 27 en trois parts égales : 27 ÷ 3 = 9 perles."),
    e("m-p1-fq-r4", "Trouve les deux tiers de 21.", "14", "D’abord diviser : 21 ÷ 3 = 7. Puis multiplier : 7 × 2 = 14."),
    e("m-p1-fq-r5", "Combien valent les quatre cinquièmes de 35 ?", "28", "35 ÷ 5 = 7, puis 7 × 4 = 28. Vérification : 28 est plus petit que 35, c’est cohérent."),
    e("m-p1-fq-r6", "Une corde mesure 470 cm. On en coupe le dixième. Combien de centimètres coupe-t-on ?", "47", "Le dixième, c’est diviser par 10 : 470 ÷ 10 = 47 centimètres."),
    e("m-p1-fq-r7", "Une année compte 12 mois. Un quart d’année, cela fait combien de mois ?", "3", "Une année fait 12 mois, et un quart veut dire divisé par quatre : 12 ÷ 4 = 3 mois."),
    e("m-p1-fq-r8", "Un bus transporte 36 passagers. Les trois quarts descendent au premier arrêt. Combien de passagers descendent ?", "27", "36 ÷ 4 = 9, puis 9 × 3 = 27. Il en reste donc neuf dans le bus, ce qui fait bien un quart."),
  ],
};

const additionSoustraction: Lecon = {
  code: "m-p1-addition-soustraction",
  matiere: "maths",
  periode: 1,
  titre: "Additionner et soustraire en colonnes",
  reference:
    "Estimer le résultat d’une opération ; poser en colonnes et effectuer des additions et des soustractions ; les élèves sont encouragés à privilégier le calcul mental à chaque fois que celui-ci est envisageable.",
  minutes: 25,
  cours: [
    {
      texte: [
        "Poser une addition ou une soustraction, on l’a déjà fait. Cette leçon installe deux choses pour de bon : l’alignement, et l’estimation.",
      ],
    },
    {
      titre: "Aligner les rangs, pas les bords",
      texte: [
        "Les nombres s’alignent à **droite**, pas à gauche : les unités sous les unités, les dizaines sous les dizaines.",
        "Sur du papier à petits carreaux, mets un chiffre par carreau : les colonnes s’alignent d’elles-mêmes.",
      ],
      regle: "Un chiffre par carreau, alignés par la droite. La colonne qui commande, c’est celle des unités.",
    },
    {
      titre: "La retenue dans la soustraction",
      texte: [
        "Quand le chiffre du haut est plus petit que celui du bas, on ne peut pas soustraire directement. Dans 403 − 157, aux unités, 3 − 7 est impossible.",
        "On ajoute alors 10 au chiffre du haut : 13 − 7 = 6. Pour compenser, on ajoute 1 au chiffre du bas de la colonne suivante — c’est la retenue, une petite marque écrite sous les dizaines.",
        "On continue colonne par colonne, de droite à gauche, sans oublier une seule retenue. À la fin, on vérifie par l’addition : 246 + 157 doit redonner 403.",
      ],
      regle:
        "Pas assez en haut ? Ajoute 10 en haut, et 1 en bas dans la colonne suivante. La retenue s’écrit tout de suite, elle ne se garde pas en tête.",
    },
    {
      titre: "Estimer avant, vérifier après",
      texte: [
        "Un calcul se vérifie, et ça prend dix secondes.",
        "468 + 327 : c’est presque 470 + 330, donc environ 800. Si tu trouves 695 ou 7 950, tu sais qu’il y a un problème sans même relire.",
        "Pour une soustraction, la vérification est encore plus simple : si 1 000 − 736 = 264, alors 264 + 736 doit redonner 1 000.",
      ],
      regle:
        "Avant de poser, estime. Après avoir trouvé, compare à ton estimation. C’est ça, savoir calculer — pas seulement poser.",
    },
    {
      titre: "Et parfois, ne pas poser du tout",
      texte: [
        "300 + 400 : inutile de poser, c’est 3 + 4 centaines, donc 700.",
        "2 500 + 2 500 : c’est le double de 2 500, donc 5 000.",
        "1 000 − 1 : il n’y a rien à poser, c’est 999.",
        "Poser une opération qu’on peut faire de tête, c’est perdre du temps et se donner des occasions de se tromper.",
      ],
    },
  ],
  exemples: [
    {
      enonce: "Calcule 4 807 + 2 396.",
      etapes: [
        "Estimation : environ 4 800 + 2 400, donc à peu près 7 200.",
        "Unités : 7 + 6 = 13. J’écris 3, je retiens 1.",
        "Dizaines : 0 + 9 + 1 = 10. J’écris 0, je retiens 1.",
        "Centaines : 8 + 3 + 1 = 12. J’écris 2, je retiens 1.",
        "Milliers : 4 + 2 + 1 = 7.",
        "Je trouve 7 203, mon estimation disait 7 200. C’est cohérent.",
      ],
      resultat: "7 203",
    },
    {
      enonce: "Calcule 403 − 157.",
      etapes: [
        "Estimation : environ 400 − 160, donc à peu près 240.",
        "Unités : 3 − 7, impossible. J’ajoute 10 en haut : 13 − 7 = 6. J’écris 6, et je note une retenue de 1 sous les dizaines du bas.",
        "Dizaines : en bas, 5 + 1 = 6. En haut, 0 − 6, impossible. J’ajoute 10 : 10 − 6 = 4. J’écris 4, et je note une retenue de 1 sous les centaines du bas.",
        "Centaines : en bas, 1 + 1 = 2. En haut, 4 − 2 = 2. J’écris 2.",
        "Je trouve 246, mon estimation disait 240. Vérification : 246 + 157 = 403.",
      ],
      resultat: "246",
    },
  ],
  exercices: [
    e("m-p1-as-1", "Calcule 659 + 287.", "946", "Estimation : environ 660 + 290, donc à peu près 950. Unités 9 + 7 = 16, j’écris 6 et je retiens 1 ; dizaines 5 + 8 + 1 = 14, j’écris 4 et je retiens 1 ; centaines 6 + 2 + 1 = 9. Résultat 946."),
    e("m-p1-as-2", "Calcule 3 618 + 2 587.", "6205", "Estimation : environ 3 600 + 2 600, donc 6 200. En posant, avec trois retenues : 6 205."),
    e("m-p1-as-3", "Calcule 2 385 + 617.", "3002", "Estimation : environ 2 400 + 600, donc 3 000. En posant : unités 5 + 7 = 12, je retiens 1 ; dizaines 8 + 1 + 1 = 10, je retiens 1 ; centaines 3 + 6 + 1 = 10, je retiens 1 ; milliers 2 + 1 = 3. Résultat 3 002."),
    e("m-p1-as-4", "Calcule 504 − 267.", "237", "Estimation : environ 500 − 270, donc 230. En posant, avec deux retenues : 237. Vérification : 237 + 267 = 504."),
    e("m-p1-as-5", "Calcule 1 000 − 382.", "618", "Estimation : environ 1 000 − 400, donc un peu plus de 600. En posant : 618. Vérification par l’addition : 618 + 382 = 1 000."),
    e("m-p1-as-6", "Calcule 6 300 − 2 450.", "3850", "Estimation : environ 6 300 − 2 500, soit 3 800. En posant : 3 850. Vérification : 3 850 + 2 450 = 6 300."),
    e("m-p1-as-7", "Calcule de tête 1 500 + 1 500.", "3000", "C’est le double de 1 500. Ou bien 15 centaines + 15 centaines = 30 centaines, donc 1 500 + 1 500 = 3 000. Inutile de poser."),
    e("m-p1-as-8", "Combien manque-t-il à 4 700 pour aller à 9 000 ?", "4300", "On cherche l’écart : 9 000 − 4 700. De 4 700 à 5 000 il y a 300, puis de 5 000 à 9 000 il y a 4 000. Total : 4 300."),
  ],
  reprise: [
    e("m-p1-as-r1", "Effectue 578 + 346.", "924", "Estimation : environ 580 + 350, donc à peu près 930. Unités 8 + 6 = 14, j’écris 4 et je retiens 1 ; dizaines 7 + 4 + 1 = 12, j’écris 2 et je retiens 1 ; centaines 5 + 3 + 1 = 9. Résultat 924."),
    e("m-p1-as-r2", "Pose et effectue 2 748 + 3 575.", "6323", "Estimation : environ 2 700 + 3 600, donc 6 300. Unités 8 + 5 = 13, j’écris 3 et je retiens 1 ; dizaines 4 + 7 + 1 = 12, j’écris 2 et je retiens 1 ; centaines 7 + 5 + 1 = 13, j’écris 3 et je retiens 1 ; milliers 2 + 3 + 1 = 6. Résultat 6 323."),
    e("m-p1-as-r3", "Effectue 5 467 + 538.", "6005", "Estimation : environ 5 500 + 500, donc 6 000. En posant : unités 7 + 8 = 15, je retiens 1 ; dizaines 6 + 3 + 1 = 10, je retiens 1 ; centaines 4 + 5 + 1 = 10, je retiens 1 ; milliers 5 + 1 = 6. Résultat 6 005."),
    e("m-p1-as-r4", "Pose et effectue 805 − 469.", "336", "Estimation : environ 800 − 470, donc 330. Unités : 5 − 9, impossible ; 15 − 9 = 6, et je note une retenue sous les dizaines du bas. Dizaines : en bas, 6 + 1 = 7 ; en haut, 0 − 7, impossible ; 10 − 7 = 3, et je note une retenue sous les centaines du bas. Centaines : en bas, 4 + 1 = 5 ; 8 − 5 = 3. Résultat 336. Vérification : 336 + 469 = 805."),
    e("m-p1-as-r5", "Effectue 1 000 − 527.", "473", "Estimation : environ 1 000 − 500, donc un peu moins de 500. Unités : 0 − 7, impossible ; 10 − 7 = 3, et je note une retenue sous les dizaines du bas. Dizaines : en bas, 2 + 1 = 3 ; 10 − 3 = 7, et je note une retenue sous les centaines du bas. Centaines : en bas, 5 + 1 = 6 ; 10 − 6 = 4, et je note une retenue sous les milliers du bas. Milliers : en bas, 0 + 1 = 1 ; 1 − 1 = 0. Résultat 473. Vérification : 473 + 527 = 1 000."),
    e("m-p1-as-r6", "Effectue 8 200 − 3 650.", "4550", "Estimation : environ 8 200 − 3 700, soit 4 500. Unités : 0 − 0 = 0. Dizaines : 0 − 5, impossible ; 10 − 5 = 5, et je note une retenue sous les centaines du bas. Centaines : en bas, 6 + 1 = 7 ; en haut, 2 − 7, impossible ; 12 − 7 = 5, et je note une retenue sous les milliers du bas. Milliers : en bas, 3 + 1 = 4 ; 8 − 4 = 4. Résultat 4 550. Vérification : 4 550 + 3 650 = 8 200."),
    e("m-p1-as-r7", "Sans poser l’opération, trouve 3 500 + 3 500.", "7000", "3 500, ce sont 35 centaines. 35 + 35 = 70 centaines, c’est-à-dire 7 000. C’est aussi le double de 3 500. Inutile de poser."),
    e("m-p1-as-r8", "Que faut-il ajouter à 5 700 pour obtenir 8 000 ?", "2300", "On cherche l’écart : 8 000 − 5 700. De 5 700 à 6 000 il y a 300, puis de 6 000 à 8 000 il y a 2 000. Total : 2 300."),
  ],
};

const problemesMethode: Lecon = {
  code: "m-p1-problemes",
  matiere: "maths",
  periode: 1,
  titre: "Les problèmes : comprendre avant de calculer",
  reference:
    "La résolution de problèmes arithmétiques fait l’objet d’un enseignement explicite s’appuyant sur quatre phases : comprendre, modéliser, calculer, répondre ; résoudre des problèmes additifs des types « parties-tout » et « comparaison ».",
  minutes: 30,
  cours: [
    {
      texte: [
        "Un problème n’est pas un calcul déguisé : c’est une histoire dont il faut sortir le calcul. Et le plus dur n’est presque jamais de calculer.",
        "Il y a une méthode, en quatre temps, et elle est la même pour tous les problèmes de l’année.",
      ],
    },
    {
      titre: "1. Comprendre",
      texte: [
        "Raconte l’histoire du problème avec tes mots, sans les chiffres. Si tu n’y arrives pas encore, relis l’énoncé une fois de plus : c’est là que tout se joue, bien avant le calcul.",
        "Puis écris sur ton brouillon ce qu’on te demande. Tant que tu ne sais pas ce que tu cherches, tu ne peux rien chercher.",
      ],
      regle:
        "Attention aux mots qui trompent. « Il a 12 billes de **plus** que Tom » peut demander une soustraction. Le mot ne décide pas de l’opération : l’histoire décide.",
    },
    {
      titre: "2. Modéliser",
      texte: [
        "Note les nombres **avec ce qu’ils comptent** : « 12 paquets », « 6 gâteaux par paquet ». Un nombre tout seul ne veut rien dire.",
        "Puis demande-toi : est-ce que je cherche le tout, ou une partie ? Est-ce que je compare deux quantités ?",
        "Un schéma en barres aide beaucoup : une grande barre pour le tout, découpée en parties. On s’en sert à tout âge, dès qu’une histoire contient plusieurs nombres.",
      ],
    },
    {
      titre: "3. Calculer",
      texte: [
        "De tête si possible, posé sinon. C’est l’étape la plus courte des quatre, et c’est normal.",
      ],
    },
    {
      titre: "4. Répondre — et se relire",
      texte: [
        "Fais une phrase de réponse avec l’unité, à voix haute ou sur ton brouillon : « Il reste 35 pages à lire. » À l’écran, tu n’écris que le nombre : 35.",
        "Puis pose-toi la question qui compte : est-ce possible, dans l’histoire ? Si le reste est plus grand que le total, si un enfant mesure 4 mètres, si une voiture coûte 30 €, quelque chose a glissé.",
      ],
      regle:
        "Un résultat impossible dans l’histoire n’est pas la réponse, même si le calcul est juste. Se relire n’est pas de la méfiance, c’est la dernière étape du travail.",
    },
  ],
  exemples: [
    {
      enonce:
        "Une ludothèque a 150 jeux. 38 sont des puzzles et 54 sont des jeux de cartes. Les autres sont des jeux de plateau. Combien y a-t-il de jeux de plateau ?",
      etapes: [
        "Comprendre : il y a trois sortes de jeux, on connaît le total et deux sortes, on cherche la troisième.",
        "Modéliser : le tout fait 150, découpé en trois parties. Je connais deux parties, je cherche la troisième.",
        "Calculer : les deux parties connues font 38 + 54 = 92. Puis 150 − 92 = 58.",
        "Répondre : il y a 58 jeux de plateau. C’est possible, puisque c’est moins que le total.",
      ],
      resultat: "58 jeux de plateau",
    },
  ],
  exercices: [
    e("m-p1-pb-1", "Dans une école de 348 élèves, 156 sont des filles. Combien y a-t-il de garçons ?", "192", "Le tout fait 348, découpé en deux parties. Une seule étape : 348 − 156 = 192. Vérification : 192 + 156 = 348."),
    e("m-p1-pb-2", "Un album a 140 places pour des autocollants. Inès en a déjà collé 58. Combien de places sont encore vides ?", "82", "On connaît le tout (140) et une partie (58) : on cherche l’autre partie. 140 − 58 = 82 places. Vérification : 82 + 58 = 140."),
    e("m-p1-pb-3", "Un musée reçoit 416 visiteurs le lundi, 285 le mardi et 139 le mercredi. Combien de visiteurs en tout sur les trois jours ?", "840", "On cherche le tout, on connaît les trois parties : 416 + 285 = 701, puis 701 + 139 = 840 visiteurs."),
    e("m-p1-pb-4", "Léa a 12 billes de plus que Tom. Tom en a 47. Combien Léa en a-t-elle ?", "59", "« De plus » désigne ici l’écart, et c’est Léa qui en a davantage : 47 + 12 = 59."),
    e("m-p1-pb-5", "Léa a 12 billes de plus que Tom. Léa en a 59. Combien Tom en a-t-il ?", "47", "Même histoire, question inverse. Le mot « plus » est là, mais il faut soustraire : 59 − 12 = 47. C’est l’histoire qui décide, pas le mot."),
    e("m-p1-pb-6", "Une bibliothèque a 1 250 livres. Elle en achète 380 et en retire 145 trop usés. Combien en a-t-elle ?", "1485", "Deux étapes : 1 250 + 380 = 1 630, puis 1 630 − 145 = 1 485."),
    e("m-p1-pb-7", "Un parc d’attractions accueille 5 879 visiteurs le matin. Le soir, 3 425 visiteurs sont encore dans le parc. Combien de visiteurs sont partis dans la journée ?", "2454", "On cherche l’écart entre le nombre du matin et celui du soir : 5 879 − 3 425 = 2 454 visiteurs. Vérification : 2 454 + 3 425 = 5 879."),
    q("m-p1-pb-8", "Dans un problème, tu trouves qu’il reste 250 gâteaux alors qu’il y en avait 120 au départ. Que faut-il faire ?", ["écrire la réponse quand même", "chercher l’erreur : ce reste est impossible", "doubler le résultat"], "chercher l’erreur : ce reste est impossible", "Le reste ne peut pas être plus grand que le total. Un résultat impossible dans l’histoire n’est pas la réponse, même si le calcul semblait juste : c’est l’étape « se relire » qui l’attrape."),
  ],
  reprise: [
    e("m-p1-pb-r1", "Un fleuriste a 563 fleurs, des roses et des tulipes. Parmi elles, 247 sont des roses. Combien y a-t-il de tulipes ?", "316", "Le tout fait 563, découpé en deux parties. Une seule étape : 563 − 247 = 316. Vérification : 316 + 247 = 563."),
    e("m-p1-pb-r2", "Un parking a 130 places, et 64 voitures y sont garées. Combien de places sont encore libres ?", "66", "On connaît le tout (130) et une partie (64) : on cherche l’autre partie. 130 − 64 = 66 places. Vérification : 66 + 64 = 130."),
    e("m-p1-pb-r3", "Un cinéma vend 327 billets le vendredi, 258 le samedi et 145 le dimanche. Combien de billets a-t-il vendus sur les trois jours ?", "730", "On cherche le tout, on connaît les trois parties : 327 + 258 = 585, puis 585 + 145 = 730 billets."),
    e("m-p1-pb-r4", "Sacha a lu 23 pages de plus que Jules. Jules a lu 52 pages. Combien de pages Sacha a-t-il lues ?", "75", "« De plus » désigne ici l’écart, et c’est Sacha qui a lu davantage : 52 + 23 = 75 pages."),
    e("m-p1-pb-r5", "Un vélo coûte 35 € de plus qu’une trottinette. Le vélo coûte 98 €. Combien coûte la trottinette ?", "63", "Le mot « plus » est dans l’énoncé, mais c’est la trottinette qui coûte le moins cher : on retire l’écart au prix du vélo. 98 − 35 = 63 €. C’est l’histoire qui décide, pas le mot."),
    e("m-p1-pb-r6", "Un magasin a 1 160 cahiers en réserve. Il en reçoit 275, puis en vend 390. Combien de cahiers a-t-il maintenant ?", "1045", "Deux étapes : 1 160 + 275 = 1 435, puis 1 435 − 390 = 1 045 cahiers."),
    e("m-p1-pb-r7", "Le matin, la réserve d’eau d’un camping contient 7 968 litres. Le soir, il en reste 4 527 litres. Combien de litres ont été utilisés dans la journée ?", "3441", "On cherche l’écart entre la quantité du matin et celle du soir : 7 968 − 4 527 = 3 441 litres. Vérification : 3 441 + 4 527 = 7 968."),
    q("m-p1-pb-r8", "Dans un problème, 90 élèves partent en sortie, et on cherche combien d’entre eux ont apporté un pique-nique. Lequel de ces résultats est impossible dans l’histoire ?", ["72", "90", "140"], "140", "Les élèves qui ont un pique-nique font partie des 90 élèves de la sortie : ils ne peuvent pas être plus de 90. 72 est possible, 90 aussi, si tous en ont apporté un. 140 est plus grand que 90 : si le calcul donne 140, on relit l’énoncé et on reprend le calcul."),
  ],
};

/* ================================================================== */
/* PÉRIODE 2 — novembre, décembre                                      */
/* ================================================================== */

const fractionsSuperieures: Lecon = {
  code: "m-p2-fractions-sup",
  matiere: "maths",
  periode: 2,
  titre: "Les fractions plus grandes que 1",
  reference:
    "Savoir écrire une fraction supérieure à 1 comme la somme d’un entier et d’une fraction inférieure à 1, et réciproquement ; savoir encadrer une fraction par deux nombres entiers consécutifs ; savoir placer une fraction sur une demi-droite graduée.",
  minutes: 30,
  cours: [
    {
      texte: [
        "Une fraction peut être plus grande que 1, et ça se comprend très bien avec des gâteaux : si chaque gâteau est coupé en quatre et que tu prends cinq parts, tu prends cinq quarts. Il t’a fallu deux gâteaux.",
      ],
    },
    {
      titre: "Écrire une fraction comme un entier plus un reste",
      texte: [
        "5/4, c’est 4/4 + 1/4, c’est-à-dire 1 + 1/4. On dit « un et un quart ».",
        "11/3 : combien de fois 3 tient-il dans 11 ? Trois fois, avec 2 qui restent. Donc 11/3 = 3 + 2/3.",
        "C’est une division : le numérateur divisé par le dénominateur. Le quotient donne l’entier, le reste donne le numérateur de ce qui reste.",
      ],
      regle:
        "Pour couper une fraction en entier + reste : divise le nombre du haut par celui du bas. Quotient = l’entier, reste = le nouveau numérateur.",
    },
    {
      titre: "Et dans l’autre sens",
      texte: [
        "2 + 3/5 : les 2 entiers valent 10/5, plus 3/5, donc 13/5.",
        "On multiplie l’entier par le dénominateur, puis on ajoute le numérateur.",
      ],
      regle: "2 + 3/5 → (2 × 5) + 3 = 13, donc 13/5.",
    },
    {
      titre: "Encadrer et placer",
      texte: [
        "Encadrer 11/3 entre deux entiers qui se suivent : puisque 11/3 = 3 + 2/3, c’est entre 3 et 4.",
        "Sur une demi-droite graduée, 11/3 se place donc après le 3, aux deux tiers du chemin vers le 4.",
      ],
    },
  ],
  exemples: [
    {
      enonce: "Écris 17/5 comme la somme d’un entier et d’une fraction plus petite que 1, puis encadre-la entre deux entiers.",
      etapes: [
        "Je divise 17 par 5 : 5 × 3 = 15, il reste 2.",
        "Donc 17/5 = 3 + 2/5.",
        "L’entier est 3, et il reste quelque chose : la fraction est entre 3 et 4.",
      ],
      resultat: "17/5 = 3 + 2/5, et 3 < 17/5 < 4",
    },
  ],
  exercices: [
    e("m-p2-fs-1", "Écris 5/4 sous la forme d’un entier plus une fraction. Réponds comme ceci : 2 + 1/3", "1 + 1/4", "4/4 font 1, et il reste 1/4. Donc 5/4 = 1 + 1/4."),
    e("m-p2-fs-2", "Combien font 8/4 ?", "2", "4/4 font 1, et encore 4/4 font 1. Donc 8/4 = 2, un nombre entier."),
    e("m-p2-fs-3", "Dans 11/3, quelle est la partie entière ?", "3", "Combien de fois 3 tient dans 11 ? Trois fois, car 3 × 3 = 9, et il reste 2. La partie entière est 3."),
    e("m-p2-fs-4", "Écris 2 + 3/5 sous la forme d’une seule fraction. Réponds comme ceci : 7/3", "13/5", "Les 2 entiers valent 2 × 5 = 10 cinquièmes, plus 3 cinquièmes : 13/5."),
    q("m-p2-fs-5", "Entre quels deux entiers se trouve 17/5 ?", ["entre 3 et 4", "entre 2 et 3", "entre 5 et 6"], "entre 3 et 4", "17 ÷ 5 donne 3 et il reste 2, donc 17/5 = 3 + 2/5 : c’est entre 3 et 4."),
    q("m-p2-fs-6", "Quelle fraction est égale à 1 ?", ["6/6", "6/1", "1/6"], "6/6", "Prendre les six sixièmes, c’est prendre le tout. 6/1 vaut 6, et 1/6 est bien plus petit que 1."),
    e("m-p2-fs-7", "Quel nombre entier est égal à 15/5 ?", "3", "5 tient trois fois dans 15, sans reste, car 5 × 3 = 15. Donc 15/5 = 3, un nombre entier."),
    q("m-p2-fs-8", "Sur une droite graduée, où se place 7/2 ?", ["entre 3 et 4", "entre 2 et 3", "après 7"], "entre 3 et 4", "7 ÷ 2 donne 3 et il reste 1, donc 7/2 = 3 + 1/2. C’est exactement au milieu de 3 et 4."),
  ],
};

const fractionsCalcul: Lecon = {
  code: "m-p2-fractions-calcul",
  matiere: "maths",
  periode: 2,
  titre: "Additionner et soustraire des fractions",
  reference:
    "Additionner et soustraire des fractions ; comparer des fractions ; connaître quelques relations entre des fractions usuelles.",
  minutes: 25,
  cours: [
    {
      texte: [
        "Additionner des fractions, c’est plus simple que ça n’en a l’air — à une condition, et il faut la comprendre avant de calculer.",
      ],
    },
    {
      titre: "Même dénominateur : on additionne les parts",
      texte: [
        "2/7 + 3/7 : deux septièmes plus trois septièmes, ça fait cinq septièmes. Les parts ont la même taille, donc on les compte.",
        "Le nombre du bas ne change pas : il dit la taille des parts, et la taille ne change pas parce qu’on en prend plus.",
        "Même chose pour la soustraction : 5/8 − 2/8 = 3/8.",
      ],
      regle:
        "Même dénominateur : on additionne (ou on soustrait) les numérateurs, et **le dénominateur ne bouge pas**. 2/7 + 3/7 = 5/7, et surtout pas 5/14.",
    },
    {
      titre: "Pourquoi le dénominateur ne bouge pas",
      texte: [
        "Dis-le à voix haute avec des objets : deux crayons plus trois crayons font cinq crayons, pas cinq stylos.",
        "Deux septièmes plus trois septièmes font cinq septièmes. Le mot « septièmes » reste — c’est le nom de l’objet qu’on compte.",
      ],
    },
    {
      titre: "Quelques égalités à connaître par cœur",
      texte: [
        "Un demi, c’est deux quarts, et aussi cinq dixièmes : 1/2 = 2/4 = 5/10.",
        "Un quart, c’est deux huitièmes. Un tiers, c’est deux sixièmes.",
        "Ces égalités servent tout le temps, et elles s’expliquent en dessinant : si tu coupes chaque part en deux, tu as deux fois plus de parts deux fois plus petites, donc la même chose.",
      ],
      regle: "1/2 = 2/4 = 3/6 = 4/8 = 5/10. Le même morceau, écrit autrement.",
    },
  ],
  exemples: [
    {
      enonce: "Calcule 3/5 + 4/5, puis écris le résultat sous la forme d’un entier plus une fraction.",
      etapes: [
        "Les dénominateurs sont les mêmes : j’additionne les numérateurs. 3 + 4 = 7.",
        "Le dénominateur reste 5, donc 7/5.",
        "7/5 est plus grand que 1 : 5/5 font 1, et il reste 2/5.",
      ],
      resultat: "7/5, soit 1 + 2/5",
    },
  ],
  exercices: [
    e("m-p2-fc-1", "Calcule 2/7 + 3/7. Réponds comme ceci : 4/9", "5/7", "Mêmes dénominateurs : on additionne les numérateurs, 2 + 3 = 5. Le dénominateur ne bouge pas."),
    e("m-p2-fc-2", "Calcule 5/8 − 2/8. Réponds comme ceci : 4/9", "3/8", "5 − 2 = 3 huitièmes. Le dénominateur reste 8."),
    e("m-p2-fc-3", "Calcule 3/5 + 4/5. Réponds par une seule fraction, comme ceci : 4/9", "7/5", "3 + 4 = 7 cinquièmes. Le résultat est plus grand que 1, et c’est normal : 7/5 = 1 + 2/5."),
    e("m-p2-fc-4", "Combien font 1/4 + 3/4 ? Réponds par un nombre entier.", "1", "1 + 3 = 4 quarts, et quatre quarts font exactement 1."),
    q("m-p2-fc-5", "Quelle fraction est égale à un demi ?", ["2/4", "1/4", "2/3"], "2/4", "Si on coupe chaque moitié en deux, on obtient quatre parts et il en faut deux pour faire la moitié : 1/2 = 2/4."),
    q("m-p2-fc-6", "Combien font 1/2 + 1/2 ?", ["1", "2/4", "1/4"], "1", "Deux moitiés font un tout. En écriture : 1/2 + 1/2 = 2/2 = 1."),
    e("m-p2-fc-7", "Calcule 9/10 − 4/10. Réponds en dixièmes, comme ceci : 2/10", "5/10", "9 − 4 = 5 dixièmes. Et 5/10, c’est aussi un demi."),
    q("m-p2-fc-8", "Pourquoi 2/7 + 3/7 ne fait-il pas 5/14 ?", ["parce que la taille des parts ne change pas", "parce qu’il faut additionner les dénominateurs", "parce que 14 est trop grand"], "parce que la taille des parts ne change pas", "Le dénominateur dit la taille de la part. Prendre plus de parts ne change pas leur taille : on compte des septièmes, on obtient des septièmes."),
  ],
};

const fractionsDecimales: Lecon = {
  code: "m-p2-fractions-decimales",
  matiere: "maths",
  periode: 2,
  titre: "Les dixièmes et les centièmes",
  reference:
    "Interpréter, représenter, écrire et lire des fractions décimales ; connaître et utiliser les relations entre unités simples, dixièmes et centièmes ; comparer, encadrer, intercaler des fractions décimales.",
  minutes: 30,
  cours: [
    {
      texte: [
        "Parmi toutes les fractions, certaines sont spéciales : celles dont le nombre du bas est 10, ou 100. On les appelle les **fractions décimales**, et elles vont nous ouvrir la porte des nombres à virgule.",
      ],
    },
    {
      titre: "Couper l’unité en dix, puis en cent",
      texte: [
        "Prends une bande de 1 mètre et coupe-la en dix parts égales : chaque part est un dixième de mètre, soit 1 décimètre, soit 10 centimètres.",
        "Coupe maintenant chaque dixième en dix : tu obtiens cent parts. Chacune est un centième de mètre, soit 1 centimètre.",
        "C’est le même geste que pour la numération des entiers, mais dans l’autre sens : au lieu de grouper par dix, on découpe par dix.",
      ],
      regle:
        "Une unité = 10 dixièmes = 100 centièmes. Et donc : 1 dixième = 10 centièmes.",
    },
    {
      titre: "Lire et écrire",
      texte: [
        "3/10 se lit « trois dixièmes ». 47/100 se lit « quarante-sept centièmes ».",
        "Comme les autres fractions, elles peuvent dépasser 1 : 23/10, c’est 20/10 + 3/10, donc 2 + 3/10.",
        "Et on peut mélanger les rangs : 2 + 3/10 + 5/100 se lit « deux unités, trois dixièmes et cinq centièmes ».",
      ],
    },
    {
      titre: "Passer des dixièmes aux centièmes",
      texte: [
        "Puisqu’un dixième vaut dix centièmes, 3/10 = 30/100. On multiplie les deux nombres par dix.",
        "C’est ce qui permet de comparer : entre 3/10 et 27/100, on transforme d’abord — 3/10 = 30/100 — et là on voit que 30/100 est plus grand.",
      ],
      regle:
        "Pour comparer des dixièmes et des centièmes, ramène tout aux centièmes. Comparer 3/10 à 27/100 directement, c’est comparer des mètres à des centimètres.",
    },
  ],
  exemples: [
    {
      enonce: "Écris 2 + 3/10 + 5/100 sous la forme d’une seule fraction en centièmes.",
      etapes: [
        "2 unités valent 200 centièmes.",
        "3 dixièmes valent 30 centièmes.",
        "Plus les 5 centièmes.",
        "Total : 200 + 30 + 5 = 235 centièmes.",
      ],
      resultat: "235/100",
    },
  ],
  exercices: [
    e("m-p2-fd-1", "Combien y a-t-il de dixièmes dans une unité ?", "10", "On coupe l’unité en dix parts égales : il y a dix dixièmes dans une unité."),
    e("m-p2-fd-2", "Combien y a-t-il de centièmes dans une unité ?", "100", "Chaque dixième se recoupe en dix, donc 10 × 10 = 100 centièmes dans une unité."),
    e("m-p2-fd-3", "Combien y a-t-il de centièmes dans un dixième ?", "10", "Un dixième coupé en dix donne dix centièmes. C’est la relation à retenir."),
    e("m-p2-fd-4", "Écris 3/10 en centièmes. Réponds comme ceci : 45/100", "30/100", "Un dixième vaut dix centièmes, donc trois dixièmes valent trente centièmes."),
    q("m-p2-fd-5", "Quelle fraction est la plus grande ?", ["3/10", "27/100"], "3/10", "On ramène tout aux centièmes : 3/10 = 30/100. Et 30 centièmes, c’est plus que 27 centièmes."),
    e("m-p2-fd-6", "Écris 23/10 sous la forme d’un entier plus une fraction. Réponds comme ceci : 4 + 1/10", "2 + 3/10", "20/10 font 2 unités, et il reste 3/10."),
    e("m-p2-fd-7", "Un mètre est coupé en dix. Combien de centimètres mesure une part ?", "10", "Un dixième de mètre, c’est un décimètre, soit 10 centimètres."),
    e("m-p2-fd-8", "Combien font 7/10 + 5/10 ? Réponds en dixièmes, comme ceci : 3/10", "12/10", "Mêmes dénominateurs : 7 + 5 = 12 dixièmes. Et 12/10 = 1 + 2/10, donc un peu plus que 1."),
  ],
};

const multiplicationPosee: Lecon = {
  code: "m-p2-multiplication",
  matiere: "maths",
  periode: 2,
  titre: "Poser une multiplication",
  reference:
    "Poser et effectuer des multiplications de deux nombres entiers ; multiplier un nombre entier par 10, 100 ou 1 000 ; multiplier un nombre entier inférieur à 10 par un nombre entier de dizaines ou de centaines.",
  minutes: 30,
  cours: [
    {
      texte: [
        "Multiplier par 4, on l’a déjà fait. Multiplier par 24, c’est le même travail fait deux fois, puis additionné. Il n’y a rien de plus.",
      ],
    },
    {
      titre: "Pourquoi ça marche",
      texte: [
        "24, c’est 20 + 4. Donc 27 × 24, c’est 27 × 20 plus 27 × 4.",
        "27 × 4 = 108. 27 × 20 = 540. On additionne : 108 + 540 = 648.",
        "Quand tu poses la multiplication, c’est exactement ce que tu fais : une ligne pour les unités, une ligne pour les dizaines, puis la somme.",
      ],
      regle:
        "La deuxième ligne est décalée d’un cran vers la gauche. Ce n’est pas une convention arbitraire : c’est parce qu’on multiplie par des dizaines, donc dix fois plus.",
    },
    {
      titre: "Les raccourcis, qui ne sont pas de la triche",
      texte: [
        "Par 10 : chaque chiffre monte d’un rang, et un zéro vient tenir la place des unités — 36 × 10 = 360. Par 100 : deux zéros. Par 1 000 : trois.",
        "Par 20 : multiplier par 2 puis par 10. Par 200 : par 2 puis par 100.",
        "Par 5 : c’est la moitié de par 10. Par 50 : la moitié de par 100.",
        "Par 4 : deux fois le double. Par 8 : trois fois le double.",
        "Quelqu’un qui calcule bien utilise ces chemins avant de poser.",
      ],
      regle: "Avant de poser, demande-toi s’il y a un raccourci. Souvent, oui.",
    },
    {
      titre: "Le zéro au milieu",
      texte: [
        "208 × 6 : le 0 des dizaines ne s’oublie pas. 0 × 6 = 0, plus la retenue éventuelle.",
        "C’est une erreur classique, et l’estimation l’attrape : 208 × 6, c’est environ 200 × 6 = 1 200. Si tu trouves 168, c’est que le zéro est passé à la trappe.",
      ],
    },
  ],
  exemples: [
    {
      enonce: "Calcule 47 × 26.",
      etapes: [
        "Estimation : environ 50 × 25, donc à peu près 1 250.",
        "Ligne des unités : 47 × 6 = 282.",
        "Ligne des dizaines : 47 × 2 = 94, décalé d’un cran, donc 940.",
        "Somme : 282 + 940 = 1 222.",
        "Mon estimation disait 1 250. C’est cohérent.",
      ],
      resultat: "1 222",
    },
  ],
  exercices: [
    e("m-p2-mu-1", "Calcule 34 × 24.", "816", "34 × 4 = 136, et 34 × 20 = 680. Somme : 816. Estimation : environ 34 × 25, soit 850."),
    e("m-p2-mu-2", "Calcule 38 × 24.", "912", "38 × 4 = 152, et 38 × 20 = 760. Somme : 912."),
    e("m-p2-mu-3", "Calcule 208 × 6.", "1248", "208 × 6 : 8 × 6 = 48, je retiens 4 ; 0 × 6 = 0, plus 4 = 4 ; 2 × 6 = 12. Résultat 1 248. Le zéro du milieu tient le rang des dizaines, et il se calcule comme les autres chiffres."),
    e("m-p2-mu-4", "Calcule 64 × 100.", "6400", "Multiplier par 100, c’est ajouter deux zéros : 6 400."),
    e("m-p2-mu-5", "Calcule 45 × 20.", "900", "Multiplier par 20, c’est multiplier par 2 puis par 10. 45 × 2 = 90, puis 90 × 10 = 900. Inutile de poser."),
    e("m-p2-mu-6", "Calcule 38 × 50.", "1900", "38 × 100 = 3 800, et 50 est la moitié de 100 : la moitié de 3 800 fait 1 900."),
    e("m-p2-mu-7", "Calcule 125 × 12.", "1500", "125 × 2 = 250 et 125 × 10 = 1 250 : somme 1 500. Autre chemin : 125 × 4 = 500, puis × 3 = 1 500."),
    e("m-p2-mu-8", "Une place de cinéma coûte 14 €. Combien coûtent 25 places ?", "350", "14 × 25. On peut poser, ou remarquer que 14 × 100 = 1 400 et que 25 est le quart de 100 : 1 400 ÷ 4 = 350."),
  ],
};

const multiples: Lecon = {
  code: "m-p2-multiples",
  matiere: "maths",
  periode: 2,
  titre: "Les multiples et les diviseurs",
  reference:
    "Savoir reconnaître les multiples de 2, de 5 et de 10 à partir de leur écriture chiffrée ; savoir déterminer si un nombre entier donné est un multiple d’un nombre entier inférieur ou égal à 10.",
  minutes: 25,
  cours: [
    {
      texte: [
        "Un multiple de 3, c’est un nombre qu’on obtient en multipliant 3 par un entier : 3, 6, 9, 12, 15… C’est la table de 3, qui continue indéfiniment.",
        "Dit autrement : 12 est un multiple de 3 parce que 12 ÷ 3 tombe juste, sans reste.",
      ],
      regle:
        "« 12 est un multiple de 3 » et « 3 est un diviseur de 12 » disent exactement la même chose, vue des deux côtés.",
    },
    {
      titre: "Trois reconnaissances immédiates",
      texte: [
        "Les multiples de **2** finissent par 0, 2, 4, 6 ou 8. Ce sont les nombres pairs. 3 748 est pair, parce qu’il finit par 8 — le reste du nombre n’a aucune importance.",
        "Les multiples de **5** finissent par 0 ou 5.",
        "Les multiples de **10** finissent par 0.",
        "Ces trois règles ne se devinent pas, elles s’expliquent : dans un nombre, tout ce qui est avant le dernier chiffre est déjà un paquet de dizaines, et une dizaine est déjà divisible par 2, par 5 et par 10. Seul le dernier chiffre décide.",
      ],
      regle:
        "Pour 2, 5 et 10, **seul le dernier chiffre compte**. 7 894 est pair, 7 895 est un multiple de 5, 7 890 est un multiple des trois.",
    },
    {
      titre: "Pour les autres, on divise",
      texte: [
        "Il n’y a pas de règle simple à connaître pour 3, 4, 6, 7, 8 ou 9 au CM1. On s’appuie sur les tables, ou on divise.",
        "48 est-il un multiple de 6 ? Je récite la table de 6 : 6, 12, 18, 24, 30, 36, 42, 48 — oui.",
        "50 est-il un multiple de 6 ? 6 × 8 = 48 et 6 × 9 = 54 : 50 est entre les deux, donc non.",
      ],
    },
  ],
  exemples: [
    {
      enonce: "Parmi 3 748, 7 895 et 4 320, lesquels sont des multiples de 2, de 5, de 10 ?",
      etapes: [
        "3 748 finit par 8 : multiple de 2. Pas de 5, pas de 10.",
        "7 895 finit par 5 : multiple de 5. Pas de 2 (impair), pas de 10.",
        "4 320 finit par 0 : multiple de 2, de 5 et de 10.",
      ],
      resultat: "3 748 → 2 · 7 895 → 5 · 4 320 → 2, 5 et 10",
    },
  ],
  exercices: [
    q("m-p2-ml-1", "Le nombre 3 748 est-il pair ou impair ?", ["pair", "impair"], "pair", "Il finit par 8, qui est pair. Seul le dernier chiffre compte pour décider."),
    q("m-p2-ml-2", "Le nombre 2 461 est-il un multiple de 5 ?", ["oui", "non"], "non", "Les multiples de 5 finissent par 0 ou 5. Celui-ci finit par 1."),
    q("m-p2-ml-3", "Le nombre 4 320 est-il un multiple de 10 ?", ["oui", "non"], "oui", "Les multiples de 10 finissent par 0. C’est le cas."),
    e("m-p2-ml-4", "Quel est le plus petit multiple de 7 plus grand que 50 ?", "56", "La table de 7 : 7 × 7 = 49, 7 × 8 = 56. Le premier au-dessus de 50 est donc 56."),
    q("m-p2-ml-5", "Est-ce que 63 est un multiple de 7 ?", ["oui", "non"], "oui", "Dans la table de 7 : 7 × 9 = 63. La division de 63 par 7 tombe juste. Autrement dit, 7 est un diviseur de 63."),
    q("m-p2-ml-6", "50 est-il un multiple de 6 ?", ["oui", "non"], "non", "6 × 8 = 48 et 6 × 9 = 54 : 50 est entre les deux, la division ne tombe pas juste."),
    e("m-p2-ml-7", "Écris les quatre premiers multiples de 9, en commençant par 9. Réponds comme ceci : 4, 8, 12, 16", "9, 18, 27, 36", "C’est la table de 9 : 9 × 1, 9 × 2, 9 × 3, 9 × 4 — de la même façon que 4, 8, 12, 16 est le début de la table de 4."),
    q("m-p2-ml-8", "Quel nombre est à la fois multiple de 2 et de 5 ?", ["70", "75", "72"], "70", "Multiple de 2 : dernier chiffre pair. Multiple de 5 : dernier chiffre 0 ou 5. Il faut donc finir par 0 — et c’est aussi la règle des multiples de 10."),
  ],
};

const longueurs: Lecon = {
  code: "m-p2-longueurs",
  matiere: "maths",
  periode: 2,
  titre: "Les longueurs, du millimètre au kilomètre",
  reference:
    "Connaître et utiliser les unités de longueur du millimètre au kilomètre et les symboles associés ; connaître les relations entre les unités de longueur ; choisir une unité adaptée ; estimer une longueur.",
  minutes: 25,
  cours: [
    {
      texte: [
        "Au cours moyen, on n’utilise plus de tableau de conversion. On s’appuie sur les relations qu’on connaît, et on raisonne — ce qui est à la fois plus sûr et plus rapide.",
      ],
    },
    {
      titre: "Les unités, et la seule chose à retenir",
      texte: [
        "Le millimètre (mm), le centimètre (cm), le décimètre (dm), le mètre (m), le kilomètre (km).",
        "1 cm = 10 mm. 1 dm = 10 cm. 1 m = 10 dm = 100 cm = 1 000 mm. 1 km = 1 000 m.",
        "Les préfixes le disent : « milli » veut dire millième, « centi » centième, « déci » dixième, « kilo » mille. Ce ne sont pas des mots au hasard.",
      ],
      regle:
        "1 m = 100 cm et 1 km = 1 000 m. Avec ces deux-là et un peu de raisonnement, on retrouve tout le reste.",
    },
    {
      titre: "Convertir en raisonnant",
      texte: [
        "« Combien font 3 m 50 cm en centimètres ? » — 3 mètres font 300 centimètres, plus 50, donc 350 cm.",
        "« Et 4 250 m en kilomètres et mètres ? » — 4 000 m font 4 km, il reste 250 m. Donc 4 km 250 m.",
        "« Et 2 km 300 m en mètres ? » — 2 km font 2 000 m, plus 300 m, donc 2 300 m.",
        "On ne déplace pas des chiffres dans un tableau : on dit ce qu’on fait, avec des mots.",
      ],
    },
    {
      titre: "Choisir l’unité, et estimer",
      texte: [
        "On mesure l’épaisseur d’une pièce en millimètres, un crayon en centimètres, une piscine en mètres, la distance entre deux villes en kilomètres.",
        "Quelques repères utiles à garder en tête : la largeur d’un petit doigt fait à peu près 1 cm, une grande enjambée à peu près 1 m, et on marche environ 1 km en un quart d’heure.",
        "Ces repères servent à vérifier : si un calcul donne une porte de 20 mètres de haut, il y a un problème.",
      ],
      regle: "Une mesure sans unité ne veut rien dire. « 350 », ce n’est pas une longueur.",
    },
  ],
  exemples: [
    {
      enonce: "Un couloir mesure 12 m 40 cm. Combien cela fait-il de centimètres ?",
      etapes: [
        "1 mètre fait 100 centimètres, donc 12 mètres font 12 × 100 = 1 200 centimètres.",
        "J’ajoute les 40 centimètres restants.",
      ],
      resultat: "1 240 cm",
    },
  ],
  exercices: [
    e("m-p2-lg-1", "Une ficelle mesure 100 cm. Quelle est sa longueur en mètres ?", "1", "1 m = 100 cm. Une ficelle de 100 cm mesure donc exactement 1 m. C’est la relation la plus utile de toutes."),
    e("m-p2-lg-2", "Combien y a-t-il de mètres dans un kilomètre ?", "1000", "« Kilo » veut dire mille : 1 km = 1 000 m."),
    e("m-p2-lg-3", "Combien font 3 m 50 cm en centimètres ?", "350", "3 mètres font 300 cm, plus 50 cm : 350 cm."),
    e("m-p2-lg-4", "Un décimètre, c’est combien de centimètres ?", "10", "1 dm = 10 cm. « Déci » veut dire dixième : le décimètre est le dixième du mètre, et 100 cm ÷ 10 = 10 cm."),
    q("m-p2-lg-5", "Combien font 4 250 m en kilomètres et mètres ?", ["4 km 250 m", "42 km 50 m", "4 km 25 m"], "4 km 250 m", "4 000 m font 4 km, et il reste 250 m : 4 km 250 m. Les deux autres écritures ne font pas le même nombre de mètres : 4 km 25 m font 4 025 m, et 42 km 50 m font 42 050 m."),
    q("m-p2-lg-6", "Quelle longueur peut être celle d’un bus ?", ["12 mm", "12 m", "12 km"], "12 m", "Un bus mesure une douzaine de mètres, à peu près la longueur de trois voitures à la file. 12 mm, c’est moins que la longueur d’une gomme ; 12 km, c’est une longue promenade à vélo."),
    q("m-p2-lg-7", "Quelle longueur est la plus grande ?", ["950 m", "1 km", "99 dm"], "1 km", "1 km vaut 1 000 m, donc plus que 950 m. Et 99 dm, c’est un peu moins de 10 m, puisque 10 m = 100 dm."),
    e("m-p2-lg-8", "Un stade fait 400 m de tour. Combien de tours pour faire 2 km ?", "5", "2 km font 2 000 m. Puis 2 000 ÷ 400 = 5 tours."),
  ],
};

/* ================================================================== */
/* PÉRIODE 3 — janvier, février                                        */
/* ================================================================== */

const grandsNombres: Lecon = {
  code: "m-p3-grands-nombres",
  matiere: "maths",
  periode: 3,
  titre: "Les grands nombres jusqu’à 999 999",
  reference:
    "Connaître la suite écrite et la suite orale des nombres jusqu’à 999 999 ; les connaissances et savoir-faire attendus en fin de CM1 concernent les nombres s’écrivant avec au plus six chiffres.",
  minutes: 30,
  cours: [
    {
      texte: [
        "Depuis septembre, on est resté à quatre chiffres. Deux nouveaux rangs arrivent maintenant : les dizaines de milliers et les centaines de milliers.",
        "Rien de nouveau dans le principe. C’est le même système, qui continue.",
      ],
    },
    {
      titre: "Par paquets de trois",
      texte: [
        "Pour ne pas se perdre, on groupe les chiffres par trois en partant de la droite. Chaque paquet s’appelle une classe.",
        "La classe des unités : unités, dizaines, centaines. La classe des mille : milliers, dizaines de milliers, centaines de milliers.",
        "Dans 428 348 : 428 est le paquet des mille, 348 celui des unités. On lit « quatre cent vingt-huit mille trois cent quarante-huit ».",
      ],
      regle:
        "On sépare les classes par une espace, jamais par un point : 428 348. Cette espace n’est pas une décoration, c’est ce qui permet de lire.",
    },
    {
      titre: "Les zéros ne sont pas facultatifs",
      texte: [
        "« Quatre cent vingt mille quarante-huit » : le paquet des mille vaut 420, celui des unités vaut 48 — donc 048. Cela donne 420 048.",
        "Un zéro oublié change tout : 42 048 n’est pas 420 048. Compte toujours tes chiffres par paquets de trois avant de t’arrêter.",
      ],
      regle:
        "Chaque paquet fait exactement trois chiffres, sauf le premier à gauche. Si un rang est vide, on y met un zéro.",
    },
    {
      titre: "Le nombre de milliers",
      texte: [
        "Dans 68 341, le nombre de milliers s’obtient en cachant les trois derniers chiffres : il reste 68.",
        "Vérification : 68 × 1 000 = 68 000, et il reste 341.",
        "C’est le même geste que pour les centaines, avec trois doigts au lieu de deux.",
      ],
    },
  ],
  exemples: [
    {
      enonce: "Écris en chiffres : trois cent quarante mille deux cent six.",
      etapes: [
        "« Trois cent quarante mille » donne le paquet des mille : 340.",
        "« Deux cent six » donne le paquet des unités : 206.",
        "On colle les deux paquets.",
      ],
      resultat: "340 206",
    },
  ],
  exercices: [
    e("m-p3-gn-1", "Écris avec des chiffres : neuf cent douze mille soixante.", "912060", "Paquet des mille : 912. Paquet des unités : 060 — le zéro des centaines ne s’oublie pas. Donc 912 060."),
    e("m-p3-gn-2", "Écris en chiffres : quatre cent vingt mille quarante-huit.", "420048", "Paquet des mille : 420. Paquet des unités : quarante-huit, soit 048. Donc 420 048 — les zéros tiennent les places."),
    e("m-p3-gn-3", "Dans le nombre 736 482, quel est le chiffre des dizaines de mille ?", "3", "Je découpe : 736 | 482. Dans le paquet des mille, le chiffre des dizaines est 3."),
    e("m-p3-gn-4", "Dans le nombre 68 341, quel est le nombre de milliers ?", "68", "Je cache les trois derniers chiffres (341) : il reste 68. Vérification : 68 × 1 000 = 68 000."),
    e("m-p3-gn-5", "Combien vaut 52 milliers ?", "52000", "Un millier vaut 1 000, donc 52 milliers valent 52 × 1 000 = 52 000."),
    e("m-p3-gn-6", "Quel nombre vient juste après 799 999 ?", "800000", "On ajoute 1 : les 9 deviennent des 0 en cascade et la retenue monte. Résultat 800 000."),
    e("m-p3-gn-7", "Quel est le plus grand nombre de six chiffres ?", "999999", "On met le plus grand chiffre possible à chaque rang : six 9."),
    q("m-p3-gn-8", "Lequel de ces nombres se lit « quatre mille cent vingt-huit » ?", ["4 128", "41 208", "410 028"], "4 128", "Quatre mille donne 4 dans les mille, cent vingt-huit donne le paquet des unités. Les autres se lisent quarante-et-un mille deux cent huit et quatre cent dix mille vingt-huit."),
  ],
};

const ecritureVirgule: Lecon = {
  code: "m-p3-virgule",
  matiere: "maths",
  periode: 3,
  titre: "L’écriture à virgule",
  reference:
    "Passer d’une écriture sous forme d’une fraction décimale ou d’une somme de fractions décimales à une écriture à virgule et réciproquement ; interpréter, représenter, écrire et lire des nombres décimaux.",
  minutes: 30,
  cours: [
    {
      texte: [
        "Tu connais déjà les dixièmes et les centièmes. La virgule ne va rien ajouter : c’est juste une façon plus courte de les écrire.",
      ],
    },
    {
      titre: "La virgule est un raccourci",
      texte: [
        "Écrire 35 + 7/10 + 8/100 prend de la place. On a donc inventé un codage : 35,78.",
        "À gauche de la virgule, les unités entières. À droite, d’abord les dixièmes, puis les centièmes.",
        "Dans 35,78 : le 7 est le chiffre des dixièmes, le 8 celui des centièmes. La virgule sert seulement à montrer où s’arrêtent les unités.",
      ],
      regle:
        "La virgule ne coupe pas le nombre en deux nombres. 35,78 est **un seul** nombre, un peu plus grand que 35.",
    },
    {
      titre: "Là où tu la vois déjà",
      texte: [
        "Les prix : 3,45 €, c’est 3 euros et 45 centimes. Un euro vaut 100 centimes, donc un centime est un centième d’euro — le mot le dit.",
        "Les tailles : 1,32 m, c’est 1 mètre et 32 centimètres, et un centimètre est un centième de mètre.",
        "Dans les deux cas, ce qui est écrit après la virgule ne dépasse jamais 99 : au centième suivant, on passe à l’unité d’après.",
      ],
    },
    {
      titre: "L’erreur à ne pas faire",
      texte: [
        "3,7 et 3,70 sont le **même** nombre : 7 dixièmes, c’est 70 centièmes. Ajouter un zéro tout à droite ne change rien.",
        "Mais 3,7 et 3,07 sont très différents : dans le premier, 7 dixièmes ; dans le second, 0 dixième et 7 centièmes. Le zéro entre la virgule et le 7 change tout.",
        "Et 3,7 ne se lit pas comme deux nombres séparés : c’est trois unités et sept dixièmes.",
      ],
      regle:
        "Un zéro **à la fin** de la partie décimale ne change rien. Un zéro **juste après la virgule** change tout.",
    },
    {
      titre: "Partie entière et arrondi",
      texte: [
        "La partie entière de 35,78, c’est 35 : ce qui est à gauche de la virgule.",
        "L’arrondi à l’entier, c’est l’entier le plus proche : 35,78 est plus près de 36 que de 35, donc son arrondi est 36.",
        "Pour décider, on regarde les dixièmes : s’il y a 5 dixièmes ou plus, on monte ; sinon on reste.",
      ],
    },
  ],
  exemples: [
    {
      enonce: "Écris 4 + 3/10 + 6/100 avec une virgule, puis donne sa partie entière et son arrondi.",
      etapes: [
        "4 unités : à gauche de la virgule.",
        "3 dixièmes : premier chiffre après la virgule.",
        "6 centièmes : deuxième chiffre après la virgule.",
        "Donc 4,36. Partie entière : 4. Il y a 3 dixièmes, moins que 5, donc l’arrondi reste 4.",
      ],
      resultat: "4,36 · partie entière 4 · arrondi 4",
    },
  ],
  exercices: [
    e("m-p3-vg-1", "Écris 35 + 7/10 + 8/100 avec une virgule.", "35,78", "35 unités, 7 dixièmes, 8 centièmes : 35,78."),
    e("m-p3-vg-2", "Dans 35,78, quel est le chiffre des dixièmes ?", "7", "Le premier chiffre après la virgule est celui des dixièmes."),
    e("m-p3-vg-3", "Écris 7/10 avec une virgule.", "0,7", "Il n’y a pas d’unité entière : on écrit 0 devant la virgule, puis 7 dixièmes."),
    q("m-p3-vg-4", "Quels nombres sont égaux ?", ["3,7 et 3,70", "3,7 et 3,07", "3,7 et 37"], "3,7 et 3,70", "7 dixièmes valent 70 centièmes : un zéro à la fin ne change rien. En revanche 3,07 n’a aucun dixième."),
    e("m-p3-vg-5", "Quelle est la partie entière de 12,94 ?", "12", "La partie entière est ce qui se trouve à gauche de la virgule."),
    e("m-p3-vg-6", "Quel est l’arrondi à l’entier de 12,94 ?", "13", "Il y a 9 dixièmes, donc plus de 5 : 12,94 est plus proche de 13 que de 12."),
    q("m-p3-vg-7", "Comment s’écrit 4 + 3/10 avec une virgule ?", ["4,3", "4,03", "43"], "4,3", "4 unités et 3 dixièmes : le 3 vient juste après la virgule, à la place des dixièmes. Dans 4,03, le 3 serait aux centièmes ; et 43 n’a plus de virgule du tout."),
    q("m-p3-vg-8", "Comment s’écrit 250/100 avec une virgule ?", ["2,5", "25", "0,25"], "2,5", "250 centièmes, c’est 200 centièmes (soit 2 unités) plus 50 centièmes (soit 5 dixièmes) : 2,50, qu’on écrit aussi 2,5. 0,25 ne vaudrait que 25 centièmes."),
  ],
};

const comparerDecimaux: Lecon = {
  code: "m-p3-comparer-decimaux",
  matiere: "maths",
  periode: 3,
  titre: "Comparer et ranger les nombres décimaux",
  reference:
    "Comparer, encadrer, intercaler, ordonner des nombres décimaux donnés par leur écriture à virgule en utilisant les symboles =, < et > ; placer un nombre décimal sur une demi-droite graduée.",
  minutes: 25,
  cours: [
    {
      texte: [
        "Pour comparer des nombres à virgule, il y a une confusion que presque tout le monde fait au début. Autant la connaître tout de suite.",
      ],
    },
    {
      titre: "La confusion la plus fréquente",
      texte: [
        "Lequel est le plus grand : 3,7 ou 3,15 ?",
        "La réponse est 3,7. Beaucoup répondent 3,15 parce que 15 est plus grand que 7 — mais on ne compare pas 15 à 7, on compare des dixièmes à des centièmes.",
        "3,7 c’est 7 dixièmes, soit 70 centièmes. 3,15 c’est 15 centièmes. Et 70 centièmes, c’est bien plus que 15.",
      ],
      regle:
        "La partie après la virgule **n’est pas un nombre entier**. Il y a des rangs : les dixièmes d’abord, les centièmes ensuite.",
    },
    {
      titre: "La méthode sûre",
      texte: [
        "D’abord, compare les parties entières. Le plus grand entier gagne, et c’est fini : 5,2 est plus grand que 4,99.",
        "Si les parties entières sont égales, compare les dixièmes. Puis, si besoin, les centièmes.",
        "Astuce : complète avec des zéros pour que tout le monde ait le même nombre de chiffres après la virgule. 3,7 devient 3,70, et on compare 70 à 15 en toute sécurité.",
      ],
      regle:
        "Même nombre de chiffres après la virgule, et la comparaison devient sûre. Ajouter des zéros à la fin ne change pas les nombres.",
    },
    {
      titre: "Intercaler",
      texte: [
        "Entre 3,7 et 3,8, y a-t-il un nombre ? Oui, et même beaucoup : 3,75 par exemple.",
        "C’est une différence importante avec les entiers : entre 3 et 4, il n’y a aucun entier ; entre 3,7 et 3,8, il y a des décimaux.",
      ],
    },
  ],
  exemples: [
    {
      enonce: "Range dans l’ordre croissant : 3,7 · 3,15 · 3,07 · 4,1",
      etapes: [
        "Je complète à deux chiffres : 3,70 · 3,15 · 3,07 · 4,10.",
        "4,10 a la plus grande partie entière : c’est le plus grand.",
        "Les trois autres ont 3 comme partie entière. Je compare 70, 15 et 07.",
        "Donc 3,07 < 3,15 < 3,70 < 4,10.",
      ],
      resultat: "3,07 < 3,15 < 3,7 < 4,1",
    },
  ],
  exercices: [
    q("m-p3-cd-1", "Quel est le plus grand ?", ["3,7", "3,15"], "3,7", "3,7 vaut 70 centièmes, 3,15 en vaut 15. Complète à deux chiffres — 3,70 contre 3,15 — et la réponse se voit tout de suite."),
    q("m-p3-cd-2", "Quel est le plus grand ?", ["5,2", "4,99"], "5,2", "On compare d’abord les parties entières : 5 est plus grand que 4, et c’est fini."),
    q("m-p3-cd-3", "Quel est le plus petit ?", ["2,5", "2,05", "2,50"], "2,05", "2,5 et 2,50 sont le même nombre. 2,05 n’a aucun dixième, il est donc plus petit."),
    q("m-p3-cd-4", "Quel nombre est compris entre 3,7 et 3,8 ?", ["3,75", "3,85", "3,07"], "3,75", "3,75 est plus grand que 3,70 et plus petit que 3,80. 3,85 dépasse 3,8 ; et 3,07 n’a aucun dixième, il est bien avant 3,7. Entre deux dixièmes voisins, tous les centièmes conviennent : 3,71 ; 3,72… jusqu’à 3,79."),
    e("m-p3-cd-5", "Entre quels deux entiers qui se suivent se trouve 7,4 ? Réponds comme ceci : entre 2 et 3", "entre 7 et 8", "La partie entière est 7, et il y a des dixièmes en plus : le nombre est donc entre 7 et 8."),
    q("m-p3-cd-6", "Combien de nombres décimaux y a-t-il entre 1,2 et 1,3 ?", ["aucun", "un seul", "beaucoup"], "beaucoup", "1,21 ; 1,25 ; 1,29… Contrairement aux entiers, il y a toujours de la place entre deux décimaux."),
    q("m-p3-cd-7", "Quel est le bon rangement du plus petit au plus grand ?", ["0,25 < 0,9 < 1,1", "0,9 < 0,25 < 1,1", "0,25 < 1,1 < 0,9"], "0,25 < 0,9 < 1,1", "1,1 a la plus grande partie entière : c’est le plus grand. Puis 0,90 contre 0,25 : 90 centièmes, c’est plus que 25. Donc 0,25 < 0,9 < 1,1."),
    q("m-p3-cd-8", "Sur une droite graduée de 0 à 1 partagée en dix, où se place 0,5 ?", ["au milieu", "à la deuxième graduation", "juste avant 1"], "au milieu", "0,5 vaut 5 dixièmes sur 10 : c’est exactement la moitié du chemin."),
  ],
};

const divisionPosee: Lecon = {
  code: "m-p3-division",
  matiere: "maths",
  periode: 3,
  titre: "La division posée",
  reference:
    "Poser et effectuer des divisions euclidiennes avec un diviseur à un chiffre ; résoudre des problèmes de partage et de groupement.",
  minutes: 35,
  cours: [
    {
      texte: [
        "La division répond à deux questions qui se ressemblent mais ne sont pas les mêmes. Il vaut la peine de les distinguer avant d’apprendre la technique.",
      ],
    },
    {
      titre: "Partager, ou grouper",
      texte: [
        "**Partager** : « 98 billes pour 7 enfants, combien chacun ? » On connaît le nombre de parts, on cherche la taille d’une part. 98 ÷ 7 = 14 billes chacun.",
        "**Grouper** : « 98 billes, des sachets de 7, combien de sachets ? » On connaît la taille d’une part, on cherche le nombre de parts. 98 ÷ 7 = 14 sachets.",
        "Le calcul est le même ; ce qui change, c’est ce que veut dire le résultat. Et c’est ce que la phrase de réponse doit dire.",
      ],
      regle:
        "Dans les deux cas : dividende ÷ diviseur = quotient, et il reste parfois quelque chose. Dans 98 ÷ 7, 98 est le dividende, 7 le diviseur, 14 le quotient.",
    },
    {
      titre: "Poser, chiffre par chiffre",
      texte: [
        "On divise en partant de la **gauche**, contrairement aux trois autres opérations.",
        "756 ÷ 4 : dans 7, combien de fois 4 ? Une fois, il reste 3. J’écris 1 au quotient.",
        "Je descends le 5 : j’ai 35. Dans 35, combien de fois 4 ? Huit fois (32), il reste 3. J’écris 8.",
        "Je descends le 6 : j’ai 36. Dans 36, combien de fois 4 ? Neuf fois, il reste 0. J’écris 9.",
        "Résultat : 189, reste 0.",
      ],
      regle:
        "Le reste est **toujours plus petit que le diviseur**. Si ton reste est supérieur ou égal au diviseur, c’est que tu pouvais mettre un de plus au quotient.",
    },
    {
      titre: "La vérification qui marche à tous les coups",
      texte: [
        "quotient × diviseur + reste doit redonner le dividende.",
        "250 ÷ 8 = 31, reste 2. Vérification : 31 × 8 = 248, plus 2 = 250. C’est juste.",
        "Fais-la à chaque fois. C’est dix secondes, et ça attrape toutes les erreurs.",
      ],
      regle: "quotient × diviseur + reste = dividende. Sinon, il y a une erreur.",
    },
  ],
  exemples: [
    {
      enonce: "Un fleuriste a 250 roses et fait des bouquets de 8. Combien de bouquets complets, et combien de roses restent-elles ?",
      etapes: [
        "C’est un groupement : je connais la taille d’un bouquet, je cherche le nombre de bouquets.",
        "Estimation : 8 × 30 = 240, c’est tout près de 250. Le quotient sera un peu plus de 30.",
        "Je pose 250 ÷ 8. Dans 2, combien de fois 8 ? Zéro fois : je prends 25. Dans 25, trois fois 8 (24), il reste 1. J’écris 3.",
        "Je descends le 0 : j’ai 10. Dans 10, une fois 8, il reste 2. J’écris 1.",
        "Quotient 31, reste 2. Vérification : 31 × 8 = 248, plus 2 = 250.",
      ],
      resultat: "31 bouquets, il reste 2 roses",
    },
  ],
  exercices: [
    e("m-p3-dv-1", "Calcule 78 ÷ 6.", "13", "Dans 7, une fois 6, il reste 1. Je descends le 8 : 18. Dans 18, trois fois 6, il reste 0. Quotient 13. Vérification : 13 × 6 = 78, reste 0."),
    e("m-p3-dv-2", "Calcule 756 ÷ 4.", "189", "Dans 7, une fois 4, reste 3 ; dans 35, huit fois, reste 3 ; dans 36, neuf fois. Quotient 189. Vérification : 189 × 4 = 756."),
    e("m-p3-dv-3", "Calcule 144 ÷ 6.", "24", "Dans 14, deux fois 6 (12), il reste 2. Je descends le 4 : 24. Dans 24, quatre fois 6, il reste 0. Quotient 24. Vérification : 24 × 6 = 144."),
    e("m-p3-dv-4", "Dans la division de 190 par 7, quel est le quotient ?", "27", "7 × 27 = 189 et 7 × 28 = 196, qui dépasse 190. Le quotient est donc 27."),
    e("m-p3-dv-5", "Dans la division de 190 par 7, quel est le reste ?", "1", "190 − 189 = 1. Et 1 est bien plus petit que 7, comme doit l’être tout reste."),
    e("m-p3-dv-6", "Six amis se partagent 54 cartes en parts égales. Combien de cartes reçoit chaque ami ?", "9", "C’est un partage : on connaît le nombre de parts (6), on cherche la taille d’une part. 54 ÷ 6 = 9 cartes chacun, sans reste, car 9 × 6 = 54."),
    e("m-p3-dv-7", "Un jardinier plante 75 salades en rangs de 5 salades. Combien de rangs fait-il ?", "15", "C’est un groupement : on connaît la taille d’un rang (5), on cherche le nombre de rangs. 75 ÷ 5 = 15 rangs. Vérification : 15 × 5 = 75."),
    e("m-p3-dv-8", "Léo veut 300 g de cerises et une cerise pèse environ 6 g. Combien de cerises lui faut-il ?", "50", "300 ÷ 6 = 50 cerises. Vérification : 50 × 6 = 300."),
  ],
};

const massesContenances: Lecon = {
  code: "m-p3-masses-contenances",
  matiere: "maths",
  periode: 3,
  titre: "Les masses et les contenances",
  reference:
    "Connaître et utiliser les unités de masse du milligramme au kilogramme et la tonne ; connaître et utiliser les unités de contenance du millilitre à l’hectolitre ; connaître les relations entre ces unités ; choisir une unité adaptée ; estimer.",
  minutes: 25,
  cours: [
    {
      texte: [
        "Les masses et les contenances fonctionnent exactement comme les longueurs : les mêmes préfixes, les mêmes relations par dix, cent, mille.",
        "Une fois qu’on a compris les longueurs, il n’y a presque rien de nouveau — seulement des mots à installer.",
      ],
    },
    {
      titre: "Les masses",
      texte: [
        "Le milligramme (mg), le gramme (g), le kilogramme (kg), la tonne (t).",
        "1 g = 1 000 mg. 1 kg = 1 000 g. 1 t = 1 000 kg.",
        "Trois fois mille, à la suite. « Kilo » veut dire mille — un kilogramme, c’est mille grammes, et c’est tout ce que le mot dit.",
      ],
      regle: "1 kg = 1 000 g et 1 t = 1 000 kg. Tout le reste s’en déduit.",
    },
    {
      titre: "Les contenances",
      texte: [
        "Le millilitre (mL), le centilitre (cL), le décilitre (dL), le litre (L), et l’hectolitre (hL).",
        "1 L = 10 dL = 100 cL = 1 000 mL. Et 1 hL = 100 L — « hecto » veut dire cent.",
        "Un verre fait environ 20 cL, une bouteille d’eau 1 L et demi, une baignoire environ 150 L.",
      ],
      regle: "1 L = 100 cL = 1 000 mL. Un centilitre, c’est dix millilitres.",
    },
    {
      titre: "Estimer, pour se relire",
      texte: [
        "Quelques repères qui servent à vérifier : une pomme pèse environ 150 g, un paquet de farine 1 kg, un enfant de neuf ans environ 30 kg, une voiture un peu plus d’une tonne.",
        "Si un calcul donne un chat de 300 kg ou une bouteille de 50 L, l’erreur se voit sans même relire l’opération.",
      ],
    },
  ],
  exemples: [
    {
      enonce: "Un carton contient 8 paquets de 750 g. Quelle est la masse totale, en kilogrammes ?",
      etapes: [
        "8 × 750 = 6 000 g.",
        "1 kg = 1 000 g, donc 6 000 g font 6 kg, sans reste.",
        "Vérification : 6 kg pour 8 paquets, cela fait environ 750 g le paquet. Cohérent.",
      ],
      resultat: "6 kg",
    },
  ],
  exercices: [
    e("m-p3-mc-1", "Un paquet de sucre pèse 1 kg. Combien de grammes de sucre contient-il ?", "1000", "« Kilo » veut dire mille : 1 kg = 1 000 g. Le paquet contient donc 1 000 g de sucre."),
    e("m-p3-mc-2", "Un melon pèse 1 kg 350 g. Quelle est sa masse en grammes ?", "1350", "1 kg fait 1 000 g. On ajoute les 350 g : 1 000 + 350 = 1 350 g."),
    e("m-p3-mc-3", "Un éléphant pèse 5 t. Combien de kilogrammes cela fait-il ?", "5000", "1 tonne vaut 1 000 kg, donc 5 t valent 5 × 1 000 = 5 000 kg."),
    e("m-p3-mc-4", "Une casserole contient 100 cL de soupe. Combien de litres de soupe cela fait-il ?", "1", "« Centi » veut dire centième : un centilitre est le centième d’un litre, donc il en faut 100 pour faire un litre. 100 cL = 1 L."),
    e("m-p3-mc-5", "Une bouteille d’eau contient 1 L. Combien de millilitres cela fait-il ?", "1000", "« Milli » veut dire millième : 1 L = 1 000 mL. Et donc 1 cL = 10 mL."),
    q("m-p3-mc-6", "Quelle unité est la plus pratique pour la masse d’une lettre qu’on envoie par la poste ?", ["le milligramme", "le gramme", "la tonne"], "le gramme", "Une lettre pèse quelques dizaines de grammes. En milligrammes le nombre serait énorme, en tonnes il serait minuscule."),
    q("m-p3-mc-7", "Qu’est-ce qui contient le plus ?", ["une baignoire", "un arrosoir", "une bouteille"], "une baignoire", "Une baignoire fait environ 150 L, un arrosoir une dizaine de litres, une bouteille 1 ou 2 L."),
    e("m-p3-mc-8", "Un sac contient 4 boîtes de 500 g. Quelle est sa masse en kilogrammes ?", "2", "4 × 500 = 2 000 g, et 2 000 g font 2 kg."),
  ],
};

const perimetre: Lecon = {
  code: "m-p3-perimetre",
  matiere: "maths",
  periode: 3,
  titre: "Le périmètre",
  reference:
    "Savoir ce qu’est le périmètre d’une figure plane ; déterminer le périmètre d’un polygone en utilisant une règle graduée ; résoudre des problèmes mettant en jeu les longueurs des côtés d’un polygone et son périmètre.",
  minutes: 25,
  cours: [
    {
      texte: [
        "Le périmètre, c’est la longueur du tour d’une figure. Rien de plus : si tu marchais tout autour, ce serait la distance parcourue.",
      ],
    },
    {
      titre: "On additionne les côtés",
      texte: [
        "Il n’y a **aucune formule à apprendre par cœur** cette année. On additionne les longueurs des côtés, tout simplement.",
        "Un triangle de 5 cm, 6 cm et 7 cm : périmètre 5 + 6 + 7 = 18 cm.",
        "Un rectangle de 8 cm sur 3 cm : 8 + 3 + 8 + 3 = 22 cm. Ses côtés opposés sont égaux, alors on peut aussi dire (8 + 3) × 2 = 22 cm.",
      ],
      regle:
        "Périmètre = la somme de tous les côtés. Et le résultat est une **longueur**, donc en centimètres, en mètres…",
    },
    {
      titre: "Les règles qu’on peut trouver soi-même",
      texte: [
        "Un carré a quatre côtés égaux : son périmètre est donc le quadruple d’un côté. Un carré de 5 cm de côté : 5 × 4 = 20 cm.",
        "Ce n’est pas une formule à mémoriser, c’est une remarque qu’on fait une fois et qu’on garde parce qu’elle fait gagner du temps.",
      ],
    },
    {
      titre: "Dans l’autre sens",
      texte: [
        "Si on connaît le périmètre, on peut retrouver un côté.",
        "Un carré de périmètre 36 cm : 36 ÷ 4 = 9 cm de côté.",
        "Un rectangle de périmètre 30 cm dont un côté fait 10 cm : les deux côtés de 10 cm font 20 cm, il reste 10 cm pour les deux autres, donc 5 cm chacun.",
      ],
    },
  ],
  exemples: [
    {
      enonce: "Un rectangle mesure 12 cm de long et 7 cm de large. Quel est son périmètre ?",
      etapes: [
        "Un rectangle a deux longueurs et deux largeurs.",
        "Les deux longueurs : 12 + 12 = 24 cm.",
        "Les deux largeurs : 7 + 7 = 14 cm.",
        "Total : 24 + 14 = 38 cm. Ou directement (12 + 7) × 2 = 38 cm.",
      ],
      resultat: "38 cm",
    },
  ],
  exercices: [
    e("m-p3-pe-1", "Quel est le périmètre d’un carré de 5 cm de côté, en centimètres ?", "20", "Quatre côtés égaux : 5 × 4 = 20 cm."),
    e("m-p3-pe-2", "Quel est le périmètre d’un rectangle de 8 cm sur 3 cm, en centimètres ?", "22", "8 + 3 + 8 + 3 = 22 cm. Ou (8 + 3) × 2 = 22."),
    e("m-p3-pe-3", "Un triangle a des côtés de 5 cm, 6 cm et 7 cm. Quel est son périmètre, en centimètres ?", "18", "On additionne les trois côtés : 5 + 6 + 7 = 18 cm."),
    e("m-p3-pe-4", "Un carré a un périmètre de 36 cm. Combien mesure un côté, en centimètres ?", "9", "Le périmètre est le quadruple du côté, donc 36 ÷ 4 = 9 cm."),
    e("m-p3-pe-5", "Quel est le périmètre d’un rectangle de 11 cm sur 5 cm, en centimètres ?", "32", "Un rectangle a deux longueurs et deux largeurs : (11 + 5) × 2 = 16 × 2 = 32 cm."),
    e("m-p3-pe-6", "Un triangle équilatéral a des côtés de 8 cm. Quel est son périmètre, en centimètres ?", "24", "Équilatéral veut dire trois côtés égaux : 8 × 3 = 24 cm."),
    e("m-p3-pe-7", "Un jardin rectangulaire fait 20 m sur 15 m. Combien de mètres de grillage pour l’entourer ?", "70", "(20 + 15) × 2 = 70 m. C’est bien un périmètre : on fait le tour."),
    q("m-p3-pe-8", "Un rectangle a un périmètre de 30 cm et un côté de 10 cm. Combien mesure l’autre côté ?", ["5 cm", "10 cm", "20 cm"], "5 cm", "Les deux côtés de 10 cm font 20 cm. Il reste 30 − 20 = 10 cm pour les deux autres, donc 5 cm chacun."),
  ],
};

/* ================================================================== */
/* PÉRIODE 4 — mars, avril                                             */
/* ================================================================== */

const aires: Lecon = {
  code: "m-p4-aires",
  matiere: "maths",
  periode: 4,
  titre: "Les aires",
  reference:
    "Comparer les aires de différentes figures planes ; déterminer des aires ; connaître et utiliser les centimètres carrés pour exprimer des aires.",
  minutes: 30,
  cours: [
    {
      texte: [
        "Le périmètre mesure le tour d’une figure. L’aire mesure la **surface** : la place que la figure occupe, ce qu’il faudrait de peinture pour la couvrir.",
        "Ce sont deux choses différentes, et il faut s’arrêter là-dessus parce que c’est là que tout se mélange.",
      ],
    },
    {
      titre: "Deux figures, deux mesures",
      texte: [
        "Un rectangle de 6 cm sur 1 cm : son périmètre fait 14 cm, son aire couvre 6 petits carrés de 1 cm de côté.",
        "Un carré de 3 cm de côté : son périmètre fait 12 cm — donc moins — mais son aire couvre 9 carrés — donc plus.",
        "Le plus grand périmètre ne donne pas la plus grande aire. C’est contre-intuitif, et c’est pourtant vrai.",
      ],
      regle:
        "Le périmètre est une **longueur** (en cm). L’aire est une **surface** (en cm²). On ne les compare jamais entre eux.",
    },
    {
      titre: "Compter des carreaux",
      texte: [
        "Pour mesurer une aire, on choisit une unité de surface et on compte combien il en faut pour recouvrir la figure.",
        "L’unité habituelle est le **centimètre carré** (cm²) : un carré de 1 cm de côté.",
        "Sur du papier quadrillé, il suffit de compter les carreaux. Pour les demi-carreaux, on les assemble deux par deux.",
      ],
      regle: "1 cm² = un carré de 1 cm sur 1 cm. Le petit 2 rappelle qu’on mesure une surface, pas une longueur.",
    },
    {
      titre: "La règle qu’on peut découvrir",
      texte: [
        "Un rectangle de 5 cm sur 3 cm : on peut le recouvrir de 3 rangées de 5 carreaux. Donc 5 × 3 = 15 cm².",
        "Aucune formule n’est à mémoriser cette année, mais celle-là, on la trouve tout seul en comptant les rangées — et on a le droit de s’en servir.",
      ],
    },
  ],
  exemples: [
    {
      enonce: "Un rectangle mesure 7 cm sur 4 cm. Quelle est son aire, et quel est son périmètre ?",
      etapes: [
        "Aire : je peux le recouvrir de 4 rangées de 7 carreaux, donc 7 × 4 = 28 cm².",
        "Périmètre : (7 + 4) × 2 = 22 cm.",
        "Deux nombres, deux unités différentes : 28 cm² et 22 cm. Ils ne se comparent pas.",
      ],
      resultat: "aire 28 cm² · périmètre 22 cm",
    },
  ],
  exercices: [
    e("m-p4-ai-1", "Quelle est l’aire d’un rectangle de 5 cm sur 3 cm, en cm² ? Réponds par le nombre.", "15", "Trois rangées de cinq carreaux : 5 × 3 = 15 cm²."),
    e("m-p4-ai-2", "Quelle est l’aire d’un carré de 4 cm de côté, en cm² ? Réponds par le nombre.", "16", "Quatre rangées de quatre carreaux : 4 × 4 = 16 cm²."),
    e("m-p4-ai-3", "Une figure recouvre 12 carreaux de 1 cm². Quelle est son aire, en cm² ? Réponds par le nombre.", "12", "Chaque carreau vaut 1 cm² : douze carreaux font 12 cm²."),
    q("m-p4-ai-4", "Le périmètre se mesure en…", ["cm", "cm²", "les deux"], "cm", "Le périmètre est une longueur : on le mesure en centimètres. Les cm² servent aux aires."),
    q("m-p4-ai-5", "Qui a la plus grande aire : un rectangle de 6 cm sur 1 cm, ou un carré de 3 cm de côté ?", ["le rectangle", "le carré", "la même"], "le carré", "Le rectangle couvre 6 cm², le carré 9 cm². Et pourtant le rectangle a le plus grand périmètre : 14 cm contre 12."),
    e("m-p4-ai-6", "Quelle est l’aire d’un rectangle de 10 cm sur 2 cm, en cm² ? Réponds par le nombre.", "20", "Deux rangées de dix carreaux : 10 × 2 = 20 cm²."),
    q("m-p4-ai-7", "Deux figures ont la même aire. Ont-elles forcément le même périmètre ?", ["oui", "non"], "non", "Un carré de 4 cm de côté et un rectangle de 8 cm sur 2 cm couvrent tous deux 16 cm², mais leurs périmètres font 16 cm et 20 cm."),
    e("m-p4-ai-8", "Un rectangle a une aire de 24 cm² et un côté de 6 cm. Combien mesure l’autre côté, en centimètres ?", "4", "On cherche le nombre de rangées : 24 ÷ 6 = 4 cm."),
  ],
};

const angles: Lecon = {
  code: "m-p4-angles",
  matiere: "maths",
  periode: 4,
  titre: "Les angles",
  reference:
    "Utiliser le lexique spécifique associé aux angles ; comprendre et utiliser les notations des angles ; comparer des angles ; au cours moyen, les élèves ne travaillent qu’avec des angles saillants.",
  minutes: 25,
  cours: [
    {
      texte: [
        "Un angle, c’est l’écartement entre deux demi-droites qui partent du même point. Ce point s’appelle le sommet de l’angle.",
        "Une image utile : les deux aiguilles d’une horloge forment un angle, et cet angle change au fil de la journée sans que les aiguilles changent de longueur.",
      ],
      regle:
        "La taille d’un angle ne dépend **pas** de la longueur des côtés. Deux angles peuvent être égaux avec des côtés très différents.",
    },
    {
      titre: "L’angle droit, et les autres",
      texte: [
        "L’**angle droit** est celui du coin d’une feuille, d’une porte, d’une équerre. On le repère avec une équerre, et on le marque par un petit carré.",
        "Un angle plus fermé que l’angle droit s’appelle **aigu**. Comme la pointe d’un crayon : aigu, ça pique.",
        "Un angle plus ouvert s’appelle **obtus**. Plus lourd, plus large.",
        "Et un angle complètement ouvert, qui forme une ligne droite, s’appelle un angle **plat**.",
      ],
      regle: "aigu < droit < obtus < plat. L’équerre est l’outil qui tranche.",
    },
    {
      titre: "Comparer sans mesurer",
      texte: [
        "Cette année on ne mesure pas les angles en degrés : on les **compare**.",
        "Pour comparer deux angles dessinés à deux endroits différents, on utilise du papier calque : on décalque le premier, on le pose sur le second, et on regarde lequel dépasse.",
        "On peut aussi se servir du coin d’une feuille comme d’un angle droit de référence : si l’angle est plus fermé que le coin, il est aigu.",
      ],
    },
    {
      titre: "Dans les figures",
      texte: [
        "Un carré et un rectangle ont quatre angles droits.",
        "Un triangle rectangle en a exactement un — c’est ce qui lui donne son nom.",
        "Un triangle ne peut pas avoir deux angles droits : essaie de le dessiner, tu verras que les deux côtés ne se rejoignent jamais.",
      ],
    },
  ],
  exemples: [
    {
      enonce: "Les aiguilles d’une horloge à 3 h forment quel type d’angle ? Et à 5 h ?",
      etapes: [
        "À 3 h, la petite aiguille est sur le 3 et la grande sur le 12 : elles forment le quart d’un tour, c’est-à-dire un angle droit.",
        "À 5 h, l’écartement est plus grand qu’un quart de tour.",
        "Un angle plus ouvert que l’angle droit est obtus.",
      ],
      resultat: "à 3 h : angle droit · à 5 h : angle obtus",
    },
  ],
  exercices: [
    q("m-p4-an-1", "Pour savoir si le coin d’un livre forme un angle droit, que poses-tu dessus ?", ["une règle graduée", "une équerre", "un compas"], "une équerre", "Le coin de l’équerre est un angle droit : on le pose contre le coin du livre, et on regarde si les deux bords suivent ceux de l’équerre."),
    e("m-p4-an-2", "Une dalle de carrelage est carrée. Combien de ses coins sont des angles droits ?", "4", "La dalle est un carré, et les quatre coins d’un carré sont des angles droits."),
    q("m-p4-an-3", "Un angle plus fermé qu’un angle droit s’appelle…", ["aigu", "obtus", "plat"], "aigu", "Aigu comme une pointe : plus fermé, plus pointu."),
    q("m-p4-an-4", "Un angle plus ouvert qu’un angle droit s’appelle…", ["aigu", "obtus", "plat"], "obtus", "Obtus veut dire plus ouvert que l’angle droit, sans aller jusqu’à la ligne droite."),
    e("m-p4-an-5", "Une équerre a la forme d’un triangle rectangle. Combien de ses trois angles sont droits ?", "1", "Exactement un — c’est ce qui donne son nom au triangle rectangle. Ses deux autres angles sont plus fermés : ils sont aigus."),
    q("m-p4-an-6", "Les aiguilles d’une horloge à 3 h forment…", ["un angle droit", "un angle aigu", "un angle plat"], "un angle droit", "De 12 à 3, il y a un quart de tour, donc un angle droit."),
    q("m-p4-an-7", "Un angle dessiné avec des côtés très longs est-il plus grand qu’un angle identique aux côtés courts ?", ["oui", "non"], "non", "La taille d’un angle ne dépend que de l’écartement, pas de la longueur des côtés. Le calque le montre bien."),
    q("m-p4-an-8", "Comment comparer deux angles dessinés sur deux feuilles différentes ?", ["en les mesurant à la règle", "avec du papier calque", "en comptant leurs côtés"], "avec du papier calque", "On décalque le premier et on le pose sur le second. La règle mesure des longueurs, pas des écartements."),
  ],
};

const duree: Lecon = {
  code: "m-p4-durees",
  matiere: "maths",
  periode: 4,
  titre: "L’heure et les durées",
  reference:
    "Lire l’heure sur une horloge à aiguilles ; comparer et mesurer des durées écoulées entre deux instants ; résoudre des problèmes à une ou deux étapes impliquant des durées.",
  minutes: 30,
  cours: [
    {
      texte: [
        "Calculer avec des heures est le seul endroit du programme où on ne compte pas par dix. C’est pour ça que ça trompe, et c’est pour ça qu’il faut une méthode.",
      ],
    },
    {
      titre: "Ce qu’il faut savoir sans réfléchir",
      texte: [
        "1 heure = 60 minutes. 1 minute = 60 secondes. 1 jour = 24 heures.",
        "Une demi-heure fait 30 minutes, un quart d’heure 15 minutes, trois quarts d’heure 45 minutes.",
        "Attention : 1 h 30 ne veut **pas** dire 1,30. Une heure et demie fait 90 minutes, et 1,5 en écriture décimale.",
      ],
      regle:
        "On ne pose pas une soustraction d’heures comme des nombres ordinaires : 3 h 10 − 1 h 40 ne se calcule pas comme 310 − 140. La réponse est 1 h 30, et c’est la méthode du chemin qui la trouve.",
    },
    {
      titre: "La méthode du chemin",
      texte: [
        "Pour calculer une durée entre deux instants, on avance par étapes rondes, et on additionne ce qu’on a avancé.",
        "De 7 h 40 à 11 h 30 : de 7 h 40 à 8 h, il y a 20 min. De 8 h à 11 h, il y a 3 h. De 11 h à 11 h 30, il y a 30 min.",
        "Total : 3 h et 50 min, donc 3 h 50.",
        "C’est plus long à écrire qu’à faire, et ça ne se trompe jamais.",
      ],
      regle:
        "Avance jusqu’à l’heure ronde suivante, puis par heures entières, puis termine. Additionne les morceaux.",
    },
    {
      titre: "Convertir",
      texte: [
        "En minutes : 2 h 50 = 2 × 60 + 50 = 170 minutes.",
        "Dans l’autre sens : 200 minutes, combien d’heures ? 200 ÷ 60 = 3 et il reste 20. Donc 3 h 20.",
        "Et en heures : 3 jours et 8 heures = 3 × 24 + 8 = 80 heures.",
      ],
    },
  ],
  exemples: [
    {
      enonce: "Un entraînement va de 14 h 35 à 17 h 20. Combien de temps a-t-il duré ?",
      etapes: [
        "De 14 h 35 à 15 h : 25 minutes.",
        "De 15 h à 17 h : 2 heures.",
        "De 17 h à 17 h 20 : 20 minutes.",
        "Total : 2 h et 45 min.",
      ],
      resultat: "2 h 45",
    },
  ],
  exercices: [
    e("m-p4-du-1", "Une minute, c’est combien de secondes ?", "60", "1 min = 60 s. Les secondes et les minutes vont par soixante, comme les minutes et les heures."),
    e("m-p4-du-2", "Combien y a-t-il d’heures dans une journée ?", "24", "Une journée complète fait 24 heures."),
    e("m-p4-du-3", "Sami part au marché à 9 h 40 et revient à 11 h 15. Combien de temps est-il parti ? Réponds comme ceci : 2h15", "1h35", "De 9 h 40 à 10 h : 20 min. De 10 h à 11 h : 1 h. De 11 h à 11 h 15 : 15 min. Total 1 h 35."),
    e("m-p4-du-4", "Un atelier de peinture va de 15 h 40 à 18 h 05. Combien de temps dure-t-il ? Réponds comme ceci : 1h45", "2h25", "20 min pour atteindre 16 h, puis 2 h jusqu’à 18 h, puis 5 min. Total 2 h 25."),
    e("m-p4-du-5", "Un voyage en car dure 4 heures et 10 minutes. Combien de minutes dure-t-il ?", "250", "Une heure fait 60 minutes, donc 4 × 60 = 240 minutes. On ajoute les 10 minutes : 240 + 10 = 250 minutes."),
    e("m-p4-du-6", "Combien y a-t-il d’heures dans 3 jours et 8 heures ?", "80", "3 × 24 = 72 heures, plus 8 : 80 heures."),
    e("m-p4-du-7", "Un film commence à 20 h 40 et dure 1 h 50. À quelle heure finit-il ? Réponds comme ceci : 21h05", "22h30", "De 20 h 40, j’ajoute 1 h : 21 h 40. Puis 20 min pour atteindre 22 h, il reste 30 min à ajouter : 22 h 30."),
    e("m-p4-du-8", "Combien font 200 minutes en heures et minutes ? Réponds comme ceci : 2h15", "3h20", "200 ÷ 60 = 3, reste 20. Donc 3 heures et 20 minutes."),
  ],
};

const proportionnalite: Lecon = {
  code: "m-p4-proportionnalite",
  matiere: "maths",
  periode: 4,
  titre: "La proportionnalité",
  reference:
    "Identifier une situation de proportionnalité ; savoir résoudre un problème de proportionnalité. La résolution s’appuie uniquement sur des raisonnements formulés en langage naturel ; les élèves n’utilisent pas de tableaux de proportionnalité au cours moyen.",
  minutes: 30,
  cours: [
    {
      texte: [
        "Il y a des situations où, quand une quantité est multipliée par un nombre, l’autre est multipliée par le même nombre. On dit alors que les deux grandeurs sont proportionnelles.",
        "Trois croissants coûtent 3 €, donc six croissants coûtent 6 €. Deux fois plus de croissants, deux fois plus d’argent.",
      ],
    },
    {
      titre: "La phrase qui résout presque tout",
      texte: [
        "« Si j’en prends trois fois plus, je paie trois fois plus. »",
        "C’est tout le raisonnement, et il suffit dans la grande majorité des cas.",
        "« 4 pains aux raisins coûtent 7 €. Combien coûtent 12 pains ? » — 12, c’est 3 fois 4. Donc le prix est 3 fois 7, soit 21 €. Inutile de chercher le prix d’un seul pain.",
      ],
      regle:
        "Cherche d’abord le lien entre les deux nombres de même sorte : « combien de fois plus ? ». Puis applique le même facteur à l’autre grandeur.",
    },
    {
      titre: "Et quand le lien n’est pas rond",
      texte: [
        "« 4 pains coûtent 7 €. Combien coûtent 6 pains ? » — 6 n’est pas un multiple simple de 4. On passe alors par un intermédiaire.",
        "La moitié de 4, c’est 2 pains, donc la moitié de 7 €, soit 3,50 €. Et 6 pains = 4 + 2 pains, donc 7 + 3,50 = 10,50 €.",
        "On peut aussi passer par un seul pain, mais ce n’est pas toujours le plus simple.",
      ],
      regle:
        "Si je prends la moitié, je paie la moitié. Si j’additionne les quantités, j’additionne les prix. C’est ce qui fait marcher la méthode.",
    },
    {
      titre: "Attention : tout n’est pas proportionnel",
      texte: [
        "L’âge de Tom et celui de son parrain augmentent ensemble, mais pas proportionnellement : quand Tom double son âge, son parrain ne double pas le sien.",
        "Le prix d’un abonnement avec frais de dossier n’est pas proportionnel non plus : il y a une part fixe.",
        "Avant d’appliquer la méthode, demande-toi si doubler l’un double vraiment l’autre.",
      ],
    },
  ],
  exemples: [
    {
      enonce: "Cinq cahiers coûtent 12 €. Combien coûtent quinze cahiers ?",
      etapes: [
        "Je compare les quantités de même sorte : 15 ÷ 5 = 3, donc trois fois plus de cahiers.",
        "Trois fois plus de cahiers, trois fois plus d’argent.",
        "12 × 3 = 36 €.",
      ],
      resultat: "36 €",
    },
  ],
  exercices: [
    e("m-p4-pr-1", "Trois croissants coûtent 3 €. Combien coûtent neuf croissants, en euros ?", "9", "9 ÷ 3 = 3 : trois fois plus de croissants, donc trois fois plus d’argent. 3 × 3 = 9 €."),
    e("m-p4-pr-2", "Quatre pains aux raisins coûtent 7 €. Combien coûtent douze pains, en euros ?", "21", "12 est trois fois 4, donc le prix est trois fois 7 : 21 €. Inutile de chercher le prix d’un seul."),
    e("m-p4-pr-3", "Cinq cahiers coûtent 12 €. Combien coûtent quinze cahiers, en euros ?", "36", "15 est trois fois 5, donc 12 × 3 = 36 €."),
    e("m-p4-pr-4", "Une voiture consomme 6 litres pour 100 km. Combien de litres pour 300 km ?", "18", "300 km, c’est trois fois 100 km : 6 × 3 = 18 litres."),
    e("m-p4-pr-5", "Huit billes pèsent 40 g. Combien pèsent quatre billes, en grammes ?", "20", "Quatre billes, c’est la moitié de huit : la masse est la moitié de 40, donc 20 g."),
    e("m-p4-pr-6", "Deux places de cinéma coûtent 16 €. Combien coûtent six places, en euros ?", "48", "6 est trois fois 2, donc 16 × 3 = 48 €."),
    q("m-p4-pr-7", "Tom a 9 ans, son parrain 40 ans. Quand Tom aura 18 ans, son parrain en aura-t-il 80 ?", ["oui", "non"], "non", "Les âges ne sont pas proportionnels : ils augmentent du même nombre d’années, pas du même facteur. Le parrain aura 49 ans."),
    e("m-p4-pr-8", "Trois kilos de pommes coûtent 6 €. Combien coûtent cinq kilos, en euros ?", "10", "Un kilo coûte 6 ÷ 3 = 2 €. Donc cinq kilos coûtent 2 × 5 = 10 €. Ici, passer par un kilo est le plus simple."),
  ],
};

const calculMental: Lecon = {
  code: "m-p4-calcul-mental",
  matiere: "maths",
  periode: 4,
  titre: "Le calcul mental : les chemins courts",
  reference:
    "Apprendre des procédures de calcul mental : ajouter ou soustraire 8, 9, 18, 19… ; multiplier par 4, par 8, par 5 ; multiplier par un nombre entier de dizaines ou de centaines ; utiliser la distributivité dans des cas simples.",
  minutes: 25,
  cours: [
    {
      texte: [
        "Calculer mentalement n’est pas calculer vite : c’est choisir un chemin court. Ce sont des procédures, elles s’apprennent, et elles rendent service toute la vie.",
      ],
    },
    {
      titre: "Ajouter 9, 19, 29",
      texte: [
        "47 + 9 : au lieu de compter, ajoute 10 et retire 1. 47 + 10 = 57, moins 1 = 56.",
        "Même idée pour 19 (ajoute 20, retire 1) et pour 29 (ajoute 30, retire 1).",
        "Pour 8, 18, 28 : ajoute la dizaine ronde et retire 2.",
      ],
      regle: "+ 9 = + 10 − 1. + 8 = + 10 − 2. Et pareil pour retirer.",
    },
    {
      titre: "Multiplier par 4, par 8, par 5",
      texte: [
        "Par 4, c’est doubler deux fois. 13 × 4 : le double de 13 est 26, le double de 26 est 52.",
        "Par 8, c’est doubler trois fois. 15 × 8 : 30, 60, 120.",
        "Par 5, c’est prendre la moitié de dix fois. 36 × 5 : 36 × 10 = 360, moitié = 180.",
      ],
      regle: "× 4 = deux doubles. × 8 = trois doubles. × 5 = la moitié de × 10.",
    },
    {
      titre: "Découper un facteur",
      texte: [
        "Quand un nombre est près d’un nombre rond, découpe-le.",
        "12 × 7, c’est (10 × 7) + (2 × 7) = 70 + 14 = 84.",
        "19 × 6, c’est (20 × 6) − 6 = 120 − 6 = 114.",
        "Cette façon de découper s’appelle la distributivité. Le mot est savant, l’idée ne l’est pas : on peut couper avant de multiplier, à condition de tout recoller.",
      ],
      regle: "12 × 7 = 10 × 7 + 2 × 7. On coupe, on multiplie chaque morceau, on additionne.",
    },
  ],
  exemples: [
    {
      enonce: "Calcule 24 × 5 de tête, de deux façons.",
      etapes: [
        "Première façon : 24 × 10 = 240, puis la moitié = 120.",
        "Deuxième façon : 24 × 5 = (20 × 5) + (4 × 5) = 100 + 20 = 120.",
        "Les deux chemins mènent au même endroit. Prends celui que tu vois le plus vite.",
      ],
      resultat: "120",
    },
  ],
  exercices: [
    e("m-p4-cm-1", "Calcule de tête 47 + 9.", "56", "+ 9, c’est + 10 puis − 1 : 47 + 10 = 57, moins 1 = 56."),
    e("m-p4-cm-2", "Calcule de tête 85 − 19.", "66", "− 19, c’est − 20 puis + 1 : 85 − 20 = 65, plus 1 = 66."),
    e("m-p4-cm-3", "Calcule de tête 24 × 4.", "96", "Deux doubles : le double de 24 est 48, le double de 48 est 96."),
    e("m-p4-cm-4", "Calcule de tête 15 × 8.", "120", "Trois doubles : 15, 30, 60, 120."),
    e("m-p4-cm-5", "Calcule de tête 36 × 5.", "180", "36 × 10 = 360, puis la moitié : 180."),
    e("m-p4-cm-6", "Calcule de tête 12 × 7.", "84", "On découpe 12 : (10 × 7) + (2 × 7) = 70 + 14 = 84."),
    e("m-p4-cm-7", "Calcule de tête 19 × 6.", "114", "19 est tout près de 20 : (20 × 6) − 6 = 120 − 6 = 114."),
    e("m-p4-cm-8", "Calcule de tête 7 × 40.", "280", "7 × 4 = 28, puis × 10 : 280. Multiplier par un nombre de dizaines, c’est multiplier par le chiffre puis par dix."),
  ],
};

const donnees: Lecon = {
  code: "m-p4-donnees",
  matiere: "maths",
  periode: 4,
  titre: "Les tableaux et les graphiques",
  reference:
    "Lire et interpréter les données d’un tableau à simple ou double entrée, d’un diagramme en barres ou d’une courbe ; résoudre des problèmes en une ou plusieurs étapes en utilisant ces données.",
  minutes: 25,
  cours: [
    {
      texte: [
        "Beaucoup d’informations arrivent sous forme de tableaux ou de graphiques : la météo, les résultats d’un match, la température de la Terre. Savoir les lire est une compétence à part entière.",
      ],
    },
    {
      titre: "Lire un tableau à double entrée",
      texte: [
        "Un tableau à double entrée croise deux informations : les lignes disent une chose, les colonnes une autre.",
        "Pour trouver une valeur, on suit la ligne avec un doigt et la colonne avec l’autre : la case cherchée est là où les deux doigts se rencontrent.",
        "Avant de chercher quoi que ce soit, lis les titres des lignes et des colonnes. C’est l’étape que tout le monde saute, et c’est celle qui fait se tromper.",
      ],
      regle: "D’abord les titres, ensuite les nombres. Un nombre sans son titre ne veut rien dire.",
    },
    {
      titre: "Lire un diagramme en barres",
      texte: [
        "Chaque barre représente une quantité : plus elle est haute, plus la quantité est grande.",
        "Pour lire une valeur, il faut regarder l’échelle sur le côté : une barre qui monte jusqu’à la troisième graduation ne vaut 3 que si chaque graduation vaut 1.",
        "Le diagramme sert surtout à **comparer** : quel jour le plus, quel jour le moins, quels jours se ressemblent.",
      ],
      regle: "Cherche toujours combien vaut une graduation avant de lire une barre.",
    },
    {
      titre: "Lire une courbe",
      texte: [
        "Une courbe montre une évolution : elle monte quand la quantité augmente, elle descend quand elle diminue, elle est plate quand rien ne change.",
        "Un plateau ne veut pas dire « zéro » : il veut dire « toujours la même valeur ».",
      ],
    },
  ],
  exemples: [
    {
      enonce:
        "Livres empruntés : lundi 25, mardi 37, mercredi 19, jeudi 43, vendredi 16. Combien dans la semaine, et quel est l’écart entre le meilleur et le moins bon jour ?",
      etapes: [
        "Total : 25 + 37 + 19 + 43 + 16 = 140 livres.",
        "Le plus grand est jeudi (43), le plus petit vendredi (16).",
        "Écart : 43 − 16 = 27 livres.",
      ],
      resultat: "140 livres · écart de 27",
    },
  ],
  exercices: [
    e("m-p4-do-1", "Oiseaux comptés dans un jardin en une matinée : moineaux 36, merles 29, pigeons 52, mésanges 17, pies 44. Combien d’oiseaux a-t-on comptés en tout ?", "178", "On additionne les cinq nombres du relevé : 36 + 29 = 65, puis 65 + 52 = 117, puis 117 + 17 = 134, puis 134 + 44 = 178 oiseaux."),
    q("m-p4-do-2", "Oiseaux comptés dans un jardin en une matinée : moineaux 36, merles 29, pigeons 52, mésanges 17, pies 44. Quels oiseaux a-t-on vus en plus grand nombre ?", ["les moineaux", "les pigeons", "les pies"], "les pigeons", "52 est le plus grand nombre du relevé : ce sont les pigeons."),
    e("m-p4-do-3", "Oiseaux comptés dans un jardin en une matinée : moineaux 36, merles 29, pigeons 52, mésanges 17, pies 44. Combien a-t-on compté de pigeons de plus que de mésanges ?", "35", "On cherche un écart, donc une soustraction : 52 − 17 = 35 pigeons de plus."),
    e("m-p4-do-4", "Tarifs de la patinoire : adulte 7 €, enfant 5 €. Combien paie un groupe de 3 adultes et 4 enfants, en euros ?", "41", "3 × 7 = 21 € pour les adultes, et 4 × 5 = 20 € pour les enfants. Total : 21 + 20 = 41 €. Deux étapes avant d’additionner."),
    q("m-p4-do-5", "Verres de jus vendus à la fête de l’école : orange 48, pomme 39, raisin 45, ananas 51, fraise 42. Quel jus s’est le moins vendu ?", ["le jus d’orange", "le jus de pomme", "le jus de fraise"], "le jus de pomme", "39 est le plus petit nombre du relevé : c’est le jus de pomme."),
    e("m-p4-do-6", "Verres de jus vendus à la fête de l’école : orange 48, pomme 39, raisin 45, ananas 51, fraise 42. Combien de verres a-t-on vendus en tout ?", "225", "48 + 39 + 45 + 51 + 42 = 225 verres. En groupant, c’est plus rapide : 48 + 42 = 90, 39 + 51 = 90, et 90 + 90 + 45 = 225."),
    q("m-p4-do-7", "Sur un graphique, une courbe plate pendant trois jours veut dire…", ["la valeur ne change pas", "la valeur est nulle", "il n’y a pas de données"], "la valeur ne change pas", "Un plateau signifie que la quantité reste la même. Zéro serait une courbe posée sur la ligne du bas."),
    q("m-p4-do-8", "Avant de lire la hauteur d’une barre, que faut-il regarder ?", ["l’échelle", "la couleur", "le titre du graphique seulement"], "l’échelle", "Une barre qui atteint la troisième graduation ne vaut 3 que si chaque graduation vaut 1. L’échelle décide."),
  ],
};

/* ================================================================== */
/* PÉRIODE 5 — mai, juin                                               */
/* ================================================================== */

const figuresPlanes: Lecon = {
  code: "m-p5-figures",
  matiere: "maths",
  periode: 5,
  titre: "Les figures et leurs propriétés",
  reference:
    "Reconnaître et nommer les figures suivantes en faisant référence à leur définition : triangle, triangle rectangle, triangle isocèle, triangle équilatéral, quadrilatère, carré, rectangle et losange ; connaître leurs propriétés de parallélisme, d’égalité de longueurs et d’angles.",
  minutes: 30,
  cours: [
    {
      texte: [
        "Reconnaître une figure, ce n’est pas la reconnaître à l’œil : c’est vérifier qu’elle a bien les propriétés qui la définissent. Un carré posé de travers reste un carré, même s’il ressemble à un losange.",
      ],
    },
    {
      titre: "Les triangles",
      texte: [
        "Un **triangle** a trois côtés et trois angles. C’est tout.",
        "Un triangle **rectangle** a un angle droit.",
        "Un triangle **isocèle** a deux côtés de même longueur.",
        "Un triangle **équilatéral** a ses trois côtés de même longueur — et donc ses trois angles égaux.",
        "Un triangle peut être à la fois rectangle et isocèle : un angle droit et deux côtés égaux.",
      ],
      regle: "iso-cèle : deux côtés égaux. équi-latéral : tous les côtés égaux (« latéral » veut dire côté).",
    },
    {
      titre: "Les quadrilatères",
      texte: [
        "Un **quadrilatère** a quatre côtés. Un carré, un rectangle, un losange en sont tous.",
        "Un **rectangle** a quatre angles droits. Ses côtés opposés sont parallèles et de même longueur.",
        "Un **losange** a quatre côtés de même longueur, et ses côtés opposés sont parallèles. Ses angles ne sont pas forcément droits.",
        "Un **carré** a les deux : quatre angles droits **et** quatre côtés égaux. C’est donc à la fois un rectangle et un losange — ce qui est plus intéressant qu’une devinette, c’est une vraie remarque sur les définitions.",
      ],
      regle:
        "Tout carré est un rectangle et un losange. Mais tous les rectangles ne sont pas des carrés.",
    },
    {
      titre: "Le cercle et le disque",
      texte: [
        "Un **cercle**, c’est la ligne : tous les points situés à la même distance d’un point appelé centre. Cette distance est le rayon.",
        "Un **disque**, c’est la surface : le cercle et tout ce qu’il y a dedans.",
        "Le diamètre traverse le cercle en passant par le centre : il vaut deux rayons.",
      ],
      regle: "Le cercle est le tour, le disque est la galette. Diamètre = 2 × rayon.",
    },
  ],
  exemples: [
    {
      enonce: "Une figure a quatre côtés de 5 cm et quatre angles droits. Quel est son nom le plus précis ?",
      etapes: [
        "Quatre côtés : c’est un quadrilatère.",
        "Quatre angles droits : c’est un rectangle.",
        "Quatre côtés égaux : c’est aussi un losange.",
        "Les deux ensemble : c’est un carré, et c’est le nom le plus précis.",
      ],
      resultat: "un carré",
    },
  ],
  exercices: [
    q("m-p5-fi-1", "Comment s’appelle un triangle dont les trois côtés ont la même longueur ?", ["un triangle équilatéral", "un triangle isocèle", "un triangle rectangle"], "un triangle équilatéral", "« Équi » veut dire égal et « latéral » veut dire côté : tous les côtés égaux. L’isocèle n’en a que deux d’égaux, et le triangle rectangle se reconnaît à son angle droit, pas à ses côtés."),
    q("m-p5-fi-2", "Comment s’appelle un triangle qui a deux côtés de même longueur ?", ["un triangle isocèle", "un triangle équilatéral", "un triangle rectangle"], "un triangle isocèle", "« Iso » veut dire égal : un triangle isocèle a deux côtés égaux. S’il en avait trois, il serait équilatéral."),
    e("m-p5-fi-3", "Une feuille de cahier est un rectangle. Tu poses ton équerre dans chacun de ses coins. Dans combien de coins trouves-tu un angle droit ?", "4", "Les quatre coins d’une feuille de cahier sont des angles droits, comme ceux de tout rectangle : c’est sa définition."),
    q("m-p5-fi-4", "Un carré est-il un rectangle ?", ["oui", "non"], "oui", "Un rectangle est un quadrilatère à quatre angles droits. Un carré en a quatre : c’est donc un rectangle, en plus d’avoir ses côtés égaux."),
    q("m-p5-fi-5", "Une figure a quatre côtés égaux mais aucun angle droit. C’est…", ["un carré", "un losange", "un rectangle"], "un losange", "Quatre côtés égaux sans angle droit : c’est exactement la définition du losange."),
    e("m-p5-fi-6", "Un cercle a un rayon de 4 cm. Combien mesure son diamètre, en centimètres ?", "8", "Le diamètre vaut deux rayons : 4 × 2 = 8 cm."),
    q("m-p5-fi-7", "Quelle est la différence entre un cercle et un disque ?", ["le cercle est la ligne, le disque la surface", "le disque est plus grand", "il n’y en a pas"], "le cercle est la ligne, le disque la surface", "Le cercle est le tour ; le disque comprend aussi tout l’intérieur."),
    q("m-p5-fi-8", "Combien de côtés a un quadrilatère ?", ["3", "4", "5"], "4", "« Quadri » veut dire quatre. Carrés, rectangles et losanges sont tous des quadrilatères."),
  ],
};

const perpendiculaires: Lecon = {
  code: "m-p5-perpendiculaires",
  matiere: "maths",
  periode: 5,
  titre: "Perpendiculaires et parallèles",
  reference:
    "Reconnaître et utiliser la notion de perpendicularité ; reconnaître et utiliser la notion de parallélisme ; utiliser les outils géométriques usuels : règle, règle graduée, équerre et compas.",
  minutes: 25,
  cours: [
    {
      texte: [
        "Deux mots, deux outils, et deux idées qu’il faut pouvoir distinguer les yeux fermés.",
      ],
    },
    {
      titre: "Perpendiculaires",
      texte: [
        "Deux droites sont **perpendiculaires** quand elles se croisent en formant un angle droit.",
        "L’outil, c’est l’**équerre** : on pose son coin sur le point de croisement, et on regarde si les deux droites suivent les deux bords.",
        "On le marque sur le dessin par un petit carré à l’endroit du croisement.",
        "Les deux côtés d’un coin de feuille sont perpendiculaires. Le mur et le sol aussi.",
      ],
      regle: "Perpendiculaires = elles se croisent à angle droit. L’outil est l’équerre.",
    },
    {
      titre: "Parallèles",
      texte: [
        "Deux droites sont **parallèles** quand elles ne se croisent jamais, même si on les prolonge très loin. Elles gardent toujours le même écart.",
        "Les deux rails d’une voie ferrée sont parallèles. Les lignes d’un cahier aussi.",
        "Pour vérifier, on mesure l’écart en deux endroits différents : s’il est le même, elles sont parallèles.",
      ],
      regle: "Parallèles = elles ne se rencontrent jamais et gardent le même écart.",
    },
    {
      titre: "Une remarque utile",
      texte: [
        "Si deux droites sont toutes les deux perpendiculaires à une même troisième, alors elles sont parallèles entre elles.",
        "C’est ce qui fait que les quatre côtés d’un rectangle tiennent ensemble : les deux longueurs sont perpendiculaires à la même largeur, donc elles sont parallèles.",
      ],
    },
    {
      titre: "Les outils, et à quoi ils servent",
      texte: [
        "La **règle** trace des traits droits. La **règle graduée** mesure et reporte des longueurs.",
        "L’**équerre** vérifie et trace des angles droits.",
        "Le **compas** trace des cercles, et sert aussi à reporter une longueur sans la mesurer.",
      ],
      regle: "angle droit → équerre. Cercle ou report de longueur → compas.",
    },
  ],
  exemples: [
    {
      enonce: "Dans un rectangle ABCD, que peut-on dire des côtés AB et CD ? Et de AB et BC ?",
      etapes: [
        "AB et CD sont les deux côtés opposés : ils ne se croisent pas et gardent le même écart.",
        "Donc AB et CD sont parallèles.",
        "AB et BC se rejoignent au sommet B, et l’angle y est droit.",
        "Donc AB et BC sont perpendiculaires.",
      ],
      resultat: "AB et CD parallèles · AB et BC perpendiculaires",
    },
  ],
  exercices: [
    q("m-p5-pp-1", "Deux droites qui se croisent en formant un angle droit sont…", ["parallèles", "perpendiculaires"], "perpendiculaires", "Se croiser à angle droit, c’est la définition de perpendiculaires."),
    q("m-p5-pp-2", "Deux droites qui ne se croisent jamais sont…", ["parallèles", "perpendiculaires"], "parallèles", "Elles gardent toujours le même écart, comme les rails d’une voie ferrée."),
    q("m-p5-pp-3", "Quel instrument vérifie que deux droites sont perpendiculaires ?", ["la règle graduée", "l’équerre", "le compas"], "l’équerre", "On pose le coin de l’équerre sur le croisement et on regarde si les deux droites suivent les bords."),
    q("m-p5-pp-4", "Dans un rectangle, les côtés opposés sont…", ["parallèles", "perpendiculaires"], "parallèles", "Ils ne se croisent pas et gardent le même écart. Les côtés qui se touchent, eux, sont perpendiculaires."),
    q("m-p5-pp-5", "Deux droites sont perpendiculaires à une même troisième. Entre elles, elles sont…", ["parallèles", "perpendiculaires"], "parallèles", "C’est la remarque qui fait tenir un rectangle : deux perpendiculaires à la même droite sont parallèles."),
    q("m-p5-pp-6", "Pour dessiner une roue bien ronde sur ta feuille, quel instrument prends-tu ?", ["la règle graduée", "l’équerre", "le compas"], "le compas", "Le compas garde le même écartement entre sa pointe et sa mine : tous les points tracés sont à la même distance du centre. C’est exactement la définition du cercle."),
    q("m-p5-pp-7", "Les lignes d’une feuille de cahier sont…", ["parallèles", "perpendiculaires"], "parallèles", "Elles gardent le même écart sur toute la page et ne se rencontrent jamais."),
    q("m-p5-pp-8", "Comment reporter une longueur sans la mesurer ?", ["avec le compas", "avec l’équerre", "c’est impossible"], "avec le compas", "On écarte le compas à la longueur voulue, puis on le repose ailleurs. Aucun nombre n’est nécessaire."),
  ],
};

const symetrie: Lecon = {
  code: "m-p5-symetrie",
  matiere: "maths",
  periode: 5,
  titre: "La symétrie axiale",
  reference:
    "Reconnaître si une figure possède un ou plusieurs axes de symétrie ; compléter une figure pour la rendre symétrique par rapport à une droite donnée ; construire, sur papier quadrillé, la figure symétrique d’une figure donnée.",
  minutes: 30,
  cours: [
    {
      texte: [
        "Une figure a un axe de symétrie si, en la pliant le long d’une droite, les deux moitiés se superposent exactement. C’est le test du pliage, et il n’y en a pas de meilleur.",
      ],
    },
    {
      titre: "Le test du pliage",
      texte: [
        "Découpe la figure, plie-la le long de la droite. Si les deux parties se recouvrent sans dépasser, la droite est un axe de symétrie.",
        "Si tu ne peux pas découper, imagine un miroir posé sur la droite : ce que tu verrais dans le miroir doit être exactement l’autre moitié.",
      ],
      regle: "Axe de symétrie = on peut plier dessus et les deux moitiés se superposent.",
    },
    {
      titre: "Combien d’axes ?",
      texte: [
        "Un carré en a **quatre** : les deux médianes et les deux diagonales.",
        "Un rectangle non carré en a **deux** : les deux médianes seulement. Ses diagonales n’en sont pas — plie un rectangle en diagonale, tu verras que ça dépasse.",
        "Un cercle en a une infinité : toutes les droites qui passent par son centre.",
        "Un triangle équilatéral en a trois, un triangle isocèle un seul, et un triangle quelconque aucun.",
      ],
      regle:
        "Attention au rectangle : les diagonales d’un rectangle ne sont **pas** des axes de symétrie.",
    },
    {
      titre: "Construire le symétrique sur du quadrillage",
      texte: [
        "Point par point, en comptant les carreaux. Si un point est à 3 carreaux à gauche de l’axe, son symétrique est à 3 carreaux à droite, sur la même ligne.",
        "Un point posé **sur** l’axe ne bouge pas : il est son propre symétrique.",
        "Quand tous les points sont placés, on relie dans le même ordre.",
      ],
      regle:
        "Même distance à l’axe, de l’autre côté, sur la même ligne. On compte les carreaux, on ne devine pas.",
    },
    {
      titre: "Autour de nous",
      texte: [
        "Un papillon, un visage, une feuille d’arbre, beaucoup de bâtiments : la symétrie est partout, et c’est ce qui nous les fait trouver réguliers.",
        "Les lettres majuscules aussi : A, H, M, T, U, V, W, Y ont un axe vertical ; B, C, D, E, K ont un axe horizontal ; H, I, O, X en ont deux.",
      ],
    },
  ],
  exemples: [
    {
      enonce: "Combien d’axes de symétrie a un rectangle qui n’est pas un carré ?",
      etapes: [
        "Le pli vertical au milieu : les deux moitiés se superposent. C’est un axe.",
        "Le pli horizontal au milieu : ça marche aussi. Deuxième axe.",
        "Le pli en diagonale : les coins ne tombent pas l’un sur l’autre, ça dépasse. Ce n’est pas un axe.",
      ],
      resultat: "2 axes",
    },
  ],
  exercices: [
    e("m-p5-sy-1", "Combien un carré a-t-il d’axes de symétrie ?", "4", "Les deux médianes et les deux diagonales : quatre plis possibles."),
    e("m-p5-sy-2", "Combien un rectangle non carré a-t-il d’axes de symétrie ?", "2", "Seulement les deux médianes. Le pli en diagonale ne superpose pas les deux moitiés."),
    q("m-p5-sy-3", "Les diagonales d’un rectangle sont-elles des axes de symétrie ?", ["oui", "non"], "non", "Plie en diagonale un rectangle qui n’est pas un carré : les coins ne se recouvrent pas. Ses diagonales ne sont donc pas des axes de symétrie."),
    q("m-p5-sy-4", "Laquelle de ces lettres majuscules a deux moitiés qui se superposent quand on la plie le long d’un trait vertical ?", ["R", "U", "J"], "U", "Le U se plie en deux le long d’un trait vertical qui passe par son milieu : c’est un axe de symétrie. R et J n’ont aucun axe de symétrie."),
    e("m-p5-sy-5", "Combien un triangle équilatéral a-t-il d’axes de symétrie ?", "3", "Un axe par sommet, qui passe par le milieu du côté opposé."),
    q("m-p5-sy-6", "Un point est à 3 carreaux à gauche de l’axe. Son symétrique est…", ["à 3 carreaux à droite", "à 6 carreaux à droite", "sur l’axe"], "à 3 carreaux à droite", "Même distance à l’axe, de l’autre côté, sur la même ligne."),
    q("m-p5-sy-7", "Où se trouve le symétrique d’un point posé sur l’axe ?", ["au même endroit", "de l’autre côté", "nulle part"], "au même endroit", "Un point sur l’axe ne bouge pas : il est son propre symétrique."),
    q("m-p5-sy-8", "Lequel a un axe de symétrie ?", ["un papillon", "une coquille d’escargot", "la lettre F"], "un papillon", "Ses deux ailes se superposent quand on plie le long du corps. La coquille de l’escargot est une spirale, et le F ne se plie sur lui-même dans aucun sens."),
  ],
};

const solides: Lecon = {
  code: "m-p5-solides",
  matiere: "maths",
  periode: 5,
  titre: "Les solides",
  reference:
    "Nommer un cube, une boule, un pavé, un cône, une pyramide, un cylindre et un prisme droit ; connaître le nombre et la nature des faces d’un cube ou d’un pavé ; reconnaître et construire un patron d’un cube.",
  minutes: 30,
  cours: [
    {
      texte: [
        "Jusqu’ici on travaillait à plat. Les solides sont des objets en trois dimensions : ils ont une épaisseur, on peut les tenir dans la main.",
      ],
    },
    {
      titre: "Trois mots pour décrire",
      texte: [
        "Une **face** est une surface plate du solide. Une **arête** est le trait où deux faces se rencontrent. Un **sommet** est un coin, là où les arêtes se rejoignent.",
        "Un cube a 6 faces, 12 arêtes et 8 sommets. Compte-les sur une boîte : tu les retrouves tous.",
      ],
      regle: "face = une surface · arête = un trait · sommet = un coin.",
    },
    {
      titre: "Les solides à connaître",
      texte: [
        "Le **cube** : 6 faces carrées, toutes identiques. Un dé.",
        "Le **pavé droit** : 6 faces rectangulaires (parfois carrées). Une boîte à chaussures.",
        "La **pyramide** : une base, et des faces triangulaires qui montent vers un sommet unique.",
        "Le **prisme droit** : deux bases identiques et parallèles, reliées par des rectangles. Un prisme à base triangulaire ressemble à une tente, ou à un Toblerone.",
        "Le **cylindre** : deux disques et une surface roulée. Une boîte de conserve.",
        "Le **cône** : un disque et une pointe. Un cornet de glace.",
        "La **boule** : aucune face plate, aucun sommet, aucune arête. Un ballon.",
      ],
    },
    {
      titre: "Le patron",
      texte: [
        "Un patron, c’est le solide déplié à plat : ce qu’on découperait dans du carton pour le reconstruire en pliant.",
        "Le patron d’un cube compte six carrés reliés entre eux — mais attention, tous les assemblages de six carrés ne se replient pas en cube. Il faut vérifier en pliant mentalement, ou en découpant pour de vrai.",
      ],
      regle: "Le patron d’un cube a exactement six carrés, tous de la même taille.",
    },
  ],
  exemples: [
    {
      enonce: "Un solide a deux bases triangulaires identiques et trois faces rectangulaires. Qu’est-ce que c’est, et combien a-t-il de faces ?",
      etapes: [
        "Deux bases identiques et parallèles reliées par des rectangles : c’est un prisme droit.",
        "Les bases sont des triangles : c’est un prisme à base triangulaire.",
        "Faces : 2 bases + 3 rectangles = 5 faces.",
      ],
      resultat: "un prisme droit à base triangulaire · 5 faces",
    },
  ],
  exercices: [
    e("m-p5-so-1", "Tu peins chaque face d’un cube d’une couleur différente. Combien de couleurs te faut-il ?", "6", "Un cube a six faces, comme un dé : une couleur par face, donc six couleurs."),
    e("m-p5-so-2", "On colle une gommette sur chaque coin d’une boîte en forme de cube. Combien faut-il de gommettes ?", "8", "Les coins du cube sont ses sommets : quatre en haut, quatre en bas. Il faut donc 8 gommettes."),
    e("m-p5-so-3", "Combien d’arêtes a un cube ?", "12", "Quatre en haut, quatre en bas, et quatre verticales : 12 arêtes."),
    q("m-p5-so-4", "Tu poses un cube sur une feuille et tu dessines le tour de la face du dessous. Quelle figure obtiens-tu ?", ["un carré", "un rectangle non carré", "un triangle"], "un carré", "Toutes les faces d’un cube sont des carrés identiques : le tour de n’importe laquelle est un carré. C’est ce qui distingue le cube du pavé droit."),
    q("m-p5-so-5", "Quel solide a la même forme qu’une boîte de céréales ?", ["le cube", "le pavé droit", "la pyramide"], "le pavé droit", "Une boîte de céréales a six faces rectangulaires, qui ne sont pas toutes des carrés : c’est un pavé droit. Ce serait un cube seulement si ses six faces étaient des carrés identiques."),
    q("m-p5-so-6", "Quel solide a deux faces plates en forme de disque, reliées par une surface arrondie ?", ["la boule", "le cylindre", "le cône"], "le cylindre", "Deux disques et une surface roulée entre les deux : c’est le cylindre, comme une boîte de conserve. Le cône n’a qu’un disque, et la boule n’a aucune face plate."),
    e("m-p5-so-7", "Combien de carrés compte le patron d’un cube ?", "6", "Le patron est le cube déplié : un carré par face, donc six carrés de même taille."),
    q("m-p5-so-8", "Un solide fait de deux bases identiques reliées par des rectangles s’appelle…", ["un prisme droit", "une pyramide", "un cône"], "un prisme droit", "La pyramide monte vers un sommet unique ; le prisme garde la même base d’un bout à l’autre."),
  ],
};

const algebre: Lecon = {
  code: "m-p5-nombre-cache",
  matiere: "maths",
  periode: 5,
  titre: "Le nombre caché",
  reference:
    "Trouver le nombre manquant dans une égalité à trous ; déterminer la valeur d’un nombre inconnu en utilisant un symbole ou une lettre pour le représenter ; exécuter un programme de calcul ; identifier et formuler une règle pour poursuivre une suite de nombres.",
  minutes: 25,
  cours: [
    {
      texte: [
        "On peut raisonner sur un nombre sans le connaître. C’est une idée puissante, et c’est le début de ce qu’on appellera plus tard l’algèbre.",
      ],
    },
    {
      titre: "Le signe = veut dire « autant que »",
      texte: [
        "On l’utilise souvent comme s’il voulait dire « ça donne » : 3 + 4 = 7. Mais son vrai sens est « c’est la même quantité des deux côtés ».",
        "Du coup on peut écrire 178 − ? = 6 × 8. Les deux côtés doivent peser la même chose.",
        "6 × 8 = 48. Donc 178 − ? = 48. Le nombre caché est 178 − 48 = 130.",
      ],
      regle:
        "Le signe = est une balance, pas une flèche. Ce qui est à gauche pèse autant que ce qui est à droite.",
    },
    {
      titre: "Trouver un nombre caché",
      texte: [
        "On peut remonter l’opération à l’envers.",
        "? + 17 = 45 : on retire 17 des deux côtés, donc ? = 45 − 17 = 28.",
        "? × 6 = 54 : on divise, donc ? = 54 ÷ 6 = 9.",
        "Et on vérifie toujours en remettant sa réponse dans l’égalité de départ.",
      ],
      regle: "Pour retrouver un nombre caché, fais l’opération inverse. Puis vérifie.",
    },
    {
      titre: "Un programme de calcul",
      texte: [
        "Un programme de calcul est une suite d’instructions : « choisis un nombre ; ajoute 2 ; multiplie par 4 ; écris le résultat. »",
        "Avec 5 : 5 + 2 = 7, puis 7 × 4 = 28.",
        "L’ordre compte énormément. Si on multipliait d’abord, on trouverait 22 au lieu de 28.",
      ],
    },
    {
      titre: "Continuer une suite",
      texte: [
        "Devant une suite de nombres, la question est toujours : qu’est-ce qui se passe entre deux nombres voisins ?",
        "3 ; 7 ; 11 ; 15 : on ajoute 4 chaque fois. La suite continue par 19.",
        "1 ; 2 ; 4 ; 8 ; 16 : on double chaque fois. La suite continue par 32.",
        "80 ; 85 ; 83 ; 88 ; 86 : là, deux règles s’alternent — on ajoute 5, puis on retire 2. Ça continue par 91.",
      ],
      regle: "Cherche l’écart entre deux nombres voisins, puis vérifie que la même règle marche partout.",
    },
  ],
  exemples: [
    {
      enonce: "Trouve le nombre caché : 178 − ? = 6 × 8",
      etapes: [
        "Je calcule d’abord ce que je peux : 6 × 8 = 48.",
        "L’égalité devient 178 − ? = 48.",
        "Pour retrouver ce qu’on a retiré : 178 − 48 = 130.",
        "Vérification : 178 − 130 = 48, et 6 × 8 = 48. Les deux côtés pèsent pareil.",
      ],
      resultat: "130",
    },
  ],
  exercices: [
    e("m-p5-nc-1", "Trouve le nombre caché : ? + 17 = 45", "28", "On fait l’opération inverse : 45 − 17 = 28. Vérification : 28 + 17 = 45."),
    e("m-p5-nc-2", "Trouve le nombre caché : ? × 6 = 54", "9", "On divise : 54 ÷ 6 = 9. Vérification : 9 × 6 = 54."),
    e("m-p5-nc-3", "Trouve le nombre caché : 178 − ? = 48", "130", "On cherche ce qu’on a retiré : 178 − 48 = 130."),
    e("m-p5-nc-4", "Trouve le nombre caché : 100 − ? = 5 × 9", "55", "D’abord 5 × 9 = 45. Puis 100 − 45 = 55."),
    e("m-p5-nc-5", "Programme : choisis 5 ; ajoute 2 ; multiplie par 4. Quel résultat ?", "28", "5 + 2 = 7, puis 7 × 4 = 28. L’ordre compte : multiplier d’abord donnerait 22."),
    e("m-p5-nc-6", "Continue la suite : 3 ; 7 ; 11 ; 15 ; …", "19", "On ajoute 4 à chaque fois. Après 15 vient 19."),
    e("m-p5-nc-7", "Continue la suite : 1 ; 2 ; 4 ; 8 ; 16 ; …", "32", "Chaque nombre est le double du précédent. Après 16 vient 32."),
    e("m-p5-nc-8", "Des tee-shirts coûtent 12 € et la livraison 5 €. Combien coûtent 3 tee-shirts livrés, en euros ?", "41", "3 × 12 = 36 €, plus 5 € de livraison : 41 €. La livraison ne se multiplie pas — c’est une part fixe."),
  ],
};

const hasard: Lecon = {
  code: "m-p5-hasard",
  matiere: "maths",
  periode: 5,
  titre: "Le hasard : certain, possible, impossible",
  reference:
    "Identifier des expériences aléatoires ; identifier toutes les issues possibles ; comprendre et utiliser le vocabulaire « impossible », « possible », « certain », « probable », « peu probable », « une chance sur deux » ; reconnaître des situations d’équiprobabilité.",
  minutes: 25,
  cours: [
    {
      texte: [
        "Quand on lance un dé, on ne peut pas dire à l’avance ce qui sortira. On appelle ça une expérience **aléatoire** — du hasard.",
        "Ce qu’on peut faire, en revanche, c’est dire quels résultats sont possibles, et lesquels ont plus de chances que d’autres.",
      ],
    },
    {
      titre: "Trois mots à ne pas confondre",
      texte: [
        "**Impossible** : ça ne peut pas arriver. Obtenir 7 avec un dé à six faces.",
        "**Certain** : ça arrivera forcément. Obtenir un nombre entre 1 et 6 avec ce même dé.",
        "**Possible** : ça peut arriver, ou pas. Obtenir 4.",
        "Entre les deux extrêmes, on gradue : un résultat qui a moins d’une chance sur deux est **peu probable**, un résultat qui en a plus est **probable**.",
      ],
      regle: "impossible → peu probable → une chance sur deux → probable → certain.",
    },
    {
      titre: "Lister toutes les issues",
      texte: [
        "Avant de parler de chances, on liste tout ce qui peut arriver. Avec un dé : 1, 2, 3, 4, 5, 6 — six issues.",
        "Avec une pièce : pile ou face — deux issues.",
        "« Obtenir un nombre pair avec un dé » : les issues qui marchent sont 2, 4 et 6, soit trois sur six. C’est une chance sur deux.",
      ],
    },
    {
      titre: "Attention aux deux issues",
      texte: [
        "Deux résultats possibles ne veulent **pas** dire une chance sur deux.",
        "Dans un sac avec 9 billes rouges et 1 bille verte, il y a deux issues — rouge ou verte — mais tirer une verte est peu probable.",
        "Quand toutes les issues ont vraiment la même chance, comme sur un dé bien fait, on dit qu’elles sont équiprobables.",
      ],
      regle:
        "Deux issues possibles ≠ une chance sur deux. Il faut que les issues soient également probables, et ça ne va pas de soi.",
    },
  ],
  exemples: [
    {
      enonce: "Dans un sac, 3 billes rouges et 5 billes bleues. Est-il probable ou peu probable de tirer une rouge ?",
      etapes: [
        "Nombre total de billes : 3 + 5 = 8.",
        "Les rouges sont 3 sur 8, donc moins de la moitié.",
        "Moins d’une chance sur deux : c’est peu probable.",
      ],
      resultat: "peu probable",
    },
  ],
  exercices: [
    q("m-p5-ha-1", "Obtenir 7 en lançant un dé à six faces, c’est…", ["impossible", "possible", "certain"], "impossible", "Le dé ne porte que les nombres de 1 à 6. Le 7 n’existe pas dessus."),
    q("m-p5-ha-2", "Obtenir un nombre entre 1 et 6 en lançant un dé à six faces, c’est…", ["impossible", "possible", "certain"], "certain", "Toutes les faces portent un nombre de 1 à 6 : ça arrivera forcément."),
    e("m-p5-ha-3", "Combien d’issues possibles quand on lance une pièce ?", "2", "Il n’y a que deux résultats possibles, pile ou face : deux issues, et elles ont la même chance."),
    e("m-p5-ha-4", "Combien d’issues possibles quand on lance un dé à six faces ?", "6", "Les six faces : 1, 2, 3, 4, 5, 6."),
    q("m-p5-ha-5", "Obtenir un nombre pair avec un dé à six faces, c’est…", ["une chance sur deux", "peu probable", "impossible"], "une chance sur deux", "Les pairs sont 2, 4 et 6 : trois issues sur six, donc la moitié."),
    q("m-p5-ha-6", "Un sac contient 9 billes rouges et 1 verte. Tirer une verte est…", ["peu probable", "une chance sur deux", "certain"], "peu probable", "Une seule chance sur dix. Le fait qu’il n’y ait que deux couleurs ne rend pas les deux également probables."),
    q("m-p5-ha-7", "Dans un sac de 7 jetons verts et 2 jetons jaunes, tirer un jeton jaune est…", ["probable", "peu probable", "impossible"], "peu probable", "2 sur 9, donc bien moins d’une chance sur deux."),
    q("m-p5-ha-8", "Deux résultats possibles, cela veut-il dire une chance sur deux chacun ?", ["oui, toujours", "non, pas toujours"], "non, pas toujours", "Il faut que les deux issues aient réellement la même chance. Neuf billes rouges contre une verte, c’est deux issues mais pas une chance sur deux."),
  ],
};

export const maths: Lecon[] = [
  nombresQuatreChiffres,
  comparerNombres,
  fractionsPartage,
  fractionQuantite,
  additionSoustraction,
  problemesMethode,
  fractionsSuperieures,
  fractionsCalcul,
  fractionsDecimales,
  multiplicationPosee,
  multiples,
  longueurs,
  grandsNombres,
  ecritureVirgule,
  comparerDecimaux,
  divisionPosee,
  massesContenances,
  perimetre,
  aires,
  angles,
  duree,
  proportionnalite,
  calculMental,
  donnees,
  figuresPlanes,
  perpendiculaires,
  symetrie,
  solides,
  algebre,
  hasard,
];
