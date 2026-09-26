/**
 * Recharger la page, sans jamais tourner en rond.
 *
 * C'est la réponse de l'écran de l'enfant à tout ce qui ne s'est pas passé
 * comme prévu : une action refusée parce que la page datait d'hier, une
 * séance retirée par un adulte pendant qu'il était dessus, une mise en ligne
 * pendant la pause, le Wi-Fi coupé une seconde. Recharger montre l'état réel,
 * sans un mot d'erreur.
 *
 * Mais si la base ne répond plus, recharger ne réparera rien, et une page qui
 * clignote en boucle est pire qu'une page qui attend. Au-delà de deux
 * rechargements en vingt secondes, on s'arrête et on rend la main : l'écran
 * qui appelle dit alors, calmement, qu'on revient plus tard.
 *
 * Module sans dépendance serveur : il est importé par des composants client.
 */

const CLE = "cahier-rechargements";
const FENETRE_MS = 20_000;
const PLAFOND = 2;

function recents(): number[] {
  try {
    const brut = sessionStorage.getItem(CLE);
    const liste: unknown = brut ? JSON.parse(brut) : [];
    const maintenant = Date.now();
    return Array.isArray(liste)
      ? liste.filter((t): t is number => typeof t === "number" && maintenant - t < FENETRE_MS)
      : [];
  } catch {
    return [];
  }
}

/** Vrai tant qu'un rechargement a encore une chance d'arranger les choses. */
export function peutRecharger() {
  return recents().length < PLAFOND;
}

/** Recharge si c'est encore raisonnable ; rend faux sinon. */
export function recharger(): boolean {
  if (!peutRecharger()) return false;
  try {
    sessionStorage.setItem(CLE, JSON.stringify([...recents(), Date.now()]));
  } catch {
    /* Sans stockage, on ne peut pas compter les rechargements : recharger
       quand même tournait en boucle, chaque page rechargée échouant et
       rechargeant à son tour (seconde critique du 16 septembre). On rend la
       main, et l'écran dit calmement qu'on revient plus tard. */
    return false;
  }
  window.location.reload();
  return true;
}

/* ------------------------------------------------------------------ */
/* Ce qu'il a tapé ne se perd pas                                      */
/* ------------------------------------------------------------------ */

/* La date du jour, à Paris, dans la clé : un ressenti tapé et jamais envoyé
   revenait pré-rempli le lendemain soir si l'onglet était resté ouvert. */
const duJour = (cle: string) =>
  `cahier-brouillon-${new Intl.DateTimeFormat("fr-CA", { timeZone: "Europe/Paris" }).format(new Date())}-${cle}`;

/** Garder un brouillon le temps d'un rechargement — ou d'un code retapé. */
export function garderBrouillon(cle: string, texte: string) {
  try {
    if (texte) sessionStorage.setItem(duJour(cle), texte);
    else sessionStorage.removeItem(duJour(cle));
  } catch {
    /* rien à faire : le brouillon est un confort, pas une garantie */
  }
}

export function reprendreBrouillon(cle: string): string {
  try {
    return sessionStorage.getItem(duJour(cle)) ?? "";
  } catch {
    return "";
  }
}

export function oublierBrouillon(cle: string) {
  garderBrouillon(cle, "");
}
