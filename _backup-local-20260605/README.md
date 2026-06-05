# 🪄 Collegica

> **Collegica, l'appli familiale du CP au Brevet.** À l'ouverture, on choisit un profil. Chaque profil appartient à un **monde** :
> 🐣 **Les Petits Malins** (les bases, dès le CP : lecture, calcul, langues, histoire) ou 🏰 **Le Royaume du Savoir** (collège, jusqu'au Brevet).
> Une même aventure qui accompagne **tous les enfants** au fil de leur scolarité. Les deux univers cohabitent dans le même fichier `Royaume-du-Savoir.html` ; la progression de chaque enfant est enregistrée séparément sur l'appareil. Le monde des petits est aussi disponible seul dans `Petits-Malins.html`.
>
> 🎯 **But de l'application** : permettre à l'enfant/ado d'obtenir son **Brevet** dans de bonnes conditions. En fin de parcours, un **Brevet blanc** (examen multi-matières **centré sur la 3ᵉ**, noté **/20** avec mentions, correction détaillée et meilleur score conservé) entraîne l'élève comme le jour J — avec un **minuteur optionnel** (conditions réelles) et une **question rédigée** d'entraînement. L'app aura rempli sa mission le jour où ce résultat est atteint.

Application d'apprentissage **gamifiée** qui accompagne les enfants **du CP au Brevet**, pensée pour **tous les enfants** — et particulièrement adaptée aux enfants **autistes** (structure prévisible, une tâche à la fois, mode calme). L'objectif : évaluer son niveau, la faire progresser pas à pas sur le programme de l'Éducation nationale, avec un renforcement positif fort et un univers fantastique motivant.

> Application web autonome : un seul fichier `Royaume-du-Savoir.html`. Aucune installation. Fonctionne sur PC (et tablette) en ouvrant le fichier dans un navigateur. La progression est sauvegardée automatiquement sur l'ordinateur.

---

## ✨ Fonctionnalités

- **Démarrage toujours sur l'accueil** : au lancement, on voit la page d'accueil et la liste des profils (avec le monde de chacun) ; un bouton **« ▶ Reprendre »** par profil replonge volontairement là où l'enfant s'était arrêté (le dernier profil utilisé est mis en avant).
- **Comptes personnalisés** : plusieurs profils (ta fille, un frère/une sœur…), chacun avec sa progression, son avatar et un **code PIN optionnel**. Comptes enregistrés localement sur l'appareil, sans envoi de données.
- **Création d'avatar** (mage, fée, dragonne…) et nom de magicien·ne.
- **Test de l'Oracle** : un diagnostic doux pour situer le niveau, sans mise en échec.
- **Carte du royaume** : chaque matière est une région magique à explorer.
- **Quêtes (leçons)** : un cours « grimoire », une **carte mentale rédigée** (la notion au centre, 4 à 6 branches qui enseignent : idées-clés, méthode, exemples), une **vidéo intégrée** d'une chaîne reconnue, puis des exercices.
- **Entraînement illimité de maths** : un générateur d'exercices (« 🎲 ») dont les réponses sont **calculées par le code** (donc toujours justes), réparti par niveau sur **16 thèmes** (décimaux, fractions, division euclidienne, volumes, calcul littéral, équations, Pythagore, Thalès, fonctions, notation scientifique, statistiques, probabilités, cosinus…).
- **Accessibilité renforcée** : ✓/✗ en plus de la couleur (daltonisme), focus clavier visible, respect de `prefers-reduced-motion`, en plus du **Mode calme** et de la **police dyslexie**.
- **Exercices variés** : QCM, vrai/faux, réponses à saisir — avec une explication bienveillante à chaque réponse.
- **Gamification saine** : points d'expérience ⚡, niveaux de mage 🏅, cristaux 💎, séries de jours 🔥, étoiles, badges.
- **Royaume qui se construit** : les cristaux gagnés servent à bâtir 10 constructions (château, tour, pont, bibliothèque, dragon, palais…). Plus on apprend, plus le royaume grandit.
- **Adapté à l'autisme** : structure répétitive et prévisible, une tâche à la fois, langage clair, feedback positif, et un **Mode calme** qui réduit les animations — disponible **dans les deux mondes** (Royaume *et* Petits Malins).

### 🐣 Les Petits Malins (intégrés nativement)

Le monde des petits est désormais **intégré directement** dans le Royaume (plus d'iframe) : **un seul en-tête**, une mise en page constante et prévisible. On y trouve :

- **Lecture, Calcul, Langues (EN/ES/IT), Histoire** avec de grosses tuiles colorées et deux niveaux (🐣 Petits / 🦉 Grands).
- **Feedback formatif** : en cas d'erreur, l'enfant voit *la bonne réponse* et un petit indice (jamais un simple « essaie encore »).
- **Jouable sans le son** : les jeux d'écoute affichent aussi l'information en clair (la lettre, le mot), et la réussite/erreur est signalée par un symbole ✓/✗ en plus de la couleur (daltonisme).
- **Carte mentale de synthèse** affichée **à la fin** d'une série réussie (« ce que tu as appris »), et non plus en porte d'entrée.
- **Mode calme** propre aux petits : coupe confettis, animations et voix automatique (persistant par profil).
- Score sauvegardé **par profil**. Le monde des petits reste aussi disponible seul dans `Petits-Malins.html`.

## 📚 Contenu (collège, du CP au Brevet)

| Matière | Région | Niveaux | Leçons |
|---|---|---|---|
| Mathématiques | Les Tours de Calcul | 6ᵉ → 5ᵉ → 4ᵉ → **3ᵉ** | 24 |
| Français | La Bibliothèque Enchantée | 6ᵉ → 5ᵉ → 4ᵉ → **3ᵉ** | 24 |
| Histoire-Géo & EMC | Le Donjon du Temps | 6ᵉ → 5ᵉ → 4ᵉ → **3ᵉ** | 22 |
| Sciences (PC · SVT · Techno) | Le Laboratoire Alchimique | 6ᵉ → 5ᵉ → 4ᵉ → **3ᵉ** | 24 |

**94 leçons · 796 questions** à ce stade, réparties sur les 4 niveaux du collège (6ᵉ=22, 5ᵉ=25, 4ᵉ=27, 3ᵉ=20), **plus** des centaines de questions générées par l'Entraînement illimité de maths. **Chaque leçon a une carte mentale rédigée.** **Algorithmique/Scratch** et **Technologie** sont présents. Le niveau **6ᵉ** fait la jonction avec le monde des Petits Malins, et la **3ᵉ** (année du Brevet) complète le parcours. Quelques notions couvertes par niveau :
- **Maths** : décimaux, fractions, division euclidienne, symétries, aires, priorités, repérage (6ᵉ-5ᵉ) ; calcul littéral, équations, Pythagore, puissances, agrandissement/échelle, Scratch (4ᵉ) ; Thalès, fonctions, notation scientifique, PGCD, probabilités, cosinus (3ᵉ).
- **Français** : classes de mots, conjugaison, homophones, accords, types de phrases (6ᵉ-5ᵉ) ; passé composé, COD/COI, théâtre, registres ; discours rapporté, subordonnées, participe passé, conditionnel, subjonctif, poésie (4ᵉ) ; voix passive, argumentation (3ᵉ).
- **Histoire-Géo-EMC** : Préhistoire, Mésopotamie, Égypte, Grèce, Rome, féodalité, islam (6ᵉ-5ᵉ) ; Lumières & Révolution, traite négrière, XIXᵉ siècle, urbanisation, mondialisation (4ᵉ) ; deux Guerres mondiales, totalitarismes, guerre froide, décolonisation, Vᵉ République, UE, aménager le territoire (3ᵉ).
- **Sciences** : vivant, système solaire, mélanges, objets techniques, écosystèmes (6ᵉ) ; états et cycle de l'eau, circuits, digestion, respiration, photosynthèse (5ᵉ) ; atomes, lumière, son, mouvement, masse volumique, poids/masse, reproduction, chaîne d'énergie (4ᵉ) ; énergie, pH, génétique, évolution (3ᵉ).

### 🎓 Le Brevet blanc (conditions réelles)

- **Centré sur la 3ᵉ** : le tirage privilégie les questions de 3ᵉ (le niveau de l'examen) tout en gardant un mélange collège (hors 6ᵉ).
- **Minuteur optionnel** : on peut activer un compte à rebours (~1 min 15 par question) pour s'entraîner comme le jour J ; à l'expiration, la copie est rendue au