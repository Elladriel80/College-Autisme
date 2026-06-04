@echo off
REM ============================================================
REM  Build du fichier unique distribuable (Le Royaume du Savoir)
REM  Double-cliquez ce fichier, ou lancez "node build.js".
REM  Resultat : dist\Royaume-du-Savoir.html
REM ============================================================
cd /d "%~dp0"
node build.js
echo.
pause
