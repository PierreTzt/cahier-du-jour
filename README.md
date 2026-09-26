# Le cahier du jour

Un outil pour organiser l'**instruction en famille** d'un élève de CM1 : la
journée de l'enfant, le manuel de l'année, les fiches des séances menées par
un adulte, et ce qu'on montre à l'inspection.

Il est né dans une famille, pour un enfant que le sentiment d'échec met en
danger. Tout ce qui suit en découle : **l'enfant ne voit jamais de score, de
retard, de rouge ni de compteur de réussite**, il peut arrêter sa journée
sans se justifier, et ce qu'il dépose le soir ne va qu'à ses parents. Les
onze règles de conception sont plus bas ; elles sont tenues dans le code, et
`npm test` les vérifie.

Le code est publié pour que d'autres familles dans la même situation puissent
s'en servir. Il est **gratuit, et personne ne peut le vendre** : voir
`LICENCES.md`.

## Avant de vous lancer

- **C'est un site à héberger soi-même**, pas une application à télécharger.
  Ce que votre enfant écrit reste sur votre serveur. Il faut quelqu'un à l'aise
  avec un terminal pour l'installer (une heure) et le tenir à jour : la marche
  à suivre est dans `deploiement/README.md`.
- **CM1 seulement.** 113 leçons, 854 exercices, 801 fiches et un test de
  positionnement de 180 questions, d'après les programmes en vigueur à la
  rentrée 2026. Rien pour les autres niveaux.
- **Une année précise.** La trame suit le calendrier **2026-2027** de
  l'académie de **Lille** (zone B) et commence le 16 septembre 2026. Une autre
  zone ou une autre année demande d'adapter `lib/trame.ts` avant d'écrire
  l'année.
- **Rien n'a été relu par un enseignant**, ni validé par un soignant. Le
  contenu a été écrit d'après les textes officiels (listés sur la page
  `/sources`) et relu plusieurs fois, mais pas par quelqu'un du métier. Lisez
  les leçons avant de les donner : `/manuel` les montre en entier, corrigés
  compris.
- **Les journaux ne sont pas chiffrés dans le navigateur.** Qui administre le
  serveur peut techniquement lire ce que l'enfant dépose le soir. Choisissez
  cette personne en conséquence.

Le texte qui suit est le journal de conception, écrit au fil de l'usage réel.
Il dit ce que fait chaque écran et **pourquoi** — c'est la partie la plus
utile à qui voudrait l'adapter à un autre enfant.

## Les écrans

| Chemin      | Côté     | Ce qu'il fait                                       |
| ----------- | -------- | --------------------------------------------------- |
| `/`         | —        | Deux portes : « Entrer » et « Accès adulte »        |
| `/entrer`   | —        | Le code — quatre chiffres, six pour les adultes     |
| `/journee`  | L'enfant | Sa journée comme un chemin, avec une fin dessinée   |
| `/etape`    | L'enfant | Une séance : le cours puis les exercices — le cours se rouvre à tout moment —, ou la consigne |
| `/ressenti` | L'enfant | Le dépôt d'un ressenti en fin de journée            |
| `/questions`| L'enfant | Le test de positionnement, une question à la fois : une partie par jour, étape de sa journée |
| `/pilotage` | Adulte   | Composer les journées, lire le soir et le portrait  |
| `/a-reprendre` | Adulte | La cloche : les leçons faites seul qui méritent d'être retravaillées |
| `/annee`    | Adulte   | Le plan de l'année, semaine par semaine, et l'écrire |
| `/manuel`   | Adulte   | Les 113 leçons, lisibles en entier — réponses comprises |
| `/fiches`   | Adulte   | De quoi mener les séances qui ne sont pas à l'écran  |
| `/fiche/…`  | Adulte   | Une fiche seule : déroulé, matériel, corrigé          |
| `/preparer` | Adulte   | La journée entière avec tout son matériel, à imprimer |
| `/positionnement` | Adulte | Les 180 questions du test, et ce qui est attendu  |
| `/sources`  | Adulte   | Les textes officiels d'où vient chaque leçon        |
| `/pourquoi` | L'enfant | La boîte à pourquoi : déposer une question, retrouver ce qu'on a exploré |
| `/cahier`   | L'enfant | Ce qu'il a fabriqué, en collection — sans date, sans nombre, sans ordre |
| `/atelier`  | Adulte   | Le parrain lit, prépare et raconte ; les parents lisent |
| `/journal`  | Parents  | Douze semaines côte à côte, puis le détail jour par jour |
| `/releve`   | Parents  | Le document à remettre, pour le soignant ou pour l'inspection |
| `/suivi`    | Parents  | Les consignes du soignant, écrites une fois pour les deux maisons |
| `/controle` | Adulte   | Ce qu'on ouvre le jour de l'inspection, et qui s'imprime |

Les écrans du POC sont revenus branchés sur la base, pas en faisant semblant :
les neuf pages de démonstration qui servaient des faits inventés sur un enfant
réel avaient été supprimées d'abord. Le mot d'un adulte, les traces et les
sorties se notent depuis `/pilotage` ; le rendez-vous du parrain, depuis
`/atelier`.

**Qui lit quoi.** Décision de famille du 14 septembre :

| | Parents | Parrain | L'enfant |
| --- | --- | --- | --- |
| Le soir : son ressenti, les notes des parents | oui | non | ce qu'il dépose, sans historique |
| Le journal, le relevé, le suivi médical | oui | non — la page le lui explique | non |
| Le relevé des exercices, le portrait du test | oui | oui | non |
| L'atelier | lu | écrit | ce qu'il dépose, et des phrases |
| Le mot du jour | oui, et s'il l'a lu | oui, sans savoir s'il l'a lu | le dernier, après son ressenti |
| La vue du contrôle | oui | oui | non |

Aucun document remis à l'extérieur ne contient ce qu'il dépose le soir, ni ses
questions dans ses mots, ni les mots qu'on lui laisse. La version inspection
du relevé et la vue du contrôle ne nomment pas le soignant.

**Les écrans de l'enfant sont à l'enfant.** Un adulte qui ouvre `/journee`
est renvoyé vers le bureau, où il voit la même journée sous son angle à lui ;
et les gestes de l'enfant — cocher, mettre de côté, arrêter, déposer un
ressenti, répondre au test, inscrire un résultat — n'acceptent que sa
session. Sans ça, un parent qui aurait cliqué « J'ai fini » depuis son propre
accès aurait écrit dans le relevé de l'enfant quelque chose que l'enfant n'a
pas fait, et un ressenti déposé par lui aurait été lu le soir comme le sien.

**Le mode d'emploi des adultes.** « Très complet, mais un peu usine à gaz » :
retour des parents le 16 septembre, premier jour réel. Une fenêtre explique
chaque écran du bandeau, une page par écran, en commençant par ce qui répond
au reproche — un seul écran sert tous les jours, La journée. Elle s'ouvre
d'elle-même tant que « J'ai tout compris » n'est pas coché, une fois par jour
au plus (une session tient un an : « à chaque connexion » ne serait jamais
revenu), et se rouvre depuis le bandeau. Le contenu est dans
`lib/mode-emploi.ts`, adapté au parrain ; un écran ajouté au bandeau sans sa
page fait échouer `mode-emploi.test.ts`. L'enfant n'en voit rien. Il n'est
**construit que par le serveur** : il vivait dans le JavaScript de la page
d'accueil, prénom et « soignant » compris, et `confidentialite.test.ts` l'empêche
de revenir. Il ne s'ouvre jamais de lui-même sur le contrôle, le relevé ou la
préparation.

**La journée des adultes suit la journée.** Le mode d'emploi ne suffisait pas :
la critique du 16 septembre a compté sur `/pilotage` huit sections, une
quarantaine de décisions visibles et quatre cents mots, surtout pour justifier
le produit. La page va maintenant dans l'ordre du jour — « Ce matin : sa
journée », « Un mot pour lui », « Ce soir : ce qu'il a fait », le test en une
ligne, puis « Noter autre chose » replié — et chaque section dit en une ligne
ce qu'il en voit. Le portrait du test est sur `/positionnement`, à côté des
questions. Le matériel du jour (`/preparer`) s'imprime, et le résultat des
séances à fiche s'y note sous la fiche.

**Ce que vous menez, ce qu'il fait seul.** Retour d'un parent le
21 septembre : dans « Ce matin », une séance à fiche n'était qu'une ligne
parmi d'autres, avec un lien en bout de ligne. Elle est maintenant une carte
blanche étiquetée « Vous la menez », avec un vrai bouton « Ouvrir la fiche » ;
une leçon reste une ligne, « il la fait seul, à l'écran ». Depuis le soir du
même jour, la liste se dessine **comme son chemin** : le même trait au
crayon, les mêmes pastilles de matière, pleines quand c'est fait, et « il en
est là » sur la séance où il en est. Le parent voit la journée que voit son
fils, de l'autre côté.

**La cloche.** Même jour, même retour : les leçons, l'enfant les fait seul, et
le soir de La journée ne se lit que sur la bonne date. Une cloche dans le
bandeau des adultes s'allume quand une leçon **mérite d'être retravaillée** —
dès deux exercices pas passés, « je ne sais pas » compris, ou quand il l'a mise
de côté. Seuil choisi par le parrain parmi quatre : sur les six leçons des 17 et
18 septembre, deux l'auraient allumée, cinq au premier exercice raté. Elle mène
à `/a-reprendre` : tout l'historique, du plus récent au plus ancien, avec pour
chaque leçon ce qui n'est pas passé et sa reprise, prévue ou faite. Chaque
adulte a la sienne, qui s'éteint quand il l'a ouverte. Une leçon ne se juge
qu'une fois finie, et rien ne change chez l'enfant — son écran lui dit déjà
que son travail part chez papa et maman. Le parrain la voit aussi : le relevé
des exercices lui est ouvert. Ce n'est pas l'alerte sur les mauvaises séries
écartée en septembre : elle porte sur une leçon, pas sur l'enfant, et ne dit
rien de ses journées.

**Au téléphone.** Un parent fait tout depuis le sien ; l'enfant travaille sur
un ordinateur. La critique du 21 septembre, menée à 390 px, comptait sur La
journée un bandeau de quatre lignes et 59 cibles sur 86 sous 44 px. Au
téléphone, le bandeau tient sur une ligne — La journée, la cloche, « Menu » —,
chaque séance a un bouton « Changer » qui déplie ses gestes en vrais boutons,
« Noter le résultat » est à côté de « Ouvrir la fiche », et la fiche ouverte
depuis la journée se note en bas. Les pages pensées pour un ordinateur
(l'année, les fiches, le relevé, le contrôle, le matériel à imprimer) sont
**rangées à part, jamais bloquées** — décision du parrain : une page qui
refuse de s'ouvrir ressemble à une panne. `PRODUCT.md` le dit pour les
prochaines retouches : un écran d'adulte se juge d'abord au téléphone.

**Le poste du jour.** Demandé le même soir — « un genre de poste de
pilotage », les applis de téléphone soignées pour référence. En tête de La
journée, aujourd'hui seulement : où il en est et ce qui vient ensuite, avec
l'action principale (« Ouvrir la fiche ») ; une frise de la journée aux
couleurs des matières ; et « De votre côté », ce qui attend un geste de
l'adulte — un résultat à noter, le mot pour ce soir, ce qu'il a dit, la
cloche. Les chiffres de la semaine (temps d'instruction, séances faites) sont
plus bas, **repliés** : des volumes, pour l'inspection, jamais une réussite
ni un jour comparé à un autre. Les gestes d'une séance s'ouvrent au
téléphone dans un panneau qui monte du bas, s'affichent avant la réponse du
serveur, et se disent dans une notification qui propose de les **annuler** —
sauf « retirer », qui efface et demande donc confirmation. Les composants
viennent de shadcn/ui (`components/ui/`), habillés aux couleurs du cahier :
pas de thème sombre, et `destructive` en ocre.

**Deux maisons.** La note du soir n'écrase plus celle de l'autre parent : si
elle a changé depuis l'ouverture, elle s'affiche avant d'être remplacée. Le ton
dit qui l'a choisi et à quelle heure. Seul l'adulte qui a noté une sortie peut
l'effacer.

## L'entrée

Ni mot de passe, ni courriel, ni lien à retrouver dans une conversation : à
huit heures du matin, l'enfant ouvre le site, tape son code, et il est dedans.
La session de l'enfant tient un an sur l'appareil, parce qu'une tablette qui
reste connectée dans chaque maison est le mode d'usage réel.

**Celle d'un adulte se ferme chaque nuit à cinq heures.** Un parent qui lisait
le soir sur la tablette de l'enfant et oubliait « Quitter » lui laissait, le
lendemain matin, le portrait du test et son propre ressenti. « Douze heures
sans visite », décidé le 16 septembre 2026, laissait encore ouverte à 8 h 30
une lecture finie à 20 h 30 ; le parrain a tranché le soir même pour une
fermeture chaque nuit. Sans session, une page d'adulte mène à la porte des
adultes et y revient après le code ; ce qui était en cours d'écriture (note
du soir, mot, sortie, consigne) est gardé. Refaire les codes ferme les
sessions ouvertes avant.

**Aucun prénom n'est affiché avant d'être entré.** Le site est public : lister
la famille reviendrait à publier sa composition à qui passe. Deux portes
neutres, et c'est le code seul qui dit qui vous êtes.

Quatre chiffres pour l'enfant — il doit pouvoir le taper seul, vite. Six pour
les adultes, dont le code ouvre ce que l'enfant dépose le soir.

**On ne verrouille jamais.** Dix mille possibilités se devinent à la machine,
donc on ralentit l'adresse qui essaie, pas la personne : celui qui se trompe
une fois ne remarque rien, celui qui insiste attend de plus en plus. Aucun
compteur affiché, aucun message d'échec sec, aucun compte fermé — un enfant
de neuf ans devant un écran qui compte ses erreurs, c'est exactement ce que
tout ce produit passe son temps à éviter.

Caddy écrase `X-Forwarded-For` par l'adresse réelle du pair, et l'application
en lit la dernière valeur : sans ça, un en-tête falsifié suffirait à échapper
au ralentissement. Les codes viennent de `gen_random_bytes`, pas de `random()`.

## Le positionnement

Les parents voulaient savoir ce qui est consolidé des premières années d'école
pour ne pas donner du travail à côté de la plaque. **L'enfant fait, les parents
lisent**, comme pour le ressenti du soir.

J'avais d'abord écarté la forme de l'épreuve : deux questions glissées de
temps en temps, l'enfant s'arrêtant quand il voulait, vingt questions en tout.
Le parrain a tranché trois fois, et il avait raison :

> « Deux questions, ça ne suffit pas pour comprendre et donner un niveau à ses
> parents. » — « Cinq minimum par notion, et pas non plus il arrête quand il
> veut. On est sur un test, on est sur un examen. On va jusqu'au bout. Si on ne
> sait pas, ce n'est pas grave, mais dans ce cas-là, on va jusqu'au bout. » —
> « On n'est pas chez Montessori, l'enfant ne fait pas ce qu'il veut. »

L'argument qui emporte la décision est celui-là : **ce qui le mettait en
difficulté à l'école était de ne pas réussir, pas d'avoir du travail.** Un
instrument trop petit ne l'aurait pas protégé, il l'aurait juste rendu inutile
— et un bilan faux est plus dangereux que pas de bilan, parce qu'on agit
dessus.

Donc **trente-six notions, cinq questions chacune, cent quatre-vingts au
total**, en sept blocs par domaine — nombres, calcul, problèmes, grandeurs et
mesures, espace et géométrie, les mots et l'orthographe, la lecture. Cinq
items par notion parce qu'un seul ne mesure rien : il ne distingue ni la
réussite de la chance, ni l'ignorance de l'inattention. L'étalon est la fin du
CE2 et non le CM1 : on cherche ce qui est acquis de l'année d'avant.

Sources téléchargées et vérifiées par leur **titre**, pas seulement par un
code HTTP — deux identifiants devinés renvoyaient en réalité autre chose :

- [Mathématiques CE2, attendus de fin d'année](https://eduscol.education.fr/document/13960/download)
- [Français CE2, attendus de fin d'année](https://eduscol.education.fr/document/13954/download)
- [Mathématiques CM1, attendus de fin d'année](https://eduscol.education.fr/document/13990/download)
- [Français CM1, attendus de fin d'année](https://eduscol.education.fr/document/13984/download)
- [Repères annuels de progression, cycle 3 — maths](https://eduscol.education.fr/document/14026/download) et [français](https://eduscol.education.fr/document/14020/download)

Ce qui le protège n'est donc pas de pouvoir s'arrêter — **ce qui le mettait en
difficulté était de ne pas réussir, pas la longueur** — c'est qu'**il n'y a
rien à rater** :

- **On va jusqu'au bout de la partie.** `prochaine()` sert la question
  suivante et rien d'autre : pas de choix de domaine, pas de « plus tard ». Un
  code forgé dans le navigateur n'ouvre aucun raccourci, et `npm test` le
  vérifie.
- **Aucune pause proposée, et aucun chiffrage d'avance.** Il y avait ici, une
  première version, un écran entre chaque bloc : « tu as fini une partie, tu
  peux t'arrêter là », précédé de « 25 questions, on les fait toutes ». Le
  parrain l'a coupé : annoncer la sortie avant l'entrée installe l'idée qu'il
  n'en fera qu'un morceau, et à l'école la journée fait sept heures — personne
  n'y travaille par tranches de vingt minutes. Les blocs restent, comme les
  matières d'une journée ; le changement de sujet est une information, jamais
  une porte. L'état vit côté serveur : s'il sort par l'en-tête, il revient sur
  la même question.
- **« Je ne sais pas » est au même rang** que les autres réponses : même
  place, même taille, à chaque question. Ne pas savoir renseigne ses parents
  autant que savoir, et le rang avance pareil. Jusqu'au 16 septembre 2026,
  c'était écrit ici et faux à l'écran — un lien gris souligné sous un bouton
  plein.
- **Une sortie douce, sans pause proposée.** Décision du 16 septembre : un lien
  discret « Revenir à ma journée » en bas de la question, et « Quitter »
  masqué pendant le test. Sans lui, la seule sortie visible était la plus
  brutale. S'il sort, la partie passe après l'étape suivante de sa journée
  (décision du parrain, seconde critique du 16 septembre : elle restait en
  tête, et le seul bouton de son chemin le ramenait à la même question), puis
  il la reprend à la même question, sous un bouton « Continuer ».
- **Le manuel ne corrige jamais une question du test.** 61 questions sur 180
  étaient des exercices du manuel, et la leçon du 17 septembre corrigeait sept
  questions de la veille. `manuel-et-test.test.ts` refuse un exercice qui
  ressemble à une question, et un cours ou un exemple qui en reprend les
  nombres avec la réponse.
- **Il ne sait jamais s'il a juste.** `prochaine()` retire l'attendu, la
  référence et le nom de la notion **à la frontière**, et `repondre()` ne rend
  rien — l'écran est structurellement incapable de le lui apprendre.
- **On lui dit la vérité** sur ce que c'est, et à quoi ça sert. Un habillage de
  jeu posé sur un examen serait le seul mensonge de toute l'application, et il
  le sentirait.

Côté parents, sur `/positionnement`, une ligne par notion sur l'échelle du bilan de fin de cycle du
livret scolaire : *très bonne maîtrise* (cinq sur cinq), *satisfaisante*
(quatre), *fragile* (trois), *insuffisante* (deux ou moins), avec une jauge de
cinq points et le détail de chaque question qui n'est pas passée avec ce qu'il
a répondu. Jusqu'au 16 septembre, quatre sur cinq se lisait « fragile » ; les
parents l'ont trouvé dur, et c'est l'échelle de l'école qui l'a remplacé. Pas de note globale, pas de
« niveau CE2 » : un chiffre unique ne dit pas quoi reprendre lundi matin et il
crée une valeur à comparer au trimestre suivant, donc une courbe, donc des
creux à expliquer. Un encart dit que **rien de tout ça n'a été relu par un
enseignant**, et ça doit l'être.

La comparaison entre sa réponse et l'attendu vit dans `lib/comparer.ts`, une
seule fois pour le test et pour les exercices. Tolérante sur la forme — les
espaces, les accents, « 2 h 45 » et « 2h45min », « 215 min » ou « six »
pour « 6 », « chevaux » pour « des chevaux », « sommes » pour « nous
sommes » — et jamais sur le fond : dès que les deux côtés sont des nombres,
c'est la même valeur ou rien, parce que « 4 » se termine comme « 34 » et
qu'un trou réel déclaré acquis est l'erreur que des parents ne peuvent pas
rattraper ; et sur du texte, rien d'autre que ce qui précède le mot qui
compte — « chat » n'est pas « un vieux chat ». Ce qu'elle ne peut pas faire,
et que le manuel contourne exercice par exercice : vérifier un accent ou une
cédille, puisqu'ils sont retirés — un tel exercice se pose à choix.

## Le programme

Le test dit ce qu'il sait en arrivant. Le programme, c'est ce qu'il fait
chaque jour — et le parrain a posé le cadre : « le cours se passe sur
l'ordinateur », comme un livret de l'Éducation nationale ; « il travaille sur
papier, il fait son brouillon, ses calculs, et il inscrit uniquement le
résultat sur le site ».

`lib/programme.ts` est donc le manuel. Chaque leçon porte un cours en
plusieurs parties, des règles encadrées, des exemples traités pas à pas, puis
huit exercices. La période 1 est écrite en entier : douze leçons, six en
mathématiques et six en français, adossées aux [attendus de fin de
CM1](https://eduscol.education.fr/document/13990/download) et aux repères
annuels de progression du cycle 3.

Une séance peut porter une leçon, et alors `/etape` affiche le cours puis les
exercices un par un. Les séances **écrites à la main** continuent d'exister :
en instruction en famille tout ne passe pas par un écran, et l'outil n'a pas à
le prétendre.

### La correction, et pourquoi elle arrive après

Après chaque réponse, l'enfant voit le résultat attendu et la façon de faire.
**Les mêmes qu'il ait juste ou faux** : pas de « bravo », pas de « raté », pas
de couleur de jugement. Il compare lui-même, en privé, et personne ne
commente. C'est ce qui distingue les exercices du test de positionnement — là
l'attendu ne sort jamais, ici il doit apprendre, donc la correction lui est
due.

Mais elle lui est due *après* avoir répondu, et c'est pourquoi elle n'est pas
dans la page : `poserLecon()` retire le résultat et le comment, et l'action
les renvoie une fois la réponse inscrite. Ce n'est pas de la méfiance, c'est
de la lucidité — un enfant dont l'angoisse est d'échouer trouvera la réponse
si elle est là, et il aura raison de le faire, ce serait la solution la moins
coûteuse. Sauf que le relevé de ses parents deviendrait faux, donc le travail
qu'ils lui prépareraient aussi. La tentation ne se combat pas par la
confiance, elle s'enlève. `npm test` le vérifie sur le JSON sérialisé, pas
seulement sur les clés de premier niveau.

Côté adulte, on choisit une leçon dans la progression plutôt que de tout
retaper, la liste dit laquelle a déjà été donnée et quand, et le relevé du
soir montre les résultats exercice par exercice avec ce qu'il a répondu quand
ça n'est pas passé. Pas de note globale : « six sur huit, et voilà lesquels »
se traduit en quelque chose à faire demain, un chiffre unique ne se traduit en
rien.

### Le cours à portée de main

Retour d'un parent le 23 septembre : « quand c'est le moment des questions,
ça serait cool qu'il ait la possibilité de faire pop la leçon s'il a un doute
ou un trou ». Le lien « revoir le cours » existait depuis le premier jour — en
haut à droite de chaque exercice, petit, gris — et personne ne l'avait vu,
les adultes compris. Il remplaçait l'exercice par le cours entier : pour
revenir, il fallait redescendre jusqu'au bouton du bas.

C'est maintenant un vrai bouton, « Revoir le cours », qui fait glisser la
leçon par-dessus l'exercice, l'énoncé rappelé en haut ; on le ferme, on
retrouve l'exercice tel qu'il était, ce qu'il avait tapé compris. En primaire
on fait ses exercices le cahier de leçons ouvert sur la table : les exercices
ne recopient plus leur cours (relecture du 17 septembre), et c'est la reprise
qui montre aux parents ce qui a tenu.

Un parent voulait aussi, quand il a faux, un renvoi vers « le morceau de leçon
qui correspond ». Le renvoi est là, mais **après chaque réponse**, juste ou
fausse : n'apparaître qu'après une erreur, ce serait l'écran qui lui dit « tu
t'es trompé, va relire », et la correction cesserait d'être la même dans les
deux cas. « Dans le cours : Chaque place a un nom, et une valeur » rouvre le
panneau sur cette partie, posée sur une feuille, le titre passé au
surligneur. Avant de répondre, le bouton ouvre le cours au début : savoir
quelle partie s'applique fait partie de l'exercice, donc le passage n'arrive
qu'avec la correction — `programme.test.ts` le vérifie.

Les 998 exercices, reprises comprises, sont rattachés chacun à une partie de
leur cours dans `lib/programme/passages.ts` — **par le titre de la partie**,
pas par son rang : une relecture qui déplace une partie ne décale rien en
silence, et un titre retouché fait échouer le test. Les parents lisent la
même partie sous chaque exercice pas passé, sur la page de la cloche et le
soir de La journée, avec un lien vers elle dans le manuel : ce qu'on reprend
avec lui, au morceau près.

Rien n'est noté quand il ouvre le cours. Si relire se voyait chez ses
parents, il ne relirait plus.

L'autre idée de la même conversation — de petites questions au fil de la
lecture, avant les exercices de fin — attend de voir comment il se sert du
cours à portée : décision du parrain.

## Le programme et la trame

`lib/programme/` est le manuel : **113 leçons, 854 exercices**, environ
quarante-huit mille mots de cours — texte, règles et exemples ; les énoncés et
les corrections en font davantage encore, mais ce n'est pas du cours, c'est
du travail. Le compte vit dans `motsDuManuel()`, parce qu'il avait déjà
divergé entre cette page et l'écran. Un fichier par matière. `lib/trame.ts` est le
plan : **162 jours de travail, 431 heures**, du test du 16 septembre au
2 juillet. **L'année entière est écrite en base** — 163 journées, 1 008
séances, jour du test compris.

Trois heures par jour du lundi au vendredi, un mercredi plus court — le jour
du parrain, orienté vers une expérience, une sortie, une question creusée.

**Peu de nouveautés à la fois, et le corps au milieu de la journée.** Chaque
liste de rituels tournait sur tous ses titres dès le premier jour : la semaine
du 21 septembre, 31 étapes sur 31 étaient une première fois. Les rituels
entrent maintenant en service un par un — deux par liste, un de plus chaque
semaine —, et le moins avancé dans sa série de fiches passe devant. Et depuis
la seconde critique du 16 septembre, **pas plus de deux nouveautés dans une
journée**, leçons comprises, et un seul rituel neuf : la semaine allait
mieux, pas la journée (le 24 septembre posait sept étapes jamais vues sur
sept). Un rituel qui suppose des leçons attend qu'elles soient données :
« Conjugaison » ne commence qu'après le passé composé. Une leçon qui revient
s'ouvre sur ses exercices, le cours à un lien. Le dehors
vient après les maths et le français, plus en dernier : 65 à 75 minutes assis
au lieu de deux heures et demie. `trame.test.ts` garde les deux : jamais plus
de 90 minutes assis avant de bouger, jamais plus de vingt premières fois dans
une semaine.
Treize heures trente par semaine contre vingt-quatre en classe : une classe de
trente élèves passe un temps considérable en déplacements et en attente, et
l'IEF est dense.

Chaque leçon est donnée **puis reprise** une dizaine de jours plus tard : 222
passages à l'écran pour 113 leçons. Revoir une notion après un délai est ce
qui la fixe, et la seconde série d'exercices se lit séparément — on voit donc
ce qui a tenu.

Et une journée n'est pas faite que d'écran : la trame place aussi du calcul
mental à l'ardoise, de la dictée, de la lecture à voix haute, de la production
d'écrit et du dehors, avec un titre et une consigne — comme ce qu'un parent
écrirait à la main.

`trameDuJour()` rend toujours la même chose pour une date donnée. Un plan qui
changerait d'un affichage à l'autre serait impossible à préparer et impossible
à corriger.

**La trame propose, l'adulte dispose.** Rien ne s'écrit tout seul — un
affichage qui crée des données se double au premier rechargement. Et une
journée déjà écrite n'est jamais touchée : ce qu'un parent a composé gagne
contre la trame, et cliquer deux fois ne double rien.

### Le calendrier est officiel

Académie de **Lille**, donc **zone B**. Les dates viennent de l'open data du
ministère, pas d'une estimation :

    data.education.gouv.fr/explore/dataset/fr-en-calendrier-scolaire
    (annee_scolaire = 2026-2027, location = Lille)

Une recherche sur le web répondait « zone A ». C'était faux, et trois de mes
cinq dates estimées l'étaient aussi — une semaine d'écart sur l'hiver et le
printemps, quatre jours sur la fin de l'année, et le pont de l'Ascension
manquant. Une erreur de zone décale une année entière.

L'open data ne liste que les vacances, pas les jours fériés — et c'est ainsi
que le **lundi de Pâques** a manqué à la première version : Pâques tombe le
28 mars 2027, tôt, hors des vacances de printemps, et sept séances étaient
écrites sur un lundi férié. Les fériés viennent maintenant du calendrier
civil, et un test recalcule Pâques (et l'Ascension, et la Pentecôte, qui en
découlent) plutôt que de les recopier.

### Le ton du jour agit

Trois tons : **normale**, **allégée**, **repos**. Ils ne décoraient qu'une
colonne ; ils recalculent maintenant la journée, sous quatre garanties :

- **seules les séances de la trame bougent** — ce qu'un adulte a écrit à la
  main, ou est allé chercher dans la bibliothèque, reste. La colonne
  `seance.origine` tient la distinction ;
- **seules les séances encore à venir bougent** — le travail déjà fait ne se
  réécrit pas ;
- **c'est réversible** — la trame se recalcule au lieu d'être stockée ;
- **« allégée » ne vide jamais la journée.** Un test le vérifie sur les cent
  soixante-deux jours. Un enfant à qui on annonce une journée allégée et qui
  n'y trouve rien n'entend pas « on allège », il entend « on a renoncé ».
- **ce qui reste garde sa place, ce qui revient reprend la sienne.** Une
  séance qu'un parent a déplacée à la main ne saute pas en fin de journée
  parce qu'on a cliqué sur un ton, une séance déjà faite ne passe pas sous
  celle qu'il est en train de faire, et un rituel remis revient là où la trame
  le met. La première version faisait les trois.

La décision — quoi retirer, quoi remettre, dans quel ordre — est une fonction
pure, `accorder()` dans `lib/journee.ts`, déroulée par `npm test` sur les cas
qui font mal ; la base ne fait que l'appliquer, dans une transaction, lignes
verrouillées. C'était le code le plus risqué du dépôt et le moins testé : il
supprime, insère et renumérote la journée d'un enfant.

L'enfant ne lit jamais le mot « allégée » : il voit une journée plus courte, et
rien ne lui dit qu'elle a été raccourcie.

### Ce qui n'a pas été donné ne disparaît pas

Une journée allégée **ne fait pas glisser le plan**. Décaler tout d'un jour à
chaque fois casserait la seule propriété qui rende la trame utilisable — qu'une
date donne toujours la même journée — et un plan qui bouge sous les pieds ne se
prépare pas le dimanche soir.

`lib/rattrapage.ts` tient donc la liste de ce qui a été prévu et jamais mené au
bout, avec, pour chaque leçon, combien de fois la trame la reprévoit plus tard.
Ce qui revient de lui-même la semaine suivante n'est pas urgent, et c'est dit.
**Cette liste n'existe que côté adulte** : l'enfant ne doit pas pouvoir lire ce
qu'il n'a pas fait.

Mais elle ne prend que les leçons, et que celles d'un jour passé. Le
21 septembre 2026, un parent a voulu faire le jour même deux séances du
lendemain — un calcul mental et une dictée : il les a retirées, et n'a trouvé
nulle part où les poser. **Retirer n'est pas déplacer.** Chaque séance à venir
porte donc un « déplacer », qui propose les prochains jours de classe avec ce
qu'ils durent déjà (`lib/deplacer.ts`). La séance arrive en fin de journée,
avec sa fiche. Une séance de la trame retient la date qui l'avait prévue
(`seance.prevue_le`, migration 025) : sans ça, le premier clic sur un ton la
reposait dans le jour qu'elle venait de quitter, et la retirait de celui qui
l'accueillait.

**Une journée refermée ne reçoit plus rien.** Décision du parrain le même soir :
« quand l'enfant a terminé sa journée, pour lui c'est terminé ». Ni séance
écrite à la main, ni leçon de la bibliothèque ou du rattrapage, ni séance
déplacée, ni ton qui en remettrait — et pas davantage dans une journée qu'il a
arrêtée, où ce qu'on poserait l'attendrait s'il la reprenait. Avant, un ajout
rouvrait une journée finie. Le refus est en base, pas seulement à l'écran.

### Le manuel s'ouvre, et le test aussi

« On connaît le programme mais on ne peut pas cliquer pour voir le cours. »
Les cent treize leçons n'étaient lisibles que par l'enfant, une à la fois, le
jour où elle tombait — et un manuel que les adultes ne peuvent pas lire ne peut
ni se préparer, ni se vérifier, ni se faire relire par un enseignant.

`/manuel` les ouvre toutes : le cours mot pour mot tel qu'il le voit, les
exemples traités, et **les énoncés avec les résultats attendus et la façon de
faire**. `/positionnement` fait la même chose pour le test. Les titres sont des
liens partout où ils apparaissent — l'année, la journée, la bibliothèque.

Ce que ça déplace : jusqu'ici la frontière tenait dans les données —
`poserLecon()` retire les résultats, `prochaine()` retire l'attendu. Ces pages
la contournent exprès, donc **la frontière tient maintenant à la porte**, et
`test/portes.test.ts` vérifie que toute page important le manuel ou
l'instrument bruts renvoie l'enfant vers sa journée — **en suivant les
imports** : un composant que la page rend, un module qu'elle appelle, sont
regardés comme la page elle-même, jusqu'aux actions serveur qui font
frontière. C'est pour que ce suivi reste précis que la lecture des parents
vit dans ses propres modules, `lib/lecture.ts` pour le test et
`lib/releve.ts` pour les exercices : ce que l'écran de l'enfant importe pour
lire et écrire ses réponses ne contient plus, même sans l'appeler, de quoi
lui dire qu'il s'est trompé.

En écrivant ce test, il a échoué là où je ne l'attendais pas : sur l'écran de
l'enfant. `Etape` rendait le `Bloc` entier à côté de la question soigneusement
épurée — ses notions, leurs questions, **tous leurs attendus** — pour afficher
« partie 3 sur 7 ». Rien ne l'affichait, donc rien ne se voyait. C'est la forme
habituelle de ce genre de trou : on protège la chose qu'on regarde et on laisse
passer le conteneur qui la contient.

### Les fiches, pour que les parents n'aient rien à inventer

L'année compte 1 008 séances. **Deux cent vingt-deux** portent une leçon du
manuel : l'enfant les fait seul, le cours et les exercices sont à l'écran, la
correction arrive après sa réponse. Les **785 autres** sont menées par un
adulte — calcul mental à l'ardoise, dictée, lecture à voix haute, production
d'écrit, dehors, le mercredi. Trente-huit minutes par jour d'un côté, deux
heures de l'autre.

Ces 785 séances ne portaient qu'un titre et une consigne, et la consigne dit
quoi faire, pas avec quoi. « Quinze mots de la liste en cours » revenait seize
fois dans l'année pour une liste qui n'existait nulle part. Douze rituels sur
soixante-neuf renvoyaient ainsi à un matériel que le produit ne fournissait
pas : c'est un parent qui devait l'inventer, un mardi matin, pendant dix mois.

`lib/fiches/` le fournit. Une fiche donne **comment on s'y prend**, **le
matériel exact** — les quinze mots, les dix questions, le texte — le
**corrigé** quand il y en a un, et **ce qu'on regarde** ensuite. Jamais une
note : ce qui dit quoi reprendre demain.

Les fiches d'un rituel forment une série, et la n-ième sert la n-ième fois que
le rituel revient. Aucune date n'est écrite dans une fiche : c'est sa place
dans la série qui la situe, ce qui permet d'écrire une progression sans figer
un calendrier. Quand la série est plus courte que le nombre d'occurrences, elle
recommence — une fiche revue en mai est une révision — et `/fiches` le dit
plutôt que de le laisser découvrir.

**Une fiche porte ses corrigés, donc elle est fermée à l'enfant**, exactement
comme le manuel. `test/portes.test.ts` le vérifie en suivant les imports.

Où ça en est, au 14 septembre 2026 : **801 fiches, les 69 rituels de l'année,
et chacune des 786 séances menées par un adulte porte la sienne** — 771 fiches
différentes, seule la lecture libre revenant sur ses quatre.
`controle/verifier-fiches.ts` sans argument redonne ce compte à tout moment.

Le rang compte autant que la fiche. Une série est écrite dans l'ordre d'une
progression, et la n-ième fiche doit tomber la n-ième fois que le rituel
revient. La trame compte donc les vraies apparitions de chaque rituel, jour
après jour depuis le jour du test, et un test vérifie que la date annoncée
par la page d'une fiche est celle où elle tombe.

Rien de tout cela n'a été relu par un enseignant. Les 79 questions que les
relecteurs automatiques n'ont pas voulu trancher seuls ont chacune leur
décision, et sa raison, dans `controle/fiches-a-trancher.md` : 18 d'entre
elles demandent un essai réel la veille de la séance — une recette, un
montage, une expérience —, et la fiche le dit.

`npx tsx controle/verifier-fiches.ts lib/fiches/dehors.ts` vérifie **un seul**
fichier sans charger les autres : plusieurs personnes écrivent des fiches en
parallèle, et un fichier à moitié posé ne doit pas faire échouer la
vérification de quelqu'un d'autre.

### D'où vient ce qu'il apprend

`/sources` liste les neuf textes officiels, avec pour chacun ce qu'il a servi à
écrire et **depuis quand il s'applique**. C'est ce dernier point qui m'a fait
me tromper : j'avais d'abord travaillé sur des attendus périmés, et deux des
trois programmes applicables au CM1 sont neufs à cette rentrée. La page dit
aussi ce que je n'ai pas vérifié — anglais, EMC, arts.

## Les règles de conception

Le produit est né pour un enfant que le sentiment d'échec met en danger.
Ces règles ne sont pas
des préférences esthétiques : elles conditionnent ce que l'interface a le droit
d'afficher, et elles sont appliquées dans le code.

1. **Aucun compteur de son côté.** Pas de « 3 sur 5 », pas de pourcentage, pas
   de barre. Un compteur est déjà une évaluation. `journeeVivante()` ne rend
   aucun agrégat — pas par discipline, mais parce qu'il n'en calcule aucun ;
   le décompte de ce qu'il y a à replacer est une fonction séparée que seuls
   les écrans d'adulte appellent, et `npm test` vérifie la séparation.
   *Une exception, assumée, en deux endroits :* le test de positionnement
   affiche « question 7 sur 25 », et une leçon du manuel « exercice 3 sur 8 » —
   écrits, sans barre.
   Savoir où l'on en est n'évalue pas l'élève, ça borne la tâche — il voit que
   ça finit, et ce qu'il ne voit pas finir, il ne peut pas savoir que ça finit.
   Les deux comptent ce qui a été posé, jamais ce qui a été juste.
2. **La journée tient sur un écran.** Il doit voir la fin sans faire défiler.
   Vérifié à 1280×900 et 768×1024 — dans le navigateur, pas en théorie. La
   trame pose sept séances là où il y en avait trois : la page débordait de
   treize pixels, mesurés. Au-delà de cinq étapes, le chemin resserre donc son
   rythme vertical. Resserrer vaut mieux que faire défiler, parce que ce qu'il
   ne voit pas, il ne peut pas savoir que ça finit.
3. **Aucun retard visible pour lui.** Une séance mise de côté n'est ni barrée
   ni grisée : elle n'est plus là. Le retard n'existe que côté adulte. Et il ne
   voit jamais qu'aujourd'hui — lui ouvrir les jours à venir serait lui ouvrir
   la charge des jours à venir, ce qui est contrôlé côté serveur.
4. **Aucun rouge, nulle part.** Ce qui glisse s'affiche en ocre.
5. **On demande son état, jamais sa performance.** « Comment tu te sens ? » et
   non « c'était dur ? », qui serait une auto-évaluation déguisée.
6. **Son historique ne lui revient pas.** Il dépose, ça part chez ses parents,
   et l'écran le lui dit.
7. **Le ton du jour ne lui est pas montré.** « Allégée » se lirait comme un
   manque. Le repos, lui, se dit : un écran vide sans explication est pire.
8. **Bloquer n'est pas échouer.** Le vocabulaire dit « on met de côté ».
9. **Arrêter ne demande aucune justification.** Pas de champ « motif », pas de
   confirmation : exiger de se justifier au moment de l'effondrement, c'est
   ajouter une évaluation à une crise d'évaluation.
10. **Le cercle de lecture est court, et l'enfant le connaît.** Ce qu'il dépose
    va à ses parents, et l'écran le lui dit.
11. **La chaleur n'est jamais conditionnelle.** Son papier est crème, sa
    réglure visible, ses titres colorés — les bons jours comme les mauvais.
    Si l'interface ne s'égayait que quand il finit tout, ce serait un bon point
    déguisé en couleurs. « C'est fini » et « on arrête là » se ressemblent.

## Le système visuel

- **Fond** — le quadrillage Seyès. Côté enfant, papier **crème** et réglure
  franchement visible : un vrai cahier Seyès, c'est de la réglure bleu-violet
  sur papier crème, donc le réchauffer rapproche de l'objet réel. Tous les
  contrastes y gagnent — 4,87:1 au pire contre 4,65 sur le papier froid,
  vérifié au calcul. **Côté adulte, plus de réglure** : la réglure est la
  métaphore du cahier de l'enfant, et sur un tableau de bord dense elle
  devient du bruit derrière le texte. Le bureau a son propre sol neutre
  (`#eceef1`), des cartes blanches, et deux tons de bordure — `bord` à 2,36:1
  pour les traits qui séparent, `bord-fort` à 3,09:1 pour le contour de tout
  ce qui se clique. C'est ce contour qui dit qu'un bouton est un bouton, donc
  c'est lui qui tient le plancher de 3:1.
- **Le chemin** — trait tiré au crayon plutôt qu'à la règle, pastilles de
  matière entourées d'un halo de leur couleur, titres dans la teinte de leur
  matière, marge colorée sur la séance en cours. Le même chemin porte La
  journée des adultes : les couleurs y disent la matière et l'état, jamais la
  réussite.
- **Son papier, côté adulte** — ce qui vient de l'enfant (ce qu'il a dit de
  sa journée, ce qu'il a répondu) s'affiche sur son papier crème, bordé de la
  réglure ; ce que les adultes écrivent reste sur le blanc. On sait qui parle
  sans lire la signature.
- **Plus de bande de couleur à gauche des cartes** — le tic de toutes les
  interfaces générées. Une carte qui demande l'attention est bordée et à
  peine teintée ; un encart qui explique n'a qu'un contour.
- **Typographie** — Fraunces pour les titres, Atkinson Hyperlegible pour le
  reste : ce caractère a été dessiné par le Braille Institute pour la
  lisibilité, ce qui en fait un choix justifié par le lecteur et non par le
  style.
- **Les contrastes sont mesurés, pas estimés.** Sur la page rendue, en
  compositant les fonds translucides. Deux fois de suite j'ai « corrigé » une
  bordure en l'estimant et elle est restée invisible — 1,31:1, puis 1,61:1
  pour un plancher de 3. Le pire texte est à 4,76:1 côté adulte, 4,82:1 côté
  enfant, et la journée de l'enfant tient à 768×1024 sans défilement, écart
  mesuré : zéro.

## Développement

```bash
npm install
npm run dev
npm test      # la projection destinée à l'enfant : aucun agrégat
npm run lint  # depuis Next 16, `next build` ne lance plus le linter
npx tsx controle/verifier-arithmetique.ts          # recalcule les opérations du manuel
npx tsx controle/verifier-matiere.ts lib/programme/maths.ts   # la structure d'une matière
```

Le dossier `controle/` tient les deux outils qui servent à relire le manuel
sans rien connaître du reste : l'un recalcule chaque énoncé qui est une
opération écrite en clair, l'autre vérifie la structure d'une seule matière
et signale les mots qu'un enfant qui vient d'échouer lirait comme un
reproche.

## Ce qui n'est pas fait

- **Faire relire le manuel par un enseignant.** Cent treize leçons et huit
  cent cinquante-quatre exercices écrits par quelqu'un qui n'est pas du
  métier, à partir des programmes officiels. Chaque matière a été relue une
  fois, et beaucoup de choses fausses en sont sorties — mais une relecture
  n'est pas celle d'un professionnel. `controle/fiches-a-trancher.md` liste ce
  que les relecteurs ont refusé de trancher seuls : c'est là qu'il faut
  commencer.
- **Faire relire les cent quatre-vingts questions du positionnement** par la
  même personne. Elles sont adossées aux attendus Éduscol de fin de CE2.
- **Faire valider les choix de protection par un soignant** : l'absence de
  tout compteur, la correction identique juste ou faux, le ressenti du soir
  lu par les parents seuls, le test de positionnement en début d'année.
- **Rendre l'année paramétrable** : la zone de vacances, l'académie et le
  premier jour sont écrits dans `lib/trame.ts`, et le motif de l'autorisation
  (« au titre de l'état de santé de l'enfant ») dans `lib/controle.ts`.
- **Chiffrer le journal et les ressentis dans le navigateur**, avec une
  phrase connue des parents seuls, pour que l'administrateur du serveur ne
  puisse pas les lire.
- **Une seconde série d'exercices pour les reprises d'après la Toussaint.**
  Les 19 leçons reprises avant la Toussaint ont la leur ; pour les autres, la
  reprise repose les huit exercices déjà corrigés dix jours plus tôt.
- **Faire tenir par des tests ce qui ne tient que par la lecture du code** :
  qu'un adulte ne puisse pas agir au nom de l'enfant, qu'une réponse ne
  s'enregistre que pour la question du moment, qu'un changement de ton soit
  tout ou rien.

## Licences

Le code est sous [PolyForm Noncommercial 1.0.0](LICENSE.md), le contenu
pédagogique sous [CC BY-NC-SA 4.0](LICENCE-CONTENU.txt). Gratuit pour les
familles, les associations et les écoles ; aucun usage commercial. Le détail
est dans [`LICENCES.md`](LICENCES.md).
