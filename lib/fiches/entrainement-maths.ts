/**
 * Reprendre les mathématiques entre deux leçons. Six rituels, soixante-dix séances.
 *
 * Une fiche donne **les exercices eux-mêmes et leurs corrigés**. Ces séances se font sur le cahier, menées par un adulte, et elles ne disaient que « trois problèmes » sans dire lesquels.
 *
 * Ce qu'une fiche donne, et pourquoi : voir `lib/fiches/types.ts`. En deux
 * mots — le matériel exact, le corrigé quand il y en a un, et ce qu'on
 * regarde. Un adulte qui l'ouvre ne doit plus rien avoir à chercher.
 *
 * Les six séries, dans l'ordre où elles tombent :
 *
 * - « Opérations posées » — 8 fiches de dix opérations, résultats donnés.
 * - « Problèmes du jour » — 10 fiches de trois problèmes entièrement résolus.
 * - « Reprendre la leçon de maths » — 12 fiches : la méthode de reprise, qui
 *   ne dépend pas de la leçon, plus huit rappels oraux du moment de l'année.
 * - « Géométrie : tracer » — 11 programmes de construction, étape par étape,
 *   avec en vis-à-vis ce qu'on doit voir apparaître à chacune.
 * - « Mesurer pour de vrai » — 12 relevés dans la maison, avec les ordres de
 *   grandeur attendus. Une mesure différente n'est pas une mesure fausse :
 *   c'est leur maison, pas la maison moyenne.
 * - « Le nombre du jour » — 17 nombres, six choses à en faire, réponses.
 *
 * La progression suit le BO spécial n° 16 du 17 avril 2025, cycle 3 : en
 * périodes 1 et 2, les entiers restent à quatre chiffres. Les décimaux
 * n'arrivent qu'en seconde moitié d'année, et les virgules en colonne plus
 * tard encore.
 *
 * **Réservé aux adultes** : ces fiches portent les corrigés.
 *
 * Rien de tout ceci n'a été relu par un enseignant. Ça doit l'être.
 */

import { f, type Fiche } from "./types";

export const entrainementMaths: Fiche[] = [
  /* ------------------------------------------------------------------ *
   * « Opérations posées » — 8 fiches, de septembre à juillet.
   * ------------------------------------------------------------------ */

  f(
    "em-ops-01",
    "Opérations posées",
    "Dix opérations · sans retenue, pour prendre la pose",
    [
      "Les dix opérations se posent sur le cahier, une par ligne, les unités sous les unités. C’est l’alignement qu’on soigne d’abord ; le reste suit.",
      "Avant chaque calcul, demander l’ordre de grandeur à voix haute : « 342 et 215, ça fait plus ou moins que 500 ? ». L’estimation passe avant, la vérification après.",
      "Corriger au fur et à mesure, opération par opération. Dix corrections d’un coup à la fin, c’est ce qu’on évite ici.",
    ],
    [
      "342 + 215",
      "528 + 361",
      "1 204 + 573",
      "2 130 + 1 425",
      "687 − 342",
      "954 − 631",
      "1 578 − 405",
      "2 846 − 1 523",
      "123 × 3",
      "212 × 4",
    ],
    ["557", "889", "1 777", "3 555", "345", "323", "1 173", "1 323", "369", "848"],
    "Regarder les colonnes avant de regarder les résultats : beaucoup d’écarts viennent d’un chiffre posé une colonne trop loin, pas d’un calcul. S’il aligne bien et qu’un résultat tombe quand même à côté, c’est la table qui demande à être reprise, et c’est un autre travail.",
  ),

  f(
    "em-ops-02",
    "Opérations posées",
    "Dix opérations · les retenues arrivent",
    [
      "Même dispositif qu’en série 1, mais toutes les opérations ont des retenues. Lui rappeler d’écrire la retenue en petit, en haut de la colonne suivante, et de la barrer une fois utilisée.",
      "Estimer d’abord en arrondissant : « 468 plus 357, c’est à peu près 470 plus 360, donc autour de 830 ». Le résultat exact ne doit pas surprendre.",
      "Pour les soustractions, lui laisser choisir sa technique — celle du cassage ou celle du saut. On ne change pas de méthode en cours de série.",
    ],
    [
      "468 + 357",
      "739 + 186",
      "1 265 + 848",
      "3 476 + 2 589",
      "732 − 458",
      "903 − 176",
      "1 452 − 687",
      "4 130 − 2 745",
      "146 × 5",
      "238 × 6",
    ],
    ["825", "925", "2 113", "6 065", "274", "727", "765", "1 385", "730", "1 428"],
    "Le point à observer : la retenue est-elle écrite, ou tenue de tête ? Tenue de tête, elle s’oublie dès que l’opération dépasse trois colonnes. Si les trois premières colonnes tombent juste et la quatrième non, c’est le signe.",
  ),

  f(
    "em-ops-03",
    "Opérations posées",
    "Dix opérations · les zéros qui gênent",
    [
      "Les soustractions de cette fiche contiennent des zéros au milieu : 5 004 − 2 678, 8 000 − 4 567. C’est le passage le plus coûteux de l’année, et il se prépare en le disant avant de commencer.",
      "Sur la première soustraction à zéros, faire l’opération ensemble, à voix haute, l’adulte tenant le crayon. Les suivantes, seul.",
      "Vérifier une addition par la preuve : on refait la colonne du bas vers le haut. Vérifier une soustraction en ajoutant le résultat au nombre du bas.",
    ],
    [
      "2 847 + 1 596",
      "3 758 + 2 486",
      "1 909 + 4 097",
      "5 628 + 3 479",
      "5 004 − 2 678",
      "3 200 − 1 456",
      "6 015 − 3 928",
      "8 000 − 4 567",
      "324 × 7",
      "486 × 8",
    ],
    ["4 443", "6 244", "6 006", "9 107", "2 326", "1 744", "2 087", "3 433", "2 268", "3 888"],
    "Les zéros intermédiaires : s’il bloque dessus, ce n’est pas la soustraction qu’il faut reprendre mais l’échange — une centaine qui devient dix dizaines. Le montrer avec des pièces ou des bâtons plutôt qu’avec des règles.",
  ),

  f(
    "em-ops-04",
    "Opérations posées",
    "Dix opérations · au-delà de dix mille",
    [
      "Les nombres passent à cinq et six chiffres. Lui faire lire chaque nombre à voix haute avant de le poser : un nombre qu’on sait dire, on le pose droit.",
      "Deux multiplications à deux chiffres au multiplicateur. Rappeler le décalage de la deuxième ligne — on peut y écrire un zéro plutôt que laisser un blanc, c’est plus sûr.",
      "Estimer avant : « 253 fois 14, c’est à peu près 250 fois 14, donc autour de 3 500 ».",
    ],
    [
      "12 458 + 7 396",
      "23 607 + 18 495",
      "45 128 + 36 974",
      "9 876 + 54 321",
      "20 400 − 13 675",
      "35 002 − 17 849",
      "50 000 − 28 736",
      "41 305 − 26 478",
      "253 × 14",
      "407 × 23",
    ],
    ["19 854", "42 102", "82 102", "64 197", "6 725", "17 153", "21 264", "14 827", "3 542", "9 361"],
    "Sur 9 876 + 54 321, regarder s’il aligne par la droite ou par la gauche : deux nombres de longueurs différentes, c’est là que l’habitude se voit. Et sur les multiplications, regarder le décalage de la deuxième ligne avant de regarder le total.",
  ),

  f(
    "em-ops-05",
    "Opérations posées",
    "Dix opérations · multiplier par un nombre à deux chiffres",
    [
      "Les quatre premières et les quatre suivantes servent d’échauffement ; le cœur de la fiche, ce sont les deux multiplications de la fin.",
      "Pour 368 × 25, lui proposer la vérification par le double : 368 × 25, c’est 368 × 100 divisé par 4. Trouver deux fois la même chose par deux chemins, c’est ce qui installe la confiance.",
      "Si la fatigue arrive après six opérations, s’arrêter là et noter où on s’est arrêtés. Les quatre restantes ouvriront la prochaine séance.",
    ],
    [
      "34 567 + 28 943",
      "106 782 + 49 318",
      "8 594 + 76 209",
      "123 456 + 87 654",
      "60 000 − 34 567",
      "102 345 − 78 906",
      "45 010 − 9 876",
      "200 000 − 143 758",
      "368 × 25",
      "542 × 36",
    ],
    ["63 510", "156 100", "84 803", "211 110", "25 433", "23 439", "35 134", "56 242", "9 200", "19 512"],
    "Regarder la tenue du cahier autant que les résultats : après six opérations, les colonnes se resserrent et les chiffres montent les uns sur les autres. Quand ça arrive, c’est le moment de s’arrêter, pas de pousser.",
  ),

  f(
    "em-ops-06",
    "Opérations posées",
    "Dix opérations · les virgules entrent en colonne",
    [
      "Première fiche avec des décimaux. La règle tient en une phrase : on aligne les virgules, et tout le reste se range tout seul.",
      "Pour 40 − 17,5, lui montrer qu’on peut écrire 40,0 : ajouter un zéro après la virgule ne change pas le nombre et rend la colonne complète.",
      "Les deux multiplications restent entières : on ne mélange pas deux nouveautés dans la même séance.",
    ],
    [
      "12,5 + 7,8",
      "34,6 + 15,75",
      "108,4 + 27,9",
      "6,25 + 13,7",
      "25,4 − 12,7",
      "40 − 17,5",
      "63,2 − 28,45",
      "100 − 36,8",
      "476 × 32",
      "809 × 47",
    ],
    ["20,3", "50,35", "136,3", "19,95", "12,7", "22,5", "34,75", "63,2", "15 232", "38 023"],
    "La virgule du résultat : est-elle sous les autres virgules, ou posée après coup au jugé ? Posée après coup, elle tombera juste aujourd’hui et à côté demain. C’est l’alignement qu’on reprend, pas le résultat.",
  ),

  f(
    "em-ops-07",
    "Opérations posées",
    "Dix opérations · entiers et décimaux mélangés",
    [
      "Les opérations alternent entiers et décimaux sans prévenir : c’est voulu, il faut décider soi-même de la façon de poser.",
      "Sur 98,04 + 7,96, laisser la surprise venir : le résultat tombe sur un entier rond. Ces moments-là valent d’être remarqués à voix haute.",
      "Les multiplications à deux chiffres sont désormais des habituées. Estimer avant reste la règle.",
    ],
    [
      "245,75 + 89,6",
      "1 234,5 + 876,25",
      "456 789 + 234 567",
      "98,04 + 7,96",
      "500,2 − 147,85",
      "1 000 − 236,75",
      "304 567 − 189 478",
      "75,3 − 48,65",
      "638 × 54",
      "907 × 68",
    ],
    ["335,35", "2 110,75", "691 356", "106", "352,35", "763,25", "115 089", "26,65", "34 452", "61 676"],
    "Sur 1 000 − 236,75, regarder s’il pense à compléter en 1 000,00. Celui qui y pense a compris que les zéros après la virgule sont gratuits ; celui qui n’y pense pas s’arrête net devant la colonne des centièmes, et c’est cela qu’on reprend.",
  ),

  f(
    "em-ops-08",
    "Opérations posées",
    "Dix opérations · la plus longue série de l’année",
    [
      "Dernière fiche de la série : elle rassemble tout, y compris une addition à trois termes et une multiplication à quatre chiffres.",
      "Prévenir avant de commencer que celle-ci est la plus longue, et qu’on a le droit de la couper en deux séances. Le prévenir avant vaut mieux que le constater en route.",
      "Lui proposer de choisir l’ordre dans lequel il les fait. Commencer par celle qu’il sent bien, c’est une stratégie d’adulte et elle s’apprend.",
    ],
    [
      "87 654 + 123 456 + 9 087",
      "456,78 + 1 234,5",
      "456 789 + 321 098",
      "60,75 + 39,25",
      "1 000 000 − 456 789",
      "802,5 − 467,85",
      "500 000 − 234 567",
      "20 − 3,45",
      "1 247 × 36",
      "986 × 75",
    ],
    ["220 197", "1 691,28", "777 887", "100", "543 211", "334,65", "265 433", "16,55", "44 892", "73 950"],
    "Cette fiche se lit en la comparant à la première de la série, faite en septembre : mêmes gestes, nombres dix fois plus grands. Le lui montrer côte à côte s’il a gardé le cahier. C’est le seul comparatif qui vaille : lui à lui.",
  ),

  /* ------------------------------------------------------------------ *
   * « Problèmes du jour » — 10 fiches. Le corrigé donne les quatre
   * moments demandés par la consigne : cherché, connu, calcul, réponse.
   * ------------------------------------------------------------------ */

  f(
    "em-prob-01",
    "Problèmes du jour",
    "Trois problèmes · une seule étape",
    [
      "Lire l’énoncé à voix haute, puis le lui faire relire. Tant qu’il n’a pas dit avec ses mots ce qu’on cherche, on ne touche pas au crayon.",
      "Sur le cahier, quatre lignes chaque fois : « Je cherche », « Je sais », « Je calcule », « Je réponds ». Ce squelette tiendra toute l’année.",
      "Un seul calcul suffit pour chaque problème de cette première fiche. S’il en pose plusieurs, on regarde ensemble s’ils mènent au même résultat — 24 + 24 + 24 + 24 + 24 + 24 donne bien 6 × 24 —, et on garde celui qu’il préfère.",
    ],
    [
      "Une boulangerie a vendu 248 baguettes lundi et 317 baguettes mardi. Combien de baguettes a-t-elle vendues en deux jours ?",
      "Un cinéma compte 420 fauteuils. Ce soir, 268 sont occupés. Combien de fauteuils restent vides ?",
      "Un carton contient 6 paquets de gâteaux, et chaque paquet contient 24 gâteaux. Combien de gâteaux y a-t-il dans le carton ?",
    ],
    [
      "Je cherche : le nombre total de baguettes. — Je sais : 248 lundi, 317 mardi. — Je calcule : 248 + 317 = 565. — Je réponds : « La boulangerie a vendu 565 baguettes en deux jours. »",
      "Je cherche : le nombre de fauteuils vides. — Je sais : 420 en tout, 268 occupés. — Je calcule : 420 − 268 = 152. — Je réponds : « Il reste 152 fauteuils vides. »",
      "Je cherche : le nombre de gâteaux du carton. — Je sais : 6 paquets de 24 gâteaux. — Je calcule : 6 × 24 = 144. — Je réponds : « Le carton contient 144 gâteaux. »",
    ],
    "Regarder le moment du choix de l’opération : est-ce qu’il le fait après avoir dit ce qu’on cherche, ou est-ce qu’il attrape les deux nombres et additionne ? Attraper les deux nombres marche une fois sur deux et cache tout le reste — c’est la lecture de l’énoncé qu’on travaille, pas le calcul.",
  ),

  f(
    "em-prob-02",
    "Problèmes du jour",
    "Trois problèmes · les unités changent en route",
    [
      "Même squelette en quatre lignes. Nouveauté : la réponse ne se dit pas dans la même unité que l’énoncé, ou pas dans la même que le calcul.",
      "Lui demander, avant de calculer, dans quelle unité la réponse va tomber. Des millilitres, des euros, des mètres ?",
      "Accepter deux écritures pour le troisième : 3 500 m, ou 3 km et 500 m. Les deux sont vraies, et le dire.",
    ],
    [
      "Le réservoir de la tondeuse contient 1 250 mL d’essence. On en verse 480 mL dans le moteur. Combien de millilitres reste-t-il dans le réservoir ?",
      "Une classe de 27 élèves part en sortie. Chaque élève paie 8 €. Quelle somme la classe verse-t-elle en tout ?",
      "Un cycliste a parcouru 1 340 m le matin et 2 160 m l’après-midi. Quelle distance a-t-il parcourue dans la journée ?",
    ],
    [
      "Je cherche : l’essence restante. — Je sais : 1 250 mL au départ, 480 mL versés. — Je calcule : 1 250 − 480 = 770. — Je réponds : « Il reste 770 mL d’essence dans le réservoir. »",
      "Je cherche : la somme versée par la classe. — Je sais : 27 élèves, 8 € chacun. — Je calcule : 27 × 8 = 216. — Je réponds : « La classe verse 216 €. »",
      "Je cherche : la distance de la journée. — Je sais : 1 340 m le matin, 2 160 m l’après-midi. — Je calcule : 1 340 + 2 160 = 3 500. — Je réponds : « Le cycliste a parcouru 3 500 m, soit 3 km et 500 m. »",
    ],
    "L’unité dans la phrase de réponse : présente, ou oubliée ? Une réponse sans unité n’est pas une demi-réponse, c’est une réponse qui ne veut rien dire, et c’est plus simple à installer maintenant qu’en mai.",
  ),

  f(
    "em-prob-03",
    "Problèmes du jour",
    "Trois problèmes · deux étapes",
    [
      "Premiers problèmes à deux calculs. Prévenir : « celui-ci se fait en deux fois, et c’est normal d’avoir besoin d’un résultat intermédiaire ».",
      "Lui faire écrire le résultat intermédiaire sur une ligne à part, avec son nom : « total vendu : 402 ». Un nombre qui traîne sans nom se perd.",
      "Si le deuxième calcul est juste et le premier non, le dire : la démarche est bonne, c’est un chiffre qui a glissé. Les deux ne se valent pas.",
    ],
    [
      "Un fleuriste avait 480 tulipes ce matin. Il en a vendu 165 avant midi et 237 l’après-midi. Combien de tulipes lui reste-t-il ?",
      "Une salle de spectacle est rangée en 12 rangées de 18 chaises. Combien de chaises y a-t-il dans la salle ?",
      "Un livre coûte 14 € et un stylo coûte 3 €. On achète 2 livres et 4 stylos. Combien paie-t-on en tout ?",
    ],
    [
      "Je cherche : les tulipes restantes. — Je sais : 480 au départ, 165 puis 237 vendues. — Je calcule : 165 + 237 = 402, puis 480 − 402 = 78. — Je réponds : « Il reste 78 tulipes au fleuriste. »",
      "Je cherche : le nombre de chaises. — Je sais : 12 rangées de 18 chaises. — Je calcule : 12 × 18 = 216. — Je réponds : « La salle contient 216 chaises. »",
      "Je cherche : le prix total. — Je sais : 2 livres à 14 €, 4 stylos à 3 €. — Je calcule : 2 × 14 = 28, 4 × 3 = 12, puis 28 + 12 = 40. — Je réponds : « On paie 40 € en tout. »",
      ],
    "Le résultat intermédiaire : est-il écrit, ou gardé en tête ? Gardé en tête, il tient pour un problème et s’évapore au suivant. Ce qu’on installe ici, c’est l’habitude de poser le nombre avant d’en avoir besoin.",
  ),

  f(
    "em-prob-04",
    "Problèmes du jour",
    "Trois problèmes · partages et paquets",
    [
      "Trois divisions, dont deux avec un reste qui change la réponse. C’est le cœur de la fiche : le reste ne se jette pas, il se lit.",
      "Sur le deuxième, poser la question en deux temps : « 2 cars, ça suffit ? » puis « il reste combien d’enfants sans place ? ». La réponse 3 vient d’elle-même.",
      "Autoriser le dessin ou les paquets de bâtons. À neuf ans, une division qu’on dessine est une division qu’on comprend.",
    ],
    [
      "96 œufs sont rangés dans des boîtes de 6 œufs. Combien de boîtes remplit-on ?",
      "145 enfants partent en sortie. Un car transporte 50 enfants. Combien de cars faut-il commander ?",
      "Un rouleau de ruban mesure 250 cm. On y coupe des morceaux de 30 cm. Combien de morceaux entiers obtient-on, et combien de ruban reste-t-il ?",
    ],
    [
      "Je cherche : le nombre de boîtes. — Je sais : 96 œufs, 6 par boîte. — Je calcule : 96 ÷ 6 = 16, sans reste. — Je réponds : « On remplit 16 boîtes. »",
      "Je cherche : le nombre de cars. — Je sais : 145 enfants, 50 par car. — Je calcule : 145 ÷ 50 = 2 et il reste 45 enfants, donc 3 cars. — Je réponds : « Il faut commander 3 cars. »",
      "Je cherche : le nombre de morceaux et le reste. — Je sais : 250 cm de ruban, morceaux de 30 cm. — Je calcule : 250 ÷ 30 = 8 et il reste 10. — Je réponds : « On obtient 8 morceaux entiers, et il reste 10 cm de ruban. »",
    ],
    "Le traitement du reste : arrondi vers le haut pour les cars, laissé de côté pour le ruban. S’il applique la même règle aux deux, ce n’est pas la division qui coince mais la situation — on rejoue la scène avec de vrais objets plutôt qu’on ne réexplique.",
  ),

  f(
    "em-prob-05",
    "Problèmes du jour",
    "Trois problèmes · prix, durées, places",
    [
      "Trois contextes différents dans la même séance : de l’argent, du temps, des places. Les gestes se ressemblent, les unités non.",
      "Le deuxième problème se fait sur une ligne du temps dessinée au brouillon : 8 h 45 à 9 h, puis 9 h à 11 h, puis 11 h à 11 h 20. Additionner les bonds.",
      "Ne pas donner la ligne du temps tout de suite. La proposer s’il bloque, pas avant.",
    ],
    [
      "Une école achète 7 ordinateurs à 439 € l’unité. Quel est le prix total de la commande ?",
      "Un train part à 8 h 45 et arrive à 11 h 20. Combien de temps dure le trajet ?",
      "Un stade contient 4 500 places. 3 780 billets ont été vendus. Combien de places resteront libres ?",
    ],
    [
      "Je cherche : le prix de la commande. — Je sais : 7 ordinateurs, 439 € chacun. — Je calcule : 7 × 439 = 3 073. — Je réponds : « La commande coûte 3 073 €. »",
      "Je cherche : la durée du trajet. — Je sais : départ 8 h 45, arrivée 11 h 20. — Je calcule : de 8 h 45 à 9 h, 15 min ; de 9 h à 11 h, 2 h ; de 11 h à 11 h 20, 20 min ; total 2 h 35 min. — Je réponds : « Le trajet dure 2 h 35 min. »",
      "Je cherche : les places libres. — Je sais : 4 500 places, 3 780 billets vendus. — Je calcule : 4 500 − 3 780 = 720. — Je réponds : « Il restera 720 places libres. »",
    ],
    "Sur les durées : essaie-t-il de poser 11 h 20 − 8 h 45 en colonne comme une soustraction ordinaire ? C’est un réflexe très logique, qui échoue parce que l’heure ne compte pas par dix. Lui montrer pourquoi vaut mieux que lui interdire.",
  ),

  f(
    "em-prob-06",
    "Problèmes du jour",
    "Trois problèmes · les grands nombres du quotidien",
    [
      "Les nombres dépassent dix mille. Avant tout calcul, une estimation à voix haute et notée au coin du cahier : on la comparera au résultat.",
      "Le deuxième problème tombe juste, sans reste. Le lui dire après coup : « tu vois, 195 cageots pleins, rien ne dépasse ». Une division qui tombe rond, ça se remarque.",
      "Si le troisième calcul est trop long à la main, le poser quand même : c’est une multiplication à deux chiffres comme celles des opérations posées.",
    ],
    [
      "Une bibliothèque possède 12 480 livres. Elle en reçoit 3 750 de plus. Combien de livres possède-t-elle maintenant ?",
      "Un agriculteur récolte 2 340 kg de pommes. Il les range dans des cageots de 12 kg. Combien de cageots remplit-il ?",
      "Un club compte 148 membres. Chacun paie 35 € de cotisation. Quelle somme le club reçoit-il ?",
    ],
    [
      "Je cherche : le nombre de livres après la livraison. — Je sais : 12 480 livres, 3 750 de plus. — Je calcule : 12 480 + 3 750 = 16 230. — Je réponds : « La bibliothèque possède 16 230 livres. »",
      "Je cherche : le nombre de cageots. — Je sais : 2 340 kg, 12 kg par cageot. — Je calcule : 2 340 ÷ 12 = 195, sans reste. — Je réponds : « L’agriculteur remplit 195 cageots. »",
      "Je cherche : la somme des cotisations. — Je sais : 148 membres, 35 € chacun. — Je calcule : 148 × 35 = 5 180. — Je réponds : « Le club reçoit 5 180 €. »",
    ],
    "Comparer l’estimation notée au départ et le résultat trouvé. Quand les deux se ressemblent, c’est la meilleure vérification qui existe et elle lui appartient — il n’a besoin de personne pour savoir qu’il a bon.",
  ),

  f(
    "em-prob-07",
    "Problèmes du jour",
    "Trois problèmes · parts et proportions",
    [
      "Ces trois problèmes passent par une valeur pour un : une part, une personne, une unité. C’est le raisonnement à installer, et il resservira partout.",
      "Sur le deuxième, écrire au brouillon : « pour 4 personnes : 300 g / pour 1 personne : ? / pour 10 personnes : ? ». Le tableau fait la moitié du travail.",
      "La réponse du premier peut s’écrire 0,75 m ou 75 cm. Les deux, et lui demander laquelle il trouve la plus parlante.",
    ],
    [
      "Un ruban de 3 m est partagé en 4 morceaux de même longueur. Quelle est la longueur de chaque morceau ?",
      "Une recette pour 4 personnes demande 300 g de farine. Quelle quantité de farine faut-il pour 10 personnes ?",
      "Un cinéma a fait trois séances : 187, 205 et 164 spectateurs. Combien de spectateurs en tout ? Et combien de spectateurs de plus à la deuxième séance qu’à la troisième ?",
    ],
    [
      "Je cherche : la longueur d’un morceau. — Je sais : 3 m partagés en 4. — Je calcule : 3 ÷ 4 = 0,75. — Je réponds : « Chaque morceau mesure 0,75 m, c’est-à-dire 75 cm. »",
      "Je cherche : la farine pour 10 personnes. — Je sais : 300 g pour 4 personnes. — Je calcule : 300 ÷ 4 = 75 g pour une personne, puis 75 × 10 = 750. — Je réponds : « Il faut 750 g de farine pour 10 personnes. »",
      "Je cherche : le total, puis l’écart entre deux séances. — Je sais : 187, 205 et 164 spectateurs. — Je calcule : 187 + 205 + 164 = 556, puis 205 − 164 = 41. — Je réponds : « 556 spectateurs en tout, et 41 spectateurs de plus à la deuxième séance qu’à la troisième. »",
    ],
    "Le passage par un : y va-t-il spontanément, ou cherche-t-il à multiplier 300 par quelque chose ? Multiplier par 2,5 est juste aussi, et si c’est ce qu’il propose, le suivre : deux chemins valent mieux qu’un chemin imposé.",
  ),

  f(
    "em-prob-08",
    "Problèmes du jour",
    "Trois problèmes · l’argent au centime",
    [
      "Les prix ont deux décimales. On les écrit en colonne comme les opérations posées : virgules alignées.",
      "Le troisième problème demande deux grandeurs différentes pour la même figure, périmètre et aire. Faire un dessin au brouillon avant tout calcul, avec les deux mesures écrites sur les côtés.",
      "Distinguer les deux à voix haute : le périmètre est la ficelle qui fait le tour, l’aire est la peinture qui remplit.",
    ],
    [
      "Maman paie 23,50 € de courses et 8,75 € chez le boulanger. Elle donne un billet de 50 €. Combien lui rend-on ?",
      "Un paquet de riz de 2,5 kg coûte 4,20 €. On achète 4 paquets. Quel est le prix total, et quelle masse de riz rapporte-t-on ?",
      "Un terrain rectangulaire mesure 45 m de long et 28 m de large. Quel est son périmètre ? Quelle est son aire ?",
    ],
    [
      "Je cherche : la monnaie rendue. — Je sais : 23,50 € et 8,75 € dépensés, 50 € donnés. — Je calcule : 23,50 + 8,75 = 32,25, puis 50 − 32,25 = 17,75. — Je réponds : « On lui rend 17,75 €. »",
      "Je cherche : le prix et la masse. — Je sais : 4 paquets de 2,5 kg à 4,20 €. — Je calcule : 4 × 4,20 = 16,80 et 4 × 2,5 = 10. — Je réponds : « On paie 16,80 € et on rapporte 10 kg de riz. »",
      "Je cherche : le périmètre puis l’aire. — Je sais : un rectangle de 45 m sur 28 m. — Je calcule : (45 + 28) × 2 = 146 pour le périmètre, 45 × 28 = 1 260 pour l’aire. — Je réponds : « Le périmètre est de 146 m et l’aire de 1 260 m². »",
    ],
    "L’unité de l’aire : m² ou m ? Le carré de l’unité s’oublie longtemps, et c’est un oubli d’écriture, pas de compréhension. Le noter sans en faire une affaire, et regarder si le suivant le porte.",
  ),

  f(
    "em-prob-09",
    "Problèmes du jour",
    "Trois problèmes · masses, débits, distances",
    [
      "Trois problèmes à deux étapes, dans trois univers différents. Laisser cinq minutes de lecture silencieuse des trois énoncés avant de commencer : choisir par lequel commencer fait partie du travail.",
      "Sur le premier, attention au piège : le camion vide compte aussi. Lui demander « et le camion, il pèse zéro ? » plutôt que de le signaler.",
      "Le troisième se résout par un total moins la somme des deux premiers jours. Le schéma en barre aide beaucoup ici.",
    ],
    [
      "Un camion transporte 18 palettes de 245 kg chacune. Le camion vide pèse 3 400 kg. Quelle masse totale roule sur la route ?",
      "Un robinet remplit 15 L par minute. En combien de temps remplit-il une cuve de 540 L ?",
      "Une famille roule 1 250 km en trois jours. Le premier jour, elle fait 480 km ; le deuxième, 395 km. Quelle distance lui reste-t-il pour le troisième jour ?",
    ],
    [
      "Je cherche : la masse totale. — Je sais : 18 palettes de 245 kg, camion vide 3 400 kg. — Je calcule : 18 × 245 = 4 410, puis 4 410 + 3 400 = 7 810. — Je réponds : « 7 810 kg roulent sur la route. »",
      "Je cherche : la durée du remplissage. — Je sais : 15 L par minute, cuve de 540 L. — Je calcule : 540 ÷ 15 = 36. — Je réponds : « Le robinet remplit la cuve en 36 minutes. »",
      "Je cherche : la distance du troisième jour. — Je sais : 1 250 km en tout, 480 km puis 395 km. — Je calcule : 480 + 395 = 875, puis 1 250 − 875 = 375. — Je réponds : « Il reste 375 km à parcourir le troisième jour. »",
    ],
    "Regarder s’il relit l’énoncé après avoir trouvé, pour vérifier que sa réponse répond bien à la question posée. C’est un geste d’expert, il s’acquiert tard, et chaque fois qu’il le fait spontanément ça mérite d’être nommé.",
  ),

  f(
    "em-prob-10",
    "Problèmes du jour",
    "Trois problèmes · tout ce qu’on sait faire",
    [
      "Dernière fiche de la série, en juin : trois problèmes longs qui mobilisent la division avec reste, le périmètre et le bénéfice.",
      "Annoncer la durée : trente minutes pour trois problèmes, cela fait dix minutes chacun, et on a le droit de n’en finir que deux.",
      "S’il en réussit un seul entièrement, la séance a servi. Le dire à la fin, et le dire avant si c’est nécessaire.",
    ],
    [
      "Une école de 348 élèves part au musée. Chaque car transporte 55 élèves. Combien de cars faut-il ? Combien de places resteront vides dans le dernier car ?",
      "Un jardin rectangulaire mesure 24 m sur 15 m. On l’entoure d’un grillage qui coûte 12 € le mètre. Combien coûte la clôture ?",
      "Un magasin achète 240 tee-shirts à 7,50 € l’unité et les revend 14 € l’unité. Quel bénéfice fait-il s’il les vend tous ?",
    ],
    [
      "Je cherche : le nombre de cars et les places vides. — Je sais : 348 élèves, 55 places par car. — Je calcule : 348 ÷ 55 = 6 et il reste 18, donc 7 cars ; le dernier emporte 18 élèves, et 55 − 18 = 37. — Je réponds : « Il faut 7 cars, et 37 places resteront vides dans le dernier. »",
      "Je cherche : le prix de la clôture. — Je sais : un rectangle de 24 m sur 15 m, grillage à 12 € le mètre. — Je calcule : (24 + 15) × 2 = 78 m de grillage, puis 78 × 12 = 936. — Je réponds : « La clôture coûte 936 €. »",
      "Je cherche : le bénéfice du magasin. — Je sais : 240 tee-shirts achetés 7,50 € et revendus 14 €. — Je calcule : 240 × 7,50 = 1 800 à l’achat, 240 × 14 = 3 360 à la vente, puis 3 360 − 1 800 = 1 560. — Je réponds : « Le magasin fait un bénéfice de 1 560 €. »",
    ],
    "Ces trois énoncés demandent chacun deux réponses, ou deux calculs avant la réponse. Regarder s’il répond aux deux questions du premier problème, ou s’il s’arrête au nombre de cars. S’arrêter à la première question est le signe qu’on a lu vite, pas qu’on a mal compris.",
  ),

  /* ------------------------------------------------------------------ *
   * « Reprendre la leçon de maths » — 12 fiches.
   *
   * La consigne dit : « Des exercices neufs sur une leçon de maths déjà vue,
   * sur le cahier cette fois. » La trame est déterministe : chaque fiche nomme
   * donc la leçon qu’elle reprend — la plus récente dont la première fois
   * tombe strictement avant sa date — et donne deux exercices neufs sur elle,
   * qui ne sont pas ceux de l’écran. On ne compare jamais avec ce qu’il avait
   * répondu à l’écran : son historique ne lui revient pas (règle n° 6).
   * Suivent huit rappels oraux sur ce qui a déjà été vu à ce moment de
   * l’année, et rien qui ne l’ait pas été. Calculé sur la trame du
   * 17 septembre 2026 :
   *
   *   1. 29 septembre — Additionner et soustraire en colonnes (28 septembre)
   *   2. 6 novembre — Additionner et soustraire des fractions (5 novembre)
   *   3. 27 novembre — Les longueurs, du millimètre au kilomètre (24 novembre)
   *   4. 18 décembre — Les multiples et les diviseurs (19 novembre)
   *   5. 15 janvier — Comparer et ranger les nombres décimaux (12 janvier)
   *   6. 2 février — Le périmètre (26 janvier)
   *   7. 9 mars — Les aires (8 mars)
   *   8. 23 mars — Le calcul mental : les chemins courts (22 mars)
   *   9. 4 mai — Les figures et leurs propriétés (3 mai)
   *  10. 25 mai — Les solides (24 mai)
   *  11. 8 juin — Le hasard : certain, possible, impossible (3 juin)
   *  12. 28 juin — Le nombre caché (28 mai)
   *
   * Les fiches 4 et 12 prennent la deuxième leçon la plus récente, pour ne
   * pas reprendre deux fois de suite la même. Si la trame change, ces dates
   * se recalculent.
   * ------------------------------------------------------------------ */

  f(
    "em-reprise-01",
    "Reprendre la leçon de maths",
    "Reprise · huit rappels de septembre",
    [
      "La méthode, les vingt premières minutes : ouvrir à l’écran la leçon « Additionner et soustraire en colonnes », vue la veille, et relire le cours ensemble à voix haute. Puis, écran éteint, les deux exercices neufs ci-dessous, sur le cahier. Ce qui compte est d’écrire la démarche entière : l’estimation, l’opération posée, la vérification.",
      "On ne rouvre pas ce qu’il avait répondu à l’écran, et on ne compare rien : ces deux exercices sont neufs, et ils se suffisent. S’il bute, on relit avec lui la règle du cours qui correspond, et il reprend.",
      "Les dix dernières minutes : les huit rappels qui suivent, à l’oral, sans rien écrire. Poser, attendre, passer au suivant si ça ne vient pas et y revenir à la fin.",
    ],
    [
      "Exercice neuf 1 : pose et calcule 2 736 + 1 485, en estimant d’abord.",
      "Exercice neuf 2 : pose et calcule 6 012 − 2 347, puis vérifie par une addition.",
      "Écris en chiffres : trois mille huit cent quatre.",
      "Quel est le chiffre des centaines dans 5 186 ?",
      "5 × 8 ?",
      "2 × 9 ?",
      "Range du plus petit au plus grand : 3 614, 3 164, 3 641.",
      "Combien de dizaines entières y a-t-il dans 3 260 ?",
      "100 − 37 ?",
      "Le double de 350 ?",
    ],
    [
      "4 221. Estimation : environ 2 700 + 1 500 = 4 200, et le résultat en est tout près.",
      "3 665. Vérification : 3 665 + 2 347 = 6 012.",
      "3 804",
      "1",
      "40",
      "18",
      "3 164, puis 3 614, puis 3 641",
      "326 dizaines",
      "63",
      "700",
    ],
    "Sur les deux exercices, regarder s’il estime avant de poser, et s’il se sert de l’estimation à la fin. C’est ce que la leçon installe, bien plus que le résultat exact. Sur les rappels, noter simplement les deux questions qui ont demandé le plus de temps — ce sont celles à reposer dans quinze jours.",
  ),

  f(
    "em-reprise-02",
    "Reprendre la leçon de maths",
    "Reprise · huit rappels d’avant la Toussaint",
    [
      "Même méthode : ouvrir à l’écran la leçon « Additionner et soustraire des fractions », vue la veille, relire le cours ensemble, puis les deux exercices neufs sur le cahier, écran éteint. On ne compare rien avec ce qu’il avait répondu à l’écran.",
      "Cette fois, lui laisser choisir par lequel des deux exercices il commence. Choisir, c’est déjà relire la leçon.",
      "Puis les huit rappels à l’oral. Si une réponse ne vient pas, donner la réponse plutôt que l’indice : on est dans le rappel, pas dans la découverte.",
    ],
    [
      "Exercice neuf 1 : calcule 3/8 + 4/8.",
      "Exercice neuf 2 : calcule 8/9 − 5/9.",
      "Écris en lettres : 5 208.",
      "5 × 7 ?",
      "Quel nombre vient juste avant 8 000 ?",
      "350 + 250 ?",
      "Combien de centaines entières dans 7 400 ?",
      "La moitié de 180 ?",
      "Décompose 6 042 en milliers, centaines, dizaines, unités.",
      "1 000 − 450 ?",
    ],
    [
      "7/8. Les huitièmes restent des huitièmes : on compte 3 parts, plus 4 parts.",
      "3/9. Le dénominateur ne bouge pas : 8 neuvièmes moins 5 neuvièmes, il en reste 3.",
      "cinq mille deux cent huit",
      "35",
      "7 999",
      "600",
      "74 centaines",
      "90",
      "6 000 + 40 + 2 (il n’y a pas de centaines)",
      "550",
    ],
    "Sur les deux exercices, une seule chose : garde-t-il le dénominateur tel quel ? « 7/16 » dirait qu’il additionne tout ce qu’il voit ; on redit alors avec des objets que trois crayons plus quatre crayons font sept crayons. Dans les rappels, le 7 est le plus instructif : 6 042 n’a pas de centaines, et beaucoup d’élèves ajoutent un « 0 + » qui n’existe pas ou sautent un rang. Ce qu’on regarde, c’est s’il nomme le rang vide au lieu de l’ignorer.",
  ),

  f(
    "em-reprise-03",
    "Reprendre la leçon de maths",
    "Reprise · huit rappels de novembre",
    [
      "Même méthode, avec une variante : la leçon reprise est « Les longueurs, du millimètre au kilomètre », vue le 24 novembre. Avant de la rouvrir, lui demander de raconter de mémoire ce dont elle parlait. Puis vérifier ensemble dans le cours.",
      "Les deux exercices neufs sur le cahier, écran éteint, en disant avec des mots ce qu’on fait — la leçon ne passe pas par un tableau de conversion. On ne compare rien avec l’écran.",
      "Les huit rappels mêlent pour la première fois des fractions et des multiples. Ils se disent à l’oral comme le reste.",
    ],
    [
      "Exercice neuf 1 : combien font 5 m 20 cm en centimètres ?",
      "Exercice neuf 2 : combien font 3 600 m en kilomètres et mètres ?",
      "7/6, c’est plus ou moins que 1 ?",
      "Le nombre 2 465 est-il un multiple de 5 ?",
      "Le nombre 738 est-il pair ?",
      "8 × 6 ?",
      "1/4 + 2/4 ?",
      "Écris en chiffres : neuf mille neuf cent neuf.",
      "4 × 25 ?",
      "Le quart de 100 ?",
    ],
    [
      "520 cm : 5 m font 500 cm, plus 20 cm.",
      "3 km 600 m : 3 000 m font 3 km, il reste 600 m.",
      "plus que 1 : il y a 7 parts, et 6 suffisent à faire l’unité",
      "oui, il finit par 5",
      "oui, il finit par 8",
      "48",
      "3/4",
      "9 909",
      "100",
      "25",
    ],
    "Les deux dernières questions sont la même, dites dans les deux sens. S’il répond vite à l’une et pas à l’autre, c’est que le lien entre multiplier et partager n’est pas encore à double sens — et c’est cela qu’on travaille, pas les tables.",
  ),

  f(
    "em-reprise-04",
    "Reprendre la leçon de maths",
    "Reprise · huit rappels de décembre",
    [
      "Même méthode. Décembre : les leçons commencent à s’empiler, et celle d’avant la dernière mérite qu’on y revienne. La leçon reprise est « Les multiples et les diviseurs », vue le 19 novembre : on relit le cours ensemble, puis les deux exercices neufs sur le cahier, écran éteint.",
      "On ne compare rien avec ce qu’il avait répondu à l’écran. Si un exercice bloque, on relit la règle du cours qui y répond, et il reprend.",
      "Les huit rappels, à l’oral. Cinq minutes, pas plus.",
    ],
    [
      "Exercice neuf 1 : le nombre 4 536 est-il pair ? Est-il un multiple de 5 ? De 10 ?",
      "Exercice neuf 2 : 72 est-il un multiple de 8 ? Et 75 ?",
      "1 heure, combien de minutes ?",
      "3 × 12 ?",
      "Combien font 2 m 40 cm en centimètres ?",
      "Encadre 3 478 entre les deux centaines les plus proches.",
      "6 × 7 ?",
      "1 kg, combien de grammes ?",
      "240 ÷ 4 ?",
      "La moitié de 1 000 ?",
    ],
    [
      "Pair, oui : il finit par 6. Multiple de 5, non, ni de 10 : il ne finit ni par 0 ni par 5. Seul le dernier chiffre compte.",
      "72, oui : 8 × 9 = 72. 75, non : 8 × 9 = 72 et 8 × 10 = 80, et 75 est entre les deux.",
      "60 minutes",
      "36",
      "240 cm",
      "3 400 < 3 478 < 3 500",
      "42",
      "1 000 g",
      "60",
      "500",
    ],
    "Sur le premier exercice : regarde-t-il seulement le dernier chiffre, ou se lance-t-il dans une division ? Pour 2, 5 et 10, le dernier chiffre suffit, et c’est ce que la leçon voulait installer. Sur les rappels, le 2 m 40 cm : s’il répond 2 040 ou 24, c’est la relation 1 m = 100 cm qu’on redit, une règle graduée sous les yeux.",
  ),

  f(
    "em-reprise-05",
    "Reprendre la leçon de maths",
    "Reprise · huit rappels de janvier",
    [
      "Même méthode. La leçon reprise est « Comparer et ranger les nombres décimaux », vue le 12 janvier : on relit le cours ensemble, puis les deux exercices neufs sur le cahier, écran éteint.",
      "Variante de janvier : il écrit les nombres de l’exercice 1 l’un sous l’autre, virgules alignées, et complète par des zéros avant de ranger — c’est la méthode sûre du cours. On ne compare rien avec ce qu’il avait répondu à l’écran.",
      "Puis les huit rappels à l’oral.",
    ],
    [
      "Exercice neuf 1 : range du plus petit au plus grand : 4,6 — 4,06 — 4,56.",
      "Exercice neuf 2 : quel nombre est le plus grand, 12,8 ou 12,75 ?",
      "Écris en chiffres : quarante-cinq mille trois cents.",
      "12 × 5 ?",
      "Combien de milliers entiers dans 68 000 ?",
      "63 ÷ 9 ?",
      "Les côtés d’un carré sont-ils tous de la même longueur ?",
      "Écris 7/10 avec une virgule.",
      "15 × 4 ?",
      "500 + 500 + 500 ?",
    ],
    [
      "4,06, puis 4,56, puis 4,6. Avec deux chiffres après la virgule : 4,06 — 4,56 — 4,60.",
      "12,8. Écrit 12,80, il a 80 centièmes contre 75 : la partie après la virgule n’est pas un nombre entier.",
      "45 300",
      "60",
      "68 milliers",
      "7",
      "oui, les quatre",
      "0,7",
      "60",
      "1 500",
    ],
    "Ce qu’on regarde : l’exercice 2. S’il choisit 12,75 « parce que 75 est plus grand que 8 », c’est la confusion que la leçon nomme — il lit la partie décimale comme un entier. Ce n’est pas une étourderie, c’est une idée raisonnable qui ne marche pas ici : on écrit 12,80 avec lui, et il compare de nouveau.",
  ),

  f(
    "em-reprise-06",
    "Reprendre la leçon de maths",
    "Reprise · huit rappels de février",
    [
      "Même méthode : la leçon reprise est « Le périmètre », vue le 26 janvier. On relit le cours ensemble, puis les deux exercices neufs sur le cahier, écran éteint, sans rien comparer avec l’écran.",
      "Variante de février : lui demander d’inventer un exercice de plus, sur le modèle de ceux de la leçon, et de le résoudre. Inventer un énoncé oblige à comprendre la règle.",
      "Puis les huit rappels.",
    ],
    [
      "Exercice neuf 1 : quel est le périmètre d’un rectangle de 9 cm sur 4 cm ?",
      "Exercice neuf 2 : un carré a un périmètre de 28 cm. Combien mesure son côté ?",
      "3 kg, combien de grammes ?",
      "8 × 9 ?",
      "Écris 1/2 avec une virgule.",
      "72 ÷ 8 ?",
      "Combien de millimètres dans 4 cm ?",
      "250 × 4 ?",
      "Quel est le chiffre des dizaines de mille dans 384 615 ?",
      "Un triangle rectangle possède un angle comment ?",
    ],
    [
      "26 cm : 9 + 4 + 9 + 4, ou (9 + 4) × 2.",
      "7 cm : les quatre côtés sont égaux, donc 28 ÷ 4.",
      "3 000 g",
      "72",
      "0,5",
      "9",
      "40 mm",
      "1 000",
      "8",
      "un angle droit",
    ],
    "L’exercice qu’il a inventé en dit plus que les huit rappels réunis : s’il ressemble beaucoup au modèle, la règle est copiée ; s’il change le contexte ou les nombres, elle est comprise. Aucun des deux n’est un problème en février, mais on sait où on en est.",
  ),

  f(
    "em-reprise-07",
    "Reprendre la leçon de maths",
    "Reprise · huit rappels de mars",
    [
      "Même méthode. La leçon reprise est « Les aires », vue la veille. En mars, ajouter une question avant de la rouvrir : « à quoi ça sert, ce qu’on a appris hier ? ». Chercher un usage réel, même petit.",
      "Les deux exercices neufs au cahier, écran éteint — un quadrillage à côté pour dessiner les carreaux s’il en a envie. On ne compare rien avec ce qu’il avait répondu à l’écran.",
      "Puis les huit rappels à l’oral.",
    ],
    [
      "Exercice neuf 1 : quelle est l’aire d’un rectangle de 7 cm sur 3 cm ?",
      "Exercice neuf 2 : quelle est l’aire d’un carré de 5 cm de côté ?",
      "Combien font les 3/4 de 100 ?",
      "0,25, c’est combien de centièmes ?",
      "11 × 11 ?",
      "1 tonne, combien de kilogrammes ?",
      "84 ÷ 7 ?",
      "Quel instrument sert à tracer un cercle ?",
      "Écris en chiffres : cent deux mille sept.",
      "6 × 50 ?",
    ],
    [
      "21 cm² : 3 rangées de 7 carreaux, donc 7 × 3.",
      "25 cm² : 5 rangées de 5 carreaux, donc 5 × 5.",
      "75",
      "25 centièmes",
      "121",
      "1 000 kg",
      "12",
      "le compas",
      "102 007",
      "300",
    ],
    "« Cent deux mille sept » s’écrit 102 007, et l’écriture 102 07 ou 1 027 dit exactement quelle idée manque : que chaque rang occupe sa place même quand il est vide. Si c’est ce qui sort, reprendre avec un tableau de numération plutôt qu’avec une explication.",
  ),

  f(
    "em-reprise-08",
    "Reprendre la leçon de maths",
    "Reprise · huit rappels de fin mars",
    [
      "Même méthode : la leçon reprise est « Le calcul mental : les chemins courts », vue la veille. On relit le cours, puis les deux exercices neufs, sans rien comparer avec l’écran. Ici le cahier sert à écrire le chemin, pas à poser l’opération.",
      "Variante de fin mars : c’est lui qui explique la leçon à l’adulte, tableau ou feuille à l’appui, avant de faire les exercices. L’adulte joue celui qui n’a rien suivi et pose des questions.",
      "Puis les huit rappels.",
    ],
    [
      "Exercice neuf 1 : calcule de tête 58 + 19, puis écris le chemin que tu as pris.",
      "Exercice neuf 2 : calcule de tête 13 × 6 en coupant 13 en deux morceaux, puis écris le chemin.",
      "2,5 + 2,5 ?",
      "Quelle est l’aire d’un carré de 12 cm de côté ?",
      "1/4 + 1/4 ?",
      "1 000 × 7 ?",
      "Combien de centilitres dans 1 L ?",
      "96 ÷ 8 ?",
      "Écris 3,7 sous forme de fraction décimale.",
      "1 min 30 s, combien de secondes ?",
    ],
    [
      "77 : 58 + 20 = 78, puis on retire 1.",
      "78 : 10 × 6 = 60, 3 × 6 = 18, et 60 + 18 = 78.",
      "5",
      "144 cm²",
      "1/2 (ou 2/4)",
      "7 000",
      "100 cL",
      "12",
      "37/10",
      "90 s",
    ],
    "Pendant qu’il explique la leçon, écouter les endroits où il ralentit : c’est là que la compréhension est encore fragile, et ça se voit beaucoup mieux qu’en le questionnant. Ne rien reprendre à ce moment-là ; noter, et y revenir un autre jour.",
  ),

  f(
    "em-reprise-09",
    "Reprendre la leçon de maths",
    "Reprise · huit rappels de mai",
    [
      "Même méthode, une chose inversée. La leçon reprise est « Les figures et leurs propriétés », vue la veille. En mai, on fait les deux exercices neufs sans relire le cours d’abord — et on ne rouvre le cours qu’en cas de blocage. On ne compare rien avec l’écran.",
      "Cette inversion est un vrai changement : le dire avant, pour qu’un blocage soit attendu et non subi.",
      "Puis les huit rappels à l’oral.",
    ],
    [
      "Exercice neuf 1 : comment s’appelle un quadrilatère qui a quatre angles droits et quatre côtés de même longueur ?",
      "Exercice neuf 2 : un cercle a un diamètre de 10 cm. Combien mesure son rayon ?",
      "7,5 × 2 ?",
      "Un litre d’eau pèse à peu près combien ?",
      "125 × 8 ?",
      "Le tiers de 90 ?",
      "4,8 − 0,8 ?",
      "Quelle est l’aire d’un rectangle de 15 cm sur 8 cm ?",
      "1 h 15 min, combien de minutes ?",
      "Écris en chiffres : cinq cent mille.",
    ],
    [
      "Un carré. (Un carré est aussi un rectangle, comme le dit la leçon : si « rectangle » vient, il est juste, et on cherche avec lui le nom le plus précis.)",
      "5 cm : le rayon est la moitié du diamètre.",
      "15",
      "1 kg",
      "1 000",
      "30",
      "4",
      "120 cm²",
      "75 min",
      "500 000",
    ],
    "Le fait de rouvrir le cours quand on bloque est la compétence visée ici, pas un renoncement. S’il le fait de lui-même, sans demander la permission, c’est acquis — et ça vaut d’être nommé à voix haute.",
  ),

  f(
    "em-reprise-10",
    "Reprendre la leçon de maths",
    "Reprise · huit rappels de fin mai",
    [
      "Même méthode, exercices d’abord, cours en secours. La leçon reprise est « Les solides », vue la veille : une boîte à chaussures ou une brique de lait vide sur la table aide beaucoup. On ne compare rien avec l’écran.",
      "Variante : après les deux exercices neufs, lui demander de choisir un exercice d’une leçon de septembre et de le faire aussi, puis de dire lequel lui paraît le plus court à faire aujourd’hui.",
      "Puis les huit rappels.",
    ],
    [
      "Exercice neuf 1 : combien de faces a un pavé droit, comme une brique de lait ? Quelle forme ont-elles ?",
      "Exercice neuf 2 : combien de sommets a un pavé droit ?",
      "0,1 + 0,9 ?",
      "45 × 20 ?",
      "Quelle est l’aire d’un carré de 9 cm de côté ?",
      "La moitié de 2,4 ?",
      "300 ÷ 4 ?",
      "Avec quel instrument vérifie-t-on un angle droit ?",
      "Les 2/5 de 50 ?",
      "Écris 0,75 sous forme de fraction.",
    ],
    [
      "6 faces, et ce sont des rectangles (parfois deux d’entre elles sont des carrés).",
      "8 sommets, comme le cube.",
      "1",
      "900",
      "81 cm²",
      "1,2",
      "75",
      "l’équerre",
      "20",
      "75/100, qu’on peut aussi écrire 3/4",
    ],
    "Sur les exercices, regarder s’il compte sur l’objet posé devant lui ou s’il répond de mémoire : toucher chaque face, chaque coin, est exactement ce que la leçon demande, pas une béquille. Dans les rappels, le 3 : s’il répond 18 ou 36, c’est le périmètre qui est venu à la place de l’aire ; on redessine le carré sur un quadrillage et on compte les carreaux.",
  ),

  f(
    "em-reprise-11",
    "Reprendre la leçon de maths",
    "Reprise · huit rappels de juin",
    [
      "Même méthode. La leçon reprise est « Le hasard : certain, possible, impossible », vue le 3 juin : on relit le cours, puis les deux exercices neufs sur le cahier, écran éteint, sans rien comparer avec l’écran.",
      "En juin, s’il demande à rouvrir une autre leçon de l’année, on le laisse faire après les deux exercices : il feuillette le manuel où il veut, relit un cours, et dit ce qu’il en a retenu.",
      "Puis les huit rappels.",
    ],
    [
      "Exercice neuf 1 : dans un paquet, toutes les cartes sont rouges. Tirer une carte rouge, c’est certain, possible ou impossible ? Et tirer une carte noire ?",
      "Exercice neuf 2 : on lance un dé à six faces. Obtenir un nombre plus grand que 4, c’est certain, possible ou impossible ? Quelles faces conviennent ?",
      "Le double de 12,5, puis le double du résultat ?",
      "Quel est le périmètre d’un carré de 2,5 cm de côté ?",
      "Combien de zéros dans l’écriture de 1 000 000 ?",
      "La moitié de 7 ?",
      "Combien de quarts d’heure dans 3 heures ?",
      "3 km, combien de mètres ?",
      "Quelle est l’aire d’un carré de 20 cm de côté ?",
      "840 ÷ 7 ?",
    ],
    [
      "Tirer une rouge, c’est certain. Tirer une noire, c’est impossible.",
      "Possible : le 5 et le 6 conviennent, deux faces sur six.",
      "25, puis 50",
      "10 cm",
      "6",
      "3,5",
      "12",
      "3 000 m",
      "400 cm²",
      "120",
    ],
    "Sur l’exercice 2, regarder s’il liste les faces avant de répondre : « 5 et 6 », puis « possible ». C’est le geste de la leçon. Et s’il a rouvert une autre leçon ensuite, celle qu’il a choisie dit quelque chose : celle qu’il aime, ou celle qui l’inquiète. Les deux sont de bonnes raisons, et il n’y a rien à corriger — juste à savoir laquelle c’était.",
  ),

  f(
    "em-reprise-12",
    "Reprendre la leçon de maths",
    "Reprise · huit rappels de fin juin",
    [
      "Dernière reprise de l’année. La leçon reprise est « Le nombre caché », vue le 28 mai : on relit le cours, puis les deux exercices neufs sur le cahier, sans rien comparer avec l’écran. Et une conclusion : après les deux exercices, faire la liste à deux des trois choses de maths qu’il sait faire maintenant et qu’il ne savait pas faire en septembre.",
      "Écrire cette liste au dos du cahier, de sa main à lui.",
      "Puis les huit rappels, qui balaient toute l’année.",
    ],
    [
      "Exercice neuf 1 : trouve le nombre caché : …… + 26 = 70.",
      "Exercice neuf 2 : continue la suite : 2 ; 9 ; 16 ; 23 ; …",
      "9 × 12 ?",
      "2,75 + 1,25 ?",
      "1 km 250 m, combien de mètres ?",
      "Les 3/4 de 240 ?",
      "625 ÷ 5 ?",
      "Un rectangle mesure 18 cm sur 12 cm : périmètre et aire ?",
      "Écris en chiffres : huit cent douze mille quatre-vingt-dix.",
      "Le double de 4,5 ?",
    ],
    [
      "44 : on retire 26 de 70.",
      "30 : on ajoute 7 chaque fois.",
      "108",
      "4",
      "1 250 m",
      "180",
      "125",
      "périmètre 60 cm, aire 216 cm²",
      "812 090",
      "9",
    ],
    "La liste écrite au dos du cahier est le vrai matériel de cette séance. Les huit rappels ne servent qu’à la nourrir. Si elle contient trois lignes de sa main, la séance a fait son travail, quel que soit le sort des rappels.",
  ),

  /* ------------------------------------------------------------------ *
   * « Géométrie : tracer » — 11 programmes de construction.
   *
   * Le matériel donne les étapes à dicter, une par une. Le corrigé donne,
   * en vis-à-vis de chaque étape, ce qu’on doit voir apparaître — c’est là
   * qu’on rattrape une figure qui glisse, et non à la fin quand elle est
   * finie et fausse.
   * ------------------------------------------------------------------ */

  f(
    "em-trace-01",
    "Géométrie : tracer",
    "Programme 1 · le carré à l’équerre",
    [
      "Dicter une étape à la fois, et attendre qu’elle soit finie avant de dire la suivante. Ne pas montrer le programme entier : c’est un exercice d’écoute autant que de tracé.",
      "Après chaque étape, la ligne correspondante du corrigé dit ce qu’on doit voir. Vérifier là, pas à la fin.",
      "Crayon à papier bien taillé et gomme à portée. Effacer fait partie du tracé, ce n’est pas un aveu.",
    ],
    [
      "Trace un segment [AB] de 6 cm, bien horizontal, vers le milieu de la feuille.",
      "Pose l’équerre en B et trace la perpendiculaire à (AB) qui monte.",
      "Sur cette perpendiculaire, place le point C à 6 cm de B.",
      "Pose l’équerre en A, trace la perpendiculaire qui monte, et place D à 6 cm de A.",
      "Relie C et D.",
      "Repose les instruments, recule la feuille et regarde la figure entière.",
    ],
    [
      "6 cm d’une pointe de crayon à l’autre, en partant du zéro de la règle et non de son bord : c’est l’écart de deux millimètres le plus fréquent.",
      "Le coin de l’équerre se loge dans l’angle sans laisser de jour.",
      "BC mesure 6 cm le long de la perpendiculaire, pas en biais.",
      "D est du même côté que C. S’il part de l’autre côté, la figure se tord : on efface ce point-là, pas toute la figure.",
      "[CD] tombe sur 6 cm sans qu’on ait eu besoin de le mesurer avant. C’est la vérification de tout ce qui précède.",
      "La figure obtenue : un carré ABCD de 6 cm de côté, quatre angles droits, quatre côtés égaux.",
    ],
    "Regarder d’où part la mesure sur la règle. Beaucoup de figures « fausses » sont des figures mesurées depuis le bord de la règle, et c’est un geste à corriger une fois pour toutes plutôt qu’une notion à revoir.",
  ),

  f(
    "em-trace-02",
    "Géométrie : tracer",
    "Programme 2 · le rectangle et ses diagonales",
    [
      "Même dispositif : une étape dictée, une étape tracée, une vérification.",
      "Les deux dernières étapes apportent une découverte — les diagonales d’un rectangle ont la même longueur. Ne pas l’annoncer, la laisser venir de la mesure.",
      "Si l’écart entre les deux diagonales dépasse deux millimètres, chercher ensemble lequel des quatre angles a glissé, plutôt que de tout recommencer.",
    ],
    [
      "Trace un segment [AB] de 8 cm.",
      "En B, trace la perpendiculaire à (AB) et place C à 5 cm de B.",
      "En A, trace la perpendiculaire à (AB) et place D à 5 cm de A, du même côté que C.",
      "Relie C et D : tu obtiens le rectangle ABCD.",
      "Trace les deux diagonales [AC] et [BD].",
      "Mesure les deux diagonales et note les deux longueurs l’une sous l’autre.",
    ],
    [
      "8 cm, trait fin et net.",
      "L’angle en B est droit et BC mesure 5 cm.",
      "L’angle en A est droit, AD mesure 5 cm, et D est du même côté que C.",
      "[CD] mesure 8 cm : c’est le contrôle du rectangle.",
      "Les deux diagonales se croisent à peu près au centre de la figure.",
      "Les deux mesures sont égales, environ 9,4 cm. Un écart jusqu’à 2 mm est celui du crayon ; au-delà, c’est un angle qui n’est pas tout à fait droit.",
    ],
    "Ce qu’on observe ici, c’est sa réaction quand les deux diagonales tombent pareil : surprise, ou indifférence ? La surprise est le début d’une propriété. L’indifférence veut dire qu’on a mesuré sans savoir pourquoi — alors on redemande pourquoi c’était intéressant de les mesurer.",
  ),

  f(
    "em-trace-03",
    "Géométrie : tracer",
    "Programme 3 · le cercle, le rayon, le diamètre",
    [
      "Premier programme au compas. Serrer la vis du compas avant de commencer, et vérifier l’écartement sur la règle graduée plutôt qu’à l’œil.",
      "Le compas se tient par la tête, entre le pouce et l’index, et c’est la feuille qui tourne. Le montrer une fois.",
      "Dicter étape par étape comme d’habitude.",
    ],
    [
      "Place un point O vers le milieu de la feuille et nomme-le.",
      "Écarte le compas de 4 cm en te servant de la règle graduée.",
      "Pointe le compas en O et trace le cercle entier, d’un seul tour.",
      "Trace une droite qui passe par O et coupe le cercle en deux points, que tu appelles A et B.",
      "Mesure [AB].",
      "Place un point M n’importe où sur le cercle, trace [OM] et mesure-le.",
    ],
    [
      "Le point est visible et porte sa lettre : une figure se relit, donc elle se nomme.",
      "4 cm entre la pointe sèche et la mine, pas 4 cm entre les deux branches en haut.",
      "Le cercle se referme sur lui-même sans marche d’escalier. Une marche veut dire que le compas s’est refermé en route : resserrer la vis.",
      "A et B sont bien sur le cercle et la droite passe exactement par O.",
      "[AB] mesure 8 cm : le diamètre vaut deux fois le rayon, et c’est ce qu’on voulait lui faire trouver.",
      "[OM] mesure 4 cm, où que M ait été placé. C’est cela, un cercle : tous les points à la même distance du centre.",
    ],
    "Regarder la tenue du compas plus que le cercle obtenu. Un compas tenu par la branche s’ouvre en tournant, et l’enfant croit alors que c’est lui qui trace mal. Lui dire que c’est l’outil règle la question pour toute l’année.",
  ),

  f(
    "em-trace-04",
    "Géométrie : tracer",
    "Programme 4 · le triangle rectangle 6-8-10",
    [
      "Un programme court avec une belle surprise à la fin : les trois distances de I aux sommets sont égales.",
      "Dicter étape par étape. La dernière étape demande trois mesures : les faire noter toutes les trois avant de commenter.",
      "Si le triangle ne tombe pas exactement sur 10 cm, ce n’est pas grave : entre 9,8 et 10,2, le tracé est bon.",
    ],
    [
      "Trace un segment [AB] de 6 cm.",
      "En A, trace la perpendiculaire à (AB) et place C à 8 cm de A.",
      "Relie B et C.",
      "Mesure [BC] et note la mesure.",
      "Place I, le milieu de [BC] : mesure [BC], prends la moitié, reporte-la depuis B.",
      "Trace [IA], puis mesure [IA], [IB] et [IC].",
    ],
    [
      "6 cm, trait net.",
      "L’angle en A est droit, AC mesure 8 cm.",
      "Le triangle ABC est fermé, avec son angle droit en A.",
      "[BC] mesure 10 cm. Six, huit, dix : ce triangle-là tombe toujours juste, et c’est pour cela qu’on l’a choisi.",
      "I est à 5 cm de B et à 5 cm de C. Vérifier les deux avant de continuer.",
      "[IA], [IB] et [IC] mesurent toutes les trois 5 cm : le milieu de [BC] est à la même distance des trois sommets. Le cercle de centre I et de rayon 5 cm passerait par A, B et C.",
    ],
    "Cette figure se termine sur une coïncidence qui n’en est pas une. Ce qu’on regarde, c’est s’il cherche à comprendre pourquoi ou s’il passe à autre chose. S’il cherche, tracer le cercle de centre I et de rayon 5 cm : la réponse est là, dessinée.",
  ),

  f(
    "em-trace-05",
    "Géométrie : tracer",
    "Programme 5 · le losange au compas",
    [
      "Le compas sert ici à reporter une longueur, pas à tracer un cercle entier : de simples arcs suffisent.",
      "Point de vigilance : entre l’étape 2 et l’étape 3, l’écartement du compas ne doit pas bouger d’un millimètre. Le dire avant.",
      "Dicter étape par étape.",
    ],
    [
      "Trace un segment [AC] de 8 cm.",
      "Écarte le compas de 5 cm, pointe-le en A, et trace un petit arc au-dessus de [AC] puis un autre au-dessous.",
      "Sans toucher à l’écartement, pointe le compas en C et trace deux arcs qui coupent les premiers.",
      "Nomme B le point de croisement du haut, D celui du bas.",
      "Trace [AB], [BC], [CD] et [DA], puis mesure les quatre côtés.",
      "Trace [BD] et regarde comment elle rencontre [AC].",
    ],
    [
      "8 cm, à peu près au milieu de la feuille pour avoir la place au-dessus et au-dessous.",
      "Les arcs sont courts : on ne trace que là où le croisement va se produire.",
      "Les arcs se coupent nettement. S’ils ne se coupent pas, l’écartement a bougé ou il est plus petit que la moitié de [AC].",
      "B et D sont chacun à 5 cm de A et à 5 cm de C, par construction : on n’a pas besoin de le mesurer.",
      "Les quatre côtés mesurent 5 cm : c’est un losange.",
      "[BD] coupe [AC] en son milieu et à angle droit. Le vérifier à l’équerre : c’est la propriété du losange.",
    ],
    "Le geste à observer est celui de la vis du compas. S’il la resserre de lui-même avant de reporter, il a compris que l’outil est la condition de la figure — c’est plus utile pour la suite que le losange lui-même.",
  ),

  f(
    "em-trace-06",
    "Géométrie : tracer",
    "Programme 6 · le triangle équilatéral",
    [
      "Trois étapes de tracé, trois de vérification. C’est le programme le plus court de la série, et le plus élégant.",
      "Insister sur l’étape 2 et 3 : même écartement, deux pointes différentes. Toute la construction tient là.",
      "Garder la figure : elle sert de base au programme suivant.",
    ],
    [
      "Trace un segment [AB] de 5 cm.",
      "Écarte le compas de 5 cm, pointe-le en A et trace un arc au-dessus de [AB].",
      "Sans changer l’écartement, pointe le compas en B et trace un arc qui coupe le premier. Nomme C ce croisement.",
      "Trace [AC] et [BC].",
      "Mesure les trois côtés.",
      "Passe l’équerre dans les trois angles du triangle.",
    ],
    [
      "5 cm exactement : tout le reste en dépend.",
      "L’arc passe au-dessus du milieu de [AB], sinon il ne croisera rien.",
      "Le croisement est net et unique au-dessus de [AB].",
      "Le triangle est fermé, sans dépassement aux sommets.",
      "Les trois côtés mesurent 5 cm : le triangle est équilatéral, et il l’est par construction, pas par chance.",
      "Aucun des trois angles n’est droit ; ils sont tous les trois plus fermés qu’un angle droit, et tous les trois égaux.",
    ],
    "Ce qu’on regarde : le geste de ne pas retoucher l’écartement entre deux arcs. Quand il devient automatique, toute la géométrie au compas s’ouvre — et quand il ne l’est pas encore, on le redit sans en faire un reproche, c’est un geste de la main.",
  ),

  f(
    "em-trace-07",
    "Géométrie : tracer",
    "Programme 7 · l’hexagone dans le cercle",
    [
      "La plus jolie construction de l’année, et l’une des plus simples : le rayon d’un cercle se reporte exactement six fois sur ce cercle.",
      "Ne pas annoncer le résultat. Dicter les étapes, et laisser le sixième report retomber sur le point de départ.",
      "Une feuille non quadrillée, et le compas bien serré.",
    ],
    [
      "Trace un cercle de centre O et de rayon 4 cm.",
      "Place un point A n’importe où sur le cercle.",
      "Le compas toujours écarté de 4 cm, pointe-le en A et marque le point B sur le cercle.",
      "Pointe le compas en B, marque C ; puis en C, marque D ; et continue jusqu’à revenir près de A.",
      "Relie les six points dans l’ordre, à la règle.",
      "Mesure les six côtés de la figure.",
    ],
    [
      "Le cercle est fermé et régulier, le centre est marqué et nommé.",
      "N’importe où : la figure sera la même, seulement tournée.",
      "B est sur le cercle, à 4 cm de A en suivant la corde et non l’arc.",
      "Le sixième report retombe sur A. S’il tombe à deux ou trois millimètres, c’est le crayon ; s’il tombe à un centimètre, l’écartement a bougé en route — reprendre au point qui a glissé, pas depuis le début.",
      "Six segments, six sommets, aucun côté qui se croise.",
      "Les six côtés mesurent 4 cm, comme le rayon : dans un hexagone régulier, le côté est égal au rayon du cercle qui le porte.",
    ],
    "Le moment intéressant est celui du sixième report. Regarder s’il vérifie de lui-même que ça retombe sur A, ou s’il relie les points sans se poser la question. Vérifier avant de conclure, c’est exactement ce que la géométrie apprend.",
  ),

  f(
    "em-trace-08",
    "Géométrie : tracer",
    "Programme 8 · deux rectangles, la même aire",
    [
      "Ce programme met côte à côte deux leçons déjà passées, « Le périmètre » et « Les aires » : deux rectangles, deux mesures chacun.",
      "Dicter étape par étape. Les carreaux de 1 cm se tracent au crayon léger, à la règle, en reportant les centimètres sur deux côtés opposés : c’est long, et c’est le travail. On prend son temps.",
      "Ne pas annoncer ce qu’on va trouver : laisser les nombres parler à la dernière étape.",
    ],
    [
      "Trace un rectangle ABCD de 6 cm sur 2 cm, à la règle et à l’équerre.",
      "Un peu plus bas, trace un rectangle EFGH de 4 cm sur 3 cm.",
      "Dans chaque rectangle, trace au crayon léger les lignes tous les centimètres, pour faire apparaître des carreaux de 1 cm de côté.",
      "Compte les carreaux de chaque rectangle et écris l’aire à côté.",
      "Mesure le tour de chaque rectangle et écris le périmètre sous l’aire.",
      "Question : les deux rectangles ont-ils la même aire ? Le même périmètre ?",
    ],
    [
      "Quatre angles droits vérifiés à l’équerre ; AB et CD mesurent 6 cm, BC et DA mesurent 2 cm.",
      "Même vérification : 4 cm et 3 cm, quatre angles droits.",
      "Les lignes partent des graduations reportées sur deux côtés opposés : 2 rangées de 6 carreaux dans le premier, 3 rangées de 4 carreaux dans le second.",
      "12 carreaux dans chacun : 12 cm² pour les deux, 6 × 2 et 4 × 3.",
      "16 cm pour ABCD (6 + 2 + 6 + 2), 14 cm pour EFGH (4 + 3 + 4 + 3).",
      "Même aire, 12 cm² ; pas le même périmètre, 16 cm et 14 cm. Deux figures peuvent couvrir la même surface sans avoir le même tour.",
    ],
    "Le moment à regarder est la dernière question : s’attend-il à ce que la même aire donne le même tour ? La surprise, s’il y en a une, vaut la séance. Si les carreaux ne tombent pas juste, c’est le report d’un centimètre qui a glissé : on recompte une rangée, pas tout le rectangle.",
  ),

  f(
    "em-trace-09",
    "Géométrie : tracer",
    "Programme 9 · le carré dans le carré",
    [
      "Un programme en deux temps : un carré, puis le carré de ses milieux. La figure obtenue est belle et sa propriété est surprenante.",
      "La dernière étape demande un raisonnement, pas un tracé. La poser comme une question ouverte et laisser chercher.",
      "Si le raisonnement ne vient pas, découper vraiment les quatre coins aux ciseaux et les poser dans le carré du milieu.",
    ],
    [
      "Trace un carré ABCD de 8 cm de côté, à la règle et à l’équerre.",
      "Place I le milieu de [AB], J le milieu de [BC], K le milieu de [CD] et L le milieu de [DA].",
      "Trace [IJ], [JK], [KL] et [LI].",
      "Mesure les quatre côtés du quadrilatère IJKL.",
      "Passe l’équerre dans les quatre angles de IJKL.",
      "Question : l’aire de IJKL, comparée à celle de ABCD, c’est combien ?",
    ],
    [
      "Quatre côtés de 8 cm, quatre angles droits. Prendre le temps : tout le reste s’appuie dessus.",
      "Chaque milieu est à 4 cm des deux sommets voisins. Le vérifier sur un côté au moins.",
      "Un quadrilatère penché apparaît à l’intérieur du carré.",
      "Les quatre côtés mesurent la même chose, environ 5,7 cm.",
      "Les quatre angles sont droits : IJKL est un carré, posé en biais.",
      "La moitié. Les quatre triangles des coins, remis ensemble, remplissent exactement IJKL : 32 cm² contre 64 cm².",
    ],
    "La dernière étape est la seule de toute la série qui ne se tranche pas à la règle. Regarder ce qu’il propose avant de découper : même une réponse comme « un peu plus de la moitié » montre qu’il a estimé une aire, et c’est cela qu’on cherchait.",
  ),

  f(
    "em-trace-10",
    "Géométrie : tracer",
    "Programme 10 · la rosace à six pétales",
    [
      "Une figure qu’on fait pour le plaisir de la faire, et qui demande sept cercles au même écartement. Prévoir des crayons de couleur.",
      "L’écartement du compas ne change jamais, du début à la fin. C’est toute la difficulté et tout l’intérêt.",
      "Si la fatigue arrive au quatrième cercle, s’arrêter là : une rosace à quatre pétales est une belle figure aussi.",
    ],
    [
      "Trace un cercle de centre O et de rayon 5 cm.",
      "Place un point A sur le cercle, puis reporte le rayon six fois comme pour l’hexagone : tu obtiens six points sur le cercle.",
      "Pointe le compas sur le premier de ces six points et trace un cercle entier, toujours au même écartement.",
      "Fais la même chose depuis chacun des cinq autres points.",
      "Repasse en couleur un seul pétale, celui que tu veux.",
      "Compte les pétales qui se touchent au centre O.",
    ],
    [
      "Cercle net, centre marqué, rayon vérifié à la règle.",
      "Les six points sont sur le cercle et à 5 cm les uns des autres.",
      "Le nouveau cercle passe par O et par deux des six points : c’est la garantie que l’écartement n’a pas bougé.",
      "Les sept cercles dessinent des pétales. Si l’un d’eux ne passe pas par O, c’est celui-là qu’on reprend, seul.",
      "Un pétale est la partie commune à deux cercles : deux arcs qui se rejoignent en pointe aux deux bouts.",
      "Six pétales se rejoignent en O, comme les six pétales d’une fleur.",
    ],
    "Cette séance-ci n’a rien à prouver. Regarder simplement s’il continue après le sixième cercle, et s’il y revient un autre jour de son côté — une figure qu’on refait pour soi, c’est de la géométrie qui a pris.",
  ),

  f(
    "em-trace-11",
    "Géométrie : tracer",
    "Programme 11 · l’angle droit caché dans le cercle",
    [
      "Dernier programme de l’année, et le plus étonnant : où qu’on place C sur le cercle, l’angle en C est droit.",
      "Ne rien annoncer. Dicter les six étapes, et laisser l’équerre dire la conclusion.",
      "Puis refaire les étapes 4, 5 et 6 avec un autre point C, sur la même figure et d’une autre couleur. C’est la deuxième fois qui transforme la surprise en propriété.",
    ],
    [
      "Trace un segment [AB] de 10 cm.",
      "Place M, le milieu de [AB] : mesure, prends la moitié, reporte depuis A.",
      "Trace le cercle de centre M et de rayon 5 cm : [AB] en est un diamètre.",
      "Place un point C sur le cercle, où tu veux, mais pas sur [AB].",
      "Trace [AC] et [BC].",
      "Pose l’équerre dans l’angle du triangle en C.",
    ],
    [
      "10 cm, horizontal si possible : la figure se lit mieux.",
      "M est à 5 cm de A et à 5 cm de B. Vérifier les deux.",
      "Le cercle passe exactement par A et par B. Sinon, M n’est pas au milieu : c’est là qu’on reprend.",
      "N’importe où sur le cercle, et c’est bien le sujet de la séance.",
      "Un triangle ABC apparaît, avec [AB] pour base.",
      "L’angle en C est droit. Et il le reste où qu’on place C sur ce cercle : le refaire avec un deuxième point C, d’une autre couleur, pour voir que ce n’est pas un coup de chance.",
    ],
    "Ce qu’on observe, c’est ce qu’il dit après avoir posé l’équerre la deuxième fois. « Ça marche encore » est déjà une conclusion de mathématicien. S’il propose un troisième point de lui-même, le laisser faire : il est en train de démontrer.",
  ),

  /* ------------------------------------------------------------------ *
   * « Mesurer pour de vrai » — 12 relevés.
   *
   * Le matériel dit quoi mesurer et dans quelles deux unités ; le corrigé
   * donne l’ordre de grandeur qu’on rencontre d’ordinaire. Ce n’est pas
   * une réponse à trouver : une mesure différente n’est pas une mesure
   * fausse, c’est leur maison et pas une autre. L’ordre de grandeur ne
   * sert qu’à repérer les écarts d’un facteur dix, ceux qui viennent d’une
   * unité oubliée.
   * ------------------------------------------------------------------ */

  f(
    "em-mesure-01",
    "Mesurer pour de vrai",
    "Relevé 1 · les longueurs de la maison",
    [
      "Trois colonnes sur le cahier : « j’estime », « je mesure », « en deux unités ». La colonne d’estimation se remplit avant de sortir le mètre, et on n’y revient pas.",
      "Estimer, puis mesurer, puis regarder l’écart sans le commenter. Au bout de six objets, l’écart se resserre tout seul ; c’est pour cela qu’on en fait six.",
      "Un mètre ruban de couturière ou un mètre de bricolage, et une règle graduée pour les petits objets.",
    ],
    [
      "La longueur de la table où vous travaillez, en centimètres puis en mètres et centimètres.",
      "La hauteur d’une chaise, du sol au siège, en centimètres puis en millimètres.",
      "La largeur de la porte d’entrée, en centimètres puis en mètres et centimètres.",
      "La longueur d’un lit, en centimètres puis en mètres et centimètres.",
      "L’épaisseur d’un livre fermé, en millimètres puis en centimètres et millimètres.",
      "La longueur d’un crayon neuf, en millimètres puis en centimètres et millimètres.",
    ],
    [
      "Entre 100 et 180 cm d’ordinaire, soit 1 m et quelques dizaines de centimètres. Une grande table de salle à manger peut atteindre 200 cm.",
      "Autour de 45 cm, soit 450 mm. Les chaises varient peu : de 42 à 48 cm.",
      "Entre 80 et 90 cm, soit 0 m et 80 à 90 cm. Plus étroit que 70 cm, c’est une porte de placard.",
      "Un lit d’enfant fait environ 190 cm, soit 1 m et 90 cm ; un grand lit, 200 cm.",
      "De 15 à 40 mm selon le livre, soit de 1 cm et 5 mm à 4 cm.",
      "Environ 175 mm, soit 17 cm et 5 mm, pour un crayon qui n’a jamais été taillé.",
    ],
    "Ce qu’on regarde, c’est l’écart entre la colonne « j’estime » et la colonne « je mesure », du premier objet au sixième. Un écart qui se resserre en cours de séance vaut mieux qu’une estimation juste du premier coup, et c’est visible sur la page sans rien calculer.",
  ),

  f(
    "em-mesure-02",
    "Mesurer pour de vrai",
    "Relevé 2 · les masses de la cuisine",
    [
      "Même dispositif en trois colonnes. Ici on soupèse avant de poser sur la balance : la main est un instrument, et elle s’étalonne.",
      "Une balance de cuisine suffit. Si elle n’affiche que les grammes, la conversion en kilogrammes se fait de tête et s’écrit.",
      "Pour les objets lourds, se peser avec puis sans l’objet et soustraire. C’est un vrai problème de maths et il tombe tout seul.",
    ],
    [
      "Un paquet de pâtes non ouvert, en grammes puis en kilogrammes.",
      "Une pomme, en grammes puis en kilogrammes.",
      "Une brique de lait pleine, en grammes puis en kilogrammes.",
      "Un cartable vide, en grammes puis en kilogrammes.",
      "Le même cartable rempli pour la journée, et la différence entre les deux.",
      "Une cuillère à soupe de farine, en grammes.",
    ],
    [
      "500 g, soit 0,5 kg : c’est écrit sur le paquet, et le vérifier sur la balance vaut mieux que de le croire.",
      "De 120 à 200 g, soit 0,12 à 0,2 kg.",
      "Un litre de lait pèse un peu plus de 1 000 g, soit un peu plus de 1 kg. L’emballage compte pour quelques dizaines de grammes.",
      "De 800 à 1 500 g, soit 0,8 à 1,5 kg.",
      "Rempli, de 3 à 5 kg. La différence est la masse de ce qu’on transporte, et elle surprend souvent.",
      "Environ 10 g, parfois 15 g si la cuillère est bombée.",
    ],
    "La main qui soupèse : est-ce qu’il soupèse vraiment avant d’annoncer, ou est-ce qu’il annonce un nombre pour avoir un nombre ? Soupeser puis annoncer, c’est ce qui fait qu’un jour l’estimation devient bonne. Le geste compte plus que le chiffre.",
  ),

  f(
    "em-mesure-03",
    "Mesurer pour de vrai",
    "Relevé 3 · les contenances",
    [
      "Un verre doseur, un évier, et de quoi éponger. Cette séance mouille un peu, c’est normal.",
      "Estimer avant de verser, toujours. Et verser lentement : la lecture se fait à hauteur des yeux, pas en regardant d’en haut.",
      "Noter chaque contenance en millilitres puis en litres, même quand le nombre est petit : 250 mL, c’est 0,25 L, et l’écrire installe la conversion.",
    ],
    [
      "Un verre à eau rempli à ras, en millilitres puis en litres.",
      "Une bouteille d’eau du commerce, en litres puis en millilitres.",
      "Une casserole moyenne remplie à ras, en litres puis en millilitres.",
      "Une cuillère à café, en millilitres.",
      "Un seau ou une bassine, en litres.",
      "Combien de verres faut-il pour remplir un litre ?",
    ],
    [
      "De 200 à 250 mL, soit 0,2 à 0,25 L.",
      "1,5 L le plus souvent, soit 1 500 mL. Parfois 1 L, soit 1 000 mL.",
      "De 2 à 3 L, soit 2 000 à 3 000 mL.",
      "5 mL. C’est peu, et c’est pour cela qu’on ne pèse pas la farine à la cuillère à café.",
      "De 5 à 10 L pour un seau ordinaire.",
      "Quatre ou cinq verres, selon leur taille. À vérifier en versant vraiment, pas en calculant.",
    ],
    "La dernière ligne est la seule qui se vérifie en versant. Regarder s’il propose de calculer plutôt que de verser : calculer est une bonne idée, et verser ensuite pour voir si ça tombe juste est une meilleure idée encore. Les deux, dans cet ordre.",
  ),

  f(
    "em-mesure-04",
    "Mesurer pour de vrai",
    "Relevé 4 · les durées, chronomètre en main",
    [
      "Un chronomètre — celui du téléphone convient — et la même méthode : on estime la durée avant de la mesurer.",
      "Les durées se notent en deux unités : en secondes puis en minutes et secondes, ou en minutes puis en heures et minutes.",
      "Ne pas chronométrer ce qu’il fait lui-même dans les deux premières mesures. Un chronomètre braqué sur soi transforme une mesure en épreuve ; on commence par chronométrer l’adulte.",
    ],
    [
      "Le temps que met l’adulte pour mettre la table, en secondes puis en minutes et secondes.",
      "Le temps que met l’eau à bouillir dans une petite casserole, en minutes.",
      "La durée du repas du soir, en minutes puis en heures et minutes.",
      "Le temps qu’il faut pour monter l’escalier tranquillement, en secondes.",
      "Le temps entre le lever et le départ du matin, en minutes puis en heures et minutes.",
      "Le temps de cuisson écrit sur un paquet de pâtes, et ce qu’il vaut en secondes.",
    ],
    [
      "De 120 à 300 s, soit 2 à 5 min.",
      "De 5 à 10 min pour un demi-litre d’eau sur une plaque ordinaire.",
      "De 20 à 40 min, soit 0 h 20 à 0 h 40.",
      "De 5 à 15 s pour un étage.",
      "De 60 à 90 min, soit 1 h à 1 h 30.",
      "De 8 à 11 min selon les pâtes, soit de 480 à 660 s.",
    ],
    "Les durées sont les plus difficiles à estimer, et de loin : c’est normal de se tromper d’un facteur deux. Ce qu’on regarde n’est pas la justesse mais le sens de l’erreur — surestime-t-il toujours, ou toujours l’inverse ? Un biais constant se corrige en une phrase.",
  ),

  f(
    "em-mesure-05",
    "Mesurer pour de vrai",
    "Relevé 5 · les tours, à la ficelle",
    [
      "Les objets ronds ne se mesurent pas à la règle. On fait le tour avec une ficelle, on marque au feutre, on déroule, on mesure la ficelle.",
      "Estimer d’abord : combien de centimètres de ficelle pour faire le tour d’une assiette ? La plupart des gens sous-estiment, et c’est le sujet de la séance.",
      "Noter chaque tour en centimètres puis en millimètres.",
    ],
    [
      "Le tour d’une assiette plate, en centimètres puis en millimètres.",
      "Le tour d’une boîte de conserve, en centimètres.",
      "Le tour d’un verre, au bord, en centimètres.",
      "Le tour d’un ballon, en centimètres.",
      "Le périmètre de la table, en additionnant les quatre côtés, en centimètres puis en mètres.",
      "Le périmètre de la porte, en centimètres puis en mètres.",
    ],
    [
      "De 60 à 80 cm pour une assiette de 20 à 25 cm de diamètre, soit 600 à 800 mm. Le tour fait environ trois fois le diamètre, et c’est la surprise de la séance.",
      "De 22 à 26 cm pour une boîte ordinaire.",
      "De 20 à 26 cm selon le verre.",
      "De 60 à 70 cm pour un ballon de jeu.",
      "Pour une table de 120 cm sur 80 cm : 400 cm, soit 4 m.",
      "Pour une porte de 85 cm sur 200 cm : 570 cm, soit 5,70 m.",
    ],
    "Le rapport de trois entre le tour et le diamètre revient à chaque objet rond de la fiche. Regarder s’il le remarque de lui-même sur le deuxième ou le troisième objet. S’il le remarque, écrire la phrase avec lui : il vient de rencontrer un nombre qu’il retrouvera longtemps.",
  ),

  f(
    "em-mesure-06",
    "Mesurer pour de vrai",
    "Relevé 6 · les périmètres, du livre à la pièce",
    [
      "La leçon « Le périmètre » est passée le 26 janvier ; les aires ne viendront que le 8 mars. Aujourd’hui on fait le périmètre pour de vrai, sur des objets de plus en plus grands : on mesure chaque côté, on additionne, on note le tour.",
      "Estimer d’abord, avant chaque mesure : le tour d’un livre, c’est plus ou moins qu’une règle de 30 cm ? Puis mesurer, et regarder l’écart sans en faire une affaire.",
      "Deux unités chaque fois : centimètres et mètres. Pour la pièce, un mètre ruban qu’on reporte, en notant chaque morceau.",
    ],
    [
      "Le périmètre d’un livre de classe, en centimètres.",
      "Le périmètre d’un cadre ou d’un tableau accroché au mur, en centimètres.",
      "Le périmètre d’un tapis, en centimètres puis en mètres.",
      "Le périmètre du lit, en centimètres puis en mètres.",
      "Le périmètre de la pièce où l’on travaille, en mètres.",
      "Un carreau de carrelage ou une dalle carrée : mesure un seul côté, et trouve le tour sans mesurer les trois autres.",
    ],
    [
      "Pour un livre de 21 cm sur 29 cm : 100 cm environ, soit 1 m.",
      "Pour un cadre de 30 cm sur 40 cm : 140 cm, soit 1,40 m.",
      "Pour un tapis de 120 cm sur 170 cm : 580 cm, soit 5,80 m.",
      "Pour un lit de 90 cm sur 190 cm : 560 cm, soit 5,60 m.",
      "Pour une pièce de 3 m sur 4 m : 14 m. Les meubles gênent : on mesure le long des murs, là où l’on peut, et on complète en estimant.",
      "Pour un carreau de 20 cm de côté : 80 cm, quatre fois le côté, puisque les quatre côtés d’un carré sont égaux.",
    ],
    "Ce qu’on regarde : sur les grands objets, note-t-il chaque report du mètre ruban, ou essaie-t-il de tout garder en tête ? Noter chaque morceau est le geste utile. Sur le dernier relevé, trouve-t-il le tour sans mesurer les quatre côtés ? S’il les mesure quand même, c’est une vérification, et elle est bienvenue.",
  ),

  f(
    "em-mesure-07",
    "Mesurer pour de vrai",
    "Relevé 7 · la même mesure dans deux unités",
    [
      "Cette fois, la mesure passe au second plan : le travail est la conversion. Chaque objet est noté dans deux unités, et on vérifie que les deux écritures désignent bien la même chose.",
      "Faire un tableau de conversion au brouillon avant de commencer — km, hm, dam, m, dm, cm, mm — et s’en servir. Un tableau qui sert est un tableau qui reste.",
      "Poser la question à chaque ligne : « le nombre est-il plus grand ou plus petit dans l’autre unité ? », avant de convertir.",
    ],
    [
      "La hauteur du réfrigérateur, en centimètres puis en mètres.",
      "La longueur du couloir, en mètres puis en centimètres.",
      "Le contenu d’une bouteille, en litres puis en millilitres.",
      "La masse d’un paquet de sucre, en grammes puis en kilogrammes.",
      "La longueur d’une gomme, en millimètres puis en centimètres.",
      "La distance de la porte d’entrée à la boîte aux lettres, en pas puis en mètres.",
    ],
    [
      "De 150 à 185 cm, soit 1,50 à 1,85 m.",
      "De 3 à 8 m, soit 300 à 800 cm.",
      "1,5 L, soit 1 500 mL.",
      "1 000 g, soit 1 kg.",
      "De 30 à 50 mm, soit 3 à 5 cm.",
      "Compter les pas, puis mesurer un pas et multiplier. Un pas d’enfant fait environ 50 cm, donc vingt pas font à peu près 10 m.",
    ],
    "La question à se poser avant chaque conversion — plus grand ou plus petit ? — évite la moitié des erreurs de virgule. Regarder s’il la pose encore à la sixième ligne, ou s’il a arrêté à la deuxième. S’il a arrêté, la reposer à voix haute plutôt que corriger le résultat.",
  ),

  f(
    "em-mesure-08",
    "Mesurer pour de vrai",
    "Relevé 8 · quand la virgule entre dans les mesures",
    [
      "Toutes les mesures de cette fiche se notent avec une virgule : 1,85 m et non 185 cm. C’est la même longueur écrite autrement, et le dire ainsi.",
      "Estimer d’abord, comme toujours, et estimer aussi avec une virgule : « je pense 2,5 m ».",
      "Si une mesure tombe pile sur un nombre entier, l’écrire quand même avec la virgule : 2 m, c’est 2,00 m. Les zéros après la virgule ne coûtent rien.",
    ],
    [
      "La largeur d’un lit, en mètres avec une virgule, puis en centimètres.",
      "La hauteur de la pièce, du sol au plafond, en mètres avec une virgule.",
      "La masse d’un œuf, en grammes puis en kilogrammes avec une virgule.",
      "Le contenu d’un bol rempli, en litres avec une virgule puis en millilitres.",
      "L’épaisseur d’une pièce de monnaie, en millimètres avec une virgule.",
      "La longueur d’une chaussure, en centimètres puis en mètres avec une virgule.",
    ],
    [
      "0,90 m pour un lit d’une personne, soit 90 cm ; 1,40 m pour un lit plus large, soit 140 cm.",
      "De 2,40 à 2,60 m dans un logement ordinaire.",
      "Environ 60 g, soit 0,06 kg. Les deux zéros après la virgule sont ce qui rend cette ligne intéressante.",
      "De 0,25 à 0,40 L, soit 250 à 400 mL.",
      "De 1,5 à 2,5 mm selon la pièce. La mesurer à la règle demande de l’attention ; empiler dix pièces et diviser est plus sûr.",
      "De 20 à 26 cm, soit 0,20 à 0,26 m.",
    ],
    "La pile de dix pièces : y pense-t-il tout seul, ou faut-il le lui proposer ? Mesurer dix objets identiques pour en connaître un, c’est une idée de physicien, et elle mérite d’être nommée comme telle le jour où elle sort.",
  ),

  f(
    "em-mesure-09",
    "Mesurer pour de vrai",
    "Relevé 9 · peser et verser pour une recette",
    [
      "Cette séance se fait debout, dans la cuisine, avec une vraie recette. Choisir quelque chose de simple : crêpes, gâteau au yaourt, pâte à tarte.",
      "Chaque quantité est d’abord estimée à la main ou à l’œil, puis pesée. On note les deux, et on cuisine ensuite pour de bon.",
      "Le calcul de doublement à la fin n’est pas un exercice : on double vraiment, ou on ne le fait pas.",
    ],
    [
      "Combien de cuillères à soupe de farine pour atteindre 250 g ? Estime, puis pèse en versant cuillère par cuillère.",
      "Mesure un demi-litre d’eau au verre doseur, puis dis combien cela fait de millilitres.",
      "Pèse une casserole vide, puis pleine, et calcule ce que contient la casserole.",
      "Lis la température de cuisson sur la recette, en degrés, et retrouve-la sur le bouton du four.",
      "Lis la durée de cuisson, et dis à quelle heure il faudra sortir le plat.",
      "Si on doublait la recette, quelles seraient les nouvelles quantités ?",
    ],
    [
      "Une cuillère à soupe rase de farine pèse environ 10 g : il en faut donc autour de 25.",
      "0,5 L, soit 500 mL. Lire à hauteur des yeux, le verre posé sur le plan de travail.",
      "Une casserole vide pèse de 500 à 900 g. La différence est la masse du contenu, et c’est une soustraction que la balance ne fait pas à sa place.",
      "De 180 à 210 °C pour un gâteau, souvent noté « thermostat 6 » ou « thermostat 7 ».",
      "Heure d’entrée plus durée de cuisson : une addition d’heures, la même qu’en problèmes, mais qui a des conséquences réelles.",
      "Toutes les quantités multipliées par deux, la durée de cuisson non — et c’est la question la plus intéressante de la fiche.",
    ],
    "La dernière ligne sépare ce qui double de ce qui ne double pas. Écouter sa réponse sur la durée de cuisson avant de dire quoi que ce soit : c’est un raisonnement de grand, et il a le droit d’y passer cinq minutes.",
  ),

  f(
    "em-mesure-10",
    "Mesurer pour de vrai",
    "Relevé 10 · les grandes distances, dehors",
    [
      "Séance dehors. Le mètre ruban ne suffit plus : on mesure en pas, et on convertit avec la longueur d’un pas mesurée au départ.",
      "Commencer par mesurer dix pas d’affilée et diviser par dix : un seul pas se mesure mal, dix pas se mesurent bien.",
      "Emporter le cahier, ou noter au crayon sur une feuille pliée. Les mesures qu’on retient de tête ne reviennent jamais.",
    ],
    [
      "La longueur d’un pas : marche dix pas normaux, mesure la distance totale, divise par dix.",
      "La longueur du jardin ou de la cour, en pas puis en mètres.",
      "Le tour du pâté de maisons, en pas puis en mètres.",
      "La distance de la maison à la boulangerie, estimée en mètres puis en kilomètres.",
      "Le temps de marche pour cette distance, chronométré.",
      "La hauteur d’un arbre ou d’un lampadaire, par son ombre : mesure ton ombre et ta hauteur, puis l’ombre de l’arbre.",
    ],
    [
      "Environ 50 cm, soit 0,5 m pour un pas d’enfant. Dix pas font donc à peu près 5 m.",
      "De 20 à 60 pas pour un jardin ordinaire, soit 10 à 30 m.",
      "De 300 à 800 m selon le quartier : c’est le premier nombre de la fiche qui se dit en kilomètres, 0,3 à 0,8 km.",
      "De 200 m à 1,5 km, soit 0,2 à 1,5 km.",
      "Comptez environ 1 km en 12 à 15 minutes en marchant sans se presser.",
      "L’arbre est à sa hauteur ce que son ombre est à l’ombre de l’enfant. Si son ombre fait deux fois sa taille, l’arbre fait la moitié de son ombre à lui.",
    ],
    "La mesure des dix pas conditionne toute la fiche, et c’est elle qu’on regarde : dix pas normaux, ou dix pas allongés pour faire un beau nombre ? Marcher normalement quand on sait qu’on est mesuré est difficile, et le dire à voix haute le rend plus simple.",
  ),

  f(
    "em-mesure-11",
    "Mesurer pour de vrai",
    "Relevé 11 · mesurer trois fois le même objet",
    [
      "Séance courte et inhabituelle : on mesure six fois, mais toujours les mêmes objets, trois fois chacun, en notant les trois résultats.",
      "Ne rien dire sur les écarts avant la fin. C’est la page entière qui parle, pas une ligne.",
      "La conclusion à formuler ensemble : une mesure n’est jamais un nombre exact, c’est un nombre à quelques millimètres près, et on écrit lequel.",
    ],
    [
      "Mesure la longueur de la table trois fois, en repartant de zéro chaque fois. Note les trois nombres.",
      "Mesure la même table en partant de l’autre bout. Le nombre change-t-il ?",
      "Pèse la même pomme trois fois, en la reposant entre chaque pesée.",
      "Mesure l’épaisseur d’un livre trois fois, en appuyant plus ou moins fort.",
      "Chronomètre trois fois la même action — remplir un verre d’eau, par exemple.",
      "Pour chacun des cinq relevés, écris la plus petite et la plus grande valeur trouvée, et leur écart.",
    ],
    [
      "Trois nombres qui se ressemblent à 2 ou 3 mm près. Un écart plus grand vient du point de départ sur la règle.",
      "Le nombre ne devrait pas changer. S’il change, c’est que le mètre n’était pas bien tendu.",
      "Une balance de cuisine donne souvent trois fois le même nombre au gramme près, parfois à 2 g près.",
      "Un livre appuyé perd 1 ou 2 mm : c’est l’objet qui change, pas l’instrument.",
      "Les trois durées peuvent varier d’une seconde ou deux — le doigt sur le chronomètre n’est pas instantané.",
      "L’écart est petit pour les longueurs, plus grand pour les durées. C’est ce qu’on voulait montrer : certaines grandeurs se mesurent plus finement que d’autres.",
    ],
    "Cette séance n’a pas de bonne réponse, et c’est exactement pourquoi elle est là. Regarder s’il accepte que trois mesures du même objet donnent trois nombres. Chez quelqu’un que l’idée de se tromper inquiète, découvrir que même une règle hésite est une nouvelle qui soulage.",
  ),

  f(
    "em-mesure-12",
    "Mesurer pour de vrai",
    "Relevé 12 · la fiche d’identité chiffrée de la maison",
    [
      "Dernier relevé de l’année : on rassemble sur une seule page les nombres de la maison, comme une carte d’identité. Beaucoup ont déjà été mesurés cette année.",
      "Chercher d’abord dans les relevés précédents ce qui est déjà noté, et ne remesurer que ce qui manque. Relire ses propres relevés fait partie du travail.",
      "La page finie se garde, se punaise, se montre. C’est un document, pas un exercice.",
    ],
    [
      "La surface d’une pièce, en mètres carrés : longueur fois largeur.",
      "Le périmètre de cette même pièce, en mètres.",
      "La hauteur sous plafond, en mètres avec une virgule.",
      "Le nombre de portes, de fenêtres, de prises électriques.",
      "La contenance du réfrigérateur, lue sur son étiquette, en litres.",
      "La masse totale de ce que contient le cartable un jour ordinaire, en kilogrammes.",
    ],
    [
      "De 9 à 20 m² pour une chambre, de 15 à 35 m² pour un séjour.",
      "De 12 à 20 m pour une chambre : quatre côtés additionnés.",
      "De 2,40 à 2,60 m d’ordinaire, parfois plus dans une maison ancienne.",
      "Des nombres à compter, pas à mesurer. Compter est aussi une façon de savoir combien.",
      "De 150 à 350 L pour un réfrigérateur familial. C’est écrit sur l’étiquette collée à l’intérieur.",
      "De 3 à 5 kg. Ce nombre-là a été trouvé en novembre, au relevé 2 : le comparer à celui d’aujourd’hui.",
    ],
    "Feuilleter avec lui les douze relevés de l’année avant de remplir la page. Les mesures de novembre écrites d’une main incertaine, celles de juin écrites en deux unités sans y penser : c’est la seule chose à regarder aujourd’hui, et elle se voit d’un coup d’œil.",
  ),

  /* ------------------------------------------------------------------ *
   * « Le nombre du jour » — 17 fiches, la plus longue série de l’année.
   *
   * Un nombre écrit en grand au tableau ou sur une feuille, et six choses
   * à en faire. Les entiers restent à quatre chiffres jusqu’à la fiche 6,
   * passent au million vers la quatorzième, et les trois dernières portent
   * des décimaux.
   * ------------------------------------------------------------------ */

  f(
    "em-nombre-01",
    "Le nombre du jour",
    "Le nombre 348",
    [
      "Écrire le nombre en grand, au centre d’une feuille ou d’une ardoise, et le laisser sous les yeux toute la séance.",
      "Les six questions se posent à l’oral, dans l’ordre, et les réponses s’écrivent autour du nombre. À la fin, la page raconte tout ce qu’on sait de lui.",
      "Trente minutes pour six questions, c’est large : le temps est là pour chercher, pas pour enchaîner.",
    ],
    [
      "Écris 348 en lettres.",
      "Décompose-le : combien de centaines, de dizaines, d’unités ?",
      "Encadre-le entre les deux dizaines les plus proches.",
      "Combien de centaines entières contient-il ?",
      "Quel est son double ?",
      "Ajoute-lui 100, puis enlève 10 au résultat.",
    ],
    [
      "trois cent quarante-huit",
      "300 + 40 + 8, c’est-à-dire (3 × 100) + (4 × 10) + 8",
      "340 < 348 < 350",
      "3 centaines entières, et il reste 48",
      "696",
      "448, puis 438",
    ],
    "La question 4 est la seule qui sépare vraiment ceux qui lisent les chiffres de ceux qui lisent le nombre. Le chiffre des centaines est 3, et le nombre de centaines entières est 3 aussi : c’est pour cela qu’on commence par un nombre où les deux coïncident. On verra plus tard ceux où ils diffèrent.",
  ),

  f(
    "em-nombre-02",
    "Le nombre du jour",
    "Le nombre 1 205",
    [
      "Même dispositif : le nombre en grand, les six questions à l’oral, les réponses écrites autour.",
      "Ce nombre-ci a un zéro aux dizaines, et c’est pour cela qu’il est là. Ne pas le signaler d’avance.",
      "La quatrième et la sixième question sont la même, posées de deux façons. Laisser un temps entre les deux.",
    ],
    [
      "Écris 1 205 en lettres.",
      "Décompose-le en milliers, centaines, dizaines, unités.",
      "Encadre-le entre les deux centaines les plus proches.",
      "Combien de dizaines entières contient-il ?",
      "Quel est son double ?",
      "Quel est son chiffre des dizaines ? Et son nombre de dizaines ?",
    ],
    [
      "mille deux cent cinq",
      "1 000 + 200 + 5, c’est-à-dire (1 × 1 000) + (2 × 100) + (0 × 10) + 5",
      "1 200 < 1 205 < 1 300",
      "120 dizaines entières, et il reste 5",
      "2 410",
      "Le chiffre des dizaines est 0 ; le nombre de dizaines est 120.",
    ],
    "La dernière question est le cœur de la fiche : 0 et 120 pour le même rang, selon qu’on demande le chiffre ou le nombre. Si la réponse est 0 aux deux, ce n’est pas une confusion de vocabulaire mais l’idée que le nombre est fait de chiffres et non de paquets. La remontrer avec des boîtes de dix.",
  ),

  f(
    "em-nombre-03",
    "Le nombre du jour",
    "Le nombre 2 640",
    [
      "Le nombre en grand, les six questions à l’oral. Pour la première fois, on lui demande à la fois la moitié et le double.",
      "Laisser chercher la moitié de tête avant de proposer d’écrire. 2 640 se coupe bien : la moitié de 2 000, la moitié de 600, la moitié de 40.",
      "Si le calcul mental cale, poser la division sur le cahier. Aucun des deux chemins n’est meilleur.",
    ],
    [
      "Écris 2 640 en lettres.",
      "Décompose-le.",
      "Encadre-le entre les deux milliers les plus proches.",
      "Combien de centaines entières contient-il ?",
      "Quelle est sa moitié ?",
      "Quel est son double ?",
    ],
    [
      "deux mille six cent quarante",
      "2 000 + 600 + 40",
      "2 000 < 2 640 < 3 000",
      "26 centaines entières, et il reste 40",
      "1 320",
      "5 280",
    ],
    "Regarder le chemin pris pour la moitié : couper le nombre en morceaux, ou poser une division ? Couper en morceaux est la méthode de quelqu’un qui voit le nombre ; poser la division est celle de quelqu’un qui suit une procédure. Les deux mènent à 1 320, et la première se construit en la pratiquant.",
  ),

  f(
    "em-nombre-04",
    "Le nombre du jour",
    "Le nombre 4 807",
    [
      "Un nombre avec un zéro aux dizaines à nouveau, plus grand cette fois. Le nombre en grand, les six questions à l’oral.",
      "Sur la deuxième question, exiger les deux écritures : la somme et le produit. Écrire (8 × 100) à côté de 800 rend le rang visible.",
      "Sur la dernière question, les deux opérations s’enchaînent : d’abord +1 000, puis −10 sur le résultat.",
    ],
    [
      "Écris 4 807 en lettres.",
      "Décompose-le de deux façons : en somme, puis avec des multiplications.",
      "Encadre-le entre les deux centaines les plus proches.",
      "Combien de centaines entières contient-il ?",
      "Quel est son double ?",
      "Ajoute-lui 1 000, puis enlève 10 au résultat.",
    ],
    [
      "quatre mille huit cent sept",
      "4 000 + 800 + 7, et (4 × 1 000) + (8 × 100) + (0 × 10) + 7",
      "4 800 < 4 807 < 4 900",
      "48 centaines entières, et il reste 7",
      "9 614",
      "5 807, puis 5 797",
    ],
    "Ici le chiffre des centaines est 8 et le nombre de centaines entières est 48 : les deux diffèrent enfin. C’est la fiche à reprendre en priorité si la question 4 est répondue « 8 ». Rien d’autre à en conclure : c’est une distinction qui demande plusieurs rencontres.",
  ),

  f(
    "em-nombre-05",
    "Le nombre du jour",
    "Le nombre 7 512",
    [
      "Le nombre en grand, les six questions. Nouveauté de cette fiche : l’arrondi.",
      "Pour la dernière question, dessiner une droite graduée au brouillon avec 7 500 et 7 600, et placer 7 512 dessus. On voit alors de quel côté il penche, on ne le calcule pas.",
      "Le mot « arrondir » veut dire choisir le repère le plus proche, et cela se dit comme ça.",
    ],
    [
      "Écris 7 512 en lettres.",
      "Décompose-le.",
      "Encadre-le entre les deux milliers les plus proches.",
      "Combien de dizaines entières contient-il ?",
      "Quelle est sa moitié ?",
      "Arrondis-le à la centaine la plus proche.",
    ],
    [
      "sept mille cinq cent douze",
      "7 000 + 500 + 10 + 2",
      "7 000 < 7 512 < 8 000",
      "751 dizaines entières, et il reste 2",
      "3 756",
      "7 500 — il est plus près de 7 500 que de 7 600",
    ],
    "L’arrondi se comprend sur une droite graduée bien avant de se comprendre par une règle sur le chiffre suivant. Regarder s’il place le nombre sur la droite ou s’il cherche une règle : la droite d’abord, la règle viendra quand elle aura un sens.",
  ),

  f(
    "em-nombre-06",
    "Le nombre du jour",
    "Le nombre 9 099",
    [
      "Le plus grand nombre à quatre chiffres de la série, et le plus intéressant à faire bouger d’une unité.",
      "Les questions 3 et 6 se répondent l’une l’autre : la seconde explique la première. Les poser dans cet ordre quand même.",
      "Prévoir un tableau de numération au brouillon pour la question 6 : on y voit les colonnes se vider.",
    ],
    [
      "Écris 9 099 en lettres.",
      "Décompose-le.",
      "Quel nombre vient juste avant ? Juste après ?",
      "Combien de centaines entières contient-il ?",
      "Quel est son double ?",
      "Ajoute-lui 1, et raconte ce qui se passe dans les colonnes des unités et des dizaines.",
    ],
    [
      "neuf mille quatre-vingt-dix-neuf",
      "9 000 + 90 + 9 (il n’y a pas de centaines)",
      "9 098 avant, 9 100 après",
      "90 centaines entières, et il reste 99",
      "18 198",
      "9 100 : les unités passent de 9 à 0 et on retient une dizaine, qui fait passer les dizaines de 9 à 0 et retient une centaine. Deux colonnes se vident d’un coup.",
    ],
    "La question 6 est celle qui explique toutes les retenues de l’année. S’il la raconte avec ses mots, même maladroitement, c’est acquis. S’il donne 9 100 sans pouvoir dire pourquoi, ce n’est pas un problème du jour : on reposera la même question sur un autre nombre dans deux mois.",
  ),

  f(
    "em-nombre-07",
    "Le nombre du jour",
    "Le nombre 12 460",
    [
      "Premier nombre à cinq chiffres de la série. Le lire à voix haute avant tout, en séparant la classe des mille : « douze mille… quatre cent soixante ».",
      "Écrire le nombre avec son espace entre les mille et les centaines. Cet espace n’est pas une décoration, il dit comment lire.",
      "La dernière question ouvre la multiplication par dix : le nombre garde ses chiffres et change de rang.",
    ],
    [
      "Écris 12 460 en lettres.",
      "Décompose-le.",
      "Encadre-le entre les deux milliers les plus proches.",
      "Combien de centaines entières contient-il ?",
      "Quelle est sa moitié ?",
      "Multiplie-le par 10, et regarde ce qui a changé.",
    ],
    [
      "douze mille quatre cent soixante",
      "10 000 + 2 000 + 400 + 60",
      "12 000 < 12 460 < 13 000",
      "124 centaines entières, et il reste 60",
      "6 230",
      "124 600 : chaque chiffre a glissé d’un rang vers la gauche, et un zéro a pris la place des unités.",
    ],
    "Dire « on ajoute un zéro » marche pour les entiers et se retournera contre lui dès les décimaux. Regarder s’il dit « on ajoute un zéro » ou « ça glisse d’un rang ». Si c’est la première formule, proposer la seconde sans effacer la première : elles décrivent la même chose, mais l’une tiendra plus longtemps.",
  ),

  f(
    "em-nombre-08",
    "Le nombre du jour",
    "Le nombre 25 038",
    [
      "Le nombre en grand. Un zéro aux centaines cette fois, au milieu d’un nombre à cinq chiffres.",
      "Sur la question 3, dessiner la droite graduée de 20 000 à 30 000 avec ses repères de mille : l’encadrement se lit alors au lieu de se calculer.",
      "La dernière question réutilise l’arrondi vu deux fiches plus tôt, mais au millier. Même méthode, repère différent.",
    ],
    [
      "Écris 25 038 en lettres.",
      "Décompose-le.",
      "Encadre-le entre les deux dizaines de mille les plus proches.",
      "Combien de milliers entiers contient-il ?",
      "Quel est son double ?",
      "Arrondis-le au millier le plus proche.",
    ],
    [
      "vingt-cinq mille trente-huit",
      "20 000 + 5 000 + 30 + 8",
      "20 000 < 25 038 < 30 000",
      "25 milliers entiers, et il reste 38",
      "50 076",
      "25 000 — il n’est qu’à 38 de 25 000, et à 962 de 26 000",
    ],
    "Le corrigé de la dernière question donne les deux distances, 38 et 962. C’est ce qu’il faut lui faire calculer plutôt que de lui faire appliquer une règle : arrondir, c’est comparer deux distances, et tout le reste n’est qu’un raccourci.",
  ),

  f(
    "em-nombre-09",
    "Le nombre du jour",
    "Le nombre 60 004",
    [
      "Un nombre plein de zéros, choisi pour cela. Le faire lire à voix haute deux fois : beaucoup de nombres de ce genre se lisent « soixante mille quatre » et s’écrivent 604 ou 60 040.",
      "Les six questions comme d’habitude. La dernière demande d’observer, pas seulement de calculer.",
      "Un tableau de numération à portée de main aide beaucoup sur cette fiche.",
    ],
    [
      "Écris 60 004 en lettres.",
      "Décompose-le.",
      "Encadre-le entre les deux milliers les plus proches.",
      "Combien de centaines entières contient-il ?",
      "Quelle est sa moitié ?",
      "Enlève-lui 10, et regarde combien de chiffres changent.",
    ],
    [
      "soixante mille quatre",
      "60 000 + 4",
      "60 000 < 60 004 < 61 000",
      "600 centaines entières, et il reste 4",
      "30 002",
      "59 994 : quatre chiffres changent d’un coup, parce qu’il a fallu emprunter jusqu’aux dizaines de mille.",
    ],
    "L’écriture du nombre sous la dictée est le vrai test de cette fiche. 60 004 s’écrit avec deux zéros au milieu, et rien dans la façon de le dire ne le signale. Si l’écriture flanche, c’est le tableau de numération qu’on ressort, pas l’explication.",
  ),

  f(
    "em-nombre-10",
    "Le nombre du jour",
    "Le nombre 103 250",
    [
      "Premier nombre à six chiffres. Le lire en deux morceaux : « cent trois mille » puis « deux cent cinquante ».",
      "Cette fiche demande à la fois une multiplication et une division par 10. Les poser l’une sous l’autre pour que le glissement se voie dans les deux sens.",
      "Le nombre reste affiché pendant tout le calcul : on n’a pas à le retenir, seulement à travailler dessus.",
    ],
    [
      "Écris 103 250 en lettres.",
      "Décompose-le.",
      "Encadre-le entre les deux milliers les plus proches.",
      "Combien de dizaines entières contient-il ?",
      "Quelle est sa moitié ?",
      "Multiplie-le par 2, puis divise le nombre de départ par 10.",
    ],
    [
      "cent trois mille deux cent cinquante",
      "100 000 + 3 000 + 200 + 50",
      "103 000 < 103 250 < 104 000",
      "10 325 dizaines entières, sans reste",
      "51 625",
      "206 500, puis 10 325",
    ],
    "Les questions 4 et 6 donnent le même nombre, 10 325, par deux chemins différents : compter les dizaines, ou diviser par dix. Regarder s’il fait le rapprochement. S’il ne le fait pas, le poser comme une question ouverte plutôt que comme une remarque.",
  ),

  f(
    "em-nombre-11",
    "Le nombre du jour",
    "Le nombre 458 007",
    [
      "Un grand nombre avec deux zéros à l’intérieur. Le faire écrire sous la dictée avant de l’afficher, puis comparer les deux écritures.",
      "Cette comparaison est l’exercice, pas une vérification. Ce qui manque dans l’écriture dictée dit exactement quel rang n’est pas encore tenu.",
      "Puis les six questions comme d’habitude.",
    ],
    [
      "Écris 458 007 en lettres.",
      "Décompose-le.",
      "Encadre-le entre les deux centaines de mille les plus proches.",
      "Combien de milliers entiers contient-il ?",
      "Arrondis-le au millier le plus proche.",
      "Quel est son chiffre des dizaines de mille ?",
    ],
    [
      "quatre cent cinquante-huit mille sept",
      "400 000 + 50 000 + 8 000 + 7",
      "400 000 < 458 007 < 500 000",
      "458 milliers entiers, et il reste 7",
      "458 000 — il n’est qu’à 7 de 458 000",
      "5",
    ],
    "Comparer l’écriture dictée et l’écriture affichée, côte à côte, sans commenter. Ce qui manque — un zéro, un rang décalé — se voit tout seul et se corrige tout seul. C’est la façon la moins coûteuse de travailler la numération avec quelqu’un que la correction met mal à l’aise.",
  ),

  f(
    "em-nombre-12",
    "Le nombre du jour",
    "Le nombre 750 000",
    [
      "Un nombre rond, et la fiche la plus rapide de la série. Elle laisse du temps pour la dernière question, qui est la vraie.",
      "Les questions 3 et 4 se font de tête : la moitié et le double d’un nombre rond sont des calculs de tête, et le dire avant évite qu’il pose l’opération.",
      "Garder dix minutes pour la question 6, et accepter qu’elle prenne tout ce temps.",
    ],
    [
      "Écris 750 000 en lettres.",
      "Décompose-le de deux façons.",
      "Quelle est sa moitié ?",
      "Quel est son double ?",
      "Combien de milliers entiers contient-il ?",
      "750 000, c’est les trois quarts de quel nombre ?",
    ],
    [
      "sept cent cinquante mille",
      "700 000 + 50 000, et (7 × 100 000) + (5 × 10 000)",
      "375 000",
      "1 500 000",
      "750 milliers entiers, sans reste",
      "De 1 000 000. Un quart de 1 000 000 vaut 250 000, et trois quarts valent 750 000.",
    ],
    "La question 6 remonte la chaîne au lieu de la descendre : on connaît la part, on cherche le tout. C’est plus difficile que de calculer les trois quarts d’un million, et c’est exactement pour cela qu’elle est posée. S’il cherche cinq minutes sans trouver, chercher avec lui plutôt que donner.",
  ),

  f(
    "em-nombre-13",
    "Le nombre du jour",
    "Le nombre 999 999",
    [
      "Le plus grand nombre à six chiffres. L’écrire en grand, et prévenir qu’une seule des six questions demande un vrai calcul.",
      "La question 5 tombe sur un nombre à virgule, et c’est voulu : tous les nombres n’ont pas de moitié entière, et le découvrir ici vaut mieux que de l’apprendre.",
      "Ne pas se priver de la question 2, qui est la plus spectaculaire de l’année.",
    ],
    [
      "Écris 999 999 en lettres.",
      "Ajoute-lui 1.",
      "Combien de milliers entiers contient-il ?",
      "Encadre-le entre les deux centaines de mille les plus proches.",
      "Quelle est sa moitié ?",
      "Enlève-lui 1 000.",
    ],
    [
      "neuf cent quatre-vingt-dix-neuf mille neuf cent quatre-vingt-dix-neuf",
      "1 000 000 — six colonnes se vident d’un coup et une septième s’ouvre.",
      "999 milliers entiers, et il reste 999",
      "900 000 < 999 999 < 1 000 000",
      "499 999,5 — ce nombre n’a pas de moitié entière, parce qu’il est impair.",
      "998 999",
    ],
    "La moitié qui tombe sur une virgule peut désarçonner. La présenter comme une réponse complète, pas comme une complication : 499 999,5 est un nombre, il a sa place sur la droite graduée, entre 499 999 et 500 000. Montrer cette place règle la question.",
  ),

  f(
    "em-nombre-14",
    "Le nombre du jour",
    "Le nombre 1 000 000",
    [
      "Le million. Une séance entière sur un seul nombre rond, et six questions dont deux qui demandent une calculatrice — ce qui est permis quand on cherche un ordre de grandeur.",
      "Les questions 5 et 6 servent à donner une taille au million : un nombre qu’on ne peut pas se représenter reste un mot.",
      "Les réponses approchées sont les bonnes réponses ici. « À peu près » est le bon mot pour la moitié de cette fiche.",
    ],
    [
      "Écris 1 000 000 en lettres, et compte ses zéros.",
      "Combien de milliers contient-il ? Combien de centaines ?",
      "Quelle est sa moitié ? Son quart ?",
      "Si tu comptais un nombre par seconde sans jamais t’arrêter, combien de jours pour arriver à un million ?",
      "Un million de jours, ça fait combien d’années ?",
      "Écris un nombre qui vaut 1 000 000 + 1, et un qui vaut 1 000 000 − 1.",
    ],
    [
      "un million, et six zéros",
      "1 000 milliers, et 10 000 centaines",
      "500 000 et 250 000",
      "Une journée compte 86 400 secondes. 1 000 000 divisé par 86 400 donne un peu moins de 12 : il faudrait environ onze jours et demi, sans dormir.",
      "1 000 000 divisé par 365 donne environ 2 740 : à peu près vingt-sept siècles.",
      "1 000 001 et 999 999",
    ],
    "Les questions 4 et 5 sont là pour l’étonnement, pas pour le calcul. Regarder ce qu’il en fait : refaire l’opération autrement, chercher un autre million à mesurer, ou passer à la suite. Toutes ces réactions sont bonnes ; la première est celle de quelqu’un que le nombre a attrapé.",
  ),

  f(
    "em-nombre-15",
    "Le nombre du jour",
    "Le nombre 12,5",
    [
      "Premier nombre à virgule de la série. L’écrire en grand, avec la virgule bien visible, et le lire de deux façons dès le début.",
      "Le placer tout de suite sur une droite graduée entre 12 et 13, la droite reste affichée toute la séance : c’est elle qui répond à la moitié des questions.",
      "Les deux dernières questions ouvrent la multiplication et la division par 10 pour les décimaux. Le nombre glisse, la virgule reste.",
    ],
    [
      "Lis 12,5 de deux façons différentes.",
      "Décompose-le.",
      "Encadre-le entre les deux nombres entiers les plus proches.",
      "Quel est son double ?",
      "Quelle est sa moitié ?",
      "Multiplie-le par 10, puis divise-le par 10.",
    ],
    [
      "« douze virgule cinq », et « douze et cinq dixièmes »",
      "12 + 5/10, c’est-à-dire 10 + 2 + 0,5",
      "12 < 12,5 < 13",
      "25",
      "6,25",
      "125, puis 1,25",
    ],
    "La deuxième lecture — douze et cinq dixièmes — est celle qui donne du sens à la virgule. Si seule la première vient, la redonner sans la demander, plusieurs fois, sur plusieurs fiches. Elle finit par s’installer d’elle-même, et elle rend les trois fiches suivantes beaucoup plus simples.",
  ),

  f(
    "em-nombre-16",
    "Le nombre du jour",
    "Le nombre 40,75",
    [
      "Deux chiffres après la virgule cette fois. Le lire en entier : « quarante et soixante-quinze centièmes ».",
      "La question 3 demande deux encadrements, dont un entre deux dixièmes. Dessiner la droite graduée de 40,7 à 40,8 avec ses dix repères : le nombre s’y place et l’encadrement se voit.",
      "La dernière question tombe sur un entier, et c’est la surprise de la fiche.",
    ],
    [
      "Lis 40,75 de deux façons différentes.",
      "Décompose-le en unités, dixièmes et centièmes.",
      "Encadre-le entre deux entiers, puis entre deux dixièmes.",
      "Quel est son double ?",
      "Arrondis-le à l’unité la plus proche.",
      "Multiplie-le par 4.",
    ],
    [
      "« quarante virgule soixante-quinze », et « quarante et soixante-quinze centièmes »",
      "40 + 7/10 + 5/100",
      "40 < 40,75 < 41, et 40,7 < 40,75 < 40,8",
      "81,5",
      "41 — il est à 0,25 de 41 et à 0,75 de 40",
      "163, un nombre entier",
    ],
    "L’encadrement entre deux dixièmes est le plus exigeant de l’année : il demande d’admettre qu’entre 40,7 et 40,8 il y a de la place. Si cette place ne se voit pas, agrandir la droite graduée sur toute la largeur de la feuille et n’y mettre que ces deux repères. La place devient alors évidente.",
  ),

  f(
    "em-nombre-17",
    "Le nombre du jour",
    "Le nombre 108,06",
    [
      "Dernier nombre de l’année, et le plus piégeux : un zéro aux dixièmes, un 6 aux centièmes. Le faire écrire sous la dictée avant de l’afficher.",
      "Les questions 5 et 6 portent précisément sur ce zéro. Les garder pour la fin.",
      "Terminer la séance en relisant les dix-sept nombres de l’année, affichés côte à côte si les feuilles ont été gardées.",
    ],
    [
      "Lis 108,06 de deux façons différentes.",
      "Décompose-le.",
      "Encadre-le entre les deux nombres entiers les plus proches.",
      "Quel est son double ?",
      "Quel est son chiffre des centièmes ? Et son chiffre des dixièmes ?",
      "Multiplie-le par 100.",
    ],
    [
      "« cent huit virgule zéro six », et « cent huit et six centièmes »",
      "100 + 8 + 6/100 (il n’y a pas de dixièmes)",
      "108 < 108,06 < 109",
      "216,12",
      "Le chiffre des centièmes est 6 ; celui des dixièmes est 0.",
      "10 806 — la virgule disparaît parce que le nombre a glissé de deux rangs.",
    ],
    "Le dernier nombre de l’année ressemble beaucoup au deuxième, 1 205 : un rang vide au milieu, qui ne se dit pas mais s’écrit. Sortir les deux feuilles et les poser côte à côte. Ce qui se voit alors, c’est neuf mois de travail sur une seule idée, et il n’y a rien à ajouter.",
  ),
];
