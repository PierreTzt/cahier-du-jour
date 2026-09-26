-- 021 — Qui a changé le ton, et quand.
--
-- Deux maisons partagent la même journée. Critique du 16 septembre 2026 :
-- rien ne disait à l'une que l'autre avait allégé la journée, ni quand — le
-- récapitulatif « 4 séances retirées » ne s'affichait que chez celui qui avait
-- cliqué. La journée garde maintenant l'adulte et l'heure du dernier
-- changement de ton, affichés sous les trois boutons.

begin;

alter table journee
  add column ton_par uuid references personne (id) on delete set null,
  add column ton_le timestamptz;

commit;
