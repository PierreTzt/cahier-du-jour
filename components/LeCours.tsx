import type { LeconPosee } from "@/lib/programme";

/**
 * Le cours d'une leçon, tel que l'enfant le lit : les parties, les règles à
 * retenir, puis les exemples traités.
 *
 * Deux endroits l'affichent — la première lecture, avant les exercices, et
 * le panneau qui le rouvre pendant les exercices (`CoursAPortee`). Un seul
 * rendu pour les deux : le cours qu'il relit est mot pour mot celui qu'il a
 * lu.
 *
 * `marquee` désigne la partie qu'il est venu relire depuis une correction.
 * Elle est posée sur une feuille, son titre passé au surligneur, comme on
 * montre du doigt une ligne du cahier de leçons — rien qui ressemble à une
 * faute signalée.
 */
export default function LeCours({
  lecon,
  marquee = null,
}: {
  lecon: Pick<LeconPosee, "cours" | "exemples">;
  marquee?: number | null;
}) {
  return (
    <>
      {lecon.cours.map((p, i) => {
        const ici = i === marquee;
        return (
          <section
            key={i}
            data-partie={i}
            className={`${i === 0 ? "" : "mt-9"} ${
              ici ? "-mx-4 rounded-feuille border border-reglure bg-feuille px-4 py-5 sm:-mx-5 sm:px-5" : ""
            }`}
          >
            {p.titre && (
              <h2 className="font-display text-[1.375rem] leading-snug tracking-tight text-encre sm:text-[1.5rem]">
                <span className={ici ? "surligne" : undefined}>{p.titre}</span>
              </h2>
            )}
            <div className={p.titre ? "mt-3 space-y-3" : "space-y-3"}>
              {p.texte.map((t, j) => (
                <p key={j} className="text-[1.0625rem] leading-relaxed text-encre">
                  {gras(t)}
                </p>
              ))}
            </div>
            {p.regle && (
              <p className="mt-5 rounded-feuille border border-l-[6px] border-reglure border-l-ocre bg-feuille p-4 text-[1.0625rem] leading-relaxed text-encre sm:p-5">
                <span className="etiquette mb-1.5 block text-encre-tenue">
                  À retenir
                </span>
                {gras(p.regle)}
              </p>
            )}
          </section>
        );
      })}

      {lecon.exemples.length > 0 && (
        <section className="mt-10">
          <h2 className="font-display text-[1.375rem] leading-snug tracking-tight sm:text-[1.5rem]">
            {lecon.exemples.length > 1 ? "Des exemples" : "Un exemple"}
          </h2>
          <div className="mt-4 space-y-4">
            {lecon.exemples.map((ex, i) => (
              <div
                key={i}
                className="rounded-feuille border border-reglure bg-feuille p-5 sm:p-6"
              >
                <p className="text-[1.0625rem] font-bold leading-relaxed text-encre">
                  {gras(ex.enonce)}
                </p>
                <ol className="mt-3 space-y-1.5">
                  {ex.etapes.map((et, j) => (
                    <li
                      key={j}
                      className="flex gap-3 text-[1.0625rem] leading-relaxed text-encre-douce"
                    >
                      <span className="chiffres shrink-0 text-encre-tenue">
                        {j + 1}.
                      </span>
                      <span>{gras(et)}</span>
                    </li>
                  ))}
                </ol>
                <p className="mt-3 border-t border-reglure pt-3 text-[1.0625rem] text-encre">
                  <span className="etiquette mr-2 text-encre-tenue">
                    Résultat
                  </span>
                  <span className="chiffres font-bold">{ex.resultat}</span>
                </p>
              </div>
            ))}
          </div>
        </section>
      )}
    </>
  );
}

/**
 * Les passages entre doubles astérisques passent en gras.
 *
 * Une leçon a besoin d'insister — « le **chiffre** des centaines » contre
 * « le **nombre** de centaines », c'est tout le sens du paragraphe. Écrire du
 * JSX pour chaque mot important rendrait le manuel illisible dans l'éditeur,
 * or il doit pouvoir être relu par quelqu'un du métier.
 */
export function gras(texte: string) {
  return texte.split(/\*\*(.+?)\*\*/g).map((bout, i) =>
    i % 2 === 1 ? (
      <strong key={i} className="font-bold text-encre">
        {bout}
      </strong>
    ) : (
      bout
    ),
  );
}
