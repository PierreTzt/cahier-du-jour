# Product

## Register

product

## Users

Une famille qui fait l'instruction en famille : un enfant, un ou deux
parents, parfois un proche — un parrain, une grand-mère — qui prend part à la
semaine. Les parents peuvent vivre dans deux maisons.

- **Le parent du quotidien fait tout depuis son téléphone.** Composer la
  journée, la corriger le matin, noter le résultat d'une séance à fiche,
  déplacer une séance, lire la cloche, lire le soir. On le suppose peu outillé
  techniquement : ce qui lui est livré doit se comprendre sans mode d'emploi
  et marcher sans maintenance. Il lit souvent d'une main, entre deux choses,
  parfois à côté de l'enfant pendant qu'il travaille. Retour du premier jour
  d'usage réel : « très complet, mais un peu usine à gaz côté parent ».
- **L'autre parent** lit et écrit les mêmes écrans, parfois depuis l'autre
  maison. Deux parents qui écrivent au même endroit : rien ne doit écraser ce
  que l'autre a posé.
- **Le proche** — le parrain, dans la famille où l'outil est né — prépare
  l'atelier du mercredi et lit le relevé des exercices ; il ne lit ni le
  journal, ni le ressenti, ni le suivi.
- **L'enfant, en CM1,** travaille **sur un ordinateur**. Le produit est né
  pour un enfant que le sentiment d'échec met en danger. Ses écrans
  (`/journee`, `/etape`, `/questions`, `/ressenti`) ne sont pas l'objet de
  ce document côté mise en page — mais tout ce qu'un adulte fait depuis son
  téléphone finit dans sa journée.

## Product Purpose

Organiser l'instruction en famille d'un élève de CM1 : la journée de l'enfant
est générée à partir d'une trame écrite une fois pour l'année, les adultes la
corrigent quand ils veulent, l'enfant fait ses leçons seul à l'écran et les
adultes mènent le reste avec des fiches. Le produit rend aussi compte — à la
famille le soir, au soignant, à l'inspection d'académie une fois par an.

Réussir, côté adulte : un parent qui ouvre son téléphone à 8 h sait en dix
secondes ce qu'il mène ce matin et avec quoi, et peut changer la journée sans
chercher où. Le soir, il voit ce qui a été fait et ce qui mérite d'être
repris, sans note et sans chiffre unique.

## Brand Personality

Calme, honnête, sobre. Un outil de famille, pas un logiciel d'école ni une
application de suivi. Il dit les choses simplement, en français courant, et
ne juge jamais l'enfant — même côté adulte, où l'on parle d'une leçon « à
reprendre », jamais d'une erreur ou d'un problème.

Côté enfant, la chaleur d'un vrai cahier Seyès (papier crème, réglure,
Fraunces pour les titres) ; côté adulte, un bureau neutre et dense où le texte
passe avant la décoration. Atkinson Hyperlegible partout pour le texte.

## Anti-references

- Tout ce qui ressemble à un **tableau de bord de surveillance** : courbes de
  réussite, séries, alertes rouges, pourcentages. L'alerte sur les mauvaises
  séries a été écartée pour cette raison.
- La **gamification** : bons points, jetons, badges, confettis, couleurs qui
  ne s'allument que les bons jours. La chaleur n'est jamais conditionnelle.
- Les **ENT scolaires** (Pronote, ENT régionaux) : menus à vingt entrées,
  jargon administratif, tout au même niveau.
- Le **SaaS générique** : cartes identiques en grille, chiffres géants, icônes
  décoratives.
- Le **rouge**, nulle part : ce qui glisse s'affiche en ocre.

## Design Principles

1. **La journée d'abord.** Un seul écran sert tous les jours, La journée ; le
   reste se range par rythme (la semaine, l'année, le contrôle). Sur un
   téléphone, ce qui sert chaque matin doit être à portée du pouce, et ce qui
   sert une fois par trimestre ne doit pas le gêner.
2. **Le téléphone est l'appareil de référence des adultes.** Chaque écran
   adulte se juge d'abord à 375 px de large, d'une main : cibles d'au moins
   44 px, aucun tableau qui déborde, aucune action principale cachée au bout
   d'une ligne.
3. **Dire une chose une fois, au bon endroit.** Le produit a longtemps
   expliqué ses choix à l'écran ; un parent n'a pas besoin de la
   justification pour agir. Une ligne qui dit ce que l'enfant en voit suffit.
4. **Ce que l'enfant voit est la conséquence de ce que l'adulte touche.**
   Chaque geste d'adulte qui change sa journée doit dire ce qui changera chez
   lui — et une journée qu'il a refermée ne reçoit plus rien.
5. **Rien de ce qui concerne l'enfant ne se note.** Pas de score, pas de
   moyenne : ce qui dit quoi reprendre demain.

## Accessibility & Inclusion

- WCAG AA mesuré sur la page rendue, pas estimé : 4,5:1 pour le texte, 3:1
  pour le contour de tout ce qui se clique (`bord-fort`). Les fonds
  translucides se compositent avant de mesurer.
- Atkinson Hyperlegible pour le texte courant.
- `prefers-reduced-motion` respecté ; aucune animation décorative.
- Aucun sens porté par la couleur seule, et jamais de rouge.
- Côté enfant : aucun compteur, aucun retard visible, la journée tient sur un
  écran sans défiler (1280×900 et 768×1024) — voir les onze règles du
  `docs/regles.md`, qui priment sur tout ce document.
