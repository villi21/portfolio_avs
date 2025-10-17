import React from 'react';
import CertificationCard from './CertificationCard'; // Importa el sub-componente.
import { certifications } from '@/data/portfolioData'; // Importa los datos de certificaciones.

const Certifications: React.FC = () => {
  return (
    <section id="certificados" className="py-24">
      <div className="text-center mb-12 animate-fade-in-up">
        <h2 className="text-4xl font-bold text-primary-text">Certificados</h2>
        <div className="w-24 h-1 bg-accent mx-auto mt-4 rounded-full"></div>
        <p className="text-secondary-text mt-4 max-w-2xl mx-auto">
          Mis certificaciones oficiales que validan mis conocimientos y habilidades en ciberseguridad y lenguas.
        </p>
      </div>
      <div className="space-y-8 animate-fade-in-up delay-200">
        {certifications.map((cert, index) => (
          <CertificationCard key={index} cert={cert} />
        ))}
      </div>
    </section>
  );
};

export default Certifications;