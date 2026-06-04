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
          id:"m1", niveau:"5e", title:"Les nombres relatifs",
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
        },
        {
          id:"m14", niveau:"6e", title:"Division euclidienne et divisibilité",
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
          id:"f1", niveau:"6e", title:"Les classes de mots",
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
        },
        {
          id:"f12", niveau:"6e", title:"Les homophones a / à, et / est, son / sont",
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
          id:"h1", niveau:"5e", title:"Le Moyen Âge : la féodalité",
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
        },
        {
          id:"h13", niveau:"6e", title:"La Préhistoire",
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
          id:"s1", niveau:"5e", title:"Physique-Chimie : les états de la matière",
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
        },
        {
          id:"s12", niveau:"6e", title:"Mélanges et solutions",
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
        }
      ]
    }
  ]
};

/* Exposition en global (chargement file:// classique, hors-ligne).
   Le moteur lit la variable globale CONTENT, exactement comme avant. */
if (typeof window !== "undefined") { window.CONTENT = CONTENT; }
