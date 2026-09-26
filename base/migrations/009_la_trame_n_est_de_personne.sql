-- 009 — La trame n'est de personne.
--
-- L'écran de l'enfant écrit « ajouté par papa » sous une séance qui porte un
-- adulte. Ce n'est pas de la décoration : c'est là pour dire « une personne a
-- choisi ça pour toi aujourd'hui », et c'est vrai quand un parent est allé
-- chercher une leçon dans la bibliothèque ou a écrit un devoir à la main.
--
-- La première version de « poser la trame » attribuait les séances à celui qui
-- avait cliqué sur le bouton. Conséquence : les mille treize séances de
-- l'année portaient « ajouté par papa », et le signal devenait un bruit de
-- fond. Un mot qui apparaît partout ne dit plus rien.
--
-- Le schéma le disait déjà, dans le commentaire de la colonne : « null = elle
-- vient de la trame de l'année ». Le code ne le respectait pas. Cette
-- migration remet les lignes déjà écrites en accord avec lui ; `poserLaTrame`
-- et `accorderAuTon` insèrent désormais `null`.
--
-- On ne touche qu'aux séances d'origine `trame` : celles qu'un adulte a
-- voulues gardent leur auteur, c'est tout leur sens.

begin;

update seance set par_adulte = null
 where origine = 'trame' and par_adulte is not null;

commit;
