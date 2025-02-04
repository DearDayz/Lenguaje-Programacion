let imagenes = [];
let documentos = [];

// Manejar el evento del botón "Agregar Imagen"
document.getElementById("agregar_imagen").addEventListener("click", function() {
    const imagenInput = document.getElementById("nueva_imagen");
    if (imagenInput.files.length > 0) {
        const nombreImagen = imagenInput.files[0].name;
        const rutaImagen = 'uploads/' + nombreImagen;

        // Usamos FormData para enviar la imagen al servidor
        const formData = new FormData();
        formData.append('imagen', imagenInput.files[0]);

        // Enviar la imagen al servidor
        fetch('upload_image.php', {
            method: 'POST',
            body: formData
        })
        .then(response => response.json())
        .then(data => {
            if (data.success) {
                // Agregar la ruta de la imagen al array de imagenes
                imagenes.push(rutaImagen);

                // Mostrar la imagen en la lista
                const listaImagenes = document.getElementById("imagenes_lista");
                const li = document.createElement("li");
                li.textContent = nombreImagen;
                listaImagenes.appendChild(li);
            } else {
                alert("Hubo un error al subir la imagen.");
            }
        })
        .catch(error => {
            console.error('Error al subir la imagen:', error);
            alert("Hubo un error al subir la imagen.");
        });

        imagenInput.value = ""; // Limpiar el campo de selección de archivo
    } else {
        alert("Por favor, seleccione una imagen.");
    }
});

// Manejar el evento del botón "Agregar Documento"
document.getElementById("agregar_documento").addEventListener("click", function() {
    const documentoInput = document.getElementById("nuevo_documento");
    if (documentoInput.files.length > 0) {
        const nombreDocumento = documentoInput.files[0].name;
        const rutaDocumento = 'uploads/' + nombreDocumento;

        // Usamos FormData para enviar el documento al servidor
        const formData = new FormData();
        formData.append('documento', documentoInput.files[0]);

        // Enviar el documento al servidor
        fetch('upload_document.php', {
            method: 'POST',
            body: formData
        })
        .then(response => response.json())
        .then(data => {
            if (data.success) {
                // Agregar la ruta del documento al array de documentos
                documentos.push(rutaDocumento);

                // Mostrar el documento en la lista
                const listaDocumentos = document.getElementById("documentos_lista");
                const li = document.createElement("li");
                li.textContent = nombreDocumento;
                listaDocumentos.appendChild(li);
            } else {
                alert("Hubo un error al subir el documento.");
            }
        })
        .catch(error => {
            console.error('Error al subir el documento:', error);
            alert("Hubo un error al subir el documento.");
        });

        documentoInput.value = ""; // Limpiar el campo de selección de archivo
    } else {
        alert("Por favor, seleccione un documento.");
    }
});

// Antes de enviar el formulario, agregar las listas de imágenes y documentos al formulario
document.querySelector("form").addEventListener("submit", function(e) {
    e.preventDefault(); // Prevenir el envío inmediato del formulario

    // Convertir las listas en valores para ser enviados
    const imagenesInput = document.createElement("input");
    imagenesInput.type = "hidden";
    imagenesInput.name = "imagenes";
    imagenesInput.value = JSON.stringify(imagenes); // Se envía la lista de rutas de imágenes
    this.appendChild(imagenesInput);

    const documentosInput = document.createElement("input");
    documentosInput.type = "hidden";
    documentosInput.name = "documentos";
    documentosInput.value = JSON.stringify(documentos); // Se envía la lista de rutas de documentos
    this.appendChild(documentosInput);

    this.submit(); // Ahora envía el formulario
});