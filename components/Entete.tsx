import Link from "next/link";
import SeDeconnecter from "@/components/SeDeconnecter";
import ModeDEmploi from "@/components/adulte/ModeDEmploi";
import Veilleur from "@/components/adulte/Veilleur";
import Cloche from "@/components/adulte/Cloche";
import MenuTelephone from "@/components/adulte/MenuTelephone";
import { Toaster } from "@/components/ui/sonner";
import { personneConnectee, estEnfant, estParent } from "@/lib/session";
import { ligne } from "@/lib/base";
import { aujourdhui } from "@/lib/journee";
import { aOuvrirDEmblee, contenuDuModeDEmploi, ecransDuModeDEmploi } from "@/lib/mode-emploi";
import { cloche } from "@/lib/a-reprendre";

/**
 * L'en-tête réel, à la place de la barre de démonstration.
 *
 * Plus de sélecteur « Vous êtes » : l'identité vient de la session, pas d'une
 * liste déroulante. Et il ne montre **que ce qui fonctionne vraiment**, et
 * seulement à qui peut l'ouvrir : un proche ne voit pas les portes des écrans
 * réservés aux parents. Mieux vaut une porte de moins qu'une porte qui mène à
 * un refus.
 *
 * Côté adulte, deux groupes, comme dans le POC, parce que ce sont deux gestes
 * différents : **piloter** l'année, et **rendre compte** à ceux qui le
 * demandent.
 *
 * Côté adulte encore, le mode d'emploi (`components/adulte/ModeDEmploi.tsx`) :
 * « très complet, mais un peu usine à gaz », ont dit les parents. Il s'ouvre
 * de lui-même tant qu'on n'a pas coché « J'ai tout compris ».
 *
 * Sur les écrans de l'enfant il se fait minuscule : la journée doit tenir
 * sans défilement, et un bandeau n'a pas à lui manger son écran.
 *
 * Au téléphone, côté adulte, il tient sur une ligne : La journée, la cloche
 * et un « Menu » (`components/adulte/MenuTelephone.tsx`). Un parent fait tout
 * depuis le sien, et les dix portes y prenaient quatre lignes. Ce qui suit
 * est le bandeau de l'ordinateur, caché sous `sm`.
 */

const lien =
  "rounded-full px-3 py-1 text-[0.8125rem] text-papier/80 transition-colors hover:bg-papier/10 hover:text-papier";

/* Ce qui ne s'affiche que sur un écran assez large ; au téléphone, c'est dans
   le menu. */
const surOrdinateur = "hidden sm:flex";

export default async function Entete() {
  const moi = await personneConnectee();
  if (!moi) return null;

  const enfant = estEnfant(moi);
  const parent = estParent(moi);

  /* Le mode d'emploi des adultes : ouvert d'office tant qu'on n'a pas coché
     « J'ai tout compris », une fois par jour au plus. L’enfant n'en a pas. */
  const modeEmploi = enfant
    ? null
    : await ligne<{ compris: boolean; ferme_le: string | null; enfant: string | null }>(
        `select p.mode_emploi_compris_le is not null as compris,
                p.mode_emploi_ferme_le::text as ferme_le,
                (select e.prenom from personne e
                  where e.famille_id = p.famille_id and e.role = 'enfant'
                  limit 1) as enfant
           from personne p where p.id = $1`,
        [moi.id],
      );
  /* Le prénom de l'enfant vient de la base : il n'est écrit dans aucun
     fichier envoyé au navigateur. */
  const prenomEnfant = modeEmploi?.enfant ?? "votre enfant";

  /* La cloche : des leçons faites seul qui méritent d'être retravaillées, et
     que cette personne n'a pas encore vues. Deux nombres, rien d'autre ne
     part vers le navigateur. Une panne de la cloche ne doit pas emporter le
     bandeau, et avec lui toutes les pages d'adulte : elle se tait. */
  const aReprendre = enfant
    ? null
    : await cloche(moi.famille_id, moi.id, aujourdhui()).catch(() => null);

  return (
    <header
      className={
        enfant
          ? "sans-impression border-b border-reglure/60 bg-papier-chaud/60"
          : "sans-impression relative bg-encre text-papier"
      }
    >
      <div
        /* Chez l'enfant, la ligne d'avant, au caractère près : rien de ce qui
           a changé côté adulte ne doit se voir chez lui. */
        className={
          enfant
            ? "mx-auto flex max-w-5xl flex-wrap items-center gap-x-4 gap-y-1 px-4 py-1.5 sm:px-6"
            : "mx-auto flex max-w-5xl flex-wrap items-center gap-x-1 gap-y-1 px-4 py-1.5 sm:gap-x-4 sm:px-6"
        }
      >
        {enfant ? (
          <>
            <Link
              href="/journee"
              className="etiquette text-encre-tenue transition-colors hover:text-encre"
            >
              Mon cahier
            </Link>
            <span className="ml-auto flex items-center gap-2">
              <span className="text-[0.8125rem] text-encre-tenue">{moi.prenom}</span>
              <SeDeconnecter masquerSur={["/questions"]} />
            </span>
          </>
        ) : (
          <>
            <Veilleur />
            {/* Les notifications des gestes d'adulte : « Séance déplacée à
                jeudi — Annuler ». Jamais sur les écrans de l’enfant. */}
            <Toaster />
            <MenuTelephone
              portes={ecransDuModeDEmploi(parent ? "parent" : "proche").map((e) => ({
                chemin: e.chemin,
                nom: e.nom,
                ...(e.ordinateur ? { ordinateur: true as const } : {}),
              }))}
              qui={`${moi.prenom} · ${moi.role_affiche}`}
            />
            <span className="etiquette hidden text-papier/60 sm:inline">Le cahier</span>
            <nav aria-label="Piloter" className={`${surOrdinateur} flex-wrap items-center`}>
              <Link href="/pilotage" className={lien}>La journée</Link>
              <Link href="/annee" className={lien}>L’année</Link>
              <Link href="/manuel" className={lien}>Le manuel</Link>
              <Link href="/fiches" className={lien}>Les fiches</Link>
              <Link href="/atelier" className={lien}>L’atelier</Link>
              <Link href="/sources" className={lien}>Les sources</Link>
            </nav>
            <span aria-hidden className="hidden h-4 w-px bg-papier/20 sm:block" />
            <nav aria-label="Rendre compte" className={`${surOrdinateur} flex-wrap items-center`}>
              {parent && <Link href="/journal" className={lien}>Le journal</Link>}
              {parent && <Link href="/releve" className={lien}>Le relevé</Link>}
              {parent && <Link href="/suivi" className={lien}>Le suivi</Link>}
              <Link href="/controle" className={lien}>Le contrôle</Link>
            </nav>
            <span className="ml-auto flex items-center gap-2">
              <Cloche nouveaux={aReprendre?.nouveaux ?? 0} dernier={aReprendre?.dernier ?? 0} />
              <ModeDEmploi
                contenu={contenuDuModeDEmploi(parent ? "parent" : "proche", prenomEnfant)}
                ouvrirDEmblee={aOuvrirDEmblee(
                  {
                    compris: modeEmploi?.compris ?? false,
                    fermeLe: modeEmploi?.ferme_le ?? null,
                  },
                  aujourdhui(),
                )}
                comprisAuDepart={modeEmploi?.compris ?? false}
                classeDuLien={`${lien} hidden whitespace-nowrap sm:inline-block`}
              />
              <span className="hidden text-[0.8125rem] text-papier/60 sm:inline">
                {moi.prenom} · {moi.role_affiche}
              </span>
              <span className={surOrdinateur}>
                <SeDeconnecter clair />
              </span>
            </span>
          </>
        )}
      </div>
    </header>
  );
}
