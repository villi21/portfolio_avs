import React from 'react';
import TimelineItem from './TimelineItem'; // Importa el sub-componente.
import { experience } from '@/data/portfolioData'; // Importa los datos de experiencia.

const Experience: React.FC = () => {
  return (
    <section id="experiencia" className="py-24">
      <div className="text-center mb-12 animate-fade-in-up">
        <h2 className="text-4xl font-bold text-primary-text">Experiencia</h2>
        <div className="w-24 h-1 bg-accent mx-auto mt-4 rounded-full"></div>
      </div>
      <div className="max-w-3xl mx-auto space-y-12 animate-fade-in-up delay-200">
        {experience.map((item, index) => (
          <TimelineItem key={index} item={item} isLast={index === experience.length - 1} />
        ))}
      </div>
    </section>
  );
};
export default Experience;