import type { CSSProperties } from "react";
import Link from "next/link";
import { redirect } from "next/navigation";
import UneQuestion from "@/components/UneQuestion";
import { revenirALaJournee } from "@/app/actions";
import { personneConnectee, estEnfant } from "@/lib/session";
import { laPartieDuJour } from "@/lib/test-du-jour";

/**
 * Le test de positionnement. Un examen, et il est annoncé comme tel.
 *
 * Une question à la fois, et **on va jusqu'au bout** : cet écran ne propose
 * ni « plus tard », ni pause, ni choix de domaine. Il y a des exercices, il
 * les fait. Depuis le 16 septembre 2026, un lien discret ramène pourtant à sa
 * journée, en bas, sans rien annoncer : sans lui, la seule sortie visible
 * était « Quitter », et un enfant en crise ne doit pas trouver la porte la
 * plus brutale comme seule issue. S'il le prend, la partie passe après l'étape
 * suivante de sa journée, et il la reprend ensuite à la même question.
 *
 * Il y avait ici, une première fois, un écran de pause entre chaque bloc :
 * « tu as fini une partie, tu peux t'arrêter là ». Le parrain y avait vu un
 * contresens — annoncer la sortie avant l'entrée installe l'idée qu'il n'en
 * fera qu'un morceau — et les parties se sont enchaînées sans rien dire.
 *
 * **Le 16 septembre, le jour où il l'a commencé, les parents l'ont trouvé
 * « assez lourd »** : soixante et une questions en quarante minutes. D'où
 * une partie par jour (`ceQuiVientAujourdhui`). Ce n'est toujours pas une
 * porte : il ne choisit pas de s'arrêter, rien ne se valide ni ne s'abandonne.
 * Une partie finie, **c'est le test qui s'arrête** pour la journée, et
 * l'écran le lui dit comme une chose prévue.
 *
 * Ce qui le protège n'est pas de pouvoir s'arrêter, c'est qu'il n'y a rien à
 * rater : « je ne sais pas » est une réponse à chaque question, et aucun écran
 * ne lui dira jamais s'il a juste.
 *
 * Le compteur, lui, est assumé — et c'est un revirement par rapport au reste
 * du produit, où compter est interdit. Dans un examen, savoir où l'on en est
 * n'évalue pas l'élève, ça borne la tâche. Il compte les questions posées,
 * jamais les réponses justes.
 */

export const dynamic = "force-dynamic";

export default async function Questions({
  searchParams,
}: {
  searchParams: Promise<{ pret?: string }>;
}) {
  const moi = await personneConnectee();
  if (!moi) redirect("/entrer");
  if (!estEnfant(moi)) redirect("/pilotage");

  const { pret } = await searchParams;
  /* La partie du jour est une étape de sa journée (`lib/test-du-jour.ts`) :
     cet écran ne s'ouvre que si elle y est, et pas encore faite. */
  const { vient, ouvert, reponses: deja } = await laPartieDuJour(moi);

  /* ---------------------------------------------------------------- */
  /* Tout est fait                                                     */
  /* ---------------------------------------------------------------- */

  if (vient.etat === "tout-fini") {
    return (
      <Cadre>
        <h1 className="font-display text-[2.25rem] leading-tight tracking-tight sm:text-[2.5rem]">
          C’est fini, {moi.prenom}.
        </h1>
        <p className="mt-4 text-lg leading-relaxed text-encre-douce">
          Tu as répondu à toutes les questions, jusqu’à la dernière. Tu es allé
          au bout.
        </p>
        <div className="mt-12 border-t border-reglure pt-5">
          <Link
            href="/journee"
            className="rounded-full border border-reglure px-5 py-3 text-[0.9375rem] text-encre-douce transition-colors hover:border-encre-tenue hover:text-encre"
          >
            Retour à ma journée
          </Link>
        </div>
      </Cadre>
    );
  }

  /* ---------------------------------------------------------------- */
  /* Une partie finie aujourd'hui : le test s'arrête là pour la journée */
  /* ---------------------------------------------------------------- */

  /* Ni « bravo », ni ce qu'il reste : la même voix que la fin du test. Ce qui
     compte est qu'il lise que l'arrêt est prévu — pas qu'il a été arrêté. */
  if (vient.etat === "partie-finie") {
    return (
      <Cadre>
        <p className="etiquette text-encre-tenue">
          {vient.partie.titre} · partie {vient.partie.partie} sur{" "}
          {vient.partie.parties}
        </p>
        <h1 className="mt-3 font-display text-[2.25rem] leading-tight tracking-tight sm:text-[2.5rem]">
          Cette partie est finie, {moi.prenom}.
        </h1>
        <p className="mt-4 text-lg leading-relaxed text-encre-douce">
          Tu es allé au bout. Le test, c’est une partie par jour&nbsp;: pour
          aujourd’hui, il s’arrête là. La suivante sera dans ta journée un
          autre jour.
        </p>
        <div className="mt-12 border-t border-reglure pt-5">
          <Link
            href="/journee"
            className="rounded-full border border-reglure px-5 py-3 text-[0.9375rem] text-encre-douce transition-colors hover:border-encre-tenue hover:text-encre"
          >
            Retour à ma journée
          </Link>
        </div>
      </Cadre>
    );
  }

  /* ---------------------------------------------------------------- */
  /* Pas dans sa journée : la seule porte est fermée                   */
  /* ---------------------------------------------------------------- */

  /* Un jour allégé, un jour où ses parents l'ont retiré, une journée
     arrêtée : il arrive ici par un ancien lien ou l'historique. Rien ne doit
     se lire comme un refus — il n'y a simplement rien à faire de ce côté. */
  if (!ouvert) {
    return (
      <Cadre>
        <h1 className="font-display text-[2.25rem] leading-tight tracking-tight sm:text-[2.5rem]">
          Pas de test aujourd’hui.
        </h1>
        <p className="mt-4 text-lg leading-relaxed text-encre-douce">
          Il n’est pas dans ta journée. Il n’y a rien à faire de ce côté-là.
        </p>
        <div className="mt-12 border-t border-reglure pt-5">
          <Link
            href="/journee"
            className="rounded-full border border-reglure px-5 py-3 text-[0.9375rem] text-encre-douce transition-colors hover:border-encre-tenue hover:text-encre"
          >
            Retour à ma journée
          </Link>
        </div>
      </Cadre>
    );
  }

  /* ---------------------------------------------------------------- */
  /* L'entrée en matière, une seule fois                               */
  /* ---------------------------------------------------------------- */

  /* Rien sur le nombre de questions, rien sur la durée : ce qu'il a besoin de
     savoir avant de commencer, c'est à quoi ça sert, qu'il ne risque rien, et
     qu'il n'en fera qu'une partie à la fois. */
  if (deja.length === 0 && pret !== "1") {
    return (
      <Cadre>
        <h1 className="font-display text-[2.25rem] leading-tight tracking-tight sm:text-[2.5rem]">
          On va faire un test.
        </h1>

        {/* La vérité sur ce que c'est. Un habillage de jeu posé sur un examen
            serait le seul mensonge de toute l'application, et il le
            sentirait. */}
        <p className="mt-4 text-lg leading-relaxed text-encre-douce">
          Ça sert à papa et maman, pour savoir quoi te préparer cette année. Il
          y aura des questions de tout&nbsp;: des nombres, du calcul, des
          problèmes, des mesures, de la géométrie, de l’orthographe, de la
          lecture. Pas tout d’un coup&nbsp;: une partie par jour.
        </p>
        <p className="mt-4 text-lg leading-relaxed text-encre-douce">
          <strong className="font-bold text-encre">
            Il n’y a rien à gagner et rien à perdre.
          </strong>{" "}
          Quand tu ne sais pas, tu le dis, et c’est utile aussi. Personne ne te
          dira si c’est juste ou faux, parce que ce n’est pas la question.
        </p>

        <div className="mt-9">
          <Link
            href="/questions?pret=1"
            className="rounded-full bg-encre px-6 py-3 text-base font-bold text-feuille transition-colors hover:bg-encre/85"
          >
            Je commence
          </Link>
        </div>
      </Cadre>
    );
  }

  /* ---------------------------------------------------------------- */
  /* Une question. Et aucune porte de sortie.                          */
  /* ---------------------------------------------------------------- */

  const { bloc, question, rang, total } = vient.etape;

  return (
    <Cadre>
      <p className="etiquette text-encre-tenue">
        {bloc.titre} · partie {bloc.partie} sur {bloc.parties}
      </p>

      {/* Le compteur, et rien d'autre : pas de score, pas de couleur, pas de
          bilan intermédiaire, pas de barre — la règle n°1 n'autorise que le
          rang écrit. Il mesure la tâche, pas lui. */}
      <p className="chiffres mt-1 border-b border-reglure pb-3 text-[0.9375rem] text-encre-tenue">
        Question {rang} sur {total}
      </p>

      {/* Au début d'une partie : ce qui vient, et de quoi s'équiper. Une
          information, pas une porte — il n'y a rien à valider. Une partie
          commence toujours un autre jour que la précédente. */}
      {rang === 1 && (
        <p className="mt-6 text-[1.0625rem] leading-relaxed text-encre-douce">
          {bloc.partie > 1 && (
            <span className="font-bold text-encre">Une nouvelle partie. </span>
          )}
          {bloc.annonce}
        </p>
      )}

      <div className="mt-8">
        <UneQuestion key={question.code} question={question} />
      </div>

      {/* Une sortie douce, et rien qui l'annonce. Décision du 16 septembre
          2026 : pendant une partie, la seule sortie visible était « Quitter »,
          qui le déconnecte — la plus brutale, précisément le jour où il en
          aurait besoin. Aucun « tu peux t'arrêter » n'est proposé. S'il sort,
          la partie passe après l'étape suivante de sa journée (seconde
          critique : elle restait en tête, et le seul bouton du chemin le
          ramenait ici) ; il la reprendra ensuite, à la même question. */}
      <form action={revenirALaJournee} className="mt-12 border-t border-reglure pt-5">
        <button
          type="submit"
          className="text-[0.9375rem] text-encre-douce underline decoration-reglure underline-offset-4 transition-colors hover:text-encre"
        >
          Revenir à ma journée
        </button>
      </form>
    </Cadre>
  );
}

function Cadre({ children }: { children: React.ReactNode }) {
  return (
    <main
      className="reglure chaleur flex-1"
      style={{ "--force-reglure": 0.45 } as CSSProperties}
    >
      <div className="au-dessus mx-auto max-w-2xl px-5 pb-20 pt-12 sm:px-8 sm:pt-16">
        {children}
      </div>
    </main>
  );
}
