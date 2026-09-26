-- 018 — Le mode d'emploi des adultes.
--
-- Retour des parents le 16 septembre 2026, premier jour réel : « c'est très
-- complet, mais un peu usine à gaz côté parent ». Demande du parrain : une
-- fenêtre qui explique chaque écran à l'entrée d'un adulte, et qui revient
-- tant que la case « J'ai tout compris » n'est pas cochée. L'enfant n'en voit
-- rien.
--
-- « À chaque connexion » ne pouvait pas se prendre au mot : une session tient
-- un an sur l'appareil (lib/session.ts), la fenêtre ne serait jamais revenue.
-- Choix du parrain : **une fois par jour**, au premier écran ouvert.
--
-- Deux colonnes sur la personne, et pas sur la session : c'est quelqu'un qui a
-- compris, pas une tablette. Celui qui l'a lue sur son téléphone ne la revoit
-- pas le soir même sur l'ordinateur.
--
--   `mode_emploi_compris_le`  la case cochée. Nulle tant qu'elle ne l'est pas ;
--                             décocher la remet à nul.
--   `mode_emploi_ferme_le`    le dernier jour où la fenêtre a été refermée sans
--                             la case. Elle ne revient pas avant le lendemain.

begin;

alter table personne
  add column mode_emploi_compris_le timestamptz,
  add column mode_emploi_ferme_le date;

commit;
