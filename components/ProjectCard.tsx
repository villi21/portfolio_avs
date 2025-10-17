import React from 'react';
import Image from 'next/image';
import { FaGithub } from 'react-icons/fa';
import { Project } from '@/data/portfolioData';

const ProjectCard: React.FC<{ project: Project }> = ({ project }) => {
  return (
    <div className="bg-card p-6 rounded-lg border border-gray-700 hover:border-accent transition-all duration-300 flex flex-col h-full shadow-lg hover:shadow-xl hover:shadow-accent/10">
      <div className="relative w-full h-48 rounded-md overflow-hidden mb-4 border border-gray-600">
        <Image 
          src={project.image} 
          alt={`Imagen del proyecto ${project.title}`} 
          fill 
          style={{objectFit:"cover"}} 
          className="hover:scale-105 transition-transform duration-300"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" // Optimización para diferentes tamaños de pantalla
        />
      </div>
      <div className="flex justify-between items-start mb-4">
        <h3 className="text-xl font-bold text-primary-text">{project.title}</h3>
        <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" aria-label={`Ver ${project.title} en GitHub`} className="text-secondary-text hover:text-accent transition-colors">
          <FaGithub size={24} />
        </a>
      </div>
      <p className="text-secondary-text mb-4 flex-grow">{project.description}</p>
      <div className="flex flex-wrap gap-2 mt-auto">
        {project.tags.map((tag) => (
          <span key={tag} className="bg-background text-xs font-semibold text-accent px-3 py-1 rounded-full border border-accent/30">
            {tag}
          </span>
        ))}
      </div>
    </div>
  );
};

export default ProjectCard;