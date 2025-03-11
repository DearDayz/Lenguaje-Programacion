import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ShoppingCart, ArrowLeft, Plus, Minus } from "lucide-react";

interface Product {
  id: number;
  name: string;
  price: number;
  image_url: string;
  description: string;
  category_id: number;
  stock: number;
  sizes: string[]; // Asegúrate de que tu API devuelva este campo
  isNew?: boolean;
}

const ProductDetail = () => {
  // Extraer el ID de la URL manualmente
  const path = window.location.pathname; // Obtener la ruta actual
  const id = path.split("/").pop(); // Dividir la ruta y obtener el último elemento
  console.log("ID del producto:", id); // Imprimir el ID del producto en la consola

  const [product, setProduct] = useState<Product | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [quantity, setQuantity] = useState(1);
  const [selectedSize, setSelectedSize] = useState("");

  useEffect(() => {
    const fetchProduct = async () => {
      if (!id) {
        setError("ID no válido");
        setLoading(false);
        return;
      }

      try {
        const response = await fetch(
          `http://127.0.0.1:8000/api/products/${id}`
        );
        if (!response.ok) {
          throw new Error("Error al obtener los detalles del producto");
        }
        const data = await response.json();
        setProduct(data);
      } catch (error) {
        setError(
          "No se pudo cargar el producto. Inténtalo de nuevo más tarde."
        );
        console.error("Error al cargar el producto:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchProduct();
  }, [id]);

  const decreaseQuantity = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  const increaseQuantity = () => {
    if (product && quantity < product.stock) {
      setQuantity(quantity + 1);
    }
  };

  if (loading) {
    return (
      <div className="container mx-auto py-32 text-center">
        <h1 className="text-2xl font-bold mb-4">Cargando...</h1>
      </div>
    );
  }

  if (error) {
    return (
      <div className="container mx-auto py-32 text-center">
        <h1 className="text-2xl font-bold mb-4">Error</h1>
        <p>{error}</p>
      </div>
    );
  }

  if (!product) {
    return (
      <div className="container mx-auto py-32 text-center">
        <h1 className="text-2xl font-bold mb-4">Producto no encontrado</h1>
        <p>
          Lo sentimos, el producto que buscas no existe o ha sido eliminado.
        </p>
      </div>
    );
  }

  return (
    <main className="container mx-auto py-24 px-4 md:py-32 md:px-6">
      <div className="mb-6">
        <Link
          to="/"
          className="inline-flex items-center text-gray-700 hover:text-primary transition-colors"
        >
          <ArrowLeft className="h-5 w-5 mr-2" />
          Volver a la tienda
        </Link>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Contenedor de la imagen que ocupa todo el ancho */}
        <div className="relative max-w-md mx-auto">
          <img
            src={product.image_url}
            alt={product.name}
            className="w-full h-auto object-contain rounded-lg" // Asegúrate de que la imagen se ajuste al contenedor
          />
          {product.isNew && (
            <Badge className="absolute top-4 right-4 bg-primary text-white px-3 py-1">
              Nuevo
            </Badge>
          )}
        </div>

        {/* Detalles del producto */}
        <div className="space-y-5">
          <div>
            <Badge variant="secondary" className="mb-2">
              Categoría {product.category_id}
            </Badge>
            <h1 className="text-3xl font-bold">{product.name}</h1>
            <div className="flex items-center mt-2">
              <span className="text-2xl font-bold">${product.price}</span>
              <span className="ml-2 text-gray-500 text-sm">
                Stock disponible: {product.stock} unidades
              </span>
            </div>
          </div>

          <p className="text-gray-700">{product.description}</p>

          {/* Cantidad */}
          <div className="w-full sm:w-1/2">
            <h3 className="text-lg font-medium mb-2">Cantidad</h3>
            <div className="flex items-center gap-2">
              <Button
                variant="outline"
                size="icon"
                onClick={decreaseQuantity}
                disabled={quantity <= 1}
                className="hover:bg-primary/10 transition-colors"
              >
                <Minus className="h-4 w-4" />
              </Button>
              <span className="w-10 text-center font-medium">{quantity}</span>
              <Button
                variant="outline"
                size="icon"
                onClick={increaseQuantity}
                disabled={product.stock <= quantity}
                className="hover:bg-primary/10 transition-colors"
              >
                <Plus className="h-4 w-4" />
              </Button>
            </div>
          </div>

          {/* Botones de acción */}
          <div className="flex flex-wrap gap-4 mt-6">
            <Button className="w-full gap-2 hover:bg-primary/90 transition-colors">
              <ShoppingCart className="h-5 w-5" />
              Añadir al carrito
            </Button>
          </div>

          {/* Política de devoluciones */}
          <Card className="bg-gray-50 w-full">
            <CardContent className="p-4">
              <p className="text-sm text-gray-600">
                <strong>Política de devoluciones:</strong> Aceptamos
                devoluciones dentro de los 30 días posteriores a la compra. El
                producto debe estar en su estado original y con todas las
                etiquetas.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </main>
  );
};

export default ProductDetail;
