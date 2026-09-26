/**
 * Le premier jour, et la seule séance de l'année où l'adulte n'a rien à sortir.
 *
 * Le test du début d'année se fait **à l'écran, seul**. La fiche existe quand
 * même, et pas par symétrie : l'adulte qui ouvre la journée du 16 septembre
 * voit une séance de quatre-vingt-dix minutes sans leçon, et sans elle il
 * chercherait ce qu'il doit préparer. La réponse est « rien », et il vaut
 * mieux l'écrire que de la laisser deviner.
 *
 * Ce qu'une fiche donne, et pourquoi : voir `lib/fiches/types.ts`.
 *
 * **Réservé aux adultes.**
 *
 * Rien de tout ceci n'a été relu par un enseignant. Ça doit l'être.
 */

import { f, type Fiche } from "./types";

export const rentree: Fiche[] = [
  f(
    "re-test-01",
    "Le test du début d’année",
    "Le premier jour · vous n’avez rien à préparer",
    [
      "Il le fait seul, à l’écran, depuis sa journée. Le bouton est en bas de la page. Vous n’avez rien à sortir, rien à corriger, rien à chronométrer.",
      "Sept parties, une à la fois. Une partie entamée se termine — on ne peut pas s’arrêter au milieu — mais entre deux parties, il peut poser l’ordinateur et revenir. Quatre-vingt-dix minutes est une estimation large ; s’il en met cent vingt, ou s’il s’arrête après trois parties et reprend le lendemain, c’est prévu.",
      "Il ne sait jamais s’il a juste. C’est voulu, et c’est la seule chose qu’il faut peut-être lui redire : ce test ne se rate pas, il sert à savoir par où commencer.",
      "Le jour où ça ne va pas : on repousse. Le test n’a aucune date limite, et un enfant qui le passe la gorge serrée donne une photo fausse — c’est exactement l’inverse de ce qu’on cherche.",
    ],
    [
      "Sept parties : les nombres, le calcul, les problèmes, les grandeurs et les mesures, l’espace et la géométrie, les mots et l’orthographe, la lecture et le sens des mots.",
      "Trente-six notions, cent quatre-vingts questions, cinq par notion. Cinq, parce qu’une seule question ne distingue pas la réussite de la chance, ni l’ignorance de l’inattention.",
      "L’étalon est la fin du CE2, pas le CM1 : ce qu’on cherche, c’est ce qui est consolidé de l’année d’avant, pas ce qu’il ne sait pas encore de celle qui commence.",
      "À prévoir quand même : un brouillon et un crayon à côté de lui. Plusieurs questions se posent mieux en écrivant, et il n’y a pas de place pour ça à l’écran.",
      "Ce que vous verrez ensuite : le portrait, en bas de la page de pilotage. Il dit notion par notion ce qui est solide et ce qui ne l’est pas, et il ne lui est jamais montré.",
      "Les cent quatre-vingts questions sont lisibles en entier depuis « Voir les questions », avec ce qui est attendu pour chacune. À lire avant, si vous voulez savoir de quoi on parle ; jamais avec lui.",
    ],
    undefined,
    "Ce jour-là, on ne regarde pas ses réponses, on regarde comment il traverse : s’il s’arrête de lui-même entre deux parties, s’il dit « je ne sais pas » sans se justifier, s’il revient le lendemain sans qu’on le lui demande. C’est cette mécanique-là qui doit tenir toute l’année ; le portrait, lui, se lit le soir et il attendra.",
  ),
];
