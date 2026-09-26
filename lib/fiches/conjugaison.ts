/**
 * Conjugaison et homophones — les deux rituels d’orthographe grammaticale.
 *
 * Ils tombent vingt fois dans l’année, et jusqu’ici ni les verbes ni les textes
 * n’existaient nulle part : « trois verbes, aux quatre temps connus » laissait
 * l’adulte choisir les verbes onze fois de suite, et « un texte à trous »
 * supposait un texte que personne n’avait écrit.
 *
 * Ce fichier porte donc **les verbes, temps par temps, personne par personne,
 * écrits en toutes lettres**, et **les textes à trous entiers avec leur
 * corrigé**. Un adulte qui ouvre une fiche n’a besoin de rien d’autre : pas de
 * Bescherelle, pas de manuel, pas de dix minutes de préparation la veille.
 *
 * Ce qu’une fiche donne, et pourquoi : voir `lib/fiches/types.ts`.
 *
 * **Réservé aux adultes** : ces fiches portent les corrigés.
 *
 * ## Ce que la progression suit
 *
 * **Les quatre temps sont disponibles dès la première fiche.** Le présent est
 * passé le 28 septembre, l’imparfait le 2 novembre, le futur le 5, le passé
 * composé le 9 — et la première « Conjugaison » tombe le 23 novembre :
 * la trame ne met pas ce rituel en service avant le passé composé. Aucune
 * fiche ne demande donc un temps qui n’a pas été vu, et aucune n’a besoin de
 * s’en excuser. La progression se joue ailleurs : sur les **verbes**.
 *
 * Les fiches 1 et 2 prennent des verbes du premier groupe parfaitement
 * réguliers — la page est longue, et c’est tout ce qu’on lui demande au départ.
 * La 3 ajoute l’auxiliaire être au passé composé et l’accord du participe ; la
 * 4 passe au deuxième groupe ; la 5 prend être et avoir eux-mêmes. La 6 attend
 * le 8 mars, jour de la leçon « Les verbes qui changent de radical », pour
 * demander manger, lancer et appeler. Les fiches 7 à 11 prennent les huit
 * irréguliers que la leçon du présent nomme — aller, faire, dire, venir,
 * pouvoir, vouloir, voir, prendre — et finissent sur le participe passé, qui
 * est le vrai piège de l’année. Les fiches 12 et 13 sortent de ces huit ; elles
 * ne tombent pas dans l’année et ne servent qu’à une année qui déborde.
 *
 * **Les homophones commencent après leur leçon.** La leçon « Les mots qui
 * se prononcent pareil » tombe le 17 novembre, et le rituel pour la
 * première fois le 26 novembre. La fiche 1 écrit quand même les deux tests en
 * haut de la page et les y laisse : c’est la première fois qu’il les applique
 * à un texte entier. Les dix autres s’appuient sur la leçon.
 *
 * **Le programme ne voit que quatre paires.** a/à, est/et, son/sont, ont/on —
 * et rien d’autre. Ni ce/se, ni ces/ses, ni ou/où, ni la/là/l’a n’apparaissent
 * dans une leçon de l’année. Les fiches s’en tiennent donc aux quatre, et la
 * difficulté monte autrement : d’abord deux paires, puis deux autres, puis
 * trois, puis les quatre ; et surtout les textes se densifient et se mettent à
 * poser les endroits qui piègent vraiment — « on a », « ont eu », « est à »,
 * « son … sont » dans la même phrase. Si une leçon sur ce/se ou ou/où est
 * ajoutée au programme un jour, les fiches 10 et 11 sont les bonnes à reprendre.
 *
 * Rien de tout ceci n’a été relu par un enseignant. Ça doit l’être.
 */

import { f, type Fiche } from "./types";

export const conjugaison: Fiche[] = [
  /* ================================================================== */
  /* CONJUGAISON — onze séances, du 23 novembre au 1er juillet,         */
  /* et deux fiches de réserve.                                          */
  /* ================================================================== */

  f(
    "cj-verbes-01",
    "Conjugaison",
    "Verbes 1 · chanter, marcher, trouver, aux quatre temps",
    [
      "La page se tient toujours pareil : trois colonnes, une par verbe, et quatre blocs de six lignes, un par temps. C’est la même disposition toute l’année, et c’est elle qui fait gagner du temps à partir de la deuxième fois.",
      "On écrit les six pronoms — je, tu, il, nous, vous, ils — avant de conjuguer quoi que ce soit. La page est alors déjà à moitié faite, et il n’en saute aucun.",
      "Le jour où ça coince : un seul verbe, aux quatre temps. Vingt-quatre formes écrites posément valent mieux que soixante-douze commencées. La fiche se reprend telle quelle la fois suivante, avec le deuxième verbe en plus.",
    ],
    [
      "**Le présent** — chanter, marcher, trouver, aux six personnes : je, tu, il, nous, vous, ils.",
      "**L’imparfait** — les mêmes trois verbes, aux six personnes.",
      "**Le futur** — les mêmes trois verbes, aux six personnes.",
      "**Le passé composé** — les mêmes trois verbes, aux six personnes. Les trois prennent l’auxiliaire avoir.",
      "**La question du jour**, une fois les quatre blocs écrits : des quatre temps de la page, lequel s’écrit en deux mots, et pourquoi ?",
    ],
    [
      "**Le présent.** chanter : je chante, tu chantes, il chante, nous chantons, vous chantez, ils chantent. marcher : je marche, tu marches, il marche, nous marchons, vous marchez, ils marchent. trouver : je trouve, tu trouves, il trouve, nous trouvons, vous trouvez, ils trouvent.",
      "**L’imparfait.** chanter : je chantais, tu chantais, il chantait, nous chantions, vous chantiez, ils chantaient. marcher : je marchais, tu marchais, il marchait, nous marchions, vous marchiez, ils marchaient. trouver : je trouvais, tu trouvais, il trouvait, nous trouvions, vous trouviez, ils trouvaient.",
      "**Le futur.** chanter : je chanterai, tu chanteras, il chantera, nous chanterons, vous chanterez, ils chanteront. marcher : je marcherai, tu marcheras, il marchera, nous marcherons, vous marcherez, ils marcheront. trouver : je trouverai, tu trouveras, il trouvera, nous trouverons, vous trouverez, ils trouveront.",
      "**Le passé composé.** chanter : j’ai chanté, tu as chanté, il a chanté, nous avons chanté, vous avez chanté, ils ont chanté. marcher : j’ai marché, tu as marché, il a marché, nous avons marché, vous avez marché, ils ont marché. trouver : j’ai trouvé, tu as trouvé, il a trouvé, nous avons trouvé, vous avez trouvé, ils ont trouvé.",
      "**La question du jour.** Le passé composé. Il est fait de deux morceaux : l’auxiliaire avoir conjugué au présent, puis le participe passé, qui ne bouge pas de la colonne. Les trois autres temps tiennent en un seul mot — un radical, une terminaison. C’est pour cette raison qu’on l’appelle un temps composé.",
    ],
    "Ce qu’on observe : le -ent de la troisième personne du pluriel au présent. Il ne s’entend pas — « il chante » et « ils chantent » se disent exactement pareil — et c’est le pronom écrit devant qui doit le déclencher. S’il écrit « ils chante », l’oreille n’y est pour rien : la main va plus vite que l’œil. On reprend demain en lui faisant lire son propre pronom à voix haute avant d’écrire chaque ligne.",
  ),

  f(
    "cj-verbes-02",
    "Conjugaison",
    "Verbes 2 · regarder, sauter, penser, et le futur sans s",
    [
      "Même disposition que la fois d’avant. Ouvrir à côté la page de la fiche 1 : voir qu’on refait la même chose avec d’autres verbes est la moitié du travail.",
      "Le fil du jour est le futur. Toutes ses formes contiennent un r, et ce r vient de l’infinitif : regarder donne je regarder-ai. Le lui faire remarquer sur les dix-huit formes du bloc plutôt que le lui dire.",
      "Le jour où ça coince : on garde le présent et le futur, et on laisse l’imparfait et le passé composé pour la fois suivante. Deux temps sur trois verbes font une page entière et honnête.",
    ],
    [
      "**Le présent** — regarder, sauter, penser, aux six personnes.",
      "**L’imparfait** — les mêmes trois verbes, aux six personnes.",
      "**Le futur** — les mêmes trois verbes, aux six personnes. Écrire le r de chaque forme en couleur, ou l’entourer.",
      "**Le passé composé** — les mêmes trois verbes, aux six personnes, avec l’auxiliaire avoir.",
      "**La question du jour** : « je regarderai » et « je regarderais » — une seule lettre change. Laquelle, et qu’est-ce qu’elle change ?",
    ],
    [
      "**Le présent.** regarder : je regarde, tu regardes, il regarde, nous regardons, vous regardez, ils regardent. sauter : je saute, tu sautes, il saute, nous sautons, vous sautez, ils sautent. penser : je pense, tu penses, il pense, nous pensons, vous pensez, ils pensent.",
      "**L’imparfait.** regarder : je regardais, tu regardais, il regardait, nous regardions, vous regardiez, ils regardaient. sauter : je sautais, tu sautais, il sautait, nous sautions, vous sautiez, ils sautaient. penser : je pensais, tu pensais, il pensait, nous pensions, vous pensiez, ils pensaient.",
      "**Le futur.** regarder : je regarderai, tu regarderas, il regardera, nous regarderons, vous regarderez, ils regarderont. sauter : je sauterai, tu sauteras, il sautera, nous sauterons, vous sauterez, ils sauteront. penser : je penserai, tu penseras, il pensera, nous penserons, vous penserez, ils penseront.",
      "**Le passé composé.** regarder : j’ai regardé, tu as regardé, il a regardé, nous avons regardé, vous avez regardé, ils ont regardé. sauter : j’ai sauté, tu as sauté, il a sauté, nous avons sauté, vous avez sauté, ils ont sauté. penser : j’ai pensé, tu as pensé, il a pensé, nous avons pensé, vous avez pensé, ils ont pensé.",
      "**La question du jour.** Le s. « Je regarderai » est du futur : la chose arrivera. « Je regarderais » est du conditionnel : elle arriverait à une condition — « je regarderais si tu me montrais ». Une lettre muette, et toute la certitude de la phrase bascule. C’est pour cela qu’on n’écrit jamais un futur au hasard.",
    ],
    "Ce qu’on regarde : le nous et le vous de l’imparfait. « Nous regardions », « vous regardiez » — le i se voit et ne s’entend qu’à peine, et c’est l’endroit où les formes se perdent. S’il écrit « nous regardons » dans le bloc de l’imparfait, il a recopié le présent sans le vouloir. On reprend demain en écrivant les deux formes l’une sous l’autre, et en lui faisant dire laquelle est du passé.",
  ),

  f(
    "cj-verbes-03",
    "Conjugaison",
    "Verbes 3 · tomber, rester, arriver, et l’auxiliaire être",
    [
      "Nouveauté du jour, et elle est grosse : ces trois verbes-là forment leur passé composé avec **être**, pas avec avoir. Et avec être, le participe s’accorde avec le sujet, comme un adjectif.",
      "Faire écrire le bloc du passé composé en deux temps : d’abord les six formes au masculin, puis, en dessous, ce que devient chacune si le sujet est féminin. Voir « il est tombé » et « elle est tombée » l’un sous l’autre vaut toutes les explications.",
      "Le jour où ça coince : on fait les trois premiers temps, qui ne changent pas d’un verbe à l’autre, et on laisse le passé composé entier pour la prochaine fois. C’est lui qui demande le plus, et il ne gagne rien à être fait en fin de séance.",
    ],
    [
      "**Le présent** — tomber, rester, arriver, aux six personnes.",
      "**L’imparfait** — les mêmes trois verbes, aux six personnes.",
      "**Le futur** — les mêmes trois verbes, aux six personnes.",
      "**Le passé composé** — les mêmes trois verbes, aux six personnes, avec l’auxiliaire **être**, et le participe accordé avec le sujet.",
      "**La question du jour** : pourquoi écrit-on « elles sont tombées » avec deux lettres de plus, alors qu’on écrit « elles ont chanté » sans rien ?",
    ],
    [
      "**Le présent.** tomber : je tombe, tu tombes, il tombe, nous tombons, vous tombez, ils tombent. rester : je reste, tu restes, il reste, nous restons, vous restez, ils restent. arriver : j’arrive, tu arrives, il arrive, nous arrivons, vous arrivez, ils arrivent.",
      "**L’imparfait.** tomber : je tombais, tu tombais, il tombait, nous tombions, vous tombiez, ils tombaient. rester : je restais, tu restais, il restait, nous restions, vous restiez, ils restaient. arriver : j’arrivais, tu arrivais, il arrivait, nous arrivions, vous arriviez, ils arrivaient.",
      "**Le futur.** tomber : je tomberai, tu tomberas, il tombera, nous tomberons, vous tomberez, ils tomberont. rester : je resterai, tu resteras, il restera, nous resterons, vous resterez, ils resteront. arriver : j’arriverai, tu arriveras, il arrivera, nous arriverons, vous arriverez, ils arriveront.",
      "**Le passé composé, avec être.** tomber : je suis tombé, tu es tombé, il est tombé, nous sommes tombés, vous êtes tombés, ils sont tombés — et au féminin : je suis tombée, tu es tombée, elle est tombée, nous sommes tombées, vous êtes tombées, elles sont tombées. rester : je suis resté, tu es resté, il est resté, nous sommes restés, vous êtes restés, ils sont restés — je suis restée, tu es restée, elle est restée, nous sommes restées, vous êtes restées, elles sont restées. arriver : je suis arrivé, tu es arrivé, il est arrivé, nous sommes arrivés, vous êtes arrivés, ils sont arrivés — je suis arrivée, tu es arrivée, elle est arrivée, nous sommes arrivées, vous êtes arrivées, elles sont arrivées.",
      "**La question du jour.** Parce que l’auxiliaire n’est pas le même. Avec **être**, le participe se comporte comme un adjectif et suit le sujet : elles sont tombées, comme on dirait « elles sont contentes ». Avec **avoir**, il ne s’accorde pas avec le sujet : elles ont chanté, et non « elles ont chantées ». Ce qui décide s’il faut accorder, c’est l’auxiliaire.",
    ],
    "Le bloc du passé composé est le seul à surveiller aujourd’hui. On y observe une chose et une seule : écrit-il « nous sommes tombé » ou « nous sommes tombés » ? Le s du pluriel ne s’entend pas, et c’est l’auxiliaire être qui doit le déclencher. S’il l’oublie, la reprise du lendemain tient en une question posée avant chaque ligne : « avoir ou être ? » Tant que l’auxiliaire est identifié, l’accord suit tout seul.",
  ),

  f(
    "cj-verbes-04",
    "Conjugaison",
    "Verbes 4 · finir, grandir, choisir — le deuxième groupe",
    [
      "Trois verbes du deuxième groupe, et le test qui les reconnaît : à « nous », ils font -issons. Nous finissons, nous grandissons, nous choisissons. Le lui faire vérifier sur les trois avant de commencer la page.",
      "Le -iss- est l’affaire du jour : il apparaît au pluriel du présent et sur **toutes** les personnes de l’imparfait, et il disparaît au futur et au participe passé. Une croix dans la marge en face de chaque forme qui le contient suffit à le rendre visible.",
      "Le jour où ça coince : on fait le présent et l’imparfait des trois verbes, qui sont là où le -iss- se joue, et on s’arrête. Le futur du deuxième groupe se fait sur l’infinitif entier, sans -iss-, et il attendra sans dommage.",
    ],
    [
      "**Le présent** — finir, grandir, choisir, aux six personnes.",
      "**L’imparfait** — les mêmes trois verbes, aux six personnes.",
      "**Le futur** — les mêmes trois verbes, aux six personnes.",
      "**Le passé composé** — les mêmes trois verbes, aux six personnes, avec l’auxiliaire avoir.",
      "**La question du jour** : dans quels blocs de la page trouve-t-on le morceau -iss- ? Et dans lesquels a-t-il disparu ?",
    ],
    [
      "**Le présent.** finir : je finis, tu finis, il finit, nous finissons, vous finissez, ils finissent. grandir : je grandis, tu grandis, il grandit, nous grandissons, vous grandissez, ils grandissent. choisir : je choisis, tu choisis, il choisit, nous choisissons, vous choisissez, ils choisissent.",
      "**L’imparfait.** finir : je finissais, tu finissais, il finissait, nous finissions, vous finissiez, ils finissaient. grandir : je grandissais, tu grandissais, il grandissait, nous grandissions, vous grandissiez, ils grandissaient. choisir : je choisissais, tu choisissais, il choisissait, nous choisissions, vous choisissiez, ils choisissaient.",
      "**Le futur.** finir : je finirai, tu finiras, il finira, nous finirons, vous finirez, ils finiront. grandir : je grandirai, tu grandiras, il grandira, nous grandirons, vous grandirez, ils grandiront. choisir : je choisirai, tu choisiras, il choisira, nous choisirons, vous choisirez, ils choisiront.",
      "**Le passé composé.** finir : j’ai fini, tu as fini, il a fini, nous avons fini, vous avez fini, ils ont fini. grandir : j’ai grandi, tu as grandi, il a grandi, nous avons grandi, vous avez grandi, ils ont grandi. choisir : j’ai choisi, tu as choisi, il a choisi, nous avons choisi, vous avez choisi, ils ont choisi.",
      "**La question du jour.** Le -iss- est dans les trois personnes du pluriel au présent — nous finissons, vous finissez, ils finissent — et dans les **six** personnes de l’imparfait. Il n’est nulle part au futur, qui se fait sur l’infinitif entier, ni au participe passé, qui se termine simplement par -i : fini, grandi, choisi. C’est ce qui rend le deuxième groupe reconnaissable et régulier à la fois.",
    ],
    "Ce qu’on regarde : le singulier du présent. « Je finis, tu finis, il finit » — le s, le s, le t, sans -iss-. C’est l’endroit où le -iss- déborde quand il vient d’être repéré, et « je finissis » est une faute de bonne foi : il a trouvé la règle et l’a appliquée partout. Si elle apparaît, c’est un signe encourageant à ses yeux comme aux nôtres, et la reprise se fait en lisant à voix haute le seul bloc du présent, ligne par ligne.",
  ),

  f(
    "cj-verbes-05",
    "Conjugaison",
    "Verbes 5 · être, avoir, aimer — les deux qui servent partout",
    [
      "Être et avoir ne sont pas trois verbes parmi d’autres : ce sont eux qui portent tous les passés composés de l’année. Les conjuguer pour eux-mêmes une fois vaut dix corrections plus tard.",
      "Le troisième verbe, aimer, est là exprès : il est parfaitement régulier, et il sert de point de comparaison. Écrire sa colonne en premier, puis les deux autres à côté, fait voir d’un coup ce qui est irrégulier chez être et avoir.",
      "Le jour où ça coince : être seul, aux quatre temps. C’est le verbe le plus irrégulier du français et le plus fréquent ; une page qui ne contient que lui est une page pleine.",
    ],
    [
      "**Le présent** — être, avoir, aimer, aux six personnes.",
      "**L’imparfait** — les mêmes trois verbes, aux six personnes.",
      "**Le futur** — les mêmes trois verbes, aux six personnes.",
      "**Le passé composé** — les mêmes trois verbes, aux six personnes. Être et avoir prennent avoir comme auxiliaire, comme aimer.",
      "**La question du jour** : « ils ont » et « ils sont » se ressemblent à une lettre près. Comment savoir lequel écrire, sans hésiter ?",
    ],
    [
      "**Le présent.** être : je suis, tu es, il est, nous sommes, vous êtes, ils sont. avoir : j’ai, tu as, il a, nous avons, vous avez, ils ont. aimer : j’aime, tu aimes, il aime, nous aimons, vous aimez, ils aiment.",
      "**L’imparfait.** être : j’étais, tu étais, il était, nous étions, vous étiez, ils étaient. avoir : j’avais, tu avais, il avait, nous avions, vous aviez, ils avaient. aimer : j’aimais, tu aimais, il aimait, nous aimions, vous aimiez, ils aimaient.",
      "**Le futur.** être : je serai, tu seras, il sera, nous serons, vous serez, ils seront. avoir : j’aurai, tu auras, il aura, nous aurons, vous aurez, ils auront. aimer : j’aimerai, tu aimeras, il aimera, nous aimerons, vous aimerez, ils aimeront.",
      "**Le passé composé.** être : j’ai été, tu as été, il a été, nous avons été, vous avez été, ils ont été. avoir : j’ai eu, tu as eu, il a eu, nous avons eu, vous avez eu, ils ont eu. aimer : j’ai aimé, tu as aimé, il a aimé, nous avons aimé, vous avez aimé, ils ont aimé.",
      "**La question du jour.** On remplace par l’imparfait, et le doute tombe. « Ils ont faim » devient « ils avaient faim » : c’est avoir, donc « ont ». « Ils sont partis » devient « ils étaient partis » : c’est être, donc « sont ». Ce test est exactement celui du rituel des homophones — c’est le même outil qui sert des deux côtés, et il vaut la peine de le dire à voix haute ce jour-là.",
    ],
    "Ce qu’on regarde, c’est le passé composé d’avoir : « j’ai eu ». Deux formes du même verbe collées l’une à l’autre, et il n’y a rien à comprendre, seulement à voir. S’il s’arrête dessus, s’il la trouve étrange, c’est qu’il lit ce qu’il écrit — et c’est précisément ce qu’on cherche. La reprise du lendemain, s’il y en a une, tient à trois phrases dites à l’oral : j’ai eu froid, j’ai eu peur, j’ai eu le temps.",
  ),

  f(
    "cj-verbes-06",
    "Conjugaison",
    "Verbes 6 · manger, lancer, appeler — quand le radical bouge",
    [
      "La leçon « Les verbes qui changent de radical » est passée le 8 mars, et cette fiche en est la mise en pratique. Les trois verbes sont du premier groupe et parfaitement réguliers dans leurs terminaisons : c’est le radical qui se déforme, pour que l’écrit suive le son : garder le g doux et le c doux dans mangeons et lançons, marquer le son « è » de j’appelle.",
      "À chaque forme qui change — nous mangeons, nous lançons, j’appelle — lui demander de dire à voix haute ce qu’on lirait sans le changement. « Mangons » avec un g dur, « lankons », « j’apele ». C’est en entendant la forme fausse qu’on comprend à quoi sert la vraie.",
      "Le jour où ça coince : un seul verbe, aux quatre temps, et on entoure chaque endroit où le radical a bougé. Chercher les endroits vaut autant que remplir la page.",
    ],
    [
      "**Le présent** — manger, lancer, appeler, aux six personnes.",
      "**L’imparfait** — les mêmes trois verbes, aux six personnes.",
      "**Le futur** — les mêmes trois verbes, aux six personnes.",
      "**Le passé composé** — les mêmes trois verbes, aux six personnes, avec l’auxiliaire avoir.",
      "**La question du jour** : appeler double son l au présent avec « je » mais pas avec « nous ». Qu’est-ce qui décide ?",
    ],
    [
      "**Le présent.** manger : je mange, tu manges, il mange, nous mangeons, vous mangez, ils mangent. lancer : je lance, tu lances, il lance, nous lançons, vous lancez, ils lancent. appeler : j’appelle, tu appelles, il appelle, nous appelons, vous appelez, ils appellent.",
      "**L’imparfait.** manger : je mangeais, tu mangeais, il mangeait, nous mangions, vous mangiez, ils mangeaient — le e reste devant a, il tombe devant i. lancer : je lançais, tu lançais, il lançait, nous lancions, vous lanciez, ils lançaient — même chose pour la cédille. appeler : j’appelais, tu appelais, il appelait, nous appelions, vous appeliez, ils appelaient — un seul l partout à l’imparfait.",
      "**Le futur.** manger : je mangerai, tu mangeras, il mangera, nous mangerons, vous mangerez, ils mangeront. lancer : je lancerai, tu lanceras, il lancera, nous lancerons, vous lancerez, ils lanceront. appeler : j’appellerai, tu appelleras, il appellera, nous appellerons, vous appellerez, ils appelleront — deux l sur les six personnes du futur, sans exception.",
      "**Le passé composé.** manger : j’ai mangé, tu as mangé, il a mangé, nous avons mangé, vous avez mangé, ils ont mangé. lancer : j’ai lancé, tu as lancé, il a lancé, nous avons lancé, vous avez lancé, ils ont lancé. appeler : j’ai appelé, tu as appelé, il a appelé, nous avons appelé, vous avez appelé, ils ont appelé — un seul l au participe.",
      "**La question du jour.** Le son de la voyelle. Avec « je », la dernière syllabe est accentuée et le e s’ouvre — on entend « èl », comme dans « belle » : on double le l pour l’écrire. Avec « nous », c’est la terminaison -ons qui porte l’accent, la syllabe du radical redevient sourde, et un seul l suffit. L’écriture suit le son, elle ne le précède pas. C’est la même raison qui fait « j’achète » avec un accent grave plutôt qu’un t doublé.",
    ],
    "Le bloc du futur d’appeler est le repère du jour : les six formes prennent deux l, y compris « nous appellerons », alors que le présent n’en met qu’un à cette personne. S’il écrit « nous appelerons », il a transporté la règle du présent dans le futur — ce qui est raisonné, et faux. On le reprend en lisant les deux formes l’une après l’autre à voix haute : c’est le son du e qui tranche, et il s’entend.",
  ),

  f(
    "cj-verbes-07",
    "Conjugaison",
    "Verbes 7 · aller, faire, dire — trois des huit irréguliers",
    [
      "On entre dans les huit verbes que la leçon du présent demande de savoir par cœur. Ceux-là ne se déduisent pas : ils se relisent souvent, et c’est tout. Le dire franchement en ouvrant la page évite de le chercher.",
      "Deux formes de cette fiche méritent qu’on s’arrête : « vous faites » et « vous dites », qui ne prennent pas -ez. Avec « vous êtes », ce sont les trois formes à retenir. Les verbes construits sur faire font pareil — vous refaites, vous défaites —, et redire aussi — vous redites ; les autres verbes construits sur dire font -ez, comme vous interdisez. Écrire les trois formes dans la marge et les laisser là.",
      "Le jour où ça coince : aller seul, aux quatre temps. Il change de radical trois fois — vais, allons, irai, allé — et un verbe qui fait ça mérite une page à lui.",
    ],
    [
      "**Le présent** — aller, faire, dire, aux six personnes.",
      "**L’imparfait** — les mêmes trois verbes, aux six personnes.",
      "**Le futur** — les mêmes trois verbes, aux six personnes.",
      "**Le passé composé** — les mêmes trois verbes, aux six personnes. Attention : aller prend l’auxiliaire **être** et accorde son participe ; faire et dire prennent avoir.",
      "**La question du jour** : combien de radicaux différents trouve-t-on pour « aller » sur la page entière ?",
    ],
    [
      "**Le présent.** aller : je vais, tu vas, il va, nous allons, vous allez, ils vont. faire : je fais, tu fais, il fait, nous faisons, vous faites, ils font. dire : je dis, tu dis, il dit, nous disons, vous dites, ils disent.",
      "**L’imparfait.** aller : j’allais, tu allais, il allait, nous allions, vous alliez, ils allaient. faire : je faisais, tu faisais, il faisait, nous faisions, vous faisiez, ils faisaient — le ai du radical se prononce comme le e de « le », mais il s’écrit ai à toutes les personnes. dire : je disais, tu disais, il disait, nous disions, vous disiez, ils disaient.",
      "**Le futur.** aller : j’irai, tu iras, il ira, nous irons, vous irez, ils iront. faire : je ferai, tu feras, il fera, nous ferons, vous ferez, ils feront. dire : je dirai, tu diras, il dira, nous dirons, vous direz, ils diront.",
      "**Le passé composé.** aller, avec être : je suis allé, tu es allé, il est allé, nous sommes allés, vous êtes allés, ils sont allés — et au féminin : elle est allée, elles sont allées. faire, avec avoir : j’ai fait, tu as fait, il a fait, nous avons fait, vous avez fait, ils ont fait. dire, avec avoir : j’ai dit, tu as dit, il a dit, nous avons dit, vous avez dit, ils ont dit.",
      "**La question du jour.** Trois, et ils n’ont rien en commun : **v-** au singulier du présent et à « ils » (je vais, ils vont), **all-** à « nous » et « vous » au présent, à tout l’imparfait et au participe (nous allons, vous allez, j’allais, allé), et **ir-** au futur entier (j’irai). Un verbe qui change trois fois de radical est rare ; celui-ci est en plus l’un des plus employés de la langue, et c’est pour cela qu’on le sait par cœur au lieu de le raisonner.",
    ],
    "Ce qu’on regarde, c’est ce qu’il fait devant « vous faites » et « vous dites ». S’il écrit « vous faisez », il applique la règle générale — et il a raison de l’appliquer, c’est elle qui marche presque partout. La reprise ne consiste pas à répéter la forme mais à retrouver avec lui les formes à retenir : il y en a trois — vous êtes, vous faites, vous dites —, elles se tiennent en une ligne de marge, et une liste de trois se retient. Refaire, défaire et redire suivent la même ligne sans l’allonger.",
  ),

  f(
    "cj-verbes-08",
    "Conjugaison",
    "Verbes 8 · venir, voir, prendre — et les doubles lettres",
    [
      "Trois autres des huit. Le fil du jour est discret : venir et prendre doublent le n à un seul endroit — ils viennent, ils prennent — et voir double le r au futur — je verrai — tout en ajoutant à l’imparfait un i qu’on entend à peine : nous voyions.",
      "Faire écrire le bloc de l’imparfait de « voir » lentement. « Nous voyions », « vous voyiez » prennent un y **et** un i : la forme paraît fausse et elle ne l’est pas. C’est l’endroit de la page où il faut ralentir.",
      "Le jour où ça coince : prendre seul, aux quatre temps. Son participe — pris — est l’un de ceux qui reviennent le plus souvent dans les dictées de l’année, et une page qui le fixe est une page utile.",
    ],
    [
      "**Le présent** — venir, voir, prendre, aux six personnes.",
      "**L’imparfait** — les mêmes trois verbes, aux six personnes.",
      "**Le futur** — les mêmes trois verbes, aux six personnes.",
      "**Le passé composé** — les mêmes trois verbes, aux six personnes. Venir prend l’auxiliaire **être** et accorde ; voir et prendre prennent avoir.",
      "**La question du jour** : « nous prenons » n’a qu’un n et « ils prennent » en a deux. Est-ce que ça s’entend ?",
    ],
    [
      "**Le présent.** venir : je viens, tu viens, il vient, nous venons, vous venez, ils viennent. voir : je vois, tu vois, il voit, nous voyons, vous voyez, ils voient. prendre : je prends, tu prends, il prend, nous prenons, vous prenez, ils prennent.",
      "**L’imparfait.** venir : je venais, tu venais, il venait, nous venions, vous veniez, ils venaient. voir : je voyais, tu voyais, il voyait, nous voyions, vous voyiez, ils voyaient — oui, y puis i aux deux premières personnes du pluriel. prendre : je prenais, tu prenais, il prenait, nous prenions, vous preniez, ils prenaient — un seul n partout à l’imparfait.",
      "**Le futur.** venir : je viendrai, tu viendras, il viendra, nous viendrons, vous viendrez, ils viendront — un d apparaît. voir : je verrai, tu verras, il verra, nous verrons, vous verrez, ils verront — deux r. prendre : je prendrai, tu prendras, il prendra, nous prendrons, vous prendrez, ils prendront.",
      "**Le passé composé.** venir, avec être : je suis venu, tu es venu, il est venu, nous sommes venus, vous êtes venus, ils sont venus — elle est venue, elles sont venues. voir, avec avoir : j’ai vu, tu as vu, il a vu, nous avons vu, vous avez vu, ils ont vu. prendre, avec avoir : j’ai pris, tu as pris, il a pris, nous avons pris, vous avez pris, ils ont pris.",
      "**La question du jour.** Oui. « Nous prenons » se dit « pre-nons », avec un e sourd, comme dans « le » ; « ils prennent » se dit « prèn », avec un e ouvert, comme dans « belle ». Devant les deux n, le e s’ouvre et se prononce « è ». C’est la même mécanique qu’au mois de mars avec appeler — nous appelons, un seul l et un e sourd ; j’appelle, deux l et un « è ». Venir fait pareil : nous venons, ils viennent.",
    ],
    "Ce qu’on regarde : « nous voyions ». Cette forme-là se corrige souvent toute seule quand on la relit, et c’est justement ce qu’on veut voir — est-ce qu’il se relit ? S’il l’écrit « nous voyons » dans le bloc de l’imparfait, on ne reprend pas la forme, on reprend le geste : on lui demande de relire le bloc entier en se demandant, ligne par ligne, si ce qu’il lit est bien du passé. Le i manquant se voit alors sans qu’on ait à le montrer.",
  ),

  f(
    "cj-verbes-09",
    "Conjugaison",
    "Verbes 9 · pouvoir, vouloir, être — et les participes courts",
    [
      "La leçon « Les quatre temps : reconnaître et choisir » vient d’avoir lieu. Cette fiche s’appuie dessus : avant d’écrire, lui demander de dire à quoi sert chacun des quatre temps, en une phrase, sans regarder.",
      "Pouvoir et vouloir sont les deux derniers des huit irréguliers. Ils prennent un x aux deux premières personnes du singulier — je peux, tu peux, je veux, tu veux — et ce sont les seuls de la liste dans ce cas.",
      "Le jour où ça coince : on garde les participes passés seuls. Pu, voulu, été : trois mots à écrire dans une phrase chacun, et on referme le cahier. C’est le morceau le plus utile de la page.",
    ],
    [
      "**Le présent** — pouvoir, vouloir, être, aux six personnes.",
      "**L’imparfait** — les mêmes trois verbes, aux six personnes.",
      "**Le futur** — les mêmes trois verbes, aux six personnes.",
      "**Le passé composé** — les mêmes trois verbes, aux six personnes, avec l’auxiliaire avoir. Les trois participes sont courts : pu, voulu, été.",
      "**La question du jour** : pourquoi écrit-on « elles ont pu », sans e ni s ?",
    ],
    [
      "**Le présent.** pouvoir : je peux, tu peux, il peut, nous pouvons, vous pouvez, ils peuvent. vouloir : je veux, tu veux, il veut, nous voulons, vous voulez, ils veulent. être : je suis, tu es, il est, nous sommes, vous êtes, ils sont.",
      "**L’imparfait.** pouvoir : je pouvais, tu pouvais, il pouvait, nous pouvions, vous pouviez, ils pouvaient. vouloir : je voulais, tu voulais, il voulait, nous voulions, vous vouliez, ils voulaient. être : j’étais, tu étais, il était, nous étions, vous étiez, ils étaient.",
      "**Le futur.** pouvoir : je pourrai, tu pourras, il pourra, nous pourrons, vous pourrez, ils pourront — deux r. vouloir : je voudrai, tu voudras, il voudra, nous voudrons, vous voudrez, ils voudront — un d. être : je serai, tu seras, il sera, nous serons, vous serez, ils seront.",
      "**Le passé composé.** pouvoir : j’ai pu, tu as pu, il a pu, nous avons pu, vous avez pu, ils ont pu. vouloir : j’ai voulu, tu as voulu, il a voulu, nous avons voulu, vous avez voulu, ils ont voulu. être : j’ai été, tu as été, il a été, nous avons été, vous avez été, ils ont été.",
      "**La question du jour.** Parce que l’auxiliaire est avoir, et qu’avec avoir le participe ne s’accorde pas avec le sujet : ni e ni s derrière, même quand le sujet est « elles ». Dire « c’est avoir » suffit à répondre. Que le participe de pouvoir soit « pu », cela se sait par cœur, comme voulu et été ; et « été » ne prend jamais de s, quel que soit le sujet.",
    ],
    "Ce qu’on regarde : le futur de pouvoir, « je pourrai », avec ses deux r. Un seul r donnerait « je pourai », qui n’existe pas, et deux r plus un s donneraient un conditionnel. Trois lettres décident de ce que la phrase promet. S’il hésite, on ne lui fait pas recopier la forme dix fois : on lui fait dire la différence entre « je pourrai venir » et « je pourrais venir », et l’orthographe suit le sens.",
  ),

  f(
    "cj-verbes-10",
    "Conjugaison",
    "Verbes 10 · aller, venir, partir — le participe qui s’accorde",
    [
      "Les trois verbes de la page prennent l’auxiliaire **être** au passé composé, et c’est tout l’objet du jour : le participe s’accorde avec le sujet, comme un adjectif. Aller et venir ont déjà été conjugués en avril et en mai ; les revoici pour cette seule raison.",
      "Le bloc du passé composé se fait en deux colonnes : masculin à gauche, féminin à droite, ligne par ligne. Douze formes au lieu de six pour chaque verbe, et l’accord se voit au lieu de s’expliquer.",
      "Le jour où ça coince : on laisse tomber les trois premiers temps et on ne fait que le passé composé des trois verbes, aux six personnes, masculin seulement. C’est le morceau pour lequel la fiche existe.",
    ],
    [
      "**Le présent** — aller, venir, partir, aux six personnes.",
      "**L’imparfait** — les mêmes trois verbes, aux six personnes.",
      "**Le futur** — les mêmes trois verbes, aux six personnes.",
      "**Le passé composé** — les mêmes trois verbes, aux six personnes, avec l’auxiliaire **être**, au masculin puis au féminin.",
      "**La question du jour** : on écrit « elles sont parties » et « elles ont mangé ». Pourquoi un s et un e d’un côté, et rien de l’autre ?",
    ],
    [
      "**Le présent.** aller : je vais, tu vas, il va, nous allons, vous allez, ils vont. venir : je viens, tu viens, il vient, nous venons, vous venez, ils viennent. partir : je pars, tu pars, il part, nous partons, vous partez, ils partent.",
      "**L’imparfait.** aller : j’allais, tu allais, il allait, nous allions, vous alliez, ils allaient. venir : je venais, tu venais, il venait, nous venions, vous veniez, ils venaient. partir : je partais, tu partais, il partait, nous partions, vous partiez, ils partaient.",
      "**Le futur.** aller : j’irai, tu iras, il ira, nous irons, vous irez, ils iront. venir : je viendrai, tu viendras, il viendra, nous viendrons, vous viendrez, ils viendront. partir : je partirai, tu partiras, il partira, nous partirons, vous partirez, ils partiront.",
      "**Le passé composé, avec être.** aller : je suis allé, tu es allé, il est allé, nous sommes allés, vous êtes allés, ils sont allés — je suis allée, tu es allée, elle est allée, nous sommes allées, vous êtes allées, elles sont allées. venir : je suis venu, tu es venu, il est venu, nous sommes venus, vous êtes venus, ils sont venus — je suis venue, tu es venue, elle est venue, nous sommes venues, vous êtes venues, elles sont venues. partir : je suis parti, tu es parti, il est parti, nous sommes partis, vous êtes partis, ils sont partis — je suis partie, tu es partie, elle est partie, nous sommes parties, vous êtes parties, elles sont parties.",
      "**La question du jour.** Parce que l’auxiliaire n’est pas le même, et c’est la seule raison. « Elles sont parties » : auxiliaire être, donc le participe suit le sujet — féminin pluriel, donc -es. « Elles ont mangé » : auxiliaire avoir, donc le participe ne bouge pas, quel que soit le sujet. Le réflexe à installer tient en une question posée avant d’écrire la terminaison : quel auxiliaire ? Le reste en découle.",
    ],
    "Ce qu’on observe : est-ce qu’il regarde le sujet avant d’écrire la fin du participe, ou est-ce qu’il écrit le participe puis se relit. Les deux gestes donnent la même page, et le premier tient beaucoup mieux dans une dictée, où la phrase avance. Si la relecture est ce qui le sauve, c’est déjà un outil ; on ne le lui retire pas, on ajoute seulement l’autre à côté, en lui faisant dire le sujet à voix haute avant chaque ligne pendant une séance ou deux.",
  ),

  f(
    "cj-verbes-11",
    "Conjugaison",
    "Verbes 11 · chanter, finir, prendre — un verbe par groupe",
    [
      "Dernière séance de l’année, et elle boucle : chanter était le premier verbe de la fiche 1 en novembre. On ouvre les deux pages côte à côte, et la première chose à faire est de les comparer, avant d’écrire quoi que ce soit.",
      "Un verbe par groupe : chanter pour le premier, finir pour le deuxième, prendre pour le troisième. Lui demander, avant de commencer, de retrouver seul à quel groupe appartient chacun — le test de « nous » suffit pour les deux derniers.",
      "Le jour où ça coince : on ne fait que la comparaison avec la page de novembre, à l’oral, et on referme. Relire sept mois de cahier est un exercice entier, et c’est le seul qui ne se rattrape pas plus tard.",
    ],
    [
      "**Le présent** — chanter, finir, prendre, aux six personnes.",
      "**L’imparfait** — les mêmes trois verbes, aux six personnes.",
      "**Le futur** — les mêmes trois verbes, aux six personnes.",
      "**Le passé composé** — les mêmes trois verbes, aux six personnes, avec l’auxiliaire avoir.",
      "**La question du jour**, la dernière de l’année : parmi les quatre blocs de cette page, lesquels ont exactement les mêmes terminaisons pour les trois verbes ? Et pourquoi ceux-là ?",
    ],
    [
      "**Le présent.** chanter : je chante, tu chantes, il chante, nous chantons, vous chantez, ils chantent. finir : je finis, tu finis, il finit, nous finissons, vous finissez, ils finissent. prendre : je prends, tu prends, il prend, nous prenons, vous prenez, ils prennent.",
      "**L’imparfait.** chanter : je chantais, tu chantais, il chantait, nous chantions, vous chantiez, ils chantaient. finir : je finissais, tu finissais, il finissait, nous finissions, vous finissiez, ils finissaient. prendre : je prenais, tu prenais, il prenait, nous prenions, vous preniez, ils prenaient.",
      "**Le futur.** chanter : je chanterai, tu chanteras, il chantera, nous chanterons, vous chanterez, ils chanteront. finir : je finirai, tu finiras, il finira, nous finirons, vous finirez, ils finiront. prendre : je prendrai, tu prendras, il prendra, nous prendrons, vous prendrez, ils prendront.",
      "**Le passé composé.** chanter : j’ai chanté, tu as chanté, il a chanté, nous avons chanté, vous avez chanté, ils ont chanté. finir : j’ai fini, tu as fini, il a fini, nous avons fini, vous avez fini, ils ont fini. prendre : j’ai pris, tu as pris, il a pris, nous avons pris, vous avez pris, ils ont pris.",
      "**La question du jour.** Deux blocs : l’imparfait et le futur. À l’imparfait, les terminaisons — -ais, -ais, -ait, -ions, -iez, -aient — sont les mêmes pour les trois verbes, et pour tous les verbes du français sans exception ; seul le radical change : chant-, finiss-, pren-. Au futur, c’est pareil : -rai, -ras, -ra, -rons, -rez, -ront, derrière chante-, fini-, prend-. Au présent, les terminaisons changent d’un groupe à l’autre, et au passé composé c’est le participe qui change. S’il n’en trouve qu’un des deux, c’est déjà une réponse juste, et on cherche l’autre ensemble.",
    ],
    "Ce qu’on regarde n’est plus une forme mais sept mois. On ouvre la page du 23 novembre à côté de celle du jour et on lui demande ce qu’il voit — pas ce qui est juste ou faux, ce qui a changé. La vitesse, la disposition, le fait de ne plus avoir à demander les terminaisons de l’imparfait : ce sont ses observations qui comptent ici, pas les nôtres. S’il ne voit rien, on les lui montre, et c’est tout aussi bien.",
  ),

  /* ------------------------------------------------------------------ */
  /* RÉSERVE — deux fiches qui ne tombent pas dans l’année.              */
  /* Elles sortent des huit irréguliers de la leçon du présent : à       */
  /* n’ouvrir que si les onze précédentes sont passées sans peine.       */
  /* ------------------------------------------------------------------ */

  f(
    "cj-verbes-12",
    "Conjugaison",
    "Verbes 12 · dire, lire, écrire — trois faux jumeaux",
    [
      "Fiche de réserve. Ces trois verbes se ressemblent beaucoup au présent — je dis, je lis, j’écris — et ne se séparent qu’à quelques endroits, qu’on cherche avec lui. Seul « dire » figure dans les huit irréguliers de la leçon ; les deux autres sont ajoutés, et il faut le dire en ouvrant la page.",
      "Le fil : leurs trois participes passés sont courts et tous différents — dit, lu, écrit. Deux finissent par un t muet, un ne finit par rien. Les écrire dans la marge en premier, avant même de conjuguer.",
      "Le jour où ça coince : on ne fait que le présent des trois, en colonnes côte à côte, pour voir où ils se ressemblent et où ils cessent. Dix-huit formes, et la page a servi.",
    ],
    [
      "**Le présent** — dire, lire, écrire, aux six personnes.",
      "**L’imparfait** — les mêmes trois verbes, aux six personnes.",
      "**Le futur** — les mêmes trois verbes, aux six personnes.",
      "**Le passé composé** — les mêmes trois verbes, aux six personnes, avec l’auxiliaire avoir.",
      "**La question du jour** : les trois verbes se disent presque pareil avec « je ». À quelle personne se séparent-ils pour de bon ?",
    ],
    [
      "**Le présent.** dire : je dis, tu dis, il dit, nous disons, vous dites, ils disent. lire : je lis, tu lis, il lit, nous lisons, vous lisez, ils lisent. écrire : j’écris, tu écris, il écrit, nous écrivons, vous écrivez, ils écrivent.",
      "**L’imparfait.** dire : je disais, tu disais, il disait, nous disions, vous disiez, ils disaient. lire : je lisais, tu lisais, il lisait, nous lisions, vous lisiez, ils lisaient. écrire : j’écrivais, tu écrivais, il écrivait, nous écrivions, vous écriviez, ils écrivaient.",
      "**Le futur.** dire : je dirai, tu diras, il dira, nous dirons, vous direz, ils diront. lire : je lirai, tu liras, il lira, nous lirons, vous lirez, ils liront. écrire : j’écrirai, tu écriras, il écrira, nous écrirons, vous écrirez, ils écriront.",
      "**Le passé composé.** dire : j’ai dit, tu as dit, il a dit, nous avons dit, vous avez dit, ils ont dit. lire : j’ai lu, tu as lu, il a lu, nous avons lu, vous avez lu, ils ont lu. écrire : j’ai écrit, tu as écrit, il a écrit, nous avons écrit, vous avez écrit, ils ont écrit.",
      "**La question du jour.** À « nous ». Nous disons, nous lisons, nous écrivons : le radical d’écrire prend un v qui n’apparaissait nulle part au singulier, et ce v le suit ensuite partout à l’imparfait. Dire et lire, eux, ne se séparent qu’à « vous » — vous dites contre vous lisez — et au participe : dit avec un t, lu sans rien. Trois verbes qui commencent pareil et finissent chacun de leur côté.",
    ],
    "Ce qu’on regarde : « vous dites ». C’est la troisième des trois formes à retenir, avec vous êtes et vous faites, et elle a déjà été rencontrée en avril. Les verbes construits sur faire font pareil — vous refaites, vous défaites —, et redire aussi — vous redites. S’il l’écrit sans y penser, la liste des trois est installée et il n’y a rien à en faire de plus. S’il écrit « vous disez », on ne la lui répète pas : on lui demande quelles sont les trois, et on attend. La retrouver soi-même vaut mieux que de l’entendre une quatrième fois.",
  ),

  f(
    "cj-verbes-13",
    "Conjugaison",
    "Verbes 13 · devoir, savoir, croire — deux en -oir, un en -oire",
    [
      "La plus exigeante des treize, à garder pour une année qui a bien tourné. Aucun de ces trois verbes n’est dans les huit de la leçon : ils sont fréquents à l’oral, et c’est la seule raison de les travailler.",
      "Trois radicaux de futur à regarder de près : devr-, saur-, croir-. Seul le dernier se lit directement dans son infinitif ; les deux autres ne se devinent pas. Les écrire tous les trois dans la marge avant de remplir le bloc.",
      "Le jour où ça coince : on prend croire seul, qui est le plus régulier des trois, et on laisse les deux autres. Une fiche de réserve se coupe sans conséquence — elle ne tombe nulle part dans l’année.",
    ],
    [
      "**Le présent** — devoir, savoir, croire, aux six personnes.",
      "**L’imparfait** — les mêmes trois verbes, aux six personnes.",
      "**Le futur** — les mêmes trois verbes, aux six personnes.",
      "**Le passé composé** — les mêmes trois verbes, aux six personnes, avec l’auxiliaire avoir.",
      "**La question du jour** : le participe passé de devoir porte un accent que rien ne semble justifier. À quoi sert-il ?",
    ],
    [
      "**Le présent.** devoir : je dois, tu dois, il doit, nous devons, vous devez, ils doivent. savoir : je sais, tu sais, il sait, nous savons, vous savez, ils savent. croire : je crois, tu crois, il croit, nous croyons, vous croyez, ils croient.",
      "**L’imparfait.** devoir : je devais, tu devais, il devait, nous devions, vous deviez, ils devaient. savoir : je savais, tu savais, il savait, nous savions, vous saviez, ils savaient. croire : je croyais, tu croyais, il croyait, nous croyions, vous croyiez, ils croyaient — y puis i, comme pour voir.",
      "**Le futur.** devoir : je devrai, tu devras, il devra, nous devrons, vous devrez, ils devront. savoir : je saurai, tu sauras, il saura, nous saurons, vous saurez, ils sauront. croire : je croirai, tu croiras, il croira, nous croirons, vous croirez, ils croiront.",
      "**Le passé composé.** devoir : j’ai dû, tu as dû, il a dû, nous avons dû, vous avez dû, ils ont dû. savoir : j’ai su, tu as su, il a su, nous avons su, vous avez su, ils ont su. croire : j’ai cru, tu as cru, il a cru, nous avons cru, vous avez cru, ils ont cru.",
      "**La question du jour.** À distinguer deux mots qui s’écriraient autrement pareil : « dû », le participe de devoir, et « du », l’article de « du pain ». L’accent ne change rien au son, il sépare deux mots. Le français en compte quelques-uns de cette espèce, et c’est exactement le raisonnement du rituel des homophones — sauf qu’ici, c’est un accent qui fait le travail au lieu d’une lettre.",
    ],
    "Ce qu’on regarde : l’imparfait de croire, « nous croyions », qui reprend la difficulté de « nous voyions » rencontrée en mai. Le repère n’est pas la forme, c’est le délai : est-ce qu’il retrouve le i tout seul, ou est-ce qu’il faut le lui redonner. S’il le retrouve, la mécanique du y et du i est installée pour les verbes qui la partagent — voir, croire, fuir. Sinon, on la remontre sur « voir », qui lui est plus familier, et on n’en fait rien de plus ce jour-là.",
  ),

  /* ================================================================== */
  /* LES HOMOPHONES — neuf séances, du 26 novembre au 24 juin,          */
  /* et deux textes de réserve.                                          */
  /* Le cœur du rituel est le test de remplacement, et chaque fiche le   */
  /* rappelle : a → « avait », à ne se remplace pas ; est → « était »,   */
  /* et → « et puis » ; son → « le sien » ou « mon », sont → « étaient » */
  /* ; ont → « avaient », on → « il ».                                   */
  /* ================================================================== */

  f(
    "ho-trous-01",
    "Les homophones",
    "Texte à trous 1 · a / à et est / et",
    [
      "La leçon « Les mots qui se prononcent pareil » est passée le 17 novembre, et c’est la première fois que ce rituel tombe. Cette fiche redonne donc les tests au lieu de les supposer.",
      "Les deux tests du jour : **a** se remplace par « avait » ; **à** ne se remplace par rien. **est** se remplace par « était » ; **et** se remplace par « et puis ». Il les recopie lui-même en haut de sa feuille avant de commencer, et il dit le test à voix haute devant chaque trou avant d’écrire. C’est la partie de la séance qu’il ne faut surtout pas faire à sa place. Hors de la ligne recopiée en haut de la feuille, « avait » et « était » se disent seulement à voix haute, pour le test : c’est l’imparfait vu le 2 novembre, mais ici il sert à tester, et on ne lui demande ni de l’écrire ni de le conjuguer.",
      "Le jour où ça coince : on fait le premier paragraphe seulement, à l’oral, l’adulte tenant le crayon. Trois trous justifiés à voix haute valent mieux que dix remplis au jugé, et le texte se reprend entier la fois suivante.",
    ],
    [
      "1. Le chemin du moulin ___ toujours été le plus court. Il descend ___ travers le pré, puis il longe le ruisseau jusqu’___ la passerelle.",
      "2. Le moulin ___ vide depuis longtemps. La porte ___ la meule sont encore en place, mais le toit ___ cédé l’hiver dernier.",
      "3. Mon grand-père ___ travaillé là, tout jeune, et il rentrait ___ pied le soir. Il dit que le bruit ___ la poussière ne le gênaient pas, et qu’il ___ content d’y retourner.",
    ],
    [
      "1. **Le chemin du moulin a toujours été le plus court. Il descend à travers le pré, puis il longe le ruisseau jusqu’à la passerelle.** — « a toujours été » : « avait toujours été » tient debout, c’est le verbe avoir, donc pas d’accent. — « à travers » : « avait travers » ne veut rien dire, donc l’accent. — « jusqu’à la passerelle » : même test, même conclusion.",
      "2. **Le moulin est vide depuis longtemps. La porte et la meule sont encore en place, mais le toit a cédé l’hiver dernier.** — « est vide » : « était vide » tient, c’est le verbe être. — « la porte et la meule » : « la porte était la meule » n’a aucun sens ; « la porte et puis la meule » tient, donc « et ». — « a cédé » : « avait cédé » tient, c’est avoir.",
      "3. **Mon grand-père a travaillé là, tout jeune, et il rentrait à pied le soir. Il dit que le bruit et la poussière ne le gênaient pas, et qu’il est content d’y retourner.** — « a travaillé » : « avait travaillé » tient. — « à pied » : « avait pied » ne veut rien dire. — « le bruit et la poussière » : « et puis » tient. — « il est content » : « il était content » tient, c’est le verbe être.",
    ],
    "Ce qu’on observe : est-ce qu’il dit le test avant d’écrire, ou après. Le dire avant de poser le crayon, c’est raisonner ; le dire après pour vérifier, c’est autre chose, et c’est une étape plus tardive. L’un et l’autre sont bons à ce moment de l’année. Ce qui renseignerait vraiment, c’est un trou rempli sans aucun test : celui-là se reprend le lendemain, seul, sur une phrase de trois mots.",
  ),

  f(
    "ho-trous-02",
    "Les homophones",
    "Texte à trous 2 · son / sont et ont / on",
    [
      "La leçon est passée le 17 novembre. On ne redonne donc plus les tests : on lui demande de les écrire de mémoire en haut de la page, et on ne complète que ce qui manque.",
      "Deux paires nouvelles, et elles se ressemblent : **sont** et **ont** sont tous les deux des verbes au pluriel — sont → « étaient », ont → « avaient » — tandis que **son** devient « mon » et **on** devient « il ». Le repère le plus rapide tient au sujet : s’il y a juste avant le trou un sujet au pluriel — « ils », « elles », « les branches basses » —, c’est un verbe.",
      "Le jour où ça coince : on ne garde que les trous de « on » et « ont », partout dans le texte, et on laisse « son » et « sont » de côté. Une paire travaillée jusqu’au bout vaut mieux que deux survolées.",
    ],
    [
      "1. ___ a ramassé les pommes tombées pendant la nuit. Les branches basses ___ vides, mais celles du haut ___ encore chargées.",
      "2. Le voisin et ___ fils ___ apporté une échelle. Le garçon la tient pendant qu’___ monte, et les deux chiens ___ l’air de trouver la matinée passionnante.",
      "3. ___ range les pommes dans des cageots. Celles qui ___ abîmées iront aux poules ; les autres montent au grenier. Chacun porte ___ cageot, et les deux derniers ___ été laissés en bas.",
    ],
    [
      "1. **On a ramassé les pommes tombées pendant la nuit. Les branches basses sont vides, mais celles du haut sont encore chargées.** — « On a » : « il a ramassé » tient, donc le pronom « on ». — « sont vides » : « étaient vides » tient, c’est le verbe être. — « sont encore chargées » : même test.",
      "2. **Le voisin et son fils ont apporté une échelle. Le garçon la tient pendant qu’on monte, et les deux chiens ont l’air de trouver la matinée passionnante.** — « son fils » : « mon fils », « ton fils » tiennent, c’est un déterminant. — « ont apporté » : « avaient apporté » tient, c’est avoir. — « qu’on monte » : « qu’il monte » tient. — « ont l’air » : « avaient l’air » tient.",
      "3. **On range les pommes dans des cageots. Celles qui sont abîmées iront aux poules ; les autres montent au grenier. Chacun porte son cageot, et les deux derniers ont été laissés en bas.** — « On range » : « il range » tient. — « qui sont abîmées » : « qui étaient abîmées » tient. — « son cageot » : « mon cageot » tient. — « ont été laissés » : « avaient été laissés » tient — c’est avoir qui sert d’auxiliaire, même si le mot suivant est « été ».",
    ],
    "Ce qu’on regarde : le tout premier trou. « On a ramassé » met les deux pièges de la fiche l’un contre l’autre — le pronom, puis le verbe avoir. S’il écrit « ont a », il a entendu le pluriel du sens — nous étions plusieurs — au lieu de lire le mot. C’est une erreur de raisonnement et non d’inattention, et elle se reprend en remplaçant par « il » : « il a ramassé » tient, et le doute tombe.",
  ),

  f(
    "ho-trous-03",
    "Les homophones",
    "Texte à trous 3 · a / à et est / et, texte long",
    [
      "Mêmes deux paires qu’en novembre, dans un texte plus long : quinze trous au lieu de dix. Ce qui change n’est pas la règle mais la tenue : chaque trou demande son test, et c’est le quinzième qui renseigne.",
      "Une consigne qui vaut la peine d’être tenue : il écrit le mot du test dans la marge, en petit, en face de chaque ligne — « avait », « était », « et puis ». La marge devient la trace du raisonnement, et elle se relit à la fin.",
      "Le jour où ça coince : on coupe après le paragraphe 2 et on relit les sept premiers trous ensemble, à voix haute. Le texte est fait pour être coupé en deux, et la seconde moitié se reprend telle quelle.",
    ],
    [
      "1. La cabane du fond du jardin ___ été construite en deux samedis. Elle ___ trois murs, un toit de tôle ___ une porte si basse qu’il faut se baisser pour entrer.",
      "2. Le sol ___ en terre battue. Quand il pleut fort, l’eau entre par-dessous ___ il faut tout sortir : le tabouret, la caisse ___ outils ___ la lampe tempête.",
      "3. ___ midi, on y mange quand il fait beau. Le chat ___ pris l’habitude de venir s’asseoir sur le seuil : c’___ lui qui garde la porte, ___ sa manière.",
      "4. L’hiver, la cabane ___ trop froide. On ___ cloué une planche ___ la place du carreau cassé, ___ on attend le printemps.",
    ],
    [
      "1. **La cabane du fond du jardin a été construite en deux samedis. Elle a trois murs, un toit de tôle et une porte si basse qu’il faut se baisser pour entrer.** — « a été construite » : « avait été construite » tient. — « Elle a trois murs » : « elle avait trois murs » tient. — « et une porte » : « et puis une porte » tient ; « était une porte » ne tient pas.",
      "2. **Le sol est en terre battue. Quand il pleut fort, l’eau entre par-dessous et il faut tout sortir : le tabouret, la caisse à outils et la lampe tempête.** — « est en terre battue » : « était en terre battue » tient. — « et il faut » : « et puis il faut » tient. — « la caisse à outils » : « la caisse avait outils » ne veut rien dire. — « et la lampe » : « et puis la lampe » tient.",
      "3. **À midi, on y mange quand il fait beau. Le chat a pris l’habitude de venir s’asseoir sur le seuil : c’est lui qui garde la porte, à sa manière.** — « À midi » : « avait midi » ne veut rien dire. — « a pris » : « avait pris » tient. — « c’est lui » : « c’était lui » tient. — « à sa manière » : « avait sa manière » ne tient pas dans cette phrase.",
      "4. **L’hiver, la cabane est trop froide. On a cloué une planche à la place du carreau cassé, et on attend le printemps.** — « est trop froide » : « était trop froide » tient. — « On a cloué » : « on avait cloué » tient. — « à la place » : « avait la place » ne veut rien dire ici. — « et on attend » : « et puis on attend » tient.",
    ],
    "Ce qu’on regarde : « c’est lui qui garde la porte ». Le « est » y est collé à un « c’ » qui l’annonce, et le test marche quand même — « c’était lui » tient. S’il bloque devant celui-là alors que les autres passent, ce n’est pas la paire qui résiste, c’est la forme contractée : on lui fait séparer « c’ » du trou d’un trait de crayon, puis dire « c’était lui » à voix haute, et le trou se résout tout seul.",
  ),

  f(
    "ho-trous-04",
    "Les homophones",
    "Texte à trous 4 · son / sont et ont / on, avec « on a »",
    [
      "Les deux mêmes paires qu’en décembre, et un texte qui pose enfin la difficulté pour de bon : « On a » ouvre le paragraphe 3, et deux autres « on » y suivent en quatre lignes.",
      "Avant de commencer, lui faire écrire les quatre remplacements en haut de la feuille, de mémoire : ont → avaient, on → il, sont → étaient, son → mon. Quatre mots, une ligne, et la page se fait ensuite sans rien demander.",
      "Le jour où ça coince : on lit le texte entier à voix haute d’abord, sans rien écrire, en disant simplement « verbe » ou « pas verbe » devant chaque trou. Le tri se fait alors sans orthographe, et l’écriture vient après, ou un autre jour.",
    ],
    [
      "1. ___ part au marché le samedi matin. Les étals ___ déjà installés quand nous arrivons, et les marchands ___ déjà servi trois ou quatre clients.",
      "2. Le fromager porte une casquette bleue, et ___ chien dort sous la table. Les clients ___ l’habitude : ils l’enjambent sans même le regarder. Les deux vendeuses ___ sœurs, et chacune tient ___ bout de l’étal.",
      "3. ___ a acheté des poireaux, du comté et six œufs. Les œufs ___ bruns, et ___ dit qu’ils ___ meilleurs que ceux du magasin — mais ___ n’a jamais vérifié.",
      "4. Au retour, les sacs ___ lourds. Chacun porte ___ sac jusqu’au coffre, et ceux qui ___ fini aident les autres.",
    ],
    [
      "1. **On part au marché le samedi matin. Les étals sont déjà installés quand nous arrivons, et les marchands ont déjà servi trois ou quatre clients.** — « On part » : « il part » tient. — « sont déjà installés » : « étaient installés » tient. — « ont déjà servi » : « avaient servi » tient.",
      "2. **Le fromager porte une casquette bleue, et son chien dort sous la table. Les clients ont l’habitude : ils l’enjambent sans même le regarder. Les deux vendeuses sont sœurs, et chacune tient son bout de l’étal.** — « son chien » : « mon chien » tient. — « ont l’habitude » : « avaient l’habitude » tient. — « sont sœurs » : « étaient sœurs » tient. — « son bout » : « mon bout » tient.",
      "3. **On a acheté des poireaux, du comté et six œufs. Les œufs sont bruns, et on dit qu’ils sont meilleurs que ceux du magasin — mais on n’a jamais vérifié.** — « On a acheté » : « il a acheté » tient. — « sont bruns » : « étaient bruns » tient. — « on dit » : « il dit » tient. — « qu’ils sont meilleurs » : « qu’ils étaient meilleurs » tient. — « on n’a jamais vérifié » : « il n’a jamais vérifié » tient.",
      "4. **Au retour, les sacs sont lourds. Chacun porte son sac jusqu’au coffre, et ceux qui ont fini aident les autres.** — « sont lourds » : « étaient lourds » tient. — « son sac » : « mon sac » tient. — « qui ont fini » : « qui avaient fini » tient.",
    ],
    "Ce qu’on regarde : le paragraphe 3, qui ouvre sur « On a acheté ». Trois « on » et deux « sont » en quatre lignes, c’est l’endroit où le texte devient dense exprès. Si les trois premiers trous tiennent et que le dernier lâche, ce n’est pas la règle qui manque : c’est l’attention, et elle ne se reprend pas en refaisant le même paragraphe mais en en faisant un plus court le lendemain.",
  ),

  f(
    "ho-trous-05",
    "Les homophones",
    "Texte à trous 5 · a / à, est / et, son / sont",
    [
      "Trois paires d’un coup pour la première fois. La difficulté n’est plus dans les tests mais dans le choix du test : avant de remplacer, il faut savoir par quoi.",
      "Une aide qu’on peut laisser sous ses yeux : regarder le mot qui suit le trou. Un nom juste derrière oriente vers « son » ; un adjectif derrière oriente vers « est » ou « sont » ; un participe derrière — resté, dit, trouvé — laisse encore le choix entre « a », « est » et « sont ». L’indice resserre le choix, et c’est toujours le test de remplacement qui tranche.",
      "Le jour où ça coince : on garde le paragraphe 1 seul, ses cinq trous, et on écrit le test en entier à côté de chacun. Cinq justifications écrites font une séance pleine.",
    ],
    [
      "1. Le vélo de Malo ___ resté tout l’hiver au fond du garage. Les deux pneus ___ plats, la chaîne ___ pris la rouille, et ___ guidon ___ de travers.",
      "2. Il faut d’abord le sortir ___ la lumière, ___ ce n’est pas commode : la tondeuse ___ les caisses bloquent le passage. Le voisin ___ dit qu’il passerait dimanche avec ___ outillage.",
      "3. Dimanche, la chaîne ___ graissée en trois minutes. Les freins ___ encore durs, mais Malo ___ trouvé la clé qui va bien, ___ le reste ___ suivi tout seul.",
      "4. Le vélo ___ reparti mardi, sur le chemin du canal. ___ compteur ne marche plus, mais les roues ___ droites ___ le guidon ne bouge plus.",
    ],
    [
      "1. **Le vélo de Malo est resté tout l’hiver au fond du garage. Les deux pneus sont plats, la chaîne a pris la rouille, et son guidon est de travers.** — « est resté » : « était resté » tient. — « sont plats » : « étaient plats » tient. — « a pris la rouille » : « avait pris la rouille » tient. — « son guidon » : « mon guidon » tient. — « est de travers » : « était de travers » tient.",
      "2. **Il faut d’abord le sortir à la lumière, et ce n’est pas commode : la tondeuse et les caisses bloquent le passage. Le voisin a dit qu’il passerait dimanche avec son outillage.** — « à la lumière » : « avait la lumière » ne veut rien dire. — « et ce n’est pas commode » : « et puis » tient. — « la tondeuse et les caisses » : « et puis » tient. — « a dit » : « avait dit » tient. — « son outillage » : « mon outillage » tient.",
      "3. **Dimanche, la chaîne est graissée en trois minutes. Les freins sont encore durs, mais Malo a trouvé la clé qui va bien, et le reste a suivi tout seul.** — « est graissée » : « était graissée » tient. — « sont encore durs » : « étaient encore durs » tient. — « a trouvé » : « avait trouvé » tient. — « et le reste » : « et puis le reste » tient. — « a suivi » : « avait suivi » tient.",
      "4. **Le vélo est reparti mardi, sur le chemin du canal. Son compteur ne marche plus, mais les roues sont droites et le guidon ne bouge plus.** — « est reparti » : « était reparti » tient. — « Son compteur » : « mon compteur » tient. — « sont droites » : « étaient droites » tient. — « et le guidon » : « et puis le guidon » tient.",
    ],
    "Ce qu’on regarde : est-ce qu’il essaie les tests dans le désordre jusqu’à ce que l’un marche, ou est-ce qu’il choisit. Les deux façons finissent par donner le bon mot, mais seule la seconde tient quand le texte s’allonge. S’il essaie tout, on ne le lui reproche pas : on lui demande, devant chaque trou, ce qu’il y a juste après — et ce seul réflexe réduit souvent les essais à un ou deux.",
  ),

  f(
    "ho-trous-06",
    "Les homophones",
    "Texte à trous 6 · les quatre paires",
    [
      "Les quatre paires réunies pour la première fois dans un même texte, et vingt et un trous. C’est le format qui tiendra jusqu’à la fin de l’année : ce qui montera ensuite, c’est la densité, pas le nombre de règles.",
      "Une séance utile commence par un repérage : avant d’écrire, il souligne au crayon les trous dont il est sûr, et laisse les autres. On remplit les sûrs d’abord, puis les voisins remplis aident à trancher les derniers.",
      "Le jour où ça coince : deux paragraphes au choix, les siens, et on s’arrête. Choisir lesquels fait partie de la séance.",
    ],
    [
      "1. ___ arrive au bord du ruisseau vers neuf heures. L’eau ___ haute : il ___ plu trois jours de suite ___ les pierres du gué ___ sous l’eau.",
      "2. ___ cherche un autre passage. Cinquante mètres plus haut, un tronc ___ tombé en travers : il ___ large comme une planche, ___ la mousse ___ sèche du côté du soleil.",
      "3. Les bottes ___ pleines quand même. ___ les vide sur l’herbe, ___ met les chaussettes ___ sécher sur une branche, et Malo repart pieds nus jusqu’___ la barrière.",
      "4. Au retour, les parents ___ demandé pourquoi tout ___ mouillé. Malo ___ montré ___ pantalon, ___ personne n’___ rien dit de plus.",
    ],
    [
      "1. **On arrive au bord du ruisseau vers neuf heures. L’eau est haute : il a plu trois jours de suite et les pierres du gué sont sous l’eau.** — « On arrive » : « il arrive » tient. — « est haute » : « était haute » tient. — « il a plu » : « il avait plu » tient. — « et les pierres » : « et puis les pierres » tient. — « sont sous l’eau » : « étaient sous l’eau » tient.",
      "2. **On cherche un autre passage. Cinquante mètres plus haut, un tronc est tombé en travers : il est large comme une planche, et la mousse est sèche du côté du soleil.** — « On cherche » : « il cherche » tient. — « est tombé » : « était tombé » tient. — « il est large » : « il était large » tient. — « et la mousse » : « et puis la mousse » tient. — « est sèche » : « était sèche » tient.",
      "3. **Les bottes sont pleines quand même. On les vide sur l’herbe, on met les chaussettes à sécher sur une branche, et Malo repart pieds nus jusqu’à la barrière.** — « sont pleines » : « étaient pleines » tient. — « On les vide » : « il les vide » tient. — « on met » : « il met » tient. — « à sécher » : « avait sécher » ne veut rien dire. — « jusqu’à la barrière » : même test.",
      "4. **Au retour, les parents ont demandé pourquoi tout est mouillé. Malo a montré son pantalon, et personne n’a rien dit de plus.** — « ont demandé » : « avaient demandé » tient. — « tout est mouillé » : « tout était mouillé » tient. — « a montré » : « avait montré » tient. — « son pantalon » : « mon pantalon » tient. — « et personne » : « et puis personne » tient. — « n’a rien dit » : « n’avait rien dit » tient.",
    ],
    "Ce qu’on regarde : le dernier paragraphe, qui contient les quatre paires en six trous. Les cinq premiers y sont des verbes ou des mots courts, et le sixième — « personne n’a rien dit » — cache le verbe avoir derrière une négation. Si celui-là résiste alors que les autres passent, c’est la négation qui gêne et non la paire : on enlève « ne … rien » à voix haute, et le test redevient lisible.",
  ),

  f(
    "ho-trous-07",
    "Les homophones",
    "Texte à trous 7 · les quatre, au grenier",
    [
      "Cinq paragraphes, vingt-neuf trous : le plus long texte de l’année jusqu’ici, et il ne se fait pas d’une traite. Prévoir une pause déclarée après le paragraphe 3, sans attendre qu’elle soit réclamée.",
      "Nouveauté du jour, discrète : le paragraphe 2 contient « n’ont jamais été ouvertes » et le paragraphe 4 « ont été imprimés », où le verbe avoir sert d’auxiliaire devant le mot « été ». Le test tient quand même — « avaient été imprimés » — et c’est ce qu’il faut lui faire constater plutôt que lui expliquer.",
      "Le jour où ça coince : trois paragraphes sur cinq, et on note le numéro du dernier trou rempli dans la marge pour reprendre exactement là la fois suivante. Un texte fait en deux séances reste un texte fait.",
    ],
    [
      "1. Le grenier ___ ouvert depuis le matin. ___ y monte avec Malo par une échelle qui grince, ___ il faut se tenir ___ la corde en arrivant en haut.",
      "2. Les malles ___ rangées le long du mur. ___ grand-père ___ écrit une date sur chacune : 1978, 1984, 1991. Celles du fond n’___ jamais été ouvertes, ___ personne ne sait pourquoi.",
      "3. Dans la première, il y ___ des cahiers ___ spirale, un paquet de photos ___ un carnet de timbres. Les photos ___ collées deux par deux, ___ ___ ne reconnaît personne.",
      "4. Malo ___ pris le carnet. ___ père lui ___ expliqué que ces timbres ___ été imprimés bien avant lui, ___ qu’___ les collectionnait encore ___ l’époque.",
      "5. ___ redescend ___ six heures, les mains grises. Le carnet ___ resté en haut : ___ coin ___ au fond de la malle, ___ tout le monde ___ d’accord.",
    ],
    [
      "1. **Le grenier est ouvert depuis le matin. On y monte avec Malo par une échelle qui grince, et il faut se tenir à la corde en arrivant en haut.** — « est ouvert » : « était ouvert » tient. S’il propose « a », on fait le test à voix haute avec lui — « le grenier avait ouvert » — et on regarde ensemble si la phrase veut encore dire quelque chose : la réponse reste « est », mais sa proposition se discute, elle ne se barre pas. — « On y monte » : « il y monte » tient. — « et il faut » : « et puis il faut » tient. — « à la corde » : « avait la corde » ne veut rien dire.",
      "2. **Les malles sont rangées le long du mur. Son grand-père a écrit une date sur chacune : 1978, 1984, 1991. Celles du fond n’ont jamais été ouvertes, et personne ne sait pourquoi.** — « sont rangées » : « étaient rangées » tient. — « Son grand-père » : « mon grand-père » tient. — « a écrit » : « avait écrit » tient. — « n’ont jamais été ouvertes » : « n’avaient jamais été ouvertes » tient ; c’est bien avoir, même si « été » suit. — « et personne » : « et puis personne » tient.",
      "3. **Dans la première, il y a des cahiers à spirale, un paquet de photos et un carnet de timbres. Les photos sont collées deux par deux, et on ne reconnaît personne.** — « il y a » : « il y avait » tient. — « à spirale » : « avait spirale » ne veut rien dire. — « et un carnet » : « et puis un carnet » tient. — « sont collées » : « étaient collées » tient. — « et on » : « et puis on » tient. — « on ne reconnaît » : « il ne reconnaît » tient.",
      "4. **Malo a pris le carnet. Son père lui a expliqué que ces timbres ont été imprimés bien avant lui, et qu’on les collectionnait encore à l’époque.** — « a pris » : « avait pris » tient. — « Son père » : « mon père » tient. — « lui a expliqué » : « lui avait expliqué » tient. — « ont été imprimés » : « avaient été imprimés » tient. — « et qu’on » : « et puis » tient. — « qu’on les collectionnait » : « qu’il les collectionnait » tient. — « à l’époque » : « avait l’époque » ne veut rien dire.",
      "5. **On redescend à six heures, les mains grises. Le carnet est resté en haut : son coin est au fond de la malle, et tout le monde est d’accord.** — « On redescend » : « il redescend » tient. — « à six heures » : « avait six heures » ne veut rien dire. — « est resté » : « était resté » tient. — « son coin » : « mon coin » tient. — « est au fond » : « était au fond » tient. — « et tout le monde » : « et puis » tient. — « est d’accord » : « était d’accord » tient.",
    ],
    "Ce qu’on regarde : la vitesse, et rien d’autre aujourd’hui. Les quatre paires sont travaillées depuis l’automne, et ce qui se joue en mai n’est plus de savoir mais de ne plus avoir besoin de s’arrêter. Si un trou sur deux demande encore un test dit à voix haute, c’est l’ordinaire et il n’y a rien à changer ; si trois ou quatre passent d’affilée sans arrêt, la paire correspondante est installée, et on peut porter l’attention sur celle qui ralentit encore.",
  ),

  f(
    "ho-trous-08",
    "Les homophones",
    "Texte à trous 8 · les quatre, et les endroits qui piègent",
    [
      "Le texte du jour empile exprès ce qui piège : « On a couru », « ont eu », « est à l’heure », « son » et « sont » dans la même phrase. Rien de neuf dans les règles, tout dans la disposition.",
      "Trois endroits méritent d’être signalés avant de commencer, sans dire la réponse : le tout premier « ___ ___ couru », le « ___ eu » du paragraphe 3, et le « ___ s’___ installé » du paragraphe 4. Savoir qu’un piège arrive ne le résout pas, mais ça évite de le traverser sans le voir.",
      "Le jour où ça coince : on saute les paragraphes 2 et 4, les plus denses, et on fait les trois autres. L’histoire garde son sens et personne n’y perd.",
    ],
    [
      "1. Le train de sept heures douze ___ supprimé. ___ ___ couru pour rien : les autres voyageurs ___ déjà repartis vers le hall, ___ l’affichage ___ devenu rouge.",
      "2. ___ nous ___ donné un bon pour le suivant. Le billet ___ maintenant valable jusqu’___ midi, ___ il ___ fallu le faire tamponner ___ un guichet.",
      "3. Les deux dames devant nous ___ eu le même problème. L’une ___ sorti ___ téléphone, l’autre ___ assise sur ___ sac, ___ elles ___ attendu avec nous.",
      "4. Le train de neuf heures quarante, lui, ___ ___ l’heure. ___ s’___ installé près de la fenêtre. Le contrôleur ___ regardé le bon, ___ il n’___ rien dit.",
      "5. Deux heures plus tard, les champs ___ remplacés par des toits. Malo dort ; ___ frère et ___ père ___ collés à la vitre pour lire les noms des gares. Celui de l’arrivée ___ écrit en grand, ___ le quai ___ juste ___ droite.",
    ],
    [
      "1. **Le train de sept heures douze est supprimé. On a couru pour rien : les autres voyageurs sont déjà repartis vers le hall, et l’affichage est devenu rouge.** — « est supprimé » : « était supprimé » tient. — « On a couru » : « il a couru » tient pour le premier mot, « on avait couru » pour le second. — « sont déjà repartis » : « étaient repartis » tient. S’il propose « ont », on fait le test à voix haute avec lui — « les voyageurs avaient repartis » — et on regarde ensemble si la phrase veut encore dire quelque chose : la réponse reste « sont », mais sa proposition se discute, elle ne se barre pas. — « et l’affichage » : « et puis » tient. — « est devenu » : « était devenu » tient.",
      "2. **On nous a donné un bon pour le suivant. Le billet est maintenant valable jusqu’à midi, et il a fallu le faire tamponner à un guichet.** — « On nous » : « il nous » tient. — « a donné » : « avait donné » tient. — « est valable » : « était valable » tient. — « jusqu’à midi » : « avait midi » ne veut rien dire. — « et il » : « et puis il » tient. — « a fallu » : « avait fallu » tient. — « à un guichet » : « avait un guichet » ne tient pas ici.",
      "3. **Les deux dames devant nous ont eu le même problème. L’une a sorti son téléphone, l’autre est assise sur son sac, et elles ont attendu avec nous.** — « ont eu » : « avaient eu » tient — deux formes du verbe avoir l’une contre l’autre, et le test marche quand même. — « a sorti » : « avait sorti » tient. — « son téléphone » : « mon téléphone » tient. — « est assise » : « était assise » tient. — « son sac » : « mon sac » tient. — « et elles » : « et puis » tient. — « ont attendu » : « avaient attendu » tient.",
      "4. **Le train de neuf heures quarante, lui, est à l’heure. On s’est installé près de la fenêtre. Le contrôleur a regardé le bon, et il n’a rien dit.** — « est à l’heure » : « était à l’heure » tient pour le premier mot. — « à l’heure » : « est avait l’heure » ne veut rien dire, donc « à » pour le second. — « On s’est » : « il s’est installé » tient. — « s’est installé » : « s’était installé » tient. Le participe est imprimé « installé », mais « installés » est juste aussi, puisque « on » désigne ici plusieurs voyageurs : s’il ajoute un s, on l’accepte. — « a regardé » : « avait regardé » tient. — « et il » : « et puis il » tient. — « n’a rien dit » : « n’avait rien dit » tient.",
      "5. **Deux heures plus tard, les champs sont remplacés par des toits. Malo dort ; son frère et son père sont collés à la vitre pour lire les noms des gares. Celui de l’arrivée est écrit en grand, et le quai est juste à droite.** — « sont remplacés » : « étaient remplacés » tient. — « son frère », « son père » : « mon frère », « mon père » tiennent. — « sont collés » : « étaient collés » tient ; « son père » et « sont » se suivent presque, et seul le test les sépare. — « est écrit » : « était écrit » tient. — « et le quai » : « et puis » tient. — « est juste » : « était juste » tient. — « à droite » : « avait droite » ne veut rien dire.",
    ],
    "Ce qu’on regarde : « ont eu », au paragraphe 3. Deux formes du verbe avoir l’une contre l’autre, et le test donne « avaient eu », qui sonne étrangement juste. C’est le trou le plus exigeant de l’année, et il n’y a aucune raison qu’il tombe du premier coup. S’il le manque, on ne le refait pas : on le remet dans une phrase à lui, à l’oral, la semaine suivante — « ils ont eu chaud », « ils ont eu peur » — et il finira par s’installer sans qu’on y revienne par écrit.",
  ),

  f(
    "ho-trous-09",
    "Les homophones",
    "Texte à trous 9 · les quatre, au bord de la mer",
    [
      "Dernier texte de l’année. Il ne contient rien de plus difficile que celui du 4 juin : il est seulement long, et il se lit d’un bout à l’autre comme un vrai texte. Le lire en entier à voix haute avant d’écrire quoi que ce soit.",
      "Une chose à faire à la fin, et elle vaut la séance : relire le texte rempli d’une traite, sans s’arrêter sur les trous. Un texte qu’on peut relire sans buter est un texte juste, et il l’entendra tout seul.",
      "Le jour où ça coince : on prend les paragraphes 1 et 5, qui se répondent — l’arrivée et le retour —, et on laisse le milieu. Deux paragraphes tenus font un texte court et entier.",
    ],
    [
      "1. ___ marche sur le sable dur, celui que la mer ___ laissé en se retirant. Les flaques ___ tièdes, ___ le vent ___ tombé depuis midi.",
      "2. Malo ramasse tout ce qui traîne : des coquillages, un bout de corde ___ un morceau de verre poli. ___ seau ___ déjà plein, ___ il continue. ___ lui ___ dit d’en laisser un peu.",
      "3. Les mouettes ___ appris que les gens laissent tomber des choses. Elles ___ posées ___ dix mètres, ___ elles attendent. Dès qu’___ ouvre un sac, elles ___ toutes ___ moins de trois pas.",
      "4. Le phare ___ au bout de la digue. ___ feu tourne toutes les cinq secondes, ___ ceux qui rentrent de nuit ___ besoin de le voir de loin. Le gardien ___ parti il y ___ trente ans : la machine ___ automatique maintenant.",
      "5. ___ rentre par la route du haut. Les volets des maisons ___ fermés : c’___ trop tôt dans la saison, ___ presque personne n’___ arrivé. Malo dort dans la voiture, ___ poing encore plein de sable.",
    ],
    [
      "1. **On marche sur le sable dur, celui que la mer a laissé en se retirant. Les flaques sont tièdes, et le vent est tombé depuis midi.** — « On marche » : « il marche » tient. — « a laissé » : « avait laissé » tient. — « sont tièdes » : « étaient tièdes » tient. — « et le vent » : « et puis » tient. — « est tombé » : « était tombé » tient.",
      "2. **Malo ramasse tout ce qui traîne : des coquillages, un bout de corde et un morceau de verre poli. Son seau est déjà plein, et il continue. On lui a dit d’en laisser un peu.** — « et un morceau » : « et puis » tient. — « Son seau » : « mon seau » tient. — « est déjà plein » : « était déjà plein » tient. — « et il continue » : « et puis » tient. — « On lui » : « il lui » tient. — « a dit » : « avait dit » tient.",
      "3. **Les mouettes ont appris que les gens laissent tomber des choses. Elles sont posées à dix mètres, et elles attendent. Dès qu’on ouvre un sac, elles sont toutes à moins de trois pas.** — « ont appris » : « avaient appris » tient. — « sont posées » : « étaient posées » tient. — « à dix mètres » : « avait dix mètres » ne veut rien dire ici. — « et elles » : « et puis » tient. — « qu’on ouvre » : « qu’il ouvre » tient. — « elles sont toutes » : « elles étaient toutes » tient. — « à moins de trois pas » : même test que plus haut.",
      "4. **Le phare est au bout de la digue. Son feu tourne toutes les cinq secondes, et ceux qui rentrent de nuit ont besoin de le voir de loin. Le gardien est parti il y a trente ans : la machine est automatique maintenant.** — « est au bout » : « était au bout » tient. — « Son feu » : « mon feu » tient. — « et ceux » : « et puis » tient. — « ont besoin » : « avaient besoin » tient. — « est parti » : « était parti » tient. — « il y a trente ans » : « il y avait trente ans » tient. — « est automatique » : « était automatique » tient.",
      "5. **On rentre par la route du haut. Les volets des maisons sont fermés : c’est trop tôt dans la saison, et presque personne n’est arrivé. Malo dort dans la voiture, son poing encore plein de sable.** — « On rentre » : « il rentre » tient. — « sont fermés » : « étaient fermés » tient. — « c’est trop tôt » : « c’était trop tôt » tient. — « et presque personne » : « et puis » tient. — « n’est arrivé » : « n’était arrivé » tient. — « son poing » : « mon poing » tient.",
    ],
    "Ce qu’on regarde en juin n’est plus une paire mais une habitude : est-ce qu’il justifie encore, et est-ce qu’il justifie juste. Remplacer « son » par « mon » sans y penser, c’est le travail de l’année fini. Hésiter encore sur les derniers trous d’un texte de trente et un, c’est de la fatigue, et ça n’a rien à voir. Pour faire la différence, il suffit de regarder à quel numéro de trou les hésitations commencent.",
  ),

  /* ------------------------------------------------------------------ */
  /* RÉSERVE — deux textes qui ne tombent pas dans l'année.              */
  /* Ils remplacent un texte qui ne prend pas, ou prolongent une année   */
  /* qui déborde. Ce sont les deux plus exigeants des onze.              */
  /* ------------------------------------------------------------------ */

  f(
    "ho-trous-10",
    "Les homophones",
    "Texte à trous 10 · les quatre, au plus serré",
    [
      "Texte de réserve, le plus dense des onze : trente-huit trous, les quatre paires, et presque aucune phrase qui n’en contienne un. Il remplace un texte qui n’a pas pris, ou prolonge une année qui déborde.",
      "Il se coupe en deux sans rien perdre : les paragraphes 1 à 3 racontent l’installation, les 4 et 5 la suite. Deux séances de quinze minutes valent mieux qu’une de vingt-cinq, et le texte est écrit pour ça.",
      "Le jour où ça coince — et ça coincera, c’est le plus long du lot : on s’arrête au paragraphe en cours, on relit ce qui est fait, et on note le numéro du dernier trou rempli dans la marge. Rien d’autre.",
    ],
    [
      "1. La serre du fond ___ en verre pour moitié, en plastique pour le reste. ___ y entre par une porte qui ne ferme plus, ___ il faut la caler avec une pierre. Les tomates ___ au fond, ___ côté du mur chaud.",
      "2. ___ arrose le soir, jamais ___ midi. Le grand-père de Malo ___ expliqué pourquoi : l’eau versée ___ midi s’évapore avant d’arriver aux racines, ___ les feuilles mouillées au soleil brûlent.",
      "3. Les semis ___ sortis en quinze jours. ___ ___ repiqué ceux qui ___ trop serrés, ___ les autres ___ restés en place. Chacun ___ maintenant ___ pot, ___ ___ étiquette plantée dans la terre.",
      "4. Les limaces ___ trouvé le chemin avant nous. Elles ___ mangé trois pieds de salade, ___ ___ n’___ rien vu venir. Le voisin ___ dit qu’il ___ des coquilles d’œuf ___ donner, ___ que ça les arrête.",
      "5. En juillet, la serre ___ trop chaude ___ midi. ___ ouvre les deux bouts, ___ le courant d’air suffit. Les tomates ___ mûres vers le 20, ___ le pied du fond ___ toujours en retard sur les autres : ___ coin ___ moins de soleil.",
    ],
    [
      "1. **La serre du fond est en verre pour moitié, en plastique pour le reste. On y entre par une porte qui ne ferme plus, et il faut la caler avec une pierre. Les tomates sont au fond, à côté du mur chaud.** — « est en verre » : « était en verre » tient. — « On y entre » : « il y entre » tient. — « et il faut » : « et puis » tient. — « sont au fond » : « étaient au fond » tient. — « à côté » : « avait côté » ne veut rien dire.",
      "2. **On arrose le soir, jamais à midi. Le grand-père de Malo a expliqué pourquoi : l’eau versée à midi s’évapore avant d’arriver aux racines, et les feuilles mouillées au soleil brûlent.** — « On arrose » : « il arrose » tient. — « à midi » : « avait midi » ne veut rien dire. — « a expliqué » : « avait expliqué » tient. — « versée à midi » : même test que plus haut. — « et les feuilles » : « et puis » tient.",
      "3. **Les semis sont sortis en quinze jours. On a repiqué ceux qui sont trop serrés, et les autres sont restés en place. Chacun a maintenant son pot, et son étiquette plantée dans la terre.** — « sont sortis » : « étaient sortis » tient. — « On a repiqué » : « il a repiqué » tient pour le premier mot, « on avait repiqué » pour le second. — « ceux qui sont trop serrés » : « qui étaient trop serrés » tient. — « et les autres » : « et puis » tient. — « sont restés » : « étaient restés » tient. — « Chacun a » : « chacun avait » tient. — « son pot » : « mon pot » tient. — « et son étiquette » : « et puis » tient, puis « mon étiquette ».",
      "4. **Les limaces ont trouvé le chemin avant nous. Elles ont mangé trois pieds de salade, et on n’a rien vu venir. Le voisin a dit qu’il a des coquilles d’œuf à donner, et que ça les arrête.** — « ont trouvé » : « avaient trouvé » tient. — « ont mangé » : « avaient mangé » tient. — « et on » : « et puis » tient, puis « il n’a rien vu ». — « n’a rien vu » : « n’avait rien vu » tient. — « a dit » : « avait dit » tient. — « qu’il a des coquilles » : « qu’il avait des coquilles » tient. — « à donner » : « avait donner » ne veut rien dire. — « et que » : « et puis » tient.",
      "5. **En juillet, la serre est trop chaude à midi. On ouvre les deux bouts, et le courant d’air suffit. Les tomates sont mûres vers le 20, et le pied du fond est toujours en retard sur les autres : son coin a moins de soleil.** — « est trop chaude » : « était trop chaude » tient. — « à midi » : le même test que deux fois plus haut. — « On ouvre » : « il ouvre » tient. — « et le courant d’air » : « et puis » tient. — « sont mûres » : « étaient mûres » tient. — « et le pied du fond » : « et puis » tient. — « est toujours en retard » : « était toujours en retard » tient. — « son coin » : « mon coin » tient. — « a moins de soleil » : « avait moins de soleil » tient.",
    ],
    "Ce qu’on regarde : le paragraphe 3, dix trous en quatre lignes avec trois « sont » de suite. Une densité pareille ne se travaille pas, elle se traverse — et ce qu’elle montre, c’est si le test tient quand il n’y a plus de respiration entre deux. Si les trois premiers passent et que le quatrième lâche, c’est de la fatigue et non la règle ; on le note, et on ne revient pas dessus le lendemain.",
  ),

  f(
    "ho-trous-11",
    "Les homophones",
    "Texte à trous 11 · les quatre, et la justification écrite",
    [
      "Texte de réserve, et la consigne change : pour **chaque** trou, il écrit dans la marge le mot de remplacement qu’il a essayé, avant d’écrire dans le trou. Vingt-huit trous, vingt-huit mots dans la marge — et c’est la marge qu’on relit ensemble à la fin, pas le texte.",
      "Ce format est plus lent que les autres, et c’est voulu : il rend visible ce qui d’habitude se passe dans la tête. Prévoir de n’en faire que la moitié en vingt-cinq minutes, et tenir cette moitié pour le format normal.",
      "Le jour où ça coince : on garde la consigne et on réduit le texte à deux paragraphes. Écrire neuf justifications vaut mieux que d’en sauter la moitié pour finir le texte.",
    ],
    [
      "1. Le vide-grenier ___ lieu le premier dimanche de juin. ___ arrive ___ sept heures pour avoir une place ___ l’ombre.",
      "2. Les tables ___ prêtées par la mairie. Celles du fond ___ bancales, ___ chacun apporte ___ tréteau au cas où.",
      "3. Malo ___ apporté une caisse de livres ___ une boîte de billes. Les prix ___ écrits au crayon dessous, ___ ___ peut discuter.",
      "4. ___ midi, la moitié de la caisse ___ partie. Un monsieur ___ acheté les dix derniers livres d’un coup : il ___ dit qu’il ___ une petite-fille qui lit beaucoup, ___ que ces livres ___ pour elle.",
      "5. ___ remballe ___ cinq heures. Les billes ___ toutes restées, ___ Malo ___ décidé de les garder. ___ coffre ___ plus léger qu’au départ, ___ personne ne fait de remarque.",
    ],
    [
      "1. **Le vide-grenier a lieu le premier dimanche de juin. On arrive à sept heures pour avoir une place à l’ombre.** — « a lieu » : « avait lieu » tient. — « On arrive » : « il arrive » tient. — « à sept heures » : « avait sept heures » ne veut rien dire. — « à l’ombre » : même test.",
      "2. **Les tables sont prêtées par la mairie. Celles du fond sont bancales, et chacun apporte son tréteau au cas où.** — « sont prêtées » : « étaient prêtées » tient. — « sont bancales » : « étaient bancales » tient. — « et chacun » : « et puis » tient. — « son tréteau » : « mon tréteau » tient.",
      "3. **Malo a apporté une caisse de livres et une boîte de billes. Les prix sont écrits au crayon dessous, et on peut discuter.** — « a apporté » : « avait apporté » tient. — « et une boîte » : « et puis » tient. — « sont écrits » : « étaient écrits » tient. — « et on » : « et puis » tient. — « on peut » : « il peut » tient.",
      "4. **À midi, la moitié de la caisse est partie. Un monsieur a acheté les dix derniers livres d’un coup : il a dit qu’il a une petite-fille qui lit beaucoup, et que ces livres sont pour elle.** — « À midi » : « avait midi » ne veut rien dire. — « est partie » : « était partie » tient. — « a acheté » : « avait acheté » tient. — « il a dit » : « il avait dit » tient. — « qu’il a une petite-fille » : « qu’il avait une petite-fille » tient. — « et que » : « et puis » tient. — « sont pour elle » : « étaient pour elle » tient.",
      "5. **On remballe à cinq heures. Les billes sont toutes restées, et Malo a décidé de les garder. Son coffre est plus léger qu’au départ, et personne ne fait de remarque.** — « On remballe » : « il remballe » tient. — « à cinq heures » : « avait cinq heures » ne veut rien dire. — « sont toutes restées » : « étaient toutes restées » tient. — « et Malo » : « et puis » tient. — « a décidé » : « avait décidé » tient. — « Son coffre » : « mon coffre » tient. — « est plus léger » : « était plus léger » tient. — « et personne » : « et puis » tient.",
    ],
    "Ce qu’on regarde, et c’est la seule fiche où ça se voit vraiment : la marge. Un test juste en face d’un trou juste, c’est le cas ordinaire. Un test juste en face d’un trou faux dit que la main a trahi le raisonnement, et ça se reprend en une minute. Un trou juste sans test dit qu’il commence à ne plus en avoir besoin, ce qui est le but. Et un test qui ne mène pas au mot écrit — « avait » dans la marge, « sont » juste dans le trou — est le seul cas qui mérite qu’on s’arrête : la bonne réponse n’est pas venue du test, et ça ne se voit nulle part ailleurs.",
  ),
];
