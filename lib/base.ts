/**
 * L'accès à Postgres.
 *
 * Du SQL écrit à la main plutôt qu'un ORM, et ce n'est pas du goût : le parrain
 * est désormais administrateur d'une machine dont une famille dépend, et
 * chaque dépendance est une maintenance de plus. `pg` est stable depuis dix
 * ans, les fichiers `.sql` restent la source de vérité, lisibles dans cinq ans
 * par quelqu'un qui aura tout oublié.
 *
 * Ce module ne doit jamais atteindre le navigateur. Il n'est importé que par
 * des composants serveur et des actions.
 */

import { Pool, type QueryResultRow } from "pg";

declare global {
  var __baseCahier: Pool | undefined;
}

function creerPool() {
  const url = process.env.DATABASE_URL;
  if (!url) {
    throw new Error(
      "DATABASE_URL absent — l'application ne peut pas démarrer sans base.",
    );
  }
  return new Pool({
    connectionString: url,
    /* Quatre utilisateurs : une poignée de connexions suffit largement, et
       Postgres est réglé à 40 connexions maximum dans docker-compose. */
    max: 8,
    idleTimeoutMillis: 30_000,
    connectionTimeoutMillis: 5_000,
  });
}

/**
 * Le pool, ouvert au premier besoin et pas avant.
 *
 * Paresseux par nécessité : Next évalue les modules à la compilation, et la
 * compilation n'a pas de base — ni pendant `next build`, ni dans l'image
 * Docker. Un pool créé au chargement du module faisait échouer le build avec
 * « DATABASE_URL absent », ce qui est exact mais hors de propos à ce
 * moment-là.
 *
 * En développement, Next recharge les modules à chaque sauvegarde : sans le
 * cache global, on ouvrirait un pool de plus à chaque modification jusqu'à
 * épuiser les connexions.
 */
export function base(): Pool {
  if (!globalThis.__baseCahier) globalThis.__baseCahier = creerPool();
  return globalThis.__baseCahier;
}

/** Une requête qui rend des lignes typées. */
export async function lignes<T extends QueryResultRow>(
  sql: string,
  valeurs: unknown[] = [],
): Promise<T[]> {
  const r = await base().query<T>(sql, valeurs);
  return r.rows;
}

/** Une requête qui rend au plus une ligne. */
export async function ligne<T extends QueryResultRow>(
  sql: string,
  valeurs: unknown[] = [],
): Promise<T | null> {
  const r = await base().query<T>(sql, valeurs);
  return r.rows[0] ?? null;
}

/**
 * Une requête dont on ne lit pas les lignes. Rend le nombre de lignes touchées :
 * un geste qui n'a rien écrit ne doit pas se faire confirmer à l'écran.
 */
export async function executer(sql: string, valeurs: unknown[] = []): Promise<number> {
  const r = await base().query(sql, valeurs);
  return r.rowCount ?? 0;
}

/** Une requête dans une transaction : rend les lignes. */
export type Requete = <T extends QueryResultRow>(
  sql: string,
  valeurs?: unknown[],
) => Promise<T[]>;

/**
 * Plusieurs requêtes qui doivent réussir ensemble ou pas du tout.
 *
 * Tout ce qui précède passe par le pool, une requête à la fois, et c'est
 * suffisant presque partout : une séance cochée, un ressenti déposé. Ça ne
 * l'est plus pour un geste qui supprime, insère et renumérote — accorder une
 * journée à son ton — où une panne entre deux requêtes laisserait la journée
 * de l'enfant à moitié réécrite, avec deux séances au même rang. Ici, tout
 * tient sur une seule connexion, et un échec annule tout.
 */
export async function transaction<T>(travail: (q: Requete) => Promise<T>): Promise<T> {
  const client = await base().connect();
  try {
    await client.query("begin");
    const q: Requete = async (sql, valeurs = []) => (await client.query(sql, valeurs)).rows;
    const resultat = await travail(q);
    await client.query("commit");
    return resultat;
  } catch (e) {
    await client.query("rollback").catch(() => {});
    throw e;
  } finally {
    client.release();
  }
}
