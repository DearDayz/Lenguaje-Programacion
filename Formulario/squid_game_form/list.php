<?php
// Ruta del archivo JSON
$json_file = 'data/participants.json';

// Leer el contenido del archivo JSON
$participants = json_decode(file_get_contents($json_file), true);

// Verificar si hay participantes
if (!is_array($participants) || empty($participants)) {
    echo "<h2>No hay participantes registrados.</h2>";
    exit;
}
?>

<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Lista de Participantes</title>
    <link rel="stylesheet" href="assets/style.css">
</head>
<body>

<h2>Lista de Participantes</h2>

<table>
    <tr>
        <th>Nro</th>
        <th>Nombre</th>
        <th>Foto de Perfil</th>
        <th>Deuda</th>
        <th>Razón</th>
        <th>Fotos Varias</th>
        <th>Documentos</th>
        <th>Acciones</th>
    </tr>

    <?php foreach ($participants as $p): ?>
    <tr>
        <td><?= $p['id'] ?></td>
        <td><?= htmlspecialchars($p['nombre']) ?></td>
        <td>
            <?php if ($p['foto_perfil']): ?>
                <img src="<?= htmlspecialchars($p['foto_perfil']) ?>" alt="Foto de <?= htmlspecialchars($p['nombre']) ?>" width="100">
            <?php else: ?>
                No disponible
            <?php endif; ?>
        </td>
        <td>$<?= number_format($p['deuda'], 2) ?></td>
        <td><?= htmlspecialchars($p['razon']) ?></td>
        <td>
            <?php if (!empty($p['imagenes'])): ?>
                <!-- Mostrar imágenes adicionales desde el array "imagenes" -->
                <?php foreach ($p['imagenes'] as $imagen): ?>
                    <div>
                        <a href="<?= htmlspecialchars($imagen) ?>" target="_blank">📷 Ver</a><br>
                        <img src="<?= htmlspecialchars($imagen) ?>" alt="Imagen adicional" width="100">
                    </div>
                <?php endforeach; ?>
            <?php else: ?>
                No hay fotos adicionales
            <?php endif; ?>
        </td>
        <td>
            <?php if (!empty($p['documentos'])): ?>
                <!-- Mostrar documentos -->
                <?php foreach ($p['documentos'] as $doc): ?>
                    <div>
                        <a href="<?= htmlspecialchars($doc) ?>" target="_blank">📄 Descargar</a><br>
                    </div>
                <?php endforeach; ?>
            <?php else: ?>
                No hay documentos
            <?php endif; ?>
        </td>
        <td>
            <a href="edit.php?id=<?= $p['id'] ?>">✏️ Editar</a> | 
            <a href="delete.php?id=<?= $p['id'] ?>" onclick="return confirm('¿Seguro que quieres eliminar este participante?');">🗑️ Eliminar</a>
        </td>
    </tr>
    <?php endforeach; ?>
</table>

<a href="index.php">Volver</a>

</body>
</html>
