-- 020 — Les consignes qu'il lit, corrigées dans les journées déjà écrites.
--
-- Les séances copient leur consigne au moment où la journée est écrite : une
-- consigne corrigée dans `lib/trame.ts` ne change rien aux journées déjà en
-- base, et c'est la base que l'enfant lit. Critique du 16 septembre 2026 :
--
--   - le dehors faisait « battre son propre score », compter « sans faute »,
--     chronométrer — ce que la famille a exclu en refusant le bon point ;
--   - la dictée faisait « réécrire trois fois » ce qui avait hésité ;
--   - la dictée préparée et l'auto-dictée supposaient un travail « la veille »
--     que rien ne portait (la veille du 28 septembre est un dimanche) ;
--   - la lecture libre, « sans compte à rendre », demandait « pourquoi » ;
--   - trois consignes de calcul mental annonçaient un nombre décimal ou des
--     minutes que la fiche du jour ne pose pas, et « rapides » ;
--   - « Tes calculs sur ton brouillon » s'affichait avant une leçon d'histoire.
--
-- Ne touche que ce que la trame a posé, qui n'est pas encore fait, et dont la
-- consigne est exactement l'ancienne : une consigne qu'un parent aurait
-- réécrite reste la sienne. Rien n'est supprimé, rien ne change d'ordre.

begin;

update seance set consigne = 'Entre quelles dizaines se trouve un nombre ? Dix questions, à l’ardoise.'
 where origine = 'trame' and etat = 'a-venir' and consigne = 'Entre quels milliers se trouve 6 480 ? Quel est l’arrondi de 12,94 ? Dix questions.';

update seance set consigne = 'Dix questions, à l’oral. Puis on divise par 10.'
 where origine = 'trame' and etat = 'a-venir' and consigne = 'Dix questions rapides. Puis diviser par 10 : 320 ÷ 10, 4 500 ÷ 10.';

update seance set consigne = 'Combien de temps entre deux heures ? Cinq calculs de durée, à l’oral.'
 where origine = 'trame' and etat = 'a-venir' and consigne = 'De 8 h 45 à 12 h 30, combien de temps ? Cinq calculs de durée, à l’oral.';

update seance set consigne = 'Quinze mots de la liste en cours. On corrige ensemble, et ceux qui ont hésité reviennent dans une prochaine dictée.'
 where origine = 'trame' and etat = 'a-venir' and consigne = 'Quinze mots de la liste en cours. On corrige ensemble, et on réécrit trois fois ceux qui ont hésité.';

update seance set consigne = 'On lit le texte ensemble, puis on le dicte et on compare avec l’original.'
 where origine = 'trame' and etat = 'a-venir' and consigne = 'Le texte a été lu la veille. On le dicte, puis on compare avec l’original.';

update seance set consigne = 'Lire quatre lignes plusieurs fois, les cacher, puis les écrire de mémoire.'
 where origine = 'trame' and etat = 'a-venir' and consigne = 'Apprendre quatre lignes par cœur la veille, les écrire de mémoire aujourd’hui.';

update seance set consigne = 'Le livre que tu veux, sans compte à rendre.'
 where origine = 'trame' and etat = 'a-venir' and consigne = 'Le livre que tu veux, sans compte à rendre. On te demande seulement si tu as aimé, et pourquoi.';

update seance set consigne = 'Courir à ton rythme, et marcher quand il le faut. Rien ne se chronomètre, rien ne se compare.'
 where origine = 'trame' and etat = 'a-venir' and consigne = 'Courir sans s’arrêter, en augmentant un peu chaque semaine. On chronomètre, on ne compare à personne.';

update seance set consigne = 'Passes contre un mur, tirs, jonglages. On regarde le ballon revenir, on ne compte rien.'
 where origine = 'trame' and etat = 'a-venir' and consigne = 'Passes, tirs, jonglages. Compter les réussites de suite, battre son propre score.';

update seance set consigne = 'Échanges contre un mur ou à deux. On cherche un geste souple, on ne compte rien.'
 where origine = 'trame' and etat = 'a-venir' and consigne = 'Échanges contre un mur ou à deux. Compter les échanges tenus sans faute.';

-- Les leçons qui ne se calculent pas : plus de brouillon annoncé.
update seance set consigne = 'Lis la leçon, puis fais les exercices.'
 where lecon <> '' and etat = 'a-venir' and matiere not in ('maths', 'sciences')
   and consigne = 'Lis la leçon, puis fais les exercices. Tes calculs sur ton brouillon, le résultat sur l’écran.';

update seance set consigne = 'On relit le cours, puis on refait les exercices.'
 where lecon <> '' and etat = 'a-venir' and matiere not in ('maths', 'sciences')
   and consigne = 'On relit le cours, puis on refait les exercices. Tes calculs sur ton brouillon, le résultat sur l’écran.';

commit;
