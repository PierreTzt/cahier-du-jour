# Le test de positionnement

[← Sommaire](README.md)

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

---

[← Sommaire](README.md)
