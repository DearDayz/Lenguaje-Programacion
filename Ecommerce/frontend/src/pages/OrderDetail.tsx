
import React from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import { 
  ArrowLeft, 
  Package, 
  Truck, 
  CreditCard, 
  Calendar, 
  Clock, 
  MapPin, 
  CheckCircle,
  AlertCircle,
  Download
} from 'lucide-react';

// Simulación de datos de pedidos
const getOrderById = (id: string) => {
  const orders = [
    {
      id: 'ORD-001',
      date: '15/05/2023',
      time: '14:30',
      status: 'Entregado',
      paymentMethod: 'Tarjeta de crédito terminada en 4567',
      totalAmount: 89.99,
      shippingAddress: 'Calle Ejemplo 123, Ciudad de México, CP 12345',
      trackingNumber: 'TRK123456789',
      items: [
        {
          id: 1,
          name: 'Disfraz Spider-Man Deluxe',
          price: 89.99,
          quantity: 1,
          image: 'https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7',
          size: 'M'
        }
      ],
      timeline: [
        { status: 'Pedido recibido', date: '15/05/2023', time: '14:30' },
        { status: 'Pago confirmado', date: '15/05/2023', time: '14:35' },
        { status: 'En preparación', date: '16/05/2023', time: '09:15' },
        { status: 'Enviado', date: '17/05/2023', time: '11:30' },
        { status: 'Entregado', date: '19/05/2023', time: '16:45' }
      ]
    },
    {
      id: 'ORD-002',
      date: '28/04/2023',
      time: '10:15',
      status: 'Procesando',
      paymentMethod: 'PayPal',
      totalAmount: 259.98,
      shippingAddress: 'Avenida Principal 456, Guadalajara, CP 45678',
      trackingNumber: '',
      items: [
        {
          id: 2,
          name: 'Conjunto Wonder Woman',
          price: 129.99,
          quantity: 1,
          image: 'https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7',
          size: 'S'
        },
        {
          id: 3,
          name: 'Disfraz Batman Premium',
          price: 129.99,
          quantity: 1,
          image: 'https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7',
          size: 'L'
        }
      ],
      timeline: [
        { status: 'Pedido recibido', date: '28/04/2023', time: '10:15' },
        { status: 'Pago confirmado', date: '28/04/2023', time: '10:20' },
        { status: 'En preparación', date: '29/04/2023', time: '11:00' }
      ]
    }
  ];
  
  return orders.find(order => order.id === id);
};

const OrderDetail = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const order = id ? getOrderById(id) : null;
  
  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Entregado':
        return 'bg-green-500';
      case 'Enviado':
        return 'bg-blue-500';
      case 'Procesando':
      case 'En preparación':
        return 'bg-amber-500';
      case 'Cancelado':
        return 'bg-red-500';
      default:
        return 'bg-gray-500';
    }
  };
  
  if (!order) {
    return (
      <div className="container mx-auto py-32 text-center">
        <h1 className="text-2xl font-bold mb-4">Pedido no encontrado</h1>
        <p className="mb-8">Lo sentimos, el pedido que buscas no existe o ha sido eliminado.</p>
        <Button onClick={() => navigate('/dashboard')}>
          Volver a Mis Pedidos
        </Button>
      </div>
    );
  }
  
  // Calcular subtotal
  const subtotal = order.items.reduce((total, item) => total + (item.price * item.quantity), 0);
  const shipping = 9.99;
  
  return (
    <div className="container mx-auto py-32">
      <div className="flex flex-wrap justify-between items-center mb-8 gap-4">
        <Button 
          variant="ghost" 
          onClick={() => navigate('/dashboard')} 
          className="flex items-center gap-2"
        >
          <ArrowLeft className="h-4 w-4" />
          Volver a Mis Pedidos
        </Button>
        <div className="flex items-center gap-4">
          <h1 className="text-2xl font-bold">Pedido {order.id}</h1>
          <Badge className={`${getStatusColor(order.status)} text-white`}>
            {order.status}
          </Badge>
        </div>
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Resumen del pedido */}
        <div className="lg:col-span-2">
          <Card>
            <CardHeader>
              <CardTitle className="flex justify-between items-center">
                <span>Productos</span>
                <Button variant="outline" className="flex items-center gap-2">
                  <Download className="h-4 w-4" />
                  Factura
                </Button>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                {/* Lista de productos */}
                {order.items.map((item) => (
                  <div key={item.id} className="flex flex-wrap gap-4">
                    <img 
                      src={item.image} 
                      alt={item.name} 
                      className="h-24 w-24 rounded-md object-cover" 
                    />
                    <div className="flex-1">
                      <h3 className="font-medium">{item.name}</h3>
                      <div className="text-sm text-gray-500 space-y-1 mt-1">
                        <p>Talla: {item.size}</p>
                        <p>Cantidad: {item.quantity}</p>
                      </div>
                    </div>
                    <div className="text-right">
                      <p className="font-bold">${item.price.toFixed(2)}</p>
                    </div>
                  </div>
                ))}
                
                <Separator />
                
                {/* Totales */}
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Subtotal</span>
                    <span>${subtotal.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Envío</span>
                    <span>${shipping.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between font-bold text-lg pt-2">
                    <span>Total</span>
                    <span>${order.totalAmount.toFixed(2)}</span>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
        
        {/* Información de envío y pago */}
        <div className="lg:col-span-1 space-y-6">
          {/* Información del pedido */}
          <Card>
            <CardHeader>
              <CardTitle>Información del Pedido</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex flex-col">
                <div className="flex items-start gap-3">
                  <Calendar className="h-5 w-5 text-gray-500 shrink-0 mt-0.5" />
                  <div>
                    <p className="text-sm text-gray-500">Fecha del pedido</p>
                    <p className="font-medium">{order.date} - {order.time}</p>
                  </div>
                </div>
              </div>
              
              <div className="flex flex-col">
                <div className="flex items-start gap-3">
                  <CreditCard className="h-5 w-5 text-gray-500 shrink-0 mt-0.5" />
                  <div>
                    <p className="text-sm text-gray-500">Método de pago</p>
                    <p className="font-medium">{order.paymentMethod}</p>
                  </div>
                </div>
              </div>
              
              <div className="flex flex-col">
                <div className="flex items-start gap-3">
                  <MapPin className="h-5 w-5 text-gray-500 shrink-0 mt-0.5" />
                  <div>
                    <p className="text-sm text-gray-500">Dirección de envío</p>
                    <p className="font-medium">{order.shippingAddress}</p>
                  </div>
                </div>
              </div>
              
              {order.trackingNumber && (
                <div className="flex flex-col">
                  <div className="flex items-start gap-3">
                    <Truck className="h-5 w-5 text-gray-500 shrink-0 mt-0.5" />
                    <div>
                      <p className="text-sm text-gray-500">Número de seguimiento</p>
                      <p className="font-medium">{order.trackingNumber}</p>
                    </div>
                  </div>
                </div>
              )}
            </CardContent>
          </Card>
          
          {/* Estado del pedido */}
          <Card>
            <CardHeader>
              <CardTitle>Estado del Pedido</CardTitle>
            </CardHeader>
            <CardContent>
              <ol className="relative border-l border-gray-200 ml-3 space-y-6">
                {order.timeline.map((event, index) => (
                  <li key={index} className="mb-10 ml-6">
                    <span className="absolute flex items-center justify-center w-6 h-6 rounded-full -left-3 ring-8 ring-white">
                      {index === order.timeline.length - 1 ? (
                        order.status === 'Entregado' ? (
                          <CheckCircle className="w-5 h-5 text-green-500" />
                        ) : (
                          <Clock className="w-5 h-5 text-amber-500" />
                        )
                      ) : (
                        <div className={`w-3.5 h-3.5 rounded-full ${
                          index === order.timeline.length - 1 
                            ? getStatusColor(order.status) 
                            : 'bg-gray-400'
                        }`}></div>
                      )}
                    </span>
                    <h3 className="font-medium">{event.status}</h3>
                    <p className="text-sm text-gray-500">
                      {event.date} - {event.time}
                    </p>
                  </li>
                ))}
              </ol>
              
              {order.status !== 'Entregado' && order.status !== 'Cancelado' && (
                <div className="border-t pt-4 mt-2">
                  <p className="text-sm text-gray-500 flex items-center gap-2">
                    <AlertCircle className="h-4 w-4 text-amber-500" />
                    Pedido en proceso
                  </p>
                </div>
              )}
            </CardContent>
          </Card>
          
          {/* Ayuda */}
          <Card>
            <CardContent className="p-4">
              <p className="text-sm text-gray-600">
                ¿Necesitas ayuda con este pedido?{' '}
                <Link to="/contacto" className="text-primary hover:underline">
                  Contáctanos
                </Link>
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default OrderDetail;
