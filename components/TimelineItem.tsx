import React from 'react';
import { TimelineItem as TimelineItemProps } from '@/data/portfolioData'; // Importa la interfaz de datos.

const TimelineItem: React.FC<{ item: TimelineItemProps; isLast: boolean }> = ({ item, isLast }) => {
  const { icon: Icon, date, title, subtitle, points } = item; // Desestructuración de propiedades.
  return (
    <div className="relative pl-12">
      {/* Línea vertical del timeline */}
      {!isLast && <div className="absolute top-5 left-5 -ml-px h-[calc(100%-1.25rem)] w-0.5 bg-card"></div>} {/* Ajusta la altura de la línea */}
      
      {/* Círculo con icono */}
      <div className="absolute top-0 left-0 flex items-center justify-center w-10 h-10 bg-card rounded-full border-2 border-accent shadow-md">
        <Icon className="w-5 h-5 text-accent" /> {/* Renderiza el icono dinámicamente */}
      </div>

      {/* Tarjeta de contenido */}
      <div className="bg-card p-6 rounded-lg ml-4 relative shadow-xl hover:shadow-accent/20 transition-shadow duration-300">
        {/* Flecha apuntando al timeline */}
        <div className="absolute -left-4 top-4 w-0 h-0 border-t-8 border-t-transparent border-b-8 border-b-transparent border-r-8 border-r-card"></div>
        
        <p className="text-sm text-secondary-text mb-1">{date}</p>
        <h3 className="text-xl font-bold text-primary-text">{title}</h3>
        <h4 className="text-md font-semibold text-accent mb-3">{subtitle}</h4>
        <ul className="list-disc pl-5 space-y-1 text-secondary-text">
          {points.map((point, index) => <li key={index}>{point}</li>)}
        </ul>
      </div>
    </div>
  );
};

export default TimelineItem;