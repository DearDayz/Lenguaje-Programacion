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

<div class="logo-container" >
        <img src="assets/titulo1.png" alt="Logo de la Serie" class="logo" style="width: 20%; height: 20%;margin-bottom: 0;">
</div>

<table>
    <tr>
        <th>Nro</th>
        <th>Nombre</th>
        <th>Foto de Perfil</th>
        <th>Edad</th>
        <th>Género</th>
        <th>País</th>
        <th>Correo</th>
        <th>Teléfono</th>
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
        <td><?= $p['edad'] ?></td>
        <td><?= $p['genero'] ?></td>
        <td><?= $p['pais'] ?></td>
        <td><?= $p['correo'] ?></td>
        <td><?= $p['telefono'] ?></td>
        <td>$<?= number_format($p['deuda'], 2) ?></td>
        <td><?= htmlspecialchars($p['razon']) ?></td>
        <td>
            <?php if (!empty($p['imagenes'])): ?>
                <!-- Mostrar ícono de imagen -->
                <?php foreach ($p['imagenes'] as $imagen): ?>
                    <div>
                        <a href="<?= htmlspecialchars($imagen) ?>" target="_blank">
                            <img src="assets/foto_icono.png" alt="Ver Foto" class="icono-foto">
                        </a>
                    </div>
                <?php endforeach; ?>
            <?php else: ?>
                No hay fotos adicionales
            <?php endif; ?>
        </td>
        <td>
            <?php if (!empty($p['documentos'])): ?>
                <!-- Mostrar ícono de documento -->
                <?php foreach ($p['documentos'] as $doc): ?>
                    <div>
                        <a href="<?= htmlspecialchars($doc) ?>" target="_blank">
                            <img src="assets/docu_icono.png" alt="Ver Documento" class="icono-doc">
                        </a>
                    </div>
                <?php endforeach; ?>
            <?php else: ?>
                No hay documentos
            <?php endif; ?>
        </td>

        <td>
            <a href="edit.php?id=<?= $p['id'] ?>"><img src="assets/editar.png" alt="Editar"></a> | 
            <a href="delete.php?id=<?= $p['id'] ?>" onclick="return confirm('¿Seguro que quieres eliminar este participante?');"><img src="assets/borrar.png" alt="Borrar"></a>
        </td>
        
    </tr>
    <?php endforeach; ?>
</table>

<a href="index.php" class="volver-btn">
    <img src="assets/icono-volver.png" alt="Volver" class="icono-volver">
</a>

</body>
</html>
