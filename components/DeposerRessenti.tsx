"use client";

import { useEffect, useState, useTransition } from "react";
import Link from "next/link";
import { classesTeinte } from "@/lib/data";
import { deposerRessenti } from "@/app/actions";
import { garderBrouillon, oublierBrouillon, recharger, reprendreBrouillon } from "@/lib/recharger";
import type { RessentiMot } from "@/lib/journee";
import type { MotRecu } from "@/lib/valorisation";

/**
 * « Comment tu te sens ? » — et non « c'était dur ? », qui serait une
 * auto-évaluation déguisée. On demande son état, jamais sa performance.
 *
 * Ne rien dire est une réponse valable, offerte au même rang que les autres.
 *
 * Le composant porte aussi l'écran d'après, « C'est envoyé » ou « C'est déjà
 * envoyé » s'il revient : voir `app/ressenti/page.tsx` pour pourquoi il ne
 * doit pas changer de place entre les deux.
 */

const ordre: { cle: RessentiMot; mot: string; teinte: string }[] = [
  { cle: "bien", mot: "Bien", teinte: "sauge" },
  { cle: "ca-va", mot: "Ça va", teinte: "bleu" },
  { cle: "bof", mot: "Bof", teinte: "ocre" },
  { cle: "pas-bien", mot: "Pas bien", teinte: "prune" },
];

/* Le prénom vient de la session, jamais du code : il était écrit en dur ici,
   ce qui marchait exactement aussi longtemps qu'une seule famille. */
export default function DeposerRessenti({
  prenom,
  dejaEnvoye,
  motRecu,
}: {
  prenom: string;
  /** Ce que dit la base : le ressenti du jour est là. */
  dejaEnvoye: boolean;
  /**
   * Le mot d'un adulte, rendu par le serveur seulement une fois le ressenti
   * déposé. `null` le reste du temps, et les jours sans mot.
   */
  motRecu: MotRecu | null;
}) {
  const [choix, setChoix] = useState<RessentiMot | null>(null);
  const [mot, setMot] = useState("");
  /* « depuis cet écran » : c'est ce qui distingue « C'est envoyé » de « C'est
     déjà envoyé ». Posé au clic, parce que le nouveau rendu du serveur peut
     arriver avant la fin de l'action — et un enfant qui vient d'appuyer sur
     « Envoyer » n'a pas à lire « déjà ». */
  const [depuisIci, setDepuisIci] = useState(false);
  const [envoye, setEnvoye] = useState(false);
  const [enCours, demarrer] = useTransition();

  /* Ce qu'il a écrit survit à un rechargement — coupure, mise en ligne,
     page restée ouverte d'hier. Repris après le montage, pas pendant le
     rendu : le serveur ne connaît pas le brouillon. */
  useEffect(() => {
    const t = setTimeout(() => {
      const brouillon = reprendreBrouillon("ressenti");
      if (brouillon) setMot(brouillon);
    }, 0);
    return () => clearTimeout(t);
  }, []);

  if (dejaEnvoye || envoye) {
    return (
      <div className="au-dessus deplier mx-auto flex w-full max-w-xl flex-1 flex-col justify-center px-5 py-20 sm:px-8">
        <h1 className="font-display text-4xl tracking-tight sm:text-5xl">
          {depuisIci ? "C’est envoyé." : "C’est déjà envoyé."}
        </h1>
        <p className="mt-4 text-lg text-encre-douce">Bonne soirée, {prenom}.</p>

        {/* Le mot d'un adulte : une phrase de quelqu'un, pas un score. Elle
            décrit ce qui a été vu, et elle peut être là un jour où tout s'est
            mal passé, ce qu'un bon point ne pourrait pas. Sans mot, rien — ni
            case vide ni « pas de mot aujourd'hui » : l'absence ne doit pas
            parler. */}
        {motRecu && (
          <figure className="deplier mt-9 border-l-2 border-sauge/60 pl-5">
            <blockquote className="font-display whitespace-pre-line text-[1.375rem] leading-snug tracking-tight">
              {motRecu.texte}
            </blockquote>
            {/* Signé du mot qu'il emploie, jamais d'un prénom. */}
            {motRecu.signe && (
              <figcaption className="mt-3 text-[0.9375rem] text-encre-douce">
                —&nbsp;{motRecu.signe}
              </figcaption>
            )}
          </figure>
        )}

        <Link
          href="/journee"
          className="mt-10 self-start rounded-full border border-reglure px-5 py-3 text-[0.9375rem] text-encre-douce transition-colors hover:border-encre-tenue hover:text-encre"
        >
          Retour à ma journée
        </Link>
      </div>
    );
  }

  function envoyer(c: RessentiMot | null, m: string) {
    setDepuisIci(true);
    demarrer(async () => {
      /* « C'est envoyé » seulement si c'est envoyé. Sinon on recharge,
         et le brouillon attend. */
      if (!(await deposerRessenti(c, m))) {
        setDepuisIci(false);
        recharger();
        return;
      }
      oublierBrouillon("ressenti");
      setEnvoye(true);
    });
  }

  return (
    <div className="au-dessus mx-auto w-full max-w-xl px-5 pb-20 pt-12 sm:px-8 sm:pt-16">
      <p className="etiquette deplier text-encre-tenue">La journée est finie</p>

      <h1
        className="font-display deplier mt-3 text-[2.25rem] leading-[1.08] tracking-tight sm:text-[2.75rem]"
        style={{ animationDelay: "60ms" }}
      >
        Comment tu te sens, là&nbsp;?
      </h1>

      <div className="deplier mt-9 grid gap-3 sm:grid-cols-2">
        {ordre.map((r) => {
          const t = classesTeinte[r.teinte];
          const actif = choix === r.cle;
          return (
            <button
              key={r.cle}
              type="button"
              aria-pressed={actif}
              onClick={() => setChoix(r.cle)}
              className={`flex items-center gap-3.5 rounded-feuille border px-5 py-5 text-left text-lg transition-all ${
                actif
                  ? `${t.bord} ${t.fond} font-bold shadow-[0_10px_28px_-20px_rgba(29,40,54,0.6)]`
                  : "border-reglure bg-feuille hover:border-encre-tenue"
              }`}
            >
              <span className={`h-3.5 w-3.5 shrink-0 rounded-full ${t.puce}`} />
              {r.mot}
            </button>
          );
        })}
      </div>

      <div className="deplier mt-8">
        <label htmlFor="mot" className="block text-[1.0625rem] text-encre-douce">
          Tu peux écrire un mot, si tu veux.
        </label>
        <textarea
          id="mot"
          rows={3}
          value={mot}
          onChange={(e) => {
            setMot(e.target.value);
            garderBrouillon("ressenti", e.target.value);
          }}
          className="mt-3 w-full resize-none rounded-feuille border border-reglure bg-feuille p-4 text-lg text-encre placeholder:text-encre-tenue focus:border-encre-tenue focus:outline-none"
          placeholder="…"
        />
      </div>

      {/* Dire où va ce qu'il dépose. Un enfant a droit à cette information. */}
      <p className="mt-6 text-sm leading-relaxed text-encre-tenue">
        Ça part chez papa et maman. Personne d’autre ne le lit.
      </p>

      <div className="mt-8 flex flex-wrap items-center gap-4">
        <button
          type="button"
          disabled={!choix || enCours}
          onClick={() => envoyer(choix, mot)}
          className="rounded-full bg-encre px-6 py-3.5 text-base font-bold text-feuille transition-colors hover:bg-encre/85 disabled:cursor-not-allowed disabled:bg-encre-tenue"
        >
          Envoyer
        </button>

        {/* Ne pas répondre est une réponse valable. */}
        <button
          type="button"
          disabled={enCours}
          onClick={() => envoyer(null, "")}
          className="text-[0.9375rem] text-encre-douce underline decoration-reglure underline-offset-4 transition-colors hover:text-encre disabled:opacity-60"
        >
          Je préfère ne rien dire
        </button>
      </div>
    </div>
  );
}
