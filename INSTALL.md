# ⚡ Guía de Instalación Rápida

## 🚀 Clonar y Ejecutar en 3 Pasos

### 1️⃣ **Clonar el Repositorio**

```bash
git clone https://github.com/tu-usuario/laravel-desktop-app.git
cd laravel-desktop-app
```

### 2️⃣ **Instalar Dependencias**

```bash
# PHP Dependencies
composer install

# Node Dependencies  
npm install

# Configurar entorno
cp .env.example .env
php artisan key:generate
```

### 3️⃣ **Ejecutar la Aplicación**

#### 🌐 **Modo Web (Desarrollo)**
```bash
# Opción A: Doble clic
DESARROLLO.bat

# Opción B: Manual
npm run dev
php artisan serve --port=8888
```

#### 🖥️ **Modo Desktop (PHPDesktop)**
```bash
# Opción A: Doble clic
PHPDESKTOP.bat

# Opción B: Manual
npm run build
php artisan serve --port=8888
# Luego abrir PHPDesktop
```

---

## 📋 **Prerrequisitos**

- ✅ **PHP 8.3+** ([Descargar](https://www.php.net/downloads))
- ✅ **Composer** ([Descargar](https://getcomposer.org/download/))
- ✅ **Node.js 18+** ([Descargar](https://nodejs.org/))
- ✅ **Git** ([Descargar](https://git-scm.com/downloads))

---

## 🐛 **Problemas Comunes**

### ❌ Error: `composer command not found`
```bash
# Windows: Instalar Composer y reiniciar terminal
# macOS: brew install composer
# Linux: sudo apt install composer
```

### ❌ Error: `npm command not found`
```bash
# Instalar Node.js desde nodejs.org
# Reiniciar terminal después de instalación
```

### ❌ Error: `php artisan key:generate failed`
```bash
# Verificar que .env existe
cp .env.example .env
php artisan key:generate
```

---

## 🔧 **Configuración de PHPDesktop**

Si usas PHPDesktop, asegúrate de tener la estructura correcta:

```
phpdesktop-chrome-130.1-php-8.3/
├── phpdesktop-chrome.exe
├── settings.json
└── www/
    └── tu-proyecto/ (este repositorio)
```

---

¡Listo! 🎉 Tu aplicación debería estar funcionando.