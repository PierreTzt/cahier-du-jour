/**
 * Dehors, et le corps. Huit rituels, cent trente séances de trente minutes.
 *
 * Ces séances n'ont pas besoin de matériel, mais d'être menées : ce qu'on fait, dans quel ordre, combien de temps, et ce qu'on observe. Rien ne se compte, rien ne se chronomètre, rien ne se compare — ni à personne, ni à la fois d'avant. Pas de record, pas de meilleure série : on regarde un geste.
 *
 * Ce qu'une fiche donne, et pourquoi : voir `lib/fiches/types.ts`. En deux
 * mots — le matériel exact, le corrigé quand il y en a un, et ce qu'on
 * regarde. Un adulte qui l'ouvre ne doit plus rien avoir à chercher.
 *
 * Ici le `materiel` est le **déroulé** : trois ou quatre temps datés, qui font
 * la demi-heure. Il n'y a pas de corrigé — on ne corrige pas une course.
 *
 * Deux choses tiennent tout le reste. **Aucune comparaison** : ni à un autre
 * enfant, ni à un âge, ni à ce qu'on devrait savoir faire. Et **la série monte
 * doucement** sans que ce soit une exigence : chaque fiche dit comment on fait
 * moins, les jours où ça ne va pas, sans que la séance cesse d'être entière.
 *
 * **Réservé aux adultes** : ces fiches portent les corrigés.
 *
 * Rien de tout ceci n'a été relu par un enseignant. Ça doit l'être.
 */

import { f, type Fiche } from "./types";

export const dehors: Fiche[] = [
  /* ------------------------------------------------------------------ *
   * Course et endurance — 16 fiches. De trois blocs de deux minutes à
   * vingt minutes d'un seul trait. La durée de course monte doucement,
   * mais rien n'est chronométré ni comparé d'une fois sur l'autre : la
   * boucle des sorties 7 et 16 est un chemin qu'on retrouve, pas un temps.
   * ------------------------------------------------------------------ */

  f("dh-course-01", "Course et endurance", "Sortie 1 · trois fois deux minutes",
    [
      "Choisir une boucle courte et plate, sans voiture : une allée de parc, un chemin, un tour de pâté de maisons.",
      "L’adulte court à côté, ou marche en coupant au plus court. On parle pendant l’effort : tant qu’il peut répondre par une phrase, l’allure est bonne.",
      "Un jour où ça ne va pas : on garde l’échauffement et on ne fait qu’un seul bloc. La séance est entière quand même.",
    ],
    [
      "5 min — échauffement : marche rapide, puis montées de genoux, talons-fesses, dix pas sur la pointe des pieds, dix pas sur les talons.",
      "12 min — le corps de la séance : trois fois deux minutes de course, une minute et demie de marche entre chaque. On part lentement, volontairement trop lentement.",
      "8 min — jeu : cinq départs sur dix mètres, déclenchés par un signal de la main. Marche de retour entre chaque.",
      "5 min — retour au calme : marche, puis étirements debout — mollets, cuisses, dos rond, dos creux.",
    ],
    undefined,
    "Ce qu’on regarde, c’est le souffle : s’il tient les trois blocs en pouvant encore parler, l’allure lui convient. S’il s’arrête au deuxième, la prochaine fois on raccourcit le bloc plutôt que d’allonger la marche — il vaut mieux courir peu sans s’arrêter que beaucoup en s’arrêtant.",
  ),

  f("dh-course-02", "Course et endurance", "Sortie 2 · trois fois trois minutes",
    [
      "Même boucle que la fois précédente : le terrain connu enlève une inquiétude.",
      "Lui laisser régler l’allure et s’y tenir. S’il part trop vite, on ne le corrige pas au départ — on lui fait remarquer au bout d’une minute que ça devient dur, et il ajuste seul.",
      "Un jour où ça ne va pas : deux blocs au lieu de trois.",
    ],
    [
      "5 min — échauffement : marche rapide, puis vingt pas de course lente, vingt pas de marche, trois fois.",
      "14 min — trois fois trois minutes de course, une minute trente de marche entre chaque.",
      "6 min — jeu : le loup dans un espace délimité, changement de rôle toutes les trente secondes.",
      "5 min — retour au calme : marche lente et deux minutes d’étirements.",
    ],
    undefined,
    "S’il finit le troisième bloc plus vite qu’il ne l’a commencé, c’est qu’il avait de la marge : la prochaine fois il pourra partir un peu plus haut. S’il ralentit dès le premier, on reste sur ce format une fois de plus avant d’allonger.",
  ),

  f("dh-course-03", "Course et endurance", "Sortie 3 · deux fois cinq minutes",
    [
      "Deux blocs plus longs à la place de trois courts : c’est le premier vrai pas vers la course continue.",
      "Annoncer le déroulé avant de partir, en entier. Savoir où ça s’arrête change tout pour lui.",
      "Un jour où ça ne va pas : cinq minutes une seule fois, et on complète par de la marche.",
    ],
    [
      "5 min — échauffement : marche rapide, talons-fesses, pas chassés à droite et à gauche, dix sauts sur place.",
      "13 min — deux fois cinq minutes de course, trois minutes de marche entre les deux.",
      "7 min — jeu : la course aux couleurs — l’adulte nomme une couleur, il part toucher un objet de cette couleur et revient.",
      "5 min — retour au calme : marche et étirements.",
    ],
    undefined,
    "On regarde s’il tient un bloc sans demander combien de temps il reste. C’est l’adulte qui garde l’heure, discrètement, et l’enfant n’a ni montre ni chiffre à surveiller. S’il demande souvent, la prochaine fois on lui donne un repère de terrain plutôt qu’un temps : « jusqu’au grand arbre, puis retour ».",
  ),

  f("dh-course-04", "Course et endurance", "Sortie 4 · six minutes d’un seul trait",
    [
      "Le premier bloc long sans coupure. On le prévient que c’est le seul objectif de la séance : le reste est du jeu.",
      "L’adulte court avec lui du début à la fin de ces six minutes, sans le devancer.",
      "Un jour où ça ne va pas : quatre minutes, ce qui reste largement une course continue.",
    ],
    [
      "6 min — échauffement : marche rapide, montées de genoux, pas chassés, trois accélérations de dix pas.",
      "6 min — six minutes de course d’un seul trait, très lentement. La consigne est de ne pas s’arrêter, pas d’aller vite.",
      "5 min — marche complète, on parle d’autre chose.",
      "8 min — jeu : lancer une balle loin, courir la chercher, revenir. Huit fois.",
      "5 min — retour au calme et étirements.",
    ],
    undefined,
    "S’il a tenu six minutes sans s’arrêter, c’est acquis et on peut allonger. S’il s’est arrêté une fois, ce n’est pas un échec : on refait six minutes la prochaine fois, en partant encore plus lentement.",
  ),

  f("dh-course-05", "Course et endurance", "Sortie 5 · huit minutes, et le souffle qu’on écoute",
    [
      "On ajoute deux minutes, et surtout une compétence : reconnaître son allure au souffle.",
      "Lui apprendre le repère : « si tu peux dire une phrase entière, c’est bon ; si tu ne peux dire qu’un mot, tu es trop haut ». Il le vérifie lui-même pendant la course.",
      "Un jour où ça ne va pas : six minutes, comme la fois précédente.",
    ],
    [
      "6 min — échauffement : marche rapide, mobilisation des chevilles et des épaules, deux accélérations de quinze pas.",
      "8 min — huit minutes de course continue. Deux fois pendant la course, l’adulte lui pose une question banale : il doit pouvoir y répondre par une phrase.",
      "6 min — marche, et on parle de ce qu’il a senti : jambes, souffle, points de côté.",
      "5 min — jeu : trois sprints de quinze mètres, marche de retour.",
      "5 min — retour au calme et étirements.",
    ],
    undefined,
    "On regarde s’il sait dire lui-même, sans montre, quand il va trop vite. Le jour où il ralentit tout seul avant qu’on le lui dise, il a gagné quelque chose que le chronomètre ne montre pas.",
  ),

  f("dh-course-06", "Course et endurance", "Sortie 6 · dix minutes d’un seul trait",
    [
      "Dix minutes : c’est un cap, et il vaut la peine d’être annoncé comme tel avant de partir.",
      "On coupe la course en trois repères de terrain plutôt qu’en minutes — un arbre, un banc, un carrefour — pour qu’il pense au chemin, pas aux minutes.",
      "Un jour où ça ne va pas : huit minutes, ou deux fois cinq.",
    ],
    [
      "6 min — échauffement : marche rapide, montées de genoux, talons-fesses, deux accélérations.",
      "10 min — dix minutes de course continue, découpées à voix haute par trois repères du parcours.",
      "6 min — marche de récupération.",
      "3 min — jeu : trois départs arrêtés de dix mètres, par surprise.",
      "5 min — retour au calme et étirements.",
    ],
    undefined,
    "S’il termine en accélérant sur les derniers mètres, il a couru dans sa zone confortable et on peut allonger. S’il finit en marchant, on reprend dix minutes la fois suivante avant d’aller plus loin.",
  ),

  f("dh-course-07", "Course et endurance", "Sortie 7 · la boucle d’un kilomètre",
    [
      "Cette séance pose une boucle qu’on retrouvera en juin, à la sortie 16 : un chemin connu, pas une mesure. On ne chronomètre rien, ni aujourd’hui ni en juin.",
      "Choisir une boucle qu’on peut retrouver exactement — départ, arrivée, chemin — d’environ un kilomètre. La noter par écrit avec son point de départ : c’est le chemin qu’on garde, pas un temps.",
      "Lui dire avant de partir qu’il n’y a ni montre ni chronomètre : il court la boucle à l’allure qui se tient, et s’il marche un moment, la boucle est faite quand même.",
    ],
    [
      "7 min — échauffement complet : marche rapide, montées de genoux, talons-fesses, pas chassés, trois accélérations progressives.",
      "3 min — reconnaissance : on marche les cent premiers mètres de la boucle et on repère le point d’arrivée.",
      "10 min — la boucle, en courant, à l’allure qu’il choisit. L’adulte court à côté, sans montre, et nomme les repères du chemin à voix haute.",
      "5 min — marche, et on dessine ensemble la boucle sur un papier qu’on range : le départ, les virages, un ou deux repères qu’il a remarqués. Aucun chiffre sur la feuille.",
      "5 min — retour au calme et étirements.",
    ],
    undefined,
    "Ce qu’on regarde, c’est s’il a su choisir une allure qu’il pouvait tenir jusqu’au bout, et s’il reconnaît les repères du chemin. S’il a marché un moment, on n’en dit rien de plus : la boucle est faite, et on la retrouvera en juin.",
  ),

  f("dh-course-08", "Course et endurance", "Sortie 8 · douze minutes",
    [
      "On repart d’un bloc continu, deux minutes de plus qu’à la sortie 6.",
      "Lui proposer de compter les repères plutôt que les minutes : quatre arbres, deux carrefours, et c’est fini.",
      "Un jour où ça ne va pas : dix minutes, ce qu’il sait déjà faire.",
    ],
    [
      "6 min — échauffement : marche rapide, mobilisation des chevilles, montées de genoux, deux accélérations.",
      "12 min — douze minutes de course continue, à allure de conversation.",
      "5 min — marche de récupération et boisson.",
      "2 min — jeu : deux sprints de dix mètres, pour finir vite et court.",
      "5 min — retour au calme et étirements.",
    ],
    undefined,
    "On regarde la deuxième moitié : s’il tient la même allure de la sixième à la douzième minute, l’endurance s’installe. Si elle s’effondre après huit minutes, c’est que le départ était trop haut — la prochaine fois, on part encore plus lentement.",
  ),

  f("dh-course-09", "Course et endurance", "Sortie 9 · dix minutes, et trois accélérations",
    [
      "Une séance plus courte que la précédente, mais avec des changements d’allure : c’est un autre travail, et c’est volontaire.",
      "Les accélérations durent vingt secondes et ne sont pas des sprints : on passe de l’allure de conversation à l’allure où l’on ne peut plus parler, puis on revient.",
      "Un jour où ça ne va pas : on garde les dix minutes et on supprime les accélérations.",
    ],
    [
      "6 min — échauffement : marche rapide, montées de genoux, talons-fesses, trois accélérations progressives de dix pas.",
      "10 min — dix minutes de course continue, avec trois accélérations de vingt secondes : à la troisième, à la sixième et à la neuvième minute. Entre elles, on revient à l’allure lente.",
      "6 min — marche de récupération.",
      "3 min — jeu : la course d’ombre — il court, l’adulte le suit à trois pas et change de direction.",
      "5 min — retour au calme et étirements.",
    ],
    undefined,
    "Ce qu’on regarde, c’est le retour au calme après l’accélération : s’il retrouve son allure lente en une vingtaine de secondes, il sait déjà gérer l’effort. S’il reste essoufflé jusqu’à la suivante, on espace les accélérations la prochaine fois.",
  ),

  f("dh-course-10", "Course et endurance", "Sortie 10 · quinze minutes",
    [
      "Le plus long bloc de l’hiver. Prévenir la veille, pour qu’il arrive avec l’idée en tête plutôt qu’avec une surprise.",
      "Emporter de l’eau et, s’il fait froid, une couche qu’on enlève après l’échauffement.",
      "Un jour où ça ne va pas : douze minutes, ou dix. On reste au-dessus de ce qui est confortable, mais pas beaucoup.",
    ],
    [
      "6 min — échauffement : marche rapide, mobilisation générale, deux accélérations.",
      "15 min — quinze minutes de course continue. On annonce à mi-parcours qu’il en reste la moitié — c’est le moment où le temps paraît le plus long.",
      "4 min — marche de récupération et boisson.",
      "5 min — retour au calme : marche lente et étirements longs, mollets et cuisses en premier.",
    ],
    undefined,
    "Le passage difficile est presque toujours entre la huitième et la onzième minute. S’il le franchit sans s’arrêter, il saura qu’il existe et qu’il passe : c’est ce qui rendra les sorties suivantes plus faciles, plus que la condition physique.",
  ),

  f("dh-course-11", "Course et endurance", "Sortie 11 · six minutes sur une petite boucle",
    [
      "On change de terrain : une boucle courte, connue, qu’on refait plusieurs fois pendant six minutes. On ne compte pas les tours, ni lui ni l’adulte.",
      "Utiliser une boucle de cent à deux cents mètres qu’on peut faire plusieurs fois : un terrain, une cour, un pâté de maisons.",
      "Un jour où ça ne va pas : quatre minutes.",
    ],
    [
      "7 min — échauffement complet, avec trois accélérations progressives.",
      "2 min — reconnaissance : on marche un tour de la boucle ensemble en choisissant un point de passage — un arbre, un poteau, un portail.",
      "6 min — six minutes de course, sans compter les tours. L’adulte reste au point de passage et lui dit seulement quand les six minutes sont finies.",
      "5 min — marche de récupération : il raconte ce qu’il a remarqué en repassant toujours au même endroit — le vent, une petite pente, un chien derrière une grille.",
      "5 min — retour au calme et étirements. Rien ne s’écrit.",
    ],
    undefined,
    "Ce qu’on regarde, c’est l’allure à chaque passage devant l’adulte : si elle reste la même d’un tour à l’autre, il sait déjà se régler sur une boucle courte. S’il part vite et ralentit beaucoup, on lui rappellera la prochaine fois de partir plus lentement que ce qui lui paraît naturel. S’il demande combien de tours il a faits, la réponse est vraie : personne ne les a comptés.",
  ),

  f("dh-course-12", "Course et endurance", "Sortie 12 · les côtes courtes",
    [
      "Une pente douce d’une trentaine de mètres, un talus, une rue en montée. On monte en courant, on redescend en marchant : la descente en courant fatigue les cuisses pour rien.",
      "La montée n’est pas un sprint — on cherche des appuis courts et des bras qui aident, pas de la vitesse.",
      "Un jour où ça ne va pas : quatre montées au lieu de six, et on allonge la course lente.",
    ],
    [
      "7 min — échauffement sur le plat : marche rapide, montées de genoux, talons-fesses, deux accélérations.",
      "10 min — six montées de trente mètres environ, descente en marchant entre chaque. Consigne : petits pas, bras qui travaillent, regard devant et non sur les pieds.",
      "8 min — huit minutes de course lente sur le plat, pour finir en endurance.",
      "5 min — retour au calme : étirements des mollets en priorité, ce sont eux qui ont travaillé.",
    ],
    undefined,
    "On regarde les appuis : s’il monte à grandes enjambées, il s’épuise ; s’il raccourcit ses pas tout seul à la troisième montée, il a compris quelque chose de la course en pente sans qu’on ait eu à le lui expliquer deux fois.",
  ),

  f("dh-course-13", "Course et endurance", "Sortie 13 · dix-huit minutes",
    [
      "Presque vingt minutes. Choisir un parcours en aller-retour plutôt qu’en boucle : le demi-tour donne un repère clair et rassurant.",
      "Emporter de l’eau. S’il fait chaud, partir tôt et choisir de l’ombre.",
      "Un jour où ça ne va pas : quinze minutes, qu’il sait déjà tenir.",
    ],
    [
      "6 min — échauffement : marche rapide, mobilisation, deux accélérations.",
      "18 min — dix-huit minutes de course continue, en aller-retour : neuf minutes dans un sens, demi-tour, neuf minutes pour rentrer.",
      "3 min — marche et boisson.",
      "3 min — retour au calme et étirements.",
    ],
    undefined,
    "Le demi-tour est le bon endroit pour regarder : s’il y arrive en pouvant encore parler, le retour se fera. S’il y arrive muet, on fait demi-tour plus tôt la prochaine fois, sans en faire une histoire.",
  ),

  f("dh-course-14", "Course et endurance", "Sortie 14 · la pyramide",
    [
      "Une séance qui monte puis redescend : une, deux, trois, deux, une minute d’effort, avec une minute de marche entre chaque. C’est plus varié, donc plus court à vivre qu’un bloc continu de même durée.",
      "Les blocs de trois minutes sont à allure de conversation ; ceux d’une minute sont un peu plus rapides.",
      "Un jour où ça ne va pas : on supprime la redescente et on s’arrête après le bloc de trois minutes.",
    ],
    [
      "6 min — échauffement : marche rapide, montées de genoux, pas chassés, trois accélérations.",
      "13 min — la pyramide : 1 min de course, 1 min de marche, 2 min de course, 1 min de marche, 3 min de course, 1 min de marche, 2 min de course, 1 min de marche, 1 min de course.",
      "6 min — six minutes de course lente d’un seul trait, pour finir.",
      "5 min — retour au calme et étirements.",
    ],
    undefined,
    "On regarde s’il sait changer d’allure à la demande : courir plus vite sur une minute et plus lentement sur trois, c’est une compétence à part entière. S’il court tout à la même vitesse, on lui donne la prochaine fois un repère concret — « celle-ci, on la court comme si on rattrapait quelqu’un ».",
  ),

  f("dh-course-15", "Course et endurance", "Sortie 15 · vingt minutes",
    [
      "Le plus long bloc de l’année. Il est à sa portée s’il a fait les précédentes, et il faut le lui dire avant de partir, calmement.",
      "Partir volontairement plus lentement que d’habitude sur les cinq premières minutes : c’est la seule chose qui fasse la différence.",
      "Un jour où ça ne va pas : dix-huit minutes, ou quinze. Ce n’est pas une marche arrière, c’est la même séance dans une version qui tient.",
    ],
    [
      "6 min — échauffement : marche rapide, mobilisation complète, deux accélérations progressives.",
      "20 min — vingt minutes de course continue. On annonce les quarts : cinq, dix, quinze. Le dernier quart se court comme on veut, on peut accélérer.",
      "2 min — marche et boisson.",
      "2 min — étirements courts, mollets et cuisses.",
    ],
    undefined,
    "Ce qu’on regarde n’est plus le souffle mais la tête : à quel moment il a pensé à s’arrêter, et ce qui l’a fait continuer. Cette réponse-là lui servira plus longtemps que les vingt minutes.",
  ),

  f("dh-course-16", "Course et endurance", "Sortie 16 · la boucle de novembre, retrouvée",
    [
      "On ressort le papier de la sortie 7 et on refait le même chemin. Il n’y a aucun temps à retrouver : il n’y en a jamais eu, et on ne chronomètre pas non plus aujourd’hui.",
      "S’il demande s’il va plus vite qu’en novembre, la réponse est vraie : personne ne l’a mesuré, et ce n’est pas ce qu’on regarde.",
      "Un jour où ça ne va pas : la moitié de la boucle en courant, le reste en marchant. La séance est entière quand même.",
    ],
    [
      "7 min — échauffement complet : marche rapide, mobilisation, trois accélérations progressives.",
      "3 min — reconnaissance : on remarche les cent premiers mètres, comme en novembre.",
      "10 min — la boucle, sans montre, à l’allure qu’il choisit.",
      "5 min — marche, et on ressort le dessin de novembre : il y ajoute ce qu’il a remarqué aujourd’hui sur le chemin.",
      "5 min — retour au calme et étirements.",
    ],
    undefined,
    "On regarde ce qu’on a regardé toute l’année : s’il a couru en pouvant encore parler, et s’il a réglé son allure seul, sans qu’on le lui dise. Si l’envie de comparer vient de lui, on l’écoute sans ajouter de chiffre, et on lui demande comment il se sent.",
  ),

  /* ------------------------------------------------------------------ *
   * Jeux de ballon — 17 fiches. Du contrôle au mur au un contre un. On
   * ne compte rien, on ne chronomètre rien et on n'écrit aucun chiffre :
   * chaque fiche dit quel geste on regarde, et c'est tout ce qu'on garde.
   * ------------------------------------------------------------------ */

  f("dh-ballon-01", "Jeux de ballon", "Ballon 1 · le mur, et le pied qui pose",
    [
      "Un ballon et un mur suffisent. Se placer à trois mètres, pas plus : de près, le ballon revient vite, et c’est ce qu’on veut apprendre à recevoir.",
      "La consigne technique tient en une phrase : le pied qui ne frappe pas se pose à côté du ballon, pas derrière.",
      "On ne compte rien et on n’écrit rien : ce qu’on regarde, c’est si le ballon revient droit, et où se pose le pied d’appui.",
    ],
    [
      "5 min — échauffement : trotter autour du ballon, le pousser du pied droit puis du pied gauche en marchant, dix touches de chaque côté.",
      "10 min — passes contre le mur, pied droit uniquement, sans compter. On cherche seulement à ce que le ballon revienne droit.",
      "8 min — même chose, pied gauche. Puis on alterne, une passe de chaque pied, en regardant seulement si le ballon revient droit vers le pied qui l’attend.",
      "7 min — jeu : faire passer le ballon entre deux plots, de six mètres. Dix essais, sans rien compter : entre deux essais, on ne parle que du pied d’appui, jamais de l’endroit où le ballon est passé.",
    ],
    undefined,
    "On regarde le pied d’appui, pas le résultat : s’il le pose à côté du ballon, la passe part droit presque toute seule. S’il tire en déséquilibre, c’est là qu’on revient la prochaine fois, avant d’ajouter de la distance.",
  ),

  f("dh-ballon-02", "Jeux de ballon", "Ballon 2 · le slalom de plots",
    [
      "Six repères en ligne, espacés d’un mètre et demi : plots, pierres, bouteilles, chaussures. Ce qu’on a sous la main fait l’affaire.",
      "Consigne : petites touches, ballon près du pied, tête levée une fois sur deux. Vitesse en dernier, jamais en premier.",
      "Un jour où ça ne va pas : on écarte les repères à deux mètres et on reste au pas.",
    ],
    [
      "5 min — échauffement : conduite libre du ballon en marchant, puis en trottinant, changements de direction au signal.",
      "10 min — le slalom en marchant, aller et retour, dix fois. On ne compte rien : on cherche à garder le ballon près du pied entre les repères.",
      "8 min — le slalom en trottinant, dix passages, sans compter. Si un repère est touché, on le remet en place et on continue.",
      "7 min — le slalom à l’allure qu’il choisit, sans chronomètre : trois passages, et entre chaque, il dit s’il veut les repères plus serrés ou plus écartés.",
    ],
    undefined,
    "Si le ballon s’éloigne de plus d’un mètre entre deux repères, c’est qu’il pousse au lieu de conduire : la prochaine fois on resserre les plots plutôt que d’accélérer. La tête levée viendra après, elle ne se demande pas avant que les pieds soient tranquilles.",
  ),

  f("dh-ballon-03", "Jeux de ballon", "Ballon 3 · jonglages à la main et à la cuisse",
    [
      "On commence par le plus facile : rattraper à la main après un rebond, puis après deux, puis frapper de la cuisse.",
      "Le jonglage rate beaucoup, par nature. Le dire avant de commencer évite qu’il le découvre comme un échec : « ça tombe, c’est normal, on ramasse ».",
      "On ne compte pas les touches et on n’écrit rien : on regarde la cuisse, et le ballon qui remonte droit ou non.",
    ],
    [
      "5 min — échauffement : ballon en main, le lancer et le rattraper en marchant, puis en trottinant, puis avec un tour sur soi-même entre les deux.",
      "8 min — lâcher le ballon, le laisser rebondir une fois, le frapper de la cuisse, le rattraper à la main. Vingt essais de chaque cuisse.",
      "10 min — enchaîner : cuisse, rebond, cuisse, sans compter. Quand le ballon s’échappe, on le ramasse et on reprend, cinq minutes de chaque cuisse.",
      "7 min — jeu libre : il invente une suite — main, cuisse, tête, main — et la montre à l’adulte, qui essaie de la refaire à son tour.",
    ],
    undefined,
    "On regarde la cuisse : à l’horizontale au moment du contact, le ballon remonte droit ; inclinée, il part devant. On regarde aussi s’il ramasse le ballon sans commentaire quand il tombe : ce geste-là, répété, est ce que la séance installe.",
  ),

  f("dh-ballon-04", "Jeux de ballon", "Ballon 4 · passes à deux, cinq puis huit mètres",
    [
      "À deux, face à face. On commence à cinq mètres, et on ne recule que lorsque le ballon reste près de lui à la réception, sans rien compter.",
      "L’adulte joue vraiment : des passes qui arrivent au pied, pas des passes gentilles qui obligent à courir partout.",
      "Un jour où ça ne va pas : on reste à cinq mètres toute la séance, c’est très bien.",
    ],
    [
      "5 min — échauffement : se faire des passes en marchant côte à côte, puis en trottinant.",
      "8 min — passes à cinq mètres, à l’arrêt, deux touches autorisées : contrôler, puis passer. On ne compte pas, on cherche un rythme régulier.",
      "9 min — passes à huit mètres. Le ballon doit arriver au sol, pas en l’air. Quand il s’échappe, on va le chercher et on reprend, sans rien compter.",
      "8 min — jeu : la passe dans la porte — deux plots à un mètre d’écart entre les deux joueurs, le ballon doit passer entre eux. Vingt essais.",
    ],
    undefined,
    "On regarde le contrôle, pas la passe : si le ballon reste à moins d’un pas de lui après l’avoir reçu, tout le reste devient facile. S’il part loin à chaque fois, on revient à cinq mètres et on travaille l’amorti — le pied qui recule au moment du contact.",
  ),

  f("dh-ballon-05", "Jeux de ballon", "Ballon 5 · tirs sur une cible large",
    [
      "Une cible qu’on ne peut pas rater souvent : une porte de garage, un mur entre deux repères de trois mètres, un carton posé contre un mur.",
      "On tire de six mètres, du cou-de-pied, avec trois pas d’élan. Consigne : regarder le ballon au moment de la frappe, pas la cible.",
      "Un jour où ça ne va pas : on avance à quatre mètres. La cible reste atteignable, c’est tout ce qui compte.",
    ],
    [
      "5 min — échauffement : conduite de ballon, deux accélérations avec le ballon, dix touches de chaque pied.",
      "10 min — vingt tirs du pied droit, sans compter, en cherchant une frappe propre. L’adulte renvoie ou ramasse.",
      "8 min — quinze tirs du pied gauche, même consigne.",
      "7 min — jeu : trois séries de cinq tirs, sans compter. Entre deux séries, on ne parle que du cou-de-pied, jamais de la cible.",
    ],
    undefined,
    "Ce qu’on regarde, c’est le pied qui frappe : le cou-de-pied donne un ballon qui file droit, la pointe donne un ballon qui part n’importe où. S’il tire de la pointe, on ralentit l’élan la prochaine fois plutôt que de reculer la cible.",
  ),

  f("dh-ballon-06", "Jeux de ballon", "Ballon 6 · la conduite, ballon près du pied",
    [
      "On reprend le slalom de la séance 2, sans chronomètre : on travaille la conduite, pas la vitesse.",
      "Consigne annoncée avant : le ballon passe de chaque côté des repères, à portée de pied. S’il s’éloigne, on ralentit plutôt que de courir après. Un repère touché se remet en place, et on continue.",
      "Un jour où ça ne va pas : on fait le slalom en marchant, repères écartés à deux mètres.",
    ],
    [
      "6 min — échauffement : trottiner avec le ballon, changements de direction, dix touches de chaque pied.",
      "8 min — cinq passages du slalom en marchant, pour retrouver la sensation.",
      "10 min — six passages en trottinant, une minute de récupération entre chaque. À chaque passage, un seul point à soigner, annoncé avant : l’intérieur du pied, puis l’extérieur, puis la tête levée entre deux repères.",
      "6 min — jeu : le slalom à l’envers, en reculant sur les deux premiers repères. Juste pour rire et pour finir léger.",
    ],
    undefined,
    "On regarde la distance entre le pied et le ballon : s’il reste à portée de pied à chaque repère, la conduite est là, quelle que soit l’allure. S’il pousse le ballon loin devant, on resserre les repères la prochaine fois plutôt que d’accélérer. On ne compare à aucun papier de la séance 2 : il n’y en a pas.",
  ),

  f("dh-ballon-07", "Jeux de ballon", "Ballon 7 · jonglages au pied",
    [
      "Le plus difficile de la série, et il faut le dire : au pied, le ballon s’échappe presque à chaque fois, pour tout le monde. C’est la nature du geste.",
      "On commence ballon en main, lâché sur le pied, avec un rebond au sol entre chaque touche. Sans rebond, c’est pour plus tard.",
      "Un jour où ça ne va pas : on reste sur la cuisse, qui est connue depuis la séance 3.",
    ],
    [
      "5 min — échauffement : conduite, puis vingt touches de cuisse de chaque côté pour retrouver le geste.",
      "10 min — ballon lâché de la main sur le pied, rattrapé à la main. Trente essais par pied. La cheville reste ferme, orteils vers le haut.",
      "8 min — pied, rebond au sol, pied, rebond, sans compter. Quand le ballon s’échappe, on le rattrape à la main et on reprend.",
      "7 min — sans rebond, cinq essais seulement, juste pour voir. Puis retour au pied avec rebond, pour finir sur un geste connu.",
    ],
    undefined,
    "On regarde la cheville : molle, le ballon part de travers ; ferme, orteils vers le haut, il remonte droit. C’est la seule chose à lui dire aujourd’hui. Finir toujours par un exercice connu, pas par les essais sans rebond.",
  ),

  f("dh-ballon-08", "Jeux de ballon", "Ballon 8 · le mur, en une seule touche",
    [
      "On reprend le mur de la première séance, sans contrôler : le ballon revient, on le renvoie directement.",
      "Se placer à quatre mètres. Plus près, ça va trop vite ; plus loin, la passe n’a pas assez de force pour revenir.",
      "Un jour où ça ne va pas : on autorise deux touches, comme en septembre.",
    ],
    [
      "5 min — échauffement : conduite, passes au mur en deux touches, pour retrouver le rythme.",
      "10 min — passes en une touche, pied droit, sans compter. Quand le ballon s’échappe, on le ramène et on reprend.",
      "8 min — même chose, pied gauche.",
      "7 min — jeu : en une touche, alterner pied droit et pied gauche, cinq essais. S’il préfère revenir à deux touches, on revient à deux touches.",
    ],
    undefined,
    "On regarde le corps avant la frappe : en une touche, il n’a pas le temps de se replacer après coup, il doit être orienté vers le mur avant que le ballon arrive. S’il n’y arrive pas encore en une touche, on revient à deux touches sans en parler : c’est le même travail, un peu plus lent.",
  ),

  f("dh-ballon-09", "Jeux de ballon", "Ballon 9 · conduire, puis tirer",
    [
      "On assemble deux choses déjà connues : le slalom de la séance 2 et le tir de la séance 5. C’est le premier enchaînement de l’année.",
      "Quatre repères de slalom, puis dix mètres de course avec le ballon, puis le tir sur la cible large.",
      "Un jour où ça ne va pas : on supprime le slalom et on garde conduite plus tir.",
    ],
    [
      "6 min — échauffement : conduite libre, deux passages de slalom, cinq tirs sans élan.",
      "10 min — l’enchaînement complet, quinze fois, sans compter. On cherche seulement à ne pas s’arrêter entre le dernier plot et le tir.",
      "8 min — l’enchaînement en trois séries de cinq, toujours sans compter. Entre deux séries, on ne parle que de la dernière touche avant le tir.",
      "6 min — jeu : le même enchaînement du pied gauche, dix essais, sans compter.",
    ],
    undefined,
    "Le point délicat est la dernière touche avant le tir : trop courte, il tire dans ses pieds ; trop longue, il court après le ballon. S’il s’arrête pour se replacer, c’est normal pour l’instant — on regardera à la séance 14 si ça s’enchaîne mieux.",
  ),

  f("dh-ballon-10", "Jeux de ballon", "Ballon 10 · ballon à la main, passes et cible",
    [
      "Une séance sans les pieds : passes à deux mains, à une main, passes à rebond, et une cible à viser. Le geste change, l’exigence baisse, et tout redevient plus facile.",
      "Cible : un seau, un carton, un cerceau posé à quatre mètres.",
      "Un jour où ça ne va pas : on rapproche la cible d’un mètre et on garde tout le reste.",
    ],
    [
      "5 min — échauffement : se lancer le ballon en marchant, puis en trottinant, puis avec un rebond au sol entre les deux.",
      "9 min — passes à deux mains puis à une main, à cinq mètres, sans compter. Quand le ballon tombe, on le ramasse et on reprend.",
      "9 min — la cible : vingt lancers en cloche dans le seau, depuis quatre mètres, sans compter. Puis on recule d’un mètre et on refait dix lancers.",
      "7 min — jeu : la passe à rebond qui doit toucher un repère au sol avant d’arriver. Quinze essais.",
    ],
    undefined,
    "On regarde ce qu’il change tout seul entre quatre et cinq mètres : s’il lance plus haut plutôt que plus fort, il a compris la trajectoire en cloche. Sinon, on le lui montre une fois, sans insister.",
  ),

  f("dh-ballon-11", "Jeux de ballon", "Ballon 11 · dix tirs, dix arrêts",
    [
      "On joue à deux, chacun son tour gardien et tireur. Un but marqué par deux repères espacés de deux mètres.",
      "L’adulte tire sans forcer et sans faire exprès de rater : c’est ce qui rend les arrêts vrais.",
      "Un jour où ça ne va pas : on élargit le but d’un mètre et on tire de plus loin.",
    ],
    [
      "5 min — échauffement : passes à deux, puis cinq tirs chacun sans gardien.",
      "9 min — il garde le but, l’adulte tire dix fois de huit mètres. On ne compte ni les arrêts ni les buts.",
      "9 min — on échange : il tire dix fois, l’adulte garde, sans rien compter non plus.",
      "7 min — deuxième tour des deux rôles, cinq tirs chacun. Dans le but, un seul rappel avant de commencer : sur la pointe des pieds, genoux fléchis.",
    ],
    undefined,
    "Dans le but, on regarde les appuis : s’il attend debout, jambes tendues, il part en retard ; s’il est sur la pointe des pieds, genoux fléchis, il part à l’heure. C’est la seule chose à lui dire aujourd’hui, et elle suffit.",
  ),

  f("dh-ballon-12", "Jeux de ballon", "Ballon 12 · le jonglage alterné",
    [
      "On enchaîne ce qui a été travaillé séparément : pied, cuisse, main, et si l’envie vient, la tête.",
      "La règle est qu’on ne peut pas utiliser deux fois de suite la même surface. C’est ce qui fait tout l’intérêt, et toute la difficulté.",
      "Un jour où ça ne va pas : on autorise un rebond au sol entre chaque touche.",
    ],
    [
      "5 min — échauffement : vingt touches de cuisse, vingt de pied avec rebond, dix lancers-rattrapés à la main.",
      "10 min — la suite imposée : pied droit, cuisse droite, main. Trente essais, en reprenant à chaque chute.",
      "8 min — la suite libre, sans deux fois la même surface de suite, et sans compter. Quand le ballon tombe, on le ramasse et on reprend.",
      "7 min — jeu : à deux, on s’envoie le ballon et chacun doit le toucher deux fois avant de le renvoyer.",
    ],
    undefined,
    "Ce qui progresse ici, c’est le temps de décision entre deux touches. S’il regarde encore ses pieds au lieu du ballon, on revient aux séries avec rebond, qui laissent le temps de lever les yeux.",
  ),

  f("dh-ballon-13", "Jeux de ballon", "Ballon 13 · passe et va",
    [
      "Le premier exercice en mouvement à deux : il passe le ballon, puis court immédiatement recevoir le retour trois mètres plus loin.",
      "Le mot d’ordre est « après la passe, tu bouges ». C’est le geste qui manque presque toujours, et il s’apprend ici.",
      "Un jour où ça ne va pas : on fait l’exercice en marchant, il garde tout son sens.",
    ],
    [
      "6 min — échauffement : passes à l’arrêt, puis passes en marchant côte à côte sur vingt mètres, aller-retour.",
      "10 min — passe et va, sur un aller de trente mètres : passe, trois pas de course en avant, réception, passe. Huit allers-retours.",
      "8 min — même chose en essayant de ne jamais arrêter le ballon : contrôle et passe dans le même mouvement.",
      "6 min — jeu : traverser le terrain à deux en se faisant six passes, sans que le ballon touche une ligne.",
    ],
    undefined,
    "On regarde s’il court après avoir passé, ou s’il regarde son ballon partir. Le jour où il part avant que l’adulte ait touché le ballon, l’exercice est acquis et on peut jouer plus vite.",
  ),

  f("dh-ballon-14", "Jeux de ballon", "Ballon 14 · les cinq postes de tir",
    [
      "Cinq repères autour de la cible, à des distances et des angles différents : face à huit mètres, à droite, à gauche, de près en biais, de loin dans l’axe.",
      "Trois tirs par poste, quinze au total. Il découvre seul qu’un tir de côté ne se frappe pas comme un tir de face.",
      "Un jour où ça ne va pas : trois postes au lieu de cinq, ceux qu’il préfère.",
    ],
    [
      "6 min — échauffement : conduite, passes au mur, cinq tirs libres.",
      "12 min — le tour des cinq postes, trois tirs chacun, sans rien noter. L’adulte regarde, sans le dire, à quel poste le geste se défait — le pied d’appui qui recule, le buste qui part en arrière.",
      "7 min — le poste le plus difficile, dix tirs de plus, sans compter : c’est du travail, pas un test.",
      "5 min — jeu : un tour complet en tirant du pied gauche, pour finir sur autre chose.",
    ],
    undefined,
    "Ce qui est intéressant, c’est l’écart entre les postes : presque tout le monde a un côté facile et un côté difficile. Nommer lequel est le sien, et y revenir en début de séance suivante, avant la fatigue.",
  ),

  f("dh-ballon-15", "Jeux de ballon", "Ballon 15 · une séance du pied faible",
    [
      "Toute la séance se fait du pied le moins habile. C’est frustrant et il faut l’annoncer : « aujourd’hui, tout va rater plus souvent, c’est le but ».",
      "On baisse toutes les exigences d’un cran : cible plus proche, slalom plus large, distances plus courtes.",
      "Un jour où ça ne va pas : on alterne une série pied faible, une série pied fort.",
    ],
    [
      "6 min — échauffement : conduite du pied faible seulement, en marchant puis en trottinant.",
      "8 min — passes au mur du pied faible, à trois mètres, deux touches autorisées, sans compter.",
      "9 min — slalom du pied faible, repères écartés à deux mètres. Huit passages, sans chronomètre.",
      "7 min — dix tirs du pied faible sur la cible large, avancée à quatre mètres.",
    ],
    undefined,
    "On ne compare à rien, ni au pied fort ni à septembre. On regarde le pied d’appui, comme à la première séance : du pied faible, il se place souvent derrière le ballon au lieu d’à côté, et c’est la seule chose à lui montrer. Si la frustration monte, on passe une série au pied fort et on revient.",
  ),

  f("dh-ballon-16", "Jeux de ballon", "Ballon 16 · un contre un, deux petits buts",
    [
      "Terrain de quinze mètres sur dix, deux petits buts faits de repères espacés d’un mètre et demi. Pas de gardien.",
      "Deux mi-temps de sept minutes, avec un changement de camp. On ne tient pas le score : après chaque but, on rejoue au milieu, et personne ne dit qui mène.",
      "Un jour où ça ne va pas : on joue en coopération — on attaque ensemble le même but, et le ballon passe par les deux avant le tir.",
    ],
    [
      "6 min — échauffement : conduite, passes, cinq tirs chacun.",
      "8 min — première mi-temps de sept minutes. L’adulte joue au rythme de l’enfant, sans le laisser marquer exprès et sans l’écraser.",
      "8 min — deuxième mi-temps, après changement de camp et une minute de pause.",
      "8 min — jeu à un but : les deux attaquent la même cible, celui qui récupère le ballon a le droit de tirer. Cinq minutes, puis retour au calme.",
    ],
    undefined,
    "On regarde s’il lève la tête en conduisant, ce qui est la seule façon de voir le but et l’adversaire en même temps. S’il joue tête baissée, on élargit le terrain la prochaine fois : plus d’espace, moins de pression, la tête se lève d’elle-même.",
  ),

  f("dh-ballon-17", "Jeux de ballon", "Ballon 17 · le tour des ateliers de l’année",
    [
      "Quatre ateliers repris parmi ceux de l’année : le mur, le slalom, la cible, le jonglage. Rien ne se compte, rien ne s’écrit, et il n’y a aucun papier à ressortir.",
      "Il choisit l’ordre des ateliers, et il peut rester plus longtemps sur celui qu’il aime.",
      "Ce n’est pas une épreuve : c’est un tour de ce qu’on a joué cette année. Le dire avec ces mots-là avant de commencer.",
    ],
    [
      "5 min — échauffement complet : conduite, passes, touches de cuisse et de pied.",
      "7 min — atelier mur : passes à quatre mètres, en une ou deux touches, comme il préfère.",
      "6 min — atelier slalom : quelques passages à l’allure qu’il choisit, ballon près du pied, sans chronomètre.",
      "6 min — atelier cible : tirs du cou-de-pied depuis six mètres, sans compter.",
      "6 min — atelier jonglage : la suite qu’il veut, main, cuisse, pied. Puis il montre à l’adulte le jeu de l’année qu’il a préféré, et on le joue ensemble pour finir.",
    ],
    undefined,
    "On regarde les gestes qui se font maintenant sans y penser : le pied d’appui à côté du ballon, la cheville ferme, le ballon près du pied dans le slalom. On peut en nommer un, sans chiffre et sans le comparer à septembre. Ce qui ne s’est pas encore installé ne se dit pas aujourd’hui : on le reprendra l’an prochain.",
  ),

  /* ------------------------------------------------------------------ *
   * Vélo — 16 fiches. Chacune tient la consigne : on repère le trajet sur
   * un plan avant de partir, et on le raconte au retour. Le plan est
   * l'objet de la séance autant que le vélo. La séance fait trente minutes
   * en tout — vérifier le vélo, s'équiper, le plan, la sortie, le récit —,
   * donc on roule quinze à vingt minutes : à 8-10 km/h, arrêts compris, un
   * kilomètre à l'automne, deux l'hiver, trois au plus en fin d'année.
   * Toujours un adulte avec lui, des rues calmes du quartier, en plein jour,
   * casque attaché. Rien ne se chronomètre ni ne se compare d'une sortie à
   * l'autre, et son récit ne se corrige pas.
   * ------------------------------------------------------------------ */

  f("dh-velo-01", "Vélo", "Sortie 1 · vérifier le vélo, et le tour du quartier",
    [
      "Avant tout, une vérification que l’on refera à chaque sortie et qu’il apprend aujourd’hui : freins, pneus, chaîne, selle, casque. Le casque se porte attaché, pour lui comme pour l’adulte qui roule avec lui.",
      "Le trajet est très court — un kilomètre environ, le tour de quelques pâtés de maisons par des rues calmes — parce que la séance porte surtout sur la vérification et sur le plan.",
      "Imprimer ou afficher un plan du quartier sur papier. Le plan reste à la maison : c’est de mémoire qu’il raconte au retour.",
    ],
    [
      "8 min — la vérification, dans l’ordre, à voix haute : les deux freins serrent avant que le levier touche le guidon ; les pneus sont durs sous le pouce ; la chaîne est huilée et ne saute pas ; la selle est à la bonne hauteur, jambe presque tendue en bas ; le casque tient sans bouger quand on secoue la tête.",
      "6 min — le plan : on trace au feutre une boucle d’un kilomètre environ autour de la maison, par des rues calmes, et on nomme les trois rues à voix haute.",
      "10 min — la sortie, adulte devant, enfant derrière, sur ce kilomètre et à allure tranquille. On s’arrête à chaque changement de rue — trois arrêts — pour nommer la rue.",
      "6 min — au retour : il raconte le trajet dans l’ordre, avec les noms de rue qui lui reviennent, sans regarder le plan. On écoute sans rien corriger. Puis on pose le plan et on suit la boucle du doigt, ensemble.",
    ],
    undefined,
    "La vérification, c’est ce qu’on veut qu’il fasse seul en juin : on regarde quels points il retrouve sans aide, et on lui laisse ceux-là la prochaine fois. Pour le récit, s’il oublie une rue, on ne la souffle pas — on peut lui demander ce qu’il y avait au coin, et le nom revient souvent tout seul ; s’il ne revient pas, on passe.",
  ),

  f("dh-velo-02", "Vélo", "Sortie 2 · deux tournants et trois noms de rue",
    [
      "Une boucle d’un kilomètre environ, par des rues calmes, avec deux virages nets qu’il devra retenir.",
      "Il fait seul la vérification apprise la fois d’avant ; l’adulte ne contrôle qu’à la fin, en repassant sur les cinq points.",
      "Un jour où ça ne va pas : on refait la boucle de la sortie 1, qu’il connaît, et seul le récit est nouveau.",
    ],
    [
      "5 min — vérification du vélo par lui, puis contrôle de l’adulte sur les cinq points. Casques attachés.",
      "6 min — le plan : il trace lui-même le trajet au feutre, et l’adulte l’aide si le trait s’égare. Il lit les trois noms de rue à voix haute, deux fois.",
      "10 min — la sortie, une boucle d’un kilomètre environ, à allure tranquille. Aux deux virages, l’adulte s’arrête, demande simplement « on tourne où ? » et attend la réponse avant de tourner. S’il ne sait pas, l’adulte indique la rue, sans rien ajouter.",
      "9 min — au retour : il raconte le trajet, dans l’ordre, avec les noms qui lui reviennent, et on l’écoute sans corriger. Puis il le redessine sur une feuille blanche, de mémoire, en prenant son temps.",
    ],
    undefined,
    "Le dessin de mémoire en dit plus que le récit : les angles y sont souvent justes avant que les noms le soient. Si les rues sont dans le désordre, on refera la même boucle une deuxième fois plutôt que d’en changer.",
  ),

  f("dh-velo-03", "Vélo", "Sortie 3 · orienter le plan",
    [
      "Une compétence de géographie faite à vélo : un plan se tourne pour que ce qu’on a devant soi soit en haut de la feuille.",
      "Emporter le plan cette fois-ci, dans une poche, et le sortir à trois arrêts prévus.",
      "Un jour où ça ne va pas : deux arrêts au lieu de trois, et une boucle plus courte.",
    ],
    [
      "5 min — vérification du vélo par lui seul, puis casques attachés.",
      "7 min — le plan à la maison : on cherche le nord, on repère trois points sûrs — la maison, une école, un rond-point. On explique qu’on tournera la feuille pendant les arrêts.",
      "13 min — la sortie, une boucle d’un kilomètre et demi environ par des rues calmes, avec trois arrêts d’une minute, pied à terre sur le trottoir. À chaque arrêt : il tourne le plan jusqu’à ce que la rue devant lui corresponde à la rue sur la feuille, puis montre du doigt où l’on est.",
      "5 min — au retour : il raconte le trajet et, s’il s’en souvient, dans quelle direction on est parti — vers le nord, vers le sud. S’il ne sait plus, on passe : son récit ne se corrige pas.",
    ],
    undefined,
    "On regarde s’il tourne le plan spontanément au deuxième arrêt, ou s’il le tient toujours dans le même sens. Tourner la feuille est un geste qui s’installe d’un coup, et une fois installé il ne repart plus.",
  ),

  f("dh-velo-04", "Vélo", "Sortie 4 · deux kilomètres, un arrêt-repère",
    [
      "Un trajet avec un point d’arrivée qui compte, à un kilomètre de la maison environ : une boulangerie, un parc, un banc, une fontaine.",
      "Avoir un but rend le trajet plus court dans la tête. C’est le principal de ce que fait cette séance.",
      "Un jour où ça ne va pas : on choisit un but plus proche et on rentre par le même chemin.",
      "Début novembre, le jour baisse tôt et les feuilles mouillées glissent : on sort en plein jour, en vêtement clair ou en gilet, lumières allumées si c’est la fin de l’après-midi, et on freine plus tôt là où il y a des feuilles.",
    ],
    [
      "5 min — vérification du vélo, par lui, puis on s’équipe : casques attachés, gilet ou vêtement clair.",
      "4 min — le plan : il repère le but, puis trace deux trajets possibles pour y aller. On en choisit un ensemble et on dit pourquoi — moins de voitures, moins de côte.",
      "17 min — la sortie, deux kilomètres aller-retour — un pour aller, un pour revenir —, avec trois minutes d’arrêt au but.",
      "4 min — au retour : il raconte l’aller, puis le retour. Les deux ne se racontent pas pareil, et c’est amusant à remarquer.",
    ],
    undefined,
    "S’il sait dire pourquoi on a choisi ce trajet plutôt que l’autre, c’est qu’il commence à lire un plan et pas seulement à le suivre. C’est ce qu’on cherchera à faire grandir jusqu’à la sortie 14, où il choisira seul.",
  ),

  f("dh-velo-05", "Vélo", "Sortie 5 · freiner, éviter, tourner court",
    [
      "Une séance de maniabilité sur un espace fermé et tout proche — cour, parking vide, terrain, à trois ou quatre cents mètres de la maison — avant de rouler plus loin dans l’année.",
      "Les trois gestes travaillés : freiner des deux freins en même temps, contourner un obstacle sans regarder l’obstacle, et tourner court.",
      "Un jour où ça ne va pas : on garde seulement le freinage, qui est le plus utile.",
    ],
    [
      "4 min — vérification du vélo, en insistant aujourd’hui sur les freins, puis casques attachés et vêtement clair.",
      "3 min — le plan : on regarde où se trouve l’espace choisi et il trace le chemin pour y aller, même s’il est court.",
      "3 min — l’aller, adulte devant, à allure tranquille.",
      "12 min — trois ateliers de quatre minutes : freiner des deux freins avant une ligne tracée à la craie, à petite vitesse, sans déraper — en novembre le sol est souvent mouillé ou couvert de feuilles, et on lui fait sentir que le freinage s’allonge ; slalom entre six repères espacés de trois mètres ; un huit entre deux repères espacés de cinq mètres.",
      "4 min — le retour par le même chemin, en freinant des deux freins à chaque carrefour.",
      "4 min — à la maison : il raconte le trajet et les trois ateliers, comme ils lui reviennent.",
    ],
    undefined,
    "Le point à regarder est le freinage : beaucoup d’enfants n’utilisent qu’un seul frein. S’il ne serre que l’arrière, il s’arrête long ; s’il ne serre que l’avant, il pique du nez. Les deux en même temps, c’est ce qu’on reverra à chaque sortie sans en refaire une séance.",
  ),

  f("dh-velo-06", "Vélo", "Sortie 6 · le trajet des courses",
    [
      "Une sortie utile : on va chercher quelque chose. Un commerce à un kilomètre de la maison environ, donc deux kilomètres aller-retour, avec une sacoche ou un sac à dos.",
      "Rouler avec du poids change l’équilibre. Le lui dire avant, et charger au retour, pas à l’aller. Un achat léger suffit : du pain, quelques fruits.",
      "Un jour où ça ne va pas : on va au commerce le plus proche et on rentre.",
      "Fin novembre, le jour tombe tôt : on part en plein jour, en vêtement clair ou en gilet, lumières allumées si c’est la fin de l’après-midi.",
    ],
    [
      "4 min — vérification du vélo, plus l’attache du sac ou de la sacoche, puis casques attachés.",
      "5 min — le plan : il trace le trajet par des rues calmes, repère les carrefours à traverser, et dit à quels endroits il roulera derrière l’adulte.",
      "17 min — la sortie, deux kilomètres aller-retour, avec un achat rapide au milieu — trois minutes environ.",
      "4 min — au retour : il raconte le trajet et dit ce qui a changé au retour, avec le sac chargé — l’équilibre, le freinage plus long, les démarrages.",
    ],
    undefined,
    "On regarde la conduite chargée : s’il élargit ses trajectoires et freine plus tôt sans qu’on le lui dise, il a senti le poids et il s’y est adapté. C’est exactement ce qu’on voulait que cette sortie lui apprenne.",
  ),

  f("dh-velo-07", "Vélo", "Sortie 7 · la première côte",
    [
      "Une montée franche mais courte — cent à deux cents mètres —, à moins d’un kilomètre de la maison, qu’on aura repérée en voiture ou à pied avant.",
      "Le vrai enseignement est le changement de vitesse : on passe sur le petit plateau avant la côte, pas dedans.",
      "Un jour où ça ne va pas : on monte à pied à côté du vélo, ce qui n’est pas un échec et qu’il faut dire avant de partir.",
      "Fin novembre, la chaussée est souvent mouillée et le jour tombe tôt : on sort en plein jour, en vêtement clair, lumières allumées si c’est la fin de l’après-midi. La descente du retour se fait doucement, les deux freins serrés par petites touches — et à pied si elle est raide ou glissante.",
    ],
    [
      "5 min — vérification du vélo, avec un essai des vitesses à l’arrêt puis en roulant sur vingt mètres. Casques attachés.",
      "5 min — le plan : on repère la côte sur la carte et, si le plan porte des courbes ou des teintes, on remarque qu’elles l’annoncent. On trace le trajet : deux kilomètres aller-retour au plus.",
      "16 min — la sortie : un peu moins d’un kilomètre jusqu’en haut de la côte, montée comprise, un arrêt de deux minutes en haut pour souffler et regarder ce qu’on voit, puis le retour par le même chemin.",
      "4 min — au retour : il raconte le trajet, et ce qu’il a senti dans la côte — le moment où il a changé de vitesse, ce que ça a fait dans les jambes.",
    ],
    undefined,
    "On regarde quand il change de vitesse. Changer dans la côte, sous l’effort, fait sauter la chaîne et fatigue ; changer avant est ce qui distingue quelqu’un qui monte de quelqu’un qui souffre. S’il change trop tard, on lui donnera le signal à voix haute la prochaine fois, une seule fois.",
  ),

  f("dh-velo-08", "Vélo", "Sortie 8 · l’échelle du plan",
    [
      "Une séance où l’on mesure sur le plan : avant de partir, il mesure la boucle avec l’échelle et la découpe en morceaux de cinq cents mètres, chacun fini par un repère — un feu, une boulangerie, un arbre. En roulant, on s’arrête à chaque repère : la longueur lue sur la feuille devient une longueur roulée.",
      "Ni compteur ni application : c’est l’échelle du plan qui mesure. La boucle fait un kilomètre et demi environ, trois morceaux : c’est le plein hiver, souvent après plusieurs semaines sans vélo, et on reste court.",
      "Un jour où ça ne va pas : on ne roule que le premier morceau, aller et retour.",
      "Fin janvier : gants, tour de cou, vêtement clair ou gilet, lumières si le jour baisse, et on rentre bien avant la nuit. S’il a gelé et que la chaussée brille, on ne sort pas à vélo : on fait le plan, puis on va voir le premier repère à pied.",
    ],
    [
      "5 min — vérification du vélo, puis on s’équipe : casques attachés, gants, vêtement clair.",
      "8 min — le plan et l’échelle : il dit d’abord, à vue d’œil, si la boucle lui paraît plus courte ou plus longue qu’un kilomètre. Puis on lit la barre d’échelle, on reporte une bande de papier le long du trajet, et on marque un trait tous les cinq cents mètres, chacun sur un repère qu’on nomme.",
      "14 min — la sortie, un kilomètre et demi environ, en trois morceaux. À chacun des deux repères du chemin, une demi-minute d’arrêt, pied à terre : « ici, on a roulé cinq cents mètres », puis « ici, un kilomètre ».",
      "3 min — au retour : il raconte le trajet en s’appuyant sur les repères et, s’il en a envie, dit quel morceau lui a paru le plus long.",
    ],
    undefined,
    "Ce qu’on cherche, c’est qu’une longueur lue sur la feuille devienne une longueur qu’il a roulée. Ce qu’il a dit à vue d’œil ne se juge pas : trop court ou trop long, c’est une information, et l’échelle est là pour ça. S’il trouve qu’un morceau a paru plus long que les autres alors qu’ils font tous cinq cents mètres, c’est une vraie remarque — une montée, un carrefour, le froid — et on cherche ensemble pourquoi.",
  ),

  f("dh-velo-09", "Vélo", "Sortie 9 · un trajet en trois morceaux",
    [
      "La sortie où l’on apprend à découper un trajet : une boucle de deux kilomètres par des rues calmes, coupée en trois par deux pauses courtes.",
      "Lui annoncer le découpage avant de partir : jusqu’au pont, pause, jusqu’au rond-point, pause, retour. Trois morceaux valent mieux qu’un.",
      "Un jour où ça ne va pas : demi-tour à la première pause, qu’on garde.",
      "Début février : gants, vêtement clair, lumières si le jour baisse, et on rentre avant la nuit. Si la chaussée est gelée, on ne sort pas à vélo : on fait le plan, et le premier morceau à pied.",
    ],
    [
      "5 min — vérification du vélo, par lui seul et sans rappel, puis casques attachés et gants.",
      "5 min — le plan : il trace la boucle, la mesure à l’échelle comme à la sortie 8, et place les deux points de pause.",
      "16 min — la sortie de deux kilomètres, en trois morceaux, avec deux pauses d’une minute.",
      "4 min — au retour : il raconte le trajet en s’aidant des pauses comme repères.",
    ],
    undefined,
    "On regarde s’il utilise les pauses comme points d’appui pour raconter : « d’abord jusqu’au pont, ensuite… ». Découper un trajet en morceaux est la même compétence que découper un problème, et elle se travaille ici sans y toucher.",
  ),

  f("dh-velo-10", "Vélo", "Sortie 10 · le trajet raconté d’avance",
    [
      "On inverse l’ordre habituel : il raconte le trajet avant de partir, en entier, sans plan sous les yeux. Puis on roule, et on ne revient pas sur ce qu’il a dit.",
      "Choisir un trajet déjà fait cette année, de deux kilomètres environ — celui des courses, ou la boucle en trois morceaux —, pour qu’il ait de quoi se souvenir.",
      "Un jour où ça ne va pas : il raconte la moitié du trajet, et on découvre l’autre en roulant.",
    ],
    [
      "4 min — vérification du vélo, puis casques attachés.",
      "8 min — le récit d’avance : il dit chaque changement de direction, dans l’ordre, et l’adulte écrit ce qu’il dit sans le corriger. Puis on pose le plan, il suit le trajet du doigt, et s’il veut ajouter un endroit à la feuille, c’est lui qui l’ajoute.",
      "15 min — la sortie de deux kilomètres, à allure tranquille. À chaque endroit qu’il a ajouté lui-même, on s’arrête quelques secondes pour le regarder.",
      "3 min — au retour : il reprend la feuille et, s’il en a envie, y ajoute ce qui lui revient de la route. L’adulte n’y ajoute rien.",
    ],
    undefined,
    "Ce qui compte est ce qu’il retient sans plan : les trajets se gardent par leurs points remarquables, pas par leurs noms de rue. S’il se souvient d’un arbre, d’un passage à niveau ou d’une boulangerie, c’est exactement la bonne façon de mémoriser un itinéraire.",
  ),

  f("dh-velo-11", "Vélo", "Sortie 11 · la piste cyclable",
    [
      "Une sortie sur une voie protégée — piste cyclable ou voie verte — s’il en existe une à portée de la maison : deux kilomètres et demi aller-retour, chemin jusqu’à la piste compris. C’est l’occasion de rouler sans voitures à côté. S’il n’y en a pas, une allée de parc ouverte aux vélos fait l’affaire, avec les mêmes règles.",
      "Travailler aussi les règles de la piste : tenir sa droite, prévenir avant de doubler, ralentir près des piétons.",
      "Un jour où ça ne va pas : demi-tour plus tôt, au premier banc.",
    ],
    [
      "4 min — vérification du vélo, casques attachés, et rappel des trois règles de la piste.",
      "5 min — le plan : on repère la piste sur la carte, ses accès, et le point de demi-tour, à un kilomètre et quart de la maison.",
      "18 min — la sortie : un kilomètre et quart, demi-tour, un kilomètre et quart. Pour le demi-tour, on se range sur le côté, pied à terre, on regarde derrière soi, puis on repart. Sur la piste, il roule devant, à l’allure qu’il choisit.",
      "3 min — au retour : il raconte le trajet, et dit ce qui est différent entre une piste et une rue.",
    ],
    undefined,
    "Rouler devant demande de choisir son allure et de la tenir : on regarde s’il part vite puis s’essouffle, ou s’il trouve tout de suite une allure qu’il tient. C’est la même chose qu’en course à pied, et on peut le lui faire remarquer — les deux rituels se répondent.",
  ),

  f("dh-velo-12", "Vélo", "Sortie 12 · deux chemins pour le même endroit",
    [
      "Deux chemins dans la même sortie : on va à un endroit situé à un kilomètre environ par un chemin, on revient par un autre.",
      "Avant de partir, il dit à vue d’œil lequel des deux lui paraît le plus long, et pourquoi, puis on les mesure à l’échelle. Lequel est le plus agréable à rouler, seule la sortie le dira.",
      "Un jour où ça ne va pas : on revient par le même chemin, et l’autre reste un trait sur le plan.",
    ],
    [
      "4 min — vérification du vélo, puis casques attachés.",
      "7 min — le plan : on trace les deux chemins par des rues calmes, d’une couleur différente chacun. Il dit lequel lui paraît le plus long, puis on mesure les deux avec l’échelle — un kilomètre environ chacun. Il dit aussi lequel il croit le plus facile à rouler : ce ne sera pas forcément le plus court.",
      "16 min — la sortie : deux kilomètres environ, aller par un chemin, retour par l’autre, à la même allure tranquille dans les deux sens, avec deux minutes de pause à l’endroit choisi. On ne regarde pas l’heure : c’est le chemin qui compte, pas le temps qu’il prend.",
      "3 min — au retour : il raconte les deux chemins, et dit ce qui les rend différents — la longueur lue sur le plan, les carrefours, une côte, le calme, ce qu’on y voit.",
    ],
    undefined,
    "L’idée à saisir est qu’un trajet se décrit de plusieurs façons — sa longueur, ses carrefours, ses côtes, son calme. S’il parle d’autre chose que de la longueur au retour, la séance a fait son travail, quel que soit le chemin qu’il préfère.",
  ),

  f("dh-velo-13", "Vélo", "Sortie 13 · deux kilomètres et demi, et une pause",
    [
      "Une sortie un peu plus longue, avec une pause au demi-tour. Mi-mai, il peut faire chaud : une gourde, et on sort le matin ou quand l’ombre revient, pas aux heures chaudes.",
      "Le découpage s’annonce avant : un kilomètre et quart, pause, un kilomètre et quart.",
      "Un jour où ça ne va pas : demi-tour plus tôt. On garde la pause dans tous les cas.",
    ],
    [
      "4 min — vérification du vélo, par lui, puis casques attachés et gourde remplie.",
      "4 min — le plan : trajet tracé par des rues calmes, mesuré à l’échelle, point de pause choisi.",
      "19 min — la sortie de deux kilomètres et demi, avec une pause de deux minutes au demi-tour : pied à terre, à l’ombre si possible, une gorgée d’eau.",
      "3 min — au retour : le récit du trajet, en s’appuyant sur la pause.",
    ],
    undefined,
    "On regarde le retour plutôt que l’aller : c’est là que se voit ce qu’il a gardé sous le pied. S’il rentre en pédalant régulièrement, il a géré son effort ; s’il rentre fatigué, on gardera cette distance une sortie de plus avant d’allonger.",
  ),

  f("dh-velo-14", "Vélo", "Sortie 14 · il choisit le trajet",
    [
      "La séance où l’on rend la main : il prépare seul le trajet sur le plan, avec deux contraintes — deux kilomètres environ, pas davantage, et seulement des rues calmes du quartier, jamais une route à grande circulation.",
      "L’adulte vérifie la sécurité du tracé et rien d’autre. Si le trajet est bizarre mais sûr, on le fait tel quel : c’est le sien.",
      "Un jour où ça ne va pas : il choisit un trajet plus court, la contrainte de distance saute.",
    ],
    [
      "3 min — vérification du vélo, puis casques attachés et gourde.",
      "8 min — la préparation : il trace, mesure à l’échelle, écrit la liste des changements de direction sur une fiche qu’il emportera. L’adulte ne relit que pour la sécurité.",
      "16 min — la sortie : il guide, l’adulte roule juste derrière lui et passe devant pour traverser un carrefour difficile. Si l’on se trompe, on s’arrête sur le côté, on ressort la fiche et on retrouve le chemin ensemble.",
      "3 min — au retour : il raconte son trajet et, s’il a envie d’y changer quelque chose, il le dit ; on l’écrit sur sa fiche pour une autre fois.",
    ],
    undefined,
    "Se tromper est probable et sans importance : ce qu’on regarde, c’est comment il se remet sur le trajet. S’il ressort sa fiche et cherche le dernier point sûr, il a la méthode ; s’il attend qu’on le sorte d’affaire, on lui montrera ce geste une fois, et une seule.",
  ),

  f("dh-velo-15", "Vélo", "Sortie 15 · trois kilomètres, en trois morceaux",
    [
      "La sortie la plus longue de l’année — trois kilomètres —, par les rues calmes du quartier ou sur la piste de la sortie 11. Choisir un jour sans vent fort et, en juin, éviter les heures chaudes : le matin, ou quand l’ombre revient.",
      "Une gourde, et deux pauses très courtes, le temps d’une gorgée d’eau : on découpe en trois morceaux d’un kilomètre plutôt qu’en deux.",
      "Un jour où ça ne va pas : deux kilomètres, par un trajet qu’il connaît, sans en parler davantage.",
    ],
    [
      "3 min — vérification du vélo, puis casques attachés et gourde remplie.",
      "4 min — le plan : trajet tracé et mesuré à l’échelle, deux points de pause marqués.",
      "20 min — la sortie de trois kilomètres, en trois morceaux d’un kilomètre, avec deux pauses d’une demi-minute, pied à terre.",
      "3 min — au retour : le récit, en s’appuyant sur les deux pauses.",
    ],
    undefined,
    "La difficulté d’une sortie plus longue est rarement dans les jambes : elle est dans le troisième tiers, quand on croit que c’est fini et que ça ne l’est pas. S’il connaît ce moment et l’annonce lui-même, il saura le passer les fois suivantes.",
  ),

  f("dh-velo-16", "Vélo", "Sortie 16 · sa boucle, et la carte dessinée",
    [
      "La dernière sortie de l’année : une boucle de deux kilomètres et demi au plus, préparée par lui dans les rues calmes du quartier, et une carte qu’il dessine au retour. Fin juin, on évite les heures chaudes, et la gourde vient avec.",
      "La carte se fait de mémoire d’abord, sur une feuille blanche, avant de ressortir le plan. C’est ce qui fait la valeur de l’exercice.",
      "Un jour où ça ne va pas : la boucle en trois morceaux de la sortie 9, qu’il connaît, et la carte, même petite.",
    ],
    [
      "3 min — vérification du vélo, par lui, en silence, puis casques attachés.",
      "5 min — la préparation : il trace la boucle, la mesure à l’échelle, écrit sa fiche de directions. L’adulte ne relit que pour la sécurité.",
      "17 min — la sortie, en deux morceaux avec une courte pause entre les deux. Il guide, l’adulte roule juste derrière lui.",
      "5 min — au retour : la carte de mémoire sur feuille blanche — les rues, les carrefours, la côte, le parc, la maison. Puis on pose le vrai plan à côté, et c’est lui qui dit ce qu’il y reconnaît ; on n’ajoute rien à sa carte.",
    ],
    undefined,
    "La carte dessinée montre ce qu’il a vraiment vu du quartier, ce qui n’est pas la même chose que ce qu’il a traversé. On regarde ce qu’il y met en premier — la maison, un tournant, un endroit qu’il aime : c’est par là qu’il tient le trajet. Cette carte se regarde seule : on ne ressort pas celles des mois d’avant pour les poser à côté.",
  ),

  /* ------------------------------------------------------------------ *
   * Parcours et équilibre — 15 fiches. Il installe lui-même, c'est dans
   * la consigne et ce n'est pas un détail : monter le parcours, c'est
   * déjà décider de sa difficulté. On garde les quatre familles de la
   * consigne — sauter, grimper, tenir en équilibre, ramper — et on les
   * combine de plus en plus.
   * ------------------------------------------------------------------ */

  f("dh-parcours-01", "Parcours et équilibre", "Parcours 1 · quatre ateliers, installés par lui",
    [
      "Le matériel est ce qu’on a : une planche, une corde au sol, des caisses, un banc, une branche basse, un carton, deux chaises et un balai.",
      "Il installe. L’adulte ne pose rien à sa place, il ne fait que vérifier la solidité avant le passage.",
      "Un jour où ça ne va pas : trois ateliers au lieu de quatre, et on passe deux fois.",
    ],
    [
      "5 min — échauffement : trotter, dix sauts sur place, rotations des chevilles, des genoux, des épaules.",
      "8 min — l’installation, par lui : un atelier pour sauter, un pour grimper, un pour tenir en équilibre, un pour ramper. Il dit à voix haute ce qu’il faut faire à chaque poste.",
      "12 min — six passages du parcours, tranquillement, avec une minute de repos entre chaque. Aucun chronomètre, ni aujourd’hui ni plus tard.",
      "5 min — rangement, puis retour au calme : étirements des jambes et du dos.",
    ],
    undefined,
    "Ce qu’on regarde, c’est ce qu’il a choisi : un enfant installe presque toujours les ateliers qu’il aime et esquive celui qui l’inquiète. Nommer lequel est absent ou minuscule dit exactement où il faudra revenir, et il n’y a rien à en dire de plus aujourd’hui.",
  ),

  f("dh-parcours-02", "Parcours et équilibre", "Parcours 2 · le même parcours, trois fois",
    [
      "On remonte le parcours de la fois précédente, à l’identique. Refaire du connu, c’est ce qui permet de gagner en aisance sans ajouter de peur.",
      "Trois séries de trois passages, avec du repos entre les séries.",
      "Un jour où ça ne va pas : deux séries, et on allonge le repos.",
    ],
    [
      "5 min — échauffement : trotter, montées de genoux, dix sauts, mobilisation des chevilles.",
      "7 min — l’installation, par lui, en essayant de retrouver les mêmes distances qu’à la séance précédente.",
      "13 min — trois séries de trois passages, une minute et demie entre les séries. Consigne : à chaque série, un geste à soigner — les bras, le regard, la réception.",
      "5 min — rangement et retour au calme.",
    ],
    undefined,
    "L’aisance se voit à la réception des sauts : si les genoux plient et que les bras servent à l’équilibre, c’est en place. Si l’atterrissage claque jambes tendues, on baissera la hauteur avant de la monter.",
  ),

  f("dh-parcours-03", "Parcours et équilibre", "Parcours 3 · la ligne, la poutre, la planche",
    [
      "Une séance entière sur l’équilibre, en trois surfaces de plus en plus étroites : une corde ou une craie au sol, un bord de trottoir ou un banc, une planche posée sur deux briques.",
      "Consigne qui change tout : regarder au bout de la ligne, pas ses pieds.",
      "Un jour où ça ne va pas : on reste à la corde au sol, en variant les façons de la parcourir.",
    ],
    [
      "5 min — échauffement : marcher sur la pointe des pieds, sur les talons, rotations de chevilles, dix équilibres de trois secondes sur chaque pied.",
      "8 min — la ligne au sol, cinq mètres : à l’endroit, à l’envers, de côté, les yeux sur l’arrivée. Huit traversées.",
      "9 min — le banc ou le bord bas : traversée à l’endroit, puis demi-tour au milieu, puis avec un objet dans une main. Dix traversées.",
      "8 min — la planche surélevée de dix centimètres : six traversées lentes, l’adulte à côté sans tenir sauf si on le lui demande.",
    ],
    undefined,
    "Le regard est tout : s’il fixe l’arrivée, il traverse ; s’il regarde ses pieds, il chancelle. Quand on le lui dit une fois et que ça marche aussitôt, il n’y a rien à ajouter — il vient de découvrir un outil qu’il gardera.",
  ),

  f("dh-parcours-04", "Parcours et équilibre", "Parcours 4 · sauter, de trois façons",
    [
      "Trois sauts qui ne se ressemblent pas : pieds joints en avant, cloche-pied en avançant, et saut en contrebas depuis une petite hauteur.",
      "La réception s’apprend avant la hauteur : genoux fléchis, bras devant, on amortit sans bruit.",
      "Un jour où ça ne va pas : on supprime le contrebas et on double les deux autres.",
    ],
    [
      "5 min — échauffement : trotter, dix sauts sur place, dix sauts en avant, mobilisation des chevilles.",
      "8 min — pieds joints : franchir cinq repères espacés, puis trois sauts en longueur, bras lancés vers l’avant. On ne marque rien et on ne mesure rien : on écoute la réception.",
      "9 min — cloche-pied : dix mètres sur le pied droit, dix sur le gauche, trois fois. Puis en slalom entre quatre repères.",
      "8 min — saut en contrebas depuis vingt à trente centimètres : dix réceptions, la consigne étant de ne pas faire de bruit en atterrissant.",
    ],
    undefined,
    "Un atterrissage silencieux est un atterrissage amorti, et c’est la seule chose qu’on regarde ici. La longueur des sauts ne se mesure pas : ce qu’on veut voir, ce sont des bras qui partent devant et des genoux qui plient à l’arrivée.",
  ),

  f("dh-parcours-05", "Parcours et équilibre", "Parcours 5 · ramper, passer dessous, passer dessus",
    [
      "Une séance au ras du sol : passer sous une corde tendue, ramper sur quelques mètres, franchir un obstacle bas sans le toucher.",
      "C’est physiquement exigeant et peu spectaculaire. Prévenir qu’on va se salir, et choisir des vêtements en conséquence.",
      "Un jour où ça ne va pas : on relève la corde de vingt centimètres et on raccourcit le ramper.",
    ],
    [
      "5 min — échauffement : marche à quatre pattes en avant et en arrière, déplacement en crabe, dix mouvements de chat-chameau au sol.",
      "8 min — passer sous une corde tendue à cinquante centimètres, dix fois, sans la toucher. Puis on descend la corde à quarante.",
      "9 min — ramper sur cinq mètres, sur le ventre puis sur le dos, quatre fois chacun.",
      "8 min — franchir une barre basse ou un banc sans poser les mains, huit fois, puis avec un appui des mains, huit fois.",
    ],
    undefined,
    "On regarde s’il utilise ses bras pour tirer ou seulement ses jambes pour pousser : les deux ensemble, c’est ce qui rend le ramper efficace. Cette séance fatigue les épaules plus qu’on ne le croit — s’il en demande moins à mi-parcours, c’est légitime.",
  ),

  f("dh-parcours-06", "Parcours et équilibre", "Parcours 6 · grimper, et redescendre",
    [
      "Un arbre aux branches basses, une structure de jeu, une échelle sûre, un mur d’escalade si l’on en a un à proximité.",
      "La règle de sécurité se dit avant : trois points d’appui sur quatre à tout moment, et on ne monte jamais plus haut que ce qu’on sait redescendre.",
      "Un jour où ça ne va pas : on reste à un mètre de hauteur et on travaille les appuis.",
    ],
    [
      "5 min — échauffement : suspension à une barre basse cinq fois dix secondes, marche à quatre pattes, mobilisation des épaules.",
      "9 min — monter et descendre à faible hauteur, six fois, en nommant à voix haute les trois points d’appui à chaque déplacement.",
      "10 min — monter un peu plus haut, en s’arrêtant à la hauteur qu’il choisit. La descente se travaille autant que la montée : six montées, six descentes lentes.",
      "6 min — jeu : se suspendre à la branche ou à la barre, balancer les jambes, et lâcher quand on veut, sans compter. Trois fois, puis retour au calme.",
    ],
    undefined,
    "Ce qu’on regarde, c’est la descente : beaucoup montent plus haut qu’ils ne savent redescendre, et c’est là que ça se passe mal. S’il descend en cherchant ses appuis avec le pied plutôt qu’en sautant, la compétence est là et la hauteur peut monter toute seule.",
  ),

  f("dh-parcours-07", "Parcours et équilibre", "Parcours 7 · six ateliers enchaînés",
    [
      "Six ateliers, montés par lui, qu’on enchaîne sans s’arrêter entre deux. Pas de chronomètre : on cherche la liaison d’un atelier à l’autre, pas la vitesse.",
      "Règle annoncée d’avance : un atelier passé trop vite, on y revient tranquillement avant de continuer. Aller doucement fait partie du parcours.",
      "Un jour où ça ne va pas : on garde les six ateliers et on s’arrête entre chacun, autant qu’il veut.",
    ],
    [
      "5 min — échauffement complet : trotter, sauts, mobilisation des chevilles et des épaules.",
      "7 min — l’installation : six ateliers qui reprennent les quatre familles, plus deux libres.",
      "13 min — deux passages de reconnaissance, atelier par atelier, puis quatre passages enchaînés avec deux minutes de repos entre chaque. À chaque passage, un seul point à soigner, choisi par lui : une réception, un appui, le regard.",
      "5 min — rangement et retour au calme.",
    ],
    undefined,
    "On regarde les passages d’un atelier à l’autre : s’il repart sans hésiter parce qu’il sait déjà où il va, le parcours est appris. Ça vient presque toujours entre le premier et le dernier passage, et il vaut mieux lui dire d’où ça vient — il connaît le chemin, ce n’est pas une question de force —, parce que savoir d’où vient une aisance, c’est pouvoir la retrouver.",
  ),

  f("dh-parcours-08", "Parcours et équilibre", "Parcours 8 · tenir sur un pied, puis les yeux fermés",
    [
      "Une séance calme, dehors, sur un sol stable. L’équilibre statique se travaille peu et se perd vite : c’est le bon moment de saison pour s’y poser.",
      "Les yeux fermés changent tout et c’est le cœur de la séance — sans la vue, ce sont les pieds et l’oreille interne qui travaillent.",
      "Un jour où ça ne va pas : on garde les yeux ouverts partout.",
    ],
    [
      "5 min — échauffement : marche pointe et talon, rotations de chevilles, montées sur la pointe des pieds, vingt fois.",
      "8 min — sur un pied, yeux ouverts : cinq essais par pied, bras libres puis bras croisés. L’adulte fait pareil à côté, et chacun pose le pied quand il en a besoin.",
      "9 min — sur un pied, yeux fermés : cinq essais par pied, sans durée et sans compter. Le pied se pose, on rouvre les yeux, on repart.",
      "8 min — sur un support instable — un coussin, un sac de sable, une planche sur un rouleau : yeux ouverts seulement, six essais.",
    ],
    undefined,
    "Les yeux fermés font tomber tout le monde très vite, et c’est à dire avant de commencer pour que ça ne ressemble pas à un échec. Ce qu’on regarde, ce n’est pas combien de temps il tient, mais comment : la cheville qui travaille, les bras qui s’écartent d’eux-mêmes, le regard fixé sur un point quand les yeux sont ouverts.",
  ),

  f("dh-parcours-09", "Parcours et équilibre", "Parcours 9 · le parcours avec un objet à porter",
    [
      "Le même parcours que d’habitude, mais avec un objet dans les mains : un verre d’eau rempli, un livre en équilibre, un ballon.",
      "Porter occupe les bras, qui servaient à l’équilibre : tout redevient difficile, et c’est voulu.",
      "Un jour où ça ne va pas : on porte l’objet sur deux ateliers seulement.",
    ],
    [
      "5 min — échauffement : marche avec un livre sur la tête, dix mètres, quatre fois. Puis mobilisation habituelle.",
      "7 min — l’installation : cinq ateliers, les mêmes que la séance 7, un peu plus faciles.",
      "13 min — six passages : deux avec un ballon dans les bras, deux avec un verre rempli à moitié, deux avec un livre sur la tête au choix des ateliers où c’est possible.",
      "5 min — rangement et retour au calme.",
    ],
    undefined,
    "On regarde le buste : porter un objet oblige à se tenir droit et à ralentir. S’il ralentit de lui-même avant l’atelier difficile, il anticipe — c’est exactement ce que le parcours cherche à installer.",
  ),

  f("dh-parcours-10", "Parcours et équilibre", "Parcours 10 · le parcours à l’envers",
    [
      "On prend un parcours connu et on le fait dans l’autre sens. Les appuis changent, les prises ne tombent plus au même endroit, et il faut tout relire.",
      "C’est déroutant et amusant. Le présenter comme un jeu, parce que c’en est un.",
      "Un jour où ça ne va pas : on fait un atelier sur deux à l’envers.",
    ],
    [
      "5 min — échauffement : marche arrière, dix mètres quatre fois, puis mobilisation habituelle.",
      "7 min — l’installation du parcours à cinq ateliers, et une reconnaissance à pied dans le sens inverse.",
      "13 min — quatre passages à l’envers, tranquillement, puis deux passages à l’endroit pour comparer les sensations.",
      "5 min — rangement, retour au calme, et une question : quel atelier est plus facile à l’envers, et pourquoi ?",
    ],
    undefined,
    "On regarde s’il repère avant de passer ou s’il découvre en avançant. Aller voir un obstacle avant de le franchir est une habitude qui s’installe ici et qui sert partout ailleurs.",
  ),

  f("dh-parcours-11", "Parcours et équilibre", "Parcours 11 · les cinq stations",
    [
      "Une séance en circuit : cinq stations, deux minutes chacune, deux tours. Ce n’est plus un parcours qu’on traverse mais un atelier où l’on reste.",
      "À la station des sauts, on reprend le geste de la séance 4 : bras lancés devant, réception sans bruit. Rien ne se marque et rien ne se mesure.",
      "Un jour où ça ne va pas : un seul tour de cinq stations, ce qui fait déjà une belle séance.",
    ],
    [
      "5 min — échauffement : trotter, sauts sur place, mobilisation générale.",
      "10 min — premier tour : station saut en longueur, station équilibre sur planche, station suspension, station ramper, station cloche-pied slalom. Deux minutes chacune.",
      "10 min — deuxième tour, dans le même ordre. À chaque station, il peut garder l’exercice du premier tour ou le changer un peu, comme il veut.",
      "5 min — rangement et retour au calme.",
    ],
    undefined,
    "On regarde ce qui change entre le premier et le deuxième tour sans qu’on l’ait demandé : une réception plus souple, des bras qui aident, une station qu’il rend un peu plus difficile de lui-même. C’est la chose à nommer, et il n’y a aucune distance à regarder.",
  ),

  f("dh-parcours-12", "Parcours et équilibre", "Parcours 12 · dessiné avant d’être monté",
    [
      "Il dessine le parcours sur une feuille avant de le monter : six ateliers, avec les distances écrites en mètres.",
      "Puis il monte ce qu’il a dessiné, et on regarde ce qui résiste — un plan sur le papier n’est pas un plan sur le terrain.",
      "Un jour où ça ne va pas : quatre ateliers, dessinés puis montés.",
    ],
    [
      "6 min — le dessin, sur une feuille, avec les distances estimées. Il fait aussi la liste du matériel nécessaire.",
      "6 min — échauffement pendant qu’on rassemble le matériel de la liste.",
      "6 min — le montage, d’après le dessin. On note ce qui n’était pas possible tel quel et pourquoi.",
      "12 min — cinq passages du parcours, puis rangement et retour au calme.",
    ],
    undefined,
    "L’écart entre le dessin et le terrain est le contenu de la séance : distances mal estimées, matériel qui manque, atelier impossible là où il l’avait mis. S’il corrige son dessin au feutre pendant le montage, c’est exactement ce qu’on voulait.",
  ),

  f("dh-parcours-13", "Parcours et équilibre", "Parcours 13 · le parcours en miroir, à deux",
    [
      "Deux parcours identiques côte à côte, ou un seul fait en même temps par les deux, à un mètre d’écart.",
      "Ce n’est pas une course : la consigne est de rester ensemble, épaule contre épaule, du début à la fin. Le dire avant, et le redire si la course revient.",
      "Un jour où ça ne va pas : l’adulte mène et l’enfant suit à son rythme, sans exigence de synchronisation.",
    ],
    [
      "5 min — échauffement à deux : marche en miroir, l’un mène, l’autre copie, puis on échange.",
      "7 min — le montage à deux : quatre ateliers, montés en parallèle.",
      "13 min — six passages côte à côte. À chaque passage, c’est l’un ou l’autre qui donne le rythme, et on l’annonce avant de partir.",
      "5 min — rangement et retour au calme.",
    ],
    undefined,
    "Rester ensemble oblige à régler son allure sur quelqu’un, ce qui est plus difficile que d’aller vite. Si la course revient malgré la consigne, ce n’est pas grave — on arrête, on rappelle la règle, et on repart. Trois rappels dans la séance sont normaux.",
  ),

  f("dh-parcours-14", "Parcours et équilibre", "Parcours 14 · le parcours à retenir",
    [
      "Huit ateliers, montés par l’adulte cette fois, et un ordre de passage qui n’est pas l’ordre naturel. Il doit le retenir.",
      "On lui montre l’ordre une seule fois, en le parcourant ensemble à pied, puis il le refait de mémoire.",
      "Un jour où ça ne va pas : six ateliers, et on peut redire l’ordre une deuxième fois.",
    ],
    [
      "5 min — échauffement complet.",
      "5 min — la découverte : on parcourt les huit ateliers à pied dans l’ordre imposé, une seule fois, en comptant à voix haute.",
      "14 min — cinq passages de mémoire. Si l’ordre est perdu, on s’arrête, il regarde autour de lui un moment, et s’il ne retrouve pas, l’adulte lui montre l’atelier suivant, simplement.",
      "6 min — rangement et retour au calme.",
    ],
    undefined,
    "Retenir un ordre en bougeant est plus difficile qu’assis, parce que l’effort mange la mémoire. On regarde à quel moment l’ordre se stabilise, et à quoi il s’accroche pour le retenir — un atelier qui ressemble à un autre, un chemin qui fait une boucle : c’est une information utile pour toutes les autres mémorisations de l’année.",
  ),

  f("dh-parcours-15", "Parcours et équilibre", "Parcours 15 · le grand parcours, dix postes",
    [
      "Le parcours de fin d’année : dix postes, montés par lui, reprenant ce qui a été travaillé depuis septembre. Il le dessine d’abord, comme à la séance 12.",
      "Rien ne se chronomètre et rien ne se compare : c’est son parcours de fin d’année, pas une épreuve.",
      "Un jour où ça ne va pas : huit postes, et deux passages au lieu de quatre.",
    ],
    [
      "5 min — échauffement complet.",
      "8 min — le dessin puis le montage des dix postes : sauter, grimper, tenir en équilibre, ramper, et ce qu’il veut ajouter.",
      "12 min — un passage de reconnaissance, puis trois passages complets avec deux minutes de repos. Le dernier, s’il le veut, il le fait en le racontant à voix haute, atelier par atelier.",
      "5 min — rangement, retour au calme, et on regarde la photo ou le dessin du parcours d’octobre s’il en reste une trace.",
    ],
    undefined,
    "Le vrai relevé de fin d’année n’est pas un temps mais le parcours lui-même : ce qu’il ose y mettre en juin et ce qu’il n’osait pas y mettre en octobre. La hauteur des sauts, l’étroitesse de la poutre, la présence d’un atelier de grimper — tout cela se lit sur l’installation avant même qu’il passe.",
  ),

  /* ------------------------------------------------------------------ *
   * Marche et observation — 18 fiches. La consigne demande trois choses
   * rapportées, notées ou dessinées : chaque fiche donne donc un thème
   * d'observation, sinon on rapporte toujours les mêmes trois choses. La
   * série suit les saisons — feuilles en octobre, arbres nus en novembre,
   * oiseaux en janvier, bourgeons en février — et se referme en juillet sur
   * le premier trajet.
   * Emporter un carnet et un crayon à chaque sortie.
   * ------------------------------------------------------------------ */

  f("dh-marche-01", "Marche et observation", "Marche 1 · trois arbres, trois feuilles",
    [
      "Un carnet, un crayon, et de quoi ranger trois feuilles à plat. La marche fait une demi-heure, thème compris.",
      "Le thème du jour est l’arbre : on cherche trois arbres différents et on rapporte une feuille de chacun.",
      "Les noms d’arbres viendront après, à la maison, avec un livre ou une recherche. Sur le chemin, on regarde la forme, pas le nom.",
    ],
    [
      "5 min — départ, sans thème : on marche, on se met en jambes, on parle de ce qu’on veut.",
      "15 min — la cueillette : trois arbres qui ne se ressemblent pas. À chaque arbre, deux minutes d’arrêt pour regarder la feuille — bords lisses ou dentés, une pièce ou plusieurs, nervures — et l’écorce.",
      "7 min — le retour, en essayant de retrouver les trois arbres de loin, par leur silhouette.",
      "3 min — à la maison : les trois feuilles posées sur la table, il écrit ou dessine ce qui les distingue. On les garde, on les reverra en novembre.",
    ],
    undefined,
    "On regarde ce qu’il choisit de dire des feuilles : la couleur d’abord, presque toujours ; la forme ensuite, si on demande ; les nervures seulement si on les lui montre. Ce qu’il nomme aujourd’hui est le point de départ de tout le reste de la série.",
  ),

  f("dh-marche-02", "Marche et observation", "Marche 2 · ce qui change de couleur",
    [
      "Même quartier, quelques jours plus tard, en pleine saison des feuilles qui tournent. Le thème est le changement : ce qui n’a plus la même couleur qu’à la marche précédente, et ce qui est en train d’en changer.",
      "Emporter le carnet où sont les notes de la marche 1, et le relire avant de partir.",
      "Un jour où ça ne va pas : on raccourcit le trajet et on garde trois observations, c’est tout ce qui compte.",
    ],
    [
      "5 min — avant de partir : relire les notes de la marche 1, et prédire trois choses qui auront changé.",
      "18 min — la marche : on vérifie les prédictions, et on cherche trois changements auxquels on n’avait pas pensé. Arrêt de deux minutes devant chacun.",
      "4 min — le retour, en cherchant ce qui n’a pas changé du tout : les murs, les toits, une pierre.",
      "3 min — au carnet : trois changements écrits ou dessinés, avec la date.",
    ],
    undefined,
    "Ce qu’on cherche à installer, c’est qu’il prédise avant de regarder. Une prédiction fausse est aussi intéressante qu’une juste, et il faut le dire avec ces mots : on ne se trompe pas, on apprend où on regardait mal.",
  ),

  f("dh-marche-03", "Marche et observation", "Marche 3 · trois arrêts pour écouter",
    [
      "Une marche qui ne se regarde pas, qui s’écoute. Trois arrêts d’une minute, yeux fermés, à trois endroits différents.",
      "Choisir trois lieux qui ne sonnent pas pareil : une rue passante, un parc ou un jardin, un endroit abrité.",
      "Pendant la minute d’écoute, l’adulte ne parle pas du tout. C’est plus dur que ça n’en a l’air, pour lui comme pour l’adulte.",
    ],
    [
      "6 min — la marche jusqu’au premier lieu, en parlant normalement.",
      "6 min — premier et deuxième arrêts : une minute les yeux fermés, puis deux minutes à nommer tout ce qu’on a entendu, chacun son tour, sans se répéter.",
      "10 min — la marche jusqu’au troisième lieu, puis le troisième arrêt, même déroulé.",
      "8 min — le retour, et au carnet : trois sons écrits, avec l’endroit où on les a entendus.",
    ],
    undefined,
    "On ne compte pas les sons qu’il nomme. On regarde leur nature : au premier arrêt, ce sont presque toujours les sons forts et proches ; au troisième, il en vient de plus lointains et de plus petits, parce que l’oreille apprend en une demi-heure. Le lui faire remarquer vaut mieux que n’importe quel commentaire sur sa qualité d’attention.",
  ),

  f("dh-marche-04", "Marche et observation", "Marche 4 · de quoi sont faits les murs",
    [
      "Le thème est le matériau : pierre, brique, béton, bois, crépi, métal, verre. Une marche qui apprend à lire un bâtiment.",
      "Utile de toucher, quand c’est possible : le matériau se reconnaît autant à la main qu’à l’œil, et c’est vrai pour la température aussi.",
      "Un jour où ça ne va pas : on fait le tour d’une seule rue, il y a déjà tout.",
    ],
    [
      "5 min — avant de partir : nommer ensemble six matériaux qu’on s’attend à voir.",
      "18 min — la marche : à chaque changement de matériau, arrêt court. On touche, on nomme, on cherche lequel est le plus ancien du quartier et à quoi on le voit.",
      "4 min — une question sur le chemin du retour : pourquoi les murs anciens ne sont-ils pas faits du même matériau que les neufs ? On cherche une réponse, on n’en impose pas.",
      "3 min — au carnet : trois matériaux dessinés ou décrits, avec l’endroit.",
    ],
    undefined,
    "On regarde s’il distingue la brique du parpaing enduit, la pierre taillée de la pierre ramassée. Ce sont des distinctions d’adulte, et le jour où il les fait seul, il regarde une rue autrement qu’avant.",
  ),

  f("dh-marche-05", "Marche et observation", "Marche 5 · le ciel, et l’heure où il fait nuit",
    [
      "Novembre : le thème est la lumière. On part en fin d’après-midi et on regarde la nuit tomber pendant la marche.",
      "Emporter une lampe et un gilet réfléchissant. La sécurité fait partie de la séance et se dit à voix haute.",
      "Un jour où ça ne va pas : on marche dix minutes et on regarde le ciel depuis une fenêtre.",
    ],
    [
      "4 min — avant de partir : noter l’heure de départ, et regarder quelle est l’heure du coucher du soleil aujourd’hui.",
      "16 min — la marche : trois arrêts pour regarder le ciel — les couleurs à l’ouest, les nuages, les premières lumières allumées. On note l’heure à chaque arrêt.",
      "7 min — le retour de nuit, en observant ce qui change quand on ne voit plus : ce qu’on entend, ce qu’on sent, comment on marche.",
      "3 min — au carnet : les trois heures, ce qu’on voyait à chacune, et l’heure à laquelle il a estimé qu’il faisait nuit.",
    ],
    undefined,
    "Il n’y a pas d’instant où il fait nuit, et la séance sert à le découvrir : la réponse qu’il donne est forcément arbitraire, et c’est la bonne réponse. On garde l’heure notée pour la comparer en mai, à la marche 15.",
  ),

  f("dh-marche-06", "Marche et observation", "Marche 6 · les traces au sol",
    [
      "Novembre, le sol est mou et souvent mouillé : c’est un bon moment de l’année pour les traces. Empreintes d’animaux, de pneus, de chaussures, traces de gel, flaques figées.",
      "Chercher au bon endroit : bords de chemin boueux, abords d’un point d’eau, terre nue d’un jardin, neige s’il y en a.",
      "Emporter de quoi mesurer — une règle, ou à défaut on reporte la taille sur le carnet avec les doigts.",
    ],
    [
      "5 min — avant de partir : regarder ensemble à quoi ressemblent trois empreintes courantes — chien, chat, oiseau — et les dessiner grossièrement.",
      "17 min — la marche, avec les yeux au sol. À chaque trace, on s’arrête : on mesure, on compte les doigts de l’empreinte, on regarde dans quel sens elle va.",
      "5 min — le retour : suivre une piste sur quelques mètres si l’on en trouve une, et dire où l’animal allait.",
      "3 min — au carnet : trois traces dessinées à leur taille réelle, avec ce qu’on croit qui les a faites.",
    ],
    undefined,
    "Dessiner une empreinte à sa taille réelle oblige à la mesurer, ce que regarder ne demande pas. On regarde s’il pense à mesurer sans qu’on le lui dise, à partir de la deuxième trace.",
  ),

  f("dh-marche-07", "Marche et observation", "Marche 7 · les arbres sans leurs feuilles",
    [
      "Retour aux trois arbres d’octobre, s’ils sont sur un trajet possible. Cette fois ils n’ont plus de feuilles, et c’est la silhouette qui les distingue.",
      "Ressortir les trois feuilles séchées de la marche 1 et les emporter.",
      "Un jour où ça ne va pas : un seul arbre, regardé longtemps, vaut la séance.",
    ],
    [
      "5 min — avant de partir : relire les notes de la marche 1 et regarder les trois feuilles gardées.",
      "16 min — la marche jusqu’aux arbres : devant chacun, quatre minutes pour dessiner la silhouette — le tronc, la façon dont les branches partent, les bourgeons s’il y en a déjà.",
      "6 min — une question posée en marchant : comment reconnaît-on un arbre en hiver ? Chercher trois indices — écorce, forme, bourgeons, ce qui est tombé au pied.",
      "3 min — au carnet : les trois silhouettes, à côté des notes d’octobre.",
    ],
    undefined,
    "L’écorce est l’indice le plus fiable et le moins regardé. S’il commence à la nommer avant la forme, quelque chose d’un regard de naturaliste s’installe — c’est lent et ça ne se force pas.",
  ),

  f("dh-marche-08", "Marche et observation", "Marche 8 · les oiseaux de l’hiver",
    [
      "Janvier : les oiseaux sont visibles parce que les arbres sont nus, et ils cherchent à manger. C’est le mois le plus facile pour les observer.",
      "Marcher lentement et s’arrêter souvent. Les oiseaux se voient à l’arrêt, jamais en marchant.",
      "Un jour où ça ne va pas : on s’assoit vingt minutes au même endroit, et on observe sans marcher du tout.",
    ],
    [
      "4 min — avant de partir : nommer trois oiseaux qu’on s’attend à voir — moineau, merle, pigeon, mésange, corneille selon l’endroit.",
      "18 min — la marche lente, avec quatre arrêts de deux minutes en silence. À chaque oiseau vu : où il était, ce qu’il faisait, sa taille comparée à la main.",
      "5 min — le retour, en écoutant plutôt qu’en regardant : combien de chants différents ?",
      "3 min — au carnet : trois oiseaux dessinés ou décrits, avec l’endroit et l’heure.",
    ],
    undefined,
    "Ce qu’on regarde, c’est sa capacité à rester immobile : deux minutes de silence dehors sont longues, et c’est précisément ce qui fait apparaître les oiseaux. S’il tient les quatre arrêts, la marche 17 lui sera facile.",
  ),

  f("dh-marche-09", "Marche et observation", "Marche 9 · où va l’eau",
    [
      "Le thème est l’eau et la pente : caniveaux, grilles, flaques, ruisseau, fossé. Choisir un jour de pluie ou le lendemain d’une pluie.",
      "Bottes et vêtement de pluie. Une marche sous la pluie n’est pas une marche ratée, c’est une autre marche.",
      "Un jour où ça ne va pas : on suit l’eau d’une seule rue, du haut vers le bas.",
    ],
    [
      "4 min — avant de partir : la question de départ, posée et notée — où va l’eau qui tombe sur notre toit ?",
      "18 min — la marche : suivre le sens de l’écoulement. À chaque grille, chaque caniveau, chaque flaque, on cherche d’où l’eau vient et où elle part. Un test simple : poser une feuille ou un brin d’herbe dans le filet d’eau et le suivre.",
      "5 min — arrivée au point le plus bas du quartier, qu’on aura trouvé en suivant l’eau : on regarde si ça se voit à l’œil.",
      "3 min — au carnet : un dessin du chemin de l’eau, avec les rues, et trois endroits où elle disparaît sous terre.",
    ],
    undefined,
    "La pente d’une rue ne se voit presque pas ; l’eau la montre. Si à la fin il peut dire quel côté de la rue est le plus bas sans regarder l’eau, il a lu le terrain — c’est de la géographie faite avec les pieds.",
  ),

  f("dh-marche-10", "Marche et observation", "Marche 10 · les premiers bourgeons",
    [
      "Mi-février : ça commence à repartir. Le thème est le tout début — bourgeons gonflés, premières pousses, premières fleurs au ras du sol.",
      "Retourner aux trois arbres d’octobre et de novembre, si possible, pour la troisième fois de l’année.",
      "Un jour où ça ne va pas : on regarde un seul arbre et un seul carré de pelouse, il y a de quoi faire.",
    ],
    [
      "4 min — avant de partir : relire les dessins de novembre et prédire lequel des trois arbres sera le plus avancé.",
      "17 min — la marche : aux trois arbres, deux minutes chacun pour regarder les bourgeons — leur taille, leur couleur, s’ils sont ouverts. Puis chercher au sol trois plantes qui sortent.",
      "6 min — le retour, en cherchant la différence entre un côté de rue au soleil et un côté à l’ombre : ce n’est presque jamais au même stade.",
      "3 min — au carnet : trois bourgeons ou pousses dessinés, et le nom des arbres s’il les a trouvés depuis octobre.",
    ],
    undefined,
    "La différence entre l’ombre et le soleil est le petit fait à saisir : elle explique tout le reste et se vérifie partout. S’il la remarque seul en arrivant à un carrefour, la séance a fait beaucoup plus que trois observations.",
  ),

  f("dh-marche-11", "Marche et observation", "Marche 11 · les noms des rues",
    [
      "Le thème est ce que les noms racontent : des métiers, des plantes, des dates, des personnes, des lieux disparus.",
      "Emporter le carnet et relever les noms exactement, avec l’orthographe. On cherchera à la maison ce qu’on ne sait pas.",
      "Un jour où ça ne va pas : cinq noms au lieu de dix, et une seule recherche au retour.",
    ],
    [
      "4 min — avant de partir : lire le nom de sa propre rue et chercher ensemble d’où il pourrait venir.",
      "18 min — la marche : relever dix noms de rue, de place ou d’impasse. À chaque nom, on essaie de deviner sa famille — une personne, un métier, un arbre, un lieu, une date.",
      "5 min — le retour, en classant les dix noms par familles, à l’oral.",
      "3 min — à la maison : chercher deux noms qu’on n’a pas su expliquer, et écrire au carnet ce qu’on a trouvé.",
    ],
    undefined,
    "Les noms de rue contiennent souvent la géographie ancienne du lieu — un moulin, un gué, un champ. S’il repère qu’un nom décrit quelque chose qui n’existe plus, il touche à l’histoire sans qu’on ait eu à ouvrir un livre.",
  ),

  f("dh-marche-12", "Marche et observation", "Marche 12 · fleurs et insectes",
    [
      "Fin mars : le thème est ce qui vole et ce qui fleurit, et surtout le lien entre les deux. On regarde qui visite quelle fleur.",
      "S’arrêter devant un buisson en fleurs et attendre deux minutes : c’est le seul moyen de voir des insectes.",
      "Ne rien attraper, ne rien cueillir d’un jardin qui n’est pas le sien.",
    ],
    [
      "4 min — avant de partir : la question notée — est-ce que tous les insectes vont sur toutes les fleurs ?",
      "18 min — la marche : trouver trois plantes en fleurs différentes. Devant chacune, trois minutes d’observation immobile, à compter les visiteurs et à regarder ce qu’ils font.",
      "5 min — le retour, en cherchant une fleur sans aucun visiteur, et en se demandant pourquoi.",
      "3 min — au carnet : trois fleurs dessinées avec, à côté, ce qui les visitait.",
    ],
    undefined,
    "Trois minutes immobile devant un buisson est la vraie difficulté de la séance, et ce qui la rend utile. On regarde s’il tient la deuxième observation plus facilement que la première — c’est en général le cas, parce qu’il a vu quelque chose à la première.",
  ),

  f("dh-marche-13", "Marche et observation", "Marche 13 · les ombres, à deux heures d’écart",
    [
      "Une séance en deux temps dans la même journée : on marche, on marque une ombre à la craie, et on revient deux heures plus tard.",
      "Choisir un objet fixe dont l’ombre tombe sur du sol dur : un poteau, un panneau, un coin de mur.",
      "Un jour où ça ne va pas : on plante un bâton dans le jardin et on marque son ombre trois fois depuis la fenêtre.",
    ],
    [
      "4 min — avant de partir : prédire ce que l’ombre aura fait dans deux heures — plus longue, plus courte, tournée, et de quel côté.",
      "12 min — première marche : on choisit l’objet, on trace son ombre à la craie, on écrit l’heure à côté, et on mesure la longueur en pas.",
      "10 min — deuxième marche, deux heures plus tard : on retrace, on écrit l’heure, on mesure. On regarde l’angle entre les deux traits.",
      "4 min — au carnet : le dessin des deux ombres avec les heures, et la réponse à la prédiction du départ.",
    ],
    undefined,
    "Presque tout le monde prédit que l’ombre s’allongera ou raccourcira, et oublie qu’elle tourne. Ce qu’on regarde, c’est ce qu’il fait de cette surprise : s’il cherche pourquoi, on a une belle conversation sur le chemin du retour, et elle vaut plus que la réponse.",
  ),

  f("dh-marche-14", "Marche et observation", "Marche 14 · ce qui a changé dans le quartier",
    [
      "Le thème est le changement fabriqué, pas le changement de saison : un chantier, une devanture nouvelle, une rue repeinte, un arbre coupé, un panneau ajouté.",
      "Le carnet de l’année entière est l’outil du jour : on le relit avant de partir, et on cherche ce qui n’y correspond plus.",
      "Un jour où ça ne va pas : trois changements suffisent, la marche peut être courte.",
    ],
    [
      "5 min — avant de partir : relire trois marches du carnet et lister ce qu’on s’attend à retrouver à l’identique.",
      "17 min — la marche : chercher cinq choses qui ont changé depuis septembre. Devant un chantier, s’arrêter et regarder ce qui se fait — les matériaux, les engins, l’ordre des étapes.",
      "5 min — le retour : se demander lesquels de ces changements resteront dans dix ans.",
      "3 min — au carnet : trois changements écrits, avec la date, en face de la note d’origine.",
    ],
    undefined,
    "Un quartier change lentement et ça ne se remarque pas sans notes — c’est précisément à quoi le carnet a servi toute l’année. S’il retrouve seul la page qui parle du lieu qu’il regarde, il a compris ce qu’est un carnet de terrain.",
  ),

  f("dh-marche-15", "Marche et observation", "Marche 15 · les toits et les cheminées",
    [
      "Le thème est en hauteur, ce qui oblige à lever les yeux : formes de toits, tuiles ou ardoises, cheminées, antennes, panneaux solaires, nids.",
      "Marcher du côté opposé de la rue pour voir les toits d’en face : de trop près, on ne voit rien.",
      "Emporter le carnet de novembre : on notera aussi l’heure du coucher du soleil pour la comparer à la marche 5.",
    ],
    [
      "4 min — avant de partir : regarder son propre toit et le dessiner de mémoire, avant de sortir vérifier.",
      "17 min — la marche : trouver trois formes de toit différentes — à deux pentes, à quatre pentes, plat, en pointe. Compter les cheminées d’une rue et se demander pourquoi il y en a tant ou si peu.",
      "6 min — le retour, en fin d’après-midi : noter l’heure où la lumière baisse, et la comparer à celle de novembre.",
      "3 min — au carnet : trois toits dessinés, et les deux heures côte à côte.",
    ],
    undefined,
    "L’écart entre l’heure de novembre et celle de mai est énorme et il l’aura vécu, pas lu. C’est le genre de fait qu’on retient pour la vie quand on l’a mesuré soi-même à six mois d’intervalle.",
  ),

  f("dh-marche-16", "Marche et observation", "Marche 16 · les herbes du bord du chemin",
    [
      "Juin : tout pousse, y compris là où personne n’a rien planté. Le thème est ce qui vient tout seul — au pied des murs, dans les fissures, sur les talus.",
      "On peut cueillir trois brins au bord d’un chemin public, pas dans un jardin ni dans un espace protégé.",
      "Un jour où ça ne va pas : un seul pied de mur, regardé cinq minutes, donne déjà cinq plantes.",
    ],
    [
      "4 min — avant de partir : la question notée — combien de plantes différentes au pied d’un seul mur ?",
      "16 min — la marche : trois stations de quatre minutes, chacune devant un endroit non entretenu. À chaque station, compter les plantes différentes, sans chercher leur nom.",
      "7 min — le retour, en comparant les trois stations : laquelle en avait le plus, et pourquoi — le soleil, l’eau, le passage.",
      "3 min — au carnet : trois plantes dessinées avec leurs feuilles, et le nombre trouvé à chaque station.",
    ],
    undefined,
    "Le nombre surprend toujours : un mètre carré de pied de mur porte souvent dix espèces. Ce qu’on regarde, c’est s’il compte vraiment ou s’il s’arrête à « de l’herbe » — le jour où « de l’herbe » devient cinq plantes différentes, il voit ce qu’il regardait sans le voir.",
  ),

  f("dh-marche-17", "Marche et observation", "Marche 17 · dix minutes sans parler",
    [
      "Une marche où l’on ne dit rien pendant dix minutes, ni l’adulte ni l’enfant. Ce n’est pas une punition, c’est un outil, et il faut le présenter comme tel.",
      "Prévenir avant : dix minutes, on se tait, et à la fin chacun dit trois choses qu’il a remarquées. On verra qu’elles ne sont pas les mêmes.",
      "Un jour où ça ne va pas : cinq minutes de silence, c’est déjà beaucoup.",
    ],
    [
      "6 min — le départ, en parlant normalement, jusqu’à un endroit tranquille.",
      "10 min — les dix minutes de silence. On marche côte à côte, à allure lente. L’adulte se tait vraiment.",
      "8 min — la mise en commun : chacun dit trois choses remarquées, en alternant. Puis on cherche pourquoi ce ne sont pas les mêmes — la taille, la direction du regard, ce qui intéresse chacun.",
      "6 min — au carnet : ses trois choses à lui, et une de l’adulte qu’il n’avait pas vue.",
    ],
    undefined,
    "Le silence fait remonter des observations qui ne passent jamais dans la conversation. On regarde si ses trois choses sont plus précises que d’habitude — c’est en général le cas, et lui dire pourquoi lui donne un outil qu’il pourra ressortir seul.",
  ),

  f("dh-marche-18", "Marche et observation", "Marche 18 · refaire le tout premier trajet",
    [
      "La dernière marche de l’année refait exactement celle d’octobre, avec le carnet ouvert à la première page.",
      "Les trois arbres de la marche 1 sont les mêmes, en pleines feuilles cette fois. On compare les quatre états : octobre, novembre, février, juillet.",
      "Prévoir un peu de temps à la maison ensuite pour relire le carnet en entier : c’est la vraie fin de la séance.",
    ],
    [
      "4 min — avant de partir : relire la première page du carnet, et les trois feuilles d’octobre si elles ont été gardées.",
      "16 min — la marche, sur le trajet d’octobre. Aux trois arbres, quatre minutes chacun : on cueille une feuille et on la pose à côté de celle d’octobre.",
      "6 min — le retour, en cherchant trois choses qu’on n’avait pas vues la première fois. Elles y étaient déjà.",
      "4 min — au carnet, à la dernière page : les trois choses non vues en octobre, et pourquoi on les voit maintenant.",
    ],
    undefined,
    "Le carnet est le relevé de l’année, et il se lit sans commentaire : dix-huit pages, dix-huit fois trois choses. Ce qui se voit, c’est que les notes de juillet sont plus précises que celles d’octobre — pas parce qu’il s’applique davantage, mais parce qu’il sait où regarder. C’est exactement ce que la série voulait obtenir.",
  ),

  /* ------------------------------------------------------------------ *
   * Jeux de raquette — 15 fiches. Le matériel s'adapte : raquettes de
   * badminton et volant, raquettes de plage et balle en mousse, ping-pong
   * sur une table de jardin, tennis contre un mur. Les déroulés ci-dessous
   * valent pour l'un ou l'autre, on remplace « balle » par « volant » sans
   * rien changer d'autre. On ne compte rien : ni échanges, ni points, ni
   * séries. On regarde la prise, les pieds, le replacement.
   * ------------------------------------------------------------------ */

  f("dh-raquette-01", "Jeux de raquette", "Raquette 1 · la raquette en main",
    [
      "Avant d’échanger, apprivoiser l’objet : le manche se tient comme on serre une main, ni crispé ni mou.",
      "Toute la séance se fait sans partenaire et sans mur : on joue avec la balle et la raquette seulement.",
      "Un jour où ça ne va pas : on garde les deux premiers ateliers et on double leur durée.",
    ],
    [
      "5 min — échauffement : trotter avec la raquette en main, rotations de poignet, d’épaule, dix pas chassés à droite et à gauche.",
      "8 min — la balle sur le cordage : marcher en la gardant posée, puis la faire rebondir doucement sur place, sans compter. Quand elle tombe, on la ramasse et on reprend.",
      "9 min — rebonds vers le haut, petits et réguliers, sans compter. Puis la même chose avec l’autre face de la raquette.",
      "8 min — jeu : faire rebondir la balle au sol avec la raquette en marchant sur vingt mètres, aller et retour, quatre fois.",
    ],
    undefined,
    "On regarde la main : crispée, le poignet se bloque et la balle part n’importe où. Si on peut lui prendre la raquette sans effort pendant qu’il joue, la prise est bonne. C’est le seul point technique du jour.",
  ),

  f("dh-raquette-02", "Jeux de raquette", "Raquette 2 · le mur, sans compter",
    [
      "Première séance contre un mur, sans compter, comme toutes celles de la série : on cherche seulement à faire revenir la balle, doucement.",
      "Se placer à trois mètres du mur, pas plus. Une balle en mousse ou dégonflée rend tout plus facile et plus lent.",
      "Dire clairement avant de commencer qu’on ne compte rien, ni aujourd’hui ni les autres fois. Ça change la séance.",
    ],
    [
      "5 min — échauffement : rebonds sur la raquette, rotations de poignet et d’épaule, dix pas chassés.",
      "10 min — contre le mur, laisser rebondir la balle au sol avant de la reprendre. On frappe doucement : plus c’est lent, plus c’est long.",
      "8 min — même chose en essayant de viser une zone du mur — au-dessus d’une ligne tracée à la craie à un mètre du sol.",
      "7 min — jeu : deux rebonds au sol autorisés au lieu d’un, ce qui laisse le temps de se replacer. On cherche à ne pas arrêter du tout.",
    ],
    undefined,
    "Ce qu’on regarde, c’est le déplacement : il rate presque toujours parce qu’il est mal placé, pas parce qu’il frappe mal. S’il fait deux pas avant de frapper plutôt que de tendre le bras, c’est déjà gagné et on le lui dit.",
  ),

  f("dh-raquette-03", "Jeux de raquette", "Raquette 3 · le mur, et la ligne de craie",
    [
      "On reprend le mur, toujours sans compter. Ce qui change, c’est une ligne de craie à un mètre du sol, au-dessus de laquelle on essaie de viser.",
      "On ne dit rien quand la balle tombe : on ramasse et on repart.",
      "Un jour où ça ne va pas : on reprend la séance 2, sans la ligne.",
    ],
    [
      "5 min — échauffement : rebonds sur la raquette, puis trois minutes contre le mur, librement.",
      "10 min — contre le mur, un rebond au sol autorisé, en frappant doucement. Quand la balle tombe, on souffle un moment avant de reprendre : rien ne presse.",
      "8 min — la même chose en visant au-dessus de la ligne de craie. C’est plus difficile, la balle tombe plus souvent, et il faut le dire avant.",
      "7 min — jeu libre contre le mur, sans la ligne, pour finir sur ce qui vient facilement.",
    ],
    undefined,
    "On regarde la précipitation : s’il s’énerve quand la balle tombe tôt, la parade est d’attendre un peu plus avant de reprendre plutôt que de repartir tout de suite. C’est presque toujours la hâte qui fait tomber la balle, pas la main.",
  ),

  f("dh-raquette-04", "Jeux de raquette", "Raquette 4 · à deux, trois mètres",
    [
      "Premier échange avec un partenaire. Trois mètres seulement, et la consigne est de faire durer, pas de gagner.",
      "L’adulte joue lent et haut : une balle facile à renvoyer est une balle qui monte. C’est contre-intuitif et c’est la clé de toute la série.",
      "Un jour où ça ne va pas : on revient au mur, qui ne demande pas de coordonner deux personnes.",
    ],
    [
      "5 min — échauffement : rebonds sur la raquette chacun de son côté, mobilisation du poignet et de l’épaule.",
      "9 min — échanges à trois mètres, un rebond au sol autorisé, sans compter. On cherche le rythme commun.",
      "9 min — échanges à trois mètres, toujours sans compter : quand la balle tombe, celui qui est le plus près la ramasse et la remet en jeu, sans commentaire.",
      "7 min — jeu : l’échange coopératif — chacun annonce à voix haute « haut ! » en frappant, pour se rappeler d’envoyer une balle facile à l’autre.",
    ],
    undefined,
    "L’échange à deux se casse presque toujours du côté de celui qui frappe trop fort. Si c’est l’adulte, le corriger sans commentaire ; si c’est lui, le repère à donner est « envoie-la plus haut », qui règle le problème sans parler de force.",
  ),

  f("dh-raquette-05", "Jeux de raquette", "Raquette 5 · servir et recevoir",
    [
      "Le service est ce qui rate le plus souvent et ce qu’on travaille le moins. Une séance entière lui est consacrée.",
      "Service par en dessous, balle lâchée et non lancée, geste lent. Le but est qu’il arrive dans la zone, pas qu’il soit difficile à rendre.",
      "Un jour où ça ne va pas : on garde le service et on supprime la réception.",
    ],
    [
      "5 min — échauffement : rebonds, échanges libres à trois mètres.",
      "9 min — le service seul : vingt services vers une zone marquée à la craie, sans partenaire en face et sans compter. Entre deux services, on ne parle que du lâcher de balle.",
      "9 min — service et réception : il sert, l’adulte renvoie une fois, il rejoue. Vingt fois.",
      "7 min — jeu : le service à la cible — une cible plus petite dans la zone, dix essais. Puis retour à la zone large pour finir sur quelque chose de facile.",
    ],
    undefined,
    "On regarde le lâcher de balle plus que la frappe : une balle lancée au lieu d’être lâchée rend le service aléatoire. Corriger le lâcher règle souvent tout le reste, et c’est plus facile à dire qu’à corriger un geste de bras.",
  ),

  f("dh-raquette-06", "Jeux de raquette", "Raquette 6 · coup droit seulement",
    [
      "Une séance sur un seul coup. On se replace pour prendre chaque balle du bon côté, ce qui oblige à bouger beaucoup.",
      "Le repère technique : l’épaule du côté de la raquette tourne vers l’avant avant la frappe, pas au moment de la frappe.",
      "Un jour où ça ne va pas : on autorise les deux coups et on garde les ateliers.",
    ],
    [
      "5 min — échauffement : rebonds, pas chassés, dix gestes de coup droit à vide, lentement.",
      "10 min — contre le mur, coup droit uniquement, à quatre mètres, sans compter. L’adulte regarde l’épaule qui tourne, pas l’endroit où part la balle.",
      "8 min — à deux : l’adulte envoie toutes les balles du côté coup droit, vingt fois. Il se replace entre chaque.",
      "7 min — jeu : trois zones au sol, l’adulte annonce une zone avant d’envoyer, il renvoie en coup droit dans cette zone. Quinze essais.",
    ],
    undefined,
    "Ce qui se voit ici, c’est le replacement entre deux balles : revenir au centre après chaque frappe est l’habitude qui fait durer les échanges. S’il reste où il a frappé, on trace une croix au sol pour y revenir, une seule fois, et ça s’installe.",
  ),

  f("dh-raquette-07", "Jeux de raquette", "Raquette 7 · le revers",
    [
      "Le coup difficile, et il faut le dire d’entrée : tout le monde rate plus en revers, longtemps.",
      "À deux mains si c’est plus facile pour lui, c’est parfaitement légitime et souvent plus solide au début.",
      "Un jour où ça ne va pas : on fait dix minutes de revers et on finit en coup droit.",
    ],
    [
      "5 min — échauffement : rebonds, dix gestes de revers à vide, très lentement, en regardant l’épaule tourner.",
      "10 min — contre le mur, revers uniquement, à trois mètres — plus près qu’en coup droit, parce que c’est plus dur. Sans compter.",
      "8 min — à deux : l’adulte envoie toutes les balles du côté revers, vingt fois, lentement et haut.",
      "7 min — jeu : dix balles en revers, dix en coup droit, en alternant les séries et non les coups. On finit sur le coup facile.",
    ],
    undefined,
    "La balle tombera plus souvent qu’en coup droit et c’est normal — le dire avant enlève tout le poids de la séance. Ce qu’on regarde, c’est s’il tente le revers plutôt que de contourner la balle : tenter, c’est déjà le travail du jour.",
  ),

  f("dh-raquette-08", "Jeux de raquette", "Raquette 8 · alterner sans réfléchir",
    [
      "On mélange les deux coups, ce qui ajoute une décision à chaque balle : de quel côté vient-elle ?",
      "Le repère est de lire la balle tôt, dès qu’elle quitte la raquette d’en face, et non quand elle arrive.",
      "Un jour où ça ne va pas : on annonce le côté à voix haute avant chaque envoi.",
    ],
    [
      "5 min — échauffement : rebonds, cinq gestes de chaque coup à vide.",
      "9 min — l’adulte alterne régulièrement, un coup droit, un revers, dans l’ordre, vingt fois. Prévisible exprès.",
      "9 min — l’adulte alterne au hasard, vingt fois. C’est là que ça devient difficile et intéressant.",
      "7 min — jeu : échange libre sans consigne et sans compter, pour finir sur le plaisir de jouer.",
    ],
    undefined,
    "La différence entre l’alternance prévisible et l’alternance au hasard dit exactement où il en est : si les deux se ressemblent, il lit déjà la balle tôt. Si la seconde s’effondre, on gardera une part de prévisible la prochaine fois.",
  ),

  f("dh-raquette-09", "Jeux de raquette", "Raquette 9 · haut et lent",
    [
      "Une séance d’échanges avec une seule règle : toutes les balles passent au-dessus de la tête. Haut veut dire lent, lent veut dire facile à renvoyer.",
      "C’est coopératif du début à la fin. On ne joue pas l’un contre l’autre aujourd’hui, et on ne compte rien.",
      "Un jour où ça ne va pas : on garde la règle du haut, à trois mètres au lieu de cinq.",
    ],
    [
      "5 min — échauffement : rebonds hauts sur la raquette, sur place, trois fois une minute.",
      "9 min — échanges hauts à cinq mètres, pour trouver le rythme lent.",
      "9 min — les mêmes échanges, en disant « haut » à voix basse à chaque frappe. Quand la balle tombe, on la ramasse et on reprend, sans commentaire.",
      "7 min — jeu : l’échange les yeux sur la balle du début à la fin, sans regarder le partenaire.",
    ],
    undefined,
    "La règle du haut rend les échanges faciles, et c’est fait exprès. Ce qu’on veut qu’il retienne, c’est qu’il peut choisir de rendre un échange plus facile : envoyer haut est une décision, pas un don. On regarde s’il relève la balle de lui-même quand l’échange s’accélère.",
  ),

  f("dh-raquette-10", "Jeux de raquette", "Raquette 10 · la cible au sol",
    [
      "On quitte l’échange pour la précision : des zones tracées à la craie ou marquées par des objets, et des balles à y envoyer.",
      "Trois cibles de tailles différentes, valant la même chose : ce n’est pas un barème, c’est un choix d’exigence qu’il fait lui-même.",
      "Un jour où ça ne va pas : on ne garde que la grande cible et on double les essais.",
    ],
    [
      "5 min — échauffement : rebonds, cinq minutes d’échange libre à deux.",
      "9 min — la grande cible, deux mètres sur deux, à six mètres : vingt envois, sans compter. On regarde la courbe de la balle : envoyée en cloche, elle se pose ; frappée à plat, elle file au-delà.",
      "9 min — la cible moyenne, un mètre sur un : vingt envois. Puis la petite, un demi-mètre : dix envois.",
      "7 min — jeu : il choisit sa cible avant chaque envoi, dix fois, et annonce son choix à voix haute.",
    ],
    undefined,
    "Le jeu final est le plus instructif : celui qui vise toujours la grande cible cherche la réussite, celui qui vise toujours la petite cherche le défi. Ni l’un ni l’autre n’est mieux, et il est intéressant de savoir lequel il est, pour le reste de l’année et pas seulement ici.",
  ),

  f("dh-raquette-11", "Jeux de raquette", "Raquette 11 · bouger entre deux zones",
    [
      "On ajoute le déplacement latéral : deux zones marquées à trois mètres l’une de l’autre, et l’adulte envoie alternativement dans l’une et dans l’autre.",
      "Le repère est le retour au centre : après chaque frappe, deux pas chassés vers le milieu.",
      "Un jour où ça ne va pas : on rapproche les deux zones à deux mètres.",
    ],
    [
      "5 min — échauffement : pas chassés entre deux repères, vingt allers-retours, raquette en main.",
      "9 min — l’adulte envoie alternativement à gauche et à droite, vingt fois, à un rythme lent. Consigne : retour au centre entre chaque.",
      "9 min — même chose au hasard, vingt fois, un peu plus vite.",
      "7 min — jeu : la balle renvoyée dans une zone annoncée pendant qu’il court. Dix essais, puis échange libre pour finir.",
    ],
    undefined,
    "Ce qu’on regarde, ce sont les pieds entre deux balles : croisés, ils font tomber ; chassés, ils replacent. S’il revient au centre sans qu’on le lui dise à partir de la dixième balle, l’habitude est prise et elle ne se reperd plus.",
  ),

  f("dh-raquette-12", "Jeux de raquette", "Raquette 12 · près du filet",
    [
      "Le jeu court : balles reprises tôt, geste bref, pas d’élan. Un filet, une corde tendue, ou simplement une ligne au sol.",
      "Le geste est un bloc, pas une frappe : on pose la raquette devant la balle et on la laisse rebondir dessus.",
      "Un jour où ça ne va pas : on garde la même distance mais on envoie plus lentement.",
    ],
    [
      "5 min — échauffement : rebonds, échange lent à cinq mètres.",
      "9 min — face à face à trois mètres, sans rebond au sol, avec un geste court. Vingt échanges lents.",
      "9 min — échanges au filet, sans compter. La balle tombe vite à cette distance, on le dit avant.",
      "7 min — jeu : un joueur au filet, l’autre au fond. Dix balles chacun, puis on échange les rôles.",
    ],
    undefined,
    "La tentation est de faire un grand geste ; près du filet il n’y a pas le temps, et la balle part loin. Le jour où il raccourcit son geste tout seul parce que le grand ne marche pas, il a appris à s’adapter — c’est plus important que le coup lui-même.",
  ),

  f("dh-raquette-13", "Jeux de raquette", "Raquette 13 · les trois règles ensemble",
    [
      "Une séance qui rassemble ce qui a été appris : haut, lent, retour au centre. On joue à deux, et on ne compte rien — ni les échanges, ni les balles tombées.",
      "Avant de commencer, on redit les trois règles ensemble, à voix haute.",
      "Un jour où ça ne va pas : une seule règle, le haut, et on joue tranquillement.",
    ],
    [
      "5 min — échauffement : rebonds, cinq minutes d’échange lent et haut.",
      "10 min — échanges avec la première règle seule, puis la deuxième ajoutée : haut, puis haut et lent. Quand la balle tombe, on repart sans commentaire.",
      "10 min — les trois règles ensemble : haut, lent, et deux pas chassés vers le centre après chaque frappe. Une minute de pause au milieu.",
      "5 min — jeu libre à la raquette, sans consigne, pour finir quoi qu’il arrive.",
    ],
    undefined,
    "On regarde quelle règle tient quand l’échange s’accélère, et laquelle s’en va la première — presque toujours le retour au centre. C’est celle-là qu’on reprendra au début de la séance suivante, sans la lui présenter comme un manque. Quand un échange dure, on peut dire d’où ça vient : trois choses apprises cette année, pas de la chance.",
  ),

  f("dh-raquette-14", "Jeux de raquette", "Raquette 14 · la partie où l’on joue ensemble",
    [
      "Une partie dont les deux joueurs sont du même côté : on joue comme en match — service, zones, déplacements —, mais le but commun est que la balle reste en jeu. Personne ne marque de point, et on ne compte pas les échanges.",
      "Avant chaque service, celui qui sert annonce la zone où il va envoyer la balle, pour que l’autre ait le temps de s’y préparer.",
      "Un jour où ça ne va pas : on échange librement, sans service ni zones.",
    ],
    [
      "5 min — échauffement : rebonds, échange libre.",
      "10 min — première manche : service annoncé, échange, et quand la balle tombe, c’est l’autre qui sert. On ne tient aucun score.",
      "10 min — deuxième manche : même chose, en ajoutant le retour au centre après chaque frappe.",
      "5 min — on s’assoit, on boit, et chacun raconte un échange qui lui a plu — pas le plus long, celui qu’il a aimé.",
    ],
    undefined,
    "Ce format fait disparaître l’enjeu de gagner sans supprimer le jeu, ce qui est exactement ce qu’on cherche. On regarde s’il envoie des balles faciles à l’adulte sans qu’on le lui demande : c’est le plus bel argument contre l’idée que jouer fort est jouer bien.",
  ),

  f("dh-raquette-15", "Jeux de raquette", "Raquette 15 · les jeux de l’année",
    [
      "Dernière séance de l’année : on rejoue les jeux qu’il a préférés, et c’est lui qui les choisit. Aucun chiffre à ressortir : il n’y en a pas.",
      "Toutes les règles apprises sont autorisées et même recommandées : haut, lent, retour au centre, geste court au filet.",
      "Un jour où ça ne va pas : on joue librement, un seul jeu, celui qu’il veut.",
    ],
    [
      "6 min — échauffement complet : rebonds, échanges lents, pas chassés entre deux repères.",
      "9 min — échanges lents et hauts, pour retrouver le rythme le plus calme possible.",
      "12 min — les jeux qu’il choisit parmi ceux de l’année : le mur et la ligne de craie, la cible au sol, les deux zones, le filet. Une minute de pause entre deux jeux.",
      "3 min — pour finir, il montre à l’adulte le coup qu’il aime le plus jouer, et l’adulte le lui renvoie.",
    ],
    undefined,
    "On regarde les règles qu’il applique sans qu’on les lui rappelle : la balle envoyée haut quand l’échange se tend, les pas chassés, la prise souple. Ce qui s’est installé se voit dans le jeu, sans chiffre ; ce qui ne l’est pas encore ne se dit pas aujourd’hui.",
  ),

  /* ------------------------------------------------------------------ *
   * Danse et rythme — 16 fiches. La consigne tient en trois verbes :
   * suivre une pulsation, inventer huit temps, les refaire à l'identique.
   * Chaque fiche garde les trois, et ajoute une seule chose nouvelle.
   * La musique, quand il y en a, est celle de la maison — on n'a besoin
   * d'aucun morceau particulier, et frapper dans les mains suffit.
   * ------------------------------------------------------------------ */

  f("dh-danse-01", "Danse et rythme", "Danse 1 · trouver la pulsation",
    [
      "Dehors, sur une terrasse, dans un jardin, dans une cour. Sans musique d’abord : l’adulte frappe une pulsation régulière dans les mains, l’enfant s’y accroche.",
      "La pulsation est ce sur quoi on taperait du pied sans y penser. On la cherche ensemble et on ne la définit pas autrement.",
      "Un jour où ça ne va pas : on garde les deux premiers temps et on marche sur la pulsation jusqu’à la fin.",
    ],
    [
      "5 min — échauffement : marche libre, rotations de la tête, des épaules, des hanches, des chevilles.",
      "8 min — l’adulte frappe une pulsation lente, l’enfant frappe avec lui. On accélère, on ralentit, on s’arrête net — il doit s’arrêter en même temps.",
      "9 min — on inverse : c’est lui qui mène, l’adulte suit. Il choisit trois vitesses différentes, l’une après l’autre.",
      "8 min — avec un morceau que vous aimez, à la maison ou sur une enceinte portable : trouver la pulsation et frapper dessus. Trois morceaux différents.",
    ],
    undefined,
    "On regarde s’il tape sur la pulsation ou légèrement après : taper après, c’est réagir ; taper dessus, c’est anticiper, et c’est le début de tout. Ça se travaille en ralentissant, jamais en accélérant.",
  ),

  f("dh-danse-02", "Danse et rythme", "Danse 2 · marcher sur les quatre temps",
    [
      "On passe des mains aux pieds : la pulsation devient un pas. Puis on compte par quatre, ce qui est la façon la plus simple de découper le temps.",
      "Le premier temps se marque — plus fort, plus haut, plus net — pour qu’on sache où l’on est.",
      "Un jour où ça ne va pas : on compte par quatre en marchant, sans rien ajouter.",
    ],
    [
      "5 min — échauffement : marche libre, montées de genoux, rotations des chevilles et des hanches.",
      "8 min — marcher sur la pulsation frappée par l’adulte. Puis compter à voix haute : un, deux, trois, quatre, un, deux, trois, quatre.",
      "9 min — marquer le premier temps : un pas plus appuyé, ou un frappé de mains sur le un. Puis marquer le un et le trois.",
      "8 min — avec de la musique : compter par quatre en marchant, et lever le bras à chaque un. Trois morceaux.",
    ],
    undefined,
    "Compter et bouger en même temps est difficile, et le compte se perd d’abord. S’il retrouve le un tout seul après l’avoir perdu, il entend la structure — c’est ce qu’on cherche, plus que la régularité du compte.",
  ),

  f("dh-danse-03", "Danse et rythme", "Danse 3 · quatre mouvements, huit temps",
    [
      "La première vraie phrase de la série : huit temps, quatre mouvements, chacun tenu deux temps. C’est la brique de tout ce qui suit.",
      "Il choisit les quatre mouvements. L’adulte n’en propose aucun, il ne fait que compter.",
      "Un jour où ça ne va pas : deux mouvements sur quatre temps, ce qui est la même idée en plus court.",
    ],
    [
      "5 min — échauffement : marche sur la pulsation, comptage par quatre, mobilisation générale.",
      "8 min — l’invention : il choisit quatre mouvements simples et différents — un bras qui monte, un tour, un accroupi, un pas de côté. On les essaie un par un sur deux temps.",
      "9 min — l’enchaînement : les quatre à la suite, sur huit temps, l’adulte comptant à voix haute. Dix fois.",
      "8 min — avec de la musique : la même suite, en trouvant le un du morceau pour partir. Cinq fois.",
    ],
    undefined,
    "On regarde si les quatre mouvements sont vraiment différents ou s’il y en a deux qui se ressemblent. Ce n’est pas un défaut, c’est une occasion : lui demander lequel il voudrait remplacer, et le laisser choisir.",
  ),

  f("dh-danse-04", "Danse et rythme", "Danse 4 · la même suite, trois fois",
    [
      "L’exigence du jour est dans la consigne du rituel : refaire à l’identique. C’est plus difficile qu’inventer, et beaucoup moins spectaculaire.",
      "On reprend la suite de huit temps de la séance précédente. S’il ne s’en souvient pas, on en refait une et on travaille celle-là.",
      "Un jour où ça ne va pas : deux fois à l’identique au lieu de trois.",
    ],
    [
      "5 min — échauffement : marche sur la pulsation, comptage par quatre.",
      "8 min — retrouver la suite de la fois précédente, morceau par morceau. On la redit à voix haute avant de la faire : « bras, tour, accroupi, pas de côté ».",
      "10 min — la suite trois fois d’affilée, sans s’arrêter entre, sur vingt-quatre temps comptés. Cinq tentatives.",
      "7 min — l’adulte filme ou regarde attentivement et dit ce qui a changé entre la première et la troisième. Pas ce qui est mal fait : ce qui a changé.",
    ],
    undefined,
    "Ce qui change entre trois répétitions est presque toujours la taille des gestes, qui se rétrécissent quand on se concentre sur l’ordre. Le lui dire, et proposer de refaire une fois en pensant seulement à faire grand.",
  ),

  f("dh-danse-05", "Danse et rythme", "Danse 5 · le miroir",
    [
      "Face à face, l’un mène et l’autre copie en temps réel. Puis on échange. C’est le meilleur exercice d’attention de toute la série.",
      "Celui qui mène doit bouger lentement pour que l’autre puisse suivre : c’est une contrainte, et elle fait tout le travail.",
      "Un jour où ça ne va pas : seul l’adulte mène, et on ne change pas les rôles.",
    ],
    [
      "5 min — échauffement : marche sur la pulsation, mobilisation générale.",
      "8 min — l’adulte mène, mouvements lents et continus, sans musique. Puis avec musique, sur la pulsation.",
      "9 min — l’enfant mène, l’adulte copie. L’adulte suit vraiment, y compris ce qui est difficile.",
      "8 min — en alternance : on change de meneur tous les huit temps, sans s’arrêter. C’est là que c’est amusant.",
    ],
    undefined,
    "Quand c’est lui qui mène, on regarde s’il ralentit pour être suivi ou s’il accélère pour perdre l’autre. Ralentir pour l’autre, c’est déjà danser à deux, et ça ne se demande pas — ça s’observe et ça vient.",
  ),

  f("dh-danse-06", "Danse et rythme", "Danse 6 · deux fois huit temps",
    [
      "On double la phrase : seize temps, deux suites de huit qui s’enchaînent. La première est celle qu’il connaît, la deuxième est nouvelle.",
      "Le passage de l’une à l’autre est le point difficile : on le répète seul, plusieurs fois, avant de faire l’ensemble.",
      "Un jour où ça ne va pas : on garde les huit premiers temps et on ajoute juste deux mouvements.",
    ],
    [
      "5 min — échauffement : marche sur la pulsation, révision de la première suite.",
      "8 min — l’invention de la deuxième suite : quatre nouveaux mouvements sur huit temps, choisis par lui.",
      "9 min — le passage : les deux derniers temps de la première suite et les deux premiers de la deuxième, dix fois de suite, à l’arrêt puis en mouvement.",
      "8 min — l’ensemble, seize temps, huit fois. Avec musique sur les trois dernières.",
    ],
    undefined,
    "Travailler la jointure plutôt que l’ensemble est une méthode qui sert partout — en musique, en récitation, en calcul. Si on peut nommer ce qu’on vient de faire — « on a répété seulement l’endroit difficile » — il pourra le refaire ailleurs.",
  ),

  f("dh-danse-07", "Danse et rythme", "Danse 7 · frappé long, frappé court",
    [
      "Une séance sur le rythme plutôt que sur le mouvement : on frappe des durées différentes à l’intérieur de la même pulsation.",
      "Le vocabulaire n’est pas nécessaire — long et court suffisent — mais si les mots noire et croche sont connus, ils vont très bien ici.",
      "Un jour où ça ne va pas : on reste sur les frappés longs et on les fait bouger dans le corps.",
    ],
    [
      "5 min — échauffement : pulsation frappée, marche dessus.",
      "8 min — deux frappés courts pour un temps : on tape deux fois plus vite que la pulsation. Quatre temps lents, quatre temps rapides, en alternance.",
      "9 min — un rythme à imiter : l’adulte frappe quatre temps mêlant longs et courts, l’enfant le répète. Dix rythmes différents, de plus en plus longs.",
      "8 min — l’enfant invente un rythme de quatre temps, l’adulte le répète. Puis on met ce rythme dans les pieds au lieu des mains.",
    ],
    undefined,
    "Répéter un rythme entendu est une mémoire à part entière. On ne note pas jusqu’où il va : on regarde s’il garde la pulsation en répétant, ou s’il la perd pour retrouver les coups. Quand le rythme devient trop long pour lui, on revient au précédent sans rien dire, et on finit sur celui-là.",
  ),

  f("dh-danse-08", "Danse et rythme", "Danse 8 · au sol, à mi-hauteur, debout",
    [
      "Le mouvement gagne une dimension : la hauteur. Chaque groupe de huit temps traverse les trois hauteurs.",
      "Passer du sol à debout prend du temps et de la place : prévoir un sol propre et de quoi se salir un peu.",
      "Un jour où ça ne va pas : deux hauteurs au lieu de trois, debout et à mi-hauteur.",
    ],
    [
      "5 min — échauffement : marche sur la pulsation, mobilisation, cinq montées et descentes au sol tranquilles.",
      "8 min — explorer les trois hauteurs séparément : quatre temps au sol, quatre temps à mi-hauteur, quatre temps debout, sans chercher de suite.",
      "9 min — une suite de huit temps qui traverse les trois : deux au sol, trois à mi-hauteur, trois debout, dans l’ordre qu’il choisit.",
      "8 min — la suite refaite cinq fois à l’identique, avec musique sur les trois dernières.",
    ],
    undefined,
    "Les transitions entre hauteurs sont ce qui fait qu’une danse coule ou saccade. On regarde s’il prépare la descente au temps d’avant, ou s’il tombe d’un coup. Le lui montrer une fois suffit souvent à changer toute la phrase.",
  ),

  f("dh-danse-09", "Danse et rythme", "Danse 9 · le canon à deux temps",
    [
      "Deux danseurs font la même suite, mais l’un part deux temps après l’autre. C’est simple à dire et difficile à faire.",
      "Chacun doit tenir sa propre place sans se laisser attirer par l’autre. C’est là tout l’exercice.",
      "Un jour où ça ne va pas : on fait la suite ensemble, sans décalage, et on la soigne.",
    ],
    [
      "5 min — échauffement : marche sur la pulsation, révision de la suite de huit temps.",
      "8 min — le décalage expliqué et essayé au ralenti : l’adulte part, l’enfant compte un-deux puis part. Quatre essais très lents.",
      "9 min — le canon à vitesse normale, huit essais. On s’arrête et on repart dès que les deux se rejoignent.",
      "8 min — on inverse : l’enfant part le premier. Puis un canon à quatre temps de décalage, plus facile, pour finir.",
    ],
    undefined,
    "Se laisser attirer par l’autre est le réflexe normal, et il cède au bout de plusieurs essais. Ce qu’on regarde, c’est s’il regarde l’autre ou s’il compte : compter tient le canon, regarder le casse — et c’est un beau petit fait à découvrir.",
  ),

  f("dh-danse-10", "Danse et rythme", "Danse 10 · la même suite, lente puis rapide",
    [
      "Une suite connue, jouée à trois vitesses : lente, normale, rapide. Ce n’est pas la même danse, et ce n’est pas le même effort.",
      "En lent, le corps doit tenir les positions — c’est souvent plus dur qu’en rapide, et c’est une surprise agréable à lui laisser découvrir.",
      "Un jour où ça ne va pas : deux vitesses, normale et lente.",
    ],
    [
      "5 min — échauffement : marche sur pulsation à trois vitesses, révision de la suite de seize temps.",
      "8 min — la suite à vitesse normale, cinq fois, pour l’avoir bien en main.",
      "9 min — la suite en lent, moitié moins vite, cinq fois. On tient chaque position au lieu de la traverser.",
      "8 min — la suite en rapide, cinq fois. Puis une dernière fois en lent, pour comparer les sensations.",
    ],
    undefined,
    "Presque toujours, le lent révèle des mouvements qui n’étaient pas finis et que la vitesse cachait. C’est à dire simplement : « en lent, on voit tout » — et c’est vrai en danse comme en calcul posé.",
  ),

  f("dh-danse-11", "Danse et rythme", "Danse 11 · le silence dans la mesure",
    [
      "On enlève quelque chose : un temps où l’on ne bouge pas du tout, immobile, au milieu de la phrase.",
      "L’immobilité est un mouvement à part entière et c’est le plus difficile à tenir : une seconde immobile paraît très longue.",
      "Un jour où ça ne va pas : un seul temps de silence, à la fin de la phrase, où il est plus facile.",
    ],
    [
      "5 min — échauffement : marche sur la pulsation, arrêts nets au signal, dix fois.",
      "8 min — le jeu de la statue rythmée : on bouge sur quatre temps, on s’immobilise sur quatre temps, huit fois de suite.",
      "9 min — la suite de huit temps avec un silence sur le temps 5 : on tient exactement un temps, ni plus ni moins. Dix essais.",
      "8 min — deux silences dans seize temps, placés où il veut. Il choisit et il annonce avant.",
    ],
    undefined,
    "Un silence tenu trop court est le signe qu’on le subit ; tenu juste, il devient une intention. On regarde s’il remplit le silence de petits gestes nerveux ou s’il l’habite. Cela s’installe en une séance ou en dix, et il n’y a rien à forcer.",
  ),

  f("dh-danse-12", "Danse et rythme", "Danse 12 · une suite qui raconte",
    [
      "On donne un sens aux huit temps : chaque groupe de deux temps porte un verbe d’action, choisi à l’avance.",
      "Quatre verbes, quatre gestes, et une petite histoire qui se lit de l’extérieur. L’adulte devra deviner l’histoire à la fin.",
      "Un jour où ça ne va pas : deux verbes sur huit temps, tenus quatre temps chacun.",
    ],
    [
      "5 min — échauffement : marche sur la pulsation, révision d’une suite connue.",
      "8 min — le choix des verbes : quatre verbes qui s’enchaînent — chercher, trouver, porter, poser ; se cacher, guetter, bondir, s’enfuir. Il choisit, on les écrit dans l’ordre.",
      "9 min — la composition : deux temps par verbe, huit temps en tout. On essaie, on ajuste, on refait.",
      "8 min — trois exécutions à l’identique. À la fin, l’adulte dit ce qu’il a compris de l’histoire, et on compare avec la liste écrite.",
    ],
    undefined,
    "L’écart entre ce qu’il voulait raconter et ce qui se voit est le contenu de la séance, et il n’y a aucun tort à cet écart. S’il veut le réduire, il agrandira ses gestes tout seul — c’est la solution qu’on trouve toujours, et elle ne se souffle pas.",
  ),

  f("dh-danse-13", "Danse et rythme", "Danse 13 · le rythme des pieds",
    [
      "Le rythme passe dans les pieds : frappés au sol, pas sautés, pas glissés. On entend ce qu’on danse.",
      "Une surface qui sonne aide beaucoup — terrasse, dalle, planche posée. L’herbe ne fait aucun bruit et rend l’exercice difficile.",
      "Un jour où ça ne va pas : on frappe dans les mains et on marche, ce qui garde toute l’idée.",
    ],
    [
      "5 min — échauffement : marche sur la pulsation, montées de genoux, chevilles.",
      "8 min — trois frappés de base : le pied plat, la pointe, le talon. Chacun sur quatre temps, puis en alternance.",
      "9 min — reprise du jeu de la séance 7 : l’adulte frappe un rythme de quatre temps avec les pieds, l’enfant le reproduit. Dix rythmes, de plus en plus longs, et on revient à un rythme court dès qu’un long ne vient pas. On ne note rien.",
      "8 min — il compose un rythme de huit temps aux pieds, le refait trois fois à l’identique, et l’adulte le reproduit à son tour.",
    ],
    undefined,
    "On ne compare pas avec la séance 7. On regarde ce que les pieds ajoutent : le poids du corps qui passe d’un pied à l’autre sans casser la pulsation. S’il perd l’équilibre en frappant, on revient aux frappés à plat, qui laissent le corps tranquille.",
  ),

  f("dh-danse-14", "Danse et rythme", "Danse 14 · trois fois huit temps",
    [
      "La phrase complète : vingt-quatre temps, trois groupes de huit, avec un début, un milieu et une fin qui ne se ressemblent pas.",
      "Les deux premiers groupes existent déjà depuis la séance 6. On n’écrit que le troisième aujourd’hui, et c’est lui qui doit conclure.",
      "Un jour où ça ne va pas : on garde deux fois huit et on soigne la fin.",
    ],
    [
      "5 min — échauffement : marche sur la pulsation, révision des seize temps connus.",
      "8 min — l’invention du troisième groupe : huit temps qui terminent. On cherche ensemble ce qui fait qu’une fin ressemble à une fin — plus lent, plus grand, immobile.",
      "9 min — les deux jointures travaillées séparément, dix fois chacune.",
      "8 min — la phrase entière, six fois, dont trois avec musique.",
    ],
    undefined,
    "On regarde s’il tient la fin jusqu’au dernier temps, ou s’il s’arrête au vingt-deuxième. Finir complètement est ce qui distingue une danse d’un enchaînement de gestes, et c’est ce qu’on préparera pour la dernière séance.",
  ),

  f("dh-danse-15", "Danse et rythme", "Danse 15 · improviser, puis refaire à l’identique",
    [
      "La consigne du rituel dans sa forme la plus exigeante : huit temps inventés sur le moment, puis refaits exactement.",
      "On improvise sans réfléchir, une seule fois, et ensuite seulement on essaie de se rappeler ce qu’on vient de faire. C’est le contraire de ce qu’on a fait toute l’année.",
      "Un jour où ça ne va pas : quatre temps improvisés au lieu de huit.",
    ],
    [
      "5 min — échauffement : marche sur la pulsation, mouvements libres sans consigne.",
      "8 min — quatre improvisations de huit temps, sans chercher à les retenir. On ne commente rien, on les laisse passer.",
      "9 min — une cinquième improvisation, puis tout de suite : la refaire. Puis la refaire encore. Trois fois cet exercice, avec trois improvisations différentes.",
      "8 min — l’adulte improvise huit temps, l’enfant les reproduit. Puis l’inverse.",
    ],
    undefined,
    "Se souvenir de ce qu’on vient de faire est plus difficile que de se souvenir de ce qu’on a appris : le corps a fait sans que la tête enregistre. Ce qu’on regarde, c’est s’il retrouve deux mouvements sur quatre, ou trois — et c’est déjà beaucoup.",
  ),

  f("dh-danse-16", "Danse et rythme", "Danse 16 · la chorégraphie de l’année",
    [
      "La dernière séance rassemble : quatre fois huit temps, composés des morceaux préférés de l’année, avec une fin tenue.",
      "S’il veut la montrer à quelqu’un, très bien ; s’il ne veut pas, c’est exactement pareil et la séance est entière. Ne pas transformer ceci en représentation sans qu’il l’ait demandé.",
      "Un jour où ça ne va pas : trois fois huit temps, ceux qu’il connaît le mieux.",
    ],
    [
      "5 min — échauffement complet : pulsation, hauteurs, frappés de pieds.",
      "9 min — le choix : on liste ensemble ce qui a été inventé cette année — la suite de la séance 3, le canon, les silences, l’histoire en verbes, le rythme des pieds. Il en retient quatre groupes de huit.",
      "10 min — le montage : les quatre groupes bout à bout, jointures travaillées, fin tenue jusqu’au dernier temps.",
      "6 min — trois exécutions complètes avec musique, dont la dernière sans compter à voix haute.",
    ],
    undefined,
    "La chorégraphie finale vaut par ce qu’elle contient de l’année entière, pas par sa qualité. On regarde ce qu’il a choisi de garder de l’année, et on peut le lui dire : c’est sa danse, faite de ce qu’il a inventé lui-même. Si la dernière exécution sans compte flotte un peu, on recompte avec lui et on finit ensemble.",
  ),

  /* ------------------------------------------------------------------ *
   * Jardinage ou bricolage — 17 fiches. La consigne dit planter, arroser,
   * mesurer, réparer : la série alterne les deux mains, celle du jardin et
   * celle de l'établi, en suivant les saisons. On mesure vraiment, on
   * écrit ce qu'on a fait, et le carnet du jardin se referme fin juin.
   * Sans jardin, tout tient en pots sur un balcon ou un rebord.
   * ------------------------------------------------------------------ */

  f("dh-mains-01", "Jardinage ou bricolage", "Les mains 1 · nommer et ranger les outils",
    [
      "La première séance de l’année sert à savoir de quoi on dispose : on sort tout, on nomme, on range, et on écrit la liste.",
      "Nommer un outil, c’est pouvoir le demander. C’est plus utile qu’il n’y paraît pour toutes les séances qui suivent.",
      "Les outils coupants se manipulent avec l’adulte, et cette règle se dit une fois, calmement, au début.",
    ],
    [
      "8 min — sortir les outils du jardin et de l’établi et les poser en ligne sur une bâche ou une table. Les nommer un par un, à voix haute ; l’adulte donne le nom quand il manque.",
      "8 min — les classer : ce qui coupe, ce qui serre, ce qui creuse, ce qui mesure. Il fait les tas, l’adulte discute les cas douteux.",
      "9 min — le rangement, avec une place décidée pour chaque famille. On accroche, on étiquette si l’on veut.",
      "5 min — la liste écrite dans un carnet neuf, qui sera le carnet du jardin et de l’atelier de toute l’année. On y note aussi ce qui manque.",
    ],
    undefined,
    "Ce qu’on regarde, c’est quels outils il sait déjà nommer, sans les compter. La liste du carnet servira toute l’année : le jour où il demande la tenaille par son nom au lieu de « le truc pour arracher », quelque chose s’est installé.",
  ),

  f("dh-mains-02", "Jardinage ou bricolage", "Les mains 2 · planter des bulbes, à la bonne profondeur",
    [
      "Décembre : il est encore temps pour les bulbes de printemps, les tulipes surtout, tant que la terre n’est pas gelée. Tulipes, jonquilles, crocus, ou de l’ail si l’on préfère l’utile.",
      "La règle se calcule et ne se devine pas : on plante un bulbe à trois fois sa propre hauteur. C’est le contenu mathématique de la séance.",
      "Un jour où ça ne va pas : cinq bulbes au lieu de vingt, dans un pot plutôt qu’en pleine terre.",
    ],
    [
      "6 min — mesurer : chaque bulbe est mesuré à la règle, sa hauteur écrite au carnet, et la profondeur de plantation calculée en le multipliant par trois.",
      "8 min — préparer : ameublir la terre, tracer l’emplacement, creuser les trous à la bonne profondeur en vérifiant avec la règle ou un bâton gradué.",
      "10 min — planter : pointe vers le haut, racines vers le bas, reboucher, tasser légèrement, arroser.",
      "6 min — le carnet : la date, l’espèce, le nombre, la profondeur, et une prédiction — quand est-ce qu’ils sortiront ? On y reviendra en mars.",
    ],
    undefined,
    "La multiplication par trois faite sur un objet réel, avec une règle, vaut dix exercices sur papier. On regarde s’il vérifie la profondeur avant de poser le bulbe ou après avoir rebouché — vérifier avant est une habitude d’artisan et elle s’apprend ici.",
  ),

  f("dh-mains-03", "Jardinage ou bricolage", "Les mains 3 · les feuilles et le tas de compost",
    [
      "Décembre : les dernières feuilles sont tombées, et au lieu de les jeter on en fait de la terre. La séance est un travail de force et une leçon de biologie qui ne dit pas son nom.",
      "Si l’on n’a pas de composteur, un simple tas dans un coin ou un grand sac percé fait l’affaire.",
      "Un jour où ça ne va pas : on ramasse un seul coin du jardin, et on regarde le tas de l’an dernier s’il y en a un.",
    ],
    [
      "8 min — le ramassage : râteau, balai, et une bâche pour transporter. On fait un tas au point de départ.",
      "8 min — le tri, en regardant de près : les feuilles fines se décomposent vite, les grosses branches non. On met de côté ce qui ne va pas au compost.",
      "8 min — le montage du tas : une couche de feuilles, une poignée de terre, on mouille, on recommence. Puis on mesure la hauteur du tas et on l’écrit.",
      "6 min — le carnet : la date, la hauteur du tas, et une prédiction — de combien aura-t-il baissé en janvier ? On y reviendra à la séance 7.",
    ],
    undefined,
    "La hauteur du tas mesurée et écrite est le genre de mesure qui prend son sens un mois plus tard. On regarde s’il demande pourquoi le tas va baisser : si la question vient, c’est le moment d’en parler, et si elle ne vient pas, elle viendra en janvier.",
  ),

  f("dh-mains-04", "Jardinage ou bricolage", "Les mains 4 · visser, dévisser, resserrer",
    [
      "Une séance d’établi : on fait le tour de la maison et on resserre ce qui bouge. Chaises, poignées, charnières, pieds de table.",
      "La technique tient en deux choses : le bon tournevis pour la bonne empreinte, et on visse dans le sens des aiguilles d’une montre.",
      "Un jour où ça ne va pas : trois objets au lieu de six.",
    ],
    [
      "6 min — la reconnaissance des empreintes : plat, cruciforme, six pans. On les compare, on choisit le bon tournevis pour cinq vis différentes.",
      "8 min — l’entraînement sur une chute de bois : dix vis à visser et à dévisser, en tenant le tournevis dans l’axe et en poussant autant qu’on tourne.",
      "11 min — le tour de la maison : chercher six choses qui bougent et les resserrer. Si une vis tourne dans le vide, on apprend l’astuce — une allumette ou un cure-dent dans le trou.",
      "5 min — le carnet : la liste de ce qui a été réparé, avec la date, et ce qui n’a pas pu l’être et pourquoi.",
    ],
    undefined,
    "On regarde s’il pousse en même temps qu’il tourne : sans pression, le tournevis saute et abîme la vis. C’est le seul geste technique à transmettre aujourd’hui, et il se corrige en une minute.",
  ),

  f("dh-mains-05", "Jardinage ou bricolage", "Les mains 5 · bouturer, et une plantation d’hiver",
    [
      "Janvier : on fabrique des plantes à partir d’autres plantes, à l’abri de la maison. Une bouture est une expérience dont le résultat arrive dans six semaines.",
      "Les plus faciles : géranium, menthe, romarin, saule, laurier. En verre d’eau pour les plus simples, en terre pour les autres.",
      "Un jour où ça ne va pas : deux boutures au lieu de six, et on arrose l’existant.",
    ],
    [
      "8 min — prélever : six tiges de dix à quinze centimètres, coupées net sous un nœud, les feuilles du bas retirées. On mesure et on écrit la longueur de chacune.",
      "8 min — installer : trois en verre d’eau, trois en pot de terreau, arrosées et placées à la lumière sans soleil direct. On étiquette avec la date et l’espèce.",
      "8 min — pendant ce temps, dehors, un jour où la terre n’est pas gelée : planter un arbuste en godet, en creusant un trou deux fois plus large que la motte, et en arrosant abondamment.",
      "6 min — le carnet : les six boutures avec leur longueur, la date, et la prédiction de combien prendront racine.",
    ],
    undefined,
    "Toutes les boutures ne prennent pas, et c’est à dire maintenant, pas au moment où elles noircissent : trois sur six est un bon résultat pour n’importe qui. Ce qu’on regarde ensuite, c’est s’il va les vérifier tout seul dans la semaine.",
  ),

  f("dh-mains-06", "Jardinage ou bricolage", "Les mains 6 · la mangeoire à oiseaux",
    [
      "Janvier : le premier vrai objet fabriqué. Une mangeoire simple — une planche, quatre bords, une ficelle — ou une plus simple encore, un bloc de graisse dans un filet.",
      "On mesure et on trace avant de couper, et on coupe une seule fois. La scie se tient avec l’adulte la première fois, et il pourra ensuite.",
      "Un jour où ça ne va pas : on fait la version sans scie — un carton épais, une bouteille, ou le bloc de graisse.",
    ],
    [
      "7 min — le croquis, coté : la planche de fond, la taille des bords, l’emplacement du trou pour la ficelle. On écrit les mesures en centimètres sur le dessin.",
      "8 min — le traçage et la coupe : on reporte les mesures au crayon et à l’équerre, on vérifie, puis on scie.",
      "9 min — l’assemblage : clous ou vis, les bords sur le fond, et le trou pour la ficelle percé en dernier.",
      "6 min — l’installation dehors, à l’abri du vent et hors de portée des chats, et le remplissage. Le carnet : le croquis coté collé ou recopié, et la date.",
    ],
    undefined,
    "L’écart entre le croquis et l’objet fini est ce qui se regarde : une planche coupée un centimètre trop court se voit sur l’objet et pas sur le dessin. S’il mesure deux fois avant de scier sans qu’on le lui rappelle, il a compris ce que le proverbe dit et qu’on reverra à la séance 11.",
  ),

  f("dh-mains-07", "Jardinage ou bricolage", "Les mains 7 · nettoyer, graisser, ranger l’hiver",
    [
      "Janvier : rien ne pousse, on s’occupe des outils. Brosser la terre, essuyer, huiler les parties métalliques, resserrer les manches.",
      "Un outil entretenu dure et coupe mieux : c’est visible et immédiat, ce qui rend la séance concrète.",
      "Un jour où ça ne va pas : trois outils au lieu de tous.",
    ],
    [
      "8 min — le nettoyage : brosse métallique sur les bêches et les binettes, eau et chiffon sur le reste, séchage complet avant la suite.",
      "8 min — le graissage : un chiffon huilé sur toutes les parties métalliques, un peu d’huile sur les articulations des sécateurs et des cisailles.",
      "8 min — les manches : vérifier qu’aucun ne bouge, resserrer ou recoller, poncer une écharde s’il y en a.",
      "6 min — le tour du compost de la séance 3 : mesurer la hauteur du tas, l’écrire au carnet en face de celle de décembre, et regarder ensemble ce qui s’est passé dessous.",
    ],
    undefined,
    "Le tas de compost a baissé, même en plein hiver, et la différence entre la prédiction de décembre et la mesure de janvier est le vrai moment de la séance. Il n’y a rien à corriger dans sa prédiction : on regarde ensemble, et la question du pourquoi vient d’elle-même.",
  ),

  f("dh-mains-08", "Jardinage ou bricolage", "Les mains 8 · réparer trois objets",
    [
      "Une séance d’atelier consacrée entièrement à la réparation. Rassembler à l’avance trois objets cassés qui attendent : un jouet, une poignée, un vêtement décousu, une lampe sans pile.",
      "La règle de la séance : on regarde et on comprend avant de toucher. Diagnostiquer d’abord, réparer ensuite.",
      "Un jour où ça ne va pas : un seul objet, celui qui lui tient à cœur.",
    ],
    [
      "8 min — le diagnostic des trois objets : pour chacun, il dit ce qui est cassé, pourquoi ça ne marche plus, et ce qu’il faudrait. L’adulte écoute sans corriger tout de suite.",
      "8 min — la première réparation, la plus simple, faite entièrement par lui avec l’outil qu’il a choisi.",
      "9 min — les deux autres, à deux si nécessaire. Si l’une est impossible, on le dit et on note pourquoi — c’est une réponse, pas un échec.",
      "5 min — le carnet : les trois objets, la panne, la réparation ou la raison de l’impossibilité.",
    ],
    undefined,
    "Le diagnostic est plus formateur que la réparation, et il se regarde seul : dit-il « c’est cassé » ou « la vis est partie et le bras ne tient plus » ? Le second est une description, et c’est ce qu’on cherche à faire grandir toute l’année.",
  ),

  f("dh-mains-09", "Jardinage ou bricolage", "Les mains 9 · les semis en godets",
    [
      "Février : on sème à l’abri ce qu’on repiquera en avril. Tomates, salades, radis, ou des fleurs si l’on préfère.",
      "Chaque godet porte une étiquette avec l’espèce et la date. Sans étiquette, dans trois semaines, plus personne ne sait rien.",
      "Un jour où ça ne va pas : une seule espèce, six godets.",
    ],
    [
      "7 min — la préparation : remplir douze godets de terreau, tasser légèrement, arroser avant de semer plutôt qu’après.",
      "9 min — le semis : lire le sachet — profondeur, distance, durée de germination — et le respecter. Deux ou trois graines par godet, recouvertes de leur épaisseur de terreau.",
      "8 min — l’étiquetage et l’installation : étiquettes écrites, godets sur un plateau, à la lumière et au chaud.",
      "6 min — le carnet : un tableau à quatre colonnes — espèce, date de semis, durée annoncée sur le sachet, date de levée prévue. La dernière colonne se calcule.",
    ],
    undefined,
    "Le calcul de la date de levée est une addition de durée sur un calendrier, et il se vérifiera tout seul dans deux semaines. On regarde s’il va voir les godets sans qu’on le lui demande : l’attente fait partie de ce qu’on apprend ici.",
  ),

  f("dh-mains-10", "Jardinage ou bricolage", "Les mains 10 · préparer la terre et tracer les rangs",
    [
      "Mi-février : on prépare le sol pour les semis directs du printemps. Bêcher ou griffer, enlever les cailloux et les racines, ratisser fin.",
      "Puis on trace des rangs au cordeau, espacés selon ce que dit le sachet. C’est de la mesure sur le terrain, et elle se fait au mètre ruban.",
      "Un jour où ça ne va pas : on prépare un carré d’un mètre sur un, ce qui suffit largement.",
    ],
    [
      "10 min — la préparation du sol : griffer sur vingt centimètres, retirer cailloux et racines, ratisser jusqu’à ce que la surface soit fine.",
      "8 min — le traçage : deux piquets et une ficelle pour faire un rang droit. On mesure l’écart entre les rangs au mètre ruban, d’après le sachet, et on trace trois ou quatre rangs.",
      "7 min — le semis en ligne : graines espacées, recouvertes, tassées du dos du râteau, arrosées en pluie fine.",
      "5 min — le carnet : le plan du carré avec les rangs, les espèces, les écarts en centimètres, et la date.",
    ],
    undefined,
    "Le plan dessiné à l’échelle du carnet est de la géométrie faite pour une raison réelle. On regarde si les écarts qu’il reporte sur le dessin sont proportionnels ou approximatifs : si la question se pose, c’est le bon moment pour parler d’échelle, comme au vélo.",
  ),

  f("dh-mains-11", "Jardinage ou bricolage", "Les mains 11 · mesurer deux fois, couper une fois",
    [
      "Une étagère simple, deux tasseaux et une planche, ou une caisse, ou un support à outils. Le proverbe est la consigne du jour.",
      "Toutes les mesures sont prises deux fois, par lui, et écrites avant la moindre coupe. L’adulte ne mesure pas à sa place.",
      "Un jour où ça ne va pas : on fait un objet à deux pièces au lieu de quatre.",
    ],
    [
      "8 min — le relevé : mesurer l’endroit où l’objet ira, deux fois, et écrire les deux mesures. Si elles diffèrent, on mesure une troisième fois et on cherche pourquoi.",
      "7 min — le croquis coté : chaque pièce dessinée avec sa longueur, et la liste du bois nécessaire.",
      "10 min — le traçage et la coupe : trait à l’équerre, coupe du bon côté du trait, vérification de chaque pièce après la coupe.",
      "5 min — l’assemblage, la pose, et le carnet : le croquis coté, les mesures réelles des pièces finies, et l’écart s’il y en a un.",
    ],
    undefined,
    "L’écart entre la mesure prévue et la pièce finie est presque toujours de un à trois millimètres, et découvrir que c’est normal est libérateur. On regarde s’il mesure la pièce après l’avoir coupée : c’est le geste d’un artisan, et il ne va pas de soi.",
  ),

  f("dh-mains-12", "Jardinage ou bricolage", "Les mains 12 · repiquer, arroser, tuteurer",
    [
      "Avril : les semis de février sont assez grands pour aller dehors. Repiquer, c’est déménager une plante sans lui casser les racines.",
      "On repique le soir ou par temps couvert, jamais en plein soleil, et on arrose abondamment juste après.",
      "Un jour où ça ne va pas : on repique trois plants au lieu de douze, le reste attendra.",
    ],
    [
      "7 min — le tri : regarder les douze godets, mesurer la hauteur de chaque plant, et choisir ceux qui sont prêts. On écrit les hauteurs au carnet.",
      "10 min — le repiquage : trou à la profondeur de la motte, plant déposé sans tirer sur la tige, terre ramenée, tassée du bout des doigts.",
      "7 min — l’arrosage au pied et non sur les feuilles, abondamment, et le tuteurage des plants qui en ont besoin, attachés en huit sans serrer.",
      "6 min — le carnet : le plan du carré avec l’emplacement de chaque plant, les hauteurs du jour, et la date.",
    ],
    undefined,
    "Les hauteurs écrites aujourd’hui se compareront aux mêmes plants en juin, à la séance 15 : c’est la seule mesure de croissance de l’année et elle est spectaculaire. Pour le reste, on regarde s’il manipule les racines doucement — c’est un geste qui s’apprend en le voyant faire une fois.",
  ),

  f("dh-mains-13", "Jardinage ou bricolage", "Les mains 13 · le carré mesuré",
    [
      "Une séance de mathématiques dans la terre : on délimite un carré, on calcule son aire, on calcule combien de plants y tiennent à l’écart recommandé.",
      "Le calcul se fait avant de planter, et il décide de ce qu’on plante. C’est ce qui le rend vrai.",
      "Un jour où ça ne va pas : un carré d’un mètre sur un, et un seul calcul.",
    ],
    [
      "8 min — délimiter : un carré de deux mètres sur deux au cordeau et aux piquets, mesuré au ruban, avec les angles vérifiés en comparant les deux diagonales.",
      "8 min — calculer : l’aire du carré en mètres carrés ; puis, sachant qu’un plant a besoin de quarante centimètres autour de lui, combien de plants tiennent sur une ligne, et combien de lignes. Il pose les calculs au carnet.",
      "9 min — planter d’après le calcul, en vérifiant les écarts au ruban. Si le compte ne tombe pas juste sur le terrain, on cherche ensemble où était l’erreur ou l’arrondi.",
      "5 min — le carnet : le plan coté du carré, le calcul écrit, et le nombre réellement planté.",
    ],
    undefined,
    "L’écart entre le nombre calculé et le nombre planté est le plus intéressant du jour : il vient presque toujours des bords, où l’on ne peut pas mettre un plant à quarante centimètres du cordeau. Trouver cette raison-là vaut mieux que de tomber juste du premier coup.",
  ),

  f("dh-mains-14", "Jardinage ou bricolage", "Les mains 14 · le vélo, la chambre à air et la chaîne",
    [
      "Une séance de mécanique, sur son propre vélo : démonter une roue, réparer ou changer une chambre à air, nettoyer et huiler la chaîne, régler les freins.",
      "Il fait, l’adulte guide. Une compétence qu’on garde à vie se transmet mieux en regardant faire qu’en faisant à sa place.",
      "Un jour où ça ne va pas : on fait seulement la chaîne, qui est la plus facile et la plus utile.",
    ],
    [
      "10 min — la roue et la chambre à air : dégonfler, démonter avec deux démonte-pneus, sortir la chambre, trouver le trou en la gonflant, poser une rustine ou remplacer, remonter en vérifiant que la chambre n’est pas pincée.",
      "8 min — la chaîne : brosser, dégraisser au chiffon, huiler maillon par maillon en tournant les pédales à l’envers, essuyer le surplus.",
      "7 min — les freins : vérifier l’usure des patins, régler la tension du câble pour que le levier ne touche pas le guidon, vérifier que la roue tourne libre.",
      "5 min — l’essai dans la cour, et le carnet : ce qui a été fait, et ce qui sera à refaire dans un mois.",
    ],
    undefined,
    "La chambre à air est la réparation qui libère : savoir la faire, c’est pouvoir partir loin sans dépendre de quelqu’un. On regarde surtout s’il pense à chercher ce qui a causé la crevaison à l’intérieur du pneu — sans ça, la nouvelle chambre crève aussi, et c’est une leçon que tout le monde apprend une fois.",
  ),

  f("dh-mains-15", "Jardinage ou bricolage", "Les mains 15 · récolter et peser",
    [
      "Juin : on récolte ce qui a été semé en février et repiqué en avril. La séance ferme la boucle et se mesure.",
      "Une balance de cuisine dehors, et le carnet ouvert aux pages de février et d’avril.",
      "Un jour où ça ne va pas : on récolte ce qui est mûr et on pèse, sans le reste.",
    ],
    [
      "8 min — la récolte : cueillir ce qui est prêt, sans arracher ce qui continue. On regarde comment savoir qu’un légume est mûr, espèce par espèce.",
      "8 min — la pesée : chaque espèce pesée séparément, le poids écrit au carnet. Puis le total.",
      "8 min — les hauteurs : mesurer les mêmes plants qu’en avril et écrire les nouvelles hauteurs en face des anciennes. La différence se calcule.",
      "6 min — le carnet, page de février : combien de graines semées, combien de plants levés, combien de plants ont donné quelque chose. Les trois nombres côte à côte.",
    ],
    undefined,
    "Les trois nombres — graines, plants, récoltes — disent quelque chose de vrai sur le vivant : on sème toujours plus qu’on ne récolte, et ce n’est la faute de personne. C’est une idée qui vaut d’être dite explicitement à un enfant que l’échec inquiète.",
  ),

  f("dh-mains-16", "Jardinage ou bricolage", "Les mains 16 · un objet utile, du croquis à l’objet",
    [
      "La grande fabrication de l’année : un objet qu’il a choisi et qui servira vraiment — jardinière, boîte à outils, nichoir, banc bas, support de plantes.",
      "Tout ce qui a été appris sert ici : le croquis coté, mesurer deux fois, visser dans l’axe, assembler d’équerre.",
      "Un jour où ça ne va pas : on fait le croquis et la découpe aujourd’hui, l’assemblage attendra — un objet peut se construire en deux fois.",
    ],
    [
      "7 min — le croquis coté, entièrement par lui : toutes les pièces, toutes les longueurs, la liste du matériel et des vis.",
      "8 min — le traçage et la découpe, pièce par pièce, avec vérification de chaque pièce après la coupe.",
      "10 min — l’assemblage : pré-percer avant de visser pour que le bois n’éclate pas, vérifier l’équerrage avant de serrer complètement.",
      "5 min — la finition — poncer les angles, une couche d’huile ou de peinture si l’on veut — et le carnet : le croquis d’origine et une photo ou un dessin de l’objet fini.",
    ],
    undefined,
    "On regarde ce qu’il fait quand une pièce ne tombe pas juste : recouper, compenser, ou changer le plan. Les trois sont de bonnes réponses, et savoir qu’un plan peut être modifié en cours de route est ce qu’un objet fabriqué enseigne mieux que n’importe quel exercice.",
  ),

  f("dh-mains-17", "Jardinage ou bricolage", "Les mains 17 · le carnet du jardin, refermé",
    [
      "La dernière séance de l’année relit le carnet du début à la fin, mesure une dernière fois, et prépare la suite.",
      "Ce n’est pas un bilan à commenter : c’est une lecture à deux, page par page, en s’arrêtant sur ce qui fait plaisir à relire.",
      "Un jour où ça ne va pas : on relit le carnet à l’ombre et on arrose, ce qui est une séance entière.",
    ],
    [
      "8 min — les mesures de fin d’année : la hauteur des plants, le tour du tronc de l’arbuste planté en janvier, le nombre de boutures qui ont tenu, la hauteur du compost. Tout s’écrit sur une dernière page.",
      "8 min — l’entretien de saison : arroser, pailler le pied des plants pour l’été, récolter ce qui est prêt, tailler ce qui gêne.",
      "9 min — la relecture du carnet, page par page, de décembre à juin. On s’arrête à chaque prédiction écrite et on regarde ce qui s’est passé.",
      "5 min — la dernière page : trois choses à refaire l’année prochaine, et une chose à essayer qu’on n’a pas faite.",
    ],
    undefined,
    "Les prédictions du carnet sont ce qu’il y a de plus intéressant à relire : certaines étaient justes, d’autres non, et toutes ont servi à regarder. C’est exactement ce qu’on veut qu’il garde — prédire n’est pas risquer de se tromper, c’est la façon d’observer.",
  ),
];
