import React from 'react';
import { socialLinks } from '@/data/portfolioData'; // Importa los enlaces a redes sociales.

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear(); // Obtiene el año actual dinámicamente.
  return (
    <footer className="w-full border-t border-gray-700/50 mt-24 py-8 bg-card shadow-inner">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row justify-between items-center">
        <p className="text-secondary-text text-sm">
          &copy; {currentYear} Alex Villegas. Todos los derechos reservados.
        </p>
        <div className="flex space-x-6 mt-4 sm:mt-0">
          {socialLinks.map((link) => (
            <a key={link.name} href={link.url} target="_blank" rel="noopener noreferrer" aria-label={`Visitar perfil de ${link.name}`} className="text-secondary-text hover:text-accent transition-colors">
              <link.icon size={24} />
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
};
export default Footer;