<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;
use Inertia\Response;

class HomeController extends Controller
{
    /**
     * Muestra la página principal de la aplicación de escritorio
     */
    public function index(): Response
    {
        return Inertia::render('Welcome', [
            'appInfo' => [
                'name' => config('app.name'),
                'version' => '1.0.0',
                'environment' => app()->environment(),
            ]
        ]);
    }

    /**
     * Maneja las acciones rápidas via AJAX
     */
    public function quickAction(Request $request)
    {
        $action = $request->input('action');
        
        return response()->json([
            'message' => "Acción '$action' ejecutada correctamente",
            'success' => true
        ]);
    }
}