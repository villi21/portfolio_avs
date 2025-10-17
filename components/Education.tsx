import React from 'react';
import TimelineItem from './TimelineItem'; // Importa el sub-componente.
import { education } from '@/data/portfolioData'; // Importa los datos de educación.

const Education: React.FC = () => {
  return (
    <section id="educacion" className="py-24">
      <div className="text-center mb-12 animate-fade-in-up">
        <h2 className="text-4xl font-bold text-primary-text">Educación</h2>
        <div className="w-24 h-1 bg-accent mx-auto mt-4 rounded-full"></div>
      </div>
      <div className="max-w-3xl mx-auto space-y-12 animate-fade-in-up delay-200">
        {education.map((item, index) => (
          <TimelineItem key={index} item={item} isLast={index === education.length - 1} />
        ))}
      </div>
    </section>
  );
};
export default Education;