-- 010 — Dire laquelle.
--
-- Deux rituels de la trame portaient le même titre : « Reprendre la leçon de
-- la semaine », une fois en mathématiques, une fois en français. Treize
-- journées de l'année tiraient les deux le même jour, et affichaient donc deux
-- lignes identiques. Un parent ne pouvait pas savoir laquelle était laquelle.
--
-- Le vrai problème était plus bas : `accorderAuTon` compare les séances de la
-- base à celles de la trame **par leur titre**. Deux titres identiques dans
-- une journée, et il ne peut plus les distinguer — il en prend une pour
-- l'autre, et leur rang devient le même. Un test l'interdit maintenant.
--
-- Les titres sont donc nommés par matière dans `lib/trame.ts`. Cette migration
-- renomme les séances déjà écrites, en s'appuyant sur leur colonne `matiere` :
-- c'est elle qui dit laquelle est laquelle.

begin;

update seance set titre = 'Reprendre la leçon de maths'
 where titre = 'Reprendre la leçon de la semaine' and matiere = 'maths';

update seance set titre = 'Reprendre la leçon de français'
 where titre = 'Reprendre la leçon de la semaine' and matiere = 'francais';

commit;
