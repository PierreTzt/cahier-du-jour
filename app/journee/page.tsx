import type { CSSProperties } from "react";
import { redirect } from "next/navigation";
import Chemin from "@/components/Chemin";
import GestesJournee from "@/components/GestesJournee";
import RendezVousDuParrain from "@/components/RendezVousDuParrain";
import Link from "next/link";
import { personneConnectee, estEnfant } from "@/lib/session";
import { partieCommencee, placerLeTest } from "@/lib/test-du-jour";
import { reponsesDe } from "@/lib/reponses";
import {
  aujourdhui,
  journeeDe,
  journeeVivante,
  ressentiDe,
  seancesDe,
} from "@/lib/journee";

/**
 * La journée de l'enfant — désormais lue en base, plus dans le navigateur.
 *
 * Pas de compteur, pas de pourcentage : un compteur est déjà une évaluation.
 * Ce qui a été mis de côté a disparu de l'écran, il n'est ni barré ni grisé —
 * le retard n'existe que côté adulte.
 */

export const dynamic = "force-dynamic";

/* Le prénom vient de la session : il était écrit en dur, ce qui marchait
   exactement aussi longtemps qu'une seule famille. */
const accueil = (prenom: string) => ({
  ouverte: {
    titre: `Bonjour ${prenom}.`,
    sous: "Voilà ta journée. Quand tu arrives en bas, c’est fini.",
  },
  terminee: {
    titre: `C’est fini, ${prenom}.`,
    sous: "Tu as fait toute ta journée. Le reste du temps est à toi.",
  },
  /* Aucune mention de ce qui n'a pas été fait. Aucune trace du mot « reste ». */
  arretee: {
    titre: "On arrête là.",
    sous: "Tu as fait ce que tu pouvais faire aujourd’hui. À demain.",
  },
});

const MOIS = ["janvier","février","mars","avril","mai","juin","juillet","août","septembre","octobre","novembre","décembre"];
const JOURS = ["dimanche","lundi","mardi","mercredi","jeudi","vendredi","samedi"];

/** « jeudi 17 septembre », « jeudi 1er octobre » : le premier est ordinal. */
function enFrancais(iso: string) {
  const d = new Date(`${iso}T12:00:00`);
  const n = d.getDate();
  return `${JOURS[d.getDay()]} ${n === 1 ? "1er" : n} ${MOIS[d.getMonth()]}`;
}

export default async function MaJournee() {
  const moi = await personneConnectee();
  if (!moi) redirect("/entrer");
  /* Cet écran est le sien. Un adulte voit la même journée depuis le bureau,
     avec ses propres gestes — et sans pouvoir cocher ou déposer à sa place. */
  if (!estEnfant(moi)) redirect("/pilotage");

  const jour = await journeeDe(moi.famille_id, aujourdhui());
  /* Le test de positionnement est une étape de sa journée, posée d'elle-même
     en tête de ce qui reste à faire tant qu'il n'est pas fini. Il y a eu ici
     un lien « Reprendre le test » à côté du chemin ; le 16 septembre, les
     parents ont voulu la partie du jour **dans** la journée, et une seule
     porte. Voir `lib/test-du-jour.ts`. */
  const reponses = await reponsesDe(moi.id);
  await placerLeTest(jour, reponses);
  const seances = await seancesDe(jour.id);
  const vue = journeeVivante(seances, jour.cloture, partieCommencee(reponses));
  const ressenti = await ressentiDe(jour.id);

  /* Jour de repos : un chemin vide se lit comme une journée ratée. Il faut
     dire qu'il n'y a rien **et que c'est prévu**, puis lui proposer ses
     affaires à lui plutôt que rien du tout. */
  if (jour.ton === "repos") {
    return (
      <main
        className="reglure chaleur flex flex-1 flex-col"
        style={{ "--force-reglure": 0.4 } as CSSProperties}
      >
        <div className="au-dessus mx-auto flex w-full max-w-2xl flex-1 flex-col justify-center px-5 py-16 sm:px-8">
          <p className="etiquette deplier text-encre-tenue">{enFrancais(jour.jour)}</p>
          <h1 className="font-display deplier mt-3 text-[2.5rem] leading-[1.05] tracking-tight sm:text-5xl">
            Aujourd’hui, il n’y a rien.
          </h1>
          <p className="deplier mt-4 text-lg leading-relaxed text-encre-douce">
            C’est un jour sans travail. Personne n’attend rien de toi — ni
            aujourd’hui, ni ce soir. La journée est à toi.
          </p>
        </div>
      </main>
    );
  }

  const cle = jour.cloture ?? "ouverte";
  const mots = accueil(moi.prenom)[cle];

  return (
    <main
      className="reglure chaleur flex-1"
      style={{ "--force-reglure": 0.55 } as CSSProperties}
    >
      {/* Deux colonnes dès qu'il y a la place, pour que la journée entière
          tienne sur un écran : il doit voir la fin sans faire défiler. Le
          rythme vertical est resserré en dessous de 1024 px, où la page
          remplissait l'écran au pixel près. */}
      <div className="au-dessus mx-auto grid max-w-5xl gap-x-14 gap-y-4 px-5 pb-4 pt-5 sm:px-8 lg:grid-cols-[0.85fr_1.15fr] lg:grid-rows-[auto_1fr] lg:gap-x-20 lg:gap-y-7 lg:pb-8 lg:pt-8">
        <header className="max-sm:order-1 lg:col-start-1 lg:row-start-1">
          <p className="etiquette deplier text-encre-tenue">{enFrancais(jour.jour)}</p>

          <h1
            className="font-display deplier mt-3 text-[2.5rem] leading-[1.05] tracking-tight sm:text-5xl"
            style={{ animationDelay: "60ms" }}
          >
            {mots.titre}
          </h1>

          <p
            className="deplier mt-4 max-w-md text-lg leading-relaxed text-encre-douce"
            style={{ animationDelay: "120ms" }}
          >
            {seances.length === 0
              ? "Il n’y a rien d’écrit pour aujourd’hui. Profites-en."
              : mots.sous}
          </p>
        </header>

        <div className="max-sm:order-3 lg:col-start-2 lg:row-span-2 lg:row-start-1">
          <Chemin etapes={vue.etapes} cloture={jour.cloture} interactif />
        </div>

        {/* Sur un téléphone, le pied passe sous le bonjour : avec huit étapes,
            « On arrête pour aujourd’hui » tombait à 911 px pour un écran de 812,
            et cette sortie doit rester à portée à tout moment (seconde
            critique du 16 septembre). Tablette et ordinateur ne changent pas. */}
        <footer className="max-sm:order-2 lg:col-start-1 lg:row-start-2 lg:self-end">
          <div className="mt-5 border-t border-reglure pt-4 max-sm:mt-1">
            <GestesJournee
              ouverte={vue.ouverte}
              arretee={jour.cloture === "arretee"}
              ressentiDepose={ressenti !== null}
              vide={seances.length === 0}
            />
          </div>

          <RendezVousDuParrain familleId={moi.famille_id} />

          {/* Ses affaires à lui : des portes à côté du chemin, jamais une étape
              de la journée — sans pastille ni rappel. Une pastille est une
              sollicitation, et une sollicitation est une dette. */}
          <nav className="mt-4 flex flex-wrap items-center gap-x-5 gap-y-2 text-[0.9375rem]">
            <Link
              href="/pourquoi"
              className="text-encre-douce underline decoration-reglure underline-offset-4 transition-colors hover:text-encre"
            >
              La boîte à pourquoi
            </Link>
            <Link
              href="/cahier"
              className="text-encre-douce underline decoration-reglure underline-offset-4 transition-colors hover:text-encre"
            >
              Ce que j’ai fabriqué
            </Link>
          </nav>
        </footer>
      </div>
    </main>
  );
}
