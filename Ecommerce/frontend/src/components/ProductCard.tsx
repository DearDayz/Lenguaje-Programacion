
import React from 'react';
import { Link } from 'react-router-dom';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

interface ProductCardProps {
  title: string;
  price: number;
  originalPrice?: number;
  discount?: number;
  image: string;
  isNew?: boolean;
}

const ProductCard = ({ title, price, originalPrice, discount, image, isNew }: ProductCardProps) => {
  return (
    <Link to={`/producto/${title.toLowerCase().replace(/ /g, '-')}`}>
      <Card className="group overflow-hidden bg-white transition-all duration-300 hover:shadow-lg animate-scale-in cursor-pointer h-full flex flex-col">
        <div className="relative aspect-square overflow-hidden">
          <img
            src={image}
            alt={title}
            className="object-cover w-full h-full transition-transform duration-300 group-hover:scale-105"
          />
          {isNew && (
            <Badge className="absolute top-2 right-2 bg-primary text-white transition-colors">
              Nuevo
            </Badge>
          )}
          {discount && (
            <Badge className="absolute top-2 left-2 bg-red-500 text-white transition-colors">
              -{discount}%
            </Badge>
          )}
        </div>
        <div className="p-4 flex flex-col h-full">
          <h3 className="font-medium text-lg mb-2 transition-colors group-hover:text-primary">
            {title}
          </h3>
          <div className="mt-auto pt-2">
            {originalPrice ? (
              <div className="flex flex-col">
                <span className="text-xl font-bold">${price}</span>
                <div className="flex items-center gap-2">
                  <span className="text-sm line-through text-gray-500">${originalPrice}</span>
                  <Badge className="bg-red-500">Oferta</Badge>
                </div>
              </div>
            ) : (
              <span className="text-xl font-bold">${price}</span>
            )}
          </div>
        </div>
      </Card>
    </Link>
  );
};

export default ProductCard;
