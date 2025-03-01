import React from "react";
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

const products = [
  {
    title: "Disfraz Spider-Man Deluxe",
    price: 89.99,
    image: "public/fondo.jpg",
    rating: 4.8,
    isNew: true,
  },
  {
    title: "Conjunto Wonder Woman",
    price: 129.99,
    image: "public/fondo.jpg",
    rating: 4.9,
  },
  {
    title: "Traje Batman Dark Knight",
    price: 149.99,
    image: "public/fondo.jpg",
    rating: 4.7,
    isNew: true,
  },
  {
    title: "Vestido Princesa Elsa",
    price: 69.99,
    image: "public/fondo.jpg",
    rating: 4.6,
  },
  {
    title: "Disfraz de Iron Man",
    price: 159.99,
    image: "public/fondo.jpg",
    rating: 4.9,
    isNew: true,
  },
  {
    title: "Traje de Capitán América",
    price: 139.99,
    image: "public/fondo.jpg",
    rating: 4.7,
  },
  {
    title: "Disfraz de Black Panther",
    price: 144.99,
    image: "public/fondo.jpg",
    rating: 4.8,
    isNew: true,
  },
  {
    title: "Traje de Thor",
    price: 134.99,
    image: "public/fondo.jpg",
    rating: 4.6,
  },
  {
    title: "Disfraz de Flash",
    price: 119.99,
    image: "public/fondo.jpg",
    rating: 4.7,
  },
  {
    title: "Traje de Aquaman",
    price: 149.99,
    image: "public/fondo.jpg",
    rating: 4.5,
    isNew: true,
  },
  {
    title: "Disfraz de Hulk",
    price: 129.99,
    image: "public/fondo.jpg",
    rating: 4.6,
  },
  {
    title: "Traje de Joker",
    price: 139.99,
    image: "public/fondo.jpg",
    rating: 4.8,
    isNew: true,
  },
];

const FeaturedProducts = () => {
  return (
    <section className="container py-16">
      <div className="text-center mb-8 animate-fade-in">
        <h2 className="text-3xl font-bold mb-4">Disfraces Destacados</h2>
        <p className="text-gray-600 max-w-2xl mx-auto mb-6">
          Descubre nuestros disfraces más populares y nuevas llegadas
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
                    asChild
                  >
                    <a href={`/categoria/${category.toLowerCase()}`}>
                      {category}
                    </a>
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
            {products.map((product, index) => (
              <ProductCard key={index} {...product} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;
