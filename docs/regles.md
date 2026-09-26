# Les règles de conception

[← Sommaire](README.md)

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

---

[← Sommaire](README.md)
