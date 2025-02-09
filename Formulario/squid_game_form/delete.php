<?php
// Archivo donde se almacenan los datos de los participantes
$jsonFile = 'data/participants.json';

// Leer los datos del archivo JSON
$participants = json_decode(file_get_contents($jsonFile), true);

// Obtener el ID del participante desde los parámetros de la URL (GET)
$id = $_GET['id'] ?? null;

// Si no se proporciona un ID, redirigir a la lista de participantes
if ($id === null) {
    header("Location: list.php");
    exit;
}

// Filtrar los participantes para eliminar al que tiene el ID proporcionado
$participants = array_filter($participants, function($p) use ($id) {
    return $p['id'] != $id;
});

// Reindexar el array para asegurar que los índices sean consecutivos
$participants = array_values($participants);

// Guardar los datos actualizados en el archivo JSON
file_put_contents($jsonFile, json_encode($participants, JSON_PRETTY_PRINT));

// Verificar si estamos en un entorno de prueba (si $_SERVER['PHP_UNIT'] está configurado)
if (php_sapi_name() != 'cli' && empty($_SERVER['PHP_UNIT'])) {
    // Redirigir a la lista de participantes si no estamos en un entorno de prueba
    header("Location: list.php");
    exit;
}

// Si se está ejecutando en un entorno de prueba, evitar la redirección
// Solo se realiza la modificación en el archivo JSON, no se realiza una redirección
