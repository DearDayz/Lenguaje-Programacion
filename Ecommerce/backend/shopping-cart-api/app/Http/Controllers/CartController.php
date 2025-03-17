<?php

namespace App\Http\Controllers;

use App\Models\Cart;
use App\Models\CartItem;
use Illuminate\Http\Request;

class CartController extends Controller
{
    public function index()
    {
        return Cart::with('items.product')->get();
    }

    public function store(Request $request)
    {
        $cart = Cart::create();
        foreach ($request->items as $item) {
            $cart->items()->create([
                'product_id' => $item['product_id'],
                'quantity' => $item['quantity'],
            ]);
        }
        return response()->json($cart->load('items.product'), 201);
    }

    public function show($id)
    {
        return Cart::with('items.product')->findOrFail($id);
    }

    public function update(Request $request, $id)
    {
        $cart = Cart::findOrFail($id);
        $cart->items()->delete();
        foreach ($request->items as $item) {
            $cart->items()->create([
                'product_id' => $item['product_id'],
                'quantity' => $item['quantity'],
            ]);
        }
        return response()->json($cart->load('items.product'), 200);
    }

    public function destroy($id)
    {
        Cart::destroy($id);
        return response()->json(null, 204);
    }
}