<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\AuthController;

Route::group([
    'middleware' => 'api',
    'prefix' => 'auth'
], function ($router) {
    Route::post('login', [AuthController::class, 'login']);
    Route::post('logout', [AuthController::class, 'logout']);
    Route::post('register', [AuthController::class, 'register']);
    Route::get('users', [AuthController::class, 'getAllUsers']);
    Route::get('users/{id}', [AuthController::class, 'getUser']);
    Route::put('users/{id}', [AuthController::class, 'updateUser']);
});
