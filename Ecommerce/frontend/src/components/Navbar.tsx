import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ShoppingCart, User, Menu, X, Trash2 } from "lucide-react";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
  SheetFooter,
  SheetClose,
} from "@/components/ui/sheet";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const navigate = useNavigate();

  // Ejemplo de items del carrito - en una app real vendría de tu gestión de estado del carrito
  const cartItems = [
    {
      id: 1,
      name: "Disfraz Spider-Man",
      price: 89.99,
      quantity: 1,
      image: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7",
    },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 20;
      setScrolled(isScrolled);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const totalPrice = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  const handleCheckout = () => {
    navigate("/checkout");
  };

  const scrollToOffers = () => {
    const offersSection = document.getElementById("ofertas");
    if (offersSection) {
      offersSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled ? "bg-white shadow-md" : "bg-white/80 backdrop-blur-sm"
      }`}
    >
      <div className="container mx-auto">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <span className="text-2xl font-bold text-primary">
              Disfracasos.com
            </span>
          </Link>

          {/* Enlaces de Navegación - Escritorio */}
          <div className="hidden md:flex items-center space-x-8">
            <Link
              to="/"
              className="text-gray-700 hover:text-primary transition-colors"
            >
              Inicio
            </Link>
            <Link
              to="/nosotros"
              className="text-gray-700 hover:text-primary transition-colors"
            >
              Nosotros
            </Link>
            <span
              onClick={scrollToOffers}
              className="text-gray-700 hover:text-primary transition-colors cursor-pointer"
            >
              Ofertas
            </span>
            <Link
              to="/contacto"
              className="text-gray-700 hover:text-primary transition-colors"
            >
              Contacto
            </Link>
          </div>

          {/* Iconos */}
          <div className="flex items-center space-x-4">
            <Sheet>
              <SheetTrigger asChild>
                <Button
                  variant="ghost"
                  size="icon"
                  className="hover:text-primary relative"
                >
                  <ShoppingCart className="h-5 w-5" />
                  {cartItems.length > 0 && (
                    <span className="absolute -top-2 -right-2 bg-primary text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                      {cartItems.length}
                    </span>
                  )}
                </Button>
              </SheetTrigger>
              <SheetContent className="w-full sm:w-[400px] overflow-y-auto">
                <SheetHeader>
                  <SheetTitle>Tu Carrito</SheetTitle>
                </SheetHeader>
                <div className="flex-1 overflow-y-auto py-6">
                  {cartItems.length > 0 ? (
                    <div className="space-y-6">
                      {cartItems.map((item) => (
                        <div
                          key={item.id}
                          className="flex items-center space-x-4"
                        >
                          <img
                            src={item.image}
                            alt={item.name}
                            className="h-20 w-20 rounded-md object-cover"
                          />
                          <div className="flex-1">
                            <h3 className="text-sm font-medium">{item.name}</h3>
                            <p className="text-sm text-gray-500">
                              Cantidad: {item.quantity}
                            </p>
                            <p className="text-sm font-medium">${item.price}</p>
                          </div>
                          <Button
                            variant="ghost"
                            size="icon"
                            className="hover:text-red-500"
                          >
                            <Trash2 className="h-4 w-4" />
                          </Button>
                        </div>
                      ))}
                    </div>
                  ) : (
                    <div className="text-center py-12">
                      <p className="text-gray-500">Tu carrito está vacío</p>
                    </div>
                  )}
                </div>
                {cartItems.length > 0 && (
                  <SheetFooter className="border-t pt-4">
                    <div className="w-full space-y-4">
                      <div className="flex justify-between">
                        <span className="font-medium">Total:</span>
                        <span className="font-bold">
                          ${totalPrice.toFixed(2)}
                        </span>
                      </div>
                      <div className="grid grid-cols-2 gap-4">
                        <Button
                          variant="outline"
                          className="w-full hover:bg-accent hover:text-accent-foreground transition-colors"
                        >
                          Vaciar Carrito
                        </Button>
                        <SheetClose asChild>
                          <Button
                            className="w-full hover:bg-primary/90 transition-colors"
                            onClick={handleCheckout}
                          >
                            Finalizar Compra
                          </Button>
                        </SheetClose>
                      </div>
                    </div>
                  </SheetFooter>
                )}
              </SheetContent>
            </Sheet>

            <Link to="/iniciar-sesion">
              <Button
                variant="ghost"
                size="icon"
                className="hover:text-primary"
              >
                <User className="h-5 w-5" />
              </Button>
            </Link>

            <Sheet open={mobileMenuOpen} onOpenChange={setMobileMenuOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className="md:hidden">
                  <Menu className="h-5 w-5" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[250px]">
                <SheetHeader>
                  <SheetTitle>Menú</SheetTitle>
                  <SheetClose asChild>
                    <Button
                      variant="ghost"
                      size="icon"
                      className="absolute right-4 top-4"
                    >
                      <X className="h-4 w-4" />
                    </Button>
                  </SheetClose>
                </SheetHeader>
                <div className="py-6 flex flex-col space-y-4">
                  <SheetClose asChild>
                    <Link
                      to="/"
                      className="text-lg hover:text-primary transition-colors"
                    >
                      Inicio
                    </Link>
                  </SheetClose>
                  <SheetClose asChild>
                    <Link
                      to="/nosotros"
                      className="text-lg hover:text-primary transition-colors"
                    >
                      Nosotros
                    </Link>
                  </SheetClose>
                  <SheetClose asChild>
                    <span
                      onClick={scrollToOffers}
                      className="text-lg hover:text-primary transition-colors cursor-pointer"
                    >
                      Ofertas
                    </span>
                  </SheetClose>
                  <SheetClose asChild>
                    <Link
                      to="/contacto"
                      className="text-lg hover:text-primary transition-colors"
                    >
                      Contacto
                    </Link>
                  </SheetClose>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
