import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

// CORRECCIÓN 1: La variable 'inter' se define aquí para que esté disponible en todo el archivo.
const inter = Inter({ subsets: ['latin'] });

// METADATA DEFINITIVA PARA SEO TOP 1
export const metadata: Metadata = {
  title: 'Alex Villegas | Estudiante de Ciberseguridad',
  description: 'Portfolio profesional de Alex Villegas, estudiante en ENTI-UB.',
  keywords: ['Alex Villegas', 'ciberseguridad', 'portfolio', 'pentesting', 'desarrollo seguro', 'hacking ético', 'ENTI-UB', 'Barcelona'],
  authors: [{ name: 'Alex Villegas' }],
  creator: 'Alex Villegas',
  metadataBase: new URL('https://alexvillegas.vercel.app'), // ¡Recuerda cambiar esto por tu dominio final!

  // Open Graph (para compartir en redes sociales)
  openGraph: {
    title: 'Alex Villegas | Estudiante de Ciberseguridad',
    description: '',
    url: 'https://alexvillegas.vercel.app', // ¡Recuerda cambiar esto por tu dominio final!
    siteName: 'Portfolio de Alex Villegas',
    images: '/images/og-image.png',
    locale: 'es_ES',
    type: 'website',
  },

  // Directivas para robots de buscadores
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    // CORRECCIÓN 2: No hay ningún comentario ni espacio entre <html> y <body> para evitar el error de hydration.
    <html lang="es">
      <body className={`${inter.className} bg-background text-primary-text`}>
        {children}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Person",
            "name": "Alex Villegas",
            "url": "https://alexvillegas.vercel.app", // ¡Recuerda cambiar esto por tu dominio final!
            "jobTitle": "Estudiante de Ciberseguridad",
            "alumniOf": {
              "@type": "EducationalOrganization",
              "name": "ENTI - Universitat de Barcelona"
            },
            "sameAs": [
              "https://www.linkedin.com/in/alexvillegassalguero/",
              "https://github.com/villi21"
            ]
          }) }}
        />
      </body>
    </html>
  );
}