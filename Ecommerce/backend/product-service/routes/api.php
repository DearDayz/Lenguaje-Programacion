<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\ProductController;
use App\Http\Controllers\CategoryController; 

Route::middleware('api')->group(function () {
    Route::resource('products', ProductController::class);
    Route::resource('categories', CategoryController::class); // Agregar rutas para categorías
});