/* =========================================================================
   DONNÉES — CONTENU COLLÈGE (Le Royaume du Savoir)
   -------------------------------------------------------------------------
   Ce fichier ne contient QUE des données (aucune logique de moteur).
   Une enseignante ou un enseignant peut ajouter une leçon ICI, sans toucher
   au code de l'application.

   Structure d'une leçon :
     { id, niveau, title, cours, questions:[ … ] }
   Types de questions :
     - 'qcm'    : un seul bon choix (answer = index dans options)
     - 'vf'     : vrai/faux (answer = true ou false)
     - 'saisie' : réponse à taper (answer = liste des formes acceptées)

   Licence du contenu : CC-BY 4.0 (voir CONTENU-LICENCE.md).
   ========================================================================= */
var CONTENT = {
  subjects: [
    {
      id:"maths", name:"Mathématiques", region:"Les Tours de Calcul", icon:"🗼", color:"#46c8c0",
      lessons:[
        {
          id:"m9", niveau:"6e", title:"Les nombres décimaux",
          cours:"Un <b>nombre décimal</b> a une partie entière et une partie après la <b>virgule</b> (ex : 3,25). " +
                "Le 1er chiffre après la virgule est celui des <b>dixièmes</b>, le 2e celui des <b>centièmes</b>. " +
                "Pour <b>comparer</b>, on regarde d'abord la partie entière, puis les dixièmes. 3,5 = 3,50.",
          questions:[
            {type:"qcm", q:"Dans 3,25, le chiffre 2 représente :", options:["les dixièmes","les centièmes","les unités","les dizaines"], answer:0, explain:"1er chiffre après la virgule = dixièmes : 2 dixièmes."},
            {type:"qcm", q:"Quel nombre est le plus grand ?", options:["3,5","3,45","3,09","3,4"], answer:0, explain:"3,5 = 3,50 : le plus grand (5 dixièmes)."},
            {type:"saisie", q:"Combien fait 2,5 + 1,75 ? (avec une virgule)", answer:["4,25"], explain:"On aligne les virgules : 2,50 + 1,75 = 4,25."},
            {type:"vf", q:"Les nombres 3,5 et 3,50 sont égaux.", answer:true, explain:"Un zéro après le dernier décimal ne change rien."},
            {type:"qcm", q:"L'écriture décimale de 7/10 est :", options:["0,7","7,0","0,07","1,7"], answer:0, explain:"7 dixièmes = 0,7."}
          ]
        },
        {
          id:"m10", niveau:"6e", title:"Périmètre et aire du rectangle",
          cours:"Le <b>périmètre</b> est la longueur du tour. Rectangle : périmètre = <b>2 × (Longueur + largeur)</b>. " +
                "L'<b>aire</b> est la surface. Rectangle : aire = <b>Longueur × largeur</b>. Périmètre en cm, aire en <b>cm²</b>.",
          questions:[
            {type:"saisie", q:"Rectangle 5 cm sur 3 cm : périmètre (en cm) ?", answer:["16","16 cm"], explain:"2 × (5 + 3) = 16 cm."},
            {type:"saisie", q:"Rectangle 5 cm sur 3 cm : aire (en cm²) ?", answer:["15","15 cm²"], explain:"5 × 3 = 15 cm²."},
            {type:"qcm", q:"Une aire se mesure en :", options:["cm","cm²","litres","kg"], answer:1, explain:"Une surface : en cm²."},
            {type:"vf", q:"Le périmètre d'un carré de côté 4 cm vaut 16 cm.", answer:true, explain:"4 × 4 = 16 cm."},
            {type:"qcm", q:"Aire d'un carré de côté 6 cm ?", options:["12 cm²","24 cm²","36 cm²","18 cm²"], answer:2, explain:"6 × 6 = 36 cm²."}
          ]
        },
        {
          id:"m1", title:"Les nombres relatifs",
          cours:"Un <b>nombre relatif</b> peut être positif (ex : +5) ou négatif (ex : -3). " +
                "Pour <b>additionner</b> deux nombres de même signe, on additionne et on garde le signe. " +
                "De signes différents : on soustrait et on garde le signe du plus grand. " +
                "Soustraire revient à ajouter l'opposé : 2 − (−3) = 2 + 3 = 5.",
          questions:[
            {type:"qcm", q:"Combien fait (−7) + (−5) ?", options:["−12","−2","+12","+2"], answer:0,
             explain:"Même signe (négatifs) : on additionne 7+5=12 et on garde le signe −. Donc −12."},
            {type:"qcm", q:"Combien fait (−8) + 3 ?", options:["−11","−5","+5","+11"], answer:1,
             explain:"Signes différents : 8−3=5, on garde le signe du plus grand (8, négatif). Donc −5."},
            {type:"saisie", q:"Calcule : 4 − (−6) =", answer:["10","+10"],
             explain:"Soustraire un négatif = additionner : 4 + 6 = 10."},
            {type:"qcm", q:"Quel est l'opposé de −9 ?", options:["+9","−9","0","1/9"], answer:0,
             explain:"L'opposé de −9 est +9 (ils sont symétriques par rapport à 0)."},
            {type:"vf", q:"Sur une droite graduée, −5 est situé à gauche de −2.", answer:true,
             explain:"Plus un négatif est grand en valeur, plus il est à gauche : −5 < −2."}
          ]
        },
        {
          id:"m2", title:"Les fractions",
          cours:"Pour <b>additionner</b> des fractions, il faut le <b>même dénominateur</b>. " +
                "Ex : 1/2 + 1/3 → on met sur 6 : 3/6 + 2/6 = 5/6. " +
                "Prendre une fraction « de » un nombre = multiplier : 3/4 de 20 = 3×20/4 = 15.",
          questions:[
            {type:"qcm", q:"Combien fait 1/2 + 1/3 ?", options:["2/5","5/6","1/6","2/6"], answer:1,
             explain:"On met sur 6 : 3/6 + 2/6 = 5/6."},
            {type:"saisie", q:"Combien vaut 3/4 de 20 ? (réponds par un nombre)", answer:["15"],
             explain:"3/4 de 20 = 3 × 20 ÷ 4 = 60 ÷ 4 = 15."},
            {type:"qcm", q:"Quelle fraction est égale à 1/2 ?", options:["3/5","4/8","2/5","5/9"], answer:1,
             explain:"4/8 se simplifie en 1/2 (on divise haut et bas par 4)."},
            {type:"saisie", q:"Simplifie 6/9 (écris sous la forme a/b la plus simple).", answer:["2/3"],
             explain:"On divise par 3 : 6÷3 / 9÷3 = 2/3."},
            {type:"qcm", q:"Combien fait 5/6 − 1/6 ?", options:["4/6","4","6/6","5/6"], answer:0,
             explain:"Même dénominateur : on garde le 6 et on calcule 5−1 = 4, donc 4/6 (que l'on peut simplifier en 2/3). Attention : le dénominateur ne change pas (ce n'est pas « 4 » tout seul), et il faut bien soustraire (le résultat n'est pas 5/6)."}
          ]
        },
        {
          id:"m3", title:"La proportionnalité & les pourcentages",
          cours:"Deux grandeurs sont <b>proportionnelles</b> si on passe de l'une à l'autre en multipliant " +
                "toujours par le même nombre (le coefficient). Un <b>pourcentage</b> : 25 % d'un nombre = " +
                "25/100 × ce nombre. Ex : 25 % de 80 = 20.",
          questions:[
            {type:"saisie", q:"Calcule 25 % de 80.", answer:["20"],
             explain:"25 % = 25/100 = 1/4. Donc 80 ÷ 4 = 20."},
            {type:"qcm", q:"3 stylos coûtent 6 €. Combien coûtent 5 stylos (même prix unitaire) ?",
             options:["9 €","10 €","11 €","12 €"], answer:1,
             explain:"1 stylo = 6 ÷ 3 = 2 €. Donc 5 × 2 = 10 €."},
            {type:"saisie", q:"Calcule 10 % de 250.", answer:["25"],
             explain:"10 % = diviser par 10 : 250 ÷ 10 = 25."},
            {type:"qcm", q:"Un t-shirt à 40 € baisse de 50 %. Nouveau prix ?",
             options:["10 €","20 €","30 €","35 €"], answer:1,
             explain:"50 % de 40 = 20 € de réduction. 40 − 20 = 20 €."},
            {type:"vf", q:"Dans un tableau de proportionnalité, on passe d'une ligne à l'autre en multipliant par un même coefficient.",
             answer:true, explain:"C'est exactement la définition de la proportionnalité."}
          ]
        },
        {
          id:"m4", title:"Géométrie : angles & triangles",
          cours:"Dans tout triangle, la <b>somme des angles vaut 180°</b>. " +
                "L'<b>aire d'un triangle</b> = (base × hauteur) ÷ 2. " +
                "Deux angles <b>complémentaires</b> font 90°, deux angles <b>supplémentaires</b> font 180°.",
          questions:[
            {type:"saisie", q:"Un triangle a deux angles de 60° et 70°. Quel est le 3ᵉ angle (en degrés) ?",
             answer:["50","50°"], explain:"180 − 60 − 70 = 50°."},
            {type:"qcm", q:"Aire d'un triangle de base 8 cm et hauteur 5 cm ?",
             options:["13 cm²","20 cm²","40 cm²","26 cm²"], answer:1,
             explain:"(8 × 5) ÷ 2 = 40 ÷ 2 = 20 cm²."},
            {type:"qcm", q:"Deux angles supplémentaires ont pour somme :",
             options:["90°","180°","360°","45°"], answer:1,
             explain:"Supplémentaires = 180°. (Complémentaires = 90°.)"},
            {type:"saisie", q:"Un angle mesure 35°. Quel est son complément (en degrés) ?",
             answer:["55","55°"], explain:"Complémentaires font 90° : 90 − 35 = 55°."},
            {type:"vf", q:"Un triangle peut avoir deux angles droits.", answer:false,
             explain:"Non : deux angles droits feraient déjà 180°, il ne resterait rien pour le 3ᵉ."}
          ]
        },
        {
          id:"m5", niveau:"4e", title:"Développer & réduire (calcul littéral)",
          cours:"La <b>distributivité</b> : k(a + b) = k×a + k×b. Ex : 3(x + 4) = 3x + 12. " +
                "<b>Réduire</b>, c'est regrouper les termes semblables : 3x + 2x = 5x.",
          questions:[
            {type:"qcm", q:"Développe 3(x + 4).", options:["3x + 4","3x + 12","x + 12","7x"], answer:1,
             explain:"3×x + 3×4 = 3x + 12."},
            {type:"saisie", q:"Développe 2(a + 5). (écris le résultat)", answer:["2a+10","2a + 10"],
             explain:"2×a + 2×5 = 2a + 10."},
            {type:"qcm", q:"Développe 5(2x − 3).", options:["10x − 3","7x − 15","10x − 15","10x − 8"], answer:2,
             explain:"5×2x − 5×3 = 10x − 15."},
            {type:"saisie", q:"Réduis : 3x + 2x =", answer:["5x"], explain:"On additionne les coefficients : (3+2)x = 5x."},
            {type:"vf", q:"L'égalité k(a + b) = ka + kb s'appelle la distributivité.", answer:true,
             explain:"Oui, c'est la propriété de distributivité de la multiplication sur l'addition."}
          ]
        },
        {
          id:"m6", niveau:"4e", title:"Les équations du premier degré",
          cours:"Résoudre une <b>équation</b>, c'est trouver la valeur de l'inconnue (souvent x). " +
                "On fait la même opération des deux côtés du signe =. " +
                "Ex : x + 5 = 12 → x = 12 − 5 = 7.",
          questions:[
            {type:"saisie", q:"Résous : x + 5 = 12. x =", answer:["7"], explain:"x = 12 − 5 = 7."},
            {type:"saisie", q:"Résous : 3x = 15. x =", answer:["5"], explain:"x = 15 ÷ 3 = 5."},
            {type:"qcm", q:"Résous : 2x + 1 = 9.", options:["x = 3","x = 4","x = 5","x = 8"], answer:1,
             explain:"2x = 9 − 1 = 8, donc x = 8 ÷ 2 = 4."},
            {type:"saisie", q:"Résous : x − 4 = 10. x =", answer:["14"], explain:"x = 10 + 4 = 14."},
            {type:"vf", q:"Pour résoudre 2x = 10, on divise les deux côtés par 2.", answer:true,
             explain:"Oui : x = 10 ÷ 2 = 5."}
          ]
        },
        {
          id:"m7", niveau:"4e", title:"Le théorème de Pythagore",
          cours:"Dans un <b>triangle rectangle</b>, le côté opposé à l'angle droit est l'<b>hypoténuse</b> " +
                "(le plus long). Le théorème de Pythagore dit : (hypoténuse)² = (côté)² + (côté)². " +
                "Ex : côtés 3 et 4 → hypoténuse² = 9 + 16 = 25 → hypoténuse = 5.",
          questions:[
            {type:"qcm", q:"Dans un triangle rectangle, le côté opposé à l'angle droit s'appelle :",
             options:["la base","l'hypoténuse","la hauteur","le sommet"], answer:1,
             explain:"L'hypoténuse est le côté opposé à l'angle droit (et le plus long)."},
            {type:"saisie", q:"Triangle rectangle de côtés 3 et 4. Longueur de l'hypoténuse ?",
             answer:["5"], explain:"3² + 4² = 9 + 16 = 25, et √25 = 5."},
            {type:"saisie", q:"Triangle rectangle de côtés 6 et 8. Longueur de l'hypoténuse ?",
             answer:["10"], explain:"6² + 8² = 36 + 64 = 100, et √100 = 10."},
            {type:"vf", q:"Le théorème de Pythagore ne s'utilise que dans les triangles rectangles.", answer:true,
             explain:"Oui : il faut un angle droit pour l'appliquer."},
            {type:"qcm", q:"Le théorème de Pythagore s'écrit :",
             options:["hyp² = côté² + côté²","hyp = côté + côté","hyp² = côté × côté","hyp = côté²"], answer:0,
             explain:"Le carré de l'hypoténuse = somme des carrés des deux autres côtés."}
          ]
        },
        {
          id:"m8", niveau:"4e", title:"Les puissances",
          cours:"Une <b>puissance</b> est une multiplication répétée : 2³ = 2×2×2 = 8. " +
                "Le petit nombre (l'exposant) indique combien de fois on multiplie. " +
                "Pour 10 : 10² = 100, 10³ = 1000 (autant de zéros que l'exposant).",
          questions:[
            {type:"saisie", q:"Combien vaut 2³ ?", answer:["8"], explain:"2×2×2 = 8."},
            {type:"saisie", q:"Combien vaut 5² ?", answer:["25"], explain:"5×5 = 25."},
            {type:"qcm", q:"Combien vaut 10⁴ ?", options:["100","1000","10000","100000"], answer:2,
             explain:"10⁴ = 1 suivi de 4 zéros = 10000."},
            {type:"saisie", q:"Combien vaut 2⁴ ?", answer:["16"], explain:"2×2×2×2 = 16."},
            {type:"vf", q:"10³ = 1000.", answer:true, explain:"10×10×10 = 1000 (3 zéros)."}
          ]
        },
        {
          id:"m11", niveau:"3e", title:"Le théorème de Thalès",
          cours:"Le théorème de <b>Thalès</b> s'utilise avec des <b>droites parallèles</b> qui coupent deux droites sécantes. " +
                "Il donne des <b>rapports égaux</b> entre les longueurs : AB/AB' = AC/AC' = BC/B'C'. " +
                "On s'en sert pour calculer une <b>longueur manquante</b>.",
          questions:[
            {type:"qcm", q:"Le théorème de Thalès s'utilise surtout avec des droites :",
             options:["parallèles","perpendiculaires","courbes","verticales"], answer:0,
             explain:"Thalès repose sur deux droites parallèles coupant deux sécantes."},
            {type:"saisie", q:"Configuration de Thalès : AB/AB' = AC/AC'. Si AB=3, AB'=6 et AC=4, combien vaut AC' ?",
             answer:["8"], explain:"3/6 = 4/AC' donc AC' = 4×6÷3 = 8."},
            {type:"saisie", q:"Toujours avec AB=2, AB'=6 et BC=5 : combien vaut B'C' ?",
             answer:["15"], explain:"2/6 = 5/B'C' donc B'C' = 5×6÷2 = 15."},
            {type:"vf", q:"Le théorème de Thalès permet de calculer une longueur grâce à des rapports égaux.", answer:true,
             explain:"Oui : dans cette configuration, les rapports de longueurs sont égaux."},
            {type:"qcm", q:"Thalès sert surtout à :",
             options:["calculer une longueur manquante (avec des parallèles)","calculer l'aire d'un disque","mesurer un angle droit","résoudre une équation"], answer:0,
             explain:"On l'utilise pour trouver une longueur inconnue dans une figure avec des parallèles."}
          ]
        },
        {
          id:"m12", niveau:"3e", title:"Fonctions linéaires et affines",
          cours:"Une <b>fonction linéaire</b> s'écrit f(x) = a×x : sa courbe est une <b>droite passant par l'origine</b>. " +
                "Une <b>fonction affine</b> s'écrit f(x) = a×x + b, où a est le <b>coefficient directeur</b> et b l'<b>ordonnée à l'origine</b>.",
          questions:[
            {type:"qcm", q:"Une fonction linéaire a pour forme :",
             options:["f(x) = ax + b","f(x) = ax","f(x) = x²","f(x) = a/x"], answer:1,
             explain:"Linéaire : f(x) = ax (sans + b) ; sa droite passe par l'origine."},
            {type:"saisie", q:"Soit f(x) = 3x. Combien vaut f(4) ?", answer:["12"], explain:"f(4) = 3×4 = 12."},
            {type:"saisie", q:"Soit g(x) = 2x + 1. Combien vaut g(5) ?", answer:["11"], explain:"g(5) = 2×5 + 1 = 11."},
            {type:"qcm", q:"Dans f(x) = ax + b, le nombre b est :",
             options:["le coefficient directeur","l'ordonnée à l'origine","la pente","l'abscisse"], answer:1,
             explain:"b est l'ordonnée à l'origine ; a est le coefficient directeur."},
            {type:"vf", q:"La représentation d'une fonction linéaire est une droite qui passe par l'origine.", answer:true,
             explain:"Oui : f(0) = 0, donc la droite passe par le point (0 ; 0)."}
          ]
        },
        {
          id:"m13", niveau:"3e", title:"La notation scientifique",
          cours:"La <b>notation scientifique</b> écrit un nombre sous la forme a × 10ⁿ, où a est <b>supérieur ou égal à 1 et strictement inférieur à 10</b> (1 ≤ a < 10 : la borne 10 est exclue). " +
                "Elle sert à écrire facilement les très <b>grands</b> et très <b>petits</b> nombres. Ex : 32 000 = 3,2 × 10⁴.",
          questions:[
            {type:"qcm", q:"La notation scientifique de 32 000 est :",
             options:["3,2 × 10⁴","3,2 × 10³","32 × 10²","3,2 × 10⁵"], answer:0,
             explain:"3,2 × 10⁴ = 32 000, et 3,2 vérifie bien 1 ≤ a < 10."},
            {type:"qcm", q:"Dans « a × 10ⁿ », le nombre a doit être :",
             options:["supérieur ou égal à 1 et strictement inférieur à 10","plus grand que 100","négatif","égal à 0"], answer:0,
             explain:"En notation scientifique, 1 ≤ a < 10 (1 inclus, 10 exclu : on n'écrit jamais 10 × 10ⁿ)."},
            {type:"saisie", q:"Combien vaut 5 × 10² ?", answer:["500"], explain:"5 × 100 = 500."},
            {type:"saisie", q:"Combien vaut 7 × 10³ ?", answer:["7000"], explain:"7 × 1000 = 7000."},
            {type:"vf", q:"La notation scientifique facilite l'écriture des très grands et très petits nombres.", answer:true,
             explain:"C'est justement son intérêt principal."}
          ]
        }
      ]
    },
    {
      id:"francais", name:"Français", region:"La Bibliothèque Enchantée", icon:"📜", color:"#e87fb0",
      lessons:[
        {
          id:"f7", niveau:"6e", title:"Les types de phrases",
          cours:"Une <b>phrase</b> commence par une majuscule et finit par un point. La <b>déclarative</b> raconte (.). " +
                "L'<b>interrogative</b> pose une question (?). L'<b>exclamative</b> exprime un sentiment (!). L'<b>impérative</b> donne un ordre.",
          questions:[
            {type:"qcm", q:"« Range ta chambre. » est une phrase :", options:["interrogative","impérative","déclarative","exclamative"], answer:1, explain:"Elle donne un ordre : impérative."},
            {type:"qcm", q:"Quelle ponctuation termine une question ?", options:[".","!","?","…"], answer:2, explain:"Le point d'interrogation ?"},
            {type:"vf", q:"« Quelle belle journée ! » est exclamative.", answer:true, explain:"Elle exprime un sentiment et finit par !"},
            {type:"qcm", q:"« Le chat dort. » est une phrase :", options:["déclarative","interrogative","impérative","exclamative"], answer:0, explain:"Elle raconte un fait : déclarative."},
            {type:"saisie", q:"Quel signe termine une question ? (le symbole)", answer:["?"], explain:"Le point d'interrogation ?"}
          ]
        },
        {
          id:"f8", niveau:"6e", title:"Le verbe et son sujet",
          cours:"Le <b>verbe</b> exprime l'action ou l'état. Le <b>sujet</b> fait l'action : on le trouve avec " +
                "« <b>Qui est-ce qui</b> … ? » devant le verbe. Le verbe <b>s'accorde</b> avec son sujet (les enfants jou<b>ent</b>).",
          questions:[
            {type:"qcm", q:"Dans « Léa mange une pomme », le verbe est :", options:["Léa","mange","une","pomme"], answer:1, explain:"« mange » = l'action : le verbe."},
            {type:"qcm", q:"Dans « Les oiseaux chantent », le sujet est :", options:["chantent","Les oiseaux","les","-ent"], answer:1, explain:"Qui est-ce qui chante ? Les oiseaux."},
            {type:"saisie", q:"Complète : « Les enfants jou… » (terminaison au présent)", answer:["ent","jouent"], explain:"Sujet pluriel → ils jouent : -ent."},
            {type:"vf", q:"Le verbe s'accorde avec son sujet.", answer:true, explain:"Oui : l'accord sujet-verbe."},
            {type:"qcm", q:"On trouve le sujet en demandant :", options:["Quoi ?","Qui est-ce qui … ?","Où ?","Quand ?"], answer:1, explain:"« Qui est-ce qui + verbe »."}
          ]
        },
        {
          id:"f1", title:"Les classes de mots",
          cours:"Chaque mot appartient à une <b>classe</b> : le <b>nom</b> (dragon), le <b>déterminant</b> (le, un, ma), " +
                "l'<b>adjectif</b> (puissant), le <b>verbe</b> (voler), l'<b>adverbe</b> (vite), le <b>pronom</b> (il, elle).",
          questions:[
            {type:"qcm", q:"Dans « le dragon vole », quelle est la classe du mot « dragon » ?",
             options:["Verbe","Nom","Adjectif","Adverbe"], answer:1,
             explain:"« dragon » désigne un être : c'est un nom."},
            {type:"qcm", q:"Dans « une potion magique », le mot « magique » est :",
             options:["un nom","un déterminant","un adjectif","un verbe"], answer:2,
             explain:"« magique » précise le nom « potion » : c'est un adjectif qualificatif."},
            {type:"qcm", q:"Le mot « rapidement » est :",
             options:["un adjectif","un adverbe","un nom","un pronom"], answer:1,
             explain:"Il se termine souvent en -ment et modifie un verbe : c'est un adverbe."},
            {type:"qcm", q:"Dans « elle court », « elle » est :",
             options:["un nom","un verbe","un pronom","un adverbe"], answer:2,
             explain:"« elle » remplace un nom : c'est un pronom personnel."},
            {type:"vf", q:"Dans « le », nous avons un déterminant.", answer:true,
             explain:"« le » accompagne un nom : c'est un déterminant (article défini)."}
          ]
        },
        {
          id:"f2", title:"Conjugaison : présent de l'indicatif",
          cours:"Au <b>présent</b>, les verbes du 1ᵉʳ groupe (-er) se terminent par " +
                "-e, -es, -e, -ons, -ez, -ent. Attention aux verbes irréguliers : " +
                "être (je suis, tu es, il est…), avoir (j'ai, tu as, il a…), aller (je vais, tu vas, il va…).",
          questions:[
            {type:"saisie", q:"Conjugue « chanter » à la 1ʳᵉ personne du singulier au présent : je …",
             answer:["chante","je chante"], explain:"1ᵉʳ groupe : je chante (terminaison -e)."},
            {type:"qcm", q:"« Nous (être) … des magiciens. » Quelle forme ?",
             options:["sommes","êtes","sont","es"], answer:0,
             explain:"Verbe être au présent : nous sommes."},
            {type:"saisie", q:"Conjugue « finir » : tu … (présent)", answer:["finis","tu finis"],
             explain:"2ᵉ groupe : tu finis (terminaison -is)."},
            {type:"qcm", q:"« Ils (avoir) … faim. »",
             options:["a","as","ont","avons"], answer:2,
             explain:"Verbe avoir, 3ᵉ pers. pluriel : ils ont."},
            {type:"saisie", q:"Conjugue « aller » : je … (présent)", answer:["vais","je vais"],
             explain:"Verbe irrégulier aller : je vais."}
          ]
        },
        {
          id:"f3", title:"Les figures de style",
          cours:"Une <b>comparaison</b> rapproche deux éléments avec un mot-outil (comme, tel, semblable à) : " +
                "« fort <b>comme</b> un lion ». Une <b>métaphore</b> fait la même chose <i>sans</i> mot-outil : " +
                "« cet homme est un lion ». La <b>personnification</b> donne des traits humains à une chose : " +
                "« le vent murmure ».",
          questions:[
            {type:"qcm", q:"« Ses yeux brillaient comme des étoiles. » Quelle figure ?",
             options:["Métaphore","Comparaison","Personnification","Aucune"], answer:1,
             explain:"Présence du mot-outil « comme » → comparaison."},
            {type:"qcm", q:"« La lune souriait dans le ciel. » Quelle figure ?",
             options:["Comparaison","Métaphore","Personnification","Hyperbole"], answer:2,
             explain:"On prête une action humaine (sourire) à la lune → personnification."},
            {type:"qcm", q:"« Cet enfant est un vrai soleil. » Quelle figure ?",
             options:["Comparaison","Métaphore","Personnification","Aucune"], answer:1,
             explain:"Rapprochement sans mot-outil → métaphore."},
            {type:"vf", q:"Une comparaison utilise toujours un mot-outil comme « comme » ou « tel ».",
             answer:true, explain:"C'est ce qui la distingue de la métaphore."},
            {type:"qcm", q:"« Il pleut des cordes. » est plutôt :",
             options:["une personnification","une expression imagée (métaphore)","une comparaison","une rime"],
             answer:1, explain:"Image forte sans mot-outil → métaphore (expression figurée)."}
          ]
        },
        {
          id:"f4", niveau:"4e", title:"Discours direct et discours indirect",
          cours:"Le <b>discours direct</b> rapporte les paroles exactes, avec des guillemets : " +
                "Il dit : « Je viens. » Le <b>discours indirect</b> les intègre dans la phrase, sans guillemets : " +
                "Il dit qu'il vient.",
          questions:[
            {type:"qcm", q:"« Elle déclara : “Je suis prête.” » Ce sont des paroles au discours :",
             options:["direct","indirect","narratif","poétique"], answer:0,
             explain:"Paroles exactes + guillemets → discours direct."},
            {type:"qcm", q:"Quelle phrase est au discours indirect ?",
             options:["Il dit : « J'ai faim. »","Il dit qu'il a faim.","« J'ai faim », dit-il.","Il crie : « Au secours ! »"],
             answer:1, explain:"Pas de guillemets, paroles intégrées avec « que » → discours indirect."},
            {type:"vf", q:"Le discours direct utilise des guillemets.", answer:true,
             explain:"Oui : les guillemets (et parfois les tirets) signalent les paroles exactes."},
            {type:"qcm", q:"Au discours direct, quel signe annonce souvent les paroles ?",
             options:["la virgule","les deux-points (:)","le point-virgule","les parenthèses"], answer:1,
             explain:"Les deux-points introduisent les paroles, suivis des guillemets."}
          ]
        },
        {
          id:"f5", niveau:"4e", title:"Les propositions subordonnées",
          cours:"Une phrase complexe contient plusieurs verbes conjugués. La <b>proposition subordonnée relative</b> " +
                "complète un nom et commence par un <b>pronom relatif</b> (qui, que, dont, où). " +
                "Ex : Le livre <i>que je lis</i> est passionnant.",
          questions:[
            {type:"qcm", q:"Dans « Le chevalier qui arrive est courageux », « qui arrive » est une proposition :",
             options:["principale","subordonnée relative","indépendante","interrogative"], answer:1,
             explain:"Elle complète le nom « chevalier » et commence par « qui » → subordonnée relative."},
            {type:"qcm", q:"Lequel est un pronom relatif ?",
             options:["et","mais","dont","très"], answer:2,
             explain:"« dont » est un pronom relatif (comme qui, que, où)."},
            {type:"vf", q:"Une proposition relative complète un nom (son antécédent).", answer:true,
             explain:"Oui : elle apporte une information sur le nom qui la précède."},
            {type:"qcm", q:"« La ville où je suis né est belle. » Le mot relatif est :",
             options:["ville","où","belle","suis"], answer:1,
             explain:"« où » introduit la subordonnée relative et indique le lieu."}
          ]
        },
        {
          id:"f6", niveau:"4e", title:"Passé simple et imparfait (récit)",
          cours:"Dans un récit au passé, l'<b>imparfait</b> décrit le décor et les actions qui durent " +
                "(il faisait nuit, elle marchait). Le <b>passé simple</b> exprime les actions brèves de premier plan " +
                "(soudain, il bondit).",
          questions:[
            {type:"qcm", q:"« Il marchait quand, soudain, il tomba. » Quel verbe est au passé simple ?",
             options:["marchait","tomba","quand","soudain"], answer:1,
             explain:"« tomba » = action brève et soudaine → passé simple. « marchait » = imparfait."},
            {type:"saisie", q:"Conjugue « chanter » à l'imparfait : il …", answer:["chantait","il chantait"],
             explain:"Imparfait, 1ᵉʳ groupe : il chantait (terminaison -ait)."},
            {type:"qcm", q:"L'imparfait sert surtout à :",
             options:["décrire et exprimer la durée","raconter une action brève","poser une question","donner un ordre"],
             answer:0, explain:"L'imparfait décrit le décor et les actions qui durent."},
            {type:"saisie", q:"Conjugue « finir » au passé simple : il …", answer:["finit","il finit"],
             explain:"Passé simple, 2ᵉ groupe : il finit."}
          ]
        },
        {
          id:"f9", niveau:"3e", title:"Les figures de style",
          cours:"Une <b>comparaison</b> rapproche deux éléments avec un outil (comme, tel, pareil à). " +
                "Une <b>métaphore</b> fait ce rapprochement sans outil. La <b>personnification</b> prête une action humaine à une chose. " +
                "L'<b>hyperbole</b> exagère pour frapper l'esprit.",
          questions:[
            {type:"qcm", q:"« Il est fort comme un lion » est une :",
             options:["métaphore","comparaison","personnification","hyperbole"], answer:1,
             explain:"Il y a l'outil « comme » : c'est une comparaison."},
            {type:"qcm", q:"« Cet homme est un lion » (sans outil) est une :",
             options:["comparaison","métaphore","litote","énumération"], answer:1,
             explain:"Rapprochement sans outil de comparaison : c'est une métaphore."},
            {type:"qcm", q:"« Le vent murmure dans les arbres » : on prête une action humaine au vent, c'est une :",
             options:["personnification","comparaison","hyperbole","métonymie"], answer:0,
             explain:"On donne une action humaine (murmurer) à une chose : personnification."},
            {type:"qcm", q:"« Je te l'ai dit mille fois ! » : cette exagération est une :",
             options:["hyperbole","litote","comparaison","allitération"], answer:0,
             explain:"L'exagération volontaire est une hyperbole."},
            {type:"vf", q:"Dans une comparaison, on utilise un outil comme « comme », « tel » ou « pareil à ».", answer:true,
             explain:"Oui : c'est ce qui distingue la comparaison de la métaphore."}
          ]
        },
        {
          id:"f10", niveau:"3e", title:"Voix active et voix passive",
          cours:"À la <b>voix active</b>, le sujet fait l'action (« Le chat mange la souris »). À la <b>voix passive</b>, le sujet <b>subit</b> l'action " +
                "(« La souris est mangée par le chat »). On forme la voix passive avec l'auxiliaire <b>être</b> + participe passé ; le <b>complément d'agent</b> est introduit par « par ».",
          questions:[
            {type:"qcm", q:"« La souris est mangée par le chat » est à la voix :",
             options:["active","passive","impérative","interrogative"], answer:1,
             explain:"Le sujet (la souris) subit l'action : voix passive."},
            {type:"qcm", q:"Voix active correspondant à « Le gâteau est mangé par Léa » :",
             options:["Léa mange le gâteau","Le gâteau mange Léa","Léa est mangée","Le gâteau est bon"], answer:0,
             explain:"À l'actif, le sujet qui agit (Léa) fait l'action : « Léa mange le gâteau »."},
            {type:"vf", q:"À la voix passive, le sujet subit l'action au lieu de la faire.", answer:true,
             explain:"C'est la définition de la voix passive."},
            {type:"qcm", q:"Dans une phrase passive, le complément d'agent est souvent introduit par :",
             options:["« par »","« pour »","« sans »","« chez »"], answer:0,
             explain:"Ex : « … par le chat ». Le complément d'agent suit « par »."},
            {type:"saisie", q:"À la voix passive, on utilise l'auxiliaire (le verbe) … + le participe passé.",
             answer:["être","etre","le verbe être","verbe être"], explain:"Voix passive = être + participe passé (ex : est mangée)."}
          ]
        },
        {
          id:"f11", niveau:"3e", title:"Argumenter : thèse, arguments, exemples",
          cours:"Dans un texte argumentatif, la <b>thèse</b> est l'opinion défendue. Un <b>argument</b> est une idée qui soutient la thèse, " +
                "et un <b>exemple</b> l'illustre. Les <b>connecteurs logiques</b> (d'abord, car, donc, par exemple, enfin) relient les idées.",
          questions:[
            {type:"qcm", q:"L'opinion que l'on défend dans un texte argumentatif s'appelle :",
             options:["la thèse","l'argument","l'exemple","la morale"], answer:0,
             explain:"La thèse est l'opinion défendue par l'auteur."},
            {type:"qcm", q:"Une idée qui soutient et justifie la thèse est :",
             options:["un argument","un personnage","une rime","un dialogue"], answer:0,
             explain:"L'argument soutient la thèse ; l'exemple l'illustre."},
            {type:"qcm", q:"Le connecteur « par exemple » introduit :",
             options:["un exemple","une conclusion","une opposition","une question"], answer:0,
             explain:"« Par exemple » annonce une illustration concrète."},
            {type:"qcm", q:"Le connecteur logique « donc » exprime :",
             options:["une conséquence","une cause","une comparaison","un lieu"], answer:0,
             explain:"« Donc » introduit une conséquence (alors que « car » introduit une cause)."},
            {type:"vf", q:"Un exemple sert à illustrer un argument et à le rendre plus convaincant.", answer:true,
             explain:"Oui : l'exemple rend l'argument concret et crédible."}
          ]
        }
      ]
    },
    {
      id:"histgeo", name:"Histoire-Géo & EMC", region:"Le Donjon du Temps", icon:"🏰", color:"#f2c14e",
      lessons:[
        {
          id:"h8", niveau:"6e", title:"L'Antiquité : l'Égypte ancienne",
          cours:"L'<b>Antiquité</b> commence avec l'invention de l'<b>écriture</b>, vers 3300 av. J.-C. En <b>Égypte</b>, " +
                "on écrivait avec des <b>hiéroglyphes</b>. On bâtissait des <b>pyramides</b> pour les pharaons et on " +
                "croyait en de nombreux dieux (polythéisme).",
          questions:[
            {type:"qcm", q:"L'Antiquité commence avec l'invention de :", options:["l'imprimerie","l'écriture","l'électricité","la roue"], answer:1, explain:"L'histoire débute avec l'écriture (~3300 av. J.-C.)."},
            {type:"qcm", q:"Les Égyptiens écrivaient avec des :", options:["lettres latines","hiéroglyphes","chiffres romains","émojis"], answer:1, explain:"Des hiéroglyphes."},
            {type:"vf", q:"Les Égyptiens croyaient en plusieurs dieux.", answer:true, explain:"Oui, ils étaient polythéistes."},
            {type:"qcm", q:"Les pyramides étaient des tombeaux pour les :", options:["pharaons","soldats","paysans","marchands"], answer:0, explain:"Les pharaons."},
            {type:"saisie", q:"Comment appelle-t-on le roi de l'Égypte ancienne ?", answer:["pharaon","le pharaon"], explain:"Le pharaon."}
          ]
        },
        {
          id:"h9", niveau:"6e", title:"La Grèce antique",
          cours:"Dans la <b>Grèce antique</b>, on vivait dans des <b>cités</b> comme <b>Athènes</b> et Sparte. À Athènes " +
                "est née la <b>démocratie</b> (le pouvoir au peuple). Les Grecs ont créé les <b>Jeux olympiques</b> et " +
                "racontaient des mythes avec des dieux comme <b>Zeus</b>.",
          questions:[
            {type:"qcm", q:"La démocratie est née dans la cité d' :", options:["Athènes","Rome","Le Caire","Babylone"], answer:0, explain:"À Athènes : le pouvoir au peuple."},
            {type:"qcm", q:"« Démocratie » signifie le pouvoir :", options:["du roi","du peuple","des prêtres","de l'armée"], answer:1, explain:"Démos = peuple, kratos = pouvoir."},
            {type:"vf", q:"Les Jeux olympiques viennent de la Grèce antique.", answer:true, explain:"Oui, à Olympie en l'honneur de Zeus."},
            {type:"qcm", q:"Une ville-État grecque s'appelle une :", options:["cité","province","région","colonie"], answer:0, explain:"Une cité (polis)."},
            {type:"saisie", q:"Nomme le roi des dieux grecs.", answer:["Zeus"], explain:"Zeus, roi de l'Olympe."}
          ]
        },
        {
          id:"h1", title:"Le Moyen Âge : la féodalité",
          cours:"Au Moyen Âge (Ve–XVe s.), la <b>société féodale</b> repose sur des liens : le <b>seigneur</b> " +
                "donne une terre (le fief) à son <b>vassal</b> qui jure fidélité. Les <b>paysans</b> travaillent " +
                "la terre du seigneur. Le <b>château fort</b> protège et symbolise le pouvoir.",
          questions:[
            {type:"qcm", q:"Le vassal jure fidélité à son seigneur lors d'une cérémonie appelée :",
             options:["le sacre","l'hommage","le baptême","le tournoi"], answer:1,
             explain:"L'« hommage » est la cérémonie où le vassal devient l'homme de son seigneur."},
            {type:"qcm", q:"La terre donnée par le seigneur au vassal s'appelle :",
             options:["le fief","la dîme","le donjon","la corvée"], answer:0,
             explain:"Le fief est la terre concédée en échange de fidélité et de service."},
            {type:"vf", q:"Au Moyen Âge, la majorité de la population était composée de paysans.",
             answer:true, explain:"Oui, la société est très majoritairement rurale et paysanne."},
            {type:"qcm", q:"Le travail gratuit que les paysans devaient au seigneur s'appelle :",
             options:["la dîme","la corvée","la taille","le cens"], answer:1,
             explain:"La corvée = travail gratuit (la dîme et la taille sont des impôts)."}
          ]
        },
        {
          id:"h2", title:"Naissance et expansion de l'islam",
          cours:"L'islam naît au VIIᵉ siècle en Arabie. En <b>622</b>, Mahomet quitte La Mecque pour Médine : " +
                "c'est l'<b>Hégire</b>, point de départ du calendrier musulman. Le livre sacré est le <b>Coran</b>. " +
                "L'empire musulman s'étend ensuite très rapidement.",
          questions:[
            {type:"saisie", q:"En quelle année a lieu l'Hégire (départ de Mahomet vers Médine) ?",
             answer:["622"], explain:"622 : départ de La Mecque vers Médine, début du calendrier musulman."},
            {type:"qcm", q:"Le livre sacré des musulmans est :",
             options:["la Bible","le Coran","la Torah","les Védas"], answer:1,
             explain:"Le Coran est le texte sacré de l'islam."},
            {type:"qcm", q:"L'islam apparaît au VIIᵉ siècle dans quelle région ?",
             options:["en Égypte","en Arabie","en Espagne","en Perse"], answer:1,
             explain:"Il naît en Arabie (villes de La Mecque et Médine)."},
            {type:"vf", q:"Après sa naissance, l'empire musulman s'est étendu très rapidement.",
             answer:true, explain:"En un siècle, il s'étend de l'Espagne à l'Inde."}
          ]
        },
        {
          id:"h3", title:"Géo : richesse et pauvreté dans le monde",
          cours:"Le monde est marqué par de fortes <b>inégalités</b> de développement. On mesure la richesse " +
                "d'un pays avec le <b>PIB</b>, et le développement humain (santé, éducation, niveau de vie) " +
                "avec l'<b>IDH</b>. Les écarts existent entre pays, mais aussi à l'intérieur d'un même pays.",
          questions:[
            {type:"qcm", q:"L'indicateur qui mesure santé, éducation et niveau de vie s'appelle :",
             options:["le PIB","l'IDH","le SMIC","le PNB"], answer:1,
             explain:"IDH = Indice de Développement Humain (santé, éducation, revenu)."},
            {type:"vf", q:"Les inégalités de richesse existent seulement entre les pays, jamais à l'intérieur d'un pays.",
             answer:false, explain:"Faux : il y a aussi de grandes inégalités à l'intérieur d'un même pays."},
            {type:"qcm", q:"Le PIB mesure surtout :",
             options:["le bonheur","la richesse produite par un pays","la population","la surface"], answer:1,
             explain:"Le PIB = valeur des richesses produites dans un pays."}
          ]
        },
        {
          id:"h4", title:"EMC : respect et lutte contre le harcèlement",
          cours:"En EMC, on apprend les valeurs de la République : <b>liberté, égalité, fraternité</b> et la " +
                "<b>laïcité</b>. Le <b>respect</b> d'autrui est essentiel. Le <b>harcèlement</b> est interdit : " +
                "face à une situation, il faut en parler à un adulte de confiance.",
          questions:[
            {type:"qcm", q:"La devise de la République française est :",
             options:["Liberté, Égalité, Fraternité","Travail, Famille, Patrie","Paix, Amour, Joie","Ordre et Progrès"],
             answer:0, explain:"Liberté, Égalité, Fraternité."},
            {type:"vf", q:"Si on est témoin de harcèlement, le mieux est d'en parler à un adulte de confiance.",
             answer:true, explain:"Oui : en parler (adulte, numéro dédié) aide à protéger la victime."},
            {type:"qcm", q:"La laïcité, c'est notamment :",
             options:["interdire toutes les religions","la liberté de croire ou non, et la neutralité de l'école",
                      "obliger une religion","supprimer les fêtes"], answer:1,
             explain:"La laïcité garantit la liberté de conscience et la neutralité de l'État/l'école."}
          ]
        },
        {
          id:"h5", niveau:"4e", title:"Les Lumières & la Révolution française",
          cours:"Au XVIIIᵉ siècle, les philosophes des <b>Lumières</b> (Voltaire, Rousseau, Montesquieu) défendent " +
                "la <b>raison</b>, la <b>liberté</b> et l'égalité. En <b>1789</b>, la Révolution française éclate : " +
                "prise de la Bastille le <b>14 juillet 1789</b> et Déclaration des Droits de l'Homme et du Citoyen.",
          questions:[
            {type:"saisie", q:"En quelle année commence la Révolution française ?", answer:["1789"],
             explain:"1789 : prise de la Bastille et Déclaration des Droits de l'Homme."},
            {type:"qcm", q:"La prise de la Bastille a eu lieu le :",
             options:["14 juillet 1789","11 novembre 1918","8 mai 1945","1ᵉʳ janvier 1800"], answer:0,
             explain:"Le 14 juillet 1789, devenu fête nationale française."},
            {type:"qcm", q:"Les philosophes des Lumières défendent surtout :",
             options:["le pouvoir absolu du roi","la raison et la liberté","la guerre","le silence"], answer:1,
             explain:"Ils défendent la raison, la liberté, la tolérance et l'égalité."},
            {type:"vf", q:"Avant 1789, la France était une monarchie absolue.", answer:true,
             explain:"Oui : le roi détenait tous les pouvoirs (monarchie absolue de droit divin)."},
            {type:"qcm", q:"Le texte de 1789 qui proclame les droits fondamentaux s'appelle :",
             options:["la Constitution de 1958","la Déclaration des Droits de l'Homme et du Citoyen",
                      "le Code civil","l'Édit de Nantes"], answer:1,
             explain:"La Déclaration des Droits de l'Homme et du Citoyen (août 1789)."}
          ]
        },
        {
          id:"h6", niveau:"4e", title:"La traite négrière et l'esclavage",
          cours:"Au XVIIIᵉ siècle, le <b>commerce triangulaire</b> relie trois continents : depuis l'Europe, " +
                "on échange des marchandises en <b>Afrique</b> contre des esclaves, déportés vers les " +
                "<b>Amériques</b> pour travailler dans les plantations. C'est la <b>traite négrière</b>.",
          questions:[
            {type:"qcm", q:"Le commerce triangulaire reliait :",
             options:["Europe, Afrique, Amérique","Asie, Europe, Océanie","France, Italie, Espagne","trois villes"],
             answer:0, explain:"Europe → Afrique → Amériques, en triangle."},
            {type:"vf", q:"La traite négrière déportait des Africains réduits en esclavage vers les Amériques.",
             answer:true, explain:"Oui, pour travailler de force dans les plantations."},
            {type:"qcm", q:"Les esclaves étaient surtout forcés de travailler :",
             options:["dans les écoles","dans les plantations","dans les châteaux d'Europe","dans l'armée"],
             answer:1, explain:"Notamment dans les plantations de sucre, café, coton."}
          ]
        },
        {
          id:"h7", niveau:"4e", title:"Géo : l'urbanisation du monde",
          cours:"Aujourd'hui, plus de la moitié de l'humanité vit en ville. Les très grandes villes, qui " +
                "concentrent population et activités, sont des <b>métropoles</b>. Les villes s'étendent de plus " +
                "en plus loin : c'est l'<b>étalement urbain</b>.",
          questions:[
            {type:"qcm", q:"Une très grande ville qui concentre population et activités est :",
             options:["un village","une métropole","un hameau","une ferme"], answer:1,
             explain:"Une métropole concentre population, économie et pouvoirs."},
            {type:"vf", q:"Plus de la moitié de l'humanité vit aujourd'hui dans des villes.", answer:true,
             explain:"Oui : le monde est majoritairement urbain depuis les années 2000."},
            {type:"qcm", q:"L'extension de la ville sur les espaces autour s'appelle :",
             options:["l'étalement urbain","la désertification","la jachère","l'érosion"], answer:0,
             explain:"L'étalement urbain : la ville s'étend en périphérie."}
          ]
        },
        {
          id:"h10", niveau:"3e", title:"La Première Guerre mondiale (1914-1918)",
          cours:"La <b>Première Guerre mondiale</b> oppose de 1914 à 1918 la Triple-Entente (France, Royaume-Uni, Russie) aux Empires centraux. " +
                "Les soldats combattent dans des <b>tranchées</b>, notamment lors de la terrible bataille de <b>Verdun</b> (1916). " +
                "L'<b>armistice</b> est signé le 11 novembre 1918.",
          questions:[
            {type:"saisie", q:"En quelle année a commencé la Première Guerre mondiale ?", answer:["1914"],
             explain:"La guerre éclate en 1914."},
            {type:"saisie", q:"En quelle année s'est-elle terminée ?", answer:["1918"],
             explain:"Elle se termine en 1918 (armistice le 11 novembre)."},
            {type:"qcm", q:"L'armistice de la Première Guerre mondiale a été signé le :",
             options:["11 novembre 1918","14 juillet 1789","8 mai 1945","1er septembre 1939"], answer:0,
             explain:"Le 11 novembre 1918 — d'où le jour férié de commémoration."},
            {type:"qcm", q:"Les soldats combattaient souvent depuis des :",
             options:["tranchées","châteaux forts","pyramides","gratte-ciels"], answer:0,
             explain:"La guerre des tranchées caractérise ce conflit."},
            {type:"vf", q:"La bataille de Verdun (1916) est une bataille très meurtrière de la Première Guerre mondiale.", answer:true,
             explain:"Verdun (1916) est l'une des batailles les plus meurtrières de 14-18."}
          ]
        },
        {
          id:"h11", niveau:"3e", title:"La Seconde Guerre mondiale (1939-1945)",
          cours:"La <b>Seconde Guerre mondiale</b> dure de 1939 à 1945. En France, le général <b>de Gaulle</b> lance l'appel du 18 juin 1940 à résister. " +
                "Le régime nazi commet un génocide, la <b>Shoah</b>. En Europe, l'Allemagne capitule le <b>8 mai 1945</b>.",
          questions:[
            {type:"saisie", q:"En quelle année a commencé la Seconde Guerre mondiale ?", answer:["1939"],
             explain:"La guerre commence en 1939 (invasion de la Pologne)."},
            {type:"saisie", q:"En quelle année s'est-elle terminée ?", answer:["1945"],
             explain:"Elle se termine en 1945."},
            {type:"qcm", q:"En Europe, l'Allemagne nazie capitule le :",
             options:["8 mai 1945","11 novembre 1918","14 juillet 1789","1er janvier 2000"], answer:0,
             explain:"Le 8 mai 1945 marque la victoire en Europe."},
            {type:"qcm", q:"Qui lance l'appel du 18 juin 1940 à continuer le combat ?",
             options:["le général de Gaulle","Napoléon","Jules Ferry","Louis XIV"], answer:0,
             explain:"Charles de Gaulle lance l'appel du 18 juin 1940 depuis Londres."},
            {type:"vf", q:"La Shoah désigne le génocide des Juifs commis par l'Allemagne nazie.", answer:true,
             explain:"Oui : la Shoah est l'extermination systématique des Juifs d'Europe."}
          ]
        },
        {
          id:"h12", niveau:"3e", title:"La Vᵉ République et la laïcité (EMC)",
          cours:"La <b>Vᵉ République</b> est née en 1958. Aujourd'hui, le président est élu au <b>suffrage universel direct</b> pour un mandat de <b>5 ans</b> (quinquennat). " +
                "La <b>devise</b> de la République est « Liberté, Égalité, Fraternité ». La <b>laïcité</b> garantit la liberté de croire ou non et la neutralité de l'État.",
          questions:[
            {type:"saisie", q:"En quelle année débute la Vᵉ République ?", answer:["1958"],
             explain:"La Constitution de la Vᵉ République est adoptée en 1958."},
            {type:"qcm", q:"Aujourd'hui, le président de la République française est élu :",
             options:["au suffrage universel direct","par le roi","par tirage au sort","à vie"], answer:0,
             explain:"Depuis 1962, les Français élisent directement le président."},
            {type:"qcm", q:"Depuis 2002, le mandat du président dure :",
             options:["5 ans","2 ans","10 ans","20 ans"], answer:0,
             explain:"C'est le quinquennat : 5 ans (au lieu de 7 auparavant)."},
            {type:"qcm", q:"La devise de la République française est :",
             options:["Liberté, Égalité, Fraternité","Travail, Famille, Patrie","Un pour tous, tous pour un","Paix et prospérité"], answer:0,
             explain:"« Liberté, Égalité, Fraternité » est la devise républicaine."},
            {type:"vf", q:"La laïcité garantit la liberté de croire ou de ne pas croire, et la neutralité de l'État.", answer:true,
             explain:"Oui : c'est le principe de laïcité (loi de 1905)."}
          ]
        }
      ]
    },
    {
      id:"sciences", name:"Sciences (PC · SVT · Techno)", region:"Le Laboratoire Alchimique", icon:"⚗️", color:"#6fdc8c",
      lessons:[
        {
          id:"s7", niveau:"6e", title:"Vivant ou non-vivant ?",
          cours:"Un être <b>vivant</b> naît, se <b>nourrit</b>, grandit, se <b>reproduit</b> puis meurt. Les animaux et les " +
                "<b>végétaux</b> sont vivants. Une pierre ou une voiture ne sont <b>pas vivants</b>. On classe le vivant " +
                "selon des <b>caractères</b> communs.",
          questions:[
            {type:"qcm", q:"Lequel est vivant ?", options:["un caillou","un arbre","une chaise","un vélo"], answer:1, explain:"Un arbre naît, grandit, se reproduit."},
            {type:"vf", q:"Un être vivant se nourrit et se reproduit.", answer:true, explain:"Ce sont des caractères du vivant."},
            {type:"qcm", q:"Lequel n'est PAS vivant ?", options:["un chat","une fleur","un rocher","un poisson"], answer:2, explain:"Un rocher ne se reproduit pas."},
            {type:"qcm", q:"Les végétaux sont :", options:["non vivants","vivants","des minéraux","des objets"], answer:1, explain:"Les plantes sont vivantes."},
            {type:"vf", q:"Une voiture est vivante car elle bouge.", answer:false, explain:"Bouger ne suffit pas : pas de naissance ni de reproduction."}
          ]
        },
        {
          id:"s8", niveau:"6e", title:"La Terre et le système solaire",
          cours:"La <b>Terre</b> tourne autour du <b>Soleil</b> en un an. Elle tourne aussi sur elle-même en 24 h, ce qui " +
                "crée le <b>jour et la nuit</b>. La <b>Lune</b> est le satellite de la Terre. Le Soleil est une <b>étoile</b>.",
          questions:[
            {type:"qcm", q:"La Terre tourne autour :", options:["de la Lune","du Soleil","de Mars","d'elle seule"], answer:1, explain:"Autour du Soleil, en ~1 an."},
            {type:"qcm", q:"Le jour et la nuit viennent :", options:["de la rotation de la Terre sur elle-même","de la Lune","des nuages","des saisons"], answer:0, explain:"La Terre tourne sur elle-même en 24 h."},
            {type:"vf", q:"Le Soleil est une étoile.", answer:true, explain:"Oui, l'étoile la plus proche."},
            {type:"qcm", q:"La Lune est :", options:["une étoile","une planète","le satellite de la Terre","le Soleil"], answer:2, explain:"La Lune tourne autour de la Terre."},
            {type:"saisie", q:"En combien d'heures la Terre tourne-t-elle sur elle-même ?", answer:["24","24 h","24h"], explain:"24 heures = un jour."}
          ]
        },
        {
          id:"s1", title:"Physique-Chimie : les états de la matière",
          cours:"La matière existe en 3 <b>états</b> : <b>solide</b> (forme propre), <b>liquide</b> (prend la forme " +
                "du récipient), <b>gaz</b> (occupe tout l'espace). Les changements d'état ont des noms : " +
                "<b>fusion</b> (solide→liquide), <b>solidification</b> (liquide→solide), <b>vaporisation</b> " +
                "(liquide→gaz), <b>liquéfaction</b> (gaz→liquide).",
          questions:[
            {type:"qcm", q:"Le passage de l'état solide à l'état liquide s'appelle :",
             options:["la fusion","la vaporisation","la solidification","la condensation"], answer:0,
             explain:"Solide → liquide = fusion (ex : la glace qui fond)."},
            {type:"qcm", q:"L'eau qui bout et devient vapeur, c'est :",
             options:["la fusion","la vaporisation","la solidification","la fonte"], answer:1,
             explain:"Liquide → gaz = vaporisation."},
            {type:"saisie", q:"À quelle température (en °C) l'eau pure gèle-t-elle ?",
             answer:["0","0°","0 °c","0°c"], explain:"L'eau pure se solidifie à 0 °C."},
            {type:"vf", q:"Un gaz prend la forme et occupe tout le volume de son récipient.",
             answer:true, explain:"Oui : un gaz n'a ni forme ni volume propres."},
            {type:"saisie", q:"À quelle température (en °C) l'eau pure bout-elle au niveau de la mer ?",
             answer:["100","100°","100°c","100 °c"], explain:"L'eau pure bout à 100 °C (pression normale)."}
          ]
        },
        {
          id:"s2", title:"Physique : les circuits électriques",
          cours:"Un <b>circuit</b> simple comprend un générateur (pile), des fils et un récepteur (lampe). " +
                "En <b>série</b>, les composants sont sur une seule boucle : si une lampe s'éteint, l'autre aussi. " +
                "En <b>dérivation</b> (parallèle), chaque lampe est sur sa propre branche : elles sont indépendantes.",
          questions:[
            {type:"qcm", q:"Dans un circuit en série de 2 lampes, si une lampe est dévissée :",
             options:["l'autre brille plus","l'autre s'éteint aussi","rien ne change","le circuit explose"], answer:1,
             explain:"En série il n'y a qu'une boucle : couper en un point éteint tout."},
            {type:"qcm", q:"Le composant qui fournit l'énergie au circuit est :",
             options:["la lampe","l'interrupteur","la pile (générateur)","le fil"], answer:2,
             explain:"La pile est le générateur : elle fournit l'énergie électrique."},
            {type:"vf", q:"Dans un circuit en dérivation, chaque lampe fonctionne indépendamment des autres.",
             answer:true, explain:"Oui : chaque branche est indépendante."},
            {type:"qcm", q:"À quoi sert un interrupteur ?",
             options:["à éclairer","à ouvrir ou fermer le circuit","à produire l'énergie","à mesurer la tension"],
             answer:1, explain:"L'interrupteur ouvre (coupe) ou ferme (laisse passer) le circuit."}
          ]
        },
        {
          id:"s3", title:"SVT : le corps humain et la digestion",
          cours:"La <b>digestion</b> transforme les aliments en nutriments, qui passent dans le sang au niveau " +
                "de l'<b>intestin grêle</b>. Le trajet : bouche → œsophage → estomac → intestin grêle → gros intestin. " +
                "Les nutriments servent à fournir de l'énergie et à construire le corps.",
          questions:[
            {type:"qcm", q:"Où la plupart des nutriments passent-ils dans le sang ?",
             options:["dans l'estomac","dans l'intestin grêle","dans la bouche","dans les poumons"], answer:1,
             explain:"L'intestin grêle est le lieu principal de l'absorption des nutriments."},
            {type:"qcm", q:"Quel est le bon ordre du trajet des aliments ?",
             options:["bouche → estomac → œsophage → intestin","bouche → œsophage → estomac → intestin",
                      "estomac → bouche → intestin","bouche → intestin → estomac"], answer:1,
             explain:"Bouche → œsophage → estomac → intestin grêle → gros intestin."},
            {type:"vf", q:"La digestion transforme les aliments en nutriments utilisables par le corps.",
             answer:true, explain:"Oui : c'est le rôle de la digestion."},
            {type:"qcm", q:"Les nutriments servent notamment à :",
             options:["fournir de l'énergie au corps","colorer la peau","faire pousser les cheveux uniquement","rien"],
             answer:0, explain:"Ils fournissent de l'énergie et les matériaux pour le corps."}
          ]
        },
        {
          id:"s4", niveau:"4e", title:"Chimie : atomes et molécules",
          cours:"Toute la matière est faite de minuscules grains : les <b>atomes</b>. Quand des atomes " +
                "s'assemblent, ils forment une <b>molécule</b>. Ex : l'eau a pour formule <b>H₂O</b> " +
                "(2 atomes d'hydrogène + 1 atome d'oxygène).",
          questions:[
            {type:"qcm", q:"La matière est composée de minuscules grains appelés :",
             options:["cellules","atomes","planètes","cristaux"], answer:1,
             explain:"Les atomes sont les constituants de base de la matière."},
            {type:"qcm", q:"Quelle est la formule chimique de l'eau ?",
             options:["O₂","CO₂","H₂O","NaCl"], answer:2,
             explain:"H₂O : 2 hydrogènes + 1 oxygène."},
            {type:"vf", q:"Une molécule est un assemblage d'atomes.", answer:true,
             explain:"Oui : plusieurs atomes liés forment une molécule."},
            {type:"qcm", q:"Le symbole chimique de l'oxygène est :",
             options:["O","Ox","Og","H"], answer:0, explain:"L'oxygène a pour symbole O."}
          ]
        },
        {
          id:"s5", niveau:"4e", title:"Physique : la lumière",
          cours:"La <b>lumière blanche</b> (celle du Soleil) est en réalité composée de <b>plusieurs couleurs</b> : " +
                "on le voit dans un arc-en-ciel. La lumière se propage en <b>ligne droite</b> et très vite : " +
                "environ <b>300 000 km/s</b>.",
          questions:[
            {type:"qcm", q:"La lumière blanche est composée :",
             options:["d'une seule couleur","de plusieurs couleurs","de son","de chaleur uniquement"], answer:1,
             explain:"Elle est composée de plusieurs couleurs (le spectre), visibles dans l'arc-en-ciel."},
            {type:"vf", q:"Dans un milieu homogène, la lumière se propage en ligne droite.", answer:true,
             explain:"Oui : c'est la propagation rectiligne de la lumière."},
            {type:"qcm", q:"La vitesse de la lumière est d'environ :",
             options:["300 km/h","30 km/s","300 000 km/s","3 km/s"], answer:2,
             explain:"Environ 300 000 km par seconde : extrêmement rapide."},
            {type:"qcm", q:"Quel phénomène montre que la lumière blanche contient plusieurs couleurs ?",
             options:["l'écho","l'arc-en-ciel","l'ombre","l'aimant"], answer:1,
             explain:"L'arc-en-ciel décompose la lumière blanche en couleurs."}
          ]
        },
        {
          id:"s6", niveau:"4e", title:"SVT : volcans et séismes",
          cours:"La Terre est active à l'intérieur. Un <b>séisme</b> (tremblement de terre) vient de la cassure " +
                "brutale des roches le long d'une <b>faille</b>. La <b>lave</b> d'un volcan provient du <b>magma</b> " +
                "(roche fondue en profondeur). Séismes et volcans se concentrent aux <b>frontières des plaques</b>.",
          questions:[
            {type:"qcm", q:"La lave d'un volcan provient :",
             options:["de la pluie","du magma (roche fondue)","du vent","de la mer"], answer:1,
             explain:"Le magma, roche fondue en profondeur, devient lave en surface."},
            {type:"qcm", q:"Un séisme est provoqué par :",
             options:["le vent","la cassure brutale des roches","la pluie","la lune"], answer:1,
             explain:"La rupture des roches le long d'une faille libère de l'énergie : c'est le séisme."},
            {type:"vf", q:"Les volcans et les séismes se concentrent surtout aux frontières des plaques.",
             answer:true, explain:"Oui : c'est là que la croûte terrestre est la plus active."},
            {type:"qcm", q:"La roche fondue présente en profondeur s'appelle :",
             options:["le sable","le magma","le granite froid","la glace"], answer:1,
             explain:"Le magma est la roche en fusion sous la surface."}
          ]
        },
        {
          id:"s9", niveau:"3e", title:"L'énergie et ses conversions",
          cours:"L'<b>énergie</b> existe sous plusieurs formes : cinétique (mouvement), thermique (chaleur), électrique, chimique, lumineuse… " +
                "Elle peut se <b>convertir</b> d'une forme à une autre, mais elle se <b>conserve</b> (elle ne disparaît pas). Son unité est le <b>joule</b> (J).",
          questions:[
            {type:"qcm", q:"L'unité de l'énergie est :",
             options:["le joule (J)","le mètre (m)","le litre (L)","le gramme (g)"], answer:0,
             explain:"L'énergie se mesure en joules (J)."},
            {type:"qcm", q:"Une lampe transforme l'énergie électrique surtout en énergie :",
             options:["lumineuse (et un peu thermique)","chimique","nucléaire","sonore"], answer:0,
             explain:"Une lampe produit de la lumière (et de la chaleur)."},
            {type:"vf", q:"L'énergie peut se transformer d'une forme à une autre, mais elle ne disparaît pas.", answer:true,
             explain:"C'est le principe de conservation de l'énergie."},
            {type:"qcm", q:"Dans une pile, l'énergie est stockée sous forme :",
             options:["chimique","lumineuse","musculaire","éolienne"], answer:0,
             explain:"La pile stocke de l'énergie chimique, convertie en énergie électrique."},
            {type:"qcm", q:"Un objet en mouvement possède de l'énergie :",
             options:["cinétique","chimique","lumineuse","thermique"], answer:0,
             explain:"L'énergie liée au mouvement est l'énergie cinétique."}
          ]
        },
        {
          id:"s10", niveau:"3e", title:"Acides, bases et pH",
          cours:"Le <b>pH</b> mesure si une solution est acide ou basique, sur une échelle de <b>0 à 14</b>. " +
                "Si pH < 7, la solution est <b>acide</b> ; si pH = 7, elle est <b>neutre</b> (comme l'eau pure) ; si pH > 7, elle est <b>basique</b>.",
          questions:[
            {type:"qcm", q:"L'échelle de pH va de :",
             options:["0 à 14","0 à 100","1 à 10","−10 à 10"], answer:0,
             explain:"Le pH est gradué de 0 à 14."},
            {type:"qcm", q:"Une solution de pH = 3 est :",
             options:["acide","neutre","basique","gazeuse"], answer:0,
             explain:"pH < 7 : la solution est acide."},
            {type:"qcm", q:"Une solution neutre (comme l'eau pure) a un pH de :",
             options:["7","0","14","1"], answer:0,
             explain:"L'eau pure a un pH de 7 (neutre)."},
            {type:"vf", q:"Une solution dont le pH est supérieur à 7 est basique.", answer:true,
             explain:"pH > 7 : la solution est basique."},
            {type:"saisie", q:"Quel est le pH d'une solution neutre ?", answer:["7"],
             explain:"Une solution neutre a un pH égal à 7."}
          ]
        },
        {
          id:"s11", niveau:"3e", title:"Génétique : ADN, chromosomes et hérédité",
          cours:"L'information génétique est portée par une molécule, l'<b>ADN</b>, regroupée en <b>chromosomes</b> dans le <b>noyau</b> de la cellule. " +
                "Une portion d'ADN qui détermine un caractère est un <b>gène</b>. L'<b>hérédité</b> est la transmission de caractères des parents aux enfants.",
          questions:[
            {type:"qcm", q:"L'information génétique est portée par une molécule appelée :",
             options:["l'ADN","le calcium","le glucose","l'oxygène"], answer:0,
             explain:"L'ADN porte l'information génétique."},
            {type:"qcm", q:"Dans la cellule, les chromosomes se trouvent dans :",
             options:["le noyau","la membrane","la paroi","le cytoplasme uniquement"], answer:0,
             explain:"Les chromosomes sont situés dans le noyau de la cellule."},
            {type:"saisie", q:"Combien de chromosomes possède une cellule humaine (hors cellules reproductrices) ?",
             answer:["46"], explain:"46 chromosomes, soit 23 paires."},
            {type:"qcm", q:"Une portion d'ADN qui détermine un caractère s'appelle :",
             options:["un gène","un atome","un organe","un muscle"], answer:0,
             explain:"Un gène est une portion d'ADN responsable d'un caractère."},
            {type:"vf", q:"L'hérédité, c'est la transmission de caractères des parents à leurs enfants.", answer:true,
             explain:"Oui : les caractères se transmettent de génération en génération."}
          ]
        }
      ]
    }
  ]
};

/* Exposition en global (chargement file:// classique, hors-ligne).
   Le moteur lit la variable globale CONTENT, exactement comme avant. */
if (typeof window !== "undefined") { window.CONTENT = CONTENT; }
