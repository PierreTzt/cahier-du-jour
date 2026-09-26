/**
 * Calcul mental — les tables, les compléments, les multiplications.
 *
 * Sept rituels, quinze minutes chaque matin, à l'ardoise. Une fiche donne **les dix questions dans l'ordre où on les dicte, et les dix réponses**. La progression tient au rang de la fiche dans sa série : la première est la plus simple, la dernière la plus exigeante.
 *
 * Ce qu'une fiche donne, et pourquoi : voir `lib/fiches/types.ts`. En deux
 * mots — le matériel exact, le corrigé quand il y en a un, et ce qu'on
 * regarde. Un adulte qui l'ouvre ne doit plus rien avoir à chercher.
 *
 * **Réservé aux adultes** : ces fiches portent les corrigés.
 *
 * ## Comment on s'en sert, le matin
 *
 * On dicte la question à voix haute, une seule fois, puis on la répète si on
 * la demande. L'enfant écrit sur l'ardoise, il montre, on efface. Question
 * suivante. Effacer entre chaque compte autant que le reste : rien ne
 * s'accumule sous les yeux, et une question qui a résisté ne reste pas
 * affichée à côté des neuf autres.
 *
 * À la fin, on reprend seulement celles qui ont hésité — deux, trois au plus.
 * On les redit, on redonne le chemin, et on s'arrête là. On ne compte pas les
 * bonnes réponses, on ne les annonce pas, on n'en garde pas la trace : ce qui
 * se garde, c'est la question à reposer demain.
 *
 * Les questions sont écrites comme on les dit. « 7 × 8 » se prononce « sept
 * fois huit », « le double de 45 », « combien manque-t-il à 67 pour aller
 * à 100 ». Les nombres écrits ici sont pour l'adulte qui lit, pas pour
 * l'enfant qui écoute.
 *
 * Les périodes 1 et 2 s'en tiennent aux nombres de quatre chiffres au plus,
 * comme le demande le programme du cycle 3 ; les nombres plus grands et les
 * premiers décimaux arrivent dans le dernier tiers de chaque série.
 *
 * Rien de tout ceci n'a été relu par un enseignant. Ça doit l'être.
 */

import { f, type Fiche } from "./types";

export const calculNombres: Fiche[] = [
  /* ---------------------------------------------------------------- */
  /* Les tables de multiplication — 14 fiches                          */
  /* ---------------------------------------------------------------- */

  f(
    "cm-tables-01",
    "Les tables de multiplication",
    "Les tables de 2, de 5 et de 10",
    [
      "On dicte « deux fois quatre », on laisse écrire, il montre l’ardoise, on efface. Dix fois.",
      "Ces trois tables se comptent : de 2 en 2, de 5 en 5, de 10 en 10. Quand une question résiste, on compte ensemble à voix haute au lieu de redonner la réponse — le chemin sert la fois suivante, le résultat non.",
    ],
    ["2 × 4", "5 × 3", "10 × 7", "2 × 8", "5 × 6", "10 × 4", "2 × 9", "5 × 8", "10 × 9", "2 × 7"],
    ["8", "15", "70", "16", "30", "40", "18", "40", "90", "14"],
    "Trois tables qui se comptent : on regarde surtout s’il compte encore sur ses doigts ou s’il donne le résultat d’un coup. Les deux marchent, le second est plus rapide, et il vient avec le temps.",
  ),

  f(
    "cm-tables-02",
    "Les tables de multiplication",
    "Les tables de 3 et de 4",
    [
      "Même marche à suivre : une question dictée, l’ardoise levée, on efface.",
      "La table de 4 se fabrique en doublant deux fois — 4 × 7, c’est 7 doublé (14), puis doublé encore (28). On le dit une fois au début, et on y renvoie si une question s’arrête.",
    ],
    ["3 × 4", "4 × 5", "3 × 7", "4 × 3", "3 × 9", "4 × 7", "3 × 6", "4 × 9", "3 × 8", "4 × 8"],
    ["12", "20", "21", "12", "27", "28", "18", "36", "24", "32"],
    "S’il s’arrête sur 3 × 7 ou 4 × 7, c’est le voisinage de 7 qui manque encore, pas la table entière : on repassera par là demain.",
  ),

  f(
    "cm-tables-03",
    "Les tables de multiplication",
    "La table de 6",
    [
      "On annonce que toutes les questions viennent de la même table. Savoir d’avance ce qui arrive enlève une part de l’effort.",
      "La dernière est l’avant-dernière retournée : 6 × 9 puis 9 × 6. On le dit après coup, une fois l’ardoise levée — une multiplication se lit dans les deux sens, et ça divise le travail de mémoire par deux.",
    ],
    ["6 × 2", "6 × 5", "6 × 3", "6 × 10", "6 × 4", "6 × 6", "6 × 7", "6 × 8", "6 × 9", "9 × 6"],
    ["12", "30", "18", "60", "24", "36", "42", "48", "54", "54"],
    "Si 9 × 6 demande un nouveau calcul après 6 × 9, c’est que le retournement n’est pas encore acquis. C’est le point à travailler, plus que la table elle-même.",
  ),

  f(
    "cm-tables-04",
    "Les tables de multiplication",
    "Les tables de 2 à 6, mélangées",
    [
      "Cette fois les tables arrivent dans le désordre : c’est là que ça se joue vraiment, puisqu’il faut choisir laquelle convoquer avant de répondre.",
      "On garde le même rythme, sans accélérer. S’il cherche, on attend sans commenter — le silence de l’adulte fait partie de l’exercice.",
    ],
    ["4 × 6", "3 × 8", "5 × 7", "6 × 9", "2 × 8", "6 × 5", "4 × 9", "3 × 7", "5 × 9", "6 × 8"],
    ["24", "24", "35", "54", "16", "30", "36", "21", "45", "48"],
    "Les deux premières donnent le même résultat, 24. S’il le remarque tout seul, c’est un signe que les tables commencent à se parler entre elles.",
  ),

  f(
    "cm-tables-05",
    "Les tables de multiplication",
    "La table de 7",
    [
      "Table annoncée à l’avance, dix questions, on efface entre chaque.",
      "7 × 8 = 56 est celle qui résiste le plus longtemps chez à peu près tout le monde. Si elle bloque, on donne le repère 56 = 7 × 8 et on passe : elle s’installera par répétition, pas par insistance.",
    ],
    ["7 × 2", "7 × 5", "7 × 3", "7 × 10", "7 × 4", "7 × 6", "7 × 8", "7 × 7", "7 × 9", "8 × 7"],
    ["14", "35", "21", "70", "28", "42", "56", "49", "63", "56"],
    "On note lesquelles sortent d’un coup et lesquelles passent par un détour (« 7 × 6, c’est 7 × 5 plus 7 »). Le détour est une bonne stratégie, pas un pis-aller.",
  ),

  f(
    "cm-tables-06",
    "Les tables de multiplication",
    "La table de 8",
    [
      "Même déroulé. On rappelle d’abord que 8, c’est doubler trois fois : 8 × 6, c’est 12, puis 24, puis 48.",
      "Les deux dernières sont la même question retournée. On le signale seulement après qu’il a répondu.",
    ],
    ["8 × 2", "8 × 5", "8 × 3", "8 × 10", "8 × 4", "8 × 6", "8 × 7", "8 × 8", "8 × 9", "9 × 8"],
    ["16", "40", "24", "80", "32", "48", "56", "64", "72", "72"],
    "S’il emprunte le doublement pour les grandes (8 × 7, 8 × 9), c’est une méthode qui tient : on la laisse vivre le temps qu’il faut, elle s’efface d’elle-même quand la table est en mémoire.",
  ),

  f(
    "cm-tables-07",
    "Les tables de multiplication",
    "La table de 9",
    [
      "Avant de commencer, on montre le repère : 9 × 6, c’est 10 × 6 moins 6, donc 60 − 6 = 54. Ce chemin-là marche pour toute la table.",
      "On laisse le repère écrit sur un coin de l’ardoise pendant la séance, et on efface seulement les réponses.",
    ],
    ["9 × 2", "9 × 5", "9 × 3", "9 × 10", "9 × 4", "9 × 6", "9 × 7", "9 × 8", "9 × 9", "7 × 9"],
    ["18", "45", "27", "90", "36", "54", "63", "72", "81", "63"],
    "Le repère « fois 10, moins le nombre » est-il employé spontanément ? S’il y revient sans qu’on le rappelle, la table de 9 est en train de se poser.",
  ),

  f(
    "cm-tables-08",
    "Les tables de multiplication",
    "Les tables de 7, de 8 et de 9, mélangées",
    [
      "Les trois tables qui coûtent le plus, dans le désordre. On prévient : « ce sont les trois grandes, on prend le temps qu’il faut ».",
      "On peut allonger le temps entre deux questions plutôt que raccourcir la liste. Dix questions posées lentement valent mieux que six posées vite.",
    ],
    ["7 × 4", "9 × 6", "8 × 7", "9 × 8", "7 × 7", "8 × 4", "9 × 9", "7 × 6", "8 × 8", "9 × 7"],
    ["28", "54", "56", "72", "49", "32", "81", "42", "64", "63"],
    "S’il hésite sur les tables de 7 et de 8, c’est là qu’il faut revenir : deux ou trois de ces multiplications, reprises chaque matin, suffisent souvent à les fixer.",
  ),

  f(
    "cm-tables-09",
    "Les tables de multiplication",
    "Toutes les tables, mélangées",
    [
      "Toutes tables confondues, dans le désordre, sans annonce préalable.",
      "On ne chronomètre pas. Le but n’est pas la vitesse mais le fait de retrouver le bon résultat sans repartir de zéro.",
    ],
    ["6 × 7", "4 × 8", "9 × 5", "8 × 6", "7 × 3", "9 × 4", "6 × 6", "8 × 9", "7 × 8", "9 × 9"],
    ["42", "32", "45", "48", "21", "36", "36", "72", "56", "81"],
    "Deux résultats valent 36 dans cette liste (9 × 4 et 6 × 6). Un même nombre arrive par plusieurs chemins : c’est une remarque à faire ensemble si l’occasion se présente.",
  ),

  f(
    "cm-tables-10",
    "Les tables de multiplication",
    "Le facteur qui manque",
    [
      "On change la forme de la question : « sept fois combien font cinquante-six ? ». C’est la même table, prise par l’autre bout.",
      "Il écrit seulement le nombre manquant. Si la question déroute au début, on montre la première avec lui, puis on le laisse.",
    ],
    [
      "7 fois combien font 56 ?",
      "6 fois combien font 42 ?",
      "combien de fois 4 pour faire 36 ?",
      "8 fois combien font 64 ?",
      "5 fois combien font 45 ?",
      "combien de fois 6 pour faire 54 ?",
      "9 fois combien font 27 ?",
      "4 fois combien font 28 ?",
      "combien de fois 8 pour faire 48 ?",
      "7 fois combien font 63 ?",
    ],
    ["8", "7", "9", "8", "9", "9", "3", "7", "6", "9"],
    "Cherche-t-il en essayant des nombres au hasard, ou remonte-t-il directement sa table ? Les deux finissent par trouver ; le second signale que la table est disponible dans les deux sens.",
  ),

  f(
    "cm-tables-11",
    "Les tables de multiplication",
    "De la table à la division",
    [
      "« Cinquante-six divisé par sept. » On explique d’abord le lien : chercher 56 ÷ 7, c’est chercher 7 fois combien font 56. C’est la fiche précédente, écrite autrement.",
      "Toutes les divisions tombent juste. On le dit à l’avance : il n’y a pas de piège, pas de reste à trouver.",
    ],
    ["56 ÷ 7", "42 ÷ 6", "36 ÷ 4", "63 ÷ 9", "48 ÷ 8", "45 ÷ 5", "72 ÷ 8", "54 ÷ 6", "28 ÷ 7", "81 ÷ 9"],
    ["8", "7", "9", "7", "6", "9", "9", "9", "4", "9"],
    "Si le signe ÷ inquiète alors que « sept fois combien » passait bien la veille, c’est l’écriture qui gêne, pas le calcul. On le dit, et on repasse par la formulation parlée.",
  ),

  f(
    "cm-tables-12",
    "Les tables de multiplication",
    "Les carrés, et leurs voisins",
    [
      "Un carré, c’est un nombre multiplié par lui-même. On donne les cinq premiers d’affilée, puis leurs voisins immédiats.",
      "La dernière, 20 × 20, se calcule : 2 × 2 = 4, et deux zéros à la suite. On la laisse chercher avant de donner le chemin.",
    ],
    ["5 × 5", "6 × 6", "7 × 7", "8 × 8", "9 × 9", "6 × 7", "7 × 8", "8 × 9", "10 × 10", "20 × 20"],
    ["25", "36", "49", "64", "81", "42", "56", "72", "100", "400"],
    "Les carrés servent d’ancrage : de 7 × 7 = 49 on atteint 7 × 8 en ajoutant 7. S’il s’en sert spontanément, il a trouvé un appui qui lui resservira longtemps.",
  ),

  f(
    "cm-tables-13",
    "Les tables de multiplication",
    "Les tables et les dizaines",
    [
      "On pose la règle une fois : 7 × 40, c’est 7 × 4 et un zéro à la suite. Puis on dicte.",
      "S’il oublie un zéro, on ne corrige pas le résultat directement : on redit la question et on lui demande combien font 7 × 4, puis ce qu’il faut en faire.",
    ],
    ["7 × 40", "6 × 30", "8 × 50", "9 × 20", "4 × 70", "3 × 300", "6 × 400", "8 × 60", "7 × 200", "9 × 500"],
    ["280", "180", "400", "180", "280", "900", "2 400", "480", "1 400", "4 500"],
    "Les zéros oubliés se comptent à part des tables : ce sont deux choses différentes, et seule la seconde demande qu’on y revienne côté tables.",
  ),

  f(
    "cm-tables-14",
    "Les tables de multiplication",
    "Le grand mélange de fin d’année",
    [
      "Tout ce que la série a traversé, dans le désordre : produits, facteur manquant, division, dizaines.",
      "C’est la dernière fiche de la série. On peut lui dire que ce sont les questions de toute l’année réunies, et qu’il n’y a rien de nouveau dedans.",
    ],
    [
      "8 × 7",
      "54 ÷ 6",
      "9 fois combien font 72 ?",
      "6 × 8",
      "63 ÷ 7",
      "7 × 7",
      "4 fois combien font 36 ?",
      "9 × 6",
      "8 × 300",
      "72 ÷ 9",
    ],
    ["56", "9", "8", "48", "9", "49", "9", "54", "2 400", "8"],
    "Cette fiche montre surtout ce qui tient sans effort et ce qui demande encore un détour. Le détour n’est pas un problème ; on note seulement lesquelles, pour savoir par où reprendre.",
  ),

  /* ---------------------------------------------------------------- */
  /* Les doubles et les moitiés — 14 fiches                            */
  /* ---------------------------------------------------------------- */

  f(
    "cm-doubles-01",
    "Les doubles et les moitiés",
    "Les doubles et les moitiés jusqu’à 20",
    [
      "« Le double de six. » On laisse écrire, l’ardoise se lève, on efface.",
      "Doubler et prendre la moitié se répondent : le double de 8 fait 16, la moitié de 16 fait 8. On le montre une fois au tableau avec le premier couple de la liste.",
    ],
    [
      "le double de 6",
      "le double de 9",
      "la moitié de 10",
      "le double de 12",
      "la moitié de 16",
      "le double de 15",
      "la moitié de 18",
      "le double de 20",
      "la moitié de 14",
      "le double de 11",
    ],
    ["12", "18", "5", "24", "8", "30", "9", "40", "7", "22"],
    "Passer du double à la moitié demande de changer de sens ; c’est souvent là que ça accroche, plus que sur les nombres eux-mêmes. On regarde s’il se trompe de sens plutôt que de calcul.",
  ),

  f(
    "cm-doubles-02",
    "Les doubles et les moitiés",
    "Les doubles des dizaines rondes",
    [
      "Avec des dizaines rondes, doubler revient à doubler le chiffre des dizaines : le double de 30, c’est le double de 3 dizaines, donc 6 dizaines.",
      "On dit cette phrase une fois, puis on dicte sans la répéter à chaque question.",
    ],
    [
      "le double de 30",
      "le double de 50",
      "la moitié de 80",
      "le double de 40",
      "la moitié de 60",
      "le double de 70",
      "la moitié de 100",
      "le double de 90",
      "la moitié de 140",
      "le double de 80",
    ],
    ["60", "100", "40", "80", "30", "140", "50", "180", "70", "160"],
    "Le double de 70 fait franchir la centaine. Si c’est celle-là qui s’arrête, c’est le passage à 100 qui demande du travail, pas le doublement.",
  ),

  f(
    "cm-doubles-03",
    "Les doubles et les moitiés",
    "Les doubles jusqu’à 50",
    [
      "Que des doubles, aucune moitié : on annonce la couleur, l’attention se porte entièrement sur le calcul.",
      "Le chemin à rappeler : on double les dizaines, on double les unités, on assemble. Le double de 34, c’est 60 et 8, donc 68.",
    ],
    [
      "le double de 21",
      "le double de 25",
      "le double de 34",
      "le double de 45",
      "le double de 32",
      "le double de 48",
      "le double de 27",
      "le double de 36",
      "le double de 19",
      "le double de 43",
    ],
    ["42", "50", "68", "90", "64", "96", "54", "72", "38", "86"],
    "Quand les unités atteignent 5 ou plus, il y a une retenue à gérer (25, 45, 27, 48, 36). Si les nombres à petites unités passent et les autres non, c’est la retenue qu’on reprend.",
  ),

  f(
    "cm-doubles-04",
    "Les doubles et les moitiés",
    "Les moitiés jusqu’à 100",
    [
      "Que des moitiés, et tous les nombres sont pairs : la réponse tombe toujours juste, on peut le dire d’emblée.",
      "Le chemin : moitié des dizaines, moitié des unités. Pour 38, c’est 15 et 4, donc 19 — on montre celui-là ensemble avant de commencer.",
    ],
    [
      "la moitié de 24",
      "la moitié de 38",
      "la moitié de 46",
      "la moitié de 50",
      "la moitié de 62",
      "la moitié de 70",
      "la moitié de 84",
      "la moitié de 96",
      "la moitié de 58",
      "la moitié de 90",
    ],
    ["12", "19", "23", "25", "31", "35", "42", "48", "29", "45"],
    "Les dizaines impaires (50, 70, 90) obligent à casser une dizaine en deux. Ce sont celles-là qu’on reprend si la liste a ralenti.",
  ),

  f(
    "cm-doubles-05",
    "Les doubles et les moitiés",
    "Doubler en passant la dizaine",
    [
      "Tous ces doubles franchissent au moins une dizaine, certains la centaine. On prévient que c’est la difficulté du jour, et qu’elle est voulue.",
      "On accepte qu’il dise le calcul à voix haute pendant qu’il écrit. Entendre « quatre-vingts et douze, quatre-vingt-douze » vaut mieux qu’un silence perdu.",
    ],
    [
      "le double de 46",
      "le double de 58",
      "le double de 65",
      "le double de 77",
      "le double de 89",
      "le double de 95",
      "le double de 68",
      "le double de 74",
      "le double de 87",
      "le double de 99",
    ],
    ["92", "116", "130", "154", "178", "190", "136", "148", "174", "198"],
    "Le double de 99 se fait souvent plus vite par 100 doublé moins 2. S’il trouve ce raccourci seul, c’est une façon de penser les nombres qui vaut d’être nommée à voix haute.",
  ),

  f(
    "cm-doubles-06",
    "Les doubles et les moitiés",
    "Les doubles des nombres à trois chiffres",
    [
      "On monte aux centaines. Le chemin ne change pas : centaines, dizaines, unités, chacune doublée, puis on assemble.",
      "Ces nombres ressemblent à des prix et à des distances. On peut poser la question en contexte de temps en temps : « deux places à 175 euros, ça fait combien ? ».",
    ],
    [
      "le double de 120",
      "le double de 250",
      "le double de 340",
      "le double de 175",
      "le double de 400",
      "le double de 235",
      "le double de 460",
      "le double de 305",
      "le double de 500",
      "le double de 275",
    ],
    ["240", "500", "680", "350", "800", "470", "920", "610", "1 000", "550"],
    "Le double de 305 fait trébucher quand on oublie le zéro du milieu. Si l’erreur porte sur la place des chiffres et non sur le doublement, c’est la lecture du nombre qu’on reprend.",
  ),

  f(
    "cm-doubles-07",
    "Les doubles et les moitiés",
    "Les moitiés des nombres à trois chiffres",
    [
      "Que des moitiés, tous les résultats tombent juste. On le dit avant de commencer : il n’y aura pas de virgule aujourd’hui.",
      "Pour 250, la moitié de 2 centaines fait 1 centaine, la moitié de 50 fait 25 : 125. On déroule celui-là ensemble, puis on dicte.",
    ],
    [
      "la moitié de 200",
      "la moitié de 360",
      "la moitié de 480",
      "la moitié de 250",
      "la moitié de 640",
      "la moitié de 700",
      "la moitié de 820",
      "la moitié de 550",
      "la moitié de 960",
      "la moitié de 1 000",
    ],
    ["100", "180", "240", "125", "320", "350", "410", "275", "480", "500"],
    "250 et 550 demandent de casser une centaine impaire. Si ces deux-là sont les seules à résister, on sait exactement quoi reprendre demain.",
  ),

  f(
    "cm-doubles-08",
    "Les doubles et les moitiés",
    "Doubles et moitiés mélangés",
    [
      "Les deux sens alternent sans prévenir. C’est l’écoute du mot « double » ou « moitié » qui devient la première difficulté.",
      "On articule bien le mot-clé, quitte à le répéter seul avant le nombre : « la moitié… de 440 ».",
    ],
    [
      "le double de 35",
      "la moitié de 72",
      "le double de 150",
      "la moitié de 440",
      "le double de 68",
      "la moitié de 90",
      "le double de 225",
      "la moitié de 860",
      "le double de 90",
      "la moitié de 130",
    ],
    ["70", "36", "300", "220", "136", "45", "450", "430", "180", "65"],
    "La moitié de 90 puis le double de 90 se suivent à quelques questions d’écart. C’est le repère à observer : reconnaît-il que c’est le même nombre, pris dans deux sens ?",
  ),

  f(
    "cm-doubles-09",
    "Les doubles et les moitiés",
    "Quadrupler, c’est doubler deux fois",
    [
      "Nouveau mot : le quadruple. On le fabrique devant lui — le quadruple de 6, c’est 6 doublé (12), puis doublé encore (24).",
      "On l’autorise à écrire le résultat intermédiaire à côté, puis à entourer la réponse. Le brouillon sur l’ardoise fait partie de la méthode.",
    ],
    [
      "le quadruple de 6",
      "le quadruple de 12",
      "le quadruple de 15",
      "le quadruple de 25",
      "le quadruple de 30",
      "le quadruple de 18",
      "le quadruple de 45",
      "le quadruple de 50",
      "le quadruple de 35",
      "le quadruple de 120",
    ],
    ["24", "48", "60", "100", "120", "72", "180", "200", "140", "480"],
    "Fait-il les deux doublements ou multiplie-t-il directement par 4 ? Les deux conviennent. Ce qui compte, c’est qu’il ait une route à lui et qu’il sache la dire.",
  ),

  f(
    "cm-doubles-10",
    "Les doubles et les moitiés",
    "Le quart, c’est la moitié de la moitié",
    [
      "Le pendant du quadruple. Le quart de 20, c’est la moitié de 20 (10), puis la moitié de 10 (5).",
      "Deux étapes, donc deux occasions de se perdre : on peut lui demander de dire le nombre intermédiaire à voix haute avant d’écrire la réponse.",
    ],
    [
      "le quart de 20",
      "le quart de 40",
      "le quart de 36",
      "le quart de 100",
      "le quart de 60",
      "le quart de 88",
      "le quart de 200",
      "le quart de 120",
      "le quart de 440",
      "le quart de 1 000",
    ],
    ["5", "10", "9", "25", "15", "22", "50", "30", "110", "250"],
    "Le quart de 1 000 vaut 250 : c’est le même repère que les 25 centimes d’un euro. Faire le rapprochement, quand il se présente, ancre le calcul dans quelque chose de connu.",
  ),

  f(
    "cm-doubles-11",
    "Les doubles et les moitiés",
    "Les moitiés des nombres impairs",
    [
      "Nouveauté du jour : ces moitiés-là ne tombent pas rondes. La moitié de 7, c’est 3 et demi, qui s’écrit 3,5.",
      "On le prévient dès la première question, et on écrit « 3,5 » avec lui. Une réponse à virgule n’est pas une réponse en trop : c’est la bonne.",
    ],
    [
      "la moitié de 7",
      "la moitié de 9",
      "la moitié de 15",
      "la moitié de 21",
      "la moitié de 25",
      "la moitié de 33",
      "la moitié de 45",
      "la moitié de 51",
      "la moitié de 75",
      "la moitié de 99",
    ],
    ["3,5", "4,5", "7,5", "10,5", "12,5", "16,5", "22,5", "25,5", "37,5", "49,5"],
    "Écrire « 3,5 » plutôt que « 3 » ou « 4 » demande d’accepter qu’un nombre puisse se couper en deux. On regarde s’il pose la virgule sans hésiter, ou s’il cherche encore à arrondir.",
  ),

  f(
    "cm-doubles-12",
    "Les doubles et les moitiés",
    "Les doubles et les moitiés des milliers",
    [
      "On passe aux nombres à quatre chiffres. La méthode ne bouge pas : chaque rang doublé, ou coupé en deux, puis on assemble.",
      "Les deux sens alternent. On peut annoncer « double » ou « moitié » avant le nombre, en marquant une courte pause.",
    ],
    [
      "le double de 1 200",
      "le double de 1 500",
      "le double de 2 250",
      "le double de 3 400",
      "le double de 1 750",
      "la moitié de 2 000",
      "la moitié de 4 600",
      "la moitié de 5 000",
      "le double de 4 500",
      "la moitié de 7 200",
    ],
    ["2 400", "3 000", "4 500", "6 800", "3 500", "1 000", "2 300", "2 500", "9 000", "3 600"],
    "Le double de 4 500 et la moitié de 9 000 sont la même relation prise des deux côtés. Si ce lien se voit, les grands nombres perdent beaucoup de leur poids.",
  ),

  f(
    "cm-doubles-13",
    "Les doubles et les moitiés",
    "Doubles et moitiés des nombres à virgule",
    [
      "On double et on coupe en deux des nombres à virgule. Le double de 2,5, c’est 5 : deux moitiés font un entier.",
      "L’ardoise aide ici : voir « 2,5 » et « 5 » côte à côte vaut mieux qu’une longue explication.",
    ],
    [
      "le double de 2,5",
      "la moitié de 5",
      "le double de 1,5",
      "la moitié de 9",
      "le double de 0,5",
      "le double de 3,5",
      "la moitié de 7",
      "le double de 12,5",
      "la moitié de 25",
      "le double de 4,5",
    ],
    ["5", "2,5", "3", "4,5", "1", "7", "3,5", "25", "12,5", "9"],
    "Les couples se répondent deux à deux (2,5 et 5 ; 12,5 et 25). Repérer qu’une question est la précédente retournée est le vrai apprentissage de cette fiche.",
  ),

  f(
    "cm-doubles-14",
    "Les doubles et les moitiés",
    "Le grand mélange de fin d’année",
    [
      "Doubles, moitiés, quarts, quadruples, entiers et nombres à virgule : tout ce que la série a vu, mélangé.",
      "Dernière fiche de la série. On peut la présenter comme un tour d’horizon, pas comme une épreuve : rien dedans n’est nouveau.",
    ],
    [
      "le double de 68",
      "la moitié de 240",
      "le quart de 80",
      "le double de 1 250",
      "la moitié de 15",
      "le quadruple de 25",
      "la moitié de 3 600",
      "le double de 2,5",
      "le quart de 360",
      "la moitié de 950",
    ],
    ["136", "120", "20", "2 500", "7,5", "100", "1 800", "5", "90", "475"],
    "Les mots « quart » et « quadruple » se ressemblent à l’oreille. Une confusion entre les deux dit qu’il faut redire les mots, pas refaire les calculs.",
  ),

  /* ---------------------------------------------------------------- */
  /* Les compléments à 100 — 14 fiches                                 */
  /* ---------------------------------------------------------------- */

  f(
    "cm-cent-01",
    "Les compléments à 100",
    "Aller à 10, puis aller à 100",
    [
      "On commence par les compléments à 10, qui sont déjà là, puis on passe aux dizaines rondes vers 100 : c’est le même geste, une taille au-dessus.",
      "Question dictée, ardoise levée, on efface. On peut poser la main sur la table et compter les doigts qui manquent pour les premières.",
    ],
    [
      "combien manque-t-il à 7 pour aller à 10 ?",
      "combien manque-t-il à 4 pour aller à 10 ?",
      "combien manque-t-il à 8 pour aller à 10 ?",
      "combien manque-t-il à 10 pour aller à 100 ?",
      "combien manque-t-il à 30 pour aller à 100 ?",
      "combien manque-t-il à 60 pour aller à 100 ?",
      "combien manque-t-il à 20 pour aller à 100 ?",
      "combien manque-t-il à 50 pour aller à 100 ?",
      "combien manque-t-il à 90 pour aller à 100 ?",
      "combien manque-t-il à 40 pour aller à 100 ?",
    ],
    ["3", "6", "2", "90", "70", "40", "80", "50", "10", "60"],
    "Les compléments à 10 sont le socle de tout le reste de la série. S’ils sortent sans réfléchir, la suite se construira dessus ; sinon, on y consacre quelques matins de plus.",
  ),

  f(
    "cm-cent-02",
    "Les compléments à 100",
    "Aller à 100 depuis les dizaines et demies",
    [
      "Tous les nombres finissent par 5. Le complément finit alors toujours par 5 lui aussi : c’est le repère du jour.",
      "On abrège la question après les deux premières : « et 45 ? », « et 55 ? ». L’économie de mots accélère sans presser l’enfant.",
    ],
    [
      "combien manque-t-il à 25 pour aller à 100 ?",
      "combien manque-t-il à 35 pour aller à 100 ?",
      "combien manque-t-il à 45 pour aller à 100 ?",
      "combien manque-t-il à 55 pour aller à 100 ?",
      "combien manque-t-il à 65 pour aller à 100 ?",
      "combien manque-t-il à 75 pour aller à 100 ?",
      "combien manque-t-il à 85 pour aller à 100 ?",
      "combien manque-t-il à 15 pour aller à 100 ?",
      "combien manque-t-il à 95 pour aller à 100 ?",
      "combien manque-t-il à 5 pour aller à 100 ?",
    ],
    ["75", "65", "55", "45", "35", "25", "15", "85", "5", "95"],
    "Les couples se répondent : 25 et 75, 35 et 65. S’il repère que la liste se replie sur elle-même, il a compris quelque chose de la symétrie des compléments.",
  ),

  f(
    "cm-cent-03",
    "Les compléments à 100",
    "Aller à 100, tous les nombres",
    [
      "Le chemin à rappeler une fois : on monte d’abord à la dizaine, puis jusqu’à 100. De 67, on va à 70 (3), puis à 100 (30) : 33 en tout.",
      "Les deux étapes peuvent s’écrire sur l’ardoise avant la réponse. C’est plus lent et plus sûr, et la vitesse vient ensuite toute seule.",
    ],
    [
      "combien manque-t-il à 67 pour aller à 100 ?",
      "combien manque-t-il à 42 pour aller à 100 ?",
      "combien manque-t-il à 81 pour aller à 100 ?",
      "combien manque-t-il à 36 pour aller à 100 ?",
      "combien manque-t-il à 78 pour aller à 100 ?",
      "combien manque-t-il à 53 pour aller à 100 ?",
      "combien manque-t-il à 29 pour aller à 100 ?",
      "combien manque-t-il à 94 pour aller à 100 ?",
      "combien manque-t-il à 61 pour aller à 100 ?",
      "combien manque-t-il à 88 pour aller à 100 ?",
    ],
    ["33", "58", "19", "64", "22", "47", "71", "6", "39", "12"],
    "Les chiffres des dizaines s’ajoutent à 9, ceux des unités à 10 — sauf quand le nombre finit par 0. Si cette régularité apparaît, c’est un appui solide pour toute la série.",
  ),

  f(
    "cm-cent-04",
    "Les compléments à 100",
    "Aller à 100, sans écrire les étapes",
    [
      "Même exercice que la fois précédente, mais on tente la réponse directe : la dizaine d’abord, puis les unités, mentalement.",
      "S’il repasse par l’écrit, on le laisse. On reproposera plus tard, et il finira par s’en passer de lui-même.",
    ],
    [
      "combien manque-t-il à 37 pour aller à 100 ?",
      "combien manque-t-il à 74 pour aller à 100 ?",
      "combien manque-t-il à 58 pour aller à 100 ?",
      "combien manque-t-il à 23 pour aller à 100 ?",
      "combien manque-t-il à 96 pour aller à 100 ?",
      "combien manque-t-il à 49 pour aller à 100 ?",
      "combien manque-t-il à 82 pour aller à 100 ?",
      "combien manque-t-il à 16 pour aller à 100 ?",
      "combien manque-t-il à 65 pour aller à 100 ?",
      "combien manque-t-il à 71 pour aller à 100 ?",
    ],
    ["63", "26", "42", "77", "4", "51", "18", "84", "35", "29"],
    "96 laisse 4 : les nombres proches de 100 sont parfois les plus déroutants, parce que la méthode en deux étapes y devient inutile. On regarde s’il ose répondre court.",
  ),

  f(
    "cm-cent-05",
    "Les compléments à 100",
    "Aller à 100, puis aller à 200",
    [
      "On garde 100 comme repère et on ajoute 200. Aller de 150 à 200, c’est aller de 50 à 100 avec une centaine devant.",
      "On annonce la cible à chaque question, parce qu’elle change : « à 200 », « à 100 ». C’est ce qu’il faut écouter en premier.",
    ],
    [
      "combien manque-t-il à 48 pour aller à 100 ?",
      "combien manque-t-il à 93 pour aller à 100 ?",
      "combien manque-t-il à 150 pour aller à 200 ?",
      "combien manque-t-il à 170 pour aller à 200 ?",
      "combien manque-t-il à 145 pour aller à 200 ?",
      "combien manque-t-il à 128 pour aller à 200 ?",
      "combien manque-t-il à 34 pour aller à 100 ?",
      "combien manque-t-il à 186 pour aller à 200 ?",
      "combien manque-t-il à 110 pour aller à 200 ?",
      "combien manque-t-il à 163 pour aller à 200 ?",
    ],
    ["52", "7", "50", "30", "55", "72", "66", "14", "90", "37"],
    "Écouter la cible avant le nombre est la compétence du jour. Une réponse juste pour la mauvaise cible dit qu’il faut ralentir la diction, pas l’exercice.",
  ),

  f(
    "cm-cent-06",
    "Les compléments à 100",
    "Aller à 1 000 depuis les centaines",
    [
      "On change d’échelle : 1 000, c’est dix centaines. Aller de 300 à 1 000, c’est le complément de 3 à 10, en centaines.",
      "On peut écrire « 3 → 10 » à côté de « 300 → 1 000 » pour la première question, puis effacer.",
    ],
    [
      "combien manque-t-il à 300 pour aller à 1 000 ?",
      "combien manque-t-il à 600 pour aller à 1 000 ?",
      "combien manque-t-il à 800 pour aller à 1 000 ?",
      "combien manque-t-il à 250 pour aller à 1 000 ?",
      "combien manque-t-il à 500 pour aller à 1 000 ?",
      "combien manque-t-il à 450 pour aller à 1 000 ?",
      "combien manque-t-il à 900 pour aller à 1 000 ?",
      "combien manque-t-il à 150 pour aller à 1 000 ?",
      "combien manque-t-il à 700 pour aller à 1 000 ?",
      "combien manque-t-il à 750 pour aller à 1 000 ?",
    ],
    ["700", "400", "200", "750", "500", "550", "100", "850", "300", "250"],
    "Les compléments à 10 reviennent ici, habillés en centaines. Si 300 → 700 passe mais pas 250 → 750, c’est la demi-centaine qui coince, pas le changement d’échelle.",
  ),

  f(
    "cm-cent-07",
    "Les compléments à 100",
    "Aller à 1 000 depuis les dizaines",
    [
      "Les nombres finissent par 0 : on cherche d’abord la centaine au-dessus, puis on complète jusqu’à 1 000.",
      "De 320, on monte à 400 (80), puis à 1 000 (600) : 680. On déroule celui-là ensemble, en écrivant les deux morceaux.",
    ],
    [
      "combien manque-t-il à 320 pour aller à 1 000 ?",
      "combien manque-t-il à 470 pour aller à 1 000 ?",
      "combien manque-t-il à 690 pour aller à 1 000 ?",
      "combien manque-t-il à 850 pour aller à 1 000 ?",
      "combien manque-t-il à 240 pour aller à 1 000 ?",
      "combien manque-t-il à 580 pour aller à 1 000 ?",
      "combien manque-t-il à 910 pour aller à 1 000 ?",
      "combien manque-t-il à 730 pour aller à 1 000 ?",
      "combien manque-t-il à 460 pour aller à 1 000 ?",
      "combien manque-t-il à 190 pour aller à 1 000 ?",
    ],
    ["680", "530", "310", "150", "760", "420", "90", "270", "540", "810"],
    "Les chiffres des centaines s’ajoutent à 9, ceux des dizaines à 10 : la même régularité qu’à 100, d’un cran plus haut. On regarde s’il la transporte tout seul.",
  ),

  f(
    "cm-cent-08",
    "Les compléments à 100",
    "Aller à 1 000, tous les nombres",
    [
      "Trois chiffres, trois étapes : jusqu’à la dizaine, jusqu’à la centaine, jusqu’à 1 000. De 347 : 3, puis 50, puis 600, donc 653.",
      "C’est la fiche la plus longue de la série en temps de réflexion. Si huit questions suffisent à remplir les quinze minutes, on s’arrête à huit.",
    ],
    [
      "combien manque-t-il à 347 pour aller à 1 000 ?",
      "combien manque-t-il à 682 pour aller à 1 000 ?",
      "combien manque-t-il à 519 pour aller à 1 000 ?",
      "combien manque-t-il à 236 pour aller à 1 000 ?",
      "combien manque-t-il à 875 pour aller à 1 000 ?",
      "combien manque-t-il à 463 pour aller à 1 000 ?",
      "combien manque-t-il à 708 pour aller à 1 000 ?",
      "combien manque-t-il à 951 pour aller à 1 000 ?",
      "combien manque-t-il à 124 pour aller à 1 000 ?",
      "combien manque-t-il à 596 pour aller à 1 000 ?",
    ],
    ["653", "318", "481", "764", "125", "537", "292", "49", "876", "404"],
    "708 et 951 cassent la routine : l’un a un zéro au milieu, l’autre est presque arrivé. Ce sont les deux cas à reprendre en priorité s’ils ont accroché.",
  ),

  f(
    "cm-cent-09",
    "Les compléments à 100",
    "À 100 et à 1 000, mélangés",
    [
      "Les deux cibles alternent. La première chose à entendre, c’est où l’on va.",
      "On marque une pause nette avant « à 100 » ou « à 1 000 », et on accepte de répéter la cible autant de fois qu’il la demande.",
    ],
    [
      "combien manque-t-il à 57 pour aller à 100 ?",
      "combien manque-t-il à 640 pour aller à 1 000 ?",
      "combien manque-t-il à 89 pour aller à 100 ?",
      "combien manque-t-il à 375 pour aller à 1 000 ?",
      "combien manque-t-il à 24 pour aller à 100 ?",
      "combien manque-t-il à 802 pour aller à 1 000 ?",
      "combien manque-t-il à 68 pour aller à 100 ?",
      "combien manque-t-il à 155 pour aller à 1 000 ?",
      "combien manque-t-il à 43 pour aller à 100 ?",
      "combien manque-t-il à 999 pour aller à 1 000 ?",
    ],
    ["43", "360", "11", "625", "76", "198", "32", "845", "57", "1"],
    "La dernière question est presque une plaisanterie, et la neuvième reprend le résultat de la première. Voir ces clins d’œil est un bon signe : il lit la liste et pas seulement chaque question.",
  ),

  f(
    "cm-cent-10",
    "Les compléments à 100",
    "Aller à la centaine d’au-dessus",
    [
      "Nouvelle cible, mobile cette fois : la centaine qui vient juste après. De 342, on va à 400.",
      "La première difficulté est de trouver la cible. On peut lui demander de la dire à voix haute avant de calculer.",
    ],
    [
      "combien manque-t-il à 342 pour aller à 400 ?",
      "combien manque-t-il à 517 pour aller à 600 ?",
      "combien manque-t-il à 268 pour aller à 300 ?",
      "combien manque-t-il à 731 pour aller à 800 ?",
      "combien manque-t-il à 155 pour aller à 200 ?",
      "combien manque-t-il à 489 pour aller à 500 ?",
      "combien manque-t-il à 623 pour aller à 700 ?",
      "combien manque-t-il à 896 pour aller à 900 ?",
      "combien manque-t-il à 274 pour aller à 300 ?",
      "combien manque-t-il à 358 pour aller à 400 ?",
    ],
    ["58", "83", "32", "69", "45", "11", "77", "4", "26", "42"],
    "Seuls les deux derniers chiffres comptent : 342 vers 400, c’est 42 vers 100. Si ce raccourci se voit, la fiche devient bien plus courte.",
  ),

  f(
    "cm-cent-11",
    "Les compléments à 100",
    "Aller au millier d’au-dessus",
    [
      "Même idée, un rang plus haut : de 1 250, on va à 2 000. On cherche le millier suivant, puis ce qui manque pour l’atteindre.",
      "On peut faire dire le millier visé avant chaque calcul. Nommer la cible évite la moitié des erreurs.",
    ],
    [
      "combien manque-t-il à 1 250 pour aller à 2 000 ?",
      "combien manque-t-il à 3 400 pour aller à 4 000 ?",
      "combien manque-t-il à 2 750 pour aller à 3 000 ?",
      "combien manque-t-il à 5 600 pour aller à 6 000 ?",
      "combien manque-t-il à 4 180 pour aller à 5 000 ?",
      "combien manque-t-il à 6 950 pour aller à 7 000 ?",
      "combien manque-t-il à 8 320 pour aller à 9 000 ?",
      "combien manque-t-il à 7 045 pour aller à 8 000 ?",
      "combien manque-t-il à 2 500 pour aller à 3 000 ?",
      "combien manque-t-il à 9 610 pour aller à 10 000 ?",
    ],
    ["750", "600", "250", "400", "820", "50", "680", "955", "500", "390"],
    "7 045 est le plus retors : le zéro des centaines se saute vite. Si c’est le seul qui a manqué, on le repose seul demain, sans rien y ajouter.",
  ),

  f(
    "cm-cent-12",
    "Les compléments à 100",
    "Aller à 1 000, sans temps mort",
    [
      "Retour à la cible fixe, 1 000, avec des nombres à trois chiffres et un rythme soutenu.",
      "On ne commente pas entre deux questions. On enchaîne, et on reprend seulement à la fin celles qui ont résisté.",
    ],
    [
      "combien manque-t-il à 428 pour aller à 1 000 ?",
      "combien manque-t-il à 763 pour aller à 1 000 ?",
      "combien manque-t-il à 285 pour aller à 1 000 ?",
      "combien manque-t-il à 609 pour aller à 1 000 ?",
      "combien manque-t-il à 937 pour aller à 1 000 ?",
      "combien manque-t-il à 174 pour aller à 1 000 ?",
      "combien manque-t-il à 546 pour aller à 1 000 ?",
      "combien manque-t-il à 812 pour aller à 1 000 ?",
      "combien manque-t-il à 350 pour aller à 1 000 ?",
      "combien manque-t-il à 491 pour aller à 1 000 ?",
    ],
    ["572", "237", "715", "391", "63", "826", "454", "188", "650", "509"],
    "À ce stade, le calcul est souvent en place et c’est le débit qui pèse. S’il ralentit sans se tromper, c’est le signe qu’on peut continuer sans rien changer.",
  ),

  f(
    "cm-cent-13",
    "Les compléments à 100",
    "Rendre la monnaie",
    [
      "Même calcul, habillé en euros. Combien rend-on sur 10 euros quand on a payé 6,50 euros ?",
      "Les centimes se comportent comme les unités : de 6,50 à 7, il manque 0,50 ; de 7 à 10, il manque 3. On déroule le premier ensemble, puis on dicte.",
    ],
    [
      "on paye 6,50 € avec un billet de 10 €, on rend combien ?",
      "on paye 4,20 € avec 10 €, on rend combien ?",
      "on paye 8,75 € avec 10 €, on rend combien ?",
      "on paye 2,30 € avec 10 €, on rend combien ?",
      "on paye 9,90 € avec 10 €, on rend combien ?",
      "on paye 12,40 € avec 20 €, on rend combien ?",
      "on paye 15,50 € avec 20 €, on rend combien ?",
      "on paye 17,25 € avec 20 €, on rend combien ?",
      "on paye 34 € avec 50 €, on rend combien ?",
      "on paye 68 € avec 100 €, on rend combien ?",
    ],
    ["3,50 €", "5,80 €", "1,25 €", "7,70 €", "0,10 €", "7,60 €", "4,50 €", "2,75 €", "16 €", "32 €"],
    "Le complément à 100 des centimes est le même qu’à 100 tout court. Si la monnaie passe mieux que les nombres nus, on tient une entrée à réutiliser ailleurs.",
  ),

  f(
    "cm-cent-14",
    "Les compléments à 100",
    "Le grand mélange de fin d’année",
    [
      "Toutes les cibles réunies : 100, 1 000, la centaine d’au-dessus, le millier d’au-dessus, et un peu de monnaie.",
      "Dernière fiche de la série : on peut dire qu’elle rassemble dix mois de compléments, et qu’aucune question n’est nouvelle.",
    ],
    [
      "combien manque-t-il à 73 pour aller à 100 ?",
      "combien manque-t-il à 458 pour aller à 1 000 ?",
      "combien manque-t-il à 627 pour aller à 700 ?",
      "combien manque-t-il à 16 pour aller à 100 ?",
      "combien manque-t-il à 3 250 pour aller à 4 000 ?",
      "combien manque-t-il à 815 pour aller à 1 000 ?",
      "on paye 7,50 € avec 10 €, on rend combien ?",
      "combien manque-t-il à 91 pour aller à 100 ?",
      "combien manque-t-il à 290 pour aller à 1 000 ?",
      "combien manque-t-il à 4 999 pour aller à 5 000 ?",
    ],
    ["27", "542", "73", "84", "750", "185", "2,50 €", "9", "710", "1"],
    "Le premier et le troisième résultat sont identiques : 73. Le repérer en fin de séance, c’est voir que toute la série tournait autour du même geste.",
  ),

  /* ---------------------------------------------------------------- */
  /* Ajouter 9, 19, 29 — 14 fiches                                     */
  /* ---------------------------------------------------------------- */

  f(
    "cm-neuf-01",
    "Ajouter 9, 19, 29",
    "Ajouter 9",
    [
      "La procédure d’abord, à voix haute et une seule fois : ajouter 9, c’est ajouter 10 et retirer 1. On la fait dire avant de commencer.",
      "À chaque question, on lui demande de dire le nombre intermédiaire : « 24 plus 10, 34, moins 1, 33 ». Dire le chemin est ici le vrai travail.",
    ],
    ["24 + 9", "37 + 9", "45 + 9", "52 + 9", "68 + 9", "71 + 9", "16 + 9", "83 + 9", "59 + 9", "95 + 9"],
    ["33", "46", "54", "61", "77", "80", "25", "92", "68", "104"],
    "Le chiffre des unités baisse de 1 et celui des dizaines monte de 1. Si cette régularité se voit, il pourra bientôt répondre sans passer par les deux étapes.",
  ),

  f(
    "cm-neuf-02",
    "Ajouter 9, 19, 29",
    "Ajouter 9 à des nombres plus grands",
    [
      "Mêmes gestes, des nombres à trois puis quatre chiffres. La procédure ne change pas d’un iota : plus 10, moins 1.",
      "On garde la consigne de dire l’étape intermédiaire. Elle devient plus utile, pas moins, quand les nombres grandissent.",
    ],
    [
      "126 + 9",
      "248 + 9",
      "375 + 9",
      "493 + 9",
      "517 + 9",
      "684 + 9",
      "736 + 9",
      "892 + 9",
      "955 + 9",
      "1 248 + 9",
    ],
    ["135", "257", "384", "502", "526", "693", "745", "901", "964", "1 257"],
    "493 + 9 et 892 + 9 font changer la centaine. Ce sont les deux cas où la procédure se gagne vraiment ; les autres passent presque tout seuls.",
  ),

  f(
    "cm-neuf-03",
    "Ajouter 9, 19, 29",
    "Ajouter 19",
    [
      "Nouvelle dizaine, même logique : ajouter 19, c’est ajouter 20 et retirer 1.",
      "On refait le parallèle avec 9 sur la première question, puis on laisse faire. La procédure se transporte, c’est tout l’intérêt.",
    ],
    [
      "23 + 19",
      "46 + 19",
      "34 + 19",
      "57 + 19",
      "68 + 19",
      "75 + 19",
      "82 + 19",
      "145 + 19",
      "236 + 19",
      "91 + 19",
    ],
    ["42", "65", "53", "76", "87", "94", "101", "164", "255", "110"],
    "Ajoute-t-il 20 puis retire 1, ou ajoute-t-il 10 deux fois ? La première route est celle qu’on installe ; la seconde marche aussi et se transformera plus tard.",
  ),

  f(
    "cm-neuf-04",
    "Ajouter 9, 19, 29",
    "Ajouter 9 et 19, mélangés",
    [
      "Les deux alternent. Ce qui change, c’est la dizaine à ajouter avant de retirer 1 : 10 pour 9, 20 pour 19.",
      "On articule nettement « neuf » et « dix-neuf », qui se ressemblent en fin de phrase.",
    ],
    [
      "47 + 9",
      "63 + 19",
      "128 + 9",
      "74 + 19",
      "256 + 9",
      "85 + 19",
      "39 + 9",
      "342 + 19",
      "96 + 9",
      "517 + 19",
    ],
    ["56", "82", "137", "93", "265", "104", "48", "361", "105", "536"],
    "Une erreur de 10 (83 au lieu de 93 pour 74 + 19, par exemple) dit qu’il a entendu l’autre nombre, pas qu’il a calculé de travers. C’est la diction qu’on ajuste alors.",
  ),

  f(
    "cm-neuf-05",
    "Ajouter 9, 19, 29",
    "Ajouter 29",
    [
      "Troisième palier : plus 30, moins 1. On le fait formuler avant la première question.",
      "Certaines franchissent la centaine. On peut le prévenir : « quelques-unes vont passer au-dessus de 100, c’est prévu ».",
    ],
    [
      "34 + 29",
      "45 + 29",
      "57 + 29",
      "68 + 29",
      "72 + 29",
      "86 + 29",
      "123 + 29",
      "247 + 29",
      "95 + 29",
      "358 + 29",
    ],
    ["63", "74", "86", "97", "101", "115", "152", "276", "124", "387"],
    "Le chemin « plus 30, moins 1 » se tient-il jusqu’au bout, ou repart-il vers l’addition posée en tête ? Les deux arrivent ; le premier est ce qu’on construit ici.",
  ),

  f(
    "cm-neuf-06",
    "Ajouter 9, 19, 29",
    "Ajouter 39 et 49",
    [
      "On monte encore : plus 40 moins 1, plus 50 moins 1. Le principe est le même, et on le dit ainsi.",
      "Il peut être utile de lui faire annoncer la dizaine ronde avant de calculer : « 39, donc 40 ».",
    ],
    [
      "25 + 39",
      "47 + 39",
      "62 + 49",
      "58 + 49",
      "134 + 39",
      "276 + 49",
      "83 + 39",
      "91 + 49",
      "345 + 39",
      "462 + 49",
    ],
    ["64", "86", "111", "107", "173", "325", "122", "140", "384", "511"],
    "Trouver la dizaine ronde au-dessus (39 → 40, 49 → 50) est devenu la première étape. Si elle vient sans y penser, la méthode est installée pour de bon.",
  ),

  f(
    "cm-neuf-07",
    "Ajouter 9, 19, 29",
    "9, 19, 29, 39 : le mélange",
    [
      "Quatre nombres différents à ajouter, dans le désordre. On écoute, on trouve la dizaine ronde, on ajoute, on retire 1.",
      "On peut lui laisser noter la dizaine ronde dans un coin de l’ardoise avant de calculer, puis l’effacer avec le reste.",
    ],
    [
      "56 + 9",
      "78 + 19",
      "64 + 29",
      "47 + 39",
      "125 + 9",
      "236 + 19",
      "348 + 29",
      "459 + 39",
      "87 + 29",
      "573 + 19",
    ],
    ["65", "97", "93", "86", "134", "255", "377", "498", "116", "592"],
    "Si les additions sont justes mais lentes, c’est la reconnaissance du nombre à ajouter qui prend le temps, pas le calcul. C’est là qu’on revient.",
  ),

  f(
    "cm-neuf-08",
    "Ajouter 9, 19, 29",
    "Ajouter 99",
    [
      "Un cran au-dessus : ajouter 99, c’est ajouter 100 et retirer 1. On le montre sur la première avant de dicter.",
      "Le résultat se lit souvent d’un coup : 45 + 99, on voit 145 et on retire 1. On peut le dire si le détour à deux temps s’installe trop lourdement.",
    ],
    [
      "45 + 99",
      "67 + 99",
      "123 + 99",
      "256 + 99",
      "380 + 99",
      "512 + 99",
      "748 + 99",
      "906 + 99",
      "1 234 + 99",
      "2 450 + 99",
    ],
    ["144", "166", "222", "355", "479", "611", "847", "1 005", "1 333", "2 549"],
    "Le passage de 9 à 99 se transporte-t-il sans qu’on l’explique ? Si oui, la procédure est comprise comme une idée et pas apprise comme une recette.",
  ),

  f(
    "cm-neuf-09",
    "Ajouter 9, 19, 29",
    "Ajouter 99 et 199",
    [
      "Deux nombres proches d’une centaine ronde. Pour 199, c’est plus 200 moins 1.",
      "On sépare bien « quatre-vingt-dix-neuf » de « cent quatre-vingt-dix-neuf » : ces deux-là se confondent vite à l’oreille.",
    ],
    [
      "56 + 99",
      "78 + 199",
      "145 + 99",
      "236 + 199",
      "407 + 99",
      "520 + 199",
      "683 + 99",
      "754 + 199",
      "1 320 + 99",
      "2 615 + 199",
    ],
    ["155", "277", "244", "435", "506", "719", "782", "953", "1 419", "2 814"],
    "Une erreur d’exactement 100 signale une confusion entre les deux nombres dictés. On la distingue des erreurs de calcul : elle se règle en répétant, pas en réexpliquant.",
  ),

  f(
    "cm-neuf-10",
    "Ajouter 9, 19, 29",
    "Retirer 9, 19, 29",
    [
      "La procédure se retourne : retirer 9, c’est retirer 10 et rajouter 1. On la formule ensemble avant de commencer.",
      "C’est le renversement qui demande de l’attention, pas les nombres. On peut faire les trois premières très lentement.",
    ],
    [
      "45 − 9",
      "63 − 9",
      "52 − 19",
      "87 − 19",
      "74 − 29",
      "136 − 9",
      "245 − 19",
      "358 − 29",
      "91 − 29",
      "500 − 9",
    ],
    ["36", "54", "33", "68", "45", "127", "226", "329", "62", "491"],
    "Rajouter 1 au lieu de le retirer est l’erreur attendue ici, et elle ne dit rien du calcul lui-même. On redit la phrase complète, et ça se remet en place.",
  ),

  f(
    "cm-neuf-11",
    "Ajouter 9, 19, 29",
    "Ajouter 9, 19, 29 aux grands nombres",
    [
      "Des nombres à quatre chiffres, et la même procédure. Le rang des milliers ne bouge presque jamais : c’est rassurant à dire avant de commencer.",
      "Deux questions font pourtant changer le millier. On ne les signale pas à l’avance, mais on les reprend à la fin.",
    ],
    [
      "1 456 + 9",
      "2 378 + 19",
      "3 645 + 29",
      "4 892 + 9",
      "5 137 + 19",
      "6 274 + 29",
      "7 991 + 9",
      "8 465 + 19",
      "9 372 + 29",
      "2 995 + 9",
    ],
    ["1 465", "2 397", "3 674", "4 901", "5 156", "6 303", "8 000", "8 484", "9 401", "3 004"],
    "7 991 + 9 tombe pile sur 8 000. Ces arrivées rondes sont souvent celles qui restent en mémoire : on peut s’y arrêter un instant.",
  ),

  f(
    "cm-neuf-12",
    "Ajouter 9, 19, 29",
    "Ajouter 99, retirer 99",
    [
      "Les deux sens, avec le même nombre. Plus 100 moins 1 dans un cas, moins 100 plus 1 dans l’autre.",
      "On peut afficher les deux phrases côte à côte sur un papier posé à côté de l’ardoise, et les laisser visibles toute la séance.",
    ],
    [
      "245 − 99",
      "367 + 99",
      "512 − 99",
      "148 + 99",
      "700 − 99",
      "856 + 99",
      "1 234 − 99",
      "2 460 + 99",
      "3 005 − 99",
      "4 701 + 99",
    ],
    ["146", "466", "413", "247", "601", "955", "1 135", "2 559", "2 906", "4 800"],
    "3 005 − 99 est celle qui demande le plus de soin, à cause des deux zéros. Si elle passe, le reste de la fiche est derrière lui.",
  ),

  f(
    "cm-neuf-13",
    "Ajouter 9, 19, 29",
    "Ajouter et retirer, mélangés",
    [
      "Les deux sens et tous les nombres proches d’une dizaine ou d’une centaine ronde, dans le désordre.",
      "On articule le signe autant que le nombre : « plus » et « moins » sont ici l’information principale.",
    ],
    [
      "56 + 19",
      "84 − 29",
      "347 + 99",
      "512 − 19",
      "1 250 + 29",
      "630 − 99",
      "78 + 39",
      "405 − 9",
      "2 340 + 199",
      "900 − 29",
    ],
    ["75", "55", "446", "493", "1 279", "531", "117", "396", "2 539", "871"],
    "Se souvient-il d’ajuster de 1 dans le bon sens à chaque fois ? C’est la seule chose à surveiller ici, et elle suffit à expliquer presque toutes les hésitations.",
  ),

  f(
    "cm-neuf-14",
    "Ajouter 9, 19, 29",
    "Le grand mélange de fin d’année",
    [
      "Tout y est : 9, 19, 29, 39, 99, 199, et même 999, dans les deux sens. Pour 999, c’est plus 1 000 moins 1 — on le dit avant la neuvième question.",
      "Dernière fiche de la série. On peut rappeler que la même phrase a tenu toute l’année : on va jusqu’à la dizaine ronde, et on recule d’un pas.",
    ],
    [
      "67 + 9",
      "458 + 99",
      "1 234 − 19",
      "375 + 29",
      "2 600 − 99",
      "89 + 199",
      "5 432 + 9",
      "740 − 39",
      "3 175 + 999",
      "6 000 − 99",
    ],
    ["76", "557", "1 215", "404", "2 501", "288", "5 441", "701", "4 174", "5 901"],
    "Une même idée traverse dix mois et sept tailles de nombres. Si on le lui dit à la fin de cette fiche, il y a des chances qu’il s’en souvienne longtemps.",
  ),

  /* ---------------------------------------------------------------- */
  /* Multiplier par 10, 100, 1 000 — 14 fiches                         */
  /* ---------------------------------------------------------------- */

  f(
    "cm-dix-01",
    "Multiplier par 10, 100, 1 000",
    "Multiplier par 10",
    [
      "On pose l’idée juste une fois : multiplier par 10, ce n’est pas « ajouter un zéro », c’est décaler chaque chiffre d’un rang. Les unités deviennent des dizaines.",
      "Ensuite on dicte, on efface entre chaque. Les questions sont courtes, la séance sera rapide : c’est voulu pour une première fois.",
    ],
    ["7 × 10", "12 × 10", "25 × 10", "40 × 10", "9 × 10", "36 × 10", "50 × 10", "18 × 10", "63 × 10", "84 × 10"],
    ["70", "120", "250", "400", "90", "360", "500", "180", "630", "840"],
    "40 × 10 donne 400 : le zéro de départ reste, un autre s’ajoute. Si celui-là passe, la règle est comprise et pas seulement imitée.",
  ),

  f(
    "cm-dix-02",
    "Multiplier par 10, 100, 1 000",
    "Par 10, puis par 100",
    [
      "Les questions vont par paires : le même nombre par 10, puis par 100. On le signale, l’enchaînement fait presque tout le travail.",
      "Multiplier par 100, c’est décaler de deux rangs — ou multiplier par 10 deux fois de suite, ce qui revient au même et se voit ici.",
    ],
    ["6 × 10", "6 × 100", "15 × 10", "15 × 100", "20 × 10", "20 × 100", "9 × 100", "30 × 100", "45 × 10", "45 × 100"],
    ["60", "600", "150", "1 500", "200", "2 000", "900", "3 000", "450", "4 500"],
    "La seconde question de chaque paire doit venir plus vite que la première. Si ce n’est pas le cas, le lien entre 10 et 100 n’est pas encore là.",
  ),

  f(
    "cm-dix-03",
    "Multiplier par 10, 100, 1 000",
    "Multiplier par 100",
    [
      "Que des multiplications par 100, sans paire pour aider. Deux rangs de décalage, à chaque fois.",
      "S’il compte les zéros au lieu de décaler, on le laisse : c’est une béquille efficace à ce stade, on y reviendra plus tard.",
    ],
    [
      "8 × 100",
      "12 × 100",
      "24 × 100",
      "35 × 100",
      "7 × 100",
      "50 × 100",
      "41 × 100",
      "60 × 100",
      "19 × 100",
      "90 × 100",
    ],
    ["800", "1 200", "2 400", "3 500", "700", "5 000", "4 100", "6 000", "1 900", "9 000"],
    "50 × 100 et 90 × 100 mettent trois zéros au résultat. C’est là que « ajouter deux zéros » se met à dérailler ; on regarde si ces deux-là passent.",
  ),

  f(
    "cm-dix-04",
    "Multiplier par 10, 100, 1 000",
    "Par 10 et par 100, mélangés",
    [
      "Les deux alternent sans prévenir. Ce qu’il faut entendre en premier, c’est le multiplicateur.",
      "On peut lui demander de répéter la question avant de calculer, les premières fois. Redire, c’est déjà la moitié du travail.",
    ],
    [
      "23 × 10",
      "23 × 100",
      "70 × 10",
      "8 × 100",
      "56 × 10",
      "14 × 100",
      "90 × 10",
      "32 × 100",
      "47 × 10",
      "65 × 100",
    ],
    ["230", "2 300", "700", "800", "560", "1 400", "900", "3 200", "470", "6 500"],
    "70 × 10 et 8 × 100 se suivent et donnent des résultats voisins, 700 et 800. C’est le genre de rapprochement qui aide à sentir la taille des nombres.",
  ),

  f(
    "cm-dix-05",
    "Multiplier par 10, 100, 1 000",
    "Multiplier par 1 000",
    [
      "Trois rangs de décalage cette fois. On garde les nombres à un chiffre : les résultats restent des milliers simples.",
      "La dernière question est la troisième, retournée. On le signale une fois l’ardoise levée : une multiplication se lit dans les deux sens.",
    ],
    [
      "4 × 1 000",
      "7 × 1 000",
      "9 × 1 000",
      "3 × 1 000",
      "6 × 1 000",
      "8 × 1 000",
      "5 × 1 000",
      "2 × 1 000",
      "10 × 100",
      "1 000 × 9",
    ],
    ["4 000", "7 000", "9 000", "3 000", "6 000", "8 000", "5 000", "2 000", "1 000", "9 000"],
    "10 × 100 vaut 1 000 : c’est la question qui explique toutes les autres. Si elle surprend, c’est le sens de 1 000 qu’on reprend, pas la technique.",
  ),

  f(
    "cm-dix-06",
    "Multiplier par 10, 100, 1 000",
    "Par 10, par 100, par 1 000",
    [
      "Les trois multiplicateurs, mélangés, avec des nombres à deux chiffres. Les résultats montent au-delà de dix mille.",
      "Lire le résultat à voix haute fait partie de l’exercice : « trente-deux mille » se dit avant de s’écrire.",
    ],
    [
      "14 × 10",
      "14 × 100",
      "14 × 1 000",
      "25 × 1 000",
      "8 × 1 000",
      "60 × 100",
      "32 × 1 000",
      "47 × 10",
      "90 × 1 000",
      "7 × 1 000",
    ],
    ["140", "1 400", "14 000", "25 000", "8 000", "6 000", "32 000", "470", "90 000", "7 000"],
    "Les trois premières sont le même nombre, agrandi trois fois de suite. On regarde s’il voit la suite avant qu’on la dicte.",
  ),

  f(
    "cm-dix-07",
    "Multiplier par 10, 100, 1 000",
    "Diviser par 10",
    [
      "Le chemin inverse : diviser par 10, c’est décaler d’un rang vers la droite. Les dizaines redeviennent des unités.",
      "Tous les nombres finissent par 0, donc tous les résultats tombent juste. On le dit d’emblée.",
    ],
    [
      "320 ÷ 10",
      "450 ÷ 10",
      "700 ÷ 10",
      "1 200 ÷ 10",
      "4 500 ÷ 10",
      "60 ÷ 10",
      "890 ÷ 10",
      "2 300 ÷ 10",
      "5 000 ÷ 10",
      "9 060 ÷ 10",
    ],
    ["32", "45", "70", "120", "450", "6", "89", "230", "500", "906"],
    "9 060 ÷ 10 garde son zéro du milieu. C’est la question qui distingue « enlever un zéro » de « décaler d’un rang » : la deuxième formule tient, l’autre non.",
  ),

  f(
    "cm-dix-08",
    "Multiplier par 10, 100, 1 000",
    "Diviser par 100",
    [
      "Deux rangs vers la droite. Tous les nombres dictés finissent par deux zéros : les résultats sont entiers.",
      "On peut redire la paire à chaque fois : « 1 200 divisé par 100, c’est combien de centaines ? ». Compter les centaines est souvent plus parlant que décaler.",
    ],
    [
      "400 ÷ 100",
      "1 200 ÷ 100",
      "3 500 ÷ 100",
      "900 ÷ 100",
      "6 000 ÷ 100",
      "2 400 ÷ 100",
      "7 800 ÷ 100",
      "5 000 ÷ 100",
      "4 100 ÷ 100",
      "9 900 ÷ 100",
    ],
    ["4", "12", "35", "9", "60", "24", "78", "50", "41", "99"],
    "« Combien de centaines dans 7 800 ? » et « 7 800 ÷ 100 » sont la même question. Si la version parlée passe mieux, on la garde comme entrée.",
  ),

  f(
    "cm-dix-09",
    "Multiplier par 10, 100, 1 000",
    "Multiplier et diviser, mélangés",
    [
      "Les deux sens alternent. Il faut entendre le signe avant le nombre : on décale à gauche ou à droite.",
      "Un geste de la main, vers la gauche pour multiplier, vers la droite pour diviser, aide plus qu’une explication de plus.",
    ],
    [
      "36 × 10",
      "480 ÷ 10",
      "52 × 100",
      "2 700 ÷ 100",
      "8 × 1 000",
      "6 300 ÷ 10",
      "75 × 10",
      "9 000 ÷ 100",
      "40 × 100",
      "1 500 ÷ 10",
    ],
    ["360", "48", "5 200", "27", "8 000", "630", "750", "90", "4 000", "150"],
    "Se tromper de sens donne un résultat cent fois trop grand ou trop petit. Si l’ordre de grandeur le surprend lui-même, c’est bon signe : il contrôle.",
  ),

  f(
    "cm-dix-10",
    "Multiplier par 10, 100, 1 000",
    "Diviser par 1 000",
    [
      "Trois rangs vers la droite. Les nombres dictés se lisent en milliers : 12 000, c’est douze milliers, donc douze.",
      "Lire le nombre avant de calculer suffit presque toujours à donner la réponse. On le lui fait remarquer après la deuxième.",
    ],
    [
      "4 000 ÷ 1 000",
      "12 000 ÷ 1 000",
      "35 000 ÷ 1 000",
      "9 000 ÷ 1 000",
      "60 000 ÷ 1 000",
      "7 000 ÷ 1 000",
      "28 000 ÷ 1 000",
      "50 000 ÷ 1 000",
      "100 000 ÷ 1 000",
      "3 000 ÷ 1 000",
    ],
    ["4", "12", "35", "9", "60", "7", "28", "50", "100", "3"],
    "100 000 ÷ 1 000 vaut 100, et c’est celle qui fait douter le plus longtemps. Compter les zéros ensemble, à voix haute, lève le doute sans rien démontrer.",
  ),

  f(
    "cm-dix-11",
    "Multiplier par 10, 100, 1 000",
    "Multiplier par 20, par 30, par 200",
    [
      "Le pas suivant : 6 × 20, c’est 6 × 2 puis × 10. On fait les deux morceaux à voix haute, dans cet ordre.",
      "On peut lui laisser écrire le résultat intermédiaire avant le résultat final. Deux nombres sur l’ardoise valent mieux qu’un calcul perdu en route.",
    ],
    [
      "6 × 20",
      "8 × 30",
      "7 × 200",
      "12 × 20",
      "9 × 40",
      "5 × 300",
      "15 × 20",
      "4 × 700",
      "25 × 20",
      "6 × 2 000",
    ],
    ["120", "240", "1 400", "240", "360", "1 500", "300", "2 800", "500", "12 000"],
    "Les deux premières et la quatrième donnent 240 par deux chemins différents. Le remarquer, c’est voir que plusieurs routes mènent au même nombre.",
  ),

  f(
    "cm-dix-12",
    "Multiplier par 10, 100, 1 000",
    "Les nombres à virgule par 10 et par 100",
    [
      "Même décalage, avec une virgule dans le nombre. 2,5 × 10 fait 25 : la virgule ne bouge pas, ce sont les chiffres qui changent de rang.",
      "On écrit la première ensemble, en alignant 2,5 au-dessus de 25. Le voir compte plus que l’entendre.",
    ],
    [
      "2,5 × 10",
      "0,7 × 10",
      "3,4 × 10",
      "1,25 × 100",
      "0,8 × 100",
      "45 ÷ 10",
      "7 ÷ 10",
      "12,5 × 10",
      "230 ÷ 100",
      "6,05 × 100",
    ],
    ["25", "7", "34", "125", "80", "4,5", "0,7", "125", "2,3", "605"],
    "0,7 × 10 puis 7 ÷ 10 sont le même aller-retour. Si le second vient sans peine après le premier, la virgule a cessé d’être un obstacle.",
  ),

  f(
    "cm-dix-13",
    "Multiplier par 10, 100, 1 000",
    "Le facteur qui manque",
    [
      "On retourne la question : « sept fois combien font sept cents ? ». La réponse est 10, 100 ou 1 000 — ou bien le nombre de départ.",
      "Regarder le nombre de zéros gagnés donne la réponse. On le dit après la deuxième question, pas avant.",
    ],
    [
      "7 fois combien font 700 ?",
      "4 fois combien font 4 000 ?",
      "combien de fois 10 pour faire 320 ?",
      "9 fois combien font 90 ?",
      "combien de fois 100 pour faire 5 600 ?",
      "12 fois combien font 12 000 ?",
      "combien de fois 10 pour faire 1 500 ?",
      "60 fois combien font 6 000 ?",
      "combien de fois 1 000 pour faire 8 000 ?",
      "combien de fois 100 pour faire 400 ?",
    ],
    ["100", "1 000", "32", "10", "56", "1 000", "150", "100", "8", "4"],
    "Les questions alternent entre « trouver le multiplicateur » et « trouver le nombre de départ ». Distinguer les deux est le vrai travail ; le calcul, lui, est déjà là.",
  ),

  f(
    "cm-dix-14",
    "Multiplier par 10, 100, 1 000",
    "Le grand mélange de fin d’année",
    [
      "Multiplications, divisions, dizaines rondes, nombres à virgule : la série entière, mélangée.",
      "Dernière fiche de la série. On peut annoncer qu’elle reprend ce qui a été vu depuis septembre, sans rien de neuf.",
    ],
    [
      "47 × 100",
      "6 200 ÷ 10",
      "9 × 1 000",
      "3,5 × 10",
      "8 400 ÷ 100",
      "25 × 20",
      "70 000 ÷ 1 000",
      "16 × 100",
      "90 ÷ 10",
      "5 × 400",
    ],
    ["4 700", "620", "9 000", "35", "84", "500", "70", "1 600", "9", "2 000"],
    "Une seule idée tient toute la fiche : les chiffres changent de rang, la virgule reste où elle est. Si cette phrase lui parle en fin de séance, l’année a porté.",
  ),

  /* ---------------------------------------------------------------- */
  /* Multiplier par 4 et par 8 — 14 fiches                             */
  /* ---------------------------------------------------------------- */

  f(
    "cm-quatre-01",
    "Multiplier par 4 et par 8",
    "Par 4, c’est doubler deux fois",
    [
      "On installe la méthode : 4 × 7, c’est 7 doublé (14), puis doublé encore (28). On le fait dire avant de commencer.",
      "Il peut écrire le nombre du milieu sur l’ardoise puis entourer la réponse. Les deux étapes visibles valent mieux qu’une réponse devinée.",
    ],
    ["4 × 3", "4 × 5", "4 × 6", "4 × 7", "4 × 8", "4 × 9", "4 × 10", "4 × 12", "4 × 15", "4 × 11"],
    ["12", "20", "24", "28", "32", "36", "40", "48", "60", "44"],
    "Le double doublement est-il employé, ou récite-t-il la table de 4 ? Les deux mènent au résultat ; le premier servira encore quand les nombres grandiront.",
  ),

  f(
    "cm-quatre-02",
    "Multiplier par 4 et par 8",
    "Par 4, jusqu’à 25",
    [
      "Toujours deux doublements, avec des nombres qui dépassent 12. 4 × 18, c’est 36 puis 72.",
      "On laisse le temps du premier doublement avant de dicter la suite. Presser ici casse la méthode qu’on est en train d’installer.",
    ],
    ["4 × 13", "4 × 14", "4 × 16", "4 × 18", "4 × 20", "4 × 21", "4 × 22", "4 × 25", "4 × 17", "4 × 24"],
    ["52", "56", "64", "72", "80", "84", "88", "100", "68", "96"],
    "4 × 25 = 100 est un repère qui resservira toute l’année, en monnaie comme en mesures. On peut s’y arrêter un instant quand elle tombe.",
  ),

  f(
    "cm-quatre-03",
    "Multiplier par 4 et par 8",
    "Par 4, sur les dizaines",
    [
      "Des dizaines rondes : 4 × 30, c’est 4 × 3 et un zéro, ou 30 doublé deux fois. Les deux chemins marchent, on peut lui laisser le choix.",
      "On lui demande, pour deux ou trois questions, par où il est passé. Dire son chemin l’ancre mieux que le refaire.",
    ],
    ["4 × 30", "4 × 50", "4 × 40", "4 × 60", "4 × 70", "4 × 90", "4 × 25", "4 × 35", "4 × 45", "4 × 80"],
    ["120", "200", "160", "240", "280", "360", "100", "140", "180", "320"],
    "Avec 25, 35 et 45 glissés au milieu, la méthode des dizaines ne suffit plus. C’est là qu’on voit s’il a deux routes disponibles ou une seule.",
  ),

  f(
    "cm-quatre-04",
    "Multiplier par 4 et par 8",
    "Par 8, c’est doubler trois fois",
    [
      "Nouvelle méthode, même famille : 8 × 6, c’est 12, puis 24, puis 48. Trois étapes, on les compte sur les doigts en le disant.",
      "Trois doublements, c’est long à tenir de tête. L’ardoise accueille les nombres intermédiaires sans que ce soit une faiblesse.",
    ],
    ["8 × 3", "8 × 5", "8 × 6", "8 × 7", "8 × 9", "8 × 10", "8 × 4", "8 × 12", "8 × 11", "8 × 15"],
    ["24", "40", "48", "56", "72", "80", "32", "96", "88", "120"],
    "Perd-il le compte des doublements en route ? Si oui, écrire les trois nombres à la suite, puis entourer le dernier, règle presque toujours la chose.",
  ),

  f(
    "cm-quatre-05",
    "Multiplier par 4 et par 8",
    "Par 4 et par 8, mélangés",
    [
      "Deux doublements ou trois, selon la question. Ce qu’il faut entendre, c’est le multiplicateur.",
      "On peut lui faire annoncer « deux fois » ou « trois fois » avant de calculer. Nommer la méthode évite de s’arrêter au milieu.",
    ],
    ["4 × 7", "8 × 6", "4 × 16", "8 × 9", "4 × 25", "8 × 7", "4 × 12", "8 × 20", "4 × 30", "8 × 25"],
    ["28", "48", "64", "72", "100", "56", "48", "160", "120", "200"],
    "8 × 25 vaut 200, soit le double de 4 × 25. Faire le rapprochement entre les deux, quand ils se suivent, éclaire toute la série d’un coup.",
  ),

  f(
    "cm-quatre-06",
    "Multiplier par 4 et par 8",
    "Par 4, avec une retenue",
    [
      "Des nombres à deux chiffres qui obligent à retenir. 4 × 26, c’est 52 puis 104.",
      "On ne demande plus le détail à chaque fois, seulement quand une question s’arrête. Le chemin est devenu un outil, plus une consigne.",
    ],
    ["4 × 26", "4 × 37", "4 × 43", "4 × 58", "4 × 64", "4 × 75", "4 × 86", "4 × 92", "4 × 19", "4 × 47"],
    ["104", "148", "172", "232", "256", "300", "344", "368", "76", "188"],
    "4 × 19 se fait plus vite par 4 × 20 moins 4. Si ce raccourci apparaît spontanément, c’est qu’il commence à choisir sa méthode selon le nombre.",
  ),

  f(
    "cm-quatre-07",
    "Multiplier par 4 et par 8",
    "Par 8, sur les nombres à deux chiffres",
    [
      "Trois doublements sur des nombres qui dépassent 12. 8 × 13, c’est 26, 52, 104.",
      "Une variante utile : 8 × 13, c’est aussi 4 × 13 doublé. On peut la proposer si la chaîne des trois doublements se casse trop souvent.",
    ],
    ["8 × 13", "8 × 16", "8 × 24", "8 × 35", "8 × 42", "8 × 50", "8 × 17", "8 × 23", "8 × 45", "8 × 60"],
    ["104", "128", "192", "280", "336", "400", "136", "184", "360", "480"],
    "8 × 50 = 400 sort d’un coup quand on voit 8 × 5 derrière. Les questions rondes servent de respiration au milieu des autres.",
  ),

  f(
    "cm-quatre-08",
    "Multiplier par 4 et par 8",
    "Par 4 et par 8, plus grands",
    [
      "Des nombres à trois chiffres ronds. Les doublements restent la méthode ; les résultats franchissent le millier.",
      "Plusieurs questions tombent sur 1 000 ou sur des centaines rondes. C’est fait exprès : ces repères-là se retiennent bien.",
    ],
    ["4 × 120", "8 × 110", "4 × 250", "8 × 125", "4 × 175", "8 × 75", "4 × 320", "8 × 90", "4 × 450", "8 × 150"],
    ["480", "880", "1 000", "1 000", "700", "600", "1 280", "720", "1 800", "1 200"],
    "4 × 250 et 8 × 125 donnent tous deux 1 000, et se suivent. C’est le moment de dire que 250 doublé fait 500, et 125 doublé fait 250 : la même famille de nombres.",
  ),

  f(
    "cm-quatre-09",
    "Multiplier par 4 et par 8",
    "Par 16, en doublant quatre fois",
    [
      "Un cran de plus : 16 × 3, c’est 6, 12, 24, 48. Quatre doublements, qu’on compte ensemble la première fois.",
      "Autre route possible, à proposer si la chaîne est trop longue : 16 × 3, c’est 8 × 3 doublé, soit 24 doublé.",
    ],
    ["16 × 3", "16 × 5", "16 × 4", "16 × 6", "16 × 10", "16 × 7", "16 × 9", "16 × 12", "16 × 20", "16 × 25"],
    ["48", "80", "64", "96", "160", "112", "144", "192", "320", "400"],
    "Quatre doublements de suite demandent surtout de la mémoire de travail. S’il se perd au troisième, c’est l’écriture des étapes qu’on renforce, pas le calcul.",
  ),

  f(
    "cm-quatre-10",
    "Multiplier par 4 et par 8",
    "Par 40 et par 80",
    [
      "40 × 6, c’est 4 × 6 puis × 10. On énonce les deux morceaux dans cet ordre avant de commencer.",
      "Le zéro final s’oublie vite. Si c’est le cas, on redit la question et on demande d’abord 4 × 6, puis ce qu’il faut en faire.",
    ],
    ["40 × 6", "80 × 4", "40 × 9", "80 × 7", "40 × 12", "80 × 9", "40 × 25", "80 × 15", "40 × 30", "80 × 25"],
    ["240", "320", "360", "560", "480", "720", "1 000", "1 200", "1 200", "2 000"],
    "80 × 15 et 40 × 30 donnent le même résultat, 1 200, et se suivent. Deux chemins, un seul nombre : ça vaut d’être dit à voix haute.",
  ),

  f(
    "cm-quatre-11",
    "Multiplier par 4 et par 8",
    "Par 400 et par 800",
    [
      "Deux zéros à porter au lieu d’un. 400 × 3, c’est 4 × 3 et deux zéros, donc 1 200.",
      "On lit chaque résultat à voix haute avant de passer à la suivante. « Quatre mille huit cents » se dit, puis s’écrit.",
    ],
    [
      "400 × 3",
      "800 × 2",
      "400 × 7",
      "800 × 5",
      "400 × 9",
      "800 × 6",
      "400 × 12",
      "800 × 9",
      "400 × 25",
      "800 × 12",
    ],
    ["1 200", "1 600", "2 800", "4 000", "3 600", "4 800", "4 800", "7 200", "10 000", "9 600"],
    "400 × 12 et 800 × 6 valent tous deux 4 800 : on double l’un, on divise l’autre par deux, le produit ne bouge pas. C’est une idée à laisser mûrir.",
  ),

  f(
    "cm-quatre-12",
    "Multiplier par 4 et par 8",
    "Le facteur qui manque",
    [
      "La question se retourne : « quatre fois combien font quarante-huit ? ». Il écrit seulement le nombre manquant.",
      "Chercher, c’est ici diviser par 4 ou par 8 — donc couper en deux, deux ou trois fois. On peut le dire après les premières.",
    ],
    [
      "4 fois combien font 48 ?",
      "8 fois combien font 56 ?",
      "4 fois combien font 100 ?",
      "8 fois combien font 120 ?",
      "combien de fois 4 pour faire 36 ?",
      "8 fois combien font 400 ?",
      "4 fois combien font 240 ?",
      "combien de fois 8 pour faire 96 ?",
      "4 fois combien font 1 000 ?",
      "8 fois combien font 1 000 ?",
    ],
    ["12", "7", "25", "15", "9", "50", "60", "12", "250", "125"],
    "Les deux dernières se répondent : 250 et 125, l’un moitié de l’autre. Si ce lien se voit, la division par 8 devient la division par 4, encore coupée en deux.",
  ),

  f(
    "cm-quatre-13",
    "Multiplier par 4 et par 8",
    "Par 4 et par 8, sur trois chiffres",
    [
      "Des nombres à trois chiffres, quelconques. Les doublements tiennent toujours : 4 × 126, c’est 252 puis 504.",
      "Deux ou trois questions suffiront peut-être à remplir les quinze minutes. On s’arrête où le temps s’arrête, sans le dire comme un manque.",
    ],
    [
      "4 × 126",
      "8 × 115",
      "4 × 234",
      "8 × 205",
      "4 × 375",
      "8 × 350",
      "4 × 505",
      "8 × 425",
      "4 × 750",
      "8 × 625",
    ],
    ["504", "920", "936", "1 640", "1 500", "2 800", "2 020", "3 400", "3 000", "5 000"],
    "8 × 625 = 5 000 et 4 × 750 = 3 000 tombent rond. Ces arrivées nettes, après un calcul long, valent souvent mieux qu’un commentaire.",
  ),

  f(
    "cm-quatre-14",
    "Multiplier par 4 et par 8",
    "Le grand mélange de fin d’année",
    [
      "Par 4, par 8, par 16, par 40, par 800, et un facteur manquant : la série entière en dix questions.",
      "Dernière fiche de la série. Une seule phrase l’a portée toute l’année : par 4 on double deux fois, par 8 trois fois.",
    ],
    [
      "4 × 68",
      "8 × 45",
      "16 × 6",
      "40 × 15",
      "4 × 250",
      "8 fois combien font 720 ?",
      "800 × 4",
      "8 × 125",
      "4 × 1 250",
      "80 × 9",
    ],
    ["272", "360", "96", "600", "1 000", "90", "3 200", "1 000", "5 000", "720"],
    "8 × 45 et 80 × 9 encadrent la fiche et donnent tous deux 720. Le remarquer en fin de séance, c’est refermer la série sur elle-même.",
  ),

  /* ---------------------------------------------------------------- */
  /* Multiplier par 5 et par 50 — 13 fiches                            */
  /* ---------------------------------------------------------------- */

  f(
    "cm-cinq-01",
    "Multiplier par 5 et par 50",
    "La table de 5",
    [
      "On part de ce qui est connu : la table de 5 se compte de 5 en 5, et tous les résultats finissent par 0 ou par 5.",
      "Question dictée, ardoise levée, on efface. Les deux dernières sortent de la table apprise : on prévient qu’elles vont un peu plus loin.",
    ],
    ["5 × 3", "5 × 6", "5 × 4", "5 × 8", "5 × 7", "5 × 9", "5 × 10", "5 × 12", "5 × 11", "5 × 20"],
    ["15", "30", "20", "40", "35", "45", "50", "60", "55", "100"],
    "Finir par 0 ou par 5 donne un moyen de se relire tout seul. C’est ce contrôle-là qu’on cherche à installer, plus que la vitesse.",
  ),

  f(
    "cm-cinq-02",
    "Multiplier par 5 et par 50",
    "Par 5 : la moitié, puis fois 10",
    [
      "La méthode du jour : multiplier par 5, c’est prendre la moitié puis multiplier par 10. Pour 5 × 14 : 7, puis 70.",
      "Tous les nombres dictés sont pairs, la moitié tombe donc juste à chaque fois. On le dit avant de commencer.",
    ],
    ["5 × 14", "5 × 16", "5 × 18", "5 × 24", "5 × 26", "5 × 32", "5 × 40", "5 × 48", "5 × 60", "5 × 36"],
    ["70", "80", "90", "120", "130", "160", "200", "240", "300", "180"],
    "L’ordre compte peu : la moitié d’abord ou le fois 10 d’abord donnent le même nombre. S’il essaie les deux, c’est une exploration à encourager.",
  ),

  f(
    "cm-cinq-03",
    "Multiplier par 5 et par 50",
    "Par 5, sur les nombres impairs",
    [
      "Cette fois les nombres sont impairs : la moitié ne tombe plus ronde. Pour 5 × 13, on fait plutôt 13 × 10 = 130, puis la moitié, 65.",
      "On inverse donc l’ordre : fois 10 d’abord, moitié ensuite. On le montre sur la première, puis on dicte.",
    ],
    ["5 × 13", "5 × 15", "5 × 17", "5 × 21", "5 × 23", "5 × 25", "5 × 31", "5 × 45", "5 × 27", "5 × 33"],
    ["65", "75", "85", "105", "115", "125", "155", "225", "135", "165"],
    "Inverser l’ordre des deux gestes selon la parité du nombre est une vraie décision de calcul. La prendre seul vaut plus que n’importe quelle vitesse.",
  ),

  f(
    "cm-cinq-04",
    "Multiplier par 5 et par 50",
    "Par 5, sur les dizaines et les centaines",
    [
      "Des nombres ronds : 5 × 30, c’est la moitié de 300, donc 150. Ou 5 × 3 avec un zéro. Les deux se valent.",
      "On lui demande quelle route il a prise sur deux ou trois questions, sans chercher à en imposer une.",
    ],
    ["5 × 30", "5 × 50", "5 × 70", "5 × 100", "5 × 120", "5 × 200", "5 × 140", "5 × 300", "5 × 160", "5 × 400"],
    ["150", "250", "350", "500", "600", "1 000", "700", "1 500", "800", "2 000"],
    "5 × 200 = 1 000 est le repère de la fiche : la moitié de deux mille. Il servira plus tard pour multiplier par 50 et par 500.",
  ),

  f(
    "cm-cinq-05",
    "Multiplier par 5 et par 50",
    "Multiplier par 50",
    [
      "Nouvelle famille : multiplier par 50, c’est prendre la moitié puis multiplier par 100. Pour 50 × 6 : 3, puis 300.",
      "On peut aussi dire « 50 × 6, c’est 5 × 6 avec un zéro de plus ». Selon la question, l’une ou l’autre route est plus courte.",
    ],
    ["50 × 2", "50 × 4", "50 × 6", "50 × 8", "50 × 10", "50 × 3", "50 × 7", "50 × 9", "50 × 12", "50 × 20"],
    ["100", "200", "300", "400", "500", "150", "350", "450", "600", "1 000"],
    "Les nombres impairs (3, 7, 9) obligent à passer par la seconde route. Voir laquelle il choisit dit où en est sa souplesse de calcul.",
  ),

  f(
    "cm-cinq-06",
    "Multiplier par 5 et par 50",
    "Par 50, sur les nombres à deux chiffres",
    [
      "Tous les nombres sont pairs : la moitié tombe juste, puis on multiplie par 100. Pour 50 × 14 : 7, puis 700.",
      "Les résultats deviennent grands. Les lire à voix haute avant de les écrire évite la moitié des confusions de zéros.",
    ],
    ["50 × 14", "50 × 16", "50 × 24", "50 × 30", "50 × 18", "50 × 22", "50 × 40", "50 × 36", "50 × 26", "50 × 44"],
    ["700", "800", "1 200", "1 500", "900", "1 100", "2 000", "1 800", "1 300", "2 200"],
    "50 × 30 = 1 500 demande de couper 30 en deux, ce qui est immédiat, puis de porter deux zéros, ce qui l’est moins. On regarde lequel des deux gestes coûte.",
  ),

  f(
    "cm-cinq-07",
    "Multiplier par 5 et par 50",
    "Par 5 et par 50, mélangés",
    [
      "Les deux alternent. Un zéro d’écart entre les deux résultats, donc une écoute attentive du multiplicateur.",
      "On peut faire répéter la question avant de calculer, les premières fois.",
    ],
    ["5 × 18", "50 × 6", "5 × 46", "50 × 14", "5 × 33", "50 × 22", "5 × 120", "50 × 9", "5 × 84", "50 × 30"],
    ["90", "300", "230", "700", "165", "1 100", "600", "450", "420", "1 500"],
    "Une réponse dix fois trop petite signale qu’il a entendu 5 au lieu de 50. C’est une question de diction, et on la corrige sans y revenir deux fois.",
  ),

  f(
    "cm-cinq-08",
    "Multiplier par 5 et par 50",
    "Multiplier par 500",
    [
      "Un rang de plus : multiplier par 500, c’est la moitié de multiplier par 1 000. Pour 500 × 6 : la moitié de 6 000, donc 3 000.",
      "On énonce la règle une fois, puis on dicte. Les résultats sont ronds, ce qui rend la relecture simple.",
    ],
    [
      "500 × 2",
      "500 × 4",
      "500 × 6",
      "500 × 3",
      "500 × 8",
      "500 × 7",
      "500 × 10",
      "500 × 9",
      "500 × 12",
      "500 × 20",
    ],
    ["1 000", "2 000", "3 000", "1 500", "4 000", "3 500", "5 000", "4 500", "6 000", "10 000"],
    "500 × 2 = 1 000 est l’ancre de toute la fiche. Si elle est disponible d’emblée, les autres se déduisent presque sans calcul.",
  ),

  f(
    "cm-cinq-09",
    "Multiplier par 5 et par 50",
    "Multiplier par 25, le quart de 100",
    [
      "Cousin de la famille : 25, c’est le quart de 100. Multiplier par 25, c’est multiplier par 100 puis prendre le quart — ou par 100 puis couper deux fois en deux.",
      "Autre route, souvent plus courte : 25 × 8, c’est 25 × 4 (soit 100) doublé, donc 200. On la propose si la première s’essouffle.",
    ],
    ["25 × 4", "25 × 8", "25 × 3", "25 × 6", "25 × 12", "25 × 10", "25 × 20", "25 × 16", "25 × 40", "25 × 9"],
    ["100", "200", "75", "150", "300", "250", "500", "400", "1 000", "225"],
    "25 × 4 = 100 et 25 × 40 = 1 000 encadrent la fiche. Ce sont deux repères de monnaie et de mesure qui resserviront souvent.",
  ),

  f(
    "cm-cinq-10",
    "Multiplier par 5 et par 50",
    "Par 5, sur les nombres à trois chiffres",
    [
      "La méthode ne bouge pas : fois 10, puis la moitié. Pour 5 × 124 : 1 240, puis 620.",
      "Les nombres sont longs à tenir en tête. Écrire le résultat intermédiaire sur l’ardoise avant de le couper en deux est ici la règle, pas l’exception.",
    ],
    ["5 × 124", "5 × 246", "5 × 138", "5 × 350", "5 × 462", "5 × 275", "5 × 508", "5 × 640", "5 × 333", "5 × 888"],
    ["620", "1 230", "690", "1 750", "2 310", "1 375", "2 540", "3 200", "1 665", "4 440"],
    "5 × 275 et 5 × 333 portent sur des nombres impairs : la moitié se prend après le fois 10, sinon elle ne tombe pas juste. On regarde s’il ajuste l’ordre tout seul.",
  ),

  f(
    "cm-cinq-11",
    "Multiplier par 5 et par 50",
    "Par 50 et par 500, mélangés",
    [
      "Deux multiplicateurs proches à l’oreille, dix fois plus éloignés dans le résultat. On articule nettement.",
      "Lire chaque résultat à voix haute avant de l’écrire : « six mille » ou « douze mille » se contrôlent mieux dits qu’écrits.",
    ],
    [
      "50 × 12",
      "500 × 6",
      "50 × 34",
      "500 × 9",
      "50 × 46",
      "500 × 14",
      "50 × 80",
      "500 × 12",
      "50 × 120",
      "500 × 24",
    ],
    ["600", "3 000", "1 700", "4 500", "2 300", "7 000", "4 000", "6 000", "6 000", "12 000"],
    "500 × 12 et 50 × 120 donnent tous deux 6 000, et se suivent. Un facteur multiplié par dix, l’autre divisé par dix : le produit tient. C’est une belle chose à voir.",
  ),

  f(
    "cm-cinq-12",
    "Multiplier par 5 et par 50",
    "Le facteur qui manque",
    [
      "La question se retourne : « cinq fois combien font quarante-cinq ? ». Il écrit le nombre manquant, rien d’autre.",
      "Chercher revient à diviser par 5, donc à multiplier par 2 puis diviser par 10. On peut le dire après les deux premières, si c’est utile.",
    ],
    [
      "5 fois combien font 45 ?",
      "5 fois combien font 200 ?",
      "50 fois combien font 350 ?",
      "combien de fois 5 pour faire 125 ?",
      "50 fois combien font 1 000 ?",
      "500 fois combien font 4 000 ?",
      "5 fois combien font 600 ?",
      "combien de fois 50 pour faire 2 500 ?",
      "25 fois combien font 100 ?",
      "500 fois combien font 10 000 ?",
    ],
    ["9", "40", "7", "25", "20", "8", "120", "50", "4", "20"],
    "50 fois 20 et 500 fois 20 font 1 000 puis 10 000 : le même facteur manquant, deux résultats. Si la répétition l’amuse, c’est qu’il lit la liste et pas seulement les questions.",
  ),

  f(
    "cm-cinq-13",
    "Multiplier par 5 et par 50",
    "Le grand mélange de fin d’année",
    [
      "Par 5, par 25, par 50, par 500, et un facteur manquant : la série entière réunie.",
      "Dernière fiche de la série. Une phrase l’a portée depuis septembre : par 5 c’est la moitié de par 10, par 50 la moitié de par 100.",
    ],
    [
      "5 × 68",
      "50 × 16",
      "25 × 8",
      "500 × 7",
      "5 × 246",
      "50 × 48",
      "5 fois combien font 350 ?",
      "500 × 12",
      "25 × 12",
      "50 × 90",
    ],
    ["340", "800", "200", "3 500", "1 230", "2 400", "70", "6 000", "300", "4 500"],
    "Dix mois tiennent dans une idée : couper en deux, puis décaler les rangs. Ce qui reste à travailler, ce sont les nombres où la moitié ne tombe pas ronde.",
  ),
];
