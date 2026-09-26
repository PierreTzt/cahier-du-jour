/**
 * Reprendre la leçon de français — onze séances de l’année, et trois de réserve.
 *
 * Le rituel dit : « Reprendre une leçon de français déjà vue, sur le cahier,
 * avec des phrases neuves. » Il tombe onze fois, du 6 novembre au 18 juin, et
 * il a l’air de ne rien demander. Il en demande deux choses, et elles
 * manquaient toutes les deux.
 *
 * D’abord, refaire à l’identique des exercices déjà corrigés n’apprend rien :
 * l’enfant se souvient de la réponse, pas du chemin qui y mène. Ensuite, la
 * fiche doit dire **quelle** leçon — sinon l’adulte la cherche, un mardi matin,
 * dans un manuel de vingt-neuf leçons de français.
 *
 * Chaque fiche nomme donc la leçon reprise et ce qu’elle enseigne, puis donne
 * **des exercices neufs sur la même notion** : même difficulté, autres phrases,
 * autres mots, tous écrits ici. C’est ce qui fait la valeur de la séance.
 * Apprendre, c’est répéter — mais répéter sur du neuf.
 *
 * Ce qu’une fiche donne, et pourquoi : voir `lib/fiches/types.ts`. En deux
 * mots — le matériel exact, le corrigé quand il y en a un, et ce qu’on
 * regarde. Un adulte qui l’ouvre ne doit plus rien avoir à chercher.
 *
 * **Réservé aux adultes** : ces fiches portent les corrigés.
 *
 * ## Quelle leçon, et comment on le sait
 *
 * La trame est déterministe : `joursDuRituel()` donne les onze dates, et
 * `joursDeLaLecon()` la première fois où chaque leçon est donnée. Chaque fiche
 * reprend une leçon **déjà donnée à sa date** — sa première fois tombe
 * strictement avant. Ce n’est pas toujours la dernière leçon de français du
 * calendrier, et la fiche ne le prétend pas : la consigne dit « une leçon
 * déjà vue ». Calculé sur la trame du 17 septembre 2026 :
 *
 *   1. 6 novembre 2026 — « La nature des mots » (f-p1-natures, donnée le 18 septembre)
 *   2. 13 novembre 2026 — « Le présent de l’indicatif » (f-p1-present, le 28 septembre)
 *   3. 19 novembre 2026 — « Le futur » (f-p2-futur, le 5 novembre)
 *   4. 22 janvier 2027 — « Le futur », deuxième rencontre (reprise à l’écran le 1er décembre)
 *   5. 9 février 2027 — « Les mots qui se prononcent pareil » (f-p2-homophones, le 17 novembre)
 *   6. 9 mars 2027 — « Reconnaître un poème, une pièce, un récit » (f-p3-genres, le 26 janvier)
 *   7. 26 mars 2027 — « L’adjectif épithète » (f-p3-epithete, le 7 janvier)
 *   8. 4 mai 2027 — « Les verbes qui changent de radical » (f-p4-radical, le 8 mars)
 *   9. 25 mai 2027 — « Transformer une phrase sans casser les accords » (f-p4-chaine, le 11 mars)
 *  10. 7 juin 2027 — « Le goût des mots : la poésie » (f-p4-poesie, le 22 mars)
 *  11. 18 juin 2027 — « Le merveilleux et l’étrange » (f-p5-merveilleux, le 3 mai)
 *
 * Si la trame change encore, ces dates bougent : il faut les recalculer, et
 * vérifier que chaque leçon reste antérieure à sa fiche.
 *
 * **Le futur revient deux fois, et ce n’est pas une erreur.** La trame donne
 * « Le futur » le 5 novembre, puis le reprend le 1er décembre ; la fiche 3
 * tombe deux semaines après la première, la fiche 4 après la seconde. Les deux
 * fiches portent donc la même notion — mais pas les mêmes exercices : la 3
 * travaille la règle, les verbes réguliers et être, avoir, aller, faire ; la 4
 * les quatre autres irréguliers du cours — voir, venir, pouvoir, vouloir, avec
 * faire revu —, les verbes en -re et la frontière avec le conditionnel. C’est
 * exactement ce que la seconde rencontre d’une notion doit être.
 *
 * ## Les trois fiches de réserve
 *
 * Les fiches 12, 13 et 14 ne tombent pas dans l’année. Elles portent
 * « L’orthographe des mots » (donnée le 18 mai), « Les compléments : objet ou
 * circonstanciel » (le 12 novembre) et « L’accord du sujet et du verbe » (le
 * 12 janvier). Si l’adulte préfère reprendre l’une de ces leçons un jour de
 * rituel — après sa date, jamais avant —, elles sont écrites.
 *
 * ## Ce qui se répète d’une fiche à l’autre, exprès
 *
 * La méthode ne change pas : on ouvre la leçon, on relit ensemble l’exemple du
 * cours, puis on prend les items de la fiche — **à la place** des exercices de
 * l’écran, qu’il a déjà vus corrigés, et parce que l’ensemble ne tiendrait pas
 * en vingt-cinq minutes. Et chaque fiche prévoit le jour où ça coince : si l’enfant avait buté
 * sur cette leçon à l’écran, on reprend d’abord l’exemple du cours ensemble, et
 * on ne fait que la moitié des items. La moitié faite entièrement vaut mieux
 * que le tout survolé, et la fiche se reprend telle quelle une autre fois.
 *
 * Les phrases d’exercice sont écrites ici, aucune n’est empruntée à une œuvre.
 *
 * Rien de tout ceci n’a été relu par un enseignant. Ça doit l’être.
 */

import { f, type Fiche } from "./types";

export const repriseFrancais: Fiche[] = [
  /* ================================================================== */
  /* LEÇONS DE LA PÉRIODE 1 — reprises le 6 et le 13 novembre            */
  /* ================================================================== */

  f(
    "rf-reprise-01",
    "Reprendre la leçon de français",
    "Reprise 1 · la nature des mots, autres phrases",
    [
      "On ouvre d’abord la leçon à l’écran et on relit à voix haute l’exemple du cours. Puis l’écran s’éteint et on prend les dix items ci-dessous, sur le cahier, à la place des exercices de l’écran, une ligne par item.",
      "Pour chaque réponse, exiger le test qui la justifie, pas seulement l’étiquette : « on peut mettre un devant, donc c’est un nom », « ça refuse le pluriel, donc c’est un adverbe ». C’est le test qui se garde ; l’étiquette s’oublie.",
      "Le jour où ça ne va pas : s’il avait buté sur cette leçon à l’écran, on ne commence pas par les items. On reprend ensemble l’exemple du cours — « Ce vieux chien dort souvent près du feu » — en refaisant les trois étapes à voix haute, et on ne fait ensuite que la moitié des items. Cinq faits entièrement valent mieux que dix survolés.",
    ],
    [
      "**La leçon reprise** : « La nature des mots » (période 1). Elle apprend à dire ce qu’un mot **est** — nom, déterminant, adjectif, verbe, pronom, adverbe, conjonction de coordination — et à ne pas confondre cette nature avec la fonction, qui change d’une phrase à l’autre. Dans une phrase, un mot a une nature ; certains mots en changent selon leur emploi (le chien / je le vois).",
      "1. Dans « Votre chien attend devant la porte », quel mot est un déterminant possessif ?",
      "2. Dans « Range ces photos dans la boîte », quel mot est un déterminant démonstratif ?",
      "3. Dans « Le train traverse la plaine immense », quel mot est un adjectif ? Dis le test.",
      "4. Dans « Tu prends le thé ou le chocolat ? », quelle est la nature de « ou » ?",
      "5. Parmi « lire », « lecture » et « lisible », lequel se conjugue, et lequel est un nom ? Dis comment tu le sais.",
      "6. Remplace « un » par un article défini dans « Un chat dort sur le mur ». Qu’est-ce que ça change pour celui qui lit ?",
      "7. Dans « Sa lampe éclaire la table » et « Il allume sa lampe », qu’est-ce qui reste pareil pour le mot « lampe », et qu’est-ce qui change ?",
      "8. Dans « Nous la regardons », quelle est la nature de « la » ? Et dans « la fenêtre » ?",
      "9. Réécris « Mes cousines jouent dehors » en remplaçant le groupe sujet par un seul mot. Quelle est la nature de ce mot ?",
      "10. Écris « La porte grince encore » au pluriel. Quel mot n’a pas bougé, et pourquoi ?",
    ],
    [
      "",
      "1. **votre**. Un **déterminant possessif** : il accompagne le nom « chien » et dit à qui il appartient. Les possessifs du cours : mon, ton, son, notre, votre, leur. « Déterminant » tout court compte comme juste : c’est la précision « possessif » qu’on ajoute avec lui si elle ne vient pas.",
      "2. **ces**. Un **déterminant démonstratif** : il accompagne « photos » et les montre. Les démonstratifs : ce, cet, cette, ces. « Déterminant » seul compte comme juste.",
      "3. **immense**. Il dit comment est la plaine, et on peut l’enlever : « le train traverse la plaine » tient encore. « Adjectif qualificatif » compte aussi ; le test compte autant que le mot.",
      "4. Une **conjonction de coordination**. « Ou » relie les deux choses entre lesquelles on choisit. La liste : et, ou, mais, donc, or, ni, car. « Conjonction » seul compte comme juste.",
      "5. **lire** se conjugue — je lis, nous lisons — : c’est le verbe. **lecture** est le nom : on peut dire « une lecture ». « Lisible » dit comment est une chose. Le test attendu pour le nom est celui du « un/une » placé devant.",
      "6. « **Le** chat dort sur le mur. » Avec « le », article défini, on parle d’un chat précis, celui qu’on connaît ; avec « un », article indéfini, c’était n’importe lequel. Répondre « on sait de quel chat on parle » compte comme juste.",
      "7. **La nature reste la même** : « lampe » est un nom dans les deux phrases. **La fonction change** : sujet dans la première, complément dans la seconde. Répondre « il est sujet, puis complément » compte comme juste : c’est la même réponse dite autrement.",
      "8. Dans « Nous la regardons », « la » est un **pronom** : il remplace un nom dont on a parlé — la lune, la photo — et il est devant le verbe. Dans « la fenêtre », c’est un **déterminant** : il est devant un nom. Le même mot, deux natures : c’est ce que dit le cours avec « le chien » et « je le vois ».",
      "9. « **Elles** jouent dehors. » « Elles » est un **pronom**, un pronom personnel sujet : il remplace « mes cousines ». S’il écrit « ils », le raisonnement est là ; on regarde ensemble si « cousines » est au masculin ou au féminin, et il choisit de nouveau.",
      "10. « Les portes grincent encore. » Le mot qui n’a pas bougé est **encore** : c’est un adverbe, et un adverbe est invariable. « Il ne change pas parce que c’est un adverbe » compte comme juste.",
    ],
    "Ce qu’on regarde : est-ce qu’il donne l’étiquette seule, ou est-ce qu’il dit le test qui l’a menée là. Les items 5 et 10 sont les plus parlants — l’un demande un test de nom, l’autre un test d’adverbe. S’il répond juste sans savoir pourquoi, c’est qu’il reconnaît de mémoire, et la mémoire lâchera sur un mot inconnu : on reprend la fois suivante avec trois mots inventés — « un blurp », « il blurpe », « très blurpement » — où seule la manipulation peut trancher.",
  ),

  f(
    "rf-reprise-02",
    "Reprendre la leçon de français",
    "Reprise 2 · le présent de l’indicatif, autres verbes",
    [
      "On relit ensemble l’exemple du cours, puis on prend les onze items, sur le cahier, à la place des exercices de l’écran, qu’il a déjà vus corrigés. Ils s’écrivent en entier, pronom compris : « nous avons », pas « avons ». Écrire le pronom, c’est écrire ce qui commande la terminaison.",
      "Sur les items 9 et 10, la réponse attendue n’est pas le groupe tout seul mais le test qui l’a donné : on met le verbe à « nous » et on écoute s’il fait -issons. Le dire à voix haute avant d’écrire.",
      "Le jour où ça ne va pas : s’il avait buté sur cette leçon à l’écran, on refait d’abord ensemble l’exemple du cours — « choisir » à « nous », et le groupe qui s’en déduit — puis on ne garde que la moitié des items, les six premiers. La fiche se reprend entière une autre fois.",
    ],
    [
      "**La leçon reprise** : « Le présent de l’indicatif » (période 1). Elle apprend à couper un verbe en radical et terminaison, à classer en trois groupes par le test de « nous », et à connaître au présent être, avoir et les huit irréguliers du programme : aller, faire, dire, venir, pouvoir, voir, vouloir, prendre.",
      "1. Conjugue « être » au présent avec « vous ».",
      "2. Conjugue « avoir » au présent avec « nous ».",
      "3. Conjugue « aller » au présent avec « ils ».",
      "4. Conjugue « prendre » au présent avec « nous ».",
      "5. Conjugue « dire » au présent avec « vous ».",
      "6. Conjugue « pouvoir » au présent avec « je ».",
      "7. Complète : « Les voisins … leur portail à clé. » (fermer)",
      "8. Complète : « Mon cousin et moi … le train de sept heures. » (prendre)",
      "9. À quel groupe appartient « grandir » ? Dis le test.",
      "10. À quel groupe appartient « venir » ? Dis le test.",
      "11. Conjugue « remplir » au présent avec « ils ».",
    ],
    [
      "",
      "1. **vous êtes**. C’est l’un des trois seuls verbes qui font « vous … -tes » : vous êtes, vous faites, vous dites.",
      "2. **nous avons**. Avoir au présent : j’ai, tu as, il a, nous avons, vous avez, ils ont.",
      "3. **ils vont**. Aller est du 3e groupe malgré son -er, et c’est le seul verbe en -er dans ce cas.",
      "4. **nous prenons**, avec un seul n. Le doublement n’arrive qu’à « ils prennent ».",
      "5. **vous dites**. « Vous disez » est l’erreur attendue, et elle est raisonnée : c’est la forme régulière. Le dire ainsi plutôt que de la corriger sèchement.",
      "6. **je peux**, avec un x. Pouvoir et vouloir font -x, -x, -t au singulier : je peux, tu peux, il peut.",
      "7. **ferment**. Le sujet est au pluriel. Le -nt ne s’entend pas : c’est le sujet qui décide, jamais l’oreille.",
      "8. **prenons**. « Mon cousin et moi » veut dire « nous ». Vérifier qu’il remplace bien le groupe par « nous » avant de conjuguer.",
      "9. **2e groupe**. Test : « nous grandissons » fait bien -issons.",
      "10. **3e groupe**. Test : « nous venons », et non « nous venissons ». C’est le piège des verbes en -ir, et le test est la seule façon fiable de trancher.",
      "11. **ils remplissent**. 2e groupe : nous remplissons, vous remplissez, ils remplissent.",
    ],
    "Deux choses à observer. D’abord l’item 7 : écrit-il le -nt qu’il n’entend pas, ou écrit-il ce qu’il entend ? C’est le partage entre conjuguer et transcrire, et il se joue là. Ensuite les items 9 et 10 : s’il donne le groupe sans passer par « nous », il devine — et il devinera juste une fois sur deux. Ce qu’on reprend la fois suivante, ce n’est pas la liste des groupes, c’est le réflexe de mettre le verbe à « nous » avant de répondre.",
  ),

  /* ================================================================== */
  /* LEÇONS DE LA PÉRIODE 2 — le 19 novembre, le 22 janvier, le 9 février */
  /* ================================================================== */

  f(
    "rf-reprise-03",
    "Reprendre la leçon de français",
    "Reprise 3 · le futur, autres verbes",
    [
      "On relit ensemble l’exemple du cours, puis on prend les dix items, sur le cahier, à la place des exercices de l’écran, qu’il a déjà vus corrigés. Avant d’écrire chaque forme, lui faire entourer le r au crayon : c’est la marque de temps, et elle est dans toutes les formes du futur sans exception.",
      "Les items 1 à 8 s’écrivent avec leur pronom. Les items 9 et 10 se répondent à l’oral, et sur le 9 la justification doit venir, et dans cet ordre : d’abord le sens — « demain, ça va arriver, donc c’est le futur » —, puis le s, pour vérifier.",
      "Le jour où ça ne va pas : s’il avait buté sur cette leçon à l’écran, on refait d’abord ensemble l’exemple du cours — « partir » à « nous », puis « aller » à « je » — en montrant le r dans les deux. Ensuite, cinq items suffisent, et on s’arrête là sans rien en dire.",
    ],
    [
      "**La leçon reprise** : « Le futur » (période 2). Elle apprend que le -r- est la marque de temps du futur et qu’il vient de l’infinitif, que les marques de personne qui le suivent sont -ai, -as, -a, -ons, -ez, -ont, et qu’un -ais final n’est pas du futur mais du conditionnel.",
      "1. Mets « je plante » au futur.",
      "2. Mets « nous finissons » au futur.",
      "3. Conjugue « être » au futur avec « vous ».",
      "4. Conjugue « avoir » au futur avec « je ».",
      "5. Conjugue « aller » au futur avec « nous ».",
      "6. Conjugue « faire » au futur avec « ils ».",
      "7. Conjugue « dire » au futur avec « tu ».",
      "8. Conjugue « prendre » au futur avec « elle ».",
      "9. « Demain, je rangerais ma chambre. » Est-ce du futur ? Que faut-il écrire ?",
      "10. Au futur, qu’est-ce qui vient après le r avec « nous » ? avec « vous » ? avec « ils » ?",
    ],
    [
      "",
      "1. **je planterai**. Infinitif planter + ai. Un s à la fin en ferait du conditionnel.",
      "2. **nous finirons**. On repart de l’infinitif finir, pas de la forme du présent : « nous finissirons » est l’erreur qui vient quand on oublie ce détour.",
      "3. **vous serez**. Le radical de futur d’être est ser-, et le r y est bien.",
      "4. **j’aurai**. Radical aur-, avec l’apostrophe : « je aurai » ne s’écrit pas.",
      "5. **nous irons**. Radical ir-. C’est le plus court de tous, et le plus surprenant : il ne reste rien d’« aller » sauf le sens.",
      "6. **ils feront**. Radical fer-. Ne pas confondre avec « ils seront », qui est être.",
      "7. **tu diras**. Dire est régulier au futur : dire − e, puis -as.",
      "8. **elle prendra**. Verbe en -re : on enlève le e de l’infinitif, puis on ajoute la terminaison. Prendre → prendr- → elle prendra.",
      "9. **Non** : tel qu’il est écrit, « rangerais » est du conditionnel. C’est le sens qui décide, comme le dit le cours : « demain » annonce une chose qui va arriver, donc il faut le futur — « Demain, je **rangerai** ma chambre. » Le s ne vient qu’ensuite, pour vérifier : le futur s’écrit -ai, sans s, donc « rangerais » n’est pas la forme qu’il faut ici. S’il commence par « il y a un s », c’est juste aussi ; on lui demande alors ce que dit « demain », pour que le sens passe en premier.",
      "10. **-ons**, **-ez**, **-ont** : nous chanterons, vous chanterez, ils chanteront. Ce sont, à peu de chose près, les formes du verbe avoir au présent — nous avons, vous avez, ils ont. Répondre avec un verbe entier (« nous chanterons, vous chanterez, ils chanteront ») compte comme juste : les terminaisons y sont.",
    ],
    "Ce qu’on observe : sur les items 1 et 2, repasse-t-il par l’infinitif avant d’écrire, ou part-il de la forme du présent qu’il a sous les yeux ? L’item 2 le dit tout de suite. Si « nous finissirons » apparaît, ce n’est pas une inattention, c’est le signe que le chemin « infinitif d’abord » n’est pas encore pris — et c’est lui qu’on refait la fois suivante, sur trois verbes, avec l’infinitif écrit en gros à gauche de la feuille. Sur l’item 8, on regarde autre chose : enlève-t-il le e de « prendre » avant d’ajouter la terminaison ?",
  ),

  f(
    "rf-reprise-04",
    "Reprendre la leçon de français",
    "Reprise 4 · le futur, deuxième rencontre",
    [
      "C’est la même leçon qu’en novembre, revue à l’écran le 1er décembre : on ne refait donc pas le même travail. On relit ensemble l’exemple du cours, puis on prend, à la place des exercices de l’écran, les onze items — qui portent cette fois sur les irréguliers, les verbes en -re et la frontière avec le conditionnel.",
      "L’item 11 n’est pas un exercice de conjugaison mais un exercice de découpage : il se fait au crayon, en traçant deux traits verticaux dans le mot. C’est le meilleur des onze, et celui qu’on garde si on n’en garde qu’un.",
      "Le jour où ça ne va pas : s’il avait buté sur cette leçon à l’écran, on reprend d’abord ensemble l’exemple du cours — « nous partirons » et « j’irai », avec le r montré du doigt dans les deux — puis on ne fait que la moitié des items. Revoir une notion une seconde fois n’oblige pas à aller deux fois plus loin.",
    ],
    [
      "**La leçon reprise** : « Le futur » (période 2), revue à l’écran le 1er décembre. Deuxième rencontre, donc : le -r- est posé, et on travaille ce qui reste — les quatre irréguliers du cours que la reprise de novembre n’avait pas pris, voir, venir, pouvoir et vouloir, avec faire revu une fois ; les verbes en -re qui perdent leur e ; et le s du conditionnel.",
      "1. Conjugue « voir » au futur avec « vous ».",
      "2. Conjugue « venir » au futur avec « ils ».",
      "3. Conjugue « pouvoir » au futur avec « tu ».",
      "4. Conjugue « vouloir » au futur avec « nous ».",
      "5. Conjugue « faire » au futur avec « nous ».",
      "6. Conjugue « écrire » au futur avec « vous ».",
      "7. Conjugue « attendre » au futur avec « elle ».",
      "8. « Si j’avais le temps, je viendrais avec vous. » Futur ou conditionnel ?",
      "9. Parmi « je serai », « je serais » et « je suis », laquelle est au futur ?",
      "10. Complète au futur : « Les invités … à midi. » (arriver)",
      "11. Coupe « nous prendrons » en trois morceaux : le radical, la marque de temps, la marque de personne.",
    ],
    [
      "",
      "1. **vous verrez**, avec deux r. Le radical de futur de voir est verr- : on n’entend qu’un r, il faut en écrire deux, comme pour pourr- à l’item 3.",
      "2. **ils viendront**. Radical de futur viendr- : un d s’intercale avant le r, et il s’entend.",
      "3. **tu pourras**. Radical pourr-, avec deux r là aussi.",
      "4. **nous voudrons**. Radical voudr-, avec un d comme viendr-.",
      "5. **nous ferons**. Radical fer-. À côté de « nous serons », qui est être, la différence tient à une lettre.",
      "6. **vous écrirez**. Verbe en -re : écrire − e donne écrir-, puis -ez.",
      "7. **elle attendra**. Même geste : attendre − e donne attendr-, puis -a.",
      "8. **Conditionnel**. Le « si » et le -ais le disent tous les deux. Ce n’est pas sûr, donc ce n’est pas du futur.",
      "9. **je serai**. « Je serais » est du conditionnel — un s de plus — et « je suis » est du présent.",
      "10. **arriveront**. La marque -ont ressemble au verbe avoir au présent, et ce n’est pas un hasard : c’est de là qu’elle vient.",
      "11. **prend- / -r- / -ons** : radical, marque de temps, marque de personne. Accepter aussi une coupe en deux, « prendr- / -ons », à condition qu’il montre où est le r et dise ce qu’il fait là.",
    ],
    "Ce qu’on regarde : les items 6 et 7, les verbes en -re. Enlève-t-il le e de l’infinitif tout seul, ou écrit-il « vous écrirerez » ? Et l’item 11, qui dit s’il voit le mot comme un bloc à retenir ou comme trois morceaux assemblés. C’est sa deuxième rencontre avec cette leçon ; si le découpage vient, toute la conjugaison de la fin d’année sera plus légère, et c’est ce point-là qu’on reprend plutôt que la liste des irréguliers.",
  ),

  f(
    "rf-reprise-05",
    "Reprendre la leçon de français",
    "Reprise 5 · a/à, est/et, son/sont, ont/on, autres phrases",
    [
      "On relit ensemble l’exemple du cours, puis on prend les douze items, sur le cahier, à la place des exercices de l’écran, qu’il a déjà vus corrigés. Chaque item s’écrit sur deux lignes : la phrase complétée, et en dessous le test employé — « avait », « était », « étaient », « avaient », « il », « mon » ou « ton ». Le test écrit est la moitié de l’exercice.",
      "Ne pas dicter les phrases : il les copie. Ces homophones se jouent à l’œil autant qu’à l’oreille, et une phrase dictée lui retire justement l’indice qu’on veut lui apprendre à chercher.",
      "Le jour où ça ne va pas : s’il avait buté sur cette leçon à l’écran, on refait d’abord ensemble l’exemple du cours — « Mon frère a huit ans et il va à l’école à pied », test par test — puis on ne garde que six items. Et si c’est l’écrit qui pèse, il dit le test à voix haute et l’adulte écrit sous sa dictée.",
    ],
    [
      "**La leçon reprise** : « Les mots qui se prononcent pareil » (période 2). Quatre couples — a/à, est/et, son/sont, ont/on — et un seul principe : on remplace, et on écoute si la phrase tient. a → avait. est → était. sont → étaient. ont → avaient. on → il. son → mon, ton.",
      "1. Complète : « Ma tante … un potager derrière sa maison. »",
      "2. Complète : « Nous allons … la médiathèque le mercredi. »",
      "3. Complète : « Le chemin … boueux depuis l’orage. »",
      "4. Complète : « Le sel … le poivre sont sur l’étagère. »",
      "5. Complète : « Les volets … restés ouverts toute la nuit. »",
      "6. Complète : « Il a perdu … écharpe dans le car. »",
      "7. Complète : « Les voisins … repeint leur portail. »",
      "8. Complète : « … entend le train depuis la cuisine. »",
      "9. Complète : « Il … du mal … ouvrir ce bocal. »",
      "10. Complète : « … croit qu’ils … oublié la clé. »",
      "11. Complète : « Sa sœur … coiffeuse … elle habite Douai. »",
      "12. Complète : « … frère et lui … arrivés en retard. »",
    ],
    [
      "",
      "1. **a**. Test : « ma tante avait un potager » tient debout, donc c’est le verbe avoir, sans accent.",
      "2. **à**. Test : « nous allons avait la médiathèque » ne veut rien dire, donc c’est la préposition, avec accent.",
      "3. **est**. Test : « le chemin était boueux » tient, donc c’est le verbe être.",
      "4. **et**. Test : « le sel était le poivre » ne veut rien dire ; ici le mot relie deux choses.",
      "5. **sont**. Test : « les volets étaient restés ouverts » tient. C’est l’auxiliaire être d’un passé composé, mais il n’a pas besoin de le savoir pour répondre : le test suffit.",
      "6. **son**. Test : on peut dire « mon écharpe », « ton écharpe ». Attention, « écharpe » est féminin et prend quand même « son » — devant une voyelle, on dit toujours son, jamais sa. Si la question vient, c’est une bonne question : y répondre et passer.",
      "7. **ont**. Test : « les voisins avaient repeint » tient.",
      "8. **On**. Test : « il entend le train » tient. Majuscule en début de phrase.",
      "9. **a**, puis **à**. « Il avait du mal » tient ; « avait ouvrir » ne tient pas. Deux tests dans une seule phrase, et c’est tout l’intérêt de l’item.",
      "10. **On**, puis **ont**. « Il croit » tient pour le premier ; « ils avaient oublié » tient pour le second.",
      "11. **est**, puis **et**. « Sa sœur était coiffeuse » tient ; « était elle habite Douai » ne tient pas.",
      "12. **Son**, puis **sont**. « Mon frère et lui » tient pour le premier ; « ils étaient arrivés en retard » tient pour le second.",
    ],
    "Les items 9 à 12 sont ceux qui renseignent : deux homophones dans la même phrase obligent à faire le test deux fois, et c’est là qu’on voit s’il teste ou s’il reconnaît. Ce qu’on observe précisément : écrit-il le test sous la phrase, ou répond-il d’abord et écrit-il le test après coup ? Si le test arrive après, on reprend la fois suivante à l’envers — le test d’abord, la phrase complétée ensuite.",
  ),

  /* ================================================================== */
  /* LEÇONS DE LA PÉRIODE 3 — reprises le 9 et le 26 mars                */
  /* ================================================================== */

  f(
    "rf-reprise-06",
    "Reprendre la leçon de français",
    "Reprise 6 · poème, théâtre ou récit, autres textes",
    [
      "On relit ensemble l’exemple du cours, puis on prend les onze items, sur le cahier, à la place des exercices de l’écran, qu’il a déjà vus corrigés. Les items 1 à 3 décrivent une page sans en donner le contenu ; les items 9 à 11 se regardent avant de se lire : lui demander de répondre d’abord à la forme de l’extrait recopié, puis seulement de le lire pour vérifier. C’est tout le propos de la leçon.",
      "Les extraits des items 9, 10 et 11 se recopient d’abord au tableau ou sur une feuille à part, avec leur mise en page — les vers courts pour l’un, le nom du personnage détaché pour l’autre. Sans la mise en page, l’exercice n’existe plus.",
      "Le jour où ça ne va pas : s’il avait buté sur cette leçon à l’écran, on reprend d’abord ensemble l’exemple du cours — les lignes courtes groupées par quatre — et on nomme les deux mots, vers et strophe, avant d’aller plus loin. Ensuite cinq items, pas onze, et ce sera très bien ainsi.",
    ],
    [
      "**La leçon reprise** : « Reconnaître un poème, une pièce, un récit » (période 3). Elle apprend que la mise en page renseigne avant la lecture : des vers groupés en strophes pour le poème, un nom de personnage devant chaque réplique pour le théâtre, des paragraphes pleine largeur et un narrateur pour le récit.",
      "1. « Le texte occupe toute la largeur de la page, en paragraphes, et quelqu’un raconte ce qui est arrivé un soir d’hiver. » De quelle sorte de texte s’agit-il ?",
      "2. « Les lignes s’arrêtent au milieu de la page et sont groupées par trois, avec un blanc entre chaque groupe. » De quelle sorte de texte s’agit-il ?",
      "3. « Devant chaque prise de parole, un nom est écrit, suivi de deux-points. » De quelle sorte de texte s’agit-il ?",
      "4. Un poème compte trois strophes de quatre vers chacune. Combien de vers en tout ?",
      "5. Un poème de dix vers est coupé par un seul blanc, en deux groupes égaux. Combien de strophes, et combien de vers dans chacune ?",
      "6. Quand des acteurs jouent une pièce, quelles parties du texte ne disent-ils pas à voix haute ?",
      "7. Dans un récit, à quoi servent les tirets ?",
      "8. Un texte est fait de vers groupés en strophes, mais aucun vers ne rime avec un autre. Est-ce quand même un poème ?",
      "9. « Le vent a tourné sur la cour, / la porte a battu deux fois, / et la lampe, près du four, / n’éclairait plus que le bois. » Quel genre, combien de vers, combien de strophes ?",
      "10. « MARGOT : Tu as pris la clé ? — PIERRE, cherchant dans sa poche : Je croyais l’avoir laissée sur la table. » Quel genre ? Et comment appelle-t-on « cherchant dans sa poche » ?",
      "11. « Il faisait presque nuit quand elle poussa le portail. Personne n’avait tondu depuis des mois. » Quel genre ?",
    ],
    [
      "",
      "1. Un **récit**. Pleine largeur, paragraphes, un narrateur qui raconte : les trois indices vont ensemble.",
      "2. Un **poème**. Les lignes courtes sont des vers, les groupes séparés par un blanc sont des strophes.",
      "3. Du **théâtre**. Le nom du personnage devant la réplique est le signe le plus sûr, et il ne se prononce pas.",
      "4. **Douze vers** : trois strophes de quatre vers, trois fois quatre. S’il répond « trois », il a compté les strophes — lui faire dire lequel des deux mots désigne la ligne, et recompter avec lui.",
      "5. **Deux strophes**, de **cinq vers** chacune. Un blanc sépare deux strophes : un seul blanc, donc deux groupes. « Deux paragraphes de cinq lignes » compte comme juste si les mots ne viennent pas, et c’est l’occasion de les redonner.",
      "6. Le **nom du personnage** placé devant chaque réplique, et les **didascalies**, les indications de jeu. Ni l’un ni l’autre ne se dit : le nom indique qui parle, la didascalie se joue. Une seule des deux parties est déjà une réponse juste ; les deux ensemble font la réponse complète.",
      "7. À marquer le **dialogue** : un tiret annonce que quelqu’un parle, et un nouveau tiret que c’est l’autre qui répond. Répondre « à montrer qui parle » compte comme juste.",
      "8. **Oui**. Beaucoup de poèmes riment, mais pas tous. Ce qui fait le poème, c’est d’abord la forme : des vers, groupés en strophes.",
      "9. Un **poème** : **quatre vers**, **une seule strophe**. Les rimes se répondent en croix — cour avec four, fois avec bois. S’il repère les rimes sans qu’on les demande, le lui dire ; ce n’était pas la question, mais c’est la bonne observation.",
      "10. Du **théâtre**. « Cherchant dans sa poche » est une **didascalie** : elle dit ce que fait le personnage, et elle ne se prononce pas.",
      "11. Un **récit**. Un narrateur, du passé, une scène qui commence. Pas de vers, pas de nom de personnage détaché.",
    ],
    "Ce qu’on regarde : répond-il avant d’avoir lu, ou a-t-il besoin de lire tout l’extrait pour trancher ? La leçon dit que la page renseigne à elle seule, et c’est une idée qui gagne à être vérifiée en vrai. L’item 9 est celui à suivre : s’il compte quatre strophes au lieu d’une, c’est que « strophe » et « vers » se sont échangés dans sa tête — on reprend la fois suivante en découpant un poème aux ciseaux, une bande par vers, et en les regroupant à la main.",
  ),

  f(
    "rf-reprise-07",
    "Reprendre la leçon de français",
    "Reprise 7 · l’adjectif épithète, autres groupes du nom",
    [
      "On relit ensemble l’exemple du cours, puis on prend les dix items, sur le cahier, à la place des exercices de l’écran, qu’il a déjà vus corrigés. Méthode constante, et elle se dit à voix haute à chaque fois : on trouve d’abord le nom noyau, on le repasse en couleur, puis on regarde ce qui le qualifie juste à côté. Le rond reste au verbe, comme toute l’année.",
      "Le test de suppression s’écrit : il recopie le groupe sans les adjectifs et relit. Si ça tient, c’étaient bien des épithètes. Ce geste-là vaut mieux que n’importe quelle définition apprise.",
      "Le jour où ça ne va pas : s’il avait buté sur cette leçon à l’écran, on reprend d’abord ensemble l’exemple du cours — « un vieux livre poussiéreux de la bibliothèque », noyau puis épithètes puis complément du nom — et on ne fait ensuite que cinq items. Le piège de cette leçon est un seul : le complément du nom qu’on prend pour un adjectif. Cinq items suffisent à le travailler.",
    ],
    [
      "**La leçon reprise** : « L’adjectif épithète » (période 3). Elle apprend qu’un adjectif épithète appartient au groupe du nom, se place juste avant ou juste après le nom noyau, s’accorde avec lui, et peut s’enlever sans casser la phrase. Le complément du nom, lui aussi, appartient au groupe du nom et s’enlève souvent ; mais ce n’est pas un adjectif, et il ne s’accorde pas.",
      "1. Dans « un long couloir sombre », quel est le nom noyau ?",
      "2. Dans le même groupe, combien y a-t-il d’épithètes ? Lesquelles ?",
      "3. Dans « une vieille valise en cuir », quelle est l’épithète ? Et « en cuir », qu’est-ce que c’est ?",
      "4. Dans « le petit chemin de terre », quel est le noyau, et que fait « de terre » ?",
      "5. Recopie sans les épithètes : « Les grandes fenêtres poussiéreuses laissaient passer peu de jour. »",
      "6. Avec quoi « poussiéreuses » s’accorde-t-il ?",
      "7. Dans « une grosse pierre plate », combien y a-t-il d’épithètes ?",
      "8. Une épithète peut-elle se placer devant le nom ? Donne un exemple à toi.",
      "9. Dans « la table de la cuisine », y a-t-il une épithète ?",
      "10. Mets « une allée étroite » au pluriel. Pourquoi « étroite » change-t-il ?",
    ],
    [
      "",
      "1. **couloir**. C’est le nom principal du groupe ; « long » et « sombre » le qualifient.",
      "2. **Deux** : « long » devant, « sombre » derrière. Les deux s’accordent avec couloir, masculin singulier.",
      "3. L’épithète est **vieille**. « En cuir » n’est pas un adjectif : c’est un **complément du nom**, introduit par la préposition « en ». Il dit de quoi la valise est faite, mais il ne s’accorde pas avec elle.",
      "4. Le noyau est **chemin**. « De terre » est un **complément du nom** ; seul « petit » est épithète.",
      "5. « **Les fenêtres laissaient passer peu de jour.** » La phrase tient debout, donc « grandes » et « poussiéreuses » étaient bien des épithètes.",
      "6. Avec le **nom noyau**, c’est-à-dire avec « fenêtres » — féminin pluriel, d’où le -es. Répondre « avec fenêtres » compte comme juste.",
      "7. **Deux** : « grosse » devant, « plate » derrière, et toutes deux qualifient « pierre », avec laquelle elles s’accordent au féminin singulier.",
      "8. **Oui**. Son exemple compte s’il contient un adjectif collé devant un nom : « un grand jardin », « une longue route », « de vieux carreaux ». S’il propose « très grand jardin », lui faire remarquer que « très » n’est pas l’épithète — c’est un adverbe, et il renforce l’adjectif.",
      "9. **Non**, aucune. « De la cuisine » est un complément du nom. Un groupe du nom peut très bien n’avoir aucune épithète, et c’est exactement ce que l’item vérifie.",
      "10. « **des allées étroites** ». « Étroite » change parce qu’une épithète s’accorde avec le nom noyau : le nom passe au pluriel, l’adjectif suit. Le déterminant aussi, d’ailleurs : une devient des.",
    ],
    "L’item 9 est le meilleur repère de la fiche. S’il cherche une épithète là où il n’y en a pas et finit par désigner « cuisine », c’est qu’une case vide lui paraît impossible à rendre — pas qu’il a mal compris la leçon. Le dire simplement : un groupe du nom sans épithète est un groupe du nom normal. Ce qu’on reprend la fois suivante, c’est justement ça, sur trois groupes dont deux sans adjectif, pour que la réponse « il n’y en a pas » devienne une réponse ordinaire.",
  ),

  /* ================================================================== */
  /* LEÇONS DE LA PÉRIODE 4 — reprises le 4 mai, le 25 mai et le 7 juin  */
  /* ================================================================== */

  f(
    "rf-reprise-08",
    "Reprendre la leçon de français",
    "Reprise 8 · les verbes qui changent de radical, autres verbes",
    [
      "On relit ensemble l’exemple du cours, puis on prend les douze items, sur le cahier, à la place des exercices de l’écran, qu’il a déjà vus corrigés. Ils vont par paires, un seul verbe par paire — un en -cer, un en -ger, un en -yer, deux en -eter et -eler, un avec un é — et chaque paire met face à face une forme où le radical change et une forme où il ne change pas. Écrire les deux l’une sous l’autre.",
      "Avant d’écrire, dire la forme à voix haute et écouter la voyelle : c’est le son qui commande l’écriture, pas l’inverse. « J’appelle » et « nous appelons » ne se prononcent pas pareil, et c’est toute la leçon.",
      "Le jour où ça ne va pas : s’il avait buté sur cette leçon à l’écran, on reprend d’abord ensemble l’exemple du cours — « j’appelle » et « nous appelons », en frappant la syllabe accentuée dans les mains — puis on ne garde que trois paires sur six. Une paire comprise vaut mieux que six recopiées.",
    ],
    [
      "**La leçon reprise** : « Les verbes qui changent de radical » (période 4). Elle apprend que ces changements servent à garder le son : cédille et e de soutien pour les verbes en -cer et -ger, y qui devient i, consonne qui double ou accent grave qui apparaît pour les verbes en -eler et -eter, é qui devient è.",
      "1. Conjugue « avancer » au présent avec « nous ».",
      "2. Conjugue « avancer » à l’imparfait avec « nous ».",
      "3. Conjugue « ranger » au présent avec « nous ».",
      "4. Conjugue « ranger » à l’imparfait avec « nous ».",
      "5. Conjugue « essuyer » au présent avec « ils ».",
      "6. Conjugue « essuyer » au présent avec « nous ».",
      "7. Conjugue « projeter » au présent avec « ils ».",
      "8. Conjugue « projeter » au présent avec « nous ».",
      "9. Conjugue « peler » au présent avec « je ».",
      "10. Conjugue « peler » au présent avec « nous ».",
      "11. Conjugue « préférer » au présent avec « tu ».",
      "12. Conjugue « préférer » au présent avec « vous ».",
    ],
    [
      "",
      "1. **nous avançons**. La cédille garde le son [s] devant le o. Sans elle, on lirait « avankons ».",
      "2. **nous avancions**. Devant le i, le c se prononce déjà [s] : plus besoin de cédille. Comparer avec l’item 1, écrit juste au-dessus.",
      "3. **nous rangeons**. Le e garde le g doux devant le o. Sans lui, on lirait « rangons » avec un g dur.",
      "4. **nous rangions**. Devant le i, le g est déjà doux : le e ne sert plus à rien, et il disparaît. Même raison qu’à l’item 2.",
      "5. **ils essuient**. Le y devient i devant un e muet : la terminaison -ent ne s’entend pas.",
      "6. **nous essuyons**. Ici la terminaison s’entend, et le y reste. La paire 5-6 est le cœur de la règle.",
      "7. **ils projettent**. Le t double devant un e muet, comme dans « ils jettent » : projeter est de la famille de jeter.",
      "8. **nous projetons**. Un seul t : la terminaison -ons s’entend, la syllabe du radical redevient sourde, et rien ne double.",
      "9. **je pèle**. Peler ne double pas son l : il prend un accent grave, comme acheter donne « j’achète ». C’est l’autre solution au même problème de son.",
      "10. **nous pelons**. Pas d’accent : devant -ons, on entend de nouveau un e sourd.",
      "11. **tu préfères**. Le é devient è quand la syllabe est accentuée.",
      "12. **vous préférez**. Ici c’est la terminaison qui porte l’accent : le é du radical reste é. La paire 11-12 montre la règle en deux lignes.",
    ],
    "Ce qu’on regarde : les paires 5-6 et 11-12, écrites l’une sous l’autre. Voit-il que c’est la même règle vue des deux côtés, ou apprend-il deux formes séparées sans lien entre elles ? Et sur les items 7 et 9, accepte-t-il que deux verbes très semblables, projeter et peler, ne se traitent pas pareil — l’un double sa consonne, l’autre prend un accent ? Si cette différence le gêne, lui dire la vérité, en deux temps. Que l’écriture change n’est pas un caprice : dans les deux verbes, elle fait entendre la même voyelle ouverte, par deux moyens différents. Mais lequel double et lequel prend l’accent, cela ne se devine pas : ça s’apprend verbe par verbe — projeter fait comme jeter, dont il est de la famille. Le son, lui, se remontre la fois suivante, en lisant à voix haute avant d’écrire.",
  ),

  f(
    "rf-reprise-09",
    "Reprendre la leçon de français",
    "Reprise 9 · la chaîne d’accords, autres phrases",
    [
      "On relit ensemble l’exemple du cours, puis on prend les dix items, sur le cahier, à la place des exercices de l’écran, qu’il a déjà vus corrigés. Méthode imposée et non négociable : souligner le groupe sujet, entourer le verbe, et seulement ensuite transformer — le noyau d’abord, puis ce qui l’accompagne, puis le verbe. La phrase transformée s’écrit en entier.",
      "Après chaque item, relire à voix haute. Beaucoup d’erreurs de chaîne s’entendent, et celles qui ne s’entendent pas sont justement celles qu’on va chercher au crayon.",
      "Le jour où ça ne va pas : s’il avait buté sur cette leçon à l’écran, on reprend d’abord ensemble l’exemple du cours — « La grande fenêtre était ouverte » mise au pluriel, les cinq étapes une par une — puis on ne fait que la moitié des items. Cette leçon fatigue vite parce qu’elle demande de tenir quatre choses à la fois ; s’arrêter à cinq items n’enlève rien.",
    ],
    [
      "**La leçon reprise** : « Transformer une phrase sans casser les accords » (période 4). Elle apprend qu’un seul changement en entraîne plusieurs autres — déterminant, nom, adjectifs, verbe — que le possessif s’accorde avec l’objet possédé et non avec celui qui le possède, et que ce qui est hors du groupe sujet ne bouge pas.",
      "1. Mets au féminin : « un voisin curieux ».",
      "2. Mets au pluriel : « le vieux cahier vert ».",
      "3. Mets au pluriel : « Cette haute tour était éclairée. »",
      "4. Mets au singulier : « Ces longs couloirs sont déserts. »",
      "5. Mets au pluriel : « Le chat du voisin dort sur le muret. »",
      "6. Mets au féminin : « Un boulanger inquiet ferme sa boutique. »",
      "7. Dans « Le garçon range sa chambre », pourquoi écrit-on « sa » et non « son » ?",
      "8. Mets au pluriel : « La route était étroite et glissante. »",
      "9. Mets au pluriel : « Cette grande armoire brune tient à peine dans le couloir. »",
      "10. Dans « Les élèves travaillent dans la salle du fond », faut-il accorder « salle » ? Pourquoi ?",
    ],
    [
      "",
      "1. « **une voisine curieuse** ». Les trois mots changent, le noyau d’abord : voisin devient voisine, puis un devient une, et curieux devient curieuse.",
      "2. « **les vieux cahiers verts** ». Quatre mots dans le groupe, trois qui changent — « vieux » s’écrivait déjà avec un x au singulier, et c’est le piège de l’item.",
      "3. « **Ces hautes tours étaient éclairées.** » Déterminant, nom, épithète, verbe, et le participe employé avec être : tout suit.",
      "4. « **Ce long couloir est désert.** » Ces devient ce, couloirs devient couloir, longs perd son s, sont devient est, déserts devient désert.",
      "5. « **Les chats du voisin dorment sur le muret.** » Attention : « du voisin » ne change pas — c’est un complément du nom, et il n’y a toujours qu’un voisin. « Sur le muret » ne change pas non plus. Répondre « les chats des voisins » n’est pas faux en soi comme phrase, mais ce n’est plus la transformation demandée : le lui montrer plutôt que de le corriger sèchement.",
      "6. « **Une boulangère inquiète ferme sa boutique.** » Le possessif « sa » ne bouge pas : « boutique » est féminin, et c’est l’objet possédé qui commande.",
      "7. Parce que **« chambre » est féminin**. Le déterminant possessif s’accorde avec l’objet possédé, pas avec celui qui le possède : le garçon est masculin, mais c’est la chambre qui commande. C’est la règle la moins intuitive de la leçon, et celle qui se redemande.",
      "8. « **Les routes étaient étroites et glissantes.** » Deux adjectifs attributs à accorder, et le verbe qui suit le sujet devenu pluriel.",
      "9. « **Ces grandes armoires brunes tiennent à peine dans le couloir.** » « Dans le couloir » ne change pas : ce n’est pas dans le groupe sujet.",
      "10. **Non.** « Dans la salle du fond » n’est pas dans le groupe sujet : rien ne l’oblige à suivre. Répondre « parce que ce n’est pas le sujet » compte comme juste.",
    ],
    "Ce qu’on observe : souligne-t-il vraiment le groupe sujet avant de transformer, ou attaque-t-il directement mot par mot ? Les items 5, 9 et 10 ne se règlent qu’avec ce soulignement — ils contiennent tous un groupe qui ne doit surtout pas bouger, et sans le trait, on accorde tout ce qui passe. Ce qu’on reprend la fois suivante, ce n’est pas la liste des accords, c’est le trait sous le sujet : trois phrases, rien qu’à souligner, sans rien transformer du tout.",
  ),

  f(
    "rf-reprise-10",
    "Reprendre la leçon de français",
    "Reprise 10 · la poésie, autres images et autres sons",
    [
      "On relit ensemble l’exemple du cours, puis on prend les onze items, sur le cahier, à la place des exercices de l’écran, qu’il a déjà vus corrigés. Tous les extraits se lisent à voix haute avant de répondre, sans exception : la moitié des réponses s’entend, et la lecture silencieuse les rend invisibles. Les extraits des items 7 et 9 se recopient d’abord un vers par ligne : les rimes se voient mieux, et le mot caché de l’item 9 se lit de haut en bas.",
      "L’item 11 est une écriture, pas une question : il n’a pas de corrigé unique et on ne cherche pas la bonne réponse. Quatre vers suffisent, même courts, même bancals — c’est la contrainte qu’on travaille, pas le poème.",
      "Le jour où ça ne va pas : s’il avait buté sur cette leçon à l’écran, on reprend d’abord ensemble l’exemple du cours — « Ses cheveux étaient un océan de blé », et la question « y a-t-il comme ? » — puis on ne garde que cinq items, en gardant l’item 11 si l’envie d’écrire est là. Un jour de fatigue, l’acrostiche peut se faire à l’oral, l’adulte tenant le crayon.",
    ],
    [
      "**La leçon reprise** : « Le goût des mots : la poésie » (période 4). Elle apprend à entendre — rime, allitération, rythme compté en syllabes — et à voir : la comparaison, qui passe par « comme », et la métaphore, qui s’en passe. Plus deux jeux de forme : le calligramme et l’acrostiche.",
      "1. « Ses mains étaient froides comme la pierre du seuil. » Comparaison ou métaphore ?",
      "2. « La nuit est un manteau posé sur les toits. » Comparaison ou métaphore ?",
      "3. « Le cheval filait dans le pré, tel un éclair. » Comparaison ou métaphore ?",
      "4. « Le grenier grinçait, gris, sous le grand vent. » Quel effet de son, et sur quelle lettre ?",
      "5. « Sous le saule, six souris sages. » Quel effet de son, et sur quelle lettre ?",
      "6. Compte les syllabes de ce vers : « Le vent a tourné sur la cour ».",
      "7. « Le seau du puits remonte lourd, / la corde grince dans ma main, / l’eau brille dans la fin du jour, / le chat s’endort sur le chemin. » Quels vers riment entre eux ?",
      "8. Un poème sur la pluie est écrit en lignes qui descendent en biais sur la page, comme des gouttes qui tombent. Comment appelle-t-on un poème qui dessine ainsi ce dont il parle ?",
      "9. « Loin au-dessus des toits, / Une lampe ronde / Nage dans le noir / Et veille sur la ville. » Lis la première lettre de chaque vers : quel mot se cache, et comment appelle-t-on ce jeu ?",
      "10. Trouve deux mots qui riment avec « lune ».",
      "11. Écris un acrostiche de quatre vers sur le mot NUIT.",
    ],
    [
      "",
      "1. Une **comparaison**. Le mot « comme » est là, et c’est lui qui tranche. « Tel », « pareil à », « ainsi que » jouent le même rôle.",
      "2. Une **métaphore**. Aucun mot de liaison : la nuit et le manteau sont donnés comme une seule chose, et c’est au lecteur de faire le saut.",
      "3. Une **comparaison**. Il n’y a pas « comme », mais « tel » fait le même travail de liaison, et le cours le cite (« il dort tel un loir »). S’il répond « métaphore » parce qu’il cherchait « comme », c’est une réponse raisonnée : lui montrer « tel », et le laisser trancher de nouveau.",
      "4. Une **allitération**, sur le **g**. Les g répétés font entendre le grincement, et le mot « grinçait » est justement celui qui le dit. Répondre « sur gr » compte comme juste : c’est même plus précis.",
      "5. Une **allitération**, sur le **s**. Les s chuchotent, ce qui convient à des souris.",
      "6. **Huit syllabes** : Le / vent / a / tour / né / sur / la / cour. Les compter sur les doigts, à voix haute. Un octosyllabe, si le mot l’amuse.",
      "7. Les vers **1 et 3** riment ensemble (lourd, jour), et les vers **2 et 4** riment ensemble (main, chemin). Les rimes se croisent. Répondre par les mots plutôt que par les numéros compte comme juste : c’est la même réponse.",
      "8. Un **calligramme**. Le poème prend la forme de ce dont il parle : ici, la pluie.",
      "9. Le mot **LUNE**, et le jeu s’appelle un **acrostiche** : le mot se lit de haut en bas, dans les premières lettres des vers. Les deux moitiés de la réponse se valent ; si seul le mot vient, redonner le nom du jeu.",
      "10. Plusieurs réponses justes : **dune**, **prune**, **brune**, **une**, **chacune**, **fortune**, **commune**… Ce qui compte, c’est que la fin sonne comme « lune ». « Plume » ou « lunette » ne riment pas avec lui : on y entend le même u, mais la fin ne sonne pas pareil.",
      "11. Pas de corrigé unique : il faut quatre vers commençant par N, U, I, T, dans cet ordre. Un exemple pour l’adulte, s’il faut amorcer : « Novembre a fermé les volets. / Un chien traverse la cour vide. / Il ne reste que la lumière / Tout au fond de la cuisine. » Ce qui compte est la contrainte tenue, pas la qualité des vers.",
    ],
    "Ce qu’on regarde : lit-il à voix haute avant de répondre aux items 4, 5 et 6, ou répond-il de l’œil ? Ces trois-là ne se résolvent pas autrement, et c’est précisément l’habitude que la leçon veut installer. Sur l’item 11, ce qu’on observe n’est pas le poème mais le démarrage : combien de temps avant que le premier vers arrive. Si rien ne vient, donner la première lettre et une piste — « Novembre, noir, ou un prénom qui commence par N » — et compter cela comme une réussite de la séance, pas comme un renoncement.",
  ),

  /* ================================================================== */
  /* LEÇONS DE LA PÉRIODE 5 — reprise le 18 juin, puis une de réserve    */
  /* ================================================================== */

  f(
    "rf-reprise-11",
    "Reprendre la leçon de français",
    "Reprise 11 · merveilleux ou étrange, autres récits",
    [
      "On relit ensemble l’exemple du cours, puis on prend les onze items, sur le cahier, à la place des exercices de l’écran, qu’il a déjà vus corrigés. Pour chaque situation, deux questions à se poser, celles du cours, et elles s’écrivent en tête de page : est-ce que ça se passe dans notre monde, celui de tous les jours ? Et est-ce que quelqu’un, dans l’histoire, trouve ça bizarre ? Un monde où l’extraordinaire est normal, et où personne ne s’étonne, c’est du merveilleux. Notre monde, où arrive une chose qui ne s’explique pas, et où quelqu’un s’étonne, doute ou cherche une explication, c’est de l’étrange. Quand un personnage réagit, sa réaction répond souvent aux deux questions à la fois ; quand personne ne réagit, on regarde surtout le monde.",
      "Les items 1 à 6 et 10 se répondent en un mot, puis en une ligne qui dit pourquoi. La ligne compte autant que le mot : c’est elle qui montre s’il s’est posé les deux questions ou s’il se fie à l’ambiance.",
      "Le jour où ça ne va pas : s’il avait buté sur cette leçon à l’écran, on reprend d’abord ensemble l’exemple du cours — le loup qui indique un chemin plus court, et la petite fille qui lui répond sans sourciller — puis on ne fait que la moitié des items. Et si le sujet de la peur le gêne un jour donné, s’en tenir aux items 1, 3, 9 et 10, où rien n’inquiète.",
    ],
    [
      "**La leçon reprise** : « Le merveilleux et l’étrange » (période 5). Elle apprend à distinguer deux façons de sortir du réel : le merveilleux, où le surnaturel fait partie du monde et où personne ne s’en étonne, et l’étrange, où le monde est le nôtre, où l’inexplicable survient, et où le doute reste jusqu’au bout.",
      "1. « Le renard ôta son chapeau et salua la meunière, qui lui rendit son salut. » Merveilleux ou étrange ?",
      "2. « En rentrant, il trouva la table mise pour deux. Il vivait seul. Il fit deux fois le tour de la maison sans trouver personne. » Merveilleux ou étrange ?",
      "3. « La fée toucha la citrouille du bout de sa baguette, et le carrosse attendait devant le perron. » Merveilleux ou étrange ?",
      "4. « Chaque matin, la pendule du couloir était arrêtée sur sept heures sept, même quand on l’avait remontée la veille. L’horloger, venu trois fois, n’y comprenait rien. » Merveilleux ou étrange ?",
      "5. « Au fond du puits habitait une voix. Chaque matin, la fermière se penchait pour lui donner des nouvelles du village. » Merveilleux ou étrange ?",
      "6. « Il se réveilla et son ombre n’était plus du bon côté. Il alla vérifier à la fenêtre où se trouvait le soleil. » Merveilleux ou étrange ?",
      "7. « Mardi, en rentrant de l’école, Lucas remarqua que le numéro de sa maison n’était plus le même. C’était bien la vieille plaque bleue, avec sa vis tordue et sa tache de rouille ; mais le matin, elle disait 12, et maintenant elle disait 14. » C’est le début d’un récit. Annonce-t-il du merveilleux ou de l’étrange ? Qu’est-ce qui l’annonce ?",
      "8. Imagine que la situation 2 se termine ainsi : « C’était sa sœur, venue lui faire une surprise. » Est-ce encore un récit étrange ? Pourquoi ?",
      "9. Les histoires de mondes qui n’existent pas servent-elles à quelque chose, une fois le livre refermé ? Dis une chose à laquelle elles servent.",
      "10. « Dans ce royaume, les nuages descendaient chaque jeudi laver les toits, et les habitants fermaient leurs fenêtres ce jour-là. » Merveilleux ou étrange ?",
      "11. Réécris la situation 1 pour qu’elle devienne étrange. Une phrase suffit.",
    ],
    [
      "",
      "1. **Merveilleux**. Le renard porte un chapeau et salue, et la meunière lui rend son salut sans s’étonner. C’est le monde du conte.",
      "2. **Étrange**. Le monde est le nôtre, rien de magique n’est nommé, et il cherche une explication : il fait le tour de la maison. Le récit ne dit pas qui a mis la table, et c’est ce silence qui fait l’effet.",
      "3. **Merveilleux**. Une fée, une baguette, une transformation : le surnaturel est la règle de ce monde-là.",
      "4. **Étrange**. Une pendule, un couloir, un horloger : un monde ordinaire, des détails précis, et un fait qui ne s’explique pas. L’horloger qui n’y comprend rien est celui qui s’étonne. C’est ainsi que l’étrange se fabrique.",
      "5. **Merveilleux**. Pas à cause de la voix, mais à cause de la fermière : elle lui parle chaque matin comme à une voisine. Personne ne s’étonne, donc merveilleux. C’est l’item qui vérifie vraiment le critère : ce n’est pas l’événement qui décide, c’est la réaction.",
      "6. **Étrange**. Il va vérifier — donc il s’étonne, donc il doute, donc il cherche une explication. Le geste de vérification est le signe.",
      "7. De l’**étrange**. Un mardi, l’école, une vieille plaque avec sa vis tordue : c’est notre monde, avec des détails ordinaires. Et il s’y passe une chose qui ne s’explique pas : la plaque n’a pas été changée, c’est la même, et pourtant le numéro n’est plus celui du matin. Lucas « remarqua » : il s’aperçoit que quelque chose ne va pas. Un conte commencerait plutôt par « Il était une fois ». Répondre « parce que c’est la vraie vie et qu’il se passe un truc bizarre » compte comme juste. S’il fait remarquer qu’une mairie peut changer les numéros d’une rue, c’est une vraie remarque : c’est justement pour ça que le récit précise que c’est la même vieille plaque, et qu’elle a changé dans la journée.",
      "8. **Non**. L’explication referme le doute, et c’est le doute qui faisait l’effet : il reste une histoire ordinaire de surprise. Répondre « parce qu’on sait maintenant qui a mis la table » compte comme juste, et c’est exactement ça.",
      "9. Plusieurs réponses justes. Le cours en donne trois : elles **entraînent à imaginer**, ce dont on a besoin pour inventer quoi que ce soit ; elles permettent d’**approcher une peur en sécurité** ; elles parlent de **choses réelles sous un déguisement**, comme le courage ou la jalousie. Une seule suffit. S’il en propose une autre qui se défend — « ça fait rêver », « on apprend des mots » — l’accepter aussi.",
      "10. **Merveilleux**. Des nuages qui lavent les toits, c’est du surnaturel, mais c’est la règle de ce monde-là : les habitants s’y sont habitués et ferment leurs fenêtres. Personne ne s’étonne, et « dans ce royaume » annonce déjà un monde de conte.",
      "11. Pas de corrigé unique. Le critère : il faut que quelqu’un s’étonne. Par exemple — « Le renard ôta son chapeau et salua la meunière, qui laissa tomber son sac et resta sans voix. » Ou bien la même phrase suivie de « Elle regarda autour d’elle pour voir si quelqu’un d’autre avait entendu. » Accepter toute réécriture où un personnage marque l’étonnement, le doute ou la recherche d’explication.",
    ],
    "L’item 5 est celui qui renseigne le plus : la voix dans le puits ressemble à de l’étrange, et c’est la réaction de la fermière qui en fait du merveilleux. S’il répond « étrange » en s’appuyant sur l’événement plutôt que sur la réaction, ce n’est pas une confusion mais un critère qui n’est pas encore le bon — on reprend la fois suivante en lui faisant surligner, dans chaque situation, le mot qui dit ce que fait le personnage. C’est là qu’est le plus souvent la réponse ; quand aucun personnage ne réagit, on regarde si le monde est le nôtre.",
  ),

  f(
    "rf-reprise-12",
    "Reprendre la leçon de français",
    "Reprise 12 · l’orthographe des mots, autres mots",
    [
      "On relit ensemble l’exemple du cours, puis on prend les douze items, sur le cahier, à la place des exercices de l’écran, qu’il a déjà vus corrigés. Pour les items 1 à 6, la réponse attendue est en deux parties : le mot écrit correctement, et à côté le mot de la famille qui fait entendre la lettre. Sans le second, l’item n’est pas fait.",
      "Les items 7 à 9 portent sur les invariables : ceux-là n’ont pas de famille à chercher, ils s’apprennent. Le dire franchement plutôt que de le laisser chercher une règle qui n’existe pas.",
      "Le jour où ça ne va pas : s’il avait buté sur cette leçon à l’écran, on reprend d’abord ensemble l’exemple du cours — « un chant », vérifié par chanter et chanteur — puis on ne fait que six items : mieux vaut finir la séance en ayant tenu six items que l’abandonner au milieu du dixième.",
    ],
    [
      "**La leçon reprise** : « L’orthographe des mots » (période 5). Elle apprend trois choses : qu’une lettre finale muette s’explique presque toujours par un mot de la même famille, qu’une petite liste de mots invariables ne s’explique pas et s’apprend telle quelle, et que les doubles consonnes se trouvent souvent après un préfixe ou dans les finales en -elle, -ette, -esse.",
      "1. « un tapi… » : quelle lettre finale, et quel mot de la famille le prouve ?",
      "2. « le froi… » : quelle lettre finale, et quel mot de la famille le prouve ?",
      "3. « un ran… » (la file de personnes) : quelle lettre finale, et quel mot de la famille le prouve ?",
      "4. « un marchan… » : quelle lettre finale, et quel mot de la famille le prouve ?",
      "5. « un sau… » (par-dessus la flaque) : quelle lettre finale, et quel mot de la famille le prouve ?",
      "6. « le plom… » (le métal) : quelle lettre finale, et quel mot de la famille le prouve ?",
      "7. Écris correctement : « Il pleut dep… trois jours. »",
      "8. Écris correctement : « Il rentrera bient… »",
      "9. Lequel de ces trois mots est invariable : « heureuse », « beaucoup », « lourde » ?",
      "10. Pourquoi « emmener » prend-il deux m ?",
      "11. Complète : « une allum… » (pour allumer une bougie). Combien de t, et pourquoi ?",
      "12. Complète : « Elle rappe… son chien, parti renifler au bout du champ. »",
    ],
    [
      "",
      "1. **un tapis**, avec un s. La famille le fait entendre : tapisser, une tapisserie, un tapissier.",
      "2. **le froid**, avec un d. Le féminin le dit : froide. Et la famille aussi : refroidir, un refroidissement.",
      "3. **un rang**, avec un g. Ranger, une rangée, un rangement. Sans la famille, on écrirait « un ran », et rien ne le contredirait.",
      "4. **un marchand**, avec un d. Une marchande, une marchandise, marchander. Le féminin est presque toujours le plus rapide à trouver.",
      "5. **un saut**, avec un t. Sauter, un sauteur, une sauterelle. À distinguer de « sceau », « seau » et « sot », qui se prononcent pareil et n’ont rien à voir — si la remarque vient de lui, elle mérite qu’on s’arrête une minute.",
      "6. **le plomb**, avec un b. Un plombier, la plomberie, plomber. C’est le plus difficile des six, parce que le b muet est rare : s’il ne le trouve pas, donner « plombier » et laisser conclure.",
      "7. **depuis**. Mot invariable, avec un s final qui ne s’entend pas — comme toujours, jamais, parfois, alors.",
      "8. **bientôt**. Mot invariable, avec un accent circonflexe et un t final muet, comme aussitôt et plutôt.",
      "9. **beaucoup**. « Heureuse » et « lourde » varient en genre et en nombre — heureux, heureuses, lourd, lourdes ; « beaucoup » s’écrit pareil partout.",
      "10. Parce que c’est le **préfixe em-** collé devant **mener** : em- + mener. Même fabrication pour apporter (ap- + porter) et immangeable (im- + mangeable). Répondre « à cause du préfixe » compte comme juste, et « parce qu’il y a mener dedans » aussi.",
      "11. **une allumette**, avec **deux t**, parce que la finale est -ette — comme une chaussette, une assiette, une maisonnette. Ici le mot de la famille, allumer, ne dit rien des t : c’est la finale qui les apporte. Les deux l, eux, viennent d’allumer.",
      "12. **elle rappelle**, avec deux l. Rappeler se conjugue comme appeler : le l double devant un e muet, parce que le son de la voyelle change — mais « nous rappelons » n’en a qu’un. C’est la leçon de mars sur les verbes qui changent de radical, et les deux leçons se répondent ici : ça vaut la peine de le lui montrer.",
    ],
    "Ce qu’on regarde : cherche-t-il un mot de la famille de lui-même, ou attend-il qu’on lui donne le mot témoin ? Les items 1 à 6 posent tous la même question, six fois, exprès. Si le réflexe est là au bout de six, l’orthographe de l’an prochain reposera sur autre chose que la mémoire, et c’est le vrai acquis de la leçon. L’item 12 est celui qui mérite le dernier mot : il relie deux leçons séparées de trois mois, et voir ce lien tout seul vaut beaucoup plus que la bonne orthographe de « rappelle ».",
  ),

  /* ================================================================== */
  /* RÉSERVE — deux autres leçons, qui ne tombent pas dans l'année       */
  /* ================================================================== */

  f(
    "rf-reprise-13",
    "Reprendre la leçon de français",
    "Reprise 13 · objet ou circonstanciel, autres phrases",
    [
      "On relit ensemble l’exemple du cours, puis on prend les dix items, sur le cahier, à la place des exercices de l’écran, qu’il a déjà vus corrigés. Méthode invariable : on essaie de déplacer le groupe en tête de phrase, puis on essaie de l’enlever. Ce qui résiste aux deux est un complément d’objet ; ce qui accepte les deux est un circonstanciel.",
      "Les tests se font à voix haute, en disant la phrase déplacée en entier même quand elle sonne mal — c’est en l’entendant mal sonner qu’on sait. Écrire seulement la conclusion.",
      "Le jour où ça ne va pas : s’il avait buté sur cette leçon à l’écran, on reprend d’abord ensemble l’exemple du cours — « Chaque soir, Léa lit une histoire à son petit frère », les trois groupes un par un — puis on ne fait que cinq items. Cette leçon demande de manipuler avant de juger, et manipuler fatigue plus que reconnaître.",
    ],
    [
      "**La leçon reprise** : « Les compléments : objet ou circonstanciel » (période 2). Elle apprend à trancher par le test et non par le sens : ce qui se déplace et s’enlève est circonstanciel ; ce qui reste collé au verbe est un complément d’objet, direct s’il n’y a pas de préposition, indirect s’il y en a une.",
      "1. Dans « Chaque dimanche, mon oncle répare des vélos dans son garage », quels groupes peut-on déplacer ou enlever ?",
      "2. Dans la même phrase, quel est le complément d’objet direct ?",
      "3. Dans « Cette écharpe appartient à ma voisine », que fait « à ma voisine » ?",
      "4. Dans « Léo ouvre la fenêtre », que fait « la fenêtre » ?",
      "5. Dans « Depuis l’été, Tom ressemble à son grand frère », dis ce que sont « depuis l’été » et « à son grand frère ».",
      "6. Dans « Cette soupe manque de sel », que fait « de sel » ?",
      "7. Dans « Le boulanger pétrit la pâte », pose la question qui mène au complément d’objet direct, puis donne-le.",
      "8. Recopie « Sur le quai, un homme tenait une valise » en enlevant tout ce qui peut l’être.",
      "9. Dans « Le gardien surveille les enfants », « les enfants » est-il un complément d’objet, même si ce sont des personnes ?",
      "10. Dans « Elle range ses livres le soir », que fait « le soir » ? Dis le test qui le montre.",
    ],
    [
      "",
      "1. **« Chaque dimanche »** et **« dans son garage »**. Les deux se déplacent — « Dans son garage, chaque dimanche, mon oncle répare des vélos » — et les deux s’enlèvent. Ce sont des compléments circonstanciels.",
      "2. **« des vélos »**. Il répare quoi ? Des vélos. Le groupe ne se déplace pas et ne s’enlève pas : « mon oncle répare » ne veut plus rien dire.",
      "3. C’est un **complément d’objet indirect**. « Cette écharpe appartient à qui ? » et la préposition « à » est là. Il ne s’enlève pas : « cette écharpe appartient » reste en l’air. « COI » compte comme juste.",
      "4. C’est un **complément d’objet direct**. « Léo ouvre quoi ? La fenêtre. » Rien entre le verbe et lui, et il ne s’enlève pas : « Léo ouvre » reste en l’air.",
      "5. « Depuis l’été » est un **circonstanciel** — il se déplace (« Tom ressemble à son grand frère depuis l’été ») et s’enlève. « À son grand frère » est un **complément d’objet indirect** : Tom ressemble à qui ? Et « Tom ressemble » ne tient pas debout tout seul.",
      "6. C’est un **complément d’objet indirect**. « Cette soupe manque de quoi ? De sel. » La préposition est « de » cette fois, et pas « à » : les deux mènent au complément d’objet indirect. Il ne se déplace pas — « De sel, cette soupe manque » sonne faux — et il ne s’enlève pas : « cette soupe manque » reste en l’air. « COI » compte comme juste.",
      "7. « Le boulanger pétrit **quoi** ? » — **la pâte**. La question est « verbe + quoi ? » pour une chose, « verbe + qui ? » pour une personne. « Où ? » et « quand ? » mèneraient aux circonstanciels, pas à l’objet.",
      "8. « **Un homme tenait une valise.** » Seul « sur le quai » part. « Une valise » ne peut pas : « un homme tenait » reste en l’air.",
      "9. **Oui**, c’est un complément d’objet direct. Le mot « objet » ne veut pas dire « une chose » : le gardien surveille qui ? Les enfants. C’est le contresens le plus courant de la leçon, et il vient du mot lui-même.",
      "10. C’est un **circonstanciel**. Il se déplace — « Le soir, elle range ses livres » — et il s’enlève — « Elle range ses livres ». Les deux tests passent. Et ils ne dépendent pas du sens de la phrase, ce qui est justement leur force.",
    ],
    "L’item 9 est le repère. S’il hésite parce que « les enfants » sont des personnes, ce n’est pas la grammaire qui le gêne mais le mot « objet », et c’est une gêne raisonnable : le mot est trompeur. Le lui dire tel quel, et donner deux ou trois phrases où l’objet est une personne pour que l’habitude se prenne. Ce qu’on regarde par ailleurs : fait-il vraiment le test du déplacement à voix haute, ou décide-t-il au sens ? Décider au sens marche une fois sur deux ; le test, lui, marche aussi sur les phrases dont le sens reste obscur.",
  ),

  f(
    "rf-reprise-14",
    "Reprendre la leçon de français",
    "Reprise 14 · l’accord du sujet et du verbe, autres phrases",
    [
      "On relit ensemble l’exemple du cours, puis on prend les onze items, sur le cahier, à la place des exercices de l’écran, qu’il a déjà vus corrigés. Chaque phrase se traite dans le même ordre : poser la question « qui est-ce qui… ? », souligner le groupe sujet en entier, repasser son noyau en couleur, puis seulement écrire le verbe et l’entourer.",
      "Les items 1, 2, 6, 7 et 9 contiennent tous la même difficulté — un complément du nom glissé entre le noyau et le verbe, au pluriel partout sauf dans l’item 6, où c’est l’inverse. On le lui dit avant de commencer : dans plusieurs phrases, un petit groupe de mots se glisse entre le sujet et le verbe, et c’est lui qu’il faudra enjamber. Et s’il accorde avec le mauvais mot, on ne parle pas d’erreur : on repose la question « qui est-ce qui… ? », et il rectifie lui-même.",
      "Le jour où ça ne va pas : s’il avait buté sur cette leçon à l’écran, on reprend d’abord ensemble l’exemple du cours — « Le panier de pommes est sur la table », question posée à voix haute et noyau repassé en couleur — puis on ne fait que la moitié des items. Et si l’écrit pèse, il dit la forme du verbe et l’adulte écrit : ce qui se travaille ici est le raisonnement, pas la main.",
    ],
    [
      "**La leçon reprise** : « L’accord du sujet et du verbe » (période 3). Elle apprend que c’est le noyau du groupe sujet qui commande, pas le mot le plus proche du verbe ; que le sujet peut se trouver derrière le verbe ; que « avec moi » donne nous et « avec toi » (sans moi) donne vous ; et qu’un déterminant annonce un nom quand un pronom sujet annonce un verbe.",
      "1. Complète : « Le tas de feuilles … au fond du jardin. » (être, présent)",
      "2. Complète : « La clé des caves … accrochée près de la porte. » (être, présent)",
      "3. Complète : « Derrière la haie … deux enfants. » (jouer, imparfait)",
      "4. Complète : « Ma cousine et moi … le même autobus. » (prendre, présent)",
      "5. Complète : « Ton cousin et toi … de rentrer avant la nuit. » (promettre, présent)",
      "6. Complète : « Les branches du vieux pommier … le toit de l’abri. » (toucher, présent)",
      "7. Complète : « Le bruit des voitures … dès six heures. » (commencer, présent)",
      "8. Écris au pluriel « il porte », puis « la porte ». Pourquoi l’un finit-il par -nt et l’autre par -s ?",
      "9. Complète : « Le chant des oiseaux … bien avant le jour. » (reprendre, présent)",
      "10. Complète : « Au-dessus du toit … une étoile. » (briller, imparfait)",
      "11. Complète : « Mes voisins et leur fils … demain matin. » (partir, présent)",
    ],
    [
      "",
      "1. **est**. Qu’est-ce qui est au fond du jardin ? Le tas — un seul. « De feuilles » n’est qu’un complément du nom, même s’il est collé au verbe.",
      "2. **est**. C’est la clé qui est accrochée, pas les caves. Même difficulté, autre phrase.",
      "3. **jouaient**. Le sujet est « deux enfants », derrière le verbe. Le test « qui est-ce qui jouait ? » marche quelle que soit la place du sujet, et c’est pour ça qu’on l’utilise.",
      "4. **prenons**. « Ma cousine et moi » équivaut à nous. Dès qu’il y a « moi », c’est nous.",
      "5. **promettez**. « Ton cousin et toi » équivaut à vous : il y a « toi » sans « moi », et peu importe que « toi » arrive en second.",
      "6. **touchent**. Ici le noyau est au pluriel : ce sont les branches qui touchent. La difficulté joue dans les deux sens, et cet item est là pour ça — sinon il suffirait de toujours répondre au singulier.",
      "7. **commence**. C’est le bruit qui commence, pas les voitures.",
      "8. « **ils portent** » et « **les portes** ». Devant le premier, un pronom sujet : c’est un verbe, et son pluriel s’écrit -nt. Devant le second, un déterminant : c’est un nom, et son pluriel s’écrit -s. Le mot écrit était le même, la règle ne l’est pas. Répondre « parce que l’un est un verbe et l’autre un nom » compte comme juste.",
      "9. **reprend**. C’est le chant qui reprend. Un seul chant, même s’il y a beaucoup d’oiseaux.",
      "10. **brillait**. Le sujet « une étoile » est derrière le verbe, et il est au singulier.",
      "11. **partent**. Plusieurs personnes, donc un sujet pluriel — et ici ni « moi » ni « toi » : c’est donc ils.",
    ],
    "Ce qu’on regarde : repère-t-il le noyau, ou accorde-t-il avec le mot collé au verbe ? Les items 1, 2, 7 et 9 se trompent tous de la même façon si le geste n’est pas pris, et l’item 6 vérifie qu’il ne s’est pas mis à répondre systématiquement au singulier pour s’en protéger — ce qui serait une stratégie, pas un raisonnement. Ce qu’on reprend la fois suivante : cinq phrases où l’on ne fait que poser la question « qui est-ce qui… ? » et souligner, sans écrire un seul verbe.",
  ),
];
