<?php

use PHPUnit\Framework\TestCase;

class EditTest extends TestCase
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
            ]
        ];

        file_put_contents($this->jsonFile, json_encode($participants, JSON_PRETTY_PRINT));
    }

    public function testEditParticipant()
    {
        // Simular que el parámetro 'id' está presente en la URL (en $_GET)
        $_GET['id'] = 1;

        // Simular los datos del formulario de edición
        $_POST = [
            'nombre' => 'Carlos López',
            'deuda' => 200,
            'razon' => 'Motivos personales',
            'telefono' => '987654321',
            'correo' => 'carlos@example.com',
            'edad' => 35,
            'genero' => 'M',
            'pais' => 'Colombia',
            'eliminar_imagenes' => ['uploads/img1.jpg'],
            'eliminar_documentos' => ['uploads/doc1.pdf'],
        ];

        $_FILES = [
            'foto_perfil' => [
                'name' => 'new_profile.jpg',
                'tmp_name' => __DIR__ . '/test_files/new_profile.jpg',
                'size' => 1024,
                'error' => 0,
                'type' => 'image/jpeg'
            ],
            'imagenes' => [
                'name' => ['img3.jpg'],
                'tmp_name' => [__DIR__ . '/test_files/img3.jpg'],
                'size' => [1024],
                'error' => [0],
                'type' => ['image/jpeg']
            ],
            'documentos' => [
                'name' => ['doc2.pdf'],
                'tmp_name' => [__DIR__ . '/test_files/doc2.pdf'],
                'size' => [2048],
                'error' => [0],
                'type' => ['application/pdf']
            ]
        ];

        // Llamar al código de edición de participantes
        include 'edit.php';

        // Cargar los participantes después de la edición
        $participants = json_decode(file_get_contents($this->jsonFile), true);

        // Asegurarse de que el participante fue actualizado correctamente
        $this->assertEquals('Carlos López', $participants[0]['nombre']);
        $this->assertEquals(200, $participants[0]['deuda']);
        $this->assertEquals('Motivos personales', $participants[0]['razon']);
        $this->assertEquals('987654321', $participants[0]['telefono']);
        $this->assertEquals('carlos@example.com', $participants[0]['correo']);
        $this->assertEquals(35, $participants[0]['edad']);
        $this->assertEquals('Colombia', $participants[0]['pais']);
        $this->assertEquals('uploads/new_profile.jpg', $participants[0]['foto_perfil']);
        $this->assertContains('uploads/img3.jpg', $participants[0]['imagenes']);
        $this->assertContains('uploads/doc2.pdf', $participants[0]['documentos']);
    }

    protected function tearDown(): void
    {
        // Limpiar el archivo JSON después de la prueba
        if (file_exists($this->jsonFile)) {
            unlink($this->jsonFile);
        }
    }
}
