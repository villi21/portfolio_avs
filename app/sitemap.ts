import { MetadataRoute } from 'next';

// Este archivo genera dinámicamente un sitemap.xml para tu sitio.
// Es crucial para el SEO, ya que ayuda a los motores de búsqueda a descubrir todas tus páginas.

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://www.alexvillegas.com'; // ¡IMPORTANTE: CAMBIA ESTO POR TU DOMINIO FINAL!

  return [
    {
      url: baseUrl, // La URL de tu página principal.
      lastModified: new Date(), // Fecha de la última modificación (se actualiza en cada despliegue).
      changeFrequency: 'yearly', // Frecuencia estimada de cambios en la página.
      priority: 1, // Prioridad de esta URL sobre otras (1 es la más alta).
    },
    // Si tuvieras otras páginas (ej. /blog, /servicios), las añadirías aquí.
    // Como es un portfolio de una sola página, solo necesitamos la principal.
  ];
}