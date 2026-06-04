/* =========================================================================
   DONNÉES — PETITS MALINS (Le Royaume du Savoir)
   -------------------------------------------------------------------------
   Banques de contenu du module « Petits Malins » (les plus jeunes) :
   mots-images, phrases à lire, textes de compréhension + questions,
   vocabulaire FR/EN/ES/IT, leçons d'histoire et quiz, chronologie,
   cartes mentales récapitulatives.

   Ce fichier ne contient QUE des données. Le moteur du module PM (dans le
   HTML) lit ces banques via l'objet global PM_DATA, puis les réutilise sous
   leurs noms d'origine (MOTS, PHRASES, TEXTES, …) — rien d'autre ne change.

   IMPORTANT (limite volontaire) : la banque PROBLEMES (problèmes de calcul)
   N'A PAS été externalisée. Ce sont des fonctions génératrices qui dépendent
   d'un utilitaire interne au module ; les déplacer aurait risqué de casser le
   module. Elle reste donc dans le HTML, à côté du moteur.

   Licence du contenu : CC-BY 4.0 (voir CONTENU-LICENCE.md).
   ========================================================================= */
var PM_DATA = {

  /* Cartes mentales récapitulatives (affichées en fin d'activité) */
  CARTES: {
    lecture:{titre:'La lecture', c:'#e11d48', noeuds:['Les voyelles a e i o u','Les consonnes','Les syllabes ba be bi','Lire des mots','Lire des phrases']},
    calcul:{titre:'Le calcul', c:'#2563eb', noeuds:['Compter','Additionner +','Soustraire −','Multiplier ×','Diviser ÷']},
    langues:{titre:'Les langues', c:'#059669', noeuds:['Anglais','Espagnol','Italien','Les nombres','Les couleurs']},
    histoire:{titre:'Le temps', c:'#d97706', noeuds:['Prehistoire','Antiquite','Moyen Age','Temps modernes','Aujourd hui']}
  },

  /* Lecture : mots-images */
  MOTS: [
    {mot:'CHAT', img:'🐱'},{mot:'CHIEN', img:'🐶'},{mot:'POMME', img:'🍎'},
    {mot:'SOLEIL', img:'☀️'},{mot:'LUNE', img:'🌙'},{mot:'FLEUR', img:'🌸'},
    {mot:'MAISON', img:'🏠'},{mot:'VOITURE', img:'🚗'},{mot:'BALLON', img:'⚽'},
    {mot:'POISSON', img:'🐟'},{mot:'GÂTEAU', img:'🎂'},{mot:'ÉTOILE', img:'⭐'},
    {mot:'ARBRE', img:'🌳'},{mot:'OISEAU', img:'🐦'},{mot:'BANANE', img:'🍌'}
  ],

  /* Lecture : phrases à remettre en ordre */
  PHRASES: [
    'Le chat dort sur le lit.',
    'Maman fait un bon gâteau.',
    'Le soleil brille très fort.',
    'Mon chien court dans le jardin.',
    'La fleur sent très bon.',
    "Le poisson nage dans l'eau."
  ],

  /* Lecture : textes de compréhension + questions */
  TEXTES: [
    {titre:'Le petit chat gris', em:'🐱',
     txt:"Minou est un petit chat gris. Tous les matins, il boit son lait dans un bol bleu. Il adore jouer avec une pelote de laine rouge. Le soir, fatigué, il dort en boule près du feu, dans la cuisine.",
     qs:[{q:'De quelle couleur est Minou ?', bon:'Gris', faux:['Noir','Blanc'], ind:'Relis la première phrase.'},
         {q:'Avec quoi aime-t-il jouer ?', bon:'Une pelote de laine', faux:['Un ballon','Une souris'], ind:'Cherche le mot « jouer ».'},
         {q:'Où dort-il le soir ?', bon:'Près du feu', faux:['Dans le jardin','Sur le toit'], ind:'Regarde la fin du texte.'}]},
    {titre:'La sortie à la ferme', em:'🐮',
     txt:"Samedi, Lucas est allé à la ferme avec sa classe. Il a vu trois vaches, deux cochons roses et beaucoup de poules. Le fermier lui a montré comment ramasser les œufs. Lucas a rapporté six œufs frais à la maison.",
     qs:[{q:'Quel jour Lucas est-il allé à la ferme ?', bon:'Samedi', faux:['Dimanche','Mercredi'], ind:'C\'est le premier mot.'},
         {q:'Combien de vaches a-t-il vues ?', bon:'Trois', faux:['Deux','Six'], ind:'« trois vaches ».'},
         {q:'Qu\'a-t-il appris à ramasser ?', bon:'Les œufs', faux:['Le foin','Les pommes'], ind:'Le fermier lui a montré…'},
         {q:'Combien d\'œufs a-t-il rapportés ?', bon:'Six', faux:['Trois','Dix'], ind:'« six œufs frais ».'}]},
    {titre:'La graine et la fleur', em:'🌱',
     txt:"Emma a planté une petite graine dans un pot. Chaque jour, elle lui donne un peu d'eau et la met au soleil sur la fenêtre. Après deux semaines, une tige verte est sortie de la terre. Bientôt, une jolie fleur jaune est apparue.",
     qs:[{q:'Qu\'a planté Emma ?', bon:'Une graine', faux:['Un arbre','Une fleur déjà grande'], ind:'Tout au début.'},
         {q:'De quoi la graine a-t-elle besoin ?', bon:'D\'eau et de soleil', faux:['De chocolat','De musique'], ind:'« un peu d\'eau » et « au soleil ».'},
         {q:'De quelle couleur est la fleur ?', bon:'Jaune', faux:['Rouge','Bleue'], ind:'La toute dernière phrase.'}]}
  ],

  /* Calcul : objets à compter (emojis) */
  OBJETS: ['🍎','🌟','🐶','🎈','🍓','🐠','🌸','🚗','⚽','🦋'],

  /* Langues : configuration des trois langues */
  LANGUES: {
    en:{nom:'Anglais', drap:'🇬🇧', code:'en-GB', salut:'Hello!'},
    es:{nom:'Espagnol', drap:'🇪🇸', code:'es-ES', salut:'¡Hola!'},
    it:{nom:'Italien', drap:'🇮🇹', code:'it-IT', salut:'Ciao!'}
  },

  /* Langues : vocabulaire de base */
  VOCAB: [
    {img:'🐱', fr:'Chat',   en:'Cat',    es:'Gato',     it:'Gatto'},
    {img:'🐶', fr:'Chien',  en:'Dog',    es:'Perro',    it:'Cane'},
    {img:'🏠', fr:'Maison', en:'House',  es:'Casa',     it:'Casa'},
    {img:'☀️', fr:'Soleil', en:'Sun',    es:'Sol',      it:'Sole'},
    {img:'🍎', fr:'Pomme',  en:'Apple',  es:'Manzana',  it:'Mela'},
    {img:'💧', fr:'Eau',    en:'Water',  es:'Agua',     it:'Acqua'},
    {img:'📕', fr:'Livre',  en:'Book',   es:'Libro',    it:'Libro'},
    {img:'🌳', fr:'Arbre',  en:'Tree',   es:'Árbol',    it:'Albero'},
    {img:'⭐', fr:'Étoile', en:'Star',   es:'Estrella', it:'Stella'},
    {img:'🌸', fr:'Fleur',  en:'Flower', es:'Flor',     it:'Fiore'},
    {img:'🐟', fr:'Poisson',en:'Fish',   es:'Pez',      it:'Pesce'},
    {img:'🥖', fr:'Pain',   en:'Bread',  es:'Pan',      it:'Pane'}
  ],

  /* Langues : nombres */
  NOMBRES: [
    {img:'1️⃣',fr:'Un',    en:'One',   es:'Uno',    it:'Uno'},
    {img:'2️⃣',fr:'Deux',  en:'Two',   es:'Dos',    it:'Due'},
    {img:'3️⃣',fr:'Trois', en:'Three', es:'Tres',   it:'Tre'},
    {img:'4️⃣',fr:'Quatre',en:'Four',  es:'Cuatro', it:'Quattro'},
    {img:'5️⃣',fr:'Cinq',  en:'Five',  es:'Cinco',  it:'Cinque'},
    {img:'6️⃣',fr:'Six',   en:'Six',   es:'Seis',   it:'Sei'},
    {img:'7️⃣',fr:'Sept',  en:'Seven', es:'Siete',  it:'Sette'},
    {img:'8️⃣',fr:'Huit',  en:'Eight', es:'Ocho',   it:'Otto'},
    {img:'9️⃣',fr:'Neuf',  en:'Nine',  es:'Nueve',  it:'Nove'},
    {img:'🔟',fr:'Dix',   en:'Ten',   es:'Diez',   it:'Dieci'}
  ],

  /* Langues : couleurs */
  COULEURS: [
    {img:'🔴',fr:'Rouge', en:'Red',    es:'Rojo',    it:'Rosso'},
    {img:'🔵',fr:'Bleu',  en:'Blue',   es:'Azul',    it:'Blu'},
    {img:'🟢',fr:'Vert',  en:'Green',  es:'Verde',   it:'Verde'},
    {img:'🟡',fr:'Jaune', en:'Yellow', es:'Amarillo',it:'Giallo'},
    {img:'⚫',fr:'Noir',  en:'Black',  es:'Negro',   it:'Nero'},
    {img:'⚪',fr:'Blanc', en:'White',  es:'Blanco',  it:'Bianco'},
    {img:'🟠',fr:'Orange',en:'Orange', es:'Naranja', it:'Arancione'},
    {img:'🟣',fr:'Violet',en:'Purple', es:'Morado',  it:'Viola'}
  ],

  /* Langues : petites phrases utiles */
  PHRASES_L: [
    {img:'👋',fr:'Bonjour',      en:'Hello',         es:'Hola',          it:'Ciao'},
    {img:'🙏',fr:'Merci',        en:'Thank you',     es:'Gracias',       it:'Grazie'},
    {img:'👋',fr:'Au revoir',    en:'Goodbye',       es:'Adiós',         it:'Arrivederci'},
    {img:'😊',fr:"S'il te plaît",en:'Please',        es:'Por favor',     it:'Per favore'},
    {img:'❓',fr:'Comment ça va ?',en:'How are you?', es:'¿Cómo estás?',  it:'Come stai?'},
    {img:'👍',fr:'Oui',          en:'Yes',           es:'Sí',            it:'Sì'},
    {img:'👎',fr:'Non',          en:'No',            es:'No',            it:'No'}
  ],

  /* Histoire : leçons + quiz de base */
  LECONS: [
    {titre:'La Préhistoire', ill:'🦣',
     texte:"Il y a très très longtemps, les hommes vivaient dans des grottes. On les appelle les hommes préhistoriques. Ils ont découvert le <b>feu</b> pour se réchauffer et cuire la nourriture, et ils chassaient des animaux comme le mammouth. Ils dessinaient sur les murs des grottes !",
     quiz:{q:'Où vivaient les hommes préhistoriques ?', bon:'Dans des grottes', faux:['Dans des châteaux','Dans des immeubles'], ind:'Avant les maisons…'}, age:'petit'},
    {titre:'Les Égyptiens', ill:'🔺',
     texte:"En Égypte, il y a des milliers d'années, les rois s'appelaient les <b>pharaons</b>. Ils ont fait construire d'immenses <b>pyramides</b> en pierre. Les Égyptiens écrivaient avec de petits dessins appelés hiéroglyphes.",
     quiz:{q:"Comment s'appelaient les rois d'Égypte ?", bon:'Les pharaons', faux:['Les chevaliers','Les présidents'], ind:'En Égypte ancienne.'}, age:'petit'},
    {titre:'Les Chevaliers', ill:'🏰',
     texte:"Au Moyen Âge, les <b>chevaliers</b> portaient une armure en métal et se battaient avec une épée. Ils vivaient dans de grands <b>châteaux forts</b> entourés de murs et de douves remplies d'eau pour se protéger.",
     quiz:{q:'Où vivaient les chevaliers ?', bon:'Dans des châteaux forts', faux:['Dans des pyramides','Dans des cavernes'], ind:'De grands bâtiments protégés.'}, age:'petit'},
    {titre:'Les Romains', ill:'🏛️',
     texte:"Les Romains vivaient à <b>Rome</b>, il y a plus de 2000 ans. Ils ont construit des routes, des aqueducs pour transporter l'eau, et de grandes arènes comme le <b>Colisée</b> où combattaient les gladiateurs. Leur chef s'appelait l'empereur.",
     quiz:{q:"Comment s'appelle la grande arène de Rome ?", bon:'Le Colisée', faux:['La Tour Eiffel','La pyramide'], ind:'Une grande arène ronde.'}, age:'grand'},
    {titre:'Christophe Colomb', ill:'⛵',
     texte:"En <b>1492</b>, un explorateur nommé Christophe Colomb est parti sur des bateaux à travers l'océan. Il cherchait une nouvelle route vers l'Asie et il a atteint des terres inconnues des Européens, en <b>Amérique</b> (d'abord des îles des Caraïbes).",
     quiz:{q:"Quel continent Colomb a-t-il atteint en explorant l'océan ?", bon:"L'Amérique", faux:["L'Australie","L'Afrique"], ind:'De l\'autre côté de l\'océan Atlantique.'}, age:'grand'},
    {titre:'La Tour Eiffel', ill:'🗼',
     texte:"La <b>Tour Eiffel</b> a été construite à Paris en <b>1889</b>, il y a plus de 130 ans, par l'ingénieur Gustave Eiffel. Elle est faite de fer et mesure plus de 300 mètres. C'est le monument le plus connu de France !",
     quiz:{q:'Dans quelle ville se trouve la Tour Eiffel ?', bon:'Paris', faux:['Rome','Londres'], ind:'La capitale de la France.'}, age:'grand'}
  ],

  /* Histoire : quiz supplémentaires (mode « Grands »), indexés par titre de leçon */
  QUIZ_PLUS: {
    'La Préhistoire':[
      {q:'Qu\'ont découvert les hommes préhistoriques pour se réchauffer ?', bon:'Le feu', faux:["L'électricité",'Le gaz'], ind:'Ça brûle et ça réchauffe.'},
      {q:'Quel grand animal chassaient-ils ?', bon:'Le mammouth', faux:['Le lion','Le dauphin'], ind:'Un éléphant tout poilu.'}
    ],
    'Les Égyptiens':[
      {q:'Qu\'ont fait construire les pharaons ?', bon:'Des pyramides', faux:['Des gratte-ciels','Des ponts'], ind:'De grands triangles de pierre.'},
      {q:'Comment s\'appelaient les petits dessins de leur écriture ?', bon:'Des hiéroglyphes', faux:['Des emojis','Des lettres'], ind:'Un mot un peu compliqué.'}
    ],
    'Les Chevaliers':[
      {q:'En quoi était faite l\'armure du chevalier ?', bon:'En métal', faux:['En bois','En papier'], ind:'Un matériau dur et brillant.'},
      {q:'Qu\'y avait-il autour des châteaux forts ?', bon:"Des douves remplies d'eau", faux:['Une autoroute','Un jardin de fleurs'], ind:'De l\'eau pour protéger.'}
    ],
    'Les Romains':[
      {q:'À quoi servaient les aqueducs des Romains ?', bon:"À transporter l'eau", faux:['À voler','À faire du feu'], ind:'Pense à « aqua ».'},
      {q:'Qui combattait dans le Colisée ?', bon:'Les gladiateurs', faux:['Les chevaliers','Les pharaons'], ind:'Des combattants romains.'},
      {q:'Comment s\'appelait le chef des Romains ?', bon:"L'empereur", faux:['Le président','Le roi mage'], ind:'Pas un président.'}
    ],
    'Christophe Colomb':[
      {q:'En quelle année Colomb a-t-il traversé l\'océan vers l\'Amérique ?', bon:'1492', faux:['1789','2000'], ind:'À la fin du XVe siècle.'},
      {q:'Comment a-t-il traversé l\'océan ?', bon:'En bateau', faux:['En avion','À pied'], ind:'Il n\'y avait pas d\'avion !'}
    ],
    'La Tour Eiffel':[
      {q:'En quelle année la Tour Eiffel a-t-elle été construite ?', bon:'1889', faux:['1492','1980'], ind:'À la fin du XIXe siècle.'},
      {q:'En quel matériau est faite la Tour Eiffel ?', bon:'En fer', faux:['En or','En verre'], ind:'Un métal solide.'},
      {q:'Qui a construit la Tour Eiffel ?', bon:'Gustave Eiffel', faux:['Napoléon','Léonard de Vinci'], ind:'Elle porte son nom.'}
    ]
  },

  /* Histoire : chronologie à remettre dans l'ordre */
  CHRONO: [
    {e:'La Préhistoire', o:1, em:'🦣'},
    {e:'Les Égyptiens et les pyramides', o:2, em:'🔺'},
    {e:'Les Romains et le Colisée', o:3, em:'🏛️'},
    {e:'Les chevaliers du Moyen Âge', o:4, em:'🏰'},
    {e:'Christophe Colomb (1492)', o:5, em:'⛵'},
    {e:'La Tour Eiffel (1889)', o:6, em:'🗼'}
  ]

};

/* Exposition en global (chargement file:// classique, hors-ligne). */
if (typeof window !== "undefined") { window.PM_DATA = PM_DATA; }
