#!/usr/bin/env node
/* =========================================================================
   BUILD — Le Royaume du Savoir
   -------------------------------------------------------------------------
   On DÉVELOPPE en modulaire : le moteur est dans Royaume-du-Savoir.html et le
   contenu (les données) dans data/*.js, chargés par des balises <script src>.

   On DISTRIBUE un fichier unique : ce script remplace chaque
   <script src="data/xxx.js"></script> par <script>…contenu du fichier…</script>
   et écrit dist/Royaume-du-Savoir.html — un seul fichier autonome, qui
   fonctionne en double-clic (file://) et hors-ligne.

   Usage : node build.js        (ou double-clic sur build.bat sous Windows)
   Aucune dépendance externe : Node seul suffit.
   ========================================================================= */
"use strict";

const fs = require("fs");
const path = require("path");

const ROOT = __dirname;
const SRC_HTML = path.join(ROOT, "Royaume-du-Savoir.html");
const OUT_DIR = path.join(ROOT, "dist");
const OUT_HTML = path.join(OUT_DIR, "Royaume-du-Savoir.html");

function fail(msg) {
  console.error("\n  [BUILD] ERREUR : " + msg + "\n");
  process.exit(1);
}

if (!fs.existsSync(SRC_HTML)) {
  fail("Fichier introuvable : " + SRC_HTML);
}

let html = fs.readFileSync(SRC_HTML, "utf8");

/* Repère chaque balise <script src="…"></script> (chemin relatif local). */
const TAG_RE = /<script\s+src=["']([^"']+)["']\s*>\s*<\/script>/gi;

let inlinedCount = 0;
const inlinedFiles = [];

html = html.replace(TAG_RE, function (whole, src) {
  // On n'inline que les scripts LOCAUX (pas d'URL http/https///).
  if (/^(https?:)?\/\//i.test(src)) {
    return whole; // laissé tel quel (ressource distante)
  }
  const filePath = path.join(ROOT, src);
  if (!fs.existsSync(filePath)) {
    fail("Script référencé mais introuvable : " + src + " (attendu : " + filePath + ")");
  }
  let code = fs.readFileSync(filePath, "utf8");
  // Sécurité : empêcher qu'une éventuelle séquence </script> dans les données
  // ne ferme prématurément la balise une fois inlinée.
  code = code.replace(/<\/script>/gi, "<\\/script>");
  inlinedCount++;
  inlinedFiles.push(src);
  return "<script>\n/* —— inliné depuis " + src + " (build.js) —— */\n" + code + "\n</script>";
});

if (inlinedCount === 0) {
  console.warn("  [BUILD] Attention : aucune balise <script src> locale trouvée à inliner.");
}

/* Vérification simple : le fichier final doit toujours se terminer proprement. */
if (!/boot\(\);\s*<\/script>\s*<\/body>\s*<\/html>\s*$/i.test(html)) {
  console.warn("  [BUILD] Attention : la fin attendue (boot();</script></body></html>) n'a pas été détectée. À vérifier.");
}

if (!fs.existsSync(OUT_DIR)) {
  fs.mkdirSync(OUT_DIR, { recursive: true });
}
fs.writeFileSync(OUT_HTML, html, "utf8");

console.log("\n  [BUILD] OK");
console.log("  - Source   : Royaume-du-Savoir.html");
console.log("  - Inliné   : " + inlinedFiles.map(function (f) { return f; }).join(", "));
console.log("  - Résultat : dist/Royaume-du-Savoir.html  (" + Math.round(Buffer.byteLength(html, "utf8") / 1024) + " Ko, fichier unique autonome)");
console.log("\n  C'est ce fichier de dist/ que l'on distribue (double-clic, hors-ligne).\n");
