<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;
use App\Models\User;

class AuthController extends Controller
{
    /**
     * Registrar un nuevo usuario.
     *
     * @param \Illuminate\Http\Request $request
     * @return \Illuminate\Http\JsonResponse
     */
    public function register(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'name' => 'required|string|max:255',
            'email' => 'required|string|email|max:255|unique:users',
            'password' => 'required|string|min:6|confirmed',
        ]);

        if ($validator->fails()) {
            return response()->json(['errors' => $validator->errors()], 422);
        }

        $user = User::create([
            'name' => $request->name,
            'email' => $request->email,
            'password' => bcrypt($request->password),
        ]);

        return response()->json(['message' => 'Usuario registrado correctamente', 'user' => $user], 201);
    }

    /**
     * Iniciar sesión.
     *
     * @param \Illuminate\Http\Request $request
     * @return \Illuminate\Http\JsonResponse
     */
    public function login(Request $request)
    {
        $credentials = $request->only('email', 'password');

        if (!auth()->attempt($credentials)) {
            return response()->json(['error' => 'Credenciales inválidas'], 401);
        }

        return response()->json(['message' => 'Inicio de sesión exitoso']);
    }

    /**
     * Cerrar sesión.
     *
     * @return \Illuminate\Http\JsonResponse
     */
    public function logout()
    {
        // La autenticación no es necesaria para cerrar sesión
        return response()->json(['message' => 'Sesión cerrada correctamente']);
    }

    /**
     * Obtener todos los usuarios.
     *
     * @return \Illuminate\Http\JsonResponse
     */
    public function getAllUsers()
    {
        $users = User::all();
        return response()->json(['users' => $users]);
    }

    /**
     * Obtener un usuario específico.
     *
     * @param int $id
     * @return \Illuminate\Http\JsonResponse
     */
    public function getUser($id)
    {
        $user = User::find($id);

        if (!$user) {
            return response()->json(['error' => 'Usuario no encontrado'], 404);
        }

        return response()->json(['user' => $user]);
    }

    /**
     * Actualizar un usuario específico.
     *
     * @param \Illuminate\Http\Request $request
     * @param int $id
     * @return \Illuminate\Http\JsonResponse
     */
    public function updateUser(Request $request, $id)
    {
        $user = User::find($id);

        if (!$user) {
            return response()->json(['error' => 'Usuario no encontrado'], 404);
        }

        $validator = Validator::make($request->all(), [
            'name' => 'sometimes|required|string|max:255',
            'email' => 'sometimes|required|string|email|max:255|unique:users,email,' . $id,
            'password' => 'sometimes|required|string|min:6|confirmed',
            'telefono' => 'sometimes|required|string|max:15',
            'direccion' => 'sometimes|required|string|max:255',
            'codigo_postal' => 'sometimes|required|string|max:10',
            'ciudad' => 'sometimes|required|string|max:100',
            'pais' => 'sometimes|required|string|max:100',
            'informacion_adicional' => 'sometimes|required|string|max:500',
        ]);

        if ($validator->fails()) {
            return response()->json(['errors' => $validator->errors()], 422);
        }

        $user->update($request->only('name', 'email', 'telefono', 'direccion', 'codigo_postal', 'ciudad', 'pais', 'informacion_adicional'));

        if($request->has('password')) {
            $user->password = bcrypt($request->password);
            $user->save();
        }

        return response()->json(['message' => 'Usuario actualizado correctamente', 'user' => $user]);
    }
}