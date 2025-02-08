<?php

namespace Tests\Feature;

use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Http\UploadedFile;
use Illuminate\Support\Facades\Storage;
use Tests\TestCase;

class UserTest extends TestCase
{
    use RefreshDatabase;

    /**
     * Prueba que un usuario puede ser creado.
     *
     * @return void
     */
    public function test_create_user()
    {
        file_put_contents(storage_path('app/users.json'), json_encode([]));
        // Simula la subida de archivos
        Storage::fake('public');

        // Datos del usuario
        $data = [
            'name' => 'Juan Pérez',
            'email' => 'juan@example.com',
            'profile_image' => UploadedFile::fake()->image('profile.jpg'),
            'file' => UploadedFile::fake()->create('document.pdf'),
        ];

        // Envía una solicitud POST para crear un usuario
        $response = $this->post('/', $data);

        // Verifica que la respuesta sea una redirección
        $response->assertStatus(302);

        // Verifica que los archivos se hayan subido correctamente
        Storage::disk('public')->assertExists('profile_images/' . $data['profile_image']->hashName());
        Storage::disk('public')->assertExists('files/' . $data['file']->hashName());

        // Verifica que el usuario se haya guardado en el archivo JSON
        $users = json_decode(file_get_contents(storage_path('app/users.json')), true);
        $this->assertCount(1, $users);
        $this->assertEquals('Juan Pérez', $users[0]['name']);
    }
    /**
    * Prueba que un usuario puede ser editado.
    *
    * @return void
    */
    public function test_edit_user()
    {
        file_put_contents(storage_path('app/users.json'), json_encode([]));

        // Simula la subida de archivos
        Storage::fake('public');

        // Crea un usuario inicial
        $user = [
        'id' => uniqid(),
        'name' => 'Juan Pérez',
        'email' => 'juan@example.com',
        'profile_image' => 'profile_images/profile.jpg',
        'file' => 'files/document.pdf',
        ];
        file_put_contents(storage_path('app/users.json'), json_encode([$user]));

        // Nuevos datos del usuario
        $data = [
        'name' => 'Juan Pérez Actualizado',
        'email' => 'juan_actualizado@example.com',
        'profile_image' => UploadedFile::fake()->image('new_profile.jpg'),
        'file' => UploadedFile::fake()->create('new_document.pdf'),
        ];

        // Envía una solicitud PUT para editar el usuario
        $response = $this->put("/{$user['id']}", $data);

        // Verifica que la respuesta sea una redirección
        $response->assertStatus(302);

        // Verifica que los archivos se hayan subido correctamente
        Storage::disk('public')->assertExists('profile_images/' . $data['profile_image']->hashName());
        Storage::disk('public')->assertExists('files/' . $data['file']->hashName());

        // Verifica que el usuario se haya actualizado en el archivo JSON
        $users = json_decode(file_get_contents(storage_path('app/users.json')), true);
        $this->assertEquals('Juan Pérez Actualizado', $users[0]['name']);
        $this->assertEquals('juan_actualizado@example.com', $users[0]['email']);
        }

        /**
        * Prueba que un usuario puede ser eliminado.
        *
        * @return void
        */
        public function test_delete_user()
        {
            file_put_contents(storage_path('app/users.json'), json_encode([]));

            // Crea un usuario inicial
            $user = [
            'id' => uniqid(),
            'name' => 'Juan Pérez',
            'email' => 'juan@example.com',
            'profile_image' => 'profile_images/profile.jpg',
            'file' => 'files/document.pdf',
            ];
            file_put_contents(storage_path('app/users.json'), json_encode([$user]));

            // Envía una solicitud DELETE para eliminar el usuario
            $response = $this->delete("/{$user['id']}");

            // Verifica que la respuesta sea una redirección
            $response->assertStatus(302);

            // Verifica que el usuario se haya eliminado del archivo JSON
            $users = json_decode(file_get_contents(storage_path('app/users.json')), true);
            $this->assertCount(0, $users);
            }



    
}

