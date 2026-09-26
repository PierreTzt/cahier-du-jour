/**
 * Lecture et questions — un texte court, puis cinq questions.
 *
 * Vingt-deux séances dans l’année, du 16 décembre au 1er juillet, trente
 * minutes chacune, pour vingt et une fiches. Une fiche donne **le texte entier**, puis les cinq questions et
 * leurs réponses. Les textes sont écrits pour ce cahier : aucune œuvre sous
 * droits n’entre ici, ni chanson, ni poème, ni page recopiée d’un manuel.
 *
 * Ce qu’une fiche donne, et pourquoi : voir `lib/fiches/types.ts`. En deux
 * mots — le matériel exact, le corrigé quand il y en a un, et ce qu’on
 * regarde. Un adulte qui l’ouvre ne doit plus rien avoir à chercher.
 *
 * **Réservé aux adultes** : ces fiches portent les corrigés.
 *
 * ## Comment lire le matériel
 *
 * Chaque entrée du matériel est un paragraphe du texte ; les cinq dernières
 * sont les cinq questions. Le corrigé suit entrée pour entrée, et ils se
 * lisent en vis-à-vis : en face d’un paragraphe de texte il n’y a rien à
 * corriger et la case est vide, en face d’une question il y a la réponse
 * attendue. Pour les deux questions de déduction, le corrigé dit aussi **ce
 * qui compte comme une bonne réponse formulée autrement** : c’est le
 * raisonnement qu’on cherche, pas la phrase.
 *
 * ## Trois questions sur ce qui est écrit, deux sur ce qui se déduit
 *
 * Les trois premières ont leur réponse noir sur blanc dans le texte, et il a
 * le droit d’y retourner — y retourner est justement le geste qu’on installe
 * cette année. Les deux dernières ne sont écrites nulle part.
 *
 * Le programme aborde l’explicite et l’implicite en période 2
 * (`f-p2-comprendre`, « une déduction se justifie »), le 20 novembre, avant
 * la première fiche. Les premières fiches ne demandent pourtant que des
 * déductions à un pas, appuyées sur une phrase
 * voisine ; les dernières demandent de relier deux endroits éloignés du
 * texte. Rien n’y réclame de vocabulaire d’analyse : on ne demande jamais
 * « quel est le type de ce texte ? », seulement ce qu’il raconte et ce qu’il
 * laisse deviner.
 *
 * ## L’ordre
 *
 * Les fiches d’un même rituel forment une série, et la n-ième occurrence du
 * rituel dans l’année donne la n-ième fiche. Elles sont donc écrites dans
 * l’ordre, de la plus simple à la plus exigeante : cent quarante mots en
 * décembre, près de trois cents fin juin. Les formes changent aussi — récit,
 * lettre, article, témoignage, dialogue, entretien — parce qu’on ne lit pas
 * un article comme on lit un récit, et que ça s’apprend en le faisant.
 *
 * Les trois dernières fiches ont été écrites comme une réserve : un jour
 * sans, un texte qui n’a pas pris, une semaine où l’on préfère refaire une
 * lecture qu’attaquer autre chose. Depuis la trame du 17 septembre 2026,
 * elles tombent en juin, et la première fiche revient le 1er juillet.
 *
 * Rien de tout ceci n’a été relu par un enseignant. Ça doit l’être.
 */

import { f, type Fiche } from "./types";

export const lectureQuestions: Fiche[] = [
  /* ================================================================== */
  /* DÉCEMBRE ET JANVIER — les trois premiers textes                     */
  /* Textes courts, trois paragraphes, déductions à un pas.              */
  /* ================================================================== */

  f(
    "lq-texte-01",
    "Lecture et questions",
    "Texte 1 · La clé sous le pot",
    [
      "Il lit le texte en silence, en entier, sans s’arrêter. Puis tu poses les questions à voix haute, une par une, et il répond à l’oral : on n’écrit rien aujourd’hui.",
      "Les trois premières questions ont leur réponse écrite dans le texte. Dis-le-lui avant de commencer : il a le droit de relire, de revenir en arrière, de poser le doigt sur la ligne. Les deux dernières ne sont écrites nulle part, et ça aussi il faut le lui dire avant.",
      "Le jour où ça coince : relis à voix haute le seul paragraphe où la réponse se cache, puis repose la question telle quelle, sans la reformuler. Si elle ne vient toujours pas, donne-la et passe à la suivante — on s’arrête à la cinquième question, pas au premier blocage.",
    ],
    [
      "Le mardi, Lila rentre de l’école avant ses parents. Sa mère laisse toujours la clé sous le pot de géraniums, à droite de la porte. Lila soulève le pot, prend la clé, ouvre, et garde la clé dans sa poche jusqu’au soir.",
      "Ce mardi-là, le pot était bien à sa place, mais il n’y avait rien dessous. Lila l’a soulevé une deuxième fois, pour être sûre. Elle a regardé sous les deux autres pots. Elle a secoué le paillasson. Puis elle s’est assise sur la marche, son cartable sur les genoux, et elle a attendu.",
      "Au bout d’un quart d’heure, la voisine du dessous est sortie avec son chien. Elle a dit : « Ta mère est passée à midi, elle avait oublié ses lunettes. » Puis elle est repartie vers le square, son chien tirant sur la laisse. Lila a regardé le pot une dernière fois, puis elle a souri et elle a sorti son livre de son cartable.",
      "1. Où la mère de Lila laisse-t-elle la clé, d’habitude ?",
      "2. Que fait Lila quand elle ne trouve pas la clé ? Cite deux choses qu’elle essaie.",
      "3. Que dit la voisine du dessous ?",
      "4. Pourquoi la clé n’est-elle plus sous le pot ? Le texte ne le dit pas en toutes lettres.",
      "5. À la fin, Lila sourit. Qu’est-ce qu’elle vient de comprendre ?",
    ],
    [
      "",
      "",
      "",
      "Sous le pot de géraniums, à droite de la porte.",
      "Elle regarde sous les deux autres pots, et elle secoue le paillasson. (S’asseoir sur la marche et attendre compte aussi comme troisième chose, mais deux suffisent.)",
      "Que la mère de Lila est passée à la maison à midi, parce qu’elle avait oublié ses lunettes.",
      "Sa mère est revenue à midi, elle est entrée avec la clé, et elle est repartie sans la remettre sous le pot. Ce qui doit apparaître, c’est le lien entre le passage de midi et la clé manquante. Accepter « sa mère l’a gardée », « elle est repartie avec », « elle a oublié de la remettre » : c’est le même raisonnement dit autrement.",
      "Qu’il n’y a rien d’inquiétant : la clé n’a été ni perdue ni volée, sa mère l’a simplement emportée, et elle va rentrer. Il n’y a plus qu’à attendre, et elle peut attendre en lisant. Accepter « elle sait pourquoi la clé n’est pas là », « ce n’est pas grave », « elle n’a plus peur ». Écarter seulement une réponse qui ne s’appuie sur rien du texte.",
    ],
    "Ce qu’on regarde : est-ce qu’il retourne dans le texte pour les trois premières questions, ou est-ce qu’il répond de mémoire ? Retourner dans le texte est le geste de toute l’année, et il s’installe maintenant. S’il répond de mémoire et se trompe, ne corrige pas : demande-lui de montrer l’endroit où c’est écrit, et la correction se fait toute seule. Si les deux dernières questions n’ont rien donné, ce n’est pas un manque à rattraper : c’est ce qu’on travaille toutes les fois suivantes.",
  ),

  f(
    "lq-texte-02",
    "Lecture et questions",
    "Texte 2 · Le vélo trop grand",
    [
      "Même déroulé que la fois précédente : lecture silencieuse en entier, puis les cinq questions à l’oral. S’il veut relire avant de répondre, c’est bon signe, laisse-le faire.",
      "La nouveauté du jour est la question 5 : la réponse se trouve en reliant deux endroits du texte qui ne se suivent pas. S’il ne voit qu’un des deux, montre-lui l’autre du doigt sans rien dire.",
      "Le jour où ça coince : garde les trois premières questions et remplace les deux dernières par une seule, posée à l’oral — « qu’est-ce qui a changé pour Tom entre le début et la fin ? ». C’est la même chose, demandée plus simplement.",
    ],
    [
      "Le vélo de Tom était rouge, et il était trop grand pour lui. C’était celui de son frère Malo, parti au collège avec un vélo neuf. Leur père avait descendu la selle au plus bas. Même comme ça, Tom ne touchait le sol que du bout d’un pied.",
      "Pendant deux semaines, Tom n’est pas monté dessus. Il le regardait dans le garage. Il gonflait les pneus. Il essuyait le guidon avec un chiffon. Son père ne disait rien.",
      "Un samedi matin, Malo est descendu au garage et il a dit : « Tu viens ? » Ils sont allés jusqu’au terrain de foot, Malo à pied à côté du vélo, Tom dessus, les deux mains crispées sur les poignées. Au retour, Tom pédalait devant et Malo courait derrière en râlant.",
      "Le soir, Tom a laissé le vélo dehors, contre le mur, au lieu de le ranger. Son père l’a rentré sans rien dire, et il a souri en fermant la porte du garage.",
      "1. À qui était le vélo avant d’être à Tom, et pourquoi son propriétaire n’en veut-il plus ?",
      "2. Qu’est-ce que le père a fait au vélo pour qu’il aille à Tom ?",
      "3. Que fait Tom pendant les deux semaines où il ne monte pas dessus ? Cite deux choses.",
      "4. Pourquoi Tom ne monte-t-il pas sur le vélo pendant deux semaines ?",
      "5. Pourquoi le père sourit-il en fermant la porte du garage ?",
    ],
    [
      "",
      "",
      "",
      "",
      "À son frère Malo, qui est parti au collège et qui a maintenant un vélo neuf.",
      "Il a descendu la selle au plus bas.",
      "Il le regarde dans le garage, il gonfle les pneus, il essuie le guidon avec un chiffon. Deux de ces trois suffisent.",
      "Parce que le vélo est trop grand : il ne touche le sol que du bout d’un pied, donc il n’ose pas. Ce qui doit apparaître, c’est le lien entre la taille du vélo et le fait qu’il n’y monte pas. Accepter « il a peur de tomber », « il n’est pas sûr d’y arriver », « il se sent trop petit pour ce vélo ». Ne pas exiger le mot « peur ».",
      "Parce que le vélo est resté dehors, contre le mur : ça veut dire que Tom s’en est servi et qu’il compte le reprendre demain. Le père comprend ça sans qu’on le lui dise. Accepter « il est content que Tom ait roulé », « le vélo sert enfin », « Tom a réussi ». Si la réponse reste vague, demander « qu’est-ce que le père vient de voir, juste avant de sourire ? » et le ramener au vélo laissé dehors.",
    ],
    "Ce qu’on regarde : la question 5 demande de relier le vélo laissé dehors et le sourire du père, qui sont dans la même phrase mais ne se répondent pas tout seuls. S’il dit « parce qu’il est content », demande « content de quoi ? » et attends sans remplir le silence. La réponse complète n’est pas l’objectif du jour ; qu’il aille chercher dans le texte plutôt que dans sa tête, si.",
  ),

  f(
    "lq-texte-03",
    "Lecture et questions",
    "Texte 3 · La lettre de Nour",
    [
      "Une lettre, aujourd’hui. Avant qu’il lise, montre-lui les trois repères : le lieu et la date en haut, le nom en bas, et entre les deux quelqu’un qui écrit à quelqu’un qu’il connaît. Rien de plus, on n’en fait pas une leçon.",
      "Lecture silencieuse, puis les cinq questions à l’oral. Pour la question 5, il a le droit de relire la fin autant de fois qu’il veut, à voix haute s’il préfère.",
      "Le jour où ça coince : relis-lui toi-même le dernier paragraphe en t’arrêtant après chacune des trois demandes de Nour, et pose la question autrement — « à quoi est-ce qu’elle pense encore, là-bas ? ».",
    ],
    [
      "Bordeaux, le 4 octobre",
      "Chère Inès,",
      "Voilà trois semaines qu’on est installés. L’appartement est au quatrième étage et il y a un ascenseur, donc je monte les courses sans râler. De ma fenêtre, je vois le toit de l’école et un grand platane.",
      "La maîtresse s’appelle Mme Ravel. Elle parle vite. Le premier jour, elle m’a fait asseoir à côté d’une fille qui s’appelle Jeanne et qui ne m’a pas dit un mot de toute la matinée. À midi, Jeanne m’a demandé si je jouais aux billes. Depuis, on mange ensemble.",
      "Papa a trouvé du travail à vingt minutes en tram. Maman cherche encore. Le soir, elle range des cartons qui sont déjà rangés.",
      "Je vais bien. Vraiment. Mais dis-moi si le club de hand a repris, et si Sarah est toujours gardienne, et si le terrain derrière la salle a été refait comme ils avaient promis.",
      "Écris-moi vite.",
      "Nour",
      "1. Depuis combien de temps Nour habite-t-elle son nouvel appartement, et à quel étage ?",
      "2. Que voit-elle de sa fenêtre ?",
      "3. Que s’est-il passé entre Jeanne et Nour le premier jour, le matin puis à midi ?",
      "4. Le soir, la mère de Nour range des cartons qui sont déjà rangés. Qu’est-ce que ça laisse deviner ?",
      "5. Nour écrit : « Je vais bien. Vraiment. » Est-ce qu’on peut la croire tout à fait ? Appuie-toi sur la fin de la lettre.",
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
      "Depuis trois semaines, au quatrième étage.",
      "Le toit de l’école et un grand platane.",
      "Le matin, Jeanne ne lui dit pas un mot de la matinée. À midi, elle lui demande si elle joue aux billes, et depuis elles mangent ensemble.",
      "Qu’elle n’a pas encore de travail et qu’elle ne sait pas quoi faire de ses soirées : elle s’occupe les mains en attendant. Accepter « elle s’ennuie », « elle tourne en rond », « elle n’est pas encore installée dans sa tête », « elle est inquiète ». Le raisonnement attendu tient en deux morceaux : ranger ce qui est rangé ne sert à rien, donc ce n’est pas pour ranger qu’elle le fait.",
      "Pas tout à fait. Elle le dit deux fois, comme si elle voulait s’en convaincre, et la phrase suivante commence par « mais » : elle enchaîne trois questions sur son ancien club, son ancienne amie, son ancien terrain. Elle pense encore beaucoup à là-bas. Accepter « elle est un peu triste », « ses amis lui manquent », « elle dit ça pour rassurer Inès ». Il n’est pas nécessaire qu’il relève le mot « mais » : s’il s’appuie sur les trois questions de la fin, le compte y est.",
    ],
    "Ce qu’on regarde : est-ce qu’il accepte qu’un texte dise une chose et en laisse deviner une autre ? C’est la première fois de l’année qu’on le lui demande aussi franchement, et la leçon sur l’implicite n’a pas encore eu lieu. S’il s’en tient à « elle dit qu’elle va bien, donc elle va bien », ce n’est pas un contresens à reprendre : c’est une lecture au premier degré, et les quinze textes suivants sont là pour ça. Demain, une seule chose, sans question derrière : lui faire relire la lettre à voix haute.",
  ),

  /* ================================================================== */
  /* FIN JANVIER ET FÉVRIER                                              */
  /* La leçon sur l’explicite et l’implicite est passée. Les textes       */
  /* s’allongent, et une déduction commence à devoir se justifier.        */
  /* ================================================================== */

  f(
    "lq-texte-04",
    "Lecture et questions",
    "Texte 4 · La panne du phare",
    [
      "Texte un peu plus long que les précédents. Il peut le lire en deux fois : les deux premiers paragraphes, une pause, puis les deux derniers.",
      "Les trois premières questions demandent des détails précis — des heures, un geste, une pièce cassée. S’il préfère écrire plutôt que dire, laisse-le noter les réponses en trois mots sur le cahier.",
      "Le jour où ça coince : garde les questions 1, 2 et 3, et remplace les deux dernières par une seule, à l’oral — « qu’est-ce qui inquiète Gwen dans cette histoire ? ». C’est la même déduction, demandée d’un seul coup.",
    ],
    [
      "Le 3 novembre, à dix-sept heures trente, le phare de la pointe ne s’est pas allumé. Gwen s’en est aperçue depuis sa cuisine : la lumière tournante passe sur le mur du couloir toutes les cinq secondes, et ce soir-là le mur est resté noir.",
      "Elle a téléphoné à Marek, qui s’occupe de l’entretien. Il a mis vingt minutes à arriver. Ils sont montés ensemble, quarante-neuf marches, avec une lampe torche. En haut, l’ampoule était intacte. C’était un fil, derrière le tableau, qui avait lâché.",
      "Marek a réparé en une heure. Pendant ce temps, Gwen est redescendue et elle est restée dehors, sur les rochers, à regarder la mer. Deux bateaux de pêche rentraient. Elle les a suivis des yeux jusqu’à ce qu’ils passent la digue.",
      "À dix-neuf heures dix, la lumière est repartie. Gwen n’a rien dit. Elle est rentrée, elle a mis la table, et elle a laissé grande ouverte la porte du couloir.",
      "1. À quelle heure le phare aurait-il dû s’allumer, et à quelle heure s’est-il rallumé ?",
      "2. Comment Gwen s’aperçoit-elle de la panne, alors qu’elle est dans sa cuisine ?",
      "3. Qu’est-ce qui était cassé, exactement ? Et qu’est-ce qui ne l’était pas ?",
      "4. Pourquoi Gwen reste-t-elle dehors à suivre des yeux les deux bateaux de pêche ?",
      "5. À la fin, elle laisse grande ouverte la porte du couloir. Pourquoi ?",
    ],
    [
      "",
      "",
      "",
      "",
      "Il aurait dû s’allumer à dix-sept heures trente ; il s’est rallumé à dix-neuf heures dix.",
      "La lumière tournante du phare passe sur le mur du couloir toutes les cinq secondes. Ce soir-là, le mur est resté noir.",
      "Un fil derrière le tableau avait lâché. L’ampoule, elle, était intacte.",
      "Parce que le phare est éteint : les bateaux n’ont plus leur repère pour rentrer, et elle veut les voir passer la digue, c’est-à-dire arriver à l’abri. Accepter « elle s’inquiète pour eux », « elle surveille qu’ils rentrent bien », « sans le phare ils peuvent se tromper ». Le lien attendu est celui-ci : la panne du phare et les bateaux en mer sont le même problème.",
      "Parce que c’est par cette porte qu’elle voit la lumière passer sur le mur, toutes les cinq secondes. La porte ouverte, elle vérifie sans avoir à sortir que le phare tourne toujours. Accepter « pour voir la lumière », « pour être sûre que ça marche encore », « pour se rassurer ». Si la réponse ne vient pas, faire relire la deuxième phrase du texte : elle contient tout.",
    ],
    "Ce qu’on regarde : la question 5 renvoie à une phrase lue quinze lignes plus tôt, et c’est la première fois de l’année qu’on lui demande de faire ce trajet-là. S’il y arrive, la lecture n’est plus un défilé de phrases mais un texte entier qu’il tient en tête. S’il n’y arrive pas, ne donne pas la réponse : donne l’endroit — « la réponse est dans le premier paragraphe » — et laisse-lui le temps de chercher. C’est le repérage qu’on installe, pas la trouvaille.",
  ),

  f(
    "lq-texte-05",
    "Lecture et questions",
    "Texte 5 · La passerelle de la Vieille-Roche",
    [
      "Un article de journal. Avant la lecture, une phrase et pas plus : dans un article, le titre annonce, le premier paragraphe résume, et les gens cités parlent entre guillemets. Il retrouvera les trois en lisant.",
      "Lecture silencieuse en entier, puis les cinq questions à l’oral. Les chiffres sont nombreux : il peut les entourer au crayon pendant sa lecture, ça fait partie du travail.",
      "Le jour où ça coince : les articles fatiguent plus qu’un récit parce qu’il n’y a personne à suivre. Fais-lui lire seulement les paragraphes 3, 4 et 5, et pose les questions 1, 4 et 5. Trois questions sur un article lu en entier valent mieux que cinq sur un article abandonné.",
    ],
    [
      "La passerelle de la Vieille-Roche fermée jusqu’en mars",
      "Saint-Cyr, le 14 novembre. Les travaux commenceront lundi. Pendant quatre mois, les habitants du hameau devront faire trois kilomètres de plus pour rejoindre le bourg.",
      "La passerelle, construite en 1954, permet de traverser la rivière à pied. Elle est empruntée chaque jour par une quarantaine de personnes, dont onze enfants qui vont à l’école du bourg. Un contrôle réalisé en septembre a montré que deux des poutres du tablier étaient abîmées par l’humidité.",
      "« On ne ferme pas de gaieté de cœur », explique M. Daumas, adjoint aux travaux. « Mais on ne pouvait pas attendre le printemps. » La commune a mis en place un car scolaire, qui passera à sept heures vingt-cinq et ramènera les enfants à dix-sept heures dix.",
      "Tout le monde n’est pas satisfait. « Mon fils partait à huit heures moins dix, il partira à sept heures vingt », dit Mme Léger, qui habite le hameau depuis trente ans. « Et le car ne s’arrête pas devant chez nous. » La mairie annonce un point d’étape en janvier.",
      "1. En quelle année la passerelle a-t-elle été construite, et combien de personnes l’empruntent chaque jour ?",
      "2. Qu’est-ce que le contrôle de septembre a montré ?",
      "3. Qu’est-ce que la commune met en place pendant les travaux, et à quelles heures ?",
      "4. M. Daumas dit qu’on ne pouvait pas attendre le printemps. Pourquoi, à ton avis ?",
      "5. Mme Léger dit deux choses. Qu’est-ce qui la dérange vraiment ?",
    ],
    [
      "",
      "",
      "",
      "",
      "",
      "En 1954 ; une quarantaine de personnes par jour, dont onze enfants.",
      "Que deux des poutres du tablier étaient abîmées par l’humidité.",
      "Un car scolaire, qui passe à sept heures vingt-cinq le matin et ramène les enfants à dix-sept heures dix.",
      "Parce que les poutres sont abîmées et que la passerelle risque de céder : attendre quatre mois de plus, c’est laisser passer dessus quarante personnes par jour sur un pont dont on sait qu’il est atteint. Accepter « c’est dangereux », « ça pourrait s’effondrer », « ça s’abîmerait encore plus pendant l’hiver ». Le raisonnement attendu relie l’état des poutres, dit au paragraphe 3, à la décision, dite au paragraphe 4.",
      "Ce n’est pas la fermeture elle-même : c’est que la solution proposée ne règle pas son cas à elle. Son fils doit se lever une demi-heure plus tôt, et le car ne passe pas devant chez elle. Accepter « le car ne l’arrange pas », « son fils part trop tôt », « la mairie a trouvé une solution mais pas pour tout le monde ». Écarter « elle ne veut pas des travaux » : elle ne le dit nulle part.",
    ],
    "Ce qu’on regarde : est-ce qu’il sait qu’un article n’est pas neutre parce qu’il cite deux personnes ? La question 5 demande de distinguer ce que Mme Léger dit de ce qui la gêne — deux choses différentes, et c’est exactement le travail de la période. S’il répond « elle est contre les travaux », ne tranche pas : demande-lui de relire ses deux phrases entre guillemets et de dire si le mot « travaux » y figure. À reprendre demain, à l’oral, en deux minutes : dans une conversation entendue dans la journée, qu’est-ce qui a été dit, qu’est-ce qui a seulement été laissé entendre ?",
  ),

  f(
    "lq-texte-06",
    "Lecture et questions",
    "Texte 6 · Trente-trois ans derrière le guichet",
    [
      "Un témoignage : quelqu’un raconte sa propre vie, à la première personne, et tout le texte est entre guillemets. Le dire avant, en une phrase, pour qu’il ne cherche pas qui parle.",
      "Lecture silencieuse, puis les questions à l’oral. Les quatre paragraphes suivent le temps qui passe : début, milieu, fin, dernier jour. S’il s’y perd, fais-lui écrire dans la marge une date par paragraphe.",
      "Le jour où ça coince : reprends la question 4 en ne relisant que la dernière phrase du troisième paragraphe, isolée, et demande simplement « qu’est-ce qu’on fait quand on regarde une pendule ? ».",
    ],
    [
      "« J’ai commencé en 1993. J’avais vingt-trois ans et je devais rester six mois, le temps qu’on trouve quelqu’un. On n’a jamais cherché personne. »",
      "« Au début, il y avait quatre guichets, et une file jusqu’à la porte le samedi matin. Les gens venaient chercher un mandat, poster un colis, acheter des timbres pour Noël. Je connaissais les écritures avant de connaître les noms. »",
      "« Ces dernières années, c’était différent. Un seul guichet, et des après-midi entiers où personne ne poussait la porte. Je rangeais. Je refaisais mes comptes trois fois. Je regardais la pendule, ce que je n’avais jamais fait avant. »",
      "« Mardi, c’était mon dernier jour. On m’a offert un bouquet et un appareil photo. J’ai fermé à seize heures trente comme d’habitude, j’ai tiré le rideau, j’ai posé les clés sur le comptoir. Je n’ai pas pleuré. Avant de partir, j’ai pris un carnet de timbres, et je l’ai payé. »",
      "1. En quelle année a-t-elle commencé, et combien de temps devait-elle rester au départ ?",
      "2. Comment était le bureau de poste le samedi matin, au début ?",
      "3. Que fait-elle pendant les après-midi où personne ne pousse la porte ? Cite deux choses.",
      "4. Elle dit : « Je regardais la pendule, ce que je n’avais jamais fait avant. » Qu’est-ce que ça nous apprend sur ces dernières années ?",
      "5. Avant de partir, elle prend un carnet de timbres et elle le paie. Pourquoi raconter ce détail-là ?",
    ],
    [
      "",
      "",
      "",
      "",
      "En 1993, à vingt-trois ans ; elle devait rester six mois.",
      "Il y avait quatre guichets et une file d’attente qui allait jusqu’à la porte.",
      "Elle range, elle refait ses comptes trois fois, elle regarde la pendule. Deux de ces trois suffisent.",
      "Que le temps ne passait plus : elle n’avait plus assez de travail pour remplir ses journées, et elle attendait la fin de la journée au lieu de la vivre. Accepter « elle s’ennuyait », « il n’y avait plus rien à faire », « les journées étaient longues ». Ce qui compte est le contraste avec « ce que je n’avais jamais fait avant » : avant, elle n’avait pas le temps de regarder l’heure.",
      "Parce que ce geste dit qu’elle n’est plus employée : elle paie, comme n’importe quel client. C’est sa façon de fermer proprement, sans rien emporter qui ne lui appartienne, et de faire son dernier passage de l’autre côté du guichet. Accepter « elle n’a plus le droit de se servir », « elle veut partir sans rien devoir », « elle est devenue une cliente ». Plusieurs lectures tiennent ici, et il n’y a pas à choisir entre elles : demander seulement qu’il explique la sienne avec un mot du texte.",
    ],
    "Ce qu’on regarde : la question 5 n’a pas une seule réponse, et c’est voulu. Ce qu’on écoute, c’est la justification — « je dis ça parce que… ». La leçon de la période le dit dans ces termes : une déduction se justifie. S’il donne une réponse sans justification, ne la refuse pas ; demande « qu’est-ce qui te fait dire ça ? » et attends. S’il n’a rien à répondre, c’est là qu’il faut revenir demain, sur un texte de trois lignes et une seule question.",
  ),

  f(
    "lq-texte-07",
    "Lecture et questions",
    "Texte 7 · La neige sur Roquemaure",
    [
      "Lecture silencieuse en entier, puis les cinq questions à l’oral. Quatre paragraphes, et un personnage qu’on suit d’un bout à l’autre : c’est un texte qui se laisse lire.",
      "Les deux dernières questions portent sur ce qu’Élias ressent, et le texte ne le dit jamais — il ne montre que des gestes. Le prévenir : « on va chercher ce qu’il a dans la tête, et c’est nulle part écrit ».",
      "Le jour où ça coince : la question 4 se déverrouille avec une question plus petite, posée à l’oral — « est-ce qu’il connaît bien ces deux enfants ? ». La phrase « que Élias connaissait de vue » suffit alors.",
    ],
    [
      "Il a neigé sur Roquemaure dans la nuit du 9 au 10 décembre. Vingt centimètres, ce qui n’était pas arrivé depuis 2010. Au matin, la route départementale était blanche d’un bout à l’autre et aucun car ne montait au village.",
      "Élias s’est levé à sept heures, comme tous les jours. Sa mère avait déjà écouté la radio. Elle lui a dit : « Pas d’école. » Il est resté debout dans la cuisine, en chaussettes, sans savoir quoi faire de cette phrase.",
      "À neuf heures, il a mis les bottes de son père, trop grandes de trois pointures, et il est sorti. La place était vide. Le boulanger avait ouvert quand même, et il avait dégagé un chemin devant sa porte avec une pelle. Deux enfants qu’Élias connaissait de vue montaient un mur de neige devant la mairie. Il les a regardés faire, cinq minutes, depuis le coin de la place.",
      "Puis l’un des deux s’est retourné, l’a vu, et lui a fait signe du bras. Élias a traversé. À midi, il avait les mains rouges, le pantalon trempé, et il ne se rappelait plus le prénom de celui qui l’avait appelé.",
      "1. Combien de neige est tombée, et quand cela s’était-il produit pour la dernière fois ?",
      "2. Comment Élias apprend-il qu’il n’y a pas d’école ?",
      "3. Que fait le boulanger, ce matin-là ?",
      "4. Pourquoi Élias reste-t-il cinq minutes au coin de la place à regarder les deux enfants ?",
      "5. À la fin, il ne se rappelle plus le prénom de celui qui l’a appelé. Pourquoi le texte nous dit-il ça ?",
    ],
    [
      "",
      "",
      "",
      "",
      "Vingt centimètres ; cela n’était pas arrivé depuis 2010.",
      "Sa mère, qui a écouté la radio avant lui, le lui dit : « Pas d’école. »",
      "Il a ouvert sa boulangerie quand même, et il a dégagé un chemin devant sa porte avec une pelle.",
      "Parce qu’il ne les connaît pas vraiment — il les connaît « de vue » — et qu’il n’ose pas aller vers eux tout seul. Il attend, il regarde, il espère peut-être qu’on l’appelle. Accepter « il est timide », « il ne les connaît pas assez », « il n’ose pas demander », « il attend qu’on l’invite ». Le mot du texte sur lequel s’appuyer est « de vue ».",
      "Parce que ça montre que la matinée a compté plus que les noms : il a joué, il a eu froid, il s’est trempé, et savoir qui étaient ces enfants n’avait aucune importance. On oublie un prénom quand on est occupé à autre chose. Accepter « il s’est bien amusé », « il n’y a plus pensé », « ce n’était plus important ». Si la réponse est « parce qu’il a une mauvaise mémoire », ne pas la corriger frontalement : demander ce qu’il a fait entre neuf heures et midi, et repose la question.",
    ],
    "Ce qu’on regarde : ce texte ne dit jamais ce qu’Élias ressent, il ne montre que des gestes — rester debout en chaussettes, regarder cinq minutes depuis un coin, traverser. Est-ce qu’il lit les gestes ? C’est le cœur du travail de l’année. S’il n’y arrive pas encore, l’exercice utile n’est pas un texte de plus : c’est, demain, à table, de lui demander ce qu’on devine de quelqu’un qui remet trois fois son manteau avant de sortir.",
  ),

  /* ================================================================== */
  /* FÉVRIER ET MARS                                                     */
  /* La leçon sur le dialogue dans un récit est passée : deux             */
  /* textes en vivent. Les déductions portent maintenant sur ce que les   */
  /* personnages taisent.                                                */
  /* ================================================================== */

  f(
    "lq-texte-08",
    "Lecture et questions",
    "Texte 8 · Deux tailles au-dessus",
    [
      "Un récit fait surtout de dialogue. Avant la lecture, deux repères et pas plus : le tiret cadratin annonce que quelqu’un prend la parole, et on change de ligne à chaque fois qu’on change de personne. Il n’y a pas de « dit-il » : c’est à lui de suivre qui parle.",
      "Lecture silencieuse. Puis, avant les questions, une relecture à deux voix : toi la mère, lui Sofiane. Ça prend deux minutes et ça règle la moitié des difficultés de compréhension.",
      "Le jour où ça coince : la relecture à deux voix devient la séance. On lit, on redistribue les rôles, on relit, et on ne pose que la question 1. C’est du travail, et c’en est même beaucoup.",
    ],
    [
      "Dans le magasin, il y avait trois rangées de chaussures de sport et un miroir au bout de l’allée. Sofiane tenait la boîte sur ses genoux. Sa mère lisait l’étiquette collée dessous.",
      "— Elles te vont ?",
      "— Oui.",
      "— Lève-toi et marche jusqu’au miroir.",
      "Il a marché. Il est revenu. Il s’est rassis.",
      "— Alors ?",
      "— Ça va.",
      "— Sofiane. Est-ce que tes orteils touchent le bout ?",
      "— Un peu.",
      "Sa mère a repris la boîte, a regardé la pointure, puis le rayon du fond.",
      "— C’est du 36. Il y a du 37, mais c’est un autre modèle, celui de l’étagère du haut.",
      "— Je veux celles-là.",
      "— Celles-là sont à vingt-neuf euros et les autres à quarante-cinq. Ce n’est pas la question. Je te demande si tes orteils touchent le bout.",
      "Sofiane a regardé ses pieds un long moment.",
      "— Oui.",
      "Elle a hoché la tête, elle a remis le couvercle sur la boîte et elle s’est levée.",
      "— Bon. On va voir les 37.",
      "1. Quelle pointure Sofiane essaie-t-il, et quelle pointure sa mère va-t-elle chercher à la fin ?",
      "2. Combien coûte chaque paire ?",
      "3. Quelle question la mère pose-t-elle deux fois, exactement dans les mêmes mots ?",
      "4. Sofiane répond d’abord « ça va », puis « un peu », puis « oui ». Pourquoi ne dit-il pas la vérité tout de suite ?",
      "5. La mère dit : « Ce n’est pas la question. » De quoi parle-t-elle, et qu’est-ce que ça nous apprend sur elle ?",
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
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "Il essaie du 36 ; sa mère va chercher du 37.",
      "Vingt-neuf euros la paire du 36, quarante-cinq euros le modèle en 37.",
      "« Est-ce que tes orteils touchent le bout ? »",
      "Parce qu’il veut ces chaussures-là, et qu’il a compris que dire la vérité les lui fera perdre. Il ne ment pas franchement : il répond à côté, puis un peu moins à côté, puis il cède. Accepter « il a peur de ne pas les avoir », « il veut ce modèle », « il sait que sa mère va dire non », « il a vu que les autres coûtent plus cher ». Ce qui doit apparaître, c’est qu’il a une raison de ne pas répondre, pas qu’il s’est trompé.",
      "Elle parle du prix : elle refuse que les seize euros de différence décident à sa place. Et si elle le dit, c’est qu’elle a deviné pourquoi son fils s’accrochait à la paire à vingt-neuf euros. Accepter « elle parle de l’argent », « le prix ne compte pas », « elle est prête à payer plus cher », « elle a compris qu’il se taisait à cause du prix ». La réponse complète a deux moitiés ; une seule des deux est déjà un bon travail.",
    ],
    "Ce qu’on regarde : est-ce qu’il suit qui parle, sans « dit-il » pour l’aider ? On le voit tout de suite à la relecture à deux voix, avant même les questions. Et pour la question 4, on écoute s’il attribue un projet à Sofiane — vouloir ces chaussures-là — plutôt qu’une erreur. Lire un dialogue, c’est deviner l’intention derrière la réplique ; c’est ce que la leçon de la période appelle ce que le dialogue apporte au récit. À reprendre demain si ça n’a pas pris : relire seulement l’échange sur les orteils, à deux voix, et s’arrêter là.",
  ),

  f(
    "lq-texte-09",
    "Lecture et questions",
    "Texte 9 · Deux lettres, à trois semaines d’écart",
    [
      "Deux lettres à lire l’une après l’autre : celle de Loïc, puis la réponse de son grand-père. Lui faire repérer les deux dates avant de commencer, et les écrire au crayon dans la marge.",
      "Lecture silencieuse des deux, puis les questions à l’oral. La question 5 porte sur un passage que beaucoup de lecteurs sautent : si besoin, faire relire à voix haute et lentement le paragraphe de la seconde lettre qui commence par « Je vais te dire quelque chose ».",
      "Le jour où ça coince : ne garder que la seconde lettre et poser trois questions — qu’est-ce que le grand-père confirme, qu’est-ce qu’il annonce, qu’est-ce qu’il décide malgré tout. Le reste attendra la prochaine fois.",
    ],
    [
      "Le 6 janvier",
      "Papi,",
      "On a choisi nos activités pour le mois de juillet et j’ai marqué « pêche » sur la feuille. Est-ce que tu as toujours la canne verte, celle dont le manche est réparé au ruban ? Maman dit qu’on vient du 10 au 24.",
      "Je sais lire une carte de rivière, maintenant. On l’a fait à l’école. Je t’expliquerai.",
      "Loïc",
      "Le 27 janvier",
      "Mon Loïc,",
      "La canne verte est là, dans le garage, avec les trois autres. Elle a toujours son ruban. J’ai racheté du fil en novembre pour toutes les quatre, alors elles sont prêtes.",
      "Tu viendras du 10 au 24. C’est noté sur le calendrier de la cuisine, au crayon, parce que ta mère change deux fois d’avis avant de s’arrêter.",
      "Je vais te dire quelque chose, et tu ne le prendras pas mal. Depuis l’été dernier, je ne distingue plus le bouchon à dix mètres. Ça ne m’empêche pas de venir m’asseoir sur le pliant à côté de toi et de te dire quand ça mord, parce que ça, je l’entends encore très bien. Mais c’est toi qui tiendras la canne, et c’est toi qui décrocheras.",
      "Apporte ta carte de rivière.",
      "Papi",
      "1. Quelles dates Loïc annonce-t-il, et où le grand-père les note-t-il ?",
      "2. Combien y a-t-il de cannes dans le garage, et qu’a fait le grand-père en novembre ?",
      "3. Qu’est-ce que Loïc a appris à l’école, et qu’est-ce qu’il compte en faire ?",
      "4. Pourquoi le grand-père note-t-il les dates au crayon, et pas au stylo ?",
      "5. Le grand-père dit qu’il ne distingue plus le bouchon à dix mètres. Qu’est-ce que ça veut dire, et qu’est-ce qu’il décide malgré tout ?",
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
      "",
      "",
      "Du 10 au 24 juillet ; il les note sur le calendrier de la cuisine.",
      "Quatre cannes ; en novembre, il a racheté du fil pour toutes les quatre.",
      "Il sait lire une carte de rivière, et il compte l’expliquer à son grand-père. (Le grand-père lui demande d’ailleurs de l’apporter.)",
      "Parce qu’un crayon s’efface : il sait que la mère de Loïc changera deux fois d’avis avant de s’arrêter, et il s’arrange d’avance pour pouvoir corriger. Accepter « pour pouvoir gommer », « parce que les dates vont changer », « il a l’habitude ». Le détail qui vaut d’être relevé, s’il y vient tout seul : il ne s’en plaint pas, il le dit en souriant.",
      "Que sa vue a baissé, au point qu’il ne peut plus pêcher lui-même : le bouchon est ce qu’on surveille pour savoir si un poisson mord. Il n’annule rien pour autant : il change de place, il s’assoira à côté, il écoutera, et c’est Loïc qui tiendra la canne. Accepter « il voit mal », « ses yeux ont baissé », « il ne peut plus pêcher tout seul ». La seconde moitié compte autant que la première : ce qu’on cherche, c’est qu’il voie que le grand-père ne renonce pas, il se réorganise.",
    ],
    "Ce qu’on regarde : la question 4 n’a l’air de rien et elle demande beaucoup — comprendre qu’un choix aussi petit qu’un crayon dit quelque chose de quelqu’un. La question 5, elle, demande de tenir ensemble une mauvaise nouvelle et une décision. S’il ne retient que la mauvaise nouvelle, ne la lui reproche pas : relis la fin du paragraphe à voix haute et demande « et qu’est-ce qu’il fera, alors, en juillet ? ». Demain, rien à reprendre s’il a suivi les deux lettres jusqu’au bout.",
  ),

  f(
    "lq-texte-10",
    "Lecture et questions",
    "Texte 10 · Ce qui reste dans les assiettes",
    [
      "Un article, avec des chiffres et deux personnes qui ne les expliquent pas de la même façon. Lecture silencieuse en entier, crayon à la main pour entourer les nombres.",
      "Les questions à l’oral. La question 5 demande de comparer deux explications d’un même fait ; c’est nouveau, et il faut le lui annoncer avant de la poser.",
      "Le jour où ça coince : pose la question 5 en deux temps. « Que disent les cuisiniers ? » — attendre. « Que dit la directrice ? » — attendre. Puis : « ce n’est pas la même chose, tu vois pourquoi ? ». Découpée ainsi, elle passe presque toujours.",
    ],
    [
      "À l’école Jean-Moulin, on pèse ce qui reste dans les assiettes",
      "Depuis le mois de septembre, les élèves de l’école Jean-Moulin, à Voiron, vident leur assiette dans un seau posé sur une balance. Chaque midi, un élève note le poids sur une affiche, à l’entrée du réfectoire.",
      "Le premier mardi, la balance a indiqué 14,6 kilos pour 210 repas servis. En décembre, elle indiquait 8,2 kilos. « On n’a rien interdit à personne », précise Mme Cordier, la directrice. « On a seulement affiché le chiffre. »",
      "Deux changements ont été apportés en octobre, à la demande des élèves eux-mêmes : on sert désormais deux tailles de portions, et le pain est posé sur les tables à la fin du repas au lieu du début.",
      "Le seau du vendredi reste le plus lourd de la semaine. Les cuisiniers ont leur explication : c’est le jour du poisson. La directrice en propose une autre : « C’est aussi le jour où les enfants parlent le plus. »",
      "1. Depuis quand les élèves pèsent-ils leurs restes, et qui écrit le chiffre sur l’affiche ?",
      "2. Combien de kilos le premier mardi, et combien en décembre ?",
      "3. Quels deux changements ont été faits en octobre, et qui les a demandés ?",
      "4. La directrice dit qu’on n’a rien interdit, seulement affiché un chiffre. Comment un chiffre affiché peut-il changer quelque chose ?",
      "5. Les cuisiniers et la directrice n’expliquent pas le vendredi de la même façon. Quelle est la différence entre leurs deux explications ?",
    ],
    [
      "",
      "",
      "",
      "",
      "",
      "Depuis le mois de septembre ; c’est un élève qui note le poids chaque midi.",
      "14,6 kilos le premier mardi, 8,2 kilos en décembre.",
      "Deux tailles de portions, et le pain servi à la fin du repas au lieu du début. Ce sont les élèves eux-mêmes qui les ont demandés.",
      "Parce que le chiffre se voit, tous les jours, par tout le monde, et qu’on a envie de le faire baisser. Les élèves se servent moins, demandent une petite portion, prennent le pain quand ils ont encore faim. Personne ne les oblige : ils choisissent en connaissant le résultat. Accepter « ils voient ce que ça fait », « ils veulent qu’il descende », « ça leur donne envie de faire attention ».",
      "Les cuisiniers accusent le menu : c’est le poisson que les enfants n’aiment pas. La directrice accuse autre chose : ce jour-là les enfants discutent, donc ils ne mangent pas. Dans un cas la cause est dans l’assiette, dans l’autre elle est dans ceux qui sont à table. Accepter toute formulation qui oppose ces deux causes : « l’un dit que c’est le plat, l’autre que c’est les enfants », « les cuisiniers parlent du poisson, la directrice du bavardage ». Ne pas demander laquelle a raison : l’article ne tranche pas, et nous non plus.",
    ],
    "Ce qu’on regarde : est-ce qu’il voit que deux personnes peuvent donner deux causes différentes au même fait, sans que l’une mente ? C’est un pas de plus que « ce qui est écrit / ce qui se déduit », et c’est ce qu’on continuera de travailler jusqu’en juin sur les articles. S’il cherche à savoir qui a raison, réponds franchement que l’article ne le dit pas et que ça n’a pas à être tranché aujourd’hui. À reprendre demain : rien, sinon écouter, dans la journée, deux explications d’une même chose et les lui faire remarquer.",
  ),

  f(
    "lq-texte-11",
    "Lecture et questions",
    "Texte 11 · Un appel à dix-neuf heures",
    [
      "Le texte le plus exigeant depuis septembre : on n’entend qu’une moitié de la conversation, et la question 4 demande de reconstituer l’autre. Le lui annoncer clairement avant la lecture, c’est la moitié du travail.",
      "Lecture silencieuse, puis relecture à voix haute des seules répliques du père, lentement, en marquant les silences. C’est dans les silences que se trouve ce qu’on cherche.",
      "Le jour où ça coince : au lieu des cinq questions, une seule, écrite au crayon sur le cahier — « qu’est-ce que la personne au téléphone vient d’annoncer ? ». Et s’il ne trouve pas, on lit ensemble la dernière phrase du texte, qui donne la réponse, et on remonte à l’envers.",
    ],
    [
      "Chez les Bourdin, le téléphone est posé dans l’entrée, sur un meuble à chaussures. Léna faisait ses devoirs à la table de la cuisine, porte ouverte. Elle a entendu tout ce que son père a dit. Elle n’a pas entendu ce qu’on lui répondait.",
      "— Oui, bonsoir… Oui, c’est bien lui.",
      "— Ah.",
      "— Non, non, vous avez bien fait d’appeler.",
      "— Depuis combien de temps ?",
      "— Et elle a pu marcher jusqu’à la voiture toute seule ?",
      "— D’accord. D’accord.",
      "— Non, elle ne m’a rien dit samedi. Rien du tout.",
      "— Écoutez, je peux être là demain matin. Je pars à six heures, je serai à Nevers vers neuf heures et demie.",
      "— Oui, je prends la voiture.",
      "— Vous lui direz que j’arrive. Et vous lui direz que je ne suis pas fâché.",
      "Il a raccroché. Il est resté une minute la main sur le combiné. Puis il est venu dans la cuisine, il a sorti deux assiettes au lieu de trois, et il a dit : « Léna, ta grand-mère est tombée. Tu dormiras chez Nadia demain soir. »",
      "1. Où est posé le téléphone, et où se trouve Léna pendant l’appel ?",
      "2. À quelle heure le père partira-t-il, où va-t-il, et comment ?",
      "3. Que fait le père juste après avoir raccroché ? Cite deux gestes.",
      "4. Qui appelle, et pour dire quoi ? Le texte ne le dit jamais : trouve-le grâce aux réponses du père.",
      "5. Le père demande qu’on dise à sa mère qu’il n’est pas fâché. Qu’est-ce que ça laisse deviner ?",
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
      "",
      "",
      "Dans l’entrée, sur un meuble à chaussures. Léna est dans la cuisine, à la table, la porte ouverte.",
      "Il part à six heures, il va à Nevers, en voiture, et il compte y être vers neuf heures et demie.",
      "Il reste une minute la main sur le combiné, puis il sort deux assiettes au lieu de trois. (Sortir deux assiettes et non trois compte comme le second geste : c’est qu’il sait déjà qu’il ne dînera pas là demain.)",
      "Quelqu’un qui s’occupe de la grand-mère — un voisin, quelqu’un de l’hôpital, une personne de son immeuble — appelle pour prévenir qu’elle est tombée. On le déduit de trois réponses : « vous avez bien fait d’appeler », « depuis combien de temps ? », « elle a pu marcher jusqu’à la voiture toute seule ? ». Et la dernière phrase du texte le confirme. Accepter toute réponse qui dit une chute et un appel de la part de quelqu’un qui était sur place. Ne pas exiger qu’il identifie précisément l’appelant : le texte ne le permet pas.",
      "Que la grand-mère n’a rien dit — le père le relève lui-même : « elle ne m’a rien dit samedi, rien du tout ». Elle a caché sa chute, sans doute pour ne pas inquiéter son fils ou pour ne pas se faire gronder. Le père le devine et fait passer le message d’avance, pour qu’elle n’ait pas à avoir honte quand il arrivera. Accepter « elle lui avait caché », « elle avait peur qu’il se fâche », « il ne veut pas qu’elle s’inquiète de sa réaction ».",
    ],
    "Ce qu’on regarde : la question 4 est un vrai morceau, et elle peut très bien ne pas passer aujourd’hui. Ce qui compte, c’est la méthode qu’il emploie — est-ce qu’il relit les répliques une à une pour en tirer un indice, ou est-ce qu’il devine d’un coup et s’arrête ? La bonne méthode sans la bonne réponse vaut mieux que l’inverse, et c’est elle qu’on souligne. Si le texte l’a mis mal à l’aise, s’arrêter à la question 3 : il n’y a rien à prouver ici.",
  ),

  /* ================================================================== */
  /* AVRIL ET DÉBUT MAI                                                  */
  /* « Lire un document pour apprendre » est passée : le texte 14         */
  /* travaille la nature et la source, qui sont les deux questions        */
  /* qu’on pose avant de lire.                                           */
  /* ================================================================== */

  f(
    "lq-texte-12",
    "Lecture et questions",
    "Texte 12 · Onze carnets dans une caisse à outils",
    [
      "À lire toi-même d’abord : ce témoignage parle d’un père mort, en une incise et sans détail, et d’une date qui s’est révélée être celle d’une rencontre. Rien n’y est dur, mais mieux vaut le savoir avant de le lui tendre.",
      "Lecture silencieuse, puis les questions à l’oral. Les quatre paragraphes ne suivent pas l’ordre du temps : le carnet est tenu de 1961 à 2002, retrouvé après, ouvert six ans plus tard, et la scène du 12 août 1974 est la plus ancienne de toutes. Lui faire placer les quatre moments sur une ligne au crayon, si ça l’aide.",
      "Le jour où ça coince : garder les trois premières questions et remplacer les deux dernières par une seule, à l’oral — « pourquoi le point d’exclamation compte-t-il autant ? ». Et si la ligne du temps l’a fatigué, s’arrêter là : reconstituer un ordre est déjà une lecture.",
    ],
    [
      "« Mon père notait la température tous les matins sur un carnet. Il a commencé le 1er janvier 1961, le jour de ses vingt ans, et il a arrêté le 3 mars 2002, deux semaines avant sa mort. Quarante et un ans, sans sauter un jour. »",
      "« C’était toujours la même page : la date, la température à sept heures, le vent, et un mot pour le ciel. Couvert. Clair. Brumeux. Il n’écrivait jamais rien d’autre. Pas ce qu’il faisait, pas qui venait à la maison, pas ce qu’il pensait. »",
      "« Quand on a vidé le bureau, on a trouvé onze carnets dans une caisse à outils. Ma sœur voulait tout jeter. J’ai dit non, et je ne savais pas pourquoi. Je les ai montés au grenier et je n’y ai plus touché pendant six ans. »",
      "« L’hiver dernier, j’ai cherché le 12 août 1974, le jour où ma mère est arrivée à la maison. Il avait écrit : 19 degrés, vent nul, clair. Et en dessous, tout seul sur la ligne, un point d’exclamation. C’est le seul de tout le carnet. J’ai vérifié les dix autres. Il n’y en a pas un deuxième. »",
      "1. Quand le père a-t-il commencé son carnet, et quand l’a-t-il arrêté ?",
      "2. Que notait-il chaque matin ? Cite les quatre choses.",
      "3. Où les carnets ont-ils été retrouvés, et où sont-ils restés six ans ?",
      "4. Le narrateur refuse de jeter les carnets alors qu’il dit ne pas savoir pourquoi. Qu’est-ce qu’il devinait, à ton avis ?",
      "5. Que dit le point d’exclamation du 12 août 1974 ? Et pourquoi est-ce important qu’il soit le seul de tous les carnets ?",
    ],
    [
      "",
      "",
      "",
      "",
      "Il a commencé le 1er janvier 1961, le jour de ses vingt ans, et il a arrêté le 3 mars 2002.",
      "La date, la température à sept heures, le vent, et un mot pour le ciel.",
      "Dans une caisse à outils, en vidant le bureau. Ils sont restés six ans au grenier.",
      "Qu’il y avait quelque chose de son père là-dedans, même si ce n’étaient que des chiffres : quarante et un ans de matins, c’est une vie entière rangée par dates. Il sentait qu’on ne jette pas ça, sans pouvoir encore dire ce qu’il y trouverait. Accepter « c’était tout ce qui restait de lui », « il y avait sa main dessus », « il sentait que ça servirait un jour », « il ne voulait pas jeter quarante ans ». Il n’y a pas de réponse exacte ici : on demande une hypothèse, et on demande qu’elle s’appuie sur le texte.",
      "Que ce jour-là, son père a été heureux, et qu’il n’a trouvé que ce signe-là pour le dire — lui qui n’écrivait jamais rien d’autre que le temps qu’il faisait. Qu’il soit le seul de onze carnets, c’est ce qui en fait la preuve : un homme qui met un point d’exclamation une fois en quarante et un ans ne l’a pas mis par hasard. Accepter « il était content ce jour-là », « c’est le jour où il a rencontré sa femme », « c’est sa façon à lui de le dire ». La seconde moitié — pourquoi le fait qu’il soit unique change tout — est la vraie question : si elle ne vient pas, la poser séparément.",
    ],
    "Ce qu’on regarde : est-ce qu’il comprend qu’un texte peut faire porter tout son poids à un seul signe de ponctuation ? C’est le genre de lecture qui ne s’obtient pas par la méthode, seulement par la fréquentation, et il y reviendra les années suivantes. Deux choses valent d’être notées aujourd’hui : est-ce qu’il a su remettre les quatre moments dans l’ordre, et est-ce qu’il a proposé une hypothèse à la question 4 plutôt que de dire « je ne sais pas ». Proposer une hypothèse qu’on n’est pas sûr de tenir, c’est exactement ce qu’on lui demande à partir de maintenant.",
  ),

  f(
    "lq-texte-13",
    "Lecture et questions",
    "Texte 13 · Quatre-vingt-douze marches",
    [
      "Lecture silencieuse en entier. Le texte est fait de dates et de gestes répétés : le mardi 19, le mardi 26, le mardi 2 avril. Lui faire remarquer, avant de commencer, qu’on va lui demander ce que ces répétitions veulent dire.",
      "Les cinq questions à l’oral. La question 4 tient à un détail glissé dans une subordonnée — « alors que l’ascenseur était réparé depuis huit jours » — et c’est là que le texte se joue.",
      "Le jour où ça coince : lui lire toi-même le troisième paragraphe, puis poser une seule question, plus petite — « pourquoi est-ce qu’il le fait encore le 2 avril ? ». La suite vient souvent d’elle-même.",
    ],
    [
      "Le 18 mars, l’ascenseur du 14 rue Béranger est tombé en panne pour la troisième fois de l’hiver. L’affiche collée sur la porte disait : « Intervention prévue le 24. » Mme Sirvent habite au cinquième.",
      "Elle a quatre-vingt-un ans et elle fait son marché le mardi, au marché couvert, à six minutes à pied. Depuis des années, quand l’ascenseur ne marche pas, elle pose ses deux sacs derrière la porte des boîtes aux lettres, monte les cinq étages sans rien porter, souffle un quart d’heure, et redescend les chercher.",
      "Le mardi 19, Yanis, qui habite au second et qui a onze ans, est passé dans le hall à onze heures et quart. Les sacs étaient là. Il les a montés, il les a posés devant la porte du cinquième, et il est redescendu sans sonner. Le mardi 26 aussi. Le mardi 2 avril encore, alors que l’ascenseur était réparé depuis huit jours et que les sacs n’avaient donc rien à faire derrière la porte des boîtes aux lettres.",
      "Mme Sirvent ne lui a jamais dit merci, parce qu’elle ne l’a jamais vu. La quatrième fois, il a trouvé sur le paillasson du second une boîte en fer avec quatre madeleines dedans et un papier plié : « Quatre-vingt-douze marches. Je les ai comptées aussi. »",
      "1. Pourquoi Mme Sirvent doit-elle monter à pied à partir du 18 mars, et jusqu’à quelle date était prévue la réparation ?",
      "2. Que fait-elle de ses sacs avant de monter, et pourquoi ?",
      "3. Que fait Yanis exactement, le mardi 19 ? Décris les trois gestes.",
      "4. Le 2 avril, l’ascenseur marche depuis huit jours, et pourtant les sacs sont encore en bas et Yanis les monte. Qu’est-ce que ça nous apprend — sur elle, et sur lui ?",
      "5. Le mot dit : « Quatre-vingt-douze marches. Je les ai comptées aussi. » Qu’est-ce que Mme Sirvent fait comprendre à Yanis avec cette phrase ?",
    ],
    [
      "",
      "",
      "",
      "",
      "L’ascenseur est en panne depuis le 18 mars ; l’affiche annonçait une intervention le 24.",
      "Elle les pose derrière la porte des boîtes aux lettres, monte les cinq étages sans rien porter, souffle un quart d’heure, puis redescend les chercher. Elle fait ça parce que monter cinq étages avec deux sacs est au-dessus de ses forces.",
      "Il monte les deux sacs, il les pose devant la porte du cinquième, et il redescend sans sonner.",
      "Sur elle : elle a continué à laisser ses sacs en bas alors qu’elle pouvait prendre l’ascenseur, donc elle a compris que quelqu’un les montait et elle ne veut pas que ça s’arrête. Sur lui : il continue aussi, alors que rien ne l’y oblige — ce n’était pas un dépannage, c’est devenu un rendez-vous. Accepter l’une des deux moitiés ; les deux ensemble sont une lecture complète. Accepter aussi « ils se sont mis d’accord sans se parler », qui dit tout d’un coup.",
      "Qu’elle sait que c’est lui : elle a mis la boîte devant sa porte à lui, au second, et pas ailleurs. Qu’elle sait ce que ça coûte, puisqu’elle les a comptées elle aussi, ces marches. Et qu’elle le remercie sans l’obliger à se montrer — il n’a pas sonné, elle ne sonne pas non plus. Accepter « elle a deviné que c’était lui », « elle le remercie », « elle lui dit qu’elle sait que c’est dur ». Ce qui mérite un mot, s’il y vient : elle le remercie de la même façon qu’il l’a aidée, sans se faire voir.",
    ],
    "Ce qu’on regarde : la question 4 demande de tirer une conclusion de ce qui n’a pas changé — les sacs toujours en bas quand ils n’avaient plus de raison d’y être. Déduire d’une absence, c’est plus difficile que déduire d’un fait, et c’est nouveau. S’il ne relève pas l’ascenseur réparé, montre-lui la ligne du doigt sans commentaire et laisse-le reprendre. À reprendre demain : rien, si la question 5 lui a fait plaisir. Ce texte n’a pas d’autre but.",
  ),

  f(
    "lq-texte-14",
    "Lecture et questions",
    "Texte 14 · Trente-neuf nids à la ferme Bertin",
    [
      "Un article documentaire, avec un encadré. La leçon de la période dit qu’on pose deux questions avant de lire un document : quelle est sa nature, et d’où vient-il. Pose-les-lui à voix haute avant qu’il commence, et laisse-le trouver la ligne qui répond à la seconde.",
      "Lecture silencieuse. L’encadré se lit à part, après le reste : lui montrer que ce n’est pas la suite du texte mais un à-côté qui détaille un point.",
      "Le jour où ça coince : ne lire que les paragraphes 3, 4 et l’encadré, et poser les questions 2, 3 et 4. Un document se lit en piochant, et savoir piocher est justement ce que le programme demande cette période.",
    ],
    [
      "Trente-neuf nids comptés à la ferme Bertin",
      "Article paru dans « Le Courrier du Lévézou » du 9 avril, page 11. Signé Claire Vasseur.",
      "Chaque printemps depuis 2011, un groupe de bénévoles compte les nids d’hirondelles rustiques dans quatorze fermes du canton. Cette année, la ferme Bertin, à Salmiech, arrive en tête avec trente-neuf nids occupés. Elle en comptait vingt-deux en 2011.",
      "L’hirondelle rustique construit son nid à l’intérieur des bâtiments : étables, granges, hangars ouverts. Il lui faut de la boue pour le maçonner et des insectes volants pour nourrir ses petits. Elle revient chaque année au même endroit, souvent au nid exact de l’année précédente.",
      "ENCADRÉ · Ce que fait Alain Bertin. Il laisse une fenêtre de l’étable entrouverte de mars à septembre. Il n’a pas bouché les trous du mur nord. Il a cloué sous les nids des planches qui recueillent les fientes, pour n’avoir pas à déloger les oiseaux.",
      "Dans les treize autres fermes du canton, le total est en baisse de 18 % depuis 2011. Les bénévoles avancent deux causes possibles : la fermeture des bâtiments, et la diminution des insectes. Le prochain comptage aura lieu en juin.",
      "1. Combien de nids ont été comptés à la ferme Bertin cette année, et combien en 2011 ?",
      "2. De quoi l’hirondelle rustique a-t-elle besoin pour construire son nid, et de quoi pour nourrir ses petits ?",
      "3. Cite deux choses qu’Alain Bertin fait, d’après l’encadré.",
      "4. Pourquoi la ferme Bertin est-elle en tête, alors que le total baisse dans les treize autres fermes ?",
      "5. La deuxième ligne donne le nom du journal, la date, la page et la personne qui a écrit l’article. À quoi ça sert, quand on lit pour apprendre ?",
    ],
    [
      "",
      "",
      "",
      "",
      "",
      "",
      "Trente-neuf cette année, vingt-deux en 2011.",
      "De la boue pour maçonner le nid, et des insectes volants pour nourrir ses petits.",
      "Il laisse une fenêtre de l’étable entrouverte de mars à septembre ; il n’a pas bouché les trous du mur nord ; il a cloué des planches sous les nids pour recueillir les fientes. Deux de ces trois suffisent.",
      "Parce que tout ce qu’Alain Bertin fait répond exactement à ce dont l’hirondelle a besoin : une ouverture pour entrer, des trous laissés libres, et des nids qu’on ne détruit pas — or l’hirondelle revient au même nid chaque année. Les deux causes de baisse citées à la fin sont justement celles qu’il a écartées chez lui. Accepter « il laisse entrer les oiseaux », « il ne casse pas les nids », « il fait ce qu’il faut pour qu’elles reviennent ». Le raisonnement attendu met en regard l’encadré et le paragraphe sur les besoins de l’hirondelle.",
      "À savoir d’où vient ce qu’on lit : qui l’a écrit, quand, et où le retrouver. On peut vérifier, on peut chercher la suite dans le même journal, on peut dater l’information — trente-neuf nids « cette année » ne veut rien dire sans la date. Un document sans source oblige à croire sur parole. Accepter « pour savoir qui l’a écrit », « pour vérifier », « pour le retrouver », « pour savoir de quand ça date ». C’est exactement la question que la leçon de la période appelle la nature et la source.",
    ],
    "Ce qu’on regarde : est-ce qu’il a lu l’encadré comme un à-côté, ou est-ce qu’il l’a lu comme la suite du texte ? On le voit à la question 4 : celui qui a compris le rôle de l’encadré fait le rapprochement tout seul. La question 5 n’a pas de réponse à deviner, elle a une habitude à prendre — chercher la source avant de lire — et il faudra la reposer sur chaque document de l’année. À reprendre demain : devant n’importe quel papier qui traîne, une affiche, une notice, un prospectus, lui demander d’où ça vient. Trente secondes, et ça suffit.",
  ),

  /* ================================================================== */
  /* PÉRIODE 5 — mai, juin                                               */
  /* Les textes les plus longs de la série. On croise deux récits d’un    */
  /* même fait, on lit une lettre administrative, on entend un témoin     */
  /* qui ne dit pas tout.                                                */
  /* ================================================================== */

  f(
    "lq-texte-15",
    "Lecture et questions",
    "Texte 15 · Le même mercredi, de deux fenêtres",
    [
      "Deux témoignages sur le même après-midi, par deux personnes qui ne se connaissent pas. Le dire avant la lecture, et pas plus : il faut qu’il découvre lui-même que les deux récits se recoupent.",
      "Lecture silencieuse des deux, puis les questions à l’oral. Pour la question 3, il faut aller chercher dans le second témoignage un fait que le premier ignore : c’est le principe même du texte.",
      "Le jour où ça coince : lire seulement le témoignage de Mme Peyre, qui contient toute l’histoire à lui seul, et poser les questions 2, 3 et 5. Le croisement des deux récits attendra la prochaine fois.",
    ],
    [
      "Deux personnes racontent le même mercredi après-midi, le 5 mai, place de la Halle. Elles ne se connaissent pas et elles n’ont pas été interrogées ensemble.",
      "Karim, quinze ans, assis sur le muret de la fontaine : « On joue contre le mur du fond, celui de l’ancienne poste, parce que c’est le seul sans fenêtre. On pose deux sacs pour faire les poteaux. On est là le mercredi et le samedi, depuis l’automne. »",
      "« Mercredi, à un moment, Bilal a frappé beaucoup trop haut. La balle est partie sur la gauche et on a entendu quelque chose se casser, au premier étage. On s’est regardés. Personne n’a bougé pendant trois secondes. Et puis on a ramassé les sacs et on est partis vers le parking, pas en courant, mais pas lentement non plus. »",
      "Mme Peyre, soixante-quatorze ans, au premier étage du numéro 3 : « Ils viennent le mercredi et le samedi. Ça tape contre le mur toutes les trois secondes. À mon âge, je n’entends plus grand-chose, mais ça, je l’entends. »",
      "« Mercredi, la balle a emporté le pot de basilic qui était sur mon rebord. Il s’est cassé sur le trottoir. Je me suis penchée : ils étaient déjà en train de partir. Le lendemain matin, il y avait le pot devant ma porte, recollé, avec le basilic dedans et de la terre neuve. Recollé, pas remplacé. Ça se voyait. Je l’ai remis sur le rebord. »",
      "1. Contre quel mur les garçons jouent-ils, et pour quelle raison celui-là ?",
      "2. Qu’est-ce que la balle a cassé, et où était cet objet ?",
      "3. Que trouve Mme Peyre devant sa porte le lendemain matin ?",
      "4. Karim dit qu’ils sont partis « pas en courant, mais pas lentement non plus ». Qu’est-ce que ça dit de ce qu’ils ressentaient ?",
      "5. Mme Peyre insiste : « Recollé, pas remplacé. Ça se voyait. » Pourquoi ce détail compte-t-il pour elle, et qu’est-ce qu’elle en conclut ?",
    ],
    [
      "",
      "",
      "",
      "",
      "",
      "Contre le mur du fond, celui de l’ancienne poste, parce que c’est le seul mur sans fenêtre.",
      "Un pot de basilic, qui était sur le rebord de la fenêtre de Mme Peyre, au premier étage du numéro 3.",
      "Le pot, recollé, avec le basilic dedans et de la terre neuve.",
      "Qu’ils savaient qu’ils avaient cassé quelque chose et qu’ils ne voulaient pas être là quand on descendrait — mais qu’ils n’étaient pas non plus décidés à fuir. Courir aurait été avouer ; rester aurait demandé du courage ; ils ont fait entre les deux. Accepter « ils étaient gênés », « ils avaient un peu peur », « ils ne voulaient pas avoir l’air de se sauver », « ils ne savaient pas quoi faire ». Le mot du texte à faire remarquer, s’il ne le voit pas : personne n’a bougé pendant trois secondes.",
      "Parce que recoller un pot cassé prend du temps, des morceaux qu’il faut retrouver sur le trottoir, et de la patience — alors qu’en racheter un aurait été plus rapide et n’aurait rien coûté qu’un peu d’argent. Elle en conclut que ce sont bien eux qui sont revenus, qu’ils s’en sont occupés eux-mêmes, et qu’ils n’ont pas cherché à faire disparaître la faute mais à la réparer. Et elle le leur fait savoir à sa façon : elle remet le pot sur le rebord, à la même place. Accepter « ils ont pris du temps », « ils l’ont fait eux-mêmes », « elle voit qu’ils ont fait un effort », « elle n’est pas fâchée ». Les deux témoignages sont nécessaires pour répondre, et c’est le but du texte.",
    ],
    "Ce qu’on regarde : est-ce qu’il croise les deux récits, ou est-ce qu’il les lit l’un après l’autre sans les relier ? La question 5 le dit tout de suite — ceux qui les croisent savent que les garçons sont revenus la nuit, alors que ni Karim ni Mme Peyre ne le disent. Chacun des deux ne détient qu’une moitié, et l’histoire n’existe qu’entre les deux. Si le croisement se fait, il n’y a rien à reprendre : c’est une lecture de fin d’année, et elle est là.",
  ),

  f(
    "lq-texte-16",
    "Lecture et questions",
    "Texte 16 · La réponse de la maire",
    [
      "Une lettre administrative : une écriture qu’il rencontrera toute sa vie et qu’on ne lui montre jamais. Avant la lecture, lui faire repérer les quatre repères en haut — qui écrit, d’où, à qui, et l’objet — et lui dire que l’objet résume tout à lui seul.",
      "Lecture silencieuse. Les formules de politesse peuvent être sautées : lui dire explicitement qu’il a le droit de ne pas s’arrêter dessus, ça évite un blocage inutile sur « veuillez agréer ».",
      "Le jour où ça coince : cette lettre se lit très bien en trois morceaux. Ce qu’on demandait, ce qui est accordé, ce qui est refusé. Fais-lui écrire ces trois mots sur le cahier et remplir en face, et pose seulement les questions 1, 2 et 3.",
    ],
    [
      "Mairie de Fontaine-le-Comte · Service des sports",
      "Fontaine-le-Comte, le 24 mai",
      "Aux élèves de la classe de CM1-CM2 de l’école des Tilleuls",
      "Objet : votre courrier du 6 mai, relatif au terrain multisports du parc des Buis",
      "Mesdames, Messieurs,",
      "J’ai bien reçu votre lettre et je vous en remercie. Vous demandez deux choses : que le terrain multisports du parc des Buis soit éclairé jusqu’à vingt heures, et que ses deux paniers de basket soient remis à la même hauteur.",
      "Sur le second point, vous avez raison et je vous donne satisfaction. Le panier côté rivière a été abaissé de onze centimètres lors d’une réparation faite en 2019, ce que nos services n’avaient pas relevé depuis. L’intervention est programmée pour la semaine du 15 juin.",
      "Sur le premier point, je ne peux pas vous répondre favorablement cette année. L’installation de quatre mâts d’éclairage représente vingt-deux mille euros, une somme qui n’a pas été inscrite au budget voté en décembre. Je la proposerai au vote de décembre prochain. Je ne peux rien vous promettre de plus, et je préfère vous le dire clairement plutôt que de vous faire attendre.",
      "Je vous invite à venir présenter votre demande vous-mêmes devant le conseil municipal du 9 novembre, à dix-huit heures. Votre enseignante recevra une invitation.",
      "Veuillez agréer, Mesdames, Messieurs, l’expression de mes salutations distinguées.",
      "Hélène Marchand, maire",
      "1. Quelles sont les deux demandes des élèves, et de quand datait leur lettre ?",
      "2. Que répond la maire au sujet des paniers de basket ? Donne la raison du problème et la date de la réparation.",
      "3. Combien coûterait l’éclairage, et pourquoi n’est-il pas possible cette année ?",
      "4. La maire écrit qu’elle préfère le dire clairement « plutôt que de vous faire attendre ». Qu’est-ce qu’elle aurait pu faire à la place ?",
      "5. Le budget se vote en décembre. Pourquoi invite-t-elle les élèves au conseil municipal du 9 novembre, et pas après ?",
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
      "",
      "Que le terrain soit éclairé jusqu’à vingt heures, et que les deux paniers de basket soient remis à la même hauteur. Leur lettre datait du 6 mai.",
      "Elle leur donne raison. Le panier côté rivière a été abaissé de onze centimètres lors d’une réparation de 2019, et personne ne l’avait relevé depuis. L’intervention est prévue pour la semaine du 15 juin.",
      "Vingt-deux mille euros pour quatre mâts. Ce n’est pas possible cette année parce que cette somme n’a pas été inscrite au budget voté en décembre.",
      "Elle aurait pu répondre à côté, promettre vaguement d’y réfléchir, dire « on verra », laisser espérer sans rien engager. Elle choisit un non clair, daté, avec sa raison, plutôt qu’un peut-être confortable. Accepter « faire des promesses », « ne pas répondre vraiment », « dire qu’elle allait voir », « leur laisser croire que c’était possible ». Ce qui doit apparaître : elle avait le choix entre deux façons de refuser, et elle a pris la plus franche.",
      "Parce que le 9 novembre est avant le vote de décembre : s’ils viennent en novembre, les conseillers municipaux les entendront avant de décider, et leur demande pourra peser. Venir après le vote ne servirait plus à rien. Ce n’est donc pas une consolation offerte à des enfants, c’est une vraie façon d’agir, et elle la leur indique. Accepter « pour parler avant qu’on décide », « pour convaincre les élus », « parce qu’après ce serait trop tard ».",
    ],
    "Ce qu’on regarde : est-ce qu’il tient jusqu’au bout d’un texte écrit dans une langue qui n’est pas faite pour lui ? C’est le premier document administratif de la série, et l’effort est là autant que la compréhension. La question 5 demande de lire un calendrier — novembre avant décembre — et d’en tirer une intention ; c’est la déduction la plus exigeante de l’année. S’il n’y arrive pas, écris les deux dates l’une au-dessus de l’autre sur le cahier et repose la question sans rien ajouter. À reprendre demain : rien. Cette lettre se relira d’elle-même le jour où il en recevra une.",
  ),

  f(
    "lq-texte-17",
    "Lecture et questions",
    "Texte 17 · Ce que Hugo n’a pas dit tout de suite",
    [
      "À lire toi-même d’abord. Hugo raconte une sortie d’escalade et il arrange un peu son récit ; le texte ne le juge pas, et nous non plus. Si tu penses que ça le touche de trop près aujourd’hui, garde-le pour une autre fois — les fiches de réserve sont là pour ça.",
      "Lecture silencieuse, puis les questions à l’oral. Ne pas commenter la question 4 après sa réponse, quelle qu’elle soit : on l’entend, on la note, on passe à la 5.",
      "Le jour où ça coince : on garde les trois premières questions, et la séance s’arrête là. Ce texte n’a pas à être terminé pour avoir servi.",
    ],
    [
      "« La sortie, c’était le jeudi 21 mai, à la falaise de Pierrefeu. On nous a donné des baudriers et des casques. Il y avait deux moniteurs : Yann, et une dame dont j’ai oublié le nom. »",
      "« Moi, j’ai préféré rester en bas pour tenir la corde. C’est un vrai poste, personne ne peut grimper si personne ne tient. J’ai assuré Lise, puis Malo, puis Lise encore, parce qu’elle voulait refaire la voie rouge. »",
      "« Vers onze heures, Yann est venu me voir et il m’a demandé si je voulais essayer la voie verte, celle qui fait trois mètres et où on redescend en marchant. J’ai dit que j’avais mal au poignet. C’était vrai, j’étais tombé à vélo le dimanche. »",
      "« À midi et demi, presque tout le monde mangeait. Yann est remonté installer une corde sur la voie verte, et il est resté en haut à discuter avec l’autre monitrice. Il ne regardait personne. Je suis allé au pied de la voie, j’ai mis mes mains sur la première prise, et je suis monté. Ça m’a pris longtemps. En haut, il y avait une plaque avec un 4 dessus, et je me suis assis à côté. »",
      "« Quand je suis redescendu, Yann discutait toujours. Il m’a juste fait un signe de la tête. C’est tout. Je crois que c’est pour ça que j’ai pu. »",
      "1. Où avait lieu la sortie, et quel matériel a-t-on donné aux élèves ?",
      "2. Qui Hugo a-t-il assuré, et dans quel ordre ?",
      "3. Que répond Hugo à Yann, vers onze heures, et pour quelle raison ?",
      "4. Hugo dit qu’il a « préféré » rester en bas. Est-ce que c’est toute la vérité ? Sur quoi t’appuies-tu ?",
      "5. Hugo termine par : « Je crois que c’est pour ça que j’ai pu. » De quoi parle-t-il ?",
    ],
    [
      "",
      "",
      "",
      "",
      "",
      "À la falaise de Pierrefeu, le jeudi 21 mai. On leur a donné des baudriers et des casques.",
      "Lise, puis Malo, puis Lise à nouveau, qui voulait refaire la voie rouge.",
      "Qu’il a mal au poignet, parce qu’il est tombé à vélo le dimanche.",
      "Non. Le poignet est vrai, il le dit lui-même, mais ce n’est pas toute la raison : à midi et demi, quand presque tout le monde mange et que personne ne regarde, il grimpe. Donc il voulait grimper. Ce qui l’en empêchait le matin, ce n’était pas le poignet, c’était d’être vu en train d’essayer. Accepter « il avait envie mais il n’osait pas devant les autres », « il ne voulait pas qu’on le regarde », « il avait peur de rater devant tout le monde ». Ne pas exiger le mot « mentir » : il n’a pas menti, il n’a pas tout dit, et ce n’est pas la même chose.",
      "Du fait que Yann ne le regardait pas. Il était en haut, en train de discuter, il ne surveillait personne, et il n’a rien dit quand Hugo est redescendu — juste un signe de tête. Personne ne l’encourageait, personne ne l’observait, donc il n’y avait rien à réussir devant qui que ce soit : il ne restait que la voie et lui. Accepter « parce que personne ne le regardait », « parce qu’il était tranquille », « parce qu’on ne lui demandait rien ».",
    ],
    "Ce qu’on regarde : est-ce qu’il accepte qu’un narrateur ne dise pas tout sans pour autant mentir ? C’est le dernier pas de l’année, et il peut très bien attendre le CM2. On ne cherche pas à ce qu’il condamne Hugo — s’il le défend, c’est une lecture, et elle se justifie aussi bien. Deux mots sur le ton : ce texte peut lui parler de près, et il n’est pas fait pour ouvrir une conversation sur lui. On lit, on répond aux questions, on referme. S’il veut en dire quelque chose, il le dira ; sinon on n’y revient pas.",
  ),

  f(
    "lq-texte-18",
    "Lecture et questions",
    "Texte 18 · Le dernier car de la ligne 7",
    [
      "Le dernier texte de la série, et le plus long. Lecture silencieuse en entier, sans pause, s’il le peut : le texte ne se referme qu’à la toute dernière phrase et une coupure au milieu lui ferait perdre son effet.",
      "Puis les questions à l’oral. La question 4 demande de retrouver des indices semés bien avant la chute ; il a le droit de reprendre le texte au crayon et de souligner ce qu’il trouve, c’est même la bonne façon de faire.",
      "Le jour où ça coince : lis-lui le texte à voix haute toi-même, du début à la fin, et ne pose que la question 5. Se faire lire un texte à la fin d’une année de lecture n’est pas un retour en arrière, c’est un plaisir qu’on s’accorde.",
    ],
    [
      "Le 30 juin, la ligne 7 a fait son dernier trajet. Elle reliait Saint-Aubin à la gare de Loudéac depuis 1978 : quatre allers-retours par jour au début, puis deux, puis un seul depuis 2019. Le car de sept heures cinq est parti à l’heure, comme les quinze mille fois précédentes.",
      "Ils étaient six à bord. Jocelyne, qui conduisait la ligne depuis vingt-six ans, en connaissait cinq par leur prénom. Le sixième, un homme d’une soixantaine d’années en veste grise, est monté à l’arrêt du Pont-Neuf, a payé son billet en pièces, et s’est assis tout au fond, côté fenêtre, alors que le car était presque vide. Il n’avait pas de sac, pas de journal, rien dans les mains.",
      "À la gare, les cinq autres sont descendus et sont partis vers le quai. L’homme en veste grise est resté assis. Jocelyne a coupé le moteur, rangé ses papiers, rempli sa feuille de route, et au bout de dix minutes elle s’est retournée.",
      "— Monsieur, on est arrivés.",
      "— Je sais.",
      "— Vous attendez quelqu’un ?",
      "— Non. Je repars avec vous. Je paierai le retour.",
      "Elle a rallumé le moteur. Ils ont refait les vingt-trois kilomètres dans l’autre sens sans que personne monte. Il n’a rien dit pendant le trajet. Il regardait dehors, et à chaque arrêt désert il hochait la tête une fois, comme on salue quelqu’un. À l’arrêt du Pont-Neuf, l’homme s’est levé, a tendu son billet et une pièce de deux euros, et il a dit en descendant : « Mon père l’a conduite pendant dix-neuf ans. Je voulais la faire une fois dans les deux sens. »",
      "1. Depuis quelle année la ligne 7 existait-elle, et combien d’allers-retours faisait-elle depuis 2019 ?",
      "2. Combien y avait-il de passagers, et combien Jocelyne en connaissait-elle par leur prénom ?",
      "3. Que fait Jocelyne pendant les dix minutes qui suivent l’arrivée à la gare ? Cite trois choses.",
      "4. Avant même sa dernière phrase, plusieurs détails montrent que l’homme en veste grise n’est pas un voyageur ordinaire. Trouves-en deux.",
      "5. Pourquoi tenait-il à faire le trajet « dans les deux sens », et pas seulement l’aller ?",
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
      "Depuis 1978. Depuis 2019, elle ne faisait plus qu’un seul aller-retour par jour.",
      "Six passagers ; Jocelyne en connaissait cinq par leur prénom.",
      "Elle coupe le moteur, range ses papiers, remplit sa feuille de route. (Et au bout de dix minutes, elle se retourne.)",
      "Plusieurs sont acceptables, deux suffisent. Il est le seul que Jocelyne ne connaît pas, sur une ligne où tout le monde se connaît. Il paie en pièces, donc il n’a ni abonnement ni habitude. Il n’a rien dans les mains, ni sac ni journal, alors qu’on emporte toujours quelque chose pour un trajet. Il s’assoit tout au fond, côté fenêtre, alors que le car est presque vide — on choisit cette place pour regarder, pas pour voyager. Il ne descend pas à l’arrivée. Au retour, il salue d’un signe de tête des arrêts où il n’y a personne. Il monte au Pont-Neuf et il redescend au Pont-Neuf, ce qui n’a aucun intérêt pour se déplacer. Accepter toute réponse appuyée sur un de ces détails ; ce qu’on vérifie, c’est qu’il retourne dans le texte chercher, et non qu’il devine.",
      "Parce que son père a conduit cette ligne pendant dix-neuf ans, et qu’un conducteur ne fait pas l’aller seul : il fait l’aller et le retour, c’est son trajet entier. Faire seulement l’aller, c’était voyager ; faire les deux sens, c’était refaire ce que son père faisait tous les jours. C’est sa façon de dire au revoir à la ligne, et à lui. Accepter « pour faire comme son père », « parce que son père faisait les deux », « pour faire le trajet complet », « pour lui dire au revoir ». Si la réponse s’arrête à « parce que son père la conduisait », demander : « et un conducteur, il s’arrête à la gare ou il revient ? »",
    ],
    "Ce qu’on regarde : la question 4 est le bilan de l’année entière. On y demande exactement ce qu’on demandait en décembre avec la clé sous le pot — retourner dans le texte, montrer l’endroit, dire pourquoi — sauf qu’il faut maintenant le faire cinq fois de suite et sur des détails qui ne se signalent pas. S’il en trouve deux, la série a fait ce qu’elle devait faire. S’il en trouve un seul et qu’il sait dire pourquoi ce détail-là compte, c’est la même chose. Il n’y a rien à reprendre demain : c’est le dernier jour.",
  ),

  /* ================================================================== */
  /* FIN JUIN — 3 fiches écrites comme une réserve                       */
  /* Pour un texte qui n’a pas pris, une semaine où l’on préfère refaire  */
  /* une lecture, ou un jour où la fiche prévue tombe mal. La trame les   */
  /* donne maintenant les 14, 21 et 29 juin ; leur exigence est celle     */
  /* des textes 11 à 16.                                                 */
  /* ================================================================== */

  f(
    "lq-texte-19",
    "Lecture et questions",
    "Texte 19 · Cent dix euros",
    [
      "Un récit presque entièrement en dialogue, entre deux adultes qui ne se connaissent pas. Lecture silencieuse, puis relecture à deux voix — toi le réparateur, lui la cliente — avant de poser la moindre question.",
      "Les questions à l’oral. La question 5 n’a pas de réponse unique : ce qu’on écoute, c’est qu’il en donne une et qu’il l’appuie sur un mot du texte.",
      "Le jour où ça coince : garder les trois premières questions, qui sont des chiffres et des faits, et transformer les deux dernières en une seule, posée simplement — « pourquoi est-ce qu’elle la fait réparer quand même ? ».",
    ],
    [
      "L’atelier est au fond d’une cour, derrière un portail vert. M. Loncle répare des machines à coudre depuis trente ans. Ce matin-là, une femme d’une quarantaine d’années a posé la sienne sur l’établi.",
      "— Elle ne prend plus le fil du bas.",
      "— Faites voir… Ah. C’est le crochet. Et la courroie est fendue, là, vous voyez ?",
      "— C’est réparable ?",
      "— Tout est réparable.",
      "— Combien ?",
      "— Le crochet, c’est une pièce d’occasion, je l’ai en stock. La courroie, j’en commande une. Avec le temps passé, comptez cent dix euros.",
      "— Et une machine neuve, ça coûte combien ?",
      "— Une correcte, quatre-vingt-dix. Je vous le dis parce que je préfère que vous le sachiez.",
      "Elle n’a pas répondu tout de suite. Elle a passé la main sur le capot, à l’endroit où la peinture est partie.",
      "— Elle est de quelle année ?",
      "— 1964. Elles duraient.",
      "— Réparez-la.",
      "M. Loncle a pris une étiquette et un crayon. Il a écrit un numéro, la date, puis il a demandé :",
      "— C’est à quel nom ?",
      "— Berthaud. C’était celle de ma mère.",
      "1. Qu’est-ce qui ne fonctionne plus sur la machine, et quelles deux pièces sont en cause ?",
      "2. Combien coûte la réparation, et combien coûte une machine neuve correcte ?",
      "3. En quelle année la machine a-t-elle été fabriquée, et qu’en dit M. Loncle ?",
      "4. M. Loncle dit : « Je vous le dis parce que je préfère que vous le sachiez. » Qu’est-ce qu’il aurait pu faire à la place ?",
      "5. Pourquoi la cliente fait-elle réparer une machine qui coûte plus cher à réparer qu’à remplacer ?",
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
      "",
      "",
      "",
      "",
      "",
      "",
      "Elle ne prend plus le fil du bas. Le crochet est en cause, et la courroie est fendue.",
      "Cent dix euros la réparation ; quatre-vingt-dix euros une machine neuve correcte.",
      "Elle est de 1964. Il en dit : « Elles duraient. »",
      "Il aurait pu se taire et encaisser cent dix euros : la cliente ne lui demandait pas le prix du neuf, elle n’aurait rien su. Il perd peut-être la réparation en le disant. Accepter « ne rien dire », « prendre l’argent », « laisser faire la réparation sans prévenir ». Le point à faire ressortir : il dit une chose qui peut lui coûter sa vente.",
      "Parce que cette machine n’est pas seulement une machine : c’était celle de sa mère. On l’apprend à la toute dernière ligne, mais deux gestes l’annonçaient avant — elle passe la main sur le capot, à l’endroit usé, et elle demande l’année. Elle ne compare pas deux prix, elle ne compare rien du tout. Accepter « parce qu’elle était à sa mère », « pour la garder », « ce n’est pas une question d’argent », « elle y tient ». Demander ensuite, si la réponse est venue vite : « et comment le devinait-on avant la dernière ligne ? »",
    ],
    "Ce qu’on regarde : la dernière ligne éclaire tout ce qui précède, et c’est un procédé qu’il rencontrera souvent. Est-ce qu’il repart en arrière tout seul en la lisant ? On le voit à sa tête plus qu’à sa réponse. S’il ne relie pas les deux gestes de la cliente — la main sur le capot, la question sur l’année — à la révélation finale, relis-lui ce passage après coup et laisse-le conclure. À reprendre demain : rien de particulier ; ce texte se suffit.",
  ),

  f(
    "lq-texte-20",
    "Lecture et questions",
    "Texte 20 · Quatre-vingt-dix nuits par an",
    [
      "Un entretien : des questions et des réponses, sans récit autour. Lui montrer avant de commencer que chaque tiret alterne — le journaliste demande, la gardienne répond — et que rien d’autre ne signale qui parle.",
      "Lecture silencieuse, puis les cinq questions à l’oral. Les chiffres sont nombreux et servent tous ; il peut les entourer pendant sa lecture.",
      "Le jour où ça coince : ne garder que les deux derniers échanges de l’entretien — le ravitaillement, puis la dernière question — qui tiennent debout tout seuls, et poser les questions 3 et 5. Un entretien se lit par morceaux sans rien perdre, et c’est une bonne chose à lui faire remarquer.",
    ],
    [
      "Entretien paru dans le bulletin municipal de la vallée, numéro 48, juin. Propos recueillis par Léo Fabre.",
      "— Vous gardez le refuge de Coumelie depuis combien de temps ?",
      "— Neuf saisons. De la mi-juin à la mi-septembre, plus les week-ends d’octobre quand il fait beau. Ça fait à peu près quatre-vingt-dix nuits par an.",
      "— Combien de personnes pouvez-vous coucher ?",
      "— Trente-deux couchages. En août, c’est complet six soirs sur sept. En juin, il y a des nuits où je suis seule.",
      "— Qu’est-ce que vous faites, ces nuits-là ?",
      "— Je répare. Il y a toujours quelque chose. Et je prépare le pain du lendemain, parce qu’on ne sait jamais.",
      "— Comment arrive le ravitaillement ?",
      "— Par hélicoptère, deux fois dans la saison, cinq cents kilos par rotation. Le reste monte à dos d’homme. Je commande en avril ce que je servirai en août ; si je me trompe, je ne peux pas descendre faire une course.",
      "— Vous vous êtes déjà trompée ?",
      "— La première année. J’avais commandé du café pour trois semaines. J’ai tenu onze jours.",
      "— Qu’est-ce que vous diriez à quelqu’un qui veut faire ce métier ?",
      "— Que ce n’est pas un métier de montagne. C’est un métier de cuisine, de plomberie et de patience, qu’on exerce à deux mille mètres. Ceux qui montent pour la vue repartent en septembre et ne reviennent pas.",
      "1. Pendant quelle période le refuge est-il gardé, et combien de nuits par an cela représente-t-il ?",
      "2. Combien y a-t-il de couchages, et comment le ravitaillement arrive-t-il au refuge ?",
      "3. Quelle erreur a-t-elle commise sa première année, et qu’est-ce que ça a donné ?",
      "4. Pourquoi prépare-t-elle du pain les soirs où elle est seule ?",
      "5. Elle dit que ce n’est pas un métier de montagne. Qu’est-ce qu’elle veut faire comprendre à ceux qui rêvent de ce travail ?",
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
      "",
      "",
      "",
      "De la mi-juin à la mi-septembre, plus les week-ends d’octobre quand il fait beau : environ quatre-vingt-dix nuits par an.",
      "Trente-deux couchages. Le ravitaillement arrive par hélicoptère deux fois dans la saison, cinq cents kilos par rotation, et le reste monte à dos d’homme.",
      "Elle avait commandé du café pour trois semaines, et elle a tenu onze jours.",
      "Parce qu’en montagne on ne prévoit pas qui arrivera : des marcheurs peuvent monter sans avoir réservé, le temps peut tourner et pousser des gens vers le refuge. Elle ne peut pas descendre acheter du pain, donc elle en fait par avance, même pour personne. « On ne sait jamais » veut dire exactement cela. Accepter « au cas où quelqu’un arrive », « on ne peut rien acheter là-haut », « s’il y a un problème dehors ». Le lien à faire est avec le paragraphe du ravitaillement : rien ne se rachète en cours de saison.",
      "Que le rêve et le travail ne sont pas la même chose. Ce qu’on fait toute la journée là-haut, c’est cuisiner, réparer la plomberie et attendre — l’altitude ne change rien à la nature des tâches, elle rend seulement tout plus compliqué. Ceux qui viennent pour le paysage s’en vont au bout d’une saison. Accepter « c’est un travail, pas des vacances », « on ne regarde pas la vue toute la journée », « il faut aimer cuisiner et bricoler ». Ce qu’on cherche, c’est qu’il oppose l’image qu’on se fait du métier à ce que le métier est réellement.",
    ],
    "Ce qu’on regarde : un entretien n’a ni début ni fin obligatoires, et on peut y entrer n’importe où. Est-ce qu’il l’a lu comme ça, ou est-ce qu’il a cherché une histoire qui n’y est pas ? La question 4 est la seule vraie déduction du texte, et elle demande de relier deux réponses éloignées l’une de l’autre — le pain et le ravitaillement. Si elle passe, il n’y a rien de plus à en tirer aujourd’hui.",
  ),

  f(
    "lq-texte-21",
    "Lecture et questions",
    "Texte 21 · La photographie où il n’y a personne",
    [
      "À lire toi-même d’abord : ce texte parle d’une mort sans jamais la nommer, et c’est précisément ce qu’on demande de déduire. Rien n’y est appuyé, mais c’est à toi de dire si le jour s’y prête.",
      "Lecture silencieuse en entier. Puis les questions à l’oral, sans commenter entre deux. Pour la question 4, il faut regarder les trois dates du quatrième paragraphe et les mettre côte à côte : lui suggérer de les écrire au crayon, l’une sous l’autre, s’il ne le fait pas de lui-même.",
      "Le jour où ça coince : garder les trois premières questions et s’arrêter là, sans explication supplémentaire. Ce texte peut aussi être simplement lu et refermé, et ce ne serait pas une séance perdue.",
    ],
    [
      "Dans la boîte à chaussures où Anne-Marie range ses photos, il y en a trois cent quatre. Toutes montrent quelqu’un : des mariages, des anniversaires, des gens qui plissent les yeux devant des monuments. Toutes sauf une.",
      "Celle-là montre une cuisine vide. Une table en Formica jaune, deux chaises, une nappe pliée sur le dossier de l’une des deux. Une casserole sur la gazinière. La fenêtre est ouverte et on devine dehors un fil à linge, avec rien dessus. Aucun être humain. Au dos, au crayon : « 3 septembre 1977 ».",
      "Pendant des années, ses enfants lui ont demandé pourquoi elle gardait celle-là. Elle répondait qu’elle ne savait plus, qu’elle avait dû appuyer sans faire exprès. Ils ont fini par ne plus poser la question.",
      "L’été dernier, sa petite-fille Jeanne a classé les photos par date pour les coller dans un album. Elle a placé la cuisine vide entre une photo du 28 août 1977, où l’on voit un homme en chemise blanche debout devant un portail, et une photo du 11 septembre 1977, où l’on voit la même cuisine, la même table, et Anne-Marie assise seule, en noir.",
      "Jeanne n’a rien dit. Elle a laissé la photo à sa place dans l’album, et elle a écrit dessous, comme sous toutes les autres, la date et le lieu : « 3 septembre 1977 — la cuisine. » Puis elle a continué à coller.",
      "1. Combien de photos y a-t-il dans la boîte, et qu’est-ce qu’elles montrent toutes, sauf une ?",
      "2. Que voit-on sur la photo du 3 septembre 1977 ? Cite quatre choses.",
      "3. Que répondait Anne-Marie quand ses enfants lui demandaient pourquoi elle gardait cette photo ?",
      "4. Jeanne a rangé les photos par date. Qu’est-ce que l’ordre des trois photos donne à comprendre ?",
      "5. Pourquoi Jeanne ne dit-elle rien, et se contente-t-elle d’écrire la date et le lieu comme sous les autres photos ?",
    ],
    [
      "",
      "",
      "",
      "",
      "",
      "Trois cent quatre photos. Toutes montrent quelqu’un, sauf une.",
      "Une table en Formica jaune, deux chaises, une nappe pliée sur un dossier, une casserole sur la gazinière, une fenêtre ouverte, un fil à linge vide dehors. Quatre de ces six suffisent, et le plus important est ce qu’on n’y voit pas : personne.",
      "Qu’elle ne savait plus, et qu’elle avait dû appuyer sans faire exprès.",
      "Que l’homme en chemise blanche du 28 août est mort entre cette date et le 11 septembre, où Anne-Marie est assise seule dans la même cuisine, habillée en noir. La photo du 3 septembre tombe entre les deux : c’est la cuisine vidée de lui, et Anne-Marie l’a photographiée exprès. Accepter toute réponse qui dit qu’il est mort ou parti et qu’elle est restée seule — le texte permet les deux, et « parti » est une lecture recevable. Ce qui compte est le raisonnement : c’est l’ordre des dates qui donne l’information, et aucune des trois photos ne la donne à elle seule.",
      "Parce que sa grand-mère a passé des années à dire qu’elle ne savait plus. Lui faire remarquer que Jeanne a compris l’obligerait à en parler, et Jeanne ne le lui demande pas. En écrivant la date et le lieu comme sous les autres, elle donne à cette photo la même place qu’aux trois cent trois autres, sans la désigner et sans la cacher. Accepter « pour ne pas la forcer à en parler », « pour ne pas lui faire de peine », « parce que ça ne la regarde pas », « pour la traiter comme les autres photos ». Il n’y a pas de bonne formule : on écoute qu’il ait vu que ce silence est un choix, et non de l’indifférence.",
    ],
    "Ce qu’on regarde : la question 4 se résout par une ligne du temps et rien d’autre — trois dates, un ordre, et ce qui manque entre les deux. C’est la même méthode que le texte 12, et c’est pour ça que cette fiche est en réserve après lui plutôt qu’avant. La question 5 est d’une autre nature : elle demande de comprendre pourquoi quelqu’un choisit de se taire, ce qui est le plus difficile de tout. S’il ne la voit pas, elle n’a pas à être expliquée aujourd’hui. Referme l’album avec lui et parle d’autre chose ; c’est très bien ainsi.",
  ),
];
