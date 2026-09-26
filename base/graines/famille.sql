-- Poser la famille et tirer les codes d'entrée.
--
-- Une installation sert une seule famille. Les prénoms se passent en
-- variables ; seul celui de l'enfant et celui d'un parent sont obligatoires.
--
--   docker compose exec -T base psql -U cahier -d cahier \
--     -v enfant=Tom -v parent1=Karim -v parent2=Sophie -v proche=Julien \
--     -v domaine="votre-domaine.fr" \
--     < base/graines/famille.sql > acces.txt
--
-- Ce que l'enfant dira de chaque adulte — « papa », « maman », « parrain » —
-- se règle avec `mot1`, `mot2` et `mot3`. Ce sont ces mots, jamais les
-- prénoms, qui apparaissent sur ses écrans. Par défaut : papa, maman,
-- parrain. `-v mot3=mamie` pour une grand-mère, par exemple.
--
-- Idempotent sur les personnes : relancer ce fichier ne duplique personne.
-- Les codes, eux, sont retirés à chaque passage — c'est ce qu'on veut quand
-- l'un d'eux a été oublié ou vu par quelqu'un. Mais ça les fait tous tourner
-- d'un coup : prévenir la famille avant.
--
-- Les codes en clair n'apparaissent que dans le résultat affiché. La base
-- n'en garde qu'une empreinte bcrypt. Le fichier `acces.txt` est donc le
-- seul endroit où ils existent : `chmod 600`, et nulle part ailleurs.

\if :{?enfant}
\else
  \echo 'Il manque le prénom de l''enfant : -v enfant=…'
  \quit
\endif
\if :{?parent1}
\else
  \echo 'Il manque le prénom d''un parent : -v parent1=…'
  \quit
\endif
\if :{?parent2}
\else
  \set parent2 ''
\endif
\if :{?proche}
\else
  \set proche ''
\endif
\if :{?mot1}
\else
  \set mot1 'papa'
\endif
\if :{?mot2}
\else
  \set mot2 'maman'
\endif
\if :{?mot3}
\else
  \set mot3 'parrain'
\endif
\if :{?domaine}
\else
  \set domaine 'votre domaine'
\endif

begin;

insert into famille (id, nom)
select gen_random_uuid(), 'Famille'
where not exists (select 1 from famille);

-- Un adulte doit avoir un courriel (contrainte `courriel_selon_le_role`),
-- mais personne n'en reçoit : l'entrée se fait par code. Des adresses en
-- `.invalid` suffisent, et ne partiront jamais nulle part.
insert into personne (famille_id, role, prenom, role_affiche, mot_de_l_enfant, courriel)
select f.id, v.role::role_personne, trim(v.prenom),
       case when v.role = 'enfant' then trim(v.prenom)
            else upper(left(v.mot, 1)) || substr(v.mot, 2) end,
       case when v.role = 'enfant' then trim(v.prenom) else v.mot end,
       v.courriel
from famille f,
     (values
       ('enfant', :'enfant',  '',        null::text),
       ('parent', :'parent1', :'mot1',   'parent1@exemple.invalid'),
       ('parent', :'parent2', :'mot2',   'parent2@exemple.invalid'),
       ('proche', :'proche',  :'mot3',   'proche@exemple.invalid')
     ) as v(role, prenom, mot, courriel)
where length(trim(v.prenom)) > 0
  and not exists (select 1 from personne p where p.prenom = trim(v.prenom));

-- Quatre chiffres pour l'enfant : il doit pouvoir le taper seul, vite, sans
-- se tromper. Six pour les adultes, dont le code ouvre le journal et le
-- relevé — ils peuvent retenir deux chiffres de plus, et un site public
-- mérite mieux que dix mille possibilités de ce côté-là.
with tires as (
  -- `random()` de Postgres n'est pas cryptographique : la suite se rejoue
  -- si l'on connaît la graine. Pour un code qui protège les données d'un
  -- enfant sur un site public, on tire de `gen_random_bytes`.
  select p.id,
         case when p.role = 'enfant'
              then lpad((('x' || encode(gen_random_bytes(4), 'hex'))::bit(32)::bigint % 10000)::text, 4, '0')
              else lpad((('x' || encode(gen_random_bytes(4), 'hex'))::bit(32)::bigint % 1000000)::text, 6, '0')
         end as code
  from personne p
),
poses as (
  insert into code_acces (personne_id, empreinte)
  select id, crypt(code, gen_salt('bf', 12)) from tires
  on conflict (personne_id) do update
    set empreinte = excluded.empreinte, modifie_le = now()
  returning personne_id
)
select p.prenom,
       p.role_affiche as role,
       t.code,
       case when p.role = 'enfant'
            then :'domaine'
            else :'domaine' || ' → Accès adulte'
       end as ou
from tires t
join poses po on po.personne_id = t.id
join personne p on p.id = t.id
order by case when p.role = 'enfant' then 0 else 1 end, p.prenom;

commit;
