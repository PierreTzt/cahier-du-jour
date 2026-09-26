-- 006 — Le cours sur l'écran, le brouillon sur papier, le résultat en base.
--
-- Jusqu'ici une séance ne portait qu'un titre et une consigne : l'enfant
-- lisait « Maths : les tables », et tout le travail se passait ailleurs. Rien
-- n'en revenait, donc personne ne savait ce qui avait été compris.
--
-- Une séance peut désormais porter une leçon du programme (`lecon`). Quand
-- c'est le cas, l'application affiche le cours, puis les exercices un par un.
-- **Il fait ses calculs sur son brouillon et n'inscrit que le résultat** —
-- c'est ce qui permet d'en garder la trace sans demander à un enfant de neuf
-- ans de taper une multiplication posée.
--
-- Le contenu des leçons vit dans le code (`lib/programme.ts`) et pas en base :
-- il se relit dans une revue, il se corrige en un commit, et quelqu'un du
-- métier peut le parcourir. Seuls les résultats sont des données.

begin;

-- ---------------------------------------------------------------------------
-- La séance peut venir du programme
-- ---------------------------------------------------------------------------

-- Vide = une séance écrite à la main par un adulte, comme avant. Sinon, le
-- code d'une leçon de `lib/programme.ts`. Pas de clé étrangère : la table des
-- leçons n'existe pas, et c'est volontaire.
alter table seance add column lecon text not null default '';

comment on column seance.lecon is
  'Code d''une leçon de lib/programme.ts, ou vide si la séance est écrite à la main.';

-- ---------------------------------------------------------------------------
-- Ce qu'il inscrit
-- ---------------------------------------------------------------------------

-- Aucune colonne ne dit « juste » ou « faux ». La comparaison avec le
-- résultat attendu se fait à l'affichage : pour lui, sous forme de correction
-- expliquée — il doit apprendre, donc elle lui est due ; pour ses parents,
-- sous forme de relevé. Mais rien ici ne permet de compter ses erreurs et de
-- lui en rendre le total.
--
-- Le travail est rattaché à la **séance**, pas seulement à la personne :
-- refaire la même leçon un autre jour crée une autre séance, donc un autre
-- travail, et les deux se lisent séparément. Sans ça, reprendre une notion
-- écraserait la trace du premier passage.
create table travail (
  id           uuid primary key default gen_random_uuid(),
  seance_id    uuid not null references seance (id) on delete cascade,
  personne_id  uuid not null references personne (id) on delete cascade,

  -- Le code stable de l'exercice, défini dans le code.
  exercice     text not null,

  valeur       text not null default '',
  -- « Je ne sais pas » est une réponse à part entière, au même rang que les
  -- autres : elle déclenche la même correction expliquée, et elle dit à ses
  -- parents quelque chose d'utile.
  sait_pas     boolean not null default false,

  saisi_le     timestamptz not null default now(),

  unique (seance_id, exercice)
);

create index travail_par_seance on travail (seance_id);
create index travail_par_personne on travail (personne_id, saisi_le desc);

commit;
