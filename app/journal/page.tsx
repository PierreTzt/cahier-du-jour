import { redirect } from "next/navigation";
import { Bureau, Section, Carte, LienTete } from "@/components/adulte/Bureau";
import ReserveAuxParents from "@/components/adulte/ReserveAuxParents";
import BandeDesJours from "@/components/adulte/BandeDesJours";
import { personneConnectee, estParent, entreeAdulte } from "@/lib/session";
import { aujourdhui } from "@/lib/journee";
import { classesTeinte, ressentis } from "@/lib/data";
import {
  SEMAINES,
  aRaconter,
  bornesDeLaBande,
  constatDe,
  construireBande,
  dateEnLettres,
  dateValide,
  decalerDe,
  etatDuJour,
  etatEnLettres,
  legendeDe,
  lundiDeLaSemaine,
  seancesDuDetail,
  type EtatCase,
} from "@/lib/bande";
import {
  journeesDeLaPeriode,
  natureSelonLaTrame,
  prenomDeLEnfant,
  resumer,
  type JourneeDuJournal,
  type MotDuJournal,
} from "@/lib/journal";
import { PREMIERE_RENTREE } from "@/lib/releve-periode";

/**
 * Le journal. **Réservé aux parents.**
 *
 * Ce que les parents notent le soir, ce que l'enfant dépose de son côté, et
 * les mots que les adultes lui laissent — un seul journal pour les deux
 * maisons. Au bout de quelques mois, c'est le seul relevé continu de ses
 * journées qui existe.
 *
 * Deux lectures, dans cet ordre. D'abord la bande des douze semaines, parce
 * que lire douze lignes ne montre pas un motif et que douze semaines côte à
 * côte, si. Ensuite le détail, pour savoir ce qu'il y avait derrière une case.
 *
 * Le proche n'y entre pas : l'écran de ressenti promet à l'enfant que ce qu'il
 * dépose va « chez papa et maman », et personne d'autre. Il lit pourquoi la
 * porte est fermée plutôt qu'une erreur ; l'enfant retourne à sa journée. Les
 * deux vérifications viennent **avant** toute lecture en base.
 */

export const dynamic = "force-dynamic";

export default async function Journal({
  searchParams,
}: {
  searchParams: Promise<{ jusquau?: string | string[] }>;
}) {
  const moi = await personneConnectee();
  if (!moi) redirect(entreeAdulte("/journal"));
  if (moi.role === "enfant") redirect("/journee");
  if (!estParent(moi)) return <ReserveAuxParents moi={moi} quoi="Le journal" />;

  const maintenant = aujourdhui();
  /* Une autre période se choisit par l'adresse. Une valeur qui n'a pas la
     forme d'une date réelle — un 31 février, un paramètre répété — retombe
     sur aujourd'hui plutôt que de faire lever Postgres.

     Bornée aussi : « 0001-01-01 » et « 9999-12-31 » sont des dates réelles,
     mais la grille calculée autour sort du calendrier de Postgres et la page
     tombait. Rien n'existe avant la première rentrée, et après aujourd'hui il
     n'y a encore rien à lire. */
  const demande = (await searchParams).jusquau;
  const valide = dateValide(demande) ? demande : maintenant;
  const jusquau =
    valide > maintenant ? maintenant : valide < PREMIERE_RENTREE ? PREMIERE_RENTREE : valide;

  const { du, au } = bornesDeLaBande(jusquau);
  const [journees, prenom] = await Promise.all([
    journeesDeLaPeriode(moi.famille_id, du, au),
    prenomDeLEnfant(moi.famille_id),
  ]);
  const enfant = prenom ?? "l’enfant";

  const bande = construireBande({
    jusquau,
    aujourdhui: maintenant,
    journees: journees.map(resumer),
    natureDe: natureSelonLaTrame,
  });
  const legende = legendeDe(bande);
  const constat = constatDe(bande);
  const aLire = journees.filter((j) => aRaconter(j, maintenant));

  /* Les périodes voisines, bout à bout : celle d'avant finit le vendredi qui
     précède la grille, celle d'après sur le vendredi douze semaines plus loin
     — sans jamais dépasser la semaine en cours. */
  const lundiCourant = lundiDeLaSemaine(maintenant);
  const lundiDeFin = lundiDeLaSemaine(jusquau);
  const avant = decalerDe(du, -3);
  const apres = decalerDe(lundiDeFin, SEMAINES * 7 + 4);
  const vendrediDeFin = decalerDe(au, -2);
  const surDeuxAnnees = du.slice(0, 4) !== vendrediDeFin.slice(0, 4);

  return (
    <Bureau
      qui={`${moi.prenom} · ${moi.role_affiche}`}
      titre="Le journal"
      chapeau={
        <>
          Ce que vous notez le soir, ce que {enfant} dépose de son côté, et les
          mots que les adultes lui laissent. Un seul journal pour les deux
          maisons&nbsp;: chaque note et chaque mot portent le prénom de qui l’a
          écrit.
        </>
      }
    >
      <Section
        titre="Les douze semaines"
        aide={
          <>
            Du {dateEnLettres(du, { annee: surDeuxAnnees })} au{" "}
            {dateEnLettres(vendrediDeFin, { annee: true })}. Une colonne par
            semaine, une ligne par jour&nbsp;: ce qui revient le même jour de la
            semaine se lit comme une bande.
          </>
        }
        actions={
          <nav aria-label="Changer de période" className="flex flex-wrap items-center gap-x-5 gap-y-2">
            {du > PREMIERE_RENTREE && (
              <LienTete href={`/journal?jusquau=${avant}`}>douze semaines plus tôt</LienTete>
            )}
            {lundiDeFin < lundiCourant && (
              <LienTete
                href={lundiDeLaSemaine(apres) >= lundiCourant ? "/journal" : `/journal?jusquau=${apres}`}
              >
                douze semaines plus tard
              </LienTete>
            )}
            {lundiDeFin !== lundiCourant && (
              <LienTete href="/journal">revenir à cette semaine</LienTete>
            )}
          </nav>
        }
      >
        <Carte className="p-5 sm:p-6">
          <BandeDesJours
            bande={bande}
            legende={legende}
            constat={constat}
            aujourdhui={maintenant}
            enfant={enfant}
          />
        </Carte>
      </Section>

      <Section
        titre="Jour par jour"
        aide={
          <>
            Les journées de la période où il s’est passé quelque chose, des plus
            récentes aux plus anciennes. Une journée posée à l’avance et que
            personne n’a touchée n’y figure pas&nbsp;; un samedi où quelque chose
            a été noté, si, même si la grille ne montre pas les week-ends.
          </>
        }
      >
        {aLire.length === 0 ? (
          <p className="text-[1.0625rem] text-encre-tenue">
            Rien n’a été noté sur ces douze semaines.
          </p>
        ) : (
          <ol className="space-y-4">
            {aLire.map((j) => (
              <li key={j.id}>
                <UneJournee j={j} maintenant={maintenant} enfant={enfant} />
              </li>
            ))}
          </ol>
        )}
      </Section>
    </Bureau>
  );
}

/* ------------------------------------------------------------------ */

/* Ocre pour ce qui s'est arrêté, jamais rouge : c'est une information de
   pilotage, pas une faute. */
const TEINTE_ETAT: Partial<Record<EtatCase, string>> = {
  menee: "text-fini",
  arretee: "text-ocre",
};

/**
 * Ce que le détail dit de l'état d'une journée — le même mot que sa case dans
 * la grille, ou rien quand ce serait du bruit.
 */
function etatEnClair(j: JourneeDuJournal, maintenant: string) {
  const c = etatDuJour(j.jour, maintenant, resumer(j), natureSelonLaTrame(j.jour));
  /* Aujourd'hui sans séance est « à venir » dans la grille ; écrit sous une
     journée qui a déjà un ressenti ou une note, ça ne voudrait rien dire. Un
     week-end n'a pas de nom à donner, et « hors de l'année » non plus. */
  if (c.etat === "a-venir" || c.etat === "hors-annee") return null;
  if (c.etat === "conge" && c.nature === "week-end") return null;
  return { etat: c.etat, texte: etatEnLettres(c) };
}

/** « Anatole · Papa ». Un adulte retiré de la famille laisse ce qu'il a écrit, sans son nom. */
function auteur(prenom: string | null, role: string | null) {
  if (!prenom) return "un adulte qui n’a plus d’accès";
  return role ? `${prenom} · ${role}` : prenom;
}

/** « à 18 h 05 », ou « le jeudi 8 octobre à 21 h 40 » pour un mot écrit la veille. */
function quand(m: MotDuJournal, jour: string) {
  const [h, min] = m.heure.split(":");
  const heure = `${Number(h)} h ${min}`;
  return m.ecrit_le === jour ? `à ${heure}` : `le ${dateEnLettres(m.ecrit_le)} à ${heure}`;
}

function UneJournee({
  j,
  maintenant,
  enfant,
}: {
  j: JourneeDuJournal;
  maintenant: string;
  enfant: string;
}) {
  const etat = etatEnClair(j, maintenant);
  const { faites, deCote } = seancesDuDetail(j.seances, j.cloture);
  const autreAnnee = j.jour.slice(0, 4) !== maintenant.slice(0, 4);

  /* Le ton, s'il n'était pas normal — et seulement quand l'état ne le dit pas
     déjà. Une journée arrêtée puis passée en repos dit les deux. */
  const ton =
    j.ton === "allegee"
      ? "journée allégée"
      : j.ton === "repos" && etat?.etat !== "repos"
        ? "passée en repos"
        : null;

  const r = j.ressenti?.choix ? ressentis[j.ressenti.choix] : null;
  const t = r ? classesTeinte[r.teinte] : null;

  return (
    <Carte className="p-5 sm:p-6">
      <div className="flex flex-wrap items-baseline justify-between gap-x-5 gap-y-1">
        <h3 className="font-display text-[1.25rem] leading-snug tracking-tight">
          {dateEnLettres(j.jour, { annee: autreAnnee })}
        </h3>
        <LienTete href={`/pilotage?jour=${j.jour}`}>ouvrir cette journée</LienTete>
      </div>

      {(etat || ton) && (
        <p className="mt-1 text-[0.9375rem] text-encre-douce">
          {etat && (
            <span className={`font-bold ${TEINTE_ETAT[etat.etat] ?? "text-encre-douce"}`}>
              {etat.texte}
            </span>
          )}
          {etat && ton && " · "}
          {ton}
        </p>
      )}

      {(faites.length > 0 || deCote.length > 0) && (
        <dl className="mt-3 space-y-1 text-[0.9375rem] leading-relaxed">
          {faites.length > 0 && (
            <div>
              <dt className="inline text-encre-tenue">
                {faites.length === 1 ? "Faite" : "Faites"}&nbsp;:{" "}
              </dt>
              <dd className="inline text-encre">{faites.map((s) => s.titre).join(", ")}</dd>
            </div>
          )}
          {deCote.length > 0 && (
            <div>
              <dt className="inline text-encre-tenue">
                {deCote.length === 1 ? "Mise de côté" : "Mises de côté"}&nbsp;:{" "}
              </dt>
              <dd className="inline text-encre">{deCote.map((s) => s.titre).join(", ")}</dd>
            </div>
          )}
        </dl>
      )}

      {j.ressenti && (
        <div className="mt-4">
          <p className="flex flex-wrap items-center gap-x-2 gap-y-1 text-[1rem] text-encre">
            {r && t ? (
              <>
                {enfant} a dit&nbsp;:
                <span
                  className={`inline-flex items-center gap-2 rounded-full ${t.fond} px-3 py-0.5 text-[0.9375rem] ${t.texte}`}
                >
                  <span aria-hidden className={`h-2 w-2 rounded-full ${t.puce}`} />
                  {r.mot}
                </span>
              </>
            ) : (
              /* « Je préfère ne rien dire » est offert au même rang que les
                 autres réponses : c'en est une, pas un trou. */
              <>{enfant} a préféré ne rien dire.</>
            )}
          </p>
          {/* Ses mots, tels qu'il les a écrits. On ne corrige pas
              l'orthographe de quelqu'un qui vient de dire comment il va. */}
          {j.ressenti.mot.trim() && (
            <blockquote className={`mt-2 border-l-2 pl-4 ${t?.bordG ?? "border-l-bord"}`}>
              <p className="whitespace-pre-line font-display text-[1.0625rem] italic leading-snug text-encre-douce">
                «&nbsp;{j.ressenti.mot}&nbsp;»
              </p>
            </blockquote>
          )}
        </div>
      )}

      {j.note.trim() && (
        <figure className="mt-4">
          <p className="whitespace-pre-line text-[1.0625rem] leading-relaxed text-encre">{j.note}</p>
          <figcaption className="mt-1 text-[0.875rem] text-encre-tenue">
            Note du soir · {auteur(j.note_prenom, j.note_role)}
          </figcaption>
        </figure>
      )}

      {j.mots.length > 0 && (
        <ul className="mt-4 space-y-3 border-t border-bord pt-4">
          {j.mots.map((m) => (
            <li key={m.id}>
              <p className="whitespace-pre-line text-[1rem] leading-relaxed text-encre">{m.texte}</p>
              <p className="mt-1 text-[0.875rem] text-encre-tenue">
                Mot laissé par {auteur(m.par_prenom, m.par_role)}, {quand(m, j.jour)}
              </p>
            </li>
          ))}
        </ul>
      )}
    </Carte>
  );
}
