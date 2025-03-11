<?php

use Illuminate\Foundation\Application;
use Illuminate\Foundation\Configuration\Exceptions;
use Illuminate\Foundation\Configuration\Middleware;
use Illuminate\Http\Middleware\HandleCors; // Importa el middleware de CORS

return Application::configure(basePath: dirname(__DIR__))
    ->withRouting(
        web: __DIR__.'/../routes/web.php',
        commands: __DIR__.'/../routes/console.php',
        health: '/up',
    )
    ->withMiddleware(function (Middleware $middleware) {
        // Middleware global (se aplica a todas las rutas)
        $middleware->web([
            HandleCors::class, // Middleware de CORS
            // Otros middlewares globales...
        ]);

        // Middleware de API (se aplica a las rutas de API)
        $middleware->api([
            HandleCors::class, // Middleware de CORS
            // Otros middlewares de API...
        ]);
    })
    ->withExceptions(function (Exceptions $exceptions) {
        //
    })->create();