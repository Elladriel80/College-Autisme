# Journal des modifications

Toutes les évolutions notables de l'application sont consignées ici.

## [Non publié] — Corrections de l'audit pédagogique (2026-06-03)

Cette série applique les corrections **prioritaires** de l'`Audit-pedagogique.md`
(🟥 bloquant · 🟧 majeur · 🟨 mineur). Aucune régression : la progression des
enfants est préservée (mêmes clés `localStorage` `rds_*` côté Royaume, score des
petits namespacé par profil). Vérifié par **72 assertions jsdom** (origine
`https://`) sur le Royaume et **10** sur la version autonome.

### Ajouté / Modifié

- **🟧 A — Intégration native des Petits Malins (sans iframe).**
  Le monde des petits s'affichait via une `<iframe srcdoc>`, ce qui créait un
  **double en-tête** (topbar du Royaume + header interne) et un effet
  « page-dans-la-page ». Le module est désormais **intégré nativement** dans
  `#app` :
  - encapsulé dans `window.PM` (IIFE) → **zéro collision** avec les globaux du
    Royaume (`state`, `app`, `r`, `parler`, `gagner`, `entete`, `confettis`…) ;
  - **CSS scopé** sous `#pmRoot` (`<style id="pmStyle">`) → ne déteint plus sur
    le Royaume (`*`, `body`, `.wrap`, `.feedback`, `.logo`, `@keyframes pop/fall`
    renommés `pm*`) ;
  - **un seul en-tête** (la topbar du Royaume) ; sélecteur d'âge 🐣/🦉, score et
    mode calme dans un bandeau sobre, sans footer étranger ;
  - score sauvegardé **par profil** (`pm_<id>_score`).

- **🟥 B — Carte mentale au bon moment.**
  Suppression des boutons « 🧠 Carte mentale & vidéos » placés en **tête** de
  chaque menu (non-sens pédagogique) et des **liens de recherche YouTube
  ouverts** (sécurité/autonomie d'un jeune enfant). La carte mentale devient une
  **synthèse de fin d'activité** (« ce que tu as appris »), affichée après une
  série de bonnes réponses.

- **🟧 C — Feedback formatif + repli écrit.**
  - Sur une erreur : la **bonne réponse est révélée** et un **mini-indice** est
    donné (fini le « Essaie encore » muet).
  - Les jeux d'écoute sont **jouables sans son** : la cible (lettre, mot) est
    aussi **affichée en clair**.
  - La réussite/erreur est signalée par un **symbole ✓/✗** en plus de la
    couleur (accessibilité daltonisme).
  - « Remettre la phrase en ordre » : **retour arrière** (retirer le dernier
    mot) et **comparaison tolérante** à la casse/ponctuation.

- **🟧 D — Mode calme côté petits.**
  Nouveau **mode calme persistant** (`pm_<id>_calme`) : coupe confettis,
  animations et **voix automatique** (le bouton 🔊 reste actif à la demande).

- **🟨 E — Corrections factuelles.**
  - **Christophe Colomb** : le texte ne dit plus « il a découvert le continent
    Amérique » mais « il a atteint des terres inconnues des Européens, en
    Amérique (d'abord des îles des Caraïbes) » — exact pour 1492.
  - Jeu **« Le son des lettres »** → renommé **« La première lettre »** : la
    consigne parle bien de la **lettre** (ce que le code compare réellement).
  - **Leçon « Les fractions »** (Royaume) : le distracteur absurde **`4/0`**
    (division par zéro) devient **`4`** (erreur d'élève plausible : oubli du
    dénominateur), avec une explication adaptée.

### Corrigé (bonus, faible risque)

- **🟧 Virgule décimale au Brevet blanc** : `_norm` aligné sur `norm` des leçons
  → « 4,25 » est accepté comme « 4.25 » (piège latent supprimé).
- **🟨 Drapeau / langue anglaise** : code voix harmonisé `en-US` → **`en-GB`**
  (cohérent avec le drapeau 🇬🇧).
- **🟨 Zoom réactivé** sur la version autonome (`user-scalable=no` retiré).
- **🟨 Cibles tactiles** agrandies (pavé numérique, boutons-mots : min ~48 px).
- **🟨 `aria-label`** ajoutés sur les boutons-emojis, `role`/`aria-label` sur les
  cartes mentales SVG, `aria-pressed` sur le bouton mode calme.

## À suivre (points d'audit non encore traités)

- **🟧 Phase de découverte avant l'exercice** (Petits Malins, Lecture/Calcul/
  Langues) : ajouter une courte modélisation (« 2 + 3 » illustré) avant le QCM.
- **🟧 Garde-fou temps d'écran** : message de pause après N activités, streak
  rendu optionnel/non culpabilisant.
- **🟧 Saisie au Royaume** : proposer une 2ᵉ tentative *guidée* plutôt que
  d'afficher directement la réponse.
- **🟨 Carte mentale du Royaume** : champ `motsCles` explicite par leçon pour
  fiabiliser l'extraction automatique.
- **🟨 Accessibilité fine** : style `:focus-visible` et test complet de la
  navigation au clavier ; contrastes des textes « muted » du Royaume ;
  `prefers-reduced-motion` ; agrandir la police des nœuds SVG du Royaume.
- **🟨 Vidéos du Royaume** : remplacer la recherche YouTube ouverte (`results?
  search_query`) par une liste fermée de vidéos validées (comme côté petits).
- **🟨 Viser vraiment le Brevet** : niveau **3ᵉ**, **minuteur** optionnel au
  Brevet blanc, au moins une question à **réponse rédigée** par épreuve.
