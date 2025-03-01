import React, { useState } from "react";
import { useParams, Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ShoppingCart, ArrowLeft, Plus, Minus } from "lucide-react";

// Datos de ejemplo para el producto (en una app real, esto sería obtenido de una API o base de datos)
const getProductBySlug = (slug: string) => {
  const products = [
    {
      id: 1,
      title: "Disfraz Spider-Man Deluxe",
      price: 89.99,
      image: "public/fondo.jpg",
      rating: 4.8,
      isNew: true,
      description:
        "Traje de alta calidad del Hombre Araña con detalles precisos. Incluye máscara, traje completo y guantes. Perfecto para fiestas de disfraces, Halloween o eventos temáticos.",
      sizes: ["S", "M", "L", "XL"],
      stock: 15,
      category: "Superhéroes",
    },
    {
      id: 2,
      title: "Conjunto Wonder Woman",
      price: 129.99,
      image: "public/fondo.jpg",
      rating: 4.9,
      description:
        "Traje completo de Wonder Woman con accesorios incluidos. Contiene: top, falda, brazaletes, tiara y lazo de la verdad.",
      sizes: ["S", "M", "L"],
      stock: 8,
      category: "Superhéroes",
    },
    // Más productos aquí...
  ];

  const normalizedSlug = slug.toLowerCase();
  return products.find(
    (product) =>
      product.title.toLowerCase().replace(/ /g, "-") === normalizedSlug
  );
};

const ProductDetail = () => {
  const { slug } = useParams<{ slug: string }>();
  const product = slug ? getProductBySlug(slug) : null;
  const [quantity, setQuantity] = useState(1);
  const [selectedSize, setSelectedSize] = useState("");

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
        {/* Imagen del producto */}
        <div className="relative">
          <img
            src={product.image}
            alt={product.title}
            className="w-full rounded-lg object-cover aspect-square"
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
              {product.category}
            </Badge>
            <h1 className="text-3xl font-bold">{product.title}</h1>
            <div className="flex items-center mt-2">
              <span className="text-2xl font-bold">${product.price}</span>
              <span className="ml-2 text-gray-500 text-sm">
                Stock disponible: {product.stock} unidades
              </span>
            </div>
          </div>

          <p className="text-gray-700">{product.description}</p>

          {/* Contenedor flexible para cantidad y tallas */}
          <div className="flex flex-col sm:flex-row gap-6">
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

            {/* Tallas */}
            <div className="w-full sm:w-1/2">
              <h3 className="text-lg font-medium mb-2">Tallas</h3>
              <div className="flex flex-wrap gap-2">
                {product.sizes.map((size) => (
                  <Button
                    key={size}
                    variant={selectedSize === size ? "default" : "outline"}
                    className={`rounded-md px-4 ${
                      selectedSize === size
                        ? "hover:bg-primary/90"
                        : "hover:bg-primary/10"
                    } transition-colors`}
                    onClick={() => setSelectedSize(size)}
                  >
                    {size}
                  </Button>
                ))}
              </div>
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
