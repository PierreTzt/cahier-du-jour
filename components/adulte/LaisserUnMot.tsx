import { Section, Carte } from "@/components/adulte/Bureau";
import EcrireUnMot from "@/components/adulte/EcrireUnMot";
import RetirerAvecConfirmation from "@/components/adulte/RetirerAvecConfirmation";
import { retirerUnMot } from "@/app/gestes/valorisation";
import { estParent, type Personne } from "@/lib/session";
import { aujourdhui, journeeDe, ressentiDeposeLe, seancesDe } from "@/lib/journee";
import {
  LIBELLES_DU_MOT,
  dateEnFrancais,
  etatDuMot,
  heureEnFrancais,
  jourDe,
  motsDe,
  ouArriveLeMot,
} from "@/lib/valorisation";

/**
 * Laisser un mot à l'enfant, pour ce jour-là — la valorisation demandée par
 * un parent, sans le jeton.
 *
 * La consigne tient en une ligne et elle est affichée à l'adulte : **on
 * décrit ce qu'on a vu, on ne note pas.** « Je t'ai vu recommencer trois
 * fois » et non « bravo » — le premier constate, le second note, et une note
 * est ce que l'enfant redoute.
 *
 * Pas d'exemples à cliquer, alors que le POC en proposait trois : une phrase
 * toute faite qu'on envoie d'un geste, c'est un bon point avec plus de mots.
 * Le mot vaut parce que quelqu'un a regardé.
 *
 * Les trois adultes écrivent et voient les mots du jour, avec qui les a
 * écrits ; chacun peut retirer le sien. L'enfant n'en lit qu'un, le dernier,
 * et l'écran le dit pour qu'on ne croie pas qu'il les lira tous.
 *
 * Ses parents savent en plus s'il l'a lu : ils lisent le soir. Le proche ne
 * le lit pas, et l'écran ne le lui dit pas même en creux — il lit une phrase
 * qui ne promet rien (voir `etatDuMot`).
 */
export default async function LaisserUnMot({
  journeeId,
  jour,
  moi,
}: {
  journeeId: string;
  jour: string;
  moi: Personne;
}) {
  const parent = estParent(moi);
  const [mots, journee, seances, deposeLe] = await Promise.all([
    motsDe(journeeId, moi.famille_id),
    journeeDe(moi.famille_id, jour),
    seancesDe(journeeId),
    parent ? ressentiDeposeLe(journeeId) : undefined,
  ]);
  const arrivee = ouArriveLeMot(
    { jour, ton: journee.ton, seances: seances.length },
    aujourdhui(),
  );
  /* Là où il passera, on peut dire lequel il lira. Ailleurs — un jour passé,
     un jour où il ne passera pas par son ressenti — on ne dit que lequel est
     le dernier : promettre une lecture serait faux. */
  const lira = arrivee === "ce-soir" || arrivee === "ce-jour-la";

  return (
    <Section
      id="un-mot"
      titre="Un mot pour lui"
      aide={
        <>
          Il le lit ce soir, après avoir dit comment il se sent — le dernier
          laissé seulement. Décrivez ce que vous avez vu&nbsp;: «&nbsp;je t’ai vu
          recommencer la division trois fois&nbsp;», pas «&nbsp;bravo&nbsp;».
        </>
      }
    >
      {arrivee !== "passe" && (
        <Carte className="p-5 sm:p-6">
          {/* Là où il ne passera pas, on le dit avant qu'on écrive : un mot
              qu'on croit avoir donné et qui n'arrive pas est pire que pas de
              mot du tout, parce que personne ne sait qu'il manque. */}
          {(arrivee === "repos" || arrivee === "vide") && (
            <p className="mb-4 border-l-[3px] border-l-ocre pl-3 text-[0.9375rem] leading-relaxed text-encre-douce">
              {arrivee === "repos" ? (
                <>
                  C’est un jour de repos&nbsp;: son écran ne lui propose pas de
                  dire comment il se sent, donc il ne passera pas là où le mot
                  s’affiche.
                </>
              ) : (
                <>
                  Sa journée est vide pour l’instant&nbsp;: sans séance, son
                  écran ne lui propose pas de dire comment il se sent, et il ne
                  verrait pas ce mot.
                </>
              )}
            </p>
          )}
          <EcrireUnMot
            journeeId={journeeId}
            signe={moi.mot_de_l_enfant}
            ceSoir={jour === aujourdhui()}
            dejaPasse={parent && deposeLe !== null && deposeLe !== undefined}
            /* « Il le lira ce soir » seulement là où il passera : la carte
               disait juste au-dessus qu'une journée vide ne le montre pas
               (seconde critique du 16 septembre). */
            promettre={parent && lira}
          />
        </Carte>
      )}

      {arrivee === "passe" && (
        <p className="text-[1.0625rem] leading-relaxed text-encre-tenue">
          Ce jour est passé. Il ne lit que le mot du jour même&nbsp;: laissé
          maintenant, il ne lui parviendrait pas.
        </p>
      )}

      {mots.length > 0 && (
        <ul className="mt-5 space-y-2">
          {mots.map((m) => {
            const deMoi = m.par_adulte === moi.id;
            const etat = etatDuMot(m, mots, journeeId, { lira, deposeLe });
            const compte = etat === "lu" || etat === "lira" || etat === "lira-s-il-rouvre" || etat === "celui-qu-il-lit";
            /* L'heure suffit le jour même ; un mot écrit la veille pour ce
               jour-là dit quand il l'a été. */
            const quand =
              jourDe(m.cree_le) === jour
                ? heureEnFrancais(m.cree_le)
                : `${dateEnFrancais(m.cree_le)}, ${heureEnFrancais(m.cree_le)}`;
            return (
              <li key={m.id}>
                <Carte accent={compte || etat === "dernier" ? "neutre" : undefined} className="p-4">
                  <p className="whitespace-pre-line text-[1.0625rem] leading-relaxed text-encre">
                    {m.texte}
                  </p>
                  <div className="mt-2 flex flex-wrap items-baseline gap-x-3 gap-y-1 text-[0.875rem] text-encre-tenue">
                    <span>
                      {deMoi ? "Vous" : (m.par_prenom ?? "Un adulte qui n’a plus d’accès")}
                      {m.par_mot && <> · signé «&nbsp;{m.par_mot}&nbsp;»</>}
                    </span>
                    <span className="chiffres">{quand}</span>
                    {etat && (
                      <span className={compte ? "font-bold text-encre-douce" : undefined}>
                        {LIBELLES_DU_MOT[etat]}
                      </span>
                    )}
                    {deMoi && (
                      <RetirerAvecConfirmation
                        action={retirerUnMot.bind(null, m.id)}
                        libelle="retirer"
                        question="Il ne le lira plus."
                        oui="retirer ce mot"
                      />
                    )}
                  </div>
                </Carte>
              </li>
            );
          })}
        </ul>
      )}
    </Section>
  );
}
