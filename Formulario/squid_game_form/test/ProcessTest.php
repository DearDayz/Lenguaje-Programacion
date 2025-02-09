<?php
use PHPUnit\Framework\TestCase;

class ProcessTest extends TestCase {
    
    public function testVerificarDatosEnviados() {
        // Simulación de datos del formulario
        $_POST = [
            'nombre' => 'Juan Pérez',
            'deuda' => '5000',
            'razon' => 'Pago pendiente',
            'telefono' => '123456789',
            'correo' => 'juan@example.com',
            'edad' => '30',
            'genero' => 'Masculino',
            'pais' => 'México',
            'imagenes' => json_encode([]),
            'documentos' => json_encode([])
        ];

        // Simular archivos subidos
        $_FILES = [
            'foto_perfil' => [
                'name' => 'profile.jpg',
                'tmp_name' => __DIR__ . '/mock/profile.jpg',
                'error' => 0,
                'size' => 12345,
                'type' => 'image/jpeg'
            ],
            'documentos' => [
                'name' => ['doc1.pdf', 'doc2.pdf'],
                'tmp_name' => [__DIR__ . '/mock/doc1.pdf', __DIR__ . '/mock/doc2.pdf'],
                'error' => [0, 0],
                'size' => [12345, 23456],
                'type' => ['application/pdf', 'application/pdf']
            ]
        ];

        // Capturar salida de process.php
        ob_start();
        require 'process.php';
        $output = ob_get_clean();

        // Verificar que la salida no contenga error de "Datos incompletos"
        $this->assertStringNotContainsString('Datos incompletos', $output, "Faltan datos en el envío.");
        

        // Si el proceso se ejecuta correctamente, confirmamos el éxito
        $this->assertStringContainsString('Participante registrado con éxito', $output, "El proceso no se completó correctamente.");
    }
}
