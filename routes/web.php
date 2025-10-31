<?php

use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

// Ruta principal simplificada - solo muestra welcome.tsx
Route::get('/', function () {
    try {
        return Inertia::render('welcome', [
            'appInfo' => [
                'name' => 'Laravel Desktop',
                'version' => '1.0.0',
                'environment' => 'phpdesktop',
            ]
        ]);
    } catch (Exception $e) {
        // Fallback si hay problemas
        return response()->view('fallback');
    }
})->name('home');
