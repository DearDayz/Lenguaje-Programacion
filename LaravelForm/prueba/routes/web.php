<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\UserController;

/*Route::get('/', function () {
    return view('welcome');
});*/

//Route::get('/users/{user_id}',[UserController::class,'index']);

// Mostrar la lista de usuarios
Route::get('/', [UserController::class, 'index'])->name('users.index');

// Mostrar el formulario para crear un nuevo usuario
Route::get('/create', [UserController::class, 'create'])->name('users.create');

// Guardar un nuevo usuario
Route::post('/', [UserController::class, 'store'])->name('users.store');

// Mostrar el formulario para editar un usuario
Route::get('/{id}/edit', [UserController::class, 'edit'])->name('users.edit');

// Actualizar un usuario existente
Route::put('/{id}', [UserController::class, 'update'])->name('users.update');

// Eliminar un usuario
Route::delete('/{id}', [UserController::class, 'destroy'])->name('users.destroy');
