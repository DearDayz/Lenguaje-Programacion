
import React from 'react';
import { Link } from 'react-router-dom';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Shield, Truck, CreditCard, Users, Store, Award } from 'lucide-react';

const AboutUs = () => {
  const teamMembers = [
    {
      name: 'María López',
      role: 'Fundadora & CEO',
      description: 'Con más de 15 años de experiencia en la industria del disfraz, María fundó CostumeCove para ofrecer disfraces de alta calidad a precios accesibles.',
      image: 'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&q=80'
    },
    {
      name: 'Carlos Rodríguez',
      role: 'Director Creativo',
      description: 'Carlos supervisa todo el diseño y la calidad de nuestros productos, asegurándose de que cada disfraz cumpla con nuestros altos estándares.',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&q=80'
    },
    {
      name: 'Laura Martínez',
      role: 'Gerente de Atención al Cliente',
      description: 'Laura lidera nuestro equipo de servicio al cliente, comprometida a brindar la mejor experiencia de compra para nuestros clientes.',
      image: 'https://images.unsplash.com/photo-1488426862026-3ee34a7d66df?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&q=80'
    }
  ];

  return (
    <div className="container mx-auto py-32">
      {/* Encabezado */}
      <div className="text-center mb-16">
        <h1 className="text-4xl font-bold mb-4">Nosotros</h1>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Somos CostumeCove, tu destino para disfraces premium y accesorios para todas tus celebraciones
        </p>
      </div>
      
      {/* Nuestra Historia */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-20">
        <div>
          <h2 className="text-3xl font-bold mb-4">Nuestra Historia</h2>
          <p className="text-gray-600 mb-4">
            CostumeCove nació en 2010 con una misión clara: hacer que los disfraces de alta calidad sean accesibles para todos. 
            Lo que comenzó como una pequeña tienda en el centro de la ciudad se ha convertido en uno de los 
            principales proveedores de disfraces en todo el país.
          </p>
          <p className="text-gray-600 mb-4">
            Desde nuestros humildes comienzos, nos hemos mantenido fieles a nuestros valores fundamentales: 
            calidad, creatividad y atención al cliente. Cada disfraz que vendemos pasa por un riguroso 
            control de calidad para garantizar que nuestros clientes reciban solo lo mejor.
          </p>
          <p className="text-gray-600">
            Hoy, seguimos creciendo y expandiendo nuestra colección, siempre buscando las últimas tendencias 
            y escuchando lo que nuestros clientes desean.
          </p>
        </div>
        <div className="rounded-lg overflow-hidden shadow-lg">
          <img 
            src="https://images.unsplash.com/photo-1578269174936-2709b6aeb913" 
            alt="Tienda CostumeCove" 
            className="w-full h-full object-cover"
          />
        </div>
      </div>
      
      {/* Nuestros Valores */}
      <div className="mb-20">
        <h2 className="text-3xl font-bold text-center mb-12">Nuestros Valores</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <Card className="text-center">
            <CardContent className="pt-6">
              <div className="flex justify-center mb-4">
                <div className="p-3 rounded-full bg-primary/10 text-primary">
                  <Shield className="h-8 w-8" />
                </div>
              </div>
              <h3 className="text-xl font-bold mb-2">Calidad</h3>
              <p className="text-gray-600">
                Nos comprometemos a ofrecer disfraces durables y de alta calidad que superen tus expectativas.
              </p>
            </CardContent>
          </Card>
          
          <Card className="text-center">
            <CardContent className="pt-6">
              <div className="flex justify-center mb-4">
                <div className="p-3 rounded-full bg-primary/10 text-primary">
                  <Award className="h-8 w-8" />
                </div>
              </div>
              <h3 className="text-xl font-bold mb-2">Creatividad</h3>
              <p className="text-gray-600">
                Buscamos constantemente diseños innovadores que te ayuden a destacar en cualquier evento.
              </p>
            </CardContent>
          </Card>
          
          <Card className="text-center">
            <CardContent className="pt-6">
              <div className="flex justify-center mb-4">
                <div className="p-3 rounded-full bg-primary/10 text-primary">
                  <Users className="h-8 w-8" />
                </div>
              </div>
              <h3 className="text-xl font-bold mb-2">Servicio</h3>
              <p className="text-gray-600">
                Nuestro equipo está dedicado a brindarte la mejor experiencia de compra y atención personalizada.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
      
      {/* Nuestro Equipo */}
      <div className="mb-20">
        <h2 className="text-3xl font-bold text-center mb-12">Nuestro Equipo</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {teamMembers.map((member, index) => (
            <Card key={index} className="overflow-hidden">
              <img 
                src={member.image} 
                alt={member.name}
                className="w-full h-64 object-cover"
              />
              <CardContent className="pt-6">
                <h3 className="text-xl font-bold mb-1">{member.name}</h3>
                <p className="text-primary font-medium mb-2">{member.role}</p>
                <p className="text-gray-600">{member.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
      
      {/* Por qué Elegirnos */}
      <div className="mb-20">
        <h2 className="text-3xl font-bold text-center mb-12">Por Qué Elegirnos</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="flex items-start space-x-4">
            <div className="p-3 rounded-full bg-primary/10 text-primary shrink-0">
              <Truck className="h-6 w-6" />
            </div>
            <div>
              <h3 className="font-bold mb-2">Envío Rápido</h3>
              <p className="text-gray-600">
                Entregamos tu pedido en tiempo récord para que puedas disfrutar de tu disfraz lo antes posible.
              </p>
            </div>
          </div>
          
          <div className="flex items-start space-x-4">
            <div className="p-3 rounded-full bg-primary/10 text-primary shrink-0">
              <CreditCard className="h-6 w-6" />
            </div>
            <div>
              <h3 className="font-bold mb-2">Pago Seguro</h3>
              <p className="text-gray-600">
                Ofrecemos múltiples métodos de pago con la máxima seguridad para tus transacciones.
              </p>
            </div>
          </div>
          
          <div className="flex items-start space-x-4">
            <div className="p-3 rounded-full bg-primary/10 text-primary shrink-0">
              <Shield className="h-6 w-6" />
            </div>
            <div>
              <h3 className="font-bold mb-2">Garantía de Calidad</h3>
              <p className="text-gray-600">
                Todos nuestros productos pasan por rigurosos controles de calidad antes de ser enviados.
              </p>
            </div>
          </div>
          
          <div className="flex items-start space-x-4">
            <div className="p-3 rounded-full bg-primary/10 text-primary shrink-0">
              <Store className="h-6 w-6" />
            </div>
            <div>
              <h3 className="font-bold mb-2">Amplio Catálogo</h3>
              <p className="text-gray-600">
                Encuentra disfraces para todas las edades, temas y ocasiones en nuestra extensa colección.
              </p>
            </div>
          </div>
          
          <div className="flex items-start space-x-4">
            <div className="p-3 rounded-full bg-primary/10 text-primary shrink-0">
              <Users className="h-6 w-6" />
            </div>
            <div>
              <h3 className="font-bold mb-2">Atención Personalizada</h3>
              <p className="text-gray-600">
                Nuestro equipo está disponible para ayudarte a encontrar el disfraz perfecto para tu evento.
              </p>
            </div>
          </div>
          
          <div className="flex items-start space-x-4">
            <div className="p-3 rounded-full bg-primary/10 text-primary shrink-0">
              <Award className="h-6 w-6" />
            </div>
            <div>
              <h3 className="font-bold mb-2">Satisfacción Garantizada</h3>
              <p className="text-gray-600">
                Si no estás satisfecho con tu compra, trabajaremos contigo para resolver cualquier problema.
              </p>
            </div>
          </div>
        </div>
      </div>
      
      {/* CTA */}
      <div className="text-center bg-primary/5 py-12 px-4 rounded-lg">
        <h2 className="text-2xl font-bold mb-4">¿Listo para encontrar tu disfraz perfecto?</h2>
        <p className="text-gray-600 max-w-2xl mx-auto mb-6">
          Explora nuestra colección y encuentra el disfraz que hará que tu próximo evento sea inolvidable.
        </p>
        <Button asChild>
          <Link to="/">Ver Disfraces</Link>
        </Button>
      </div>
    </div>
  );
};

export default AboutUs;
