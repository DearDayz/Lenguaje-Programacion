<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\View\View;
use App\Models\User;
use Illuminate\Support\Facades\Storage;

class UserController extends Controller
{
    /*
    public function index(int $user_id): view
    {
        //dd();

        //return '<h1>Hello from UserController:'. $user_id .'</h1>';
        //dd(User::all());
        //SELECT * FROM users WHERE id = 1
        $user = User::find($user_id);
        //dd($user);
        return view('welcome', ['user' => $user]);
    }*/

    // Ruta del archivo JSON
    private $jsonFilePath;

    public function __construct()
    {
        $this->jsonFilePath = storage_path('app/users.json');
        if (!file_exists($this->jsonFilePath)) {
            file_put_contents($this->jsonFilePath, json_encode([]));
        }
    }

    // Mostrar la lista de usuarios
    public function index()
    {
        $users = json_decode(file_get_contents($this->jsonFilePath), true);
        return view('users.index', compact('users'));
    }

    // Mostrar el formulario de creación de usuario
    public function create()
    {
        return view('users.create');
    }

    // Almacenar un nuevo usuario
    public function store(Request $request)
    {
        $request->validate([
            'name' => 'required|string|max:255',
            'email' => 'required|email|unique:users,email',
            'profile_image' => 'required|image|mimes:jpeg,png,jpg,gif,svg|max:2048',
            'file' => 'required|file|max:10240', // 10MB max
        ]);

        $users = json_decode(file_get_contents($this->jsonFilePath), true);

        $profileImagePath = $request->file('profile_image')->store('profile_images', 'public');
        $filePath = $request->file('file')->store('files', 'public');

        $user = [
            'id' => uniqid(),
            'name' => $request->name,
            'email' => $request->email,
            'profile_image' => $profileImagePath,
            'file' => $filePath,
        ];

        $users[] = $user;
        file_put_contents($this->jsonFilePath, json_encode($users));

        return redirect()->route('users.index')->with('success', 'Usuario creado exitosamente.');
    }

    // Mostrar el formulario de edición de usuario
    public function edit($id)
    {
        $users = json_decode(file_get_contents($this->jsonFilePath), true);
        $user = collect($users)->firstWhere('id', $id);

        if (!$user) {
            return redirect()->route('users.index')->with('error', 'Usuario no encontrado.');
        }

        return view('users.edit', compact('user'));
    }

    // Actualizar un usuario existente
    public function update(Request $request, $id)
    {
        $request->validate([
            'name' => 'required|string|max:255',
            'email' => 'required|email|unique:users,email,' . $id,
            'profile_image' => 'nullable|image|mimes:jpeg,png,jpg,gif,svg|max:2048',
            'file' => 'nullable|file|max:10240', // 10MB max
        ]);

        $users = json_decode(file_get_contents($this->jsonFilePath), true);
        $userIndex = array_search($id, array_column($users, 'id'));

        if ($userIndex === false) {
            return redirect()->route('users.index')->with('error', 'Usuario no encontrado.');
        }

        $user = $users[$userIndex];

        if ($request->hasFile('profile_image')) {
            Storage::disk('public')->delete($user['profile_image']);
            $user['profile_image'] = $request->file('profile_image')->store('profile_images', 'public');
        }

        if ($request->hasFile('file')) {
            Storage::disk('public')->delete($user['file']);
            $user['file'] = $request->file('file')->store('files', 'public');
        }

        $user['name'] = $request->name;
        $user['email'] = $request->email;

        $users[$userIndex] = $user;
        file_put_contents($this->jsonFilePath, json_encode($users));

        return redirect()->route('users.index')->with('success', 'Usuario actualizado exitosamente.');
    }

    // Eliminar un usuario
    public function destroy($id)
    {
        $users = json_decode(file_get_contents($this->jsonFilePath), true);
        $userIndex = array_search($id, array_column($users, 'id'));

        if ($userIndex === false) {
            return redirect()->route('users.index')->with('error', 'Usuario no encontrado.');
        }

        $user = $users[$userIndex];
        Storage::disk('public')->delete([$user['profile_image'], $user['file']]);

        array_splice($users, $userIndex, 1);
        file_put_contents($this->jsonFilePath, json_encode($users));

        return redirect()->route('users.index')->with('success', 'Usuario eliminado exitosamente.');
    }   
}
