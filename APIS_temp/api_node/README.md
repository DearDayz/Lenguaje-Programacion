# API de Ganadores de la Copa del Mundo

Esta es una API simple construida con Node.js y Express que permite consultar los ganadores de la Copa del Mundo por su ID. La API devuelve información sobre el país ganador, el año, el país anfitrión y una imagen de la bandera del país ganador.

## Requisitos Previos

- Node.js instalado en tu máquina.
- NPM (Node Package Manager) instalado, que viene con Node.js.

## Instalación

1. Clona este repositorio en tu máquina local.
2. Navega a la carpeta `backend` del proyecto.

cd backend

Instala las dependencias necesarias ejecutando:
npm install

## Ejecución
Para ejecutar la API, utiliza el siguiente comando en la carpeta backend:
node index.js
La API estará disponible en http://localhost:3000.

## Uso de la API
Consultar todos los ganadores
Puedes obtener una lista de todos los ganadores de la Copa del Mundo haciendo una solicitud GET a:

http://localhost:3000/ganadores
Consultar un ganador por ID
Para consultar un ganador específico por su ID, puedes filtrar los resultados de la respuesta anterior o implementar un filtrado en tu aplicación frontend.

## Uso sin Frontend
Si deseas utilizar esta API en tu propio proyecto sin el frontend proporcionado, puedes hacer solicitudes HTTP directamente a la API. Aquí tienes un ejemplo de cómo hacerlo usando fetch en JavaScript:


```javascript

fetch('http://localhost:3000/ganadores')
    .then(response => response.json())
    .then(data => {
        const ganador = data.find(g => g.id == id);
        console.log(ganador);
    })
    .catch(error => console.error('Error:', error));```