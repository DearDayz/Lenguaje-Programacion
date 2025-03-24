
import React from 'react';
import HeroBanner from '@/components/HeroBanner';
import SearchSection from '@/components/SearchSection';
import ProductCard from '@/components/ProductCard';
import PromotionBanner from '@/components/PromotionBanner';

// Productos en oferta
const productosOferta = [
  {
    title: "Disfraz Spider-Man Deluxe",
    price: 69.99,
    originalPrice: 89.99,
    image: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7",
    rating: 4.8,
    isNew: false,
    discount: 20,
  },
  {
    title: "Traje Batman Dark Knight",
    price: 119.99,
    originalPrice: 149.99,
    image: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7",
    rating: 4.7,
    isNew: false,
    discount: 20,
  },
  {
    title: "Disfraz de Iron Man",
    price: 127.99,
    originalPrice: 159.99,
    image: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7",
    rating: 4.9,
    isNew: false,
    discount: 20,
  },
  {
    title: "Traje de Thor",
    price: 107.99,
    originalPrice: 134.99,
    image: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7",
    rating: 4.6,
    isNew: false,
    discount: 20,
  },
  {
    title: "Traje de Aquaman",
    price: 119.99,
    originalPrice: 149.99,
    image: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7",
    rating: 4.5,
    isNew: false,
    discount: 20,
  },
  {
    title: "Traje de Joker",
    price: 111.99,
    originalPrice: 139.99,
    image: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7",
    rating: 4.8,
    isNew: false,
    discount: 20,
  }
];

const Ofertas = () => {
  return (
    <main className="min-h-screen bg-white">
      <HeroBanner />
      <SearchSection />
      
      <section id="ofertas" className="container py-16">
        <div className="text-center mb-8 animate-fade-in">
          <h2 className="text-3xl font-bold mb-4">Disfraces en Oferta</h2>
          <p className="text-gray-600 max-w-2xl mx-auto mb-6">
            ¡No te pierdas nuestros increíbles descuentos por tiempo limitado!
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {productosOferta.map((producto, index) => (
            <ProductCard key={index} {...producto} />
          ))}
        </div>
      </section>
      
      <PromotionBanner />
    </main>
  );
};

export default Ofertas;
