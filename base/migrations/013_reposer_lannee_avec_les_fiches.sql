-- 013 — Reposer l'année, pour que chaque séance porte sa fiche.
--
-- La migration 012 a ajouté la colonne `seance.fiche` ; elle est vide sur les
-- 1 008 séances déjà écrites, parce qu'une colonne neuve l'est toujours. Il
-- faut donc les reposer.
--
-- C'est la même opération que la 011, et pour la même raison : les séances en
-- base **copient** la trame — titre, matière, consigne, durée, et maintenant
-- le code de la fiche. Dès que la trame change, la base ne le sait pas. La
-- seule façon de les raccorder sans ruse est de jeter les journées que
-- personne n'a touchées et de les réécrire.
--
-- Une journée **intacte** est une journée que personne n'a touchée : ton
-- normal, pas de clôture, pas de note, pas de ressenti, aucune séance faite ou
-- mise de côté, aucune séance écrite à la main, aucun résultat inscrit. Tout
-- le reste est laissé tel quel — ce qu'un parent a composé gagne contre la
-- trame, et le travail de l'enfant ne se réécrit jamais.
--
-- Le corps est généré, et se régénère :
--
--   npx tsx deploiement/ecrire-lannee.ts --reprendre --corps
--
-- Idempotent. Sur une base sans famille, il ne fait rien et n'échoue pas. Ne
-- pas l'appliquer s'il existe une famille d'essai : l'écriture de l'année
-- refuse deux familles, et c'est voulu.

begin;

-- Les journées que personne n'a touchées, à partir du 2026-09-16.
-- Une seule condition manquante et la journée est laissée telle quelle.
create temporary table journees_intactes on commit drop as
  select j.id
    from journee j
   where j.jour >= '2026-09-16'
     and j.ton = 'normale'
     and j.cloture is null
     and j.note = ''
     and not exists (select 1 from ressenti r where r.journee_id = j.id)
     and not exists (
           select 1 from seance s
            where s.journee_id = j.id
              and (s.origine <> 'trame' or s.etat <> 'a-venir'))
     and not exists (
           select 1 from travail t join seance s on s.id = t.seance_id
            where s.journee_id = j.id);

delete from seance s using journees_intactes i where s.journee_id = i.id;
delete from journee j using journees_intactes i where j.id = i.id;

insert into journee (famille_id, jour) select f.id, '2026-09-16' from famille f
  on conflict (famille_id, jour) do nothing;
insert into seance
  (journee_id, rang, matiere, titre, reference, consigne, minutes, lecon,
   fiche, par_adulte, origine)
select j.id, v.rang, v.matiere, v.titre, '', v.consigne, v.minutes, v.lecon,
       v.fiche, null, 'trame'
  from journee j
  cross join (values
    (1, 'maison', 'Le test du début d’année', 'Reviens à ta journée, et clique en bas sur le bouton « Le test du début d’année ». Sept parties, une à la fois. Il n’y a rien à préparer : tu réponds, et quand tu ne sais pas, tu le dis.', 90, '', ''),
    (2, 'maison', 'Lecture libre', 'Après le test, le livre que tu veux, sans compte à rendre. La journée s’arrête là.', 30, '', '')
  ) as v (rang, matiere, titre, consigne, minutes, lecon, fiche)
 where j.famille_id = (select id from famille) and j.jour = '2026-09-16'
   and not exists (select 1 from seance s where s.journee_id = j.id);

insert into journee (famille_id, jour) select f.id, '2026-09-17' from famille f
  on conflict (famille_id, jour) do nothing;
insert into seance
  (journee_id, rang, matiere, titre, reference, consigne, minutes, lecon,
   fiche, par_adulte, origine)
select j.id, v.rang, v.matiere, v.titre, '', v.consigne, v.minutes, v.lecon,
       v.fiche, null, 'trame'
  from journee j
  cross join (values
    (1, 'maths', 'Les tables de multiplication', 'Dix multiplications dictées, à l’ardoise. On efface entre chaque. On redit celles qui ont hésité.', 15, '', 'cm-tables-01'),
    (2, 'maths', 'Les nombres jusqu’à 9 999', 'Lis la leçon, puis fais les exercices. Tes calculs sur ton brouillon, le résultat sur l’écran.', 30, 'm-p1-nombres', ''),
    (3, 'francais', 'Trouver le verbe et le sujet', 'Lis la leçon, puis fais les exercices. Tes calculs sur ton brouillon, le résultat sur l’écran.', 25, 'f-p1-verbe-sujet', ''),
    (4, 'francais', 'Dictée de mots', 'Quinze mots de la liste en cours. On corrige ensemble, et on réécrit trois fois ceux qui ont hésité.', 20, '', 'ed-mots-01'),
    (5, 'francais', 'Lecture à voix haute', 'Une page préparée, lue à voix haute en respectant la ponctuation. On marque au crayon où respirer.', 30, '', 'lt-voix-01'),
    (6, 'sciences', 'Mesurer une masse', 'Lis la leçon, puis fais les exercices. Tes calculs sur ton brouillon, le résultat sur l’écran.', 30, 's-p1-masse', ''),
    (7, 'maison', 'Course et endurance', 'Courir sans s’arrêter, en augmentant un peu chaque semaine. On chronomètre, on ne compare à personne.', 30, '', 'dh-course-01')
  ) as v (rang, matiere, titre, consigne, minutes, lecon, fiche)
 where j.famille_id = (select id from famille) and j.jour = '2026-09-17'
   and not exists (select 1 from seance s where s.journee_id = j.id);

insert into journee (famille_id, jour) select f.id, '2026-09-18' from famille f
  on conflict (famille_id, jour) do nothing;
insert into seance
  (journee_id, rang, matiere, titre, reference, consigne, minutes, lecon,
   fiche, par_adulte, origine)
select j.id, v.rang, v.matiere, v.titre, '', v.consigne, v.minutes, v.lecon,
       v.fiche, null, 'trame'
  from journee j
  cross join (values
    (1, 'maths', 'Les doubles et les moitiés', 'Le double de 45, la moitié de 68, le double de 250… Dix questions, à l’oral.', 15, '', 'cm-doubles-01'),
    (2, 'maths', 'Comparer, ranger et encadrer', 'Lis la leçon, puis fais les exercices. Tes calculs sur ton brouillon, le résultat sur l’écran.', 25, 'm-p1-comparer', ''),
    (3, 'francais', 'La nature des mots', 'Lis la leçon, puis fais les exercices. Tes calculs sur ton brouillon, le résultat sur l’écran.', 25, 'f-p1-natures', ''),
    (4, 'francais', 'Dictée de phrases', 'Trois phrases. On souligne les verbes et on entoure les sujets avant de corriger.', 20, '', 'ed-phrases-01'),
    (5, 'francais', 'Lecture silencieuse', 'Vingt minutes dans le livre en cours, puis raconter ce qui vient de se passer.', 30, '', 'lt-silence-01'),
    (6, 'histoire', 'Le seigneur, le château et la seigneurie', 'Lis la leçon, puis fais les exercices. Tes calculs sur ton brouillon, le résultat sur l’écran.', 30, 'h-p1-seigneurie', ''),
    (7, 'maison', 'Jeux de ballon', 'Passes, tirs, jonglages. Compter les réussites de suite, battre son propre score.', 30, '', 'dh-ballon-01')
  ) as v (rang, matiere, titre, consigne, minutes, lecon, fiche)
 where j.famille_id = (select id from famille) and j.jour = '2026-09-18'
   and not exists (select 1 from seance s where s.journee_id = j.id);

insert into journee (famille_id, jour) select f.id, '2026-09-21' from famille f
  on conflict (famille_id, jour) do nothing;
insert into seance
  (journee_id, rang, matiere, titre, reference, consigne, minutes, lecon,
   fiche, par_adulte, origine)
select j.id, v.rang, v.matiere, v.titre, '', v.consigne, v.minutes, v.lecon,
       v.fiche, null, 'trame'
  from journee j
  cross join (values
    (1, 'maths', 'Les compléments à 100', 'Combien manque-t-il à 67 pour aller à 100 ? Dix questions. Puis les compléments à 1 000.', 15, '', 'cm-cent-01'),
    (2, 'maths', 'Reprendre la leçon de maths', 'Refaire les exercices de la dernière leçon de maths, sur le cahier cette fois. Comparer avec ce qui avait été trouvé.', 30, '', 'em-reprise-01'),
    (3, 'francais', 'Reprendre la leçon de français', 'Refaire les exercices de la dernière leçon de français, sur le cahier.', 25, '', ''),
    (4, 'francais', 'Copie soignée', 'Copier huit lignes d’un texte au choix, le plus soigneusement possible. On relit avant de rendre.', 20, '', 'ec-copie-01'),
    (5, 'francais', 'Lecture et questions', 'Un texte court, puis cinq questions : trois sur ce qui est écrit, deux sur ce qui se déduit.', 30, '', ''),
    (6, 'geographie', 'Comment se nourrit-on dans le monde ?', 'Lis la leçon, puis fais les exercices. Tes calculs sur ton brouillon, le résultat sur l’écran.', 35, 'g-p1-se-nourrir', ''),
    (7, 'maison', 'Vélo', 'Une sortie. Repérer le trajet sur un plan avant de partir, puis le raconter au retour.', 30, '', 'dh-velo-01')
  ) as v (rang, matiere, titre, consigne, minutes, lecon, fiche)
 where j.famille_id = (select id from famille) and j.jour = '2026-09-21'
   and not exists (select 1 from seance s where s.journee_id = j.id);

insert into journee (famille_id, jour) select f.id, '2026-09-22' from famille f
  on conflict (famille_id, jour) do nothing;
insert into seance
  (journee_id, rang, matiere, titre, reference, consigne, minutes, lecon,
   fiche, par_adulte, origine)
select j.id, v.rang, v.matiere, v.titre, '', v.consigne, v.minutes, v.lecon,
       v.fiche, null, 'trame'
  from journee j
  cross join (values
    (1, 'maths', 'Ajouter 9, 19, 29', 'On ajoute la dizaine ronde et on retire 1. Dix questions, en disant la procédure à voix haute.', 15, '', 'cm-neuf-01'),
    (2, 'maths', 'Les fractions : partager en parts égales', 'Lis la leçon, puis fais les exercices. Tes calculs sur ton brouillon, le résultat sur l’écran.', 30, 'm-p1-fractions', ''),
    (3, 'francais', 'Les types et les formes de phrases', 'Lis la leçon, puis fais les exercices. Tes calculs sur ton brouillon, le résultat sur l’écran.', 25, 'f-p1-types-phrases', ''),
    (4, 'francais', 'Dictée préparée', 'Le texte a été lu la veille. On le dicte, puis on compare avec l’original.', 20, '', 'ed-preparee-01'),
    (5, 'francais', 'Lecture d’un documentaire', 'Une double page documentaire. Relever la nature et la source du document avant de lire.', 30, '', ''),
    (6, 'francais', 'Décrire un lieu', 'Dix lignes sur un endroit que tu connais. Au moins trois adjectifs qui servent vraiment.', 25, '', 'rd-lieu-01'),
    (7, 'maison', 'Parcours et équilibre', 'Un parcours à installer soi-même : sauter, grimper, tenir en équilibre, ramper.', 30, '', 'dh-parcours-01')
  ) as v (rang, matiere, titre, consigne, minutes, lecon, fiche)
 where j.famille_id = (select id from famille) and j.jour = '2026-09-22'
   and not exists (select 1 from seance s where s.journee_id = j.id);

insert into journee (famille_id, jour) select f.id, '2026-09-23' from famille f
  on conflict (famille_id, jour) do nothing;
insert into seance
  (journee_id, rang, matiere, titre, reference, consigne, minutes, lecon,
   fiche, par_adulte, origine)
select j.id, v.rang, v.matiere, v.titre, '', v.consigne, v.minutes, v.lecon,
       v.fiche, null, 'trame'
  from journee j
  cross join (values
    (1, 'maths', 'Multiplier par 10, 100, 1 000', 'Dix questions rapides. Puis diviser par 10 : 320 ÷ 10, 4 500 ÷ 10.', 15, '', 'cm-dix-01'),
    (2, 'histoire', 'La vie des paysannes et des paysans', 'Lis la leçon, puis fais les exercices. Tes calculs sur ton brouillon, le résultat sur l’écran.', 30, 'h-p1-paysans', ''),
    (3, 'maison', 'La boîte à pourquoi', 'Prendre une question que tu as posée cette semaine, chercher la réponse ensemble, et s’arrêter quand on ne sait plus.', 45, '', '')
  ) as v (rang, matiere, titre, consigne, minutes, lecon, fiche)
 where j.famille_id = (select id from famille) and j.jour = '2026-09-23'
   and not exists (select 1 from seance s where s.journee_id = j.id);

insert into journee (famille_id, jour) select f.id, '2026-09-24' from famille f
  on conflict (famille_id, jour) do nothing;
insert into seance
  (journee_id, rang, matiere, titre, reference, consigne, minutes, lecon,
   fiche, par_adulte, origine)
select j.id, v.rang, v.matiere, v.titre, '', v.consigne, v.minutes, v.lecon,
       v.fiche, null, 'trame'
  from journee j
  cross join (values
    (1, 'maths', 'Multiplier par 4 et par 8', 'Par 4, c’est doubler deux fois. Par 8, trois fois. Dix questions en disant les étapes.', 15, '', 'cm-quatre-01'),
    (2, 'maths', 'Le nombre du jour', 'Un nombre au tableau. Le décomposer de cinq façons, l’encadrer, dire son nombre de centaines, le doubler.', 30, '', 'em-nombre-01'),
    (3, 'francais', 'Le dictionnaire', 'Chercher cinq mots rencontrés cette semaine. Relever la nature du mot et ses différents sens.', 25, '', ''),
    (4, 'francais', 'Transformer des phrases', 'Mettre cinq phrases au pluriel, en respectant toute la chaîne d’accords. À l’écrit.', 20, '', 'ec-transf-01'),
    (5, 'francais', 'Lecture d’une bande dessinée', 'Une planche. Puis expliquer ce que les images racontent et que le texte ne dit pas.', 30, '', 'lf-bd-01'),
    (6, 'francais', 'Expliquer une règle', 'Réécrire avec tes mots une leçon de la semaine, pour quelqu’un qui ne l’a pas eue.', 25, '', 'rd-regle-01'),
    (7, 'maison', 'Jeux de raquette', 'Échanges contre un mur ou à deux. Compter les échanges tenus sans faute.', 30, '', 'dh-raquette-01')
  ) as v (rang, matiere, titre, consigne, minutes, lecon, fiche)
 where j.famille_id = (select id from famille) and j.jour = '2026-09-24'
   and not exists (select 1 from seance s where s.journee_id = j.id);

insert into journee (famille_id, jour) select f.id, '2026-09-25' from famille f
  on conflict (famille_id, jour) do nothing;
insert into seance
  (journee_id, rang, matiere, titre, reference, consigne, minutes, lecon,
   fiche, par_adulte, origine)
select j.id, v.rang, v.matiere, v.titre, '', v.consigne, v.minutes, v.lecon,
       v.fiche, null, 'trame'
  from journee j
  cross join (values
    (1, 'maths', 'Multiplier par 5 et par 50', 'Par 5, c’est la moitié de par 10. Par 50, la moitié de par 100. Dix questions.', 15, '', 'cm-cinq-01'),
    (2, 'maths', 'La fraction d’une quantité', 'Lis la leçon, puis fais les exercices. Tes calculs sur ton brouillon, le résultat sur l’écran.', 25, 'm-p1-fraction-quantite', ''),
    (3, 'francais', 'Le groupe du nom et ses accords', 'Lis la leçon, puis fais les exercices. Tes calculs sur ton brouillon, le résultat sur l’écran.', 30, 'f-p1-groupe-nominal', ''),
    (4, 'francais', 'Dictée à trous', 'Le texte est écrit, il manque les terminaisons des verbes. On les complète en justifiant.', 20, '', 'ed-trous-01'),
    (5, 'francais', 'Lecture de théâtre', 'Une scène, lue à deux voix. Les didascalies ne se disent pas : elles se jouent.', 30, '', 'lf-theatre-01'),
    (6, 'geographie', 'D’où vient ce qu’on mange ?', 'Lis la leçon, puis fais les exercices. Tes calculs sur ton brouillon, le résultat sur l’écran.', 25, 'g-p1-produits', ''),
    (7, 'maison', 'Danse et rythme', 'Suivre une pulsation, inventer une suite de mouvements de huit temps, la refaire à l’identique.', 30, '', 'dh-danse-01')
  ) as v (rang, matiere, titre, consigne, minutes, lecon, fiche)
 where j.famille_id = (select id from famille) and j.jour = '2026-09-25'
   and not exists (select 1 from seance s where s.journee_id = j.id);

insert into journee (famille_id, jour) select f.id, '2026-09-28' from famille f
  on conflict (famille_id, jour) do nothing;
insert into seance
  (journee_id, rang, matiere, titre, reference, consigne, minutes, lecon,
   fiche, par_adulte, origine)
select j.id, v.rang, v.matiere, v.titre, '', v.consigne, v.minutes, v.lecon,
       v.fiche, null, 'trame'
  from journee j
  cross join (values
    (1, 'maths', 'Les fractions d’une quantité', 'La moitié de 36, le tiers de 24, les trois quarts de 20. Dix questions à l’oral.', 15, '', 'cg-fractions-01'),
    (2, 'maths', 'Additionner et soustraire en colonnes', 'Lis la leçon, puis fais les exercices. Tes calculs sur ton brouillon, le résultat sur l’écran.', 25, 'm-p1-addition-soustraction', ''),
    (3, 'francais', 'Le présent de l’indicatif', 'Lis la leçon, puis fais les exercices. Tes calculs sur ton brouillon, le résultat sur l’écran.', 30, 'f-p1-present', ''),
    (4, 'francais', 'Auto-dictée', 'Apprendre quatre lignes par cœur la veille, les écrire de mémoire aujourd’hui.', 20, '', 'ed-auto-01'),
    (5, 'francais', 'Lecture libre', 'Le livre que tu veux, sans compte à rendre. On te demande seulement si tu as aimé, et pourquoi.', 30, '', 'lf-libre-01'),
    (6, 'emc', 'Pourquoi il y a des règles', 'Lis la leçon, puis fais les exercices. Tes calculs sur ton brouillon, le résultat sur l’écran.', 25, 'e-p1-regles', ''),
    (7, 'maison', 'Jardinage ou bricolage', 'Planter, arroser, mesurer, réparer. Le travail des mains compte autant que le reste.', 30, '', 'dh-mains-01')
  ) as v (rang, matiere, titre, consigne, minutes, lecon, fiche)
 where j.famille_id = (select id from famille) and j.jour = '2026-09-28'
   and not exists (select 1 from seance s where s.journee_id = j.id);

insert into journee (famille_id, jour) select f.id, '2026-09-29' from famille f
  on conflict (famille_id, jour) do nothing;
insert into seance
  (journee_id, rang, matiere, titre, reference, consigne, minutes, lecon,
   fiche, par_adulte, origine)
select j.id, v.rang, v.matiere, v.titre, '', v.consigne, v.minutes, v.lecon,
       v.fiche, null, 'trame'
  from journee j
  cross join (values
    (1, 'maths', 'Les problèmes en une phrase', 'Cinq problèmes dictés, très courts. La réponse sur l’ardoise, sans écrire le calcul.', 15, '', 'cg-problemes-01'),
    (2, 'maths', 'Reprendre la leçon de maths', 'Refaire les exercices de la dernière leçon de maths, sur le cahier cette fois. Comparer avec ce qui avait été trouvé.', 30, '', 'em-reprise-02'),
    (3, 'francais', 'Reprendre la leçon de français', 'Refaire les exercices de la dernière leçon de français, sur le cahier.', 25, '', ''),
    (4, 'francais', 'Dictée de mots', 'Quinze mots de la liste en cours. On corrige ensemble, et on réécrit trois fois ceux qui ont hésité.', 20, '', 'ed-mots-02'),
    (5, 'francais', 'Lecture à voix haute', 'Une page préparée, lue à voix haute en respectant la ponctuation. On marque au crayon où respirer.', 30, '', 'lt-voix-02'),
    (6, 'sciences', 'Les mélanges, et comment les séparer', 'Lis la leçon, puis fais les exercices. Tes calculs sur ton brouillon, le résultat sur l’écran.', 30, 's-p1-melanges', ''),
    (7, 'maison', 'Course et endurance', 'Courir sans s’arrêter, en augmentant un peu chaque semaine. On chronomètre, on ne compare à personne.', 30, '', 'dh-course-02')
  ) as v (rang, matiere, titre, consigne, minutes, lecon, fiche)
 where j.famille_id = (select id from famille) and j.jour = '2026-09-29'
   and not exists (select 1 from seance s where s.journee_id = j.id);

insert into journee (famille_id, jour) select f.id, '2026-09-30' from famille f
  on conflict (famille_id, jour) do nothing;
insert into seance
  (journee_id, rang, matiere, titre, reference, consigne, minutes, lecon,
   fiche, par_adulte, origine)
select j.id, v.rang, v.matiere, v.titre, '', v.consigne, v.minutes, v.lecon,
       v.fiche, null, 'trame'
  from journee j
  cross join (values
    (1, 'maths', 'Encadrer et arrondir', 'Entre quels milliers se trouve 6 480 ? Quel est l’arrondi de 12,94 ? Dix questions.', 15, '', 'cg-encadrer-01'),
    (2, 'geographie', 'Comment se nourrit-on dans le monde ? — on reprend', 'On relit le cours, puis on refait les exercices. Tes calculs sur ton brouillon, le résultat sur l’écran.', 35, 'g-p1-se-nourrir', ''),
    (3, 'maison', 'Construire quelque chose', 'Un objet qui marche : un pont en papier qui porte un livre, un moulin, un circuit. Croquis d’abord.', 45, '', '')
  ) as v (rang, matiere, titre, consigne, minutes, lecon, fiche)
 where j.famille_id = (select id from famille) and j.jour = '2026-09-30'
   and not exists (select 1 from seance s where s.journee_id = j.id);

insert into journee (famille_id, jour) select f.id, '2026-10-01' from famille f
  on conflict (famille_id, jour) do nothing;
insert into seance
  (journee_id, rang, matiere, titre, reference, consigne, minutes, lecon,
   fiche, par_adulte, origine)
select j.id, v.rang, v.matiere, v.titre, '', v.consigne, v.minutes, v.lecon,
       v.fiche, null, 'trame'
  from journee j
  cross join (values
    (1, 'maths', 'Les unités de mesure', 'Combien de grammes dans 2 kg 500 ? De centimètres dans 3 m 50 ? Dix questions.', 15, '', 'cg-unites-01'),
    (2, 'maths', 'Les problèmes : comprendre avant de calculer', 'Lis la leçon, puis fais les exercices. Tes calculs sur ton brouillon, le résultat sur l’écran.', 30, 'm-p1-problemes', ''),
    (3, 'francais', 'Les familles de mots', 'Lis la leçon, puis fais les exercices. Tes calculs sur ton brouillon, le résultat sur l’écran.', 25, 'f-p1-familles', ''),
    (4, 'francais', 'Copie soignée', 'Copier huit lignes d’un texte au choix, le plus soigneusement possible. On relit avant de rendre.', 20, '', 'ec-copie-02'),
    (5, 'francais', 'Lecture et questions', 'Un texte court, puis cinq questions : trois sur ce qui est écrit, deux sur ce qui se déduit.', 30, '', ''),
    (6, 'histoire', 'Le seigneur, le château et la seigneurie — on reprend', 'On relit le cours, puis on refait les exercices. Tes calculs sur ton brouillon, le résultat sur l’écran.', 30, 'h-p1-seigneurie', ''),
    (7, 'maison', 'Vélo', 'Une sortie. Repérer le trajet sur un plan avant de partir, puis le raconter au retour.', 30, '', 'dh-velo-02')
  ) as v (rang, matiere, titre, consigne, minutes, lecon, fiche)
 where j.famille_id = (select id from famille) and j.jour = '2026-10-01'
   and not exists (select 1 from seance s where s.journee_id = j.id);

insert into journee (famille_id, jour) select f.id, '2026-10-02' from famille f
  on conflict (famille_id, jour) do nothing;
insert into seance
  (journee_id, rang, matiere, titre, reference, consigne, minutes, lecon,
   fiche, par_adulte, origine)
select j.id, v.rang, v.matiere, v.titre, '', v.consigne, v.minutes, v.lecon,
       v.fiche, null, 'trame'
  from journee j
  cross join (values
    (1, 'maths', 'Les durées', 'De 8 h 45 à 12 h 30, combien de temps ? Cinq calculs de durée, à l’oral.', 15, '', 'cg-durees-01'),
    (2, 'maths', 'Le nombre du jour', 'Un nombre au tableau. Le décomposer de cinq façons, l’encadrer, dire son nombre de centaines, le doubler.', 30, '', 'em-nombre-02'),
    (3, 'francais', 'Le dictionnaire', 'Chercher cinq mots rencontrés cette semaine. Relever la nature du mot et ses différents sens.', 25, '', ''),
    (4, 'francais', 'Dictée préparée', 'Le texte a été lu la veille. On le dicte, puis on compare avec l’original.', 20, '', 'ed-preparee-02'),
    (5, 'francais', 'Lecture d’un documentaire', 'Une double page documentaire. Relever la nature et la source du document avant de lire.', 30, '', ''),
    (6, 'francais', 'Décrire un lieu', 'Dix lignes sur un endroit que tu connais. Au moins trois adjectifs qui servent vraiment.', 25, '', 'rd-lieu-02'),
    (7, 'maison', 'Parcours et équilibre', 'Un parcours à installer soi-même : sauter, grimper, tenir en équilibre, ramper.', 30, '', 'dh-parcours-02')
  ) as v (rang, matiere, titre, consigne, minutes, lecon, fiche)
 where j.famille_id = (select id from famille) and j.jour = '2026-10-02'
   and not exists (select 1 from seance s where s.journee_id = j.id);

insert into journee (famille_id, jour) select f.id, '2026-10-05' from famille f
  on conflict (famille_id, jour) do nothing;
insert into seance
  (journee_id, rang, matiere, titre, reference, consigne, minutes, lecon,
   fiche, par_adulte, origine)
select j.id, v.rang, v.matiere, v.titre, '', v.consigne, v.minutes, v.lecon,
       v.fiche, null, 'trame'
  from journee j
  cross join (values
    (1, 'maths', 'Les tables de multiplication', 'Dix multiplications dictées, à l’ardoise. On efface entre chaque. On redit celles qui ont hésité.', 15, '', 'cm-tables-02'),
    (2, 'maths', 'Les nombres jusqu’à 9 999 — on reprend', 'On relit le cours, puis on refait les exercices. Tes calculs sur ton brouillon, le résultat sur l’écran.', 30, 'm-p1-nombres', ''),
    (3, 'francais', 'Trouver le verbe et le sujet — on reprend', 'On relit le cours, puis on refait les exercices. Tes calculs sur ton brouillon, le résultat sur l’écran.', 25, 'f-p1-verbe-sujet', ''),
    (4, 'francais', 'Les mots invariables', 'Apprendre dix mots invariables, puis les écrire sous la dictée.', 20, '', 'ec-invar-02'),
    (5, 'francais', 'Poésie', 'Lire un poème à voix haute, plusieurs fois. Repérer les rimes et les images. En apprendre quatre vers.', 30, '', 'lf-poesie-02'),
    (6, 'francais', 'Donner son avis', 'Ce que je pense, pourquoi, un exemple. Huit lignes. Les trois morceaux doivent y être.', 25, '', 'rd-avis-02'),
    (7, 'maison', 'Marche et observation', 'Une marche d’une demi-heure. Rapporter trois choses observées, à noter ou à dessiner.', 30, '', 'dh-marche-02')
  ) as v (rang, matiere, titre, consigne, minutes, lecon, fiche)
 where j.famille_id = (select id from famille) and j.jour = '2026-10-05'
   and not exists (select 1 from seance s where s.journee_id = j.id);

insert into journee (famille_id, jour) select f.id, '2026-10-06' from famille f
  on conflict (famille_id, jour) do nothing;
insert into seance
  (journee_id, rang, matiere, titre, reference, consigne, minutes, lecon,
   fiche, par_adulte, origine)
select j.id, v.rang, v.matiere, v.titre, '', v.consigne, v.minutes, v.lecon,
       v.fiche, null, 'trame'
  from journee j
  cross join (values
    (1, 'maths', 'Les doubles et les moitiés', 'Le double de 45, la moitié de 68, le double de 250… Dix questions, à l’oral.', 15, '', 'cm-doubles-02'),
    (2, 'maths', 'Comparer, ranger et encadrer — on reprend', 'On relit le cours, puis on refait les exercices. Tes calculs sur ton brouillon, le résultat sur l’écran.', 25, 'm-p1-comparer', ''),
    (3, 'francais', 'La nature des mots — on reprend', 'On relit le cours, puis on refait les exercices. Tes calculs sur ton brouillon, le résultat sur l’écran.', 25, 'f-p1-natures', ''),
    (4, 'francais', 'Transformer des phrases', 'Mettre cinq phrases au pluriel, en respectant toute la chaîne d’accords. À l’écrit.', 20, '', 'ec-transf-02'),
    (5, 'francais', 'Lecture d’une bande dessinée', 'Une planche. Puis expliquer ce que les images racontent et que le texte ne dit pas.', 30, '', 'lf-bd-02'),
    (6, 'histoire', 'La vie des paysannes et des paysans — on reprend', 'On relit le cours, puis on refait les exercices. Tes calculs sur ton brouillon, le résultat sur l’écran.', 30, 'h-p1-paysans', ''),
    (7, 'maison', 'Jeux de raquette', 'Échanges contre un mur ou à deux. Compter les échanges tenus sans faute.', 30, '', 'dh-raquette-02')
  ) as v (rang, matiere, titre, consigne, minutes, lecon, fiche)
 where j.famille_id = (select id from famille) and j.jour = '2026-10-06'
   and not exists (select 1 from seance s where s.journee_id = j.id);

insert into journee (famille_id, jour) select f.id, '2026-10-07' from famille f
  on conflict (famille_id, jour) do nothing;
insert into seance
  (journee_id, rang, matiere, titre, reference, consigne, minutes, lecon,
   fiche, par_adulte, origine)
select j.id, v.rang, v.matiere, v.titre, '', v.consigne, v.minutes, v.lecon,
       v.fiche, null, 'trame'
  from journee j
  cross join (values
    (1, 'maths', 'Les compléments à 100', 'Combien manque-t-il à 67 pour aller à 100 ? Dix questions. Puis les compléments à 1 000.', 15, '', 'cm-cent-02'),
    (2, 'sciences', 'Mesurer une masse — on reprend', 'On relit le cours, puis on refait les exercices. Tes calculs sur ton brouillon, le résultat sur l’écran.', 30, 's-p1-masse', ''),
    (3, 'maison', 'Une sortie', 'Marché, médiathèque, musée, chantier, gare, ferme. On prépare une question avant de partir, et on y répond au retour.', 45, '', '')
  ) as v (rang, matiere, titre, consigne, minutes, lecon, fiche)
 where j.famille_id = (select id from famille) and j.jour = '2026-10-07'
   and not exists (select 1 from seance s where s.journee_id = j.id);

insert into journee (famille_id, jour) select f.id, '2026-10-08' from famille f
  on conflict (famille_id, jour) do nothing;
insert into seance
  (journee_id, rang, matiere, titre, reference, consigne, minutes, lecon,
   fiche, par_adulte, origine)
select j.id, v.rang, v.matiere, v.titre, '', v.consigne, v.minutes, v.lecon,
       v.fiche, null, 'trame'
  from journee j
  cross join (values
    (1, 'maths', 'Ajouter 9, 19, 29', 'On ajoute la dizaine ronde et on retire 1. Dix questions, en disant la procédure à voix haute.', 15, '', 'cm-neuf-02'),
    (2, 'maths', 'Les fractions : partager en parts égales — on reprend', 'On relit le cours, puis on refait les exercices. Tes calculs sur ton brouillon, le résultat sur l’écran.', 30, 'm-p1-fractions', ''),
    (3, 'francais', 'Les types et les formes de phrases — on reprend', 'On relit le cours, puis on refait les exercices. Tes calculs sur ton brouillon, le résultat sur l’écran.', 25, 'f-p1-types-phrases', ''),
    (4, 'francais', 'Auto-dictée', 'Apprendre quatre lignes par cœur la veille, les écrire de mémoire aujourd’hui.', 20, '', 'ed-auto-02'),
    (5, 'francais', 'Lecture libre', 'Le livre que tu veux, sans compte à rendre. On te demande seulement si tu as aimé, et pourquoi.', 30, '', 'lf-libre-02'),
    (6, 'sciences', 'Les mélanges, et comment les séparer — on reprend', 'On relit le cours, puis on refait les exercices. Tes calculs sur ton brouillon, le résultat sur l’écran.', 30, 's-p1-melanges', ''),
    (7, 'maison', 'Jardinage ou bricolage', 'Planter, arroser, mesurer, réparer. Le travail des mains compte autant que le reste.', 30, '', 'dh-mains-02')
  ) as v (rang, matiere, titre, consigne, minutes, lecon, fiche)
 where j.famille_id = (select id from famille) and j.jour = '2026-10-08'
   and not exists (select 1 from seance s where s.journee_id = j.id);

insert into journee (famille_id, jour) select f.id, '2026-10-09' from famille f
  on conflict (famille_id, jour) do nothing;
insert into seance
  (journee_id, rang, matiere, titre, reference, consigne, minutes, lecon,
   fiche, par_adulte, origine)
select j.id, v.rang, v.matiere, v.titre, '', v.consigne, v.minutes, v.lecon,
       v.fiche, null, 'trame'
  from journee j
  cross join (values
    (1, 'maths', 'Multiplier par 10, 100, 1 000', 'Dix questions rapides. Puis diviser par 10 : 320 ÷ 10, 4 500 ÷ 10.', 15, '', 'cm-dix-02'),
    (2, 'maths', 'Mesurer pour de vrai', 'Mesurer des objets de la maison, noter en deux unités différentes, comparer aux estimations faites avant.', 30, '', 'em-mesure-03'),
    (3, 'francais', 'Vocabulaire', 'Dix mots : trouver un synonyme, un contraire, et un mot de la même famille pour chacun.', 25, '', ''),
    (4, 'francais', 'Dictée de mots', 'Quinze mots de la liste en cours. On corrige ensemble, et on réécrit trois fois ceux qui ont hésité.', 20, '', 'ed-mots-03'),
    (5, 'francais', 'Lecture à voix haute', 'Une page préparée, lue à voix haute en respectant la ponctuation. On marque au crayon où respirer.', 30, '', 'lt-voix-03'),
    (6, 'anglais', 'Saluer et se présenter', 'Lis la leçon, puis fais les exercices. Tes calculs sur ton brouillon, le résultat sur l’écran.', 25, 'a-p1-saluer', ''),
    (7, 'maison', 'Course et endurance', 'Courir sans s’arrêter, en augmentant un peu chaque semaine. On chronomètre, on ne compare à personne.', 30, '', 'dh-course-03')
  ) as v (rang, matiere, titre, consigne, minutes, lecon, fiche)
 where j.famille_id = (select id from famille) and j.jour = '2026-10-09'
   and not exists (select 1 from seance s where s.journee_id = j.id);

insert into journee (famille_id, jour) select f.id, '2026-10-12' from famille f
  on conflict (famille_id, jour) do nothing;
insert into seance
  (journee_id, rang, matiere, titre, reference, consigne, minutes, lecon,
   fiche, par_adulte, origine)
select j.id, v.rang, v.matiere, v.titre, '', v.consigne, v.minutes, v.lecon,
       v.fiche, null, 'trame'
  from journee j
  cross join (values
    (1, 'maths', 'Multiplier par 4 et par 8', 'Par 4, c’est doubler deux fois. Par 8, trois fois. Dix questions en disant les étapes.', 15, '', 'cm-quatre-02'),
    (2, 'maths', 'La fraction d’une quantité — on reprend', 'On relit le cours, puis on refait les exercices. Tes calculs sur ton brouillon, le résultat sur l’écran.', 25, 'm-p1-fraction-quantite', ''),
    (3, 'francais', 'Le groupe du nom et ses accords — on reprend', 'On relit le cours, puis on refait les exercices. Tes calculs sur ton brouillon, le résultat sur l’écran.', 30, 'f-p1-groupe-nominal', ''),
    (4, 'francais', 'Dictée de phrases', 'Trois phrases. On souligne les verbes et on entoure les sujets avant de corriger.', 20, '', 'ed-phrases-03'),
    (5, 'francais', 'Lecture silencieuse', 'Vingt minutes dans le livre en cours, puis raconter ce qui vient de se passer.', 30, '', 'lt-silence-03'),
    (6, 'francais', 'Raconter sa journée d’hier', 'Dix lignes au passé. Vérifier que les temps ne changent pas en cours de route.', 25, '', 'rd-hier-03'),
    (7, 'maison', 'Jeux de ballon', 'Passes, tirs, jonglages. Compter les réussites de suite, battre son propre score.', 30, '', 'dh-ballon-03')
  ) as v (rang, matiere, titre, consigne, minutes, lecon, fiche)
 where j.famille_id = (select id from famille) and j.jour = '2026-10-12'
   and not exists (select 1 from seance s where s.journee_id = j.id);

insert into journee (famille_id, jour) select f.id, '2026-10-13' from famille f
  on conflict (famille_id, jour) do nothing;
insert into seance
  (journee_id, rang, matiere, titre, reference, consigne, minutes, lecon,
   fiche, par_adulte, origine)
select j.id, v.rang, v.matiere, v.titre, '', v.consigne, v.minutes, v.lecon,
       v.fiche, null, 'trame'
  from journee j
  cross join (values
    (1, 'maths', 'Multiplier par 5 et par 50', 'Par 5, c’est la moitié de par 10. Par 50, la moitié de par 100. Dix questions.', 15, '', 'cm-cinq-02'),
    (2, 'maths', 'Additionner et soustraire en colonnes — on reprend', 'On relit le cours, puis on refait les exercices. Tes calculs sur ton brouillon, le résultat sur l’écran.', 25, 'm-p1-addition-soustraction', ''),
    (3, 'francais', 'Le présent de l’indicatif — on reprend', 'On relit le cours, puis on refait les exercices. Tes calculs sur ton brouillon, le résultat sur l’écran.', 30, 'f-p1-present', ''),
    (4, 'francais', 'Copie soignée', 'Copier huit lignes d’un texte au choix, le plus soigneusement possible. On relit avant de rendre.', 20, '', 'ec-copie-03'),
    (5, 'francais', 'Lecture et questions', 'Un texte court, puis cinq questions : trois sur ce qui est écrit, deux sur ce qui se déduit.', 30, '', ''),
    (6, 'geographie', 'D’où vient ce qu’on mange ? — on reprend', 'On relit le cours, puis on refait les exercices. Tes calculs sur ton brouillon, le résultat sur l’écran.', 25, 'g-p1-produits', ''),
    (7, 'maison', 'Vélo', 'Une sortie. Repérer le trajet sur un plan avant de partir, puis le raconter au retour.', 30, '', 'dh-velo-03')
  ) as v (rang, matiere, titre, consigne, minutes, lecon, fiche)
 where j.famille_id = (select id from famille) and j.jour = '2026-10-13'
   and not exists (select 1 from seance s where s.journee_id = j.id);

insert into journee (famille_id, jour) select f.id, '2026-10-14' from famille f
  on conflict (famille_id, jour) do nothing;
insert into seance
  (journee_id, rang, matiere, titre, reference, consigne, minutes, lecon,
   fiche, par_adulte, origine)
select j.id, v.rang, v.matiere, v.titre, '', v.consigne, v.minutes, v.lecon,
       v.fiche, null, 'trame'
  from journee j
  cross join (values
    (1, 'maths', 'Les fractions d’une quantité', 'La moitié de 36, le tiers de 24, les trois quarts de 20. Dix questions à l’oral.', 15, '', 'cg-fractions-02'),
    (2, 'anglais', 'Les nombres et l’âge', 'Lis la leçon, puis fais les exercices. Tes calculs sur ton brouillon, le résultat sur l’écran.', 25, 'a-p1-nombres', ''),
    (3, 'maison', 'Cuisine et mesures', 'Une recette, en pesant et en convertissant. Doubler les quantités pour voir ce que ça change.', 45, '', '')
  ) as v (rang, matiere, titre, consigne, minutes, lecon, fiche)
 where j.famille_id = (select id from famille) and j.jour = '2026-10-14'
   and not exists (select 1 from seance s where s.journee_id = j.id);

insert into journee (famille_id, jour) select f.id, '2026-10-15' from famille f
  on conflict (famille_id, jour) do nothing;
insert into seance
  (journee_id, rang, matiere, titre, reference, consigne, minutes, lecon,
   fiche, par_adulte, origine)
select j.id, v.rang, v.matiere, v.titre, '', v.consigne, v.minutes, v.lecon,
       v.fiche, null, 'trame'
  from journee j
  cross join (values
    (1, 'maths', 'Les problèmes en une phrase', 'Cinq problèmes dictés, très courts. La réponse sur l’ardoise, sans écrire le calcul.', 15, '', 'cg-problemes-02'),
    (2, 'maths', 'Les problèmes : comprendre avant de calculer — on reprend', 'On relit le cours, puis on refait les exercices. Tes calculs sur ton brouillon, le résultat sur l’écran.', 30, 'm-p1-problemes', ''),
    (3, 'francais', 'Les familles de mots — on reprend', 'On relit le cours, puis on refait les exercices. Tes calculs sur ton brouillon, le résultat sur l’écran.', 25, 'f-p1-familles', ''),
    (4, 'francais', 'Les mots invariables', 'Apprendre dix mots invariables, puis les écrire sous la dictée.', 20, '', 'ec-invar-03'),
    (5, 'francais', 'Poésie', 'Lire un poème à voix haute, plusieurs fois. Repérer les rimes et les images. En apprendre quatre vers.', 30, '', 'lf-poesie-03'),
    (6, 'francais', 'Donner son avis', 'Ce que je pense, pourquoi, un exemple. Huit lignes. Les trois morceaux doivent y être.', 25, '', 'rd-avis-03'),
    (7, 'maison', 'Marche et observation', 'Une marche d’une demi-heure. Rapporter trois choses observées, à noter ou à dessiner.', 30, '', 'dh-marche-03')
  ) as v (rang, matiere, titre, consigne, minutes, lecon, fiche)
 where j.famille_id = (select id from famille) and j.jour = '2026-10-15'
   and not exists (select 1 from seance s where s.journee_id = j.id);

insert into journee (famille_id, jour) select f.id, '2026-10-16' from famille f
  on conflict (famille_id, jour) do nothing;
insert into seance
  (journee_id, rang, matiere, titre, reference, consigne, minutes, lecon,
   fiche, par_adulte, origine)
select j.id, v.rang, v.matiere, v.titre, '', v.consigne, v.minutes, v.lecon,
       v.fiche, null, 'trame'
  from journee j
  cross join (values
    (1, 'maths', 'Encadrer et arrondir', 'Entre quels milliers se trouve 6 480 ? Quel est l’arrondi de 12,94 ? Dix questions.', 15, '', 'cg-encadrer-02'),
    (2, 'maths', 'Géométrie : tracer', 'Un programme de construction à suivre à la règle, à l’équerre et au compas. La précision compte.', 30, '', 'em-trace-04'),
    (3, 'francais', 'Les homophones', 'Un texte à trous : a/à, est/et, son/sont, ont/on. Justifier chaque choix par le test de remplacement.', 25, '', ''),
    (4, 'francais', 'Transformer des phrases', 'Mettre cinq phrases au pluriel, en respectant toute la chaîne d’accords. À l’écrit.', 20, '', 'ec-transf-03'),
    (5, 'francais', 'Lecture d’une bande dessinée', 'Une planche. Puis expliquer ce que les images racontent et que le texte ne dit pas.', 30, '', 'lf-bd-03'),
    (6, 'anglais', 'Saluer et se présenter — on reprend', 'On relit le cours, puis on refait les exercices. Tes calculs sur ton brouillon, le résultat sur l’écran.', 25, 'a-p1-saluer', ''),
    (7, 'maison', 'Jeux de raquette', 'Échanges contre un mur ou à deux. Compter les échanges tenus sans faute.', 30, '', 'dh-raquette-03')
  ) as v (rang, matiere, titre, consigne, minutes, lecon, fiche)
 where j.famille_id = (select id from famille) and j.jour = '2026-10-16'
   and not exists (select 1 from seance s where s.journee_id = j.id);

insert into journee (famille_id, jour) select f.id, '2026-11-02' from famille f
  on conflict (famille_id, jour) do nothing;
insert into seance
  (journee_id, rang, matiere, titre, reference, consigne, minutes, lecon,
   fiche, par_adulte, origine)
select j.id, v.rang, v.matiere, v.titre, '', v.consigne, v.minutes, v.lecon,
       v.fiche, null, 'trame'
  from journee j
  cross join (values
    (1, 'maths', 'Les unités de mesure', 'Combien de grammes dans 2 kg 500 ? De centimètres dans 3 m 50 ? Dix questions.', 15, '', 'cg-unites-02'),
    (2, 'maths', 'Les fractions plus grandes que 1', 'Lis la leçon, puis fais les exercices. Tes calculs sur ton brouillon, le résultat sur l’écran.', 30, 'm-p2-fractions-sup', ''),
    (3, 'francais', 'L’imparfait', 'Lis la leçon, puis fais les exercices. Tes calculs sur ton brouillon, le résultat sur l’écran.', 25, 'f-p2-imparfait', ''),
    (4, 'francais', 'Dictée à trous', 'Le texte est écrit, il manque les terminaisons des verbes. On les complète en justifiant.', 20, '', 'ed-trous-03'),
    (5, 'francais', 'Lecture de théâtre', 'Une scène, lue à deux voix. Les didascalies ne se disent pas : elles se jouent.', 30, '', 'lf-theatre-03'),
    (6, 'histoire', 'L’Église, l’art roman et l’art gothique', 'Lis la leçon, puis fais les exercices. Tes calculs sur ton brouillon, le résultat sur l’écran.', 30, 'h-p2-eglise', ''),
    (7, 'maison', 'Danse et rythme', 'Suivre une pulsation, inventer une suite de mouvements de huit temps, la refaire à l’identique.', 30, '', 'dh-danse-03')
  ) as v (rang, matiere, titre, consigne, minutes, lecon, fiche)
 where j.famille_id = (select id from famille) and j.jour = '2026-11-02'
   and not exists (select 1 from seance s where s.journee_id = j.id);

insert into journee (famille_id, jour) select f.id, '2026-11-03' from famille f
  on conflict (famille_id, jour) do nothing;
insert into seance
  (journee_id, rang, matiere, titre, reference, consigne, minutes, lecon,
   fiche, par_adulte, origine)
select j.id, v.rang, v.matiere, v.titre, '', v.consigne, v.minutes, v.lecon,
       v.fiche, null, 'trame'
  from journee j
  cross join (values
    (1, 'maths', 'Les durées', 'De 8 h 45 à 12 h 30, combien de temps ? Cinq calculs de durée, à l’oral.', 15, '', 'cg-durees-02'),
    (2, 'maths', 'Le nombre du jour', 'Un nombre au tableau. Le décomposer de cinq façons, l’encadrer, dire son nombre de centaines, le doubler.', 30, '', 'em-nombre-04'),
    (3, 'francais', 'Le dictionnaire', 'Chercher cinq mots rencontrés cette semaine. Relever la nature du mot et ses différents sens.', 25, '', ''),
    (4, 'francais', 'Auto-dictée', 'Apprendre quatre lignes par cœur la veille, les écrire de mémoire aujourd’hui.', 20, '', 'ed-auto-03'),
    (5, 'francais', 'Lecture libre', 'Le livre que tu veux, sans compte à rendre. On te demande seulement si tu as aimé, et pourquoi.', 30, '', 'lf-libre-03'),
    (6, 'arts', 'Les couleurs', 'Lis la leçon, puis fais les exercices. Tes calculs sur ton brouillon, le résultat sur l’écran.', 25, 'ar-p2-couleurs', ''),
    (7, 'maison', 'Jardinage ou bricolage', 'Planter, arroser, mesurer, réparer. Le travail des mains compte autant que le reste.', 30, '', 'dh-mains-03')
  ) as v (rang, matiere, titre, consigne, minutes, lecon, fiche)
 where j.famille_id = (select id from famille) and j.jour = '2026-11-03'
   and not exists (select 1 from seance s where s.journee_id = j.id);

insert into journee (famille_id, jour) select f.id, '2026-11-04' from famille f
  on conflict (famille_id, jour) do nothing;
insert into seance
  (journee_id, rang, matiere, titre, reference, consigne, minutes, lecon,
   fiche, par_adulte, origine)
select j.id, v.rang, v.matiere, v.titre, '', v.consigne, v.minutes, v.lecon,
       v.fiche, null, 'trame'
  from journee j
  cross join (values
    (1, 'maths', 'Les tables de multiplication', 'Dix multiplications dictées, à l’ardoise. On efface entre chaque. On redit celles qui ont hésité.', 15, '', 'cm-tables-03'),
    (2, 'geographie', 'La chaîne de production d’un aliment', 'Lis la leçon, puis fais les exercices. Tes calculs sur ton brouillon, le résultat sur l’écran.', 30, 'g-p2-chaine', ''),
    (3, 'maison', 'Une carte', 'Dessiner le plan du quartier de mémoire, puis le comparer à une vraie carte. Chercher ce qui manque.', 45, '', '')
  ) as v (rang, matiere, titre, consigne, minutes, lecon, fiche)
 where j.famille_id = (select id from famille) and j.jour = '2026-11-04'
   and not exists (select 1 from seance s where s.journee_id = j.id);

insert into journee (famille_id, jour) select f.id, '2026-11-05' from famille f
  on conflict (famille_id, jour) do nothing;
insert into seance
  (journee_id, rang, matiere, titre, reference, consigne, minutes, lecon,
   fiche, par_adulte, origine)
select j.id, v.rang, v.matiere, v.titre, '', v.consigne, v.minutes, v.lecon,
       v.fiche, null, 'trame'
  from journee j
  cross join (values
    (1, 'maths', 'Les doubles et les moitiés', 'Le double de 45, la moitié de 68, le double de 250… Dix questions, à l’oral.', 15, '', 'cm-doubles-03'),
    (2, 'maths', 'Additionner et soustraire des fractions', 'Lis la leçon, puis fais les exercices. Tes calculs sur ton brouillon, le résultat sur l’écran.', 25, 'm-p2-fractions-calcul', ''),
    (3, 'francais', 'Le futur', 'Lis la leçon, puis fais les exercices. Tes calculs sur ton brouillon, le résultat sur l’écran.', 25, 'f-p2-futur', ''),
    (4, 'francais', 'Dictée de phrases', 'Trois phrases. On souligne les verbes et on entoure les sujets avant de corriger.', 20, '', 'ed-phrases-04'),
    (5, 'francais', 'Lecture silencieuse', 'Vingt minutes dans le livre en cours, puis raconter ce qui vient de se passer.', 30, '', 'lt-silence-04'),
    (6, 'francais', 'Raconter sa journée d’hier', 'Dix lignes au passé. Vérifier que les temps ne changent pas en cours de route.', 25, '', 'rd-hier-04'),
    (7, 'maison', 'Jeux de ballon', 'Passes, tirs, jonglages. Compter les réussites de suite, battre son propre score.', 30, '', 'dh-ballon-04')
  ) as v (rang, matiere, titre, consigne, minutes, lecon, fiche)
 where j.famille_id = (select id from famille) and j.jour = '2026-11-05'
   and not exists (select 1 from seance s where s.journee_id = j.id);

insert into journee (famille_id, jour) select f.id, '2026-11-06' from famille f
  on conflict (famille_id, jour) do nothing;
insert into seance
  (journee_id, rang, matiere, titre, reference, consigne, minutes, lecon,
   fiche, par_adulte, origine)
select j.id, v.rang, v.matiere, v.titre, '', v.consigne, v.minutes, v.lecon,
       v.fiche, null, 'trame'
  from journee j
  cross join (values
    (1, 'maths', 'Les compléments à 100', 'Combien manque-t-il à 67 pour aller à 100 ? Dix questions. Puis les compléments à 1 000.', 15, '', 'cm-cent-03'),
    (2, 'maths', 'Reprendre la leçon de maths', 'Refaire les exercices de la dernière leçon de maths, sur le cahier cette fois. Comparer avec ce qui avait été trouvé.', 30, '', 'em-reprise-05'),
    (3, 'francais', 'Reprendre la leçon de français', 'Refaire les exercices de la dernière leçon de français, sur le cahier.', 25, '', ''),
    (4, 'francais', 'Copie soignée', 'Copier huit lignes d’un texte au choix, le plus soigneusement possible. On relit avant de rendre.', 20, '', 'ec-copie-04'),
    (5, 'francais', 'Lecture et questions', 'Un texte court, puis cinq questions : trois sur ce qui est écrit, deux sur ce qui se déduit.', 30, '', ''),
    (6, 'geographie', 'Les inégalités de niveau de vie', 'Lis la leçon, puis fais les exercices. Tes calculs sur ton brouillon, le résultat sur l’écran.', 35, 'g-p2-inegalites', ''),
    (7, 'maison', 'Vélo', 'Une sortie. Repérer le trajet sur un plan avant de partir, puis le raconter au retour.', 30, '', 'dh-velo-04')
  ) as v (rang, matiere, titre, consigne, minutes, lecon, fiche)
 where j.famille_id = (select id from famille) and j.jour = '2026-11-06'
   and not exists (select 1 from seance s where s.journee_id = j.id);

insert into journee (famille_id, jour) select f.id, '2026-11-09' from famille f
  on conflict (famille_id, jour) do nothing;
insert into seance
  (journee_id, rang, matiere, titre, reference, consigne, minutes, lecon,
   fiche, par_adulte, origine)
select j.id, v.rang, v.matiere, v.titre, '', v.consigne, v.minutes, v.lecon,
       v.fiche, null, 'trame'
  from journee j
  cross join (values
    (1, 'maths', 'Ajouter 9, 19, 29', 'On ajoute la dizaine ronde et on retire 1. Dix questions, en disant la procédure à voix haute.', 15, '', 'cm-neuf-03'),
    (2, 'maths', 'Géométrie : tracer', 'Un programme de construction à suivre à la règle, à l’équerre et au compas. La précision compte.', 30, '', 'em-trace-05'),
    (3, 'francais', 'Le passé composé', 'Lis la leçon, puis fais les exercices. Tes calculs sur ton brouillon, le résultat sur l’écran.', 30, 'f-p2-passe-compose', ''),
    (4, 'francais', 'Dictée préparée', 'Le texte a été lu la veille. On le dicte, puis on compare avec l’original.', 20, '', 'ed-preparee-04'),
    (5, 'francais', 'Lecture d’un documentaire', 'Une double page documentaire. Relever la nature et la source du document avant de lire.', 30, '', ''),
    (6, 'sciences', 'Dissoudre, et la limite', 'Lis la leçon, puis fais les exercices. Tes calculs sur ton brouillon, le résultat sur l’écran.', 30, 's-p2-dissolution', ''),
    (7, 'maison', 'Parcours et équilibre', 'Un parcours à installer soi-même : sauter, grimper, tenir en équilibre, ramper.', 30, '', 'dh-parcours-04')
  ) as v (rang, matiere, titre, consigne, minutes, lecon, fiche)
 where j.famille_id = (select id from famille) and j.jour = '2026-11-09'
   and not exists (select 1 from seance s where s.journee_id = j.id);

insert into journee (famille_id, jour) select f.id, '2026-11-10' from famille f
  on conflict (famille_id, jour) do nothing;
insert into seance
  (journee_id, rang, matiere, titre, reference, consigne, minutes, lecon,
   fiche, par_adulte, origine)
select j.id, v.rang, v.matiere, v.titre, '', v.consigne, v.minutes, v.lecon,
       v.fiche, null, 'trame'
  from journee j
  cross join (values
    (1, 'maths', 'Multiplier par 10, 100, 1 000', 'Dix questions rapides. Puis diviser par 10 : 320 ÷ 10, 4 500 ÷ 10.', 15, '', 'cm-dix-03'),
    (2, 'maths', 'Les dixièmes et les centièmes', 'Lis la leçon, puis fais les exercices. Tes calculs sur ton brouillon, le résultat sur l’écran.', 30, 'm-p2-fractions-decimales', ''),
    (3, 'francais', 'Vocabulaire', 'Dix mots : trouver un synonyme, un contraire, et un mot de la même famille pour chacun.', 25, '', ''),
    (4, 'francais', 'Les mots invariables', 'Apprendre dix mots invariables, puis les écrire sous la dictée.', 20, '', 'ec-invar-04'),
    (5, 'francais', 'Poésie', 'Lire un poème à voix haute, plusieurs fois. Repérer les rimes et les images. En apprendre quatre vers.', 30, '', 'lf-poesie-04'),
    (6, 'anglais', 'Les couleurs et les objets de la classe', 'Lis la leçon, puis fais les exercices. Tes calculs sur ton brouillon, le résultat sur l’écran.', 25, 'a-p2-couleurs', ''),
    (7, 'maison', 'Marche et observation', 'Une marche d’une demi-heure. Rapporter trois choses observées, à noter ou à dessiner.', 30, '', 'dh-marche-04')
  ) as v (rang, matiere, titre, consigne, minutes, lecon, fiche)
 where j.famille_id = (select id from famille) and j.jour = '2026-11-10'
   and not exists (select 1 from seance s where s.journee_id = j.id);

insert into journee (famille_id, jour) select f.id, '2026-11-12' from famille f
  on conflict (famille_id, jour) do nothing;
insert into seance
  (journee_id, rang, matiere, titre, reference, consigne, minutes, lecon,
   fiche, par_adulte, origine)
select j.id, v.rang, v.matiere, v.titre, '', v.consigne, v.minutes, v.lecon,
       v.fiche, null, 'trame'
  from journee j
  cross join (values
    (1, 'maths', 'Multiplier par 4 et par 8', 'Par 4, c’est doubler deux fois. Par 8, trois fois. Dix questions en disant les étapes.', 15, '', 'cm-quatre-03'),
    (2, 'maths', 'Le nombre du jour', 'Un nombre au tableau. Le décomposer de cinq façons, l’encadrer, dire son nombre de centaines, le doubler.', 30, '', 'em-nombre-05'),
    (3, 'francais', 'Les compléments : objet ou circonstanciel', 'Lis la leçon, puis fais les exercices. Tes calculs sur ton brouillon, le résultat sur l’écran.', 30, 'f-p2-complements', ''),
    (4, 'francais', 'Transformer des phrases', 'Mettre cinq phrases au pluriel, en respectant toute la chaîne d’accords. À l’écrit.', 20, '', 'ec-transf-04'),
    (5, 'francais', 'Lecture d’une bande dessinée', 'Une planche. Puis expliquer ce que les images racontent et que le texte ne dit pas.', 30, '', 'lf-bd-04'),
    (6, 'francais', 'Expliquer une règle', 'Réécrire avec tes mots une leçon de la semaine, pour quelqu’un qui ne l’a pas eue.', 25, '', 'rd-regle-04'),
    (7, 'maison', 'Jeux de raquette', 'Échanges contre un mur ou à deux. Compter les échanges tenus sans faute.', 30, '', 'dh-raquette-04')
  ) as v (rang, matiere, titre, consigne, minutes, lecon, fiche)
 where j.famille_id = (select id from famille) and j.jour = '2026-11-12'
   and not exists (select 1 from seance s where s.journee_id = j.id);

insert into journee (famille_id, jour) select f.id, '2026-11-13' from famille f
  on conflict (famille_id, jour) do nothing;
insert into seance
  (journee_id, rang, matiere, titre, reference, consigne, minutes, lecon,
   fiche, par_adulte, origine)
select j.id, v.rang, v.matiere, v.titre, '', v.consigne, v.minutes, v.lecon,
       v.fiche, null, 'trame'
  from journee j
  cross join (values
    (1, 'maths', 'Multiplier par 5 et par 50', 'Par 5, c’est la moitié de par 10. Par 50, la moitié de par 100. Dix questions.', 15, '', 'cm-cinq-03'),
    (2, 'maths', 'Opérations posées', 'Quatre additions, quatre soustractions, deux multiplications. Estimer avant, vérifier après.', 30, '', 'em-ops-06'),
    (3, 'francais', 'Analyser des phrases', 'Cinq phrases : souligner le sujet, entourer le verbe, encadrer les compléments. Dire lesquels se déplacent.', 25, '', 'ef-phrases-06'),
    (4, 'francais', 'Dictée à trous', 'Le texte est écrit, il manque les terminaisons des verbes. On les complète en justifiant.', 20, '', 'ed-trous-04'),
    (5, 'francais', 'Lecture de théâtre', 'Une scène, lue à deux voix. Les didascalies ne se disent pas : elles se jouent.', 30, '', 'lf-theatre-04'),
    (6, 'francais', 'Écrire une lettre', 'Une lettre à quelqu’un de la famille. Formule d’appel, corps, formule de fin.', 25, '', 'rd-lettre-04'),
    (7, 'maison', 'Danse et rythme', 'Suivre une pulsation, inventer une suite de mouvements de huit temps, la refaire à l’identique.', 30, '', 'dh-danse-04')
  ) as v (rang, matiere, titre, consigne, minutes, lecon, fiche)
 where j.famille_id = (select id from famille) and j.jour = '2026-11-13'
   and not exists (select 1 from seance s where s.journee_id = j.id);

insert into journee (famille_id, jour) select f.id, '2026-11-16' from famille f
  on conflict (famille_id, jour) do nothing;
insert into seance
  (journee_id, rang, matiere, titre, reference, consigne, minutes, lecon,
   fiche, par_adulte, origine)
select j.id, v.rang, v.matiere, v.titre, '', v.consigne, v.minutes, v.lecon,
       v.fiche, null, 'trame'
  from journee j
  cross join (values
    (1, 'maths', 'Les fractions d’une quantité', 'La moitié de 36, le tiers de 24, les trois quarts de 20. Dix questions à l’oral.', 15, '', 'cg-fractions-03'),
    (2, 'maths', 'Poser une multiplication', 'Lis la leçon, puis fais les exercices. Tes calculs sur ton brouillon, le résultat sur l’écran.', 30, 'm-p2-multiplication', ''),
    (3, 'francais', 'Conjugaison', 'Trois verbes, aux quatre temps connus, à toutes les personnes. Sur le cahier, sans modèle.', 25, '', ''),
    (4, 'francais', 'Auto-dictée', 'Apprendre quatre lignes par cœur la veille, les écrire de mémoire aujourd’hui.', 20, '', 'ed-auto-04'),
    (5, 'francais', 'Lecture libre', 'Le livre que tu veux, sans compte à rendre. On te demande seulement si tu as aimé, et pourquoi.', 30, '', 'lf-libre-04'),
    (6, 'emc', 'La République et ses symboles', 'Lis la leçon, puis fais les exercices. Tes calculs sur ton brouillon, le résultat sur l’écran.', 30, 'e-p2-republique', ''),
    (7, 'maison', 'Jardinage ou bricolage', 'Planter, arroser, mesurer, réparer. Le travail des mains compte autant que le reste.', 30, '', 'dh-mains-04')
  ) as v (rang, matiere, titre, consigne, minutes, lecon, fiche)
 where j.famille_id = (select id from famille) and j.jour = '2026-11-16'
   and not exists (select 1 from seance s where s.journee_id = j.id);

insert into journee (famille_id, jour) select f.id, '2026-11-17' from famille f
  on conflict (famille_id, jour) do nothing;
insert into seance
  (journee_id, rang, matiere, titre, reference, consigne, minutes, lecon,
   fiche, par_adulte, origine)
select j.id, v.rang, v.matiere, v.titre, '', v.consigne, v.minutes, v.lecon,
       v.fiche, null, 'trame'
  from journee j
  cross join (values
    (1, 'maths', 'Les problèmes en une phrase', 'Cinq problèmes dictés, très courts. La réponse sur l’ardoise, sans écrire le calcul.', 15, '', 'cg-problemes-03'),
    (2, 'maths', 'Reprendre la leçon de maths', 'Refaire les exercices de la dernière leçon de maths, sur le cahier cette fois. Comparer avec ce qui avait été trouvé.', 30, '', 'em-reprise-06'),
    (3, 'francais', 'Les mots qui se prononcent pareil', 'Lis la leçon, puis fais les exercices. Tes calculs sur ton brouillon, le résultat sur l’écran.', 25, 'f-p2-homophones', ''),
    (4, 'francais', 'Dictée de mots', 'Quinze mots de la liste en cours. On corrige ensemble, et on réécrit trois fois ceux qui ont hésité.', 20, '', 'ed-mots-05'),
    (5, 'francais', 'Lecture à voix haute', 'Une page préparée, lue à voix haute en respectant la ponctuation. On marque au crayon où respirer.', 30, '', 'lt-voix-05'),
    (6, 'sciences', 'Mesurer un déplacement', 'Lis la leçon, puis fais les exercices. Tes calculs sur ton brouillon, le résultat sur l’écran.', 30, 's-p2-mouvement', ''),
    (7, 'maison', 'Course et endurance', 'Courir sans s’arrêter, en augmentant un peu chaque semaine. On chronomètre, on ne compare à personne.', 30, '', 'dh-course-05')
  ) as v (rang, matiere, titre, consigne, minutes, lecon, fiche)
 where j.famille_id = (select id from famille) and j.jour = '2026-11-17'
   and not exists (select 1 from seance s where s.journee_id = j.id);

insert into journee (famille_id, jour) select f.id, '2026-11-18' from famille f
  on conflict (famille_id, jour) do nothing;
insert into seance
  (journee_id, rang, matiere, titre, reference, consigne, minutes, lecon,
   fiche, par_adulte, origine)
select j.id, v.rang, v.matiere, v.titre, '', v.consigne, v.minutes, v.lecon,
       v.fiche, null, 'trame'
  from journee j
  cross join (values
    (1, 'maths', 'Encadrer et arrondir', 'Entre quels milliers se trouve 6 480 ? Quel est l’arrondi de 12,94 ? Dix questions.', 15, '', 'cg-encadrer-03'),
    (2, 'sciences', 'Comment marche un objet technique', 'Lis la leçon, puis fais les exercices. Tes calculs sur ton brouillon, le résultat sur l’écran.', 30, 's-p2-objets', ''),
    (3, 'maison', 'Un métier', 'Choisir un métier, chercher ce qu’il demande d’apprendre, et qui l’exerce autour de nous.', 45, '', '')
  ) as v (rang, matiere, titre, consigne, minutes, lecon, fiche)
 where j.famille_id = (select id from famille) and j.jour = '2026-11-18'
   and not exists (select 1 from seance s where s.journee_id = j.id);

insert into journee (famille_id, jour) select f.id, '2026-11-19' from famille f
  on conflict (famille_id, jour) do nothing;
insert into seance
  (journee_id, rang, matiere, titre, reference, consigne, minutes, lecon,
   fiche, par_adulte, origine)
select j.id, v.rang, v.matiere, v.titre, '', v.consigne, v.minutes, v.lecon,
       v.fiche, null, 'trame'
  from journee j
  cross join (values
    (1, 'maths', 'Les unités de mesure', 'Combien de grammes dans 2 kg 500 ? De centimètres dans 3 m 50 ? Dix questions.', 15, '', 'cg-unites-03'),
    (2, 'maths', 'Les multiples et les diviseurs', 'Lis la leçon, puis fais les exercices. Tes calculs sur ton brouillon, le résultat sur l’écran.', 25, 'm-p2-multiples', ''),
    (3, 'francais', 'Vocabulaire', 'Dix mots : trouver un synonyme, un contraire, et un mot de la même famille pour chacun.', 25, '', ''),
    (4, 'francais', 'Copie soignée', 'Copier huit lignes d’un texte au choix, le plus soigneusement possible. On relit avant de rendre.', 20, '', 'ec-copie-05'),
    (5, 'francais', 'Lecture et questions', 'Un texte court, puis cinq questions : trois sur ce qui est écrit, deux sur ce qui se déduit.', 30, '', ''),
    (6, 'histoire', 'François Ier et la Renaissance', 'Lis la leçon, puis fais les exercices. Tes calculs sur ton brouillon, le résultat sur l’écran.', 30, 'h-p2-renaissance', ''),
    (7, 'maison', 'Vélo', 'Une sortie. Repérer le trajet sur un plan avant de partir, puis le raconter au retour.', 30, '', 'dh-velo-05')
  ) as v (rang, matiere, titre, consigne, minutes, lecon, fiche)
 where j.famille_id = (select id from famille) and j.jour = '2026-11-19'
   and not exists (select 1 from seance s where s.journee_id = j.id);

insert into journee (famille_id, jour) select f.id, '2026-11-20' from famille f
  on conflict (famille_id, jour) do nothing;
insert into seance
  (journee_id, rang, matiere, titre, reference, consigne, minutes, lecon,
   fiche, par_adulte, origine)
select j.id, v.rang, v.matiere, v.titre, '', v.consigne, v.minutes, v.lecon,
       v.fiche, null, 'trame'
  from journee j
  cross join (values
    (1, 'maths', 'Les durées', 'De 8 h 45 à 12 h 30, combien de temps ? Cinq calculs de durée, à l’oral.', 15, '', 'cg-durees-03'),
    (2, 'maths', 'Le nombre du jour', 'Un nombre au tableau. Le décomposer de cinq façons, l’encadrer, dire son nombre de centaines, le doubler.', 30, '', 'em-nombre-06'),
    (3, 'francais', 'Comprendre un texte : l’explicite et l’implicite', 'Lis la leçon, puis fais les exercices. Tes calculs sur ton brouillon, le résultat sur l’écran.', 25, 'f-p2-comprendre', ''),
    (4, 'francais', 'Dictée préparée', 'Le texte a été lu la veille. On le dicte, puis on compare avec l’original.', 20, '', 'ed-preparee-05'),
    (5, 'francais', 'Lecture d’un documentaire', 'Une double page documentaire. Relever la nature et la source du document avant de lire.', 30, '', ''),
    (6, 'arts', 'Les couleurs — on reprend', 'On relit le cours, puis on refait les exercices. Tes calculs sur ton brouillon, le résultat sur l’écran.', 25, 'ar-p2-couleurs', ''),
    (7, 'maison', 'Parcours et équilibre', 'Un parcours à installer soi-même : sauter, grimper, tenir en équilibre, ramper.', 30, '', 'dh-parcours-05')
  ) as v (rang, matiere, titre, consigne, minutes, lecon, fiche)
 where j.famille_id = (select id from famille) and j.jour = '2026-11-20'
   and not exists (select 1 from seance s where s.journee_id = j.id);

insert into journee (famille_id, jour) select f.id, '2026-11-23' from famille f
  on conflict (famille_id, jour) do nothing;
insert into seance
  (journee_id, rang, matiere, titre, reference, consigne, minutes, lecon,
   fiche, par_adulte, origine)
select j.id, v.rang, v.matiere, v.titre, '', v.consigne, v.minutes, v.lecon,
       v.fiche, null, 'trame'
  from journee j
  cross join (values
    (1, 'maths', 'Les tables de multiplication', 'Dix multiplications dictées, à l’ardoise. On efface entre chaque. On redit celles qui ont hésité.', 15, '', 'cm-tables-04'),
    (2, 'maths', 'Opérations posées', 'Quatre additions, quatre soustractions, deux multiplications. Estimer avant, vérifier après.', 30, '', 'em-ops-07'),
    (3, 'francais', 'Analyser des phrases', 'Cinq phrases : souligner le sujet, entourer le verbe, encadrer les compléments. Dire lesquels se déplacent.', 25, '', 'ef-phrases-07'),
    (4, 'francais', 'Les mots invariables', 'Apprendre dix mots invariables, puis les écrire sous la dictée.', 20, '', 'ec-invar-05'),
    (5, 'francais', 'Poésie', 'Lire un poème à voix haute, plusieurs fois. Repérer les rimes et les images. En apprendre quatre vers.', 30, '', 'lf-poesie-05'),
    (6, 'francais', 'Donner son avis', 'Ce que je pense, pourquoi, un exemple. Huit lignes. Les trois morceaux doivent y être.', 25, '', 'rd-avis-05'),
    (7, 'maison', 'Marche et observation', 'Une marche d’une demi-heure. Rapporter trois choses observées, à noter ou à dessiner.', 30, '', 'dh-marche-05')
  ) as v (rang, matiere, titre, consigne, minutes, lecon, fiche)
 where j.famille_id = (select id from famille) and j.jour = '2026-11-23'
   and not exists (select 1 from seance s where s.journee_id = j.id);

insert into journee (famille_id, jour) select f.id, '2026-11-24' from famille f
  on conflict (famille_id, jour) do nothing;
insert into seance
  (journee_id, rang, matiere, titre, reference, consigne, minutes, lecon,
   fiche, par_adulte, origine)
select j.id, v.rang, v.matiere, v.titre, '', v.consigne, v.minutes, v.lecon,
       v.fiche, null, 'trame'
  from journee j
  cross join (values
    (1, 'maths', 'Les doubles et les moitiés', 'Le double de 45, la moitié de 68, le double de 250… Dix questions, à l’oral.', 15, '', 'cm-doubles-04'),
    (2, 'maths', 'Les longueurs, du millimètre au kilomètre', 'Lis la leçon, puis fais les exercices. Tes calculs sur ton brouillon, le résultat sur l’écran.', 25, 'm-p2-longueurs', ''),
    (3, 'francais', 'Écrire un texte qui se tient', 'Lis la leçon, puis fais les exercices. Tes calculs sur ton brouillon, le résultat sur l’écran.', 30, 'f-p2-ecrire', ''),
    (4, 'francais', 'Transformer des phrases', 'Mettre cinq phrases au pluriel, en respectant toute la chaîne d’accords. À l’écrit.', 20, '', 'ec-transf-05'),
    (5, 'francais', 'Lecture d’une bande dessinée', 'Une planche. Puis expliquer ce que les images racontent et que le texte ne dit pas.', 30, '', 'lf-bd-05'),
    (6, 'francais', 'Expliquer une règle', 'Réécrire avec tes mots une leçon de la semaine, pour quelqu’un qui ne l’a pas eue.', 25, '', 'rd-regle-05'),
    (7, 'maison', 'Jeux de raquette', 'Échanges contre un mur ou à deux. Compter les échanges tenus sans faute.', 30, '', 'dh-raquette-05')
  ) as v (rang, matiere, titre, consigne, minutes, lecon, fiche)
 where j.famille_id = (select id from famille) and j.jour = '2026-11-24'
   and not exists (select 1 from seance s where s.journee_id = j.id);

insert into journee (famille_id, jour) select f.id, '2026-11-25' from famille f
  on conflict (famille_id, jour) do nothing;
insert into seance
  (journee_id, rang, matiere, titre, reference, consigne, minutes, lecon,
   fiche, par_adulte, origine)
select j.id, v.rang, v.matiere, v.titre, '', v.consigne, v.minutes, v.lecon,
       v.fiche, null, 'trame'
  from journee j
  cross join (values
    (1, 'maths', 'Les compléments à 100', 'Combien manque-t-il à 67 pour aller à 100 ? Dix questions. Puis les compléments à 1 000.', 15, '', 'cm-cent-04'),
    (2, 'anglais', 'La famille', 'Lis la leçon, puis fais les exercices. Tes calculs sur ton brouillon, le résultat sur l’écran.', 25, 'a-p2-famille', ''),
    (3, 'maison', 'Musique', 'Écouter un morceau en entier, sans rien faire d’autre. Repérer la pulsation, les instruments, ce qui revient.', 45, '', '')
  ) as v (rang, matiere, titre, consigne, minutes, lecon, fiche)
 where j.famille_id = (select id from famille) and j.jour = '2026-11-25'
   and not exists (select 1 from seance s where s.journee_id = j.id);

insert into journee (famille_id, jour) select f.id, '2026-11-26' from famille f
  on conflict (famille_id, jour) do nothing;
insert into seance
  (journee_id, rang, matiere, titre, reference, consigne, minutes, lecon,
   fiche, par_adulte, origine)
select j.id, v.rang, v.matiere, v.titre, '', v.consigne, v.minutes, v.lecon,
       v.fiche, null, 'trame'
  from journee j
  cross join (values
    (1, 'maths', 'Ajouter 9, 19, 29', 'On ajoute la dizaine ronde et on retire 1. Dix questions, en disant la procédure à voix haute.', 15, '', 'cm-neuf-04'),
    (2, 'maths', 'Géométrie : tracer', 'Un programme de construction à suivre à la règle, à l’équerre et au compas. La précision compte.', 30, '', 'em-trace-07'),
    (3, 'francais', 'Les homophones', 'Un texte à trous : a/à, est/et, son/sont, ont/on. Justifier chaque choix par le test de remplacement.', 25, '', ''),
    (4, 'francais', 'Auto-dictée', 'Apprendre quatre lignes par cœur la veille, les écrire de mémoire aujourd’hui.', 20, '', 'ed-auto-05'),
    (5, 'francais', 'Lecture libre', 'Le livre que tu veux, sans compte à rendre. On te demande seulement si tu as aimé, et pourquoi.', 30, '', 'lf-libre-01'),
    (6, 'sciences', 'Dissoudre, et la limite — on reprend', 'On relit le cours, puis on refait les exercices. Tes calculs sur ton brouillon, le résultat sur l’écran.', 30, 's-p2-dissolution', ''),
    (7, 'maison', 'Jardinage ou bricolage', 'Planter, arroser, mesurer, réparer. Le travail des mains compte autant que le reste.', 30, '', 'dh-mains-05')
  ) as v (rang, matiere, titre, consigne, minutes, lecon, fiche)
 where j.famille_id = (select id from famille) and j.jour = '2026-11-26'
   and not exists (select 1 from seance s where s.journee_id = j.id);

insert into journee (famille_id, jour) select f.id, '2026-11-27' from famille f
  on conflict (famille_id, jour) do nothing;
insert into seance
  (journee_id, rang, matiere, titre, reference, consigne, minutes, lecon,
   fiche, par_adulte, origine)
select j.id, v.rang, v.matiere, v.titre, '', v.consigne, v.minutes, v.lecon,
       v.fiche, null, 'trame'
  from journee j
  cross join (values
    (1, 'maths', 'Multiplier par 10, 100, 1 000', 'Dix questions rapides. Puis diviser par 10 : 320 ÷ 10, 4 500 ÷ 10.', 15, '', 'cm-dix-04'),
    (2, 'maths', 'Mesurer pour de vrai', 'Mesurer des objets de la maison, noter en deux unités différentes, comparer aux estimations faites avant.', 30, '', 'em-mesure-07'),
    (3, 'francais', 'Vocabulaire', 'Dix mots : trouver un synonyme, un contraire, et un mot de la même famille pour chacun.', 25, '', ''),
    (4, 'francais', 'Dictée de mots', 'Quinze mots de la liste en cours. On corrige ensemble, et on réécrit trois fois ceux qui ont hésité.', 20, '', 'ed-mots-06'),
    (5, 'francais', 'Lecture à voix haute', 'Une page préparée, lue à voix haute en respectant la ponctuation. On marque au crayon où respirer.', 30, '', 'lt-voix-06'),
    (6, 'francais', 'Écrire la suite', 'Lire le début d’un récit, puis en écrire la suite : dix lignes. Brouillon d’abord.', 25, '', 'rd-suite-06'),
    (7, 'maison', 'Course et endurance', 'Courir sans s’arrêter, en augmentant un peu chaque semaine. On chronomètre, on ne compare à personne.', 30, '', 'dh-course-06')
  ) as v (rang, matiere, titre, consigne, minutes, lecon, fiche)
 where j.famille_id = (select id from famille) and j.jour = '2026-11-27'
   and not exists (select 1 from seance s where s.journee_id = j.id);

insert into journee (famille_id, jour) select f.id, '2026-11-30' from famille f
  on conflict (famille_id, jour) do nothing;
insert into seance
  (journee_id, rang, matiere, titre, reference, consigne, minutes, lecon,
   fiche, par_adulte, origine)
select j.id, v.rang, v.matiere, v.titre, '', v.consigne, v.minutes, v.lecon,
       v.fiche, null, 'trame'
  from journee j
  cross join (values
    (1, 'maths', 'Multiplier par 4 et par 8', 'Par 4, c’est doubler deux fois. Par 8, trois fois. Dix questions en disant les étapes.', 15, '', 'cm-quatre-04'),
    (2, 'maths', 'Les fractions plus grandes que 1 — on reprend', 'On relit le cours, puis on refait les exercices. Tes calculs sur ton brouillon, le résultat sur l’écran.', 30, 'm-p2-fractions-sup', ''),
    (3, 'francais', 'L’imparfait — on reprend', 'On relit le cours, puis on refait les exercices. Tes calculs sur ton brouillon, le résultat sur l’écran.', 25, 'f-p2-imparfait', ''),
    (4, 'francais', 'Dictée de phrases', 'Trois phrases. On souligne les verbes et on entoure les sujets avant de corriger.', 20, '', 'ed-phrases-06'),
    (5, 'francais', 'Lecture silencieuse', 'Vingt minutes dans le livre en cours, puis raconter ce qui vient de se passer.', 30, '', 'lt-silence-06'),
    (6, 'francais', 'Raconter sa journée d’hier', 'Dix lignes au passé. Vérifier que les temps ne changent pas en cours de route.', 25, '', 'rd-hier-06'),
    (7, 'maison', 'Jeux de ballon', 'Passes, tirs, jonglages. Compter les réussites de suite, battre son propre score.', 30, '', 'dh-ballon-06')
  ) as v (rang, matiere, titre, consigne, minutes, lecon, fiche)
 where j.famille_id = (select id from famille) and j.jour = '2026-11-30'
   and not exists (select 1 from seance s where s.journee_id = j.id);

insert into journee (famille_id, jour) select f.id, '2026-12-01' from famille f
  on conflict (famille_id, jour) do nothing;
insert into seance
  (journee_id, rang, matiere, titre, reference, consigne, minutes, lecon,
   fiche, par_adulte, origine)
select j.id, v.rang, v.matiere, v.titre, '', v.consigne, v.minutes, v.lecon,
       v.fiche, null, 'trame'
  from journee j
  cross join (values
    (1, 'maths', 'Multiplier par 5 et par 50', 'Par 5, c’est la moitié de par 10. Par 50, la moitié de par 100. Dix questions.', 15, '', 'cm-cinq-04'),
    (2, 'maths', 'Opérations posées', 'Quatre additions, quatre soustractions, deux multiplications. Estimer avant, vérifier après.', 30, '', 'em-ops-08'),
    (3, 'francais', 'Le futur — on reprend', 'On relit le cours, puis on refait les exercices. Tes calculs sur ton brouillon, le résultat sur l’écran.', 25, 'f-p2-futur', ''),
    (4, 'francais', 'Copie soignée', 'Copier huit lignes d’un texte au choix, le plus soigneusement possible. On relit avant de rendre.', 20, '', 'ec-copie-06'),
    (5, 'francais', 'Lecture et questions', 'Un texte court, puis cinq questions : trois sur ce qui est écrit, deux sur ce qui se déduit.', 30, '', ''),
    (6, 'geographie', 'La chaîne de production d’un aliment — on reprend', 'On relit le cours, puis on refait les exercices. Tes calculs sur ton brouillon, le résultat sur l’écran.', 30, 'g-p2-chaine', ''),
    (7, 'maison', 'Vélo', 'Une sortie. Repérer le trajet sur un plan avant de partir, puis le raconter au retour.', 30, '', 'dh-velo-06')
  ) as v (rang, matiere, titre, consigne, minutes, lecon, fiche)
 where j.famille_id = (select id from famille) and j.jour = '2026-12-01'
   and not exists (select 1 from seance s where s.journee_id = j.id);

insert into journee (famille_id, jour) select f.id, '2026-12-02' from famille f
  on conflict (famille_id, jour) do nothing;
insert into seance
  (journee_id, rang, matiere, titre, reference, consigne, minutes, lecon,
   fiche, par_adulte, origine)
select j.id, v.rang, v.matiere, v.titre, '', v.consigne, v.minutes, v.lecon,
       v.fiche, null, 'trame'
  from journee j
  cross join (values
    (1, 'maths', 'Les fractions d’une quantité', 'La moitié de 36, le tiers de 24, les trois quarts de 20. Dix questions à l’oral.', 15, '', 'cg-fractions-04'),
    (2, 'histoire', 'L’Église, l’art roman et l’art gothique — on reprend', 'On relit le cours, puis on refait les exercices. Tes calculs sur ton brouillon, le résultat sur l’écran.', 30, 'h-p2-eglise', ''),
    (3, 'maison', 'Dessin d’observation', 'Dessiner un objet réel en le regardant, pas de mémoire. Vingt minutes sur le même objet.', 45, '', '')
  ) as v (rang, matiere, titre, consigne, minutes, lecon, fiche)
 where j.famille_id = (select id from famille) and j.jour = '2026-12-02'
   and not exists (select 1 from seance s where s.journee_id = j.id);

insert into journee (famille_id, jour) select f.id, '2026-12-03' from famille f
  on conflict (famille_id, jour) do nothing;
insert into seance
  (journee_id, rang, matiere, titre, reference, consigne, minutes, lecon,
   fiche, par_adulte, origine)
select j.id, v.rang, v.matiere, v.titre, '', v.consigne, v.minutes, v.lecon,
       v.fiche, null, 'trame'
  from journee j
  cross join (values
    (1, 'maths', 'Les problèmes en une phrase', 'Cinq problèmes dictés, très courts. La réponse sur l’ardoise, sans écrire le calcul.', 15, '', 'cg-problemes-04'),
    (2, 'maths', 'Additionner et soustraire des fractions — on reprend', 'On relit le cours, puis on refait les exercices. Tes calculs sur ton brouillon, le résultat sur l’écran.', 25, 'm-p2-fractions-calcul', ''),
    (3, 'francais', 'Reprendre la leçon de français', 'Refaire les exercices de la dernière leçon de français, sur le cahier.', 25, '', ''),
    (4, 'francais', 'Les mots invariables', 'Apprendre dix mots invariables, puis les écrire sous la dictée.', 20, '', 'ec-invar-06'),
    (5, 'francais', 'Poésie', 'Lire un poème à voix haute, plusieurs fois. Repérer les rimes et les images. En apprendre quatre vers.', 30, '', 'lf-poesie-06'),
    (6, 'sciences', 'Mesurer un déplacement — on reprend', 'On relit le cours, puis on refait les exercices. Tes calculs sur ton brouillon, le résultat sur l’écran.', 30, 's-p2-mouvement', ''),
    (7, 'maison', 'Marche et observation', 'Une marche d’une demi-heure. Rapporter trois choses observées, à noter ou à dessiner.', 30, '', 'dh-marche-06')
  ) as v (rang, matiere, titre, consigne, minutes, lecon, fiche)
 where j.famille_id = (select id from famille) and j.jour = '2026-12-03'
   and not exists (select 1 from seance s where s.journee_id = j.id);

insert into journee (famille_id, jour) select f.id, '2026-12-04' from famille f
  on conflict (famille_id, jour) do nothing;
insert into seance
  (journee_id, rang, matiere, titre, reference, consigne, minutes, lecon,
   fiche, par_adulte, origine)
select j.id, v.rang, v.matiere, v.titre, '', v.consigne, v.minutes, v.lecon,
       v.fiche, null, 'trame'
  from journee j
  cross join (values
    (1, 'maths', 'Encadrer et arrondir', 'Entre quels milliers se trouve 6 480 ? Quel est l’arrondi de 12,94 ? Dix questions.', 15, '', 'cg-encadrer-04'),
    (2, 'maths', 'Géométrie : tracer', 'Un programme de construction à suivre à la règle, à l’équerre et au compas. La précision compte.', 30, '', 'em-trace-08'),
    (3, 'francais', 'Le passé composé — on reprend', 'On relit le cours, puis on refait les exercices. Tes calculs sur ton brouillon, le résultat sur l’écran.', 30, 'f-p2-passe-compose', ''),
    (4, 'francais', 'Transformer des phrases', 'Mettre cinq phrases au pluriel, en respectant toute la chaîne d’accords. À l’écrit.', 20, '', 'ec-transf-06'),
    (5, 'francais', 'Lecture d’une bande dessinée', 'Une planche. Puis expliquer ce que les images racontent et que le texte ne dit pas.', 30, '', 'lf-bd-06'),
    (6, 'anglais', 'Les couleurs et les objets de la classe — on reprend', 'On relit le cours, puis on refait les exercices. Tes calculs sur ton brouillon, le résultat sur l’écran.', 25, 'a-p2-couleurs', ''),
    (7, 'maison', 'Jeux de raquette', 'Échanges contre un mur ou à deux. Compter les échanges tenus sans faute.', 30, '', 'dh-raquette-06')
  ) as v (rang, matiere, titre, consigne, minutes, lecon, fiche)
 where j.famille_id = (select id from famille) and j.jour = '2026-12-04'
   and not exists (select 1 from seance s where s.journee_id = j.id);

insert into journee (famille_id, jour) select f.id, '2026-12-07' from famille f
  on conflict (famille_id, jour) do nothing;
insert into seance
  (journee_id, rang, matiere, titre, reference, consigne, minutes, lecon,
   fiche, par_adulte, origine)
select j.id, v.rang, v.matiere, v.titre, '', v.consigne, v.minutes, v.lecon,
       v.fiche, null, 'trame'
  from journee j
  cross join (values
    (1, 'maths', 'Les unités de mesure', 'Combien de grammes dans 2 kg 500 ? De centimètres dans 3 m 50 ? Dix questions.', 15, '', 'cg-unites-04'),
    (2, 'maths', 'Les dixièmes et les centièmes — on reprend', 'On relit le cours, puis on refait les exercices. Tes calculs sur ton brouillon, le résultat sur l’écran.', 30, 'm-p2-fractions-decimales', ''),
    (3, 'francais', 'Vocabulaire', 'Dix mots : trouver un synonyme, un contraire, et un mot de la même famille pour chacun.', 25, '', ''),
    (4, 'francais', 'Dictée à trous', 'Le texte est écrit, il manque les terminaisons des verbes. On les complète en justifiant.', 20, '', 'ed-trous-06'),
    (5, 'francais', 'Lecture de théâtre', 'Une scène, lue à deux voix. Les didascalies ne se disent pas : elles se jouent.', 30, '', 'lf-theatre-06'),
    (6, 'francais', 'Écrire une lettre', 'Une lettre à quelqu’un de la famille. Formule d’appel, corps, formule de fin.', 25, '', 'rd-lettre-06'),
    (7, 'maison', 'Danse et rythme', 'Suivre une pulsation, inventer une suite de mouvements de huit temps, la refaire à l’identique.', 30, '', 'dh-danse-06')
  ) as v (rang, matiere, titre, consigne, minutes, lecon, fiche)
 where j.famille_id = (select id from famille) and j.jour = '2026-12-07'
   and not exists (select 1 from seance s where s.journee_id = j.id);

insert into journee (famille_id, jour) select f.id, '2026-12-08' from famille f
  on conflict (famille_id, jour) do nothing;
insert into seance
  (journee_id, rang, matiere, titre, reference, consigne, minutes, lecon,
   fiche, par_adulte, origine)
select j.id, v.rang, v.matiere, v.titre, '', v.consigne, v.minutes, v.lecon,
       v.fiche, null, 'trame'
  from journee j
  cross join (values
    (1, 'maths', 'Les durées', 'De 8 h 45 à 12 h 30, combien de temps ? Cinq calculs de durée, à l’oral.', 15, '', 'cg-durees-04'),
    (2, 'maths', 'Le nombre du jour', 'Un nombre au tableau. Le décomposer de cinq façons, l’encadrer, dire son nombre de centaines, le doubler.', 30, '', 'em-nombre-08'),
    (3, 'francais', 'Les compléments : objet ou circonstanciel — on reprend', 'On relit le cours, puis on refait les exercices. Tes calculs sur ton brouillon, le résultat sur l’écran.', 30, 'f-p2-complements', ''),
    (4, 'francais', 'Auto-dictée', 'Apprendre quatre lignes par cœur la veille, les écrire de mémoire aujourd’hui.', 20, '', 'ed-auto-06'),
    (5, 'francais', 'Lecture libre', 'Le livre que tu veux, sans compte à rendre. On te demande seulement si tu as aimé, et pourquoi.', 30, '', 'lf-libre-02'),
    (6, 'francais', 'Inventer un problème', 'Écrire un problème de mathématiques à deux étapes, avec sa solution sur une autre feuille.', 25, '', 'rd-probleme-02'),
    (7, 'maison', 'Jardinage ou bricolage', 'Planter, arroser, mesurer, réparer. Le travail des mains compte autant que le reste.', 30, '', 'dh-mains-06')
  ) as v (rang, matiere, titre, consigne, minutes, lecon, fiche)
 where j.famille_id = (select id from famille) and j.jour = '2026-12-08'
   and not exists (select 1 from seance s where s.journee_id = j.id);

insert into journee (famille_id, jour) select f.id, '2026-12-09' from famille f
  on conflict (famille_id, jour) do nothing;
insert into seance
  (journee_id, rang, matiere, titre, reference, consigne, minutes, lecon,
   fiche, par_adulte, origine)
select j.id, v.rang, v.matiere, v.titre, '', v.consigne, v.minutes, v.lecon,
       v.fiche, null, 'trame'
  from journee j
  cross join (values
    (1, 'maths', 'Les tables de multiplication', 'Dix multiplications dictées, à l’ardoise. On efface entre chaque. On redit celles qui ont hésité.', 15, '', 'cm-tables-05'),
    (2, 'sciences', 'Comment marche un objet technique — on reprend', 'On relit le cours, puis on refait les exercices. Tes calculs sur ton brouillon, le résultat sur l’écran.', 30, 's-p2-objets', ''),
    (3, 'maison', 'Une expérience', 'Mélanger, dissoudre, filtrer, peser. Écrire ce qu’on croit qu’il va se passer AVANT de le faire, puis comparer.', 45, '', '')
  ) as v (rang, matiere, titre, consigne, minutes, lecon, fiche)
 where j.famille_id = (select id from famille) and j.jour = '2026-12-09'
   and not exists (select 1 from seance s where s.journee_id = j.id);

insert into journee (famille_id, jour) select f.id, '2026-12-10' from famille f
  on conflict (famille_id, jour) do nothing;
insert into seance
  (journee_id, rang, matiere, titre, reference, consigne, minutes, lecon,
   fiche, par_adulte, origine)
select j.id, v.rang, v.matiere, v.titre, '', v.consigne, v.minutes, v.lecon,
       v.fiche, null, 'trame'
  from journee j
  cross join (values
    (1, 'maths', 'Les doubles et les moitiés', 'Le double de 45, la moitié de 68, le double de 250… Dix questions, à l’oral.', 15, '', 'cm-doubles-05'),
    (2, 'maths', 'Poser une multiplication — on reprend', 'On relit le cours, puis on refait les exercices. Tes calculs sur ton brouillon, le résultat sur l’écran.', 30, 'm-p2-multiplication', ''),
    (3, 'francais', 'Les mots qui se prononcent pareil — on reprend', 'On relit le cours, puis on refait les exercices. Tes calculs sur ton brouillon, le résultat sur l’écran.', 25, 'f-p2-homophones', ''),
    (4, 'francais', 'Dictée de phrases', 'Trois phrases. On souligne les verbes et on entoure les sujets avant de corriger.', 20, '', 'ed-phrases-07'),
    (5, 'francais', 'Lecture silencieuse', 'Vingt minutes dans le livre en cours, puis raconter ce qui vient de se passer.', 30, '', 'lt-silence-07'),
    (6, 'histoire', 'François Ier et la Renaissance — on reprend', 'On relit le cours, puis on refait les exercices. Tes calculs sur ton brouillon, le résultat sur l’écran.', 30, 'h-p2-renaissance', ''),
    (7, 'maison', 'Jeux de ballon', 'Passes, tirs, jonglages. Compter les réussites de suite, battre son propre score.', 30, '', 'dh-ballon-07')
  ) as v (rang, matiere, titre, consigne, minutes, lecon, fiche)
 where j.famille_id = (select id from famille) and j.jour = '2026-12-10'
   and not exists (select 1 from seance s where s.journee_id = j.id);

insert into journee (famille_id, jour) select f.id, '2026-12-11' from famille f
  on conflict (famille_id, jour) do nothing;
insert into seance
  (journee_id, rang, matiere, titre, reference, consigne, minutes, lecon,
   fiche, par_adulte, origine)
select j.id, v.rang, v.matiere, v.titre, '', v.consigne, v.minutes, v.lecon,
       v.fiche, null, 'trame'
  from journee j
  cross join (values
    (1, 'maths', 'Les compléments à 100', 'Combien manque-t-il à 67 pour aller à 100 ? Dix questions. Puis les compléments à 1 000.', 15, '', 'cm-cent-05'),
    (2, 'maths', 'Reprendre la leçon de maths', 'Refaire les exercices de la dernière leçon de maths, sur le cahier cette fois. Comparer avec ce qui avait été trouvé.', 30, '', 'em-reprise-09'),
    (3, 'francais', 'Reprendre la leçon de français', 'Refaire les exercices de la dernière leçon de français, sur le cahier.', 25, '', ''),
    (4, 'francais', 'Copie soignée', 'Copier huit lignes d’un texte au choix, le plus soigneusement possible. On relit avant de rendre.', 20, '', 'ec-copie-07'),
    (5, 'francais', 'Lecture et questions', 'Un texte court, puis cinq questions : trois sur ce qui est écrit, deux sur ce qui se déduit.', 30, '', ''),
    (6, 'geographie', 'Les inégalités de niveau de vie — on reprend', 'On relit le cours, puis on refait les exercices. Tes calculs sur ton brouillon, le résultat sur l’écran.', 35, 'g-p2-inegalites', ''),
    (7, 'maison', 'Vélo', 'Une sortie. Repérer le trajet sur un plan avant de partir, puis le raconter au retour.', 30, '', 'dh-velo-07')
  ) as v (rang, matiere, titre, consigne, minutes, lecon, fiche)
 where j.famille_id = (select id from famille) and j.jour = '2026-12-11'
   and not exists (select 1 from seance s where s.journee_id = j.id);

insert into journee (famille_id, jour) select f.id, '2026-12-14' from famille f
  on conflict (famille_id, jour) do nothing;
insert into seance
  (journee_id, rang, matiere, titre, reference, consigne, minutes, lecon,
   fiche, par_adulte, origine)
select j.id, v.rang, v.matiere, v.titre, '', v.consigne, v.minutes, v.lecon,
       v.fiche, null, 'trame'
  from journee j
  cross join (values
    (1, 'maths', 'Ajouter 9, 19, 29', 'On ajoute la dizaine ronde et on retire 1. Dix questions, en disant la procédure à voix haute.', 15, '', 'cm-neuf-05'),
    (2, 'maths', 'Les multiples et les diviseurs — on reprend', 'On relit le cours, puis on refait les exercices. Tes calculs sur ton brouillon, le résultat sur l’écran.', 25, 'm-p2-multiples', ''),
    (3, 'francais', 'Comprendre un texte : l’explicite et l’implicite — on reprend', 'On relit le cours, puis on refait les exercices. Tes calculs sur ton brouillon, le résultat sur l’écran.', 25, 'f-p2-comprendre', ''),
    (4, 'francais', 'Dictée préparée', 'Le texte a été lu la veille. On le dicte, puis on compare avec l’original.', 20, '', 'ed-preparee-07'),
    (5, 'francais', 'Lecture d’un documentaire', 'Une double page documentaire. Relever la nature et la source du document avant de lire.', 30, '', ''),
    (6, 'francais', 'Décrire un lieu', 'Dix lignes sur un endroit que tu connais. Au moins trois adjectifs qui servent vraiment.', 25, '', 'rd-lieu-01'),
    (7, 'maison', 'Parcours et équilibre', 'Un parcours à installer soi-même : sauter, grimper, tenir en équilibre, ramper.', 30, '', 'dh-parcours-07')
  ) as v (rang, matiere, titre, consigne, minutes, lecon, fiche)
 where j.famille_id = (select id from famille) and j.jour = '2026-12-14'
   and not exists (select 1 from seance s where s.journee_id = j.id);

insert into journee (famille_id, jour) select f.id, '2026-12-15' from famille f
  on conflict (famille_id, jour) do nothing;
insert into seance
  (journee_id, rang, matiere, titre, reference, consigne, minutes, lecon,
   fiche, par_adulte, origine)
select j.id, v.rang, v.matiere, v.titre, '', v.consigne, v.minutes, v.lecon,
       v.fiche, null, 'trame'
  from journee j
  cross join (values
    (1, 'maths', 'Multiplier par 10, 100, 1 000', 'Dix questions rapides. Puis diviser par 10 : 320 ÷ 10, 4 500 ÷ 10.', 15, '', 'cm-dix-05'),
    (2, 'maths', 'Mesurer pour de vrai', 'Mesurer des objets de la maison, noter en deux unités différentes, comparer aux estimations faites avant.', 30, '', 'em-mesure-09'),
    (3, 'francais', 'Vocabulaire', 'Dix mots : trouver un synonyme, un contraire, et un mot de la même famille pour chacun.', 25, '', ''),
    (4, 'francais', 'Les mots invariables', 'Apprendre dix mots invariables, puis les écrire sous la dictée.', 20, '', 'ec-invar-07'),
    (5, 'francais', 'Poésie', 'Lire un poème à voix haute, plusieurs fois. Repérer les rimes et les images. En apprendre quatre vers.', 30, '', 'lf-poesie-07'),
    (6, 'anglais', 'La famille — on reprend', 'On relit le cours, puis on refait les exercices. Tes calculs sur ton brouillon, le résultat sur l’écran.', 25, 'a-p2-famille', ''),
    (7, 'maison', 'Marche et observation', 'Une marche d’une demi-heure. Rapporter trois choses observées, à noter ou à dessiner.', 30, '', 'dh-marche-07')
  ) as v (rang, matiere, titre, consigne, minutes, lecon, fiche)
 where j.famille_id = (select id from famille) and j.jour = '2026-12-15'
   and not exists (select 1 from seance s where s.journee_id = j.id);

insert into journee (famille_id, jour) select f.id, '2026-12-16' from famille f
  on conflict (famille_id, jour) do nothing;
insert into seance
  (journee_id, rang, matiere, titre, reference, consigne, minutes, lecon,
   fiche, par_adulte, origine)
select j.id, v.rang, v.matiere, v.titre, '', v.consigne, v.minutes, v.lecon,
       v.fiche, null, 'trame'
  from journee j
  cross join (values
    (1, 'maths', 'Multiplier par 4 et par 8', 'Par 4, c’est doubler deux fois. Par 8, trois fois. Dix questions en disant les étapes.', 15, '', 'cm-quatre-05'),
    (2, 'francais', 'Lecture à voix haute', 'Une page préparée, lue à voix haute en respectant la ponctuation. On marque au crayon où respirer.', 30, '', 'lt-voix-08'),
    (3, 'maison', 'La boîte à pourquoi', 'Prendre une question que tu as posée cette semaine, chercher la réponse ensemble, et s’arrêter quand on ne sait plus.', 45, '', '')
  ) as v (rang, matiere, titre, consigne, minutes, lecon, fiche)
 where j.famille_id = (select id from famille) and j.jour = '2026-12-16'
   and not exists (select 1 from seance s where s.journee_id = j.id);

insert into journee (famille_id, jour) select f.id, '2026-12-17' from famille f
  on conflict (famille_id, jour) do nothing;
insert into seance
  (journee_id, rang, matiere, titre, reference, consigne, minutes, lecon,
   fiche, par_adulte, origine)
select j.id, v.rang, v.matiere, v.titre, '', v.consigne, v.minutes, v.lecon,
       v.fiche, null, 'trame'
  from journee j
  cross join (values
    (1, 'maths', 'Multiplier par 5 et par 50', 'Par 5, c’est la moitié de par 10. Par 50, la moitié de par 100. Dix questions.', 15, '', 'cm-cinq-05'),
    (2, 'maths', 'Les longueurs, du millimètre au kilomètre — on reprend', 'On relit le cours, puis on refait les exercices. Tes calculs sur ton brouillon, le résultat sur l’écran.', 25, 'm-p2-longueurs', ''),
    (3, 'francais', 'Écrire un texte qui se tient — on reprend', 'On relit le cours, puis on refait les exercices. Tes calculs sur ton brouillon, le résultat sur l’écran.', 30, 'f-p2-ecrire', ''),
    (4, 'francais', 'Dictée à trous', 'Le texte est écrit, il manque les terminaisons des verbes. On les complète en justifiant.', 20, '', 'ed-trous-07'),
    (5, 'francais', 'Lecture de théâtre', 'Une scène, lue à deux voix. Les didascalies ne se disent pas : elles se jouent.', 30, '', 'lf-theatre-07'),
    (6, 'francais', 'Écrire une lettre', 'Une lettre à quelqu’un de la famille. Formule d’appel, corps, formule de fin.', 25, '', 'rd-lettre-07'),
    (7, 'maison', 'Danse et rythme', 'Suivre une pulsation, inventer une suite de mouvements de huit temps, la refaire à l’identique.', 30, '', 'dh-danse-07')
  ) as v (rang, matiere, titre, consigne, minutes, lecon, fiche)
 where j.famille_id = (select id from famille) and j.jour = '2026-12-17'
   and not exists (select 1 from seance s where s.journee_id = j.id);

insert into journee (famille_id, jour) select f.id, '2026-12-18' from famille f
  on conflict (famille_id, jour) do nothing;
insert into seance
  (journee_id, rang, matiere, titre, reference, consigne, minutes, lecon,
   fiche, par_adulte, origine)
select j.id, v.rang, v.matiere, v.titre, '', v.consigne, v.minutes, v.lecon,
       v.fiche, null, 'trame'
  from journee j
  cross join (values
    (1, 'maths', 'Les fractions d’une quantité', 'La moitié de 36, le tiers de 24, les trois quarts de 20. Dix questions à l’oral.', 15, '', 'cg-fractions-05'),
    (2, 'maths', 'Problèmes du jour', 'Trois problèmes sur le cahier. Pour chacun : ce qu’on cherche, ce qu’on sait, le calcul, la phrase de réponse.', 30, '', 'em-prob-10'),
    (3, 'francais', 'Conjugaison', 'Trois verbes, aux quatre temps connus, à toutes les personnes. Sur le cahier, sans modèle.', 25, '', ''),
    (4, 'francais', 'Auto-dictée', 'Apprendre quatre lignes par cœur la veille, les écrire de mémoire aujourd’hui.', 20, '', 'ed-auto-07'),
    (5, 'francais', 'Lecture libre', 'Le livre que tu veux, sans compte à rendre. On te demande seulement si tu as aimé, et pourquoi.', 30, '', 'lf-libre-03'),
    (6, 'emc', 'La République et ses symboles — on reprend', 'On relit le cours, puis on refait les exercices. Tes calculs sur ton brouillon, le résultat sur l’écran.', 30, 'e-p2-republique', ''),
    (7, 'maison', 'Jardinage ou bricolage', 'Planter, arroser, mesurer, réparer. Le travail des mains compte autant que le reste.', 30, '', 'dh-mains-07')
  ) as v (rang, matiere, titre, consigne, minutes, lecon, fiche)
 where j.famille_id = (select id from famille) and j.jour = '2026-12-18'
   and not exists (select 1 from seance s where s.journee_id = j.id);

insert into journee (famille_id, jour) select f.id, '2027-01-04' from famille f
  on conflict (famille_id, jour) do nothing;
insert into seance
  (journee_id, rang, matiere, titre, reference, consigne, minutes, lecon,
   fiche, par_adulte, origine)
select j.id, v.rang, v.matiere, v.titre, '', v.consigne, v.minutes, v.lecon,
       v.fiche, null, 'trame'
  from journee j
  cross join (values
    (1, 'maths', 'Les problèmes en une phrase', 'Cinq problèmes dictés, très courts. La réponse sur l’ardoise, sans écrire le calcul.', 15, '', 'cg-problemes-05'),
    (2, 'maths', 'Les grands nombres jusqu’à 999 999', 'Lis la leçon, puis fais les exercices. Tes calculs sur ton brouillon, le résultat sur l’écran.', 30, 'm-p3-grands-nombres', ''),
    (3, 'francais', 'Les pronoms personnels', 'Lis la leçon, puis fais les exercices. Tes calculs sur ton brouillon, le résultat sur l’écran.', 25, 'f-p3-pronoms', ''),
    (4, 'francais', 'Dictée de mots', 'Quinze mots de la liste en cours. On corrige ensemble, et on réécrit trois fois ceux qui ont hésité.', 20, '', 'ed-mots-08'),
    (5, 'francais', 'Lecture à voix haute', 'Une page préparée, lue à voix haute en respectant la ponctuation. On marque au crayon où respirer.', 30, '', 'lt-voix-08'),
    (6, 'sciences', 'La lumière et les ombres', 'Lis la leçon, puis fais les exercices. Tes calculs sur ton brouillon, le résultat sur l’écran.', 30, 's-p3-ombres', ''),
    (7, 'maison', 'Course et endurance', 'Courir sans s’arrêter, en augmentant un peu chaque semaine. On chronomètre, on ne compare à personne.', 30, '', 'dh-course-08')
  ) as v (rang, matiere, titre, consigne, minutes, lecon, fiche)
 where j.famille_id = (select id from famille) and j.jour = '2027-01-04'
   and not exists (select 1 from seance s where s.journee_id = j.id);

insert into journee (famille_id, jour) select f.id, '2027-01-05' from famille f
  on conflict (famille_id, jour) do nothing;
insert into seance
  (journee_id, rang, matiere, titre, reference, consigne, minutes, lecon,
   fiche, par_adulte, origine)
select j.id, v.rang, v.matiere, v.titre, '', v.consigne, v.minutes, v.lecon,
       v.fiche, null, 'trame'
  from journee j
  cross join (values
    (1, 'maths', 'Encadrer et arrondir', 'Entre quels milliers se trouve 6 480 ? Quel est l’arrondi de 12,94 ? Dix questions.', 15, '', 'cg-encadrer-05'),
    (2, 'maths', 'Géométrie : tracer', 'Un programme de construction à suivre à la règle, à l’équerre et au compas. La précision compte.', 30, '', 'em-trace-10'),
    (3, 'francais', 'Les homophones', 'Un texte à trous : a/à, est/et, son/sont, ont/on. Justifier chaque choix par le test de remplacement.', 25, '', ''),
    (4, 'francais', 'Dictée de phrases', 'Trois phrases. On souligne les verbes et on entoure les sujets avant de corriger.', 20, '', 'ed-phrases-08'),
    (5, 'francais', 'Lecture silencieuse', 'Vingt minutes dans le livre en cours, puis raconter ce qui vient de se passer.', 30, '', 'lt-silence-08'),
    (6, 'anglais', 'L’heure et la journée', 'Lis la leçon, puis fais les exercices. Tes calculs sur ton brouillon, le résultat sur l’écran.', 30, 'a-p3-heure', ''),
    (7, 'maison', 'Jeux de ballon', 'Passes, tirs, jonglages. Compter les réussites de suite, battre son propre score.', 30, '', 'dh-ballon-08')
  ) as v (rang, matiere, titre, consigne, minutes, lecon, fiche)
 where j.famille_id = (select id from famille) and j.jour = '2027-01-05'
   and not exists (select 1 from seance s where s.journee_id = j.id);

insert into journee (famille_id, jour) select f.id, '2027-01-06' from famille f
  on conflict (famille_id, jour) do nothing;
insert into seance
  (journee_id, rang, matiere, titre, reference, consigne, minutes, lecon,
   fiche, par_adulte, origine)
select j.id, v.rang, v.matiere, v.titre, '', v.consigne, v.minutes, v.lecon,
       v.fiche, null, 'trame'
  from journee j
  cross join (values
    (1, 'maths', 'Les unités de mesure', 'Combien de grammes dans 2 kg 500 ? De centimètres dans 3 m 50 ? Dix questions.', 15, '', 'cg-unites-05'),
    (2, 'geographie', 'Se repérer sur un planisphère', 'Lis la leçon, puis fais les exercices. Tes calculs sur ton brouillon, le résultat sur l’écran.', 35, 'g-p3-aires', ''),
    (3, 'maison', 'Construire quelque chose', 'Un objet qui marche : un pont en papier qui porte un livre, un moulin, un circuit. Croquis d’abord.', 45, '', '')
  ) as v (rang, matiere, titre, consigne, minutes, lecon, fiche)
 where j.famille_id = (select id from famille) and j.jour = '2027-01-06'
   and not exists (select 1 from seance s where s.journee_id = j.id);

insert into journee (famille_id, jour) select f.id, '2027-01-07' from famille f
  on conflict (famille_id, jour) do nothing;
insert into seance
  (journee_id, rang, matiere, titre, reference, consigne, minutes, lecon,
   fiche, par_adulte, origine)
select j.id, v.rang, v.matiere, v.titre, '', v.consigne, v.minutes, v.lecon,
       v.fiche, null, 'trame'
  from journee j
  cross join (values
    (1, 'maths', 'Les durées', 'De 8 h 45 à 12 h 30, combien de temps ? Cinq calculs de durée, à l’oral.', 15, '', 'cg-durees-05'),
    (2, 'maths', 'L’écriture à virgule', 'Lis la leçon, puis fais les exercices. Tes calculs sur ton brouillon, le résultat sur l’écran.', 30, 'm-p3-virgule', ''),
    (3, 'francais', 'L’adjectif épithète', 'Lis la leçon, puis fais les exercices. Tes calculs sur ton brouillon, le résultat sur l’écran.', 20, 'f-p3-epithete', ''),
    (4, 'francais', 'Dictée préparée', 'Le texte a été lu la veille. On le dicte, puis on compare avec l’original.', 20, '', 'ed-preparee-08'),
    (5, 'francais', 'Lecture d’un documentaire', 'Une double page documentaire. Relever la nature et la source du document avant de lire.', 30, '', ''),
    (6, 'arts', 'Regarder une image', 'Lis la leçon, puis fais les exercices. Tes calculs sur ton brouillon, le résultat sur l’écran.', 25, 'ar-p3-image', ''),
    (7, 'maison', 'Parcours et équilibre', 'Un parcours à installer soi-même : sauter, grimper, tenir en équilibre, ramper.', 30, '', 'dh-parcours-08')
  ) as v (rang, matiere, titre, consigne, minutes, lecon, fiche)
 where j.famille_id = (select id from famille) and j.jour = '2027-01-07'
   and not exists (select 1 from seance s where s.journee_id = j.id);

insert into journee (famille_id, jour) select f.id, '2027-01-08' from famille f
  on conflict (famille_id, jour) do nothing;
insert into seance
  (journee_id, rang, matiere, titre, reference, consigne, minutes, lecon,
   fiche, par_adulte, origine)
select j.id, v.rang, v.matiere, v.titre, '', v.consigne, v.minutes, v.lecon,
       v.fiche, null, 'trame'
  from journee j
  cross join (values
    (1, 'maths', 'Les tables de multiplication', 'Dix multiplications dictées, à l’ardoise. On efface entre chaque. On redit celles qui ont hésité.', 15, '', 'cm-tables-06'),
    (2, 'maths', 'Opérations posées', 'Quatre additions, quatre soustractions, deux multiplications. Estimer avant, vérifier après.', 30, '', 'em-ops-03'),
    (3, 'francais', 'Analyser des phrases', 'Cinq phrases : souligner le sujet, entourer le verbe, encadrer les compléments. Dire lesquels se déplacent.', 25, '', 'ef-phrases-04'),
    (4, 'francais', 'Les mots invariables', 'Apprendre dix mots invariables, puis les écrire sous la dictée.', 20, '', 'ec-invar-08'),
    (5, 'francais', 'Poésie', 'Lire un poème à voix haute, plusieurs fois. Repérer les rimes et les images. En apprendre quatre vers.', 30, '', 'lf-poesie-08'),
    (6, 'francais', 'Donner son avis', 'Ce que je pense, pourquoi, un exemple. Huit lignes. Les trois morceaux doivent y être.', 25, '', 'rd-avis-01'),
    (7, 'maison', 'Marche et observation', 'Une marche d’une demi-heure. Rapporter trois choses observées, à noter ou à dessiner.', 30, '', 'dh-marche-08')
  ) as v (rang, matiere, titre, consigne, minutes, lecon, fiche)
 where j.famille_id = (select id from famille) and j.jour = '2027-01-08'
   and not exists (select 1 from seance s where s.journee_id = j.id);

insert into journee (famille_id, jour) select f.id, '2027-01-11' from famille f
  on conflict (famille_id, jour) do nothing;
insert into seance
  (journee_id, rang, matiere, titre, reference, consigne, minutes, lecon,
   fiche, par_adulte, origine)
select j.id, v.rang, v.matiere, v.titre, '', v.consigne, v.minutes, v.lecon,
       v.fiche, null, 'trame'
  from journee j
  cross join (values
    (1, 'maths', 'Les doubles et les moitiés', 'Le double de 45, la moitié de 68, le double de 250… Dix questions, à l’oral.', 15, '', 'cm-doubles-06'),
    (2, 'maths', 'Problèmes du jour', 'Trois problèmes sur le cahier. Pour chacun : ce qu’on cherche, ce qu’on sait, le calcul, la phrase de réponse.', 30, '', 'em-prob-01'),
    (3, 'francais', 'Conjugaison', 'Trois verbes, aux quatre temps connus, à toutes les personnes. Sur le cahier, sans modèle.', 25, '', ''),
    (4, 'francais', 'Transformer des phrases', 'Mettre cinq phrases au pluriel, en respectant toute la chaîne d’accords. À l’écrit.', 20, '', 'ec-transf-08'),
    (5, 'francais', 'Lecture d’une bande dessinée', 'Une planche. Puis expliquer ce que les images racontent et que le texte ne dit pas.', 30, '', 'lf-bd-08'),
    (6, 'histoire', 'Henri IV et les guerres de religion', 'Lis la leçon, puis fais les exercices. Tes calculs sur ton brouillon, le résultat sur l’écran.', 30, 'h-p3-henri-iv', ''),
    (7, 'maison', 'Jeux de raquette', 'Échanges contre un mur ou à deux. Compter les échanges tenus sans faute.', 30, '', 'dh-raquette-08')
  ) as v (rang, matiere, titre, consigne, minutes, lecon, fiche)
 where j.famille_id = (select id from famille) and j.jour = '2027-01-11'
   and not exists (select 1 from seance s where s.journee_id = j.id);

insert into journee (famille_id, jour) select f.id, '2027-01-12' from famille f
  on conflict (famille_id, jour) do nothing;
insert into seance
  (journee_id, rang, matiere, titre, reference, consigne, minutes, lecon,
   fiche, par_adulte, origine)
select j.id, v.rang, v.matiere, v.titre, '', v.consigne, v.minutes, v.lecon,
       v.fiche, null, 'trame'
  from journee j
  cross join (values
    (1, 'maths', 'Les compléments à 100', 'Combien manque-t-il à 67 pour aller à 100 ? Dix questions. Puis les compléments à 1 000.', 15, '', 'cm-cent-06'),
    (2, 'maths', 'Comparer et ranger les nombres décimaux', 'Lis la leçon, puis fais les exercices. Tes calculs sur ton brouillon, le résultat sur l’écran.', 25, 'm-p3-comparer-decimaux', ''),
    (3, 'francais', 'L’accord du sujet et du verbe', 'Lis la leçon, puis fais les exercices. Tes calculs sur ton brouillon, le résultat sur l’écran.', 30, 'f-p3-accord-sujet-verbe', ''),
    (4, 'francais', 'Dictée à trous', 'Le texte est écrit, il manque les terminaisons des verbes. On les complète en justifiant.', 20, '', 'ed-trous-08'),
    (5, 'francais', 'Lecture de théâtre', 'Une scène, lue à deux voix. Les didascalies ne se disent pas : elles se jouent.', 30, '', 'lf-theatre-08'),
    (6, 'francais', 'Écrire une lettre', 'Une lettre à quelqu’un de la famille. Formule d’appel, corps, formule de fin.', 25, '', 'rd-lettre-08'),
    (7, 'maison', 'Danse et rythme', 'Suivre une pulsation, inventer une suite de mouvements de huit temps, la refaire à l’identique.', 30, '', 'dh-danse-08')
  ) as v (rang, matiere, titre, consigne, minutes, lecon, fiche)
 where j.famille_id = (select id from famille) and j.jour = '2027-01-12'
   and not exists (select 1 from seance s where s.journee_id = j.id);

insert into journee (famille_id, jour) select f.id, '2027-01-13' from famille f
  on conflict (famille_id, jour) do nothing;
insert into seance
  (journee_id, rang, matiere, titre, reference, consigne, minutes, lecon,
   fiche, par_adulte, origine)
select j.id, v.rang, v.matiere, v.titre, '', v.consigne, v.minutes, v.lecon,
       v.fiche, null, 'trame'
  from journee j
  cross join (values
    (1, 'maths', 'Ajouter 9, 19, 29', 'On ajoute la dizaine ronde et on retire 1. Dix questions, en disant la procédure à voix haute.', 15, '', 'cm-neuf-06'),
    (2, 'sciences', 'Les phases de la Lune', 'Lis la leçon, puis fais les exercices. Tes calculs sur ton brouillon, le résultat sur l’écran.', 30, 's-p3-lune', ''),
    (3, 'maison', 'Une sortie', 'Marché, médiathèque, musée, chantier, gare, ferme. On prépare une question avant de partir, et on y répond au retour.', 45, '', '')
  ) as v (rang, matiere, titre, consigne, minutes, lecon, fiche)
 where j.famille_id = (select id from famille) and j.jour = '2027-01-13'
   and not exists (select 1 from seance s where s.journee_id = j.id);

insert into journee (famille_id, jour) select f.id, '2027-01-14' from famille f
  on conflict (famille_id, jour) do nothing;
insert into seance
  (journee_id, rang, matiere, titre, reference, consigne, minutes, lecon,
   fiche, par_adulte, origine)
select j.id, v.rang, v.matiere, v.titre, '', v.consigne, v.minutes, v.lecon,
       v.fiche, null, 'trame'
  from journee j
  cross join (values
    (1, 'maths', 'Multiplier par 10, 100, 1 000', 'Dix questions rapides. Puis diviser par 10 : 320 ÷ 10, 4 500 ÷ 10.', 15, '', 'cm-dix-06'),
    (2, 'maths', 'Mesurer pour de vrai', 'Mesurer des objets de la maison, noter en deux unités différentes, comparer aux estimations faites avant.', 30, '', 'em-mesure-11'),
    (3, 'francais', 'Vocabulaire', 'Dix mots : trouver un synonyme, un contraire, et un mot de la même famille pour chacun.', 25, '', ''),
    (4, 'francais', 'Dictée de mots', 'Quinze mots de la liste en cours. On corrige ensemble, et on réécrit trois fois ceux qui ont hésité.', 20, '', 'ed-mots-09'),
    (5, 'francais', 'Lecture à voix haute', 'Une page préparée, lue à voix haute en respectant la ponctuation. On marque au crayon où respirer.', 30, '', 'lt-voix-09'),
    (6, 'francais', 'Écrire la suite', 'Lire le début d’un récit, puis en écrire la suite : dix lignes. Brouillon d’abord.', 25, '', 'rd-suite-03'),
    (7, 'maison', 'Course et endurance', 'Courir sans s’arrêter, en augmentant un peu chaque semaine. On chronomètre, on ne compare à personne.', 30, '', 'dh-course-09')
  ) as v (rang, matiere, titre, consigne, minutes, lecon, fiche)
 where j.famille_id = (select id from famille) and j.jour = '2027-01-14'
   and not exists (select 1 from seance s where s.journee_id = j.id);

insert into journee (famille_id, jour) select f.id, '2027-01-15' from famille f
  on conflict (famille_id, jour) do nothing;
insert into seance
  (journee_id, rang, matiere, titre, reference, consigne, minutes, lecon,
   fiche, par_adulte, origine)
select j.id, v.rang, v.matiere, v.titre, '', v.consigne, v.minutes, v.lecon,
       v.fiche, null, 'trame'
  from journee j
  cross join (values
    (1, 'maths', 'Multiplier par 4 et par 8', 'Par 4, c’est doubler deux fois. Par 8, trois fois. Dix questions en disant les étapes.', 15, '', 'cm-quatre-06'),
    (2, 'maths', 'Le nombre du jour', 'Un nombre au tableau. Le décomposer de cinq façons, l’encadrer, dire son nombre de centaines, le doubler.', 30, '', 'em-nombre-11'),
    (3, 'francais', 'Le dictionnaire', 'Chercher cinq mots rencontrés cette semaine. Relever la nature du mot et ses différents sens.', 25, '', ''),
    (4, 'francais', 'Dictée de phrases', 'Trois phrases. On souligne les verbes et on entoure les sujets avant de corriger.', 20, '', 'ed-phrases-09'),
    (5, 'francais', 'Lecture silencieuse', 'Vingt minutes dans le livre en cours, puis raconter ce qui vient de se passer.', 30, '', 'lt-silence-09'),
    (6, 'francais', 'Raconter sa journée d’hier', 'Dix lignes au passé. Vérifier que les temps ne changent pas en cours de route.', 25, '', 'rd-hier-09'),
    (7, 'maison', 'Jeux de ballon', 'Passes, tirs, jonglages. Compter les réussites de suite, battre son propre score.', 30, '', 'dh-ballon-09')
  ) as v (rang, matiere, titre, consigne, minutes, lecon, fiche)
 where j.famille_id = (select id from famille) and j.jour = '2027-01-15'
   and not exists (select 1 from seance s where s.journee_id = j.id);

insert into journee (famille_id, jour) select f.id, '2027-01-18' from famille f
  on conflict (famille_id, jour) do nothing;
insert into seance
  (journee_id, rang, matiere, titre, reference, consigne, minutes, lecon,
   fiche, par_adulte, origine)
select j.id, v.rang, v.matiere, v.titre, '', v.consigne, v.minutes, v.lecon,
       v.fiche, null, 'trame'
  from journee j
  cross join (values
    (1, 'maths', 'Multiplier par 5 et par 50', 'Par 5, c’est la moitié de par 10. Par 50, la moitié de par 100. Dix questions.', 15, '', 'cm-cinq-06'),
    (2, 'maths', 'La division posée', 'Lis la leçon, puis fais les exercices. Tes calculs sur ton brouillon, le résultat sur l’écran.', 35, 'm-p3-division', ''),
    (3, 'francais', 'Synonymes et contraires', 'Lis la leçon, puis fais les exercices. Tes calculs sur ton brouillon, le résultat sur l’écran.', 25, 'f-p3-synonymes', ''),
    (4, 'francais', 'Copie soignée', 'Copier huit lignes d’un texte au choix, le plus soigneusement possible. On relit avant de rendre.', 20, '', 'ec-copie-09'),
    (5, 'francais', 'Lecture et questions', 'Un texte court, puis cinq questions : trois sur ce qui est écrit, deux sur ce qui se déduit.', 30, '', ''),
    (6, 'geographie', 'L’inégal accès à l’eau, à la santé, à l’école', 'Lis la leçon, puis fais les exercices. Tes calculs sur ton brouillon, le résultat sur l’écran.', 30, 'g-p3-acces', ''),
    (7, 'maison', 'Vélo', 'Une sortie. Repérer le trajet sur un plan avant de partir, puis le raconter au retour.', 30, '', 'dh-velo-09')
  ) as v (rang, matiere, titre, consigne, minutes, lecon, fiche)
 where j.famille_id = (select id from famille) and j.jour = '2027-01-18'
   and not exists (select 1 from seance s where s.journee_id = j.id);

insert into journee (famille_id, jour) select f.id, '2027-01-19' from famille f
  on conflict (famille_id, jour) do nothing;
insert into seance
  (journee_id, rang, matiere, titre, reference, consigne, minutes, lecon,
   fiche, par_adulte, origine)
select j.id, v.rang, v.matiere, v.titre, '', v.consigne, v.minutes, v.lecon,
       v.fiche, null, 'trame'
  from journee j
  cross join (values
    (1, 'maths', 'Les fractions d’une quantité', 'La moitié de 36, le tiers de 24, les trois quarts de 20. Dix questions à l’oral.', 15, '', 'cg-fractions-06'),
    (2, 'maths', 'Problèmes du jour', 'Trois problèmes sur le cahier. Pour chacun : ce qu’on cherche, ce qu’on sait, le calcul, la phrase de réponse.', 30, '', 'em-prob-02'),
    (3, 'francais', 'Conjugaison', 'Trois verbes, aux quatre temps connus, à toutes les personnes. Sur le cahier, sans modèle.', 25, '', ''),
    (4, 'francais', 'Dictée préparée', 'Le texte a été lu la veille. On le dicte, puis on compare avec l’original.', 20, '', 'ed-preparee-09'),
    (5, 'francais', 'Lecture d’un documentaire', 'Une double page documentaire. Relever la nature et la source du document avant de lire.', 30, '', ''),
    (6, 'emc', 'Le respect et les différences', 'Lis la leçon, puis fais les exercices. Tes calculs sur ton brouillon, le résultat sur l’écran.', 30, 'e-p3-differences', ''),
    (7, 'maison', 'Parcours et équilibre', 'Un parcours à installer soi-même : sauter, grimper, tenir en équilibre, ramper.', 30, '', 'dh-parcours-09')
  ) as v (rang, matiere, titre, consigne, minutes, lecon, fiche)
 where j.famille_id = (select id from famille) and j.jour = '2027-01-19'
   and not exists (select 1 from seance s where s.journee_id = j.id);

insert into journee (famille_id, jour) select f.id, '2027-01-20' from famille f
  on conflict (famille_id, jour) do nothing;
insert into seance
  (journee_id, rang, matiere, titre, reference, consigne, minutes, lecon,
   fiche, par_adulte, origine)
select j.id, v.rang, v.matiere, v.titre, '', v.consigne, v.minutes, v.lecon,
       v.fiche, null, 'trame'
  from journee j
  cross join (values
    (1, 'maths', 'Les problèmes en une phrase', 'Cinq problèmes dictés, très courts. La réponse sur l’ardoise, sans écrire le calcul.', 15, '', 'cg-problemes-06'),
    (2, 'histoire', 'Louis XIV, Versailles et la société d’ordres', 'Lis la leçon, puis fais les exercices. Tes calculs sur ton brouillon, le résultat sur l’écran.', 30, 'h-p3-louis-xiv', ''),
    (3, 'maison', 'Démonter un objet', 'Un vieil appareil, un stylo, une serrure. Nommer les pièces et dire à quoi chacune sert.', 45, '', '')
  ) as v (rang, matiere, titre, consigne, minutes, lecon, fiche)
 where j.famille_id = (select id from famille) and j.jour = '2027-01-20'
   and not exists (select 1 from seance s where s.journee_id = j.id);

insert into journee (famille_id, jour) select f.id, '2027-01-21' from famille f
  on conflict (famille_id, jour) do nothing;
insert into seance
  (journee_id, rang, matiere, titre, reference, consigne, minutes, lecon,
   fiche, par_adulte, origine)
select j.id, v.rang, v.matiere, v.titre, '', v.consigne, v.minutes, v.lecon,
       v.fiche, null, 'trame'
  from journee j
  cross join (values
    (1, 'maths', 'Encadrer et arrondir', 'Entre quels milliers se trouve 6 480 ? Quel est l’arrondi de 12,94 ? Dix questions.', 15, '', 'cg-encadrer-06'),
    (2, 'maths', 'Les masses et les contenances', 'Lis la leçon, puis fais les exercices. Tes calculs sur ton brouillon, le résultat sur l’écran.', 25, 'm-p3-masses-contenances', ''),
    (3, 'francais', 'Le dialogue dans un récit', 'Lis la leçon, puis fais les exercices. Tes calculs sur ton brouillon, le résultat sur l’écran.', 25, 'f-p3-dialogue', ''),
    (4, 'francais', 'Transformer des phrases', 'Mettre cinq phrases au pluriel, en respectant toute la chaîne d’accords. À l’écrit.', 20, '', 'ec-transf-09'),
    (5, 'francais', 'Lecture d’une bande dessinée', 'Une planche. Puis expliquer ce que les images racontent et que le texte ne dit pas.', 30, '', 'lf-bd-09'),
    (6, 'francais', 'Expliquer une règle', 'Réécrire avec tes mots une leçon de la semaine, pour quelqu’un qui ne l’a pas eue.', 25, '', 'rd-regle-01'),
    (7, 'maison', 'Jeux de raquette', 'Échanges contre un mur ou à deux. Compter les échanges tenus sans faute.', 30, '', 'dh-raquette-09')
  ) as v (rang, matiere, titre, consigne, minutes, lecon, fiche)
 where j.famille_id = (select id from famille) and j.jour = '2027-01-21'
   and not exists (select 1 from seance s where s.journee_id = j.id);

insert into journee (famille_id, jour) select f.id, '2027-01-22' from famille f
  on conflict (famille_id, jour) do nothing;
insert into seance
  (journee_id, rang, matiere, titre, reference, consigne, minutes, lecon,
   fiche, par_adulte, origine)
select j.id, v.rang, v.matiere, v.titre, '', v.consigne, v.minutes, v.lecon,
       v.fiche, null, 'trame'
  from journee j
  cross join (values
    (1, 'maths', 'Les unités de mesure', 'Combien de grammes dans 2 kg 500 ? De centimètres dans 3 m 50 ? Dix questions.', 15, '', 'cg-unites-06'),
    (2, 'maths', 'Mesurer pour de vrai', 'Mesurer des objets de la maison, noter en deux unités différentes, comparer aux estimations faites avant.', 30, '', 'em-mesure-12'),
    (3, 'francais', 'Vocabulaire', 'Dix mots : trouver un synonyme, un contraire, et un mot de la même famille pour chacun.', 25, '', ''),
    (4, 'francais', 'Dictée à trous', 'Le texte est écrit, il manque les terminaisons des verbes. On les complète en justifiant.', 20, '', 'ed-trous-09'),
    (5, 'francais', 'Lecture de théâtre', 'Une scène, lue à deux voix. Les didascalies ne se disent pas : elles se jouent.', 30, '', 'lf-theatre-09'),
    (6, 'francais', 'Écrire une lettre', 'Une lettre à quelqu’un de la famille. Formule d’appel, corps, formule de fin.', 25, '', 'rd-lettre-09'),
    (7, 'maison', 'Danse et rythme', 'Suivre une pulsation, inventer une suite de mouvements de huit temps, la refaire à l’identique.', 30, '', 'dh-danse-09')
  ) as v (rang, matiere, titre, consigne, minutes, lecon, fiche)
 where j.famille_id = (select id from famille) and j.jour = '2027-01-22'
   and not exists (select 1 from seance s where s.journee_id = j.id);

insert into journee (famille_id, jour) select f.id, '2027-01-25' from famille f
  on conflict (famille_id, jour) do nothing;
insert into seance
  (journee_id, rang, matiere, titre, reference, consigne, minutes, lecon,
   fiche, par_adulte, origine)
select j.id, v.rang, v.matiere, v.titre, '', v.consigne, v.minutes, v.lecon,
       v.fiche, null, 'trame'
  from journee j
  cross join (values
    (1, 'maths', 'Les durées', 'De 8 h 45 à 12 h 30, combien de temps ? Cinq calculs de durée, à l’oral.', 15, '', 'cg-durees-06'),
    (2, 'maths', 'Le nombre du jour', 'Un nombre au tableau. Le décomposer de cinq façons, l’encadrer, dire son nombre de centaines, le doubler.', 30, '', 'em-nombre-12'),
    (3, 'francais', 'Le dictionnaire', 'Chercher cinq mots rencontrés cette semaine. Relever la nature du mot et ses différents sens.', 25, '', ''),
    (4, 'francais', 'Auto-dictée', 'Apprendre quatre lignes par cœur la veille, les écrire de mémoire aujourd’hui.', 20, '', 'ed-auto-09'),
    (5, 'francais', 'Lecture libre', 'Le livre que tu veux, sans compte à rendre. On te demande seulement si tu as aimé, et pourquoi.', 30, '', 'lf-libre-01'),
    (6, 'arts', 'Regarder une image — on reprend', 'On relit le cours, puis on refait les exercices. Tes calculs sur ton brouillon, le résultat sur l’écran.', 25, 'ar-p3-image', ''),
    (7, 'maison', 'Jardinage ou bricolage', 'Planter, arroser, mesurer, réparer. Le travail des mains compte autant que le reste.', 30, '', 'dh-mains-09')
  ) as v (rang, matiere, titre, consigne, minutes, lecon, fiche)
 where j.famille_id = (select id from famille) and j.jour = '2027-01-25'
   and not exists (select 1 from seance s where s.journee_id = j.id);

insert into journee (famille_id, jour) select f.id, '2027-01-26' from famille f
  on conflict (famille_id, jour) do nothing;
insert into seance
  (journee_id, rang, matiere, titre, reference, consigne, minutes, lecon,
   fiche, par_adulte, origine)
select j.id, v.rang, v.matiere, v.titre, '', v.consigne, v.minutes, v.lecon,
       v.fiche, null, 'trame'
  from journee j
  cross join (values
    (1, 'maths', 'Les tables de multiplication', 'Dix multiplications dictées, à l’ardoise. On efface entre chaque. On redit celles qui ont hésité.', 15, '', 'cm-tables-07'),
    (2, 'maths', 'Le périmètre', 'Lis la leçon, puis fais les exercices. Tes calculs sur ton brouillon, le résultat sur l’écran.', 25, 'm-p3-perimetre', ''),
    (3, 'francais', 'Reconnaître un poème, une pièce, un récit', 'Lis la leçon, puis fais les exercices. Tes calculs sur ton brouillon, le résultat sur l’écran.', 25, 'f-p3-genres', ''),
    (4, 'francais', 'Dictée de mots', 'Quinze mots de la liste en cours. On corrige ensemble, et on réécrit trois fois ceux qui ont hésité.', 20, '', 'ed-mots-10'),
    (5, 'francais', 'Lecture à voix haute', 'Une page préparée, lue à voix haute en respectant la ponctuation. On marque au crayon où respirer.', 30, '', 'lt-voix-10'),
    (6, 'francais', 'Écrire la suite', 'Lire le début d’un récit, puis en écrire la suite : dix lignes. Brouillon d’abord.', 25, '', 'rd-suite-04'),
    (7, 'maison', 'Course et endurance', 'Courir sans s’arrêter, en augmentant un peu chaque semaine. On chronomètre, on ne compare à personne.', 30, '', 'dh-course-10')
  ) as v (rang, matiere, titre, consigne, minutes, lecon, fiche)
 where j.famille_id = (select id from famille) and j.jour = '2027-01-26'
   and not exists (select 1 from seance s where s.journee_id = j.id);

insert into journee (famille_id, jour) select f.id, '2027-01-27' from famille f
  on conflict (famille_id, jour) do nothing;
insert into seance
  (journee_id, rang, matiere, titre, reference, consigne, minutes, lecon,
   fiche, par_adulte, origine)
select j.id, v.rang, v.matiere, v.titre, '', v.consigne, v.minutes, v.lecon,
       v.fiche, null, 'trame'
  from journee j
  cross join (values
    (1, 'maths', 'Les doubles et les moitiés', 'Le double de 45, la moitié de 68, le double de 250… Dix questions, à l’oral.', 15, '', 'cm-doubles-07'),
    (2, 'francais', 'Poésie', 'Lire un poème à voix haute, plusieurs fois. Repérer les rimes et les images. En apprendre quatre vers.', 30, '', 'lf-poesie-10'),
    (3, 'maison', 'Une carte', 'Dessiner le plan du quartier de mémoire, puis le comparer à une vraie carte. Chercher ce qui manque.', 45, '', '')
  ) as v (rang, matiere, titre, consigne, minutes, lecon, fiche)
 where j.famille_id = (select id from famille) and j.jour = '2027-01-27'
   and not exists (select 1 from seance s where s.journee_id = j.id);

insert into journee (famille_id, jour) select f.id, '2027-01-28' from famille f
  on conflict (famille_id, jour) do nothing;
insert into seance
  (journee_id, rang, matiere, titre, reference, consigne, minutes, lecon,
   fiche, par_adulte, origine)
select j.id, v.rang, v.matiere, v.titre, '', v.consigne, v.minutes, v.lecon,
       v.fiche, null, 'trame'
  from journee j
  cross join (values
    (1, 'maths', 'Les compléments à 100', 'Combien manque-t-il à 67 pour aller à 100 ? Dix questions. Puis les compléments à 1 000.', 15, '', 'cm-cent-07'),
    (2, 'maths', 'Reprendre la leçon de maths', 'Refaire les exercices de la dernière leçon de maths, sur le cahier cette fois. Comparer avec ce qui avait été trouvé.', 30, '', 'em-reprise-01'),
    (3, 'francais', 'Reprendre la leçon de français', 'Refaire les exercices de la dernière leçon de français, sur le cahier.', 25, '', ''),
    (4, 'francais', 'Copie soignée', 'Copier huit lignes d’un texte au choix, le plus soigneusement possible. On relit avant de rendre.', 20, '', 'ec-copie-10'),
    (5, 'francais', 'Lecture et questions', 'Un texte court, puis cinq questions : trois sur ce qui est écrit, deux sur ce qui se déduit.', 30, '', ''),
    (6, 'geographie', 'Se repérer sur un planisphère — on reprend', 'On relit le cours, puis on refait les exercices. Tes calculs sur ton brouillon, le résultat sur l’écran.', 35, 'g-p3-aires', ''),
    (7, 'maison', 'Vélo', 'Une sortie. Repérer le trajet sur un plan avant de partir, puis le raconter au retour.', 30, '', 'dh-velo-10')
  ) as v (rang, matiere, titre, consigne, minutes, lecon, fiche)
 where j.famille_id = (select id from famille) and j.jour = '2027-01-28'
   and not exists (select 1 from seance s where s.journee_id = j.id);

insert into journee (famille_id, jour) select f.id, '2027-01-29' from famille f
  on conflict (famille_id, jour) do nothing;
insert into seance
  (journee_id, rang, matiere, titre, reference, consigne, minutes, lecon,
   fiche, par_adulte, origine)
select j.id, v.rang, v.matiere, v.titre, '', v.consigne, v.minutes, v.lecon,
       v.fiche, null, 'trame'
  from journee j
  cross join (values
    (1, 'maths', 'Ajouter 9, 19, 29', 'On ajoute la dizaine ronde et on retire 1. Dix questions, en disant la procédure à voix haute.', 15, '', 'cm-neuf-07'),
    (2, 'maths', 'Géométrie : tracer', 'Un programme de construction à suivre à la règle, à l’équerre et au compas. La précision compte.', 30, '', 'em-trace-02'),
    (3, 'francais', 'Les homophones', 'Un texte à trous : a/à, est/et, son/sont, ont/on. Justifier chaque choix par le test de remplacement.', 25, '', ''),
    (4, 'francais', 'Dictée préparée', 'Le texte a été lu la veille. On le dicte, puis on compare avec l’original.', 20, '', 'ed-preparee-10'),
    (5, 'francais', 'Lecture d’un documentaire', 'Une double page documentaire. Relever la nature et la source du document avant de lire.', 30, '', ''),
    (6, 'francais', 'Décrire un lieu', 'Dix lignes sur un endroit que tu connais. Au moins trois adjectifs qui servent vraiment.', 25, '', 'rd-lieu-04'),
    (7, 'maison', 'Parcours et équilibre', 'Un parcours à installer soi-même : sauter, grimper, tenir en équilibre, ramper.', 30, '', 'dh-parcours-10')
  ) as v (rang, matiere, titre, consigne, minutes, lecon, fiche)
 where j.famille_id = (select id from famille) and j.jour = '2027-01-29'
   and not exists (select 1 from seance s where s.journee_id = j.id);

insert into journee (famille_id, jour) select f.id, '2027-02-01' from famille f
  on conflict (famille_id, jour) do nothing;
insert into seance
  (journee_id, rang, matiere, titre, reference, consigne, minutes, lecon,
   fiche, par_adulte, origine)
select j.id, v.rang, v.matiere, v.titre, '', v.consigne, v.minutes, v.lecon,
       v.fiche, null, 'trame'
  from journee j
  cross join (values
    (1, 'maths', 'Multiplier par 10, 100, 1 000', 'Dix questions rapides. Puis diviser par 10 : 320 ÷ 10, 4 500 ÷ 10.', 15, '', 'cm-dix-07'),
    (2, 'maths', 'Les grands nombres jusqu’à 999 999 — on reprend', 'On relit le cours, puis on refait les exercices. Tes calculs sur ton brouillon, le résultat sur l’écran.', 30, 'm-p3-grands-nombres', ''),
    (3, 'francais', 'Les pronoms personnels — on reprend', 'On relit le cours, puis on refait les exercices. Tes calculs sur ton brouillon, le résultat sur l’écran.', 25, 'f-p3-pronoms', ''),
    (4, 'francais', 'Les mots invariables', 'Apprendre dix mots invariables, puis les écrire sous la dictée.', 20, '', 'ec-invar-10'),
    (5, 'francais', 'Poésie', 'Lire un poème à voix haute, plusieurs fois. Repérer les rimes et les images. En apprendre quatre vers.', 30, '', 'lf-poesie-10'),
    (6, 'anglais', 'L’heure et la journée — on reprend', 'On relit le cours, puis on refait les exercices. Tes calculs sur ton brouillon, le résultat sur l’écran.', 30, 'a-p3-heure', ''),
    (7, 'maison', 'Marche et observation', 'Une marche d’une demi-heure. Rapporter trois choses observées, à noter ou à dessiner.', 30, '', 'dh-marche-10')
  ) as v (rang, matiere, titre, consigne, minutes, lecon, fiche)
 where j.famille_id = (select id from famille) and j.jour = '2027-02-01'
   and not exists (select 1 from seance s where s.journee_id = j.id);

insert into journee (famille_id, jour) select f.id, '2027-02-02' from famille f
  on conflict (famille_id, jour) do nothing;
insert into seance
  (journee_id, rang, matiere, titre, reference, consigne, minutes, lecon,
   fiche, par_adulte, origine)
select j.id, v.rang, v.matiere, v.titre, '', v.consigne, v.minutes, v.lecon,
       v.fiche, null, 'trame'
  from journee j
  cross join (values
    (1, 'maths', 'Multiplier par 4 et par 8', 'Par 4, c’est doubler deux fois. Par 8, trois fois. Dix questions en disant les étapes.', 15, '', 'cm-quatre-07'),
    (2, 'maths', 'Le nombre du jour', 'Un nombre au tableau. Le décomposer de cinq façons, l’encadrer, dire son nombre de centaines, le doubler.', 30, '', 'em-nombre-13'),
    (3, 'francais', 'Le dictionnaire', 'Chercher cinq mots rencontrés cette semaine. Relever la nature du mot et ses différents sens.', 25, '', ''),
    (4, 'francais', 'Transformer des phrases', 'Mettre cinq phrases au pluriel, en respectant toute la chaîne d’accords. À l’écrit.', 20, '', 'ec-transf-10'),
    (5, 'francais', 'Lecture d’une bande dessinée', 'Une planche. Puis expliquer ce que les images racontent et que le texte ne dit pas.', 30, '', 'lf-bd-10'),
    (6, 'francais', 'Expliquer une règle', 'Réécrire avec tes mots une leçon de la semaine, pour quelqu’un qui ne l’a pas eue.', 25, '', 'rd-regle-02'),
    (7, 'maison', 'Jeux de raquette', 'Échanges contre un mur ou à deux. Compter les échanges tenus sans faute.', 30, '', 'dh-raquette-10')
  ) as v (rang, matiere, titre, consigne, minutes, lecon, fiche)
 where j.famille_id = (select id from famille) and j.jour = '2027-02-02'
   and not exists (select 1 from seance s where s.journee_id = j.id);

insert into journee (famille_id, jour) select f.id, '2027-02-03' from famille f
  on conflict (famille_id, jour) do nothing;
insert into seance
  (journee_id, rang, matiere, titre, reference, consigne, minutes, lecon,
   fiche, par_adulte, origine)
select j.id, v.rang, v.matiere, v.titre, '', v.consigne, v.minutes, v.lecon,
       v.fiche, null, 'trame'
  from journee j
  cross join (values
    (1, 'maths', 'Multiplier par 5 et par 50', 'Par 5, c’est la moitié de par 10. Par 50, la moitié de par 100. Dix questions.', 15, '', 'cm-cinq-07'),
    (2, 'emc', 'Nommer ce qu’on ressent, régler un conflit', 'Lis la leçon, puis fais les exercices. Tes calculs sur ton brouillon, le résultat sur l’écran.', 25, 'e-p3-emotions', ''),
    (3, 'maison', 'Programmer un déplacement', 'Écrire une suite d’instructions pour faire tracer une figure, puis l’exécuter à la lettre — même si c’est faux.', 45, '', '')
  ) as v (rang, matiere, titre, consigne, minutes, lecon, fiche)
 where j.famille_id = (select id from famille) and j.jour = '2027-02-03'
   and not exists (select 1 from seance s where s.journee_id = j.id);

insert into journee (famille_id, jour) select f.id, '2027-02-04' from famille f
  on conflict (famille_id, jour) do nothing;
insert into seance
  (journee_id, rang, matiere, titre, reference, consigne, minutes, lecon,
   fiche, par_adulte, origine)
select j.id, v.rang, v.matiere, v.titre, '', v.consigne, v.minutes, v.lecon,
       v.fiche, null, 'trame'
  from journee j
  cross join (values
    (1, 'maths', 'Les fractions d’une quantité', 'La moitié de 36, le tiers de 24, les trois quarts de 20. Dix questions à l’oral.', 15, '', 'cg-fractions-07'),
    (2, 'maths', 'L’écriture à virgule — on reprend', 'On relit le cours, puis on refait les exercices. Tes calculs sur ton brouillon, le résultat sur l’écran.', 30, 'm-p3-virgule', ''),
    (3, 'francais', 'L’adjectif épithète — on reprend', 'On relit le cours, puis on refait les exercices. Tes calculs sur ton brouillon, le résultat sur l’écran.', 20, 'f-p3-epithete', ''),
    (4, 'francais', 'Auto-dictée', 'Apprendre quatre lignes par cœur la veille, les écrire de mémoire aujourd’hui.', 20, '', 'ed-auto-10'),
    (5, 'francais', 'Lecture libre', 'Le livre que tu veux, sans compte à rendre. On te demande seulement si tu as aimé, et pourquoi.', 30, '', 'lf-libre-02'),
    (6, 'emc', 'Le respect et les différences — on reprend', 'On relit le cours, puis on refait les exercices. Tes calculs sur ton brouillon, le résultat sur l’écran.', 30, 'e-p3-differences', ''),
    (7, 'maison', 'Jardinage ou bricolage', 'Planter, arroser, mesurer, réparer. Le travail des mains compte autant que le reste.', 30, '', 'dh-mains-10')
  ) as v (rang, matiere, titre, consigne, minutes, lecon, fiche)
 where j.famille_id = (select id from famille) and j.jour = '2027-02-04'
   and not exists (select 1 from seance s where s.journee_id = j.id);

insert into journee (famille_id, jour) select f.id, '2027-02-05' from famille f
  on conflict (famille_id, jour) do nothing;
insert into seance
  (journee_id, rang, matiere, titre, reference, consigne, minutes, lecon,
   fiche, par_adulte, origine)
select j.id, v.rang, v.matiere, v.titre, '', v.consigne, v.minutes, v.lecon,
       v.fiche, null, 'trame'
  from journee j
  cross join (values
    (1, 'maths', 'Les problèmes en une phrase', 'Cinq problèmes dictés, très courts. La réponse sur l’ardoise, sans écrire le calcul.', 15, '', 'cg-problemes-07'),
    (2, 'maths', 'Reprendre la leçon de maths', 'Refaire les exercices de la dernière leçon de maths, sur le cahier cette fois. Comparer avec ce qui avait été trouvé.', 30, '', 'em-reprise-02'),
    (3, 'francais', 'Reprendre la leçon de français', 'Refaire les exercices de la dernière leçon de français, sur le cahier.', 25, '', ''),
    (4, 'francais', 'Dictée de mots', 'Quinze mots de la liste en cours. On corrige ensemble, et on réécrit trois fois ceux qui ont hésité.', 20, '', 'ed-mots-11'),
    (5, 'francais', 'Lecture à voix haute', 'Une page préparée, lue à voix haute en respectant la ponctuation. On marque au crayon où respirer.', 30, '', 'lt-voix-11'),
    (6, 'sciences', 'La lumière et les ombres — on reprend', 'On relit le cours, puis on refait les exercices. Tes calculs sur ton brouillon, le résultat sur l’écran.', 30, 's-p3-ombres', ''),
    (7, 'maison', 'Course et endurance', 'Courir sans s’arrêter, en augmentant un peu chaque semaine. On chronomètre, on ne compare à personne.', 30, '', 'dh-course-11')
  ) as v (rang, matiere, titre, consigne, minutes, lecon, fiche)
 where j.famille_id = (select id from famille) and j.jour = '2027-02-05'
   and not exists (select 1 from seance s where s.journee_id = j.id);

insert into journee (famille_id, jour) select f.id, '2027-02-08' from famille f
  on conflict (famille_id, jour) do nothing;
insert into seance
  (journee_id, rang, matiere, titre, reference, consigne, minutes, lecon,
   fiche, par_adulte, origine)
select j.id, v.rang, v.matiere, v.titre, '', v.consigne, v.minutes, v.lecon,
       v.fiche, null, 'trame'
  from journee j
  cross join (values
    (1, 'maths', 'Encadrer et arrondir', 'Entre quels milliers se trouve 6 480 ? Quel est l’arrondi de 12,94 ? Dix questions.', 15, '', 'cg-encadrer-07'),
    (2, 'maths', 'Comparer et ranger les nombres décimaux — on reprend', 'On relit le cours, puis on refait les exercices. Tes calculs sur ton brouillon, le résultat sur l’écran.', 25, 'm-p3-comparer-decimaux', ''),
    (3, 'francais', 'L’accord du sujet et du verbe — on reprend', 'On relit le cours, puis on refait les exercices. Tes calculs sur ton brouillon, le résultat sur l’écran.', 30, 'f-p3-accord-sujet-verbe', ''),
    (4, 'francais', 'Dictée de phrases', 'Trois phrases. On souligne les verbes et on entoure les sujets avant de corriger.', 20, '', 'ed-phrases-11'),
    (5, 'francais', 'Lecture silencieuse', 'Vingt minutes dans le livre en cours, puis raconter ce qui vient de se passer.', 30, '', 'lt-silence-11'),
    (6, 'francais', 'Raconter sa journée d’hier', 'Dix lignes au passé. Vérifier que les temps ne changent pas en cours de route.', 25, '', 'rd-hier-01'),
    (7, 'maison', 'Jeux de ballon', 'Passes, tirs, jonglages. Compter les réussites de suite, battre son propre score.', 30, '', 'dh-ballon-11')
  ) as v (rang, matiere, titre, consigne, minutes, lecon, fiche)
 where j.famille_id = (select id from famille) and j.jour = '2027-02-08'
   and not exists (select 1 from seance s where s.journee_id = j.id);

insert into journee (famille_id, jour) select f.id, '2027-02-09' from famille f
  on conflict (famille_id, jour) do nothing;
insert into seance
  (journee_id, rang, matiere, titre, reference, consigne, minutes, lecon,
   fiche, par_adulte, origine)
select j.id, v.rang, v.matiere, v.titre, '', v.consigne, v.minutes, v.lecon,
       v.fiche, null, 'trame'
  from journee j
  cross join (values
    (1, 'maths', 'Les unités de mesure', 'Combien de grammes dans 2 kg 500 ? De centimètres dans 3 m 50 ? Dix questions.', 15, '', 'cg-unites-07'),
    (2, 'maths', 'Mesurer pour de vrai', 'Mesurer des objets de la maison, noter en deux unités différentes, comparer aux estimations faites avant.', 30, '', 'em-mesure-02'),
    (3, 'francais', 'Vocabulaire', 'Dix mots : trouver un synonyme, un contraire, et un mot de la même famille pour chacun.', 25, '', ''),
    (4, 'francais', 'Copie soignée', 'Copier huit lignes d’un texte au choix, le plus soigneusement possible. On relit avant de rendre.', 20, '', 'ec-copie-11'),
    (5, 'francais', 'Lecture et questions', 'Un texte court, puis cinq questions : trois sur ce qui est écrit, deux sur ce qui se déduit.', 30, '', ''),
    (6, 'histoire', 'Henri IV et les guerres de religion — on reprend', 'On relit le cours, puis on refait les exercices. Tes calculs sur ton brouillon, le résultat sur l’écran.', 30, 'h-p3-henri-iv', ''),
    (7, 'maison', 'Vélo', 'Une sortie. Repérer le trajet sur un plan avant de partir, puis le raconter au retour.', 30, '', 'dh-velo-11')
  ) as v (rang, matiere, titre, consigne, minutes, lecon, fiche)
 where j.famille_id = (select id from famille) and j.jour = '2027-02-09'
   and not exists (select 1 from seance s where s.journee_id = j.id);

insert into journee (famille_id, jour) select f.id, '2027-02-10' from famille f
  on conflict (famille_id, jour) do nothing;
insert into seance
  (journee_id, rang, matiere, titre, reference, consigne, minutes, lecon,
   fiche, par_adulte, origine)
select j.id, v.rang, v.matiere, v.titre, '', v.consigne, v.minutes, v.lecon,
       v.fiche, null, 'trame'
  from journee j
  cross join (values
    (1, 'maths', 'Les durées', 'De 8 h 45 à 12 h 30, combien de temps ? Cinq calculs de durée, à l’oral.', 15, '', 'cg-durees-07'),
    (2, 'francais', 'Lecture de théâtre', 'Une scène, lue à deux voix. Les didascalies ne se disent pas : elles se jouent.', 30, '', 'lf-theatre-11'),
    (3, 'maison', 'Un métier', 'Choisir un métier, chercher ce qu’il demande d’apprendre, et qui l’exerce autour de nous.', 45, '', '')
  ) as v (rang, matiere, titre, consigne, minutes, lecon, fiche)
 where j.famille_id = (select id from famille) and j.jour = '2027-02-10'
   and not exists (select 1 from seance s where s.journee_id = j.id);

insert into journee (famille_id, jour) select f.id, '2027-02-11' from famille f
  on conflict (famille_id, jour) do nothing;
insert into seance
  (journee_id, rang, matiere, titre, reference, consigne, minutes, lecon,
   fiche, par_adulte, origine)
select j.id, v.rang, v.matiere, v.titre, '', v.consigne, v.minutes, v.lecon,
       v.fiche, null, 'trame'
  from journee j
  cross join (values
    (1, 'maths', 'Les tables de multiplication', 'Dix multiplications dictées, à l’ardoise. On efface entre chaque. On redit celles qui ont hésité.', 15, '', 'cm-tables-08'),
    (2, 'maths', 'La division posée — on reprend', 'On relit le cours, puis on refait les exercices. Tes calculs sur ton brouillon, le résultat sur l’écran.', 35, 'm-p3-division', ''),
    (3, 'francais', 'Synonymes et contraires — on reprend', 'On relit le cours, puis on refait les exercices. Tes calculs sur ton brouillon, le résultat sur l’écran.', 25, 'f-p3-synonymes', ''),
    (4, 'francais', 'Les mots invariables', 'Apprendre dix mots invariables, puis les écrire sous la dictée.', 20, '', 'ec-invar-11'),
    (5, 'francais', 'Poésie', 'Lire un poème à voix haute, plusieurs fois. Repérer les rimes et les images. En apprendre quatre vers.', 30, '', 'lf-poesie-11'),
    (6, 'sciences', 'Les phases de la Lune — on reprend', 'On relit le cours, puis on refait les exercices. Tes calculs sur ton brouillon, le résultat sur l’écran.', 30, 's-p3-lune', ''),
    (7, 'maison', 'Marche et observation', 'Une marche d’une demi-heure. Rapporter trois choses observées, à noter ou à dessiner.', 30, '', 'dh-marche-11')
  ) as v (rang, matiere, titre, consigne, minutes, lecon, fiche)
 where j.famille_id = (select id from famille) and j.jour = '2027-02-11'
   and not exists (select 1 from seance s where s.journee_id = j.id);

insert into journee (famille_id, jour) select f.id, '2027-02-12' from famille f
  on conflict (famille_id, jour) do nothing;
insert into seance
  (journee_id, rang, matiere, titre, reference, consigne, minutes, lecon,
   fiche, par_adulte, origine)
select j.id, v.rang, v.matiere, v.titre, '', v.consigne, v.minutes, v.lecon,
       v.fiche, null, 'trame'
  from journee j
  cross join (values
    (1, 'maths', 'Les doubles et les moitiés', 'Le double de 45, la moitié de 68, le double de 250… Dix questions, à l’oral.', 15, '', 'cm-doubles-08'),
    (2, 'maths', 'Problèmes du jour', 'Trois problèmes sur le cahier. Pour chacun : ce qu’on cherche, ce qu’on sait, le calcul, la phrase de réponse.', 30, '', 'em-prob-05'),
    (3, 'francais', 'Conjugaison', 'Trois verbes, aux quatre temps connus, à toutes les personnes. Sur le cahier, sans modèle.', 25, '', ''),
    (4, 'francais', 'Transformer des phrases', 'Mettre cinq phrases au pluriel, en respectant toute la chaîne d’accords. À l’écrit.', 20, '', 'ec-transf-11'),
    (5, 'francais', 'Lecture d’une bande dessinée', 'Une planche. Puis expliquer ce que les images racontent et que le texte ne dit pas.', 30, '', 'lf-bd-11'),
    (6, 'francais', 'Expliquer une règle', 'Réécrire avec tes mots une leçon de la semaine, pour quelqu’un qui ne l’a pas eue.', 25, '', 'rd-regle-03'),
    (7, 'maison', 'Jeux de raquette', 'Échanges contre un mur ou à deux. Compter les échanges tenus sans faute.', 30, '', 'dh-raquette-11')
  ) as v (rang, matiere, titre, consigne, minutes, lecon, fiche)
 where j.famille_id = (select id from famille) and j.jour = '2027-02-12'
   and not exists (select 1 from seance s where s.journee_id = j.id);

insert into journee (famille_id, jour) select f.id, '2027-02-15' from famille f
  on conflict (famille_id, jour) do nothing;
insert into seance
  (journee_id, rang, matiere, titre, reference, consigne, minutes, lecon,
   fiche, par_adulte, origine)
select j.id, v.rang, v.matiere, v.titre, '', v.consigne, v.minutes, v.lecon,
       v.fiche, null, 'trame'
  from journee j
  cross join (values
    (1, 'maths', 'Les compléments à 100', 'Combien manque-t-il à 67 pour aller à 100 ? Dix questions. Puis les compléments à 1 000.', 15, '', 'cm-cent-08'),
    (2, 'maths', 'Les masses et les contenances — on reprend', 'On relit le cours, puis on refait les exercices. Tes calculs sur ton brouillon, le résultat sur l’écran.', 25, 'm-p3-masses-contenances', ''),
    (3, 'francais', 'Le dialogue dans un récit — on reprend', 'On relit le cours, puis on refait les exercices. Tes calculs sur ton brouillon, le résultat sur l’écran.', 25, 'f-p3-dialogue', ''),
    (4, 'francais', 'Dictée à trous', 'Le texte est écrit, il manque les terminaisons des verbes. On les complète en justifiant.', 20, '', 'ed-trous-11'),
    (5, 'francais', 'Lecture de théâtre', 'Une scène, lue à deux voix. Les didascalies ne se disent pas : elles se jouent.', 30, '', 'lf-theatre-11'),
    (6, 'geographie', 'L’inégal accès à l’eau, à la santé, à l’école — on reprend', 'On relit le cours, puis on refait les exercices. Tes calculs sur ton brouillon, le résultat sur l’écran.', 30, 'g-p3-acces', ''),
    (7, 'maison', 'Danse et rythme', 'Suivre une pulsation, inventer une suite de mouvements de huit temps, la refaire à l’identique.', 30, '', 'dh-danse-11')
  ) as v (rang, matiere, titre, consigne, minutes, lecon, fiche)
 where j.famille_id = (select id from famille) and j.jour = '2027-02-15'
   and not exists (select 1 from seance s where s.journee_id = j.id);

insert into journee (famille_id, jour) select f.id, '2027-02-16' from famille f
  on conflict (famille_id, jour) do nothing;
insert into seance
  (journee_id, rang, matiere, titre, reference, consigne, minutes, lecon,
   fiche, par_adulte, origine)
select j.id, v.rang, v.matiere, v.titre, '', v.consigne, v.minutes, v.lecon,
       v.fiche, null, 'trame'
  from journee j
  cross join (values
    (1, 'maths', 'Ajouter 9, 19, 29', 'On ajoute la dizaine ronde et on retire 1. Dix questions, en disant la procédure à voix haute.', 15, '', 'cm-neuf-08'),
    (2, 'maths', 'Géométrie : tracer', 'Un programme de construction à suivre à la règle, à l’équerre et au compas. La précision compte.', 30, '', 'em-trace-04'),
    (3, 'francais', 'Les homophones', 'Un texte à trous : a/à, est/et, son/sont, ont/on. Justifier chaque choix par le test de remplacement.', 25, '', ''),
    (4, 'francais', 'Auto-dictée', 'Apprendre quatre lignes par cœur la veille, les écrire de mémoire aujourd’hui.', 20, '', 'ed-auto-11'),
    (5, 'francais', 'Lecture libre', 'Le livre que tu veux, sans compte à rendre. On te demande seulement si tu as aimé, et pourquoi.', 30, '', 'lf-libre-03'),
    (6, 'francais', 'Inventer un problème', 'Écrire un problème de mathématiques à deux étapes, avec sa solution sur une autre feuille.', 25, '', 'rd-probleme-03'),
    (7, 'maison', 'Jardinage ou bricolage', 'Planter, arroser, mesurer, réparer. Le travail des mains compte autant que le reste.', 30, '', 'dh-mains-11')
  ) as v (rang, matiere, titre, consigne, minutes, lecon, fiche)
 where j.famille_id = (select id from famille) and j.jour = '2027-02-16'
   and not exists (select 1 from seance s where s.journee_id = j.id);

insert into journee (famille_id, jour) select f.id, '2027-02-17' from famille f
  on conflict (famille_id, jour) do nothing;
insert into seance
  (journee_id, rang, matiere, titre, reference, consigne, minutes, lecon,
   fiche, par_adulte, origine)
select j.id, v.rang, v.matiere, v.titre, '', v.consigne, v.minutes, v.lecon,
       v.fiche, null, 'trame'
  from journee j
  cross join (values
    (1, 'maths', 'Multiplier par 10, 100, 1 000', 'Dix questions rapides. Puis diviser par 10 : 320 ÷ 10, 4 500 ÷ 10.', 15, '', 'cm-dix-08'),
    (2, 'histoire', 'Louis XIV, Versailles et la société d’ordres — on reprend', 'On relit le cours, puis on refait les exercices. Tes calculs sur ton brouillon, le résultat sur l’écran.', 30, 'h-p3-louis-xiv', ''),
    (3, 'maison', 'Dessin d’observation', 'Dessiner un objet réel en le regardant, pas de mémoire. Vingt minutes sur le même objet.', 45, '', '')
  ) as v (rang, matiere, titre, consigne, minutes, lecon, fiche)
 where j.famille_id = (select id from famille) and j.jour = '2027-02-17'
   and not exists (select 1 from seance s where s.journee_id = j.id);

insert into journee (famille_id, jour) select f.id, '2027-02-18' from famille f
  on conflict (famille_id, jour) do nothing;
insert into seance
  (journee_id, rang, matiere, titre, reference, consigne, minutes, lecon,
   fiche, par_adulte, origine)
select j.id, v.rang, v.matiere, v.titre, '', v.consigne, v.minutes, v.lecon,
       v.fiche, null, 'trame'
  from journee j
  cross join (values
    (1, 'maths', 'Multiplier par 4 et par 8', 'Par 4, c’est doubler deux fois. Par 8, trois fois. Dix questions en disant les étapes.', 15, '', 'cm-quatre-08'),
    (2, 'maths', 'Le périmètre — on reprend', 'On relit le cours, puis on refait les exercices. Tes calculs sur ton brouillon, le résultat sur l’écran.', 25, 'm-p3-perimetre', ''),
    (3, 'francais', 'Reconnaître un poème, une pièce, un récit — on reprend', 'On relit le cours, puis on refait les exercices. Tes calculs sur ton brouillon, le résultat sur l’écran.', 25, 'f-p3-genres', ''),
    (4, 'francais', 'Dictée de phrases', 'Trois phrases. On souligne les verbes et on entoure les sujets avant de corriger.', 20, '', 'ed-phrases-12'),
    (5, 'francais', 'Lecture silencieuse', 'Vingt minutes dans le livre en cours, puis raconter ce qui vient de se passer.', 30, '', 'lt-silence-12'),
    (6, 'francais', 'Raconter sa journée d’hier', 'Dix lignes au passé. Vérifier que les temps ne changent pas en cours de route.', 25, '', 'rd-hier-02'),
    (7, 'maison', 'Jeux de ballon', 'Passes, tirs, jonglages. Compter les réussites de suite, battre son propre score.', 30, '', 'dh-ballon-12')
  ) as v (rang, matiere, titre, consigne, minutes, lecon, fiche)
 where j.famille_id = (select id from famille) and j.jour = '2027-02-18'
   and not exists (select 1 from seance s where s.journee_id = j.id);

insert into journee (famille_id, jour) select f.id, '2027-02-19' from famille f
  on conflict (famille_id, jour) do nothing;
insert into seance
  (journee_id, rang, matiere, titre, reference, consigne, minutes, lecon,
   fiche, par_adulte, origine)
select j.id, v.rang, v.matiere, v.titre, '', v.consigne, v.minutes, v.lecon,
       v.fiche, null, 'trame'
  from journee j
  cross join (values
    (1, 'maths', 'Multiplier par 5 et par 50', 'Par 5, c’est la moitié de par 10. Par 50, la moitié de par 100. Dix questions.', 15, '', 'cm-cinq-08'),
    (2, 'maths', 'Opérations posées', 'Quatre additions, quatre soustractions, deux multiplications. Estimer avant, vérifier après.', 30, '', 'em-ops-08'),
    (3, 'francais', 'Analyser des phrases', 'Cinq phrases : souligner le sujet, entourer le verbe, encadrer les compléments. Dire lesquels se déplacent.', 25, '', 'ef-phrases-02'),
    (4, 'francais', 'Copie soignée', 'Copier huit lignes d’un texte au choix, le plus soigneusement possible. On relit avant de rendre.', 20, '', 'ec-copie-12'),
    (5, 'francais', 'Lecture et questions', 'Un texte court, puis cinq questions : trois sur ce qui est écrit, deux sur ce qui se déduit.', 30, '', ''),
    (6, 'francais', 'Écrire un dialogue', 'Deux personnages, six répliques. Tirets, verbes de parole variés, une ligne par personne.', 25, '', 'rd-dialogue-04'),
    (7, 'maison', 'Vélo', 'Une sortie. Repérer le trajet sur un plan avant de partir, puis le raconter au retour.', 30, '', 'dh-velo-12')
  ) as v (rang, matiere, titre, consigne, minutes, lecon, fiche)
 where j.famille_id = (select id from famille) and j.jour = '2027-02-19'
   and not exists (select 1 from seance s where s.journee_id = j.id);

insert into journee (famille_id, jour) select f.id, '2027-03-08' from famille f
  on conflict (famille_id, jour) do nothing;
insert into seance
  (journee_id, rang, matiere, titre, reference, consigne, minutes, lecon,
   fiche, par_adulte, origine)
select j.id, v.rang, v.matiere, v.titre, '', v.consigne, v.minutes, v.lecon,
       v.fiche, null, 'trame'
  from journee j
  cross join (values
    (1, 'maths', 'Les fractions d’une quantité', 'La moitié de 36, le tiers de 24, les trois quarts de 20. Dix questions à l’oral.', 15, '', 'cg-fractions-08'),
    (2, 'maths', 'Les aires', 'Lis la leçon, puis fais les exercices. Tes calculs sur ton brouillon, le résultat sur l’écran.', 30, 'm-p4-aires', ''),
    (3, 'francais', 'Les verbes qui changent de radical', 'Lis la leçon, puis fais les exercices. Tes calculs sur ton brouillon, le résultat sur l’écran.', 25, 'f-p4-radical', ''),
    (4, 'francais', 'Dictée préparée', 'Le texte a été lu la veille. On le dicte, puis on compare avec l’original.', 20, '', 'ed-preparee-12'),
    (5, 'francais', 'Lecture d’un documentaire', 'Une double page documentaire. Relever la nature et la source du document avant de lire.', 30, '', ''),
    (6, 'emc', 'L’égalité entre les filles et les garçons', 'Lis la leçon, puis fais les exercices. Tes calculs sur ton brouillon, le résultat sur l’écran.', 30, 'e-p4-egalite', ''),
    (7, 'maison', 'Parcours et équilibre', 'Un parcours à installer soi-même : sauter, grimper, tenir en équilibre, ramper.', 30, '', 'dh-parcours-12')
  ) as v (rang, matiere, titre, consigne, minutes, lecon, fiche)
 where j.famille_id = (select id from famille) and j.jour = '2027-03-08'
   and not exists (select 1 from seance s where s.journee_id = j.id);

insert into journee (famille_id, jour) select f.id, '2027-03-09' from famille f
  on conflict (famille_id, jour) do nothing;
insert into seance
  (journee_id, rang, matiere, titre, reference, consigne, minutes, lecon,
   fiche, par_adulte, origine)
select j.id, v.rang, v.matiere, v.titre, '', v.consigne, v.minutes, v.lecon,
       v.fiche, null, 'trame'
  from journee j
  cross join (values
    (1, 'maths', 'Les problèmes en une phrase', 'Cinq problèmes dictés, très courts. La réponse sur l’ardoise, sans écrire le calcul.', 15, '', 'cg-problemes-08'),
    (2, 'maths', 'Reprendre la leçon de maths', 'Refaire les exercices de la dernière leçon de maths, sur le cahier cette fois. Comparer avec ce qui avait été trouvé.', 30, '', 'em-reprise-04'),
    (3, 'francais', 'Reprendre la leçon de français', 'Refaire les exercices de la dernière leçon de français, sur le cahier.', 25, '', ''),
    (4, 'francais', 'Les mots invariables', 'Apprendre dix mots invariables, puis les écrire sous la dictée.', 20, '', 'ec-invar-12'),
    (5, 'francais', 'Poésie', 'Lire un poème à voix haute, plusieurs fois. Repérer les rimes et les images. En apprendre quatre vers.', 30, '', 'lf-poesie-12'),
    (6, 'sciences', 'Qu’est-ce qu’une espèce ?', 'Lis la leçon, puis fais les exercices. Tes calculs sur ton brouillon, le résultat sur l’écran.', 30, 's-p4-espece', ''),
    (7, 'maison', 'Marche et observation', 'Une marche d’une demi-heure. Rapporter trois choses observées, à noter ou à dessiner.', 30, '', 'dh-marche-12')
  ) as v (rang, matiere, titre, consigne, minutes, lecon, fiche)
 where j.famille_id = (select id from famille) and j.jour = '2027-03-09'
   and not exists (select 1 from seance s where s.journee_id = j.id);

insert into journee (famille_id, jour) select f.id, '2027-03-10' from famille f
  on conflict (famille_id, jour) do nothing;
insert into seance
  (journee_id, rang, matiere, titre, reference, consigne, minutes, lecon,
   fiche, par_adulte, origine)
select j.id, v.rang, v.matiere, v.titre, '', v.consigne, v.minutes, v.lecon,
       v.fiche, null, 'trame'
  from journee j
  cross join (values
    (1, 'maths', 'Encadrer et arrondir', 'Entre quels milliers se trouve 6 480 ? Quel est l’arrondi de 12,94 ? Dix questions.', 15, '', 'cg-encadrer-08'),
    (2, 'arts', 'Écouter une musique', 'Lis la leçon, puis fais les exercices. Tes calculs sur ton brouillon, le résultat sur l’écran.', 25, 'ar-p4-musique', ''),
    (3, 'maison', 'Un projet à suivre', 'Reprendre un projet commencé un autre mercredi et l’avancer d’un cran. Tout ne se finit pas en un jour.', 45, '', '')
  ) as v (rang, matiere, titre, consigne, minutes, lecon, fiche)
 where j.famille_id = (select id from famille) and j.jour = '2027-03-10'
   and not exists (select 1 from seance s where s.journee_id = j.id);

insert into journee (famille_id, jour) select f.id, '2027-03-11' from famille f
  on conflict (famille_id, jour) do nothing;
insert into seance
  (journee_id, rang, matiere, titre, reference, consigne, minutes, lecon,
   fiche, par_adulte, origine)
select j.id, v.rang, v.matiere, v.titre, '', v.consigne, v.minutes, v.lecon,
       v.fiche, null, 'trame'
  from journee j
  cross join (values
    (1, 'maths', 'Les unités de mesure', 'Combien de grammes dans 2 kg 500 ? De centimètres dans 3 m 50 ? Dix questions.', 15, '', 'cg-unites-08'),
    (2, 'maths', 'Les angles', 'Lis la leçon, puis fais les exercices. Tes calculs sur ton brouillon, le résultat sur l’écran.', 25, 'm-p4-angles', ''),
    (3, 'francais', 'Transformer une phrase sans casser les accords', 'Lis la leçon, puis fais les exercices. Tes calculs sur ton brouillon, le résultat sur l’écran.', 30, 'f-p4-chaine', ''),
    (4, 'francais', 'Dictée à trous', 'Le texte est écrit, il manque les terminaisons des verbes. On les complète en justifiant.', 20, '', 'ed-trous-12'),
    (5, 'francais', 'Lecture de théâtre', 'Une scène, lue à deux voix. Les didascalies ne se disent pas : elles se jouent.', 30, '', 'lf-theatre-12'),
    (6, 'histoire', 'Les grandes explorations', 'Lis la leçon, puis fais les exercices. Tes calculs sur ton brouillon, le résultat sur l’écran.', 30, 'h-p4-explorations', ''),
    (7, 'maison', 'Danse et rythme', 'Suivre une pulsation, inventer une suite de mouvements de huit temps, la refaire à l’identique.', 30, '', 'dh-danse-12')
  ) as v (rang, matiere, titre, consigne, minutes, lecon, fiche)
 where j.famille_id = (select id from famille) and j.jour = '2027-03-11'
   and not exists (select 1 from seance s where s.journee_id = j.id);

insert into journee (famille_id, jour) select f.id, '2027-03-12' from famille f
  on conflict (famille_id, jour) do nothing;
insert into seance
  (journee_id, rang, matiere, titre, reference, consigne, minutes, lecon,
   fiche, par_adulte, origine)
select j.id, v.rang, v.matiere, v.titre, '', v.consigne, v.minutes, v.lecon,
       v.fiche, null, 'trame'
  from journee j
  cross join (values
    (1, 'maths', 'Les durées', 'De 8 h 45 à 12 h 30, combien de temps ? Cinq calculs de durée, à l’oral.', 15, '', 'cg-durees-08'),
    (2, 'maths', 'Le nombre du jour', 'Un nombre au tableau. Le décomposer de cinq façons, l’encadrer, dire son nombre de centaines, le doubler.', 30, '', 'em-nombre-16'),
    (3, 'francais', 'Le dictionnaire', 'Chercher cinq mots rencontrés cette semaine. Relever la nature du mot et ses différents sens.', 25, '', ''),
    (4, 'francais', 'Auto-dictée', 'Apprendre quatre lignes par cœur la veille, les écrire de mémoire aujourd’hui.', 20, '', 'ed-auto-12'),
    (5, 'francais', 'Lecture libre', 'Le livre que tu veux, sans compte à rendre. On te demande seulement si tu as aimé, et pourquoi.', 30, '', 'lf-libre-04'),
    (6, 'arts', 'Écouter une musique — on reprend', 'On relit le cours, puis on refait les exercices. Tes calculs sur ton brouillon, le résultat sur l’écran.', 25, 'ar-p4-musique', ''),
    (7, 'maison', 'Jardinage ou bricolage', 'Planter, arroser, mesurer, réparer. Le travail des mains compte autant que le reste.', 30, '', 'dh-mains-12')
  ) as v (rang, matiere, titre, consigne, minutes, lecon, fiche)
 where j.famille_id = (select id from famille) and j.jour = '2027-03-12'
   and not exists (select 1 from seance s where s.journee_id = j.id);

insert into journee (famille_id, jour) select f.id, '2027-03-15' from famille f
  on conflict (famille_id, jour) do nothing;
insert into seance
  (journee_id, rang, matiere, titre, reference, consigne, minutes, lecon,
   fiche, par_adulte, origine)
select j.id, v.rang, v.matiere, v.titre, '', v.consigne, v.minutes, v.lecon,
       v.fiche, null, 'trame'
  from journee j
  cross join (values
    (1, 'maths', 'Les tables de multiplication', 'Dix multiplications dictées, à l’ardoise. On efface entre chaque. On redit celles qui ont hésité.', 15, '', 'cm-tables-09'),
    (2, 'maths', 'L’heure et les durées', 'Lis la leçon, puis fais les exercices. Tes calculs sur ton brouillon, le résultat sur l’écran.', 30, 'm-p4-durees', ''),
    (3, 'francais', 'Les mots à plusieurs sens', 'Lis la leçon, puis fais les exercices. Tes calculs sur ton brouillon, le résultat sur l’écran.', 25, 'f-p4-polysemie', ''),
    (4, 'francais', 'Dictée de mots', 'Quinze mots de la liste en cours. On corrige ensemble, et on réécrit trois fois ceux qui ont hésité.', 20, '', 'ed-mots-13'),
    (5, 'francais', 'Lecture à voix haute', 'Une page préparée, lue à voix haute en respectant la ponctuation. On marque au crayon où respirer.', 30, '', 'lt-voix-13'),
    (6, 'sciences', 'Comment grandissent les animaux', 'Lis la leçon, puis fais les exercices. Tes calculs sur ton brouillon, le résultat sur l’écran.', 30, 's-p4-developpement', ''),
    (7, 'maison', 'Course et endurance', 'Courir sans s’arrêter, en augmentant un peu chaque semaine. On chronomètre, on ne compare à personne.', 30, '', 'dh-course-13')
  ) as v (rang, matiere, titre, consigne, minutes, lecon, fiche)
 where j.famille_id = (select id from famille) and j.jour = '2027-03-15'
   and not exists (select 1 from seance s where s.journee_id = j.id);

insert into journee (famille_id, jour) select f.id, '2027-03-16' from famille f
  on conflict (famille_id, jour) do nothing;
insert into seance
  (journee_id, rang, matiere, titre, reference, consigne, minutes, lecon,
   fiche, par_adulte, origine)
select j.id, v.rang, v.matiere, v.titre, '', v.consigne, v.minutes, v.lecon,
       v.fiche, null, 'trame'
  from journee j
  cross join (values
    (1, 'maths', 'Les doubles et les moitiés', 'Le double de 45, la moitié de 68, le double de 250… Dix questions, à l’oral.', 15, '', 'cm-doubles-09'),
    (2, 'maths', 'Problèmes du jour', 'Trois problèmes sur le cahier. Pour chacun : ce qu’on cherche, ce qu’on sait, le calcul, la phrase de réponse.', 30, '', 'em-prob-07'),
    (3, 'francais', 'Conjugaison', 'Trois verbes, aux quatre temps connus, à toutes les personnes. Sur le cahier, sans modèle.', 25, '', ''),
    (4, 'francais', 'Dictée de phrases', 'Trois phrases. On souligne les verbes et on entoure les sujets avant de corriger.', 20, '', 'ed-phrases-13'),
    (5, 'francais', 'Lecture silencieuse', 'Vingt minutes dans le livre en cours, puis raconter ce qui vient de se passer.', 30, '', 'lt-silence-13'),
    (6, 'francais', 'Raconter sa journée d’hier', 'Dix lignes au passé. Vérifier que les temps ne changent pas en cours de route.', 25, '', 'rd-hier-03'),
    (7, 'maison', 'Jeux de ballon', 'Passes, tirs, jonglages. Compter les réussites de suite, battre son propre score.', 30, '', 'dh-ballon-13')
  ) as v (rang, matiere, titre, consigne, minutes, lecon, fiche)
 where j.famille_id = (select id from famille) and j.jour = '2027-03-16'
   and not exists (select 1 from seance s where s.journee_id = j.id);

insert into journee (famille_id, jour) select f.id, '2027-03-17' from famille f
  on conflict (famille_id, jour) do nothing;
insert into seance
  (journee_id, rang, matiere, titre, reference, consigne, minutes, lecon,
   fiche, par_adulte, origine)
select j.id, v.rang, v.matiere, v.titre, '', v.consigne, v.minutes, v.lecon,
       v.fiche, null, 'trame'
  from journee j
  cross join (values
    (1, 'maths', 'Les compléments à 100', 'Combien manque-t-il à 67 pour aller à 100 ? Dix questions. Puis les compléments à 1 000.', 15, '', 'cm-cent-09'),
    (2, 'sciences', 'Les écosystèmes et les chaînes alimentaires', 'Lis la leçon, puis fais les exercices. Tes calculs sur ton brouillon, le résultat sur l’écran.', 30, 's-p4-ecosystemes', ''),
    (3, 'maison', 'Une expérience', 'Mélanger, dissoudre, filtrer, peser. Écrire ce qu’on croit qu’il va se passer AVANT de le faire, puis comparer.', 45, '', '')
  ) as v (rang, matiere, titre, consigne, minutes, lecon, fiche)
 where j.famille_id = (select id from famille) and j.jour = '2027-03-17'
   and not exists (select 1 from seance s where s.journee_id = j.id);

insert into journee (famille_id, jour) select f.id, '2027-03-18' from famille f
  on conflict (famille_id, jour) do nothing;
insert into seance
  (journee_id, rang, matiere, titre, reference, consigne, minutes, lecon,
   fiche, par_adulte, origine)
select j.id, v.rang, v.matiere, v.titre, '', v.consigne, v.minutes, v.lecon,
       v.fiche, null, 'trame'
  from journee j
  cross join (values
    (1, 'maths', 'Ajouter 9, 19, 29', 'On ajoute la dizaine ronde et on retire 1. Dix questions, en disant la procédure à voix haute.', 15, '', 'cm-neuf-09'),
    (2, 'maths', 'La proportionnalité', 'Lis la leçon, puis fais les exercices. Tes calculs sur ton brouillon, le résultat sur l’écran.', 30, 'm-p4-proportionnalite', ''),
    (3, 'francais', 'Qu’est-ce qu’un héros ?', 'Lis la leçon, puis fais les exercices. Tes calculs sur ton brouillon, le résultat sur l’écran.', 30, 'f-p4-heros', ''),
    (4, 'francais', 'Dictée préparée', 'Le texte a été lu la veille. On le dicte, puis on compare avec l’original.', 20, '', 'ed-preparee-13'),
    (5, 'francais', 'Lecture d’un documentaire', 'Une double page documentaire. Relever la nature et la source du document avant de lire.', 30, '', ''),
    (6, 'francais', 'Décrire un lieu', 'Dix lignes sur un endroit que tu connais. Au moins trois adjectifs qui servent vraiment.', 25, '', 'rd-lieu-01'),
    (7, 'maison', 'Parcours et équilibre', 'Un parcours à installer soi-même : sauter, grimper, tenir en équilibre, ramper.', 30, '', 'dh-parcours-13')
  ) as v (rang, matiere, titre, consigne, minutes, lecon, fiche)
 where j.famille_id = (select id from famille) and j.jour = '2027-03-18'
   and not exists (select 1 from seance s where s.journee_id = j.id);

insert into journee (famille_id, jour) select f.id, '2027-03-19' from famille f
  on conflict (famille_id, jour) do nothing;
insert into seance
  (journee_id, rang, matiere, titre, reference, consigne, minutes, lecon,
   fiche, par_adulte, origine)
select j.id, v.rang, v.matiere, v.titre, '', v.consigne, v.minutes, v.lecon,
       v.fiche, null, 'trame'
  from journee j
  cross join (values
    (1, 'maths', 'Multiplier par 10, 100, 1 000', 'Dix questions rapides. Puis diviser par 10 : 320 ÷ 10, 4 500 ÷ 10.', 15, '', 'cm-dix-09'),
    (2, 'maths', 'Mesurer pour de vrai', 'Mesurer des objets de la maison, noter en deux unités différentes, comparer aux estimations faites avant.', 30, '', 'em-mesure-05'),
    (3, 'francais', 'Vocabulaire', 'Dix mots : trouver un synonyme, un contraire, et un mot de la même famille pour chacun.', 25, '', ''),
    (4, 'francais', 'Les mots invariables', 'Apprendre dix mots invariables, puis les écrire sous la dictée.', 20, '', 'ec-invar-13'),
    (5, 'francais', 'Poésie', 'Lire un poème à voix haute, plusieurs fois. Repérer les rimes et les images. En apprendre quatre vers.', 30, '', 'lf-poesie-13'),
    (6, 'anglais', 'La nourriture, et ce qu’on aime', 'Lis la leçon, puis fais les exercices. Tes calculs sur ton brouillon, le résultat sur l’écran.', 25, 'a-p4-nourriture', ''),
    (7, 'maison', 'Marche et observation', 'Une marche d’une demi-heure. Rapporter trois choses observées, à noter ou à dessiner.', 30, '', 'dh-marche-13')
  ) as v (rang, matiere, titre, consigne, minutes, lecon, fiche)
 where j.famille_id = (select id from famille) and j.jour = '2027-03-19'
   and not exists (select 1 from seance s where s.journee_id = j.id);

insert into journee (famille_id, jour) select f.id, '2027-03-22' from famille f
  on conflict (famille_id, jour) do nothing;
insert into seance
  (journee_id, rang, matiere, titre, reference, consigne, minutes, lecon,
   fiche, par_adulte, origine)
select j.id, v.rang, v.matiere, v.titre, '', v.consigne, v.minutes, v.lecon,
       v.fiche, null, 'trame'
  from journee j
  cross join (values
    (1, 'maths', 'Multiplier par 4 et par 8', 'Par 4, c’est doubler deux fois. Par 8, trois fois. Dix questions en disant les étapes.', 15, '', 'cm-quatre-09'),
    (2, 'maths', 'Le calcul mental : les chemins courts', 'Lis la leçon, puis fais les exercices. Tes calculs sur ton brouillon, le résultat sur l’écran.', 25, 'm-p4-calcul-mental', ''),
    (3, 'francais', 'Le goût des mots : la poésie', 'Lis la leçon, puis fais les exercices. Tes calculs sur ton brouillon, le résultat sur l’écran.', 25, 'f-p4-poesie', ''),
    (4, 'francais', 'Transformer des phrases', 'Mettre cinq phrases au pluriel, en respectant toute la chaîne d’accords. À l’écrit.', 20, '', 'ec-transf-13'),
    (5, 'francais', 'Lecture d’une bande dessinée', 'Une planche. Puis expliquer ce que les images racontent et que le texte ne dit pas.', 30, '', 'lf-bd-13'),
    (6, 'histoire', 'Les empires coloniaux et l’esclavage', 'Lis la leçon, puis fais les exercices. Tes calculs sur ton brouillon, le résultat sur l’écran.', 30, 'h-p4-colonisation', ''),
    (7, 'maison', 'Jeux de raquette', 'Échanges contre un mur ou à deux. Compter les échanges tenus sans faute.', 30, '', 'dh-raquette-13')
  ) as v (rang, matiere, titre, consigne, minutes, lecon, fiche)
 where j.famille_id = (select id from famille) and j.jour = '2027-03-22'
   and not exists (select 1 from seance s where s.journee_id = j.id);

insert into journee (famille_id, jour) select f.id, '2027-03-23' from famille f
  on conflict (famille_id, jour) do nothing;
insert into seance
  (journee_id, rang, matiere, titre, reference, consigne, minutes, lecon,
   fiche, par_adulte, origine)
select j.id, v.rang, v.matiere, v.titre, '', v.consigne, v.minutes, v.lecon,
       v.fiche, null, 'trame'
  from journee j
  cross join (values
    (1, 'maths', 'Multiplier par 5 et par 50', 'Par 5, c’est la moitié de par 10. Par 50, la moitié de par 100. Dix questions.', 15, '', 'cm-cinq-09'),
    (2, 'maths', 'Opérations posées', 'Quatre additions, quatre soustractions, deux multiplications. Estimer avant, vérifier après.', 30, '', 'em-ops-02'),
    (3, 'francais', 'Analyser des phrases', 'Cinq phrases : souligner le sujet, entourer le verbe, encadrer les compléments. Dire lesquels se déplacent.', 25, '', 'ef-phrases-04'),
    (4, 'francais', 'Dictée à trous', 'Le texte est écrit, il manque les terminaisons des verbes. On les complète en justifiant.', 20, '', 'ed-trous-13'),
    (5, 'francais', 'Lecture de théâtre', 'Une scène, lue à deux voix. Les didascalies ne se disent pas : elles se jouent.', 30, '', 'lf-theatre-13'),
    (6, 'geographie', 'Comment se déplace-t-on dans le monde ?', 'Lis la leçon, puis fais les exercices. Tes calculs sur ton brouillon, le résultat sur l’écran.', 25, 'g-p4-se-deplacer', ''),
    (7, 'maison', 'Danse et rythme', 'Suivre une pulsation, inventer une suite de mouvements de huit temps, la refaire à l’identique.', 30, '', 'dh-danse-13')
  ) as v (rang, matiere, titre, consigne, minutes, lecon, fiche)
 where j.famille_id = (select id from famille) and j.jour = '2027-03-23'
   and not exists (select 1 from seance s where s.journee_id = j.id);

insert into journee (famille_id, jour) select f.id, '2027-03-24' from famille f
  on conflict (famille_id, jour) do nothing;
insert into seance
  (journee_id, rang, matiere, titre, reference, consigne, minutes, lecon,
   fiche, par_adulte, origine)
select j.id, v.rang, v.matiere, v.titre, '', v.consigne, v.minutes, v.lecon,
       v.fiche, null, 'trame'
  from journee j
  cross join (values
    (1, 'maths', 'Les fractions d’une quantité', 'La moitié de 36, le tiers de 24, les trois quarts de 20. Dix questions à l’oral.', 15, '', 'cg-fractions-09'),
    (2, 'francais', 'Lecture et questions', 'Un texte court, puis cinq questions : trois sur ce qui est écrit, deux sur ce qui se déduit.', 30, '', ''),
    (3, 'maison', 'La boîte à pourquoi', 'Prendre une question que tu as posée cette semaine, chercher la réponse ensemble, et s’arrêter quand on ne sait plus.', 45, '', '')
  ) as v (rang, matiere, titre, consigne, minutes, lecon, fiche)
 where j.famille_id = (select id from famille) and j.jour = '2027-03-24'
   and not exists (select 1 from seance s where s.journee_id = j.id);

insert into journee (famille_id, jour) select f.id, '2027-03-25' from famille f
  on conflict (famille_id, jour) do nothing;
insert into seance
  (journee_id, rang, matiere, titre, reference, consigne, minutes, lecon,
   fiche, par_adulte, origine)
select j.id, v.rang, v.matiere, v.titre, '', v.consigne, v.minutes, v.lecon,
       v.fiche, null, 'trame'
  from journee j
  cross join (values
    (1, 'maths', 'Les problèmes en une phrase', 'Cinq problèmes dictés, très courts. La réponse sur l’ardoise, sans écrire le calcul.', 15, '', 'cg-problemes-09'),
    (2, 'maths', 'Les tableaux et les graphiques', 'Lis la leçon, puis fais les exercices. Tes calculs sur ton brouillon, le résultat sur l’écran.', 25, 'm-p4-donnees', ''),
    (3, 'francais', 'Lire un document pour apprendre', 'Lis la leçon, puis fais les exercices. Tes calculs sur ton brouillon, le résultat sur l’écran.', 25, 'f-p4-documents', ''),
    (4, 'francais', 'Dictée de mots', 'Quinze mots de la liste en cours. On corrige ensemble, et on réécrit trois fois ceux qui ont hésité.', 20, '', 'ed-mots-14'),
    (5, 'francais', 'Lecture à voix haute', 'Une page préparée, lue à voix haute en respectant la ponctuation. On marque au crayon où respirer.', 30, '', 'lt-voix-14'),
    (6, 'sciences', 'Qu’est-ce qu’une espèce ? — on reprend', 'On relit le cours, puis on refait les exercices. Tes calculs sur ton brouillon, le résultat sur l’écran.', 30, 's-p4-espece', ''),
    (7, 'maison', 'Course et endurance', 'Courir sans s’arrêter, en augmentant un peu chaque semaine. On chronomètre, on ne compare à personne.', 30, '', 'dh-course-14')
  ) as v (rang, matiere, titre, consigne, minutes, lecon, fiche)
 where j.famille_id = (select id from famille) and j.jour = '2027-03-25'
   and not exists (select 1 from seance s where s.journee_id = j.id);

insert into journee (famille_id, jour) select f.id, '2027-03-26' from famille f
  on conflict (famille_id, jour) do nothing;
insert into seance
  (journee_id, rang, matiere, titre, reference, consigne, minutes, lecon,
   fiche, par_adulte, origine)
select j.id, v.rang, v.matiere, v.titre, '', v.consigne, v.minutes, v.lecon,
       v.fiche, null, 'trame'
  from journee j
  cross join (values
    (1, 'maths', 'Encadrer et arrondir', 'Entre quels milliers se trouve 6 480 ? Quel est l’arrondi de 12,94 ? Dix questions.', 15, '', 'cg-encadrer-09'),
    (2, 'maths', 'Géométrie : tracer', 'Un programme de construction à suivre à la règle, à l’équerre et au compas. La précision compte.', 30, '', 'em-trace-07'),
    (3, 'francais', 'Les homophones', 'Un texte à trous : a/à, est/et, son/sont, ont/on. Justifier chaque choix par le test de remplacement.', 25, '', ''),
    (4, 'francais', 'Dictée de phrases', 'Trois phrases. On souligne les verbes et on entoure les sujets avant de corriger.', 20, '', 'ed-phrases-14'),
    (5, 'francais', 'Lecture silencieuse', 'Vingt minutes dans le livre en cours, puis raconter ce qui vient de se passer.', 30, '', 'lt-silence-14'),
    (6, 'anglais', 'Le temps qu’il fait et les saisons', 'Lis la leçon, puis fais les exercices. Tes calculs sur ton brouillon, le résultat sur l’écran.', 25, 'a-p4-meteo', ''),
    (7, 'maison', 'Jeux de ballon', 'Passes, tirs, jonglages. Compter les réussites de suite, battre son propre score.', 30, '', 'dh-ballon-14')
  ) as v (rang, matiere, titre, consigne, minutes, lecon, fiche)
 where j.famille_id = (select id from famille) and j.jour = '2027-03-26'
   and not exists (select 1 from seance s where s.journee_id = j.id);

insert into journee (famille_id, jour) select f.id, '2027-03-30' from famille f
  on conflict (famille_id, jour) do nothing;
insert into seance
  (journee_id, rang, matiere, titre, reference, consigne, minutes, lecon,
   fiche, par_adulte, origine)
select j.id, v.rang, v.matiere, v.titre, '', v.consigne, v.minutes, v.lecon,
       v.fiche, null, 'trame'
  from journee j
  cross join (values
    (1, 'maths', 'Les unités de mesure', 'Combien de grammes dans 2 kg 500 ? De centimètres dans 3 m 50 ? Dix questions.', 15, '', 'cg-unites-09'),
    (2, 'maths', 'Mesurer pour de vrai', 'Mesurer des objets de la maison, noter en deux unités différentes, comparer aux estimations faites avant.', 30, '', 'em-mesure-06'),
    (3, 'francais', 'Vocabulaire', 'Dix mots : trouver un synonyme, un contraire, et un mot de la même famille pour chacun.', 25, '', ''),
    (4, 'francais', 'Copie soignée', 'Copier huit lignes d’un texte au choix, le plus soigneusement possible. On relit avant de rendre.', 20, '', 'ec-copie-14'),
    (5, 'francais', 'Lecture et questions', 'Un texte court, puis cinq questions : trois sur ce qui est écrit, deux sur ce qui se déduit.', 30, '', ''),
    (6, 'francais', 'Écrire un dialogue', 'Deux personnages, six répliques. Tirets, verbes de parole variés, une ligne par personne.', 25, '', 'rd-dialogue-02'),
    (7, 'maison', 'Vélo', 'Une sortie. Repérer le trajet sur un plan avant de partir, puis le raconter au retour.', 30, '', 'dh-velo-14')
  ) as v (rang, matiere, titre, consigne, minutes, lecon, fiche)
 where j.famille_id = (select id from famille) and j.jour = '2027-03-30'
   and not exists (select 1 from seance s where s.journee_id = j.id);

insert into journee (famille_id, jour) select f.id, '2027-03-31' from famille f
  on conflict (famille_id, jour) do nothing;
insert into seance
  (journee_id, rang, matiere, titre, reference, consigne, minutes, lecon,
   fiche, par_adulte, origine)
select j.id, v.rang, v.matiere, v.titre, '', v.consigne, v.minutes, v.lecon,
       v.fiche, null, 'trame'
  from journee j
  cross join (values
    (1, 'maths', 'Les durées', 'De 8 h 45 à 12 h 30, combien de temps ? Cinq calculs de durée, à l’oral.', 15, '', 'cg-durees-09'),
    (2, 'geographie', 'Deux façons de mesurer une distance', 'Lis la leçon, puis fais les exercices. Tes calculs sur ton brouillon, le résultat sur l’écran.', 30, 'g-p4-distances', ''),
    (3, 'maison', 'Construire quelque chose', 'Un objet qui marche : un pont en papier qui porte un livre, un moulin, un circuit. Croquis d’abord.', 45, '', '')
  ) as v (rang, matiere, titre, consigne, minutes, lecon, fiche)
 where j.famille_id = (select id from famille) and j.jour = '2027-03-31'
   and not exists (select 1 from seance s where s.journee_id = j.id);

insert into journee (famille_id, jour) select f.id, '2027-04-01' from famille f
  on conflict (famille_id, jour) do nothing;
insert into seance
  (journee_id, rang, matiere, titre, reference, consigne, minutes, lecon,
   fiche, par_adulte, origine)
select j.id, v.rang, v.matiere, v.titre, '', v.consigne, v.minutes, v.lecon,
       v.fiche, null, 'trame'
  from journee j
  cross join (values
    (1, 'maths', 'Les tables de multiplication', 'Dix multiplications dictées, à l’ardoise. On efface entre chaque. On redit celles qui ont hésité.', 15, '', 'cm-tables-10'),
    (2, 'maths', 'Les aires — on reprend', 'On relit le cours, puis on refait les exercices. Tes calculs sur ton brouillon, le résultat sur l’écran.', 30, 'm-p4-aires', ''),
    (3, 'francais', 'Les verbes qui changent de radical — on reprend', 'On relit le cours, puis on refait les exercices. Tes calculs sur ton brouillon, le résultat sur l’écran.', 25, 'f-p4-radical', ''),
    (4, 'francais', 'Les mots invariables', 'Apprendre dix mots invariables, puis les écrire sous la dictée.', 20, '', 'ec-invar-14'),
    (5, 'francais', 'Poésie', 'Lire un poème à voix haute, plusieurs fois. Repérer les rimes et les images. En apprendre quatre vers.', 30, '', 'lf-poesie-14'),
    (6, 'sciences', 'Comment grandissent les animaux — on reprend', 'On relit le cours, puis on refait les exercices. Tes calculs sur ton brouillon, le résultat sur l’écran.', 30, 's-p4-developpement', ''),
    (7, 'maison', 'Marche et observation', 'Une marche d’une demi-heure. Rapporter trois choses observées, à noter ou à dessiner.', 30, '', 'dh-marche-14')
  ) as v (rang, matiere, titre, consigne, minutes, lecon, fiche)
 where j.famille_id = (select id from famille) and j.jour = '2027-04-01'
   and not exists (select 1 from seance s where s.journee_id = j.id);

insert into journee (famille_id, jour) select f.id, '2027-04-02' from famille f
  on conflict (famille_id, jour) do nothing;
insert into seance
  (journee_id, rang, matiere, titre, reference, consigne, minutes, lecon,
   fiche, par_adulte, origine)
select j.id, v.rang, v.matiere, v.titre, '', v.consigne, v.minutes, v.lecon,
       v.fiche, null, 'trame'
  from journee j
  cross join (values
    (1, 'maths', 'Les doubles et les moitiés', 'Le double de 45, la moitié de 68, le double de 250… Dix questions, à l’oral.', 15, '', 'cm-doubles-10'),
    (2, 'maths', 'Les angles — on reprend', 'On relit le cours, puis on refait les exercices. Tes calculs sur ton brouillon, le résultat sur l’écran.', 25, 'm-p4-angles', ''),
    (3, 'francais', 'Transformer une phrase sans casser les accords — on reprend', 'On relit le cours, puis on refait les exercices. Tes calculs sur ton brouillon, le résultat sur l’écran.', 30, 'f-p4-chaine', ''),
    (4, 'francais', 'Transformer des phrases', 'Mettre cinq phrases au pluriel, en respectant toute la chaîne d’accords. À l’écrit.', 20, '', 'ec-transf-14'),
    (5, 'francais', 'Lecture d’une bande dessinée', 'Une planche. Puis expliquer ce que les images racontent et que le texte ne dit pas.', 30, '', 'lf-bd-14'),
    (6, 'histoire', 'Les grandes explorations — on reprend', 'On relit le cours, puis on refait les exercices. Tes calculs sur ton brouillon, le résultat sur l’écran.', 30, 'h-p4-explorations', ''),
    (7, 'maison', 'Jeux de raquette', 'Échanges contre un mur ou à deux. Compter les échanges tenus sans faute.', 30, '', 'dh-raquette-14')
  ) as v (rang, matiere, titre, consigne, minutes, lecon, fiche)
 where j.famille_id = (select id from famille) and j.jour = '2027-04-02'
   and not exists (select 1 from seance s where s.journee_id = j.id);

insert into journee (famille_id, jour) select f.id, '2027-04-05' from famille f
  on conflict (famille_id, jour) do nothing;
insert into seance
  (journee_id, rang, matiere, titre, reference, consigne, minutes, lecon,
   fiche, par_adulte, origine)
select j.id, v.rang, v.matiere, v.titre, '', v.consigne, v.minutes, v.lecon,
       v.fiche, null, 'trame'
  from journee j
  cross join (values
    (1, 'maths', 'Les compléments à 100', 'Combien manque-t-il à 67 pour aller à 100 ? Dix questions. Puis les compléments à 1 000.', 15, '', 'cm-cent-10'),
    (2, 'maths', 'Reprendre la leçon de maths', 'Refaire les exercices de la dernière leçon de maths, sur le cahier cette fois. Comparer avec ce qui avait été trouvé.', 30, '', 'em-reprise-07'),
    (3, 'francais', 'Reprendre la leçon de français', 'Refaire les exercices de la dernière leçon de français, sur le cahier.', 25, '', ''),
    (4, 'francais', 'Dictée à trous', 'Le texte est écrit, il manque les terminaisons des verbes. On les complète en justifiant.', 20, '', 'ed-trous-14'),
    (5, 'francais', 'Lecture de théâtre', 'Une scène, lue à deux voix. Les didascalies ne se disent pas : elles se jouent.', 30, '', 'lf-theatre-14'),
    (6, 'geographie', 'Comment se déplace-t-on dans le monde ? — on reprend', 'On relit le cours, puis on refait les exercices. Tes calculs sur ton brouillon, le résultat sur l’écran.', 25, 'g-p4-se-deplacer', ''),
    (7, 'maison', 'Danse et rythme', 'Suivre une pulsation, inventer une suite de mouvements de huit temps, la refaire à l’identique.', 30, '', 'dh-danse-14')
  ) as v (rang, matiere, titre, consigne, minutes, lecon, fiche)
 where j.famille_id = (select id from famille) and j.jour = '2027-04-05'
   and not exists (select 1 from seance s where s.journee_id = j.id);

insert into journee (famille_id, jour) select f.id, '2027-04-06' from famille f
  on conflict (famille_id, jour) do nothing;
insert into seance
  (journee_id, rang, matiere, titre, reference, consigne, minutes, lecon,
   fiche, par_adulte, origine)
select j.id, v.rang, v.matiere, v.titre, '', v.consigne, v.minutes, v.lecon,
       v.fiche, null, 'trame'
  from journee j
  cross join (values
    (1, 'maths', 'Ajouter 9, 19, 29', 'On ajoute la dizaine ronde et on retire 1. Dix questions, en disant la procédure à voix haute.', 15, '', 'cm-neuf-10'),
    (2, 'maths', 'L’heure et les durées — on reprend', 'On relit le cours, puis on refait les exercices. Tes calculs sur ton brouillon, le résultat sur l’écran.', 30, 'm-p4-durees', ''),
    (3, 'francais', 'Les mots à plusieurs sens — on reprend', 'On relit le cours, puis on refait les exercices. Tes calculs sur ton brouillon, le résultat sur l’écran.', 25, 'f-p4-polysemie', ''),
    (4, 'francais', 'Auto-dictée', 'Apprendre quatre lignes par cœur la veille, les écrire de mémoire aujourd’hui.', 20, '', 'ed-auto-14'),
    (5, 'francais', 'Lecture libre', 'Le livre que tu veux, sans compte à rendre. On te demande seulement si tu as aimé, et pourquoi.', 30, '', 'lf-libre-02'),
    (6, 'sciences', 'Les écosystèmes et les chaînes alimentaires — on reprend', 'On relit le cours, puis on refait les exercices. Tes calculs sur ton brouillon, le résultat sur l’écran.', 30, 's-p4-ecosystemes', ''),
    (7, 'maison', 'Jardinage ou bricolage', 'Planter, arroser, mesurer, réparer. Le travail des mains compte autant que le reste.', 30, '', 'dh-mains-14')
  ) as v (rang, matiere, titre, consigne, minutes, lecon, fiche)
 where j.famille_id = (select id from famille) and j.jour = '2027-04-06'
   and not exists (select 1 from seance s where s.journee_id = j.id);

insert into journee (famille_id, jour) select f.id, '2027-04-07' from famille f
  on conflict (famille_id, jour) do nothing;
insert into seance
  (journee_id, rang, matiere, titre, reference, consigne, minutes, lecon,
   fiche, par_adulte, origine)
select j.id, v.rang, v.matiere, v.titre, '', v.consigne, v.minutes, v.lecon,
       v.fiche, null, 'trame'
  from journee j
  cross join (values
    (1, 'maths', 'Multiplier par 10, 100, 1 000', 'Dix questions rapides. Puis diviser par 10 : 320 ÷ 10, 4 500 ÷ 10.', 15, '', 'cm-dix-10'),
    (2, 'anglais', 'La nourriture, et ce qu’on aime — on reprend', 'On relit le cours, puis on refait les exercices. Tes calculs sur ton brouillon, le résultat sur l’écran.', 25, 'a-p4-nourriture', ''),
    (3, 'maison', 'Cuisine et mesures', 'Une recette, en pesant et en convertissant. Doubler les quantités pour voir ce que ça change.', 45, '', '')
  ) as v (rang, matiere, titre, consigne, minutes, lecon, fiche)
 where j.famille_id = (select id from famille) and j.jour = '2027-04-07'
   and not exists (select 1 from seance s where s.journee_id = j.id);

insert into journee (famille_id, jour) select f.id, '2027-04-08' from famille f
  on conflict (famille_id, jour) do nothing;
insert into seance
  (journee_id, rang, matiere, titre, reference, consigne, minutes, lecon,
   fiche, par_adulte, origine)
select j.id, v.rang, v.matiere, v.titre, '', v.consigne, v.minutes, v.lecon,
       v.fiche, null, 'trame'
  from journee j
  cross join (values
    (1, 'maths', 'Multiplier par 4 et par 8', 'Par 4, c’est doubler deux fois. Par 8, trois fois. Dix questions en disant les étapes.', 15, '', 'cm-quatre-10'),
    (2, 'maths', 'Le nombre du jour', 'Un nombre au tableau. Le décomposer de cinq façons, l’encadrer, dire son nombre de centaines, le doubler.', 30, '', 'em-nombre-02'),
    (3, 'francais', 'Le dictionnaire', 'Chercher cinq mots rencontrés cette semaine. Relever la nature du mot et ses différents sens.', 25, '', ''),
    (4, 'francais', 'Dictée de phrases', 'Trois phrases. On souligne les verbes et on entoure les sujets avant de corriger.', 20, '', 'ed-phrases-15'),
    (5, 'francais', 'Lecture silencieuse', 'Vingt minutes dans le livre en cours, puis raconter ce qui vient de se passer.', 30, '', 'lt-silence-15'),
    (6, 'francais', 'Raconter sa journée d’hier', 'Dix lignes au passé. Vérifier que les temps ne changent pas en cours de route.', 25, '', 'rd-hier-05'),
    (7, 'maison', 'Jeux de ballon', 'Passes, tirs, jonglages. Compter les réussites de suite, battre son propre score.', 30, '', 'dh-ballon-15')
  ) as v (rang, matiere, titre, consigne, minutes, lecon, fiche)
 where j.famille_id = (select id from famille) and j.jour = '2027-04-08'
   and not exists (select 1 from seance s where s.journee_id = j.id);

insert into journee (famille_id, jour) select f.id, '2027-04-09' from famille f
  on conflict (famille_id, jour) do nothing;
insert into seance
  (journee_id, rang, matiere, titre, reference, consigne, minutes, lecon,
   fiche, par_adulte, origine)
select j.id, v.rang, v.matiere, v.titre, '', v.consigne, v.minutes, v.lecon,
       v.fiche, null, 'trame'
  from journee j
  cross join (values
    (1, 'maths', 'Multiplier par 5 et par 50', 'Par 5, c’est la moitié de par 10. Par 50, la moitié de par 100. Dix questions.', 15, '', 'cm-cinq-10'),
    (2, 'maths', 'La proportionnalité — on reprend', 'On relit le cours, puis on refait les exercices. Tes calculs sur ton brouillon, le résultat sur l’écran.', 30, 'm-p4-proportionnalite', ''),
    (3, 'francais', 'Qu’est-ce qu’un héros ? — on reprend', 'On relit le cours, puis on refait les exercices. Tes calculs sur ton brouillon, le résultat sur l’écran.', 30, 'f-p4-heros', ''),
    (4, 'francais', 'Copie soignée', 'Copier huit lignes d’un texte au choix, le plus soigneusement possible. On relit avant de rendre.', 20, '', 'ec-copie-15'),
    (5, 'francais', 'Lecture et questions', 'Un texte court, puis cinq questions : trois sur ce qui est écrit, deux sur ce qui se déduit.', 30, '', ''),
    (6, 'geographie', 'Deux façons de mesurer une distance — on reprend', 'On relit le cours, puis on refait les exercices. Tes calculs sur ton brouillon, le résultat sur l’écran.', 30, 'g-p4-distances', ''),
    (7, 'maison', 'Vélo', 'Une sortie. Repérer le trajet sur un plan avant de partir, puis le raconter au retour.', 30, '', 'dh-velo-15')
  ) as v (rang, matiere, titre, consigne, minutes, lecon, fiche)
 where j.famille_id = (select id from famille) and j.jour = '2027-04-09'
   and not exists (select 1 from seance s where s.journee_id = j.id);

insert into journee (famille_id, jour) select f.id, '2027-04-12' from famille f
  on conflict (famille_id, jour) do nothing;
insert into seance
  (journee_id, rang, matiere, titre, reference, consigne, minutes, lecon,
   fiche, par_adulte, origine)
select j.id, v.rang, v.matiere, v.titre, '', v.consigne, v.minutes, v.lecon,
       v.fiche, null, 'trame'
  from journee j
  cross join (values
    (1, 'maths', 'Les fractions d’une quantité', 'La moitié de 36, le tiers de 24, les trois quarts de 20. Dix questions à l’oral.', 15, '', 'cg-fractions-10'),
    (2, 'maths', 'Le calcul mental : les chemins courts — on reprend', 'On relit le cours, puis on refait les exercices. Tes calculs sur ton brouillon, le résultat sur l’écran.', 25, 'm-p4-calcul-mental', ''),
    (3, 'francais', 'Le goût des mots : la poésie — on reprend', 'On relit le cours, puis on refait les exercices. Tes calculs sur ton brouillon, le résultat sur l’écran.', 25, 'f-p4-poesie', ''),
    (4, 'francais', 'Dictée préparée', 'Le texte a été lu la veille. On le dicte, puis on compare avec l’original.', 20, '', 'ed-preparee-15'),
    (5, 'francais', 'Lecture d’un documentaire', 'Une double page documentaire. Relever la nature et la source du document avant de lire.', 30, '', ''),
    (6, 'emc', 'L’égalité entre les filles et les garçons — on reprend', 'On relit le cours, puis on refait les exercices. Tes calculs sur ton brouillon, le résultat sur l’écran.', 30, 'e-p4-egalite', ''),
    (7, 'maison', 'Parcours et équilibre', 'Un parcours à installer soi-même : sauter, grimper, tenir en équilibre, ramper.', 30, '', 'dh-parcours-15')
  ) as v (rang, matiere, titre, consigne, minutes, lecon, fiche)
 where j.famille_id = (select id from famille) and j.jour = '2027-04-12'
   and not exists (select 1 from seance s where s.journee_id = j.id);

insert into journee (famille_id, jour) select f.id, '2027-04-13' from famille f
  on conflict (famille_id, jour) do nothing;
insert into seance
  (journee_id, rang, matiere, titre, reference, consigne, minutes, lecon,
   fiche, par_adulte, origine)
select j.id, v.rang, v.matiere, v.titre, '', v.consigne, v.minutes, v.lecon,
       v.fiche, null, 'trame'
  from journee j
  cross join (values
    (1, 'maths', 'Les problèmes en une phrase', 'Cinq problèmes dictés, très courts. La réponse sur l’ardoise, sans écrire le calcul.', 15, '', 'cg-problemes-10'),
    (2, 'maths', 'Reprendre la leçon de maths', 'Refaire les exercices de la dernière leçon de maths, sur le cahier cette fois. Comparer avec ce qui avait été trouvé.', 30, '', 'em-reprise-08'),
    (3, 'francais', 'Reprendre la leçon de français', 'Refaire les exercices de la dernière leçon de français, sur le cahier.', 25, '', ''),
    (4, 'francais', 'Les mots invariables', 'Apprendre dix mots invariables, puis les écrire sous la dictée.', 20, '', 'ec-invar-15'),
    (5, 'francais', 'Poésie', 'Lire un poème à voix haute, plusieurs fois. Repérer les rimes et les images. En apprendre quatre vers.', 30, '', 'lf-poesie-15'),
    (6, 'francais', 'Donner son avis', 'Ce que je pense, pourquoi, un exemple. Huit lignes. Les trois morceaux doivent y être.', 25, '', 'rd-avis-01'),
    (7, 'maison', 'Marche et observation', 'Une marche d’une demi-heure. Rapporter trois choses observées, à noter ou à dessiner.', 30, '', 'dh-marche-15')
  ) as v (rang, matiere, titre, consigne, minutes, lecon, fiche)
 where j.famille_id = (select id from famille) and j.jour = '2027-04-13'
   and not exists (select 1 from seance s where s.journee_id = j.id);

insert into journee (famille_id, jour) select f.id, '2027-04-14' from famille f
  on conflict (famille_id, jour) do nothing;
insert into seance
  (journee_id, rang, matiere, titre, reference, consigne, minutes, lecon,
   fiche, par_adulte, origine)
select j.id, v.rang, v.matiere, v.titre, '', v.consigne, v.minutes, v.lecon,
       v.fiche, null, 'trame'
  from journee j
  cross join (values
    (1, 'maths', 'Encadrer et arrondir', 'Entre quels milliers se trouve 6 480 ? Quel est l’arrondi de 12,94 ? Dix questions.', 15, '', 'cg-encadrer-10'),
    (2, 'histoire', 'Les empires coloniaux et l’esclavage — on reprend', 'On relit le cours, puis on refait les exercices. Tes calculs sur ton brouillon, le résultat sur l’écran.', 30, 'h-p4-colonisation', ''),
    (3, 'maison', 'Démonter un objet', 'Un vieil appareil, un stylo, une serrure. Nommer les pièces et dire à quoi chacune sert.', 45, '', '')
  ) as v (rang, matiere, titre, consigne, minutes, lecon, fiche)
 where j.famille_id = (select id from famille) and j.jour = '2027-04-14'
   and not exists (select 1 from seance s where s.journee_id = j.id);

insert into journee (famille_id, jour) select f.id, '2027-04-15' from famille f
  on conflict (famille_id, jour) do nothing;
insert into seance
  (journee_id, rang, matiere, titre, reference, consigne, minutes, lecon,
   fiche, par_adulte, origine)
select j.id, v.rang, v.matiere, v.titre, '', v.consigne, v.minutes, v.lecon,
       v.fiche, null, 'trame'
  from journee j
  cross join (values
    (1, 'maths', 'Les unités de mesure', 'Combien de grammes dans 2 kg 500 ? De centimètres dans 3 m 50 ? Dix questions.', 15, '', 'cg-unites-10'),
    (2, 'maths', 'Les tableaux et les graphiques — on reprend', 'On relit le cours, puis on refait les exercices. Tes calculs sur ton brouillon, le résultat sur l’écran.', 25, 'm-p4-donnees', ''),
    (3, 'francais', 'Lire un document pour apprendre — on reprend', 'On relit le cours, puis on refait les exercices. Tes calculs sur ton brouillon, le résultat sur l’écran.', 25, 'f-p4-documents', ''),
    (4, 'francais', 'Dictée à trous', 'Le texte est écrit, il manque les terminaisons des verbes. On les complète en justifiant.', 20, '', 'ed-trous-15'),
    (5, 'francais', 'Lecture de théâtre', 'Une scène, lue à deux voix. Les didascalies ne se disent pas : elles se jouent.', 30, '', 'lf-theatre-15'),
    (6, 'francais', 'Écrire une lettre', 'Une lettre à quelqu’un de la famille. Formule d’appel, corps, formule de fin.', 25, '', 'rd-lettre-06'),
    (7, 'maison', 'Danse et rythme', 'Suivre une pulsation, inventer une suite de mouvements de huit temps, la refaire à l’identique.', 30, '', 'dh-danse-15')
  ) as v (rang, matiere, titre, consigne, minutes, lecon, fiche)
 where j.famille_id = (select id from famille) and j.jour = '2027-04-15'
   and not exists (select 1 from seance s where s.journee_id = j.id);

insert into journee (famille_id, jour) select f.id, '2027-04-16' from famille f
  on conflict (famille_id, jour) do nothing;
insert into seance
  (journee_id, rang, matiere, titre, reference, consigne, minutes, lecon,
   fiche, par_adulte, origine)
select j.id, v.rang, v.matiere, v.titre, '', v.consigne, v.minutes, v.lecon,
       v.fiche, null, 'trame'
  from journee j
  cross join (values
    (1, 'maths', 'Les durées', 'De 8 h 45 à 12 h 30, combien de temps ? Cinq calculs de durée, à l’oral.', 15, '', 'cg-durees-10'),
    (2, 'maths', 'Le nombre du jour', 'Un nombre au tableau. Le décomposer de cinq façons, l’encadrer, dire son nombre de centaines, le doubler.', 30, '', 'em-nombre-03'),
    (3, 'francais', 'Le dictionnaire', 'Chercher cinq mots rencontrés cette semaine. Relever la nature du mot et ses différents sens.', 25, '', ''),
    (4, 'francais', 'Auto-dictée', 'Apprendre quatre lignes par cœur la veille, les écrire de mémoire aujourd’hui.', 20, '', 'ed-auto-15'),
    (5, 'francais', 'Lecture libre', 'Le livre que tu veux, sans compte à rendre. On te demande seulement si tu as aimé, et pourquoi.', 30, '', 'lf-libre-03'),
    (6, 'francais', 'Inventer un problème', 'Écrire un problème de mathématiques à deux étapes, avec sa solution sur une autre feuille.', 25, '', 'rd-probleme-03'),
    (7, 'maison', 'Jardinage ou bricolage', 'Planter, arroser, mesurer, réparer. Le travail des mains compte autant que le reste.', 30, '', 'dh-mains-15')
  ) as v (rang, matiere, titre, consigne, minutes, lecon, fiche)
 where j.famille_id = (select id from famille) and j.jour = '2027-04-16'
   and not exists (select 1 from seance s where s.journee_id = j.id);

insert into journee (famille_id, jour) select f.id, '2027-05-03' from famille f
  on conflict (famille_id, jour) do nothing;
insert into seance
  (journee_id, rang, matiere, titre, reference, consigne, minutes, lecon,
   fiche, par_adulte, origine)
select j.id, v.rang, v.matiere, v.titre, '', v.consigne, v.minutes, v.lecon,
       v.fiche, null, 'trame'
  from journee j
  cross join (values
    (1, 'maths', 'Les tables de multiplication', 'Dix multiplications dictées, à l’ardoise. On efface entre chaque. On redit celles qui ont hésité.', 15, '', 'cm-tables-11'),
    (2, 'maths', 'Les figures et leurs propriétés', 'Lis la leçon, puis fais les exercices. Tes calculs sur ton brouillon, le résultat sur l’écran.', 30, 'm-p5-figures', ''),
    (3, 'francais', 'Le merveilleux et l’étrange', 'Lis la leçon, puis fais les exercices. Tes calculs sur ton brouillon, le résultat sur l’écran.', 25, 'f-p5-merveilleux', ''),
    (4, 'francais', 'Dictée de mots', 'Quinze mots de la liste en cours. On corrige ensemble, et on réécrit trois fois ceux qui ont hésité.', 20, '', 'ed-mots-16'),
    (5, 'francais', 'Lecture à voix haute', 'Une page préparée, lue à voix haute en respectant la ponctuation. On marque au crayon où respirer.', 30, '', 'lt-voix-16'),
    (6, 'sciences', 'La météo et les saisons', 'Lis la leçon, puis fais les exercices. Tes calculs sur ton brouillon, le résultat sur l’écran.', 30, 's-p5-meteo', ''),
    (7, 'maison', 'Course et endurance', 'Courir sans s’arrêter, en augmentant un peu chaque semaine. On chronomètre, on ne compare à personne.', 30, '', 'dh-course-16')
  ) as v (rang, matiere, titre, consigne, minutes, lecon, fiche)
 where j.famille_id = (select id from famille) and j.jour = '2027-05-03'
   and not exists (select 1 from seance s where s.journee_id = j.id);

insert into journee (famille_id, jour) select f.id, '2027-05-04' from famille f
  on conflict (famille_id, jour) do nothing;
insert into seance
  (journee_id, rang, matiere, titre, reference, consigne, minutes, lecon,
   fiche, par_adulte, origine)
select j.id, v.rang, v.matiere, v.titre, '', v.consigne, v.minutes, v.lecon,
       v.fiche, null, 'trame'
  from journee j
  cross join (values
    (1, 'maths', 'Les doubles et les moitiés', 'Le double de 45, la moitié de 68, le double de 250… Dix questions, à l’oral.', 15, '', 'cm-doubles-11'),
    (2, 'maths', 'Problèmes du jour', 'Trois problèmes sur le cahier. Pour chacun : ce qu’on cherche, ce qu’on sait, le calcul, la phrase de réponse.', 30, '', 'em-prob-01'),
    (3, 'francais', 'Conjugaison', 'Trois verbes, aux quatre temps connus, à toutes les personnes. Sur le cahier, sans modèle.', 25, '', ''),
    (4, 'francais', 'Dictée de phrases', 'Trois phrases. On souligne les verbes et on entoure les sujets avant de corriger.', 20, '', 'ed-phrases-16'),
    (5, 'francais', 'Lecture silencieuse', 'Vingt minutes dans le livre en cours, puis raconter ce qui vient de se passer.', 30, '', 'lt-silence-16'),
    (6, 'histoire', 'Le royaume en 1789 et les Lumières', 'Lis la leçon, puis fais les exercices. Tes calculs sur ton brouillon, le résultat sur l’écran.', 30, 'h-p5-royaume-1789', ''),
    (7, 'maison', 'Jeux de ballon', 'Passes, tirs, jonglages. Compter les réussites de suite, battre son propre score.', 30, '', 'dh-ballon-16')
  ) as v (rang, matiere, titre, consigne, minutes, lecon, fiche)
 where j.famille_id = (select id from famille) and j.jour = '2027-05-04'
   and not exists (select 1 from seance s where s.journee_id = j.id);

insert into journee (famille_id, jour) select f.id, '2027-05-05' from famille f
  on conflict (famille_id, jour) do nothing;
insert into seance
  (journee_id, rang, matiere, titre, reference, consigne, minutes, lecon,
   fiche, par_adulte, origine)
select j.id, v.rang, v.matiere, v.titre, '', v.consigne, v.minutes, v.lecon,
       v.fiche, null, 'trame'
  from journee j
  cross join (values
    (1, 'maths', 'Les compléments à 100', 'Combien manque-t-il à 67 pour aller à 100 ? Dix questions. Puis les compléments à 1 000.', 15, '', 'cm-cent-11'),
    (2, 'geographie', 'Comment marche Internet', 'Lis la leçon, puis fais les exercices. Tes calculs sur ton brouillon, le résultat sur l’écran.', 35, 'g-p5-internet', ''),
    (3, 'maison', 'Une carte', 'Dessiner le plan du quartier de mémoire, puis le comparer à une vraie carte. Chercher ce qui manque.', 45, '', '')
  ) as v (rang, matiere, titre, consigne, minutes, lecon, fiche)
 where j.famille_id = (select id from famille) and j.jour = '2027-05-05'
   and not exists (select 1 from seance s where s.journee_id = j.id);

insert into journee (famille_id, jour) select f.id, '2027-05-10' from famille f
  on conflict (famille_id, jour) do nothing;
insert into seance
  (journee_id, rang, matiere, titre, reference, consigne, minutes, lecon,
   fiche, par_adulte, origine)
select j.id, v.rang, v.matiere, v.titre, '', v.consigne, v.minutes, v.lecon,
       v.fiche, null, 'trame'
  from journee j
  cross join (values
    (1, 'maths', 'Ajouter 9, 19, 29', 'On ajoute la dizaine ronde et on retire 1. Dix questions, en disant la procédure à voix haute.', 15, '', 'cm-neuf-11'),
    (2, 'maths', 'Géométrie : tracer', 'Un programme de construction à suivre à la règle, à l’équerre et au compas. La précision compte.', 30, '', 'em-trace-10'),
    (3, 'francais', 'Les homophones', 'Un texte à trous : a/à, est/et, son/sont, ont/on. Justifier chaque choix par le test de remplacement.', 25, '', ''),
    (4, 'francais', 'Dictée préparée', 'Le texte a été lu la veille. On le dicte, puis on compare avec l’original.', 20, '', 'ed-preparee-01'),
    (5, 'francais', 'Lecture d’un documentaire', 'Une double page documentaire. Relever la nature et la source du document avant de lire.', 30, '', ''),
    (6, 'sciences', 'Le cerveau et l’attention', 'Lis la leçon, puis fais les exercices. Tes calculs sur ton brouillon, le résultat sur l’écran.', 30, 's-p5-cerveau', ''),
    (7, 'maison', 'Parcours et équilibre', 'Un parcours à installer soi-même : sauter, grimper, tenir en équilibre, ramper.', 30, '', 'dh-parcours-01')
  ) as v (rang, matiere, titre, consigne, minutes, lecon, fiche)
 where j.famille_id = (select id from famille) and j.jour = '2027-05-10'
   and not exists (select 1 from seance s where s.journee_id = j.id);

insert into journee (famille_id, jour) select f.id, '2027-05-11' from famille f
  on conflict (famille_id, jour) do nothing;
insert into seance
  (journee_id, rang, matiere, titre, reference, consigne, minutes, lecon,
   fiche, par_adulte, origine)
select j.id, v.rang, v.matiere, v.titre, '', v.consigne, v.minutes, v.lecon,
       v.fiche, null, 'trame'
  from journee j
  cross join (values
    (1, 'maths', 'Multiplier par 10, 100, 1 000', 'Dix questions rapides. Puis diviser par 10 : 320 ÷ 10, 4 500 ÷ 10.', 15, '', 'cm-dix-11'),
    (2, 'maths', 'Perpendiculaires et parallèles', 'Lis la leçon, puis fais les exercices. Tes calculs sur ton brouillon, le résultat sur l’écran.', 25, 'm-p5-perpendiculaires', ''),
    (3, 'francais', 'La morale d’une histoire', 'Lis la leçon, puis fais les exercices. Tes calculs sur ton brouillon, le résultat sur l’écran.', 25, 'f-p5-morale', ''),
    (4, 'francais', 'Les mots invariables', 'Apprendre dix mots invariables, puis les écrire sous la dictée.', 20, '', 'ec-invar-16'),
    (5, 'francais', 'Poésie', 'Lire un poème à voix haute, plusieurs fois. Repérer les rimes et les images. En apprendre quatre vers.', 30, '', 'lf-poesie-16'),
    (6, 'anglais', 'Les lieux et le chemin', 'Lis la leçon, puis fais les exercices. Tes calculs sur ton brouillon, le résultat sur l’écran.', 25, 'a-p5-lieux', ''),
    (7, 'maison', 'Marche et observation', 'Une marche d’une demi-heure. Rapporter trois choses observées, à noter ou à dessiner.', 30, '', 'dh-marche-16')
  ) as v (rang, matiere, titre, consigne, minutes, lecon, fiche)
 where j.famille_id = (select id from famille) and j.jour = '2027-05-11'
   and not exists (select 1 from seance s where s.journee_id = j.id);

insert into journee (famille_id, jour) select f.id, '2027-05-12' from famille f
  on conflict (famille_id, jour) do nothing;
insert into seance
  (journee_id, rang, matiere, titre, reference, consigne, minutes, lecon,
   fiche, par_adulte, origine)
select j.id, v.rang, v.matiere, v.titre, '', v.consigne, v.minutes, v.lecon,
       v.fiche, null, 'trame'
  from journee j
  cross join (values
    (1, 'maths', 'Multiplier par 4 et par 8', 'Par 4, c’est doubler deux fois. Par 8, trois fois. Dix questions en disant les étapes.', 15, '', 'cm-quatre-11'),
    (2, 'emc', 'Décider ensemble : le vote', 'Lis la leçon, puis fais les exercices. Tes calculs sur ton brouillon, le résultat sur l’écran.', 30, 'e-p5-decider', ''),
    (3, 'maison', 'Programmer un déplacement', 'Écrire une suite d’instructions pour faire tracer une figure, puis l’exécuter à la lettre — même si c’est faux.', 45, '', '')
  ) as v (rang, matiere, titre, consigne, minutes, lecon, fiche)
 where j.famille_id = (select id from famille) and j.jour = '2027-05-12'
   and not exists (select 1 from seance s where s.journee_id = j.id);

insert into journee (famille_id, jour) select f.id, '2027-05-13' from famille f
  on conflict (famille_id, jour) do nothing;
insert into seance
  (journee_id, rang, matiere, titre, reference, consigne, minutes, lecon,
   fiche, par_adulte, origine)
select j.id, v.rang, v.matiere, v.titre, '', v.consigne, v.minutes, v.lecon,
       v.fiche, null, 'trame'
  from journee j
  cross join (values
    (1, 'maths', 'Multiplier par 5 et par 50', 'Par 5, c’est la moitié de par 10. Par 50, la moitié de par 100. Dix questions.', 15, '', 'cm-cinq-11'),
    (2, 'maths', 'Opérations posées', 'Quatre additions, quatre soustractions, deux multiplications. Estimer avant, vérifier après.', 30, '', 'em-ops-06'),
    (3, 'francais', 'Analyser des phrases', 'Cinq phrases : souligner le sujet, entourer le verbe, encadrer les compléments. Dire lesquels se déplacent.', 25, '', 'ef-phrases-01'),
    (4, 'francais', 'Dictée à trous', 'Le texte est écrit, il manque les terminaisons des verbes. On les complète en justifiant.', 20, '', 'ed-trous-16'),
    (5, 'francais', 'Lecture de théâtre', 'Une scène, lue à deux voix. Les didascalies ne se disent pas : elles se jouent.', 30, '', 'lf-theatre-16'),
    (6, 'francais', 'Écrire une lettre', 'Une lettre à quelqu’un de la famille. Formule d’appel, corps, formule de fin.', 25, '', 'rd-lettre-07'),
    (7, 'maison', 'Danse et rythme', 'Suivre une pulsation, inventer une suite de mouvements de huit temps, la refaire à l’identique.', 30, '', 'dh-danse-16')
  ) as v (rang, matiere, titre, consigne, minutes, lecon, fiche)
 where j.famille_id = (select id from famille) and j.jour = '2027-05-13'
   and not exists (select 1 from seance s where s.journee_id = j.id);

insert into journee (famille_id, jour) select f.id, '2027-05-14' from famille f
  on conflict (famille_id, jour) do nothing;
insert into seance
  (journee_id, rang, matiere, titre, reference, consigne, minutes, lecon,
   fiche, par_adulte, origine)
select j.id, v.rang, v.matiere, v.titre, '', v.consigne, v.minutes, v.lecon,
       v.fiche, null, 'trame'
  from journee j
  cross join (values
    (1, 'maths', 'Les fractions d’une quantité', 'La moitié de 36, le tiers de 24, les trois quarts de 20. Dix questions à l’oral.', 15, '', 'cg-fractions-11'),
    (2, 'maths', 'Problèmes du jour', 'Trois problèmes sur le cahier. Pour chacun : ce qu’on cherche, ce qu’on sait, le calcul, la phrase de réponse.', 30, '', 'em-prob-02'),
    (3, 'francais', 'Conjugaison', 'Trois verbes, aux quatre temps connus, à toutes les personnes. Sur le cahier, sans modèle.', 25, '', ''),
    (4, 'francais', 'Auto-dictée', 'Apprendre quatre lignes par cœur la veille, les écrire de mémoire aujourd’hui.', 20, '', 'ed-auto-16'),
    (5, 'francais', 'Lecture libre', 'Le livre que tu veux, sans compte à rendre. On te demande seulement si tu as aimé, et pourquoi.', 30, '', 'lf-libre-04'),
    (6, 'emc', 'Décider ensemble : le vote — on reprend', 'On relit le cours, puis on refait les exercices. Tes calculs sur ton brouillon, le résultat sur l’écran.', 30, 'e-p5-decider', ''),
    (7, 'maison', 'Jardinage ou bricolage', 'Planter, arroser, mesurer, réparer. Le travail des mains compte autant que le reste.', 30, '', 'dh-mains-16')
  ) as v (rang, matiere, titre, consigne, minutes, lecon, fiche)
 where j.famille_id = (select id from famille) and j.jour = '2027-05-14'
   and not exists (select 1 from seance s where s.journee_id = j.id);

insert into journee (famille_id, jour) select f.id, '2027-05-18' from famille f
  on conflict (famille_id, jour) do nothing;
insert into seance
  (journee_id, rang, matiere, titre, reference, consigne, minutes, lecon,
   fiche, par_adulte, origine)
select j.id, v.rang, v.matiere, v.titre, '', v.consigne, v.minutes, v.lecon,
       v.fiche, null, 'trame'
  from journee j
  cross join (values
    (1, 'maths', 'Les problèmes en une phrase', 'Cinq problèmes dictés, très courts. La réponse sur l’ardoise, sans écrire le calcul.', 15, '', 'cg-problemes-11'),
    (2, 'maths', 'La symétrie axiale', 'Lis la leçon, puis fais les exercices. Tes calculs sur ton brouillon, le résultat sur l’écran.', 30, 'm-p5-symetrie', ''),
    (3, 'francais', 'L’orthographe des mots', 'Lis la leçon, puis fais les exercices. Tes calculs sur ton brouillon, le résultat sur l’écran.', 25, 'f-p5-orthographe', ''),
    (4, 'francais', 'Dictée de mots', 'Quinze mots de la liste en cours. On corrige ensemble, et on réécrit trois fois ceux qui ont hésité.', 20, '', 'ed-mots-01'),
    (5, 'francais', 'Lecture à voix haute', 'Une page préparée, lue à voix haute en respectant la ponctuation. On marque au crayon où respirer.', 30, '', 'lt-voix-17'),
    (6, 'francais', 'Écrire la suite', 'Lire le début d’un récit, puis en écrire la suite : dix lignes. Brouillon d’abord.', 25, '', 'rd-suite-05'),
    (7, 'maison', 'Course et endurance', 'Courir sans s’arrêter, en augmentant un peu chaque semaine. On chronomètre, on ne compare à personne.', 30, '', 'dh-course-01')
  ) as v (rang, matiere, titre, consigne, minutes, lecon, fiche)
 where j.famille_id = (select id from famille) and j.jour = '2027-05-18'
   and not exists (select 1 from seance s where s.journee_id = j.id);

insert into journee (famille_id, jour) select f.id, '2027-05-19' from famille f
  on conflict (famille_id, jour) do nothing;
insert into seance
  (journee_id, rang, matiere, titre, reference, consigne, minutes, lecon,
   fiche, par_adulte, origine)
select j.id, v.rang, v.matiere, v.titre, '', v.consigne, v.minutes, v.lecon,
       v.fiche, null, 'trame'
  from journee j
  cross join (values
    (1, 'maths', 'Encadrer et arrondir', 'Entre quels milliers se trouve 6 480 ? Quel est l’arrondi de 12,94 ? Dix questions.', 15, '', 'cg-encadrer-11'),
    (2, 'sciences', 'Grandir : les changements du corps', 'Lis la leçon, puis fais les exercices. Tes calculs sur ton brouillon, le résultat sur l’écran.', 25, 's-p5-puberte', ''),
    (3, 'maison', 'Un métier', 'Choisir un métier, chercher ce qu’il demande d’apprendre, et qui l’exerce autour de nous.', 45, '', '')
  ) as v (rang, matiere, titre, consigne, minutes, lecon, fiche)
 where j.famille_id = (select id from famille) and j.jour = '2027-05-19'
   and not exists (select 1 from seance s where s.journee_id = j.id);

insert into journee (famille_id, jour) select f.id, '2027-05-20' from famille f
  on conflict (famille_id, jour) do nothing;
insert into seance
  (journee_id, rang, matiere, titre, reference, consigne, minutes, lecon,
   fiche, par_adulte, origine)
select j.id, v.rang, v.matiere, v.titre, '', v.consigne, v.minutes, v.lecon,
       v.fiche, null, 'trame'
  from journee j
  cross join (values
    (1, 'maths', 'Les unités de mesure', 'Combien de grammes dans 2 kg 500 ? De centimètres dans 3 m 50 ? Dix questions.', 15, '', 'cg-unites-11'),
    (2, 'maths', 'Mesurer pour de vrai', 'Mesurer des objets de la maison, noter en deux unités différentes, comparer aux estimations faites avant.', 30, '', 'em-mesure-10'),
    (3, 'francais', 'Vocabulaire', 'Dix mots : trouver un synonyme, un contraire, et un mot de la même famille pour chacun.', 25, '', ''),
    (4, 'francais', 'Copie soignée', 'Copier huit lignes d’un texte au choix, le plus soigneusement possible. On relit avant de rendre.', 20, '', 'ec-copie-01'),
    (5, 'francais', 'Lecture et questions', 'Un texte court, puis cinq questions : trois sur ce qui est écrit, deux sur ce qui se déduit.', 30, '', ''),
    (6, 'francais', 'Écrire un dialogue', 'Deux personnages, six répliques. Tirets, verbes de parole variés, une ligne par personne.', 25, '', 'rd-dialogue-01'),
    (7, 'maison', 'Vélo', 'Une sortie. Repérer le trajet sur un plan avant de partir, puis le raconter au retour.', 30, '', 'dh-velo-01')
  ) as v (rang, matiere, titre, consigne, minutes, lecon, fiche)
 where j.famille_id = (select id from famille) and j.jour = '2027-05-20'
   and not exists (select 1 from seance s where s.journee_id = j.id);

insert into journee (famille_id, jour) select f.id, '2027-05-21' from famille f
  on conflict (famille_id, jour) do nothing;
insert into seance
  (journee_id, rang, matiere, titre, reference, consigne, minutes, lecon,
   fiche, par_adulte, origine)
select j.id, v.rang, v.matiere, v.titre, '', v.consigne, v.minutes, v.lecon,
       v.fiche, null, 'trame'
  from journee j
  cross join (values
    (1, 'maths', 'Les durées', 'De 8 h 45 à 12 h 30, combien de temps ? Cinq calculs de durée, à l’oral.', 15, '', 'cg-durees-11'),
    (2, 'maths', 'Le nombre du jour', 'Un nombre au tableau. Le décomposer de cinq façons, l’encadrer, dire son nombre de centaines, le doubler.', 30, '', 'em-nombre-05'),
    (3, 'francais', 'Le dictionnaire', 'Chercher cinq mots rencontrés cette semaine. Relever la nature du mot et ses différents sens.', 25, '', ''),
    (4, 'francais', 'Dictée préparée', 'Le texte a été lu la veille. On le dicte, puis on compare avec l’original.', 20, '', 'ed-preparee-02'),
    (5, 'francais', 'Lecture d’un documentaire', 'Une double page documentaire. Relever la nature et la source du document avant de lire.', 30, '', ''),
    (6, 'arts', 'Le rythme et la pulsation', 'Lis la leçon, puis fais les exercices. Tes calculs sur ton brouillon, le résultat sur l’écran.', 25, 'ar-p5-rythme', ''),
    (7, 'maison', 'Parcours et équilibre', 'Un parcours à installer soi-même : sauter, grimper, tenir en équilibre, ramper.', 30, '', 'dh-parcours-02')
  ) as v (rang, matiere, titre, consigne, minutes, lecon, fiche)
 where j.famille_id = (select id from famille) and j.jour = '2027-05-21'
   and not exists (select 1 from seance s where s.journee_id = j.id);

insert into journee (famille_id, jour) select f.id, '2027-05-24' from famille f
  on conflict (famille_id, jour) do nothing;
insert into seance
  (journee_id, rang, matiere, titre, reference, consigne, minutes, lecon,
   fiche, par_adulte, origine)
select j.id, v.rang, v.matiere, v.titre, '', v.consigne, v.minutes, v.lecon,
       v.fiche, null, 'trame'
  from journee j
  cross join (values
    (1, 'maths', 'Les tables de multiplication', 'Dix multiplications dictées, à l’ardoise. On efface entre chaque. On redit celles qui ont hésité.', 15, '', 'cm-tables-12'),
    (2, 'maths', 'Les solides', 'Lis la leçon, puis fais les exercices. Tes calculs sur ton brouillon, le résultat sur l’écran.', 30, 'm-p5-solides', ''),
    (3, 'francais', 'Les quatre temps : reconnaître et choisir', 'Lis la leçon, puis fais les exercices. Tes calculs sur ton brouillon, le résultat sur l’écran.', 30, 'f-p5-conjugaison-bilan', ''),
    (4, 'francais', 'Les mots invariables', 'Apprendre dix mots invariables, puis les écrire sous la dictée.', 20, '', 'ec-invar-17'),
    (5, 'francais', 'Poésie', 'Lire un poème à voix haute, plusieurs fois. Repérer les rimes et les images. En apprendre quatre vers.', 30, '', 'lf-poesie-17'),
    (6, 'francais', 'Donner son avis', 'Ce que je pense, pourquoi, un exemple. Huit lignes. Les trois morceaux doivent y être.', 25, '', 'rd-avis-03'),
    (7, 'maison', 'Marche et observation', 'Une marche d’une demi-heure. Rapporter trois choses observées, à noter ou à dessiner.', 30, '', 'dh-marche-17')
  ) as v (rang, matiere, titre, consigne, minutes, lecon, fiche)
 where j.famille_id = (select id from famille) and j.jour = '2027-05-24'
   and not exists (select 1 from seance s where s.journee_id = j.id);

insert into journee (famille_id, jour) select f.id, '2027-05-25' from famille f
  on conflict (famille_id, jour) do nothing;
insert into seance
  (journee_id, rang, matiere, titre, reference, consigne, minutes, lecon,
   fiche, par_adulte, origine)
select j.id, v.rang, v.matiere, v.titre, '', v.consigne, v.minutes, v.lecon,
       v.fiche, null, 'trame'
  from journee j
  cross join (values
    (1, 'maths', 'Les doubles et les moitiés', 'Le double de 45, la moitié de 68, le double de 250… Dix questions, à l’oral.', 15, '', 'cm-doubles-12'),
    (2, 'maths', 'Problèmes du jour', 'Trois problèmes sur le cahier. Pour chacun : ce qu’on cherche, ce qu’on sait, le calcul, la phrase de réponse.', 30, '', 'em-prob-03'),
    (3, 'francais', 'Conjugaison', 'Trois verbes, aux quatre temps connus, à toutes les personnes. Sur le cahier, sans modèle.', 25, '', ''),
    (4, 'francais', 'Transformer des phrases', 'Mettre cinq phrases au pluriel, en respectant toute la chaîne d’accords. À l’écrit.', 20, '', 'ec-transf-02'),
    (5, 'francais', 'Lecture d’une bande dessinée', 'Une planche. Puis expliquer ce que les images racontent et que le texte ne dit pas.', 30, '', 'lf-bd-02'),
    (6, 'francais', 'Expliquer une règle', 'Réécrire avec tes mots une leçon de la semaine, pour quelqu’un qui ne l’a pas eue.', 25, '', 'rd-regle-01'),
    (7, 'maison', 'Jeux de raquette', 'Échanges contre un mur ou à deux. Compter les échanges tenus sans faute.', 30, '', 'dh-raquette-02')
  ) as v (rang, matiere, titre, consigne, minutes, lecon, fiche)
 where j.famille_id = (select id from famille) and j.jour = '2027-05-25'
   and not exists (select 1 from seance s where s.journee_id = j.id);

insert into journee (famille_id, jour) select f.id, '2027-05-26' from famille f
  on conflict (famille_id, jour) do nothing;
insert into seance
  (journee_id, rang, matiere, titre, reference, consigne, minutes, lecon,
   fiche, par_adulte, origine)
select j.id, v.rang, v.matiere, v.titre, '', v.consigne, v.minutes, v.lecon,
       v.fiche, null, 'trame'
  from journee j
  cross join (values
    (1, 'maths', 'Les compléments à 100', 'Combien manque-t-il à 67 pour aller à 100 ? Dix questions. Puis les compléments à 1 000.', 15, '', 'cm-cent-12'),
    (2, 'francais', 'Lecture silencieuse', 'Vingt minutes dans le livre en cours, puis raconter ce qui vient de se passer.', 30, '', 'lt-silence-18'),
    (3, 'maison', 'Musique', 'Écouter un morceau en entier, sans rien faire d’autre. Repérer la pulsation, les instruments, ce qui revient.', 45, '', '')
  ) as v (rang, matiere, titre, consigne, minutes, lecon, fiche)
 where j.famille_id = (select id from famille) and j.jour = '2027-05-26'
   and not exists (select 1 from seance s where s.journee_id = j.id);

insert into journee (famille_id, jour) select f.id, '2027-05-27' from famille f
  on conflict (famille_id, jour) do nothing;
insert into seance
  (journee_id, rang, matiere, titre, reference, consigne, minutes, lecon,
   fiche, par_adulte, origine)
select j.id, v.rang, v.matiere, v.titre, '', v.consigne, v.minutes, v.lecon,
       v.fiche, null, 'trame'
  from journee j
  cross join (values
    (1, 'maths', 'Ajouter 9, 19, 29', 'On ajoute la dizaine ronde et on retire 1. Dix questions, en disant la procédure à voix haute.', 15, '', 'cm-neuf-12'),
    (2, 'maths', 'Géométrie : tracer', 'Un programme de construction à suivre à la règle, à l’équerre et au compas. La précision compte.', 30, '', 'em-trace-01'),
    (3, 'francais', 'Les homophones', 'Un texte à trous : a/à, est/et, son/sont, ont/on. Justifier chaque choix par le test de remplacement.', 25, '', ''),
    (4, 'francais', 'Auto-dictée', 'Apprendre quatre lignes par cœur la veille, les écrire de mémoire aujourd’hui.', 20, '', 'ed-auto-17'),
    (5, 'francais', 'Lecture libre', 'Le livre que tu veux, sans compte à rendre. On te demande seulement si tu as aimé, et pourquoi.', 30, '', 'lf-libre-01'),
    (6, 'sciences', 'Donner des instructions à une machine', 'Lis la leçon, puis fais les exercices. Tes calculs sur ton brouillon, le résultat sur l’écran.', 30, 's-p5-programmation', ''),
    (7, 'maison', 'Jardinage ou bricolage', 'Planter, arroser, mesurer, réparer. Le travail des mains compte autant que le reste.', 30, '', 'dh-mains-17')
  ) as v (rang, matiere, titre, consigne, minutes, lecon, fiche)
 where j.famille_id = (select id from famille) and j.jour = '2027-05-27'
   and not exists (select 1 from seance s where s.journee_id = j.id);

insert into journee (famille_id, jour) select f.id, '2027-05-28' from famille f
  on conflict (famille_id, jour) do nothing;
insert into seance
  (journee_id, rang, matiere, titre, reference, consigne, minutes, lecon,
   fiche, par_adulte, origine)
select j.id, v.rang, v.matiere, v.titre, '', v.consigne, v.minutes, v.lecon,
       v.fiche, null, 'trame'
  from journee j
  cross join (values
    (1, 'maths', 'Multiplier par 10, 100, 1 000', 'Dix questions rapides. Puis diviser par 10 : 320 ÷ 10, 4 500 ÷ 10.', 15, '', 'cm-dix-12'),
    (2, 'maths', 'Le nombre caché', 'Lis la leçon, puis fais les exercices. Tes calculs sur ton brouillon, le résultat sur l’écran.', 25, 'm-p5-nombre-cache', ''),
    (3, 'francais', 'Expliquer et donner son avis', 'Lis la leçon, puis fais les exercices. Tes calculs sur ton brouillon, le résultat sur l’écran.', 25, 'f-p5-expliquer', ''),
    (4, 'francais', 'Dictée de mots', 'Quinze mots de la liste en cours. On corrige ensemble, et on réécrit trois fois ceux qui ont hésité.', 20, '', 'ed-mots-02'),
    (5, 'francais', 'Lecture à voix haute', 'Une page préparée, lue à voix haute en respectant la ponctuation. On marque au crayon où respirer.', 30, '', 'lt-voix-18'),
    (6, 'francais', 'Écrire la suite', 'Lire le début d’un récit, puis en écrire la suite : dix lignes. Brouillon d’abord.', 25, '', 'rd-suite-06'),
    (7, 'maison', 'Course et endurance', 'Courir sans s’arrêter, en augmentant un peu chaque semaine. On chronomètre, on ne compare à personne.', 30, '', 'dh-course-02')
  ) as v (rang, matiere, titre, consigne, minutes, lecon, fiche)
 where j.famille_id = (select id from famille) and j.jour = '2027-05-28'
   and not exists (select 1 from seance s where s.journee_id = j.id);

insert into journee (famille_id, jour) select f.id, '2027-05-31' from famille f
  on conflict (famille_id, jour) do nothing;
insert into seance
  (journee_id, rang, matiere, titre, reference, consigne, minutes, lecon,
   fiche, par_adulte, origine)
select j.id, v.rang, v.matiere, v.titre, '', v.consigne, v.minutes, v.lecon,
       v.fiche, null, 'trame'
  from journee j
  cross join (values
    (1, 'maths', 'Multiplier par 4 et par 8', 'Par 4, c’est doubler deux fois. Par 8, trois fois. Dix questions en disant les étapes.', 15, '', 'cm-quatre-12'),
    (2, 'maths', 'Le nombre du jour', 'Un nombre au tableau. Le décomposer de cinq façons, l’encadrer, dire son nombre de centaines, le doubler.', 30, '', 'em-nombre-06'),
    (3, 'francais', 'Le dictionnaire', 'Chercher cinq mots rencontrés cette semaine. Relever la nature du mot et ses différents sens.', 25, '', ''),
    (4, 'francais', 'Dictée de phrases', 'Trois phrases. On souligne les verbes et on entoure les sujets avant de corriger.', 20, '', 'ed-phrases-01'),
    (5, 'francais', 'Lecture silencieuse', 'Vingt minutes dans le livre en cours, puis raconter ce qui vient de se passer.', 30, '', 'lt-silence-18'),
    (6, 'histoire', '1789, l’année révolutionnaire', 'Lis la leçon, puis fais les exercices. Tes calculs sur ton brouillon, le résultat sur l’écran.', 35, 'h-p5-revolution', ''),
    (7, 'maison', 'Jeux de ballon', 'Passes, tirs, jonglages. Compter les réussites de suite, battre son propre score.', 30, '', 'dh-ballon-01')
  ) as v (rang, matiere, titre, consigne, minutes, lecon, fiche)
 where j.famille_id = (select id from famille) and j.jour = '2027-05-31'
   and not exists (select 1 from seance s where s.journee_id = j.id);

insert into journee (famille_id, jour) select f.id, '2027-06-01' from famille f
  on conflict (famille_id, jour) do nothing;
insert into seance
  (journee_id, rang, matiere, titre, reference, consigne, minutes, lecon,
   fiche, par_adulte, origine)
select j.id, v.rang, v.matiere, v.titre, '', v.consigne, v.minutes, v.lecon,
       v.fiche, null, 'trame'
  from journee j
  cross join (values
    (1, 'maths', 'Multiplier par 5 et par 50', 'Par 5, c’est la moitié de par 10. Par 50, la moitié de par 100. Dix questions.', 15, '', 'cm-cinq-12'),
    (2, 'maths', 'Opérations posées', 'Quatre additions, quatre soustractions, deux multiplications. Estimer avant, vérifier après.', 30, '', 'em-ops-08'),
    (3, 'francais', 'Analyser des phrases', 'Cinq phrases : souligner le sujet, entourer le verbe, encadrer les compléments. Dire lesquels se déplacent.', 25, '', 'ef-phrases-03'),
    (4, 'francais', 'Copie soignée', 'Copier huit lignes d’un texte au choix, le plus soigneusement possible. On relit avant de rendre.', 20, '', 'ec-copie-02'),
    (5, 'francais', 'Lecture et questions', 'Un texte court, puis cinq questions : trois sur ce qui est écrit, deux sur ce qui se déduit.', 30, '', ''),
    (6, 'geographie', 'Tout le monde n’a pas Internet', 'Lis la leçon, puis fais les exercices. Tes calculs sur ton brouillon, le résultat sur l’écran.', 25, 'g-p5-fracture', ''),
    (7, 'maison', 'Vélo', 'Une sortie. Repérer le trajet sur un plan avant de partir, puis le raconter au retour.', 30, '', 'dh-velo-02')
  ) as v (rang, matiere, titre, consigne, minutes, lecon, fiche)
 where j.famille_id = (select id from famille) and j.jour = '2027-06-01'
   and not exists (select 1 from seance s where s.journee_id = j.id);

insert into journee (famille_id, jour) select f.id, '2027-06-02' from famille f
  on conflict (famille_id, jour) do nothing;
insert into seance
  (journee_id, rang, matiere, titre, reference, consigne, minutes, lecon,
   fiche, par_adulte, origine)
select j.id, v.rang, v.matiere, v.titre, '', v.consigne, v.minutes, v.lecon,
       v.fiche, null, 'trame'
  from journee j
  cross join (values
    (1, 'maths', 'Les fractions d’une quantité', 'La moitié de 36, le tiers de 24, les trois quarts de 20. Dix questions à l’oral.', 15, '', 'cg-fractions-12'),
    (2, 'francais', 'Lecture de théâtre', 'Une scène, lue à deux voix. Les didascalies ne se disent pas : elles se jouent.', 30, '', 'lf-theatre-18'),
    (3, 'maison', 'Dessin d’observation', 'Dessiner un objet réel en le regardant, pas de mémoire. Vingt minutes sur le même objet.', 45, '', '')
  ) as v (rang, matiere, titre, consigne, minutes, lecon, fiche)
 where j.famille_id = (select id from famille) and j.jour = '2027-06-02'
   and not exists (select 1 from seance s where s.journee_id = j.id);

insert into journee (famille_id, jour) select f.id, '2027-06-03' from famille f
  on conflict (famille_id, jour) do nothing;
insert into seance
  (journee_id, rang, matiere, titre, reference, consigne, minutes, lecon,
   fiche, par_adulte, origine)
select j.id, v.rang, v.matiere, v.titre, '', v.consigne, v.minutes, v.lecon,
       v.fiche, null, 'trame'
  from journee j
  cross join (values
    (1, 'maths', 'Les problèmes en une phrase', 'Cinq problèmes dictés, très courts. La réponse sur l’ardoise, sans écrire le calcul.', 15, '', 'cg-problemes-12'),
    (2, 'maths', 'Le hasard : certain, possible, impossible', 'Lis la leçon, puis fais les exercices. Tes calculs sur ton brouillon, le résultat sur l’écran.', 25, 'm-p5-hasard', ''),
    (3, 'francais', 'La ponctuation et la lecture à voix haute', 'Lis la leçon, puis fais les exercices. Tes calculs sur ton brouillon, le résultat sur l’écran.', 25, 'f-p5-ponctuation', ''),
    (4, 'francais', 'Les mots invariables', 'Apprendre dix mots invariables, puis les écrire sous la dictée.', 20, '', 'ec-invar-18'),
    (5, 'francais', 'Poésie', 'Lire un poème à voix haute, plusieurs fois. Repérer les rimes et les images. En apprendre quatre vers.', 30, '', 'lf-poesie-18'),
    (6, 'francais', 'Donner son avis', 'Ce que je pense, pourquoi, un exemple. Huit lignes. Les trois morceaux doivent y être.', 25, '', 'rd-avis-04'),
    (7, 'maison', 'Marche et observation', 'Une marche d’une demi-heure. Rapporter trois choses observées, à noter ou à dessiner.', 30, '', 'dh-marche-18')
  ) as v (rang, matiere, titre, consigne, minutes, lecon, fiche)
 where j.famille_id = (select id from famille) and j.jour = '2027-06-03'
   and not exists (select 1 from seance s where s.journee_id = j.id);

insert into journee (famille_id, jour) select f.id, '2027-06-04' from famille f
  on conflict (famille_id, jour) do nothing;
insert into seance
  (journee_id, rang, matiere, titre, reference, consigne, minutes, lecon,
   fiche, par_adulte, origine)
select j.id, v.rang, v.matiere, v.titre, '', v.consigne, v.minutes, v.lecon,
       v.fiche, null, 'trame'
  from journee j
  cross join (values
    (1, 'maths', 'Encadrer et arrondir', 'Entre quels milliers se trouve 6 480 ? Quel est l’arrondi de 12,94 ? Dix questions.', 15, '', 'cg-encadrer-12'),
    (2, 'maths', 'Géométrie : tracer', 'Un programme de construction à suivre à la règle, à l’équerre et au compas. La précision compte.', 30, '', 'em-trace-02'),
    (3, 'francais', 'Les homophones', 'Un texte à trous : a/à, est/et, son/sont, ont/on. Justifier chaque choix par le test de remplacement.', 25, '', ''),
    (4, 'francais', 'Transformer des phrases', 'Mettre cinq phrases au pluriel, en respectant toute la chaîne d’accords. À l’écrit.', 20, '', 'ec-transf-03'),
    (5, 'francais', 'Lecture d’une bande dessinée', 'Une planche. Puis expliquer ce que les images racontent et que le texte ne dit pas.', 30, '', 'lf-bd-03'),
    (6, 'francais', 'Expliquer une règle', 'Réécrire avec tes mots une leçon de la semaine, pour quelqu’un qui ne l’a pas eue.', 25, '', 'rd-regle-02'),
    (7, 'maison', 'Jeux de raquette', 'Échanges contre un mur ou à deux. Compter les échanges tenus sans faute.', 30, '', 'dh-raquette-03')
  ) as v (rang, matiere, titre, consigne, minutes, lecon, fiche)
 where j.famille_id = (select id from famille) and j.jour = '2027-06-04'
   and not exists (select 1 from seance s where s.journee_id = j.id);

insert into journee (famille_id, jour) select f.id, '2027-06-07' from famille f
  on conflict (famille_id, jour) do nothing;
insert into seance
  (journee_id, rang, matiere, titre, reference, consigne, minutes, lecon,
   fiche, par_adulte, origine)
select j.id, v.rang, v.matiere, v.titre, '', v.consigne, v.minutes, v.lecon,
       v.fiche, null, 'trame'
  from journee j
  cross join (values
    (1, 'maths', 'Les unités de mesure', 'Combien de grammes dans 2 kg 500 ? De centimètres dans 3 m 50 ? Dix questions.', 15, '', 'cg-unites-12'),
    (2, 'maths', 'Mesurer pour de vrai', 'Mesurer des objets de la maison, noter en deux unités différentes, comparer aux estimations faites avant.', 30, '', 'em-mesure-12'),
    (3, 'francais', 'Vocabulaire', 'Dix mots : trouver un synonyme, un contraire, et un mot de la même famille pour chacun.', 25, '', ''),
    (4, 'francais', 'Dictée à trous', 'Le texte est écrit, il manque les terminaisons des verbes. On les complète en justifiant.', 20, '', 'ed-trous-02'),
    (5, 'francais', 'Lecture de théâtre', 'Une scène, lue à deux voix. Les didascalies ne se disent pas : elles se jouent.', 30, '', 'lf-theatre-18'),
    (6, 'francais', 'Écrire une lettre', 'Une lettre à quelqu’un de la famille. Formule d’appel, corps, formule de fin.', 25, '', 'rd-lettre-09'),
    (7, 'maison', 'Danse et rythme', 'Suivre une pulsation, inventer une suite de mouvements de huit temps, la refaire à l’identique.', 30, '', 'dh-danse-02')
  ) as v (rang, matiere, titre, consigne, minutes, lecon, fiche)
 where j.famille_id = (select id from famille) and j.jour = '2027-06-07'
   and not exists (select 1 from seance s where s.journee_id = j.id);

insert into journee (famille_id, jour) select f.id, '2027-06-08' from famille f
  on conflict (famille_id, jour) do nothing;
insert into seance
  (journee_id, rang, matiere, titre, reference, consigne, minutes, lecon,
   fiche, par_adulte, origine)
select j.id, v.rang, v.matiere, v.titre, '', v.consigne, v.minutes, v.lecon,
       v.fiche, null, 'trame'
  from journee j
  cross join (values
    (1, 'maths', 'Les durées', 'De 8 h 45 à 12 h 30, combien de temps ? Cinq calculs de durée, à l’oral.', 15, '', 'cg-durees-12'),
    (2, 'maths', 'Le nombre du jour', 'Un nombre au tableau. Le décomposer de cinq façons, l’encadrer, dire son nombre de centaines, le doubler.', 30, '', 'em-nombre-07'),
    (3, 'francais', 'Le dictionnaire', 'Chercher cinq mots rencontrés cette semaine. Relever la nature du mot et ses différents sens.', 25, '', ''),
    (4, 'francais', 'Auto-dictée', 'Apprendre quatre lignes par cœur la veille, les écrire de mémoire aujourd’hui.', 20, '', 'ed-auto-01'),
    (5, 'francais', 'Lecture libre', 'Le livre que tu veux, sans compte à rendre. On te demande seulement si tu as aimé, et pourquoi.', 30, '', 'lf-libre-02'),
    (6, 'arts', 'Le rythme et la pulsation — on reprend', 'On relit le cours, puis on refait les exercices. Tes calculs sur ton brouillon, le résultat sur l’écran.', 25, 'ar-p5-rythme', ''),
    (7, 'maison', 'Jardinage ou bricolage', 'Planter, arroser, mesurer, réparer. Le travail des mains compte autant que le reste.', 30, '', 'dh-mains-01')
  ) as v (rang, matiere, titre, consigne, minutes, lecon, fiche)
 where j.famille_id = (select id from famille) and j.jour = '2027-06-08'
   and not exists (select 1 from seance s where s.journee_id = j.id);

insert into journee (famille_id, jour) select f.id, '2027-06-09' from famille f
  on conflict (famille_id, jour) do nothing;
insert into seance
  (journee_id, rang, matiere, titre, reference, consigne, minutes, lecon,
   fiche, par_adulte, origine)
select j.id, v.rang, v.matiere, v.titre, '', v.consigne, v.minutes, v.lecon,
       v.fiche, null, 'trame'
  from journee j
  cross join (values
    (1, 'maths', 'Les tables de multiplication', 'Dix multiplications dictées, à l’ardoise. On efface entre chaque. On redit celles qui ont hésité.', 15, '', 'cm-tables-13'),
    (2, 'sciences', 'La météo et les saisons — on reprend', 'On relit le cours, puis on refait les exercices. Tes calculs sur ton brouillon, le résultat sur l’écran.', 30, 's-p5-meteo', ''),
    (3, 'maison', 'Une expérience', 'Mélanger, dissoudre, filtrer, peser. Écrire ce qu’on croit qu’il va se passer AVANT de le faire, puis comparer.', 45, '', '')
  ) as v (rang, matiere, titre, consigne, minutes, lecon, fiche)
 where j.famille_id = (select id from famille) and j.jour = '2027-06-09'
   and not exists (select 1 from seance s where s.journee_id = j.id);

insert into journee (famille_id, jour) select f.id, '2027-06-10' from famille f
  on conflict (famille_id, jour) do nothing;
insert into seance
  (journee_id, rang, matiere, titre, reference, consigne, minutes, lecon,
   fiche, par_adulte, origine)
select j.id, v.rang, v.matiere, v.titre, '', v.consigne, v.minutes, v.lecon,
       v.fiche, null, 'trame'
  from journee j
  cross join (values
    (1, 'maths', 'Les doubles et les moitiés', 'Le double de 45, la moitié de 68, le double de 250… Dix questions, à l’oral.', 15, '', 'cm-doubles-13'),
    (2, 'maths', 'Les figures et leurs propriétés — on reprend', 'On relit le cours, puis on refait les exercices. Tes calculs sur ton brouillon, le résultat sur l’écran.', 30, 'm-p5-figures', ''),
    (3, 'francais', 'Le merveilleux et l’étrange — on reprend', 'On relit le cours, puis on refait les exercices. Tes calculs sur ton brouillon, le résultat sur l’écran.', 25, 'f-p5-merveilleux', ''),
    (4, 'francais', 'Dictée de phrases', 'Trois phrases. On souligne les verbes et on entoure les sujets avant de corriger.', 20, '', 'ed-phrases-02'),
    (5, 'francais', 'Lecture silencieuse', 'Vingt minutes dans le livre en cours, puis raconter ce qui vient de se passer.', 30, '', 'lt-silence-01'),
    (6, 'histoire', 'Le royaume en 1789 et les Lumières — on reprend', 'On relit le cours, puis on refait les exercices. Tes calculs sur ton brouillon, le résultat sur l’écran.', 30, 'h-p5-royaume-1789', ''),
    (7, 'maison', 'Jeux de ballon', 'Passes, tirs, jonglages. Compter les réussites de suite, battre son propre score.', 30, '', 'dh-ballon-02')
  ) as v (rang, matiere, titre, consigne, minutes, lecon, fiche)
 where j.famille_id = (select id from famille) and j.jour = '2027-06-10'
   and not exists (select 1 from seance s where s.journee_id = j.id);

insert into journee (famille_id, jour) select f.id, '2027-06-11' from famille f
  on conflict (famille_id, jour) do nothing;
insert into seance
  (journee_id, rang, matiere, titre, reference, consigne, minutes, lecon,
   fiche, par_adulte, origine)
select j.id, v.rang, v.matiere, v.titre, '', v.consigne, v.minutes, v.lecon,
       v.fiche, null, 'trame'
  from journee j
  cross join (values
    (1, 'maths', 'Les compléments à 100', 'Combien manque-t-il à 67 pour aller à 100 ? Dix questions. Puis les compléments à 1 000.', 15, '', 'cm-cent-13'),
    (2, 'maths', 'Reprendre la leçon de maths', 'Refaire les exercices de la dernière leçon de maths, sur le cahier cette fois. Comparer avec ce qui avait été trouvé.', 30, '', 'em-reprise-01'),
    (3, 'francais', 'Reprendre la leçon de français', 'Refaire les exercices de la dernière leçon de français, sur le cahier.', 25, '', ''),
    (4, 'francais', 'Copie soignée', 'Copier huit lignes d’un texte au choix, le plus soigneusement possible. On relit avant de rendre.', 20, '', 'ec-copie-03'),
    (5, 'francais', 'Lecture et questions', 'Un texte court, puis cinq questions : trois sur ce qui est écrit, deux sur ce qui se déduit.', 30, '', ''),
    (6, 'francais', 'Écrire un dialogue', 'Deux personnages, six répliques. Tirets, verbes de parole variés, une ligne par personne.', 25, '', 'rd-dialogue-03'),
    (7, 'maison', 'Vélo', 'Une sortie. Repérer le trajet sur un plan avant de partir, puis le raconter au retour.', 30, '', 'dh-velo-03')
  ) as v (rang, matiere, titre, consigne, minutes, lecon, fiche)
 where j.famille_id = (select id from famille) and j.jour = '2027-06-11'
   and not exists (select 1 from seance s where s.journee_id = j.id);

insert into journee (famille_id, jour) select f.id, '2027-06-14' from famille f
  on conflict (famille_id, jour) do nothing;
insert into seance
  (journee_id, rang, matiere, titre, reference, consigne, minutes, lecon,
   fiche, par_adulte, origine)
select j.id, v.rang, v.matiere, v.titre, '', v.consigne, v.minutes, v.lecon,
       v.fiche, null, 'trame'
  from journee j
  cross join (values
    (1, 'maths', 'Ajouter 9, 19, 29', 'On ajoute la dizaine ronde et on retire 1. Dix questions, en disant la procédure à voix haute.', 15, '', 'cm-neuf-13'),
    (2, 'maths', 'Perpendiculaires et parallèles — on reprend', 'On relit le cours, puis on refait les exercices. Tes calculs sur ton brouillon, le résultat sur l’écran.', 25, 'm-p5-perpendiculaires', ''),
    (3, 'francais', 'La morale d’une histoire — on reprend', 'On relit le cours, puis on refait les exercices. Tes calculs sur ton brouillon, le résultat sur l’écran.', 25, 'f-p5-morale', ''),
    (4, 'francais', 'Dictée préparée', 'Le texte a été lu la veille. On le dicte, puis on compare avec l’original.', 20, '', 'ed-preparee-04'),
    (5, 'francais', 'Lecture d’un documentaire', 'Une double page documentaire. Relever la nature et la source du document avant de lire.', 30, '', ''),
    (6, 'sciences', 'Le cerveau et l’attention — on reprend', 'On relit le cours, puis on refait les exercices. Tes calculs sur ton brouillon, le résultat sur l’écran.', 30, 's-p5-cerveau', ''),
    (7, 'maison', 'Parcours et équilibre', 'Un parcours à installer soi-même : sauter, grimper, tenir en équilibre, ramper.', 30, '', 'dh-parcours-04')
  ) as v (rang, matiere, titre, consigne, minutes, lecon, fiche)
 where j.famille_id = (select id from famille) and j.jour = '2027-06-14'
   and not exists (select 1 from seance s where s.journee_id = j.id);

insert into journee (famille_id, jour) select f.id, '2027-06-15' from famille f
  on conflict (famille_id, jour) do nothing;
insert into seance
  (journee_id, rang, matiere, titre, reference, consigne, minutes, lecon,
   fiche, par_adulte, origine)
select j.id, v.rang, v.matiere, v.titre, '', v.consigne, v.minutes, v.lecon,
       v.fiche, null, 'trame'
  from journee j
  cross join (values
    (1, 'maths', 'Multiplier par 10, 100, 1 000', 'Dix questions rapides. Puis diviser par 10 : 320 ÷ 10, 4 500 ÷ 10.', 15, '', 'cm-dix-13'),
    (2, 'maths', 'Mesurer pour de vrai', 'Mesurer des objets de la maison, noter en deux unités différentes, comparer aux estimations faites avant.', 30, '', 'em-mesure-01'),
    (3, 'francais', 'Vocabulaire', 'Dix mots : trouver un synonyme, un contraire, et un mot de la même famille pour chacun.', 25, '', ''),
    (4, 'francais', 'Les mots invariables', 'Apprendre dix mots invariables, puis les écrire sous la dictée.', 20, '', 'ec-invar-01'),
    (5, 'francais', 'Poésie', 'Lire un poème à voix haute, plusieurs fois. Repérer les rimes et les images. En apprendre quatre vers.', 30, '', 'lf-poesie-19'),
    (6, 'anglais', 'Les lieux et le chemin — on reprend', 'On relit le cours, puis on refait les exercices. Tes calculs sur ton brouillon, le résultat sur l’écran.', 25, 'a-p5-lieux', ''),
    (7, 'maison', 'Marche et observation', 'Une marche d’une demi-heure. Rapporter trois choses observées, à noter ou à dessiner.', 30, '', 'dh-marche-01')
  ) as v (rang, matiere, titre, consigne, minutes, lecon, fiche)
 where j.famille_id = (select id from famille) and j.jour = '2027-06-15'
   and not exists (select 1 from seance s where s.journee_id = j.id);

insert into journee (famille_id, jour) select f.id, '2027-06-16' from famille f
  on conflict (famille_id, jour) do nothing;
insert into seance
  (journee_id, rang, matiere, titre, reference, consigne, minutes, lecon,
   fiche, par_adulte, origine)
select j.id, v.rang, v.matiere, v.titre, '', v.consigne, v.minutes, v.lecon,
       v.fiche, null, 'trame'
  from journee j
  cross join (values
    (1, 'maths', 'Multiplier par 4 et par 8', 'Par 4, c’est doubler deux fois. Par 8, trois fois. Dix questions en disant les étapes.', 15, '', 'cm-quatre-13'),
    (2, 'francais', 'Lecture à voix haute', 'Une page préparée, lue à voix haute en respectant la ponctuation. On marque au crayon où respirer.', 30, '', 'lt-voix-02'),
    (3, 'maison', 'La boîte à pourquoi', 'Prendre une question que tu as posée cette semaine, chercher la réponse ensemble, et s’arrêter quand on ne sait plus.', 45, '', '')
  ) as v (rang, matiere, titre, consigne, minutes, lecon, fiche)
 where j.famille_id = (select id from famille) and j.jour = '2027-06-16'
   and not exists (select 1 from seance s where s.journee_id = j.id);

insert into journee (famille_id, jour) select f.id, '2027-06-17' from famille f
  on conflict (famille_id, jour) do nothing;
insert into seance
  (journee_id, rang, matiere, titre, reference, consigne, minutes, lecon,
   fiche, par_adulte, origine)
select j.id, v.rang, v.matiere, v.titre, '', v.consigne, v.minutes, v.lecon,
       v.fiche, null, 'trame'
  from journee j
  cross join (values
    (1, 'maths', 'Multiplier par 5 et par 50', 'Par 5, c’est la moitié de par 10. Par 50, la moitié de par 100. Dix questions.', 15, '', 'cm-cinq-13'),
    (2, 'maths', 'La symétrie axiale — on reprend', 'On relit le cours, puis on refait les exercices. Tes calculs sur ton brouillon, le résultat sur l’écran.', 30, 'm-p5-symetrie', ''),
    (3, 'francais', 'L’orthographe des mots — on reprend', 'On relit le cours, puis on refait les exercices. Tes calculs sur ton brouillon, le résultat sur l’écran.', 25, 'f-p5-orthographe', ''),
    (4, 'francais', 'Dictée à trous', 'Le texte est écrit, il manque les terminaisons des verbes. On les complète en justifiant.', 20, '', 'ed-trous-03'),
    (5, 'francais', 'Lecture de théâtre', 'Une scène, lue à deux voix. Les didascalies ne se disent pas : elles se jouent.', 30, '', 'lf-theatre-01'),
    (6, 'geographie', 'Comment marche Internet — on reprend', 'On relit le cours, puis on refait les exercices. Tes calculs sur ton brouillon, le résultat sur l’écran.', 35, 'g-p5-internet', ''),
    (7, 'maison', 'Danse et rythme', 'Suivre une pulsation, inventer une suite de mouvements de huit temps, la refaire à l’identique.', 30, '', 'dh-danse-03')
  ) as v (rang, matiere, titre, consigne, minutes, lecon, fiche)
 where j.famille_id = (select id from famille) and j.jour = '2027-06-17'
   and not exists (select 1 from seance s where s.journee_id = j.id);

insert into journee (famille_id, jour) select f.id, '2027-06-18' from famille f
  on conflict (famille_id, jour) do nothing;
insert into seance
  (journee_id, rang, matiere, titre, reference, consigne, minutes, lecon,
   fiche, par_adulte, origine)
select j.id, v.rang, v.matiere, v.titre, '', v.consigne, v.minutes, v.lecon,
       v.fiche, null, 'trame'
  from journee j
  cross join (values
    (1, 'maths', 'Les fractions d’une quantité', 'La moitié de 36, le tiers de 24, les trois quarts de 20. Dix questions à l’oral.', 15, '', 'cg-fractions-13'),
    (2, 'maths', 'Problèmes du jour', 'Trois problèmes sur le cahier. Pour chacun : ce qu’on cherche, ce qu’on sait, le calcul, la phrase de réponse.', 30, '', 'em-prob-06'),
    (3, 'francais', 'Conjugaison', 'Trois verbes, aux quatre temps connus, à toutes les personnes. Sur le cahier, sans modèle.', 25, '', ''),
    (4, 'francais', 'Auto-dictée', 'Apprendre quatre lignes par cœur la veille, les écrire de mémoire aujourd’hui.', 20, '', 'ed-auto-02'),
    (5, 'francais', 'Lecture libre', 'Le livre que tu veux, sans compte à rendre. On te demande seulement si tu as aimé, et pourquoi.', 30, '', 'lf-libre-03'),
    (6, 'francais', 'Inventer un problème', 'Écrire un problème de mathématiques à deux étapes, avec sa solution sur une autre feuille.', 25, '', 'rd-probleme-03'),
    (7, 'maison', 'Jardinage ou bricolage', 'Planter, arroser, mesurer, réparer. Le travail des mains compte autant que le reste.', 30, '', 'dh-mains-02')
  ) as v (rang, matiere, titre, consigne, minutes, lecon, fiche)
 where j.famille_id = (select id from famille) and j.jour = '2027-06-18'
   and not exists (select 1 from seance s where s.journee_id = j.id);

insert into journee (famille_id, jour) select f.id, '2027-06-21' from famille f
  on conflict (famille_id, jour) do nothing;
insert into seance
  (journee_id, rang, matiere, titre, reference, consigne, minutes, lecon,
   fiche, par_adulte, origine)
select j.id, v.rang, v.matiere, v.titre, '', v.consigne, v.minutes, v.lecon,
       v.fiche, null, 'trame'
  from journee j
  cross join (values
    (1, 'maths', 'Les problèmes en une phrase', 'Cinq problèmes dictés, très courts. La réponse sur l’ardoise, sans écrire le calcul.', 15, '', 'cg-problemes-13'),
    (2, 'maths', 'Reprendre la leçon de maths', 'Refaire les exercices de la dernière leçon de maths, sur le cahier cette fois. Comparer avec ce qui avait été trouvé.', 30, '', 'em-reprise-02'),
    (3, 'francais', 'Reprendre la leçon de français', 'Refaire les exercices de la dernière leçon de français, sur le cahier.', 25, '', ''),
    (4, 'francais', 'Dictée de mots', 'Quinze mots de la liste en cours. On corrige ensemble, et on réécrit trois fois ceux qui ont hésité.', 20, '', 'ed-mots-04'),
    (5, 'francais', 'Lecture à voix haute', 'Une page préparée, lue à voix haute en respectant la ponctuation. On marque au crayon où respirer.', 30, '', 'lt-voix-02'),
    (6, 'sciences', 'Grandir : les changements du corps — on reprend', 'On relit le cours, puis on refait les exercices. Tes calculs sur ton brouillon, le résultat sur l’écran.', 25, 's-p5-puberte', ''),
    (7, 'maison', 'Course et endurance', 'Courir sans s’arrêter, en augmentant un peu chaque semaine. On chronomètre, on ne compare à personne.', 30, '', 'dh-course-04')
  ) as v (rang, matiere, titre, consigne, minutes, lecon, fiche)
 where j.famille_id = (select id from famille) and j.jour = '2027-06-21'
   and not exists (select 1 from seance s where s.journee_id = j.id);

insert into journee (famille_id, jour) select f.id, '2027-06-22' from famille f
  on conflict (famille_id, jour) do nothing;
insert into seance
  (journee_id, rang, matiere, titre, reference, consigne, minutes, lecon,
   fiche, par_adulte, origine)
select j.id, v.rang, v.matiere, v.titre, '', v.consigne, v.minutes, v.lecon,
       v.fiche, null, 'trame'
  from journee j
  cross join (values
    (1, 'maths', 'Encadrer et arrondir', 'Entre quels milliers se trouve 6 480 ? Quel est l’arrondi de 12,94 ? Dix questions.', 15, '', 'cg-encadrer-13'),
    (2, 'maths', 'Les solides — on reprend', 'On relit le cours, puis on refait les exercices. Tes calculs sur ton brouillon, le résultat sur l’écran.', 30, 'm-p5-solides', ''),
    (3, 'francais', 'Les quatre temps : reconnaître et choisir — on reprend', 'On relit le cours, puis on refait les exercices. Tes calculs sur ton brouillon, le résultat sur l’écran.', 30, 'f-p5-conjugaison-bilan', ''),
    (4, 'francais', 'Dictée de phrases', 'Trois phrases. On souligne les verbes et on entoure les sujets avant de corriger.', 20, '', 'ed-phrases-03'),
    (5, 'francais', 'Lecture silencieuse', 'Vingt minutes dans le livre en cours, puis raconter ce qui vient de se passer.', 30, '', 'lt-silence-02'),
    (6, 'francais', 'Raconter sa journée d’hier', 'Dix lignes au passé. Vérifier que les temps ne changent pas en cours de route.', 25, '', 'rd-hier-10'),
    (7, 'maison', 'Jeux de ballon', 'Passes, tirs, jonglages. Compter les réussites de suite, battre son propre score.', 30, '', 'dh-ballon-03')
  ) as v (rang, matiere, titre, consigne, minutes, lecon, fiche)
 where j.famille_id = (select id from famille) and j.jour = '2027-06-22'
   and not exists (select 1 from seance s where s.journee_id = j.id);

insert into journee (famille_id, jour) select f.id, '2027-06-23' from famille f
  on conflict (famille_id, jour) do nothing;
insert into seance
  (journee_id, rang, matiere, titre, reference, consigne, minutes, lecon,
   fiche, par_adulte, origine)
select j.id, v.rang, v.matiere, v.titre, '', v.consigne, v.minutes, v.lecon,
       v.fiche, null, 'trame'
  from journee j
  cross join (values
    (1, 'maths', 'Les unités de mesure', 'Combien de grammes dans 2 kg 500 ? De centimètres dans 3 m 50 ? Dix questions.', 15, '', 'cg-unites-13'),
    (2, 'geographie', 'Tout le monde n’a pas Internet — on reprend', 'On relit le cours, puis on refait les exercices. Tes calculs sur ton brouillon, le résultat sur l’écran.', 25, 'g-p5-fracture', ''),
    (3, 'maison', 'Construire quelque chose', 'Un objet qui marche : un pont en papier qui porte un livre, un moulin, un circuit. Croquis d’abord.', 45, '', '')
  ) as v (rang, matiere, titre, consigne, minutes, lecon, fiche)
 where j.famille_id = (select id from famille) and j.jour = '2027-06-23'
   and not exists (select 1 from seance s where s.journee_id = j.id);

insert into journee (famille_id, jour) select f.id, '2027-06-24' from famille f
  on conflict (famille_id, jour) do nothing;
insert into seance
  (journee_id, rang, matiere, titre, reference, consigne, minutes, lecon,
   fiche, par_adulte, origine)
select j.id, v.rang, v.matiere, v.titre, '', v.consigne, v.minutes, v.lecon,
       v.fiche, null, 'trame'
  from journee j
  cross join (values
    (1, 'maths', 'Les durées', 'De 8 h 45 à 12 h 30, combien de temps ? Cinq calculs de durée, à l’oral.', 15, '', 'cg-durees-13'),
    (2, 'maths', 'Le nombre du jour', 'Un nombre au tableau. Le décomposer de cinq façons, l’encadrer, dire son nombre de centaines, le doubler.', 30, '', 'em-nombre-09'),
    (3, 'francais', 'Le dictionnaire', 'Chercher cinq mots rencontrés cette semaine. Relever la nature du mot et ses différents sens.', 25, '', ''),
    (4, 'francais', 'Dictée préparée', 'Le texte a été lu la veille. On le dicte, puis on compare avec l’original.', 20, '', 'ed-preparee-05'),
    (5, 'francais', 'Lecture d’un documentaire', 'Une double page documentaire. Relever la nature et la source du document avant de lire.', 30, '', ''),
    (6, 'francais', 'Décrire un lieu', 'Dix lignes sur un endroit que tu connais. Au moins trois adjectifs qui servent vraiment.', 25, '', 'rd-lieu-02'),
    (7, 'maison', 'Parcours et équilibre', 'Un parcours à installer soi-même : sauter, grimper, tenir en équilibre, ramper.', 30, '', 'dh-parcours-05')
  ) as v (rang, matiere, titre, consigne, minutes, lecon, fiche)
 where j.famille_id = (select id from famille) and j.jour = '2027-06-24'
   and not exists (select 1 from seance s where s.journee_id = j.id);

insert into journee (famille_id, jour) select f.id, '2027-06-25' from famille f
  on conflict (famille_id, jour) do nothing;
insert into seance
  (journee_id, rang, matiere, titre, reference, consigne, minutes, lecon,
   fiche, par_adulte, origine)
select j.id, v.rang, v.matiere, v.titre, '', v.consigne, v.minutes, v.lecon,
       v.fiche, null, 'trame'
  from journee j
  cross join (values
    (1, 'maths', 'Les tables de multiplication', 'Dix multiplications dictées, à l’ardoise. On efface entre chaque. On redit celles qui ont hésité.', 15, '', 'cm-tables-14'),
    (2, 'maths', 'Le nombre caché — on reprend', 'On relit le cours, puis on refait les exercices. Tes calculs sur ton brouillon, le résultat sur l’écran.', 25, 'm-p5-nombre-cache', ''),
    (3, 'francais', 'Expliquer et donner son avis — on reprend', 'On relit le cours, puis on refait les exercices. Tes calculs sur ton brouillon, le résultat sur l’écran.', 25, 'f-p5-expliquer', ''),
    (4, 'francais', 'Les mots invariables', 'Apprendre dix mots invariables, puis les écrire sous la dictée.', 20, '', 'ec-invar-02'),
    (5, 'francais', 'Poésie', 'Lire un poème à voix haute, plusieurs fois. Repérer les rimes et les images. En apprendre quatre vers.', 30, '', 'lf-poesie-01'),
    (6, 'sciences', 'Donner des instructions à une machine — on reprend', 'On relit le cours, puis on refait les exercices. Tes calculs sur ton brouillon, le résultat sur l’écran.', 30, 's-p5-programmation', ''),
    (7, 'maison', 'Marche et observation', 'Une marche d’une demi-heure. Rapporter trois choses observées, à noter ou à dessiner.', 30, '', 'dh-marche-02')
  ) as v (rang, matiere, titre, consigne, minutes, lecon, fiche)
 where j.famille_id = (select id from famille) and j.jour = '2027-06-25'
   and not exists (select 1 from seance s where s.journee_id = j.id);

insert into journee (famille_id, jour) select f.id, '2027-06-28' from famille f
  on conflict (famille_id, jour) do nothing;
insert into seance
  (journee_id, rang, matiere, titre, reference, consigne, minutes, lecon,
   fiche, par_adulte, origine)
select j.id, v.rang, v.matiere, v.titre, '', v.consigne, v.minutes, v.lecon,
       v.fiche, null, 'trame'
  from journee j
  cross join (values
    (1, 'maths', 'Les doubles et les moitiés', 'Le double de 45, la moitié de 68, le double de 250… Dix questions, à l’oral.', 15, '', 'cm-doubles-14'),
    (2, 'maths', 'Problèmes du jour', 'Trois problèmes sur le cahier. Pour chacun : ce qu’on cherche, ce qu’on sait, le calcul, la phrase de réponse.', 30, '', 'em-prob-07'),
    (3, 'francais', 'Conjugaison', 'Trois verbes, aux quatre temps connus, à toutes les personnes. Sur le cahier, sans modèle.', 25, '', ''),
    (4, 'francais', 'Transformer des phrases', 'Mettre cinq phrases au pluriel, en respectant toute la chaîne d’accords. À l’écrit.', 20, '', 'ec-transf-05'),
    (5, 'francais', 'Lecture d’une bande dessinée', 'Une planche. Puis expliquer ce que les images racontent et que le texte ne dit pas.', 30, '', 'lf-bd-05'),
    (6, 'histoire', '1789, l’année révolutionnaire — on reprend', 'On relit le cours, puis on refait les exercices. Tes calculs sur ton brouillon, le résultat sur l’écran.', 35, 'h-p5-revolution', ''),
    (7, 'maison', 'Jeux de raquette', 'Échanges contre un mur ou à deux. Compter les échanges tenus sans faute.', 30, '', 'dh-raquette-05')
  ) as v (rang, matiere, titre, consigne, minutes, lecon, fiche)
 where j.famille_id = (select id from famille) and j.jour = '2027-06-28'
   and not exists (select 1 from seance s where s.journee_id = j.id);

insert into journee (famille_id, jour) select f.id, '2027-06-29' from famille f
  on conflict (famille_id, jour) do nothing;
insert into seance
  (journee_id, rang, matiere, titre, reference, consigne, minutes, lecon,
   fiche, par_adulte, origine)
select j.id, v.rang, v.matiere, v.titre, '', v.consigne, v.minutes, v.lecon,
       v.fiche, null, 'trame'
  from journee j
  cross join (values
    (1, 'maths', 'Les compléments à 100', 'Combien manque-t-il à 67 pour aller à 100 ? Dix questions. Puis les compléments à 1 000.', 15, '', 'cm-cent-14'),
    (2, 'maths', 'Le hasard : certain, possible, impossible — on reprend', 'On relit le cours, puis on refait les exercices. Tes calculs sur ton brouillon, le résultat sur l’écran.', 25, 'm-p5-hasard', ''),
    (3, 'francais', 'La ponctuation et la lecture à voix haute — on reprend', 'On relit le cours, puis on refait les exercices. Tes calculs sur ton brouillon, le résultat sur l’écran.', 25, 'f-p5-ponctuation', ''),
    (4, 'francais', 'Dictée à trous', 'Le texte est écrit, il manque les terminaisons des verbes. On les complète en justifiant.', 20, '', 'ed-trous-04'),
    (5, 'francais', 'Lecture de théâtre', 'Une scène, lue à deux voix. Les didascalies ne se disent pas : elles se jouent.', 30, '', 'lf-theatre-02'),
    (6, 'francais', 'Écrire une lettre', 'Une lettre à quelqu’un de la famille. Formule d’appel, corps, formule de fin.', 25, '', 'rd-lettre-02'),
    (7, 'maison', 'Danse et rythme', 'Suivre une pulsation, inventer une suite de mouvements de huit temps, la refaire à l’identique.', 30, '', 'dh-danse-04')
  ) as v (rang, matiere, titre, consigne, minutes, lecon, fiche)
 where j.famille_id = (select id from famille) and j.jour = '2027-06-29'
   and not exists (select 1 from seance s where s.journee_id = j.id);

insert into journee (famille_id, jour) select f.id, '2027-06-30' from famille f
  on conflict (famille_id, jour) do nothing;
insert into seance
  (journee_id, rang, matiere, titre, reference, consigne, minutes, lecon,
   fiche, par_adulte, origine)
select j.id, v.rang, v.matiere, v.titre, '', v.consigne, v.minutes, v.lecon,
       v.fiche, null, 'trame'
  from journee j
  cross join (values
    (1, 'maths', 'Ajouter 9, 19, 29', 'On ajoute la dizaine ronde et on retire 1. Dix questions, en disant la procédure à voix haute.', 15, '', 'cm-neuf-14'),
    (2, 'francais', 'Lecture et questions', 'Un texte court, puis cinq questions : trois sur ce qui est écrit, deux sur ce qui se déduit.', 30, '', ''),
    (3, 'maison', 'Une sortie', 'Marché, médiathèque, musée, chantier, gare, ferme. On prépare une question avant de partir, et on y répond au retour.', 45, '', '')
  ) as v (rang, matiere, titre, consigne, minutes, lecon, fiche)
 where j.famille_id = (select id from famille) and j.jour = '2027-06-30'
   and not exists (select 1 from seance s where s.journee_id = j.id);

insert into journee (famille_id, jour) select f.id, '2027-07-01' from famille f
  on conflict (famille_id, jour) do nothing;
insert into seance
  (journee_id, rang, matiere, titre, reference, consigne, minutes, lecon,
   fiche, par_adulte, origine)
select j.id, v.rang, v.matiere, v.titre, '', v.consigne, v.minutes, v.lecon,
       v.fiche, null, 'trame'
  from journee j
  cross join (values
    (1, 'maths', 'Multiplier par 10, 100, 1 000', 'Dix questions rapides. Puis diviser par 10 : 320 ÷ 10, 4 500 ÷ 10.', 15, '', 'cm-dix-14'),
    (2, 'maths', 'Mesurer pour de vrai', 'Mesurer des objets de la maison, noter en deux unités différentes, comparer aux estimations faites avant.', 30, '', 'em-mesure-03'),
    (3, 'francais', 'Vocabulaire', 'Dix mots : trouver un synonyme, un contraire, et un mot de la même famille pour chacun.', 25, '', ''),
    (4, 'francais', 'Dictée de mots', 'Quinze mots de la liste en cours. On corrige ensemble, et on réécrit trois fois ceux qui ont hésité.', 20, '', 'ed-mots-05'),
    (5, 'francais', 'Lecture à voix haute', 'Une page préparée, lue à voix haute en respectant la ponctuation. On marque au crayon où respirer.', 30, '', 'lt-voix-03'),
    (6, 'francais', 'Écrire la suite', 'Lire le début d’un récit, puis en écrire la suite : dix lignes. Brouillon d’abord.', 25, '', 'rd-suite-03'),
    (7, 'maison', 'Course et endurance', 'Courir sans s’arrêter, en augmentant un peu chaque semaine. On chronomètre, on ne compare à personne.', 30, '', 'dh-course-05')
  ) as v (rang, matiere, titre, consigne, minutes, lecon, fiche)
 where j.famille_id = (select id from famille) and j.jour = '2027-07-01'
   and not exists (select 1 from seance s where s.journee_id = j.id);

insert into journee (famille_id, jour) select f.id, '2027-07-02' from famille f
  on conflict (famille_id, jour) do nothing;
insert into seance
  (journee_id, rang, matiere, titre, reference, consigne, minutes, lecon,
   fiche, par_adulte, origine)
select j.id, v.rang, v.matiere, v.titre, '', v.consigne, v.minutes, v.lecon,
       v.fiche, null, 'trame'
  from journee j
  cross join (values
    (1, 'maths', 'Multiplier par 4 et par 8', 'Par 4, c’est doubler deux fois. Par 8, trois fois. Dix questions en disant les étapes.', 15, '', 'cm-quatre-14'),
    (2, 'maths', 'Le nombre du jour', 'Un nombre au tableau. Le décomposer de cinq façons, l’encadrer, dire son nombre de centaines, le doubler.', 30, '', 'em-nombre-10'),
    (3, 'francais', 'Le dictionnaire', 'Chercher cinq mots rencontrés cette semaine. Relever la nature du mot et ses différents sens.', 25, '', ''),
    (4, 'francais', 'Dictée de phrases', 'Trois phrases. On souligne les verbes et on entoure les sujets avant de corriger.', 20, '', 'ed-phrases-04'),
    (5, 'francais', 'Lecture silencieuse', 'Vingt minutes dans le livre en cours, puis raconter ce qui vient de se passer.', 30, '', 'lt-silence-03'),
    (6, 'francais', 'Raconter sa journée d’hier', 'Dix lignes au passé. Vérifier que les temps ne changent pas en cours de route.', 25, '', 'rd-hier-01'),
    (7, 'maison', 'Jeux de ballon', 'Passes, tirs, jonglages. Compter les réussites de suite, battre son propre score.', 30, '', 'dh-ballon-04')
  ) as v (rang, matiere, titre, consigne, minutes, lecon, fiche)
 where j.famille_id = (select id from famille) and j.jour = '2027-07-02'
   and not exists (select 1 from seance s where s.journee_id = j.id);

do $$
declare n int;
begin
  if not exists (select 1 from famille) then return; end if;
  select count(*) into n from seance s
    join journee j on j.id = s.journee_id
   where j.famille_id = (select id from famille) and s.origine = 'trame';
  if n < 1008 then
    raise exception 'seulement % séances de trame, 1008 attendues', n;
  end if;
  raise notice '% séances de trame en base, 1008 attendues par le calcul', n;
end $$;

commit;
