
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { 
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { CreditCard, ArrowLeft, CheckCircle, ShoppingBag } from 'lucide-react';

// Productos de ejemplo en el carrito
const cartItems = [
  {
    id: 1,
    name: "Disfraz Spider-Man",
    price: 89.99,
    quantity: 1,
    image: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7"
  },
  {
    id: 2,
    name: "Conjunto Wonder Woman",
    price: 129.99,
    quantity: 1,
    image: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7"
  }
];

const Checkout = () => {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);
  
  // Campos del formulario
  const [cardName, setCardName] = useState('');
  const [cardNumber, setCardNumber] = useState('');
  const [cardExpiry, setCardExpiry] = useState('');
  const [cardCVV, setCardCVV] = useState('');
  const [address, setAddress] = useState('');
  const [city, setCity] = useState('');
  const [postalCode, setPostalCode] = useState('');
  
  // Calcular total
  const subtotal = cartItems.reduce((total, item) => total + (item.price * item.quantity), 0);
  const shipping = 9.99;
  const total = subtotal + shipping;
  
  const handleProcessPayment = () => {
    setIsLoading(true);
    
    // Simulación de procesamiento de pago
    setTimeout(() => {
      setIsLoading(false);
      // Redirigir a una página de confirmación o al dashboard
      navigate('/dashboard');
    }, 2000);
  };
  
  return (
    <div className="container mx-auto py-32">
      <Button 
        variant="ghost" 
        className="mb-8 flex items-center gap-2"
        onClick={() => navigate(-1)}
      >
        <ArrowLeft className="h-4 w-4" />
        Volver
      </Button>
      
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Resumen del pedido */}
        <div className="lg:col-span-1">
          <Card>
            <CardHeader>
              <CardTitle>Resumen del Pedido</CardTitle>
              <CardDescription>
                {cartItems.length} {cartItems.length === 1 ? 'artículo' : 'artículos'} en tu carrito
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              {/* Lista de productos */}
              <div className="space-y-4">
                {cartItems.map((item) => (
                  <div key={item.id} className="flex gap-4">
                    <img 
                      src={item.image} 
                      alt={item.name} 
                      className="h-16 w-16 rounded-md object-cover" 
                    />
                    <div className="flex-1">
                      <p className="font-medium">{item.name}</p>
                      <p className="text-sm text-gray-500">Cantidad: {item.quantity}</p>
                      <p className="font-bold">${item.price}</p>
                    </div>
                  </div>
                ))}
              </div>
              
              {/* Totales */}
              <div className="border-t pt-4 space-y-2">
                <div className="flex justify-between">
                  <span className="text-gray-600">Subtotal</span>
                  <span>${subtotal.toFixed(2)}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Envío</span>
                  <span>${shipping.toFixed(2)}</span>
                </div>
                <div className="flex justify-between font-bold text-lg">
                  <span>Total</span>
                  <span>${total.toFixed(2)}</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
        
        {/* Formulario de pago */}
        <div className="lg:col-span-2">
          <Card>
            <CardHeader>
              <CardTitle>Información de Pago</CardTitle>
              <CardDescription>
                Completa la información para procesar tu compra
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form className="space-y-6">
                {/* Dirección de envío */}
                <div className="space-y-4">
                  <h3 className="font-medium">Dirección de Envío</h3>
                  <div className="grid grid-cols-1 gap-4">
                    <Input 
                      placeholder="Dirección completa" 
                      value={address}
                      onChange={(e) => setAddress(e.target.value)}
                      required
                    />
                    <div className="grid grid-cols-2 gap-4">
                      <Input 
                        placeholder="Ciudad" 
                        value={city}
                        onChange={(e) => setCity(e.target.value)}
                        required
                      />
                      <Input 
                        placeholder="Código Postal" 
                        value={postalCode}
                        onChange={(e) => setPostalCode(e.target.value)}
                        required
                      />
                    </div>
                  </div>
                </div>
                
                {/* Información de tarjeta */}
                <div className="space-y-4">
                  <h3 className="font-medium">Información de Tarjeta</h3>
                  <div className="grid grid-cols-1 gap-4">
                    <div className="relative">
                      <CreditCard className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
                      <Input 
                        placeholder="Nombre en la tarjeta" 
                        className="pl-10"
                        value={cardName}
                        onChange={(e) => setCardName(e.target.value)}
                        required
                      />
                    </div>
                    <div className="relative">
                      <CreditCard className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
                      <Input 
                        placeholder="Número de tarjeta" 
                        className="pl-10"
                        value={cardNumber}
                        onChange={(e) => setCardNumber(e.target.value)}
                        required
                      />
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                      <Input 
                        placeholder="MM/AA" 
                        value={cardExpiry}
                        onChange={(e) => setCardExpiry(e.target.value)}
                        required
                      />
                      <Input 
                        placeholder="CVV" 
                        value={cardCVV}
                        onChange={(e) => setCardCVV(e.target.value)}
                        required
                      />
                    </div>
                  </div>
                </div>
              </form>
            </CardContent>
            <CardFooter>
              <AlertDialog>
                <AlertDialogTrigger asChild>
                  <Button className="w-full gap-2" disabled={isLoading}>
                    {isLoading ? (
                      'Procesando...'
                    ) : (
                      <>
                        <ShoppingBag className="h-5 w-5" />
                        Finalizar Compra
                      </>
                    )}
                  </Button>
                </AlertDialogTrigger>
                <AlertDialogContent className="bg-white">
                  <AlertDialogHeader>
                    <AlertDialogTitle>¿Estás seguro de finalizar la compra?</AlertDialogTitle>
                    <AlertDialogDescription>
                      Al confirmar, se procesará el pago por ${total.toFixed(2)} 
                      y recibirás un correo con los detalles de tu pedido.
                    </AlertDialogDescription>
                  </AlertDialogHeader>
                  <AlertDialogFooter>
                    <AlertDialogCancel>No, cancelar</AlertDialogCancel>
                    <AlertDialogAction onClick={handleProcessPayment}>
                      <CheckCircle className="mr-2 h-4 w-4" />
                      Sí, finalizar compra
                    </AlertDialogAction>
                  </AlertDialogFooter>
                </AlertDialogContent>
              </AlertDialog>
            </CardFooter>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
