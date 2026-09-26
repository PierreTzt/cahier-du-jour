/**
 * Entrer dans l'application.
 *
 * Ni mot de passe, ni courriel, ni lien à retrouver dans une conversation :
 * à huit heures du matin, l'enfant ouvre le site, tape son code, et il est
 * dedans. Les adultes font pareil. La page d'accueil demande simplement qui
 * vous êtes.
 *
 * Le code de l'enfant fait quatre chiffres, ceux des adultes six — eux
 * peuvent les retenir, et ils ouvrent le journal et le relevé.
 *
 * **On ne verrouille jamais.** Quatre chiffres sur un site public seraient
 * devinables par une machine, donc on ralentit l'adresse qui essaie, pas la
 * personne : celui qui se trompe une fois ne remarque rien, celui qui essaie
 * mille fois attend de plus en plus. Aucun compteur affiché, aucun message
 * d'échec sec, aucun compte fermé — un enfant devant un écran qui compte ses
 * erreurs, c'est ce que tout ce produit passe son temps à éviter.
 */

import { createHash, randomBytes } from "node:crypto";
import { cache } from "react";
import { cookies, headers } from "next/headers";
import { redirect } from "next/navigation";
import { ligne, executer } from "./base";

export const COOKIE_SESSION = "cahier_session";
/* Un an. Voir plus haut : la session longue est un choix, pas un oubli. */
const DUREE_SESSION_JOURS = 365;
/**
 * Mais la session d'un adulte ne passe pas la nuit : elle se ferme à cinq
 * heures du matin, heure de Paris.
 *
 * La tablette est partagée : un parent qui lit le soir sur l'appareil de
 * l'enfant et oublie « Quitter » lui laissait, le lendemain à huit heures, le
 * portrait du test, les écarts de ses exercices et son propre ressenti de la
 * veille. Le 16 septembre, la réponse a été « douze heures sans visite » — qui
 * laissait ouverte à 8 h 30 une lecture finie à 20 h 30, précisément le cas
 * visé (seconde critique du même soir). Décision du parrain : une fermeture
 * chaque nuit. La session de l'enfant, elle, reste longue : son code est une
 * autonomie, pas une serrure.
 */
const HEURE_DE_FERMETURE = 5;

/* Le dernier « cinq heures du matin » passé, à Paris, en SQL. */
const DERNIERE_FERMETURE = `((date_trunc('day', (now() at time zone 'Europe/Paris') - interval '${HEURE_DE_FERMETURE} hours')
     + interval '${HEURE_DE_FERMETURE} hours') at time zone 'Europe/Paris')`;

export type RolePersonne = "parent" | "proche" | "enfant";

export type Personne = {
  id: string;
  famille_id: string;
  role: RolePersonne;
  prenom: string;
  role_affiche: string;
  mot_de_l_enfant: string;
};

/* ------------------------------------------------------------------ */
/* Empreintes                                                          */
/* ------------------------------------------------------------------ */

/* Les jetons font 256 bits d'aléa : un SHA-256 suffit, un hachage lent
   n'apporterait rien contre une force brute qui n'aboutira jamais. */
const empreinteJeton = (jeton: string) =>
  createHash("sha256").update(jeton).digest("hex");

/* Le code de l'enfant, lui, est court : il faut un hachage lent, sinon une
   copie de la base rendrait les quatre chiffres en une seconde. C'est
   `pgcrypto` qui s'en charge — même algorithme à l'écriture et à la lecture,
   et l'amorçage de la famille tient alors en pur SQL. */

const nouveauJeton = () => randomBytes(32).toString("base64url");

/* ------------------------------------------------------------------ */
/* Les sessions                                                        */
/* ------------------------------------------------------------------ */

export async function ouvrirSession(personneId: string): Promise<Personne | null> {
  /* Le ménage, au passage : les sessions expirées de tout le monde, et
     celles de cette personne que l'inactivité a déjà fermées. */
  await executer(
    `delete from session s using personne p
      where p.id = s.personne_id
        and (s.expire_le < now()
             or (p.id = $1 and p.role <> 'enfant' and s.vue_le < ${DERNIERE_FERMETURE}))`,
    [personneId],
  );

  const jeton = nouveauJeton();
  await executer(
    `insert into session (personne_id, empreinte, expire_le)
     values ($1, $2, now() + ($3 || ' days')::interval)`,
    [personneId, empreinteJeton(jeton), String(DUREE_SESSION_JOURS)],
  );

  const boite = await cookies();
  boite.set(COOKIE_SESSION, jeton, {
    httpOnly: true,
    /* Le site n'est servi qu'en HTTPS, y compris avec le certificat local. */
    secure: true,
    sameSite: "lax",
    path: "/",
    maxAge: DUREE_SESSION_JOURS * 24 * 60 * 60,
  });

  return personneDeId(personneId);
}

/**
 * Qui est là.
 *
 * Mémorisée le temps d'une requête (`cache` de React) : l'en-tête et la page
 * la demandent tous les deux, et il n'y a aucune raison de lire la session
 * deux fois pour rendre un écran.
 */
export const personneConnectee = cache(async (): Promise<Personne | null> => {
  const jeton = (await cookies()).get(COOKIE_SESSION)?.value;
  if (!jeton) return null;

  const p = await ligne<Personne>(
    `select p.id, p.famille_id, p.role, p.prenom, p.role_affiche, p.mot_de_l_enfant
     from session s
     join personne p on p.id = s.personne_id
     left join code_acces c on c.personne_id = p.id
     where s.empreinte = $1
       and s.expire_le > now()
       /* Un adulte retape son code après cinq heures du matin. */
       and (p.role = 'enfant' or s.vue_le >= ${DERNIERE_FERMETURE})
       /* Un code changé ferme les sessions ouvertes avant : sans ça, celui
          qui avait vu le code gardait son accès un an. */
       and (c.modifie_le is null or s.cree_le >= c.modifie_le)`,
    [empreinteJeton(jeton)],
  );
  if (!p) return null;

  /* Trace de vie — et, pour un adulte, ce qui prolonge sa session. Attendue :
     depuis qu'elle décide qui retape son code, elle ne peut plus être lancée
     sans qu'on sache si elle a abouti. Une écriture toutes les cinq minutes
     au plus. */
  await executer(
    `update session set vue_le = now()
      where empreinte = $1 and vue_le < now() - interval '5 minutes'`,
    [empreinteJeton(jeton)],
  ).catch(() => {});

  return p;
});

/* ------------------------------------------------------------------ */
/* Revenir là où on était                                              */
/* ------------------------------------------------------------------ */

/**
 * Une page de l'application, et rien d'autre : pas d'adresse extérieure
 * (`//ailleurs.fr`), pas la porte elle-même.
 */
export const suiteValide = (s: string | null | undefined): s is string =>
  typeof s === "string" && /^\/(?![/\\])[^\s]*$/.test(s) && !s.startsWith("/entrer");

/**
 * La porte des adultes, avec la page à retrouver derrière.
 *
 * Sans session, toutes les pages renvoyaient à `/entrer` — la porte de
 * l'enfant, « Ton code », quatre cases — puis, le code tapé, à La journée
 * plutôt qu'à la page demandée (seconde critique du 16 septembre).
 */
export const entreeAdulte = (suite?: string) =>
  `/entrer?a=adulte${suiteValide(suite) ? `&suite=${encodeURIComponent(suite)}` : ""}`;

/**
 * Dans un geste d'adulte dont la session s'est fermée : retour à la porte,
 * sur la page d'où il venait. Le geste ne répondait rien — le formulaire se
 * vidait, « ajoutée » s'affichait sans rien ajouter. Ce qu'il tapait est
 * gardé par l'écran, et le retrouve après le code.
 */
export async function renvoyerALaPorte(): Promise<never> {
  let suite: string | undefined;
  try {
    const u = new URL((await headers()).get("referer") ?? "");
    suite = u.pathname + u.search;
  } catch {
    suite = undefined;
  }
  redirect(entreeAdulte(suite));
}

export async function fermerSession() {
  const boite = await cookies();
  const jeton = boite.get(COOKIE_SESSION)?.value;
  if (jeton) {
    await executer(`delete from session where empreinte = $1`, [
      empreinteJeton(jeton),
    ]);
  }
  boite.delete(COOKIE_SESSION);
}

/* ------------------------------------------------------------------ */
/* Les codes                                                           */
/* ------------------------------------------------------------------ */

/**
 * Le délai imposé à une adresse qui multiplie les essais.
 *
 * Croissant, plafonné, et invisible pour quelqu'un qui se trompe une fois.
 * Ce n'est pas une punition : c'est ce qui rend une force brute inutile sans
 * jamais fermer la porte à celui qui a le droit d'entrer.
 */
async function freiner(ip: string) {
  /* Le ménage se fait ici, au passage : une tentative de plus d'un jour ne
     sert plus à rien, et sans ça la table grossirait pendant des années au
     rythme des robots qui tapent sur tout ce qui a un formulaire. */
  await executer(`delete from tentative where essaye_le < now() - interval '1 day'`);

  /* L'essai est compté **avant** d'attendre : sinon cinquante requêtes
     lancées en même temps lisaient toutes le même compte, attendaient
     toutes le même délai, et passaient ensemble. */
  await executer(`insert into tentative (ip) values ($1)`, [ip]);

  const r = await ligne<{ adresse: string; toutes: string }>(
    `select count(*) filter (where ip = $1)::text as adresse,
            count(*)::text as toutes
       from tentative where essaye_le > now() - interval '15 minutes'`,
    [ip],
  );
  const essais = Number(r?.adresse ?? 0) - 1;
  const partout = Number(r?.toutes ?? 0);

  /* Une adresse : rien pour les trois premiers essais, puis de plus en plus,
     jusqu'à vingt secondes. Un enfant qui se trompe deux fois ne remarque rien. */
  const parAdresse = essais < 3 ? 0 : Math.min(20_000, (essais - 2) * 400);
  /* Toutes les adresses : quatre personnes n'essaient pas deux cents codes en
     un quart d'heure. Au-delà, c'est une machine qui en change, et tout le
     monde ralentit un peu — sans jamais fermer. */
  const global = partout < 200 ? 0 : Math.min(10_000, (partout - 200) * 50);

  const attente = parAdresse + global;
  if (attente > 0) await new Promise((r) => setTimeout(r, attente));
}

/**
 * Ouvre la session d'une personne à partir de son code.
 *
 * Rend `null` quand ça ne correspond pas — et c'est à l'écran de traiter ce
 * `null` avec douceur : on redemande, on ne reproche pas, on ne compte pas,
 * on ne verrouille jamais.
 */
export async function entrerAvecCode(
  porte: "enfant" | "adulte",
  code: string,
  ip: string,
): Promise<Personne | null> {
  const chiffres = code.replace(/\D/g, "");
  if (chiffres.length < 4) return null;

  return unParUn(ip, () => essayer(porte, chiffres, ip));
}

/**
 * Les essais d'une même adresse passent **un par un**.
 *
 * Le délai était imposé à chaque requête, pas au débit : cinq cents essais
 * lancés ensemble attendaient chacun leurs trente secondes en parallèle, et
 * seul le processeur limitait la force brute — tout en occupant les
 * connexions à la base, si bien que la famille lisait « Le cahier ne répond
 * pas » (seconde critique du 16 septembre). La file vit dans le processus,
 * sans tenir de connexion pendant l'attente ; au-delà de quelques essais en
 * attente, les suivants sont refusés sans être lus. Personne qui tape son
 * code n'en a dix en vol.
 */
const FILES = new Map<string, { suite: Promise<unknown>; enAttente: number }>();
const EN_ATTENTE_MAX = 5;

function unParUn<T>(ip: string, travail: () => Promise<T>): Promise<T | null> {
  const file = FILES.get(ip) ?? { suite: Promise.resolve(), enAttente: 0 };
  if (file.enAttente >= EN_ATTENTE_MAX) return Promise.resolve(null);
  file.enAttente++;
  const resultat = file.suite
    .catch(() => undefined)
    .then(travail)
    .finally(() => {
      file.enAttente--;
      if (file.enAttente === 0 && FILES.get(ip) === file) FILES.delete(ip);
    });
  file.suite = resultat;
  FILES.set(ip, file);
  return resultat;
}

async function essayer(
  porte: "enfant" | "adulte",
  chiffres: string,
  ip: string,
): Promise<Personne | null> {
  await freiner(ip);

  /* Le code identifie la personne : rien ne demande son nom, et l'accueil
     n'en affiche aucun. Sur un site public, lister les prénoms de la famille
     reviendrait à publier sa composition.

     La comparaison se fait dans la base : `crypt` rejoue le sel contenu dans
     l'empreinte, et la lenteur du bcrypt protège les quelques chiffres. */
  const trouve = await ligne<{ personne_id: string }>(
    `select c.personne_id
       from code_acces c join personne p on p.id = c.personne_id
      where ($1 = 'enfant') = (p.role = 'enfant')
        and c.empreinte = crypt($2, c.empreinte)`,
    [porte, chiffres],
  );
  if (!trouve) return null;

  /* L'ardoise de l'adresse n'est plus effacée sur un succès : un code connu
     glissé entre deux essais remettait le frein à zéro. Les essais
     s'oublient seuls au bout d'un quart d'heure, et les trois premiers ne
     ralentissent de toute façon personne. */
  return ouvrirSession(trouve.personne_id);
}

export async function definirCode(personneId: string, code: string) {
  await executer(
    `insert into code_acces (personne_id, empreinte)
     values ($1, crypt($2, gen_salt('bf', 12)))
     on conflict (personne_id) do update
       set empreinte = excluded.empreinte, modifie_le = now()`,
    [personneId, code.replace(/\D/g, "")],
  );
}

/* ------------------------------------------------------------------ */

export async function personneDeId(id: string) {
  return ligne<Personne>(
    `select id, famille_id, role, prenom, role_affiche, mot_de_l_enfant
     from personne where id = $1`,
    [id],
  );
}

/**
 * Les parents lisent le soir — le ressenti qu'il dépose et la note des adultes.
 * Le proche, non : l'écran de l'enfant lui promet que ce qu'il dépose va « chez
 * papa et maman », et personne d'autre.
 *
 * Le relevé des exercices et le portrait du test, eux, sont lus par tous les
 * adultes, parrain compris. Le POC prévoyait l'inverse pour le relevé ; la
 * famille a tranché le 14 septembre 2026 de laisser au parrain le niveau
 * d'information qu'il a.
 */
export const estParent = (p: Personne | null) => p?.role === "parent";
export const estEnfant = (p: Personne | null) => p?.role === "enfant";
/** Le proche — le parrain. C'est lui qui prépare la boîte à pourquoi. */
export const estProche = (p: Personne | null) => p?.role === "proche";
