"use client";

import { useState, useTransition } from "react";
import { useBrouillon } from "@/lib/brouillon";
import { laisserUnMot } from "@/app/gestes/valorisation";

/**
 * Le champ du mot. La consigne est dans la section, au-dessus : décrire, pas
 * noter.
 *
 * Le libellé montre la signature telle que l'enfant la lira — « papa »,
 * « maman », « parrain » — pour qu'on écrive en sachant qui il entendra.
 */
export default function EcrireUnMot({
  journeeId,
  signe,
  ceSoir,
  dejaPasse = false,
  promettre = true,
}: {
  journeeId: string;
  /** Le mot que l'enfant emploie pour l'adulte connecté. */
  signe: string;
  /** Le jour affiché est aujourd'hui. Sinon, c'est un jour à venir. */
  ceSoir: boolean;
  /** Il a déjà dit comment il se sent ce jour-là — connu des seuls parents. */
  dejaPasse?: boolean;
  /**
   * Faux pour le proche : il ne sait pas si l'enfant est déjà passé, et
   * l'écran ne peut donc pas lui promettre « il le lira ce soir ».
   */
  promettre?: boolean;
}) {
  const quand = dejaPasse
    ? "Il a déjà dit comment il se sent : il le lira s’il rouvre la fin de sa journée"
    : !promettre
      ? ceSoir
        ? "Pour ce soir"
        : "Pour le soir de ce jour-là"
      : ceSoir
        ? "Il le lira ce soir"
        : "Il le lira le soir de ce jour-là";

  const [texte, setTexte] = useBrouillon(`mot-${journeeId}`);
  const [issue, setIssue] = useState<"laisse" | "refuse" | null>(null);
  const [enCours, demarrer] = useTransition();

  return (
    <div>
      <label htmlFor="mot-pour-lui" className="block text-[0.9375rem] text-encre-douce">
        {quand}, signé
        «&nbsp;{signe}&nbsp;»
      </label>
      <textarea
        id="mot-pour-lui"
        rows={3}
        /* La borne de la base. Le navigateur compte en unités UTF-16, donc
           jamais plus de caractères que Postgres n'en accepte. */
        maxLength={1000}
        value={texte}
        onChange={(e) => {
          setTexte(e.target.value);
          setIssue(null);
        }}
        placeholder={ceSoir ? "Ce que vous avez vu aujourd’hui…" : "Ce que vous avez vu…"}
        className="mt-2 w-full resize-none rounded-feuille border border-bord-fort bg-carte px-4 py-3 text-[1.0625rem] leading-relaxed text-encre placeholder:text-encre-tenue focus:border-encre focus:outline-none"
      />
      <div className="mt-4 flex flex-wrap items-center gap-4">
        <button
          type="button"
          disabled={!texte.trim() || enCours}
          onClick={() =>
            demarrer(async () => {
              const ok = await laisserUnMot(journeeId, texte);
              if (ok) setTexte("");
              setIssue(ok ? "laisse" : "refuse");
            })
          }
          className="rounded-full bg-encre px-6 py-3 text-base font-bold text-carte transition-colors hover:bg-encre/85 disabled:cursor-not-allowed disabled:bg-encre-tenue"
        >
          {ceSoir ? "Le laisser pour ce soir" : "Le laisser pour ce jour-là"}
        </button>
        {issue === "laisse" && (
          <p className="text-[0.9375rem] text-fini">C’est laissé.</p>
        )}
        {/* Le cas réel : la session a expiré, ou minuit est passé pendant
            qu'on écrivait et le jour affiché est devenu hier. */}
        {issue === "refuse" && (
          <p className="text-[0.9375rem] text-encre-douce">
            Il n’a pas été enregistré. Votre texte est encore dans le
            champ&nbsp;: copiez-le avant de recharger la page.
          </p>
        )}
      </div>
    </div>
  );
}
