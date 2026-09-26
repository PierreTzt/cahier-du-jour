# Les limites

[← Sommaire](README.md)

## Avant de vous lancer

- **C'est un site à héberger soi-même**, pas une application à télécharger.
  Ce que votre enfant écrit reste sur votre serveur. Il faut quelqu'un à
  l'aise avec un terminal pour l'installer (une heure) et le tenir à jour :
  [la marche à suivre](../deploiement/README.md).
- **CM1 seulement.** 113 leçons, 854 exercices, 801 fiches et un test de
  positionnement de 180 questions, d'après les programmes en vigueur à la
  rentrée 2026. Rien pour les autres niveaux.
- **Une année précise.** La trame suit le calendrier **2026-2027** de
  l'académie de **Lille** (zone B) et commence le 16 septembre 2026. Une
  autre zone ou une autre année demande d'adapter `lib/trame.ts` avant
  d'écrire l'année. Une famille qui commence plus tard verra les leçons des
  jours déjà passés parmi celles « à rattraper ».
- **Rien n'a été relu par un enseignant**, ni validé par un soignant. Le
  contenu a été écrit d'après les textes officiels (listés sur la page
  `/sources` de l'application) et relu plusieurs fois, mais pas par
  quelqu'un du métier. Lisez les leçons avant de les donner : `/manuel` les
  montre en entier, corrigés compris.
- **Les journaux ne sont pas chiffrés dans le navigateur.** Qui administre le
  serveur peut techniquement lire ce que l'enfant dépose le soir. Choisissez
  cette personne en conséquence.

## Ce qui n'est pas fait

- **Faire relire le manuel par un enseignant.** Cent treize leçons et huit
  cent cinquante-quatre exercices écrits par quelqu'un qui n'est pas du
  métier, à partir des programmes officiels. Chaque matière a été relue une
  fois, et beaucoup de choses fausses en sont sorties — mais une relecture
  n'est pas celle d'un professionnel. `controle/fiches-a-trancher.md` liste
  ce que les relecteurs ont refusé de trancher seuls : c'est là qu'il faut
  commencer.
- **Faire relire les cent quatre-vingts questions du positionnement** par la
  même personne. Elles sont adossées aux attendus Éduscol de fin de CE2.
- **Faire valider les choix de protection par un soignant** : l'absence de
  tout compteur, la correction identique juste ou faux, le ressenti du soir
  lu par les parents seuls, le test de positionnement en début d'année.
- **Rendre l'année paramétrable** : la zone de vacances, l'académie et le
  premier jour sont écrits dans `lib/trame.ts`, et le motif de
  l'autorisation (« au titre de l'état de santé de l'enfant ») dans
  `lib/controle.ts`.
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

Une erreur trouvée dans une leçon ? [Signalez-la](https://github.com/PierreTzt/cahier-du-jour/issues/new/choose).
