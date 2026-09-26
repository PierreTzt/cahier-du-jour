/**
 * Écrire l'année entière en base, sans passer par un navigateur.
 *
 * Le bouton « écrire toute l'année » existe dans `/annee` et fait exactement
 * la même chose ; ce script est là pour le cas où il faut poser l'année sans
 * session ouverte — la première mise en service, ou une base repartie de zéro.
 *
 * Il n'écrit rien lui-même : **il imprime du SQL sur la sortie standard.** On
 * peut donc le lire avant de l'appliquer, ce qui est la moindre des choses
 * pour mille lignes insérées dans la journée d'un enfant. Le VPS n'a pas
 * Node ; c'est aussi pour ça que le SQL voyage et pas le programme.
 *
 *   npx tsx deploiement/ecrire-lannee.ts > /tmp/annee.sql
 *   ssh cahier "cd /opt/le-cahier && sg docker -c \
 *     'docker compose exec -T base psql -U cahier -d cahier -v ON_ERROR_STOP=1'" \
 *     < /tmp/annee.sql
 *
 * Trois options :
 *
 *   --depuis AAAA-MM-JJ   ne produire que les journées à partir de cette date ;
 *   --reprendre           **effacer d'abord les journées intactes**, puis les
 *                         réécrire d'après la trame d'aujourd'hui ;
 *   --corps               sans `begin`, sans `commit`, sans en-tête : le SQL
 *                         nu, pour être inclus dans une transaction à soi.
 *
 * ## `--reprendre`, et pourquoi il existe
 *
 * Les mille séances de l'année portent chacune un titre, une matière, une
 * consigne et une durée **copiés** de la trame au moment où on les a écrites.
 * Le jour où le manuel change — une leçon relue qui passe de vingt-cinq à
 * trente minutes, une consigne réécrite, un jour férié oublié — la base et le
 * manuel cessent de dire la même chose, et c'est la base que l'enfant voit.
 *
 * `--reprendre` les raccorde de la seule façon qui ne demande aucune ruse :
 * il jette les journées et les réécrit. Une **journée intacte** est une
 * journée que personne n'a touchée — ton normal, pas de clôture, pas de note,
 * pas de ressenti, aucune séance faite ou mise de côté, aucune séance écrite
 * à la main, aucun résultat inscrit. Tout le reste est laissé tel quel : ce
 * qu'un parent a composé gagne toujours contre la trame, et le travail de
 * l'enfant ne se réécrit jamais.
 *
 * C'est sûr tant que l'année vient d'être posée et que personne n'a encore
 * rien fait. Ça le reste ensuite, mais ça touche alors de moins en moins de
 * journées — ce qui est exactement le comportement voulu.
 *
 * Trois garanties, les mêmes que celles du bouton :
 *
 *   - **rien n'est écrit dans une journée qui a déjà des séances.** Le `where
 *     not exists` le tient en SQL, donc relancer le script ne double rien ;
 *   - `par_adulte` reste nul : la trame n'est de personne, c'est le programme.
 *     Voir `lib/journee.ts` et la migration 009 ;
 *   - `origine = 'trame'`, donc le ton du jour pourra les reprendre.
 *
 * La famille n'est pas nommée ici. `(select id from famille)` échoue si la
 * base en contient deux, ce qui est le bon comportement : mieux vaut une
 * erreur qu'une année écrite dans la mauvaise maison. Et s'il n'y en a
 * aucune — une base neuve — rien n'est écrit et rien n'échoue.
 */

import { joursAvecTrame, trameDuJour, bilanDeLAnnee } from "../lib/trame";

/** Une chaîne SQL. Les apostrophes françaises sont partout dans les consignes. */
const t = (s: string) => `'${s.replace(/'/g, "''")}'`;

const args = process.argv.slice(2);
const corps = args.includes("--corps");
const reprendre = args.includes("--reprendre");

/* `indexOf` rend -1 quand l'option est absente, et `args[-1 + 1]` est alors le
   **premier argument** : sans ce garde, `--reprendre` seul faisait prendre
   « --reprendre » pour une date, et le SQL généré comparait `j.jour >=
   '--reprendre'`. Postgres l'aurait refusé, mais le fichier avait l'air
   normal. */
const iDepuis = args.indexOf("--depuis");
const depuis = iDepuis === -1 ? undefined : args[iDepuis + 1];
if (iDepuis !== -1 && !/^\d{4}-\d{2}-\d{2}$/.test(depuis ?? "")) {
  process.stderr.write("--depuis attend une date AAAA-MM-JJ\n");
  process.exit(2);
}
for (const a of args) {
  if (!["--corps", "--reprendre", "--depuis", depuis].includes(a)) {
    process.stderr.write(`option inconnue : ${a}\n`);
    process.exit(2);
  }
}

const jours = joursAvecTrame().filter((j) => !depuis || j >= depuis);
const bilan = bilanDeLAnnee();

const sortie: string[] = [];
const dire = (s: string) => sortie.push(s);

if (reprendre) {
  const borne = depuis ? `${depuis}` : jours[0];
  dire(`-- Les journées que personne n'a touchées, à partir du ${borne}.`);
  dire(`-- Une seule condition manquante et la journée est laissée telle quelle.`);
  /* Jamais aujourd'hui ni avant : la journée en cours a peut-être un écran
     ouvert chez l'enfant, dont les identifiants de séance changeraient sous
     ses doigts. Et jamais une journée qu'un adulte a retouchée (migration
     019), ni celle qui porte un mot ou un résultat noté : critique du
     16 septembre 2026, où une journée préparée le dimanche était jugée
     « intacte » parce qu'un retrait ne laisse aucune séance derrière lui. */
  dire(`create temporary table journees_intactes on commit drop as`);
  dire(`  select j.id`);
  dire(`    from journee j`);
  dire(`   where j.jour >= '${borne}'`);
  dire(`     and j.jour > (now() at time zone 'Europe/Paris')::date`);
  dire(`     and j.ton = 'normale'`);
  dire(`     and j.cloture is null`);
  dire(`     and j.note = ''`);
  dire(`     and j.retouchee_le is null`);
  dire(`     and not j.sans_test`);
  dire(`     and not exists (select 1 from ressenti r where r.journee_id = j.id)`);
  dire(`     and not exists (select 1 from mot m where m.journee_id = j.id)`);
  dire(`     and not exists (`);
  dire(`           select 1 from resultat_fiche rf join seance s on s.id = rf.seance_id`);
  dire(`            where s.journee_id = j.id)`);
  dire(`     and not exists (`);
  dire(`           select 1 from seance s`);
  dire(`            where s.journee_id = j.id`);
  dire(`              and (s.origine <> 'trame' or s.etat <> 'a-venir'))`);
  dire(`     and not exists (`);
  dire(`           select 1 from travail t join seance s on s.id = t.seance_id`);
  dire(`            where s.journee_id = j.id);`);
  dire("");
  dire(`delete from seance s using journees_intactes i where s.journee_id = i.id;`);
  dire(`delete from journee j using journees_intactes i where j.id = i.id;`);
  dire("");
}

let seances = 0;
const parJour: [string, number][] = [];

for (const jour of jours) {
  const tramee = trameDuJour(jour);
  if (tramee.creneaux.length === 0) continue;

  /* La journée d'abord, créée si elle manque. `on conflict do nothing` plutôt
     qu'un `do update` : il n'y a rien à mettre à jour, et surtout le ton
     choisi par un adulte ne doit pas être réécrit. `select … from famille`
     plutôt que `values ((select id from famille))` : sans famille, zéro ligne
     et pas d'erreur. */
  dire(
    `insert into journee (famille_id, jour) select f.id, '${jour}' from famille f\n` +
      `  on conflict (famille_id, jour) do nothing;`,
  );

  /* La liste `values` ne mentionne pas `j` : `j.id` est pris dans la liste du
     select. Un `values` qui référencerait la table jointe demanderait un
     `cross join lateral`, et c'est une subtilité de trop dans un fichier que
     quelqu'un devra relire un jour. */
  const valeurs = tramee.creneaux
    .map(
      (c, i) =>
        `    (${i + 1}, ${t(c.matiere)}, ${t(c.titre)}, ${t(c.consigne)}, ` +
        `${c.minutes}, ${t(c.lecon ?? "")}, ${t(c.fiche ?? "")})`,
    )
    .join(",\n");

  /* Le `where not exists` est la garantie d'idempotence, et elle est en SQL
     plutôt que dans un `if` du script : c'est la base qui décide, au moment
     de l'insertion, et non le générateur d'après une lecture d'avant. */
  dire(
    `insert into seance\n` +
      `  (journee_id, rang, matiere, titre, reference, consigne, minutes, lecon,\n` +
      `   fiche, par_adulte, origine)\n` +
      `select j.id, v.rang, v.matiere, v.titre, '', v.consigne, v.minutes, v.lecon,\n` +
      `       v.fiche, null, 'trame'\n` +
      `  from journee j\n` +
      `  cross join (values\n${valeurs}\n` +
      `  ) as v (rang, matiere, titre, consigne, minutes, lecon, fiche)\n` +
      ` where j.famille_id = (select id from famille) and j.jour = '${jour}'\n` +
      /* Une journée qu'un adulte a retouchée, ou passée en repos, n'est pas
         vide par oubli : elle l'est par décision. Sans ces deux conditions,
         la trame entière revenait dans un mercredi mis en repos. */
      `   and j.ton = 'normale' and j.retouchee_le is null\n` +
      `   and not exists (select 1 from seance s where s.journee_id = j.id);`,
  );
  dire("");

  seances += tramee.creneaux.length;
  parJour.push([jour, tramee.creneaux.length]);
}

/* Un garde-fou dans le SQL lui-même : une journée écrite par cette
   transaction doit porter exactement les séances que la trame annonce, sinon
   tout est annulé. Une année à moitié écrite serait pire qu'une année pas
   écrite — elle a l'air normale.

   Il comptait avant toutes les séances de trame de la plage, contre le total
   calculé. Or les journées retouchées sont gardées avec leurs séances en
   moins : dès qu'un parent allégeait un jour à venir, la migration suivante
   échouait, et le déploiement avec elle, correctif urgent compris (seconde
   critique du 16 septembre). On ne juge maintenant que ce qui a été écrit
   ici — `cree_le = now()`, l'heure de la transaction — et jamais la partie du
   test, posée à l'affichage. Sans famille, aucune ligne : rien à annuler. */
if (parJour.length > 0) {
  dire(`do $$`);
  dire(`declare manque text;`);
  dire(`begin`);
  dire(`  select string_agg(v.jour::text, ', ') into manque`);
  dire(`    from (values`);
  dire(parJour.map(([jour, n]) => `      ('${jour}'::date, ${n})`).join(",\n"));
  dire(`    ) as v (jour, n)`);
  dire(`    join journee j on j.jour = v.jour and j.famille_id = (select id from famille)`);
  dire(`   where j.cree_le = now()`);
  dire(`     and (select count(*) from seance s`);
  dire(`           where s.journee_id = j.id and s.origine = 'trame' and not s.test) <> v.n;`);
  dire(`  if manque is not null then`);
  dire(`    raise exception 'journées écrites sans toutes leurs séances : %', manque;`);
  dire(`  end if;`);
  dire(`end $$;`);
}

/* L'en-tête est écrite après coup : elle annonce le nombre de séances
   réellement générées, et non `bilan.creneaux`, qui ne compte pas le jour du
   test. Deux chiffres qui divergent de deux unités dans un fichier de mille
   lignes, c'est exactement le genre d'écart qu'on ne remarque jamais. */
const entete = corps
  ? []
  : [
      `-- L'année de CM1, écrite depuis lib/trame.ts${depuis ? ` à partir du ${depuis}` : ""}.`,
      `-- ${jours.length} journées · ${seances} séances · ${bilan.heures} heures de cours dans l'année`,
      reprendre
        ? `-- Les journées intactes sont d'abord effacées, puis réécrites.`
        : `-- Les journées déjà écrites ne sont pas touchées.`,
      `-- Généré le ${new Date().toISOString().slice(0, 10)}. Ne pas modifier à la main :`,
      `-- régénérer avec « npx tsx deploiement/ecrire-lannee.ts${reprendre ? " --reprendre" : ""} ».`,
      "",
      "begin;",
      "",
    ];
const pied = corps ? [] : ["", "commit;"];

process.stdout.write([...entete, ...sortie, ...pied].join("\n") + "\n");

/* Le compte-rendu va sur la sortie d'erreur : la sortie standard est du SQL,
   et doit pouvoir être redirigée telle quelle. */
process.stderr.write(
  `${jours.length} journées, ${seances} séances${depuis ? ` à partir du ${depuis}` : ""} ; ${bilan.heures} heures dans l'année.\n`,
);
