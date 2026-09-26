import { redirect } from "next/navigation";
import { Bureau, Section, Carte, Chiffre } from "@/components/adulte/Bureau";
import FicheQuestion, { type QuestionDeLAtelier } from "@/components/adulte/FicheQuestion";
import RendezVous from "@/components/adulte/RendezVous";
import { classesTeinte } from "@/lib/data";
import { aujourdhui } from "@/lib/journee";
import { personneConnectee, estProche, entreeAdulte } from "@/lib/session";
import {
  atelierDe,
  domaines,
  ordreDomaines,
  personnesDe,
  pourquoiVivant,
  questionsDe,
  rendezVousDe,
  type Question,
} from "@/lib/pourquoi";

/**
 * L'atelier du parrain.
 *
 * Jusqu'ici, le parrain était un parent diminué : les mêmes écrans, moins le
 * journal, défini par ce qu'il ne voit pas. Ici il y a un endroit dont il est
 * l'auteur.
 *
 * Les parents le lisent — ils lisent les questions de leur fils, c'est normal,
 * et l'écran de dépôt le lui annonce — mais ils n'y écrivent pas. Sans cette
 * asymétrie, le parrain n'est toujours qu'un accès restreint. Les gestes le
 * revérifient côté serveur (`app/gestes/pourquoi.ts`).
 *
 * De ce côté-ci, on a le droit de compter et de trier par arrivée. Chaque
 * question dit aussi, mot pour mot, la phrase que l'enfant lit : elle est tirée
 * de la même projection que son écran, pas réécrite ici.
 */

export const dynamic = "force-dynamic";

const MOIS = ["janvier","février","mars","avril","mai","juin","juillet","août","septembre","octobre","novembre","décembre"];
const JOURS = ["dimanche","lundi","mardi","mercredi","jeudi","vendredi","samedi"];

/**
 * « le lundi 14 septembre », « le jeudi 1er octobre » — avec l'année quand ce
 * n'est pas celle-ci : une question peut attendre d'une année sur l'autre.
 */
function leJour(iso: string) {
  const d = new Date(`${iso}T12:00:00`);
  const n = d.getDate();
  const annee = iso.slice(0, 4) === aujourdhui().slice(0, 4) ? "" : ` ${iso.slice(0, 4)}`;
  return `le ${JOURS[d.getDay()]} ${n === 1 ? "1er" : n} ${MOIS[d.getMonth()]}${annee}`;
}

/* « ce qu’Anne prépare », « l’atelier d’Émile » : devant un prénom qui
   commence par une voyelle, « que » et « de » s'élident. Le h est laissé de
   côté — muet ou aspiré, un prénom ne le dit pas. */
const voyelle = (p: string) => /^[aeiouyàâäéèêëîïôöûüœ]/i.test(p);
const que = (p: string) => (voyelle(p) ? `qu’${p}` : `que ${p}`);
const de = (p: string) => (voyelle(p) ? `d’${p}` : `de ${p}`);

/** Le jour d'un instant, à Paris : 23 h 30 le 31 octobre est encore octobre. */
const aParis = (d: Date) => d.toLocaleDateString("sv-SE", { timeZone: "Europe/Paris" });

export default async function Atelier() {
  const moi = await personneConnectee();
  if (!moi) redirect(entreeAdulte("/atelier"));
  if (moi.role === "enfant") redirect("/journee");

  const [questions, personnes, rdv] = await Promise.all([
    questionsDe(moi.famille_id),
    personnesDe(moi.famille_id),
    rendezVousDe(moi.famille_id),
  ]);

  /* Seul le proche écrit. Les parents voient tout, en lecture. */
  const ecrire = estProche(moi);
  const proche = personnes.find((p) => p.role === "proche") ?? null;
  const enfant = personnes.find((p) => p.role === "enfant")?.prenom ?? "votre enfant";

  const { aLire, enPreparation, explorees } = atelierDe(questions);

  /* Ce qu'il lit, tiré de sa propre projection : si la phrase change là-bas,
     elle change ici, et les adultes ne lisent jamais une version arrangée. */
  const vue = pourquoiVivant(questions, personnes, rdv, new Date());
  const phraseDe = new Map(vue.enRoute.map((q) => [q.id, q.phrase]));

  const fiche = (q: Question): QuestionDeLAtelier => ({
    id: q.id,
    texte: q.texte,
    etat: q.etat,
    preparation: q.preparation,
    arrivee: leJour(aParis(q.deposee_le)),
    ceQuIlLit: phraseDe.get(q.id) ?? "",
  });

  const listeDesDomaines = ordreDomaines.map((id) => domaines[id]);
  const appellations = personnes
    .filter((p) => p.role !== "enfant")
    .map((p) => ({ prenom: p.prenom, mot: p.mot_de_l_enfant }));

  const fiches = (qs: Question[]) => (
    <div className="space-y-4">
      {qs.map((q) => (
        <FicheQuestion
          key={q.id}
          question={fiche(q)}
          ecrire={ecrire}
          domaines={listeDesDomaines}
          appellations={appellations}
        />
      ))}
    </div>
  );

  return (
    <Bureau
      qui={`${moi.prenom} · ${moi.role_affiche}`}
      titre="L’atelier"
      chapeau={
        ecrire
          ? (
              <>
                Ce {que(enfant)} demande, ce que vous préparez, et ce que vous
                regarderez ensemble. Vos gestes deviennent des phrases dans sa
                boîte à pourquoi&nbsp;; votre préparation, il ne la voit jamais.
              </>
            )
          : proche
            ? `Ce ${que(enfant)} demande, ce ${que(proche.prenom)} prépare, et ce qu’ils regarderont ensemble.`
            : `Ce que ${enfant} demande dans sa boîte à pourquoi.`
      }
    >
      {!ecrire && (
        /* Le miroir de ReserveAuxParents : ici ce sont les parents qui
           regardent sans écrire. Pas une porte fermée — une signature. */
        <Carte accent="neutre" className="mt-8 p-5 sm:p-6">
          <p className="text-[1.0625rem] leading-relaxed text-encre-douce">
            {proche ? (
              <>
                Vous lisez l’atelier {de(proche.prenom)}. Vous voyez tout ce{" "}
                {que(enfant)} y dépose, et l’écran lui dit que vous pouvez le lire. Mais
                c’est {proche.prenom} qui prépare et qui écrit ici&nbsp;: c’est ce
                qu’il apporte, et rien dans cet atelier n’évalue {enfant}.
              </>
            ) : (
              <>
                L’atelier est tenu par le proche de la famille, et il n’y en a pas
                pour l’instant. Vous lisez ce que {enfant} dépose&nbsp;; personne
                n’y écrit.
              </>
            )}
          </p>
        </Carte>
      )}

      <Section
        titre="Où ça en est"
        aide="Les compteurs sont de ce côté-ci. Dans sa boîte à pourquoi, il ne voit ni nombre ni date, et sa collection ne suit pas l’ordre d’arrivée."
      >
        <dl className="grid grid-cols-3 gap-6 sm:max-w-xl">
          <Chiffre
            n={aLire.length}
            quoi="à lire"
            teinte={aLire.length > 0 ? "text-sarcelle" : undefined}
          />
          <Chiffre n={enPreparation.length} quoi="en préparation" />
          <Chiffre n={explorees.length} quoi="explorées" />
        </dl>

        {questions.length === 0 && (
          <Carte className="mt-6 p-5">
            <p className="text-[1.0625rem] leading-relaxed text-encre-douce">
              Aucune question pour l’instant. Quand {enfant} en déposera une, elle
              arrivera ici.
            </p>
          </Carte>
        )}
      </Section>

      {aLire.length > 0 && (
        <Section
          titre="À lire"
          aide={
            ecrire
              ? (
                  <>
                    Par ordre d’arrivée. «&nbsp;Je l’ai lue&nbsp;» ne demande
                    rien d’autre, et fait apparaître une phrase chez lui.
                  </>
                )
              : "Par ordre d’arrivée."
          }
        >
          {fiches(aLire)}
        </Section>
      )}

      {enPreparation.length > 0 && (
        <Section
          titre="En préparation"
          aide={
            <>
              «&nbsp;On cherche encore&nbsp;» n’est pas un retard&nbsp;: c’est le
              moment où l’adulte dit qu’il ne sait pas, devant lui.
            </>
          }
        >
          {fiches(enPreparation)}
        </Section>
      )}

      <Section
        titre="Le prochain rendez-vous"
        aide={
          <>
            Une ligne sous son chemin, sans case à cocher&nbsp;: une chose à
            attendre, qui ne lui demande rien.
          </>
        }
      >
        <RendezVous
          rendezVous={rdv ? { quand: rdv.quand, quoi: rdv.quoi } : null}
          ceQuIlLit={vue.rendezVous}
          poseLe={rdv ? leJour(aParis(rdv.modifie_le)) : null}
          ecrire={ecrire}
          qui={proche?.prenom ?? null}
        />
      </Section>

      {explorees.length > 0 && (
        <Section
          titre="Explorées"
          aide={
            <>
              Chacune est une carte de sa collection. Il la relit sans date —
              «&nbsp;un jour de septembre&nbsp;» — et dans un ordre qui ne suit
              pas le temps.
            </>
          }
        >
          <ul className="space-y-3">
            {explorees.map((q) => {
              const d = q.domaine ? domaines[q.domaine] : null;
              const t = d ? (classesTeinte[d.teinte] ?? classesTeinte.bleu) : null;
              return (
                <li key={q.id}>
                  <Carte className="p-5">
                    <div className="flex flex-wrap items-center gap-x-3 gap-y-1">
                      {d && t && (
                        <>
                          <span className={`h-2.5 w-2.5 shrink-0 rounded-full ${t.puce}`} />
                          <span className={`etiquette ${t.texte}`}>{d.libelle}</span>
                        </>
                      )}
                      <span className="text-[0.875rem] text-encre-tenue">
                        explorée {leJour(q.exploree_le ?? aParis(q.deposee_le))}
                      </span>
                    </div>
                    <p className="font-display mt-2 text-[1.125rem] leading-snug tracking-tight">
                      {q.texte}
                    </p>
                    <p className="mt-2 whitespace-pre-line text-[0.9375rem] leading-relaxed text-encre-douce">
                      {q.trace}
                    </p>
                  </Carte>
                </li>
              );
            })}
          </ul>
        </Section>
      )}
    </Bureau>
  );
}
