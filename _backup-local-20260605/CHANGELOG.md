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
- **(b) Liens au pied de page** : « Mode calme », « Police dyslexi