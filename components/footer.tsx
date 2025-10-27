import React from "react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="px-4 text-center text-gray-500">
      <small className="mb-2 block text-xs">
        &copy; {currentYear} Alex Villegas. Todos los derechos reservados.
      </small>
      <p className="text-xs">
        Este sitio está protegido por reCAPTCHA y se aplican la&nbsp;
        <a 
          href="https://policies.google.com/privacy" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="underline"
        >
          Política de Privacidad
        </a> y los&nbsp;
        <a 
          href="https://policies.google.com/terms" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="underline"
        >
          Términos de Servicio
        </a> de Google.
      </p>
    </footer>
  );
}