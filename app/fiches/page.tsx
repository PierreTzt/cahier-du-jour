import Link from "next/link";
import { redirect } from "next/navigation";
import { Bureau, Section, Carte, Chiffre, LienTete } from "@/components/adulte/Bureau";
import SurOrdinateur from "@/components/adulte/SurOrdinateur";
import { personneConnectee, entreeAdulte } from "@/lib/session";
import { fiches, fichesDuRituel } from "@/lib/fiches";
import { joursDuRituel, joursAvecTrame, trameDuJour } from "@/lib/trame";

/**
 * Toutes les fiches, rituel par rituel. **Écran d'adulte.**
 *
 * Le pendant de `/manuel` pour ce qui ne se passe pas à l'écran. Le manuel
 * porte les 222 séances que l'enfant fait seul ; ces fiches portent les 785
 * autres, celles qu'un adulte mène — et qui, jusqu'ici, n'existaient que
 * comme un titre et une consigne.
 *
 * Cette page sert à deux choses. Préparer : on lit la série d'un rituel d'un
 * coup, on voit où elle va. Et **voir ce qui manque** : une série plus courte
 * que le nombre de séances recommence au début, et la page le dit plutôt que
 * de laisser le découvrir un mardi matin.
 */

export const dynamic = "force-dynamic";

export default async function Fiches() {
  const moi = await personneConnectee();
  if (!moi) redirect(entreeAdulte("/fiches"));
  if (moi.role === "enfant") redirect("/journee");

  /* Ce que la trame demande : chaque rituel de l'année, et combien de fois il
     tombe. C'est le dénominateur ; les fiches écrites sont le numérateur. */
  const attendus = new Map<string, { fois: number; consigne: string; minutes: number }>();
  for (const j of joursAvecTrame())
    for (const c of trameDuJour(j).creneaux) {
      if (c.lecon) continue;
      const deja = attendus.get(c.titre);
      if (deja) deja.fois += 1;
      else attendus.set(c.titre, { fois: 1, consigne: c.consigne, minutes: c.minutes });
    }

  const rituels = [...attendus]
    .map(([titre, a]) => ({ titre, ...a, serie: fichesDuRituel(titre), jours: joursDuRituel(titre) }))
    .sort((x, y) => y.fois - x.fois);

  const seances = rituels.reduce((t, r) => t + r.fois, 0);
  const couvertes = rituels.reduce((t, r) => t + Math.min(r.serie.length, r.fois), 0);
  const sansFiche = rituels.filter((r) => r.serie.length === 0);

  return (
    <Bureau
      qui={`${moi.prenom} · ${moi.role_affiche}`}
      titre="Les fiches"
      chapeau={
        <>
          Ce qu’il faut avoir sous les yeux pour mener les séances qui ne se
          passent pas à l’écran. Le manuel porte les leçons que l’enfant fait
          seul&nbsp;; celles-ci portent tout le reste —
          le calcul mental, la dictée, la lecture, l’écrit, le dehors, le
          mercredi.{" "}
          <strong className="font-bold text-encre">
            L’enfant ne voit aucune de ces pages
          </strong>
          &nbsp;: elles portent les réponses.
        </>
      }
      actions={
        <>
          <LienTete href="/manuel">Le manuel</LienTete>
          <LienTete href="/annee">L’année</LienTete>
          <LienTete href="/pilotage">La journée</LienTete>
        </>
      }
    >
      <SurOrdinateur />
      <Section titre="Ce qu’elles couvrent">
        <dl className="grid grid-cols-2 gap-6 sm:grid-cols-4">
          <Chiffre n={fiches.length} quoi="fiches écrites" />
          <Chiffre n={rituels.filter((r) => r.serie.length > 0).length} quoi={`rituels sur ${rituels.length}`} />
          <Chiffre
            n={`${couvertes} / ${seances}`}
            quoi="séances sans répétition"
            teinte={couvertes === seances ? "text-fini" : undefined}
          />
          <Chiffre n={seances} quoi="séances menées par un adulte" />
        </dl>

        {sansFiche.length > 0 && (
          <Carte accent="ocre" className="mt-6 p-5">
            <p className="text-[1rem] leading-relaxed text-encre">
              <strong className="font-bold">
                {sansFiche.length} rituel{sansFiche.length > 1 ? "s n’ont" : " n’a"} pas
                encore de fiche.
              </strong>{" "}
              Pour {sansFiche.length > 1 ? "ceux-là" : "celui-là"}, la consigne
              reste seule, comme avant, et c’est à vous d’apporter le matériel.
              C’est dit ici plutôt que découvert un mardi matin.
            </p>
          </Carte>
        )}
      </Section>

      {rituels.map((r) => (
        <Section
          key={r.titre}
          titre={r.titre}
          aide={
            <>
              {r.consigne}{" "}
              <span className="chiffres">
                · {r.fois} fois dans l’année, {r.minutes} min
              </span>
            </>
          }
        >
          {r.serie.length === 0 ? (
            <p className="text-[1.0625rem] text-encre-tenue">
              Pas encore de fiche. La séance s’affiche avec sa consigne seule.
            </p>
          ) : (
            <>
              {r.serie.length < r.fois && (
                <p className="mb-3 text-[0.9375rem] leading-relaxed text-encre-tenue">
                  {r.serie.length} fiches pour {r.fois} séances&nbsp;: la série
                  recommence au début une fois épuisée. Revoir une fiche des mois
                  plus tard est une révision, pas un défaut — mais vous le savez.
                </p>
              )}
              <ul>
                {r.serie.map((f, i) => (
                  <li key={f.code} className="border-b border-bord last:border-0">
                    <Link
                      href={`/fiche/${f.code}`}
                      className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1 py-2.5 transition-colors hover:bg-carte"
                    >
                      <span className="flex-1 text-[1.0625rem] text-encre">
                        <span className="chiffres mr-3 text-[0.875rem] text-encre-tenue">
                          {i + 1}.
                        </span>
                        {f.titre}
                      </span>
                      <span className="chiffres shrink-0 text-[0.875rem] text-encre-tenue">
                        {r.jours[i] ? `le ${r.jours[i].slice(8)}/${r.jours[i].slice(5, 7)}` : "en réserve"}
                      </span>
                    </Link>
                  </li>
                ))}
              </ul>
            </>
          )}
        </Section>
      ))}
    </Bureau>
  );
}
