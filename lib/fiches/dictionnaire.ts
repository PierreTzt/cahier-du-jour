/**
 * Le dictionnaire — les treize séances de l’année, et trois de réserve.
 *
 * Le rituel dit : « Chercher cinq mots rencontrés cette semaine. Relever la
 * nature du mot et ses différents sens. » Il tombe treize fois, du
 * 7 décembre au 28 juin, et il porte une difficulté qu’aucun autre n’a :
 * les mots de la semaine, personne ne les connaît d’avance. Une fiche qui se
 * contenterait de recopier la consigne ne servirait donc à rien.
 *
 * Chaque fiche donne **les deux** : cinq mots prêts à chercher, choisis pour
 * travailler un geste précis du maniement du dictionnaire, **et** la consigne
 * de les remplacer par les mots de la semaine dès que l’adulte en a noté. La
 * liste n’est pas le but ; elle est là pour que la séance ait lieu même le
 * jour où personne n’a rien relevé.
 *
 * Ce qu’une fiche donne, et pourquoi : voir `lib/fiches/types.ts`. En deux
 * mots — le matériel exact, le corrigé quand il y en a un, et ce qu’on
 * regarde. Un adulte qui l’ouvre ne doit plus rien avoir à chercher.
 *
 * **Réservé aux adultes** : ces fiches portent les corrigés.
 *
 * ## Ce qui progresse ici n’est pas le vocabulaire
 *
 * C’est le maniement. Le rituel « Vocabulaire » travaille le sens des mots ;
 * celui-ci travaille l’objet, et ce qu’on sait en tirer. La série suit donc sa
 * propre progression, qui n’est celle d’aucune leçon du programme :
 *
 *   1-2    l’ordre alphabétique, jusqu’à la deuxième puis la troisième lettre
 *   3      les mots-repères en haut de page
 *   4-5    retrouver la forme sous laquelle le mot est rangé : l’infinitif
 *          d’un verbe conjugué, le singulier d’un pluriel irrégulier
 *   6-7    les abréviations de nature, puis toutes les formes d’un coup
 *   8-9    les sens numérotés, l’exemple qui les distingue, propre et figuré
 *   10-11  la famille rassemblée sur la page, puis l’origine du mot
 *   12     un mot qui n’y est pas, et ce que ça veut dire
 *   13     choisir le sens qui convient
 *   14-16  de réserve — chercher seul, puis les plus exigeantes des seize
 *
 * Deux fiches seulement s’appuient sur une leçon récente : la 8 et la 9
 * suivent « Les mots à plusieurs sens », donnée le 15 mars et reprise le
 * 6 avril, et elles tombent après elle. Les autres ne demandent que ce qui
 * est posé depuis l’automne — la nature des mots, les familles, les quatre
 * temps.
 *
 * ## Une réserve de trois, et pourquoi
 *
 * Les treize premières couvrent l’année. Les trois dernières remplacent une
 * fiche qui ne prend pas, ou prolongent une année qui déborde. Elles sont les
 * plus exigeantes des seize, et ce n’est pas un hasard : ce sont celles dont
 * on peut se passer.
 *
 * Rien de tout ceci n’a été relu par un enseignant. Ça doit l’être.
 */

import { f, type Fiche } from "./types";

export const dictionnaire: Fiche[] = [
  /* ================================================================== */
  /* PREMIÈRES RECHERCHES — le 7 et le 15 décembre                      */
  /* L’ordre alphabétique, et rien d’autre : avant de lire un article,   */
  /* il faut savoir l’atteindre.                                         */
  /* ================================================================== */

  f(
    "di-mots-01",
    "Le dictionnaire",
    "Recherche 1 · l’ordre alphabétique jusqu’à la deuxième lettre",
    [
      "Les cinq mots commencent tous par la même lettre : c’est la deuxième qui décide, et c’est tout le travail du jour. Avant d’ouvrir le dictionnaire, il les recopie sur l’ardoise dans l’ordre où il pense les trouver ; on vérifie ensuite en cherchant pour de vrai. Pour chaque mot : la nature, puis deux sens, une ligne chacun. Pour « calme », une seule nature est demandée ; la seconde est un bonus : si on la voit, tant mieux, sinon on la garde pour plus tard.",
      "La liste est là pour que la séance existe. Si l’adulte a noté des mots rencontrés cette semaine — dans un livre, sur un panneau, dans une recette —, on prend les siens à la place, en gardant la règle du jour : cinq mots qui commencent par la même lettre.",
      "Le jour où ça coince : on garde les deux premiers mots, ordre compris, et on referme. Deux mots cherchés en entier valent mieux que cinq survolés, et la fiche se reprend telle quelle la fois suivante.",
    ],
    [
      "1. **cuire** — son rang dans l’ordre alphabétique, sa nature, et deux emplois : ce qu’on fait à un plat, ce qu’on fait à une poterie.",
      "2. **corde** — son rang, sa nature, et deux sens : celle qu’on tend entre deux arbres, celles d’un instrument de musique.",
      "3. **calme** — son rang, sa nature, et, si on la voit, la seconde nature que l’article lui donne.",
      "4. **chercher** — son rang, sa nature, et deux emplois : chercher un objet, aller chercher quelqu’un.",
      "5. **cerise** — son rang, sa nature, et le sens que le mot prend quand il sert à dire une couleur.",
    ],
    [
      "1. **cuire** — Rang : cinquième, c-u venant après c-o. Nature : verbe. Sens : transformer un aliment par la chaleur (faire cuire un gâteau) ; durcir par le feu, pour une brique ou une poterie. Compte aussi, si son dictionnaire les donne : « on cuit ici », pour dire qu’on a très chaud, et « les yeux me cuisent », pour une sensation de brûlure — mais on ne les lui demande pas.",
      "2. **corde** — Rang : quatrième. Nature : nom féminin. Sens : la grosse ficelle faite de fils tordus ensemble ; le fil tendu d’un instrument de musique. Compte aussi : la corde à sauter, la corde raide, « les cordes » de l’orchestre. Ce sont des emplois du même mot, et les nommer vaut mieux que les compter.",
      "3. **calme** — Rang : premier. Nature : adjectif ou nom masculin, et l’une des deux suffit. Adjectif : qui ne s’agite pas, qui ne fait pas de bruit (une rue calme). Nom masculin : l’absence d’agitation (le calme du matin). Compte : une nature, celle qu’il trouve en premier. La seconde est un bonus : si on la voit — dans le même article, ou dans l’article qui suit selon les dictionnaires —, on la lit ensemble ; sinon on la garde pour plus tard. Les abréviations de nature seront le sujet de la fiche 6.",
      "4. **chercher** — Rang : troisième, c-h venant après c-e. Nature : verbe. Sens : essayer de trouver (chercher ses clés) ; aller prendre quelqu’un ou quelque chose là où il se trouve (aller chercher le pain). Compte aussi : « chercher à faire quelque chose », c’est-à-dire essayer.",
      "5. **cerise** — Rang : deuxième. Nature : nom féminin. Sens : le petit fruit rouge à noyau du cerisier ; la couleur de ce fruit — le mot sert alors d’adjectif et ne s’accorde pas (des rubans cerise). Compte : s’il ne trouve que le fruit, l’article est lu et la séance est faite. La couleur est en prime, et certains dictionnaires ne la donnent pas.",
    ],
    "Ce qu’on observe : est-ce qu’il regarde la deuxième lettre de lui-même, ou est-ce qu’il ouvre au hasard et feuillette. Feuilleter n’est pas une faute — c’est ce qu’on fait tant qu’on ne sait pas encore que la deuxième lettre sert à quelque chose. S’il feuillette encore à la fin de la séance, on reprend la fois suivante avec trois mots seulement, écrits l’un sous l’autre, en lui faisant entourer la lettre qui décide.",
  ),

  f(
    "di-mots-02",
    "Le dictionnaire",
    "Recherche 2 · l’ordre alphabétique jusqu’à la troisième lettre",
    [
      "Le même geste qu’à la fiche 1, d’un cran plus loin : les cinq mots partagent leurs deux premières lettres, c’est donc la troisième qui départage. Il les range sur l’ardoise avant d’ouvrir, en entourant la lettre qui décide.",
      "Si l’adulte a relevé des mots de la semaine, ils passent devant la liste : il suffit d’en choisir cinq qui commencent par les deux mêmes lettres, et le travail du jour est intact.",
      "Le jour où ça bloque : on redescend à la fiche précédente — la deuxième lettre, trois mots — et on en reste là. Redescendre d’un cran est prévu, pas concédé.",
    ],
    [
      "1. **chute** — son rang, sa nature, et trois sens : ce qui tombe, l’eau qui tombe, la fin d’une histoire.",
      "2. **chiffre** — son rang, sa nature, et la différence que l’article fait entre un chiffre et un nombre.",
      "3. **chaise** — son rang, sa nature, et ce que l’article dit d’une chaise longue.",
      "4. **choisir** — son rang, sa nature, et deux emplois.",
      "5. **chemin** — son rang, sa nature, et deux sens : celui qu’on emprunte, celui qu’on parcourt.",
    ],
    [
      "1. **chute** — Rang : cinquième, c-h-u venant en dernier. Nature : nom féminin. Sens : le fait de tomber (une chute dans l’escalier) ; la masse d’eau qui tombe d’un coup (une chute d’eau) ; la fin inattendue d’une histoire ou d’une blague. Compte aussi : les chutes de tissu, les morceaux qui restent — c’est encore ce qui tombe.",
      "2. **chiffre** — Rang : troisième. Nature : nom masculin. Sens : chacun des dix signes qui servent à écrire les nombres, de 0 à 9 ; un nombre qu’on annonce (le chiffre de la population). Compte : la distinction s’entend mieux dans l’exemple que dans la définition — 47 est un nombre écrit avec deux chiffres, et c’est la phrase à garder.",
      "3. **chaise** — Rang : premier. Nature : nom féminin. Sens : le siège à dossier, pour une personne, sans accoudoirs. Compte : l’article est court, et c’est un renseignement en soi. La chaise longue y figure le plus souvent comme un emploi à part — un siège où l’on s’allonge, donc pas vraiment une chaise. Si son dictionnaire ne la donne pas, on le constate ensemble et on passe : l’absence est aussi une réponse.",
      "4. **choisir** — Rang : quatrième. Nature : verbe. Sens : prendre une chose plutôt qu’une autre (choisir un livre) ; désigner quelqu’un pour un rôle (choisir un capitaine). Compte aussi : « choisir de faire quelque chose », c’est-à-dire décider.",
      "5. **chemin** — Rang : deuxième. Nature : nom masculin. Sens : la voie étroite, souvent sans goudron, qui mène d’un endroit à un autre ; le trajet qu’on parcourt (il y a une heure de chemin). Compte aussi : « faire son chemin », « le chemin de fer » — deux emplois que les dictionnaires rangent dans le même article.",
    ],
    "Le mot 2 est le plus parlant : est-ce qu’il lit l’exemple, ou seulement la définition ? Un article se lit en deux morceaux, et c’est l’exemple qui rend le premier utilisable. S’il saute systématiquement les exemples, on change une seule chose la fois suivante : il lit l’exemple d’abord, et devine la définition avant de la lire.",
  ),

  /* ================================================================== */
  /* PUIS — une recherche, le 8 janvier                                  */
  /* ================================================================== */

  f(
    "di-mots-03",
    "Le dictionnaire",
    "Recherche 3 · les mots-repères en haut de page",
    [
      "Nouveauté du jour : les deux mots imprimés en haut de chaque page. Le premier est le premier mot de la page, le second en est le dernier ; entre les deux, tout ce que la page contient. Certains dictionnaires n’en impriment qu’un par page — le premier mot à gauche, le dernier à droite de la double page — et le geste reste le même. On ouvre au jugé, on lit les deux repères à voix haute, et il dit avant, après, ou ici.",
      "Les cinq mots sont pris aux quatre coins de l’alphabet, exprès. Si l’adulte a relevé des mots de la semaine, ils font tout aussi bien l’affaire — à condition qu’ils ne commencent pas tous par la même lettre, sinon la page ne change jamais et le repère ne sert à rien.",
      "Le jour où ça coince : l’adulte ouvre et lit les deux repères, l’enfant dit seulement avant ou après. La moitié du geste, faite tranquillement, s’installe mieux que le geste entier fait en serrant les dents.",
    ],
    [
      "1. **brouillard** — les deux mots-repères de la page où il se trouve, puis sa nature et son sens.",
      "2. **épais** — les repères de sa page, sa nature, et deux sens : un mur épais, une soupe épaisse.",
      "3. **jongler** — les repères de sa page, sa nature, et ce que le mot veut dire quand on jongle avec des horaires.",
      "4. **règle** — les repères de sa page, sa nature, et deux sens très éloignés l’un de l’autre.",
      "5. **veiller** — les repères de sa page, sa nature, et la différence entre veiller et veiller sur quelqu’un.",
    ],
    [
      "1. **brouillard** — Les mots-repères dépendent du dictionnaire de la maison : on ne peut pas les donner ici, et c’est ce qui rend l’exercice vrai. Nature : nom masculin. Sens : un nuage posé au ras du sol, qui empêche de voir loin. Compte aussi : l’expression « être dans le brouillard », quand on ne comprend plus rien. S’il la trouve, on la lit et on passe — le sens figuré sera le sujet de la fiche 9.",
      "2. **épais** — Nature : adjectif, épaisse au féminin, et l’article le signale juste après le mot. Sens : qui a beaucoup de distance entre ses deux faces (un mur épais, une planche épaisse) ; qui est dense, peu liquide ou peu transparent (une soupe épaisse, un brouillard épais). Compte : le lien avec le mot 1, s’il le fait tout seul — un brouillard épais, c’est le deuxième sens.",
      "3. **jongler** — Nature : verbe. Sens : lancer et rattraper plusieurs objets sans les laisser tomber ; se débrouiller avec plusieurs choses à la fois (jongler avec les horaires). Compte : la deuxième idée, même formulée autrement. « S’arranger avec », « faire tenir ensemble » disent la même chose.",
      "4. **règle** — Nature : nom féminin. Sens : l’instrument plat et gradué qui sert à tracer et à mesurer ; la consigne qu’on doit suivre (la règle du jeu, une règle de grammaire). Compte : les deux sens, qui sont dans le même article et que rien ne relie à l’œil. C’est la première fois de la série qu’un mot en porte deux aussi éloignés, et la fiche 8 en fera son sujet.",
      "5. **veiller** — Nature : verbe. Sens : rester éveillé alors qu’il serait l’heure de dormir ; veiller sur quelqu’un, c’est en prendre soin et le surveiller ; veiller à quelque chose, c’est faire attention à ce qu’elle se fasse. Compte : qu’il remarque que le petit mot qui suit — sur, à, rien — change le sens. C’est beaucoup demander aujourd’hui ; le signaler suffit.",
    ],
    "Ce qu’on regarde n’est pas le nombre de fois qu’il lui faut ouvrir, et il vaut mieux le lui dire avant de commencer : personne ne compte. Ce qu’on observe, c’est s’il lit le haut de la page avant de lire la page. Tant qu’il parcourt la colonne entière pour retrouver son mot, le repère ne lui sert pas encore ; on le reprend alors en lui faisant lire les repères à voix haute, une page sur deux, sans rien chercher du tout.",
  ),

  /* ================================================================== */
  /* PÉRIODE 3 — trois recherches, du 19 janvier au 16 février           */
  /* Retrouver la forme sous laquelle le dictionnaire range un mot :     */
  /* les quatre temps sont passés, les accords du nom aussi.             */
  /* ================================================================== */

  f(
    "di-mots-04",
    "Le dictionnaire",
    "Recherche 4 · l’infinitif d’un verbe conjugué",
    [
      "Un dictionnaire ne range pas « nous finissions » : il range « finir ». Le travail du jour tient en deux temps — retrouver l’infinitif d’abord, sur l’ardoise, et chercher ensuite. Un truc qui marche à tous les coups : mettre le verbe derrière « il faut… » ou « on va… ».",
      "Les cinq formes viennent des quatre temps déjà travaillés. Si l’adulte a relevé des verbes conjugués cette semaine — dans un livre, dans une recette, dans une consigne —, ils remplacent la liste sans rien changer à la méthode.",
      "Le jour où ça coince : l’adulte donne l’infinitif et l’enfant ne fait plus que chercher l’article. Les deux gestes se travaillent séparément, et il n’y a aucune raison de les tenir ensemble un jour où l’un des deux résiste.",
    ],
    [
      "1. **nous finissions** — l’infinitif, puis sa nature dans l’article et deux sens.",
      "2. **nous voyons** — l’infinitif, puis deux sens très différents : ce que font les yeux, et ce que fait la tête.",
      "3. **elle a compris** — l’infinitif, puis deux sens, dont un qui n’a rien à voir avec la tête.",
      "4. **tu peins** — l’infinitif, puis la nature et deux sens.",
      "5. **ils iront** — l’infinitif, puis trois emplois : se déplacer, se porter, convenir.",
    ],
    [
      "1. **nous finissions** — Infinitif : finir. Nature : verbe. Sens : arriver au bout de quelque chose (finir son assiette) ; se terminer (le film finit bien). Compte aussi : « finir par », qui dit qu’on y arrive après un moment. À signaler : le -iss- du milieu n’existe pas à l’infinitif, il vient de la conjugaison, et c’est lui qui trompe le plus souvent.",
      "2. **nous voyons** — Infinitif : voir. Nature : verbe. Sens : percevoir par les yeux (voir un oiseau) ; comprendre (je vois ce que tu veux dire) ; rencontrer quelqu’un (je l’ai vu hier). Compte : deux sens, et les deux premiers sont ceux qui méritent d’être posés côte à côte.",
      "3. **elle a compris** — Infinitif : comprendre. Nature : verbe. Sens : saisir le sens de quelque chose ; contenir, avoir dedans (le prix comprend le petit déjeuner). Compte : le second sens surprend, et c’est pour cela qu’il est là. L’exemple de l’article suffit à le rendre clair — c’est sa fonction.",
      "4. **tu peins** — Infinitif : peindre. Nature : verbe. Sens : couvrir de peinture (peindre un volet) ; représenter par la peinture (peindre un paysage). Compte aussi : décrire avec des mots, si son dictionnaire le donne. Le piège du jour est ailleurs : « tu peins » ne laisse rien deviner du -dre final, et c’est le « il faut… » qui le fait sortir.",
      "5. **ils iront** — Infinitif : aller. Nature : verbe. Sens : se déplacer vers un endroit (aller au marché) ; se porter (comment vas-tu ?) ; convenir (cette veste te va bien). Compte : que l’infinitif soit trouvé, d’abord. « iront » ne ressemble en rien à « aller », pas même par sa première lettre, et c’est le cas le plus dur de la série — il est en dernier pour cette raison.",
    ],
    "Ce qu’on observe : est-ce qu’il cherche l’infinitif, ou est-ce qu’il ouvre directement au mot conjugué. Ouvrir à « finissions » et ne rien trouver est une étape normale, et elle apprend plus qu’une consigne. Si les cinq infinitifs sont venus sans le « il faut… », la mécanique est en place pour la fiche 7, qui mêle toutes les formes ; sinon, on refait cinq verbes à l’oral, sans dictionnaire, avant d’y revenir.",
  ),

  f(
    "di-mots-05",
    "Le dictionnaire",
    "Recherche 5 · le singulier d’un pluriel irrégulier",
    [
      "La suite de la fiche précédente, sur les noms : le dictionnaire range « un journal », pas « des journaux ». Il écrit le singulier sur l’ardoise avant d’ouvrir, et on vérifie ensuite dans l’article — le pluriel y figure, entre parenthèses ou en abrégé, juste après le mot.",
      "Si l’adulte a relevé des noms au pluriel cette semaine, ils prennent la place de la liste. Un seul critère : que le pluriel ne soit pas un simple -s, sinon il n’y a rien à retrouver.",
      "Le jour où ça coince : on garde les deux premiers, dont le pluriel ressemble encore au singulier, et on laisse les trois derniers pour une autre fois. Ce ne sont pas les mêmes difficultés, et les mélanger un jour de fatigue ne sert personne.",
    ],
    [
      "1. **des journaux** — le singulier, puis la nature et deux sens.",
      "2. **des genoux** — le singulier, la nature, et ce que l’article signale juste après le mot.",
      "3. **des vitraux** — le singulier, la nature, le sens, et deux mots de la même page qui lui ressemblent.",
      "4. **des yeux** — le singulier, l’endroit de l’alphabet où il faut le chercher, la nature et deux sens.",
      "5. **des messieurs** — le singulier, la nature, et ce dont le mot est fait.",
    ],
    [
      "1. **des journaux** — Singulier : un journal. Nature : nom masculin, pluriel en -aux. Sens : la publication imprimée qui paraît chaque jour, et par extension l’émission d’information (le journal de vingt heures) ; le cahier où l’on écrit ce qui s’est passé, jour après jour. Compte : le lien avec « jour », s’il le voit. Il est dans le mot, et le dictionnaire le laisse voir en rangeant les deux presque côte à côte.",
      "2. **des genoux** — Singulier : un genou. Nature : nom masculin, pluriel en -oux. Sens : l’articulation entre la cuisse et la jambe. Compte : l’article est court et il n’y a pas de deuxième sens à trouver — mais le pluriel en -oux est écrit noir sur blanc juste après le mot, et c’est ce qu’on était venu chercher.",
      "3. **des vitraux** — Singulier : un vitrail. Nature : nom masculin, pluriel en -aux. Sens : le panneau fait de morceaux de verre colorés tenus par des baguettes de plomb, comme aux fenêtres des églises. Compte : les voisins de page — vitre, vitrine, vitrier — s’il les remarque. Le radical est le même, et la page le montre mieux qu’une explication.",
      "4. **des yeux** — Singulier : un œil. Nature : nom masculin, et le dictionnaire signale le pluriel parce que rien ne le laissait prévoir. Sens : l’organe de la vue ; le regard, l’attention qu’on porte (garder un œil sur la casserole). Compte : d’abord l’endroit où il l’a cherché. Le o et le e collés se cherchent comme « oe » — trouver la page est ici la moitié du travail.",
      "5. **des messieurs** — Singulier : un monsieur. Nature : nom masculin. Sens : le mot dont on se sert pour s’adresser poliment à un homme, ou pour parler de lui. Compte : les deux morceaux du mot s’il les repère — « mon » et « sieur », c’est-à-dire seigneur. Les deux moitiés changent au pluriel, et c’est le seul nom de la série qui fasse cela.",
    ],
    "Le mot 4 renseigne le plus : ce qu’on observe, c’est ce qu’il fait quand « yeux » ne donne rien à la lettre y — ou seulement un renvoi à « œil », selon les dictionnaires. S’il referme, la difficulté n’est pas le pluriel mais ce qu’on fait d’une recherche qui ne donne rien — et c’est le sujet entier de la fiche 12, qu’on peut avancer si le besoin est là. S’il essaie « oeil » de lui-même, la mécanique est en place pour la fiche 7, qui reprendra ces formes.",
  ),

  f(
    "di-mots-06",
    "Le dictionnaire",
    "Recherche 6 · les abréviations de nature",
    [
      "Tout article commence par la même chose : le mot, puis une abréviation, souvent en italique, qui dit sa nature. n. m. et n. f. pour les noms, adj. pour l’adjectif, v. pour le verbe, adv. pour l’adverbe. On les écrit toutes les cinq sur l’ardoise avant de commencer, en toutes lettres à côté. Si le dictionnaire de la maison écrit la nature en toutes lettres, la séance se fait pareil : c’est lui qui abrège.",
      "Chacun des cinq mots porte une abréviation différente. Il devine laquelle avant d’ouvrir, puis il vérifie. Si l’adulte a relevé des mots de la semaine, ils conviennent — à condition de couvrir les cinq natures, sinon la séance se réduit à chercher cinq noms.",
      "Le jour où ça coince : on fait la devinette à l’oral sur les cinq mots, et l’adulte cherche. La nature d’un mot se travaille sans dictionnaire ; le dictionnaire ne fait que confirmer.",
    ],
    [
      "1. **un tabouret** — l’abréviation de nature, ce qu’elle veut dire en toutes lettres, et le sens.",
      "2. **une écharpe** — l’abréviation, ce qu’elle veut dire, et trois sens.",
      "3. **paisible** — l’abréviation, ce qu’elle veut dire, et deux sens.",
      "4. **grimper** — l’abréviation, ce qu’elle veut dire, et deux sens.",
      "5. **souvent** — l’abréviation, ce qu’elle veut dire, et une question : pourquoi l’article de « souvent » ne dit-il ni masculin ni féminin, ni singulier ni pluriel ?",
    ],
    [
      "1. **un tabouret** — Abréviation : n. m., nom masculin. Sens : le siège sans dossier ni bras, pour une personne. Compte : l’article est bref, et il est là pour cela. Après cinq fiches passées à chercher, un mot qui ne demande rien fait du bien.",
      "2. **une écharpe** — Abréviation : n. f., nom féminin. Sens : la bande de tissu qu’on met autour du cou ; celle, bleu blanc rouge, qu’un maire porte en bandoulière ou à la taille ; le tissu qui soutient un bras blessé (avoir le bras en écharpe). Compte : deux des trois. Le troisième s’explique tout seul une fois les deux premiers posés — c’est toujours une bande de tissu qu’on porte sur soi.",
      "3. **paisible** — Abréviation : adj., adjectif. Sens : calme, tranquille, où il ne se passe rien d’agité (un village paisible) ; qui ne cherche pas la dispute (un chien paisible). Compte aussi : le mot « paix » au fond du mot, s’il le voit. Il est visible, et il explique les deux sens d’un coup.",
      "4. **grimper** — Abréviation : v., verbe — parfois suivie d’une seconde (v. intr., v. i.) qu’on laisse de côté aujourd’hui. Sens : monter en s’aidant des mains et des pieds (grimper à un arbre) ; monter fortement, en parlant d’un nombre ou d’un prix (la température grimpe). Compte : le second sens n’est pas obligatoire aujourd’hui. S’il le trouve, on le lit et on le laisse là — c’est un sens figuré, le sujet de la fiche 9.",
      "5. **souvent** — Abréviation : adv., adverbe. Sens : à plusieurs reprises, à des moments rapprochés. La question : parce que c’est un adverbe, un mot invariable, qui ne change jamais de forme — pas de féminin, pas de pluriel, rien à accorder. Compte : « il ne change jamais », ou toute formulation qui dit la même chose.",
    ],
    "Ce qu’on regarde, c’est le mot 5. Un adverbe est le seul des cinq qui ne change jamais de forme, et la question lui demande de le dire avec ses mots. S’il ne trouve pas, on remet les cinq articles côte à côte : l’adulte lit à voix haute les cinq premières lignes, dans l’ordre, et la différence s’entend sans qu’on ait besoin de la dire.",
  ),

  /* ================================================================== */
  /* PÉRIODE 4 — trois recherches, du 16 mars au 16 avril                */
  /* La leçon « Les mots à plusieurs sens » tombe le 15 mars : les       */
  /* fiches 8 et 9 la suivent, la 7 ne lui doit rien.                    */
  /* ================================================================== */

  f(
    "di-mots-07",
    "Le dictionnaire",
    "Recherche 7 · retrouver la forme sous laquelle le mot est rangé",
    [
      "Les fiches 4 et 5 reviennent ensemble, et trois formes s’ajoutent : le féminin d’un adjectif, le verbe qui se conjugue avec « se », et le pluriel d’un mot composé. Une seule question pour les cinq : sous quelle forme ce mot est-il rangé ?",
      "Il écrit les cinq formes de départ sur l’ardoise et, à côté, ce qu’il ira chercher. On corrige cette colonne avant d’ouvrir le dictionnaire : c’est là qu’est le travail, le reste n’est que vérification. La liste cède la place aux mots de la semaine dès que l’adulte en a noté — un verbe conjugué, un nom au pluriel et un adjectif au féminin suffisent à refaire la fiche.",
      "Le jour où ça coince : on garde les trois premiers et on laisse les deux derniers, qui relèvent d’une autre difficulté.",
    ],
    [
      "1. **nous écrivions** — la forme à chercher, puis la nature et deux sens.",
      "2. **des cailloux** — la forme à chercher, puis la nature, le sens, et ce que l’article signale juste après le mot.",
      "3. **une vieille maison** — la forme à chercher, puis les trois formes que l’article donne en tête, et deux sens.",
      "4. **il s’est aperçu** — la forme à chercher, puis les deux sens que l’article distingue, selon qu’il y a « se » ou non.",
      "5. **des chefs-d’œuvre** — la forme à chercher, la lettre par laquelle on cherche, la nature et le sens.",
    ],
    [
      "1. **nous écrivions** — On cherche : écrire. Nature : verbe. Sens : tracer des lettres, des mots (écrire son nom) ; composer un texte (écrire une histoire) ; envoyer une lettre à quelqu’un. Compte : deux sens sur trois. Le -v- de « écrivions » ne se retrouve pas dans « écrire », et c’est le genre de détail qui fait refermer le dictionnaire trop tôt.",
      "2. **des cailloux** — On cherche : un caillou. Nature : nom masculin, pluriel en -oux. Sens : la petite pierre. Compte : le pluriel signalé entre parenthèses. Sept noms en -ou font leur pluriel en -oux et tous les autres en -ous : le dictionnaire est l’endroit où l’on vérifie, plutôt que la liste qu’on récite.",
      "3. **une vieille maison** — On cherche : vieux. Nature : adjectif. L’article donne trois formes en tête : vieux, vieil devant une voyelle (un vieil arbre), vieille au féminin. Sens : qui existe depuis longtemps (une vieille maison) ; âgé ; usé, qui a beaucoup servi (de vieilles chaussures). Compte : que « vieille » l’ait conduit à « vieux » ; c’est là qu’est le travail. Les formes en tête d’article se lisent ensuite, et certains dictionnaires n’en donnent que deux.",
      "4. **il s’est aperçu** — On cherche : apercevoir. Le dictionnaire range « s’apercevoir » dans le même article, souvent à la fin, précédé de « s’ » ou de « (s’) ». Sens : apercevoir, c’est voir un instant ou de loin (apercevoir le clocher entre les arbres) ; s’apercevoir de quelque chose, c’est se rendre compte, remarquer. Compte : que les deux soient bien dans le même article et qu’ils ne veuillent pas dire la même chose. Ce petit « se » change le sens du verbe, et c’est tout le point du mot 4.",
      "5. **des chefs-d’œuvre** — On cherche : un chef-d’œuvre, à la lettre c, juste après « chef ». Nature : nom masculin, pluriel chefs-d’œuvre, avec le -s sur le premier morceau seulement. Sens : l’œuvre la plus réussie d’un artiste ou d’un artisan ; autrefois, l’ouvrage qu’un ouvrier devait réaliser pour être reçu maître dans son métier. Compte : la lettre de recherche. Un mot composé se cherche à son premier morceau, et le second sens explique le premier — le chef-d’œuvre est d’abord la preuve qu’on sait faire.",
    ],
    "Ce qu’on observe se voit avant l’ouverture du dictionnaire : la colonne des formes à chercher, écrite sur l’ardoise. Si elle est juste, la séance est déjà faite et tout le reste est du plaisir. Si plusieurs formes résistent, on reprend la fiche 4 ou la fiche 5 selon lesquelles — elles se refont à l’identique, et ce n’est pas revenir en arrière.",
  ),

  f(
    "di-mots-08",
    "Le dictionnaire",
    "Recherche 8 · les sens numérotés, et l’exemple qui les distingue",
    [
      "La leçon sur les mots à plusieurs sens vient d’être reprise, et le dictionnaire est l’endroit où elle se voit : les sens y sont numérotés, et chacun porte un exemple en italique. Le travail du jour : recopier pour chaque mot deux sens et leurs deux exemples, en deux colonnes.",
      "Les exemples comptent autant que les définitions, et cela vaut d’être dit à voix haute : c’est l’exemple qui permet de reconnaître le sens quand on retombe sur le mot ailleurs. Une définition seule se relit trois fois ; un exemple se retient.",
      "Si l’adulte a relevé des mots de la semaine, ils remplacent la liste — un seul critère, qu’ils portent plusieurs sens, et cela se vérifie d’un coup d’œil au nombre de numéros dans l’article. Le jour où ça coince : deux mots au lieu de cinq, et on lit les articles à voix haute, à deux.",
    ],
    [
      "1. **une glace** — deux sens numérotés avec leur exemple, trois si les trois sont là.",
      "2. **un bouchon** — deux sens et leurs exemples, dont un qui n’a rien à voir avec une bouteille.",
      "3. **une opération** — deux sens et leurs exemples, l’un de l’école, l’autre de l’hôpital.",
      "4. **une carte** — trois sens et leurs exemples. L’article en donne davantage.",
      "5. **la mine** — trois sens et leurs exemples. L’un des trois n’a aucun rapport avec les deux autres.",
    ],
    [
      "1. **une glace** — Nature : nom féminin. Sens : l’eau devenue dure par le froid (la glace du bassin) ; le dessert sucré qu’on mange gelé ; la plaque de verre où l’on se regarde, autrement dit le miroir (se coiffer devant la glace). Compte : les trois, ou deux avec leurs exemples. Le troisième vient de la ressemblance entre un miroir et une surface gelée, et les dictionnaires ne le disent pas toujours — on peut le raconter.",
      "2. **un bouchon** — Nature : nom masculin. Sens : ce qui ferme le goulot d’une bouteille ; l’encombrement de voitures qui n’avancent plus (un bouchon sur l’autoroute) ; le flotteur d’une ligne de pêche. Compte : les deux premiers, et le lien entre eux s’il le fait — dans les deux cas quelque chose empêche de passer, et c’est pour cette raison que le mot est le même.",
      "3. **une opération** — Nature : nom féminin. Sens : le calcul qu’on effectue (l’addition est une opération) ; l’intervention d’un chirurgien ; l’ensemble d’actions menées pour arriver à un but (une opération de secours). Compte : deux sur trois. Le premier et le deuxième se rejoignent de loin — dans les deux cas on agit selon une suite d’étapes précises.",
      "4. **une carte** — Nature : nom féminin. Sens : le dessin d’une région ou d’un pays vu de dessus (une carte de France) ; le carton rectangulaire d’un jeu ; le document qui prouve qui l’on est (une carte d’identité) ; la liste des plats d’un restaurant. Compte : trois sur quatre. Ce qui les relie est mince — un rectangle de papier ou de carton — et il n’y a pas à le forcer.",
      "5. **la mine** — Nature : nom féminin. Sens : l’air du visage (avoir bonne mine) ; le bâtonnet gris à l’intérieur d’un crayon ; le lieu, souvent souterrain, d’où l’on tire le charbon ou le minerai. Compte : les trois, et le constat que l’air du visage n’a rien à voir avec les deux autres. Ceux-là sont un seul et même mot : la mine du crayon est faite d’un minerai, et elle en porte le nom. Beaucoup de dictionnaires rangent l’air du visage dans un article à part, numéroté : si c’est le cas du vôtre, le dire — c’est le sujet de la fiche 16.",
    ],
    "Ce qu’on observe : est-ce qu’il recopie l’exemple, ou seulement la définition. L’exemple est ce qui reste en mémoire, et c’est lui qui servira quand le mot reviendra dans un texte. S’il saute les exemples malgré la consigne, on inverse la fois suivante : on recopie les exemples seuls, sans les définitions, et on regarde si les sens se devinent quand même. En général, oui.",
  ),

  f(
    "di-mots-09",
    "Le dictionnaire",
    "Recherche 9 · le sens propre et le sens figuré",
    [
      "La leçon distingue le sens propre — celui qu’on peut montrer du doigt — et le sens figuré, qui s’en sert comme d’une image. Le dictionnaire range les deux dans le même article, en signalant souvent le second par « au figuré » ou « fig. ». Deux colonnes sur le cahier : à gauche ce qui se montre, à droite ce qui s’imagine, et une phrase d’exemple dans chacune.",
      "Si l’adulte a relevé des mots de la semaine, ils prennent la place de ceux-ci — on les reconnaît à l’abréviation « fig. » quelque part dans l’article.",
      "Le jour où ça coince : on garde les deux premiers, où le lien entre le propre et le figuré se voit le mieux, et on s’arrête là.",
    ],
    [
      "1. **dévorer** — le sens propre, le sens figuré, un exemple pour chacun.",
      "2. **une épine** — le sens propre, le sens figuré, un exemple pour chacun.",
      "3. **une clé** — le sens propre, puis deux emplois où le mot n’ouvre plus aucune porte.",
      "4. **une racine** — le sens propre, le sens figuré, un exemple pour chacun.",
      "5. **un sommet** — le sens propre, et deux emplois où il n’y a pas de montagne.",
    ],
    [
      "1. **dévorer** — Nature : verbe. Propre : manger avidement, en déchirant (le renard dévore sa proie). Figuré : lire très vite et sans s’arrêter (dévorer un livre en deux soirs). Compte : la seconde phrase, formulée comme il veut. Le lien est visible — dans les deux cas on avale vite —, et c’est le figuré le plus abordable de la fiche.",
      "2. **une épine** — Nature : nom féminin. Propre : la petite pointe piquante qui pousse sur la tige de certaines plantes (les épines d’un rosier). Figuré : ce qui gêne, ce qui ennuie, dans l’expression « tirer une épine du pied ». Compte : l’expression suffit ; il n’a pas à produire une définition du figuré. À signaler si l’occasion vient : l’épine dorsale, la colonne vertébrale, est un troisième emploi — la rangée de pointes qu’on sent sous la peau du dos.",
      "3. **une clé** — Nature : nom féminin, et le dictionnaire signale qu’on l’écrit aussi « clef ». Propre : la petite pièce de métal qui ouvre une serrure. Figuré : ce qui permet de comprendre (la clé d’une énigme, un mot-clé). Autre emploi : en musique, le signe placé au début de la portée. Compte : le figuré, et le constat que le troisième emploi n’est ni propre ni figuré mais spécialisé. La leçon l’appelle le mot spécialisé, et la fiche en croise un autre au mot 5.",
      "4. **une racine** — Nature : nom féminin. Propre : la partie de la plante qui s’enfonce dans la terre et la nourrit (les racines d’un chêne). Figuré : l’origine, ce d’où vient une chose (avoir ses racines dans un village, s’attaquer à la racine du problème). Compte : le figuré, avec son exemple, formulé comme il veut. Le lien se voit bien — dans les deux cas, c’est ce d’où la chose part et ce qui la tient. Si l’article donne d’autres emplois, comme la racine carrée en mathématiques, on les lit sans s’y arrêter.",
      "5. **un sommet** — Nature : nom masculin. Propre : le point le plus haut d’une montagne. Figuré : le degré le plus élevé de quelque chose ; la rencontre de chefs d’État ou de gouvernement (un sommet européen). Emploi spécialisé : en géométrie, le point où se rejoignent deux côtés d’une figure. Compte : au moins un des deux figurés. Celui de la réunion est le plus retors — il vient de l’idée que ces personnes-là sont au sommet, et rien dans le mot ne le dit.",
    ],
    "Le mot 5 est celui qui renseigne : la leçon lui a déjà montré le sommet d’une montagne et celui d’une figure géométrique. Ce qu’on observe, c’est s’il reconnaît dans l’article ce que la leçon a dit — retrouver dans le dictionnaire ce qu’on a appris ailleurs, c’est relier deux outils, et cela vaut plus que toute la fiche. S’il ne fait pas le lien, on lui dessine le triangle et la montagne côte à côte sur l’ardoise, et on passe à autre chose.",
  ),

  /* ================================================================== */
  /* PÉRIODE 5 — quatre recherches, du 21 mai au 28 juin, et la 14, qui  */
  /* ne tombe plus dans l’année.                                         */
  /* L’article ne se cherche plus, il se lit : la famille, l’origine,    */
  /* ce qui manque, et le sens qui convient.                            */
  /* ================================================================== */

  f(
    "di-mots-10",
    "Le dictionnaire",
    "Recherche 10 · la famille rassemblée sur la page",
    [
      "Le rituel de vocabulaire demande de trouver des mots de la même famille ; celui-ci demande de les voir. Comme le dictionnaire range par ordre alphabétique, une famille se retrouve souvent groupée sur quelques centimètres de colonne — souvent, pas toujours, et les mots 3 et 5 le montrent. Pour chaque mot : sa nature, un sens, et deux ou trois mots de la même famille lus dans le dictionnaire.",
      "La consigne est de les lire, pas de les deviner — c’est toute la différence avec le rituel de vocabulaire, et il vaut mieux le dire au début. Les mots de la semaine remplacent la liste si l’adulte en a noté, à condition qu’ils aient une famille visible.",
      "Le jour où ça coince : on garde le premier mot et on lit la colonne entière autour de lui, à voix haute, sans rien écrire. C’est une séance à part entière.",
    ],
    [
      "1. **chanter** — la nature, un sens, et deux mots de la même famille sur la même page.",
      "2. **la terre** — la nature, deux sens, et trois mots de la même famille.",
      "3. **porter** — la nature, un sens, et trois mots de la même famille, dont au moins un qui n’est pas sur la même page.",
      "4. **le jour** — la nature, un sens, et trois mots de la même famille. L’un des trois surprend.",
      "5. **la main** — la nature, un sens, et deux mots de la même famille qui ne s’écrivent pas avec les mêmes lettres.",
    ],
    [
      "1. **chanter** — Nature : verbe. Sens : produire des sons musicaux avec la voix. Famille, sur la page : un chant, une chanson, un chanteur, chantonner. Compte : deux d’entre eux. À signaler s’il le relève tout seul : « un chantier » est là aussi, juste à côté, et il n’appartient pas à la famille — il vient d’ailleurs. La page rapproche, elle ne prouve rien.",
      "2. **la terre** — Nature : nom féminin. Sens : la matière dans laquelle poussent les plantes ; la planète où nous vivons, et elle prend alors une majuscule. Famille : un terrain, une terrasse, un terrier, souterrain, enterrer, un territoire. Compte : trois sur six. La page en rassemble quatre à quelques lignes d’écart — terrain, terrasse, terrier, territoire —, les deux autres sont aux lettres s et e, et c’est le meilleur exemple de l’année de ce qu’un dictionnaire montre sans le dire. À signaler s’il les prend : « terreur » et « terrible » sont sur la même page et n’en sont pas — la leçon sur les familles de mots l’a déjà dit pour « terrible ».",
      "3. **porter** — Nature : verbe. Sens : soutenir quelque chose et le déplacer avec soi. Famille : sur la page, un porteur, portable ; ailleurs, un support, apporter, emporter, transporter. Compte : trois, dont au moins un pris hors de la page. Les quatre derniers ne sont pas sur la page de « porter » — ils sont aux lettres s, a, e et t, chacun rangé à son préfixe. S’il propose « une porte » ou « un portail », tout proches : on les range d’habitude dans une autre famille, celle de la porte, et on regarde ensemble si leur sens parle de porter. Ils se ressemblent, mais viennent de deux mots latins différents, donc l’école les range dans deux familles. C’est le point du mot 3 : une famille se disperse dès qu’on lui ajoute des préfixes.",
      "4. **le jour** — Nature : nom masculin. Sens : le temps entre le lever et le coucher du soleil, ou les vingt-quatre heures entières. Famille : une journée, un journal, journalier, un séjour, ajourner, aujourd’hui. Compte : trois. Celui qui surprend est « aujourd’hui », qui porte « jour » en son milieu et que personne ne pense à y ranger. « Journal », vu à la fiche 5, revient ici par une autre porte.",
      "5. **la main** — Nature : nom féminin. Sens : la partie du corps au bout du bras, avec ses cinq doigts. Famille : manuel, manier, un manuscrit, une manœuvre, maintenir. Compte : deux. La difficulté est réelle et assumée : le radical s’écrit « main » dans un cas et « man- » dans l’autre, donc la page ne les met pas ensemble. C’est le mot le plus exigeant de la fiche, et il est en dernier pour cette raison.",
    ],
    "Ce qu’on regarde, c’est le mot 3 : comprend-il que la famille se disperse dans le dictionnaire dès qu’un préfixe s’ajoute ? Chercher « emporter » à la lettre e paraît aller de soi une fois dit, et pas du tout avant. S’il cherche « emporter » au voisinage de « porter », on le laisse chercher un moment, puis on pose la question à voix haute : par quelle lettre commence « emporter » ? La trouver lui-même installe l’idée mieux que de l’entendre, mais pas au prix d’une recherche qui s’éternise.",
  ),

  f(
    "di-mots-11",
    "Le dictionnaire",
    "Recherche 11 · l’origine du mot, quand le dictionnaire la donne",
    [
      "Certains dictionnaires, pas tous, indiquent d’où vient le mot, entre crochets ou en petits caractères tout à la fin de l’article. Le travail du jour : pour chaque mot, la nature, un sens, et cette origine, recopiée telle quelle.",
      "Il faut vérifier avant la séance, sur un seul mot, que le dictionnaire de la maison donne bien ces origines. S’il n’en donne pas, la fiche se fait autrement : l’adulte lit l’origine du corrigé comme on raconte une histoire, et l’enfant ne cherche que la nature et le sens.",
      "Les mots de la semaine peuvent remplacer ceux-ci, mais tous n’ont pas une origine racontable : c’est la fiche où la liste toute prête sert le plus. Le jour où ça coince : trois mots, en gardant le vaccin, dont l’origine fait le plus d’effet, et le dernier, qui parle de l’objet qu’il a entre les mains.",
    ],
    [
      "1. **un bureau** — la nature, un sens, et ce que le mot désignait avant de désigner un meuble.",
      "2. **un salaire** — la nature, un sens, et le produit dont le mot vient.",
      "3. **un vaccin** — la nature, un sens, et l’animal qui se cache dans le mot.",
      "4. **une école** — la nature, un sens, et ce que le mot voulait dire autrefois.",
      "5. **un dictionnaire** — la nature, un sens, et l’origine du nom de l’objet qu’il tient dans les mains.",
    ],
    [
      "1. **un bureau** — Nature : nom masculin. Sens : la table où l’on écrit ; la pièce où l’on travaille ; le groupe de personnes qui dirige une association. Origine : de « bure », une étoffe de laine grossière dont on recouvrait la table de travail. Le meuble a pris le nom de son tapis, puis la pièce a pris le nom du meuble. Compte : le mot « bure », ou simplement l’idée du tissu.",
      "2. **un salaire** — Nature : nom masculin. Sens : l’argent que reçoit régulièrement une personne pour son travail. Origine : du latin « salarium », tiré de « sal », le sel — on raconte que les soldats romains recevaient du sel, ou de quoi en acheter, en paiement. Compte : le sel. À signaler s’il le demande : salade, saler et salaire descendent tous du même mot latin.",
      "3. **un vaccin** — Nature : nom masculin. Sens : le produit qu’on reçoit pour être protégé d’une maladie. Origine : du latin « vacca », la vache — le premier vaccin a été mis au point à partir d’une maladie bénigne des vaches. Compte : la vache. C’est celle des cinq origines qui fait le plus d’effet, et elle est exacte.",
      "4. **une école** — Nature : nom féminin. Sens : le lieu où l’on apprend ; l’ensemble des élèves et des maîtres. Origine : du latin « schola », emprunté au grec, qui désignait d’abord le temps libre, celui qu’on n’emploie pas à travailler, puis le temps qu’on passe à étudier. Compte : l’idée du temps libre si le dictionnaire va jusque-là ; beaucoup s’arrêtent au mot latin, et la raconter suffit alors.",
      "5. **un dictionnaire** — Nature : nom masculin. Sens : le livre qui range les mots dans l’ordre alphabétique et donne leur nature et leurs sens. Origine : du latin « dictio », l’action de dire, puis le mot lui-même. Un dictionnaire est littéralement un recueil de mots. Compte : « dire », ou « le mot ». C’est le seul article de l’année qui parle de l’objet qu’il a entre les mains, et cela mérite qu’on s’arrête une minute dessus.",
    ],
    "Cette fiche ne se mesure à rien : son résultat est une histoire retenue ou non, et cela ne se voit pas le jour même. Ce qu’on peut observer en revanche, c’est s’il descend l’article jusqu’au bout — l’origine est tout en bas, en petits caractères, après tous les sens, et on s’arrête volontiers avant. Si c’est le cas, on lui montre l’endroit une fois, avec le doigt, et cela suffit généralement.",
  ),

  f(
    "di-mots-12",
    "Le dictionnaire",
    "Recherche 12 · un mot qui n’y est pas",
    [
      "Une recherche qui ne donne rien n’est pas une recherche ratée : c’est un renseignement. Le travail du jour : pour chaque mot, chercher honnêtement, puis écrire ce qu’on a trouvé — l’article, ou bien la raison pour laquelle il n’y en a pas. On le lui annonce avant d’ouvrir : aujourd’hui, plusieurs mots ne sont pas dans le dictionnaire, et c’est voulu. Une séance qui cacherait son piège ferait l’inverse de ce qu’elle cherche.",
      "Quatre raisons possibles, et elles sont toutes dans la fiche : c’est un nom propre, c’est un mot inventé, c’est une abréviation familière, ou c’est un mot fabriqué qu’on est censé savoir démonter. Le cinquième cas est d’une autre sorte — le mot y est, mais pas le sens.",
      "Les mots de la semaine conviennent très bien ici, mieux même que la liste : un mot entendu dans la rue ou lu sur un écran a de bonnes chances de manquer. Le jour où ça coince : on garde les deux premiers, qui sont les plus francs, et on en reste là.",
    ],
    [
      "1. **Marseille** — chercher à la lettre m, et dire ce qu’on trouve à la place.",
      "2. **un frigolier** — chercher entre « frigo » et « frileux », et dire ce qu’on trouve.",
      "3. **un ordi** — chercher, et dire ce que l’article renvoie, ou ne renvoie pas.",
      "4. **anticonstitutionnellement** — chercher, puis chercher le mot qu’il faut chercher à la place.",
      "5. **grave**, au sens de « très, carrément », comme dans « Tu viens ? — Grave ! » — chercher l’article, lire tous les sens, et dire si celui-là y est.",
    ],
    [
      "1. **Marseille** — Ce qu’on trouve : rien, dans la partie « mots ». Les noms propres — villes, pays, personnes — n’y sont pas, parce que ce ne sont pas des mots de la langue mais des noms donnés à une seule chose. Beaucoup de dictionnaires ont une seconde partie, à la fin, réservée aux noms propres : si le vôtre en a une, c’est le moment de la lui montrer. Compte : « c’est un nom propre », ou toute formulation qui dit la même chose.",
      "2. **un frigolier** — Ce qu’on trouve : rien, et il n’y a rien à trouver. Ce mot n’existe pas, il a été fabriqué pour cette fiche. Compte : qu’il conclue que le mot n’existe pas, ou pas dans ce dictionnaire, plutôt que de conclure qu’il a mal cherché. C’est la distinction la plus utile de la séance, et il faut la lui dire franchement une fois la recherche faite.",
      "3. **un ordi** — Ce qu’on trouve : cela dépend du dictionnaire. Certains le donnent, avec la marque « familier » et un renvoi à « ordinateur » ; d’autres ne le donnent pas. Les deux réponses sont bonnes, et il vaut mieux le lui annoncer avant qu’il cherche. Compte : la marque « fam. » si elle est là, ou le constat que seul le mot entier est rangé.",
      "4. **anticonstitutionnellement** — Ce qu’on trouve : presque sûrement rien. Le mot est fabriqué avec des morceaux qu’on sait démonter : anti-, constitutionnel, -ment — et « constitutionnel » vient lui-même de « constitution ». On cherche donc « constitution », et on remonte. Compte : que le mot à chercher soit « constitution », ou « constitutionnel » s’il le trouve. C’est le geste de la fiche 10, appliqué à un mot trop rare pour avoir son propre article.",
      "5. **grave** — Ce qu’on trouve : l’article existe, et il donne « sérieux, important » (une maladie grave), « bas » pour un son (une voix grave), et le nom de l’accent qui penche vers la gauche. Le sens de « très, carrément », entendu entre amis, n’y est pas — ou seulement dans les dictionnaires les plus récents, comme adverbe et avec la marque « familier ». Compte : la conclusion, qui est neuve et qui vaut la fiche entière. Un mot peut être dans le dictionnaire sans que le sens qu’on cherche y soit.",
    ],
    "Ce qu’on regarde ici n’est pas une trouvaille mais une réaction : que fait-il quand la page ne donne rien. S’il referme le dictionnaire, s’il recommence trois fois la même recherche, s’il dit qu’il s’est trompé — c’est exactement ce qu’on est venu voir, et c’est ce qui se travaille. La phrase à répéter, tranquillement, autant de fois qu’il le faudra : chercher et ne pas trouver, c’est avoir trouvé quelque chose.",
  ),

  f(
    "di-mots-13",
    "Le dictionnaire",
    "Recherche 13 · choisir le sens qui convient à la phrase",
    [
      "C’est l’usage réel du dictionnaire : on ne cherche pas un mot, on cherche le sens d’un mot dans une phrase précise. Cinq phrases, cinq mots à chercher, et la même question pour chacun — lequel des sens numérotés convient ici ?",
      "La méthode tient en deux gestes : lire tous les sens avant de choisir, puis relire la phrase en remplaçant le mot par la définition retenue. Si la phrase tient debout, c’est le bon sens ; si elle boite, c’en est un autre.",
      "Les phrases de la semaine valent mieux que celles-ci : une phrase d’un livre en cours, avec un mot qui a fait buter, est exactement ce que la fiche imite. Le jour où ça coince : deux phrases, et l’adulte lit les sens à voix haute pendant que l’enfant choisit.",
    ],
    [
      "1. « La rivière a creusé son **lit** au fond de la vallée. » — le sens qui convient, et pourquoi le premier de l’article ne convient pas.",
      "2. « Il a laissé un **blanc** au milieu de sa page. » — la nature du mot dans cette phrase, puis le sens qui convient.",
      "3. « Le chemin devient **accidenté** après le pont. » — le sens qui convient, et celui auquel on pense d’abord.",
      "4. « La **souris** ne marche plus : il faut changer sa pile. » — la nature du mot, puis le sens qui convient, qui n’est pas celui que l’article donne en premier.",
      "5. « Pour ranger, il a le **sens** de l’ordre. » — le sens du mot « sens » qui convient, parmi tous ceux que l’article donne.",
    ],
    [
      "1. **lit** — Le sens qui convient : le creux dans lequel coule un cours d’eau. Le premier sens de l’article est le meuble où l’on dort, et il ne convient pas — une rivière ne creuse pas un meuble. Compte : la justification, quelle qu’en soit la formulation. Le lien entre les deux existe pourtant : dans les deux cas, c’est le creux où quelque chose se couche.",
      "2. **blanc** — Nature dans cette phrase : nom masculin, et non adjectif. Le sens qui convient : l’espace laissé vide dans un texte. Compte : la nature avant le sens. C’est la phrase qui la donne — « un blanc », avec un déterminant devant, ne peut être qu’un nom, et l’article range souvent les deux natures dans deux parties séparées.",
      "3. **accidenté** — Le sens qui convient : qui présente des creux et des bosses, en parlant d’un terrain. Celui auquel on pense d’abord : qui a subi un accident (une voiture accidentée). Compte : les deux, et l’ordre dans lequel il les a envisagés. Prendre le mauvais, puis se reprendre en relisant la phrase, est exactement le geste qu’on installe aujourd’hui.",
      "4. **souris** — Nature : nom féminin. Le sens qui convient : le petit appareil qu’on déplace à la main pour faire bouger le curseur, la petite flèche, sur l’écran d’un ordinateur. Le sens que l’article donne en premier : le petit rongeur au museau pointu et à longue queue — et il ne convient pas, une souris qui court n’a pas de pile. Compte : qu’il soit allé plus loin que le premier sens de l’article. Le lien entre les deux vaut d’être dit : l’appareil est petit, arrondi, et son fil ressemblait à une queue, d’où son nom. S’il connaissait déjà les deux sens, la séance garde tout son intérêt : le travail du jour est de retrouver le bon dans l’article, pas de l’apprendre.",
      "5. **sens** — Le sens qui convient : une aptitude à sentir ou à faire une chose juste, presque sans y penser (avoir le sens de l’orientation, le sens de l’humour). Les autres que l’article donne le plus souvent : chacune des cinq façons de percevoir le monde ; la signification d’un mot ou d’une phrase ; la direction (rouler en sens interdit). Compte : le bon choix, et la remarque qu’on vient d’employer le mot « sens » de deux façons différentes en une seule séance — celui de la phrase, et celui qu’il relève depuis septembre.",
    ],
    "Ce qu’on observe, c’est le geste de vérification : relit-il la phrase en remplaçant le mot par la définition ? C’est le seul outil qui protège d’un mauvais choix, et il ne coûte rien. S’il choisit sans vérifier et tombe juste, on lui demande de vérifier quand même — un réflexe s’installe le jour où ça marche, pas le jour où ça rate.",
  ),

  f(
    "di-mots-14",
    "Le dictionnaire",
    "Recherche 14 · cinq mots de la semaine, et personne pour dire lesquels",
    [
      "Fiche de réserve, à ouvrir après les treize autres, et la seule où la consigne d’origine s’applique telle quelle : cinq mots rencontrés cette semaine, choisis par lui. Un livre, une notice, une conversation, un panneau — la seule règle est qu’il les ait croisés sans les comprendre entièrement.",
      "C’est lui qui décide ce qu’il relève pour chacun : la nature, un sens, trois sens, la famille, l’origine. Treize fiches ont montré ce qu’un article contient ; celle-ci demande de choisir, et le choix se justifie en une phrase.",
      "La liste ci-dessous ne sert que si rien n’a été noté de la semaine — ce sont les cinq articles les plus longs de l’année, et ils demandent de trier. Le jour où ça coince : deux mots au lieu de cinq, et l’adulte choisit avec lui ce qu’il vaut la peine de relever.",
    ],
    [
      "1. **une pièce** — quatre sens au moins dans l’article. En relever trois, et dire lesquels se ressemblent.",
      "2. **relever** — le verbe de la consigne du rituel. Trois sens, dont celui qu’on emploie ici depuis septembre.",
      "3. **un ressort** — trois sens, dont deux qu’on entend rarement dans une cour de récréation.",
      "4. **net** — deux natures, et trois sens. Le plus dense de la fiche.",
      "5. **passer** — l’article le plus long que la série ait rencontré. En tirer trois sens, et laisser tout le reste.",
    ],
    [
      "1. **une pièce** — Nature : nom féminin. Sens : la salle d’une maison (un appartement de trois pièces) ; la monnaie de métal ; l’élément d’un ensemble (une pièce de puzzle, une pièce de moteur) ; le texte écrit pour être joué au théâtre ; le document qui sert de preuve (une pièce d’identité). Ceux qui se ressemblent : la salle et l’élément d’un ensemble — dans les deux cas, une partie d’un tout. Compte : trois sens, et un rapprochement, même différent de celui-là, s’il sait le défendre.",
      "2. **relever** — Nature : verbe. Sens : remettre debout ce qui était tombé (relever une chaise) ; noter par écrit ce qu’on a observé (relever une adresse, relever la nature d’un mot) ; rendre un plat plus goûteux (relever une sauce). Compte : le deuxième, qui est celui de la consigne du rituel depuis le premier jour. Le lui faire trouver vaut mieux que le lui dire : on relit ensemble la consigne du créneau, et il tombe dessus.",
      "3. **un ressort** — Nature : nom masculin. Sens : la pièce de métal enroulée qui reprend sa forme dès qu’on la lâche ; l’énergie, la force de réagir (avoir du ressort) ; le domaine dont quelqu’un a la charge (cela n’est pas de mon ressort). Compte : deux sur trois, et le lien entre les deux premiers s’il le fait — ce qui a du ressort revient tout seul à sa place. Certains dictionnaires rangent le troisième dans un article à part ; si c’est le cas du vôtre, on le remarque sans s’y arrêter.",
      "4. **net** — Natures : adjectif, nette au féminin, et adverbe. Comme adjectif : propre, sans tache ; clair, précis, qu’on distingue bien (une photo nette) ; ce qui reste une fois les déductions faites (le poids net, par opposition au poids brut). Comme adverbe : d’un seul coup (s’arrêter net). Compte : les deux natures repérées. Le troisième sens est technique et personne n’attend qu’il le trouve seul ; s’il le lit, on l’explique avec un paquet de gâteaux dans la main.",
      "5. **passer** — Nature : verbe. Sens, parmi une vingtaine : aller d’un endroit à un autre en traversant (passer par la cuisine) ; s’écouler, pour le temps (l’heure passe vite) ; donner quelque chose à quelqu’un (passe-moi le sel) ; faire traverser un tamis (passer la soupe) ; ne plus être là (la douleur est passée). Compte : trois sens, quels qu’ils soient. Le travail du jour n’est pas de tout lire mais de s’arrêter volontairement, et c’est la seule fois de l’année où on le demande.",
    ],
    "La question de cette dernière séance n’est pas ce qu’il a trouvé, mais ce qu’il a laissé. Un article de vingt sens se lit en entier ou se coupe, et couper demande de décider que ce qu’on a est suffisant. C’est la chose la plus difficile de toute la série ; si elle est venue une fois, même à moitié, c’est beaucoup. Si elle n’est pas venue, rien n’est perdu : c’est un travail d’une autre nature, qui ne se fait pas dans un dictionnaire et qui a tout son temps.",
  ),

  /* ================================================================== */
  /* RÉSERVE — deux recherches qui ne tombent pas dans l’année            */
  /* Elles remplacent une fiche qui ne prend pas, ou prolongent une      */
  /* année qui déborde. Ce sont les plus exigeantes des seize.           */
  /* ================================================================== */

  f(
    "di-mots-15",
    "Le dictionnaire",
    "Recherche 15 · chercher un mot dont on ne sait pas écrire le début",
    [
      "Fiche de réserve. Elle traite la difficulté qui fait le plus souvent refermer un dictionnaire : on a entendu le mot, on ne sait pas par quelles lettres il commence, et la recherche s’arrête avant d’avoir commencé.",
      "La méthode : dire le mot à voix haute, écrire sur l’ardoise tous les débuts possibles — a- ou ha-, f- ou ph-, i- ou y- —, puis les essayer dans l’ordre. Un début essayé et abandonné n’est pas une erreur, c’est une piste écartée.",
      "Les mots de la semaine remplacent la liste s’ils posent le même problème, ce qui est fréquent avec les mots entendus et jamais lus. Le jour où ça coince : l’adulte écrit les deux débuts possibles et l’enfant choisit seulement lequel essayer en premier. Le choix est la moitié du travail.",
    ],
    [
      "1. **une horloge** — les débuts possibles, celui qui marche, puis la nature et le sens.",
      "2. **un haricot** — les débuts possibles, celui qui marche, puis la nature et le sens.",
      "3. **une pharmacie** — les débuts possibles, celui qui marche, puis la nature et deux sens.",
      "4. **un rythme** — les débuts possibles, celui qui marche, puis la nature et deux sens.",
      "5. **un œuf** — la lettre par laquelle on cherche, puis la nature, le sens, et ce que l’article dit du pluriel.",
    ],
    [
      "1. **une horloge** — Débuts possibles : or-, hor-. Celui qui marche : hor-, avec un h qu’on n’entend pas. Nature : nom féminin. Sens : le grand appareil fixe qui indique l’heure. Compte : le h. La famille aide et vaut d’être montrée — un horloger, une horlogerie. « Heure » se met à part : ce n’est pas un mot de la même famille au sens de l’école, mais un cousin par l’histoire du mot — les deux remontent au latin « hora », l’heure —, et elle a gardé le même h muet.",
      "2. **un haricot** — Débuts possibles : ar-, har-. Celui qui marche : har-. Nature : nom masculin. Sens : la plante potagère, et la graine qu’on mange, verte dans sa gousse ou sèche. Compte : le h, de nouveau, mais un h d’une autre sorte — on dit « le haricot » et non « l’haricot », et le dictionnaire le signale souvent par une apostrophe ou un astérisque devant le mot. S’il le remarque, on le lit ; sinon on n’en fait rien.",
      "3. **une pharmacie** — Débuts possibles : fa-, pha-. Celui qui marche : pha-. Nature : nom féminin. Sens : le magasin où l’on vend les médicaments ; la petite armoire d’une maison où on les range. Compte : le ph. Il vient du grec, et il se retrouve dans une série de mots qu’il connaît déjà : une photo, un téléphone, un phare, une phrase.",
      "4. **un rythme** — Débuts possibles : ri-, ry-. Celui qui marche : ry-, avec en prime un th au milieu. Nature : nom masculin. Sens : le retour régulier des temps forts, en musique ou en poésie ; la vitesse régulière à laquelle une chose se fait (le rythme de la marche). Compte : le y. Même origine grecque que le ph de « pharmacie », et cela vaut d’être dit deux fois dans la même séance.",
      "5. **un œuf** — On cherche : à la lettre o, comme si le o et le e étaient deux lettres séparées, donc dans les pages de « oe ». Nature : nom masculin. Sens : ce que pondent les oiseaux et bien d’autres animaux, et d’où sort le petit ; l’objet qui en a la forme (un œuf en chocolat). Pluriel : des œufs, où l’on n’entend plus ni le f ni le son du singulier ; certains articles le signalent, et sinon l’adulte le dit à voix haute. Compte : la lettre de recherche. Il l’a déjà rencontrée à la fiche 5 avec « œil » : si le souvenir revient tout seul, la mécanique tient.",
    ],
    "Ce qu’on observe, c’est ce qui se passe après le premier essai qui ne donne rien. Entre refermer et essayer l’autre début, il n’y a pas une compétence mais une habitude, et elle s’installe surtout en voyant l’adulte le faire. Le plus utile de cette fiche est peut-être que l’adulte cherche un mot devant lui, se trompe de début, et continue sans rien commenter.",
  ),

  f(
    "di-mots-16",
    "Le dictionnaire",
    "Recherche 16 · deux articles pour un même mot",
    [
      "Fiche de réserve, et la plus exigeante de la série. Certains mots s’écrivent pareil sans être le même mot, et le dictionnaire le dit à sa manière : deux articles séparés, numérotés 1 et 2, l’un après l’autre.",
      "Pour chaque mot : combien d’articles, ce qui les distingue — le genre, la nature, ou rien du tout —, et un sens tiré de chacun. Ce n’est pas la même chose qu’un mot à plusieurs sens, et c’est toute la difficulté : un mot à plusieurs sens n’a qu’un seul article. Le nombre d’articles pour voler, tour, mousse et sol change d’un dictionnaire à l’autre : les nombres du corrigé sont un exemple, c’est le dictionnaire de la maison qui a raison, et l’adulte peut y jeter un œil avant la séance.",
      "Les mots de la semaine conviennent s’ils posent la même question, mais ils sont rares et difficiles à repérer d’avance : c’est la fiche où la liste sert le plus. Le jour où ça coince : on garde les deux premiers, dont les deux sens sont les plus éloignés l’un de l’autre, et on s’arrête.",
    ],
    [
      "1. **voler** — combien d’articles, ce qui les distingue, un sens dans chacun.",
      "2. **livre** — combien d’articles, ce qui les distingue, un sens dans chacun.",
      "3. **tour** — combien d’articles, ce qui les distingue, et deux sens du masculin.",
      "4. **mousse** — combien d’articles, ce qui les distingue, un sens dans chacun.",
      "5. **sol** — combien d’articles, et ce qui les distingue, qui n’est ni le genre ni la nature.",
    ],
    [
      "1. **voler** — Deux articles le plus souvent, tous deux des verbes, et rien dans la forme ne les sépare — sinon, dans certains dictionnaires, une abréviation de plus (v. intr. pour le premier, v. tr. pour le second) qu’il n’a pas à lire. Si le vôtre n’en fait qu’un, avec des sens numérotés, c’est la réponse, et elle est juste. Le premier : se déplacer dans l’air (l’hirondelle vole bas). Le second : prendre ce qui appartient à quelqu’un d’autre. Compte : les deux articles repérés. Une origine commune les relie de loin — le second vient du vol du faucon qui fond sur sa proie —, mais les dictionnaires scolaires le disent rarement, et il n’y a pas à le chercher.",
      "2. **livre** — Deux articles, distingués par le genre. Un livre, nom masculin : l’ensemble des pages reliées qu’on lit. Une livre, nom féminin : une ancienne unité de masse, qu’on emploie encore pour dire cinq cents grammes (une livre de cerises), et la monnaie de plusieurs pays, dont le Royaume-Uni. Compte : le genre comme critère. C’est le plus lisible des cinq, et il donne la méthode pour les suivants — regarder l’abréviation avant de lire la définition.",
      "3. **tour** — Deux articles au moins, distingués par le genre. Une tour, nom féminin : la construction plus haute que large ; la pièce du jeu d’échecs. Un tour, nom masculin : le mouvement circulaire ; la promenade (faire un tour dehors) ; le moment où c’est à quelqu’un d’agir (chacun son tour) ; le procédé habile (un tour de magie) ; la machine sur laquelle l’artisan fait tourner la pièce qu’il façonne — certains dictionnaires font de cette machine un troisième article, masculin lui aussi. Compte : le genre, et deux sens du masculin. C’est celui des cinq dont un seul article porte le plus de sens.",
      "4. **mousse** — Deux articles au moins, distingués par le genre. La mousse, nom féminin : la petite plante verte et rase des sous-bois et des troncs ; les bulles serrées à la surface d’un liquide ; le dessert léger fait de blancs battus. Le mousse, nom masculin : le jeune marin qui apprend le métier à bord. Compte : le masculin trouvé, qui ne se devine pas. Certains dictionnaires scolaires ne le donnent pas — si c’est le cas du vôtre, la réponse est celle qu’il y lit, et elle est juste.",
      "5. **sol** — Deux articles le plus souvent, de même genre et de même nature, tous deux noms masculins : rien ne les distingue que le numéro. Le premier : la surface sur laquelle on marche, la terre. Le second : en musique, la note qui vient après le fa. Compte : le constat que le numéro est le seul indice. Si le dictionnaire de la maison n’en fait qu’un article, avec deux sens numérotés, c’est sa réponse, et elle est juste. C’est l’aboutissement de la série — un dictionnaire range des mots et non des suites de lettres, et deux mots qui s’écrivent pareil restent deux mots.",
    ],
    "Ce qu’on regarde tient dans une question qu’on peut poser telle quelle à la fin : pourquoi « glace », vu à la fiche 8, n’a-t-il qu’un article pour trois sens, alors que « sol » en a deux ? La réponse — les trois glaces viennent du même mot, les deux sols n’ont jamais eu de rapport — n’est pas attendue. Si le dictionnaire de la maison ne donne qu’un article pour « sol », la même question se pose avec « livre ». Ce qui est attendu, c’est qu’il trouve la question intéressante. Si elle l’ennuie, la fiche a été sortie trop tôt, et elle se garde pour plus tard sans dommage.",
  ),
];
