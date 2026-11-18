@echo off
cd /d "%~dp0"
echo.
echo  Kohler D2C Tracker — Auto-Deploy Watcher
echo.
node watch-and-deploy.js
pause
