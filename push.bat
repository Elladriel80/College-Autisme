@echo off
chcp 65001 >nul
cd /d "%~dp0"
echo ===============================================
echo   Publication du Royaume du Savoir sur GitHub
echo ===============================================
echo.
git add .
git commit -m "Mise a jour du Royaume du Savoir"
git push
echo.
echo Termine. (Netlify va redeployer automatiquement.)
pause
