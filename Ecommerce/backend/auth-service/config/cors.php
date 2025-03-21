<?php

return [
    /*
    |--------------------------------------------------------------------------
    | Cross-Origin Resource Sharing (CORS) Configuration
    |--------------------------------------------------------------------------
    |
    | Aquí puedes configurar las opciones de CORS para tu aplicación.
    | Esto determina qué orígenes, métodos, cabeceras, etc., están permitidos
    | al realizar solicitudes entre dominios.
    |
    */

    'paths' => ['api/*'], // Rutas a las que se aplicará CORS

    /*
    |--------------------------------------------------------------------------
    | Métodos permitidos
    |--------------------------------------------------------------------------
    |
    | Especifica los métodos HTTP permitidos en las solicitudes CORS.
    | Usa ['*'] para permitir todos los métodos.
    |
    */
    'allowed_methods' => ['*'], // Métodos permitidos (GET, POST, PUT, DELETE, etc.)

    /*
    |--------------------------------------------------------------------------
    | Orígenes permitidos
    |--------------------------------------------------------------------------
    |
    | Especifica los orígenes (dominios) que pueden realizar solicitudes CORS.
    | Usa ['*'] para permitir todos los orígenes, o define dominios específicos.
    |
    */
    'allowed_origins' => ['http://localhost:8080'], // Orígenes permitidos

    /*
    |--------------------------------------------------------------------------
    | Patrones de orígenes permitidos
    |--------------------------------------------------------------------------
    |
    | Si prefieres usar patrones de expresiones regulares para definir orígenes
    | permitidos, puedes hacerlo aquí. Esto es útil para permitir múltiples
    | subdominios o patrones complejos.
    |
    */
    'allowed_origins_patterns' => [],

    /*
    |--------------------------------------------------------------------------
    | Cabeceras permitidas
    |--------------------------------------------------------------------------
    |
    | Especifica las cabeceras HTTP que pueden ser enviadas en las solicitudes CORS.
    | Usa ['*'] para permitir todas las cabeceras.
    |
    */
    'allowed_headers' => ['*'], // Cabeceras permitidas

    /*
    |--------------------------------------------------------------------------
    | Cabeceras expuestas
    |--------------------------------------------------------------------------
    |
    | Especifica las cabeceras que pueden ser expuestas en la respuesta CORS.
    | Esto es útil si necesitas que el frontend acceda a ciertas cabeceras.
    |
    */
    'exposed_headers' => [],

    /*
    |--------------------------------------------------------------------------
    | Tiempo máximo de caché (en segundos)
    |--------------------------------------------------------------------------
    |
    | Especifica cuánto tiempo (en segundos) el navegador puede almacenar en caché
    | la respuesta de una solicitud CORS preflight (OPTIONS).
    |
    */
    'max_age' => 0,

    /*
    |--------------------------------------------------------------------------
    | Soporte para credenciales
    |--------------------------------------------------------------------------
    |
    | Indica si las solicitudes CORS pueden incluir credenciales (cookies,
    | cabeceras de autenticación, etc.). Cambia a `true` si necesitas soportar
    | credenciales.
    |
    */
    'supports_credentials' => false,
];