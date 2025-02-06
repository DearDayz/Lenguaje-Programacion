<?php


use PHPUnit\Framework\TestCase;

class ListTest extends TestCase
{
    // Configuración inicial para el archivo de prueba
    protected function setUp(): void
    {
        // Asegurarse de que el archivo de participantes existe y tiene datos simulados
        $this->mockParticipantsFile();
    }

    // Crear un archivo simulado participants.json para las pruebas
    private function mockParticipantsFile()
    {
        $data = [
            [
                'id' => 1,
                'nombre' => 'Juan Pérez',
                'foto_perfil' => 'uploads/profile1.jpg',
                'edad' => 30,
                'genero' => 'Masculino',
                'pais' => 'México',
                'correo' => 'juan@example.com',
                'telefono' => '123456789',
                'deuda' => 5000, // Asegúrate de que este es el formato que esperas
                'razon' => 'Pago pendiente',
                'imagenes' => [],
                'documentos' => []
            ],
            [
                'id' => 2,
                'nombre' => 'Ana Gómez',
                'foto_perfil' => 'uploads/profile2.jpg',
                'edad' => 25,
                'genero' => 'Femenino',
                'pais' => 'España',
                'correo' => 'ana@example.com',
                'telefono' => '987654321',
                'deuda' => 2000,
                'razon' => 'Pago anticipado',
                'imagenes' => [],
                'documentos' => []
            ]
        ];

        // Guardar los datos como un archivo JSON para las pruebas
        file_put_contents('data/participants.json', json_encode($data, JSON_PRETTY_PRINT));
    }

    // Test para verificar que la deuda de Juan Pérez se muestra correctamente
    public function testVerificarListaDeParticipantes()
    {
        // Obtener el contenido HTML generado por la página list.php
        ob_start();
        include 'list.php';  // Aquí incluimos el archivo list.php, que es el que contiene la lista de participantes
        $output = ob_get_clean();

        // Verificar que la deuda de Juan Pérez esté presente en el contenido
        $this->assertStringContainsString('5,000.00', $output);  // Esto asume que la deuda está formateada de esta manera
    }


    // Limpiar después de las pruebas
    protected function tearDown(): void
    {
        // Eliminar el archivo de participantes para evitar efectos en otras pruebas
        if (file_exists('data/participants.json')) {
            unlink('data/participants.json');
        }
    }
}
?>
