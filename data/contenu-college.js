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
        },
        {
          id:"m25", niveau:"3e", title:"Les équations-produits",
          carte:{centre:"Les équations-produits", branches:[{titre:"Forme A × B = 0", detail:"un produit égal à zéro"},{titre:"Règle clé", detail:"A = 0 ou B = 0"},{titre:"Deux solutions", detail:"une par facteur"},{titre:"Exemple", detail:"(x-2)(x+3)=0 : x=2 ou x=-3"},{titre:"Astuce", detail:"on annule chaque facteur"}]},
          cours:"Une <b>équation-produit</b> est de la forme <b>A × B = 0</b>. Un produit est nul <b>si et seulement si l'un de ses facteurs est nul</b> : A × B = 0 équivaut à <b>A = 0 ou B = 0</b>. On résout donc en annulant chaque facteur. Exemple : (x - 2)(x + 3) = 0 donne x = 2 <b>ou</b> x = -3.",
          questions:[
            {type:"qcm", q:"Un produit de facteurs est nul :", options:["si l'un au moins des facteurs est nul","si tous les facteurs valent 1","jamais","seulement si les deux sont négatifs"], answer:0, explain:"Un produit vaut 0 dès qu'un facteur vaut 0.", indice:"Que faut-il pour qu'une multiplication donne 0 ?"},
            {type:"qcm", q:"« A × B = 0 » équivaut à :", options:["A = 0 ou B = 0","A = 0 et B = 0","A = B","A + B = 0"], answer:0, explain:"On annule l'un OU l'autre facteur.", indice:"« ou », pas « et »."},
            {type:"qcm", q:"Solutions de (x - 2)(x + 3) = 0 :", options:["x = 2 ou x = -3","x = -2 ou x = 3","x = 2 et x = 3","x = 6"], answer:0, explain:"x - 2 = 0 donne 2 ; x + 3 = 0 donne -3.", indice:"Annule chaque parenthèse."},
            {type:"saisie", q:"Une solution de (x - 5)(x + 1) = 0 est x = 5. Quelle est l'autre ?", answer:["-1"], explain:"x + 1 = 0 donne x = -1.", indice:"Annule le second facteur : x + 1 = 0."},
            {type:"qcm", q:"(x - 4)(x - 7) = 0 a pour solutions :", options:["4 et 7","-4 et -7","11","28"], answer:0, explain:"x - 4 = 0 et x - 7 = 0.", indice:"Chaque facteur s'annule pour sa valeur."},
            {type:"qcm", q:"Les solutions de x(x - 3) = 0 sont :", options:["0 et 3","3 seulement","-3","0 seulement"], answer:0, explain:"x = 0 ou x - 3 = 0 (x = 3).", indice:"Le premier facteur est x lui-même."},
            {type:"vf", q:"Un produit est nul dès qu'un seul de ses facteurs est nul.", answer:true, explain:"Oui : il suffit d'un facteur nul.", indice:"Un seul zéro suffit."},
            {type:"qcm", q:"Solutions de (x + 2)(x - 6) = 0 :", options:["-2 et 6","2 et -6","8","-12"], answer:0, explain:"x + 2 = 0 (−2) ou x - 6 = 0 (6).", indice:"Annule chaque facteur."},
            {type:"saisie", q:"(x - 8)(x + 8) = 0 : une solution est 8. Quelle est l'autre ?", answer:["-8"], explain:"x + 8 = 0 donne x = -8.", indice:"Annule x + 8."},
            {type:"vf", q:"Une équation-produit a en général deux solutions.", answer:true, explain:"Oui : une par facteur.", indice:"Deux facteurs, deux valeurs qui les annulent."},
            {type:"qcm", q:"Si (2x)(x - 1) = 0, alors :", options:["x = 0 ou x = 1","x = 2 ou x = 1","x = -1","x = 0,5"], answer:0, explain:"2x = 0 donne x = 0 ; x - 1 = 0 donne 1.", indice:"2x = 0 donne x = 0."},
            {type:"saisie", q:"Solution positive de (x - 9)(x + 4) = 0 ?", answer:["9"], explain:"x - 9 = 0 donne 9 (l'autre, -4, est négative).", indice:"Annule x - 9."}
          ]
        },
        {
          id:"m26", niveau:"3e", title:"Les nombres premiers",
          carte:{centre:"Les nombres premiers", branches:[{titre:"Définition", detail:"exactement 2 diviseurs : 1 et lui-même"},{titre:"Les premiers", detail:"2, 3, 5, 7, 11, 13..."},{titre:"1 n'est pas premier", detail:"un seul diviseur"},{titre:"Décomposition", detail:"12 = 2 × 2 × 3"},{titre:"Le seul pair premier", detail:"c'est 2"}]},
          cours:"Un <b>nombre premier</b> est un entier qui a <b>exactement deux diviseurs</b> : 1 et lui-même. Les premiers sont 2, 3, 5, 7, 11, 13, ... <b>1 n'est pas premier</b> (il n'a qu'un diviseur). Tout entier se <b>décompose</b> en produit de facteurs premiers : par exemple 12 = 2 × 2 × 3.",
          questions:[
            {type:"qcm", q:"Un nombre premier a :", options:["exactement deux diviseurs (1 et lui-même)","trois diviseurs","aucun diviseur","beaucoup de diviseurs"], answer:0, explain:"Deux diviseurs seulement.", indice:"1 et le nombre lui-même."},
            {type:"qcm", q:"Le plus petit nombre premier est :", options:["2","0","1","3"], answer:0, explain:"2 est le plus petit (et le seul pair) premier.", indice:"Plus petit que 3."},
            {type:"vf", q:"1 est un nombre premier.", answer:false, explain:"Non : 1 n'a qu'un seul diviseur, il n'est pas premier.", indice:"Combien de diviseurs a 1 ?"},
            {type:"qcm", q:"Lequel est premier ?", options:["7","9","15","21"], answer:0, explain:"7 n'a que 1 et 7 ; 9 = 3×3, 15 = 3×5, 21 = 3×7.", indice:"Cherche celui qui n'a pas d'autre diviseur."},
            {type:"qcm", q:"Lequel n'est PAS premier ?", options:["9","2","5","11"], answer:0, explain:"9 = 3 × 3 : il a un diviseur de plus.", indice:"Lequel se décompose ?"},
            {type:"qcm", q:"12 décomposé en facteurs premiers :", options:["2 × 2 × 3","3 × 4","2 × 6","12 × 1"], answer:0, explain:"12 = 2 × 2 × 3 (tous premiers).", indice:"Tous les facteurs doivent être premiers."},
            {type:"qcm", q:"2, 3, 5, 7, 11 sont des nombres :", options:["premiers","pairs","carrés","négatifs"], answer:0, explain:"Ce sont les premiers nombres premiers.", indice:"Deux diviseurs chacun."},
            {type:"vf", q:"13 est un nombre premier.", answer:true, explain:"Oui : seuls 1 et 13 le divisent.", indice:"Cherche un autre diviseur que 1 et 13."},
            {type:"qcm", q:"15 se décompose en :", options:["3 × 5","2 × 7","15 × 1","4 × 4"], answer:0, explain:"15 = 3 × 5 (deux premiers).", indice:"Deux nombres premiers dont le produit fait 15."},
            {type:"vf", q:"Un nombre premier n'est divisible que par 1 et par lui-même.", answer:true, explain:"Oui : c'est sa définition.", indice:"Deux diviseurs seulement."},
            {type:"qcm", q:"Lequel est premier ?", options:["11","12","14","16"], answer:0, explain:"11 n'a que 1 et 11 ; les autres sont pairs.", indice:"Évite les nombres pairs (sauf 2)."},
            {type:"saisie", q:"Calcule 2 × 3 × 5.", answer:["30"], explain:"2 × 3 × 5 = 30.", indice:"6 × 5."}
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
          carte:{centre:"Le verbe et son sujet", branches:[{titre:"Le verbe", detail:"l'action ou l'état"},{titre:"Le sujet", detail:"qui fait l'action"},{titre:"La question", detail:"« Qui est-ce qui ... ? »"},{titre:"L'accord", detail:"le verbe s'accorde avec le sujet"},{titre:"Repérer le verbe", detail:"c'est le mot qui se conjugue"}]},
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
          id:"f1", niveau:"6e", title:"Les classes de mots",
          carte:{centre:"Les classes de mots", branches:[{titre:"Nom", detail:"désigne une chose, un être"},{titre:"Déterminant", detail:"le, la, un, des..."},{titre:"Adjectif", detail:"qualifie le nom"},{titre:"Verbe", detail:"action ou état, se conjugue"},{titre:"Mots invariables", detail:"adverbes, prépositions"}]},
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
          id:"f2", niveau:"6e", title:"Conjugaison : présent de l'indicatif",
          carte:{centre:"Le présent de l'indicatif", branches:[{titre:"Action actuelle", detail:"ce qui se passe maintenant"},{titre:"1er groupe (-er)", detail:"e, es, e, ons, ez, ent"},{titre:"2e groupe (-ir)", detail:"is, is, it, issons, issez, issent"},{titre:"être et avoir", detail:"à connaître par cœur"},{titre:"Terminaisons", detail:"changent selon la personne"}]},
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
          id:"f3", niveau:"5e", title:"Les figures de style",
          carte:{centre:"Les figures de style", branches:[{titre:"Comparaison", detail:"avec « comme »"},{titre:"Métaphore", detail:"une image, sans mot outil"},{titre:"Personnification", detail:"un objet qui agit comme un humain"},{titre:"Leur but", detail:"créer une image, une émotion"}]},
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
          carte:{centre:"Discours direct et indirect", branches:[{titre:"Discours direct", detail:"paroles citées, guillemets"},{titre:"Discours indirect", detail:"paroles rapportées avec « que »"},{titre:"Verbe introducteur", detail:"dire, demander, répondre"},{titre:"Changements", detail:"pronoms et temps changent"}]},
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
          carte:{centre:"Les propositions subordonnées", branches:[{titre:"Phrase complexe", detail:"plusieurs verbes conjugués"},{titre:"Proposition principale", detail:"elle est autonome"},{titre:"Subordonnée", detail:"elle dépend de la principale"},{titre:"Mot subordonnant", detail:"que, qui, quand, parce que"}]},
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
          carte:{centre:"Passé simple et imparfait", branches:[{titre:"Imparfait", detail:"le décor, ce qui dure"},{titre:"Passé simple", detail:"actions brèves de premier plan"},{titre:"Dans un récit", detail:"les deux se complètent"},{titre:"Exemple", detail:"il marchait quand il tomba"}]},
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
          carte:{centre:"Les figures de style", branches:[{titre:"Comparaison", detail:"avec un mot outil (comme)"},{titre:"Métaphore", detail:"une image, sans mot outil"},{titre:"Personnification", detail:"un objet qui agit comme un humain"},{titre:"Hyperbole", detail:"une exagération"},{titre:"Leur but", detail:"créer une image, une émotion"}]},
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
          carte:{centre:"Voix active et voix passive", branches:[{titre:"Voix active", detail:"le sujet fait l'action"},{titre:"Voix passive", detail:"le sujet subit l'action"},{titre:"Transformation", detail:"le COD devient sujet"},{titre:"Auxiliaire être", detail:"+ participe passé"},{titre:"Complément d'agent", detail:"introduit par « par »"}]},
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
          carte:{centre:"Argumenter", branches:[{titre:"La thèse", detail:"l'opinion défendue"},{titre:"Les arguments", detail:"les raisons"},{titre:"Les exemples", detail:"illustrent les arguments"},{titre:"Connecteurs", detail:"d'abord, ensuite, donc"},{titre:"Le but", detail:"convaincre le lecteur"}]},
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
        },
        {
          id:"f12", niveau:"6e", title:"Les homophones a / à, et / est, son / sont",
          carte:{centre:"a/à, et/est, son/sont", branches:[{titre:"a ou à", detail:"a = avait (avoir), sinon à"},{titre:"et ou est", detail:"est = était (être), sinon et"},{titre:"son ou sont", detail:"sont = étaient (être), sinon son"},{titre:"L'astuce", detail:"remplacer par le verbe à l'imparfait"}]},
          cours:"Des mots se prononcent pareil mais s'écrivent différemment (les <b>homophones</b>). Petites astuces : " +
                "<b>a</b> (verbe avoir) se remplace par « <b>avait</b> », sinon c'est <b>à</b> (préposition). " +
                "<b>est</b> (verbe être) se remplace par « <b>était</b> », sinon c'est <b>et</b> (qui relie, comme « et puis »). " +
                "<b>sont</b> (verbe être) se remplace par « <b>étaient</b> », sinon c'est <b>son</b> (déterminant : son vélo).",
          questions:[
            {type:"qcm", q:"« Il ___ mangé une pomme. »", options:["a","à"], answer:0, explain:"On peut dire « il avait mangé » : c'est le verbe avoir, donc « a ».", indice:"Essaie de remplacer par « avait »."},
            {type:"qcm", q:"« Je vais ___ Paris. »", options:["à","a"], answer:0, explain:"« avait » ne marche pas : c'est la préposition « à ».", indice:"On ne peut pas dire « je vais avait Paris »."},
            {type:"qcm", q:"« Léo ___ content. »", options:["est","et"], answer:0, explain:"On peut dire « Léo était content » : verbe être, donc « est ».", indice:"Remplace par « était »."},
            {type:"qcm", q:"« un chat ___ un chien »", options:["et","est"], answer:0, explain:"« et » relie deux mots (= et puis).", indice:"« était » ne marche pas ici."},
            {type:"qcm", q:"« ___ vélo est rouge. »", options:["Son","Sont"], answer:0, explain:"« son vélo » : déterminant possessif (un seul vélo).", indice:"« étaient » ne marche pas : ce n'est pas le verbe être."},
            {type:"qcm", q:"« Les enfants ___ sages. »", options:["sont","son"], answer:0, explain:"On peut dire « les enfants étaient sages » : verbe être, donc « sont ».", indice:"Remplace par « étaient »."},
            {type:"vf", q:"Pour choisir « a » ou « à », on essaie de remplacer par « avait » : si ça marche, c'est « a ».", answer:true, explain:"Oui : « avait » fonctionne uniquement pour le verbe avoir.", indice:"« a » = avoir ; « à » = préposition."},
            {type:"saisie", q:"Complète avec le bon mot (verbe avoir) : « Elle ___ un chien. »", answer:["a"], explain:"« Elle avait un chien » fonctionne : on écrit « a ».", indice:"Verbe avoir = « a »."},
            {type:"qcm", q:"« Il habite ___ la campagne. »", options:["à","a"], answer:0, explain:"Préposition de lieu : « à ».", indice:"« avait » est impossible ici."},
            {type:"qcm", q:"« Le ciel ___ bleu ___ les oiseaux chantent. »", options:["est / et","et / est","a / à","à / a"], answer:0, explain:"Le ciel EST bleu (être) ET les oiseaux (relie).", indice:"Le premier se remplace par « était »."},
            {type:"vf", q:"« sont » est le verbe « être » conjugué (ils / elles sont).", answer:true, explain:"Oui : « ils sont » = « ils étaient » au présent.", indice:"Pense à « être » au pluriel."},
            {type:"qcm", q:"« Mes voisins ___ en vacances. »", options:["sont","son"], answer:0, explain:"« Mes voisins étaient en vacances » : verbe être, donc « sont ».", indice:"Remplace par « étaient »."}
          ]
        },
        {
          id:"f13", niveau:"6e", title:"Le groupe nominal et les accords",
          carte:{centre:"Le groupe nominal et les accords", branches:[{titre:"Le noyau", detail:"le nom principal"},{titre:"Autour du nom", detail:"déterminant et adjectifs"},{titre:"Accord", detail:"en genre et en nombre"},{titre:"Pluriel", detail:"souvent -s, parfois -x"},{titre:"Exemple", detail:"des chats noirs"}]},
          cours:"Un <b>groupe nominal</b> (GN) est construit autour d'un <b>nom</b> (le noyau), souvent avec un <b>déterminant</b> (le, la, un, des...) et un ou des <b>adjectifs</b>. " +
                "Dans le GN, le déterminant et l'adjectif <b>s'accordent</b> avec le nom en <b>genre</b> (masculin / féminin) et en <b>nombre</b> (singulier / pluriel). " +
                "Le <b>pluriel</b> des noms se forme souvent en ajoutant <b>-s</b>, parfois <b>-x</b> (un château, des châteaux).",
          questions:[
            {type:"qcm", q:"Dans le GN « un grand jardin », le nom noyau est :", options:["jardin","grand","un","aucun"], answer:0, explain:"Le noyau est le nom : « jardin ».", indice:"Cherche le mot principal qui désigne la chose."},
            {type:"qcm", q:"Pluriel de « un chat noir » :", options:["des chats noirs","des chat noirs","des chats noir","des chats noires"], answer:0, explain:"Tout s'accorde au pluriel masculin : des chats noirs.", indice:"Déterminant, nom ET adjectif prennent la marque du pluriel."},
            {type:"qcm", q:"Féminin de « un ami gentil » :", options:["une amie gentille","une ami gentil","une amie gentil","un amie gentille"], answer:0, explain:"Au féminin : une amie gentille.", indice:"Le nom et l'adjectif passent au féminin."},
            {type:"vf", q:"Dans un groupe nominal, l'adjectif s'accorde en genre et en nombre avec le nom.", answer:true, explain:"Oui : c'est la règle d'accord dans le GN.", indice:"L'adjectif suit le nom auquel il se rapporte."},
            {type:"qcm", q:"« des fleurs ___ » (adjectif « bleu ») :", options:["bleues","bleu","bleue","bleus"], answer:0, explain:"« fleurs » est féminin pluriel : bleues.", indice:"Féminin pluriel : -es."},
            {type:"saisie", q:"Mets au pluriel : « un château ».", answer:["des châteaux","châteaux","les châteaux"], explain:"Pluriel en -x : des châteaux.", indice:"Les noms en -eau prennent un -x au pluriel."},
            {type:"qcm", q:"Pluriel de « un cheval » :", options:["des chevaux","des chevals","des chevaus","des chevales"], answer:0, explain:"Les noms en -al font souvent -aux : des chevaux.", indice:"Pense à « journal » qui donne « journaux »."},
            {type:"qcm", q:"Dans « les petites filles », « petites » est :", options:["un adjectif","un nom","un verbe","un déterminant"], answer:0, explain:"« petites » qualifie « filles » : c'est un adjectif.", indice:"Le mot qui décrit le nom est l'adjectif."},
            {type:"vf", q:"« le », « la », « les », « un », « une », « des » sont des déterminants.", answer:true, explain:"Oui : ils introduisent le nom dans le GN.", indice:"Ils se placent devant le nom."},
            {type:"qcm", q:"« une voiture ___ » (adjectif « rapide ») :", options:["rapide","rapides","rapidé","rapide(s)"], answer:0, explain:"Singulier : une voiture rapide (rapide est déjà au singulier).", indice:"Un seul objet : pas de -s."},
            {type:"qcm", q:"Accorde : « des garçons ___ » (poli) :", options:["polis","poli","polie","polies"], answer:0, explain:"Masculin pluriel : polis.", indice:"Masculin pluriel : -s."},
            {type:"saisie", q:"Pluriel de « un chou ».", answer:["des choux","choux","les choux"], explain:"« chou » prend un -x au pluriel : des choux.", indice:"Comme bijou, caillou, genou, hibou..."}
          ]
        },
        {
          id:"f14", niveau:"5e", title:"Le futur de l'indicatif",
          carte:{centre:"Le futur de l'indicatif", branches:[{titre:"Action à venir", detail:"demain, plus tard"},{titre:"Terminaisons", detail:"-ai, -as, -a, -ons, -ez, -ont"},{titre:"Pour tous les verbes", detail:"seul le radical change"},{titre:"Verbes utiles", detail:"je serai, j'aurai, j'irai"},{titre:"Ne pas confondre", detail:"futur -ai / conditionnel -ais"}]},
          cours:"Le <b>futur</b> de l'indicatif exprime une action qui se passera <b>plus tard</b>. " +
                "Ses <b>terminaisons</b> sont les mêmes pour tous les verbes : <b>-ai, -as, -a, -ons, -ez, -ont</b>. " +
                "Pour les verbes en -er, on part en général de l'infinitif (chanter, je chanterai). Verbes utiles : être (je serai), avoir (j'aurai), aller (j'irai), faire (je ferai).",
          questions:[
            {type:"qcm", q:"Le futur exprime une action qui se passe :", options:["plus tard (dans l'avenir)","maintenant","hier","il y a longtemps"], answer:0, explain:"Le futur situe l'action après le moment où l'on parle.", indice:"Pense au mot « demain »."},
            {type:"qcm", q:"« Demain, je ___ (manger) une pomme. »", options:["mangerai","mangeais","mange","mangé"], answer:0, explain:"Futur, 1re personne : je mangerai.", indice:"Infinitif « manger » + terminaison -ai."},
            {type:"qcm", q:"Les terminaisons du futur sont :", options:["-ai, -as, -a, -ons, -ez, -ont","-e, -es, -e, -ons, -ez, -ent","-ais, -ais, -ait, -ions, -iez, -aient","-s, -s, -t, -ons, -ez, -ent"], answer:0, explain:"Elles sont identiques pour tous les verbes au futur.", indice:"Elles ressemblent au verbe « avoir » au présent (ai, as, a...)."},
            {type:"qcm", q:"« Nous ___ (chanter) demain. »", options:["chanterons","chantions","chanterions","chantons"], answer:0, explain:"Futur, nous : chanterons (-ons).", indice:"Attention à ne pas confondre avec le conditionnel « chanterions »."},
            {type:"saisie", q:"Conjugue « être » au futur, 1re personne du singulier : « je ___ ».", answer:["serai","je serai"], explain:"je serai.", indice:"Pas « je serais » (ça, c'est le conditionnel)."},
            {type:"saisie", q:"Conjugue « avoir » au futur : « j'___ ».", answer:["aurai","j'aurai","aurai."], explain:"j'aurai.", indice:"Le radical du futur de « avoir » est « aur »."},
            {type:"qcm", q:"« Tu ___ (aller) à l'école. » (futur)", options:["iras","allais","vas","irais"], answer:0, explain:"Futur de « aller », tu : iras.", indice:"Le radical du futur de « aller » est « ir »."},
            {type:"vf", q:"Au futur, tous les verbes ont les terminaisons -ai, -as, -a, -ons, -ez, -ont.", answer:true, explain:"Oui : seule la base change selon le verbe.", indice:"Les terminaisons ne changent jamais au futur."},
            {type:"qcm", q:"« Ils ___ (faire) leurs devoirs. » (futur)", options:["feront","faisaient","font","feraient"], answer:0, explain:"Futur de « faire », ils : feront.", indice:"Radical « fer » + -ont."},
            {type:"qcm", q:"« Vous ___ (finir) bientôt. » (futur)", options:["finirez","finissez","finissiez","finiriez"], answer:0, explain:"Futur de « finir », vous : finirez.", indice:"Infinitif « finir » + -ez."},
            {type:"vf", q:"« je mangerai » est au futur ; « je mangerais » (avec s) est au conditionnel.", answer:true, explain:"Oui : le -s final change le temps.", indice:"Le conditionnel se termine par -ais, -ais, -ait..."},
            {type:"qcm", q:"« Elle ___ (venir) demain. » (futur)", options:["viendra","venait","vient","viendrait"], answer:0, explain:"Futur de « venir », elle : viendra.", indice:"Radical « viendr » + -a."}
          ]
        },
        {
          id:"f15", niveau:"5e", title:"Les homophones ses / ces, on / ont, ou / où",
          carte:{centre:"ses/ces, on/ont, ou/où", branches:[{titre:"ses ou ces", detail:"ses = les siens ; ces = ceux-là"},{titre:"on ou ont", detail:"ont = avaient (avoir)"},{titre:"ou ou où", detail:"où = un lieu (avec accent)"},{titre:"Astuce on", detail:"on se remplace par il"}]},
          cours:"Encore des homophones, avec leurs astuces : " +
                "<b>ses</b> (à lui, à elle : ses livres) et <b>ces</b> (que l'on montre : ces livres-là). " +
                "<b>on</b> (pronom, = il) se remplace par « <b>il</b> » ; <b>ont</b> (verbe avoir) se remplace par « <b>avaient</b> ». " +
                "<b>ou</b> (= ou bien) et <b>où</b> (le lieu : la ville où je vis).",
          questions:[
            {type:"qcm", q:"« Il range ___ affaires. » (les siennes)", options:["ses","ces"], answer:0, explain:"« ses affaires » = les siennes (possessif).", indice:"On peut dire « ses propres affaires »."},
            {type:"qcm", q:"« Regarde ___ montagnes ! » (celles-là)", options:["ces","ses"], answer:0, explain:"« ces montagnes » = celles que l'on montre (démonstratif).", indice:"On pourrait ajouter « -là » : ces montagnes-là."},
            {type:"qcm", q:"« ___ va à la piscine. » (pronom)", options:["On","Ont"], answer:0, explain:"« On va » = « il va » : pronom « on ».", indice:"Remplace par « il »."},
            {type:"qcm", q:"« Les enfants ___ fini. » (verbe avoir)", options:["ont","on"], answer:0, explain:"« Les enfants avaient fini » : verbe avoir, donc « ont ».", indice:"Remplace par « avaient »."},
            {type:"qcm", q:"« Tu veux du thé ___ du café ? »", options:["ou","où"], answer:0, explain:"« ou » = « ou bien » (un choix).", indice:"Sans accent quand on peut dire « ou bien »."},
            {type:"qcm", q:"« ___ vas-tu ? » (lieu)", options:["Où","Ou"], answer:0, explain:"« où » avec accent indique le lieu.", indice:"Il s'agit d'un endroit, pas d'un choix."},
            {type:"vf", q:"Pour choisir « on » ou « ont », on remplace par « avaient » : si ça marche, c'est « ont ».", answer:true, explain:"Oui : « avaient » = verbe avoir = « ont ».", indice:"« on » se remplace par « il », pas par « avaient »."},
            {type:"saisie", q:"Complète (pronom, = il) : « ___ a gagné ! »", answer:["On","on"], explain:"« On a gagné » = « il a gagné ».", indice:"Remplace par « il »."},
            {type:"qcm", q:"« Mets ___ chaussures. » (les siennes)", options:["ses","ces"], answer:0, explain:"Possessif : ses chaussures (les siennes).", indice:"Ce sont SES chaussures à elle/lui."},
            {type:"vf", q:"« où » avec un accent indique un lieu (la maison où je vis).", answer:true, explain:"Oui : « où » de lieu prend un accent.", indice:"Pense à « l'endroit où »."},
            {type:"qcm", q:"« Ils ___ beaucoup d'amis. »", options:["ont","on"], answer:0, explain:"« Ils avaient beaucoup d'amis » : verbe avoir, donc « ont ».", indice:"Remplace par « avaient »."},
            {type:"qcm", q:"« Je ne sais pas ___ il habite. » (lieu)", options:["où","ou"], answer:0, explain:"Lieu : « où » avec accent.", indice:"C'est l'endroit où il habite."}
          ]
        },
        {
          id:"f16", niveau:"5e", title:"Le passé composé",
          carte:{centre:"Le passé composé", branches:[{titre:"Action passée et finie", detail:"hier, j'ai mangé"},{titre:"Deux mots", detail:"auxiliaire + participe passé"},{titre:"Auxiliaire avoir", detail:"j'ai fini, tu as vu"},{titre:"Auxiliaire être", detail:"elle est allée (accord avec le sujet)"},{titre:"Participe passé", detail:"chanter → chanté, finir → fini"}]},
          cours:"Le <b>passé composé</b> exprime une action passée et <b>terminée</b>. Il est formé de deux mots : un <b>auxiliaire</b> (<b>être</b> ou <b>avoir</b>) au présent + le <b>participe passé</b> du verbe. " +
                "Exemples : j'<b>ai mangé</b>, elle <b>est allée</b>. Avec l'auxiliaire <b>être</b>, le participe passé <b>s'accorde</b> avec le sujet (elle est allé<b>e</b>, ils sont parti<b>s</b>).",
          questions:[
            {type:"qcm", q:"Le passé composé exprime :", options:["une action passée et terminée","une action future","une action qui dure encore","un ordre"], answer:0, explain:"C'est une action déjà finie.", indice:"« composé » du passé : c'est terminé."},
            {type:"qcm", q:"Le passé composé est formé de :", options:["auxiliaire (être / avoir) + participe passé","deux verbes à l'infinitif","un seul mot","un adjectif + un nom"], answer:0, explain:"Auxiliaire au présent + participe passé.", indice:"Deux mots : l'auxiliaire puis le verbe."},
            {type:"qcm", q:"« J'___ mangé. » (auxiliaire avoir)", options:["ai","suis","as","est"], answer:0, explain:"Avec avoir : j'ai mangé.", indice:"Verbe avoir, 1re personne : « ai »."},
            {type:"qcm", q:"« Elle ___ allée à l'école. » (auxiliaire)", options:["est","a","as","ai"], answer:0, explain:"Le verbe aller se conjugue avec être : elle est allée.", indice:"« aller » prend l'auxiliaire être."},
            {type:"qcm", q:"Participe passé de « finir » :", options:["fini","finir","finit","finissant"], answer:0, explain:"Participe passé : fini.", indice:"« j'ai ... » : fini."},
            {type:"qcm", q:"Participe passé de « manger » :", options:["mangé","manger","mangeait","mangeant"], answer:0, explain:"Participe passé : mangé.", indice:"« j'ai ... » : mangé."},
            {type:"qcm", q:"« Ils ___ partis. » (auxiliaire être)", options:["sont","ont","est","sommes"], answer:0, explain:"« partir » avec être : ils sont partis.", indice:"Verbe être, 3e pers. pluriel."},
            {type:"vf", q:"Avec l'auxiliaire « être », le participe passé s'accorde avec le sujet.", answer:true, explain:"Oui : elle est allée, ils sont allés.", indice:"Avec être, on accorde avec le sujet."},
            {type:"qcm", q:"« Elle est ___ » (aller, bien accordé) :", options:["allée","allé","aller","allés"], answer:0, explain:"Sujet féminin singulier : allée.", indice:"Sujet « elle » : féminin singulier."},
            {type:"saisie", q:"Complète : « j'ai ___ » (verbe chanter).", answer:["chanté"], explain:"Participe passé : chanté.", indice:"Verbe en -er : participe passé en -é."},
            {type:"qcm", q:"« Nous avons ___ » (verbe voir) :", options:["vu","voir","voyu","voyait"], answer:0, explain:"Participe passé de voir : vu.", indice:"« j'ai ... » : vu."},
            {type:"vf", q:"« j'ai mangé » est au passé composé (action terminée).", answer:true, explain:"Oui : auxiliaire avoir + participe passé.", indice:"Deux mots, action finie."}
          ]
        },
        {
          id:"f17", niveau:"4e", title:"L'accord du participe passé",
          carte:{centre:"L'accord du participe passé", branches:[{titre:"Avec être", detail:"accord avec le sujet"},{titre:"Avec avoir", detail:"jamais avec le sujet"},{titre:"COD avant", detail:"accord avec le COD"},{titre:"COD après", detail:"pas d'accord"},{titre:"Exemple", detail:"les pommes qu'elle a mangées"}]},
          cours:"Avec l'auxiliaire <b>être</b>, le participe passé s'accorde avec le <b>sujet</b> (elle est venu<b>e</b>, ils sont venu<b>s</b>). " +
                "Avec l'auxiliaire <b>avoir</b>, le participe passé <b>ne s'accorde jamais avec le sujet</b> : il s'accorde avec le <b>COD</b> (complément d'objet direct) <b>seulement si ce COD est placé avant</b> le verbe (les pommes qu'elle a mangé<b>es</b>). Si le COD est après, pas d'accord (elle a mangé des pommes).",
          questions:[
            {type:"qcm", q:"Avec l'auxiliaire « être », le participe passé s'accorde avec :", options:["le sujet","le COD","rien","l'auxiliaire"], answer:0, explain:"Avec être, accord avec le sujet.", indice:"elle est venue, ils sont venus."},
            {type:"qcm", q:"« Elles sont ___ » (partir) :", options:["parties","parti","partis","partie"], answer:0, explain:"Sujet féminin pluriel : parties.", indice:"« elles » : féminin pluriel."},
            {type:"qcm", q:"« Les garçons sont ___ » (venir) :", options:["venus","venu","venue","venues"], answer:0, explain:"Sujet masculin pluriel : venus.", indice:"« les garçons » : masculin pluriel."},
            {type:"qcm", q:"Avec l'auxiliaire « avoir », accorde-t-on le participe passé avec le sujet ?", options:["non, jamais avec le sujet","oui, toujours","seulement au féminin","seulement au pluriel"], answer:0, explain:"Avec avoir, jamais d'accord avec le sujet.", indice:"L'accord se fait avec le COD, pas le sujet."},
            {type:"qcm", q:"« Elle a ___ une pomme. » (manger, COD après le verbe)", options:["mangé","mangée","mangées","mangés"], answer:0, explain:"COD « une pomme » placé après : pas d'accord, mangé.", indice:"Le COD est après le verbe : pas d'accord."},
            {type:"qcm", q:"« Les pommes qu'elle a ___ » (manger, COD avant le verbe)", options:["mangées","mangé","mangée","mangés"], answer:0, explain:"COD « pommes » (fém. pluriel) placé avant : mangées.", indice:"Le COD est avant : on accorde avec lui."},
            {type:"vf", q:"Avec « avoir », on accorde le participe passé avec le COD seulement s'il est placé avant le verbe.", answer:true, explain:"Oui : c'est la règle clé de l'accord avec avoir.", indice:"COD avant = accord ; COD après = pas d'accord."},
            {type:"qcm", q:"« Ils ont ___ un film. » (regarder, COD après)", options:["regardé","regardés","regardée","regardées"], answer:0, explain:"COD « un film » après le verbe : pas d'accord, regardé.", indice:"Avec avoir + COD après : pas d'accord."},
            {type:"qcm", q:"« La lettre que j'ai ___ » (écrire, COD avant) :", options:["écrite","écrit","écrits","écrites"], answer:0, explain:"COD « lettre » (fém. sing.) avant : écrite.", indice:"COD féminin singulier placé avant."},
            {type:"vf", q:"« Elle est tombée » : le participe passé s'accorde avec le sujet (auxiliaire être).", answer:true, explain:"Oui : sujet féminin singulier, tombée.", indice:"Avec être, accord avec le sujet."},
            {type:"qcm", q:"« Nous sommes ___ » (arriver) :", options:["arrivés","arrivé","arrivée","arrivées"], answer:0, explain:"Sujet « nous » (masculin ou mixte pluriel) : arrivés.", indice:"« nous » pluriel : -s."},
            {type:"vf", q:"Avec « avoir » et un COD placé après le verbe, le participe passé ne s'accorde pas.", answer:true, explain:"Oui : pas de COD avant, donc pas d'accord.", indice:"COD après le verbe : participe invariable."}
          ]
        },
        {
          id:"f18", niveau:"4e", title:"Le conditionnel présent",
          carte:{centre:"Le conditionnel présent", branches:[{titre:"Souhait, politesse", detail:"je voudrais..."},{titre:"Condition", detail:"si j'avais le temps, je viendrais"},{titre:"Formation", detail:"radical du futur + terminaisons d'imparfait"},{titre:"Terminaisons", detail:"-ais, -ais, -ait, -ions, -iez, -aient"},{titre:"Ne pas confondre", detail:"je serai (futur) / je serais"}]},
          cours:"Le <b>conditionnel présent</b> exprime un <b>souhait</b>, une <b>demande polie</b> ou une action soumise à une <b>condition</b> (Si j'avais le temps, je viendrais). " +
                "Il se forme avec le <b>radical du futur</b> + les <b>terminaisons de l'imparfait</b> : <b>-ais, -ais, -ait, -ions, -iez, -aient</b>. " +
                "Attention : « je mangerai » (sans s) est le <b>futur</b> ; « je mangerais » (avec s) est le <b>conditionnel</b>.",
          questions:[
            {type:"qcm", q:"Le conditionnel présent sert souvent à exprimer :", options:["un souhait, une politesse ou une condition","un ordre direct","une action terminée","une date"], answer:0, explain:"Souhait, politesse, hypothèse : c'est le conditionnel.", indice:"« Je voudrais... » est plus poli que « je veux »."},
            {type:"qcm", q:"Les terminaisons du conditionnel présent sont :", options:["-ais, -ais, -ait, -ions, -iez, -aient","-ai, -as, -a, -ons, -ez, -ont","-e, -es, -e, -ons, -ez, -ent","-s, -s, -t, -ons, -ez, -ent"], answer:0, explain:"Ce sont les terminaisons de l'imparfait, sur le radical du futur.", indice:"Mêmes terminaisons que l'imparfait."},
            {type:"qcm", q:"« Je ___ (aimer) un café, s'il vous plaît. » (politesse)", options:["aimerais","aimerai","aime","aimais"], answer:0, explain:"Conditionnel de politesse : aimerais.", indice:"Avec « s » : conditionnel."},
            {type:"vf", q:"Le conditionnel se forme avec le radical du futur et les terminaisons de l'imparfait.", answer:true, explain:"Oui : radical du futur + terminaisons de l'imparfait.", indice:"Futur (radical) + imparfait (terminaisons)."},
            {type:"qcm", q:"« Si j'avais le temps, je ___ (venir). »", options:["viendrais","viendrai","viens","venais"], answer:0, explain:"Hypothèse : conditionnel, viendrais.", indice:"Action soumise à condition : conditionnel."},
            {type:"qcm", q:"« je mangerai » est au futur ; « je mangerais » est au :", options:["conditionnel","présent","imparfait","passé composé"], answer:0, explain:"Le « s » final fait passer au conditionnel.", indice:"Avec « s » : conditionnel."},
            {type:"qcm", q:"« Tu ___ (être) gentil de m'aider. » (politesse)", options:["serais","seras","es","étais"], answer:0, explain:"Conditionnel de politesse : serais.", indice:"Demande polie : conditionnel."},
            {type:"saisie", q:"Conjugue « avoir » au conditionnel présent, 3e personne du singulier : « il ___ ».", answer:["aurait"], explain:"il aurait.", indice:"Radical « aur » + terminaison « -ait »."},
            {type:"qcm", q:"« Nous ___ (aller) volontiers. » (conditionnel)", options:["irions","irons","allions","allons"], answer:0, explain:"Conditionnel de aller, nous : irions.", indice:"Radical « ir » + « -ions »."},
            {type:"vf", q:"« Pourriez-vous m'aider ? » : le conditionnel rend la demande plus polie.", answer:true, explain:"Oui : c'est un usage très courant du conditionnel.", indice:"Plus doux que « Pouvez-vous »."},
            {type:"qcm", q:"« Ils ___ (faire) un voyage s'ils pouvaient. »", options:["feraient","feront","font","faisaient"], answer:0, explain:"Conditionnel de faire, ils : feraient.", indice:"Radical « fer » + « -aient »."},
            {type:"qcm", q:"Le futur donne « je serai » ; le conditionnel donne « je ___ ».", options:["serais","serai","suis","étais"], answer:0, explain:"Conditionnel : serais (avec s).", indice:"Ajoute un « s » au futur."}
          ]
        },
        {
          id:"f19", niveau:"4e", title:"Le subjonctif présent",
          carte:{centre:"Le subjonctif présent", branches:[{titre:"Souhait, doute, obligation", detail:"il faut que, je veux que"},{titre:"Introduit par « que »", detail:"presque toujours"},{titre:"Terminaisons", detail:"-e, -es, -e, -ions, -iez, -ent"},{titre:"Verbes utiles", detail:"que je sois, que j'aie, que je fasse"},{titre:"Repère", detail:"que je sois (subjonctif) / je suis (présent)"}]},
          cours:"Le <b>subjonctif présent</b> exprime un <b>souhait</b>, une <b>obligation</b> ou un <b>doute</b>. Il est presque toujours introduit par <b>« que »</b> (il faut que, je veux que, bien que, pour que). Terminaisons fréquentes : <b>-e, -es, -e, -ions, -iez, -ent</b>. À connaître : que je <b>sois</b> (être), que j'<b>aie</b> (avoir), que je <b>fasse</b> (faire), que j'<b>aille</b> (aller).",
          questions:[
            {type:"qcm", q:"Le subjonctif s'emploie souvent après :", options:["« il faut que », « je veux que »","« et », « ou »","« hier »","« très »"], answer:0, explain:"Ces expressions entraînent le subjonctif.", indice:"Pense à l'obligation : « il faut que »."},
            {type:"qcm", q:"« Il faut que tu ___ (finir) tes devoirs. »", options:["finisses","finis","finiras","finissais"], answer:0, explain:"Subjonctif : que tu finisses.", indice:"Après « il faut que », on emploie le subjonctif."},
            {type:"qcm", q:"« Je veux que tu ___ (être) à l'heure. »", options:["sois","es","seras","étais"], answer:0, explain:"Subjonctif de être : que tu sois.", indice:"que tu sois."},
            {type:"qcm", q:"Terminaisons fréquentes du subjonctif présent :", options:["-e, -es, -e, -ions, -iez, -ent","-ai, -as, -a, -ons, -ez, -ont","-ais, -ais, -ait, -ions, -iez, -aient","-s, -s, -t, -ons, -ez, -ent"], answer:0, explain:"Ce sont les terminaisons du subjonctif présent.", indice:"Elles ressemblent au présent pour je/tu/il."},
            {type:"saisie", q:"Subjonctif de « avoir » : « que j'___ ».", answer:["aie","que j'aie"], explain:"que j'aie.", indice:"À ne pas confondre avec « j'ai » (présent)."},
            {type:"qcm", q:"« Bien qu'il ___ (faire) froid, il sort. »", options:["fasse","fait","fera","faisait"], answer:0, explain:"Subjonctif de faire : qu'il fasse.", indice:"Après « bien que », subjonctif."},
            {type:"qcm", q:"« Pour que nous ___ (aller) plus vite. »", options:["allions","allons","irons","irions"], answer:0, explain:"Subjonctif de aller, nous : allions.", indice:"Après « pour que », subjonctif."},
            {type:"vf", q:"Le subjonctif exprime souvent un souhait, une obligation ou un doute.", answer:true, explain:"Oui : il marque l'incertitude ou la volonté.", indice:"Ce n'est pas un fait certain et réalisé."},
            {type:"qcm", q:"« Il faut que vous ___ (venir). »", options:["veniez","venez","viendrez","venait"], answer:0, explain:"Subjonctif de venir, vous : veniez.", indice:"Après « il faut que », subjonctif."},
            {type:"qcm", q:"Le subjonctif est presque toujours introduit par :", options:["« que »","« et »","« ou »","« mais »"], answer:0, explain:"On le rencontre après « que ».", indice:"Cherche le petit mot juste avant le verbe."},
            {type:"saisie", q:"Subjonctif de « être » : « que je ___ ».", answer:["sois","que je sois"], explain:"que je sois.", indice:"Pas « je suis » (présent)."},
            {type:"vf", q:"« que je sois » est au subjonctif ; « je suis » est au présent de l'indicatif.", answer:true, explain:"Oui : le subjonctif suit « que », l'indicatif énonce un fait.", indice:"L'un exprime un souhait, l'autre un fait."}
          ]
        },
        {
          id:"f20", niveau:"5e", title:"Les compléments : COD et COI",
          carte:{centre:"COD et COI", branches:[{titre:"COD", detail:"complète le verbe sans préposition"},{titre:"Question COD", detail:"« qui ? » ou « quoi ? »"},{titre:"COI", detail:"avec une préposition (à, de)"},{titre:"Question COI", detail:"« à qui ? », « de quoi ? »"},{titre:"Exemples", detail:"mange une pomme (COD) / parle à Léo (COI)"}]},
          cours:"Le <b>COD</b> (complément d'objet direct) complète le verbe <b>directement</b>, sans préposition : on le trouve avec « <b>qui ?</b> » ou « <b>quoi ?</b> » après le verbe (Il mange <b>une pomme</b>). Le <b>COI</b> (complément d'objet indirect) est relié au verbe par une <b>préposition</b> (à, de) : on le trouve avec « <b>à qui ?</b> », « <b>de quoi ?</b> » (Il parle <b>à son ami</b>).",
          questions:[
            {type:"qcm", q:"Le COD complète le verbe :", options:["directement, sans préposition","avec « à » ou « de »","avec un adjectif","jamais"], answer:0, explain:"Le COD suit le verbe sans préposition.", indice:"« direct » : pas de petit mot avant."},
            {type:"qcm", q:"Pour trouver le COD, on pose la question :", options:["« qui ? » ou « quoi ? » après le verbe","« où ? »","« quand ? »","« comment ? »"], answer:0, explain:"COD : qui ? ou quoi ?", indice:"Il mange quoi ?"},
            {type:"qcm", q:"Dans « Il mange une pomme », le COD est :", options:["une pomme","il","mange","ne"], answer:0, explain:"Il mange quoi ? une pomme : COD.", indice:"Pose la question « quoi ? »."},
            {type:"qcm", q:"Le COI est relié au verbe par :", options:["une préposition (à, de)","rien","un adjectif","un point"], answer:0, explain:"COI : avec une préposition.", indice:"« indirect » : un petit mot relie au verbe."},
            {type:"qcm", q:"Dans « Il parle à son ami », « à son ami » est :", options:["un COI","un COD","un sujet","un adjectif"], answer:0, explain:"Il parle à qui ? à son ami : COI.", indice:"Il y a la préposition « à »."},
            {type:"qcm", q:"Pour trouver le COI, on pose :", options:["« à qui ? », « de quoi ? »","« quoi ? » seulement","« où ? »","« combien ? »"], answer:0, explain:"COI : à qui ? de quoi ?", indice:"La question contient une préposition."},
            {type:"qcm", q:"Dans « Léa écrit une lettre », le COD est :", options:["une lettre","Léa","écrit","ne"], answer:0, explain:"Léa écrit quoi ? une lettre : COD.", indice:"Écrit quoi ?"},
            {type:"vf", q:"Le COD se trouve juste après le verbe, sans préposition.", answer:true, explain:"Oui : il complète directement le verbe.", indice:"Pas de « à » ni « de » devant."},
            {type:"qcm", q:"Dans « Je pense à mes vacances », « à mes vacances » est :", options:["un COI","un COD","un sujet","un verbe"], answer:0, explain:"Je pense à quoi ? à mes vacances : COI.", indice:"Préposition « à »."},
            {type:"qcm", q:"« Il regarde la télévision. » Le COD est :", options:["la télévision","il","regarde","la"], answer:0, explain:"Il regarde quoi ? la télévision : COD.", indice:"Regarde quoi ?"},
            {type:"vf", q:"Un COI est introduit par une préposition comme « à » ou « de ».", answer:true, explain:"Oui : c'est ce qui le rend « indirect ».", indice:"Cherche « à » ou « de »."},
            {type:"qcm", q:"« Elle téléphone à sa mère. » « à sa mère » est :", options:["un COI","un COD","un sujet","un adjectif"], answer:0, explain:"Elle téléphone à qui ? à sa mère : COI.", indice:"Préposition « à »."}
          ]
        },
        {
          id:"f21", niveau:"6e", title:"Synonymes, antonymes et familles de mots",
          carte:{centre:"Synonymes, antonymes, familles", branches:[{titre:"Synonyme", detail:"sens proche (content / heureux)"},{titre:"Antonyme", detail:"sens contraire (grand / petit)"},{titre:"Famille de mots", detail:"même radical (dent, dentiste)"},{titre:"Préfixe", detail:"avant le radical (re-faire)"},{titre:"Suffixe", detail:"après le radical (dent-aire)"}]},
          cours:"Un <b>synonyme</b> est un mot de <b>sens proche</b> (content / heureux). Un <b>antonyme</b> (contraire) a un <b>sens opposé</b> (grand / petit). Une <b>famille de mots</b> regroupe des mots formés sur un même <b>radical</b> (dent, dentiste, dentaire). Le <b>préfixe</b> se place <b>avant</b> le radical, le <b>suffixe</b> <b>après</b>.",
          questions:[
            {type:"qcm", q:"Un synonyme est un mot :", options:["de sens proche","de sens contraire","qui se prononce pareil","qui s'écrit pareil"], answer:0, explain:"Synonyme = sens voisin.", indice:"Proche, pas identique ni contraire."},
            {type:"qcm", q:"Un synonyme de « content » est :", options:["heureux","triste","fatigué","petit"], answer:0, explain:"« heureux » est proche de « content ».", indice:"Une émotion positive."},
            {type:"qcm", q:"Un antonyme (contraire) de « grand » est :", options:["petit","immense","géant","haut"], answer:0, explain:"Le contraire de grand est petit.", indice:"Cherche l'opposé."},
            {type:"qcm", q:"Un antonyme de « chaud » est :", options:["froid","tiède","brûlant","doux"], answer:0, explain:"Le contraire de chaud est froid.", indice:"L'opposé sur la température."},
            {type:"qcm", q:"Des mots d'une même famille partagent :", options:["un même radical","une même couleur","le même nombre de lettres","rien"], answer:0, explain:"Ils sont bâtis sur un même radical.", indice:"La partie commune du mot."},
            {type:"qcm", q:"« dent, dentiste, dentaire » forment :", options:["une famille de mots","une phrase","une rime","une strophe"], answer:0, explain:"Même radical « dent » : une famille.", indice:"Ils tournent autour de « dent »."},
            {type:"qcm", q:"Le préfixe se place :", options:["avant le radical","après le radical","à la toute fin","au hasard"], answer:0, explain:"Le préfixe précède le radical.", indice:"« pré » veut dire avant."},
            {type:"qcm", q:"Le suffixe se place :", options:["après le radical","avant le radical","devant le mot","jamais"], answer:0, explain:"Le suffixe suit le radical.", indice:"À la fin du mot."},
            {type:"vf", q:"« rapide » et « lent » sont des antonymes (contraires).", answer:true, explain:"Oui : ils ont des sens opposés.", indice:"Vitesse opposée."},
            {type:"qcm", q:"Un synonyme de « beau » est :", options:["joli","laid","méchant","lourd"], answer:0, explain:"« joli » est proche de « beau ».", indice:"Sens positif et proche."},
            {type:"vf", q:"Les synonymes ont un sens proche, les antonymes un sens opposé.", answer:true, explain:"Oui : c'est la différence entre les deux.", indice:"Proche / opposé."},
            {type:"qcm", q:"Dans « refaire », « re- » est :", options:["un préfixe","un suffixe","un radical","une terminaison"], answer:0, explain:"« re- » placé avant le radical est un préfixe.", indice:"Il est devant « faire »."}
          ]
        },
        {
          id:"f22", niveau:"4e", title:"La poésie et la versification",
          carte:{centre:"Poésie et versification", branches:[{titre:"Le vers", detail:"une ligne du poème"},{titre:"La strophe", detail:"un groupe de vers"},{titre:"La rime", detail:"sons identiques en fin de vers"},{titre:"L'alexandrin", detail:"un vers de 12 syllabes"},{titre:"Les strophes", detail:"distique 2, tercet 3, quatrain 4"}]},
          cours:"Un poème est fait de <b>vers</b> (les lignes) regroupés en <b>strophes</b>. La <b>rime</b> est la répétition de <b>sons identiques</b> à la fin des vers. On compte les <b>syllabes</b> d'un vers : l'<b>alexandrin</b> en a <b>12</b>. Selon le nombre de vers, une strophe est un <b>distique</b> (2), un <b>tercet</b> (3) ou un <b>quatrain</b> (4).",
          questions:[
            {type:"qcm", q:"Une ligne d'un poème s'appelle :", options:["un vers","une strophe","une rime","une syllabe"], answer:0, explain:"Chaque ligne est un vers.", indice:"Le « v » de vers."},
            {type:"qcm", q:"Un groupe de vers s'appelle :", options:["une strophe","un vers","une rime","une lettre"], answer:0, explain:"Un groupe de vers forme une strophe.", indice:"Comme un « paragraphe » du poème."},
            {type:"qcm", q:"La rime, ce sont :", options:["des sons qui se répètent à la fin des vers","des dessins","des images","des couleurs"], answer:0, explain:"Sons identiques en fin de vers.", indice:"Écoute la fin des vers."},
            {type:"qcm", q:"Un vers de 12 syllabes s'appelle :", options:["un alexandrin","un quatrain","un tercet","un sonnet"], answer:0, explain:"12 syllabes : un alexandrin.", indice:"Le plus célèbre des vers."},
            {type:"qcm", q:"Une strophe de 4 vers s'appelle :", options:["un quatrain","un tercet","un distique","un vers"], answer:0, explain:"4 vers : un quatrain.", indice:"« quatre » comme quatrain."},
            {type:"qcm", q:"Une strophe de 3 vers s'appelle :", options:["un tercet","un quatrain","un distique","un alexandrin"], answer:0, explain:"3 vers : un tercet.", indice:"« ter » rappelle trois."},
            {type:"vf", q:"On compte les syllabes d'un vers pour le mesurer.", answer:true, explain:"Oui : le nombre de syllabes donne la mesure du vers.", indice:"Compte les sons-voyelles."},
            {type:"qcm", q:"Deux vers qui riment se terminent par :", options:["des sons identiques","des lettres différentes","le même mot","des chiffres"], answer:0, explain:"Mêmes sons finaux : ils riment.", indice:"Le son de la fin se répond."},
            {type:"qcm", q:"Un poème est souvent organisé en :", options:["vers et strophes","chapitres","actes","paragraphes seulement"], answer:0, explain:"Vers regroupés en strophes.", indice:"Lignes et groupes de lignes."},
            {type:"vf", q:"L'alexandrin compte 12 syllabes.", answer:true, explain:"Oui : 12 syllabes.", indice:"Une douzaine."},
            {type:"qcm", q:"« beauté » et « bonté » :", options:["riment","ne riment pas","sont synonymes","sont contraires"], answer:0, explain:"Même son final « -té » : elles riment.", indice:"Écoute la fin des deux mots."},
            {type:"qcm", q:"Une strophe de 2 vers s'appelle :", options:["un distique","un quatrain","un tercet","un sonnet"], answer:0, explain:"2 vers : un distique.", indice:"« di » rappelle deux."}
          ]
        },
        {
          id:"f23", niveau:"5e", title:"Le théâtre",
          carte:{centre:"Le théâtre", branches:[{titre:"Pour être joué", detail:"sur une scène"},{titre:"La réplique", detail:"ce que dit un personnage"},{titre:"Les didascalies", detail:"indications de mise en scène"},{titre:"Acte et scène", detail:"les grandes parties"},{titre:"Comédie / tragédie", detail:"faire rire / finir mal"}]},
          cours:"Le <b>théâtre</b> est un texte écrit pour être <b>joué sur scène</b>. Ce que dit un personnage est une <b>réplique</b> ; un échange de répliques forme un <b>dialogue</b>. Les <b>didascalies</b> sont les indications de mise en scène (gestes, décor), <b>non dites</b> par les acteurs. Une pièce se divise en <b>actes</b> puis en <b>scènes</b>. La <b>comédie</b> fait rire, la <b>tragédie</b> finit souvent mal.",
          questions:[
            {type:"qcm", q:"Le théâtre est un texte fait pour :", options:["être joué sur scène","être lu en silence seulement","être chanté","être dessiné"], answer:0, explain:"Le théâtre est destiné à la représentation.", indice:"Des acteurs sur une scène."},
            {type:"qcm", q:"Ce que dit un personnage s'appelle :", options:["une réplique","une strophe","un vers","une rime"], answer:0, explain:"Chaque prise de parole est une réplique.", indice:"Mot propre au théâtre."},
            {type:"qcm", q:"Les indications de mise en scène (gestes, décor) sont :", options:["les didascalies","les répliques","les actes","les rimes"], answer:0, explain:"Ce sont les didascalies.", indice:"Souvent en italique, non dites."},
            {type:"qcm", q:"Un échange de répliques entre personnages est :", options:["un dialogue","un monologue seul","une strophe","une rime"], answer:0, explain:"C'est un dialogue.", indice:"Plusieurs personnages se répondent."},
            {type:"qcm", q:"Une grande partie d'une pièce s'appelle :", options:["un acte","un chapitre","une strophe","un couplet"], answer:0, explain:"Une pièce se divise en actes.", indice:"Mot du théâtre, pas du roman."},
            {type:"qcm", q:"Une pièce qui fait rire est :", options:["une comédie","une tragédie","un roman","un poème"], answer:0, explain:"La comédie cherche à faire rire.", indice:"« comique »."},
            {type:"qcm", q:"Une pièce au dénouement malheureux est :", options:["une tragédie","une comédie","une fable","une chanson"], answer:0, explain:"La tragédie finit souvent mal.", indice:"Le contraire de la comédie."},
            {type:"vf", q:"Les didascalies ne sont pas dites par les acteurs.", answer:true, explain:"Oui : elles guident la mise en scène.", indice:"Ce sont des consignes, pas des paroles."},
            {type:"qcm", q:"Les subdivisions d'un acte sont :", options:["les scènes","les vers","les strophes","les rimes"], answer:0, explain:"Un acte se divise en scènes.", indice:"Plus petites parties d'un acte."},
            {type:"vf", q:"Au théâtre, l'histoire avance surtout grâce aux dialogues.", answer:true, explain:"Oui : les personnages parlent et agissent.", indice:"Peu de narrateur."},
            {type:"qcm", q:"Le texte de théâtre est surtout fait de :", options:["dialogues","longues descriptions","poèmes","recettes"], answer:0, explain:"Le dialogue domine.", indice:"Des personnages qui se parlent."},
            {type:"vf", q:"La comédie cherche à faire rire, la tragédie émeut et finit souvent mal.", answer:true, explain:"Oui : ce sont deux grands genres opposés.", indice:"Rire / émotion grave."}
          ]
        },
        {
          id:"f24", niveau:"6e", title:"Les niveaux de langue",
          carte:{centre:"Les niveaux de langue", branches:[{titre:"Familier", detail:"entre amis, relâché (bouffer)"},{titre:"Courant", detail:"correct, tous les jours (manger)"},{titre:"Soutenu", detail:"soigné, littéraire (se restaurer)"},{titre:"S'adapter", detail:"selon la situation et la personne"}]},
          cours:"On distingue trois <b>niveaux de langue</b>. Le <b>familier</b> s'emploie entre amis, de façon relâchée (bouffer, bagnole). Le <b>courant</b> est correct et s'utilise tous les jours (manger, voiture). Le <b>soutenu</b> est soigné, souvent littéraire (se restaurer, automobile). On <b>adapte</b> son niveau de langue à la <b>situation</b> et à la <b>personne</b>.",
          questions:[
            {type:"qcm", q:"Le langage utilisé entre amis, de façon relâchée, est :", options:["le langage familier","le langage soutenu","le langage scientifique","le langage courant"], answer:0, explain:"Entre amis : registre familier.", indice:"Le plus décontracté."},
            {type:"qcm", q:"Le langage de tous les jours, correct, est :", options:["le langage courant","le langage familier","le langage soutenu","le langage poétique"], answer:0, explain:"Usage quotidien correct : courant.", indice:"Ni relâché ni très soigné."},
            {type:"qcm", q:"Le langage le plus soigné (littéraire) est :", options:["le langage soutenu","le langage familier","le langage courant","le langage parlé"], answer:0, explain:"Le registre soutenu est le plus soigné.", indice:"Celui de la belle littérature."},
            {type:"qcm", q:"« bouffer » appartient au registre :", options:["familier","courant","soutenu","scientifique"], answer:0, explain:"« bouffer » est familier.", indice:"On ne l'écrit pas dans une rédaction."},
            {type:"qcm", q:"« manger » appartient au registre :", options:["courant","familier","soutenu","ancien"], answer:0, explain:"« manger » est courant.", indice:"Le mot normal, de tous les jours."},
            {type:"qcm", q:"« se restaurer » appartient au registre :", options:["soutenu","familier","courant","argotique"], answer:0, explain:"« se restaurer » est soutenu.", indice:"Plus recherché que « manger »."},
            {type:"vf", q:"On adapte son niveau de langue à la situation et à la personne.", answer:true, explain:"Oui : on ne parle pas pareil avec un ami et un adulte qu'on respecte.", indice:"La situation guide le registre."},
            {type:"qcm", q:"À l'écrit scolaire, on utilise plutôt le langage :", options:["courant ou soutenu","familier","argotique","relâché"], answer:0, explain:"On évite le familier dans les écrits scolaires.", indice:"Un registre correct."},
            {type:"qcm", q:"« bagnole » est un mot :", options:["familier","courant","soutenu","savant"], answer:0, explain:"« bagnole » est familier (pour « voiture »).", indice:"Mot relâché."},
            {type:"vf", q:"Le langage soutenu se rencontre souvent dans la littérature.", answer:true, explain:"Oui : romans, poésie, textes soignés.", indice:"Là où la langue est travaillée."},
            {type:"qcm", q:"Avec un professeur, on évite le langage :", options:["familier","courant","soutenu","poli"], answer:0, explain:"On reste correct : pas de familier.", indice:"Le registre relâché est à éviter."},
            {type:"vf", q:"« voiture » est du langage courant, « bagnole » du langage familier.", answer:true, explain:"Oui : même sens, registres différents.", indice:"Deux mots pour la même chose."}
          ]
        },
        {
          id:"f25", niveau:"4e", title:"Le schéma narratif",
          carte:{centre:"Le schéma narratif", branches:[{titre:"1. Situation initiale", detail:"le début, l'équilibre"},{titre:"2. Élément perturbateur", detail:"déclenche l'histoire"},{titre:"3. Péripéties", detail:"les actions, les aventures"},{titre:"4. Dénouement", detail:"la résolution du problème"},{titre:"5. Situation finale", detail:"le nouvel équilibre"}]},
          cours:"Le <b>schéma narratif</b> décrit les <b>cinq étapes</b> d'un récit : la <b>situation initiale</b> (le début), l'<b>élément perturbateur</b> (l'événement qui lance l'histoire), les <b>péripéties</b> (les actions et aventures), le <b>dénouement</b> (la résolution du problème) et la <b>situation finale</b> (le nouvel équilibre).",
          questions:[
            {type:"qcm", q:"Le schéma narratif décrit :", options:["les étapes d'un récit","les rimes d'un poème","les personnages d'un théâtre","la grammaire d'une phrase"], answer:0, explain:"Ce sont les étapes d'une histoire.", indice:"« narratif » vient de « raconter »."},
            {type:"qcm", q:"La 1re étape est :", options:["la situation initiale","le dénouement","les péripéties","la situation finale"], answer:0, explain:"On commence par la situation initiale.", indice:"Le tout début de l'histoire."},
            {type:"qcm", q:"L'événement qui lance l'histoire est :", options:["l'élément perturbateur","la situation finale","le dénouement","le décor"], answer:0, explain:"L'élément perturbateur déclenche l'action.", indice:"Ce qui rompt l'équilibre du début."},
            {type:"qcm", q:"Les actions et aventures sont :", options:["les péripéties","la situation initiale","le titre","la morale"], answer:0, explain:"Les péripéties forment le coeur du récit.", indice:"Le milieu mouvementé de l'histoire."},
            {type:"qcm", q:"La fin des problèmes est :", options:["le dénouement","l'élément perturbateur","la situation initiale","le prologue"], answer:0, explain:"Le dénouement résout l'intrigue.", indice:"« dénouer » = défaire le noeud."},
            {type:"qcm", q:"La dernière étape est :", options:["la situation finale","les péripéties","l'élément perturbateur","la situation initiale"], answer:0, explain:"On termine par la situation finale.", indice:"Le nouvel équilibre, à la fin."},
            {type:"vf", q:"Le schéma narratif comporte cinq étapes.", answer:true, explain:"Oui : de la situation initiale à la situation finale.", indice:"Compte-les : 1, 2, 3, 4, 5."},
            {type:"qcm", q:"« Il était une fois une princesse heureuse » correspond à :", options:["la situation initiale","le dénouement","les péripéties","la situation finale"], answer:0, explain:"C'est le début, l'équilibre de départ.", indice:"« Il était une fois » ouvre le récit."},
            {type:"qcm", q:"« Un dragon enleva la princesse » correspond à :", options:["l'élément perturbateur","la situation finale","le dénouement","la situation initiale"], answer:0, explain:"Cet événement déclenche l'histoire.", indice:"Quelque chose vient troubler le calme."},
            {type:"vf", q:"Les péripéties se situent au milieu du récit.", answer:true, explain:"Oui : entre l'élément perturbateur et le dénouement.", indice:"Le coeur de l'action."},
            {type:"qcm", q:"L'ordre correct est :", options:["situation initiale, élément perturbateur, péripéties, dénouement, situation finale","péripéties, dénouement, situation initiale...","dénouement, péripéties, début...","situation finale, péripéties, début..."], answer:0, explain:"C'est l'ordre des cinq étapes.", indice:"On part de l'équilibre et on y revient."},
            {type:"vf", q:"Le dénouement résout le problème posé par l'élément perturbateur.", answer:true, explain:"Oui : il dénoue l'intrigue.", indice:"La solution répond au problème de départ."}
          ]
        }
      ]
    },
    {
      id:"histgeo", name:"Histoire-Géo & EMC", region:"Le Donjon du Temps", icon:"🏰", color:"#f2c14e",
      lessons:[
        {
          id:"h8", niveau:"6e", title:"L'Antiquité : l'Égypte ancienne",
          carte:{centre:"L'Égypte ancienne", branches:[{titre:"L'Antiquité", detail:"débute avec l'écriture (~3300 av. J.-C.)"},{titre:"Hiéroglyphes", detail:"l'écriture égyptienne"},{titre:"Le pharaon", detail:"le roi d'Égypte"},{titre:"Les pyramides", detail:"tombeaux des pharaons"},{titre:"Le Nil", detail:"fleuve nourricier"}]},
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
          carte:{centre:"La Grèce antique", branches:[{titre:"Cités-États", detail:"Athènes, Sparte"},{titre:"Démocratie", detail:"née à Athènes"},{titre:"Dieux grecs", detail:"Zeus, Athéna (polythéisme)"},{titre:"Jeux Olympiques", detail:"en l'honneur des dieux"},{titre:"Héritage", detail:"théâtre, philosophie"}]},
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
          id:"h1", niveau:"5e", title:"Le Moyen Âge : la féodalité",
          carte:{centre:"Le Moyen Âge : la féodalité", branches:[{titre:"Seigneurs et vassaux", detail:"liens d'homme à homme"},{titre:"Le fief", detail:"terre confiée au vassal"},{titre:"Les paysans", detail:"travaillent la terre du seigneur"},{titre:"Le château fort", detail:"protège et domine"},{titre:"L'Église", detail:"très présente"}]},
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
          id:"h2", niveau:"5e", title:"Naissance et expansion de l'islam",
          carte:{centre:"Naissance de l'islam", branches:[{titre:"VIIe siècle", detail:"en Arabie"},{titre:"Hégire 622", detail:"début du calendrier musulman"},{titre:"Le Coran", detail:"le livre sacré"},{titre:"Expansion", detail:"un vaste empire"},{titre:"Civilisation", detail:"sciences, villes, commerce"}]},
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
          id:"h3", niveau:"5e", title:"Géo : richesse et pauvreté dans le monde",
          carte:{centre:"Richesse et pauvreté dans le monde", branches:[{titre:"Inégalités", detail:"pays riches et pays pauvres"},{titre:"L'IDH", detail:"mesure le développement"},{titre:"Indicateurs", detail:"santé, éducation, revenu"},{titre:"Contrastes", detail:"même au sein d'un pays"}]},
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
          id:"h4", niveau:"5e", title:"EMC : respect et lutte contre le harcèlement",
          carte:{centre:"Respect et lutte contre le harcèlement", branches:[{titre:"Le respect", detail:"de chacun et des différences"},{titre:"Le harcèlement", detail:"des violences répétées"},{titre:"En parler", detail:"à un adulte de confiance"},{titre:"Le témoin", detail:"peut aider, ne pas rire"},{titre:"Des aides", detail:"numéros d'écoute"}]},
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
          carte:{centre:"Lumières et Révolution française", branches:[{titre:"Les Lumières", detail:"XVIIIe : raison et liberté"},{titre:"1789", detail:"début de la Révolution"},{titre:"14 juillet 1789", detail:"prise de la Bastille"},{titre:"Droits de l'homme", detail:"déclaration de 1789"},{titre:"Fin", detail:"de la monarchie absolue"}]},
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
          carte:{centre:"Traite négrière et esclavage", branches:[{titre:"Commerce triangulaire", detail:"Europe, Afrique, Amérique"},{titre:"L'esclavage", detail:"des millions de déportés"},{titre:"Conditions", detail:"très dures, dans les plantations"},{titre:"Abolition", detail:"en France en 1848"}]},
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
          carte:{centre:"L'urbanisation du monde", branches:[{titre:"Urbanisation", detail:"de plus en plus de citadins"},{titre:"Les métropoles", detail:"très grandes villes"},{titre:"Exode rural", detail:"de la campagne vers la ville"},{titre:"Des défis", detail:"transport, logement, pollution"}]},
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
          carte:{centre:"Première Guerre mondiale", branches:[{titre:"1914 à 1918", detail:"armistice le 11 novembre 1918"},{titre:"Guerre de tranchées", detail:"Verdun en 1916"},{titre:"Guerre totale", detail:"soldats, civils et économie mobilisés"},{titre:"Les camps", detail:"Triple Entente contre Empires centraux"},{titre:"Bilan", detail:"des millions de morts"}]},
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
             explain:"Le 11 novembre 1918 (d'où le jour férié de commémoration)."},
            {type:"qcm", q:"Les soldats combattaient souvent depuis des :",
             options:["tranchées","châteaux forts","pyramides","gratte-ciels"], answer:0,
             explain:"La guerre des tranchées caractérise ce conflit."},
            {type:"vf", q:"La bataille de Verdun (1916) est une bataille très meurtrière de la Première Guerre mondiale.", answer:true,
             explain:"Verdun (1916) est l'une des batailles les plus meurtrières de 14-18."}
          ]
        },
        {
          id:"h11", niveau:"3e", title:"La Seconde Guerre mondiale (1939-1945)",
          carte:{centre:"Seconde Guerre mondiale", branches:[{titre:"1939 à 1945", detail:"capitulation le 8 mai 1945"},{titre:"Appel du 18 juin 1940", detail:"de Gaulle, la Résistance"},{titre:"La Shoah", detail:"génocide des Juifs"},{titre:"Guerre mondiale", detail:"Europe, Asie, Pacifique"},{titre:"Fin", detail:"défaite de l'Allemagne nazie"}]},
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
          carte:{centre:"Ve République et laïcité", branches:[{titre:"Ve République", detail:"depuis 1958"},{titre:"Le président", detail:"élu, quinquennat depuis 2002"},{titre:"La laïcité", detail:"loi de 1905"},{titre:"Séparation", detail:"État et religions séparés"},{titre:"Liberté", detail:"de conscience pour tous"}]},
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
        },
        {
          id:"h13", niveau:"6e", title:"La Préhistoire",
          carte:{centre:"La Préhistoire", branches:[{titre:"Avant l'écriture", detail:"la plus longue période"},{titre:"Paléolithique", detail:"chasseurs-cueilleurs nomades"},{titre:"Le feu", detail:"maîtrisé par les humains"},{titre:"Néolithique", detail:"agriculture et élevage"},{titre:"Sédentarisation", detail:"premiers villages"}]},
          cours:"La <b>Préhistoire</b> est la très longue période qui va de l'apparition des premiers humains jusqu'à l'invention de l'<b>écriture</b> (vers 3300 av. J.-C.). " +
                "Au <b>Paléolithique</b> (âge de la pierre <b>taillée</b>), les humains sont <b>nomades</b> : ils vivent de la <b>chasse</b>, de la pêche et de la <b>cueillette</b>, et maîtrisent le <b>feu</b>. " +
                "Au <b>Néolithique</b> (âge de la pierre <b>polie</b>), une grande nouveauté apparaît : l'<b>agriculture</b> et l'<b>élevage</b>. Les humains se <b>sédentarisent</b> et fondent les premiers villages.",
          questions:[
            {type:"qcm", q:"La Préhistoire se termine avec l'invention de :", options:["l'écriture","l'imprimerie","la voiture","Internet"], answer:0, explain:"L'invention de l'écriture (vers 3300 av. J.-C.) marque la fin de la Préhistoire.", indice:"C'est ce qui permet de noter et de transmettre les mots."},
            {type:"saisie", q:"Comment appelle-t-on la longue période AVANT l'écriture ?", answer:["la Préhistoire","Préhistoire","prehistoire","la prehistoire"], explain:"C'est la Préhistoire.", indice:"Le préfixe « pré » veut dire « avant »."},
            {type:"qcm", q:"« Paléolithique » signifie l'âge de la pierre :", options:["taillée","polie","précieuse","fondue"], answer:0, explain:"Paléolithique = âge de la pierre taillée (outils éclatés).", indice:"C'est la pierre travaillée en la cassant, pas en la lissant."},
            {type:"qcm", q:"« Néolithique » signifie l'âge de la pierre :", options:["polie","taillée","brûlée","peinte"], answer:0, explain:"Néolithique = âge de la pierre polie (outils lissés).", indice:"C'est l'inverse de « taillée » : la pierre est lissée."},
            {type:"qcm", q:"Au Paléolithique, les humains se nourrissent surtout grâce à :", options:["la chasse et la cueillette","les supermarchés","l'agriculture","l'élevage"], answer:0, explain:"Ils chassent, pêchent et cueillent : ils ne produisent pas encore leur nourriture.", indice:"Ils prennent ce que la nature offre, sans cultiver."},
            {type:"vf", q:"Au Paléolithique, les humains sont nomades : ils se déplacent souvent.", answer:true, explain:"Oui : ils suivent le gibier et les saisons.", indice:"« Nomade » veut dire qui n'a pas d'habitation fixe."},
            {type:"qcm", q:"La grande nouveauté du Néolithique est l'apparition de :", options:["l'agriculture et l'élevage","l'électricité","l'écriture","l'imprimerie"], answer:0, explain:"C'est la « révolution néolithique » : on cultive et on élève des animaux.", indice:"Cela permet de produire soi-même sa nourriture."},
            {type:"vf", q:"Au Néolithique, les humains se sédentarisent et fondent les premiers villages.", answer:true, explain:"Oui : en cultivant, ils restent au même endroit.", indice:"« Sédentaire » est le contraire de « nomade »."},
            {type:"qcm", q:"Les peintures de la grotte de Lascaux datent de la :", options:["Préhistoire","Antiquité","Moyen Âge","époque moderne"], answer:0, explain:"Lascaux (Dordogne) est un art pariétal du Paléolithique, donc préhistorique.", indice:"C'est très ancien, bien avant l'écriture."},
            {type:"vf", q:"Les hommes préhistoriques savaient maîtriser le feu.", answer:true, explain:"Oui : le feu sert à se chauffer, cuire et se protéger.", indice:"Pense aux foyers retrouvés par les archéologues."},
            {type:"qcm", q:"L'espèce humaine actuelle (Homo sapiens) est apparue d'abord en :", options:["Afrique","Europe","Amérique","Australie"], answer:0, explain:"Homo sapiens apparaît en Afrique, puis migre vers les autres continents.", indice:"C'est le continent où l'on a trouvé les plus anciens fossiles."},
            {type:"vf", q:"L'agriculture permet de produire sa nourriture au lieu de seulement la chasser ou la cueillir.", answer:true, explain:"Oui : c'est tout l'intérêt de cultiver et d'élever.", indice:"Produire soi-même plutôt que prélever dans la nature."},
            {type:"qcm", q:"Les premiers outils du Paléolithique sont surtout en :", options:["pierre, os et bois","fer","plastique","or"], answer:0, explain:"On taille la pierre, on utilise os et bois ; les métaux viennent plus tard.", indice:"Quels matériaux trouve-t-on directement dans la nature ?"},
            {type:"vf", q:"La poterie (récipients en terre cuite) se développe au Néolithique.", answer:true, explain:"Oui : avec la vie sédentaire, on fabrique des poteries pour stocker.", indice:"On en a besoin quand on reste au même endroit pour conserver les récoltes."},
            {type:"saisie", q:"Quelle grande période commence APRÈS la Préhistoire, avec l'écriture ?", answer:["l'Antiquité","Antiquité","antiquite","l'antiquite"], explain:"Après la Préhistoire vient l'Antiquité.", indice:"C'est l'époque de l'Égypte des pharaons et de Rome."}
          ]
        },
        {
          id:"h14", niveau:"6e", title:"La Mésopotamie et la naissance de l'écriture",
          carte:{centre:"Mésopotamie et écriture", branches:[{titre:"Mésopotamie", detail:"entre le Tigre et l'Euphrate"},{titre:"~3300 av. J.-C.", detail:"naissance de l'écriture"},{titre:"Cunéiforme", detail:"signes tracés dans l'argile"},{titre:"Premières cités", detail:"villes et temples"},{titre:"Début de l'Histoire", detail:"marqué par l'écriture"}]},
          cours:"Vers 3300 av. J.-C., en <b>Mésopotamie</b> (mot qui signifie « entre deux fleuves », le <b>Tigre</b> et l'<b>Euphrate</b>, dans l'actuel Irak), les <b>Sumériens</b> inventent l'<b>écriture</b>. " +
                "C'est l'écriture <b>cunéiforme</b> (en forme de coins), tracée avec un roseau sur des <b>tablettes d'argile</b>. " +
                "Elle sert d'abord à <b>compter</b> et à noter les échanges. Son invention marque le début de l'<b>Histoire</b>.",
          questions:[
            {type:"saisie", q:"Vers quelle année (av. J.-C.) l'écriture est-elle inventée ?", answer:["3300","-3300","3300 av. J.-C.","vers 3300"], explain:"L'écriture apparaît en Mésopotamie vers 3300 av. J.-C.", indice:"Il y a plus de 5000 ans."},
            {type:"qcm", q:"La Mésopotamie se trouve entre deux fleuves :", options:["le Tigre et l'Euphrate","le Nil et le Rhône","la Seine et la Loire","le Gange et l'Indus"], answer:0, explain:"« Mésopotamie » veut dire « entre deux fleuves » : le Tigre et l'Euphrate.", indice:"Ces fleuves coulent dans l'actuel Irak."},
            {type:"qcm", q:"La première écriture s'appelle l'écriture :", options:["cunéiforme","alphabétique","numérique","secrète"], answer:0, explain:"L'écriture des Sumériens est dite cunéiforme (en forme de coins).", indice:"Son nom vient du latin « cuneus » : le coin."},
            {type:"qcm", q:"Sur quoi écrivait-on en Mésopotamie ?", options:["des tablettes d'argile","des feuilles de papier","des écrans","des plaques de métal"], answer:0, explain:"On gravait l'argile humide avec un roseau (calame), puis on la laissait sécher.", indice:"C'est une matière molle que l'on trouve près des fleuves."},
            {type:"vf", q:"L'invention de l'écriture marque le début de l'Histoire.", answer:true, explain:"Oui : avant l'écriture, c'est la Préhistoire.", indice:"« Histoire » et « écriture » sont liées : on peut enfin lire des traces écrites."},
            {type:"qcm", q:"Quel peuple a fondé les premières grandes cités (Ur, Uruk) ?", options:["les Sumériens","les Gaulois","les Vikings","les Aztèques"], answer:0, explain:"Les Sumériens fondent les premières cités-États de Mésopotamie.", indice:"Leur nom ressemble à la région de « Sumer »."},
            {type:"vf", q:"La Mésopotamie correspond en partie à l'Irak actuel.", answer:true, explain:"Oui : c'est au Proche-Orient, autour du Tigre et de l'Euphrate.", indice:"Pense à la carte du Proche-Orient aujourd'hui."},
            {type:"qcm", q:"À quoi servait d'abord l'écriture ?", options:["à compter et noter les échanges","à écrire des romans","à envoyer des messages","à faire de la publicité"], answer:0, explain:"Les premières tablettes sont surtout des comptes (quantités de grain, d'animaux).", indice:"Pense au commerce et aux stocks à gérer."},
            {type:"qcm", q:"Le mot « Mésopotamie » signifie :", options:["entre deux fleuves","pays du soleil","terre du milieu","grande plaine"], answer:0, explain:"Du grec « mésos » (au milieu) et « potamos » (fleuve).", indice:"Regarde la composition du mot : « méso » et « potam »."},
            {type:"qcm", q:"Le Code de Hammurabi est :", options:["un des plus anciens recueils de lois","une carte du monde","un livre de cuisine","un calendrier"], answer:0, explain:"Vers 1750 av. J.-C., le roi Hammurabi de Babylone fait graver un recueil de lois.", indice:"Il s'agit de règles écrites pour la société."},
            {type:"saisie", q:"Comment appelle-t-on le grand temple mésopotamien en forme de pyramide à étages ?", answer:["ziggourat","une ziggourat","ziggurat","la ziggourat"], explain:"C'est la ziggourat, un temple à étages.", indice:"Le mot commence par « zig »."},
            {type:"vf", q:"On écrivait le cunéiforme avec un roseau taillé appelé calame.", answer:true, explain:"Oui : le calame imprimait des signes en forme de coins dans l'argile.", indice:"C'est un outil végétal, pas un stylo moderne."},
            {type:"qcm", q:"L'écriture cunéiforme est faite de signes en forme de :", options:["coins (clous)","ronds","fleurs","animaux"], answer:0, explain:"Les signes ressemblent à de petits coins ou clous.", indice:"« Cunéiforme » contient l'idée de « coin »."},
            {type:"vf", q:"En Égypte, à la même époque, on utilisait une autre écriture : les hiéroglyphes.", answer:true, explain:"Oui : les hiéroglyphes égyptiens sont une autre écriture ancienne.", indice:"Pense aux dessins gravés sur les temples égyptiens."},
            {type:"qcm", q:"La Mésopotamie se situe :", options:["au Proche-Orient","en Amérique","en Australie","au pôle Nord"], answer:0, explain:"C'est au Proche-Orient, autour du Tigre et de l'Euphrate.", indice:"C'est près de l'actuel Irak."}
          ]
        },
        {
          id:"h15", niveau:"6e", title:"Rome : de la République à l'Empire",
          carte:{centre:"Rome dans l'Antiquité", branches:[{titre:"753 av. J.-C.", detail:"fondation (légende)"},{titre:"Trois régimes", detail:"royauté, République, Empire"},{titre:"La République", detail:"dès 509 av. J.-C."},{titre:"L'Empire", detail:"Auguste, 27 av. J.-C."},{titre:"Un vaste empire", detail:"autour de la Méditerranée"}]},
          cours:"D'après la légende, <b>Rome</b> est fondée en <b>753 av. J.-C.</b> par <b>Romulus</b> (les jumeaux Romulus et Remus auraient été élevés par une <b>louve</b>). " +
                "En <b>509 av. J.-C.</b>, Rome devient une <b>République</b>, dirigée par le <b>Sénat</b> et des <b>consuls</b>. Le général <b>Jules César</b> conquiert la <b>Gaule</b>. " +
                "En <b>27 av. J.-C.</b>, <b>Auguste</b> devient le <b>premier empereur</b> : c'est le début de l'<b>Empire romain</b>, qui s'étend autour de la mer Méditerranée. La langue des Romains est le <b>latin</b>.",
          questions:[
            {type:"saisie", q:"Selon la légende, en quelle année (av. J.-C.) Rome est-elle fondée ?", answer:["753","-753","753 av. J.-C."], explain:"La fondation légendaire de Rome est datée de 753 av. J.-C.", indice:"C'est au VIIIᵉ siècle av. J.-C."},
            {type:"qcm", q:"D'après la légende, Rome a été fondée par :", options:["Romulus","Jules César","Auguste","Napoléon"], answer:0, explain:"Romulus, l'un des deux jumeaux, est le fondateur légendaire.", indice:"Son nom ressemble beaucoup à « Rome »."},
            {type:"qcm", q:"Dans la légende, les jumeaux Romulus et Remus sont élevés par :", options:["une louve","un aigle","un ours","un cheval"], answer:0, explain:"La louve qui allaite les jumeaux est un symbole de Rome.", indice:"C'est un animal sauvage qui hurle à la lune."},
            {type:"saisie", q:"En quelle année (av. J.-C.) commence la République romaine ?", answer:["509","-509","509 av. J.-C."], explain:"La République est instaurée en 509 av. J.-C., après la royauté.", indice:"C'est à la fin du VIᵉ siècle av. J.-C."},
            {type:"qcm", q:"Sous la République, Rome est dirigée notamment par :", options:["le Sénat et des consuls","un pharaon","un calife","un roi unique"], answer:0, explain:"Le Sénat et les magistrats (consuls) gouvernent la République.", indice:"Ce n'est pas un seul chef, mais une assemblée et des élus."},
            {type:"qcm", q:"Quel général romain a conquis la Gaule ?", options:["Jules César","Charlemagne","Vercingétorix","Clovis"], answer:0, explain:"Jules César conquiert la Gaule (guerre des Gaules).", indice:"Il a aussi donné son nom au mois de juillet (Iulius)."},
            {type:"qcm", q:"En 52 av. J.-C., César bat le chef gaulois Vercingétorix à :", options:["Alésia","Gergovie","Carthage","Marathon"], answer:0, explain:"La reddition de Vercingétorix a lieu à Alésia en 52 av. J.-C.", indice:"Le nom du lieu commence par « Alé »."},
            {type:"qcm", q:"Qui devient le premier empereur romain en 27 av. J.-C. ?", options:["Auguste","Jules César","Néron","Romulus"], answer:0, explain:"Octave, devenu Auguste, est le premier empereur en 27 av. J.-C.", indice:"Un mois de l'année (le 8ᵉ) porte son nom."},
            {type:"vf", q:"Jules César a été le tout premier empereur de Rome.", answer:false, explain:"Non : César était général et dictateur ; le premier empereur est Auguste (27 av. J.-C.).", indice:"Méfie-toi : César est célèbre, mais l'Empire commence après lui."},
            {type:"qcm", q:"La langue des Romains était :", options:["le latin","le grec","le gaulois","l'arabe"], answer:0, explain:"Le latin est la langue de Rome ; il a donné le français.", indice:"Le français en est une « langue fille »."},
            {type:"vf", q:"L'Empire romain s'étendait autour de la mer Méditerranée.", answer:true, explain:"Oui : la Méditerranée était surnommée « Mare Nostrum » (notre mer).", indice:"Pense à une mer entourée par l'Empire."},
            {type:"qcm", q:"La diffusion du mode de vie romain (villes, routes, latin) s'appelle :", options:["la romanisation","la mondialisation","la colonisation grecque","la féodalité"], answer:0, explain:"La romanisation diffuse la culture romaine dans tout l'Empire.", indice:"Le mot contient « Rome »."},
            {type:"qcm", q:"Le christianisme apparaît :", options:["dans l'Empire romain, au Iᵉ siècle","à la Préhistoire","au Moyen Âge","au XXᵉ siècle"], answer:0, explain:"Le christianisme naît au Iᵉ siècle en Judée, alors province romaine.", indice:"C'est à l'époque de l'Empire, pas avant Rome."},
            {type:"vf", q:"Le Colisée est un grand amphithéâtre construit par les Romains.", answer:true, explain:"Oui : on y donnait des combats de gladiateurs et des spectacles.", indice:"C'est un monument célèbre encore visible à Rome."},
            {type:"qcm", q:"Dans l'ordre, Rome a d'abord été une royauté, puis :", options:["une République, puis un Empire","un Empire, puis une République","une démocratie grecque","une colonie égyptienne"], answer:0, explain:"Royauté (753 av. J.-C.), puis République (509), puis Empire (27 av. J.-C.).", indice:"La République vient avant l'Empire d'Auguste."}
          ]
        },
        {
          id:"h16", niveau:"4e", title:"Le XIXᵉ siècle : industrialisation et colonisation",
          carte:{centre:"XIXᵉ : industrie et colonies", branches:[{titre:"Machine à vapeur", detail:"usines et chemin de fer"},{titre:"Charbon", detail:"l'énergie de l'industrie"},{titre:"Nouvelles classes", detail:"bourgeoisie et ouvriers"},{titre:"Exode rural", detail:"de la campagne vers la ville"},{titre:"Colonisation", detail:"empires en Afrique et en Asie"}]},
          cours:"Au <b>XIXᵉ siècle</b>, la <b>révolution industrielle</b> transforme l'Europe : la <b>machine à vapeur</b> (améliorée par James Watt) et le <b>charbon</b> font tourner les <b>usines</b> et les premiers <b>chemins de fer</b>. " +
                "De nouvelles classes apparaissent : la <b>bourgeoisie</b> (patrons) et les <b>ouvriers</b> (le prolétariat), aux conditions de travail dures. Beaucoup de paysans partent en ville (l'<b>exode rural</b>). " +
                "Les puissances européennes conquièrent des <b>colonies</b> en Afrique et en Asie : elles forment des <b>empires coloniaux</b>.",
          questions:[
            {type:"qcm", q:"La révolution industrielle se développe surtout grâce à :", options:["la machine à vapeur","l'ordinateur","l'imprimerie","la boussole"], answer:0, explain:"La machine à vapeur fait fonctionner usines et trains au XIXᵉ siècle.", indice:"C'est une machine qui utilise la vapeur d'eau."},
            {type:"qcm", q:"Quelle source d'énergie est très utilisée dans l'industrie au XIXᵉ siècle ?", options:["le charbon","le solaire","l'éolien","le nucléaire"], answer:0, explain:"Le charbon alimente les machines à vapeur.", indice:"C'est une roche noire que l'on brûle."},
            {type:"qcm", q:"Le grand nouveau moyen de transport du XIXᵉ siècle est :", options:["le chemin de fer (train)","l'avion","la voiture électrique","la fusée"], answer:0, explain:"Le train, tiré par des locomotives à vapeur, se développe.", indice:"Il roule sur des rails."},
            {type:"vf", q:"Au XIXᵉ siècle, beaucoup de paysans quittent la campagne pour travailler en ville (exode rural).", answer:true, explain:"Oui : on appelle cela l'exode rural.", indice:"Ils vont chercher du travail dans les usines."},
            {type:"qcm", q:"Les ouvriers d'usine forment une nouvelle classe sociale appelée :", options:["le prolétariat","la noblesse","le clergé","la chevalerie"], answer:0, explain:"Les ouvriers forment le prolétariat.", indice:"Ce mot désigne ceux qui travaillent à l'usine contre un salaire."},
            {type:"qcm", q:"Les patrons d'usine et les commerçants riches forment :", options:["la bourgeoisie","la paysannerie","le clergé","l'armée"], answer:0, explain:"La bourgeoisie regroupe les patrons et grands commerçants.", indice:"C'est la classe aisée qui possède les usines."},
            {type:"vf", q:"Au XIXᵉ siècle, les conditions de travail à l'usine étaient souvent dures (longues journées, travail des enfants).", answer:true, explain:"Oui : journées très longues, salaires faibles, travail des enfants.", indice:"Les protections des travailleurs n'existaient presque pas."},
            {type:"qcm", q:"La colonisation au XIXᵉ siècle, c'est :", options:["la conquête de territoires (colonies) par les puissances européennes","la construction d'usines","la fin des rois","l'invention de l'écriture"], answer:0, explain:"Les Européens dominent et exploitent des territoires lointains.", indice:"Pense à des pays pris et dominés par l'Europe."},
            {type:"qcm", q:"Sur quels continents les Européens ont-ils surtout des colonies au XIXᵉ siècle ?", options:["l'Afrique et l'Asie","l'Antarctique","l'Europe seulement","l'Amérique du Nord seulement"], answer:0, explain:"Les empires coloniaux s'étendent surtout en Afrique et en Asie.", indice:"Deux grands continents au sud et à l'est."},
            {type:"saisie", q:"Quel inventeur est associé à l'amélioration de la machine à vapeur ? (nom de famille)", answer:["Watt","James Watt"], explain:"James Watt a perfectionné la machine à vapeur (l'unité « watt » porte son nom).", indice:"Une unité de puissance porte son nom."},
            {type:"vf", q:"La machine à vapeur a permis de faire fonctionner des usines et des trains.", answer:true, explain:"Oui : c'est le moteur de la révolution industrielle.", indice:"Usines + locomotives."},
            {type:"qcm", q:"L'ensemble des colonies d'un pays forme :", options:["un empire colonial","une république","une usine","une cathédrale"], answer:0, explain:"On parle d'empire colonial.", indice:"Un « empire » fait de colonies."}
          ]
        },
        {
          id:"h17", niveau:"3e", title:"Les régimes totalitaires des années 1930",
          carte:{centre:"Les totalitarismes", branches:[{titre:"Parti unique", detail:"un seul parti autorisé"},{titre:"Chef tout-puissant", detail:"culte du chef"},{titre:"Propagande et terreur", detail:"police politique"},{titre:"URSS / Italie / Allemagne", detail:"Staline, Mussolini, Hitler"},{titre:"Pas de libertés", detail:"ni presse, ni opposition"}]},
          cours:"Dans l'<b>entre-deux-guerres</b> (années 1920-1930) naissent des <b>régimes totalitaires</b> : l'<b>URSS</b> de <b>Staline</b> (communisme), l'<b>Italie</b> de <b>Mussolini</b> (fascisme), l'<b>Allemagne</b> d'<b>Hitler</b> (nazisme). Points communs : <b>parti unique</b>, <b>chef</b> tout-puissant (culte du chef), <b>propagande</b>, <b>police politique</b> et <b>terreur</b>, aucune liberté. Le nazisme y ajoute le <b>racisme</b> et l'<b>antisémitisme</b>.",
          questions:[
            {type:"qcm", q:"Un régime totalitaire est dirigé par :", options:["un parti unique et un chef tout-puissant","un parlement élu","plusieurs partis libres","un roi conseillé"], answer:0, explain:"Parti unique et chef tout-puissant caractérisent le totalitarisme.", indice:"Un seul parti, un seul chef."},
            {type:"qcm", q:"En URSS, le dictateur des années 1930 est :", options:["Staline","Churchill","de Gaulle","Roosevelt"], answer:0, explain:"Staline dirige l'URSS communiste.", indice:"Son nom commence par S."},
            {type:"qcm", q:"En Allemagne, le régime nazi est dirigé par :", options:["Hitler","Mussolini","Lénine","Franco"], answer:0, explain:"Hitler dirige l'Allemagne nazie.", indice:"Chef du parti nazi."},
            {type:"qcm", q:"En Italie, le fascisme est dirigé par :", options:["Mussolini","Hitler","Staline","Pétain"], answer:0, explain:"Mussolini dirige l'Italie fasciste.", indice:"On le surnommait « le Duce »."},
            {type:"vf", q:"Dans un régime totalitaire, il n'y a pas de liberté d'expression.", answer:true, explain:"Oui : la presse est contrôlée, l'opposition interdite.", indice:"L'État contrôle tout."},
            {type:"qcm", q:"Un outil clé des totalitarismes pour contrôler les esprits est :", options:["la propagande","le vote libre","la presse libre","le tourisme"], answer:0, explain:"La propagande diffuse partout le message du régime.", indice:"Affiches, radio, défilés au service du chef."},
            {type:"qcm", q:"Le nazisme repose notamment sur :", options:["le racisme et l'antisémitisme","la liberté de la presse","la démocratie","le respect des minorités"], answer:0, explain:"Le nazisme est fondé sur le racisme et l'antisémitisme.", indice:"Une idéologie de haine envers certains groupes."},
            {type:"vf", q:"Les régimes totalitaires utilisent une police politique et la terreur.", answer:true, explain:"Oui : pour faire taire toute opposition.", indice:"On surveille et on réprime la population."},
            {type:"qcm", q:"Le régime de Staline en URSS est de type :", options:["communiste","fasciste","démocratique","royaliste"], answer:0, explain:"L'URSS est un régime communiste.", indice:"Idéologie de l'URSS."},
            {type:"vf", q:"Dans un État totalitaire, un seul parti est autorisé.", answer:true, explain:"Oui : c'est le parti unique.", indice:"Pas de pluralisme politique."},
            {type:"qcm", q:"Le « culte du chef » signifie que :", options:["le chef est admiré et présenté comme infaillible","le chef est élu chaque année","le chef partage le pouvoir","le chef reste inconnu"], answer:0, explain:"Le chef est glorifié par la propagande.", indice:"On l'admire comme s'il ne se trompait jamais."},
            {type:"vf", q:"Les totalitarismes se développent surtout dans l'entre-deux-guerres.", answer:true, explain:"Oui : années 1920-1930.", indice:"Entre les deux guerres mondiales."}
          ]
        },
        {
          id:"h18", niveau:"3e", title:"La guerre froide",
          carte:{centre:"La guerre froide", branches:[{titre:"États-Unis / URSS", detail:"deux blocs ennemis"},{titre:"Capitalisme / communisme", detail:"deux modèles opposés"},{titre:"« froide »", detail:"pas d'affrontement direct"},{titre:"Mur de Berlin", detail:"symbole, tombe en 1989"},{titre:"Fin", detail:"URSS disparaît en 1991"}]},
          cours:"Après <b>1945</b>, le monde se divise en deux <b>blocs</b> ennemis : les <b>États-Unis</b> (bloc de l'Ouest, <b>capitaliste</b>) et l'<b>URSS</b> (bloc de l'Est, <b>communiste</b>). C'est la <b>guerre froide</b> : pas d'affrontement militaire direct entre eux, mais tensions, course aux armements et espionnage. Symbole de la division : le <b>mur de Berlin</b> (tombe en <b>1989</b>). L'<b>URSS</b> disparaît en <b>1991</b>.",
          questions:[
            {type:"qcm", q:"La guerre froide oppose :", options:["les États-Unis et l'URSS","la France et l'Allemagne","Rome et la Grèce","la Chine et le Japon"], answer:0, explain:"Deux superpuissances : USA et URSS.", indice:"Deux blocs après 1945."},
            {type:"qcm", q:"Le bloc de l'Ouest, mené par les USA, est :", options:["capitaliste","communiste","fasciste","royaliste"], answer:0, explain:"Modèle capitaliste à l'Ouest.", indice:"Économie de marché."},
            {type:"qcm", q:"Le bloc de l'Est, mené par l'URSS, est :", options:["communiste","capitaliste","démocratique libéral","monarchiste"], answer:0, explain:"Modèle communiste à l'Est.", indice:"Idéologie de l'URSS."},
            {type:"qcm", q:"On l'appelle guerre « froide » car :", options:["il n'y a pas d'affrontement militaire direct entre les deux","il fait très froid","elle a lieu au pôle Nord","elle dure peu"], answer:0, explain:"Les deux blocs ne se combattent pas directement.", indice:"Tension forte, mais pas de bataille entre eux."},
            {type:"qcm", q:"Le symbole de la division est :", options:["le mur de Berlin","la tour Eiffel","le Colisée","la Grande Muraille"], answer:0, explain:"Le mur de Berlin sépare la ville et les blocs.", indice:"Un mur dans une ville allemande."},
            {type:"saisie", q:"En quelle année le mur de Berlin tombe-t-il ?", answer:["1989"], explain:"Le mur tombe en 1989.", indice:"Fin des années 1980."},
            {type:"vf", q:"Pendant la guerre froide, les deux blocs se livrent une course aux armements.", answer:true, explain:"Oui : chacun veut être le plus puissant.", indice:"Ils fabriquent toujours plus d'armes."},
            {type:"qcm", q:"La guerre froide commence environ :", options:["après 1945","en 1789","au Moyen Âge","en 2001"], answer:0, explain:"Elle débute après la Seconde Guerre mondiale.", indice:"Juste après 1945."},
            {type:"qcm", q:"L'URSS disparaît en :", options:["1991","1945","1968","2001"], answer:0, explain:"L'URSS est dissoute en 1991.", indice:"Début des années 1990."},
            {type:"vf", q:"Berlin et l'Allemagne ont été divisées pendant la guerre froide.", answer:true, explain:"Oui : entre l'Ouest et l'Est.", indice:"Pense au mur de Berlin."},
            {type:"qcm", q:"La guerre froide oppose deux modèles :", options:["capitaliste et communiste","royaliste et impérial","antique et moderne","rural et urbain"], answer:0, explain:"Capitalisme contre communisme.", indice:"Deux façons d'organiser l'économie et la société."},
            {type:"vf", q:"La chute du mur de Berlin (1989) marque la fin de la guerre froide.", answer:true, explain:"Oui : elle annonce la fin de la division.", indice:"1989 : un tournant."}
          ]
        },
        {
          id:"h19", niveau:"3e", title:"La construction européenne",
          carte:{centre:"La construction européenne", branches:[{titre:"Après 1945", detail:"s'unir pour la paix"},{titre:"CEE 1957", detail:"traité de Rome"},{titre:"Maastricht 1992", detail:"naissance de l'UE"},{titre:"L'euro", detail:"monnaie commune (2002)"},{titre:"27 pays", detail:"après le Brexit"}]},
          cours:"Après <b>1945</b>, des pays européens choisissent de s'unir pour la <b>paix</b> et la coopération. La <b>CEE</b> naît en <b>1957</b> (traité de Rome) ; le traité de <b>Maastricht</b> (<b>1992</b>) crée l'<b>Union européenne</b>. L'<b>euro</b>, monnaie commune, est mis en circulation en <b>2002</b>. L'UE permet la <b>libre circulation</b> et compte aujourd'hui <b>27 pays</b> (après le départ du Royaume-Uni, le « Brexit »).",
          questions:[
            {type:"qcm", q:"Pourquoi l'Europe se construit-elle après 1945 ?", options:["pour maintenir la paix et coopérer","pour faire la guerre","pour coloniser","pour se diviser"], answer:0, explain:"Après deux guerres, l'union vise la paix.", indice:"Éviter une nouvelle guerre."},
            {type:"qcm", q:"La monnaie commune à de nombreux pays de l'UE est :", options:["l'euro","le dollar","la livre","le yen"], answer:0, explain:"L'euro est la monnaie commune.", indice:"Tu l'utilises tous les jours en France."},
            {type:"saisie", q:"En quelle année l'euro (pièces et billets) a-t-il été mis en circulation ?", answer:["2002"], explain:"L'euro est mis en circulation en 2002.", indice:"Début des années 2000."},
            {type:"qcm", q:"Le traité qui crée l'Union européenne (1992) est le traité de :", options:["Maastricht","Rome","Versailles","Paris"], answer:0, explain:"Le traité de Maastricht (1992) fonde l'UE.", indice:"Une ville des Pays-Bas."},
            {type:"vf", q:"L'UE permet la libre circulation des personnes entre de nombreux pays.", answer:true, explain:"Oui : on circule librement dans l'espace européen.", indice:"On voyage sans frontière entre ces pays."},
            {type:"qcm", q:"Combien de pays compte l'UE aujourd'hui (après le Brexit) ?", options:["27","15","50","12"], answer:0, explain:"L'UE compte 27 pays.", indice:"Un peu moins de 30."},
            {type:"qcm", q:"La construction européenne vise notamment :", options:["la paix et la coopération économique","la conquête de colonies","la fin des échanges","l'isolement"], answer:0, explain:"Paix et coopération économique.", indice:"S'entendre et commercer ensemble."},
            {type:"vf", q:"Le Royaume-Uni a quitté l'Union européenne (le Brexit).", answer:true, explain:"Oui : c'est le Brexit.", indice:"« British exit »."},
            {type:"qcm", q:"L'ancêtre de l'UE, créé en 1957, est :", options:["la CEE (Communauté économique européenne)","l'ONU","l'OTAN","la SDN"], answer:0, explain:"La CEE est créée en 1957 (traité de Rome).", indice:"Une « communauté économique »."},
            {type:"vf", q:"L'euro est utilisé par plusieurs pays de l'Union européenne.", answer:true, explain:"Oui : la zone euro regroupe de nombreux pays.", indice:"Pas seulement la France."},
            {type:"qcm", q:"L'Union européenne est :", options:["une union de pays européens","un pays unique","une ville","une entreprise"], answer:0, explain:"C'est une union d'États européens.", indice:"Plusieurs pays réunis."},
            {type:"vf", q:"L'Union européenne favorise les échanges commerciaux entre ses pays.", answer:true, explain:"Oui : c'est un grand marché commun.", indice:"Le commerce circule plus facilement."}
          ]
        },
        {
          id:"h20", niveau:"3e", title:"La décolonisation",
          carte:{centre:"La décolonisation", branches:[{titre:"Après 1945", detail:"les colonies veulent l'indépendance"},{titre:"Inde 1947", detail:"indépendance du Royaume-Uni"},{titre:"Algérie 1962", detail:"après la guerre d'Algérie"},{titre:"Afrique vers 1960", detail:"de nombreux pays indépendants"},{titre:"Fin", detail:"des empires coloniaux européens"}]},
          cours:"Après <b>1945</b>, les colonies d'<b>Afrique</b> et d'<b>Asie</b> réclament et obtiennent leur <b>indépendance</b> : c'est la <b>décolonisation</b>. L'<b>Inde</b> devient indépendante en <b>1947</b> (du Royaume-Uni) ; l'<b>Algérie</b> en <b>1962</b> (après la guerre d'Algérie contre la France). De nombreux pays d'<b>Afrique</b> deviennent indépendants vers <b>1960</b>. C'est la fin des <b>empires coloniaux</b>.",
          questions:[
            {type:"qcm", q:"La décolonisation, c'est :", options:["l'accès des colonies à l'indépendance","la conquête de nouvelles colonies","une guerre mondiale","la construction de l'Europe"], answer:0, explain:"Les colonies deviennent des États indépendants.", indice:"« dé-colonisation » : l'inverse de coloniser."},
            {type:"qcm", q:"La décolonisation a surtout lieu :", options:["après 1945","au Moyen Âge","avant 1789","en 1914"], answer:0, explain:"Surtout après la Seconde Guerre mondiale.", indice:"Seconde moitié du XXe siècle."},
            {type:"qcm", q:"L'Inde devient indépendante (du Royaume-Uni) en :", options:["1947","1789","1914","2000"], answer:0, explain:"L'Inde est indépendante en 1947.", indice:"Juste après 1945."},
            {type:"saisie", q:"En quelle année l'Algérie devient-elle indépendante ?", answer:["1962"], explain:"L'Algérie devient indépendante en 1962.", indice:"Début des années 1960."},
            {type:"vf", q:"De nombreux pays d'Afrique deviennent indépendants vers 1960.", answer:true, explain:"Oui : 1960 est une grande année d'indépendances africaines.", indice:"Autour de 1960."},
            {type:"qcm", q:"La guerre d'Algérie oppose l'Algérie à :", options:["la France","l'Allemagne","l'Italie","l'Espagne"], answer:0, explain:"L'Algérie était une colonie française.", indice:"Le pays colonisateur."},
            {type:"qcm", q:"Les colonies se trouvaient surtout en :", options:["Afrique et en Asie","Antarctique","Europe seulement","Amérique du Nord seulement"], answer:0, explain:"Surtout en Afrique et en Asie.", indice:"Deux continents du Sud et de l'Est."},
            {type:"vf", q:"Après la décolonisation, de nouveaux États indépendants apparaissent.", answer:true, explain:"Oui : de nombreux nouveaux pays naissent.", indice:"Les anciennes colonies deviennent des pays."},
            {type:"qcm", q:"La décolonisation met fin :", options:["aux empires coloniaux européens","à la Première Guerre mondiale","à la Révolution française","au Moyen Âge"], answer:0, explain:"Les empires coloniaux disparaissent.", indice:"Plus d'empires faits de colonies."},
            {type:"vf", q:"L'indépendance de l'Inde a lieu en 1947.", answer:true, explain:"Oui : 1947.", indice:"Deux ans après 1945."},
            {type:"qcm", q:"Un pays qui obtient son indépendance devient :", options:["un État souverain","une colonie","une région française","une ville"], answer:0, explain:"Il se gouverne lui-même : il est souverain.", indice:"Il décide seul de son destin."},
            {type:"vf", q:"La décolonisation se déroule surtout dans les années 1950-1960.", answer:true, explain:"Oui : ces deux décennies sont décisives.", indice:"Milieu du XXe siècle."}
          ]
        },
        {
          id:"h21", niveau:"4e", title:"La mondialisation et les échanges",
          carte:{centre:"La mondialisation", branches:[{titre:"Définition", detail:"le monde mis en relation"},{titre:"Échanges", detail:"marchandises, infos, personnes"},{titre:"Transports", detail:"porte-conteneurs, avions"},{titre:"Internet", detail:"relie le monde en direct"},{titre:"Inégalités", detail:"elles demeurent"}]},
          cours:"La <b>mondialisation</b> est la mise en <b>relation</b> des différentes parties du monde par les <b>échanges</b> : <b>marchandises</b>, <b>informations</b> et <b>personnes</b>. Les <b>porte-conteneurs</b> et les <b>avions</b> transportent les produits ; <b>Internet</b> relie le monde en direct. De grandes entreprises (<b>multinationales</b>) produisent et vendent partout. Mais des <b>inégalités</b> demeurent entre les pays.",
          questions:[
            {type:"qcm", q:"La mondialisation, c'est :", options:["la mise en relation du monde par les échanges","la fin des échanges","une guerre","une seule ville"], answer:0, explain:"Le monde relié par les échanges.", indice:"« monde » est dans le mot."},
            {type:"qcm", q:"La plupart des marchandises voyagent par :", options:["bateau (porte-conteneurs)","fusée","à pied","train uniquement"], answer:0, explain:"Les porte-conteneurs transportent l'essentiel du commerce.", indice:"De grands navires remplis de boîtes."},
            {type:"qcm", q:"Ce qui relie le monde pour l'information est notamment :", options:["Internet","le télégraphe seul","la diligence","rien"], answer:0, explain:"Internet permet des échanges instantanés.", indice:"Le réseau mondial."},
            {type:"qcm", q:"Les grandes entreprises présentes dans plusieurs pays sont :", options:["des multinationales","des mairies","des écoles","des fermes"], answer:0, explain:"Ce sont des firmes multinationales.", indice:"Présentes dans de nombreux pays."},
            {type:"vf", q:"La mondialisation augmente les échanges entre les pays.", answer:true, explain:"Oui : commerce et communications se multiplient.", indice:"Plus de relations entre pays."},
            {type:"qcm", q:"Le conteneur a surtout facilité :", options:["le transport des marchandises","la cuisine","l'agriculture locale","la lecture"], answer:0, explain:"Le conteneur standardise et accélère le transport.", indice:"Une grande boîte qui passe du bateau au camion."},
            {type:"vf", q:"La mondialisation concerne les marchandises, les informations et les personnes.", answer:true, explain:"Oui : les trois circulent.", indice:"Produits, données et voyageurs."},
            {type:"qcm", q:"Malgré la mondialisation, il existe encore :", options:["des inégalités entre pays","une égalité parfaite","plus aucun commerce","une seule langue obligatoire"], answer:0, explain:"Les richesses restent inégalement réparties.", indice:"Tous les pays ne profitent pas pareil."},
            {type:"qcm", q:"Un produit peut être conçu dans un pays et fabriqué :", options:["dans un autre","nulle part","seulement en France","sur la Lune"], answer:0, explain:"La production est répartie entre plusieurs pays.", indice:"Conception et fabrication peuvent être séparées."},
            {type:"vf", q:"Internet permet d'échanger des informations très vite dans le monde entier.", answer:true, explain:"Oui : en quasi temps réel.", indice:"Communication mondiale rapide."},
            {type:"qcm", q:"Les ports et les aéroports sont :", options:["des lieux d'échanges importants","des musées","des fermes","des écoles"], answer:0, explain:"Ce sont des points clés de la mondialisation.", indice:"Là où arrivent et partent marchandises et voyageurs."},
            {type:"vf", q:"La mondialisation rapproche les différentes régions du monde.", answer:true, explain:"Oui : les distances comptent moins qu'avant.", indice:"Le monde semble plus « petit »."}
          ]
        },
        {
          id:"h22", niveau:"3e", title:"Aménager le territoire français",
          carte:{centre:"Aménager le territoire", branches:[{titre:"But", detail:"organiser l'espace, réduire les inégalités"},{titre:"Acteurs", detail:"État, régions, communes, UE"},{titre:"Transports", detail:"TGV, autoroutes"},{titre:"Métropoles", detail:"attractives et peuplées"},{titre:"Espaces ruraux", detail:"moins peuplés"}]},
          cours:"<b>Aménager le territoire</b>, c'est <b>organiser l'espace</b> pour mieux y vivre et <b>réduire les inégalités</b> entre les régions. De nombreux <b>acteurs</b> y participent : l'<b>État</b>, les <b>régions</b>, les <b>communes</b> et l'<b>Union européenne</b>. Exemples : réseaux de <b>transport</b> (TGV, autoroutes), zones d'activité, équipements. Les <b>métropoles</b> sont très attractives, tandis que les <b>espaces ruraux</b> sont moins peuplés.",
          questions:[
            {type:"qcm", q:"Aménager le territoire, c'est :", options:["organiser l'espace pour mieux y vivre","construire une seule ville","détruire les routes","ignorer les régions"], answer:0, explain:"On organise l'espace au service des habitants.", indice:"Rendre le territoire plus pratique."},
            {type:"qcm", q:"Un but de l'aménagement est de :", options:["réduire les inégalités entre les régions","favoriser une seule région","supprimer les transports","isoler les villages"], answer:0, explain:"On vise un développement plus équilibré.", indice:"Moins de différences entre territoires."},
            {type:"qcm", q:"Le TGV et les autoroutes sont des :", options:["réseaux de transport (aménagements)","monuments anciens","cours d'eau","forêts"], answer:0, explain:"Ce sont des aménagements de transport.", indice:"Pour se déplacer vite."},
            {type:"qcm", q:"Qui participe à l'aménagement du territoire ?", options:["l'État, les régions, les communes","seulement les habitants","seulement les entreprises","personne"], answer:0, explain:"De nombreux acteurs publics interviennent.", indice:"Plusieurs niveaux de décision."},
            {type:"vf", q:"Les métropoles sont des espaces très attractifs et peuplés.", answer:true, explain:"Oui : elles concentrent population et activités.", indice:"Les grandes villes attirent."},
            {type:"qcm", q:"Les espaces ruraux sont souvent :", options:["moins peuplés que les métropoles","plus peuplés que les villes","sans habitants","des îles"], answer:0, explain:"La campagne est moins densément peuplée.", indice:"Moins de monde qu'en ville."},
            {type:"vf", q:"L'Union européenne peut aider à financer des aménagements.", answer:true, explain:"Oui : l'UE soutient certains projets régionaux.", indice:"Un acteur au-dessus de l'État."},
            {type:"qcm", q:"Construire une ligne de TGV est un exemple :", options:["d'aménagement du territoire","de pollution volontaire","de décolonisation","de mondialisation culturelle"], answer:0, explain:"C'est un aménagement de transport.", indice:"On organise l'espace pour relier les villes."},
            {type:"vf", q:"Aménager le territoire vise un développement plus équilibré.", answer:true, explain:"Oui : éviter que certaines régions soient délaissées.", indice:"Plus d'équilibre entre régions."},
            {type:"qcm", q:"Relier les régions par de bons transports permet de :", options:["réduire leur isolement","les couper du reste","augmenter les inégalités","supprimer les villes"], answer:0, explain:"De bons transports désenclavent les régions.", indice:"Moins isolées."},
            {type:"qcm", q:"Une grande ville qui concentre activités et population est :", options:["une métropole","un hameau","un désert","une île déserte"], answer:0, explain:"C'est une métropole.", indice:"Très grande ville attractive."},
            {type:"vf", q:"L'aménagement cherche à mieux répartir les activités et les services.", answer:true, explain:"Oui : pour que chacun y ait accès.", indice:"Répartir plus justement."}
          ]
        },
        {
          id:"h23", niveau:"6e", title:"Les débuts du judaïsme et du christianisme",
          carte:{centre:"Judaïsme et christianisme", branches:[{titre:"Monothéisme", detail:"croire en un seul Dieu"},{titre:"Judaïsme", detail:"un des plus anciens, la Bible hébraïque"},{titre:"Christianisme", detail:"Ier siècle, autour de Jésus"},{titre:"Les Évangiles", detail:"racontent la vie de Jésus"},{titre:"Diffusion", detail:"dans l'Empire romain"}]},
          cours:"Le <b>judaïsme</b> est l'un des plus anciens <b>monothéismes</b> (croyance en un <b>seul Dieu</b>) ; son texte est la <b>Bible hébraïque</b>. Le <b>christianisme</b> naît au <b>Ier siècle</b>, autour de <b>Jésus</b> ; les <b>Évangiles</b> racontent sa vie. Il se diffuse d'abord dans l'<b>Empire romain</b>. Les deux religions sont monothéistes.",
          questions:[
            {type:"qcm", q:"Le judaïsme est une religion :", options:["monothéiste (un seul Dieu)","polythéiste (plusieurs dieux)","sans dieu","de la nature"], answer:0, explain:"C'est un monothéisme.", indice:"« mono » = un seul."},
            {type:"qcm", q:"« Monothéiste » signifie :", options:["croire en un seul Dieu","croire en plusieurs dieux","ne croire en rien","prier le Soleil"], answer:0, explain:"Un seul Dieu.", indice:"« mono » = un."},
            {type:"qcm", q:"Le christianisme naît :", options:["au Ier siècle, autour de Jésus","au Moyen Âge","à la Préhistoire","au XIXe siècle"], answer:0, explain:"Au Ier siècle, autour de Jésus.", indice:"Début de notre ère."},
            {type:"qcm", q:"Les chrétiens croient en :", options:["Jésus-Christ","Zeus","Râ","plusieurs dieux"], answer:0, explain:"Ils croient en Jésus-Christ.", indice:"Le christianisme vient de son nom."},
            {type:"qcm", q:"Les récits de la vie de Jésus sont dans :", options:["les Évangiles","l'Odyssée","le Coran seul","les hiéroglyphes"], answer:0, explain:"Les Évangiles racontent la vie de Jésus.", indice:"Le mot signifie « bonne nouvelle »."},
            {type:"vf", q:"Le judaïsme est l'un des plus anciens monothéismes.", answer:true, explain:"Oui : il est très ancien.", indice:"Avant le christianisme."},
            {type:"qcm", q:"Le christianisme se diffuse d'abord dans :", options:["l'Empire romain","l'Égypte ancienne","la Chine","l'Amérique"], answer:0, explain:"Dans l'Empire romain.", indice:"L'empire de la Méditerranée à cette époque."},
            {type:"vf", q:"Judaïsme et christianisme sont deux religions monothéistes.", answer:true, explain:"Oui : un seul Dieu pour les deux.", indice:"Tous deux « mono »."},
            {type:"qcm", q:"Le livre sacré du judaïsme est :", options:["la Bible hébraïque","l'Iliade","le livre des morts","aucun"], answer:0, explain:"La Bible hébraïque.", indice:"Un texte très ancien."},
            {type:"qcm", q:"Un point commun du judaïsme et du christianisme est :", options:["la croyance en un seul Dieu","l'absence de Dieu","de nombreux dieux","le culte des pharaons"], answer:0, explain:"Tous deux monothéistes.", indice:"Le nombre de dieux."},
            {type:"vf", q:"Le christianisme est né dans la région de la Méditerranée orientale.", answer:true, explain:"Oui, en Judée, au Proche-Orient.", indice:"À l'est de la Méditerranée."},
            {type:"qcm", q:"La Bible des chrétiens comprend l'Ancien Testament et :", options:["le Nouveau Testament","le Coran","les Védas","rien d'autre"], answer:0, explain:"Ancien et Nouveau Testament.", indice:"Deux parties : « ancien » et « nouveau »."}
          ]
        }
      ]
    },
    {
      id:"sciences", name:"Sciences (PC · SVT · Techno)", region:"Le Laboratoire Alchimique", icon:"⚗️", color:"#6fdc8c",
      lessons:[
        {
          id:"s7", niveau:"6e", title:"Vivant ou non-vivant ?",
          carte:{centre:"Vivant ou non-vivant ?", branches:[{titre:"Le vivant", detail:"naît, grandit, se reproduit, meurt"},{titre:"Ses besoins", detail:"se nourrir, respirer"},{titre:"Le non-vivant", detail:"roche, eau, objet"},{titre:"Classer", detail:"selon des critères"}]},
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
          carte:{centre:"La Terre et le système solaire", branches:[{titre:"Le Soleil", detail:"une étoile, au centre"},{titre:"Huit planètes", detail:"dont la Terre"},{titre:"Rotation", detail:"la Terre tourne (jour et nuit)"},{titre:"Révolution", detail:"autour du Soleil en un an"},{titre:"La Lune", detail:"satellite de la Terre"}]},
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
          id:"s1", niveau:"5e", title:"Physique-Chimie : les états de la matière",
          carte:{centre:"Les états de la matière", branches:[{titre:"Trois états", detail:"solide, liquide, gaz"},{titre:"L'eau", detail:"gèle à 0 °C, bout à 100 °C"},{titre:"Fusion / solidification", detail:"solide et liquide"},{titre:"Vaporisation", detail:"liquide vers gaz"},{titre:"Même matière", detail:"l'eau reste H₂O"}]},
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
          id:"s2", niveau:"5e", title:"Physique : les circuits électriques",
          carte:{centre:"Les circuits électriques", branches:[{titre:"Circuit fermé", detail:"pour que le courant passe"},{titre:"En série", detail:"un seul chemin"},{titre:"En dérivation", detail:"plusieurs chemins"},{titre:"Composants", detail:"pile, lampe, interrupteur"},{titre:"Court-circuit", detail:"à éviter"}]},
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
          id:"s3", niveau:"5e", title:"SVT : le corps humain et la digestion",
          carte:{centre:"Le corps humain et la digestion", branches:[{titre:"Le trajet", detail:"bouche, œsophage, estomac, intestin"},{titre:"Mâcher", detail:"découpe les aliments"},{titre:"Digestion", detail:"transforme en nutriments"},{titre:"Absorption", detail:"par l'intestin grêle"},{titre:"Énergie", detail:"les nutriments nourrissent le corps"}]},
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
          carte:{centre:"Atomes et molécules", branches:[{titre:"L'atome", detail:"la plus petite brique"},{titre:"La molécule", detail:"des atomes assemblés"},{titre:"L'eau", detail:"H₂O : 2 H et 1 O"},{titre:"Symboles", detail:"H, O, C..."},{titre:"La matière", detail:"tout est fait d'atomes"}]},
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
          carte:{centre:"La lumière", branches:[{titre:"Sources", detail:"Soleil, lampe, flamme"},{titre:"Propagation", detail:"en ligne droite"},{titre:"Vitesse", detail:"environ 300000 km/s"},{titre:"L'ombre", detail:"derrière un objet opaque"},{titre:"Voir un objet", detail:"il renvoie la lumière"}]},
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
          carte:{centre:"Volcans et séismes", branches:[{titre:"Volcan", detail:"remontée de magma (lave)"},{titre:"Séisme", detail:"un tremblement de terre"},{titre:"La cause", detail:"mouvements des plaques"},{titre:"Magnitude", detail:"mesure la force du séisme"},{titre:"Risques", detail:"prévention et surveillance"}]},
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
          carte:{centre:"L'énergie et ses conversions", branches:[{titre:"Des formes variées", detail:"cinétique, thermique, électrique, lumineuse"},{titre:"Unité", detail:"le joule (J)"},{titre:"Conversion", detail:"une forme se transforme en une autre"},{titre:"Conservation", detail:"l'énergie ne disparaît pas"},{titre:"Exemple", detail:"lampe : électrique → lumière + chaleur"}]},
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
          carte:{centre:"Acides, bases et pH", branches:[{titre:"Échelle de pH", detail:"de 0 à 14"},{titre:"Acide", detail:"pH inférieur à 7"},{titre:"Neutre", detail:"pH = 7 (eau pure)"},{titre:"Basique", detail:"pH supérieur à 7"},{titre:"Mesurer", detail:"papier pH ou indicateur"}]},
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
          carte:{centre:"ADN, chromosomes, hérédité", branches:[{titre:"Le noyau", detail:"contient l'information génétique"},{titre:"Chromosomes", detail:"46 chez l'humain (23 paires)"},{titre:"L'ADN", detail:"la molécule support"},{titre:"Un gène", detail:"une portion d'ADN, un caractère"},{titre:"Hérédité", detail:"transmise des parents aux enfants"}]},
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
        },
        {
          id:"s12", niveau:"6e", title:"Mélanges et solutions",
          carte:{centre:"Mélanges et solutions", branches:[{titre:"Homogène", detail:"on ne distingue plus (eau salée)"},{titre:"Hétérogène", detail:"on distingue (eau + sable)"},{titre:"Dissolution", detail:"soluté dans solvant"},{titre:"Filtration", detail:"retient le solide non dissous"},{titre:"Évaporation", detail:"récupère le sel dissous"}]},
          cours:"Un <b>mélange homogène</b> est un mélange où l'on ne distingue plus les constituants (eau salée, eau sucrée). " +
                "Un <b>mélange hétérogène</b> laisse voir les constituants (eau + huile, eau + sable). " +
                "Quand un solide <b>se dissout</b> dans un liquide, on obtient une <b>solution</b> (le solide est le <b>soluté</b>, le liquide est le <b>solvant</b>). " +
                "Pour séparer : la <b>filtration</b> retient un solide non dissous, l'<b>évaporation</b> récupère un solide dissous (le sel de l'eau salée).",
          questions:[
            {type:"qcm", q:"Eau + sel bien mélangés : on ne voit plus le sel. C'est un mélange :", options:["homogène","hétérogène","pur","solide"], answer:0, explain:"On ne distingue plus les constituants : mélange homogène.", indice:"« Homo » veut dire « pareil partout »."},
            {type:"qcm", q:"Eau + huile : on voit deux couches. C'est un mélange :", options:["hétérogène","homogène","pur","gazeux"], answer:0, explain:"On distingue les constituants : mélange hétérogène.", indice:"« Hétéro » veut dire « différent »."},
            {type:"vf", q:"Une solution, comme l'eau salée, est un mélange homogène.", answer:true, explain:"Oui : le soluté dissous ne se voit plus.", indice:"On ne distingue plus le sel dans l'eau."},
            {type:"qcm", q:"Quand le sel disparaît dans l'eau, on dit qu'il se :", options:["dissout","évapore","congèle","filtre"], answer:0, explain:"Le sel se dissout : il se mélange à l'échelle invisible.", indice:"Le verbe vient de « dissolution »."},
            {type:"qcm", q:"Pour séparer l'eau et le sable, on utilise la :", options:["filtration","évaporation","congélation","dissolution"], answer:0, explain:"Le filtre retient le sable (solide non dissous) et laisse passer l'eau.", indice:"On verse à travers un filtre."},
            {type:"qcm", q:"Pour récupérer le sel dissous dans l'eau salée, on fait :", options:["évaporer l'eau","une filtration","congeler","ajouter du sucre"], answer:0, explain:"L'eau s'évapore, le sel reste au fond.", indice:"Pense aux marais salants au soleil."},
            {type:"vf", q:"La filtration permet de séparer le sel dissous de l'eau.", answer:false, explain:"Non : le sel dissous traverse le filtre. Il faut faire évaporer l'eau.", indice:"Un filtre n'arrête que ce qui n'est pas dissous."},
            {type:"qcm", q:"Dans l'eau sucrée, le sucre est :", options:["le soluté","le solvant","un filtre","un gaz"], answer:0, explain:"Le soluté est le solide qui se dissout (le sucre).", indice:"C'est ce qui est dissous."},
            {type:"qcm", q:"Dans l'eau sucrée, l'eau joue le rôle de :", options:["solvant","soluté","solide","gaz"], answer:0, explain:"Le solvant est le liquide qui dissout (l'eau).", indice:"C'est ce qui dissout le sucre."},
            {type:"vf", q:"L'air est un mélange de plusieurs gaz.", answer:true, explain:"Oui : surtout du diazote et du dioxygène.", indice:"L'air n'est pas un seul gaz pur."},
            {type:"qcm", q:"Eau + sable : on laisse reposer, le sable tombe au fond, puis on verse doucement le liquide. C'est la :", options:["décantation","évaporation","dissolution","fusion"], answer:0, explain:"La décantation sépare en laissant reposer.", indice:"On laisse « décanter », c'est-à-dire reposer."},
            {type:"vf", q:"Quand on dissout du sel dans l'eau, la masse totale (eau + sel) est conservée.", answer:true, explain:"Oui : rien ne disparaît, la masse se conserve.", indice:"Le sel est toujours là, simplement invisible."}
          ]
        },
        {
          id:"s13", niveau:"6e", title:"Les objets techniques (Technologie)",
          carte:{centre:"Les objets techniques", branches:[{titre:"Répond à un besoin", detail:"fabriqué par l'être humain"},{titre:"Fonction d'usage", detail:"à quoi ça sert"},{titre:"Fonction d'estime", detail:"ce qui plaît (forme, couleur)"},{titre:"Matériaux", detail:"métal, plastique, bois, verre"},{titre:"Cahier des charges", detail:"les contraintes à respecter"}]},
          cours:"Un <b>objet technique</b> est <b>fabriqué par l'être humain</b> pour <b>répondre à un besoin</b> (un vélo, un parapluie, une montre). " +
                "Sa <b>fonction d'usage</b> est ce à quoi il sert ; sa <b>fonction d'estime</b> est ce qui plaît (forme, couleur). " +
                "Il est fait de <b>matériaux</b> (métal, plastique, bois, verre...) choisis selon leurs <b>propriétés</b>. La liste des besoins et contraintes à respecter s'appelle le <b>cahier des charges</b>.",
          questions:[
            {type:"qcm", q:"Un objet technique est fabriqué pour :", options:["répondre à un besoin","décorer seulement","pousser tout seul","exister par hasard"], answer:0, explain:"Tout objet technique répond à un besoin humain.", indice:"On le crée parce qu'on en a besoin."},
            {type:"vf", q:"Un arbre est un objet technique.", answer:false, explain:"Non : un arbre est naturel. Un objet technique est fabriqué par l'être humain.", indice:"Naturel ou fabriqué ?"},
            {type:"qcm", q:"La « fonction d'usage » d'un objet, c'est :", options:["ce à quoi il sert","sa couleur","son prix","son poids"], answer:0, explain:"La fonction d'usage répond à « à quoi ça sert ? ».", indice:"Pense à l'utilité de l'objet."},
            {type:"qcm", q:"La fonction d'usage d'un parapluie est de :", options:["protéger de la pluie","éclairer la nuit","mesurer le temps","faire du bruit"], answer:0, explain:"Un parapluie sert à se protéger de la pluie.", indice:"À quoi sert un parapluie quand il pleut ?"},
            {type:"qcm", q:"La « fonction d'estime », c'est :", options:["ce qui plaît (forme, couleur)","ce à quoi il sert","son matériau","son poids"], answer:0, explain:"La fonction d'estime concerne le goût, l'esthétique.", indice:"C'est ce qui donne envie de le choisir, au-delà de l'utilité."},
            {type:"qcm", q:"Le verre, le bois, le métal, le plastique sont des :", options:["matériaux","besoins","fonctions","énergies"], answer:0, explain:"Ce sont des matériaux qui servent à fabriquer les objets.", indice:"Ce sont les « matières » de fabrication."},
            {type:"vf", q:"On choisit le matériau d'un objet selon ses propriétés (solidité, légèreté...).", answer:true, explain:"Oui : par exemple le plastique pour la légèreté.", indice:"Chaque matériau a ses avantages."},
            {type:"qcm", q:"La liste des besoins et contraintes à respecter pour concevoir un objet s'appelle :", options:["le cahier des charges","le mode d'emploi","le ticket de caisse","le plan de la ville"], answer:0, explain:"Le cahier des charges fixe ce que l'objet doit respecter.", indice:"C'est un « cahier » de règles à suivre."},
            {type:"vf", q:"Un objet technique peut être composé de plusieurs pièces assemblées.", answer:true, explain:"Oui : par exemple un vélo (roues, cadre, guidon...).", indice:"Pense à toutes les parties d'un vélo."},
            {type:"qcm", q:"Un vélo sert principalement à :", options:["se déplacer","cuire des aliments","éclairer","mesurer le temps"], answer:0, explain:"La fonction d'usage du vélo est le déplacement.", indice:"À quoi sert un vélo ?"},
            {type:"qcm", q:"Lequel est un objet technique ?", options:["une montre","un caillou","un nuage","une fleur"], answer:0, explain:"La montre est fabriquée pour donner l'heure ; les autres sont naturels.", indice:"Lequel a été fabriqué par l'être humain ?"},
            {type:"vf", q:"Le plastique est souvent choisi parce qu'il est léger et peu coûteux.", answer:true, explain:"Oui : ce sont deux de ses propriétés utiles.", indice:"Léger et bon marché : pratique pour beaucoup d'objets."}
          ]
        },
        {
          id:"s14", niveau:"4e", title:"Le mouvement et la vitesse",
          carte:{centre:"Le mouvement et la vitesse", branches:[{titre:"Mouvement", detail:"la position change"},{titre:"Vitesse", detail:"distance ÷ temps"},{titre:"Unités", detail:"km/h, m/s"},{titre:"Distance", detail:"vitesse × temps"},{titre:"Relatif", detail:"selon le référentiel"}]},
          cours:"Un objet est en <b>mouvement</b> quand sa <b>position change</b> au cours du temps (par rapport à un repère, le <b>référentiel</b>). Le mouvement est <b>relatif</b> : il dépend du repère choisi. " +
                "La <b>vitesse</b> se calcule par <b>v = distance ÷ temps</b>. On l'exprime en <b>km/h</b> ou en <b>m/s</b>. " +
                "Quand la vitesse reste constante, le mouvement est <b>uniforme</b>. Pour une distance : <b>distance = vitesse × temps</b>.",
          questions:[
            {type:"qcm", q:"La vitesse se calcule par :", options:["distance ÷ temps","distance × temps","temps ÷ distance","distance + temps"], answer:0, explain:"v = distance ÷ temps.", indice:"On partage la distance par la durée."},
            {type:"saisie", q:"Une voiture parcourt 100 km en 2 h. Sa vitesse en km/h ?", answer:["50","50 km/h"], explain:"100 ÷ 2 = 50 km/h.", indice:"distance ÷ temps."},
            {type:"saisie", q:"Un coureur parcourt 100 m en 20 s. Sa vitesse en m/s ?", answer:["5","5 m/s"], explain:"100 ÷ 20 = 5 m/s.", indice:"distance ÷ temps."},
            {type:"qcm", q:"La vitesse peut s'exprimer en :", options:["km/h ou m/s","kg","cm²","litres"], answer:0, explain:"Une vitesse est une distance par durée : km/h, m/s.", indice:"Pense au compteur d'une voiture."},
            {type:"vf", q:"Un objet est en mouvement si sa position change au cours du temps (par rapport à un repère).", answer:true, explain:"Oui : c'est la définition du mouvement.", indice:"Position qui change = mouvement."},
            {type:"qcm", q:"Un cycliste roule à 20 km/h pendant 3 h. Distance parcourue ?", options:["60 km","23 km","17 km","40 km"], answer:0, explain:"distance = vitesse × temps = 20 × 3 = 60 km.", indice:"vitesse × temps."},
            {type:"vf", q:"Le mouvement est relatif : il dépend du repère (référentiel) choisi.", answer:true, explain:"Oui : on bouge par rapport à quelque chose (le sol, un train...).", indice:"Assis dans un train, tu bouges par rapport au quai mais pas par rapport au siège."},
            {type:"saisie", q:"Un train parcourt 150 km en 3 h. Sa vitesse moyenne en km/h ?", answer:["50","50 km/h"], explain:"150 ÷ 3 = 50 km/h.", indice:"distance ÷ temps."},
            {type:"qcm", q:"Si la vitesse reste constante, le mouvement est dit :", options:["uniforme","accéléré","ralenti","immobile"], answer:0, explain:"Vitesse constante = mouvement uniforme.", indice:"« Uniforme » = toujours pareil."},
            {type:"qcm", q:"Pour calculer une distance, on fait :", options:["vitesse × temps","vitesse ÷ temps","temps ÷ vitesse","vitesse + temps"], answer:0, explain:"distance = vitesse × temps.", indice:"On multiplie la vitesse par la durée."},
            {type:"saisie", q:"Un piéton marche à 5 km/h pendant 2 h. Distance parcourue en km ?", answer:["10","10 km"], explain:"5 × 2 = 10 km.", indice:"vitesse × temps."},
            {type:"vf", q:"Plus un objet va vite, plus il parcourt de distance pendant un même temps.", answer:true, explain:"Oui : à durée égale, une plus grande vitesse fait plus de distance.", indice:"Vite = loin en peu de temps."}
          ]
        },
        {
          id:"s15", niveau:"4e", title:"La chaîne d'énergie et la chaîne d'information (Technologie)",
          carte:{centre:"Chaîne d'énergie et d'information", branches:[{titre:"Chaîne d'énergie", detail:"alimenter, convertir"},{titre:"La source", detail:"pile, secteur"},{titre:"Le capteur", detail:"détecte une information"},{titre:"L'actionneur", detail:"réalise l'action"},{titre:"Chaîne d'information", detail:"acquérir, traiter, communiquer"}]},
          cours:"Un objet technique met en oeuvre deux chaînes. La <b>chaîne d'énergie</b> fournit et <b>transforme l'énergie</b> pour réaliser l'action (une <b>source</b> comme une pile ou le secteur, puis un <b>convertisseur</b> : un moteur, une lampe...). " +
                "La <b>chaîne d'information</b> <b>acquiert</b>, <b>traite</b> puis <b>communique</b> une information : un <b>capteur</b> détecte (lumière, température, présence), une unité de traitement décide, un <b>actionneur</b> agit (moteur, lampe, sonnerie).",
          questions:[
            {type:"qcm", q:"La chaîne d'énergie sert à :", options:["fournir et transformer l'énergie pour réaliser une action","stocker des photos","mesurer le temps","colorier un objet"], answer:0, explain:"Elle apporte l'énergie et la convertit pour agir.", indice:"Pense à ce qui « fait bouger » l'objet."},
            {type:"qcm", q:"Un moteur électrique convertit l'énergie électrique en énergie :", options:["mécanique (mouvement)","sonore","nucléaire","chimique"], answer:0, explain:"Le moteur transforme l'électricité en mouvement.", indice:"Un moteur fait tourner, donc bouger."},
            {type:"qcm", q:"Une lampe convertit l'énergie électrique en énergie :", options:["lumineuse","mécanique","sonore","thermique seulement"], answer:0, explain:"La lampe produit de la lumière.", indice:"À quoi sert une lampe ?"},
            {type:"qcm", q:"Un composant qui détecte une information (lumière, température, présence) est :", options:["un capteur","un actionneur","une pile","un fil"], answer:0, explain:"Le capteur détecte une grandeur et fournit une information.", indice:"Il « capte » quelque chose."},
            {type:"qcm", q:"Un composant qui réalise l'action (moteur, lampe, sonnerie) est :", options:["un actionneur","un capteur","un écran tactile","un bouton"], answer:0, explain:"L'actionneur agit sur le monde réel.", indice:"Il « actionne » quelque chose."},
            {type:"vf", q:"La chaîne d'information acquiert, traite puis communique une information.", answer:true, explain:"Oui : ce sont ses trois fonctions.", indice:"Capter, décider, transmettre."},
            {type:"qcm", q:"Une pile ou le secteur jouent le rôle de :", options:["source d'énergie","capteur","actionneur","information"], answer:0, explain:"Ils fournissent l'énergie : ce sont des sources.", indice:"D'où vient l'énergie ?"},
            {type:"qcm", q:"Un détecteur de luminosité est :", options:["un capteur","un actionneur","un moteur","une lampe"], answer:0, explain:"Il mesure la lumière : c'est un capteur.", indice:"Il détecte, donc il capte."},
            {type:"qcm", q:"Un radiateur électrique convertit l'électricité en énergie :", options:["thermique (chaleur)","mécanique","lumineuse","sonore"], answer:0, explain:"Le radiateur produit de la chaleur.", indice:"À quoi sert un radiateur ?"},
            {type:"vf", q:"Dans un objet technique, capteurs, unité de traitement et actionneurs travaillent ensemble.", answer:true, explain:"Oui : l'information circule entre eux pour piloter l'objet.", indice:"Détecter, décider, agir : une équipe."},
            {type:"qcm", q:"Un haut-parleur convertit l'énergie électrique en énergie :", options:["sonore","lumineuse","thermique","chimique"], answer:0, explain:"Le haut-parleur produit du son.", indice:"À quoi sert un haut-parleur ?"},
            {type:"vf", q:"Un capteur fournit une information, un actionneur réalise une action.", answer:true, explain:"Oui : c'est la différence entre les deux.", indice:"L'un informe, l'autre agit."}
          ]
        },
        {
          id:"s16", niveau:"5e", title:"La nutrition des plantes (la photosynthèse)",
          carte:{centre:"La photosynthèse", branches:[{titre:"Dans les feuilles", detail:"grâce à la chlorophylle (vert)"},{titre:"Besoin de lumière", detail:"rien dans le noir total"},{titre:"Absorbe CO₂ et eau", detail:"eau prise par les racines"},{titre:"Rejette O₂", detail:"le dioxygène que l'on respire"},{titre:"Fabrique du glucose", detail:"la plante est autotrophe"}]},
          cours:"Les plantes vertes fabriquent <b>elles-mêmes</b> leur matière : on dit qu'elles sont <b>autotrophes</b>. C'est la <b>photosynthèse</b>, qui a lieu surtout dans les <b>feuilles</b>, grâce à la <b>lumière</b> captée par un pigment vert, la <b>chlorophylle</b>. " +
                "La plante prend dans l'air le <b>dioxyde de carbone (CO₂)</b>, et dans le sol l'<b>eau</b> et les <b>sels minéraux</b> (par les <b>racines</b>). Elle fabrique un sucre (le <b>glucose</b>) et rejette du <b>dioxygène (O₂)</b>.",
          questions:[
            {type:"qcm", q:"Les plantes vertes fabriquent leur matière grâce à :", options:["la photosynthèse","la digestion","la respiration seule","la fermentation"], answer:0, explain:"La photosynthèse produit la matière de la plante.", indice:"« photo » = lumière."},
            {type:"qcm", q:"La photosynthèse a besoin de :", options:["lumière","obscurité totale","sucre déjà prêt","viande"], answer:0, explain:"Sans lumière, pas de photosynthèse.", indice:"« photo » signifie lumière."},
            {type:"qcm", q:"Dans l'air, la plante prélève pour la photosynthèse :", options:["du dioxyde de carbone (CO₂)","du dioxygène uniquement","de l'hélium","du sel"], answer:0, explain:"Elle absorbe le CO₂ de l'air.", indice:"C'est le gaz que nous rejetons en respirant."},
            {type:"qcm", q:"La photosynthèse rejette dans l'air :", options:["du dioxygène (O₂)","du dioxyde de carbone","du méthane","de la vapeur de sel"], answer:0, explain:"La plante libère du dioxygène (O₂).", indice:"C'est le gaz que nous respirons."},
            {type:"qcm", q:"Le pigment vert qui capte la lumière s'appelle :", options:["la chlorophylle","l'amidon","le glucose","la sève"], answer:0, explain:"La chlorophylle donne sa couleur verte et capte la lumière.", indice:"Il rend les feuilles vertes."},
            {type:"qcm", q:"Quelle partie de la plante absorbe l'eau et les sels minéraux ?", options:["les racines","les fleurs","les fruits","les pétales"], answer:0, explain:"Les racines puisent l'eau et les sels minéraux dans le sol.", indice:"La partie sous la terre."},
            {type:"qcm", q:"Quelle partie capte surtout la lumière ?", options:["les feuilles","les racines","la tige seule","les graines"], answer:0, explain:"Les feuilles captent la lumière (et le CO₂).", indice:"Les parties vertes et plates."},
            {type:"vf", q:"Les plantes vertes produisent leur propre matière organique : elles sont autotrophes.", answer:true, explain:"Oui : « auto » = soi-même.", indice:"Elles n'ont pas besoin de manger d'autres êtres vivants."},
            {type:"vf", q:"La photosynthèse se déroule surtout dans les feuilles.", answer:true, explain:"Oui : c'est là que se trouve le plus de chlorophylle.", indice:"Les organes verts et exposés à la lumière."},
            {type:"qcm", q:"Les besoins de la plante verte pour la photosynthèse sont :", options:["lumière, eau, CO₂ et sels minéraux","viande et sucre","obscurité et chaleur seules","plastique et fer"], answer:0, explain:"Lumière, eau, dioxyde de carbone et sels minéraux.", indice:"Tout vient de l'air, de l'eau et du sol, avec la lumière."},
            {type:"vf", q:"La photosynthèse ne se fait pas dans le noir total.", answer:true, explain:"Oui : elle a besoin de lumière.", indice:"Pas de lumière, pas de photosynthèse."},
            {type:"qcm", q:"La plante fabrique notamment un sucre, le :", options:["glucose","sel","plastique","fer"], answer:0, explain:"La photosynthèse produit du glucose.", indice:"Un sucre, source d'énergie de la plante."}
          ]
        },
        {
          id:"s17", niveau:"4e", title:"La masse volumique",
          carte:{centre:"La masse volumique", branches:[{titre:"Définition", detail:"masse ÷ volume"},{titre:"Unités", detail:"g/cm³, kg/m³"},{titre:"L'eau", detail:"environ 1 g/cm³"},{titre:"Flotte", detail:"si plus petite que l'eau"},{titre:"Coule", detail:"si plus grande que l'eau"}]},
          cours:"La <b>masse volumique</b> indique la masse contenue dans un certain volume. On la calcule par <b>masse ÷ volume</b>. " +
                "Elle s'exprime en <b>g/cm³</b> ou en <b>kg/m³</b>. La masse volumique de l'<b>eau</b> est d'environ <b>1 g/cm³</b>. " +
                "Un matériau <b>flotte</b> sur l'eau si sa masse volumique est <b>inférieure</b> à celle de l'eau, et <b>coule</b> si elle est <b>supérieure</b>.",
          questions:[
            {type:"qcm", q:"La masse volumique se calcule par :", options:["masse ÷ volume","masse × volume","volume ÷ masse","masse + volume"], answer:0, explain:"Masse volumique = masse ÷ volume.", indice:"On partage la masse par le volume."},
            {type:"qcm", q:"La masse volumique de l'eau est environ :", options:["1 g/cm³","10 g/cm³","0,1 g/cm³","100 g/cm³"], answer:0, explain:"L'eau : environ 1 g/cm³.", indice:"1 g pour 1 cm³ d'eau."},
            {type:"saisie", q:"Un objet de masse 20 g et de volume 10 cm³ : masse volumique en g/cm³ ?", answer:["2","2 g/cm³"], explain:"20 ÷ 10 = 2 g/cm³.", indice:"masse ÷ volume."},
            {type:"saisie", q:"Masse 50 g, volume 25 cm³ : masse volumique en g/cm³ ?", answer:["2","2 g/cm³"], explain:"50 ÷ 25 = 2 g/cm³.", indice:"masse ÷ volume."},
            {type:"qcm", q:"La masse volumique s'exprime en :", options:["g/cm³ ou kg/m³","g seulement","cm³ seulement","kg seulement"], answer:0, explain:"C'est une masse par volume : g/cm³, kg/m³.", indice:"Une masse divisée par un volume."},
            {type:"qcm", q:"Un matériau de masse volumique 0,8 g/cm³ placé dans l'eau (1 g/cm³) va :", options:["flotter","couler","se dissoudre","s'évaporer"], answer:0, explain:"Moins dense que l'eau : il flotte.", indice:"Plus léger que l'eau pour un même volume."},
            {type:"qcm", q:"Un matériau de masse volumique 3 g/cm³ dans l'eau va :", options:["couler","flotter","fondre","bouillir"], answer:0, explain:"Plus dense que l'eau : il coule.", indice:"Plus lourd que l'eau pour un même volume."},
            {type:"saisie", q:"Masse 30 g, volume 6 cm³ : masse volumique en g/cm³ ?", answer:["5","5 g/cm³"], explain:"30 ÷ 6 = 5 g/cm³.", indice:"masse ÷ volume."},
            {type:"vf", q:"Pour un même volume, un matériau plus dense (masse volumique plus grande) est plus lourd.", answer:true, explain:"Oui : plus de masse dans le même volume.", indice:"Densité plus grande = plus lourd à volume égal."},
            {type:"qcm", q:"Pour calculer la masse, on fait :", options:["masse volumique × volume","masse volumique ÷ volume","volume ÷ masse volumique","masse volumique + volume"], answer:0, explain:"masse = masse volumique × volume.", indice:"On inverse la formule de la masse volumique."},
            {type:"saisie", q:"Un cube de volume 4 cm³ et de masse volumique 3 g/cm³ a une masse de combien de g ?", answer:["12","12 g"], explain:"3 × 4 = 12 g.", indice:"masse volumique × volume."},
            {type:"vf", q:"Un objet flotte sur l'eau si sa masse volumique est inférieure à celle de l'eau.", answer:true, explain:"Oui : moins dense que l'eau, il flotte.", indice:"Compare à 1 g/cm³."}
          ]
        },
        {
          id:"s18", niveau:"5e", title:"La respiration et la circulation",
          carte:{centre:"Respiration et circulation", branches:[{titre:"Respirer", detail:"prendre du dioxygène (O₂)"},{titre:"Rejeter", detail:"du dioxyde de carbone (CO₂)"},{titre:"Les poumons", detail:"échanges dans les alvéoles"},{titre:"Le coeur", detail:"un muscle qui pompe le sang"},{titre:"Le sang", detail:"transporte l'O₂ aux organes"}]},
          cours:"La <b>respiration</b> apporte du <b>dioxygène (O₂)</b> au corps et rejette du <b>dioxyde de carbone (CO₂)</b>. Les échanges gazeux se font dans les <b>poumons</b> (au niveau des <b>alvéoles</b>). Le <b>coeur</b>, un <b>muscle</b>, pompe le <b>sang</b> qui circule dans les <b>vaisseaux</b> (artères, veines) et transporte le dioxygène jusqu'aux organes. Respiration et circulation travaillent ensemble.",
          questions:[
            {type:"qcm", q:"La respiration apporte au corps :", options:["du dioxygène (O₂)","du sel","du sucre seul","de l'azote pur"], answer:0, explain:"On inspire du dioxygène, indispensable aux organes.", indice:"Le gaz que l'on respire."},
            {type:"qcm", q:"La respiration rejette :", options:["du dioxyde de carbone (CO₂)","du dioxygène","de l'eau salée","du fer"], answer:0, explain:"On expire du dioxyde de carbone.", indice:"Le gaz que l'on souffle."},
            {type:"qcm", q:"Les échanges gazeux se font dans :", options:["les poumons (alvéoles)","les reins","les muscles","les os"], answer:0, explain:"Les alvéoles des poumons permettent les échanges.", indice:"Organe de la respiration."},
            {type:"qcm", q:"L'organe qui pompe le sang est :", options:["le coeur","l'estomac","le foie","le cerveau"], answer:0, explain:"Le coeur pompe le sang dans tout le corps.", indice:"Il bat dans la poitrine."},
            {type:"qcm", q:"Le sang transporte notamment :", options:["le dioxygène vers les organes","la lumière","le son","les os"], answer:0, explain:"Le sang amène le dioxygène aux organes.", indice:"Il distribue l'O₂."},
            {type:"vf", q:"À l'inspiration, l'air riche en dioxygène entre dans les poumons.", answer:true, explain:"Oui : on fait entrer du dioxygène.", indice:"Inspirer = faire entrer l'air."},
            {type:"qcm", q:"Les vaisseaux qui partent du coeur sont les :", options:["artères","veines","nerfs","os"], answer:0, explain:"Les artères partent du coeur.", indice:"« A » comme partir du coeur."},
            {type:"vf", q:"Le coeur est un muscle.", answer:true, explain:"Oui : un muscle qui se contracte pour pomper.", indice:"Il travaille sans arrêt."},
            {type:"qcm", q:"À l'expiration, on rejette surtout :", options:["du dioxyde de carbone","du dioxygène pur","du sucre","du sel"], answer:0, explain:"On expire du CO₂.", indice:"Le déchet gazeux de la respiration."},
            {type:"vf", q:"Le sang circule dans tout le corps grâce au coeur et aux vaisseaux.", answer:true, explain:"Oui : c'est la circulation sanguine.", indice:"Une pompe et des tuyaux."},
            {type:"qcm", q:"Le dioxygène passe de l'air au sang dans :", options:["les alvéoles des poumons","l'estomac","la bouche","les reins"], answer:0, explain:"L'échange air-sang se fait dans les alvéoles.", indice:"Au plus profond des poumons."},
            {type:"vf", q:"La respiration et la circulation travaillent ensemble pour apporter le dioxygène aux organes.", answer:true, explain:"Oui : l'une capte l'O₂, l'autre le distribue.", indice:"Deux fonctions complémentaires."}
          ]
        },
        {
          id:"s19", niveau:"6e", title:"Les écosystèmes et les chaînes alimentaires",
          carte:{centre:"Écosystèmes et chaînes alimentaires", branches:[{titre:"Écosystème", detail:"un milieu + ses êtres vivants"},{titre:"Chaîne alimentaire", detail:"qui mange qui"},{titre:"La flèche", detail:"« est mangé par »"},{titre:"Producteurs", detail:"les plantes vertes"},{titre:"Consommateurs", detail:"herbivores, carnivores"}]},
          cours:"Un <b>écosystème</b> est formé d'un <b>milieu de vie</b> et des <b>êtres vivants</b> qui y vivent, en relation les uns avec les autres. Une <b>chaîne alimentaire</b> montre « qui mange qui » : la <b>flèche</b> signifie « <b>est mangé par</b> » (herbe → lapin → renard). Les <b>plantes</b> sont des <b>producteurs</b>, les animaux des <b>consommateurs</b> (herbivores, carnivores) ; les <b>décomposeurs</b> recyclent la matière morte.",
          questions:[
            {type:"qcm", q:"Un écosystème est :", options:["un milieu de vie et les êtres vivants qui y vivent","une seule plante","un caillou","une étoile"], answer:0, explain:"Milieu + êtres vivants + leurs relations.", indice:"Un lieu et ce qui y vit."},
            {type:"qcm", q:"Dans une chaîne alimentaire, la flèche signifie :", options:["« est mangé par »","« est plus grand que »","« habite »","« ressemble à »"], answer:0, explain:"La flèche va du mangé vers le mangeur.", indice:"herbe → lapin : l'herbe est mangée par le lapin."},
            {type:"qcm", q:"Dans « herbe → lapin → renard », le renard mange :", options:["le lapin","l'herbe","le renard","rien"], answer:0, explain:"Le renard mange le lapin.", indice:"Suis la flèche juste avant le renard."},
            {type:"qcm", q:"Les plantes vertes, qui fabriquent leur matière, sont des :", options:["producteurs","consommateurs","décomposeurs","prédateurs"], answer:0, explain:"Elles produisent leur matière : producteurs.", indice:"Elles « produisent » grâce à la photosynthèse."},
            {type:"qcm", q:"Un animal qui mange des plantes est un :", options:["herbivore","carnivore","producteur","végétal"], answer:0, explain:"Mangeur de plantes : herbivore.", indice:"« herbi » comme herbe."},
            {type:"qcm", q:"Un animal qui mange d'autres animaux est un :", options:["carnivore","herbivore","producteur","minéral"], answer:0, explain:"Mangeur de viande : carnivore.", indice:"« carni » comme la viande."},
            {type:"vf", q:"Une chaîne alimentaire commence souvent par un végétal (producteur).", answer:true, explain:"Oui : la plante est à la base.", indice:"Tout part souvent de l'herbe ou des plantes."},
            {type:"qcm", q:"Les êtres qui décomposent la matière morte sont les :", options:["décomposeurs","producteurs","herbivores","prédateurs"], answer:0, explain:"Ils recyclent la matière morte.", indice:"Ils « décomposent »."},
            {type:"vf", q:"Dans un écosystème, les êtres vivants dépendent les uns des autres.", answer:true, explain:"Oui : ils sont reliés (alimentation, abri...).", indice:"Tout est en relation."},
            {type:"qcm", q:"Dans « herbe → lapin → renard », le producteur est :", options:["l'herbe","le lapin","le renard","le sol"], answer:0, explain:"L'herbe (plante) est le producteur.", indice:"Le végétal du début."},
            {type:"vf", q:"Si une espèce disparaît, cela peut perturber tout l'écosystème.", answer:true, explain:"Oui : les espèces sont liées entre elles.", indice:"Tout est connecté dans la chaîne."},
            {type:"qcm", q:"Un écosystème comprend :", options:["un milieu et des êtres vivants","seulement des plantes","seulement des roches","seulement de l'eau"], answer:0, explain:"Un milieu (le biotope) et des êtres vivants.", indice:"Un lieu ET ses habitants."}
          ]
        },
        {
          id:"s20", niveau:"3e", title:"L'évolution des êtres vivants",
          carte:{centre:"L'évolution", branches:[{titre:"Définition", detail:"les espèces changent au cours du temps"},{titre:"Les fossiles", detail:"traces d'espèces anciennes"},{titre:"Sélection naturelle", detail:"les mieux adaptés survivent"},{titre:"Darwin", detail:"a proposé cette théorie"},{titre:"Ancêtres communs", detail:"un lien entre toutes les espèces"}]},
          cours:"L'<b>évolution</b> est la transformation des <b>espèces</b> au cours du <b>temps</b>. Les <b>fossiles</b> (traces d'êtres vivants anciens conservées dans les roches) montrent que les espèces ont changé. La <b>sélection naturelle</b> favorise les individus les <b>mieux adaptés</b> à leur milieu, qui survivent et se reproduisent davantage (idée de <b>Darwin</b>). Tous les êtres vivants ont des <b>ancêtres communs</b>.",
          questions:[
            {type:"qcm", q:"L'évolution, c'est :", options:["la transformation des espèces au cours du temps","la disparition de toute vie","la fabrication des roches","le déplacement des continents"], answer:0, explain:"Les espèces changent au fil du temps.", indice:"« évoluer » = changer."},
            {type:"qcm", q:"Les traces d'êtres vivants anciens conservées dans les roches sont des :", options:["fossiles","cristaux","météorites","minéraux"], answer:0, explain:"Ce sont des fossiles.", indice:"On les trouve dans les couches de roche."},
            {type:"vf", q:"Les fossiles montrent que les espèces ont changé au cours du temps.", answer:true, explain:"Oui : ils témoignent du passé du vivant.", indice:"Des espèces du passé, parfois disparues."},
            {type:"qcm", q:"Le scientifique associé à la théorie de l'évolution est :", options:["Darwin","Newton","Einstein","Pasteur"], answer:0, explain:"Charles Darwin a proposé la sélection naturelle.", indice:"Son nom commence par D."},
            {type:"qcm", q:"La sélection naturelle favorise :", options:["les individus les mieux adaptés à leur milieu","les plus grands seulement","le hasard total","les plus jeunes"], answer:0, explain:"Les mieux adaptés survivent et se reproduisent plus.", indice:"Mieux adapté = plus de chances de survie."},
            {type:"vf", q:"Les espèces actuelles descendent d'espèces plus anciennes.", answer:true, explain:"Oui : elles ont des ancêtres.", indice:"Le vivant a une longue histoire."},
            {type:"qcm", q:"Les êtres vivants ont :", options:["des ancêtres communs","aucun lien entre eux","une origine très récente","toujours existé identiques"], answer:0, explain:"Ils partagent des ancêtres communs.", indice:"Un arbre du vivant relie les espèces."},
            {type:"vf", q:"Un individu mieux adapté a plus de chances de survivre et de se reproduire.", answer:true, explain:"Oui : c'est le principe de la sélection naturelle.", indice:"Adapté = avantage pour vivre et avoir des petits."},
            {type:"qcm", q:"L'évolution explique :", options:["la diversité des êtres vivants","la couleur du ciel","les marées","les saisons"], answer:0, explain:"Elle explique la grande diversité du vivant.", indice:"Pourquoi il existe autant d'espèces."},
            {type:"qcm", q:"Étudier les fossiles permet de connaître :", options:["des espèces du passé","l'avenir","la météo","les planètes"], answer:0, explain:"Les fossiles nous renseignent sur le passé du vivant.", indice:"Des espèces d'il y a longtemps."},
            {type:"vf", q:"L'évolution se déroule sur de très longues durées.", answer:true, explain:"Oui : sur des milliers et des millions d'années.", indice:"Ce n'est pas rapide."},
            {type:"qcm", q:"La sélection naturelle a été proposée par :", options:["Charles Darwin","Galilée","Marie Curie","Archimède"], answer:0, explain:"Charles Darwin.", indice:"Le naturaliste du XIXe siècle."}
          ]
        },
        {
          id:"s21", niveau:"4e", title:"La reproduction des êtres vivants",
          carte:{centre:"La reproduction", branches:[{titre:"But", detail:"assurer la survie de l'espèce"},{titre:"Reproduction sexuée", detail:"cellule mâle + cellule femelle"},{titre:"Fécondation", detail:"donne une cellule-oeuf"},{titre:"Plantes à fleurs", detail:"pollinisation, puis graine"},{titre:"Reproduction asexuée", detail:"un seul parent (bouturage)"}]},
          cours:"La <b>reproduction</b> assure la <b>survie de l'espèce</b>. Dans la <b>reproduction sexuée</b>, une cellule <b>mâle</b> (le <b>spermatozoïde</b>) et une cellule <b>femelle</b> (l'<b>ovule</b>) s'unissent : c'est la <b>fécondation</b>, qui donne une <b>cellule-oeuf</b>, origine d'un nouvel individu. Chez les <b>plantes à fleurs</b>, la <b>pollinisation</b> précède la formation d'une <b>graine</b>. La <b>reproduction asexuée</b> (ex. bouturage) ne fait intervenir qu'un seul parent.",
          questions:[
            {type:"qcm", q:"La reproduction permet :", options:["d'assurer la survie de l'espèce","de respirer","de digérer","de voir"], answer:0, explain:"Sans reproduction, l'espèce disparaîtrait.", indice:"Avoir une descendance."},
            {type:"qcm", q:"Dans la reproduction sexuée, la cellule mâle est :", options:["le spermatozoïde","l'ovule","la graine","le pollen"], answer:0, explain:"La cellule reproductrice mâle est le spermatozoïde.", indice:"Cellule mâle des animaux."},
            {type:"qcm", q:"La cellule femelle est :", options:["l'ovule","le spermatozoïde","la racine","la feuille"], answer:0, explain:"La cellule reproductrice femelle est l'ovule.", indice:"Cellule femelle."},
            {type:"qcm", q:"La rencontre de la cellule mâle et de la cellule femelle s'appelle :", options:["la fécondation","la digestion","la respiration","la photosynthèse"], answer:0, explain:"Leur union est la fécondation.", indice:"Elle donne la cellule-oeuf."},
            {type:"qcm", q:"La cellule-oeuf est issue de :", options:["la fécondation","la respiration","la digestion","la germination"], answer:0, explain:"La fécondation crée la cellule-oeuf.", indice:"Union mâle + femelle."},
            {type:"vf", q:"La reproduction sexuée nécessite deux cellules (mâle et femelle).", answer:true, explain:"Oui : une cellule mâle et une cellule femelle.", indice:"Il en faut deux."},
            {type:"qcm", q:"Chez les plantes à fleurs, le transport du pollen s'appelle :", options:["la pollinisation","la fécondation seule","la digestion","la respiration"], answer:0, explain:"Le pollen est transporté : c'est la pollinisation.", indice:"Pense aux abeilles et au vent."},
            {type:"qcm", q:"Le bouturage est un exemple de reproduction :", options:["asexuée (un seul parent)","sexuée","minérale","impossible"], answer:0, explain:"Une seule plante donne une nouvelle plante : asexuée.", indice:"Sans cellule mâle ni femelle."},
            {type:"vf", q:"Une graine peut donner une nouvelle plante.", answer:true, explain:"Oui : la graine germe et donne une plante.", indice:"Pense à une graine que l'on plante."},
            {type:"qcm", q:"Après la fécondation chez les plantes à fleurs, il se forme :", options:["une graine","un fossile","une roche","une étoile"], answer:0, explain:"La fécondation conduit à la formation d'une graine.", indice:"Future nouvelle plante."},
            {type:"vf", q:"La reproduction asexuée fait intervenir un seul parent.", answer:true, explain:"Oui : un seul individu suffit.", indice:"Un seul parent, pas deux."},
            {type:"qcm", q:"Sans reproduction :", options:["l'espèce disparaîtrait","rien ne changerait","les roches fondraient","le Soleil s'éteindrait"], answer:0, explain:"La reproduction est essentielle à la survie de l'espèce.", indice:"Plus de descendants, plus d'espèce."}
          ]
        },
        {
          id:"s22", niveau:"4e", title:"Le son",
          carte:{centre:"Le son", branches:[{titre:"Origine", detail:"une vibration"},{titre:"Propagation", detail:"dans l'air, l'eau, les solides"},{titre:"Pas dans le vide", detail:"il faut de la matière"},{titre:"Vitesse", detail:"environ 340 m/s dans l'air"},{titre:"Plus lent que la lumière", detail:"l'éclair avant le tonnerre"}]},
          cours:"Un <b>son</b> est produit par une <b>vibration</b> (d'un objet, des cordes vocales). Il se <b>propage</b> dans un milieu matériel (<b>air</b>, eau, solides) mais <b>pas dans le vide</b>. Dans l'air, le son va à environ <b>340 m/s</b>, bien <b>plus lentement que la lumière</b> (c'est pourquoi on voit l'éclair avant d'entendre le tonnerre). On perçoit les sons grâce à l'<b>oreille</b> ; les sons trop forts peuvent l'abîmer.",
          questions:[
            {type:"qcm", q:"Un son est produit par :", options:["une vibration","une couleur","une odeur","une lumière"], answer:0, explain:"Le son naît d'une vibration.", indice:"Quelque chose qui vibre."},
            {type:"qcm", q:"Le son a besoin d'un milieu pour se propager, par exemple :", options:["l'air","le vide","rien","l'obscurité"], answer:0, explain:"Le son se propage dans l'air (et autres milieux).", indice:"Il lui faut de la matière."},
            {type:"vf", q:"Le son ne se propage pas dans le vide.", answer:true, explain:"Oui : sans matière, pas de son.", indice:"Dans l'espace, le silence."},
            {type:"qcm", q:"Dans l'air, le son se déplace à environ :", options:["340 m/s","300000 km/s","10 m/s","1 km/h"], answer:0, explain:"Environ 340 m/s dans l'air.", indice:"Bien plus lent que la lumière."},
            {type:"qcm", q:"Le son va :", options:["moins vite que la lumière","plus vite que la lumière","à la même vitesse","instantanément"], answer:0, explain:"Le son est beaucoup plus lent que la lumière.", indice:"On le voit puis on l'entend."},
            {type:"vf", q:"On voit l'éclair avant d'entendre le tonnerre car la lumière va plus vite que le son.", answer:true, explain:"Oui : la lumière arrive avant le son.", indice:"Lumière rapide, son plus lent."},
            {type:"qcm", q:"On perçoit les sons grâce à :", options:["l'oreille","l'oeil","le nez","la main"], answer:0, explain:"L'oreille est l'organe de l'audition.", indice:"Organe pour entendre."},
            {type:"vf", q:"Les sons trop forts peuvent abîmer l'oreille.", answer:true, explain:"Oui : il faut protéger son audition.", indice:"Attention au volume."},
            {type:"qcm", q:"Quand un objet vibre plus vite, le son est :", options:["plus aigu","plus grave","inaudible","plus lent"], answer:0, explain:"Une vibration rapide donne un son aigu.", indice:"Aigu = vibration rapide."},
            {type:"qcm", q:"Le son se propage dans :", options:["l'air, l'eau et les solides","le vide uniquement","la lumière","l'obscurité"], answer:0, explain:"Dans tout milieu matériel.", indice:"Partout où il y a de la matière."},
            {type:"vf", q:"Sans matière (dans le vide), le son ne peut pas se propager.", answer:true, explain:"Oui : il a besoin d'un support matériel.", indice:"Pas de matière, pas de son."},
            {type:"qcm", q:"La vibration des cordes vocales produit :", options:["la voix (un son)","de la lumière","de la chaleur seule","une odeur"], answer:0, explain:"Les cordes vocales vibrent et produisent la voix.", indice:"Ta voix est un son."}
          ]
        },
        {
          id:"s23", niveau:"5e", title:"Le cycle de l'eau et ses changements d'état",
          carte:{centre:"Le cycle de l'eau", branches:[{titre:"Trois états", detail:"solide, liquide, vapeur"},{titre:"Évaporation", detail:"liquide → vapeur"},{titre:"Condensation", detail:"vapeur → nuages"},{titre:"Précipitations", detail:"pluie, neige"},{titre:"Repères", detail:"glace 0 °C, ébullition 100 °C"}]},
          cours:"L'eau existe sous <b>trois états</b> : <b>solide</b> (glace), <b>liquide</b> et <b>gazeux</b> (vapeur). Elle <b>s'évapore</b> (liquide vers vapeur), la vapeur se <b>condense</b> en formant les <b>nuages</b>, puis l'eau retombe en <b>précipitations</b> (pluie, neige) : c'est le <b>cycle de l'eau</b>. L'eau gèle à <b>0 °C</b> et bout à <b>100 °C</b>.",
          questions:[
            {type:"qcm", q:"L'eau peut exister sous :", options:["trois états (solide, liquide, gaz)","un seul état","cinq états","aucun état"], answer:0, explain:"Solide, liquide, gazeux.", indice:"Glace, eau, vapeur."},
            {type:"qcm", q:"Le passage de l'eau liquide à la vapeur s'appelle :", options:["l'évaporation","la fusion","la solidification","la condensation"], answer:0, explain:"Liquide vers gaz : évaporation.", indice:"L'eau « s'évapore »."},
            {type:"qcm", q:"La vapeur d'eau qui redevient liquide (les nuages), c'est :", options:["la condensation","l'évaporation","la fusion","la congélation"], answer:0, explain:"Gaz vers liquide : condensation.", indice:"Formation des nuages et de la buée."},
            {type:"qcm", q:"La pluie et la neige sont des :", options:["précipitations","évaporations","fontes","fumées"], answer:0, explain:"Ce sont des précipitations.", indice:"L'eau qui retombe du ciel."},
            {type:"vf", q:"Dans le cycle de l'eau, l'eau s'évapore puis retombe en pluie.", answer:true, explain:"Oui : un cycle qui se répète.", indice:"Monte en vapeur, redescend en pluie."},
            {type:"qcm", q:"L'eau gèle (devient solide) à :", options:["0 °C","100 °C","50 °C","-10 °C"], answer:0, explain:"L'eau gèle à 0 °C.", indice:"Température de la glace qui se forme."},
            {type:"qcm", q:"L'eau bout (devient vapeur) à :", options:["100 °C","0 °C","37 °C","200 °C"], answer:0, explain:"L'eau bout à 100 °C.", indice:"Ébullition de l'eau."},
            {type:"vf", q:"Les nuages se forment par condensation de la vapeur d'eau.", answer:true, explain:"Oui : la vapeur se condense en gouttelettes.", indice:"Vapeur qui redevient liquide en altitude."},
            {type:"qcm", q:"La glace qui fond redevient :", options:["de l'eau liquide (fusion)","de la vapeur","de la neige","du sel"], answer:0, explain:"Solide vers liquide : la fusion.", indice:"La glace « fond »."},
            {type:"vf", q:"Le cycle de l'eau fait passer l'eau de la mer au ciel puis à la terre.", answer:true, explain:"Oui : évaporation, nuages, pluie, rivières.", indice:"Un grand circuit naturel."},
            {type:"qcm", q:"L'eau liquide qui devient solide :", options:["se solidifie","s'évapore","se condense","disparaît"], answer:0, explain:"Liquide vers solide : solidification.", indice:"Elle « gèle »."},
            {type:"vf", q:"L'eau change d'état mais reste de l'eau (H₂O).", answer:true, explain:"Oui : c'est toujours la même substance.", indice:"Glace, eau, vapeur : même molécule."}
          ]
        },
        {
          id:"s24", niveau:"4e", title:"Le poids et la masse",
          carte:{centre:"Poids et masse", branches:[{titre:"La masse", detail:"quantité de matière, en kg"},{titre:"Le poids", detail:"une force, en newtons (N)"},{titre:"Masse constante", detail:"identique partout"},{titre:"Poids variable", detail:"plus faible sur la Lune"},{titre:"Sur Terre", detail:"poids ≈ masse × 10"}]},
          cours:"La <b>masse</b> (en <b>kilogrammes</b>) est la <b>quantité de matière</b> : elle <b>ne change pas</b> selon le lieu. Le <b>poids</b> (en <b>newtons</b>, N) est la <b>force</b> de gravité qui attire l'objet vers le bas : il <b>dépend du lieu</b> (plus faible sur la Lune). Sur Terre, le poids vaut environ <b>masse × 10</b> (g ≈ 10 N/kg). On mesure la masse avec une <b>balance</b>.",
          questions:[
            {type:"qcm", q:"La masse se mesure en :", options:["kilogrammes (kg)","newtons","mètres","secondes"], answer:0, explain:"La masse est en kilogrammes.", indice:"Comme sur une balance de cuisine."},
            {type:"qcm", q:"Le poids est :", options:["une force (l'attraction de la gravité)","une longueur","une durée","une surface"], answer:0, explain:"Le poids est une force.", indice:"Ce qui nous attire vers le sol."},
            {type:"qcm", q:"Le poids se mesure en :", options:["newtons (N)","kilogrammes","litres","degrés"], answer:0, explain:"Une force se mesure en newtons.", indice:"Unité de force."},
            {type:"vf", q:"La masse d'un objet ne change pas selon le lieu.", answer:true, explain:"Oui : elle est la même sur Terre ou sur la Lune.", indice:"La matière reste la même."},
            {type:"vf", q:"Le poids d'un objet est plus faible sur la Lune que sur la Terre.", answer:true, explain:"Oui : la gravité y est plus faible.", indice:"On y saute plus haut."},
            {type:"qcm", q:"Sur Terre, le poids dépend de :", options:["la gravité","la couleur","la forme exacte","le prix"], answer:0, explain:"Le poids dépend de la gravité du lieu.", indice:"L'attraction de la planète."},
            {type:"saisie", q:"Sur Terre (g ≈ 10 N/kg), une masse de 2 kg a un poids d'environ ... N ?", answer:["20","20 N"], explain:"2 × 10 = 20 N.", indice:"Multiplie la masse par 10."},
            {type:"qcm", q:"On mesure la masse avec :", options:["une balance","un thermomètre","une règle","un chronomètre"], answer:0, explain:"La balance mesure la masse.", indice:"Instrument de la cuisine et du marché."},
            {type:"vf", q:"Sur la Lune, la masse reste la même mais le poids diminue.", answer:true, explain:"Oui : masse constante, poids plus faible.", indice:"La matière ne change pas, la gravité oui."},
            {type:"saisie", q:"Masse 5 kg, g ≈ 10 N/kg : poids ≈ ... N ?", answer:["50","50 N"], explain:"5 × 10 = 50 N.", indice:"Multiplie par 10."},
            {type:"qcm", q:"La masse est :", options:["la quantité de matière","une force","une vitesse","une couleur"], answer:0, explain:"La masse mesure la quantité de matière.", indice:"Combien il y a de matière."},
            {type:"vf", q:"Le poids et la masse sont deux grandeurs différentes.", answer:true, explain:"Oui : l'une est une force, l'autre une quantité de matière.", indice:"À ne pas confondre."}
          ]
        },
        {
          id:"s25", niveau:"4e", title:"Les transformations chimiques",
          carte:{centre:"Les transformations chimiques", branches:[{titre:"Nouvelles substances", detail:"il se forme d'autres corps"},{titre:"Réactifs", detail:"les corps de départ"},{titre:"Produits", detail:"les corps formés"},{titre:"Masse conservée", detail:"Lavoisier"},{titre:"Différent d'un état", detail:"fondre = physique"}]},
          cours:"Lors d'une <b>transformation chimique</b>, des <b>réactifs</b> (corps de départ) se transforment en <b>produits</b> (nouvelles substances). La <b>masse totale se conserve</b> (loi de <b>Lavoisier</b> : « rien ne se perd, rien ne se crée, tout se transforme »). C'est différent d'un simple <b>changement d'état</b> (fondre, bouillir), qui est une transformation <b>physique</b>. Exemples : combustion, rouille.",
          questions:[
            {type:"qcm", q:"Lors d'une transformation chimique :", options:["de nouvelles substances se forment","rien ne change","l'eau gèle simplement","les couleurs disparaissent"], answer:0, explain:"On obtient de nouveaux corps.", indice:"« chimique » : la matière change de nature."},
            {type:"qcm", q:"Les substances de départ sont les :", options:["réactifs","produits","mélanges","états"], answer:0, explain:"Ce sont les réactifs.", indice:"Ce qui « réagit » au départ."},
            {type:"qcm", q:"Les substances formées sont les :", options:["produits","réactifs","solvants","gaz seuls"], answer:0, explain:"Ce sont les produits.", indice:"Ce qui est « produit » à la fin."},
            {type:"vf", q:"Lors d'une transformation chimique, la masse totale se conserve.", answer:true, explain:"Oui : loi de Lavoisier.", indice:"Rien ne se perd, rien ne se crée."},
            {type:"qcm", q:"« Rien ne se perd, rien ne se crée, tout se transforme » est attribué à :", options:["Lavoisier","Newton","Darwin","Pythagore"], answer:0, explain:"À Lavoisier.", indice:"Un chimiste célèbre."},
            {type:"qcm", q:"La combustion du carbone produit :", options:["du dioxyde de carbone (CO₂)","de l'or","du sel","de l'eau salée"], answer:0, explain:"Carbone + dioxygène donne du CO₂.", indice:"Le gaz rejeté quand ça brûle."},
            {type:"vf", q:"Une transformation chimique forme de nouvelles substances, contrairement à un changement d'état.", answer:true, explain:"Oui : le changement d'état est physique.", indice:"Chimique = nouvelle matière ; physique = même matière."},
            {type:"qcm", q:"Faire fondre de la glace est :", options:["un changement d'état (physique)","une transformation chimique","une combustion","une explosion"], answer:0, explain:"C'est physique : l'eau reste de l'eau.", indice:"La matière reste la même (H₂O)."},
            {type:"qcm", q:"Le fer qui rouille est :", options:["une transformation chimique","un changement d'état","un mélange","une dissolution"], answer:0, explain:"La rouille est une nouvelle substance : transformation chimique.", indice:"Le fer devient un autre corps."},
            {type:"vf", q:"Lors d'une combustion, du dioxygène est consommé.", answer:true, explain:"Oui : il faut du dioxygène pour brûler.", indice:"Sans air (dioxygène), pas de combustion."},
            {type:"qcm", q:"Dans une transformation chimique, les atomes sont :", options:["conservés (ni créés ni détruits)","détruits","créés à partir de rien","transformés en énergie"], answer:0, explain:"Les atomes se réorganisent mais sont conservés.", indice:"Ils changent juste d'arrangement."},
            {type:"vf", q:"La masse des produits est égale à la masse des réactifs.", answer:true, explain:"Oui : conservation de la masse.", indice:"Avant = après, en masse."}
          ]
        },
        {
          id:"s26", niveau:"6e", title:"Classer les êtres vivants",
          carte:{centre:"Classer les êtres vivants", branches:[{titre:"Selon des attributs", detail:"ce qu'ils possèdent"},{titre:"Groupes emboîtés", detail:"un groupe dans un plus grand"},{titre:"Vertébrés", detail:"ont une colonne vertébrale"},{titre:"Mammifères", detail:"poils, allaitent"},{titre:"Oiseaux", detail:"des plumes"}]},
          cours:"On <b>classe</b> les êtres vivants selon leurs <b>attributs</b> (les caractères qu'ils <b>possèdent</b> : poils, plumes, écailles...). Ceux qui partagent des attributs sont réunis dans un même <b>groupe</b>, et les groupes sont <b>emboîtés</b>. Par exemple, les <b>vertébrés</b> ont une colonne vertébrale ; parmi eux, les <b>mammifères</b> ont des poils et allaitent, les <b>oiseaux</b> ont des plumes.",
          questions:[
            {type:"qcm", q:"On classe les êtres vivants selon :", options:["leurs attributs (caractères) communs","leur prénom","leur prix","leur taille uniquement"], answer:0, explain:"D'après ce qu'ils possèdent.", indice:"Les caractères que l'on observe."},
            {type:"qcm", q:"Les animaux qui ont une colonne vertébrale sont les :", options:["vertébrés","invertébrés","végétaux","minéraux"], answer:0, explain:"Ce sont les vertébrés.", indice:"« vertèbre » est dans le mot."},
            {type:"qcm", q:"Les mammifères ont :", options:["des poils et allaitent leurs petits","des plumes","des écailles seulement","des racines"], answer:0, explain:"Poils et allaitement caractérisent les mammifères.", indice:"Pense au chat, au chien."},
            {type:"qcm", q:"Les oiseaux ont :", options:["des plumes","des poils","des écailles","des nageoires seulement"], answer:0, explain:"Les plumes sont l'attribut des oiseaux.", indice:"Ce qui les couvre."},
            {type:"vf", q:"On regroupe ensemble les êtres vivants qui partagent des attributs.", answer:true, explain:"Oui : mêmes attributs, même groupe.", indice:"Ce qu'ils ont en commun."},
            {type:"qcm", q:"Un attribut est :", options:["un caractère que l'on observe (poils, plumes...)","un nom inventé","une couleur préférée","un numéro"], answer:0, explain:"C'est un caractère observable.", indice:"Quelque chose que l'être vivant possède."},
            {type:"qcm", q:"Le chat et le chien sont tous deux des :", options:["mammifères","oiseaux","poissons","reptiles"], answer:0, explain:"Ils ont des poils et allaitent : mammifères.", indice:"Ils ont des poils."},
            {type:"vf", q:"La classification se fait d'après ce que les êtres vivants possèdent.", answer:true, explain:"Oui : on classe d'après les attributs présents.", indice:"Ce qu'ils ont, pas ce qu'ils n'ont pas."},
            {type:"qcm", q:"Les poissons possèdent :", options:["des nageoires et des écailles","des plumes","des poils","des racines"], answer:0, explain:"Nageoires et écailles caractérisent les poissons.", indice:"Ils vivent dans l'eau."},
            {type:"qcm", q:"Un groupe inclus dans un groupe plus grand : on parle de groupes :", options:["emboîtés","séparés","mélangés","égaux"], answer:0, explain:"Les groupes sont emboîtés les uns dans les autres.", indice:"Comme des boîtes l'une dans l'autre."},
            {type:"vf", q:"Les vertébrés ont une colonne vertébrale.", answer:true, explain:"Oui : c'est leur attribut commun.", indice:"C'est dans leur nom."},
            {type:"qcm", q:"L'aigle, parce qu'il a des plumes, est un :", options:["oiseau","mammifère","poisson","reptile"], answer:0, explain:"Les plumes en font un oiseau.", indice:"Quel groupe a des plumes ?"}
          ]
        }
      ]
    }
  ]
};

/* Exposition en global (chargement file:// classique, hors-ligne).
   Le moteur lit la variable globale CONTENT, exactement comme avant. */
if (typeof window !== "undefined") { window.CONTENT = CONTENT; }
