-- 001 — Qui est qui, et comment on entre.
--
-- Une seule famille tournera sur cette base, mais rien n'est écrit en dur :
-- toutes les lignes portent leur `famille_id`. Ça coûte une colonne et ça
-- évite d'avoir à tout démonter le jour où une deuxième famille arrive.
--
-- Ce fichier ne modélise ni la trame ni les journées : leur découpage attend
-- une réponse sur la structure réelle des livrets CNED (« séance n, page p »),
-- et modéliser sur une hypothèse non vérifiée est la façon classique de perdre
-- trois semaines.

begin;

-- ---------------------------------------------------------------------------
-- La famille
-- ---------------------------------------------------------------------------

create table famille (
  id          uuid primary key default gen_random_uuid(),
  nom         text not null check (length(trim(nom)) > 0),
  cree_le     timestamptz not null default now()
);

comment on table famille is
  'Le périmètre de tout le reste. Une seule ligne en pratique.';

-- ---------------------------------------------------------------------------
-- Les personnes
-- ---------------------------------------------------------------------------

-- `parent` et `proche` reprennent la distinction d'accès déjà en place dans
-- lib/adultes.ts : le proche organise, il ne lit pas le journal. Ce n'est pas
-- une question de confiance — un enfant qui écrit « je n'y arrive pas » doit
-- pouvoir savoir exactement qui le lit, et la liste doit être courte.
create type role_personne as enum ('parent', 'proche', 'enfant');

create table personne (
  id            uuid primary key default gen_random_uuid(),
  famille_id    uuid not null references famille (id) on delete cascade,
  role          role_personne not null,

  prenom        text not null check (length(trim(prenom)) > 0),

  -- Ce que l'application affiche côté adulte : « Papa », « Maman », « Parrain ».
  role_affiche  text not null,

  -- Ce que l'enfant dit, lui, quand il parle de cette personne : « papa »,
  -- « maman », « parrain ». Jamais le prénom — un enfant ne dit pas le prénom
  -- de son parrain. Tout texte destiné à l'enfant passe par cette colonne.
  mot_de_l_enfant text not null,

  -- Les adultes se connectent par lien envoyé sur leur courriel. L'enfant n'en
  -- a pas : d'où le `null` autorisé, et la contrainte plus bas.
  courriel      text unique
                check (courriel is null or courriel = lower(courriel)),

  cree_le       timestamptz not null default now(),

  -- Un adulte sans courriel ne pourrait jamais entrer ; un enfant avec un
  -- courriel recevrait des liens de connexion, ce qui n'est pas le dispositif.
  constraint courriel_selon_le_role check (
    (role = 'enfant' and courriel is null) or
    (role <> 'enfant' and courriel is not null)
  )
);

create index personne_par_famille on personne (famille_id);

-- ---------------------------------------------------------------------------
-- Le code court de l'enfant
-- ---------------------------------------------------------------------------

-- L'enfant entre avec un code à lui — choix assumé : dans une vie où presque
-- tout est décidé par d'autres, avoir quelque chose qui n'appartient qu'à lui
-- n'est pas rien.
--
-- Mais il faut être lucide sur ce que ce code est. Quatre chiffres, c'est dix
-- mille possibilités : ce n'est PAS une barrière de sécurité, et il ne faut
-- pas faire semblant. La vraie barrière, c'est que l'appareil est dans la
-- maison. Le code est un geste d'appartenance, pas une serrure.
--
-- Conséquence directe sur l'implémentation, et c'est le point qui compte :
-- un code oublié devant un écran qui refuse, c'est exactement l'échec que ce
-- produit passe son temps à éviter. Donc jamais de message d'erreur dur,
-- jamais de compteur de tentatives affiché, jamais de verrouillage. On
-- redemande doucement, indéfiniment, et un parent peut toujours le rappeler.
create table code_enfant (
  personne_id   uuid primary key references personne (id) on delete cascade,
  -- Jamais le code en clair, même pour quatre chiffres : cette base sera
  -- sauvegardée, copiée, restaurée pour essai.
  empreinte     text not null,
  modifie_le    timestamptz not null default now()
);

comment on column code_enfant.empreinte is
  'Empreinte lente du code. Le code en clair n''est jamais stocké.';

-- ---------------------------------------------------------------------------
-- Les liens de connexion des adultes
-- ---------------------------------------------------------------------------

-- Pas de mot de passe : un parent oubliera un mot de passe, il n'oubliera pas
-- sa boîte mail. Un lien à usage unique, valable une heure.
create table lien_connexion (
  id           uuid primary key default gen_random_uuid(),
  personne_id  uuid not null references personne (id) on delete cascade,
  empreinte    text not null unique,
  expire_le    timestamptz not null,
  utilise_le   timestamptz,
  cree_le      timestamptz not null default now()
);

create index lien_par_personne on lien_connexion (personne_id);
-- Le ménage : les liens périmés n'ont aucune raison de s'accumuler.
create index lien_par_expiration on lien_connexion (expire_le);

-- ---------------------------------------------------------------------------
-- Les sessions
-- ---------------------------------------------------------------------------

-- Longues par choix : une tablette qui reste connectée dans chaque maison est
-- le mode d'usage réel. Redemander de se connecter tous les quinze jours ferait
-- abandonner l'outil en trois semaines.
create table session (
  id           uuid primary key default gen_random_uuid(),
  personne_id  uuid not null references personne (id) on delete cascade,
  empreinte    text not null unique,
  expire_le    timestamptz not null,
  vue_le       timestamptz not null default now(),
  cree_le      timestamptz not null default now()
);

create index session_par_personne on session (personne_id);
create index session_par_expiration on session (expire_le);

commit;
