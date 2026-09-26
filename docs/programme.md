# Le programme et la trame

[← Sommaire](README.md)

## Le manuel

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


## L'année, jour par jour

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

---

[← Sommaire](README.md)
