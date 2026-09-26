# Développer

[← Sommaire](README.md)

```bash
npm install
npm run dev
npm test      # la projection destinée à l'enfant : aucun agrégat
npm run lint  # depuis Next 16, `next build` ne lance plus le linter
npx tsx controle/verifier-arithmetique.ts          # recalcule les opérations du manuel
npx tsx controle/verifier-matiere.ts lib/programme/maths.ts   # la structure d'une matière
```

Le dossier `controle/` tient les deux outils qui servent à relire le manuel
sans rien connaître du reste : l'un recalcule chaque énoncé qui est une
opération écrite en clair, l'autre vérifie la structure d'une seule matière
et signale les mots qu'un enfant qui vient d'échouer lirait comme un
reproche.

---

[← Sommaire](README.md)
