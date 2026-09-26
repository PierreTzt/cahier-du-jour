-- 007 — Pouvoir supprimer une personne.
--
-- Trouvé en faisant le ménage après un essai : supprimer une famille échoue.
--
--   ERROR: update or delete on table "personne" violates foreign key
--   constraint "seance_par_adulte_fkey" on table "seance"
--
-- `seance.par_adulte` et `journee.note_de` référencent `personne` sans clause
-- `on delete`, donc en `no action`. Tant que personne ne part, ça ne se voit
-- pas. Le jour où quelqu'un part — ou simplement le jour où on veut effacer
-- des données d'essai, ou honorer une demande de suppression — la requête
-- échoue, et on se retrouve à écrire du SQL à la main dans l'urgence.
--
-- `set null` plutôt que `cascade` : une séance posée par quelqu'un qui n'est
-- plus là **reste une séance valable**. La faire disparaître effacerait la
-- journée d'un enfant parce qu'un adulte a été supprimé, ce qui est absurde.
-- Et `null` a déjà un sens dans cette colonne — « elle ne vient de personne
-- en particulier » — ce qui est exactement ce qu'on veut dire.

begin;

alter table seance drop constraint seance_par_adulte_fkey;
alter table seance add constraint seance_par_adulte_fkey
  foreign key (par_adulte) references personne (id) on delete set null;

alter table journee drop constraint journee_note_de_fkey;
alter table journee add constraint journee_note_de_fkey
  foreign key (note_de) references personne (id) on delete set null;

commit;
