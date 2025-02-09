<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Registro Juegos del Calamar</title>
    <link rel="stylesheet" href="assets/style.css">
</head>
<body>
    <div class="logo-container">
        <img src="assets/titulo.png" alt="Logo de la Serie" class="logo">
    </div>
    <form action="process.php" method="POST" enctype="multipart/form-data" id="registroForm">
        <!-- Nombre -->
        <label for="nombre">Nombre:</label>
        <input type="text" name="nombre" id="nombre" required minlength="3" maxlength="50">
        <br><br>

        <!-- Foto de perfil -->
        <label for="foto_perfil">Foto de perfil:</label>
        <input type="file" name="foto_perfil" id="foto_perfil" accept="image/*" required>
        <br><br>

        <!-- Edad -->
        <label for="edad">Edad:</label>
        <input type="number" name="edad" id="edad" required min="18" max="100">
        <br><br>

        <!-- Género -->
        <label for="genero">Género:</label>
        <select name="genero" id="genero" required>
            <option value="">Seleccione...</option>
            <option value="M">Masculino</option>
            <option value="F">Femenino</option>
            <option value="O">Otro</option>
        </select>
        <br><br>

        <!-- País -->
        <label for="pais">País:</label>
        <input type="text" name="pais" id="pais" required>
        <br><br>

        <label for="correo">Correo:</label>
        <input type="email" name="correo" id="correo" required>

        <!-- Teléfono (Venezolano) -->
        <label for="telefono">Teléfono:</label>
        <input type="tel" name="telefono" id="telefono" required pattern="^(0414|0424|0412|0416|0426)[0-9]{7}$" title="Ingrese un número de teléfono venezolano válido (ej: 04141234567)">
        <br><br>

        <!-- Botón para agregar imágenes -->
        <label for="nueva_imagen">Agregar imagen:</label>
        <input type="file" id="nueva_imagen" accept="image/*">
        <button type="button" id="agregar_imagen">Agregar Imagen</button>
        <br><br>

        <!-- Lista para mostrar las rutas de las imágenes agregadas -->
        <ul id="imagenes_lista"></ul>

        <!-- Botón para agregar documentos -->
        <label for="nuevo_documento">Agregar documento:</label>
        <input type="file" id="nuevo_documento" accept=".pdf,.doc,.txt">
        <button type="button" id="agregar_documento">Agregar Documento</button>
        <br><br>

        <!-- Lista para mostrar las rutas de los documentos agregados -->
        <ul id="documentos_lista"></ul>

        <!-- Deuda -->
        <label for="deuda">Deuda ($):</label>
        <input type="number" name="deuda" id="deuda" required min="0">
        <br><br>

        <!-- Razón -->
        <label for="razon">Razón por la que participa:</label>
        <textarea name="razon" id="razon" required minlength="10" maxlength="500"></textarea>
        <br><br>

        <!-- Botón de registro -->
        <button type="submit">Registrar Participante</button>
    </form>
    <a href="index.php" class="volver-btn">
        <img src="assets/icono-volver.png" alt="Volver" class="icono-volver">
    </a>

    <!-- Script de validaciones -->
    <script src="assets/scripts.js"></script>
</body>
</html>