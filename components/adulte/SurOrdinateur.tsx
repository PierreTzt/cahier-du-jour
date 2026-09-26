/**
 * Une ligne, au téléphone seulement, en tête d'une page pensée pour un
 * ordinateur : une année de cinquante écrans, un catalogue, un document à
 * remettre ou à imprimer.
 *
 * Rangée, pas bloquée — décision du parrain, le 21 septembre 2026. Un parent
 * fait tout depuis son téléphone : une page qui refuse de s'ouvrir y
 * ressemblerait à une panne, et le jour où il veut savoir quelle leçon tombe
 * jeudi, elle lui fermerait la seule réponse qu'il a sous la main.
 *
 * Les pages du bandeau qui la portent sont celles marquées `ordinateur` dans
 * `lib/mode-emploi.ts` — `test/mode-emploi.test.ts` tient les deux ensemble.
 */
export default function SurOrdinateur({ imprimer = false }: { imprimer?: boolean }) {
  return (
    <p className="sans-impression mt-5 rounded-feuille border border-bord bg-carte px-4 py-3 text-[0.9375rem] leading-relaxed text-encre-douce sm:hidden">
      {imprimer
        ? "Cette page est faite pour être imprimée, depuis un ordinateur. Tout reste lisible ici, en plus long."
        : "Cette page est pensée pour un ordinateur. Tout reste lisible ici, en plus long."}
    </p>
  );
}
