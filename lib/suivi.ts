/**
 * Ce que le soignant recommande.
 *
 * Le relevé part chez eux et **rien ne revient**. Leurs consignes vivaient
 * dans la mémoire des adultes — donc différemment dans chaque maison, et pas du
 * tout chez celui qui n'était pas au rendez-vous. Écrites une fois, elles
 * s'appliquent pareil des deux côtés.
 *
 * Ce qu'on note ici, c'est **ce qu'on doit faire**, jamais ce qui a été dit du
 * dossier. Pas de diagnostic, pas de compte rendu d'entretien, aucune donnée
 * médicale. Aucun code ne peut le vérifier dans une phrase : c'est l'écran qui
 * le dit en tête, et le formulaire qui le rappelle au moment d'écrire.
 *
 * Réservé aux parents, comme le journal. Une consigne de soin n'est pas une
 * donnée d'organisation, même quand elle change la façon d'accompagner. La
 * vérification est dans `app/gestes/suivi.ts` et dans `app/suivi/page.tsx`.
 */

import { lignes, executer } from "./base";

/* Le texte suit la contrainte de la migration 015 ; la raison et l'origine
   n'en ont pas en base, elles en ont une ici. */
export const LIMITES_CONSIGNE = { texte: 500, pourquoi: 1000, origine: 200 } as const;

export type Consigne = {
  id: string;
  /* La consigne, en une phrase actionnable. */
  texte: string;
  /* Pourquoi — une consigne dont on a oublié la raison finit appliquée de
     travers, ou abandonnée. */
  pourquoi: string;
  /* D'où elle vient, sans nom de praticien : « soignant, entretien d'octobre ». */
  origine: string;
  par_adulte: string | null;
  /* Le prénom du parent qui l'a notée, `null` s'il n'a plus d'accès. */
  par_prenom: string | null;
  /* `AAAA-MM-JJ`, à l'heure de Paris. */
  notee_le: string;
  /* `null` tant qu'elle s'applique. */
  retiree_le: string | null;
};

export type ConsigneValidee = Pick<Consigne, "texte" | "pourquoi" | "origine">;

/* ------------------------------------------------------------------ */
/* La logique pure                                                     */
/* ------------------------------------------------------------------ */

/** Un texte facultatif : vide s'il n'y a rien, `null` s'il déborde. */
function facultatif(v: unknown, max: number): string | null {
  const net = typeof v === "string" ? v.trim() : "";
  return net.length > max ? null : net;
}

/**
 * Ce qu'un parent a envoyé, vérifié — ou `null`.
 *
 * Seule la consigne est exigée, et elle ne peut pas être faite d'espaces :
 * une ligne vide dans la liste se lirait comme une consigne qu'on a perdue. La
 * raison n'est pas exigée — on ne la connaît pas toujours, et refuser la
 * consigne pour ça ferait perdre la consigne. L'origine retombe sur « soignant ».
 *
 * Un champ trop long refuse le tout plutôt que d'être tronqué : une consigne
 * coupée au milieu peut dire le contraire de ce qu'elle disait.
 */
export function validerConsigne(brut: unknown): ConsigneValidee | null {
  if (!brut || typeof brut !== "object") return null;
  const b = brut as Record<string, unknown>;

  const texte = facultatif(b.texte, LIMITES_CONSIGNE.texte);
  const pourquoi = facultatif(b.pourquoi, LIMITES_CONSIGNE.pourquoi);
  const origine = facultatif(b.origine, LIMITES_CONSIGNE.origine);
  if (!texte || pourquoi === null || origine === null) return null;

  return { texte, pourquoi, origine: origine || "soignant" };
}

/**
 * Les consignes qui s'appliquent, et celles qu'on a retirées.
 *
 * Retirer n'efface pas : une consigne retirée quitte la liste de ce qu'on
 * applique et reste parmi ce qui a été essayé. Les actives gardent l'ordre où
 * elles ont été notées ; les retirées viennent de la plus récemment retirée à
 * la plus ancienne, parce que c'est la dernière abandonnée qu'on cherche.
 */
export function repartir(consignes: Consigne[]) {
  const actives = consignes.filter((c) => c.retiree_le === null);
  /* Des dates `AAAA-MM-JJ` se trient comme du texte. Deux retraits du même
     jour gardent l'ordre où les consignes avaient été notées : le tri est
     stable. */
  const retirees = consignes
    .filter((c) => c.retiree_le !== null)
    .sort((a, b) => (b.retiree_le ?? "").localeCompare(a.retiree_le ?? ""));
  return { actives, retirees };
}

/* ------------------------------------------------------------------ */
/* En base                                                             */
/* ------------------------------------------------------------------ */

/**
 * Toutes les consignes d'une famille, actives et retirées, dans l'ordre où
 * elles ont été notées. `repartir` fait le reste.
 *
 * Les dates sortent déjà ramenées à Paris : un `timestamptz` converti par le
 * serveur Node le serait dans son fuseau à lui, et une consigne notée un soir
 * à 23 h 30 changerait de jour.
 */
export async function consignesDe(familleId: string): Promise<Consigne[]> {
  return lignes<Consigne>(
    `select c.id, c.texte, c.pourquoi, c.origine, c.par_adulte,
            p.prenom as par_prenom,
            (c.cree_le at time zone 'Europe/Paris')::date::text as notee_le,
            (c.retiree_le at time zone 'Europe/Paris')::date::text as retiree_le
       from consigne c
       left join personne p on p.id = c.par_adulte
      where c.famille_id = $1
      order by c.cree_le, c.id`,
    [familleId],
  );
}

export async function enregistrerConsigne(
  familleId: string,
  parAdulte: string,
  c: ConsigneValidee,
) {
  await executer(
    `insert into consigne (famille_id, texte, pourquoi, origine, par_adulte)
     values ($1, $2, $3, $4, $5)`,
    [familleId, c.texte, c.pourquoi, c.origine, parAdulte],
  );
}

/**
 * Retirer une consigne qui ne s'applique plus — sans l'effacer.
 *
 * Seulement si elle est de cette famille, et seulement si elle est encore
 * active : retirer deux fois ne doit pas déplacer la date du premier retrait,
 * sinon « ce qui a été essayé » mentirait sur le moment où on a arrêté.
 *
 * `id::text` : l'identifiant vient du navigateur, et une chaîne mal formée ne
 * doit pas faire lever Postgres.
 */
export async function marquerRetiree(familleId: string, consigneId: string) {
  await executer(
    `update consigne set retiree_le = now()
      where id::text = $1 and famille_id = $2 and retiree_le is null`,
    [consigneId, familleId],
  );
}
