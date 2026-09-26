/**
 * Enseignement moral et civique, CM1 — l'année entière.
 *
 * Adossé au programme d'**enseignement moral et civique** de l'école
 * élémentaire renouvelé en 2024 (publié au Bulletin officiel en juin 2024),
 * qui est celui en vigueur en CM1 pour l'année 2026-2027 : aucun programme
 * neuf ne s'applique à cette matière pour la rentrée 2026. Ce programme n'est
 * plus organisé en quatre « dimensions » (sensibilité, règle et droit,
 * jugement, engagement) comme celui de 2015 : il fixe des thèmes par niveau.
 * Les références ci-dessous décrivent donc des objectifs, sans citer un
 * article que je n'ai pas vérifié.
 *
 * Pour le CM1, les six leçons couvrent la plus grande part de ces thèmes : la
 * règle et la loi, la République, ses symboles et sa laïcité, le respect
 * d'autrui, les discriminations et le harcèlement, les émotions, l'égalité
 * entre les filles et les garçons, le vote, les grands textes des droits et
 * l'engagement. **Un thème n'est pas traité** et devra l'être par un adulte :
 * la protection de l'environnement.
 *
 * Une précaution qui compte plus qu'ailleurs. L'EMC n'enseigne pas des
 * opinions : il enseigne à **raisonner** sur ce qui est juste, et à écouter
 * quelqu'un qui ne pense pas comme soi. Les exercices qui suivent portent donc
 * sur des faits (les symboles de la République, ce que dit la loi, ce qui a
 * été mesuré) et sur des raisonnements (pourquoi une règle existe), jamais sur
 * ce qu'il faudrait penser.
 *
 * Relu une fois en septembre 2026 : dates et faits vérifiés et corrigés,
 * exercices reformulés pour n'attendre jamais une opinion ni une réponse
 * déjà écrite dans l'énoncé. Pas encore relu par un enseignant. Ça doit l'être.
 */

import { e, q, type Lecon } from "./types";

const regles: Lecon = {
  code: "e-p1-regles",
  matiere: "emc",
  periode: 1,
  titre: "Pourquoi il y a des règles",
  reference:
    "Comprendre les raisons de l’obéissance aux règles et à la loi ; distinguer une habitude, une règle et une loi, et savoir qui les fait ; comprendre qu’une règle se discute en parlant. Programme d’EMC de l’école élémentaire (2024), CM1 : le respect d’autrui, la règle et la loi.",
  minutes: 25,
  cours: [
    {
      texte: [
        "Une règle qu’on subit sans comprendre donne envie de la contourner. Une règle dont on voit la raison se respecte beaucoup mieux. Il vaut donc la peine de chercher la raison.",
        "Imagine une partie de foot sans aucune règle : on peut prendre le ballon à la main, pousser, déplacer les buts. Au bout de deux minutes, ce n’est plus un jeu, c’est une bagarre — et c’est le plus grand qui gagne. Les règles ne sont pas contre le jeu : ce sont elles qui le rendent possible.",
      ],
    },
    {
      titre: "À quoi servent les règles",
      texte: [
        "**Protéger** : s’arrêter au feu rouge évite d’être renversé. À la maison, « on ne court pas avec des ciseaux » sert exactement à la même chose.",
        "**Rendre la vie commune possible** : si chacun parle en même temps, personne n’est entendu.",
        "**Éviter que le plus fort décide de tout** : sans règle, c’est celui qui crie le plus fort ou qui frappe qui gagne. La règle protège d’abord les plus faibles.",
        "Ce dernier point est le plus important, et le moins évident.",
      ],
      regle:
        "Une règle n’est pas là pour embêter : elle est là pour que la force ne décide pas seule.",
    },
    {
      titre: "Habitude, règle, loi",
      texte: [
        "Une **habitude**, ou une coutume, est une façon de faire que tout le monde suit sans qu’aucun texte l’oblige : dire bonjour, se serrer la main, enlever ses chaussures chez quelqu’un. Personne ne peut te punir au nom de la loi si tu l’oublies — mais elle compte pour vivre ensemble.",
        "Une **règle** vaut dans un lieu donné : les règles de la classe, du club de sport, de la maison. Ceux qu’elle concerne peuvent en discuter et la modifier : à la maison avec les parents, en classe avec le maître ou la maîtresse.",
        "Une **loi** vaut pour tout le pays. Elle est votée par les représentants du peuple, au **Parlement** — les députés et les sénateurs — et personne n’y échappe, pas même ceux qui l’ont votée.",
        "Un exemple de loi qui te concerne : l’instruction est obligatoire pour tous les enfants de 3 à 16 ans. Elle peut se faire à l’école ou à la maison, mais elle est due à chaque enfant du pays.",
      ],
      regle:
        "Une habitude, on la suit sans y être obligé. Une règle vaut dans un lieu. Une loi vaut pour tout le pays.",
    },
    {
      titre: "Une règle peut être injuste",
      texte: [
        "Obéir n’empêche pas de réfléchir. Certaines règles ont été injustes, et elles ont été changées parce que des gens l’ont dit.",
        "La bonne question n’est pas « est-ce que ça m’arrange ? », mais « est-ce que ce serait juste si c’était quelqu’un d’autre à ma place ? ».",
        "Et discuter une règle se fait en parlant, pas en la contournant en cachette.",
      ],
      regle:
        "Pour juger une règle : demande-toi si tu la trouverais juste appliquée à quelqu’un d’autre, ou à toi dans l’autre situation.",
    },
  ],
  exemples: [
    {
      enonce: "« On lève la main pour parler. » À quoi sert cette règle ?",
      etapes: [
        "Si tout le monde parle en même temps, personne n’est entendu.",
        "Sans elle, ce sont les plus bruyants ou les plus sûrs d’eux qui parlent toujours.",
        "Elle donne donc une chance de parler à ceux qui n’oseraient pas s’imposer. Elle protège les plus discrets.",
      ],
      resultat: "à ce que tout le monde puisse être entendu",
    },
  ],
  exercices: [
    q("e-p1-re-1", "À quoi sert d’abord une règle ?", ["éviter que le plus fort décide de tout", "embêter les enfants", "faire plaisir aux adultes"], "éviter que le plus fort décide de tout", "Sans règle, c’est celui qui crie ou frappe le plus fort qui gagne. La règle protège d’abord les plus faibles."),
    q("e-p1-re-2", "Qui vote les lois en France ?", ["les représentants du peuple", "le président seul", "les juges"], "les représentants du peuple", "Les députés et les sénateurs, réunis au Parlement, sont élus pour cela. Le président ne peut pas faire une loi tout seul."),
    q("e-p1-re-3", "Quelle est la différence entre une règle et une loi ?", ["la loi vaut pour tout le pays", "la règle est plus sévère", "il n’y a aucune différence"], "la loi vaut pour tout le pays", "Une règle vaut dans un lieu donné : une classe, un club, une maison. Une loi vaut pour tout le monde, partout dans le pays."),
    q("e-p1-re-4", "Laquelle de ces trois choses est une loi ?", ["l’instruction est obligatoire de 3 à 16 ans", "on dit bonjour en arrivant", "on lève la main pour parler en classe"], "l’instruction est obligatoire de 3 à 16 ans", "Elle est votée par le Parlement et vaut pour tous les enfants du pays. Dire bonjour est une habitude ; lever la main est une règle de la classe."),
    q("e-p1-re-5", "Peut-on trouver une règle injuste ?", ["oui, et le dire", "non, jamais", "oui, et la contourner en cachette"], "oui, et le dire", "Des règles injustes ont été changées parce que des gens l’ont dit. Discuter une règle se fait en parlant, pas en cachette."),
    q("e-p1-re-6", "Quelle est la bonne question pour juger une règle ?", ["serait-elle juste pour quelqu’un d’autre ?", "est-ce que ça m’arrange ?", "est-ce qu’elle est ancienne ?"], "serait-elle juste pour quelqu’un d’autre ?", "Se mettre à la place de l’autre est l’outil de base pour réfléchir à ce qui est juste."),
  ],
};

const republique: Lecon = {
  code: "e-p2-republique",
  matiere: "emc",
  periode: 2,
  titre: "La République et ses symboles",
  reference:
    "Connaître les symboles de la République française — le drapeau, l’hymne, Marianne, le 14 juillet, la devise — et ce qu’ils représentent ; comprendre le sens de Liberté, Égalité, Fraternité ; comprendre le principe de laïcité. Programme d’EMC de l’école élémentaire (2024), CM1 : la République, ses valeurs, ses symboles et sa laïcité.",
  minutes: 30,
  cours: [
    {
      texte: [
        "La France est une **république** : le pouvoir n’appartient pas à un roi, mais aux citoyens, qui le confient à des représentants qu’ils élisent.",
        "Le mot vient du latin « res publica » : la chose publique, ce qui est à tous.",
        "Les citoyens élisent le président de la République pour cinq ans, les députés pour cinq ans aussi, et dans chaque commune un conseil municipal, qui choisit le maire.",
      ],
    },
    {
      titre: "Les symboles",
      texte: [
        "Le **drapeau tricolore** : bleu, blanc, rouge. Il est né pendant la Révolution, en 1789. Le blanc était la couleur du roi ; le bleu et le rouge, celles de la ville de Paris. Les réunir voulait dire : le roi et le peuple ensemble. L’ordre bleu, blanc, rouge que nous connaissons date de 1794.",
        "**La Marseillaise**, l’hymne national. Rouget de Lisle l’a composée en 1792, à Strasbourg, pour des soldats qui partaient à la guerre : c’était un chant de guerre, et les paroles le rappellent. Elle est l’hymne de la France depuis 1879.",
        "**Marianne**, une figure de femme coiffée d’un bonnet rouge, le bonnet phrygien, signe de liberté. Elle représente la République : on la trouve dans les mairies et sur les timbres.",
        "Le **14 juillet**, fête nationale depuis 1880, en souvenir du 14 juillet 1789, jour de la prise de la Bastille.",
        "La **devise** : Liberté, Égalité, Fraternité — écrite sur les mairies et les écoles.",
        "La **Constitution**, le texte le plus important du pays, dit en un seul article que l’emblème national est le drapeau tricolore, que l’hymne est la Marseillaise et que la devise est Liberté, Égalité, Fraternité.",
      ],
    },
    {
      titre: "Ce que veut dire la devise",
      texte: [
        "**Liberté** : faire ce qu’on veut, tant que cela ne nuit pas aux autres. Ce n’est pas « faire n’importe quoi » : ma liberté s’arrête là où commence celle des autres. C’est presque mot pour mot ce que dit la Déclaration des droits de l’homme et du citoyen, écrite en 1789 : « la liberté consiste à pouvoir faire tout ce qui ne nuit pas à autrui ».",
        "**Égalité** : la même loi et les mêmes droits pour tous, quelle que soit la naissance, la fortune, la religion, le sexe. Ce n’est pas « tout le monde pareil » : c’est « personne au-dessus de la loi ». Devant un juge, l’enfant d’un ministre et l’enfant d’un ouvrier sont jugés avec la même loi.",
        "**Fraternité** : se devoir quelque chose les uns aux autres, même à des inconnus. On parle aussi de **solidarité** : quand quelqu’un est malade ou en danger, les secours viennent pour tout le monde, et c’est tout le monde qui les paie.",
      ],
      regle:
        "Égalité en **droit** ne veut pas dire égalité de fait. La devise dit ce qu’on vise, pas ce qui est atteint.",
    },
    {
      titre: "La laïcité",
      texte: [
        "En France, l’État est **laïque** : il ne favorise aucune religion et n’en combat aucune.",
        "Chacun est libre de croire ou de ne pas croire, de changer de religion ou de ne pas en avoir, et personne ne peut l’y forcer.",
        "C’est écrit dans une loi de 1905, la loi de séparation des Églises et de l’État : la République « assure la liberté de conscience » et « ne reconnaît, ne salarie ni ne subventionne aucun culte ». Autrement dit, l’État ne paie aucune religion et n’en choisit aucune.",
        "À l’école publique, on n’enseigne aucune religion comme vraie — mais on peut en parler comme d’un fait, en histoire par exemple. Depuis 2013, une Charte de la laïcité est affichée dans toutes les écoles publiques.",
      ],
      regle:
        "La laïcité n’est pas l’interdiction des religions : c’est la neutralité de l’État, qui garantit la liberté de chacun.",
    },
  ],
  exemples: [
    {
      enonce: "Que veut dire « ma liberté s’arrête là où commence celle des autres » ?",
      etapes: [
        "Je suis libre d’écouter de la musique.",
        "Mais si je la mets très fort à minuit, j’empêche mes voisins de dormir.",
        "Ma liberté d’écouter s’arrête donc là où commence leur liberté de dormir. C’est ce que la loi traduit en règles.",
      ],
      resultat: "être libre ne veut pas dire nuire à autrui",
    },
  ],
  exercices: [
    q("e-p2-rp-1", "Quelle est la devise de la République française ?", ["Liberté, Égalité, Fraternité", "Liberté, Égalité, Solidarité", "Liberté, Justice, Fraternité"], "Liberté, Égalité, Fraternité", "Elle est écrite sur les mairies et les écoles, et dans la Constitution."),
    q("e-p2-rp-2", "Comment s’appelle la figure de femme qui représente la République ?", ["Marianne", "Jeanne d’Arc", "Marguerite"], "Marianne", "Coiffée du bonnet phrygien, on la trouve dans les mairies et sur les timbres."),
    e("e-p2-rp-3", "Comment s’appelle l’hymne national français ?", "la Marseillaise", "Composée en 1792 par Rouget de Lisle, à Strasbourg. C’était un chant de guerre."),
    q("e-p2-rp-4", "Que veut dire « égalité » dans la devise ?", ["la même loi et les mêmes droits pour tous", "tout le monde pareil", "les mêmes richesses pour tous"], "la même loi et les mêmes droits pour tous", "C’est l’égalité en droit : personne n’est au-dessus de la loi."),
    q("e-p2-rp-5", "Que veut dire que l’État est laïque ?", ["il ne favorise aucune religion", "il interdit les religions", "il a une religion officielle"], "il ne favorise aucune religion", "Et il n’en combat aucune : c’est la loi de 1905. Cette neutralité garantit la liberté de chacun de croire ou de ne pas croire."),
    q("e-p2-rp-6", "Que veut dire « fraternité » dans la devise ?", ["se devoir de l’aide les uns aux autres, même entre inconnus", "être tous de la même famille", "obéir au président"], "se devoir de l’aide les uns aux autres, même entre inconnus", "On dit aussi solidarité : les secours viennent pour tout le monde, et tout le monde les paie."),
  ],
};

const differences: Lecon = {
  code: "e-p3-differences",
  matiere: "emc",
  periode: 3,
  titre: "Le respect et les différences",
  reference:
    "Respecter autrui et accepter les différences ; savoir ce qu’est une discrimination et que la loi l’interdit ; reconnaître une situation de harcèlement, savoir ce que dit la loi et ce qu’un témoin peut faire. Programme d’EMC de l’école élémentaire (2024), CM1 : le respect d’autrui, la lutte contre les discriminations et le harcèlement.",
  minutes: 30,
  cours: [
    {
      texte: [
        "Les gens sont différents : par leur apparence, leur langue, leur famille, leurs croyances, ce qu’ils savent faire, ce qui leur fait peur. C’est un fait, et pas un problème à régler.",
      ],
    },
    {
      titre: "Respecter, ce n’est pas être d’accord",
      texte: [
        "On peut ne pas être d’accord avec quelqu’un et le respecter : l’écouter, ne pas se moquer, ne pas l’empêcher de parler.",
        "Léa pense que le meilleur sport est la natation, Tom que c’est le judo. Ils peuvent en discuter longtemps, chacun avec ses arguments, sans que l’un se moque de l’autre. C’est ça, le respect.",
        "On peut aussi trouver quelqu’un antipathique sans lui manquer de respect. Le respect n’est pas de l’affection.",
        "Ce qui n’est pas du respect : se moquer, imiter quelqu’un pour faire rire, l’exclure d’un jeu à cause de ce qu’il est.",
      ],
      regle:
        "Respecter quelqu’un ne demande pas de l’aimer ni d’être d’accord avec lui. Ça demande de ne pas lui nuire.",
    },
    {
      titre: "La discrimination",
      texte: [
        "Une **discrimination**, c’est traiter quelqu’un plus mal à cause de ce qu’il est : son origine, sa couleur de peau, sa religion, son sexe, son handicap, sa famille.",
        "Un exemple : un club refuse d’inscrire un enfant parce qu’il est en fauteuil roulant, alors qu’il pourrait participer. Ce n’est pas seulement méchant : c’est interdit.",
        "En France, la discrimination est **interdite par la loi**. Refuser un logement, un emploi ou l’entrée d’un lieu pour ces raisons est un délit, c’est-à-dire une faute que la loi punit.",
        "Ce n’est donc pas seulement une question de gentillesse : c’est une question de droit.",
      ],
    },
    {
      titre: "Le harcèlement",
      texte: [
        "Une moquerie isolée blesse. Le harcèlement, c’est autre chose : c’est **répété**, ça vise **toujours la même personne**, et celle qui le subit ne peut pas s’en défendre seule.",
        "Ça peut être des mots, des gestes, des affaires cachées ou abîmées, une mise à l’écart. Sur un téléphone ou dans un jeu en ligne, c’est du harcèlement aussi — et celui-là ne s’arrête pas en rentrant à la maison.",
        "Trois rôles existent dans ces situations : celui qui harcèle, celui qui subit, et **ceux qui regardent**. Les derniers sont les plus nombreux, et ce sont eux qui peuvent le plus changer les choses : très souvent, le harcèlement s’arrête quand le public cesse de rire et va vers celui qui est visé.",
        "Ce n’est pas rapporter que de le dire à un adulte : c’est aider quelqu’un qui ne peut pas s’aider seul. Et si l’adulte à qui on le dit ne fait rien, on le dit à un autre.",
        "Depuis une loi de 2022, le harcèlement scolaire est un **délit** : la loi le punit. Il existe aussi des numéros de téléphone gratuits, comme le 3018, où quelqu’un écoute et aide un jeune harcelé, à l’école ou sur internet.",
      ],
      regle:
        "Trois signes du harcèlement : c’est répété, c’est la même personne, et elle ne peut pas se défendre seule.",
    },
  ],
  exemples: [
    {
      enonce: "Un élève est moqué chaque jour depuis des semaines sur sa façon de parler. Les autres rient. Que faire ?",
      etapes: [
        "C’est répété, ça vise toujours la même personne, et elle ne peut pas s’en défendre seule : c’est du harcèlement.",
        "Ceux qui rient, même sans le vouloir, encouragent celui qui se moque : sans public, ça s’arrête souvent.",
        "Cesser de rire, aller parler à cet élève, et le dire à un adulte. Trois choses possibles, même pour quelqu’un qui n’ose pas intervenir directement.",
      ],
      resultat: "ne pas rire, aller vers lui, le dire à un adulte",
    },
  ],
  exercices: [
    q("e-p3-df-1", "Respecter quelqu’un veut dire…", ["ne pas lui nuire", "être d’accord avec lui", "l’aimer"], "ne pas lui nuire", "On peut respecter quelqu’un avec qui on n’est pas d’accord, ou qu’on n’aime pas beaucoup."),
    q("e-p3-df-2", "Qu’est-ce qu’une discrimination ?", ["traiter quelqu’un plus mal à cause de ce qu’il est", "ne pas être d’accord avec quelqu’un", "se disputer avec quelqu’un"], "traiter quelqu’un plus mal à cause de ce qu’il est", "Origine, religion, sexe, handicap : en France, c’est interdit par la loi."),
    q("e-p3-df-3", "Laquelle de ces situations est du harcèlement ?", ["des moqueries chaque jour, depuis des semaines, contre le même enfant", "une dispute entre deux amis qui se réconcilient le lendemain", "une insulte, une seule fois, pendant un match"], "des moqueries chaque jour, depuis des semaines, contre le même enfant", "Trois signes : c’est répété, c’est toujours la même personne, et elle ne peut pas se défendre seule. Une insulte isolée blesse, mais ce n’est pas la même chose."),
    q("e-p3-df-4", "Pourquoi ceux qui regardent comptent-ils autant dans un harcèlement ?", ["parce que sans public, le harcèlement s’arrête souvent", "parce qu’ils sont punis à la place de celui qui harcèle", "parce qu’ils ne peuvent rien faire"], "parce que sans public, le harcèlement s’arrête souvent", "Ils sont les plus nombreux. Quand ils cessent de rire et vont vers celui qui est visé, le harcèlement perd son public."),
    q("e-p3-df-5", "Dire à un adulte qu’un camarade est harcelé, c’est…", ["l’aider", "rapporter", "trahir"], "l’aider", "Il s’agit de quelqu’un qui ne peut pas s’aider seul. Ce n’est pas rapporter."),
    q("e-p3-df-6", "Si l’adulte à qui tu le dis ne fait rien ?", ["le dire à un autre adulte", "abandonner", "se venger"], "le dire à un autre adulte", "Si un adulte ne fait rien, un autre le fera. On n’abandonne pas après un seul essai."),
    q("e-p3-df-7", "Depuis 2022, le harcèlement scolaire est…", ["un délit puni par la loi", "une simple plaisanterie", "interdit seulement au collège"], "un délit puni par la loi", "La loi de 2022 en fait un délit, pour tous les élèves. Et le 3018 est un numéro gratuit où un jeune harcelé trouve quelqu’un qui écoute et aide."),
  ],
};

const emotions: Lecon = {
  code: "e-p3-emotions",
  matiere: "emc",
  periode: 3,
  titre: "Nommer ce qu’on ressent, régler un conflit",
  reference:
    "Identifier et nommer ses émotions et celles des autres avec un vocabulaire précis ; comprendre qu’une émotion se ressent sans se commander et que ce qu’on en fait, lui, s’apprend ; régler un désaccord en parlant, sans agressivité. Programme d’EMC de l’école élémentaire (2024), CM1 : les émotions et le respect d’autrui.",
  minutes: 25,
  cours: [
    {
      texte: [
        "Les émotions ne se commandent pas. On ne décide pas d’avoir peur ou d’être en colère — ça arrive. Ce qui se décide, c’est ce qu’on en fait.",
        "Une émotion, même très forte, ne reste pas : elle monte, puis elle redescend, comme une vague. Et la première chose qui aide, c’est de pouvoir la nommer : une émotion qu’on a nommée pèse déjà moins lourd, parce qu’on sait ce que c’est.",
      ],
    },
    {
      titre: "Un vocabulaire plus précis",
      texte: [
        "Au-delà de « content » et « pas content », il y a : joyeux, fier, soulagé, ému, curieux, enthousiaste.",
        "Et : triste, déçu, inquiet, anxieux, gêné, honteux, jaloux, agacé, furieux, épuisé, découragé.",
        "« Je suis énervé » et « je suis inquiet » ne demandent pas la même chose. Mettre le bon mot, c’est déjà savoir de quoi on a besoin.",
        "Avant de jouer son morceau de piano devant la famille, Lina a mal au ventre. Est-elle malade ? Non : elle est inquiète. Une fois le mot trouvé, elle sait quoi demander — que quelqu’un l’écoute une fois avant, pour se rassurer.",
      ],
      regle:
        "Aucune émotion n’est interdite : on a le droit d’être en colère, triste ou jaloux. Ce qui a des limites, c’est ce qu’on fait avec — frapper quelqu’un, l’insulter, casser ses affaires.",
    },
    {
      titre: "Ce qui se cache derrière la colère",
      texte: [
        "La colère est souvent une couverture. En dessous, il y a fréquemment de la peur, un sentiment d’injustice, de la fatigue ou de la déception.",
        "Quand quelqu’un se met en colère pour une chose minuscule, la vraie cause est souvent ailleurs : une mauvaise nuit, une inquiétude qui traîne depuis le matin.",
        "Se demander « qu’est-ce qu’il y a en dessous ? » est utile pour soi comme pour les autres.",
      ],
    },
    {
      titre: "Régler un conflit",
      texte: [
        "**Dire ce qu’on ressent plutôt qu’accuser.** « Ça m’a blessé quand tu as dit ça » au lieu de « tu es méchant ». La première phrase peut recevoir une réponse ; la seconde appelle une bagarre.",
        "**Écouter l’autre version.** Presque toujours, l’autre a vécu autre chose que ce qu’on croit.",
        "**Chercher une sortie**, pas un gagnant. Un conflit où quelqu’un doit perdre ne se règle pas, il s’interrompt.",
        "**Demander de l’aide** quand on n’y arrive pas seul. Un adulte sert exactement à ça — et les adultes aussi demandent de l’aide quand ils n’y arrivent pas.",
      ],
      regle:
        "Parler de ce qu’on ressent au lieu d’accuser change tout : « je » ouvre la discussion, « tu » la ferme.",
    },
  ],
  exemples: [
    {
      enonce: "Un camarade a pris ton livre sans demander. Comment le dire sans que ça dégénère ?",
      etapes: [
        "L’accusation ferme la porte : « tu es un voleur » appelle une dispute.",
        "Dire ce qu’on ressent et ce qu’on veut : « ça m’embête que tu l’aies pris sans me demander ».",
        "Puis proposer la suite : « la prochaine fois, demande-moi ».",
      ],
      resultat: "dire « je » au lieu de « tu »",
    },
  ],
  exercices: [
    q("e-p3-em-1", "Une émotion se commande-t-elle ?", ["non, elle arrive sans qu’on la décide", "oui, il suffit de le vouloir", "oui, mais seulement la joie"], "non, elle arrive sans qu’on la décide", "On ne décide pas d’avoir peur. Ce qui se décide, c’est ce qu’on en fait."),
    q("e-p3-em-2", "Y a-t-il des émotions interdites ?", ["non, mais ce qu’on en fait a des limites", "oui, la colère", "oui, la tristesse"], "non, mais ce qu’on en fait a des limites", "Ressentir de la colère n’est pas interdit. Frapper quelqu’un, oui, parce que ça lui fait mal."),
    q("e-p3-em-3", "Que se cache-t-il souvent derrière la colère ?", ["de la peur ou un sentiment d’injustice", "rien du tout", "de la joie"], "de la peur ou un sentiment d’injustice", "Quand la colère est très grande pour une petite chose, la vraie cause est souvent ailleurs."),
    q("e-p3-em-4", "Laquelle de ces phrases ouvre la discussion ?", ["ça m’a blessé quand tu as dit ça", "tu es méchant", "tu fais toujours ça"], "ça m’a blessé quand tu as dit ça", "Parler de ce qu’on ressent peut recevoir une réponse ; accuser appelle une bagarre."),
    q("e-p3-em-5", "Dans un conflit, que faut-il chercher ?", ["une sortie", "un gagnant", "un coupable"], "une sortie", "Un conflit où quelqu’un doit perdre ne se règle pas, il s’interrompt."),
    q("e-p3-em-6", "Quand on n’arrive pas à régler un conflit seul, demander l’aide d’un adulte, c’est…", ["une bonne façon de faire", "interdit passé 8 ans", "réservé aux bébés"], "une bonne façon de faire", "Un adulte sert exactement à ça, à n’importe quel âge. Les grandes personnes aussi demandent de l’aide quand elles n’y arrivent pas seules."),
  ],
};

const egalite: Lecon = {
  code: "e-p4-egalite",
  matiere: "emc",
  periode: 4,
  titre: "L’égalité entre les filles et les garçons",
  reference:
    "Comprendre le principe d’égalité entre les filles et les garçons, en droit et dans les faits ; connaître quelques dates de sa conquête ; identifier un stéréotype et savoir pourquoi il est nuisible. Programme d’EMC de l’école élémentaire (2024), CM1 : l’égalité entre les filles et les garçons, les valeurs de la République.",
  minutes: 30,
  cours: [
    {
      texte: [
        "En France, les filles et les garçons ont exactement les mêmes droits. Ça n’a pas toujours été le cas, et ce n’est pas encore vrai partout dans les faits.",
      ],
    },
    {
      titre: "Ce que dit le droit, et depuis quand",
      texte: [
        "L’instruction est obligatoire pour toutes les filles et tous les garçons depuis 1882 — à l’école ou dans la famille. Mais pendant très longtemps, filles et garçons ont été séparés, et on ne leur enseignait pas la même chose.",
        "Les femmes n’ont obtenu le **droit de vote** qu’en 1944, près d’un siècle après les hommes, qui votent tous depuis 1848.",
        "Jusqu’en 1965, une femme mariée ne pouvait pas ouvrir un compte en banque ni travailler sans l’autorisation de son mari.",
        "Depuis 1972, la loi dit : « à travail égal, salaire égal ». Et depuis 1946, la Constitution garantit aux femmes, dans tous les domaines, des droits égaux à ceux des hommes.",
        "Ces dates sont récentes. Des gens nés avant 1965 — peut-être tes grands-parents — ont grandi dans un pays où ces inégalités étaient dans la loi.",
      ],
      regle:
        "L’égalité en droit entre les femmes et les hommes est une conquête récente, obtenue parce que des gens l’ont réclamée.",
    },
    {
      titre: "Les stéréotypes",
      texte: [
        "Un **stéréotype** est une idée toute faite qu’on applique à tout un groupe : « les filles sont douces », « les garçons ne pleurent pas », « les maths, c’est pour les garçons ».",
        "Ces phrases sont fausses au niveau des personnes : il y a des filles bagarreuses et des garçons timides, des garçons qui pleurent et des filles qui adorent les maths.",
        "Sur les maths, on a mesuré : à l’entrée au CP, les filles et les garçons ont exactement les mêmes résultats. Un écart apparaît ensuite, en quelques mois d’école seulement. Il ne vient donc pas d’une différence de capacité : il vient sans doute de ce qu’on dit aux uns et aux autres, et de ce qu’on attend d’eux.",
        "Car un stéréotype a un effet réel : un enfant à qui on répète qu’il n’est pas fait pour quelque chose finit souvent par ne plus essayer. Le stéréotype fabrique ce qu’il prétend décrire.",
      ],
      regle:
        "Un stéréotype n’est pas seulement faux : il devient une contrainte pour celui qui l’entend.",
    },
    {
      titre: "Et dans les faits, aujourd’hui",
      texte: [
        "En France, les femmes gagnent en moyenne moins que les hommes. Une partie de l’écart vient de ce qu’elles occupent plus souvent des emplois moins payés ou à temps partiel ; mais même à poste égal, un écart reste.",
        "Certains métiers sont presque entièrement occupés par des femmes, d’autres par des hommes — et ce n’est pas une question de capacité.",
        "Le travail de la maison — cuisine, ménage, courses, soin des enfants — n’est pas partagé également dans la plupart des familles : les femmes en font la plus grande part.",
        "Ce ne sont pas des opinions : ce sont des chiffres mesurés. Ce qu’on en pense et ce qu’on veut faire est une autre discussion, et elle est légitime.",
      ],
    },
  ],
  exemples: [
    {
      enonce: "« Les maths, c’est pour les garçons. » Que peut-on répondre ?",
      etapes: [
        "C’est faux au niveau des faits : à l’entrée au CP, les filles et les garçons ont exactement les mêmes résultats en mathématiques.",
        "C’est un stéréotype : une idée toute faite appliquée à tout un groupe.",
        "Et c’est nuisible : une fille à qui on le répète peut arrêter d’essayer, ce qui finira par donner raison à la phrase — alors qu’elle était fausse au départ.",
      ],
      resultat: "c’est un stéréotype, faux et nuisible",
    },
  ],
  exercices: [
    e("e-p4-eg-1", "En quelle année les femmes ont-elles obtenu le droit de vote en France ?", "1944", "Près d’un siècle après les hommes, qui votent tous depuis 1848. C’est très récent."),
    q("e-p4-eg-2", "Qu’est-ce qu’un stéréotype ?", ["une idée toute faite sur tout un groupe", "une insulte", "une loi"], "une idée toute faite sur tout un groupe", "« Les filles sont douces », « les garçons ne pleurent pas » : des idées toutes faites, fausses au niveau des personnes."),
    q("e-p4-eg-3", "À l’entrée au CP, les filles et les garçons ont-ils les mêmes résultats en mathématiques ?", ["oui, exactement les mêmes", "non, les garçons sont meilleurs", "non, les filles sont meilleures"], "oui, exactement les mêmes", "Mesuré sur des millions d’enfants : au début du CP, aucune différence. L’écart qui apparaît ensuite ne vient donc pas d’une différence de capacité."),
    q("e-p4-eg-4", "Pourquoi un stéréotype est-il nuisible, même s’il est faux ?", ["il fait renoncer ceux qui l’entendent", "il est mal écrit", "il n’est pas nuisible"], "il fait renoncer ceux qui l’entendent", "Un enfant à qui on répète qu’il n’est pas fait pour quelque chose finit souvent par ne plus essayer. Le stéréotype fabrique ce qu’il prétendait décrire."),
    q("e-p4-eg-5", "En France, à poste égal, les femmes et les hommes gagnent-ils en moyenne la même chose ?", ["non, un écart reste", "oui, exactement la même chose", "personne ne l’a mesuré"], "non, un écart reste", "C’est mesuré chaque année : même à poste égal, un écart reste, en défaveur des femmes. C’est un chiffre, pas une opinion — alors que la loi dit « à travail égal, salaire égal » depuis 1972."),
    q("e-p4-eg-6", "L’égalité en droit entre femmes et hommes a été obtenue…", ["parce que des gens l’ont réclamée", "de tout temps", "par hasard"], "parce que des gens l’ont réclamée", "Le droit de vote en 1944, le compte en banque en 1965, le salaire égal en 1972 : ce sont des conquêtes."),
  ],
};

const decider: Lecon = {
  code: "e-p5-decider",
  matiere: "emc",
  periode: 5,
  titre: "Décider ensemble : le vote",
  reference:
    "Comprendre le sens du vote et ses règles — une voix par personne, le secret, le résultat qui s’applique à tous ; distinguer l’intérêt particulier et l’intérêt général ; savoir que les droits fondamentaux ne se votent pas et connaître les textes qui les protègent ; découvrir des façons de s’engager. Programme d’EMC de l’école élémentaire (2024), CM1 : le vote, l’engagement, les grands textes des droits.",
  minutes: 30,
  cours: [
    {
      texte: [
        "Quand un groupe doit choisir et que tout le monde n’est pas d’accord, il faut une façon de décider. Le vote en est une — pas la seule, mais celle sur laquelle repose la démocratie.",
        "En France, on vote à partir de 18 ans, pour élire le président de la République, les députés, le conseil municipal de sa commune. Mais on vote aussi bien avant : pour choisir un délégué de classe, une sortie, le nom d’une mascotte.",
      ],
    },
    {
      titre: "Voter, et ce que ça suppose",
      texte: [
        "Chaque personne a **une** voix, et elles comptent toutes pareil. C’est cela qui fait qu’un vote n’est pas la loi du plus fort.",
        "Le vote est **secret** : personne ne doit savoir ce que tu as choisi. Sinon on pourrait te menacer ou t’acheter. C’est pour cela qu’il y a un isoloir, ce petit rideau derrière lequel chacun prépare son bulletin seul.",
        "Le résultat s’applique **à tous**, y compris à ceux qui ont voté autrement. C’est le prix de la méthode, et c’est ce qui la rend utile.",
        "Et on peut voter contre son propre intérêt immédiat parce qu’on pense que c’est mieux pour l’ensemble. C’est la différence entre l’intérêt particulier et l’**intérêt général** : voter pour une piscine dans la commune même si on n’aime pas nager, parce que beaucoup d’enfants y apprendront à nager.",
      ],
      regle:
        "Accepter un résultat avec lequel on n’est pas d’accord n’est pas une défaite : c’est ce qui permet de revoter la prochaine fois.",
    },
    {
      titre: "Les limites du vote",
      texte: [
        "La majorité peut avoir tort. Un vote ne rend pas une décision juste : il la rend **légitime**, c’est-à-dire acceptée par tous parce qu’elle a été prise selon la règle.",
        "C’est pourquoi certaines choses **ne se votent pas** : on ne vote pas pour savoir si une personne a des droits. Les droits fondamentaux sont au-dessus des majorités, et c’est exactement à ça que servent les déclarations de droits.",
        "En France, la **Déclaration des droits de l’homme et du citoyen** de 1789 fait partie de la Constitution : une loi qui lui est contraire peut être annulée, même si elle a été votée.",
        "Pour les enfants, il y a la **Convention internationale des droits de l’enfant**, signée en 1989 par presque tous les pays du monde : tout enfant a le droit d’être protégé, soigné, instruit, et d’être écouté sur ce qui le concerne.",
      ],
      regle:
        "Un vote décide de ce qui est légitime, pas de ce qui est vrai ni de ce qui est juste. Les droits ne se votent pas.",
    },
    {
      titre: "Autres façons de décider",
      texte: [
        "Le **consensus** : on discute jusqu’à ce que tout le monde accepte. Plus long, mais personne ne se sent écrasé.",
        "Le **tirage au sort** : utile quand il n’y a pas de bonne réponse et qu’il faut seulement être équitable — qui commence la partie.",
        "La **délégation** : on confie la décision à quelqu’un qu’on a choisi. C’est ce qu’on fait en élisant des députés.",
        "Chaque méthode a son usage. Voter pour tout serait aussi maladroit que de ne jamais voter.",
      ],
    },
    {
      titre: "S’engager",
      texte: [
        "Voter n’est pas la seule façon de participer. **S’engager**, c’est donner de son temps pour les autres ou pour une cause, sans y être obligé.",
        "Ça existe à toutes les tailles : être délégué de classe et porter la parole des autres, aider un voisin âgé à faire ses courses, ramasser les déchets sur une plage avec une association, devenir pompier volontaire quand on est grand.",
        "Dans une association, les membres décident ensemble, souvent par un vote : c’est une petite démocratie, où l’on apprend à faire ce qu’on a décidé.",
      ],
    },
  ],
  exemples: [
    {
      enonce: "La classe vote pour la destination d’une sortie. Ton choix perd. Que se passe-t-il ?",
      etapes: [
        "Le résultat s’applique à tous, y compris à ceux qui ont voté autrement.",
        "Ce n’est pas que ton avis ne comptait pas : il a été compté, et il était minoritaire.",
        "Tu peux continuer à défendre ton idée, et il y aura d’autres votes. C’est ce qui rend le premier acceptable.",
      ],
      resultat: "on suit le résultat, et on pourra revoter plus tard",
    },
  ],
  exercices: [
    q("e-p5-dc-1", "Dans un vote, combien de voix a chaque personne ?", ["une", "autant qu’elle veut", "selon son âge"], "une", "Et elles comptent toutes pareil : c’est ce qui empêche la loi du plus fort."),
    q("e-p5-dc-2", "Pourquoi le vote est-il secret ?", ["pour qu’on ne puisse pas te menacer ni t’acheter", "pour aller plus vite", "par tradition"], "pour qu’on ne puisse pas te menacer ni t’acheter", "Si l’on savait ce que tu votes, on pourrait te contraindre. L’isoloir sert à ça."),
    q("e-p5-dc-3", "Le résultat d’un vote s’applique…", ["à tous", "seulement à ceux qui ont gagné", "à personne"], "à tous", "Y compris à ceux qui ont voté autrement. C’est le prix de la méthode."),
    q("e-p5-dc-4", "Un vote rend une décision…", ["légitime", "forcément juste", "forcément vraie"], "légitime", "La majorité peut avoir tort. Légitime veut dire : acceptée par tous parce que prise selon la règle."),
    q("e-p5-dc-5", "Peut-on voter pour retirer ses droits à quelqu’un ?", ["non, les droits ne se votent pas", "oui, si la majorité le veut", "oui, si le président est d’accord"], "non, les droits ne se votent pas", "Les droits fondamentaux sont au-dessus des majorités : c’est à ça que servent les déclarations de droits."),
    q("e-p5-dc-6", "Quelle méthode convient quand il n’y a pas de bonne réponse et qu’il faut être équitable ?", ["le tirage au sort", "le vote", "le consensus"], "le tirage au sort", "Par exemple pour décider qui commence une partie."),
    q("e-p5-dc-7", "Quel texte, signé en 1989 par presque tous les pays du monde, protège les droits des enfants ?", ["la Convention internationale des droits de l’enfant", "la Déclaration des droits de l’homme et du citoyen", "la loi de 1905 sur la laïcité"], "la Convention internationale des droits de l’enfant", "Tout enfant a le droit d’être protégé, soigné, instruit, et écouté sur ce qui le concerne. La Déclaration de 1789 protège les droits de tous, et la loi de 1905 concerne la laïcité."),
  ],
};

export const emc: Lecon[] = [
  regles,
  republique,
  differences,
  emotions,
  egalite,
  decider,
];
