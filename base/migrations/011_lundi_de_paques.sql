-- 011 — Le lundi de Pâques, et le manuel qui a bougé sous la base.
--
-- Deux corrections, et une seule façon propre de les appliquer.
--
-- 1. **Pâques tombe le 28 mars 2027** — tôt, donc hors des vacances de
--    printemps de la zone B (17 avril – 2 mai). Le lundi 29 mars est férié, et
--    il manquait à `lib/trame.ts` : l'open data du ministère liste les
--    vacances, pas les jours fériés. Sept séances étaient écrites dessus.
--    Retirer un jour de travail décale tout ce que la trame calcule ensuite —
--    les rituels tournent sur le rang du jour, les leçons se replacent.
--
-- 2. **Le manuel a été relu, et la base ne le savait pas.** Les mille séances
--    portent un titre, une matière, une consigne et une durée copiés de la
--    trame au moment de l'écriture. Depuis : onze leçons ont changé de durée,
--    sept consignes parlaient de l'enfant à la troisième personne alors que
--    c'est lui qui les lit — dont celle du jour du test, qui disait « il fait,
--    vous lirez » et qu'il aurait lue le premier matin —, et la lecture du
--    mercredi s'affichait « à la maison » là où la même lecture est
--    « français » les autres jours.
--
-- La façon propre : **jeter les journées intactes et les réécrire** d'après la
-- trame d'aujourd'hui. Pas de mise à jour champ par champ, pas de clé fragile
-- — on repose ce que le calcul produit. Une journée **intacte** est une
-- journée que personne n'a touchée : ton normal, pas de clôture, pas de note,
-- pas de ressenti, aucune séance faite ou mise de côté, aucune séance écrite à
-- la main, aucun résultat inscrit. Tout le reste est laissé tel quel — ce
-- qu'un parent a composé gagne contre la trame, et le travail de l'enfant ne
-- se réécrit jamais.
--
-- C'est sans risque aujourd'hui : au moment d'écrire, la base contient 1 015
-- séances dont **aucune** n'a été touchée par un humain — zéro séance écrite à
-- la main, zéro faite, zéro résultat, zéro réponse, zéro ressenti.
--
-- Le corps est généré, et se régénère :
--
--   npx tsx deploiement/ecrire-lannee.ts --reprendre --corps
--
-- Idempotent : relancé, il rejette les mêmes journées et repose les mêmes
-- séances. Sur une base sans famille, il ne fait rien et n'échoue pas. Ne pas
-- l'appliquer s'il existe une famille d'essai : l'écriture de l'année refuse
-- deux familles, et c'est voulu.

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
   par_adulte, origine)
select j.id, v.rang, v.matiere, v.titre, '', v.consigne, v.minutes, v.lecon,
       null, 'trame'
  from journee j
  cross join (values
    (1, 'maison', 'Le test du début d’année', 'Reviens à ta journée, et clique en bas sur le bouton « Le test du début d’année ». Sept parties, une à la fois. Il n’y a rien à préparer : tu réponds, et quand tu ne sais pas, tu le dis.', 90, ''),
    (2, 'maison', 'Lecture libre', 'Après le test, le livre que tu veux, sans compte à rendre. La journée s’arrête là.', 30, '')
  ) as v (rang, matiere, titre, consigne, minutes, lecon)
 where j.famille_id = (select id from famille) and j.jour = '2026-09-16'
   and not exists (select 1 from seance s where s.journee_id = j.id);

insert into journee (famille_id, jour) select f.id, '2026-09-17' from famille f
  on conflict (famille_id, jour) do nothing;
insert into seance
  (journee_id, rang, matiere, titre, reference, consigne, minutes, lecon,
   par_adulte, origine)
select j.id, v.rang, v.matiere, v.titre, '', v.consigne, v.minutes, v.lecon,
       null, 'trame'
  from journee j
  cross join (values
    (1, 'maths', 'Les tables de multiplication', 'Dix multiplications dictées, à l’ardoise. On efface entre chaque. On redit celles qui ont hésité.', 15, ''),
    (2, 'maths', 'Les nombres jusqu’à 9 999', 'Lis la leçon, puis fais les exercices. Tes calculs sur ton brouillon, le résultat sur l’écran.', 30, 'm-p1-nombres'),
    (3, 'francais', 'Trouver le verbe et le sujet', 'Lis la leçon, puis fais les exercices. Tes calculs sur ton brouillon, le résultat sur l’écran.', 25, 'f-p1-verbe-sujet'),
    (4, 'francais', 'Dictée de mots', 'Quinze mots de la liste en cours. On corrige ensemble, et on réécrit trois fois ceux qui ont hésité.', 20, ''),
    (5, 'francais', 'Lecture à voix haute', 'Une page préparée, lue à voix haute en respectant la ponctuation. On marque au crayon où respirer.', 30, ''),
    (6, 'sciences', 'Mesurer une masse', 'Lis la leçon, puis fais les exercices. Tes calculs sur ton brouillon, le résultat sur l’écran.', 30, 's-p1-masse'),
    (7, 'maison', 'Course et endurance', 'Courir sans s’arrêter, en augmentant un peu chaque semaine. On chronomètre, on ne compare à personne.', 30, '')
  ) as v (rang, matiere, titre, consigne, minutes, lecon)
 where j.famille_id = (select id from famille) and j.jour = '2026-09-17'
   and not exists (select 1 from seance s where s.journee_id = j.id);

insert into journee (famille_id, jour) select f.id, '2026-09-18' from famille f
  on conflict (famille_id, jour) do nothing;
insert into seance
  (journee_id, rang, matiere, titre, reference, consigne, minutes, lecon,
   par_adulte, origine)
select j.id, v.rang, v.matiere, v.titre, '', v.consigne, v.minutes, v.lecon,
       null, 'trame'
  from journee j
  cross join (values
    (1, 'maths', 'Les doubles et les moitiés', 'Le double de 45, la moitié de 68, le double de 250… Dix questions, à l’oral.', 15, ''),
    (2, 'maths', 'Comparer, ranger et encadrer', 'Lis la leçon, puis fais les exercices. Tes calculs sur ton brouillon, le résultat sur l’écran.', 25, 'm-p1-comparer'),
    (3, 'francais', 'La nature des mots', 'Lis la leçon, puis fais les exercices. Tes calculs sur ton brouillon, le résultat sur l’écran.', 25, 'f-p1-natures'),
    (4, 'francais', 'Dictée de phrases', 'Trois phrases. On souligne les verbes et on entoure les sujets avant de corriger.', 20, ''),
    (5, 'francais', 'Lecture silencieuse', 'Vingt minutes dans le livre en cours, puis raconter ce qui vient de se passer.', 30, ''),
    (6, 'histoire', 'Le seigneur, le château et la seigneurie', 'Lis la leçon, puis fais les exercices. Tes calculs sur ton brouillon, le résultat sur l’écran.', 30, 'h-p1-seigneurie'),
    (7, 'maison', 'Jeux de ballon', 'Passes, tirs, jonglages. Compter les réussites de suite, battre son propre score.', 30, '')
  ) as v (rang, matiere, titre, consigne, minutes, lecon)
 where j.famille_id = (select id from famille) and j.jour = '2026-09-18'
   and not exists (select 1 from seance s where s.journee_id = j.id);

insert into journee (famille_id, jour) select f.id, '2026-09-21' from famille f
  on conflict (famille_id, jour) do nothing;
insert into seance
  (journee_id, rang, matiere, titre, reference, consigne, minutes, lecon,
   par_adulte, origine)
select j.id, v.rang, v.matiere, v.titre, '', v.consigne, v.minutes, v.lecon,
       null, 'trame'
  from journee j
  cross join (values
    (1, 'maths', 'Les compléments à 100', 'Combien manque-t-il à 67 pour aller à 100 ? Dix questions. Puis les compléments à 1 000.', 15, ''),
    (2, 'maths', 'Reprendre la leçon de maths', 'Refaire les exercices de la dernière leçon de maths, sur le cahier cette fois. Comparer avec ce qui avait été trouvé.', 30, ''),
    (3, 'francais', 'Reprendre la leçon de français', 'Refaire les exercices de la dernière leçon de français, sur le cahier.', 25, ''),
    (4, 'francais', 'Copie soignée', 'Copier huit lignes d’un texte au choix, le plus soigneusement possible. On relit avant de rendre.', 20, ''),
    (5, 'francais', 'Lecture et questions', 'Un texte court, puis cinq questions : trois sur ce qui est écrit, deux sur ce qui se déduit.', 30, ''),
    (6, 'geographie', 'Comment se nourrit-on dans le monde ?', 'Lis la leçon, puis fais les exercices. Tes calculs sur ton brouillon, le résultat sur l’écran.', 35, 'g-p1-se-nourrir'),
    (7, 'maison', 'Vélo', 'Une sortie. Repérer le trajet sur un plan avant de partir, puis le raconter au retour.', 30, '')
  ) as v (rang, matiere, titre, consigne, minutes, lecon)
 where j.famille_id = (select id from famille) and j.jour = '2026-09-21'
   and not exists (select 1 from seance s where s.journee_id = j.id);

insert into journee (famille_id, jour) select f.id, '2026-09-22' from famille f
  on conflict (famille_id, jour) do nothing;
insert into seance
  (journee_id, rang, matiere, titre, reference, consigne, minutes, lecon,
   par_adulte, origine)
select j.id, v.rang, v.matiere, v.titre, '', v.consigne, v.minutes, v.lecon,
       null, 'trame'
  from journee j
  cross join (values
    (1, 'maths', 'Ajouter 9, 19, 29', 'On ajoute la dizaine ronde et on retire 1. Dix questions, en disant la procédure à voix haute.', 15, ''),
    (2, 'maths', 'Les fractions : partager en parts égales', 'Lis la leçon, puis fais les exercices. Tes calculs sur ton brouillon, le résultat sur l’écran.', 30, 'm-p1-fractions'),
    (3, 'francais', 'Les types et les formes de phrases', 'Lis la leçon, puis fais les exercices. Tes calculs sur ton brouillon, le résultat sur l’écran.', 25, 'f-p1-types-phrases'),
    (4, 'francais', 'Dictée préparée', 'Le texte a été lu la veille. On le dicte, puis on compare avec l’original.', 20, ''),
    (5, 'francais', 'Lecture d’un documentaire', 'Une double page documentaire. Relever la nature et la source du document avant de lire.', 30, ''),
    (6, 'francais', 'Décrire un lieu', 'Dix lignes sur un endroit que tu connais. Au moins trois adjectifs qui servent vraiment.', 25, ''),
    (7, 'maison', 'Parcours et équilibre', 'Un parcours à installer soi-même : sauter, grimper, tenir en équilibre, ramper.', 30, '')
  ) as v (rang, matiere, titre, consigne, minutes, lecon)
 where j.famille_id = (select id from famille) and j.jour = '2026-09-22'
   and not exists (select 1 from seance s where s.journee_id = j.id);

insert into journee (famille_id, jour) select f.id, '2026-09-23' from famille f
  on conflict (famille_id, jour) do nothing;
insert into seance
  (journee_id, rang, matiere, titre, reference, consigne, minutes, lecon,
   par_adulte, origine)
select j.id, v.rang, v.matiere, v.titre, '', v.consigne, v.minutes, v.lecon,
       null, 'trame'
  from journee j
  cross join (values
    (1, 'maths', 'Multiplier par 10, 100, 1 000', 'Dix questions rapides. Puis diviser par 10 : 320 ÷ 10, 4 500 ÷ 10.', 15, ''),
    (2, 'histoire', 'La vie des paysannes et des paysans', 'Lis la leçon, puis fais les exercices. Tes calculs sur ton brouillon, le résultat sur l’écran.', 30, 'h-p1-paysans'),
    (3, 'maison', 'La boîte à pourquoi', 'Prendre une question que tu as posée cette semaine, chercher la réponse ensemble, et s’arrêter quand on ne sait plus.', 45, '')
  ) as v (rang, matiere, titre, consigne, minutes, lecon)
 where j.famille_id = (select id from famille) and j.jour = '2026-09-23'
   and not exists (select 1 from seance s where s.journee_id = j.id);

insert into journee (famille_id, jour) select f.id, '2026-09-24' from famille f
  on conflict (famille_id, jour) do nothing;
insert into seance
  (journee_id, rang, matiere, titre, reference, consigne, minutes, lecon,
   par_adulte, origine)
select j.id, v.rang, v.matiere, v.titre, '', v.consigne, v.minutes, v.lecon,
       null, 'trame'
  from journee j
  cross join (values
    (1, 'maths', 'Multiplier par 4 et par 8', 'Par 4, c’est doubler deux fois. Par 8, trois fois. Dix questions en disant les étapes.', 15, ''),
    (2, 'maths', 'Le nombre du jour', 'Un nombre au tableau. Le décomposer de cinq façons, l’encadrer, dire son nombre de centaines, le doubler.', 30, ''),
    (3, 'francais', 'Le dictionnaire', 'Chercher cinq mots rencontrés cette semaine. Relever la nature du mot et ses différents sens.', 25, ''),
    (4, 'francais', 'Transformer des phrases', 'Mettre cinq phrases au pluriel, en respectant toute la chaîne d’accords. À l’écrit.', 20, ''),
    (5, 'francais', 'Lecture d’une bande dessinée', 'Une planche. Puis expliquer ce que les images racontent et que le texte ne dit pas.', 30, ''),
    (6, 'francais', 'Expliquer une règle', 'Réécrire avec tes mots une leçon de la semaine, pour quelqu’un qui ne l’a pas eue.', 25, ''),
    (7, 'maison', 'Jeux de raquette', 'Échanges contre un mur ou à deux. Compter les échanges tenus sans faute.', 30, '')
  ) as v (rang, matiere, titre, consigne, minutes, lecon)
 where j.famille_id = (select id from famille) and j.jour = '2026-09-24'
   and not exists (select 1 from seance s where s.journee_id = j.id);

insert into journee (famille_id, jour) select f.id, '2026-09-25' from famille f
  on conflict (famille_id, jour) do nothing;
insert into seance
  (journee_id, rang, matiere, titre, reference, consigne, minutes, lecon,
   par_adulte, origine)
select j.id, v.rang, v.matiere, v.titre, '', v.consigne, v.minutes, v.lecon,
       null, 'trame'
  from journee j
  cross join (values
    (1, 'maths', 'Multiplier par 5 et par 50', 'Par 5, c’est la moitié de par 10. Par 50, la moitié de par 100. Dix questions.', 15, ''),
    (2, 'maths', 'La fraction d’une quantité', 'Lis la leçon, puis fais les exercices. Tes calculs sur ton brouillon, le résultat sur l’écran.', 25, 'm-p1-fraction-quantite'),
    (3, 'francais', 'Le groupe du nom et ses accords', 'Lis la leçon, puis fais les exercices. Tes calculs sur ton brouillon, le résultat sur l’écran.', 30, 'f-p1-groupe-nominal'),
    (4, 'francais', 'Dictée à trous', 'Le texte est écrit, il manque les terminaisons des verbes. On les complète en justifiant.', 20, ''),
    (5, 'francais', 'Lecture de théâtre', 'Une scène, lue à deux voix. Les didascalies ne se disent pas : elles se jouent.', 30, ''),
    (6, 'geographie', 'D’où vient ce qu’on mange ?', 'Lis la leçon, puis fais les exercices. Tes calculs sur ton brouillon, le résultat sur l’écran.', 25, 'g-p1-produits'),
    (7, 'maison', 'Danse et rythme', 'Suivre une pulsation, inventer une suite de mouvements de huit temps, la refaire à l’identique.', 30, '')
  ) as v (rang, matiere, titre, consigne, minutes, lecon)
 where j.famille_id = (select id from famille) and j.jour = '2026-09-25'
   and not exists (select 1 from seance s where s.journee_id = j.id);

insert into journee (famille_id, jour) select f.id, '2026-09-28' from famille f
  on conflict (famille_id, jour) do nothing;
insert into seance
  (journee_id, rang, matiere, titre, reference, consigne, minutes, lecon,
   par_adulte, origine)
select j.id, v.rang, v.matiere, v.titre, '', v.consigne, v.minutes, v.lecon,
       null, 'trame'
  from journee j
  cross join (values
    (1, 'maths', 'Les fractions d’une quantité', 'La moitié de 36, le tiers de 24, les trois quarts de 20. Dix questions à l’oral.', 15, ''),
    (2, 'maths', 'Additionner et soustraire en colonnes', 'Lis la leçon, puis fais les exercices. Tes calculs sur ton brouillon, le résultat sur l’écran.', 25, 'm-p1-addition-soustraction'),
    (3, 'francais', 'Le présent de l’indicatif', 'Lis la leçon, puis fais les exercices. Tes calculs sur ton brouillon, le résultat sur l’écran.', 30, 'f-p1-present'),
    (4, 'francais', 'Auto-dictée', 'Apprendre quatre lignes par cœur la veille, les écrire de mémoire aujourd’hui.', 20, ''),
    (5, 'francais', 'Lecture libre', 'Le livre que tu veux, sans compte à rendre. On te demande seulement si tu as aimé, et pourquoi.', 30, ''),
    (6, 'emc', 'Pourquoi il y a des règles', 'Lis la leçon, puis fais les exercices. Tes calculs sur ton brouillon, le résultat sur l’écran.', 25, 'e-p1-regles'),
    (7, 'maison', 'Jardinage ou bricolage', 'Planter, arroser, mesurer, réparer. Le travail des mains compte autant que le reste.', 30, '')
  ) as v (rang, matiere, titre, consigne, minutes, lecon)
 where j.famille_id = (select id from famille) and j.jour = '2026-09-28'
   and not exists (select 1 from seance s where s.journee_id = j.id);

insert into journee (famille_id, jour) select f.id, '2026-09-29' from famille f
  on conflict (famille_id, jour) do nothing;
insert into seance
  (journee_id, rang, matiere, titre, reference, consigne, minutes, lecon,
   par_adulte, origine)
select j.id, v.rang, v.matiere, v.titre, '', v.consigne, v.minutes, v.lecon,
       null, 'trame'
  from journee j
  cross join (values
    (1, 'maths', 'Les problèmes en une phrase', 'Cinq problèmes dictés, très courts. La réponse sur l’ardoise, sans écrire le calcul.', 15, ''),
    (2, 'maths', 'Reprendre la leçon de maths', 'Refaire les exercices de la dernière leçon de maths, sur le cahier cette fois. Comparer avec ce qui avait été trouvé.', 30, ''),
    (3, 'francais', 'Reprendre la leçon de français', 'Refaire les exercices de la dernière leçon de français, sur le cahier.', 25, ''),
    (4, 'francais', 'Dictée de mots', 'Quinze mots de la liste en cours. On corrige ensemble, et on réécrit trois fois ceux qui ont hésité.', 20, ''),
    (5, 'francais', 'Lecture à voix haute', 'Une page préparée, lue à voix haute en respectant la ponctuation. On marque au crayon où respirer.', 30, ''),
    (6, 'sciences', 'Les mélanges, et comment les séparer', 'Lis la leçon, puis fais les exercices. Tes calculs sur ton brouillon, le résultat sur l’écran.', 30, 's-p1-melanges'),
    (7, 'maison', 'Course et endurance', 'Courir sans s’arrêter, en augmentant un peu chaque semaine. On chronomètre, on ne compare à personne.', 30, '')
  ) as v (rang, matiere, titre, consigne, minutes, lecon)
 where j.famille_id = (select id from famille) and j.jour = '2026-09-29'
   and not exists (select 1 from seance s where s.journee_id = j.id);

insert into journee (famille_id, jour) select f.id, '2026-09-30' from famille f
  on conflict (famille_id, jour) do nothing;
insert into seance
  (journee_id, rang, matiere, titre, reference, consigne, minutes, lecon,
   par_adulte, origine)
select j.id, v.rang, v.matiere, v.titre, '', v.consigne, v.minutes, v.lecon,
       null, 'trame'
  from journee j
  cross join (values
    (1, 'maths', 'Encadrer et arrondir', 'Entre quels milliers se trouve 6 480 ? Quel est l’arrondi de 12,94 ? Dix questions.', 15, ''),
    (2, 'geographie', 'Comment se nourrit-on dans le monde ? — on reprend', 'On relit le cours, puis on refait les exercices. Tes calculs sur ton brouillon, le résultat sur l’écran.', 35, 'g-p1-se-nourrir'),
    (3, 'maison', 'Construire quelque chose', 'Un objet qui marche : un pont en papier qui porte un livre, un moulin, un circuit. Croquis d’abord.', 45, '')
  ) as v (rang, matiere, titre, consigne, minutes, lecon)
 where j.famille_id = (select id from famille) and j.jour = '2026-09-30'
   and not exists (select 1 from seance s where s.journee_id = j.id);

insert into journee (famille_id, jour) select f.id, '2026-10-01' from famille f
  on conflict (famille_id, jour) do nothing;
insert into seance
  (journee_id, rang, matiere, titre, reference, consigne, minutes, lecon,
   par_adulte, origine)
select j.id, v.rang, v.matiere, v.titre, '', v.consigne, v.minutes, v.lecon,
       null, 'trame'
  from journee j
  cross join (values
    (1, 'maths', 'Les unités de mesure', 'Combien de grammes dans 2 kg 500 ? De centimètres dans 3 m 50 ? Dix questions.', 15, ''),
    (2, 'maths', 'Les problèmes : comprendre avant de calculer', 'Lis la leçon, puis fais les exercices. Tes calculs sur ton brouillon, le résultat sur l’écran.', 30, 'm-p1-problemes'),
    (3, 'francais', 'Les familles de mots', 'Lis la leçon, puis fais les exercices. Tes calculs sur ton brouillon, le résultat sur l’écran.', 25, 'f-p1-familles'),
    (4, 'francais', 'Copie soignée', 'Copier huit lignes d’un texte au choix, le plus soigneusement possible. On relit avant de rendre.', 20, ''),
    (5, 'francais', 'Lecture et questions', 'Un texte court, puis cinq questions : trois sur ce qui est écrit, deux sur ce qui se déduit.', 30, ''),
    (6, 'histoire', 'Le seigneur, le château et la seigneurie — on reprend', 'On relit le cours, puis on refait les exercices. Tes calculs sur ton brouillon, le résultat sur l’écran.', 30, 'h-p1-seigneurie'),
    (7, 'maison', 'Vélo', 'Une sortie. Repérer le trajet sur un plan avant de partir, puis le raconter au retour.', 30, '')
  ) as v (rang, matiere, titre, consigne, minutes, lecon)
 where j.famille_id = (select id from famille) and j.jour = '2026-10-01'
   and not exists (select 1 from seance s where s.journee_id = j.id);

insert into journee (famille_id, jour) select f.id, '2026-10-02' from famille f
  on conflict (famille_id, jour) do nothing;
insert into seance
  (journee_id, rang, matiere, titre, reference, consigne, minutes, lecon,
   par_adulte, origine)
select j.id, v.rang, v.matiere, v.titre, '', v.consigne, v.minutes, v.lecon,
       null, 'trame'
  from journee j
  cross join (values
    (1, 'maths', 'Les durées', 'De 8 h 45 à 12 h 30, combien de temps ? Cinq calculs de durée, à l’oral.', 15, ''),
    (2, 'maths', 'Le nombre du jour', 'Un nombre au tableau. Le décomposer de cinq façons, l’encadrer, dire son nombre de centaines, le doubler.', 30, ''),
    (3, 'francais', 'Le dictionnaire', 'Chercher cinq mots rencontrés cette semaine. Relever la nature du mot et ses différents sens.', 25, ''),
    (4, 'francais', 'Dictée préparée', 'Le texte a été lu la veille. On le dicte, puis on compare avec l’original.', 20, ''),
    (5, 'francais', 'Lecture d’un documentaire', 'Une double page documentaire. Relever la nature et la source du document avant de lire.', 30, ''),
    (6, 'francais', 'Décrire un lieu', 'Dix lignes sur un endroit que tu connais. Au moins trois adjectifs qui servent vraiment.', 25, ''),
    (7, 'maison', 'Parcours et équilibre', 'Un parcours à installer soi-même : sauter, grimper, tenir en équilibre, ramper.', 30, '')
  ) as v (rang, matiere, titre, consigne, minutes, lecon)
 where j.famille_id = (select id from famille) and j.jour = '2026-10-02'
   and not exists (select 1 from seance s where s.journee_id = j.id);

insert into journee (famille_id, jour) select f.id, '2026-10-05' from famille f
  on conflict (famille_id, jour) do nothing;
insert into seance
  (journee_id, rang, matiere, titre, reference, consigne, minutes, lecon,
   par_adulte, origine)
select j.id, v.rang, v.matiere, v.titre, '', v.consigne, v.minutes, v.lecon,
       null, 'trame'
  from journee j
  cross join (values
    (1, 'maths', 'Les tables de multiplication', 'Dix multiplications dictées, à l’ardoise. On efface entre chaque. On redit celles qui ont hésité.', 15, ''),
    (2, 'maths', 'Les nombres jusqu’à 9 999 — on reprend', 'On relit le cours, puis on refait les exercices. Tes calculs sur ton brouillon, le résultat sur l’écran.', 30, 'm-p1-nombres'),
    (3, 'francais', 'Trouver le verbe et le sujet — on reprend', 'On relit le cours, puis on refait les exercices. Tes calculs sur ton brouillon, le résultat sur l’écran.', 25, 'f-p1-verbe-sujet'),
    (4, 'francais', 'Les mots invariables', 'Apprendre dix mots invariables, puis les écrire sous la dictée.', 20, ''),
    (5, 'francais', 'Poésie', 'Lire un poème à voix haute, plusieurs fois. Repérer les rimes et les images. En apprendre quatre vers.', 30, ''),
    (6, 'francais', 'Donner son avis', 'Ce que je pense, pourquoi, un exemple. Huit lignes. Les trois morceaux doivent y être.', 25, ''),
    (7, 'maison', 'Marche et observation', 'Une marche d’une demi-heure. Rapporter trois choses observées, à noter ou à dessiner.', 30, '')
  ) as v (rang, matiere, titre, consigne, minutes, lecon)
 where j.famille_id = (select id from famille) and j.jour = '2026-10-05'
   and not exists (select 1 from seance s where s.journee_id = j.id);

insert into journee (famille_id, jour) select f.id, '2026-10-06' from famille f
  on conflict (famille_id, jour) do nothing;
insert into seance
  (journee_id, rang, matiere, titre, reference, consigne, minutes, lecon,
   par_adulte, origine)
select j.id, v.rang, v.matiere, v.titre, '', v.consigne, v.minutes, v.lecon,
       null, 'trame'
  from journee j
  cross join (values
    (1, 'maths', 'Les doubles et les moitiés', 'Le double de 45, la moitié de 68, le double de 250… Dix questions, à l’oral.', 15, ''),
    (2, 'maths', 'Comparer, ranger et encadrer — on reprend', 'On relit le cours, puis on refait les exercices. Tes calculs sur ton brouillon, le résultat sur l’écran.', 25, 'm-p1-comparer'),
    (3, 'francais', 'La nature des mots — on reprend', 'On relit le cours, puis on refait les exercices. Tes calculs sur ton brouillon, le résultat sur l’écran.', 25, 'f-p1-natures'),
    (4, 'francais', 'Transformer des phrases', 'Mettre cinq phrases au pluriel, en respectant toute la chaîne d’accords. À l’écrit.', 20, ''),
    (5, 'francais', 'Lecture d’une bande dessinée', 'Une planche. Puis expliquer ce que les images racontent et que le texte ne dit pas.', 30, ''),
    (6, 'histoire', 'La vie des paysannes et des paysans — on reprend', 'On relit le cours, puis on refait les exercices. Tes calculs sur ton brouillon, le résultat sur l’écran.', 30, 'h-p1-paysans'),
    (7, 'maison', 'Jeux de raquette', 'Échanges contre un mur ou à deux. Compter les échanges tenus sans faute.', 30, '')
  ) as v (rang, matiere, titre, consigne, minutes, lecon)
 where j.famille_id = (select id from famille) and j.jour = '2026-10-06'
   and not exists (select 1 from seance s where s.journee_id = j.id);

insert into journee (famille_id, jour) select f.id, '2026-10-07' from famille f
  on conflict (famille_id, jour) do nothing;
insert into seance
  (journee_id, rang, matiere, titre, reference, consigne, minutes, lecon,
   par_adulte, origine)
select j.id, v.rang, v.matiere, v.titre, '', v.consigne, v.minutes, v.lecon,
       null, 'trame'
  from journee j
  cross join (values
    (1, 'maths', 'Les compléments à 100', 'Combien manque-t-il à 67 pour aller à 100 ? Dix questions. Puis les compléments à 1 000.', 15, ''),
    (2, 'sciences', 'Mesurer une masse — on reprend', 'On relit le cours, puis on refait les exercices. Tes calculs sur ton brouillon, le résultat sur l’écran.', 30, 's-p1-masse'),
    (3, 'maison', 'Une sortie', 'Marché, médiathèque, musée, chantier, gare, ferme. On prépare une question avant de partir, et on y répond au retour.', 45, '')
  ) as v (rang, matiere, titre, consigne, minutes, lecon)
 where j.famille_id = (select id from famille) and j.jour = '2026-10-07'
   and not exists (select 1 from seance s where s.journee_id = j.id);

insert into journee (famille_id, jour) select f.id, '2026-10-08' from famille f
  on conflict (famille_id, jour) do nothing;
insert into seance
  (journee_id, rang, matiere, titre, reference, consigne, minutes, lecon,
   par_adulte, origine)
select j.id, v.rang, v.matiere, v.titre, '', v.consigne, v.minutes, v.lecon,
       null, 'trame'
  from journee j
  cross join (values
    (1, 'maths', 'Ajouter 9, 19, 29', 'On ajoute la dizaine ronde et on retire 1. Dix questions, en disant la procédure à voix haute.', 15, ''),
    (2, 'maths', 'Les fractions : partager en parts égales — on reprend', 'On relit le cours, puis on refait les exercices. Tes calculs sur ton brouillon, le résultat sur l’écran.', 30, 'm-p1-fractions'),
    (3, 'francais', 'Les types et les formes de phrases — on reprend', 'On relit le cours, puis on refait les exercices. Tes calculs sur ton brouillon, le résultat sur l’écran.', 25, 'f-p1-types-phrases'),
    (4, 'francais', 'Auto-dictée', 'Apprendre quatre lignes par cœur la veille, les écrire de mémoire aujourd’hui.', 20, ''),
    (5, 'francais', 'Lecture libre', 'Le livre que tu veux, sans compte à rendre. On te demande seulement si tu as aimé, et pourquoi.', 30, ''),
    (6, 'sciences', 'Les mélanges, et comment les séparer — on reprend', 'On relit le cours, puis on refait les exercices. Tes calculs sur ton brouillon, le résultat sur l’écran.', 30, 's-p1-melanges'),
    (7, 'maison', 'Jardinage ou bricolage', 'Planter, arroser, mesurer, réparer. Le travail des mains compte autant que le reste.', 30, '')
  ) as v (rang, matiere, titre, consigne, minutes, lecon)
 where j.famille_id = (select id from famille) and j.jour = '2026-10-08'
   and not exists (select 1 from seance s where s.journee_id = j.id);

insert into journee (famille_id, jour) select f.id, '2026-10-09' from famille f
  on conflict (famille_id, jour) do nothing;
insert into seance
  (journee_id, rang, matiere, titre, reference, consigne, minutes, lecon,
   par_adulte, origine)
select j.id, v.rang, v.matiere, v.titre, '', v.consigne, v.minutes, v.lecon,
       null, 'trame'
  from journee j
  cross join (values
    (1, 'maths', 'Multiplier par 10, 100, 1 000', 'Dix questions rapides. Puis diviser par 10 : 320 ÷ 10, 4 500 ÷ 10.', 15, ''),
    (2, 'maths', 'Mesurer pour de vrai', 'Mesurer des objets de la maison, noter en deux unités différentes, comparer aux estimations faites avant.', 30, ''),
    (3, 'francais', 'Vocabulaire', 'Dix mots : trouver un synonyme, un contraire, et un mot de la même famille pour chacun.', 25, ''),
    (4, 'francais', 'Dictée de mots', 'Quinze mots de la liste en cours. On corrige ensemble, et on réécrit trois fois ceux qui ont hésité.', 20, ''),
    (5, 'francais', 'Lecture à voix haute', 'Une page préparée, lue à voix haute en respectant la ponctuation. On marque au crayon où respirer.', 30, ''),
    (6, 'anglais', 'Saluer et se présenter', 'Lis la leçon, puis fais les exercices. Tes calculs sur ton brouillon, le résultat sur l’écran.', 25, 'a-p1-saluer'),
    (7, 'maison', 'Course et endurance', 'Courir sans s’arrêter, en augmentant un peu chaque semaine. On chronomètre, on ne compare à personne.', 30, '')
  ) as v (rang, matiere, titre, consigne, minutes, lecon)
 where j.famille_id = (select id from famille) and j.jour = '2026-10-09'
   and not exists (select 1 from seance s where s.journee_id = j.id);

insert into journee (famille_id, jour) select f.id, '2026-10-12' from famille f
  on conflict (famille_id, jour) do nothing;
insert into seance
  (journee_id, rang, matiere, titre, reference, consigne, minutes, lecon,
   par_adulte, origine)
select j.id, v.rang, v.matiere, v.titre, '', v.consigne, v.minutes, v.lecon,
       null, 'trame'
  from journee j
  cross join (values
    (1, 'maths', 'Multiplier par 4 et par 8', 'Par 4, c’est doubler deux fois. Par 8, trois fois. Dix questions en disant les étapes.', 15, ''),
    (2, 'maths', 'La fraction d’une quantité — on reprend', 'On relit le cours, puis on refait les exercices. Tes calculs sur ton brouillon, le résultat sur l’écran.', 25, 'm-p1-fraction-quantite'),
    (3, 'francais', 'Le groupe du nom et ses accords — on reprend', 'On relit le cours, puis on refait les exercices. Tes calculs sur ton brouillon, le résultat sur l’écran.', 30, 'f-p1-groupe-nominal'),
    (4, 'francais', 'Dictée de phrases', 'Trois phrases. On souligne les verbes et on entoure les sujets avant de corriger.', 20, ''),
    (5, 'francais', 'Lecture silencieuse', 'Vingt minutes dans le livre en cours, puis raconter ce qui vient de se passer.', 30, ''),
    (6, 'francais', 'Raconter sa journée d’hier', 'Dix lignes au passé. Vérifier que les temps ne changent pas en cours de route.', 25, ''),
    (7, 'maison', 'Jeux de ballon', 'Passes, tirs, jonglages. Compter les réussites de suite, battre son propre score.', 30, '')
  ) as v (rang, matiere, titre, consigne, minutes, lecon)
 where j.famille_id = (select id from famille) and j.jour = '2026-10-12'
   and not exists (select 1 from seance s where s.journee_id = j.id);

insert into journee (famille_id, jour) select f.id, '2026-10-13' from famille f
  on conflict (famille_id, jour) do nothing;
insert into seance
  (journee_id, rang, matiere, titre, reference, consigne, minutes, lecon,
   par_adulte, origine)
select j.id, v.rang, v.matiere, v.titre, '', v.consigne, v.minutes, v.lecon,
       null, 'trame'
  from journee j
  cross join (values
    (1, 'maths', 'Multiplier par 5 et par 50', 'Par 5, c’est la moitié de par 10. Par 50, la moitié de par 100. Dix questions.', 15, ''),
    (2, 'maths', 'Additionner et soustraire en colonnes — on reprend', 'On relit le cours, puis on refait les exercices. Tes calculs sur ton brouillon, le résultat sur l’écran.', 25, 'm-p1-addition-soustraction'),
    (3, 'francais', 'Le présent de l’indicatif — on reprend', 'On relit le cours, puis on refait les exercices. Tes calculs sur ton brouillon, le résultat sur l’écran.', 30, 'f-p1-present'),
    (4, 'francais', 'Copie soignée', 'Copier huit lignes d’un texte au choix, le plus soigneusement possible. On relit avant de rendre.', 20, ''),
    (5, 'francais', 'Lecture et questions', 'Un texte court, puis cinq questions : trois sur ce qui est écrit, deux sur ce qui se déduit.', 30, ''),
    (6, 'geographie', 'D’où vient ce qu’on mange ? — on reprend', 'On relit le cours, puis on refait les exercices. Tes calculs sur ton brouillon, le résultat sur l’écran.', 25, 'g-p1-produits'),
    (7, 'maison', 'Vélo', 'Une sortie. Repérer le trajet sur un plan avant de partir, puis le raconter au retour.', 30, '')
  ) as v (rang, matiere, titre, consigne, minutes, lecon)
 where j.famille_id = (select id from famille) and j.jour = '2026-10-13'
   and not exists (select 1 from seance s where s.journee_id = j.id);

insert into journee (famille_id, jour) select f.id, '2026-10-14' from famille f
  on conflict (famille_id, jour) do nothing;
insert into seance
  (journee_id, rang, matiere, titre, reference, consigne, minutes, lecon,
   par_adulte, origine)
select j.id, v.rang, v.matiere, v.titre, '', v.consigne, v.minutes, v.lecon,
       null, 'trame'
  from journee j
  cross join (values
    (1, 'maths', 'Les fractions d’une quantité', 'La moitié de 36, le tiers de 24, les trois quarts de 20. Dix questions à l’oral.', 15, ''),
    (2, 'anglais', 'Les nombres et l’âge', 'Lis la leçon, puis fais les exercices. Tes calculs sur ton brouillon, le résultat sur l’écran.', 25, 'a-p1-nombres'),
    (3, 'maison', 'Cuisine et mesures', 'Une recette, en pesant et en convertissant. Doubler les quantités pour voir ce que ça change.', 45, '')
  ) as v (rang, matiere, titre, consigne, minutes, lecon)
 where j.famille_id = (select id from famille) and j.jour = '2026-10-14'
   and not exists (select 1 from seance s where s.journee_id = j.id);

insert into journee (famille_id, jour) select f.id, '2026-10-15' from famille f
  on conflict (famille_id, jour) do nothing;
insert into seance
  (journee_id, rang, matiere, titre, reference, consigne, minutes, lecon,
   par_adulte, origine)
select j.id, v.rang, v.matiere, v.titre, '', v.consigne, v.minutes, v.lecon,
       null, 'trame'
  from journee j
  cross join (values
    (1, 'maths', 'Les problèmes en une phrase', 'Cinq problèmes dictés, très courts. La réponse sur l’ardoise, sans écrire le calcul.', 15, ''),
    (2, 'maths', 'Les problèmes : comprendre avant de calculer — on reprend', 'On relit le cours, puis on refait les exercices. Tes calculs sur ton brouillon, le résultat sur l’écran.', 30, 'm-p1-problemes'),
    (3, 'francais', 'Les familles de mots — on reprend', 'On relit le cours, puis on refait les exercices. Tes calculs sur ton brouillon, le résultat sur l’écran.', 25, 'f-p1-familles'),
    (4, 'francais', 'Les mots invariables', 'Apprendre dix mots invariables, puis les écrire sous la dictée.', 20, ''),
    (5, 'francais', 'Poésie', 'Lire un poème à voix haute, plusieurs fois. Repérer les rimes et les images. En apprendre quatre vers.', 30, ''),
    (6, 'francais', 'Donner son avis', 'Ce que je pense, pourquoi, un exemple. Huit lignes. Les trois morceaux doivent y être.', 25, ''),
    (7, 'maison', 'Marche et observation', 'Une marche d’une demi-heure. Rapporter trois choses observées, à noter ou à dessiner.', 30, '')
  ) as v (rang, matiere, titre, consigne, minutes, lecon)
 where j.famille_id = (select id from famille) and j.jour = '2026-10-15'
   and not exists (select 1 from seance s where s.journee_id = j.id);

insert into journee (famille_id, jour) select f.id, '2026-10-16' from famille f
  on conflict (famille_id, jour) do nothing;
insert into seance
  (journee_id, rang, matiere, titre, reference, consigne, minutes, lecon,
   par_adulte, origine)
select j.id, v.rang, v.matiere, v.titre, '', v.consigne, v.minutes, v.lecon,
       null, 'trame'
  from journee j
  cross join (values
    (1, 'maths', 'Encadrer et arrondir', 'Entre quels milliers se trouve 6 480 ? Quel est l’arrondi de 12,94 ? Dix questions.', 15, ''),
    (2, 'maths', 'Géométrie : tracer', 'Un programme de construction à suivre à la règle, à l’équerre et au compas. La précision compte.', 30, ''),
    (3, 'francais', 'Les homophones', 'Un texte à trous : a/à, est/et, son/sont, ont/on. Justifier chaque choix par le test de remplacement.', 25, ''),
    (4, 'francais', 'Transformer des phrases', 'Mettre cinq phrases au pluriel, en respectant toute la chaîne d’accords. À l’écrit.', 20, ''),
    (5, 'francais', 'Lecture d’une bande dessinée', 'Une planche. Puis expliquer ce que les images racontent et que le texte ne dit pas.', 30, ''),
    (6, 'anglais', 'Saluer et se présenter — on reprend', 'On relit le cours, puis on refait les exercices. Tes calculs sur ton brouillon, le résultat sur l’écran.', 25, 'a-p1-saluer'),
    (7, 'maison', 'Jeux de raquette', 'Échanges contre un mur ou à deux. Compter les échanges tenus sans faute.', 30, '')
  ) as v (rang, matiere, titre, consigne, minutes, lecon)
 where j.famille_id = (select id from famille) and j.jour = '2026-10-16'
   and not exists (select 1 from seance s where s.journee_id = j.id);

insert into journee (famille_id, jour) select f.id, '2026-11-02' from famille f
  on conflict (famille_id, jour) do nothing;
insert into seance
  (journee_id, rang, matiere, titre, reference, consigne, minutes, lecon,
   par_adulte, origine)
select j.id, v.rang, v.matiere, v.titre, '', v.consigne, v.minutes, v.lecon,
       null, 'trame'
  from journee j
  cross join (values
    (1, 'maths', 'Les unités de mesure', 'Combien de grammes dans 2 kg 500 ? De centimètres dans 3 m 50 ? Dix questions.', 15, ''),
    (2, 'maths', 'Les fractions plus grandes que 1', 'Lis la leçon, puis fais les exercices. Tes calculs sur ton brouillon, le résultat sur l’écran.', 30, 'm-p2-fractions-sup'),
    (3, 'francais', 'L’imparfait', 'Lis la leçon, puis fais les exercices. Tes calculs sur ton brouillon, le résultat sur l’écran.', 25, 'f-p2-imparfait'),
    (4, 'francais', 'Dictée à trous', 'Le texte est écrit, il manque les terminaisons des verbes. On les complète en justifiant.', 20, ''),
    (5, 'francais', 'Lecture de théâtre', 'Une scène, lue à deux voix. Les didascalies ne se disent pas : elles se jouent.', 30, ''),
    (6, 'histoire', 'L’Église, l’art roman et l’art gothique', 'Lis la leçon, puis fais les exercices. Tes calculs sur ton brouillon, le résultat sur l’écran.', 30, 'h-p2-eglise'),
    (7, 'maison', 'Danse et rythme', 'Suivre une pulsation, inventer une suite de mouvements de huit temps, la refaire à l’identique.', 30, '')
  ) as v (rang, matiere, titre, consigne, minutes, lecon)
 where j.famille_id = (select id from famille) and j.jour = '2026-11-02'
   and not exists (select 1 from seance s where s.journee_id = j.id);

insert into journee (famille_id, jour) select f.id, '2026-11-03' from famille f
  on conflict (famille_id, jour) do nothing;
insert into seance
  (journee_id, rang, matiere, titre, reference, consigne, minutes, lecon,
   par_adulte, origine)
select j.id, v.rang, v.matiere, v.titre, '', v.consigne, v.minutes, v.lecon,
       null, 'trame'
  from journee j
  cross join (values
    (1, 'maths', 'Les durées', 'De 8 h 45 à 12 h 30, combien de temps ? Cinq calculs de durée, à l’oral.', 15, ''),
    (2, 'maths', 'Le nombre du jour', 'Un nombre au tableau. Le décomposer de cinq façons, l’encadrer, dire son nombre de centaines, le doubler.', 30, ''),
    (3, 'francais', 'Le dictionnaire', 'Chercher cinq mots rencontrés cette semaine. Relever la nature du mot et ses différents sens.', 25, ''),
    (4, 'francais', 'Auto-dictée', 'Apprendre quatre lignes par cœur la veille, les écrire de mémoire aujourd’hui.', 20, ''),
    (5, 'francais', 'Lecture libre', 'Le livre que tu veux, sans compte à rendre. On te demande seulement si tu as aimé, et pourquoi.', 30, ''),
    (6, 'arts', 'Les couleurs', 'Lis la leçon, puis fais les exercices. Tes calculs sur ton brouillon, le résultat sur l’écran.', 25, 'ar-p2-couleurs'),
    (7, 'maison', 'Jardinage ou bricolage', 'Planter, arroser, mesurer, réparer. Le travail des mains compte autant que le reste.', 30, '')
  ) as v (rang, matiere, titre, consigne, minutes, lecon)
 where j.famille_id = (select id from famille) and j.jour = '2026-11-03'
   and not exists (select 1 from seance s where s.journee_id = j.id);

insert into journee (famille_id, jour) select f.id, '2026-11-04' from famille f
  on conflict (famille_id, jour) do nothing;
insert into seance
  (journee_id, rang, matiere, titre, reference, consigne, minutes, lecon,
   par_adulte, origine)
select j.id, v.rang, v.matiere, v.titre, '', v.consigne, v.minutes, v.lecon,
       null, 'trame'
  from journee j
  cross join (values
    (1, 'maths', 'Les tables de multiplication', 'Dix multiplications dictées, à l’ardoise. On efface entre chaque. On redit celles qui ont hésité.', 15, ''),
    (2, 'geographie', 'La chaîne de production d’un aliment', 'Lis la leçon, puis fais les exercices. Tes calculs sur ton brouillon, le résultat sur l’écran.', 30, 'g-p2-chaine'),
    (3, 'maison', 'Une carte', 'Dessiner le plan du quartier de mémoire, puis le comparer à une vraie carte. Chercher ce qui manque.', 45, '')
  ) as v (rang, matiere, titre, consigne, minutes, lecon)
 where j.famille_id = (select id from famille) and j.jour = '2026-11-04'
   and not exists (select 1 from seance s where s.journee_id = j.id);

insert into journee (famille_id, jour) select f.id, '2026-11-05' from famille f
  on conflict (famille_id, jour) do nothing;
insert into seance
  (journee_id, rang, matiere, titre, reference, consigne, minutes, lecon,
   par_adulte, origine)
select j.id, v.rang, v.matiere, v.titre, '', v.consigne, v.minutes, v.lecon,
       null, 'trame'
  from journee j
  cross join (values
    (1, 'maths', 'Les doubles et les moitiés', 'Le double de 45, la moitié de 68, le double de 250… Dix questions, à l’oral.', 15, ''),
    (2, 'maths', 'Additionner et soustraire des fractions', 'Lis la leçon, puis fais les exercices. Tes calculs sur ton brouillon, le résultat sur l’écran.', 25, 'm-p2-fractions-calcul'),
    (3, 'francais', 'Le futur', 'Lis la leçon, puis fais les exercices. Tes calculs sur ton brouillon, le résultat sur l’écran.', 25, 'f-p2-futur'),
    (4, 'francais', 'Dictée de phrases', 'Trois phrases. On souligne les verbes et on entoure les sujets avant de corriger.', 20, ''),
    (5, 'francais', 'Lecture silencieuse', 'Vingt minutes dans le livre en cours, puis raconter ce qui vient de se passer.', 30, ''),
    (6, 'francais', 'Raconter sa journée d’hier', 'Dix lignes au passé. Vérifier que les temps ne changent pas en cours de route.', 25, ''),
    (7, 'maison', 'Jeux de ballon', 'Passes, tirs, jonglages. Compter les réussites de suite, battre son propre score.', 30, '')
  ) as v (rang, matiere, titre, consigne, minutes, lecon)
 where j.famille_id = (select id from famille) and j.jour = '2026-11-05'
   and not exists (select 1 from seance s where s.journee_id = j.id);

insert into journee (famille_id, jour) select f.id, '2026-11-06' from famille f
  on conflict (famille_id, jour) do nothing;
insert into seance
  (journee_id, rang, matiere, titre, reference, consigne, minutes, lecon,
   par_adulte, origine)
select j.id, v.rang, v.matiere, v.titre, '', v.consigne, v.minutes, v.lecon,
       null, 'trame'
  from journee j
  cross join (values
    (1, 'maths', 'Les compléments à 100', 'Combien manque-t-il à 67 pour aller à 100 ? Dix questions. Puis les compléments à 1 000.', 15, ''),
    (2, 'maths', 'Reprendre la leçon de maths', 'Refaire les exercices de la dernière leçon de maths, sur le cahier cette fois. Comparer avec ce qui avait été trouvé.', 30, ''),
    (3, 'francais', 'Reprendre la leçon de français', 'Refaire les exercices de la dernière leçon de français, sur le cahier.', 25, ''),
    (4, 'francais', 'Copie soignée', 'Copier huit lignes d’un texte au choix, le plus soigneusement possible. On relit avant de rendre.', 20, ''),
    (5, 'francais', 'Lecture et questions', 'Un texte court, puis cinq questions : trois sur ce qui est écrit, deux sur ce qui se déduit.', 30, ''),
    (6, 'geographie', 'Les inégalités de niveau de vie', 'Lis la leçon, puis fais les exercices. Tes calculs sur ton brouillon, le résultat sur l’écran.', 35, 'g-p2-inegalites'),
    (7, 'maison', 'Vélo', 'Une sortie. Repérer le trajet sur un plan avant de partir, puis le raconter au retour.', 30, '')
  ) as v (rang, matiere, titre, consigne, minutes, lecon)
 where j.famille_id = (select id from famille) and j.jour = '2026-11-06'
   and not exists (select 1 from seance s where s.journee_id = j.id);

insert into journee (famille_id, jour) select f.id, '2026-11-09' from famille f
  on conflict (famille_id, jour) do nothing;
insert into seance
  (journee_id, rang, matiere, titre, reference, consigne, minutes, lecon,
   par_adulte, origine)
select j.id, v.rang, v.matiere, v.titre, '', v.consigne, v.minutes, v.lecon,
       null, 'trame'
  from journee j
  cross join (values
    (1, 'maths', 'Ajouter 9, 19, 29', 'On ajoute la dizaine ronde et on retire 1. Dix questions, en disant la procédure à voix haute.', 15, ''),
    (2, 'maths', 'Géométrie : tracer', 'Un programme de construction à suivre à la règle, à l’équerre et au compas. La précision compte.', 30, ''),
    (3, 'francais', 'Le passé composé', 'Lis la leçon, puis fais les exercices. Tes calculs sur ton brouillon, le résultat sur l’écran.', 30, 'f-p2-passe-compose'),
    (4, 'francais', 'Dictée préparée', 'Le texte a été lu la veille. On le dicte, puis on compare avec l’original.', 20, ''),
    (5, 'francais', 'Lecture d’un documentaire', 'Une double page documentaire. Relever la nature et la source du document avant de lire.', 30, ''),
    (6, 'sciences', 'Dissoudre, et la limite', 'Lis la leçon, puis fais les exercices. Tes calculs sur ton brouillon, le résultat sur l’écran.', 30, 's-p2-dissolution'),
    (7, 'maison', 'Parcours et équilibre', 'Un parcours à installer soi-même : sauter, grimper, tenir en équilibre, ramper.', 30, '')
  ) as v (rang, matiere, titre, consigne, minutes, lecon)
 where j.famille_id = (select id from famille) and j.jour = '2026-11-09'
   and not exists (select 1 from seance s where s.journee_id = j.id);

insert into journee (famille_id, jour) select f.id, '2026-11-10' from famille f
  on conflict (famille_id, jour) do nothing;
insert into seance
  (journee_id, rang, matiere, titre, reference, consigne, minutes, lecon,
   par_adulte, origine)
select j.id, v.rang, v.matiere, v.titre, '', v.consigne, v.minutes, v.lecon,
       null, 'trame'
  from journee j
  cross join (values
    (1, 'maths', 'Multiplier par 10, 100, 1 000', 'Dix questions rapides. Puis diviser par 10 : 320 ÷ 10, 4 500 ÷ 10.', 15, ''),
    (2, 'maths', 'Les dixièmes et les centièmes', 'Lis la leçon, puis fais les exercices. Tes calculs sur ton brouillon, le résultat sur l’écran.', 30, 'm-p2-fractions-decimales'),
    (3, 'francais', 'Vocabulaire', 'Dix mots : trouver un synonyme, un contraire, et un mot de la même famille pour chacun.', 25, ''),
    (4, 'francais', 'Les mots invariables', 'Apprendre dix mots invariables, puis les écrire sous la dictée.', 20, ''),
    (5, 'francais', 'Poésie', 'Lire un poème à voix haute, plusieurs fois. Repérer les rimes et les images. En apprendre quatre vers.', 30, ''),
    (6, 'anglais', 'Les couleurs et les objets de la classe', 'Lis la leçon, puis fais les exercices. Tes calculs sur ton brouillon, le résultat sur l’écran.', 25, 'a-p2-couleurs'),
    (7, 'maison', 'Marche et observation', 'Une marche d’une demi-heure. Rapporter trois choses observées, à noter ou à dessiner.', 30, '')
  ) as v (rang, matiere, titre, consigne, minutes, lecon)
 where j.famille_id = (select id from famille) and j.jour = '2026-11-10'
   and not exists (select 1 from seance s where s.journee_id = j.id);

insert into journee (famille_id, jour) select f.id, '2026-11-12' from famille f
  on conflict (famille_id, jour) do nothing;
insert into seance
  (journee_id, rang, matiere, titre, reference, consigne, minutes, lecon,
   par_adulte, origine)
select j.id, v.rang, v.matiere, v.titre, '', v.consigne, v.minutes, v.lecon,
       null, 'trame'
  from journee j
  cross join (values
    (1, 'maths', 'Multiplier par 4 et par 8', 'Par 4, c’est doubler deux fois. Par 8, trois fois. Dix questions en disant les étapes.', 15, ''),
    (2, 'maths', 'Le nombre du jour', 'Un nombre au tableau. Le décomposer de cinq façons, l’encadrer, dire son nombre de centaines, le doubler.', 30, ''),
    (3, 'francais', 'Les compléments : objet ou circonstanciel', 'Lis la leçon, puis fais les exercices. Tes calculs sur ton brouillon, le résultat sur l’écran.', 30, 'f-p2-complements'),
    (4, 'francais', 'Transformer des phrases', 'Mettre cinq phrases au pluriel, en respectant toute la chaîne d’accords. À l’écrit.', 20, ''),
    (5, 'francais', 'Lecture d’une bande dessinée', 'Une planche. Puis expliquer ce que les images racontent et que le texte ne dit pas.', 30, ''),
    (6, 'francais', 'Expliquer une règle', 'Réécrire avec tes mots une leçon de la semaine, pour quelqu’un qui ne l’a pas eue.', 25, ''),
    (7, 'maison', 'Jeux de raquette', 'Échanges contre un mur ou à deux. Compter les échanges tenus sans faute.', 30, '')
  ) as v (rang, matiere, titre, consigne, minutes, lecon)
 where j.famille_id = (select id from famille) and j.jour = '2026-11-12'
   and not exists (select 1 from seance s where s.journee_id = j.id);

insert into journee (famille_id, jour) select f.id, '2026-11-13' from famille f
  on conflict (famille_id, jour) do nothing;
insert into seance
  (journee_id, rang, matiere, titre, reference, consigne, minutes, lecon,
   par_adulte, origine)
select j.id, v.rang, v.matiere, v.titre, '', v.consigne, v.minutes, v.lecon,
       null, 'trame'
  from journee j
  cross join (values
    (1, 'maths', 'Multiplier par 5 et par 50', 'Par 5, c’est la moitié de par 10. Par 50, la moitié de par 100. Dix questions.', 15, ''),
    (2, 'maths', 'Opérations posées', 'Quatre additions, quatre soustractions, deux multiplications. Estimer avant, vérifier après.', 30, ''),
    (3, 'francais', 'Analyser des phrases', 'Cinq phrases : souligner le sujet, entourer le verbe, encadrer les compléments. Dire lesquels se déplacent.', 25, ''),
    (4, 'francais', 'Dictée à trous', 'Le texte est écrit, il manque les terminaisons des verbes. On les complète en justifiant.', 20, ''),
    (5, 'francais', 'Lecture de théâtre', 'Une scène, lue à deux voix. Les didascalies ne se disent pas : elles se jouent.', 30, ''),
    (6, 'francais', 'Écrire une lettre', 'Une lettre à quelqu’un de la famille. Formule d’appel, corps, formule de fin.', 25, ''),
    (7, 'maison', 'Danse et rythme', 'Suivre une pulsation, inventer une suite de mouvements de huit temps, la refaire à l’identique.', 30, '')
  ) as v (rang, matiere, titre, consigne, minutes, lecon)
 where j.famille_id = (select id from famille) and j.jour = '2026-11-13'
   and not exists (select 1 from seance s where s.journee_id = j.id);

insert into journee (famille_id, jour) select f.id, '2026-11-16' from famille f
  on conflict (famille_id, jour) do nothing;
insert into seance
  (journee_id, rang, matiere, titre, reference, consigne, minutes, lecon,
   par_adulte, origine)
select j.id, v.rang, v.matiere, v.titre, '', v.consigne, v.minutes, v.lecon,
       null, 'trame'
  from journee j
  cross join (values
    (1, 'maths', 'Les fractions d’une quantité', 'La moitié de 36, le tiers de 24, les trois quarts de 20. Dix questions à l’oral.', 15, ''),
    (2, 'maths', 'Poser une multiplication', 'Lis la leçon, puis fais les exercices. Tes calculs sur ton brouillon, le résultat sur l’écran.', 30, 'm-p2-multiplication'),
    (3, 'francais', 'Conjugaison', 'Trois verbes, aux quatre temps connus, à toutes les personnes. Sur le cahier, sans modèle.', 25, ''),
    (4, 'francais', 'Auto-dictée', 'Apprendre quatre lignes par cœur la veille, les écrire de mémoire aujourd’hui.', 20, ''),
    (5, 'francais', 'Lecture libre', 'Le livre que tu veux, sans compte à rendre. On te demande seulement si tu as aimé, et pourquoi.', 30, ''),
    (6, 'emc', 'La République et ses symboles', 'Lis la leçon, puis fais les exercices. Tes calculs sur ton brouillon, le résultat sur l’écran.', 30, 'e-p2-republique'),
    (7, 'maison', 'Jardinage ou bricolage', 'Planter, arroser, mesurer, réparer. Le travail des mains compte autant que le reste.', 30, '')
  ) as v (rang, matiere, titre, consigne, minutes, lecon)
 where j.famille_id = (select id from famille) and j.jour = '2026-11-16'
   and not exists (select 1 from seance s where s.journee_id = j.id);

insert into journee (famille_id, jour) select f.id, '2026-11-17' from famille f
  on conflict (famille_id, jour) do nothing;
insert into seance
  (journee_id, rang, matiere, titre, reference, consigne, minutes, lecon,
   par_adulte, origine)
select j.id, v.rang, v.matiere, v.titre, '', v.consigne, v.minutes, v.lecon,
       null, 'trame'
  from journee j
  cross join (values
    (1, 'maths', 'Les problèmes en une phrase', 'Cinq problèmes dictés, très courts. La réponse sur l’ardoise, sans écrire le calcul.', 15, ''),
    (2, 'maths', 'Reprendre la leçon de maths', 'Refaire les exercices de la dernière leçon de maths, sur le cahier cette fois. Comparer avec ce qui avait été trouvé.', 30, ''),
    (3, 'francais', 'Les mots qui se prononcent pareil', 'Lis la leçon, puis fais les exercices. Tes calculs sur ton brouillon, le résultat sur l’écran.', 25, 'f-p2-homophones'),
    (4, 'francais', 'Dictée de mots', 'Quinze mots de la liste en cours. On corrige ensemble, et on réécrit trois fois ceux qui ont hésité.', 20, ''),
    (5, 'francais', 'Lecture à voix haute', 'Une page préparée, lue à voix haute en respectant la ponctuation. On marque au crayon où respirer.', 30, ''),
    (6, 'sciences', 'Mesurer un déplacement', 'Lis la leçon, puis fais les exercices. Tes calculs sur ton brouillon, le résultat sur l’écran.', 30, 's-p2-mouvement'),
    (7, 'maison', 'Course et endurance', 'Courir sans s’arrêter, en augmentant un peu chaque semaine. On chronomètre, on ne compare à personne.', 30, '')
  ) as v (rang, matiere, titre, consigne, minutes, lecon)
 where j.famille_id = (select id from famille) and j.jour = '2026-11-17'
   and not exists (select 1 from seance s where s.journee_id = j.id);

insert into journee (famille_id, jour) select f.id, '2026-11-18' from famille f
  on conflict (famille_id, jour) do nothing;
insert into seance
  (journee_id, rang, matiere, titre, reference, consigne, minutes, lecon,
   par_adulte, origine)
select j.id, v.rang, v.matiere, v.titre, '', v.consigne, v.minutes, v.lecon,
       null, 'trame'
  from journee j
  cross join (values
    (1, 'maths', 'Encadrer et arrondir', 'Entre quels milliers se trouve 6 480 ? Quel est l’arrondi de 12,94 ? Dix questions.', 15, ''),
    (2, 'sciences', 'Comment marche un objet technique', 'Lis la leçon, puis fais les exercices. Tes calculs sur ton brouillon, le résultat sur l’écran.', 30, 's-p2-objets'),
    (3, 'maison', 'Un métier', 'Choisir un métier, chercher ce qu’il demande d’apprendre, et qui l’exerce autour de nous.', 45, '')
  ) as v (rang, matiere, titre, consigne, minutes, lecon)
 where j.famille_id = (select id from famille) and j.jour = '2026-11-18'
   and not exists (select 1 from seance s where s.journee_id = j.id);

insert into journee (famille_id, jour) select f.id, '2026-11-19' from famille f
  on conflict (famille_id, jour) do nothing;
insert into seance
  (journee_id, rang, matiere, titre, reference, consigne, minutes, lecon,
   par_adulte, origine)
select j.id, v.rang, v.matiere, v.titre, '', v.consigne, v.minutes, v.lecon,
       null, 'trame'
  from journee j
  cross join (values
    (1, 'maths', 'Les unités de mesure', 'Combien de grammes dans 2 kg 500 ? De centimètres dans 3 m 50 ? Dix questions.', 15, ''),
    (2, 'maths', 'Les multiples et les diviseurs', 'Lis la leçon, puis fais les exercices. Tes calculs sur ton brouillon, le résultat sur l’écran.', 25, 'm-p2-multiples'),
    (3, 'francais', 'Vocabulaire', 'Dix mots : trouver un synonyme, un contraire, et un mot de la même famille pour chacun.', 25, ''),
    (4, 'francais', 'Copie soignée', 'Copier huit lignes d’un texte au choix, le plus soigneusement possible. On relit avant de rendre.', 20, ''),
    (5, 'francais', 'Lecture et questions', 'Un texte court, puis cinq questions : trois sur ce qui est écrit, deux sur ce qui se déduit.', 30, ''),
    (6, 'histoire', 'François Ier et la Renaissance', 'Lis la leçon, puis fais les exercices. Tes calculs sur ton brouillon, le résultat sur l’écran.', 30, 'h-p2-renaissance'),
    (7, 'maison', 'Vélo', 'Une sortie. Repérer le trajet sur un plan avant de partir, puis le raconter au retour.', 30, '')
  ) as v (rang, matiere, titre, consigne, minutes, lecon)
 where j.famille_id = (select id from famille) and j.jour = '2026-11-19'
   and not exists (select 1 from seance s where s.journee_id = j.id);

insert into journee (famille_id, jour) select f.id, '2026-11-20' from famille f
  on conflict (famille_id, jour) do nothing;
insert into seance
  (journee_id, rang, matiere, titre, reference, consigne, minutes, lecon,
   par_adulte, origine)
select j.id, v.rang, v.matiere, v.titre, '', v.consigne, v.minutes, v.lecon,
       null, 'trame'
  from journee j
  cross join (values
    (1, 'maths', 'Les durées', 'De 8 h 45 à 12 h 30, combien de temps ? Cinq calculs de durée, à l’oral.', 15, ''),
    (2, 'maths', 'Le nombre du jour', 'Un nombre au tableau. Le décomposer de cinq façons, l’encadrer, dire son nombre de centaines, le doubler.', 30, ''),
    (3, 'francais', 'Comprendre un texte : l’explicite et l’implicite', 'Lis la leçon, puis fais les exercices. Tes calculs sur ton brouillon, le résultat sur l’écran.', 25, 'f-p2-comprendre'),
    (4, 'francais', 'Dictée préparée', 'Le texte a été lu la veille. On le dicte, puis on compare avec l’original.', 20, ''),
    (5, 'francais', 'Lecture d’un documentaire', 'Une double page documentaire. Relever la nature et la source du document avant de lire.', 30, ''),
    (6, 'arts', 'Les couleurs — on reprend', 'On relit le cours, puis on refait les exercices. Tes calculs sur ton brouillon, le résultat sur l’écran.', 25, 'ar-p2-couleurs'),
    (7, 'maison', 'Parcours et équilibre', 'Un parcours à installer soi-même : sauter, grimper, tenir en équilibre, ramper.', 30, '')
  ) as v (rang, matiere, titre, consigne, minutes, lecon)
 where j.famille_id = (select id from famille) and j.jour = '2026-11-20'
   and not exists (select 1 from seance s where s.journee_id = j.id);

insert into journee (famille_id, jour) select f.id, '2026-11-23' from famille f
  on conflict (famille_id, jour) do nothing;
insert into seance
  (journee_id, rang, matiere, titre, reference, consigne, minutes, lecon,
   par_adulte, origine)
select j.id, v.rang, v.matiere, v.titre, '', v.consigne, v.minutes, v.lecon,
       null, 'trame'
  from journee j
  cross join (values
    (1, 'maths', 'Les tables de multiplication', 'Dix multiplications dictées, à l’ardoise. On efface entre chaque. On redit celles qui ont hésité.', 15, ''),
    (2, 'maths', 'Opérations posées', 'Quatre additions, quatre soustractions, deux multiplications. Estimer avant, vérifier après.', 30, ''),
    (3, 'francais', 'Analyser des phrases', 'Cinq phrases : souligner le sujet, entourer le verbe, encadrer les compléments. Dire lesquels se déplacent.', 25, ''),
    (4, 'francais', 'Les mots invariables', 'Apprendre dix mots invariables, puis les écrire sous la dictée.', 20, ''),
    (5, 'francais', 'Poésie', 'Lire un poème à voix haute, plusieurs fois. Repérer les rimes et les images. En apprendre quatre vers.', 30, ''),
    (6, 'francais', 'Donner son avis', 'Ce que je pense, pourquoi, un exemple. Huit lignes. Les trois morceaux doivent y être.', 25, ''),
    (7, 'maison', 'Marche et observation', 'Une marche d’une demi-heure. Rapporter trois choses observées, à noter ou à dessiner.', 30, '')
  ) as v (rang, matiere, titre, consigne, minutes, lecon)
 where j.famille_id = (select id from famille) and j.jour = '2026-11-23'
   and not exists (select 1 from seance s where s.journee_id = j.id);

insert into journee (famille_id, jour) select f.id, '2026-11-24' from famille f
  on conflict (famille_id, jour) do nothing;
insert into seance
  (journee_id, rang, matiere, titre, reference, consigne, minutes, lecon,
   par_adulte, origine)
select j.id, v.rang, v.matiere, v.titre, '', v.consigne, v.minutes, v.lecon,
       null, 'trame'
  from journee j
  cross join (values
    (1, 'maths', 'Les doubles et les moitiés', 'Le double de 45, la moitié de 68, le double de 250… Dix questions, à l’oral.', 15, ''),
    (2, 'maths', 'Les longueurs, du millimètre au kilomètre', 'Lis la leçon, puis fais les exercices. Tes calculs sur ton brouillon, le résultat sur l’écran.', 25, 'm-p2-longueurs'),
    (3, 'francais', 'Écrire un texte qui se tient', 'Lis la leçon, puis fais les exercices. Tes calculs sur ton brouillon, le résultat sur l’écran.', 30, 'f-p2-ecrire'),
    (4, 'francais', 'Transformer des phrases', 'Mettre cinq phrases au pluriel, en respectant toute la chaîne d’accords. À l’écrit.', 20, ''),
    (5, 'francais', 'Lecture d’une bande dessinée', 'Une planche. Puis expliquer ce que les images racontent et que le texte ne dit pas.', 30, ''),
    (6, 'francais', 'Expliquer une règle', 'Réécrire avec tes mots une leçon de la semaine, pour quelqu’un qui ne l’a pas eue.', 25, ''),
    (7, 'maison', 'Jeux de raquette', 'Échanges contre un mur ou à deux. Compter les échanges tenus sans faute.', 30, '')
  ) as v (rang, matiere, titre, consigne, minutes, lecon)
 where j.famille_id = (select id from famille) and j.jour = '2026-11-24'
   and not exists (select 1 from seance s where s.journee_id = j.id);

insert into journee (famille_id, jour) select f.id, '2026-11-25' from famille f
  on conflict (famille_id, jour) do nothing;
insert into seance
  (journee_id, rang, matiere, titre, reference, consigne, minutes, lecon,
   par_adulte, origine)
select j.id, v.rang, v.matiere, v.titre, '', v.consigne, v.minutes, v.lecon,
       null, 'trame'
  from journee j
  cross join (values
    (1, 'maths', 'Les compléments à 100', 'Combien manque-t-il à 67 pour aller à 100 ? Dix questions. Puis les compléments à 1 000.', 15, ''),
    (2, 'anglais', 'La famille', 'Lis la leçon, puis fais les exercices. Tes calculs sur ton brouillon, le résultat sur l’écran.', 25, 'a-p2-famille'),
    (3, 'maison', 'Musique', 'Écouter un morceau en entier, sans rien faire d’autre. Repérer la pulsation, les instruments, ce qui revient.', 45, '')
  ) as v (rang, matiere, titre, consigne, minutes, lecon)
 where j.famille_id = (select id from famille) and j.jour = '2026-11-25'
   and not exists (select 1 from seance s where s.journee_id = j.id);

insert into journee (famille_id, jour) select f.id, '2026-11-26' from famille f
  on conflict (famille_id, jour) do nothing;
insert into seance
  (journee_id, rang, matiere, titre, reference, consigne, minutes, lecon,
   par_adulte, origine)
select j.id, v.rang, v.matiere, v.titre, '', v.consigne, v.minutes, v.lecon,
       null, 'trame'
  from journee j
  cross join (values
    (1, 'maths', 'Ajouter 9, 19, 29', 'On ajoute la dizaine ronde et on retire 1. Dix questions, en disant la procédure à voix haute.', 15, ''),
    (2, 'maths', 'Géométrie : tracer', 'Un programme de construction à suivre à la règle, à l’équerre et au compas. La précision compte.', 30, ''),
    (3, 'francais', 'Les homophones', 'Un texte à trous : a/à, est/et, son/sont, ont/on. Justifier chaque choix par le test de remplacement.', 25, ''),
    (4, 'francais', 'Auto-dictée', 'Apprendre quatre lignes par cœur la veille, les écrire de mémoire aujourd’hui.', 20, ''),
    (5, 'francais', 'Lecture libre', 'Le livre que tu veux, sans compte à rendre. On te demande seulement si tu as aimé, et pourquoi.', 30, ''),
    (6, 'sciences', 'Dissoudre, et la limite — on reprend', 'On relit le cours, puis on refait les exercices. Tes calculs sur ton brouillon, le résultat sur l’écran.', 30, 's-p2-dissolution'),
    (7, 'maison', 'Jardinage ou bricolage', 'Planter, arroser, mesurer, réparer. Le travail des mains compte autant que le reste.', 30, '')
  ) as v (rang, matiere, titre, consigne, minutes, lecon)
 where j.famille_id = (select id from famille) and j.jour = '2026-11-26'
   and not exists (select 1 from seance s where s.journee_id = j.id);

insert into journee (famille_id, jour) select f.id, '2026-11-27' from famille f
  on conflict (famille_id, jour) do nothing;
insert into seance
  (journee_id, rang, matiere, titre, reference, consigne, minutes, lecon,
   par_adulte, origine)
select j.id, v.rang, v.matiere, v.titre, '', v.consigne, v.minutes, v.lecon,
       null, 'trame'
  from journee j
  cross join (values
    (1, 'maths', 'Multiplier par 10, 100, 1 000', 'Dix questions rapides. Puis diviser par 10 : 320 ÷ 10, 4 500 ÷ 10.', 15, ''),
    (2, 'maths', 'Mesurer pour de vrai', 'Mesurer des objets de la maison, noter en deux unités différentes, comparer aux estimations faites avant.', 30, ''),
    (3, 'francais', 'Vocabulaire', 'Dix mots : trouver un synonyme, un contraire, et un mot de la même famille pour chacun.', 25, ''),
    (4, 'francais', 'Dictée de mots', 'Quinze mots de la liste en cours. On corrige ensemble, et on réécrit trois fois ceux qui ont hésité.', 20, ''),
    (5, 'francais', 'Lecture à voix haute', 'Une page préparée, lue à voix haute en respectant la ponctuation. On marque au crayon où respirer.', 30, ''),
    (6, 'francais', 'Écrire la suite', 'Lire le début d’un récit, puis en écrire la suite : dix lignes. Brouillon d’abord.', 25, ''),
    (7, 'maison', 'Course et endurance', 'Courir sans s’arrêter, en augmentant un peu chaque semaine. On chronomètre, on ne compare à personne.', 30, '')
  ) as v (rang, matiere, titre, consigne, minutes, lecon)
 where j.famille_id = (select id from famille) and j.jour = '2026-11-27'
   and not exists (select 1 from seance s where s.journee_id = j.id);

insert into journee (famille_id, jour) select f.id, '2026-11-30' from famille f
  on conflict (famille_id, jour) do nothing;
insert into seance
  (journee_id, rang, matiere, titre, reference, consigne, minutes, lecon,
   par_adulte, origine)
select j.id, v.rang, v.matiere, v.titre, '', v.consigne, v.minutes, v.lecon,
       null, 'trame'
  from journee j
  cross join (values
    (1, 'maths', 'Multiplier par 4 et par 8', 'Par 4, c’est doubler deux fois. Par 8, trois fois. Dix questions en disant les étapes.', 15, ''),
    (2, 'maths', 'Les fractions plus grandes que 1 — on reprend', 'On relit le cours, puis on refait les exercices. Tes calculs sur ton brouillon, le résultat sur l’écran.', 30, 'm-p2-fractions-sup'),
    (3, 'francais', 'L’imparfait — on reprend', 'On relit le cours, puis on refait les exercices. Tes calculs sur ton brouillon, le résultat sur l’écran.', 25, 'f-p2-imparfait'),
    (4, 'francais', 'Dictée de phrases', 'Trois phrases. On souligne les verbes et on entoure les sujets avant de corriger.', 20, ''),
    (5, 'francais', 'Lecture silencieuse', 'Vingt minutes dans le livre en cours, puis raconter ce qui vient de se passer.', 30, ''),
    (6, 'francais', 'Raconter sa journée d’hier', 'Dix lignes au passé. Vérifier que les temps ne changent pas en cours de route.', 25, ''),
    (7, 'maison', 'Jeux de ballon', 'Passes, tirs, jonglages. Compter les réussites de suite, battre son propre score.', 30, '')
  ) as v (rang, matiere, titre, consigne, minutes, lecon)
 where j.famille_id = (select id from famille) and j.jour = '2026-11-30'
   and not exists (select 1 from seance s where s.journee_id = j.id);

insert into journee (famille_id, jour) select f.id, '2026-12-01' from famille f
  on conflict (famille_id, jour) do nothing;
insert into seance
  (journee_id, rang, matiere, titre, reference, consigne, minutes, lecon,
   par_adulte, origine)
select j.id, v.rang, v.matiere, v.titre, '', v.consigne, v.minutes, v.lecon,
       null, 'trame'
  from journee j
  cross join (values
    (1, 'maths', 'Multiplier par 5 et par 50', 'Par 5, c’est la moitié de par 10. Par 50, la moitié de par 100. Dix questions.', 15, ''),
    (2, 'maths', 'Opérations posées', 'Quatre additions, quatre soustractions, deux multiplications. Estimer avant, vérifier après.', 30, ''),
    (3, 'francais', 'Le futur — on reprend', 'On relit le cours, puis on refait les exercices. Tes calculs sur ton brouillon, le résultat sur l’écran.', 25, 'f-p2-futur'),
    (4, 'francais', 'Copie soignée', 'Copier huit lignes d’un texte au choix, le plus soigneusement possible. On relit avant de rendre.', 20, ''),
    (5, 'francais', 'Lecture et questions', 'Un texte court, puis cinq questions : trois sur ce qui est écrit, deux sur ce qui se déduit.', 30, ''),
    (6, 'geographie', 'La chaîne de production d’un aliment — on reprend', 'On relit le cours, puis on refait les exercices. Tes calculs sur ton brouillon, le résultat sur l’écran.', 30, 'g-p2-chaine'),
    (7, 'maison', 'Vélo', 'Une sortie. Repérer le trajet sur un plan avant de partir, puis le raconter au retour.', 30, '')
  ) as v (rang, matiere, titre, consigne, minutes, lecon)
 where j.famille_id = (select id from famille) and j.jour = '2026-12-01'
   and not exists (select 1 from seance s where s.journee_id = j.id);

insert into journee (famille_id, jour) select f.id, '2026-12-02' from famille f
  on conflict (famille_id, jour) do nothing;
insert into seance
  (journee_id, rang, matiere, titre, reference, consigne, minutes, lecon,
   par_adulte, origine)
select j.id, v.rang, v.matiere, v.titre, '', v.consigne, v.minutes, v.lecon,
       null, 'trame'
  from journee j
  cross join (values
    (1, 'maths', 'Les fractions d’une quantité', 'La moitié de 36, le tiers de 24, les trois quarts de 20. Dix questions à l’oral.', 15, ''),
    (2, 'histoire', 'L’Église, l’art roman et l’art gothique — on reprend', 'On relit le cours, puis on refait les exercices. Tes calculs sur ton brouillon, le résultat sur l’écran.', 30, 'h-p2-eglise'),
    (3, 'maison', 'Dessin d’observation', 'Dessiner un objet réel en le regardant, pas de mémoire. Vingt minutes sur le même objet.', 45, '')
  ) as v (rang, matiere, titre, consigne, minutes, lecon)
 where j.famille_id = (select id from famille) and j.jour = '2026-12-02'
   and not exists (select 1 from seance s where s.journee_id = j.id);

insert into journee (famille_id, jour) select f.id, '2026-12-03' from famille f
  on conflict (famille_id, jour) do nothing;
insert into seance
  (journee_id, rang, matiere, titre, reference, consigne, minutes, lecon,
   par_adulte, origine)
select j.id, v.rang, v.matiere, v.titre, '', v.consigne, v.minutes, v.lecon,
       null, 'trame'
  from journee j
  cross join (values
    (1, 'maths', 'Les problèmes en une phrase', 'Cinq problèmes dictés, très courts. La réponse sur l’ardoise, sans écrire le calcul.', 15, ''),
    (2, 'maths', 'Additionner et soustraire des fractions — on reprend', 'On relit le cours, puis on refait les exercices. Tes calculs sur ton brouillon, le résultat sur l’écran.', 25, 'm-p2-fractions-calcul'),
    (3, 'francais', 'Reprendre la leçon de français', 'Refaire les exercices de la dernière leçon de français, sur le cahier.', 25, ''),
    (4, 'francais', 'Les mots invariables', 'Apprendre dix mots invariables, puis les écrire sous la dictée.', 20, ''),
    (5, 'francais', 'Poésie', 'Lire un poème à voix haute, plusieurs fois. Repérer les rimes et les images. En apprendre quatre vers.', 30, ''),
    (6, 'sciences', 'Mesurer un déplacement — on reprend', 'On relit le cours, puis on refait les exercices. Tes calculs sur ton brouillon, le résultat sur l’écran.', 30, 's-p2-mouvement'),
    (7, 'maison', 'Marche et observation', 'Une marche d’une demi-heure. Rapporter trois choses observées, à noter ou à dessiner.', 30, '')
  ) as v (rang, matiere, titre, consigne, minutes, lecon)
 where j.famille_id = (select id from famille) and j.jour = '2026-12-03'
   and not exists (select 1 from seance s where s.journee_id = j.id);

insert into journee (famille_id, jour) select f.id, '2026-12-04' from famille f
  on conflict (famille_id, jour) do nothing;
insert into seance
  (journee_id, rang, matiere, titre, reference, consigne, minutes, lecon,
   par_adulte, origine)
select j.id, v.rang, v.matiere, v.titre, '', v.consigne, v.minutes, v.lecon,
       null, 'trame'
  from journee j
  cross join (values
    (1, 'maths', 'Encadrer et arrondir', 'Entre quels milliers se trouve 6 480 ? Quel est l’arrondi de 12,94 ? Dix questions.', 15, ''),
    (2, 'maths', 'Géométrie : tracer', 'Un programme de construction à suivre à la règle, à l’équerre et au compas. La précision compte.', 30, ''),
    (3, 'francais', 'Le passé composé — on reprend', 'On relit le cours, puis on refait les exercices. Tes calculs sur ton brouillon, le résultat sur l’écran.', 30, 'f-p2-passe-compose'),
    (4, 'francais', 'Transformer des phrases', 'Mettre cinq phrases au pluriel, en respectant toute la chaîne d’accords. À l’écrit.', 20, ''),
    (5, 'francais', 'Lecture d’une bande dessinée', 'Une planche. Puis expliquer ce que les images racontent et que le texte ne dit pas.', 30, ''),
    (6, 'anglais', 'Les couleurs et les objets de la classe — on reprend', 'On relit le cours, puis on refait les exercices. Tes calculs sur ton brouillon, le résultat sur l’écran.', 25, 'a-p2-couleurs'),
    (7, 'maison', 'Jeux de raquette', 'Échanges contre un mur ou à deux. Compter les échanges tenus sans faute.', 30, '')
  ) as v (rang, matiere, titre, consigne, minutes, lecon)
 where j.famille_id = (select id from famille) and j.jour = '2026-12-04'
   and not exists (select 1 from seance s where s.journee_id = j.id);

insert into journee (famille_id, jour) select f.id, '2026-12-07' from famille f
  on conflict (famille_id, jour) do nothing;
insert into seance
  (journee_id, rang, matiere, titre, reference, consigne, minutes, lecon,
   par_adulte, origine)
select j.id, v.rang, v.matiere, v.titre, '', v.consigne, v.minutes, v.lecon,
       null, 'trame'
  from journee j
  cross join (values
    (1, 'maths', 'Les unités de mesure', 'Combien de grammes dans 2 kg 500 ? De centimètres dans 3 m 50 ? Dix questions.', 15, ''),
    (2, 'maths', 'Les dixièmes et les centièmes — on reprend', 'On relit le cours, puis on refait les exercices. Tes calculs sur ton brouillon, le résultat sur l’écran.', 30, 'm-p2-fractions-decimales'),
    (3, 'francais', 'Vocabulaire', 'Dix mots : trouver un synonyme, un contraire, et un mot de la même famille pour chacun.', 25, ''),
    (4, 'francais', 'Dictée à trous', 'Le texte est écrit, il manque les terminaisons des verbes. On les complète en justifiant.', 20, ''),
    (5, 'francais', 'Lecture de théâtre', 'Une scène, lue à deux voix. Les didascalies ne se disent pas : elles se jouent.', 30, ''),
    (6, 'francais', 'Écrire une lettre', 'Une lettre à quelqu’un de la famille. Formule d’appel, corps, formule de fin.', 25, ''),
    (7, 'maison', 'Danse et rythme', 'Suivre une pulsation, inventer une suite de mouvements de huit temps, la refaire à l’identique.', 30, '')
  ) as v (rang, matiere, titre, consigne, minutes, lecon)
 where j.famille_id = (select id from famille) and j.jour = '2026-12-07'
   and not exists (select 1 from seance s where s.journee_id = j.id);

insert into journee (famille_id, jour) select f.id, '2026-12-08' from famille f
  on conflict (famille_id, jour) do nothing;
insert into seance
  (journee_id, rang, matiere, titre, reference, consigne, minutes, lecon,
   par_adulte, origine)
select j.id, v.rang, v.matiere, v.titre, '', v.consigne, v.minutes, v.lecon,
       null, 'trame'
  from journee j
  cross join (values
    (1, 'maths', 'Les durées', 'De 8 h 45 à 12 h 30, combien de temps ? Cinq calculs de durée, à l’oral.', 15, ''),
    (2, 'maths', 'Le nombre du jour', 'Un nombre au tableau. Le décomposer de cinq façons, l’encadrer, dire son nombre de centaines, le doubler.', 30, ''),
    (3, 'francais', 'Les compléments : objet ou circonstanciel — on reprend', 'On relit le cours, puis on refait les exercices. Tes calculs sur ton brouillon, le résultat sur l’écran.', 30, 'f-p2-complements'),
    (4, 'francais', 'Auto-dictée', 'Apprendre quatre lignes par cœur la veille, les écrire de mémoire aujourd’hui.', 20, ''),
    (5, 'francais', 'Lecture libre', 'Le livre que tu veux, sans compte à rendre. On te demande seulement si tu as aimé, et pourquoi.', 30, ''),
    (6, 'francais', 'Inventer un problème', 'Écrire un problème de mathématiques à deux étapes, avec sa solution sur une autre feuille.', 25, ''),
    (7, 'maison', 'Jardinage ou bricolage', 'Planter, arroser, mesurer, réparer. Le travail des mains compte autant que le reste.', 30, '')
  ) as v (rang, matiere, titre, consigne, minutes, lecon)
 where j.famille_id = (select id from famille) and j.jour = '2026-12-08'
   and not exists (select 1 from seance s where s.journee_id = j.id);

insert into journee (famille_id, jour) select f.id, '2026-12-09' from famille f
  on conflict (famille_id, jour) do nothing;
insert into seance
  (journee_id, rang, matiere, titre, reference, consigne, minutes, lecon,
   par_adulte, origine)
select j.id, v.rang, v.matiere, v.titre, '', v.consigne, v.minutes, v.lecon,
       null, 'trame'
  from journee j
  cross join (values
    (1, 'maths', 'Les tables de multiplication', 'Dix multiplications dictées, à l’ardoise. On efface entre chaque. On redit celles qui ont hésité.', 15, ''),
    (2, 'sciences', 'Comment marche un objet technique — on reprend', 'On relit le cours, puis on refait les exercices. Tes calculs sur ton brouillon, le résultat sur l’écran.', 30, 's-p2-objets'),
    (3, 'maison', 'Une expérience', 'Mélanger, dissoudre, filtrer, peser. Écrire ce qu’on croit qu’il va se passer AVANT de le faire, puis comparer.', 45, '')
  ) as v (rang, matiere, titre, consigne, minutes, lecon)
 where j.famille_id = (select id from famille) and j.jour = '2026-12-09'
   and not exists (select 1 from seance s where s.journee_id = j.id);

insert into journee (famille_id, jour) select f.id, '2026-12-10' from famille f
  on conflict (famille_id, jour) do nothing;
insert into seance
  (journee_id, rang, matiere, titre, reference, consigne, minutes, lecon,
   par_adulte, origine)
select j.id, v.rang, v.matiere, v.titre, '', v.consigne, v.minutes, v.lecon,
       null, 'trame'
  from journee j
  cross join (values
    (1, 'maths', 'Les doubles et les moitiés', 'Le double de 45, la moitié de 68, le double de 250… Dix questions, à l’oral.', 15, ''),
    (2, 'maths', 'Poser une multiplication — on reprend', 'On relit le cours, puis on refait les exercices. Tes calculs sur ton brouillon, le résultat sur l’écran.', 30, 'm-p2-multiplication'),
    (3, 'francais', 'Les mots qui se prononcent pareil — on reprend', 'On relit le cours, puis on refait les exercices. Tes calculs sur ton brouillon, le résultat sur l’écran.', 25, 'f-p2-homophones'),
    (4, 'francais', 'Dictée de phrases', 'Trois phrases. On souligne les verbes et on entoure les sujets avant de corriger.', 20, ''),
    (5, 'francais', 'Lecture silencieuse', 'Vingt minutes dans le livre en cours, puis raconter ce qui vient de se passer.', 30, ''),
    (6, 'histoire', 'François Ier et la Renaissance — on reprend', 'On relit le cours, puis on refait les exercices. Tes calculs sur ton brouillon, le résultat sur l’écran.', 30, 'h-p2-renaissance'),
    (7, 'maison', 'Jeux de ballon', 'Passes, tirs, jonglages. Compter les réussites de suite, battre son propre score.', 30, '')
  ) as v (rang, matiere, titre, consigne, minutes, lecon)
 where j.famille_id = (select id from famille) and j.jour = '2026-12-10'
   and not exists (select 1 from seance s where s.journee_id = j.id);

insert into journee (famille_id, jour) select f.id, '2026-12-11' from famille f
  on conflict (famille_id, jour) do nothing;
insert into seance
  (journee_id, rang, matiere, titre, reference, consigne, minutes, lecon,
   par_adulte, origine)
select j.id, v.rang, v.matiere, v.titre, '', v.consigne, v.minutes, v.lecon,
       null, 'trame'
  from journee j
  cross join (values
    (1, 'maths', 'Les compléments à 100', 'Combien manque-t-il à 67 pour aller à 100 ? Dix questions. Puis les compléments à 1 000.', 15, ''),
    (2, 'maths', 'Reprendre la leçon de maths', 'Refaire les exercices de la dernière leçon de maths, sur le cahier cette fois. Comparer avec ce qui avait été trouvé.', 30, ''),
    (3, 'francais', 'Reprendre la leçon de français', 'Refaire les exercices de la dernière leçon de français, sur le cahier.', 25, ''),
    (4, 'francais', 'Copie soignée', 'Copier huit lignes d’un texte au choix, le plus soigneusement possible. On relit avant de rendre.', 20, ''),
    (5, 'francais', 'Lecture et questions', 'Un texte court, puis cinq questions : trois sur ce qui est écrit, deux sur ce qui se déduit.', 30, ''),
    (6, 'geographie', 'Les inégalités de niveau de vie — on reprend', 'On relit le cours, puis on refait les exercices. Tes calculs sur ton brouillon, le résultat sur l’écran.', 35, 'g-p2-inegalites'),
    (7, 'maison', 'Vélo', 'Une sortie. Repérer le trajet sur un plan avant de partir, puis le raconter au retour.', 30, '')
  ) as v (rang, matiere, titre, consigne, minutes, lecon)
 where j.famille_id = (select id from famille) and j.jour = '2026-12-11'
   and not exists (select 1 from seance s where s.journee_id = j.id);

insert into journee (famille_id, jour) select f.id, '2026-12-14' from famille f
  on conflict (famille_id, jour) do nothing;
insert into seance
  (journee_id, rang, matiere, titre, reference, consigne, minutes, lecon,
   par_adulte, origine)
select j.id, v.rang, v.matiere, v.titre, '', v.consigne, v.minutes, v.lecon,
       null, 'trame'
  from journee j
  cross join (values
    (1, 'maths', 'Ajouter 9, 19, 29', 'On ajoute la dizaine ronde et on retire 1. Dix questions, en disant la procédure à voix haute.', 15, ''),
    (2, 'maths', 'Les multiples et les diviseurs — on reprend', 'On relit le cours, puis on refait les exercices. Tes calculs sur ton brouillon, le résultat sur l’écran.', 25, 'm-p2-multiples'),
    (3, 'francais', 'Comprendre un texte : l’explicite et l’implicite — on reprend', 'On relit le cours, puis on refait les exercices. Tes calculs sur ton brouillon, le résultat sur l’écran.', 25, 'f-p2-comprendre'),
    (4, 'francais', 'Dictée préparée', 'Le texte a été lu la veille. On le dicte, puis on compare avec l’original.', 20, ''),
    (5, 'francais', 'Lecture d’un documentaire', 'Une double page documentaire. Relever la nature et la source du document avant de lire.', 30, ''),
    (6, 'francais', 'Décrire un lieu', 'Dix lignes sur un endroit que tu connais. Au moins trois adjectifs qui servent vraiment.', 25, ''),
    (7, 'maison', 'Parcours et équilibre', 'Un parcours à installer soi-même : sauter, grimper, tenir en équilibre, ramper.', 30, '')
  ) as v (rang, matiere, titre, consigne, minutes, lecon)
 where j.famille_id = (select id from famille) and j.jour = '2026-12-14'
   and not exists (select 1 from seance s where s.journee_id = j.id);

insert into journee (famille_id, jour) select f.id, '2026-12-15' from famille f
  on conflict (famille_id, jour) do nothing;
insert into seance
  (journee_id, rang, matiere, titre, reference, consigne, minutes, lecon,
   par_adulte, origine)
select j.id, v.rang, v.matiere, v.titre, '', v.consigne, v.minutes, v.lecon,
       null, 'trame'
  from journee j
  cross join (values
    (1, 'maths', 'Multiplier par 10, 100, 1 000', 'Dix questions rapides. Puis diviser par 10 : 320 ÷ 10, 4 500 ÷ 10.', 15, ''),
    (2, 'maths', 'Mesurer pour de vrai', 'Mesurer des objets de la maison, noter en deux unités différentes, comparer aux estimations faites avant.', 30, ''),
    (3, 'francais', 'Vocabulaire', 'Dix mots : trouver un synonyme, un contraire, et un mot de la même famille pour chacun.', 25, ''),
    (4, 'francais', 'Les mots invariables', 'Apprendre dix mots invariables, puis les écrire sous la dictée.', 20, ''),
    (5, 'francais', 'Poésie', 'Lire un poème à voix haute, plusieurs fois. Repérer les rimes et les images. En apprendre quatre vers.', 30, ''),
    (6, 'anglais', 'La famille — on reprend', 'On relit le cours, puis on refait les exercices. Tes calculs sur ton brouillon, le résultat sur l’écran.', 25, 'a-p2-famille'),
    (7, 'maison', 'Marche et observation', 'Une marche d’une demi-heure. Rapporter trois choses observées, à noter ou à dessiner.', 30, '')
  ) as v (rang, matiere, titre, consigne, minutes, lecon)
 where j.famille_id = (select id from famille) and j.jour = '2026-12-15'
   and not exists (select 1 from seance s where s.journee_id = j.id);

insert into journee (famille_id, jour) select f.id, '2026-12-16' from famille f
  on conflict (famille_id, jour) do nothing;
insert into seance
  (journee_id, rang, matiere, titre, reference, consigne, minutes, lecon,
   par_adulte, origine)
select j.id, v.rang, v.matiere, v.titre, '', v.consigne, v.minutes, v.lecon,
       null, 'trame'
  from journee j
  cross join (values
    (1, 'maths', 'Multiplier par 4 et par 8', 'Par 4, c’est doubler deux fois. Par 8, trois fois. Dix questions en disant les étapes.', 15, ''),
    (2, 'francais', 'Lecture à voix haute', 'Une page préparée, lue à voix haute en respectant la ponctuation. On marque au crayon où respirer.', 30, ''),
    (3, 'maison', 'La boîte à pourquoi', 'Prendre une question que tu as posée cette semaine, chercher la réponse ensemble, et s’arrêter quand on ne sait plus.', 45, '')
  ) as v (rang, matiere, titre, consigne, minutes, lecon)
 where j.famille_id = (select id from famille) and j.jour = '2026-12-16'
   and not exists (select 1 from seance s where s.journee_id = j.id);

insert into journee (famille_id, jour) select f.id, '2026-12-17' from famille f
  on conflict (famille_id, jour) do nothing;
insert into seance
  (journee_id, rang, matiere, titre, reference, consigne, minutes, lecon,
   par_adulte, origine)
select j.id, v.rang, v.matiere, v.titre, '', v.consigne, v.minutes, v.lecon,
       null, 'trame'
  from journee j
  cross join (values
    (1, 'maths', 'Multiplier par 5 et par 50', 'Par 5, c’est la moitié de par 10. Par 50, la moitié de par 100. Dix questions.', 15, ''),
    (2, 'maths', 'Les longueurs, du millimètre au kilomètre — on reprend', 'On relit le cours, puis on refait les exercices. Tes calculs sur ton brouillon, le résultat sur l’écran.', 25, 'm-p2-longueurs'),
    (3, 'francais', 'Écrire un texte qui se tient — on reprend', 'On relit le cours, puis on refait les exercices. Tes calculs sur ton brouillon, le résultat sur l’écran.', 30, 'f-p2-ecrire'),
    (4, 'francais', 'Dictée à trous', 'Le texte est écrit, il manque les terminaisons des verbes. On les complète en justifiant.', 20, ''),
    (5, 'francais', 'Lecture de théâtre', 'Une scène, lue à deux voix. Les didascalies ne se disent pas : elles se jouent.', 30, ''),
    (6, 'francais', 'Écrire une lettre', 'Une lettre à quelqu’un de la famille. Formule d’appel, corps, formule de fin.', 25, ''),
    (7, 'maison', 'Danse et rythme', 'Suivre une pulsation, inventer une suite de mouvements de huit temps, la refaire à l’identique.', 30, '')
  ) as v (rang, matiere, titre, consigne, minutes, lecon)
 where j.famille_id = (select id from famille) and j.jour = '2026-12-17'
   and not exists (select 1 from seance s where s.journee_id = j.id);

insert into journee (famille_id, jour) select f.id, '2026-12-18' from famille f
  on conflict (famille_id, jour) do nothing;
insert into seance
  (journee_id, rang, matiere, titre, reference, consigne, minutes, lecon,
   par_adulte, origine)
select j.id, v.rang, v.matiere, v.titre, '', v.consigne, v.minutes, v.lecon,
       null, 'trame'
  from journee j
  cross join (values
    (1, 'maths', 'Les fractions d’une quantité', 'La moitié de 36, le tiers de 24, les trois quarts de 20. Dix questions à l’oral.', 15, ''),
    (2, 'maths', 'Problèmes du jour', 'Trois problèmes sur le cahier. Pour chacun : ce qu’on cherche, ce qu’on sait, le calcul, la phrase de réponse.', 30, ''),
    (3, 'francais', 'Conjugaison', 'Trois verbes, aux quatre temps connus, à toutes les personnes. Sur le cahier, sans modèle.', 25, ''),
    (4, 'francais', 'Auto-dictée', 'Apprendre quatre lignes par cœur la veille, les écrire de mémoire aujourd’hui.', 20, ''),
    (5, 'francais', 'Lecture libre', 'Le livre que tu veux, sans compte à rendre. On te demande seulement si tu as aimé, et pourquoi.', 30, ''),
    (6, 'emc', 'La République et ses symboles — on reprend', 'On relit le cours, puis on refait les exercices. Tes calculs sur ton brouillon, le résultat sur l’écran.', 30, 'e-p2-republique'),
    (7, 'maison', 'Jardinage ou bricolage', 'Planter, arroser, mesurer, réparer. Le travail des mains compte autant que le reste.', 30, '')
  ) as v (rang, matiere, titre, consigne, minutes, lecon)
 where j.famille_id = (select id from famille) and j.jour = '2026-12-18'
   and not exists (select 1 from seance s where s.journee_id = j.id);

insert into journee (famille_id, jour) select f.id, '2027-01-04' from famille f
  on conflict (famille_id, jour) do nothing;
insert into seance
  (journee_id, rang, matiere, titre, reference, consigne, minutes, lecon,
   par_adulte, origine)
select j.id, v.rang, v.matiere, v.titre, '', v.consigne, v.minutes, v.lecon,
       null, 'trame'
  from journee j
  cross join (values
    (1, 'maths', 'Les problèmes en une phrase', 'Cinq problèmes dictés, très courts. La réponse sur l’ardoise, sans écrire le calcul.', 15, ''),
    (2, 'maths', 'Les grands nombres jusqu’à 999 999', 'Lis la leçon, puis fais les exercices. Tes calculs sur ton brouillon, le résultat sur l’écran.', 30, 'm-p3-grands-nombres'),
    (3, 'francais', 'Les pronoms personnels', 'Lis la leçon, puis fais les exercices. Tes calculs sur ton brouillon, le résultat sur l’écran.', 25, 'f-p3-pronoms'),
    (4, 'francais', 'Dictée de mots', 'Quinze mots de la liste en cours. On corrige ensemble, et on réécrit trois fois ceux qui ont hésité.', 20, ''),
    (5, 'francais', 'Lecture à voix haute', 'Une page préparée, lue à voix haute en respectant la ponctuation. On marque au crayon où respirer.', 30, ''),
    (6, 'sciences', 'La lumière et les ombres', 'Lis la leçon, puis fais les exercices. Tes calculs sur ton brouillon, le résultat sur l’écran.', 30, 's-p3-ombres'),
    (7, 'maison', 'Course et endurance', 'Courir sans s’arrêter, en augmentant un peu chaque semaine. On chronomètre, on ne compare à personne.', 30, '')
  ) as v (rang, matiere, titre, consigne, minutes, lecon)
 where j.famille_id = (select id from famille) and j.jour = '2027-01-04'
   and not exists (select 1 from seance s where s.journee_id = j.id);

insert into journee (famille_id, jour) select f.id, '2027-01-05' from famille f
  on conflict (famille_id, jour) do nothing;
insert into seance
  (journee_id, rang, matiere, titre, reference, consigne, minutes, lecon,
   par_adulte, origine)
select j.id, v.rang, v.matiere, v.titre, '', v.consigne, v.minutes, v.lecon,
       null, 'trame'
  from journee j
  cross join (values
    (1, 'maths', 'Encadrer et arrondir', 'Entre quels milliers se trouve 6 480 ? Quel est l’arrondi de 12,94 ? Dix questions.', 15, ''),
    (2, 'maths', 'Géométrie : tracer', 'Un programme de construction à suivre à la règle, à l’équerre et au compas. La précision compte.', 30, ''),
    (3, 'francais', 'Les homophones', 'Un texte à trous : a/à, est/et, son/sont, ont/on. Justifier chaque choix par le test de remplacement.', 25, ''),
    (4, 'francais', 'Dictée de phrases', 'Trois phrases. On souligne les verbes et on entoure les sujets avant de corriger.', 20, ''),
    (5, 'francais', 'Lecture silencieuse', 'Vingt minutes dans le livre en cours, puis raconter ce qui vient de se passer.', 30, ''),
    (6, 'anglais', 'L’heure et la journée', 'Lis la leçon, puis fais les exercices. Tes calculs sur ton brouillon, le résultat sur l’écran.', 30, 'a-p3-heure'),
    (7, 'maison', 'Jeux de ballon', 'Passes, tirs, jonglages. Compter les réussites de suite, battre son propre score.', 30, '')
  ) as v (rang, matiere, titre, consigne, minutes, lecon)
 where j.famille_id = (select id from famille) and j.jour = '2027-01-05'
   and not exists (select 1 from seance s where s.journee_id = j.id);

insert into journee (famille_id, jour) select f.id, '2027-01-06' from famille f
  on conflict (famille_id, jour) do nothing;
insert into seance
  (journee_id, rang, matiere, titre, reference, consigne, minutes, lecon,
   par_adulte, origine)
select j.id, v.rang, v.matiere, v.titre, '', v.consigne, v.minutes, v.lecon,
       null, 'trame'
  from journee j
  cross join (values
    (1, 'maths', 'Les unités de mesure', 'Combien de grammes dans 2 kg 500 ? De centimètres dans 3 m 50 ? Dix questions.', 15, ''),
    (2, 'geographie', 'Se repérer sur un planisphère', 'Lis la leçon, puis fais les exercices. Tes calculs sur ton brouillon, le résultat sur l’écran.', 35, 'g-p3-aires'),
    (3, 'maison', 'Construire quelque chose', 'Un objet qui marche : un pont en papier qui porte un livre, un moulin, un circuit. Croquis d’abord.', 45, '')
  ) as v (rang, matiere, titre, consigne, minutes, lecon)
 where j.famille_id = (select id from famille) and j.jour = '2027-01-06'
   and not exists (select 1 from seance s where s.journee_id = j.id);

insert into journee (famille_id, jour) select f.id, '2027-01-07' from famille f
  on conflict (famille_id, jour) do nothing;
insert into seance
  (journee_id, rang, matiere, titre, reference, consigne, minutes, lecon,
   par_adulte, origine)
select j.id, v.rang, v.matiere, v.titre, '', v.consigne, v.minutes, v.lecon,
       null, 'trame'
  from journee j
  cross join (values
    (1, 'maths', 'Les durées', 'De 8 h 45 à 12 h 30, combien de temps ? Cinq calculs de durée, à l’oral.', 15, ''),
    (2, 'maths', 'L’écriture à virgule', 'Lis la leçon, puis fais les exercices. Tes calculs sur ton brouillon, le résultat sur l’écran.', 30, 'm-p3-virgule'),
    (3, 'francais', 'L’adjectif épithète', 'Lis la leçon, puis fais les exercices. Tes calculs sur ton brouillon, le résultat sur l’écran.', 20, 'f-p3-epithete'),
    (4, 'francais', 'Dictée préparée', 'Le texte a été lu la veille. On le dicte, puis on compare avec l’original.', 20, ''),
    (5, 'francais', 'Lecture d’un documentaire', 'Une double page documentaire. Relever la nature et la source du document avant de lire.', 30, ''),
    (6, 'arts', 'Regarder une image', 'Lis la leçon, puis fais les exercices. Tes calculs sur ton brouillon, le résultat sur l’écran.', 25, 'ar-p3-image'),
    (7, 'maison', 'Parcours et équilibre', 'Un parcours à installer soi-même : sauter, grimper, tenir en équilibre, ramper.', 30, '')
  ) as v (rang, matiere, titre, consigne, minutes, lecon)
 where j.famille_id = (select id from famille) and j.jour = '2027-01-07'
   and not exists (select 1 from seance s where s.journee_id = j.id);

insert into journee (famille_id, jour) select f.id, '2027-01-08' from famille f
  on conflict (famille_id, jour) do nothing;
insert into seance
  (journee_id, rang, matiere, titre, reference, consigne, minutes, lecon,
   par_adulte, origine)
select j.id, v.rang, v.matiere, v.titre, '', v.consigne, v.minutes, v.lecon,
       null, 'trame'
  from journee j
  cross join (values
    (1, 'maths', 'Les tables de multiplication', 'Dix multiplications dictées, à l’ardoise. On efface entre chaque. On redit celles qui ont hésité.', 15, ''),
    (2, 'maths', 'Opérations posées', 'Quatre additions, quatre soustractions, deux multiplications. Estimer avant, vérifier après.', 30, ''),
    (3, 'francais', 'Analyser des phrases', 'Cinq phrases : souligner le sujet, entourer le verbe, encadrer les compléments. Dire lesquels se déplacent.', 25, ''),
    (4, 'francais', 'Les mots invariables', 'Apprendre dix mots invariables, puis les écrire sous la dictée.', 20, ''),
    (5, 'francais', 'Poésie', 'Lire un poème à voix haute, plusieurs fois. Repérer les rimes et les images. En apprendre quatre vers.', 30, ''),
    (6, 'francais', 'Donner son avis', 'Ce que je pense, pourquoi, un exemple. Huit lignes. Les trois morceaux doivent y être.', 25, ''),
    (7, 'maison', 'Marche et observation', 'Une marche d’une demi-heure. Rapporter trois choses observées, à noter ou à dessiner.', 30, '')
  ) as v (rang, matiere, titre, consigne, minutes, lecon)
 where j.famille_id = (select id from famille) and j.jour = '2027-01-08'
   and not exists (select 1 from seance s where s.journee_id = j.id);

insert into journee (famille_id, jour) select f.id, '2027-01-11' from famille f
  on conflict (famille_id, jour) do nothing;
insert into seance
  (journee_id, rang, matiere, titre, reference, consigne, minutes, lecon,
   par_adulte, origine)
select j.id, v.rang, v.matiere, v.titre, '', v.consigne, v.minutes, v.lecon,
       null, 'trame'
  from journee j
  cross join (values
    (1, 'maths', 'Les doubles et les moitiés', 'Le double de 45, la moitié de 68, le double de 250… Dix questions, à l’oral.', 15, ''),
    (2, 'maths', 'Problèmes du jour', 'Trois problèmes sur le cahier. Pour chacun : ce qu’on cherche, ce qu’on sait, le calcul, la phrase de réponse.', 30, ''),
    (3, 'francais', 'Conjugaison', 'Trois verbes, aux quatre temps connus, à toutes les personnes. Sur le cahier, sans modèle.', 25, ''),
    (4, 'francais', 'Transformer des phrases', 'Mettre cinq phrases au pluriel, en respectant toute la chaîne d’accords. À l’écrit.', 20, ''),
    (5, 'francais', 'Lecture d’une bande dessinée', 'Une planche. Puis expliquer ce que les images racontent et que le texte ne dit pas.', 30, ''),
    (6, 'histoire', 'Henri IV et les guerres de religion', 'Lis la leçon, puis fais les exercices. Tes calculs sur ton brouillon, le résultat sur l’écran.', 30, 'h-p3-henri-iv'),
    (7, 'maison', 'Jeux de raquette', 'Échanges contre un mur ou à deux. Compter les échanges tenus sans faute.', 30, '')
  ) as v (rang, matiere, titre, consigne, minutes, lecon)
 where j.famille_id = (select id from famille) and j.jour = '2027-01-11'
   and not exists (select 1 from seance s where s.journee_id = j.id);

insert into journee (famille_id, jour) select f.id, '2027-01-12' from famille f
  on conflict (famille_id, jour) do nothing;
insert into seance
  (journee_id, rang, matiere, titre, reference, consigne, minutes, lecon,
   par_adulte, origine)
select j.id, v.rang, v.matiere, v.titre, '', v.consigne, v.minutes, v.lecon,
       null, 'trame'
  from journee j
  cross join (values
    (1, 'maths', 'Les compléments à 100', 'Combien manque-t-il à 67 pour aller à 100 ? Dix questions. Puis les compléments à 1 000.', 15, ''),
    (2, 'maths', 'Comparer et ranger les nombres décimaux', 'Lis la leçon, puis fais les exercices. Tes calculs sur ton brouillon, le résultat sur l’écran.', 25, 'm-p3-comparer-decimaux'),
    (3, 'francais', 'L’accord du sujet et du verbe', 'Lis la leçon, puis fais les exercices. Tes calculs sur ton brouillon, le résultat sur l’écran.', 30, 'f-p3-accord-sujet-verbe'),
    (4, 'francais', 'Dictée à trous', 'Le texte est écrit, il manque les terminaisons des verbes. On les complète en justifiant.', 20, ''),
    (5, 'francais', 'Lecture de théâtre', 'Une scène, lue à deux voix. Les didascalies ne se disent pas : elles se jouent.', 30, ''),
    (6, 'francais', 'Écrire une lettre', 'Une lettre à quelqu’un de la famille. Formule d’appel, corps, formule de fin.', 25, ''),
    (7, 'maison', 'Danse et rythme', 'Suivre une pulsation, inventer une suite de mouvements de huit temps, la refaire à l’identique.', 30, '')
  ) as v (rang, matiere, titre, consigne, minutes, lecon)
 where j.famille_id = (select id from famille) and j.jour = '2027-01-12'
   and not exists (select 1 from seance s where s.journee_id = j.id);

insert into journee (famille_id, jour) select f.id, '2027-01-13' from famille f
  on conflict (famille_id, jour) do nothing;
insert into seance
  (journee_id, rang, matiere, titre, reference, consigne, minutes, lecon,
   par_adulte, origine)
select j.id, v.rang, v.matiere, v.titre, '', v.consigne, v.minutes, v.lecon,
       null, 'trame'
  from journee j
  cross join (values
    (1, 'maths', 'Ajouter 9, 19, 29', 'On ajoute la dizaine ronde et on retire 1. Dix questions, en disant la procédure à voix haute.', 15, ''),
    (2, 'sciences', 'Les phases de la Lune', 'Lis la leçon, puis fais les exercices. Tes calculs sur ton brouillon, le résultat sur l’écran.', 30, 's-p3-lune'),
    (3, 'maison', 'Une sortie', 'Marché, médiathèque, musée, chantier, gare, ferme. On prépare une question avant de partir, et on y répond au retour.', 45, '')
  ) as v (rang, matiere, titre, consigne, minutes, lecon)
 where j.famille_id = (select id from famille) and j.jour = '2027-01-13'
   and not exists (select 1 from seance s where s.journee_id = j.id);

insert into journee (famille_id, jour) select f.id, '2027-01-14' from famille f
  on conflict (famille_id, jour) do nothing;
insert into seance
  (journee_id, rang, matiere, titre, reference, consigne, minutes, lecon,
   par_adulte, origine)
select j.id, v.rang, v.matiere, v.titre, '', v.consigne, v.minutes, v.lecon,
       null, 'trame'
  from journee j
  cross join (values
    (1, 'maths', 'Multiplier par 10, 100, 1 000', 'Dix questions rapides. Puis diviser par 10 : 320 ÷ 10, 4 500 ÷ 10.', 15, ''),
    (2, 'maths', 'Mesurer pour de vrai', 'Mesurer des objets de la maison, noter en deux unités différentes, comparer aux estimations faites avant.', 30, ''),
    (3, 'francais', 'Vocabulaire', 'Dix mots : trouver un synonyme, un contraire, et un mot de la même famille pour chacun.', 25, ''),
    (4, 'francais', 'Dictée de mots', 'Quinze mots de la liste en cours. On corrige ensemble, et on réécrit trois fois ceux qui ont hésité.', 20, ''),
    (5, 'francais', 'Lecture à voix haute', 'Une page préparée, lue à voix haute en respectant la ponctuation. On marque au crayon où respirer.', 30, ''),
    (6, 'francais', 'Écrire la suite', 'Lire le début d’un récit, puis en écrire la suite : dix lignes. Brouillon d’abord.', 25, ''),
    (7, 'maison', 'Course et endurance', 'Courir sans s’arrêter, en augmentant un peu chaque semaine. On chronomètre, on ne compare à personne.', 30, '')
  ) as v (rang, matiere, titre, consigne, minutes, lecon)
 where j.famille_id = (select id from famille) and j.jour = '2027-01-14'
   and not exists (select 1 from seance s where s.journee_id = j.id);

insert into journee (famille_id, jour) select f.id, '2027-01-15' from famille f
  on conflict (famille_id, jour) do nothing;
insert into seance
  (journee_id, rang, matiere, titre, reference, consigne, minutes, lecon,
   par_adulte, origine)
select j.id, v.rang, v.matiere, v.titre, '', v.consigne, v.minutes, v.lecon,
       null, 'trame'
  from journee j
  cross join (values
    (1, 'maths', 'Multiplier par 4 et par 8', 'Par 4, c’est doubler deux fois. Par 8, trois fois. Dix questions en disant les étapes.', 15, ''),
    (2, 'maths', 'Le nombre du jour', 'Un nombre au tableau. Le décomposer de cinq façons, l’encadrer, dire son nombre de centaines, le doubler.', 30, ''),
    (3, 'francais', 'Le dictionnaire', 'Chercher cinq mots rencontrés cette semaine. Relever la nature du mot et ses différents sens.', 25, ''),
    (4, 'francais', 'Dictée de phrases', 'Trois phrases. On souligne les verbes et on entoure les sujets avant de corriger.', 20, ''),
    (5, 'francais', 'Lecture silencieuse', 'Vingt minutes dans le livre en cours, puis raconter ce qui vient de se passer.', 30, ''),
    (6, 'francais', 'Raconter sa journée d’hier', 'Dix lignes au passé. Vérifier que les temps ne changent pas en cours de route.', 25, ''),
    (7, 'maison', 'Jeux de ballon', 'Passes, tirs, jonglages. Compter les réussites de suite, battre son propre score.', 30, '')
  ) as v (rang, matiere, titre, consigne, minutes, lecon)
 where j.famille_id = (select id from famille) and j.jour = '2027-01-15'
   and not exists (select 1 from seance s where s.journee_id = j.id);

insert into journee (famille_id, jour) select f.id, '2027-01-18' from famille f
  on conflict (famille_id, jour) do nothing;
insert into seance
  (journee_id, rang, matiere, titre, reference, consigne, minutes, lecon,
   par_adulte, origine)
select j.id, v.rang, v.matiere, v.titre, '', v.consigne, v.minutes, v.lecon,
       null, 'trame'
  from journee j
  cross join (values
    (1, 'maths', 'Multiplier par 5 et par 50', 'Par 5, c’est la moitié de par 10. Par 50, la moitié de par 100. Dix questions.', 15, ''),
    (2, 'maths', 'La division posée', 'Lis la leçon, puis fais les exercices. Tes calculs sur ton brouillon, le résultat sur l’écran.', 35, 'm-p3-division'),
    (3, 'francais', 'Synonymes et contraires', 'Lis la leçon, puis fais les exercices. Tes calculs sur ton brouillon, le résultat sur l’écran.', 25, 'f-p3-synonymes'),
    (4, 'francais', 'Copie soignée', 'Copier huit lignes d’un texte au choix, le plus soigneusement possible. On relit avant de rendre.', 20, ''),
    (5, 'francais', 'Lecture et questions', 'Un texte court, puis cinq questions : trois sur ce qui est écrit, deux sur ce qui se déduit.', 30, ''),
    (6, 'geographie', 'L’inégal accès à l’eau, à la santé, à l’école', 'Lis la leçon, puis fais les exercices. Tes calculs sur ton brouillon, le résultat sur l’écran.', 30, 'g-p3-acces'),
    (7, 'maison', 'Vélo', 'Une sortie. Repérer le trajet sur un plan avant de partir, puis le raconter au retour.', 30, '')
  ) as v (rang, matiere, titre, consigne, minutes, lecon)
 where j.famille_id = (select id from famille) and j.jour = '2027-01-18'
   and not exists (select 1 from seance s where s.journee_id = j.id);

insert into journee (famille_id, jour) select f.id, '2027-01-19' from famille f
  on conflict (famille_id, jour) do nothing;
insert into seance
  (journee_id, rang, matiere, titre, reference, consigne, minutes, lecon,
   par_adulte, origine)
select j.id, v.rang, v.matiere, v.titre, '', v.consigne, v.minutes, v.lecon,
       null, 'trame'
  from journee j
  cross join (values
    (1, 'maths', 'Les fractions d’une quantité', 'La moitié de 36, le tiers de 24, les trois quarts de 20. Dix questions à l’oral.', 15, ''),
    (2, 'maths', 'Problèmes du jour', 'Trois problèmes sur le cahier. Pour chacun : ce qu’on cherche, ce qu’on sait, le calcul, la phrase de réponse.', 30, ''),
    (3, 'francais', 'Conjugaison', 'Trois verbes, aux quatre temps connus, à toutes les personnes. Sur le cahier, sans modèle.', 25, ''),
    (4, 'francais', 'Dictée préparée', 'Le texte a été lu la veille. On le dicte, puis on compare avec l’original.', 20, ''),
    (5, 'francais', 'Lecture d’un documentaire', 'Une double page documentaire. Relever la nature et la source du document avant de lire.', 30, ''),
    (6, 'emc', 'Le respect et les différences', 'Lis la leçon, puis fais les exercices. Tes calculs sur ton brouillon, le résultat sur l’écran.', 30, 'e-p3-differences'),
    (7, 'maison', 'Parcours et équilibre', 'Un parcours à installer soi-même : sauter, grimper, tenir en équilibre, ramper.', 30, '')
  ) as v (rang, matiere, titre, consigne, minutes, lecon)
 where j.famille_id = (select id from famille) and j.jour = '2027-01-19'
   and not exists (select 1 from seance s where s.journee_id = j.id);

insert into journee (famille_id, jour) select f.id, '2027-01-20' from famille f
  on conflict (famille_id, jour) do nothing;
insert into seance
  (journee_id, rang, matiere, titre, reference, consigne, minutes, lecon,
   par_adulte, origine)
select j.id, v.rang, v.matiere, v.titre, '', v.consigne, v.minutes, v.lecon,
       null, 'trame'
  from journee j
  cross join (values
    (1, 'maths', 'Les problèmes en une phrase', 'Cinq problèmes dictés, très courts. La réponse sur l’ardoise, sans écrire le calcul.', 15, ''),
    (2, 'histoire', 'Louis XIV, Versailles et la société d’ordres', 'Lis la leçon, puis fais les exercices. Tes calculs sur ton brouillon, le résultat sur l’écran.', 30, 'h-p3-louis-xiv'),
    (3, 'maison', 'Démonter un objet', 'Un vieil appareil, un stylo, une serrure. Nommer les pièces et dire à quoi chacune sert.', 45, '')
  ) as v (rang, matiere, titre, consigne, minutes, lecon)
 where j.famille_id = (select id from famille) and j.jour = '2027-01-20'
   and not exists (select 1 from seance s where s.journee_id = j.id);

insert into journee (famille_id, jour) select f.id, '2027-01-21' from famille f
  on conflict (famille_id, jour) do nothing;
insert into seance
  (journee_id, rang, matiere, titre, reference, consigne, minutes, lecon,
   par_adulte, origine)
select j.id, v.rang, v.matiere, v.titre, '', v.consigne, v.minutes, v.lecon,
       null, 'trame'
  from journee j
  cross join (values
    (1, 'maths', 'Encadrer et arrondir', 'Entre quels milliers se trouve 6 480 ? Quel est l’arrondi de 12,94 ? Dix questions.', 15, ''),
    (2, 'maths', 'Les masses et les contenances', 'Lis la leçon, puis fais les exercices. Tes calculs sur ton brouillon, le résultat sur l’écran.', 25, 'm-p3-masses-contenances'),
    (3, 'francais', 'Le dialogue dans un récit', 'Lis la leçon, puis fais les exercices. Tes calculs sur ton brouillon, le résultat sur l’écran.', 25, 'f-p3-dialogue'),
    (4, 'francais', 'Transformer des phrases', 'Mettre cinq phrases au pluriel, en respectant toute la chaîne d’accords. À l’écrit.', 20, ''),
    (5, 'francais', 'Lecture d’une bande dessinée', 'Une planche. Puis expliquer ce que les images racontent et que le texte ne dit pas.', 30, ''),
    (6, 'francais', 'Expliquer une règle', 'Réécrire avec tes mots une leçon de la semaine, pour quelqu’un qui ne l’a pas eue.', 25, ''),
    (7, 'maison', 'Jeux de raquette', 'Échanges contre un mur ou à deux. Compter les échanges tenus sans faute.', 30, '')
  ) as v (rang, matiere, titre, consigne, minutes, lecon)
 where j.famille_id = (select id from famille) and j.jour = '2027-01-21'
   and not exists (select 1 from seance s where s.journee_id = j.id);

insert into journee (famille_id, jour) select f.id, '2027-01-22' from famille f
  on conflict (famille_id, jour) do nothing;
insert into seance
  (journee_id, rang, matiere, titre, reference, consigne, minutes, lecon,
   par_adulte, origine)
select j.id, v.rang, v.matiere, v.titre, '', v.consigne, v.minutes, v.lecon,
       null, 'trame'
  from journee j
  cross join (values
    (1, 'maths', 'Les unités de mesure', 'Combien de grammes dans 2 kg 500 ? De centimètres dans 3 m 50 ? Dix questions.', 15, ''),
    (2, 'maths', 'Mesurer pour de vrai', 'Mesurer des objets de la maison, noter en deux unités différentes, comparer aux estimations faites avant.', 30, ''),
    (3, 'francais', 'Vocabulaire', 'Dix mots : trouver un synonyme, un contraire, et un mot de la même famille pour chacun.', 25, ''),
    (4, 'francais', 'Dictée à trous', 'Le texte est écrit, il manque les terminaisons des verbes. On les complète en justifiant.', 20, ''),
    (5, 'francais', 'Lecture de théâtre', 'Une scène, lue à deux voix. Les didascalies ne se disent pas : elles se jouent.', 30, ''),
    (6, 'francais', 'Écrire une lettre', 'Une lettre à quelqu’un de la famille. Formule d’appel, corps, formule de fin.', 25, ''),
    (7, 'maison', 'Danse et rythme', 'Suivre une pulsation, inventer une suite de mouvements de huit temps, la refaire à l’identique.', 30, '')
  ) as v (rang, matiere, titre, consigne, minutes, lecon)
 where j.famille_id = (select id from famille) and j.jour = '2027-01-22'
   and not exists (select 1 from seance s where s.journee_id = j.id);

insert into journee (famille_id, jour) select f.id, '2027-01-25' from famille f
  on conflict (famille_id, jour) do nothing;
insert into seance
  (journee_id, rang, matiere, titre, reference, consigne, minutes, lecon,
   par_adulte, origine)
select j.id, v.rang, v.matiere, v.titre, '', v.consigne, v.minutes, v.lecon,
       null, 'trame'
  from journee j
  cross join (values
    (1, 'maths', 'Les durées', 'De 8 h 45 à 12 h 30, combien de temps ? Cinq calculs de durée, à l’oral.', 15, ''),
    (2, 'maths', 'Le nombre du jour', 'Un nombre au tableau. Le décomposer de cinq façons, l’encadrer, dire son nombre de centaines, le doubler.', 30, ''),
    (3, 'francais', 'Le dictionnaire', 'Chercher cinq mots rencontrés cette semaine. Relever la nature du mot et ses différents sens.', 25, ''),
    (4, 'francais', 'Auto-dictée', 'Apprendre quatre lignes par cœur la veille, les écrire de mémoire aujourd’hui.', 20, ''),
    (5, 'francais', 'Lecture libre', 'Le livre que tu veux, sans compte à rendre. On te demande seulement si tu as aimé, et pourquoi.', 30, ''),
    (6, 'arts', 'Regarder une image — on reprend', 'On relit le cours, puis on refait les exercices. Tes calculs sur ton brouillon, le résultat sur l’écran.', 25, 'ar-p3-image'),
    (7, 'maison', 'Jardinage ou bricolage', 'Planter, arroser, mesurer, réparer. Le travail des mains compte autant que le reste.', 30, '')
  ) as v (rang, matiere, titre, consigne, minutes, lecon)
 where j.famille_id = (select id from famille) and j.jour = '2027-01-25'
   and not exists (select 1 from seance s where s.journee_id = j.id);

insert into journee (famille_id, jour) select f.id, '2027-01-26' from famille f
  on conflict (famille_id, jour) do nothing;
insert into seance
  (journee_id, rang, matiere, titre, reference, consigne, minutes, lecon,
   par_adulte, origine)
select j.id, v.rang, v.matiere, v.titre, '', v.consigne, v.minutes, v.lecon,
       null, 'trame'
  from journee j
  cross join (values
    (1, 'maths', 'Les tables de multiplication', 'Dix multiplications dictées, à l’ardoise. On efface entre chaque. On redit celles qui ont hésité.', 15, ''),
    (2, 'maths', 'Le périmètre', 'Lis la leçon, puis fais les exercices. Tes calculs sur ton brouillon, le résultat sur l’écran.', 25, 'm-p3-perimetre'),
    (3, 'francais', 'Reconnaître un poème, une pièce, un récit', 'Lis la leçon, puis fais les exercices. Tes calculs sur ton brouillon, le résultat sur l’écran.', 25, 'f-p3-genres'),
    (4, 'francais', 'Dictée de mots', 'Quinze mots de la liste en cours. On corrige ensemble, et on réécrit trois fois ceux qui ont hésité.', 20, ''),
    (5, 'francais', 'Lecture à voix haute', 'Une page préparée, lue à voix haute en respectant la ponctuation. On marque au crayon où respirer.', 30, ''),
    (6, 'francais', 'Écrire la suite', 'Lire le début d’un récit, puis en écrire la suite : dix lignes. Brouillon d’abord.', 25, ''),
    (7, 'maison', 'Course et endurance', 'Courir sans s’arrêter, en augmentant un peu chaque semaine. On chronomètre, on ne compare à personne.', 30, '')
  ) as v (rang, matiere, titre, consigne, minutes, lecon)
 where j.famille_id = (select id from famille) and j.jour = '2027-01-26'
   and not exists (select 1 from seance s where s.journee_id = j.id);

insert into journee (famille_id, jour) select f.id, '2027-01-27' from famille f
  on conflict (famille_id, jour) do nothing;
insert into seance
  (journee_id, rang, matiere, titre, reference, consigne, minutes, lecon,
   par_adulte, origine)
select j.id, v.rang, v.matiere, v.titre, '', v.consigne, v.minutes, v.lecon,
       null, 'trame'
  from journee j
  cross join (values
    (1, 'maths', 'Les doubles et les moitiés', 'Le double de 45, la moitié de 68, le double de 250… Dix questions, à l’oral.', 15, ''),
    (2, 'francais', 'Poésie', 'Lire un poème à voix haute, plusieurs fois. Repérer les rimes et les images. En apprendre quatre vers.', 30, ''),
    (3, 'maison', 'Une carte', 'Dessiner le plan du quartier de mémoire, puis le comparer à une vraie carte. Chercher ce qui manque.', 45, '')
  ) as v (rang, matiere, titre, consigne, minutes, lecon)
 where j.famille_id = (select id from famille) and j.jour = '2027-01-27'
   and not exists (select 1 from seance s where s.journee_id = j.id);

insert into journee (famille_id, jour) select f.id, '2027-01-28' from famille f
  on conflict (famille_id, jour) do nothing;
insert into seance
  (journee_id, rang, matiere, titre, reference, consigne, minutes, lecon,
   par_adulte, origine)
select j.id, v.rang, v.matiere, v.titre, '', v.consigne, v.minutes, v.lecon,
       null, 'trame'
  from journee j
  cross join (values
    (1, 'maths', 'Les compléments à 100', 'Combien manque-t-il à 67 pour aller à 100 ? Dix questions. Puis les compléments à 1 000.', 15, ''),
    (2, 'maths', 'Reprendre la leçon de maths', 'Refaire les exercices de la dernière leçon de maths, sur le cahier cette fois. Comparer avec ce qui avait été trouvé.', 30, ''),
    (3, 'francais', 'Reprendre la leçon de français', 'Refaire les exercices de la dernière leçon de français, sur le cahier.', 25, ''),
    (4, 'francais', 'Copie soignée', 'Copier huit lignes d’un texte au choix, le plus soigneusement possible. On relit avant de rendre.', 20, ''),
    (5, 'francais', 'Lecture et questions', 'Un texte court, puis cinq questions : trois sur ce qui est écrit, deux sur ce qui se déduit.', 30, ''),
    (6, 'geographie', 'Se repérer sur un planisphère — on reprend', 'On relit le cours, puis on refait les exercices. Tes calculs sur ton brouillon, le résultat sur l’écran.', 35, 'g-p3-aires'),
    (7, 'maison', 'Vélo', 'Une sortie. Repérer le trajet sur un plan avant de partir, puis le raconter au retour.', 30, '')
  ) as v (rang, matiere, titre, consigne, minutes, lecon)
 where j.famille_id = (select id from famille) and j.jour = '2027-01-28'
   and not exists (select 1 from seance s where s.journee_id = j.id);

insert into journee (famille_id, jour) select f.id, '2027-01-29' from famille f
  on conflict (famille_id, jour) do nothing;
insert into seance
  (journee_id, rang, matiere, titre, reference, consigne, minutes, lecon,
   par_adulte, origine)
select j.id, v.rang, v.matiere, v.titre, '', v.consigne, v.minutes, v.lecon,
       null, 'trame'
  from journee j
  cross join (values
    (1, 'maths', 'Ajouter 9, 19, 29', 'On ajoute la dizaine ronde et on retire 1. Dix questions, en disant la procédure à voix haute.', 15, ''),
    (2, 'maths', 'Géométrie : tracer', 'Un programme de construction à suivre à la règle, à l’équerre et au compas. La précision compte.', 30, ''),
    (3, 'francais', 'Les homophones', 'Un texte à trous : a/à, est/et, son/sont, ont/on. Justifier chaque choix par le test de remplacement.', 25, ''),
    (4, 'francais', 'Dictée préparée', 'Le texte a été lu la veille. On le dicte, puis on compare avec l’original.', 20, ''),
    (5, 'francais', 'Lecture d’un documentaire', 'Une double page documentaire. Relever la nature et la source du document avant de lire.', 30, ''),
    (6, 'francais', 'Décrire un lieu', 'Dix lignes sur un endroit que tu connais. Au moins trois adjectifs qui servent vraiment.', 25, ''),
    (7, 'maison', 'Parcours et équilibre', 'Un parcours à installer soi-même : sauter, grimper, tenir en équilibre, ramper.', 30, '')
  ) as v (rang, matiere, titre, consigne, minutes, lecon)
 where j.famille_id = (select id from famille) and j.jour = '2027-01-29'
   and not exists (select 1 from seance s where s.journee_id = j.id);

insert into journee (famille_id, jour) select f.id, '2027-02-01' from famille f
  on conflict (famille_id, jour) do nothing;
insert into seance
  (journee_id, rang, matiere, titre, reference, consigne, minutes, lecon,
   par_adulte, origine)
select j.id, v.rang, v.matiere, v.titre, '', v.consigne, v.minutes, v.lecon,
       null, 'trame'
  from journee j
  cross join (values
    (1, 'maths', 'Multiplier par 10, 100, 1 000', 'Dix questions rapides. Puis diviser par 10 : 320 ÷ 10, 4 500 ÷ 10.', 15, ''),
    (2, 'maths', 'Les grands nombres jusqu’à 999 999 — on reprend', 'On relit le cours, puis on refait les exercices. Tes calculs sur ton brouillon, le résultat sur l’écran.', 30, 'm-p3-grands-nombres'),
    (3, 'francais', 'Les pronoms personnels — on reprend', 'On relit le cours, puis on refait les exercices. Tes calculs sur ton brouillon, le résultat sur l’écran.', 25, 'f-p3-pronoms'),
    (4, 'francais', 'Les mots invariables', 'Apprendre dix mots invariables, puis les écrire sous la dictée.', 20, ''),
    (5, 'francais', 'Poésie', 'Lire un poème à voix haute, plusieurs fois. Repérer les rimes et les images. En apprendre quatre vers.', 30, ''),
    (6, 'anglais', 'L’heure et la journée — on reprend', 'On relit le cours, puis on refait les exercices. Tes calculs sur ton brouillon, le résultat sur l’écran.', 30, 'a-p3-heure'),
    (7, 'maison', 'Marche et observation', 'Une marche d’une demi-heure. Rapporter trois choses observées, à noter ou à dessiner.', 30, '')
  ) as v (rang, matiere, titre, consigne, minutes, lecon)
 where j.famille_id = (select id from famille) and j.jour = '2027-02-01'
   and not exists (select 1 from seance s where s.journee_id = j.id);

insert into journee (famille_id, jour) select f.id, '2027-02-02' from famille f
  on conflict (famille_id, jour) do nothing;
insert into seance
  (journee_id, rang, matiere, titre, reference, consigne, minutes, lecon,
   par_adulte, origine)
select j.id, v.rang, v.matiere, v.titre, '', v.consigne, v.minutes, v.lecon,
       null, 'trame'
  from journee j
  cross join (values
    (1, 'maths', 'Multiplier par 4 et par 8', 'Par 4, c’est doubler deux fois. Par 8, trois fois. Dix questions en disant les étapes.', 15, ''),
    (2, 'maths', 'Le nombre du jour', 'Un nombre au tableau. Le décomposer de cinq façons, l’encadrer, dire son nombre de centaines, le doubler.', 30, ''),
    (3, 'francais', 'Le dictionnaire', 'Chercher cinq mots rencontrés cette semaine. Relever la nature du mot et ses différents sens.', 25, ''),
    (4, 'francais', 'Transformer des phrases', 'Mettre cinq phrases au pluriel, en respectant toute la chaîne d’accords. À l’écrit.', 20, ''),
    (5, 'francais', 'Lecture d’une bande dessinée', 'Une planche. Puis expliquer ce que les images racontent et que le texte ne dit pas.', 30, ''),
    (6, 'francais', 'Expliquer une règle', 'Réécrire avec tes mots une leçon de la semaine, pour quelqu’un qui ne l’a pas eue.', 25, ''),
    (7, 'maison', 'Jeux de raquette', 'Échanges contre un mur ou à deux. Compter les échanges tenus sans faute.', 30, '')
  ) as v (rang, matiere, titre, consigne, minutes, lecon)
 where j.famille_id = (select id from famille) and j.jour = '2027-02-02'
   and not exists (select 1 from seance s where s.journee_id = j.id);

insert into journee (famille_id, jour) select f.id, '2027-02-03' from famille f
  on conflict (famille_id, jour) do nothing;
insert into seance
  (journee_id, rang, matiere, titre, reference, consigne, minutes, lecon,
   par_adulte, origine)
select j.id, v.rang, v.matiere, v.titre, '', v.consigne, v.minutes, v.lecon,
       null, 'trame'
  from journee j
  cross join (values
    (1, 'maths', 'Multiplier par 5 et par 50', 'Par 5, c’est la moitié de par 10. Par 50, la moitié de par 100. Dix questions.', 15, ''),
    (2, 'emc', 'Nommer ce qu’on ressent, régler un conflit', 'Lis la leçon, puis fais les exercices. Tes calculs sur ton brouillon, le résultat sur l’écran.', 25, 'e-p3-emotions'),
    (3, 'maison', 'Programmer un déplacement', 'Écrire une suite d’instructions pour faire tracer une figure, puis l’exécuter à la lettre — même si c’est faux.', 45, '')
  ) as v (rang, matiere, titre, consigne, minutes, lecon)
 where j.famille_id = (select id from famille) and j.jour = '2027-02-03'
   and not exists (select 1 from seance s where s.journee_id = j.id);

insert into journee (famille_id, jour) select f.id, '2027-02-04' from famille f
  on conflict (famille_id, jour) do nothing;
insert into seance
  (journee_id, rang, matiere, titre, reference, consigne, minutes, lecon,
   par_adulte, origine)
select j.id, v.rang, v.matiere, v.titre, '', v.consigne, v.minutes, v.lecon,
       null, 'trame'
  from journee j
  cross join (values
    (1, 'maths', 'Les fractions d’une quantité', 'La moitié de 36, le tiers de 24, les trois quarts de 20. Dix questions à l’oral.', 15, ''),
    (2, 'maths', 'L’écriture à virgule — on reprend', 'On relit le cours, puis on refait les exercices. Tes calculs sur ton brouillon, le résultat sur l’écran.', 30, 'm-p3-virgule'),
    (3, 'francais', 'L’adjectif épithète — on reprend', 'On relit le cours, puis on refait les exercices. Tes calculs sur ton brouillon, le résultat sur l’écran.', 20, 'f-p3-epithete'),
    (4, 'francais', 'Auto-dictée', 'Apprendre quatre lignes par cœur la veille, les écrire de mémoire aujourd’hui.', 20, ''),
    (5, 'francais', 'Lecture libre', 'Le livre que tu veux, sans compte à rendre. On te demande seulement si tu as aimé, et pourquoi.', 30, ''),
    (6, 'emc', 'Le respect et les différences — on reprend', 'On relit le cours, puis on refait les exercices. Tes calculs sur ton brouillon, le résultat sur l’écran.', 30, 'e-p3-differences'),
    (7, 'maison', 'Jardinage ou bricolage', 'Planter, arroser, mesurer, réparer. Le travail des mains compte autant que le reste.', 30, '')
  ) as v (rang, matiere, titre, consigne, minutes, lecon)
 where j.famille_id = (select id from famille) and j.jour = '2027-02-04'
   and not exists (select 1 from seance s where s.journee_id = j.id);

insert into journee (famille_id, jour) select f.id, '2027-02-05' from famille f
  on conflict (famille_id, jour) do nothing;
insert into seance
  (journee_id, rang, matiere, titre, reference, consigne, minutes, lecon,
   par_adulte, origine)
select j.id, v.rang, v.matiere, v.titre, '', v.consigne, v.minutes, v.lecon,
       null, 'trame'
  from journee j
  cross join (values
    (1, 'maths', 'Les problèmes en une phrase', 'Cinq problèmes dictés, très courts. La réponse sur l’ardoise, sans écrire le calcul.', 15, ''),
    (2, 'maths', 'Reprendre la leçon de maths', 'Refaire les exercices de la dernière leçon de maths, sur le cahier cette fois. Comparer avec ce qui avait été trouvé.', 30, ''),
    (3, 'francais', 'Reprendre la leçon de français', 'Refaire les exercices de la dernière leçon de français, sur le cahier.', 25, ''),
    (4, 'francais', 'Dictée de mots', 'Quinze mots de la liste en cours. On corrige ensemble, et on réécrit trois fois ceux qui ont hésité.', 20, ''),
    (5, 'francais', 'Lecture à voix haute', 'Une page préparée, lue à voix haute en respectant la ponctuation. On marque au crayon où respirer.', 30, ''),
    (6, 'sciences', 'La lumière et les ombres — on reprend', 'On relit le cours, puis on refait les exercices. Tes calculs sur ton brouillon, le résultat sur l’écran.', 30, 's-p3-ombres'),
    (7, 'maison', 'Course et endurance', 'Courir sans s’arrêter, en augmentant un peu chaque semaine. On chronomètre, on ne compare à personne.', 30, '')
  ) as v (rang, matiere, titre, consigne, minutes, lecon)
 where j.famille_id = (select id from famille) and j.jour = '2027-02-05'
   and not exists (select 1 from seance s where s.journee_id = j.id);

insert into journee (famille_id, jour) select f.id, '2027-02-08' from famille f
  on conflict (famille_id, jour) do nothing;
insert into seance
  (journee_id, rang, matiere, titre, reference, consigne, minutes, lecon,
   par_adulte, origine)
select j.id, v.rang, v.matiere, v.titre, '', v.consigne, v.minutes, v.lecon,
       null, 'trame'
  from journee j
  cross join (values
    (1, 'maths', 'Encadrer et arrondir', 'Entre quels milliers se trouve 6 480 ? Quel est l’arrondi de 12,94 ? Dix questions.', 15, ''),
    (2, 'maths', 'Comparer et ranger les nombres décimaux — on reprend', 'On relit le cours, puis on refait les exercices. Tes calculs sur ton brouillon, le résultat sur l’écran.', 25, 'm-p3-comparer-decimaux'),
    (3, 'francais', 'L’accord du sujet et du verbe — on reprend', 'On relit le cours, puis on refait les exercices. Tes calculs sur ton brouillon, le résultat sur l’écran.', 30, 'f-p3-accord-sujet-verbe'),
    (4, 'francais', 'Dictée de phrases', 'Trois phrases. On souligne les verbes et on entoure les sujets avant de corriger.', 20, ''),
    (5, 'francais', 'Lecture silencieuse', 'Vingt minutes dans le livre en cours, puis raconter ce qui vient de se passer.', 30, ''),
    (6, 'francais', 'Raconter sa journée d’hier', 'Dix lignes au passé. Vérifier que les temps ne changent pas en cours de route.', 25, ''),
    (7, 'maison', 'Jeux de ballon', 'Passes, tirs, jonglages. Compter les réussites de suite, battre son propre score.', 30, '')
  ) as v (rang, matiere, titre, consigne, minutes, lecon)
 where j.famille_id = (select id from famille) and j.jour = '2027-02-08'
   and not exists (select 1 from seance s where s.journee_id = j.id);

insert into journee (famille_id, jour) select f.id, '2027-02-09' from famille f
  on conflict (famille_id, jour) do nothing;
insert into seance
  (journee_id, rang, matiere, titre, reference, consigne, minutes, lecon,
   par_adulte, origine)
select j.id, v.rang, v.matiere, v.titre, '', v.consigne, v.minutes, v.lecon,
       null, 'trame'
  from journee j
  cross join (values
    (1, 'maths', 'Les unités de mesure', 'Combien de grammes dans 2 kg 500 ? De centimètres dans 3 m 50 ? Dix questions.', 15, ''),
    (2, 'maths', 'Mesurer pour de vrai', 'Mesurer des objets de la maison, noter en deux unités différentes, comparer aux estimations faites avant.', 30, ''),
    (3, 'francais', 'Vocabulaire', 'Dix mots : trouver un synonyme, un contraire, et un mot de la même famille pour chacun.', 25, ''),
    (4, 'francais', 'Copie soignée', 'Copier huit lignes d’un texte au choix, le plus soigneusement possible. On relit avant de rendre.', 20, ''),
    (5, 'francais', 'Lecture et questions', 'Un texte court, puis cinq questions : trois sur ce qui est écrit, deux sur ce qui se déduit.', 30, ''),
    (6, 'histoire', 'Henri IV et les guerres de religion — on reprend', 'On relit le cours, puis on refait les exercices. Tes calculs sur ton brouillon, le résultat sur l’écran.', 30, 'h-p3-henri-iv'),
    (7, 'maison', 'Vélo', 'Une sortie. Repérer le trajet sur un plan avant de partir, puis le raconter au retour.', 30, '')
  ) as v (rang, matiere, titre, consigne, minutes, lecon)
 where j.famille_id = (select id from famille) and j.jour = '2027-02-09'
   and not exists (select 1 from seance s where s.journee_id = j.id);

insert into journee (famille_id, jour) select f.id, '2027-02-10' from famille f
  on conflict (famille_id, jour) do nothing;
insert into seance
  (journee_id, rang, matiere, titre, reference, consigne, minutes, lecon,
   par_adulte, origine)
select j.id, v.rang, v.matiere, v.titre, '', v.consigne, v.minutes, v.lecon,
       null, 'trame'
  from journee j
  cross join (values
    (1, 'maths', 'Les durées', 'De 8 h 45 à 12 h 30, combien de temps ? Cinq calculs de durée, à l’oral.', 15, ''),
    (2, 'francais', 'Lecture de théâtre', 'Une scène, lue à deux voix. Les didascalies ne se disent pas : elles se jouent.', 30, ''),
    (3, 'maison', 'Un métier', 'Choisir un métier, chercher ce qu’il demande d’apprendre, et qui l’exerce autour de nous.', 45, '')
  ) as v (rang, matiere, titre, consigne, minutes, lecon)
 where j.famille_id = (select id from famille) and j.jour = '2027-02-10'
   and not exists (select 1 from seance s where s.journee_id = j.id);

insert into journee (famille_id, jour) select f.id, '2027-02-11' from famille f
  on conflict (famille_id, jour) do nothing;
insert into seance
  (journee_id, rang, matiere, titre, reference, consigne, minutes, lecon,
   par_adulte, origine)
select j.id, v.rang, v.matiere, v.titre, '', v.consigne, v.minutes, v.lecon,
       null, 'trame'
  from journee j
  cross join (values
    (1, 'maths', 'Les tables de multiplication', 'Dix multiplications dictées, à l’ardoise. On efface entre chaque. On redit celles qui ont hésité.', 15, ''),
    (2, 'maths', 'La division posée — on reprend', 'On relit le cours, puis on refait les exercices. Tes calculs sur ton brouillon, le résultat sur l’écran.', 35, 'm-p3-division'),
    (3, 'francais', 'Synonymes et contraires — on reprend', 'On relit le cours, puis on refait les exercices. Tes calculs sur ton brouillon, le résultat sur l’écran.', 25, 'f-p3-synonymes'),
    (4, 'francais', 'Les mots invariables', 'Apprendre dix mots invariables, puis les écrire sous la dictée.', 20, ''),
    (5, 'francais', 'Poésie', 'Lire un poème à voix haute, plusieurs fois. Repérer les rimes et les images. En apprendre quatre vers.', 30, ''),
    (6, 'sciences', 'Les phases de la Lune — on reprend', 'On relit le cours, puis on refait les exercices. Tes calculs sur ton brouillon, le résultat sur l’écran.', 30, 's-p3-lune'),
    (7, 'maison', 'Marche et observation', 'Une marche d’une demi-heure. Rapporter trois choses observées, à noter ou à dessiner.', 30, '')
  ) as v (rang, matiere, titre, consigne, minutes, lecon)
 where j.famille_id = (select id from famille) and j.jour = '2027-02-11'
   and not exists (select 1 from seance s where s.journee_id = j.id);

insert into journee (famille_id, jour) select f.id, '2027-02-12' from famille f
  on conflict (famille_id, jour) do nothing;
insert into seance
  (journee_id, rang, matiere, titre, reference, consigne, minutes, lecon,
   par_adulte, origine)
select j.id, v.rang, v.matiere, v.titre, '', v.consigne, v.minutes, v.lecon,
       null, 'trame'
  from journee j
  cross join (values
    (1, 'maths', 'Les doubles et les moitiés', 'Le double de 45, la moitié de 68, le double de 250… Dix questions, à l’oral.', 15, ''),
    (2, 'maths', 'Problèmes du jour', 'Trois problèmes sur le cahier. Pour chacun : ce qu’on cherche, ce qu’on sait, le calcul, la phrase de réponse.', 30, ''),
    (3, 'francais', 'Conjugaison', 'Trois verbes, aux quatre temps connus, à toutes les personnes. Sur le cahier, sans modèle.', 25, ''),
    (4, 'francais', 'Transformer des phrases', 'Mettre cinq phrases au pluriel, en respectant toute la chaîne d’accords. À l’écrit.', 20, ''),
    (5, 'francais', 'Lecture d’une bande dessinée', 'Une planche. Puis expliquer ce que les images racontent et que le texte ne dit pas.', 30, ''),
    (6, 'francais', 'Expliquer une règle', 'Réécrire avec tes mots une leçon de la semaine, pour quelqu’un qui ne l’a pas eue.', 25, ''),
    (7, 'maison', 'Jeux de raquette', 'Échanges contre un mur ou à deux. Compter les échanges tenus sans faute.', 30, '')
  ) as v (rang, matiere, titre, consigne, minutes, lecon)
 where j.famille_id = (select id from famille) and j.jour = '2027-02-12'
   and not exists (select 1 from seance s where s.journee_id = j.id);

insert into journee (famille_id, jour) select f.id, '2027-02-15' from famille f
  on conflict (famille_id, jour) do nothing;
insert into seance
  (journee_id, rang, matiere, titre, reference, consigne, minutes, lecon,
   par_adulte, origine)
select j.id, v.rang, v.matiere, v.titre, '', v.consigne, v.minutes, v.lecon,
       null, 'trame'
  from journee j
  cross join (values
    (1, 'maths', 'Les compléments à 100', 'Combien manque-t-il à 67 pour aller à 100 ? Dix questions. Puis les compléments à 1 000.', 15, ''),
    (2, 'maths', 'Les masses et les contenances — on reprend', 'On relit le cours, puis on refait les exercices. Tes calculs sur ton brouillon, le résultat sur l’écran.', 25, 'm-p3-masses-contenances'),
    (3, 'francais', 'Le dialogue dans un récit — on reprend', 'On relit le cours, puis on refait les exercices. Tes calculs sur ton brouillon, le résultat sur l’écran.', 25, 'f-p3-dialogue'),
    (4, 'francais', 'Dictée à trous', 'Le texte est écrit, il manque les terminaisons des verbes. On les complète en justifiant.', 20, ''),
    (5, 'francais', 'Lecture de théâtre', 'Une scène, lue à deux voix. Les didascalies ne se disent pas : elles se jouent.', 30, ''),
    (6, 'geographie', 'L’inégal accès à l’eau, à la santé, à l’école — on reprend', 'On relit le cours, puis on refait les exercices. Tes calculs sur ton brouillon, le résultat sur l’écran.', 30, 'g-p3-acces'),
    (7, 'maison', 'Danse et rythme', 'Suivre une pulsation, inventer une suite de mouvements de huit temps, la refaire à l’identique.', 30, '')
  ) as v (rang, matiere, titre, consigne, minutes, lecon)
 where j.famille_id = (select id from famille) and j.jour = '2027-02-15'
   and not exists (select 1 from seance s where s.journee_id = j.id);

insert into journee (famille_id, jour) select f.id, '2027-02-16' from famille f
  on conflict (famille_id, jour) do nothing;
insert into seance
  (journee_id, rang, matiere, titre, reference, consigne, minutes, lecon,
   par_adulte, origine)
select j.id, v.rang, v.matiere, v.titre, '', v.consigne, v.minutes, v.lecon,
       null, 'trame'
  from journee j
  cross join (values
    (1, 'maths', 'Ajouter 9, 19, 29', 'On ajoute la dizaine ronde et on retire 1. Dix questions, en disant la procédure à voix haute.', 15, ''),
    (2, 'maths', 'Géométrie : tracer', 'Un programme de construction à suivre à la règle, à l’équerre et au compas. La précision compte.', 30, ''),
    (3, 'francais', 'Les homophones', 'Un texte à trous : a/à, est/et, son/sont, ont/on. Justifier chaque choix par le test de remplacement.', 25, ''),
    (4, 'francais', 'Auto-dictée', 'Apprendre quatre lignes par cœur la veille, les écrire de mémoire aujourd’hui.', 20, ''),
    (5, 'francais', 'Lecture libre', 'Le livre que tu veux, sans compte à rendre. On te demande seulement si tu as aimé, et pourquoi.', 30, ''),
    (6, 'francais', 'Inventer un problème', 'Écrire un problème de mathématiques à deux étapes, avec sa solution sur une autre feuille.', 25, ''),
    (7, 'maison', 'Jardinage ou bricolage', 'Planter, arroser, mesurer, réparer. Le travail des mains compte autant que le reste.', 30, '')
  ) as v (rang, matiere, titre, consigne, minutes, lecon)
 where j.famille_id = (select id from famille) and j.jour = '2027-02-16'
   and not exists (select 1 from seance s where s.journee_id = j.id);

insert into journee (famille_id, jour) select f.id, '2027-02-17' from famille f
  on conflict (famille_id, jour) do nothing;
insert into seance
  (journee_id, rang, matiere, titre, reference, consigne, minutes, lecon,
   par_adulte, origine)
select j.id, v.rang, v.matiere, v.titre, '', v.consigne, v.minutes, v.lecon,
       null, 'trame'
  from journee j
  cross join (values
    (1, 'maths', 'Multiplier par 10, 100, 1 000', 'Dix questions rapides. Puis diviser par 10 : 320 ÷ 10, 4 500 ÷ 10.', 15, ''),
    (2, 'histoire', 'Louis XIV, Versailles et la société d’ordres — on reprend', 'On relit le cours, puis on refait les exercices. Tes calculs sur ton brouillon, le résultat sur l’écran.', 30, 'h-p3-louis-xiv'),
    (3, 'maison', 'Dessin d’observation', 'Dessiner un objet réel en le regardant, pas de mémoire. Vingt minutes sur le même objet.', 45, '')
  ) as v (rang, matiere, titre, consigne, minutes, lecon)
 where j.famille_id = (select id from famille) and j.jour = '2027-02-17'
   and not exists (select 1 from seance s where s.journee_id = j.id);

insert into journee (famille_id, jour) select f.id, '2027-02-18' from famille f
  on conflict (famille_id, jour) do nothing;
insert into seance
  (journee_id, rang, matiere, titre, reference, consigne, minutes, lecon,
   par_adulte, origine)
select j.id, v.rang, v.matiere, v.titre, '', v.consigne, v.minutes, v.lecon,
       null, 'trame'
  from journee j
  cross join (values
    (1, 'maths', 'Multiplier par 4 et par 8', 'Par 4, c’est doubler deux fois. Par 8, trois fois. Dix questions en disant les étapes.', 15, ''),
    (2, 'maths', 'Le périmètre — on reprend', 'On relit le cours, puis on refait les exercices. Tes calculs sur ton brouillon, le résultat sur l’écran.', 25, 'm-p3-perimetre'),
    (3, 'francais', 'Reconnaître un poème, une pièce, un récit — on reprend', 'On relit le cours, puis on refait les exercices. Tes calculs sur ton brouillon, le résultat sur l’écran.', 25, 'f-p3-genres'),
    (4, 'francais', 'Dictée de phrases', 'Trois phrases. On souligne les verbes et on entoure les sujets avant de corriger.', 20, ''),
    (5, 'francais', 'Lecture silencieuse', 'Vingt minutes dans le livre en cours, puis raconter ce qui vient de se passer.', 30, ''),
    (6, 'francais', 'Raconter sa journée d’hier', 'Dix lignes au passé. Vérifier que les temps ne changent pas en cours de route.', 25, ''),
    (7, 'maison', 'Jeux de ballon', 'Passes, tirs, jonglages. Compter les réussites de suite, battre son propre score.', 30, '')
  ) as v (rang, matiere, titre, consigne, minutes, lecon)
 where j.famille_id = (select id from famille) and j.jour = '2027-02-18'
   and not exists (select 1 from seance s where s.journee_id = j.id);

insert into journee (famille_id, jour) select f.id, '2027-02-19' from famille f
  on conflict (famille_id, jour) do nothing;
insert into seance
  (journee_id, rang, matiere, titre, reference, consigne, minutes, lecon,
   par_adulte, origine)
select j.id, v.rang, v.matiere, v.titre, '', v.consigne, v.minutes, v.lecon,
       null, 'trame'
  from journee j
  cross join (values
    (1, 'maths', 'Multiplier par 5 et par 50', 'Par 5, c’est la moitié de par 10. Par 50, la moitié de par 100. Dix questions.', 15, ''),
    (2, 'maths', 'Opérations posées', 'Quatre additions, quatre soustractions, deux multiplications. Estimer avant, vérifier après.', 30, ''),
    (3, 'francais', 'Analyser des phrases', 'Cinq phrases : souligner le sujet, entourer le verbe, encadrer les compléments. Dire lesquels se déplacent.', 25, ''),
    (4, 'francais', 'Copie soignée', 'Copier huit lignes d’un texte au choix, le plus soigneusement possible. On relit avant de rendre.', 20, ''),
    (5, 'francais', 'Lecture et questions', 'Un texte court, puis cinq questions : trois sur ce qui est écrit, deux sur ce qui se déduit.', 30, ''),
    (6, 'francais', 'Écrire un dialogue', 'Deux personnages, six répliques. Tirets, verbes de parole variés, une ligne par personne.', 25, ''),
    (7, 'maison', 'Vélo', 'Une sortie. Repérer le trajet sur un plan avant de partir, puis le raconter au retour.', 30, '')
  ) as v (rang, matiere, titre, consigne, minutes, lecon)
 where j.famille_id = (select id from famille) and j.jour = '2027-02-19'
   and not exists (select 1 from seance s where s.journee_id = j.id);

insert into journee (famille_id, jour) select f.id, '2027-03-08' from famille f
  on conflict (famille_id, jour) do nothing;
insert into seance
  (journee_id, rang, matiere, titre, reference, consigne, minutes, lecon,
   par_adulte, origine)
select j.id, v.rang, v.matiere, v.titre, '', v.consigne, v.minutes, v.lecon,
       null, 'trame'
  from journee j
  cross join (values
    (1, 'maths', 'Les fractions d’une quantité', 'La moitié de 36, le tiers de 24, les trois quarts de 20. Dix questions à l’oral.', 15, ''),
    (2, 'maths', 'Les aires', 'Lis la leçon, puis fais les exercices. Tes calculs sur ton brouillon, le résultat sur l’écran.', 30, 'm-p4-aires'),
    (3, 'francais', 'Les verbes qui changent de radical', 'Lis la leçon, puis fais les exercices. Tes calculs sur ton brouillon, le résultat sur l’écran.', 25, 'f-p4-radical'),
    (4, 'francais', 'Dictée préparée', 'Le texte a été lu la veille. On le dicte, puis on compare avec l’original.', 20, ''),
    (5, 'francais', 'Lecture d’un documentaire', 'Une double page documentaire. Relever la nature et la source du document avant de lire.', 30, ''),
    (6, 'emc', 'L’égalité entre les filles et les garçons', 'Lis la leçon, puis fais les exercices. Tes calculs sur ton brouillon, le résultat sur l’écran.', 30, 'e-p4-egalite'),
    (7, 'maison', 'Parcours et équilibre', 'Un parcours à installer soi-même : sauter, grimper, tenir en équilibre, ramper.', 30, '')
  ) as v (rang, matiere, titre, consigne, minutes, lecon)
 where j.famille_id = (select id from famille) and j.jour = '2027-03-08'
   and not exists (select 1 from seance s where s.journee_id = j.id);

insert into journee (famille_id, jour) select f.id, '2027-03-09' from famille f
  on conflict (famille_id, jour) do nothing;
insert into seance
  (journee_id, rang, matiere, titre, reference, consigne, minutes, lecon,
   par_adulte, origine)
select j.id, v.rang, v.matiere, v.titre, '', v.consigne, v.minutes, v.lecon,
       null, 'trame'
  from journee j
  cross join (values
    (1, 'maths', 'Les problèmes en une phrase', 'Cinq problèmes dictés, très courts. La réponse sur l’ardoise, sans écrire le calcul.', 15, ''),
    (2, 'maths', 'Reprendre la leçon de maths', 'Refaire les exercices de la dernière leçon de maths, sur le cahier cette fois. Comparer avec ce qui avait été trouvé.', 30, ''),
    (3, 'francais', 'Reprendre la leçon de français', 'Refaire les exercices de la dernière leçon de français, sur le cahier.', 25, ''),
    (4, 'francais', 'Les mots invariables', 'Apprendre dix mots invariables, puis les écrire sous la dictée.', 20, ''),
    (5, 'francais', 'Poésie', 'Lire un poème à voix haute, plusieurs fois. Repérer les rimes et les images. En apprendre quatre vers.', 30, ''),
    (6, 'sciences', 'Qu’est-ce qu’une espèce ?', 'Lis la leçon, puis fais les exercices. Tes calculs sur ton brouillon, le résultat sur l’écran.', 30, 's-p4-espece'),
    (7, 'maison', 'Marche et observation', 'Une marche d’une demi-heure. Rapporter trois choses observées, à noter ou à dessiner.', 30, '')
  ) as v (rang, matiere, titre, consigne, minutes, lecon)
 where j.famille_id = (select id from famille) and j.jour = '2027-03-09'
   and not exists (select 1 from seance s where s.journee_id = j.id);

insert into journee (famille_id, jour) select f.id, '2027-03-10' from famille f
  on conflict (famille_id, jour) do nothing;
insert into seance
  (journee_id, rang, matiere, titre, reference, consigne, minutes, lecon,
   par_adulte, origine)
select j.id, v.rang, v.matiere, v.titre, '', v.consigne, v.minutes, v.lecon,
       null, 'trame'
  from journee j
  cross join (values
    (1, 'maths', 'Encadrer et arrondir', 'Entre quels milliers se trouve 6 480 ? Quel est l’arrondi de 12,94 ? Dix questions.', 15, ''),
    (2, 'arts', 'Écouter une musique', 'Lis la leçon, puis fais les exercices. Tes calculs sur ton brouillon, le résultat sur l’écran.', 25, 'ar-p4-musique'),
    (3, 'maison', 'Un projet à suivre', 'Reprendre un projet commencé un autre mercredi et l’avancer d’un cran. Tout ne se finit pas en un jour.', 45, '')
  ) as v (rang, matiere, titre, consigne, minutes, lecon)
 where j.famille_id = (select id from famille) and j.jour = '2027-03-10'
   and not exists (select 1 from seance s where s.journee_id = j.id);

insert into journee (famille_id, jour) select f.id, '2027-03-11' from famille f
  on conflict (famille_id, jour) do nothing;
insert into seance
  (journee_id, rang, matiere, titre, reference, consigne, minutes, lecon,
   par_adulte, origine)
select j.id, v.rang, v.matiere, v.titre, '', v.consigne, v.minutes, v.lecon,
       null, 'trame'
  from journee j
  cross join (values
    (1, 'maths', 'Les unités de mesure', 'Combien de grammes dans 2 kg 500 ? De centimètres dans 3 m 50 ? Dix questions.', 15, ''),
    (2, 'maths', 'Les angles', 'Lis la leçon, puis fais les exercices. Tes calculs sur ton brouillon, le résultat sur l’écran.', 25, 'm-p4-angles'),
    (3, 'francais', 'Transformer une phrase sans casser les accords', 'Lis la leçon, puis fais les exercices. Tes calculs sur ton brouillon, le résultat sur l’écran.', 30, 'f-p4-chaine'),
    (4, 'francais', 'Dictée à trous', 'Le texte est écrit, il manque les terminaisons des verbes. On les complète en justifiant.', 20, ''),
    (5, 'francais', 'Lecture de théâtre', 'Une scène, lue à deux voix. Les didascalies ne se disent pas : elles se jouent.', 30, ''),
    (6, 'histoire', 'Les grandes explorations', 'Lis la leçon, puis fais les exercices. Tes calculs sur ton brouillon, le résultat sur l’écran.', 30, 'h-p4-explorations'),
    (7, 'maison', 'Danse et rythme', 'Suivre une pulsation, inventer une suite de mouvements de huit temps, la refaire à l’identique.', 30, '')
  ) as v (rang, matiere, titre, consigne, minutes, lecon)
 where j.famille_id = (select id from famille) and j.jour = '2027-03-11'
   and not exists (select 1 from seance s where s.journee_id = j.id);

insert into journee (famille_id, jour) select f.id, '2027-03-12' from famille f
  on conflict (famille_id, jour) do nothing;
insert into seance
  (journee_id, rang, matiere, titre, reference, consigne, minutes, lecon,
   par_adulte, origine)
select j.id, v.rang, v.matiere, v.titre, '', v.consigne, v.minutes, v.lecon,
       null, 'trame'
  from journee j
  cross join (values
    (1, 'maths', 'Les durées', 'De 8 h 45 à 12 h 30, combien de temps ? Cinq calculs de durée, à l’oral.', 15, ''),
    (2, 'maths', 'Le nombre du jour', 'Un nombre au tableau. Le décomposer de cinq façons, l’encadrer, dire son nombre de centaines, le doubler.', 30, ''),
    (3, 'francais', 'Le dictionnaire', 'Chercher cinq mots rencontrés cette semaine. Relever la nature du mot et ses différents sens.', 25, ''),
    (4, 'francais', 'Auto-dictée', 'Apprendre quatre lignes par cœur la veille, les écrire de mémoire aujourd’hui.', 20, ''),
    (5, 'francais', 'Lecture libre', 'Le livre que tu veux, sans compte à rendre. On te demande seulement si tu as aimé, et pourquoi.', 30, ''),
    (6, 'arts', 'Écouter une musique — on reprend', 'On relit le cours, puis on refait les exercices. Tes calculs sur ton brouillon, le résultat sur l’écran.', 25, 'ar-p4-musique'),
    (7, 'maison', 'Jardinage ou bricolage', 'Planter, arroser, mesurer, réparer. Le travail des mains compte autant que le reste.', 30, '')
  ) as v (rang, matiere, titre, consigne, minutes, lecon)
 where j.famille_id = (select id from famille) and j.jour = '2027-03-12'
   and not exists (select 1 from seance s where s.journee_id = j.id);

insert into journee (famille_id, jour) select f.id, '2027-03-15' from famille f
  on conflict (famille_id, jour) do nothing;
insert into seance
  (journee_id, rang, matiere, titre, reference, consigne, minutes, lecon,
   par_adulte, origine)
select j.id, v.rang, v.matiere, v.titre, '', v.consigne, v.minutes, v.lecon,
       null, 'trame'
  from journee j
  cross join (values
    (1, 'maths', 'Les tables de multiplication', 'Dix multiplications dictées, à l’ardoise. On efface entre chaque. On redit celles qui ont hésité.', 15, ''),
    (2, 'maths', 'L’heure et les durées', 'Lis la leçon, puis fais les exercices. Tes calculs sur ton brouillon, le résultat sur l’écran.', 30, 'm-p4-durees'),
    (3, 'francais', 'Les mots à plusieurs sens', 'Lis la leçon, puis fais les exercices. Tes calculs sur ton brouillon, le résultat sur l’écran.', 25, 'f-p4-polysemie'),
    (4, 'francais', 'Dictée de mots', 'Quinze mots de la liste en cours. On corrige ensemble, et on réécrit trois fois ceux qui ont hésité.', 20, ''),
    (5, 'francais', 'Lecture à voix haute', 'Une page préparée, lue à voix haute en respectant la ponctuation. On marque au crayon où respirer.', 30, ''),
    (6, 'sciences', 'Comment grandissent les animaux', 'Lis la leçon, puis fais les exercices. Tes calculs sur ton brouillon, le résultat sur l’écran.', 30, 's-p4-developpement'),
    (7, 'maison', 'Course et endurance', 'Courir sans s’arrêter, en augmentant un peu chaque semaine. On chronomètre, on ne compare à personne.', 30, '')
  ) as v (rang, matiere, titre, consigne, minutes, lecon)
 where j.famille_id = (select id from famille) and j.jour = '2027-03-15'
   and not exists (select 1 from seance s where s.journee_id = j.id);

insert into journee (famille_id, jour) select f.id, '2027-03-16' from famille f
  on conflict (famille_id, jour) do nothing;
insert into seance
  (journee_id, rang, matiere, titre, reference, consigne, minutes, lecon,
   par_adulte, origine)
select j.id, v.rang, v.matiere, v.titre, '', v.consigne, v.minutes, v.lecon,
       null, 'trame'
  from journee j
  cross join (values
    (1, 'maths', 'Les doubles et les moitiés', 'Le double de 45, la moitié de 68, le double de 250… Dix questions, à l’oral.', 15, ''),
    (2, 'maths', 'Problèmes du jour', 'Trois problèmes sur le cahier. Pour chacun : ce qu’on cherche, ce qu’on sait, le calcul, la phrase de réponse.', 30, ''),
    (3, 'francais', 'Conjugaison', 'Trois verbes, aux quatre temps connus, à toutes les personnes. Sur le cahier, sans modèle.', 25, ''),
    (4, 'francais', 'Dictée de phrases', 'Trois phrases. On souligne les verbes et on entoure les sujets avant de corriger.', 20, ''),
    (5, 'francais', 'Lecture silencieuse', 'Vingt minutes dans le livre en cours, puis raconter ce qui vient de se passer.', 30, ''),
    (6, 'francais', 'Raconter sa journée d’hier', 'Dix lignes au passé. Vérifier que les temps ne changent pas en cours de route.', 25, ''),
    (7, 'maison', 'Jeux de ballon', 'Passes, tirs, jonglages. Compter les réussites de suite, battre son propre score.', 30, '')
  ) as v (rang, matiere, titre, consigne, minutes, lecon)
 where j.famille_id = (select id from famille) and j.jour = '2027-03-16'
   and not exists (select 1 from seance s where s.journee_id = j.id);

insert into journee (famille_id, jour) select f.id, '2027-03-17' from famille f
  on conflict (famille_id, jour) do nothing;
insert into seance
  (journee_id, rang, matiere, titre, reference, consigne, minutes, lecon,
   par_adulte, origine)
select j.id, v.rang, v.matiere, v.titre, '', v.consigne, v.minutes, v.lecon,
       null, 'trame'
  from journee j
  cross join (values
    (1, 'maths', 'Les compléments à 100', 'Combien manque-t-il à 67 pour aller à 100 ? Dix questions. Puis les compléments à 1 000.', 15, ''),
    (2, 'sciences', 'Les écosystèmes et les chaînes alimentaires', 'Lis la leçon, puis fais les exercices. Tes calculs sur ton brouillon, le résultat sur l’écran.', 30, 's-p4-ecosystemes'),
    (3, 'maison', 'Une expérience', 'Mélanger, dissoudre, filtrer, peser. Écrire ce qu’on croit qu’il va se passer AVANT de le faire, puis comparer.', 45, '')
  ) as v (rang, matiere, titre, consigne, minutes, lecon)
 where j.famille_id = (select id from famille) and j.jour = '2027-03-17'
   and not exists (select 1 from seance s where s.journee_id = j.id);

insert into journee (famille_id, jour) select f.id, '2027-03-18' from famille f
  on conflict (famille_id, jour) do nothing;
insert into seance
  (journee_id, rang, matiere, titre, reference, consigne, minutes, lecon,
   par_adulte, origine)
select j.id, v.rang, v.matiere, v.titre, '', v.consigne, v.minutes, v.lecon,
       null, 'trame'
  from journee j
  cross join (values
    (1, 'maths', 'Ajouter 9, 19, 29', 'On ajoute la dizaine ronde et on retire 1. Dix questions, en disant la procédure à voix haute.', 15, ''),
    (2, 'maths', 'La proportionnalité', 'Lis la leçon, puis fais les exercices. Tes calculs sur ton brouillon, le résultat sur l’écran.', 30, 'm-p4-proportionnalite'),
    (3, 'francais', 'Qu’est-ce qu’un héros ?', 'Lis la leçon, puis fais les exercices. Tes calculs sur ton brouillon, le résultat sur l’écran.', 30, 'f-p4-heros'),
    (4, 'francais', 'Dictée préparée', 'Le texte a été lu la veille. On le dicte, puis on compare avec l’original.', 20, ''),
    (5, 'francais', 'Lecture d’un documentaire', 'Une double page documentaire. Relever la nature et la source du document avant de lire.', 30, ''),
    (6, 'francais', 'Décrire un lieu', 'Dix lignes sur un endroit que tu connais. Au moins trois adjectifs qui servent vraiment.', 25, ''),
    (7, 'maison', 'Parcours et équilibre', 'Un parcours à installer soi-même : sauter, grimper, tenir en équilibre, ramper.', 30, '')
  ) as v (rang, matiere, titre, consigne, minutes, lecon)
 where j.famille_id = (select id from famille) and j.jour = '2027-03-18'
   and not exists (select 1 from seance s where s.journee_id = j.id);

insert into journee (famille_id, jour) select f.id, '2027-03-19' from famille f
  on conflict (famille_id, jour) do nothing;
insert into seance
  (journee_id, rang, matiere, titre, reference, consigne, minutes, lecon,
   par_adulte, origine)
select j.id, v.rang, v.matiere, v.titre, '', v.consigne, v.minutes, v.lecon,
       null, 'trame'
  from journee j
  cross join (values
    (1, 'maths', 'Multiplier par 10, 100, 1 000', 'Dix questions rapides. Puis diviser par 10 : 320 ÷ 10, 4 500 ÷ 10.', 15, ''),
    (2, 'maths', 'Mesurer pour de vrai', 'Mesurer des objets de la maison, noter en deux unités différentes, comparer aux estimations faites avant.', 30, ''),
    (3, 'francais', 'Vocabulaire', 'Dix mots : trouver un synonyme, un contraire, et un mot de la même famille pour chacun.', 25, ''),
    (4, 'francais', 'Les mots invariables', 'Apprendre dix mots invariables, puis les écrire sous la dictée.', 20, ''),
    (5, 'francais', 'Poésie', 'Lire un poème à voix haute, plusieurs fois. Repérer les rimes et les images. En apprendre quatre vers.', 30, ''),
    (6, 'anglais', 'La nourriture, et ce qu’on aime', 'Lis la leçon, puis fais les exercices. Tes calculs sur ton brouillon, le résultat sur l’écran.', 25, 'a-p4-nourriture'),
    (7, 'maison', 'Marche et observation', 'Une marche d’une demi-heure. Rapporter trois choses observées, à noter ou à dessiner.', 30, '')
  ) as v (rang, matiere, titre, consigne, minutes, lecon)
 where j.famille_id = (select id from famille) and j.jour = '2027-03-19'
   and not exists (select 1 from seance s where s.journee_id = j.id);

insert into journee (famille_id, jour) select f.id, '2027-03-22' from famille f
  on conflict (famille_id, jour) do nothing;
insert into seance
  (journee_id, rang, matiere, titre, reference, consigne, minutes, lecon,
   par_adulte, origine)
select j.id, v.rang, v.matiere, v.titre, '', v.consigne, v.minutes, v.lecon,
       null, 'trame'
  from journee j
  cross join (values
    (1, 'maths', 'Multiplier par 4 et par 8', 'Par 4, c’est doubler deux fois. Par 8, trois fois. Dix questions en disant les étapes.', 15, ''),
    (2, 'maths', 'Le calcul mental : les chemins courts', 'Lis la leçon, puis fais les exercices. Tes calculs sur ton brouillon, le résultat sur l’écran.', 25, 'm-p4-calcul-mental'),
    (3, 'francais', 'Le goût des mots : la poésie', 'Lis la leçon, puis fais les exercices. Tes calculs sur ton brouillon, le résultat sur l’écran.', 25, 'f-p4-poesie'),
    (4, 'francais', 'Transformer des phrases', 'Mettre cinq phrases au pluriel, en respectant toute la chaîne d’accords. À l’écrit.', 20, ''),
    (5, 'francais', 'Lecture d’une bande dessinée', 'Une planche. Puis expliquer ce que les images racontent et que le texte ne dit pas.', 30, ''),
    (6, 'histoire', 'Les empires coloniaux et l’esclavage', 'Lis la leçon, puis fais les exercices. Tes calculs sur ton brouillon, le résultat sur l’écran.', 30, 'h-p4-colonisation'),
    (7, 'maison', 'Jeux de raquette', 'Échanges contre un mur ou à deux. Compter les échanges tenus sans faute.', 30, '')
  ) as v (rang, matiere, titre, consigne, minutes, lecon)
 where j.famille_id = (select id from famille) and j.jour = '2027-03-22'
   and not exists (select 1 from seance s where s.journee_id = j.id);

insert into journee (famille_id, jour) select f.id, '2027-03-23' from famille f
  on conflict (famille_id, jour) do nothing;
insert into seance
  (journee_id, rang, matiere, titre, reference, consigne, minutes, lecon,
   par_adulte, origine)
select j.id, v.rang, v.matiere, v.titre, '', v.consigne, v.minutes, v.lecon,
       null, 'trame'
  from journee j
  cross join (values
    (1, 'maths', 'Multiplier par 5 et par 50', 'Par 5, c’est la moitié de par 10. Par 50, la moitié de par 100. Dix questions.', 15, ''),
    (2, 'maths', 'Opérations posées', 'Quatre additions, quatre soustractions, deux multiplications. Estimer avant, vérifier après.', 30, ''),
    (3, 'francais', 'Analyser des phrases', 'Cinq phrases : souligner le sujet, entourer le verbe, encadrer les compléments. Dire lesquels se déplacent.', 25, ''),
    (4, 'francais', 'Dictée à trous', 'Le texte est écrit, il manque les terminaisons des verbes. On les complète en justifiant.', 20, ''),
    (5, 'francais', 'Lecture de théâtre', 'Une scène, lue à deux voix. Les didascalies ne se disent pas : elles se jouent.', 30, ''),
    (6, 'geographie', 'Comment se déplace-t-on dans le monde ?', 'Lis la leçon, puis fais les exercices. Tes calculs sur ton brouillon, le résultat sur l’écran.', 25, 'g-p4-se-deplacer'),
    (7, 'maison', 'Danse et rythme', 'Suivre une pulsation, inventer une suite de mouvements de huit temps, la refaire à l’identique.', 30, '')
  ) as v (rang, matiere, titre, consigne, minutes, lecon)
 where j.famille_id = (select id from famille) and j.jour = '2027-03-23'
   and not exists (select 1 from seance s where s.journee_id = j.id);

insert into journee (famille_id, jour) select f.id, '2027-03-24' from famille f
  on conflict (famille_id, jour) do nothing;
insert into seance
  (journee_id, rang, matiere, titre, reference, consigne, minutes, lecon,
   par_adulte, origine)
select j.id, v.rang, v.matiere, v.titre, '', v.consigne, v.minutes, v.lecon,
       null, 'trame'
  from journee j
  cross join (values
    (1, 'maths', 'Les fractions d’une quantité', 'La moitié de 36, le tiers de 24, les trois quarts de 20. Dix questions à l’oral.', 15, ''),
    (2, 'francais', 'Lecture et questions', 'Un texte court, puis cinq questions : trois sur ce qui est écrit, deux sur ce qui se déduit.', 30, ''),
    (3, 'maison', 'La boîte à pourquoi', 'Prendre une question que tu as posée cette semaine, chercher la réponse ensemble, et s’arrêter quand on ne sait plus.', 45, '')
  ) as v (rang, matiere, titre, consigne, minutes, lecon)
 where j.famille_id = (select id from famille) and j.jour = '2027-03-24'
   and not exists (select 1 from seance s where s.journee_id = j.id);

insert into journee (famille_id, jour) select f.id, '2027-03-25' from famille f
  on conflict (famille_id, jour) do nothing;
insert into seance
  (journee_id, rang, matiere, titre, reference, consigne, minutes, lecon,
   par_adulte, origine)
select j.id, v.rang, v.matiere, v.titre, '', v.consigne, v.minutes, v.lecon,
       null, 'trame'
  from journee j
  cross join (values
    (1, 'maths', 'Les problèmes en une phrase', 'Cinq problèmes dictés, très courts. La réponse sur l’ardoise, sans écrire le calcul.', 15, ''),
    (2, 'maths', 'Les tableaux et les graphiques', 'Lis la leçon, puis fais les exercices. Tes calculs sur ton brouillon, le résultat sur l’écran.', 25, 'm-p4-donnees'),
    (3, 'francais', 'Lire un document pour apprendre', 'Lis la leçon, puis fais les exercices. Tes calculs sur ton brouillon, le résultat sur l’écran.', 25, 'f-p4-documents'),
    (4, 'francais', 'Dictée de mots', 'Quinze mots de la liste en cours. On corrige ensemble, et on réécrit trois fois ceux qui ont hésité.', 20, ''),
    (5, 'francais', 'Lecture à voix haute', 'Une page préparée, lue à voix haute en respectant la ponctuation. On marque au crayon où respirer.', 30, ''),
    (6, 'sciences', 'Qu’est-ce qu’une espèce ? — on reprend', 'On relit le cours, puis on refait les exercices. Tes calculs sur ton brouillon, le résultat sur l’écran.', 30, 's-p4-espece'),
    (7, 'maison', 'Course et endurance', 'Courir sans s’arrêter, en augmentant un peu chaque semaine. On chronomètre, on ne compare à personne.', 30, '')
  ) as v (rang, matiere, titre, consigne, minutes, lecon)
 where j.famille_id = (select id from famille) and j.jour = '2027-03-25'
   and not exists (select 1 from seance s where s.journee_id = j.id);

insert into journee (famille_id, jour) select f.id, '2027-03-26' from famille f
  on conflict (famille_id, jour) do nothing;
insert into seance
  (journee_id, rang, matiere, titre, reference, consigne, minutes, lecon,
   par_adulte, origine)
select j.id, v.rang, v.matiere, v.titre, '', v.consigne, v.minutes, v.lecon,
       null, 'trame'
  from journee j
  cross join (values
    (1, 'maths', 'Encadrer et arrondir', 'Entre quels milliers se trouve 6 480 ? Quel est l’arrondi de 12,94 ? Dix questions.', 15, ''),
    (2, 'maths', 'Géométrie : tracer', 'Un programme de construction à suivre à la règle, à l’équerre et au compas. La précision compte.', 30, ''),
    (3, 'francais', 'Les homophones', 'Un texte à trous : a/à, est/et, son/sont, ont/on. Justifier chaque choix par le test de remplacement.', 25, ''),
    (4, 'francais', 'Dictée de phrases', 'Trois phrases. On souligne les verbes et on entoure les sujets avant de corriger.', 20, ''),
    (5, 'francais', 'Lecture silencieuse', 'Vingt minutes dans le livre en cours, puis raconter ce qui vient de se passer.', 30, ''),
    (6, 'anglais', 'Le temps qu’il fait et les saisons', 'Lis la leçon, puis fais les exercices. Tes calculs sur ton brouillon, le résultat sur l’écran.', 25, 'a-p4-meteo'),
    (7, 'maison', 'Jeux de ballon', 'Passes, tirs, jonglages. Compter les réussites de suite, battre son propre score.', 30, '')
  ) as v (rang, matiere, titre, consigne, minutes, lecon)
 where j.famille_id = (select id from famille) and j.jour = '2027-03-26'
   and not exists (select 1 from seance s where s.journee_id = j.id);

insert into journee (famille_id, jour) select f.id, '2027-03-30' from famille f
  on conflict (famille_id, jour) do nothing;
insert into seance
  (journee_id, rang, matiere, titre, reference, consigne, minutes, lecon,
   par_adulte, origine)
select j.id, v.rang, v.matiere, v.titre, '', v.consigne, v.minutes, v.lecon,
       null, 'trame'
  from journee j
  cross join (values
    (1, 'maths', 'Les unités de mesure', 'Combien de grammes dans 2 kg 500 ? De centimètres dans 3 m 50 ? Dix questions.', 15, ''),
    (2, 'maths', 'Mesurer pour de vrai', 'Mesurer des objets de la maison, noter en deux unités différentes, comparer aux estimations faites avant.', 30, ''),
    (3, 'francais', 'Vocabulaire', 'Dix mots : trouver un synonyme, un contraire, et un mot de la même famille pour chacun.', 25, ''),
    (4, 'francais', 'Copie soignée', 'Copier huit lignes d’un texte au choix, le plus soigneusement possible. On relit avant de rendre.', 20, ''),
    (5, 'francais', 'Lecture et questions', 'Un texte court, puis cinq questions : trois sur ce qui est écrit, deux sur ce qui se déduit.', 30, ''),
    (6, 'francais', 'Écrire un dialogue', 'Deux personnages, six répliques. Tirets, verbes de parole variés, une ligne par personne.', 25, ''),
    (7, 'maison', 'Vélo', 'Une sortie. Repérer le trajet sur un plan avant de partir, puis le raconter au retour.', 30, '')
  ) as v (rang, matiere, titre, consigne, minutes, lecon)
 where j.famille_id = (select id from famille) and j.jour = '2027-03-30'
   and not exists (select 1 from seance s where s.journee_id = j.id);

insert into journee (famille_id, jour) select f.id, '2027-03-31' from famille f
  on conflict (famille_id, jour) do nothing;
insert into seance
  (journee_id, rang, matiere, titre, reference, consigne, minutes, lecon,
   par_adulte, origine)
select j.id, v.rang, v.matiere, v.titre, '', v.consigne, v.minutes, v.lecon,
       null, 'trame'
  from journee j
  cross join (values
    (1, 'maths', 'Les durées', 'De 8 h 45 à 12 h 30, combien de temps ? Cinq calculs de durée, à l’oral.', 15, ''),
    (2, 'geographie', 'Deux façons de mesurer une distance', 'Lis la leçon, puis fais les exercices. Tes calculs sur ton brouillon, le résultat sur l’écran.', 30, 'g-p4-distances'),
    (3, 'maison', 'Construire quelque chose', 'Un objet qui marche : un pont en papier qui porte un livre, un moulin, un circuit. Croquis d’abord.', 45, '')
  ) as v (rang, matiere, titre, consigne, minutes, lecon)
 where j.famille_id = (select id from famille) and j.jour = '2027-03-31'
   and not exists (select 1 from seance s where s.journee_id = j.id);

insert into journee (famille_id, jour) select f.id, '2027-04-01' from famille f
  on conflict (famille_id, jour) do nothing;
insert into seance
  (journee_id, rang, matiere, titre, reference, consigne, minutes, lecon,
   par_adulte, origine)
select j.id, v.rang, v.matiere, v.titre, '', v.consigne, v.minutes, v.lecon,
       null, 'trame'
  from journee j
  cross join (values
    (1, 'maths', 'Les tables de multiplication', 'Dix multiplications dictées, à l’ardoise. On efface entre chaque. On redit celles qui ont hésité.', 15, ''),
    (2, 'maths', 'Les aires — on reprend', 'On relit le cours, puis on refait les exercices. Tes calculs sur ton brouillon, le résultat sur l’écran.', 30, 'm-p4-aires'),
    (3, 'francais', 'Les verbes qui changent de radical — on reprend', 'On relit le cours, puis on refait les exercices. Tes calculs sur ton brouillon, le résultat sur l’écran.', 25, 'f-p4-radical'),
    (4, 'francais', 'Les mots invariables', 'Apprendre dix mots invariables, puis les écrire sous la dictée.', 20, ''),
    (5, 'francais', 'Poésie', 'Lire un poème à voix haute, plusieurs fois. Repérer les rimes et les images. En apprendre quatre vers.', 30, ''),
    (6, 'sciences', 'Comment grandissent les animaux — on reprend', 'On relit le cours, puis on refait les exercices. Tes calculs sur ton brouillon, le résultat sur l’écran.', 30, 's-p4-developpement'),
    (7, 'maison', 'Marche et observation', 'Une marche d’une demi-heure. Rapporter trois choses observées, à noter ou à dessiner.', 30, '')
  ) as v (rang, matiere, titre, consigne, minutes, lecon)
 where j.famille_id = (select id from famille) and j.jour = '2027-04-01'
   and not exists (select 1 from seance s where s.journee_id = j.id);

insert into journee (famille_id, jour) select f.id, '2027-04-02' from famille f
  on conflict (famille_id, jour) do nothing;
insert into seance
  (journee_id, rang, matiere, titre, reference, consigne, minutes, lecon,
   par_adulte, origine)
select j.id, v.rang, v.matiere, v.titre, '', v.consigne, v.minutes, v.lecon,
       null, 'trame'
  from journee j
  cross join (values
    (1, 'maths', 'Les doubles et les moitiés', 'Le double de 45, la moitié de 68, le double de 250… Dix questions, à l’oral.', 15, ''),
    (2, 'maths', 'Les angles — on reprend', 'On relit le cours, puis on refait les exercices. Tes calculs sur ton brouillon, le résultat sur l’écran.', 25, 'm-p4-angles'),
    (3, 'francais', 'Transformer une phrase sans casser les accords — on reprend', 'On relit le cours, puis on refait les exercices. Tes calculs sur ton brouillon, le résultat sur l’écran.', 30, 'f-p4-chaine'),
    (4, 'francais', 'Transformer des phrases', 'Mettre cinq phrases au pluriel, en respectant toute la chaîne d’accords. À l’écrit.', 20, ''),
    (5, 'francais', 'Lecture d’une bande dessinée', 'Une planche. Puis expliquer ce que les images racontent et que le texte ne dit pas.', 30, ''),
    (6, 'histoire', 'Les grandes explorations — on reprend', 'On relit le cours, puis on refait les exercices. Tes calculs sur ton brouillon, le résultat sur l’écran.', 30, 'h-p4-explorations'),
    (7, 'maison', 'Jeux de raquette', 'Échanges contre un mur ou à deux. Compter les échanges tenus sans faute.', 30, '')
  ) as v (rang, matiere, titre, consigne, minutes, lecon)
 where j.famille_id = (select id from famille) and j.jour = '2027-04-02'
   and not exists (select 1 from seance s where s.journee_id = j.id);

insert into journee (famille_id, jour) select f.id, '2027-04-05' from famille f
  on conflict (famille_id, jour) do nothing;
insert into seance
  (journee_id, rang, matiere, titre, reference, consigne, minutes, lecon,
   par_adulte, origine)
select j.id, v.rang, v.matiere, v.titre, '', v.consigne, v.minutes, v.lecon,
       null, 'trame'
  from journee j
  cross join (values
    (1, 'maths', 'Les compléments à 100', 'Combien manque-t-il à 67 pour aller à 100 ? Dix questions. Puis les compléments à 1 000.', 15, ''),
    (2, 'maths', 'Reprendre la leçon de maths', 'Refaire les exercices de la dernière leçon de maths, sur le cahier cette fois. Comparer avec ce qui avait été trouvé.', 30, ''),
    (3, 'francais', 'Reprendre la leçon de français', 'Refaire les exercices de la dernière leçon de français, sur le cahier.', 25, ''),
    (4, 'francais', 'Dictée à trous', 'Le texte est écrit, il manque les terminaisons des verbes. On les complète en justifiant.', 20, ''),
    (5, 'francais', 'Lecture de théâtre', 'Une scène, lue à deux voix. Les didascalies ne se disent pas : elles se jouent.', 30, ''),
    (6, 'geographie', 'Comment se déplace-t-on dans le monde ? — on reprend', 'On relit le cours, puis on refait les exercices. Tes calculs sur ton brouillon, le résultat sur l’écran.', 25, 'g-p4-se-deplacer'),
    (7, 'maison', 'Danse et rythme', 'Suivre une pulsation, inventer une suite de mouvements de huit temps, la refaire à l’identique.', 30, '')
  ) as v (rang, matiere, titre, consigne, minutes, lecon)
 where j.famille_id = (select id from famille) and j.jour = '2027-04-05'
   and not exists (select 1 from seance s where s.journee_id = j.id);

insert into journee (famille_id, jour) select f.id, '2027-04-06' from famille f
  on conflict (famille_id, jour) do nothing;
insert into seance
  (journee_id, rang, matiere, titre, reference, consigne, minutes, lecon,
   par_adulte, origine)
select j.id, v.rang, v.matiere, v.titre, '', v.consigne, v.minutes, v.lecon,
       null, 'trame'
  from journee j
  cross join (values
    (1, 'maths', 'Ajouter 9, 19, 29', 'On ajoute la dizaine ronde et on retire 1. Dix questions, en disant la procédure à voix haute.', 15, ''),
    (2, 'maths', 'L’heure et les durées — on reprend', 'On relit le cours, puis on refait les exercices. Tes calculs sur ton brouillon, le résultat sur l’écran.', 30, 'm-p4-durees'),
    (3, 'francais', 'Les mots à plusieurs sens — on reprend', 'On relit le cours, puis on refait les exercices. Tes calculs sur ton brouillon, le résultat sur l’écran.', 25, 'f-p4-polysemie'),
    (4, 'francais', 'Auto-dictée', 'Apprendre quatre lignes par cœur la veille, les écrire de mémoire aujourd’hui.', 20, ''),
    (5, 'francais', 'Lecture libre', 'Le livre que tu veux, sans compte à rendre. On te demande seulement si tu as aimé, et pourquoi.', 30, ''),
    (6, 'sciences', 'Les écosystèmes et les chaînes alimentaires — on reprend', 'On relit le cours, puis on refait les exercices. Tes calculs sur ton brouillon, le résultat sur l’écran.', 30, 's-p4-ecosystemes'),
    (7, 'maison', 'Jardinage ou bricolage', 'Planter, arroser, mesurer, réparer. Le travail des mains compte autant que le reste.', 30, '')
  ) as v (rang, matiere, titre, consigne, minutes, lecon)
 where j.famille_id = (select id from famille) and j.jour = '2027-04-06'
   and not exists (select 1 from seance s where s.journee_id = j.id);

insert into journee (famille_id, jour) select f.id, '2027-04-07' from famille f
  on conflict (famille_id, jour) do nothing;
insert into seance
  (journee_id, rang, matiere, titre, reference, consigne, minutes, lecon,
   par_adulte, origine)
select j.id, v.rang, v.matiere, v.titre, '', v.consigne, v.minutes, v.lecon,
       null, 'trame'
  from journee j
  cross join (values
    (1, 'maths', 'Multiplier par 10, 100, 1 000', 'Dix questions rapides. Puis diviser par 10 : 320 ÷ 10, 4 500 ÷ 10.', 15, ''),
    (2, 'anglais', 'La nourriture, et ce qu’on aime — on reprend', 'On relit le cours, puis on refait les exercices. Tes calculs sur ton brouillon, le résultat sur l’écran.', 25, 'a-p4-nourriture'),
    (3, 'maison', 'Cuisine et mesures', 'Une recette, en pesant et en convertissant. Doubler les quantités pour voir ce que ça change.', 45, '')
  ) as v (rang, matiere, titre, consigne, minutes, lecon)
 where j.famille_id = (select id from famille) and j.jour = '2027-04-07'
   and not exists (select 1 from seance s where s.journee_id = j.id);

insert into journee (famille_id, jour) select f.id, '2027-04-08' from famille f
  on conflict (famille_id, jour) do nothing;
insert into seance
  (journee_id, rang, matiere, titre, reference, consigne, minutes, lecon,
   par_adulte, origine)
select j.id, v.rang, v.matiere, v.titre, '', v.consigne, v.minutes, v.lecon,
       null, 'trame'
  from journee j
  cross join (values
    (1, 'maths', 'Multiplier par 4 et par 8', 'Par 4, c’est doubler deux fois. Par 8, trois fois. Dix questions en disant les étapes.', 15, ''),
    (2, 'maths', 'Le nombre du jour', 'Un nombre au tableau. Le décomposer de cinq façons, l’encadrer, dire son nombre de centaines, le doubler.', 30, ''),
    (3, 'francais', 'Le dictionnaire', 'Chercher cinq mots rencontrés cette semaine. Relever la nature du mot et ses différents sens.', 25, ''),
    (4, 'francais', 'Dictée de phrases', 'Trois phrases. On souligne les verbes et on entoure les sujets avant de corriger.', 20, ''),
    (5, 'francais', 'Lecture silencieuse', 'Vingt minutes dans le livre en cours, puis raconter ce qui vient de se passer.', 30, ''),
    (6, 'francais', 'Raconter sa journée d’hier', 'Dix lignes au passé. Vérifier que les temps ne changent pas en cours de route.', 25, ''),
    (7, 'maison', 'Jeux de ballon', 'Passes, tirs, jonglages. Compter les réussites de suite, battre son propre score.', 30, '')
  ) as v (rang, matiere, titre, consigne, minutes, lecon)
 where j.famille_id = (select id from famille) and j.jour = '2027-04-08'
   and not exists (select 1 from seance s where s.journee_id = j.id);

insert into journee (famille_id, jour) select f.id, '2027-04-09' from famille f
  on conflict (famille_id, jour) do nothing;
insert into seance
  (journee_id, rang, matiere, titre, reference, consigne, minutes, lecon,
   par_adulte, origine)
select j.id, v.rang, v.matiere, v.titre, '', v.consigne, v.minutes, v.lecon,
       null, 'trame'
  from journee j
  cross join (values
    (1, 'maths', 'Multiplier par 5 et par 50', 'Par 5, c’est la moitié de par 10. Par 50, la moitié de par 100. Dix questions.', 15, ''),
    (2, 'maths', 'La proportionnalité — on reprend', 'On relit le cours, puis on refait les exercices. Tes calculs sur ton brouillon, le résultat sur l’écran.', 30, 'm-p4-proportionnalite'),
    (3, 'francais', 'Qu’est-ce qu’un héros ? — on reprend', 'On relit le cours, puis on refait les exercices. Tes calculs sur ton brouillon, le résultat sur l’écran.', 30, 'f-p4-heros'),
    (4, 'francais', 'Copie soignée', 'Copier huit lignes d’un texte au choix, le plus soigneusement possible. On relit avant de rendre.', 20, ''),
    (5, 'francais', 'Lecture et questions', 'Un texte court, puis cinq questions : trois sur ce qui est écrit, deux sur ce qui se déduit.', 30, ''),
    (6, 'geographie', 'Deux façons de mesurer une distance — on reprend', 'On relit le cours, puis on refait les exercices. Tes calculs sur ton brouillon, le résultat sur l’écran.', 30, 'g-p4-distances'),
    (7, 'maison', 'Vélo', 'Une sortie. Repérer le trajet sur un plan avant de partir, puis le raconter au retour.', 30, '')
  ) as v (rang, matiere, titre, consigne, minutes, lecon)
 where j.famille_id = (select id from famille) and j.jour = '2027-04-09'
   and not exists (select 1 from seance s where s.journee_id = j.id);

insert into journee (famille_id, jour) select f.id, '2027-04-12' from famille f
  on conflict (famille_id, jour) do nothing;
insert into seance
  (journee_id, rang, matiere, titre, reference, consigne, minutes, lecon,
   par_adulte, origine)
select j.id, v.rang, v.matiere, v.titre, '', v.consigne, v.minutes, v.lecon,
       null, 'trame'
  from journee j
  cross join (values
    (1, 'maths', 'Les fractions d’une quantité', 'La moitié de 36, le tiers de 24, les trois quarts de 20. Dix questions à l’oral.', 15, ''),
    (2, 'maths', 'Le calcul mental : les chemins courts — on reprend', 'On relit le cours, puis on refait les exercices. Tes calculs sur ton brouillon, le résultat sur l’écran.', 25, 'm-p4-calcul-mental'),
    (3, 'francais', 'Le goût des mots : la poésie — on reprend', 'On relit le cours, puis on refait les exercices. Tes calculs sur ton brouillon, le résultat sur l’écran.', 25, 'f-p4-poesie'),
    (4, 'francais', 'Dictée préparée', 'Le texte a été lu la veille. On le dicte, puis on compare avec l’original.', 20, ''),
    (5, 'francais', 'Lecture d’un documentaire', 'Une double page documentaire. Relever la nature et la source du document avant de lire.', 30, ''),
    (6, 'emc', 'L’égalité entre les filles et les garçons — on reprend', 'On relit le cours, puis on refait les exercices. Tes calculs sur ton brouillon, le résultat sur l’écran.', 30, 'e-p4-egalite'),
    (7, 'maison', 'Parcours et équilibre', 'Un parcours à installer soi-même : sauter, grimper, tenir en équilibre, ramper.', 30, '')
  ) as v (rang, matiere, titre, consigne, minutes, lecon)
 where j.famille_id = (select id from famille) and j.jour = '2027-04-12'
   and not exists (select 1 from seance s where s.journee_id = j.id);

insert into journee (famille_id, jour) select f.id, '2027-04-13' from famille f
  on conflict (famille_id, jour) do nothing;
insert into seance
  (journee_id, rang, matiere, titre, reference, consigne, minutes, lecon,
   par_adulte, origine)
select j.id, v.rang, v.matiere, v.titre, '', v.consigne, v.minutes, v.lecon,
       null, 'trame'
  from journee j
  cross join (values
    (1, 'maths', 'Les problèmes en une phrase', 'Cinq problèmes dictés, très courts. La réponse sur l’ardoise, sans écrire le calcul.', 15, ''),
    (2, 'maths', 'Reprendre la leçon de maths', 'Refaire les exercices de la dernière leçon de maths, sur le cahier cette fois. Comparer avec ce qui avait été trouvé.', 30, ''),
    (3, 'francais', 'Reprendre la leçon de français', 'Refaire les exercices de la dernière leçon de français, sur le cahier.', 25, ''),
    (4, 'francais', 'Les mots invariables', 'Apprendre dix mots invariables, puis les écrire sous la dictée.', 20, ''),
    (5, 'francais', 'Poésie', 'Lire un poème à voix haute, plusieurs fois. Repérer les rimes et les images. En apprendre quatre vers.', 30, ''),
    (6, 'francais', 'Donner son avis', 'Ce que je pense, pourquoi, un exemple. Huit lignes. Les trois morceaux doivent y être.', 25, ''),
    (7, 'maison', 'Marche et observation', 'Une marche d’une demi-heure. Rapporter trois choses observées, à noter ou à dessiner.', 30, '')
  ) as v (rang, matiere, titre, consigne, minutes, lecon)
 where j.famille_id = (select id from famille) and j.jour = '2027-04-13'
   and not exists (select 1 from seance s where s.journee_id = j.id);

insert into journee (famille_id, jour) select f.id, '2027-04-14' from famille f
  on conflict (famille_id, jour) do nothing;
insert into seance
  (journee_id, rang, matiere, titre, reference, consigne, minutes, lecon,
   par_adulte, origine)
select j.id, v.rang, v.matiere, v.titre, '', v.consigne, v.minutes, v.lecon,
       null, 'trame'
  from journee j
  cross join (values
    (1, 'maths', 'Encadrer et arrondir', 'Entre quels milliers se trouve 6 480 ? Quel est l’arrondi de 12,94 ? Dix questions.', 15, ''),
    (2, 'histoire', 'Les empires coloniaux et l’esclavage — on reprend', 'On relit le cours, puis on refait les exercices. Tes calculs sur ton brouillon, le résultat sur l’écran.', 30, 'h-p4-colonisation'),
    (3, 'maison', 'Démonter un objet', 'Un vieil appareil, un stylo, une serrure. Nommer les pièces et dire à quoi chacune sert.', 45, '')
  ) as v (rang, matiere, titre, consigne, minutes, lecon)
 where j.famille_id = (select id from famille) and j.jour = '2027-04-14'
   and not exists (select 1 from seance s where s.journee_id = j.id);

insert into journee (famille_id, jour) select f.id, '2027-04-15' from famille f
  on conflict (famille_id, jour) do nothing;
insert into seance
  (journee_id, rang, matiere, titre, reference, consigne, minutes, lecon,
   par_adulte, origine)
select j.id, v.rang, v.matiere, v.titre, '', v.consigne, v.minutes, v.lecon,
       null, 'trame'
  from journee j
  cross join (values
    (1, 'maths', 'Les unités de mesure', 'Combien de grammes dans 2 kg 500 ? De centimètres dans 3 m 50 ? Dix questions.', 15, ''),
    (2, 'maths', 'Les tableaux et les graphiques — on reprend', 'On relit le cours, puis on refait les exercices. Tes calculs sur ton brouillon, le résultat sur l’écran.', 25, 'm-p4-donnees'),
    (3, 'francais', 'Lire un document pour apprendre — on reprend', 'On relit le cours, puis on refait les exercices. Tes calculs sur ton brouillon, le résultat sur l’écran.', 25, 'f-p4-documents'),
    (4, 'francais', 'Dictée à trous', 'Le texte est écrit, il manque les terminaisons des verbes. On les complète en justifiant.', 20, ''),
    (5, 'francais', 'Lecture de théâtre', 'Une scène, lue à deux voix. Les didascalies ne se disent pas : elles se jouent.', 30, ''),
    (6, 'francais', 'Écrire une lettre', 'Une lettre à quelqu’un de la famille. Formule d’appel, corps, formule de fin.', 25, ''),
    (7, 'maison', 'Danse et rythme', 'Suivre une pulsation, inventer une suite de mouvements de huit temps, la refaire à l’identique.', 30, '')
  ) as v (rang, matiere, titre, consigne, minutes, lecon)
 where j.famille_id = (select id from famille) and j.jour = '2027-04-15'
   and not exists (select 1 from seance s where s.journee_id = j.id);

insert into journee (famille_id, jour) select f.id, '2027-04-16' from famille f
  on conflict (famille_id, jour) do nothing;
insert into seance
  (journee_id, rang, matiere, titre, reference, consigne, minutes, lecon,
   par_adulte, origine)
select j.id, v.rang, v.matiere, v.titre, '', v.consigne, v.minutes, v.lecon,
       null, 'trame'
  from journee j
  cross join (values
    (1, 'maths', 'Les durées', 'De 8 h 45 à 12 h 30, combien de temps ? Cinq calculs de durée, à l’oral.', 15, ''),
    (2, 'maths', 'Le nombre du jour', 'Un nombre au tableau. Le décomposer de cinq façons, l’encadrer, dire son nombre de centaines, le doubler.', 30, ''),
    (3, 'francais', 'Le dictionnaire', 'Chercher cinq mots rencontrés cette semaine. Relever la nature du mot et ses différents sens.', 25, ''),
    (4, 'francais', 'Auto-dictée', 'Apprendre quatre lignes par cœur la veille, les écrire de mémoire aujourd’hui.', 20, ''),
    (5, 'francais', 'Lecture libre', 'Le livre que tu veux, sans compte à rendre. On te demande seulement si tu as aimé, et pourquoi.', 30, ''),
    (6, 'francais', 'Inventer un problème', 'Écrire un problème de mathématiques à deux étapes, avec sa solution sur une autre feuille.', 25, ''),
    (7, 'maison', 'Jardinage ou bricolage', 'Planter, arroser, mesurer, réparer. Le travail des mains compte autant que le reste.', 30, '')
  ) as v (rang, matiere, titre, consigne, minutes, lecon)
 where j.famille_id = (select id from famille) and j.jour = '2027-04-16'
   and not exists (select 1 from seance s where s.journee_id = j.id);

insert into journee (famille_id, jour) select f.id, '2027-05-03' from famille f
  on conflict (famille_id, jour) do nothing;
insert into seance
  (journee_id, rang, matiere, titre, reference, consigne, minutes, lecon,
   par_adulte, origine)
select j.id, v.rang, v.matiere, v.titre, '', v.consigne, v.minutes, v.lecon,
       null, 'trame'
  from journee j
  cross join (values
    (1, 'maths', 'Les tables de multiplication', 'Dix multiplications dictées, à l’ardoise. On efface entre chaque. On redit celles qui ont hésité.', 15, ''),
    (2, 'maths', 'Les figures et leurs propriétés', 'Lis la leçon, puis fais les exercices. Tes calculs sur ton brouillon, le résultat sur l’écran.', 30, 'm-p5-figures'),
    (3, 'francais', 'Le merveilleux et l’étrange', 'Lis la leçon, puis fais les exercices. Tes calculs sur ton brouillon, le résultat sur l’écran.', 25, 'f-p5-merveilleux'),
    (4, 'francais', 'Dictée de mots', 'Quinze mots de la liste en cours. On corrige ensemble, et on réécrit trois fois ceux qui ont hésité.', 20, ''),
    (5, 'francais', 'Lecture à voix haute', 'Une page préparée, lue à voix haute en respectant la ponctuation. On marque au crayon où respirer.', 30, ''),
    (6, 'sciences', 'La météo et les saisons', 'Lis la leçon, puis fais les exercices. Tes calculs sur ton brouillon, le résultat sur l’écran.', 30, 's-p5-meteo'),
    (7, 'maison', 'Course et endurance', 'Courir sans s’arrêter, en augmentant un peu chaque semaine. On chronomètre, on ne compare à personne.', 30, '')
  ) as v (rang, matiere, titre, consigne, minutes, lecon)
 where j.famille_id = (select id from famille) and j.jour = '2027-05-03'
   and not exists (select 1 from seance s where s.journee_id = j.id);

insert into journee (famille_id, jour) select f.id, '2027-05-04' from famille f
  on conflict (famille_id, jour) do nothing;
insert into seance
  (journee_id, rang, matiere, titre, reference, consigne, minutes, lecon,
   par_adulte, origine)
select j.id, v.rang, v.matiere, v.titre, '', v.consigne, v.minutes, v.lecon,
       null, 'trame'
  from journee j
  cross join (values
    (1, 'maths', 'Les doubles et les moitiés', 'Le double de 45, la moitié de 68, le double de 250… Dix questions, à l’oral.', 15, ''),
    (2, 'maths', 'Problèmes du jour', 'Trois problèmes sur le cahier. Pour chacun : ce qu’on cherche, ce qu’on sait, le calcul, la phrase de réponse.', 30, ''),
    (3, 'francais', 'Conjugaison', 'Trois verbes, aux quatre temps connus, à toutes les personnes. Sur le cahier, sans modèle.', 25, ''),
    (4, 'francais', 'Dictée de phrases', 'Trois phrases. On souligne les verbes et on entoure les sujets avant de corriger.', 20, ''),
    (5, 'francais', 'Lecture silencieuse', 'Vingt minutes dans le livre en cours, puis raconter ce qui vient de se passer.', 30, ''),
    (6, 'histoire', 'Le royaume en 1789 et les Lumières', 'Lis la leçon, puis fais les exercices. Tes calculs sur ton brouillon, le résultat sur l’écran.', 30, 'h-p5-royaume-1789'),
    (7, 'maison', 'Jeux de ballon', 'Passes, tirs, jonglages. Compter les réussites de suite, battre son propre score.', 30, '')
  ) as v (rang, matiere, titre, consigne, minutes, lecon)
 where j.famille_id = (select id from famille) and j.jour = '2027-05-04'
   and not exists (select 1 from seance s where s.journee_id = j.id);

insert into journee (famille_id, jour) select f.id, '2027-05-05' from famille f
  on conflict (famille_id, jour) do nothing;
insert into seance
  (journee_id, rang, matiere, titre, reference, consigne, minutes, lecon,
   par_adulte, origine)
select j.id, v.rang, v.matiere, v.titre, '', v.consigne, v.minutes, v.lecon,
       null, 'trame'
  from journee j
  cross join (values
    (1, 'maths', 'Les compléments à 100', 'Combien manque-t-il à 67 pour aller à 100 ? Dix questions. Puis les compléments à 1 000.', 15, ''),
    (2, 'geographie', 'Comment marche Internet', 'Lis la leçon, puis fais les exercices. Tes calculs sur ton brouillon, le résultat sur l’écran.', 35, 'g-p5-internet'),
    (3, 'maison', 'Une carte', 'Dessiner le plan du quartier de mémoire, puis le comparer à une vraie carte. Chercher ce qui manque.', 45, '')
  ) as v (rang, matiere, titre, consigne, minutes, lecon)
 where j.famille_id = (select id from famille) and j.jour = '2027-05-05'
   and not exists (select 1 from seance s where s.journee_id = j.id);

insert into journee (famille_id, jour) select f.id, '2027-05-10' from famille f
  on conflict (famille_id, jour) do nothing;
insert into seance
  (journee_id, rang, matiere, titre, reference, consigne, minutes, lecon,
   par_adulte, origine)
select j.id, v.rang, v.matiere, v.titre, '', v.consigne, v.minutes, v.lecon,
       null, 'trame'
  from journee j
  cross join (values
    (1, 'maths', 'Ajouter 9, 19, 29', 'On ajoute la dizaine ronde et on retire 1. Dix questions, en disant la procédure à voix haute.', 15, ''),
    (2, 'maths', 'Géométrie : tracer', 'Un programme de construction à suivre à la règle, à l’équerre et au compas. La précision compte.', 30, ''),
    (3, 'francais', 'Les homophones', 'Un texte à trous : a/à, est/et, son/sont, ont/on. Justifier chaque choix par le test de remplacement.', 25, ''),
    (4, 'francais', 'Dictée préparée', 'Le texte a été lu la veille. On le dicte, puis on compare avec l’original.', 20, ''),
    (5, 'francais', 'Lecture d’un documentaire', 'Une double page documentaire. Relever la nature et la source du document avant de lire.', 30, ''),
    (6, 'sciences', 'Le cerveau et l’attention', 'Lis la leçon, puis fais les exercices. Tes calculs sur ton brouillon, le résultat sur l’écran.', 30, 's-p5-cerveau'),
    (7, 'maison', 'Parcours et équilibre', 'Un parcours à installer soi-même : sauter, grimper, tenir en équilibre, ramper.', 30, '')
  ) as v (rang, matiere, titre, consigne, minutes, lecon)
 where j.famille_id = (select id from famille) and j.jour = '2027-05-10'
   and not exists (select 1 from seance s where s.journee_id = j.id);

insert into journee (famille_id, jour) select f.id, '2027-05-11' from famille f
  on conflict (famille_id, jour) do nothing;
insert into seance
  (journee_id, rang, matiere, titre, reference, consigne, minutes, lecon,
   par_adulte, origine)
select j.id, v.rang, v.matiere, v.titre, '', v.consigne, v.minutes, v.lecon,
       null, 'trame'
  from journee j
  cross join (values
    (1, 'maths', 'Multiplier par 10, 100, 1 000', 'Dix questions rapides. Puis diviser par 10 : 320 ÷ 10, 4 500 ÷ 10.', 15, ''),
    (2, 'maths', 'Perpendiculaires et parallèles', 'Lis la leçon, puis fais les exercices. Tes calculs sur ton brouillon, le résultat sur l’écran.', 25, 'm-p5-perpendiculaires'),
    (3, 'francais', 'La morale d’une histoire', 'Lis la leçon, puis fais les exercices. Tes calculs sur ton brouillon, le résultat sur l’écran.', 25, 'f-p5-morale'),
    (4, 'francais', 'Les mots invariables', 'Apprendre dix mots invariables, puis les écrire sous la dictée.', 20, ''),
    (5, 'francais', 'Poésie', 'Lire un poème à voix haute, plusieurs fois. Repérer les rimes et les images. En apprendre quatre vers.', 30, ''),
    (6, 'anglais', 'Les lieux et le chemin', 'Lis la leçon, puis fais les exercices. Tes calculs sur ton brouillon, le résultat sur l’écran.', 25, 'a-p5-lieux'),
    (7, 'maison', 'Marche et observation', 'Une marche d’une demi-heure. Rapporter trois choses observées, à noter ou à dessiner.', 30, '')
  ) as v (rang, matiere, titre, consigne, minutes, lecon)
 where j.famille_id = (select id from famille) and j.jour = '2027-05-11'
   and not exists (select 1 from seance s where s.journee_id = j.id);

insert into journee (famille_id, jour) select f.id, '2027-05-12' from famille f
  on conflict (famille_id, jour) do nothing;
insert into seance
  (journee_id, rang, matiere, titre, reference, consigne, minutes, lecon,
   par_adulte, origine)
select j.id, v.rang, v.matiere, v.titre, '', v.consigne, v.minutes, v.lecon,
       null, 'trame'
  from journee j
  cross join (values
    (1, 'maths', 'Multiplier par 4 et par 8', 'Par 4, c’est doubler deux fois. Par 8, trois fois. Dix questions en disant les étapes.', 15, ''),
    (2, 'emc', 'Décider ensemble : le vote', 'Lis la leçon, puis fais les exercices. Tes calculs sur ton brouillon, le résultat sur l’écran.', 30, 'e-p5-decider'),
    (3, 'maison', 'Programmer un déplacement', 'Écrire une suite d’instructions pour faire tracer une figure, puis l’exécuter à la lettre — même si c’est faux.', 45, '')
  ) as v (rang, matiere, titre, consigne, minutes, lecon)
 where j.famille_id = (select id from famille) and j.jour = '2027-05-12'
   and not exists (select 1 from seance s where s.journee_id = j.id);

insert into journee (famille_id, jour) select f.id, '2027-05-13' from famille f
  on conflict (famille_id, jour) do nothing;
insert into seance
  (journee_id, rang, matiere, titre, reference, consigne, minutes, lecon,
   par_adulte, origine)
select j.id, v.rang, v.matiere, v.titre, '', v.consigne, v.minutes, v.lecon,
       null, 'trame'
  from journee j
  cross join (values
    (1, 'maths', 'Multiplier par 5 et par 50', 'Par 5, c’est la moitié de par 10. Par 50, la moitié de par 100. Dix questions.', 15, ''),
    (2, 'maths', 'Opérations posées', 'Quatre additions, quatre soustractions, deux multiplications. Estimer avant, vérifier après.', 30, ''),
    (3, 'francais', 'Analyser des phrases', 'Cinq phrases : souligner le sujet, entourer le verbe, encadrer les compléments. Dire lesquels se déplacent.', 25, ''),
    (4, 'francais', 'Dictée à trous', 'Le texte est écrit, il manque les terminaisons des verbes. On les complète en justifiant.', 20, ''),
    (5, 'francais', 'Lecture de théâtre', 'Une scène, lue à deux voix. Les didascalies ne se disent pas : elles se jouent.', 30, ''),
    (6, 'francais', 'Écrire une lettre', 'Une lettre à quelqu’un de la famille. Formule d’appel, corps, formule de fin.', 25, ''),
    (7, 'maison', 'Danse et rythme', 'Suivre une pulsation, inventer une suite de mouvements de huit temps, la refaire à l’identique.', 30, '')
  ) as v (rang, matiere, titre, consigne, minutes, lecon)
 where j.famille_id = (select id from famille) and j.jour = '2027-05-13'
   and not exists (select 1 from seance s where s.journee_id = j.id);

insert into journee (famille_id, jour) select f.id, '2027-05-14' from famille f
  on conflict (famille_id, jour) do nothing;
insert into seance
  (journee_id, rang, matiere, titre, reference, consigne, minutes, lecon,
   par_adulte, origine)
select j.id, v.rang, v.matiere, v.titre, '', v.consigne, v.minutes, v.lecon,
       null, 'trame'
  from journee j
  cross join (values
    (1, 'maths', 'Les fractions d’une quantité', 'La moitié de 36, le tiers de 24, les trois quarts de 20. Dix questions à l’oral.', 15, ''),
    (2, 'maths', 'Problèmes du jour', 'Trois problèmes sur le cahier. Pour chacun : ce qu’on cherche, ce qu’on sait, le calcul, la phrase de réponse.', 30, ''),
    (3, 'francais', 'Conjugaison', 'Trois verbes, aux quatre temps connus, à toutes les personnes. Sur le cahier, sans modèle.', 25, ''),
    (4, 'francais', 'Auto-dictée', 'Apprendre quatre lignes par cœur la veille, les écrire de mémoire aujourd’hui.', 20, ''),
    (5, 'francais', 'Lecture libre', 'Le livre que tu veux, sans compte à rendre. On te demande seulement si tu as aimé, et pourquoi.', 30, ''),
    (6, 'emc', 'Décider ensemble : le vote — on reprend', 'On relit le cours, puis on refait les exercices. Tes calculs sur ton brouillon, le résultat sur l’écran.', 30, 'e-p5-decider'),
    (7, 'maison', 'Jardinage ou bricolage', 'Planter, arroser, mesurer, réparer. Le travail des mains compte autant que le reste.', 30, '')
  ) as v (rang, matiere, titre, consigne, minutes, lecon)
 where j.famille_id = (select id from famille) and j.jour = '2027-05-14'
   and not exists (select 1 from seance s where s.journee_id = j.id);

insert into journee (famille_id, jour) select f.id, '2027-05-18' from famille f
  on conflict (famille_id, jour) do nothing;
insert into seance
  (journee_id, rang, matiere, titre, reference, consigne, minutes, lecon,
   par_adulte, origine)
select j.id, v.rang, v.matiere, v.titre, '', v.consigne, v.minutes, v.lecon,
       null, 'trame'
  from journee j
  cross join (values
    (1, 'maths', 'Les problèmes en une phrase', 'Cinq problèmes dictés, très courts. La réponse sur l’ardoise, sans écrire le calcul.', 15, ''),
    (2, 'maths', 'La symétrie axiale', 'Lis la leçon, puis fais les exercices. Tes calculs sur ton brouillon, le résultat sur l’écran.', 30, 'm-p5-symetrie'),
    (3, 'francais', 'L’orthographe des mots', 'Lis la leçon, puis fais les exercices. Tes calculs sur ton brouillon, le résultat sur l’écran.', 25, 'f-p5-orthographe'),
    (4, 'francais', 'Dictée de mots', 'Quinze mots de la liste en cours. On corrige ensemble, et on réécrit trois fois ceux qui ont hésité.', 20, ''),
    (5, 'francais', 'Lecture à voix haute', 'Une page préparée, lue à voix haute en respectant la ponctuation. On marque au crayon où respirer.', 30, ''),
    (6, 'francais', 'Écrire la suite', 'Lire le début d’un récit, puis en écrire la suite : dix lignes. Brouillon d’abord.', 25, ''),
    (7, 'maison', 'Course et endurance', 'Courir sans s’arrêter, en augmentant un peu chaque semaine. On chronomètre, on ne compare à personne.', 30, '')
  ) as v (rang, matiere, titre, consigne, minutes, lecon)
 where j.famille_id = (select id from famille) and j.jour = '2027-05-18'
   and not exists (select 1 from seance s where s.journee_id = j.id);

insert into journee (famille_id, jour) select f.id, '2027-05-19' from famille f
  on conflict (famille_id, jour) do nothing;
insert into seance
  (journee_id, rang, matiere, titre, reference, consigne, minutes, lecon,
   par_adulte, origine)
select j.id, v.rang, v.matiere, v.titre, '', v.consigne, v.minutes, v.lecon,
       null, 'trame'
  from journee j
  cross join (values
    (1, 'maths', 'Encadrer et arrondir', 'Entre quels milliers se trouve 6 480 ? Quel est l’arrondi de 12,94 ? Dix questions.', 15, ''),
    (2, 'sciences', 'Grandir : les changements du corps', 'Lis la leçon, puis fais les exercices. Tes calculs sur ton brouillon, le résultat sur l’écran.', 25, 's-p5-puberte'),
    (3, 'maison', 'Un métier', 'Choisir un métier, chercher ce qu’il demande d’apprendre, et qui l’exerce autour de nous.', 45, '')
  ) as v (rang, matiere, titre, consigne, minutes, lecon)
 where j.famille_id = (select id from famille) and j.jour = '2027-05-19'
   and not exists (select 1 from seance s where s.journee_id = j.id);

insert into journee (famille_id, jour) select f.id, '2027-05-20' from famille f
  on conflict (famille_id, jour) do nothing;
insert into seance
  (journee_id, rang, matiere, titre, reference, consigne, minutes, lecon,
   par_adulte, origine)
select j.id, v.rang, v.matiere, v.titre, '', v.consigne, v.minutes, v.lecon,
       null, 'trame'
  from journee j
  cross join (values
    (1, 'maths', 'Les unités de mesure', 'Combien de grammes dans 2 kg 500 ? De centimètres dans 3 m 50 ? Dix questions.', 15, ''),
    (2, 'maths', 'Mesurer pour de vrai', 'Mesurer des objets de la maison, noter en deux unités différentes, comparer aux estimations faites avant.', 30, ''),
    (3, 'francais', 'Vocabulaire', 'Dix mots : trouver un synonyme, un contraire, et un mot de la même famille pour chacun.', 25, ''),
    (4, 'francais', 'Copie soignée', 'Copier huit lignes d’un texte au choix, le plus soigneusement possible. On relit avant de rendre.', 20, ''),
    (5, 'francais', 'Lecture et questions', 'Un texte court, puis cinq questions : trois sur ce qui est écrit, deux sur ce qui se déduit.', 30, ''),
    (6, 'francais', 'Écrire un dialogue', 'Deux personnages, six répliques. Tirets, verbes de parole variés, une ligne par personne.', 25, ''),
    (7, 'maison', 'Vélo', 'Une sortie. Repérer le trajet sur un plan avant de partir, puis le raconter au retour.', 30, '')
  ) as v (rang, matiere, titre, consigne, minutes, lecon)
 where j.famille_id = (select id from famille) and j.jour = '2027-05-20'
   and not exists (select 1 from seance s where s.journee_id = j.id);

insert into journee (famille_id, jour) select f.id, '2027-05-21' from famille f
  on conflict (famille_id, jour) do nothing;
insert into seance
  (journee_id, rang, matiere, titre, reference, consigne, minutes, lecon,
   par_adulte, origine)
select j.id, v.rang, v.matiere, v.titre, '', v.consigne, v.minutes, v.lecon,
       null, 'trame'
  from journee j
  cross join (values
    (1, 'maths', 'Les durées', 'De 8 h 45 à 12 h 30, combien de temps ? Cinq calculs de durée, à l’oral.', 15, ''),
    (2, 'maths', 'Le nombre du jour', 'Un nombre au tableau. Le décomposer de cinq façons, l’encadrer, dire son nombre de centaines, le doubler.', 30, ''),
    (3, 'francais', 'Le dictionnaire', 'Chercher cinq mots rencontrés cette semaine. Relever la nature du mot et ses différents sens.', 25, ''),
    (4, 'francais', 'Dictée préparée', 'Le texte a été lu la veille. On le dicte, puis on compare avec l’original.', 20, ''),
    (5, 'francais', 'Lecture d’un documentaire', 'Une double page documentaire. Relever la nature et la source du document avant de lire.', 30, ''),
    (6, 'arts', 'Le rythme et la pulsation', 'Lis la leçon, puis fais les exercices. Tes calculs sur ton brouillon, le résultat sur l’écran.', 25, 'ar-p5-rythme'),
    (7, 'maison', 'Parcours et équilibre', 'Un parcours à installer soi-même : sauter, grimper, tenir en équilibre, ramper.', 30, '')
  ) as v (rang, matiere, titre, consigne, minutes, lecon)
 where j.famille_id = (select id from famille) and j.jour = '2027-05-21'
   and not exists (select 1 from seance s where s.journee_id = j.id);

insert into journee (famille_id, jour) select f.id, '2027-05-24' from famille f
  on conflict (famille_id, jour) do nothing;
insert into seance
  (journee_id, rang, matiere, titre, reference, consigne, minutes, lecon,
   par_adulte, origine)
select j.id, v.rang, v.matiere, v.titre, '', v.consigne, v.minutes, v.lecon,
       null, 'trame'
  from journee j
  cross join (values
    (1, 'maths', 'Les tables de multiplication', 'Dix multiplications dictées, à l’ardoise. On efface entre chaque. On redit celles qui ont hésité.', 15, ''),
    (2, 'maths', 'Les solides', 'Lis la leçon, puis fais les exercices. Tes calculs sur ton brouillon, le résultat sur l’écran.', 30, 'm-p5-solides'),
    (3, 'francais', 'Les quatre temps : reconnaître et choisir', 'Lis la leçon, puis fais les exercices. Tes calculs sur ton brouillon, le résultat sur l’écran.', 30, 'f-p5-conjugaison-bilan'),
    (4, 'francais', 'Les mots invariables', 'Apprendre dix mots invariables, puis les écrire sous la dictée.', 20, ''),
    (5, 'francais', 'Poésie', 'Lire un poème à voix haute, plusieurs fois. Repérer les rimes et les images. En apprendre quatre vers.', 30, ''),
    (6, 'francais', 'Donner son avis', 'Ce que je pense, pourquoi, un exemple. Huit lignes. Les trois morceaux doivent y être.', 25, ''),
    (7, 'maison', 'Marche et observation', 'Une marche d’une demi-heure. Rapporter trois choses observées, à noter ou à dessiner.', 30, '')
  ) as v (rang, matiere, titre, consigne, minutes, lecon)
 where j.famille_id = (select id from famille) and j.jour = '2027-05-24'
   and not exists (select 1 from seance s where s.journee_id = j.id);

insert into journee (famille_id, jour) select f.id, '2027-05-25' from famille f
  on conflict (famille_id, jour) do nothing;
insert into seance
  (journee_id, rang, matiere, titre, reference, consigne, minutes, lecon,
   par_adulte, origine)
select j.id, v.rang, v.matiere, v.titre, '', v.consigne, v.minutes, v.lecon,
       null, 'trame'
  from journee j
  cross join (values
    (1, 'maths', 'Les doubles et les moitiés', 'Le double de 45, la moitié de 68, le double de 250… Dix questions, à l’oral.', 15, ''),
    (2, 'maths', 'Problèmes du jour', 'Trois problèmes sur le cahier. Pour chacun : ce qu’on cherche, ce qu’on sait, le calcul, la phrase de réponse.', 30, ''),
    (3, 'francais', 'Conjugaison', 'Trois verbes, aux quatre temps connus, à toutes les personnes. Sur le cahier, sans modèle.', 25, ''),
    (4, 'francais', 'Transformer des phrases', 'Mettre cinq phrases au pluriel, en respectant toute la chaîne d’accords. À l’écrit.', 20, ''),
    (5, 'francais', 'Lecture d’une bande dessinée', 'Une planche. Puis expliquer ce que les images racontent et que le texte ne dit pas.', 30, ''),
    (6, 'francais', 'Expliquer une règle', 'Réécrire avec tes mots une leçon de la semaine, pour quelqu’un qui ne l’a pas eue.', 25, ''),
    (7, 'maison', 'Jeux de raquette', 'Échanges contre un mur ou à deux. Compter les échanges tenus sans faute.', 30, '')
  ) as v (rang, matiere, titre, consigne, minutes, lecon)
 where j.famille_id = (select id from famille) and j.jour = '2027-05-25'
   and not exists (select 1 from seance s where s.journee_id = j.id);

insert into journee (famille_id, jour) select f.id, '2027-05-26' from famille f
  on conflict (famille_id, jour) do nothing;
insert into seance
  (journee_id, rang, matiere, titre, reference, consigne, minutes, lecon,
   par_adulte, origine)
select j.id, v.rang, v.matiere, v.titre, '', v.consigne, v.minutes, v.lecon,
       null, 'trame'
  from journee j
  cross join (values
    (1, 'maths', 'Les compléments à 100', 'Combien manque-t-il à 67 pour aller à 100 ? Dix questions. Puis les compléments à 1 000.', 15, ''),
    (2, 'francais', 'Lecture silencieuse', 'Vingt minutes dans le livre en cours, puis raconter ce qui vient de se passer.', 30, ''),
    (3, 'maison', 'Musique', 'Écouter un morceau en entier, sans rien faire d’autre. Repérer la pulsation, les instruments, ce qui revient.', 45, '')
  ) as v (rang, matiere, titre, consigne, minutes, lecon)
 where j.famille_id = (select id from famille) and j.jour = '2027-05-26'
   and not exists (select 1 from seance s where s.journee_id = j.id);

insert into journee (famille_id, jour) select f.id, '2027-05-27' from famille f
  on conflict (famille_id, jour) do nothing;
insert into seance
  (journee_id, rang, matiere, titre, reference, consigne, minutes, lecon,
   par_adulte, origine)
select j.id, v.rang, v.matiere, v.titre, '', v.consigne, v.minutes, v.lecon,
       null, 'trame'
  from journee j
  cross join (values
    (1, 'maths', 'Ajouter 9, 19, 29', 'On ajoute la dizaine ronde et on retire 1. Dix questions, en disant la procédure à voix haute.', 15, ''),
    (2, 'maths', 'Géométrie : tracer', 'Un programme de construction à suivre à la règle, à l’équerre et au compas. La précision compte.', 30, ''),
    (3, 'francais', 'Les homophones', 'Un texte à trous : a/à, est/et, son/sont, ont/on. Justifier chaque choix par le test de remplacement.', 25, ''),
    (4, 'francais', 'Auto-dictée', 'Apprendre quatre lignes par cœur la veille, les écrire de mémoire aujourd’hui.', 20, ''),
    (5, 'francais', 'Lecture libre', 'Le livre que tu veux, sans compte à rendre. On te demande seulement si tu as aimé, et pourquoi.', 30, ''),
    (6, 'sciences', 'Donner des instructions à une machine', 'Lis la leçon, puis fais les exercices. Tes calculs sur ton brouillon, le résultat sur l’écran.', 30, 's-p5-programmation'),
    (7, 'maison', 'Jardinage ou bricolage', 'Planter, arroser, mesurer, réparer. Le travail des mains compte autant que le reste.', 30, '')
  ) as v (rang, matiere, titre, consigne, minutes, lecon)
 where j.famille_id = (select id from famille) and j.jour = '2027-05-27'
   and not exists (select 1 from seance s where s.journee_id = j.id);

insert into journee (famille_id, jour) select f.id, '2027-05-28' from famille f
  on conflict (famille_id, jour) do nothing;
insert into seance
  (journee_id, rang, matiere, titre, reference, consigne, minutes, lecon,
   par_adulte, origine)
select j.id, v.rang, v.matiere, v.titre, '', v.consigne, v.minutes, v.lecon,
       null, 'trame'
  from journee j
  cross join (values
    (1, 'maths', 'Multiplier par 10, 100, 1 000', 'Dix questions rapides. Puis diviser par 10 : 320 ÷ 10, 4 500 ÷ 10.', 15, ''),
    (2, 'maths', 'Le nombre caché', 'Lis la leçon, puis fais les exercices. Tes calculs sur ton brouillon, le résultat sur l’écran.', 25, 'm-p5-nombre-cache'),
    (3, 'francais', 'Expliquer et donner son avis', 'Lis la leçon, puis fais les exercices. Tes calculs sur ton brouillon, le résultat sur l’écran.', 25, 'f-p5-expliquer'),
    (4, 'francais', 'Dictée de mots', 'Quinze mots de la liste en cours. On corrige ensemble, et on réécrit trois fois ceux qui ont hésité.', 20, ''),
    (5, 'francais', 'Lecture à voix haute', 'Une page préparée, lue à voix haute en respectant la ponctuation. On marque au crayon où respirer.', 30, ''),
    (6, 'francais', 'Écrire la suite', 'Lire le début d’un récit, puis en écrire la suite : dix lignes. Brouillon d’abord.', 25, ''),
    (7, 'maison', 'Course et endurance', 'Courir sans s’arrêter, en augmentant un peu chaque semaine. On chronomètre, on ne compare à personne.', 30, '')
  ) as v (rang, matiere, titre, consigne, minutes, lecon)
 where j.famille_id = (select id from famille) and j.jour = '2027-05-28'
   and not exists (select 1 from seance s where s.journee_id = j.id);

insert into journee (famille_id, jour) select f.id, '2027-05-31' from famille f
  on conflict (famille_id, jour) do nothing;
insert into seance
  (journee_id, rang, matiere, titre, reference, consigne, minutes, lecon,
   par_adulte, origine)
select j.id, v.rang, v.matiere, v.titre, '', v.consigne, v.minutes, v.lecon,
       null, 'trame'
  from journee j
  cross join (values
    (1, 'maths', 'Multiplier par 4 et par 8', 'Par 4, c’est doubler deux fois. Par 8, trois fois. Dix questions en disant les étapes.', 15, ''),
    (2, 'maths', 'Le nombre du jour', 'Un nombre au tableau. Le décomposer de cinq façons, l’encadrer, dire son nombre de centaines, le doubler.', 30, ''),
    (3, 'francais', 'Le dictionnaire', 'Chercher cinq mots rencontrés cette semaine. Relever la nature du mot et ses différents sens.', 25, ''),
    (4, 'francais', 'Dictée de phrases', 'Trois phrases. On souligne les verbes et on entoure les sujets avant de corriger.', 20, ''),
    (5, 'francais', 'Lecture silencieuse', 'Vingt minutes dans le livre en cours, puis raconter ce qui vient de se passer.', 30, ''),
    (6, 'histoire', '1789, l’année révolutionnaire', 'Lis la leçon, puis fais les exercices. Tes calculs sur ton brouillon, le résultat sur l’écran.', 35, 'h-p5-revolution'),
    (7, 'maison', 'Jeux de ballon', 'Passes, tirs, jonglages. Compter les réussites de suite, battre son propre score.', 30, '')
  ) as v (rang, matiere, titre, consigne, minutes, lecon)
 where j.famille_id = (select id from famille) and j.jour = '2027-05-31'
   and not exists (select 1 from seance s where s.journee_id = j.id);

insert into journee (famille_id, jour) select f.id, '2027-06-01' from famille f
  on conflict (famille_id, jour) do nothing;
insert into seance
  (journee_id, rang, matiere, titre, reference, consigne, minutes, lecon,
   par_adulte, origine)
select j.id, v.rang, v.matiere, v.titre, '', v.consigne, v.minutes, v.lecon,
       null, 'trame'
  from journee j
  cross join (values
    (1, 'maths', 'Multiplier par 5 et par 50', 'Par 5, c’est la moitié de par 10. Par 50, la moitié de par 100. Dix questions.', 15, ''),
    (2, 'maths', 'Opérations posées', 'Quatre additions, quatre soustractions, deux multiplications. Estimer avant, vérifier après.', 30, ''),
    (3, 'francais', 'Analyser des phrases', 'Cinq phrases : souligner le sujet, entourer le verbe, encadrer les compléments. Dire lesquels se déplacent.', 25, ''),
    (4, 'francais', 'Copie soignée', 'Copier huit lignes d’un texte au choix, le plus soigneusement possible. On relit avant de rendre.', 20, ''),
    (5, 'francais', 'Lecture et questions', 'Un texte court, puis cinq questions : trois sur ce qui est écrit, deux sur ce qui se déduit.', 30, ''),
    (6, 'geographie', 'Tout le monde n’a pas Internet', 'Lis la leçon, puis fais les exercices. Tes calculs sur ton brouillon, le résultat sur l’écran.', 25, 'g-p5-fracture'),
    (7, 'maison', 'Vélo', 'Une sortie. Repérer le trajet sur un plan avant de partir, puis le raconter au retour.', 30, '')
  ) as v (rang, matiere, titre, consigne, minutes, lecon)
 where j.famille_id = (select id from famille) and j.jour = '2027-06-01'
   and not exists (select 1 from seance s where s.journee_id = j.id);

insert into journee (famille_id, jour) select f.id, '2027-06-02' from famille f
  on conflict (famille_id, jour) do nothing;
insert into seance
  (journee_id, rang, matiere, titre, reference, consigne, minutes, lecon,
   par_adulte, origine)
select j.id, v.rang, v.matiere, v.titre, '', v.consigne, v.minutes, v.lecon,
       null, 'trame'
  from journee j
  cross join (values
    (1, 'maths', 'Les fractions d’une quantité', 'La moitié de 36, le tiers de 24, les trois quarts de 20. Dix questions à l’oral.', 15, ''),
    (2, 'francais', 'Lecture de théâtre', 'Une scène, lue à deux voix. Les didascalies ne se disent pas : elles se jouent.', 30, ''),
    (3, 'maison', 'Dessin d’observation', 'Dessiner un objet réel en le regardant, pas de mémoire. Vingt minutes sur le même objet.', 45, '')
  ) as v (rang, matiere, titre, consigne, minutes, lecon)
 where j.famille_id = (select id from famille) and j.jour = '2027-06-02'
   and not exists (select 1 from seance s where s.journee_id = j.id);

insert into journee (famille_id, jour) select f.id, '2027-06-03' from famille f
  on conflict (famille_id, jour) do nothing;
insert into seance
  (journee_id, rang, matiere, titre, reference, consigne, minutes, lecon,
   par_adulte, origine)
select j.id, v.rang, v.matiere, v.titre, '', v.consigne, v.minutes, v.lecon,
       null, 'trame'
  from journee j
  cross join (values
    (1, 'maths', 'Les problèmes en une phrase', 'Cinq problèmes dictés, très courts. La réponse sur l’ardoise, sans écrire le calcul.', 15, ''),
    (2, 'maths', 'Le hasard : certain, possible, impossible', 'Lis la leçon, puis fais les exercices. Tes calculs sur ton brouillon, le résultat sur l’écran.', 25, 'm-p5-hasard'),
    (3, 'francais', 'La ponctuation et la lecture à voix haute', 'Lis la leçon, puis fais les exercices. Tes calculs sur ton brouillon, le résultat sur l’écran.', 25, 'f-p5-ponctuation'),
    (4, 'francais', 'Les mots invariables', 'Apprendre dix mots invariables, puis les écrire sous la dictée.', 20, ''),
    (5, 'francais', 'Poésie', 'Lire un poème à voix haute, plusieurs fois. Repérer les rimes et les images. En apprendre quatre vers.', 30, ''),
    (6, 'francais', 'Donner son avis', 'Ce que je pense, pourquoi, un exemple. Huit lignes. Les trois morceaux doivent y être.', 25, ''),
    (7, 'maison', 'Marche et observation', 'Une marche d’une demi-heure. Rapporter trois choses observées, à noter ou à dessiner.', 30, '')
  ) as v (rang, matiere, titre, consigne, minutes, lecon)
 where j.famille_id = (select id from famille) and j.jour = '2027-06-03'
   and not exists (select 1 from seance s where s.journee_id = j.id);

insert into journee (famille_id, jour) select f.id, '2027-06-04' from famille f
  on conflict (famille_id, jour) do nothing;
insert into seance
  (journee_id, rang, matiere, titre, reference, consigne, minutes, lecon,
   par_adulte, origine)
select j.id, v.rang, v.matiere, v.titre, '', v.consigne, v.minutes, v.lecon,
       null, 'trame'
  from journee j
  cross join (values
    (1, 'maths', 'Encadrer et arrondir', 'Entre quels milliers se trouve 6 480 ? Quel est l’arrondi de 12,94 ? Dix questions.', 15, ''),
    (2, 'maths', 'Géométrie : tracer', 'Un programme de construction à suivre à la règle, à l’équerre et au compas. La précision compte.', 30, ''),
    (3, 'francais', 'Les homophones', 'Un texte à trous : a/à, est/et, son/sont, ont/on. Justifier chaque choix par le test de remplacement.', 25, ''),
    (4, 'francais', 'Transformer des phrases', 'Mettre cinq phrases au pluriel, en respectant toute la chaîne d’accords. À l’écrit.', 20, ''),
    (5, 'francais', 'Lecture d’une bande dessinée', 'Une planche. Puis expliquer ce que les images racontent et que le texte ne dit pas.', 30, ''),
    (6, 'francais', 'Expliquer une règle', 'Réécrire avec tes mots une leçon de la semaine, pour quelqu’un qui ne l’a pas eue.', 25, ''),
    (7, 'maison', 'Jeux de raquette', 'Échanges contre un mur ou à deux. Compter les échanges tenus sans faute.', 30, '')
  ) as v (rang, matiere, titre, consigne, minutes, lecon)
 where j.famille_id = (select id from famille) and j.jour = '2027-06-04'
   and not exists (select 1 from seance s where s.journee_id = j.id);

insert into journee (famille_id, jour) select f.id, '2027-06-07' from famille f
  on conflict (famille_id, jour) do nothing;
insert into seance
  (journee_id, rang, matiere, titre, reference, consigne, minutes, lecon,
   par_adulte, origine)
select j.id, v.rang, v.matiere, v.titre, '', v.consigne, v.minutes, v.lecon,
       null, 'trame'
  from journee j
  cross join (values
    (1, 'maths', 'Les unités de mesure', 'Combien de grammes dans 2 kg 500 ? De centimètres dans 3 m 50 ? Dix questions.', 15, ''),
    (2, 'maths', 'Mesurer pour de vrai', 'Mesurer des objets de la maison, noter en deux unités différentes, comparer aux estimations faites avant.', 30, ''),
    (3, 'francais', 'Vocabulaire', 'Dix mots : trouver un synonyme, un contraire, et un mot de la même famille pour chacun.', 25, ''),
    (4, 'francais', 'Dictée à trous', 'Le texte est écrit, il manque les terminaisons des verbes. On les complète en justifiant.', 20, ''),
    (5, 'francais', 'Lecture de théâtre', 'Une scène, lue à deux voix. Les didascalies ne se disent pas : elles se jouent.', 30, ''),
    (6, 'francais', 'Écrire une lettre', 'Une lettre à quelqu’un de la famille. Formule d’appel, corps, formule de fin.', 25, ''),
    (7, 'maison', 'Danse et rythme', 'Suivre une pulsation, inventer une suite de mouvements de huit temps, la refaire à l’identique.', 30, '')
  ) as v (rang, matiere, titre, consigne, minutes, lecon)
 where j.famille_id = (select id from famille) and j.jour = '2027-06-07'
   and not exists (select 1 from seance s where s.journee_id = j.id);

insert into journee (famille_id, jour) select f.id, '2027-06-08' from famille f
  on conflict (famille_id, jour) do nothing;
insert into seance
  (journee_id, rang, matiere, titre, reference, consigne, minutes, lecon,
   par_adulte, origine)
select j.id, v.rang, v.matiere, v.titre, '', v.consigne, v.minutes, v.lecon,
       null, 'trame'
  from journee j
  cross join (values
    (1, 'maths', 'Les durées', 'De 8 h 45 à 12 h 30, combien de temps ? Cinq calculs de durée, à l’oral.', 15, ''),
    (2, 'maths', 'Le nombre du jour', 'Un nombre au tableau. Le décomposer de cinq façons, l’encadrer, dire son nombre de centaines, le doubler.', 30, ''),
    (3, 'francais', 'Le dictionnaire', 'Chercher cinq mots rencontrés cette semaine. Relever la nature du mot et ses différents sens.', 25, ''),
    (4, 'francais', 'Auto-dictée', 'Apprendre quatre lignes par cœur la veille, les écrire de mémoire aujourd’hui.', 20, ''),
    (5, 'francais', 'Lecture libre', 'Le livre que tu veux, sans compte à rendre. On te demande seulement si tu as aimé, et pourquoi.', 30, ''),
    (6, 'arts', 'Le rythme et la pulsation — on reprend', 'On relit le cours, puis on refait les exercices. Tes calculs sur ton brouillon, le résultat sur l’écran.', 25, 'ar-p5-rythme'),
    (7, 'maison', 'Jardinage ou bricolage', 'Planter, arroser, mesurer, réparer. Le travail des mains compte autant que le reste.', 30, '')
  ) as v (rang, matiere, titre, consigne, minutes, lecon)
 where j.famille_id = (select id from famille) and j.jour = '2027-06-08'
   and not exists (select 1 from seance s where s.journee_id = j.id);

insert into journee (famille_id, jour) select f.id, '2027-06-09' from famille f
  on conflict (famille_id, jour) do nothing;
insert into seance
  (journee_id, rang, matiere, titre, reference, consigne, minutes, lecon,
   par_adulte, origine)
select j.id, v.rang, v.matiere, v.titre, '', v.consigne, v.minutes, v.lecon,
       null, 'trame'
  from journee j
  cross join (values
    (1, 'maths', 'Les tables de multiplication', 'Dix multiplications dictées, à l’ardoise. On efface entre chaque. On redit celles qui ont hésité.', 15, ''),
    (2, 'sciences', 'La météo et les saisons — on reprend', 'On relit le cours, puis on refait les exercices. Tes calculs sur ton brouillon, le résultat sur l’écran.', 30, 's-p5-meteo'),
    (3, 'maison', 'Une expérience', 'Mélanger, dissoudre, filtrer, peser. Écrire ce qu’on croit qu’il va se passer AVANT de le faire, puis comparer.', 45, '')
  ) as v (rang, matiere, titre, consigne, minutes, lecon)
 where j.famille_id = (select id from famille) and j.jour = '2027-06-09'
   and not exists (select 1 from seance s where s.journee_id = j.id);

insert into journee (famille_id, jour) select f.id, '2027-06-10' from famille f
  on conflict (famille_id, jour) do nothing;
insert into seance
  (journee_id, rang, matiere, titre, reference, consigne, minutes, lecon,
   par_adulte, origine)
select j.id, v.rang, v.matiere, v.titre, '', v.consigne, v.minutes, v.lecon,
       null, 'trame'
  from journee j
  cross join (values
    (1, 'maths', 'Les doubles et les moitiés', 'Le double de 45, la moitié de 68, le double de 250… Dix questions, à l’oral.', 15, ''),
    (2, 'maths', 'Les figures et leurs propriétés — on reprend', 'On relit le cours, puis on refait les exercices. Tes calculs sur ton brouillon, le résultat sur l’écran.', 30, 'm-p5-figures'),
    (3, 'francais', 'Le merveilleux et l’étrange — on reprend', 'On relit le cours, puis on refait les exercices. Tes calculs sur ton brouillon, le résultat sur l’écran.', 25, 'f-p5-merveilleux'),
    (4, 'francais', 'Dictée de phrases', 'Trois phrases. On souligne les verbes et on entoure les sujets avant de corriger.', 20, ''),
    (5, 'francais', 'Lecture silencieuse', 'Vingt minutes dans le livre en cours, puis raconter ce qui vient de se passer.', 30, ''),
    (6, 'histoire', 'Le royaume en 1789 et les Lumières — on reprend', 'On relit le cours, puis on refait les exercices. Tes calculs sur ton brouillon, le résultat sur l’écran.', 30, 'h-p5-royaume-1789'),
    (7, 'maison', 'Jeux de ballon', 'Passes, tirs, jonglages. Compter les réussites de suite, battre son propre score.', 30, '')
  ) as v (rang, matiere, titre, consigne, minutes, lecon)
 where j.famille_id = (select id from famille) and j.jour = '2027-06-10'
   and not exists (select 1 from seance s where s.journee_id = j.id);

insert into journee (famille_id, jour) select f.id, '2027-06-11' from famille f
  on conflict (famille_id, jour) do nothing;
insert into seance
  (journee_id, rang, matiere, titre, reference, consigne, minutes, lecon,
   par_adulte, origine)
select j.id, v.rang, v.matiere, v.titre, '', v.consigne, v.minutes, v.lecon,
       null, 'trame'
  from journee j
  cross join (values
    (1, 'maths', 'Les compléments à 100', 'Combien manque-t-il à 67 pour aller à 100 ? Dix questions. Puis les compléments à 1 000.', 15, ''),
    (2, 'maths', 'Reprendre la leçon de maths', 'Refaire les exercices de la dernière leçon de maths, sur le cahier cette fois. Comparer avec ce qui avait été trouvé.', 30, ''),
    (3, 'francais', 'Reprendre la leçon de français', 'Refaire les exercices de la dernière leçon de français, sur le cahier.', 25, ''),
    (4, 'francais', 'Copie soignée', 'Copier huit lignes d’un texte au choix, le plus soigneusement possible. On relit avant de rendre.', 20, ''),
    (5, 'francais', 'Lecture et questions', 'Un texte court, puis cinq questions : trois sur ce qui est écrit, deux sur ce qui se déduit.', 30, ''),
    (6, 'francais', 'Écrire un dialogue', 'Deux personnages, six répliques. Tirets, verbes de parole variés, une ligne par personne.', 25, ''),
    (7, 'maison', 'Vélo', 'Une sortie. Repérer le trajet sur un plan avant de partir, puis le raconter au retour.', 30, '')
  ) as v (rang, matiere, titre, consigne, minutes, lecon)
 where j.famille_id = (select id from famille) and j.jour = '2027-06-11'
   and not exists (select 1 from seance s where s.journee_id = j.id);

insert into journee (famille_id, jour) select f.id, '2027-06-14' from famille f
  on conflict (famille_id, jour) do nothing;
insert into seance
  (journee_id, rang, matiere, titre, reference, consigne, minutes, lecon,
   par_adulte, origine)
select j.id, v.rang, v.matiere, v.titre, '', v.consigne, v.minutes, v.lecon,
       null, 'trame'
  from journee j
  cross join (values
    (1, 'maths', 'Ajouter 9, 19, 29', 'On ajoute la dizaine ronde et on retire 1. Dix questions, en disant la procédure à voix haute.', 15, ''),
    (2, 'maths', 'Perpendiculaires et parallèles — on reprend', 'On relit le cours, puis on refait les exercices. Tes calculs sur ton brouillon, le résultat sur l’écran.', 25, 'm-p5-perpendiculaires'),
    (3, 'francais', 'La morale d’une histoire — on reprend', 'On relit le cours, puis on refait les exercices. Tes calculs sur ton brouillon, le résultat sur l’écran.', 25, 'f-p5-morale'),
    (4, 'francais', 'Dictée préparée', 'Le texte a été lu la veille. On le dicte, puis on compare avec l’original.', 20, ''),
    (5, 'francais', 'Lecture d’un documentaire', 'Une double page documentaire. Relever la nature et la source du document avant de lire.', 30, ''),
    (6, 'sciences', 'Le cerveau et l’attention — on reprend', 'On relit le cours, puis on refait les exercices. Tes calculs sur ton brouillon, le résultat sur l’écran.', 30, 's-p5-cerveau'),
    (7, 'maison', 'Parcours et équilibre', 'Un parcours à installer soi-même : sauter, grimper, tenir en équilibre, ramper.', 30, '')
  ) as v (rang, matiere, titre, consigne, minutes, lecon)
 where j.famille_id = (select id from famille) and j.jour = '2027-06-14'
   and not exists (select 1 from seance s where s.journee_id = j.id);

insert into journee (famille_id, jour) select f.id, '2027-06-15' from famille f
  on conflict (famille_id, jour) do nothing;
insert into seance
  (journee_id, rang, matiere, titre, reference, consigne, minutes, lecon,
   par_adulte, origine)
select j.id, v.rang, v.matiere, v.titre, '', v.consigne, v.minutes, v.lecon,
       null, 'trame'
  from journee j
  cross join (values
    (1, 'maths', 'Multiplier par 10, 100, 1 000', 'Dix questions rapides. Puis diviser par 10 : 320 ÷ 10, 4 500 ÷ 10.', 15, ''),
    (2, 'maths', 'Mesurer pour de vrai', 'Mesurer des objets de la maison, noter en deux unités différentes, comparer aux estimations faites avant.', 30, ''),
    (3, 'francais', 'Vocabulaire', 'Dix mots : trouver un synonyme, un contraire, et un mot de la même famille pour chacun.', 25, ''),
    (4, 'francais', 'Les mots invariables', 'Apprendre dix mots invariables, puis les écrire sous la dictée.', 20, ''),
    (5, 'francais', 'Poésie', 'Lire un poème à voix haute, plusieurs fois. Repérer les rimes et les images. En apprendre quatre vers.', 30, ''),
    (6, 'anglais', 'Les lieux et le chemin — on reprend', 'On relit le cours, puis on refait les exercices. Tes calculs sur ton brouillon, le résultat sur l’écran.', 25, 'a-p5-lieux'),
    (7, 'maison', 'Marche et observation', 'Une marche d’une demi-heure. Rapporter trois choses observées, à noter ou à dessiner.', 30, '')
  ) as v (rang, matiere, titre, consigne, minutes, lecon)
 where j.famille_id = (select id from famille) and j.jour = '2027-06-15'
   and not exists (select 1 from seance s where s.journee_id = j.id);

insert into journee (famille_id, jour) select f.id, '2027-06-16' from famille f
  on conflict (famille_id, jour) do nothing;
insert into seance
  (journee_id, rang, matiere, titre, reference, consigne, minutes, lecon,
   par_adulte, origine)
select j.id, v.rang, v.matiere, v.titre, '', v.consigne, v.minutes, v.lecon,
       null, 'trame'
  from journee j
  cross join (values
    (1, 'maths', 'Multiplier par 4 et par 8', 'Par 4, c’est doubler deux fois. Par 8, trois fois. Dix questions en disant les étapes.', 15, ''),
    (2, 'francais', 'Lecture à voix haute', 'Une page préparée, lue à voix haute en respectant la ponctuation. On marque au crayon où respirer.', 30, ''),
    (3, 'maison', 'La boîte à pourquoi', 'Prendre une question que tu as posée cette semaine, chercher la réponse ensemble, et s’arrêter quand on ne sait plus.', 45, '')
  ) as v (rang, matiere, titre, consigne, minutes, lecon)
 where j.famille_id = (select id from famille) and j.jour = '2027-06-16'
   and not exists (select 1 from seance s where s.journee_id = j.id);

insert into journee (famille_id, jour) select f.id, '2027-06-17' from famille f
  on conflict (famille_id, jour) do nothing;
insert into seance
  (journee_id, rang, matiere, titre, reference, consigne, minutes, lecon,
   par_adulte, origine)
select j.id, v.rang, v.matiere, v.titre, '', v.consigne, v.minutes, v.lecon,
       null, 'trame'
  from journee j
  cross join (values
    (1, 'maths', 'Multiplier par 5 et par 50', 'Par 5, c’est la moitié de par 10. Par 50, la moitié de par 100. Dix questions.', 15, ''),
    (2, 'maths', 'La symétrie axiale — on reprend', 'On relit le cours, puis on refait les exercices. Tes calculs sur ton brouillon, le résultat sur l’écran.', 30, 'm-p5-symetrie'),
    (3, 'francais', 'L’orthographe des mots — on reprend', 'On relit le cours, puis on refait les exercices. Tes calculs sur ton brouillon, le résultat sur l’écran.', 25, 'f-p5-orthographe'),
    (4, 'francais', 'Dictée à trous', 'Le texte est écrit, il manque les terminaisons des verbes. On les complète en justifiant.', 20, ''),
    (5, 'francais', 'Lecture de théâtre', 'Une scène, lue à deux voix. Les didascalies ne se disent pas : elles se jouent.', 30, ''),
    (6, 'geographie', 'Comment marche Internet — on reprend', 'On relit le cours, puis on refait les exercices. Tes calculs sur ton brouillon, le résultat sur l’écran.', 35, 'g-p5-internet'),
    (7, 'maison', 'Danse et rythme', 'Suivre une pulsation, inventer une suite de mouvements de huit temps, la refaire à l’identique.', 30, '')
  ) as v (rang, matiere, titre, consigne, minutes, lecon)
 where j.famille_id = (select id from famille) and j.jour = '2027-06-17'
   and not exists (select 1 from seance s where s.journee_id = j.id);

insert into journee (famille_id, jour) select f.id, '2027-06-18' from famille f
  on conflict (famille_id, jour) do nothing;
insert into seance
  (journee_id, rang, matiere, titre, reference, consigne, minutes, lecon,
   par_adulte, origine)
select j.id, v.rang, v.matiere, v.titre, '', v.consigne, v.minutes, v.lecon,
       null, 'trame'
  from journee j
  cross join (values
    (1, 'maths', 'Les fractions d’une quantité', 'La moitié de 36, le tiers de 24, les trois quarts de 20. Dix questions à l’oral.', 15, ''),
    (2, 'maths', 'Problèmes du jour', 'Trois problèmes sur le cahier. Pour chacun : ce qu’on cherche, ce qu’on sait, le calcul, la phrase de réponse.', 30, ''),
    (3, 'francais', 'Conjugaison', 'Trois verbes, aux quatre temps connus, à toutes les personnes. Sur le cahier, sans modèle.', 25, ''),
    (4, 'francais', 'Auto-dictée', 'Apprendre quatre lignes par cœur la veille, les écrire de mémoire aujourd’hui.', 20, ''),
    (5, 'francais', 'Lecture libre', 'Le livre que tu veux, sans compte à rendre. On te demande seulement si tu as aimé, et pourquoi.', 30, ''),
    (6, 'francais', 'Inventer un problème', 'Écrire un problème de mathématiques à deux étapes, avec sa solution sur une autre feuille.', 25, ''),
    (7, 'maison', 'Jardinage ou bricolage', 'Planter, arroser, mesurer, réparer. Le travail des mains compte autant que le reste.', 30, '')
  ) as v (rang, matiere, titre, consigne, minutes, lecon)
 where j.famille_id = (select id from famille) and j.jour = '2027-06-18'
   and not exists (select 1 from seance s where s.journee_id = j.id);

insert into journee (famille_id, jour) select f.id, '2027-06-21' from famille f
  on conflict (famille_id, jour) do nothing;
insert into seance
  (journee_id, rang, matiere, titre, reference, consigne, minutes, lecon,
   par_adulte, origine)
select j.id, v.rang, v.matiere, v.titre, '', v.consigne, v.minutes, v.lecon,
       null, 'trame'
  from journee j
  cross join (values
    (1, 'maths', 'Les problèmes en une phrase', 'Cinq problèmes dictés, très courts. La réponse sur l’ardoise, sans écrire le calcul.', 15, ''),
    (2, 'maths', 'Reprendre la leçon de maths', 'Refaire les exercices de la dernière leçon de maths, sur le cahier cette fois. Comparer avec ce qui avait été trouvé.', 30, ''),
    (3, 'francais', 'Reprendre la leçon de français', 'Refaire les exercices de la dernière leçon de français, sur le cahier.', 25, ''),
    (4, 'francais', 'Dictée de mots', 'Quinze mots de la liste en cours. On corrige ensemble, et on réécrit trois fois ceux qui ont hésité.', 20, ''),
    (5, 'francais', 'Lecture à voix haute', 'Une page préparée, lue à voix haute en respectant la ponctuation. On marque au crayon où respirer.', 30, ''),
    (6, 'sciences', 'Grandir : les changements du corps — on reprend', 'On relit le cours, puis on refait les exercices. Tes calculs sur ton brouillon, le résultat sur l’écran.', 25, 's-p5-puberte'),
    (7, 'maison', 'Course et endurance', 'Courir sans s’arrêter, en augmentant un peu chaque semaine. On chronomètre, on ne compare à personne.', 30, '')
  ) as v (rang, matiere, titre, consigne, minutes, lecon)
 where j.famille_id = (select id from famille) and j.jour = '2027-06-21'
   and not exists (select 1 from seance s where s.journee_id = j.id);

insert into journee (famille_id, jour) select f.id, '2027-06-22' from famille f
  on conflict (famille_id, jour) do nothing;
insert into seance
  (journee_id, rang, matiere, titre, reference, consigne, minutes, lecon,
   par_adulte, origine)
select j.id, v.rang, v.matiere, v.titre, '', v.consigne, v.minutes, v.lecon,
       null, 'trame'
  from journee j
  cross join (values
    (1, 'maths', 'Encadrer et arrondir', 'Entre quels milliers se trouve 6 480 ? Quel est l’arrondi de 12,94 ? Dix questions.', 15, ''),
    (2, 'maths', 'Les solides — on reprend', 'On relit le cours, puis on refait les exercices. Tes calculs sur ton brouillon, le résultat sur l’écran.', 30, 'm-p5-solides'),
    (3, 'francais', 'Les quatre temps : reconnaître et choisir — on reprend', 'On relit le cours, puis on refait les exercices. Tes calculs sur ton brouillon, le résultat sur l’écran.', 30, 'f-p5-conjugaison-bilan'),
    (4, 'francais', 'Dictée de phrases', 'Trois phrases. On souligne les verbes et on entoure les sujets avant de corriger.', 20, ''),
    (5, 'francais', 'Lecture silencieuse', 'Vingt minutes dans le livre en cours, puis raconter ce qui vient de se passer.', 30, ''),
    (6, 'francais', 'Raconter sa journée d’hier', 'Dix lignes au passé. Vérifier que les temps ne changent pas en cours de route.', 25, ''),
    (7, 'maison', 'Jeux de ballon', 'Passes, tirs, jonglages. Compter les réussites de suite, battre son propre score.', 30, '')
  ) as v (rang, matiere, titre, consigne, minutes, lecon)
 where j.famille_id = (select id from famille) and j.jour = '2027-06-22'
   and not exists (select 1 from seance s where s.journee_id = j.id);

insert into journee (famille_id, jour) select f.id, '2027-06-23' from famille f
  on conflict (famille_id, jour) do nothing;
insert into seance
  (journee_id, rang, matiere, titre, reference, consigne, minutes, lecon,
   par_adulte, origine)
select j.id, v.rang, v.matiere, v.titre, '', v.consigne, v.minutes, v.lecon,
       null, 'trame'
  from journee j
  cross join (values
    (1, 'maths', 'Les unités de mesure', 'Combien de grammes dans 2 kg 500 ? De centimètres dans 3 m 50 ? Dix questions.', 15, ''),
    (2, 'geographie', 'Tout le monde n’a pas Internet — on reprend', 'On relit le cours, puis on refait les exercices. Tes calculs sur ton brouillon, le résultat sur l’écran.', 25, 'g-p5-fracture'),
    (3, 'maison', 'Construire quelque chose', 'Un objet qui marche : un pont en papier qui porte un livre, un moulin, un circuit. Croquis d’abord.', 45, '')
  ) as v (rang, matiere, titre, consigne, minutes, lecon)
 where j.famille_id = (select id from famille) and j.jour = '2027-06-23'
   and not exists (select 1 from seance s where s.journee_id = j.id);

insert into journee (famille_id, jour) select f.id, '2027-06-24' from famille f
  on conflict (famille_id, jour) do nothing;
insert into seance
  (journee_id, rang, matiere, titre, reference, consigne, minutes, lecon,
   par_adulte, origine)
select j.id, v.rang, v.matiere, v.titre, '', v.consigne, v.minutes, v.lecon,
       null, 'trame'
  from journee j
  cross join (values
    (1, 'maths', 'Les durées', 'De 8 h 45 à 12 h 30, combien de temps ? Cinq calculs de durée, à l’oral.', 15, ''),
    (2, 'maths', 'Le nombre du jour', 'Un nombre au tableau. Le décomposer de cinq façons, l’encadrer, dire son nombre de centaines, le doubler.', 30, ''),
    (3, 'francais', 'Le dictionnaire', 'Chercher cinq mots rencontrés cette semaine. Relever la nature du mot et ses différents sens.', 25, ''),
    (4, 'francais', 'Dictée préparée', 'Le texte a été lu la veille. On le dicte, puis on compare avec l’original.', 20, ''),
    (5, 'francais', 'Lecture d’un documentaire', 'Une double page documentaire. Relever la nature et la source du document avant de lire.', 30, ''),
    (6, 'francais', 'Décrire un lieu', 'Dix lignes sur un endroit que tu connais. Au moins trois adjectifs qui servent vraiment.', 25, ''),
    (7, 'maison', 'Parcours et équilibre', 'Un parcours à installer soi-même : sauter, grimper, tenir en équilibre, ramper.', 30, '')
  ) as v (rang, matiere, titre, consigne, minutes, lecon)
 where j.famille_id = (select id from famille) and j.jour = '2027-06-24'
   and not exists (select 1 from seance s where s.journee_id = j.id);

insert into journee (famille_id, jour) select f.id, '2027-06-25' from famille f
  on conflict (famille_id, jour) do nothing;
insert into seance
  (journee_id, rang, matiere, titre, reference, consigne, minutes, lecon,
   par_adulte, origine)
select j.id, v.rang, v.matiere, v.titre, '', v.consigne, v.minutes, v.lecon,
       null, 'trame'
  from journee j
  cross join (values
    (1, 'maths', 'Les tables de multiplication', 'Dix multiplications dictées, à l’ardoise. On efface entre chaque. On redit celles qui ont hésité.', 15, ''),
    (2, 'maths', 'Le nombre caché — on reprend', 'On relit le cours, puis on refait les exercices. Tes calculs sur ton brouillon, le résultat sur l’écran.', 25, 'm-p5-nombre-cache'),
    (3, 'francais', 'Expliquer et donner son avis — on reprend', 'On relit le cours, puis on refait les exercices. Tes calculs sur ton brouillon, le résultat sur l’écran.', 25, 'f-p5-expliquer'),
    (4, 'francais', 'Les mots invariables', 'Apprendre dix mots invariables, puis les écrire sous la dictée.', 20, ''),
    (5, 'francais', 'Poésie', 'Lire un poème à voix haute, plusieurs fois. Repérer les rimes et les images. En apprendre quatre vers.', 30, ''),
    (6, 'sciences', 'Donner des instructions à une machine — on reprend', 'On relit le cours, puis on refait les exercices. Tes calculs sur ton brouillon, le résultat sur l’écran.', 30, 's-p5-programmation'),
    (7, 'maison', 'Marche et observation', 'Une marche d’une demi-heure. Rapporter trois choses observées, à noter ou à dessiner.', 30, '')
  ) as v (rang, matiere, titre, consigne, minutes, lecon)
 where j.famille_id = (select id from famille) and j.jour = '2027-06-25'
   and not exists (select 1 from seance s where s.journee_id = j.id);

insert into journee (famille_id, jour) select f.id, '2027-06-28' from famille f
  on conflict (famille_id, jour) do nothing;
insert into seance
  (journee_id, rang, matiere, titre, reference, consigne, minutes, lecon,
   par_adulte, origine)
select j.id, v.rang, v.matiere, v.titre, '', v.consigne, v.minutes, v.lecon,
       null, 'trame'
  from journee j
  cross join (values
    (1, 'maths', 'Les doubles et les moitiés', 'Le double de 45, la moitié de 68, le double de 250… Dix questions, à l’oral.', 15, ''),
    (2, 'maths', 'Problèmes du jour', 'Trois problèmes sur le cahier. Pour chacun : ce qu’on cherche, ce qu’on sait, le calcul, la phrase de réponse.', 30, ''),
    (3, 'francais', 'Conjugaison', 'Trois verbes, aux quatre temps connus, à toutes les personnes. Sur le cahier, sans modèle.', 25, ''),
    (4, 'francais', 'Transformer des phrases', 'Mettre cinq phrases au pluriel, en respectant toute la chaîne d’accords. À l’écrit.', 20, ''),
    (5, 'francais', 'Lecture d’une bande dessinée', 'Une planche. Puis expliquer ce que les images racontent et que le texte ne dit pas.', 30, ''),
    (6, 'histoire', '1789, l’année révolutionnaire — on reprend', 'On relit le cours, puis on refait les exercices. Tes calculs sur ton brouillon, le résultat sur l’écran.', 35, 'h-p5-revolution'),
    (7, 'maison', 'Jeux de raquette', 'Échanges contre un mur ou à deux. Compter les échanges tenus sans faute.', 30, '')
  ) as v (rang, matiere, titre, consigne, minutes, lecon)
 where j.famille_id = (select id from famille) and j.jour = '2027-06-28'
   and not exists (select 1 from seance s where s.journee_id = j.id);

insert into journee (famille_id, jour) select f.id, '2027-06-29' from famille f
  on conflict (famille_id, jour) do nothing;
insert into seance
  (journee_id, rang, matiere, titre, reference, consigne, minutes, lecon,
   par_adulte, origine)
select j.id, v.rang, v.matiere, v.titre, '', v.consigne, v.minutes, v.lecon,
       null, 'trame'
  from journee j
  cross join (values
    (1, 'maths', 'Les compléments à 100', 'Combien manque-t-il à 67 pour aller à 100 ? Dix questions. Puis les compléments à 1 000.', 15, ''),
    (2, 'maths', 'Le hasard : certain, possible, impossible — on reprend', 'On relit le cours, puis on refait les exercices. Tes calculs sur ton brouillon, le résultat sur l’écran.', 25, 'm-p5-hasard'),
    (3, 'francais', 'La ponctuation et la lecture à voix haute — on reprend', 'On relit le cours, puis on refait les exercices. Tes calculs sur ton brouillon, le résultat sur l’écran.', 25, 'f-p5-ponctuation'),
    (4, 'francais', 'Dictée à trous', 'Le texte est écrit, il manque les terminaisons des verbes. On les complète en justifiant.', 20, ''),
    (5, 'francais', 'Lecture de théâtre', 'Une scène, lue à deux voix. Les didascalies ne se disent pas : elles se jouent.', 30, ''),
    (6, 'francais', 'Écrire une lettre', 'Une lettre à quelqu’un de la famille. Formule d’appel, corps, formule de fin.', 25, ''),
    (7, 'maison', 'Danse et rythme', 'Suivre une pulsation, inventer une suite de mouvements de huit temps, la refaire à l’identique.', 30, '')
  ) as v (rang, matiere, titre, consigne, minutes, lecon)
 where j.famille_id = (select id from famille) and j.jour = '2027-06-29'
   and not exists (select 1 from seance s where s.journee_id = j.id);

insert into journee (famille_id, jour) select f.id, '2027-06-30' from famille f
  on conflict (famille_id, jour) do nothing;
insert into seance
  (journee_id, rang, matiere, titre, reference, consigne, minutes, lecon,
   par_adulte, origine)
select j.id, v.rang, v.matiere, v.titre, '', v.consigne, v.minutes, v.lecon,
       null, 'trame'
  from journee j
  cross join (values
    (1, 'maths', 'Ajouter 9, 19, 29', 'On ajoute la dizaine ronde et on retire 1. Dix questions, en disant la procédure à voix haute.', 15, ''),
    (2, 'francais', 'Lecture et questions', 'Un texte court, puis cinq questions : trois sur ce qui est écrit, deux sur ce qui se déduit.', 30, ''),
    (3, 'maison', 'Une sortie', 'Marché, médiathèque, musée, chantier, gare, ferme. On prépare une question avant de partir, et on y répond au retour.', 45, '')
  ) as v (rang, matiere, titre, consigne, minutes, lecon)
 where j.famille_id = (select id from famille) and j.jour = '2027-06-30'
   and not exists (select 1 from seance s where s.journee_id = j.id);

insert into journee (famille_id, jour) select f.id, '2027-07-01' from famille f
  on conflict (famille_id, jour) do nothing;
insert into seance
  (journee_id, rang, matiere, titre, reference, consigne, minutes, lecon,
   par_adulte, origine)
select j.id, v.rang, v.matiere, v.titre, '', v.consigne, v.minutes, v.lecon,
       null, 'trame'
  from journee j
  cross join (values
    (1, 'maths', 'Multiplier par 10, 100, 1 000', 'Dix questions rapides. Puis diviser par 10 : 320 ÷ 10, 4 500 ÷ 10.', 15, ''),
    (2, 'maths', 'Mesurer pour de vrai', 'Mesurer des objets de la maison, noter en deux unités différentes, comparer aux estimations faites avant.', 30, ''),
    (3, 'francais', 'Vocabulaire', 'Dix mots : trouver un synonyme, un contraire, et un mot de la même famille pour chacun.', 25, ''),
    (4, 'francais', 'Dictée de mots', 'Quinze mots de la liste en cours. On corrige ensemble, et on réécrit trois fois ceux qui ont hésité.', 20, ''),
    (5, 'francais', 'Lecture à voix haute', 'Une page préparée, lue à voix haute en respectant la ponctuation. On marque au crayon où respirer.', 30, ''),
    (6, 'francais', 'Écrire la suite', 'Lire le début d’un récit, puis en écrire la suite : dix lignes. Brouillon d’abord.', 25, ''),
    (7, 'maison', 'Course et endurance', 'Courir sans s’arrêter, en augmentant un peu chaque semaine. On chronomètre, on ne compare à personne.', 30, '')
  ) as v (rang, matiere, titre, consigne, minutes, lecon)
 where j.famille_id = (select id from famille) and j.jour = '2027-07-01'
   and not exists (select 1 from seance s where s.journee_id = j.id);

insert into journee (famille_id, jour) select f.id, '2027-07-02' from famille f
  on conflict (famille_id, jour) do nothing;
insert into seance
  (journee_id, rang, matiere, titre, reference, consigne, minutes, lecon,
   par_adulte, origine)
select j.id, v.rang, v.matiere, v.titre, '', v.consigne, v.minutes, v.lecon,
       null, 'trame'
  from journee j
  cross join (values
    (1, 'maths', 'Multiplier par 4 et par 8', 'Par 4, c’est doubler deux fois. Par 8, trois fois. Dix questions en disant les étapes.', 15, ''),
    (2, 'maths', 'Le nombre du jour', 'Un nombre au tableau. Le décomposer de cinq façons, l’encadrer, dire son nombre de centaines, le doubler.', 30, ''),
    (3, 'francais', 'Le dictionnaire', 'Chercher cinq mots rencontrés cette semaine. Relever la nature du mot et ses différents sens.', 25, ''),
    (4, 'francais', 'Dictée de phrases', 'Trois phrases. On souligne les verbes et on entoure les sujets avant de corriger.', 20, ''),
    (5, 'francais', 'Lecture silencieuse', 'Vingt minutes dans le livre en cours, puis raconter ce qui vient de se passer.', 30, ''),
    (6, 'francais', 'Raconter sa journée d’hier', 'Dix lignes au passé. Vérifier que les temps ne changent pas en cours de route.', 25, ''),
    (7, 'maison', 'Jeux de ballon', 'Passes, tirs, jonglages. Compter les réussites de suite, battre son propre score.', 30, '')
  ) as v (rang, matiere, titre, consigne, minutes, lecon)
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
