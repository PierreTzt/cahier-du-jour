/**
 * Français, CM1 — l'année entière.
 *
 * Adossé au **programme de français du cycle 3 publié au BO spécial n° 16 du
 * 17 avril 2025**, en vigueur au CM1 depuis la rentrée 2025.
 *
 * Trois choses que ce programme dit et qui commandent l'ordre des leçons :
 *
 *   - le **complément circonstanciel** est repéré dès le CM1 par son caractère
 *     facultatif, mais on ne le distingue pas encore par sa sorte (lieu,
 *     temps, cause) : ça, c'est le CM2 ;
 *   - le COD et le COI sont différenciés au CM1, mais seulement dans des
 *     phrases prototypiques et sans ambiguïté ;
 *   - les conjugaisons à maîtriser en fin de CM1 sont le présent, l'imparfait,
 *     le futur et le passé composé, pour être et avoir, les verbes des 1er et
 *     2e groupes, et huit irréguliers du 3e : faire, aller, dire, venir,
 *     pouvoir, voir, vouloir, prendre. Le passé simple est au CM2.
 *
 * Rien de tout ceci n'a été relu par un enseignant. Ça doit l'être.
 */

import { e, q, type Lecon } from "./types";

/* ================================================================== */
/* PÉRIODE 1 — septembre, octobre                                      */
/* ================================================================== */

const phraseVerbe: Lecon = {
  code: "f-p1-verbe-sujet",
  matiere: "francais",
  periode: 1,
  titre: "Trouver le verbe et le sujet",
  reference:
    "Consolider l’identification du verbe conjugué ; consolider l’identification du groupe sujet ; identifier les différents types de sujets : pronoms personnels, groupes nominaux, plusieurs noms.",
  minutes: 25,
  cours: [
    {
      texte: [
        "Une phrase n’est pas une suite de mots au hasard : elle a une charpente. Si tu vois la charpente, l’orthographe devient beaucoup plus simple — parce que c’est elle qui commande les accords.",
        "Et tout commence par deux repères : le verbe, puis le sujet. Dans cet ordre.",
      ],
    },
    {
      titre: "Le verbe d’abord, et un test qui ne trompe pas",
      texte: [
        "Le verbe est le mot qui **change quand on change le temps**. C’est le test le plus sûr, et il marche toujours.",
        "« La cloche sonne. » → « Hier, la cloche sonnait. » C’est « sonne » qui a bougé : c’est le verbe.",
        "Attention : « la nage » ressemble à une action mais n’est pas un verbe. Essaie de changer le temps, tu verras que ça ne marche pas — on ne dit pas « hier, la nageait ».",
      ],
      regle: "Change le temps de la phrase. Le mot qui bouge, c’est le verbe.",
    },
    {
      titre: "Puis le sujet",
      texte: [
        "Le sujet, c’est celui qui fait l’action, ou dont on parle. On le trouve en demandant **« qui est-ce qui… ? »** devant le verbe — ou « qu’est-ce qui… ? » quand c’est une chose : « La pluie tombe. » Qu’est-ce qui tombe ? La pluie.",
        "« Le frère de mon ami siffle. » Qui est-ce qui siffle ? « Le frère de mon ami » — tout le groupe, pas seulement « frère », et surtout pas « ami ».",
        "Le sujet n’est pas toujours devant le verbe. « Au fond du jardin pousse un grand pommier. » Qu’est-ce qui pousse ? Un grand pommier : ici, le sujet est placé **après** le verbe. La question « qui est-ce qui… ? » le trouve quand même.",
      ],
      regle: "« Qui est-ce qui » + le verbe. La réponse entière est le sujet, avec tous ses mots.",
    },
    {
      titre: "Trois sortes de sujets",
      texte: [
        "Un **pronom personnel** : « Ils arrivent. »",
        "Un **groupe nominal** : « La petite chatte grise arrive. »",
        "**Plusieurs noms** : « Mon frère et ma sœur arrivent. » Deux personnes, donc un verbe au pluriel — c’est là que ça compte.",
        "Un truc pour vérifier : remplace le sujet par un pronom. Si « le frère de mon ami » peut devenir « il », c’était bien le sujet en entier.",
      ],
      regle:
        "Remplacer le groupe sujet par un pronom (il, elle, ils, elles) est la meilleure façon de vérifier qu’on a pris le bon groupe.",
    },
  ],
  exemples: [
    {
      enonce: "Dans « Chaque dimanche, mon grand-père prépare une soupe », trouve le verbe et le sujet.",
      etapes: [
        "Je change le temps : « préparait ». C’est « prépare » qui bouge : c’est le verbe.",
        "Qui est-ce qui prépare ? « Mon grand-père ».",
        "Je vérifie en remplaçant par un pronom : « il prépare une soupe ». Ça marche.",
      ],
      resultat: "verbe : prépare · sujet : mon grand-père",
    },
  ],
  exercices: [
    e("f-p1-vs-1", "Dans « Les élèves de la classe rangent leurs affaires », quel est le verbe ?", "rangent", "Je change le temps : « rangeaient ». C’est ce mot qui bouge, donc c’est le verbe."),
    e("f-p1-vs-2", "Dans « Le vélo de mon cousin grince à chaque virage », quel est le sujet ?", "le vélo de mon cousin", "Qui est-ce qui grince ? Le vélo de mon cousin : tout le groupe, avec « de mon cousin ». Vérifie avec un pronom : « Il grince à chaque virage. »"),
    e("f-p1-vs-3", "Dans « Mon frère et mon cousin arrivent demain », quel est le sujet ?", "mon frère et mon cousin", "Qui est-ce qui arrive ? Mon frère et mon cousin : deux personnes. C’est pour ça que le verbe est au pluriel."),
    e("f-p1-vs-4", "Dans « L’été prochain, nos voisins camperont au bord du lac », quel est le verbe ?", "camperont", "Je change le temps : « campaient », « campent ». C’est ce mot qui bouge. Ici il est au futur."),
    q("f-p1-vs-5", "Quel mot de cette liste est un verbe ?", ["le saut", "sauter", "léger"], "sauter", "« Sauter » se conjugue : je saute, je sautais. « Le saut » est un nom, même s’il parle d’une action, et « léger » est un adjectif."),
    q("f-p1-vs-6", "Dans « Le loup mange l’agneau », qui est le sujet ?", ["le loup", "l’agneau", "mange"], "le loup", "Qui est-ce qui mange ? Le loup. Si on intervertit — « L’agneau mange le loup » — le sens change du tout au tout."),
    e("f-p1-vs-7", "Par quel pronom sujet peut-on remplacer « les garçons de la classe » ?", "ils", "« Les garçons de la classe » est un groupe masculin pluriel : le pronom sujet est « ils ». Vérifie : « Ils jouent au ballon. » La phrase tient."),
    e("f-p1-vs-8", "Dans « Sous la table dormait un vieux chat », quel est le sujet ?", "un vieux chat", "Qui est-ce qui dormait ? Un vieux chat. Le sujet n’est pas toujours devant le verbe — ici il est derrière."),
  ],
  reprise: [
    e("f-p1-vs-r1", "Dans « Les joueurs de l’équipe enfilent leurs maillots », quel est le verbe ?", "enfilent", "Je change le temps : « enfilaient ». C’est ce mot qui bouge, donc c’est le verbe."),
    e("f-p1-vs-r2", "Dans « La porte du garage claque avec le vent », quel est le sujet ?", "la porte du garage", "Qu’est-ce qui claque ? La porte du garage : tout le groupe, avec « du garage ». Vérifie avec un pronom : « Elle claque avec le vent. »"),
    e("f-p1-vs-r3", "Dans « Ma tante et ma cousine habitent à Lille », quel est le sujet ?", "ma tante et ma cousine", "Qui est-ce qui habite à Lille ? Ma tante et ma cousine : deux personnes. C’est pour ça que le verbe est au pluriel."),
    e("f-p1-vs-r4", "Dans « Pendant les vacances, mes amis visiteront un château », quel est le verbe ?", "visiteront", "Je change le temps : « visitaient », « visitent ». C’est ce mot qui bouge. Ici il est au futur."),
    q("f-p1-vs-r5", "Parmi ces trois mots, lequel est un verbe ?", ["le plongeon", "profond", "plonger"], "plonger", "« Plonger » se conjugue : je plonge, je plongeais. « Le plongeon » est un nom, même s’il parle d’une action, et « profond » est un adjectif."),
    q("f-p1-vs-r6", "Dans « La souris chatouille l’éléphant », qui est le sujet ?", ["l’éléphant", "chatouille", "la souris"], "la souris", "Qui est-ce qui chatouille ? La souris. Si on intervertit — « L’éléphant chatouille la souris » — le sens change du tout au tout."),
    e("f-p1-vs-r7", "Quel pronom sujet peut remplacer « les sœurs de Julien » ?", "elles", "« Les sœurs de Julien » est un groupe féminin pluriel : le pronom sujet est « elles ». Vérifie : « Elles lisent dans le jardin. » La phrase tient."),
    e("f-p1-vs-r8", "Dans « Sur la plus haute branche chantait un merle noir », quel est le sujet ?", "un merle noir", "Qui est-ce qui chantait ? Un merle noir. Le sujet n’est pas toujours devant le verbe — ici il est derrière."),
  ],
};

const naturesMots: Lecon = {
  code: "f-p1-natures",
  matiere: "francais",
  periode: 1,
  titre: "La nature des mots",
  reference:
    "Identifier et nommer les déterminants : articles définis, indéfinis, déterminants possessifs et démonstratifs ; identifier et nommer les conjonctions de coordination ; identifier et nommer les adverbes les plus fréquents ; se familiariser avec les notions de nature et de fonction.",
  minutes: 25,
  cours: [
    {
      texte: [
        "Dans une phrase, chaque mot a une **nature** : nom, verbe, adjectif… C’est ce que le mot **est**.",
        "Il a aussi une **fonction** : ce qu’il **fait** dans la phrase. « Le chien aboie » : « chien » est un nom, et il est sujet. « Je vois le chien » : c’est toujours un nom, mais il est complément.",
        "Certains mots changent de nature selon leur emploi. « **Le** chien » : « le » est un déterminant. « Je **le** vois » : « le » est un pronom.",
      ],
      regle: "La nature, c’est ce que le mot **est**. La fonction, c’est ce qu’il **fait** dans la phrase.",
    },
    {
      titre: "Les familles à connaître",
      texte: [
        "Le **nom** désigne une chose, une personne, un animal ou une idée. On peut mettre « un » ou « une » devant : un vélo.",
        "Le **déterminant** se place devant le nom. Les articles : le, la, les, un, une, des. Les possessifs : mon, ton, son, notre, votre, leur. Les démonstratifs : ce, cet, cette, ces.",
        "L’**adjectif** dit comment est le nom : un ballon **neuf**. On peut souvent l’enlever.",
        "Le **verbe** dit ce qui se passe. Il se conjugue : je joue, je jouais.",
        "Le **pronom** remplace un nom, ou désigne qui parle : je, tu, il, elle, nous, vous, ils, elles. « Léa part » → « **Elle** part ».",
        "L’**adverbe** précise un verbe ou un adjectif : il court **vite**. Les plus fréquents : vite, souvent, très, bien, hier, toujours.",
        "La **conjonction de coordination** relie deux mots ou deux groupes : et, ou, mais, donc, or, ni, car.",
      ],
    },
    {
      titre: "Deux détails qui servent",
      texte: [
        "Les articles **définis** (le, la, les) désignent quelque chose de précis : « le chien », celui qu’on connaît.",
        "Les articles **indéfinis** (un, une, des) ne précisent pas : « un chien », n’importe lequel.",
        "Les adverbes sont **invariables** : « il court vite », « ils courent vite ». Ils ne changent ni au féminin ni au pluriel.",
      ],
      regle: "Un mot qui dit comment, quand ou combien, et qui ne change jamais, ni au féminin ni au pluriel : c’est un adverbe.",
    },
    {
      titre: "Comment trancher en cas de doute",
      texte: [
        "Essaie de mettre « un » ou « une » devant : si ça marche, c’est un nom.",
        "Essaie de le conjuguer : si ça marche, c’est un verbe.",
        "Essaie de le mettre au féminin ou au pluriel : un adverbe refusera toujours.",
      ],
    },
  ],
  exemples: [
    {
      enonce: "Dans « Ce vieux chien dort souvent près du feu », donne la nature de « ce », « vieux » et « souvent ».",
      etapes: [
        "« Ce » accompagne le nom et le montre : déterminant démonstratif.",
        "« Vieux » dit comment est le chien, et on peut l’enlever : adjectif.",
        "« Souvent » dit à quelle fréquence il dort, et refuse le pluriel : adverbe.",
      ],
      resultat: "ce : déterminant · vieux : adjectif · souvent : adverbe",
    },
  ],
  exercices: [
    q("f-p1-na-1", "Dans « une valise lourde », quelle est la nature de « lourde » ?", ["un nom", "un adjectif", "un adverbe"], "un adjectif", "« Lourde » dit comment est la valise, et on peut l’enlever : « une valise » tient encore. C’est un adjectif."),
    q("f-p1-na-2", "Dans « cet arbre », le mot « cet » est…", ["un déterminant démonstratif", "un adjectif", "un pronom"], "un déterminant démonstratif", "Il accompagne le nom et le montre. Les démonstratifs sont ce, cet, cette, ces."),
    q("f-p1-na-3", "Dans « Nous avons attendu longtemps », quelle est la nature de « longtemps » ?", ["un adjectif", "un adverbe", "un verbe"], "un adverbe", "Il précise le verbe : on a attendu combien de temps ? Longtemps. Et il ne change jamais : c’est un adverbe, donc invariable."),
    q("f-p1-na-4", "Dans « Il pleut, mais nous sortons », quelle est la nature de « mais » ?", ["une conjonction de coordination", "un adverbe", "un déterminant"], "une conjonction de coordination", "Il relie deux parties de la phrase. La liste : et, ou, mais, donc, or, ni, car."),
    q("f-p1-na-5", "Quel mot de cette liste est un nom ?", ["salir", "saleté", "sale"], "saleté", "On peut dire « une saleté » : c’est un nom. « Salir » se conjugue, et « sale » dit comment est une chose."),
    q("f-p1-na-6", "Dans « mon cartable », quelle est la nature de « mon » ?", ["un déterminant possessif", "un pronom", "un adjectif"], "un déterminant possessif", "Il accompagne le nom et dit à qui il appartient."),
    q("f-p1-na-7", "Dans « le vent souffle » et « j’entends le vent », qu’est-ce qui change pour le mot « vent » ?", ["sa nature", "sa fonction", "les deux"], "sa fonction", "« Vent » reste un nom dans les deux cas. Mais il est sujet, puis complément : c’est sa fonction qui change."),
    q("f-p1-na-8", "Dans « une clé » et « la clé », quelle est la différence ?", ["« une » est indéfini, « la » est défini", "« une » est un pronom", "aucune"], "« une » est indéfini, « la » est défini", "« La clé » désigne une clé précise, celle dont on parle. « Une clé », c’est n’importe laquelle."),
  ],
  reprise: [
    q("f-p1-na-r1", "Dans « Tu préfères le vélo ou la trottinette ? », quel mot est une conjonction de coordination ?", ["préfères", "ou", "la"], "ou", "« Ou » relie deux groupes, « le vélo » et « la trottinette » : c’est une conjonction de coordination. La liste : et, ou, mais, donc, or, ni, car."),
    q("f-p1-na-r2", "Dans « Une girafe immense mange des feuilles », quel mot est un adjectif ?", ["girafe", "immense", "mange"], "immense", "« Immense » dit comment est la girafe, et on peut l’enlever : « une girafe mange des feuilles » tient encore. C’est un adjectif. « Girafe » est un nom, « mange » un verbe."),
    q("f-p1-na-r3", "Lequel de ces groupes commence par un déterminant possessif ?", ["ce chien", "votre chien", "un chien"], "votre chien", "« Votre » dit à qui est le chien : à vous. C’est un déterminant possessif, comme mon, ton, son, notre, leur."),
    q("f-p1-na-r4", "Dans « La neige tombe doucement », quel mot est un adverbe ?", ["doucement", "neige", "tombe"], "doucement", "« Doucement » dit comment la neige tombe, et il ne change jamais : « les flocons tombent doucement ». C’est un adverbe."),
    q("f-p1-na-r5", "Parmi ces trois mots, lequel est un adjectif ?", ["épaisseur", "épais", "épaissir"], "épais", "« Épais » dit comment est une chose : un mur épais. C’est un adjectif. On peut dire « une épaisseur » : c’est un nom. Et « épaissir » se conjugue : c’est un verbe."),
    q("f-p1-na-r6", "« Regarde ces nuages ! » Le mot « ces » est un déterminant. Lequel ?", ["possessif", "indéfini", "démonstratif"], "démonstratif", "« Ces » accompagne le nom « nuages » et le montre : c’est un déterminant démonstratif. Les démonstratifs sont ce, cet, cette, ces."),
    q("f-p1-na-r7", "Dans « Tom lance le ballon », « ballon » est un nom. Est-ce sa nature ou sa fonction ?", ["sa nature", "sa fonction"], "sa nature", "« Nom », c’est ce que le mot est : sa nature, qui ne change pas d’une phrase à l’autre. Sa fonction, c’est ce qu’il fait dans la phrase : ici, il est complément du verbe « lance »."),
    q("f-p1-na-r8", "« Passe-moi le sel. » Dans cette phrase, le mot « le » est…", ["un article indéfini", "un article défini", "un déterminant possessif"], "un article défini", "« Le sel », c’est un sel précis, celui qui est sur la table : « le » est un article défini. Les articles indéfinis sont un, une, des."),
  ],
};

const typesPhrases: Lecon = {
  code: "f-p1-types-phrases",
  matiere: "francais",
  periode: 1,
  titre: "Les types et les formes de phrases",
  reference:
    "Identifier les trois types de phrases (déclaratif, interrogatif, impératif) ; identifier les formes négative et exclamative ; transformer une phrase d’un type à un autre, d’une forme à une autre ; distinguer et produire différentes réalisations du type interrogatif.",
  minutes: 25,
  cours: [
    {
      texte: [
        "Une phrase ne sert pas qu’à raconter : elle peut demander, ordonner, s’étonner. À chaque intention correspond une construction et une ponctuation.",
      ],
    },
    {
      titre: "Les trois types",
      texte: [
        "La phrase **déclarative** raconte ou affirme. Elle finit par un point. « Le train arrive à midi. »",
        "La phrase **interrogative** demande. Elle finit par un point d’interrogation. « Le train arrive-t-il à midi ? »",
        "La phrase **impérative** ordonne ou conseille. Elle n’a pas de sujet écrit : « Arrive à midi. »",
        "Son verbe est à l’**impératif** : c’est la forme du verbe qui sert à donner un ordre. L’impératif n’existe qu’à trois personnes : arrive, arrivons, arrivez.",
        "La phrase impérative finit par un point, ou par un point d’exclamation si l’ordre est vif : « Arrête ! »",
      ],
      regle: "Une phrase n’a qu’un seul type. Le point d’interrogation signale la question ; l’ordre finit par un point ou un point d’exclamation.",
    },
    {
      titre: "Poser une question : trois façons",
      texte: [
        "Par l’**intonation**, surtout à l’oral : « Tu viens ? »",
        "En **inversant** le sujet et le verbe, avec un trait d’union : « Viens-tu ? »",
        "Avec **est-ce que** au début : « Est-ce que tu viens ? »",
        "Les trois sont correctes. L’inversion est la plus soignée à l’écrit ; l’intonation seule est la plus familière.",
      ],
    },
    {
      titre: "Les formes : négative et exclamative",
      texte: [
        "Une forme n’est pas un type : n’importe quel type de phrase peut être affirmatif (sans négation) ou négatif.",
        "En français, la négation se fait en **deux morceaux** qui encadrent le verbe conjugué : ne… pas, ne… plus, ne… jamais, ne… rien, ne… personne.",
        "« Il neige. » → « Il **ne** neige **pas**. » On oublie souvent le « ne » en parlant ; à l’écrit il est obligatoire.",
        "Certains mots changent quand la phrase devient négative : encore → ne… plus ; toujours → ne… jamais ; quelqu’un → ne… personne ; quelque chose → ne… rien ; déjà → ne… pas encore. « Elle mange encore. » → « Elle ne mange plus. »",
        "La forme exclamative exprime une émotion et finit par un point d’exclamation : « Quelle chance ! »",
      ],
      regle: "La négation encadre le verbe : ne + verbe + pas. Deux morceaux, toujours.",
    },
  ],
  exemples: [
    {
      enonce: "Transforme « Tu finis tes devoirs. » en question par inversion, puis à la forme négative.",
      etapes: [
        "En question : le sujet passe après le verbe avec un trait d’union, et le point devient un point d’interrogation. « Finis-tu tes devoirs ? »",
        "À la forme négative : les deux morceaux encadrent le verbe. « Tu ne finis pas tes devoirs. »",
      ],
      resultat: "Finis-tu tes devoirs ? · Tu ne finis pas tes devoirs.",
    },
  ],
  exercices: [
    q("f-p1-tp-1", "« À quelle heure commence le film ? » Cette phrase est…", ["déclarative", "interrogative", "impérative"], "interrogative", "Elle demande quelque chose — à quelle heure ? — et elle finit par un point d’interrogation."),
    q("f-p1-tp-2", "« Range tes chaussures dans le placard. » Cette phrase est…", ["déclarative", "interrogative", "impérative"], "impérative", "Elle donne un ordre, et son verbe, « range », n’a pas de sujet écrit."),
    e("f-p1-tp-3", "Écris cette phrase à la forme négative, avec ne… pas : « Elle chante. »", "elle ne chante pas", "Les deux morceaux de la négation encadrent le verbe : elle ne chante pas. À l’écrit, on met toujours les deux."),
    e("f-p1-tp-4", "Mets à la forme négative : « Le chat dort encore. »", "le chat ne dort plus", "« Encore » devient « ne… plus » : le chat dormait, et maintenant il est réveillé. Les deux morceaux de la négation encadrent le verbe « dort »."),
    e("f-p1-tp-5", "Transforme en question par inversion : « Tu dors. »", "dors-tu", "Le sujet passe derrière le verbe, relié par un trait d’union : dors-tu ?"),
    q("f-p1-tp-6", "« Nous avons retrouvé le chaton ! » À quoi voit-on, à l’écrit, que cette phrase se dit avec joie ?", ["la majuscule du début", "le point d’exclamation", "le mot « chaton »"], "le point d’exclamation", "À l’écrit, c’est le point d’exclamation qui marque l’émotion : ici, la joie d’avoir retrouvé le chaton. La majuscule commence toutes les phrases, et « chaton » est un nom : ni l’une ni l’autre ne dit l’émotion."),
    q("f-p1-tp-7", "« Est-ce que la piscine ouvre ce soir ? » est une phrase…", ["déclarative", "interrogative", "impérative"], "interrogative", "« Est-ce que » est l’une des trois façons de poser une question."),
    e("f-p1-tp-8", "Mets à la forme négative : « Il voit quelqu’un. »", "il ne voit personne", "« Quelqu’un » devient « ne… personne ». La négation change le mot en même temps qu’elle encadre le verbe."),
  ],
  reprise: [
    q("f-p1-tp-r1", "« Le bateau pour l’île part tous les matins. » Cette phrase est…", ["impérative", "déclarative", "interrogative"], "déclarative", "Elle raconte, elle affirme quelque chose, et elle finit par un point : c’est une phrase déclarative."),
    q("f-p1-tp-r2", "Laquelle de ces phrases est impérative ?", ["Tu arroses les tomates.", "Arroses-tu les tomates ?", "Arrose les tomates ce soir."], "Arrose les tomates ce soir.", "« Arrose les tomates ce soir » donne un conseil, et son verbe n’a pas de sujet écrit. Les deux autres ont un sujet, « tu » : l’une affirme, l’autre demande."),
    e("f-p1-tp-r3", "Écris « Nous dansons. » à la forme négative, avec ne… pas.", "nous ne dansons pas", "Les deux morceaux de la négation encadrent le verbe : nous ne dansons pas. À l’écrit, on met toujours les deux."),
    e("f-p1-tp-r4", "Mets à la forme négative : « Il cherche quelque chose. »", "il ne cherche rien", "« Quelque chose » devient « ne… rien » : il ne cherche rien. Le mot change, et les deux morceaux de la négation encadrent le verbe."),
    e("f-p1-tp-r5", "Transforme en question par inversion : « Vous partez. »", "partez-vous", "Le sujet passe derrière le verbe, relié par un trait d’union : partez-vous ?"),
    q("f-p1-tp-r6", "Laquelle de ces phrases exprime une émotion ?", ["Le cadeau est sur la table.", "Quel beau cadeau !", "Ouvre le cadeau."], "Quel beau cadeau !", "« Quel beau cadeau ! » dit la joie ou l’admiration : c’est une exclamation, et elle finit par un point d’exclamation. « Le cadeau est sur la table » affirme, « Ouvre le cadeau » donne un ordre."),
    q("f-p1-tp-r7", "Que peut-on mettre au début de « Les hirondelles reviennent au printemps » pour en faire une question ?", ["voilà que", "est-ce que", "c’est pourquoi"], "est-ce que", "« Est-ce que les hirondelles reviennent au printemps ? » : « est-ce que » au début, un point d’interrogation à la fin. C’est l’une des trois façons de poser une question."),
    e("f-p1-tp-r8", "Mets à la forme affirmative : « Je n’entends personne dans l’escalier. »", "j’entends quelqu’un dans l’escalier", "La forme affirmative n’a pas de négation : « n’ » s’en va, et « personne » redevient « quelqu’un ». J’entends quelqu’un dans l’escalier."),
  ],
};

const groupeNominal: Lecon = {
  code: "f-p1-groupe-nominal",
  matiere: "francais",
  periode: 1,
  titre: "Le groupe du nom et ses accords",
  reference:
    "Repérer des groupes nominaux dans une phrase simple et nommer les éléments qui les constituent ; repérer et nommer le nom noyau ; consolider les variations en genre et en nombre des noms, des adjectifs et des déterminants ; systématiser la chaîne d’accords.",
  minutes: 30,
  cours: [
    {
      texte: [
        "Dans un groupe du nom, tous les mots se mettent d’accord entre eux. Ce n’est pas une politesse : c’est une chaîne, et si un maillon lâche, ça se voit.",
      ],
    },
    {
      titre: "Le noyau commande",
      texte: [
        "Le noyau du groupe, c’est le **nom**. C’est lui qui a un genre (masculin ou féminin) et un nombre (singulier ou pluriel), et il les impose à tous ses voisins.",
        "« Un petit chien noir » : chien est masculin singulier, donc un, petit et noir le sont aussi.",
        "« Les petites maisons blanches » : maisons est féminin pluriel, donc tout suit.",
        "Un groupe du nom prend souvent l’une de ces formes : déterminant + nom (« un chien ») ; déterminant + nom + adjectif (« un chien noir ») ; déterminant + adjectif + nom (« un petit chien »). Il peut aussi être plus long : « un petit chien noir ».",
      ],
      regle:
        "Trouve le nom noyau, donne-lui son genre et son nombre, puis accorde tout le reste **sur lui**. Jamais l’inverse.",
    },
    {
      titre: "Les marques",
      texte: [
        "Le pluriel s’écrit presque toujours avec un **-s**, même quand on ne l’entend pas. C’est là que se cachent la plupart des erreurs.",
        "Le féminin ajoute souvent un **-e** : un chien noir, une chienne noire.",
        "Certains féminins changent davantage. **-teur** devient souvent **-trice** : un acteur, une actrice. **-if** devient **-ive** : un garçon sportif, une fille sportive.",
        "Certains pluriels sont particuliers, et il faut les connaître. Les noms en **-eau**, **-au** et **-eu** prennent un **-x** : un bateau → des bateaux, un tuyau → des tuyaux, un jeu → des jeux (sauf des pneus, des bleus).",
        "Les noms en **-al** font **-aux** : un hôpital → des hôpitaux, un bocal → des bocaux. Quelques-uns gardent le -s : des bals, des carnavals, des festivals.",
        "Les noms en **-ou** prennent un -s, sauf sept mots à savoir par cœur : bijoux, cailloux, choux, genoux, hiboux, joujoux, poux.",
        "Les noms en **-ail** prennent un -s (des détails, des rails), sauf quelques-uns : un travail → des travaux, un vitrail → des vitraux.",
        "Les noms qui finissent déjà par -s, -x ou -z ne changent pas : un bois → des bois, une voix → des voix, un nez → des nez.",
      ],
      regle: "En général → -s. Mais : -eau, -au, -eu → -x. -al → -aux. -ail → -s, sauf travaux, vitraux. -ou → -s, sauf bijoux, cailloux, choux, genoux, hiboux, joujoux, poux. Et déjà -s, -x ou -z à la fin : rien ne change.",
    },
    {
      titre: "Quand un nom en complète un autre",
      texte: [
        "Parfois un nom en complète un autre : « une boîte **de chocolats** », « le chien **de ma voisine** ».",
        "Le noyau du groupe reste le premier nom. Mais pour accorder un adjectif placé après, demande-toi quel nom il décrit.",
        "« Une bouteille de lait cassée » : qu’est-ce qui est cassé ? La bouteille. L’adjectif s’accorde avec « bouteille » : féminin singulier.",
        "« Une boîte de chocolats délicieux » : qu’est-ce qui est délicieux ? Les chocolats. Cette fois, l’adjectif s’accorde avec « chocolats » : masculin pluriel.",
      ],
      regle:
        "Demande-toi quel nom l’adjectif décrit : c’est avec lui qu’il s’accorde. C’est souvent le **noyau**, et pas forcément le mot le plus proche.",
    },
  ],
  exemples: [
    {
      enonce: "Mets au pluriel : « un vieux canal royal ».",
      etapes: [
        "Le noyau est « canal », masculin singulier. Au pluriel : canaux.",
        "Le déterminant passe au pluriel : un → des. Devant un adjectif, l’écrit préfère « de » : de vieux canaux.",
        "Les adjectifs suivent : vieux reste vieux (il finit déjà par -x), et royal donne royaux.",
      ],
      resultat: "de vieux canaux royaux",
    },
  ],
  exercices: [
    e("f-p1-gn-1", "Mets au pluriel : « un animal ».", "des animaux", "Les noms en -al font leur pluriel en -aux : un animal, des animaux."),
    e("f-p1-gn-2", "Mets au pluriel : « un éventail ».", "des éventails", "Éventail suit la règle de la plupart des noms en -ail : il prend un -s. Seuls quelques-uns font -aux, comme travail et vitrail."),
    q("f-p1-gn-3", "Complète : « des cahiers … »", ["vert", "verts"], "verts", "« Cahiers » est au pluriel, donc l’adjectif prend un -s. On ne l’entend pas, il s’écrit quand même."),
    q("f-p1-gn-4", "Complète : « une journée … »", ["froid", "froide", "froids"], "froide", "« Journée » est féminin singulier : l’adjectif prend un -e."),
    q("f-p1-gn-5", "Complète : « une boîte de chocolats … »", ["ouvert", "ouverte", "ouverts"], "ouverte", "Qu’est-ce qui est ouvert ? La boîte. L’adjectif décrit « boîte », féminin singulier : ouverte."),
    e("f-p1-gn-6", "Mets au pluriel : « un grand oiseau ».", "de grands oiseaux", "Oiseau en -eau fait -eaux, et l’adjectif suit. Devant un adjectif, l’écrit préfère « de » ; à l’oral, on entend souvent « des grands oiseaux »."),
    q("f-p1-gn-7", "Complète : « ces … montagnes »", ["hautes", "haute", "hauts"], "hautes", "« Montagnes » est féminin pluriel : -e pour le féminin, -s pour le pluriel."),
    e("f-p1-gn-8", "Mets au féminin : « un lecteur attentif ».", "une lectrice attentive", "Lecteur donne lectrice, et attentif donne attentive. Ici le féminin s’entend, ce qui aide."),
  ],
  reprise: [
    e("f-p1-gn-r1", "Écris « un signal » au pluriel.", "des signaux", "Les noms en -al font leur pluriel en -aux : un signal, des signaux."),
    e("f-p1-gn-r2", "Comment écrit-on « un portail » au pluriel ?", "des portails", "La plupart des noms en -ail prennent un -s au pluriel : un portail, des portails. Seuls quelques-uns font -aux, comme travail et vitrail."),
    q("f-p1-gn-r3", "Complète : « des carnets … »", ["neufs", "neuf"], "neufs", "« Carnets » est au pluriel, donc l’adjectif prend un -s. On ne l’entend pas, il s’écrit quand même."),
    q("f-p1-gn-r4", "Complète : « une soupe … »", ["chaude", "chaud", "chauds"], "chaude", "« Soupe » est féminin singulier : l’adjectif prend un -e."),
    q("f-p1-gn-r5", "Complète : « une cage à oiseaux … »", ["rouillés", "rouillé", "rouillée"], "rouillée", "Qu’est-ce qui est rouillé ? La cage. L’adjectif décrit « cage », féminin singulier : rouillée."),
    e("f-p1-gn-r6", "Mets au pluriel : « un petit drapeau ».", "de petits drapeaux", "Drapeau, en -eau, fait -eaux au pluriel, et l’adjectif prend un -s. Devant un adjectif, l’écrit préfère « de » ; à l’oral, on entend souvent « des petits drapeaux »."),
    q("f-p1-gn-r7", "Complète : « ces … chansons »", ["jolis", "jolies", "jolie"], "jolies", "« Chansons » est féminin pluriel : -e pour le féminin, -s pour le pluriel."),
    e("f-p1-gn-r8", "Mets au féminin : « un animateur créatif ».", "une animatrice créative", "Animateur donne animatrice, et créatif donne créative. Ici le féminin s’entend, ce qui aide."),
  ],
};

const present: Lecon = {
  code: "f-p1-present",
  matiere: "francais",
  periode: 1,
  titre: "Le présent de l’indicatif",
  reference:
    "Identifier la composition de la terminaison des verbes conjugués : marque de temps et marque de personne ; connaître les marques de personne pour le présent ; conjugaisons à maîtriser : présent de être et avoir, des verbes des 1er et 2e groupes et des irréguliers du 3e.",
  minutes: 30,
  cours: [
    {
      texte: [
        "Conjuguer, ce n’est pas réciter des listes : c’est reconnaître deux morceaux dans un verbe, et savoir lequel change.",
        "« De l’indicatif » : l’**indicatif** regroupe les temps qui disent ce qui se passe vraiment, comme le présent, l’imparfait, le futur ou le passé composé. Ici, on travaille le présent.",
      ],
    },
    {
      titre: "Radical et terminaison",
      texte: [
        "Le **radical** porte le sens et ne bouge presque pas : march- dans marcher.",
        "La **terminaison** dit qui fait l’action et quand : march-e, march-ons, march-ait, march-era.",
        "Quand tu doutes d’une terminaison, sépare les deux morceaux d’un trait sur ton brouillon. Tu verras tout de suite ce que tu écris.",
      ],
      regle: "Radical + terminaison. C’est la terminaison qui porte la personne et le temps.",
    },
    {
      titre: "Les trois groupes",
      texte: [
        "Le **1er groupe** : les verbes en -er, sauf aller. Terminaisons : -e, -es, -e, -ons, -ez, -ent.",
        "Quelques-uns changent un peu devant -ons, pour garder le son : nous mangeons, nous commençons.",
        "Le **2e groupe** : les verbes en -ir qui font -issons avec « nous » (nous finissons). Terminaisons : -is, -is, -it, -issons, -issez, -issent.",
        "Le **3e groupe** : tous les autres. Beaucoup sont irréguliers, comme aller, faire ou prendre : ceux-là s’apprennent par cœur.",
      ],
      regle:
        "Un verbe en -ir ? Mets-le avec « nous ». Il fait -issons : 2e groupe. Sinon : 3e groupe (dormir → nous dormons).",
    },
    {
      titre: "Les huit irréguliers, au présent",
      texte: [
        "**aller** : je vais, tu vas, il va, nous allons, vous allez, ils vont.",
        "**faire** : je fais, tu fais, il fait, nous faisons, vous faites, ils font.",
        "**dire** : je dis, tu dis, il dit, nous disons, vous dites, ils disent.",
        "**venir** : je viens, tu viens, il vient, nous venons, vous venez, ils viennent.",
        "**pouvoir** : je peux, tu peux, il peut, nous pouvons, vous pouvez, ils peuvent.",
        "**voir** : je vois, tu vois, il voit, nous voyons, vous voyez, ils voient.",
        "**vouloir** : je veux, tu veux, il veut, nous voulons, vous voulez, ils veulent.",
        "**prendre** : je prends, tu prends, il prend, nous prenons, vous prenez, ils prennent.",
        "Au singulier, faire, dire, venir et voir finissent par -s, -s, -t. Pouvoir et vouloir font -x, -x, -t. Prendre fait -ds, -ds, -d. Aller est à part : vais, vas, va.",
        "Avec « vous », trois verbes finissent par -tes au lieu de -ez : vous êtes, vous faites, vous dites. Leurs cousins aussi : vous refaites, vous défaites, vous redites.",
      ],
      regle: "Ces huit verbes s’apprennent par cœur. Relis-les souvent : c’est en les revoyant qu’ils s’installent.",
    },
    {
      titre: "Ce qui demande le plus d’attention",
      texte: [
        "Avec « ils » ou « elles », le **-nt ne s’entend pas** : « il marche » et « ils marchent » se prononcent pareil. C’est le sujet qui décide, pas l’oreille.",
        "Être et avoir servent aussi d’**auxiliaires** : des verbes qui aident à conjuguer les autres, comme dans « tu as joué » ou « il est venu ». Il faut les connaître sans hésiter.",
        "**être** : je suis, tu es, il est, nous sommes, vous êtes, ils sont.",
        "**avoir** : j’ai, tu as, il a, nous avons, vous avez, ils ont.",
        "Ne pas confondre « ils ont » (avoir) et « ils sont » (être).",
      ],
    },
  ],
  exemples: [
    {
      enonce: "Conjugue « choisir » au présent avec « nous », et dis à quel groupe il appartient.",
      etapes: [
        "Je le mets à « nous » : nous choisissons.",
        "Ça fait -issons, donc c’est un verbe du 2e groupe.",
      ],
      resultat: "nous choisissons · 2e groupe",
    },
  ],
  exercices: [
    q("f-p1-pr-1", "Complète avec le verbe « être » au présent : « Mes grands-parents … en vacances. »", ["est", "sont", "êtes"], "sont", "« Mes grands-parents », c’est « ils ». Être au présent, avec « ils » : sont."),
    q("f-p1-pr-2", "Complète avec le verbe « avoir » au présent : « Vous … de la chance. »", ["avons", "avez", "ont"], "avez", "Avoir au présent, avec « vous » : vous avez. Comme presque tous les verbes avec « vous », il finit par -ez."),
    e("f-p1-pr-3", "Écris « revenir » au présent, avec « tu ».", "tu reviens", "Revenir se conjugue comme venir : je reviens, tu reviens, il revient, nous revenons, vous revenez, ils reviennent."),
    e("f-p1-pr-4", "Écris « apprendre » au présent, avec « ils ».", "ils apprennent", "Apprendre se conjugue comme prendre : le n double à la 3e personne du pluriel seulement. Nous apprenons, vous apprenez, mais ils apprennent."),
    q("f-p1-pr-5", "Complète : « Les oiseaux … sur le toit. »", ["chante", "chantent", "chantes"], "chantent", "Le sujet « les oiseaux » est au pluriel, donc -ent. On ne l’entend pas, mais c’est le sujet qui décide."),
    q("f-p1-pr-6", "Complète : « Léo et moi … notre cabane chaque été. »", ["refaisons", "refait", "refont"], "refaisons", "« Léo et moi », c’est « nous ». Refaire se conjugue comme faire, au présent : nous refaisons."),
    q("f-p1-pr-7", "À quel groupe appartient « partir » ?", ["1er groupe", "2e groupe", "3e groupe"], "3e groupe", "Avec « nous », partir fait « nous partons », sans -iss- : c’est un verbe du 3e groupe."),
    e("f-p1-pr-8", "Conjugue « finir » au présent avec « vous ».", "vous finissez", "Finir est du 2e groupe : nous finissons, vous finissez, ils finissent."),
  ],
  reprise: [
    q("f-p1-pr-r1", "Complète avec le verbe « être » au présent : « L’ordinateur de mon père … en panne. »", ["es", "sont", "est"], "est", "« L’ordinateur de mon père », c’est « il ». Être au présent, avec « il » : est."),
    q("f-p1-pr-r2", "Complète avec le verbe « avoir » au présent : « Nous … une nouvelle voisine. »", ["ont", "avez", "avons"], "avons", "Avoir au présent, avec « nous » : nous avons. Comme presque tous les verbes avec « nous », il finit par -ons."),
    e("f-p1-pr-r3", "Écris le verbe « devenir » au présent : « Chaque soir, le ciel … tout rose. » Réponds par le mot manquant.", "devient", "« Le ciel », c’est « il ». Devenir se conjugue comme venir : je deviens, tu deviens, il devient. Avec « il », la terminaison est -t."),
    e("f-p1-pr-r4", "Conjugue « comprendre » au présent avec « elles ».", "elles comprennent", "Comprendre se conjugue comme prendre : le n double à la 3e personne du pluriel seulement. Nous comprenons, vous comprenez, mais elles comprennent."),
    q("f-p1-pr-r5", "Complète : « Les grenouilles … dans la mare. »", ["saute", "sautes", "sautent"], "sautent", "Le sujet « les grenouilles » est au pluriel, donc -ent. On ne l’entend pas, mais c’est le sujet qui décide."),
    q("f-p1-pr-r6", "Complète : « Lucas et moi … nos cousins cet été. »", ["revoit", "revoyons", "revoient"], "revoyons", "« Lucas et moi », c’est « nous ». Revoir se conjugue comme voir, au présent : nous revoyons."),
    q("f-p1-pr-r7", "De quel groupe est le verbe « grandir » ?", ["1er groupe", "2e groupe", "3e groupe"], "2e groupe", "Avec « nous », grandir fait « nous grandissons », avec -iss- : c’est un verbe du 2e groupe."),
    e("f-p1-pr-r8", "Au présent, avec « elles », comment s’écrit le verbe « jaunir » ?", "elles jaunissent", "Jaunir est du 2e groupe : nous jaunissons, vous jaunissez, elles jaunissent. Avec « elles », la terminaison est -issent."),
  ],
};

const lexiqueFamilles: Lecon = {
  code: "f-p1-familles",
  matiere: "francais",
  periode: 1,
  titre: "Les familles de mots",
  reference:
    "Identifier les mots inconnus lors de ses lectures et rechercher leur signification en s’appuyant sur la morphologie et sur le contexte ; établir des relations morphologiques et sémantiques entre les mots.",
  minutes: 25,
  cours: [
    {
      texte: [
        "Quand tu rencontres un mot que tu ne connais pas, tu n’es pas obligé d’attendre qu’on te le traduise. Deux outils permettent souvent de deviner : la forme du mot, et la phrase autour.",
      ],
    },
    {
      titre: "La forme du mot : le radical",
      texte: [
        "Beaucoup de mots partagent un morceau commun, qu’on appelle le **radical**. Ce morceau porte le sens.",
        "cuis- : cuisine, cuisiner, cuisinier, cuisinière. Tous parlent de la même chose.",
        "jardin- : jardiner, jardinier, jardinage.",
        "Si tu connais un mot de la famille, tu peux deviner les autres. C’est ce qu’on appelle une famille de mots.",
      ],
      regle: "Cherche le morceau commun. Il porte le sens, et il ouvre toute la famille.",
    },
    {
      titre: "Les préfixes, devant",
      texte: [
        "Un **préfixe** se colle devant le radical et modifie le sens.",
        "**re-** veut dire « encore » : refaire, redire, revenir.",
        "**dé-**, **mal-**, **im-**, **in-** disent le contraire : défaire, malheureux, impoli, incorrect.",
        "**pré-** veut dire avant : prévoir, préhistoire.",
      ],
      regle: "Pour dire le contraire, on ajoute souvent dé-, mal-, im- ou in- devant le mot.",
    },
    {
      titre: "Les suffixes, derrière",
      texte: [
        "Un **suffixe** se colle derrière et change souvent la nature du mot.",
        "**-eur** désigne celui qui fait : coiffeur, danseur, agriculteur.",
        "**-able** dit que c’est possible : mangeable, navigable, réparable. Son cousin **-ible** dit la même chose : lisible, visible.",
        "**-ette** rend plus petit : maisonnette, fillette, camionnette.",
        "Observer : de « observer » on tire observation (un nom), observable (un adjectif), observateur (celui qui observe). Le radical est le même, le suffixe change la nature.",
      ],
    },
    {
      titre: "Le contexte",
      texte: [
        "Parfois la forme ne suffit pas, et c’est la phrase qui renseigne.",
        "« Le vieux chêne était **noueux**, couvert de bosses et de creux. » Même sans connaître « noueux », la suite de la phrase l’explique.",
        "Réflexe à prendre : relis la phrase entière, puis celle d’avant. Le dictionnaire sert ensuite, pour vérifier — pas d’abord.",
      ],
    },
  ],
  exemples: [
    {
      enonce: "Trouve le radical commun à : venteux, ventilateur, éventail, paravent. Et dis lequel n’est pas de la famille : vente.",
      etapes: [
        "Je cherche le morceau commun : vent-.",
        "Tous parlent du vent : un temps venteux, un ventilateur (qui fait du vent), un éventail (qu’on agite pour se faire du vent), un paravent (qui arrête le vent).",
        "« Vente » contient bien vent-, mais il vient d’un autre mot et ne parle pas du vent : il vient du verbe « vendre ». C’est un intrus : il ressemble à la famille sans en faire partie.",
      ],
      resultat: "radical vent- · l’intrus est vente",
    },
  ],
  exercices: [
    q("f-p1-fa-1", "Lequel de ces mots appartient à la famille de « fleur » ?", ["flûte", "fleuriste", "fleuve"], "fleuriste", "Le radical fleur- se retrouve dans fleuriste, fleurir, fleuri. « Flûte » et « fleuve » y ressemblent, mais ne parlent pas de fleurs."),
    e("f-p1-fa-2", "Ajoute un préfixe devant « patient » pour dire le contraire.", "impatient", "Le préfixe im- dit le contraire. On l’utilise devant p, b et m : impatient, imbuvable, immobile."),
    e("f-p1-fa-3", "Écris le contraire de « adroit » en lui ajoutant un préfixe.", "maladroit", "Le préfixe mal- dit le contraire : maladroit, comme malheureux ou malhonnête."),
    e("f-p1-fa-4", "Avec le suffixe -eur, comment appelle-t-on celui qui patine ?", "un patineur", "Le suffixe -eur désigne celui qui fait l’action : patineur, danseur, chanteur. Au féminin, ce serait une patineuse."),
    q("f-p1-fa-5", "Un de ces mots ressemble à « porte », mais n’est pas de sa famille. Lequel ?", ["portail", "portière", "portrait"], "portrait", "Un portrait est une image de quelqu’un : il commence comme « porte », mais n’en parle pas. Un portail et une portière, eux, sont des sortes de portes."),
    q("f-p1-fa-6", "Que veut dire le préfixe « re- » dans « relancer » ?", ["encore", "avant", "le contraire"], "encore", "Relancer, c’est lancer une nouvelle fois. Comme redire, revenir, relire."),
    e("f-p1-fa-7", "Quel est le radical commun à « un chant », « chanter » et « un chanteur » ?", "chant", "Le morceau chant- porte le sens. Chanter est le verbe, chanteur est celui qui chante : le suffixe change la nature du mot."),
    q("f-p1-fa-8", "Que veut dire le suffixe « -able » dans « un gobelet jetable » ?", ["qu’on peut le faire", "qu’on l’a déjà fait", "qu’on ne peut pas"], "qu’on peut le faire", "Jetable veut dire qu’on peut le jeter. Comme lisible, navigable, réparable."),
  ],
  reprise: [
    q("f-p1-fa-r1", "Lequel de ces mots appartient à la famille de « nuage » ?", ["nuageux", "nuit", "nuance"], "nuageux", "Le radical nuag- se retrouve dans nuageux : un ciel nuageux est plein de nuages. « Nuit » et « nuance » lui ressemblent, mais ne parlent pas de nuages."),
    e("f-p1-fa-r2", "Écris le contraire de « prudent » en ajoutant un préfixe devant.", "imprudent", "Le préfixe im- dit le contraire : imprudent. On l’utilise devant p, b et m : impoli, imbuvable, immobile."),
    e("f-p1-fa-r3", "Quel mot, formé avec un préfixe, dit le contraire de « chanceux » ?", "malchanceux", "Le préfixe mal- dit le contraire : malchanceux, comme malheureux ou maladroit."),
    e("f-p1-fa-r4", "Quel nom en -eur désigne celui qui nage ?", "un nageur", "Le suffixe -eur désigne celui qui fait l’action : nageur, danseur, chanteur. Au féminin, ce serait une nageuse."),
    q("f-p1-fa-r5", "Lequel de ces mots n’est pas de la famille de « lent », même s’il lui ressemble ?", ["lentement", "lentille", "ralentir"], "lentille", "Une lentille est une petite graine qu’on mange : le mot commence comme « lent », mais n’en parle pas. Lentement et ralentir, eux, parlent de lenteur."),
    q("f-p1-fa-r6", "Quel mot veut dire « coller une nouvelle fois » ?", ["décoller", "recoller", "coller"], "recoller", "Le préfixe re- veut dire « encore » : recoller, c’est coller une nouvelle fois. Décoller, avec dé-, dit le contraire de coller."),
    e("f-p1-fa-r7", "Dans « un dessin », « dessiner » et « un dessinateur », quel est le radical commun ?", "dessin", "Le morceau dessin- porte le sens. Dessiner est le verbe, dessinateur est celui qui dessine : le suffixe change la nature du mot."),
    q("f-p1-fa-r8", "Quel mot veut dire « qu’on peut laver » ?", ["laveur", "lavage", "lavable"], "lavable", "Le suffixe -able dit que c’est possible : lavable veut dire qu’on peut le laver. Un laveur est celui qui lave, et le lavage, c’est l’action de laver."),
  ],
};

/* ================================================================== */
/* PÉRIODE 2 — novembre, décembre                                      */
/* ================================================================== */

const imparfait: Lecon = {
  code: "f-p2-imparfait",
  matiere: "francais",
  periode: 2,
  titre: "L’imparfait",
  reference:
    "Savoir isoler et connaître les marques de temps de l’imparfait (-ai-, -i-) ; connaître les marques de personne ; conjugaisons à maîtriser : imparfait de être et avoir, des verbes des 1er et 2e groupes et des irréguliers du 3e.",
  minutes: 25,
  cours: [
    {
      texte: [
        "L’imparfait est le temps du passé qui **dure**, qui se répète, qui décrit. C’est le temps des souvenirs.",
        "« Quand j’étais petit, j’habitais à la campagne et je prenais le car chaque matin. » Rien de tout cela n’est arrivé une seule fois : ça durait.",
      ],
    },
    {
      titre: "Une bonne nouvelle",
      texte: [
        "L’imparfait est le temps le plus régulier du français. Les terminaisons sont les **mêmes pour tous les verbes**, sans aucune exception : -ais, -ais, -ait, -ions, -iez, -aient.",
        "On y voit d’ailleurs la marque de temps de l’imparfait — le -ai- ou le -i- — suivie de la marque de personne.",
        "Il n’y a donc qu’une seule chose à trouver : le radical.",
        "Un verbe entier, pour entendre la musique : je chantais, tu chantais, il chantait, nous chantions, vous chantiez, ils chantaient.",
        "Avoir, qui sert partout, suit la méthode comme les autres : cherche son radical à partir de « nous avons ».",
      ],
      regle:
        "Prends le verbe à « nous » au présent, enlève -ons : tu as le radical de l’imparfait. Nous finiss-ons → je finiss-ais. Nous fais-ons → je fais-ais.",
    },
    {
      titre: "La seule vraie exception",
      texte: [
        "« Être » ne suit pas la méthode : nous sommes ne donne rien d’utilisable. Son radical est ét-.",
        "Sur ce radical, il prend les mêmes terminaisons que tous les verbes : il n’y a rien d’autre à retenir.",
      ],
    },
    {
      titre: "Trois détails d’orthographe",
      texte: [
        "Les verbes en **-ger** gardent le e devant a : nous bougions, mais je bougeais. Sans ce e, on lirait « bouguais ».",
        "Les verbes en **-cer** prennent une cédille devant a : je lançais, nous lancions.",
        "Et attention à « il était » (-ait) contre « ils étaient » (-aient) : à l’oreille, c’est identique.",
      ],
      regle: "Le -e des verbes en -ger et la cédille des verbes en -cer ne servent qu’à garder le son. Devant i, ils disparaissent.",
    },
  ],
  exemples: [
    {
      enonce: "Mets « nous voyons » à l’imparfait, à la première personne du singulier.",
      etapes: [
        "Je prends le présent à « nous » : nous voyons.",
        "J’enlève -ons : il reste voy-.",
        "J’ajoute la terminaison pour « je » : -ais.",
      ],
      resultat: "je voyais",
    },
  ],
  exercices: [
    e("f-p2-im-1", "Écris le verbe « nager » à l’imparfait, avec « tu ».", "tu nageais", "Nous nageons → radical nage-. Avec -ais : tu nageais. Le e reste devant le a pour garder le son de « nager »."),
    e("f-p2-im-2", "Avec « tu », quelle est la forme de « avoir » à l’imparfait ?", "tu avais", "Nous avons → radical av-. Avec « tu », la terminaison est -ais : tu avais. Avoir suit la même méthode que les autres verbes."),
    e("f-p2-im-3", "Écris le verbe « vouloir » à l’imparfait : « Ils … toujours jouer dehors. » Réponds par le mot manquant.", "voulaient", "Nous voulons → radical voul-. Avec « ils », la terminaison est -aient : ils voulaient."),
    e("f-p2-im-4", "Conjugue « être » à l’imparfait avec « vous ».", "vous étiez", "Être ne suit pas la méthode : son radical d’imparfait est ét-. Avec « vous », la terminaison est -iez : vous étiez."),
    e("f-p2-im-5", "Conjugue « finir » à l’imparfait avec « tu ».", "tu finissais", "Nous finissons → radical finiss-. Avec -ais : tu finissais."),
    q("f-p2-im-6", "Complète : « Autrefois, les trains … à la vapeur. »", ["marchait", "marchaient", "marchent"], "marchaient", "« Autrefois » dit que c’est du passé qui durait : c’est l’imparfait. Et le sujet « les trains » est au pluriel, donc -aient."),
    e("f-p2-im-7", "Conjugue « prendre » à l’imparfait avec « vous ».", "vous preniez", "Nous prenons → radical pren-. Avec -iez : vous preniez, avec un seul n."),
    q("f-p2-im-8", "Quelles sont les terminaisons de l’imparfait ?", ["-ais, -ais, -ait, -ions, -iez, -aient", "-e, -es, -e, -ons, -ez, -ent", "-rai, -ras, -ra, -rons, -rez, -ront"], "-ais, -ais, -ait, -ions, -iez, -aient", "Les mêmes pour tous les verbes, sans exception. Les deuxièmes sont celles du présent du 1er groupe, les troisièmes celles du futur."),
  ],
};

const futur: Lecon = {
  code: "f-p2-futur",
  matiere: "francais",
  periode: 2,
  titre: "Le futur",
  reference:
    "Savoir isoler et connaître la marque de temps du futur (-r-) ; connaître les marques de personne ; conjugaisons à maîtriser : futur de être et avoir, des verbes des 1er et 2e groupes et des irréguliers du 3e.",
  minutes: 25,
  cours: [
    {
      texte: [
        "Le futur dit ce qui n’est pas encore arrivé. Et il a une particularité qui permet de le reconnaître à coup sûr.",
      ],
    },
    {
      titre: "Le -r- est la marque du futur",
      texte: [
        "Toutes les formes du futur contiennent un **r** : je chanterai, tu chanteras, il chantera, nous chanterons, vous chanterez, ils chanteront.",
        "Ce r est la marque de temps. Après lui viennent les marques de personne : -ai, -as, -a, -ons, -ez, -ont — qui sont, à peu de chose près, le verbe avoir au présent.",
        "Pour la plupart des verbes, on part de l’**infinitif** et on ajoute la terminaison : chanter + ai = chanterai. Finir + as = finiras. Pour les verbes en -re, on enlève d’abord le e : prendre → je prendrai, dire → je dirai.",
      ],
      regle: "Infinitif + -ai, -as, -a, -ons, -ez, -ont. Le r du futur vient de l’infinitif lui-même.",
    },
    {
      titre: "Les irréguliers, qui gardent quand même leur r",
      texte: [
        "Certains verbes changent de radical, mais le r reste : être → je serai ; avoir → j’aurai ; aller → j’irai ; faire → je ferai ; voir → je verrai ; venir → je viendrai ; pouvoir → je pourrai ; vouloir → je voudrai. Dire et prendre, eux, restent sages : je dirai, je prendrai.",
        "Le radical change, les terminaisons non : ce sont toujours -ai, -as, -a, -ons, -ez, -ont, derrière le r.",
        "Ce sont les verbes du programme, et ils reviennent sans cesse : relis cette liste plusieurs fois dans la semaine, elle finira par se dire toute seule.",
      ],
    },
    {
      titre: "Ne pas confondre avec le conditionnel",
      texte: [
        "« Je chanterais » (avec un s) n’est pas du futur : c’est du conditionnel, qui dit ce qui arriverait **si**.",
        "« Demain je chanterai » — c’est sûr. « Si on me le demandait, je chanterais » — ce n’est pas sûr.",
        "À l’oreille c’est presque pareil. C’est le sens de la phrase qui décide.",
      ],
      regle: "Futur : -ai. Conditionnel : -ais. Un seul s, et toute la certitude change.",
    },
  ],
  exemples: [
    {
      enonce: "Conjugue « partir » au futur avec « nous », puis « aller » au futur avec « je ».",
      etapes: [
        "Partir est régulier au futur : infinitif + -ons. Donc nous partirons.",
        "Aller est irrégulier : son radical de futur est ir-. Donc j’irai.",
        "Dans les deux cas, il y a bien un r.",
      ],
      resultat: "nous partirons · j’irai",
    },
  ],
  exercices: [
    e("f-p2-fu-1", "Écris le verbe « jouer » au futur, avec « je ».", "je jouerai", "Infinitif jouer + ai : je jouerai. Au futur, avec « je », la terminaison est -ai."),
    e("f-p2-fu-2", "Écris le verbe « être » au futur : « Dimanche, nous … chez nos cousins. » Réponds par le mot manquant.", "serons", "Le radical de futur d’être est ser-. Avec « nous », la terminaison est -ons : nous serons. Le r du futur est bien là."),
    e("f-p2-fu-3", "Avec « ils », quelle est la forme de « pouvoir » au futur ?", "ils pourront", "Le radical de futur de pouvoir est pourr-, avec deux r : je pourrai, ils pourront."),
    e("f-p2-fu-4", "Avec « tu », quelle est la forme de « avoir » au futur ?", "tu auras", "Le radical de futur d’avoir est aur-. Avec « tu », la terminaison est -as : tu auras."),
    e("f-p2-fu-5", "Conjugue « faire » au futur avec « vous ».", "vous ferez", "Le radical de futur de faire est fer- : je ferai, vous ferez."),
    e("f-p2-fu-6", "Au futur, avec « il », comment s’écrit le verbe « descendre » ?", "il descendra", "Descendre finit par -re : on enlève d’abord le e, puis on ajoute la terminaison. Descendr- + a : il descendra."),
    q("f-p2-fu-7", "« Je chanterais si on me le demandait » : est-ce du futur ?", ["oui", "non"], "non", "C’est du conditionnel : ça dit ce qui arriverait si. Le futur s’écrit « je chanterai », sans s."),
    q("f-p2-fu-8", "Quelle lettre se trouve dans toutes les formes du futur ?", ["le r", "le s", "le e"], "le r", "Le r est la marque de temps du futur, et il vient de l’infinitif."),
  ],
};

const passeCompose: Lecon = {
  code: "f-p2-passe-compose",
  matiere: "francais",
  periode: 2,
  titre: "Le passé composé",
  reference:
    "Connaître la composition du passé composé en deux parties (auxiliaire + participe passé) ; retrouver la forme infinitive du verbe ; effectuer la transformation à la forme négative en insérant les adverbes de négation à leur juste place ; accorder le participe passé avec le sujet dans le cas de l’emploi avec l’auxiliaire être.",
  minutes: 30,
  cours: [
    {
      texte: [
        "Le passé composé raconte une action **terminée**, arrivée une fois. C’est le temps du récit à l’oral.",
        "« Hier, j’ai rangé ma chambre. » C’est fait, c’est fini.",
      ],
    },
    {
      titre: "Composé, parce qu’il a deux morceaux",
      texte: [
        "Un **auxiliaire** conjugué au présent — avoir ou être — plus le **participe passé** du verbe.",
        "« J’ai joué » : auxiliaire avoir + participe joué.",
        "« Je suis parti » : auxiliaire être + participe parti.",
        "La plupart des verbes se conjuguent avec **avoir**. Quelques verbes qui disent un déplacement ou un changement prennent **être** : aller, venir, partir, arriver, entrer, sortir, monter, descendre, tomber, rester, naître, mourir. « Je suis allé », « elle est venue », « ils sont tombés ».",
        "C’est pour ça qu’on l’appelle un temps composé : il est fait de deux mots, alors que le présent, l’imparfait et le futur n’en font qu’un.",
      ],
      regle: "Passé composé = avoir ou être au présent + participe passé. Deux mots, toujours.",
    },
    {
      titre: "Le participe passé",
      texte: [
        "Pour les verbes du 1er groupe, il finit par **-é** : sauter → sauté, ranger → rangé.",
        "Pour le 2e groupe, par **-i** : finir → fini, choisir → choisi.",
        "Le 3e groupe est varié : prendre → pris, faire → fait, voir → vu, venir → venu, dire → dit, pouvoir → pu, vouloir → voulu, aller → allé. Et les deux auxiliaires ont aussi leur participe : être → été (j’ai été), avoir → eu (j’ai eu).",
        "Une confusion fréquente : « j’ai lavé » (participe, avec é) et « je vais laver » (infinitif, avec er) se prononcent pareil. Test : remplace par « mordre ». Si « j’ai mordu » marche, c’est un participe ; si « je vais mordre » marche, c’est un infinitif.",
      ],
      regle:
        "Le test de « mordre » tranche entre -é et -er. On ne devine pas à l’oreille, on remplace.",
    },
    {
      titre: "L’accord avec être",
      texte: [
        "Avec l’auxiliaire **être**, le participe passé s’accorde avec le sujet, comme un adjectif.",
        "« Il est parti », « elle est partie », « ils sont partis », « elles sont parties ».",
        "Avec l’auxiliaire **avoir**, il ne s’accorde pas avec le sujet : « elles ont chanté », et non « chantées ».",
      ],
      regle: "Avec être, on accorde avec le sujet. Avec avoir, on n’accorde pas avec le sujet.",
    },
    {
      titre: "La négation",
      texte: [
        "Les deux morceaux de la négation encadrent l’**auxiliaire**, pas le participe.",
        "« J’ai dormi » → « Je **n’**ai **pas** dormi ». Et non « je n’ai dormi pas ».",
      ],
    },
  ],
  exemples: [
    {
      enonce: "Mets « elle part » au passé composé, puis à la forme négative.",
      etapes: [
        "Partir se conjugue avec être : elle est + participe.",
        "Le participe de partir est parti, et avec être il s’accorde : elle est partie.",
        "Pour la négation, j’encadre l’auxiliaire : elle n’est pas partie.",
      ],
      resultat: "elle est partie · elle n’est pas partie",
    },
  ],
  exercices: [
    e("f-p2-pc-1", "Écris le verbe « danser » au passé composé, avec « nous ».", "nous avons dansé", "Auxiliaire avoir au présent + participe passé en -é : nous avons dansé."),
    e("f-p2-pc-2", "Mets « nous finissons » au passé composé.", "nous avons fini", "Auxiliaire avoir + participe fini, qui finit par -i pour le 2e groupe."),
    e("f-p2-pc-3", "Complète avec le participe passé du verbe « ouvrir » : « Papa a … le robinet. » Réponds par le mot manquant.", "ouvert", "Ouvrir fait « ouvert » : j’ai ouvert, nous avons ouvert. Le t ne s’entend pas ; au féminin, on l’entend : « la porte est ouverte »."),
    e("f-p2-pc-4", "Quel est le participe passé de « voir » ?", "vu", "Voir fait « vu » : j’ai vu, nous avons vu."),
    q("f-p2-pc-5", "Complète : « Ma tante est … chez nous tout l’été. » (rester)", ["resté", "restée", "restées"], "restée", "Rester se conjugue avec l’auxiliaire être : le participe s’accorde avec le sujet. « Ma tante » est féminin singulier, donc on ajoute un -e : restée."),
    q("f-p2-pc-6", "Complète : « Léa et Chloé ont … toute la matinée. » (nager)", ["nagé", "nagée", "nagées"], "nagé", "Avec l’auxiliaire avoir, le participe ne s’accorde pas avec le sujet : elles ont nagé."),
    e("f-p2-pc-7", "Mets « le train a sifflé » à la forme négative.", "le train n’a pas sifflé", "La négation encadre l’auxiliaire, pas le participe : le train n’a pas sifflé."),
    q("f-p2-pc-8", "Faut-il écrire « j’ai mang… » avec é ou er ?", ["é", "er"], "é", "Test de mordre : « j’ai mordu » marche, donc c’est un participe passé, donc -é. « Je vais manger » serait un infinitif."),
  ],
};

const complements: Lecon = {
  code: "f-p2-complements",
  matiere: "francais",
  periode: 2,
  titre: "Les compléments : objet ou circonstanciel",
  reference:
    "Distinguer le complément d’objet du complément circonstanciel ; différencier complément d’objet direct et complément d’objet indirect dans des phrases prototypiques sans ambiguïté ; identifier les groupes circonstanciels sans les distinguer ; comprendre et utiliser les manipulations syntaxiques.",
  minutes: 30,
  cours: [
    {
      texte: [
        "Après le sujet et le verbe, il reste souvent des mots. Ce sont les compléments, et il y en a deux sortes qu’on distingue par un test, pas par le sens.",
      ],
    },
    {
      titre: "Le test du déplacement et de la suppression",
      texte: [
        "« Ce matin, j’ai vu un héron dans le jardin. »",
        "On peut dire « Dans le jardin, ce matin, j’ai vu un héron », et même « J’ai vu un héron » tout court. Donc « ce matin » et « dans le jardin » se déplacent et s’enlèvent : ce sont des compléments **circonstanciels**.",
        "Mais « un héron » ne se déplace pas et ne s’enlève pas : « J’ai vu » ne veut plus rien dire. C’est un complément d’**objet**.",
      ],
      regle:
        "S’il se déplace ou s’enlève sans casser la phrase : circonstanciel. S’il est indispensable et collé au verbe : objet.",
    },
    {
      titre: "Direct ou indirect",
      texte: [
        "Le complément d’objet est **direct** (COD) quand il suit le verbe sans petit mot entre les deux : « Je regarde **la télévision**. »",
        "Il est **indirect** (COI) quand une préposition s’intercale — à, de, sur… : « Je parle **à mon frère**. »",
        "Pour trouver le COD, on demande « qui ? » ou « quoi ? » après le verbe. Pour le COI, « à qui ? », « de quoi ? ».",
        "Attention au mot « objet » : il ne veut pas dire « une chose ». Dans « Je vois mon frère », « mon frère » est un COD, même si c’est une personne. Je vois qui ? Mon frère.",
      ],
      regle:
        "COD : verbe + quoi ? / qui ? Rien entre les deux. COI : verbe + à qui ? / de quoi ? Il y a une préposition.",
    },
    {
      titre: "Les manipulations, un outil pour toute l’année",
      texte: [
        "Quatre gestes servent à analyser n’importe quelle phrase, et ils servent aussi à améliorer ses propres textes :",
        "**déplacer** — pour repérer les circonstanciels ; **supprimer** — pour savoir ce qui est indispensable ; **remplacer** — pour trouver la nature d’un groupe ; **ajouter** — pour enrichir une phrase.",
        "Ce ne sont pas des exercices d’école : c’est ce qu’on fait quand on relit ce qu’on a écrit.",
      ],
    },
  ],
  exemples: [
    {
      enonce: "Dans « Chaque soir, Léa lit une histoire à son petit frère », trouve les compléments et dis ce qu’ils sont.",
      etapes: [
        "« Chaque soir » se déplace et s’enlève : circonstanciel.",
        "« Une histoire » répond à « lit quoi ? » et ne s’enlève pas : COD.",
        "« À son petit frère » répond à « à qui ? » et commence par une préposition : COI.",
      ],
      resultat: "chaque soir : circonstanciel · une histoire : COD · à son petit frère : COI",
    },
  ],
  exercices: [
    q("f-p2-co-1", "Dans « Mamie cueille des cerises au fond du verger », que peut-on enlever sans casser la phrase ?", ["des cerises", "au fond du verger", "cueille"], "au fond du verger", "« Mamie cueille des cerises » se tient tout seul, et « au fond du verger » se déplace aussi : « Au fond du verger, Mamie cueille des cerises. » C’est donc un complément circonstanciel."),
    q("f-p2-co-2", "Dans « Le chat guette une souris », « une souris » est…", ["un COD", "un COI", "un circonstanciel"], "un COD", "Il répond à « le chat guette quoi ? » et suit le verbe sans préposition."),
    q("f-p2-co-3", "Dans « Ma petite sœur tient à son doudou », « à son doudou » est…", ["un COD", "un COI", "un circonstanciel"], "un COI", "Il répond à « elle tient à quoi ? » et commence par la préposition « à ». Il ne s’enlève pas : « Ma petite sœur tient » reste en l’air."),
    q("f-p2-co-4", "Dans « Demain, nous partirons », « demain » est…", ["un COD", "un circonstanciel"], "un circonstanciel", "Il se déplace — « Nous partirons demain » — et s’enlève : « Nous partirons »."),
    e("f-p2-co-5", "Dans « Mia dessine un dragon », quel est le complément d’objet direct ?", "un dragon", "Mia dessine quoi ? Un dragon. Il suit le verbe, sans préposition entre les deux."),
    q("f-p2-co-6", "Quelle question pose-t-on pour trouver un COD ?", ["quoi ? ou qui ?", "où ?", "quand ?"], "quoi ? ou qui ?", "Le COD répond à « verbe + quoi ? » ou « verbe + qui ? ». Où et quand mènent aux circonstanciels."),
    q("f-p2-co-7", "Dans « Il pense à ses vacances », « à ses vacances » est…", ["un COD", "un COI"], "un COI", "La préposition « à » rend le complément indirect."),
    q("f-p2-co-8", "Comment savoir si un groupe est circonstanciel ?", ["on essaie de le déplacer", "on regarde s’il est long", "on regarde sa place"], "on essaie de le déplacer", "Un circonstanciel se déplace et s’enlève sans casser la phrase. C’est le test, et il ne dépend pas du sens."),
  ],
};

const homophones: Lecon = {
  code: "f-p2-homophones",
  matiere: "francais",
  periode: 2,
  titre: "Les mots qui se prononcent pareil",
  reference:
    "Écrire correctement les mots les plus fréquents de la langue en s’appuyant sur les régularités et la formation ; mobiliser les mots de la grammaire pour résoudre des problèmes d’orthographe.",
  minutes: 25,
  cours: [
    {
      texte: [
        "Certains mots se prononcent exactement pareil et s’écrivent différemment. On ne peut pas les distinguer à l’oreille : il faut raisonner.",
        "La bonne nouvelle, c’est qu’il y a un test pour chacun, et qu’ils marchent tous sur le même principe : on remplace, et on écoute si la phrase tient.",
      ],
    },
    {
      titre: "a ou à",
      texte: [
        "**a** est le verbe avoir. **à** est une préposition.",
        "Test : remplace par « avait ». Si la phrase tient, c’est « a » sans accent.",
        "« Léo a un chat roux » → « Léo avait un chat roux ». Ça marche, donc « a ».",
        "« Nous allons à la plage » → « Nous allons avait la plage ». Absurde, donc « à ».",
      ],
      regle: "Remplace par « avait ». Si ça marche, c’est a. Sinon, c’est à.",
    },
    {
      titre: "est ou et",
      texte: [
        "**est** est le verbe être. **et** relie deux choses.",
        "Test : remplace par « était ».",
        "« Le ciel est gris » → « Le ciel était gris ». Ça marche, donc « est ».",
        "« Pierre et Paul » → « Pierre était Paul ». Absurde, donc « et ».",
      ],
      regle: "Remplace par « était ». Si ça marche, c’est est. Sinon, c’est et.",
    },
    {
      titre: "son ou sont",
      texte: [
        "**sont** est le verbe être au pluriel. **son** est un déterminant possessif.",
        "Test : remplace par « étaient ».",
        "« Les clés sont dans le tiroir » → « étaient dans le tiroir ». Ça marche.",
        "« Elle promène son chien » → « elle promène étaient chien ». Absurde. Autre test : « son » peut devenir « mon » ou « ton ».",
      ],
      regle: "sont → étaient. son → mon, ton.",
    },
    {
      titre: "ont ou on",
      texte: [
        "**ont** est le verbe avoir au pluriel. **on** est un pronom qui veut dire « quelqu’un » ou « nous ».",
        "Test : « ont » se remplace par « avaient ». « on » se remplace par « il ».",
        "« Ils ont faim » → « ils avaient faim ». « On part demain » → « il part demain ».",
      ],
      regle: "ont → avaient. on → il.",
    },
  ],
  exemples: [
    {
      enonce: "Complète : « Lou … faim et elle court … la cuisine … toute vitesse. »",
      etapes: [
        "« … faim » : je remplace par avait — « avait faim » marche. Donc « a ».",
        "« elle court … la cuisine » : « avait la cuisine » est absurde. Donc « à ».",
        "« … toute vitesse » : de même, « avait toute vitesse » est absurde. Donc « à ».",
      ],
      resultat: "Lou a faim et elle court à la cuisine à toute vitesse.",
    },
  ],
  exercices: [
    q("f-p2-ho-1", "Complète : « Ma tante … une voiture bleue. »", ["a", "à"], "a", "Test : « ma tante avait une voiture bleue » marche, donc c’est le verbe avoir, sans accent."),
    q("f-p2-ho-2", "Complète : « Nous partons … la montagne. »", ["a", "à"], "à", "Test : « nous partons avait la montagne » ne veut rien dire. C’est donc la préposition, avec accent."),
    q("f-p2-ho-3", "Complète : « Mes chaussures … mouillées. »", ["sont", "son"], "sont", "Test : « mes chaussures étaient mouillées » marche, donc c’est le verbe être."),
    q("f-p2-ho-4", "Complète : « Julie range … vélo dans le garage. »", ["sont", "son"], "son", "On peut dire « mon vélo » ou « ton vélo » : c’est un déterminant possessif."),
    q("f-p2-ho-5", "Complète : « La soupe … trop chaude. »", ["est", "et"], "est", "Test : « la soupe était trop chaude » marche, donc c’est le verbe être."),
    q("f-p2-ho-6", "Complète : « Le lion … le tigre dorment à l’ombre. »", ["est", "et"], "et", "« Le lion était le tigre » ne veut rien dire : ici le mot relie deux animaux."),
    q("f-p2-ho-7", "Complète : « Ils … fini leurs devoirs. »", ["ont", "on"], "ont", "« Ils avaient fini » marche : c’est le verbe avoir au pluriel."),
    q("f-p2-ho-8", "Complète : « Ce soir, … mange des crêpes. »", ["ont", "on"], "on", "On peut dire « ce soir, il mange des crêpes » : c’est le pronom."),
  ],
};

const lectureComprendre: Lecon = {
  code: "f-p2-comprendre",
  matiere: "francais",
  periode: 2,
  titre: "Comprendre un texte : l’explicite et l’implicite",
  reference:
    "Développer des stratégies de compréhension ; repérer, dans un texte, les informations explicites et pointer des informations implicites ; trouver dans des documents simples les réponses à des questions.",
  minutes: 25,
  cours: [
    {
      texte: [
        "Comprendre un texte, ce n’est pas seulement lire tous les mots. Il y a deux sortes d’informations, et la deuxième est celle qui compte le plus souvent.",
      ],
    },
    {
      titre: "L’explicite : c’est écrit",
      texte: [
        "Une information **explicite** est écrite noir sur blanc. Il suffit de la retrouver.",
        "« Nathan a mis dans son sac une pomme, un livre et sa gourde bleue. » De quelle couleur est la gourde ? Bleue. C’est écrit.",
        "Le réflexe utile : relire en cherchant le mot de la question. Souvent, la réponse est juste à côté.",
      ],
    },
    {
      titre: "L’implicite : ce n’est pas écrit, mais ça se déduit",
      texte: [
        "Une information **implicite** n’est pas dans le texte : on la déduit de ce qui est dit.",
        "« La cycliste est montée sur la plus haute marche du podium et a reçu la médaille d’or. » Le texte ne dit jamais le mot « victoire ». Mais la plus haute marche et la médaille d’or ne laissent pas beaucoup de doutes.",
        "« Elle a ouvert son parapluie et sauté par-dessus les flaques. » Le texte ne dit pas qu’il pleut, mais c’est la seule explication raisonnable.",
      ],
      regle:
        "Quand la réponse n’est pas écrite, demande-toi : qu’est-ce que ça veut dire, et qu’est-ce que ça suppose ?",
    },
    {
      titre: "Une déduction se justifie",
      texte: [
        "Une déduction n’est pas une invention : elle doit s’appuyer sur des mots du texte.",
        "Si on demande pourquoi tu penses qu’il pleut, tu dois pouvoir répondre « parce qu’elle ouvre son parapluie et qu’il y a des flaques ».",
        "Si tu ne peux montrer aucun mot du texte, alors ce n’est pas une déduction, c’est une supposition — et elle peut être fausse.",
      ],
      regle: "Toute déduction doit pouvoir se justifier en montrant un endroit du texte.",
    },
  ],
  exemples: [
    {
      enonce:
        "« Ce matin-là, le vent soufflait très fort. Quand Lina est sortie, le linge n’était plus sur le fil. Elle a d’abord regardé au fond du jardin, puis elle est allée sonner chez la voisine. » Où a-t-elle cherché en premier ? Et pourquoi le linge a-t-il pu tomber ?",
      etapes: [
        "Où en premier : c’est écrit, « d’abord regardé au fond du jardin ». Information explicite.",
        "Pourquoi il a pu tomber : le texte ne le dit pas. Mais il dit que le vent soufflait très fort.",
        "La déduction s’appuie donc sur un mot du texte : c’est une information implicite, et elle se justifie.",
      ],
      resultat: "au fond du jardin · parce que le vent soufflait très fort",
    },
  ],
  exercices: [
    q("f-p2-cp-1", "« Pour le pique-nique, Sacha a mis une banane au fond du panier, puis il a posé par-dessus le gros melon et les bouteilles d’eau. À midi, la banane était toute écrasée. » Dans quoi Sacha a-t-il mis la banane ?", ["dans la glacière", "dans le panier", "dans sa poche"], "dans le panier", "C’est écrit noir sur blanc : « une banane au fond du panier ». Information explicite."),
    q("f-p2-cp-2", "Même texte. Pourquoi la banane a-t-elle pu s’écraser ?", ["elle était trop mûre", "le melon et les bouteilles pesaient dessus", "on ne peut pas le savoir"], "le melon et les bouteilles pesaient dessus", "Le texte ne le dit pas directement, mais il dit que le melon et les bouteilles d’eau étaient posés par-dessus : c’est une déduction justifiée."),
    q("f-p2-cp-3", "« Les enfants ont enfilé leur maillot, puis Hugo a sauté du plongeoir. » Où sont-ils ?", ["à la piscine", "à la bibliothèque", "dans une forêt"], "à la piscine", "Le mot n’est pas écrit, mais le maillot et le plongeoir le disent."),
    q("f-p2-cp-4", "« Mila a pris ses lunettes de soleil, sa casquette et une bouteille d’eau fraîche. » Quel temps fait-il ?", ["il fait chaud", "il neige", "il fait nuit"], "il fait chaud", "Ce sont des affaires pour les journées de soleil. Le texte ne dit pas « chaud », on le déduit."),
    q("f-p2-cp-5", "« Le cordonnier a recollé la semelle et changé les lacets. » Qu’est-ce qu’on lui a apporté à réparer ?", ["des chaussures", "un vélo", "une montre"], "des chaussures", "Une semelle et des lacets, ce sont des morceaux de chaussure. Et un cordonnier est celui qui répare les chaussures."),
    q("f-p2-cp-6", "« Le bus de 7 h 50 n’est jamais passé. Samir est monté dans celui de 8 h 35. » Dans quel bus Samir est-il monté ?", ["celui de 7 h 50", "celui de 8 h 35", "aucun"], "celui de 8 h 35", "Information explicite, écrite dans la deuxième phrase."),
    q("f-p2-cp-7", "Même texte. Samir est-il arrivé à l’heure ?", ["oui, sûrement", "probablement pas", "le texte dit qu’il est en retard"], "probablement pas", "Le retard n’est pas écrit dans le texte. Mais son bus est passé trois quarts d’heure plus tard : la déduction est raisonnable."),
    q("f-p2-cp-8", "Qu’est-ce qui distingue une déduction d’une invention ?", ["elle s’appuie sur des mots du texte", "elle est plus courte", "elle est dans la question"], "elle s’appuie sur des mots du texte", "Une déduction doit pouvoir se justifier en montrant un endroit précis du texte."),
  ],
};

const ecrireTexte: Lecon = {
  code: "f-p2-ecrire",
  matiere: "francais",
  periode: 2,
  titre: "Écrire un texte qui se tient",
  reference:
    "Découvrir et explorer des situations variées d’écriture : raconter, expliquer ; utiliser le brouillon pour préparer son texte ; prendre conscience des composantes de la cohérence textuelle ; exercer sa vigilance quant au respect des codes de l’écrit.",
  minutes: 30,
  cours: [
    {
      texte: [
        "Écrire un texte, ce n’est pas écrire des phrases les unes après les autres. Il faut que ça se tienne — et ça se prépare.",
      ],
    },
    {
      titre: "Le brouillon n’est pas une punition",
      texte: [
        "Personne n’écrit bien du premier coup, et surtout pas les écrivains.",
        "Sur le brouillon, on note d’abord des idées en vrac, sans se soucier de l’orthographe. Puis on les met dans l’ordre. Puis seulement on rédige.",
        "Un brouillon peut être une liste, des flèches, un dessin. Il n’a pas à être beau : il n’est lu par personne.",
      ],
      regle: "Idées d’abord, ordre ensuite, phrases après. Pas les trois en même temps.",
    },
    {
      titre: "Ce qui fait qu’un texte se tient",
      texte: [
        "Les **temps** restent cohérents. Si tu commences au passé, tu ne passes pas au présent au milieu sans raison.",
        "Les **personnages** restent reconnaissables. Si tu écris « il » trois fois de suite alors qu’il y a deux garçons, on ne sait plus de qui tu parles.",
        "Les **connecteurs** montrent le lien entre les phrases : d’abord, ensuite, puis, enfin, alors, car, parce que, mais, donc.",
      ],
      regle:
        "Un texte qui se tient : les mêmes temps, des personnages qu’on suit, et des connecteurs qui montrent les liens.",
    },
    {
      titre: "Les reprises, pour ne pas répéter",
      texte: [
        "Au lieu de répéter « le chat » à chaque phrase, on le reprend autrement : il, l’animal, le matou, notre petit chat.",
        "Mais attention à ne pas perdre le lecteur : si tu écris « il » et qu’on ne sait plus qui c’est, la reprise a échoué.",
      ],
    },
    {
      titre: "Se relire, en trois passages",
      texte: [
        "Premier passage : est-ce que ça se comprend ? Est-ce que quelqu’un qui n’était pas là comprendrait ?",
        "Deuxième passage : les accords. Chaque verbe avec son sujet, chaque adjectif avec son nom.",
        "Troisième passage : la ponctuation et les majuscules.",
        "Trois passages courts valent mieux qu’un seul où on cherche tout à la fois — parce qu’en cherchant tout, on ne voit rien.",
      ],
      regle: "On ne relit pas tout en même temps. Un passage, une seule chose à vérifier.",
    },
  ],
  exemples: [
    {
      enonce:
        "Améliore : « Le chat est monté sur le toit. Le chat ne pouvait plus descendre. Le chat a miaulé. »",
      etapes: [
        "Le problème : « le chat » est répété trois fois.",
        "Je reprends autrement : il, l’animal.",
        "J’ajoute des connecteurs pour montrer l’enchaînement : mais, alors.",
      ],
      resultat:
        "Le chat est monté sur le toit, mais il ne pouvait plus descendre. Alors l’animal a miaulé.",
    },
  ],
  exercices: [
    q("f-p2-ec-1", "Dans quel ordre travaille-t-on quand on écrit un texte ?", ["idées, ordre, phrases", "phrases, idées, ordre", "ordre, phrases, idées"], "idées, ordre, phrases", "On note les idées en vrac, on les met dans l’ordre, et on rédige seulement ensuite."),
    q("f-p2-ec-2", "Lequel de ces mots est un connecteur qui montre une cause ?", ["parce que", "ensuite", "enfin"], "parce que", "« Parce que » explique pourquoi. « Ensuite » et « enfin » marquent le temps."),
    q("f-p2-ec-3", "Tu commences ton récit à l’imparfait. Que faut-il faire ensuite ?", ["rester au passé", "passer au présent", "alterner"], "rester au passé", "Les temps d’un texte doivent rester cohérents, sinon le lecteur perd le fil."),
    q("f-p2-ec-4", "Pour éviter de répéter « le chat », on peut écrire…", ["il, l’animal", "le chat chat", "rien du tout"], "il, l’animal", "Ce sont des reprises. Mais il faut qu’on sache toujours de qui on parle."),
    q("f-p2-ec-5", "Combien de passages fait-on pour se relire, d’après la leçon ?", ["un seul", "deux", "trois"], "trois", "Trois : le sens, les accords, puis la ponctuation. Chercher tout à la fois, c’est ne rien voir."),
    q("f-p2-ec-6", "Que vérifie-t-on au deuxième passage de relecture ?", ["les accords", "le sens", "les majuscules"], "les accords", "Chaque verbe avec son sujet, chaque adjectif avec son nom."),
    q("f-p2-ec-7", "À quoi sert le brouillon ?", ["à préparer sans se soucier de l’orthographe", "à recopier proprement", "à rien"], "à préparer sans se soucier de l’orthographe", "Le brouillon n’est lu par personne : il sert à penser, pas à être beau."),
    q("f-p2-ec-8", "Ton texte parle de deux garçons et tu écris « il » trois fois. Quel est le problème ?", ["on ne sait plus de qui on parle", "il n’y en a pas", "c’est trop court"], "on ne sait plus de qui on parle", "Avec deux garçons, « il » peut désigner l’un ou l’autre. On redonne alors un nom : « Paul », « son frère »."),
  ],
};

/* ================================================================== */
/* PÉRIODE 3 — janvier, février                                        */
/* ================================================================== */

const pronoms: Lecon = {
  code: "f-p3-pronoms",
  matiere: "francais",
  periode: 3,
  titre: "Les pronoms personnels",
  reference:
    "Distinguer les pronoms personnels sujets des pronoms personnels compléments ; remplacer un groupe nominal sujet par un pronom personnel sujet ; remplacer un groupe nominal objet par un pronom personnel objet.",
  minutes: 25,
  cours: [
    {
      texte: [
        "Un pronom remplace un groupe nominal. Il évite les répétitions, et c’est ce qui rend un texte lisible.",
        "Mais il y a deux séries de pronoms, et on ne les emploie pas au même endroit.",
      ],
    },
    {
      titre: "Les pronoms sujets",
      texte: [
        "je, tu, il, elle, on, nous, vous, ils, elles.",
        "Ils remplacent le groupe sujet : « Le frère de mon ami siffle » → « **Il** siffle ».",
        "C’est aussi le meilleur test pour vérifier qu’on a bien repéré tout le groupe sujet : si le remplacement par un pronom marche, c’était le bon groupe.",
      ],
      regle: "Le pronom sujet remplace tout le groupe sujet, pas seulement le nom.",
    },
    {
      titre: "Les pronoms compléments",
      texte: [
        "me, te, le, la, lui, nous, vous, les, leur.",
        "Ils remplacent le complément d’objet : « Je regarde **la télévision** » → « Je **la** regarde ».",
        "Et ils se placent **devant** le verbe, ce qui est une particularité du français : on ne dit pas « je regarde la », on dit « je la regarde ».",
      ],
      regle:
        "Le pronom complément passe devant le verbe. C’est ce déplacement qui trahit sa fonction.",
    },
    {
      titre: "Direct ou indirect, là aussi",
      texte: [
        "Pour un COD : le, la, les. « Je vois mon frère » → « Je **le** vois ».",
        "Pour un COI : lui, leur. « Je parle à mon frère » → « Je **lui** parle ».",
        "Un bon repère : lui et leur remplacent toujours un complément introduit par « à ».",
        "Attention : le pronom « leur » ne prend jamais de -s. « Je leur parle » (à eux). Avec un -s, « leurs » est un déterminant devant un nom : « leurs cahiers ».",
      ],
      regle: "le, la, les → COD. lui, leur → COI, celui qui venait avec « à ».",
    },
  ],
  exemples: [
    {
      enonce: "Remplace les deux compléments : « Léa donne un livre à son frère. » (un livre, puis à son frère)",
      etapes: [
        "« Un livre » est le COD : on le remplace par « le ». Et il passe devant le verbe.",
        "« À son frère » est le COI : on le remplace par « lui », devant le verbe aussi.",
        "Les deux ensemble : « Léa le lui donne. »",
      ],
      resultat: "Léa le donne à son frère · Léa lui donne un livre · Léa le lui donne",
    },
  ],
  exercices: [
    e("f-p3-pn-1", "Remplace le sujet par un pronom : « Les élèves de la classe rangent leurs affaires. » Réponds par le pronom seul.", "ils", "« Les élèves de la classe » est un groupe masculin pluriel : le pronom sujet est « ils »."),
    q("f-p3-pn-2", "Dans « Mon cousin les ramasse sur la plage », quelle est la fonction de « les » ?", ["sujet", "complément d’objet direct"], "complément d’objet direct", "Qui est-ce qui ramasse ? Mon cousin : c’est le sujet. « Les » est placé devant le verbe et répond à « il ramasse quoi ? » — des coquillages, par exemple. C’est un complément d’objet direct."),
    e("f-p3-pn-3", "Remplace le complément par un pronom : « Samir gonfle son ballon. » Réponds par la phrase entière.", "Samir le gonfle", "« Son ballon » est un COD masculin singulier : on le remplace par « le », et il passe devant le verbe. Samir le gonfle."),
    e("f-p3-pn-4", "Écris la phrase en remplaçant « à sa tante » par un pronom : « Nora téléphone à sa tante. »", "Nora lui téléphone", "« À sa tante » est un COI : il commence par « à ». On le remplace par « lui », qui passe devant le verbe. Nora lui téléphone."),
    q("f-p3-pn-5", "Quel pronom remplace un complément introduit par « à » ?", ["le", "lui", "la"], "lui", "lui et leur remplacent les compléments indirects, ceux qui venaient avec « à »."),
    q("f-p3-pn-6", "Où se place un pronom complément en français ?", ["devant le verbe", "derrière le verbe", "au début de la phrase"], "devant le verbe", "On dit « je la regarde » : le pronom complément se place devant le verbe. C’est une particularité du français."),
    e("f-p3-pn-7", "Remplace le sujet par un pronom : « Ma sœur et moi partons. » Réponds par le pronom seul.", "nous", "« Ma sœur et moi » veut dire nous. C’est pourquoi le verbe est à la première personne du pluriel."),
    q("f-p3-pn-8", "Dans « Il leur donne des bonbons », que remplace « leur » ?", ["à des enfants", "des bonbons", "il"], "à des enfants", "« Leur » est un pronom complément indirect : il remplace un groupe introduit par « à », au pluriel."),
  ],
};

const epithete: Lecon = {
  code: "f-p3-epithete",
  matiere: "francais",
  periode: 3,
  titre: "L’adjectif épithète",
  reference:
    "Aborder la notion d’épithète ; repérer et nommer le nom noyau dans le groupe nominal ; repérer des groupes nominaux et nommer les éléments qui les constituent.",
  minutes: 20,
  cours: [
    {
      texte: [
        "Un adjectif qui est collé au nom, dans le même groupe, s’appelle un adjectif **épithète**. Le mot est nouveau, la chose ne l’est pas : tu en utilises à chaque phrase.",
      ],
    },
    {
      titre: "Épithète : dans le groupe du nom",
      texte: [
        "« un **grand** chien », « une histoire **amusante** », « de **beaux** jours ».",
        "L’épithète peut être devant le nom ou derrière : les deux existent, et parfois les deux sont possibles.",
        "Deux propriétés : on peut souvent l’**enlever** sans casser la phrase, et il s’**accorde** avec le nom noyau.",
      ],
      regle:
        "Un adjectif épithète fait partie du groupe du nom, se place juste avant ou juste après lui, et s’accorde avec lui.",
    },
    {
      titre: "Comment le repérer",
      texte: [
        "Trouve d’abord le nom noyau du groupe. Puis regarde ce qui le qualifie juste à côté.",
        "Dans « le petit chat noir de la voisine », le noyau est « chat ». « Petit » et « noir » sont deux épithètes. « De la voisine » n’est pas un adjectif : c’est un complément du nom.",
      ],
    },
    {
      titre: "Enlever pour vérifier",
      texte: [
        "« Le grand chien noir dort. » → « Le chien dort. » La phrase tient encore : les deux adjectifs étaient bien des épithètes, et on peut les retirer.",
        "C’est pour ça qu’on dit que l’épithète **enrichit** le groupe du nom sans y être indispensable.",
      ],
      regle: "Test : enlève l’adjectif. Si la phrase tient encore, c’était une épithète.",
    },
  ],
  exemples: [
    {
      enonce: "Dans « un vieux livre poussiéreux de la bibliothèque », trouve le noyau et les épithètes.",
      etapes: [
        "Le noyau est le nom principal : « livre ».",
        "« Vieux » est devant, « poussiéreux » est derrière : deux épithètes, et les deux s’accordent avec livre.",
        "« De la bibliothèque » n’est pas un adjectif : c’est un complément du nom.",
      ],
      resultat: "noyau : livre · épithètes : vieux, poussiéreux",
    },
  ],
  exercices: [
    e("f-p3-ep-1", "Dans « un gros nuage gris », quel est le nom noyau ?", "nuage", "C’est le nom principal du groupe. « Gros » et « gris » le qualifient, l’un devant, l’autre derrière."),
    q("f-p3-ep-2", "Dans « Un vent glacial souffle sur la colline », quel mot est un adjectif épithète ?", ["vent", "glacial", "souffle"], "glacial", "« Glacial » qualifie le nom « vent », juste derrière lui, dans le même groupe. « Vent » est le nom noyau, et « souffle » est le verbe."),
    q("f-p3-ep-3", "« Une jolie petite barque bleue » : combien ce groupe compte-t-il d’épithètes ?", ["une", "deux", "trois"], "trois", "« Jolie » et « petite » sont devant le nom « barque », « bleue » est derrière : trois adjectifs qui la qualifient, dans le même groupe, et qui s’accordent avec elle."),
    q("f-p3-ep-4", "Dans « la maison de ma tante », « de ma tante » est…", ["un adjectif épithète", "un complément du nom"], "un complément du nom", "C’est un groupe introduit par une préposition, « de » : c’est un complément du nom. Un adjectif épithète serait un seul mot, sans préposition : « ma gentille tante »."),
    q("f-p3-ep-5", "Que se passe-t-il si on enlève une épithète ?", ["la phrase tient encore", "la phrase n’a plus de sens"], "la phrase tient encore", "« Le chien dort » se tient tout seul. L’épithète enrichit sans être indispensable."),
    q("f-p3-ep-6", "Avec quoi un adjectif épithète s’accorde-t-il ?", ["avec le nom noyau", "avec le verbe", "avec le sujet de la phrase"], "avec le nom noyau", "Il prend le genre et le nombre du nom qu’il qualifie."),
    q("f-p3-ep-7", "Dans « de beaux jours ensoleillés », combien y a-t-il d’épithètes ?", ["une", "deux", "trois"], "deux", "« Beaux » et « ensoleillés » qualifient tous deux le nom « jours » : l’un devant, l’autre derrière."),
    q("f-p3-ep-8", "Une épithète peut-elle être placée devant le nom ?", ["oui", "non"], "oui", "« Un grand chien » : l’épithète est devant. « Un chien noir » : elle est derrière. Les deux sont corrects."),
  ],
};

const accordSujetVerbe: Lecon = {
  code: "f-p3-accord-sujet-verbe",
  matiere: "francais",
  periode: 3,
  titre: "L’accord du sujet et du verbe",
  reference:
    "Repérer le sujet du verbe, notamment le nom noyau dans le cas d’un groupe nominal ; distinguer les variations morphologiques du verbe de celles du nom ; transformer des phrases en faisant varier le temps ou le sujet, en respectant toutes les chaînes d’accord.",
  minutes: 30,
  cours: [
    {
      texte: [
        "Le verbe s’accorde avec son sujet. La règle tient en une ligne — et pourtant c’est celle où l’on hésite le plus souvent, parce que le sujet n’est pas toujours là où on croit.",
      ],
    },
    {
      titre: "Le noyau commande, pas le mot le plus proche",
      texte: [
        "« Le chien de mes voisins **aboie**. » Qui est-ce qui aboie ? Le chien — un seul. Le verbe est au singulier, même si « voisins » est juste devant lui et au pluriel.",
        "« La boîte de chocolats **est** vide. » C’est la boîte qui est vide, pas les chocolats.",
        "La difficulté la plus courante : un complément du nom au pluriel se glisse entre le noyau et le verbe.",
      ],
      regle:
        "Trouve le **noyau** du groupe sujet, pas le mot collé au verbe. C’est le noyau qui donne l’accord.",
    },
    {
      titre: "Quand le sujet n’est pas devant",
      texte: [
        "« Sous la table **dormait** un vieux chat. » Le sujet est « un vieux chat », derrière le verbe. Le verbe reste au singulier.",
        "Le test de « qui est-ce qui » fonctionne quelle que soit la place du sujet, et c’est bien pour ça qu’on l’utilise.",
      ],
    },
    {
      titre: "Plusieurs sujets",
      texte: [
        "« Mon frère **et** ma sœur arrivent. » Deux personnes, donc pluriel.",
        "« Mon père **et moi** lavons la voiture. » Dès qu’il y a « moi », le sujet équivaut à « nous ».",
        "« Toi **et** ton frère venez avec nous. » Dès qu’il y a « toi » sans « moi », le sujet équivaut à « vous ».",
      ],
      regle: "avec moi → nous. avec toi (sans moi) → vous. sinon → ils ou elles.",
    },
    {
      titre: "Nom ou verbe : les mêmes lettres, pas la même règle",
      texte: [
        "« une élève » et « des élèves » : c’est un nom, le -s est la marque du pluriel.",
        "« il élève » et « ils élèvent » : c’est un verbe, le -nt est la marque de la 3e personne du pluriel.",
        "Le même mot écrit peut être un nom ou un verbe. Ce qui décide, c’est ce qui se trouve devant : un déterminant annonce un nom, un pronom sujet annonce un verbe.",
      ],
      regle: "Devant le mot : un déterminant → c’est un nom. Un pronom sujet → c’est un verbe.",
    },
  ],
  exemples: [
    {
      enonce: "Complète : « Le panier de pommes … sur la table. » (être au présent)",
      etapes: [
        "Je cherche le sujet : qui est-ce qui est sur la table ? Le panier.",
        "Le noyau du groupe sujet est « panier », singulier — « de pommes » n’est qu’un complément du nom.",
        "Donc le verbe est au singulier : est.",
      ],
      resultat: "Le panier de pommes est sur la table.",
    },
  ],
  exercices: [
    q("f-p3-av-1", "Complète : « Le bruit des vagues … le bébé. »", ["berce", "bercent"], "berce", "Qu’est-ce qui berce le bébé ? Le bruit — un seul. « Des vagues » n’est qu’un complément du nom."),
    q("f-p3-av-2", "Complète : « Le sac de billes … troué. »", ["est", "sont"], "est", "Qu’est-ce qui est troué ? Le sac, un seul. « De billes » n’est qu’un complément du nom : le noyau commande, pas le mot le plus proche du verbe."),
    q("f-p3-av-3", "Complète : « Derrière les rochers … un petit crabe. »", ["se cachait", "se cachaient"], "se cachait", "Qui est-ce qui se cachait ? Un petit crabe : le sujet est derrière le verbe, et il est au singulier."),
    q("f-p3-av-4", "Complète : « Le vent et la pluie … les volets. »", ["secoue", "secouent"], "secouent", "Deux sujets, le vent et la pluie : on peut les remplacer par « ils ». Le verbe est donc au pluriel."),
    q("f-p3-av-5", "Complète : « Toi et ta cousine … le goûter. »", ["prépares", "préparez", "préparent"], "préparez", "« Toi et ta cousine » équivaut à « vous ». Dès qu’il y a « toi » sans « moi », c’est vous : vous préparez."),
    q("f-p3-av-6", "Complète : « Lina et moi … le train de midi. »", ["prend", "prenons", "prennent"], "prenons", "« Lina et moi », c’est « nous » : dès qu’il y a « moi », le sujet équivaut à « nous ». Nous prenons."),
    q("f-p3-av-7", "Dans « des élèves », le -s est…", ["la marque du pluriel d’un nom", "la marque d’un verbe"], "la marque du pluriel d’un nom", "« Des » est un déterminant : il annonce un nom. Pour un verbe, ce serait « ils élèvent », avec -nt."),
    q("f-p3-av-8", "Comment savoir si « élève » est un nom ou un verbe ?", ["en regardant ce qui est devant", "en comptant les lettres", "c’est impossible"], "en regardant ce qui est devant", "Un déterminant annonce un nom (une élève), un pronom sujet annonce un verbe (il élève)."),
  ],
};

const synonymes: Lecon = {
  code: "f-p3-synonymes",
  matiere: "francais",
  periode: 3,
  titre: "Synonymes et contraires",
  reference:
    "Comprendre et utiliser les notions de synonymie et d’antonymie ; établir des relations sémantiques entre les mots ; réemployer le vocabulaire étudié à l’oral et à l’écrit.",
  minutes: 25,
  cours: [
    {
      texte: [
        "Deux mots peuvent dire à peu près la même chose, ou exactement le contraire. Savoir les manier, c’est pouvoir écrire sans se répéter et dire précisément ce qu’on pense.",
      ],
    },
    {
      titre: "Les synonymes",
      texte: [
        "Un **synonyme** est un mot de sens proche : joyeux / gai / enjoué ; grand / vaste / immense ; maison / demeure / logement.",
        "Ils ne sont jamais parfaitement interchangeables. « Immense » est plus fort que « grand ». « Demeure » est plus soutenu que « maison ».",
        "Et un synonyme garde la même nature : le synonyme d’un nom est un nom, celui d’un verbe est un verbe.",
      ],
      regle:
        "Un synonyme dit à peu près la même chose, dans la même classe de mots, mais avec une nuance ou un niveau de langue différent.",
    },
    {
      titre: "Les contraires",
      texte: [
        "Un **antonyme** est un mot de sens opposé : chaud / froid ; rapide / lent ; monter / descendre ; jour / nuit.",
        "Parfois on fabrique le contraire avec un préfixe : connu / inconnu ; heureux / malheureux ; faire / défaire.",
        "Mais attention : tous les mots n’ont pas de contraire. « Table » n’en a pas.",
      ],
      regle: "Pour beaucoup d’adjectifs, le contraire se fabrique avec dé-, mal-, im- ou in-.",
    },
    {
      titre: "À quoi ça sert vraiment",
      texte: [
        "À ne pas répéter le même mot dans un texte.",
        "À être précis : entre « il fait froid » et « il fait glacial », ce n’est pas la même chose.",
        "À comprendre un mot inconnu : si la phrase dit « il n’était pas triste, au contraire il était **allègre** », le contraire annoncé te renseigne.",
      ],
    },
  ],
  exemples: [
    {
      enonce: "Trouve un synonyme et un contraire de « rapide ».",
      etapes: [
        "Synonyme : véloce, vif, prompt. « Vif » est le plus courant.",
        "Contraire : lent.",
        "Les deux sont des adjectifs, comme « rapide » : un synonyme garde la nature du mot.",
      ],
      resultat: "synonyme : vif · contraire : lent",
    },
  ],
  exercices: [
    e("f-p3-sy-1", "Donne le contraire de « lourd ».", "léger", "Lourd et léger sont des antonymes : des mots de sens opposé."),
    e("f-p3-sy-2", "Donne le contraire de « ouvert ».", "fermé", "Ouvert et fermé s’opposent. Tous deux sont des adjectifs : une porte ouverte, une porte fermée."),
    q("f-p3-sy-3", "Quel mot a presque le même sens que « malin » ?", ["timide", "rusé", "bavard"], "rusé", "Malin et rusé sont synonymes : les deux parlent de quelqu’un qui trouve des astuces. Timide et bavard disent autre chose."),
    e("f-p3-sy-4", "Quel verbe, formé avec un préfixe, dit le contraire de « plier » ?", "déplier", "Le préfixe dé- inverse l’action : plier / déplier, monter / démonter."),
    q("f-p3-sy-5", "Un synonyme garde-t-il la même nature que le mot de départ ?", ["oui", "non"], "oui", "Le synonyme d’un nom est un nom, celui d’un verbe un verbe. On ne remplace pas un verbe par un adjectif."),
    q("f-p3-sy-6", "Entre « grand » et « immense », quelle est la différence ?", ["immense est plus fort", "ils sont identiques", "immense est un nom"], "immense est plus fort", "Les synonymes ne sont jamais parfaitement interchangeables : ils portent des nuances."),
    e("f-p3-sy-7", "Donne le contraire de « entrer ».", "sortir", "Entrer et sortir sont des verbes de sens opposé."),
    q("f-p3-sy-8", "Tous les mots ont-ils un contraire ?", ["oui", "non"], "non", "« Table » ou « crayon » n’ont pas de contraire. Ce sont surtout les adjectifs et les verbes d’action qui en ont."),
  ],
};

const dialogue: Lecon = {
  code: "f-p3-dialogue",
  matiere: "francais",
  periode: 3,
  titre: "Le dialogue dans un récit",
  reference:
    "Exercer sa vigilance quant au respect des codes de l’écrit ; produire des écrits variés : raconter ; utiliser les signes du discours rapporté.",
  minutes: 25,
  cours: [
    {
      texte: [
        "Quand des personnages parlent dans un récit, on ne peut pas écrire leurs paroles comme le reste du texte : il faut montrer que c’est quelqu’un qui parle. Cela s’écrit avec des signes précis.",
      ],
    },
    {
      titre: "Les signes",
      texte: [
        "Les **guillemets** ouvrent et ferment les paroles : « Je viens. »",
        "Le **tiret** marque un changement de personne qui parle, à la ligne : chaque fois que quelqu’un d’autre prend la parole, on va à la ligne et on met un tiret.",
        "Les **deux-points** annoncent qu’on va rapporter des paroles : « Il a dit : … »",
      ],
      regle:
        "Un changement de personne qui parle = une nouvelle ligne et un tiret. C’est ce qui permet de suivre sans se perdre.",
    },
    {
      titre: "Les verbes de parole",
      texte: [
        "« Dire » marche toujours, mais il s’use vite. Le français en a beaucoup d’autres, et chacun ajoute une information : demander, répondre, murmurer, crier, expliquer, protester, chuchoter, s’étonner.",
        "« — Tu viens ? **murmure**-t-il. » On apprend quelque chose de plus qu’avec « dit-il ».",
        "Quand le verbe de parole est après les paroles, on inverse le sujet : « dit-il », « répond Léa ». Entre le verbe et « il », on met un trait d’union — et un t entre deux voyelles : « murmure-t-il ».",
      ],
      regle:
        "Varie les verbes de parole : ils portent du sens. Et derrière les paroles, le sujet s’inverse.",
    },
    {
      titre: "Ce que le dialogue apporte au récit",
      texte: [
        "Il fait entendre les personnages au lieu de les décrire. « Il était en colère » se raconte ; « — Ça suffit ! » se voit.",
        "Mais un dialogue sans rien autour devient une liste. On alterne : des paroles, puis ce que font les personnages.",
      ],
    },
  ],
  exemples: [
    {
      enonce: "Écris correctement un échange où Léa demande l’heure et Tom répond qu’il est midi.",
      etapes: [
        "Première réplique, avec un tiret et un verbe de parole inversé.",
        "Changement de personne : nouvelle ligne, nouveau tiret.",
        "Le point d’interrogation est à l’intérieur des paroles, puisque c’est Léa qui questionne.",
      ],
      resultat: "— Quelle heure est-il ? demande Léa.\n— Il est midi, répond Tom.",
    },
  ],
  exercices: [
    q("f-p3-di-1", "À quoi servent les guillemets dans un récit ?", ["à montrer que quelqu’un parle", "à séparer les phrases", "à indiquer un titre"], "à montrer que quelqu’un parle", "Ils ouvrent et ferment les paroles rapportées."),
    q("f-p3-di-2", "Que fait-on quand une autre personne prend la parole ?", ["on va à la ligne avec un tiret", "on met une virgule", "on continue la phrase"], "on va à la ligne avec un tiret", "C’est ce qui permet de suivre qui parle sans se perdre."),
    q("f-p3-di-3", "Quel signe annonce des paroles rapportées ?", ["les deux-points", "le point-virgule", "les parenthèses"], "les deux-points", "« Il a dit : … » Les deux-points annoncent ce qui vient."),
    q("f-p3-di-4", "Lequel de ces verbes n’est pas un verbe de parole ?", ["murmurer", "protester", "courir"], "courir", "Murmurer et protester rapportent des paroles ; courir est une action."),
    e("f-p3-di-5", "Dans « — Tu viens ? demande Léa », quel est le verbe de parole ?", "demande", "Il rapporte le fait que Léa parle, et il précise qu’elle pose une question. Le sujet « Léa » est passé derrière le verbe."),
    q("f-p3-di-6", "Quand le verbe de parole vient après les paroles, que se passe-t-il ?", ["le sujet s’inverse", "rien ne change", "on met un point"], "le sujet s’inverse", "On écrit « dit-il », « répond Léa » : le sujet passe derrière le verbe."),
    q("f-p3-di-7", "Pourquoi varier les verbes de parole ?", ["ils portent du sens", "pour faire plus long", "c’est obligatoire"], "ils portent du sens", "« Murmura » et « cria » ne disent pas la même chose que « dit »."),
    q("f-p3-di-8", "Qu’apporte un dialogue à un récit ?", ["il fait entendre les personnages", "il raccourcit le texte", "il remplace la description"], "il fait entendre les personnages", "« — Ça suffit ! » montre la colère au lieu de la raconter."),
  ],
};

const genresTextes: Lecon = {
  code: "f-p3-genres",
  matiere: "francais",
  periode: 3,
  titre: "Reconnaître un poème, une pièce, un récit",
  reference:
    "Distinguer, par la mise en page et les caractéristiques d’écriture spécifiques, un extrait de théâtre, un poème, un texte narratif ; identifier les différents genres représentés et repérer leurs caractéristiques majeures.",
  minutes: 25,
  cours: [
    {
      texte: [
        "Avant même de lire un texte, on peut souvent dire de quelle sorte il est — rien qu’en regardant la page. La mise en page est un renseignement.",
      ],
    },
    {
      titre: "Le récit",
      texte: [
        "Le texte occupe toute la largeur, en paragraphes. Il raconte une histoire, avec des personnages, un lieu, un moment.",
        "On y trouve souvent des verbes au passé — passé simple ou imparfait — et un narrateur qui raconte.",
        "Les dialogues, quand il y en a, sont insérés dans le récit avec des tirets.",
      ],
    },
    {
      titre: "Le poème",
      texte: [
        "Les lignes s’arrêtent avant le bord de la page : ce sont des **vers**. Ils sont groupés en **strophes**, séparées par un blanc.",
        "Souvent les vers **riment** : les derniers sons se répondent. Mais il existe des poèmes sans rime.",
        "Le poème joue avec les sons, les images, le rythme. Il ne raconte pas forcément une histoire.",
      ],
      regle: "Des lignes qui s’arrêtent tôt et des blancs entre des groupes : c’est un poème.",
    },
    {
      titre: "Le théâtre",
      texte: [
        "Chaque réplique commence par le **nom du personnage**, souvent suivi de deux-points. Ce nom n’est pas prononcé : il indique qui parle.",
        "Entre les répliques, on trouve parfois des **didascalies** : des indications en italique qui disent ce que font les personnages, ou comment ils parlent. Elles ne sont pas dites non plus.",
        "Un texte de théâtre est écrit pour être joué, pas lu silencieusement.",
      ],
      regle:
        "Le nom du personnage devant chaque réplique est le signe le plus sûr : c’est du théâtre.",
    },
  ],
  exemples: [
    {
      enonce: "Un texte est fait de lignes courtes, groupées par quatre, avec un blanc entre les groupes. Qu’est-ce que c’est ?",
      etapes: [
        "Les lignes courtes qui s’arrêtent avant le bord : ce sont des vers.",
        "Les groupes séparés par des blancs : ce sont des strophes.",
        "Vers et strophes désignent un poème.",
      ],
      resultat: "un poème",
    },
  ],
  exercices: [
    q("f-p3-ge-1", "Un texte fait de lignes courtes groupées en strophes est…", ["un poème", "un récit", "une pièce de théâtre"], "un poème", "Les vers s’arrêtent avant le bord de la page, et les strophes sont séparées par des blancs."),
    q("f-p3-ge-2", "Dans un texte de théâtre, qu’y a-t-il devant chaque réplique ?", ["le nom du personnage", "un tiret", "des guillemets"], "le nom du personnage", "Il indique qui parle et n’est pas prononcé."),
    e("f-p3-ge-3", "Comment appelle-t-on une ligne de poème ?", "un vers", "Une ligne de poème s’appelle un vers. Plusieurs vers groupés forment une strophe."),
    e("f-p3-ge-4", "Comment appelle-t-on un groupe de vers séparé des autres par un blanc ?", "une strophe", "Les strophes sont les paragraphes du poème."),
    q("f-p3-ge-5", "Comment appelle-t-on les indications de jeu dans une pièce de théâtre ?", ["des didascalies", "des strophes", "des répliques"], "des didascalies", "Elles disent ce que font les personnages ou comment ils parlent, et elles ne sont pas prononcées."),
    q("f-p3-ge-6", "Tous les poèmes riment-ils ?", ["oui", "non"], "non", "Beaucoup riment, mais il existe des poèmes sans rime. Ce qui fait le poème, c’est d’abord la forme des vers."),
    q("f-p3-ge-7", "Un texte en paragraphes qui raconte une histoire avec des personnages est…", ["un récit", "un poème", "une pièce"], "un récit", "Il occupe toute la largeur de la page et un narrateur raconte."),
    q("f-p3-ge-8", "Un texte de théâtre est écrit pour être…", ["joué", "lu silencieusement", "chanté"], "joué", "C’est pourquoi il porte des noms de personnages et des indications de jeu."),
  ],
};

/* ================================================================== */
/* PÉRIODE 4 — mars, avril                                             */
/* ================================================================== */

const radicalVariations: Lecon = {
  code: "f-p4-radical",
  matiere: "francais",
  periode: 4,
  titre: "Les verbes qui changent de radical",
  reference:
    "Mettre en évidence les variations du radical pour certains verbes du premier groupe : verbes dont l’avant-dernière syllabe contient un e muet ou un é, les verbes en -yer, en -eler et -eter, en -cer, -ger.",
  minutes: 25,
  cours: [
    {
      texte: [
        "Les verbes du premier groupe sont réguliers dans leurs terminaisons. Mais certains changent leur **radical** — et ces changements ne sont pas des caprices : ils suivent le son. Tantôt l’écriture change pour garder un son, tantôt pour montrer qu’il a changé.",
      ],
    },
    {
      titre: "Les verbes en -cer et -ger : garder le son",
      texte: [
        "En français, le c se prononce [s] devant e et i, mais [k] devant a, o, u. Pareil pour le g.",
        "Donc « nous lançons » prend une cédille : sans elle, on lirait « lankons ».",
        "Et « nous mangeons » garde son e : sans lui, on lirait « mangons » avec un g dur.",
        "Devant i, plus besoin : « nous lancions », « nous mangions ».",
      ],
      regle:
        "Devant a et o : cédille pour les verbes en -cer, e conservé pour les verbes en -ger. Devant i et e : rien.",
    },
    {
      titre: "Les verbes en -yer",
      texte: [
        "Le y devient i devant un e muet : nettoyer → je nettoie, mais nous nettoyons.",
        "Pareil pour payer (je paie), essuyer (j’essuie), appuyer (j’appuie).",
      ],
    },
    {
      titre: "Les verbes en -eler et -eter",
      texte: [
        "La plupart doublent la consonne devant un e muet : appeler → j’appelle ; jeter → je jette.",
        "Mais nous appelons, nous jetons — sans doublement, parce que la syllabe se prononce autrement.",
        "Quelques-uns prennent un accent grave au lieu de doubler : acheter → j’achète ; geler → il gèle.",
      ],
      regle:
        "Écoute la voyelle : quand elle devient ouverte (comme dans « belle »), l’écriture change — doublement ou accent grave.",
    },
    {
      titre: "Le e muet et le é",
      texte: [
        "Certains verbes ont un é qui devient è : espérer → j’espère, mais nous espérons. Céder → je cède.",
        "Là encore, c’est le son qui commande : quand la syllabe est accentuée, on écrit è.",
      ],
    },
  ],
  exemples: [
    {
      enonce: "Conjugue « appeler » au présent avec « je », puis avec « nous ». Explique la différence.",
      etapes: [
        "Avec je : la dernière syllabe est accentuée, le son devient ouvert. On double le l : j’appelle.",
        "Avec nous : la terminaison -ons prend l’accent, la syllabe du radical redevient sourde. Pas de doublement : nous appelons.",
        "Le changement d’écriture suit le changement de son.",
      ],
      resultat: "j’appelle · nous appelons",
    },
  ],
  exercices: [
    q("f-p4-rd-1", "Complète au présent : « Nous … le tableau à la fin de la journée. » (effacer)", ["effacons", "effaçons", "effaceons"], "effaçons", "La cédille garde le son [s] devant le o. Sans elle, on lirait « effakons ». Un e ajouté devant -ons, lui, sert aux verbes en -ger."),
    e("f-p4-rd-2", "Au présent, avec « nous », comment s’écrit le verbe « partager » ?", "nous partageons", "Le e garde le son doux du g devant le o. Sans lui, on lirait « partagons », avec un g dur."),
    e("f-p4-rd-3", "Écris « voyager » à l’imparfait, avec « nous ».", "nous voyagions", "Devant le i, plus besoin du e : le g est déjà doux. Nous voyageons au présent, mais nous voyagions à l’imparfait."),
    e("f-p4-rd-4", "Avec « il », écris « envoyer » au présent.", "il envoie", "Le y devient i devant un e muet : il envoie. Mais on garde le y avec nous : nous envoyons."),
    e("f-p4-rd-5", "Écris le verbe « s’appeler » au présent : « Mes deux lapins … Caramel et Noisette. » Réponds par les mots manquants.", "s’appellent", "« Mes deux lapins », c’est « ils ». S’appeler se conjugue comme appeler : le l double devant un e muet, ils s’appellent. Avec nous, un seul l : nous nous appelons."),
    e("f-p4-rd-6", "Mets « nous rejetons » à la 3e personne du singulier, avec « elle ».", "elle rejette", "Avec nous, un seul t : nous rejetons. Avec elle, le t double devant le e muet, comme dans jeter : elle rejette."),
    q("f-p4-rd-7", "Quelle forme du verbe « modeler » complète « Je … un bonhomme en pâte » ?", ["modelle", "modèle", "modele"], "modèle", "Modeler prend un accent grave au lieu de doubler la consonne, comme acheter et geler : je modèle. Sans accent, on ne lirait pas le son « è »."),
    q("f-p4-rd-8", "Laquelle de ces phrases est bien écrite ?", ["Je séche mes cheveux.", "Je seche mes cheveux.", "Je sèche mes cheveux."], "Je sèche mes cheveux.", "Le é de sécher devient è quand la syllabe est accentuée : on entend « è » comme dans « mère ». Je sèche. Mais nous séchons garde le é."),
  ],
};

const chaineAccords: Lecon = {
  code: "f-p4-chaine",
  matiere: "francais",
  periode: 4,
  titre: "Transformer une phrase sans casser les accords",
  reference:
    "Transformer le genre et le nombre de groupes nominaux simples isolés puis inscrits dans des phrases simples, en effectuant toutes les variations nécessaires ; justifier les variations morphologiques effectuées.",
  minutes: 30,
  cours: [
    {
      texte: [
        "Changer un seul mot dans une phrase en oblige souvent plusieurs autres à changer aussi. C’est ce qu’on appelle la chaîne d’accords, et c’est l’exercice le plus utile de toute l’orthographe.",
      ],
    },
    {
      titre: "Une transformation entraîne les autres",
      texte: [
        "« Un prince courageux quitte son royaume. »",
        "Je mets au féminin : prince → princesse. Mais alors un → une, courageux → courageuse. Et « son royaume » ne change pas, parce que le royaume reste masculin — ce qui compte pour le possessif, c’est l’objet possédé, pas le possesseur.",
        "Résultat : « Une princesse courageuse quitte son royaume. »",
      ],
      regle:
        "Attention au possessif : dans « son royaume », le « son » s’accorde avec **royaume**, pas avec celui qui le possède.",
    },
    {
      titre: "Au pluriel, le verbe suit aussi",
      texte: [
        "« Le petit chat noir dort sur le canapé. » → « Les petits chats noirs dorment sur le canapé. »",
        "Cinq mots changent : le déterminant, le nom, les deux adjectifs — et le verbe, parce que le sujet est devenu pluriel.",
        "« Sur le canapé » ne change pas : ce n’est pas dans le groupe sujet, rien ne l’oblige.",
      ],
    },
    {
      titre: "La méthode : souligner d’abord",
      texte: [
        "Avant de transformer, souligne le groupe sujet et entoure le verbe. Tu sauras exactement ce qui doit suivre.",
        "Puis transforme dans l’ordre : le noyau d’abord, puis ce qui l’accompagne, puis le verbe.",
        "Enfin, relis à voix haute. Beaucoup d’erreurs s’entendent — pas toutes, mais beaucoup.",
      ],
      regle: "Noyau, puis son groupe, puis le verbe. Et on relit.",
    },
  ],
  exemples: [
    {
      enonce: "Mets au pluriel : « La grande fenêtre était ouverte. »",
      etapes: [
        "Le noyau est « fenêtre », féminin singulier → fenêtres.",
        "Le déterminant suit : la → les.",
        "L’adjectif épithète suit : grande → grandes.",
        "Le verbe suit le sujet devenu pluriel : était → étaient.",
        "Le participe « ouverte » est employé avec être : il s’accorde aussi → ouvertes.",
      ],
      resultat: "Les grandes fenêtres étaient ouvertes.",
    },
  ],
  exercices: [
    e("f-p4-ch-1", "Mets au féminin : « un lion blanc ».", "une lionne blanche", "Le noyau d’abord : lion devient lionne, avec deux n. Alors un devient une, et blanc devient blanche."),
    e("f-p4-ch-2", "Mets au pluriel : « la petite fleur jaune ».", "les petites fleurs jaunes", "Le noyau d’abord : fleur devient fleurs. Puis le déterminant, la → les, et les deux adjectifs, qui prennent un -s : quatre mots changent."),
    q("f-p4-ch-3", "Dans « une princesse courageuse quitte son royaume », pourquoi écrit-on « son » et non « sa » ?", ["parce que royaume est masculin", "parce que la princesse est féminine", "c’est une erreur"], "parce que royaume est masculin", "Le déterminant possessif s’accorde avec l’objet possédé, pas avec celui qui le possède."),
    q("f-p4-ch-4", "Mets au pluriel : « Le petit chat était endormi. »", ["Les petits chats étaient endormis.", "Les petit chats était endormi.", "Les petits chats était endormis."], "Les petits chats étaient endormis.", "Le nom, le déterminant, l’adjectif, le verbe et le participe employé avec être : tout suit."),
    e("f-p4-ch-5", "Mets au singulier : « Mes vieux bocaux sont vides. » Réponds par la phrase entière.", "mon vieux bocal est vide", "Bocaux redevient bocal, mes devient mon, sont devient est, vides devient vide. Vieux ne change pas : il finit déjà par -x."),
    q("f-p4-ch-6", "Quand on met le sujet au pluriel, le verbe change-t-il ?", ["oui", "non", "seulement au passé"], "oui", "Le verbe s’accorde avec son sujet : s’il devient pluriel, le verbe aussi."),
    q("f-p4-ch-7", "Dans « Les chats dorment sur le canapé », faut-il accorder « canapé » ?", ["non", "oui"], "non", "« Sur le canapé » n’est pas dans le groupe sujet : rien ne l’oblige à changer."),
    q("f-p4-ch-8", "Par quoi commence-t-on pour transformer un groupe nominal ?", ["par le nom noyau", "par l’adjectif", "par le verbe"], "par le nom noyau", "C’est lui qui commande. Une fois qu’il est transformé, le reste suit."),
  ],
};

const polysemie: Lecon = {
  code: "f-p4-polysemie",
  matiere: "francais",
  periode: 4,
  titre: "Les mots à plusieurs sens",
  reference:
    "À l’oral et à l’écrit, utiliser à bon escient les mots polysémiques dans différents contextes disciplinaires ; préciser le sens d’un mot d’après son contexte.",
  minutes: 25,
  cours: [
    {
      texte: [
        "Beaucoup de mots français ont plusieurs sens. On dit qu’ils sont **polysémiques** — « poly » veut dire plusieurs, « sémie » veut dire sens.",
        "Ce n’est pas un défaut de la langue : c’est ce qui lui permet de dire beaucoup avec peu de mots. Mais ça demande de faire attention au contexte.",
      ],
    },
    {
      titre: "Le même mot, des sens différents",
      texte: [
        "Une **opération** : en mathématiques, un calcul ; à l’hôpital, une intervention ; à l’armée, une action militaire.",
        "Une **pièce** : une salle, un morceau de monnaie, un texte de théâtre, un élément de machine.",
        "Un **sommet** : le haut d’une montagne, ou le coin d’une figure géométrique.",
        "Un **volume** : un livre, ou l’espace occupé, ou la force d’un son.",
      ],
      regle:
        "C’est la phrase entière qui dit lequel des sens est en jeu. Un mot seul ne suffit jamais.",
    },
    {
      titre: "Le sens propre et le sens figuré",
      texte: [
        "Le **sens propre** est le sens concret, premier : « Le soleil **brille**. »",
        "Le **sens figuré** est une image : « Il **brille** en mathématiques. » Personne n’émet de lumière.",
        "« Avoir la tête dans les nuages », « dévorer un livre », « un cœur de pierre » : ce sont des images, et on les comprend sans les prendre au mot.",
      ],
      regle: "Sens propre = le sens concret. Sens figuré = une image.",
    },
    {
      titre: "Le mot spécialisé",
      texte: [
        "Chaque matière a ses mots, et parfois elle prend un mot courant pour lui donner un sens précis.",
        "En géométrie, un « sommet » n’est pas une montagne. En grammaire, un « sujet » n’est pas un thème de conversation. En sciences, une « masse » n’est pas une foule.",
        "Quand tu rencontres un mot connu dans une leçon et que le sens ne colle pas, c’est peut-être qu’il a ici un sens spécialisé.",
      ],
    },
  ],
  exemples: [
    {
      enonce: "Donne deux sens du mot « pièce », et dis lequel est en jeu dans « Il manque une pièce au puzzle. »",
      etapes: [
        "Premier sens : une salle d’une maison. Deuxième : un morceau, un élément.",
        "Il y en a d’autres : une pièce de monnaie, une pièce de théâtre.",
        "Dans « une pièce au puzzle », c’est le sens d’élément : c’est le contexte — le puzzle — qui tranche.",
      ],
      resultat: "une salle, un élément (et aussi monnaie, théâtre) · ici : un élément",
    },
  ],
  exercices: [
    q("f-p4-po-1", "Que veut dire « polysémique » ?", ["qui a plusieurs sens", "qui a plusieurs syllabes", "qui a plusieurs orthographes"], "qui a plusieurs sens", "« Poly » veut dire plusieurs et « sémie » veut dire sens."),
    q("f-p4-po-2", "Dans « Avant de partir, Léo se coiffe devant la glace », « glace » veut dire…", ["un dessert", "un miroir", "de l’eau gelée"], "un miroir", "C’est le contexte qui tranche entre les sens possibles : pour se coiffer, on se regarde dans un miroir."),
    q("f-p4-po-3", "En géométrie, un « sommet » est…", ["le coin d’une figure", "le haut d’une montagne", "un chef d’État"], "le coin d’une figure", "Le mot a ici un sens spécialisé, différent de son sens courant."),
    q("f-p4-po-4", "« Ce film a touché tous les spectateurs » : ce sens est…", ["figuré", "propre"], "figuré", "Personne n’a posé la main sur les spectateurs : c’est une image pour dire que le film les a émus."),
    q("f-p4-po-5", "« Le vase est tombé de l’étagère » : ce sens est…", ["figuré", "propre"], "propre", "Le vase tombe vraiment, de haut en bas : c’est le sens concret et premier du verbe tomber."),
    q("f-p4-po-6", "Que veut dire « dévorer un livre » ?", ["le lire avec passion", "le manger", "le déchirer"], "le lire avec passion", "C’est une image, donc un sens figuré. Personne ne mange vraiment le livre."),
    q("f-p4-po-7", "Comment savoir quel sens d’un mot est en jeu ?", ["en lisant la phrase entière", "en regardant sa longueur", "en cherchant sa famille"], "en lisant la phrase entière", "Un mot seul ne dit jamais lequel de ses sens est employé. C’est le contexte qui tranche."),
    q("f-p4-po-8", "En grammaire, le mot « sujet » désigne…", ["celui qui fait l’action", "le thème d’une conversation", "un habitant d’un royaume"], "celui qui fait l’action", "C’est un sens spécialisé. Les deux autres sens existent, mais pas en grammaire."),
  ],
};

const heros: Lecon = {
  code: "f-p4-heros",
  matiere: "francais",
  periode: 4,
  titre: "Qu’est-ce qu’un héros ?",
  reference:
    "Entrée littéraire « Découvrir des héroïnes, des héros » : réfléchir sur ce qui constitue une héroïne ou un héros à travers des œuvres de la littérature patrimoniale et de jeunesse ; comprendre les motivations des personnages, percevoir leurs fragilités.",
  minutes: 30,
  cours: [
    {
      texte: [
        "On croit souvent qu’un héros est quelqu’un de très fort qui gagne à la fin. La littérature dit autre chose, et c’est plus intéressant.",
      ],
    },
    {
      titre: "Ce qui fait un héros",
      texte: [
        "Un **but** : il veut quelque chose, et il y tient. Sans désir, pas d’histoire.",
        "Un **obstacle** : quelque chose l’empêche. Un monstre, un roi, une injustice, sa propre peur.",
        "Un **choix** : à un moment, il décide. C’est ce choix, et pas sa force, qui le rend héros.",
        "Ulysse veut rentrer chez lui, ça lui prend dix ans, et ce qui le sauve est sa ruse — pas ses muscles.",
      ],
      regle:
        "Ce qui fait un héros, c’est un choix difficile — pas la force, pas la victoire.",
    },
    {
      titre: "Les héros ont des faiblesses",
      texte: [
        "Achille est invincible sauf au talon. Ulysse est trop curieux et ça lui coûte cher. Le petit Poucet est le plus petit de tous.",
        "Ces fragilités ne sont pas des erreurs de l’auteur : elles rendent le personnage possible à comprendre. Un personnage sans faiblesse n’intéresse personne, parce qu’on ne peut pas se mettre à sa place.",
      ],
      regle: "La faiblesse d’un héros est ce qui permet de s’y reconnaître.",
    },
    {
      titre: "Des héroïnes",
      texte: [
        "Antigone désobéit à un roi parce qu’elle juge sa loi injuste. Jeanne d’Arc quitte son village à dix-sept ans pour aller parler au roi. Dans la littérature de jeunesse, Fifi Brindacier, Matilda, Sophie de la comtesse de Ségur.",
        "Leur courage ne prend pas toujours la forme d’un combat : parfois il consiste à dire non, ou à ne pas se laisser faire.",
      ],
    },
    {
      titre: "Les héros ordinaires",
      texte: [
        "Beaucoup de récits parlent de gens sans pouvoir particulier qui font quelque chose de difficile : témoigner, aider, tenir bon, refuser.",
        "C’est souvent le plus courageux, parce que rien ne les protège.",
      ],
    },
  ],
  exemples: [
    {
      enonce:
        "« Le plus petit des sept frères ramassa des cailloux blancs pour semer le chemin. » Qu’est-ce qui fait de lui un héros ?",
      etapes: [
        "Son but : ramener ses frères à la maison.",
        "Son obstacle : la forêt, l’abandon, sa taille.",
        "Son choix : agir au lieu d’attendre, avec ce qu’il a sous la main.",
        "Et sa faiblesse — être le plus petit — est justement ce qui rend son acte remarquable.",
      ],
      resultat: "son choix d’agir, malgré sa fragilité",
    },
  ],
  exercices: [
    q("f-p4-he-1", "Qu’est-ce qui fait surtout un héros, d’après la leçon ?", ["un choix difficile", "une grande force", "une victoire"], "un choix difficile", "C’est le moment où il décide, pas sa puissance, qui le rend héros."),
    q("f-p4-he-2", "Qu’est-ce qui sauve Ulysse dans ses aventures ?", ["sa ruse", "sa force", "sa richesse"], "sa ruse", "Ulysse est célèbre pour son intelligence et ses stratagèmes, pas pour ses muscles."),
    q("f-p4-he-3", "Pourquoi les héros ont-ils des faiblesses ?", ["pour qu’on puisse s’y reconnaître", "par erreur de l’auteur", "pour rendre l’histoire plus courte"], "pour qu’on puisse s’y reconnaître", "Un personnage sans faiblesse n’intéresse personne : on ne peut pas se mettre à sa place."),
    q("f-p4-he-4", "Quelle est la faiblesse d’Achille ?", ["son talon", "ses yeux", "sa mémoire"], "son talon", "Il est invulnérable partout sauf au talon — d’où l’expression « le talon d’Achille »."),
    q("f-p4-he-5", "Pourquoi Antigone désobéit-elle au roi ?", ["elle juge la loi injuste", "elle veut le pouvoir", "elle a peur"], "elle juge la loi injuste", "Son courage consiste à dire non, pas à combattre."),
    q("f-p4-he-6", "Un héros a-t-il forcément des pouvoirs ?", ["non", "oui"], "non", "Beaucoup de récits parlent de gens ordinaires qui font quelque chose de difficile."),
    q("f-p4-he-7", "Dans « Le Petit Poucet », qu’est-ce qui rend son acte remarquable ?", ["il est le plus petit", "il est le plus fort", "il est le plus vieux"], "il est le plus petit", "Sa fragilité est justement ce qui donne du poids à ce qu’il réussit."),
    q("f-p4-he-8", "De quoi un héros a-t-il besoin pour qu’il y ait une histoire ?", ["d’un but et d’un obstacle", "d’une épée", "d’un ami"], "d’un but et d’un obstacle", "Sans désir et sans empêchement, il n’y a rien à raconter."),
  ],
};

const poesie: Lecon = {
  code: "f-p4-poesie",
  matiere: "francais",
  periode: 4,
  titre: "Le goût des mots : la poésie",
  reference:
    "Entrée littéraire « Savourer le goût des mots, imaginer et créer en poésie » : jouer avec les sonorités, les images et le rythme ; distinguer un poème par sa mise en page et ses caractéristiques.",
  minutes: 25,
  cours: [
    {
      texte: [
        "Un poème ne sert pas d’abord à raconter. Il sert à faire entendre et à faire voir. Ce qui compte autant que le sens, c’est le son et l’image.",
      ],
    },
    {
      titre: "Les sons",
      texte: [
        "La **rime** fait se répondre la fin des vers : rose / arrose, nuit / bruit.",
        "L’**allitération** répète une consonne : « Pour qui sont ces serpents qui sifflent sur nos têtes ? » Les s sifflent vraiment — le son imite la chose.",
        "Le **rythme** vient du nombre de syllabes. Un vers de huit syllabes ne sonne pas comme un vers de douze.",
      ],
      regle: "Un poème se lit à voix haute. Sinon, la moitié du travail du poète reste invisible.",
    },
    {
      titre: "Les images",
      texte: [
        "La **comparaison** rapproche deux choses avec un petit mot : « blanc **comme** neige », « il dort **tel** un loir ».",
        "La **métaphore** fait la même chose sans le mot de liaison : « une pluie de fléchettes » pour parler d’une averse, « un océan de blé » pour un champ.",
        "Une image ne se prend pas au mot. Elle sert à faire voir autrement.",
      ],
      regle:
        "Comparaison : il y a « comme ». Métaphore : il n’y en a pas, et c’est au lecteur de faire le saut.",
    },
    {
      titre: "Jouer",
      texte: [
        "Le **calligramme** dessine avec les mots : un poème en forme d’oiseau, de pluie, de cœur.",
        "L’**acrostiche** cache un mot dans les premières lettres de chaque vers.",
        "Ce ne sont pas des amusements de côté : les poètes font ça depuis très longtemps, parce que la forme fait partie du sens.",
      ],
    },
  ],
  exemples: [
    {
      enonce: "Dans « Ses cheveux étaient un océan de blé », quelle image est employée ?",
      etapes: [
        "Deux choses sont rapprochées : les cheveux et un champ de blé.",
        "Y a-t-il « comme » ou un mot de liaison ? Non.",
        "Sans mot de liaison, c’est une métaphore. Avec « comme », ce serait une comparaison.",
      ],
      resultat: "une métaphore",
    },
  ],
  exercices: [
    e("f-p4-pe-1", "Comment appelle-t-on la répétition du même son à la fin de deux vers ?", "une rime", "La rime fait se répondre la fin des vers : rose et arrose, nuit et bruit."),
    q("f-p4-pe-2", "« Blanche comme la neige » est…", ["une comparaison", "une métaphore"], "une comparaison", "Il y a le mot « comme » : c’est ce qui distingue la comparaison de la métaphore."),
    q("f-p4-pe-3", "« Un tapis de feuilles mortes » est…", ["une comparaison", "une métaphore"], "une métaphore", "Les feuilles sont rapprochées d’un tapis sans « comme » ni autre mot de liaison : le lecteur fait le rapprochement lui-même."),
    q("f-p4-pe-4", "Comment appelle-t-on un poème dont les mots dessinent une forme ?", ["un calligramme", "un acrostiche", "une strophe"], "un calligramme", "Le poème prend la forme de ce dont il parle : un oiseau, la pluie."),
    q("f-p4-pe-5", "Dans un acrostiche, où se cache le mot ?", ["dans les premières lettres des vers", "à la fin du poème", "dans le titre"], "dans les premières lettres des vers", "On lit verticalement la première lettre de chaque vers."),
    q("f-p4-pe-6", "« Ces serpents qui sifflent sur nos têtes » : quel effet de son ?", ["la répétition d’une consonne", "une rime", "un rythme lent"], "la répétition d’une consonne", "Les s répétés font entendre le sifflement : c’est une allitération."),
    q("f-p4-pe-7", "Pourquoi faut-il lire un poème à voix haute ?", ["pour entendre les sons et le rythme", "pour aller plus vite", "pour le mémoriser"], "pour entendre les sons et le rythme", "La moitié du travail du poète est dans le son : silencieusement, elle reste invisible."),
    q("f-p4-pe-8", "D’où vient le rythme d’un vers ?", ["du nombre de syllabes", "du nombre de mots", "de la longueur du papier"], "du nombre de syllabes", "Un vers de huit syllabes ne sonne pas comme un vers de douze."),
  ],
};

const documents: Lecon = {
  code: "f-p4-documents",
  matiere: "francais",
  periode: 4,
  titre: "Lire un document pour apprendre",
  reference:
    "Donner la nature et la source d’un document ; découvrir des documents composites et y repérer des informations grâce à un questionnement ; trouver dans des documents simples les réponses à des questions.",
  minutes: 25,
  cours: [
    {
      texte: [
        "On ne lit pas un documentaire comme un roman. Un roman se lit du début à la fin ; un document, on l’explore pour trouver ce qu’on cherche.",
      ],
    },
    {
      titre: "Nature et source : les deux questions d’abord",
      texte: [
        "La **nature** : de quelle sorte de document s’agit-il ? Un article, une carte, un graphique, une photographie, une affiche, une notice, une page d’encyclopédie.",
        "La **source** : d’où vient-il, qui l’a fait, et quand ? Un texte sur les dinosaures écrit en 1950 ne dit pas la même chose qu’un texte de cette année.",
        "Ces deux questions se posent **avant** de lire le contenu, parce qu’elles changent la façon de le lire.",
      ],
      regle:
        "Nature et source d’abord. Un document sans source connue est un document dont on ne sait pas quoi penser.",
    },
    {
      titre: "Le document composite",
      texte: [
        "Un document **composite** mêle plusieurs éléments : du texte, une image, une légende, un titre, un encadré, un schéma.",
        "Chacun apporte quelque chose de différent, et aucun n’est décoratif. La légende dit ce que montre l’image ; l’encadré isole une information importante ; le titre annonce.",
        "Erreur fréquente : lire le texte et sauter l’image. L’information cherchée est souvent dans la légende.",
      ],
    },
    {
      titre: "Chercher, plutôt que tout lire",
      texte: [
        "On part de la question, pas du début de la page.",
        "On repère les mots de la question dans les titres, les intertitres, les mots en gras.",
        "On lit alors seulement le passage utile — et on vérifie que ça répond bien à la question posée, pas à une question voisine.",
      ],
      regle: "Pars de la question, cherche les mots-clés, lis le passage. Pas l’inverse.",
    },
  ],
  exemples: [
    {
      enonce:
        "Tu dois trouver la hauteur de la tour Eiffel dans une page d’encyclopédie de quatre paragraphes avec une photo légendée. Comment fais-tu ?",
      etapes: [
        "Nature : une page d’encyclopédie. Source : à relever, avec la date.",
        "Je pars de la question : je cherche un nombre suivi de « m » ou « mètres ».",
        "Je regarde les mots en gras, les intertitres, et surtout la légende de la photo — les mesures y figurent souvent.",
        "Je vérifie que le nombre trouvé est bien une hauteur, pas une largeur ou une masse.",
      ],
      resultat: "chercher les mots-clés, y compris dans la légende",
    },
  ],
  exercices: [
    q("f-p4-dc-1", "Que faut-il repérer en premier dans un document ?", ["sa nature et sa source", "sa longueur", "son dernier paragraphe"], "sa nature et sa source", "Elles changent la façon de lire le contenu, donc elles se repèrent avant."),
    q("f-p4-dc-2", "« Une carte de France » : c’est la nature ou la source du document ?", ["la nature", "la source"], "la nature", "La nature dit de quelle sorte de document il s’agit. La source dirait qui l’a faite et quand."),
    q("f-p4-dc-3", "Pourquoi la date d’un document compte-t-elle ?", ["les connaissances changent", "c’est plus joli", "elle ne compte pas"], "les connaissances changent", "Un texte sur les dinosaures de 1950 ne dit pas la même chose qu’un texte d’aujourd’hui."),
    q("f-p4-dc-4", "Qu’est-ce qu’un document composite ?", ["un document qui mêle texte et images", "un document très long", "un document en plusieurs langues"], "un document qui mêle texte et images", "Texte, image, légende, encadré, schéma : chacun apporte quelque chose de différent."),
    q("f-p4-dc-5", "À quoi sert la légende d’une image ?", ["à dire ce que montre l’image", "à décorer", "à donner le titre du livre"], "à dire ce que montre l’image", "Et c’est souvent là que se trouve l’information cherchée."),
    q("f-p4-dc-6", "Par quoi commence-t-on pour chercher une information ?", ["par la question", "par le premier paragraphe", "par la conclusion"], "par la question", "On part de ce qu’on cherche, puis on repère les mots-clés dans la page."),
    q("f-p4-dc-7", "Quelle est l’erreur la plus fréquente en lisant un document composite ?", ["sauter les images", "lire trop lentement", "regarder le titre"], "sauter les images", "Beaucoup lisent le texte et ignorent l’image et sa légende, où l’information est souvent."),
    q("f-p4-dc-8", "Après avoir trouvé une information, que faut-il faire ?", ["vérifier qu’elle répond à la question", "la recopier aussitôt", "passer à la suite"], "vérifier qu’elle répond à la question", "On trouve souvent la réponse à une question voisine. Il faut relire la question."),
  ],
};

/* ================================================================== */
/* PÉRIODE 5 — mai, juin                                               */
/* ================================================================== */

const merveilleux: Lecon = {
  code: "f-p5-merveilleux",
  matiere: "francais",
  periode: 5,
  titre: "Le merveilleux et l’étrange",
  reference:
    "Entrée littéraire « Se confronter au merveilleux, à l’étrange » : découvrir des mondes imaginaires, explorer des thèmes universels comme la peur, le désir d’évasion et la curiosité pour l’inexplicable.",
  minutes: 25,
  cours: [
    {
      texte: [
        "Certains récits se passent dans un monde où les lois habituelles ne valent plus. Mais il y a deux façons très différentes de faire ça, et les distinguer change tout.",
      ],
    },
    {
      titre: "Le merveilleux : personne ne s’étonne",
      texte: [
        "Dans un conte, les fées, les ogres et les animaux qui parlent font partie du monde. Les personnages ne trouvent pas ça bizarre.",
        "Le lecteur accepte ces règles dès la première phrase — c’est ce que fait « Il était une fois ».",
        "Le merveilleux ne cherche pas à faire peur : il fait rêver, et il dit des choses vraies sous une forme inventée.",
      ],
      regle:
        "Merveilleux : le surnaturel est normal dans ce monde-là, et personne ne le remet en question.",
    },
    {
      titre: "L’étrange : quelque chose ne va pas",
      texte: [
        "Dans un récit étrange, le monde est le nôtre — et il s’y produit quelque chose d’inexplicable.",
        "Là, les personnages s’étonnent, doutent, cherchent une explication. Et souvent le récit ne tranche pas : était-ce un rêve, une folie, ou est-ce arrivé vraiment ?",
        "C’est ce doute qui fait l’effet. Une explication claire à la fin détruirait tout.",
      ],
      regle: "Étrange : le monde est normal, l’événement ne l’est pas, et le doute reste.",
    },
    {
      titre: "Pourquoi ces récits existent",
      texte: [
        "Ils permettent d’approcher des peurs à distance : dans un livre, on peut avoir peur en sécurité.",
        "Ils font imaginer ce qui n’existe pas, ce qui est exactement l’entraînement dont on a besoin pour inventer quoi que ce soit.",
        "Et ils parlent souvent de choses réelles sous un déguisement : l’abandon, la jalousie, le courage, la mort.",
      ],
    },
  ],
  exemples: [
    {
      enonce:
        "« Le loup dit à la petite fille qu’il connaissait un chemin plus court. » Merveilleux ou étrange ?",
      etapes: [
        "Un loup parle : c’est du surnaturel.",
        "La petite fille s’en étonne-t-elle ? Non, elle lui répond.",
        "Personne ne s’étonne : c’est du merveilleux, celui des contes.",
      ],
      resultat: "merveilleux",
    },
  ],
  exercices: [
    q("f-p5-me-1", "Dans un conte, quand un animal parle, les personnages…", ["ne s’en étonnent pas", "prennent peur", "appellent la police"], "ne s’en étonnent pas", "Dans le merveilleux, le surnaturel fait partie du monde."),
    q("f-p5-me-2", "Que signale la formule « Il était une fois » ?", ["on entre dans un monde merveilleux", "l’histoire est vraie", "c’est la fin"], "on entre dans un monde merveilleux", "Elle prévient le lecteur des règles du monde qu’il va lire."),
    q("f-p5-me-3", "Dans un récit étrange, le monde est…", ["le nôtre", "un monde de fées", "un autre univers"], "le nôtre", "C’est ce qui fait l’effet : l’événement inexplicable arrive dans un monde ordinaire."),
    q("f-p5-me-4", "Qu’est-ce qui fait l’effet d’un récit étrange ?", ["le doute qui reste", "la bagarre finale", "la longueur"], "le doute qui reste", "Une explication claire à la fin détruirait tout l’effet."),
    q("f-p5-me-5", "Pourquoi aime-t-on avoir peur en lisant ?", ["on a peur en sécurité", "on ne sent rien", "on veut souffrir"], "on a peur en sécurité", "Le livre permet d’approcher une peur à distance, sans danger réel."),
    q("f-p5-me-6", "De quoi parlent souvent les contes, sous leur déguisement ?", ["de choses réelles", "de rien du tout", "seulement de magie"], "de choses réelles", "L’abandon, la jalousie, le courage, la mort : des sujets réels dits sous une forme inventée."),
    q("f-p5-me-7", "Un ogre dans un conte, est-ce du merveilleux ou de l’étrange ?", ["du merveilleux", "de l’étrange"], "du merveilleux", "Il fait partie du monde du conte, et personne ne s’en étonne."),
    q("f-p5-me-8", "Un homme se réveille et son reflet a disparu du miroir. Est-ce…", ["étrange", "merveilleux"], "étrange", "Le monde est le nôtre, et quelque chose d’inexplicable s’y produit."),
  ],
};

const morale: Lecon = {
  code: "f-p5-morale",
  matiere: "francais",
  periode: 5,
  titre: "La morale d’une histoire",
  reference:
    "Entrée littéraire « Comprendre et interroger la morale » : découvrir des fondements de la vie en commun, notamment la justice, la tolérance, la liberté ; proposer une interprétation et la justifier.",
  minutes: 25,
  cours: [
    {
      texte: [
        "Certaines histoires sont écrites pour faire réfléchir sur ce qui est juste. La fable est la plus connue : une histoire courte, souvent avec des animaux, et une leçon.",
      ],
    },
    {
      titre: "Comment marche une fable",
      texte: [
        "Les animaux représentent des caractères humains : le renard la ruse, le lion le pouvoir, l’agneau la faiblesse, la fourmi la prévoyance.",
        "Cela permet de parler des hommes sans les nommer — c’était même une prudence utile du temps de La Fontaine, qui écrivait sous Louis XIV.",
        "La morale est parfois écrite en clair, souvent au début ou à la fin. Parfois elle n’est pas écrite du tout, et c’est au lecteur de la trouver.",
      ],
      regle:
        "Dans une fable, les animaux ne sont pas des animaux : ce sont des façons d’être humaines.",
    },
    {
      titre: "Une morale peut se discuter",
      texte: [
        "« La raison du plus fort est toujours la meilleure » — dans *Le Loup et l’Agneau*, La Fontaine ne dit pas que c’est bien. Il constate que c’est ainsi, et il le dit pour qu’on trouve ça révoltant.",
        "Une morale n’est donc pas forcément un conseil à suivre. Elle peut être un constat, une ironie, ou une question.",
        "On a le droit de ne pas être d’accord avec la morale d’une fable — à condition de dire pourquoi.",
      ],
      regle:
        "Discuter une morale n’est pas mal lire l’histoire : c’est la lire sérieusement. Mais il faut appuyer son avis sur le texte.",
    },
    {
      titre: "Justice, liberté, tolérance",
      texte: [
        "Beaucoup de récits posent la même question : que faire quand une règle est injuste ?",
        "Antigone désobéit. L’agneau raisonne et se fait dévorer. Le laboureur travaille et récolte.",
        "Ces histoires ne donnent pas une réponse unique. Elles servent à se former une opinion, et à comprendre que l’opinion des autres s’appuie aussi sur quelque chose.",
      ],
    },
  ],
  exemples: [
    {
      enonce:
        "Dans *Le Loup et l’Agneau*, l’agneau prouve qu’il n’a rien fait de mal, et le loup le mange quand même. Quelle est la morale, et que veut dire La Fontaine ?",
      etapes: [
        "Ce qui se passe : le plus faible a raison, et il perd quand même.",
        "La morale écrite : « La raison du plus fort est toujours la meilleure. »",
        "Ce que La Fontaine veut dire : il ne l’approuve pas, il le dénonce. Il montre l’injustice en la racontant sans commentaire.",
      ],
      resultat: "la force l’emporte sur le droit — et c’est présenté comme révoltant",
    },
  ],
  exercices: [
    q("f-p5-mo-1", "Dans une fable, que représentent les animaux ?", ["des caractères humains", "de vrais animaux", "des dieux"], "des caractères humains", "Le renard la ruse, le lion le pouvoir, l’agneau la faiblesse."),
    q("f-p5-mo-2", "Où trouve-t-on la morale d’une fable ?", ["au début ou à la fin, ou nulle part", "toujours au milieu", "dans le titre"], "au début ou à la fin, ou nulle part", "Parfois elle est écrite en clair, parfois c’est au lecteur de la trouver."),
    q("f-p5-mo-3", "Dans « Le Loup et l’Agneau », qui a raison ?", ["l’agneau", "le loup"], "l’agneau", "Il prouve qu’il n’a rien fait. Et il se fait dévorer quand même : c’est tout le propos."),
    q("f-p5-mo-4", "La Fontaine approuve-t-il que « la raison du plus fort soit la meilleure » ?", ["non, il le dénonce", "oui, il le conseille"], "non, il le dénonce", "Il constate une injustice et la raconte pour qu’on la trouve révoltante."),
    q("f-p5-mo-5", "Une morale est-elle toujours un conseil à suivre ?", ["non", "oui"], "non", "Ce peut être un constat, une ironie ou une question."),
    q("f-p5-mo-6", "A-t-on le droit de ne pas être d’accord avec une morale ?", ["oui, en expliquant pourquoi", "non, jamais", "oui, sans rien dire"], "oui, en expliquant pourquoi", "Discuter une morale est une lecture sérieuse, à condition d’appuyer son avis sur le texte."),
    q("f-p5-mo-7", "Pourquoi La Fontaine parlait-il des hommes à travers des animaux ?", ["pour critiquer sans nommer", "parce qu’il aimait les bêtes", "par erreur"], "pour critiquer sans nommer", "C’était une prudence utile : il écrivait sous Louis XIV."),
    q("f-p5-mo-8", "Que demandent beaucoup de récits sur la justice ?", ["que faire d’une règle injuste", "comment devenir riche", "comment gagner un combat"], "que faire d’une règle injuste", "Antigone désobéit, l’agneau raisonne : les réponses diffèrent, et c’est le but."),
  ],
};

const orthographeLexicale: Lecon = {
  code: "f-p5-orthographe",
  matiere: "francais",
  periode: 5,
  titre: "L’orthographe des mots",
  reference:
    "Écrire correctement les mots les plus fréquents de la langue en s’appuyant sur les régularités et la formation ; s’appuyer sur la dimension morphologique des mots rencontrés pour les orthographier ; mémoriser un corpus de mots invariables.",
  minutes: 25,
  cours: [
    {
      texte: [
        "Certaines orthographes s’apprennent par cœur. Mais beaucoup se **déduisent**, et c’est bien plus économique que de tout mémoriser.",
      ],
    },
    {
      titre: "La famille renseigne",
      texte: [
        "Pourquoi « grand » avec un d qu’on n’entend pas ? Parce que « grande », « grandir », « grandeur » le font entendre.",
        "Pourquoi « long » avec un g ? À cause de « longue », « longueur ».",
        "Pourquoi « lait » avec un t ? À cause de « laitier », « laiterie ».",
        "Le réflexe : quand une lettre finale est muette, cherche un mot de la famille où elle se prononce.",
      ],
      regle:
        "Une lettre finale muette s’explique presque toujours par un mot de la même famille. Cherche le féminin, ou un dérivé.",
    },
    {
      titre: "Les mots invariables",
      texte: [
        "Ils ne changent jamais d’orthographe, et ils sont partout : toujours, jamais, souvent, beaucoup, assez, trop, alors, pendant, depuis, parmi, malgré, aussitôt, plutôt, bientôt.",
        "Il n’y a pas de règle : ceux-là, il faut les savoir. Mais ils sont peu nombreux et ils reviennent sans cesse, donc l’effort est rentable.",
        "Remarque utile : beaucoup finissent par un -s qui ne s’entend pas — toujours, jamais, parfois, alors, dessous.",
      ],
      regle: "Un mot invariable garde exactement la même orthographe, partout, toujours.",
    },
    {
      titre: "Les doubles consonnes",
      texte: [
        "Souvent après un préfixe : **ap**porter, **ac**courir, **im**mangeable.",
        "Souvent dans les mots en -elle, -ette, -esse : chapelle, fillette, vitesse.",
        "Pas de règle générale. Mais quand on hésite, le mot de la même famille aide souvent : « terrain » double le r, comme « terre » et « enterrer ».",
      ],
    },
  ],
  exemples: [
    {
      enonce: "Pourquoi écrit-on « un chant » avec un t muet, et comment le vérifier ?",
      etapes: [
        "Je cherche des mots de la famille : chanter, chanteur, chanson.",
        "Dans « chanter » et « chanteur », le t se prononce.",
        "C’est donc bien un t, et non un d comme dans « un grand ».",
      ],
      resultat: "à cause de chanter, chanteur",
    },
  ],
  exercices: [
    e("f-p5-or-1", "Mets « lourd » au féminin : quel mot fait entendre le d ?", "lourde", "Lourde fait entendre le d muet de « lourd ». Lourdeur le fait entendre aussi : toute la famille le confirme."),
    e("f-p5-or-2", "Quel verbe de la famille de « galop » fait entendre le p ?", "galoper", "Dans « galoper », le p se prononce. C’est lui qui explique la lettre muette à la fin de « un galop »."),
    q("f-p5-or-3", "Comment savoir si « lai… » s’écrit avec un t ou un d ?", ["en pensant à laitier", "en écoutant", "au hasard"], "en pensant à laitier", "Laitier et laiterie font entendre le t. La famille renseigne toujours."),
    q("f-p5-or-4", "Qu’est-ce qu’un mot invariable ?", ["il garde toujours la même orthographe", "il n’a pas de sens", "il est très court"], "il garde toujours la même orthographe", "Toujours, jamais, souvent, beaucoup : ils ne changent jamais."),
    q("f-p5-or-5", "Lequel de ces mots est invariable ?", ["toujours", "grand", "chien"], "toujours", "« Grand » et « chien » varient en genre et en nombre ; « toujours » jamais."),
    e("f-p5-or-6", "Écris correctement le mot qui manque : « Il y a long… que je n’ai pas vu mon cousin. »", "longtemps", "« Longtemps » est un mot invariable. Il est fait de « long » et de « temps » collés : il garde le g de long, et le p et le s de temps."),
    q("f-p5-or-7", "Où trouve-t-on souvent une double consonne ?", ["après un préfixe", "à la fin des verbes", "dans les noms propres"], "après un préfixe", "Apporter, accourir, immangeable : le préfixe rencontre la première lettre du radical."),
    q("f-p5-or-8", "Que faire quand on hésite sur une lettre muette à la fin d’un mot ?", ["chercher un mot de la même famille", "écrire au hasard", "l’enlever"], "chercher un mot de la même famille", "Le féminin ou un dérivé fait presque toujours entendre la lettre."),
  ],
};

const conjugaisonBilan: Lecon = {
  code: "f-p5-conjugaison-bilan",
  matiere: "francais",
  periode: 5,
  titre: "Les quatre temps : reconnaître et choisir",
  reference:
    "Conjugaisons à mémoriser et à maîtriser : présent de l’indicatif, imparfait, futur, passé composé des verbes être et avoir, des verbes du premier et du deuxième groupe et des verbes irréguliers du troisième groupe ; faire la différence entre temps simples et temps composés.",
  minutes: 30,
  cours: [
    {
      texte: [
        "Cette année tu as appris quatre temps. Il reste à les reconnaître d’un coup d’œil, et à savoir lequel choisir quand on écrit.",
      ],
    },
    {
      titre: "Reconnaître, par la terminaison",
      texte: [
        "**Présent** : -e, -es, -e, -ons, -ez, -ent pour le 1er groupe. Pas de marque de temps particulière.",
        "**Imparfait** : -ais, -ais, -ait, -ions, -iez, -aient. La marque de temps est le -ai- ou le -i-.",
        "**Futur** : -rai, -ras, -ra, -rons, -rez, -ront. La marque de temps est le -r-.",
        "**Passé composé** : deux mots — auxiliaire au présent + participe passé.",
      ],
      regle:
        "Trois temps **simples** (un seul mot) et un temps **composé** (deux mots). C’est la première chose à repérer.",
    },
    {
      titre: "Choisir, selon ce qu’on raconte",
      texte: [
        "Pour **décrire** un décor, une habitude, ce qui durait : l’imparfait. « Il pleuvait, la rue était vide. »",
        "Pour une action **terminée** qui fait avancer l’histoire : le passé composé. « Soudain, la porte a claqué. »",
        "Dans un récit au passé, les deux travaillent ensemble : l’imparfait pose le décor, le passé composé fait arriver les événements.",
        "Le présent sert à ce qui est vrai maintenant, ou toujours vrai : « L’eau bout à cent degrés. »",
      ],
      regle:
        "Imparfait = ce qui durait ou se répétait. Passé composé = ce qui est arrivé une fois.",
    },
    {
      titre: "Les erreurs qui reviennent",
      texte: [
        "« Je parlerai » (futur, sans s) et « je parlerais » (conditionnel, avec s).",
        "« Il a » (avoir) et « il est » (être), qui changent l’auxiliaire donc le sens.",
        "« Ils ont » et « ils sont », qui ne se ressemblent qu’à l’écrit.",
        "Et le -nt du pluriel qui ne s’entend jamais : c’est le sujet qui décide, pas l’oreille.",
      ],
    },
  ],
  exemples: [
    {
      enonce: "Dans « Il pleuvait quand la porte a claqué », identifie les deux temps et dis pourquoi chacun est là.",
      etapes: [
        "« Pleuvait » : terminaison -ait, un seul mot. C’est l’imparfait. Il pose le décor, la pluie durait.",
        "« A claqué » : deux mots, auxiliaire avoir + participe. C’est le passé composé. C’est l’événement, arrivé une fois.",
        "Les deux ensemble : le décor et l’action.",
      ],
      resultat: "pleuvait : imparfait (décor) · a claqué : passé composé (événement)",
    },
  ],
  exercices: [
    q("f-p5-cb-1", "« Nous marchions » est à quel temps ?", ["imparfait", "présent", "futur"], "imparfait", "La terminaison -ions avec le i : c’est la marque de l’imparfait."),
    q("f-p5-cb-2", "« Nous marcherons » est à quel temps ?", ["imparfait", "futur", "passé composé"], "futur", "Le -r- est la marque de temps du futur, et il vient de l’infinitif : march-er-ons."),
    q("f-p5-cb-3", "« Nous avons marché » est un temps…", ["simple", "composé"], "composé", "Deux mots : auxiliaire + participe passé. Les temps simples n’en font qu’un."),
    q("f-p5-cb-4", "Pour décrire la pluie qui tombait pendant toute la scène, on emploie…", ["l’imparfait", "le passé composé"], "l’imparfait", "L’imparfait dit ce qui durait. Le passé composé dirait une action terminée."),
    q("f-p5-cb-5", "Pour dire qu’une porte a claqué une fois, on emploie…", ["l’imparfait", "le passé composé"], "le passé composé", "C’est un événement arrivé une fois, qui fait avancer l’histoire."),
    e("f-p5-cb-6", "Écris le verbe « voir » au futur : « L’été prochain, nous … la mer. » Réponds par le mot manquant.", "verrons", "Voir est irrégulier au futur : son radical est verr-, avec deux r. Avec « nous », la terminaison est -ons : nous verrons."),
    e("f-p5-cb-7", "Écris le verbe « être » à l’imparfait : « Quand vous … petits, vous aimiez les dinosaures. » Réponds par le mot manquant.", "étiez", "Être est la seule vraie exception de l’imparfait : son radical est ét-. Avec « vous », la terminaison est -iez : vous étiez."),
    q("f-p5-cb-8", "Laquelle de ces formes est à un temps simple ?", ["elle a fini", "elle finira", "elle est partie"], "elle finira", "Dans « elle finira », le verbe tient en un seul mot : c’est le futur, un temps simple. « A fini » et « est partie » ont deux mots, auxiliaire et participe : c’est le passé composé."),
  ],
};

const expliquer: Lecon = {
  code: "f-p5-expliquer",
  matiere: "francais",
  periode: 5,
  titre: "Expliquer et donner son avis",
  reference:
    "Produire des écrits réflexifs courts pour s’entraîner à expliquer un point de vue ; écrire au quotidien des textes personnels : donner son avis, formuler des hypothèses ; reformuler l’essentiel d’une leçon pour se l’approprier.",
  minutes: 25,
  cours: [
    {
      texte: [
        "Donner son avis, ce n’est pas dire « j’aime » ou « je n’aime pas ». C’est dire pourquoi, de façon que quelqu’un qui pense le contraire comprenne quand même ton raisonnement.",
      ],
    },
    {
      titre: "Trois morceaux",
      texte: [
        "**Ce que tu penses** : une phrase claire. « Je trouve que l’agneau a tort d’essayer de raisonner le loup. »",
        "**Pourquoi** : un argument. « Parce que le loup ne cherche pas la vérité, il cherche un prétexte. »",
        "**Un exemple** : un endroit précis du texte, ou de ta vie. « Il change trois fois d’accusation, ce qui montre bien qu’aucune ne l’intéresse. »",
        "Avis, argument, exemple. Un avis sans argument n’est qu’un goût ; un argument sans exemple reste en l’air.",
      ],
      regle: "Ce que je pense — parce que — par exemple. Les trois, à chaque fois.",
    },
    {
      titre: "Les mots qui articulent",
      texte: [
        "Pour ajouter : de plus, d’ailleurs, ensuite.",
        "Pour opposer : mais, pourtant, cependant, en revanche.",
        "Pour expliquer : car, parce que, en effet.",
        "Pour conclure : donc, ainsi, finalement.",
        "Ces mots ne décorent pas : ils montrent au lecteur comment tes idées s’enchaînent. Sans eux, il doit deviner.",
      ],
    },
    {
      titre: "Expliquer une leçon avec ses mots",
      texte: [
        "Reformuler une leçon est le meilleur moyen de savoir si on l’a comprise. Tant qu’on ne peut que réciter, on ne sait pas encore.",
        "La méthode : ferme le cahier, écris trois phrases avec tes mots, puis rouvre et compare. Ce qui manque, c’est ce qu’il reste à apprendre.",
      ],
      regle:
        "Savoir une leçon, c’est pouvoir l’expliquer à quelqu’un qui ne l’a pas eue. Pas la réciter.",
    },
  ],
  exemples: [
    {
      enonce: "Donne ton avis sur cette phrase : « Il vaut mieux dire la vérité, même quand elle fait de la peine. »",
      etapes: [
        "Ce que je pense : je suis d’accord, mais pas toujours.",
        "Pourquoi : parce que mentir abîme la confiance, et qu’une fois abîmée elle est longue à revenir.",
        "Mais : il y a des vérités qui ne servent à rien et qui blessent seulement.",
        "Exemple : dire à quelqu’un « ton dessin ne me plaît pas » ne l’aide pas ; lui dire ce qu’il pourrait améliorer, oui.",
      ],
      resultat: "un avis, un argument, une réserve, un exemple",
    },
  ],
  exercices: [
    q("f-p5-ex-1", "De quoi un avis a-t-il besoin pour ne pas rester un simple goût ?", ["d’un argument", "d’être plus long", "d’un titre"], "d’un argument", "« Je n’aime pas » ne dit rien. « Je n’aime pas parce que… » dit quelque chose."),
    q("f-p5-ex-2", "Quel mot sert à opposer deux idées ?", ["pourtant", "de plus", "donc"], "pourtant", "Pourtant, cependant, en revanche marquent l’opposition. « De plus » ajoute, « donc » conclut."),
    q("f-p5-ex-3", "Quel mot sert à expliquer une cause ?", ["car", "ensuite", "ainsi"], "car", "Car, parce que et en effet introduisent une explication."),
    q("f-p5-ex-4", "Quel mot sert à conclure ?", ["donc", "mais", "d’ailleurs"], "donc", "Donc, ainsi, finalement ferment le raisonnement."),
    q("f-p5-ex-5", "Combien de morceaux comporte un avis bien construit, d’après la leçon ?", ["deux", "trois", "quatre"], "trois", "Ce que je pense, pourquoi, et un exemple. Les trois, à chaque fois."),
    q("f-p5-ex-6", "À quoi servent les connecteurs dans un texte d’opinion ?", ["montrer comment les idées s’enchaînent", "faire plus long", "remplacer les arguments"], "montrer comment les idées s’enchaînent", "Sans eux, le lecteur doit deviner le lien lui-même."),
    q("f-p5-ex-7", "Comment savoir si on a compris une leçon ?", ["en l’expliquant avec ses mots", "en la relisant trois fois", "en la recopiant"], "en l’expliquant avec ses mots", "Tant qu’on ne peut que réciter, on ne sait pas encore."),
    q("f-p5-ex-8", "Un argument sans exemple…", ["reste en l’air", "est suffisant", "est interdit"], "reste en l’air", "L’exemple ancre l’argument dans quelque chose de vérifiable."),
  ],
};

const ponctuation: Lecon = {
  code: "f-p5-ponctuation",
  matiere: "francais",
  periode: 5,
  titre: "La ponctuation et la lecture à voix haute",
  reference:
    "Identifier les marques de ponctuation et les prendre en compte ; lire à voix haute un texte court, après préparation, en tenant compte des marques de ponctuation ; proposer une lecture avec un rythme fluide qui respecte les groupes de sens.",
  minutes: 25,
  cours: [
    {
      texte: [
        "La ponctuation n’est pas une décoration qu’on ajoute à la fin. C’est ce qui dit comment lire — et elle change le sens.",
      ],
    },
    {
      titre: "Chaque signe donne une instruction",
      texte: [
        "Le **point** : on s’arrête, la voix descend.",
        "La **virgule** : on marque une petite pause, la voix ne descend pas.",
        "Le **point d’interrogation** : la voix monte à la fin.",
        "Le **point d’exclamation** : la voix se charge d’émotion.",
        "Les **deux-points** : on annonce, la voix reste en suspens.",
        "Les **points de suspension** : on laisse la phrase ouverte.",
      ],
      regle: "Lire à voix haute, c’est obéir à la ponctuation. Elle est écrite pour ça.",
    },
    {
      titre: "Une virgule change le sens",
      texte: [
        "« On mange, les enfants ! » et « On mange les enfants ! » ne disent pas du tout la même chose.",
        "« Pierre, dit Léa, est parti. » — c’est Léa qui parle. « Pierre dit : Léa est partie. » — c’est Pierre qui parle.",
        "Ce n’est pas un détail de forme : c’est du sens.",
      ],
      regle: "Une virgule mal placée peut inverser le sens d’une phrase. Il faut la relire.",
    },
    {
      titre: "Lire par groupes de sens",
      texte: [
        "On ne lit pas mot à mot : on lit par paquets de mots qui vont ensemble.",
        "« Le vieux chien de la voisine / dormait / sous le grand chêne. » Trois groupes, trois souffles.",
        "Couper au mauvais endroit rend la phrase incompréhensible, même si tous les mots sont justes.",
      ],
      regle:
        "Avant de lire un texte à voix haute, marque au crayon les endroits où tu vas respirer. C’est ce que font les comédiens.",
    },
  ],
  exemples: [
    {
      enonce: "Quelle différence entre « On mange, les enfants ! » et « On mange les enfants ! » ?",
      etapes: [
        "Avec la virgule, « les enfants » sont ceux à qui on parle : on les appelle à table.",
        "Sans la virgule, « les enfants » devient le complément d’objet du verbe manger.",
        "La virgule sépare l’appel du reste de la phrase. Sans elle, le sens change complètement.",
      ],
      resultat: "la virgule distingue ceux à qui on parle de ce qu’on mange",
    },
  ],
  exercices: [
    q("f-p5-pt-1", "Devant un point d’interrogation, que fait la voix ?", ["elle monte", "elle descend", "rien"], "elle monte", "L’intonation montante est ce qui fait entendre la question."),
    q("f-p5-pt-2", "Devant un point, que fait la voix ?", ["elle descend", "elle monte", "elle reste en suspens"], "elle descend", "Le point ferme la phrase : la voix descend et on marque une pause. Rester en suspens, c’est ce que fait la voix devant les deux-points."),
    q("f-p5-pt-3", "Quelle est la différence entre « On arrête, les garçons ! » et « On arrête les garçons ! » ?", ["dans le premier cas on leur parle", "aucune", "le second est plus poli"], "dans le premier cas on leur parle", "La virgule sépare ceux à qui on s’adresse. Sans elle, ils deviennent le complément du verbe."),
    q("f-p5-pt-4", "Que signalent les deux-points ?", ["on annonce ce qui vient", "la fin de la phrase", "une question"], "on annonce ce qui vient", "Ils annoncent une explication, une liste ou des paroles rapportées."),
    q("f-p5-pt-5", "Comment lit-on un texte à voix haute ?", ["par groupes de sens", "mot à mot", "le plus vite possible"], "par groupes de sens", "On lit par paquets de mots qui vont ensemble, en respirant entre eux."),
    q("f-p5-pt-6", "Que font les comédiens avant de lire un texte ?", ["ils marquent où respirer", "ils l’apprennent par cœur", "ils le recopient"], "ils marquent où respirer", "Marquer les groupes de sens au crayon est une technique de préparation."),
    q("f-p5-pt-7", "Que signalent des points de suspension ?", ["la phrase reste ouverte", "la fin du texte", "une erreur"], "la phrase reste ouverte", "On laisse entendre qu’il y aurait autre chose à dire."),
    q("f-p5-pt-8", "La ponctuation s’ajoute-t-elle à la fin, quand le texte est écrit ?", ["non, elle fait partie du sens", "oui", "seulement les points"], "non, elle fait partie du sens", "Une virgule mal placée peut inverser le sens. Ce n’est pas de la décoration."),
  ],
};

export const francais: Lecon[] = [
  phraseVerbe,
  naturesMots,
  typesPhrases,
  groupeNominal,
  present,
  lexiqueFamilles,
  imparfait,
  futur,
  passeCompose,
  complements,
  homophones,
  lectureComprendre,
  ecrireTexte,
  pronoms,
  epithete,
  accordSujetVerbe,
  synonymes,
  dialogue,
  genresTextes,
  radicalVariations,
  chaineAccords,
  polysemie,
  heros,
  poesie,
  documents,
  merveilleux,
  morale,
  orthographeLexicale,
  conjugaisonBilan,
  expliquer,
  ponctuation,
];
