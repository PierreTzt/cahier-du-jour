import { classesTeinte } from "@/lib/data";
import type { Carte } from "@/lib/collection";

/**
 * Une collection de cartes, côté enfant.
 *
 * Les cartes sont en pleine largeur, une par ligne — choix du parrain dans le
 * POC. Une pile verticale se compte plus facilement que des colonnes qui
 * coulent ; ce qui l'en empêche tient donc au rythme : des hauteurs
 * franchement inégales, une inclinaison minuscule, aucune date, aucun numéro,
 * et un ordre qui ne suit pas le temps (voir `lib/collection.ts`).
 *
 * Le vocabulaire des cartes décrit une activité, jamais une acquisition :
 * « ce qu'on a fait », pas « ce que tu as appris ». Sinon c'est un bulletin.
 */

const mesures: Record<Carte["format"], { boite: string; titre: string }> = {
  petite: { boite: "px-5 py-5 sm:px-6", titre: "text-[1.125rem]" },
  moyenne: { boite: "px-5 py-7 sm:px-7 sm:py-8", titre: "text-[1.375rem]" },
  grande: { boite: "px-5 py-9 sm:px-8 sm:py-11", titre: "text-[1.625rem]" },
};

/* Stables d'une visite à l'autre, assez faibles pour ne rien coûter en lecture. */
const inclinaisons = ["-0.45deg", "0.35deg", "0.5deg", "-0.3deg"];

export default function Collection({
  cartes,
  vide,
}: {
  cartes: Carte[];
  /**
   * Ce qu'on lit quand il n'y a encore rien. Au futur, toujours : un vide dit
   * au passé est un reproche.
   */
  vide: string;
}) {
  if (cartes.length === 0) {
    return (
      <div className="rounded-feuille border border-dashed border-reglure bg-feuille/60 p-7">
        <p className="text-[1.0625rem] leading-relaxed text-encre-douce">{vide}</p>
      </div>
    );
  }

  return (
    <div className="space-y-5">
      {cartes.map((carte, i) => {
        const t = classesTeinte[carte.etiquette.teinte] ?? classesTeinte.bleu;
        const m = mesures[carte.format];
        return (
          <article
            key={carte.id}
            className={`rounded-feuille border bg-feuille shadow-[0_12px_30px_-26px_rgba(29,40,54,0.5)] ${t.bord} ${m.boite}`}
            style={{ rotate: inclinaisons[i % inclinaisons.length] }}
          >
            <div className="flex items-center gap-2.5">
              <span className={`h-2.5 w-2.5 shrink-0 rounded-full ${t.puce}`} />
              <span className={`etiquette ${t.texte}`}>{carte.etiquette.libelle}</span>
            </div>
            <p className={`font-display mt-3 leading-snug tracking-tight ${m.titre}`}>
              {carte.texte}
            </p>
            {carte.recit && (
              <p className="mt-3 text-[1rem] leading-relaxed text-encre-douce">{carte.recit}</p>
            )}
            <p className="mt-4 text-sm text-encre-tenue">{carte.moment}</p>
          </article>
        );
      })}
    </div>
  );
}
