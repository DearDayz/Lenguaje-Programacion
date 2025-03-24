
import React from 'react';
import { Button } from '@/components/ui/button';
import { Tag } from 'lucide-react';

const PromotionBanner = () => {
  return (
    <section className="bg-black text-white py-16">
      <div className="container">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div className="space-y-6 animate-fade-in">
            <span className="inline-flex px-4 py-1.5 text-sm font-medium bg-primary rounded-full">
              Oferta por Tiempo Limitado
            </span>
            <h2 className="text-4xl font-bold">
              Obtén 20% de Descuento en Todos los Disfraces de Halloween
            </h2>
            <p className="text-gray-300 text-lg">
              Usa el código HALLOWEEN20 al finalizar tu compra. Oferta válida hasta el 31 de octubre.
            </p>
            <Button
              size="lg"
              className="bg-white text-black hover:bg-primary hover:text-white transition-all duration-300"
            >
              <Tag className="mr-2 h-5 w-5" />
              Obtener Oferta
            </Button>
          </div>
          <div className="relative h-[300px] md:h-[400px] rounded-lg overflow-hidden animate-fade-in">
            <img
              src="https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7"
              alt="Promoción de Halloween"
              className="object-cover w-full h-full"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default PromotionBanner;
