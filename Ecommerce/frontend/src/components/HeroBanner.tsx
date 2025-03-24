
import React from 'react';
import { Button } from '@/components/ui/button';
import { ShoppingBag } from 'lucide-react';

const HeroBanner = () => {
  const scrollToOffers = () => {
    const offersSection = document.getElementById('ofertas');
    if (offersSection) {
      offersSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="relative h-[80vh] w-full overflow-hidden bg-black">
      <div 
        className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7')] bg-cover bg-center"
        style={{ filter: 'brightness(0.7)' }}
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
      <div className="relative container h-full flex flex-col justify-center items-start">
        <span className="inline-flex animate-fade-in-up px-4 py-1.5 mb-4 text-sm font-medium text-white bg-primary rounded-full">
          Nueva Colección 2024
        </span>
        <h1 className="animate-fade-in-up text-4xl md:text-6xl font-bold text-white mb-6 max-w-2xl">
          Disfracasos - Tu Tienda de Disfraces
        </h1>
        <p className="animate-fade-in-up text-lg md:text-xl text-white/90 mb-8 max-w-xl">
          Descubre nuestra colección premium de disfraces para cada ocasión. Desde superhéroes hasta personajes de fantasía.
        </p>
        <div className="flex flex-wrap gap-4">
          <Button 
            size="lg"
            className="animate-fade-in-up bg-white text-black hover:bg-white/90 transition-all duration-300 group"
          >
            Comprar Ahora
            <ShoppingBag className="ml-2 h-5 w-5 transition-transform group-hover:scale-110" />
          </Button>
          <Button 
            size="lg"
            className="animate-fade-in-up bg-primary text-white hover:bg-primary/90 transition-all duration-300"
            onClick={scrollToOffers}
          >
            Ver Ofertas
          </Button>
        </div>
      </div>
    </div>
  );
};

export default HeroBanner;
