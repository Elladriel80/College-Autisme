# Journal des modifications

Toutes les évolutions notables de l'application sont consignées ici.

## [Non publié] — Niveau 3ᵉ + Brevet blanc en conditions réelles (2026-06-03)

Ajoute l'**année du Brevet (3ᵉ)** et rend le **Brevet blanc** plus proche de
l'épreuve réelle. Aucune régression : `STATE`, clés `rds_*` et monde Petits
Malins (rendu natif) préservés. Vérifié par **79 assertions jsdom** (origine
`https://`), dont la **vérification factuelle** du contenu de 3ᵉ (recalculs maths,
dates, définitions).

### Ajouté — Programme de 3ᵉ (12 leçons, 60 questions)

Chaque matière gagne 3 leçons `niveau:"3e"` (cours avec termes en gras pour la
carte mentale auto, vidéo via la recherche ciblée, 5 questions avec explication
formative), affichées **après la 4ᵉ** (progression 6ᵉ → 5ᵉ → 4ᵉ → 3ᵉ) :

- **Maths** : Théorème de Thalès · Fonctions linéaires et affines · Notation scientifique.
- **Français** : Les figures de style · Voix active et voix passive · Argumenter (thèse, arguments, exemples).
- **Histoire-Géo-EMC** : Première Guerre mondiale (1914-1918) · Seconde Guerre mondiale (1939-1945) · La Vᵉ République et la laïcité (EMC).
- **Sciences** : L'énergie et ses conversions · Acides, bases et pH · Génétique (ADN, chromosomes, hérédité).

Total : **47 leçons · 217 questions** (contre 35 · 157).

### Ajouté — Brevet blanc « conditions réelles »

- **Minuteur optionnel** : compte à rebours discret (~1 min 15/question) activable
  sur l'écran d'intro ; à l'expiration, **soumission automatique** vers les
  résultats (les questions non traitées comptent comme à l'examen). Option
  **« sans minuteur »** par défaut (entraînement non chronométré, rassurant),
  sans clignotement ni alarme. Choix de **longueur** (standard ~12 / court ~8).
- **Pondération 3ᵉ** : le vivier privilégie les questions de 3ᵉ (~2/3) tout en
  gardant un mélange collège (toujours hors 6ᵉ).
- **Question rédigée** d'entraînement : une question ouverte (zone de texte)
  **hors note /20** ; après coup, affichage d'une **réponse-modèle** et d'une
  **grille d'auto-évaluation** (3-4 critères à cocher). La note /20 reste calculée
  **uniquement** sur les questions auto-corrigeables (QCM/VF/saisie) — on ne note
  pas automatiquement un texte libre (ce serait peu fiable et anti-pédagogique).

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
- **🟨 Étoffer la 3ᵉ** : 2-3 leçons par matière couvrent l'essentiel ; on pourra
  ajouter d'autres notions (probabilités/statistiques, identités remarquables…)
  et viser 15-30 questions par notion (répétition espacée).
- **🟨 Oral du Brevet & contrôle continu** : un module « préparer l'oral » reste
  à concevoir (le Brevet réel comporte un oral, non simulé ici).

> ✅ **Traités dans la version « Niveau 3ᵉ + Brevet réel »** (voir en haut) :
> ajout du **niveau 3ᵉ**, **minuteur** optionnel au Brevet blanc et **question
> rédigée** auto-évaluée par épreuve.
