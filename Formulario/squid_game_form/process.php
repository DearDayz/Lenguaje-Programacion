<?php
// Ruta del archivo JSON
$json_file = 'data/participants.json';

// Verificar si existe el archivo, si no, crearlo vacío
if (!file_exists($json_file)) {
    file_put_contents($json_file, json_encode([]));
}

// Leer el contenido actual del archivo JSON y asegurarse de que sea un array válido
$participants = json_decode(file_get_contents($json_file), true);
if (!is_array($participants)) {
    $participants = [];
}

// Generar un nuevo ID para el participante
$new_id = count($participants) + 1;

// Obtener los datos del formulario
$nombre = $_POST['nombre'];
$deuda = $_POST['deuda'];
$razon = $_POST['razon'];

// Obtener las listas de rutas de imágenes y documentos
$imagenes = isset($_POST['imagenes']) ? json_decode($_POST['imagenes'], true) : [];
$documentos = isset($_POST['documentos']) ? json_decode($_POST['documentos'], true) : [];

// Manejo de la subida de archivos
$upload_dir = 'uploads/';
if (!is_dir($upload_dir)) {
    mkdir($upload_dir, 0777, true);
}

// Guardar foto de perfil
$foto_perfil = null;
if (!empty($_FILES['foto_perfil']['name'])) {
    $foto_perfil = $upload_dir . basename($_FILES['foto_perfil']['name']);
    move_uploaded_file($_FILES['foto_perfil']['tmp_name'], $foto_perfil);
}


// Guardar documentos
if (!empty($_FILES['documentos']['name'][0])) {
    foreach ($_FILES['documentos']['name'] as $key => $name) {
        $path = $upload_dir . basename($name);
        move_uploaded_file($_FILES['documentos']['tmp_name'][$key], $path);
        $documentos[] = $path;
    }
}

// Crear el nuevo participante
$participant = [
    'id' => $new_id,
    'nombre' => $nombre,
    'foto_perfil' => $foto_perfil,
    'deuda' => $deuda,
    'razon' => $razon,
    'imagenes' => $imagenes,
    'documentos' => $documentos,
];

// Agregar al JSON
$participants[] = $participant;
file_put_contents($json_file, json_encode($participants, JSON_PRETTY_PRINT));

// Redirigir al formulario con los campos vacíos
echo "<script>alert('Participante registrado con éxito!'); window.location.href='index.php';</script>";
?>
