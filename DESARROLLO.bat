@echo off
title DESARROLLO WEB - Laravel + React + Hot Reload
cls

echo.
echo ========================================
echo    MODO DESARROLLO WEB - HOT RELOAD
echo ========================================
echo.

REM 1. DETENER TODO
echo [1/4] Cerrando procesos anteriores...
taskkill /F /IM php.exe >nul 2>&1
taskkill /F /IM node.exe >nul 2>&1
taskkill /F /IM chrome.exe >nul 2>&1
timeout /t 2 /nobreak >nul

REM 2. LIMPIAR CACHE
echo [2/4] Limpiando cache de Laravel...
php artisan cache:clear >nul 2>&1
php artisan config:clear >nul 2>&1
php artisan route:clear >nul 2>&1
php artisan view:clear >nul 2>&1

REM 3. INICIAR SERVIDORES
echo [3/4] Iniciando servidores de desarrollo...
echo    ^> Vite Dev Server (Hot Reload)...
start /MIN "Vite-HotReload" cmd /c "npm run dev"

timeout /t 3 /nobreak >nul

echo    ^> Laravel Server (Puerto 8888)...
start /MIN "Laravel-Server" cmd /c "php artisan serve --port=8888"

timeout /t 5 /nobreak >nul

REM 4. ABRIR NAVEGADOR
echo [4/4] Abriendo navegador web...
start http://127.0.0.1:8888

echo.
echo ========================================
echo   DESARROLLO ACTIVO
echo ========================================
echo   URL: http://127.0.0.1:8888
echo   Hot Reload: ACTIVADO
echo   Archivo: resources\js\pages\welcome.tsx
echo.
echo   Los cambios se aplicaran automaticamente
echo   NO CERRAR esta ventana para mantener servidores activos
echo ========================================
echo.

REM Mantener ventana abierta y mostrar estado
:loop
timeout /t 10 /nobreak >nul
echo %date% %time% - Servidores activos...
goto loop