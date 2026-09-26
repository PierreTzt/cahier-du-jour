import { ligne } from "@/lib/base";

/**
 * La base répond-elle ?
 *
 * Le déploiement vérifiait un 200 sur la page d'accueil — qui, sans session,
 * ne lit rien en base. Une migration cassée ou une base arrêtée passait donc
 * pour « En ligne », et la première erreur sortait chez l'enfant. Cette route
 * fait une vraie requête, et ne dit rien d'autre que oui ou non.
 */
export const dynamic = "force-dynamic";

export async function GET() {
  try {
    /* Une vraie table, pas un `select 1` : une migration qui l'aurait cassée
       doit répondre non. La réponse ne dit rien de ce qu'elle contient. */
    await ligne(`select count(*) from journee`);
    return new Response("ok", { status: 200, headers: { "cache-control": "no-store" } });
  } catch {
    return new Response("base", { status: 503, headers: { "cache-control": "no-store" } });
  }
}
