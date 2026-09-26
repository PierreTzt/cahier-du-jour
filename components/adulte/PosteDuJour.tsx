import Link from "next/link";
import { classesTeinte, matieres, type MatiereId } from "@/lib/data";
import type { ClotureJour, TonJour } from "@/lib/journee";

/**
 * Le poste du jour : ce qu'un parent voit en ouvrant son téléphone.
 *
 * Demandé par le parrain le 21 septembre 2026 au soir — « un genre de poste de
 * pilotage », avec les applis soignées pour référence. Un poste de pilotage
 * qu'on trouve en ligne, c'est d'ordinaire des indicateurs ; celui-ci répond
 * à trois questions qui se posent un matin de classe, dans l'ordre :
 *
 *   1. **où il en est**, et ce que ça demande de vous — une séance que vous
 *      menez s'ouvre d'ici, sans chercher sa carte ;
 *   2. **la journée d'un coup d'œil**, une frise aux couleurs des matières :
 *      ce qui est fait est plein, ce qui vient est gris — la couleur dit la
 *      matière et l'état, jamais la réussite ;
 *   3. **ce qui vous attend**, vous : un résultat à noter, le mot pour ce
 *      soir, ce qu'il a dit de sa journée, la cloche.
 *
 * Rien ici ne mesure l'enfant. Les volumes de la semaine, qui servent à
 * l'inspection, sont plus bas, repliés.
 */

export type SeanceDuPoste = {
  id: string;
  titre: string;
  matiere: string;
  test?: boolean;
  etat: string;
  minutes: number;
  lecon: string;
  fiche: string;
};

export type AFaire = {
  cle: string;
  texte: string;
  detail?: string;
  href: string;
  /** Ce qui se dessine devant la ligne. */
  signe: "noter" | "mot" | "ressenti" | "cloche" | "note";
  /** Une teinte de `classesTeinte`, pour la pastille. */
  teinte?: string;
};

const teinteDe = (s: { matiere: string; test?: boolean }) =>
  classesTeinte[s.test ? "encre-douce" : (matieres[s.matiere as MatiereId]?.teinte ?? "encre-douce")];

const nomDe = (s: { matiere: string; test?: boolean }) =>
  s.test ? "Le test" : (matieres[s.matiere as MatiereId]?.nom ?? s.matiere);

function duree(minutes: number) {
  const h = Math.floor(minutes / 60);
  const m = minutes % 60;
  if (h === 0) return `${m} min`;
  return m === 0 ? `${h} h` : `${h} h ${String(m).padStart(2, "0")}`;
}

export default function PosteDuJour({
  seances,
  idIci,
  cloture,
  ton,
  aFaire,
}: {
  seances: SeanceDuPoste[];
  idIci?: string;
  cloture: ClotureJour | null;
  ton: TonJour;
  aFaire: AFaire[];
}) {
  const ici = seances.find((s) => s.id === idIci);
  const apres = ici
    ? seances.slice(seances.indexOf(ici) + 1).filter((s) => s.etat === "a-venir").slice(0, 2)
    : [];
  const total = seances.reduce((n, s) => n + s.minutes, 0);
  const fait = seances.filter((s) => s.etat === "faite").reduce((n, s) => n + s.minutes, 0);

  return (
    <section
      aria-label="Le poste du jour"
      className="mt-5 overflow-hidden rounded-[20px] border border-bord bg-carte shadow-[0_22px_44px_-32px_rgba(29,40,54,0.55)]"
    >
      {/* 1. Où il en est */}
      <div className="px-4 pb-4 pt-4 sm:px-6 sm:pt-5">
        {ton === "repos" && seances.length === 0 ? (
          <>
            <p className="text-[0.875rem] text-encre-tenue">Aujourd’hui</p>
            <p className="mt-1 font-display text-[1.5rem] leading-snug tracking-tight">
              Jour de repos
            </p>
            <p className="mt-1 text-[0.9375rem] leading-relaxed text-encre-douce">
              Son écran lui dit que c’est prévu.
            </p>
          </>
        ) : cloture ? (
          <>
            <p className="text-[0.875rem] text-encre-tenue">Aujourd’hui</p>
            <p className="mt-1 font-display text-[1.5rem] leading-snug tracking-tight">
              {cloture === "terminee" ? "Il a fini sa journée." : "Il s’est arrêté là."}
            </p>
            <Link
              href="#ce-soir"
              className="mt-3 inline-flex min-h-11 items-center rounded-full bg-encre px-5 text-[0.9375rem] font-bold text-carte transition-colors hover:bg-encre/85"
            >
              Lire ce qu’il a fait
            </Link>
          </>
        ) : ici ? (
          <>
            <p className="flex items-center gap-2 text-[0.875rem] text-encre-tenue">
              <span
                aria-hidden
                className={`halo size-2.5 rounded-full ${teinteDe(ici).puce} ${teinteDe(ici).texte}`}
              />
              Maintenant
              <span aria-hidden>·</span>
              <span className={`etiquette ${teinteDe(ici).texte}`}>{nomDe(ici)}</span>
            </p>
            <p className="mt-1.5 font-display text-[1.5rem] leading-snug tracking-tight text-balance">
              {ici.titre}
            </p>
            <p className="mt-1 text-[0.9375rem] text-encre-douce">
              <span className="chiffres">{ici.minutes} min</span>
              {" · "}
              {ici.test
                ? "il le fait seul, à l’écran"
                : !ici.lecon && ici.fiche
                  ? <strong className="font-bold text-encre">vous la menez</strong>
                  : ici.lecon
                    ? "il la fait seul, à l’écran"
                    : "écrite à la main"}
            </p>

            {/* L'action principale, pleine largeur au téléphone : c'est elle
                qu'on vient chercher le matin. */}
            {!ici.lecon && ici.fiche ? (
              <Link
                href={`/fiche/${ici.fiche}?seance=${ici.id}`}
                className="mt-4 flex min-h-12 w-full items-center justify-center rounded-full bg-encre px-5 text-[1rem] font-bold text-carte transition-colors hover:bg-encre/85 active:bg-encre/80 sm:inline-flex sm:w-auto"
              >
                Ouvrir la fiche
              </Link>
            ) : ici.lecon ? (
              <Link
                href={`/manuel/${ici.lecon}`}
                className="mt-4 flex min-h-12 w-full items-center justify-center rounded-full border border-bord-fort bg-carte px-5 text-[1rem] text-encre transition-colors hover:border-encre sm:inline-flex sm:w-auto"
              >
                Voir la leçon
              </Link>
            ) : null}

            {apres.length > 0 && (
              <p className="mt-4 flex flex-wrap items-center gap-x-3 gap-y-1 text-[0.9375rem] text-encre-douce">
                <span className="text-encre-tenue">Ensuite</span>
                {apres.map((s) => (
                  <span key={s.id} className="flex items-center gap-1.5">
                    <span aria-hidden className={`size-2 rounded-full ${teinteDe(s).puce}`} />
                    {s.titre}
                  </span>
                ))}
              </p>
            )}
          </>
        ) : seances.length > 0 ? (
          <>
            <p className="text-[0.875rem] text-encre-tenue">Aujourd’hui</p>
            <p className="mt-1 font-display text-[1.5rem] leading-snug tracking-tight">
              Tout est fait ou mis de côté.
            </p>
          </>
        ) : (
          <>
            <p className="text-[0.875rem] text-encre-tenue">Aujourd’hui</p>
            <p className="mt-1 font-display text-[1.5rem] leading-snug tracking-tight">
              Rien de prévu.
            </p>
          </>
        )}

        {/* 2. La frise : une case par séance, de la largeur de sa durée. */}
        {seances.length > 0 && (
          <div className="mt-5">
            <div className="flex h-2.5 gap-[3px]" aria-hidden>
              {seances.map((s) => {
                const t = teinteDe(s);
                return (
                  <span
                    key={s.id}
                    style={{ flexGrow: s.minutes, flexBasis: 0 }}
                    className={`rounded-full ${
                      s.etat === "faite"
                        ? t.puce
                        : s.etat === "reportee"
                          ? "bg-ocre/35"
                          : s.id === idIci
                            ? `${t.puce} opacity-40`
                            : "bg-bureau shadow-[inset_0_0_0_1px_var(--color-bord)]"
                    }`}
                  />
                );
              })}
            </div>
            <p className="chiffres mt-2 text-[0.875rem] text-encre-tenue">
              {fait > 0 ? `${duree(fait)} faites sur ${duree(total)}` : `${duree(total)} prévues`}
              {" · "}
              {seances.length} séance{seances.length > 1 ? "s" : ""}
            </p>
          </div>
        )}
      </div>

      {/* 3. Ce qui vous attend. */}
      <div className="border-t border-bord">
        <p className="px-4 pb-1 pt-3 text-[0.875rem] text-encre-tenue sm:px-6">De votre côté</p>
        {aFaire.length === 0 ? (
          <p className="px-4 pb-4 pt-1 text-[0.9375rem] text-encre-douce sm:px-6">
            Rien ne vous attend pour l’instant.
          </p>
        ) : (
          <ul className="pb-1.5">
            {aFaire.map((a) => (
              <li key={a.cle}>
                <Link
                  href={a.href}
                  className="flex min-h-[52px] items-center gap-3 px-4 py-2 transition-colors hover:bg-bureau/60 active:bg-bureau sm:px-6"
                >
                  <Signe signe={a.signe} teinte={a.teinte} />
                  <span className="min-w-0 flex-1">
                    <span className="block text-[1rem] leading-snug text-encre">{a.texte}</span>
                    {a.detail && (
                      <span className="block text-[0.875rem] leading-snug text-encre-tenue">
                        {a.detail}
                      </span>
                    )}
                  </span>
                  <span aria-hidden className="text-[1.125rem] text-encre-tenue">
                    ›
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        )}
      </div>
    </section>
  );
}

/** Ce qui se dessine devant une ligne : une pastille, une plume, la cloche. */
function Signe({ signe, teinte }: { signe: AFaire["signe"]; teinte?: string }) {
  const t = teinte ? classesTeinte[teinte] : undefined;
  const boite = "flex size-8 shrink-0 items-center justify-center rounded-full";
  if (signe === "noter" && t) {
    return (
      <span aria-hidden className={`${boite} bg-bureau`}>
        <span className={`size-3.5 rounded-full border-2 ${t.anneau}`} />
      </span>
    );
  }
  if (signe === "ressenti" && t) {
    return (
      <span aria-hidden className={`${boite} bg-papier-chaud shadow-[inset_0_0_0_1px_var(--color-reglure)]`}>
        <span className={`size-3 rounded-full ${t.puce}`} />
      </span>
    );
  }
  if (signe === "cloche") {
    return (
      <span aria-hidden className={`${boite} relative bg-bureau text-encre`}>
        <svg viewBox="0 0 24 24" width="17" height="17" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
          <path d="M6 16v-5a6 6 0 0 1 12 0v5l1.5 2h-15z" />
          <path d="M10 20.5a2 2 0 0 0 4 0" />
        </svg>
        <span className="absolute right-0.5 top-0.5 size-2.5 rounded-full bg-miel shadow-[0_0_0_2px_var(--color-carte)]" />
      </span>
    );
  }
  /* Le mot pour ce soir, la note du soir : une plume. */
  return (
    <span aria-hidden className={`${boite} bg-bureau text-encre`}>
      <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M4 20h4L19 9a2.8 2.8 0 0 0-4-4L4 16z" />
        <path d="M13.5 6.5l4 4" />
      </svg>
    </span>
  );
}

