import Link from "next/link";
import { redirect } from "next/navigation";
import ComposerJournee from "@/components/ComposerJournee";
import NoteDuSoir from "@/components/NoteDuSoir";
import PoserLaTrame from "@/components/PoserLaTrame";
import RattraperLecon from "@/components/RattraperLecon";
import { Bureau, Section, Carte, LienTete } from "@/components/adulte/Bureau";
import LaisserUnMot from "@/components/adulte/LaisserUnMot";
import Ecarts from "@/components/adulte/Ecarts";
import AjouterTrace from "@/components/adulte/AjouterTrace";
import NoterSortie from "@/components/adulte/NoterSortie";
import { personneConnectee, estParent, entreeAdulte } from "@/lib/session";
import {
  aRedistribuer,
  aujourdhui,
  journeeDe,
  leconsPosees,
  ressentiDe,
  seancesDe,
  type ClotureJour,
  type TonJour,
} from "@/lib/journee";
import { classesTeinte, matieres, ressentis, type MatiereId } from "@/lib/data";
import { lignes, ligne } from "@/lib/base";
import { reponsesDe } from "@/lib/reponses";
import { ceQuiVientAujourdhui } from "@/lib/positionnement";
import { avancement } from "@/lib/lecture";
import { lecons, tailleLecon } from "@/lib/programme";
import { trameDuJour, periodeDe, selonLeTon } from "@/lib/trame";
import { joursOuDeplacer } from "@/lib/deplacer";
import { travailDeSeance } from "@/lib/travail";
import { releveDeSeance } from "@/lib/releve";
import { aRattraper } from "@/lib/rattrapage";
import { cloche, ceQuiEstAReprendre, seancesDeLecon } from "@/lib/a-reprendre";
import PosteDuJour, { type AFaire } from "@/components/adulte/PosteDuJour";
import { ficheParCode } from "@/lib/fiches";
import { questionsANoter, rangsDe, resultatsDeJournee } from "@/lib/resultat-fiche";
import { etatDuTestLe, placerLeTest } from "@/lib/test-du-jour";
import RemettreLeTest from "@/components/adulte/RemettreLeTest";
import AuCentre from "@/components/adulte/AuCentre";

/**
 * La journée, côté adulte.
 *
 * « Très complet, mais un peu usine à gaz » : retour des parents le premier
 * jour réel, le 16 septembre 2026. La critique du même soir a compté, sur une
 * journée vide, huit sections, une quarantaine de décisions visibles et quatre
 * cents mots d'explication — la plupart justifiant le produit plutôt que
 * disant quoi faire. Le mode d'emploi ajouté l'après-midi contournait le
 * problème sans le résoudre.
 *
 * La page suit maintenant **le déroulé de la journée** :
 *
 *   0. aujourd'hui seulement, **le poste du jour** (`PosteDuJour`) : où il en
 *      est, la frise de la journée, et ce qui attend un geste de vous ;
 *   1. **Ce matin** — la journée telle qu'il la verra, son ton, et ce qui reste
 *      à replacer ;
 *   2. **Un mot pour lui**, laissé avant qu'il dise comment il se sent ;
 *   3. **Ce soir** — ce qu'il a fait dans ses leçons, son ressenti, la note ;
 *   4. le test du début d'année, en une ligne : le portrait se lit sur
 *      `/positionnement`, à côté des questions ;
 *   5. ce qui ne sert pas tous les jours — ce qu'il a fabriqué, une sortie —
 *      replié.
 *
 * Chaque section dit en une ligne ce qu'il en voit, et rien d'autre. Le
 * « pourquoi » des règles est dans le README, pas sous les yeux d'un parent
 * pressé. Les compteurs sont permis de ce côté-ci, et ne traversent jamais.
 */

export const dynamic = "force-dynamic";

const MOIS = ["janvier","février","mars","avril","mai","juin","juillet","août","septembre","octobre","novembre","décembre"];
const JOURS = ["dimanche","lundi","mardi","mercredi","jeudi","vendredi","samedi"];

/** « jeudi 17 septembre », « jeudi 1er octobre » : le premier est ordinal. */
function enFrancais(iso: string) {
  const d = new Date(`${iso}T12:00:00`);
  const n = d.getDate();
  return `${JOURS[d.getDay()]} ${n === 1 ? "1er" : n} ${MOIS[d.getMonth()]}`;
}

function decale(iso: string, jours: number) {
  const d = new Date(`${iso}T12:00:00`);
  d.setDate(d.getDate() + jours);
  return d.toISOString().slice(0, 10);
}

/** `AAAA-MM-JJ`, et une date qui existe vraiment. */
function dateValide(s: string) {
  if (!/^\d{4}-\d{2}-\d{2}$/.test(s)) return false;
  const d = new Date(`${s}T12:00:00`);
  return !Number.isNaN(d.getTime()) && d.toISOString().slice(0, 10) === s;
}

/** Une durée en minutes, écrite comme on l'écrit en français. */
function duree(minutes: number) {
  const h = Math.floor(minutes / 60);
  const m = minutes % 60;
  if (h === 0) return `${m} min`;
  return m === 0 ? `${h} h` : `${h} h ${String(m).padStart(2, "0")}`;
}

const pluriel = (n: number, mot: string) => `${n} ${mot}${n > 1 ? "s" : ""}`;

/* « Bonjour Anatole », « Bonsoir Bérénice » : l'heure de Paris, pas
   celle du serveur. On ouvre cette page le matin pour préparer, le soir pour
   lire — l'accueil suit. */
function salut(prenom: string) {
  const heure = Number(
    new Intl.DateTimeFormat("fr-FR", { hour: "numeric", hour12: false, timeZone: "Europe/Paris" }).format(
      new Date(),
    ),
  );
  return `${heure >= 18 || heure < 4 ? "Bonsoir" : "Bonjour"} ${prenom}`;
}

export default async function Pilotage({
  searchParams,
}: {
  searchParams: Promise<{ jour?: string }>;
}) {
  const moi = await personneConnectee();
  if (!moi) redirect(entreeAdulte("/pilotage"));
  if (moi.role === "enfant") redirect("/journee");

  const demande = (await searchParams).jour;
  /* On prépare le dimanche soir pour la semaine : la date se choisit. Une
     date qui a la forme mais pas le sens — un 31 février — retombe sur
     aujourd'hui plutôt que de faire lever Postgres. */
  const date = demande && dateValide(demande) ? demande : aujourdhui();
  const jour = await journeeDe(moi.famille_id, date);

  /* Ses réponses au test, et la partie du jour, qui se pose d'elle-même dans
     la journée affichée si elle l'appelle — c'est ce qui permet de la voir
     et de la déplacer dès le dimanche soir. */
  const enfant = await lignes<{ id: string }>(
    `select id from personne where famille_id = $1 and role = 'enfant' limit 1`,
    [moi.famille_id],
  );
  const reponses = enfant[0] ? await reponsesDe(enfant[0].id) : [];
  if (enfant[0]) await placerLeTest(jour, reponses);
  const etatDuTest = etatDuTestLe(jour.jour, reponses, aujourdhui());
  const testRetire =
    jour.sans_test && jour.ton === "normale" && jour.jour >= aujourdhui() && etatDuTest === "question";

  const seancesBrutes = await seancesDe(jour.id);
  /* Les séances menées avec une fiche portent de quoi noter leur résultat —
     demandé par les parents le premier jour réel. */
  const resultats = await resultatsDeJournee(jour.id);
  const seances = seancesBrutes.map((s) => {
    const fiche = !s.lecon && s.fiche ? ficheParCode.get(s.fiche) : undefined;
    if (!fiche) return s;
    const questions = questionsANoter(fiche);
    const resultat = resultats.get(s.id) ?? null;
    return {
      ...s,
      aNoter: {
        questions,
        resultat,
        rangsNotes: resultat ? rangsDe(questions, resultat.aRevoir) : [],
      },
    };
  });
  const ressenti = await ressentiDe(jour.id);
  const notees = seances.flatMap((s) =>
    "aNoter" in s && s.aNoter?.resultat ? [{ id: s.id, titre: s.titre, resultat: s.aNoter.resultat }] : [],
  );
  const aReplacer = aRedistribuer(seances, jour.cloture);

  /* ---- Le poste du jour : aujourd'hui seulement ----
     Où il en est, et ce qui attend un geste de l'adulte qui regarde. Rien
     sur sa réussite : un résultat à noter, un mot à laisser, ce qu'il a dit,
     la cloche. */
  const cEstAujourdhui = jour.jour === aujourdhui();
  const idIci =
    cEstAujourdhui && !jour.cloture ? seances.find((s) => s.etat === "a-venir")?.id : undefined;
  const teinteMatiere = (m: string) => matieres[m as MatiereId]?.teinte ?? "encre-douce";
  const aFaire: AFaire[] = [];
  if (cEstAujourdhui) {
    for (const s of seances) {
      if ("aNoter" in s && s.aNoter && s.etat === "faite" && !s.aNoter.resultat) {
        aFaire.push({
          cle: `noter-${s.id}`,
          texte: `Noter le résultat : ${s.titre}`,
          detail: "La séance est faite",
          href: `#seance-${s.id}`,
          signe: "noter",
          teinte: teinteMatiere(s.matiere),
        });
      }
    }
    if (estParent(moi) && ressenti) {
      aFaire.push({
        cle: "ressenti",
        texte: "Il a dit comment il se sent",
        detail: ressenti.choix ? ressentis[ressenti.choix].mot : undefined,
        href: "#ce-soir",
        signe: "ressenti",
        teinte: ressenti.choix ? ressentis[ressenti.choix].teinte : "encre-douce",
      });
    }
    /* Le mot n'est lu qu'avant son ressenti : après, il ne lui parviendrait
       plus aujourd'hui. */
    const motDuJour = await ligne<{ oui: boolean }>(
      `select exists (select 1 from mot where journee_id = $1) as oui`,
      [jour.id],
    );
    if (!ressenti && !jour.cloture && !motDuJour?.oui) {
      aFaire.push({
        cle: "mot",
        texte: "Laisser un mot pour ce soir",
        detail: "Il le lit après avoir dit comment il se sent",
        href: "#un-mot",
        signe: "mot",
      });
    }
    if (estParent(moi) && (jour.cloture || ressenti) && !jour.note.trim()) {
      aFaire.push({
        cle: "note",
        texte: "Écrire ce que vous avez observé",
        detail: "Il ne le lira pas",
        href: "#ce-soir",
        signe: "note",
      });
    }
    const sonnerie = await cloche(moi.famille_id, moi.id, aujourdhui()).catch(() => null);
    if (sonnerie && sonnerie.nouveaux > 0) {
      aFaire.push({
        cle: "cloche",
        texte: `${pluriel(sonnerie.nouveaux, "leçon")} à reprendre`,
        detail: "Faites seul, elles méritent d’être retravaillées",
        href: "/a-reprendre",
        signe: "cloche",
      });
    }
  }

  /* ---- La semaine, en chiffres, repliée ----
     Des volumes — ce que l'inspection demande —, jamais une réussite : pas
     de pourcentage, pas de courbe, pas de jour comparé à un autre. */
  const decalageLundi = (new Date(`${jour.jour}T12:00:00`).getDay() + 6) % 7;
  const lundi = decale(jour.jour, -decalageLundi);
  const dimanche = decale(lundi, 6);
  const semaine = await ligne<{ minutes: number; faites: number; seul: number; menees: number }>(
    `select coalesce(sum(s.minutes) filter (where s.etat = 'faite'), 0)::int as minutes,
            count(*) filter (where s.etat = 'faite')::int as faites,
            count(*) filter (where s.etat = 'faite' and s.lecon <> '')::int as seul,
            count(*) filter (where s.etat = 'faite' and s.lecon = '' and not s.test)::int as menees
       from seance s join journee j on j.id = s.journee_id
      where j.famille_id = $1 and j.jour between $2::date and $3::date`,
    [moi.famille_id, lundi, dimanche],
  );
  const aReprendreSemaine = ceQuiEstAReprendre(await seancesDeLecon(moi.famille_id), aujourdhui()).filter(
    (x) => x.sonne && x.jour >= lundi && x.jour <= dimanche,
  ).length;
  const faites = seances.filter((s) => s.etat === "faite").length;
  const minutesPosees = seances.reduce((t, s) => t + s.minutes, 0);

  /* Qui a écrit la note du soir, et qui a changé le ton : deux maisons
     partagent cette journée. */
  const auteurs = await ligne<{ note_de: string | null; ton_par: string | null; ton_le: string | null }>(
    `select pn.mot_de_l_enfant as note_de, pt.mot_de_l_enfant as ton_par,
            /* La date avec l'heure : « à 9 h 05 » ne disait pas quel jour. */
            to_char(j.ton_le at time zone 'Europe/Paris', '"le "FMDD/MM" à "FMHH24" h "MI') as ton_le
       from journee j
       left join personne pn on pn.id = j.note_de
       left join personne pt on pt.id = j.ton_par
      where j.id = $1`,
    [jour.id],
  );

  /* Ce que la trame prévoit pour ce jour-là. Proposé, jamais écrit tout seul :
     un affichage qui crée des données se double au premier rechargement. */
  const tramee = trameDuJour(jour.jour);

  /* La bibliothèque : ce qui est disponible, et ce qui a déjà été donné. */
  const posees = await leconsPosees(moi.famille_id);
  const premierJour = new Map<string, string>();
  for (const p of posees) if (!premierJour.has(p.lecon)) premierJour.set(p.lecon, p.jour);
  const programme = lecons.map((l) => ({
    code: l.code,
    matiere: l.matiere as string,
    periode: l.periode as number,
    titre: l.titre,
    minutes: l.minutes,
    exercices: tailleLecon(l),
    dejaLe: premierJour.get(l.code) ? enFrancais(premierJour.get(l.code)!) : null,
    reserveeAuxParents: l.reserveeAuxParents === true,
  }));

  /* Ce qui a été prévu et jamais donné. Le retard n'existe que de ce côté. */
  const rattrapage = await aRattraper(moi.famille_id, aujourdhui());

  /* Ce qu'il a inscrit dans les séances du jour qui portent une leçon. */
  const releves = (
    await Promise.all(
      seances
        .filter((x) => x.lecon)
        .map(async (x) => ({
          seance: x,
          releve: releveDeSeance(x.lecon, await travailDeSeance(x.id), x.titre),
        })),
    )
  ).filter((x) => x.releve !== null && x.releve.faits > 0);

  const ou = avancement(reponses);
  const testDuJour = ceQuiVientAujourdhui(reponses, aujourdhui());

  /* La ligne sous « Ce matin » : ce qui est écrit, vraiment — une seule durée
     sur la page, celle des séances en base. La trame n'est citée que tant
     que la journée n'est pas écrite. */
  const partieAVenir =
    jour.ton === "normale" && !jour.sans_test && jour.jour >= aujourdhui() && etatDuTest === "question";
  /* Ce que la trame proposerait pour ce jour, selon son ton : le socle un jour
     allégé, rien un jour de repos. */
  const proposee = selonLeTon(tramee, jour.ton);
  const aideDuMatin =
    seances.length > 0
      ? `${pluriel(seances.length, "séance")}, ${duree(minutesPosees)}, dans l’ordre où il les verra${
          faites > 0 ? ` — ${pluriel(faites, "faite")}` : ""
        }${jour.cloture === "arretee" ? ", journée arrêtée" : jour.cloture === "terminee" ? ", journée finie" : ""}. Il ne voit ni le ton, ni ce qui est retiré.`
      : jour.ton === "repos"
        ? "Jour de repos : il n’a rien à faire, et son écran le lui dit."
        : proposee.creneaux.length > 0
          ? `Pas encore écrite. Le plan de l’année prévoit ${pluriel(proposee.creneaux.length, "séance")}, ${duree(proposee.minutes)}${
              jour.ton === "allegee" ? " pour une journée allégée" : ""
            }${partieAVenir ? ", plus la partie du test" : ""}.`
          : "Rien de prévu ce jour-là. Ce que vous ajoutez, il le verra.";

  /* La durée de chaque jour de la bande : celle des séances écrites quand la
     journée l'est, la trame sinon. La même page disait « 3 h » dans la bande
     et « 3 h 20 » sous « Ce matin » (seconde critique du 16 septembre). */
  /* Six semaines devant, et pas seulement la bande : ce sont aussi les jours
     où une séance peut être déplacée. */
  const bande = new Map(
    (
      await lignes<{
        jour: string;
        ton: TonJour;
        cloture: ClotureJour | null;
        n: number;
        minutes: number;
      }>(
        `select j.jour::text as jour, j.ton, j.cloture, count(s.id)::int as n,
                coalesce(sum(s.minutes), 0)::int as minutes
           from journee j left join seance s on s.journee_id = j.id
          where j.famille_id = $1 and j.jour between $2::date and $3::date
          group by j.id`,
        [moi.famille_id, decale(aujourdhui(), -7), decale(aujourdhui(), 42)],
      )
    ).map((r) => [r.jour, r]),
  );

  /* Ce qu'un jour dure : ses séances écrites quand il y en a, la trame sinon. */
  const dureeDu = (d: string) => {
    const enBase = bande.get(d);
    return enBase && enBase.n > 0
      ? duree(enBase.minutes)
      : duree(selonLeTon(trameDuJour(d), enBase?.ton ?? "normale").minutes);
  };
  const libelleDu = (d: string) =>
    d === aujourdhui()
      ? "aujourd’hui"
      : d === decale(aujourdhui(), 1)
        ? "demain"
        : enFrancais(d).split(" ").slice(0, 2).join(" ");

  /* La bande : le dernier jour de classe passé, puis la semaine qui vient.
     Elle commençait à « hier » — le lundi, un dimanche vide, et pas moyen de
     relire le vendredi — et gardait les week-ends vides, sur trois lignes au
     téléphone (critique du 21 septembre 2026). Un jour de vacances reste :
     il se lit « vacances », ce n'est pas un trou. */
  const aQuelqueChose = (d: string) => {
    const enBase = bande.get(d);
    const t = trameDuJour(d);
    return (enBase !== undefined && enBase.n > 0) || t.creneaux.length > 0 || Boolean(t.pourquoi);
  };
  const veille = [1, 2, 3, 4, 5, 6, 7]
    .map((n) => decale(aujourdhui(), -n))
    .find(aQuelqueChose);
  const joursDeLaBande = [
    ...(veille ? [veille] : []),
    ...[0, 1, 2, 3, 4, 5, 6]
      .map((n) => decale(aujourdhui(), n))
      .filter((d) => d === aujourdhui() || d === jour.jour || aQuelqueChose(d)),
  ];

  /* Où une séance de ce jour peut partir. */
  const joursPossibles = joursOuDeplacer(
    jour.jour,
    aujourdhui(),
    new Map([...bande.values()].map((b) => [b.jour, { ton: b.ton, cloture: b.cloture }])),
  ).map((d) => ({ jour: d, libelle: libelleDu(d), duree: dureeDu(d) }));

  return (
    <Bureau
      qui={salut(moi.prenom)}
      titre={enFrancais(jour.jour)}
      chapeau={
        cEstAujourdhui ? undefined : "Le matin, vérifiez sa journée. Le soir, lisez ce qu’il a fait."
      }
      actions={
        jour.jour !== aujourdhui() ? (
          <LienTete href="/pilotage">revenir à aujourd’hui</LienTete>
        ) : undefined
      }
    >
      {/* Le choix du jour. Une bande de dates avec leur charge, pas des
          onglets : on prépare la semaine d'un coup, et voir qu'un mercredi est
          plus court évite de se demander s'il manque quelque chose. */}
      {/* Au téléphone, une seule ligne qui défile de côté, le jour affiché
          ramené au centre ; sur un écran large, la bande entière. */}
      <nav
        className="-mx-5 mt-6 flex snap-x gap-2 overflow-x-auto px-5 [scrollbar-width:none] sm:mx-0 sm:flex-wrap sm:overflow-visible sm:px-0"
        aria-label="Choisir le jour"
      >
        <AuCentre />
        {joursDeLaBande.map((d) => {
          const ici = d === jour.jour;
          const t = trameDuJour(d);
          const enBase = bande.get(d);
          return (
            <Link
              key={d}
              href={`/pilotage?jour=${d}`}
              aria-current={ici ? "page" : undefined}
              className={`min-h-11 shrink-0 snap-start rounded-feuille border px-3.5 py-2 text-center transition-colors ${
                ici
                  ? "border-encre bg-encre text-papier"
                  : "border-bord-fort bg-carte text-encre-douce hover:border-encre hover:text-encre"
              }`}
            >
              <span className="block text-[0.875rem] font-bold leading-tight">
                {libelleDu(d)}
              </span>
              <span
                className={`chiffres block text-[0.75rem] leading-tight ${
                  ici ? "text-papier/70" : "text-encre-tenue"
                }`}
              >
                {enBase?.ton === "repos"
                  ? "repos"
                  : enBase && enBase.n > 0
                    ? duree(enBase.minutes)
                    : t.creneaux.length > 0
                      ? duree(selonLeTon(t, enBase?.ton ?? "normale").minutes)
                      : t.pourquoi
                        ? "vacances"
                        : "—"}
              </span>
            </Link>
          );
        })}
      </nav>

      {cEstAujourdhui && (
        <PosteDuJour
          seances={seances}
          idIci={idIci}
          cloture={jour.cloture}
          ton={jour.ton}
          aFaire={aFaire}
        />
      )}

      {/* Au téléphone, « Ce soir » était à trois écrans sous les cartes du
          matin (critique du 21 septembre 2026). */}
      <nav
        aria-label="Aller à"
        className="mt-3 flex items-center gap-1 text-[0.9375rem] text-encre-tenue sm:hidden"
      >
        {[
          ["ce-matin", "Ce matin"],
          ["un-mot", "Un mot"],
          ["ce-soir", "Ce soir"],
        ].map(([id, nom], k) => (
          <span key={id} className="flex items-center gap-1">
            {k > 0 && <span aria-hidden>·</span>}
            <a
              href={`#${id}`}
              className="inline-flex min-h-11 items-center px-2 text-encre-douce underline decoration-bord-fort underline-offset-4 first:pl-0 hover:text-encre"
            >
              {nom}
            </a>
          </span>
        ))}
      </nav>

      {/* ---------------------------------------------------------------- */}
      {/* 1. Ce matin                                                       */}
      {/* ---------------------------------------------------------------- */}

      <Section
        id="ce-matin"
        titre="Ce matin : sa journée"
        aide={aideDuMatin}
        actions={
          seances.length > 0 ? (
            <LienTete href={`/preparer?jour=${jour.jour}`}>
              Le matériel du jour, à imprimer
            </LienTete>
          ) : undefined
        }
      >
        {seances.length === 0 && proposee.creneaux.length > 0 && !jour.cloture && (
          <Carte accent="neutre" className="mb-6 p-5 sm:p-6">
            <ul className="space-y-1">
              {proposee.creneaux.map((c, i) => (
                <li key={i} className="text-[1.0625rem] text-encre-douce">
                  <span className="chiffres mr-2 text-encre-tenue">{c.minutes}′</span>
                  {c.lecon ? (
                    <Link
                      href={`/manuel/${c.lecon}`}
                      className="text-encre underline decoration-bord-fort underline-offset-4 hover:decoration-encre"
                    >
                      {c.titre}
                    </Link>
                  ) : (
                    c.titre
                  )}
                  {c.lecon && (
                    <span className="ml-2 text-[0.875rem] text-encre-tenue">
                      il la fait seul, à l’écran
                    </span>
                  )}
                  {!c.lecon && (
                    <span className="ml-2 text-[0.875rem] font-bold text-encre">
                      vous la menez
                    </span>
                  )}
                  {!c.lecon && (
                    <span className="mt-0.5 block pl-7 text-[0.9375rem] leading-relaxed text-encre-tenue">
                      {c.consigne}
                    </span>
                  )}
                </li>
              ))}
            </ul>
            <div className="mt-5 flex flex-wrap items-baseline gap-x-5 gap-y-3">
              <PoserLaTrame portee="jour" jour={jour.jour} large />
              <PoserLaTrame portee="semaine" jour={jour.jour} />
              <PoserLaTrame portee="periode" jour={jour.jour} />
            </div>
          </Carte>
        )}

        <ComposerJournee
          jour={jour.jour}
          cloture={jour.cloture}
          joursPossibles={joursPossibles}
          cEstAujourdhui={jour.jour === aujourdhui()}
          tonActuel={jour.ton}
          tonPar={auteurs?.ton_par ?? null}
          tonLe={auteurs?.ton_le ?? null}
          seances={seances}
          programme={programme}
          periodeDuJour={periodeDe(jour.jour)}
        />
        {testRetire && <RemettreLeTest jour={jour.jour} />}

        {aReplacer.length > 0 && (
          /* Ce qui glisse s'affiche en ocre, jamais en rouge : c'est une
             information de pilotage, pas une faute. */
          <Carte accent="ocre" className="mt-6 p-5">
            <p className="text-[1.0625rem] leading-relaxed text-encre">
              À replacer un autre jour : {aReplacer.map((s) => s.titre).join(", ")}.
            </p>
          </Carte>
        )}

        {rattrapage.length > 0 && (
          <details className="mt-6">
            <summary className="cursor-pointer text-[0.9375rem] text-encre-douce underline decoration-bord-fort underline-offset-4 hover:text-encre">
              {pluriel(rattrapage.length, "leçon")} prévue{rattrapage.length > 1 ? "s" : ""} et pas encore faite
              {rattrapage.length > 1 ? "s" : ""}
            </summary>
            <ul className="mt-3 space-y-2">
              {rattrapage.slice(0, 12).map((r) => (
                <li key={r.lecon.code}>
                  <Carte className="flex flex-wrap items-baseline justify-between gap-x-5 gap-y-2 p-4">
                    <span className="text-[1.0625rem]">
                      {r.lecon.titre}
                      <span className="chiffres ml-3 text-[0.875rem] text-encre-tenue">
                        prévue le {enFrancais(r.prevueLe)}
                      </span>
                      {r.reviendra > 0 && (
                        <span className="ml-3 text-[0.875rem] text-encre-tenue">
                          · elle revient plus tard
                        </span>
                      )}
                    </span>
                    {!jour.cloture && <RattraperLecon code={r.lecon.code} jour={jour.jour} />}
                  </Carte>
                </li>
              ))}
            </ul>
            {jour.cloture && (
              <p className="mt-3 text-[0.9375rem] leading-relaxed text-encre-tenue">
                Cette journée est refermée : choisissez un autre jour dans la bande
                pour y placer une leçon.
              </p>
            )}
            {rattrapage.length > 12 && (
              <p className="mt-3 text-[0.9375rem] leading-relaxed text-encre-tenue">
                Et {rattrapage.length - 12} autres : si la liste s’allonge, c’est
                le plan qu’il faut alléger.
              </p>
            )}
          </details>
        )}
      </Section>

      {/* ---------------------------------------------------------------- */}
      {/* 2. Un mot pour lui — avant qu'il dise comment il se sent          */}
      {/* ---------------------------------------------------------------- */}

      <LaisserUnMot journeeId={jour.id} jour={jour.jour} moi={moi} />

      {/* ---------------------------------------------------------------- */}
      {/* 3. Ce soir                                                         */}
      {/* ---------------------------------------------------------------- */}

      <Section
        id="ce-soir"
        titre="Ce soir : ce qu’il a fait"
        aide="Il ne voit rien de cette partie."
        actions={<LienTete href="/a-reprendre">Tout ce qui est à reprendre</LienTete>}
      >
        {releves.length === 0 ? (
          <p className="text-[1.0625rem] text-encre-tenue">
            Rien d’inscrit dans ses leçons pour l’instant.
          </p>
        ) : (
          <div className="space-y-4">
            {/* La carte d'une leçon porte la couleur de sa matière, comme sur
                son chemin — plus une bande verte quand tout est passé et ocre
                sinon : la couleur ne dit pas la réussite. */}
            {releves.map(({ seance, releve }) => {
              const t = classesTeinte[matieres[releve!.lecon.matiere as MatiereId]?.teinte ?? "encre-douce"];
              return (
              <Carte key={seance.id} className="p-5">
                <p className={`etiquette flex items-center gap-2 ${t.texte}`}>
                  <span aria-hidden className={`size-2.5 rounded-full ${t.puce}`} />
                  {matieres[releve!.lecon.matiere as MatiereId]?.nom ?? ""}
                </p>
                <div className="mt-1.5 flex flex-wrap items-baseline gap-x-3 gap-y-1">
                  <h3 className="font-display text-[1.125rem] leading-snug tracking-tight">
                    {releve!.lecon.titre}
                  </h3>
                  <span className="chiffres text-[1rem] font-bold text-encre-douce">
                    {releve!.justes} / {releve!.faits}
                  </span>
                  {releve!.faits < releve!.total && (
                    <span className="text-[0.875rem] text-encre-tenue">
                      · {pluriel(releve!.faits, "exercice")} sur {releve!.total}
                    </span>
                  )}
                </div>

                {releve!.ecarts.length === 0 ? (
                  <p className="mt-3 text-[1.0625rem] font-bold text-fini">Tout est passé.</p>
                ) : (
                  /* Le détail, parce que « six sur huit » ne dit pas quoi
                     reprendre demain. C'est la seule chose actionnable. */
                  <Ecarts ecarts={releve!.ecarts} lecon={releve!.lecon.code} />
                )}
              </Carte>
              );
            })}
          </div>
        )}

        {/* Les séances menées avec une fiche, notées : le soir se lit ici en
            entier. Leur résultat n'apparaissait que sous « Ce matin », au
            milieu des flèches (seconde critique du 16 septembre). */}
        {notees.length > 0 && (
          <ul className="mt-6 space-y-2">
            {notees.map(({ id, titre, resultat }) => (
              <li key={id}>
                <Carte className="p-4">
                  <p className="text-[1.0625rem] leading-relaxed text-encre">
                    <span className="font-bold">{titre}</span>
                    <span className="text-encre-douce">
                      {resultat.sur === null
                        ? ""
                        : resultat.aRevoir.length === 0
                          ? " — tout est passé"
                          : ` — à revoir : ${resultat.aRevoir.join(", ")}`}
                    </span>
                  </p>
                  {resultat.note && (
                    <p className="mt-1 text-[0.9375rem] leading-relaxed text-encre-tenue">
                      « {resultat.note} »
                    </p>
                  )}
                </Carte>
              </li>
            ))}
          </ul>
        )}

        {/* Ce qu'il a dit de sa journée, sur son papier ; votre note du soir,
            sur le blanc. On sait qui parle sans lire la signature. */}
        {estParent(moi) && (
          <div className="mt-6 space-y-4">
            {ressenti ? (
              <figure className="son-papier rounded-feuille border border-reglure px-5 pb-3.5 pt-3.5">
                <figcaption className="text-[0.875rem] leading-[1.75rem] text-encre-tenue">
                  Ce qu’il a dit de sa journée
                </figcaption>
                <p
                  className={`font-display text-[1.5rem] leading-[1.75rem] tracking-tight ${
                    ressenti.choix ? classesTeinte[ressentis[ressenti.choix].teinte].texte : "text-encre-douce"
                  }`}
                >
                  {ressenti.choix ? ressentis[ressenti.choix].mot : "Il n’a rien choisi"}
                </p>
                {ressenti.mot && (
                  <blockquote className="text-[1.0625rem] leading-[1.75rem] text-encre">
                    «&nbsp;{ressenti.mot}&nbsp;»
                  </blockquote>
                )}
              </figure>
            ) : (
              <p className="text-[1.0625rem] text-encre-tenue">
                Il n’a pas encore dit comment il se sent.
              </p>
            )}

            <Carte className="p-5">
              <NoteDuSoir note={jour.note} jour={jour.jour} de={auteurs?.note_de ?? null} />
            </Carte>
          </div>
        )}
      </Section>

      {/* ---------------------------------------------------------------- */}
      {/* 4. Le test, en une ligne                                          */}
      {/* ---------------------------------------------------------------- */}

      <Section
        titre="Le test du début d’année"
        aide="Il ne sait jamais s’il a juste."
        actions={<LienTete href="/positionnement">Ce qu’il sait en arrivant</LienTete>}
      >
        <p className="text-[1.0625rem] text-encre-douce">
          {ou.repondues === 0
            ? "Pas encore commencé. La partie du jour se pose d’elle-même en tête de sa journée."
            : ou.repondues === ou.total
              ? "Terminé."
              : `${ou.repondues} réponses sur ${ou.total}${
                  testDuJour.etat === "partie-finie"
                    ? ` — la partie « ${testDuJour.partie.titre} » est finie aujourd’hui, la suivante viendra un autre jour`
                    : ""
                }.`}
        </p>
      </Section>

      {/* ---------------------------------------------------------------- */}
      {/* 5. Ce qui ne sert pas tous les jours                              */}
      {/* ---------------------------------------------------------------- */}

      {/* La semaine, en chiffres — repliée : on vient la chercher, elle ne
          s'impose pas. Des lignes, comme un relevé, pas des chiffres géants. */}
      <details className="group mt-12 overflow-hidden rounded-[20px] border border-bord bg-carte">
        <summary className="flex min-h-14 cursor-pointer list-none items-center justify-between gap-3 px-4 text-[1rem] text-encre sm:px-6 [&::-webkit-details-marker]:hidden">
          <span>
            <span className="font-display text-[1.1875rem] tracking-tight">Cette semaine, en chiffres</span>
            <span className="block text-[0.875rem] text-encre-tenue">
              du {enFrancais(lundi).split(" ").slice(1).join(" ")} au {enFrancais(dimanche).split(" ").slice(1).join(" ")}
            </span>
          </span>
          <span aria-hidden className="inline-block text-[1.125rem] text-encre-tenue transition-transform group-open:rotate-90">
            ›
          </span>
        </summary>
        <dl className="divide-y divide-bord border-t border-bord">
          {[
            ["Instruction donnée", duree(semaine?.minutes ?? 0), "durées prévues des séances faites"],
            ["Séances faites", String(semaine?.faites ?? 0), null],
            ["… menées par vous", String(semaine?.menees ?? 0), "à la fiche ou écrites à la main"],
            ["… leçons seul, à l’écran", String(semaine?.seul ?? 0), null],
            ["Leçons à reprendre", String(aReprendreSemaine), "dès deux exercices pas passés"],
          ].map(([quoi, combien, precision]) => (
            <div key={quoi} className="flex min-h-12 items-center justify-between gap-4 px-4 py-2 sm:px-6">
              <dt className="text-[0.9375rem] text-encre-douce">
                {quoi}
                {precision && <span className="block text-[0.8125rem] text-encre-tenue">{precision}</span>}
              </dt>
              <dd className="chiffres text-[1.0625rem] font-bold text-encre">{combien}</dd>
            </div>
          ))}
        </dl>
        <p className="border-t border-bord px-4 py-3 text-[0.875rem] leading-relaxed text-encre-tenue sm:px-6">
          Des volumes, pour vous et pour l’inspection. Rien ici ne dit s’il a réussi.
        </p>
      </details>

      <details className="group mt-4 rounded-[20px] border border-bord bg-carte">
        <summary className="flex min-h-14 cursor-pointer list-none items-center justify-between gap-3 px-4 sm:px-6 [&::-webkit-details-marker]:hidden">
          <span>
            <span className="font-display text-[1.1875rem] tracking-tight">Noter autre chose</span>
            <span className="block text-[0.875rem] text-encre-tenue">ce qu’il a fabriqué, une sortie</span>
          </span>
          <span aria-hidden className="inline-block text-[1.125rem] text-encre-tenue transition-transform group-open:rotate-90">
            ›
          </span>
        </summary>
        <div className="border-t border-bord px-4 pb-5 sm:px-6">
          <AjouterTrace moi={moi} />
          <NoterSortie jour={jour.jour} moi={moi} />
        </div>
      </details>
    </Bureau>
  );
}
