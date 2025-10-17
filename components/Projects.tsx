import React from 'react';
import ProjectCard from './ProjectCard'; // Importa el sub-componente.
import { projects } from '@/data/portfolioData'; // Importa los datos de proyectos.

const Projects: React.FC = () => {
  return (
    <section id="proyectos" className="py-24">
      <div className="text-center mb-12 animate-fade-in-up">
        <h2 className="text-4xl font-bold text-primary-text">Proyectos Destacados</h2>
        <div className="w-24 h-1 bg-accent mx-auto mt-4 rounded-full"></div>
        <p className="text-secondary-text mt-4 max-w-2xl mx-auto">
          Una selección de mis trabajos prácticos en ciberseguridad, demostrando habilidades en desarrollo seguro y análisis de sistemas.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 animate-fade-in-up delay-200">
        {projects.map((project, index) => (
          <ProjectCard key={index} project={project} />
        ))}
      </div>
    </section>
  );
};

export default Projects;