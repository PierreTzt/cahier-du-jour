-- 025 — Déplacer une séance vers un autre jour.
--
-- Retour d'un parent, le 21 septembre 2026 : il voulait faire le jour même
-- deux séances du lendemain. Il les a retirées de mardi, puis n'a trouvé
-- nulle part où les replacer — la liste des leçons à rattraper ne prend ni
-- les rituels ni un jour qui n'est pas encore passé, et aucun geste ne faisait
-- passer une séance d'un jour à un autre.
--
-- Une séance de la trame se reconnaît à son titre, dans la journée de sa date.
-- Déplacée, elle doit continuer à se reconnaître, sinon le ton se trompe des
-- deux côtés : le jour qu'elle a quitté la reposerait au premier clic sur
-- « allégée » ou « normale », et le jour qui l'accueille la retirerait comme
-- un créneau qui n'est pas le sien.
--
--   `prevue_le`  la date dont la trame l'avait prévue, quand elle vit dans la
--                journée d'une autre date. Nulle sinon — y compris quand elle
--                revient chez elle.
--
-- Une séance écrite à la main n'en a jamais besoin : le ton ne la touche pas.

begin;

alter table seance add column prevue_le date;

commit;
