import React from 'react';
import Image from 'next/image';
import { Certification } from '@/data/portfolioData';

const CertificationCard: React.FC<{ cert: Certification }> = ({ cert }) => {
  return (
    <div className="bg-card p-6 rounded-lg border border-gray-700 flex flex-col sm:flex-row items-center justify-between shadow-lg hover:shadow-xl hover:shadow-accent/10 transition-shadow duration-300">
      <div className="flex-1 text-center sm:text-left mb-4 sm:mb-0">
        <h3 className="text-xl font-bold text-primary-text mb-4">{cert.title}</h3>
        <div className="flex flex-wrap gap-2 justify-center sm:justify-start">
          {cert.skills.map((skill) => (
            <span key={skill} className="bg-background text-xs font-semibold text-accent px-3 py-1 rounded-full border border-accent/30">
              {skill}
            </span>
          ))}
        </div>
      </div>
      <div className="ml-0 sm:ml-6 flex-shrink-0 relative w-28 h-28"> {/* Aumenta el tamaño del logo */}
        <Image 
          src={cert.logo} 
          alt={`Logo de ${cert.title}`}
          fill
          style={{objectFit:"contain"}} // Asegura que el logo se ajuste sin cortarse.
          sizes="112px"
          className="p-2" // Pequeño padding interno para el logo
        />
      </div>
    </div>
  );
};

export default CertificationCard;