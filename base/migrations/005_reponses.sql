-- 005 — Ce que l'enfant répond.
--
-- Le contenu des exercices vit dans le code (`lib/positionnement.ts`) et pas
-- en base : il se relit dans une revue, il se corrige en un commit, et
-- un parent peut le parcourir. Seules les réponses sont des données.
--
-- Aucune colonne ne dit « juste » ou « faux ». La comparaison avec l'attendu
-- se fait à l'affichage, **du côté des adultes uniquement**. Rien dans cette
-- table ne permet à l'écran de l'enfant de lui apprendre qu'il s'est trompé,
-- et rien ne permet de compter ses erreurs.

begin;

create table reponse (
  id           uuid primary key default gen_random_uuid(),
  personne_id  uuid not null references personne (id) on delete cascade,

  -- Le code stable de l'exercice, défini dans le code.
  exercice     text not null,

  valeur       text not null default '',
  -- « Je ne sais pas » est une réponse à part entière, offerte au même rang
  -- que les autres : ne pas savoir est une information utile aux parents,
  -- pas un trou dans les données.
  sait_pas     boolean not null default false,

  saisi_le     timestamptz not null default now(),

  unique (personne_id, exercice)
);

create index reponse_par_personne on reponse (personne_id);

commit;
