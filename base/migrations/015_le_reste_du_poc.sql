-- 015 — Ce que le POC prévoyait et que la version réelle n'avait pas encore.
--
-- Le POC du 5 septembre montrait quatorze écrans nourris de données inventées.
-- Neuf ont été retirés le 12 : ils servaient des faits fictifs sur un enfant
-- réel. Ils reviennent ici **branchés sur la base**, et les tables qui suivent
-- sont celles dont ils ont besoin — rien de plus.
--
-- Une règle traverse tout le fichier, celle de `personne` depuis la migration
-- 007 : un adulte qui s'en va n'emporte pas ce qu'il a écrit. Chaque
-- `par_adulte` est donc `on delete set null`.

begin;

-- ---------------------------------------------------------------------------
-- La boîte à pourquoi
--
-- L'enfant dépose une question, son parrain la prépare, ils l'explorent en
-- vrai, et il en reste une carte. Quatre états, et aucun ne se lit comme un
-- refus : « on cherche encore » est un état durable, pas un retard.
-- ---------------------------------------------------------------------------

create type etat_question as enum ('deposee', 'lue', 'on-cherche', 'exploree');

-- Les domaines du parrain ne sont pas des matières : ce sont des manières de
-- regarder.
create type domaine_question as enum ('machines', 'vivant', 'ciel', 'mots', 'enigmes');

create table question (
  id            uuid primary key default gen_random_uuid(),
  famille_id    uuid not null references famille (id) on delete cascade,

  -- Ses mots à lui, jamais reformulés.
  texte         text not null check (length(trim(texte)) between 1 and 500),
  etat          etat_question not null default 'deposee',

  -- Les notes de préparation du parrain. Ne sortent jamais côté enfant.
  preparation   text not null default '',

  -- Renseignés à l'exploration : ce qu'il en reste, la carte de sa collection.
  domaine       domaine_question,
  trace         text not null default '',

  -- L'heure exacte ne sert qu'aux adultes. L'enfant lit « un jour de
  -- novembre » : une date se compare, un mois non.
  deposee_le    timestamptz not null default now(),
  exploree_le   date,
  modifiee_par  uuid references personne (id) on delete set null,

  constraint une_exploration_a_sa_carte check (
    etat <> 'exploree' or (domaine is not null and length(trim(trace)) > 0)
  )
);

create index question_par_famille on question (famille_id, deposee_le);

-- Le filet : les semaines où la boîte reste vide, c'est le parrain qui propose.
-- Un seul rendez-vous à la fois, remplacé quand il change.
create table rendez_vous (
  famille_id  uuid primary key references famille (id) on delete cascade,
  quand       text not null default '',
  quoi        text not null default '',
  par_adulte  uuid references personne (id) on delete set null,
  modifie_le  timestamptz not null default now()
);

-- ---------------------------------------------------------------------------
-- Le mot d'un adulte
--
-- À la place du bon point : un adulte décrit ce qu'il a vu, il ne note pas.
-- L'enfant lit le dernier mot du jour après avoir déposé son ressenti — un
-- seul, jamais une pile, et il peut se laisser un jour d'effondrement.
-- ---------------------------------------------------------------------------

create table mot (
  id          uuid primary key default gen_random_uuid(),
  journee_id  uuid not null references journee (id) on delete cascade,
  texte       text not null check (length(trim(texte)) between 1 and 1000),
  par_adulte  uuid references personne (id) on delete set null,
  cree_le     timestamptz not null default now()
);

create index mot_par_journee on mot (journee_id, cree_le);

-- ---------------------------------------------------------------------------
-- Les traces : ce qu'il a fabriqué
--
-- Un objet, pas un résultat : on ne peut pas rater un volcan. Rien n'en
-- attend une par jour, donc rien ne peut manquer.
-- ---------------------------------------------------------------------------

create table trace (
  id          uuid primary key default gen_random_uuid(),
  famille_id  uuid not null references famille (id) on delete cascade,
  titre       text not null check (length(trim(titre)) between 1 and 200),
  quoi        text not null default '',
  -- Un identifiant de `lib/data.ts`, vérifié par l'application : la liste des
  -- matières vit dans le code, pas dans un type Postgres à migrer.
  matiere     text not null,
  par_adulte  uuid references personne (id) on delete set null,
  cree_le     timestamptz not null default now()
);

create index trace_par_famille on trace (famille_id);

-- ---------------------------------------------------------------------------
-- Les sorties
--
-- Un marché, un musée, un chantier regardé depuis le trottoir **sont** de
-- l'instruction en famille, et c'est ce qu'un contrôle cherche à établir. Le
-- champ qui compte n'est pas le lieu mais ce qui s'y est passé.
-- ---------------------------------------------------------------------------

create table sortie (
  id          uuid primary key default gen_random_uuid(),
  famille_id  uuid not null references famille (id) on delete cascade,
  titre       text not null check (length(trim(titre)) between 1 and 200),
  lieu        text not null default '',
  quoi        text not null default '',
  -- Une vraie date : ce document-ci s'adresse à l'inspection.
  jour        date not null,
  matieres    text[] not null default '{}',
  par_adulte  uuid references personne (id) on delete set null,
  cree_le     timestamptz not null default now()
);

create index sortie_par_famille on sortie (famille_id, jour);

-- ---------------------------------------------------------------------------
-- Les consignes du soignant
--
-- Ce qu'on doit faire, et pourquoi — jamais ce qui a été dit du dossier. Pas
-- de diagnostic, pas de compte rendu, aucune donnée médicale. Écrites une
-- fois, elles s'appliquent pareil dans les deux maisons.
-- ---------------------------------------------------------------------------

create table consigne (
  id          uuid primary key default gen_random_uuid(),
  famille_id  uuid not null references famille (id) on delete cascade,
  texte       text not null check (length(trim(texte)) between 1 and 500),
  pourquoi    text not null default '',
  -- D'où elle vient, sans nom de praticien : « soignant, entretien d'octobre ».
  origine     text not null default 'soignant',
  par_adulte  uuid references personne (id) on delete set null,
  cree_le     timestamptz not null default now(),
  -- Une consigne qui ne s'applique plus se retire, elle ne s'efface pas : on
  -- doit pouvoir retrouver ce qui a été essayé.
  retiree_le  timestamptz
);

create index consigne_par_famille on consigne (famille_id, cree_le);

commit;
