@echo off
title Mi App Laravel Desktop
cls
echo ========================================
echo    Iniciando Mi Aplicacion Laravel
echo ========================================
echo.

REM Detener procesos previos
echo [1/5] Cerrando procesos anteriores...
taskkill /F /IM phpdesktop-chrome.exe >nul 2>&1
taskkill /F /IM php.exe >nul 2>&1
timeout /t 2 /nobreak >nul

REM Limpiar cache
echo [2/5] Preparando Laravel...
php artisan cache:clear >nul 2>&1
php artisan config:clear >nul 2>&1

REM Build assets
echo [3/5] Construyendo aplicacion...
npm run build

REM Iniciar servidor
echo [4/5] Iniciando servidor Laravel...
start /MIN /B "Laravel Server" php artisan serve --port=8888 --quiet

REM Esperar servidor
echo [5/5] Esperando servidor y abriendo PHPDesktop...
timeout /t 6 /nobreak >nul

REM Verificar servidor
:check_server
netstat -an | findstr :8888 >nul
if %errorlevel%==0 (
    echo   ✓ Servidor Laravel activo
    goto start_phpdesktop
) else (
    echo   ⏳ Esperando servidor...
    timeout /t 2 /nobreak >nul
    goto check_server
)

:start_phpdesktop
REM Cambiar al directorio base de PHPDesktop
cd /d "C:\Users\LuissxD\Documents\PHPDesktop\phpdesktop-chrome-130.1-php-8.3"

REM Iniciar PHPDesktop
echo   ✓ Abriendo aplicacion de escritorio...
start "" phpdesktop-chrome.exe

echo.
echo ========================================
echo   Aplicacion iniciada exitosamente!
echo ========================================
echo   Si no se abre, verifica el firewall
echo   Presiona cualquier tecla para cerrar
pause >nul