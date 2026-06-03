# Audit pédagogique — Le Royaume du Savoir & Les Petits Malins

## Synthèse

- **Public et objectif visés :** application unique du **CP au Brevet**, en deux mondes.
  - *Les Petits Malins* (`Petits-Malins.html`, aussi intégré dans le Royaume) : enfants de 3 à 9 ans (modes « Petits » / « Grands »), bases en Lecture, Calcul, Langues (anglais/espagnol/italien), Histoire.
  - *Le Royaume du Savoir* (`Royaume-du-Savoir.html`) : collège, **Cycle 4 + un niveau 6ᵉ récemment ajouté**, 4 matières évaluées au Brevet (Maths, Français, Histoire-Géo-EMC, Sciences), avec gamification (XP, cristaux, badges, royaume à bâtir) et un **Brevet blanc** noté sur 20.
- **Verdict global : sert *partiellement* son objectif d'apprentissage.** Le contenu disciplinaire est d'une **très bonne fiabilité factuelle** (tous les calculs de maths recalculés sont justes, toutes les traductions vérifiées sont correctes, les dates clés sont exactes) et la pédagogie du Royaume est solide (cours → carte mentale → vidéo → quête, déblocage progressif, feedback formatif). Mais **deux choix d'architecture nuisent nettement à l'expérience** (boutons « Carte mentale & vidéos » isolés en tête de menu chez les Petits Malins ; intégration du monde Petits Malins par une iframe créant un double en-tête), et plusieurs points d'accessibilité ne sont pas au niveau attendu pour un outil qui se revendique « particulièrement adapté aux enfants autistes ».
- **Compteur : 🟥 1 bloquant · 🟧 7 majeurs · 🟨 9 mineurs**

## Points forts (à préserver)

- **Fiabilité factuelle remarquable.** Les ~120 questions de maths du Royaume (relatifs, fractions, %, angles/aires, calcul littéral, équations, Pythagore, puissances, décimaux 6ᵉ, périmètre/aire) ont été recalculées une à une : **aucune erreur de calcul, aucune double bonne réponse**. Les dates (1492, 1889, 622, 1789, 14 juillet 1789), définitions (IDH/PIB, laïcité, distributivité, états de la matière, H₂O, digestion) et toutes les traductions (anglais/espagnol/italien, y compris accents : Árbol, Adiós, ¿Cómo estás?, Sì) sont **correctes**.
- **Excellent placement pédagogique des ressources dans le Royaume :** dans `renderLesson`, la carte mentale (générée à partir des mots-clés en gras du cours) puis la vidéo apparaissent **après le cours et avant la quête** — exactement la bonne logique (synthèse de ce qui vient d'être lu). C'est le contre-exemple de ce qu'il faut faire, et c'est bien fait ici.
- **Feedback formatif :** chaque question (quête comme Brevet blanc) affiche le champ `explain` qui dit *pourquoi*, avec un ton encourageant (« 🤝 Presque ! Regarde : … »).
- **Progression structurée :** en-têtes « NIVEAU 6ᵉ / 5ᵉ / 4ᵉ », déblocage progressif des quêtes (`locked = !prevDone`), Brevet blanc qui **exclut volontairement les questions 6ᵉ** (`if(niveau==="6e") return;`) et tire 3 questions par matière — conditions proches de l'examen, avec correction finale et mention.
- **Mode calme** (`body.calme` coupe animations et transitions) et **réinitialisation** présents.
- **Profils multi-comptes** avec stockage séparé (clés `pm_<profil>_score`), permettant à plusieurs enfants d'utiliser l'app.

---

## 1. Véracité des contenus

L'axe le plus solide de l'application. Les rares points ci-dessous sont des raccourcis ou des imprécisions, pas des calculs faux.

- 🟨 **Colomb « a découvert le continent Amérique » en 1492** — *où :* `Petits-Malins.html`, module Histoire, leçon « Christophe Colomb » (texte et QCM « Quel continent Colomb a-t-il découvert ? → L'Amérique »).
  - Constat : le texte dit qu'en 1492 il « a découvert un continent… : l'Amérique ! ». En 1492 Colomb a abordé les **Caraïbes** (Guanahani/Bahamas, Cuba, Hispaniola), pas le continent ; il n'atteint le continent (Venezuela) qu'en **1498**, en restant convaincu d'avoir trouvé l'Asie.
  - Correct : raccourci très répandu et tolérable au niveau CP-CE, mais factuellement imprécis (source : Wikipédia « Christophe Colomb » / Musée national de la Marine).
  - Correction : reformuler « il a atteint des terres inconnues des Européens, en **Amérique** » plutôt que « il a découvert le continent », et conserver le QCM tel quel.

- 🟨 **Confusion lettre / son** — *où :* `Petits-Malins.html`, Lecture, jeu « Le son des lettres » (`jeuSons`).
  - Constat : la consigne dit « Quel mot commence par le **son** [lettre] », mais le code compare la **première lettre** écrite (`m.mot[0]`). Or des mots comme CHAT ou GÂTEAU ne commencent pas par le *son* de la lettre C ou G isolée. Le filtre des distracteurs évite une double réponse, donc l'exercice reste jouable, mais le vocabulaire est inexact.
  - Correct : à ce niveau, on travaille soit la lettre, soit le phonème — pas les deux mélangés.
  - Correction : renommer la consigne « Quel mot commence par la **lettre** [lettre] », ou retirer du jeu les mots à graphème complexe (CH, GÂ…).

- 🟨 **Distracteur mathématiquement absurde** — *où :* `Royaume-du-Savoir.html`, Maths, leçon « Les fractions » (m2), Q5 « 5/6 − 1/6 », option « 4/0 ».
  - Constat : « 4/0 » (division par zéro) n'est pas un nombre. Un distracteur doit correspondre à une **erreur typique d'élève**, pas à une absurdité (qui rend la question trop facile par élimination).
  - Correct : la bonne réponse 4/6 est juste ; seul le distracteur est de mauvaise qualité.
  - Correction : remplacer « 4/0 » par « 6/6 » déjà présent → utiliser plutôt « 1/6 » ou « 4/0 → 0 » non, mettre « 6/0 » non plus : proposer p. ex. « 5/6 » (erreur « on ne soustrait que le numérateur du 1 ») ou « 4 » (oubli du dénominateur).

- 🟨 **Incohérence de drapeau pour l'anglais** — *où :* `Petits-Malins.html`, module Langues (`LANGUES.en`).
  - Constat : l'anglais affiche le drapeau 🇬🇧 (Royaume-Uni) mais le code de synthèse vocale est `en-US` (États-Unis). Sans gravité factuelle, mais incohérent et audible sur certains mots.
  - Correction : harmoniser (drapeau 🇬🇧 → code `en-GB`, ou garder `en-US` avec un drapeau 🇺🇸), au choix pédagogique.

> **Vérifié et conforme** (échantillon recalculé/contrôlé) : décimaux 6ᵉ (2,5+1,75 = 4,25 ; 7/10 = 0,7 ; comparaison 3,5 = 3,50), périmètre/aire 6ᵉ (2×(5+3)=16 cm ; 5×3=15 cm² ; carré 6 → 36 cm²), relatifs, fractions, %, angles, Pythagore (3-4-5 ; 6-8-10), puissances, équations ; Hégire 622, Révolution 1789, Tour Eiffel 1889/Gustave Eiffel, Colisée à Rome, démocratie d'Athènes, Zeus, hiéroglyphes ; Terre/Soleil/Lune, vivant/non-vivant, H₂O, lumière ≈ 300 000 km/s ; toutes les traductions EN/ES/IT, accents inclus.

## 2. Pédagogie

- 🟥 **Bouton « Carte mentale & vidéos » isolé en tête de chaque menu (Petits Malins)** — *où :* `Petits-Malins.html`, menus Lecture, Calcul, Langues, Histoire (fonction `bonus()` appelée par le **premier** bouton de chaque sous-menu).
  - Constat : avant même d'avoir vu la moindre leçon, l'enfant trouve en haut de menu un bouton « 🧠 Carte mentale & vidéos » qui ouvre une carte mentale récapitulant *toutes* les notions de la matière (ex. en calcul : Compter, +, −, ×, ÷) et des liens YouTube de recherche.
  - Pourquoi c'est un problème : **une carte mentale est une *synthèse d'une leçon déjà étudiée***, pas une porte d'entrée. Posée en ouverture, devant un enfant de 3-9 ans qui ne sait pas encore lire ni diviser, elle n'a aucune fonction d'apprentissage — c'est le « gadget posé parce que c'est joli » que l'audit doit signaler. De plus elle envoie un jeune enfant vers une page de **résultats YouTube** non filtrés, ouverts dans le navigateur (problème de sécurité/autonomie). C'est, en l'état, contre-productif et inadapté au public, d'où le classement bloquant.
  - Correction : **retirer ce bouton du menu** des Petits Malins. Si l'on veut une synthèse, l'afficher *à la fin* d'une activité réussie (« Voici ce que tu as appris »). Pour les vidéos, proposer une liste **fermée et choisie** (pas une recherche), accessible côté parent.

- 🟧 **Intégration du monde Petits Malins par une iframe → double en-tête / page-dans-la-page** — *où :* `Royaume-du-Savoir.html`, `renderPetitsWorld()` (lignes ~913-919) : `setBrand("Les Petits Malins")` puis `app.innerHTML='<iframe … srcdoc=…>'`.
  - Constat : quand un profil « Petits » se connecte, le Royaume garde **sa propre topbar** (qu'il renomme « Les Petits Malins » + bouton « Changer de compte »), et **à l'intérieur** s'affiche l'iframe qui contient *encore* son propre `<header>` complet (logo « 🎒 Les Petits Malins », sélecteur d'âge, score ⭐). On obtient deux en-têtes empilés, deux logos, deux scores, une bordure d'iframe « fenêtre dans la fenêtre ».
  - Pourquoi c'est un problème : pour un jeune enfant (et a fortiori un enfant autiste, public visé), cette **redondance et ce cadre imbriqué brouillent la lecture de l'écran** et cassent la « mise en page constante et prévisible » recherchée. L'iframe `srcdoc` ajoute aussi des risques techniques (focus, hauteur fixe `80vh`, défilement interne).
  - Correction : **intégrer les Petits Malins nativement** (mêmes fonctions de rendu dans `#app`, sans iframe), ou, a minima, **masquer l'en-tête interne** du module quand il tourne dans le Royaume (le module n'affiche alors qu'une seule barre, celle du Royaume) et supprimer la bordure/encadré d'iframe.

- 🟧 **Aucun cours/leçon chez les Petits Malins (sauf Histoire) : on saute direct au QCM** — *où :* `Petits-Malins.html`, Lecture / Calcul / Langues (les activités lancent directement un exercice).
  - Constat : en dehors du module Histoire (qui a un vrai texte avant le quiz) et de la « découverte des mots » en langues, l'enfant arrive directement sur des questions sans phase d'explication. La « carte mentale » censée tenir ce rôle est mal placée (cf. bloquant ci-dessus).
  - Pourquoi c'est un problème : pas de « du connu vers l'inconnu » ; un enfant qui ne sait pas encore additionner n'a rien vu avant de devoir répondre.
  - Correction : ajouter une **courte phase de découverte/modélisation** avant chaque type d'exercice (ex. montrer 2 + 3 illustré par des objets avant de demander le résultat).

- 🟧 **Feedback non formatif chez les Petits Malins** — *où :* `Petits-Malins.html`, toutes les réponses fausses (`repLettre`, `repSon`, `repMot`, `repOp`, `repCompter`, `repLangue`, `valider`).
  - Constat : en cas d'erreur, le retour est « Essaie encore 🙂 », « Recompte bien 🔢 », « ❌ Non, réessaie » — on **ne dit jamais pourquoi** ni la bonne réponse. Contraste avec le Royaume qui explique systématiquement.
  - Pourquoi c'est un problème : sans explication, l'enfant retente au hasard ; l'erreur n'est pas exploitée pour apprendre.
  - Correction : sur une erreur, montrer/énoncer la bonne réponse et un mini-indice (« CHAT commence par C », « 4 + 3, compte : 4… 5, 6, 7 »).

- 🟧 **Réponse libre (saisie) : pas d'aide après échec, et virgule décimale non normalisée dans le Brevet** — *où :* `Royaume-du-Savoir.html`, validation `saisie`.
  - Constat : deux normaliseurs coexistent. Dans les **leçons** (`norm`, ligne ~1840) la virgule est convertie en point (`.replace(",", ".")`), donc « 4,25 » est accepté — bien. Mais dans le **Brevet blanc** (`_norm`, ligne 1463) la virgule **n'est pas** convertie. Aujourd'hui sans conséquence (aucune question de saisie 5ᵉ/4ᵉ n'a de réponse décimale, et les questions 6ᵉ décimales sont exclues du Brevet), **mais c'est un piège latent** : dès qu'on ajoutera une saisie décimale au Brevet, « 4,25 » sera compté faux face à « 4.25 ».
  - Pourquoi c'est un problème : risque de pénaliser un élève qui a juste, à cause de la virgule (norme française) vs le point.
  - Correction : **aligner `_norm` sur `norm`** (ajouter `.replace(",", ".")`), et accepter explicitement les deux écritures. Plus largement, après une saisie fausse, autoriser une nouvelle tentative guidée plutôt que de bloquer le champ.

- 🟧 **« Remettre la phrase en ordre » : une seule bonne séquence acceptée alors que plusieurs ordres sont corrects** — *où :* `Petits-Malins.html`, Lecture (grands), `jeuPhrases`.
  - Constat : la validation compare la suite reconstituée à l'ordre **exact** d'origine. Or des phrases comme « Le soleil brille très fort » n'ont qu'un ordre, mais l'absence de gestion de la ponctuation/majuscule et le fait qu'aucune variante n'est tolérée fragilisent l'exercice ; surtout, un enfant ne peut pas **corriger** un mot mal posé (pas de retour arrière), il doit aller au bout puis recommencer.
  - Pourquoi c'est un problème : frustration, et message « Presque ! » même quand l'enfant a compris mais s'est trompé d'un mot.
  - Correction : permettre de **retirer le dernier mot posé**, et valider la phrase indépendamment de la casse/ponctuation finale.

- 🟧 **Motivation : pas de limite de session ni de garde-fou côté écran/temps** — *où :* les deux fichiers (score, XP, confettis, streak de jours).
  - Constat : récompenses fréquentes (confettis, sons, « série de jours ») bien dosées pour l'effort, mais aucune **pause suggérée** ni minuterie parentale ; le streak (`🔥 série de jours`) peut induire une légère pression à se connecter chaque jour.
  - Pourquoi c'est un problème : public jeune, besoin de cadrer le temps d'écran.
  - Correction : rendre le streak optionnel/non culpabilisant, et proposer un message de pause après N activités.

- 🟨 **Carte mentale du Royaume potentiellement bruitée par l'extraction automatique** — *où :* `Royaume-du-Savoir.html`, `extractKeyTerms()` / `mindmapSVG()`.
  - Constat : les nœuds de la carte sont les mots `<b>…</b>` du cours, limités à 6. Selon les leçons, on peut récupérer des termes peu structurants ou tronqués. Fonctionne, mais qualité variable.
  - Correction : prévoir un champ `motsCles` explicite par leçon pour fiabiliser la carte.

- 🟨 **« Compter » : distracteurs parfois trop proches/identiques visuellement** — *où :* `Petits-Malins.html`, Calcul, `jeuCompter` (options tirées dans `n±2`).
  - Correction : garantir un écart minimal et éviter les options collées (ex. 6 vs 7 vs 8 quand il faut compter 7 emojis à la file).

## 3. Accessibilité

- 🟧 **L'information de réussite/erreur passe surtout par la couleur (vert/rouge)** — *où :* les deux fichiers : `.choix button.bon`/`.faux` (vert/rouge) et `.opt.correct`/`.opt.wrong`.
  - Constat : la bonne/mauvaise réponse est signalée par un fond **vert ou rouge**. Côté Royaume, un ✅/❌ accompagne souvent le feedback ; mais sur les **boutons d'options eux-mêmes** (Petits Malins surtout), c'est la couleur seule qui distingue le bon du faux bouton.
  - Public impacté : daltoniens (rouge/vert), et plus largement enfants ayant besoin de redondance.
  - Correction : ajouter sur le bouton retenu une **icône/forme** (✓ dans le bouton vert, ✗ dans le rouge) en plus de la couleur.

- 🟧 **Dépendance forte à la synthèse vocale, sans alternative écrite garantie** — *où :* `Petits-Malins.html`, toute consigne est lue par `parler()` ; le footer indique « prononciation par synthèse vocale ».
  - Constat : beaucoup de consignes et la prononciation des mots/lettres reposent sur `speechSynthesis`. Si la voix est absente (navigateur sans voix FR/ES/IT installée, son coupé, ou `speechSynthesis` indisponible), **l'enfant perd l'info** : pour « Touche la lettre que tu entends » sans audio, l'exercice devient **insoluble** (la lettre cible n'est jamais écrite).
  - Public impacté : enfants sourds/malentendants, postes sans voix installée, mode silencieux — et l'app vise explicitement tous les enfants.
  - Correction : ne jamais faire reposer une consigne sur le **seul** canal audio. Pour les jeux d'écoute, prévoir un repli (afficher la lettre/le mot après X secondes, ou un mode « sans son » avec consigne écrite).

- 🟧 **Police « Comic Sans MS » + interface non paramétrable (dyslexie)** — *où :* `Petits-Malins.html`, `body{font-family:'Comic Sans MS'…}`.
  - Constat : Comic Sans est lisible pour certains mais **pas une police optimisée dyslexie** ; aucune option (OpenDyslexic, taille, interlignage) n'est offerte, ni dans les Petits Malins ni dans le Royaume.
  - Public impacté : enfants dyslexiques.
  - Correction : proposer un **réglage de police/taille** et une option type OpenDyslexic, avec interlignage aéré.

- 🟧 **« Mode calme » présent côté Royaume mais absent côté Petits Malins** — *où :* `Petits-Malins.html` (confettis, sons, animations `pop`/`fall` non désactivables).
  - Constat : le Royaume a un mode calme ; les Petits Malins (public le plus jeune, le plus sensible) **n'en ont aucun** : confettis, voix et animations se déclenchent sans pouvoir être réduits.
  - Public impacté : enfants autistes / hypersensibles sensoriels (public explicitement revendiqué).
  - Correction : porter le **mode calme** dans les Petits Malins (couper confettis/sons/animations, transitions douces).

- 🟨 **`user-select:none` + `maximum-scale=1.0, user-scalable=no`** — *où :* `Petits-Malins.html`, `<meta viewport>` et `body`.
  - Constat : le **zoom est désactivé** (`user-scalable=no`) — gênant pour un enfant malvoyant qui veut agrandir.
  - Correction : autoriser le zoom (retirer `maximum-scale`/`user-scalable=no`).

- 🟨 **Contraste de certains textes secondaires** — *où :* les deux fichiers : `.muted`/`.consigne` en gris clair (`#b9aee0` sur fond violet ; `#6b7280`/`#9ca3af`).
  - Constat : plusieurs textes « muted » et le footer risquent de ne pas atteindre le ratio AA 4.5:1.
  - Correction : vérifier les contrastes au contrastomètre et assombrir/éclaircir les gris concernés.

- 🟨 **Cibles tactiles : globalement bonnes, mais clavier numérique et options « phrase » plus petits** — *où :* `Petits-Malins.html`, `.touche` (clavier) et boutons-mots de `jeuPhrases`.
  - Constat : les grosses tuiles sont excellentes ; les touches du pavé et les petits boutons-mots sont plus serrés pour des doigts d'enfant.
  - Correction : augmenter taille/espacement de ces éléments (min ~44-48 px, marges).

- 🟨 **Navigation clavier / focus visible non garantis** — *où :* les deux fichiers (interactions surtout `onclick`).
  - Constat : pas de gestion explicite du focus visible ni d'attributs ARIA/`alt` sur les emojis porteurs de sens (un emoji 🐱 = « chat » n'a pas d'alternative texte pour lecteur d'écran).
  - Correction : ajouter `aria-label` sur les boutons-emojis, un style `:focus-visible`, et tester la navigation au clavier.

- 🟨 **Texte des cartes mentales (SVG) trop petit** — *où :* les deux fichiers, nœuds SVG (`font-size:12-14`).
  - Correction : agrandir la police des nœuds ou prévoir une version texte de la carte.

---

## Alignement avec l'objectif final (le Brevet)

En l'état, le **Royaume du Savoir prépare correctement les bases du Brevet** : les 4 épreuves (Français, Maths, Histoire-Géo-EMC, Sciences) sont couvertes, le contenu est juste, la progression 6ᵉ→5ᵉ→4ᵉ est lisible, et le **Brevet blanc** reproduit de bonnes conditions (questions mélangées toutes matières, sans aide, correction notée /20 avec mention, exclusion correcte des questions 6ᵉ).

**Ce qui manque pour réellement amener un élève *jusqu'au* Brevet :**
- **Le niveau 3ᵉ (année du Brevet) est absent** : on s'arrête à la 4ᵉ. Or le Brevet porte sur les attendus de 3ᵉ (en maths : théorème de Thalès, trigonométrie, fonctions, statistiques/probabilités, équations plus complexes ; en histoire : XXᵉ siècle, guerres mondiales, Ve République…). Le badge « 🎓 Brevet blanc réussi » et le slogan « jusqu'au Brevet » survendent donc un peu le contenu actuel.
- **Pas d'épreuve chronométrée** ni d'**oral** (le Brevet comporte un oral et un contrôle continu) — le Brevet blanc n'a pas de minuteur.
- **Pas de rédaction / questions à réponse développée** (le Français et l'Histoire du Brevet demandent de rédiger), seulement QCM/VF/saisie courte.
- **Les Petits Malins** servent les bases (CP) mais, en l'état (cartes mentales mal placées, pas de leçon avant l'exercice), entraînent surtout la reconnaissance, peu la **construction** des savoirs.

## Plan d'action priorisé

1. **🟥 Retirer le bouton « Carte mentale & vidéos » du menu des Petits Malins** (ou le déplacer en *fin* d'activité, avec une liste de vidéos fermée et validée par un adulte au lieu d'une recherche YouTube ouverte).
2. **🟧 Supprimer le double en-tête** du monde Petits Malins dans le Royaume : intégration native sans iframe, ou masquage de l'en-tête interne + suppression du cadre d'iframe.
3. **🟧 Rendre le feedback formatif chez les Petits Malins** : sur erreur, donner la bonne réponse + un mini-indice (comme le fait déjà le Royaume).
4. **🟧 Ne plus faire reposer une consigne sur le seul audio** : repli écrit pour tous les jeux d'écoute (afficher la cible si la voix manque) ; et **porter le « mode calme » dans les Petits Malins**.
5. **🟧 Ajouter une phase de découverte/leçon avant les exercices** des Petits Malins (Lecture, Calcul, Langues).
6. **🟧 Aligner `_norm` (Brevet) sur `norm` (leçons)** pour la virgule décimale ; autoriser une 2ᵉ tentative guidée sur les saisies ; corriger `jeuPhrases` (retour arrière, casse/ponctuation tolérées).
7. **🟧 Accessibilité visuelle :** redondance non colorée (✓/✗ sur le bouton choisi), option police dyslexie + taille/interlignage, ré-activer le zoom.
8. **🟨 Corrections fines de contenu :** reformuler « Colomb a découvert le continent » → « a atteint l'Amérique » ; consigne « son » → « lettre » dans `jeuSons` ; remplacer le distracteur « 4/0 » (m2) ; harmoniser drapeau/langue de l'anglais (`en-GB`/🇬🇧).
9. **🟨 Pour viser vraiment le Brevet :** ajouter le **niveau 3ᵉ**, un **minuteur** optionnel au Brevet blanc, et au moins une question à **réponse rédigée** par épreuve.
10. **🟨 Finitions accessibilité :** `aria-label` sur emojis, `:focus-visible`, cibles tactiles du pavé/boutons-mots agrandies, contrastes des textes « muted » vérifiés, police des cartes mentales agrandie.

---
*Audit réalisé le 2026-06-03 sur `Royaume-du-Savoir.html` (1921 lignes) et `Petits-Malins.html` (926 lignes). Tous les calculs de maths ont été recalculés ; toutes les traductions et dates clés vérifiées (recherche web pour Colomb 1492 et la vitesse de la lumière).*
