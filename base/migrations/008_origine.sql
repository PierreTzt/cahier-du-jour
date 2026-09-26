-- 008 — D'où vient une séance.
--
-- Le ton du jour — normale, allégée, repos — ne changeait rien. Le parrain l'a
-- vu : « je clique sur Normal, allégé ou repos, ça n'a pas l'air de changer le
-- programme de la journée ». Il avait raison, c'était un bouton décoratif.
--
-- Pour qu'« allégée » puisse retirer des séances, il faut savoir lesquelles on
-- a le droit de retirer. Une séance posée par la trame est remplaçable : elle
-- se recalcule. Une séance qu'un parent a écrite à la main, ou une leçon qu'il
-- est allé choisir dans la bibliothèque, ne l'est pas — la retirer parce qu'on
-- a cliqué sur « allégée » effacerait une décision humaine.
--
-- D'où cette colonne. `trame` veut dire « posé par le calcul, donc reprenable
-- par le calcul ». `main` veut dire « quelqu'un l'a voulu ».

begin;

create type origine_seance as enum ('trame', 'main');

-- Les séances déjà en base viennent de la trame : c'est la seule chose qui en
-- a posé jusqu'ici, et les journées d'essai ont été supprimées.
alter table seance
  add column origine origine_seance not null default 'main';

update seance set origine = 'trame';

comment on column seance.origine is
  'trame = posée par le calcul, retirable par lui. main = voulue par un adulte.';

commit;
