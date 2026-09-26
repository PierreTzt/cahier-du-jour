-- 003 — La journée, pour de vrai.
--
-- Jusqu'ici tout vivait dans le `localStorage` du navigateur : parfait pour
-- montrer, inutilisable à deux maisons. Ce qui suit porte la journée réelle —
-- ce que l'enfant a devant lui, ce qu'il en fait, et ce que ses parents en
-- lisent le soir.
--
-- Le découpage suit ce que l'application montrait déjà, parce que ces écrans
-- ont été validés : une journée, des séances dans un ordre, un ressenti, une
-- note du soir.

begin;

-- ---------------------------------------------------------------------------
-- La journée
-- ---------------------------------------------------------------------------

create type ton_jour as enum ('normale', 'allegee', 'repos');

-- `null` = la journée est encore ouverte. Les deux autres valeurs disent
-- comment elle s'est terminée, jamais si elle a été réussie.
create type cloture_jour as enum ('terminee', 'arretee');

create table journee (
  id          uuid primary key default gen_random_uuid(),
  famille_id  uuid not null references famille (id) on delete cascade,
  jour        date not null,
  ton         ton_jour not null default 'normale',
  cloture     cloture_jour,

  -- La note du soir d'un parent, et qui l'a écrite. Réservée aux parents,
  -- comme le journal : l'enfant ne la lit jamais.
  note        text not null default '',
  note_de     uuid references personne (id),

  cree_le     timestamptz not null default now(),

  unique (famille_id, jour)
);

create index journee_par_famille on journee (famille_id, jour desc);

-- ---------------------------------------------------------------------------
-- Les séances
-- ---------------------------------------------------------------------------

-- `reportee` veut dire « mise de côté », jamais « ratée ». Côté enfant elle
-- disparaît purement et simplement : elle n'est ni barrée ni grisée, elle
-- n'est plus là. Le retard n'existe que côté adulte.
create type etat_seance as enum ('a-venir', 'faite', 'reportee');

create table seance (
  id          uuid primary key default gen_random_uuid(),
  journee_id  uuid not null references journee (id) on delete cascade,
  rang        int not null,

  matiere     text not null,
  titre       text not null check (length(trim(titre)) > 0),
  -- « Livret Mathématiques · séquence 4, séance 2 · p. 48 », quand ça vient
  -- d'un support. Vide quand c'est un devoir écrit par un parent.
  reference   text not null default '',
  consigne    text not null default '',
  minutes     int not null default 20,

  -- Qui l'a posée. `null` = elle vient de la trame de l'année.
  par_adulte  uuid references personne (id),

  etat        etat_seance not null default 'a-venir',
  -- Quand elle a changé d'état. Sert au relevé, jamais à l'écran de l'enfant.
  bougee_le   timestamptz,

  cree_le     timestamptz not null default now()
);

create index seance_par_journee on seance (journee_id, rang);

-- ---------------------------------------------------------------------------
-- Ce que l'enfant dépose le soir
-- ---------------------------------------------------------------------------

-- Quatre mots, pas une note. On demande son état, jamais sa performance :
-- « comment tu te sens ? » et non « c'était dur ? ».
create type ressenti_mot as enum ('bien', 'ca-va', 'bof', 'pas-bien');

create table ressenti (
  journee_id  uuid primary key references journee (id) on delete cascade,
  -- `null` est une réponse valable : « je préfère ne rien dire » existe à
  -- l'écran, et ne pas répondre ne doit pas être un trou dans les données.
  choix       ressenti_mot,
  mot         text not null default '',
  depose_le   timestamptz not null default now()
);

commit;
