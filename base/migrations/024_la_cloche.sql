-- 024 — La cloche des adultes.
--
-- Retour d'un parent, le 21 septembre 2026 : quand l'enfant fait une leçon
-- seul, à l'écran, il n'a aucun moyen de savoir qu'elle n'est pas passée sans
-- aller ouvrir le soir de la bonne journée. Une cloche dans le bandeau
-- s'allume maintenant sur les leçons qui méritent d'être retravaillées (dès
-- deux exercices pas passés, ou mise de côté) ; elle mène à `/a-reprendre`.
--
-- Elle s'éteint quand on a ouvert la page. Sur la personne et pas sur la
-- session, comme le mode d'emploi (018) : c'est quelqu'un qui a lu, pas une
-- tablette. Chaque adulte a la sienne — que l'autre parent l'ait ouverte ne
-- dit pas que vous l'avez lue.
--
--   `a_reprendre_vu_le`  la dernière ouverture de `/a-reprendre`. Nulle tant
--                        qu'elle n'a jamais été ouverte : tout ce qui sonne
--                        est alors nouveau.
--
-- Rien n'est écrit sur les leçons elles-mêmes : ce qui est à reprendre se
-- recalcule à chaque lecture, depuis le travail inscrit et le manuel.

begin;

alter table personne add column a_reprendre_vu_le timestamptz;

commit;
