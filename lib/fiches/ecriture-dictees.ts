/**
 * La dictée, sous ses cinq formes.
 *
 * Cinq rituels, vingt minutes, sur le cahier. Une fiche donne **les mots ou les phrases à dicter, écrits noir sur blanc**. « Quinze mots de la liste en cours » revenait seize fois dans l’année pour une liste qui n’existait pas : c’est elle qu’on écrit ici.
 *
 * Ce qu’une fiche donne, et pourquoi : voir `lib/fiches/types.ts`. En deux
 * mots — le matériel exact, le corrigé quand il y en a un, et ce qu’on
 * regarde. Un adulte qui l’ouvre ne doit plus rien avoir à chercher.
 *
 * Les cinq séries suivent l’année : les seize listes de mots vont du son [o]
 * aux mots qui s’entendent pareil, les dix-sept dictées de phrases vont de
 * l’accord sujet-verbe à toute la chaîne d’accords, les seize dictées à trous
 * parcourent les temps dans l’ordre où on les rencontre. Les textes des
 * dictées préparées et des auto-dictées sont écrits pour ce cahier.
 *
 * **Réservé aux adultes** : ces fiches portent les corrigés.
 *
 * Rien de tout ceci n’a été relu par un enseignant. Ça doit l’être.
 */

import { f, type Fiche } from "./types";

export const ecritureDictees: Fiche[] = [
  /* ------------------------------------------------------------------ *
   *  Dictée de mots — seize listes, quinze mots, une régularité par liste
   * ------------------------------------------------------------------ */

  f(
    "ed-mots-01",
    "Dictée de mots",
    "Liste 1 · le son [o] écrit -eau et au",
    [
      "On lit la règle à voix haute avant de commencer, en disant qu’elle ne vaut que pour cette liste : ici, le son [o] s’écrit presque toujours -eau à la fin d’un nom masculin, et au dans les autres mots. Hors de la liste, ce n’est pas une règle — un vélo, un stylo, une école —, et chaque mot s’apprend avec son orthographe.",
      "On dicte le mot avec son déterminant, une fois seul, une fois dans une petite phrase, puis une fois seul encore. Il écrit, on passe au suivant sans rien commenter.",
      "À la fin seulement, on corrige ensemble, mot par mot. Dans un mot qui a hésité, il entoure la lettre ou le son qui a hésité, on redit la règle ensemble une fois, et deux de ces mots reviennent à la prochaine dictée, glissés au milieu des autres.",
    ],
    ["un château", "un bateau", "un chapeau", "un troupeau", "un ruisseau",
     "le drapeau", "un marteau", "un cadeau", "un carreau", "le cerveau",
     "la peau", "un défaut", "une épaule", "la chaussure", "sauter"],
    undefined,
    "Le déterminant est une aide autant qu’un piège : s’il écrit « un chapeaux », c’est le pluriel qu’on regarde, pas la liste. Si la règle tient partout et que seuls « un défaut » et « la peau » hésitent, la régularité est installée : ce sont les deux mots de la liste qui ne la suivent pas — « défaut » est un nom masculin qui finit en -aut, « peau » un nom féminin qui finit en -eau —, et ils se retiennent un par un. « Chaussure », « épaule » et « sauter » s’écrivent avec au, comme la liste l’annonce pour les mots qui ne sont pas des noms masculins en [o]. Si on les lui explique, on reste dans la liste : « un vélo » ou « une école » montrent qu’ailleurs chaque mot se retient avec son orthographe.",
  ),

  f(
    "ed-mots-02",
    "Dictée de mots",
    "Liste 2 · le son [s] écrit s, ss, c, ç",
    [
      "On commence par la règle : entre deux voyelles, un s tout seul chante [z] — il en faut deux pour entendre [s]. Le c ne fait [s] que devant e, i, y ; ailleurs il lui faut la cédille.",
      "On dicte le mot avec son déterminant, une fois seul puis dans une petite phrase. Il écrit, on enchaîne.",
      "On corrige ensemble à la fin. Pour chaque mot qui a hésité, il entoure la lettre du son [s], on redit la règle ensemble une fois, et deux de ces mots reviennent à la prochaine dictée, glissés au milieu des autres.",
    ],
    ["la leçon", "un garçon", "la façon", "un glaçon", "la place",
     "le silence", "une tasse", "la brosse", "un coussin", "la chasse",
     "le sucre", "la police", "un citron", "un cirque", "une balançoire"],
    undefined,
    "S’il écrit « un cousin » pour « un coussin », ce n’est pas le mot qui manque, c’est la règle du s entre deux voyelles : c’est elle qu’on redit, et on la retrouvera dans « poisson », « dessert », « assiette ».",
  ),

  f(
    "ed-mots-03",
    "Dictée de mots",
    "Liste 3 · les noms en -tion",
    [
      "La règle tient en une phrase : quand on entend [sjɔ̃] à la fin d’un nom, cela s’écrit -tion dans l’immense majorité des cas, et ces noms-là sont tous féminins.",
      "On dicte avec le déterminant — « une addition » — pour que le féminin s’entende. Une fois seul, une fois en phrase.",
      "À la correction, il souligne les quatre lettres -tion dans chaque mot. Dans un mot qui a hésité, il entoure la lettre ou le son qui a hésité, on redit la règle ensemble une fois, et deux de ces mots reviennent à la prochaine dictée, glissés au milieu des autres.",
    ],
    ["l’attention", "une addition", "une opération", "la récréation", "une invitation",
     "la respiration", "une explication", "la population", "une émotion", "la direction",
     "une collection", "la construction", "la circulation", "une portion", "une nation"],
    undefined,
    "Si « attension » apparaît, c’est le son [s] qui a gagné contre la régularité : on ne corrige pas le mot, on redit que -tion s’écrit avec un t et on relit la liste entière à voix haute. À la prochaine dictée, deux mots suffisent pour voir si c’est passé.",
  ),

  f(
    "ed-mots-04",
    "Dictée de mots",
    "Liste 4 · les consonnes doubles",
    [
      "La règle du jour : quand la voyelle avant la consonne est brève et qu’on entend [ɛ] ou [ɔ], la consonne est souvent double — « pelle », « pomme », « sonnette ».",
      "On dicte le mot avec son déterminant, une fois seul, une fois en phrase. On n’insiste pas à l’oral sur la double consonne : c’est justement ce qu’on travaille.",
      "À la correction, il repasse chaque consonne double au crayon en tapant deux fois la table du doigt. Dans un mot qui a hésité, il entoure la consonne, on redit la règle ensemble une fois, et deux de ces mots reviennent à la prochaine dictée, glissés au milieu des autres.",
    ],
    ["une pelle", "la vaisselle", "une chouette", "une assiette", "une trompette",
     "la sonnette", "une colonne", "une personne", "la pomme", "un homme",
     "une flamme", "un ballon", "une bulle", "la terre", "le verre"],
    undefined,
    "« Colonne » et « personne » se ressemblent et se contredisent : l’une a un seul l, l’autre un seul r. S’il double partout, la règle est comprise mais pas encore réglée — on garde ces deux mots-là pour la liste suivante.",
  ),

  f(
    "ed-mots-05",
    "Dictée de mots",
    "Liste 5 · -ail, -eil, -euil et leurs féminins en -aille, -eille, -euille",
    [
      "La règle est une question de genre : au masculin, une seule l — le travail, le soleil, un fauteuil. Au féminin, on ajoute -le — une paille, une abeille, une feuille.",
      "On dicte avec le déterminant : c’est lui qui donne la réponse, et c’est volontaire. Une fois seul, une fois en phrase.",
      "À la correction, il classe les quinze mots en deux colonnes, masculin et féminin. Dans un mot qui a hésité, il entoure la lettre ou le son qui a hésité, on redit la règle ensemble une fois, et deux de ces mots reviennent à la prochaine dictée, glissés au milieu des autres.",
    ],
    ["le travail", "un détail", "un portail", "une paille", "une bataille",
     "la muraille", "le soleil", "un réveil", "un orteil", "une abeille",
     "une bouteille", "une oreille", "un fauteuil", "un écureuil", "une feuille"],
    undefined,
    "Le tri en deux colonnes dit tout : s’il place les mots correctement mais écrit « une abeil », c’est la main qui a devancé la règle. S’il hésite sur le genre lui-même, c’est le déterminant qu’on travaille, pas la terminaison.",
  ),

  f(
    "ed-mots-06",
    "Dictée de mots",
    "Liste 6 · les noms féminins en -ée et en -té",
    [
      "Deux règles pour une liste : les noms féminins en [e] prennent -ée — une journée, une idée. Sauf ceux en -té, qui n’ont pas de e — la beauté, la santé.",
      "On dicte avec « une » ou « la » devant, une fois seul, une fois en phrase.",
      "À la correction, il sépare les deux familles au crayon. Dans un mot qui a hésité, il entoure la lettre ou le son qui a hésité, on redit la règle ensemble une fois, et deux de ces mots reviennent à la prochaine dictée, glissés au milieu des autres.",
    ],
    ["une journée", "une soirée", "une année", "une poignée", "une bouchée",
     "la fumée", "une idée", "la beauté", "la santé", "la bonté",
     "la clarté", "la liberté", "la vérité", "la propreté", "une quantité"],
    undefined,
    "Ces deux familles s’entendent pareil et s’écrivent autrement : c’est exactement le genre de piège où l’on gagne à chercher la famille du mot plutôt qu’à se souvenir. « Beauté » vient de « beau », « journée » vient de « jour » — c’est ce raisonnement-là qu’on veut voir arriver.",
  ),

  f(
    "ed-mots-07",
    "Dictée de mots",
    "Liste 7 · le son [ɛ̃] écrit in, im, ain, ein, un",
    [
      "Cinq graphies pour un seul son : la liste sert justement à montrer qu’on ne peut pas deviner, et qu’il faut regarder le mot. Une seule règle tient : devant m, b, p, le n devient m — « important », « timbre ».",
      "On dicte avec le déterminant quand il y en a un, une fois seul, une fois en phrase.",
      "À la correction, il souligne les lettres du son [ɛ̃] dans chaque mot et les regroupe. Dans un mot qui a hésité, il entoure la lettre ou le son qui a hésité, on redit la règle ensemble une fois, et deux de ces mots reviennent à la prochaine dictée, glissés au milieu des autres.",
    ],
    ["le matin", "un lapin", "un chemin", "un sapin", "un jardin",
     "un timbre", "impossible", "la main", "le pain", "un train",
     "demain", "la peinture", "plein", "un parfum", "lundi"],
    undefined,
    "Cette liste ne s’apprend pas par règle mais par famille : « la main » tire « demain », « le pain » tire « la peinture » parce qu’on les voit ensemble. S’il écrit « le pin » pour « le pain », c’est le sens qu’on redit, pas l’orthographe.",
  ),

  f(
    "ed-mots-08",
    "Dictée de mots",
    "Liste 8 · les mots qui commencent par ap-, ac-, af-, ef-, of-",
    [
      "La règle : au début d’un mot, ap-, ac-, af-, ef- et of- doublent presque toujours leur consonne. Les exceptions se comptent — « apercevoir », « apporter » en est une autre sorte puisqu’il double bien.",
      "On dicte le verbe ou le nom, une fois seul, une fois en phrase.",
      "À la correction, il met une croix sous les mots qui ne doublent pas : il n’y en a qu’un ou deux, et c’est ce qui rend la règle utile. Dans un mot qui a hésité, il entoure la lettre ou le son qui a hésité, on redit la règle ensemble une fois, et deux de ces mots reviennent à la prochaine dictée, glissés au milieu des autres.",
    ],
    ["apporter", "apercevoir", "appeler", "appuyer", "un appareil",
     "accrocher", "accepter", "un accident", "accompagner", "affreux",
     "une affaire", "afficher", "effacer", "un effort", "offrir"],
    undefined,
    "« Apercevoir » est la seule de la liste à ne pas doubler : s’il l’écrit avec deux p, c’est bon signe — la règle est là, c’est l’exception qui manque. On la note sur la couverture du cahier, elle resservira.",
  ),

  f(
    "ed-mots-09",
    "Dictée de mots",
    "Liste 9 · les lettres muettes de la fin",
    [
      "La règle du jour est un geste : pour trouver la lettre qu’on n’entend pas, on cherche un mot de la même famille où elle se prononce — « le rang » donne « ranger », « le sang » donne « sanguin », « le bord » donne « border ».",
      "On dicte le mot avec son déterminant. Avant qu’il écrive, on lui laisse trois secondes pour chercher la famille — c’est le vrai exercice.",
      "À la correction, on écrit à côté de chaque mot celui de la famille qui a servi. Dans un mot qui a hésité, il entoure la lettre ou le son qui a hésité, on redit la règle ensemble une fois, et deux de ces mots reviennent à la prochaine dictée, glissés au milieu des autres.",
    ],
    ["un tapis", "le rang", "le sang", "le bras", "le dos",
     "un lit", "le pied", "un champ", "le bord", "le froid",
     "un tronc", "un outil", "le nid", "le plomb", "un tricot"],
    undefined,
    "Ce qui compte ici n’est pas le mot juste, c’est la seconde où il cherche la famille. S’il trouve « nicher » pour « le nid », il a l’outil pour toute l’année, même quand il se trompe de lettre.",
  ),

  f(
    "ed-mots-10",
    "Dictée de mots",
    "Liste 10 · le son [j] écrit ill et y",
    [
      "La règle : après une voyelle, le son [j] s’écrit -ill- — famille, papillon. Le y, lui, vaut deux i, et c’est pour cela qu’on entend [j] dans « crayon » : cra-i-ion.",
      "On dicte avec le déterminant, une fois seul, une fois en phrase.",
      "À la correction, il sépare les mots en -ill- et les mots en y, et on redit le truc du double i. Dans un mot qui a hésité, il entoure la lettre ou le son qui a hésité, on redit la règle ensemble une fois, et deux de ces mots reviennent à la prochaine dictée, glissés au milieu des autres.",
    ],
    ["la famille", "une chenille", "une quille", "briller", "un papillon",
     "un coquillage", "un caillou", "la vanille", "un million", "un crayon",
     "un rayon", "un noyau", "joyeux", "balayer", "un voyage"],
    undefined,
    "Le truc du y qui vaut deux i se vérifie tout seul : s’il écrit « craion », on lui fait dire le mot lentement et il entend les deux i. La règle s’explique par l’oreille, ce qui la rend plus solide qu’une liste apprise.",
  ),

  f(
    "ed-mots-11",
    "Dictée de mots",
    "Liste 11 · les noms en -eur, -eure et -œur",
    [
      "La règle : presque tous les noms en [œʁ] s’écrivent -eur, féminins comme masculins — la fleur, un moteur. Les exceptions tiennent dans un coin du cahier : l’heure, la demeure, le beurre, et les trois mots en -œur.",
      "On dicte avec le déterminant, une fois seul, une fois en phrase.",
      "À la correction, on écrit les exceptions ensemble sur une même ligne : elles sont si peu nombreuses qu’elles s’apprennent d’un bloc. Dans une exception qui a hésité, il entoure la lettre qui a hésité, on relit la ligne des exceptions ensemble une fois, et deux d’entre elles reviennent à la prochaine dictée, glissées au milieu d’autres mots.",
    ],
    ["une fleur", "la chaleur", "la couleur", "une odeur", "la douceur",
     "un ordinateur", "un moteur", "un acteur", "une erreur", "la peur",
     "une heure", "la demeure", "le cœur", "une sœur", "un chœur"],
    undefined,
    "Le œ collé se dessine mal la première fois : on le fait tracer lentement, en un seul geste. S’il écrit « coeur » en deux lettres, ce n’est pas une faute d’orthographe, c’est un geste qui n’est pas encore appris.",
  ),

  f(
    "ed-mots-12",
    "Dictée de mots",
    "Liste 12 · -ance ou -ence, -ant ou -ent",
    [
      "Ici, aucune règle ne tranche : [ɑ̃s] s’écrit -ance ou -ence selon le mot, et il faut le voir. Un appui existe pourtant — l’adjectif de la famille. « Patient » donne « patience », « différent » donne « différence », et le e reste.",
      "On dicte avec le déterminant, une fois seul, une fois en phrase.",
      "À la correction, on écrit sous chaque mot en -ence l’adjectif qui l’explique. Dans un mot qui a hésité, il entoure la lettre ou le son qui a hésité, on redit la règle ensemble une fois, et deux de ces mots reviennent à la prochaine dictée, glissés au milieu des autres.",
    ],
    ["la chance", "la distance", "la confiance", "la naissance", "une balance",
     "la patience", "la science", "le silence", "la présence", "une différence",
     "un enfant", "un instant", "un moment", "souvent", "un accident"],
    undefined,
    "L’appui par l’adjectif ne marche pas pour tout : « la chance » n’a pas d’adjectif en -ant. Quand l’outil ne marche pas, on le dit — un enfant qui apprend qu’une règle a des limites cherche mieux que celui qui croit qu’elle marche toujours.",
  ),

  f(
    "ed-mots-13",
    "Dictée de mots",
    "Liste 13 · les mots savants : ph, th, ch qui fait [k], y",
    [
      "Ces mots viennent du grec, et leur orthographe le montre : le [f] s’écrit ph, le [t] s’écrit th, le [k] s’écrit parfois ch, et le [i] s’écrit y. C’est une famille entière qu’on reconnaît à l’œil.",
      "On dicte le mot avec son déterminant, une fois seul, une fois en phrase.",
      "À la correction, il entoure la lettre grecque de chaque mot. Dans un mot qui a hésité, il entoure la lettre ou le son qui a hésité, on redit la règle ensemble une fois, et deux de ces mots reviennent à la prochaine dictée, glissés au milieu des autres.",
    ],
    ["la photographie", "un téléphone", "une phrase", "un éléphant", "l’orthographe",
     "le théâtre", "un thermomètre", "les mathématiques", "une chorale", "un orchestre",
     "la technique", "un écho", "le rythme", "un symbole", "la pyramide"],
    undefined,
    "Repérer la famille vaut mieux que retenir quinze mots : s’il propose ph pour un mot savant qu’il n’a jamais écrit, le réflexe est installé même quand le mot se trompe. « Orthographe » a les deux, c’est le mot-drapeau de la liste.",
  ),

  f(
    "ed-mots-14",
    "Dictée de mots",
    "Liste 14 · é, è, ê — et le e sans accent devant deux consonnes",
    [
      "La règle qui règle presque tout : devant deux consonnes, le e ne prend jamais d’accent — « terrible », « exercice », « derrière » côté accent grave mis à part. Ailleurs, on écoute : [e] fermé donne é, [ɛ] ouvert donne è ou ê.",
      "On dicte avec le déterminant, une fois seul, une fois en phrase.",
      "À la correction, il repasse chaque accent au crayon de couleur. Dans un mot qui a hésité, il entoure la lettre ou le son qui a hésité, on redit la règle ensemble une fois, et deux de ces mots reviennent à la prochaine dictée, glissés au milieu des autres.",
    ],
    ["un élève", "une réponse", "la lumière", "une rivière", "la manière",
     "une fenêtre", "la forêt", "la tempête", "la fête", "un mètre",
     "une pierre", "terrible", "derrière", "un exercice", "la grammaire"],
    undefined,
    "Les accents oubliés et les accents en trop ne disent pas la même chose : oublier, c’est aller vite ; ajouter un accent devant deux consonnes, c’est appliquer une règle qu’on croit générale. Le second cas se corrige en une phrase, le premier en ralentissant.",
  ),

  f(
    "ed-mots-15",
    "Dictée de mots",
    "Liste 15 · les adverbes en -ment",
    [
      "La règle se fabrique : on part de l’adjectif au féminin et on ajoute -ment — lente devient lentement, douce devient doucement. Les adjectifs en -ant et -ent donnent -amment et -emment, qui s’entendent pareil tous les deux.",
      "On dicte l’adverbe seul, puis dans une phrase. Avant qu’il écrive, on lui laisse le temps de retrouver l’adjectif de départ.",
      "À la correction, on écrit l’adjectif féminin à gauche de chaque adverbe. Dans un mot qui a hésité, il entoure la lettre ou le son qui a hésité, on redit la règle ensemble une fois, et deux de ces mots reviennent à la prochaine dictée, glissés au milieu des autres.",
    ],
    ["lentement", "doucement", "rapidement", "tranquillement", "difficilement",
     "joyeusement", "sérieusement", "vraiment", "poliment", "gentiment",
     "certainement", "prudemment", "fréquemment", "couramment", "suffisamment"],
    undefined,
    "Les quatre derniers sont d’une autre famille et c’est normal d’y buter : -amment vient de -ant, -emment vient de -ent, et rien dans le son ne les sépare. Si les onze premiers se fabriquent tout seuls, la règle est acquise et les quatre autres s’apprennent comme des mots.",
  ),

  f(
    "ed-mots-16",
    "Dictée de mots",
    "Liste 16 · les mots qui s’entendent pareil",
    [
      "Dernière liste de l’année, et la seule où le mot seul ne suffit pas : on dicte chaque mot dans son petit groupe, parce que c’est le sens qui décide de l’orthographe.",
      "On dicte le groupe entier, lentement, une fois. On ne répète que le groupe, jamais le mot isolé.",
      "À la correction, il explique à voix haute pourquoi c’est ce mot-là et pas l’autre. Dans un groupe qui a hésité, il entoure le mot qui a hésité, on redit ensemble une fois comment on choisit, et deux de ces groupes reviennent à la prochaine dictée, glissés au milieu des autres.",
    ],
    ["un ver de terre", "un verre d’eau", "un vers de poésie", "la peinture verte", "la mer salée",
     "sa mère", "le maire du village", "un champ de blé", "un chant joyeux", "un conte de fées",
     "le compte des points", "la voie ferrée", "une voix douce", "le poids du sac", "la fin de l’histoire"],
    undefined,
    "Ce qui se joue ici n’est pas l’orthographe mais l’attention au sens : celui qui écrit « un vert d’eau » a entendu le son sans écouter la phrase. Quand il commence à demander « lequel ? » avant d’écrire, la liste a fait son travail.",
  ),

  /* ------------------------------------------------------------------ *
   *  Dictée de phrases — dix-sept fiches, trois phrases, un accord par fiche
   * ------------------------------------------------------------------ */

  f(
    "ed-phrases-01",
    "Dictée de phrases",
    "Accord 1 · le verbe s’accorde avec son sujet",
    [
      "On dicte la phrase entière une première fois, puis par groupes de mots, puis entière encore pour la relecture. Il écrit les trois phrases avant toute correction.",
      "Avant de corriger, on regarde les accords ensemble : il souligne les sujets et entoure les verbes — le code de toute l’année —, au crayon, sur sa propre copie, même si elle comporte des erreurs.",
      "On corrige ensuite ensemble : pour chaque verbe, il dit à voix haute qui commande la terminaison. C’est la phrase dite qui compte, pas la phrase corrigée.",
    ],
    [
      "Les oiseaux quittent le jardin dès les premiers froids.",
      "Mon frère range ses affaires avant de partir.",
      "Nous préparons la table pendant que le pain refroidit.",
    ],
    [
      "Les oiseaux quittent le jardin dès les premiers froids. — « les oiseaux » est au pluriel, le verbe prend -ent qu’on n’entend pas.",
      "Mon frère range ses affaires avant de partir. — « mon frère » est au singulier : -e. « Ses affaires » est un complément, il ne commande rien.",
      "Nous préparons la table pendant que le pain refroidit. — deux verbes, deux sujets : « nous » donne -ons, « le pain » donne -it.",
    ],
    "La troisième phrase est la seule qui demande deux décisions. S’il accorde le premier verbe et oublie le second, ce n’est pas l’accord qui manque, c’est l’idée qu’une phrase peut contenir deux sujets. On le montre en coupant la phrase en deux au crayon.",
  ),

  f(
    "ed-phrases-02",
    "Dictée de phrases",
    "Accord 2 · dans le groupe du nom, tout s’accorde",
    [
      "On dicte chaque phrase entière, puis par groupes de mots. Il écrit les trois avant qu’on regarde quoi que ce soit. La leçon « Le groupe du nom et ses accords » ne vient que le 25 septembre : aujourd’hui, on s’appuie sur ce qu’il sait du CE2, et on lui redit la règle avant de dicter.",
      "Avant la correction, il repasse les déterminants au crayon de couleur et relie d’une flèche chaque adjectif au nom qu’il accompagne.",
      "On corrige ensemble : dans un groupe du nom, c’est le nom qui donne le nombre ; le déterminant le montre, et les adjectifs le suivent.",
    ],
    [
      "Les grandes fenêtres ouvertes laissent entrer l’air froid.",
      "Une longue route grise traverse les champs endormis.",
      "Mes vieux cahiers bleus sont rangés dans le tiroir du bas.",
    ],
    [
      "Les grandes fenêtres ouvertes laissent entrer l’air froid. — « fenêtres » est au pluriel, « les » le montre, et « grandes » et « ouvertes » le suivent.",
      "Une longue route grise traverse les champs endormis. — deux groupes de nombres différents dans la même phrase : singulier à gauche, pluriel à droite.",
      "Mes vieux cahiers bleus sont rangés dans le tiroir du bas. — « vieux » ne change pas au pluriel, il l’était déjà au singulier.",
    ],
    "« Vieux » est le mot qui apprend le plus : s’il écrit « vieuxs », c’est que la règle est solide et qu’elle s’applique même là où la marque existe déjà. On lui montre les autres mots de la même sorte — un nez, un prix, une croix.",
  ),

  f(
    "ed-phrases-03",
    "Dictée de phrases",
    "Accord 3 · les pluriels en -x et en -aux",
    [
      "On dicte les trois phrases, entières puis par groupes. Il écrit tout avant la correction.",
      "Avant de corriger, il repère les noms au pluriel et repasse au crayon de couleur la marque du pluriel de chacun.",
      "On corrige ensemble : les noms en -eau et en -eu prennent -x ; les noms en -ou prennent un s, sauf sept, qui prennent -x ; les noms en -al deviennent -aux. C’est la règle de la leçon du jour, « Le groupe du nom et ses accords ».",
    ],
    [
      "Les oiseaux se posent sur les poteaux du jardin.",
      "Les enfants ont rangé leurs jeux et leurs cailloux.",
      "Les journaux du matin annoncent trois orages.",
    ],
    [
      "Les oiseaux se posent sur les poteaux du jardin. — « -eau » fait « -eaux » : le pluriel s’écrit avec un x, jamais avec un s.",
      "Les enfants ont rangé leurs jeux et leurs cailloux. — « jeu » fait « jeux », et « caillou » fait partie des sept noms en -ou qui prennent un x.",
      "Les journaux du matin annoncent trois orages. — « journal » fait « journaux ». Le verbe s’accorde avec « les journaux », pas avec « du matin ».",
    ],
    "Les sept noms en -ou sont une liste à garder au dos du cahier : bijou, caillou, chou, genou, hibou, joujou, pou. S’il écrit « des caillous », il applique la règle générale, ce qui est le bon réflexe — c’est l’exception qui manque, pas la règle.",
  ),

  f(
    "ed-phrases-04",
    "Dictée de phrases",
    "Accord 4 · a ou à",
    [
      "Avant de dicter, on lui donne le test : a se remplace par « avait », à ne se remplace par rien. La leçon sur les mots qui se prononcent pareil ne vient que le 17 novembre : le test se donne, il ne se suppose pas. Puis on dicte les trois phrases entières, et par groupes. Il écrit tout d’abord.",
      "Avant la correction, il souligne les sujets et entoure les verbes, comme toujours, puis il essaie de remplacer chaque a ou à par « avait ».",
      "On corrige ensemble : si « avait » passe, c’est le verbe avoir, donc a sans accent. Sinon c’est à, le petit mot qui ne change jamais.",
    ],
    [
      "Papa a rangé les outils à côté de la porte.",
      "Il a promis à sa sœur de l’attendre à la sortie.",
      "Ma cousine a un chien qui obéit à son nom.",
    ],
    [
      "Papa a rangé les outils à côté de la porte. — « Papa avait rangé » se dit : c’est le verbe. « Avait côté » ne se dit pas : c’est à.",
      "Il a promis à sa sœur de l’attendre à la sortie. — un seul a verbe pour deux à. Le test se fait sur chacun séparément.",
      "Ma cousine a un chien qui obéit à son nom. — le deuxième verbe, « obéit », est commandé par « qui », qui remplace « un chien ».",
    ],
    "Le test du remplacement ne vaut que s’il le fait à voix haute : dit dans la tête, il donne toujours raison à ce qui est déjà écrit. On lui demande de le prononcer, même bas, même en marmonnant.",
  ),

  f(
    "ed-phrases-05",
    "Dictée de phrases",
    "Accord 5 · et ou est",
    [
      "Avant de dicter, on lui donne le test : est se remplace par « était », et par « et puis ». La leçon sur les mots qui se prononcent pareil ne vient que le 17 novembre : le test se donne, il ne se suppose pas. Puis on dicte les trois phrases entières, et par groupes de mots.",
      "Avant la correction, il essaie de remplacer chaque [e] par « était ». Là où ça passe, c’est est ; là où ça ne passe pas, c’est et.",
      "On corrige ensemble, en lui laissant dire le test à voix haute pour chaque mot.",
    ],
    [
      "Le ciel est gris et la mer est calme.",
      "Mon vélo est neuf et ses pneus sont larges.",
      "La route est longue et la nuit est déjà là.",
    ],
    [
      "Le ciel est gris et la mer est calme. — deux fois « était » passe, une fois non : deux est et un et.",
      "Mon vélo est neuf et ses pneus sont larges. — après le et, un nouveau sujet arrive, au pluriel : « sont ».",
      "La route est longue et la nuit est déjà là. — « là » avec accent, l’endroit ; à ne pas confondre avec « la » déterminant, juste avant « nuit ».",
    ],
    "La deuxième phrase demande deux choses à la fois : choisir entre et et est, puis accorder « sont » avec un sujet qui vient d’arriver. S’il réussit le premier point et manque le second, on ne revient pas sur et/est : c’est gagné, on travaille l’autre.",
  ),

  f(
    "ed-phrases-06",
    "Dictée de phrases",
    "Accord 6 · son ou sont",
    [
      "Avant de dicter, on lui donne le test : sont se remplace par « étaient », son par « mon ». La leçon sur les mots qui se prononcent pareil ne vient que le 17 novembre : le test se donne, il ne se suppose pas. Puis on dicte les trois phrases entières, et par groupes.",
      "Avant la correction, il remplace chaque [sɔ̃] par « étaient ». Si la phrase tient, c’est sont ; sinon c’est son, qui accompagne toujours un nom.",
      "On corrige ensemble : il montre du doigt le nom que son accompagne, à chaque fois.",
    ],
    [
      "Léo range son cahier : les devoirs sont terminés.",
      "Son écharpe et son bonnet sont restés dans l’entrée.",
      "Les voisins sont partis avec son chien sous le bras.",
    ],
    [
      "Léo range son cahier : les devoirs sont terminés. — « son » tient à « cahier », « sont » a pour sujet « les devoirs ».",
      "Son écharpe et son bonnet sont restés dans l’entrée. — deux sujets reliés par et font un pluriel : « sont restés ».",
      "Les voisins sont partis avec son chien sous le bras. — le sujet est « les voisins » ; « son chien » est un complément et ne commande rien.",
    ],
    "La deuxième phrase contient les trois formes dans un mouchoir de poche. S’il écrit « sont écharpe », c’est le test qui n’a pas été fait plutôt que la règle qui manque : on refait le test devant lui, à voix haute, et il le refait seul sur la troisième.",
  ),

  f(
    "ed-phrases-07",
    "Dictée de phrases",
    "Accord 7 · on ou ont",
    [
      "Avant de dicter, on lui donne le test : ont se remplace par « avaient », on par « il ». La leçon sur les mots qui se prononcent pareil ne vient que le 17 novembre : le test se donne, il ne se suppose pas. Puis on dicte les trois phrases entières, et par groupes.",
      "Avant la correction, il remplace chaque [ɔ̃] par « avaient ». Si ça passe, c’est ont ; sinon c’est on, qu’on peut remplacer par « il ».",
      "On corrige ensemble, chaque test dit à voix haute.",
    ],
    [
      "On entend la pluie : les gouttières ont débordé.",
      "Les voisins ont allumé le feu et on sent la fumée.",
      "On rentre les chaises : les invités ont fini de manger.",
    ],
    [
      "On entend la pluie : les gouttières ont débordé. — « il entend » passe pour le premier, « avaient débordé » pour le second.",
      "Les voisins ont allumé le feu et on sent la fumée. — après ont, le participe en -é ; après on, le verbe se conjugue à la 3e personne du singulier.",
      "On rentre les chaises : les invités ont fini de manger. — « ont fini » est un passé composé, « de manger » reste à l’infinitif après la préposition.",
    ],
    "Le double test — « il » pour on, « avaient » pour ont — est plus sûr qu’un seul. S’il n’en applique qu’un, il se trompera là où les deux formes se suivent, comme dans la deuxième phrase : c’est le second test qu’on installe.",
  ),

  f(
    "ed-phrases-08",
    "Dictée de phrases",
    "Accord 8 · ce ou se",
    [
      "Avant de dicter, on lui dit la règle écrite juste en dessous : aucune leçon de l’année ne porte sur ce et se, elle se donne donc ici. Puis on dicte les trois phrases entières, et par groupes.",
      "Avant la correction : devant un nom, c’est ce, qu’on peut remplacer par « ces » au pluriel. Devant un verbe, c’est se, qu’on peut remplacer par « me » en changeant de personne.",
      "On corrige ensemble : il dit pour chaque cas si le mot suivant est un nom ou un verbe.",
    ],
    [
      "Ce matin, le chat se cache derrière ce rideau.",
      "Ce livre se lit vite, et ce chapitre se termine bien.",
      "Ce chemin se perd dans les arbres, mais ce n’est pas grave.",
    ],
    [
      "Ce matin, le chat se cache derrière ce rideau. — « ce » devant « matin » et « rideau », deux noms ; « se » devant « cache », un verbe.",
      "Ce livre se lit vite, et ce chapitre se termine bien. — même schéma deux fois : c’est la régularité du couple nom / verbe qu’on veut voir apparaître.",
      "Ce chemin se perd dans les arbres, mais ce n’est pas grave. — le dernier « ce » n’accompagne aucun nom : devant le verbe être, c’est toujours ce.",
    ],
    "La troisième phrase casse la règle simple, et c’est fait exprès. S’il écrit « se n’est pas grave », il a bien appliqué « se devant un verbe » : on ne défait pas sa règle, on lui ajoute la seule exception, « ce » devant être.",
  ),

  f(
    "ed-phrases-09",
    "Dictée de phrases",
    "Accord 9 · quand le sujet est loin du verbe",
    [
      "On dicte les trois phrases entières, puis par groupes de mots. Il écrit tout avant la correction.",
      "Avant de corriger, il souligne le sujet, entoure le verbe, et trace une flèche de l’un à l’autre, en passant par-dessus tout ce qui se met entre les deux.",
      "On corrige ensemble : le mot juste avant le verbe n’est pas forcément le sujet. C’est la question « qui est-ce qui… ? » qui décide.",
    ],
    [
      "Les enfants de la maison voisine jouent dans la cour.",
      "Le chien du gardien aboie dès que la grille grince.",
      "Les fenêtres du grenier laissent passer un filet de lumière.",
    ],
    [
      "Les enfants de la maison voisine jouent dans la cour. — « qui est-ce qui joue ? » les enfants, pas la maison : pluriel, -ent.",
      "Le chien du gardien aboie dès que la grille grince. — deux fois le même piège dans la même phrase, et deux singuliers.",
      "Les fenêtres du grenier laissent passer un filet de lumière. — le sujet est pluriel, le complément est singulier : c’est le sujet qui commande.",
    ],
    "La flèche tracée au crayon en dit plus que la copie : si elle part du bon mot et que la terminaison est fausse, c’est l’écriture qui a devancé la pensée. Si elle part du mot le plus proche, c’est la question « qui est-ce qui » qu’on réinstalle.",
  ),

  f(
    "ed-phrases-10",
    "Dictée de phrases",
    "Accord 10 · l’adjectif qui suit le verbe être",
    [
      "On dicte les trois phrases entières, puis par groupes.",
      "Avant la correction, il relie d’une flèche chaque adjectif au nom qu’il décrit, même quand le verbe est entre les deux.",
      "On corrige ensemble : après être, sembler, rester, devenir, l’adjectif s’accorde avec le sujet aussi sûrement que s’il le touchait.",
    ],
    [
      "Les pommes du panier sont mûres et sucrées.",
      "La nuit semble longue quand le vent reste fort.",
      "Mes mains étaient froides et mes joues étaient rouges.",
    ],
    [
      "Les pommes du panier sont mûres et sucrées. — deux adjectifs pour un seul sujet féminin pluriel : tous les deux prennent -es.",
      "La nuit semble longue quand le vent reste fort. — sembler et rester se comportent comme être : féminin d’un côté, masculin de l’autre.",
      "Mes mains étaient froides et mes joues étaient rouges. — « rouges » ne prend pas de e supplémentaire, il en a déjà un.",
    ],
    "« Rouges » vaut la même remarque que « vieux » : la marque est déjà là. S’il écrit « rougees », la règle fonctionne et c’est la forme du mot qui surprend — on cherche ensemble d’autres adjectifs qui finissent déjà par e.",
  ),

  f(
    "ed-phrases-11",
    "Dictée de phrases",
    "Accord 11 · ces ou ses",
    [
      "Avant de dicter, on lui dit la règle écrite juste en dessous : aucune leçon de l’année ne porte sur ces et ses, elle se donne donc ici. Puis on dicte les trois phrases entières, et par groupes.",
      "Avant la correction : ses veut dire « les siens », on peut le remplacer par « son » au singulier. Ces montre du doigt, on peut le remplacer par « ce » ou « cette ».",
      "On corrige ensemble : il fait le remplacement à voix haute pour chaque mot.",
    ],
    [
      "Paul a perdu ses gants près de ces arbres.",
      "Léa range ses crayons dans ces boîtes de bois.",
      "Ces chemins mènent au village où elle a laissé ses valises.",
    ],
    [
      "Paul a perdu ses gants près de ces arbres. — « son gant » passe, « cet arbre » passe : un de chaque.",
      "Léa range ses crayons dans ces boîtes de bois. — même ordre que la phrase précédente, pour que la régularité se voie.",
      "Ces chemins mènent au village où elle a laissé ses valises. — l’ordre s’inverse : c’est là qu’on voit si le test est fait ou si la place est apprise.",
    ],
    "La troisième phrase inverse l’ordre exprès. S’il réussit les deux premières et se trompe sur la dernière, il n’a pas appliqué le test : il a retenu que le premier est ses et le second ces. On le lui dit, et on refait les trois dans le désordre.",
  ),

  f(
    "ed-phrases-12",
    "Dictée de phrases",
    "Accord 12 · le participe passé avec être",
    [
      "On dicte les trois phrases entières, puis par groupes.",
      "Avant la correction, il entoure l’auxiliaire être et relie le participe au sujet par une flèche.",
      "On corrige ensemble : avec être, le participe passé se comporte comme un adjectif — il prend le genre et le nombre du sujet.",
    ],
    [
      "Les feuilles sont tombées pendant la nuit.",
      "Mes cousines sont arrivées avant nous.",
      "Les portes du garage sont restées ouvertes toute la journée.",
    ],
    [
      "Les feuilles sont tombées pendant la nuit. — sujet féminin pluriel : -ées, deux marques d’un coup.",
      "Mes cousines sont arrivées avant nous. — même accord ; « avant nous » ne change rien, ce n’est pas le sujet.",
      "Les portes du garage sont restées ouvertes toute la journée. — le participe et l’adjectif s’accordent tous les deux avec « les portes ».",
    ],
    "Deux marques à la suite — le e du féminin puis le s du pluriel — se perdent souvent l’une après l’autre. S’il écrit « tombés », le genre a sauté ; s’il écrit « tombée », c’est le nombre. Ce n’est pas la même chose à retravailler.",
  ),

  f(
    "ed-phrases-13",
    "Dictée de phrases",
    "Accord 13 · l’imparfait et ses terminaisons",
    [
      "On dicte les trois phrases entières, puis par groupes. On annonce le temps avant : c’est l’imparfait.",
      "Avant la correction, il entoure les verbes et écrit à côté de chacun la personne — 1re, 2e ou 3e, singulier ou pluriel.",
      "On corrige ensemble : les terminaisons de l’imparfait sont les mêmes pour tous les verbes, sans exception — -ais, -ais, -ait, -ions, -iez, -aient.",
    ],
    [
      "Chaque soir, nous allumions la lampe et nous lisions ensemble.",
      "Le vent soufflait, les volets claquaient, personne ne dormait.",
      "Tu regardais la carte pendant que je cherchais la route.",
    ],
    [
      "Chaque soir, nous allumions la lampe et nous lisions ensemble. — 1re personne du pluriel : -ions, avec le i qu’on entend à peine.",
      "Le vent soufflait, les volets claquaient, personne ne dormait. — singulier, pluriel, singulier. « Personne » est un sujet singulier.",
      "Tu regardais la carte pendant que je cherchais la route. — -ais aux deux premières personnes : le son est le même, l’orthographe aussi.",
    ],
    "« Personne » comme sujet singulier surprend toujours la première fois — le mot dit le contraire de ce qu’il fait. On le range avec « tout le monde », « chacun », « rien », qui jouent le même tour.",
  ),

  f(
    "ed-phrases-14",
    "Dictée de phrases",
    "Accord 14 · le futur et ses terminaisons",
    [
      "On dicte les trois phrases entières, puis par groupes. On annonce le temps : c’est le futur.",
      "Avant la correction, il entoure les verbes et repasse en couleur le r qui les annonce tous.",
      "On corrige ensemble : au futur, on garde l’infinitif entier et on ajoute -ai, -as, -a, -ons, -ez, -ont. Le r est là même quand on l’entend mal.",
    ],
    [
      "Demain, nous partirons tôt et nous prendrons le petit chemin.",
      "Tu verras la mer dès que la route tournera.",
      "Les jardiniers planteront les arbres quand la pluie reviendra.",
    ],
    [
      "Demain, nous partirons tôt et nous prendrons le petit chemin. — deux verbes au futur pour un même sujet : chacun garde son r.",
      "Tu verras la mer dès que la route tournera. — « verras » vient de voir et garde deux r, « tournera » n’en a qu’un.",
      "Les jardiniers planteront les arbres quand la pluie reviendra. — -ront au pluriel, -ra au singulier : c’est le sujet qui décide, comme toujours.",
    ],
    "Le double r de « verras » vient de ce que le futur de voir est « verr- » : le premier r appartient au radical, le second au futur. S’il n’en met qu’un, c’est le radical qu’on regarde, pas la terminaison.",
  ),

  f(
    "ed-phrases-15",
    "Dictée de phrases",
    "Accord 15 · -er ou -é à la fin du verbe",
    [
      "On dicte les trois phrases entières, puis par groupes.",
      "Avant la correction, il remplace chaque verbe en [e] par « vendre » ou par « vendu ». Si « vendre » passe, c’est -er ; si c’est « vendu », c’est -é.",
      "On corrige ensemble, le test dit à voix haute pour chaque verbe.",
    ],
    [
      "Il a décidé de ranger sa chambre avant de sortir.",
      "Le gâteau est terminé : il faut le laisser refroidir.",
      "Elle a commencé à chanter sans regarder la partition.",
    ],
    [
      "Il a décidé de ranger sa chambre avant de sortir. — « a vendu » pour le premier, « de vendre » pour le second.",
      "Le gâteau est terminé : il faut le laisser refroidir. — « est vendu » pour terminé ; après « il faut », l’infinitif.",
      "Elle a commencé à chanter sans regarder la partition. — un participe puis deux infinitifs : après « à » et après « sans », le verbe ne se conjugue pas.",
    ],
    "Le test marche parce que « vendre » et « vendu » ne s’entendent pas pareil, alors que -er et -é si. S’il l’applique en pensée, il le fait mal ; à voix haute, il ne se trompe presque jamais. C’est le dire qu’on installe, pas la règle.",
  ),

  f(
    "ed-phrases-16",
    "Dictée de phrases",
    "Accord 16 · le sujet qui, et le sujet placé après le verbe",
    [
      "On dicte les trois phrases entières, puis par groupes. Les deux premières sont des questions : on le dit avant de commencer, la ponctuation en dépend.",
      "Avant la correction, il souligne le sujet de chaque verbe — même quand ce sujet est « qui », même quand il arrive après.",
      "On corrige ensemble : « qui » prend le nombre du mot qu’il remplace, et un sujet placé après le verbe commande tout autant.",
    ],
    [
      "Où vont les bateaux qui passent devant le phare ?",
      "Que cherchent les oiseaux qui tournent au-dessus du champ ?",
      "Dans le jardin poussent des fleurs qui sentent très fort.",
    ],
    [
      "Où vont les bateaux qui passent devant le phare ? — le sujet de « vont » arrive après ; « qui » remplace « les bateaux », donc pluriel lui aussi.",
      "Que cherchent les oiseaux qui tournent au-dessus du champ ? — même construction, et le point d’interrogation à la fin.",
      "Dans le jardin poussent des fleurs qui sentent très fort. — le sujet est « des fleurs », placé après le verbe. « Le jardin » est un complément de lieu.",
    ],
    "Le sujet placé après le verbe est le piège le plus efficace de l’année : tout invite à accorder avec ce qui précède. S’il écrit « Dans le jardin pousse », il a suivi l’ordre des mots, pas le sens. On lui fait poser la question « qu’est-ce qui pousse ? » et il se corrige seul.",
  ),

  f(
    "ed-phrases-17",
    "Dictée de phrases",
    "Accord 17 · toute la chaîne, d’un bout à l’autre",
    [
      "Dernière fiche de la série : les trois phrases demandent tout ce qui a été travaillé depuis septembre. On dicte entier, puis par groupes, et on laisse le temps de relire.",
      "Avant la correction, il fait le chemin complet : souligner les sujets, entourer les verbes, relier les adjectifs et les participes à leur nom.",
      "On corrige ensemble, et on ne compte rien. On regarde par où la chaîne a tenu et où elle s’est arrêtée.",
    ],
    [
      "Les longues barques rouges sont attachées au bout du quai.",
      "Ces vieux murs gris, couverts de mousse, protègent le potager.",
      "Mes deux sœurs, fatiguées par la marche, se sont assises sur un banc.",
    ],
    [
      "Les longues barques rouges sont attachées au bout du quai. — féminin pluriel jusqu’au participe : quatre mots portent la marque, et « rouges » ne prend qu’un s.",
      "Ces vieux murs gris, couverts de mousse, protègent le potager. — trois mots invariables au masculin pluriel — vieux, gris — puis un participé accordé, puis le verbe, très loin de son sujet.",
      "Mes deux sœurs, fatiguées par la marche, se sont assises sur un banc. — « deux » suffit à marquer le nombre, et l’accord franchit une incise entière avant d’atteindre « assises ».",
    ],
    "Cette fiche sert à voir jusqu’où la chaîne tient, pas à mesurer. Si elle casse toujours au même endroit — après la virgule, ou au participe — c’est ce maillon-là qu’on reprend la fois suivante, seul, dans une phrase courte.",
  ),

  /* ------------------------------------------------------------------ *
   *  Dictée préparée — quinze textes, préparés au début de la séance, dictés
   *  aussitôt. Rien ne se fait la veille : rien dans le cahier ne porte une
   *  tâche de la veille, et elle tomberait souvent un dimanche ou un mercredi.
   * ------------------------------------------------------------------ */

  f(
    "ed-preparee-01",
    "Dictée préparée",
    "Texte 1 · Le jardin en septembre",
    [
      "Au début de la séance, cinq à dix minutes : il lit le texte à voix haute, deux fois, et on regarde ensemble les points listés plus bas. C’est une préparation, pas une leçon.",
      "Puis on retourne le texte et on dicte par groupes de mots, sans donner la ponctuation autrement qu’en marquant les silences. On relit le texte entier une dernière fois avant qu’il pose le stylo.",
      "Il compare lui-même sa copie avec l’original, ligne à ligne, et souligne les différences. C’est lui qui trouve, on ne montre rien.",
    ],
    [
      "Le texte à dicter :",
      "Le jardin a changé pendant les vacances. Les feuilles du grand tilleul commencent à jaunir.",
      "Sur la table de bois, deux pommes oubliées attendent. Le vent passe, la porte claque, et le chat rentre en courant.",
      "À préparer ensemble, au début de la séance :",
      "« tilleul » : deux l au milieu, comme dans « feuille », et un seul à la fin.",
      "« les feuilles… commencent » : le sujet est au pluriel et il est loin du verbe.",
      "« à jaunir » : après « commencent à », le verbe reste à l’infinitif.",
      "« deux pommes oubliées » : le participe suit le nom, au féminin pluriel.",
      "« en courant » : le participe présent finit toujours par -ant.",
    ],
    undefined,
    "La comparaison qu’il fait seul vaut plus que la copie. S’il repère six différences sur sept, c’est que la relecture fonctionne : la septième se travaille, pas la dictée entière.",
  ),

  f(
    "ed-preparee-02",
    "Dictée préparée",
    "Texte 2 · La pluie d’octobre",
    [
      "Au début de la séance : lecture à voix haute, puis les points de préparation, dix minutes au maximum.",
      "Puis, le texte retourné : dictée par groupes de mots, relecture complète à la fin.",
      "Il compare seul avec l’original et souligne ce qui diffère. On en parle après, pas pendant.",
    ],
    [
      "Le texte à dicter :",
      "Depuis trois jours, il pleut sans arrêt. Les gouttières débordent et l’eau creuse un petit chemin devant la porte.",
      "Mon frère a posé une planche pour passer. Nous marchons dessus l’un après l’autre, très lentement.",
      "À préparer ensemble, au début de la séance :",
      "« il pleut » : ce verbe n’a qu’une personne, toujours la troisième du singulier.",
      "« les gouttières débordent » : sujet pluriel, terminaison -ent qu’on n’entend pas.",
      "« a posé » : passé composé avec avoir, le participe s’écrit -é.",
      "« pour passer » : après « pour », l’infinitif.",
      "« lentement » : l’adjectif féminin « lente » plus -ment.",
    ],
    undefined,
    "Les deux terminaisons muettes du texte — « débordent » et « marchons » — sont le vrai sujet. S’il les tient toutes les deux, le reste du texte est du vocabulaire, et le vocabulaire s’apprend en le voyant.",
  ),

  f(
    "ed-preparee-03",
    "Dictée préparée",
    "Texte 3 · Le phare",
    [
      "Au début de la séance, cinq à dix minutes : il lit le texte deux fois à voix haute, puis on regarde les points de préparation ensemble.",
      "Puis on retourne le texte, on dicte par groupes de mots, on relit tout à la fin.",
      "Il compare seul sa copie avec l’original et souligne les différences avant qu’on en parle.",
    ],
    [
      "Le texte à dicter :",
      "Le phare se dresse au bout de la jetée. Chaque nuit, sa lumière tourne et balaie la mer.",
      "Les bateaux la cherchent de très loin. Quand le brouillard tombe, une corne de brume répond à sa place.",
      "À préparer ensemble, au début de la séance :",
      "« se dresse » : se devant un verbe, deux lettres seulement.",
      "« tourne et balaie » : deux verbes pour un même sujet singulier.",
      "« les bateaux la cherchent » : le sujet est pluriel, « la » est un complément.",
      "« brouillard » : le d final ne s’entend pas, et il s’apprend avec le mot.",
      "« une corne de brume » : deux noms féminins qui ne portent aucune marque de pluriel.",
    ],
    undefined,
    "« Les bateaux la cherchent » est le point du texte : le mot juste avant le verbe est singulier. S’il écrit « cherche », ce n’est pas l’accord qui manque mais l’habitude de regarder plus loin que le mot d’à côté.",
  ),

  f(
    "ed-preparee-04",
    "Dictée préparée",
    "Texte 4 · Le marché du samedi",
    [
      "Au début de la séance : lecture à voix haute puis préparation, dix minutes au maximum.",
      "Puis, le texte retourné : dictée par groupes de mots. Le texte est un peu plus long, on relit deux fois à la fin.",
      "Il compare seul, souligne, et dit ce qu’il a trouvé.",
    ],
    [
      "Le texte à dicter :",
      "Le marché s’installe avant le jour. Les marchands déplient leurs tables, allument une lampe, posent les cageots de légumes.",
      "À huit heures, les allées sont pleines de monde et les voix se mélangent.",
      "On sent le pain chaud jusqu’au bout de la rue.",
      "À préparer ensemble, au début de la séance :",
      "« déplient, allument, posent » : trois verbes de suite, un seul sujet pluriel.",
      "« les allées sont pleines » : l’adjectif après être s’accorde avec le sujet.",
      "« les voix » : le x est déjà là au singulier, il ne bouge pas.",
      "« on sent » : on est un sujet singulier, même quand il désigne plusieurs personnes.",
      "« jusqu’au » : un seul mot soudé par l’apostrophe.",
    ],
    undefined,
    "Trois verbes de suite avec un seul sujet : c’est là que la marque du pluriel se perd d’habitude, sur le deuxième ou le troisième. Si les trois tiennent, la chaîne est solide et on peut allonger les textes.",
  ),

  f(
    "ed-preparee-05",
    "Dictée préparée",
    "Texte 5 · La forêt en novembre",
    [
      "Au début de la séance, cinq à dix minutes : lecture à voix haute, deux fois, puis les points de préparation.",
      "Puis, le texte retourné : dictée par groupes de mots, relecture entière avant de poser le stylo.",
      "Il compare seul avec l’original, souligne les différences, et explique celles qu’il comprend.",
    ],
    [
      "Le texte à dicter :",
      "La forêt sent la terre mouillée. Les hêtres ont perdu presque toutes leurs feuilles, et l’on voit enfin le ciel entre les branches.",
      "Un écureuil traverse le sentier, s’arrête, repart.",
      "Plus loin, un tronc couché sert de pont au-dessus du ruisseau.",
      "À préparer ensemble, au début de la séance :",
      "« la terre mouillée » : féminin singulier, un seul e à la fin du participe.",
      "« ont perdu » : passé composé avec avoir ; le participe de perdre finit par u.",
      "« toutes leurs feuilles » : trois mots au féminin pluriel à la suite.",
      "« traverse, s’arrête, repart » : un seul écureuil pour trois verbes au singulier.",
      "« au-dessus » : avec un trait d’union.",
    ],
    undefined,
    "Le texte fait alterner les singuliers et les pluriels exprès. Ce qu’on regarde, c’est s’il change de marque en changeant de groupe, ou s’il garde la même sur toute une ligne.",
  ),

  f(
    "ed-preparee-06",
    "Dictée préparée",
    "Texte 6 · Le village au Moyen Âge",
    [
      "Au début de la séance, cinq à dix minutes : lecture à voix haute. Ce texte croise ce qu’il voit en histoire ; on en profite pour en parler une minute avant de regarder l’orthographe.",
      "Puis, le texte retourné : dictée par groupes de mots, relecture complète.",
      "Il compare seul avec l’original et souligne les différences.",
    ],
    [
      "Le texte à dicter :",
      "Au Moyen Âge, le village se serrait autour de l’église. Les paysans travaillaient les terres du seigneur et lui donnaient une part de leur récolte.",
      "Le moulin, le four et le pressoir appartenaient au château.",
      "Quand le danger approchait, tout le monde montait derrière les murs.",
      "À préparer ensemble, au début de la séance :",
      "« Moyen Âge » : deux majuscules, et l’accent circonflexe se garde sur la majuscule.",
      "« travaillaient, donnaient, appartenaient » : imparfait, 3e personne du pluriel, -aient.",
      "« se serrait » : imparfait au singulier, -ait.",
      "« tout le monde montait » : sujet singulier malgré le sens, donc -ait.",
      "« seigneur » et « récolte » : deux mots à regarder lettre à lettre.",
    ],
    undefined,
    "La bascule entre -ait et -aient est tout le texte. « Tout le monde montait » est le piège : le mot dit une foule et commande un singulier. S’il écrit -aient là, le raisonnement est bon, c’est le sujet qui trompe.",
  ),

  f(
    "ed-preparee-07",
    "Dictée préparée",
    "Texte 7 · La nuit d’hiver",
    [
      "Au début de la séance, cinq à dix minutes : lecture à voix haute, deux fois, puis les points de préparation.",
      "Puis, le texte retourné : dictée par groupes de mots. Ce texte est au passé composé, on le dit avant de commencer.",
      "Il compare seul, souligne, et dit ce qu’il a trouvé.",
    ],
    [
      "Le texte à dicter :",
      "Il a gelé cette nuit. Les flaques sont devenues dures et blanches, et la barrière brille comme du verre.",
      "Nous sommes sortis en silence, emmitouflés jusqu’aux oreilles.",
      "Nos pas craquaient, et le chien courait devant nous sans se retourner.",
      "À préparer ensemble, au début de la séance :",
      "« il a gelé » : avec avoir, le participe ne bouge pas.",
      "« sont devenues dures et blanches » : avec être, le participe et les adjectifs prennent le féminin pluriel.",
      "« nous sommes sortis, emmitouflés » : masculin pluriel, deux fois.",
      "« craquaient, courait » : imparfait, pluriel puis singulier.",
      "« sans se retourner » : après « sans », l’infinitif.",
    ],
    undefined,
    "Deux auxiliaires dans le même texte, et deux comportements opposés du participe. S’il accorde après avoir, c’est la règle d’être qui déborde — signe qu’elle est apprise, et qu’il faut maintenant la borner.",
  ),

  f(
    "ed-preparee-08",
    "Dictée préparée",
    "Texte 8 · Les oiseaux qui partent",
    [
      "Au début de la séance, cinq à dix minutes : lecture à voix haute, puis les points de préparation.",
      "Puis, le texte retourné : dictée par groupes de mots. Le texte change de temps en cours de route : on le signale une fois, au début.",
      "Il compare seul avec l’original.",
    ],
    [
      "Le texte à dicter :",
      "Chaque automne, des milliers d’oiseaux quittent nos régions. Ils volent en groupe, très haut, et suivent des chemins que personne ne leur a appris.",
      "Certains traverseront la mer sans se poser une seule fois.",
      "Au printemps, ils reviendront exactement au même endroit.",
      "À préparer ensemble, au début de la séance :",
      "« des milliers d’oiseaux quittent » : le sujet est « des milliers », pluriel.",
      "« volent » et « suivent » : deux verbes, un seul sujet, deux fois -ent.",
      "« personne ne leur a appris » : « personne » commande un singulier.",
      "« traverseront, reviendront » : futur, 3e personne du pluriel, -ront.",
      "« exactement » : l’adjectif « exacte » plus -ment.",
    ],
    undefined,
    "Le passage du présent au futur se voit à l’œil nu dans la copie : soit les deux derniers verbes portent le r, soit aucun. S’il manque, ce n’est pas l’orthographe du futur mais le repérage du changement de temps.",
  ),

  f(
    "ed-preparee-09",
    "Dictée préparée",
    "Texte 9 · La cuisine du dimanche",
    [
      "Au début de la séance, cinq à dix minutes : lecture à voix haute puis préparation.",
      "Puis, le texte retourné : dictée par groupes de mots, relecture entière à la fin.",
      "Il compare seul avec l’original et souligne les différences.",
    ],
    [
      "Le texte à dicter :",
      "Le dimanche matin, la cuisine ne ressemble à rien d’autre. La farine couvre la table, les mains sont blanches, la pâte colle aux doigts.",
      "Ma grand-mère raconte pendant qu’elle pétrit.",
      "Une heure plus tard, toute la maison sent la brioche tiède.",
      "À préparer ensemble, au début de la séance :",
      "« ne ressemble à rien » : la négation en deux morceaux, ne… rien.",
      "« les mains sont blanches » : féminin pluriel, deux marques.",
      "« aux doigts » : le g ne s’entend pas, il se retrouve dans « doigté ».",
      "« grand-mère » : trait d’union, et « grand » ne prend pas de e.",
      "« pétrit » : 3e personne du singulier d’un verbe en -ir, terminaison -it.",
    ],
    undefined,
    "Le texte glisse trois fois du singulier au pluriel en une ligne. Ce qu’on observe : est-ce qu’il relit groupe par groupe, ou d’un trait ? La relecture par groupes est ce qui attrape ces erreurs-là, et elle s’apprend.",
  ),

  f(
    "ed-preparee-10",
    "Dictée préparée",
    "Texte 10 · Le chantier de la cathédrale",
    [
      "Au début de la séance, cinq à dix minutes : lecture à voix haute. Encore un texte d’histoire — on parle du chantier avant de parler des mots.",
      "Puis, le texte retourné : dictée par groupes de mots. Le texte est à l’imparfait, on le dit avant.",
      "Il compare seul avec l’original.",
    ],
    [
      "Le texte à dicter :",
      "Construire une cathédrale prenait parfois deux cents ans. Les tailleurs de pierre, les charpentiers et les verriers travaillaient côte à côte.",
      "Les échafaudages de bois montaient à mesure que les murs s’élevaient.",
      "Ceux qui avaient commencé le chantier ne voyaient jamais la dernière pierre posée.",
      "À préparer ensemble, au début de la séance :",
      "« construire… prenait » : le sujet est un verbe à l’infinitif, donc singulier.",
      "« deux cents ans » : cent prend un s quand il est multiplié et qu’aucun nombre ne le suit.",
      "« tailleurs, charpentiers, verriers » : trois pluriels de suite avant un seul verbe.",
      "« échafaudages » : le h après le c, et le g avant le e.",
      "« ceux qui avaient commencé » : « qui » remplace « ceux », donc pluriel.",
    ],
    undefined,
    "« Construire une cathédrale prenait » est le point le plus exigeant de la série : le sujet n’est pas un nom. S’il écrit « prenaient », il a accordé avec « cathédrale » — le raisonnement est là, c’est le sujet qui a été mal trouvé, et ça se montre d’une flèche.",
  ),

  f(
    "ed-preparee-11",
    "Dictée préparée",
    "Texte 11 · La rivière au printemps",
    [
      "Au début de la séance, cinq à dix minutes : lecture à voix haute, puis les points de préparation.",
      "Puis, le texte retourné : dictée par groupes de mots, relecture complète.",
      "Il compare seul, souligne, explique ce qu’il peut.",
    ],
    [
      "Le texte à dicter :",
      "La rivière a grossi. Elle emporte des branches, des herbes arrachées, une planche qui tourne sur elle-même.",
      "Sur la berge, les premières fleurs jaunes sont déjà sorties.",
      "Nous restons longtemps assis à regarder passer l’eau, sans rien dire.",
      "À préparer ensemble, au début de la séance :",
      "« a grossi » : avec avoir, le participe reste tel quel.",
      "« des herbes arrachées » : féminin pluriel, deux marques sur le participe.",
      "« qui tourne » : « qui » remplace « une planche », singulier.",
      "« les premières fleurs jaunes sont sorties » : quatre mots accordés à la file.",
      "« nous restons assis » : l’adjectif s’accorde avec « nous », masculin pluriel.",
    ],
    undefined,
    "La ligne « les premières fleurs jaunes sont déjà sorties » demande quatre accords d’affilée. On regarde à quel rang la chaîne lâche : au deuxième mot, c’est l’attention ; au quatrième, c’est la longueur, et il suffit de relire par groupes.",
  ),

  f(
    "ed-preparee-12",
    "Dictée préparée",
    "Texte 12 · L’orage",
    [
      "Au début de la séance, cinq à dix minutes : lecture à voix haute, deux fois, puis la préparation.",
      "Puis, le texte retourné : dictée par groupes de mots. Deux temps se croisent dans ce texte, le passé composé et l’imparfait : on le signale au début.",
      "Il compare seul avec l’original et souligne.",
    ],
    [
      "Le texte à dicter :",
      "L’air est devenu lourd. Les hirondelles volaient bas, les feuilles se retournaient.",
      "Un coup de tonnerre a roulé, et la pluie est arrivée d’un seul coup, droite et serrée.",
      "Dix minutes plus tard, le soleil brillait sur les toits mouillés.",
      "À préparer ensemble, au début de la séance :",
      "« est devenu » avec être mais sujet masculin singulier : aucune marque visible.",
      "« volaient, se retournaient, brillait » : imparfait, pluriel puis singulier.",
      "« a roulé » avec avoir, « est arrivée » avec être : deux comportements opposés.",
      "« droite et serrée » : deux adjectifs accordés avec « la pluie ».",
      "« les toits mouillés » : masculin pluriel, et le t de « toits » ne s’entend pas.",
    ],
    undefined,
    "Ce texte met les deux auxiliaires à deux lignes d’écart, avec le même son à la fin du participe. C’est le meilleur endroit de l’année pour voir si la règle d’être est devenue un réflexe ou si elle s’applique partout.",
  ),

  f(
    "ed-preparee-13",
    "Dictée préparée",
    "Texte 13 · Le vieux pommier",
    [
      "Au début de la séance, cinq à dix minutes : lecture à voix haute, puis préparation.",
      "Puis, le texte retourné : dictée par groupes de mots. Le texte est long, on peut le couper en deux séances si besoin — il vaut mieux la moitié bien menée que le tout à la course.",
      "Il compare seul avec l’original.",
    ],
    [
      "Le texte à dicter :",
      "Le pommier du fond du pré est plus vieux que la maison. Son tronc est creux, ses branches partent de travers, mais il donne encore des pommes.",
      "Mon grand-père dit qu’il l’a toujours connu.",
      "Nous avons accroché une balançoire à la plus grosse branche, celle qui ne bouge pas.",
      "À préparer ensemble, au début de la séance :",
      "« le pommier du fond du pré est » : le sujet est le premier mot, le verbe arrive cinq mots plus loin.",
      "« ses branches partent » : son au singulier, ses au pluriel, et le verbe suit.",
      "« il l’a toujours connu » : le participe reste au masculin singulier.",
      "« nous avons accroché » : le participe reste en -é, il ne s’accorde pas avec « nous ».",
      "« celle qui ne bouge pas » : « celle » remplace « branche », féminin singulier.",
    ],
    undefined,
    "Deux participes avec avoir, tous deux invariables, dans un texte plein de féminins. S’il écrit « accrochée », c’est « balançoire » qui a attiré l’accord : on lui montre que le mot vient après le verbe, et la règle redevient lisible.",
  ),

  f(
    "ed-preparee-14",
    "Dictée préparée",
    "Texte 14 · La lettre retrouvée",
    [
      "Au début de la séance, cinq à dix minutes : lecture à voix haute, deux fois, puis les points de préparation.",
      "Puis, le texte retourné : dictée par groupes de mots, relecture entière.",
      "Il compare seul avec l’original et souligne les différences.",
    ],
    [
      "Le texte à dicter :",
      "Dans le tiroir du bas, nous avons trouvé une lettre pliée en quatre.",
      "L’encre avait pâli, mais les mots tenaient encore.",
      "Elle était datée de 1917 et signée d’un prénom que personne ne connaissait.",
      "Nous l’avons relue à voix basse avant de la remettre où elle était.",
      "À préparer ensemble, au début de la séance :",
      "« une lettre pliée en quatre » : le participe suit le nom et s’accorde avec lui.",
      "« avait pâli, tenaient » : le premier verbe est au singulier, le second au pluriel.",
      "« était datée et signée » : deux participes accordés avec « elle ».",
      "« personne ne connaissait » : sujet singulier, encore une fois.",
      "« nous l’avons relue » : ici le participe s’accorde, parce que « l’ » remplace « la lettre » et vient avant le verbe.",
    ],
    undefined,
    "Le dernier point est en avance sur le programme, et c’est voulu : il rencontre l’exception avant qu’on la lui demande. S’il écrit « relu », c’est parfaitement cohérent avec ce qu’il sait — on le lui dit avant d’expliquer.",
  ),

  f(
    "ed-preparee-15",
    "Dictée préparée",
    "Texte 15 · Le départ en mer",
    [
      "Dernier texte de la série, et le plus chargé en accords. Au début de la séance, cinq à dix minutes : lecture à voix haute deux fois, puis la préparation complète.",
      "Puis, le texte retourné : dictée par groupes de mots, deux relectures à la fin.",
      "Il compare seul, souligne, et choisit lui-même les deux points qu’il veut revoir. On ne compte rien.",
    ],
    [
      "Le texte à dicter :",
      "Le bateau quitte le port à six heures.",
      "Les cordes sont larguées, le moteur s’emballe, et la jetée s’éloigne doucement.",
      "Derrière nous, les maisons deviennent des taches blanches.",
      "Devant, il n’y a plus qu’une ligne droite entre le ciel et l’eau, et personne ne parle.",
      "À préparer ensemble, au début de la séance :",
      "« les cordes sont larguées » : avec être, féminin pluriel, deux marques.",
      "« s’emballe » et « s’éloigne » : deux verbes pronominaux au singulier.",
      "« les maisons deviennent des taches blanches » : le pluriel traverse toute la ligne.",
      "« il n’y a plus qu’une » : quatre petits mots collés à l’oreille, séparés à l’écrit.",
      "« personne ne parle » : pour finir la série comme elle a commencé, sur un sujet qui trompe.",
    ],
    undefined,
    "Ce texte reprend tout ce que la série a travaillé, dans l’ordre où elle l’a travaillé. Ce qu’on regarde n’est pas le nombre de différences mais lesquelles : si ce sont des mots et non des accords, la série a fait ce qu’elle devait.",
  ),

  /* ------------------------------------------------------------------ *
   *  Dictée à trous — seize fiches, six terminaisons à justifier
   * ------------------------------------------------------------------ */

  f(
    "ed-trous-01",
    "Dictée à trous",
    "Trous 1 · le présent des verbes en -er",
    [
      "On recopie les six phrases sur le cahier, pointillés compris — c’est un temps calme, il peut le faire pendant qu’on prépare le reste. Les six phrases s’enchaînent et racontent la même chose.",
      "Il complète chaque terminaison, puis il écrit à côté la personne du verbe : 1re, 2e ou 3e, singulier ou pluriel.",
      "On corrige ensemble, une phrase à la fois. Pour chacune, il dit la justification à voix haute avant qu’on lise le corrigé.",
    ],
    [
      "Chaque matin, je pouss…… la porte du jardin.",
      "Tu regard…… les oiseaux posés sur le fil.",
      "Le vent secou…… les branches du tilleul.",
      "Nous ramass…… les pommes tombées dans l’herbe.",
      "Vous ferm…… les volets avant la nuit.",
      "Les voisins allum…… un feu au fond du pré.",
    ],
    [
      "Chaque matin, je pousse la porte du jardin. — 1re personne du singulier : -e.",
      "Tu regardes les oiseaux posés sur le fil. — 2e personne du singulier : -es, et le s ne s’entend pas.",
      "Le vent secoue les branches du tilleul. — 3e personne du singulier : -e. Le sujet est « le vent », pas « les branches ».",
      "Nous ramassons les pommes tombées dans l’herbe. — 1re personne du pluriel : -ons.",
      "Vous fermez les volets avant la nuit. — 2e personne du pluriel : -ez.",
      "Les voisins allument un feu au fond du pré. — 3e personne du pluriel : -ent, muet lui aussi.",
    ],
    "Les deux terminaisons muettes, -es et -ent, sont tout l’exercice : les quatre autres s’entendent. S’il les trouve quand la personne est écrite à côté, la règle est là — il lui manque seulement de penser à chercher le sujet.",
  ),

  f(
    "ed-trous-02",
    "Dictée à trous",
    "Trous 2 · le présent des verbes en -ir",
    [
      "Il recopie les six phrases avec les pointillés. On dit avant de commencer que tous les verbes sont des verbes en -ir du type « finir ».",
      "Il complète, puis note la personne à côté de chaque verbe.",
      "On corrige ensemble, la justification dite à voix haute avant la lecture du corrigé.",
    ],
    [
      "Je fin…… mon cahier avant de sortir.",
      "Tu chois…… toujours la même place près de la fenêtre.",
      "Le jour grand…… un peu plus chaque semaine.",
      "Nous réfléch…… à voix haute pour aller plus vite.",
      "Vous rempl…… les paniers de noix.",
      "Les feuilles jaun…… doucement au bord du chemin.",
    ],
    [
      "Je finis mon cahier avant de sortir. — 1re personne du singulier : -is.",
      "Tu choisis toujours la même place près de la fenêtre. — 2e personne du singulier : -is, comme la première.",
      "Le jour grandit un peu plus chaque semaine. — 3e personne du singulier : -it.",
      "Nous réfléchissons à voix haute pour aller plus vite. — aux trois personnes du pluriel, -iss- s’ajoute : -issons.",
      "Vous remplissez les paniers de noix. — -issez, même -iss- que « nous ».",
      "Les feuilles jaunissent doucement au bord du chemin. — -issent, et la terminaison ne s’entend pas.",
    ],
    "Le -iss- du pluriel est la signature de ces verbes. S’il écrit « nous réfléchons », il a appliqué le modèle des verbes en -er : la régularité fonctionne, elle s’applique juste au mauvais groupe. On compare les deux tableaux côte à côte.",
  ),

  f(
    "ed-trous-03",
    "Dictée à trous",
    "Trous 3 · être et avoir au présent",
    [
      "Ces deux verbes changent de forme d’un bout à l’autre : les pointillés remplacent donc le mot entier, et l’infinitif est donné entre parenthèses.",
      "Il recopie, complète, et note la personne à côté de chaque verbe.",
      "On corrige ensemble. Ces deux verbes ne se justifient pas par une règle : on les sait ou on les cherche dans le tableau, et chercher est une bonne réponse.",
    ],
    [
      "Je …… (être) devant la fenêtre depuis dix minutes.",
      "Tu …… (avoir) les mains pleines de farine.",
      "Le ciel …… (être) tout gris ce matin.",
      "Nous …… (avoir) encore une heure devant nous.",
      "Vous …… (être) arrivés les premiers.",
      "Les chats …… (avoir) trouvé un coin au chaud.",
    ],
    [
      "Je suis devant la fenêtre depuis dix minutes. — être, 1re personne du singulier.",
      "Tu as les mains pleines de farine. — avoir, 2e personne du singulier. Sans accent : « as », pas « à ».",
      "Le ciel est tout gris ce matin. — être, 3e personne du singulier.",
      "Nous avons encore une heure devant nous. — avoir, 1re personne du pluriel.",
      "Vous êtes arrivés les premiers. — être, 2e personne du pluriel, avec l’accent circonflexe.",
      "Les chats ont trouvé un coin au chaud. — avoir, 3e personne du pluriel. « ont » et non « on ».",
    ],
    "Les deux dernières phrases posent aussi la question de l’homophone : « êtes » ou « ai-tes », « ont » ou « on ». S’il écrit « on trouvé », ce n’est pas la conjugaison qui manque — c’est le test « avaient » qu’on remet en route.",
  ),

  f(
    "ed-trous-04",
    "Dictée à trous",
    "Trous 4 · aller, faire, dire, prendre, venir, voir",
    [
      "Six verbes très fréquents et très irréguliers : le mot entier est remplacé par les pointillés, l’infinitif est donné.",
      "Il recopie, complète, note la personne. S’il ne sait pas, il a le droit d’ouvrir son tableau de conjugaison : chercher une forme est le geste qu’on installe.",
      "On corrige ensemble, une phrase à la fois.",
    ],
    [
      "Je …… (aller) chercher du bois derrière la maison.",
      "Tu …… (faire) le tour du jardin avant de rentrer.",
      "Il …… (dire) toujours la même chose au même moment.",
      "Nous …… (prendre) le chemin du bas, il est plus court.",
      "Vous …… (venir) avec nous jusqu’au pont ?",
      "Ils …… (voir) la mer depuis le haut de la colline.",
    ],
    [
      "Je vais chercher du bois derrière la maison. — aller ne ressemble jamais à son infinitif au présent.",
      "Tu fais le tour du jardin avant de rentrer. — faire, 2e personne du singulier : -s.",
      "Il dit toujours la même chose au même moment. — dire, 3e personne du singulier : -t.",
      "Nous prenons le chemin du bas, il est plus court. — prendre perd son d au pluriel.",
      "Vous venez avec nous jusqu’au pont ? — venir, 2e personne du pluriel : -ez.",
      "Ils voient la mer depuis le haut de la colline. — voir, 3e personne du pluriel : -oient, avec le e devant.",
    ],
    "« Voient » est la forme qui surprend : on entend deux syllabes et on en écrit trois. S’il écrit « voyent » ou « voint », il a cherché une régularité là où il n’y en a pas — on le lui dit, et on écrit la forme au dos du cahier.",
  ),

  f(
    "ed-trous-05",
    "Dictée à trous",
    "Trous 5 · l’imparfait",
    [
      "Il recopie les six phrases. On annonce le temps avant de commencer : tout le texte est à l’imparfait.",
      "Il complète les terminaisons et note la personne à côté de chaque verbe.",
      "On corrige ensemble. L’imparfait a la même série de terminaisons pour tous les verbes du français, sans une seule exception : c’est ce qu’on répète à chaque phrase.",
    ],
    [
      "Je regard…… la pluie derrière la vitre.",
      "Tu dorm…… encore quand nous sommes partis.",
      "Le vent souffl…… sur les toits toute la nuit.",
      "Nous march…… sans parler, l’un derrière l’autre.",
      "Vous chant…… en montant la côte.",
      "Les volets claqu…… à chaque rafale.",
    ],
    [
      "Je regardais la pluie derrière la vitre. — imparfait, 1re personne du singulier : -ais.",
      "Tu dormais encore quand nous sommes partis. — 2e personne du singulier : -ais, exactement pareil.",
      "Le vent soufflait sur les toits toute la nuit. — 3e personne du singulier : -ait.",
      "Nous marchions sans parler, l’un derrière l’autre. — 1re personne du pluriel : -ions.",
      "Vous chantiez en montant la côte. — 2e personne du pluriel : -iez.",
      "Les volets claquaient à chaque rafale. — 3e personne du pluriel : -aient, trois lettres muettes.",
    ],
    "-ais, -ait et -aient s’entendent tous les trois de la même façon. Ce qui décide, c’est le sujet, et rien d’autre. Si les trois formes sont bien placées, l’imparfait est acquis, et il servira toute l’année dans les récits.",
  ),

  f(
    "ed-trous-06",
    "Dictée à trous",
    "Trous 6 · l’imparfait des verbes en -cer, -ger et -ier",
    [
      "Il recopie les six phrases. Tout est à l’imparfait, on le dit avant.",
      "Il complète, puis souligne la lettre qui change dans le radical quand il y en a une.",
      "On corrige ensemble. Ces verbes gardent les terminaisons habituelles : c’est seulement l’avant-dernière lettre qui s’adapte au son.",
    ],
    [
      "Nous commenc…… toujours par le morceau le plus long.",
      "Nous mang…… dehors dès qu’il faisait doux.",
      "Il plac…… les assiettes une par une sur la nappe.",
      "Elle nag…… jusqu’au rocher et revenait aussitôt.",
      "Nous cri…… pour couvrir le bruit du vent.",
      "Vous oubli…… toujours la clé sur la porte.",
    ],
    [
      "Nous commencions toujours par le morceau le plus long. — devant i, le c fait déjà [s] : pas de cédille.",
      "Nous mangions dehors dès qu’il faisait doux. — devant i, le g fait déjà [ʒ] : pas de e intercalaire.",
      "Il plaçait les assiettes une par une sur la nappe. — devant a, il faut la cédille pour garder le son [s].",
      "Elle nageait jusqu’au rocher et revenait aussitôt. — devant a, il faut un e pour garder le son [ʒ].",
      "Nous criions pour couvrir le bruit du vent. — le i du radical plus le i de -ions : deux i à la suite.",
      "Vous oubliiez toujours la clé sur la porte. — même chose : le i du radical plus celui de -iez.",
    ],
    "Les deux i collés des deux dernières phrases ont l’air d’une faute et n’en sont pas. S’il n’en écrit qu’un, on lui fait décomposer : radical « cri- », terminaison « -ions ». Le raisonnement est plus solide que la mémoire de la forme.",
  ),

  f(
    "ed-trous-07",
    "Dictée à trous",
    "Trous 7 · le futur des verbes en -er et en -ir",
    [
      "Il recopie les six phrases. Tout est au futur, on le dit avant : c’est le temps de ce texte.",
      "Il complète, puis entoure le r qui se trouve dans chacune des six formes.",
      "On corrige ensemble. Au futur, on part de l’infinitif entier et on ajoute la terminaison — le r reste toujours visible.",
    ],
    [
      "Demain, je rentr…… avant la nuit.",
      "Tu trouv…… la maison sans carte, elle est au bout.",
      "Le train part…… à six heures précises.",
      "Nous grimp…… jusqu’au phare par le petit sentier.",
      "Vous chois…… la couleur de la porte.",
      "Les arbres fleur…… dès les premiers jours d’avril.",
    ],
    [
      "Demain, je rentrerai avant la nuit. — infinitif « rentrer » plus -ai : le e reste, même s’il ne s’entend pas.",
      "Tu trouveras la maison sans carte, elle est au bout. — « trouver » plus -as.",
      "Le train partira à six heures précises. — « partir » plus -a.",
      "Nous grimperons jusqu’au phare par le petit sentier. — « grimper » plus -ons.",
      "Vous choisirez la couleur de la porte. — « choisir » plus -ez.",
      "Les arbres fleuriront dès les premiers jours d’avril. — « fleurir » plus -ont.",
    ],
    "Le e muet des verbes en -er est le seul vrai piège : « je rentrerai » et non « je rentrai ». S’il l’oublie, on lui fait écrire l’infinitif juste au-dessus, et la lettre revient toute seule.",
  ),

  f(
    "ed-trous-08",
    "Dictée à trous",
    "Trous 8 · le futur des verbes irréguliers",
    [
      "Six verbes dont le radical change au futur : les pointillés remplacent le mot entier, l’infinitif est donné.",
      "Il recopie, complète, et entoure le r de chaque forme — il y est toujours, même quand le reste du verbe ne se reconnaît plus.",
      "On corrige ensemble. Le tableau de conjugaison est autorisé.",
    ],
    [
      "Je …… (être) prêt dans cinq minutes.",
      "Tu …… (avoir) de la place à côté de moi.",
      "Elle …… (aller) au marché de bonne heure.",
      "Nous …… (faire) le chemin à pied jusqu’au village.",
      "Vous …… (voir) la mer au dernier virage.",
      "Ils …… (venir) dimanche avec le chien.",
    ],
    [
      "Je serai prêt dans cinq minutes. — être devient « ser- » au futur, plus -ai.",
      "Tu auras de la place à côté de moi. — avoir devient « aur- », plus -as.",
      "Elle ira au marché de bonne heure. — aller devient « ir- », plus -a. Le verbe entier a disparu.",
      "Nous ferons le chemin à pied jusqu’au village. — faire devient « fer- », plus -ons.",
      "Vous verrez la mer au dernier virage. — voir devient « verr- », avec deux r : un du radical, un du futur.",
      "Ils viendront dimanche avec le chien. — venir devient « viendr- », plus -ont.",
    ],
    "Le r du futur est le fil rouge : même « ira », qui ne ressemble plus du tout à « aller », le garde. S’il entoure les six r sans hésiter, il a l’indice qui lui permettra de reconnaître un futur dans n’importe quel texte.",
  ),

  f(
    "ed-trous-09",
    "Dictée à trous",
    "Trous 9 · le passé composé avec avoir",
    [
      "Il recopie les six phrases. L’auxiliaire est déjà écrit : ce sont les participes qu’il complète.",
      "Il complète, puis écrit l’infinitif de chaque verbe à côté — c’est lui qui donne la fin du participe.",
      "On corrige ensemble. Avec avoir, le participe ne bouge pas, quel que soit le sujet : on le vérifie sur les six.",
    ],
    [
      "J’ai ferm…… les volets avant la pluie.",
      "Tu as fin…… ton dessin ?",
      "Il a pr…… le mauvais chemin et il est revenu.",
      "Nous avons chant…… pendant tout le trajet.",
      "Vous avez ouvr…… la porte du grenier.",
      "Les voisins ont allum…… le feu au fond du pré.",
    ],
    [
      "J’ai fermé les volets avant la pluie. — verbe en -er, participe en -é.",
      "Tu as fini ton dessin ? — verbe en -ir, participe en -i.",
      "Il a pris le mauvais chemin et il est revenu. — prendre fait « pris », avec un s qu’on n’entend pas.",
      "Nous avons chanté pendant tout le trajet. — -é, et surtout pas -és : avec avoir, le sujet ne commande rien.",
      "Vous avez ouvert la porte du grenier. — ouvrir fait « ouvert », avec un t final.",
      "Les voisins ont allumé le feu au fond du pré. — sujet pluriel, participe invariable quand même.",
    ],
    "Les lettres muettes des participes — le s de « pris », le t de « ouvert » — se trouvent en mettant le participe au féminin : « prise », « ouverte ». C’est le geste à installer, il resservira toute la scolarité.",
  ),

  f(
    "ed-trous-10",
    "Dictée à trous",
    "Trous 10 · le passé composé avec être",
    [
      "Il recopie les six phrases. L’auxiliaire être est déjà écrit ; il complète la fin des participes.",
      "Avant d’écrire, il souligne le sujet de chaque phrase et note son genre et son nombre au-dessus.",
      "On corrige ensemble. Avec être, le participe se comporte comme un adjectif : il prend le genre et le nombre du sujet.",
    ],
    [
      "Je suis sort…… sans manteau, et j’ai eu froid.",
      "Elle est arriv…… la première au bout du chemin.",
      "Nous sommes rest…… une heure entière sur le quai.",
      "Les feuilles sont tomb…… pendant la nuit.",
      "Vous êtes part…… avant le lever du jour.",
      "Mes cousines sont revenu…… hier soir par le train.",
    ],
    [
      "Je suis sorti sans manteau, et j’ai eu froid. — sujet masculin singulier : aucune marque ajoutée.",
      "Elle est arrivée la première au bout du chemin. — féminin singulier : un e.",
      "Nous sommes restés une heure entière sur le quai. — masculin pluriel : un s.",
      "Les feuilles sont tombées pendant la nuit. — féminin pluriel : e puis s, les deux marques.",
      "Vous êtes partis avant le lever du jour. — masculin pluriel : un s.",
      "Mes cousines sont revenues hier soir par le train. — féminin pluriel : les deux marques, encore.",
    ],
    "Les six phrases parcourent les quatre cas possibles, deux fois. Ce qu’on regarde : est-ce qu’il note le genre et le nombre avant d’écrire, ou après ? Noter avant, c’est ce qui fait la différence, bien plus que de connaître la règle.",
  ),

  f(
    "ed-trous-11",
    "Dictée à trous",
    "Trous 11 · -er ou -é ?",
    [
      "Il recopie les six phrases. Cette fois, la fin du verbe s’entend toujours pareil : il faut choisir entre l’infinitif et le participe.",
      "Avant d’écrire, il remplace le verbe par « vendre » puis par « vendu », à voix haute. Celui qui sonne juste donne la réponse.",
      "On corrige ensemble, le test refait à voix haute pour chaque phrase.",
    ],
    [
      "Il faut ferm…… la barrière derrière soi.",
      "Le portail est rest…… ouvert toute la nuit.",
      "Elle a décid…… de partir un peu plus tôt.",
      "Nous allons essay…… une autre route.",
      "Le pain est coup…… en tranches épaisses.",
      "Il est sorti sans regard…… derrière lui.",
    ],
    [
      "Il faut fermer la barrière derrière soi. — « il faut vendre » : infinitif.",
      "Le portail est resté ouvert toute la nuit. — « est vendu » : participe, masculin singulier.",
      "Elle a décidé de partir un peu plus tôt. — « a vendu » : participe. Avec avoir, il ne s’accorde pas.",
      "Nous allons essayer une autre route. — « nous allons vendre » : infinitif.",
      "Le pain est coupé en tranches épaisses. — « est vendu » : participe, accordé avec « le pain ».",
      "Il est sorti sans regarder derrière lui. — « sans vendre » : infinitif. Après une préposition, le verbe ne se conjugue jamais.",
    ],
    "Ce test est le seul de l’année qui marche à tous les coups, et il ne marche qu’à voix haute. S’il se trompe, la première question n’est pas « quelle règle ? » mais « as-tu dit vendre ou vendu ? ».",
  ),

  f(
    "ed-trous-12",
    "Dictée à trous",
    "Trous 12 · les verbes en -yer, -eler et -eter",
    [
      "Il recopie les six phrases. Tout est au présent. Ces verbes changent une lettre selon la personne : c’est ce changement qu’on cherche.",
      "Il complète, puis souligne la lettre qui a changé par rapport à l’infinitif.",
      "On corrige ensemble. La règle tient à l’oreille : quand on entend [ɛ] juste avant la terminaison, la lettre double ou l’accent apparaît.",
    ],
    [
      "Je nettoi…… la table après le repas.",
      "Tu essui…… les verres un par un.",
      "Elle appel…… son chien depuis le portail.",
      "Nous jet…… les noyaux dans le compost.",
      "Le marchand achèt…… les pommes au kilo.",
      "Les enfants pai…… avec des pièces jaunes.",
    ],
    [
      "Je nettoie la table après le repas. — le y devient i devant un e muet.",
      "Tu essuies les verres un par un. — même changement, plus le -s de la 2e personne.",
      "Elle appelle son chien depuis le portail. — le l double parce qu’on entend [ɛ] avant la terminaison.",
      "Nous jetons les noyaux dans le compost. — ici on entend [ə] : le t reste simple.",
      "Le marchand achète les pommes au kilo. — acheter prend un accent grave au lieu de doubler le t.",
      "Les enfants paient avec des pièces jaunes. — le y devient i ; « payent » est admis aussi.",
    ],
    "« Nous jetons » contre « elle appelle » est tout l’exercice : c’est la même famille de verbes, et la lettre ne double qu’à certaines personnes. S’il double partout, la règle est comprise à moitié — c’est l’oreille qu’on remet au travail, pas la mémoire.",
  ),

  f(
    "ed-trous-13",
    "Dictée à trous",
    "Trous 13 · le passé composé de six verbes irréguliers",
    [
      "Il recopie les six phrases. Elles racontent une petite histoire au passé composé : l’auxiliaire est déjà écrit, l’infinitif est donné entre parenthèses, et il complète le participe.",
      "Il complète, puis écrit à côté de chaque phrase « avoir » ou « être » — c’est l’auxiliaire qui dit si le participe s’accorde.",
      "On corrige ensemble. Ces participes se savent plus qu’ils ne se raisonnent ; deux gestes aident quand même : dire le participe au féminin pour entendre sa lettre muette, et regarder l’auxiliaire pour savoir s’il faut accorder.",
    ],
    [
      "Le boulanger a f…… (faire) le pain avant l’aube.",
      "Les cavaliers sont ven…… (venir) au petit jour, couverts de boue.",
      "Elle est all…… (aller) chercher la lettre sans rien dire.",
      "Le gardien a v…… (voir) le mur s’écrouler d’un seul coup.",
      "Ils n’ont pas p…… (pouvoir) partir avant l’aube.",
      "Il a d…… (dire) bonsoir à tout le monde.",
    ],
    [
      "Le boulanger a fait le pain avant l’aube. — avoir ; faire fait « fait », et le t s’entend au féminin : « une chose faite ».",
      "Les cavaliers sont venus au petit jour, couverts de boue. — être : le participe s’accorde avec « les cavaliers », masculin pluriel.",
      "Elle est allée chercher la lettre sans rien dire. — être : féminin singulier, un e ; « chercher » reste à l’infinitif.",
      "Le gardien a vu le mur s’écrouler d’un seul coup. — avoir ; voir fait « vu », sans lettre muette.",
      "Ils n’ont pas pu partir avant l’aube. — avoir : rien ne s’ajoute pour « ils » ; pouvoir fait « pu », deux lettres.",
      "Il a dit bonsoir à tout le monde. — avoir ; dire fait « dit », et le t s’entend au féminin : « une chose dite ».",
    ],
    "Deux sortes d’hésitation, qui ne se reprennent pas pareil. S’il écrit « ils sont venu », le participe est su et c’est l’auxiliaire qu’on regarde avec lui. S’il écrit « il a dis », c’est la lettre muette : on dit le féminin à voix haute, « dite », et la lettre revient.",
  ),

  f(
    "ed-trous-14",
    "Dictée à trous",
    "Trous 14 · l’imparfait et le passé composé dans le même récit",
    [
      "Il recopie les six phrases, qui forment une petite scène. Le temps demandé est indiqué entre parenthèses à chaque fois.",
      "Il complète, puis relit les six phrases à la suite pour entendre le récit avancer.",
      "On corrige ensemble. L’imparfait pose le décor, le passé composé fait arriver les choses : c’est ce partage qu’on nomme, plus que les terminaisons. La leçon « Les quatre temps : reconnaître et choisir » du 24 mai a posé exactement ce partage.",
    ],
    [
      "La nuit tomb…… lentement sur le port. (imparfait)",
      "Les pêcheurs répar…… leurs filets sous la lampe. (imparfait)",
      "Soudain, une cloche a sonn…… trois fois. (passé composé)",
      "Tout le monde a lev…… la tête en même temps. (passé composé)",
      "Un bateau est entr…… dans le port, très lentement. (passé composé)",
      "Il n’y av…… personne sur le pont. (imparfait)",
    ],
    [
      "La nuit tombait lentement sur le port. — imparfait, 3e du singulier : le décor.",
      "Les pêcheurs réparaient leurs filets sous la lampe. — imparfait, 3e du pluriel : le décor encore.",
      "Soudain, une cloche a sonné trois fois. — passé composé avec avoir, participe en -é. Quelque chose arrive.",
      "Tout le monde a levé la tête en même temps. — passé composé, et « tout le monde » reste un sujet singulier.",
      "Un bateau est entré dans le port, très lentement. — passé composé avec être, masculin singulier : rien ne s’ajoute. L’action avance, même si elle est lente.",
      "Il n’y avait personne sur le pont. — retour à l’imparfait : on décrit ce qu’on voit.",
    ],
    "Ce qui se joue n’est pas la terminaison mais le choix du temps. S’il relit les six phrases et entend le moment où le récit bascule — « soudain » — il tient la clé, et l’orthographe suivra.",
  ),

  f(
    "ed-trous-15",
    "Dictée à trous",
    "Trous 15 · les terminaisons qu’on n’entend pas",
    [
      "Six phrases au présent, et six terminaisons totalement muettes : c’est le seul exercice de la série où l’oreille ne sert à rien.",
      "Avant d’écrire, il souligne le sujet de chaque phrase et écrit sa personne au-dessus. Puis seulement il complète.",
      "On corrige ensemble. Pour chaque phrase, il montre du doigt le mot qui a décidé de la terminaison.",
    ],
    [
      "Tu march…… trop vite pour moi.",
      "Les branches cass…… sous le poids de la neige.",
      "Je pens…… à autre chose depuis dix minutes.",
      "Elles arriv…… toujours ensemble le samedi.",
      "Tu oubli…… ton écharpe sur le banc.",
      "Les portes ferm…… toutes seules quand il y a du vent.",
    ],
    [
      "Tu marches trop vite pour moi. — 2e du singulier : -es.",
      "Les branches cassent sous le poids de la neige. — 3e du pluriel : -ent. Le sujet est « les branches ».",
      "Je pense à autre chose depuis dix minutes. — 1re du singulier : -e.",
      "Elles arrivent toujours ensemble le samedi. — 3e du pluriel : -ent.",
      "Tu oublies ton écharpe sur le banc. — 2e du singulier : -es, après le i du radical.",
      "Les portes ferment toutes seules quand il y a du vent. — 3e du pluriel : -ent.",
    ],
    "Rien ne s’entend, donc tout se raisonne. Si les six terminaisons sont justes après qu’il a écrit les personnes au-dessus, la démarche est acquise : il lui restera à la faire sans qu’on la lui demande.",
  ),

  f(
    "ed-trous-16",
    "Dictée à trous",
    "Trous 16 · tous les temps de l’année mêlés",
    [
      "Dernière fiche de la série : six phrases, les quatre temps de l’année, indiqués entre parenthèses — le passé composé avec ses deux auxiliaires, et le futur d’un verbe régulier puis d’un irrégulier. Elle reprend tout ce qui a été vu depuis septembre.",
      "Il recopie, complète, et écrit à côté de chaque verbe le temps et la personne.",
      "On corrige ensemble, sans rien compter. On note simplement les temps qui sont venus tout seuls et ceux qui ont demandé le tableau.",
    ],
    [
      "Hier, nous sommes rentr…… plus tard que prévu. (passé composé avec être)",
      "Chaque été, mes grands-parents ouvr…… la maison du bord de mer. (imparfait)",
      "L’an prochain, tu chois…… ton instrument. (futur)",
      "En ce moment, le vent pouss…… les nuages vers l’est. (présent)",
      "Dimanche, le maire f…… (faire) sonner les cloches. (futur)",
      "Nous avons march…… jusqu’au phare sans nous arrêter. (passé composé avec avoir)",
    ],
    [
      "Hier, nous sommes rentrés plus tard que prévu. — avec être, le participe s’accorde : masculin pluriel.",
      "Chaque été, mes grands-parents ouvraient la maison du bord de mer. — imparfait, 3e du pluriel : -aient.",
      "L’an prochain, tu choisiras ton instrument. — futur : infinitif entier plus -as.",
      "En ce moment, le vent pousse les nuages vers l’est. — présent, 3e du singulier : -e.",
      "Dimanche, le maire fera sonner les cloches. — futur de faire : le radical devient « fer- », plus -a, et le r est là comme toujours.",
      "Nous avons marché jusqu’au phare sans nous arrêter. — avec avoir, le participe ne s’accorde pas : -é.",
    ],
    "Les deux passés composés encadrent la fiche exprès : le premier s’accorde, le second non. S’il les distingue en juin, c’est la règle la plus utile de l’année qui est en place. Le reste se rattrape n’importe quand.",
  ),

  /* ------------------------------------------------------------------ *
   *  Auto-dictée — dix-sept textes de quatre lignes, appris au début de la
   *  séance, écrits de mémoire juste après
   * ------------------------------------------------------------------ */

  f(
    "ed-auto-01",
    "Auto-dictée",
    "Quatre lignes 1 · Le matin",
    [
      "Au début de la séance, cinq à dix minutes : il lit le texte à voix haute trois fois, puis on regarde ensemble les trois pièges. Il le récite une fois, le texte caché, et on passe tout de suite à l’écriture.",
      "Puis il écrit les quatre lignes de mémoire, le texte retourné. S’il s’arrête, on lui donne le premier mot de la ligne.",
      "Il compare ensuite lui-même avec le texte, ligne à ligne. Un mot oublié n’est pas une erreur d’orthographe : on le note à part.",
    ],
    [
      "Le texte à apprendre :",
      "Le jour se lève sur le jardin.",
      "Le chat dort encore sur le mur.",
      "Une porte claque au bout de la rue.",
      "La journée commence sans bruit.",
      "Les trois pièges, à repérer avec lui au début de la séance :",
      "« se lève » : deux mots, et l’accent grave sur le deuxième e.",
      "« encore » : un seul n, et le e final qu’on n’entend pas.",
      "« la journée » : un nom féminin en -ée, avec le e après.",
    ],
    undefined,
    "Première auto-dictée de l’année : ce qu’on regarde, c’est si le texte revient en entier, pas s’il est sans erreur. Quatre lignes retenues, c’est déjà tout le travail. L’orthographe se reprendra la fois suivante.",
  ),

  f(
    "ed-auto-02",
    "Auto-dictée",
    "Quatre lignes 2 · La pluie",
    [
      "Au début de la séance, cinq à dix minutes : trois lectures à voix haute, les pièges, une récitation le texte caché.",
      "Puis il écrit de mémoire, le texte retourné. S’il s’arrête, on lui donne le premier mot de la ligne.",
      "Il compare seul avec le texte et sépare ce qu’il a oublié de ce qu’il a mal écrit — ce ne sont pas les mêmes choses à retravailler.",
    ],
    [
      "Le texte à apprendre :",
      "Il pleut depuis hier soir.",
      "L’eau descend le long des vitres.",
      "Dans la cour, les flaques grandissent.",
      "Personne ne veut sortir.",
      "Les trois pièges, à repérer avec lui au début de la séance :",
      "« l’eau » : trois lettres pour un seul son, et l’apostrophe.",
      "« les flaques grandissent » : sujet pluriel, terminaison -issent.",
      "« personne ne veut » : sujet singulier, malgré ce que le mot laisse croire.",
    ],
    undefined,
    "« Les flaques grandissent » est la seule difficulté d’accord. S’il l’écrit juste de mémoire, c’est que la forme du mot est passée avec le texte : c’est exactement ce que l’auto-dictée sert à faire.",
  ),

  f(
    "ed-auto-03",
    "Auto-dictée",
    "Quatre lignes 3 · Le chemin",
    [
      "Au début de la séance, cinq à dix minutes : trois lectures, les pièges, une récitation le texte caché.",
      "Puis il écrit de mémoire, le texte retourné. S’il s’arrête, on lui donne le premier mot de la ligne.",
      "Il compare seul et souligne les différences avant qu’on en parle.",
    ],
    [
      "Le texte à apprendre :",
      "Le chemin monte entre deux haies.",
      "Il tourne, il descend, il remonte.",
      "Tout en haut, on voit la mer.",
      "On s’arrête toujours au même endroit.",
      "Les trois pièges, à repérer avec lui au début de la séance :",
      "« deux haies » : le h ne s’entend pas mais il s’écrit, et le pluriel en -es.",
      "« il tourne, il descend, il remonte » : trois verbes, trois virgules, un seul sujet.",
      "« on s’arrête » : deux r, un accent circonflexe, et le s de « se ».",
    ],
    undefined,
    "La ligne des trois verbes est un exercice de ponctuation autant que d’orthographe. Si les virgules sont là, c’est que le texte a été appris avec sa musique et pas seulement avec ses mots.",
  ),

  f(
    "ed-auto-04",
    "Auto-dictée",
    "Quatre lignes 4 · Les feuilles",
    [
      "Au début de la séance, cinq à dix minutes : trois lectures à voix haute, les pièges, une récitation le texte caché.",
      "Puis il écrit de mémoire, le texte retourné. S’il s’arrête, on lui donne le premier mot de la ligne.",
      "Il compare seul et note à part les mots oubliés.",
    ],
    [
      "Le texte à apprendre :",
      "Les feuilles tombent une à une.",
      "Le vent les pousse contre la barrière.",
      "Demain, elles couvriront le sentier.",
      "L’automne ne demande la permission à personne.",
      "Les trois pièges, à repérer avec lui au début de la séance :",
      "« une à une » : le deuxième à porte un accent, le premier non.",
      "« elles couvriront » : futur, 3e personne du pluriel, avec le r et -ont.",
      "« la permission » : deux s pour le son [s], et la terminaison -ion.",
    ],
    undefined,
    "Le futur arrive ici dans un texte appris, ce qui est la meilleure façon de le rencontrer. S’il écrit « couvrirons », il a entendu un pluriel sans voir qui parle : on relit la phrase, « elles » est écrit juste devant.",
  ),

  f(
    "ed-auto-05",
    "Auto-dictée",
    "Quatre lignes 5 · Le pain",
    [
      "Au début de la séance, cinq à dix minutes : trois lectures, les pièges, une récitation le texte caché.",
      "Puis il écrit de mémoire, le texte retourné. S’il s’arrête, on lui donne le premier mot de la ligne ; s’il bloque encore, il passe à la suivante et revient après.",
      "Il compare seul avec le texte.",
    ],
    [
      "Le texte à apprendre :",
      "La farine blanchit toute la table.",
      "Mes mains collent, la pâte résiste.",
      "Le four chauffe depuis une heure.",
      "Dans la maison, on ne parle que de ça.",
      "Les trois pièges, à repérer avec lui au début de la séance :",
      "« blanchit » : verbe en -ir à la 3e personne du singulier, -it.",
      "« mes mains collent » : deux marques de pluriel, dont une muette.",
      "« la pâte » : l’accent circonflexe, et « ça » avec la cédille.",
    ],
    undefined,
    "« Collent » contre « blanchit », à une ligne d’écart : singulier puis pluriel, aucune des deux terminaisons ne s’entend. C’est là qu’on voit si le texte a été appris en le regardant ou seulement en l’écoutant.",
  ),

  f(
    "ed-auto-06",
    "Auto-dictée",
    "Quatre lignes 6 · La nuit d’hiver",
    [
      "Au début de la séance, cinq à dix minutes : trois lectures à voix haute, les pièges, une récitation le texte caché.",
      "Puis il écrit de mémoire, le texte retourné. S’il s’arrête, on lui donne le premier mot de la ligne.",
      "Il compare seul, souligne, et dit ce qu’il a trouvé.",
    ],
    [
      "Le texte à apprendre :",
      "La nuit est venue très tôt.",
      "Les toits sont blancs, la rue est vide.",
      "Derrière la vitre, une lampe brille.",
      "On entend seulement le feu qui craque.",
      "Les trois pièges, à repérer avec lui au début de la séance :",
      "« est venue » : avec être, le participe prend le féminin de « la nuit ».",
      "« les toits sont blancs » : trois mots au masculin pluriel, et le t muet de « toits ».",
      "« qui craque » : « qui » remplace « le feu », donc singulier.",
    ],
    undefined,
    "Le e de « venue » est la marque qui se perd le plus souvent : elle ne s’entend pas et le mot est déjà long. S’il l’écrit, c’est que l’accord avec être commence à fonctionner sans qu’on le demande.",
  ),

  f(
    "ed-auto-07",
    "Auto-dictée",
    "Quatre lignes 7 · Le phare",
    [
      "Au début de la séance, cinq à dix minutes : trois lectures, les pièges, une récitation le texte caché.",
      "Puis il écrit de mémoire, le texte retourné. S’il s’arrête, on lui donne le premier mot de la ligne.",
      "Il compare seul avec le texte et sépare les oublis des erreurs d’orthographe.",
    ],
    [
      "Le texte à apprendre :",
      "Le phare veille au bout de la digue.",
      "Sa lumière tourne toute la nuit.",
      "Les bateaux la cherchent de loin.",
      "Personne ne lui dit jamais merci.",
      "Les trois pièges, à repérer avec lui au début de la séance :",
      "« le phare » : le son [f] écrit ph, comme dans « photographie ».",
      "« les bateaux la cherchent » : le sujet est pluriel, le mot juste avant le verbe non.",
      "« ne… jamais » : la négation en deux morceaux, séparés par le verbe.",
    ],
    undefined,
    "La troisième ligne est la même construction que dans la dictée préparée du phare. Si elle passe ici alors qu’elle avait résisté là-bas, ce n’est pas un hasard : la mémoire du texte a fait ce que la règle seule n’avait pas fait.",
  ),

  f(
    "ed-auto-08",
    "Auto-dictée",
    "Quatre lignes 8 · La rivière",
    [
      "Au début de la séance, cinq à dix minutes : trois lectures à voix haute, les pièges, une récitation le texte caché.",
      "Puis il écrit de mémoire, le texte retourné. S’il s’arrête, on lui donne le premier mot de la ligne.",
      "Il compare seul et souligne les différences.",
    ],
    [
      "Le texte à apprendre :",
      "La rivière a grossi cette semaine.",
      "Elle emporte des branches et des herbes.",
      "Sur la berge, les traces ont disparu.",
      "L’eau décide toute seule de son chemin.",
      "Les trois pièges, à repérer avec lui au début de la séance :",
      "« a grossi » : avec avoir, le participe reste tel quel.",
      "« les traces ont disparu » : « ont » avec un t, le verbe avoir.",
      "« toute seule » : deux mots au féminin singulier, chacun avec son e.",
    ],
    undefined,
    "« Ont » et « on » se suivent presque dans le texte. S’il écrit « on disparu », c’est le test « avaient » qui n’a pas été fait : on le refait sur cette ligne-là, et on n’en parle pas plus longtemps.",
  ),

  f(
    "ed-auto-09",
    "Auto-dictée",
    "Quatre lignes 9 · Le marché",
    [
      "Au début de la séance, cinq à dix minutes : trois lectures, les pièges, une récitation le texte caché.",
      "Puis il écrit de mémoire, le texte retourné. S’il s’arrête, on lui donne le premier mot de la ligne.",
      "Il compare seul avec le texte.",
    ],
    [
      "Le texte à apprendre :",
      "Les marchands arrivent avant le jour.",
      "Ils déplient les tables dans le froid.",
      "À huit heures, les allées sont pleines.",
      "On sent le pain chaud jusqu’à la place.",
      "Les trois pièges, à repérer avec lui au début de la séance :",
      "« arrivent » et « déplient » : deux fois -ent, deux fois muet.",
      "« les allées sont pleines » : féminin pluriel, du nom jusqu’à l’adjectif.",
      "« jusqu’à » : l’apostrophe, et l’accent sur le à.",
    ],
    undefined,
    "Trois terminaisons muettes dans quatre lignes : c’est volontairement dense. Si deux passent sur trois, la mémoire visuelle du texte travaille — on garde la troisième pour la préparation de la prochaine fois.",
  ),

  f(
    "ed-auto-10",
    "Auto-dictée",
    "Quatre lignes 10 · L’orage",
    [
      "Au début de la séance, cinq à dix minutes : trois lectures à voix haute, les pièges, une récitation le texte caché.",
      "Puis il écrit de mémoire, le texte retourné. S’il s’arrête, on lui donne le premier mot de la ligne.",
      "Il compare seul, souligne, et note à part les mots oubliés.",
    ],
    [
      "Le texte à apprendre :",
      "L’air est lourd depuis midi.",
      "Les hirondelles volent très bas.",
      "Le tonnerre roule derrière la colline.",
      "La pluie arrivera avant nous.",
      "Les trois pièges, à repérer avec lui au début de la séance :",
      "« les hirondelles » : le h qu’on n’entend pas, et deux l au milieu.",
      "« le tonnerre » : deux n puis deux r, et le e final.",
      "« arrivera » : futur, avec le r du futur et la terminaison -a.",
    ],
    undefined,
    "« Tonnerre » est le mot qui coûte le plus cher du texte : quatre consonnes doublées à retenir d’un coup. S’il l’écrit avec un seul n ou un seul r, on ne le reprend pas trois fois — on le remet dans la liste de mots de la semaine.",
  ),

  f(
    "ed-auto-11",
    "Auto-dictée",
    "Quatre lignes 11 · Le vieux pommier",
    [
      "Au début de la séance, cinq à dix minutes : trois lectures, les pièges, une récitation le texte caché. Les lignes sont plus longues qu’en décembre : on peut apprendre les deux premières, puis les deux dernières.",
      "Puis il écrit de mémoire, le texte retourné. S’il s’arrête, on lui donne le premier mot de la ligne.",
      "Il compare seul et souligne les différences.",
    ],
    [
      "Le texte à apprendre :",
      "Le pommier est plus vieux que la maison.",
      "Son tronc est creux, ses branches partent de travers.",
      "Chaque année, pourtant, il donne des fruits.",
      "On a accroché la balançoire à la plus grosse.",
      "Les trois pièges, à repérer avec lui au début de la séance :",
      "« son tronc » puis « ses branches » : singulier puis pluriel, deux mots qui se ressemblent.",
      "« creux » : le x est là dès le singulier.",
      "« on a accroché » : avec avoir, le participe ne s’accorde pas, même si « balançoire » est féminin.",
    ],
    undefined,
    "Le couple son / ses tombe ici dans la même ligne, ce qui le rend visible. S’il les distingue de mémoire, c’est le sens du texte qui l’a guidé, et c’est la meilleure raison possible d’avoir écrit juste.",
  ),

  f(
    "ed-auto-12",
    "Auto-dictée",
    "Quatre lignes 12 · Le train de nuit",
    [
      "Au début de la séance, cinq à dix minutes : trois lectures à voix haute, les pièges, une récitation le texte caché.",
      "Puis il écrit de mémoire, le texte retourné. S’il s’arrête, on lui donne le premier mot de la ligne.",
      "Il compare seul avec le texte.",
    ],
    [
      "Le texte à apprendre :",
      "Le train traverse des villages endormis.",
      "Les fenêtres éclairent les talus une seconde.",
      "Personne ne descend à cette heure-là.",
      "Le jour nous attend quelque part devant.",
      "Les trois pièges, à repérer avec lui au début de la séance :",
      "« des villages endormis » : le participe s’accorde avec « villages », masculin pluriel.",
      "« les fenêtres éclairent » : sujet pluriel, terminaison -ent.",
      "« cette heure-là » : le trait d’union, et « seconde » qui se prononce avec un [g] mais s’écrit avec un c.",
    ],
    undefined,
    "« Seconde » est une bizarrerie de la langue, pas une difficulté de raisonnement : on le lui dit franchement. Les mots qu’aucune règle n’explique s’apprennent mieux quand on annonce qu’ils n’ont pas d’explication.",
  ),

  f(
    "ed-auto-13",
    "Auto-dictée",
    "Quatre lignes 13 · La lettre",
    [
      "Au début de la séance, cinq à dix minutes : trois lectures, les pièges, une récitation le texte caché.",
      "Puis il écrit de mémoire, le texte retourné. S’il s’arrête, on lui donne le premier mot de la ligne.",
      "Il compare seul, souligne, et sépare les oublis des erreurs.",
    ],
    [
      "Le texte à apprendre :",
      "Nous avons trouvé une lettre pliée en quatre.",
      "L’encre avait pâli, les mots tenaient encore.",
      "Elle était signée d’un prénom inconnu.",
      "Nous l’avons remise exactement où elle dormait.",
      "Les trois pièges, à repérer avec lui au début de la séance :",
      "« une lettre pliée » : le participe suit le nom et prend son féminin.",
      "« avait pâli » puis « tenaient » : un singulier, un pluriel, à trois mots d’écart.",
      "« nous l’avons remise » : le participe s’accorde, parce que « l’ » remplace « la lettre » et arrive avant le verbe.",
    ],
    undefined,
    "Le dernier point est en avance sur ce qui lui a été enseigné. Si « remise » arrive parce qu’il a appris le texte, c’est parfait : la règle viendra plus tard mettre un nom sur ce que sa main sait déjà.",
  ),

  f(
    "ed-auto-14",
    "Auto-dictée",
    "Quatre lignes 14 · La cathédrale",
    [
      "Au début de la séance, cinq à dix minutes : trois lectures à voix haute, les pièges, une récitation le texte caché. Ce texte mêle l’imparfait et le passé composé, comme la leçon « Les quatre temps » du même jour : on le lui dit, il les reconnaîtra.",
      "Puis il écrit de mémoire, le texte retourné. S’il s’arrête, on lui donne le premier mot de la ligne.",
      "Il compare seul avec le texte.",
    ],
    [
      "Le texte à apprendre :",
      "Les tailleurs de pierre travaillaient côte à côte.",
      "Les échafaudages montaient avec les murs.",
      "Le chantier a duré plus de deux cents ans.",
      "Ceux qui l’avaient commencé ne l’ont jamais vu fini.",
      "Les trois pièges, à repérer avec lui au début de la séance :",
      "« travaillaient, montaient » : imparfait, 3e personne du pluriel.",
      "« a duré » et « l’ont vu » : passé composé avec avoir, le participe ne change pas, singulier ou pluriel.",
      "« deux cents ans » : cent prend un s parce qu’il est multiplié et que rien ne le suit.",
    ],
    undefined,
    "Trois temps du passé dans quatre lignes, et le texte tient debout quand même : c’est ce qu’on lui montre en le relisant ensemble. Entendre que « travaillaient » décrit et que « a duré » raconte vaut mieux que savoir nommer les temps.",
  ),

  f(
    "ed-auto-15",
    "Auto-dictée",
    "Quatre lignes 15 · Le départ",
    [
      "Au début de la séance, cinq à dix minutes : trois lectures, les pièges, une récitation le texte caché.",
      "Puis il écrit de mémoire, le texte retourné. S’il s’arrête, on lui donne le premier mot de la ligne.",
      "Il compare seul et souligne les différences.",
    ],
    [
      "Le texte à apprendre :",
      "Le bateau quitte le port à six heures.",
      "Les cordes sont larguées, la jetée s’éloigne.",
      "Derrière nous, les maisons deviennent des taches.",
      "Devant, il n’y a plus qu’une ligne droite.",
      "Les trois pièges, à repérer avec lui au début de la séance :",
      "« les cordes sont larguées » : avec être, féminin pluriel, les deux marques.",
      "« deviennent » : trois voyelles à la suite et une terminaison muette.",
      "« il n’y a plus qu’une » : cinq petits mots que l’oreille colle en un seul.",
    ],
    undefined,
    "La dernière ligne est un exercice de découpage : la langue parlée soude ce que l’écrit sépare. S’il l’écrit d’un bloc, on lui fait compter les mots sur ses doigts en relisant — cinq doigts, cinq mots.",
  ),

  f(
    "ed-auto-16",
    "Auto-dictée",
    "Quatre lignes 16 · La neige",
    [
      "Au début de la séance, cinq à dix minutes : trois lectures à voix haute, les pièges, une récitation le texte caché.",
      "Puis il écrit de mémoire, le texte retourné. S’il s’arrête, on lui donne le premier mot de la ligne.",
      "Il compare seul avec le texte et note ce qu’il veut revoir.",
    ],
    [
      "Le texte à apprendre :",
      "La neige est tombée pendant que nous dormions.",
      "Elle a effacé les chemins et les haies.",
      "Le premier qui sortira laissera ses traces.",
      "Ce matin, personne ne veut être le premier.",
      "Les trois pièges, à repérer avec lui au début de la séance :",
      "« est tombée » avec être, « a effacé » avec avoir : deux lignes, deux règles opposées.",
      "« nous dormions » : imparfait, 1re personne du pluriel, -ions.",
      "« sortira, laissera » : deux futurs à la suite, chacun avec son r.",
    ],
    undefined,
    "Les deux auxiliaires arrivent l’un après l’autre, et c’est le cœur du texte. S’il accorde « effacé », il applique la règle d’être au mauvais endroit : elle est solide, il faut maintenant lui donner sa frontière.",
  ),

  f(
    "ed-auto-17",
    "Auto-dictée",
    "Quatre lignes 17 · La forêt",
    [
      "Dernier texte de la série, et le plus long. Au début de la séance, cinq à dix minutes : trois lectures, les pièges, une récitation le texte caché — les deux premières lignes, puis les deux dernières, si besoin.",
      "Puis il écrit de mémoire, le texte retourné, sans limite de temps. S’il s’arrête, on lui donne le premier mot de la ligne.",
      "Il compare seul avec le texte. On ne compte rien, ni les mots retenus ni les différences, et on ne ressort pas les textes de décembre.",
    ],
    [
      "Le texte à apprendre :",
      "Sous les hêtres, la lumière change de couleur.",
      "Les pas ne font presque aucun bruit sur le sol.",
      "Un tronc couché sert de pont au-dessus du ruisseau.",
      "Nous revenons toujours par le même côté.",
      "Les trois pièges, à repérer avec lui au début de la séance :",
      "« les hêtres » : l’accent circonflexe, et le h qui ne s’entend pas.",
      "« les pas ne font presque aucun bruit » : sujet pluriel, verbe irrégulier, négation en deux morceaux.",
      "« un tronc couché » : le c muet de « tronc », et le participe au masculin singulier.",
    ],
    undefined,
    "Ce qu’on regarde, c’est ce qui revient avec le texte sans avoir été préparé à part : les virgules, les accords déjà rencontrés dans les textes précédents. Si une ligne entière manque, c’est la longueur qui a pesé, pas l’orthographe : on la reprend un autre jour, seule.",
  ),
];
