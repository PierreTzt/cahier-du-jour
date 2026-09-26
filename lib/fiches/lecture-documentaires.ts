/**
 * Lecture d’un documentaire — dix-neuf séances de l’année, pour dix-huit fiches.
 *
 * Le rituel tombe dix-neuf fois, du 5 janvier au 30 juin, trente minutes à
 * chaque fois, en français. Les dix-huit fiches servent toutes, et la
 * première revient le 30 juin. Sa consigne tient en une phrase : « Une double
 * page documentaire. Relever la nature et la source du document avant de
 * lire. » Tout le reste — la double page elle-même — manquait.
 *
 * Ce qu’une fiche donne, et pourquoi : voir `lib/fiches/types.ts`. En deux
 * mots — le matériel exact, le corrigé quand il y en a un, et ce qu’on
 * regarde. Un adulte qui l’ouvre ne doit plus rien avoir à chercher.
 *
 * **Réservé aux adultes** : ces fiches portent les corrigés.
 *
 * ## Les documentaires sont écrits ici, et les sources sont inventées
 *
 * Aucune de ces doubles pages n’est extraite d’un magazine, d’un manuel ou
 * d’un livre : elles sont écrites pour ce cahier, et rien n’y est recopié.
 * Les mentions de nature et de source — « magazine de sciences pour enfants,
 * mars 2024 », « brochure du syndicat des eaux, 2023 » — sont donc
 * **inventées, et plausibles**, comme le reste de la page. Elles sont le
 * matériel de l’exercice : c’est sur elles que porte le geste du rituel.
 * Aucune ne désigne une publication réelle, et il ne faut en chercher aucune.
 *
 * Les **faits**, eux, sont exacts autant qu’on a su les vérifier, et les
 * ordres de grandeur sont justes. Quand un nombre est une estimation et non
 * une mesure, la page le dit — c’est même, à partir de la fiche 14, ce qu’on
 * y apprend à lire.
 *
 * ## Ce que la série travaille, et dans quel ordre
 *
 * Les fiches d’un même rituel forment une série, et la n-ième occurrence du
 * rituel donne la n-ième fiche. Elles sont donc écrites dans l’ordre, de la
 * plus simple à la plus exigeante, et la série s’étale de janvier à juin.
 *
 *   - fiches 1 à 5 — trouver la nature et la source avant de lire, et
 *     découvrir que l’information se cache aussi dans l’encadré et dans le
 *     schéma ;
 *   - fiches 6 à 10 — dire *où* se trouve une information, et commencer à
 *     regarder qui écrit : un musée, un service des eaux, un office de
 *     tourisme n’ont pas les mêmes raisons de parler ;
 *   - fiches 11 à 15 — la date qui périme, deux documents qui ne disent pas
 *     la même chose, un chiffre estimé contre un chiffre compté, un schéma
 *     qui exagère et qui l’avoue ;
 *   - fiches 16 à 18 — écrites comme une réserve, au même degré d’exigence
 *     que la fin de l’année ; depuis la trame du 17 septembre 2026, elles
 *     tombent en juin.
 *
 * Le socle de tout cela est la leçon `f-p4-documents`, « Lire un document
 * pour apprendre » (période 4) : nature et source d’abord, le document
 * composite, et partir de la question plutôt que du premier paragraphe. Les
 * premières fiches installent le geste bien avant que la leçon ne le nomme,
 * et c’est voulu — neuf séances avant elle font mieux qu’une leçon seule.
 *
 * ## Comment lire le matériel
 *
 * Une entrée du tableau `materiel` par bloc de la double page, dans l’ordre
 * où on la lit : le titre, le chapeau, les paragraphes, l’encadré chiffré, le
 * schéma décrit en mots, la mention de nature et de source, puis les
 * questions. Le `corrige` suit entrée pour entrée : en face d’un bloc de
 * texte il n’y a rien à corriger et la case est vide, en face d’une question
 * il y a la réponse attendue et, le plus souvent, l’endroit de la page où
 * elle se trouve.
 *
 * La mention de nature et de source se déplace d’une fiche à l’autre : elle
 * est annoncée en clair au début de l’année, puis rejoint le bas de page
 * comme dans un vrai document — il faut alors aller la chercher.
 *
 * Rien de tout ceci n’a été relu par un enseignant. Ça doit l’être.
 */

import { f, type Fiche } from "./types";

export const lectureDocumentaires: Fiche[] = [
  /* ================================================================== */
  /* JANVIER ET FÉVRIER — installer le geste                             */
  /* Nature et source avant de lire. L’encadré et le schéma sont du      */
  /* texte, eux aussi.                                                   */
  /* ================================================================== */

  f(
    "ld-doc-01",
    "Lecture d’un documentaire",
    "Documentaire 1 · L’escargot, un animal qui porte sa maison",
    [
      "Avant de lire une seule ligne du texte, il cherche deux choses et les dit à voix haute : de quelle sorte de document il s’agit, et d’où il vient. C’est le geste du jour, et il tient en trente secondes.",
      "Ensuite seulement, il lit la page entière, encadré et schéma compris. Les questions viennent après, et il a le droit de revenir dans la page autant de fois qu’il veut : un documentaire ne se lit pas de mémoire.",
      "Le jour où ça coince : lire le titre et la ligne de source à sa place, et ne garder que les deux premières questions. Ce qu’on travaille aujourd’hui est le repérage, pas le nombre de réponses.",
    ],
    [
      "Titre — L’escargot, un animal qui porte sa maison",
      "Chapeau — Il traverse l’allée du jardin pendant la nuit et personne ne le voit partir. Voici ce qu’il y a sous la coquille.",
      "Texte 1 — L’escargot est un mollusque : un animal au corps mou, sans squelette à l’intérieur. Sa coquille lui sert d’abri et de protection. Elle est faite de calcaire, la même matière que la craie, et elle grandit en même temps que lui, en s’enroulant toujours du même côté. Un escargot ne change jamais de coquille : il l’agrandit par le bord.",
      "Texte 2 — Pour avancer, il n’a qu’un seul pied, large et musclé, étalé sous tout son corps. Il fabrique un mucus — ce qu’on appelle la bave — qui lui permet de glisser sans se blesser, même sur une arête de pierre. C’est lent : quelques mètres en une heure. Sa langue, elle, est râpeuse : elle porte des milliers de dents minuscules avec lesquelles il gratte les feuilles au lieu de les mordre.",
      "Texte 3 — L’escargot perd son eau très vite, et c’est pour cela qu’il sort surtout la nuit et par temps de pluie. Quand l’hiver arrive, il se retire au fond de sa coquille et ferme l’ouverture avec un couvercle de mucus durci. Il attend. Au printemps, la pluie ramollit le couvercle, et il ressort.",
      "Encadré — Quatre nombres : 4 tentacules sur la tête ; 2 yeux seulement, tout au bout des deux plus grands ; des milliers de dents minuscules sur la langue ; environ 5 mois passés enfermé, de novembre à mars.",
      "Schéma : un escargot vu de côté, en gros plan, avec cinq mots posés dessus et reliés par un trait fin — la coquille, le pied, la tête, les deux grands tentacules qui portent les yeux, les deux petits qui servent à sentir.",
      "Nature et source — page d’un magazine de nature pour enfants, numéro d’octobre 2023, rubrique « Les petites bêtes du jardin ».",
      "Question 1 — De quelle sorte de document s’agit-il ?",
      "Question 2 — De quelle année date-t-il ?",
      "Question 3 — En quoi la coquille est-elle faite ?",
      "Question 4 — Combien l’escargot a-t-il de tentacules, et lesquels portent les yeux ?",
    ],
    [
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "Une page de magazine — un magazine de nature pour enfants. C’est écrit à la dernière ligne de la page, et nulle part dans le texte.",
      "Octobre 2023. La date fait partie de la source, au même titre que le nom du magazine.",
      "En calcaire, la même matière que la craie. L’information est dans le premier paragraphe.",
      "Quatre tentacules. Les yeux sont au bout des deux plus grands. Le texte le dit et le schéma le montre une seconde fois : les deux réponses sont bonnes.",
    ],
    "Ce qu’on regarde : par où il commence. S’il se jette dans le premier paragraphe sans avoir regardé d’où vient la page, il n’y a rien à corriger sur le moment — la fois suivante, poser une feuille sur le texte et ne découvrir que le titre et la ligne de source, jusqu’à ce qu’il les ait nommés tous les deux. Noter aussi s’il va chercher dans le schéma ce que le texte ne lui rend pas : c’est le réflexe qu’on installe pour toute l’année.",
  ),

  f(
    "ld-doc-02",
    "Lecture d’un documentaire",
    "Documentaire 2 · Dans la ruche, cinquante mille habitantes",
    [
      "Même début que la fois précédente : nature et source à voix haute, avant le texte. Une troisième question s’ajoute aujourd’hui — pour qui cette page a-t-elle été écrite ?",
      "Le schéma se lit en même temps que le texte, et non après lui : lui demander de poser un doigt sur l’étage dont parle le paragraphe qu’il vient de lire.",
      "Le jour où ça coince : garder le schéma et l’encadré, laisser les trois paragraphes de côté, et ne poser que les questions 1, 2 et 4. Une page documentaire se laisse découper, c’est même à cela qu’elle sert.",
    ],
    [
      "Titre — Dans la ruche, cinquante mille habitantes",
      "Chapeau — Une ruche n’est pas une maison : c’est une ville, avec des étages, des réserves, et un seul animal capable de pondre.",
      "Texte 1 — Une colonie d’abeilles compte trois sortes d’habitants. Une seule reine, plus longue que les autres, qui ne fait rien d’autre que pondre. Des dizaines de milliers d’ouvrières, toutes femelles, qui nettoient, nourrissent les larves, bâtissent la cire, montent la garde, et ne partent butiner que dans les derniers jours de leur vie. Et, du printemps à l’été, quelques centaines de mâles, les faux bourdons, qui ne piquent pas et ne butinent pas.",
      "Texte 2 — Les ouvrières fabriquent la cire avec leur propre corps et en bâtissent des alvéoles. Chaque alvéole a six côtés : cette forme-là remplit l’espace sans laisser le moindre vide entre deux voisines, et c’est celle qui demande le moins de cire. Les alvéoles servent tantôt de berceau pour une larve, tantôt de pot pour le miel.",
      "Texte 3 — Le miel n’est pas récolté tel quel dans les fleurs. C’est du nectar, rapporté dans le jabot de l’ouvrière, transformé, puis séché par le battement des ailes jusqu’à ce qu’il n’en reste presque plus d’eau. Alors seulement les ouvrières ferment l’alvéole avec un opercule de cire. Il faut butiner plusieurs millions de fleurs pour un seul kilogramme de miel.",
      "Encadré — La ruche en été, en quatre nombres : 1 reine ; jusqu’à 50 000 ouvrières ; jusqu’à 2 000 œufs pondus par la reine en une seule journée ; 6 côtés à chaque alvéole.",
      "Schéma : une coupe de la ruche, avec trois étages nommés — en bas le corps, où la reine pond et où grandissent les larves ; au-dessus la hausse, où les ouvrières entassent le miel ; par-dessus le toit. Une flèche part de l’entrée, en bas à gauche, et remonte dans le corps.",
      "Nature et source — double page d’un livre documentaire pour les 8-12 ans, Les animaux qui travaillent, édition de 2021.",
      "Question 1 — Quelle est la nature de ce document : un article de journal, un livre documentaire, ou une affiche ?",
      "Question 2 — De quelle année est cette édition ?",
      "Question 3 — Combien d’ouvrières une ruche peut-elle compter au plus fort de l’été ?",
      "Question 4 — D’après le schéma, que trouve-t-on dans la hausse ?",
      "Question 5 — Combien de côtés a une alvéole, et pourquoi cette forme-là ?",
    ],
    [
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "Un livre documentaire. Le titre du livre et l’âge auquel il s’adresse sont donnés à la ligne de source.",
      "2021.",
      "Jusqu’à 50 000. Le nombre est dans l’encadré : le texte, lui, dit seulement « des dizaines de milliers ».",
      "Le miel. Le corps, en dessous, est réservé à la ponte et aux larves.",
      "Six côtés. Cette forme remplit l’espace sans laisser de vide et demande le moins de cire possible. La réponse est en deux morceaux : le nombre est dans l’encadré, la raison dans le texte.",
    ],
    "Ce qu’on regarde : est-ce qu’il va chercher dans l’encadré ce que le texte ne donne pas en chiffres. La question 3 est faite pour cela — le texte dit « des dizaines de milliers », l’encadré dit 50 000. S’il répond « des dizaines de milliers », la réponse est juste, et c’est le bon moment pour lui montrer que l’encadré était plus précis. La prochaine fois, la même chose sur une autre page : où est le nombre exact ?",
  ),

  f(
    "ld-doc-03",
    "Lecture d’un documentaire",
    "Documentaire 3 · Ce qui se passe dans une pâte à pain",
    [
      "Nature et source d’abord, comme chaque fois. Une question de plus à poser avant de lire, aujourd’hui : est-ce qu’un musée du pain a une raison de mal raconter le pain ? Il n’y a pas de réponse à donner, seulement à y penser une fois.",
      "Il lit, puis il répond. Avant la dernière question, on le lui dit : « la réponse n’est pas dans le texte : cherche ailleurs sur la page ». Chercher sur la page, c’est le travail ; relire trois fois un texte où la réponse n’est pas n’apprend rien.",
      "Le jour où ça coince : lire le texte à voix haute à sa place, une seule fois, puis lui laisser la page et les questions. Entendre un texte fatigue beaucoup moins que le déchiffrer.",
    ],
    [
      "Titre — Ce qui se passe dans une pâte à pain",
      "Chapeau — Quatre ingrédients, et un être vivant qu’on ne voit pas. Le pain est un des rares aliments qui gonflent tout seuls.",
      "Texte 1 — Une pâte à pain ordinaire ne contient que quatre choses : de la farine, de l’eau, du sel et de la levure. Le boulanger pétrit, et ce pétrissage n’est pas un simple mélange : il étire les protéines de la farine, qui s’accrochent les unes aux autres et finissent par former un réseau élastique. C’est ce réseau qui retiendra les bulles.",
      "Texte 2 — La levure est un champignon microscopique. Des milliards de ces champignons se nourrissent des sucres de la farine et rejettent un gaz, le dioxyde de carbone. Le gaz ne peut pas s’échapper : il reste prisonnier du réseau élastique et pousse la pâte de l’intérieur, qui double de volume sans que personne y touche. C’est ce qu’on appelle la fermentation.",
      "Texte 3 — Au four, tout s’arrête. Passé une soixantaine de degrés, la levure meurt ; les bulles, elles, restent en place et deviennent les trous de la mie. La croûte se forme en dernier : l’eau de la surface s’en va, et les sucres brunissent. C’est la même coloration que celle d’un oignon dans une poêle.",
      "Encadré — Une baguette en quatre nombres : 4 ingrédients ; environ 250 grammes une fois cuite ; 240 degrés dans le four ; une vingtaine de minutes de cuisson.",
      "Schéma : trois dessins d’une même boule de pâte, côte à côte. Au premier, elle est petite et serrée ; au deuxième, elle a doublé et de petites bulles apparaissent sous la surface ; au troisième, elle est cuite et coupée en deux, et les bulles sont devenues des trous. Sous chaque dessin, une durée : 0 minute, 90 minutes, 110 minutes.",
      "Nature et source — livret distribué à l’entrée d’un musée de la meunerie, imprimé en 2022, page « De la farine au pain ».",
      "Question 1 — Quelle est la nature de ce document, et qui l’a fait faire ?",
      "Question 2 — En quelle année a-t-il été imprimé ?",
      "Question 3 — Qu’est-ce que la levure ?",
      "Question 4 — Quel gaz fait gonfler la pâte, et d’où vient-il ?",
      "Question 5 — D’après le schéma, combien de temps la pâte lève-t-elle avant d’entrer au four ?",
    ],
    [
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "Un livret de musée : ni un article de journal, ni un manuel. Il a été fait faire par un musée de la meunerie, c’est-à-dire par des gens dont le métier est de raconter la farine et le pain.",
      "2022.",
      "Un champignon microscopique. Le mot « champignon » surprend souvent : le relever au passage plutôt que de glisser dessus.",
      "Le dioxyde de carbone. Il est rejeté par la levure, qui se nourrit des sucres de la farine.",
      "Quatre-vingt-dix minutes : c’est la durée écrite sous le deuxième dessin, celui où la pâte a doublé. Le troisième, à 110 minutes, est déjà cuit. L’information n’est nulle part dans le texte.",
    ],
    "Ce qu’on regarde : la question 5. Une fois prévenu que la réponse n’est pas dans le texte, va-t-il d’abord à l’encadré, au schéma, ou tourne-t-il la page ? S’il ne pense pas au schéma, c’est que le schéma n’est pas encore un endroit où il va chercher. Le remède tient en une habitude à prendre à la fin de chaque séance : lui faire dire où se trouvait chaque réponse — texte, encadré ou schéma. Trois mots, et ça se garde d’une fois sur l’autre.",
  ),

  f(
    "ld-doc-04",
    "Lecture d’un documentaire",
    "Documentaire 4 · Comment on fabrique le verre",
    [
      "Nature et source avant tout le reste, et à voix haute. Trois mots suffisent : un article, un magazine, mars 2024.",
      "Le schéma raconte la même chose que le texte, dans le même ordre. Lui faire suivre la flèche du doigt pendant qu’il relit le deuxième paragraphe : c’est la meilleure façon de comprendre qu’une page documentaire dit deux fois les choses, de deux manières.",
      "Le jour où ça coince : ne garder que le schéma et les questions 1 et 3. Le reste attendra, et la page se relira un autre jour sans que ce soit un rattrapage.",
    ],
    [
      "Titre — Comment on fabrique le verre",
      "Chapeau — Du sable entre d’un côté, une vitre plate sort de l’autre, et entre les deux la matière n’est jamais posée sur quoi que ce soit de dur.",
      "Texte 1 — Le verre se fabrique avec trois matières premières : du sable, qui en fait presque tout, du carbonate de sodium et du calcaire. Les deux dernières servent à abaisser la température à laquelle le sable fond, et à rendre le verre résistant à l’eau. Le mélange est versé dans un four, où il devient un liquide épais comme du miel.",
      "Texte 2 — Pour faire une vitre, on ne l’étale pas au rouleau : le verre liquide est versé sur un bain d’étain fondu. L’étain est plus lourd que le verre, il ne se mélange pas à lui, et sa surface est parfaitement plate. Le verre s’étale tout seul dessus et prend cette planéité. Il avance en ruban, refroidit, durcit, et sort du bain en une plaque continue.",
      "Texte 3 — Un verre qui refroidit trop vite se fend. Le ruban traverse donc un long tunnel où la température baisse lentement, pendant une heure ou davantage, avant d’être découpé. Et une fois brisé, le verre ne devient pas un déchet ordinaire : refondu, il redonne du verre sans rien perdre de ses qualités, et personne ne sait dire combien de fois on peut recommencer.",
      "Encadré — Quatre nombres : 3 matières premières ; 1 500 degrés dans le four ; environ 600 degrés à la sortie du bain d’étain, quand le ruban est assez ferme pour être soulevé ; 0 perte de qualité quand on refond du verre déjà utilisé.",
      "Schéma : une bande horizontale qui traverse la double page de gauche à droite, en quatre cases nommées — le four, où tout fond ; le bain d’étain fondu, où le verre s’étale ; le tunnel de refroidissement ; la table de découpe. Une seule flèche va d’un bout à l’autre, et elle ne revient jamais en arrière.",
      "Nature et source — article d’un magazine de sciences pour enfants, numéro de mars 2024, rubrique « Comment c’est fait ».",
      "Question 1 — Quelle est la nature de ce document, et de quel mois date-t-il ?",
      "Question 2 — Quelles sont les trois matières premières du verre ?",
      "Question 3 — Pourquoi verse-t-on le verre liquide sur de l’étain fondu ?",
      "Question 4 — Pourquoi le ruban traverse-t-il un long tunnel avant d’être découpé ?",
      "Question 5 — L’information « 1 500 degrés » se trouve-t-elle dans le texte, dans l’encadré ou dans le schéma ?",
    ],
    [
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "Un article de magazine — un magazine de sciences pour enfants — dans le numéro de mars 2024.",
      "Le sable, le carbonate de sodium et le calcaire. Le sable en fait presque tout.",
      "Parce que la surface de l’étain fondu est parfaitement plate et que le verre ne s’y mélange pas : il s’étale tout seul et devient plat sans qu’on y touche.",
      "Parce qu’un verre qui refroidit trop vite se fend. Le tunnel fait baisser la température lentement.",
      "Dans l’encadré. Le texte dit seulement que le four rend le mélange liquide, et il ne donne aucun nombre ; le schéma nomme le four sans le chiffrer.",
    ],
    "Ce qu’on regarde : la question 5, qui ne demande pas une information mais l’endroit où elle se trouve. C’est le geste qui servira le plus longtemps — dans un devoir, dans un manuel, dans une notice de montage. S’il répond au hasard, reposer la même question sur deux autres nombres de la page, sans rien expliquer de plus : la troisième fois, il regarde avant de répondre.",
  ),

  f(
    "ld-doc-05",
    "Lecture d’un documentaire",
    "Documentaire 5 · D’où vient l’eau du robinet",
    [
      "Nature et source d’abord. Aujourd’hui, la source est le cœur de la séance : ce document est écrit par le service qui distribue l’eau. Le lui faire remarquer avant de lire, pas après.",
      "Une question à poser à la fin, qui n’est pas dans la liste : qu’est-ce que cette brochure ne dit pas ? Le prix, les fuites du réseau, ce qui se passe l’été quand la nappe baisse. Il n’a pas à le deviner ; il suffit qu’il entende qu’un document choisit ce qu’il montre.",
      "Le jour où ça coince : s’en tenir aux questions 1, 3 et 5, qui se répondent avec le schéma seul.",
    ],
    [
      "Titre — D’où vient l’eau du robinet",
      "Chapeau — Entre la nappe souterraine et le verre posé sur la table, l’eau parcourt une dizaine de kilomètres et monte une fois dans les airs.",
      "Texte 1 — Sur notre territoire, l’eau distribuée vient d’une nappe souterraine : une couche de sable et de graviers, à quarante mètres sous les champs, où l’eau de pluie s’est accumulée en s’infiltrant. Un forage la remonte. Elle passe ensuite par l’usine de traitement, où elle est filtrée sur du sable puis désinfectée, pour que rien de vivant n’y subsiste.",
      "Texte 2 — L’eau traitée est pompée une seule fois, jusqu’en haut du château d’eau. À partir de là, plus aucune pompe : c’est la hauteur qui pousse. Le château d’eau est bâti plus haut que le toit de la maison la plus haute du village, et c’est pour cette raison-là, et pour aucune autre, qu’il est perché.",
      "Texte 3 — Une fois utilisée, l’eau ne disparaît pas. Elle repart par une seconde canalisation vers la station d’épuration, où elle est nettoyée avant d’être rendue à la rivière. Les deux réseaux ne se rencontrent jamais : celui qui apporte, et celui qui remporte.",
      "Encadré — Quatre nombres : environ 150 litres par habitant et par jour ; 6 à 9 litres pour une chasse d’eau ; une trentaine de mètres de hauteur pour notre château d’eau ; 0 pompe entre le château d’eau et votre robinet.",
      "Schéma : une coupe du terrain, de gauche à droite — le forage qui descend dans la nappe, l’usine de traitement, le château d’eau sur ses pieds, les maisons plus bas, puis la station d’épuration et la rivière. Une ligne en pointillé part du sommet du château d’eau et file à l’horizontale : elle passe au-dessus de tous les toits.",
      "Nature et source — brochure éditée par le syndicat des eaux d’une communauté de communes, déposée dans les boîtes aux lettres en 2023.",
      "Question 1 — Quelle est la nature de ce document ?",
      "Question 2 — Qui l’a écrit : un journal, un éditeur de livres, ou le service qui distribue l’eau ?",
      "Question 3 — Pourquoi le château d’eau est-il construit en hauteur ?",
      "Question 4 — Combien d’eau un habitant utilise-t-il par jour, d’après ce document ?",
      "Question 5 — D’après le schéma, où va l’eau après avoir été utilisée ?",
    ],
    [
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "Une brochure, distribuée dans les boîtes aux lettres. Ce n’est pas un article : personne ne l’a achetée, elle est arrivée toute seule.",
      "Le syndicat des eaux, c’est-à-dire le service qui distribue l’eau. Il connaît son réseau mieux que personne, et il a aussi intérêt à ce qu’on soit content de son travail. Les deux sont vrais en même temps, et c’est exactement ce qu’il faut garder en tête.",
      "Parce que la hauteur remplace la pompe : l’eau redescend toute seule jusqu’aux robinets. Le château d’eau est plus haut que le toit le plus haut du village.",
      "Environ 150 litres. Le nombre est dans l’encadré.",
      "Vers la station d’épuration, puis vers la rivière. Le schéma le montre à droite, et le troisième paragraphe le dit aussi.",
    ],
    "Ce qu’on regarde : est-ce qu’il accepte qu’un document puisse être exact et intéressé en même temps. Beaucoup d’enfants entendent « intéressé » comme « menteur » et rejettent alors toute la page. S’il conclut que la brochure raconte des histoires, reprendre un fait vérifiable — la hauteur qui remplace la pompe — et lui montrer qu’il tient debout quel que soit celui qui l’écrit. C’est la nuance de toute la fin de l’année, on l’ouvre aujourd’hui sans espérer la refermer.",
  ),

  f(
    "ld-doc-06",
    "Lecture d’un documentaire",
    "Documentaire 6 · Deux cent six os, et pas un de trop",
    [
      "Nature et source d’abord. Sur ce document, la deuxième question demande un avis et non une information : une date ne pèse pas le même poids selon le sujet. Lui laisser le temps de répondre de travers, c’est la première fois qu’on la lui pose.",
      "Une planche d’atlas se lit dans l’autre sens : l’image d’abord, le texte pour l’expliquer. Le lui dire, et le laisser regarder longuement avant de lire quoi que ce soit.",
      "Le jour où ça coince : n’en garder que quatre — 1, 3, 5 et 6. La deuxième, celle qui demande un avis, se reporte à la fois suivante sans rien perdre.",
    ],
    [
      "Titre — Deux cent six os, et pas un de trop",
      "Chapeau — Un squelette n’est pas une charpente morte posée à l’intérieur du corps : c’est un tissu vivant, qui se répare et qui fabrique du sang.",
      "Texte 1 — Un adulte compte 206 os. Un nouveau-né en a davantage, environ 270 : certains sont encore en plusieurs morceaux et se soudent au cours de la croissance. Le crâne d’un bébé, par exemple, est fait de plaques séparées par des espaces souples, ce qui lui permet de se déformer à la naissance, puis d’accompagner la croissance du cerveau.",
      "Texte 2 — L’os est vivant. Il contient des cellules qui le construisent et d’autres qui le rongent, et les deux équipes travaillent en permanence : un os qui n’est jamais sollicité s’allège, un os qui travaille s’épaissit. Au centre des os longs, la moelle rouge fabrique les cellules du sang, jour après jour, en très grande quantité.",
      "Texte 3 — Les os ne se touchent jamais directement. À chaque articulation, leurs extrémités sont recouvertes de cartilage, lisse et glissant, et maintenues ensemble par des ligaments. Le plus long os du corps est le fémur, dans la cuisse. Le plus petit s’appelle l’étrier : il mesure trois millimètres et il est logé dans l’oreille, où il transmet les vibrations du tympan.",
      "Encadré — Le squelette en quatre nombres : 206 os chez l’adulte ; environ 270 chez le nouveau-né ; 12 paires de côtes ; 3 millimètres pour l’étrier.",
      "Schéma : une silhouette de squelette vue de face, avec cinq étiquettes reliées par un trait — le crâne, la colonne vertébrale, la cage thoracique, le bassin, le fémur. À droite, un agrandissement de l’oreille : l’étrier y est dessiné à côté d’un grain de riz, pour qu’on se figure sa taille.",
      "Nature et source — planche d’un atlas du corps humain pour l’école, édition de 2020.",
      "Question 1 — Quelle est la nature de ce document ?",
      "Question 2 — De quand date-t-il ? Pour un document sur le squelette, est-ce que la date change grand-chose ?",
      "Question 3 — Combien d’os a un adulte, et combien un nouveau-né ?",
      "Question 4 — Pourquoi un nouveau-né en a-t-il davantage ?",
      "Question 5 — Où se trouve le plus petit os, et à quoi le schéma le compare-t-il ?",
      "Question 6 — L’information « 12 paires de côtes » est-elle dans le texte, dans l’encadré ou dans le schéma ?",
    ],
    [
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "Une planche d’atlas : une page faite d’abord pour être regardée, avec un texte qui accompagne l’image et non l’inverse.",
      "2020. Sur le nombre d’os, quelques années ne changent rien : c’est un fait stable, établi depuis longtemps. La date compterait bien davantage pour un document sur une maladie ou sur un traitement. Cette réponse-là se discute, elle ne se coche pas.",
      "206 chez l’adulte, environ 270 chez le nouveau-né.",
      "Parce que certains de ses os sont encore en plusieurs morceaux, qui se soudent pendant la croissance. L’exemple donné par le texte est le crâne.",
      "Dans l’oreille. Le schéma le dessine à côté d’un grain de riz.",
      "Dans l’encadré seulement. Le texte ne les mentionne pas, et le schéma nomme la cage thoracique sans la compter.",
    ],
    "Ce qu’on regarde : la question 2. Qu’il réponde « oui, ça change tout » ou « non, rien », les deux se travaillent de la même façon — lui demander un exemple de sujet où la date compterait beaucoup. S’il en trouve un, c’est acquis, même si sa première réponse était l’inverse de la nôtre.",
  ),

  /* ================================================================== */
  /* FÉVRIER À AVRIL — où est l’information, et qui l’écrit              */
  /* Nommer l’endroit d’une réponse ; un auteur peut avoir un intérêt    */
  /* sans être un menteur ; un schéma qui exagère et qui l’avoue.        */
  /* ================================================================== */

  f(
    "ld-doc-07",
    "Lecture d’un documentaire",
    "Documentaire 7 · Cinquante kilomètres, douze mètres de pente",
    [
      "Nature et source d’abord, et une chose de plus à relever cette fois : le nom du dossier dont la page est tirée. Un même magazine ne raconte pas de la même façon dans un dossier d’histoire et dans un dossier de bricolage.",
      "Le schéma porte une note en petits caractères. Lui demander de la lire à voix haute avant de répondre à quoi que ce soit : c’est elle qui fait la séance.",
      "Le jour où ça coince : lire les trois paragraphes avec lui, puis ne poser que les questions 1, 2 et 4. La quatrième est celle qui compte.",
    ],
    [
      "Titre — Cinquante kilomètres, douze mètres de pente",
      "Chapeau — Pour amener l’eau d’une source jusqu’à leur ville, des ingénieurs romains ont creusé un canal presque horizontal. Presque : c’est là toute la difficulté.",
      "Texte 1 — Au premier siècle de notre ère, la ville romaine de Nîmes manquait d’eau. On est allé la chercher à une source située à une cinquantaine de kilomètres de là, et on a construit un canal couvert pour l’amener. Ce canal ne descend que de douze mètres sur tout son parcours. Cela fait vingt-cinq centimètres de pente par kilomètre : la hauteur d’une règle d’écolier posée debout.",
      "Texte 2 — Là où le canal rencontrait la vallée du Gardon, il a fallu le faire passer en l’air. Les bâtisseurs ont élevé un pont de trois niveaux d’arches, haut de quarante-neuf mètres, le plus haut que les Romains aient construit. Les blocs de pierre, dont certains pèsent plusieurs tonnes, sont posés les uns sur les autres sans mortier dans les arches : c’est leur poids qui les tient.",
      "Texte 3 — L’eau a coulé pendant plusieurs siècles, puis l’entretien a cessé et le calcaire déposé a fini par boucher le canal. Le pont, lui, est resté debout. On y voit encore les trous où passaient les poutres de l’échafaudage et les pierres saillantes qui les soutenaient : les bâtisseurs ne les ont pas enlevées, sans doute parce qu’il faudrait revenir réparer.",
      "Encadré — L’aqueduc en quatre nombres : 50 kilomètres de la source à la ville ; 12 mètres de dénivelé sur ces 50 kilomètres, soit 25 centimètres par kilomètre ; 49 mètres de hauteur pour le pont ; 3 niveaux d’arches superposés.",
      "Schéma : une coupe en longueur de l’aqueduc, très étirée, de la source à gauche jusqu’à la ville à droite. La ligne de l’eau descend si peu qu’on l’a dessinée bien plus penchée qu’elle ne l’est, et une note en petits caractères le précise sous le dessin : « pente fortement exagérée, sans quoi elle ne se verrait pas ». Au milieu, le pont, avec ses trois étages d’arches.",
      "Nature et source — double page d’un hors-série d’histoire pour les écoliers, numéro de septembre 2022, dossier « Bâtir sans machines ».",
      "Question 1 — Quelle est la nature de ce document, et de quel dossier cette double page est-elle tirée ?",
      "Question 2 — Quelle distance sépare la source de la ville, et de combien le canal descend-il sur tout ce trajet ?",
      "Question 3 — Cela fait combien de pente par kilomètre, et à quoi le texte la compare-t-il ?",
      "Question 4 — La pente dessinée sur le schéma est-elle la vraie pente ? Où est-ce écrit ?",
      "Question 5 — Pourquoi les arches tiennent-elles sans mortier ?",
      "Question 6 — Le document dit-il en quelle année exactement le pont a été construit ?",
    ],
    [
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "Un hors-série d’histoire pour les écoliers, dossier « Bâtir sans machines ». Le dossier renseigne : la page va parler de technique, et non de batailles.",
      "Une cinquantaine de kilomètres, pour douze mètres de descente en tout.",
      "Vingt-cinq centimètres par kilomètre. Le texte la compare à la hauteur d’une règle d’écolier posée debout.",
      "Non. Le dessin penche beaucoup plus que la réalité, et la note en petits caractères sous le schéma le dit : « pente fortement exagérée, sans quoi elle ne se verrait pas ». S’il a lu cette note, l’essentiel de la séance est fait.",
      "Parce que leur poids les maintient en place : les blocs sont posés les uns sur les autres, et chacun appuie sur le suivant.",
      "Non. Il écrit « au premier siècle de notre ère », c’est-à-dire une fourchette de cent ans. Répondre « on ne le sait pas exactement » est la bonne réponse, pas un aveu.",
    ],
    "Ce qu’on regarde : la question 4. Un schéma qui exagère et qui le dit n’est pas un schéma faux — c’est un schéma honnête, et la distinction échappe à beaucoup d’adultes. S’il n’a pas vu la note, ne pas la lui lire : lui demander de chercher, sur la page, ce qui pourrait le prévenir. La trouver lui-même vaut dix explications. La question 6 est du même ordre : accepter qu’un document dise « vers » sans prendre ce mot pour une faiblesse.",
  ),

  f(
    "ld-doc-08",
    "Lecture d’un documentaire",
    "Documentaire 8 · Le barrage : de l’eau qui tombe, du courant qui part",
    [
      "Nature et source d’abord. L’auteur est aujourd’hui un office de tourisme : le relever, sans trancher tout de suite ce que cela change.",
      "Faire suivre du doigt le chemin de l’eau sur le schéma, de la retenue jusqu’à l’alternateur, avant de lire les paragraphes. Ce geste-là commence à devenir une habitude, et c’est le but.",
      "Le jour où ça coince : garder le schéma, l’encadré et les questions 1, 3 et 4. Les questions sur l’auteur demandent de la disponibilité — elles attendront sans dommage.",
    ],
    [
      "Titre — Le barrage : de l’eau qui tombe, du courant qui part",
      "Chapeau — Un barrage ne fabrique pas d’électricité. Il retient de l’eau en hauteur, et c’est la chute qui fait le reste.",
      "Texte 1 — Un barrage ferme une vallée et retient l’eau derrière lui. Plus la retenue est haute au-dessus de l’usine, plus l’eau arrive vite en bas, et plus il y a d’énergie à récupérer. La hauteur compte donc autant que la quantité d’eau : c’est ce qu’on appelle la hauteur de chute.",
      "Texte 2 — Quand on ouvre les vannes, l’eau s’engouffre dans une conduite forcée, un tuyau d’acier qui descend le long de la montagne. En bas, elle frappe les aubes d’une turbine et la fait tourner. La turbine entraîne un alternateur, qui transforme ce mouvement en courant électrique. L’eau, elle, ressort en aval et continue sa route dans la rivière.",
      "Texte 3 — Un barrage coupe aussi la vallée pour les poissons. On installe donc, sur le flanc de l’ouvrage, une échelle à poissons : une suite de petits bassins étagés que les poissons remontent l’un après l’autre. Cela ne rend pas la rivière telle qu’elle était, et des relevés comptent chaque année combien de poissons franchissent réellement l’obstacle.",
      "Encadré — Quatre nombres : 123 mètres de hauteur pour l’ouvrage ; environ 1,2 milliard de mètres cubes d’eau dans la retenue ; 1960, l’année où le lac a fini de se remplir ; à peu près un dixième de l’électricité produite en France vient de l’eau.",
      "Schéma : une coupe du barrage, l’eau haute à gauche, la vallée à droite. Quatre étiquettes suivent le chemin de l’eau dans l’ordre — la retenue, la conduite forcée qui plonge, la turbine, l’alternateur. Une cinquième étiquette, à l’écart, montre l’échelle à poissons : un escalier de petits bassins collé au flanc de l’ouvrage.",
      "Nature et source — fiche pédagogique d’un office de tourisme de montagne, mise à jour en 2023 ; le même texte est affiché sur un panneau, à l’accueil du barrage.",
      "Question 1 — Quelle est la nature de ce document, et qui l’a rédigé ?",
      "Question 2 — Un office de tourisme écrit pour donner envie de venir. Est-ce que cela rend les nombres de l’encadré faux ?",
      "Question 3 — Dans quel ordre l’eau traverse-t-elle les quatre éléments du schéma ?",
      "Question 4 — À quoi sert l’échelle à poissons ?",
      "Question 5 — Quelle part de l’électricité française vient de l’eau, d’après ce document ?",
      "Question 6 — Où est écrite la date de mise à jour, et pourquoi vaut-il mieux la connaître ?",
    ],
    [
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "Une fiche pédagogique, rédigée par un office de tourisme de montagne. Ni par celui qui exploite le barrage, ni par un journal, ni par un scientifique.",
      "Non. Un auteur qui veut plaire choisit ce qu’il raconte, il ne change pas la hauteur du barrage. Ce qu’on surveille chez lui, c’est plutôt ce qu’il passe sous silence : les villages noyés lors de la mise en eau, par exemple, dont la page ne dit pas un mot. Cette réponse-là se discute à deux.",
      "La retenue, la conduite forcée, la turbine, puis l’alternateur.",
      "À permettre aux poissons de remonter la rivière malgré l’ouvrage, en franchissant de petits bassins étagés. Le texte ajoute que cela ne rend pas la rivière telle qu’elle était.",
      "Environ un dixième. Le nombre est dans l’encadré, et nulle part ailleurs.",
      "À la ligne de source, en bas : mise à jour en 2023. La part d’électricité produite change d’une année sur l’autre ; la hauteur du barrage, non. Savoir de quand date la page, c’est savoir lesquels de ses nombres ont pu bouger.",
    ],
    "Ce qu’on regarde : la question 2, qui sépare deux choses faciles à confondre — un auteur qui a un intérêt, et un document qui ment. La réponse visée n’est pas « on ne peut pas le croire », c’est « on le croit sur les nombres, et on se demande ce qu’il ne dit pas ». S’il refuse la page en bloc, prendre la hauteur de 123 mètres et lui demander ce qu’un office de tourisme gagnerait à la fausser. Si c’est la question 6 qui coince, revenir au geste de janvier : la date fait partie de la source.",
  ),

  f(
    "ld-doc-09",
    "Lecture d’un documentaire",
    "Documentaire 9 · Pourquoi la Lune change de forme",
    [
      "Nature et source d’abord, et le mot important est ici « almanach » : un document qui ne vaut que pour une année. Avant de lire, lui demander pourquoi un livre pourrait avoir une date de péremption.",
      "Le schéma est exigeant : il montre deux choses à la fois, la Lune vue de l’extérieur et la Lune vue depuis la Terre. Lui laisser le temps de repérer qu’il y a deux rangées de dessins avant de poser la moindre question.",
      "Le jour où ça coince : laisser le schéma de côté et ne faire que les questions 1, 2 et 3, qui tiennent dans le texte. Ce schéma se reprendra à la fiche des marées, qui en contient un cousin.",
    ],
    [
      "Titre — Pourquoi la Lune change de forme",
      "Chapeau — Elle ne grossit pas, elle ne maigrit pas, et elle ne se cache pas derrière la Terre. Elle nous montre sa part éclairée sous un angle qui change chaque soir.",
      "Texte 1 — La Lune ne produit aucune lumière. Elle renvoie celle du Soleil, comme un caillou éclairé par une lampe. La moitié de la Lune tournée vers le Soleil est donc toujours éclairée, et l’autre moitié toujours dans le noir — quelle que soit la forme qu’on lui voit depuis la Terre.",
      "Texte 2 — Ce qui change, c’est notre point de vue. La Lune tourne autour de la Terre, et selon l’endroit où elle se trouve sur ce tour, on voit sa part éclairée de face, de biais, ou pas du tout. Quand elle est du côté du Soleil, sa face éclairée nous est cachée : c’est la nouvelle lune. Quand elle est de l’autre côté, on la voit toute ronde : c’est la pleine lune. Entre les deux, on en voit une moitié, ou un croissant.",
      "Texte 3 — Le tour complet, d’une nouvelle lune à la suivante, prend vingt-neuf jours et demi. Pour distinguer un croissant qui grossit d’un croissant qui diminue, on se sert d’une phrase que les marins connaissaient déjà : quand la Lune dessine un D, elle croît ; quand elle dessine un C, elle décroît. Elle fait donc exactement le contraire de ce que la lettre annonce.",
      "Encadré — La Lune en quatre nombres : 29 jours et demi entre deux nouvelles lunes ; 4 phases principales ; environ 384 000 kilomètres de la Terre ; 0 lumière produite par la Lune elle-même.",
      "Schéma : un grand cercle. Au centre, la Terre ; sur le cercle, huit petites Lunes régulièrement espacées, toutes éclairées du même côté, celui du Soleil, dessiné à droite hors du cadre avec des rayons parallèles. Sous chacune des huit, une seconde rangée de dessins montre ce qu’on voit depuis la Terre ce soir-là : le disque plein, les croissants, les demi-disques, et un cercle vide.",
      "Nature et source — page d’un almanach du ciel publié chaque année par un club d’astronomie, édition 2025-2026.",
      "Question 1 — Quelle est la nature de ce document, et pour quelle période a-t-il été fait ?",
      "Question 2 — Pourquoi la Lune brille-t-elle ?",
      "Question 3 — Combien de jours s’écoulent entre deux nouvelles lunes ?",
      "Question 4 — À quoi sert la seconde rangée de dessins du schéma ?",
      "Question 5 — Un almanach est refait chaque année. Qu’est-ce qui change d’une édition à l’autre, et qu’est-ce qui ne changera jamais ?",
    ],
    [
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "Un almanach du ciel, publié par un club d’astronomie, pour l’année 2025-2026.",
      "Parce qu’elle renvoie la lumière du Soleil. Elle n’en fabrique aucune : le texte le dit et l’encadré le répète, avec un zéro.",
      "Vingt-neuf jours et demi.",
      "À montrer ce qu’on voit depuis la Terre à chacune des huit positions. La première rangée montre la Lune de l’extérieur, éclairée toujours du même côté ; la seconde montre ce que nos yeux en attrapent.",
      "Ce qui change : les dates et les heures des phases, différentes chaque année — c’est pour cela que l’almanach est refait. Ce qui ne changera pas : les vingt-neuf jours et demi, la distance, et le fait que la Lune ne produit pas de lumière. Un almanach périme son calendrier, pas ses explications.",
    ],
    "Ce qu’on regarde : la question 5, nouvelle dans la série. Elle demande de trier, à l’intérieur d’un même document, ce qui se démode et ce qui tient. S’il répond « tout change » ou « rien ne change », lui donner un exemple de chaque côté et le laisser ranger — la date de la pleine lune de mars, puis la distance de la Terre à la Lune. Deux exemples suffisent ; on refera le tri à la fiche suivante, sur un document de 1981.",
  ),

  f(
    "ld-doc-10",
    "Lecture d’un documentaire",
    "Documentaire 10 · Quatre-vingts volcans endormis",
    [
      "Nature et source, plus une ligne à relever : le texte est signé. Avant de lire, lui demander ce que change, à son avis, la signature d’une géologue au bas d’une page de guide.",
      "Les trois coupes du schéma sont à la même échelle, et c’est écrit sous le dessin. Lui faire chercher du doigt laquelle est la plus haute : sans échelle commune, la comparaison ne voudrait rien dire.",
      "Le jour où ça coince : garder les questions 1, 3 et 4, et traiter les autres à l’oral, en discutant, sans rien écrire.",
    ],
    [
      "Titre — Quatre-vingts volcans endormis",
      "Chapeau — Ils sont alignés sur une trentaine de kilomètres, on marche dessus tous les dimanches, et aucun d’eux n’est éteint.",
      "Texte 1 — La chaîne des Puys, en Auvergne, aligne environ quatre-vingts volcans sur une trentaine de kilomètres. Le plus haut, le puy de Dôme, culmine à 1 465 mètres. La dernière éruption de la chaîne a creusé le lac Pavin il y a environ sept mille ans : c’est très peu à l’échelle de la Terre, et des hommes vivaient déjà là.",
      "Texte 2 — Ces volcans ne se ressemblent pas, parce que la lave ne s’y est pas comportée de la même façon. Une lave fluide construit un cône de scories, avec un cratère en entonnoir au sommet. Une lave épaisse n’arrive pas à couler : elle s’entasse et forme un dôme arrondi, sans cratère. Et quand le magma rencontre de l’eau souterraine, l’explosion creuse un trou large et peu profond, qui se remplit ensuite de pluie : c’est un maar, et le lac Pavin en est un.",
      "Texte 3 — Les scientifiques n’écrivent pas que ces volcans sont éteints. Ils écrivent qu’ils sont endormis. La différence n’est pas un détail de vocabulaire : un volcan éteint ne se réveillera plus, et rien ne permet de l’affirmer ici. Des instruments enregistrent en permanence les moindres secousses de la région, ce qu’on ne prendrait pas la peine de faire pour un volcan dont on serait sûr.",
      "Encadré — La chaîne des Puys en quatre nombres : environ 80 volcans ; 32 kilomètres du premier au dernier ; 1 465 mètres pour le puy de Dôme, le plus haut ; environ 7 000 ans depuis la dernière éruption de la chaîne.",
      "Schéma : trois coupes de volcans côte à côte — un cône de scories avec son cratère en entonnoir ; un dôme de lave, arrondi, sans cratère ; un maar, simple trou rempli d’eau, plus large que profond. Sous les trois, une seule règle graduée en centaines de mètres, et cette ligne : « les trois coupes sont à la même échelle ».",
      "Nature et source — double page d’un guide de randonnée en Auvergne, édition de 2019 ; le texte est signé par une géologue de l’université.",
      "Question 1 — Quelle est la nature de ce document, et de quand date-t-il ?",
      "Question 2 — Qui a écrit le texte ? Pourquoi un guide de randonnée prend-il la peine de le préciser ?",
      "Question 3 — Combien de volcans compte la chaîne, et quand a eu lieu la dernière éruption ?",
      "Question 4 — Quelle différence le texte fait-il entre « éteint » et « endormi » ?",
      "Question 5 — À quoi sert la phrase « les trois coupes sont à la même échelle » ?",
      "Question 6 — Le document écrit « environ 80 volcans » et « 1 465 mètres ». Pourquoi l’un de ces nombres est-il précis et l’autre arrondi ?",
    ],
    [
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "Un guide de randonnée, édition de 2019. Ni un manuel, ni un article scientifique : la page est faite pour être lue en marchant.",
      "Une géologue de l’université. Le guide le précise parce que cela répond d’avance à la question « qui dit cela ? » : la personne qui écrit fait ce métier, et on peut la retrouver. Un texte non signé, lui, ne se rattache à personne.",
      "Environ quatre-vingts volcans. La dernière éruption remonte à environ sept mille ans : c’est celle qui a creusé le lac Pavin.",
      "« Éteint » voudrait dire qu’il ne se réveillera plus. « Endormi » veut dire qu’on n’en sait rien. Le texte donne même une preuve de ce choix de mot : on surveille la région en permanence.",
      "À rendre la comparaison possible. Trois dessins côte à côte à des échelles différentes ne prouveraient rien : on ne saurait pas si le dôme est réellement plus bas que le cône, ou seulement dessiné plus petit.",
      "Parce qu’on n’a pas compté les volcans un à un : ils se touchent, certains sont à moitié effacés, et le total dépend de ce qu’on décide d’appeler un volcan. L’altitude du puy de Dôme, elle, a été mesurée. Un nombre arrondi et un nombre mesuré ne se lisent pas de la même façon, et c’est le document lui-même qui prévient, en écrivant « environ ».",
    ],
    "Ce qu’on regarde : la question 6, qui prépare toute la fin de l’année. Un enfant qui craint de se tromper croit volontiers qu’un nombre précis vaut mieux qu’un nombre arrondi. Ici c’est l’inverse : « environ 80 » est honnête, « 80 » tout court le serait moins. S’il ne voit pas la différence, lui demander comment il s’y prendrait pour compter les volcans lui-même, et le laisser buter — c’est en butant qu’on comprend pourquoi l’auteur a écrit « environ ».",
  ),

  f(
    "ld-doc-11",
    "Lecture d’un documentaire",
    "Documentaire 11 · Les grands voyageurs : l’hirondelle",
    [
      "Le document est ancien : il date de 1981. C’est écrit à la ligne de source, et rien dans le texte ne le signale. Le lui laisser trouver seul, et ne rien dire tant qu’il n’a pas lu la page entière.",
      "Quand il aura répondu, la vraie question de la séance arrive : ce qui est écrit là est-il encore vrai aujourd’hui, et comment le savoir ? Ce sont les questions 5 et 6, et elles demandent de la conversation plus que de l’écriture.",
      "Le jour où ça coince : ne garder que les questions 1, 2 et 4. La cinquième se fait très bien à deux, à voix haute, sans qu’il ait une ligne à écrire.",
    ],
    [
      "Titre — Les grands voyageurs : l’hirondelle",
      "Chapeau — Chaque automne elle disparaît, chaque printemps elle revient au même nid. Longtemps on n’a pas su par où elle passait.",
      "Texte 1 — L’hirondelle rustique niche en Europe et passe l’hiver en Afrique, au sud du Sahara. Elle accomplit donc deux fois par an un voyage qui peut atteindre dix mille kilomètres, pour un oiseau qui pèse moins de vingt grammes. Elle voyage de jour, se nourrit d’insectes qu’elle attrape en volant, et franchit la Méditerranée puis le désert en quelques étapes.",
      "Texte 2 — Comment le sait-on ? Par le baguage. Depuis le début du siècle, des ornithologues posent à la patte des oiseaux une bague de métal numérotée, portant une adresse. Quand un oiseau bagué est retrouvé ailleurs, la bague est renvoyée, et un point de plus apparaît sur la carte. C’est un travail patient : la plupart des bagues ne reviennent jamais.",
      "Texte 3 — On ignore encore le chemin exact que suit chaque oiseau. Les bagues donnent un point de départ et un point d’arrivée, parfois une halte, jamais le trajet complet. On ne sait pas non plus avec certitude comment l’hirondelle s’oriente, ni pourquoi elle retrouve le nid de l’année précédente.",
      "Encadré — Quatre nombres : jusqu’à 10 000 kilomètres entre le nord de l’Europe et le sud de l’Afrique ; environ 19 grammes pour une hirondelle rustique ; 3 semaines de voyage au minimum ; 2 bagues seulement retrouvées sur les 3 000 posées l’an dernier par notre association.",
      "Schéma : une carte de l’Europe et de l’Afrique, avec trois flèches courbes qui descendent du nord vers le sud, et trois points nommés — un départ en Normandie, une halte au Maroc, une arrivée en Afrique du Sud. Sous la carte, une ligne en petits caractères : « tracé reconstitué d’après les bagues retrouvées ».",
      "Nature et source — double page d’une encyclopédie des oiseaux pour la jeunesse, édition de 1981, chapitre « Les grands voyageurs ».",
      "Question 1 — Quelle est la nature de ce document, et de quelle année date-t-il ?",
      "Question 2 — Quelle distance l’hirondelle peut-elle parcourir, et où ce nombre est-il écrit ?",
      "Question 3 — Sur 3 000 bagues posées, combien ont été retrouvées ?",
      "Question 4 — Le schéma dit « tracé reconstitué d’après les bagues retrouvées ». Est-ce la même chose qu’un trajet observé du début à la fin ?",
      "Question 5 — Le texte écrit : « On ignore encore le chemin exact que suit chaque oiseau. » Cette phrase est-elle encore vraie aujourd’hui ? Comment s’en assurer ?",
      "Question 6 — Dans cette page, qu’est-ce qui n’a pas pu vieillir, et qu’est-ce qui a pu changer ?",
    ],
    [
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "Une encyclopédie pour la jeunesse, édition de 1981. La date n’est écrite qu’à la ligne de source : le texte, lui, n’a pas l’air ancien, et c’est tout le piège.",
      "Jusqu’à dix mille kilomètres. Le nombre est dans le premier paragraphe, et répété dans l’encadré.",
      "Deux. Le chiffre est dans l’encadré, et il est donné par l’association qui a posé les bagues elle-même.",
      "Non. Une reconstitution relie un départ et une arrivée par une ligne qu’on suppose ; personne n’a suivi l’oiseau entre les deux. Le mot « reconstitué » est là pour prévenir, et il est écrit en petits caractères sous la carte.",
      "Non, elle ne l’est plus. Depuis les années 2010, on pose sur certains oiseaux des balises de moins d’un gramme qui enregistrent leur position tout au long du voyage : le trajet complet est désormais connu pour plusieurs espèces. Comment s’en assurer : chercher un document récent — le site d’un muséum d’histoire naturelle, une revue d’ornithologie de cette année — plutôt qu’un livre de la même époque que celui-ci.",
      "N’a pas pu vieillir : le poids de l’oiseau, la distance, le fait qu’il se nourrit d’insectes en volant, le principe du baguage. A pu changer, et a changé : ce qu’on sait du trajet, et donc la phrase « on ignore encore ». Un document ne vieillit pas d’un bloc — ce sont les « on ne sait pas » qui se démodent en premier.",
    ],
    "Ce qu’on regarde : est-ce qu’il repère tout seul que 1981 est loin. La plupart des enfants lisent une page ancienne exactement comme une page d’aujourd’hui, parce que rien dedans n’a l’air vieux. S’il ne l’a pas vu, ne pas y revenir par une explication : reprendre la fiche suivante avec la même consigne — quelle est la date, et qu’est-ce que ça change — et attendre. Cela vient en deux ou trois fois. Et si la question 5 le met en difficulté, la traiter comme une conversation : on ne lui demande pas de connaître les balises, on lui demande où il irait chercher.",
  ),

  f(
    "ld-doc-12",
    "Lecture d’un documentaire",
    "Documentaire 12 · Combien d’heures faut-il dormir ?",
    [
      "Deux documents sur la même double page, et ils ne disent pas la même chose. Relever la nature et la source des deux avant d’en lire un seul : c’est cet ordre-là qui fait la séance.",
      "Ne pas trancher à sa place. La question n’est pas « lequel a raison » mais « lequel dit d’où il tient son chiffre » — et un seul des deux le dit.",
      "Le jour où ça coince : ne lire que le document 1 et poser les questions 1, 4 et 5. Comparer deux sources demande beaucoup d’un coup ; l’exercice revient à la fiche 15.",
    ],
    [
      "Titre de la double page — Combien d’heures faut-il dormir ?",
      "Chapeau — Deux documents, deux chiffres. Ils tiennent sur la même page, et ils ne se ressemblent pas.",
      "Document 1, texte — Le sommeil n’est pas un long tunnel : il se découpe en cycles. Un cycle dure un peu plus d’une heure chez l’enfant, environ une heure et demie chez l’adulte, et chaque nuit en compte quatre à six. Au début de la nuit, le sommeil profond domine ; c’est pendant celui-là que le corps grandit et se répare. En fin de nuit, le sommeil de rêve prend le plus de place, et c’est lui qui range dans la mémoire ce qu’on a appris la veille.",
      "Document 1, suite — La durée de sommeil nécessaire diminue avec l’âge, et elle n’est pas identique pour deux personnes du même âge. Ce qui compte autant que la durée, c’est la régularité de l’heure du coucher. La lumière des écrans, le soir, retarde le moment où le corps se met à fabriquer l’hormone qui donne envie de dormir.",
      "Document 1, tableau — Durées conseillées par tranche d’âge : de 3 à 5 ans, 10 à 13 heures ; de 6 à 13 ans, 9 à 11 heures ; de 14 à 17 ans, 8 à 10 heures ; adulte, 7 à 9 heures.",
      "Document 1, nature et source — page d’une brochure éditée en 2023 par le centre du sommeil d’un hôpital, à destination des familles.",
      "Document 2, texte — Huit heures. C’est la durée qu’il faut à un être humain pour récupérer, et c’est aussi celle que la plupart d’entre nous n’atteignent jamais. Nos rythmes de vie, nos écrans et nos soirées trop longues nous volent chaque semaine l’équivalent d’une nuit entière.",
      "Document 2, encadré — « Huit heures : la durée idéale. » Aucun âge n’est précisé, et aucune source n’est indiquée sous ce chiffre.",
      "Document 2, nature et source — extrait d’un article de magazine grand public, numéro de mai 2019, rubrique « Bien-être ».",
      "Schéma commun aux deux documents : une nuit dessinée comme une frise, de 22 heures à 7 heures, découpée en cinq cycles. Dans chaque cycle, trois bandes de gris différents — sommeil léger, sommeil profond, sommeil de rêve. Les bandes de sommeil profond sont épaisses au début de la nuit et minces à la fin ; celles de rêve font exactement l’inverse.",
      "Question 1 — Quelle est la nature de chacun des deux documents ?",
      "Question 2 — De quand datent-ils l’un et l’autre ?",
      "Question 3 — Les deux ne donnent pas le même nombre d’heures. Lequel des deux concerne un enfant de neuf ans, et que dit-il ?",
      "Question 4 — L’un des deux chiffres n’est accompagné ni d’un âge, ni d’une source. Lequel ?",
      "Question 5 — D’après le schéma, à quel moment de la nuit rêve-t-on le plus ?",
      "Question 6 — Si les deux documents se contredisaient vraiment, comment ferait-on pour trancher ?",
    ],
    [
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "Le document 1 est une brochure éditée par le centre du sommeil d’un hôpital, faite pour les familles. Le document 2 est un extrait d’article de magazine grand public, dans une rubrique « Bien-être ».",
      "2023 pour le premier, mai 2019 pour le second.",
      "Le document 1, qui range les durées par âge : de 6 à 13 ans, 9 à 11 heures. Le document 2 donne un seul chiffre pour tout le monde, du nourrisson au grand-père.",
      "Celui du document 2 : huit heures, sans âge et sans source. Ce n’est pas forcément faux, mais rien dans la page ne permet de le vérifier.",
      "En fin de nuit. Sur la frise, les bandes de sommeil de rêve sont minces dans les premiers cycles et épaisses dans les derniers.",
      "En regardant d’où chacun tient son chiffre. Celui qui donne sa source, son âge de référence et sa date peut être vérifié ; celui qui n’en donne aucun ne le peut pas. Et s’il fallait aller plus loin : chercher un troisième document, récent, qui dise sur quoi il s’appuie.",
    ],
    "Ce qu’on regarde : est-ce qu’il cherche à désigner un gagnant. Beaucoup d’enfants veulent savoir lequel est « le bon », et la séance vise exactement l’inverse — savoir lequel peut être vérifié. S’il tranche sans argument, lui demander une seule chose : où, sur la page, est écrit d’où vient le chiffre de huit heures. Le laisser chercher jusqu’à constater qu’il n’y est pas. Ce constat-là vaut la séance entière, et il n’y a rien à ajouter derrière.",
  ),

  /* ================================================================== */
  /* MAI ET JUIN — ce qu’un nombre vaut                                  */
  /* Estimé ou compté ; un auteur qui a un intérêt ; un document qui     */
  /* dit d’où viennent ses chiffres, et un qui ne le dit pas.            */
  /* ================================================================== */

  f(
    "ld-doc-13",
    "Lecture d’un documentaire",
    "Documentaire 13 · Une canette, et puis une autre",
    [
      "Nature et source d’abord, et la source est aujourd’hui l’objet même de la séance : un document d’auteur intéressé, distribué gratuitement dans les écoles. Le lui faire dire avant de lire une ligne.",
      "Ne pas transformer la séance en procès. La page contient des faits exacts et un chiffre invérifiable, et le travail consiste à séparer les deux, pas à tout jeter.",
      "Le jour où ça coince : garder les questions 1, 4 et 5. La quatrième — le schéma contre l’encadré — se voit à l’œil et se répond sans discours.",
    ],
    [
      "Titre — Une canette, et puis une autre",
      "Chapeau — L’aluminium est l’un des rares matériaux qui se refondent sans rien perdre. Encore faut-il qu’il revienne.",
      "Texte 1 — L’aluminium n’existe pas à l’état pur dans le sol. On l’extrait d’une roche rouge, la bauxite, et il faut énormément d’électricité pour l’en séparer : c’est l’une des fabrications les plus gourmandes en énergie de toute l’industrie. Refondre de l’aluminium déjà fabriqué demande environ 95 % d’énergie en moins.",
      "Texte 2 — Et l’aluminium refondu vaut le neuf. Le métal ne se fatigue pas : une canette peut redevenir une canette, puis une autre, sans fin. C’est ce qui le distingue de beaucoup d’autres emballages, qui perdent leurs qualités à chaque passage.",
      "Texte 3 — Encore faut-il que la canette parte dans la bonne benne. Une canette laissée dans une poubelle ordinaire finit enfouie ou brûlée, et toute l’énergie dépensée pour la fabriquer est perdue avec elle. D’après nos adhérents, six canettes sur dix sont aujourd’hui recyclées en France.",
      "Encadré — Quatre nombres : 13 grammes pour une canette vide ; 95 % d’énergie économisée quand on refond de l’aluminium plutôt que d’en tirer du minerai ; 60 jours entre la benne et une canette neuve ; 6 canettes sur 10 recyclées en France, selon nos adhérents.",
      "Schéma : une boucle fermée de six cases reliées par des flèches qui reviennent au point de départ — la canette bue, la benne jaune, le centre de tri, la balle d’aluminium compressée, le four, la canette neuve. Aucune flèche ne sort de la boucle.",
      "Nature et source — double page d’une plaquette éditée en 2024 par la fédération des fabricants d’emballages en métal, distribuée gratuitement dans les écoles.",
      "Question 1 — Quelle est la nature de ce document, et qui l’a édité ?",
      "Question 2 — Cette fédération réunit les fabricants d’emballages en métal. Quel intérêt a-t-elle à distribuer cette page dans les écoles ?",
      "Question 3 — Le chiffre de 95 % est-il accompagné, sur cette page, de la moindre indication sur sa provenance ?",
      "Question 4 — Le schéma montre une boucle fermée, sans aucune perte. L’encadré dit que six canettes sur dix sont recyclées. Les deux racontent-ils la même chose ?",
      "Question 5 — Dans tout ce que dit cette page, qu’est-ce qui resterait vrai même si elle avait été écrite par quelqu’un d’autre ?",
      "Question 6 — Où pourrait-on vérifier le chiffre des six canettes sur dix ?",
    ],
    [
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "Une plaquette — un document distribué gratuitement, ici dans les écoles — éditée par la fédération des fabricants d’emballages en métal.",
      "Elle a intérêt à ce que ses emballages aient bonne réputation : une canette qu’on croit propre se vend mieux qu’une canette qu’on croit polluante. Cela ne veut pas dire que la page est fausse ; cela veut dire qu’elle est écrite par quelqu’un qui a quelque chose à y gagner.",
      "Non. Le nombre est donné tel quel, dans le texte et dans l’encadré, sans qu’on dise d’où il sort. Il se trouve qu’il est exact et qu’on le retrouve ailleurs — mais cela, on ne peut pas le savoir en lisant cette page-là, et c’est le seul reproche à lui faire.",
      "Non. Le schéma dessine un monde où tout revient ; l’encadré avoue que quatre canettes sur dix n’y reviennent pas. Le dessin n’est pas faux, il est incomplet : il ne montre aucune flèche qui sorte de la boucle, et il en faudrait une.",
      "Que l’aluminium se refond sans perdre ses qualités, et qu’en tirer du minerai demande beaucoup plus d’énergie que de le refondre. Ce sont des faits de matière : ils ne dépendent pas de celui qui les écrit.",
      "Auprès de quelqu’un qui n’a rien à y gagner : un organisme public qui publie les chiffres des déchets, une association qui les surveille, ou un autre document qui dise sur quoi il s’appuie. Un chiffre donné par celui qu’il arrange se vérifie ailleurs — ce n’est pas de la méfiance, c’est la méthode.",
    ],
    "Ce qu’on regarde : la question 5, celle qui reste debout. Un enfant qui découvre qu’un auteur peut avoir un intérêt passe souvent par une phase où plus rien n’est croyable, et c’est une étape, pas un problème. Le repère à installer tient en une ligne : un fait de matière — le métal se refond sans se fatiguer — ne change pas selon la personne qui l’écrit ; un comptage, si. S’il n’arrive pas à faire ce partage aujourd’hui, reposer la même question à la fiche suivante et le laisser venir.",
  ),

  f(
    "ld-doc-14",
    "Lecture d’un documentaire",
    "Documentaire 14 · Vers 1450, à Mayence",
    [
      "Nature et source d’abord. Un manuel d’histoire est justement le genre de document dont la source paraît sans importance ; elle ne l’est pas, et la question 1 sert à installer le geste malgré tout.",
      "Le cœur de la séance est l’encadré : deux nombres voisins, l’un estimé, l’autre compté, et la page le dit en toutes lettres. Lui faire souligner les deux mots — « estimé », « compté » — avant de répondre à quoi que ce soit.",
      "Le jour où ça coince : garder les questions 1, 2 et 4, et laisser tomber l’estimation. Elle revient à la fiche 18, sur un carnet d’observation, où elle se touche du doigt.",
    ],
    [
      "Titre — Vers 1450, à Mayence",
      "Chapeau — Avant lui, un livre se copiait à la main pendant des mois. Après lui, on en tire deux cents exemplaires identiques. Et pourtant rien de tout cela n’a commencé là.",
      "Texte 1 — Jusqu’au milieu du XVe siècle, en Europe, un livre se recopiait à la main. Un copiste mettait plusieurs mois pour un seul volume, et deux exemplaires du même texte n’étaient jamais tout à fait identiques. Vers 1450, à Mayence, Johannes Gutenberg met au point un ensemble de procédés qui fonctionnent ensemble : des caractères de métal mobiles, fondus un par un et réutilisables, une encre grasse qui tient sur le métal, et une presse dérivée du pressoir à raisin.",
      "Texte 2 — Son livre le plus connu est une Bible dont chaque colonne compte quarante-deux lignes, ce qui lui a donné son nom. On estime qu’il en a imprimé environ cent quatre-vingts exemplaires. Quarante-neuf nous sont parvenus, complets ou partiels, et on sait précisément où chacun se trouve : ceux-là, on les a comptés un par un.",
      "Texte 3 — Gutenberg n’a pas inventé les caractères mobiles. En Chine, vers 1040, Bi Sheng en fabriquait déjà en terre cuite ; en Corée, on imprimait avec des caractères de métal au XIVe siècle, et un livre imprimé ainsi en 1377 nous est parvenu. Ce que Gutenberg a réussi, c’est de faire tenir ensemble, en Europe, tous les éléments d’un atelier d’imprimerie. Cinquante ans plus tard, l’Europe en comptait plus de mille.",
      "Encadré — Quatre nombres, et ce qu’ils valent : vers 1450, la mise au point — on écrit « vers », parce qu’aucun document ne fixe l’année ; 42 lignes par colonne dans la Bible qui en a pris le nom ; environ 180 exemplaires imprimés, chiffre estimé ; 49 exemplaires conservés aujourd’hui, chiffre compté.",
      "Schéma : une frise du temps, de l’an 1000 à l’an 1500, avec quatre repères — vers 1040, des caractères mobiles en terre cuite en Chine ; 1377, un livre imprimé en Corée avec des caractères de métal ; vers 1450, l’atelier de Mayence ; 1500, plus de mille ateliers en Europe. Les traits de 1377 et de 1500 sont pleins ; ceux de 1040 et de 1450, qui portent le mot « vers », sont en pointillé.",
      "Nature et source — double page d’un manuel d’histoire pour l’école, édition de 2016, chapitre « Le temps des découvertes ».",
      "Question 1 — Quelle est la nature de ce document, et de quelle édition ?",
      "Question 2 — Pourquoi le document écrit-il « vers 1450 » et non « en 1450 » ?",
      "Question 3 — Dans l’encadré, deux nombres se ressemblent : 180 et 49. Comment les a-t-on obtenus l’un et l’autre ?",
      "Question 4 — D’après la frise, Gutenberg a-t-il inventé les caractères mobiles ?",
      "Question 5 — Pourquoi certains traits de la frise sont-ils en pointillé ?",
      "Question 6 — Le chiffre de 180 exemplaires pourrait-il changer un jour ? Et celui de 49 ?",
    ],
    [
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "Un manuel d’histoire pour l’école, édition de 2016.",
      "Parce qu’aucun document ne donne l’année exacte, et l’encadré le dit lui-même. « Vers » n’est pas une hésitation de l’auteur : c’est ce qu’on sait, énoncé honnêtement.",
      "Les 180 sont une estimation : personne n’a assisté à l’impression pour tenir le compte, et on le déduit de ce qu’on sait des ateliers de l’époque. Les 49 sont un comptage : ces exemplaires existent, on sait où ils sont, on les a comptés un par un.",
      "Non. La frise montre qu’il y en avait en Chine vers 1040 et en Corée au XIVe siècle. Ce que Gutenberg a réussi, c’est de faire tenir ensemble tous les éléments d’un atelier, en Europe. Le texte le dit, et la frise le montre d’un coup d’œil.",
      "Parce que ces deux dates-là ne sont pas certaines : elles portent le mot « vers ». Le pointillé est la façon dont le dessin dit ce que le texte dit avec un mot.",
      "Oui pour les 180 : une estimation se révise si l’on retrouve un document d’époque. Et oui pour les 49, mais dans l’autre sens — un exemplaire oublié dans une bibliothèque peut être identifié, et le nombre augmente. La différence est dans ce qui les ferait bouger : pour l’un une meilleure hypothèse, pour l’autre une trouvaille.",
    ],
    "Ce qu’on regarde : la question 3. Distinguer un nombre estimé d’un nombre compté est l’outil le plus durable de toute cette série — il sert devant un journal, devant une publicité, devant un devoir de sciences. S’il ne fait pas la différence, la reprendre le lendemain sur du concret, sans document : combien de livres dans la maison, on peut les compter ; combien de feuilles sur l’arbre du jardin, on ne peut que l’estimer. Le même genre de nombre, deux méthodes : c’est tout ce qu’il y a à saisir.",
  ),

  f(
    "ld-doc-15",
    "Lecture d’un documentaire",
    "Documentaire 15 · La mer qui monte deux fois par jour",
    [
      "La double page qui reprend tout : deux documents, un daté et un pas, un encadré qui se corrige lui-même, un schéma qui exagère et qui l’avoue. Nature et source des deux d’abord, sans exception.",
      "Quand il aura répondu à la question 6, ressortir la fiche de l’aqueduc, celle de février : il fait aujourd’hui seul ce qu’on lui montrait au doigt il y a trois mois. Le lui faire remarquer une fois, sans en faire une cérémonie.",
      "Le jour où ça coince : n’en garder que trois, les questions 1, 2 et 6, qui tiennent ensemble et font une séance complète à elles seules.",
    ],
    [
      "Titre de la double page — La mer qui monte deux fois par jour",
      "Chapeau — Deux documents sur les marées. L’un est refait chaque année, l’autre est vissé sur une digue depuis on ne sait quand.",
      "Document 1, texte — La mer monte et descend parce que la Lune attire l’eau des océans, et le Soleil un peu aussi. Sur la côte atlantique, il y a deux marées hautes et deux marées basses par jour, et l’heure de la marée haute se décale d’environ cinquante minutes chaque jour : pendant ce temps, la Lune a avancé sur son tour autour de la Terre.",
      "Document 1, suite — Quand le Soleil, la Terre et la Lune sont alignés — à la pleine lune et à la nouvelle lune — les deux attractions s’ajoutent, et l’écart entre haute et basse mer est le plus grand : ce sont les vives-eaux, ce qu’on appelle les grandes marées. Aux quartiers de Lune, les attractions se contrarient et l’écart est le plus faible.",
      "Document 1, encadré — Quatre nombres, et ce qu’ils ne disent pas : 12 heures et 25 minutes entre deux marées hautes ; 2 marées hautes par jour sur la côte atlantique ; jusqu’à 14 mètres entre haute et basse mer dans la baie du Mont-Saint-Michel ; environ 30 centimètres en Méditerranée. Le chiffre de 14 mètres ne vaut que là où il est mesuré.",
      "Document 1, nature et source — page d’un annuaire des marées, édité chaque année par un service hydrographique, édition 2026.",
      "Document 2, texte — Panneau posé sur la digue : « Attention. La mer remonte plus vite qu’un homme ne marche. Ne vous éloignez pas du rivage à marée basse. Prochaine grande marée le 21 mars. »",
      "Document 2, nature et source — panneau d’information fixé sur la digue d’un port breton. Aucune date, aucun nom d’auteur.",
      "Schéma : deux dessins l’un au-dessus de l’autre. En haut, la Terre vue du dessus, avec un bourrelet d’eau de chaque côté et la Lune à droite ; une note sous le dessin : « bourrelet très exagéré — en pleine mer, il fait moins d’un mètre ». En bas, deux vues du même port, prises du même endroit à six heures d’écart : sur l’une les bateaux flottent, sur l’autre ils sont posés sur la vase.",
      "Question 1 — Quelle est la nature de chacun des deux documents ?",
      "Question 2 — Lequel est daté, lequel ne l’est pas ? Qu’est-ce que cela change ?",
      "Question 3 — Pourquoi l’écart entre haute et basse mer atteint-il 14 mètres au Mont-Saint-Michel et 30 centimètres en Méditerranée ? Que dit l’encadré à ce sujet ?",
      "Question 4 — Pourquoi l’heure de la marée haute n’est-elle pas la même chaque jour ?",
      "Question 5 — Que signale la note écrite sous le dessin du haut ?",
      "Question 6 — Le panneau annonce « prochaine grande marée le 21 mars ». Peut-on s’y fier ?",
    ],
    [
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "Le document 1 est une page d’annuaire des marées, éditée par un service hydrographique. Le document 2 est un panneau d’information posé sur une digue, sans auteur et sans date.",
      "L’annuaire est daté : édition 2026. Le panneau ne l’est pas. Un document daté dit à quoi il s’applique ; un panneau sans date peut avoir été vissé il y a un an comme il y a vingt ans, et rien ne permet de le savoir.",
      "Parce que l’écart entre haute et basse mer dépend fortement de la côte : la forme de la baie, sa profondeur, l’étranglement des terres. Ce n’est pas la Lune qui change d’un endroit à l’autre, c’est le rivage. Et l’encadré prévient de lui-même : le chiffre de 14 mètres ne vaut que là où il est mesuré.",
      "Parce que la marée suit la Lune, et que la Lune avance sur son tour autour de la Terre pendant la journée. Le rendez-vous se décale d’environ cinquante minutes par jour, et il s’écoule 12 heures et 25 minutes entre deux marées hautes.",
      "Que le dessin exagère : le bourrelet d’eau y est énorme, alors qu’en pleine mer il fait moins d’un mètre. Sans cette note, on croirait la mer bombée de plusieurs mètres. C’est exactement le procédé de la pente de l’aqueduc, à la fiche 7.",
      "Non, pas pour la date. « Le 21 mars » sans année ne désigne rien : les dates des grandes marées changent chaque année, puisqu’elles suivent la Lune. En revanche, l’avertissement du panneau — la mer remonte plus vite qu’un homme ne marche — reste vrai quelle que soit l’année. Sur le même panneau, une phrase périmée et une phrase qui ne périmera pas : c’est la réponse complète.",
    ],
    "Ce qu’on regarde : la question 6, et surtout sa seconde moitié. Repérer qu’une date sans année ne vaut rien est déjà beaucoup ; comprendre que le même panneau porte une phrase périmée et une phrase durable, c’est ce qu’on cherchait depuis septembre. S’il jette le panneau entier, revenir sur l’avertissement — la mer qui remonte vite — et lui demander en quelle année il cesserait d’être vrai. Rien d’autre à reprendre : la série s’arrête là, et les trois fiches suivantes sont de la réserve.",
  ),

  /* ================================================================== */
  /* FIN JUIN — trois doubles pages de plus                              */
  /* Écrites comme une réserve, au degré d’exigence de la fin de         */
  /* l’année ; la trame les donne maintenant les 8, 16 et 24 juin.        */
  /* ================================================================== */

  f(
    "ld-doc-16",
    "Lecture d’un documentaire",
    "Documentaire 16 · Le sel, du bassin à la table",
    [
      "Nature et source d’abord, et une ligne à remarquer : le texte a été relu par une coopérative de producteurs. Le relever avant de lire, puis reposer la question à la fin — a-t-on vu, dans la page, quelque chose qu’une coopérative avait intérêt à taire ?",
      "La progression des nombres sur le schéma — 35, 80, 180, 260 — est le cœur de la page. Lui faire suivre la flèche du doigt en disant les nombres à voix haute : la concentration s’entend mieux qu’elle ne se lit.",
      "Le jour où ça coince : garder les questions 1, 3 et 5. La sixième, qui demande de repérer un silence, est la plus exigeante de la fiche et peut se traiter à l’oral, ou pas du tout.",
    ],
    [
      "Titre — Le sel, du bassin à la table",
      "Chapeau — Personne ne fabrique le sel marin. On le fait venir, on le laisse s’évaporer, et on ramasse ce qui reste.",
      "Texte 1 — L’eau de mer contient environ trente-cinq grammes de sel par litre. Pour récolter ce sel, le paludier ne chauffe rien : il fait entrer l’eau de mer dans le marais par un chenal, à la marée haute, puis la laisse circuler très lentement de bassin en bassin. À chaque étape, le soleil et le vent emportent de l’eau, et le sel qui reste se concentre.",
      "Texte 2 — Dans le dernier bassin, l’œillet, l’eau ne fait plus que quelques centimètres de profondeur et elle est si chargée que le sel ne tient plus en solution : il cristallise et se dépose au fond. Le paludier le rassemble avec un râteau sans dents, le las, et le tire sur le bord. Le sel qui se forme en surface par temps sec et venteux, plus fin, se ramasse à part : c’est la fleur de sel.",
      "Texte 3 — Tout dépend du temps qu’il fait. Il faut du soleil, du vent, et surtout pas de pluie : une averse dilue l’eau des bassins et remet plusieurs jours de travail à recommencer. La récolte ne se fait donc que de juin à septembre, et une mauvaise saison se voit tout de suite dans le tonnage.",
      "Encadré — Quatre nombres : environ 35 grammes de sel par litre d’eau de mer à l’entrée ; 5 bassins successifs entre la mer et l’œillet ; quelques centimètres d’eau seulement dans l’œillet ; 4 mois de récolte, de juin à septembre.",
      "Schéma : une vue de dessus du marais, en escalier vers la droite — le chenal qui amène l’eau de mer, puis la vasière, les cobiers, les fares, et enfin les œillets, tout petits, alignés côte à côte. Une flèche fine suit l’eau d’un bassin à l’autre, et à côté de chacun un nombre donne la quantité de sel par litre : 35, puis 80, puis 180, puis 260.",
      "Nature et source — double page d’un livret vendu à la maison des paludiers, édition de 2021 ; le texte a été relu par une coopérative de producteurs de sel.",
      "Question 1 — Quelle est la nature de ce document, et où se vend-il ?",
      "Question 2 — Qui a relu le texte ? Qu’est-ce que cela peut changer à ce que la page raconte ?",
      "Question 3 — Combien y a-t-il de sel par litre au premier bassin, et combien au dernier ? Où lit-on ces deux nombres ?",
      "Question 4 — Pourquoi la récolte n’a-t-elle lieu que l’été ?",
      "Question 5 — D’après le schéma, dans quel ordre l’eau traverse-t-elle les bassins ?",
      "Question 6 — La page parle-t-elle des années où il pleut beaucoup ? Qu’en dit-elle exactement, et que ne dit-elle pas ?",
    ],
    [
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "Un livret, vendu à la maison des paludiers, édition de 2021. Ce n’est pas un manuel : c’est un document qu’on achète sur place, en visitant.",
      "Une coopérative de producteurs de sel, c’est-à-dire les gens qui vendent ce sel. Ils connaissent le métier mieux que personne, et ils ont aussi intérêt à ce que leur produit soit bien vu. Sur la manière de récolter, on peut les suivre sans réserve ; sur une comparaison avec d’autres sels, on se méfierait davantage.",
      "Environ 35 grammes par litre au départ, 260 dans l’œillet. Le premier nombre est dans le texte et dans l’encadré ; le second n’est écrit que sur le schéma, à côté du dernier bassin.",
      "Parce que l’évaporation demande du soleil et du vent, et que la pluie dilue l’eau des bassins. De juin à septembre, c’est la seule période où le temps le permet.",
      "Le chenal, la vasière, les cobiers, les fares, puis les œillets.",
      "Oui, en une phrase : une averse remet plusieurs jours de travail à recommencer, et une mauvaise saison se voit dans le tonnage. Ce que la page ne dit pas, c’est ce que devient alors le revenu du paludier — un livret vendu sur place a peu de raisons de le raconter.",
    ],
    "Ce qu’on regarde : la question 3, qui oblige à aller chercher un nombre dans le schéma alors qu’un autre, très ressemblant, est dans le texte. C’est le faux pas le plus fréquent de toute la série — répondre avec le premier nombre trouvé. S’il donne 35 deux fois, ne rien expliquer : lui demander de poser le doigt sur l’endroit de la page où il a lu sa seconde réponse. Il verra tout seul qu’il n’a pas bougé.",
  ),

  f(
    "ld-doc-17",
    "Lecture d’un documentaire",
    "Documentaire 17 · Ce qu’un phare fait avec très peu de lumière",
    [
      "Nature et source d’abord, et cette fois l’auteur est signé et compétent : l’occasion de montrer que la question « qui écrit ? » ne sert pas seulement à se méfier, elle sert aussi à décider qu’on peut suivre.",
      "Le schéma se comprend en le couvrant à moitié : montrer d’abord sa partie gauche seule — la lumière qui part dans toutes les directions — puis découvrir la droite. La différence saute aux yeux sans un mot d’explication.",
      "Le jour où ça coince : garder les questions 1, 3 et 4, qui tiennent dans le texte et le schéma. La deuxième demande de la nuance, et elle peut se faire un autre jour, à l’oral.",
    ],
    [
      "Titre — Ce qu’un phare fait avec très peu de lumière",
      "Chapeau — Une lampe ordinaire éclaire dans toutes les directions, et se perd. Un phare envoie presque tout vers l’horizon, et se voit à des dizaines de kilomètres.",
      "Texte 1 — Une lampe posée en haut d’une tour envoie sa lumière partout : vers le ciel, vers le sol, vers la mer. La plus grande partie ne sert à rien. En 1822, l’ingénieur Augustin Fresnel propose d’entourer la lampe d’une lentille faite d’anneaux de verre étagés, taillés chacun de façon à redresser les rayons qui les traversent. À la sortie, presque toute la lumière part à l’horizontale, en un faisceau serré.",
      "Texte 2 — Un phare ne sert pas seulement à prévenir qu’il y a une côte : il sert à dire laquelle. Chaque phare a son rythme propre — trois éclats toutes les quinze secondes, un éclat toutes les cinq, une occultation régulière — et ce rythme est inscrit sur les cartes marines. Un marin qui aperçoit une lumière compte les éclats, sa montre à la main, et sait devant quoi il se trouve.",
      "Texte 3 — La portée dépend aussi de la hauteur, parce que la Terre est ronde : plus la lanterne est haute, plus l’horizon recule. Un phare bâti sur une falaise porte plus loin que le même phare posé sur la grève. Presque tous les phares français fonctionnent aujourd’hui sans gardien : la lampe s’allume seule, et une panne se signale seule.",
      "Encadré — Quatre nombres : 1822, l’année de la lentille de Fresnel ; 1611, la première nuit d’allumage du phare de Cordouan, le plus ancien de France encore en service ; jusqu’à une cinquantaine de kilomètres de portée pour les plus puissants ; 3 éclats toutes les 15 secondes, la signature d’un phare parmi d’autres.",
      "Schéma : une coupe de la lanterne. Au centre, la lampe ; autour, les anneaux de verre de la lentille, dessinés en escalier. Deux jeux de flèches partent de la lampe : à gauche, sans lentille, elles s’écartent en éventail et montent vers le ciel ; à droite, à travers la lentille, elles sortent toutes parallèles. Une légende sous le dessin : « à gauche, ce qui se perdait ; à droite, ce qui part vers la mer ».",
      "Nature et source — article d’une revue d’histoire maritime pour le grand public, numéro d’hiver 2023, signé par le conservateur d’un musée des phares.",
      "Question 1 — Quelle est la nature de ce document, et de quand date-t-il ?",
      "Question 2 — Qui l’a écrit ? Sur quoi ce métier-là en fait-il un auteur qu’on peut suivre, et sur quoi serait-il moins bien placé ?",
      "Question 3 — À quoi sert la lentille ?",
      "Question 4 — À quoi sert le rythme des éclats ?",
      "Question 5 — Que désigne, dans la légende du schéma, l’expression « ce qui se perdait » ?",
      "Question 6 — Le texte écrit « presque tous les phares français » fonctionnent sans gardien. Pourquoi « presque » ?",
    ],
    [
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "Un article de revue d’histoire maritime pour le grand public, numéro d’hiver 2023.",
      "Le conservateur d’un musée des phares. Sur l’histoire des phares, sur la lentille et sur les rythmes, c’est son métier, et on peut le suivre. Il serait moins bien placé pour dire si les phares servent encore aujourd’hui, face aux instruments de navigation modernes : il dirige un musée qui vit de leur prestige. Cette réponse-là se discute, il n’y a pas de formule à retenir.",
      "À redresser les rayons de la lampe pour qu’ils partent tous à l’horizontale, au lieu de se disperser. C’est ce qui donne au faisceau sa portée.",
      "À identifier le phare. Chaque phare a son rythme, inscrit sur les cartes : le marin compte les éclats et sait devant quelle côte il se trouve.",
      "La lumière qui, sans lentille, partait vers le ciel et vers le sol, et qui n’éclairait aucun bateau. La légende désigne les flèches de gauche.",
      "Parce que « tous » serait trop dire, et que l’auteur ne l’écrit pas : quelques phares gardent une présence, pour la visite ou pour l’entretien. Un document sérieux écrit « presque » quand il n’est pas sûr d’être complet, comme il écrit « environ » devant un nombre qu’il n’a pas compté.",
    ],
    "Ce qu’on regarde : la question 6, sur le mot « presque ». Toute l’année a servi à lui faire remarquer ces mots-là — « environ », « vers », « estimé », « reconstitué », « presque ». Ce sont ceux par lesquels un auteur dit ce qu’il ne sait pas, et un lecteur qui les voit lit autrement. S’il les saute encore, une reprise sans discours : lui faire relire une page déjà travaillée et entourer au crayon tous ces mots, sans rien répondre d’autre.",
  ),

  f(
    "ld-doc-18",
    "Lecture d’un documentaire",
    "Documentaire 18 · Ce qu’il y a sous les feuilles mortes",
    [
      "Nature et source d’abord, et la nature est inhabituelle : un carnet de relevés, pas un texte d’explication. Lui demander avant de lire en quoi un carnet diffère d’un article — on y note ce qu’on a vu, on n’y raconte pas ce qu’on sait.",
      "L’encadré dit d’où vient chacun de ses nombres. Lui faire lire cet encadré en premier, avant le texte : c’est le seul de toute la série qui le fasse, et c’est le modèle de ce qu’on aurait aimé trouver dans les autres.",
      "Le jour où ça coince : garder les questions 1, 2 et 4. La sixième, qui demande jusqu’où va ce qu’un document prouve, se traite très bien en marchant, un autre jour, sans papier.",
    ],
    [
      "Titre — Ce qu’il y a sous les feuilles mortes",
      "Chapeau — Un sol de forêt n’est pas de la terre : c’est un chantier, où quelques centaines d’ouvriers par mètre carré démontent ce qui tombe.",
      "Texte 1 — À l’automne, les feuilles tombent et forment une couche épaisse : la litière. Un an plus tard, la plupart ont disparu. Elles n’ont pas fondu : elles ont été mangées, découpées, digérées et rejetées — d’abord par des animaux qu’on voit à peine, cloportes, collemboles, vers de terre, puis par des champignons et des bactéries qu’on ne voit pas du tout.",
      "Texte 2 — Ce qui reste au bout de la chaîne est une matière noire et friable, l’humus, où l’on ne reconnaît plus aucune feuille. L’humus retient l’eau et libère peu à peu les éléments dont les arbres ont besoin. Les racines, elles, ne travaillent pas seules : elles sont enveloppées de filaments de champignons qui leur apportent eau et minéraux, et qui reçoivent en échange du sucre fabriqué par les feuilles.",
      "Texte 3 — Ce chantier est lent. Nous relevons chaque année, depuis 2018, l’épaisseur des couches sur le même carré de forêt, et nous comptons les animaux d’un centimètre carré de litière. Les épaisseurs bougent peu d’une année sur l’autre. Un sol qu’on abîme — qu’on tasse, qu’on décape, qu’on retourne — ne se refait pas à l’échelle d’une vie humaine.",
      "Encadré — Quatre nombres, et d’où ils viennent : environ 1 siècle pour former 1 centimètre de sol — une estimation, reprise de travaux publiés ailleurs, et non une mesure que nous aurions faite ; plusieurs centaines de petits animaux par mètre carré de litière — un comptage, refait chaque année sur le même carré ; 3 couches nommées sur le schéma ; 7 années de relevés, de 2018 à 2024.",
      "Schéma : une carotte de sol dressée, coupée en trois bandes nommées et mesurées — la litière, 3 centimètres, où les feuilles se reconnaissent encore ; l’humus, 8 centimètres, noir, où plus rien ne se reconnaît ; la terre minérale, plus claire, qui continue au-delà du cadre et dont l’épaisseur n’est pas donnée. À droite, une loupe agrandit un centimètre carré de litière : on y a dessiné un cloporte, deux collemboles et un fil blanc de champignon.",
      "Nature et source — double page d’un carnet d’observation tenu par une maison forestière, relevés de 2018 à 2024, imprimé pour les classes qui viennent en visite.",
      "Question 1 — Quelle est la nature de ce document ? Attention : ce n’est ni un article, ni un manuel.",
      "Question 2 — Sur combien d’années portent les relevés ?",
      "Question 3 — Dans l’encadré, un nombre est estimé et un autre est compté. Lesquels, et comment le sait-on ?",
      "Question 4 — Que montre la loupe du schéma ?",
      "Question 5 — Pourquoi la bande de terre minérale sort-elle du cadre du dessin ?",
      "Question 6 — Ce carnet permet-il de dire à quoi ressemble le sol de toutes les forêts de France ?",
    ],
    [
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "Un carnet d’observation : des relevés faits sur place, par ceux qui tiennent la maison forestière, et imprimés pour les visiteurs. Ni un article de journal, ni une page de manuel — personne ne l’a écrit pour expliquer, on l’a écrit pour noter.",
      "Sept années, de 2018 à 2024. C’est à la ligne de source, et répété dans l’encadré.",
      "Le siècle par centimètre de sol est une estimation, reprise de travaux publiés ailleurs. Les centaines d’animaux par mètre carré sont un comptage, refait chaque année sur le même carré. On le sait parce que l’encadré le dit mot pour mot : c’est un document qui déclare d’où viennent ses nombres, et tous ne le font pas.",
      "Un centimètre carré de litière, agrandi : un cloporte, deux collemboles et un fil blanc de champignon. Elle montre à quoi ressemble ce que l’on compte.",
      "Parce qu’elle continue plus bas que le dessin et que son épaisseur n’a pas été mesurée. Le dessin ne prétend pas montrer ce qu’il ignore — sortir du cadre est une façon de dire « ça continue, et nous ne l’avons pas relevé ».",
      "Non. Il ne décrit qu’un carré de forêt, celui-là, relevé pendant sept ans. Ce qu’il montre est vrai là où il a été fait. Pour parler de toutes les forêts, il faudrait beaucoup d’autres carrés, ailleurs, et quelqu’un pour les rassembler.",
    ],
    "Ce qu’on regarde : la question 6, la dernière de la série et la plus éloignée d’un exercice de lecture. Elle demande de dire ce qu’un document ne permet pas de conclure — l’inverse de ce qu’on demande d’habitude. S’il répond « oui, toutes les forêts », ne pas corriger d’un mot : lui demander combien de forêts ont été relevées dans ce carnet. Il rectifie tout seul, et cette rectification-là se retient.",
  ),
];
