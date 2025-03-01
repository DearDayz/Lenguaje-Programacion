
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Mail, ArrowLeft } from 'lucide-react';

const ForgotPassword = () => {
  const [email, setEmail] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState({ email: '' });
  
  const validateEmail = (email: string) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validar el correo electrónico
    if (!email) {
      setErrors({ email: 'El correo electrónico es obligatorio' });
      return;
    }
    
    if (!validateEmail(email)) {
      setErrors({ email: 'Ingresa un correo electrónico válido' });
      return;
    }
    
    setErrors({ email: '' });
    setIsLoading(true);
    
    // Simulación de envío de correo electrónico
    setTimeout(() => {
      setIsLoading(false);
      setSubmitted(true);
    }, 1500);
  };
  
  return (
    <div className="container mx-auto py-32 flex justify-center">
      <Card className="w-full max-w-md">
        <CardHeader className="space-y-1">
          <CardTitle className="text-2xl font-bold text-center">Recuperar Contraseña</CardTitle>
          <CardDescription className="text-center">
            Ingresa tu correo electrónico para recibir un enlace de recuperación
          </CardDescription>
        </CardHeader>
        <CardContent>
          {submitted ? (
            <div className="text-center py-6 space-y-4">
              <div className="flex justify-center">
                <div className="bg-green-100 text-green-600 p-3 rounded-full">
                  <Mail className="h-6 w-6" />
                </div>
              </div>
              <h3 className="text-xl font-bold text-green-600">¡Correo enviado!</h3>
              <p className="text-gray-600">
                Hemos enviado un enlace de recuperación a <strong>{email}</strong>.
                Por favor, revisa tu bandeja de entrada y sigue las instrucciones.
              </p>
              <Button className="mt-4" asChild>
                <Link to="/iniciar-sesion">Volver a Iniciar Sesión</Link>
              </Button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="space-y-2">
                <div className="relative">
                  <Mail className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
                  <Input
                    type="email"
                    placeholder="Correo electrónico"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className={`pl-10 ${errors.email ? 'border-red-500' : ''}`}
                  />
                </div>
                {errors.email && (
                  <p className="text-red-500 text-sm">{errors.email}</p>
                )}
              </div>
              <Button 
                type="submit" 
                className="w-full" 
                disabled={isLoading}
              >
                {isLoading ? 'Enviando...' : 'Enviar enlace de recuperación'}
              </Button>
            </form>
          )}
        </CardContent>
        <CardFooter className="flex justify-between">
          <Button variant="ghost" asChild>
            <Link to="/iniciar-sesion" className="flex items-center gap-2">
              <ArrowLeft className="h-4 w-4" />
              Volver a iniciar sesión
            </Link>
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
};

export default ForgotPassword;
