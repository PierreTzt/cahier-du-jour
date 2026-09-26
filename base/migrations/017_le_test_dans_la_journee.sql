-- 017 — La partie du test est une étape de sa journée.
--
-- Demande des parents le 16 septembre 2026, premier jour réel, juste après
-- avoir découpé le test en une partie par jour : que la partie du jour soit
-- **dans** la journée, sur le chemin, et plus un lien à côté. Choix du parrain :
-- placée d'elle-même en tête de ce qui reste à faire, chaque journée normale,
-- tant que le test n'est pas fini ; retirable et déplaçable par un adulte ; et
-- plus aucune autre porte vers le test.
--
-- Une séance marquée `test` ne porte ni leçon ni fiche. Son étape mène à
-- `/questions`, et elle se coche d'elle-même quand la partie du jour est finie.
-- Une seule par journée : l'index partiel empêche qu'un double rendu la pose
-- deux fois.
--
-- `sans_test` retient qu'un adulte l'a retirée de cette journée-là. Sans lui,
-- elle reviendrait au premier rechargement, et « retirer » ne voudrait rien
-- dire.

begin;

alter table seance add column test boolean not null default false;

create unique index seance_un_seul_test on seance (journee_id) where test;

alter table journee add column sans_test boolean not null default false;

commit;
