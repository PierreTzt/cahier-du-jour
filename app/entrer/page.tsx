import { headers } from "next/headers";
import { redirect } from "next/navigation";
import type { CSSProperties } from "react";
import ChampCode from "@/components/ChampCode";
import { entrerAvecCode, personneConnectee, estEnfant, suiteValide } from "@/lib/session";

/**
 * Le code.
 *
 * Deux portes, deux longueurs : quatre chiffres pour l'enfant, six pour les
 * adultes — eux peuvent les retenir, et leur code ouvre le journal.
 *
 * Aucun nom n'est affiché avant d'être entré : le site est public.
 *
 * Et surtout, **rien ne se verrouille**. Un code qui ne passe pas rend
 * l'écran tel quel, vide, sans reproche et sans compteur. Le ralentissement
 * qui protège des machines vit côté serveur, invisible pour qui se trompe
 * une fois.
 */

export const dynamic = "force-dynamic";

async function tenter(formData: FormData) {
  "use server";
  const porte = formData.get("porte") === "adulte" ? "adulte" : "enfant";
  const code = String(formData.get("code") ?? "");

  /* L'adresse qui essaie.
     On prend la **dernière** valeur de X-Forwarded-For, pas la première :
     cet en-tête est écrit par le client, et seule la valeur ajoutée en
     dernier vient du proxy de confiance. Caddy l'écrase de toute façon par
     l'adresse réelle du pair — les deux protections valent mieux qu'une,
     puisque c'est tout ce qui empêche d'essayer dix mille codes. */
  const entetes = await headers();
  const transmis = entetes.get("x-forwarded-for")?.split(",").pop()?.trim();
  const ip = transmis || entetes.get("x-real-ip") || "inconnue";

  /* La page qu'un adulte avait sous les yeux quand sa session s'est fermée. */
  const suite = String(formData.get("suite") ?? "");

  const personne = await entrerAvecCode(porte, code, ip);
  if (personne) redirect(arrivee(estEnfant(personne), suite));
  redirect(`/entrer?a=${porte}${suiteValide(suite) ? `&suite=${encodeURIComponent(suite)}` : ""}`);
}

/** Où arriver une fois entré : l'enfant sur sa journée, l'adulte là où il était. */
const arrivee = (enfant: boolean, suite?: string) =>
  enfant ? "/journee" : suiteValide(suite) ? suite : "/pilotage";

export default async function Entrer({
  searchParams,
}: {
  searchParams: Promise<{ a?: string; suite?: string }>;
}) {
  const { a, suite } = await searchParams;
  const deja = await personneConnectee();
  if (deja) redirect(arrivee(estEnfant(deja), suite));

  const porte = a === "adulte" ? "adulte" : "enfant";
  const enfant = porte === "enfant";

  return (
    <main
      className="reglure chaleur flex flex-1 flex-col"
      style={{ "--force-reglure": 0.45 } as CSSProperties}
    >
      <div className="au-dessus mx-auto flex w-full max-w-lg flex-1 flex-col justify-center px-5 py-20 sm:px-8">
        <h1 className="font-display text-[2.25rem] leading-tight tracking-tight sm:text-[2.75rem]">
          {enfant ? "Ton code." : "Votre code."}
        </h1>

        <form action={tenter} className="mt-10">
          <input type="hidden" name="porte" value={porte} />
          {!enfant && suiteValide(suite) && <input type="hidden" name="suite" value={suite} />}
          <ChampCode longueur={enfant ? 4 : 6} />
        </form>
      </div>
    </main>
  );
}
