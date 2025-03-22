import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { User, Mail, Lock, UserPlus } from "lucide-react";

const Register = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    if (password !== confirmPassword) {
      setError("Las contraseñas no coinciden");
      return;
    }

    setIsLoading(true);

    try {
      // Organizar los datos en un JSON con la estructura correcta
      const userData = {
        name: name,
        email: email,
        password: password,
        password_confirmation: confirmPassword,
      };

      // Realizar la solicitud POST para registrar el usuario
      const response = await fetch("http://127.0.0.1:8001/api/auth/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(userData),
      });

      if (!response.ok) {
        const errorData = await response.json();
        if (errorData.message.includes("email")) {
          setError("Ya existe un usuario con ese correo");
        } else {
          throw new Error(errorData.message || "Error al registrar el usuario");
        }
        setIsLoading(false);
        return;
      }

      // Notificar al usuario que el registro fue exitoso
      alert("Registro exitoso");
      navigate("/"); // Redirigir a la página principal después del registro exitoso
    } catch (error) {
      console.error(error);
      setError(error.message);
      setIsLoading(false);
    }
  };

  return (
    <div className="container mx-auto py-32 flex justify-center">
      <Card className="w-full max-w-md">
        <CardHeader className="space-y-1">
          <CardTitle className="text-2xl font-bold text-center">
            Crear Cuenta
          </CardTitle>
          <CardDescription className="text-center">
            Ingresa tus datos para registrarte
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="space-y-2">
              <div className="relative">
                <User className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
                <Input
                  type="text"
                  placeholder="Nombre completo"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="pl-10"
                  required
                />
              </div>
            </div>
            <div className="space-y-2">
              <div className="relative">
                <Mail className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
                <Input
                  type="email"
                  placeholder="Correo electrónico"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="pl-10"
                  required
                />
              </div>
            </div>
            <div className="space-y-2">
              <div className="relative">
                <Lock className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
                <Input
                  type="password"
                  placeholder="Contraseña"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="pl-10"
                  required
                />
              </div>
            </div>
            <div className="space-y-2">
              <div className="relative">
                <Lock className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
                <Input
                  type="password"
                  placeholder="Confirmar contraseña"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  className="pl-10"
                  required
                />
              </div>
            </div>
            {error && <p className="text-red-500 text-sm">{error}</p>}
            <Button type="submit" className="w-full gap-2" disabled={isLoading}>
              {isLoading ? (
                "Creando cuenta..."
              ) : (
                <>
                  <User Plus className="h-5 w-5" />
                  Crear Cuenta
                </>
              )}
            </Button>
          </form>
        </CardContent>
        <CardFooter className="flex flex-col space-y-4">
          <div className="text-center text-sm">
            ¿Ya tienes una cuenta?{" "}
            <Button variant="link" className="p-0" asChild>
              <Link to="/iniciar-sesion">Inicia sesión aquí</Link>
            </Button>
          </div>
        </CardFooter>
      </Card>
    </div>
  );
};

export default Register;
