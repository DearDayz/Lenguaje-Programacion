<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\ProductController;
use App\Http\Controllers\CartController;


Route::middleware('api')->group(function () {
    Route::resource('products', ProductController::class);
    Route::resource('carts', CartController::class); 
});