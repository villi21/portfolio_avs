'use client'; // Necesario para usar React hooks como useState.
import React, { useState } from 'react';
import { FaPaperPlane, FaCopy } from 'react-icons/fa'; // Iconos para el botón de copiar.

const Contact: React.FC = () => {
  const [copied, setCopied] = useState(false);
  const emailAddress = "alexvillegassalguero@gmail.com"; // Tu dirección de email.

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(emailAddress);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000); // Resetear el estado después de 2 segundos.
  };

  return (
    <section id="contacto" className="py-24">
      <div className="text-center mb-12 animate-fade-in-up">
        <h2 className="text-4xl font-bold text-primary-text">Contáctame</h2>
        <div className="w-24 h-1 bg-accent mx-auto mt-4 rounded-full"></div>
        <p className="text-secondary-text mt-4 max-w-2xl mx-auto">
          ¿Tienes alguna pregunta, una oportunidad de colaboración, o simplemente quieres saludar? ¡No dudes en contactarme!
        </p>
      </div>
      <div className="max-w-xl mx-auto animate-fade-in-up delay-200">
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 bg-card p-6 rounded-lg shadow-xl border border-gray-700">
          <p className="text-primary-text text-lg font-medium select-all">{emailAddress}</p>
          <div className="flex gap-2">
            <a
              href={`mailto:${emailAddress}`}
              className="bg-accent text-primary-text p-3 rounded-lg hover:bg-accent-hover transition-colors duration-300 shadow-md"
              aria-label="Enviar correo electrónico"
            >
              <FaPaperPlane size={20} />
            </a>
            <button
              onClick={handleCopyEmail}
              className="bg-gray-700 text-primary-text p-3 rounded-lg hover:bg-gray-600 transition-colors duration-300 shadow-md relative"
              aria-label="Copiar correo electrónico"
            >
              <FaCopy size={20} />
              {copied && (
                <span className="absolute -top-8 left-1/2 -translate-x-1/2 bg-gray-800 text-white text-xs px-2 py-1 rounded-md whitespace-nowrap animate-fade-out">
                  ¡Copiado!
                </span>
              )}
            </button>
          </div>
        </div>
        {/* Aquí puedes añadir un formulario si lo necesitas, usando Formspree o un backend */}
        {/*
        <form
          action="https://formspree.io/f/tu_endpoint_aqui" // ¡REEMPLAZA ESTO!
          method="POST"
          className="mt-8 space-y-4"
        >
          <input type="text" name="name" placeholder="Tu Nombre" required className="w-full bg-background border border-gray-600 rounded-lg py-3 px-4 focus:outline-none focus:ring-2 focus:ring-accent" />
          <input type="email" name="email" placeholder="Tu Email" required className="w-full bg-background border border-gray-600 rounded-lg py-3 px-4 focus:outline-none focus:ring-2 focus:ring-accent" />
          <textarea name="message" rows={5} placeholder="Tu Mensaje" required className="w-full bg-background border border-gray-600 rounded-lg py-3 px-4 focus:outline-none focus:ring-2 focus:ring-accent"></textarea>
          <div className="text-center">
            <button type="submit" className="bg-accent text-primary-text font-bold py-3 px-10 rounded-lg hover:bg-accent-hover transition-colors duration-300 shadow-lg">
              Enviar Mensaje
            </button>
          </div>
        </form>
        */}
      </div>
    </section>
  );
};
export default Contact;