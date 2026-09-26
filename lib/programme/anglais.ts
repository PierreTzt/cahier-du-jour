/**
 * Anglais, CM1 — l'année entière.
 *
 * Adossé au programme de **langue vivante étrangère du cycle 3** en vigueur.
 * Contrairement au français, aux mathématiques, à l'histoire-géographie et aux
 * sciences, aucun programme neuf ne s'applique à cette matière pour la rentrée
 * 2026 : les références ci-dessous renvoient donc aux attendus du cycle 3 sans
 * citer un article que je n'ai pas vérifié. C'est dit franchement.
 *
 * Une limite qu'il faut connaître. Une langue s'apprend d'abord **par
 * l'oreille et par la bouche** : écouter, répéter, parler. Un écran qui
 * demande d'écrire des mots ne fait qu'une petite partie du travail. Ces
 * leçons servent à fixer le vocabulaire et les structures ; la prononciation
 * demande quelqu'un en face, ou au minimum des enregistrements. C'est
 * pourquoi chaque leçon se termine par une partie « À écouter, à répéter » :
 * un dialogue à lire à deux voix, les mots à redire, une chanson à écouter.
 *
 * La prononciation est notée entre crochets, à la française — ce n'est pas de
 * l'alphabet phonétique, c'est fait pour être lu à voix haute par un enfant.
 *
 * Rien de tout ceci n'a été relu par un enseignant. Ça doit l'être.
 */

import { e, q, type Lecon } from "./types";

const saluer: Lecon = {
  code: "a-p1-saluer",
  matiere: "anglais",
  periode: 1,
  titre: "Saluer et se présenter",
  reference:
    "Saluer, se présenter, demander et donner son nom ; utiliser les formules de politesse élémentaires ; comprendre et produire des énoncés très courts sur soi.",
  minutes: 25,
  cours: [
    {
      texte: [
        "Les premières phrases d’une langue sont celles qui servent tout le temps. Celles-ci, tu les diras à chaque fois que tu rencontreras quelqu’un.",
      ],
    },
    {
      titre: "Bonjour, au revoir",
      texte: [
        "**Hello** [hè-lo] — bonjour, à n’importe quel moment. Le h se souffle, comme quand on fait de la buée sur une vitre.",
        "**Good morning** [goud mor-ning] — bonjour, le matin. **Good afternoon** [goud af-teur-noun] — l’après-midi. **Good evening** [goud iiv-ning] — le soir.",
        "**Goodbye** [goud-baï] — au revoir. **Bye** [baï] est plus familier. **Good night** [goud naït] ne veut pas dire bonsoir mais bonne nuit, quand on va se coucher.",
        "**Please** [pliiz] — s’il te plaît. **Thank you** [sènk-iou] — merci. **You’re welcome** [iour ouèl-keum] — je t’en prie.",
        "Le **th** de « thank » n’existe pas en français : on pose le bout de la langue entre les dents et on souffle. Ça donne une sorte de s soufflé, et c’est exactement ce qu’il faut.",
      ],
      regle:
        "En anglais, on dit « please » beaucoup plus souvent qu’en français. Une demande sans « please » sonne brutale.",
    },
    {
      titre: "Dire son nom",
      texte: [
        "**What’s your name?** [ouotts iour néïm] — Comment t’appelles-tu ?",
        "**My name is Tom.** [maï néïm iz] — Je m’appelle Tom. On peut aussi dire **I’m Tom** [aïm].",
        "**Nice to meet you.** [naïss tou miit iou] — Enchanté.",
        "Attention : on ne dit pas « I am called ». La formule normale est « my name is » ou « I’m ».",
      ],
    },
    {
      titre: "Comment ça va",
      texte: [
        "**How are you?** [haou ar iou] — Comment vas-tu ?",
        "Réponses : **I’m fine, thank you.** [aïm faïn, sènk-iou] — je vais bien, merci. **I’m okay.** [aïm o-kéï] — ça va. **Not very well.** [not vè-ri ouèl] — pas très bien.",
        "Puis on renvoie la question : **And you?** [and iou] — Et toi ?",
      ],
      regle:
        "À « How are you? », on répond comme on va : « I’m fine » quand ça va bien, « I’m okay » quand ça va à peu près, « Not very well » quand ça ne va pas très bien. Les trois réponses sont justes.",
    },
    {
      titre: "À écouter, à répéter",
      texte: [
        "Une langue s’apprend avec les oreilles et la bouche avant les yeux. Lis ce dialogue à voix haute avec un adulte, chacun un rôle, puis échangez les rôles.",
        "— **Hello! What’s your name?**",
        "— **My name is Tom. What’s your name?**",
        "— **I’m Léa. Nice to meet you! How are you?**",
        "— **I’m fine, thank you. And you?**",
        "— **I’m fine. Goodbye, Tom!**",
        "— **Bye, Léa!**",
        "Puis redis trois fois, en soufflant bien le h et en mettant la langue entre les dents pour le th : hello, thank you, how are you.",
        "À écouter : la chanson « Hello! » de Super Simple Songs, ou « Hello, Goodbye » des Beatles. Tu y reconnaîtras les mots de cette leçon.",
      ],
    },
  ],
  exemples: [
    {
      enonce: "Traduis : « Bonjour, je m’appelle Léa. Comment t’appelles-tu ? »",
      etapes: [
        "Bonjour : Hello.",
        "Je m’appelle Léa : My name is Léa.",
        "Comment t’appelles-tu : What’s your name?",
      ],
      resultat: "Hello, my name is Léa. What’s your name?",
    },
  ],
  exercices: [
    e("a-p1-sa-1", "Comment dit-on « bonjour » en anglais, à n’importe quel moment de la journée ?", "hello", "« Hello » convient toute la journée. « Good morning » est réservé au matin."),
    e("a-p1-sa-2", "Comment dit-on « merci » en anglais ? Réponds par les deux mots de la leçon.", "thank you", "« Thank you » [sènk-iou] : deux mots, la langue entre les dents pour le th. On le dit à chaque fois qu’on reçoit quelque chose."),
    e("a-p1-sa-3", "Comment dit-on « s’il te plaît » en anglais ?", "please", "On l’emploie beaucoup plus souvent qu’en français : sans lui, une demande sonne brutale."),
    q("a-p1-sa-4", "Que veut dire « What’s your name? »", ["Comment t’appelles-tu ?", "Comment vas-tu ?", "Quel âge as-tu ?"], "Comment t’appelles-tu ?", "« Name » veut dire nom. La question porte donc sur le nom, pas sur l’âge ni sur la santé."),
    q("a-p1-sa-5", "Comment dit-on « Je vais bien, merci » en anglais ?", ["I’m fine, thank you.", "Not very well, thank you.", "My name is Léa."], "I’m fine, thank you.", "« Fine » veut dire bien, et « thank you », merci. Quand ça va moins bien, on répond autrement, et c’est juste aussi : « I’m okay », ça va, ou « Not very well », pas très bien. On répond comme on va."),
    q("a-p1-sa-6", "Que veut dire « Good night » ?", ["bonne nuit", "bonsoir", "bonjour"], "bonne nuit", "On le dit en allant se coucher. Pour bonsoir, c’est « good evening »."),
    q("a-p1-sa-7", "Comment dit-on « au revoir » en anglais ?", ["Goodbye", "Good morning", "Good afternoon"], "Goodbye", "« Goodbye » [goud-baï], ou « bye » entre amis. « Good morning » et « good afternoon » servent à dire bonjour."),
    q("a-p1-sa-8", "Que dit-on pour saluer quelqu’un le soir, en arrivant ?", ["Good evening", "Good night", "Good morning"], "Good evening", "« Good evening » [goud iiv-ning], c’est bonsoir. « Good night », c’est bonne nuit : on le dit en partant se coucher."),
  ],
  reprise: [
    e("a-p1-sa-r1", "Que veut dire « Good morning » en français ? Écris un seul mot.", "bonjour", "« Good morning » [goud mor-ning], c’est bonjour, le matin. « Hello » dit bonjour à n’importe quel moment de la journée."),
    q("a-p1-sa-r3", "Tu veux emprunter le crayon de Léa. Quel mot anglais rend ta demande polie ?", ["please", "goodbye", "good night"], "please", "« Please » [pliiz], c’est s’il te plaît. En anglais, on le dit beaucoup plus souvent qu’en français : une demande sans « please » sonne brutale."),
    q("a-p1-sa-r2", "Léa te prête son crayon. Que lui dis-tu ?", ["Thank you!", "Please!", "Good night!"], "Thank you!", "« Thank you » [sènk-iou], c’est merci : on le dit quand on reçoit quelque chose. Pour demander, on dit « please »."),
    q("a-p1-sa-r4", "Léa te demande : « What’s your name? » Que lui réponds-tu ?", ["My name is Tom.", "I’m fine, thank you.", "Goodbye, Léa!"], "My name is Tom.", "« What’s your name? » demande ton nom. On répond « My name is… » ou « I’m… », suivi de son prénom."),
    q("a-p1-sa-r5", "Quelqu’un te demande « How are you? ». Tu réponds « I’m fine, thank you. » Que peux-tu ajouter pour lui renvoyer la question ?", ["And you?", "What’s your name?", "Good night!"], "And you?", "« And you? » [and iou], c’est « Et toi ? ». Après avoir répondu, on renvoie la question à l’autre."),
    q("a-p1-sa-r6", "Au moment d’aller te coucher, que dis-tu à ta famille ?", ["Good night!", "Good evening!", "Good afternoon!"], "Good night!", "« Good night » [goud naït], c’est bonne nuit : on le dit quand on va se coucher. « Good evening », c’est bonsoir, pour saluer en arrivant."),
    q("a-p1-sa-r7", "Que veut dire « Bye » ?", ["au revoir", "bonjour", "merci"], "au revoir", "« Bye » [baï], c’est au revoir, en plus familier : on le dit entre amis. On peut aussi dire « goodbye »."),
    q("a-p1-sa-r8", "À quel moment de la journée dit-on « Good afternoon » ?", ["l’après-midi", "le matin", "le soir"], "l’après-midi", "« Good afternoon » [goud af-teur-noun], c’est bonjour, l’après-midi. Le matin, on dit « good morning » ; le soir, « good evening »."),
  ],
};

const nombresAge: Lecon = {
  code: "a-p1-nombres",
  matiere: "anglais",
  periode: 1,
  titre: "Les nombres et l’âge",
  reference:
    "Compter, dire son âge, demander l’âge de quelqu’un ; comprendre et utiliser les nombres jusqu’à 100.",
  minutes: 25,
  cours: [
    {
      texte: [
        "Les nombres servent partout : l’âge, l’heure, les prix, les dates. Les vingt premiers s’apprennent par cœur ; après, il y a une règle.",
      ],
    },
    {
      titre: "De un à vingt",
      texte: [
        "one, two, three, four, five, six, seven, eight, nine, ten.",
        "eleven, twelve, thirteen, fourteen, fifteen, sixteen, seventeen, eighteen, nineteen, twenty.",
        "De treize à dix-neuf, on retrouve le nombre simple suivi de **-teen** [tiin] : four-teen, six-teen, seven-teen, nine-teen.",
        "Mais **trois d’entre eux changent de forme**, et ce sont les trois à connaître par cœur : three devient **thir**teen, five devient **fif**teen, et eight ne garde qu’un seul t — **eigh**teen.",
        "Eleven [i-lèv-n] et twelve [touèlv] ne ressemblent à rien : ils s’apprennent par cœur.",
      ],
      regle:
        "De 13 à 19, le nombre porte **-teen** — mais three, five et eight se déforment : thirteen, fifteen, eighteen. C’est de cette série que vient le mot « teenagers », les adolescents.",
    },
    {
      titre: "Les dizaines, et le trait d’union",
      texte: [
        "twenty (20), thirty (30), forty (40), fifty (50), sixty (60), seventy (70), eighty (80), ninety (90), one hundred (100).",
        "**Ce qui se ressemble à l’oreille** : thirteen (13) et thirty (30). Ce qui les sépare, c’est l’endroit où l’on appuie. **Thir-TEEN** : on appuie à la fin, et la fin est longue. **THIR-ty** : on appuie au début, et la fin est courte, comme avalée.",
        "Dis les deux à voix haute l’un après l’autre, plusieurs fois. C’est la difficulté numéro un des francophones, et elle ne se règle qu’avec la bouche.",
        "Attention à l’orthographe : **forty** sans u, alors que four en a un. Et **fifty**, pas « fivety ».",
        "Entre les dizaines, on relie avec un trait d’union : twenty-one, thirty-five, forty-two.",
        "Pas de « et » comme en français : on dit thirty-one, jamais « thirty and one ».",
      ],
    },
    {
      titre: "L’âge : avoir ou être ?",
      texte: [
        "En français on **a** neuf ans. En anglais on **est** neuf : **I am nine**, ou **I’m nine years old**.",
        "**How old are you?** [haou old ar iou] — Quel âge as-tu ? Littéralement : « combien vieux es-tu ? »",
        "Dire « I have nine years » est l’erreur la plus fréquente des francophones.",
      ],
      regle: "L’âge se dit avec **to be**, jamais avec « to have ». I am nine.",
    },
    {
      titre: "À écouter, à répéter",
      texte: [
        "Compte de un à vingt à voix haute, plusieurs fois, jusqu’à ne plus hésiter. Puis compte de dix en dix : ten, twenty, thirty, forty, fifty, sixty, seventy, eighty, ninety, one hundred.",
        "Ensuite, le jeu des deux qui se ressemblent. Un adulte dit au hasard thirteen ou thirty, fourteen ou forty, fifteen ou fifty, et tu montres le nombre avec tes doigts ou tu l’écris. Puis vous échangez les rôles, et c’est toi qui les dis.",
        "Lis ce dialogue à deux voix, puis échangez les rôles.",
        "— **Hello! How old are you?**",
        "— **I’m nine years old. And you?**",
        "— **I’m eleven.**",
        "À écouter : « The Numbers Song » ou n’importe quelle comptine de comptage anglaise. Compte avec elle, à voix haute.",
      ],
    },
  ],
  exemples: [
    {
      enonce: "Traduis : « Quel âge as-tu ? — J’ai neuf ans. »",
      etapes: [
        "Quel âge as-tu : How old are you?",
        "L’âge se dit avec le verbe être, pas avoir.",
        "J’ai neuf ans : I’m nine, ou I’m nine years old.",
      ],
      resultat: "How old are you? — I’m nine years old.",
    },
  ],
  exercices: [
    e("a-p1-no-1", "Écris « 9 » en anglais.", "nine", "one, two, three, four, five, six, seven, eight, nine, ten. Nine se dit [naïn]."),
    e("a-p1-no-2", "Écris « 13 » en anglais.", "thirteen", "De 13 à 19, le nombre porte -teen — mais three se déforme en thir. Donc thirteen, et jamais « threeteen »."),
    e("a-p1-no-3", "Écris « 40 » en anglais.", "forty", "Attention : forty sans u, alors que « four » en a un."),
    q("a-p1-no-4", "Comment dit-on « j’ai neuf ans » ?", ["I’m nine years old", "I have nine years", "I am nine ages"], "I’m nine years old", "L’âge se dit avec le verbe être. « I have nine years » est l’erreur classique des francophones."),
    q("a-p1-no-5", "Que veut dire « How old are you? »", ["Quel âge as-tu ?", "Comment vas-tu ?", "Où habites-tu ?"], "Quel âge as-tu ?", "Littéralement « combien vieux es-tu ? »."),
    e("a-p1-no-6", "Écris « 21 » en anglais.", "twenty-one", "Avec un trait d’union, et sans « and » : twenty-one, jamais « twenty and one »."),
    e("a-p1-no-7", "Écris « 15 » en anglais.", "fifteen", "Five se déforme en fif devant -teen : fifteen. Le même changement se retrouve dans fifty, cinquante."),
    q("a-p1-no-8", "Tu entends [THIR-ti], en appuyant sur le début. Quel nombre est-ce ?", ["30", "13", "3"], "30", "Quand on appuie sur le début et que la fin est courte, c’est une dizaine : thirty, 30. Thirteen, lui, appuie sur la fin, qui s’entend longue : thir-TEEN."),
  ],
};

const couleursEcole: Lecon = {
  code: "a-p2-couleurs",
  matiere: "anglais",
  periode: 2,
  titre: "Les couleurs et les objets de la classe",
  reference:
    "Nommer les couleurs et des objets familiers ; comprendre et produire des énoncés simples pour décrire, désigner, demander.",
  minutes: 25,
  cours: [
    {
      texte: [
        "Nommer ce qu’on a autour de soi est le moyen le plus rapide d’enrichir son vocabulaire : les objets sont là, on peut les montrer.",
      ],
    },
    {
      titre: "Les couleurs",
      texte: [
        "red [rèd] (rouge), blue [blou] (bleu), yellow [yè-lo] (jaune), green [griin] (vert), orange [o-rindj], purple [peur-pl] (violet), pink [pink] (rose), brown [braoun] (marron), black [blak] (noir), white [ouaït] (blanc), grey [gréï] (gris).",
        "« Grey » s’écrit aussi « gray » aux États-Unis. Les deux sont corrects.",
      ],
    },
    {
      titre: "Les objets de la classe",
      texte: [
        "a pen [pèn] (un stylo), a pencil [pèn-sl] (un crayon), a book [bouk] (un livre), a bag [bag] (un sac), a ruler [rou-leur] (une règle), a rubber [ra-beur] (une gomme), a desk [dèsk] (un bureau), a chair [tchèr] (une chaise), a board [bord] (un tableau), a sheet of paper [chiit ov péï-peur] (une feuille).",
        "Attention au faux ami : **a pencil** est un crayon, pas un pinceau. Un pinceau se dit **a paintbrush** [péïnt-brech] — « a brush » tout court, c’est une brosse.",
      ],
    },
    {
      titre: "Décrire : l’adjectif passe devant",
      texte: [
        "En français on dit « un stylo bleu ». En anglais, l’adjectif se met **avant** le nom : **a blue pen**.",
        "C’est vrai pour tous les adjectifs : a big bag, a red book, a small chair.",
        "Et l’adjectif ne prend jamais de -s : **two blue pens**, et non « two blues pens ».",
      ],
      regle:
        "En anglais, l’adjectif passe devant le nom et ne s’accorde jamais. Deux différences avec le français, dans la même règle.",
    },
    {
      titre: "À écouter, à répéter",
      texte: [
        "Fais le tour de la pièce et nomme à voix haute la couleur de dix objets : **it’s red**, **it’s blue**, **it’s green**. Puis recommence avec l’objet entier — a blue pen, a green book.",
        "Attention à deux sons qui n’existent pas en français. Le **th** de « three » se fait la langue entre les dents. Le **r** anglais de « red » et « ruler » ne racle pas la gorge : la langue recule sans toucher le palais, et le son ressemble un peu à un w.",
        "Lis ce dialogue à deux voix, puis échangez les rôles.",
        "— **What’s this?**",
        "— **It’s a pencil.**",
        "— **What colour is it?**",
        "— **It’s red. And this?**",
        "— **It’s a blue book.**",
        "À écouter : « I Can Sing a Rainbow », une chanson de couleurs que beaucoup d’écoles anglaises apprennent. Chante-la en montrant chaque couleur.",
      ],
    },
  ],
  exemples: [
    {
      enonce: "Traduis : « deux crayons rouges ».",
      etapes: [
        "Crayon : pencil. Au pluriel : pencils.",
        "Rouge : red. L’adjectif passe devant le nom.",
        "Et il ne s’accorde pas : red, pas « reds ».",
      ],
      resultat: "two red pencils",
    },
  ],
  exercices: [
    e("a-p2-co-1", "Comment dit-on « vert » en anglais ?", "green", "green : la couleur de l’herbe, grass."),
    e("a-p2-co-2", "Comment dit-on « livre » en anglais ? Réponds par le mot seul, sans article.", "book", "Book [bouk]. Avec l’article, on écrit « a book » au singulier et « books » au pluriel — seul le nom prend le -s."),
    q("a-p2-co-3", "Comment dit-on « un stylo bleu » ?", ["a blue pen", "a pen blue", "a blues pen"], "a blue pen", "L’adjectif passe devant le nom, et il ne prend pas de -s."),
    q("a-p2-co-4", "Comment dit-on « deux crayons rouges » ?", ["two red pencils", "two reds pencils", "two pencils red"], "two red pencils", "Seul le nom prend le pluriel : l’adjectif reste invariable."),
    q("a-p2-co-5", "Que veut dire « a ruler » ?", ["une règle", "un crayon", "une gomme"], "une règle", "Une gomme est « a rubber », un crayon « a pencil »."),
    q("a-p2-co-6", "« A pencil » est…", ["un crayon", "un pinceau", "un stylo"], "un crayon", "Un stylo est « a pen ». Un pinceau est « a paintbrush » — « a brush » tout seul désigne une brosse."),
    e("a-p2-co-7", "Comment dit-on « noir » en anglais ?", "black", "Black [blak]. Et blanc se dit white [ouaït]."),
    q("a-p2-co-8", "Comment dit-on « trois sacs verts » ?", ["three green bags", "three greens bags", "three bags green"], "three green bags", "L’adjectif passe devant le nom et ne s’accorde jamais : seul le nom prend le -s."),
  ],
};

const famille: Lecon = {
  code: "a-p2-famille",
  matiere: "anglais",
  periode: 2,
  titre: "La famille",
  reference:
    "Parler de soi et de son entourage ; nommer les membres de la famille ; utiliser les adjectifs possessifs pour désigner.",
  minutes: 25,
  cours: [
    {
      texte: [
        "Parler de sa famille est l’un des premiers sujets de conversation dans toutes les langues. Le vocabulaire est court, et il y a une particularité anglaise utile à connaître.",
      ],
    },
    {
      titre: "Le vocabulaire",
      texte: [
        "a mother [ma-zeur] / a mum [meum] (une mère, une maman), a father [fa-zeur] / a dad [dad] (un père, un papa). Le **th** de mother et father est soufflé, la langue entre les dents — mais il vibre, contrairement à celui de « thank ».",
        "a brother [bra-zeur] (un frère), a sister [sis-teur] (une sœur), a son [seun] (un fils), a daughter [dô-teur] (une fille — celle de ses parents).",
        "a grandmother / a grandma, a grandfather / a grandpa.",
        "an uncle [eun-kl] (un oncle), an aunt [ânt] (une tante), a cousin [ka-zn] (un cousin ou une cousine — le mot est le même).",
        "parents (les parents), grandparents (les grands-parents).",
      ],
      regle:
        "« Cousin » ne change pas selon le sexe en anglais. Un cousin et une cousine sont tous les deux « a cousin ».",
    },
    {
      titre: "À qui c’est : les possessifs",
      texte: [
        "my (mon, ma, mes), your (ton, ta, tes), his (son, à un garçon), her (son, à une fille), our (notre), their (leur).",
        "Différence importante avec le français : **his** et **her** dépendent du **possesseur**, pas de l’objet.",
        "« his sister » = la sœur d’un garçon. « her brother » = le frère d’une fille. En français, « sa sœur » ne dit pas si on parle d’un garçon ou d’une fille ; en anglais, si.",
      ],
      regle: "his = à lui. her = à elle. Le possesseur décide, pas l’objet possédé.",
    },
    {
      titre: "Le ’s de possession",
      texte: [
        "Pour dire « le frère de Léa », on n’utilise pas « of ». On écrit **Léa’s brother**.",
        "« My mother’s car » = la voiture de ma mère.",
        "C’est une construction très fréquente, et elle surprend parce qu’elle inverse l’ordre français.",
      ],
    },
    {
      titre: "À écouter, à répéter",
      texte: [
        "Prends une photo de famille, ou dessine ton arbre, et nomme chacun à voix haute : **this is my mother**, **this is my uncle**, **these are my grandparents**.",
        "Puis entraîne-toi sur la difficulté de cette leçon, qui n’est pas du vocabulaire mais du raisonnement. Un adulte montre quelqu’un sur la photo et demande **his or her?** — tu réponds en regardant **qui possède**, pas ce qui est possédé.",
        "Lis ce dialogue à deux voix, puis échangez les rôles.",
        "— **Have you got a brother?**",
        "— **Yes, I have. And I’ve got a sister too. Her name is Emma.**",
        "— **Is this your father’s car?**",
        "— **No, it’s my uncle’s car.**",
        "À écouter : « The Finger Family », une comptine où chaque doigt est un membre de la famille. Elle répète les mots assez souvent pour qu’ils restent.",
      ],
    },
  ],
  exemples: [
    {
      enonce: "Traduis : « la sœur de Tom ».",
      etapes: [
        "On n’utilise pas « of » pour les personnes.",
        "On met le possesseur d’abord, avec ’s.",
        "Donc : Tom’s sister.",
      ],
      resultat: "Tom’s sister",
    },
  ],
  exercices: [
    e("a-p2-fa-1", "Comment dit-on « sœur » en anglais ? Réponds par le mot seul, sans article.", "sister", "Sister [sis-teur], et brother [bra-zeur] pour un frère."),
    e("a-p2-fa-2", "Comment dit-on « les grands-parents » en anglais ?", "grandparents", "grandmother et grandfather, ensemble : grandparents."),
    q("a-p2-fa-3", "« His sister » veut dire…", ["la sœur d’un garçon", "la sœur d’une fille", "la sœur de tout le monde"], "la sœur d’un garçon", "« His » désigne un possesseur masculin. Pour une fille, on dirait « her sister » — et la sœur reste une fille dans les deux cas : c’est le possesseur qui choisit le mot."),
    q("a-p2-fa-4", "Comment dit-on « la sœur de Tom » ?", ["Tom’s sister", "the sister of Tom", "sister Tom"], "Tom’s sister", "Pour les personnes, on utilise ’s et non « of »."),
    q("a-p2-fa-5", "Comment dit-on « une cousine » ?", ["a cousin", "a cousine", "a girl cousin"], "a cousin", "Le mot est le même pour un cousin et une cousine."),
    q("a-p2-fa-6", "Dans « her brother », qui possède ?", ["une fille", "un garçon"], "une fille", "« Her » indique un possesseur féminin. Le frère, lui, est un garçon — mais ce n’est pas lui qui décide du mot."),
    q("a-p2-fa-7", "Comment dit-on « le vélo de mon père » ?", ["my father’s bike", "the bike of my father", "my father bike"], "my father’s bike", "Pour les personnes, on met le possesseur d’abord, suivi de ’s. « Of » s’emploie pour les choses, pas ici."),
    e("a-p2-fa-8", "Comment dit-on « un oncle » en anglais ? Réponds par les deux mots.", "an uncle", "An uncle [eun-kl]. On écrit « an » et non « a » parce que le mot commence par un son de voyelle — comme dans « an aunt »."),
  ],
};

const heure: Lecon = {
  code: "a-p3-heure",
  matiere: "anglais",
  periode: 3,
  titre: "L’heure et la journée",
  reference:
    "Demander et donner l’heure ; parler de ses activités quotidiennes ; comprendre et produire des énoncés au présent sur un emploi du temps.",
  minutes: 30,
  cours: [
    {
      texte: [
        "Dire l’heure en anglais suit une logique différente du français, et c’est plus simple qu’il n’y paraît une fois qu’on l’a comprise.",
      ],
    },
    {
      titre: "Demander et répondre",
      texte: [
        "**What time is it?** [ouot taïm iz it] — Quelle heure est-il ? On dit aussi **What’s the time?**",
        "**It’s three o’clock.** [its srii o-klok] — Il est trois heures. « O’clock » ne s’emploie **que** pour les heures pile.",
        "**It’s half past three.** — Il est trois heures et demie. Littéralement : « la moitié après trois ».",
        "**It’s a quarter past three.** — Trois heures et quart. **It’s a quarter to four.** — Quatre heures moins le quart.",
      ],
      regle:
        "**past** = après. **to** = avant. On dit « past » jusqu’à la demie, puis « to » en visant l’heure suivante.",
    },
    {
      titre: "Le matin et l’après-midi",
      texte: [
        "L’anglais compte de 1 à 12, deux fois par jour, et précise **a.m.** (matin) ou **p.m.** (après-midi et soir).",
        "Trois heures de l’après-midi se dit « three p.m. », et non « fifteen o’clock ».",
        "On peut aussi dire « in the morning » (le matin), « in the afternoon » (l’après-midi), « in the evening » (le soir) — et **at night** (la nuit), qui est l’exception : celui-là prend « at », pas « in ».",
      ],
    },
    {
      titre: "Raconter sa journée",
      texte: [
        "I get up at seven. (Je me lève à sept heures.)",
        "I have breakfast. (Je prends le petit-déjeuner.)",
        "I start school at half past eight. (Je commence l’école à huit heures et demie.)",
        "I have lunch at noon. (Je déjeune à midi.)",
        "I do my homework. (Je fais mes devoirs.)",
        "I go to bed at half past eight. (Je vais au lit à vingt heures trente.)",
        "Remarque : on dit **at** devant une heure — at seven, at noon.",
      ],
      regle:
        "**at** + une heure précise : at seven, at noon. **in** + un moment de la journée : in the morning, in the afternoon, in the evening. Et une exception, une seule, qui s’apprend avec la règle : **at night**, jamais « in the night ».",
    },
    {
      titre: "À écouter, à répéter",
      texte: [
        "Prends une horloge à aiguilles, ou dessines-en une. Un adulte place les aiguilles, tu dis l’heure à voix haute ; puis il dit une heure et c’est toi qui places les aiguilles.",
        "Commence par les heures pile (**it’s four o’clock**), puis les demies (**half past four**), puis les quarts (**a quarter past**, **a quarter to**). Ne passe au suivant que quand le précédent vient sans réfléchir.",
        "Puis raconte ta vraie journée à voix haute, du lever au coucher, avec une heure à chaque fois : **I get up at seven. I have breakfast at half past seven…**",
        "Lis ce dialogue à deux voix, puis échangez les rôles.",
        "— **Excuse me, what time is it?**",
        "— **It’s half past ten.**",
        "— **Thank you! What time do you have lunch?**",
        "— **At noon.**",
        "À écouter : la comptine « Hickory Dickory Dock », où la souris monte à l’horloge quand elle sonne une heure. On y entend « one o’clock », « two o’clock ».",
      ],
    },
  ],
  exemples: [
    {
      enonce: "Comment dit-on « il est quatre heures moins le quart » ?",
      etapes: [
        "Moins le quart : on est avant l’heure, donc « to ».",
        "On vise l’heure suivante : four.",
        "Un quart : a quarter.",
      ],
      resultat: "It’s a quarter to four.",
    },
  ],
  exercices: [
    q("a-p3-he-1", "Comment demande-t-on l’heure en anglais ?", ["What time is it?", "How is the time?", "Which hour is it?"], "What time is it?", "Ou bien « What’s the time? ». Les deux sont corrects."),
    q("a-p3-he-2", "Comment dit-on « il est trois heures et demie » ?", ["It’s half past three.", "It’s three and half.", "It’s half to three."], "It’s half past three.", "« Past » veut dire après : la moitié après trois."),
    q("a-p3-he-3", "Que veut dire « a quarter to four » ?", ["quatre heures moins le quart", "quatre heures et quart", "quatre heures et demie"], "quatre heures moins le quart", "« To » veut dire avant : un quart avant quatre heures."),
    q("a-p3-he-4", "Quand emploie-t-on « o’clock » ?", ["seulement pour les heures pile", "toujours", "jamais"], "seulement pour les heures pile", "On ne dit pas « half past three o’clock »."),
    q("a-p3-he-5", "Comment dit-on « trois heures de l’après-midi » ?", ["three p.m.", "fifteen o’clock", "three afternoon"], "three p.m.", "L’anglais compte de 1 à 12 et précise a.m. ou p.m."),
    e("a-p3-he-6", "Complète : « I get up … seven. » Réponds par le mot manquant.", "at", "On emploie « at » devant une heure précise. Devant un moment de la journée, c’est « in » — sauf « at night », la seule exception."),
    q("a-p3-he-7", "Comment dit-on « la nuit » dans « je lis la nuit » ?", ["at night", "in the night", "on night"], "at night", "C’est l’exception de la leçon : les autres moments prennent « in » — in the morning, in the evening — mais la nuit prend « at »."),
    q("a-p3-he-8", "Il est 7 h 15 du matin. Comment le dit-on ?", ["It’s a quarter past seven a.m.", "It’s a quarter to seven a.m.", "It’s seven o’clock and a quarter."], "It’s a quarter past seven a.m.", "Un quart APRÈS sept, donc « past ». « To » servirait si l’on visait l’heure suivante, et « o’clock » ne se dit que pour les heures pile."),
  ],
};

const nourriture: Lecon = {
  code: "a-p4-nourriture",
  matiere: "anglais",
  periode: 4,
  titre: "La nourriture, et ce qu’on aime",
  reference:
    "Exprimer des goûts et des préférences ; nommer des aliments ; comprendre et produire des énoncés avec like et don’t like.",
  minutes: 25,
  cours: [
    {
      texte: [
        "Dire ce qu’on aime et ce qu’on n’aime pas est utile tout de suite, et ça fait travailler une structure importante : la négation.",
      ],
    },
    {
      titre: "Le vocabulaire",
      texte: [
        "bread [brèd] (le pain), butter [ba-teur] (le beurre), cheese [tchiiz] (le fromage), milk [milk] (le lait), water [ouô-teur] (l’eau), juice [djouss] (le jus).",
        "an apple (une pomme), a banana, an orange, strawberries (des fraises).",
        "meat [miit] (la viande), fish [fich] (le poisson), chicken [tchi-kn] (le poulet), rice [raïss] (le riz), pasta [pas-ta] (les pâtes), potatoes [po-téï-tooz] (les pommes de terre), vegetables [vèdj-ta-blz] (les légumes).",
        "breakfast [brèk-feust] (le petit-déjeuner), lunch [leuntch] (le déjeuner), dinner [di-neur] (le dîner).",
      ],
    },
    {
      titre: "I like, I don’t like",
      texte: [
        "**I like apples.** — J’aime les pommes.",
        "**I don’t like fish.** — Je n’aime pas le poisson. « Don’t » est la contraction de « do not ».",
        "**Do you like cheese?** — Aimes-tu le fromage ? Réponses courtes : **Yes, I do.** / **No, I don’t.**",
        "Remarque importante : en anglais, on répond par « Yes, I do » et non simplement « yes ». La réponse courte reprend l’auxiliaire.",
      ],
      regle:
        "Pour dire non, on ajoute **don’t** devant le verbe : I don’t like. On ne change pas le verbe lui-même.",
    },
    {
      titre: "Le pluriel des goûts",
      texte: [
        "Quand on parle d’un aliment en général, l’anglais utilise souvent le pluriel là où le français met un singulier : « I like apples » — j’aime la pomme, au sens des pommes en général.",
        "Mais certains mots n’ont pas de pluriel : water, milk, bread, rice, cheese. On ne dit pas « breads ». Ce sont des choses qu’on ne compte pas.",
      ],
    },
    {
      titre: "À écouter, à répéter",
      texte: [
        "Ouvre le placard ou le frigo et nomme à voix haute dix choses que tu vois. Puis dis pour chacune **I like it** ou **I don’t like it**.",
        "Entraîne-toi ensuite à la réponse courte, qui est ce qui manque le plus aux francophones. Un adulte demande **Do you like…?** et tu réponds **Yes, I do** ou **No, I don’t** — jamais « yes » tout seul, qui sonne sec en anglais.",
        "Attention au son de **fish** et de **cheese** : le premier est court et sec, le second long. Dis-les l’un après l’autre pour entendre la différence.",
        "Lis ce dialogue à deux voix, puis échangez les rôles.",
        "— **Do you like chicken?**",
        "— **Yes, I do. I like chicken and rice. Do you like vegetables?**",
        "— **No, I don’t. But I like apples.**",
        "À écouter : « Do You Like Broccoli Ice Cream? », qui répète la question et les deux réponses courtes du début à la fin.",
      ],
    },
  ],
  exemples: [
    {
      enonce: "Traduis : « Je n’aime pas le poisson, mais j’aime le poulet. »",
      etapes: [
        "Je n’aime pas : I don’t like.",
        "Le poisson : fish — un mot qui ne prend pas de pluriel ici.",
        "Mais j’aime le poulet : but I like chicken.",
      ],
      resultat: "I don’t like fish, but I like chicken.",
    },
  ],
  exercices: [
    e("a-p4-nu-1", "Comment dit-on « le pain » en anglais ?", "bread", "bread — un mot qui ne prend pas de pluriel."),
    q("a-p4-nu-2", "Comment dit-on « je n’aime pas le poisson » ?", ["I don’t like fish", "I no like fish", "I like not fish"], "I don’t like fish", "Pour la négation, on ajoute « don’t » devant le verbe."),
    q("a-p4-nu-3", "Que répond-on à « Do you like cheese? » pour dire oui ?", ["Yes, I do.", "Yes, I like.", "Yes, I am."], "Yes, I do.", "La réponse courte reprend l’auxiliaire « do »."),
    q("a-p4-nu-4", "Que veut dire « vegetables » ?", ["les légumes", "la viande", "les fruits"], "les légumes", "La viande est « meat », les fruits « fruit »."),
    q("a-p4-nu-5", "Lequel de ces mots ne prend pas de pluriel ?", ["water", "apple", "banana"], "water", "Comme milk, bread et rice : ce sont des choses qu’on ne compte pas."),
    e("a-p4-nu-6", "Comment dit-on « le petit-déjeuner » en anglais ?", "breakfast", "breakfast — littéralement « rompre le jeûne » de la nuit."),
    q("a-p4-nu-7", "Que répond-on à « Do you like fish? » pour dire non ?", ["No, I don’t.", "No, I don’t like.", "No, I am not."], "No, I don’t.", "La réponse courte reprend l’auxiliaire « do », comme pour dire oui. On ne répète pas le verbe."),
    e("a-p4-nu-8", "Comment dit-on « le fromage » en anglais ? Réponds par le mot seul, sans article.", "cheese", "Cheese [tchiiz]. Comme milk, bread et water, il ne prend pas de pluriel — on ne compte pas le fromage."),
  ],
};

const meteoAnglais: Lecon = {
  code: "a-p4-meteo",
  matiere: "anglais",
  periode: 4,
  titre: "Le temps qu’il fait et les saisons",
  reference:
    "Décrire le temps qu’il fait ; nommer les saisons, les mois et les jours ; comprendre et produire des énoncés courts sur l’environnement immédiat.",
  minutes: 25,
  cours: [
    {
      texte: [
        "Parler du temps est le sujet de conversation anglais par excellence — et ce n’est pas une plaisanterie, c’est vrai.",
      ],
    },
    {
      titre: "Le temps qu’il fait",
      texte: [
        "**It’s sunny.** (il y a du soleil) — **It’s cloudy.** (nuageux) — **It’s rainy** ou **It’s raining.** (il pleut).",
        "**It’s windy.** (il y a du vent) — **It’s snowing.** (il neige) — **It’s foggy.** (il y a du brouillard).",
        "**It’s hot.** (il fait chaud) — **It’s cold.** (froid) — **It’s warm.** (doux) — **It’s cool.** (frais).",
        "**What’s the weather like?** — Quel temps fait-il ? Littéralement « à quoi ressemble le temps ? ».",
      ],
      regle:
        "Pour le temps, la phrase commence toujours par **it’s** — même s’il n’y a pas de « il » en français. « Il pleut » = it’s raining.",
    },
    {
      titre: "Les saisons et les mois",
      texte: [
        "spring [spring] (le printemps), summer [sa-meur] (l’été), autumn [ô-teum] (l’automne — « fall » aux États-Unis ; le n final ne se prononce pas), winter [ouin-teur] (l’hiver).",
        "January, February, March, April, May, June, July, August, September, October, November, December.",
        "Les mois et les jours prennent **toujours une majuscule** en anglais, contrairement au français. On écrit « in January », jamais « in january ».",
      ],
    },
    {
      titre: "Les jours",
      texte: [
        "Monday [man-déï], Tuesday [tiouz-déï], Wednesday [ouènz-déï] — le premier d se tait —, Thursday [seurz-déï], Friday [fraï-déï], Saturday [sa-teur-déï], Sunday [san-déï].",
        "Attention : la semaine anglaise commence souvent le dimanche dans les calendriers.",
        "On dit **on Monday** (lundi), **in January** (en janvier), **in summer** (en été).",
      ],
      regle: "on + un jour. in + un mois ou une saison. at + une heure.",
    },
    {
      titre: "À écouter, à répéter",
      texte: [
        "Chaque matin de la semaine, regarde par la fenêtre et dis le temps à voix haute en une phrase : **it’s sunny today**, **it’s raining**. Sept jours de suite, ça suffit à les fixer.",
        "Récite ensuite les sept jours dans l’ordre, puis les douze mois, sans t’arrêter. Wednesday est le plus traître : on n’entend pas le premier d, ça fait [ouènz-déï].",
        "Lis ce dialogue à deux voix, puis échangez les rôles.",
        "— **What’s the weather like today?**",
        "— **It’s cold and cloudy. It’s winter!**",
        "— **Is it raining?**",
        "— **No, it isn’t. But it’s very windy.**",
        "À écouter : « How’s the Weather? », une chanson qui pose la question et donne les quatre réponses les plus courantes.",
      ],
    },
  ],
  exemples: [
    {
      enonce: "Traduis : « Il pleut en novembre. »",
      etapes: [
        "Il pleut : it’s raining.",
        "En novembre : in November — avec une majuscule.",
        "Devant un mois, on emploie « in ».",
      ],
      resultat: "It’s raining in November.",
    },
  ],
  exercices: [
    q("a-p4-mo-1", "Comment dit-on « il pleut » ?", ["It’s raining.", "He rains.", "There is rain."], "It’s raining.", "Pour le temps, la phrase commence toujours par « it’s »."),
    e("a-p4-mo-2", "Comment dit-on « l’hiver » en anglais ?", "winter", "spring, summer, autumn, winter."),
    q("a-p4-mo-3", "Comment dit-on « il fait froid » ?", ["It’s cold.", "It’s hot.", "It’s cool."], "It’s cold.", "« Cool » veut dire frais, pas froid."),
    q("a-p4-mo-4", "Les mois prennent-ils une majuscule en anglais ?", ["oui", "non"], "oui", "January, February, March… contrairement au français."),
    e("a-p4-mo-5", "Complète : « … January » pour dire « en janvier ». Réponds par le mot manquant.", "in", "in + un mois ou une saison. On + un jour, at + une heure."),
    q("a-p4-mo-6", "Que veut dire « What’s the weather like? »", ["Quel temps fait-il ?", "Aimes-tu le temps ?", "Quelle heure est-il ?"], "Quel temps fait-il ?", "Littéralement « à quoi ressemble le temps ? »."),
    q("a-p4-mo-7", "Comment dit-on « il y a du vent » ?", ["It’s windy.", "It’s wind.", "There is windy."], "It’s windy.", "Pour le temps, la phrase commence toujours par « it’s », et l’on emploie l’adjectif : windy, sunny, cloudy, rainy."),
    e("a-p4-mo-8", "Complète : « … Monday » pour dire « lundi ». Réponds par le mot manquant.", "on", "on + un jour, in + un mois ou une saison, at + une heure. Trois petits mots, trois emplois."),
  ],
};

const lieux: Lecon = {
  code: "a-p5-lieux",
  matiere: "anglais",
  periode: 5,
  titre: "Les lieux et le chemin",
  reference:
    "Situer dans l’espace ; nommer des lieux de la ville ; comprendre et donner des indications simples de direction.",
  minutes: 25,
  cours: [
    {
      texte: [
        "Savoir demander son chemin et comprendre la réponse est l’une des choses les plus utiles qu’une langue apporte.",
      ],
    },
    {
      titre: "Les lieux",
      texte: [
        "a school [skoul] (une école), a house [haouss] (une maison), a shop [chop] (un magasin), a park [park], a library [laï-bra-ri] (une bibliothèque), a station [stéï-chn] (une gare), a hospital [hos-pi-tl], a church [tcheurtch] (une église), a street [striit] (une rue), a bridge [bridj] (un pont).",
        "Faux ami à connaître : **a library** est une bibliothèque, pas une librairie. Une librairie se dit **a bookshop**.",
      ],
      regle: "library = bibliothèque. bookshop = librairie. Ne pas les confondre.",
    },
    {
      titre: "Où c’est",
      texte: [
        "in (dans), on (sur), under (sous), behind (derrière), in front of (devant), next to (à côté de), between (entre), near (près de), opposite (en face de).",
        "**The cat is under the table.** — Le chat est sous la table.",
        "**The shop is next to the school.** — Le magasin est à côté de l’école.",
      ],
    },
    {
      titre: "Demander et indiquer le chemin",
      texte: [
        "**Excuse me, where is the station?** — Excusez-moi, où est la gare ?",
        "**Go straight on.** [go stréït on] (continuez tout droit) — **Turn left.** [teurn lèft] (tournez à gauche) — **Turn right.** [teurn raït] (à droite).",
        "**It’s on your left.** (c’est sur votre gauche) — **It’s the second street on the right.** (c’est la deuxième rue à droite).",
        "En anglais, on commence presque toujours par « Excuse me » pour aborder quelqu’un. Sans cela, la question paraît impolie.",
      ],
      regle: "left = gauche. right = droite. straight on = tout droit.",
    },
    {
      titre: "À écouter, à répéter",
      texte: [
        "Prends le plan de ton quartier, ou dessine-le. Pose un doigt sur ta maison et guide un adulte jusqu’à un lieu de son choix, à voix haute, en anglais : **go straight on, turn left, it’s on your right**.",
        "Puis l’inverse : c’est lui qui guide, et tu suis avec le doigt. Si tu arrives ailleurs que prévu, c’est qu’une consigne n’a pas été comprise — et c’est là qu’on apprend.",
        "Entraîne-toi aussi à placer un objet et à dire où il est : **the book is under the chair**, **the pen is next to the bag**.",
        "Lis ce dialogue à deux voix, puis échangez les rôles.",
        "— **Excuse me, where is the station?**",
        "— **Go straight on and turn left. It’s opposite the library.**",
        "— **Is it far?**",
        "— **No, it’s very near. Thank you!**",
        "À écouter : « Walking Walking » ou toute chanson de déplacement ; et pour les prépositions, « Where Is the Green Sheep? » lu à voix haute.",
      ],
    },
  ],
  exemples: [
    {
      enonce: "Traduis : « Le magasin est à côté de l’école. »",
      etapes: [
        "Le magasin : the shop.",
        "À côté de : next to.",
        "L’école : the school.",
      ],
      resultat: "The shop is next to the school.",
    },
  ],
  exercices: [
    q("a-p5-li-1", "Que veut dire « a library » ?", ["une bibliothèque", "une librairie", "un livre"], "une bibliothèque", "Une librairie se dit « a bookshop ». C’est un faux ami classique."),
    e("a-p5-li-2", "Comment dit-on « à gauche » en anglais ?", "left", "« Left » veut dire gauche et « right » droite — mais « right » veut aussi dire « juste »."),
    q("a-p5-li-3", "Que veut dire « Go straight on » ?", ["continuez tout droit", "tournez à droite", "arrêtez-vous"], "continuez tout droit", "Straight veut dire droit, au sens de direction."),
    q("a-p5-li-4", "Comment dit-on « sous la table » ?", ["under the table", "on the table", "in the table"], "under the table", "under = sous, on = sur, in = dans."),
    q("a-p5-li-5", "Que veut dire « next to » ?", ["à côté de", "derrière", "en face de"], "à côté de", "Derrière est « behind », en face de est « opposite »."),
    q("a-p5-li-6", "Par quoi commence-t-on pour aborder quelqu’un dans la rue ?", ["Excuse me", "Hello you", "Please me"], "Excuse me", "Sans cela, la question paraît impolie en anglais."),
    q("a-p5-li-7", "Comment dit-on « en face de l’école » ?", ["opposite the school", "in front the school", "front of school"], "opposite the school", "« Opposite » veut dire en face de. « In front of » veut dire devant — on peut être devant l’école sans être en face."),
    e("a-p5-li-8", "Comment dit-on « une gare » en anglais ? Réponds par les deux mots.", "a station", "A station [stéï-chn]. Le mot sert aussi pour la gare routière — a bus station — et pour le métro."),
  ],
};

export const anglais: Lecon[] = [
  saluer,
  nombresAge,
  couleursEcole,
  famille,
  heure,
  nourriture,
  meteoAnglais,
  lieux,
];
