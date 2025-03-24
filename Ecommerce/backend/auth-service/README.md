# Auth Service

Este es el servicio de autenticación para el sistema de ecommerce. Este servicio maneja el registro, inicio de sesión, cierre de sesión y la gestión de usuarios.

## Instalación

1. Clona el repositorio:
    ```bash
    git clone https://github.com/DearDayz/Lenguaje-Programacion.git
    ```

2. Navega a la carpeta del servicio de autenticación:
    ```bash
    cd Ecommerce/backend/auth-service
    ```

3. Instala las dependencias usando Composer:
    ```bash
    composer install
    ```

4. Crea un archivo `.env` a partir del archivo de ejemplo:
    ```bash
    cp .env.example .env
    ```

5. Genera la clave de la aplicación:
    ```bash
    php artisan key:generate
    ```

6. Configura la base de datos en el archivo `.env`.

7. Ejecuta las migraciones para crear las tablas necesarias:
    ```bash
    php artisan migrate
    ```

8. Inicia el servidor de desarrollo:
    ```bash
    php artisan serve
    ```

## Endpoints

### Registro de Usuario

- **URL:** `/api/auth/register`
- **Método:** `POST`
- **Descripción:** Registra un nuevo usuario.
- **Cuerpo de la solicitud:**
    ```json
    {
        "name": "Juan Pérez",
        "email": "juan.perez@example.com",
        "password": "password123",
        "password_confirmation": "password123"
    }
    ```
- **Respuesta exitosa:**
    ```json
    {
        "message": "Usuario registrado correctamente",
        "user": {
            "id": 1,
            "name": "Juan Pérez",
            "email": "juan.perez@example.com",
            "created_at": "2025-03-19T17:02:18.000000Z",
            "updated_at": "2025-03-19T17:02:18.000000Z"
        }
    }
    ```

### Inicio de Sesión

- **URL:** `/api/auth/login`
- **Método:** `POST`
- **Descripción:** Inicia sesión con las credenciales del usuario.
- **Cuerpo de la solicitud:**
    ```json
    {
        "email": "juan.perez@example.com",
        "password": "password123"
    }
    ```
- **Respuesta exitosa:**
    ```json
    {
        "message": "Inicio de sesión exitoso"
    }
    ```

### Cierre de Sesión

- **URL:** `/api/auth/logout`
- **Método:** `POST`
- **Descripción:** Cierra la sesión del usuario.
- **Respuesta exitosa:**
    ```json
    {
        "message": "Sesión cerrada correctamente"
    }
    ```

### Obtener Todos los Usuarios

- **URL:** `/api/auth/users`
- **Método:** `GET`
- **Descripción:** Obtiene una lista de todos los usuarios.
- **Respuesta exitosa:**
    ```json
    {
        "users": [
            {
                "id": 1,
                "name": "Juan Pérez",
                "email": "juan.perez@example.com",
                "telefono": "987654321",
                "direccion": "Nueva Dirección 456",
                "codigo_postal": "54321",
                "ciudad": "Nueva Ciudad",
                "pais": "Nuevo País",
                "informacion_adicional": "Nueva información adicional del usuario",
                "created_at": "2025-03-19T17:02:18.000000Z",
                "updated_at": "2025-03-19T17:02:18.000000Z"
            }
        ]
    }
    ```

### Obtener un Usuario Específico

- **URL:** `/api/auth/users/{id}`
- **Método:** `GET`
- **Descripción:** Obtiene los datos de un usuario específico.
- **Respuesta exitosa:**
    ```json
    {
        "user": {
            "id": 1,
            "name": "Juan Pérez",
            "email": "juan.perez@example.com",
            "telefono": "987654321",
            "direccion": "Nueva Dirección 456",
            "codigo_postal": "54321",
            "ciudad": "Nueva Ciudad",
            "pais": "Nuevo País",
            "informacion_adicional": "Nueva información adicional del usuario",
            "created_at": "2025-03-19T17:02:18.000000Z",
            "updated_at": "2025-03-19T17:02:18.000000Z"
        }
    }
    ```

### Actualizar un Usuario Específico

- **URL:** `/api/auth/users/{id}`
- **Método:** `PUT`
- **Descripción:** Actualiza los datos de un usuario específico.
- **Cuerpo de la solicitud:**
    ```json
    {
        "name": "Juan Pérez Actualizado",
        "email": "juan.perez.actualizado@example.com",
        "telefono": "987654321",
        "direccion": "Nueva Dirección 456",
        "codigo_postal": "54321",
        "ciudad": "Nueva Ciudad",
        "pais": "Nuevo País",
        "informacion_adicional": "Nueva información adicional del usuario"
    }
    ```
- **Respuesta exitosa:**
    ```json
    {
        "message": "Usuario actualizado correctamente",
        "user": {
            "id": 1,
            "name": "Juan Pérez Actualizado",
            "email": "juan.perez.actualizado@example.com",
            "telefono": "987654321",
            "direccion": "Nueva Dirección 456",
            "codigo_postal": "54321",
            "ciudad": "Nueva Ciudad",
            "pais": "Nuevo País",
            "informacion_adicional": "Nueva información adicional del usuario",
            "created_at": "2025-03-19T17:02:18.000000Z",
            "updated_at": "2025-03-19T17:02:18.000000Z"
        }
    }
    ```

## Pruebas

Para probar los endpoints, puedes usar una herramienta como [Postman](https://www.postman.com/). Sigue las instrucciones proporcionadas en cada sección de endpoints para configurar y enviar las solicitudes.

## Contribución

Si deseas contribuir a este proyecto, por favor sigue los siguientes pasos:

1. Haz un fork del repositorio.
2. Crea una nueva rama (`git checkout -b feature/nueva-feature`).
3. Realiza tus cambios y haz commits (`git commit -am 'Agrega nueva feature'`).
4. Sube tus cambios a tu fork (`git push origin feature/nueva-feature`).
5. Abre un Pull Request en el repositorio original.

## Licencia

Este proyecto está licenciado bajo la Licencia MIT. Consulta el archivo `LICENSE` para obtener más detalles.