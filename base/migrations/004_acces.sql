-- 004 — Un code pour chacun, et de quoi décourager une machine.
--
-- Les liens personnels partaient d'une bonne intention et étaient une
-- mauvaise idée : à huit heures du matin, l'enfant ne va pas chercher un lien
-- dans une conversation. Il ouvre le site, il tape son code, il est dedans.
--
-- Donc tout le monde a un code, et la page d'accueil demande simplement qui
-- vous êtes.

begin;

-- `code_enfant` devient `code_acces` : c'était déjà la bonne table, elle ne
-- servait qu'à une seule personne.
alter table code_enfant rename to code_acces;
alter table code_acces rename constraint code_enfant_pkey to code_acces_pkey;

-- ---------------------------------------------------------------------------
-- Ralentir une machine sans jamais bloquer un enfant
-- ---------------------------------------------------------------------------

-- Le problème : quatre chiffres, c'est dix mille possibilités, et le site est
-- sur l'Internet public. Un programme les essaierait toutes en quelques
-- minutes.
--
-- La solution habituelle — compter les échecs et verrouiller le compte — est
-- interdite ici : un enfant de neuf ans devant un écran qui refuse, qui
-- compte et qui finit par se fermer, c'est exactement l'expérience que tout ce
-- produit passe son temps à éviter.
--
-- On ralentit donc **l'adresse qui essaie**, pas la personne. Celui qui se
-- trompe une fois ne remarque rien ; celui qui essaie mille fois attend des
-- secondes de plus à chaque tentative. Aucun compteur affiché, aucun
-- verrouillage, jamais.
create table tentative (
  ip          text not null,
  essaye_le   timestamptz not null default now()
);

create index tentative_par_ip on tentative (ip, essaye_le desc);

commit;
