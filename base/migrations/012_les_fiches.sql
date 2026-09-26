-- 012 — La séance dit quelle fiche l'outille.
--
-- Le manuel porte les 222 séances que l'enfant fait seul devant l'écran. Les
-- 785 autres sont menées par un adulte — calcul mental à l'ardoise, dictée,
-- lecture à voix haute, production d'écrit, dehors, le mercredi — et elles ne
-- portaient qu'un titre et une consigne. La consigne dit quoi faire, pas avec
-- quoi : « quinze mots de la liste en cours » revenait seize fois dans
-- l'année pour une liste qui n'existait nulle part. C'est le père de l'enfant
-- qui devait l'inventer, un mardi matin, pendant dix mois.
--
-- Les **fiches** (`lib/fiches/`) donnent ce matériel : les quinze mots, les
-- dix questions, le texte, et le corrigé quand il y en a un. Cette colonne dit
-- laquelle va avec quelle séance, exactement comme `lecon` le fait pour les
-- leçons du manuel.
--
-- Vide veut dire deux choses, et c'est voulu : la séance porte une leçon (elle
-- n'a pas besoin de fiche), ou aucune fiche n'a encore été écrite pour ce
-- rituel — l'écran affiche alors la consigne seule, comme avant.
--
-- **Réservé aux adultes**, comme le manuel : une fiche porte ses corrigés.
-- `/fiche/[code]` renvoie l'enfant vers sa journée, et `test/portes.test.ts`
-- le vérifie en suivant les imports.
--
-- Le remplissage des séances déjà écrites ne se fait pas ici : il se fait en
-- reposant l'année, parce que c'est la seule opération qui raccorde la base au
-- manuel sans ruse — voir `deploiement/ecrire-lannee.ts --reprendre` et la
-- migration 013.

begin;

alter table seance add column fiche text not null default '';

comment on column seance.fiche is
  'Code d''une fiche de lib/fiches/, ou vide. Réservé aux adultes : une fiche porte ses corrigés.';

commit;
