"use client";

import { useState, useTransition } from "react";
import { noterJournee } from "@/app/actions";
import { useBrouillon } from "@/lib/brouillon";

/**
 * La note du soir d'un parent.
 *
 * Réservée aux parents, comme le journal : l'enfant ne la lit jamais. C'est
 * ce qui permet d'y écrire ce qu'on a vu sans peser ce qu'il en penserait.
 *
 * Deux maisons, un seul champ. La note dit qui l'a écrite ; et si l'autre
 * parent a enregistré entre-temps, rien n'est écrasé : sa note s'affiche, ce
 * qui a été tapé ici reste dans le champ, et on enregistre en connaissance de
 * cause.
 */
export default function NoteDuSoir({
  note,
  jour,
  de,
}: {
  note: string;
  jour: string;
  /** « papa », « maman » : qui a écrit la note en base. */
  de: string | null;
}) {
  const [texte, setTexte, oublierBrouillon] = useBrouillon(`note-${jour}`, note);
  /* La note telle qu'elle était quand on a commencé à écrire : c'est elle que
     le serveur compare avant d'écrire. */
  const [base, setBase] = useState(note);
  const [enregistre, setEnregistre] = useState(false);
  const [autre, setAutre] = useState<{ note: string; de: string | null } | null>(null);
  const [enCours, demarrer] = useTransition();

  return (
    <div>
      <label htmlFor="note" className="block text-[0.9375rem] text-encre-douce">
        Ce que vous avez observé aujourd’hui — il ne le lira pas
        {de && note && !autre && (
          <span className="text-encre-tenue"> · écrit par {de}</span>
        )}
      </label>
      <textarea
        id="note"
        rows={3}
        value={texte}
        onChange={(e) => {
          setTexte(e.target.value);
          setEnregistre(false);
        }}
        placeholder="Par exemple : la division est passée sans crise, il a demandé de l’aide."
        className="mt-2 w-full resize-none rounded-feuille border border-reglure bg-feuille px-4 py-3 text-[1.0625rem] leading-relaxed text-encre placeholder:text-encre-tenue focus:border-encre-tenue focus:outline-none"
      />

      {autre && (
        <div className="mt-3 rounded-feuille border border-bord-fort bg-carte p-4">
          <p className="text-[0.9375rem] leading-relaxed text-encre-douce">
            {autre.de ? `${autre.de[0].toUpperCase()}${autre.de.slice(1)} a écrit` : "Quelqu’un a écrit"}{" "}
            entre-temps&nbsp;:
          </p>
          <p className="mt-2 whitespace-pre-line text-[1.0625rem] leading-relaxed text-encre">
            {autre.note || "(une note vide)"}
          </p>
          <p className="mt-2 text-[0.9375rem] leading-relaxed text-encre-tenue">
            Votre texte est resté dans le champ. Enregistrer remplacera cette note :
            reprenez-en ce qui compte avant.
          </p>
        </div>
      )}

      <div className="mt-4 flex flex-wrap items-center gap-4">
        <button
          type="button"
          disabled={enCours}
          onClick={() =>
            demarrer(async () => {
              const r = await noterJournee(texte, base, jour);
              if (!r) return;
              if (r.ecrit) {
                oublierBrouillon();
                setBase(texte);
                setAutre(null);
                setEnregistre(true);
              } else {
                /* On a vu la note de l'autre : le prochain enregistrement
                   la remplace en connaissance de cause. */
                setBase(r.note);
                setAutre({ note: r.note, de: r.de });
              }
            })
          }
          className="rounded-full bg-encre px-6 py-3 text-base font-bold text-feuille transition-colors hover:bg-encre/85 disabled:opacity-60"
        >
          Enregistrer
        </button>
        {enregistre && <p className="text-[0.9375rem] text-fini">C’est noté.</p>}
      </div>
    </div>
  );
}
