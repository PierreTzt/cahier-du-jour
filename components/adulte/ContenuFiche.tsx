import {
  aDesReponses,
  enMorceaux,
  lignesDeLaFiche,
  numeroteeALaMain,
} from "@/lib/fiches/mise-en-page";

/**
 * Le texte d'une fiche, et son matériel avec les réponses en regard.
 *
 * **Écran d'adulte.** Deux pages l'emploient — la fiche seule et la journée à
 * préparer — et elles le rendaient chacune à sa façon, avec le même défaut :
 * les astérisques de gras et les numéros écrits à la main s'affichaient tels
 * quels. Un seul rendu, donc, pour qu'une correction serve aux deux.
 *
 * La décision (quoi numéroter, quelle réponse tient en marge) est prise dans
 * `lib/fiches/mise-en-page.ts`, qui se teste sans navigateur.
 */

/** Une chaîne de fiche, avec ses mots en gras. */
export function TexteFiche({ texte }: { texte: string }) {
  return (
    <>
      {enMorceaux(texte).map((m, i) =>
        m.gras ? (
          <strong key={i} className="font-bold text-encre">
            {m.texte}
          </strong>
        ) : (
          <span key={i}>{m.texte}</span>
        ),
      )}
    </>
  );
}

/**
 * Le matériel, avec la réponse en regard quand la fiche en a une.
 *
 * Une réponse courte — « 56 », « un bateau » — se lit en marge, en gras, d'un
 * coup d'œil : c'est ce que l'adulte cherche en corrigeant une ardoise. Une
 * réponse longue — le test de remplacement d'un homophone, les trois mots
 * d'une série de vocabulaire — se lit sous l'entrée, en texte courant : la
 * serrer en marge et en gras la rendait illisible.
 */
export function MaterielFiche({
  materiel,
  corrige,
  taille = "page",
}: {
  materiel: string[];
  corrige?: string[];
  taille?: "page" | "preparer";
}) {
  const corps = taille === "page" ? "text-[1.0625rem]" : "text-[1rem]";

  if (!aDesReponses(materiel, corrige)) {
    /* Sans réponses, le matériel est de la prose — un texte, un poème, un
       déroulé — et on ne numérote pas de la prose. On garde seulement les
       numéros que l'auteur a écrits, en marge plutôt que dans la phrase. */
    const lignes = lignesDeLaFiche(materiel);
    const numerote = numeroteeALaMain(materiel);
    return (
      <div className="space-y-3">
        {lignes.map((l, i) =>
          numerote && l.numero ? (
            <p key={i} className={`flex gap-3 ${corps} leading-relaxed text-encre`}>
              <span className="chiffres shrink-0 text-encre-tenue">{l.numero}.</span>
              <span>
                <TexteFiche texte={l.texte} />
              </span>
            </p>
          ) : (
            <p key={i} className={`${corps} leading-relaxed text-encre`}>
              <TexteFiche texte={materiel[i]} />
            </p>
          ),
        )}
      </div>
    );
  }

  const lignes = lignesDeLaFiche(materiel, corrige);
  return (
    <ol className="space-y-1.5">
      {lignes.map((l, i) => (
        <li key={i} className="border-b border-bord py-2 last:border-0">
          <div className="flex flex-wrap items-baseline gap-x-4 gap-y-1">
            {l.numero !== null && (
              <span className="chiffres w-6 shrink-0 text-[0.875rem] text-encre-tenue">
                {l.numero}.
              </span>
            )}
            <span className={`min-w-0 flex-1 ${corps} leading-relaxed text-encre`}>
              <TexteFiche texte={l.texte} />
            </span>
            {l.reponse && !l.reponseLongue && (
              <span className={`chiffres ${corps} font-bold text-fini`}>
                <TexteFiche texte={l.reponse} />
              </span>
            )}
          </div>
          {l.reponse && l.reponseLongue && (
            <p
              className={`mt-1.5 text-[0.9375rem] leading-relaxed text-fini ${
                l.numero !== null ? "pl-10" : ""
              }`}
            >
              <TexteFiche texte={l.reponse} />
            </p>
          )}
        </li>
      ))}
    </ol>
  );
}
