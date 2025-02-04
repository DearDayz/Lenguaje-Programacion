<?php
// Directorio donde se guardarán las imágenes
$target_dir = "uploads/";

// Obtén el nombre del archivo
$target_file = $target_dir . basename($_FILES["imagen"]["name"]);
$response = [];

// Verifica si el archivo se sube correctamente
if (move_uploaded_file($_FILES["imagen"]["tmp_name"], $target_file)) {
    // Respuesta en formato JSON indicando que la imagen se subió correctamente
    $response["success"] = true;
    echo json_encode($response);
} else {
    // Respuesta en caso de error
    $response["success"] = false;
    $response["message"] = "Hubo un error al subir la imagen.";
    echo json_encode($response);
}
?>