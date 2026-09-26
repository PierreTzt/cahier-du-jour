# Les écrans

[← Sommaire](README.md)

| Chemin      | Côté     | Ce qu'il fait                                       |
| ----------- | -------- | --------------------------------------------------- |
| `/`         | —        | Deux portes : « Entrer » et « Accès adulte »        |
| `/entrer`   | —        | Le code — quatre chiffres, six pour les adultes     |
| `/journee`  | L'enfant | Sa journée comme un chemin, avec une fin dessinée   |
| `/etape`    | L'enfant | Une séance : le cours puis les exercices — le cours se rouvre à tout moment —, ou la consigne |
| `/ressenti` | L'enfant | Le dépôt d'un ressenti en fin de journée            |
| `/questions`| L'enfant | Le test de positionnement, une question à la fois : une partie par jour, étape de sa journée |
| `/pilotage` | Adulte   | Composer les journées, lire le soir et le portrait  |
| `/a-reprendre` | Adulte | La cloche : les leçons faites seul qui méritent d'être retravaillées |
| `/annee`    | Adulte   | Le plan de l'année, semaine par semaine, et l'écrire |
| `/manuel`   | Adulte   | Les 113 leçons, lisibles en entier — réponses comprises |
| `/fiches`   | Adulte   | De quoi mener les séances qui ne sont pas à l'écran  |
| `/fiche/…`  | Adulte   | Une fiche seule : déroulé, matériel, corrigé          |
| `/preparer` | Adulte   | La journée entière avec tout son matériel, à imprimer |
| `/positionnement` | Adulte | Les 180 questions du test, et ce qui est attendu  |
| `/sources`  | Adulte   | Les textes officiels d'où vient chaque leçon        |
| `/pourquoi` | L'enfant | La boîte à pourquoi : déposer une question, retrouver ce qu'on a exploré |
| `/cahier`   | L'enfant | Ce qu'il a fabriqué, en collection — sans date, sans nombre, sans ordre |
| `/atelier`  | Adulte   | Le parrain lit, prépare et raconte ; les parents lisent |
| `/journal`  | Parents  | Douze semaines côte à côte, puis le détail jour par jour |
| `/releve`   | Parents  | Le document à remettre, pour le soignant ou pour l'inspection |
| `/suivi`    | Parents  | Les consignes du soignant, écrites une fois pour les deux maisons |
| `/controle` | Adulte   | Ce qu'on ouvre le jour de l'inspection, et qui s'imprime |

Les écrans du POC sont revenus branchés sur la base, pas en faisant semblant :
les neuf pages de démonstration qui servaient des faits inventés sur un enfant
réel avaient été supprimées d'abord. Le mot d'un adulte, les traces et les
sorties se notent depuis `/pilotage` ; le rendez-vous du parrain, depuis
`/atelier`.

**Qui lit quoi.** Décision de famille du 14 septembre :

| | Parents | Parrain | L'enfant |
| --- | --- | --- | --- |
| Le soir : son ressenti, les notes des parents | oui | non | ce qu'il dépose, sans historique |
| Le journal, le relevé, le suivi médical | oui | non — la page le lui explique | non |
| Le relevé des exercices, le portrait du test | oui | oui | non |
| L'atelier | lu | écrit | ce qu'il dépose, et des phrases |
| Le mot du jour | oui, et s'il l'a lu | oui, sans savoir s'il l'a lu | le dernier, après son ressenti |
| La vue du contrôle | oui | oui | non |

Aucun document remis à l'extérieur ne contient ce qu'il dépose le soir, ni ses
questions dans ses mots, ni les mots qu'on lui laisse. La version inspection
du relevé et la vue du contrôle ne nomment pas le soignant.

**Les écrans de l'enfant sont à l'enfant.** Un adulte qui ouvre `/journee`
est renvoyé vers le bureau, où il voit la même journée sous son angle à lui ;
et les gestes de l'enfant — cocher, mettre de côté, arrêter, déposer un
ressenti, répondre au test, inscrire un résultat — n'acceptent que sa
session. Sans ça, un parent qui aurait cliqué « J'ai fini » depuis son propre
accès aurait écrit dans le relevé de l'enfant quelque chose que l'enfant n'a
pas fait, et un ressenti déposé par lui aurait été lu le soir comme le sien.

**Le mode d'emploi des adultes.** « Très complet, mais un peu usine à gaz » :
retour des parents le 16 septembre, premier jour réel. Une fenêtre explique
chaque écran du bandeau, une page par écran, en commençant par ce qui répond
au reproche — un seul écran sert tous les jours, La journée. Elle s'ouvre
d'elle-même tant que « J'ai tout compris » n'est pas coché, une fois par jour
au plus (une session tient un an : « à chaque connexion » ne serait jamais
revenu), et se rouvre depuis le bandeau. Le contenu est dans
`lib/mode-emploi.ts`, adapté au parrain ; un écran ajouté au bandeau sans sa
page fait échouer `mode-emploi.test.ts`. L'enfant n'en voit rien. Il n'est
**construit que par le serveur** : il vivait dans le JavaScript de la page
d'accueil, prénom et « soignant » compris, et `confidentialite.test.ts` l'empêche
de revenir. Il ne s'ouvre jamais de lui-même sur le contrôle, le relevé ou la
préparation.

**La journée des adultes suit la journée.** Le mode d'emploi ne suffisait pas :
la critique du 16 septembre a compté sur `/pilotage` huit sections, une
quarantaine de décisions visibles et quatre cents mots, surtout pour justifier
le produit. La page va maintenant dans l'ordre du jour — « Ce matin : sa
journée », « Un mot pour lui », « Ce soir : ce qu'il a fait », le test en une
ligne, puis « Noter autre chose » replié — et chaque section dit en une ligne
ce qu'il en voit. Le portrait du test est sur `/positionnement`, à côté des
questions. Le matériel du jour (`/preparer`) s'imprime, et le résultat des
séances à fiche s'y note sous la fiche.

**Ce que vous menez, ce qu'il fait seul.** Retour d'un parent le
21 septembre : dans « Ce matin », une séance à fiche n'était qu'une ligne
parmi d'autres, avec un lien en bout de ligne. Elle est maintenant une carte
blanche étiquetée « Vous la menez », avec un vrai bouton « Ouvrir la fiche » ;
une leçon reste une ligne, « il la fait seul, à l'écran ». Depuis le soir du
même jour, la liste se dessine **comme son chemin** : le même trait au
crayon, les mêmes pastilles de matière, pleines quand c'est fait, et « il en
est là » sur la séance où il en est. Le parent voit la journée que voit son
fils, de l'autre côté.

**La cloche.** Même jour, même retour : les leçons, l'enfant les fait seul, et
le soir de La journée ne se lit que sur la bonne date. Une cloche dans le
bandeau des adultes s'allume quand une leçon **mérite d'être retravaillée** —
dès deux exercices pas passés, « je ne sais pas » compris, ou quand il l'a mise
de côté. Seuil choisi par le parrain parmi quatre : sur les six leçons des 17 et
18 septembre, deux l'auraient allumée, cinq au premier exercice raté. Elle mène
à `/a-reprendre` : tout l'historique, du plus récent au plus ancien, avec pour
chaque leçon ce qui n'est pas passé et sa reprise, prévue ou faite. Chaque
adulte a la sienne, qui s'éteint quand il l'a ouverte. Une leçon ne se juge
qu'une fois finie, et rien ne change chez l'enfant — son écran lui dit déjà
que son travail part chez papa et maman. Le parrain la voit aussi : le relevé
des exercices lui est ouvert. Ce n'est pas l'alerte sur les mauvaises séries
écartée en septembre : elle porte sur une leçon, pas sur l'enfant, et ne dit
rien de ses journées.

**Au téléphone.** Un parent fait tout depuis le sien ; l'enfant travaille sur
un ordinateur. La critique du 21 septembre, menée à 390 px, comptait sur La
journée un bandeau de quatre lignes et 59 cibles sur 86 sous 44 px. Au
téléphone, le bandeau tient sur une ligne — La journée, la cloche, « Menu » —,
chaque séance a un bouton « Changer » qui déplie ses gestes en vrais boutons,
« Noter le résultat » est à côté de « Ouvrir la fiche », et la fiche ouverte
depuis la journée se note en bas. Les pages pensées pour un ordinateur
(l'année, les fiches, le relevé, le contrôle, le matériel à imprimer) sont
**rangées à part, jamais bloquées** — décision du parrain : une page qui
refuse de s'ouvrir ressemble à une panne. `PRODUCT.md` le dit pour les
prochaines retouches : un écran d'adulte se juge d'abord au téléphone.

**Le poste du jour.** Demandé le même soir — « un genre de poste de
pilotage », les applis de téléphone soignées pour référence. En tête de La
journée, aujourd'hui seulement : où il en est et ce qui vient ensuite, avec
l'action principale (« Ouvrir la fiche ») ; une frise de la journée aux
couleurs des matières ; et « De votre côté », ce qui attend un geste de
l'adulte — un résultat à noter, le mot pour ce soir, ce qu'il a dit, la
cloche. Les chiffres de la semaine (temps d'instruction, séances faites) sont
plus bas, **repliés** : des volumes, pour l'inspection, jamais une réussite
ni un jour comparé à un autre. Les gestes d'une séance s'ouvrent au
téléphone dans un panneau qui monte du bas, s'affichent avant la réponse du
serveur, et se disent dans une notification qui propose de les **annuler** —
sauf « retirer », qui efface et demande donc confirmation. Les composants
viennent de shadcn/ui (`components/ui/`), habillés aux couleurs du cahier :
pas de thème sombre, et `destructive` en ocre.

**Deux maisons.** La note du soir n'écrase plus celle de l'autre parent : si
elle a changé depuis l'ouverture, elle s'affiche avant d'être remplacée. Le ton
dit qui l'a choisi et à quelle heure. Seul l'adulte qui a noté une sortie peut
l'effacer.

---

[← Sommaire](README.md)
