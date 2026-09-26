# L'entrée

[← Sommaire](README.md)

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

---

[← Sommaire](README.md)
