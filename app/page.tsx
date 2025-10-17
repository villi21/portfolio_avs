// Importa todos los componentes de tu portfolio.
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Experience from '@/components/Experience';
import Education from '@/components/Education';
import Projects from '@/components/Projects';
import Certifications from '@/components/Certifications';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

// Define el componente principal de la página.
export default function Home() {
  return (
    <> {/* Fragmento de React para agrupar elementos sin añadir un nodo DOM extra. */}
      <Navbar /> {/* Barra de navegación fija en la parte superior. */}
      {/* Contenedor principal para todas las secciones, con ancho máximo y padding horizontal. */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Hero /> {/* Sección de bienvenida e introducción. */}
        <About /> {/* Sección "Sobre Mí". */}
        <Experience /> {/* Sección de experiencia laboral. */}
        <Education /> {/* Sección de educación. */}
        <Projects /> {/* Sección de proyectos. */}
        <Certifications /> {/* Sección de certificados. */}
        <Contact /> {/* Sección de contacto. */}
      </main>
      <Footer /> {/* Pie de página. */}
    </>
  );
}