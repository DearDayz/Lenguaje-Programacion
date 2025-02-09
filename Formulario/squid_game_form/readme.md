# Formulario de Registro - Juegos del Calamar

Este proyecto es una aplicación en PHP puro que permite gestionar usuarios mediante un formulario de registro. Los usuarios pueden ser agregados con los siguientes campos:

Nombre

Foto de perfil

Edad

Género

País

Correo electrónico

Teléfono

Deuda

Razón de la deuda

Fotos adicionales (subidas mediante un botón de agregar)

Documentos (

.pdf

.doc

.txt
)

Además, en el menú de la aplicación se pueden listar los datos en una tabla, editar y eliminar usuarios.

## Requisitos

Para ejecutar este proyecto, es necesario contar con un entorno de desarrollo local como XAMPP o WAMP.

Instalación y Configuración

Descargar e instalar XAMPP o WAMP

XAMPP

WAMP

Ubicar el proyecto en la carpeta correspondiente

En XAMPP, colocar la carpeta del proyecto dentro de C:\\xampp\\htdocs\\.

En WAMP, colocar la carpeta dentro de C:\\wamp64\\www\\.

Encender los servicios

Abrir XAMPP o WAMP y activar los servicios Apache y MySQL.

Ejecutar el proyecto

Abrir un navegador e ingresar la siguiente URL:

http://localhost/nombre-del-proyecto/index.php

## Características

Formulario de Registro: Permite ingresar usuarios con los campos mencionados.

Carga de Archivos: Se pueden subir fotos de perfil, fotos adicionales y documentos.

Listado de Usuarios: Se pueden visualizar los usuarios registrados en una tabla.

Edición de Usuarios: Modificar la información de un usuario existente.

Eliminación de Usuarios: Borrar un usuario de la base de datos.

## Pruebas Unitarias

El proyecto incluye pruebas unitarias que pueden ejecutarse con PHPUnit dentro de la carpeta test.

Instalación de PHPUnit

Si no tienes PHPUnit instalado, puedes hacerlo con Composer:

composer require --dev phpunit/phpunit

Ejecución de pruebas

Para correr las pruebas unitarias, accede a la carpeta del proyecto y ejecuta:

vendor/bin/phpunit test/

Esto ejecutará todas las pruebas dentro de la carpeta test y mostrará los resultados en consola.