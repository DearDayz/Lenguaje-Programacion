import React from "react";
import { Link } from "react-router-dom";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

interface ProductCardProps {
  id: number; // Cambiado de title a id
  title: string;
  price: number;
  image: string;
  isNew?: boolean;
  isOffer?: boolean;
}

const ProductCard = ({
  id, // Añadido id
  title,
  price,
  image,
  isNew,
  isOffer,
}: ProductCardProps) => {
  return (
    <Link to={`/producto/${id}`}>
      {" "}
      {/* Cambiado para usar el ID */}
      <Card className="group overflow-hidden bg-white transition-all duration-300 hover:shadow-lg cursor-pointer flex flex-col">
        {/* Contenedor de la imagen */}
        <div className="relative aspect-square overflow-hidden w-full h-64">
          <img
            src={image}
            alt={title}
            className="absolute inset-0 w-full h-full object-fill transition-transform duration-300 group-hover:scale-105"
            onError={(e) => {
              console.error("Error al cargar la imagen:", image); // Muestra la URL en la consola si hay un error
              e.currentTarget.src = "https://via.placeholder.com/300"; // Imagen de respaldo
            }}
          />
          {/* Badges para "Nuevo" y "Oferta" */}
          {isNew && !isOffer && (
            <Badge className="absolute top-2 right-2 bg-primary text-white transition-colors">
              Nuevo
            </Badge>
          )}
          {isOffer && (
            <Badge className="absolute top-2 right-2 bg-red-500 text-white transition-colors">
              Oferta
            </Badge>
          )}
        </div>
        {/* Detalles del producto */}
        <div className="p-4 flex flex-col h-full">
          <h3 className="font-medium text-lg mb-2 transition-colors group-hover:text-primary">
            {title}
          </h3>
          <div className="mt-auto pt-2">
            <span className="text-xl font-bold">${price}</span>
          </div>
        </div>
      </Card>
    </Link>
  );
};

export default ProductCard;
