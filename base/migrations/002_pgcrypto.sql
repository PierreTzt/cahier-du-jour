-- 002 — pgcrypto, pour le code de l'enfant.
--
-- Quatre chiffres, c'est dix mille possibilités : une copie de la base les
-- rendrait en une seconde si on stockait autre chose qu'une empreinte lente.
-- bcrypt s'en charge, et le même algorithme sert à l'écriture et à la lecture
-- (`crypt` rejoue le sel contenu dans l'empreinte).
--
-- Bénéfice secondaire : `gen_random_bytes` permet de fabriquer les liens
-- d'invitation en SQL, donc d'amorcer la famille sans outillage.

create extension if not exists pgcrypto;
