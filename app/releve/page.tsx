import { redirect } from "next/navigation";
import Link from "next/link";
import { LienTete } from "@/components/adulte/Bureau";
import SurOrdinateur from "@/components/adulte/SurOrdinateur";
import BandeDesJours from "@/components/adulte/BandeDesJours";
import Imprimer from "@/components/adulte/Imprimer";
import ReserveAuxParents from "@/components/adulte/ReserveAuxParents";
import { personneConnectee, estParent, entreeAdulte } from "@/lib/session";
import { aujourdhui } from "@/lib/journee";
import {
  destinataireDe,
  lireLeReleve,
  periodeDu,
  periodesVoisines,
  projeterLeReleve,
  type Destinataire,
  type ReleveSoignant,
  type ReleveInspection,
  type VueDuReleve,
} from "@/lib/releve-periode";

/**
 * Le relevé. **Réservé aux parents.**
 *
 * Le journal est la version écran ; le relevé est la version document : daté,
 * sur douze semaines, avec un destinataire écrit en tête, et fait pour sortir
 * de la maison. Deux versions qui ne disent pas la même chose — le soignant lit
 * comment les journées se sont passées, l'inspection ce qui a été étudié —, et
 * aucune des deux ne contient ce que l'enfant dépose le soir. Tout ce qui est
 * affiché vient de `projeterLeReleve` (`lib/releve-periode.ts`).
 *
 * Le parrain n'y entre pas, par décision de la famille du 14 septembre : il
 * garde le relevé des exercices et la vue du contrôle, pas ce document-ci. Il
 * lit pourquoi la porte est fermée ; l'enfant retourne à sa journée. Les deux
 * vérifications viennent **avant** toute lecture en base.
 *
 * À l'écran, la feuille est posée sur le bureau, avec ce qui la règle autour ;
 * à l'impression il ne reste que la feuille — tout le reste porte
 * `sans-impression`, et `app/globals.css` fait le reste.
 */

export const dynamic = "force-dynamic";

/** L'adresse d'un relevé. Le destinataire est toujours écrit : le défaut ne se devine pas en lisant l'adresse. */
function adresse(pour: Destinataire, jusquau: string | null) {
  return jusquau ? `/releve?pour=${pour}&jusquau=${jusquau}` : `/releve?pour=${pour}`;
}

export default async function Releve({
  searchParams,
}: {
  searchParams: Promise<{ pour?: string | string[]; jusquau?: string | string[] }>;
}) {
  const moi = await personneConnectee();
  if (!moi) redirect(entreeAdulte("/releve"));
  if (moi.role === "enfant") redirect("/journee");
  if (!estParent(moi)) return <ReserveAuxParents moi={moi} quoi="Le relevé" />;

  const maintenant = aujourdhui();
  const demande = await searchParams;
  const pour = destinataireDe(demande.pour);
  const periode = periodeDu(demande.jusquau, maintenant);
  const voisines = periodesVoisines(periode, maintenant);

  const vue = projeterLeReleve(await lireLeReleve(moi.famille_id, pour, periode, maintenant));
  /* L'adresse garde la période choisie quand on change de destinataire, sauf
     si c'est la semaine en cours : alors elle reste sans date, et suit les jours. */
  const jusquauGarde = voisines.cetteSemaine ? null : periode.jusquau;

  return (
    <main className="flex-1 bg-bureau print:bg-carte">
      <div className="mx-auto max-w-5xl px-5 pb-24 pt-8 sm:px-8 sm:pt-12 print:max-w-none print:p-0">
        <header className="sans-impression border-b border-bord pb-6">
          <p className="etiquette text-encre-tenue">
            {moi.prenom} · {moi.role_affiche}
          </p>
          <div className="mt-2 flex flex-wrap items-end justify-between gap-x-6 gap-y-3">
            <h1 className="font-display text-[2rem] leading-[1.1] tracking-tight sm:text-[2.5rem]">
              Le relevé
            </h1>
            <Imprimer libelle="Imprimer ou enregistrer en PDF" />
          </div>
          <p className="mt-3 max-w-3xl text-[1.0625rem] leading-relaxed text-encre-douce">
            Le document à remettre, daté, sur douze semaines. Deux versions qui
            ne disent pas la même chose, selon qui le lit. Ce que {vue.enfant}{" "}
            dépose le soir n’est dans aucune des deux.
          </p>
        </header>
        <SurOrdinateur imprimer />

        <div className="sans-impression mt-8 grid gap-6 md:grid-cols-2">
          <nav aria-label="Pour qui">
            <p className="etiquette text-encre-tenue">Pour qui</p>
            <ul className="mt-2 flex flex-wrap gap-2">
              <li>
                <ChoixDestinataire
                  href={adresse("inspection", jusquauGarde)}
                  actif={pour === "inspection"}
                >
                  Pour l’inspection
                </ChoixDestinataire>
              </li>
              <li>
                <ChoixDestinataire href={adresse("soignant", jusquauGarde)} actif={pour === "soignant"}>
                  Pour le soignant
                </ChoixDestinataire>
              </li>
            </ul>
            <p className="mt-3 max-w-md text-[0.9375rem] leading-relaxed text-encre-tenue">
              {pour === "inspection"
                ? "Ce qui a été étudié et fait : les séances, les sorties, ce qu’il a fabriqué, ce qu’il a exploré. Rien sur la façon dont les journées se sont passées."
                : "Comment les journées se sont passées : la bande des douze semaines, ce qu’on peut en dire, et vos notes du soir. À ne pas remettre à l’inspection."}
            </p>
          </nav>

          <nav aria-label="Changer de période">
            <p className="etiquette text-encre-tenue">La période</p>
            <p className="mt-2 text-[1.0625rem] text-encre">{majuscule(vue.periode)}</p>
            <div className="mt-2 flex flex-wrap items-center gap-x-5 gap-y-2">
              {voisines.plusTot && (
                <LienTete href={adresse(pour, voisines.plusTot)}>douze semaines plus tôt</LienTete>
              )}
              {voisines.plusTard && (
                <LienTete href={adresse(pour, voisines.plusTard.jusquau)}>
                  douze semaines plus tard
                </LienTete>
              )}
              {!voisines.cetteSemaine && (
                <LienTete href={adresse(pour, null)}>revenir à cette semaine</LienTete>
              )}
            </div>
          </nav>
        </div>

        {/* Le document lui-même. */}
        <article className="feuille-imprimable mx-auto mt-8 max-w-3xl rounded-feuille border border-bord bg-carte p-7 shadow-[0_20px_60px_-40px_rgba(29,40,54,0.55)] sm:p-12 print:mt-0 print:max-w-none print:rounded-none">
          <EnTeteDuDocument vue={vue} />
          {vue.destinataire === "soignant" ? (
            <PourLeSoignant vue={vue} aujourdhui={maintenant} />
          ) : (
            <PourLInspection vue={vue} />
          )}
          {/* La date d'édition est déjà en tête : ici, la place de la signature. */}
          <footer className="mt-12 flex break-inside-avoid justify-end border-t border-bord pt-6">
            <div className="min-w-[14rem]">
              <p className="text-[0.875rem] text-encre-tenue">Signature</p>
              <div className="mt-10 border-b border-encre" />
            </div>
          </footer>
        </article>
      </div>
    </main>
  );
}

/* ------------------------------------------------------------------ */

const majuscule = (s: string) => s.charAt(0).toLocaleUpperCase("fr-FR") + s.slice(1);

function ChoixDestinataire({
  href,
  actif,
  children,
}: {
  href: string;
  actif: boolean;
  children: React.ReactNode;
}) {
  return (
    <Link
      href={href}
      aria-current={actif ? "page" : undefined}
      className={`inline-block rounded-full border px-4 py-2 text-[0.9375rem] transition-colors ${
        actif
          ? "border-encre bg-encre font-bold text-carte"
          : "border-bord-fort bg-carte text-encre-douce hover:border-encre hover:text-encre"
      }`}
    >
      {children}
    </Link>
  );
}

function EnTeteDuDocument({ vue }: { vue: VueDuReleve }) {
  return (
    <>
      <header className="border-b-2 border-encre pb-5">
        <p className="text-[0.9375rem] text-encre-tenue">Instruction en famille</p>
        <h2 className="mt-1 font-display text-[1.875rem] leading-tight tracking-tight">
          {vue.titre}
        </h2>
        <dl className="mt-4 grid gap-x-6 gap-y-1 text-[1rem] leading-relaxed sm:grid-cols-[8rem_1fr] print:grid-cols-[8rem_1fr]">
          <dt className="text-encre-tenue">Enfant</dt>
          <dd className="text-encre">{majuscule(vue.enfant)}</dd>
          <dt className="text-encre-tenue">Période</dt>
          <dd className="text-encre">{majuscule(vue.periode)}</dd>
          <dt className="text-encre-tenue">Destinataire</dt>
          <dd className="text-encre">{vue.pourQui}</dd>
          <dt className="text-encre-tenue">Établi le</dt>
          <dd className="text-encre">{vue.etabliLe}</dd>
        </dl>
      </header>

      <div className="mt-6 break-inside-avoid text-[0.9375rem] leading-relaxed text-encre-douce">
        <p>{vue.preambule}</p>
        <p className="mt-3 text-encre">Ce que ce relevé ne contient pas&nbsp;:</p>
        <ul className="mt-1 space-y-1">
          {vue.absent.map((a) => (
            <li key={a} className="flex gap-3">
              <span aria-hidden className="text-encre-tenue">
                —
              </span>
              <span>{a}.</span>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}

/** Un titre de rubrique. Il ne reste jamais seul en bas d'une page imprimée. */
function Rubrique({
  titre,
  aide,
  children,
}: {
  titre: string;
  aide?: React.ReactNode;
  children: React.ReactNode;
}) {
  return (
    <section className="mt-10">
      <div className="break-after-avoid break-inside-avoid">
        <h3 className="border-b border-bord pb-2 font-display text-[1.3125rem] leading-snug tracking-tight">
          {titre}
        </h3>
        {aide && (
          <p className="mt-2 text-[0.9375rem] leading-relaxed text-encre-tenue">{aide}</p>
        )}
      </div>
      <div className="mt-4">{children}</div>
    </section>
  );
}

function Vide({ children }: { children: React.ReactNode }) {
  return <p className="text-[1rem] text-encre-tenue">{children}</p>;
}

/* ------------------------------------------------------------------ */
/* Pour le soignant                                                        */
/* ------------------------------------------------------------------ */

function PourLeSoignant({ vue, aujourdhui }: { vue: ReleveSoignant; aujourdhui: string }) {
  return (
    <>
      <Rubrique
        titre="Les douze semaines"
        aide="Une colonne par semaine, une ligne par jour : ce qui revient le même jour de la semaine se lit comme une bande. Chaque état a sa forme, pas seulement sa teinte, et la légende porte les nombres."
      >
        {/* D'un seul tenant : une grille coupée entre deux pages ne se lit plus. */}
        <div className="break-inside-avoid">
          <BandeDesJours
            bande={vue.bande}
            legende={vue.legende}
            constat={vue.constat}
            aujourdhui={aujourdhui}
            enfant={vue.enfant}
          />
        </div>
      </Rubrique>

      <Rubrique
        titre="Les notes du soir"
        aide="Ce que ses parents ont noté, jour par jour, et qui l’a écrit. Les journées sans note n’y figurent pas : la grille les montre."
      >
        {vue.notes.length === 0 ? (
          <Vide>Aucune note du soir sur la période.</Vide>
        ) : (
          <ol className="space-y-5">
            {vue.notes.map((n) => (
              <li key={n.jour} className="break-inside-avoid border-l-[3px] border-l-bord-fort pl-4">
                <p className="text-[1rem] font-bold text-encre">
                  {majuscule(n.date)}
                  {n.etat && <span className="font-normal text-encre-douce"> — {n.etat}</span>}
                </p>
                <p className="mt-1 whitespace-pre-line text-[1rem] leading-relaxed text-encre">
                  {n.texte}
                </p>
                <p className="mt-1 text-[0.875rem] text-encre-tenue">{n.auteur}</p>
              </li>
            ))}
          </ol>
        )}
      </Rubrique>
    </>
  );
}

/* ------------------------------------------------------------------ */
/* Pour l'inspection                                                   */
/* ------------------------------------------------------------------ */

function PourLInspection({ vue }: { vue: ReleveInspection }) {
  const i = vue.instruction;
  return (
    <>
      <Rubrique
        titre="Les séances menées"
        aide={
          <>
            Par matière, les leçons du manuel et les autres séances faites au
            moins une fois sur la période. Les durées sont celles prévues pour
            chaque séance faite&nbsp;: rien ne chronomètre {vue.enfant}.
          </>
        }
      >
        {i.jours === 0 ? (
          <Vide>Aucune séance faite sur la période.</Vide>
        ) : (
          <>
            <p className="text-[1rem] text-encre">
              <span className="chiffres font-bold">{i.jours}</span>{" "}
              {i.jours === 1 ? "jour où une séance a été faite" : "jours où au moins une séance a été faite"},{" "}
              <span className="chiffres font-bold">{i.duree}</span> de séances.
            </p>
            <div className="mt-4 divide-y divide-bord border-y border-bord">
              {i.matieres.map((m) => (
                <div key={m.id} className="break-inside-avoid py-3">
                  <p className="flex flex-wrap items-baseline justify-between gap-x-6">
                    <span className="text-[1rem] font-bold text-encre">{m.nom}</span>
                    <span className="chiffres text-[0.9375rem] text-encre-douce">{m.duree ?? "—"}</span>
                  </p>
                  {m.lecons.length > 0 && (
                    <p className="mt-1 text-[0.9375rem] leading-relaxed text-encre-douce">
                      <span className="text-encre-tenue">
                        {m.lecons.length > 1 ? "Leçons du manuel" : "Leçon du manuel"}&nbsp;:{" "}
                      </span>
                      {m.lecons.join(" ; ")}
                    </p>
                  )}
                  {m.seances.length > 0 && (
                    <p className="mt-1 text-[0.9375rem] leading-relaxed text-encre-douce">
                      <span className="text-encre-tenue">
                        {m.lecons.length > 0 ? "Et aussi" : m.seances.length > 1 ? "Séances" : "Séance"}&nbsp;:{" "}
                      </span>
                      {m.seances.join(" ; ")}
                    </p>
                  )}
                </div>
              ))}
            </div>
          </>
        )}
      </Rubrique>

      <Rubrique titre="Les sorties" aide="Celles qui ont eu lieu pendant la période.">
        {vue.sorties.passees.length === 0 ? (
          <Vide>Aucune sortie sur la période.</Vide>
        ) : (
          <>
            <p className="text-[1rem] text-encre-douce">
              Matières touchées&nbsp;: {vue.sorties.couvertes.join(", ")}.
            </p>
            <ul className="mt-4 space-y-5">
              {vue.sorties.passees.map((s) => (
                <li key={s.id} className="break-inside-avoid border-l-[3px] border-l-bord-fort pl-4">
                  <p className="text-[1rem] font-bold text-encre">
                    {s.titre}
                    <span className="font-normal text-encre-douce">
                      {" "}
                      — {s.date}
                      {s.lieu && `, ${s.lieu}`}
                    </span>
                  </p>
                  <p className="mt-1 whitespace-pre-line text-[1rem] leading-relaxed text-encre">
                    {s.quoi}
                  </p>
                  <p className="mt-1 text-[0.875rem] text-encre-tenue">{s.matieres.join(", ")}</p>
                </li>
              ))}
            </ul>
          </>
        )}
      </Rubrique>

      <Rubrique
        titre="Ce qu’il a fabriqué"
        aide={<>Des objets, pas des résultats&nbsp;: ce que {vue.enfant} a fait, noté par un adulte.</>}
      >
        {vue.traces.length === 0 ? (
          <Vide>Rien de noté sur la période.</Vide>
        ) : (
          <ul className="space-y-5">
            {vue.traces.map((t) => (
              <li key={t.id} className="break-inside-avoid border-l-[3px] border-l-bord-fort pl-4">
                <p className="text-[1rem] font-bold text-encre">
                  {t.titre}
                  <span className="font-normal text-encre-douce"> — {t.date}</span>
                </p>
                {t.quoi && (
                  <p className="mt-1 whitespace-pre-line text-[1rem] leading-relaxed text-encre">
                    {t.quoi}
                  </p>
                )}
                {t.matiere && <p className="mt-1 text-[0.875rem] text-encre-tenue">{t.matiere}</p>}
              </li>
            ))}
          </ul>
        )}
      </Rubrique>

      <Rubrique
        titre="Exploré avec son parrain"
        aide={
          <>
            À partir de questions posées par {vue.enfant}. Ce qui en reste, c’est
            ce qu’ils ont fait ensemble&nbsp;; rien n’y est évalué.
          </>
        }
      >
        {vue.explorations.length === 0 ? (
          <Vide>Aucune question explorée sur la période.</Vide>
        ) : (
          <div className="space-y-6">
            {vue.explorations.map((g) => (
              <div key={g.domaine}>
                <h4 className="break-after-avoid text-[1rem] font-bold text-encre">{g.domaine}</h4>
                <ul className="mt-2 space-y-4">
                  {g.recits.map((r) => (
                    <li key={r.id} className="break-inside-avoid border-l-[3px] border-l-bord-fort pl-4">
                      <p className="text-[0.875rem] text-encre-tenue">{majuscule(r.date)}</p>
                      <p className="mt-1 whitespace-pre-line text-[1rem] leading-relaxed text-encre">
                        {r.recit}
                      </p>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        )}
      </Rubrique>
    </>
  );
}
