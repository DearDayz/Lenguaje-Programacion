<?php
$upload_dir = 'uploads/';
$allowed_extensions = ['pdf', 'doc', 'txt'];

// Comprobar si el archivo fue enviado
if (isset($_FILES['documento'])) {
    $documento = $_FILES['documento'];
    
    // Obtener la extensión del archivo
    $extension = pathinfo($documento['name'], PATHINFO_EXTENSION);
    
    // Verificar que el archivo tenga una extensión válida
    if (in_array(strtolower($extension), $allowed_extensions)) {
        // Usar el nombre original del archivo
        $nombre_documento = $documento['name'];
        
        // Mover el archivo a la carpeta 'uploads/'
        if (move_uploaded_file($documento['tmp_name'], $upload_dir . $nombre_documento)) {
            // Si la carga fue exitosa, devolver respuesta JSON
            echo json_encode(['success' => true, 'nombre' => $nombre_documento]);
        } else {
            // Si hubo un error al mover el archivo
            echo json_encode(['success' => false, 'message' => 'Error al guardar el archivo']);
        }
    } else {
        // Si el archivo tiene una extensión no permitida
        echo json_encode(['success' => false, 'message' => 'Extensión de archivo no permitida']);
    }
} else {
    echo json_encode(['success' => false, 'message' => 'No se ha enviado ningún archivo']);
}
?>
