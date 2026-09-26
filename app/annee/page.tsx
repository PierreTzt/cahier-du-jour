import Link from "next/link";
import { redirect } from "next/navigation";
import PoserLaTrame from "@/components/PoserLaTrame";
import { Bureau, Section, Carte, Chiffre, LienTete } from "@/components/adulte/Bureau";
import SurOrdinateur from "@/components/adulte/SurOrdinateur";
import { matieres, teintesDe, type MatiereId } from "@/lib/data";
import { personneConnectee, entreeAdulte } from "@/lib/session";
import { lignes } from "@/lib/base";
import { avancementDesPeriodes } from "@/lib/rattrapage";
import {
  bilanDeLAnnee,
  semainesDeLAnnee,
  joursAvecTrame,
  lesVacances,
  JOUR_DU_TEST,
  PREMIER_JOUR,
  ZONE,
  type JourneeTramee,
} from "@/lib/trame";

/**
 * L'année entière, en une page. **Écran d'adulte.**
 *
 * Le parrain s'est connecté du côté d'un parent, a regardé mercredi, jeudi, et
 * n'a rien vu. Il avait raison : une bibliothèque de cent treize leçons ne
 * remplace pas un plan, et personne ne peut composer une journée tous les
 * soirs pendant dix mois.
 *
 * Cette page montre donc le plan tel qu'il est calculé, semaine par semaine,
 * du test de septembre à la fin juin. Elle sert à deux choses : voir, et
 * poser — écrire la trame en base pour qu'elle devienne la journée de
 * l'enfant, et qu'un adulte puisse ensuite la corriger.
 *
 * Ce que cette page ne fait pas : elle n'écrit rien toute seule. Un affichage
 * qui crée des données est un piège — on recharge, et on double tout.
 */

export const dynamic = "force-dynamic";

const MOIS = ["janvier","février","mars","avril","mai","juin","juillet","août","septembre","octobre","novembre","décembre"];

/** « 17 octobre », « 1er novembre » — en français le premier est ordinal. */
function courtEnFrancais(iso: string) {
  const d = new Date(`${iso}T12:00:00`);
  const n = d.getDate();
  return `${n === 1 ? "1er" : n} ${MOIS[d.getMonth()]}`;
}

/**
 * Une durée en minutes, écrite comme on l'écrit en français.
 *
 * `Math.floor(m / 60) + " h " + (m % 60)` donnait « 7 h » avec un h orphelin
 * quand les minutes tombaient juste, et « 7 H 55 » dans une étiquette, que la
 * feuille de style met en capitales.
 */
function duree(minutes: number) {
  const h = Math.floor(minutes / 60);
  const m = minutes % 60;
  if (h === 0) return `${m} min`;
  return m === 0 ? `${h} h` : `${h} h ${String(m).padStart(2, "0")}`;
}

const QUAND: Record<number, string> = {
  1: "septembre – octobre",
  2: "novembre – décembre",
  3: "janvier – février",
  4: "mars – avril",
  5: "mai – juin",
};

export default async function Annee() {
  const moi = await personneConnectee();
  if (!moi) redirect(entreeAdulte("/annee"));
  if (moi.role === "enfant") redirect("/journee");

  const semaines = semainesDeLAnnee();
  const bilan = bilanDeLAnnee();
  const avancement = await avancementDesPeriodes(moi.famille_id);

  /* Les journées déjà écrites en base : la trame est un plan, pas un fait. */
  const ecrites = new Set(
    (
      await lignes<{ jour: string }>(
        `select distinct j.jour::text as jour
           from journee j join seance s on s.journee_id = j.id
          where j.famille_id = $1`,
        [moi.famille_id],
      )
    ).map((r) => r.jour),
  );

  /* Le jour du test compte comme une journée à poser, mais pas comme un jour
     de cours : d'où `joursAvecTrame()` ici et `joursTravailles` plus haut. */
  const aPoser = joursAvecTrame();
  const restantes = aPoser.filter((j) => !ecrites.has(j)).length;

  return (
    <Bureau
      qui={`${moi.prenom} · ${moi.role_affiche}`}
      titre="L’année de CM1"
      chapeau={
        <>
          Le plan complet, du test de septembre à la fin juin. Trois heures par
          jour du lundi au vendredi, un mercredi plus court, et les vacances de
          l’académie de {ZONE.academie} — zone {ZONE.zone}.{" "}
          <strong className="font-bold text-encre">
            Rien n’est écrit tant que vous ne l’avez pas posé
          </strong>{" "}
          : une semaine pâle est un plan, une semaine marquée est une journée
          réelle que l’enfant verra.
        </>
      }
      actions={
        <>
          <LienTete href="/pilotage">La journée</LienTete>
          <LienTete href="/manuel">Le manuel</LienTete>
          <LienTete href="/sources">Les sources</LienTete>
        </>
      }
    >
      <SurOrdinateur />
      <Section titre="Ce que l’année contient">
        <dl className="grid grid-cols-2 gap-6 sm:grid-cols-4">
          <Chiffre n={bilan.joursTravailles} quoi="jours de travail" />
          <Chiffre n={bilan.heures} quoi="heures dans l’année" />
          <Chiffre n={bilan.leconsDistinctes} quoi="leçons du programme" />
          <Chiffre n={bilan.creneauxAvecLecon} quoi="passages à l’écran" />
        </dl>

        <Carte className="mt-6 p-5">
          <p className="text-[1rem] leading-relaxed text-encre-douce">
            Chaque leçon est donnée une première fois, puis{" "}
            <strong className="font-bold text-encre">reprise</strong> une
            dizaine de jours plus tard : c’est pourquoi il y a{" "}
            {bilan.creneauxAvecLecon} passages à l’écran pour{" "}
            {bilan.leconsDistinctes} leçons. Revoir une notion après un délai
            est ce qui la fixe, et la seconde série d’exercices se lit
            séparément — vous voyez donc ce qui a tenu. Le reste des créneaux
            n’est pas à l’écran : calcul mental à l’ardoise, dictée, lecture à
            voix haute, production d’écrit, dehors.
          </p>
        </Carte>
      </Section>

      <Section
        titre="Où en est chaque période"
        aide="Les leçons menées au bout, sur celles que la trame prévoit. Un chiffre par période et pas un pourcentage global : « douze sur trente-deux en période 2 » dit quoi faire, « 43 % » ne dit rien."
      >
        <dl className="grid grid-cols-2 gap-6 sm:grid-cols-5">
          {avancement.map((a) => (
            <Chiffre
              key={a.periode}
              n={`${a.menees} / ${a.prevues}`}
              quoi={`période ${a.periode} · ${QUAND[a.periode]}`}
              teinte={
                a.prevues > 0 && a.menees === a.prevues ? "text-fini" : undefined
              }
            />
          ))}
        </dl>
      </Section>

      <Section
        titre="Les vacances"
        aide={`Calendrier officiel de l’académie de ${ZONE.academie}, zone ${ZONE.zone}, d’après l’open data du ministère. La trame n’y propose rien.`}
      >
        <ul className="flex flex-wrap gap-x-8 gap-y-2">
          {lesVacances().map((v) => (
            <li key={v.du} className="text-[1rem]">
              <span className="font-bold">{v.nom}</span>
              <span className="chiffres ml-2 text-encre-tenue">
                du {courtEnFrancais(v.du)} au {courtEnFrancais(v.au)}
              </span>
            </li>
          ))}
        </ul>
      </Section>

      <Section
        titre="Semaine par semaine"
        aide={
          <>
            {restantes === 0
              ? `Les ${aPoser.length} journées de l’année sont écrites — le jour du test compris. Chacune est modifiable depuis « ouvrir cette journée » : retirer, ajouter, déplacer, changer le ton.`
              : `${restantes} journée${restantes > 1 ? "s" : ""} sur ${aPoser.length} ${restantes > 1 ? "restent" : "reste"} à écrire. Écrire n’enlève rien : une journée déjà composée est laissée telle quelle.`}{" "}
            Les titres soulignés sont les leçons du manuel : ils s’ouvrent, et
            on y lit le cours et les réponses. Le reste se fait sur le cahier, à
            l’ardoise ou dehors.
          </>
        }
        actions={
          restantes > 0 ? (
            <PoserLaTrame portee="annee" jour={PREMIER_JOUR} />
          ) : undefined
        }
      >
        <div>
          {semaines.map((sem, i) => {
            const nouvellePeriode =
              i === 0 || semaines[i - 1].periode !== sem.periode;
            return (
              <div key={sem.lundi}>
                {nouvellePeriode && (
                  <h3 className="etiquette mt-10 border-b border-bord pb-2 text-encre">
                    Période {sem.periode} · {QUAND[sem.periode]}
                  </h3>
                )}
                <Semaine lundi={sem.lundi} jours={sem.jours} ecrites={ecrites} />
              </div>
            );
          })}
        </div>
      </Section>
    </Bureau>
  );
}

function Semaine({
  lundi,
  jours,
  ecrites,
}: {
  lundi: string;
  jours: JourneeTramee[];
  ecrites: Set<string>;
}) {
  const travailles = jours.filter((j) => j.creneaux.length > 0);
  if (travailles.length === 0) {
    const v = jours.find((j) => j.pourquoi);
    return (
      <p className="mt-4 border-b border-bord pb-3 text-[0.9375rem] text-encre-tenue">
        Semaine du {courtEnFrancais(lundi)} — {v?.pourquoi ?? "pas de travail"}
      </p>
    );
  }

  const toutesEcrites = travailles.every((j) => ecrites.has(j.jour));
  const minutes = travailles.reduce((t, j) => t + j.minutes, 0);

  return (
    <section className="mt-6">
      <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
        <h4 className="flex flex-wrap items-baseline gap-x-3 text-[1rem] font-bold">
          Semaine du {courtEnFrancais(lundi)}
          <span className="chiffres font-normal text-encre-tenue">
            {duree(minutes)}
          </span>
          {toutesEcrites && (
            <span className="text-[0.875rem] font-bold text-fini">écrite</span>
          )}
        </h4>
        {!toutesEcrites && <PoserLaTrame portee="semaine" jour={lundi} />}
      </div>

      <div className="mt-3 grid gap-3 sm:grid-cols-2 lg:grid-cols-5">
        {travailles.map((j) => (
          <div
            key={j.jour}
            /* Écrite : une carte blanche, avec sa bande. Pas encore écrite :
               rien — le sol de la page, et une bordure. La première version
               mettait un blanc à 55 %, qui composite à quatre pour cent du
               fond : la distinction que cette page existe pour montrer était
               invisible. Une carte ou pas de carte, ça se voit. */
            className={`rounded-feuille border border-bord p-3 ${
              ecrites.has(j.jour)
                ? "border-l-[4px] border-l-fini bg-carte"
                : "bg-transparent"
            }`}
          >
            <p className="flex flex-wrap items-baseline justify-between gap-x-2 text-[0.875rem] font-bold text-encre">
              <span>{courtEnFrancais(j.jour)}</span>
              <span className="chiffres font-normal text-encre-tenue">
                {j.minutes}′
              </span>
            </p>

            {j.jour === JOUR_DU_TEST && (
              <p className="mt-1 text-[0.8125rem] font-bold text-ocre">
                le test de positionnement
              </p>
            )}
            {j.nature === "mercredi" && (
              <p className="mt-1 text-[0.8125rem] text-encre-tenue">
                mercredi, plus court
              </p>
            )}

            <ul className="mt-2 space-y-1.5">
              {j.creneaux.map((c, k) => (
                <li key={k} className="flex gap-2 text-[0.875rem] leading-snug">
                  <span
                    className={`mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full ${
                      matieres[c.matiere as MatiereId]
                        ? teintesDe(c.matiere as MatiereId).puce
                        : "bg-encre-tenue"
                    }`}
                    aria-hidden
                  />
                  {/* Une leçon s'ouvre, un rituel non : il n'y a rien derrière
                      « dictée de mots » que sa consigne, déjà affichée. */}
                  {c.lecon ? (
                    <Link
                      href={`/manuel/${c.lecon}`}
                      className="text-encre underline decoration-bord-fort underline-offset-2 hover:decoration-encre"
                    >
                      {c.titre}
                      <span className="ml-1 text-[0.75rem] text-encre-tenue no-underline">
                        · lire
                      </span>
                    </Link>
                  ) : (
                    <span className="text-encre-douce">{c.titre}</span>
                  )}
                </li>
              ))}
            </ul>

            <Link
              href={`/pilotage?jour=${j.jour}`}
              className="mt-3 inline-block text-[0.8125rem] text-encre-douce underline decoration-bord-fort underline-offset-4 hover:text-encre"
            >
              ouvrir cette journée
            </Link>
          </div>
        ))}
      </div>
    </section>
  );
}
