# Audit pédagogique — Le Royaume du Savoir & Les Petits Malins (2026-06-04)

> Audit complet réalisé selon le skill **enseignant** (axes : Pédagogie · Accessibilité · Véracité).
> Périmètre : `Royaume-du-Savoir.html` (3205 lignes — 47 leçons / 217 questions, Cycle 4 6ᵉ→3ᵉ + monde Petits Malins intégré) et `Petits-Malins.html` (988 lignes).
> Cet audit **complète** `Audit-pedagogique.md` (2026-06-03) : il prend en compte les corrections déjà appliquées (voir CHANGELOG) **et** ausculte le **nouveau contenu de 3ᵉ + le Brevet blanc « conditions réelles »**, non couverts par l'audit précédent.

## Synthèse

- **Public et objectif visés :** application unique **du CP au Brevet**, en deux mondes (🐣 Petits Malins, dès le CP : lecture, calcul, langues EN/ES/IT, histoire ; 🏰 Royaume : collège Cycle 4 + 6ᵉ jusqu'à la 3ᵉ, 4 épreuves du Brevet). Objectif final : réussir un **Brevet blanc** noté /20, centré sur la 3ᵉ.
- **Verdict global : sert désormais BIEN son objectif d'apprentissage.** L'app a nettement progressé depuis l'audit précédent : les 🟥 et la plupart des 🟧 de 2026-06-03 sont corrigés (intégration native des Petits Malins, feedback formatif partout, mode calme côté petits, jouable sans son, ✓/✗ redondants côté petits, carte mentale en fin d'activité), **le niveau 3ᵉ est ajouté** et **le Brevet blanc** reproduit de vraies conditions (minuteur optionnel, pondération 3ᵉ, exclusion 6ᵉ, question rédigée auto-évaluée, note /20).
- **Véracité : excellente.** Les **217 questions ont été contrôlées** ; tous les calculs maths recalculés sont justes (relatifs, fractions, %, Pythagore, Thalès, fonctions, puissances, notation scientifique), toutes les dates et définitions d'histoire/sciences sont exactes, et **les ~150 traductions EN/ES/IT (accents inclus) sont correctes**. **0 erreur factuelle bloquante.** Restent quelques imprécisions mineures (formulations « entre 1 et 10 », un distracteur).
- **Compteur : 🟥 0 bloquant · 🟧 4 majeurs · 🟨 7 mineurs.**

## Points forts (à préserver)

- **Fiabilité factuelle remarquable** sur l'ensemble du corpus, y compris le contenu de 3ᵉ tout neuf (Thalès, fonctions, notation scientifique, 14-18, 39-45, Vᵉ République, énergie, pH, génétique).
- **Brevet blanc bien conçu** : 6ᵉ exclu (`if(niv==="6e") return;`), ~2/3 de questions de 3ᵉ, note /20 calculée **uniquement** sur les items auto-corrigeables, virgule décimale acceptée (`_norm` aligné sur `norm`), correction détaillée avec bonne réponse + explication, **question rédigée hors note** avec réponse-modèle et grille d'auto-évaluation (choix pédagogique juste : on ne note pas un texte libre automatiquement).
- **Feedback formatif partout** : Royaume (« 🤝 Presque ! Regarde : … » + explication) **et** Petits Malins (la bonne réponse est révélée + mini-indice), conformément aux corrections appliquées.
- **Accessibilité Petits Malins fortement améliorée** : mode calme persistant, jeux d'écoute jouables sans son (cible affichée en clair), ✓/✗ + couleur, zoom réactivé, cibles tactiles ≥ 44-48 px, `aria-label` sur boutons-emojis, `aria-pressed` sur le mode calme.
- **Progression lisible** 6ᵉ → 5ᵉ → 4ᵉ → 3ᵉ avec déblocage progressif, et carte mentale placée au bon moment (après le cours dans le Royaume, en fin d'activité chez les petits).

---

## 1. Véracité des contenus

**Bilan : 0 erreur bloquante. Contenu d'une très haute fiabilité.** Les seuls points ci-dessous sont des imprécisions de formulation, pas des réponses fausses.

- 🟨 **« Entre 1 et 10 » au lieu de « 1 inclus, 10 exclu »** — *où :* Maths 3ᵉ, leçon « La notation scientifique » (m13), cours et QCM « le nombre a doit être : compris entre 1 et 10 ».
  - Constat : la règle exacte est **1 ≤ a < 10** (10 est exclu : on n'écrit jamais `10 × 10ⁿ`). « Entre 1 et 10 » est ambigu et techniquement imprécis pour le Brevet. La bonne réponse reste juste, mais la définition gagne en rigueur.
  - Correct : a est un décimal tel que **1 ≤ a < 10** (un seul chiffre non nul avant la virgule). *(Source : Wikipédia « Notation scientifique » ; fiches Brevet AlloMaths.)*
  - Correction : écrire « **supérieur ou égal à 1 et strictement inférieur à 10** ».

- 🟨 **Distracteur « 4/12 » dans une soustraction de fractions** — *où :* Maths, leçon « Les fractions » (m2), Q5 « 5/6 − 1/6 », options `["4/6","4","6/6","4/12"]`.
  - Constat : la bonne réponse 4/6 est juste et le distracteur « 4 » (oubli du dénominateur) est désormais une erreur d'élève plausible (correction de l'audit précédent appliquée ✓). En revanche **« 4/12 »** ne correspond à aucune erreur typique sur une soustraction à même dénominateur (il évoquerait une addition des dénominateurs, hors-sujet ici).
  - Correction : remplacer « 4/12 » par un distracteur cohérent, p. ex. **« 5/6 »** (élève qui oublie de soustraire) ou **« 1/6 »** (confusion avec le terme retiré).

- 🟨 **« Il pleut des cordes » classée métaphore — correct mais à border** — *où :* Français 4ᵉ/3ᵉ, leçon figures de style (f3), « Il pleut des cordes » → « expression imagée (métaphore) ».
  - Constat : la réponse retenue est **juste** (c'est bien une métaphore/expression figée, *vérifié*). Simple vigilance : l'expression est parfois aussi présentée comme hyperbole. La formulation actuelle « expression imagée (métaphore) » est sûre — **rien à corriger**, signalé pour mémoire.

> **Vérifié et conforme (échantillon recalculé/contrôlé) :**
> **Maths** — décimaux (2,5+1,75=4,25 ; 7/10=0,7), périmètre/aire (2×(5+3)=16 ; 5×3=15 ; 6²=36), relatifs, fractions (3/4 de 20=15 ; 6/9=2/3), % (25 % de 80=20 ; t-shirt 40 €−50 %=20 €), angles (180−60−70=50 ; 90−35=55), distributivité (5(2x−3)=10x−15), équations (2x+1=9→x=4), Pythagore (3-4-5 ; 6-8-10), puissances (10⁴=10000 ; 2⁴=16), **Thalès (AB=3,AB'=6,AC=4→AC'=8 ; AB=2,AB'=6,BC=5→B'C'=15)**, **fonctions (f(x)=3x→f(4)=12 ; g(x)=2x+1→g(5)=11)**, **notation scientifique (3,2×10⁴=32000 ; 5×10²=500 ; 7×10³=7000)** — **tous justes, une seule bonne réponse à chaque fois.**
> **Histoire-Géo-EMC** — Hégire 622, Révolution 1789, 14 juillet 1789, **WWI 1914-1918 / armistice 11 nov. 1918 / Verdun 1916**, **WWII 1939-1945 / capitulation 8 mai 1945 / appel du 18 juin 1940 (de Gaulle) / Shoah**, **Vᵉ République 1958 / quinquennat appliqué depuis 2002** (*vérifié : référendum 2000, application 2002*), laïcité (loi 1905), IDH/PIB, commerce triangulaire, Colomb 1492 (formulation « atteint des terres… en Amérique » déjà corrigée ✓).
> **Sciences** — états de la matière (eau gèle 0 °C / bout 100 °C), H₂O, lumière ≈ 300 000 km/s, circuits série/dérivation, digestion (bouche→œsophage→estomac→intestin grêle), **énergie en joules / conservation / cinétique**, **pH 0-14, acide <7, neutre 7, basique >7**, **ADN/chromosomes/noyau, 46 chromosomes (23 paires), gène, hérédité** — tous exacts.
> **Petits Malins — traductions (toutes vérifiées, accents compris) :** Cat/Gato/Gatto, Tree/Árbol/Albero, Water/Agua/Acqua, Star/Estrella/Stella, nombres 1-10 (Uno/Due/Tre… Diez/Dieci), couleurs (Yellow/Amarillo/Giallo, Purple/Morado/Viola, Orange/Naranja/Arancione), politesse (Hello/Hola/Ciao, Goodbye/Adiós/Arrivederci, ¿Cómo estás?/Come stai?, Sí/Sì) — **aucune erreur d'orthographe, de genre ou d'accent.**

## 2. Pédagogie

- 🟧 **Saisie au Royaume : la réponse est révélée sans 2ᵉ tentative guidée** — *où :* `Royaume-du-Savoir.html`, validation `saisie` dans les quêtes.
  - Constat : sur une saisie fausse, l'app affiche directement la correction (pas de seconde tentative accompagnée). Le feedback est formatif (il explique), mais l'élève ne réessaie pas. C'est le point d'audit déjà identifié, **non encore traité** (cf. CHANGELOG « À suivre »).
  - Pourquoi c'est un problème : on perd l'occasion d'un apprentissage par essai-erreur guidé, surtout en maths.
  - Correction : sur la 1ʳᵉ erreur, donner un **indice** et autoriser **une 2ᵉ tentative** avant de révéler la réponse.

- 🟧 **Garde-fou temps d'écran / streak culpabilisant absent** — *où :* les deux fichiers (`STATE.streak`, « 🔥 série de jours », badge `serie3`).
  - Constat : le streak de jours est toujours actif et **non désactivable**, sans message de pause après N activités. Point d'audit ouvert.
  - Pourquoi c'est un problème : public jeune (dont enfants autistes) ; un compteur de jours peut induire une pression à se reconnecter.
  - Correction : rendre le streak **optionnel/non culpabilisant** et afficher un message de pause après un nombre d'activités.

- 🟧 **Pas de phase de découverte/modélisation avant l'exercice (Petits Malins, Calcul & Langues)** — *où :* `Petits-Malins.html`, jeux de calcul et de langues lancés directement sur le QCM.
  - Constat : hors Histoire (vrai texte) et « découverte des mots », l'enfant arrive sur l'exercice sans modélisation préalable. Point d'audit ouvert.
  - Pourquoi c'est un problème : pas de « du connu vers l'inconnu » pour un enfant qui ne sait pas encore additionner.
  - Correction : courte phase illustrée (ex. « 2 + 3 » montré avec des objets) avant le premier QCM.

- 🟧 **Vidéos du Royaume via recherche YouTube ouverte (non validée)** — *où :* `Royaume-du-Savoir.html`, intégration vidéo des leçons (lien `results?search_query`).
  - Constat : côté petits, les vidéos/recherches ouvertes ont été retirées ; côté Royaume, la vidéo passe encore par une **recherche** plutôt qu'une **liste fermée de vidéos validées**. Point d'audit ouvert.
  - Pourquoi c'est un problème : contenu tiers non garanti devant un élève ; une vidéo doit illustrer **exactement** la notion.
  - Correction : remplacer par une **liste fermée** d'URL de vidéos vérifiées (une par leçon).

- 🟨 **Carte mentale du Royaume extraite automatiquement (qualité variable)** — *où :* `extractKeyTerms()` / `mindmapSVG()`.
  - Correction : ajouter un champ `motsCles` explicite par leçon pour fiabiliser la carte.

## 3. Accessibilité

- 🟧 **Côté Royaume : le résultat des options QCM/VF passe par la SEULE couleur** — *où :* `Royaume-du-Savoir.html`, lignes ~3103-3118 et ~2472 : `classList.add("correct")` / `"wrong")` (bordure/fond vert ou rouge) ; CSS `.opt.correct`/`.opt.wrong`.
  - Constat : sur le **bouton-option** lui-même, seule la couleur distingue le bon du faux choix (le ✅/🤝 n'apparaît que dans la zone de feedback séparée, et le glyph n'est pas posé **sur** l'option). Côté Petits Malins, la redondance ✓/✗ a été ajoutée ; **côté Royaume, non.**
  - Public impacté : daltoniens (rouge/vert), enfants ayant besoin de redondance.
  - Correction : ajouter un **glyphe ✓/✗** (ou une forme) directement sur l'option `.correct`/`.wrong` du Royaume, comme côté petits.

- 🟧 **Aucune option police/taille (dyslexie) dans le Royaume** — *où :* `Royaume-du-Savoir.html`, `font-family:"Segoe UI",system-ui…` ; Petits Malins `'Comic Sans MS'…`.
  - Constat : pas de réglage de police (type OpenDyslexic), de taille ni d'interlignage paramétrable. Point d'audit ouvert.
  - Public impacté : enfants dyslexiques.
  - Correction : proposer un réglage **police + taille + interlignage** (option OpenDyslexic), valable dans les deux mondes.

- 🟨 **`:focus-visible` et navigation clavier non outillés** — *où :* les deux fichiers (0 occurrence de `focus-visible`).
  - Constat : interactions surtout `onclick` ; pas de style de focus visible ni de test clavier garanti.
  - Correction : ajouter un style `:focus-visible` net et vérifier la tabulation/activation au clavier.

- 🟨 **`prefers-reduced-motion` non respecté** — *où :* les deux fichiers (0 occurrence).
  - Constat : le mode calme coupe bien les animations, mais la préférence système n'est pas honorée automatiquement.
  - Correction : ajouter `@media (prefers-reduced-motion: reduce)` désactivant animations/transitions.

- 🟨 **Contraste des textes secondaires (`.muted`, `.footnote`, `.small`)** — *où :* `Royaume-du-Savoir.html`, `--muted`, `.footnote{color:var(--muted)}`, `.small` (12-13 px gris).
  - Correction : vérifier au contrastomètre (cible AA 4.5:1) et assombrir les gris ; agrandir les textes 12 px porteurs d'info.

- 🟨 **Texte des nœuds de carte mentale SVG (Royaume) petit** — *où :* `mindmapSVG`, `font-size:12-14`.
  - Correction : agrandir la police des nœuds ou prévoir une version texte.

- 🟨 **Pas d'`aria-label` sur certains emojis porteurs de sens côté Royaume** — *où :* icônes de régions/badges du Royaume.
  - Constat : côté petits, les `aria-label` ont été ajoutés ; côté Royaume, plusieurs emojis informatifs restent sans alternative texte.
  - Correction : ajouter `aria-label`/`role="img"` sur les emojis qui portent du sens.

---

## Alignement avec l'objectif final (le Brevet)

**Très bon désormais.** Le manque majeur de l'audit précédent — **l'absence du niveau 3ᵉ** — est **comblé** : les 4 épreuves sont couvertes jusqu'à l'année de l'examen, le **Brevet blanc** reproduit les conditions réelles (minuteur optionnel ~1 min 15/question, soumission auto à l'expiration, pondération 3ᵉ, exclusion 6ᵉ, note /20 avec mention, **question rédigée** d'entraînement auto-évaluée). Le parcours « du CP au Brevet » est cohérent.

**Ce qui manque encore pour viser pleinement le Brevet :**
- **Volume de questions par notion** : 5 questions/leçon, insuffisant pour la **répétition espacée** (viser 15-30). Un générateur d'exercices maths (déjà en feuille de route) y aiderait.
- **Oral du Brevet & contrôle continu** non simulés (un seul écrit blanc).
- **Rédaction réelle** : la question rédigée est hors note et auto-évaluée — bon compromis, mais l'entraînement à la rédaction longue (Français/Histoire) reste léger.

## Plan d'action priorisé — corrections à appliquer

**Majeures (🟧) :**
1. **Royaume — redondance non colorée** : poser un ✓/✗ sur l'option `.correct`/`.wrong` (pas seulement la couleur).
2. **Royaume — saisie** : 1ʳᵉ erreur → indice + 2ᵉ tentative guidée avant de révéler la réponse.
3. **Option police dyslexie + taille + interlignage** (les deux mondes).
4. **Streak optionnel / message de pause** après N activités (garde-fou temps d'écran).
5. **Vidéos du Royaume** : remplacer la recherche YouTube ouverte par une **liste fermée validée** (1 vidéo/leçon).
6. **Petits Malins** : ajouter une **phase de découverte illustrée** avant les QCM de Calcul et Langues.

**Mineures de contenu (🟨, véracité) :**
7. Notation scientifique (m13) : « entre 1 et 10 » → « **1 ≤ a < 10** » (1 inclus, 10 exclu), dans le cours et le QCM.
8. Fractions (m2, Q5) : remplacer le distracteur **« 4/12 »** par « 5/6 » ou « 1/6 ».

**Finitions accessibilité (🟨) :**
9. Ajouter `:focus-visible`, vérifier la navigation clavier.
10. Ajouter `@media (prefers-reduced-motion: reduce)`.
11. Vérifier les contrastes `.muted`/`.small`/`.footnote` (AA 4.5:1), agrandir le texte des nœuds SVG du Royaume, compléter les `aria-label` des emojis informatifs côté Royaume.

**Enrichissement (feuille de route) :**
12. Étoffer chaque leçon (15-30 questions, répétition espacée) ; générateur d'exercices maths ; modules Oral & contrôle continu.

---
*Audit réalisé le 2026-06-04 sur `Royaume-du-Savoir.html` (3205 lignes, 47 leçons / 217 questions) et `Petits-Malins.html` (988 lignes). Tous les calculs de maths ont été recalculés ; toutes les traductions EN/ES/IT et toutes les dates/définitions ont été contrôlées (recherches web de confirmation : notation scientifique 1≤a<10, quinquennat appliqué depuis 2002, « il pleut des cordes » = métaphore). 0 erreur factuelle bloquante trouvée.*
