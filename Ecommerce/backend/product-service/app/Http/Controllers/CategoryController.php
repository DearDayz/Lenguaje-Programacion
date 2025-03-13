<?php

namespace App\Http\Controllers;

use App\Models\Category;
use Illuminate\Http\Request;

class CategoryController extends Controller
{
    /**
     * Display a listing of the categories.
     */
    public function index()
    {
        return Category::all();
    }

    /**
     * Store a newly created category in storage.
     */
    public function store(Request $request)
    {
        $request->validate([
            'name' => 'required|string|max:255',
        ]);

        $category = Category::create($request->all());

        return response()->json($category, 201);
    }

    /**
     * Display the specified category.
     */
    public function show($id)
    {
        return Category::findOrFail($id);
    }

    /**
     * Update the specified category in storage.
     */
    public function update(Request $request, $id)
    {
        $request->validate([
            'name' => 'sometimes|required|string|max:255',
        ]);

        $category = Category::findOrFail($id);
        $category->update($request->all());

        return response()->json($category, 200);
    }

    /**
     * Remove the specified category from storage.
     */
    public function destroy($id)
    {
        Category::findOrFail($id)->delete();

        return response()->json(null, 204);
    }
}