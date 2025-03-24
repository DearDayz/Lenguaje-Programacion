
import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-black text-white">
      <div className="container mx-auto py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Columna 1 - Logo y descripción */}
          <div className="space-y-4">
            <h3 className="text-2xl font-bold text-primary">Disfracasos</h3>
            <p className="text-gray-400">
              Tu destino para los mejores disfraces y accesorios para todas las ocasiones.
            </p>
          </div>

          {/* Columna 2 - Enlaces rápidos */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Enlaces Rápidos</h4>
            <ul className="space-y-2">
              <li><Link to="/" className="text-gray-400 hover:text-primary">Inicio</Link></li>
              <li><Link to="/" className="text-gray-400 hover:text-primary">Categorías</Link></li>
              <li><Link to="/" className="text-gray-400 hover:text-primary">Ofertas</Link></li>
              <li><Link to="/contacto" className="text-gray-400 hover:text-primary">Contacto</Link></li>
            </ul>
          </div>

          {/* Columna 3 - Categorías */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Categorías</h4>
            <ul className="space-y-2">
              <li><Link to="/" className="text-gray-400 hover:text-primary">Halloween</Link></li>
              <li><Link to="/" className="text-gray-400 hover:text-primary">Superhéroes</Link></li>
              <li><Link to="/" className="text-gray-400 hover:text-primary">Cosplay</Link></li>
              <li><Link to="/" className="text-gray-400 hover:text-primary">Infantil</Link></li>
            </ul>
          </div>

          {/* Columna 4 - Contacto */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contacto</h4>
            <ul className="space-y-2 text-gray-400">
              <li>Email: info@disfracasos.com</li>
              <li>Teléfono: (123) 456-7890</li>
              <li>Dirección: Calle Principal #123</li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} Disfracasos. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
