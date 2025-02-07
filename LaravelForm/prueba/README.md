<p align="center"><a href="https://laravel.com" target="_blank"><img src="https://raw.githubusercontent.com/laravel/art/master/logo-lockup/5%20SVG/2%20CMYK/1%20Full%20Color/laravel-logolockup-cmyk-red.svg" width="400" alt="Laravel Logo"></a></p>

<p align="center">
<a href="https://github.com/laravel/framework/actions"><img src="https://github.com/laravel/framework/workflows/tests/badge.svg" alt="Build Status"></a>
<a href="https://packagist.org/packages/laravel/framework"><img src="https://img.shields.io/packagist/dt/laravel/framework" alt="Total Downloads"></a>
<a href="https://packagist.org/packages/laravel/framework"><img src="https://img.shields.io/packagist/v/laravel/framework" alt="Latest Stable Version"></a>
<a href="https://packagist.org/packages/laravel/framework"><img src="https://img.shields.io/packagist/l/laravel/framework" alt="License"></a>
</p>

# Aplicación de Gestión de Usuarios en Laravel con formulario

¡Bienvenido a este proyecto de gestión de usuarios en Laravel! Esta aplicación te permite crear, editar y eliminar usuarios, además de subir una imagen de perfil y un archivo adjunto. Los datos se almacenan en un archivo JSON, lo que hace que sea fácil de entender y modificar.

## Características Principales

- **Crear usuarios**: Registra nuevos usuarios con nombre, correo electrónico, imagen de perfil y un archivo adjunto.
- **Editar usuarios**: Modifica la información de un usuario existente.
- **Eliminar usuarios**: Borra un usuario de la lista.
- **Almacenamiento en JSON**: Los datos de los usuarios se guardan en un archivo JSON (`storage/app/users.json`).
- **Subida de archivos**: Permite subir una imagen de perfil y cualquier tipo de archivo.

## Requisitos Previos

Antes de comenzar, asegúrate de tener instalado lo siguiente:

- [PHP](https://www.php.net/) (versión 8.0 o superior)
- [Composer](https://getcomposer.org/) (gestor de dependencias de PHP)
- [Laravel](https://laravel.com/) (framework PHP)
- Un servidor web como [XAMPP](https://www.apachefriends.org/es/index.html) o [Laravel Homestead](https://laravel.com/docs/homestead) (opcional, ya que Laravel incluye un servidor de desarrollo integrado).

## Instalación

Sigue estos pasos para configurar el proyecto en tu máquina local:

1. **Clona el repositorio**:
   ```bash
   git clone https://github.com/tu-usuario/tu-repositorio.git
   cd tu-repositorio

2. **Copia la carpeta LaravelForm y pegala en la ruta donde se almacenan los proyectos de tu servidor web, ejepmlo(C:\xampp\htdocs)**:

3. **Instala las dependencias de Composer**:

    ```bash
    composer install
Copia el archivo .env.example a .env:

4. **Configura tu base de datos creada en tu servidor web ejemplo(XAMPP con MySQL)**:
    ```bash
    php artisan key:generate
Configura el almacenamiento de archivos:
Crea un enlace simbólico para acceder a los archivos subidos desde el navegador:

    ```bash
    php artisan storage:link
Inicia el servidor de desarrollo:

    ```bash
    php artisan serve
Esto iniciará el servidor en http://127.0.0.1:8000

## Uso
1. Lista de Usuarios
Visita la siguiente URL para ver la lista de usuarios:

Copy
http://127.0.0.1:8000/users
2. Crear un Nuevo Usuario
Visita la siguiente URL para acceder al formulario de creación de usuarios:

Copy
http://127.0.0.1:8000/users/create
Completa el formulario con los datos del usuario y haz clic en Guardar.

3. Editar un Usuario
En la lista de usuarios, haz clic en el botón Editar de un usuario. Modifica los campos del formulario y haz clic en Actualizar.

4. Eliminar un Usuario
En la lista de usuarios, haz clic en el botón Eliminar de un usuario. Confirma la eliminación.

Estructura del Proyecto
routes/web.php: Define las rutas de la aplicación.

app/Http/Controllers/UserController.php: Controlador que maneja la lógica de la aplicación.

resources/views/users/: Contiene las vistas (páginas HTML) de la aplicación.

storage/app/users.json: Archivo JSON donde se almacenan los datos de los usuarios.

storage/app/public/: Carpeta donde se guardan los archivos subidos (imágenes y archivos).

## Tecnologías Utilizadas

Laravel: Framework PHP para el desarrollo web.

Tailwind CSS: Framework de CSS para el diseño de las vistas.

JSON: Formato de almacenamiento de datos.

Licencia
Este proyecto está bajo la licencia MIT. Consulta el archivo LICENSE para más detalles.

## About Laravel

Laravel is a web application framework with expressive, elegant syntax. We believe development must be an enjoyable and creative experience to be truly fulfilling. Laravel takes the pain out of development by easing common tasks used in many web projects, such as:

- [Simple, fast routing engine](https://laravel.com/docs/routing).
- [Powerful dependency injection container](https://laravel.com/docs/container).
- Multiple back-ends for [session](https://laravel.com/docs/session) and [cache](https://laravel.com/docs/cache) storage.
- Expressive, intuitive [database ORM](https://laravel.com/docs/eloquent).
- Database agnostic [schema migrations](https://laravel.com/docs/migrations).
- [Robust background job processing](https://laravel.com/docs/queues).
- [Real-time event broadcasting](https://laravel.com/docs/broadcasting).

Laravel is accessible, powerful, and provides tools required for large, robust applications.

## Learning Laravel

Laravel has the most extensive and thorough [documentation](https://laravel.com/docs) and video tutorial library of all modern web application frameworks, making it a breeze to get started with the framework.

You may also try the [Laravel Bootcamp](https://bootcamp.laravel.com), where you will be guided through building a modern Laravel application from scratch.

If you don't feel like reading, [Laracasts](https://laracasts.com) can help. Laracasts contains thousands of video tutorials on a range of topics including Laravel, modern PHP, unit testing, and JavaScript. Boost your skills by digging into our comprehensive video library.

## Laravel Sponsors

We would like to extend our thanks to the following sponsors for funding Laravel development. If you are interested in becoming a sponsor, please visit the [Laravel Partners program](https://partners.laravel.com).

### Premium Partners

- **[Vehikl](https://vehikl.com/)**
- **[Tighten Co.](https://tighten.co)**
- **[WebReinvent](https://webreinvent.com/)**
- **[Kirschbaum Development Group](https://kirschbaumdevelopment.com)**
- **[64 Robots](https://64robots.com)**
- **[Curotec](https://www.curotec.com/services/technologies/laravel/)**
- **[Cyber-Duck](https://cyber-duck.co.uk)**
- **[DevSquad](https://devsquad.com/hire-laravel-developers)**
- **[Jump24](https://jump24.co.uk)**
- **[Redberry](https://redberry.international/laravel/)**
- **[Active Logic](https://activelogic.com)**
- **[byte5](https://byte5.de)**
- **[OP.GG](https://op.gg)**

## Contributing

Thank you for considering contributing to the Laravel framework! The contribution guide can be found in the [Laravel documentation](https://laravel.com/docs/contributions).

## Code of Conduct

In order to ensure that the Laravel community is welcoming to all, please review and abide by the [Code of Conduct](https://laravel.com/docs/contributions#code-of-conduct).

## Security Vulnerabilities

If you discover a security vulnerability within Laravel, please send an e-mail to Taylor Otwell via [taylor@laravel.com](mailto:taylor@laravel.com). All security vulnerabilities will be promptly addressed.

## License

The Laravel framework is open-sourced software licensed under the [MIT license](https://opensource.org/licenses/MIT).
