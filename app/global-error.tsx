"use client";

import { useEffect, useState } from "react";
import { peutRecharger, recharger } from "@/lib/recharger";

/**
 * La même chose que `error.tsx`, quand c'est la mise en page elle-même qui
 * casse — l'en-tête lit la base, donc une base qui ne répond pas arrive ici.
 *
 * Cette page remplace tout le document : ni la feuille de style, ni les
 * polices ne sont là. Les couleurs sont donc écrites à la main, reprises des
 * jetons du cahier (papier crème, encre bleu nuit) — et aucune n'est rouge.
 */
export default function ErreurGlobale({ error }: { error: Error & { digest?: string } }) {
  const [attendre, setAttendre] = useState(false);

  useEffect(() => {
    console.error(error);
    const t = setTimeout(() => {
      if (!recharger()) setAttendre(true);
    }, 1200);
    return () => clearTimeout(t);
  }, [error]);

  const texte = { fontSize: "1.125rem", lineHeight: 1.6, color: "#4d5a6a", margin: "1rem 0 0" };

  return (
    <html lang="fr">
      <body
        style={{
          margin: 0,
          minHeight: "100vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "#f6f1e8",
          color: "#1d2836",
          fontFamily: "Georgia, 'Times New Roman', serif",
        }}
      >
        <title>Le cahier du jour</title>
        <main style={{ maxWidth: "34rem", padding: "2rem 1.25rem" }}>
          <h1 style={{ fontSize: "2.5rem", fontWeight: 400, margin: 0 }}>Un instant.</h1>
          {attendre || !peutRecharger() ? (
            <>
              <p style={texte}>
                Le cahier ne répond pas pour l’instant. Rien de ce que tu as fait
                n’est perdu. On pourra y revenir un peu plus tard.
              </p>
              <button
                type="button"
                onClick={() => window.location.reload()}
                style={{
                  marginTop: "2rem",
                  padding: "0.75rem 1.25rem",
                  borderRadius: "999px",
                  border: "1px solid #5c6a7a",
                  background: "transparent",
                  color: "#4d5a6a",
                  fontSize: "0.9375rem",
                  cursor: "pointer",
                }}
              >
                Essayer encore
              </button>
            </>
          ) : (
            <p style={texte}>La page se remet en place.</p>
          )}
        </main>
      </body>
    </html>
  );
}
