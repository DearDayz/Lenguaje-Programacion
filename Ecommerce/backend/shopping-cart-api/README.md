# Shopping Cart API

Este proyecto es una API de carrito de compras creada con Laravel. Proporciona endpoints para gestionar productos y un carrito de compras, incluyendo operaciones CRUD (Crear, Leer, Actualizar, Eliminar).

## Requisitos

- PHP >= 7.4
- Composer
- MySQL

## Instalación

1. Clona el repositorio:
    ```bash
    git clone <URL_DEL_REPOSITORIO>
    cd shopping-cart-api
    ```

2. Instala las dependencias de Composer:
    ```bash
    composer install
    ```

3. Configura el archivo `.env`:
    ```bash
    cp .env.example .env
    ```
    Edita el archivo `.env` con las configuraciones de tu base de datos:
    ```dotenv
    DB_CONNECTION=mysql
    DB_HOST=127.0.0.1
    DB_PORT=3306
    DB_DATABASE=shopping_cart
    DB_USERNAME=root
    DB_PASSWORD=secret
    ```

4. Genera la clave de la aplicación:
    ```bash
    php artisan key:generate
    ```

5. Ejecuta las migraciones de la base de datos:
    ```bash
    php artisan migrate
    ```

6. Inicia el servidor de desarrollo:
    ```bash
    php artisan serve
    ```
    La API estará disponible en `http://localhost:8000`.

## Endpoints

### Productos

#### Crear un Producto
- **URL**: `/api/products`
- **Método**: `POST`
- **Body**:
  ```json
  {
      "name": "Product 1",
      "description": "Description for Product 1",
      "price": 10.99
  }
  ```

#### Obtener Todos los Productos
- **URL**: `/api/products`
- **Método**: `GET`

#### Obtener un Producto
- **URL**: `/api/products/{id}`
- **Método**: `GET`

#### Actualizar un Producto
- **URL**: `/api/products/{id}`
- **Método**: `PUT`
- **Body**:
  ```json
  {
      "name": "Updated Product",
      "description": "Updated description",
      "price": 12.99
  }
  ```

#### Eliminar un Producto
- **URL**: `/api/products/{id}`
- **Método**: `DELETE`

### Carrito de Compras

#### Crear un Carrito con Artículos
- **URL**: `/api/carts`
- **Método**: `POST`
- **Body**:
  ```json
  {
      "items": [
          {
              "product_id": 1,
              "quantity": 2
          }
      ]
  }
  ```

#### Obtener Todos los Carritos
- **URL**: `/api/carts`
- **Método**: `GET`

#### Obtener un Carrito
- **URL**: `/api/carts/{id}`
- **Método**: `GET`

#### Actualizar un Carrito
- **URL**: `/api/carts/{id}`
- **Método**: `PUT`
- **Body**:
  ```json
  {
      "items": [
          {
              "product_id": 1,
              "quantity": 3
          }
      ]
  }
  ```

#### Eliminar un Carrito
- **URL**: `/api/carts/{id}`
- **Método**: `DELETE`

## Prueba de la API

Puedes usar herramientas como **Postman** o **Insomnia** para probar los endpoints de la API. Aquí tienes algunos ejemplos de cómo consumir la API:

### Crear un Producto
1. Abre Postman.
2. Selecciona `POST` y la URL `http://localhost:8000/api/products`.
3. En la pestaña `Body`, selecciona `raw` y `JSON`.
4. Añade el siguiente JSON:
    ```json
    {
        "name": "Product 1",
        "description": "Description for Product 1",
        "price": 10.99
    }
    ```
5. Haz clic en `Send`.

### Obtener Todos los Productos
1. Abre Postman.
2. Selecciona `GET` y la URL `http://localhost:8000/api/products`.
3. Haz clic en `Send`.

### Crear un Carrito
1. Abre Postman.
2. Selecciona `POST` y la URL `http://localhost:8000/api/carts`.
3. En la pestaña `Body`, selecciona `raw` y `JSON`.
4. Añade el siguiente JSON:
    ```json
    {
        "items": [
            {
                "product_id": 1,
                "quantity": 2
            }
        ]
    }
    ```
5. Haz clic en `Send`.

## Contribuciones

¡Las contribuciones son bienvenidas! Si encuentras algún problema o tienes alguna mejora, por favor abre un issue o un pull request.

## Licencia

Este proyecto está licenciado bajo la Licencia MIT - ver el archivo [LICENSE](LICENSE) para más detalles.