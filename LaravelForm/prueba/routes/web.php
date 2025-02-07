<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\UserController;

Route::get('/', function () {
    return view('welcome');
});

//Route::get('/users/{user_id}',[UserController::class,'index']);

// Mostrar la lista de usuarios
Route::get('/users', [UserController::class, 'index'])->name('users.index');

// Mostrar el formulario para crear un nuevo usuario
Route::get('/users/create', [UserController::class, 'create'])->name('users.create');

// Guardar un nuevo usuario
Route::post('/users', [UserController::class, 'store'])->name('users.store');

// Mostrar el formulario para editar un usuario
Route::get('/users/{id}/edit', [UserController::class, 'edit'])->name('users.edit');

// Actualizar un usuario existente
Route::put('/users/{id}', [UserController::class, 'update'])->name('users.update');

// Eliminar un usuario
Route::delete('/users/{id}', [UserController::class, 'destroy'])->name('users.destroy');
