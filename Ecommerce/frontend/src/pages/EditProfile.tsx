import React, { useEffect, useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardFooter,
} from "@/components/ui/card";
import { ArrowLeft, Save, X } from "lucide-react";

const EditProfile = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const userId = location.state?.userId; // Obtener el ID del usuario pasado desde el Dashboard

  // Imprimir en consola el ID del usuario
  console.log(`ID del usuario recibido en EditProfile: ${userId}`);

  // Estado para los datos del formulario
  const [formData, setFormData] = useState({
    id: userId, // Inicializar el ID aquí
    name: "",
    email: "",
    phone: "",
    address: "",
    postalCode: "",
    city: "",
    country: "",
    additionalInfo: "",
  });

  const [errors, setErrors] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
    postalCode: "",
    city: "",
    country: "",
  });

  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    // Cargar los datos del usuario al montar el componente
    const fetchUser = async () => {
      try {
        const response = await fetch(
          `http://127.0.0.1:8001/api/auth/users/${userId}`
        );
        if (!response.ok) {
          throw new Error("Error al obtener los datos del usuario");
        }
        const data = await response.json();
        // Asignar los datos del usuario al estado
        setFormData({
          id: data.user.id, // Asegurarse de que el ID se cargue correctamente
          name: data.user.name,
          email: data.user.email,
          phone: data.user.telefono,
          address: data.user.direccion,
          postalCode: data.user.codigo_postal,
          city: data.user.ciudad,
          country: data.user.pais,
          additionalInfo: data.user.informacion_adicional,
        });
      } catch (error) {
        console.error(error);
      }
    };

    if (userId) {
      fetchUser();
    }
  }, [userId]);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    // Limpiar errores al editar
    if (errors[name as keyof typeof errors]) {
      setErrors((prev) => ({ ...prev, [name]: "" }));
    }
  };

  const validateForm = () => {
    let isValid = true;
    const newErrors = { ...errors };

    if (!formData.name.trim()) {
      newErrors.name = "El nombre es obligatorio";
      isValid = false;
    }

    if (!formData.email.trim()) {
      newErrors.email = "El correo electrónico es obligatorio";
      isValid = false;
    } else {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(formData.email)) {
        newErrors.email = "Ingresa un correo electrónico válido";
        isValid = false;
      }
    }

    if (!formData.phone.trim()) {
      newErrors.phone = "El teléfono es obligatorio";
      isValid = false;
    }

    if (!formData.address.trim()) {
      newErrors.address = "La dirección es obligatoria";
      isValid = false;
    }

    if (!formData.city.trim()) {
      newErrors.city = "La ciudad es obligatoria";
      isValid = false;
    }

    if (!formData.country.trim()) {
      newErrors.country = "El país es obligatorio";
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    setIsLoading(true);

    try {
      // Organizar los datos en un JSON con la estructura correcta
      const userData = {
        id: formData.id,
        name: formData.name,
        email: formData.email,
        email_verified_at: null,
        created_at: "2025-03-21T15:37:38.000000Z",
        updated_at: "2025-03-21T15:40:03.000000Z",
        telefono: formData.phone,
        direccion: formData.address,
        codigo_postal: formData.postalCode,
        ciudad: formData.city,
        pais: formData.country,
        informacion_adicional: formData.additionalInfo,
      };

      // Realizar la solicitud PUT para actualizar los datos del usuario
      const response = await fetch(
        `http://127.0.0.1:8001/api/auth/users/${formData.id}`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(userData),
        }
      );

      if (!response.ok) {
        throw new Error("Error al actualizar los datos del usuario");
      }

      // Simulación de actualización de datos exitosa
      setTimeout(() => {
        setIsLoading(false);
        // No redirigir al dashboard después de guardar
      }, 1500);
    } catch (error) {
      console.error(error);
      setIsLoading(false);
    }
  };

  const handleCancel = () => {
    navigate("/dashboard");
  };

  return (
    <div className="container mx-auto py-32">
      <div className="flex justify-between items-center mb-8">
        <Button
          variant="ghost"
          onClick={handleCancel}
          className="flex items-center gap-2"
        >
          <ArrowLeft className="h-4 w-4" />
          Volver a Mi Cuenta
        </Button>
        <h1 className="text-3xl font-bold">Editar Información</h1>
      </div>

      <Card className="max-w-4xl mx-auto">
        <CardHeader>
          <CardTitle>Información Personal</CardTitle>
        </CardHeader>
        <CardContent>
          <form id="profile-form" onSubmit={handleSubmit} className="space-y-6">
            {/* Datos básicos */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label htmlFor="name" className="text-sm font-medium">
                  Nombre completo *
                </label>
                <Input
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className={errors.name ? "border-red-500" : ""}
                />
                {errors.name && (
                  <p className="text-red-500 text-sm">{errors.name}</p>
                )}
              </div>

              <div className="space-y-2">
                <label htmlFor="email" className="text-sm font-medium">
                  Correo electrónico *
                </label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  className={errors.email ? "border-red-500" : ""}
                />
                {errors.email && (
                  <p className="text-red-500 text-sm">{errors.email}</p>
                )}
              </div>

              <div className="space-y-2">
                <label htmlFor="phone" className="text-sm font-medium">
                  Teléfono *
                </label>
                <Input
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className={errors.phone ? "border-red-500" : ""}
                />
                {errors.phone && (
                  <p className="text-red-500 text-sm">{errors.phone}</p>
                )}
              </div>
            </div>

            {/* Dirección */}
            <div className="pt-4 border-t">
              <h3 className="text-lg font-medium mb-4">Dirección de Envío</h3>

              <div className="grid grid-cols-1 gap-6">
                <div className="space-y-2">
                  <label htmlFor="address" className="text-sm font-medium">
                    Dirección *
                  </label>
                  <Input
                    id="address"
                    name="address"
                    value={formData.address}
                    onChange={handleChange}
                    className={errors.address ? "border-red-500" : ""}
                  />
                  {errors.address && (
                    <p className="text-red-500 text-sm">{errors.address}</p>
                  )}
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="space-y-2">
                    <label htmlFor="postalCode" className="text-sm font-medium">
                      Código Postal
                    </label>
                    <Input
                      id="postalCode"
                      name="postalCode"
                      value={formData.postalCode}
                      onChange={handleChange}
                    />
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="city" className="text-sm font-medium">
                      Ciudad *
                    </label>
                    <Input
                      id="city"
                      name="city"
                      value={formData.city}
                      onChange={handleChange}
                      className={errors.city ? "border-red-500" : ""}
                    />
                    {errors.city && (
                      <p className="text-red-500 text-sm">{errors.city}</p>
                    )}
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="country" className="text-sm font-medium">
                      País *
                    </label>
                    <Input
                      id="country"
                      name="country"
                      value={formData.country}
                      onChange={handleChange}
                      className={errors.country ? "border-red-500" : ""}
                    />
                    {errors.country && (
                      <p className="text-red-500 text-sm">{errors.country}</p>
                    )}
                  </div>
                </div>

                <div className="space-y-2">
                  <label
                    htmlFor="additionalInfo"
                    className="text-sm font-medium"
                  >
                    Información adicional
                  </label>
                  <Textarea
                    id="additionalInfo"
                    name="additionalInfo"
                    value={formData.additionalInfo}
                    onChange={handleChange}
                    rows={3}
                  />
                  <p className="text-xs text-gray-500">
                    Incluye detalles como piso, apartamento, referencias, etc.
                  </p>
                </div>
              </div>
            </div>
          </form>
        </CardContent>
        <CardFooter className="flex justify-between space-x-4">
          <Button
            variant="outline"
            onClick={handleCancel}
            className="flex items-center gap-2"
          >
            <X className="h-4 w-4" />
            Cancelar
          </Button>
          <Button
            type="submit"
            form="profile-form"
            disabled={isLoading}
            className="flex items-center gap-2"
          >
            {isLoading ? (
              "Guardando..."
            ) : (
              <>
                <Save className="h-4 w-4" />
                Guardar Cambios
              </>
            )}
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
};

export default EditProfile;
