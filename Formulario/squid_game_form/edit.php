<?php
// Definir la ruta del archivo JSON
$jsonFile = 'data/participants.json';

// Verificar si existe el archivo JSON
if (!file_exists($jsonFile)) {
    die("No hay participantes registrados.");
}

// Obtener el ID del participante a editar
$id = isset($_GET['id']) ? $_GET['id'] : null;
if (!$id) {
    die("ID no proporcionado.");
}

// Cargar los participantes
$participants = json_decode(file_get_contents($jsonFile), true);

// Buscar al participante
$index = array_search($id, array_column($participants, 'id'));

if ($index === false) {
    die("Participante no encontrado.");
}

// Obtener los datos actuales del participante
$participant = $participants[$index];

// Si el formulario se envió, actualizar los datos
if ($_SERVER['REQUEST_METHOD'] == 'POST') {
    // Actualizar los datos generales
    $participants[$index]['nombre'] = $_POST['nombre'];
    $participants[$index]['deuda'] = $_POST['deuda'];
    $participants[$index]['razon'] = $_POST['razon'];

    // Manejar actualización de foto de perfil
    if (!empty($_FILES['foto_perfil']['name'])) {
        $fotoPerfil = 'uploads/' . time() . '_' . $_FILES['foto_perfil']['name'];
        move_uploaded_file($_FILES['foto_perfil']['tmp_name'], $fotoPerfil);
        $participants[$index]['foto_perfil'] = $fotoPerfil;
    }

    // Eliminar imágenes seleccionadas
    if (!empty($_POST['eliminar_imagenes'])) {
        foreach ($_POST['eliminar_imagenes'] as $imagen) {
            // Eliminar archivo del servidor
            if (file_exists($imagen)) {
                unlink($imagen);
            }
            // Eliminar la imagen del array
            $participants[$index]['imagenes'] = array_filter($participants[$index]['imagenes'], fn($item) => $item !== $imagen);
        }
    }

    // Manejar actualización de imágenes
    if (!empty($_FILES['imagenes']['name'][0])) {
        $imagenes = [];
        foreach ($_FILES['imagenes']['name'] as $key => $name) {
            $path = 'uploads/' . time() . '_' . $name;
            move_uploaded_file($_FILES['imagenes']['tmp_name'][$key], $path);
            $imagenes[] = $path;
        }
        $participants[$index]['imagenes'] = array_merge($participants[$index]['imagenes'], $imagenes);
    }

    // Eliminar documentos seleccionados
    if (!empty($_POST['eliminar_documentos'])) {
        foreach ($_POST['eliminar_documentos'] as $doc) {
            // Eliminar archivo del servidor
            if (file_exists($doc)) {
                unlink($doc);
            }
            // Eliminar el documento del array
            $participants[$index]['documentos'] = array_filter($participants[$index]['documentos'], fn($item) => $item !== $doc);
        }
    }

    // Manejar actualización de documentos
    if (!empty($_FILES['documentos']['name'][0])) {
        $documentos = [];
        foreach ($_FILES['documentos']['name'] as $key => $name) {
            $path = 'uploads/' . time() . '_' . $name;
            move_uploaded_file($_FILES['documentos']['tmp_name'][$key], $path);
            $documentos[] = $path;
        }
        $participants[$index]['documentos'] = array_merge($participants[$index]['documentos'], $documentos);
    }

    // Guardar los cambios en el JSON
    file_put_contents($jsonFile, json_encode($participants, JSON_PRETTY_PRINT));

    echo "Participante actualizado. <a href='list.php'>Volver a la lista</a>";
    exit;
}

?>

<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Editar Participante</title>
</head>
<body>
    <h2>Editar Participante</h2>
    <form action="" method="POST" enctype="multipart/form-data">
        <label>Nombre completo:</label>
        <input type="text" name="nombre" value="<?= $participant['nombre'] ?>" required><br><br>

        <label>Foto de perfil actual:</label><br>
        <img src="<?= $participant['foto_perfil'] ?>" width="100"><br>
        <label>Cambiar foto de perfil:</label>
        <input type="file" name="foto_perfil" accept="image/*"><br><br>

        <label>Imágenes actuales:</label><br>
        <?php foreach ($participant['imagenes'] as $imagen) : ?>
            <div>
                <img src="<?= $imagen ?>" width="100">
                <label>Eliminar</label>
                <input type="checkbox" name="eliminar_imagenes[]" value="<?= $imagen ?>">
            </div>
        <?php endforeach; ?>
        <br>

        <label>Deuda ($):</label>
        <input type="number" name="deuda" value="<?= $participant['deuda'] ?>" required><br><br>

        <label>Razón por la que participa:</label>
        <textarea name="razon" required><?= $participant['razon'] ?></textarea><br><br>

        <label>Documentos actuales:</label><br>
        <?php foreach ($participant['documentos'] as $doc) : ?>
            <div>
                <a href="<?= $doc ?>" target="_blank">Ver documento</a>
                <label>Eliminar</label>
                <input type="checkbox" name="eliminar_documentos[]" value="<?= $doc ?>">
            </div>
        <?php endforeach; ?>
        <br>

        <input type="submit" value="Actualizar">
    </form>
</body>
</html>
