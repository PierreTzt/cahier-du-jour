/**
 * Ce que le journal lit en base. **Réservé aux parents.**
 *
 * Les deux parents partagent un seul journal : chaque note du soir et chaque
 * mot laissé portent le prénom de qui l'a écrit. C'est l'intérêt principal
 * quand l'enfant passe d'une maison à l'autre — on sait ce qui a été vu
 * ailleurs, et par qui.
 *
 * Tout est lu pour une période bornée, en quatre requêtes simples plutôt
 * qu'une seule avec des agrégats JSON : chacune se relit seule, et la période
 * ne dépasse jamais douze semaines. Le calcul de la grille et du constat vit
 * dans `lib/bande.ts`, pur ; ici on ne fait que lire et ranger.
 *
 * Les dates : `journee.jour` est une `date`, rendue en texte pour que `pg` ne
 * la transforme pas en objet `Date` au fuseau du serveur. Les heures d'écriture
 * sont des `timestamptz`, lues à l'heure de Paris.
 */

import { lignes, ligne } from "./base";
import { trameDuJour } from "./trame";
import type { ClotureJour, EtatSeance, RessentiMot, TonJour } from "./journee";
import type { JourneeResumee, NatureDuJour } from "./bande";

export type SeanceDuJournal = { titre: string; etat: EtatSeance };

export type MotDuJournal = {
  id: string;
  texte: string;
  /* `null` quand l'adulte a été retiré de la famille : son mot reste, son nom
     non (migration 015, `on delete set null`). */
  par_prenom: string | null;
  par_role: string | null;
  /** La date d'écriture, à Paris — un mot peut être écrit la veille. */
  ecrit_le: string;
  /** « 18:05 », à Paris. */
  heure: string;
};

export type JourneeDuJournal = {
  id: string;
  jour: string;
  ton: TonJour;
  cloture: ClotureJour | null;
  note: string;
  note_prenom: string | null;
  note_role: string | null;
  seances: SeanceDuJournal[];
  ressenti: { choix: RessentiMot | null; mot: string } | null;
  mots: MotDuJournal[];
};

/**
 * Les journées d'une période, bornes incluses, avec leurs séances, le
 * ressenti déposé, la note du soir et les mots des adultes. Des plus récentes
 * aux plus anciennes.
 *
 * Chaque requête filtre sur la famille par la journée : un identifiant de
 * journée ne suffit jamais à lire ce qui ne vous appartient pas.
 */
export async function journeesDeLaPeriode(
  familleId: string,
  du: string,
  au: string,
): Promise<JourneeDuJournal[]> {
  const periode = [familleId, du, au];

  const [journees, seances, ressentis, mots] = await Promise.all([
    lignes<Omit<JourneeDuJournal, "seances" | "ressenti" | "mots">>(
      `select j.id, j.jour::text as jour, j.ton::text as ton, j.cloture::text as cloture,
              j.note, p.prenom as note_prenom, p.role_affiche as note_role
         from journee j
         left join personne p on p.id = j.note_de
        where j.famille_id = $1 and j.jour between $2::date and $3::date
        order by j.jour desc`,
      periode,
    ),
    lignes<SeanceDuJournal & { journee_id: string }>(
      `select s.journee_id, s.titre, s.etat::text as etat
         from seance s
         join journee j on j.id = s.journee_id
        where j.famille_id = $1 and j.jour between $2::date and $3::date
        order by s.journee_id, s.rang, s.cree_le`,
      periode,
    ),
    lignes<{ journee_id: string; choix: RessentiMot | null; mot: string }>(
      `select r.journee_id, r.choix::text as choix, r.mot
         from ressenti r
         join journee j on j.id = r.journee_id
        where j.famille_id = $1 and j.jour between $2::date and $3::date`,
      periode,
    ),
    lignes<MotDuJournal & { journee_id: string }>(
      `select m.id, m.journee_id, m.texte,
              p.prenom as par_prenom, p.role_affiche as par_role,
              (m.cree_le at time zone 'Europe/Paris')::date::text as ecrit_le,
              to_char(m.cree_le at time zone 'Europe/Paris', 'HH24:MI') as heure
         from mot m
         join journee j on j.id = m.journee_id
         left join personne p on p.id = m.par_adulte
        where j.famille_id = $1 and j.jour between $2::date and $3::date
        order by m.cree_le, m.id`,
      periode,
    ),
  ]);

  const parJournee = <T extends { journee_id: string }>(rangees: T[]) => {
    const m = new Map<string, Omit<T, "journee_id">[]>();
    for (const { journee_id, ...reste } of rangees) {
      if (!m.has(journee_id)) m.set(journee_id, []);
      m.get(journee_id)!.push(reste);
    }
    return m;
  };
  const seancesDe = parJournee(seances);
  const motsDe = parJournee(mots);
  const ressentiDe = new Map(ressentis.map((r) => [r.journee_id, { choix: r.choix, mot: r.mot }]));

  return journees.map((j) => ({
    ...j,
    seances: seancesDe.get(j.id) ?? [],
    ressenti: ressentiDe.get(j.id) ?? null,
    mots: motsDe.get(j.id) ?? [],
  }));
}

/** Ce que la grille retient d'une journée : son ton, sa clôture, combien de séances. */
export const resumer = (j: JourneeDuJournal): JourneeResumee => ({
  jour: j.jour,
  ton: j.ton,
  cloture: j.cloture,
  seances: j.seances.length,
});

/**
 * La nature d'une date, d'après la trame de l'année : classe, vacances, férié,
 * hors de l'année. C'est ce qui empêche un jour de vacances d'avoir l'air
 * d'un jour manquant.
 */
export function natureSelonLaTrame(iso: string): NatureDuJour {
  const t = trameDuJour(iso);
  return { nature: t.nature, pourquoi: t.pourquoi };
}

/** Le prénom de l'enfant, pour que le journal parle de lui et pas « de l'élève ». */
export async function prenomDeLEnfant(familleId: string) {
  const p = await ligne<{ prenom: string }>(
    `select prenom from personne
      where famille_id = $1 and role = 'enfant'
      order by cree_le limit 1`,
    [familleId],
  );
  return p?.prenom ?? null;
}
