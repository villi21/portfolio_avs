'use client'; // Indica que este componente es de cliente, necesario para usar useState.
import React, { useState } from 'react';
import { navLinks } from '@/data/portfolioData'; // Importa los enlaces de navegación desde los datos.
import { FaBars, FaTimes } from 'react-icons/fa'; // Iconos para el menú móvil.

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false); // Estado para controlar la visibilidad del menú móvil.

  return (
    <header className="fixed top-0 left-0 w-full bg-background/90 backdrop-blur-md z-50 border-b border-gray-700/50 shadow-lg">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo/Nombre */}
          <div className="flex-shrink-0">
            <a href="#inicio" className="text-3xl font-extrabold text-primary-text hover:text-accent transition-colors duration-300" aria-label="Volver a Inicio">
              Alex Villegas
            </a>
          </div>

          {/* Enlaces de Escritorio */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-6">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-secondary-text hover:text-accent px-3 py-2 rounded-md text-base font-medium transition-colors duration-200"
                >
                  {link.name}
                </a>
              ))}
            </div>
          </div>

          {/* Botón de Menú Móvil */}
          <div className="-mr-2 flex md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              type="button"
              className="bg-card inline-flex items-center justify-center p-2 rounded-md text-secondary-text hover:text-accent focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-background focus:ring-accent"
              aria-controls="mobile-menu"
              aria-expanded={isOpen ? 'true' : 'false'}
              aria-label="Abrir menú de navegación"
            >
              <span className="sr-only">Abrir menú principal</span>
              {isOpen ? <FaTimes className="block h-7 w-7" /> : <FaBars className="block h-7 w-7" />}
            </button>
          </div>
        </div>
      </nav>

      {/* Menú Móvil Desplegado */}
      {isOpen && (
        <div className="md:hidden animate-fade-in-down" id="mobile-menu">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setIsOpen(false)} // Cierra el menú al hacer clic en un enlace.
                className="text-secondary-text hover:text-accent hover:bg-card block px-3 py-2 rounded-md text-base font-medium transition-colors duration-200"
              >
                {link.name}
              </a>
            ))}
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;