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
import { Mail, Lock, LogIn } from "lucide-react";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [errors, setErrors] = useState({ email: "", password: "" });
  const navigate = useNavigate();

  const validateForm = () => {
    let isValid = true;
    const newErrors = { email: "", password: "" };

    if (!email) {
      newErrors.email = "El correo electrónico es obligatorio";
      isValid = false;
    } else {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(email)) {
        newErrors.email = "Ingresa un correo electrónico válido";
        isValid = false;
      }
    }

    if (!password) {
      newErrors.password = "La contraseña es obligatoria";
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
      // Realizar la solicitud de inicio de sesión
      const loginResponse = await fetch(
        "http://127.0.0.1:8001/api/auth/login",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ email, password }),
        }
      );

      if (!loginResponse.ok) {
        const errorData = await loginResponse.json();
        setErrors({
          ...errors,
          email: errorData.error || "Error al iniciar sesión",
        });
        setIsLoading(false);
        return;
      }

      const loginData = await loginResponse.json();
      if (loginData.message === "Inicio de sesión exitoso") {
        // Obtener la lista de usuarios
        const usersResponse = await fetch(
          "http://127.0.0.1:8001/api/auth/users"
        );
        if (!usersResponse.ok) {
          throw new Error("Error al obtener la lista de usuarios");
        }
        const usersData = await usersResponse.json();

        // Buscar el usuario por email
        const user = usersData.users.find((user) => user.email === email);

        if (user) {
          // Imprimir el ID del usuario en la consola
          console.log("ID del usuario logueado:", user.id);

          // Redirigir al dashboard después del login exitoso
          navigate("/dashboard", { state: { userId: user.id } }); // Pasar el ID del usuario al dashboard
        } else {
          setErrors({ ...errors, email: "Usuario no encontrado" });
        }
      }
    } catch (error) {
      console.error("Error:", error);
      setErrors({
        ...errors,
        email: "Error al iniciar sesión. Inténtalo de nuevo.",
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="container mx-auto py-32 flex justify-center">
      <Card className="w-full max-w-md">
        <CardHeader className="space-y-1">
          <CardTitle className="text-2xl font-bold text-center">
            Iniciar Sesión
          </CardTitle>
          <CardDescription className="text-center">
            Ingresa tus credenciales para acceder a tu cuenta
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="space-y-2">
              <div className="relative">
                <Mail className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
                <Input
                  type="email"
                  placeholder="Correo electrónico"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className={`pl-10 ${errors.email ? "border-red-500" : ""}`}
                />
                {errors.email && (
                  <p className="text-red-500 text-sm mt-1">{errors.email}</p>
                )}
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
                  className={`pl-10 ${errors.password ? "border-red-500" : ""}`}
                />
                {errors.password && (
                  <p className="text-red-500 text-sm mt-1">{errors.password}</p>
                )}
              </div>
              <div className="flex justify-end">
                <Button
                  variant="link"
                  className="px-0 font-normal text-sm"
                  asChild
                >
                  <Link to="/recuperar-password">
                    ¿Olvidaste tu contraseña?
                  </Link>
                </Button>
              </div>
            </div>
            <Button type="submit" className="w-full gap-2" disabled={isLoading}>
              {isLoading ? (
                "Iniciando sesión..."
              ) : (
                <>
                  <LogIn className="h-5 w-5" />
                  Iniciar Sesión
                </>
              )}
            </Button>
          </form>
        </CardContent>
        <CardFooter className="flex flex-col space-y-4">
          <div className="text-center text-sm">
            ¿No tienes una cuenta?{" "}
            <Button variant="link" className="p-0" asChild>
              <Link to="/registro">Regístrate aquí</Link>
            </Button>
          </div>
        </CardFooter>
      </Card>
    </div>
  );
};

export default Login;
