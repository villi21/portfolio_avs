// Importamos los iconos que usaremos en los componentes
import { FaGithub, FaLinkedin } from 'react-icons/fa'; // Iconos de redes sociales
import { MdWork } from 'react-icons/md'; // Icono para experiencia laboral
import { FaGraduationCap } from 'react-icons/fa'; // Icono para educación

// Definimos las interfaces con TypeScript para asegurar la estructura de los datos.
// Esto mejora la robustez del código y la autocompletado en el editor.

export interface NavLink {
  name: string;
  href: string;
}

export interface SocialLink {
  name: string;
  url: string;
  icon: React.ElementType; // Permite usar componentes de iconos como FaGithub
}

export interface TimelineItem {
  icon: React.ElementType;
  date: string;
  title: string;
  subtitle: string;
  points: string[]; // Lista de puntos clave o logros
}

export interface Project {
  title: string;
  description: string;
  tags: string[]; // Tecnologías o habilidades usadas
  githubUrl: string;
  image: string; // Ruta a la imagen del proyecto en /public/images/
}

export interface Certification {
  title: string;
  skills: string[]; // Habilidades cubiertas por el certificado
  logo: string; // Ruta al logo del certificado en /public/images/
}

// --- COMIENZA A RELLENAR CON TU INFORMACIÓN PERSONALIZADA ---

export const navLinks: NavLink[] = [
  { name: 'Inicio', href: '#inicio' },
  { name: 'Sobre mí', href: '#sobre-mi' },
  { name: 'Experiencia', href: '#experiencia' },
  { name: 'Educación', href: '#educacion' },
  { name: 'Proyectos', href: '#proyectos' },
  { name: 'Certificados', href: '#certificados' },
  { name: 'Contacto', href: '#contacto' },
];

export const socialLinks: SocialLink[] = [
  { name: 'LinkedIn', url: 'https://www.linkedin.com/in/alexvillegassalguero', icon: FaLinkedin }, // ¡CAMBIA TU USUARIO!
  { name: 'GitHub', url: 'https://github.com/villi21', icon: FaGithub }, // ¡CAMBIA TU USUARIO!
];

export const experience: TimelineItem[] = [
  {
    icon: MdWork, // Icono de trabajo
    date: 'Actualmente',
    title: 'Buscando mi primera oportunidad laboral',
    subtitle: 'Abierto a roles de Ciberseguridad Junior',
    points: ['Aunque si tengo experiencia en el campo de la ciberseguridad, todavía no he tenido la oportunidad de empezar mi carrera laboral.'],
  },
  // Si tienes más experiencia, añádela aquí en el mismo formato.
];

export const education: TimelineItem[] = [
  {
    icon: FaGraduationCap, // Icono de graduación
    date: 'Septiembre 2025 - Actualmente',
    title: 'Grado en Ciberseguridad',
    subtitle: 'ENTI - Universitat de Barcelona',
    points: [
      'Hacking Ético & Auditoría',
      'Informática forense y análisis de malware',
      'Sistemas y redes seguras',
      'Gobernanza y cumplimiento de la seguridad',
    ],
  },
  {
    icon: FaGraduationCap,
    date: 'Septiembre 2022 - Junio 2025',
    title: 'Bachillerato Científico-Tecnológico',
    subtitle: 'Institut Joaquim Rubió I Ors',
    points: [
      'Fundamentos de la programación',
      'Principios de la electrónica',
      'Tecnología industrial',
      'Física y matemáticas avanzadas',
    ],
  },
];

export const projects: Project[] = [
  {
    title: 'Secure Password Toolkit',
    description: 'Una herramienta con doble función para generar contraseñas seguras y aleatorias, y almacenar credenciales de forma segura. Mejora la higiene de seguridad personal.',
    tags: ['PYTHON', 'CRYPTOGRAPHY', 'SQLITE'],
    githubUrl: 'https://github.com/alex-villegas-salguero/secure-password-toolkit', // ¡CAMBIA ESTO!
    image: '/images/project-password.png', // Imagen de proyecto
  },
  {
    title: 'Network Port Scanner',
    description: 'Una herramienta rápida y eficaz para escanear un host de destino en busca de puertos abiertos, lo que ayuda a identificar posibles vulnerabilidades de red y a mapear los servicios en ejecución.',
    tags: ['PYTHON', 'THREADING', 'SOCKET'],
    githubUrl: 'https://github.com/alex-villegas-salguero/network-port-scanner', // ¡CAMBIA ESTO!
    image: '/images/project-scanner.png',
  },
  {
    title: 'Hash Cracker',
    description: 'Una herramienta de alto rendimiento diseñada para descifrar hash de contraseñas comunes (MD5, SHA-256) utilizando ataques de diccionario y fuerza bruta con fines de pruebas de seguridad.',
    tags: ['PYTHON', 'MULTIPROCESSING', 'HASHLIB'],
    githubUrl: 'https://github.com/alex-villegas-salguero/hash-cracker', // ¡CAMBIA ESTO!
    image: '/images/project-hash.png',
  },
];

export const certifications: Certification[] = [
  {
    title: 'CompTIA Security+ (SY0-601)', // He añadido el código del examen para ser más preciso.
    skills: ['ACCESS CONTROL', 'CRYPTOGRAPHY', 'THREAT ANALYSIS', 'NETWORK SECURITY', 'SECURITY POLICIES', 'DISASTER RECOVERY PLANNING'],
    logo: '/images/comptia-logo.png',
  },
  {
    title: 'Cambridge English: C1 Advanced',
    skills: ['ACADEMIC & PROFESSIONAL ENGLISH', 'FLUENT COMMUNICATION', 'ADVANCED COMPREHENSION', 'EFFECTIVE PARTICIPATION', 'COMPLEX WRITING', 'SPONTANEOUS EXPRESSION', 'FLEXIBLE LANGUAGE USE'],
    logo: '/images/cambridge-logo.png',
  },
];
