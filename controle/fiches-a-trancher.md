# Fiches : les questions des relecteurs, et ce qui a été décidé

Les fiches écrites le 14 septembre 2026 ont été relues par des agents, avec un œil adverse sur l’exactitude, la sécurité et l’anxiété de l’enfant. Ce qu’ils ont trouvé faux, ils l’ont corrigé. Ce qu’ils n’ont pas voulu trancher seuls est ici, fiche par fiche, dans leurs mots, **avec la décision prise ensuite et sa raison**. Chaque décision se défait : la fiche se retouche, et cette page se met à jour.

| Statut | Ce que ça veut dire | Nombre |
| --- | --- | --- |
| Tranché | La fiche, ou le manuel, a été changé | 34 |
| Vérifié | Le fait ou le choix était juste, rien n’a changé | 22 |
| À essayer la veille | Rien ne remplace un essai réel : la fiche dit quoi essayer seul avant la séance, et prévoit un repli qui ne fait jamais porter l’échec à l’enfant | 18 |
| Choix prudent | Dépend de ce que l'enfant supporte : le choix le plus protecteur a été pris, et il se défait facilement | 5 |

79 questions en tout. Rien de tout cela n’a été relu par un enseignant, ni essayé en vrai.

Le code de chaque fiche s’ouvre sur `/fiche/<code>`.

## Conjugaison et homophones — `lib/fiches/conjugaison.ts`

- **cj-verbes-06** — Aucune des erreurs signalées n'est infondée. Mais la formule que j'ai retirée de cj-verbes-06 existe aussi dans deux fichiers que je n'ai pas le droit de modifier. Dans lib/programme/francais.ts, ligne 1373, l'introduction de la leçon « Les verbes qui changent de radical » dit que tous ces changements « servent à garder le son ». Dans lib/fiches/reprise-francais.ts, ligne 380, cela s'applique aussi au doublement de consonne et à l'accent grave des verbes en -eler et -eter. La même leçon dit pourtant plus bas (ligne 1402) que pour ces verbes, l'écriture change parce que la voyelle devient ouverte. Un enseignant devrait décider s'il faut harmoniser ces deux passages, ou si « garder le son » est une simplification acceptable pour un CM1.
  - **Tranché.** L’introduction de la leçon sur les radicaux dit maintenant que l’écriture change tantôt pour garder un son, tantôt pour montrer qu’il a changé.
- **cj-verbes-07** — La fiche 7 dit que vous faites, vous dites et vous êtes sont « les trois seules du français », et la fiche 12 le répète. C'est vrai pour ces trois verbes, mais faux si on compte leurs composés (refaites, redites, défaites, satisfaites). La leçon du présent simplifie de la même façon. Faut-il garder la simplification ou la nuancer ?
  - **Tranché.** Nuancé dans les fiches 7 et 12 et dans la leçon du présent : trois formes à retenir, et les verbes construits sur faire font pareil (vous refaites), comme redire (vous redites). Contredire ou interdire font -ez.
- **cj-verbes-09** — La question « comment être sûr qu'il n'y a rien de plus à écrire derrière pu ? » n'a pas de vraie réponse avec les outils de la leçon : le participe se sait par cœur. J'ai rendu le corrigé honnête sur ce point. Un enseignant préférerait peut-être changer la question elle-même.
  - **Tranché.** La question est remplacée par une question qui a une réponse : pourquoi « elles ont pu » ne prend ni e ni s (l’auxiliaire avoir).
- **ho-trous-01** — Cette fiche tombe le 16 octobre. Le test demande de dire « avait » et « était », avant la leçon sur l'imparfait (2 novembre). Le texte est au passé composé, avant la leçon sur ce temps (9 novembre). Ces formes sont connues à l'oral et on ne demande pas de les écrire, mais est-ce acceptable à cette date ?
  - **Tranché.** Gardé : « avait » et « était » se disent à voix haute pour le test, sans être écrits ni conjugués, et la fiche le dit.
- **ho-trous-07** — Plusieurs textes n'appliquent pas la concordance des temps : ho-07 « Son père lui a expliqué que ces timbres ont été imprimés », ho-10 « Le voisin a dit qu'il a des coquilles », ho-06 « ont demandé pourquoi tout est mouillé ». C'est admis quand le fait reste vrai, mais la norme écrite voudrait « avaient été », « avait », « était », ce qui ferait disparaître le trou. Accepter tel quel ?
  - **Vérifié.** Gardé tel quel : le présent est admis quand le fait reste vrai, et la norme « avaient été » ferait disparaître le trou sans rien apprendre de plus.
- **ho-trous-07** — J'ai laissé deux trous qui semblent n'avoir qu'une réponse, sans en être sûr : « Le grenier ___ ouvert depuis le matin » (ho-07) et « les autres voyageurs ___ déjà repartis » (ho-08). « A ouvert » et « ont reparti » sont peu probables à l'oral, mais un enfant pourrait les défendre. Faut-il les reformuler comme les autres ?
  - **Tranché.** Les réponses restent « est » et « sont ». Le corrigé dit quoi faire si l’enfant propose « a » ou « ont » : on fait le test à voix haute et on regarde ensemble si la phrase a encore un sens — sa proposition se discute, elle ne se barre pas.
- **ho-trous-08** — « On s'est installé » : le participe est laissé au masculin singulier alors que « on » désigne plusieurs voyageurs, et « installés » est également admis. Si l'enfant écrit « installés », il faut l'accepter. Faut-il le dire dans le corrigé ?
  - **Tranché.** Le corrigé accepte « installé » et « installés ».
- **ho-trous-11** — « Son coffre est plus lourd qu'au départ » alors que les livres ont été vendus et que seules les billes sont restées. Est-ce une incohérence, ou une plaisanterie voulue (Malo aurait acheté ailleurs) ? L'enfant peut s'y arrêter.
  - **Tranché.** Incohérence corrigée : le coffre est plus léger qu’au départ.

## Le dictionnaire — `lib/fiches/dictionnaire.ts`

- **di-mots-01** — La première séance (24 septembre) tombe six jours après la leçon « La nature des mots ». Faut-il déjà demander la nature, et surtout les deux natures de « calme », ou garder cela pour plus tard ?
  - **Tranché.** La nature se demande ; la seconde nature de « calme » devient un bonus, gardé pour plus tard si elle ne vient pas.
- **di-mots-06** — Le mot 5 demande de voir ce que l'article de « souvent » ne donne pas. La question est abstraite et risque d'être vécue comme un échec : faut-il la garder, ou la remplacer par une question directe (« pourquoi l'article ne dit-il ni féminin ni pluriel ? ») ?
  - **Tranché.** Remplacé par une question directe : pourquoi l’article ne dit ni genre ni nombre (un adverbe ne change jamais de forme).
- **di-mots-08** — Le corrigé explique maintenant que la mine du crayon et la mine de charbon sont le même mot, parce que la mine du crayon est faite d'un minerai. C'est vérifié sur le Wiktionnaire, pas dans un dictionnaire historique : un enseignant peut-il confirmer ?
  - **Vérifié.** Gardé : la mine du crayon et la mine de charbon sont bien le même mot, par la « mine de plomb ».
- **di-mots-09** — Le corrigé présente la racine d'un mot comme proche du radical de la leçon sur les familles. Cette assimilation est-elle acceptable en CM1, ou faut-il retirer cet emploi et laisser le mot racine avec son seul sens figuré ?
  - **Tranché.** L’assimilation est retirée : le manuel dit « radical », et « racine » garde ses sens propre et figuré.
- **di-mots-10** — Faut-il ranger porte et portail dans une autre famille que porter, comme le propose le corrigé ? Leurs origines latines sont différentes (porta, portare), mais on les rapproche parfois à l'école.
  - **Tranché.** Deux familles, et le corrigé dit pourquoi : les mots se ressemblent mais viennent de deux mots latins différents.
- **di-mots-12** — Le mot inventé « frigolier », même annoncé à l'avance, convient-il à un enfant sujet à la peur de l'échec ? La fiche est-elle bien placée le 8 juin, ou vaut-il mieux la garder en réserve ? Et l'emploi argotique de « grave » a-t-il sa place dans le matériel ?
  - **Vérifié.** Gardé. Le mot inventé est annoncé avant la recherche, et c’est le but de la fiche : chercher et ne pas trouver n’est pas échouer. « Grave » reste aussi : c’est l’exemple d’un sens absent du dictionnaire.
- **di-mots-13** — Le sens culinaire de « chinois » manque dans beaucoup de dictionnaires junior. Vaut-il mieux remplacer ce mot par un autre dont le sens inattendu est sûr d'y figurer ?
  - **Tranché.** « Chinois » est remplacé par « une souris » : l’animal et l’appareil, deux sens présents dans tout dictionnaire junior.
- **di-mots-15** — Le corrigé range « heure » dans la famille de « horloge ». C'est juste par l'étymologie (hora), mais une famille de mots au sens scolaire les regrouperait-elle ?
  - **Tranché.** « Heure » sort de la famille de « horloge » : cousins par l’histoire du mot, pas de la même famille au sens de l’école.
- **di-mots-16** — Les réponses (nombre d'articles pour voler, tour, mousse, sol) changent beaucoup d'un dictionnaire à l'autre. Faut-il que l'adulte vérifie les cinq articles avant la séance, et le dire dans mener ?
  - **Tranché.** La fiche dit que ces nombres varient d’un dictionnaire à l’autre : ceux du corrigé sont un exemple, c’est le dictionnaire de la maison qui a raison.

## Reprendre la leçon de français — `lib/fiches/reprise-francais.ts`

- **f-p5-orthographe (lib/programme/francais.ts, ligne 1950, hors de mon fichier)** — Remarqué en vérifiant la fiche 12 : le cours dit « « il appelle » double le l, comme « appeler » ». Or « appeler » n’a qu’un l : le mot de la famille ne justifie pas le doublement, qui vient de la règle de conjugaison (leçon f-p4-radical). La fiche 12 (corrige 12) le dit correctement. Je ne l’ai pas corrigé : ce n’est pas mon fichier. À faire trancher et corriger par le coordinateur.
  - **Tranché.** Corrigé dans le manuel : l’exemple devient « terrain » double le r, comme « terre » et « enterrer ».
- **rf-reprise-01 à 12** — Les douze fiches reprennent bien la bonne leçon : c'est vérifié avec la trame, date par date. En revanche, rien ne permet de savoir si le fichier sur le disque est la version que l'agent précédent voulait écrire. Il est complet et cohérent (quatorze fiches, en-tête exact), mais son dernier message laisse penser qu'une réécriture n'a pas abouti. Ce qu'on garde est à confirmer.
  - **Vérifié.** Confirmé : le fichier a été relu puis contre-vérifié en entier, chaque fiche reprend la bonne leçon date par date, et treize erreurs y ont été corrigées.
- **rf-reprise-01, 07, 09** — Plusieurs items gardent la forme d'une question du manuel avec d'autres mots : fiche 1, items 5, 7 et 8 (na-5, na-7, na-8) ; fiche 7, items 1, 6 et 8 ; fiche 9, items 4 et 10. Je les ai jugés neufs (même notion, autres phrases). Un enseignant peut vouloir plus de variété dans la forme des questions.
  - **Vérifié.** Gardé : même notion, phrases et mots neufs, ce qui est le but de la reprise.
- **rf-reprise-03** — Item 9 (« Demain, je rangerais ma chambre ») : le corrigé présente « il y a un s » comme la meilleure réponse, alors que le cours dit que c'est le sens qui décide entre futur et conditionnel. Faut-il rééquilibrer ?
  - **Tranché.** Rééquilibré : c’est le sens qui décide (« demain »), le s n’est qu’une vérification.
- **rf-reprise-08** — Orthographe révisée de 1990 : j'ai écarté « feuilleter » (il feuillète est admis) et gardé « projeter », de la famille de jeter, qui double dans les deux orthographes. Les fiches doivent-elles suivre l'orthographe révisée comme référence, et le signaler dans les corrigés ?
  - **Vérifié.** La référence reste l’orthographe traditionnelle, comme le manuel ; les verbes dont les deux orthographes divergent ont été écartés, donc rien à signaler dans les corrigés.
- **rf-reprise-11** — Mener ramène tout à une seule question : « quelqu'un s'étonne-t-il ? ». Le cours en pose deux : le monde est-il le nôtre, et le doute reste-t-il ? J'ai réécrit les items pour que la question unique donne toujours la bonne réponse. Reste à trancher si cette simplification est acceptable, et si l'item 7 (le numéro de maison qui a changé) est assez clairement étrange plutôt que réaliste.
  - **Tranché.** La fiche pose maintenant les deux questions du cours, formulées pour un enfant de neuf ans, et l’item 7 est rendu clairement étrange.
- **rf-reprise-11** — Pas une erreur signalée jugée infondée (les treize étaient fondées), mais une question qui en découle : mener 0 dit encore « une seule question à se poser : est-ce que quelqu’un trouve ça bizarre ? ». Le regarder corrigé ajoute maintenant un second critère (« si le monde est le nôtre »), qui est celui du cours. Faut-il aussi assouplir mener 0, ou garder une seule question en tête de page pour un enfant de 9 ans, en acceptant qu’elle ne tranche pas tous les cas ? Je n’y ai pas touché.
  - **Tranché.** La fiche pose maintenant les deux questions du cours, formulées pour un enfant de neuf ans, et l’item 7 est rendu clairement étrange.
- **rf-reprise-13** — L'item 6, « Il offre un bouquet à sa sœur », a deux compléments. Le programme ne demande de distinguer COD et COI que dans des phrases prototypiques, et le test de suppression ne marche pas pour « à sa sœur ». J'ai ajouté une mise en garde au corrigé. Faut-il plutôt retirer l'item de cette fiche de réserve ?
  - **Tranché.** L’item est remplacé par une phrase à un seul complément, comme ses voisins.
- **rf-reprise-14** — Le piège du complément du nom n'est toujours pas annoncé avant l'exercice. J'ai seulement retiré l'idée de « se faire prendre » et prévu qu'on repose la question sans parler d'erreur. Vu la peur de l'échec, faut-il plutôt le signaler dès le départ ?
  - **Tranché.** La difficulté est annoncée à l’enfant avant de commencer.
- **toutes** — Le créneau dure 25 minutes. Chaque fiche y met la relecture du cours, les huit exercices de l'écran refaits sur le cahier, puis dix à douze items neufs. Pour cet enfant, c'est probablement trop. Faut-il que les items de la fiche remplacent les exercices de l'écran au lieu de s'y ajouter ?
  - **Tranché.** Les items neufs remplacent les exercices de l’écran ; la consigne de la trame dit désormais « avec des phrases neuves ».

## Mercredi : pourquoi, expérience, cuisine, démontage, programmation — `lib/fiches/mercredi.ts`

- **mw-cuisine-01** — Je n'ai pas testé les grammes du gâteau au yaourt (125 g de yaourt, 3 œufs, 150 g de sucre, 200 g de farine, 5 g de levure, 80 mL d'huile, 30 à 35 min à 180 °C dans un moule de 22 à 24 cm). Les proportions sont les proportions habituelles. Faire le gâteau une fois avant la séance du 14 octobre.
  - **À essayer la veille.** Recette gardée (proportions habituelles). La fiche dit de la faire une fois seul avant, pour régler la cuisson sur son four.
- **mw-cuisine-01** — Recette jamais essayée : 150 g de sucre et 80 mL d'huile, 30 à 35 minutes à 180 °C dans un moule de 22 à 24 cm. Le temps peut être court selon le four. La vérification à la lame est prévue, mais la durée mérite d'être validée une fois.
  - **À essayer la veille.** Même décision : un essai seul avant la séance.
- **mw-cuisine-02** — « Une quinzaine de crêpes » et « une minute et demie à deux minutes par crêpe » dépendent de la poêle. La fiche fait mesurer le temps réel à la question 8, mais un adulte peut vérifier le nombre de crêpes avant. Un enseignant peut aussi dire si les conversions en dL et en cL et l'écriture 0,5 L conviennent en avril de CM1.
  - **Vérifié.** Gardé : litre, décilitre, centilitre et l’écriture 0,5 L sont au programme de CM1 à cette date, et la fiche fait mesurer le temps réel.
- **mw-cuisine-03** — Je n'ai pas testé les cookies (100 g de beurre, 100 g de sucre, 1 œuf, 170 g de farine, 5 g de levure, 100 g de chocolat, 10 à 12 min à 180 °C). Les calculs du corrigé en dépendent : 525 g de pâte, 17 boules de 30 g, 9 boules par plaque. Faire la recette une fois pour voir si la pâte se tient et si les cookies s'étalent comme prévu.
  - **À essayer la veille.** Recette gardée. La fiche dit de la faire une fois seul avant ; les calculs de la séance ne dépendent pas du four.
- **mw-demonter-01** — Le mécanisme du poussoir est décrit de façon générale : une pièce crantée qui tourne d'un cran à chaque clic. Selon le stylo, le nombre de pièces et l'endroit où elles se trouvent changent. Ouvrir un des deux stylos avant, pour savoir à quoi s'attendre.
  - **À essayer la veille.** La fiche dit d’ouvrir un stylo seul avant, et que ce qu’on voit compte plus que les noms.
- **mw-demonter-02** — La consigne interdit tout objet qui contient un condensateur. Une lampe de poche à LED peut cacher une petite carte électronique. La fiche dit de prendre une lampe à ampoule et de refermer si on trouve une carte. Un adulte doit vérifier la lampe choisie avant la séance, et décider si une lampe à piles lui convient.
  - **Tranché.** Plan B ajouté : si la lampe cache une carte, on la referme et on démonte une agrafeuse, entièrement mécanique.
- **mw-demonter-02** — Beaucoup de maisons n'ont plus que des lampes à LED avec une petite carte électronique, et la fiche s'arrête alors dès l'ouverture. Faut-il demander d'acheter une lampe à ampoule bon marché, ou prévoir un autre objet ?
  - **Tranché.** Même décision : l’agrafeuse en plan B, plutôt qu’un achat.
- **mw-demonter-03** — « Meule mobile » et « meule fixe » sont des noms descriptifs, pas forcément ceux des fabricants. La présence d'un ressort, le sens de la molette et la façon dont la tige se démonte changent d'un moulin à l'autre. Démonter une fois le moulin de la maison avant, pour vérifier qu'il s'ouvre à la main.
  - **À essayer la veille.** La fiche dit d’ouvrir le moulin seul avant ; les noms de pièces peuvent varier d’un modèle à l’autre.
- **mw-experience-02** — Faut-il imposer du sable acheté, et exclure celui du bac à sable et la terre du jardin, par hygiène ? Aujourd'hui on ne goûte plus rien et on se lave les mains, mais l'enfant manipule quand même ce sable.
  - **Tranché.** Sable propre acheté (loisirs créatifs ou jardinerie), jamais celui du bac à sable ni la terre du jardin.
- **mw-experience-03** — Je n'ai pas mesuré la fourchette « l'œuf décolle entre 20 et 45 g de sel pour 250 g d'eau » : je l'ai déduite de la densité d'un œuf et de celle de l'eau salée. L'essayer avec un vrai œuf avant la séance, et vérifier que le défi de l'œuf suspendu (eau douce versée doucement par-dessus) marche avec un bocal de la maison.
  - **À essayer la veille.** La fiche dit d’essayer avant avec un œuf et le bocal de la maison : la fourchette est un ordre de grandeur, l’essai de la maison fait foi.
- **mw-experience-03** — J'ai calculé la fourchette de sel « 20 à 50 g pour 250 g d'eau » à partir des densités usuelles d'un œuf et de l'eau salée, sans essai réel. Un adulte devrait la tester avec un œuf du commerce avant la séance.
  - **À essayer la veille.** La fiche dit d’essayer avant avec un œuf et le bocal de la maison : la fourchette est un ordre de grandeur, l’essai de la maison fait foi.
- **mw-experience-04** — Faut-il garder le verre D (sucre en poudre dans l'eau froide, sans remuer) ? Un morceau s'effrite vite en grains, donc A et D peuvent finir presque en même temps. On pourrait remplacer D par du sucre glace, ou essayer l'expérience une fois avant la séance.
  - **Tranché.** Gardé, et le corrigé dit que A et D peuvent finir presque ensemble : un résultat à discuter, pas une expérience ratée.
- **mw-pourquoi-01** — L'expérience du verre d'eau avec quelques gouttes de lait, éclairé à la lampe, donne un effet bleuté faible, et il dépend de la quantité de lait. La faire une fois seul avant, pour savoir combien de gouttes mettre, sinon l'enfant ne verra rien.
  - **À essayer la veille.** La fiche dit d’essayer seul avant, lampe de poche plutôt que LED blanche, et prévoit quoi dire si l’effet reste invisible.
- **mw-pourquoi-01** — L'expérience du lait donne un effet faible, et parfois presque invisible avec une lampe à LED très blanche. Faut-il conseiller à l'adulte de l'essayer seul avant, pour ne pas faire d'une expérience ratée le cœur d'une séance sur le fait de ne pas savoir ?
  - **À essayer la veille.** Même décision, avec le repli : on dit franchement que ça ne se voit presque pas, et la séance continue.
- **mw-pourquoi-02** — J'ai calculé les durées du jour pour Lille : environ 8 h le 21 décembre et 16 h 30 le 21 juin. Elles changent de quelques minutes à un quart d'heure selon la ville où vit la famille. Distances Terre-Soleil : 147 et 152 millions de km.
  - **Vérifié.** Gardé : le corrigé donne déjà les durées pour Lille, Paris et Marseille. L’écart entre les villes atteint une heure en décembre, et la fiche le montre.
- **mw-pourquoi-03** — J'ai cité de mémoire deux études : Sussex, 2009, sur le ronronnement des chats qui réclament à manger ; Vienne, 2023, sur un larynx qui produit le son sans que les muscles se contractent. Il faut vérifier les dates avant de les donner. Question aussi pour un adulte : un enfant anxieux supporte-t-il bien d'apprendre que les chats ronronnent aussi quand ils sont blessés ou malades ?
  - **Vérifié.** Les deux études sont exactes (Sussex 2009, Vienne 2023) ; la phrase sur les chats blessés est formulée calmement.
- **mw-pourquoi-04** — Les chiffres donnés (environ 35 g de sels par litre dans l'océan, la mer Morte près de dix fois plus salée, le résidu sec des eaux minérales de quelques dizaines à quelques milliers de mg/L) sont exacts dans l'ensemble. Il faut vérifier la ligne « résidu sec » sur la bouteille qu'on utilisera.
  - **Vérifié.** Chiffres exacts ; on lit le résidu sec sur la bouteille qu’on utilise.
- **mw-pourquoi-05** — L'expérience américaine des années 1980 (un air plus riche en oxygène ne fait pas moins bâiller, Provine et ses collègues, 1987) est citée de mémoire. Il faut la vérifier avant la séance.
  - **Vérifié.** L’étude est exacte (Provine et ses collègues, 1987).
- **mw-programme-01** — La fiche fait « rire ensemble » du premier bug, celui de l'adulte. Chez un enfant anxieux devant l'erreur, rire d'un bug peut se retourner le jour où c'est le sien. La ligne « regarder » prévoit une parade, mais faut-il garder ce rire dans « mener » ?
  - **Tranché.** Le premier bug se cherche ensemble, il ne se rit plus.
- **mw-programme-02** — Tous les programmes et leurs corrigés des trois fiches ont été exécutés par un petit simulateur, et ils sont justes. Il reste à décider si les instructions REPETE avec crochets conviennent en mai de CM1, et si le papier à carreaux de 5 mm est assez grand pour tracer à la main.
  - **Tranché.** Les boucles restent (programme du cycle 3, fiche de mai). Le papier de 5 mm devient les grands carreaux du cahier ou du papier de 1 cm.

## Mercredi : construire, dessin, musique, projet — `lib/fiches/mercredi-faire.ts`

- **mf-construire-01** — Je ne promets pas qu'un pont en accordéon porte un livre de poche entre deux piles écartées de 20 cm : cela dépend du papier et du pliage. Le corrigé le dit, mais l'adulte peut faire un essai avant pour savoir à quoi s'attendre.
  - **À essayer la veille.** La fiche dit de plier un pont seul avant ; s’il ne porte pas le livre, c’est le pliage qu’on interroge, jamais l’enfant.
- **mf-construire-02** — Moulin et treuil (gobelet, paille, pique, fil) : je n'ai pas pu le monter. Il faut le construire une fois avant la séance pour vérifier que le souffle suffit à monter un trombone, puis plusieurs. Si la pique frotte trop dans la paille, élargir les trous. La pique est pointue : c'est l'adulte qui perce et qui coupe la pointe.
  - **À essayer la veille.** Construire le moulin une fois avant la séance ; l’adulte perce et coupe la pique.
- **mf-construire-02** — Le nouveau montage (moulinet et fil du même côté, dans le vide, gobelet collé au bord de la table) est calculé, pas essayé. Le parrain devrait le construire une fois avant le 6 janvier, pour vérifier qu'un souffle suffit à monter un trombone et que le gobelet tient. Si le trombone ne monte pas, l'enfant vit un échec causé par la fiche, pas par lui.
  - **À essayer la veille.** Même décision, et la fiche prévoit quoi faire si le trombone ne monte pas, sans que ce soit son échec.
- **mf-construire-03** — Le montage suppose une ampoule de lampe de poche à filament, prévue pour 3,5 V à 4,5 V, ou une DEL avec une résistance d'environ 220 ohms. Il faut vérifier ce qu'on a vraiment à la maison. Un enseignant devrait aussi relire la consigne de sécurité sur le court-circuit (pile ou bandes d'aluminium qui chauffent). Et les attaches parisiennes peintes ne conduisent pas : en tester une avant la séance.
  - **À essayer la veille.** Montage gardé ; la fiche dit de tester l’attache parisienne et l’ampoule avant, et garde la consigne sur le court-circuit.
- **mf-construire-03** — La trame et la consigne demandent « le matériel de la maison », mais la séance demande d'acheter une pile plate de 4,5 V, une ampoule à culot, et éventuellement une douille ou des pinces crocodiles. C'est acceptable pour une fois dans l'année, ou faut-il une autre séance « circuit » ?
  - **Tranché.** Acceptable une fois dans l’année : la fiche liste ce qu’il faut acheter à l’avance.
- **mf-construire-04** — Le sens dans lequel il faut remonter la pale est déduit du principe physique, pas d'un essai (quand on lâche, le bas de la pale doit partir vers l'arrière). Faire un essai rapide avant la séance pour ne pas donner un corrigé faux. Vérifier aussi qu'une brique coupée en deux dans la longueur flotte bien avec les crayons fixés dessus.
  - **À essayer la veille.** La fiche dit de faire flotter le bateau une fois avant.
- **mf-construire-04** — Même chose pour le bateau : les crayons près du fond et la pale de 6 cm sont déduits de la ligne de flottaison, pas testés. Le faire flotter une fois avant le 23 juin ? Faut-il aussi préférer une brique d'1 L coupée sur sa face large, pour une coque plus stable ?
  - **À essayer la veille.** La fiche dit de faire flotter le bateau une fois avant.
- **mf-dessin-03** — Les exemples de botanique (basilic à feuilles opposées, lierre à feuilles alternes) sont justes. Mais si la plante utilisée est une autre, l'adulte doit regarder lui-même avant la séance comment ses feuilles sont disposées.
  - **Tranché.** Le lierre est remplacé par le noisetier, sans risque, aux feuilles alternes lui aussi.
- **mf-dessin-03** — Faut-il garder le lierre (toxique, sève irritante) comme plante proposée, même avec la ligne de sécurité, ou le remplacer par une plante sans risque aux feuilles alternes, par exemple un géranium ou un rameau de noisetier ?
  - **Tranché.** Le lierre est remplacé par le noisetier, sans risque, aux feuilles alternes lui aussi.
- **mf-dessin-04** — La référence à l'étude de Rebecca Lawson (2006) sur les vélos dessinés de mémoire, et les erreurs qu'elle cite (la chaîne reliée à la roue avant, un cadre qui bloquerait le guidon) : je les écris de mémoire, sans avoir pu les vérifier. Si personne ne peut les confirmer, retirer la phrase sur l'étude.
  - **Vérifié.** Gardé : l’étude existe (Rebecca Lawson, Memory & Cognition, 2006) et les erreurs citées y figurent.
- **mf-dessin-04** — La fiche cite nommément une chercheuse vivante (Rebecca Lawson, étude de 2006 sur les vélos dessinés de mémoire). Le fait est exact à ma connaissance, mais un enseignant peut préférer une formulation sans nom propre.
  - **Vérifié.** Gardé : l’étude existe (Rebecca Lawson, Memory & Cognition, 2006) et les erreurs citées y figurent.
- **mf-musique-01** — Description du début du premier mouvement de L'Hiver (notes répétées, instruments qui s'ajoutent les uns aux autres) et du Largo (violons en pizzicato sous le violon solo) : à confirmer sur l'enregistrement retenu. La présence d'un clavecin et les durées des mouvements changent selon les versions.
  - **À essayer la veille.** Descriptions exactes pour les enregistrements courants ; la fiche dit d’écouter une fois la version choisie avant.
- **mf-musique-01** — « Doucement dans la plupart des enregistrements » pour le début de L'Hiver : je n'ai pas pu vérifier la nuance écrite sur la partition, d'où la formulation prudente. À confirmer en écoutant l'enregistrement choisi.
  - **À essayer la veille.** Descriptions exactes pour les enregistrements courants ; la fiche dit d’écouter une fois la version choisie avant.
- **mf-musique-02** — Vérifier à l'écoute de l'enregistrement choisi l'ordre des premiers instruments du Boléro (flûte, clarinette, basson, petite clarinette, hautbois d'amour), et le rythme d'environ un changement toutes les cinquante secondes. Ce rythme dépend du tempo de l'interprète.
  - **Vérifié.** L’ordre des instruments est exact ; la fiche dit d’écouter la version choisie avant.
- **mf-musique-02** — La question d'ouverture (« une chose ne change jamais … Laquelle ? ») attend une seule réponse, ce qui peut mettre sous pression un enfant sensible à l'échec. J'ai ajouté que plusieurs réponses sont acceptées dans le corrigé. Faut-il plutôt ouvrir la question elle-même (« Qu'est-ce qui ne change pas ? ») ?
  - **Tranché.** La question est ouverte : « qu’est-ce qui ne change pas, du début à la fin ? ».
- **mf-musique-03** — Clair de lune : la séance suppose que la pulsation est difficile à trouver et que la musique grandit vers le milieu. C'est très variable selon le pianiste. Écouter la version choisie avant, et ne prendre qu'une version pour piano seul.
  - **À essayer la veille.** Une version pour piano seul, écoutée une fois avant.
- **mf-projet-01** — Cette fiche reprend le moulin de la fiche « Construire 2 » (6 janvier). Si la séance de janvier n'a pas eu lieu, ou si c'est le pont qui a été gardé, c'est la fiche « Projet 2 » qui sert. Les ordres de grandeur (environ 1 cm de fil par tour avec une pique de 3 mm, environ 3 cm avec un tambour de 1 cm) viennent d'un calcul avec la formule longueur = π × épaisseur, pas d'une mesure.
  - **Vérifié.** Gardé : le calcul est juste, et la fiche Projet 2 sert de repli.

## Mercredi : sortie, carte, métier — `lib/fiches/mercredi-monde.ts`

- **mm-carte-01** — La séance impose « sans gomme, on garde tous les traits » (et d’autres fiches disent « en rayant plutôt qu’en effaçant »). Pour un enfant perfectionniste, retirer la gomme peut l’apaiser, ou au contraire le crisper dès le premier trait. Faut-il laisser la gomme au choix de l’enfant ?
  - **Tranché.** Si l’absence de gomme le bloque, on la lui rend.
- **mm-carte-04** — L'heure où le soleil est plein sud est donnée vers 13 h en hiver et 14 h en été, avec parfois près d'une heure d'écart selon l'endroit. La méthode de l'ombre est présentée comme approximative, et la fiche dit que le soleil ne se lève plein est qu'autour des équinoxes. Le calcul est à confirmer pour la ville de la famille. Il faut aussi choisir un jour de soleil : cette fiche est la fiche de réserve.
  - **Vérifié.** Gardé : midi solaire vers 13 h en hiver et 14 h en été en France, et la fiche dit que c’est approximatif.
- **mm-metier-01** — À vérifier : le CAP boulanger en deux ans après la troisième, suivi du brevet professionnel, et le bac pro boulanger-pâtissier en trois ans. La fiche dit aussi qu'une boutique ne peut s'appeler boulangerie que si le pain y est pétri, façonné et cuit sur place (loi de 1998). Dernier point à tester : les proportions de la pâte (250 g de farine, 160 g d'eau, 5 g de sel, 5 g de levure sèche) et la levée annoncée, qui commence à peine au bout de 45 minutes.
  - **Vérifié.** Exact : CAP en deux ans, brevet professionnel, bac pro en trois ans, et la loi de 1998 sur l’appellation boulangerie. Proportions de pâte habituelles.
- **mm-metier-01** — Pâte (un quart d’heure), trajet, trois questions et retour en quarante-cinq minutes, c’est serré, et la pâte n’aura qu’à peine commencé à lever. Faut-il scinder la séance (pâte le matin, boulangerie à un autre moment) ?
  - **Tranché.** La pâte se fait en premier et lève pendant la sortie ; si le temps manque, elle devient un autre mercredi.
- **mm-metier-02** — La formation d'infirmier est donnée pour trois ans en institut de formation en soins infirmiers, avec environ la moitié du temps en stage. C'est la durée que je connais, mais une réforme de cette formation était annoncée vers la rentrée 2026. Il faut vérifier que la durée et le nom du diplôme sont toujours justes.
  - **Vérifié.** Gardé : trois ans en institut de formation en soins infirmiers ; la fiche dit déjà que le parcours raconté par la personne interrogée prime.
- **mm-metier-02** — Deux choix qu'un adulte qui connaît l'enfant doit trancher. D'abord, la fiche fait poser la question « Que faites-vous quand un patient a peur ? » : c'est voulu, mais la question peut toucher de près son anxiété. Ensuite, l'expérience de la gouache fait voir les endroits oubliés au lavage des mains ; elle est présentée comme un jeu où l'adulte oublie lui aussi, mais un enfant sensible à l'erreur pourrait la vivre comme un test.
  - **Choix prudent.** La question sur la peur reste, mais facultative : si elle le touche de trop près, on la saute. La gouache : l’adulte d’abord, et si ça devient un test pour lui, on arrête et on passe aux questions. À revoir si tu connais mieux sa réaction.
- **mm-metier-02** — Le référentiel de formation infirmière est en cours de réforme à la rentrée 2026 : durée, stages et spécialisations sont à revérifier. Et faire le geste les yeux fermés peut gêner un enfant anxieux. Faut-il le proposer les yeux ouverts, puisque les oublis se voient aussi ?
  - **Choix prudent.** Les yeux fermés sont facultatifs ; pour la formation, même décision que plus haut.
- **mm-metier-03** — Les noms des diplômes sont à vérifier, car ils changent souvent : CAP maintenance des véhicules en deux ans, bac pro du même nom en trois ans, BTS en deux ans. Même chose pour la formation en plus qu'il faut pour travailler sur la haute tension des voitures électriques ou hybrides. Le seuil légal de 1,6 mm pour l'usure des pneus est à confirmer aussi.
  - **Vérifié.** Exact : CAP et bac pro Maintenance des véhicules, BTS, et le seuil de 1,6 mm pour les pneus.
- **mm-metier-03** — Le capot ouvert d’une voiture de famille, même bien encadré, est la partie la plus exposée de tout le fichier (voiture dans la rue, batterie, haute tension des hybrides). Faut-il en rester aux pneus et à l’étiquette, et laisser le compartiment moteur au mécanicien du garage ? Par ailleurs, les intitulés « CAP / bac pro Maintenance des véhicules » sont à confirmer : la voie professionnelle est en transformation.
  - **Choix prudent.** Le capot devient facultatif, et seulement sur une voiture thermique ; sur une hybride ou une électrique, on s’en tient aux pneus et à l’étiquette.
- **mm-metier-04** — Pour les bibliothécaires, les voies d'accès sont restées volontairement floues : études dans les métiers du livre, concours de la fonction publique territoriale à plusieurs niveaux. Un enseignant, ou mieux une personne du métier, devrait dire si cette formulation tient. Il faudrait aussi vérifier ce que deviennent les livres retirés des rayons (le désherbage) : donnés, vendus à petit prix ou jetés.
  - **Vérifié.** Gardé : la formulation reste juste en restant générale, et le désherbage (dons, ventes, pilon) est décrit correctement.
- **mm-sortie-01** — Le « regarder » dit que « je croyais que tout venait d’ici » est la phrase qu’on veut entendre à chaque sortie. Écrit pour l’adulte, cela peut devenir une attente implicite envers l’enfant. Faut-il garder cette formule ?
  - **Tranché.** La phrase n’est plus une attente : on ne la lui souffle pas.
- **mm-sortie-02** — La fiche donne des numéros de classement : 500 pour les sciences, 590 pour les animaux, 520 pour l'astronomie, 796 pour les sports, 900 pour l'histoire et la géographie. Les romans sont notés R suivi des lettres de l'auteur. Tout cela est présenté comme la règle la plus fréquente, et la fiche dit que la médiathèque a raison si elle fait autrement. Il faut vérifier que c'est bien le cas dans la médiathèque où l'enfant ira.
  - **Vérifié.** Exact : ce sont les numéros de la classification la plus répandue, et la fiche dit que la médiathèque a raison si elle fait autrement.
- **mm-sortie-03** — Relecture technique souhaitée pour le fonctionnement des aiguillages (deux aiguilles reliées, déplacées par un moteur), le rebord intérieur des roues et les feux simplifiés (rouge, vert, jaune qui annonce un arrêt plus loin). Question pratique en plus : dans la gare réellement accessible, peut-on aller sur les quais sans billet ?
  - **Vérifié.** Exact pour un enfant de CM1 : aiguillage, boudin des roues, feux simplifiés.
- **mm-sortie-03** — Aller sur un quai sans billet est toléré dans la plupart des gares SNCF, mais pas partout (contrôle d’accès, consignes locales). Et un train qui passe sans s’arrêter produit un bruit et un souffle très forts. Faut-il garder le quai, ou partir du hall ou d’une passerelle, pour un enfant sujet aux crises ?
  - **Choix prudent.** On part du hall ou d’une passerelle ; le quai seulement si c’est calme et permis dans cette gare.
- **mm-sortie-04** — Le chantier est vu depuis le trottoir, mais faut-il, pour cet enfant, éviter un chantier très bruyant (marteau-piqueur) plutôt que de simplement s'éloigner ? La fiche dit aussi que le panneau de chantier indique la hauteur du bâtiment : ce n'est vrai que pour une construction, pas pour des travaux de voirie.
  - **Choix prudent.** On choisit un chantier et un moment sans marteau-piqueur, et on s’éloigne ou on revient un autre jour si c’est trop bruyant. Le panneau n’indique la hauteur que pour une construction, et la fiche le précise.
