/**
 * Le mercredi, avec les mains et les oreilles — construire, dessiner, écouter,
 * reprendre. Quatre rituels, dix séances de quarante-cinq minutes, et quatre
 * fiches de réserve.
 *
 * Le mercredi est le jour du parrain, et **ce n'est pas un cours**. Une fiche
 * donne le déroulé, le matériel de la maison à sortir, et la question qu'on
 * pose **avant** de commencer — celle dont on cherche la réponse ensuite.
 *
 * Ce qu'une fiche donne, et pourquoi : voir `lib/fiches/types.ts`. En deux
 * mots — le matériel exact, le corrigé quand il y en a un, et ce qu'on
 * regarde. Un adulte qui l'ouvre ne doit plus rien avoir à chercher.
 *
 * **Réservé aux adultes** : ces fiches portent les corrigés.
 *
 * ## Ce qui tient ces quatre séries
 *
 * **Le résultat n'est jamais l'enjeu.** Un pont qui s'écrase dit où il a
 * cédé, un dessin qui ne ressemble pas dit qu'on a regardé autre chose, une
 * pulsation qu'on ne trouve pas existe parfois à peine. Chaque fiche le dit à
 * l'adulte, parce que c'est lui qui donne le ton.
 *
 * **La sécurité est écrite là où elle sert.** Pas d'appareil sur le secteur,
 * pas de batterie au lithium, une pile plate de 4,5 V pour le circuit ; les
 * lames, les pointes et la chaleur restent dans les mains de l'adulte.
 *
 * **Les œuvres écoutées** sont instrumentales et leurs compositeurs sont morts
 * depuis plus de soixante-dix ans. Aucune parole, aucune adresse : elles
 * s'écoutent en médiathèque ou sur les plateformes habituelles.
 *
 * Rien de tout ceci n'a été relu par un enseignant. Ça doit l'être.
 */

import { f, type Fiche } from "./types";

export const mercrediFaire: Fiche[] = [
  /* ================================================================== */
  /* CONSTRUIRE QUELQUE CHOSE — quatre séances, du 30 septembre au       */
  /* 23 juin, et une de réserve. Le croquis d'abord, toujours.           */
  /* ================================================================== */

  f(
    "mf-construire-01",
    "Construire quelque chose",
    "Construire 1 · le pont en papier qui porte un livre",
    [
      "La question, avant de toucher au papier : « Une feuille posée entre deux piles de livres peut-elle porter un livre ? » Chacun répond, l’adulte aussi, et on n’y revient qu’à la fin.",
      "Avant la séance, l’adulte plie seul un pont en accordéon et le charge une fois, pièces puis livre de poche : il sait ce que son papier porte, et comment les plis s’ouvrent, avant de le découvrir devant lui.",
      "Le croquis d’abord, cinq minutes : il dessine deux ou trois idées de pont sur une feuille de brouillon, sans rien plier. On construit ensuite celle qu’il choisit, puis les autres s’il reste du temps.",
      "Un pont qui s’écrase n’est pas un pont raté : c’est l’essai qui montre où ça cède. On regarde l’endroit, on le dit, et on refait avec une feuille neuve. L’adulte essaie ses propres idées à côté, et les siennes s’écrasent aussi, souvent.",
      "S’il ne porte pas le livre, le meilleur pont du jour porte une gomme ou un crayon, et c’est un pont qui porte. Puis on cherche ensemble pourquoi le livre était de trop — où ça a plié, ce qu’on changerait. C’est le pliage qu’on interroge, jamais l’enfant.",
      "Le jour où ça coince : on fait seulement la feuille à plat puis la feuille pliée en accordéon, et on s’arrête là. Les deux essais suffisent à répondre à la question.",
    ],
    [
      "À sortir : 10 feuilles de papier d’imprimante A4, du ruban adhésif, une règle, un crayon, une feuille de brouillon pour le croquis.",
      "À sortir : deux piles de livres de même hauteur, posées à 20 cm l’une de l’autre sur une table.",
      "À sortir : un livre de poche pour la charge finale, une gomme, et une poignée de pièces de monnaie pour charger peu à peu.",
      "1. Le croquis : deux ou trois idées de pont, dessinées vues de côté.",
      "2. La feuille posée à plat entre les deux piles. On pose une pièce au milieu, puis une autre.",
      "3. Une feuille pliée en accordéon, les plis allant d’une pile à l’autre, dans le sens de la longueur. On charge pièce par pièce.",
      "4. Une feuille roulée en tubes serrés, ou dont on relève les deux bords en gouttière. On charge de la même façon.",
      "5. Le meilleur pont du jour reçoit le livre de poche. S’il plie, on cherche ce qu’on peut ajouter : une feuille à plat posée sur l’accordéon pour répartir le poids, un deuxième accordéon à côté.",
      "6. Retour à la question du début : qu’est-ce qui a changé entre la feuille à plat et celle qui porte ?",
    ],
    [
      "",
      "",
      "",
      "",
      "La feuille plie presque tout de suite. Le papier est si mince qu’il n’a aucune raideur quand on appuie au milieu.",
      "L’accordéon porte beaucoup plus avec la même feuille : la matière est répartie en hauteur. Plus une poutre est haute, plus elle résiste à la flexion — c’est le principe du carton ondulé. Si les plis vont dans l’autre sens, en travers, le pont ne porte presque rien : il plie comme la feuille à plat.",
      "Un tube ou une gouttière porte aussi bien mieux que la feuille à plat, pour la même raison : la matière n’est plus couchée, elle se tient debout. Le résultat exact dépend du papier et du pliage.",
      "Un accordéon chargé en un seul point a tendance à s’ouvrir et à s’aplatir. Une feuille posée par-dessus répartit la charge et empêche les plis de s’écarter ; du ruban adhésif aux deux bouts aussi.",
      "Ce n’est pas la quantité de papier qui fait le pont, c’est sa forme. La même feuille, pliée autrement, ne porte pas du tout la même chose.",
    ],
    "Ce qu’on regarde : ce qu’il fait au moment où un pont s’effondre. S’il regarde où ça a cédé et propose autre chose, la séance a fait son travail, livre porté ou non. S’il se ferme, on reprend la main sur un essai à deux, et la fois suivante on commence par faire écraser volontairement un pont par l’adulte.",
  ),

  f(
    "mf-construire-02",
    "Construire quelque chose",
    "Construire 2 · le moulin qui soulève un trombone",
    [
      "La question, avant de commencer : « Le vent peut-il soulever un trombone ? » Et une deuxième qu’on garde pour la fin : « Comment un moulin transforme-t-il le vent en travail ? »",
      "Le croquis d’abord : on regarde ensemble la liste du matériel, et il dessine comment il pense assembler le gobelet, la pique, le moulinet et le fil. Le croquis peut se tromper ; on le corrige au crayon après avoir construit.",
      "Avant la séance, l’adulte construit le moulin une fois, seul, jusqu’au trombone qui monte : il sait déjà où ça frotte et où ça glisse, et il perce, coupe et règle sans chercher devant lui.",
      "Sécurité : la pique à brochettes est pointue. C’est l’adulte qui perce le gobelet et le centre du moulinet, puis qui coupe la pointe avec des ciseaux solides — ou la noie dans une grosse boule de pâte à fixer — avant qu’on commence à souffler près du visage.",
      "Le moulin se garde : il resservira le mercredi du projet à suivre. On le range entier, dans une boîte, avec le croquis.",
      "Si le souffle ne monte pas le trombone : on allège — un trombone plus petit, un fil plus court —, ou on tourne la pique à la main pour voir le treuil marcher. C’est le montage qui se règle, pas l’enfant qui a raté.",
      "Le jour où ça coince : on s’arrête au moulinet qui tourne quand on souffle. Le treuil attendra, et c’est déjà un objet qui marche.",
    ],
    [
      "À sortir : un gobelet en carton ou en plastique, une paille, une pique à brochettes en bois d’au moins 20 cm, un carré de papier un peu épais de 15 cm de côté, du ruban adhésif, de la pâte à fixer, 40 cm de fil à coudre, trois trombones et un plus petit si on en a, des ciseaux, un crayon.",
      "1. Le croquis de l’assemblage.",
      "2. Le moulinet : tracer les deux diagonales du carré, couper chacune depuis le coin jusqu’à 2 cm du centre. On obtient huit pointes : en replier une sur deux vers le centre, quatre en tout, sans marquer le pli.",
      "3. Le support : gobelet retourné. L’adulte perce deux trous face à face près du fond, et on y passe la paille, qui dépasse à peine des deux côtés. On la fixe au ruban adhésif.",
      "4. L’axe : la pique passe dans la paille et doit y tourner librement. Elle ne dépasse que de 2 cm d’un côté ; tout le reste est de l’autre côté, qui portera le fil et le moulinet. L’adulte enfile le moulinet tout au bout de ce côté long, par son centre, en traversant les quatre pointes repliées, puis coupe la pointe de la pique. Une boule de pâte à fixer de chaque côté du moulinet le rend solidaire de la pique ; une petite boule de chaque côté du gobelet, à quelques millimètres de lui, empêche la pique de glisser.",
      "5. Le treuil : un bout du fil scotché sur la pique, du côté long, à 5 cm du gobelet ; le trombone accroché à l’autre bout. On pose le gobelet tout au bord de la table, la pique perpendiculaire au bord : le côté long dépasse dans le vide, le moulinet tourne sans toucher la table, et le trombone pend. Deux morceaux de ruban adhésif collent le bord du gobelet à la table, pour qu’il ne bascule pas.",
      "6. On souffle sur le moulinet, de face ; un jour de vent, on peut aussi l’installer au bord d’une table dehors. Le trombone monte-t-il ?",
      "7. Deux trombones, puis trois. Jusqu’où ça monte encore ?",
      "8. Retour à la deuxième question : qu’est-ce qui, dans ce moulin, fait le travail ?",
    ],
    [
      "",
      "",
      "Les pointes repliées forment des pales inclinées. Si on écrase les plis à plat, le moulinet tourne beaucoup moins bien.",
      "La paille sert de palier : elle est fixe, et c’est la pique qui tourne dedans. Si la pique frotte, c’est souvent que des trous trop serrés écrasent la paille : on les agrandit un peu.",
      "Si le moulinet tourne sans que la pique tourne, il glisse autour : on rajoute de la pâte à fixer, ou un tour de ruban adhésif.",
      "Le moulinet et le fil sont du même côté, dans le vide, parce que les pointes d’un moulinet taillé dans un carré de 15 cm tournent à plus de 10 cm de l’axe, et l’axe n’est qu’à la hauteur du gobelet, moins haut que ça : au-dessus de la table, elles la heurteraient à chaque tour. Le fil s’enroule quel que soit le sens dans lequel tourne la pique. S’il glisse sans s’enrouler, c’est le ruban adhésif qui ne tient pas : on le refait.",
      "Le vent pousse sur les pales ; parce qu’elles sont inclinées, une partie de cette poussée fait tourner la roue. La pique tourne avec elle, le fil s’enroule autour, et c’est le fil qui tire le trombone vers le haut.",
      "Plus la charge est lourde, plus il faut de vent. Le jour où ça ne monte plus, ce n’est pas le moulin qui est raté : c’est la limite de ce qu’il peut porter, et c’est intéressant de la trouver.",
      "Les vrais moulins font la même chose : les ailes font tourner un axe, et l’axe entraîne des meules qui écrasent le grain, ou une pompe qui monte l’eau. Les éoliennes d’aujourd’hui font tourner un alternateur, qui produit de l’électricité.",
    ],
    "Ce qu’on regarde : s’il revient à son croquis quand quelque chose ne marche pas, ou s’il bricole au hasard. Et ce qu’il fait quand le trombone ne monte pas — chercher la pièce qui frotte ou qui glisse est exactement le travail de la séance, bien plus que la réussite du premier coup.",
  ),

  f(
    "mf-construire-03",
    "Construire quelque chose",
    "Construire 3 · la lampe et son interrupteur",
    [
      "La question, avant de toucher à la pile : « Qu’est-ce qu’il faut pour qu’une ampoule s’allume ? » Il répond en dessinant, c’est le croquis de départ.",
      "Sécurité : une pile plate de 4,5 V et rien d’autre. Jamais une prise, jamais le secteur, jamais une batterie de téléphone ou d’appareil. Aucun fil, aucune bande d’aluminium, aucun trombone ne relie directement les deux lamelles de la pile : c’est un court-circuit, le métal chauffe et la pile se vide — on débranche tout de suite. Si des fils sont à dénuder, c’est l’adulte qui le fait.",
      "Le déroulé : allumer l’ampoule, puis couper le chemin avec un interrupteur fait maison, puis essayer des objets à la place du trombone.",
      "Quand rien ne s’allume, c’est presque toujours un contact, et on cherche à deux, dans l’ordre : l’ampoule bien vissée, le métal nu des fils qui touche vraiment le métal, pas de ruban adhésif pris entre deux métaux, puis la pile, puis l’ampoule.",
      "Le jour où ça coince : on s’arrête à l’ampoule allumée, sans interrupteur. C’est déjà un circuit entier.",
    ],
    [
      "À acheter à l’avance, parce que ce n’est pas dans toutes les maisons : une pile plate de 4,5 V ; une ampoule de lampe de poche prévue pour 3,5 V à 4,5 V, à culot vissé ; et si possible une douille pour cette ampoule, ou trois cordons à pinces crocodiles. Tout se trouve au rayon piles d’un supermarché ou en magasin de bricolage. La veille, l’adulte essaie l’ampoule sur la pile, et une attache parisienne à la place d’un des fils : les attaches peintes ou vernies ne conduisent pas. Une ampoule grillée ou une attache peinte découverte en séance ferait croire à un montage raté.",
      "À sortir : une pile plate de 4,5 V ; une ampoule de lampe de poche prévue pour 3,5 V à 4,5 V, avec sa douille si on en a une ; trois fils électriques d’environ 20 cm, dénudés sur 2 cm à chaque bout, ou trois cordons à pinces crocodiles. À défaut de fils : trois bandes de papier aluminium de 30 cm, pliées en quatre dans la longueur.",
      "À sortir : un morceau de carton (un côté de boîte de céréales), deux attaches parisiennes en métal, un trombone en métal sans gaine plastique, du ruban adhésif, un crayon.",
      "À sortir, pour la fin : une cuillère en métal, une clé, une grosse pièce de monnaie, une gomme, un bouchon en plastique, un morceau de bois, un élastique.",
      "Une DEL peut remplacer l’ampoule, à une condition : voir en face.",
      "1. Le croquis : la pile, l’ampoule, et le chemin qu’il imagine entre les deux.",
      "2. Regarder la pile : elle a deux lamelles, une courte et une longue.",
      "3. Allumer l’ampoule : un fil de la lamelle courte jusqu’au culot de l’ampoule, la partie vissée ; un autre fil de la lamelle longue jusqu’au plot, le petit bout de métal tout en dessous. Avec une douille, un fil sur chacune de ses deux bornes.",
      "4. Détacher un seul des deux fils. Que se passe-t-il ? On le rattache.",
      "5. L’interrupteur : les deux attaches parisiennes plantées dans le carton à 2 cm l’une de l’autre, le trombone passé sous la tête de l’une, assez long pour toucher l’autre en pivotant. On remplace le fil de la lamelle longue par deux fils : lamelle longue vers la première attache, seconde attache vers le plot de l’ampoule. Chaque bout nu s’enroule sous la tête d’une attache avant qu’on écarte ses pattes.",
      "6. Faire pivoter le trombone : il touche la seconde attache, puis il ne la touche plus.",
      "7. Trombone écarté, on pose chaque objet de la fin à cheval sur les deux attaches, en touchant bien les deux têtes à la fois. Deux tas : ceux qui allument, ceux qui n’allument pas.",
      "8. Retour à la question du début, et au croquis : qu’est-ce qu’il faut, finalement ?",
    ],
    [
      "",
      "Le papier aluminium de cuisine conduit très bien. Le ruban adhésif ne conduit pas : il sert à tenir, jamais à être coincé entre deux métaux.",
      "Certaines attaches parisiennes sont peintes ou vernies, et la peinture ne conduit pas. Si le courant ne passe pas par l’interrupteur, on gratte la tête ou on en prend d’autres.",
      "",
      "Une DEL ne s’allume que dans un sens : sa patte la plus longue va du côté de la lamelle courte, la borne +. Branchée seule sur la pile, elle peut griller en un instant : il lui faut une résistance d’environ 220 ohms, montée sur l’un des deux fils. Sans résistance, on prend l’ampoule.",
      "Il est courant de dessiner un seul fil entre la pile et l’ampoule, et c’est une bonne idée à essayer. Ce qu’il faut, c’est une boucle : le courant sort par une lamelle, traverse l’ampoule par ses deux contacts, et revient par l’autre lamelle. Avec un seul fil, l’ampoule ne s’allume que si son autre contact touche directement la seconde lamelle — le deuxième chemin est toujours là, simplement très court.",
      "Sur une pile plate, la lamelle courte est la borne +, la longue est la borne −. Pour une ampoule, le sens ne compte pas ; pour une DEL, si.",
      "L’ampoule a deux contacts, le culot et le plot. Le courant entre par l’un, traverse un filament très fin qui chauffe au point de briller, et ressort par l’autre. Les deux fils ne doivent pas se toucher près de l’ampoule : le courant passerait de l’un à l’autre sans la traverser, et ce serait un court-circuit. Une ampoule allumée un moment chauffe : on la tient par la douille ou par les fils. Si le filament est cassé, on le voit à travers le verre.",
      "Tout s’éteint : un seul endroit ouvert suffit à couper la boucle entière.",
      "",
      "L’interrupteur n’ajoute ni n’enlève rien au courant : il ferme la boucle ou il l’ouvre. C’est ce que fait aussi l’interrupteur d’une pièce, en plus solide et enfermé dans le mur, parce que le courant de la maison, lui, est dangereux : on en parle, on n’y touche pas.",
      "Allument : la cuillère, la clé, la pièce — les métaux conduisent. N’allument pas : la gomme, le bouchon, le bois sec, l’élastique — ce sont des isolants. Une pièce ou une clé très ternie peut mal toucher : on essaie une autre face avant de la classer.",
      "Une pile, une ampoule, et une boucle fermée de matière qui conduit, d’une borne de la pile à l’autre en passant par l’ampoule.",
    ],
    "Ce qu’on regarde : quand l’ampoule ne s’allume pas, s’il cherche où la boucle est ouverte ou s’il conclut qu’il ne sait pas faire. Le chemin à suivre du doigt, d’une lamelle à l’autre, est l’outil à lui laisser pour la suite. Et s’il range un objet dans le mauvais tas, on refait l’essai ensemble plutôt que de le corriger : c’est l’ampoule qui répond.",
  ),

  f(
    "mf-construire-04",
    "Construire quelque chose",
    "Construire 4 · le bateau à élastique",
    [
      "La question, avant de commencer : « Dans quel sens faut-il remonter la pale pour que le bateau avance ? » Chacun fait son pari, l’adulte aussi, on l’écrit, et c’est l’eau qui répondra. Un pari perdu n’est pas une erreur : il y a une chance sur deux.",
      "Le croquis d’abord : le bateau vu de côté et vu de dessus, avec les crayons, l’élastique et la pale.",
      "Avant la séance, l’adulte fait flotter une fois, seul, un bateau d’essai : il vérifie que les crayons sont assez bas pour que la pale plonge dans l’eau sans heurter la coque, et dans quel sens la remonter. Il garde ce sens pour lui, puisque c’est l’eau qui répondra en séance ; son bateau d’essai peut servir de modèle, ou de bateau tout prêt le jour où ça coince.",
      "Sécurité : c’est l’adulte qui découpe la brique, avec des ciseaux solides. Un élastique remonté se tient loin du visage : s’il casse ou s’échappe, il claque. On essuie l’eau renversée au fur et à mesure — un carrelage mouillé fait glisser — et l’adulte reste près de la bassine ou de la baignoire.",
      "Le jour où ça coince : l’adulte a découpé la coque et la pale à l’avance, il ne reste qu’à assembler et à essayer. Un bateau qui avance de trente centimètres a marché.",
    ],
    [
      "À sortir : une brique de lait ou de jus d’un litre, vide et rincée — et une deuxième pour le bateau d’essai de l’adulte —, deux crayons de papier, quatre élastiques dont un assez long pour être tendu entre les bouts des crayons, du ruban adhésif large, des ciseaux solides, un crayon et du papier pour le croquis.",
      "À sortir : une baignoire, une grande bassine ou une pataugeoire avec une dizaine de centimètres d’eau, et un torchon.",
      "1. Le croquis.",
      "2. La coque : la brique couchée à plat sur une de ses faces larges, l’adulte découpe la face large du dessus, à un demi-centimètre des arêtes. On garde le bac ainsi obtenu, ouvert vers le haut ; la face découpée servira à la pale.",
      "3. Les bras : un crayon de chaque côté de la coque, collé contre le flanc tout près du fond — pas en haut du bord — et tenu par du ruban adhésif et deux élastiques. Ils dépassent de 6 à 8 cm à l’arrière, le bout non taillé vers l’arrière.",
      "4. La pale : un rectangle d’environ 5 cm de large, dans le sens de l’élastique, sur 6 cm de haut, découpé dans la face large retirée de la brique. Elle doit tenir entre les deux crayons sans les toucher.",
      "5. L’élastique long tendu entre les bouts des deux crayons, et la pale glissée au milieu, entre ses deux brins.",
      "6. Le pari : chacun écrit dans quel sens il faut tourner la pale.",
      "7. Remonter la pale d’une quinzaine de tours, poser le bateau sur l’eau en la tenant, et lâcher.",
      "8. Il avance, il recule ou il tourne en rond : on change une seule chose à la fois — le sens, le nombre de tours, la taille de la pale — et on réessaie.",
    ],
    [
      "Une brique de lait flotte bien et ne se ramollit pas : le carton est pris entre des films de plastique étanches. Seuls les bords coupés boivent un peu l’eau.",
      "",
      "",
      "Coupée sur sa face large, une brique d’un litre donne une coque basse et large, qui penche beaucoup moins qu’une demi-brique étroite et haute. Un bateau qui chavire à chaque essai empêcherait de voir ce que fait la pale.",
      "La coque vide est si légère qu’elle s’enfonce à peine dans l’eau. Des crayons fixés en haut des bords mettraient l’élastique trop haut, et la pale brasserait l’air sans toucher l’eau : fixés près du fond, ils laissent plonger la moitié basse de la pale. Ils doivent aussi dépasser assez pour qu’elle tourne sans heurter l’arrière de la coque ; si elle frotte, on raccourcit la pale ou on recule les crayons.",
      "",
      "",
      "",
      "Quand on lâche, le bas de la pale, dans l’eau, doit partir vers l’arrière : la pale pousse l’eau vers l’arrière, et l’eau pousse le bateau vers l’avant. Il faut donc remonter la pale en faisant passer son haut vers l’arrière, en s’éloignant du bateau. S’il recule, on a tourné dans l’autre sens, et c’est l’essai qui l’a dit.",
      "L’élastique tordu garde l’énergie qu’on y a mise en tournant, et la rend en se détordant. Plus de tours, plus d’énergie — jusqu’à ce que l’élastique fasse des nœuds ou casse. Un bateau qui tourne en rond peut avoir une pale décentrée ou une coque qui penche.",
    ],
    "Ce qu’on regarde : ce que le pari perdu lui fait. S’il rit en voyant le bateau reculer et retourne la pale, la question a été posée au bon endroit. S’il se fige, l’adulte montre son propre pari, juste ou faux, et redit simplement que ce n’est pas eux qui décident du sens, c’est l’eau. On regarde aussi s’il change une seule chose à la fois ou tout d’un coup.",
  ),

  f(
    "mf-construire-05",
    "Construire quelque chose",
    "Construire 5 · le téléphone à ficelle",
    [
      "Fiche de réserve, pour une année qui déborde ou une séance qui n’a pas pris. La question, avant de commencer : « Est-ce qu’un son peut voyager dans une ficelle ? »",
      "Le croquis d’abord : les deux pots, la ficelle, et comment elle tient au fond.",
      "Sécurité : c’est l’adulte qui perce les pots, avec la pointe d’un compas ou un clou. La ficelle tendue ne traverse jamais un passage où quelqu’un pourrait courir. Et on parle dans le pot, on ne crie pas : l’autre l’a contre l’oreille.",
      "Le jour où ça coince : on fait seulement parler et écouter, chacun son tour, sans les essais qui suivent. C’est déjà un téléphone qui marche.",
    ],
    [
      "À sortir : deux pots de yaourt vides en plastique ou deux gobelets en carton, 6 à 10 m de ficelle fine de cuisine ou de fil de pêche, deux trombones, un compas ou un clou, des ciseaux, un crayon et du papier.",
      "1. Le croquis.",
      "2. L’adulte perce un petit trou au centre du fond de chaque pot. On passe la ficelle de l’extérieur vers l’intérieur et on la noue autour d’un trombone, à l’intérieur du pot.",
      "3. Chacun s’éloigne jusqu’à ce que la ficelle soit bien tendue, sans qu’elle touche rien. L’un parle doucement dans son pot, l’autre écoute, le pot contre l’oreille. Puis on échange.",
      "4. On se rapproche d’un pas, la ficelle devient molle. Et maintenant ?",
      "5. Ficelle tendue à nouveau : pendant que l’un parle, l’autre pince la ficelle entre deux doigts.",
      "6. Chuchoter sans les pots, à la même distance. Entend-on autant ?",
      "7. Retour à la question : par où le son est-il passé ?",
    ],
    [
      "",
      "",
      "Le trombone empêche le nœud de repasser par le trou quand on tire, et répartit la traction sur le fond.",
      "La voix fait vibrer l’air, qui fait vibrer le fond du pot. Le fond tire et relâche la ficelle très vite ; la vibration court le long de la ficelle jusqu’à l’autre fond, qui fait vibrer l’air contre l’oreille.",
      "On n’entend presque plus rien : une ficelle molle ne transmet pas la vibration, elle la perd.",
      "Le son s’arrête ou baisse beaucoup : les doigts absorbent la vibration. C’est pour la même raison que la ficelle ne doit toucher ni un mur ni un meuble.",
      "Souvent, un chuchotement s’entend mieux par la ficelle que par l’air : dans l’air, le son s’étale dans toutes les directions, alors que la ficelle le conduit d’un pot à l’autre. Mais cela dépend de la distance et des pots ; si ce n’est pas le cas chez vous, c’est un vrai résultat.",
      "Le son n’est pas un objet qui se déplace, c’est une vibration qui se transmet : de l’air au pot, du pot à la ficelle, de la ficelle à l’autre pot, puis à l’air et à l’oreille.",
    ],
    "Ce qu’on regarde : s’il fait les essais 4 et 5 de lui-même, avant qu’on les propose. Chercher ce qui empêche un objet de marcher est la moitié du travail de construire. Et s’il veut recommencer avec d’autres pots ou une ficelle plus longue, c’est la séance suivante qui vient de se proposer toute seule.",
  ),

  /* ================================================================== */
  /* DESSIN D'OBSERVATION — trois séances, du 2 décembre au 2 juin, et   */
  /* une de réserve. L'enjeu est le regard, jamais le dessin.            */
  /* ================================================================== */

  f(
    "mf-dessin-01",
    "Dessin d’observation",
    "Dessin 1 · la chaussure qu’on croit connaître",
    [
      "La question, avant de regarder : « Combien de trous pour le lacet sur ta chaussure ? » (ou combien de bandes à scratch). Chacun répond sans regarder, l’adulte aussi, puis on compte sur la vraie.",
      "Ce qu’on commente : la chaussure — « regarde, le lacet passe dessous, ici ». Ce qu’on ne commente pas : le dessin. Ni « c’est beau », ni « ça ne ressemble pas » : même un compliment met un enjeu sur le résultat, et c’est le regard qu’on travaille. L’adulte dessine en même temps, la même chaussure, de son côté.",
      "Vingt minutes sur le même objet : deux dessins à l’aveugle de trois minutes, puis quatorze minutes en regardant. La gomme reste rangée : un trait de trop reste, on trace l’autre à côté. S’il en a vraiment besoin, on la lui rend — ce n’est pas un combat.",
      "Le jour où ça coince : on ne fait que les deux dessins à l’aveugle, qui ne peuvent pas ressembler, et on s’arrête là.",
    ],
    [
      "À sortir : une de ses chaussures, posée de profil sur la table ; trois feuilles de papier ordinaire par personne ; deux crayons de papier ; un minuteur ou une montre. La gomme reste dans le tiroir.",
      "1. La question du début, puis on compte sur la vraie chaussure.",
      "2. Dessin à l’aveugle, 3 minutes : les yeux suivent lentement le bord de la chaussure, et le crayon suit en même temps sur la feuille, sans qu’on la regarde. On ne lève pas le crayon.",
      "3. Deuxième dessin à l’aveugle, 3 minutes, en partant d’un autre endroit : la semelle, ou le lacet.",
      "4. Le dessin en regardant, 14 minutes : les yeux sur la chaussure la plupart du temps, un coup d’œil sur la feuille pour placer le crayon, puis retour à la chaussure.",
      "5. Les deux dernières minutes : chacun dit une chose qu’il a vue sur la chaussure et qu’il n’avait jamais remarquée. Sur la chaussure, pas sur le dessin.",
      "6. On date les dessins et on les range dans une pochette, sans les afficher. S’il veut les montrer à quelqu’un, c’est lui qui le propose.",
    ],
    [
      "",
      "Il est très courant de ne pas le savoir, adulte compris : on voit ses chaussures tous les jours sans les regarder. C’est tout le sujet de la séance.",
      "Le dessin à l’aveugle ne ressemble jamais, chez personne, et c’est son principe : il ne sert pas à faire un dessin, il apprend à l’œil à suivre lentement un bord, et à la main à suivre l’œil. On peut en rire ensemble.",
      "",
      "Ce qui fait un dessin d’observation, c’est le temps passé les yeux sur l’objet. Un dessin qui ne ressemble pas, mais pendant lequel il a beaucoup regardé, est exactement ce qu’on cherche.",
      "",
      "",
    ],
    "Ce qu’on regarde : où sont ses yeux, pas ce qu’il y a sur la feuille. S’il regarde surtout la feuille, il dessine de mémoire l’idée d’une chaussure ; s’il lève les yeux souvent, il observe. On regarde aussi ce qu’il fait d’un trait qui part de travers : s’il continue à côté, la séance a tenu ; s’il froisse la feuille, la prochaine fois on recommence par cinq minutes à l’aveugle.",
  ),

  f(
    "mf-dessin-02",
    "Dessin d’observation",
    "Dessin 2 · l’œuf et la lampe",
    [
      "La question, avant de dessiner : « Où est la partie la plus sombre de l’œuf ? » Chacun la montre du doigt, l’adulte aussi, puis on regarde longtemps avant de répondre pour de bon.",
      "Aujourd’hui on ne regarde pas le contour, on regarde la lumière : où c’est clair, où c’est sombre, où c’est entre les deux. L’adulte commente l’œuf et la lumière, jamais le dessin — ni l’ovale qui n’est pas régulier, ni l’ombre trop foncée.",
      "Sécurité : la lampe reste à sa place, c’est l’adulte qui l’oriente. Une ampoule ancienne ou halogène chauffe beaucoup : on ne la touche pas.",
      "Le jour où ça coince : pas de dessin de l’œuf. On fait tourner la lampe autour de lui, on regarde l’ombre bouger, et on dessine seulement la forme de l’ombre sur la feuille.",
    ],
    [
      "À sortir : un œuf, blanc de préférence, couché sur une feuille blanche et calé par une petite boule de pâte à fixer cachée dessous ; une lampe de bureau orientable ; deux crayons de papier, un HB, le crayon ordinaire, et un plus tendre et plus noir (2B) si on en a ; deux feuilles ; un minuteur.",
      "À préparer : rideaux ou volets à moitié fermés, la lampe comme seule lumière forte, posée sur le côté de l’œuf et un peu au-dessus.",
      "1. La question : chacun montre du doigt la partie la plus sombre.",
      "2. Deux minutes à regarder, sans crayon : où est la partie la plus claire ? l’ombre sur l’œuf ? l’ombre sur la feuille ?",
      "3. Un ovale très léger, sans appuyer.",
      "4. Dessiner les ombres comme des formes : d’abord l’ombre sur la feuille, puis la zone sombre de l’œuf, en appuyant plus ou moins. Le blanc du papier sert de lumière : on n’y touche pas.",
      "5. Regarder le bas de l’œuf, du côté de l’ombre, tout près de la feuille : est-il aussi sombre que le reste de l’ombre ?",
      "6. L’adulte déplace la lampe de l’autre côté. Sans dessiner : qu’est-ce qui a bougé ?",
      "7. On date le dessin et on le range avec celui de la chaussure, sans les comparer.",
    ],
    [
      "",
      "",
      "La partie la plus sombre de l’œuf n’est pas tout au bord : c’est une bande un peu avant le bord, du côté opposé à la lampe. Plus sombre encore, l’ombre sur la feuille, juste là où l’œuf la touche.",
      "Les dessinateurs distinguent l’ombre propre, sur l’objet lui-même, et l’ombre portée, que l’objet projette sur la feuille. L’ombre portée part de l’endroit où l’œuf touche la feuille et s’étire du côté opposé à la lampe.",
      "",
      "",
      "En général non : la feuille blanche renvoie un peu de lumière sous l’œuf et éclaircit le bas de l’ombre. C’est le reflet, et avec le passage progressif du clair au sombre, c’est ce qui fait paraître l’œuf rond plutôt que plat.",
      "L’ombre portée tourne avec la lampe, toujours du côté opposé à elle. Plus la lampe est basse, plus l’ombre portée s’allonge.",
      "",
    ],
    "Ce qu’on regarde : s’il ose appuyer pour faire un vrai sombre, ou s’il reste partout dans le même gris léger, de peur de salir. Et s’il trouve seul le reflet de l’étape 5 — c’est le signe qu’il regarde l’œuf plutôt que l’idée qu’il s’en fait. Qu’il ne le voie pas est très courant : on le lui montre du doigt, sans plus.",
  ),

  f(
    "mf-dessin-03",
    "Dessin d’observation",
    "Dessin 3 · les vides entre les feuilles",
    [
      "La question, avant de dessiner : « Les feuilles sortent-elles de la tige deux par deux, face à face, ou une par une, chacune à sa hauteur ? » Chacun répond d’un coup d’œil, puis on vérifie du doigt le long de la tige.",
      "Le déroulé : on ne dessine pas les feuilles d’abord, on dessine les vides entre elles — les formes d’air entre deux feuilles, entre une feuille et la tige. Les feuilles apparaissent autour. Vingt minutes sur le même morceau de plante.",
      "Ce qu’on commente : la plante. Ce qu’on ne commente pas : le dessin, sa ressemblance, et encore moins un progrès depuis décembre. S’il veut ressortir ses dessins de l’année, c’est lui qui le propose.",
      "Sécurité : si on cueille une branche dehors, c’est l’adulte qui la coupe. Rien ne va à la bouche, et on se lave les mains à la fin.",
      "Le jour où ça coince : un seul vide, dessiné en grand, et on s’arrête. C’est une forme étrange, qui n’a à ressembler à rien.",
    ],
    [
      "À sortir : une plante en pot aux feuilles bien séparées, comme un basilic, ou une branche de noisetier cueillie et mise dans un verre d’eau ; une feuille blanche scotchée au mur derrière elle ; deux feuilles de papier ; un crayon de papier ; un minuteur.",
      "1. La question, puis la vérification du doigt, le long de la tige.",
      "2. Choisir un morceau de la plante, pas la plante entière : une tige et quatre ou cinq feuilles. On le cadre avec les doigts.",
      "3. Deux minutes de regard sans crayon : où sont les vides ? quelle forme ont-ils ?",
      "4. Dessiner les vides un par un, comme des formes à part : le triangle d’air entre deux feuilles, la fente entre une feuille et la tige. On peut les griser légèrement.",
      "5. Compléter les feuilles autour, en regardant la plante : le bord, les nervures, l’endroit où chaque feuille rejoint la tige.",
      "6. Les dernières minutes : chacun dit une chose qu’il a vue sur la plante et qu’il n’avait pas vue au début.",
      "7. On date le dessin et on le range avec les autres.",
    ],
    [
      "",
      "Cela dépend de la plante, et les deux existent. Le basilic a ses feuilles deux par deux, face à face : elles sont opposées. Le noisetier en a une à chaque hauteur, d’un côté puis de l’autre : elles sont alternes. Il existe aussi des plantes dont trois feuilles ou plus partent de la même hauteur.",
      "",
      "",
      "Dessiner les vides déjoue la mémoire : on sait ce qu’est une feuille, et la main dessine l’idée d’une feuille ; un vide n’a pas d’image toute faite, on est obligé de le regarder. En dessin, on appelle ces formes les espaces négatifs.",
      "Les nervures partent du point d’attache et se ramifient vers le bord ; beaucoup de feuilles ont une nervure centrale plus marquée. La petite queue qui relie la feuille à la tige s’appelle le pétiole.",
      "",
      "",
    ],
    "Ce qu’on regarde : s’il arrive à voir un vide comme une forme, ce qui demande de regarder autrement. S’il retourne sans cesse aux feuilles, on pose le doigt sur un vide et on lui demande seulement quelle forme il a — triangle, goutte, fente. Le jour où il nomme lui-même la forme d’un vide, le regard a bougé.",
  ),

  f(
    "mf-dessin-04",
    "Dessin d’observation",
    "Dessin 4 · le vélo à l’envers",
    [
      "Fiche de réserve. Avant la séance, l’adulte dessine seul un vélo de mémoire, en deux minutes, sans en regarder aucun. La question, en montrant ce dessin : « Qu’est-ce que j’ai oublié, ou mal placé ? » Ne pas savoir dessiner un vélo de mémoire est très courant ; c’est l’adulte qui le montre, l’enfant ne dessine jamais de mémoire.",
      "Le vélo est retourné, posé sur la selle et le guidon, bien stable. Vingt minutes sur une seule partie : le pédalier, la chaîne et le centre de la roue arrière.",
      "Sécurité : quand on fait tourner une pédale à la main, c’est doucement, et les doigts restent loin de la chaîne, des dents du plateau et des rayons.",
      "Ce qu’on commente : comment le vélo est fait. Ce qu’on ne commente pas : le dessin.",
      "Le jour où ça coince : on regarde le vélo ensemble en nommant les pièces, sans dessiner, puis on dessine seulement le plateau.",
    ],
    [
      "À sortir : un vélo, le sien de préférence, retourné sur la selle et le guidon ; deux feuilles de papier ; deux crayons de papier ; un minuteur.",
      "Préparé par l’adulte avant la séance : son propre dessin de vélo, fait de mémoire en deux minutes.",
      "1. L’adulte montre son dessin. On cherche sur le vrai vélo ce qui manque ou n’est pas à sa place.",
      "2. Choisir le morceau à dessiner : le pédalier, la chaîne, et le centre de la roue arrière avec sa ou ses petites roues dentées.",
      "3. Deux minutes à regarder sans dessiner, pendant que l’adulte tourne doucement une pédale : par où passe la chaîne ? qu’est-ce qui tourne en même temps ?",
      "4. Dessiner le grand plateau, puis la chaîne, puis le pignon de la roue arrière, en regardant le vélo plus que la feuille.",
      "5. Ajouter ce qui tient le tout : les tubes du cadre qui partent du pédalier.",
      "6. Les dernières minutes : chacun dit le nom ou le rôle d’une pièce qu’il ne connaissait pas.",
    ],
    [
      "",
      "",
      "Les confusions fréquentes portent sur la chaîne, qu’on relie à la roue avant ou aux deux roues, et sur le cadre, qu’on dessine parfois de telle façon que le guidon ne pourrait plus tourner. En 2006, la psychologue britannique Rebecca Lawson a publié une étude où beaucoup d’adultes se trompaient ainsi en dessinant un vélo de mémoire.",
      "",
      "La chaîne fait une boucle fermée entre le plateau, au pédalier, entre les deux roues, où les manivelles portent les pédales, et le pignon, au centre de la roue arrière. La roue avant n’est pas reliée à la chaîne : elle tourne librement et sert à diriger.",
      "En général, le plateau est plus grand que le pignon : un tour de pédale fait alors faire plus d’un tour à la roue arrière, et on le voit en tournant doucement. Sur un vélo à vitesses, avec le plus grand pignon, les deux roues dentées peuvent être de taille voisine.",
      "Le cadre classique est fait de deux triangles. Un triangle ne se déforme pas quand on appuie dessus, et c’est ce qui rend le cadre rigide.",
      "Le plateau et le pignon, les roues dentées ; le dérailleur, s’il y en a un, qui fait passer la chaîne d’une roue dentée à l’autre ; le moyeu, au centre de la roue ; les rayons ; la fourche, qui tient la roue avant.",
    ],
    "Ce qu’on regarde : s’il trouve du plaisir à repérer ce que l’adulte a oublié sans s’en moquer, et s’il accepte en retour de ne pas connaître le nom d’une pièce. Pendant le dessin, on regarde s’il suit la chaîne des yeux d’un bout à l’autre avant de la tracer : c’est ce trajet-là, compris, que le dessin garde.",
  ),

  /* ================================================================== */
  /* MUSIQUE — deux séances, le 25 novembre et le 26 mai, et une de       */
  /* réserve. Des œuvres instrumentales, écoutées en entier.             */
  /* ================================================================== */

  f(
    "mf-musique-01",
    "Musique",
    "Musique 1 · L’Hiver, de Vivaldi",
    [
      "La question, avant d’écouter : « Est-ce qu’une musique peut faire entendre le froid, sans aucun mot ? » On la pose, et on n’y répond qu’à la fin.",
      "L’œuvre : « L’Hiver », le quatrième des concertos des « Quatre Saisons » d’Antonio Vivaldi (1678-1741), publiés en 1725. Environ neuf minutes en trois mouvements, selon l’enregistrement. Elle s’écoute facilement en médiathèque ou sur les plateformes habituelles ; on la prépare avant, pour ne pas chercher devant lui, et l’adulte écoute une fois en entier, seul, l’enregistrement choisi : il sait où commence chaque mouvement dans cette version-là.",
      "La première écoute se fait en entier, sans parler et sans rien faire d’autre — assis ou allongé, les yeux ouverts ou fermés, comme il veut. Ensuite seulement, on réécoute des passages pour repérer.",
      "Il n’y a rien de juste à trouver : ce qu’il entend est ce qu’il entend. Si l’adulte ne reconnaît pas un instrument, il le dit tel quel.",
      "Le jour où ça ne va pas : on écoute seulement le deuxième mouvement, deux minutes, en tapant la pulsation du bout du doigt. C’est une séance entière.",
    ],
    [
      "À sortir : l’enregistrement, prêt à jouer, sur une enceinte ou un appareil au son correct ; un canapé ou deux chaises ; une feuille et un crayon, pour après l’écoute et pas pendant.",
      "1. L’écoute en entier, les trois mouvements d’affilée, sans rien dire.",
      "2. Juste après : qu’est-ce qui t’est resté ? Une image, un moment, un son. Tout est recevable.",
      "3. Quels instruments entend-on ? Est-ce qu’ils sont de la même famille ?",
      "4. Premier mouvement, environ trois minutes et demie : on réécoute le début. Comment la musique commence-t-elle ?",
      "5. Toujours le premier mouvement : un instrument joue seul par moments, devant les autres. Lequel ? Et qu’est-ce qui revient entre ses passages ?",
      "6. Deuxième mouvement, environ deux minutes : on tape la pulsation du bout du doigt sur la table. Qu’entend-on derrière la mélodie ?",
      "7. Troisième mouvement, environ trois minutes : d’après lui, qu’est-ce que la musique raconte ?",
      "8. Retour à la question du début : a-t-on entendu le froid ? À quel moment ?",
    ],
    [
      "",
      "",
      "",
      "Des instruments à cordes : violons, altos, violoncelles, contrebasse. Dans la plupart des enregistrements s’y ajoute un clavecin, qui accompagne — un instrument à clavier dont les cordes sont pincées —, parfois un orgue ou un luth. Ni vents ni percussions.",
      "Doucement dans la plupart des enregistrements, par des notes répétées et serrées ; les instruments s’ajoutent les uns aux autres, le son s’épaissit et grince un peu. Vivaldi a publié chacune des quatre saisons avec un poème — on ne sait pas avec certitude qui les a écrits —, et pour ce début le poème parle de grelotter dans la neige, sous un vent glacé.",
      "Le violon solo. Entre ses passages, souvent très rapides, l’orchestre entier reprend : c’est ce retour qui charpente le mouvement. Cette alternance d’un soliste et de l’orchestre est la forme même du concerto.",
      "La pulsation est lente et très régulière : c’est le mouvement où elle se sent le mieux. Derrière la mélodie du violon solo, les violons de l’orchestre ne frottent pas leurs cordes, ils les pincent du doigt — on appelle ça le pizzicato — et cela fait comme des gouttes. Le poème parle de rester au chaud près du feu pendant que la pluie tombe dehors.",
      "Le poème parle de marcher sur la glace à pas prudents, de glisser, de tomber, de repartir en courant jusqu’à ce que la glace se fende, puis des vents qui se font la guerre. On ne le lui dit qu’après qu’il a proposé sa version : s’il entend autre chose, c’est aussi une écoute.",
      "La musique ne contient pas le froid : elle y fait penser, par des notes serrées qui tremblent, des traits rapides comme des rafales, un moment calme au milieu. Ne pas l’entendre est aussi une réponse.",
    ],
    "Ce qu’on regarde : s’il tient les neuf minutes de la première écoute, et comment — immobile, en bougeant, en regardant ailleurs, tout se vaut. Puis ce qu’il dit en premier : une image, un sentiment ou un son. Aucun n’est meilleur ; c’est seulement sa porte d’entrée dans la musique, et c’est par elle qu’on passera la fois suivante.",
  ),

  f(
    "mf-musique-02",
    "Musique",
    "Musique 2 · le Boléro, de Ravel",
    [
      "La question, avant d’écouter : « Qu’est-ce qui ne change pas, du début à la fin ? » On écoute pour chercher : il y a plusieurs réponses justes.",
      "L’œuvre : « Boléro », de Maurice Ravel (1875-1937), écrit en 1928 pour un ballet. Environ un quart d’heure, selon l’enregistrement. Il s’écoute facilement en médiathèque ou sur les plateformes habituelles ; on le prépare avant, l’adulte écoute une fois en entier, seul, la version choisie, et on règle le volume sur la fin, très forte, pas sur le début, presque inaudible : sinon la fin fait sursauter.",
      "Une écoute en entier, sans rien faire d’autre qu’écouter. Un quart d’heure, c’est long : il peut s’allonger, et lever la main chaque fois qu’un nouvel instrument prend la mélodie — c’est écouter avec le corps, pas faire autre chose.",
      "Certains instruments du Boléro sont rares, et beaucoup d’adultes ne les reconnaissent pas. On nomme ceux qu’on connaît et on décrit les autres : aigu, grave, doux, nasillard. C’est une vraie réponse.",
      "Le jour où ça ne va pas : les cinq premières minutes seulement, en tapant la pulsation, et on s’arrête. La question du début a déjà des réponses.",
    ],
    [
      "À sortir : l’enregistrement, prêt à jouer ; un endroit où s’allonger ou s’asseoir confortablement ; une feuille et un crayon pour après.",
      "1. L’écoute en entier. Il lève la main chaque fois qu’un instrument nouveau prend la mélodie.",
      "2. La question du début : qu’est-ce qui n’a pas changé ?",
      "3. On relance le début, une minute : on compte la pulsation à voix basse. Les temps vont par combien ?",
      "4. Les premières minutes, de nouveau : quels instruments jouent la mélodie, dans l’ordre ?",
      "5. Combien de mélodies différentes : une seule, ou deux qui se répondent ?",
      "6. Qu’est-ce qui change, alors, pendant tout le morceau ?",
      "7. La dernière demi-minute : que se passe-t-il ?",
    ],
    [
      "",
      "La mélodie passe à un autre instrument, ou à un autre groupe d’instruments, à peu près toutes les cinquante secondes. Il y a donc beaucoup de mains à lever, et en oublier n’a aucune importance.",
      "Plusieurs réponses sont justes. Le rythme de la caisse claire, un petit tambour : il répète la même formule du premier instant jusqu’aux deux dernières mesures. Le tempo ne change pas non plus ; Ravel tenait à ce qu’on n’accélère pas. Les deux mélodies reviennent toujours pareilles, et seul l’instrument qui les joue change, jusqu’au changement de tonalité de la toute fin. La pulsation garde ses trois temps d’un bout à l’autre. S’il trouve une seule de ces réponses, ou une autre qu’il sait montrer en réécoutant, c’est une réponse juste : on part de ce qu’il a entendu, pas de cette liste.",
      "Par trois : un-deux-trois, un-deux-trois. C’est une mesure à trois temps, comme la valse, mais bien plus lente et plus appuyée.",
      "La flûte d’abord, puis la clarinette, puis le basson, puis une petite clarinette plus aiguë, puis le hautbois d’amour, un cousin rare du hautbois. Plus loin viennent des saxophones, un trombone, puis les violons, et enfin presque tout l’orchestre.",
      "Deux : une première mélodie, puis une seconde, qui lui répond. Presque tout du long, chacune est jouée deux fois de suite, par des instruments différents, avant de laisser la place à l’autre ; vers la fin, elles ne passent plus qu’une fois chacune.",
      "L’instrument qui joue la mélodie, le nombre d’instruments qui jouent ensemble, et la force du son. Tout le morceau est un seul et long crescendo.",
      "Tout l’orchestre change brusquement de hauteur — il passe dans une autre tonalité —, puis revient, et le morceau s’effondre d’un coup. C’est le seul changement de tonalité de tout le morceau : après un quart d’heure dans la même, il surprend.",
    ],
    "Ce qu’on regarde : s’il tient le quart d’heure, et à quel moment son attention décroche puis revient — souvent quand un instrument surprenant entre. S’il lève encore la main dans les dernières minutes, quand tout l’orchestre joue, c’est qu’il suit la mélodie au milieu de la masse. Un décrochage n’est rien à reprendre : la musique, elle, continue, et on la rattrape.",
  ),

  f(
    "mf-musique-03",
    "Musique",
    "Musique 3 · Clair de lune, de Debussy",
    [
      "Fiche de réserve. La question, avant d’écouter : « Est-ce qu’on peut taper la pulsation de n’importe quelle musique ? »",
      "L’œuvre : « Clair de lune », troisième pièce de la « Suite bergamasque » pour piano de Claude Debussy (1862-1918), publiée en 1905. Environ cinq minutes. Il en existe des arrangements pour orchestre ou pour guitare : on prend la version pour piano seul. Elle s’écoute facilement en médiathèque ou sur les plateformes habituelles ; on la prépare avant, et l’adulte écoute une fois, seul, l’enregistrement choisi, pour savoir où la musique s’anime dans cette version-là.",
      "Deux écoutes en entier, puisque c’est court : la première sans consigne, la seconde en cherchant la pulsation.",
      "Ici, il est probable que l’adulte ne trouve pas bien la pulsation non plus. C’est l’intérêt de la séance, et on le dit franchement.",
      "Le jour où ça ne va pas : une seule écoute, allongés, et chacun dit un seul mot à la fin.",
    ],
    [
      "À sortir : l’enregistrement pour piano seul, prêt à jouer ; de quoi s’allonger ou s’asseoir confortablement.",
      "1. Première écoute en entier, sans consigne.",
      "2. Combien d’instruments ?",
      "3. Deuxième écoute : on essaie de taper la pulsation du doigt. Est-ce qu’on y arrive ? Tout le temps ?",
      "4. Est-ce une musique plutôt forte ou plutôt douce ? Est-ce que ça change ?",
      "5. Vers le milieu, quelque chose s’anime. Qu’est-ce qui change ?",
      "6. Qu’est-ce qui revient vers la fin ?",
      "7. Retour à la question du début.",
    ],
    [
      "",
      "",
      "Un seul, le piano. Tout ce qu’on entend de différent vient des mains du pianiste : l’aigu et le grave, le fort et le doux, les notes tenues ou égrenées.",
      "La pulsation est floue, surtout au début : les notes s’étirent par-dessus le battement, et le pianiste ralentit et reprend librement. Beaucoup d’auditeurs, adultes compris, ne la trouvent pas — ce n’est pas qu’ils écoutent mal, c’est la musique qui la brouille. Sur la partition, elle est pourtant écrite, à trois temps.",
      "Douce presque tout du long. Elle commence presque dans le silence, grandit vers le milieu, puis s’éteint doucement à la fin.",
      "La main gauche se met à dérouler des vagues de notes continues, qu’on appelle des arpèges, et la musique avance un peu plus vite.",
      "La mélodie du début revient, reconnaissable, mais accompagnée cette fois par les vagues de notes du milieu. Un début, un milieu qui change, le retour du début : c’est une forme très courante.",
      "Non, pas toujours facilement. Certaines musiques ont une pulsation qu’on tape sans y penser, comme une marche ; d’autres la rendent floue. Constater qu’on ne la trouve pas est une vraie observation, pas un échec d’écoute.",
    ],
    "Ce qu’on regarde : ce qu’il fait quand il ne trouve pas la pulsation — s’il s’agace, s’il invente un battement pour avoir quelque chose, ou s’il dit simplement qu’il n’y arrive pas. Ce dernier cas est le plus précieux : c’est exactement l’honnêteté qu’on cherche à rendre ordinaire, et l’adulte peut dire la même chose au même moment.",
  ),

  /* ================================================================== */
  /* UN PROJET À SUIVRE — une séance, le 10 mars, et une de réserve.      */
  /* Tout ne se finit pas en un jour.                                    */
  /* ================================================================== */

  f(
    "mf-projet-01",
    "Un projet à suivre",
    "Projet 1 · le moulin de janvier, avec un tambour",
    [
      "On reprend le moulin construit le mercredi 6 janvier, avec la fiche « Construire 2 · le moulin qui soulève un trombone ». La question, avant de le ressortir : « Si l’axe autour duquel s’enroule le fil était plus gros, le trombone monterait-il plus vite ou plus lentement ? » Chacun parie, l’adulte aussi.",
      "Le cran d’aujourd’hui, et rien d’autre : épaissir l’axe avec des bandes de papier roulées pour en faire un tambour, et comparer avec l’axe fin. Le moulin n’a pas à être fini ni embelli.",
      "Si le moulin a disparu ou s’est abîmé, ce n’est pas un problème : on le reconstruit avec la fiche de janvier et son croquis. Il va beaucoup plus vite la deuxième fois, et c’est déjà un cran ; le tambour attendra. S’il ne l’intéresse plus, on le dit, on le range, et on prend un autre projet laissé en plan avec la fiche « Projet 2 ». Changer de projet est une décision, pas un abandon.",
      "Sécurité : comme en janvier, si une pique neuve est nécessaire, c’est l’adulte qui perce et qui coupe la pointe.",
      "Le jour où ça coince : on ressort le moulin, on le fait marcher une fois, on écrit sur une étiquette le cran à faire la prochaine fois, et on s’arrête.",
    ],
    [
      "À sortir : le moulin de janvier et son croquis ; une feuille de papier ; des ciseaux ; du ruban adhésif ; une règle graduée ; un feutre ; trois trombones ; un crayon.",
      "1. Ressortir le moulin et le faire marcher une fois, tel qu’il est. Marche-t-il encore ? Qu’est-ce qui a bougé depuis janvier ?",
      "2. La question du début : chacun écrit son pari.",
      "3. Mesurer d’abord à la main, sans vent : une marque au feutre sur la pique pour compter les tours. Le fil déroulé, le trombone en bas, on tourne la pique de cinq tours et on mesure à la règle de combien le trombone est monté.",
      "4. Le tambour : couper deux ou trois bandes de papier de 2 cm de large dans la longueur de la feuille. Scotcher le début de la première sur la pique, là où s’enroule le fil, et l’enrouler bien serrée, puis les suivantes, jusqu’à environ 1 cm d’épaisseur. Fermer au ruban adhésif, et refixer le fil dessus.",
      "5. Le fil déroulé à nouveau, refaire les cinq tours à la main, mesurer de combien le trombone monte, et comparer les deux mesures.",
      "6. Souffler, comme en janvier. Avec le tambour, le trombone monte-t-il ? Et deux trombones ? Et trois ?",
      "7. Compléter le croquis de janvier : dessiner le tambour, noter les deux mesures à côté, et la date.",
      "8. Écrire sur une étiquette un cran suivant possible, la scotcher sur le moulin, et le ranger.",
    ],
    [
      "",
      "Le papier du moulinet se tasse avec le temps. Si les pales se sont aplaties, on les rouvre un peu à la main ; si la pique frotte dans la paille, c’est souvent que la paille est écrasée dans ses trous : on les agrandit un peu.",
      "",
      "Avec une pique ordinaire, d’environ 3 mm d’épaisseur, un tour enroule à peu près 1 cm de fil, et le trombone monte d’autant : cinq tours, à peu près 5 cm. Le chiffre exact dépend de la pique ; ce qui compte, c’est la comparaison.",
      "",
      "Avec un tambour d’environ 1 cm, un tour enroule à peu près 3 cm de fil, trois fois plus : cinq tours, une quinzaine de centimètres. À chaque tour, la longueur enroulée vaut un peu plus de trois fois l’épaisseur du tambour, quelle que soit cette épaisseur.",
      "Le pari se tranche ici : avec le gros tambour, le trombone monte trois fois plus haut à chaque tour, donc plus vite tant que le moulin tourne aussi vite. Mais il faut plus de vent, parce que le gros tambour tire moins fort pour la même poussée sur les pales. Avec deux ou trois trombones, le moulin peut s’arrêter avec le tambour alors qu’il montait avec la pique seule. Petit axe, lent et fort ; gros tambour, rapide et moins fort : c’est le même échange qu’entre les vitesses d’un vélo.",
      "",
      "Des crans possibles pour une autre fois : lester le gobelet avec quelques pièces scotchées à l’intérieur pour qu’il ne bouge plus ; un tambour de taille intermédiaire ; un moulinet plus grand, taillé dans un carré de 20 cm ; un essai dehors, un jour de vent.",
    ],
    "Ce qu’on regarde : s’il se souvient de la façon dont le moulin marchait, et s’il va chercher le croquis pour s’en souvenir. Puis ce qu’il fait du pari tranché, qu’il ait parié juste ou non. Et à la fin, s’il accepte de ranger un moulin qui n’est pas « fini » : l’étiquette du cran suivant est là pour ça, et c’est elle qu’on relit le jour où on le ressort.",
  ),

  f(
    "mf-projet-02",
    "Un projet à suivre",
    "Projet 2 · avancer d’un cran, n’importe quel projet",
    [
      "Fiche de réserve, qui marche avec n’importe quel projet commencé un autre mercredi et laissé en plan : un pont, une lampe, un bateau, un dessin, une maquette. La question, avant de s’y remettre : « Qu’est-ce qui manque à cet objet pour faire un pas de plus ? » C’est lui qui répond, l’adulte écrit.",
      "La règle de la séance : un seul cran, assez petit pour être fini en vingt-cinq minutes. Le projet n’a pas à être terminé aujourd’hui, ni même un jour.",
      "Si le projet a disparu, ce n’est pas un problème : on refait son croquis ensemble, et ce croquis devient le projet du jour. S’il ne l’intéresse plus, on le dit sans détour, on décide à deux de le ranger, de le démonter pour garder les pièces ou de le jeter, et on passe à une construction neuve. Arrêter un projet est une décision, pas un échec.",
      "Sécurité : les lames, les pointes et la chaleur restent dans les mains de l’adulte, comme le jour où le projet a commencé. Pour un circuit, toujours la pile plate de 4,5 V et rien d’autre.",
      "Le jour où ça coince : on regarde seulement le projet, on écrit le cran suivant sur une étiquette, et on s’arrête. Savoir quoi faire la prochaine fois est déjà un cran.",
    ],
    [
      "À sortir : le projet et tout ce qui l’accompagne — croquis, pièces, notes ; le matériel qui avait servi la première fois ; une étiquette ou un bout de papier, et du ruban adhésif.",
      "1. Cinq minutes : ressortir le projet et le regarder à deux. Il dit ce que l’objet fait aujourd’hui et ce qui lui manque ; l’adulte écrit.",
      "2. Choisir un seul cran, dans cette liste ou ailleurs : le faire marcher ; le rendre plus solide ; mesurer ce qu’il fait ; changer une seule pièce pour comparer ; le terminer proprement ; lui écrire un mode d’emploi de trois lignes.",
      "3. Vérifier que ce cran tient en vingt-cinq minutes. Sinon, on le coupe en deux et on garde la première moitié.",
      "4. Vingt-cinq minutes de travail. L’adulte aide quand on le lui demande, et prend en main les gestes à risque.",
      "5. Cinq minutes : compléter le croquis avec ce qui a changé, et la date.",
      "6. Écrire le cran suivant sur une étiquette, la fixer au projet, et ranger le tout au même endroit.",
    ],
    undefined,
    "Ce qu’on regarde : s’il arrive à choisir un cran petit, ou s’il veut tout finir d’un coup — c’est souvent là que se loge la peur de ne pas y arriver, et c’est l’étape 3 qui la désamorce. Et à la fin, s’il supporte de laisser un objet inachevé. S’il n’y arrive pas encore, on ne force pas : on relit l’étiquette ensemble, qui dit que la suite existe.",
  ),
];
