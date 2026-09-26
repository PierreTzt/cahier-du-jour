/**
 * Arts plastiques et éducation musicale, CM1 — l'année entière.
 *
 * Adossé aux programmes d'**enseignements artistiques du cycle 3** en vigueur.
 * Aucun programme neuf ne s'applique à ces matières pour la rentrée 2026 : les
 * références renvoient aux compétences du cycle sans citer un article que je
 * n'ai pas vérifié.
 *
 * La limite est la même qu'en sciences, mais plus forte encore : **les arts se
 * pratiquent**. On dessine, on peint, on chante, on écoute. Les quatre leçons
 * qui suivent donnent du vocabulaire et apprennent à regarder et à écouter —
 * ce qui est utile et insuffisant. Chaque leçon se termine donc par une partie
 * « À faire » : ce qu'il y aurait à peindre, à frapper, à cadrer ou à
 * chanter pour de vrai. Rien de tout cela ne peut être vérifié depuis un
 * écran, et c'est pourtant là que l'essentiel se joue.
 *
 * Quatre leçons pour une année, c'est peu, et le choix est assumé : les
 * couleurs, la lecture d'image, l'écoute, le rythme. Manquent notamment le
 * volume et le modelage, les matériaux et les supports, l'espace et
 * l'architecture, le chant en groupe, l'invention de sons, et les repères
 * d'histoire des arts. Aucune leçon n'est placée en période 1.
 *
 * Rien de tout ceci n'a été relu par un enseignant. Ça doit l'être.
 */

import { e, q, type Lecon } from "./types";

const couleurs: Lecon = {
  code: "ar-p2-couleurs",
  matiere: "arts",
  periode: 2,
  titre: "Les couleurs",
  reference:
    "Expérimenter les effets des couleurs et des matériaux ; employer un vocabulaire approprié pour décrire ses choix et ceux des autres.",
  minutes: 25,
  cours: [
    {
      texte: [
        "Les couleurs ne sont pas seulement jolies ou moches : elles obéissent à des règles qu’on peut connaître, et qui permettent d’obtenir ce qu’on veut au lieu de l’obtenir par hasard.",
      ],
    },
    {
      titre: "Primaires et secondaires",
      texte: [
        "Trois couleurs ne peuvent pas être fabriquées en mélangeant les autres : le **magenta** (un rouge qui tire sur le rose), le **cyan** (un bleu clair qui tire sur le vert) et le **jaune**. On les appelle **primaires**.",
        "À l’école, on dit plus simplement **rouge, bleu et jaune**. C’est une approximation commode : avec des tubes de gouache, les mélanges tombent à peu près juste. Dans toute la leçon on parlera ainsi — mais tu sais maintenant que l’imprimeur, lui, travaille avec le magenta et le cyan. Regarde le nom écrit sur les cartouches d’une imprimante : ce sont ces mots-là.",
        "En mélangeant deux primaires, on obtient une **secondaire** : bleu + jaune = vert ; rouge + jaune = orange ; rouge + bleu = violet.",
        "Le **blanc** éclaircit et le **noir** assombrit — mais le noir éteint la couleur en même temps qu’il la fonce, et elle devient grise. Pour foncer sans éteindre, les peintres ajoutent plutôt une **pointe** de la couleur complémentaire, celle qu’on verra plus bas.",
      ],
      regle:
        "Avec trois primaires, du blanc et du noir, on peut fabriquer presque toutes les couleurs. C’est pour cela qu’on n’a pas besoin de cinquante tubes.",
    },
    {
      titre: "Chaudes et froides",
      texte: [
        "Les couleurs **chaudes** — rouge, orange, jaune — semblent avancer vers celui qui regarde.",
        "Les couleurs **froides** — bleu, vert, violet — semblent reculer.",
        "Ces deux mots viennent de ce qu’on voit autour de soi : le feu, le soleil et le sable sont rouges, orangés, jaunes ; la mer, la glace et les ombres sont bleues. Une couleur n’a pas vraiment de température : c’est notre œil qui lui en prête une, et il le fait à tous les coups.",
        "Les peintres s’en servent pour créer de la profondeur : les lointains en bleuté, les premiers plans en tons chauds. On appelle ça la perspective atmosphérique, et elle imite ce que fait vraiment l’air sur les montagnes lointaines.",
      ],
    },
    {
      titre: "Les complémentaires",
      texte: [
        "Chaque primaire a une **complémentaire**, qui est la secondaire des deux autres : le rouge va avec le vert, le bleu avec l’orange, le jaune avec le violet.",
        "Côte à côte, deux complémentaires se renforcent : le contraste éclate. Vincent van Gogh (1853-1890) s’en est beaucoup servi — les jaunes et les bleus-violets de « La Nuit étoilée », peinte en 1889, vibrent pour cette raison.",
        "Mélangées, au contraire, elles s’éteignent et donnent un gris. C’est la façon la plus élégante d’assourdir une couleur trop vive.",
        "Tout est affaire de dose, et c’est ce qui trompe souvent : une **pointe** de complémentaire fonce la couleur en la laissant vivante ; à parts égales, les deux s’annulent et il ne reste qu’un gris. Même couple, même geste, deux résultats — c’est la quantité qui décide.",
      ],
      regle:
        "Deux complémentaires côte à côte se renforcent. Mélangées, elles s’annulent. Le même couple, deux effets opposés.",
    },
    {
      titre: "La peinture et la lumière ne se mélangent pas pareil",
      texte: [
        "Tout ce qui précède vaut pour la **matière** : peinture, crayons, encres, posés sur une feuille. Là, plus on mélange, plus c’est sombre, parce que chaque couleur ajoutée avale un peu plus de lumière. Mélange ensemble tes trois primaires et tes trois secondaires : tu obtiendras un brun presque noir, jamais du blanc.",
        "Avec la **lumière**, c’est exactement l’inverse. Les trois couleurs de base d’un écran sont le **rouge**, le **vert** et le **bleu**, et plus on en additionne, plus c’est clair : les trois ensemble donnent du blanc.",
        "Approche ton œil tout près d’un écran allumé sur une image blanche. Ce blanc est fait de minuscules points rouges, verts et bleus, si serrés que ton œil les additionne à ta place.",
      ],
      regle:
        "En peinture, mélanger assombrit ; en lumière, mélanger éclaircit. Ce ne sont pas les mêmes couleurs de base, donc ce ne sont pas les mêmes mélanges.",
    },
    {
      titre: "À faire, avec les mains",
      texte: [
        "Une couleur ne s’apprend pas en la lisant. Sors trois crayons ou trois tubes — un rouge, un bleu, un jaune — et du blanc.",
        "Le nuancier : les trois primaires en haut d’une feuille, et en dessous les trois secondaires, obtenues deux à deux. Six cases. Garde cette feuille, elle te servira toute l’année.",
        "Le dégradé : une bande de bleu pur, puis la même avec une pointe de blanc, puis un peu plus de blanc, cinq fois de suite. Tu verras à quelle vitesse le blanc change une couleur.",
        "Le tour qui surprend : peins deux petits carrés d’orange rigoureusement identiques, l’un au milieu d’un fond bleu, l’autre au milieu d’un fond orange pâle. Recule de trois pas. L’orange n’a pas bougé, et pourtant il ne paraît pas le même : c’est son voisin qui décide de ce que ton œil voit.",
      ],
    },
  ],
  exemples: [
    {
      enonce: "En peinture, quelle couleur obtient-on en mélangeant du bleu et du jaune, et comment la foncer sans l’éteindre ?",
      etapes: [
        "Bleu + jaune donne du vert : c’est une couleur secondaire.",
        "Pour la foncer, le noir ferait l’affaire, mais il éteindrait le vert et le rendrait grisâtre.",
        "Mieux vaut une **pointe** de sa complémentaire, le rouge : le vert fonce en restant vivant. À parts égales, en revanche, les deux s’annuleraient en gris.",
      ],
      resultat: "du vert · une pointe de rouge",
    },
  ],
  exercices: [
    e("ar-p2-cl-1", "En peinture, quelle couleur obtient-on en mélangeant du bleu et du jaune ?", "vert", "Deux primaires donnent une secondaire : bleu + jaune = vert."),
    e("ar-p2-cl-2", "En peinture, quelle couleur obtient-on en mélangeant du rouge et du bleu ?", "violet", "Rouge + bleu = violet, une couleur secondaire."),
    q("ar-p2-cl-3", "Combien y a-t-il de couleurs primaires ?", ["trois", "deux", "six"], "trois", "Magenta, cyan et jaune — souvent dits rouge, bleu et jaune à l’école. La lumière en a trois aussi, mais d’autres : rouge, vert et bleu."),
    q("ar-p2-cl-4", "Le bleu est une couleur…", ["froide", "chaude"], "froide", "Les couleurs froides semblent reculer ; les chaudes — rouge, orange, jaune — semblent avancer."),
    q("ar-p2-cl-5", "En peinture, quelle est la complémentaire du rouge ?", ["le vert", "le bleu", "le jaune"], "le vert", "Le vert est la secondaire des deux autres primaires, bleu et jaune."),
    q("ar-p2-cl-6", "Deux couleurs complémentaires côte à côte…", ["se renforcent", "s’annulent", "ne changent rien"], "se renforcent", "Le contraste éclate. Mélangées, en revanche, elles s’éteignent en gris."),
    e("ar-p2-cl-7", "En peinture, quelle couleur obtient-on en mélangeant du rouge et du jaune ?", "orange", "Rouge + jaune = orange. Avec le vert et le violet, cela fait les trois secondaires."),
    q("ar-p2-cl-8", "Quelles sont les trois couleurs de base de la lumière, sur un écran ?", ["rouge, vert et bleu", "rouge, jaune et bleu", "magenta, cyan et jaune"], "rouge, vert et bleu", "Les trois additionnées donnent du blanc. En peinture, mélanger assombrit ; en lumière, mélanger éclaircit."),
  ],
};

const lireImage: Lecon = {
  code: "ar-p3-image",
  matiere: "arts",
  periode: 3,
  titre: "Regarder une image",
  reference:
    "Décrire et interroger à l’aide d’un vocabulaire spécifique ses productions et celles de ses pairs ainsi que des œuvres d’art ; identifier quelques éléments de composition.",
  minutes: 25,
  cours: [
    {
      texte: [
        "On croit qu’une image se voit d’un coup. En réalité, on la regarde dans un ordre — et cet ordre a été décidé par celui qui l’a faite.",
      ],
    },
    {
      titre: "Décrire avant d’interpréter",
      texte: [
        "Premier temps : ce qu’on **voit**. Quoi, où, de quelle couleur, quelle taille. Personne ne peut être en désaccord là-dessus.",
        "Deuxième temps : ce qu’on **comprend**. Que se passe-t-il, quel moment est-ce ?",
        "Troisième temps : ce qu’on **ressent**, et pourquoi — en montrant ce qui dans l’image le produit.",
        "L’erreur la plus fréquente est de sauter directement au troisième. « C’est triste » ne dit rien tant qu’on n’a pas montré ce qui, dans l’image, fait cet effet.",
      ],
      regle: "Décrire, puis comprendre, puis ressentir. Dans cet ordre, jamais l’inverse.",
    },
    {
      titre: "La composition dirige le regard",
      texte: [
        "Les **plans** : ce qui est devant, au milieu, au fond. Le plus proche de celui qui regarde est le **premier plan** ; le plus lointain, l’**arrière-plan** ; entre les deux, le second plan. On les distingue par la taille et par la netteté : ce qui est près paraît grand et net, ce qui est loin paraît petit et flou.",
        "Les **lignes** : les diagonales donnent du mouvement, les horizontales du calme, les verticales de la solennité.",
        "Le **cadrage** : ce que l’auteur a choisi de montrer — et donc ce qu’il a choisi de couper. Ce qui est hors du cadre compte autant que ce qui y est.",
        "Le **point de vue** : d’en haut, on domine ce qu’on regarde ; d’en bas, ce qu’on regarde nous domine. Ce n’est jamais un détail.",
        "Ces deux points de vue portent un nom : vue d’en haut, c’est une **plongée** ; vue d’en bas, une **contre-plongée**. Au cinéma comme en peinture, on s’en sert pour rendre un personnage écrasé ou imposant sans avoir besoin de le dire.",
      ],
    },
    {
      titre: "Ce qui attire l’œil",
      texte: [
        "Le plus **clair** sur du sombre, ou l’inverse.",
        "Le point de plus fort **contraste** de couleur.",
        "Un **visage**, et surtout un regard : l’œil humain les cherche avant tout le reste.",
        "Le point où les **lignes** convergent.",
        "Un peintre place ce qui compte à l’un de ces endroits. Rien n’est laissé au hasard dans une image réussie.",
        "Prends « La Grande Vague de Kanagawa », l’estampe du Japonais Katsushika Hokusai (1760-1849), gravée vers 1831. La vague énorme tient tout le premier plan, sa crête part en diagonale, et le mont Fuji, minuscule, attend au fond. On croit voir la mer ; or l’estampe appartient à une série intitulée « Trente-six vues du mont Fuji ». Le sujet annoncé, c’est la montagne.",
      ],
      regle:
        "Demande-toi toujours : où mon œil est-il allé en premier, et qu’est-ce qui l’y a envoyé ?",
    },
    {
      titre: "À faire, avec les mains",
      texte: [
        "Regarder s’apprend en fabriquant des images, pas seulement en les commentant.",
        "Découpe un rectangle au milieu d’une feuille : tu tiens un cadre. Promène-le devant la fenêtre, approche-le de ton œil, éloigne-le. L’image change à chaque déplacement alors que rien n’a bougé dehors. Cadrer, c’est choisir — et donc renoncer à tout le reste.",
        "Avec un appareil ou un téléphone, photographie trois fois le même objet : debout au-dessus de lui, à sa hauteur, puis accroupi en dessous. Pose les trois images côte à côte et dis à voix haute ce qui a changé. Ce n’est pas l’objet.",
        "Puis dessine une scène en trois plans : un objet grand et net devant, un plus petit au milieu, une ligne d’horizon à peine marquée au fond. Tu viens de fabriquer de la profondeur sur une feuille plate.",
      ],
    },
  ],
  exemples: [
    {
      enonce: "Une photo est prise d’en bas, et le personnage occupe toute la hauteur. Quel effet cela produit-il ?",
      etapes: [
        "Le point de vue est en contre-plongée : l’appareil est plus bas que le sujet.",
        "Regarder quelqu’un d’en bas est la position de celui qui est dominé.",
        "L’effet est donc de rendre le personnage imposant, puissant.",
      ],
      resultat: "le personnage paraît imposant",
    },
  ],
  exercices: [
    q("ar-p3-im-1", "Par quoi faut-il commencer pour lire une image ?", ["décrire ce qu’on voit", "dire ce qu’on ressent", "chercher le titre"], "décrire ce qu’on voit", "Décrire, puis comprendre, puis ressentir. Sauter à la fin ne dit rien."),
    q("ar-p3-im-2", "Que produit une ligne diagonale dans une image ?", ["du mouvement", "du calme", "de la solennité"], "du mouvement", "Les horizontales apaisent, les verticales rendent solennel."),
    q("ar-p3-im-3", "Une photo prise d’en bas rend le personnage…", ["imposant", "petit", "invisible"], "imposant", "Regarder quelqu’un d’en bas est la position de celui qui est dominé."),
    q("ar-p3-im-4", "Qu’est-ce que le cadrage ?", ["ce que l’auteur a choisi de montrer", "le cadre du tableau", "la couleur du fond"], "ce que l’auteur a choisi de montrer", "Et donc ce qu’il a choisi de couper : le hors-cadre compte aussi."),
    q("ar-p3-im-5", "Qu’est-ce que l’œil humain cherche en premier dans une image ?", ["un visage ou un regard", "le coin en bas à gauche", "les lignes droites"], "un visage ou un regard", "C’est un réflexe, et les peintres s’en servent pour placer ce qui compte."),
    q("ar-p3-im-6", "« C’est triste » suffit-il pour parler d’une image ?", ["non, il faut montrer pourquoi", "oui", "seulement si c’est vrai"], "non, il faut montrer pourquoi", "Il faut désigner ce qui, dans l’image, produit cet effet."),
    q("ar-p3-im-7", "Comment appelle-t-on une prise de vue faite d’en haut ?", ["une plongée", "une contre-plongée", "un gros plan"], "une plongée", "D’en haut, c’est une plongée ; d’en bas, une contre-plongée."),
    q("ar-p3-im-8", "Dans une image, comment appelle-t-on ce qui se trouve le plus près de celui qui regarde ?", ["le premier plan", "l’arrière-plan", "le cadrage"], "le premier plan", "Ce qui est au fond est l’arrière-plan. On distingue les plans par la taille et par la netteté."),
  ],
};

const ecouterMusique: Lecon = {
  code: "ar-p4-musique",
  matiere: "arts",
  periode: 4,
  titre: "Écouter une musique",
  reference:
    "Décrire et comparer des éléments sonores ; identifier et nommer quelques instruments ; utiliser un vocabulaire précis pour décrire une œuvre musicale.",
  minutes: 25,
  cours: [
    {
      texte: [
        "Écouter une musique, ce n’est pas seulement l’entendre. On peut apprendre à repérer ce qui s’y passe — et alors on entend des choses qu’on ne remarquait pas.",
      ],
    },
    {
      titre: "Quatre choses à repérer",
      texte: [
        "La **hauteur** : aigu ou grave. Une flûte est aiguë, une contrebasse est grave.",
        "L’**intensité** : fort ou doux. Les musiciens appellent **nuances** ces degrés d’intensité et les notent en italien : **piano** veut dire doux, **forte** veut dire fort, et un **crescendo** est un son qui grandit peu à peu.",
        "La **durée** : des notes longues ou courtes.",
        "Le **timbre** : ce qui fait qu’on reconnaît un violon d’une trompette même sur la même note. C’est la couleur du son.",
        "Le piano tient son nom des nuances : il s’appelait **pianoforte**, parce qu’il savait jouer doux **et** fort selon la force du doigt — ce dont le clavecin, avant lui, était incapable.",
      ],
      regle: "hauteur, intensité, durée, timbre. Ces quatre mots suffisent à décrire presque tout son.",
    },
    {
      titre: "Les familles d’instruments",
      texte: [
        "Les **cordes** : violon, violoncelle, contrebasse, guitare, harpe. Le son vient d’une corde qui vibre, frottée ou pincée.",
        "Les **vents** : flûte, clarinette, hautbois, trompette, trombone. C’est le souffle qui fait vibrer l’air.",
        "Dans l’orchestre, on partage les vents en deux : les **bois** (flûte, clarinette, hautbois, basson) et les **cuivres** (trompette, trombone, cor, tuba). Attention à un cas qui surprend souvent : la flûte traversière est en métal et reste rangée chez les bois, parce qu’on la fabriquait en bois autrefois. C’est le nom de la famille qui a vieilli, pas l’instrument.",
        "Les **percussions** : tambour, timbales, xylophone, triangle. On frappe.",
        "Et la **voix**, qui est le plus ancien instrument de tous.",
        "Le piano est un cas curieux : ses cordes sont frappées par des marteaux. On le classe souvent à part.",
        "Pour apprendre à reconnaître les timbres, il existe une œuvre faite exprès : « Pierre et le Loup », de Sergueï Prokofiev (1891-1953), écrite en 1936. Chaque personnage y est joué par un instrument — l’oiseau par la flûte, le canard par le hautbois, le chat par la clarinette, le loup par les cors. On suit l’histoire avec les oreilles seules.",
      ],
    },
    {
      titre: "La forme : ce qui revient",
      texte: [
        "Presque toute musique joue sur la **répétition** et le **changement**.",
        "Une chanson alterne couplet et refrain : le refrain revient identique, le couplet change. C’est ce retour qui permet de s’y retrouver.",
        "Repérer ce qui revient est la meilleure façon d’écouter une musique longue sans se perdre : on suit la forme au lieu de subir la durée.",
      ],
      regle:
        "À la première écoute, cherche ce qui revient. C’est la charpente du morceau.",
    },
    {
      titre: "À faire, avec la voix et les mains",
      texte: [
        "Chante trois notes, n’importe lesquelles, puis refais-les bouche fermée, en fredonnant. Même hauteur, même durée, même intensité : ce qui a changé, c’est le timbre. Tu viens de tirer deux timbres d’un seul instrument, le tien.",
        "Reprends ces trois notes presque murmurées, puis de plus en plus fort jusqu’au bout. Tu as fait un crescendo sans changer une seule note.",
        "Frappe la table du bout de l’ongle, puis de la pulpe du doigt, puis du plat de la main. Trois timbres encore, et toujours la même table.",
        "Écoute un morceau que tu aimes en levant un doigt chaque fois que le refrain revient : écouter attentivement, ça se fait aussi avec le corps.",
        "À écouter, pour les timbres : « Le Carnaval des animaux » de Camille Saint-Saëns (1835-1921), composé en 1886. Chaque animal y reçoit son instrument, et l’éléphant est une contrebasse.",
      ],
    },
  ],
  exemples: [
    {
      enonce: "Comment distinguer un violon d’une flûte qui jouent la même note, aussi fort et aussi longtemps ?",
      etapes: [
        "La hauteur est la même, puisque c’est la même note.",
        "L’intensité et la durée sont les mêmes aussi, par hypothèse.",
        "Ce qui reste est le timbre : la couleur du son, qui dépend de la façon dont l’instrument produit le son.",
      ],
      resultat: "par le timbre",
    },
  ],
  exercices: [
    q("ar-p4-mu-1", "Comment appelle-t-on ce qui fait qu’on distingue un violon d’une trompette sur la même note ?", ["le timbre", "la hauteur", "l’intensité"], "le timbre", "C’est la couleur du son, propre à chaque instrument."),
    q("ar-p4-mu-2", "Quand on dit d’un son qu’il est grave ou aigu, de quoi parle-t-on ?", ["de sa hauteur", "de son intensité", "de sa durée"], "de sa hauteur", "Grave veut dire bas, aigu veut dire haut. Cela ne dit rien du volume : un son grave peut être très fort."),
    q("ar-p4-mu-3", "À quelle famille appartient le violon ?", ["les cordes", "les vents", "les percussions"], "les cordes", "Le son vient d’une corde frottée par un archet."),
    q("ar-p4-mu-4", "À quelle famille appartient la clarinette ?", ["les vents", "les cordes", "les percussions"], "les vents", "C’est le souffle qui fait vibrer l’air dans le tube."),
    q("ar-p4-mu-5", "Dans une chanson, qu’est-ce qui revient identique ?", ["le refrain", "le couplet", "rien"], "le refrain", "Le couplet change, le refrain revient. C’est ce retour qui permet de s’y retrouver."),
    q("ar-p4-mu-6", "Que faut-il chercher à la première écoute d’un morceau long ?", ["ce qui revient", "la fin", "le titre"], "ce qui revient", "La répétition est la charpente : on suit la forme au lieu de subir la durée."),
    q("ar-p4-mu-7", "Comment appelle-t-on en musique les degrés d’intensité, du plus doux au plus fort ?", ["les nuances", "les timbres", "les tempos"], "les nuances", "On les note en italien : piano pour doux, forte pour fort."),
    q("ar-p4-mu-8", "À quelle famille appartiennent les timbales ?", ["les percussions", "les cordes", "les vents"], "les percussions", "On frappe : tambour, timbales, xylophone, triangle. Les cordes vibrent, les vents demandent du souffle."),
  ],
};

const rythme: Lecon = {
  code: "ar-p5-rythme",
  matiere: "arts",
  periode: 5,
  titre: "Le rythme et la pulsation",
  reference:
    "Chanter et interpréter ; repérer et reproduire une pulsation, un rythme simple ; développer sa sensibilité et son esprit critique en écoutant.",
  minutes: 25,
  cours: [
    {
      texte: [
        "Deux mots se confondent tout le temps, et les distinguer change la façon d’entendre la musique : la pulsation et le rythme.",
      ],
    },
    {
      titre: "La pulsation : le battement régulier",
      texte: [
        "La **pulsation** est le battement régulier d’un morceau — celui qu’on tape du pied sans y penser, celui qui fait hocher la tête.",
        "Elle est **toujours régulière**, comme les battements d’un cœur, d’où son nom. On mesure sa vitesse en battements par minute : c’est le **tempo**.",
        "Un tempo lent donne une musique calme ou solennelle ; un tempo rapide donne de l’énergie ou de l’urgence.",
        "Un morceau garde souvent le même tempo du début à la fin. Le « Boléro » de Maurice Ravel (1875-1937), écrit en 1928, tient la même pulsation et le même rythme pendant un quart d’heure : ce qui change, c’est l’instrument qui joue et la force du son.",
      ],
      regle: "La pulsation est régulière. Si elle s’arrête ou change tout le temps, on ne peut plus danser dessus.",
    },
    {
      titre: "Le rythme : ce qui se passe par-dessus",
      texte: [
        "Le **rythme** est le dessin des durées : les notes longues, courtes, les silences, les accents.",
        "Il se pose **sur** la pulsation, et il peut être très irrégulier alors que la pulsation reste stable.",
        "Frappe une pulsation régulière avec le pied et chante « Au clair de la lune » par-dessus : le pied ne change pas, la mélodie fait des longues et des courtes. Voilà les deux à la fois.",
      ],
      regle:
        "La pulsation est le cadre, le rythme est le dessin. L’une est régulière, l’autre non.",
    },
    {
      titre: "La mesure et le silence",
      texte: [
        "Les pulsations se groupent par deux, trois ou quatre : c’est la **mesure**. Une valse se compte en trois, une marche en deux.",
        "La première pulsation de chaque groupe est un peu accentuée : on l’appelle le **temps fort**, et c’est elle qui fait sentir où le groupe commence. Les autres sont les temps faibles.",
        "Le **silence** fait partie du rythme. Une musique sans silence est épuisante : c’est le vide qui met en valeur le plein — exactement comme le blanc d’une page met en valeur le texte.",
      ],
      regle:
        "Le temps fort est la première pulsation de la mesure. Compte 1-2-3, 1-2-3 : c’est sur le 1 que le pied appuie.",
    },
    {
      titre: "À faire, avec le corps et la voix",
      texte: [
        "Marche dans la pièce en comptant à voix haute 1-2, 1-2, un pas par chiffre, en appuyant sur le 1. Tu marches à deux temps, comme une marche.",
        "Recommence en comptant 1-2-3, 1-2-3, toujours en appuyant sur le 1 : le corps se balance autrement. C’est la mesure de la valse.",
        "Assieds-toi, tape la pulsation du pied et chante « Frère Jacques » par-dessus. Le pied ne bouge pas d’un poil, la voix fait des longues et des courtes, et les deux tiennent ensemble.",
        "Pour finir, à deux : frappe dans tes mains un rythme court, quatre ou cinq frappes, et demande qu’on te le répète. Puis échangez les rôles. Reproduire un rythme entendu est un vrai travail de musicien, et il se fait à l’oreille.",
      ],
    },
  ],
  exemples: [
    {
      enonce: "Tu tapes du pied régulièrement et tu chantes par-dessus. Lequel des deux est la pulsation ?",
      etapes: [
        "Le pied bat régulièrement, toujours au même intervalle.",
        "La mélodie, elle, fait des notes longues et courtes, et des silences.",
        "Le pied est donc la pulsation ; la mélodie porte le rythme.",
      ],
      resultat: "le pied",
    },
  ],
  exercices: [
    q("ar-p5-ry-1", "La pulsation d’un morceau est…", ["régulière", "irrégulière"], "régulière", "C’est le battement qu’on tape du pied, comme un cœur."),
    q("ar-p5-ry-2", "Comment appelle-t-on la vitesse de la pulsation ?", ["le tempo", "le rythme", "le timbre"], "le tempo", "On le mesure en battements par minute."),
    q("ar-p5-ry-3", "Le rythme est…", ["le dessin des durées", "le battement régulier", "la hauteur des notes"], "le dessin des durées", "Notes longues, courtes, silences et accents — posés sur la pulsation."),
    q("ar-p5-ry-4", "Une valse se compte en…", ["trois", "deux", "quatre"], "trois", "Les pulsations se groupent par trois. Une marche se compte en deux."),
    q("ar-p5-ry-5", "Le silence fait-il partie du rythme ?", ["oui", "non"], "oui", "C’est le vide qui met en valeur le plein, comme le blanc d’une page met en valeur le texte."),
    q("ar-p5-ry-6", "Quelle pulsation est accentuée dans une mesure ?", ["la première", "la dernière", "aucune"], "la première", "C’est elle qui fait sentir où le groupe commence."),
    q("ar-p5-ry-7", "Comment appelle-t-on la pulsation accentuée, au début de chaque mesure ?", ["le temps fort", "le tempo", "le timbre"], "le temps fort", "Les autres pulsations de la mesure sont les temps faibles."),
    q("ar-p5-ry-8", "Un tempo rapide donne à un morceau…", ["de l’énergie", "du calme", "des silences"], "de l’énergie", "Un tempo lent donne plutôt une musique calme ou solennelle. C’est la vitesse de la pulsation qui change, pas le dessin du rythme."),
  ],
};

export const arts: Lecon[] = [couleurs, lireImage, ecouterMusique, rythme];
