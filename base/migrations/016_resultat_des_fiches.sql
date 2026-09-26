-- 016 — Ce qu'a donné une séance menée avec une fiche.
--
-- Retour des parents le 16 septembre 2026, premier jour réel : les séances
-- d'écran rendent leur relevé tout seuls, exercice par exercice, et celles
-- qu'un adulte mène avec une fiche — calcul mental à l'ardoise, questions sur
-- un texte, dictée — ne laissaient rien. Le corrigé était sous leurs yeux, et
-- il n'y avait nulle part où dire ce qui avait résisté.
--
-- Un résultat par séance, écrit par l'adulte qui l'a menée, depuis la journée.
--
-- Ce qu'on garde n'est pas un score : c'est **ce qui est à revoir**, recopié
-- tel qu'il est écrit dans la fiche (« 7 × 8 »), sur combien de questions. Les
-- fiches vivent dans le code et se corrigent en un commit ; recopier le texte
-- plutôt qu'un rang garde un résultat lisible même si la fiche change.
-- `sur` est nul quand la fiche n'a pas de corrigé — une dictée, une lecture à
-- voix haute : il reste alors la note.
--
-- **Réservé aux adultes**, comme la fiche qui porte les corrigés. Et
-- l'état de la séance n'en dépend pas : cocher « j'ai fini » reste son geste
-- à lui (voir `contexteEnfant` dans `app/actions.ts`).

begin;

create table resultat_fiche (
  seance_id   uuid primary key references seance (id) on delete cascade,

  a_revoir    text[] not null default '{}',
  sur         int check (sur is null or sur >= 0),
  note        text not null default '' check (length(note) <= 1000),

  -- Un adulte qui s'en va n'emporte pas ce qu'il a écrit (migration 007).
  par_adulte  uuid references personne (id) on delete set null,
  note_le     timestamptz not null default now()
);

commit;
