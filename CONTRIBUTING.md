# Contribuer au Royaume du Savoir

Merci de vouloir aider ! Ce projet est pensé pour que **n'importe qui** (et en
particulier un·e enseignant·e) puisse **ajouter une leçon en éditant un fichier
de données**, sans toucher au code de l'application.

## 1. Comprendre l'architecture en 30 secondes

- Le **moteur** (l'application) est dans `Royaume-du-Savoir.html`. On n'y touche
  pas pour ajouter du contenu.
- Le **contenu** (les données) vit dans le dossier `data/` :
  - `data/contenu-college.js` — le collège (maths, français, histoire-géo,
    sciences), objet global `CONTENT`.
  - `data/contenu-petits-malins.js` — les bases (lecture, calcul, langues,
    histoire) pour les plus jeunes, objet global `PM_DATA`.
- En développement, le HTML charge ces fichiers via des balises
  `<script src="data/...">`. Pour **distribuer**, on fabrique un fichier unique
  (voir la section Build).

## 2. Ajouter une leçon au collège (le cas le plus courant)

Ouvrez **`data/contenu-college.js`**. Repérez la matière voulue (`maths`,
`francais`, `histgeo`, `sciences`) puis, dans son tableau `lessons:[ … ]`,
ajoutez un objet leçon. Voici un **modèle commenté** :

```js
{
  id: "m14",            // identifiant UNIQUE et court (ex : m## pour maths,
                        //   f## français, h## histoire-géo, s## sciences).
                        //   Ne JAMAIS réutiliser un id existant (il sert de clé
                        //   de progression).
  niveau: "5e",         // optionnel : "6e", "5e", "4e" ou "3e" (ordre d'affichage).
                        //   Si absent, la leçon est considérée comme niveau de base.
  title: "Les aires",   // titre court affiché à l'élève.

  // Le "cours" est un petit texte. Les mots en <b>gras</b> servent aussi à
  // construire automatiquement la carte mentale : mettez en gras les notions clés.
  cours: "L'<b>aire</b> mesure une surface. Aire d'un rectangle = " +
         "<b>Longueur × largeur</b>. Elle se mesure en <b>cm²</b>.",

  questions: [
    // QCM : un seul bon choix. "answer" = INDEX (0 = première option) dans "options".
    { type: "qcm",
      q: "L'aire se mesure en :",
      options: ["cm", "cm²", "litres", "kg"],
      answer: 1,
      explain: "Une surface se mesure en cm²." },

    // Vrai/Faux : "answer" vaut true ou false.
    { type: "vf",
      q: "L'aire d'un carré de côté 3 cm vaut 9 cm².",
      answer: true,
      explain: "3 × 3 = 9 cm²." },

    // Saisie : l'élève tape sa réponse. "answer" = LISTE des formes acceptées
    //   (la comparaison ignore la casse, les espaces et accepte la virgule FR).
    { type: "saisie",
      q: "Aire d'un rectangle de 4 cm sur 5 cm (en cm²) ?",
      answer: ["20", "20 cm²"],
      explain: "4 × 5 = 20 cm²." }
  ]
}
```

Règles d'or :

- **Vérifiez chaque réponse à la main.** Une erreur de fait ou de calcul est plus
  grave qu'une leçon manquante. Cette app est utilisée par de vrais enfants.
- **Gardez un `id` unique.** C'est la clé de la progression : la changer ou la
  dupliquer perturbe les profils existants.
- **N'oubliez aucune virgule** entre deux objets (`}` puis `,` puis `{`). Les
  accolades `{}` et crochets `[]` doivent rester équilibrés.
- Les apostrophes françaises dans les chaînes : préférez les guillemets doubles
  `"…"` pour la chaîne afin de pouvoir écrire `l'aire` sans échappement.

Pour les **Petits Malins**, le principe est le même dans
`data/contenu-petits-malins.js` (objet `PM_DATA`), avec des structures dédiées
(`MOTS`, `TEXTES`, `VOCAB`, `LECONS`…). Ne renommez pas ces clés : le moteur les
attend telles quelles.

## 3. Valider véracité et accessibilité (audit « enseignant »)

Avant de proposer une leçon, faites-la relire sous l'angle d'un·e enseignant·e.
Ce dépôt contient une compétence d'audit (`enseignant/`, packagée dans
`enseignant.skill`) qui vérifie trois choses :

1. **Pédagogie** — progression, clarté des consignes, qualité du feedback.
2. **Accessibilité** — pour tous les enfants (autisme, dyslexie, TDAH,
   daltonisme, déficiences sensorielles/motrices).
3. **Véracité** — exactitude des faits, calculs, dates, définitions, traductions
   (vérifiés, jamais supposés).

Dans un outil compatible (Claude Code / Cowork), lancez l'audit `enseignant` sur
le fichier de données ou la leçon ajoutée, et corrigez ce qu'il signale. À
défaut, demandez à un·e enseignant·e de relire.

## 4. Builder le fichier unique distribuable

On **développe** en modulaire (HTML + `data/`), on **distribue** un seul fichier.

```bash
node build.js
```

(ou, sous Windows, double-clic sur **`build.bat`**)

Le script lit `Royaume-du-Savoir.html`, remplace chaque
`<script src="data/...">` par le contenu du fichier, et écrit
**`dist/Royaume-du-Savoir.html`** : un fichier unique autonome, qui s'ouvre par
double-clic et fonctionne hors-ligne. **C'est ce fichier de `dist/` que l'on
distribue** (jamais besoin du dossier `data/` côté utilisateur final).

## 5. Tester avant de proposer une modification

- Ouvrez `Royaume-du-Savoir.html` (version de dev) **et** le `dist/` produit, et
  vérifiez que la nouvelle leçon apparaît et fonctionne (cours, questions,
  correction).
- Vérifiez que la progression existante n'est pas cassée (un profil de test).
- Le fichier HTML doit toujours se terminer par `boot();</script></body></html>`.

Merci, et bonne contribution !
