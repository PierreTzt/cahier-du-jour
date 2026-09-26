"use client";

import { useState, useTransition } from "react";
import { toast } from "sonner";
import { noterResultatFiche } from "@/app/actions";
import { TexteFiche } from "@/components/adulte/ContenuFiche";
import { useEcranLarge } from "@/components/adulte/useEcranLarge";
import {
  Drawer,
  DrawerContent,
  DrawerDescription,
  DrawerHeader,
  DrawerTitle,
} from "@/components/ui/drawer";
import type { QuestionANoter, ResultatFiche } from "@/lib/resultat-fiche";

/**
 * Le résultat d'une séance menée avec une fiche, noté depuis la journée.
 *
 * Demandé par les parents le premier jour : la fiche est ouverte, l'ardoise
 * vient d'être levée dix fois, et il faut pouvoir dire ce qui a résisté sans
 * changer d'écran.
 *
 * **On touche ce qui est à revoir**, le reste compte comme passé. C'est le
 * geste de quelqu'un qui corrige une ardoise — on repère ce qui ne va pas —
 * et c'est ce que la fiche dit de garder : la question à reposer demain.
 * Sans corrigé (une dictée, une lecture), il reste la note.
 *
 * Fermé par défaut : ouvert, il allongerait la journée de dix lignes par
 * séance, et on ne le remplit qu'une fois la séance menée. Au téléphone, il
 * s'ouvre dans un panneau qui monte du bas de l'écran, « Enregistrer »
 * toujours sous le pouce ; sur un écran large, sous la séance.
 */
export default function NoterResultatFiche({
  seanceId,
  jour,
  questions,
  resultat,
  rangsNotes,
  avant,
  sansRetrait = false,
  titre,
}: {
  seanceId: string;
  jour: string;
  questions: QuestionANoter[];
  resultat: ResultatFiche | null;
  /** Les rangs déjà marqués « à revoir », pour rouvrir ce qui a été noté. */
  rangsNotes: number[];
  /** Ce qui se place sur la même ligne que « Noter le résultat » — dans la
      journée, « Ouvrir la fiche ». */
  avant?: React.ReactNode;
  /** Sans retrait à gauche : en bas d'une fiche, il n'y a pas de numéro de
      séance avec lequel s'aligner. */
  sansRetrait?: boolean;
  /** Le titre de la séance, en tête du panneau du téléphone. */
  titre?: string;
}) {
  const [ouvert, setOuvert] = useState(false);
  const [aRevoir, setARevoir] = useState<Set<number>>(new Set(rangsNotes));
  const [note, setNote] = useState(resultat?.note ?? "");
  const [refuse, setRefuse] = useState(false);
  const [enCours, demarrer] = useTransition();
  const large = useEcranLarge();

  const retrait = sansRetrait ? "" : "pl-8";
  const avecCorrige = questions.length > 0;
  const pret = avecCorrige || note.trim() !== "";

  function ouvrir() {
    setARevoir(new Set(rangsNotes));
    setNote(resultat?.note ?? "");
    setRefuse(false);
    setOuvert(true);
  }

  function basculer(rang: number) {
    setRefuse(false);
    setARevoir((avant) => {
      const apres = new Set(avant);
      if (apres.has(rang)) apres.delete(rang);
      else apres.add(rang);
      return apres;
    });
  }

  function enregistrer() {
    demarrer(async () => {
      const ok = await noterResultatFiche(seanceId, [...aRevoir], note, jour);
      if (!ok) {
        setRefuse(true);
        return;
      }
      setOuvert(false);
      toast(
        avecCorrige
          ? `Résultat noté : ${questions.length - aRevoir.size} sur ${questions.length}`
          : "Résultat noté",
      );
    });
  }

  /* Ce qui se remplit — le même dans le panneau et sous la séance. */
  const champs = (
    <>
      {avecCorrige && (
        <fieldset>
          <legend className="text-[0.9375rem] leading-relaxed text-encre-douce">
            Touchez ce qui est à revoir. Le reste compte comme passé.
          </legend>
          <ul className="mt-3 space-y-1.5">
            {questions.map((q) => {
              const marque = aRevoir.has(q.rang);
              return (
                <li key={q.rang}>
                  <button
                    type="button"
                    aria-pressed={marque}
                    disabled={enCours}
                    onClick={() => basculer(q.rang)}
                    className={`flex min-h-11 w-full flex-wrap items-baseline gap-x-3 gap-y-0.5 rounded-feuille border px-3 py-2 text-left transition-colors ${
                      marque
                        ? "border-ocre bg-papier-chaud"
                        : "border-bord-fort hover:border-encre"
                    }`}
                  >
                    {q.numero && (
                      <span className="chiffres w-6 shrink-0 text-[0.875rem] text-encre-tenue">
                        {q.numero}.
                      </span>
                    )}
                    <span className="min-w-0 flex-1 text-[1rem] leading-relaxed text-encre">
                      <TexteFiche texte={q.texte} />
                    </span>
                    <span className="chiffres text-[0.9375rem] text-encre-tenue">
                      <TexteFiche texte={q.reponse} />
                    </span>
                    {/* Au téléphone, « à revoir » passe sous la question au
                        lieu de lui réserver 80 px : « 2 130 + 1 425 » se
                        coupait en « 2 130 + 1 » et « 425 » (critique du
                        21 septembre 2026). */}
                    <span
                      className={`text-[0.875rem] font-bold sm:block sm:w-20 sm:shrink-0 sm:basis-auto sm:pl-0 sm:text-right ${
                        marque ? "basis-full pl-9 text-ocre" : "hidden text-transparent"
                      }`}
                      aria-hidden={!marque}
                    >
                      à revoir
                    </span>
                  </button>
                </li>
              );
            })}
          </ul>
        </fieldset>
      )}

      <label
        htmlFor={`note-${seanceId}`}
        className={`block text-[0.9375rem] text-encre-douce ${avecCorrige ? "mt-4" : ""}`}
      >
        {avecCorrige
          ? "Une note, si besoin — ce qui a résisté, ce qu’on reprendra"
          : "Ce que ça a donné — cette fiche n’a pas de corrigé, la note tient lieu de résultat"}
      </label>
      <textarea
        id={`note-${seanceId}`}
        rows={2}
        maxLength={1000}
        value={note}
        onChange={(e) => {
          setNote(e.target.value);
          setRefuse(false);
        }}
        placeholder={
          avecCorrige
            ? "Par exemple : 7 × 8 a résisté, on la repose demain."
            : "Par exemple : trois oublis d’accord, bien relu tout seul."
        }
        className="mt-2 w-full resize-none rounded-feuille border border-bord-fort bg-carte px-4 py-3 text-[1rem] leading-relaxed text-encre placeholder:text-encre-tenue focus:border-encre focus:outline-none"
      />

      {refuse && (
        <p className="mt-3 text-[0.9375rem] leading-relaxed text-encre-douce">
          Ce n’a pas été enregistré. Votre saisie est encore là&nbsp;: réessayez,
          ou copiez la note avant de recharger la page.
        </p>
      )}
    </>
  );

  const compte = avecCorrige ? (
    <span className="chiffres text-[0.9375rem] text-encre-douce">
      Passé&nbsp;: {questions.length - aRevoir.size} sur {questions.length}
    </span>
  ) : null;

  const boutonEnregistrer = (classe: string) => (
    <button
      type="button"
      disabled={!pret || enCours}
      onClick={enregistrer}
      className={`rounded-full bg-encre text-[0.9375rem] font-bold text-carte transition-colors hover:bg-encre/85 disabled:cursor-not-allowed disabled:bg-encre-tenue ${classe}`}
    >
      {enCours ? "Un instant…" : "Enregistrer"}
    </button>
  );

  /* Fermé — et, au téléphone, le panneau par-dessus : la carte reste
     visible derrière, avec ses deux boutons. */
  if (!ouvert || !large) {
    return (
      <div className={`mt-2.5 ${retrait}`}>
        {resultat && <Resume resultat={resultat} />}
        {/* Un vrai bouton, à côté de « Ouvrir la fiche » : c'était un lien de
            21 px sous la carte, qu'on visait mal au pouce (critique du
            21 septembre 2026). */}
        <div className={`flex flex-wrap items-center gap-2 ${resultat ? "mt-2" : ""}`}>
          {avant}
          <button
            type="button"
            aria-label={resultat ? "Modifier le résultat" : undefined}
            onClick={ouvrir}
            className="inline-flex min-h-11 items-center rounded-full border border-bord-fort bg-carte px-3.5 text-[0.9375rem] text-encre-douce transition-colors hover:border-encre hover:text-encre sm:min-h-0 sm:px-4 sm:py-1.5"
          >
            {resultat ? "Modifier" : "Noter le résultat"}
          </button>
        </div>

        {!large && (
          <Drawer open={ouvert} onOpenChange={setOuvert} repositionInputs={false}>
            <DrawerContent className="rounded-t-[22px]! border-bord">
              <DrawerHeader className="px-5 pb-2 pt-3 text-left!">
                <DrawerTitle className="font-display text-[1.375rem] font-normal leading-snug tracking-tight">
                  {resultat ? "Modifier le résultat" : "Noter le résultat"}
                </DrawerTitle>
                {titre && (
                  <DrawerDescription className="text-[0.9375rem] text-encre-tenue">
                    {titre} — il ne voit rien de ce qui se note ici.
                  </DrawerDescription>
                )}
              </DrawerHeader>
              {/* Seul le milieu défile ; « Enregistrer » reste en bas. */}
              <div className="min-h-0 flex-1 overflow-y-auto px-5 pb-4">{champs}</div>
              <div className="flex items-center gap-3 border-t border-bord bg-carte px-5 pb-[max(0.75rem,env(safe-area-inset-bottom))] pt-3">
                {compte}
                <span className="flex-1" />
                {boutonEnregistrer("min-h-12 px-6")}
              </div>
            </DrawerContent>
          </Drawer>
        )}
      </div>
    );
  }

  return (
    <>
    {avant && <div className={`mt-2.5 ${retrait}`}>{avant}</div>}
    <div
      className={`apparaitre mt-3 rounded-feuille border border-bord bg-carte p-4 sm:p-5 ${
        sansRetrait ? "" : "sm:ml-8"
      }`}
    >
      {champs}
      {compte && <p className="mt-3">{compte}</p>}
      <div className="mt-4 flex flex-wrap items-center gap-3">
        {boutonEnregistrer("px-5 py-2.5")}
        <button
          type="button"
          onClick={() => setOuvert(false)}
          className="rounded-full border border-bord-fort px-5 py-2.5 text-[0.9375rem] text-encre-douce transition-colors hover:border-encre hover:text-encre"
        >
          Annuler
        </button>
      </div>
    </div>
    </>
  );
}

/** Le résultat noté, sur une ligne : ce qui compte se lit sans rouvrir. */
function Resume({ resultat }: { resultat: ResultatFiche }) {
  const { sur, aRevoir, note } = resultat;
  return (
    <p className="text-[0.9375rem] leading-relaxed text-encre-douce">
      <span className="font-bold text-encre">Résultat</span>
      {sur !== null && (
        <>
          {" "}
          <span className="chiffres font-bold text-encre">
            {sur - aRevoir.length} / {sur}
          </span>
          {aRevoir.length === 0 ? (
            <span className="text-fini"> · tout est passé</span>
          ) : (
            <span> · à revoir&nbsp;: {aRevoir.join(", ")}</span>
          )}
        </>
      )}
      {note && (
        <span className="block text-encre-tenue">«&nbsp;{note}&nbsp;»</span>
      )}
    </p>
  );
}
