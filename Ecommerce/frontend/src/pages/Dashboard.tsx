import React, { useEffect, useState } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  FileText,
  User,
  Clock,
  LogOut,
  Home,
  Edit,
  Download,
} from "lucide-react";

// Datos de ejemplo para el historial de compras
const purchaseHistory = [
  {
    id: "FAC-001",
    date: "15/05/2023",
    total: 89.99,
    items: 1,
  },
  {
    id: "FAC-002",
    date: "28/04/2023",
    total: 259.98,
    items: 2,
  },
];

const Dashboard = () => {
  const location = useLocation();
  const userId = location.state?.userId; // Obtener el ID del usuario pasado desde el Login
  const [activeTab, setActiveTab] = useState("profile");
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const navigate = useNavigate();

  useEffect(() => {
    const fetchUser = async () => {
      // Función para obtener los datos del usuario
      try {
        const response = await fetch(
          `http://127.0.0.1:8001/api/auth/users/${userId}`
        );
        if (!response.ok) {
          throw new Error("Error al obtener los datos del usuario");
        }
        const data = await response.json();
        setUser(data.user); // Asignar los datos del usuario
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    if (userId) {
      fetchUser(); // Llamar a la función para obtener los datos del usuario
    }
  }, [userId]);

  if (loading) {
    return <div>Cargando...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  // Imprimir en consola que se llegó a la vista del dashboard
  console.log(`Llegó a vista dashboard con id=${userId}`);

  return (
    <div className="container mx-auto py-16 px-4 md:py-32 md:px-6">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4">
        <h1 className="text-2xl md:text-3xl font-bold">Mi Cuenta</h1>
        <div className="flex flex-wrap gap-2 md:gap-4 w-full md:w-auto">
          <Button
            variant="outline"
            size="sm"
            asChild
            className="w-full md:w-auto"
          >
            <Link to="/">
              <Home className="mr-2 h-4 w-4" />
              Volver a la tienda
            </Link>
          </Button>
          <Button
            variant="outline"
            size="sm"
            className="text-red-500 hover:text-red-700 hover:bg-red-50 w-full md:w-auto transition-colors"
          >
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
            <Tabs
              defaultValue="profile"
              orientation="vertical"
              className="w-full"
            >
              <TabsList className="flex flex-col items-start justify-start w-full space-y-1">
                <TabsTrigger
                  value="profile"
                  className="w-full justify-start text-left px-2 transition-colors"
                  onClick={() => setActiveTab("profile")}
                >
                  <User className="mr-2 h-4 w-4" />
                  <span className="text-sm md:text-base">Perfil</span>
                </TabsTrigger>
                <TabsTrigger
                  value="history"
                  className="w-full justify-start text-left px-2 transition-colors"
                  onClick={() => setActiveTab("history")}
                >
                  <FileText className="mr-2 h-4 w-4" />
                  <span className="text-sm md:text-base">
                    Historial de Pedidos
                  </span>
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
                {activeTab === "profile" && "Información Personal"}
                {activeTab === "history" && "Historial de Compras"}
              </CardTitle>
            </CardHeader>
            <CardContent>
              {/* Contenido de Perfil */}
              {activeTab === "profile" && (
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
                      <p className="font-medium">{user.telefono}</p>
                    </div>
                    <div>
                      <p className="text-sm text-gray-500">Dirección</p>
                      <p className="font-medium">{user.direccion}</p>
                    </div>
                    <div>
                      <p className="text-sm text-gray-500">Miembro desde</p>
                      <p className="font-medium">
                        {new Date(user.created_at).toLocaleDateString()}
                      </p>
                    </div>
                  </div>
                  <Button
                    className="flex items-center gap-2 w-full md:w-auto hover:bg-primary/90 transition-colors"
                    onClick={() => navigate("/editar-perfil")}
                  >
                    <Edit className="h-4 w-4" />
                    Editar Información
                  </Button>
                </div>
              )}

              {/* Contenido de Historial de Compras */}
              {activeTab === "history" && (
                <div>
                  {purchaseHistory.length > 0 ? (
                    <div className="divide-y">
                      {purchaseHistory.map((purchase) => (
                        <div
                          key={purchase.id}
                          className="py-4 flex flex-col md:flex-row md:justify-between md:items-center gap-3"
                        >
                          <div>
                            <h3 className="font-medium">
                              Factura: {purchase.id}
                            </h3>
                            <div className="flex items-center text-sm text-gray-500">
                              <Clock className="mr-1 h-3 w-3" />
                              {purchase.date}
                            </div>
                            <p className="text-sm">
                              {purchase.items}{" "}
                              {purchase.items === 1 ? "artículo" : "artículos"}
                            </p>
                          </div>
                          <div className="text-left md:text-right flex flex-col items-start md:items-end">
                            <p className="font-bold">
                              ${purchase.total.toFixed(2)}
                            </p>
                            <Button
                              variant="link"
                              className="h-auto p-0 flex items-center gap-1 hover:text-primary/90 transition-colors"
                            >
                              <Download className="h-3 w-3" />
                              Descargar factura
                            </Button>
                          </div>
                        </div>
                      ))}
                    </div>
                  ) : (
                    <div className="text-center py-8">
                      <FileText className="mx-auto h-12 w-12 text-gray-400" />
                      <h3 className="mt-2 text-lg font-medium">
                        No tienes compras
                      </h3>
                      <p className="text-gray-500 mt-1">
                        Tu historial de compras aparecerá aquí.
                      </p>
                      <Button
                        className="mt-4 hover:bg-primary/90 transition-colors"
                        asChild
                      >
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
