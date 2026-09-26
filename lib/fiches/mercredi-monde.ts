/**
 * Le mercredi, tourné vers le dehors : une sortie, une carte, un métier.
 *
 * Trois rituels du parrain, neuf séances de quarante-cinq minutes dans l'année,
 * et une fiche de réserve par série. Ce n'est pas un cours. Chaque fiche donne
 * la question qu'on pose **avant** de partir ou de commencer — celle dont on
 * cherche la réponse ensuite —, ce qu'il faut sortir de la maison, le déroulé,
 * et ce qu'on sait vraiment du sujet, pour que l'adulte n'ait pas à le
 * chercher sur place.
 *
 * Ce qu'une fiche donne, et pourquoi : voir `lib/fiches/types.ts`. En deux
 * mots — le matériel exact, le corrigé quand il y en a un, et ce qu'on
 * regarde. Un adulte qui l'ouvre ne doit plus rien avoir à chercher.
 *
 * **Réservé aux adultes** : ces fiches portent les corrigés.
 *
 * ## Comment les fiches sont faites
 *
 * Le `materiel` commence par ce qu'on emporte ou ce qu'on sort, sans numéro ;
 * viennent ensuite les étapes, numérotées à la main. Le corrigé est en regard :
 * vide en face de la liste des choses à sortir, rempli en face d'une étape
 * quand il y a quelque chose de vrai à savoir.
 *
 * **Une sortie** ne nomme aucun établissement : un marché, une médiathèque,
 * une gare, un chantier existent presque partout. Chaque fiche a sa version à
 * la maison, pour le jour où il pleut, où l'enfant n'a pas la force de sortir,
 * ou où le lieu est fermé. Cette version-là n'est pas un pis-aller.
 *
 * **Une carte** va de la maison au quartier, puis à l'échelle et aux points
 * cardinaux. Un plan de mémoire qui ne ressemble pas à la carte n'est pas un
 * plan raté : l'écart entre les deux est exactement ce qu'on vient chercher.
 *
 * **Un métier** : un par fiche, pris dans des familles différentes — les
 * mains, le soin, la technique, le service. Les formations sont celles de la
 * France d'aujourd'hui, et elles changent : quand quelqu'un qui exerce le
 * métier dit autre chose que la fiche, c'est lui qu'on croit. Aucun métier
 * n'est rangé au-dessus d'un autre, ni par la durée des études, ni par ce
 * qu'il faudrait « avoir comme notes » pour y aller.
 *
 * Rien de tout ceci n'a été relu par un enseignant. Ça doit l'être.
 */

import { f, type Fiche } from "./types";

export const mercrediMonde: Fiche[] = [
  /* ================================================================== */
  /* UNE SORTIE — trois séances, le 7 octobre, le 13 janvier, le 30 juin */
  /* et une de réserve                                                   */
  /* ================================================================== */

  f(
    "mm-sortie-01",
    "Une sortie",
    "Sortie 1 · le marché, et d’où vient ce qu’on y vend",
    [
      "La question, posée à la maison avant de partir et écrite en haut d’une page du carnet : **« D’où viennent les fruits et les légumes du marché ? »** Il peut écrire ce qu’il croit à côté ; on n’en dit rien, on vérifiera sur place.",
      "Vérifier la veille le jour et l’heure du marché le plus proche : la plupart se tiennent le matin. S’il n’y en a pas le mercredi, le rayon des fruits et légumes d’un magasin fait presque la même sortie, avec les mêmes étiquettes — seule l’étape du producteur tombe.",
      "Sécurité : on traverse aux passages piétons, et on convient **avant d’arriver** d’un point de rendez-vous facile à retrouver — une fontaine, l’entrée du marché. Si on se perd de vue, il va au point de rendez-vous et il y attend, sans chercher ; si l’attente dure, il demande à un marchand de l’aider. Le lui dire calmement, une fois, comme une règle de sortie et pas comme une menace.",
      "Il n’a à parler à personne. S’il veut poser une question à un marchand ou acheter un fruit lui-même, c’est lui qui le propose ; sinon l’adulte pose la question et il écoute.",
      "Le jour où ça ne va pas, ou s’il pleut à verse : la version à la maison, en dernière entrée. Et sur place, si la foule le serre : on relève trois étiquettes au lieu de dix, et on rentre.",
    ],
    [
      "À emporter : le carnet, un crayon, un sac pour un éventuel achat, quelques pièces si on achète quelque chose.",
      "1. Sur place, relever dix étiquettes de fruits ou de légumes : le nom du produit et ce qui est écrit après « origine ». Un produit par ligne du carnet.",
      "2. Chercher sur les étals un produit qui vient de France et un produit qui vient d’un autre pays. Les montrer du doigt à l’adulte, sans rien acheter.",
      "3. Regarder s’il y a, sur un stand, une pancarte « producteur ». Si on en a envie, demander au marchand ce qui a été cueilli le plus près d’ici.",
      "4. Au retour : compter les lignes du carnet — combien de France, combien d’ailleurs — et chercher les pays sur une carte du monde, un atlas ou une carte en ligne.",
      "5. Au retour : relire la question du haut de la page et y répondre en une ou deux phrases, avec ce qu’on a vu. Si la réponse est « ça dépend du produit », c’est une vraie réponse.",
      "Version à la maison : sortir la corbeille à fruits, le bac à légumes du réfrigérateur et les emballages de la semaine. Relever l’origine de chaque produit, puis même retour : compter, chercher les pays sur la carte, répondre à la question.",
    ],
    [
      "",
      "En France, l’origine d’un fruit ou d’un légume frais doit être affichée, avec le prix. Si une étiquette manque, ce n’est pas lui qui a mal cherché : on note « pas d’étiquette », c’est une observation comme une autre.",
      "Début octobre, ce qui vient de France est souvent de saison : pommes, poires, raisin, courges, poireaux, choux, carottes. Les agrumes, les bananes et les avocats viennent en général de plus loin.",
      "Tous les marchands ne cultivent pas ce qu’ils vendent : beaucoup achètent leurs produits à des grossistes. Un producteur vend ce qu’il a fait pousser lui-même, et c’est pour ça qu’il le signale.",
      "Une surprise possible : des bananes marquées « Guadeloupe » ou « Martinique ». Ce sont des départements français d’outre-mer, à des milliers de kilomètres : faut-il les compter avec la France ou avec l’ailleurs ? Les deux se défendent, et c’est une bonne discussion. La France ne s’arrête pas à la carte de l’Hexagone.",
      "La réponse vérifiée : une partie vient de près, surtout ce qui est de saison ; une autre partie vient de loin, parce que ça ne pousse pas ici, ou pas à ce moment de l’année. La proportion change selon le marché et selon le mois.",
      "",
    ],
    "On regarde s’il revient à la question tout seul une fois sur place, ou s’il se laisse emporter par le marché — les deux se valent un premier jour. Et s’il dit au retour « je croyais que tout venait d’ici » sans en être gêné : s’être trompé avant de partir est ce qui rend la sortie intéressante. On ne la lui souffle pas : elle vient ou elle ne vient pas, et la sortie a servi dans les deux cas.",
  ),

  f(
    "mm-sortie-02",
    "Une sortie",
    "Sortie 2 · la médiathèque, et le livre qu’on retrouve parmi des milliers",
    [
      "La question, écrite dans le carnet avant de partir : **« Comment retrouve-t-on un livre précis parmi des milliers, sans les regarder tous ? »** Il écrit ce qu’il croit ; on n’y touche pas.",
      "Avant de partir, il choisit un sujet qui l’intéresse vraiment — un animal, les planètes, un sport, les volcans. C’est ce sujet qu’on ira chercher sur les étagères.",
      "Vérifier les horaires la veille : beaucoup de médiathèques ouvrent le mercredi après-midi, pas toutes. Sécurité : on traverse aux passages piétons ; en janvier la nuit tombe avant dix-huit heures, on part donc assez tôt pour rentrer de jour, ou avec un vêtement clair et une lampe.",
      "Demander un renseignement à la personne de l’accueil se fait volontiers, mais c’est l’adulte qui le fait si l’enfant ne le propose pas. Il a le droit de rester à côté et d’écouter.",
      "Le jour où ça ne va pas : on va seulement au rayon des documentaires, on cherche un seul livre, et on s’assoit pour le lire sur place. La version à la maison est en dernière entrée.",
    ],
    [
      "À emporter : le carnet, un crayon, la carte de la médiathèque si la famille en a une, un sac pour d’éventuels emprunts.",
      "1. Sur place, prendre trois livres de documentaires au hasard et recopier ce qui est écrit sur la petite étiquette collée en bas du dos. Chercher ce que ces étiquettes ont en commun.",
      "2. Faire le tour des étagères des documentaires et noter comment les nombres se suivent. Chercher où commence la centaine suivante.",
      "3. Retrouver le rayon de son sujet : par le poste de recherche s’il y en a un, ou en demandant à l’accueil quel nombre correspond au sujet. Noter ce nombre, puis aller le chercher sur les étagères.",
      "4. Aller au rayon des romans ou des albums et regarder comment ils sont rangés, cette fois. Ce n’est pas le même ordre.",
      "5. Au retour : relire la question du carnet et y répondre avec ce qu’on a vu. Puis, s’il en a envie, ranger une étagère de sa chambre avec son propre système d’étiquettes.",
      "Version à la maison : prendre tous les livres d’une étagère, les poser par terre, et chercher avec lui trois façons de les ranger — par sujet, par auteur, par taille. Laquelle permet de retrouver un livre sans tout regarder ? Même question que pour la sortie, et la même réponse au bout.",
    ],
    [
      "",
      "L’étiquette s’appelle la **cote** : c’est l’adresse du livre sur les étagères. Pour un documentaire, elle porte le plus souvent un nombre, suivi des premières lettres du nom de l’auteur.",
      "La plupart des médiathèques françaises rangent les documentaires selon une classification par nombres, la classification décimale de Dewey : les 500 sont les sciences, les 700 les arts et les sports, les 900 l’histoire et la géographie. Certaines utilisent leur propre système ; on note ce qu’on voit sur place.",
      "Dans ce classement, les animaux sont vers 590, l’astronomie vers 520, les sports vers 796. Si le nombre trouvé sur place diffère, c’est la médiathèque qui a raison : elle a pu adapter le classement.",
      "Les romans sont en général rangés par ordre alphabétique du nom de l’auteur, souvent avec une lettre « R » devant. Un roman se cherche le plus souvent par son auteur plutôt que par un sujet : on le range donc par qui l’a écrit.",
      "La réponse vérifiée : chaque livre a une adresse, la cote, et les livres sont rangés dans l’ordre de ces adresses. On cherche d’abord l’adresse, puis on va directement au bon endroit — comme on trouve une maison par sa rue et son numéro.",
      "",
    ],
    "On regarde s’il fait le lien de lui-même entre le nombre de l’étiquette et la place du livre, ou s’il faut le lui montrer. S’il ne trouve pas le livre à la cote notée, on ne dit pas qu’il a mal cherché : un livre peut être emprunté, et c’est une information de plus. Et on remarque s’il ressort avec un livre qu’il n’était pas venu chercher — c’est souvent le meilleur moment de la sortie.",
  ),

  f(
    "mm-sortie-03",
    "Une sortie",
    "Sortie 3 · la gare, et le train qui n’a pas de volant",
    [
      "La question, écrite dans le carnet avant de partir : **« Un train n’a pas de volant. Comment fait-il pour aller sur une voie plutôt que sur une autre ? »** Il écrit ce qu’il croit ; les idées les plus fausses sont les bienvenues.",
      "Une petite gare suffit, et vaut souvent mieux qu’une grande : moins de monde, moins de bruit. Regarder les horaires la veille et choisir le moment où il passe le plus de trains : dans une petite gare, il peut y avoir une heure entre deux. Arriver cinq minutes avant un passage ; en voir un ou deux suffit.",
      "Sécurité, dite avant d’entrer dans la gare : si l’on va sur le quai, on reste **derrière la ligne peinte ou la bande en relief** au bord du quai, même quand aucun train n’est annoncé — un train peut passer sans s’arrêter, et vite. On ne descend jamais sur les voies, pour rien au monde, même pour un objet tombé : on prévient un agent. On ne change de quai que par la passerelle ou le souterrain ; s’il n’y en a pas, on reste sur le même quai. Sur une passerelle, on ne grimpe pas sur la rambarde et on ne passe rien par-dessus. Sur le trajet, on traverse aux passages piétons. Fin juin : de l’eau et une casquette.",
      "On commence **depuis le hall**, ou depuis une passerelle au-dessus des voies si elle est ouverte à tous : on y voit le tableau des départs, les trains, les rails, les feux, et souvent un aiguillage. On ne va sur le quai que si c’est calme **et** que la gare le permet sans billet — ça varie d’une gare à l’autre : certaines ferment leurs quais par des portes de contrôle, d’autres les réservent aux voyageurs. Dans le doute, on reste dans le hall ou sur la passerelle, et la sortie est entière.",
      "Le jour où ça ne va pas — le bruit d’un train qui passe peut surprendre fort : on reste dans le hall devant le tableau des départs, qui répond déjà à une partie de la question. La version à la maison est en dernière entrée.",
    ],
    [
      "À emporter : le carnet, un crayon, une bouteille d’eau, une casquette. Rien d’autre.",
      "1. Devant le tableau ou l’écran des départs, recopier trois lignes : l’heure, la destination, la voie. Chercher ce qui décide de la voie qu’un train va prendre.",
      "2. Depuis la passerelle, depuis le hall s’il donne sur les voies, ou depuis le quai derrière la ligne si on y est allé, regarder vers le bout de la gare : chercher un endroit où les rails se séparent en deux. Si on en voit un, le dessiner dans le carnet tel qu’on le voit.",
      "3. Chercher les feux au bord des voies et noter leurs couleurs quand un train arrive ou repart.",
      "4. Regarder les rails d’où l’on est — passerelle, hall ou quai —, sans jamais descendre : chercher la bande brillante sur le dessus du rail. Puis se demander ce qui empêche une roue de glisser à côté.",
      "5. Au retour : relire la question et y répondre avec le dessin du carnet. Puis refaire le dessin en deux positions, rails poussés d’un côté, rails poussés de l’autre.",
      "Version à la maison : tracer sur une grande feuille une voie qui se sépare en deux branches, comme un Y couché. L’adulte découpe une bande de carton aux ciseaux ; on la fixe par un bout à l’endroit où la voie se sépare, avec une attache parisienne ou simplement en la tenant du doigt, et on la pousse d’un côté ou de l’autre : un petit jouet qu’on fait glisser le long du carton part à gauche ou à droite. On répond à la même question.",
    ],
    [
      "",
      "Ce n’est pas le conducteur qui choisit la voie. Il règle la vitesse et le freinage, et il obéit aux signaux. Le chemin du train est préparé à l’avance, depuis un poste d’aiguillage, qui peut se trouver loin de la gare. Si la voie n’est pas encore affichée, c’est ordinaire : dans beaucoup de gares, elle n’apparaît que peu de temps avant le départ.",
      "C’est un **aiguillage**. Deux morceaux de rail mobiles, les aiguilles, reliés entre eux, sont déplacés ensemble, le plus souvent par un moteur : l’une se plaque contre le rail fixe de son côté pendant que l’autre s’écarte du sien. Selon cette position, les roues sont guidées vers une branche ou vers l’autre.",
      "Au bord des voies, un feu rouge oblige le conducteur à s’arrêter, un feu vert l’autorise à passer, un feu jaune lui annonce qu’il devra s’arrêter plus loin. Les signaux réels sont plus nombreux que ces trois-là ; ces trois suffisent pour aujourd’hui.",
      "La bande brillante est l’endroit où les roues roulent, métal contre métal, et le polissent. Ce qu’on ne voit pas d’où l’on est : chaque roue porte un rebord, le boudin, du côté intérieur de la voie, qui l’empêche de glisser à côté du rail. C’est ce rebord que l’aiguillage guide : le train suit les rails, il ne se dirige pas.",
      "La réponse vérifiée : un train ne choisit pas son chemin, ce sont les rails qui le choisissent pour lui. Un aiguillage, commandé à distance, fait passer les roues sur une voie ou sur l’autre, et les feux disent au conducteur quand il peut avancer.",
      "",
    ],
    "On regarde ce qu’il fait de sa première idée quand elle ne tient plus devant les voies — s’il la barre lui-même dans le carnet, en souriant ou sans rien dire, c’est le geste qu’on espérait de toute l’année de sorties. S’il reste accroché à « le conducteur tourne », on ne le reprend pas sur place : c’est le dessin en deux positions, au retour, qui fera le travail.",
  ),

  f(
    "mm-sortie-04",
    "Une sortie",
    "Sortie 4 · un chantier, regardé depuis le trottoir",
    [
      "Fiche de réserve, à garder pour le jour où un chantier de construction s’ouvre près de chez vous. La question, écrite dans le carnet avant de partir : **« Dans quel ordre construit-on un bâtiment, et pourquoi pas dans un autre ? »** Il écrit l’ordre qu’il imagine, en quelques mots.",
      "Choisir le chantier et le moment : un chantier et une heure **sans marteau-piqueur**. L’adulte passe devant la veille, ou quelques minutes avant, pour écouter et repérer d’où on regardera ; s’il entend un marteau-piqueur, on choisit une autre heure, un autre jour ou un autre chantier.",
      "Sécurité, non négociable et dite avant de partir : un chantier se regarde **depuis l’espace public**, derrière les barrières ou la palissade, jamais de l’intérieur, même si le portail est ouvert. On se tient loin de l’entrée par où sortent les camions, de préférence sur le trottoir d’en face, où l’on passe par un passage piéton. On ne reste pas sous le bras d’une grue qui passe au-dessus de la rue. On ne ramasse rien.",
      "Si un ouvrier vient parler, c’est l’adulte qui répond, et on peut lui poser la question du carnet. Mais on ne l’interpelle pas pendant qu’il travaille.",
      "Le jour où ça ne va pas — le bruit d’un marteau-piqueur peut être très fort : on s’éloigne jusqu’à ce que ce soit supportable et on regarde de plus loin, ou on revient un autre jour : le chantier sera encore là. La version à la maison est en dernière entrée.",
    ],
    [
      "À emporter : le carnet, un crayon. Si le chantier dure plusieurs mois, on pourra y repasser et comparer.",
      "1. Trouver le panneau du permis de construire, accroché à la palissade et lisible depuis la rue. Recopier ce qu’on construit et la hauteur annoncée. Sur des travaux de voirie — une route, un trottoir, des tuyaux sous la chaussée —, le panneau n’annonce pas de hauteur : on recopie seulement ce qui y est écrit.",
      "2. Regarder où en est le chantier et le décrire en une phrase : un trou, des murs sans toit, un toit sans fenêtres, des fenêtres posées.",
      "3. S’il y a une grue : dessiner sa forme, et chercher ce qu’il y a de l’autre côté du bras qui soulève les charges.",
      "4. Chercher les métiers qu’on voit : qui conduit un engin, qui porte quoi, qui donne les signaux à la grue.",
      "5. Au retour : relire l’ordre écrit avant de partir et le corriger avec ce qu’on a vu, en rayant plutôt qu’en effaçant. Puis répondre au « pourquoi ».",
      "Version à la maison : chercher dans la maison des choses qui ont forcément été faites avant d’autres — les fils électriques avant la peinture du mur, le toit avant le parquet, le sol avant les meubles. Pour la grue : poser une règle en équilibre sur un crayon à six pans, par son milieu ; empiler deux pièces identiques à mi-chemin entre le crayon et un bout, et chercher où poser une troisième pièce, la même, de l’autre côté pour que la règle tienne.",
    ],
    [
      "",
      "En France, l’autorisation de construire — permis de construire ou déclaration préalable — doit être affichée sur le terrain, visible depuis la voie publique, pendant tout le chantier. Le panneau indique notamment la nature du projet et la date de l’autorisation, et, seulement quand le projet prévoit une construction, sa hauteur et sa surface de plancher. Des travaux de voirie — une route, un trottoir, des canalisations — ne passent pas par un permis de construire : leur panneau, quand il y en a un, n’indique aucune hauteur.",
      "L’ordre habituel : on creuse et on coule les fondations ; on monte les murs et les planchers — le gros œuvre ; on pose la charpente et le toit, puis les fenêtres et les portes ; viennent enfin l’électricité, la plomberie, l’isolation, les cloisons, et les peintures en dernier.",
      "De l’autre côté du bras, la **contre-flèche** porte de gros blocs de béton, le contrepoids, qui équilibrent le bras et sa charge. Sur une petite grue qui se déplie d’elle-même, le contrepoids est en bas, près du sol. Une grue soulève moins lourd quand la charge est au bout du bras que près du mât. Hors service, on la laisse tourner librement, comme une girouette : le bras s’aligne de lui-même dans le sens du vent au lieu de lui résister.",
      "Le grutier travaille dans une cabine en haut du mât ou avec une télécommande depuis le sol. Quelqu’un au sol le guide souvent par radio ou par gestes, parce qu’il ne voit pas toujours l’endroit où il pose la charge.",
      "La réponse vérifiée : on construit du bas vers le haut, puis de l’extérieur vers l’intérieur. Les fondations portent tout le reste ; le toit et les fenêtres mettent le bâtiment à l’abri de la pluie, et seulement ensuite on peut installer ce que l’eau abîmerait.",
      "Pour la règle : elle tient quand la pièce seule est deux fois plus loin du crayon que les deux pièces, donc tout au bout. Plus un poids est loin du point d’appui, plus il pèse dans l’équilibre — c’est pour ça que la grue porte moins lourd au bout de son bras. Une règle tient mal sur un crayon : si elle tombe, c’est le montage, pas lui, et la voir pencher du bon côté suffit à comprendre.",
    ],
    "On regarde s’il change son ordre de départ sans en être gêné, et s’il trouve seul un « parce que » — le toit avant la peinture, parce que la pluie. Un ordre juste appris par cœur vaut moins qu’une seule raison trouvée. Et s’il demande à y repasser dans un mois pour voir la suite, la fiche a fait bien plus que répondre à sa question.",
  ),

  /* ================================================================== */
  /* UNE CARTE — trois séances, le 4 novembre, le 27 janvier, le 5 mai   */
  /* et une de réserve                                                   */
  /* ================================================================== */

  f(
    "mm-carte-01",
    "Une carte",
    "Carte 1 · le logement vu d’en haut",
    [
      "La question, posée avant de sortir la moindre feuille : **« Si on enlevait le toit et qu’on regardait chez nous d’en haut, comme un oiseau, qu’est-ce qu’on verrait — et où serait chaque pièce ? »** Il répond à voix haute ; on ne corrige rien.",
      "D’abord un détour de cinq minutes par la table : on y pose une tasse, un livre, une cuillère, et il les dessine vus de côté, puis vus d’en haut. La tasse devient un rond, le livre un rectangle. C’est tout le secret d’un plan.",
      "Puis le plan du logement, de mémoire, assis dans une seule pièce, **sans gomme** : on garde tous les traits. Ensuite on vérifie en marchant, plan à la main, et on ajoute ce qui manque avec une autre couleur. Un plan de mémoire faux est le but de la séance : c’est l’écart qu’on vient voir.",
      "Le jour où ça ne va pas : on ne dessine que sa chambre, vue d’en haut, avec le lit et la porte. Une pièce suffit à comprendre ce qu’est un plan. Et si l’absence de gomme le bloque, on la lui rend : ce qui compte, ce sont les ajouts en couleur.",
    ],
    [
      "À sortir : deux feuilles blanches, un crayon à papier, un crayon de couleur vive, une tasse, un livre, une cuillère. Pas de gomme, et pas de règle. Pour la fin : un ordinateur, une tablette ou un téléphone, pour la carte en ligne.",
      "1. Sur la table, dessiner la tasse, le livre et la cuillère vus de côté, puis les mêmes vus d’en haut, sur la même feuille.",
      "2. Sur la seconde feuille, dessiner le logement vu d’en haut, de mémoire, sans se lever : les pièces, les portes, les fenêtres, et un rond là où il dort.",
      "3. Se lever, plan en main, et faire le tour pièce par pièce. Ajouter en couleur ce qui manque ou ce qui est ailleurs, sans rien effacer.",
      "4. Chercher le logement sur une carte en ligne, en vue satellite : trouver le toit de la maison ou de l’immeuble, et la rue devant. Comparer la forme du toit à celle du plan.",
      "5. Pour finir, faire la liste de ce qui a été ajouté en couleur, et relire la question du début.",
    ],
    [
      "",
      "Vu d’en haut, un objet n’a plus de hauteur : on ne voit que la place qu’il occupe au sol. Un plan, c’est exactement ça, pour une pièce ou pour une ville.",
      "",
      "À chercher en particulier dans les ajouts en couleur : les placards, les fenêtres, le sens d’ouverture des portes, un couloir dessiné trop court ou trop long, une pièce qu’on a mise du mauvais côté. Il n’y a rien à reprocher à aucun de ces écarts : chacun dit ce que la mémoire garde et ce qu’elle laisse de côté.",
      "La vue satellite est une photographie prise de très haut, depuis un satellite ou, pour les villes, souvent depuis un avion : on y voit les toits, pas les pièces. Le toit donne à peu près la forme du bâtiment au sol, un peu plus grande à cause du bord du toit qui dépasse. Dans un immeuble, notre logement n’est qu’une partie de ce toit.",
      "La réponse vérifiée : d’en haut, on verrait les murs comme des traits, les pièces comme des cases, les meubles comme des formes posées au sol. C’est ce qu’il a dessiné, et les ajouts en couleur montrent tout ce qu’un plan de mémoire oublie.",
    ],
    "On regarde s’il passe de lui-même à la vue de dessus pour le logement, ou s’il revient à dessiner les murs de face, comme sur un dessin de maison — ça arrive, et ça ne se corrige pas : ça se remontre avec la tasse. Et on regarde ce qu’il fait des ajouts en couleur : s’il les fait sans soupirer, il a compris que chercher ce qui manque était la séance, pas la preuve qu’il s’était trompé.",
  ),

  f(
    "mm-carte-02",
    "Une carte",
    "Carte 2 · le quartier de mémoire, et sa légende",
    [
      "La question, posée avant de commencer : **« Entre la maison et l’endroit où tu vas le plus souvent — le parc, la boulangerie, la médiathèque —, qu’est-ce qu’il y a exactement ? »** Il choisit l’endroit lui-même, et répond d’abord de tête.",
      "Il dessine le quartier de mémoire, vu d’en haut comme en novembre : la maison au milieu de la feuille, les rues qu’il connaît, les lieux qui comptent pour lui. Puis il invente une **légende** pour son plan. Ensuite seulement on sort la vraie carte, et on cherche ensemble ce qui manque.",
      "Préparer la vraie carte avant la séance : un plan de la ville sur papier, ou une carte en ligne en vue plan, imprimée ou à l’écran, cadrée pour montrer la maison et l’endroit choisi.",
      "Rien de ce qu’il oublie n’est une faute. Le plan de mémoire dit ce qu’il a remarqué du quartier, et c’est précisément ce qu’on veut connaître.",
      "Le jour où ça ne va pas : on ne dessine que le trajet entre la maison et l’endroit choisi, sans le reste du quartier, et on garde la légende pour une autre fois.",
    ],
    [
      "À sortir : une grande feuille blanche, un crayon à papier, quatre crayons de couleur, la vraie carte préparée. Le plan du logement de novembre, si on l’a gardé.",
      "1. Dessiner le quartier de mémoire : la maison au centre, les rues, et au moins cinq lieux qu’il connaît. Écrire les noms de rue dont il se souvient, sans chercher ceux qu’il ne sait pas.",
      "2. Inventer une légende dans un coin de la feuille : un petit dessin ou une couleur pour chaque sorte de lieu — un magasin, un espace vert, une école, un arrêt de bus, l’eau s’il y en a. Remplacer sur le plan les dessins par ces signes.",
      "3. Poser la vraie carte à côté. Retrouver la maison, puis l’endroit choisi, et suivre du doigt le trajet entre les deux.",
      "4. Chercher ce qui manque sur le plan de mémoire et l’ajouter en couleur : une rue, un carrefour, un bâtiment, un parc. Chercher aussi ce qui est à la mauvaise place ou dans le mauvais ordre.",
      "5. Lire la légende de la vraie carte, s’il y en a une, et la comparer à la sienne : quels signes se ressemblent, lesquels n’ont rien à voir.",
      "6. Revenir à la question du début et y répondre avec la carte : tout ce qu’il y a, dans l’ordre, entre la maison et l’endroit choisi.",
    ],
    [
      "",
      "",
      "Une **légende** dit ce que veut dire chaque signe d’une carte. Un bon signe est simple, se dessine vite et ne se confond pas avec un autre.",
      "",
      "Sur un plan de mémoire, l’ordre des lieux est souvent plus juste que les distances. Une rue très familière peut être dessinée trop longue, une grande avenue qu’on traverse sans y penser peut disparaître. C’est ce qui rend la comparaison intéressante, et rien de tout cela n’est à corriger comme une erreur.",
      "Il n’existe pas de légende valable pour toutes les cartes : chaque carte a la sienne, et c’est pour ça qu’on la lit d’abord. Quelques habitudes reviennent pourtant presque partout : l’eau en bleu, les bois et les parcs en vert.",
      "La réponse vérifiée est celle de la carte, et elle est propre à chaque quartier. Ce qu’on garde : la liste dans l’ordre, et le nombre de choses qui étaient sur la carte mais pas dans la mémoire.",
    ],
    "On regarde ce que sa mémoire garde : les lieux où il se passe quelque chose pour lui, ou les rues par où l’on passe. Et on regarde la légende — s’il invente des signes assez différents pour qu’on les distingue sans lui demander, il a compris à quoi sert une légende mieux qu’avec une définition. S’il veut garder le plan au mur, on le garde : il servira en mai.",
  ),

  f(
    "mm-carte-03",
    "Une carte",
    "Carte 3 · l’échelle, mesurée avec ses pas",
    [
      "La question, posée avant de commencer et écrite en haut de la feuille : **« Combien de mètres y a-t-il vraiment entre la maison et le bout de la rue ? »** Il écrit un nombre au hasard s’il veut — c’est une estimation, pas une réponse à avoir juste.",
      "Trois mesures du même trajet, qu’on compare à la fin : son estimation, la carte avec sa barre d’échelle, et ses pas. Choisir un trajet court et sans rue à traverser si possible — le bout de la rue, le coin du pâté de maisons.",
      "Sécurité pour la marche : sur le trottoir, l’adulte côté route ; s’il faut traverser, on s’arrête de compter, on traverse au passage piéton, et on reprend le compte ensuite.",
      "Les calculs se font ensemble, à voix haute, sur une feuille. Ce n’est pas un exercice de calcul : si une division bloque, l’adulte la fait et on garde le temps pour comparer les trois nombres.",
      "Le jour où ça ne va pas : on ne mesure que ses pas dans le couloir ou le jardin, et on laisse la carte pour une autre fois. Mesurer son pas est déjà le cœur de l’échelle.",
    ],
    [
      "À sortir : un mètre ruban ou un mètre de couturière, deux objets pour marquer le sol (deux cailloux, deux chaussons), un crayon, une feuille, une bande de papier d’environ deux doigts de large, la vraie carte du quartier avec sa barre d’échelle. Le plan de mémoire de janvier, si on l’a gardé.",
      "1. Mesurer son pas : poser un objet au sol, marcher dix pas normaux sans les allonger, poser le second objet au bout, puis mesurer entre les deux — en reportant le mètre plusieurs fois s’il est trop court. En déduire la longueur d’un pas.",
      "2. Sur le plan de mémoire, ou de tête, écrire son estimation du trajet en mètres.",
      "3. Sur la carte, poser la bande de papier le long du trajet et marquer le départ et l’arrivée d’un trait. Reporter la bande sur la barre d’échelle et lire combien de mètres elle représente.",
      "4. Marcher le trajet en comptant ses pas à voix haute, l’adulte compte aussi ; un compte perdu se reprend à peu près, sans revenir au départ. Puis convertir en mètres avec la longueur d’un pas.",
      "5. Écrire les trois nombres l’un sous l’autre — estimation, carte, pas — et chercher lequel est le plus loin des deux autres, et pourquoi.",
      "6. Si on utilise une carte en ligne : zoomer d’un cran et regarder ce que devient la barre d’échelle.",
    ],
    [
      "",
      "Exemple de calcul : si dix pas font cinq mètres, un pas fait cinquante centimètres, et deux cent quarante pas font cent vingt mètres. Chacun a sa longueur de pas : c’est la sienne qu’on veut.",
      "",
      "Exemple : si une barre de deux centimètres est marquée « 100 m », un centimètre sur la carte vaut cinquante mètres en vrai, et un trajet de sept centimètres fait trois cent cinquante mètres. Sur une carte au 1/25 000, un centimètre vaut deux cent cinquante mètres, et quatre centimètres font un kilomètre.",
      "",
      "La carte et les pas donnent en général des nombres proches, sans être identiques : un pas n’a jamais tout à fait la même longueur, et on ne marche pas exactement le trajet tracé sur la carte. L’estimation de départ est souvent la plus éloignée, dans un sens ou dans l’autre — c’est pour ça qu’on mesure.",
      "Sur une carte en ligne, la barre d’échelle change de longueur ou de valeur quand on zoome : la mesure ne vaut que pour un zoom. C’est aussi pour ça qu’une barre vaut mieux qu’un nombre écrit : si on agrandit une carte à la photocopieuse, la barre grandit avec elle et reste juste, alors que « 1/25 000 » devient faux.",
    ],
    "On regarde s’il fait le lien entre les trois nombres, ou s’il les voit comme trois exercices séparés. L’écart entre l’estimation et la mesure ne se juge pas : s’il dit « j’avais dit trop », il a déjà appris quelque chose sur les distances de son quartier. Et s’il propose de lui-même de mesurer un autre trajet avec ses pas, il tient l’idée d’échelle.",
  ),

  f(
    "mm-carte-04",
    "Une carte",
    "Carte 4 · trouver le nord sans boussole",
    [
      "Fiche de réserve, pour un jour de soleil. La question, posée sur le pas de la porte avant de commencer : **« De quel côté est le nord, depuis ici ? »** Il montre une direction du bras ; on la marque d’un caillou ou d’un bout de craie, sans rien dire.",
      "On cherche le nord avec l’ombre d’un bâton, puis on vérifie avec une boussole ou la boussole d’un téléphone. Ensuite on tourne la vraie carte pour qu’elle regarde dans le même sens que la rue, et on ajoute les points cardinaux au plan de mémoire.",
      "Sécurité : **on ne regarde jamais le soleil en face**, même un court instant, même avec des lunettes de soleil. On regarde l’ombre, par terre, et seulement l’ombre.",
      "Le jour où ça ne va pas, ou s’il n’y a pas de soleil : on saute l’ombre, on prend directement la boussole, et on se contente de tourner la carte. La méthode de l’ombre attendra un jour de soleil.",
    ],
    [
      "À sortir : un bâton droit d’une cinquantaine de centimètres, ou un crayon planté dans une boule de pâte à modeler sur une surface plate au soleil ; deux cailloux ou une craie ; une boussole ou un téléphone ; la vraie carte du quartier ; le plan de mémoire de janvier si on l’a gardé.",
      "1. Planter le bâton bien droit dans un endroit ensoleillé et plat. Poser un caillou exactement au bout de l’ombre.",
      "2. Attendre une vingtaine de minutes — pendant ce temps, dessiner une rose des vents vide, sans lettres, dans un coin du plan de mémoire — puis poser le second caillou au nouveau bout de l’ombre. Tracer ou imaginer la ligne du premier caillou vers le second.",
      "3. Se placer juste derrière la ligne, le premier caillou devant le pied gauche et le second devant le pied droit — ils peuvent n’être qu’à quelques centimètres l’un de l’autre —, et regarder devant soi. Comparer avec la direction marquée au début.",
      "4. Avec la boussole, loin de tout objet en fer et de tout aimant, trouver le nord. Nommer à voix haute ce qui est au nord, au sud, à l’est et à l’ouest de la maison.",
      "5. Tourner la vraie carte, posée à plat, jusqu’à ce que son nord regarde vers le vrai nord. Vérifier que la rue de la carte est alors dans le même sens que la vraie rue.",
      "6. Écrire les quatre lettres sur la rose des vents du plan de mémoire, et dire dans quelle direction se trouvent le parc, la boulangerie ou la médiathèque depuis la maison.",
    ],
    [
      "",
      "",
      "Le soleil se déplace dans le ciel de l’est vers l’ouest ; l’ombre, toujours du côté opposé au soleil, se déplace donc de l’ouest vers l’est. La ligne du premier caillou au second va à peu près de l’ouest vers l’est. La méthode est approximative — plus juste autour du milieu de la journée, et avec un bâton long qu’avec un crayon —, et elle suffit pour trouver le côté du nord.",
      "Premier caillou à l’ouest, devant le pied gauche ; second à l’est, devant le pied droit : il regarde vers le nord. En France métropolitaine, quand le soleil est au plus haut de la journée, il est plein sud et l’ombre montre le nord — ce moment tombe vers 13 h à l’heure d’hiver et vers 14 h à l’heure d’été, avec parfois près d’une heure d’écart selon l’endroit et la date.",
      "Dans le sens des aiguilles d’une montre : nord, est, sud, ouest. Une aiguille de boussole est dérangée par le fer et les aimants — une clôture, une voiture, un réfrigérateur, l’étui aimanté d’un téléphone —, d’où l’idée de s’en éloigner.",
      "Sur la plupart des cartes, le nord est en haut ; alors l’est est à droite et l’ouest à gauche. Ce n’est pas une règle absolue : certains plans affichés dans les parcs ou les gares sont tournés autrement, et une flèche indique alors le nord.",
      "Le soleil se lève du côté de l’est et se couche du côté de l’ouest, mais à peu près plein est et plein ouest seulement autour des équinoxes, vers le 20 mars et vers le 23 septembre. En hiver il se lève vers le sud-est ; en été, vers le nord-est. C’est un bon second repère pour la rose des vents, à vérifier un matin par la fenêtre.",
    ],
    "On regarde ce qu’il fait de la direction montrée au début : s’il est content de voir qu’il était loin, ou s’il cherche à dire qu’il avait presque raison. Les deux se comprennent, et on accueille le premier sans insister sur le second. Ce qu’on veut voir à la fin : qu’il tourne la carte de lui-même avant de la lire, sans qu’on le lui dise.",
  ),

  /* ================================================================== */
  /* UN MÉTIER — trois séances, le 18 novembre, le 10 février, le 19 mai */
  /* et une de réserve                                                   */
  /* ================================================================== */

  f(
    "mm-metier-01",
    "Un métier",
    "Métier 1 · boulanger, et la pâte qui gonfle",
    [
      "La question, posée avant de commencer : **« Qu’est-ce qu’un boulanger a dû apprendre, qu’on ne sait pas faire à la maison ? »** Il répond ce qu’il imagine ; on l’écrit tel quel dans le carnet. Si un autre métier lui tient à cœur ce jour-là, on prend le sien et on garde la même trame de questions.",
      "Déroulé : la pâte **en premier**, en un quart d’heure, pour qu’elle lève pendant la sortie ; puis la boulangerie du quartier et ses trois questions ; au retour, ce que la pâte est devenue. Quarante-cinq minutes pour tout cela, c’est serré : si le temps manque — la boulangerie est loin, on part plus tard que prévu —, la pâte devient la séance d’un autre mercredi, un « projet à suivre », et aujourd’hui on garde la visite et les questions.",
      "Choisir une heure creuse, ni à midi ni en fin de journée. Le boulanger travaille surtout tôt le matin et n’est pas toujours là l’après-midi : on peut laisser les questions écrites sur un papier, et revenir chercher les réponses un autre jour. Il n’est pas obligé de parler lui-même : l’adulte pose la question s’il ne le propose pas.",
      "Sécurité : sur le trajet de la boulangerie, on traverse aux passages piétons. Si on fait cuire la pâte plus tard dans la journée, en petits pains, c’est l’adulte qui s’occupe du four — le préchauffer vers 220 °C, enfourner, sortir la plaque —, et l’enfant regarde à travers la vitre sans la toucher : elle chauffe aussi.",
      "Le jour où ça ne va pas : on ne va pas à la boulangerie, on fait seulement la pâte et on la regarde lever. Les questions attendront, écrites dans le carnet.",
    ],
    [
      "À sortir : 250 g de farine, 160 g d’eau tiède — tiède au doigt, pas chaude —, 5 g de sel, 5 g de levure de boulanger sèche (pas de levure chimique), un peu de farine en plus, un saladier, un verre transparent, un feutre, un torchon, une balance, le carnet.",
      "1. Se laver les mains. Mélanger la farine et le sel, puis la levure, puis l’eau. Pétrir dix minutes à tour de rôle, jusqu’à ce que la pâte soit plus lisse et colle moins aux doigts ; si elle colle beaucoup, une cuillère de farine en plus.",
      "2. Mettre une petite boule de pâte au fond du verre transparent, marquer son niveau d’un trait de feutre sur le verre, et couvrir le saladier et le verre d’un torchon.",
      "3. Question à poser à la boulangerie : « Qu’avez-vous appris pour faire ce métier, et combien de temps ? »",
      "4. Question à poser : « À quelle heure commence votre journée, et pourquoi si tôt ? »",
      "5. Question à poser : « Qu’est-ce qui a été le plus long à apprendre ? » — et, s’il en a envie, une question qu’il invente lui-même.",
      "6. Au retour, si la pâte a été faite avant de partir : regarder le niveau de la pâte dans le verre, appuyer un doigt dans la pâte du saladier, et chercher d’où viennent les trous.",
      "7. Relire la question du début et ce qu’on avait imaginé. Écrire en face ce qu’on a appris.",
    ],
    [
      "",
      "Le pétrissage forme le **gluten**, un réseau élastique fait à partir de protéines de la farine. C’est lui qui va retenir le gaz et laisser la pâte gonfler sans se déchirer.",
      "",
      "En France, le métier s’apprend le plus souvent par un **CAP boulanger**, en deux ans après la troisième, très souvent en apprentissage : une partie du temps dans un centre de formation, le reste dans une boulangerie. On peut ensuite préparer un brevet professionnel. Il existe aussi un bac professionnel boulanger-pâtissier, en trois ans. Si le boulanger raconte un autre parcours, c’est le sien qui compte.",
      "Le pain se fabrique en grande partie la nuit ou très tôt le matin, pour être cuit et vendu dès l’ouverture. Entre le pétrissage et la cuisson, la pâte a besoin de plusieurs heures pour lever, et ce temps-là s’organise à l’avance.",
      "",
      "La levure est faite de champignons microscopiques vivants. Ils se nourrissent des sucres de la farine et rejettent un gaz, le dioxyde de carbone, qui fait des bulles retenues par le gluten : la pâte gonfle, et ces bulles deviennent les trous de la mie à la cuisson. Au bout d’une demi-heure, le niveau a souvent juste commencé à monter ; il faut une à deux heures dans une pièce chauffée pour que la pâte gonfle nettement. Si elle n’a pas bougé, c’est le plus souvent qu’il faut plus de temps, que la pièce est froide ou que l’eau était trop chaude : on attend, et ça ne dit rien de la façon dont il a pétri.",
      "Ce qu’on sait vérifier : en France, une boutique n’a le droit de s’appeler boulangerie que si le pain y est pétri, levé, façonné et cuit sur le lieu de vente par le professionnel lui-même, sans jamais avoir été congelé. Le reste de la réponse est celui qu’a donné le boulanger — il n’y en a pas d’autre.",
    ],
    "On regarde s’il fait lui-même le lien entre la pâte du verre et ce que le boulanger raconte de ses horaires : la pâte qui prend du temps explique le réveil très tôt. Et on regarde comment il vit le moment des questions — s’il reste en retrait, c’est une réponse acceptable ; s’il en pose une, même à voix basse, on n’en fait pas un événement devant le boulanger, on en reparle en rentrant.",
  ),

  f(
    "mm-metier-02",
    "Un métier",
    "Métier 2 · infirmier, infirmière, et les mains qu’on lave",
    [
      "La question, posée avant de commencer : **« Que fait un infirmier ou une infirmière dans une journée, et où l’a-t-il appris ? »** Il répond ce qu’il imagine, on l’écrit dans le carnet. Si un autre métier du soin l’attire — sage-femme, pharmacien, vétérinaire —, on prend le sien avec la même trame.",
      "Préparer avant la séance la personne à interroger : quelqu’un de la famille ou de l’entourage qui exerce le métier, rencontré ou joint au téléphone ou en vidéo, et prévenu à l’avance des quatre questions, dont la dernière est facultative. S’il n’y a personne, on écrit les questions et on les garde pour une occasion ; la séance tient sans elles.",
      "Puis un geste du métier, fait ensemble : le lavage des mains, avec de la peinture à la place du savon. **L’adulte le fait en premier**, et on regarde ses oublis à lui avant ceux de l’enfant : presque tout le monde en laisse, adultes compris, et c’est ce qu’on vient voir. Ceux qui le veulent gardent les yeux fermés, sans y porter les mains, et on se lave les mains au savon à la fin. Si la peinture devient un test pour lui — il compte ses endroits blancs, il veut recommencer pour qu’il n’en reste aucun —, on arrête la peinture, on se lave les mains, et on passe aux questions.",
      "Le jour où ça ne va pas : on ne garde que la peinture sur les mains, qui se fait souvent en riant, et on lit les réponses de la fiche à voix haute au lieu de les chercher.",
    ],
    [
      "À sortir : de la gouache lavable pour enfants, une cuillère à café par personne, du papier journal ou une vieille nappe, un vieux tee-shirt ou un tablier, du savon, un torchon, l’évier ou une bassine, un minuteur, le carnet et un crayon.",
      "1. Les yeux fermés s’il le veut, mettre la peinture dans le creux de la main et « se laver les mains » avec pendant trente secondes, comme on le fait d’habitude avec le savon, sans se toucher le visage. L’adulte d’abord, puis lui.",
      "2. Ouvrir les yeux et regarder, sans rien toucher, les endroits restés sans peinture. Les noter ou les dessiner sur le contour d’une main.",
      "3. Question à poser à la personne qui exerce le métier : « Où travaillez-vous, et que faites-vous dans une journée ? »",
      "4. Question à poser : « Qu’avez-vous appris pendant vos études, et combien de temps ont-elles duré ? »",
      "5. Question à poser : « Qu’est-ce qui ne s’apprend qu’en le faisant ? »",
      "6. Question facultative : « Que faites-vous quand un patient a peur ? » Si elle le touche de trop près — l’adulte en juge avant la séance ou sur le moment —, on la saute : elle n’est pas obligatoire, et la séance tient sans elle.",
      "7. Pour finir, relire ce qu’on avait imaginé au début, et chercher dans la rue ou le quartier, la prochaine fois qu’on sort, les plaques des cabinets de soin.",
    ],
    [
      "",
      "",
      "Les endroits le plus souvent oubliés : les pouces, le bout des doigts, l’espace entre les doigts, le dos de la main. Au lavage, on les frotte chacun exprès. Le lavage des mains est l’un des gestes les plus efficaces contre la transmission des microbes, à l’hôpital comme à la maison.",
      "Un infirmier ou une infirmière peut travailler à l’hôpital, en clinique, dans une maison de retraite, dans une école, ou aller soigner les gens chez eux. Il fait des soins et des pansements, donne les traitements prescrits par le médecin, surveille l’état des malades et leur explique ce qui va se passer. À l’hôpital, il y a des soignants jour et nuit, week-end compris.",
      "En France, on devient infirmier le plus souvent après le bac, par trois années d’études dans un institut de formation en soins infirmiers, qui mènent au diplôme d’État. Une grande partie de ces trois ans se passe en stage, auprès de patients. On peut ensuite se spécialiser, par exemple auprès des enfants ou en anesthésie, avec des études en plus. Si la personne interrogée raconte un autre parcours, c’est le sien qui compte : la formation a changé plusieurs fois.",
      "",
      "",
      "Ce qu’on sait vérifier : la durée des études, le diplôme d’État, et les lieux de travail. Pour le reste — ce qui s’apprend en le faisant, ce qu’on fait quand quelqu’un a peur —, la seule réponse est celle de la personne interrogée.",
    ],
    "On regarde le moment de la peinture : s’il rit de ses propres oublis, et encore plus des oublis de l’adulte, l’expérience a fait ce qu’on voulait. S’il se crispe sur les endroits blancs, on lui montre ceux de l’adulte, côte à côte, et on passe aux questions. Et si on a posé la dernière question, on écoute ce qu’il retient de la réponse : c’est souvent celle dont il parle encore le soir.",
  ),

  f(
    "mm-metier-03",
    "Un métier",
    "Métier 3 · mécanicien automobile, et la panne qu’on cherche",
    [
      "La question, posée avant de commencer : **« Comment un mécanicien trouve-t-il ce qui ne va pas dans une voiture qu’il n’a jamais vue ? »** Il répond ce qu’il imagine, et on l’écrit. Si un autre métier technique l’attire — électricien, plombier, réparateur de vélos —, on prend le sien.",
      "Déroulé : on regarde la voiture de la famille, ses pneus et l’étiquette des pressions ; puis on va au garage du quartier à une heure calme, ou on appelle quelqu’un de l’entourage qui fait ce métier, avec trois questions écrites. Ouvrir le capot est **facultatif**, et seulement sur une voiture thermique, essence ou diesel : sur une voiture hybride ou électrique, on n’ouvre pas le capot, on s’en tient aux pneus et à l’étiquette. Dans le doute sur la motorisation, on ne l’ouvre pas non plus. S’il n’y a pas de voiture à la maison, l’observation se fait sur un vélo : pneus, freins, chaîne.",
      "Sécurité, dite avant de commencer : si la voiture est garée le long d’une rue, on ne se tient **jamais du côté de la circulation** — on regarde les pneus côté trottoir, et c’est l’adulte seul qui ouvre une portière côté rue ; mieux vaut une cour, une allée ou un parking calme. Voiture arrêtée, frein serré, clé retirée et posée loin, pendant toute l’observation ; on regarde, et on ne touche que ce que l’adulte montre. Si l’adulte choisit d’ouvrir le capot, voiture thermique seulement : moteur **arrêté depuis plusieurs heures** ; c’est l’adulte qui ouvre le capot et le cale sur sa béquille ; on n’ouvre jamais un bouchon, on ne touche pas la batterie. Sur une voiture hybride ou électrique, on **n’ouvre pas le capot** : les câbles orange y sont à haute tension.",
      "Sur le trajet du garage, on traverse aux passages piétons. Au garage, on reste là où le mécanicien nous dit de rester, et jamais sous une voiture levée. Sur un vélo, l’adulte le tient, et les doigts restent loin de la chaîne et des rayons quand une roue tourne.",
      "Le jour où ça ne va pas : on ne fait que les pneus de la voiture, côté trottoir, sans ouvrir le capot, et on garde les questions dans le carnet pour une autre fois.",
    ],
    [
      "À sortir : le carnet, un crayon, une lampe de poche si l’adulte ouvre le capot, la notice et le carnet d’entretien de la voiture s’ils sont dans la boîte à gants.",
      "1. Regarder de près un pneu côté trottoir, ou n’importe lequel si la voiture est hors de la rue : chercher, au fond des rainures, de petites bosses de caoutchouc placées à intervalles réguliers.",
      "2. Chercher une étiquette avec des nombres et des pressions, souvent dans l’encadrement de la portière du conducteur ou à l’intérieur de la trappe à carburant. Si l’une ou l’autre est côté rue, c’est l’adulte qui l’ouvre et qui lit ; on peut aussi chercher la pression dans la notice de la voiture.",
      "3. Facultatif, et voiture thermique seulement — sur une hybride ou une électrique, on n’ouvre pas le capot et on passe à l’étape 4. Si l’adulte choisit d’ouvrir le capot, lampe à la main : repérer sans toucher le bouchon du liquide lave-glace, souvent marqué d’un petit dessin de pare-brise, et la tige de la jauge d’huile, souvent à poignée colorée — certaines voitures récentes n’en ont plus.",
      "4. Question à poser à la personne qui exerce le métier : « Qu’avez-vous appris pour faire ce métier, et combien de temps ? »",
      "5. Question à poser : « Quand une voiture arrive en panne, par quoi commencez-vous ? »",
      "6. Question à poser : « Qu’est-ce qui a changé dans le métier depuis que vous l’avez commencé ? »",
      "7. Relire ce qu’on avait imaginé au début, et écrire en face comment on cherche vraiment une panne.",
    ],
    [
      "",
      "Ce sont les **témoins d’usure**. Quand la surface du pneu arrive à leur hauteur, il ne reste plus que 1,6 mm de profondeur de rainure, le minimum autorisé en France : il faut changer le pneu. Les rainures servent à chasser l’eau sous la roue quand la route est mouillée.",
      "Cette étiquette donne la pression à laquelle gonfler les pneus, qui change selon la charge de la voiture. Un pneu pas assez gonflé s’use plus vite et tient moins bien la route.",
      "La jauge se tire, s’essuie, se remet et se ressort : l’huile doit arriver entre deux repères. C’est l’une des vérifications courantes qu’on fait sur une voiture — et elle se fait moteur arrêté, voiture garée à plat. Le liquide de refroidissement ne s’ouvre jamais moteur chaud : il est sous pression et peut brûler.",
      "En France, on apprend le métier le plus souvent par un **CAP maintenance des véhicules**, en deux ans après la troisième, ou par un bac professionnel du même nom, en trois ans ; beaucoup le préparent en apprentissage, entre un centre de formation et un garage. On peut continuer par un BTS, en deux ans. Réparer une voiture électrique ou hybride demande une formation en plus, à cause de la haute tension.",
      "Un mécanicien commence par écouter ce que raconte le conducteur, puis il regarde, écoute le moteur, essaie la voiture si c’est possible. Les voitures récentes ont une prise où il branche un appareil de diagnostic, qui lit les messages d’erreur enregistrés par les ordinateurs de bord. L’appareil indique où chercher ; c’est le mécanicien qui trouve.",
      "",
      "La réponse vérifiée : on trouve une panne en questionnant, en observant et en éliminant les causes une à une, avec l’aide d’un appareil de diagnostic sur les voitures récentes. C’est une enquête plus qu’une devinette.",
    ],
    "On regarde s’il passe de « il devine » à « il cherche » dans sa réponse de la fin : c’est toute l’idée qu’on veut qu’il emporte, et elle vaut bien au-delà des voitures. Si le capot ouvert l’impressionne ou l’ennuie, on le referme sans insister et on garde les pneus : un seul endroit bien regardé suffit à la séance.",
  ),

  f(
    "mm-metier-04",
    "Un métier",
    "Métier 4 · bibliothécaire, et tout ce qu’on ne voit pas du prêt",
    [
      "Fiche de réserve, qui prend tout son sens après la sortie à la médiathèque de janvier. La question, posée avant de commencer : **« Qu’est-ce qu’on fait dans une médiathèque, à part prêter des livres et les ranger ? »** Il fait la liste de ce qu’il imagine, et on la garde.",
      "Déroulé : à la maison, on fait sur trois livres à lui ce que fait une médiathèque quand un livre arrive — sa fiche et sa cote. Puis on va à la médiathèque poser trois questions à une personne de l’accueil, à un moment calme, ou on les lui laisse écrites si elle est occupée.",
      "Sécurité : le trajet habituel, aux passages piétons ; rentrer de jour si la nuit tombe tôt. C’est l’adulte qui aborde la personne de l’accueil, sauf si l’enfant veut le faire lui-même.",
      "Le jour où ça ne va pas : on ne sort pas. On fait seulement la fiche du livre, et on lit à voix haute les réponses du corrigé en face des questions, comme on lirait un documentaire.",
    ],
    [
      "À sortir : trois livres de sa chambre qu’il choisit, trois fiches bristol ou trois morceaux de papier, un crayon, des petites étiquettes ou du ruban adhésif de papier, le carnet.",
      "1. Pour chaque livre, remplir une fiche : le titre, l’auteur, l’éditeur, l’année, et le sujet en deux ou trois mots. Chercher sur le livre où se trouvent ces informations.",
      "2. Inventer une cote pour chaque livre — un nombre ou une lettre pour le sujet, puis les trois premières lettres du nom de l’auteur — et la coller en bas du dos.",
      "3. Question à poser à la médiathèque : « Qu’avez-vous appris pour faire ce métier ? »",
      "4. Question à poser : « Qui choisit les livres qu’on achète, et comment ? »",
      "5. Question à poser : « Que devient un livre trop abîmé, ou que personne n’emprunte plus ? »",
      "6. Au retour, reprendre la liste du début et ajouter en couleur tout ce qu’on a appris que la médiathèque fait.",
    ],
    [
      "",
      "Le titre et l’auteur sont sur la couverture ; l’éditeur, l’année et souvent d’autres informations sont au dos de la page de titre ou sur les dernières pages. C’est ce qu’une médiathèque enregistre pour chaque document qui entre : on appelle ce travail le **catalogage**.",
      "C’est ainsi que se fabrique une cote : une partie dit le sujet, l’autre permet de départager les livres du même sujet. Ce qu’il vient de faire pour trois livres, une médiathèque le fait pour chaque document, avant de le couvrir et de l’étiqueter.",
      "Il existe plusieurs chemins, et la durée des études dépend du poste : souvent des études après le bac dans les métiers du livre ou de l’information, parfois pendant plusieurs années. Une médiathèque qui dépend d’une commune emploie en général des agents de la fonction publique, recrutés le plus souvent par des concours de plusieurs niveaux, dont certains ne demandent pas de longues études. Dans la langue courante, on dit « bibliothécaire » pour toute personne qui y travaille ; dans la fonction publique, c’est aussi le nom d’un grade précis.",
      "Les bibliothécaires choisissent eux-mêmes les livres, les disques et les films à acheter, avec un budget, en lisant des critiques et en écoutant ce que demandent les lecteurs. On peut souvent proposer l’achat d’un livre.",
      "Retirer des étagères les documents abîmés, dépassés ou qui ne sortent plus s’appelle le **désherbage** — le vrai mot du métier. Selon leur état, ils sont donnés, vendus à petit prix ou jetés, et leur place sert aux nouveaux.",
      "La réponse vérifiée, en plus du prêt et du rangement : choisir et acheter les documents, les enregistrer et leur donner une cote, les couvrir, conseiller les lecteurs, organiser des lectures et des ateliers, et retirer ce qui ne sert plus. Le reste de la liste est ce que la personne interrogée a raconté de sa médiathèque à elle.",
    ],
    "On regarde s’il reconnaît, dans les réponses de la médiathèque, le travail qu’il vient de faire sur ses trois livres : c’est ce qui fait passer le métier de « quelqu’un qui prête des livres » à « quelqu’un qui organise tout ça ». Et s’il veut, en rentrant, désherber lui-même une étagère de sa chambre, on le laisse faire à son rythme — on ne jette rien le jour même.",
  ),
];
