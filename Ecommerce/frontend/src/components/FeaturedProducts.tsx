import React, { useState, useEffect } from "react";
import ProductCard from "./ProductCard";
import SearchSection from "./SearchSection"; // Importar SearchSection
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { ArrowBigDown } from "lucide-react";

const FeaturedProducts = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [categories, setCategories] = useState<{ id: number; name: string }[]>(
    []
  );
  const [filteredProducts, setFilteredProducts] = useState<Product[]>([]);
  const [currentTitle, setCurrentTitle] = useState("Disfraces Destacados");
  const [currentDescription, setCurrentDescription] = useState(
    "Descubre nuestros disfraces más populares y nuevas llegadas"
  );
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);
  const [selectedCategory, setSelectedCategory] = useState<number | null>(null);
  const [searchTerm, setSearchTerm] = useState("");

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
        setFilteredProducts(data); // Inicialmente, mostrar todos los productos
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

    const fetchCategories = async () => {
      try {
        const response = await fetch("http://127.0.0.1:8000/api/categories");
        if (!response.ok) {
          throw new Error("Error al obtener las categorías");
        }
        const data = await response.json();
        setCategories(data); // Guardar las categorías en el estado
      } catch (error) {
        console.error("Error:", error);
      }
    };

    fetchProducts();
    fetchCategories(); // Llamar a la función para obtener las categorías
  }, []);

  useEffect(() => {
    let filtered = products;

    // Filtrar productos por categoría seleccionada
    if (selectedCategory) {
      filtered = filtered.filter(
        (product) => product.category_id === selectedCategory
      );
    }

    // Filtrar productos por término de búsqueda
    if (searchTerm) {
      filtered = filtered.filter((product) =>
        product.name.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    setFilteredProducts(filtered);

    // Actualizar el título y la descripción según la categoría seleccionada
    if (selectedCategory) {
      setCurrentTitle(
        `Disfraces de ${
          categories.find((cat) => cat.id === selectedCategory)?.name
        }`
      );
      setCurrentDescription(
        `Explora nuestra colección de disfraces de ${
          categories.find((cat) => cat.id === selectedCategory)?.name
        }`
      );
    } else {
      setCurrentTitle("Disfraces Destacados");
      setCurrentDescription(
        "Descubre nuestros disfraces más populares y nuevas llegadas"
      );
    }
  }, [selectedCategory, products, searchTerm, categories]);

  const handleCategorySelect = (category: string) => {
    if (category === "Todas") {
      setSelectedCategory(null); // Mostrar todos los productos
    } else {
      const categoryId = categories.find((cat) => cat.name === category)?.id;
      setSelectedCategory(categoryId); // Establecer la categoría seleccionada
    }
  };

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value); // Actualizar el término de búsqueda
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

        {/* Barra de búsqueda */}
        <SearchSection
          searchTerm={searchTerm}
          onSearchChange={handleSearchChange}
          onCategorySelect={handleCategorySelect}
        />

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
                <Button
                  variant="ghost"
                  className="w-full justify-start text-left hover:bg-primary hover:text-white transition-colors"
                  onClick={() => handleCategorySelect("Todas")} // Para mostrar todos los productos
                >
                  Todas
                </Button>
                {categories.map((category) => (
                  <Button
                    key={category.id}
                    variant="ghost"
                    className="w-full justify-start text-left hover:bg-primary hover:text-white transition-colors"
                    onClick={() => handleCategorySelect(category.name)} // Establecer la categoría seleccionada
                  >
                    {category.name}
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
            {filteredProducts.map((product) => (
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
