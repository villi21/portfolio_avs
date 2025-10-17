import React from 'react';

const About: React.FC = () => {
  return (
    <section id="sobre-mi" className="py-24">
      <div className="text-center mb-12 animate-fade-in-up">
        <h2 className="text-4xl font-bold text-primary-text">Sobre Mí</h2>
        <div className="w-24 h-1 bg-accent mx-auto mt-4 rounded-full"></div> {/* Div de acento */}
      </div>
      <div className="max-w-3xl mx-auto text-center text-lg text-secondary-text space-y-6 leading-relaxed animate-fade-in-up delay-200">
        <p>
          Me llamo Alex Villegas y soy estudiante de ciberseguridad en <a href="https://www.enti.cat/es/" target="_blank" rel="noopener noreferrer" className="text-accent hover:underline">ENTI-UB</a>. Soy una persona curiosa que siempre está buscando la manera de ampliar su conocimiento y mejorar, y es por ello que creo que este campo encaja tanto conmigo.
        </p>
        <p>
          Desde pequeño me ha gustado la informática y la programación, pero todo cambió cuando conocí el mundo de la ciberseguridad. Solo tuve que investigar un poco para saber que esto era lo mío. Soy muy proactivo e inquieto, por lo que la no monotonía de la ciberseguridad es perfecta para mí.
        </p>
      </div>
    </section>
  );
};
export default About;