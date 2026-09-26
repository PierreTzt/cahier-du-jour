/**
 * Reprendre le français entre deux leçons. Six rituels, soixante-huit séances.
 *
 * Une fiche donne **les phrases, les mots, les verbes à travailler, et leurs corrigés**.
 *
 * Ce qu'une fiche donne, et pourquoi : voir `lib/fiches/types.ts`. En deux
 * mots — le matériel exact, le corrigé quand il y en a un, et ce qu'on
 * regarde. Un adulte qui l'ouvre ne doit plus rien avoir à chercher.
 *
 * **Réservé aux adultes** : ces fiches portent les corrigés.
 *
 * ## Comment les séries sont rangées
 *
 * Les fiches d'un même rituel forment une série, et la n-ième occurrence du
 * rituel dans l'année donne la n-ième fiche. Elles sont donc écrites dans
 * l'ordre, de la plus simple à la plus exigeante, et la série s'étale de
 * septembre à juillet : le premier tiers tombe de septembre à décembre, le
 * deuxième de janvier à mars, le dernier d'avril à juillet.
 *
 * Deux conséquences concrètes, tirées du BO spécial n° 16 du 17 avril 2025 :
 * les quatre temps ne sont pas tous disponibles avant la période 2 — le
 * présent est vu en période 1, l'imparfait, le futur et le passé composé en
 * période 2 —, et la trame ne met donc « Conjugaison » en service qu'après la
 * leçon du passé composé (9 novembre) : ses fiches, dans `conjugaison.ts`,
 * demandent les quatre temps dès la première, comme sa consigne. Et l'ordre
 * des séries suit celui des leçons de `lib/programme/francais.ts`, pour
 * qu'une fiche ne demande jamais ce qui n'a pas encore été enseigné.
 *
 * Une exception assumée : « Analyser des phrases » commence le 21 septembre,
 * et la leçon « Les compléments : objet ou circonstanciel » ne vient que le
 * 12 novembre. Ses sept fiches font encadrer et déplacer — les gestes que
 * sa consigne demande —, mais n'exigent ni « objet », ni
 * « circonstanciel », ni « direct » ou « indirect » : ces mots-là, dans les
 * corrigés, sont pour l'adulte.
 *
 * Rien de tout ceci n'a été relu par un enseignant. Ça doit l'être.
 */

import { f, type Fiche } from "./types";

export const entrainementFrancais: Fiche[] = [
  /* ================================================================== */
  /* Analyser des phrases — 7 fiches                                     */
  /* ================================================================== */

  f(
    "ef-phrases-01",
    "Analyser des phrases",
    "Cinq phrases courtes · le verbe, puis le sujet, puis le reste",
    [
      "Il recopie les cinq phrases sur le cahier en sautant une ligne entre chacune : il lui faut de la place pour souligner, entourer et encadrer sans que tout se touche.",
      "Un code tenu toute l’année : le sujet souligné, le verbe entouré, les compléments encadrés. La première phrase se fait à deux, à voix haute ; les quatre autres seul.",
      "Pour chaque complément encadré, il le déplace en tête de phrase et dit si la phrase tient encore. C’est ce geste-là qu’on travaille, plus que les mots savants : la leçon sur les compléments ne vient que le 12 novembre, et les noms entre parenthèses du corrigé sont pour l’adulte.",
    ],
    [
      "1. Le chat dort sur le canapé.",
      "2. Ce matin, le facteur apporte une lettre.",
      "3. Mon cousin range sa chambre.",
      "4. Les oiseaux chantent dans le jardin.",
      "5. Le soir, mon père prépare la soupe.",
    ],
    [
      "1. Verbe : dort. Sujet : le chat. Complément : sur le canapé (circonstanciel de lieu). Il se déplace — « Sur le canapé, le chat dort. » — et il peut même s’enlever.",
      "2. Verbe : apporte. Sujet : le facteur. Compléments : ce matin (circonstanciel de temps, il se déplace et s’enlève) et une lettre (objet, il ne bouge pas et ne s’enlève pas : on ne dit pas « une lettre, le facteur apporte »).",
      "3. Verbe : range. Sujet : mon cousin. Complément : sa chambre (objet). Il ne se déplace pas. « Mon cousin range » se dit encore, mais on ne sait plus ce qu’il range.",
      "4. Verbe : chantent. Sujet : les oiseaux. Complément : dans le jardin (circonstanciel de lieu). Il se déplace : « Dans le jardin, les oiseaux chantent. »",
      "5. Verbe : prépare. Sujet : mon père. Compléments : le soir (circonstanciel de temps, déplaçable) et la soupe (objet, fixe).",
    ],
    "Ce qu’on regarde, c’est le déplacement, pas le vocabulaire : qu’il dise « circonstanciel » ou non n’a aucune importance tant qu’il sait que « dans le jardin » bouge et que « une lettre » ne bouge pas. S’il déplace tout, y compris les compléments d’objet, c’est le test du déplacement qu’il faut reprendre à la séance suivante, sur deux phrases seulement.",
  ),

  f(
    "ef-phrases-02",
    "Analyser des phrases",
    "Des sujets qui font plusieurs mots",
    [
      "Même code de couleurs que la fois précédente. La nouveauté du jour : le sujet n’est presque jamais un seul mot, et il faut le prendre en entier.",
      "Après avoir souligné, il remplace le groupe sujet par un pronom — il, elle, ils, elles. Si la phrase tient, le groupe était le bon ; s’il reste un mot dehors, c’est qu’il en a oublié.",
      "Faire la première ensemble, puis le laisser aller. On corrige à la fin, pas au fur et à mesure.",
    ],
    [
      "1. Le grand chien noir de la voisine aboie toute la nuit.",
      "2. Dans le grenier, une vieille horloge sonne encore les heures.",
      "3. Mon frère et ma sœur préparent le petit-déjeuner.",
      "4. Chaque dimanche, nous marchons jusqu’à la rivière.",
      "5. La pluie fine du matin mouille les volets.",
    ],
    [
      "1. Verbe : aboie. Sujet : le grand chien noir de la voisine — tout le groupe, et surtout pas « la voisine », qui n’aboie pas. Remplacement : « Il aboie toute la nuit. » Complément : toute la nuit (temps), déplaçable.",
      "2. Verbe : sonne. Sujet : une vieille horloge (« Elle sonne encore les heures »). Compléments : dans le grenier (lieu, déplaçable — il est déjà déplacé en tête) et les heures (objet, fixe).",
      "3. Verbe : préparent. Sujet : mon frère et ma sœur — deux personnes, d’où le verbe au pluriel. Remplacement : « Ils préparent le petit-déjeuner. » Complément : le petit-déjeuner (objet, fixe).",
      "4. Verbe : marchons. Sujet : nous. Compléments : chaque dimanche (temps, déplaçable) et jusqu’à la rivière (lieu, déplaçable : « Jusqu’à la rivière, chaque dimanche, nous marchons » tient encore, même si c’est bizarre à l’oreille).",
      "5. Verbe : mouille. Sujet : la pluie fine du matin (« Elle mouille les volets »). Complément : les volets (objet, fixe).",
    ],
    "Le point du jour est la longueur du sujet. S’il souligne « chien » seul, ou « voisine », le test du pronom n’est pas encore un réflexe : le refaire à l’oral sur trois phrases inventées à table, ça suffit souvent.",
  ),

  f(
    "ef-phrases-03",
    "Analyser des phrases",
    "Quand le sujet passe derrière le verbe",
    [
      "Prévenir avant de commencer : dans deux de ces phrases, le sujet n’est pas devant le verbe. C’est normal, le français fait ça souvent, et la question « qui est-ce qui ? » le retrouve quand même.",
      "Il cherche le verbe d’abord — le mot qui change quand on change le temps — puis pose la question devant lui, et accepte la réponse où qu’elle se trouve.",
      "La phrase 4 est une question : le verbe s’y coupe parfois en deux. Le lui dire si ça bloque plus d’une minute.",
    ],
    [
      "1. Sous la table dormait un vieux chat.",
      "2. Le matin, les enfants du village attendent le car près de la fontaine.",
      "3. Sur la table, ma mère a posé un bouquet.",
      "4. Que fait ton cousin dans le jardin ?",
      "5. Dans la cour, un chien et un chat se regardent longuement.",
    ],
    [
      "1. Verbe : dormait. Qui est-ce qui dormait ? Un vieux chat — le sujet est derrière. Complément : sous la table (lieu, déplaçable).",
      "2. Verbe : attendent. Sujet : les enfants du village. Compléments : le matin (temps, déplaçable), le car (objet, fixe), près de la fontaine (lieu, déplaçable).",
      "3. Verbe : a posé (deux mots, qu’on entoure ensemble). Sujet : ma mère. Compléments : sur la table (lieu, déplaçable, déjà en tête) et un bouquet (objet, fixe).",
      "4. Verbe : fait. Qui est-ce qui fait ? Ton cousin — sujet derrière le verbe, comme souvent dans les questions. Compléments : que (objet, il remplace la chose qu’on cherche) et dans le jardin (lieu, déplaçable).",
      "5. Verbe : se regardent. Sujet : un chien et un chat — deux, donc pluriel. Compléments : dans la cour (lieu, déplaçable) et longuement (manière, déplaçable).",
    ],
    "Regarder ce qu’il fait de la phrase 1 : s’il souligne « sous la table » comme sujet, c’est qu’il prend la place pour la fonction. Le remède est la question « qui est-ce qui ? », posée à voix haute, pas une règle de plus.",
  ),

  f(
    "ef-phrases-04",
    "Analyser des phrases",
    "Déplacer, puis enlever : deux gestes pour chaque complément",
    [
      "Deux gestes aujourd’hui, dans cet ordre. Pour chaque complément encadré, il essaie de le déplacer en tête de phrase, puis de l’enlever, et il dit à voix haute, après chaque geste, si la phrase tient encore.",
      "Au-dessus de chaque complément, il note ce qui a marché, avec ses mots : « bouge », « s’enlève », « reste ». Pas de mots savants : la leçon « Les compléments : objet ou circonstanciel » ne vient que le 12 novembre, et c’est elle qui les donnera.",
      "S’il hésite, on dit la phrase transformée à voix haute, ensemble : c’est l’oreille qui juge si elle tient, pas une règle.",
    ],
    [
      "1. Chaque samedi, Inès prépare une tarte.",
      "2. Le jardinier arrose les salades le soir.",
      "3. Nous rangeons nos bottes dans le garage.",
      "4. Tom dessine un bateau sous l’arbre.",
      "5. Pendant l’orage, le vent a renversé les pots de fleurs.",
    ],
    [
      "1. Verbe : prépare. Sujet : Inès. « Chaque samedi » bouge — « Inès prépare une tarte chaque samedi » — et s’enlève. « Une tarte » reste collé au verbe : « Une tarte, Inès prépare » ne se dit pas, et sans lui on ne sait plus ce qu’elle prépare.",
      "2. Verbe : arrose. Sujet : le jardinier. « Le soir » bouge — « Le soir, le jardinier arrose les salades » — et s’enlève. « Les salades » reste : sans lui, on ne sait plus ce qu’il arrose.",
      "3. Verbe : rangeons. Sujet : nous. « Dans le garage » bouge — « Dans le garage, nous rangeons nos bottes » — et s’enlève. « Nos bottes » reste : sans lui, on ne sait plus ce qu’on range.",
      "4. Verbe : dessine. Sujet : Tom. « Sous l’arbre » bouge — « Sous l’arbre, Tom dessine un bateau » — et s’enlève. « Un bateau » reste : « Tom dessine » se dit encore, mais on ne sait plus ce qu’il dessine.",
      "5. Verbe : a renversé — deux mots, qu’on entoure ensemble. Sujet : le vent. « Pendant l’orage » est déjà en tête : il bouge — « Le vent a renversé les pots de fleurs pendant l’orage » — et s’enlève. « Les pots de fleurs » reste : sans lui, on ne sait plus ce que le vent a renversé.",
    ],
    "Le repère du jour : fait-il les deux gestes, ou un seul ? S’il déplace sans essayer d’enlever, ou l’inverse, on refait le geste qui manque sur deux phrases, à voix haute, et on s’arrête là. Qu’il dise « bouge » ou « s’enlève » avec ses mots suffit : les noms viendront avec la leçon du 12 novembre.",
  ),

  f(
    "ef-phrases-05",
    "Analyser des phrases",
    "Les petits mots qui remplacent un groupe entier",
    [
      "Dans ces cinq phrases, les compléments sont souvent des pronoms — le, la, les, lui, leur — et ils se placent avant le verbe. Ça surprend, et c’est tout l’intérêt.",
      "Méthode : entourer le verbe, souligner le sujet, puis demander pour chaque petit mot restant « il remplace quoi ? ». On écrit la réponse dans la marge.",
      "Ne pas exiger le mot « pronom », ni « objet direct » ou « indirect » : la leçon sur les compléments ne vient que le 12 novembre, et ces mots, dans le corrigé, sont pour l’adulte. Exiger seulement qu’il sache que « les » de la phrase 3 remplace quelque chose de pluriel.",
    ],
    [
      "1. Elle lui a donné la clé ce matin.",
      "2. Mon oncle et sa femme nous attendent à la gare.",
      "3. Le facteur les dépose devant la porte.",
      "4. Depuis lundi, je leur écris une lettre chaque soir.",
      "5. Les voisins du dessus la réparent eux-mêmes.",
    ],
    [
      "1. Verbe : a donné. Sujet : elle. Objet direct : la clé. Objet indirect : lui (= à quelqu’un dont on a parlé avant). Circonstanciel de temps : ce matin, déplaçable.",
      "2. Verbe : attendent. Sujet : mon oncle et sa femme (pluriel). Objet direct : nous, placé avant le verbe. Circonstanciel de lieu : à la gare, déplaçable.",
      "3. Verbe : dépose. Sujet : le facteur. Objet direct : les — il remplace un groupe au pluriel, par exemple « les colis ». Circonstanciel de lieu : devant la porte, déplaçable.",
      "4. Verbe : écris. Sujet : je. Objet direct : une lettre. Objet indirect : leur (= à plusieurs personnes). Circonstanciels : depuis lundi et chaque soir, tous deux déplaçables.",
      "5. Verbe : réparent. Sujet : les voisins du dessus. Objet direct : la, placé avant le verbe. Eux-mêmes insiste sur le sujet, il ne complète pas le verbe.",
    ],
    "Ce qui se voit ici, c’est s’il cherche encore les compléments uniquement après le verbe. S’il laisse « les » et « leur » sans rien en dire, c’est le signe qu’il faut une séance sur les pronoms compléments avant d’aller plus loin.",
  ),

  f(
    "ef-phrases-06",
    "Analyser des phrases",
    "Phrases longues, phrases niées, phrase sans sujet",
    [
      "Cinq phrases plus chargées. Conseil à lui donner avant de commencer : barrer d’abord au crayon tout ce qui est entre virgules, pour voir la charpente, puis le remettre.",
      "Dans la négation, le verbe est pris en sandwich : ne … pas, ne … jamais, ne … aucun. On entoure le verbe seul, et on repasse en couleur les deux morceaux de la négation — le souligné reste au sujet.",
      "La phrase 4 est à l’impératif : elle n’a pas de sujet écrit. Ce n’est pas une erreur de la fiche, et c’est la seule fois de l’année où on peut ne rien souligner.",
    ],
    [
      "1. Hier soir, dans le vieux hangar, les enfants n’ont trouvé aucune trace du chat.",
      "2. Le train de sept heures ne s’arrête jamais dans notre village.",
      "3. Avec beaucoup de patience, ma grand-mère répare les montres anciennes dans son atelier.",
      "4. Ne poussez pas la porte trop fort.",
      "5. Depuis trois semaines, personne n’a ouvert cette boîte.",
    ],
    [
      "1. Verbe : ont trouvé, nié par n’… aucune. Sujet : les enfants. Objet direct : aucune trace du chat. Circonstanciels : hier soir (temps) et dans le vieux hangar (lieu), tous deux déplaçables — ils sont d’ailleurs déjà déplacés.",
      "2. Verbe : s’arrête, nié par ne … jamais. Sujet : le train de sept heures. Circonstanciel de lieu : dans notre village, déplaçable.",
      "3. Verbe : répare. Sujet : ma grand-mère. Objet direct : les montres anciennes. Circonstanciels : avec beaucoup de patience (manière) et dans son atelier (lieu), tous deux déplaçables.",
      "4. Verbe : poussez, nié par ne … pas. Pas de sujet écrit : c’est un ordre, adressé à « vous ». Objet direct : la porte. Circonstanciel de manière : trop fort.",
      "5. Verbe : a ouvert, nié par n’… (personne fait office de négation avec ne). Sujet : personne. Objet direct : cette boîte. Circonstanciel de temps : depuis trois semaines, déplaçable.",
    ],
    "Deux choses valent le coup d’être observées : est-ce qu’il entoure le verbe seul, sans les morceaux de la négation, et est-ce qu’il accepte la phrase 4 sans sujet plutôt que d’en inventer un. La deuxième est la plus intéressante : elle dit s’il analyse ou s’il applique une recette.",
  ),

  f(
    "ef-phrases-07",
    "Analyser des phrases",
    "Deux verbes conjugués dans la même phrase",
    [
      "La dernière de la série, et la plus exigeante : chacune de ces phrases contient deux verbes conjugués, donc deux charpentes emboîtées.",
      "Méthode : entourer les deux verbes en premier, sans rien faire d’autre. Puis chercher le sujet de chacun, séparément. On trace un trait vertical entre les deux parties de la phrase.",
      "Si les deux verbes ne sont pas repérés, s’arrêter là et ne faire que ça sur les cinq phrases : c’est déjà la séance entière, et elle est bien employée.",
    ],
    [
      "1. Quand la nuit tombe, les chauves-souris sortent du clocher.",
      "2. Je sais que tu as raison.",
      "3. Le livre que j’ai emprunté raconte l’histoire d’un phare.",
      "4. Ma sœur chante pendant que je fais la vaisselle.",
      "5. Si tu ouvres la fenêtre, la pièce se rafraîchira vite.",
    ],
    [
      "1. Verbes : tombe et sortent. « Quand la nuit tombe » : sujet la nuit. « Les chauves-souris sortent du clocher » : sujet les chauves-souris, complément de lieu du clocher. Le morceau « quand la nuit tombe » se déplace en entier : « Les chauves-souris sortent du clocher quand la nuit tombe. »",
      "2. Verbes : sais et as. « Je sais » : sujet je. « Que tu as raison » : sujet tu — et ce morceau entier est l’objet de « sais » (je sais quoi ?). Il ne se déplace pas.",
      "3. Verbes : ai emprunté et raconte. Charpente principale : le livre raconte l’histoire d’un phare. « Que j’ai emprunté » a pour sujet j’ et se glisse juste après « le livre » pour en dire plus : il ne se déplace pas ailleurs.",
      "4. Verbes : chante et fais. « Ma sœur chante » : sujet ma sœur. « Pendant que je fais la vaisselle » : sujet je, objet la vaisselle. Ce morceau est un circonstanciel de temps et il se déplace : « Pendant que je fais la vaisselle, ma sœur chante. »",
      "5. Verbes : ouvres et se rafraîchira. « Si tu ouvres la fenêtre » : sujet tu, objet la fenêtre. « La pièce se rafraîchira vite » : sujet la pièce. Le morceau en « si » se déplace : « La pièce se rafraîchira vite si tu ouvres la fenêtre. »",
    ],
    "Le seul repère utile ici : compte-t-il deux verbes ou un seul ? S’il n’en voit qu’un, il n’y a rien à corriger d’autre — on refait le test du changement de temps mot par mot, lentement, et le deuxième verbe apparaît tout seul.",
  ),
];
