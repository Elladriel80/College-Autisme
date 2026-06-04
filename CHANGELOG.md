# Journal des modifications

Toutes les évolutions notables de l'application sont consignées ici.

## [Non publié] — Refonte 2026-06-04 : Collegica (synthèse)

Synthèse de la session de refonte (détails dans les entrées suivantes) :

- **Renommage** en **Collegica** (le monde collège garde « Le Royaume du Savoir », le primaire « Les Petits Malins »).
- **Contenu** collège : **47 → 94 leçons**, **217 → 796 questions** (6ᵉ=22, 5ᵉ=25, 4ᵉ=27, 3ᵉ=20) ; 5ᵉ remplie, niveaux fiabilisés ; **Algorithmique/Scratch** et **Technologie** ajoutés.
- **MATHGEN** étendu à **16 thèmes** (division euclidienne, volumes, probabilités, cosinus en plus), réponses vérifiées par 400 tirages par générateur.
- **Cartes mentales** : nouveau rendu SVG + champ `carte` rédigé ; **100 % des leçons (94/94)** ont une carte (centre + 4 à 6 branches).
- **Démarrage** toujours sur l'accueil + bouton **« Reprendre »** par profil (clé `rds_last`).
- **Accessibilité** : `:focus-visible`, `prefers-reduced-motion`, ✓/✗ renforcé (daltonisme).
- **Déploiement Vercel** auto sur `push` (`vercel.json` + `.vercelignore`), en ligne sur `royaume-savoir.vercel.app`.
- **Qualité** : calculs recalculés justes, faits vérifiés (audit `enseignant`, 0 bloquant), zéro tiret cadratin, offline-first + `dist/` autonome préservés.

## [Non publié] — Objectif 1 : montée en charge du contenu collège (2026-06-04)

Le collège passe de **47 à 70 leçons** et de **217 à 508 questions**, par vagues vérifiées
(audit `enseignant`, calculs recalculés, faits contrôlés, zéro tiret cadratin), testées en
navigateur, build `dist/` régénéré et déployées sur Vercel à chaque lot.

- **Niveaux fiabilisés** : les 14 leçons sans `niveau` sont corrigées ; la **5ᵉ**, jusque-là
  vide, est désormais peuplée. Plus aucune leçon « sans niveau ».
- **6ᵉ** : Histoire-Géo (Préhistoire, Mésopotamie & écriture, Rome), Maths (division
  euclidienne & divisibilité, symétrie axiale), Français (homophones a/à·et/est·son/sont,
  groupe nominal & accords), Sciences (mélanges & solutions, objets techniques).
- **5ᵉ** : Maths (symétrie centrale, aires triangle/parallélogramme), Français (futur,
  homophones ses/ces·on/ont·ou/où, passé composé), Sciences (photosynthèse).
- **4ᵉ** : Histoire (XIXᵉ : industrialisation & colonisation), Français (accord du participe
  passé, conditionnel présent), Sciences (mouvement & vitesse, masse volumique, chaîne
  d'énergie / d'information).
- **3ᵉ** : Maths (programmer avec Scratch : boucles, conditions, coordonnées).
- **Gaps du brief comblés** : **Algorithmique/Scratch** (Maths 4ᵉ et 3ᵉ) et **Technologie**
  (objets techniques 6ᵉ, chaîne d'énergie/information 4ᵉ), qui étaient à 0 %.

Répartition par niveau : 6ᵉ=19, 5ᵉ=18, 4ᵉ=20, 3ᵉ=13.

## [Non publié] — Démarrage sur l'accueil + dépôt prêt pour Vercel (2026-06-04)

### Ergonomie de démarrage (`Royaume-du-Savoir.html`)

- Au lancement, l'app **affiche désormais toujours la page d'accueil** (sélection de
  profil). Fini la replongée automatique dans le dernier monde, qui empêchait de voir
  l'accueil et le reste de l'app.
- **Bouton « ▶ Reprendre »** sur chaque carte de profil pour retourner volontairement
  là où l'enfant s'était arrêté (la carte reste aussi cliquable).
- Le **dernier profil utilisé** est mis en avant (badge « ⏱️ Dernier profil »), via une
  nouvelle clé `rds_last`. Compatibilité ascendante : à défaut, on retombe sur `rds_active`.
- **Aucune perte de progression** : les sauvegardes par profil (`rds_save_*`) et les
  préférences d'accessibilité (`applyPrefs()`) sont préservées.

### Déploiement Vercel (statique)

- Ajout de `vercel.json` (site statique, `cleanUrls`, en-têtes de sécurité, type MIME
  des `data/*.js`) et de `.vercelignore` (ne publier que l'app, pas les docs/sauvegardes).
- Procédure de connexion documentée dans le README. Auto-déploiement à chaque `push`.

## [Non publié] — Générateur de maths collège reconstruit (2026-06-04)

Reconstruction, **uniquement via les outils d'édition fichier (jamais le shell)**,
du « 🎲 Entraînement illimité » de maths du collège, perdu lors de l'incident.
Sauvegarde complète `Royaume-du-Savoir.backup-20260604-avant-generateur-v2.html`
écrite via Write avant toute modification (fin vérifiée `boot();</script></body></html>`).

### Générateur d'exercices (`Royaume-du-Savoir.html`)

- **Module `MATHGEN` (IIFE)** : un générateur par notion, réponse **calculée par le
  code** (donc toujours juste), au format `CONTENT`
  (`{type, q, options/answer, explain, indice}`). `MATHGEN.THEMES` indexé par niveau.
  - **6ᵉ/5ᵉ** : opérations sur décimaux (+, −, ×), fractions même dénominateur
    (somme/différence) et simplification, proportionnalité & pourcentages,
    périmètre/aire rectangle & carré.
  - **4ᵉ** : calcul littéral (développer/réduire), puissances, équations du 1er
    degré (solution entière garantie), Pythagore (triplets entiers, hypoténuse ou côté).
  - **3ᵉ** : Thalès (longueur manquante entière), notation scientifique, fonctions
    linéaires/affines (calcul d'image), statistiques (moyenne entière garantie).
- **`renderEntrainementIntro()`** : écran de choix niveau (6ᵉ/5ᵉ, 4ᵉ, 3ᵉ) + thème,
  avec un bouton « 🎲 Tout mélanger » par niveau.
- **`playEntrainement(niveau, themeId)`** : boucle illimitée (génère → rend via
  `renderSingleQuestion` → recommence), une tâche à la fois. `addXP(10)` par réussite,
  +2 cristaux toutes les 5 réussites (renderStats + toast), `touchStreak()` +
  `checkBadges()` + `save()`. Bouton « ✓ J'arrête ici (bravo !) » sans pression →
  écran de fin bienveillant (nb d'exercices, réussis) avec « 🎲 Continuer » et
  « 🗺️ Retour à la carte ».
- **Deux points d'entrée UI** : bouton « 🎲 Entraînement illimité » dans `renderMap`
  ET dans `renderRegion` (affiché uniquement quand la matière = maths). Les questions
  « saisie » réutilisent la 2ᵉ tentative guidée (champ `indice`). Aucun tiret
  cadratin « — » dans les textes générés. Leçons existantes et Brevet blanc intacts.

## [Non publié] — Récupération UX + accessibilité après incident shell (2026-06-04)

Ré-application, **uniquement via les outils d'édition fichier (jamais le shell)**,
des retouches d'interface et des 6 correctifs d'accessibilité perdus lors de
l'incident de copie via le montage Linux. Checkpoint de sécurité
`Royaume-du-Savoir.checkpoint-20260604-recovery.html` écrit avant toute
modification.

### Interface (`Royaume-du-Savoir.html`)

- **Périmètre** : pied de page et phrase d'accueil élargis du collège à
  « **Du CP au Brevet (primaire + collège)** ». Commentaires de code « Cycle 4 /
  collège » mis à jour. Titre de page passé à « Le Royaume du Savoir (Académie
  des Mages) ».
- **Grille des fonctionnalités** : `.feat` en `repeat(3,minmax(0,1fr))` (objectif
  3×2 sur 6 cartes) + media-query `max-width:560px` → 1 colonne.
- **Tirets cadratins « — »** supprimés de tous les textes visibles (remplacés par
  virgule, parenthèses ou « · »). Conservés uniquement dans les commentaires de
  code non visibles.

### Accessibilité (`Royaume-du-Savoir.html`)

- **(a) Préférences persistées par profil** : `STATE.prefs = {calme, dys,
  hideStreak}` ; `applyPrefs()`, `togglePref()`, `setPrefAndReflect()` (bascule
  visuelle même sans profil, avec invitation à créer un profil). `applyPrefs()`
  appelé dans `goAfterLogin` ; `logoutProfile` retire les classes `calme`/`dys`.
- **(b) Liens au pied de page** : « Mode calme », « Police dyslexie » (`dysBtn`),
  « Masquer la série 🔥 » (`streakBtn`), câblés sur `setPrefAndReflect`/`togglePref`.
- **(c) Redondance non chromatique** côté Royaume : `.opt.correct::after{content:" ✓"}`
  et `.opt.wrong::after{content:" ✗"}` (daltonisme), comme chez les Petits Malins.
- **(d) 2ᵉ tentative guidée en saisie** (`renderSingleQuestion`) : 1ʳᵉ erreur =
  indice formatif (`q.indice` sinon texte bienveillant) + relance (champ `.retry`),
  sans invalider ; 2ᵉ erreur = correction révélée. **Le Brevet blanc (rendu EXAM
  séparé) n'est pas affecté** (conditions réelles).
- **(e) Police dyslexie** : `@font-face` OpenDyslexic via CDN (`font-display:swap`)
  + repli `"Comic Neue","Comic Sans MS",Verdana` ; `body.dys` applique la police
  et augmente interlettrage / word-spacing / interligne.
- **(f) Série désactivable** : `renderStats` masque la pastille 🔥 quand
  `prefs.hideStreak` est actif.

### Contenu (`data/contenu-college.js`)

- Vérifié : la **notation scientifique** (`m13`) indique bien « **1 ≤ a < 10** »
  (borne 10 exclue) dans le cours et les explications — déjà conforme.
- Vérifié : la leçon **fractions** (`m2`, question 5) utilise le distracteur
  « **5/6** » (et non « 4/12 »), bonne réponse « 4/6 » — déjà conforme.

> Rappel incident : aucune opération de fichier n'a été faite via le shell pour
> cette session de récupération.

## [Non publié] — Architecture open-source modulaire : contenu séparé, build fichier unique, export/import, licences (2026-06-04)

Passage à une structure **modulaire** : le **contenu** (les données) est sorti du
HTML pour qu'un·e enseignant·e puisse ajouter une leçon **sans toucher au code**.
Le **moteur** reste dans `Royaume-du-Savoir.html` ; aucune fonction du moteur n'a
été déplacée. Backup `Royaume-du-Savoir.backup-20260604-avant-modularisation.html`
créé avant toute modification.

> ⚠️ **Note importante de cette session.** Une fausse manœuvre de copie via le
> montage Linux (périmé) a écrasé le fichier de travail par une version tronquée.
> Le fichier a été **restauré depuis le dépôt git (HEAD)**, qui est complet et
> fonctionnel. **Conséquence** : le **générateur de maths « Entraînement
> illimité »** (entrée du 2026-06-04 ci-dessous), qui n'avait **pas encore été
> commité**, n'était présent que dans la copie de travail écrasée et n'a **pas pu
> être récupéré** (absent de git, des sauvegardes et des transcriptions). Les
> boutons d'entrée du générateur faisaient partie de ces changements non commités
> et ont disparu avec lui : l'app restaurée est donc **cohérente** (pas de bouton
> pointant dans le vide), mais **sans le générateur**. À re-développer.

### Ajouté

- **`data/contenu-college.js`** — l'objet `CONTENT` (collège : maths, français,
  histoire-géo, sciences) extrait **verbatim**, exposé en global (`var CONTENT` +
  `window.CONTENT`). 47 leçons, mêmes `id`, mêmes données.
- **`data/contenu-petits-malins.js`** — les **banques de données** des Petits
  Malins (mots-images `MOTS`, phrases, textes de compréhension `TEXTES`,
  vocabulaire FR/EN/ES/IT `VOCAB`/`NOMBRES`/`COULEURS`/`PHRASES_L`, langues,
  leçons & quiz d'histoire `LECONS`/`QUIZ_PLUS`, chronologie `CHRONO`, cartes
  mentales `CARTES`), regroupées dans l'objet global `PM_DATA`.
- **`build.js`** + **`build.bat`** — build sans dépendance : inline les
  `<script src="data/...">` dans le HTML et écrit `dist/Royaume-du-Savoir.html`
  (fichier unique autonome, double-clic, hors-ligne).
- **Export / Import de la progression** (pied de page) — « 💾 Exporter ma
  progression » télécharge un JSON des clés `localStorage` `rds_*` + `pm_*` ;
  « 📂 Importer » relit le JSON et restaure (confirmation avant écrasement, puis
  rechargement). Sans serveur, RGPD-friendly.
- **Licences** — `LICENSE` (MIT, code), `CONTENU-LICENCE.md` (contenu en
  CC-BY 4.0), `CONTRIBUTING.md` (comment ajouter une leçon, lancer l'audit
  `enseignant`, builder le fichier unique). `README.md` mis à jour (architecture,
  build single-file, contribution).

### Détails techniques

- Le HTML charge `data/contenu-college.js` puis `data/contenu-petits-malins.js`
  **avant** le `<script>` du moteur (balises classiques, pas `type=module`, pour
  rester compatible `file://` et hors-ligne).
- Côté moteur : la définition inline de `CONTENT` est **neutralisée** (commentée)
  pour éviter toute donnée dupliquée à l'exécution ; les banques des Petits Malins
  sont **reliées** à `PM_DATA` (`var MOTS = PM_DATA.MOTS;`, etc.) en gardant leurs
  noms d'origine, donc aucune référence du moteur n'a changé.
- **Non déplacé volontairement** : la banque `PROBLEMES` (problèmes de calcul des
  Petits Malins) reste dans le HTML. Ce sont des fonctions génératrices qui
  dépendent d'un utilitaire interne au module (`r`) ; les externaliser aurait
  risqué de casser le module. `ALPHABET` (constante dérivée) reste aussi inline.
- Vérifications : syntaxe des `data/*.js` validée (`node --check` + relecture),
  chargement testé (CONTENT = 47 leçons, PM_DATA = 13 banques), fin du HTML
  intacte (`boot();</script></body></html>`), ordre des balises script respecté.

## [Non publié] — Générateur d'exercices de maths (collège) : « 🎲 Entraînement illimité » (2026-06-04)

Ajout d'un mode d'entraînement génératif côté collège : des exercices de maths
produits à la chaîne, avec **bonne réponse calculée par le code** (donc toujours
juste), correction formative immédiate et **2ᵉ tentative guidée** réutilisée du
moteur existant. Aucune régression : les 13 leçons existantes, le Brevet blanc,
`STATE`, les clés `rds_*` / `pm_*` et le monde Petits Malins sont intacts. Backup
`Royaume-du-Savoir.backup-20260604-avant-generateur.html` créé (copie identique au
bit près) avant toute modification.

### Ajouté

- **Module `MATHGEN`** (IIFE, juste après `renderSingleQuestion`) : générateurs
  par notion renvoyant un objet question au **même format que `CONTENT`**
  (`{type, q, options/answer, explain, indice}`), donc rendus par
  `renderSingleQuestion` (gère déjà qcm/vf/saisie, glyphes ✓/✗, mode calme, dys).
- **Notions couvertes** (réponse recalculée et vérifiée à la main sur plusieurs
  tirages) :
  - **6ᵉ/5ᵉ** : opérations sur décimaux, fractions (somme/différence à même
    dénominateur, simplification), proportionnalité & pourcentages, périmètres &
    aires (rectangle/carré).
  - **4ᵉ** : calcul littéral (développer/réduire), puissances, équations du 1er
    degré (solution entière garantie), Pythagore (triplets entiers).
  - **3ᵉ** : Thalès (longueur manquante, résultat entier), notation scientifique,
    fonctions linéaires/affines (image), statistiques (moyenne entière garantie).
- **`renderEntrainementIntro()`** : écran de choix du niveau (6ᵉ/5ᵉ, 4ᵉ, 3ᵉ) et
  du thème, avec un bouton « 🎲 Tout mélanger » par niveau.
- **`playEntrainement(niveau, theme)`** : boucle illimitée (génère, rend,
  recommence), une tâche à la fois, ton bienveillant, bouton « ✓ J'arrête ici »
  sans pression. XP (+10 par réussite via `addXP`) et cristaux (+2 toutes les 5
  réussites) comme les autres exercices ; `touchStreak` / `checkBadges` appelés.
- **Points d'entrée UI** : bouton « 🎲 Entraînement illimité » dans la barre de la
  carte (`renderMap`) **et** dans la région Maths (`renderRegion`, affiché
  uniquement pour `subId==="maths"`).

### Vérification

- Fin de fichier intacte (`boot();</script></body></html>`), accolades/parenthèses
  équilibrées dans chaque fonction ajoutée (relecture des diffs via l'outil Read,
  le montage Linux étant périmé : `wc`/`cat`/`node --check` non fiables ici).

## [Non publié] — Corrections d'audit pédagogique : véracité + accessibilité (2026-06-04)

Six corrections issues de l'audit `Audit-pedagogique-2026-06-04.md` (axes véracité
et accessibilité, public autiste / dys / daltonien). Aucune régression : `STATE`,
clés `rds_*` / `pm_*` et monde Petits Malins (rendu natif) préservés. Backup
`Royaume-du-Savoir.backup-20260604-avant-corrections.html` créé avant toute
modification. Syntaxe JS des sections ajoutées vérifiée (`node --check`).

### Corrigé — Véracité (maths)

1. **Notation scientifique (leçon `m13`)** — la définition « entre 1 et 10 »
   (ambiguë, borne 10 incluse à tort) devient **« supérieur ou égal à 1 et
   strictement inférieur à 10 » (1 ≤ a < 10)**, dans le cours **et** dans
   l'option / l'explication du QCM. La borne 10 est exclue (on n'écrit jamais
   `10 × 10ⁿ`).
2. **Fractions (leçon `m2`, Q5 « 5/6 − 1/6 »)** — le distracteur incohérent
   **« 4/12 »** (qui évoquait une addition des dénominateurs, hors-sujet sur une
   soustraction à même dénominateur) est remplacé par **« 5/6 »** : erreur d'élève
   plausible (oubli de soustraire). L'explication signale ce piège.

### Ajouté — Accessibilité (Royaume + Petits Malins)

3. **Redondance non colorée ✓/✗ au Royaume** — les options QCM/VF marquées
   `.correct` / `.wrong` portent désormais un **glyphe ✓ / ✗** posé *sur* l'option
   (CSS `::after`), en plus de la couleur. Indispensable pour les daltoniens et
   les enfants ayant besoin de redondance — même logique que celle déjà en place
   côté Petits Malins.
4. **2ᵉ tentative guidée en saisie (Royaume)** — dans `renderSingleQuestion`
   (quêtes + diagnostic), une réponse saisie fausse n'est plus invalidée
   immédiatement : à la **1ʳᵉ erreur**, un **indice formatif** s'affiche et l'élève
   peut **réessayer** ; ce n'est qu'à la **2ᵉ erreur** que la correction est
   révélée. Le Brevet blanc (épreuve en conditions réelles) garde sa logique
   propre et n'est **pas** affecté.
5. **Option police dyslexie** — réglage activable et **persisté par profil**
   (même mécanisme que le Mode calme), à côté de celui-ci. Bascule en
   **OpenDyslexic** (CDN, `font-display:swap`) avec repli **Comic Neue / Comic
   Sans / Verdana**, et augmente l'**interlettrage / interligne / espacement des
   mots**. Présent au **Royaume** (classe `body.dys`, lien « Police dyslexie » du
   pied de page) et chez **Petits Malins** (bouton « 🔤 Police dys », clé
   `*_dys`, classe `#pmRoot.dys`), dans la version intégrée comme dans la version
   autonome.
6. **Streak (série 🔥) désactivable** — option **persistée par profil** (près du
   Mode calme) qui **masque la série de jours** afin d'éviter une pression à se
   reconnecter (déclencheur d'anxiété possible chez un public jeune / autiste).
   Lien « Masquer la série 🔥 » du pied de page ; la pastille 🔥 disparaît de la
   barre de stats quand l'option est active. (Petits Malins autonome n'a pas de
   streak : sans objet.)

### Détails techniques

- `STATE.prefs = { calme, dys, hideStreak }` ajouté au `defaultState()` du
  Royaume, sauvegardé avec le reste de l'état (`save()` / `loadState()`), appliqué
  via `applyPrefs()` à la connexion (`goAfterLogin`) et réinitialisé à la
  déconnexion. Le Mode calme du Royaume, jusque-là simple bascule de classe non
  mémorisée, est désormais lui aussi **persisté par profil**.
- Petits Malins : nouvel état `state.dys`, clé localStorage `*_dys`,
  `toggleDys()` / `applyDys()` exportés, appliqués au montage.

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
