<?php

namespace App\Http\Controllers;

use App\Models\Product;
use Illuminate\Http\Request;

class ProductController extends Controller
{
    public function index()
    {
        $products = Product::all();

        // Modificar las URLs de las imágenes para que sean absolutas
        $products->transform(function ($product) {
            if ($product->image_url) {
                $product->image_url = asset($product->image_url);
            }
            return $product;
        });

        return $products;
    }

    public function store(Request $request)
    {
        $validatedData = $request->validate([
            'name' => 'required|string|max:255',
            'description' => 'nullable|string',
            'price' => 'required|numeric',
            'category_id' => 'required|exists:categories,id',
            'stock' => 'required|integer',
            'image_url' => 'nullable|url',
        ]);

        $product = Product::create($validatedData);
        return response()->json($product, 201);
    }

    public function show($id)
    {
        $product = Product::find($id);

        if ($product && $product->image_url) {
            $product->image_url = asset($product->image_url);
        }

        return $product;
    }

    public function update(Request $request, $id)
    {
        $validatedData = $request->validate([
            'name' => 'sometimes|required|string|max:255',
            'description' => 'nullable|string',
            'price' => 'sometimes|required|numeric',
            'category_id' => 'sometimes|required|exists:categories,id',
            'stock' => 'sometimes|required|integer',
            'image_url' => 'nullable|url',
        ]);

        $product = Product::findOrFail($id);
        $product->update($validatedData);
        return response()->json($product, 200);
    }

    public function destroy($id)
    {
        Product::findOrFail($id)->delete();
        return response()->json(null, 204);
    }
}