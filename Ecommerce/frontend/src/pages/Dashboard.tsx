
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { ShoppingBag, User, Clock, LogOut, Home, Edit } from 'lucide-react';

// Datos de ejemplo para el dashboard
const recentOrders = [
  {
    id: 'ORD-001',
    date: '15/05/2023',
    status: 'Entregado',
    total: 89.99,
    items: 1
  },
  {
    id: 'ORD-002',
    date: '28/04/2023',
    status: 'Procesando',
    total: 259.98,
    items: 2
  }
];

const Dashboard = () => {
  const [activeTab, setActiveTab] = useState('profile');
  const navigate = useNavigate();
  
  // Datos de ejemplo del usuario
  const user = {
    name: 'Juan Pérez',
    email: 'juan.perez@ejemplo.com',
    memberSince: '10/01/2023',
    address: 'Calle Ejemplo 123, Ciudad',
    phone: '555-123-4567'
  };

  return (
    <div className="container mx-auto py-16 px-4 md:py-32 md:px-6">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4">
        <h1 className="text-2xl md:text-3xl font-bold">Mi Cuenta</h1>
        <div className="flex flex-wrap gap-2 md:gap-4 w-full md:w-auto">
          <Button variant="outline" size="sm" asChild className="w-full md:w-auto">
            <Link to="/">
              <Home className="mr-2 h-4 w-4" />
              Volver a la tienda
            </Link>
          </Button>
          <Button variant="outline" size="sm" className="text-red-500 hover:text-red-700 hover:bg-red-50 w-full md:w-auto transition-colors">
            <LogOut className="mr-2 h-4 w-4" />
            Cerrar sesión
          </Button>
        </div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        {/* Panel lateral */}
        <Card className="md:col-span-1 h-auto">
          <CardHeader>
            <CardTitle>Hola, {user.name}</CardTitle>
          </CardHeader>
          <CardContent>
            <Tabs defaultValue="profile" orientation="vertical" className="w-full">
              <TabsList className="flex flex-col items-start justify-start w-full space-y-1">
                <TabsTrigger
                  value="profile"
                  className="w-full justify-start text-left px-2 transition-colors"
                  onClick={() => setActiveTab('profile')}
                >
                  <User className="mr-2 h-4 w-4" />
                  <span className="text-sm md:text-base">Perfil</span>
                </TabsTrigger>
                <TabsTrigger
                  value="orders"
                  className="w-full justify-start text-left px-2 transition-colors"
                  onClick={() => setActiveTab('orders')}
                >
                  <ShoppingBag className="mr-2 h-4 w-4" />
                  <span className="text-sm md:text-base">Mis Pedidos</span>
                </TabsTrigger>
              </TabsList>
            </Tabs>
          </CardContent>
        </Card>
        
        {/* Contenido principal */}
        <div className="md:col-span-3">
          <Card className="h-full">
            <CardHeader>
              <CardTitle>
                {activeTab === 'profile' && 'Información Personal'}
                {activeTab === 'orders' && 'Historial de Pedidos'}
              </CardTitle>
            </CardHeader>
            <CardContent>
              {/* Contenido de Perfil */}
              {activeTab === 'profile' && (
                <div className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <p className="text-sm text-gray-500">Nombre</p>
                      <p className="font-medium">{user.name}</p>
                    </div>
                    <div>
                      <p className="text-sm text-gray-500">Email</p>
                      <p className="font-medium">{user.email}</p>
                    </div>
                    <div>
                      <p className="text-sm text-gray-500">Teléfono</p>
                      <p className="font-medium">{user.phone}</p>
                    </div>
                    <div>
                      <p className="text-sm text-gray-500">Dirección</p>
                      <p className="font-medium">{user.address}</p>
                    </div>
                    <div>
                      <p className="text-sm text-gray-500">Miembro desde</p>
                      <p className="font-medium">{user.memberSince}</p>
                    </div>
                  </div>
                  <Button className="flex items-center gap-2 w-full md:w-auto hover:bg-primary/90 transition-colors" onClick={() => navigate('/editar-perfil')}>
                    <Edit className="h-4 w-4" />
                    Editar Información
                  </Button>
                </div>
              )}
              
              {/* Contenido de Pedidos */}
              {activeTab === 'orders' && (
                <div>
                  {recentOrders.length > 0 ? (
                    <div className="divide-y">
                      {recentOrders.map((order) => (
                        <div key={order.id} className="py-4 flex flex-col md:flex-row md:justify-between md:items-center gap-3">
                          <div>
                            <h3 className="font-medium">{order.id}</h3>
                            <div className="flex items-center text-sm text-gray-500">
                              <Clock className="mr-1 h-3 w-3" />
                              {order.date}
                            </div>
                            <p className="text-sm">
                              <span className={`${
                                order.status === 'Entregado' 
                                  ? 'text-green-600' 
                                  : 'text-amber-600'
                              }`}>
                                {order.status}
                              </span>
                              {' • '}{order.items} {order.items === 1 ? 'artículo' : 'artículos'}
                            </p>
                          </div>
                          <div className="text-left md:text-right">
                            <p className="font-bold">${order.total}</p>
                            <Button 
                              variant="link" 
                              className="h-auto p-0 hover:text-primary/90 transition-colors"
                              onClick={() => navigate(`/pedido/${order.id}`)}
                            >
                              Ver detalles
                            </Button>
                          </div>
                        </div>
                      ))}
                    </div>
                  ) : (
                    <div className="text-center py-8">
                      <ShoppingBag className="mx-auto h-12 w-12 text-gray-400" />
                      <h3 className="mt-2 text-lg font-medium">No tienes pedidos</h3>
                      <p className="text-gray-500 mt-1">Tus pedidos aparecerán aquí.</p>
                      <Button className="mt-4 hover:bg-primary/90 transition-colors" asChild>
                        <Link to="/">Ir a comprar</Link>
                      </Button>
                    </div>
                  )}
                </div>
              )}
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
