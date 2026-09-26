import {
  ARRETEES_MINIMUM,
  HASARD_MAXIMUM,
  JOURS_OUVRES,
  descriptionDeLaCase,
  dateEnLettres,
  enTeteDeSemaine,
  lundiDeLaSemaine,
  phraseDuConstat,
  repartitionDesArrets,
  type CaseDuJour,
  type Constat,
  type EtatCase,
  type LigneDeLegende,
  type SemaineDeLaBande,
} from "@/lib/bande";

/**
 * La bande des douze semaines : une colonne par semaine, une ligne par jour.
 *
 * Un vrai tableau, et pas une mosaïque de `div` : un lecteur d'écran s'y
 * déplace ligne par ligne, et chaque case annonce sa date et son état en
 * toutes lettres. Au survol, la même phrase.
 *
 * **Aucun rouge, ici non plus.** Une journée arrêtée est une information, pas
 * une faute : elle est en ocre. Et la couleur ne porte jamais seule
 * l'information — le vert de `fini` et l'ocre ont la même luminance, à un
 * millième près : pour un œil qui ne distingue pas le vert du brun, ce
 * seraient deux carrés identiques. Les états se distinguent donc aussi par la
 * forme :
 *
 *   - menée au bout : pleine ;
 *   - arrêtée en cours : remplie à moitié, sous un contour ocre — la journée
 *     est allée jusqu'à un point. La bande reste continue d'une case à
 *     l'autre, et l'image ne dit pas « barré » ;
 *   - ouverte sans avoir été close : un contour sombre, vide ;
 *   - en cours aujourd'hui : le même contour, avec un point au centre ;
 *   - repos, vacances : des aplats clairs, sans contour — bleu pour le repos,
 *     gris pour les congés. Mesurés à 1,19:1 l'un contre l'autre, ils se
 *     distinguent mal pour certains yeux, et c'est accepté : ni l'un ni
 *     l'autre n'est ce que la bande sert à montrer, et chaque case le dit en
 *     toutes lettres ;
 *   - sans séance posée : un contour en tirets ;
 *   - à venir : un contour fin ; hors de l'année : un simple point.
 *
 * Mesuré sur la page rendue, sur la carte blanche : `fini` 5,57:1, `ocre`
 * 5,55:1, les contours à 3,59:1 au plus clair — c'est `bord-fort`, parce que
 * `bord` n'y fait que 2,75.
 *
 * Le tableau défile dans son propre cadre quand l'écran est étroit : la page,
 * elle, ne défile jamais de côté.
 */

/* Tailwind a besoin de classes littérales : pas de `bg-${x}` composé. */
const FORME: Record<EtatCase, string> = {
  menee: "bg-fini",
  arretee: "border-2 border-ocre bg-carte",
  ouverte: "border-2 border-encre-douce bg-carte",
  "en-cours": "border-2 border-encre bg-carte",
  repos: "bg-reglure",
  conge: "bg-bord/40",
  "sans-seance": "border-2 border-dashed border-bord-fort bg-carte",
  "a-venir": "border border-bord-fort bg-carte",
  "hors-annee": "",
};

function Pastille({ etat, taille }: { etat: EtatCase; taille: "case" | "legende" }) {
  const dimension =
    taille === "case"
      ? "h-[1.875rem] w-[1.875rem] rounded-md md:h-9 md:w-9"
      : "h-4 w-4 rounded-[4px]";
  return (
    <span
      aria-hidden
      className={`relative flex shrink-0 items-center justify-center overflow-hidden ${dimension} ${FORME[etat]}`}
    >
      {etat === "arretee" && <span className="absolute inset-x-0 bottom-0 h-1/2 bg-ocre" />}
      {etat === "en-cours" && (
        <span className={`rounded-full bg-encre ${taille === "case" ? "h-2 w-2" : "h-1.5 w-1.5"}`} />
      )}
      {etat === "hors-annee" && <span className="h-1 w-1 rounded-full bg-bord" />}
    </span>
  );
}

function Case({ c }: { c: CaseDuJour }) {
  const description = descriptionDeLaCase(c);
  return (
    <td className="p-[3px]">
      {/* Le `title` sert au survol ; le texte masqué, au lecteur d'écran. Ce
          qui porte le `title` lui est caché, pour qu'il ne lise pas deux fois
          la même phrase. */}
      <span aria-hidden title={description} className="block">
        <Pastille etat={c.etat} taille="case" />
      </span>
      <span className="sr-only">{description}</span>
    </td>
  );
}

export default function BandeDesJours({
  bande,
  legende,
  constat,
  aujourdhui,
  enfant,
}: {
  bande: SemaineDeLaBande[];
  legende: LigneDeLegende[];
  constat: Constat;
  aujourdhui: string;
  /** Le prénom de l'enfant, ou de quoi le remplacer. */
  enfant: string;
}) {
  const cetteSemaine = lundiDeLaSemaine(aujourdhui);
  const premier = bande[0].cases[0].jour;
  const dernier = bande[bande.length - 1].cases[4].jour;

  return (
    <div>
      <div className="overflow-x-auto pb-2">
        <table className="border-collapse">
          <caption className="sr-only">
            Les journées du {dateEnLettres(premier, { annee: true })} au{" "}
            {dateEnLettres(dernier, { annee: true })}, une colonne par semaine et
            une ligne par jour de la semaine.
          </caption>
          <thead>
            <tr>
              <td />
              {bande.map((s, i) => {
                const { numero, mois } = enTeteDeSemaine(s.lundi);
                /* Le mois ne s'écrit qu'au moment où il change : douze fois
                   « sept. » ne diraient rien de plus qu'une. */
                const nouveauMois = i === 0 || enTeteDeSemaine(bande[i - 1].lundi).mois !== mois;
                const ici = s.lundi === cetteSemaine;
                return (
                  <th
                    key={s.lundi}
                    scope="col"
                    className={`px-[3px] pb-1.5 text-left align-bottom font-normal ${
                      ici ? "text-encre" : "text-encre-tenue"
                    }`}
                  >
                    <span aria-hidden className="block h-4 whitespace-nowrap text-[0.75rem] leading-4">
                      {nouveauMois ? mois : ""}
                    </span>
                    <span
                      aria-hidden
                      className={`chiffres block text-[0.875rem] leading-5 ${ici ? "font-bold" : ""}`}
                    >
                      {numero}
                    </span>
                    <span className="sr-only">
                      Semaine du {dateEnLettres(s.lundi, { annee: true })}
                      {ici ? ", cette semaine" : ""}
                    </span>
                  </th>
                );
              })}
            </tr>
          </thead>
          <tbody>
            {JOURS_OUVRES.map((jour, l) => (
              <tr key={jour}>
                <th
                  scope="row"
                  className="pr-3 text-left text-[0.875rem] font-normal text-encre-douce"
                >
                  {jour}
                </th>
                {bande.map((s) => (
                  <Case key={s.lundi} c={s.cases[l]} />
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* La légende porte les chiffres : elle dit à elle seule tout ce que la
          grille montre, pour qui ne peut pas la voir. Additionnés, ses nombres
          font les soixante cases. */}
      <ul className="mt-5 flex flex-wrap gap-x-6 gap-y-2.5">
        {legende.map((l) => (
          <li key={l.etat} className="flex items-center gap-2 text-[0.9375rem]">
            <Pastille etat={l.etat} taille="legende" />
            <span className="chiffres font-bold text-encre">{l.n}</span>
            <span className="text-encre-douce">{l.libelle}</span>
          </li>
        ))}
      </ul>

      <div className="mt-6 border-l-[3px] border-l-bord-fort pl-4">
        <p className="text-[1.0625rem] leading-relaxed text-encre">{phraseDuConstat(constat)}</p>
        {constat.arretees > 0 && (
          <p className="mt-1 text-[0.9375rem] leading-relaxed text-encre-douce">
            Selon le jour de la semaine&nbsp;: {repartitionDesArrets(constat)}.
          </p>
        )}
        {/* Le relevé ne prétend rien : il compte, et il le dit. */}
        <p className="mt-3 max-w-3xl text-[0.9375rem] leading-relaxed text-encre-tenue">
          C’est une piste à regarder, pas une conclusion. La page compte des
          jours&nbsp;; elle ne sait pas ce qui s’y est passé, et ce qu’on en tire
          se discute avec ceux qui suivent {enfant}. Elle ne signale un jour qu’à
          partir de {ARRETEES_MINIMUM} journées arrêtées, et seulement si un tel
          regroupement avait moins d’une chance sur {Math.round(1 / HASARD_MAXIMUM)}{" "}
          d’arriver par hasard, compte tenu des journées closes chaque jour de la
          semaine.
        </p>
      </div>
    </div>
  );
}
