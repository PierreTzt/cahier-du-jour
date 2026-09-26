/**
 * Vocabulaire — les quinze séances de l’année, et trois de réserve.
 *
 * Le rituel dit : « Dix mots : chercher, quand il y en a, un synonyme, un
 * contraire et un mot de la même famille. » Il tombe quinze fois, du
 * 3 décembre au 2 juillet, et jusqu’ici ces dix mots n’existaient nulle part : c’est
 * l’adulte qui devait les trouver, un matin, quinze fois dans l’année.
 *
 * Une fiche donne donc **les dix mots, leur nature et une phrase qui en fixe
 * le sens**, puis **le corrigé complet** : synonyme, contraire, famille.
 *
 * Ce qu’une fiche donne, et pourquoi : voir `lib/fiches/types.ts`. En deux
 * mots — le matériel exact, le corrigé quand il y en a un, et ce qu’on
 * regarde. Un adulte qui l’ouvre ne doit plus rien avoir à chercher.
 *
 * **Réservé aux adultes** : ces fiches portent les corrigés.
 *
 * ## Deux choses que ces séries apprennent en passant
 *
 * **Qu’un mot n’a pas toujours de contraire.** C’est la découverte qui revient
 * dans chaque série, et le corrigé le dit franchement à chaque fois plutôt que
 * de laisser l’adulte chercher ce qui n’existe pas : « une rue » n’a pas de
 * contraire, « sauter » non plus, et ce n’est pas un trou de la langue. Trois
 * mots par série au moins sont dans ce cas, délibérément.
 *
 * **Qu’une famille se fabrique.** En période 1, la leçon « Les familles de
 * mots » pose le radical, puis les premiers préfixes et suffixes. À partir de
 * la période 3, une fois passée la leçon « Synonymes et contraires », les
 * familles des séries cessent d’être de simples ressemblances et deviennent
 * des constructions : dé-, re-, in-/im-, -able, -eur, -tion. Les séries 7 à 18
 * s’appuient dessus, et jamais avant.
 *
 * ## Comment la série est rangée
 *
 * Les fiches d’un même rituel forment une série, et la n-ième occurrence du
 * rituel dans l’année donne la n-ième fiche. Elles vont donc du concret et du
 * courant — la pluie, le vent, la rue — vers l’abstrait et le construit — une
 * transformation, une supposition, un jugement qu’on nuance. Les quinze
 * premières couvrent l’année ; les trois dernières attendent une année qui
 * déborde, ou remplacent une série qui ne prend pas.
 *
 * Rien de tout ceci n’a été relu par un enseignant. Ça doit l’être.
 */

import { f, type Fiche } from "./types";

export const vocabulaire: Fiche[] = [
  /* ================================================================== */
  /* SÉRIE 1 — le 3 décembre                                             */
  /* ================================================================== */

  f(
    "vo-mots-01",
    "Vocabulaire",
    "Série 1 · les mots du temps qu’il fait",
    [
      "Il trace trois colonnes sur le cahier : synonyme, contraire, même famille. Les dix mots s’écrivent dans la marge, un par ligne, et on remplit ligne par ligne sans chercher à tout finir d’un coup.",
      "On lit la phrase d’emploi à voix haute avant chaque mot : c’est elle qui dit de quel sens on parle. Sans elle, « sec » pourrait vouloir dire cinq choses.",
      "Le jour où ça coince : on garde les quatre premiers mots et on arrête là. Quatre mots travaillés entièrement valent mieux que dix survolés, et la fiche se reprend telle quelle la fois suivante.",
    ],
    [
      "1. **la pluie**, nom — la pluie tombe depuis ce matin et le jardin est trempé.",
      "2. **le vent**, nom — le vent a fait claquer les volets toute la nuit.",
      "3. **chaud**, adjectif — le sable est chaud sous les pieds à midi.",
      "4. **froid**, adjectif — l’eau du ruisseau est froide même en été.",
      "5. **mouillé**, adjectif — mes chaussures sont mouillées jusqu’aux lacets.",
      "6. **sec**, adjectif — le linge est déjà sec sur le fil.",
      "7. **souffler**, verbe — le vent souffle si fort qu’on entend la porte trembler.",
      "8. **un nuage**, nom — un nuage noir cache le soleil depuis dix minutes.",
      "9. **le soleil**, nom — le soleil passe au-dessus du toit vers onze heures.",
      "10. **geler**, verbe — il gèle chaque nuit depuis dimanche.",
    ],
    [
      "1. **la pluie** — Synonyme : une averse, une ondée (plus courte). Contraire : aucun. On dit parfois « la sécheresse », mais c’est le manque de pluie, pas son contraire. Famille : pleuvoir, pluvieux, un parapluie, une pluviométrie.",
      "2. **le vent** — Synonyme : une brise (léger), une bourrasque (fort), un courant d’air. Contraire : le calme — encore une absence plutôt qu’un contraire. Famille : venteux, éventer, un éventail, un ventilateur.",
      "3. **chaud** — Synonyme : brûlant, torride, tiède (moins fort). Contraire : froid, glacé. Famille : la chaleur, chauffer, réchauffer, un chauffage, chaudement.",
      "4. **froid** — Synonyme : glacé, glacial, frais (moins fort). Contraire : chaud, brûlant. Famille : la froideur, refroidir, le refroidissement, froidement.",
      "5. **mouillé** — Synonyme : trempé (plus fort), humide (moins fort), détrempé. Contraire : sec. Famille : mouiller, se mouiller, une mouillette (le pain qu’on trempe).",
      "6. **sec** — Synonyme : asséché, aride (pour une terre), desséché. Contraire : mouillé, humide, trempé. Famille : sécher, la sécheresse, un séchoir, dessécher.",
      "7. **souffler** — Synonyme : venter (« il vente », plus rare), se lever (« le vent se lève »). Contraire : tomber, se calmer — « le vent est tombé » se dit vraiment. Famille : un souffle, essoufflé, un soufflet, soufflant.",
      "8. **un nuage** — Synonyme : une nuée (soutenu). Contraire : aucun ; un ciel dégagé n’est pas le contraire d’un nuage, c’est un ciel sans nuages. Famille : nuageux — et à peu près rien d’autre : la famille est très courte, il n’y a pas à chercher plus loin.",
      "9. **le soleil** — Synonyme : aucun en langue courante ; les poèmes disent « l’astre du jour ». Contraire : aucun — la lune n’est pas le contraire du soleil, c’est un autre objet du ciel. Famille : ensoleillé, ensoleiller, l’ensoleillement — le radical « soleil » s’y voit en entier. « Tournesol » et « parasol » viennent de « sol », le mot latin qui voulait dire soleil : ce sont des cousins par l’histoire, pas la même famille au sens de la leçon.",
      "10. **geler** — Synonyme : glacer, givrer, se figer. Contraire : dégeler, fondre. Famille : le gel, la gelée, dégeler, congeler, un congélateur.",
    ],
    "Ce qu’on observe : est-ce qu’il cherche le contraire dans le mot lui-même, ou est-ce qu’il attend qu’on le lui donne. Et surtout ce qu’il fait des mots 8 et 9 — s’il invente un contraire à « nuage » pour remplir la case, c’est qu’il croit qu’une case vide est une faute. C’est ce point-là qu’on reprend la fois suivante, avant tout le reste : une colonne vide peut être la bonne réponse.",
  ),

  /* ================================================================== */
  /* SÉRIES 2 À 6 — du 11 décembre au 5 février                          */
  /* ================================================================== */

  f(
    "vo-mots-02",
    "Vocabulaire",
    "Série 2 · les mots des émotions",
    [
      "Mêmes trois colonnes. La nouveauté : ces mots-là ne se montrent pas du doigt, on ne peut pas les dessiner. On s’appuie donc entièrement sur la phrase d’emploi.",
      "Pour chaque synonyme trouvé, on demande s’il est plus fort ou moins fort que le mot de départ : « ravi » est plus fort que « content », « fâché » est moins fort que « furieux ». C’est ce classement qui fait le travail, pas la liste.",
      "Si les mots ne viennent pas, on passe à l’oral : l’adulte propose deux mots et il choisit lequel va dans quelle colonne. Choisir demande moins que produire, et ça travaille la même chose.",
    ],
    [
      "1. **content**, adjectif — il est content de partir en vacances demain.",
      "2. **triste**, adjectif — elle a l’air triste depuis que le chat s’est perdu.",
      "3. **la peur**, nom — la peur l’a cloué sur place au milieu de l’escalier.",
      "4. **la colère**, nom — il a claqué la porte de colère.",
      "5. **calme**, adjectif — la maison est calme quand tout le monde dort.",
      "6. **rire**, verbe — il rit encore en repensant à cette histoire.",
      "7. **pleurer**, verbe — elle a pleuré en regardant la fin du film.",
      "8. **inquiet**, adjectif — il est inquiet tant que son frère n’est pas rentré.",
      "9. **la joie**, nom — la joie de le revoir a fait oublier le retard.",
      "10. **doux**, adjectif — sa voix est douce quand il raconte une histoire.",
    ],
    [
      "1. **content** — Synonyme : heureux, satisfait, ravi (plus fort). Contraire : mécontent, triste, déçu. Famille : le contentement, mécontent, se contenter.",
      "2. **triste** — Synonyme : malheureux, chagriné, morose, abattu. Contraire : gai, joyeux, content. Famille : la tristesse, tristement, attrister.",
      "3. **la peur** — Synonyme : la crainte, la frayeur, l’effroi (plus fort). Contraire : le courage, l’audace — mais ce n’est pas exact : la peur est un sentiment, le courage une force qu’on a malgré elle. Famille : peureux, apeuré — et c’est tout : la famille de « peur » est courte.",
      "4. **la colère** — Synonyme : la rage, la fureur, l’énervement (moins fort). Contraire : le calme, la douceur. Famille : coléreux, colérique, se mettre en colère.",
      "5. **calme** — Synonyme : tranquille, paisible, serein. Contraire : agité, énervé, bruyant. Famille : le calme, calmer, se calmer, un calmant.",
      "6. **rire** — Synonyme : pouffer, s’esclaffer, rigoler (familier). Contraire : pleurer. Famille : le rire, un sourire, risible, la risée.",
      "7. **pleurer** — Synonyme : sangloter, larmoyer, verser des larmes. Contraire : rire. Famille : les pleurs, un pleurnicheur, éploré (soutenu).",
      "8. **inquiet** — Synonyme : soucieux, préoccupé, tourmenté. Contraire : rassuré, tranquille, serein. Famille : l’inquiétude, s’inquiéter, inquiétant. À signaler si l’occasion se présente : le mot est fait de in- + « quiet », qui voulait dire calme. Inquiet, c’est littéralement « pas calme ».",
      "9. **la joie** — Synonyme : le bonheur, la gaieté, l’allégresse (soutenu). Contraire : la tristesse, le chagrin, la peine. Famille : joyeux, joyeusement, se réjouir, une réjouissance.",
      "10. **doux** — Synonyme : tendre, léger, moelleux — selon ce qu’on qualifie. Contraire : dur, brutal, rude. Famille : la douceur, doucement, adoucir, un adoucissant.",
    ],
    "Ce qu’on regarde : s’il distingue deux synonymes par leur force, ou s’il les empile comme des équivalents. « Content » et « ravi » rangés au même niveau, ce n’est pas une erreur, c’est l’étape d’avant — on y revient en reprenant deux mots seulement, à l’oral, en les plaçant sur une échelle tracée sur l’ardoise.",
  ),

  f(
    "vo-mots-03",
    "Vocabulaire",
    "Série 3 · les mots de la ville",
    [
      "Série concrète : la moitié de ces mots se montrent par la fenêtre ou se retrouvent sur le chemin de la boulangerie. Les sortir du cahier quand c’est possible.",
      "Trois mots de cette série n’ont pas de contraire, et c’est volontaire. Quand il s’arrête devant la colonne vide, ne pas l’aider tout de suite : lui demander s’il existe un contraire de « chaise ». La réponse vient toute seule.",
      "Si la séance s’enlise, on garde la colonne « même famille » seulement, pour les dix mots. C’est un exercice entier à lui tout seul, et il prépare celui de la fois d’après.",
    ],
    [
      "1. **une rue**, nom — la rue est barrée à cause des travaux.",
      "2. **une maison**, nom — la maison du bout du chemin a des volets bleus.",
      "3. **bruyant**, adjectif — le carrefour est bruyant dès six heures du matin.",
      "4. **un habitant**, nom — le village compte trois cents habitants.",
      "5. **circuler**, verbe — les voitures circulent mal à la sortie de l’école.",
      "6. **proche**, adjectif — la boulangerie est proche, on y va à pied.",
      "7. **un trottoir**, nom — le trottoir est trop étroit pour deux poussettes.",
      "8. **étroit**, adjectif — le passage est si étroit qu’il faut se mettre de côté.",
      "9. **une place**, nom — la place du marché se remplit le samedi matin.",
      "10. **un quartier**, nom — il connaît tout le monde dans son quartier.",
    ],
    [
      "1. **une rue** — Synonyme : une avenue, un boulevard (plus larges), une ruelle (plus étroite). Contraire : aucun. Famille : une ruelle — la famille s’arrête là.",
      "2. **une maison** — Synonyme : une habitation, un logement, une demeure (soutenu). Contraire : aucun. Famille : une maisonnette, une maisonnée, un maçon n’en est pas (autre racine).",
      "3. **bruyant** — Synonyme : sonore, tapageur, assourdissant (plus fort). Contraire : silencieux, calme, feutré. Famille : le bruit, bruire, un bruissement, bruyamment.",
      "4. **un habitant** — Synonyme : un résident, un citadin (en ville), un villageois (au village). Contraire : aucun. Famille : habiter, une habitation, un habitat, inhabité.",
      "5. **circuler** — Synonyme : rouler, se déplacer, aller et venir. Contraire : s’arrêter, stationner. Famille : la circulation, un circuit, une circonférence.",
      "6. **proche** — Synonyme : voisin, tout près, à deux pas. Contraire : lointain, éloigné, distant. Famille : la proximité, approcher, se rapprocher, un rapprochement.",
      "7. **un trottoir** — Synonyme : aucun en langue courante ; c’est un mot précis, il n’a pas de doublure. Contraire : aucun. La chaussée n’est pas son contraire, c’est l’autre moitié de la rue. Famille : trotter, le trot — le trottoir est l’endroit où l’on trotte, et ça s’entend une fois qu’on le sait.",
      "8. **étroit** — Synonyme : resserré, exigu, serré. Contraire : large, vaste, spacieux. Famille : l’étroitesse, étroitement, rétrécir.",
      "9. **une place** — Synonyme : un square, une esplanade (plus vaste). Contraire : aucun. Famille : placer, un emplacement, déplacer, remplacer — la famille la plus riche de la série.",
      "10. **un quartier** — Synonyme : un secteur, un voisinage. Contraire : aucun. Famille : un quart, un quartier d’orange — le même mot, et le même sens de départ : un morceau du tout.",
    ],
    "Deux choses valent le coup d’être observées. D’abord s’il accepte les colonnes vides des mots 1, 2, 4, 7, 9 et 10 sans les remplir de force. Ensuite s’il voit le lien entre « quartier » et « quart » : c’est le premier mot de l’année dont la famille explique le sens, et c’est le début de tout le reste. S’il ne le voit pas, le remontrer sur « trottoir / trotter », qui est plus parlant.",
  ),

  f(
    "vo-mots-04",
    "Vocabulaire",
    "Série 4 · les mots du mouvement",
    [
      "Série de verbes pour l’essentiel : on peut la faire debout, en mimant, avant d’écrire. Trois minutes de mime font gagner dix minutes de cahier.",
      "Les contraires viennent par paires dans cette série — avancer et reculer, monter et descendre, rapide et lent. Les écrire côte à côte plutôt qu’en colonnes, pour que la paire se voie.",
      "Le jour où ça bloque : on fait les cinq paires de contraires et on laisse les synonymes de côté. Les paires sont la moitié de la séance et la plus solide.",
    ],
    [
      "1. **avancer**, verbe — la file avance d’un pas toutes les deux minutes.",
      "2. **reculer**, verbe — il recule de trois pas pour laisser passer le vélo.",
      "3. **rapide**, adjectif — le train rapide ne s’arrête pas à notre gare.",
      "4. **lent**, adjectif — la tortue est lente mais elle arrive au bout.",
      "5. **monter**, verbe — il monte l’escalier deux marches à la fois.",
      "6. **descendre**, verbe — nous descendons au village par le sentier.",
      "7. **sauter**, verbe — il saute par-dessus la flaque sans se mouiller.",
      "8. **courir**, verbe — elle court jusqu’au portail pour ne pas rater le car.",
      "9. **immobile**, adjectif — le héron reste immobile au bord de l’eau.",
      "10. **traverser**, verbe — on traverse la rue au passage piéton.",
    ],
    [
      "1. **avancer** — Synonyme : progresser, s’approcher, aller de l’avant. Contraire : reculer. Famille : l’avance, une avancée, en avant, d’avance.",
      "2. **reculer** — Synonyme : se retirer, refluer, faire marche arrière. Contraire : avancer. Famille : le recul, à reculons, reculé (« un hameau reculé »).",
      "3. **rapide** — Synonyme : vif, véloce, prompt. Contraire : lent. Famille : la rapidité, rapidement.",
      "4. **lent** — Synonyme : posé, traînant, poussif. Contraire : rapide, vif. Famille : la lenteur, lentement, ralentir, un ralentissement.",
      "5. **monter** — Synonyme : grimper, gravir, s’élever. Contraire : descendre. Famille : la montée, un montage, remonter, démonter, une monture.",
      "6. **descendre** — Synonyme : dévaler (vite), dégringoler (familier). Contraire : monter. Famille : la descente, redescendre, une descendance.",
      "7. **sauter** — Synonyme : bondir, franchir d’un bond. Contraire : aucun. On ne « dé-saute » pas, et il n’existe pas de verbe pour le geste inverse : c’est une case vide honnête. Famille : un saut, un sursaut, sursauter, un sauteur.",
      "8. **courir** — Synonyme : filer, galoper, se précipiter. Contraire : marcher (plus lent), s’arrêter. Famille : une course, un coureur, parcourir, un couloir (oui, le couloir vient de là).",
      "9. **immobile** — Synonyme : figé, fixe, immuable. Contraire : mobile, agité, en mouvement. Famille : mobile, la mobilité, immobiliser, un immeuble. Le im- de départ dit « pas » : im- + mobile, qui ne bouge pas.",
      "10. **traverser** — Synonyme : franchir, couper (« couper la place »), passer de l’autre côté. Contraire : contourner, longer — ce ne sont pas de vrais contraires : personne ne dit « détraverser ». Famille : une traversée, à travers, un traversin, une traverse.",
    ],
    "Le point à surveiller est le mot 7. S’il invente « atterrir » ou « descendre » comme contraire de « sauter », il est en train de raisonner — c’est bon signe, et il faut le lui dire simplement : ce sont des suites du saut, pas son contraire. Le mot 9 est l’autre repère : s’il repère le im- tout seul, la série 7 pourra aller plus vite ; sinon, on le lui montre et on n’en fait pas une leçon.",
  ),

  f(
    "vo-mots-05",
    "Vocabulaire",
    "Série 5 · les mots de la lumière et de l’ombre",
    [
      "Se faire dans la pièce où l’on est, en montrant : le coin sombre, la fenêtre claire, l’ombre du crayon sur la table. Les dix mots sont tous vérifiables à vue.",
      "Cette série contient deux paires exactes — clair et sombre, allumer et éteindre — et deux mots qui n’ont pas de contraire. Prévenir au début qu’il y en a deux, sans dire lesquels : la chasse fait partie du travail.",
      "S’il fatigue avant la fin, s’arrêter au mot 6 : les quatre derniers sont les plus exigeants et se reprennent mieux au début de la séance suivante qu’à la fin de celle-là.",
    ],
    [
      "1. **clair**, adjectif — la cuisine est claire dès le matin.",
      "2. **sombre**, adjectif — la cave est sombre même à midi.",
      "3. **briller**, verbe — les vitres brillent après la pluie.",
      "4. **une ombre**, nom — à midi, l’ombre du poteau est très courte.",
      "5. **éteindre**, verbe — il éteint la lampe avant de sortir.",
      "6. **allumer**, verbe — elle allume la lampe de chevet pour lire.",
      "7. **une lampe**, nom — la lampe du couloir clignote depuis hier.",
      "8. **pâle**, adjectif — le ciel est pâle avant le lever du soleil.",
      "9. **transparent**, adjectif — l’eau du bassin est transparente jusqu’au fond.",
      "10. **aveugler**, verbe — le soleil bas nous aveugle sur la route du retour.",
    ],
    [
      "1. **clair** — Synonyme : lumineux, éclairé, limpide (pour l’eau). Contraire : sombre, obscur. Famille : la clarté, éclairer, un éclaircissement, une clairière, clairement.",
      "2. **sombre** — Synonyme : obscur, noir, ténébreux. Contraire : clair, lumineux. Famille : la pénombre, assombrir, sombrement.",
      "3. **briller** — Synonyme : luire, étinceler, scintiller, resplendir. Contraire : aucun mot courant ; « ternir » s’en approche mais désigne ce qui perd son éclat, pas l’inverse de briller. Famille : brillant, la brillance, un brillant (la pierre).",
      "4. **une ombre** — Synonyme : aucun exact ; « un ombrage » désigne celle des arbres. Contraire : la lumière, le soleil. Famille : ombragé, un ombrage, la pénombre, une ombrelle.",
      "5. **éteindre** — Synonyme : souffler (une bougie), couper (la lumière). Contraire : allumer. Famille : éteint, s’éteindre, un extincteur (même racine, à peine déguisée).",
      "6. **allumer** — Synonyme : mettre en marche, enflammer (un feu). Contraire : éteindre. Famille : une allumette, l’allumage, rallumer.",
      "7. **une lampe** — Synonyme : une lanterne, une veilleuse, un lampadaire (sur pied). Contraire : aucun. Famille : un lampadaire, un lampion.",
      "8. **pâle** — Synonyme : blafard, terne, délavé. Contraire : vif, éclatant, foncé. Famille : la pâleur, pâlir, pâlichon.",
      "9. **transparent** — Synonyme : limpide, clair, translucide (qui laisse passer la lumière sans laisser voir). Contraire : opaque, trouble. Famille : la transparence, transparaître, paraître, apparaître.",
      "10. **aveugler** — Synonyme : éblouir. Contraire : aucun. Famille : aveugle, un aveuglement, à l’aveuglette.",
    ],
    "Le mot 9 est celui qui renseigne le plus : accepte-t-il « translucide » comme un mot différent de « transparent », ou range-t-il les deux ensemble ? Distinguer deux mots proches, c’est exactement ce que la série 2 avait commencé avec « content » et « ravi ». S’il ne fait pas la différence, la reprendre avec un objet dans la main — une vitre, puis un verre dépoli ou un sac plastique.",
  ),

  f(
    "vo-mots-06",
    "Vocabulaire",
    "Série 6 · les mots de la matière",
    [
      "Sortir quatre objets et les poser sur la table : un bout de bois, un clou, une éponge, un verre. Les dix mots se disent en les touchant, et l’écrit vient après.",
      "Nouveauté de la série : les contraires vont par couples qui se répondent d’une ligne à l’autre — dur et mou, lourd et léger, solide et fragile. Lui faire remarquer que la fiche est construite comme ça, c’est lui donner une prise.",
      "Si l’écriture est le point dur du jour, il dicte et l’adulte écrit. Ce qui se travaille ici est le mot, pas la main.",
    ],
    [
      "1. **le bois**, nom — la table est en bois et elle pèse lourd.",
      "2. **le fer**, nom — la grille en fer a rouillé au pied.",
      "3. **dur**, adjectif — la terre est dure après trois semaines sans pluie.",
      "4. **mou**, adjectif — le pain de la veille est mou.",
      "5. **lourd**, adjectif — le carton est trop lourd pour être porté seul.",
      "6. **léger**, adjectif — la plume est si légère qu’elle flotte avant de tomber.",
      "7. **casser**, verbe — il a cassé le verre en le posant trop vite.",
      "8. **solide**, adjectif — la corde est solide, elle tiendra.",
      "9. **fragile**, adjectif — la tasse est fragile, il la porte à deux mains.",
      "10. **le verre**, nom — le verre de la fenêtre est couvert de buée.",
    ],
    [
      "1. **le bois** — Synonyme : aucun pour la matière ; « le bosquet » ou « la forêt » traduisent l’autre sens du mot. Contraire : aucun. Famille : boisé, un boisement, déboiser, une boiserie.",
      "2. **le fer** — Synonyme : le métal (plus général, donc pas tout à fait un synonyme). Contraire : aucun. Famille : ferré, une ferrure, un ferrailleur, un chemin de fer.",
      "3. **dur** — Synonyme : ferme, résistant, rigide. Contraire : mou, tendre, souple. Famille : la dureté, durcir, endurcir, endurer.",
      "4. **mou** — Synonyme : tendre, flasque, souple. Contraire : dur, ferme. Famille : la mollesse, ramollir, mollement, une mollesse.",
      "5. **lourd** — Synonyme : pesant, massif. Contraire : léger. Famille : la lourdeur, alourdir, lourdement.",
      "6. **léger** — Synonyme : fin, ténu, aérien. Contraire : lourd, pesant. Famille : la légèreté, alléger, légèrement, un allègement.",
      "7. **casser** — Synonyme : briser, rompre, fracturer. Contraire : réparer, recoller — ce ne sont pas des contraires exacts : c’est ce qu’on fait après, pas l’inverse du geste. Famille : la casse, cassant, incassable, un casse-noix.",
      "8. **solide** — Synonyme : résistant, robuste, costaud (familier). Contraire : fragile. Famille : la solidité, consolider, solidement.",
      "9. **fragile** — Synonyme : cassant, délicat, précaire. Contraire : solide, résistant. Famille : la fragilité, fragiliser.",
      "10. **le verre** — Synonyme : aucun pour la matière ; « une vitre » désigne l’objet, pas ce dont il est fait. Contraire : aucun. Famille : une verrière, un verrier, une verroterie, un verre à pied.",
    ],
    "Le mot 7 est le repère de la séance : « réparer » proposé comme contraire de « casser » est une réponse raisonnée, et elle mérite qu’on l’examine avec lui plutôt qu’on la corrige. Casser et réparer se suivent dans le temps ; « avancer » et « reculer », vus à la série 4, se répondent dans l’espace. C’est la différence entre une suite et un contraire, et elle se voit mieux sur ces deux exemples que dans n’importe quelle explication.",
  ),

  /* ================================================================== */
  /* SÉRIES 7 À 9 — du 19 février au 5 avril                             */
  /* La leçon « Synonymes et contraires » est passée : les familles       */
  /* deviennent des constructions, et les préfixes et suffixes se         */
  /* nomment.                                                             */
  /* ================================================================== */

  f(
    "vo-mots-07",
    "Vocabulaire",
    "Série 7 · les mots des métiers, et le suffixe -eur",
    [
      "Première série d’après la leçon sur les synonymes et les contraires. Elle ajoute une quatrième colonne, étroite : « comment la famille est fabriquée ». On y écrit -eur, -tion, re-, in-, rien de plus.",
      "Le fil de la série : le suffixe -eur désigne celui qui fait l’action. Conduire donne un conducteur, vendre un vendeur, chercher un chercheur. Le lui faire trouver sur les mots 3, 4 et 10 avant de le nommer.",
      "Si la quatrième colonne alourdit trop, la supprimer sans discussion et revenir aux trois habituelles. Elle reviendra à la série 9.",
    ],
    [
      "1. **un boulanger**, nom — le boulanger allume son four à quatre heures.",
      "2. **travailler**, verbe — il travaille au bureau du lundi au vendredi.",
      "3. **un conducteur**, nom — le conducteur du car connaît tous les enfants.",
      "4. **un vendeur**, nom — le vendeur a cherché la bonne pointure au sous-sol.",
      "5. **soigner**, verbe — l’infirmière soigne sa cheville avant le match.",
      "6. **enseigner**, verbe — elle enseigne la musique dans deux écoles.",
      "7. **habile**, adjectif — le menuisier est habile de ses mains.",
      "8. **un outil**, nom — chaque outil a sa place au mur de l’atelier.",
      "9. **réparer**, verbe — le voisin répare les vélos dans son garage.",
      "10. **un chercheur**, nom — un chercheur passe des années sur une seule question.",
    ],
    [
      "1. **un boulanger** — Synonyme : aucun. Contraire : aucun. Famille : la boulangerie, une boulangère, la boule — le boulanger est d’abord celui qui fait des boules de pain. Fabrication : -erie pour le lieu, -ère pour le féminin.",
      "2. **travailler** — Synonyme : œuvrer, exercer un métier, bosser (familier). Contraire : se reposer, chômer. Famille : le travail, un travailleur, travaillé. Fabrication : -eur, celui qui fait.",
      "3. **un conducteur** — Synonyme : un chauffeur, un pilote (selon l’engin). Contraire : un passager — ce n’est pas un contraire, c’est l’autre rôle dans le même véhicule. Famille : conduire, la conduite, reconduire, une conduite. Fabrication : conduire + -eur.",
      "4. **un vendeur** — Synonyme : un marchand, un commerçant. Contraire : un acheteur, un client. Famille : vendre, la vente, revendre, invendu. Fabrication : vendre + -eur, et en face acheter + -eur.",
      "5. **soigner** — Synonyme : guérir, panser, traiter. Contraire : négliger — plus juste que « blesser », qui n’est pas l’inverse de soigner mais ce qui le rend nécessaire. Famille : le soin, un soignant, soigneux, soigneusement.",
      "6. **enseigner** — Synonyme : instruire, transmettre, apprendre à quelqu’un. Contraire : aucun — et c’est un cas à montrer : « apprendre » sert aux deux côtés, celui qui donne et celui qui reçoit. Famille : un enseignant, l’enseignement, une enseigne. Fabrication : -ant pour la personne, -ement pour l’action.",
      "7. **habile** — Synonyme : adroit, agile, doué. Contraire : maladroit, gauche. Famille : l’habileté, habilement. Fabrication : le contraire se fabrique sur « adroit », pas sur « habile » : mal- + adroit.",
      "8. **un outil** — Synonyme : un instrument, un ustensile. Contraire : aucun. Famille : outiller, l’outillage, un outilleur.",
      "9. **réparer** — Synonyme : dépanner, remettre en état, raccommoder (du tissu). Contraire : casser, abîmer. Famille : la réparation, réparable, irréparable, un réparateur. Fabrication : quatre suffixes sur un seul radical — -tion, -able, ir- + -able, -eur. La famille la plus démonstrative de la série.",
      "10. **un chercheur** — Synonyme : un scientifique (selon le domaine). Contraire : aucun. Famille : chercher, la recherche, rechercher, recherché. Fabrication : chercher + -eur, et re- + chercher pour chercher de nouveau.",
    ],
    "Ce qu’on regarde, c’est le mot 9 : est-ce qu’il voit les quatre mots de la famille de « réparer » comme quatre mots séparés à retenir, ou comme un seul radical et quatre bouts qu’on lui accroche. La deuxième façon de voir change tout le reste de l’année, et elle ne s’installe pas en une séance. Si elle ne vient pas, la remontrer sur « travail » à la séance suivante, en écrivant le radical au tableau et les suffixes autour.",
  ),

  f(
    "vo-mots-08",
    "Vocabulaire",
    "Série 8 · les mots du goût",
    [
      "Faire la séance à la cuisine si le moment s’y prête : quatre saveurs se goûtent en trente secondes et le mot reste ensuite. Sinon, la phrase d’emploi suffit.",
      "Point de la série : « sucré » n’a pas un contraire mais deux, selon ce qu’on oppose — salé si on parle de cuisine, amer si on parle de saveur. On écrit les deux, et on note à côté sur quoi porte l’opposition.",
      "Le jour où ça ne va pas, on garde les quatre saveurs — sucré, salé, amer, fade — et rien d’autre. Elles forment un ensemble qui se tient, et la fiche reprend au mot 5 la fois suivante.",
    ],
    [
      "1. **sucré**, adjectif — la compote est trop sucrée à son goût.",
      "2. **salé**, adjectif — la soupe est trop salée, il faut ajouter de l’eau.",
      "3. **amer**, adjectif — l’écorce de l’orange est amère.",
      "4. **fade**, adjectif — le riz est fade sans un peu de beurre.",
      "5. **goûter**, verbe — il goûte la sauce du bout de la cuillère.",
      "6. **une odeur**, nom — l’odeur du pain chaud se sent depuis la rue.",
      "7. **mûr**, adjectif — la poire est mûre, elle cède sous le doigt.",
      "8. **croquant**, adjectif — la biscotte est croquante sous la dent.",
      "9. **l’appétit**, nom — il a retrouvé l’appétit après la promenade.",
      "10. **savoureux**, adjectif — le gratin de la veille est encore meilleur réchauffé, il est plus savoureux.",
    ],
    [
      "1. **sucré** — Synonyme : doux, sirupeux, mielleux. Contraire : salé si l’on parle d’un plat, amer si l’on parle d’une saveur. Les deux sont justes, et c’est ce qu’on veut lui faire remarquer. Famille : le sucre, sucrer, un sucrier, du sucré-salé.",
      "2. **salé** — Synonyme : relevé (un peu). Contraire : sucré, fade. Famille : le sel, saler, une salière, la salaison, dessalé.",
      "3. **amer** — Synonyme : âpre. Contraire : sucré, doux. Famille : l’amertume, amèrement.",
      "4. **fade** — Synonyme : insipide, sans goût. Contraire : relevé, épicé, savoureux. Famille : la fadeur, fadasse (familier).",
      "5. **goûter** — Synonyme : déguster, essayer, tester. Contraire : aucun. Famille : le goût, un goûter, dégoûter, dégoûtant, un ragoût. Le dé- de « dégoûter » dit l’inverse du goût : on l’écrit à côté, il ressert plus tard.",
      "6. **une odeur** — Synonyme : un parfum, un arôme, une senteur si elle est agréable ; une puanteur si elle ne l’est pas. Contraire : aucun. Famille : odorant, l’odorat, inodore, malodorant. Deux préfixes de sens contraire sur le même radical : in- qui dit l’absence, mal- qui dit le mauvais.",
      "7. **mûr** — Synonyme : à point. Contraire : vert (« une poire verte »), pas mûr. Famille : mûrir, le mûrissement, la maturité (même racine, écrite autrement).",
      "8. **croquant** — Synonyme : craquant, croustillant. Contraire : mou, ramolli. Famille : croquer, une croquette, un croque-monsieur.",
      "9. **l’appétit** — Synonyme : la faim, l’envie de manger. Contraire : aucun exact ; on dit « le manque d’appétit », et « le dégoût » est plus fort que le contraire. Famille : appétissant, un apéritif (même racine : ce qui ouvre l’appétit).",
      "10. **savoureux** — Synonyme : délicieux, goûteux, exquis. Contraire : fade, insipide. Famille : la saveur, savourer. Fabrication : saveur + -eux, comme peur et peureux, bruit et bruyant.",
    ],
    "Le mot 1 est la séance entière : s’il donne un seul contraire à « sucré » et s’arrête, on lui demande ce qu’on oppose à un gâteau, puis ce qu’on oppose à un café. Deux réponses différentes pour un même mot, c’est l’idée de la leçon sur les mots à plusieurs sens, passée le 15 mars. S’il tient à une seule réponse, ne pas insister aujourd’hui : elle reviendra toute seule avec la reprise de cette leçon, le 6 avril.",
  ),

  f(
    "vo-mots-09",
    "Vocabulaire",
    "Série 9 · les mots de la parole, et le préfixe re-",
    [
      "La quatrième colonne revient : « comment la famille est fabriquée ». Le fil du jour est le préfixe re-, qui dit « une nouvelle fois » — redire, reparler, répéter, raconter.",
      "Deux de ces re- ne se voient plus : « répondre » et « raconter » en contiennent un, mais il faut le savoir pour l’entendre. Le lui montrer au corrigé, sans le lui demander : c’est une curiosité, pas une règle à retenir.",
      "S’il bloque, une variante qui marche : l’adulte dit une phrase, il la redit en changeant un mot par un synonyme. Dix phrases à l’oral valent la fiche écrite, et le cahier reste fermé.",
    ],
    [
      "1. **dire**, verbe — il dit toujours bonjour au voisin du dessus.",
      "2. **parler**, verbe — nous parlons de son projet pendant tout le trajet.",
      "3. **crier**, verbe — elle crie pour qu’on l’entende du fond du jardin.",
      "4. **chuchoter**, verbe — ils chuchotent au fond de la salle pour ne pas déranger.",
      "5. **raconter**, verbe — il raconte sa journée en cinq minutes.",
      "6. **répondre**, verbe — il répond à la question sans hésiter.",
      "7. **une question**, nom — sa question a fait rire toute la table.",
      "8. **expliquer**, verbe — il explique la règle du jeu avant de commencer.",
      "9. **bavard**, adjectif — il est bavard dès qu’on parle de football.",
      "10. **répéter**, verbe — il répète la phrase deux fois pour la retenir.",
    ],
    [
      "1. **dire** — Synonyme : déclarer, affirmer, énoncer. Contraire : se taire. Famille : redire, contredire, un dicton, la diction. Fabrication : re- pour dire encore, contre- pour dire l’inverse.",
      "2. **parler** — Synonyme : s’exprimer, discuter, causer (familier). Contraire : se taire. Famille : la parole, un parleur, reparler, des pourparlers.",
      "3. **crier** — Synonyme : hurler, brailler, s’égosiller. Contraire : chuchoter, murmurer. Famille : un cri, s’écrier, criard, une criée.",
      "4. **chuchoter** — Synonyme : murmurer, souffler (« souffler une réponse »). Contraire : crier, hurler. Famille : un chuchotement, un chuchotis.",
      "5. **raconter** — Synonyme : narrer, relater, rapporter. Contraire : aucun ; « se taire » est ce qu’on fait à la place, pas l’inverse du geste. Famille : conter, un conteur, un conte, un racontar. Fabrication : ra- (c’est-à-dire re-) + conter. Raconter, c’est conter à quelqu’un.",
      "6. **répondre** — Synonyme : répliquer, riposter, rétorquer. Contraire : demander, interroger, questionner. Famille : une réponse, un répondeur, correspondre. Fabrication : re- + une racine qui voulait dire « promettre » — le re- est là depuis le latin, et on ne l’entend plus.",
      "7. **une question** — Synonyme : une interrogation, une demande. Contraire : une réponse. Famille : questionner, un questionnaire, un questionnement, une quête. Fabrication : -tion, qui transforme une action en nom.",
      "8. **expliquer** — Synonyme : éclaircir, détailler, faire comprendre. Contraire : embrouiller, compliquer. Famille : une explication, explicatif, inexplicable. Fabrication : -tion, -if, in- + -able, trois d’un coup.",
      "9. **bavard** — Synonyme : loquace, volubile, causant. Contraire : silencieux, taciturne, réservé. Famille : bavarder, le bavardage, un bavardage.",
      "10. **répéter** — Synonyme : redire, réitérer, rabâcher (péjoratif). Contraire : aucun. Famille : une répétition, un répétiteur, répétitif. Fabrication : re- + une racine latine qui voulait dire « demander ». Le re- est le même que dans redire.",
    ],
    "Ce qu’on observe : est-ce qu’il retrouve le re- de « raconter » et de « répéter » une fois qu’on le lui a montré une fois, ou est-ce qu’il faut le remontrer à chaque mot. Ce n’est pas un objectif de la séance — c’est un indicateur pour la suivante. Si le re- ne s’installe pas, la série 11 sur le dé- se fera sur cinq mots au lieu de dix, ce qui laisse la place de le revoir.",
  ),

  /* ================================================================== */
  /* SÉRIES 10 ET 11 — le 10 et le 20 mai                                */
  /* ================================================================== */

  f(
    "vo-mots-10",
    "Vocabulaire",
    "Série 10 · les mots de la mesure",
    [
      "Série à faire avec un mètre ruban posé sur la table. Chaque mot se vérifie sur un objet de la pièce, et la phrase d’emploi devient vraie au lieu d’être une phrase d’exemple.",
      "La difficulté de la série est ailleurs que dans les mots : quatre d’entre eux — la distance, estimer, la hauteur, contenir — n’ont pas de contraire simple, et « profond » n’en a pas du tout en français. On s’attend à des colonnes vides et on ne s’en inquiète pas.",
      "Si la fatigue vient, garder les mots 1 à 5 et faire les cinq autres à l’oral en rangeant le mètre ruban. Une fiche coupée en deux reste une fiche faite.",
    ],
    [
      "1. **long**, adjectif — le couloir est long de douze pas.",
      "2. **court**, adjectif — la corde est trop courte pour faire le tour du tronc.",
      "3. **peser**, verbe — il pèse la farine avant de commencer le gâteau.",
      "4. **profond**, adjectif — le puits est profond de huit mètres.",
      "5. **une distance**, nom — la distance entre les deux villages tient en une heure de marche.",
      "6. **exact**, adjectif — la mesure exacte est de trois mètres douze.",
      "7. **estimer**, verbe — il estime la hauteur de l’arbre à vue d’œil.",
      "8. **remplir**, verbe — il remplit la carafe jusqu’au trait.",
      "9. **la hauteur**, nom — la hauteur du mur dépasse celle du portail.",
      "10. **contenir**, verbe — la bouteille contient un litre et demi.",
    ],
    [
      "1. **long** — Synonyme : étendu, allongé, interminable (très long). Contraire : court, bref. Famille : la longueur, allonger, prolonger, longtemps, longuement.",
      "2. **court** — Synonyme : bref (dans le temps), petit. Contraire : long. Famille : raccourcir, un raccourci, écourter.",
      "3. **peser** — Synonyme : soupeser (à la main), mesurer le poids de. Contraire : aucun. Famille : le poids, la pesanteur, pesant, un pèse-personne.",
      "4. **profond** — Synonyme : creux (autrement dit), abyssal (très profond). Contraire : aucun mot simple en français — on dit « peu profond », en deux mots. C’est un vrai trou de la langue, et il mérite d’être signalé comme tel. Famille : la profondeur, approfondir, profondément.",
      "5. **une distance** — Synonyme : un écart, un éloignement, un intervalle. Contraire : aucun ; « la proximité » s’en approche sans être l’inverse. Famille : distant, distancer, se distancier.",
      "6. **exact** — Synonyme : précis, juste, rigoureux. Contraire : inexact, approximatif, faux. Famille : l’exactitude, exactement, inexact. Fabrication : in- + exact, le même in- que dans immobile et inquiet.",
      "7. **estimer** — Synonyme : évaluer, apprécier, jauger. Contraire : aucun ; « mesurer » n’est pas le contraire, c’est ce qu’on fait ensuite pour vérifier. Famille : une estimation, l’estime, inestimable.",
      "8. **remplir** — Synonyme : emplir, garnir, combler. Contraire : vider. Famille : plein, le remplissage, un trop-plein.",
      "9. **la hauteur** — Synonyme : l’altitude (en montagne), l’élévation. Contraire : aucun ; la profondeur n’est pas son contraire, c’est la même mesure prise dans l’autre sens. Famille : haut, hausser, rehausser, hautement. Fabrication : haut + -eur, comme large et largeur, long et longueur.",
      "10. **contenir** — Synonyme : renfermer, comporter. Contraire : aucun. Famille : le contenu, un contenant, une contenance, un conteneur, tenir.",
    ],
    "Le mot 4 est le meilleur repère de la série et il mérite un vrai temps d’arrêt : le français n’a pas de mot pour dire le contraire de « profond ». Ce qu’on regarde, c’est sa réaction — est-ce qu’il cherche encore dix minutes, ou est-ce qu’il note « pas de mot » et passe au suivant. Depuis la série 1, c’est cette réaction-là qu’on travaille, et elle se voit ici mieux que partout ailleurs.",
  ),

  f(
    "vo-mots-11",
    "Vocabulaire",
    "Série 11 · les mots de l’eau, et le préfixe dé-",
    [
      "Le fil du jour est le préfixe dé-, qui défait ce que le verbe fait : border et déborder, verser et déverser, tremper et détremper, geler et dégeler. Écrire la paire côte à côte à chaque fois.",
      "Attention à un piège que la série contient exprès : « découler » n’est pas le contraire de « couler », et « déverser » n’est pas le contraire de « verser ». Le dé- ne dit pas toujours l’inverse, il dit parfois « à partir de » ou « en grand ». Le lui montrer sur ces deux-là.",
      "Si la série est trop dense, faire cinq mots et cinq paires de dé-. C’est ce qui est prévu dans le cas où le re- de la série 9 n’avait pas pris.",
    ],
    [
      "1. **couler**, verbe — l’eau coule du robinet mal fermé.",
      "2. **plonger**, verbe — il plonge la main dans le seau pour attraper l’éponge.",
      "3. **humide**, adjectif — la cave est humide toute l’année.",
      "4. **fondre**, verbe — la neige fond dès que le soleil arrive sur le toit.",
      "5. **une source**, nom — la source sort de la roche au-dessus du hameau.",
      "6. **déborder**, verbe — la rivière a débordé après trois jours de pluie.",
      "7. **verser**, verbe — il verse le lait doucement pour ne pas en mettre à côté.",
      "8. **tremper**, verbe — elle trempe le pinceau dans l’eau avant de changer de couleur.",
      "9. **trouble**, adjectif — l’eau de la mare est trouble après l’orage.",
      "10. **une vague**, nom — une vague a mouillé nos chaussures d’un coup.",
    ],
    [
      "1. **couler** — Synonyme : s’écouler, ruisseler, dégouliner (familier). Contraire : aucun ; « s’arrêter » est ce qui arrive après. Famille : un écoulement, une coulée, un coulis, découler. Attention : « découler de » veut dire « venir de », pas « cesser de couler ». Le dé- ne dit pas l’inverse ici.",
      "2. **plonger** — Synonyme : immerger, enfoncer, tremper. Contraire : sortir, retirer, ressortir. Famille : un plongeon, un plongeur, une plongée, replonger.",
      "3. **humide** — Synonyme : moite, mouillé (plus fort). Contraire : sec. Famille : l’humidité, humidifier, un humidificateur, déshumidifier. Fabrication : dés- + humidifier, le même dé- qu’on travaille aujourd’hui, avec un s parce que le mot commence par une voyelle.",
      "4. **fondre** — Synonyme : se liquéfier, se dissoudre. Contraire : geler, durcir, se solidifier. Famille : la fonte, une fondue, refondre, un fondant.",
      "5. **une source** — Synonyme : une fontaine (si elle est aménagée), un point d’eau. Contraire : aucun ; l’embouchure est l’autre bout de la rivière, pas le contraire de la source. Famille : une ressource, ressourcer — ce qui resurgit, comme l’eau.",
      "6. **déborder** — Synonyme : se répandre, sortir de son lit. Contraire : rentrer dans son lit, baisser. Famille : un bord, border, aborder, un débordement. Fabrication : dé- + bord, sortir du bord. Celui-là, le dé- se voit à l’œil nu.",
      "7. **verser** — Synonyme : transvaser, répandre. Contraire : aucun. Famille : un versement, déverser, un déversoir, une averse. À montrer : une averse, c’est l’eau qui se verse d’un coup — le mot cachait ça depuis la série 1.",
      "8. **tremper** — Synonyme : plonger, imbiber, immerger. Contraire : sécher, essorer. Famille : une trempette, le trempage, détremper. Fabrication : dé- + tremper, et ici le dé- dit bien l’inverse.",
      "9. **trouble** — Synonyme : opaque, boueux, brouillé. Contraire : clair, limpide, transparent — les trois viennent de la série 5. Famille : troubler, se troubler, un trouble, un troublion.",
      "10. **une vague** — Synonyme : une lame (en mer), un rouleau ; la houle désigne l’ensemble, pas une seule. Contraire : aucun. Famille : une vaguelette, et c’est tout. La famille est l’une des plus courtes de l’année.",
    ],
    "Ce qu’on regarde aujourd’hui, c’est le mot 1 : accepte-t-il que « découler » ne soit pas le contraire de « couler » ? Un préfixe qui ne tient pas toujours sa promesse, c’est déstabilisant quand on vient de l’apprendre, et c’est pourtant ce qu’il faut savoir de lui. S’il résiste, ne pas argumenter : lui faire simplement lire à voix haute « cette décision découle de la précédente » et le laisser conclure lui-même.",
  ),

  /* ================================================================== */
  /* SÉRIES 12 À 15 — du 27 mai au 2 juillet                             */
  /* ================================================================== */

  f(
    "vo-mots-12",
    "Vocabulaire",
    "Série 12 · les mots de la peur",
    [
      "Série de mots abstraits, et c’est la première. On ne peut ni les montrer ni les goûter : la phrase d’emploi est tout ce qu’on a, et elle doit être lue avant chaque mot, à voix haute, sans commentaire.",
      "Ces dix mots-là servent à parler de ce qu’on ressent, et le travail consiste à les ranger, pas à les commenter. Rester sur le terrain du mot : ce qui ressemble à « craindre », ce qui s’y oppose, ce qui vient du même radical. Le reste n’a pas sa place dans cette séance.",
      "Si le sujet le gêne ou l’encombre, on échange cette série contre la 17, qui travaille exactement les mêmes constructions sur les mots du voyage. La série 12 pourra revenir plus tard, ou pas du tout.",
    ],
    [
      "1. **craindre**, verbe — il craint les orages depuis qu’un arbre est tombé dans le pré.",
      "2. **effrayer**, verbe — le bruit du volet l’a effrayé une seconde.",
      "3. **rassurer**, verbe — la lampe allumée dans le couloir le rassure.",
      "4. **trembler**, verbe — ses mains tremblent un peu quand il tient l’échelle.",
      "5. **le courage**, nom — il a eu le courage de redescendre chercher son frère.",
      "6. **oser**, verbe — il n’ose pas encore plonger de la planche haute.",
      "7. **prudent**, adjectif — il est prudent sur le sentier mouillé.",
      "8. **sursauter**, verbe — elle a sursauté quand la porte a claqué.",
      "9. **un danger**, nom — le danger vient surtout de la route, pas du chemin.",
      "10. **se cacher**, verbe — le chat se cache sous le lit à chaque visite.",
    ],
    [
      "1. **craindre** — Synonyme : redouter, appréhender, avoir peur de. Contraire : braver, affronter. Famille : la crainte, craintif, craintivement.",
      "2. **effrayer** — Synonyme : apeurer, épouvanter, terrifier (plus fort). Contraire : rassurer, apaiser. Famille : la frayeur, l’effroi, effroyable, s’effrayer.",
      "3. **rassurer** — Synonyme : apaiser, calmer, tranquilliser. Contraire : inquiéter, effrayer, alarmer. Famille : sûr, la sûreté, assurer, l’assurance, rassurant. Fabrication : re- + assurer, rendre sûr de nouveau. Le re- de la série 9, encore lui.",
      "4. **trembler** — Synonyme : frissonner, frémir, vibrer. Contraire : aucun. Famille : un tremblement, tremblotant, un tremblement de terre.",
      "5. **le courage** — Synonyme : la bravoure, l’audace, la hardiesse. Contraire : la peur, la lâcheté. Famille : courageux, courageusement, encourager, décourager. Fabrication : en- pour donner du courage, dé- pour l’enlever — les deux préfixes de l’année sur un seul radical.",
      "6. **oser** — Synonyme : se risquer à, avoir le cran de. Contraire : hésiter, renoncer, se retenir. Famille : osé, l’audace et audacieux (même racine latine, méconnaissable de l’extérieur).",
      "7. **prudent** — Synonyme : précautionneux, avisé, circonspect. Contraire : imprudent, téméraire. Famille : la prudence, prudemment, imprudent, l’imprudence. Fabrication : im- devant p, comme dans impossible — jamais in- devant p, b ou m.",
      "8. **sursauter** — Synonyme : tressaillir, avoir un sursaut. Contraire : aucun. Famille : un sursaut, sauter, un saut — la famille de la série 4, retrouvée sept mois plus tard.",
      "9. **un danger** — Synonyme : un risque, un péril, une menace. Contraire : la sécurité. Famille : dangereux, dangereusement.",
      "10. **se cacher** — Synonyme : se dissimuler, se terrer, se planquer (familier). Contraire : se montrer, apparaître, se découvrir. Famille : une cachette, cacher, un cache-cache, un cachot.",
    ],
    "Ce qu’on regarde ici n’est pas le vocabulaire mais la mécanique : le mot 5 porte en- et dé- sur le même radical, le mot 7 porte im-, le mot 3 porte re-. S’il retrouve les trois sans qu’on les nomme, les séries 7, 9 et 11 ont fait leur travail et la série 13 peut aller plus vite. S’il n’en retrouve qu’un, c’est celui-là qu’on garde et les deux autres attendront.",
  ),

  f(
    "vo-mots-13",
    "Vocabulaire",
    "Série 13 · les mots du travail, et le suffixe -able",
    [
      "Le fil du jour : -able dit que la chose est possible. Réparable, utilisable, capable, pardonnable. Et in- ou im- devant, la chose ne l’est plus. Le lui faire fabriquer plutôt que le lui expliquer : on donne un verbe, il produit l’adjectif.",
      "Six de ces dix mots ont une famille d’au moins quatre membres. On ne les écrit pas tous : trois suffisent par mot, et on choisit ceux qui ne se ressemblent pas.",
      "Si la séance déborde, faire la colonne « même famille » seule, sur les dix mots, et sauter synonymes et contraires. C’est la colonne qui porte tout le travail de la période 5.",
    ],
    [
      "1. **un effort**, nom — il a fallu un effort pour finir la dernière page.",
      "2. **achever**, verbe — il achève son dessin avant de ranger la table.",
      "3. **utile**, adjectif — ce carnet est utile pour noter les mots nouveaux.",
      "4. **capable**, adjectif — il est capable de monter la tente tout seul.",
      "5. **un métier**, nom — le métier de vitrier demande une main sûre.",
      "6. **organiser**, verbe — il organise ses affaires la veille au soir.",
      "7. **patient**, adjectif — il est patient avec le chien qui apprend à s’asseoir.",
      "8. **difficile**, adjectif — cette page est difficile, il la fait en deux fois.",
      "9. **réussir**, verbe — il a réussi à ouvrir le bocal en tapant sur le couvercle.",
      "10. **un progrès**, nom — le progrès se voit sur trois semaines, pas sur une séance.",
    ],
    [
      "1. **un effort** — Synonyme : la peine, l’application, le mal qu’on se donne. Contraire : aucun exact ; « le repos » est ce qui vient après, « la paresse » est un défaut, pas un contraire. Famille : s’efforcer, la force, forcer, renforcer.",
      "2. **achever** — Synonyme : terminer, finir, conclure. Contraire : commencer, entreprendre. Famille : l’achèvement, inachevé. Fabrication : in- + achevé, ce qui n’est pas fini.",
      "3. **utile** — Synonyme : pratique, commode, profitable. Contraire : inutile, superflu. Famille : l’utilité, utiliser, l’utilisation, inutile. Fabrication : -ité pour la qualité, -tion pour l’action, in- pour le contraire.",
      "4. **capable** — Synonyme : apte, en mesure de, à même de. Contraire : incapable. Famille : la capacité, incapable, l’incapacité. Fabrication : le -able est dans le mot depuis le départ ; in- se pose devant et renverse tout.",
      "5. **un métier** — Synonyme : une profession, un emploi, un travail. Contraire : aucun. Famille : très courte — « métier » vient de « ministère » par une longue série de déformations, et plus rien ne le montre. On ne fabrique rien avec, et ça vaut d’être dit.",
      "6. **organiser** — Synonyme : ranger, ordonner, préparer. Contraire : désorganiser, mélanger. Famille : une organisation, un organisateur, désorganiser, un organisme. Fabrication : -tion, -eur et dés- sur un seul radical, les trois outils de l’année réunis.",
      "7. **patient** — Synonyme : endurant, persévérant, calme. Contraire : impatient, pressé. Famille : la patience, patiemment, impatient, l’impatience. Fabrication : im- devant p, comme prudent et imprudent à la série 12.",
      "8. **difficile** — Synonyme : ardu, malaisé, compliqué. Contraire : aisé, abordable. Famille : la difficulté, difficilement.",
      "9. **réussir** — Synonyme : parvenir à, arriver à, aboutir. Contraire : échouer, rater, manquer. Famille : la réussite, réussi.",
      "10. **un progrès** — Synonyme : une avancée, une amélioration, un pas en avant. Contraire : un recul, une régression. Famille : progresser, la progression, progressif, progressivement.",
    ],
    "Le mot 5 est le repère du jour, et il est de la même espèce que le « profond » de la série 10 : une famille qui n’existe pas. S’il cherche longtemps à en fabriquer une, c’est le signe que la mécanique des préfixes tourne bien — trop bien pour ce mot-là. La réponse à lui donner est simple : toutes les familles ne sont pas riches, et on ne force pas un radical à produire ce qu’il n’a pas.",
  ),

  f(
    "vo-mots-14",
    "Vocabulaire",
    "Série 14 · les mots de l’amitié, et les préfixes in- et im-",
    [
      "Le fil du jour : in- devant une consonne, im- devant p, b et m. Infidèle, inamical, impardonnable. La règle se vérifie sur les dix mots, et elle n’a qu’une exception dans cette fiche — qu’on laisse trouver.",
      "Les mots 1 et 10 se répondent : « ami » et « ennemi » viennent du même radical, et « ennemi » est littéralement « celui qui n’est pas un ami ». À garder pour la fin : c’est la surprise de la série.",
      "Le jour où ça coince, on renverse l’exercice : l’adulte donne l’adjectif avec son préfixe — inutile, impossible, infidèle — et il retrouve le mot d’origine en enlevant le préfixe. C’est le même travail dans l’autre sens, et il demande moins.",
    ],
    [
      "1. **un ami**, nom — son ami du bout du chemin vient jouer le mercredi.",
      "2. **aider**, verbe — il aide son voisin à porter les bûches.",
      "3. **fidèle**, adjectif — il est fidèle aux rendez-vous du samedi.",
      "4. **confier**, verbe — il confie sa clé au voisin quand il part.",
      "5. **partager**, verbe — ils partagent le goûter en deux parts égales.",
      "6. **sincère**, adjectif — sa réponse est sincère, même si elle ne fait pas plaisir.",
      "7. **une dispute**, nom — la dispute s’est arrêtée dès qu’on a parlé d’autre chose.",
      "8. **pardonner**, verbe — il pardonne vite, mais il n’oublie pas.",
      "9. **généreux**, adjectif — il est généreux de son temps plus que de ses affaires.",
      "10. **un ennemi**, nom — dans ce jeu, chacun a un ennemi désigné au départ.",
    ],
    [
      "1. **un ami** — Synonyme : un camarade, un compagnon, un copain (familier). Contraire : un ennemi. Famille : l’amitié, amical, amicalement, inamical. Fabrication : in- devant une voyelle, et l’on entend bien les deux morceaux.",
      "2. **aider** — Synonyme : assister, secourir, épauler, soutenir. Contraire : gêner, nuire, abandonner. Famille : une aide, un aidant, un aide-mémoire.",
      "3. **fidèle** — Synonyme : loyal, constant, dévoué. Contraire : infidèle, changeant. Famille : la fidélité, infidèle, fidèlement. Fabrication : in- devant f, une consonne : c’est bien in- et pas im-.",
      "4. **confier** — Synonyme : remettre, laisser à la garde de. Contraire : reprendre, garder pour soi. Famille : la confiance, un confident, une confidence, se confier.",
      "5. **partager** — Synonyme : diviser, répartir, distribuer. Contraire : garder pour soi, accaparer. Famille : une part, un partage, une partie, un partenaire.",
      "6. **sincère** — Synonyme : franc, honnête, vrai. Contraire : hypocrite, faux, menteur. Famille : la sincérité, sincèrement. Remarque : il n’existe pas d’« insincère » en français courant, alors que la règle le permettrait. C’est l’exception annoncée.",
      "7. **une dispute** — Synonyme : une querelle, une brouille, une chamaillerie. Contraire : la réconciliation, l’entente. Famille : se disputer, disputé, une disputeuse.",
      "8. **pardonner** — Synonyme : excuser, absoudre, passer l’éponge. Contraire : en vouloir, garder rancune. Famille : le pardon, pardonnable, impardonnable. Fabrication : -able, puis im- devant p. Les deux outils de la période réunis dans un mot.",
      "9. **généreux** — Synonyme : désintéressé, large, donnant. Contraire : égoïste, avare, radin (familier). Famille : la générosité, généreusement.",
      "10. **un ennemi** — Synonyme : un adversaire, un rival, un opposant. Contraire : un ami, un allié. Famille : l’inimitié — in- + amitié, sous une forme ancienne. « Ennemi » lui-même est fait de in- + amicus : c’est « non-ami », et le préfixe s’est usé jusqu’à disparaître.",
    ],
    "Ce qu’on regarde, c’est le mot 6 : trouve-t-il que « insincère » manque ? Une règle qui marche presque toujours et qui laisse un trou, c’est exactement ce que la langue fait, et le remarquer vaut plus que de savoir la règle. Le mot 10 renseigne autrement : s’il retrouve « ami » dans « ennemi » après qu’on le lui a dit, il regarde désormais l’intérieur des mots. C’était le but de toute la seconde moitié de l’année.",
  ),

  f(
    "vo-mots-15",
    "Vocabulaire",
    "Série 15 · les mots du temps qui passe, et le suffixe -tion",
    [
      "Dernière série de l’année, et la plus chargée : dix mots dont quatre sont abstraits, et des familles qui portent deux ou trois préfixes chacune. Prévoir de n’en faire que six si le temps manque.",
      "Le fil du jour : -tion transforme une action en nom. Transformer donne une transformation, organiser une organisation, expliquer une explication. On relit la colonne « fabrication » des séries 7, 9, 11, 13 et 14 en ouverture, cinq minutes, pour voir ce qui a déjà été posé.",
      "Si la fatigue arrive, le mot 8 est le meilleur endroit pour s’arrêter : « une habitude » porte trois préfixes à lui seul, et il fait une fin de séance complète.",
    ],
    [
      "1. **durer**, verbe — la séance dure vingt-cinq minutes, pas une de plus.",
      "2. **autrefois**, adverbe — autrefois, le car passait deux fois par jour.",
      "3. **soudain**, adverbe — soudain, le vent a tourné.",
      "4. **ancien**, adjectif — ce cahier ancien appartenait à son arrière-grand-père.",
      "5. **récent**, adjectif — la trace est récente, elle date de ce matin.",
      "6. **commencer**, verbe — il commence toujours par le plus court.",
      "7. **attendre**, verbe — il attend que l’encre sèche avant de tourner la page.",
      "8. **une habitude**, nom — l’habitude du soir est de lire dix minutes.",
      "9. **une transformation**, nom — la transformation du jardin a pris deux printemps.",
      "10. **éternel**, adjectif — rien n’est éternel, même les arbres du parc.",
    ],
    [
      "1. **durer** — Synonyme : se prolonger, se poursuivre, persister. Contraire : cesser, s’arrêter. Famille : la durée, durable, la durabilité, endurer, l’endurance. Fabrication : -able et -ité l’un après l’autre sur le même radical.",
      "2. **autrefois** — Synonyme : jadis, anciennement, naguère (pour un passé récent). Contraire : aujourd’hui, maintenant, désormais. Famille : une fois, parfois, quelquefois, toutefois. Le mot est fait de deux mots collés : autre + fois.",
      "3. **soudain** — Synonyme : subitement, brusquement, tout à coup. Contraire : progressivement, peu à peu, lentement. Famille : soudainement, la soudaineté.",
      "4. **ancien** — Synonyme : vieux, antique, d’autrefois. Contraire : neuf, récent, moderne. Famille : l’ancienneté, anciennement, un ancien.",
      "5. **récent** — Synonyme : frais, nouveau, tout juste arrivé. Contraire : ancien, vieux, lointain. Famille : récemment — famille courte, là encore.",
      "6. **commencer** — Synonyme : débuter, entamer, amorcer. Contraire : finir, terminer, achever. Famille : un commencement, recommencer, un recommencement. Fabrication : -ement pour l’action, re- pour la refaire.",
      "7. **attendre** — Synonyme : patienter, guetter, espérer. Contraire : renoncer, partir. Famille : l’attente, attendu, inattendu, une inattention n’en est pas (autre radical). Fabrication : in- + attendu, ce qu’on n’attendait pas.",
      "8. **une habitude** — Synonyme : une coutume, un usage, une manie (péjoratif). Contraire : l’exception, la nouveauté. Famille : habituel, habituellement, s’habituer, déshabituer, inhabituel. Fabrication : trois préfixes sur un radical — dés-, in-, et rien du tout. La famille la plus complète de l’année.",
      "9. **une transformation** — Synonyme : un changement, une métamorphose, une évolution. Contraire : aucun ; « la conservation » s’en approche sans être l’inverse. Famille : transformer, transformable, un transformateur, la forme. Fabrication : -tion, -able et -eur sur « transformer », et sous tout ça le mot « forme ».",
      "10. **éternel** — Synonyme : perpétuel, sans fin, immortel. Contraire : passager, éphémère, temporaire. Famille : l’éternité, éternellement.",
    ],
    "Dernière séance de la série : ce qu’on regarde n’est plus un mot mais l’année. Ouvre-t-il un mot inconnu comme on ouvre une boîte — un radical, des bouts autour — ou attend-il qu’on le lui traduise ? Le mot 9 le dit à lui seul : s’il retrouve « forme » sous « transformation », le réflexe est là. Sinon, il reste les trois séries de réserve, et rien ne presse : ce réflexe-là met des années, pas des mois.",
  ),

  /* ================================================================== */
  /* RÉSERVE — trois séries qui ne tombent pas dans l’année               */
  /* Elles remplacent une série qui ne prend pas, ou prolongent une      */
  /* année qui déborde. Ce sont les plus exigeantes des dix-huit.        */
  /* ================================================================== */

  f(
    "vo-mots-16",
    "Vocabulaire",
    "Série 16 · les mots de la mémoire et de l’oubli",
    [
      "Série de réserve, à la place d’une autre ou en plus. Tous les mots sont abstraits et toutes les familles sont construites : elle suppose que les préfixes des séries 7 à 14 sont installés.",
      "Ces mots parlent de ce qu’on retient et de ce qu’on perd. Rester sur le mot et sa famille : ce n’est pas une séance pour parler de ce qu’il retient, lui.",
      "S’il bute, revenir au geste de la série 1 — trois colonnes, quatre mots, et on s’arrête. Une fiche de réserve se coupe plus facilement qu’une fiche de l’année.",
    ],
    [
      "1. **se souvenir**, verbe — il se souvient du nom de la rue, pas du numéro.",
      "2. **oublier**, verbe — il a oublié le carnet sur la table de la cuisine.",
      "3. **retenir**, verbe — il retient les dates en les écrivant deux fois.",
      "4. **apprendre**, verbe — il apprend la carte de la région en la redessinant.",
      "5. **une trace**, nom — une trace de boue dit par où il est entré.",
      "6. **familier**, adjectif — cette odeur lui est familière sans qu’il sache d’où.",
      "7. **une preuve**, nom — la preuve est dans le carnet, à la page du mardi.",
      "8. **reconnaître**, verbe — il reconnaît la voiture au bruit du moteur.",
      "9. **l’imagination**, nom — son imagination remplit tout ce que la photo ne montre pas.",
      "10. **le passé**, nom — le passé se raconte différemment selon qui parle.",
    ],
    [
      "1. **se souvenir** — Synonyme : se rappeler, se remémorer, garder en mémoire. Contraire : oublier. Famille : un souvenir — et rien d’autre. La famille tient en un mot, ce qui surprend pour un verbe aussi courant.",
      "2. **oublier** — Synonyme : omettre, perdre de vue, laisser échapper. Contraire : se souvenir, retenir. Famille : l’oubli, un oubli, une oubliette, oublieux.",
      "3. **retenir** — Synonyme : mémoriser, garder, apprendre. Contraire : oublier, lâcher (pour l’autre sens du mot). Famille : tenir, la tenue, une retenue, soutenir, contenir. Fabrication : re-, sou-, con- sur un seul radical — et « contenir » vient de la série 10.",
      "4. **apprendre** — Synonyme : étudier, assimiler, mémoriser. Contraire : oublier, désapprendre. Famille : un apprenti, l’apprentissage, un apprenant, réapprendre. Fabrication : -issage pour le processus, -ant pour la personne, ré- pour recommencer.",
      "5. **une trace** — Synonyme : une marque, une empreinte, un indice. Contraire : aucun. Famille : tracer, un tracé, un traceur, retracer.",
      "6. **familier** — Synonyme : connu, habituel, proche. Contraire : étranger, inconnu, inhabituel. Famille : la famille, la familiarité, familièrement, se familiariser. Le mot vient de « famille » : est familier ce qui est de la maison.",
      "7. **une preuve** — Synonyme : un témoignage, une démonstration, un indice (plus faible). Contraire : aucun. Famille : prouver, éprouver, une épreuve, approuver, une preuve.",
      "8. **reconnaître** — Synonyme : identifier, distinguer, se rappeler. Contraire : confondre, méconnaître. Famille : connaître, la connaissance, la reconnaissance, méconnaissable. Fabrication : re-, mé-, et -able. Trois outils sur un radical.",
      "9. **l’imagination** — Synonyme : la fantaisie, l’inventivité, la créativité. Contraire : aucun ; « le réalisme » n’est pas l’inverse, c’est une autre façon de regarder. Famille : imaginer, imaginaire, imaginable, inimaginable, une image. Fabrication : -tion, -aire, -able, in- + -able — et au fond de tout, « image ».",
      "10. **le passé** — Synonyme : l’autrefois, l’ancien temps. Contraire : l’avenir, le futur ; le présent aussi, d’une autre façon. Famille : passer, un passage, un passant, dépasser, repasser.",
    ],
    "Les mots 3 et 8 sont les deux à surveiller : ils portent chacun trois préfixes, et ce sont ceux de toute l’année. S’il les démonte sans aide, la série 18 est à sa portée. S’il n’en démonte qu’un, prendre la série 17 à la place : elle travaille les mêmes outils sur des mots concrets, ce qui coûte moins.",
  ),

  f(
    "vo-mots-17",
    "Vocabulaire",
    "Série 17 · les mots du voyage",
    [
      "Série de réserve, et la plus concrète des trois : elle sert quand une série abstraite n’a pas pris et qu’il faut revoir les mêmes constructions sur des mots qu’on peut montrer sur une carte.",
      "Deux mots de cette fiche ont une famille inexistante — l’étape, et presque le bagage. Ce sont eux qui font le travail : après quinze séries, une famille qui n’existe pas ne devrait plus inquiéter.",
      "Si la séance tourne court, la faire avec une carte routière ouverte et les mots à l’oral. Dix mots dits en suivant une route valent dix mots écrits.",
    ],
    [
      "1. **partir**, verbe — il part avant le lever du jour pour être là à midi.",
      "2. **un chemin**, nom — le chemin monte doucement jusqu’au col.",
      "3. **s’égarer**, verbe — ils se sont égarés une heure avant de retrouver le balisage.",
      "4. **une étape**, nom — l’étape du jour fait quatorze kilomètres.",
      "5. **lointain**, adjectif — le clocher lointain sert de repère toute la matinée.",
      "6. **une carte**, nom — la carte est pliée dans la poche de devant.",
      "7. **quitter**, verbe — il quitte la maison à sept heures et rentre à la nuit.",
      "8. **accueillir**, verbe — les cousins nous accueillent avec un feu déjà allumé.",
      "9. **étranger**, adjectif — le mot est étranger, il ne ressemble à rien de connu.",
      "10. **revenir**, verbe — il revient par le même chemin pour ne pas se tromper.",
    ],
    [
      "1. **partir** — Synonyme : s’en aller, quitter, décoller (en avion). Contraire : arriver, rester, revenir. Famille : un départ, repartir, en partance.",
      "2. **un chemin** — Synonyme : un sentier, une piste, une voie. Contraire : aucun. Famille : cheminer, un cheminement, acheminer, un cheminot.",
      "3. **s’égarer** — Synonyme : se perdre, se fourvoyer. Contraire : se repérer, retrouver son chemin. Famille : un égarement, égaré, garer, une gare — et oui, « garer » et « s’égarer » sont de la même famille : l’un met à l’abri, l’autre en sort.",
      "4. **une étape** — Synonyme : un tronçon, une portion, une halte. Contraire : aucun. Famille : inexistante en français courant. On ne fabrique rien sur « étape », et c’est ainsi.",
      "5. **lointain** — Synonyme : éloigné, distant, reculé. Contraire : proche, voisin, tout près. Famille : loin, au loin, éloigner, l’éloignement.",
      "6. **une carte** — Synonyme : un plan, un atlas (relié). Contraire : aucun. Famille : un carton, une cartouche, un cartable, la cartographie. Famille inattendue, et vraie : tout vient du papier fort.",
      "7. **quitter** — Synonyme : abandonner, laisser, s’éloigner de. Contraire : rejoindre, retrouver, rester. Famille : quitte, acquitter, un acquittement, une quittance.",
      "8. **accueillir** — Synonyme : recevoir, héberger, souhaiter la bienvenue. Contraire : renvoyer, chasser, éconduire. Famille : l’accueil, accueillant, cueillir, recueillir, un recueil.",
      "9. **étranger** — Synonyme : inconnu, extérieur, exotique. Contraire : familier, connu, local. Famille : étrange, étrangement, l’étrangeté. Ce qui vient d’ailleurs et ce qui est bizarre portent le même radical, et ça se discute.",
      "10. **revenir** — Synonyme : rentrer, retourner, regagner. Contraire : partir, s’éloigner. Famille : venir, la venue, un revenant, parvenir, devenir, une aubaine n’en est pas. Fabrication : re-, par-, de- sur le même radical.",
    ],
    "Le mot 4 est le repère : après quinze séries, une case « famille » laissée vide doit se faire en dix secondes, sans discussion. Si ça prend encore cinq minutes, c’est la seule chose à reprendre de cette séance, et elle se reprend en relisant ensemble les cases vides des séries 1, 3 et 10 — elles sont annotées pour ça.",
  ),

  f(
    "vo-mots-18",
    "Vocabulaire",
    "Série 18 · les mots pour nuancer un jugement",
    [
      "La plus exigeante des dix-huit, à garder pour la fin d’une année qui a bien tourné. Dix mots abstraits, dix familles construites, et des contraires qui ne sont presque jamais de vrais contraires.",
      "Le fil : ces mots servent à dire à quel point on est sûr. Les ranger sur une ligne tracée sur le cahier, de « je suppose » à « c’est évident », et placer chaque mot dessus avant de remplir les colonnes.",
      "Si la séance est trop lourde, en faire cinq et garder les cinq autres pour une autre fois. Cette fiche est faite pour être coupée en deux, et elle ne perd rien à l’être.",
    ],
    [
      "1. **juger**, verbe — on juge le travail sur la semaine, pas sur une page.",
      "2. **certain**, adjectif — il est certain d’avoir refermé la porte.",
      "3. **douter**, verbe — il doute du chiffre et refait l’opération.",
      "4. **probable**, adjectif — il est probable qu’il pleuve avant ce soir.",
      "5. **nuancer**, verbe — il nuance sa réponse en ajoutant le mot « souvent ».",
      "6. **exagérer**, verbe — il exagère la hauteur du mur d’au moins un mètre.",
      "7. **évident**, adjectif — la réponse est évidente une fois qu’on a le dessin sous les yeux.",
      "8. **une raison**, nom — la raison du retard tient en un mot : le brouillard.",
      "9. **supposer**, verbe — il suppose que le chat est entré par la fenêtre du haut.",
      "10. **admettre**, verbe — il admet qu’il s’était trompé de colonne.",
    ],
    [
      "1. **juger** — Synonyme : apprécier, estimer, évaluer. Contraire : aucun. Famille : un jugement, un juge, préjuger, un préjugé, judiciaire. Fabrication : pré- + juger, juger avant d’avoir regardé — le mot dit exactement ce qu’il reproche.",
      "2. **certain** — Synonyme : sûr, convaincu, assuré. Contraire : incertain, hésitant, douteux. Famille : la certitude, certainement, incertain, l’incertitude. Fabrication : -itude pour la qualité, in- pour l’inverse.",
      "3. **douter** — Synonyme : hésiter, se méfier de, mettre en question. Contraire : croire, affirmer, être sûr. Famille : le doute, douteux, indubitable (soutenu), redouter. « Redouter », c’est douter deux fois, et le sens a glissé jusqu’à la peur.",
      "4. **probable** — Synonyme : vraisemblable, plausible, attendu. Contraire : improbable, invraisemblable. Famille : la probabilité, probablement, improbable, prouver. Fabrication : -able, -ité, im- — et sous tout ça, « prouver », de la série 16.",
      "5. **nuancer** — Synonyme : atténuer, modérer, relativiser. Contraire : trancher, généraliser, affirmer. Famille : une nuance, nuancé, un nuancier.",
      "6. **exagérer** — Synonyme : amplifier, grossir, forcer le trait. Contraire : minimiser, atténuer, réduire. Famille : une exagération, exagéré, exagérément. Fabrication : -tion, encore.",
      "7. **évident** — Synonyme : manifeste, flagrant, clair. Contraire : obscur, caché, douteux. Famille : l’évidence, évidemment. Le mot contient « voir » sous une forme latine : est évident ce qui se voit d’un coup.",
      "8. **une raison** — Synonyme : un motif, une cause, une explication. Contraire : aucun ; « une conséquence » est l’autre bout de la chaîne, pas l’inverse. Famille : raisonner, un raisonnement, raisonnable, déraisonnable. Fabrication : -able, puis dé- devant.",
      "9. **supposer** — Synonyme : présumer, imaginer, conjecturer. Contraire : constater, vérifier, savoir. Famille : une supposition, un présupposé, supposé, poser. Fabrication : sous- devenu sup-, et « poser » au fond : supposer, c’est poser dessous, sans le dire.",
      "10. **admettre** — Synonyme : reconnaître, accorder, concéder. Contraire : nier, refuser, contester. Famille : une admission, admissible, inadmissible, admis, mettre. Fabrication : ad- + mettre, puis -ible et in- + -ible.",
    ],
    "Ce qu’on regarde n’est plus une case mais une phrase : lui demander, à la fin, de dire la même chose deux fois — une fois avec « je suppose », une fois avec « c’est évident ». S’il entend la différence entre les deux, les dix-huit séries ont servi à quelque chose. S’il ne l’entend pas, ce n’est pas un manque de vocabulaire mais un travail d’une autre nature, qui se fait en parlant et pas en remplissant des colonnes.",
  ),
];
