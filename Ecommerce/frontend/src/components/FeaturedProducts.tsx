import React, { useState, useEffect } from "react";
import ProductCard from "./ProductCard";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { ArrowBigDown } from "lucide-react";

const categories = [
  "Halloween",
  "Superhéroes",
  "Cosplay",
  "Infantil",
  "Adultos",
  "Accesorios",
];

interface Product {
  id: number; // Añadido id
  name: string;
  description: string;
  price: number;
  category_id: number;
  stock: number;
  image_url: string;
  isNew?: boolean;
  isOffer?: boolean;
}

interface FeaturedProductsProps {
  showOffers?: boolean;
  selectedCategory?: string;
}

const FeaturedProducts = ({
  showOffers = false,
  selectedCategory,
}: FeaturedProductsProps) => {
  const [products, setProducts] = useState<Product[]>([]);
  const [currentTitle, setCurrentTitle] = useState("Disfraces Destacados");
  const [currentDescription, setCurrentDescription] = useState(
    "Descubre nuestros disfraces más populares y nuevas llegadas"
  );
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        setLoading(true);
        const response = await fetch("http://127.0.0.1:8000/api/products");
        if (!response.ok) {
          throw new Error("Error al obtener los productos");
        }
        const data = await response.json();
        setProducts(data);
        setError(null);
      } catch (error) {
        console.error("Error:", error);
        setError(
          "No se pudieron cargar los productos. Inténtalo de nuevo más tarde."
        );
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, [showOffers, selectedCategory]);

  useEffect(() => {
    if (showOffers) {
      setCurrentTitle("Disfraces en Oferta");
      setCurrentDescription(
        "¡No te pierdas nuestros increíbles descuentos por tiempo limitado!"
      );
    } else if (selectedCategory) {
      setCurrentTitle(`Disfraces de ${selectedCategory}`);
      setCurrentDescription(
        `Explora nuestra colección de disfraces de ${selectedCategory}`
      );
    } else {
      setCurrentTitle("Disfraces Destacados");
      setCurrentDescription(
        "Descubre nuestros disfraces más populares y nuevas llegadas"
      );
    }
  }, [showOffers, selectedCategory]);

  const handleCategorySelect = (category: string) => {
    console.log(`Categoría seleccionada: ${category}`);
    // Aquí podrías filtrar los productos por categoría si lo deseas
  };

  if (loading) {
    return <div className="text-center">Cargando productos...</div>;
  }

  if (error) {
    return <div className="text-center text-red-500">{error}</div>;
  }

  return (
    <section id="ofertas" className="container py-16">
      <div className="text-center mb-8 animate-fade-in">
        <h2 className="text-3xl font-bold mb-4">{currentTitle}</h2>
        <p className="text-gray-600 max-w-2xl mx-auto mb-6">
          {currentDescription}
        </p>

        <Sheet>
          <SheetTrigger asChild>
            <Button
              variant="outline"
              className="gap-2 hover:bg-primary hover:text-white transition-colors"
            >
              Ver Categorías <ArrowBigDown className="h-5 w-5 animate-bounce" />
            </Button>
          </SheetTrigger>
          <SheetContent side="left" className="w-[300px]">
            <SheetHeader>
              <SheetTitle>Categorías</SheetTitle>
            </SheetHeader>
            <div className="py-6">
              <div className="space-y-2">
                {categories.map((category) => (
                  <Button
                    key={category}
                    variant="ghost"
                    className="w-full justify-start text-left hover:bg-primary hover:text-white transition-colors"
                    onClick={() => handleCategorySelect(category)}
                  >
                    {category}
                  </Button>
                ))}
              </div>
            </div>
          </SheetContent>
        </Sheet>
      </div>

      <div className="relative">
        <div className="scrollbar-hide overflow-x-auto pb-6 max-h-[800px]">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {products.map((product) => (
              <ProductCard
                key={product.id} // Cambiado a product.id
                id={product.id} // Añadido id
                title={product.name}
                price={product.price}
                image={product.image_url}
                isNew={product.isNew}
                isOffer={product.isOffer}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;
