import React from 'react';
import Image from 'next/image'; // Componente optimizado para imágenes en Next.js
import { socialLinks } from '@/data/portfolioData'; // Importa los enlaces a redes sociales.

const Hero: React.FC = () => {
  return (
    <section id="inicio" className="flex flex-col-reverse lg:flex-row items-center justify-center min-h-screen text-center lg:text-left pt-24 pb-12 lg:py-0">
      <div className="lg:w-1/2 mt-10 lg:mt-0 animate-fade-in-left">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-primary-text leading-tight drop-shadow-lg">
          Hola, soy <span className="text-accent">Alex Villegas</span>
        </h1>
        <p className="mt-4 text-lg sm:text-xl text-secondary-text max-w-xl mx-auto lg:mx-0 drop-shadow-md">
          Estudiante y Especialista en Ciberseguridad apasionado por la protección de infraestructuras críticas y el desarrollo de software seguro.
        </p>
        <div className="flex justify-center lg:justify-start space-x-6 mt-8">
          {socialLinks.map((link) => (
            <a
              key={link.name}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Visitar perfil de ${link.name}`} // Mejora la accesibilidad.
              className="text-secondary-text hover:text-accent transition-transform duration-300 hover:scale-110 drop-shadow-lg"
            >
              <link.icon size={36} /> {/* Aumenta el tamaño del icono */}
            </a>
          ))}
        </div>
        <div className="mt-10 flex flex-col sm:flex-row justify-center lg:justify-start gap-4">
          <a
            href="/Alex_Villegas_CV.pdf" // Asegúrate de que este PDF esté en /public/
            download
            className="bg-accent text-primary-text font-bold py-3 px-8 rounded-lg hover:bg-accent-hover transition-colors duration-300 shadow-lg"
          >
            Descargar CV
          </a>
          <a
            href="#contacto"
            className="bg-card text-primary-text font-bold py-3 px-8 rounded-lg border border-gray-600 hover:border-accent hover:text-accent transition-colors duration-300 shadow-lg"
          >
            Contáctame
          </a>
        </div>
      </div>
      <div className="lg:w-1/2 flex justify-center lg:justify-end animate-fade-in-right">
        <div className="relative w-72 h-72 sm:w-96 sm:h-96 rounded-full border-4 border-accent shadow-2xl shadow-accent/40 overflow-hidden">
          <Image
            src="/images/alex-villegas-profile.png" // Ruta a tu foto de perfil.
            alt="Fotografía de perfil de Alex Villegas, especialista en ciberseguridad"
            fill // Ocupa todo el espacio del contenedor.
            style={{ objectFit: 'cover' }} // Asegura que la imagen cubra el área sin distorsionarse.
            className="rounded-full"
            priority // Indica a Next.js que esta imagen es importante para la LCP (Largest Contentful Paint).
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;