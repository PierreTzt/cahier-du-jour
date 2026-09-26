/**
 * Histoire, CM1 — l'année entière.
 *
 * Adossé au **programme d'histoire-géographie du cycle 3 publié au BO n° 22 du
 * 28 mai 2026** (arrêté du 22 avril 2026), appliqué au CM1 à la rentrée 2026.
 *
 * Ce programme est neuf, et il rattache chaque thème à des périodes précises.
 * L'ordre des leçons le suit :
 *
 *   - Thème 1, la vie quotidienne au Moyen Âge (XIe-XIIIe) — périodes 1 et 2
 *   - Thème 2, la monarchie en France (XVIe-XVIIe) — périodes 2 et 3
 *   - Thème 3, explorations et conquêtes (XVe-XVIIe) — période 4
 *   - Thème 4, 1789, une année révolutionnaire — période 5
 *
 * Le programme demande explicitement qu'une place soit faite aux femmes, et
 * que les traces du passé permettent de distinguer le récit historique de la
 * fiction. Les leçons qui suivent s'y tiennent : chacune nomme au moins une
 * femme, et dit d'où l'on sait ce qu'elle raconte.
 *
 * Les champs `reference` reprennent les attendus, repères et mots-clés du
 * programme, thème par thème. Un repère officiel est historiquement inexact :
 * le programme date de 1515 le début du séjour de Léonard de Vinci en France,
 * alors qu'il n'arrive à Amboise qu'en 1516 — 1515 est l'année de l'avènement
 * de François Ier, de Marignan et de l'invitation. La leçon enseigne les deux
 * dates, et l'exercice ne demande que celle qui ne prête pas à discussion.
 *
 * Seul le **gras** est interprété à l'écran (voir `components/Cours.tsx`) ; un
 * astérisque simple s'afficherait tel quel. Les titres d'œuvres vont donc entre
 * guillemets.
 *
 * Rien de tout ceci n'a été relu par un enseignant. Ça doit l'être.
 */

import { e, q, type Lecon } from "./types";

/* ================================================================== */
/* THÈME 1 — La vie quotidienne au Moyen Âge (périodes 1 et 2)         */
/* ================================================================== */

const seigneurie: Lecon = {
  code: "h-p1-seigneurie",
  matiere: "histoire",
  periode: 1,
  titre: "Le seigneur, le château et la seigneurie",
  reference:
    "Situer le Moyen Âge sur une frise chronologique (476-1492) et identifier la période du XIe au XIIIe siècle ; décrire les fonctions d’un château (lieu de protection, lieu de vie du seigneur, symbole de sa puissance) ; décrire le fonctionnement d’une seigneurie (la domination d’un seigneur sur un territoire et les hommes qui y vivent) ; mots-clés : château, seigneur, seigneurie.",
  minutes: 30,
  cours: [
    {
      texte: [
        "Le Moyen Âge est une longue période : de 476 à 1492, soit environ mille ans. C’est plus long que tout ce qui s’est passé depuis.",
        "On le fait commencer en 476, quand disparaît l’Empire romain d’Occident, et finir en 1492, quand Christophe Colomb arrive en Amérique. Ces deux dates sont des repères choisis par les historiens : les gens de l’époque ne savaient pas qu’ils vivaient « au Moyen Âge ».",
        "Cette année, on regarde surtout les XIe, XIIe et XIIIe siècles — le moment des châteaux forts et des cathédrales.",
        "Attention à l’année ronde : 1100 est la dernière année du XIe siècle, et 1101 la première du XIIe.",
      ],
      regle:
        "Le XIe siècle va de 1001 à 1100, le XIIe de 1101 à 1200, le XIIIe de 1201 à 1300. Un siècle porte un numéro d’avance sur ses années : on est au XXIe siècle en 2026.",
    },
    {
      titre: "La seigneurie : un territoire et ses habitants",
      texte: [
        "Une **seigneurie** est un territoire sur lequel un seigneur exerce son pouvoir, ainsi que les gens qui y vivent : un ou plusieurs villages, des champs, des forêts, un moulin, une église.",
        "Le **seigneur** y commande. Il rend la justice, prélève des **redevances** — des paiements en argent, en récoltes ou en journées de travail — et doit en échange protéger ses paysans. C’est un échange déséquilibré, mais c’est un échange.",
        "Le seigneur ne travaille pas la terre : il la fait travailler. Une partie, la **réserve**, est cultivée pour lui ; le reste, les **tenures**, est confié aux paysans contre des redevances.",
        "Le seigneur n’est pas toujours un homme. Quand il meurt, sa veuve ou sa fille peut tenir la seigneurie à sa place : des femmes ont commandé des châteaux et rendu la justice. La plus célèbre est **Aliénor d’Aquitaine**, au XIIe siècle : duchesse d’un immense territoire, elle fut reine de France, puis reine d’Angleterre.",
      ],
    },
    {
      titre: "Le château : trois fonctions à la fois",
      texte: [
        "**Se défendre** : murailles, tours, fossé, pont-levis, meurtrières. Un château fort est d’abord une machine à résister à une attaque.",
        "**Habiter** : le seigneur, sa famille et ses serviteurs y vivent. La grande salle sert aux repas, aux fêtes et aux réunions ; le **donjon**, la tour la plus haute, est le dernier refuge en cas d’attaque.",
        "**Montrer sa puissance** : un château visible de très loin dit qui commande, sans avoir besoin de le dire.",
        "Les premiers châteaux, vers l’an mil, sont en bois, posés sur une butte de terre : la **motte**. Le bois brûle et pourrit ; à partir du XIe siècle, on bâtit peu à peu en pierre, et les châteaux deviennent plus grands et plus solides.",
      ],
      regle:
        "Un château fort n’est pas un palais : c’est à la fois une forteresse, une maison et un message.",
    },
    {
      titre: "Comment le sait-on ?",
      texte: [
        "Beaucoup de châteaux sont encore debout, et on peut les visiter. Les historiens lisent aussi les documents écrits à l’époque, souvent par des moines, et regardent les images peintes dans les livres.",
        "La **tapisserie de Bayeux**, brodée vers 1070, est une bande de tissu de soixante-dix mètres qui raconte la conquête de l’Angleterre par le duc de Normandie : on y voit des mottes, des cavaliers, des bateaux. C’est une trace du passé, pas une histoire inventée.",
        "Les films et les romans de chevaliers, eux, sont des fictions : ils peuvent s’inspirer de l’histoire, mais ils inventent. Quand tu lis un récit sur le Moyen Âge, demande-toi toujours : d’où sort ce qu’on me raconte ?",
      ],
    },
  ],
  exemples: [
    {
      enonce: "Un château est bâti en 1150. À quel siècle appartient-il ?",
      etapes: [
        "Le XIIe siècle va de 1101 à 1200.",
        "1150 tombe dans cet intervalle.",
        "Donc le XIIe siècle — et non le XIe, même si l’année commence par 11.",
      ],
      resultat: "le XIIe siècle",
    },
  ],
  exercices: [
    q("h-p1-se-1", "Le Moyen Âge s’étend de…", ["476 à 1492", "1492 à 1789", "0 à 476"], "476 à 1492", "Environ mille ans, de la fin de l’Empire romain d’Occident à l’arrivée de Christophe Colomb en Amérique."),
    q("h-p1-se-2", "Une tour de pierre est élevée en 1210. De quel siècle date-t-elle ?", ["le XIIe siècle", "le XIIIe siècle", "le XIe siècle"], "le XIIIe siècle", "Le XIIIe siècle va de 1201 à 1300, et 1210 tombe dedans. Un siècle porte un numéro d’avance sur ses années : 1210 commence par 12, et c’est le XIIIe siècle."),
    q("h-p1-se-3", "Qu’est-ce qu’une seigneurie ?", ["un territoire et ses habitants", "un château", "une armée"], "un territoire et ses habitants", "Le seigneur y exerce son pouvoir sur la terre et sur les gens qui l’habitent."),
    q("h-p1-se-4", "Que doit le seigneur à ses paysans, en échange des redevances ?", ["la protection", "de l’argent", "rien"], "la protection", "C’est un échange déséquilibré, mais c’en est un : il rend la justice et protège."),
    q("h-p1-se-5", "Laquelle n’est pas une fonction du château fort ?", ["se défendre", "habiter", "cultiver la terre"], "cultiver la terre", "Le château sert à se défendre, à habiter et à montrer sa puissance. La terre se cultive autour."),
    q("h-p1-se-6", "En quoi étaient bâtis les premiers châteaux ?", ["en bois, sur une motte", "en pierre", "en brique"], "en bois, sur une motte", "Le bois brûle et pourrit : à partir du XIe siècle, on bâtit peu à peu en pierre."),
  ],
  reprise: [
    q("h-p1-se-r1", "Quel événement marque le début du Moyen Âge, en 476 ?", ["la disparition de l’Empire romain d’Occident", "l’arrivée de Christophe Colomb en Amérique", "la construction des premiers châteaux forts"], "la disparition de l’Empire romain d’Occident", "Le Moyen Âge va de 476 à 1492 : de la fin de l’Empire romain d’Occident à l’arrivée de Christophe Colomb en Amérique. Ce sont des repères choisis par les historiens."),
    q("h-p1-se-r2", "Un donjon de pierre est bâti en 1090. À quel siècle appartient-il ?", ["le XIe siècle", "le Xe siècle", "le XIIe siècle"], "le XIe siècle", "Le XIe siècle va de 1001 à 1100, et 1090 tombe dedans. Un siècle porte un numéro d’avance sur ses années : 1090 commence par 10, et c’est le XIe siècle."),
    q("h-p1-se-r3", "Que trouve-t-on dans une seigneurie ?", ["des villages, des champs, des forêts et un moulin", "un château, et rien d’autre", "seulement des soldats"], "des villages, des champs, des forêts et un moulin", "Une seigneurie est tout un territoire, avec les gens qui y vivent : villages, champs, forêts, moulin, église. Le seigneur y exerce son pouvoir."),
    q("h-p1-se-r4", "Dans la seigneurie, qui rend la justice ?", ["le seigneur", "les paysans", "les marchands"], "le seigneur", "Le seigneur commande sur sa seigneurie : il rend la justice, prélève des redevances, et doit en échange protéger ceux qui y vivent."),
    q("h-p1-se-r5", "Un château fort bâti en hauteur, qu’on voit de très loin, sert aussi à…", ["montrer la puissance du seigneur", "faire pousser le blé", "remplacer l’église du village"], "montrer la puissance du seigneur", "Un château a trois fonctions à la fois : se défendre, habiter, et montrer qui commande, sans avoir besoin de le dire."),
    q("h-p1-se-r6", "Pourquoi a-t-on peu à peu remplacé le bois par la pierre pour bâtir les châteaux ?", ["le bois brûle et pourrit", "la pierre coûte moins cher", "le bois était interdit"], "le bois brûle et pourrit", "Les premiers châteaux, vers l’an mil, sont en bois, sur une motte. À partir du XIe siècle, on bâtit peu à peu en pierre : plus grand et plus solide."),
  ],
};

const paysans: Lecon = {
  code: "h-p1-paysans",
  matiere: "histoire",
  periode: 1,
  titre: "La vie des paysannes et des paysans",
  reference:
    "Raconter la vie quotidienne des paysannes et des paysans (calendrier annuel des travaux, obligations envers le seigneur, l’Église) ; connaître les modes de vie des seigneurs, des paysannes et des paysans et des habitants des villes ; décrire les activités des villes au Moyen Âge (marché et foire, artisanat) ; mots-clés : corvée, dîme, paysanne et paysan.",
  minutes: 30,
  cours: [
    {
      texte: [
        "Au Moyen Âge, plus de neuf personnes sur dix travaillent la terre. Quand on parle des gens du Moyen Âge, on parle donc d’abord d’eux — et non des seigneurs, qui sont une poignée.",
        "Une famille paysanne vit dans une maison d’une ou deux pièces, en bois et en terre, au toit de chaume, souvent partagée avec les animaux. On y dort, on y mange, on y travaille ; la lumière vient du feu.",
      ],
    },
    {
      titre: "Une année réglée par les saisons",
      texte: [
        "L’automne : on laboure et on sème le blé et le seigle, qui passeront l’hiver en terre. On vendange aussi, là où il y a des vignes.",
        "L’hiver : on répare les outils, on file la laine, on coupe le bois, on bat le grain au fléau dans la grange. Le travail ne s’arrête pas, il change.",
        "Le printemps : on sème l’orge et l’avoine, on taille la vigne, on sarcle — on arrache les mauvaises herbes des champs.",
        "L’été : les foins, puis la **moisson**, à la faucille, poignée par poignée. C’est le moment le plus dur et le plus décisif de l’année : tout le village y travaille, du plus jeune au plus vieux.",
        "Les femmes travaillent aux champs comme les hommes, et en plus au jardin, au four, au fil et aux animaux. Ce sont elles aussi qui font le pain, la bière et le fromage, et qui soignent les malades.",
      ],
      regle:
        "Le calendrier agricole n’est pas un choix : il est imposé par les saisons. Une moisson perdue, c’est la faim jusqu’à l’année suivante.",
    },
    {
      titre: "Ce qu’ils doivent, et à qui",
      texte: [
        "Au seigneur : la **corvée** — des journées de travail gratuit sur la réserve, pour labourer ses champs, réparer ses chemins ou son château — et des redevances en nature ou en argent pour la terre qu’ils cultivent.",
        "Ils doivent aussi payer pour utiliser le four, le moulin et le pressoir, qui appartiennent au seigneur : on appelle ces paiements les **banalités**.",
        "À l’Église : la **dîme**, environ un dixième de la récolte. Le mot vient de « dixième ».",
        "Ce qui reste sert à nourrir la famille et à garder des semences pour l’an prochain. Il ne reste pas grand-chose : les années de mauvaise récolte, on a faim.",
      ],
      regle:
        "Deux mots à retenir : la **corvée**, du travail gratuit pour le seigneur ; la **dîme**, un dixième de la récolte pour l’Église.",
    },
    {
      titre: "Et dans les villes",
      texte: [
        "À partir du XIe siècle, les villes grandissent. On y trouve des **artisans** regroupés par métier — boulangers, tisserands, forgerons, chacun dans sa rue —, un **marché** chaque semaine, et de grandes **foires** où viennent des marchands de très loin.",
        "Dans beaucoup de villes, un paysan qui s’y est installé depuis un an et un jour sans être réclamé par son seigneur devient libre. « L’air de la ville rend libre », dit-on. C’est pourquoi les villes attirent.",
      ],
    },
    {
      titre: "Comment le sait-on ?",
      texte: [
        "Les paysans ne savaient presque jamais écrire : ce sont les seigneurs et les moines qui ont noté ce qu’on leur devait, et ces registres existent encore.",
        "On a aussi des images : des calendriers peints, mois par mois, montrent les labours, la moisson, les vendanges. Le plus célèbre, les « Très Riches Heures du duc de Berry », a été peint un peu plus tard, vers 1412-1416, mais les gestes des champs n’avaient pas changé.",
      ],
    },
  ],
  exemples: [
    {
      enonce: "À quelle saison se fait la moisson, et pourquoi est-ce le moment le plus important de l’année ?",
      etapes: [
        "La moisson se fait en été, quand le blé est mûr.",
        "C’est la récolte dont dépend toute l’alimentation de l’année.",
        "Une moisson perdue — grêle, sécheresse, pluie au mauvais moment — signifie la faim pendant douze mois.",
      ],
      resultat: "en été · toute l’année en dépend",
    },
  ],
  exercices: [
    q("h-p1-pa-1", "Quelle part de la population travaille la terre au Moyen Âge ?", ["plus de neuf sur dix", "environ la moitié", "une sur dix"], "plus de neuf sur dix", "Parler des gens du Moyen Âge, c’est parler d’abord des paysans."),
    q("h-p1-pa-2", "À quelle saison les paysans taillent-ils la vigne ?", ["en automne", "en été", "au printemps"], "au printemps", "Au printemps, on taille la vigne. Les vendanges, où l’on cueille le raisin, viennent plus tard dans l’année."),
    e("h-p1-pa-3", "Les journées de travail gratuit que le paysan doit à son seigneur s’appellent la… ? Écris le mot qui manque.", "corvée", "La corvée : des journées de travail gratuit sur les terres du seigneur, ou pour réparer ses chemins et son château."),
    e("h-p1-pa-4", "La part de la récolte versée à l’Église s’appelle la… ? Écris le mot qui manque.", "dîme", "La dîme : environ un dixième de la récolte, donné à l’Église. Le mot vient de « dixième »."),
    q("h-p1-pa-5", "Que faisaient les paysans en hiver ?", ["réparer les outils et filer la laine", "rien", "moissonner"], "réparer les outils et filer la laine", "Le travail ne s’arrête pas en hiver : il change de nature. On bat aussi le grain, et on coupe le bois."),
    q("h-p1-pa-6", "Pourquoi les villes attiraient-elles les paysans ?", ["on pouvait y devenir libre", "on y mangeait mieux", "il y faisait plus chaud"], "on pouvait y devenir libre", "Dans beaucoup de villes, un paysan installé depuis un an et un jour échappait à son seigneur."),
  ],
  reprise: [
    q("h-p1-pa-r1", "Dans quel genre de maison vit le plus souvent une famille paysanne au Moyen Âge ?", ["une maison d’une ou deux pièces, au toit de chaume", "une maison de pierre à plusieurs étages", "une tour du château"], "une maison d’une ou deux pièces, au toit de chaume", "Une maison en bois et en terre, souvent partagée avec les animaux. On y dort, on y mange, on y travaille, et la lumière vient du feu."),
    q("h-p1-pa-r2", "À quelle saison laboure-t-on et sème-t-on le blé et le seigle ?", ["en automne", "en été", "au printemps"], "en automne", "Semés à l’automne, le blé et le seigle passent l’hiver en terre, puis on les moissonne l’été suivant."),
    e("h-p1-pa-r4", "Sur une récolte de 30 sacs de blé, un paysan en donne 3 à l’Église. Comment s’appelle cette part ? Écris le mot.", "dîme", "La dîme : environ un dixième de la récolte, pour l’Église. 3 sacs sur 30, c’est un dixième."),
    q("h-p1-pa-r5", "Que font les paysans au printemps ?", ["semer l’orge et l’avoine, arracher les mauvaises herbes", "moissonner le blé à la faucille", "vendanger le raisin"], "semer l’orge et l’avoine, arracher les mauvaises herbes", "Au printemps, on sème l’orge et l’avoine, on taille la vigne et on sarcle. La moisson vient en été, les vendanges en automne."),
    e("h-p1-pa-r3", "Plusieurs jours par an, un paysan laboure les champs du seigneur sans être payé. Comment s’appelle ce travail ? Écris le mot.", "corvée", "La corvée : des journées de travail gratuit pour le seigneur, sur ses terres, ses chemins ou son château."),
    q("h-p1-pa-r6", "Dans beaucoup de villes, au bout de combien de temps un paysan qui s’y était installé devenait-il libre, si son seigneur ne l’avait pas réclamé ?", ["un an et un jour", "une semaine", "dix ans"], "un an et un jour", "« L’air de la ville rend libre », disait-on : un an et un jour sans être réclamé, et le paysan échappait à son seigneur. C’est pourquoi les villes attiraient."),
  ],
};

const eglise: Lecon = {
  code: "h-p2-eglise",
  matiere: "histoire",
  periode: 2,
  titre: "L’Église, l’art roman et l’art gothique",
  reference:
    "Connaître la paroisse (l’encadrement par l’Église de la vie des femmes et des hommes de leur naissance à leur mort) ; décrire le rôle social de l’Église (assistance aux pauvres et aux malades, enseignement) ; différencier l’art roman de l’art gothique ; repères : l’abbaye de Cluny, Notre-Dame de Paris ; mots-clés : abbaye, art gothique, art roman, cathédrale, clergé, Église, paroisse.",
  minutes: 30,
  cours: [
    {
      texte: [
        "Au Moyen Âge, presque tout le monde est chrétien, et l’Église encadre la vie entière : du baptême, quelques jours après la naissance, jusqu’à l’enterrement. Elle est partout, et pas seulement pour la religion.",
        "Chaque village ou quartier forme une **paroisse** : une église, un prêtre — le curé —, et tous les habitants autour, qui se retrouvent à la messe le dimanche. Les cloches de la paroisse rythment la journée.",
        "On appelle **clergé** l’ensemble des gens d’Église : le pape, les évêques, les prêtres, les moines et les moniales.",
      ],
    },
    {
      titre: "Ce que l’Église fait, en plus du culte",
      texte: [
        "Elle **soigne** : les hôpitaux — on dit hôtels-Dieu — sont tenus par des religieux et des religieuses.",
        "Elle **assiste** les pauvres, distribue du pain, accueille les voyageurs et les pèlerins.",
        "Elle **enseigne** : presque toutes les écoles sont les siennes, et les moines copient à la main les livres qui nous sont parvenus. Sans eux, la plupart des textes antiques auraient disparu.",
        "Elle **mesure le temps** : les cloches donnent l’heure, et le calendrier des fêtes — Noël, Pâques, la Toussaint — règle l’année.",
      ],
      regle:
        "Dans une société sans État organisé, l’Église tient les fonctions que nous confions aujourd’hui à l’école et à l’hôpital.",
    },
    {
      titre: "L’abbaye et la cathédrale",
      texte: [
        "Une **abbaye** est un grand monastère : des moines — ou des moniales, quand ce sont des femmes — y vivent ensemble, à l’écart du monde, sous l’autorité d’un abbé ou d’une abbesse. Ils prient plusieurs fois par jour, travaillent, copient des livres, soignent, accueillent.",
        "Une **cathédrale** est l’église de l’évêque, dans une ville. C’est le plus grand bâtiment de la région, et souvent le plus beau : toute la ville participe à sa construction, qui dure des dizaines d’années.",
        "**Hildegarde de Bingen**, abbesse au XIIe siècle, a écrit des livres de médecine et composé de la musique qu’on joue encore aujourd’hui. Une abbesse commande, écrit, décide : c’est l’un des rares pouvoirs ouverts aux femmes au Moyen Âge.",
      ],
    },
    {
      titre: "L’art roman : lourd, sombre, solide",
      texte: [
        "Aux XIe et XIIe siècles, on construit avec des murs très épais, des fenêtres petites, et des voûtes en **plein cintre** — des demi-cercles.",
        "Pourquoi si épais ? Parce que la voûte de pierre pousse vers l’extérieur, et que seuls des murs massifs peuvent la retenir. De petites fenêtres, donc peu de lumière : l’intérieur est sombre et recueilli.",
        "L’abbaye de Cluny, en Bourgogne, en fut le grand exemple : au XIIe siècle, son église était la plus grande de toute la chrétienté. Elle a été presque entièrement démolie après la Révolution — il en reste une tour et un morceau. Mais des églises romanes entières sont encore debout, comme Saint-Sernin à Toulouse ou l’abbatiale de Conques.",
      ],
    },
    {
      titre: "L’art gothique : haut, clair, élancé",
      texte: [
        "À partir du milieu du XIIe siècle, des solutions nouvelles changent tout : l’**arc brisé** — en pointe —, la voûte sur **croisée d’ogives**, et l’**arc-boutant**, un bras de pierre qui, à l’extérieur, reporte la poussée de la voûte sur de gros piliers.",
        "Du coup les murs n’ont plus à tout porter : on peut les percer largement. D’où des vitraux immenses, qui racontent la Bible en images colorées, et des bâtiments beaucoup plus hauts.",
        "Notre-Dame de Paris, commencée en 1163 et achevée au XIIIe siècle, en est l’exemple le plus connu. Ses voûtes montent à trente-trois mètres, la hauteur d’un immeuble de dix étages.",
      ],
      regle:
        "Roman : arc en demi-cercle, murs épais, peu de lumière. Gothique : arc en pointe, arcs-boutants, grands vitraux, beaucoup de lumière.",
    },
  ],
  exemples: [
    {
      enonce: "Une église a de petites fenêtres, des murs très épais et des arcs en demi-cercle. Roman ou gothique ?",
      etapes: [
        "L’arc en demi-cercle s’appelle le plein cintre : c’est roman.",
        "Les murs épais et les petites fenêtres confirment : la voûte pousse vers l’extérieur et il faut des murs massifs.",
        "Sans arc-boutant, impossible de percer de grandes ouvertures.",
      ],
      resultat: "roman",
    },
  ],
  exercices: [
    q("h-p2-eg-1", "Laquelle de ces fonctions l’Église n’assurait-elle pas au Moyen Âge ?", ["soigner les malades", "enseigner", "lever une armée royale"], "lever une armée royale", "Elle soignait, assistait, enseignait et mesurait le temps. L’armée du roi, c’est l’affaire du roi."),
    q("h-p2-eg-2", "Qui copiait les livres au Moyen Âge ?", ["les moines", "les imprimeurs", "les seigneurs"], "les moines", "L’imprimerie n’existe pas encore. Sans ces copies faites à la main, la plupart des textes antiques auraient disparu."),
    q("h-p2-eg-3", "Une église aux arcs en demi-cercle et aux murs épais est…", ["romane", "gothique"], "romane", "L’arc en plein cintre et les murs massifs caractérisent l’art roman."),
    q("h-p2-eg-4", "Qu’est-ce qui permet les grands vitraux gothiques ?", ["l’arc-boutant", "un meilleur verre", "des murs plus épais"], "l’arc-boutant", "Il reporte la poussée de la voûte à l’extérieur : les murs n’ont plus à tout porter et peuvent être percés."),
    q("h-p2-eg-5", "Notre-Dame de Paris est un exemple d’art…", ["gothique", "roman"], "gothique", "Commencée en 1163 : voûtes sur croisée d’ogives, arcs-boutants, grands vitraux, grande hauteur."),
    q("h-p2-eg-6", "Pourquoi les églises romanes sont-elles sombres ?", ["les murs doivent porter la voûte", "on aimait l’obscurité", "le verre coûtait cher"], "les murs doivent porter la voûte", "Sans arc-boutant, on ne peut pas percer de grandes fenêtres sans fragiliser le bâtiment."),
  ],
};

/* ================================================================== */
/* THÈME 2 — La monarchie en France (périodes 2 et 3)                  */
/* ================================================================== */

const renaissance: Lecon = {
  code: "h-p2-renaissance",
  matiere: "histoire",
  periode: 2,
  titre: "François Ier et la Renaissance",
  reference:
    "Connaître un roi mécène de la Renaissance, François Ier (1515-1547) ; expliquer avec l’exemple de François Ier et de Léonard de Vinci le rôle d’un roi dans la diffusion de la Renaissance ; situer son règne sur une frise chronologique ; repère du programme : 1515, début du séjour de Léonard de Vinci en France, jusqu’à sa mort en 1519 (l’invitation suit Marignan, en 1515 ; l’installation à Amboise date de 1516) ; mots-clés : artiste, mécène.",
  minutes: 30,
  cours: [
    {
      texte: [
        "Au XVIe siècle, une façon nouvelle de penser et de créer arrive d’Italie en France. On l’appelle la **Renaissance** — une renaissance de l’art et du savoir de l’Antiquité, que l’on redécouvre et que l’on admire.",
        "En Italie, elle a commencé dès le XVe siècle, dans des villes riches comme Florence. En France, elle s’épanouit sous François Ier.",
      ],
    },
    {
      titre: "Ce qui change",
      texte: [
        "En peinture, on apprend à donner l’illusion de la profondeur : c’est la **perspective**. Avant, les personnages importants étaient peints plus grands ; maintenant, les plus lointains sont plus petits, comme dans la réalité.",
        "On observe le corps humain, la nature, le ciel — et on cherche à comprendre, pas seulement à représenter. Léonard de Vinci remplit des carnets de dessins d’oiseaux, de machines, de rivières, de visages.",
        "L’**imprimerie**, mise au point par Gutenberg vers 1450, permet de copier un livre en centaines d’exemplaires au lieu d’un seul à la main. Les idées circulent beaucoup plus vite, et beaucoup moins cher.",
      ],
      regle:
        "Sans l’imprimerie, la Renaissance serait restée le fait de quelques centaines de personnes.",
    },
    {
      titre: "Un roi mécène",
      texte: [
        "**François Ier** devient roi en **1515**, à vingt ans. La même année, il gagne en Italie la bataille de Marignan. Il y découvre les artistes italiens, et il les fait venir.",
        "Un **mécène** est quelqu’un qui paie des artistes pour qu’ils puissent créer. François Ier fait construire des châteaux — Chambord, commencé en 1519, Fontainebleau — et attire des peintres, des sculpteurs, des savants.",
        "Il invite **Léonard de Vinci**, qui arrive en France en 1516 et s’installe au Clos Lucé, près d’Amboise, avec ses carnets et ses tableaux. Il y meurt en 1519. La **Joconde**, qu’il avait emportée, est en France depuis ce moment-là : c’est pour cela qu’elle est au Louvre.",
        "La sœur du roi, **Marguerite de Navarre**, écrit elle-même des poèmes et des contes, et protège les écrivains. Les femmes de la cour lisent, discutent, commandent des œuvres : la Renaissance passe aussi par elles.",
      ],
      regle:
        "1515 : François Ier devient roi. 1516-1519 : Léonard de Vinci vit en France, invité par le roi.",
    },
    {
      titre: "Ce qu’un roi y gagne",
      texte: [
        "Ce n’est pas seulement du goût. Un roi entouré des meilleurs artistes d’Europe montre sa puissance autrement que par la guerre : ses châteaux et ses tableaux disent que la France est un grand royaume.",
        "François Ier impose aussi le **français** à la place du latin dans les actes officiels, par l’ordonnance de Villers-Cotterêts, en 1539. C’est une décision politique : la langue du roi devient celle de l’administration, des jugements et des registres.",
        "En 1530, il crée des « lecteurs royaux », des savants payés pour enseigner le grec, l’hébreu et les mathématiques : c’est l’ancêtre du Collège de France.",
      ],
    },
  ],
  exemples: [
    {
      enonce: "Pourquoi la Joconde se trouve-t-elle en France ?",
      etapes: [
        "François Ier, roi depuis 1515, invite Léonard de Vinci en France.",
        "Léonard arrive en 1516, s’installe près d’Amboise et apporte ses œuvres avec lui.",
        "Il y meurt en 1519 ; ses tableaux restent en France.",
      ],
      resultat: "parce que François Ier y a invité Léonard de Vinci",
    },
  ],
  exercices: [
    q("h-p2-re-1", "Que veut dire « Renaissance » ?", ["la redécouverte de l’art antique", "la naissance d’un roi", "une nouvelle religion"], "la redécouverte de l’art antique", "Une renaissance de l’art et du savoir de l’Antiquité, venue d’Italie."),
    e("h-p2-re-2", "En quelle année François Ier devient-il roi de France ?", "1515", "1515 : il monte sur le trône et gagne la bataille de Marignan. Il invite ensuite Léonard de Vinci, qui arrive en France en 1516 et y meurt en 1519."),
    q("h-p2-re-3", "Qu’est-ce qu’un mécène ?", ["quelqu’un qui finance des artistes", "un peintre", "un architecte"], "quelqu’un qui finance des artistes", "François Ier en est l’exemple : il fait venir et entretient les artistes."),
    q("h-p2-re-4", "Qu’apporte l’imprimerie à la Renaissance ?", ["les idées circulent plus vite", "de plus beaux tableaux", "des châteaux plus grands"], "les idées circulent plus vite", "Un livre en centaines d’exemplaires au lieu d’un seul copié à la main."),
    q("h-p2-re-5", "Qu’est-ce que la perspective en peinture ?", ["l’illusion de la profondeur", "l’usage de l’or", "la peinture sur bois"], "l’illusion de la profondeur", "Les objets lointains sont peints plus petits. Avant, la taille indiquait l’importance."),
    q("h-p2-re-6", "Quel château François Ier a-t-il fait construire ?", ["Chambord", "Versailles", "la Bastille"], "Chambord", "Chambord et Fontainebleau témoignent de son rôle de mécène. Versailles est l’œuvre de Louis XIV, un siècle plus tard ; la Bastille est une forteresse du Moyen Âge."),
  ],
};

const henriIV: Lecon = {
  code: "h-p3-henri-iv",
  matiere: "histoire",
  periode: 3,
  titre: "Henri IV et les guerres de religion",
  reference:
    "Connaître un roi pacificateur du royaume, Henri IV (1589-1610) ; expliquer comment Henri IV pacifie le royaume de France dans le contexte des guerres de religion ; situer son règne sur une frise chronologique ; repère : 1598, édit de Nantes ; mots-clés : catholique, protestant, guerres de religion.",
  minutes: 30,
  cours: [
    {
      texte: [
        "Au XVIe siècle, la France se déchire pendant presque quarante ans pour une question de religion. Comprendre comment on en sort apprend quelque chose sur la paix en général.",
      ],
    },
    {
      titre: "Deux façons d’être chrétien",
      texte: [
        "Au début du siècle, des chrétiens reprochent à l’Église catholique ses richesses et certaines de ses pratiques. Un moine allemand, Luther, le dit tout haut en 1517 ; un Français, Calvin, le suit. Ils veulent réformer l’Église : on les appellera **protestants**.",
        "Ils veulent lire la Bible eux-mêmes, dans leur langue — ce que l’imprimerie rend possible.",
        "Les **catholiques** restent fidèles au pape et à l’Église de Rome.",
        "Le désaccord est religieux, mais il devient vite politique : chaque camp a ses seigneurs, ses villes, ses armées. En France, les protestants sont une minorité, peut-être une personne sur dix.",
      ],
    },
    {
      titre: "Presque quarante ans de guerre",
      texte: [
        "De 1562 à 1598, huit guerres se succèdent. Massacres, sièges, assassinats.",
        "Pendant ces années, la reine mère, **Catherine de Médicis**, gouverne souvent à la place de ses fils, rois trop jeunes ou trop faibles. Elle essaie d’abord de réconcilier les deux camps ; elle n’y parvient pas.",
        "Le pire épisode est le **massacre de la Saint-Barthélemy** : à Paris, le 24 août 1572, puis en province dans les semaines qui suivent, des milliers de protestants sont tués.",
        "Le royaume est ruiné, les campagnes dévastées, et personne ne peut gagner définitivement.",
      ],
      regle:
        "Ni les catholiques ni les protestants ne pouvaient l’emporter. C’est cette impasse qui rend la paix possible.",
    },
    {
      titre: "Henri IV : changer de camp pour faire la paix",
      texte: [
        "Henri de Navarre a été élevé dans la religion protestante par sa mère, **Jeanne d’Albret**, reine de Navarre. Il devient roi de France en 1589, à la mort d’Henri III. Mais la majorité du royaume est catholique et refuse un roi protestant : Paris lui ferme ses portes.",
        "En 1593, il se convertit au catholicisme. La phrase « Paris vaut bien une messe » lui est attribuée — elle n’est sans doute pas de lui, mais elle résume son calcul.",
        "En 1598, il signe l’**édit de Nantes** : les protestants obtiennent la liberté de croire, et celle de pratiquer leur culte dans certaines villes, tout en restant minoritaires dans un royaume catholique.",
        "Ce n’est pas la tolérance telle que nous l’entendons. C’est un compromis, écrit pour arrêter une guerre — et il l’arrête.",
      ],
      regle:
        "L’édit de Nantes ne dit pas que toutes les religions se valent. Il dit qu’on ne se tuera plus pour ça.",
    },
    {
      titre: "Un roi populaire, et une légende",
      texte: [
        "Henri IV règne jusqu’en 1610, où il est assassiné à Paris par un fanatique. Il a remis le royaume en ordre, et les Français ont gardé de lui l’image d’un roi proche du peuple.",
        "On raconte qu’il voulait que chaque paysan ait « une poule au pot » le dimanche. Cette phrase a été écrite cinquante ans après sa mort : c’est une légende, qui dit ce qu’on aimait chez lui plus que ce qu’il a vraiment dit. L’histoire, c’est aussi savoir faire la différence.",
      ],
    },
  ],
  exemples: [
    {
      enonce: "Pourquoi Henri IV se convertit-il au catholicisme ?",
      etapes: [
        "Il est protestant, mais la majorité du royaume est catholique.",
        "Beaucoup refusent de reconnaître un roi protestant, et Paris lui est fermée.",
        "En se convertissant, il devient acceptable pour la majorité — et il peut alors imposer la paix aux deux camps.",
      ],
      resultat: "pour être accepté et pouvoir pacifier le royaume",
    },
  ],
  exercices: [
    e("h-p3-hi-1", "En quelle année Henri IV signe-t-il l’édit de Nantes ?", "1598", "L’édit de Nantes met fin aux guerres de religion en accordant aux protestants la liberté de culte dans certaines villes."),
    q("h-p3-hi-2", "Que voulaient les protestants au XVIe siècle ?", ["réformer l’Église", "supprimer la religion", "chasser le roi"], "réformer l’Église", "Ils reprochaient à l’Église catholique ses richesses et certaines pratiques, et voulaient lire la Bible eux-mêmes."),
    q("h-p3-hi-3", "Comment appelle-t-on le massacre de protestants d’août 1572 ?", ["la Saint-Barthélemy", "la Terreur", "la Fronde"], "la Saint-Barthélemy", "À Paris le 24 août 1572, puis en province : des milliers de protestants tués."),
    q("h-p3-hi-4", "Henri IV était d’abord…", ["protestant", "catholique"], "protestant", "Élevé dans la religion protestante, il se convertit au catholicisme en 1593 pour être accepté par la majorité du royaume."),
    q("h-p3-hi-5", "Qu’accorde l’édit de Nantes aux protestants ?", ["la liberté de culte dans certaines villes", "le pouvoir", "l’égalité complète"], "la liberté de culte dans certaines villes", "C’est un compromis pour arrêter la guerre, pas une égalité des religions."),
    q("h-p3-hi-6", "Pourquoi la paix devient-elle possible en 1598 ?", ["aucun camp ne pouvait gagner", "les protestants ont gagné", "le pape l’a ordonné"], "aucun camp ne pouvait gagner", "Après presque quarante ans, le royaume est ruiné et l’impasse est complète."),
  ],
};

const louisXIV: Lecon = {
  code: "h-p3-louis-xiv",
  matiere: "histoire",
  periode: 3,
  titre: "Louis XIV, Versailles et la société d’ordres",
  reference:
    "Connaître un roi qui affirme son pouvoir absolu, Louis XIV (1643-1715) ; expliquer comment le château de Versailles exprime le pouvoir absolu du roi ; décrire le rôle des femmes à la Cour de Versailles ; décrire l’organisation de la société d’ordres, majoritairement composée de paysans ; repère : 1643-1715, règne de Louis XIV ; mots-clés : monarchie absolue, noblesse, société d’ordres.",
  minutes: 30,
  cours: [
    {
      texte: [
        "Louis XIV devient roi en 1643, à quatre ans. Sa mère, **Anne d’Autriche**, gouverne à sa place pendant son enfance, avec le cardinal Mazarin : on dit qu’elle est **régente**.",
        "Il règne de 1643 à 1715 : soixante-douze ans, le plus long règne de l’histoire de France. À partir de 1661, à la mort de Mazarin, il gouverne seul, sans premier ministre.",
        "On appelle son pouvoir **absolu** : il ne le partage avec personne et ne rend de comptes qu’à Dieu. C’est la **monarchie absolue**. Le roi fait les lois, décide de la guerre et de la paix, nomme qui il veut.",
      ],
      regle:
        "Monarchie absolue : le roi décide de tout, seul, et ne doit d’explication qu’à Dieu.",
    },
    {
      titre: "Versailles, un outil de pouvoir",
      texte: [
        "Louis XIV transforme un pavillon de chasse de son père en un palais immense, et s’y installe avec sa cour en 1682. Des milliers de personnes y vivent.",
        "Ce n’est pas de la vanité, c’est du calcul. En obligeant les grands seigneurs à vivre auprès de lui, il les surveille et les occupe : ils s’y disputent l’honneur de lui tendre sa chemise au lieu de comploter sur leurs terres.",
        "Tout y célèbre le roi : la galerie des Glaces, les jardins tracés au cordeau par Le Nôtre, le Soleil comme emblème — on l’appelle le Roi-Soleil. La nature elle-même paraît lui obéir.",
        "Et tout y est réglé par l’**étiquette** : qui entre, qui s’assoit, dans quel ordre on parle. Chaque geste dit un rang. Le lever du roi, le matin, est une cérémonie à laquelle on se bat pour assister.",
      ],
      regle:
        "Versailles sert à trois choses : montrer la puissance, surveiller la noblesse, et l’occuper.",
    },
    {
      titre: "Les femmes à la Cour",
      texte: [
        "Elles n’ont pas de charge officielle, et pourtant certaines ont une influence réelle : elles tiennent des salons, font et défont des réputations, obtiennent des places pour leurs proches.",
        "**Madame de Maintenon**, que le roi épouse en secret vers 1683, pèse sur les décisions de la fin du règne. Elle fonde à Saint-Cyr, en 1686, une école pour les filles de la noblesse pauvre — une idée neuve à l’époque.",
        "**Madame de Sévigné**, par les centaines de lettres qu’elle écrit à sa fille, nous a laissé un témoignage précieux sur la vie de la Cour : les fêtes, les intrigues, les rumeurs. C’est une source pour les historiens.",
        "Leur pouvoir passe par leur **crédit** auprès du roi — la confiance qu’il leur accorde — et non par une fonction. Ce qui le rend puissant et fragile à la fois : une disgrâce, et tout s’efface.",
      ],
    },
    {
      titre: "Trois ordres, et une réalité",
      texte: [
        "On appelle **Ancien Régime** la façon dont la France est organisée avant la Révolution de 1789. La société y est divisée en trois **ordres** : le **clergé** (les gens d’Église), la **noblesse** (les seigneurs et leurs familles), et le **tiers état** — tous les autres.",
        "Les deux premiers ordres ont des **privilèges** : ils ne paient pas la taille, le principal impôt, et ont des droits particuliers — porter l’épée, chasser, être jugés à part.",
        "Mais le tiers état représente environ 98 pour cent de la population. Il paie donc presque tout l’impôt, et il est composé surtout de paysans. On y trouve aussi les artisans, les marchands, les bourgeois des villes.",
        "Cette disproportion est ce qui fera tout exploser un siècle plus tard.",
      ],
      regle:
        "Deux ordres privilégiés, 2 pour cent de la population. Le tiers état, 98 pour cent, paie l’impôt.",
    },
  ],
  exemples: [
    {
      enonce: "Pourquoi Louis XIV oblige-t-il les grands seigneurs à vivre à Versailles ?",
      etapes: [
        "Sur leurs terres, les grands seigneurs ont leurs propres forces et peuvent comploter.",
        "À Versailles, ils sont sous son regard en permanence.",
        "Et l’étiquette les occupe : obtenir une faveur du roi devient plus important que s’opposer à lui.",
      ],
      resultat: "pour les surveiller et les occuper",
    },
  ],
  exercices: [
    e("h-p3-lo-1", "En quelle année commence le règne de Louis XIV ? Réponds par l’année.", "1643", "Il règne de 1643 à 1715, soit soixante-douze ans — le plus long règne de l’histoire de France."),
    q("h-p3-lo-2", "Que veut dire « pouvoir absolu » ?", ["le roi ne partage son pouvoir avec personne", "le roi est très aimé", "le roi est riche"], "le roi ne partage son pouvoir avec personne", "Il gouverne seul et ne rend de comptes qu’à Dieu : c’est la monarchie absolue."),
    q("h-p3-lo-3", "Pourquoi Louis XIV fait-il venir la noblesse à Versailles ?", ["pour la surveiller et l’occuper", "pour lui faire plaisir", "pour agrandir le château"], "pour la surveiller et l’occuper", "Sur leurs terres, les grands seigneurs pouvaient comploter."),
    q("h-p3-lo-4", "Quels sont les trois ordres de la société d’Ancien Régime ?", ["clergé, noblesse, tiers état", "roi, nobles, paysans", "riches, moyens, pauvres"], "clergé, noblesse, tiers état", "Les deux premiers ont des privilèges ; le tiers état rassemble tous les autres."),
    q("h-p3-lo-5", "Quelle part de la population représente le tiers état ?", ["environ 98 pour cent", "environ la moitié", "environ 10 pour cent"], "environ 98 pour cent", "Et il paie presque tout l’impôt, puisque les deux autres ordres en sont largement exemptés."),
    q("h-p3-lo-6", "Comment les femmes exerçaient-elles une influence à la Cour ?", ["par la confiance que le roi leur accordait", "par des charges officielles", "elles n’en avaient aucune"], "par la confiance que le roi leur accordait", "Sans fonction officielle, mais avec un pouvoir réel — et fragile : c’est ce qu’on appelait leur crédit auprès du roi."),
  ],
};

/* ================================================================== */
/* THÈME 3 — Explorations et conquêtes (période 4)                     */
/* ================================================================== */

const explorations: Lecon = {
  code: "h-p4-explorations",
  matiere: "histoire",
  periode: 4,
  titre: "Les grandes explorations",
  reference:
    "Connaître les progrès techniques qui ont permis aux Européens de s’aventurer vers de nouveaux territoires ; mémoriser le nom de plusieurs inventions permettant la navigation au grand large ; repères : 1492, Christophe Colomb débarque en Amérique ; 1519-1522, l’expédition de Magellan fait le tour du monde ; mots-clés : boussole, caravelle, carte.",
  minutes: 30,
  cours: [
    {
      texte: [
        "Pendant longtemps, les navires européens longent les côtes, sans jamais les perdre de vue. À la fin du XVe siècle, ils commencent à traverser les océans. Ce n’est pas un coup de courage : c’est devenu possible.",
        "Les Portugais ouvrent la voie, en descendant peu à peu le long des côtes d’Afrique. En 1498, Vasco de Gama atteint l’Inde en contournant l’Afrique par le sud.",
      ],
    },
    {
      titre: "Ce qui a rendu la traversée possible",
      texte: [
        "La **boussole**, venue de Chine : son aiguille indique le nord même sans voir le soleil ni les étoiles. Sans elle, on ne sait plus où l’on va dès que le ciel se couvre.",
        "L’**astrolabe** et le quadrant : ils mesurent la hauteur du soleil ou d’une étoile au-dessus de l’horizon, ce qui permet de calculer la **latitude** — à quelle distance de l’équateur on se trouve, vers le nord ou vers le sud.",
        "La **caravelle** : un navire plus petit mais plus maniable, avec un gouvernail fixé à l’arrière et des voiles triangulaires qui permettent d’avancer même quand le vent n’est pas dans le dos.",
        "Et les **cartes**, de plus en plus précises, qui se corrigent à chaque voyage : chaque capitaine qui revient rapporte un bout de côte de plus.",
      ],
      regle:
        "Aucune de ces inventions ne suffit seule. C’est leur combinaison qui rend la haute mer navigable.",
    },
    {
      titre: "Pourquoi partir",
      texte: [
        "Pour les **épices** — poivre, cannelle, girofle — qui valent très cher en Europe et viennent d’Asie par des intermédiaires, chacun prenant sa part au passage.",
        "Pour l’**or** et l’argent, les métaux précieux.",
        "Pour ouvrir une route maritime vers l’Asie, les routes terrestres étant contrôlées par d’autres.",
        "Pour répandre la religion chrétienne : les rois d’Espagne et du Portugal y tiennent.",
        "Et pour la gloire : un capitaine qui réussit devient riche et célèbre.",
      ],
    },
    {
      titre: "Deux voyages qui changent la carte",
      texte: [
        "Christophe Colomb, un navigateur italien, est persuadé qu’on peut atteindre l’Asie en partant vers l’ouest. Il cherche pendant des années quelqu’un pour payer l’expédition ; c’est la reine **Isabelle de Castille**, en Espagne, qui accepte.",
        "En **1492**, avec trois navires et environ quatre-vingt-dix hommes, il traverse l’Atlantique en cinq semaines et débarque, le 12 octobre, sur une petite île des Bahamas, puis à Cuba. Il mourra en croyant avoir atteint les Indes — d’où le nom d’« Indiens » donné aux habitants d’Amérique, une erreur qui a duré.",
        "De **1519 à 1522**, l’expédition de Magellan fait le tour du monde. Magellan meurt en route, aux Philippines ; c’est Elcano qui ramène l’unique navire survivant, avec dix-huit hommes sur les quelque deux cent quarante partis.",
        "Les savants savaient depuis l’Antiquité que la Terre est ronde. Mais ce voyage le vérifie par l’expérience — on en a fait le tour — et montre qu’elle est bien plus grande qu’on ne le pensait.",
        "Les Français s’y mettent plus tard : en 1534, Jacques Cartier, envoyé par François Ier, atteint le Canada et, l’année suivante, remonte le fleuve Saint-Laurent.",
      ],
      regle:
        "Colomb n’a pas découvert un continent vide : des millions de personnes y vivaient. « Découverte » dit le point de vue européen, pas la réalité.",
    },
  ],
  exemples: [
    {
      enonce: "Pourquoi la boussole était-elle indispensable pour traverser un océan ?",
      etapes: [
        "En longeant les côtes, on se repère avec ce qu’on voit.",
        "En haute mer, il n’y a rien à voir — et si le ciel se couvre, ni soleil ni étoiles.",
        "La boussole indique le nord dans tous les cas : sans elle, on navigue à l’aveugle.",
      ],
      resultat: "elle indique le nord même sans repère visible",
    },
  ],
  exercices: [
    e("h-p4-ex-1", "En quelle année Christophe Colomb débarque-t-il en Amérique ?", "1492", "Le 12 octobre 1492. Il cherchait une route vers l’Asie par l’ouest et mourut en croyant avoir atteint les Indes."),
    q("h-p4-ex-2", "Quel instrument indique le nord ?", ["la boussole", "l’astrolabe", "le sextant"], "la boussole", "Venue de Chine, elle fonctionne même quand le ciel est couvert. L’astrolabe, lui, sert à calculer la latitude."),
    q("h-p4-ex-3", "Comment appelle-t-on le navire des grandes explorations ?", ["la caravelle", "la galère", "le drakkar"], "la caravelle", "Plus petite mais plus maniable, avec un gouvernail à l’arrière et des voiles triangulaires."),
    q("h-p4-ex-4", "Que montre le voyage de Magellan ?", ["que l’on peut faire le tour de la Terre", "que l’Amérique est vide", "que l’Asie est proche"], "que l’on peut faire le tour de la Terre", "De 1519 à 1522, ses navires font le tour du monde : la Terre est bien un globe, et elle est beaucoup plus grande qu’on ne le croyait."),
    q("h-p4-ex-5", "Pourquoi les Européens cherchaient-ils une route vers l’Asie ?", ["pour les épices", "pour le climat", "pour la langue"], "pour les épices", "Poivre, cannelle et girofle valaient très cher et passaient par des intermédiaires."),
    q("h-p4-ex-6", "Pourquoi a-t-on appelé « Indiens » les habitants d’Amérique ?", ["Colomb croyait être aux Indes", "ils venaient d’Inde", "ils le demandaient"], "Colomb croyait être aux Indes", "Une erreur de Colomb, qui est restée dans la langue pendant des siècles."),
  ],
};

const colonisation: Lecon = {
  code: "h-p4-colonisation",
  matiere: "histoire",
  periode: 4,
  titre: "Les empires coloniaux et l’esclavage",
  reference:
    "Connaître la constitution des premiers empires coloniaux en Amérique, la traite des esclaves entre l’Afrique et l’Amérique, la vie des esclaves dans les plantations et les échanges commerciaux avec les colonies ; localiser les grands empires coloniaux sur une carte ; citer des conséquences de ces conquêtes sur les populations amérindiennes ; décrire les conditions de vie des esclaves dans une plantation ; nommer quelques denrées issues de ces colonies ; repère : 1685, édit royal de Louis XIV dit le « Code noir » ; mots-clés : commerce triangulaire, empire colonial, esclavage, plantation, traite.",
  minutes: 30,
  cours: [
    {
      texte: [
        "Après les explorations viennent les conquêtes. Cette partie de l’histoire est dure, et il faut la regarder en face : ce qui a enrichi l’Europe a détruit d’autres sociétés.",
      ],
    },
    {
      titre: "Des empires coloniaux",
      texte: [
        "Une **colonie** est un territoire occupé et exploité par un pays étranger, au profit de ce pays. L’ensemble des colonies d’un pays forme son **empire colonial**.",
        "L’Espagne et le Portugal se partagent le Mexique, l’Amérique centrale et l’Amérique du Sud — le Brésil pour le Portugal, presque tout le reste pour l’Espagne. La France, l’Angleterre et les Pays-Bas s’installent plus tard en Amérique du Nord et aux Antilles : la France au Canada et en Louisiane, et dans des îles comme la Martinique, la Guadeloupe et Saint-Domingue.",
      ],
    },
    {
      titre: "Ce que les conquêtes font aux Amérindiens",
      texte: [
        "Au Mexique, l’empire aztèque est détruit entre 1519 et 1521 par Cortés ; au Pérou, l’empire inca tombe en 1532-1533 devant Pizarro. Quelques centaines de soldats espagnols, avec des chevaux, des armes à feu — et l’aide de peuples ennemis des Aztèques — abattent des empires de millions d’habitants.",
        "Mais ce ne sont pas les armes qui tuent le plus : ce sont les **maladies** apportées d’Europe — variole, rougeole, typhus — contre lesquelles les populations d’Amérique n’avaient aucune défense. Les historiens estiment que la population a chuté de plus de 80 pour cent en un siècle.",
        "Les survivants sont contraints au travail forcé dans les mines et les champs, et leurs sociétés, leurs langues, leurs religions sont détruites. Dès l’époque, des voix s’élèvent : le religieux espagnol Bartolomé de Las Casas dénonce ces violences devant le roi d’Espagne.",
      ],
      regle:
        "La catastrophe démographique américaine est d’abord épidémique. Cela n’enlève rien à la violence des conquêtes : les deux se sont ajoutées.",
    },
    {
      titre: "La traite et les plantations",
      texte: [
        "Manquant de main-d’œuvre, les Européens organisent la **traite** : des millions d’Africains sont capturés, vendus, entassés dans des navires, et déportés en Amérique. Beaucoup meurent pendant la traversée, qui dure plusieurs semaines.",
        "On appelle ce circuit le **commerce triangulaire** : de l’Europe partent des marchandises vers l’Afrique — tissus, armes, alcool ; de l’Afrique partent des esclaves vers l’Amérique ; d’Amérique reviennent le sucre, le café, le coton. Des ports comme Nantes ou Bordeaux se sont enrichis ainsi.",
        "Dans les **plantations** de canne à sucre, de café ou de coton, le travail est forcé, du lever au coucher du soleil, sous la menace des coups. Les familles sont séparées. Les femmes travaillent aux champs comme les hommes, et leurs enfants naissent esclaves.",
        "Les esclaves n’ont aucun droit : en 1685, le **Code noir**, un édit de Louis XIV, les définit comme des biens meubles — c’est-à-dire des objets qu’on peut vendre. Il contient quelques règles sur la nourriture ou le repos du dimanche, mais son but n’est pas de protéger les esclaves : il organise l’esclavage et le rend légal.",
        "Et il y a eu des révoltes, constamment. Beaucoup d’Africains déportés ont fui dans les forêts et les montagnes, résisté, combattu.",
      ],
      regle:
        "Le Code noir de 1685 ne protège pas les esclaves : il organise l’esclavage et le rend légal.",
    },
    {
      titre: "Ce que l’Europe en a tiré",
      texte: [
        "Des plantes inconnues en Europe arrivent d’Amérique : la tomate, la pomme de terre, le maïs, le haricot, le cacao — dont on fait le chocolat —, le tabac.",
        "Et les plantations des colonies produisent en masse des denrées qui étaient rares et chères : le sucre de canne, le café, le coton. Le sucre, autrefois un luxe, entre dans toutes les cuisines.",
        "La pomme de terre finira par nourrir l’Europe et faire reculer les famines.",
        "Il est utile de savoir, en mangeant du chocolat ou en sucrant un gâteau, d’où ces habitudes viennent — et à quel prix elles sont arrivées.",
      ],
    },
  ],
  exemples: [
    {
      enonce: "Pourquoi la population amérindienne s’est-elle effondrée après 1492 ?",
      etapes: [
        "Les combats ont tué, mais les troupes européennes étaient peu nombreuses.",
        "Les maladies apportées d’Europe — variole, rougeole, typhus — étaient inconnues en Amérique : personne n’y était immunisé.",
        "S’y ajoutent le travail forcé et la destruction des sociétés. Plus de 80 pour cent de la population disparaît en un siècle.",
      ],
      resultat: "surtout à cause des maladies européennes",
    },
  ],
  exercices: [
    q("h-p4-co-1", "Qu’est-ce qu’une colonie ?", ["un territoire occupé et exploité par un pays étranger", "un pays voisin", "une ville nouvelle"], "un territoire occupé et exploité par un pays étranger", "Elle est exploitée au profit du pays qui l’occupe. L’ensemble des colonies d’un pays forme son empire colonial."),
    q("h-p4-co-2", "Quelle a été la principale cause de l’effondrement des populations amérindiennes ?", ["les maladies apportées d’Europe", "la famine", "les armes à feu"], "les maladies apportées d’Europe", "Variole, rougeole, typhus : des maladies inconnues en Amérique, contre lesquelles personne n’était immunisé."),
    e("h-p4-co-3", "En quelle année Louis XIV publie-t-il le Code noir ?", "1685", "Ce texte définit les esclaves comme des biens meubles : il organise l’esclavage et le rend légal."),
    q("h-p4-co-4", "Comment appelle-t-on le circuit Europe-Afrique-Amérique ?", ["le commerce triangulaire", "la route des épices", "le grand tour"], "le commerce triangulaire", "Marchandises vers l’Afrique, esclaves vers l’Amérique, sucre et café vers l’Europe."),
    q("h-p4-co-5", "Laquelle de ces denrées vient d’Amérique ?", ["la pomme de terre", "le blé", "l’olive"], "la pomme de terre", "Comme la tomate, le maïs, le haricot, le cacao. Le blé et l’olive sont cultivés en Europe depuis l’Antiquité."),
    q("h-p4-co-6", "Les esclaves des plantations avaient-ils des droits ?", ["non, ils étaient traités comme des objets", "les mêmes que les colons", "quelques-uns"], "non, ils étaient traités comme des objets", "Le Code noir les définit comme des biens meubles, qu’on peut vendre."),
  ],
};

/* ================================================================== */
/* THÈME 4 — 1789, une année révolutionnaire (période 5)               */
/* ================================================================== */

const royaume1789: Lecon = {
  code: "h-p5-royaume-1789",
  matiere: "histoire",
  periode: 5,
  titre: "Le royaume en 1789 et les Lumières",
  reference:
    "Décrire le contexte social, économique et intellectuel du royaume de France en 1789 ; citer des idées des Lumières ; repères : un ou une philosophe des Lumières ; printemps 1789, rédaction des cahiers de doléances et réunion des États généraux ; mots-clés : Ancien Régime, l’Encyclopédie, les Lumières.",
  minutes: 30,
  cours: [
    {
      texte: [
        "Une révolution n’arrive pas sans raison. En 1789, trois choses se rejoignent : le royaume est ruiné, le peuple a faim, et des idées nouvelles circulent depuis des dizaines d’années.",
        "Le roi est **Louis XVI**, petit-fils de Louis XV, monté sur le trône en 1774 à dix-neuf ans. Il règne en monarque absolu, comme Louis XIV, sur une société toujours divisée en trois ordres : c’est l’**Ancien Régime**.",
      ],
    },
    {
      titre: "L’État est ruiné",
      texte: [
        "Les guerres ont coûté énormément, notamment l’aide apportée aux Américains contre l’Angleterre, de 1778 à 1783. Le roi a emprunté, et il n’arrive plus à rembourser.",
        "Or les deux ordres privilégiés — clergé et noblesse — ne paient presque pas d’impôt. Tout repose sur le tiers état.",
        "Le roi doit donc trouver de l’argent, et pour cela obtenir l’accord de ceux qui ne paient pas. Ils refusent. C’est le blocage qui déclenche tout.",
      ],
    },
    {
      titre: "Le peuple a faim",
      texte: [
        "L’été 1788 a été catastrophique : le 13 juillet, un orage de grêle énorme a détruit les récoltes autour de Paris et dans tout le nord du royaume. L’hiver 1788-1789 est glacial : la Seine gèle.",
        "Le prix du pain atteint des sommets. Or un ouvrier consacre déjà la moitié de ce qu’il gagne au pain : quand le prix double, il ne mange plus.",
        "La faim rend une population capable de tout, y compris de descendre dans la rue.",
      ],
      regle:
        "Sans la crise du pain, les idées seules n’auraient pas suffi. Sans les idées, la faim n’aurait produit qu’une émeute.",
    },
    {
      titre: "Les idées des Lumières",
      texte: [
        "Pendant tout le XVIIIe siècle, des philosophes proposent une autre façon d’organiser la société. On les appelle les **Lumières**, parce qu’ils veulent éclairer les esprits par la raison, contre l’ignorance et les préjugés.",
        "**Montesquieu** : il faut séparer les pouvoirs — celui qui fait les lois, celui qui gouverne, celui qui juge — pour qu’aucun ne puisse tout décider.",
        "**Voltaire** : la liberté de penser et d’écrire, et la tolérance en matière de religion.",
        "**Rousseau** : le pouvoir vient du peuple, pas de Dieu ni de la naissance.",
        "**Diderot** et **d’Alembert** dirigent l’**Encyclopédie**, un dictionnaire géant — dix-sept volumes de textes, publiés de 1751 à 1772 — qui rassemble le savoir de l’époque et le met à la portée de qui sait lire.",
        "Ces idées circulent dans les salons, les cafés, les livres imprimés. Beaucoup de salons sont tenus par des femmes, comme **Madame Geoffrin** à Paris, qui reçoit chaque semaine écrivains et savants et les fait se rencontrer. **Émilie du Châtelet**, elle, est une savante : elle traduit en français le grand livre de Newton sur la gravitation.",
      ],
    },
    {
      titre: "Les cahiers de doléances",
      texte: [
        "Pour sortir du blocage, Louis XVI convoque les **États généraux** : une assemblée des députés des trois ordres, qui ne s’était pas réunie depuis 1614. Elle doit s’ouvrir à Versailles en mai 1789.",
        "Avant cela, le roi demande à chaque communauté — chaque paroisse, chaque ville, chaque métier — d’écrire ses plaintes et ses souhaits dans un **cahier de doléances**. « Doléance » veut dire plainte.",
        "Environ soixante mille cahiers sont rédigés au printemps 1789. Ils réclament la fin des privilèges, l’égalité devant l’impôt, moins de taxes, une constitution. C’est un document extraordinaire : pour une fois, on entend la voix des gens ordinaires — même si les femmes, sauf exception, n’ont pas eu le droit d’y participer.",
      ],
      regle:
        "En demandant au royaume d’écrire ses plaintes, le roi a fait prendre conscience à chacun que les autres pensaient la même chose.",
    },
  ],
  exemples: [
    {
      enonce: "Pourquoi le prix du pain compte-t-il autant en 1789 ?",
      etapes: [
        "Le pain est l’aliment principal du peuple.",
        "Un ouvrier y consacre déjà environ la moitié de son salaire.",
        "Après les mauvaises récoltes de 1788, le prix s’envole : ce n’est plus une gêne, c’est la faim.",
      ],
      resultat: "parce qu’il représente la moitié du budget des plus pauvres",
    },
  ],
  exercices: [
    q("h-p5-ro-1", "Pourquoi l’État français est-il ruiné en 1789 ?", ["les guerres ont coûté cher et les privilégiés ne paient pas d’impôt", "le roi a tout dépensé à Versailles", "il n’y a plus de commerce"], "les guerres ont coûté cher et les privilégiés ne paient pas d’impôt", "Tout repose sur le tiers état, et le roi doit obtenir l’accord de ceux qui ne paient pas."),
    q("h-p5-ro-2", "Quel philosophe propose de séparer les pouvoirs ?", ["Montesquieu", "Voltaire", "Rousseau"], "Montesquieu", "Pour qu’aucun pouvoir ne puisse tout décider seul : celui qui fait les lois, celui qui gouverne, celui qui juge."),
    q("h-p5-ro-3", "Quel philosophe affirme que le pouvoir vient du peuple ?", ["Rousseau", "Montesquieu", "Diderot"], "Rousseau", "Et non de Dieu ni de la naissance : c’est une rupture complète avec la monarchie absolue."),
    q("h-p5-ro-4", "Comment s’appelle le grand dictionnaire du savoir dirigé par Diderot et d’Alembert ?", ["l’Encyclopédie", "l’édit de Nantes", "le cahier de doléances"], "l’Encyclopédie", "Publiée de 1751 à 1772, elle rassemble le savoir de l’époque et le met à la portée de qui sait lire. L’édit de Nantes est une loi d’Henri IV ; un cahier de doléances recueille des plaintes."),
    q("h-p5-ro-5", "Qu’est-ce qu’un cahier de doléances ?", ["un cahier où l’on écrit ses plaintes", "un registre d’impôts", "un livre de comptes"], "un cahier où l’on écrit ses plaintes", "Au printemps 1789, environ soixante mille cahiers remontent au roi."),
    q("h-p5-ro-6", "Pourquoi l’hiver 1788-1789 aggrave-t-il la situation ?", ["les récoltes détruites font monter le prix du pain", "il fait trop chaud", "les routes sont coupées"], "les récoltes détruites font monter le prix du pain", "Après l’orage de grêle du 13 juillet 1788, la faim s’installe."),
  ],
};

const revolution1789: Lecon = {
  code: "h-p5-revolution",
  matiere: "histoire",
  periode: 5,
  titre: "1789, l’année révolutionnaire",
  reference:
    "Compléter une frise chronologique avec les évènements marquants de l’année 1789 ; citer les principaux droits énoncés dans la Déclaration des Droits de l’Homme et du Citoyen ; raconter la vie et l’action d’une femme ou de femmes au cours de l’année 1789 ; repères : 14 juillet, prise de la Bastille ; nuit du 4 août, abolition des privilèges ; 26 août, Déclaration des Droits de l’Homme et du Citoyen ; 5-6 octobre, marche des femmes à Versailles ; mots-clés : citoyenneté, constitution, droits de l’Homme, égalité, liberté, Révolution, souveraineté nationale.",
  minutes: 35,
  cours: [
    {
      texte: [
        "En quelques mois, la France change de régime : la monarchie absolue et la société d’ordres, qui duraient depuis des siècles, s’effondrent. Quatre dates suffisent à comprendre l’enchaînement.",
      ],
    },
    {
      titre: "Le 14 juillet : la prise de la Bastille",
      texte: [
        "Les États généraux s’ouvrent à Versailles le 5 mai 1789. Le tiers état, qui représente presque tout le royaume mais n’a qu’une voix sur trois, refuse de se laisser compter ainsi. Le 17 juin, ses députés se proclament **Assemblée nationale**, et le 20 juin ils jurent, dans la salle du Jeu de paume, de ne pas se séparer avant d’avoir donné une **constitution** au pays — un texte qui fixe les règles du pouvoir et s’impose au roi lui-même.",
        "Le roi rassemble des troupes autour de Paris. La ville prend peur et cherche des armes.",
        "Le 14 juillet, les Parisiens prennent la **Bastille**, une forteresse-prison qui symbolise l’arbitraire du roi : on pouvait y enfermer quelqu’un sans jugement. Il n’y a que sept prisonniers à l’intérieur — ce qui compte, c’est le symbole : le peuple a tenu tête au roi dans sa propre capitale.",
      ],
    },
    {
      titre: "La nuit du 4 août : la fin des privilèges",
      texte: [
        "Dans les campagnes, la peur se répand : on croit que les seigneurs préparent une vengeance. Les paysans s’en prennent aux châteaux et brûlent les registres où sont notées leurs redevances.",
        "Dans la nuit du 4 août, à l’Assemblée, les députés nobles et ecclésiastiques renoncent eux-mêmes à leurs privilèges, les uns après les autres, dans une séance de plusieurs heures. La corvée, la dîme, les droits des seigneurs sur les paysans sont supprimés.",
        "En une nuit, la société d’ordres qui tenait depuis des siècles est abolie. Devant la loi, il n’y a plus que des **citoyens**, égaux.",
      ],
      regle:
        "Ce ne sont pas les privilégiés qui ont été renversés : ce sont eux qui ont renoncé, sous la pression des campagnes.",
    },
    {
      titre: "Le 26 août : la Déclaration des Droits de l’Homme et du Citoyen",
      texte: [
        "Dix-sept articles qui posent les principes du nouveau régime.",
        "« Les hommes naissent et demeurent libres et égaux en droits. » L’**égalité** en droit, et non l’égalité des fortunes.",
        "La **liberté** : chacun peut faire tout ce qui ne nuit pas aux autres. La liberté d’opinion, y compris religieuse, et la liberté d’expression.",
        "La loi est la même pour tous. Chacun est présumé innocent tant qu’il n’est pas jugé.",
        "La **souveraineté** appartient à la Nation, c’est-à-dire à l’ensemble des citoyens : le pouvoir ne vient plus de Dieu ni de la naissance. C’est la fin de la monarchie absolue.",
        "Les femmes n’y obtiennent pas les mêmes droits, et certaines le disent immédiatement — Olympe de Gouges écrira en 1791 une « Déclaration des droits de la femme et de la citoyenne », en reprenant le texte article par article.",
      ],
      regle:
        "Liberté, égalité en droit, souveraineté de la Nation : trois idées de 1789 que la France a gardées.",
    },
    {
      titre: "Les 5 et 6 octobre : la marche des femmes",
      texte: [
        "Le pain manque encore, et le roi tarde à accepter les décisions de l’Assemblée. Le 5 octobre, des milliers de femmes des halles de Paris — marchandes, lavandières, ouvrières — partent à pied pour Versailles, sous la pluie, avec des piques et quelques canons : environ vingt kilomètres, pour réclamer du pain au roi.",
        "Parmi elles, **Louise-Reine Audu**, une marchande de fruits qu’on surnommait la « reine des Halles », et qui sera emprisonnée pour son rôle ce jour-là.",
        "Elles obtiennent bien plus que du pain : le 6 octobre, elles ramènent la famille royale à Paris, au palais des Tuileries.",
        "Le roi n’habite plus Versailles. Il est désormais sous le regard du peuple, et il ne s’en dégagera jamais.",
      ],
      regle:
        "Cette journée est décisive, et ce sont des femmes qui l’ont menée.",
    },
  ],
  exemples: [
    {
      enonce: "Range ces quatre événements de 1789 dans l’ordre : la Déclaration des Droits, la prise de la Bastille, la marche des femmes, la nuit du 4 août.",
      etapes: [
        "14 juillet : la prise de la Bastille.",
        "Nuit du 4 août : l’abolition des privilèges.",
        "26 août : la Déclaration des Droits de l’Homme et du Citoyen.",
        "5-6 octobre : la marche des femmes sur Versailles.",
      ],
      resultat: "Bastille, 4 août, Déclaration, marche des femmes",
    },
  ],
  exercices: [
    e("h-p5-rv-1", "Quel jour de 1789 les Parisiens prennent-ils la Bastille ? Écris seulement le jour et le mois, comme ceci : 3 mai", "14 juillet", "Le 14 juillet 1789. La Bastille est une forteresse-prison qui symbolise l’arbitraire du roi : le symbole compte plus que les sept prisonniers libérés."),
    q("h-p5-rv-2", "Pendant la nuit du 4 août, qui renonce aux privilèges ?", ["les députés eux-mêmes", "le roi, tout seul", "les soldats"], "les députés eux-mêmes", "Des députés de la noblesse et du clergé y renoncent eux-mêmes, à l’Assemblée, sous la pression des campagnes."),
    q("h-p5-rv-3", "Que se passe-t-il le 26 août 1789 ?", ["la Déclaration des Droits de l’Homme et du Citoyen est adoptée", "la Bastille est prise", "les femmes marchent sur Versailles"], "la Déclaration des Droits de l’Homme et du Citoyen est adoptée", "Dix-sept articles qui posent les principes du nouveau régime. La Bastille, c’est le 14 juillet ; la marche des femmes, les 5 et 6 octobre."),
    q("h-p5-rv-4", "Que dit le premier article de la Déclaration ?", ["les hommes naissent libres et égaux en droits", "le roi est souverain", "la propriété est abolie"], "les hommes naissent libres et égaux en droits", "L’égalité en droit, et non l’égalité des fortunes."),
    q("h-p5-rv-5", "Qui mène la marche sur Versailles des 5 et 6 octobre 1789 ?", ["des femmes des halles de Paris", "l’armée", "les députés"], "des femmes des halles de Paris", "Elles réclamaient du pain, et elles ramènent la famille royale à Paris."),
    q("h-p5-rv-6", "À qui appartient la souveraineté d’après la Déclaration de 1789 ?", ["à la Nation", "au roi", "à l’Église"], "à la Nation", "Le pouvoir ne vient plus de Dieu ni de la naissance : c’est la rupture décisive."),
  ],
};

export const histoire: Lecon[] = [
  seigneurie,
  paysans,
  eglise,
  renaissance,
  henriIV,
  louisXIV,
  explorations,
  colonisation,
  royaume1789,
  revolution1789,
];
