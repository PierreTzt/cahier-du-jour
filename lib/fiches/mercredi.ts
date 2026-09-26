/**
 * Le mercredi, le jour du parrain — cinq des douze rituels, dix-huit fiches.
 *
 * Quarante-cinq minutes, et ce n'est pas un cours : une question creusée, une
 * expérience, une recette, un objet ouvert, un programme qu'on fait exécuter.
 * La trame fait tourner douze rituels le mercredi ; ce fichier outille les
 * cinq qui demandent un matériel ou un corrigé, et laisse les sept autres
 * (construire, sortir, la carte, un métier, la musique, le dessin, le projet
 * à suivre) à d'autres fiches.
 *
 * - **La boîte à pourquoi** — quatre mercredis, cinq fiches. La question de la
 *   semaine est la sienne et ne peut pas être écrite d'avance : chaque fiche
 *   donne donc la méthode, et une question prête pour le jour où la boîte est
 *   vide, avec sa réponse vérifiée et l'endroit où la connaissance s'arrête.
 * - **Cuisine et mesures** — deux mercredis, trois fiches. La recette entière
 *   en grammes et en millilitres, les conversions et leurs réponses, et ce qui
 *   ne double pas quand on double.
 * - **Une expérience** — trois mercredis, quatre fiches. Dissoudre, filtrer,
 *   peser : ce qui se passe vraiment, et pourquoi.
 * - **Démonter un objet** — deux mercredis, trois fiches. Rien de branché sur
 *   le secteur, rien qui contienne un condensateur ou une batterie.
 * - **Programmer un déplacement** — deux mercredis, trois fiches. Sans écran.
 *   L'adulte exécute à la lettre, et le bug est l'intérêt de la séance.
 *
 * Chaque série a une fiche de plus que de mercredis : la dernière attend une
 * année qui déborde, ou remplace une séance qui ne prend pas. Les séries sont
 * rangées dans l'ordre où elles commencent dans l'année, et chaque série dans
 * l'ordre de ses dates.
 *
 * Une fiche du mercredi donne le déroulé, **le matériel de la maison à sortir**,
 * et la question qu'on pose **avant** de commencer — celle dont on cherche la
 * réponse ensuite. Quand il y a le moindre risque, elle dit ce que l'adulte
 * tient lui-même.
 *
 * Ce qu'une fiche donne, et pourquoi : voir `lib/fiches/types.ts`.
 *
 * **Réservé aux adultes** : ces fiches portent les corrigés.
 *
 * Rien de tout ceci n'a été relu par un enseignant. Ça doit l'être.
 */

import { f, type Fiche } from "./types";

export const mercredi: Fiche[] = [
  /* ================================================================== */
  /* LA BOÎTE À POURQUOI — 23 septembre, 16 décembre, 24 mars, 16 juin   */
  /* ================================================================== */

  f(
    "mw-pourquoi-01",
    "La boîte à pourquoi",
    "Pourquoi 1 · chercher à deux, et le ciel bleu",
    [
      "La question de la semaine ne peut pas être écrite ici : c’est la sienne, et elle passe toujours avant celle de la fiche. La fiche donne donc deux choses — la façon de chercher, qui sert pour n’importe quelle question, et une question prête avec sa réponse, pour le jour où la boîte est vide. Une boîte vide ne se reproche pas : on prend la question prête.",
      "Les questions s’attrapent dans la semaine : une feuille sur le frigo, où lui ou l’adulte qui l’a entendu en écrit une dès qu’elle passe. Le mercredi, c’est lui qui choisit laquelle on creuse.",
      "Déroulé : cinq minutes pour écrire la question et dire ce que chacun croit déjà, trente minutes à chercher, dix minutes pour écrire en deux phrases ce qu’on a trouvé et, en dessous, là où on s’est arrêté.",
      "Avant la séance : faire l’expérience du verre une fois seul, avec une lampe de poche plutôt qu’une LED très blanche, et ajuster le nombre de gouttes de lait jusqu’à voir le liquide bleuter de côté. Si, le jour venu, l’effet reste invisible, on le dit franchement : « à la maison, ça ne se voit presque pas ». On explique ce qu’on aurait dû voir — le corrigé de la question 2 le décrit —, et la séance continue : ne pas voir fait partie du travail de chercher.",
      "L’adulte a le droit de ne pas savoir, et il est utile qu’il le dise à voix haute : « je ne sais pas, on cherche ». Le jour où ça ne va pas, on garde seulement le premier temps — la question écrite et ce qu’on croit — et on range la feuille : la question attendra.",
    ],
    [
      "À sortir : la feuille ou le carnet des pourquoi, un crayon ; un livre documentaire ou une encyclopédie s’il y en a un à la maison. Pour la question prête : un grand verre transparent, de l’eau, un peu de lait, une cuillère à café, une lampe de poche, une pièce qu’on peut assombrir.",
      "**Chercher** — d’abord ce qu’on croit déjà, chacun son idée, écrite telle quelle même si elle semble fausse. Ensuite on regarde : un livre, une observation qu’on peut faire soi-même, une personne qui sait.",
      "**Où** — un documentaire de la maison ou de la médiathèque ; une personne dont c’est le métier ; internet seulement par l’adulte, sur le site d’un musée des sciences, d’une université ou d’un organisme de recherche, et jamais la première réponse venue.",
      "**Savoir qu’on a trouvé** — la réponse explique ce qu’on voit, et on sait la redire avec ses mots. Si on ne peut que la recopier, on n’a pas encore trouvé.",
      "**S’arrêter** — quand la réponse ouvre un nouveau pourquoi auquel ni l’un ni l’autre ne sait répondre. On l’écrit en bas de la feuille, sous « on cherche encore ». C’est un résultat de la séance, au même titre que la réponse.",
      "1. La question prête : « Pourquoi le ciel est-il bleu ? » Chacun écrit ce qu’il croit avant de chercher.",
      "2. L’expérience : remplir le verre d’eau, y verser quelques gouttes de lait — une demi-cuillère à café au plus —, remuer. Dans la pièce sombre, éclairer le verre par le côté avec la lampe. Regarder le liquide de côté, puis regarder la lampe à travers le verre.",
      "3. Et pourquoi le ciel devient-il orange ou rouge quand le soleil se couche ?",
      "4. Le violet est dévié encore plus que le bleu. Pourquoi le ciel n’est-il pas violet ?",
      "5. Là où on s’arrête.",
    ],
    [
      "",
      "",
      "",
      "",
      "",
      "La lumière du soleil paraît blanche, mais elle contient toutes les couleurs : un arc-en-ciel les sépare. En traversant l’air, elle rencontre ses molécules, surtout d’azote et d’oxygène, qui la dévient dans toutes les directions — et elles dévient beaucoup plus le bleu que le rouge. Ce bleu dévié nous arrive de tous les coins du ciel : le ciel paraît bleu. Les nuages sont blancs parce que leurs gouttelettes, bien plus grosses, dévient toutes les couleurs à peu près autant.",
      "De côté, le liquide paraît légèrement bleuté ; à travers le verre, la lampe paraît jaune orangé. Les gouttelettes du lait jouent le rôle de l’air : elles renvoient sur le côté un peu plus de bleu, et la lumière qui traverse en a perdu. L’effet est faible, et l’imitation imparfaite : les gouttelettes du lait sont bien plus grosses que les molécules de l’air. Avec trop de lait, tout devient blanc ; on recommence avec moins.",
      "Le soir, le soleil est bas : sa lumière traverse une couche d’air beaucoup plus épaisse avant d’arriver jusqu’à nous. En chemin, presque tout le bleu a été dévié ailleurs, et ce qui reste est orange et rouge. C’est ce qu’on voyait en regardant la lampe à travers le verre.",
      "Deux raisons : le soleil envoie moins de violet que de bleu, et nos yeux sont beaucoup moins sensibles au violet qu’au bleu. Le mélange de lumières déviées qui nous arrive du ciel, surtout du bleu avec un peu de violet et de vert, nous paraît bleu.",
      "La règle — l’air dévie d’autant plus une couleur qu’elle tire vers le bleu — a été expliquée vers 1870 par un physicien anglais, Lord Rayleigh. Dire pourquoi elle est vraie demande de savoir ce qu’est une onde : c’est un bon endroit pour s’arrêter, et « pourquoi l’air dévie-t-il plus le bleu ? » va sous « on cherche encore ». Un pourquoi voisin, pour une autre fois : sur Mars, le ciel de jour est plutôt orangé, à cause de la poussière.",
    ],
    "Ce qu’on observe : est-ce qu’il ose écrire ce qu’il croit avant de chercher, même quand il pense que c’est faux ; et comment il reçoit le moment où l’adulte dit « je ne sais pas ». S’il s’inquiète de n’avoir rien mis dans la boîte, c’est ça qu’on reprend avant tout : la question prête existe exactement pour ce jour-là.",
  ),

  f(
    "mw-pourquoi-02",
    "La boîte à pourquoi",
    "Pourquoi 2 · mettre une réponse à l’épreuve, et l’hiver",
    [
      "Sa question de la semaine passe avant celle de la fiche. La fiche donne la méthode, qui sert pour toutes, et une question prête pour le jour où la boîte est vide.",
      "Ce qu’on ajoute à la méthode aujourd’hui : une réponse trouvée n’est pas encore une réponse vraie. On la met à l’épreuve en cherchant un autre fait qu’elle devrait expliquer aussi. Si elle ne l’explique pas, elle est fausse, même quand beaucoup de gens la répètent.",
      "Déroulé : cinq minutes pour la question et ce que chacun croit, trente minutes à chercher et à essayer la lampe, dix minutes pour écrire ce qu’on a trouvé et là où on s’est arrêté.",
      "Le jour où ça ne va pas : on fait seulement l’expérience de la lampe, sans rien écrire, et la question retourne dans la boîte pour une autre fois.",
    ],
    [
      "À sortir : la feuille des pourquoi, un crayon, une feuille à carreaux, une lampe de poche, une règle ; un globe ou une carte du monde si on en a une. Une pièce qu’on peut assombrir.",
      "**Chercher** — chacun écrit ce qu’il croit, puis on cherche dans un livre, par une observation, ou auprès de quelqu’un qui sait.",
      "**Où** — un documentaire ; un calendrier ou un almanach qui donne l’heure du lever et du coucher du soleil ; internet par l’adulte seulement, sur un site de musée des sciences ou d’observatoire.",
      "**Savoir qu’on a trouvé** — la réponse explique ce qu’on voit, et elle explique aussi un autre fait, qu’on n’avait pas en tête au départ. C’est l’épreuve du jour.",
      "**S’arrêter** — quand plus personne ne sait répondre au pourquoi suivant. On l’écrit sous « on cherche encore ».",
      "1. La question prête : « Pourquoi fait-il plus froid en hiver ? » Chacun écrit ce qu’il croit.",
      "2. Une réponse qu’on entend souvent : « parce que la Terre est plus loin du Soleil ». Si c’était vrai, quel temps ferait-il en Australie en décembre ?",
      "3. Chercher à quel moment de l’année la Terre est le plus près du Soleil.",
      "4. L’expérience : dans la pièce sombre, tenir la lampe bien droite à vingt centimètres au-dessus de la feuille à carreaux, et entourer au crayon la tache de lumière. Puis la pencher fortement, à la même distance, et entourer la nouvelle tache. Laquelle couvre le plus de carreaux ? Laquelle est la plus lumineuse ?",
      "5. Combien d’heures de jour aujourd’hui, et combien fin juin ?",
      "6. Là où on s’arrête.",
    ],
    [
      "",
      "",
      "",
      "",
      "",
      "La Terre tourne autour du Soleil en restant penchée : son axe est incliné d’environ 23 degrés, toujours dans la même direction. En décembre, la moitié nord de la Terre, où nous vivons, est penchée à l’écart du Soleil : il monte peu dans le ciel et les jours sont courts. Moins de lumière reçue, et moins longtemps : il fait plus froid.",
      "En Australie, en Argentine, en Afrique du Sud, décembre est en plein été. Si l’hiver venait de la distance, il ferait froid partout sur Terre en même temps. Ce n’est pas le cas : la réponse est fausse, et c’est ce fait-là qui le montre.",
      "Début janvier, à environ 147 millions de kilomètres. Début juillet, elle en est le plus loin, vers 152 millions. Nous sommes donc au plus près du Soleil en plein hiver : ce n’est pas la distance qui fait les saisons.",
      "Lampe droite, la tache est petite et vive. Lampe penchée, la même lumière s’étale sur beaucoup plus de carreaux, et chaque carreau en reçoit moins : la tache est plus pâle. C’est ce qui arrive au sol en hiver : le Soleil est bas, sa lumière arrive de biais et chauffe moins chaque morceau de sol.",
      "Ça dépend de l’endroit où l’on vit. Autour du 21 décembre, le jour le plus court de l’année : environ 8 heures à Lille, 8 heures et quart à Paris, 9 heures à Marseille. Autour du 21 juin, le plus long : environ 16 heures et demie à Lille, un peu plus de 16 heures à Paris, un peu moins de 15 heures et demie à Marseille. Dans le nord, c’est à peu près le double ; plus on va vers le sud, plus l’écart diminue.",
      "Pourquoi l’axe de la Terre est-il penché ? Les scientifiques pensent que des chocs géants, à l’époque où la Terre se formait, y sont pour quelque chose, mais personne ne le sait avec certitude : c’est une vraie limite, pas seulement la nôtre. Un pourquoi voisin qui, lui, a une réponse : le plus froid arrive en janvier et en février plutôt que le 21 décembre, parce que le sol et la mer rendent lentement la chaleur gardée de l’été.",
    ],
    "Ce qu’on observe : est-ce qu’il laisse tomber une réponse qu’il croyait vraie sans le prendre pour une faute. Si l’idée de la distance était la sienne, on le lui dit tel quel : c’est une idée qui a l’air logique, et c’est en la mettant à l’épreuve qu’on a trouvé mieux — exactement le travail du jour.",
  ),

  f(
    "mw-pourquoi-03",
    "La boîte à pourquoi",
    "Pourquoi 3 · un pourquoi en cache deux, et le chat qui ronronne",
    [
      "Sa question de la semaine passe avant celle de la fiche. La question prête sert le jour où la boîte est vide, et seulement ce jour-là.",
      "Ce qu’on ajoute à la méthode : un pourquoi en cache souvent deux — comment ça se fait, et à quoi ça sert. On les sépare avant de chercher, parce qu’ils n’ont pas toujours le même sort : l’un peut avoir une réponse et l’autre pas.",
      "Aujourd’hui on cherche surtout dans un livre : le sommaire ou l’index plutôt que feuilleter, le passage lu à voix haute, puis le livre fermé, et on redit avec ses mots.",
      "Le jour où ça ne va pas : l’adulte lit, lui écoute, et on ne garde que la question 4. S’il y a un chat à la maison, on ne le force à rien : on le regarde ronronner s’il en a envie.",
    ],
    [
      "À sortir : la feuille des pourquoi, un crayon, un documentaire sur les animaux ou une encyclopédie, de la maison ou de la médiathèque.",
      "**Chercher** — chacun écrit ce qu’il croit, puis on coupe la question en deux sur la feuille : « comment » d’un côté, « à quoi ça sert » de l’autre.",
      "**Où** — dans le livre, par le sommaire ou l’index ; auprès d’une personne dont c’est le métier, un vétérinaire par exemple ; sur internet par l’adulte seulement, sur un site de musée d’histoire naturelle ou d’organisme de recherche.",
      "**Savoir qu’on a trouvé** — on sait redire la réponse livre fermé. Et on guette les mots « on pense que », « peut-être », « on ne sait pas » : ils disent que la réponse n’est pas encore trouvée, par personne.",
      "**S’arrêter** — quand ces mots-là apparaissent, ou quand ni l’un ni l’autre ne sait aller plus loin. On écrit ce qui reste sous « on cherche encore ».",
      "1. La question prête : « Pourquoi les chats ronronnent-ils ? » Chacun écrit ce qu’il croit, puis on la coupe en deux.",
      "2. Poser la main à plat sur son propre cou et faire le son le plus grave possible, bouche fermée. Où sent-on la vibration ?",
      "3. D’où vient le son du ronronnement, et à quel moment de la respiration ?",
      "4. Un chat ronronne-t-il seulement quand il est content ?",
      "5. À quoi le ronronnement sert-il ?",
      "6. Là où on s’arrête.",
    ],
    [
      "",
      "",
      "",
      "",
      "",
      "Deux questions en une : comment le chat fabrique ce son, et à quoi il lui sert. La première a une réponse assez sûre ; la seconde, pas encore.",
      "Au milieu du cou, là où se trouve le larynx : c’est l’endroit où se fabrique la voix. Chez le chat aussi, le ronronnement vient de là.",
      "Du larynx, dans la gorge. Le chat ronronne en inspirant comme en expirant, c’est pourquoi le son ne s’interrompt presque pas. C’est un son très grave, de quelques dizaines de vibrations par seconde.",
      "Non. Il ronronne quand on le caresse, mais aussi quand il est blessé, malade ou chez le vétérinaire. Les chatons ronronnent très tôt, en tétant, et la mère ronronne en les allaitant.",
      "On ne le sait pas avec certitude. Plusieurs idées sont étudiées : se calmer soi-même, garder le lien avec sa mère ou avec les humains. Des chercheurs anglais ont montré en 2009 que certains chats glissent dans leur ronronnement, quand ils réclament à manger, un son plus aigu qui rappelle un pleur, et que les humains le trouvent plus pressant. Une autre idée circule, que ces vibrations aideraient les os à se réparer : elle n’est pas démontrée.",
      "Même le « comment » n’est pas complètement réglé. On pensait que des muscles du larynx se contractaient à chaque vibration ; en 2023, une équipe de chercheurs a montré qu’un larynx de chat pouvait produire ce son très grave sans ces contractions, grâce à de petits coussinets de tissu dans les cordes vocales. La question est ouverte chez les scientifiques eux-mêmes : l’écrire sous « on cherche encore », c’est être exactement là où ils en sont.",
    ],
    "Ce qu’on observe : est-ce qu’il sépare seul le « comment » du « à quoi ça sert », et ce qu’il fait quand un livre dit « on ne sait pas ». S’il trouve ça décevant, c’est le moment de lui dire que les chercheurs qui y consacrent leur métier en sont au même point que lui ce mercredi.",
  ),

  f(
    "mw-pourquoi-04",
    "La boîte à pourquoi",
    "Pourquoi 4 · lire une étiquette, et la mer salée",
    [
      "Sa question de la semaine passe avant celle de la fiche. La question prête sert le jour où la boîte est vide.",
      "Ce qu’on ajoute à la méthode : les réponses se cachent aussi dans les objets de tous les jours. L’étiquette d’une bouteille d’eau est un document, et on apprend à le lire.",
      "Déroulé : on prépare les deux soucoupes dès le début, parce qu’elles demandent plusieurs jours ; pendant qu’elles attendent, on cherche. Les dix dernières minutes, on écrit ce qu’on a trouvé et là où on s’est arrêté.",
      "Le jour où ça ne va pas : on remplit les deux soucoupes, on les pose près d’une fenêtre, et c’est tout. Les soucoupes feront la suite toutes seules, et on les regardera ensemble plus tard.",
    ],
    [
      "À sortir : la feuille des pourquoi, un crayon ; une balance de cuisine, un verre doseur, un verre, une cuillère à café, une cuillère à soupe, du sel fin, de l’eau du robinet ; deux soucoupes, foncées de préférence ; une bouteille d’eau minérale avec son étiquette.",
      "**Chercher** — chacun écrit ce qu’il croit ; puis on cherche dans un livre, dans ce qu’on peut observer, et sur l’étiquette de la bouteille.",
      "**Où** — un documentaire sur la mer ou sur l’eau ; l’étiquette ; une personne dont c’est le métier ; internet par l’adulte seulement, sur un site d’organisme de recherche sur la mer ou de musée des sciences.",
      "**Savoir qu’on a trouvé** — la réponse explique ce qu’on voit dans la soucoupe, et elle explique aussi un fait qu’on n’avait pas en tête au départ.",
      "**S’arrêter** — quand plus personne ne sait répondre au pourquoi suivant. On l’écrit sous « on cherche encore ».",
      "1. La question prête : « Pourquoi la mer est-elle salée, et pas les rivières ? » Chacun écrit ce qu’il croit.",
      "2. L’eau de l’océan contient environ 35 g de sels par litre. Combien de sel faut-il pour 200 mL d’eau aussi salée que la mer ? Peser, verser, remuer, goûter du bout du doigt.",
      "3. Une cuillère à soupe de cette eau salée dans une soucoupe, une cuillère à soupe d’eau du robinet dans l’autre, les deux près d’une fenêtre. Écrire ce qu’on croit qu’il restera dans chacune quand l’eau sera partie.",
      "4. Sur l’étiquette de l’eau minérale, chercher la ligne « résidu sec ». Qu’est-ce que ça veut dire ?",
      "5. D’où vient le sel de la mer ?",
      "6. Si les rivières apportent du sel depuis toujours, pourquoi la mer ne devient-elle pas de plus en plus salée ?",
      "7. Là où on s’arrête.",
    ],
    [
      "",
      "",
      "",
      "",
      "",
      "",
      "7 g. 200 mL, c’est cinq fois moins qu’un litre, et 35 divisé par 5 donne 7. Une balance de cuisine affiche au gramme près et n’est pas toujours juste pour de si petites quantités : un gramme de plus ou de moins ne change rien au goût.",
      "Au bout de quelques jours, la soucoupe d’eau salée garde de petits cristaux blancs : le sel n’est pas parti avec l’eau. Celle du robinet laisse parfois une trace blanchâtre, bien plus légère, surtout là où l’eau est calcaire : l’eau du robinet contient elle aussi un peu de minéraux dissous.",
      "C’est ce qui reste quand on fait évaporer entièrement un litre de cette eau, pesé en milligrammes : les minéraux qu’elle contenait, dissous. Selon l’eau, de quelques dizaines à quelques milliers de milligrammes par litre. L’eau de mer en contient autour de 35 000 : c’est la même idée, en beaucoup plus.",
      "La pluie dissout très lentement un peu des roches et des sols qu’elle traverse. Les rivières emportent ces minéraux jusqu’à la mer, en si petite quantité qu’on ne les goûte pas. En mer, le soleil fait évaporer l’eau, mais les sels restent, comme dans la soucoupe ; sur des millions d’années, la mer est devenue salée. Des sources chaudes et des volcans au fond des océans en apportent aussi. Le sel le plus abondant est celui de la cuisine. Un fait qui confirme l’explication : les lacs sans sortie vers la mer, où l’eau ne s’en va qu’en s’évaporant, deviennent très salés — la mer Morte l’est près de dix fois plus que l’océan.",
      "Parce que du sel s’en va aussi : il se dépose au fond, se prend dans les boues et dans les roches, forme des couches de sel — celles qu’on exploite dans les mines de sel. Les scientifiques pensent que ce qui arrive et ce qui s’en va se compensent à peu près depuis très longtemps.",
      "Combien la mer était salée il y a des milliards d’années est encore étudié : il n’en reste pas d’eau à goûter, seulement des indices dans les roches. L’arrêt viendra peut-être plus tôt pour lui — pourquoi le sel se dissout-il dans l’eau ? — et c’est un bon arrêt : c’est de la chimie, et ça va sous « on cherche encore ».",
    ],
    "Ce qu’on observe : est-ce qu’il fait de lui-même le lien entre la soucoupe et la mer. Et est-ce qu’il revient voir les soucoupes les jours suivants sans qu’on le lui rappelle : une curiosité qui dure après la séance en dit plus que ce qu’il a retenu pendant.",
  ),

  f(
    "mw-pourquoi-05",
    "La boîte à pourquoi",
    "Pourquoi 5 · trois façons de ne pas savoir, et le bâillement",
    [
      "Fiche de réserve. Sa question de la semaine passe avant celle de la fiche ; la question prête sert le jour où la boîte est vide.",
      "Ce qu’on ajoute à la méthode : il y a trois façons de ne pas savoir. « Je ne sais pas » — quelqu’un sait, on peut chercher. « On sait, mais c’est trop difficile pour aujourd’hui » — on garde la question pour plus tard. « Personne ne sait » — les chercheurs eux-mêmes cherchent encore. Aucune n’est un échec ; on apprend à les reconnaître.",
      "La question prête a une particularité : en parler fait bâiller. On le lui annonce avant, et on s’en amuse ensemble, sans compter qui bâille.",
      "Le jour où ça ne va pas : on lit seulement les trois façons de ne pas savoir, et on range dans l’une des trois chaque question qui attend dans la boîte. C’est court, et c’est le cœur de la méthode.",
    ],
    [
      "À sortir : la feuille des pourquoi, un crayon, une feuille partagée en trois colonnes — « je ne sais pas », « trop difficile pour aujourd’hui », « personne ne sait ».",
      "**Chercher** — chacun écrit ce qu’il croit ; puis on cherche dans un livre, par une observation, ou auprès de quelqu’un qui sait.",
      "**Où** — un documentaire sur le corps humain ; une personne dont c’est le métier, un médecin par exemple ; internet par l’adulte seulement, sur un site de musée des sciences ou d’organisme de recherche.",
      "**Savoir qu’on a trouvé** — la réponse a été mise à l’épreuve, et elle a tenu. Si la source dit « on pense que » ou « peut-être », la réponse n’est pas trouvée : elle est cherchée.",
      "**S’arrêter** — quand on sait dans laquelle des trois colonnes ranger ce qui reste. Savoir pourquoi on ne sait pas, c’est déjà une réponse.",
      "1. La question prête : « Pourquoi bâille-t-on ? » Chacun écrit ce qu’il croit.",
      "2. Qui bâille ? Chercher si les animaux bâillent, et si un bébé bâille avant de naître.",
      "3. Depuis le début de la séance, a-t-on bâillé en lisant ou en entendant le mot « bâiller » ? Pourquoi ?",
      "4. L’explication qu’on entend souvent : « on bâille parce qu’on manque d’air ». Comment pourrait-on la mettre à l’épreuve ?",
      "5. Alors, pourquoi bâille-t-on ?",
      "6. Ranger chaque morceau de la réponse dans l’une des trois colonnes.",
    ],
    [
      "",
      "",
      "",
      "",
      "",
      "",
      "Les chiens, les chats, les singes bâillent, comme beaucoup d’autres mammifères. Un bébé bâille avant de naître : on le voit sur les échographies.",
      "Probablement, et c’est attendu : le bâillement est contagieux. Voir quelqu’un bâiller, l’entendre, lire le mot ou seulement y penser suffit souvent à déclencher le sien. Ça, c’est bien établi ; pourquoi il est contagieux, en revanche, n’est pas tranché.",
      "En faisant respirer à des volontaires un air plus riche en oxygène, et en regardant s’ils bâillent moins. Des chercheurs américains l’ont fait dans les années 1980 : ils ne bâillaient pas moins. L’explication du manque d’air, très répandue, n’a pas tenu l’épreuve.",
      "On ne sait pas. Plusieurs idées sont étudiées : refroidir le cerveau, aider à passer d’un état à un autre — du sommeil à l’éveil, de l’ennui à l’attention —, se mettre au diapason du groupe. Aucune n’est démontrée pour de bon.",
      "« Personne ne sait » : à quoi sert le bâillement, et pourquoi il est contagieux. Ce qu’on sait, à écrire au-dessus des colonnes : on bâille avant de naître, c’est contagieux, et le manque d’air n’est pas l’explication. La colonne « trop difficile pour aujourd’hui » peut rester vide cette fois : une colonne vide est une réponse aussi.",
    ],
    "Ce qu’on observe : est-ce qu’il distingue « je ne sais pas » de « personne ne sait », et ce que ça lui fait. S’il découvre que des adultes dont c’est le métier en sont au même point que lui, il tient quelque chose d’important pour tout le reste de l’année : ne pas savoir n’est pas une place à part.",
  ),

  /* ================================================================== */
  /* CUISINE ET MESURES — 14 octobre, 7 avril                            */
  /* ================================================================== */

  f(
    "mw-cuisine-01",
    "Cuisine et mesures",
    "Cuisine 1 · le gâteau au yaourt, pesé",
    [
      "Avant de sortir quoi que ce soit, on pose la question 1, et chacun écrit sa réponse. On y revient à la fin : c’est elle, la séance.",
      "Déroulé : cinq minutes pour la question ; quinze minutes pour peser et mélanger — c’est lui qui lit la balance et qui verse ; l’adulte enfourne ; puis, pendant la cuisson, les calculs du doublement sur une feuille, et la réponse à la question 1. Le gâteau finit de cuire après la séance.",
      "Avant la séance : faire le gâteau une fois seul, pour régler le temps de cuisson sur son four et voir comment la pâte se tient. Si le four cuit plus vite, on garde le temps trouvé ce jour-là ; les calculs de la séance, eux, ne changent pas.",
      "Sécurité : l’adulte allume le four, enfourne, sort le moule et pique la lame. Le moule reste hors de portée tant qu’il est chaud. On ne goûte pas la pâte crue : œufs crus et farine crue ne se mangent pas.",
      "Le jour où ça ne va pas : l’adulte pèse, lui verse et mélange, et les calculs restent pour une autre fois. Le gâteau suffit à la séance.",
    ],
    [
      "À sortir : une balance de cuisine, un verre doseur gradué en millilitres, un saladier, un fouet ou une fourchette, une cuillère en bois, une cuillère à café, un moule rond de 22 à 24 cm, une feuille et un crayon. L’adulte allume le four à 180 °C au début de la séance.",
      "La recette, pour un moule : 125 g de yaourt nature (un pot), 3 œufs, 150 g de sucre, 200 g de farine, 5 g de levure chimique (la moitié d’un sachet de 11 g, soit une cuillère à café rase), 80 mL d’huile de tournesol, un peu de beurre pour le moule.",
      "Les étapes : le yaourt dans le saladier ; les œufs un par un, en mélangeant ; le sucre ; la farine et la levure, en mélangeant jusqu’à ne plus voir de grumeaux ; l’huile ; beurrer le moule et y verser la pâte. L’adulte enfourne pour 30 à 35 minutes à 180 °C.",
      "1. Avant de commencer, chacun écrit sa réponse : « Si on doublait toutes les quantités, faudrait-il laisser le gâteau deux fois plus longtemps au four ? »",
      "2. Poser le saladier sur la balance et appuyer sur le bouton qui remet à zéro, puis remettre à zéro avant chaque ingrédient. Pourquoi ?",
      "3. 80 mL d’huile, c’est combien de centilitres ?",
      "4. Le paquet de farine pèse 1 kg. Combien de grammes reste-t-il après la recette ?",
      "5. Combien de gâteaux comme celui-ci ferait-on avec le paquet entier ?",
      "6. Doubler la recette : écrire la quantité de chaque ingrédient pour deux gâteaux.",
      "7. Pour deux gâteaux, faut-il régler le four à 360 °C ?",
      "8. Pour deux gâteaux, peut-on verser toute la pâte dans le même moule ?",
      "9. Retour à la question 1 : que change le doublement sur le temps de cuisson ?",
    ],
    [
      "",
      "",
      "",
      "On garde la réponse écrite telle quelle, sans la corriger : on y revient à la question 9.",
      "Pour que la balance ne pèse que ce qu’on ajoute, et pas le saladier ni ce qui s’y trouve déjà. Sans remise à zéro, il faudrait additionner à chaque fois : le saladier, plus 125 g, plus 150 g… Les deux façons donnent la bonne quantité ; la remise à zéro évite le calcul.",
      "8 cL",
      "800 g",
      "5 gâteaux",
      "250 g de yaourt (deux pots), 6 œufs, 300 g de sucre, 400 g de farine, 10 g de levure (un sachet entier de 11 g fait l’affaire), 160 mL d’huile, soit 16 cL.",
      "Non : 180 °C reste 180 °C. Une température ne s’additionne pas quand on double une recette. À 360 °C, le dessus brûlerait bien avant que le cœur soit cuit — et la plupart des fours de cuisine ne montent pas si haut pour cuire.",
      "Non. La pâte serait deux fois plus haute : elle déborderait en gonflant, ou le dessus cuirait pendant que le cœur resterait cru. Il faut deux moules pareils, ou un moule plus grand. Pas un moule de 44 cm : il contient quatre fois plus, pas deux fois. Pour doubler la surface d’un moule rond de 22 cm, il faut environ 31 cm.",
      "Avec deux moules identiques enfournés ensemble, la cuisson reste autour de 30 à 35 minutes, parfois quelques minutes de plus parce que le four est plus chargé. Ce n’est pas la quantité totale de pâte qui fixe le temps, c’est l’épaisseur de chaque gâteau. On vérifie à la lame d’un couteau, piquée au centre par l’adulte : elle doit ressortir sèche.",
    ],
    "Ce qu’on observe : est-ce qu’il lit la balance sans aide, et ce qu’il fait quand il dépasse — 212 g au lieu de 200. Si ça l’inquiète, on le lui dit franchement : douze grammes de farine en plus ne changent pas un gâteau, et savoir de combien on peut s’écarter sans que ça compte fait partie de la cuisine. Et s’il avait écrit « deux fois plus longtemps » à la question 1, c’est la découverte du jour, pas une erreur.",
  ),

  f(
    "mw-cuisine-02",
    "Cuisine et mesures",
    "Cuisine 2 · les crêpes, et le temps devant la poêle",
    [
      "Avant de sortir quoi que ce soit, on pose la question 1, et chacun écrit sa réponse. On y revient à la fin.",
      "Déroulé : quinze minutes pour peser, mesurer et faire la pâte — c’est lui qui lit la balance et le verre doseur ; quinze minutes de calculs à table ; les quinze dernières minutes, l’adulte cuit les premières crêpes et lui chronomètre.",
      "Sécurité : la plaque de cuisson, la poêle et l’huile chaude sont à l’adulte seul. La queue de la poêle est tournée vers l’intérieur, et lui chronomètre à un pas en retrait de la plaque, sans rien toucher. Une crêpe sort brûlante : on attend qu’elle tiédisse dans l’assiette. On ne goûte pas la pâte crue.",
      "Le jour où ça ne va pas : on fait la moitié de la recette (question 7), pesée ensemble, et on s’arrête aux calculs déjà faits. Les crêpes, elles, se mangent quand même.",
    ],
    [
      "À sortir : une balance de cuisine, un verre doseur gradué en millilitres, un grand saladier, un fouet, une louche, une cuillère à soupe, une poêle de 24 cm environ, une montre ou un minuteur, une feuille et un crayon.",
      "La recette, pour une quinzaine de crêpes : 250 g de farine, 4 œufs, 500 mL de lait, une pincée de sel, une cuillère à soupe de sucre (environ 15 g), deux cuillères à soupe d’huile (30 mL), et un peu d’huile pour la poêle.",
      "Les étapes : la farine, le sel et le sucre dans le saladier ; un creux au milieu ; les œufs dans le creux, mélanger ; le lait peu à peu en fouettant, pour éviter les grumeaux ; l’huile. La pâte peut se cuire tout de suite. L’adulte cuit : une petite louche par crêpe dans la poêle chaude et huilée, retournée quand le bord se décolle.",
      "1. Avant de commencer, chacun écrit sa réponse : « Si on doublait la recette, une crêpe mettrait-elle deux fois plus de temps à cuire ? Et combien de temps passerait-on devant la poêle ? »",
      "2. 500 mL de lait, c’est combien de centilitres ? de décilitres ? quelle part d’un litre ?",
      "3. Poser le verre doseur vide sur la balance, remettre à zéro, verser 500 mL de lait. Qu’affiche la balance ?",
      "4. Peser un œuf avec sa coquille. Chercher son calibre sur la boîte.",
      "5. Doubler la recette : écrire la quantité de chaque ingrédient.",
      "6. Une boîte contient 6 œufs. Suffit-elle pour la recette doublée ?",
      "7. Faire la moitié de la recette : écrire la quantité de chaque ingrédient.",
      "8. Pendant la cuisson : chronométrer une crêpe, du moment où la pâte touche la poêle au moment où elle en sort.",
      "9. Avec ce temps, combien de temps devant la poêle pour une quinzaine de crêpes ? Et pour la recette doublée ?",
      "10. Retour à la question 1 : qu’est-ce qui double quand on double, et qu’est-ce qui ne double pas ?",
    ],
    [
      "",
      "",
      "",
      "On garde la réponse écrite telle quelle : on y revient à la question 10.",
      "50 cL, 5 dL, un demi-litre (0,5 L).",
      "Un peu plus de 500 g, autour de 515 g : à volume égal, le lait est un peu plus lourd que l’eau. Le verre doseur n’est pas précis à quelques millilitres près, donc 505 g ou 525 g sont possibles aussi. C’est l’occasion de voir qu’un millilitre et un gramme ne sont pas la même chose, même s’ils tombent presque ensemble pour l’eau.",
      "Ce que dit la balance. Un œuf de calibre M, « moyen », pèse entre 53 et 63 g avec sa coquille ; un œuf L, « gros », entre 63 et 73 g.",
      "500 g de farine, 8 œufs, 1 L de lait, deux pincées de sel, deux cuillères à soupe de sucre (environ 30 g), quatre cuillères à soupe d’huile (60 mL, soit 6 cL).",
      "Non : il en faut 8, il en manque 2. Il faut entamer une deuxième boîte.",
      "125 g de farine, 2 œufs, 250 mL de lait (25 cL), une pincée de sel, une demi-cuillère à soupe de sucre, une cuillère à soupe d’huile (15 mL).",
      "Ce que dit la montre : en général entre une et deux minutes, selon la poêle, le feu et l’épaisseur de la pâte. C’est sa mesure qui sert pour la question suivante.",
      "Avec une minute et demie par crêpe : 22 minutes et demie pour 15 crêpes, et 45 minutes pour 30. Avec deux minutes : 30 minutes, puis une heure. Le temps devant la poêle double, et il faut y ajouter un peu de temps entre deux crêpes, pour huiler la poêle et verser la pâte.",
      "Ce qui ne double pas : le temps de cuisson d’une crêpe — même poêle, même épaisseur, même temps —, la taille de la poêle, la chaleur du feu. Ce qui double : chaque ingrédient, le nombre de crêpes, et donc le temps passé devant la poêle. Le saladier, lui, doit contenir à peu près deux litres de pâte.",
    ],
    "Ce qu’on observe : est-ce qu’il sépare seul le temps d’une crêpe du temps de toutes les crêpes. C’est la vraie difficulté de la séance, et elle n’a rien d’évident. S’il mélange les deux, on ne corrige pas : on regarde une deuxième crêpe cuire, montre en main, et la réponse vient de la poêle plutôt que de l’adulte.",
  ),

  f(
    "mw-cuisine-03",
    "Cuisine et mesures",
    "Cuisine 3 · les cookies, et ce qui cuit par plaques",
    [
      "Fiche de réserve. Avant de sortir quoi que ce soit, on pose la question 1, et chacun écrit sa réponse.",
      "Déroulé : quinze minutes pour peser et faire la pâte ; dix minutes pour peser la pâte entière et former les boules ; pendant que la plaque cuit, les calculs à table ; les dernières minutes, retour à la question 1.",
      "Avant la séance : faire les cookies une fois seul, pour régler le temps de cuisson sur son four et voir comment la pâte se tient — et comment les boules s’étalent sur la plaque. Si le four cuit plus vite, on garde le temps trouvé ce jour-là ; les calculs de la séance, eux, ne changent pas : ils partent des 11 minutes écrites dans la question 5.",
      "Sécurité : l’adulte allume le four, enfourne, sort la plaque et coupe le chocolat s’il est en tablette. Une plaque qui sort du four reste brûlante longtemps : les boules de la deuxième fournée se posent sur une feuille de papier cuisson à plat sur la table, et c’est l’adulte qui la fait glisser sur la plaque. Les cookies sortent mous et brûlants : l’adulte les fait glisser, sur leur papier, sur une grille ou une planche hors de portée, où ils durcissent en une dizaine de minutes. On ne goûte pas la pâte crue.",
      "Le jour où ça ne va pas : on fait la pâte et les boules ensemble, sans les calculs. Former des boules de 30 g sur la balance est déjà une séance de mesure entière.",
    ],
    [
      "À sortir : une balance de cuisine, un saladier, une fourchette ou une spatule, une cuillère à café, une plaque de four, deux feuilles de papier cuisson, une grille ou une planche pour faire refroidir, une feuille et un crayon. Le beurre est sorti du réfrigérateur une heure avant, pour être mou. L’adulte allume le four à 180 °C au début de la séance.",
      "La recette, pour environ 17 cookies : 100 g de beurre mou, 100 g de sucre (cassonade de préférence), 1 œuf, 170 g de farine, 5 g de levure chimique (une cuillère à café rase), une pincée de sel, 100 g de pépites de chocolat.",
      "Les étapes : écraser le beurre mou avec le sucre jusqu’à ce que le mélange soit crémeux ; ajouter l’œuf, mélanger ; ajouter la farine, la levure et le sel, mélanger ; ajouter le chocolat. Former des boules de 30 g, les poser sur la plaque bien espacées : elles s’étalent en cuisant. L’adulte enfourne pour 10 à 12 minutes à 180 °C.",
      "1. Avant de commencer, chacun écrit sa réponse : « Si on doublait la recette, les cookies mettraient-ils deux fois plus de temps à cuire ? »",
      "2. Avant de commencer, peser le saladier vide et écrire son poids. Faire la pâte, puis peser le saladier avec la pâte et retirer le poids du saladier. Combien pèse la pâte ? Comparer avec la somme des ingrédients, en comptant l’œuf pour 50 g.",
      "3. Combien de boules de 30 g peut-on faire avec cette pâte ?",
      "4. Si la plaque tient 9 boules, combien de plaques faut-il cuire ?",
      "5. Une plaque cuit 11 minutes. Combien de temps de four en tout ?",
      "6. Doubler la recette : les quantités, le nombre de boules, le nombre de plaques et le temps de four.",
      "7. Pour la recette doublée, qu’est-ce qui ne change pas ?",
      "8. Et si on faisait des boules de 60 g au lieu de 30 g ?",
    ],
    [
      "",
      "",
      "",
      "On garde la réponse écrite telle quelle : on y revient aux questions 6 et 7.",
      "La somme fait 525 g : 100 + 100 + 50 + 170 + 5 + 100. La pesée donne presque la même chose : rien ne disparaît en mélangeant. On pèse le saladier vide au début parce que la balance a été remise à zéro à chaque ingrédient, et qu’elle a pu s’éteindre toute seule entre-temps. Les quelques grammes d’écart viennent de l’œuf, qui ne pèse pas exactement 50 g, et de ce qui reste collé à la fourchette.",
      "Avec 525 g : 17 boules, et il reste 15 g, puisque 17 fois 30 font 510. On peut aussi faire 18 boules un peu plus petites. Avec le poids trouvé à la question 2, le calcul change à peine : c’est le sien qui compte.",
      "2 plaques : 9 boules, puis 8.",
      "22 minutes : 2 fois 11. Sans compter le temps que met le four à chauffer.",
      "200 g de beurre, 200 g de sucre, 2 œufs, 340 g de farine, 10 g de levure, deux pincées de sel, 200 g de chocolat. Environ 1 050 g de pâte, soit 35 boules de 30 g ; 4 plaques (9, 9, 9, puis 8) ; 44 minutes de four.",
      "La température, 180 °C. Le temps d’une plaque, 11 minutes. La taille d’une boule, et donc celle d’un cookie. Ce qui double, c’est le nombre de plaques, et avec lui le temps de four total.",
      "À peu près deux fois moins de boules : 8, avec un reste de 45 g. Un cookie deux fois plus lourd ne cuit pas deux fois plus longtemps : il lui faut en général quelques minutes de plus, et on surveille la couleur par la vitre du four, parce que le bord peut dorer avant que le centre soit cuit. Ce qui fixe le temps, c’est l’épaisseur d’un cookie, pas la quantité de pâte.",
    ],
    "Ce qu’on observe : à la question 3, s’il cherche un nombre rond et s’inquiète du reste. Un reste n’est pas un raté, c’est une petite boule en plus — on le lui montre sur la plaque. Et s’il fait seul le lien avec le gâteau au yaourt ou les crêpes, où le temps d’une cuisson ne doublait pas non plus, la séance a porté plus loin que la recette.",
  ),

  /* ================================================================== */
  /* UNE EXPÉRIENCE — 9 décembre, 17 mars, 9 juin                        */
  /* ================================================================== */

  f(
    "mw-experience-01",
    "Une expérience",
    "Expérience 1 · le sel qui disparaît",
    [
      "La question avant tout : on la lit, et chacun écrit sa prédiction dans la colonne « je crois », avec un mot pour dire pourquoi. Ce qui est écrit ne se rature pas : une prédiction qui ne se réalise pas est ce qui rend l’expérience intéressante.",
      "Déroulé : pour chaque étape, on écrit ce qu’on croit, on fait, puis on écrit ce qu’on a vu dans la colonne « j’ai vu ». La dernière étape se termine les jours suivants, toute seule, dans une soucoupe.",
      "Sécurité : rien de chaud, rien d’autre que de l’eau et du sel. L’eau salée se goûte du bout du doigt, elle ne se boit pas au verre. La soucoupe se pose près d’une fenêtre, jamais sur un radiateur électrique ou un appareil.",
      "Le jour où ça ne va pas : on ne fait que la pesée des questions 1 à 3, et on s’arrête. C’est une expérience entière à elle seule.",
    ],
    [
      "À sortir : une balance de cuisine, deux verres transparents, une cuillère à café, environ 50 g de sel fin, de l’eau du robinet, un filtre à café et un entonnoir (ou une passoire fine garnie d’un essuie-tout), une soucoupe de couleur foncée, une loupe si on en a une, une feuille partagée en deux colonnes « je crois » et « j’ai vu », un crayon.",
      "1. Question avant : on va verser 20 g de sel dans 100 g d’eau, et remuer jusqu’à ce qu’on ne voie plus le sel. Combien pèsera l’eau salée ? Chacun écrit sa prédiction.",
      "2. Poser un verre vide sur la balance, écrire son poids, puis remettre à zéro. Verser 100 g d’eau. Ajouter 20 g de sel sans remettre à zéro : la balance affiche 120 g. Retirer le verre, remuer jusqu’à ne plus voir un grain, le reposer sur la balance.",
      "3. Qu’affiche la balance ? Où est passé le sel ?",
      "4. Question avant : peut-on dissoudre autant de sel qu’on veut dans ces 100 g d’eau ? Écrire, puis ajouter du sel 5 g à la fois, en remuant longtemps entre deux ajouts, jusqu’à ce que des grains restent au fond. Noter le total de sel versé depuis le début.",
      "5. Question avant : si on verse cette eau, grains compris, dans le filtre, que restera-t-il dans le filtre et que passera-t-il dans le deuxième verre ? Écrire, filtrer, puis goûter du bout du doigt l’eau qui est passée.",
      "6. Question avant : si on laisse une cuillère de cette eau filtrée dans la soucoupe pendant quelques jours, que restera-t-il ? Écrire, poser la soucoupe près d’une fenêtre, et revenir la voir.",
    ],
    [
      "",
      "On garde la prédiction telle quelle. Une prédiction fréquente est 100 g, parce que le sel semble avoir disparu : elle est raisonnable, et la balance va la démentir.",
      "",
      "120 g, comme avant de remuer, à un gramme près pour ce qui reste sur la cuillère. Le sel n’a pas disparu : il est toujours là, en particules trop petites pour être vues, réparties dans toute l’eau — le goût le prouve. On dit qu’il s’est dissous. Il n’a pas fondu : fondre, c’est passer de solide à liquide sous l’effet de la chaleur, comme la glace ou le beurre. Si la balance s’est éteinte pendant qu’on remuait, elle a oublié le zéro et compte le verre : on retire le poids du verre écrit au début. Si l’eau reste un peu trouble malgré un long brassage, ce n’est pas du sel : certains sels de table contiennent un antiagglomérant, écrit sur le paquet, qui ne se dissout pas.",
      "Non. À la température de la pièce, 100 g d’eau dissolvent au plus 36 g de sel environ. Au-delà, les grains restent au fond même en remuant : on dit que l’eau est saturée. Vers la fin, il faut remuer très longtemps, et on voit souvent des grains rester un peu avant 35 g : l’eau pourrait encore en prendre, mais il faudrait remuer bien plus, et ce n’est pas nécessaire pour avoir compris.",
      "Les grains qui ne se sont pas dissous restent dans le filtre ; l’eau qui passe est salée. Un filtre arrête ce qui est en morceaux assez gros, pas ce qui est dissous : on ne récupère pas le sel dissous en filtrant.",
      "Quand l’eau est partie, il reste des cristaux blancs de sel ; à la loupe, on voit souvent de petits cubes. L’eau s’est évaporée, le sel ne s’évapore pas. C’est comme ça qu’on récolte le sel dans les marais salants : on laisse le soleil et le vent faire partir l’eau de mer.",
    ],
    "Ce qu’on observe : est-ce qu’il écrit une prédiction sans chercher la bonne réponse sur le visage de l’adulte, et ce qu’il fait quand la balance le contredit. S’il dit « j’avais faux », on déplace le regard : c’est sa prédiction écrite qui lui a permis de voir que le sel était encore là. Sans elle, il n’y aurait rien eu à découvrir.",
  ),

  f(
    "mw-experience-02",
    "Une expérience",
    "Expérience 2 · séparer le sable et le sel",
    [
      "La question avant tout : on la lit, et chacun écrit sa prédiction dans la colonne « je crois ». Ce qui est écrit ne se rature pas.",
      "Déroulé : trente-cinq minutes pour mélanger, dissoudre et filtrer, en écrivant une prédiction avant chaque étape. La fin se passe les jours suivants : l’eau salée s’évapore dans l’assiette, et on pèse ce qu’on a récupéré en cinq minutes, un autre jour.",
      "Sécurité : du sable propre acheté, en magasin de loisirs créatifs ou en jardinerie, et pas le sable du bac à sable ni la terre du jardin. On ne goûte rien : l’eau qui a traversé le sable ne va pas à la bouche, et le sel récolté ne se mange pas. On se lave les mains à la fin. Rien ne se chauffe : l’eau part toute seule. L’assiette se pose près d’une fenêtre ou dans une pièce chauffée, jamais sur un radiateur électrique ou un appareil.",
      "Le jour où ça ne va pas : on fait seulement les questions 1 à 4 — le mélange, l’eau, le filtre — et on verse l’eau filtrée dans l’assiette, qui fera la suite toute seule. La moitié de l’expérience montre déjà l’essentiel.",
    ],
    [
      "À sortir : une balance de cuisine, deux verres ou deux bocaux transparents, une cuillère à café, 20 g de sable propre acheté (sable fin de loisirs créatifs, non coloré, ou sable de jardinerie en sac — pas le sable du bac à sable ni la terre du jardin), 20 g de sel fin, de l’eau du robinet, un filtre à café et un entonnoir, une grande assiette de couleur foncée, une loupe si on en a une, la feuille « je crois / j’ai vu », un crayon.",
      "1. Question avant : on mélange 20 g de sable et 20 g de sel. Peut-on récupérer les deux ? Chacun écrit comment il s’y prendrait.",
      "2. Peser le sable et le sel, les mélanger à sec dans un verre. Essayer de les trier à la main pendant une minute, à la loupe si on en a une.",
      "3. Question avant : que se passera-t-il si on ajoute 100 g d’eau et qu’on remue ? Écrire, puis le faire.",
      "4. Question avant : dans le filtre, qu’est-ce qui restera, et qu’est-ce qui passera ? Écrire, puis filtrer dans le deuxième verre. On ne goûte pas : cette eau a traversé le sable.",
      "5. Laisser sécher le filtre avec son sable. Verser l’eau filtrée dans l’assiette, près d’une fenêtre. Question avant : combien pèsera le sable sec, et combien le sel qu’on récoltera ?",
      "6. Quelques jours plus tard, quand tout est sec : peser le filtre avec son sable, puis un filtre neuf, et faire la différence ; gratter le sel de l’assiette et le peser.",
      "7. À quoi l’eau a-t-elle servi ?",
    ],
    [
      "",
      "On garde les idées telles quelles. On y reviendra à la question 7.",
      "À la main, c’est à peu près impossible : les grains sont trop petits et trop nombreux. À la loupe, on les distingue — le sel en grains blancs ou transparents aux faces plates, le sable en grains irréguliers et souvent colorés — mais les trier un par un prendrait des heures.",
      "Le sel se dissout et disparaît à la vue ; le sable reste au fond. 20 g de sel se dissolvent sans peine dans 100 g d’eau, qui pourrait en prendre jusqu’à 36 g environ.",
      "Le sable reste dans le filtre ; l’eau qui passe emporte le sel avec elle, et c’est l’assiette qui le montrera, sans avoir à goûter. Si l’eau filtrée sort un peu trouble ou teintée, c’est qu’une fine poussière du sable est passée avec elle, en grains assez fins pour traverser le papier : le sel récolté sera un peu teinté, et ce n’est pas une expérience ratée.",
      "On garde les prédictions pour la question 6.",
      "Le sable pèse à peu près 20 g, un peu moins s’il en est resté dans le verre ou collé au papier, un peu plus s’il n’est pas tout à fait sec. Le sel pèse moins de 20 g : une partie de l’eau salée est restée dans le sable mouillé, dans le papier du filtre et au fond du verre, avec le sel qu’elle contenait. Le sel resté dans le sable a séché avec lui : c’est une raison de plus pour que le sable pèse un peu plus de 20 g. Il faut plusieurs jours, parfois plus d’une semaine, pour que l’assiette soit sèche.",
      "L’eau a servi d’outil. Elle a emporté le sel à travers le filtre, là où le sable ne passe pas ; puis on l’a laissée partir. On a séparé les deux en se servant d’une différence entre eux : l’un se dissout dans l’eau, l’autre non.",
    ],
    "Ce qu’on observe : à la question 1, est-ce qu’il invente une méthode, même impossible — un aimant, une passoire, une pince à épiler. Chaque idée se discute, et certaines s’essaient en deux minutes : c’est exactement le travail d’une expérience. Et à la question 6, s’il est déçu de ne pas retrouver ses 20 g de sel, on cherche ensemble où est passé le reste plutôt que de le lui dire.",
  ),

  f(
    "mw-experience-03",
    "Une expérience",
    "Expérience 3 · l’œuf qui flotte",
    [
      "La question avant tout : on la lit, et chacun écrit sa prédiction dans la colonne « je crois ». Ce qui est écrit ne se rature pas.",
      "Déroulé : cinq minutes pour la question ; vingt minutes pour saler l’eau dix grammes par dix grammes, en prédisant avant chaque ajout ; dix minutes pour peser l’eau salée ; le défi de l’œuf suspendu pour finir.",
      "Avant la séance : essayer une fois seul, avec un œuf et le bocal de la maison, et noter combien de cuillères de sel — ou de grammes, sur la balance — il a fallu pour que l’œuf décolle du fond. La fourchette du corrigé, 20 à 50 g pour 250 g d’eau, est un ordre de grandeur calculé, pas mesuré : c’est l’essai de la maison qui fait foi.",
      "Sécurité : un œuf cru se touche, puis on se lave les mains. On le pose et on le retire avec une cuillère, pour qu’il ne se casse pas contre le fond. L’eau salée ne se boit pas.",
      "Le jour où ça ne va pas : on s’arrête au moment où l’œuf flotte (question 3). C’est le cœur de l’expérience, et le reste attendra.",
    ],
    [
      "À sortir : un œuf cru, un bocal ou un grand verre transparent d’au moins un demi-litre, assez large pour que l’œuf y passe à l’aise, un deuxième verre, un verre doseur, une balance de cuisine, une cuillère à soupe, environ 80 g de sel fin, de l’eau du robinet, la feuille « je crois / j’ai vu », un crayon.",
      "1. Question avant : un œuf cru coule dans l’eau du robinet. Peut-on le faire flotter sans rien lui accrocher ? Chacun écrit sa prédiction, et comment il s’y prendrait.",
      "2. Peser 250 g d’eau dans le bocal. Y poser doucement l’œuf avec la cuillère. Que fait-il ?",
      "3. Ressortir l’œuf. Ajouter 10 g de sel, remuer jusqu’à ne plus voir un grain, remettre l’œuf. Recommencer dix grammes par dix grammes. Avant chaque ajout, écrire : cette fois, flottera-t-il ? Noter le total de sel quand l’œuf décolle du fond.",
      "4. Pourquoi l’œuf flotte-t-il dans l’eau très salée, et pas dans l’eau du robinet ?",
      "5. Vérifier : dans le verre doseur posé sur la balance remise à zéro, peser 100 mL d’eau du robinet. Vider, remettre à zéro, peser 100 mL de l’eau salée, puis la reverser dans le bocal.",
      "6. Le défi. Question avant : peut-on faire tenir l’œuf au milieu du bocal, ni au fond ni en surface ? Laisser l’œuf flotter dans l’eau salée, puis verser très doucement de l’eau du robinet par-dessus, en la faisant couler sur le dos d’une cuillère posée contre la paroi.",
      "7. Et quand on se baigne, flotte-t-on plus facilement dans la mer ou dans une piscine ?",
    ],
    [
      "",
      "On garde les prédictions telles quelles.",
      "Il coule. Un œuf très frais se couche au fond ; un œuf plus ancien se redresse, le gros bout vers le haut ; un œuf qui flotte déjà dans l’eau du robinet est un œuf ancien : la poche d’air qu’il contient s’est agrandie avec le temps.",
      "Le total dépend de l’œuf : en général, il décolle entre 20 et 50 g de sel pour 250 g d’eau, et un œuf très frais demande le plus de sel. Cette fourchette est un ordre de grandeur calculé ; l’essai fait à la maison avant la séance fait foi. C’est la mesure du jour qui compte, pas un nombre à atteindre.",
      "L’eau pousse vers le haut tout ce qu’on y plonge, et d’autant plus fort qu’elle est lourde. À volume égal, l’eau salée est plus lourde que l’eau du robinet. Quand elle devient plus lourde que l’œuf, à volume égal, la poussée l’emporte et l’œuf monte.",
      "L’eau du robinet : environ 100 g. L’eau salée : davantage, autour de 110 g si on est allé jusqu’à 40 g de sel. Le verre doseur n’est pas précis au millilitre, l’écart peut varier de quelques grammes, mais l’eau salée est toujours la plus lourde.",
      "Si on verse assez doucement, l’eau du robinet, plus légère, reste au-dessus de l’eau salée sans se mélanger tout de suite, et l’œuf reste suspendu à la frontière entre les deux. Si on verse trop vite, les deux eaux se mélangent et l’œuf retombe : on vide un peu, on resale, et on recommence. Ça ne réussit pas toujours du premier coup, pour personne.",
      "Dans la mer, pour la même raison : l’eau de mer est salée, donc plus lourde que l’eau douce d’une piscine. Dans la mer Morte, près de dix fois plus salée que l’océan, un baigneur flotte sans aucun effort.",
    ],
    "Ce qu’on observe : est-ce qu’il ajuste sa prédiction d’un ajout à l’autre — « pas encore, mais bientôt » — ou est-ce qu’il répond au hasard. Ajuster, c’est se servir de ce qu’on vient de voir, et c’est ce que l’expérience apprend. Si le défi rate, on le laisse recommencer autant qu’il veut, ou on s’arrête là : l’œuf qui flotte a déjà répondu à la question du jour.",
  ),

  f(
    "mw-experience-04",
    "Une expérience",
    "Expérience 4 · le sucre, vite ou lentement",
    [
      "Fiche de réserve. La question avant tout : avant de mettre le sucre dans l’eau, chacun écrit dans la colonne « je crois » l’ordre dans lequel il pense que le sucre va disparaître dans les quatre verres.",
      "Déroulé : dix minutes pour peser et préparer les quatre verres ; cinq minutes pour la question ; quinze minutes à regarder et à noter les temps ; le reste pour comparer et chercher pourquoi. Au bout des quinze minutes, on arrête la montre même s’il reste du sucre au fond, et on note ce qui reste dans chaque verre : « plus rien », « un peu », « beaucoup » est une mesure aussi.",
      "Sécurité : de l’eau tiède du robinet seulement, que l’adulte fait couler et vérifie au dos de la main, parce que l’eau chaude du robinet peut brûler. Jamais d’eau bouillante ni de bouilloire : il n’en faut pas pour cette expérience.",
      "Le jour où ça ne va pas : deux verres au lieu de quatre — un morceau qu’on remue, un morceau qu’on ne remue pas — et une seule question : lequel disparaît le premier ?",
    ],
    [
      "À sortir : quatre verres transparents identiques, un verre doseur, une balance de cuisine, quatre morceaux de sucre de la même boîte, un peu de sucre en poudre, deux cuillères à café, de l’eau froide et de l’eau tiède du robinet, une montre ou un minuteur, quatre petits papiers A, B, C, D, la feuille « je crois / j’ai vu », un crayon.",
      "1. Peser un morceau de sucre. Puis peser la même masse de sucre en poudre.",
      "2. Préparer les verres, 100 mL d’eau dans chacun. A : eau froide, un morceau, on ne touche à rien. B : eau tiède, un morceau, on ne touche à rien. C : eau froide, un morceau, on remue sans arrêt. D : eau froide, le sucre en poudre, on ne touche à rien.",
      "3. Question avant : dans quel ordre le sucre va-t-il disparaître ? Chacun écrit son classement des quatre verres.",
      "4. Mettre le sucre dans les quatre verres en même temps, lancer la montre, et noter pour chaque verre le moment où on ne voit plus de sucre. Au bout de quinze minutes, arrêter, et noter ce qui reste dans les verres qui n’ont pas fini.",
      "5. Pourquoi remuer va-t-il plus vite ?",
      "6. Pourquoi la poudre va-t-elle plus vite que le morceau ?",
      "7. Pourquoi l’eau tiède va-t-elle plus vite que l’eau froide ?",
      "8. Le sucre a-t-il disparu ?",
    ],
    [
      "",
      "Ce que dit la balance : un morceau de sucre pèse en général entre 4 et 7 g selon sa taille, et la balance de cuisine arrondit au gramme.",
      "",
      "On garde les classements tels quels.",
      "Le verre A est le plus lent, parfois presque à égalité avec D. Remuer (C) va nettement plus vite ; l’eau tiède (B) va plus vite aussi, sans qu’on puisse dire d’avance de combien. Un morceau de sucre n’est que des grains de sucre pressés ensemble : dans l’eau, il s’effrite, et il forme au fond un petit tas, comme la poudre. Sans remuer, dans l’eau froide, ce petit tas peut rester visible plus de quinze minutes, dans A comme dans D. Comme le morceau s’effrite vite, A et D peuvent finir presque en même temps : c’est un résultat à discuter, pas une expérience ratée. L’ordre entre B, C et D dépend de la façon de remuer et de la température de l’eau : c’est la mesure du jour qui tranche.",
      "L’eau qui touche le sucre se charge en sucre, et elle en dissout de plus en plus lentement ; comme elle est plus lourde, elle reste au fond, autour du sucre. En remuant, on remplace sans cesse cette eau déjà sucrée par de l’eau neuve.",
      "Le même sucre en petits grains offre tout de suite beaucoup plus de surface à l’eau : elle l’attaque partout à la fois, alors qu’un morceau n’est attaqué que par l’extérieur tant qu’il ne s’est pas effrité. C’est au début que la poudre prend de l’avance ; une fois le morceau effrité, l’écart peut se réduire.",
      "Dans l’eau plus chaude, les minuscules particules d’eau s’agitent plus vite et détachent le sucre plus vite. L’eau chaude peut aussi dissoudre davantage de sucre en tout : c’est pour cela qu’on chauffe l’eau pour faire un sirop très sucré. Le sel, lui, ne se dissout presque pas plus dans l’eau chaude que dans l’eau froide.",
      "Non : il est dissous, réparti dans l’eau en particules trop petites pour être vues. On le vérifie au goût, du bout du doigt. Dans le verre A, tant qu’on ne remue pas, l’eau du fond reste plus sucrée que celle du haut : le sucre met très longtemps à se répartir tout seul dans le verre.",
    ],
    "Ce qu’on observe : est-ce qu’il ose un classement complet, alors qu’il n’est sûr que du verre A. Le jour où l’ordre réel n’est pas le sien, on regarde ensemble lequel s’est le plus écarté de sa prédiction, et on cherche pourquoi : c’est là que se trouve la question pour une prochaine fois.",
  ),

  /* ================================================================== */
  /* DÉMONTER UN OBJET — 20 janvier, 14 avril                            */
  /* ================================================================== */

  f(
    "mw-demonter-01",
    "Démonter un objet",
    "Démonter 1 · le stylo à bille à poussoir",
    [
      "La question avant tout, et chacun dessine en trois traits ce qu’il imagine à l’intérieur. On garde les dessins pour la fin.",
      "Déroulé : on démonte au-dessus d’un plateau, et on pose les pièces de gauche à droite dans l’ordre où elles sortent — c’est ce qui permettra de remonter. Pour chaque pièce, il la nomme, puis il dit à quoi elle sert en regardant ce qu’elle touche. Un nom inventé vaut tant qu’on n’a pas le vrai.",
      "Avant la séance : ouvrir un des deux stylos une fois seul, puis le remonter, pour savoir à quoi s’attendre et vérifier qu’il s’ouvre à la main. Les pièces et leurs noms peuvent varier d’un modèle à l’autre : les noms de la fiche sont des repères, et c’est ce qu’on voit qui compte.",
      "Sécurité : un stylo à bille ordinaire, rien d’autre — pas de stylo lumineux, parlant ou électronique, qui cache une pile bouton. On ouvre le stylo pointe vers le plateau, loin du visage : le ressort peut sauter. Les petites pièces ne vont pas à la bouche.",
      "On prend un stylo qu’on accepte de perdre. Un stylo qui ne se remonte pas n’est pas une séance ratée. Le jour où ça ne va pas : on sort seulement la cartouche et le ressort, on les regarde, et on referme.",
    ],
    [
      "À sortir : deux stylos à bille à poussoir qu’on accepte de perdre, de modèles différents si possible ; un stylo à bille à capuchon si on en a un ; un plateau ou une assiette creuse ; une loupe si on en a une ; un chiffon, parce que l’encre tache ; une feuille et un crayon.",
      "1. Question avant : « Quand on appuie une fois, la pointe sort ; quand on appuie encore, elle rentre. Comment le stylo sait-il s’il doit la sortir ou la rentrer ? » Chacun dessine ce qu’il imagine.",
      "2. Dévisser le stylo, pointe vers le plateau. Poser les pièces dans l’ordre où elles sortent.",
      "3. Le corps : les deux morceaux de l’enveloppe.",
      "4. La cartouche.",
      "5. Au bout de la cartouche, la pointe, à la loupe.",
      "6. Le ressort.",
      "7. Le poussoir, et la ou les petites pièces crantées qui l’accompagnent.",
      "8. Retour à la question 1 : comment le stylo sait-il ?",
      "9. Pourquoi l’encre ne coule-t-elle pas toute seule par la pointe ?",
      "10. Remonter le stylo. Puis, s’il y en a un, regarder le stylo à capuchon — l’ouvrir seulement si son bouchon du bout se retire à la main, sinon le regarder par transparence : quelles pièces n’a-t-il pas, et pourquoi n’en a-t-il pas besoin ?",
    ],
    [
      "",
      "On garde les dessins tels quels, pour les comparer à la question 8.",
      "Selon le modèle, le stylo se dévisse au milieu, ou c’est le cône de la pointe qui se dévisse. Certains ne s’ouvrent pas sans casser : on prend l’autre stylo, sans forcer.",
      "Le corps tient et protège tout le reste. Il est en deux parties vissées pour qu’on puisse changer la cartouche. Dans la partie haute, on voit souvent des rainures ou des crans : ils font partie du mécanisme du poussoir.",
      "Le réservoir d’encre : un tube fin terminé par la pointe. C’est la seule pièce qui écrit ; tout le reste sert à la sortir, à la rentrer et à la tenir.",
      "Une bille minuscule, dans un matériau très dur, tenue dans un logement qui la laisse tourner sans la laisser tomber. Quand on écrit, elle roule : d’un côté elle se couvre d’encre, de l’autre elle la dépose sur le papier. C’est elle qui donne son nom au stylo à bille.",
      "Le ressort repousse la cartouche vers l’intérieur du stylo. Il est enfilé sur la cartouche, du côté de la pointe, et s’appuie contre le cône. Sans lui, la pointe ne rentrerait pas.",
      "Le poussoir est le bouton qu’on presse. Sous lui, une ou deux pièces crantées forment le mécanisme : à chaque pression, l’une d’elles tourne d’un cran. Dans une position, ses crans s’accrochent en haut, et la pointe reste sortie ; dans la suivante, ils glissent dans des rainures, et le ressort renvoie la cartouche à l’intérieur. Les pièces changent d’un modèle à l’autre, mais le principe le plus répandu est celui-là : une pièce qui tourne un peu à chaque clic. Si le stylo du jour ne ressemble pas à cette description, on décrit ce qu’on voit : c’est le stylo qui a raison.",
      "Il ne sait rien : la pièce crantée tourne d’un cran à chaque pression, et ses positions alternent — accrochée, décrochée, accrochée. C’est la forme des crans qui fait l’alternance, sans aucune électronique.",
      "L’encre d’un stylo à bille est épaisse, presque une pâte, et la bille bouche la pointe : l’encre ne sort que quand la bille roule. Dans un stylo à bille ordinaire, l’encre descend jusqu’à la bille par son propre poids : c’est pour cela qu’il écrit mal la pointe en l’air, sur un mur ou au plafond.",
      "Le stylo à capuchon n’a ni ressort, ni poussoir, ni pièce crantée : sa pointe reste toujours sortie, et c’est le capuchon qui la protège et qui évite de tacher les poches. Il tient en trois ou quatre pièces : le corps, la cartouche, le bouchon du bout, le capuchon.",
    ],
    "Ce qu’on observe : est-ce qu’il ose donner un nom à une pièce qu’il ne connaît pas, et est-ce qu’il trouve à quoi elle sert en regardant ce qu’elle touche. S’il a peur de casser, on lui confie le deuxième stylo, en le lui disant : celui-là, on a décidé d’avance qu’on pouvait le perdre.",
  ),

  f(
    "mw-demonter-02",
    "Démonter un objet",
    "Démonter 2 · la lampe de poche à piles",
    [
      "La question avant tout, et chacun dessine le chemin qu’il imagine à l’intérieur de la lampe. On garde les dessins pour la fin.",
      "Déroulé : piles retirées d’abord ; puis on démonte au-dessus d’un plateau, les pièces posées dans l’ordre où elles sortent. Pour chaque pièce, il la nomme et dit à quoi elle sert. Pour finir, on remonte, et on vérifie en allumant. Une ampoule qui vient de briller est chaude : si on doit rouvrir la tête, on attend une minute avant de la toucher.",
      "Sécurité : une vieille lampe à piles alcalines jetables, rondes et longues, qu’on retire à la main, et rien d’autre. Pas de lampe rechargeable, à dynamo ou à manivelle, qui cache une batterie ; pas de lampe à pile bouton. L’adulte retire les piles avant tout et les pose à l’écart ; une pile ne s’ouvre jamais. Si une pile a coulé — une croûte blanche ou une pâte à un bout —, on ne la touche pas à mains nues : l’adulte la retire avec un chiffon, on se lave les mains, et la pile va au bac de collecte. Si, en ouvrant, on découvre une petite carte électronique, on referme la lampe sans rien démonter de plus, et on prend l’agrafeuse : c’est le plan B. Beaucoup de lampes à LED en cachent une ; c’est la lampe qui l’a décidé, et la séance continue avec un autre objet.",
      "Plan B, l’agrafeuse de bureau : un objet entièrement mécanique, sans pile ni carte. L’adulte retire les agrafes avant d’ouvrir quoi que ce soit ; le poussoir est tenu par un ressort, on le laisse revenir en le retenant du doigt. Quand on appuie pour voir la lame descendre, les doigts restent hors de la tête et loin de l’enclume. On ouvre seulement ce qui s’ouvre à la main — la tête qui se relève, le magasin qui coulisse — sans forcer les axes. Le déroulé reste le même : la question avant, les pièces nommées une à une avec leur rôle, puis on remonte, l’adulte remet les agrafes, et on agrafe deux feuilles pour vérifier.",
      "Le jour où ça ne va pas : on retire les piles, on dévisse la tête, on regarde l’ampoule et le réflecteur, et on revisse. C’est déjà la moitié du chemin.",
    ],
    [
      "À sortir : une vieille lampe de poche à piles, à ampoule de préférence ; un plateau ; un chiffon, pour le cas où une pile aurait coulé ; un petit tournevis si la lampe a une vis ; une loupe si on en a une ; une feuille et un crayon. Pour le plan B, si la lampe cache une carte électronique : une agrafeuse de bureau ordinaire, avec quelques agrafes et deux feuilles de brouillon.",
      "1. Question avant : « Quand on pousse l’interrupteur, qu’est-ce qui se passe à l’intérieur pour que la lumière s’allume ? » Chacun dessine le chemin qu’il imagine.",
      "2. Avant tout : l’adulte ouvre le compartiment, retire les piles et les pose à l’écart du plateau.",
      "3. Les piles, qu’on regarde sans les ouvrir : où sont le + et le − ?",
      "4. Le ressort, au fond du compartiment.",
      "5. Les lamelles ou les bandes de métal qui longent l’intérieur.",
      "6. L’interrupteur. Le faire jouer, lampe ouverte, en regardant ce qui bouge.",
      "7. Dévisser la tête : la vitre, le réflecteur, l’ampoule.",
      "8. Le réflecteur, la coupe brillante.",
      "9. L’ampoule, à la loupe.",
      "10. La vitre.",
      "11. Retour à la question 1 : dessiner le vrai chemin, d’un bout des piles à l’autre.",
      "12. Remonter. L’adulte remet les piles dans le bon sens, et on allume. Si rien ne s’allume, chercher où le chemin est coupé.",
      "**Plan B : l’agrafeuse** — seulement si la lampe cache une carte électronique. Question avant : « Quand on appuie, comment l’agrafe traverse-t-elle les feuilles, et pourquoi ses pattes se replient-elles ? » Chacun dessine ce qu’il imagine. Puis, agrafes retirées par l’adulte, on regarde et on nomme : la tête, le magasin, le ressort et le poussoir, la lame, l’enclume. On termine en agrafant deux feuilles.",
    ],
    [
      "",
      "On garde les dessins tels quels, pour les comparer à la question 11.",
      "",
      "Le + est le bout qui porte un petit bouton ; le −, le bout plat. Les piles se mettent dans un sens précis, dessiné dans le compartiment. Quand elles sont l’une derrière l’autre, le + de l’une touche le − de la suivante.",
      "Il fait deux choses : il presse les piles les unes contre les autres pour qu’elles se touchent bien, même quand on secoue la lampe ; et, parce qu’il est en métal, il fait partie du chemin du courant.",
      "Elles sont en métal parce que le courant passe dans le métal et pas dans le plastique. Elles jouent le rôle de fils : elles relient le bas des piles à l’interrupteur et à l’ampoule. Dans une lampe au corps en métal, c’est parfois le corps lui-même qui sert de fil.",
      "L’interrupteur fait se toucher, ou s’écarter, deux pièces de métal. Allumé, le chemin est fermé et le courant passe ; éteint, il y a un petit vide dans le chemin, et le courant s’arrête.",
      "",
      "Il renvoie vers l’avant la lumière que l’ampoule envoie dans toutes les directions. Sans lui, la lampe éclairerait faiblement tout autour ; avec lui, elle fait un faisceau. Il est brillant parce qu’une surface lisse et brillante renvoie bien la lumière.",
      "C’est là que le courant devient lumière. Dans une ampoule à filament, un fil très fin chauffe tellement qu’il brille, et c’est pour ça qu’elle devient chaude. Une ampoule de lampe de poche a deux contacts : le petit plot au bout du culot, et le métal du côté ; le courant entre par l’un et ressort par l’autre. Une LED fabrique la lumière autrement, en chauffant beaucoup moins, et use les piles moins vite.",
      "Elle protège l’ampoule et le réflecteur des chocs et de la poussière, tout en laissant passer la lumière.",
      "Le courant part d’un bout des piles, passe par le ressort, les lamelles, l’interrupteur, l’ampoule, et revient à l’autre bout des piles. C’est une boucle fermée, qu’on appelle un circuit : une coupure n’importe où, et rien ne s’allume.",
      "Les coupures les plus fréquentes après un remontage : une pile dans le mauvais sens, une lamelle qui ne touche plus, une tête pas assez vissée pour que l’ampoule touche son contact. On les cherche en suivant du doigt le chemin dessiné à la question 11.",
      "La **tête** est la partie qu’on appuie : elle porte la lame et transmet la force de la main. Le **magasin**, ou réglette, est la gouttière où les agrafes sont rangées en barrette, collées les unes aux autres. Le **ressort** et le **poussoir** les font avancer : selon le modèle, le ressort tire ou pousse le poussoir, qui presse la barrette vers l’avant, pour qu’une agrafe soit toujours prête sous la lame. La **lame** est une fine plaque de métal à l’avant de la tête : quand on appuie, elle descend, détache la première agrafe de la barrette et la chasse à travers les feuilles. L’**enclume**, ou platine, est la petite plaque de métal sur le socle, juste sous la lame : ses deux creux arrondis replient les pattes de l’agrafe l’une vers l’autre, sous les feuilles. Sur beaucoup d’agrafeuses, on peut la tourner d’un demi-tour : les pattes se replient alors vers l’extérieur, et l’agrafe s’enlève facilement — c’est l’agrafage « ouvert », pour attacher des feuilles pour un moment seulement. Souvent, un autre ressort relève la tête quand on lâche. Tout le trajet : la main appuie, la lame chasse une agrafe, l’enclume la replie, la tête remonte, et le poussoir amène l’agrafe suivante. Les noms changent d’une marque à l’autre, et certaines pièces ne se voient pas sans forcer : on décrit ce qu’on voit.",
    ],
    "Ce qu’on observe : est-ce qu’il suit du doigt le chemin du courant, pièce par pièce, et s’il comprend que chaque pièce en métal en fait partie. Si la lampe ne se rallume pas, c’est une très bonne fin : chercher la coupure est exactement ce que la séance voulait apprendre, et l’adulte cherche avec lui sans savoir d’avance où elle est.",
  ),

  f(
    "mw-demonter-03",
    "Démonter un objet",
    "Démonter 3 · le moulin à poivre",
    [
      "Fiche de réserve. La question avant tout, et chacun dessine ce qu’il imagine au fond du moulin. On garde les dessins pour la fin.",
      "Déroulé : on moud d’abord un peu de poivre pour voir ce que fait le moulin fermé ; puis on vide, on démonte au-dessus d’un plateau, les pièces posées dans l’ordre où elles sortent. Pour chaque pièce, il la nomme et dit à quoi elle sert. On remonte, et on moud de nouveau.",
      "Avant la séance : démonter une fois seul le moulin de la maison, puis le remonter et le remplir, pour savoir à quoi s’attendre et vérifier qu’il s’ouvre à la main, sans outil. Les noms de pièces peuvent varier d’un modèle à l’autre — « meule mobile » et « meule fixe » décrivent ce qu’elles font, ce ne sont pas forcément les noms du fabricant —, et un moulin peut avoir un ressort ou pas : c’est ce qu’on voit qui compte.",
      "Sécurité : un moulin à main, sans pile — pas de moulin électrique. Les meules ont des dents qui peuvent érafler ou pincer : on les prend par la tige ou par le bord extérieur, et on ne met jamais les doigts entre elles pendant qu’on tourne. Le poivre moulu pique : on ne souffle pas dessus, on ne se frotte pas les yeux, et on se lave les mains à la fin.",
      "On ne force aucune pièce : ce qui ne sort pas se regarde en place, avec une lampe. Le jour où ça ne va pas, on fait seulement la question 2 — moudre serré, moudre desserré, regarder la poudre — et on s’arrête là.",
    ],
    [
      "À sortir : un moulin à poivre à main qui se démonte (le modèle avec une petite molette vissée sur le dessus) ; un bol pour vider le poivre ; un plateau ; une feuille blanche ; une loupe et une lampe de poche si on en a ; une feuille et un crayon.",
      "1. Question avant : « Le poivre entre en grains et sort en poudre. Qu’est-ce qui l’écrase, et comment le moulin règle-t-il la finesse ? » Chacun dessine ce qu’il imagine.",
      "2. Avant d’ouvrir : moudre un peu de poivre sur la feuille blanche avec la molette bien serrée, puis avec la molette desserrée de deux tours. Comparer les deux poudres, à la loupe si on en a une.",
      "3. Vider le poivre dans le bol. Dévisser la molette, retirer le chapeau, faire glisser la tige si elle vient. Poser les pièces dans l’ordre.",
      "4. La molette.",
      "5. Le chapeau, la partie qu’on tourne. Regarder la forme de son trou.",
      "6. La tige.",
      "7. La meule mobile, au bout de la tige.",
      "8. La meule fixe, au fond du corps.",
      "9. Le ressort, s’il y en a un.",
      "10. Le corps.",
      "11. Retour à la question 1.",
      "12. Remonter, remettre le poivre, moudre.",
    ],
    [
      "",
      "On garde les dessins tels quels, pour les comparer à la question 11.",
      "Molette serrée, la poudre est fine ; desserrée, les morceaux sont plus gros. C’est le sens sur la plupart des moulins. Si c’est l’inverse sur celui-ci, on le note : c’est le moulin qui a raison.",
      "Selon le modèle, la tige sort par le bas avec sa meule, ou reste tenue au fond par une petite pièce. On ne force pas.",
      "Elle est vissée sur le haut de la tige. En la serrant, elle tire la tige vers le haut, et avec elle la meule mobile, qui s’enfonce dans la meule fixe : l’écart entre les deux se resserre, et la poudre devient plus fine. En la desserrant, on fait l’inverse. Elle retient aussi le chapeau.",
      "C’est la pièce qu’on tourne avec la main. Son trou n’est pas rond : il est carré, ou il a un côté plat, comme la tige à cet endroit. C’est ce qui l’empêche de tourner à vide : quand le chapeau tourne, la tige tourne avec lui.",
      "Elle transmet le mouvement de la main, en haut, jusqu’à la meule, en bas, à travers le réservoir de poivre. Elle a une partie qui n’est pas ronde pour être entraînée par le chapeau, et un bout fileté pour la molette.",
      "Une pièce dure, creusée de rainures en biais, souvent en forme de cône. Elle est fixée à la tige et tourne avec elle.",
      "Un anneau cranté qui, lui, ne tourne pas. Le grain tombe entre les deux meules là où l’écart est large, puis descend là où il se resserre : il est cassé en morceaux de plus en plus petits, jusqu’à passer par le bas. Écraser entre une pièce qui tourne et une qui ne tourne pas, c’est aussi le principe des anciens moulins à farine : une meule de pierre qui tourne sur une autre qui reste immobile.",
      "Quand il y en a un, il écarte la meule mobile de la meule fixe dès qu’on desserre la molette, pour que la mouture redevienne plus grosse. Certains moulins n’en ont pas.",
      "Le réservoir : il garde le poivre au-dessus des meules, pour qu’il descende tout seul pendant qu’on tourne, et il porte la meule fixe dans son fond.",
      "Ce qui écrase, ce sont les deux meules : l’une tourne, l’autre non. Ce qui règle la finesse, c’est l’écart entre elles, et c’est la molette qui le règle en tirant plus ou moins la tige vers le haut.",
      "Si le chapeau tourne sans rien entraîner, il n’est pas engagé sur la partie plate de la tige : on le tourne doucement jusqu’à ce qu’il tombe en place.",
    ],
    "Ce qu’on observe : est-ce qu’il relie le geste du haut au travail du bas — la main tourne ici, la meule écrase là-bas. C’est l’idée qui sert pour tous les mécanismes. S’il ne parvient pas à tout sortir, on ne le lui fait pas sentir : ce qui reste en place se regarde, et un moulin qui moud encore à la fin est un bon moulin.",
  ),

  /* ================================================================== */
  /* PROGRAMMER UN DÉPLACEMENT — 3 février, 12 mai                       */
  /* ================================================================== */

  f(
    "mw-programme-01",
    "Programmer un déplacement",
    "Programmer 1 · l’adulte fait le robot",
    [
      "Le robot, c’est l’adulte. Il exécute à la lettre ce qui est écrit, même quand il voit bien que c’est faux : il n’a pas le droit de deviner ce que le programmeur voulait dire. C’est tout l’intérêt de la séance, et on le dit à l’enfant avant de commencer : le bug — l’endroit où ce qui est écrit n’est pas ce qu’on voulait — est exactement ce qu’on vient chercher.",
      "On commence dans l’autre sens : l’adulte écrit le premier programme, avec un bug dedans, et l’enfant fait le robot. Le premier bug de la séance est donc celui de l’adulte, et on le cherche ensemble : un bug se trouve, il ne se reproche pas.",
      "Déroulé : cinq minutes pour recopier le langage du robot et poser la question avant ; dix minutes où l’enfant exécute le programme de l’adulte ; vingt minutes où il programme et où l’adulte exécute ; dix minutes pour corriger un programme et le relancer.",
      "Sécurité : un espace dégagé, chaises poussées, loin des escaliers et des coins de table. Le robot avance lentement, et il s’arrête avant de toucher un mur ou un meuble, même si le programme dit le contraire : c’est la seule règle qui passe avant la lettre.",
      "Le jour où ça ne va pas : il reste robot tout le long, et c’est l’adulte qui écrit les programmes et fait les bugs. Exécuter un programme, c’est déjà apprendre à le lire.",
    ],
    [
      "À sortir : une feuille et un crayon pour écrire les programmes ; un sol à carreaux (carrelage, dalles) ou, sans carreaux, les pas de l’adulte, talon contre pointe ; un objet pour marquer le départ, une chaussette ou un bouchon. Dehors, une cour ou un jardin avec une craie, loin de toute rue.",
      "Le langage du robot, à recopier en haut de la feuille. **AVANCE** suivi d’un nombre : avancer tout droit de ce nombre de carreaux. **DROITE** : tourner d’un quart de tour vers sa droite, sur place. **GAUCHE** : tourner d’un quart de tour vers sa gauche, sur place. Une instruction par ligne. Tout le reste, le robot ne le connaît pas : il s’arrête et dit « instruction inconnue ».",
      "1. Question avant : combien d’instructions faut-il pour que le robot fasse le tour d’un carré de 3 carreaux de côté et revienne à son point de départ ? Chacun écrit son nombre.",
      "2. Le programme de l’adulte, que l’enfant exécute : AVANCE 3, DROITE, AVANCE 3, DROITE, AVANCE 3, AVANCE 3. Où arrive le robot ?",
      "3. L’enfant écrit le programme du carré de 3 carreaux ; l’adulte l’exécute à la lettre.",
      "4. Le robot et le programmeur se font face. Le programmeur dit « DROITE » en montrant sa propre droite. De quel côté le robot tourne-t-il ?",
      "5. L’enfant écrit le programme d’un rectangle de 4 carreaux sur 2 ; l’adulte l’exécute.",
      "6. Quatre ordres qui ne sont pas dans le langage du robot : « tourne », « AVANCE » tout seul, « va jusqu’au mur », « DROITE 2 ». Que fait le robot pour chacun ?",
      "7. Retour à la question 1.",
    ],
    [
      "",
      "",
      "On garde les nombres tels quels : on y revient à la question 7.",
      "Le robot trace trois côtés du carré, puis, au lieu de tourner, continue tout droit de trois carreaux : il finit au-delà du carré, loin de son point de départ. Le bug : il manque un DROITE entre les deux derniers AVANCE 3. Le mot « bug » veut dire « insecte » en anglais, et les ingénieurs l’employaient déjà pour une panne ; en 1947, une équipe américaine a retrouvé un vrai papillon de nuit coincé dans un de ses calculateurs, et l’a collé dans son cahier de bord. En français, on dit aussi « bogue ».",
      "AVANCE 3, DROITE, AVANCE 3, DROITE, AVANCE 3, DROITE, AVANCE 3. S’il ajoute un dernier DROITE, le robot se retrouve en plus tourné comme au départ : c’est juste aussi. Un programme avec GAUCHE à la place de chaque DROITE fait le carré de l’autre côté, et il est juste lui aussi. Il y a plusieurs programmes justes pour une même figure.",
      "Vers sa droite à lui, qui est la gauche du programmeur, puisqu’ils se font face. C’est un bug classique : le programmeur pense à sa droite, le robot tourne vers la sienne. La parade des programmeurs : se mettre derrière le robot, ou se demander « où est sa droite à lui ? » avant d’écrire.",
      "AVANCE 4, DROITE, AVANCE 2, DROITE, AVANCE 4, DROITE, AVANCE 2 — ou la même chose en commençant par AVANCE 2. Sept instructions, comme le carré : seules les longueurs changent.",
      "« tourne » : le robot ne sait pas de quel côté, il s’arrête. « AVANCE » tout seul : il ne sait pas de combien, il s’arrête. « va jusqu’au mur » : ce n’est pas dans son langage, il s’arrête. « DROITE 2 » : le langage ne prévoit pas de nombre après DROITE, il s’arrête. Un ordinateur non plus ne devine pas ce qu’on voulait dire.",
      "Sept instructions suffisent pour revenir au point de départ ; huit pour y revenir tourné comme au départ. Les deux réponses sont justes, selon ce qu’on appelle « revenir ». Si quelqu’un avait écrit 4, c’est une idée naturelle — quatre côtés — qui oublie les virages : un robot ne tourne jamais tout seul.",
    ],
    "Ce qu’on observe : quand le robot se trompe, est-ce qu’il cherche dans le programme ou est-ce qu’il se cherche lui-même. Le bug est dans une ligne, jamais dans la personne : on montre la ligne du doigt, on la corrige, on relance. S’il rit du robot qui fonce tout droit, la séance a gagné. S’il se tend, on reprend le rôle du programmeur qui se trompe, et lui celui du robot qui le découvre.",
  ),

  f(
    "mw-programme-02",
    "Programmer un déplacement",
    "Programmer 2 · le crayon sur le quadrillage, et la boucle",
    [
      "Même règle qu’au sol : le crayon exécute à la lettre, même quand celui qui le tient voit que c’est faux. Le bug n’est pas une faute, c’est ce que la séance vient chercher, et on le redit avant de commencer.",
      "Ce qui est nouveau : la boucle. REPETE évite de réécrire ce qui revient, et elle a ses propres bugs — un crochet mal placé, un nombre de tours qui ne va pas.",
      "Déroulé : cinq minutes pour le langage et la question avant ; dix minutes où l’enfant exécute le programme de l’adulte ; vingt minutes où il programme des figures que l’adulte exécute sans les voir ; dix minutes pour une figure qu’il invente.",
      "Le jour où ça ne va pas : il exécute seulement, et c’est l’adulte qui écrit les programmes — y compris un faux, exprès, que l’enfant découvre en traçant.",
    ],
    [
      "À sortir : du papier quadrillé (les grands carreaux du cahier, de 8 mm, ou du papier à carreaux de 1 cm), deux crayons de couleurs différentes, une gomme, une feuille pour écrire les programmes, un livre à poser debout pour cacher sa feuille.",
      "Le langage du crayon. **AVANCE** suivi d’un nombre : tracer un trait de ce nombre de carreaux, sur les lignes du quadrillage, dans la direction où le crayon regarde. **DROITE** et **GAUCHE** : un quart de tour sur place, sans tracer. **REPETE** suivi d’un nombre **FOIS** [ … ] : refaire ce nombre de fois tout ce qui est entre les crochets. Au départ, le crayon est posé sur un point marqué et regarde vers le haut de la feuille, sauf si la figure dit autre chose. On peut dessiner une petite flèche à côté du point de départ pour ne pas perdre la direction.",
      "1. Question avant : le programme du carré de 4 carreaux s’écrit en sept lignes. Peut-on l’écrire en une seule ? Chacun écrit sa réponse.",
      "2. Le programme de l’adulte, que l’enfant exécute : REPETE 4 FOIS [AVANCE 4, DROITE]. Que trace-t-il ?",
      "3. L’adulte dessine en cachette un rectangle de 6 carreaux de large sur 3 de haut, départ au coin en bas à gauche, et le montre à l’enfant seul. L’enfant écrit le programme ; l’adulte l’exécute sur une autre feuille quadrillée sans avoir vu la figure, et on compare.",
      "4. Même chose avec un escalier de trois marches qui monte vers la droite : chaque marche monte de 2 carreaux, puis avance de 2 carreaux. Départ en bas à gauche.",
      "5. Le même escalier, écrit avec REPETE.",
      "6. La lettre L. Départ en haut du L, le crayon regarde vers le bas de la feuille. Le trait vertical fait 5 carreaux, le pied fait 3 carreaux vers la droite de la feuille.",
      "7. L’enfant invente une figure, l’écrit en programme, et l’adulte l’exécute sans voir la figure. Si le dessin ne ressemble pas, on cherche ensemble la ligne du bug.",
    ],
    [
      "",
      "",
      "On garde la réponse telle quelle : la question 2 y répond.",
      "Un carré de 4 carreaux de côté. Le crayon finit à son point de départ, tourné vers le haut comme au début. Une seule ligne au lieu de sept ou huit : c’est une boucle, et les programmeurs s’en servent dès qu’une suite d’instructions se répète.",
      "AVANCE 3, DROITE, AVANCE 6, DROITE, AVANCE 3, DROITE, AVANCE 6. Le crayon regarde vers le haut au départ : il monte d’abord le côté de 3. Commencer par AVANCE 6 serait un bug : le rectangle serait debout au lieu d’être couché. Avec une boucle : REPETE 2 FOIS [AVANCE 3, DROITE, AVANCE 6, DROITE].",
      "AVANCE 2, DROITE, AVANCE 2, GAUCHE, AVANCE 2, DROITE, AVANCE 2, GAUCHE, AVANCE 2, DROITE, AVANCE 2. Les virages alternent : DROITE pour se mettre à avancer vers la droite, GAUCHE pour se remettre à monter. Avec des DROITE partout, le crayon tourne en rond et trace un petit carré au lieu de monter.",
      "REPETE 3 FOIS [AVANCE 2, DROITE, AVANCE 2, GAUCHE]. À la fin, le crayon regarde de nouveau vers le haut, à cause du dernier GAUCHE ; le dessin est le même.",
      "AVANCE 5, GAUCHE, AVANCE 3. Le crayon regarde vers le bas : sa gauche à lui est la droite de la feuille. Écrire DROITE parce que le pied va vers la droite de la feuille est le bug classique de cette figure : le pied partirait vers la gauche, et le L serait à l’envers.",
      "Pas de corrigé : c’est sa figure. On compare son dessin et celui de l’adulte en relisant le programme ligne par ligne.",
    ],
    "Ce qu’on observe : est-ce qu’il relit son programme avant de le donner, en suivant du doigt sur le quadrillage. C’est la meilleure habitude qu’on puisse prendre, et elle ne s’impose pas : elle vient après quelques bugs. Si le L part à l’envers, on ne corrige pas la ligne à sa place ; on refait le trajet ensemble, en tournant la feuille, jusqu’à ce qu’il voie de quel côté est la gauche du crayon.",
  ),

  f(
    "mw-programme-03",
    "Programmer un déplacement",
    "Programmer 3 · chasser le bug",
    [
      "Fiche de réserve. Cette fois, tous les programmes sont faux, et ils le sont exprès : chacun contient un bug. On le dit d’emblée. Le travail est de le trouver — en prédisant ce que le crayon va tracer, en exécutant à la lettre, puis en corrigeant.",
      "Le langage est celui de la fiche précédente : AVANCE, DROITE, GAUCHE, REPETE. Chaque programme sur sa propre page, départ sur un point marqué au milieu de la page, crayon tourné vers le haut, sauf quand le programme dit autre chose : un programme faux part souvent là où on ne l’attend pas, et il lui faut de la place tout autour. Une exception : avec des carreaux de cette taille, le programme 5 peut sortir par le haut de la page si on part du milieu ; pour lui seul, l’adulte marque le départ près du bas de la page.",
      "Pour chaque programme : on lit ce qu’il devait tracer ; on prédit à main levée, dans un coin, ce qu’il trace vraiment ; on exécute à la lettre avec le premier crayon ; on corrige la ligne fautive ; on relance avec le second crayon.",
      "Le jour où ça ne va pas : un seul programme, le 3, que l’adulte exécute pendant que l’enfant regarde et dit « stop » quand il voit le crayon partir de travers. Un bug trouvé suffit.",
    ],
    [
      "À sortir : du papier quadrillé (les grands carreaux du cahier, de 8 mm, ou du papier à carreaux de 1 cm), six pages au moins, deux crayons de couleurs différentes — un pour le programme faux, un pour le programme corrigé —, une gomme, une feuille et un crayon.",
      "1. Question avant : quand un programme trace autre chose que prévu, faut-il tout recommencer, ou peut-on changer une seule ligne ? Chacun écrit sa réponse.",
      "2. Devait tracer un carré de 3 carreaux : AVANCE 3, DROITE, AVANCE 3, GAUCHE, AVANCE 3, DROITE, AVANCE 3.",
      "3. Devait tracer un escalier de trois marches d’un carreau, qui monte vers la droite : AVANCE 1, DROITE, AVANCE 1, DROITE, AVANCE 1, DROITE, AVANCE 1, DROITE, AVANCE 1, DROITE, AVANCE 1.",
      "4. Devait tracer un rectangle de 5 carreaux de large sur 2 de haut, départ en bas à gauche : AVANCE 2, DROITE, AVANCE 5, DROITE, AVANCE 5, DROITE, AVANCE 2.",
      "5. Devait tracer un carré de 4 carreaux avec une boucle : REPETE 4 FOIS [AVANCE 4], DROITE.",
      "6. Devait tracer un L dont le pied va vers la droite de la feuille. Départ en haut du L, le crayon regarde vers le bas : AVANCE 4, DROITE, AVANCE 2.",
      "7. Devait tracer deux carrés de 2 carreaux côte à côte, qui partagent un côté : REPETE 4 FOIS [AVANCE 2, DROITE], REPETE 4 FOIS [AVANCE 2, DROITE].",
      "8. Retour à la question 1.",
    ],
    [
      "",
      "On garde les réponses telles quelles : on y revient à la question 8.",
      "Le crayon trace un escalier de deux grandes marches : il monte de 3, va à droite de 3, puis remonte de 3 et repart à droite de 3. Le bug : le GAUCHE devait être un DROITE. Corrigé : AVANCE 3, DROITE, AVANCE 3, DROITE, AVANCE 3, DROITE, AVANCE 3.",
      "Le crayon trace un petit carré d’un carreau, et repasse sur deux de ses côtés : à force de tourner toujours du même côté, il tourne en rond. Le bug : les virages doivent alterner. Corrigé : AVANCE 1, DROITE, AVANCE 1, GAUCHE, AVANCE 1, DROITE, AVANCE 1, GAUCHE, AVANCE 1, DROITE, AVANCE 1. Deux lignes à changer cette fois.",
      "Le côté gauche et le haut sont justes ; puis le crayon descend de 5 au lieu de 2, dépasse de 3 carreaux sous le rectangle, et finit par un petit trait de 2 vers la gauche. Le bas du rectangle n’est jamais tracé. Le bug : les deux dernières longueurs sont inversées. Corrigé : AVANCE 2, DROITE, AVANCE 5, DROITE, AVANCE 2, DROITE, AVANCE 5.",
      "Un seul trait droit de 16 carreaux vers le haut, puis le crayon tourne sans rien tracer de plus. Le bug : DROITE est hors des crochets, il n’est fait qu’une fois, après la boucle. Corrigé : REPETE 4 FOIS [AVANCE 4, DROITE]. Un crochet déplacé, et tout change.",
      "Un L à l’envers, dont le pied part vers la gauche de la feuille : le crayon regarde vers le bas, et sa droite à lui est la gauche de la feuille. Corrigé : AVANCE 4, GAUCHE, AVANCE 2.",
      "On ne voit qu’un seul carré : le crayon a tracé deux fois le même, parce que rien ne le déplace entre les deux boucles. C’est le bug le plus sournois de la fiche, parce que le dessin a l’air presque juste. Corrigé : ajouter DROITE, AVANCE 2, GAUCHE entre les deux boucles. Ce déplacement repasse sur le bas du premier carré, ce qui ne se voit pas.",
      "Presque toujours, on change une ligne ; parfois deux, comme pour l’escalier ; parfois on déplace un crochet, ou on ajoute ce qui manque. On recommence rarement tout : on cherche l’endroit où ce qui est écrit s’écarte de ce qu’on voulait. Les programmeurs appellent ça déboguer, et c’est une partie ordinaire de leur métier, tous les jours.",
    ],
    "Ce qu’on observe : est-ce que sa prédiction à main levée se rapproche du tracé réel d’un programme à l’autre. C’est la marque qu’il commence à lire un programme comme le crayon le lit, et non comme on voudrait qu’il soit. Et quand il trouve la ligne fautive, on s’arrête un instant dessus : trouver un bug est un vrai résultat, au même titre qu’une figure réussie.",
  ),
];
