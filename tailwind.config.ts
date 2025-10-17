import type { Config } from 'tailwindcss'

const config: Config = {
  // Rutas donde Tailwind buscará las clases para generar el CSS final.
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  // Personalización del tema de Tailwind.
  theme: {
    extend: {
      colors: {
        'background': '#212836',      // Fondo principal de la web.
        'card': '#2A3344',            // Fondo de las tarjetas y elementos destacados.
        'primary-text': '#F7FAFC',     // Color principal del texto (casi blanco).
        'secondary-text': '#A0AEC0',   // Color para texto secundario o descriptivo.
        'accent': '#9F7AEA',          // Color de acento para elementos interactivos o resaltados.
        'accent-hover': '#B794F4',    // Versión más clara del acento para estados de hover.
      }
    },
  },
  plugins: [], // Puedes añadir plugins de Tailwind aquí si los necesitas.
}
export default config