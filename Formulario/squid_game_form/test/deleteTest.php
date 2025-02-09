<?php

use PHPUnit\Framework\TestCase;

class DeleteTest extends TestCase
{
    private $jsonFile = 'data/participants.json';

    protected function setUp(): void
    {
        // Crear archivo JSON simulado para las pruebas
        $participants = [
            [
                'id' => 1,
                'nombre' => 'Juan Pérez',
                'deuda' => 100,
                'razon' => 'Participa por diversión',
                'telefono' => '123456789',
                'correo' => 'juan@example.com',
                'edad' => 30,
                'genero' => 'M',
                'pais' => 'México',
                'foto_perfil' => 'uploads/default.jpg',
                'imagenes' => ['uploads/img1.jpg', 'uploads/img2.jpg'],
                'documentos' => ['uploads/doc1.pdf']
            ],
            [
                'id' => 2,
                'nombre' => 'Ana Gómez',
                'deuda' => 150,
                'razon' => 'Participa por premios',
                'telefono' => '987654321',
                'correo' => 'ana@example.com',
                'edad' => 25,
                'genero' => 'F',
                'pais' => 'Colombia',
                'foto_perfil' => 'uploads/default2.jpg',
                'imagenes' => ['uploads/img3.jpg', 'uploads/img4.jpg'],
                'documentos' => ['uploads/doc2.pdf']
            ]
        ];

        file_put_contents($this->jsonFile, json_encode($participants, JSON_PRETTY_PRINT));
    }

    public function testDeleteParticipant()
    {
        // Simular que el parámetro 'id' está presente en la URL (en $_GET)
        $_GET['id'] = 1;

        // Configurar entorno de prueba para evitar redirección
        $_SERVER['PHP_UNIT'] = true;

        // Llamar al código de eliminación de participantes
        include 'delete.php';

        // Cargar los participantes después de la eliminación
        $participants = json_decode(file_get_contents($this->jsonFile), true);

        // Asegurarse de que el participante con id=1 haya sido eliminado
        $this->assertCount(1, $participants);
        $this->assertEquals(2, $participants[0]['id']);
    }

    protected function tearDown(): void
    {
        // Limpiar el archivo JSON después de la prueba
        if (file_exists($this->jsonFile)) {
            unlink($this->jsonFile);
        }
    }
}
