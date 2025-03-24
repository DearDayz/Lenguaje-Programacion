<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;

class UserController extends Controller
{
    public function show($id)
    {
        $user = User::findOrFail($id);
        return response()->json($user);
    }
    public function index(){
        $users = User::all();
        return response()->json($users);
    }

    public function update(Request $request, $id)
    {
        $user = User::findOrFail($id); // Busca el usuario por ID o lanza un error 404
        $user->update($request->all()); // Actualiza los datos del usuario con los datos de la solicitud
        return response()->json($user); // Devuelve el usuario actualizado como respuesta JSON
    }
}