<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Registro Juegos del Calamar</title>
    <link rel="stylesheet" href="assets/style.css">
</head>
<body>
    <h2>Formulario de Participación - Juegos del Calamar</h2>
    <form action="process.php" method="POST" enctype="multipart/form-data">
        <label for="nombre">Nombre:</label>
        <input type="text" name="nombre" required>
        <br><br>
        
        <label for="foto_perfil">Foto de perfil:</label>
        <input type="file" name="foto_perfil" accept="image/*" required>
        <br><br>
        
        <!-- Aquí va el nuevo botón para agregar imágenes -->
        <label for="nueva_imagen">Agregar imagen:</label>
        <input type="file" id="nueva_imagen" accept="image/*">
        <button type="button" id="agregar_imagen">Agregar Imagen</button>
        <br><br>
        
        <!-- Lista para mostrar las rutas de las imágenes agregadas -->
        <ul id="imagenes_lista"></ul>
        
        <!-- Agregar documentos -->
        <label for="nuevo_documento">Agregar documento:</label>
        <input type="file" id="nuevo_documento" accept=".pdf,.doc,.txt">
        <button type="button" id="agregar_documento">Agregar Documento</button>
        <br><br>
        
        <!-- Lista para mostrar las rutas de los documentos agregados -->
        <ul id="documentos_lista"></ul>

        <label for="deuda">Deuda ($):</label>
        <input type="number" name="deuda" required>
        <br><br>
        
        <label for="razon">Razón por la que participa:</label>
        <textarea name="razon" required></textarea>
        <br><br>
        
        <button type="submit">Registrar Participante</button>
    </form>
    <a href="index.php">Volver</a>

    <script src="assets/scripts.js"></script>
</body>
</html>
