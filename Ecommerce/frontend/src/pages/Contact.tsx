import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent } from "@/components/ui/card";
import { Mail, Phone, MapPin, Clock, Send } from "lucide-react";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulación de envío del formulario
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
      // Resetear el formulario
      setName("");
      setEmail("");
      setSubject("");
      setMessage("");
    }, 1500);
  };

  return (
    <div className="container mx-auto py-32">
      {/* Encabezado */}
      <div className="text-center mb-16">
        <h1 className="text-4xl font-bold mb-4">Contacto</h1>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Estamos aquí para ayudarte. Contáctanos si tienes alguna pregunta,
          sugerencia o inquietud.
        </p>
      </div>

      {/* Información de contacto y formulario */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
        {/* Información de contacto */}
        <div>
          <h2 className="text-2xl font-bold mb-6">Información de Contacto</h2>

          <div className="space-y-6">
            <Card>
              <CardContent className="p-6 flex items-start space-x-4">
                <div className="p-3 rounded-full bg-primary/10 text-primary">
                  <Mail className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="font-bold mb-1">Email</h3>
                  <p className="text-gray-600 mb-1">
                    Para consultas generales:
                  </p>
                  <a
                    href="mailto:info@costumecove.com"
                    className="text-primary hover:underline"
                  >
                    info@Disfracasos.com
                  </a>
                  <p className="text-gray-600 mt-2 mb-1">
                    Para servicio al cliente:
                  </p>
                  <a
                    href="mailto:support@costumecove.com"
                    className="text-primary hover:underline"
                  >
                    support@Disfracasos.com
                  </a>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6 flex items-start space-x-4">
                <div className="p-3 rounded-full bg-primary/10 text-primary">
                  <Phone className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="font-bold mb-1">Teléfono</h3>
                  <p className="text-gray-600 mb-1">Atención al cliente:</p>
                  <a
                    href="tel:+123456789"
                    className="text-primary hover:underline"
                  >
                    (123) 456-7890
                  </a>
                  <p className="text-gray-600 mt-2 mb-1">
                    Ventas corporativas:
                  </p>
                  <a
                    href="tel:+123456789"
                    className="text-primary hover:underline"
                  >
                    (123) 456-7891
                  </a>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6 flex items-start space-x-4">
                <div className="p-3 rounded-full bg-primary/10 text-primary">
                  <MapPin className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="font-bold mb-1">Ubicación</h3>
                  <p className="text-gray-600 mb-1">Tienda principal:</p>
                  <p className="text-gray-800">
                    Calle Fiesta 123, Colonia Centro
                    <br />
                    Ciudad de México, CP 12345
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6 flex items-start space-x-4">
                <div className="p-3 rounded-full bg-primary/10 text-primary">
                  <Clock className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="font-bold mb-1">Horario de Atención</h3>
                  <p className="text-gray-600 mb-1">Lunes a Viernes:</p>
                  <p className="text-gray-800 mb-2">9:00 AM - 8:00 PM</p>
                  <p className="text-gray-600 mb-1">Sábados:</p>
                  <p className="text-gray-800 mb-2">10:00 AM - 6:00 PM</p>
                  <p className="text-gray-600 mb-1">Domingos:</p>
                  <p className="text-gray-800">Cerrado</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Formulario de contacto */}
        <div>
          <h2 className="text-2xl font-bold mb-6">Envíanos un Mensaje</h2>
          {submitted ? (
            <Card>
              <CardContent className="p-12 text-center">
                <div className="mx-auto w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mb-4">
                  <Send className="h-6 w-6 text-green-600" />
                </div>
                <h3 className="text-2xl font-bold text-green-600 mb-2">
                  ¡Mensaje Enviado!
                </h3>
                <p className="text-gray-600 mb-6">
                  Gracias por contactarnos. Responderemos a tu mensaje lo antes
                  posible.
                </p>
                <Button onClick={() => setSubmitted(false)}>
                  Enviar otro mensaje
                </Button>
              </CardContent>
            </Card>
          ) : (
            <Card>
              <CardContent className="p-6">
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <label htmlFor="name" className="text-sm font-medium">
                        Nombre completo
                      </label>
                      <Input
                        id="name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="email" className="text-sm font-medium">
                        Correo electrónico
                      </label>
                      <Input
                        id="email"
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                      />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="subject" className="text-sm font-medium">
                      Asunto
                    </label>
                    <Input
                      id="subject"
                      value={subject}
                      onChange={(e) => setSubject(e.target.value)}
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="message" className="text-sm font-medium">
                      Mensaje
                    </label>
                    <Textarea
                      id="message"
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      rows={5}
                      required
                    />
                  </div>
                  <Button
                    type="submit"
                    className="w-full"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? "Enviando..." : "Enviar Mensaje"}
                  </Button>
                </form>
              </CardContent>
            </Card>
          )}
        </div>
      </div>

      {/* Mapa */}
      <div className="mb-20">
        <h2 className="text-2xl font-bold mb-6 text-center">Encuéntranos</h2>
        <div className="h-[400px] bg-gray-100 rounded-lg overflow-hidden">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d31411.363687334593!2d-67.96428635!3d10.22763275!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e805d284797b2c9%3A0x792aeec9324d3695!2sUniversidad%20Jos%C3%A9%20Antonio%20P%C3%A1ez!5e0!3m2!1ses!2sve!4v1742628399152!5m2!1ses!2sve"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>

      {/* FAQs */}
      <div className="max-w-3xl mx-auto">
        <h2 className="text-2xl font-bold mb-6 text-center">
          Preguntas Frecuentes
        </h2>
        <div className="space-y-4">
          <div className="bg-gray-50 p-6 rounded-lg">
            <h3 className="font-bold text-lg mb-2">
              ¿Cuál es el tiempo de entrega?
            </h3>
            <p className="text-gray-600">
              El tiempo de entrega estándar es de 3-5 días hábiles. Para pedidos
              urgentes, ofrecemos envío express con entrega en 24-48 horas
              (consultar costos adicionales).
            </p>
          </div>
          <div className="bg-gray-50 p-6 rounded-lg">
            <h3 className="font-bold text-lg mb-2">
              ¿Puedo devolver un disfraz?
            </h3>
            <p className="text-gray-600">
              Sí, aceptamos devoluciones dentro de los 30 días posteriores a la
              compra, siempre que el producto esté en su estado original con
              todas las etiquetas.
            </p>
          </div>
          <div className="bg-gray-50 p-6 rounded-lg">
            <h3 className="font-bold text-lg mb-2">
              ¿Ofrecen disfraces personalizados?
            </h3>
            <p className="text-gray-600">
              Sí, ofrecemos servicios de personalización para eventos
              especiales, producciones teatrales y grupos grandes. Contáctanos
              para más información.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
