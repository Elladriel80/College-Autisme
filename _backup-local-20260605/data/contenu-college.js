/* =========================================================================
   DONNEES, CONTENU COLLEGE (Le Royaume du Savoir)
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
          carte:{centre:"Les nombres décimaux", branches:[{titre:"Partie entière / décimale", detail:"3,25 : 3 puis 25 après la virgule"},{titre:"Dixièmes, centièmes", detail:"1er chiffre après la virgule = dixièmes"},{titre:"Comparer", detail:"d'abord la partie entière"},{titre:"Zéro inutile", detail:"3,5 = 3,50"},{titre:"Fraction décimale", detail:"7/10 = 0,7"}]},
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
          carte:{centre:"Périmètre et aire du rectangle", branches:[{titre:"Périmètre", detail:"le tour : 2 × (L + l)"},{titre:"Aire", detail:"la surface : L × l"},{titre:"Unités", detail:"périmètre en cm, aire en cm²"},{titre:"Exemple", detail:"5 sur 3 : périmètre 16 cm, aire 15 cm²"}]},
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
          id:"m1", niveau:"5e", title:"Les nombres relatifs",
          carte:{centre:"Les nombres relatifs", branches:[{titre:"Positifs et négatifs", detail:"+3, -5, autour de 0"},{titre:"Même signe", detail:"on additionne, on garde le signe"},{titre:"Signes différents", detail:"on soustrait, signe du plus grand"},{titre:"Opposé", detail:"l'opposé de +7 est -7"},{titre:"Sur une droite", detail:"négatifs à gauche de 0"}]},
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
          id:"m2", niveau:"5e", title:"Les fractions",
          carte:{centre:"Les fractions", branches:[{titre:"Numérateur / dénominateur", detail:"3/4 : 3 parts sur 4"},{titre:"Même dénominateur", detail:"on additionne les numérateurs"},{titre:"Simplifier", detail:"diviser le haut et le bas par le même nombre"},{titre:"Fraction d'un nombre", detail:"3/4 de 20 = 20 ÷ 4 × 3 = 15"},{titre:"Comparer", detail:"à même dénominateur, regarder le numérateur"}]},
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
          id:"m3", niveau:"5e", title:"La proportionnalité & les pourcentages",
          carte:{centre:"Proportionnalité et pourcentages", branches:[{titre:"Proportionnalité", detail:"on multiplie par le même nombre"},{titre:"Pourcentage", detail:"25 % = 25 pour 100"},{titre:"Calculer un %", detail:"25 % de 80 = 80 ÷ 100 × 25 = 20"},{titre:"Tableau", detail:"deux lignes proportionnelles"},{titre:"Réduction", detail:"-50 % : on enlève la moitié"}]},
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
          id:"m4", niveau:"5e", title:"Géométrie : angles & triangles",
          carte:{centre:"Angles et triangles", branches:[{titre:"Mesurer un angle", detail:"en degrés, au rapporteur"},{titre:"Angles repères", detail:"droit 90°, plat 180°"},{titre:"Somme des angles", detail:"d'un triangle = 180°"},{titre:"Sortes de triangles", detail:"isocèle, équilatéral, rectangle"},{titre:"Exemple", detail:"180 - 60 - 70 = 50°"}]},
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
          carte:{centre:"Développer et réduire", branches:[{titre:"Développer", detail:"k(a + b) = ka + kb"},{titre:"Réduire", detail:"regrouper les termes semblables"},{titre:"Exemple", detail:"5(2x - 3) = 10x - 15"},{titre:"La lettre", detail:"x représente un nombre"},{titre:"Attention aux signes", detail:"surtout avec les moins"}]},
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
          carte:{centre:"Équations du 1er degré", branches:[{titre:"Une égalité avec x", detail:"trouver la valeur de x"},{titre:"Garder l'équilibre", detail:"même opération des deux côtés"},{titre:"Isoler x", detail:"déplacer les nombres"},{titre:"Exemple", detail:"2x + 1 = 9 → x = 4"},{titre:"Vérifier", detail:"remplacer x dans l'équation"}]},
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
          carte:{centre:"Théorème de Pythagore", branches:[{titre:"Triangle rectangle", detail:"il faut un angle droit"},{titre:"Hypoténuse", detail:"le plus grand côté, face à l'angle droit"},{titre:"Formule", detail:"hypoténuse² = côté² + côté²"},{titre:"Calculer un côté", detail:"3² + 4² = 25, donc 5"},{titre:"Réciproque", detail:"vérifier si l'angle est droit"}]},
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
          carte:{centre:"Les puissances", branches:[{titre:"Notation", detail:"2⁴ = 2 × 2 × 2 × 2"},{titre:"Exposant", detail:"le nombre de facteurs"},{titre:"Puissances de 10", detail:"10⁴ = 10000"},{titre:"Exemple", detail:"2⁴ = 16"},{titre:"Carré et cube", detail:"a² et a³"}]},
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
          carte:{centre:"Théorème de Thalès", branches:[{titre:"Droites parallèles", detail:"qui coupent deux sécantes"},{titre:"Rapports égaux", detail:"AB/AB' = AC/AC'"},{titre:"Calculer une longueur", detail:"avec le produit en croix"},{titre:"Configurations", detail:"triangle ou papillon"},{titre:"Exemple", detail:"AB=3, AB'=6, AC=4 → AC'=8"}]},
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
          carte:{centre:"Fonctions linéaires et affines", branches:[{titre:"Fonction", detail:"à un x, on associe un f(x)"},{titre:"Linéaire", detail:"f(x) = a x"},{titre:"Affine", detail:"g(x) = a x + b"},{titre:"Calculer une image", detail:"f(4) = 3 × 4 = 12"},{titre:"Représentation", detail:"une droite"}]},
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
          carte:{centre:"La notation scientifique", branches:[{titre:"Forme", detail:"a × 10ⁿ"},{titre:"Règle sur a", detail:"1 ≤ a < 10"},{titre:"Grands nombres", detail:"32000 = 3,2 × 10⁴"},{titre:"Puissance de 10", detail:"compte les déplacements de la virgule"},{titre:"Utilité", detail:"écrire des nombres très grands"}]},
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
        },
        {
          id:"m14", niveau:"6e", title:"Division euclidienne et divisibilité",
          carte:{centre:"Division euclidienne et divisibilité", branches:[{titre:"Division euclidienne", detail:"a = b × q + r"},{titre:"Quotient et reste", detail:"le reste est plus petit que le diviseur"},{titre:"Divisible par 2", detail:"se termine par 0,2,4,6,8"},{titre:"Divisible par 5", detail:"se termine par 0 ou 5"},{titre:"Divisible par 3", detail:"somme des chiffres multiple de 3"}]},
          cours:"La <b>division euclidienne</b> de a (le <b>dividende</b>) par b (le <b>diviseur</b>) s'écrit a = b × q + r, où q est le <b>quotient</b> et r le <b>reste</b>, avec 0 ≤ r < b (le reste est toujours plus petit que le diviseur). " +
                "Un nombre est <b>divisible</b> par un autre quand le reste est 0. Critères utiles : divisible par <b>2</b> si le chiffre des unités est pair (0,2,4,6,8) ; par <b>5</b> si l'unité est 0 ou 5 ; par <b>10</b> si l'unité est 0 ; par <b>3</b> si la somme des chiffres est divisible par 3 ; par <b>9</b> si la somme des chiffres est divisible par 9.",
          questions:[
            {type:"saisie", q:"Division euclidienne de 17 par 5 : quel est le quotient ?", answer:["3"], explain:"17 = 5 × 3 + 2, donc le quotient est 3.", indice:"Combien de fois 5 entre-t-il dans 17 ?"},
            {type:"saisie", q:"Division euclidienne de 17 par 5 : quel est le reste ?", answer:["2"], explain:"17 = 5 × 3 + 2, donc le reste est 2.", indice:"17 moins (5 × 3)."},
            {type:"qcm", q:"Dans l'égalité 23 = 4 × 5 + 3, le reste est :", options:["3","4","5","23"], answer:0, explain:"Le reste est le nombre ajouté après le produit : ici 3.", indice:"C'est ce qui suit le signe « + »."},
            {type:"vf", q:"Dans une division euclidienne, le reste est toujours plus petit que le diviseur.", answer:true, explain:"Oui : on a toujours 0 ≤ r < b.", indice:"Sinon, on pourrait encore enlever une fois le diviseur."},
            {type:"qcm", q:"30 est un multiple de :", options:["6","7","8","9"], answer:0, explain:"30 = 6 × 5, donc 30 est un multiple de 6.", indice:"Cherche par quel nombre on peut multiplier pour tomber sur 30."},
            {type:"qcm", q:"Un nombre est divisible par 2 si son chiffre des unités est :", options:["pair (0,2,4,6,8)","impair","égal à 5","égal à 1"], answer:0, explain:"Les nombres pairs se terminent par 0, 2, 4, 6 ou 8.", indice:"Pense aux nombres « pairs »."},
            {type:"qcm", q:"Lequel de ces nombres est divisible par 5 ?", options:["45","32","18","27"], answer:0, explain:"45 = 5 × 9 ; il se termine par 5.", indice:"Un multiple de 5 finit par 0 ou 5."},
            {type:"qcm", q:"Lequel de ces nombres est divisible par 3 ?", options:["24","25","26","28"], answer:0, explain:"2 + 4 = 6, divisible par 3, donc 24 l'est (24 = 3 × 8).", indice:"Additionne les chiffres et regarde si le total est dans la table de 3."},
            {type:"vf", q:"100 est divisible par 10.", answer:true, explain:"Oui : 100 = 10 × 10, il se termine par 0.", indice:"Un multiple de 10 finit par 0."},
            {type:"saisie", q:"Combien font 48 ÷ 6 (division exacte) ?", answer:["8"], explain:"6 × 8 = 48, donc 48 ÷ 6 = 8.", indice:"Cherche dans la table de 6."},
            {type:"qcm", q:"Lequel de ces nombres est un diviseur de 12 ?", options:["4","5","7","8"], answer:0, explain:"12 = 4 × 3, donc 4 divise 12.", indice:"Cherche un nombre qui « tombe juste » dans 12."},
            {type:"qcm", q:"Lequel est divisible par 9 ?", options:["81","82","84","88"], answer:0, explain:"8 + 1 = 9, divisible par 9, donc 81 = 9 × 9.", indice:"Additionne les chiffres et compare à la table de 9."},
            {type:"vf", q:"7 est un nombre premier : il n'a que deux diviseurs, 1 et lui-même.", answer:true, explain:"Oui : 7 n'est divisible que par 1 et par 7.", indice:"Essaie de diviser 7 par 2, 3, 4... ça ne tombe jamais juste."},
            {type:"saisie", q:"Division euclidienne de 100 par 7 : quel est le reste ?", answer:["2"], explain:"100 = 7 × 14 + 2 (car 7 × 14 = 98), donc le reste est 2.", indice:"Cherche le plus grand multiple de 7 sous 100, puis la différence."},
            {type:"qcm", q:"Lequel de ces nombres n'est PAS divisible par 2 ?", options:["27","14","20","38"], answer:0, explain:"27 est impair (il finit par 7), il n'est donc pas divisible par 2.", indice:"Repère celui qui est impair."}
          ]
        },
        {
          id:"m15", niveau:"6e", title:"La symétrie axiale",
          carte:{centre:"La symétrie axiale", branches:[{titre:"Un pliage", detail:"le long d'un axe"},{titre:"Axe de symétrie", detail:"la droite du pli"},{titre:"Superposition", detail:"les deux moitiés coïncident"},{titre:"Conserve", detail:"longueurs et angles"},{titre:"Exemples", detail:"carré : 4 axes ; cercle : une infinité"}]},
          cours:"La <b>symétrie axiale</b> par rapport à une droite (l'<b>axe</b>) revient à un <b>pliage</b> le long de cet axe : la figure et son image se <b>superposent</b> exactement. " +
                "Elle <b>conserve</b> les longueurs, les angles et l'alignement. Un point situé <b>sur</b> l'axe est son propre symétrique. " +
                "Nombre d'axes de symétrie : le <b>carré</b> en a 4, le <b>rectangle</b> 2, le <b>losange</b> 2, le <b>triangle équilatéral</b> 3, le <b>cercle</b> une infinité.",
          questions:[
            {type:"qcm", q:"La symétrie axiale revient à faire un :", options:["pliage le long d'une droite","agrandissement","glissement","coloriage"], answer:0, explain:"On plie la figure le long de l'axe : les deux parties se superposent.", indice:"Pense à plier une feuille en deux."},
            {type:"vf", q:"Par symétrie axiale, une figure et son image se superposent par pliage le long de l'axe.", answer:true, explain:"Oui : c'est la définition du pliage symétrique.", indice:"Si tu plies sur l'axe, les deux moitiés coïncident."},
            {type:"qcm", q:"Combien d'axes de symétrie a un carré ?", options:["4","2","1","0"], answer:0, explain:"Le carré a 4 axes : ses 2 médianes et ses 2 diagonales.", indice:"Compte les médianes ET les diagonales."},
            {type:"qcm", q:"Combien d'axes de symétrie a un rectangle (qui n'est pas un carré) ?", options:["2","4","1","0"], answer:0, explain:"Le rectangle a 2 axes : ses deux médianes (pas les diagonales).", indice:"Les diagonales du rectangle ne sont pas des axes de symétrie."},
            {type:"qcm", q:"Combien d'axes de symétrie a un cercle ?", options:["une infinité","1","2","4"], answer:0, explain:"Toute droite passant par le centre est un axe : il y en a une infinité.", indice:"Pense à toutes les droites qui passent par le centre."},
            {type:"qcm", q:"Combien d'axes de symétrie a un triangle équilatéral ?", options:["3","1","2","0"], answer:0, explain:"Il a 3 axes, un par sommet (les médiatrices des côtés).", indice:"Autant que de sommets."},
            {type:"vf", q:"La symétrie axiale conserve les longueurs (les distances ne changent pas).", answer:true, explain:"Oui : une figure et son symétrique ont les mêmes mesures.", indice:"L'image a la même taille que la figure de départ."},
            {type:"vf", q:"La symétrie axiale conserve les angles.", answer:true, explain:"Oui : les angles de l'image sont égaux à ceux de la figure.", indice:"La forme n'est pas déformée, juste retournée."},
            {type:"qcm", q:"La lettre majuscule A possède un axe de symétrie :", options:["vertical","horizontal","diagonal","aucun"], answer:0, explain:"On peut plier le A le long d'un axe vertical : les deux moitiés coïncident.", indice:"Plie mentalement le A de haut en bas."},
            {type:"qcm", q:"La lettre majuscule B possède un axe de symétrie :", options:["horizontal","vertical","diagonal","aucun"], answer:0, explain:"Le B se plie le long d'un axe horizontal (haut/bas identiques).", indice:"Regarde si le haut et le bas du B se ressemblent."},
            {type:"qcm", q:"Laquelle de ces lettres majuscules n'a AUCUN axe de symétrie ?", options:["F","A","M","T"], answer:0, explain:"A, M et T ont un axe vertical ; F n'en a aucun.", indice:"Essaie de plier chaque lettre : laquelle ne coïncide jamais ?"},
            {type:"vf", q:"Un point situé exactement sur l'axe de symétrie est son propre symétrique.", answer:true, explain:"Oui : il ne bouge pas, son image est lui-même.", indice:"Sur le pli, le point reste à la même place."},
            {type:"qcm", q:"Combien d'axes de symétrie a un losange ?", options:["2","4","1","0"], answer:0, explain:"Le losange a 2 axes : ses deux diagonales.", indice:"Ce sont les diagonales du losange."},
            {type:"vf", q:"Dans une symétrie axiale, l'axe est une droite.", answer:true, explain:"Oui : l'axe de symétrie est toujours une droite.", indice:"C'est la ligne de pliage."},
            {type:"qcm", q:"Quand on plie la figure le long de son axe de symétrie, les deux parties :", options:["se superposent exactement","se chevauchent à moitié","s'éloignent","disparaissent"], answer:0, explain:"Elles coïncident parfaitement : c'est le signe d'une symétrie axiale.", indice:"Une symétrie « réussie » fait coïncider les deux moitiés."}
          ]
        },
        {
          id:"m16", niveau:"5e", title:"La symétrie centrale",
          carte:{centre:"La symétrie centrale", branches:[{titre:"Un demi-tour", detail:"autour d'un point (le centre)"},{titre:"Le centre", detail:"milieu de [AA']"},{titre:"Conserve", detail:"longueurs, angles, aires"},{titre:"Image d'une droite", detail:"une droite parallèle"},{titre:"Parallélogramme", detail:"centre = croisement des diagonales"}]},
          cours:"La <b>symétrie centrale</b> par rapport à un point O (le <b>centre</b>) revient à un <b>demi-tour</b> (rotation d'un demi-tour) autour de O. " +
                "Le symétrique d'un point A est le point A' tel que O est le <b>milieu</b> de [AA']. " +
                "Elle <b>conserve</b> les longueurs, les angles et les aires. Le symétrique d'une droite est une droite <b>parallèle</b>. Un <b>parallélogramme</b> a un centre de symétrie : l'intersection de ses diagonales.",
          questions:[
            {type:"qcm", q:"La symétrie centrale correspond à un :", options:["demi-tour autour d'un point","pliage le long d'une droite","agrandissement","glissement"], answer:0, explain:"C'est une rotation d'un demi-tour autour du centre.", indice:"Pense à tourner la figure de 180 degrés."},
            {type:"qcm", q:"Si A' est le symétrique de A par rapport au centre O, alors O est :", options:["le milieu de [AA']","une extrémité de [AA']","en dehors de [AA']","le double de A"], answer:0, explain:"Le centre est toujours au milieu du segment qui joint un point à son image.", indice:"O est pile au centre, entre A et A'."},
            {type:"vf", q:"La symétrie centrale conserve les longueurs.", answer:true, explain:"Oui : la figure image a les mêmes dimensions.", indice:"Un demi-tour ne change pas les tailles."},
            {type:"qcm", q:"La symétrie axiale est un pliage ; la symétrie centrale est un :", options:["demi-tour","agrandissement","glissement","découpage"], answer:0, explain:"Axiale = pliage ; centrale = demi-tour autour d'un point.", indice:"L'une plie, l'autre fait tourner."},
            {type:"vf", q:"Un parallélogramme a un centre de symétrie : l'intersection de ses diagonales.", answer:true, explain:"Oui : ses diagonales se coupent en leur milieu, ce point est centre de symétrie.", indice:"Regarde où se croisent les diagonales."},
            {type:"vf", q:"La symétrie centrale conserve les aires.", answer:true, explain:"Oui : la figure et son image ont la même aire.", indice:"La forme n'est ni agrandie ni réduite."},
            {type:"qcm", q:"Le centre de symétrie d'un cercle est :", options:["son centre","un point du bord","un point extérieur","il n'en a pas"], answer:0, explain:"Le cercle est symétrique par rapport à son centre.", indice:"Quel point est « au milieu » du cercle ?"},
            {type:"vf", q:"Le symétrique du point O par rapport à O est O lui-même.", answer:true, explain:"Oui : le centre est son propre symétrique.", indice:"Le centre ne bouge pas dans un demi-tour."},
            {type:"qcm", q:"Le symétrique d'une droite par symétrie centrale est :", options:["une droite parallèle","un cercle","un point","un angle droit"], answer:0, explain:"L'image d'une droite est une droite qui lui est parallèle.", indice:"Une droite reste une droite, et elle ne se croise pas avec celle de départ."},
            {type:"vf", q:"Après une symétrie centrale, la figure obtenue est superposable à la figure de départ.", answer:true, explain:"Oui : on la retrouve en faisant un demi-tour.", indice:"Tourne la figure d'un demi-tour pour vérifier."},
            {type:"qcm", q:"Combien de centres de symétrie a un segment [AB] ?", options:["1 (son milieu)","2","0","une infinité"], answer:0, explain:"Le seul centre de symétrie d'un segment est son milieu.", indice:"Quel point partage le segment en deux parts égales ?"},
            {type:"qcm", q:"Quelle transformation faut-il pour obtenir le symétrique d'un point par rapport à un centre ?", options:["un demi-tour autour du centre","un pliage","un agrandissement","une translation"], answer:0, explain:"On effectue un demi-tour autour du centre O.", indice:"180 degrés autour de O."}
          ]
        },
        {
          id:"m17", niveau:"5e", title:"Aire du triangle et du parallélogramme",
          carte:{centre:"Aire du triangle et du parallélogramme", branches:[{titre:"Parallélogramme", detail:"base × hauteur"},{titre:"Triangle", detail:"(base × hauteur) ÷ 2"},{titre:"La hauteur", detail:"perpendiculaire à la base"},{titre:"Unité", detail:"en cm²"},{titre:"Exemple", detail:"8 × 3 ÷ 2 = 12 cm²"}]},
          cours:"L'<b>aire d'un parallélogramme</b> est <b>base × hauteur</b>. " +
                "L'<b>aire d'un triangle</b> est <b>(base × hauteur) ÷ 2</b> (la moitié de celle d'un parallélogramme de mêmes base et hauteur). " +
                "La <b>hauteur</b> est toujours <b>perpendiculaire</b> à la base. L'aire se mesure en <b>cm²</b>.",
          questions:[
            {type:"qcm", q:"L'aire d'un parallélogramme est :", options:["base × hauteur","base + hauteur","(base × hauteur) ÷ 2","côté × côté ÷ 2"], answer:0, explain:"Aire du parallélogramme = base × hauteur.", indice:"Comme un rectangle « penché »."},
            {type:"qcm", q:"L'aire d'un triangle est :", options:["(base × hauteur) ÷ 2","base × hauteur","base + hauteur","base × hauteur × 2"], answer:0, explain:"Aire du triangle = (base × hauteur) ÷ 2.", indice:"C'est la moitié de l'aire d'un parallélogramme."},
            {type:"saisie", q:"Parallélogramme de base 6 cm et hauteur 4 cm : aire en cm² ?", answer:["24","24 cm²"], explain:"6 × 4 = 24 cm².", indice:"base × hauteur."},
            {type:"saisie", q:"Triangle de base 8 cm et hauteur 3 cm : aire en cm² ?", answer:["12","12 cm²"], explain:"(8 × 3) ÷ 2 = 24 ÷ 2 = 12 cm².", indice:"Multiplie puis divise par 2."},
            {type:"saisie", q:"Triangle de base 10 cm et hauteur 6 cm : aire en cm² ?", answer:["30","30 cm²"], explain:"(10 × 6) ÷ 2 = 60 ÷ 2 = 30 cm².", indice:"60 divisé par 2."},
            {type:"qcm", q:"Un parallélogramme de base 5 cm et hauteur 2 cm a pour aire :", options:["10 cm²","7 cm²","20 cm²","14 cm²"], answer:0, explain:"5 × 2 = 10 cm².", indice:"base × hauteur."},
            {type:"vf", q:"L'aire d'un triangle est la moitié de celle d'un parallélogramme de même base et même hauteur.", answer:true, explain:"Oui : c'est pourquoi on divise par 2.", indice:"Deux triangles identiques forment un parallélogramme."},
            {type:"saisie", q:"Parallélogramme de base 7 cm et hauteur 3 cm : aire en cm² ?", answer:["21","21 cm²"], explain:"7 × 3 = 21 cm².", indice:"base × hauteur."},
            {type:"qcm", q:"L'aire se mesure en :", options:["cm²","cm","cm³","kg"], answer:0, explain:"Une aire (surface) s'exprime en unités carrées, comme le cm².", indice:"Une surface, donc une unité « au carré »."},
            {type:"saisie", q:"Triangle de base 12 cm et hauteur 5 cm : aire en cm² ?", answer:["30","30 cm²"], explain:"(12 × 5) ÷ 2 = 60 ÷ 2 = 30 cm².", indice:"60 divisé par 2."},
            {type:"qcm", q:"Triangle de base 4 cm et hauteur 9 cm : aire =", options:["18 cm²","36 cm²","13 cm²","22 cm²"], answer:0, explain:"(4 × 9) ÷ 2 = 36 ÷ 2 = 18 cm².", indice:"36 divisé par 2."},
            {type:"vf", q:"Pour calculer l'aire d'un triangle, la hauteur doit être perpendiculaire à la base.", answer:true, explain:"Oui : la hauteur forme un angle droit avec la base.", indice:"Hauteur et base font un angle droit."}
          ]
        },
        {
          id:"m18", niveau:"4e", title:"Algorithmique et Scratch (initiation)",
          carte:{centre:"Algorithmique et Scratch", branches:[{titre:"Algorithme", detail:"suite d'instructions ordonnées"},{titre:"Séquence", detail:"exécutées dans l'ordre, de haut en bas"},{titre:"Boucle", detail:"répéter des instructions"},{titre:"Variable", detail:"mémorise une valeur (un score)"},{titre:"Lutin", detail:"le personnage que l'on déplace"}]},
          cours:"Un <b>algorithme</b> est une suite d'<b>instructions</b> (des étapes) pour réaliser une tâche. Un <b>programme</b> est un algorithme écrit dans un langage compris par la machine ; dans <b>Scratch</b>, on programme en <b>emboîtant des blocs</b>. " +
                "Les instructions s'exécutent <b>dans l'ordre</b>, de haut en bas (une <b>séquence</b>). Une <b>boucle</b> répète des instructions. Une <b>variable</b> mémorise une valeur (par exemple un score). Le personnage que l'on déplace est un <b>lutin</b>.",
          questions:[
            {type:"qcm", q:"Un algorithme est :", options:["une suite d'instructions pour réaliser une tâche","un dessin","un nombre","un bouton"], answer:0, explain:"C'est une suite d'étapes ordonnées pour accomplir une tâche.", indice:"Pense à une recette de cuisine étape par étape."},
            {type:"qcm", q:"Dans Scratch, on programme surtout en :", options:["emboîtant des blocs","tapant seulement des chiffres","dessinant à main levée","parlant au micro"], answer:0, explain:"On assemble des blocs colorés qui s'emboîtent.", indice:"Les instructions sont des « briques » à clipser."},
            {type:"vf", q:"Dans un programme, les instructions s'exécutent dans l'ordre, de haut en bas.", answer:true, explain:"Oui : c'est l'exécution séquentielle.", indice:"On lit le programme du haut vers le bas."},
            {type:"qcm", q:"À quoi sert une « boucle » ?", options:["à répéter des instructions","à supprimer le programme","à colorier l'écran","à ralentir l'ordinateur"], answer:0, explain:"La boucle répète automatiquement des instructions.", indice:"Évite de recopier 10 fois la même chose."},
            {type:"qcm", q:"Le bloc « répéter 10 fois » :", options:["exécute 10 fois les instructions à l'intérieur","s'exécute une seule fois","efface tout","ajoute 10 lutins"], answer:0, explain:"Tout ce qui est à l'intérieur est répété 10 fois.", indice:"Le nombre indique combien de répétitions."},
            {type:"qcm", q:"Une « variable » sert à :", options:["mémoriser une valeur (comme un score)","dessiner un cercle","éteindre l'écran","déplacer la souris"], answer:0, explain:"Une variable garde une valeur en mémoire, par exemple le score.", indice:"C'est comme une boîte qui retient un nombre."},
            {type:"qcm", q:"Dans Scratch, le personnage que l'on déplace s'appelle :", options:["un lutin","un fichier","un nuage","un bouton"], answer:0, explain:"On parle de lutin (sprite en anglais).", indice:"Le petit personnage sur la scène."},
            {type:"vf", q:"Un programme est un algorithme écrit dans un langage compris par la machine.", answer:true, explain:"Oui : on traduit l'algorithme en instructions exécutables.", indice:"L'idée (algorithme) devient du code (programme)."},
            {type:"qcm", q:"Pour démarrer un programme Scratch, on clique souvent sur :", options:["le drapeau vert","la croix rouge","l'imprimante","le clavier"], answer:0, explain:"Le drapeau vert lance le programme.", indice:"Vert = on démarre."},
            {type:"qcm", q:"« Avancer de 10 pas » dans Scratch déplace :", options:["le lutin","tout l'écran","la souris","le son"], answer:0, explain:"Le lutin avance de 10 pas.", indice:"Quel élément se déplace sur la scène ?"},
            {type:"vf", q:"Une séquence est une suite d'instructions exécutées l'une après l'autre.", answer:true, explain:"Oui : c'est l'enchaînement des instructions.", indice:"Les unes après les autres, dans l'ordre."},
            {type:"qcm", q:"Pour répéter une action sans fin, on utilise :", options:["une boucle « répéter indéfiniment »","un bloc « stop »","une variable","un nouveau lutin"], answer:0, explain:"La boucle « répéter indéfiniment » tourne en continu.", indice:"Une boucle qui ne s'arrête pas toute seule."}
          ]
        },
        {
          id:"m19", niveau:"3e", title:"Programmer avec Scratch : boucles, conditions et coordonnées",
          carte:{centre:"Scratch : boucles et conditions", branches:[{titre:"Condition", detail:"si ... alors (vrai ou faux)"},{titre:"Si ... sinon", detail:"traite aussi le cas faux"},{titre:"Répéter jusqu'à", detail:"s'arrête quand c'est vrai"},{titre:"Coordonnées (x ; y)", detail:"x horizontal, y vertical"},{titre:"Le centre", detail:"(0 ; 0)"}]},
          cours:"Une <b>condition</b> est un test qui est soit <b>vrai</b>, soit <b>faux</b>. Le bloc <b>« si ... alors »</b> exécute des instructions seulement si la condition est vraie ; <b>« si ... alors ... sinon »</b> traite aussi le cas faux. " +
                "La boucle <b>« répéter jusqu'à ce que »</b> s'arrête quand la condition devient vraie. " +
                "Sur la scène, la position d'un lutin est donnée par ses <b>coordonnées (x ; y)</b> : <b>x</b> est horizontal, <b>y</b> vertical, et le <b>centre</b> est (0 ; 0).",
          questions:[
            {type:"qcm", q:"Le bloc « si ... alors » exécute des instructions :", options:["seulement si la condition est vraie","toujours","jamais","au hasard"], answer:0, explain:"Les instructions ne se font que si le test est vrai.", indice:"« Si » introduit une condition."},
            {type:"qcm", q:"Dans « si ... alors ... sinon », si la condition est fausse, on exécute :", options:["le bloc « sinon »","le bloc « alors »","rien du tout","les deux blocs"], answer:0, explain:"Le « sinon » gère le cas où la condition est fausse.", indice:"« Sinon » = l'autre cas."},
            {type:"qcm", q:"Sur la scène Scratch, la position d'un lutin est donnée par :", options:["ses coordonnées (x ; y)","sa couleur","son nom","sa taille"], answer:0, explain:"On repère le lutin par ses coordonnées (x ; y).", indice:"Deux nombres : un horizontal, un vertical."},
            {type:"qcm", q:"Dans un repère, x indique la position :", options:["horizontale","verticale","en profondeur","dans le temps"], answer:0, explain:"x est l'axe horizontal.", indice:"x = de gauche à droite."},
            {type:"qcm", q:"y indique la position :", options:["verticale","horizontale","en diagonale","sonore"], answer:0, explain:"y est l'axe vertical.", indice:"y = de bas en haut."},
            {type:"qcm", q:"Le centre de la scène a pour coordonnées :", options:["(0 ; 0)","(1 ; 1)","(10 ; 10)","(100 ; 100)"], answer:0, explain:"Le centre est l'origine du repère : (0 ; 0).", indice:"Au milieu, les deux valeurs sont nulles."},
            {type:"vf", q:"Une boucle « répéter jusqu'à ce que » s'arrête quand la condition devient vraie.", answer:true, explain:"Oui : tant que la condition est fausse, la boucle continue.", indice:"Elle répète « jusqu'à » ce que ce soit vrai."},
            {type:"qcm", q:"« si (score = 10) alors dire Gagné » : le lutin dit « Gagné » :", options:["quand le score vaut 10","tout le temps","jamais","quand on clique"], answer:0, explain:"L'instruction s'exécute seulement si score = 10.", indice:"La condition teste l'égalité du score à 10."},
            {type:"vf", q:"Une condition est un test dont le résultat est soit vrai, soit faux.", answer:true, explain:"Oui : une condition est vraie ou fausse.", indice:"Comme une question à réponse oui/non."},
            {type:"qcm", q:"Le bloc « aller à x: 100 y: 0 » place le lutin :", options:["à droite du centre, à la même hauteur","tout en haut de l'écran","hors de l'écran","au centre exact"], answer:0, explain:"x = 100 (à droite du centre), y = 0 (même hauteur que le centre).", indice:"x positif = vers la droite ; y = 0 = hauteur du centre."},
            {type:"qcm", q:"Pour répéter des instructions tant qu'une condition n'est pas remplie, on utilise :", options:["« répéter jusqu'à ce que »","« avancer de 10 »","« changer de costume »","« dire bonjour »"], answer:0, explain:"C'est la boucle conditionnelle « répéter jusqu'à ce que ».", indice:"Une boucle pilotée par une condition."},
            {type:"vf", q:"On peut combiner des boucles et des conditions dans un même programme.", answer:true, explain:"Oui : c'est même très courant (par exemple répéter un test).", indice:"Rien n'empêche de mélanger les deux."}
          ]
        },
        {
          id:"m20", niveau:"5e", title:"Les priorités opératoires",
          carte:{centre:"Les priorités opératoires", branches:[{titre:"1) Les parenthèses", detail:"toujours en premier"},{titre:"2) × et ÷", detail:"de gauche à droite"},{titre:"3) + et -", detail:"de gauche à droite"},{titre:"Exemple", detail:"3 + 4 × 2 = 3 + 8 = 11"},{titre:"Piège", detail:"on ne calcule pas toujours de gauche à droite"}]},
          cours:"Dans un calcul, on respecte un ordre : d'abord les <b>parenthèses</b>, puis les <b>multiplications et divisions</b> (de gauche à droite), enfin les <b>additions et soustractions</b> (de gauche à droite). Exemple : 3 + 4 × 2 = 3 + 8 = 11.",
          questions:[
            {type:"qcm", q:"Sans parenthèses, on calcule d'abord :", options:["les multiplications et divisions","les additions","de gauche à droite tout le temps","les soustractions"], answer:0, explain:"× et ÷ passent avant + et -.", indice:"La multiplication est prioritaire sur l'addition."},
            {type:"saisie", q:"Calcule : 3 + 4 × 2", answer:["11"], explain:"4 × 2 = 8, puis 3 + 8 = 11.", indice:"Fais la multiplication d'abord."},
            {type:"saisie", q:"Calcule : (2 + 3) × 4", answer:["20"], explain:"La parenthèse d'abord : 2 + 3 = 5, puis 5 × 4 = 20.", indice:"Commence par la parenthèse."},
            {type:"saisie", q:"Calcule : 10 - 2 × 3", answer:["4"], explain:"2 × 3 = 6, puis 10 - 6 = 4.", indice:"La multiplication avant la soustraction."},
            {type:"saisie", q:"Calcule : 12 ÷ 3 + 1", answer:["5"], explain:"12 ÷ 3 = 4, puis 4 + 1 = 5.", indice:"La division avant l'addition."},
            {type:"qcm", q:"Dans « 5 × (2 + 1) », on calcule en premier :", options:["la parenthèse (2 + 1)","5 × 2","rien","2 + 1 + 5"], answer:0, explain:"Toujours les parenthèses en premier.", indice:"Ce qui est entre parenthèses passe avant."},
            {type:"saisie", q:"Calcule : 2 + 3 × 4", answer:["14"], explain:"3 × 4 = 12, puis 2 + 12 = 14.", indice:"Multiplication d'abord."},
            {type:"saisie", q:"Calcule : 20 - (4 + 6)", answer:["10"], explain:"Parenthèse : 4 + 6 = 10, puis 20 - 10 = 10.", indice:"Commence par la parenthèse."},
            {type:"vf", q:"Les parenthèses se calculent toujours en premier.", answer:true, explain:"Oui : c'est la première priorité.", indice:"Parenthèses d'abord."},
            {type:"saisie", q:"Calcule : 6 + 8 ÷ 2", answer:["10"], explain:"8 ÷ 2 = 4, puis 6 + 4 = 10.", indice:"La division avant l'addition."},
            {type:"qcm", q:"Calcule : 7 + 2 × 5", options:["17","45","35","20"], answer:0, explain:"2 × 5 = 10, puis 7 + 10 = 17.", indice:"Multiplication d'abord."},
            {type:"saisie", q:"Calcule : 3 × 4 + 2 × 5", answer:["22"], explain:"3 × 4 = 12 et 2 × 5 = 10, puis 12 + 10 = 22.", indice:"Fais les deux multiplications, puis additionne."}
          ]
        },
        {
          id:"m21", niveau:"3e", title:"PGCD et fractions irréductibles",
          carte:{centre:"PGCD et fractions irréductibles", branches:[{titre:"PGCD", detail:"plus grand commun diviseur"},{titre:"Irréductible", detail:"PGCD du haut et du bas = 1"},{titre:"Méthode", detail:"diviser par le PGCD"},{titre:"Exemple", detail:"12/18 = 2/3 (÷ 6)"},{titre:"Vérifier", detail:"plus aucun diviseur commun"}]},
          cours:"Le <b>PGCD</b> de deux nombres est leur <b>plus grand commun diviseur</b>. Une fraction est <b>irréductible</b> lorsque son numérateur et son dénominateur n'ont plus de diviseur commun (leur PGCD vaut 1). Pour la rendre irréductible, on <b>divise</b> le haut et le bas par leur <b>PGCD</b>. Exemple : 12/18 = 2/3 (on divise par 6).",
          questions:[
            {type:"qcm", q:"PGCD signifie :", options:["plus grand commun diviseur","produit de grands chiffres","plus grand chiffre du dénominateur","petit groupe de calcul"], answer:0, explain:"PGCD = plus grand commun diviseur.", indice:"C'est le plus grand nombre qui divise les deux."},
            {type:"saisie", q:"PGCD de 12 et 18 ?", answer:["6"], explain:"Diviseurs communs : 1, 2, 3, 6. Le plus grand est 6.", indice:"Cherche le plus grand nombre qui divise 12 et 18."},
            {type:"saisie", q:"PGCD de 8 et 12 ?", answer:["4"], explain:"Diviseurs communs : 1, 2, 4. Le plus grand est 4.", indice:"Quel est le plus grand diviseur commun ?"},
            {type:"saisie", q:"Rends irréductible la fraction 12/18 (sous la forme a/b).", answer:["2/3"], explain:"On divise par 6 : 12/18 = 2/3.", indice:"Divise le haut et le bas par leur PGCD (6)."},
            {type:"saisie", q:"Rends irréductible la fraction 8/12.", answer:["2/3"], explain:"On divise par 4 : 8/12 = 2/3.", indice:"Divise par le PGCD (4)."},
            {type:"qcm", q:"Une fraction est irréductible quand :", options:["on ne peut plus la simplifier (PGCD = 1)","le numérateur est pair","le dénominateur est grand","elle est plus petite que 1"], answer:0, explain:"Plus aucun diviseur commun : PGCD = 1.", indice:"On ne peut plus diviser en haut et en bas."},
            {type:"saisie", q:"PGCD de 15 et 25 ?", answer:["5"], explain:"Diviseurs communs : 1, 5. Le plus grand est 5.", indice:"5 divise 15 et 25."},
            {type:"saisie", q:"Rends irréductible la fraction 15/25.", answer:["3/5"], explain:"On divise par 5 : 15/25 = 3/5.", indice:"Divise par le PGCD (5)."},
            {type:"vf", q:"Pour simplifier une fraction au maximum, on divise par le PGCD.", answer:true, explain:"Oui : diviser par le PGCD donne directement la fraction irréductible.", indice:"Le PGCD simplifie en une seule étape."},
            {type:"saisie", q:"PGCD de 6 et 9 ?", answer:["3"], explain:"Diviseurs communs : 1, 3. Le plus grand est 3.", indice:"3 divise 6 et 9."},
            {type:"saisie", q:"Rends irréductible la fraction 9/6.", answer:["3/2"], explain:"On divise par 3 : 9/6 = 3/2.", indice:"Divise par le PGCD (3)."},
            {type:"qcm", q:"La fraction 7/9 est-elle irréductible ?", options:["oui","non"], answer:0, explain:"7 et 9 n'ont que 1 comme diviseur commun : PGCD = 1, donc irréductible.", indice:"Cherche un diviseur commun à 7 et 9."}
          ]
        },
        {
          id:"m22", niveau:"4e", title:"Agrandissement, réduction et échelle",
          carte:{centre:"Agrandissement, réduction, échelle", branches:[{titre:"Agrandissement", detail:"longueurs × un nombre > 1"},{titre:"Réduction", detail:"longueurs × un nombre < 1"},{titre:"Angles conservés", detail:"la forme ne change pas"},{titre:"Échelle", detail:"1/100 : 1 cm = 100 cm réels"},{titre:"Aire", detail:"× k² (coefficient au carré)"}]},
          cours:"Un <b>agrandissement</b> multiplie toutes les longueurs par un coefficient <b>plus grand que 1</b> ; une <b>réduction</b> par un coefficient <b>plus petit que 1</b>. Les <b>angles sont conservés</b> (la forme ne change pas). Une <b>échelle</b> compare le plan à la réalité : à l'échelle <b>1/100</b>, 1 cm sur le plan représente 100 cm réels. Pour les aires, on multiplie par le coefficient <b>au carré</b>.",
          questions:[
            {type:"qcm", q:"Un agrandissement multiplie les longueurs par un nombre :", options:["plus grand que 1","plus petit que 1","égal à 0","négatif"], answer:0, explain:"Agrandir = multiplier par k > 1.", indice:"Plus grand, donc coefficient supérieur à 1."},
            {type:"qcm", q:"Une réduction multiplie les longueurs par un nombre :", options:["plus petit que 1","plus grand que 1","égal à 1","égal à 10"], answer:0, explain:"Réduire = multiplier par k < 1.", indice:"Plus petit, donc coefficient inférieur à 1."},
            {type:"vf", q:"Dans un agrandissement ou une réduction, les angles sont conservés.", answer:true, explain:"Oui : seule la taille change, pas la forme.", indice:"La figure reste « la même », en plus grand ou plus petit."},
            {type:"saisie", q:"On agrandit une figure 3 fois. Un côté de 4 cm devient ... cm ?", answer:["12","12 cm"], explain:"4 × 3 = 12 cm.", indice:"Multiplie la longueur par 3."},
            {type:"saisie", q:"Réduction de coefficient 1/2. Un côté de 10 cm devient ... cm ?", answer:["5","5 cm"], explain:"10 × 1/2 = 5 cm.", indice:"La moitié de 10."},
            {type:"qcm", q:"Une échelle 1/100 signifie :", options:["1 cm sur le plan = 100 cm en réalité","100 cm sur le plan = 1 cm réel","la figure est 100 fois plus petite que le plan","rien"], answer:0, explain:"À l'échelle 1/100, 1 cm représente 100 cm réels.", indice:"Le dénominateur indique combien de fois c'est plus grand en vrai."},
            {type:"saisie", q:"À l'échelle 1/100, 3 cm sur le plan représentent ... cm en réalité ?", answer:["300","300 cm"], explain:"3 × 100 = 300 cm.", indice:"Multiplie par 100."},
            {type:"qcm", q:"Pour un agrandissement de coefficient 2, l'aire est multipliée par :", options:["4","2","8","16"], answer:0, explain:"L'aire est multipliée par le coefficient au carré : 2² = 4.", indice:"Pour une aire, on met le coefficient au carré."},
            {type:"vf", q:"Agrandir ou réduire une figure conserve sa forme (mêmes angles).", answer:true, explain:"Oui : la forme est préservée.", indice:"On garde les mêmes angles."},
            {type:"saisie", q:"À l'échelle 1/50, 2 cm sur le plan représentent ... cm réels ?", answer:["100","100 cm"], explain:"2 × 50 = 100 cm.", indice:"Multiplie par 50."},
            {type:"qcm", q:"Sur une carte, une échelle 1/25000 indique que :", options:["les distances réelles sont 25000 fois plus grandes","la carte est 25000 fois plus grande","il y a 25000 cartes","rien"], answer:0, explain:"1 cm sur la carte = 25000 cm réels.", indice:"Le dénominateur dit combien de fois la réalité est plus grande."},
            {type:"saisie", q:"Agrandissement de coefficient 5 : un côté de 3 cm devient ... cm ?", answer:["15","15 cm"], explain:"3 × 5 = 15 cm.", indice:"Multiplie par 5."}
          ]
        },
        {
          id:"m23", niveau:"5e", title:"Le repérage dans le plan",
          carte:{centre:"Le repérage dans le plan", branches:[{titre:"Deux axes", detail:"perpendiculaires, en (0 ; 0)"},{titre:"Abscisse (x)", detail:"sur l'axe horizontal"},{titre:"Ordonnée (y)", detail:"sur l'axe vertical"},{titre:"Coordonnées", detail:"(abscisse ; ordonnée)"},{titre:"L'origine", detail:"le point (0 ; 0)"}]},
          cours:"Un <b>repère</b> du plan est formé de <b>deux axes perpendiculaires</b> : l'axe des <b>abscisses</b> (horizontal, x) et l'axe des <b>ordonnées</b> (vertical, y). Un point a des <b>coordonnées (x ; y)</b> : d'abord l'<b>abscisse</b>, puis l'<b>ordonnée</b>. Leur point de croisement, l'<b>origine</b>, a pour coordonnées <b>(0 ; 0)</b>.",
          questions:[
            {type:"qcm", q:"Un repère du plan est formé de :", options:["deux axes perpendiculaires","un seul axe","trois cercles","une diagonale"], answer:0, explain:"Deux axes perpendiculaires (x et y).", indice:"Ils forment un angle droit."},
            {type:"qcm", q:"L'axe horizontal s'appelle :", options:["l'axe des abscisses","l'axe des ordonnées","la diagonale","le rayon"], answer:0, explain:"L'axe horizontal est celui des abscisses (x).", indice:"x, de gauche à droite."},
            {type:"qcm", q:"L'axe vertical s'appelle :", options:["l'axe des ordonnées","l'axe des abscisses","la hauteur","le diamètre"], answer:0, explain:"L'axe vertical est celui des ordonnées (y).", indice:"y, de bas en haut."},
            {type:"qcm", q:"Dans les coordonnées (3 ; 5), le nombre 3 est :", options:["l'abscisse","l'ordonnée","le périmètre","l'aire"], answer:0, explain:"Le premier nombre est l'abscisse.", indice:"Abscisse d'abord."},
            {type:"qcm", q:"Dans (3 ; 5), le nombre 5 est :", options:["l'ordonnée","l'abscisse","la hauteur du repère","le rayon"], answer:0, explain:"Le second nombre est l'ordonnée.", indice:"Ordonnée en second."},
            {type:"qcm", q:"Les coordonnées de l'origine sont :", options:["(0 ; 0)","(1 ; 1)","(0 ; 1)","(10 ; 10)"], answer:0, explain:"L'origine est le point (0 ; 0).", indice:"Au croisement des deux axes."},
            {type:"qcm", q:"On écrit les coordonnées dans l'ordre :", options:["(abscisse ; ordonnée)","(ordonnée ; abscisse)","(y ; x)","au hasard"], answer:0, explain:"Toujours (x ; y) : abscisse puis ordonnée.", indice:"x avant y."},
            {type:"vf", q:"L'abscisse se lit sur l'axe horizontal.", answer:true, explain:"Oui : l'abscisse correspond à x (horizontal).", indice:"Horizontal = abscisse."},
            {type:"qcm", q:"Un point d'abscisse positive est situé :", options:["à droite de l'origine","à gauche de l'origine","tout en bas","hors du plan"], answer:0, explain:"x positif : à droite.", indice:"Positif vers la droite."},
            {type:"qcm", q:"Un point d'ordonnée négative est situé :", options:["en dessous de l'axe horizontal","au-dessus","à droite seulement","à l'origine"], answer:0, explain:"y négatif : en dessous.", indice:"Négatif vers le bas."},
            {type:"vf", q:"Le point (0 ; 0) est l'origine du repère.", answer:true, explain:"Oui : c'est le point de départ.", indice:"Les deux coordonnées sont nulles."},
            {type:"qcm", q:"Le point A(2 ; 0) se trouve :", options:["sur l'axe horizontal","sur l'axe vertical","à l'origine","hors du plan"], answer:0, explain:"Comme y = 0, le point est sur l'axe horizontal.", indice:"Ordonnée nulle = sur l'axe des abscisses."}
          ]
        },
        {
          id:"m24", niveau:"5e", title:"Organisation et gestion de données",
          carte:{centre:"Organisation de données", branches:[{titre:"Tableau", detail:"ranger les données"},{titre:"Graphiques", detail:"bâtons, courbe, camembert"},{titre:"Effectif", detail:"combien de fois une valeur apparaît"},{titre:"Moyenne", detail:"somme ÷ nombre de valeurs"},{titre:"Lire un point", detail:"grâce aux axes"}]},
          cours:"Les <b>données</b> se présentent dans un <b>tableau</b> ou un <b>graphique</b> (diagramme en <b>bâtons</b>, <b>courbe</b>, diagramme <b>circulaire</b>). L'<b>effectif</b> d'une valeur est le <b>nombre de fois</b> qu'elle apparaît. La <b>moyenne</b> se calcule par <b>somme des valeurs ÷ nombre de valeurs</b>. Pour lire une valeur sur un graphique, on utilise les <b>axes</b>.",
          questions:[
            {type:"qcm", q:"Un diagramme en bâtons sert à :", options:["représenter des données","calculer une aire","tracer un cercle","conjuguer un verbe"], answer:0, explain:"Il représente visuellement des données.", indice:"Des barres de hauteurs différentes."},
            {type:"qcm", q:"L'effectif d'une valeur, c'est :", options:["le nombre de fois qu'elle apparaît","sa hauteur en cm","son carré","sa moitié"], answer:0, explain:"L'effectif compte les apparitions.", indice:"Combien de fois on la rencontre."},
            {type:"saisie", q:"8 élèves ont eu 12 et 12 élèves ont eu 14. Combien d'élèves en tout ?", answer:["20"], explain:"8 + 12 = 20 élèves.", indice:"Additionne les deux effectifs."},
            {type:"qcm", q:"Pour lire la valeur d'un point sur un graphique, on regarde :", options:["ses coordonnées (les axes)","sa couleur","son épaisseur","rien"], answer:0, explain:"On lit ses coordonnées sur les axes.", indice:"Projette sur les deux axes."},
            {type:"saisie", q:"Calcule la moyenne de : 10, 12, 14, 16.", answer:["13"], explain:"(10 + 12 + 14 + 16) ÷ 4 = 52 ÷ 4 = 13.", indice:"Additionne, puis divise par 4."},
            {type:"qcm", q:"Un diagramme circulaire (camembert) représente :", options:["des proportions (parts d'un tout)","une longueur","un angle droit","une vitesse"], answer:0, explain:"Il montre des parts d'un ensemble.", indice:"Des parts de « gâteau »."},
            {type:"vf", q:"Un tableau et un graphique peuvent présenter les mêmes données.", answer:true, explain:"Oui : deux façons de montrer les mêmes informations.", indice:"Même contenu, présentation différente."},
            {type:"saisie", q:"Effectifs : rouge 5, bleu 3, vert 2. Total ?", answer:["10"], explain:"5 + 3 + 2 = 10.", indice:"Additionne les trois effectifs."},
            {type:"qcm", q:"La moyenne se calcule par :", options:["somme des valeurs ÷ nombre de valeurs","valeur la plus grande","valeur la plus petite","somme × nombre"], answer:0, explain:"Moyenne = somme ÷ effectif total.", indice:"On partage la somme."},
            {type:"saisie", q:"Calcule la moyenne de : 8, 12, 10.", answer:["10"], explain:"(8 + 12 + 10) ÷ 3 = 30 ÷ 3 = 10.", indice:"Somme 30, divisée par 3."},
            {type:"vf", q:"Sur un diagramme en bâtons, plus le bâton est haut, plus l'effectif est grand.", answer:true, explain:"Oui : la hauteur représente l'effectif.", indice:"Haut = beaucoup."},
            {type:"qcm", q:"Les axes d'un graphique servent à :", options:["repérer et lire les valeurs","décorer","colorier","mesurer la température"], answer:0, explain:"Les axes permettent de lire les données.", indice:"Comme un repère."}
          ]
        }
      ]
    },
    {
      id:"francais", name:"Français", region:"La Bibliothèque Enchantée", icon:"📜", color:"#e87fb0",
      lessons:[
        {
          id:"f7", niveau:"6e", title:"Les types de phrases",
          carte:{centre:"Les types de phrases", branches:[{titre:"Déclarative", detail:"donne une information (.)"},{titre:"Interrogative", detail:"pose une question (?)"},{titre:"Exclamative", detail:"exprime une émotion (!)"},{titre:"Impérative", detail:"donne un ordre ou un conseil"},{titre:"La ponctuation", detail:"elle marque le type"}]},
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
          carte:{centre:"Le verbe et son sujet", branches:[{titre:"Le verbe", detail:"l'action ou l'état"},{titre:"Le sujet", detail:"qui fait l'action"},{titre:"La question", detail:"« Qui est-ce qui ... ? »"},{titre:"L'accord", detail:"le verbe s'accor