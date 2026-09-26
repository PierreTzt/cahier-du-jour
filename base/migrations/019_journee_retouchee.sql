-- 019 — Savoir qu'un adulte a retouché une journée.
--
-- La réécriture de l'année (`deploiement/ecrire-lannee.ts --reprendre`) jette
-- les journées « que personne n'a touchées » et les réécrit d'après la trame.
-- Son critère ne voyait que ce qui laisse une trace dans les séances : une
-- séance ajoutée à la main, une séance faite. Il ne voyait pas une séance
-- **retirée**, un ordre **changé**, une partie du test retirée : le dimanche
-- soir, un parent prépare sa semaine, et la migration du lundi remettait la
-- dictée qu'il avait enlevée et l'ordre qu'il avait défait. Relevé par la
-- critique du 16 septembre 2026.
--
-- Une colonne, posée par chaque geste d'adulte sur la journée. Une journée
-- retouchée n'est plus jamais réécrite par la trame. Les retouches faites
-- avant cette migration ne sont pas connues : elles restent exposées une
-- dernière fois, et c'est pourquoi le déploiement fait désormais une
-- sauvegarde avant de migrer.

begin;

alter table journee add column retouchee_le timestamptz;

commit;
