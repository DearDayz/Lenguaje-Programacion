const express = require('express');
//const cors = require('cors');
const path = require('path');
const port = 3000;

const app = express();

/*
app.use(cors({
    origin: 'http://localhost:8012' // Cambia esto a la URL de tu frontend si es diferente
}));*/

// Configurar la carpeta "banderas" para que se sirva como estática
app.use('/banderas', express.static(path.join(__dirname, 'banderas')));

//mostrar carpeta frontend
app.use(express.static(path.join(__dirname, '../frontend')));

// Middleware para parsear cuerpos JSON
app.use(express.json());

// Ruta que devuelve los ganadores de los mundiales
app.get('/ganadores', (req, res) => {
    const ganadores = [
        { id: 1, pais: 'Uruguay', continente: 'América del Sur', anfitrion: 'Uruguay', fecha: '1930-07-30', bandera: 'Uruguay.png' },
        { id: 2, pais: 'Italia', continente: 'Europa', anfitrion: 'Italia', fecha: '1934-06-10', bandera: 'Italia.png' },
        { id: 3, pais: 'Brasil', continente: 'América del Sur', anfitrion: 'Francia', fecha: '1938-06-19', bandera: 'Brasil.png' },
        { id: 4, pais: 'Uruguay', continente: 'América del Sur', anfitrion: 'Brasil', fecha: '1950-07-16', bandera: 'Uruguay.png' },
        { id: 5, pais: 'Alemania Federal', continente: 'Europa', anfitrion: 'Suiza', fecha: '1954-07-04', bandera: 'Alemania.png' },
        { id: 6, pais: 'Brasil', continente: 'América del Sur', anfitrion: 'Suecia', fecha: '1958-06-08', bandera: 'Brasil.png' },
        { id: 7, pais: 'Brasil', continente: 'América del Sur', anfitrion: 'Chile', fecha: '1962-06-17', bandera: 'Brasil.png' },
        { id: 8, pais: 'Inglaterra', continente: 'Europa', anfitrion: 'Inglaterra', fecha: '1966-07-30', bandera: 'Inglaterra.png' },
        { id: 9, pais: 'Brasil', continente: 'América del Sur', anfitrion: 'México', fecha: '1970-06-21', bandera: 'Brasil.png' },
        { id: 10, pais: 'Alemania Federal', continente: 'Europa', anfitrion: 'Alemania Federal', fecha: '1974-06-30', bandera: 'Alemania.png' },
        { id: 11, pais: 'Argentina', continente: 'América del Sur', anfitrion: 'Argentina', fecha: '1978-06-25', bandera: 'Argentina.png' },
        { id: 12, pais: 'Italia', continente: 'Europa', anfitrion: 'España', fecha: '1982-06-11', bandera: 'Italia.png' },
        { id: 13, pais: 'Brasil', continente: 'América del Sur', anfitrion: 'México', fecha: '1986-06-29', bandera: 'Brasil.png' },
        { id: 14, pais: 'Alemania Federal', continente: 'Europa', anfitrion: 'Italia', fecha: '1990-07-08', bandera: 'Alemania.png' },
        { id: 15, pais: 'Brasil', continente: 'América del Sur', anfitrion: 'Estados Unidos', fecha: '1994-07-17', bandera: 'Brasil.png' },
        { id: 16, pais: 'Francia', continente: 'Europa', anfitrion: 'Francia', fecha: '1998-07-12', bandera: 'Francia.png' },
        { id: 17, pais: 'Brasil', continente: 'América del Sur', anfitrion: 'Corea del Sur / Japón', fecha: '2002-06-30', bandera: 'Brasil.png' },
        { id: 18, pais: 'Italia', continente: 'Europa', anfitrion: 'Alemania', fecha: '2006-07-09', bandera: 'Italia.png' },
        { id: 19, pais: 'España', continente: 'Europa', anfitrion: 'Sudáfrica', fecha: '2010-07-11', bandera: 'Espana.png' },
        { id: 20, pais: 'Alemania', continente: 'Europa', anfitrion: 'Brasil', fecha: '2014-07-13', bandera: 'Alemania.png' },
        { id: 21, pais: 'Francia', continente: 'Europa', anfitrion: 'Rusia', fecha: '2018-07-15', bandera: 'Francia.png' },
        { id: 22, pais: 'Argentina', continente: 'América del Sur', anfitrion: 'Qatar', fecha: '2022-12-18', bandera: 'Argentina.png'},
    ];
    res.json(ganadores);
});

// Iniciamos el servidor en el puerto 
app.listen(port, () => {
    console.log('API corriendo en http://localhost:' + port);
});
