'use client';

import React from "react";
import { motion } from "framer-motion";
import { links } from "@/lib/data";
import Link from "next/link";
import clsx from "clsx";
import { useActiveSectionContext } from "@/context/active-section-context";
import ThemeSwitch from "./theme-switch";

export default function Header() {
  const { activeSection, setActiveSection, setTimeOfLastClick } =
    useActiveSectionContext();

  return (
    <header className="z-[999] relative">
      {/* Contenedor principal para toda la barra de navegación y el ThemeSwitch */}
      <motion.div
        className="fixed top-6 left-1/2 -translate-x-1/2 h-[3.25rem] rounded-full border border-white border-opacity-40 bg-white bg-opacity-80 shadow-lg shadow-black/[0.03] backdrop-blur-[0.5rem] dark:bg-gray-950 dark:border-black/40 dark:bg-opacity-75 flex items-center justify-center p-2 sm:gap-4"
        initial={{ y: -100, x: "-50%", opacity: 0 }}
        animate={{ y: 0, x: "-50%", opacity: 1 }}
      >
        <nav className="h-full">
          {/*
            APLICACIÓN DEL SLIDE (DESLIZAMIENTO):
            El fondo deslizante (motion.span con layoutId) debe estar en un sistema
            de diseño que le permita moverse. La propiedad 'layout' en un contenedor
            cercano ayuda a Framer Motion a optimizar los movimientos de sus hijos.
            Usamos el <ul> como el contenedor del sistema de diseño (layout)
            y removemos 'sm:gap-1' del <ul> y lo ponemos en el <li> para evitar
            problemas de cálculo de ancho con el 'layoutId'.
          */}
          <ul className="flex h-full items-center justify-center gap-y-1 text-[0.9rem] font-medium text-gray-500 sm:w-[initial] sm:flex-nowrap">
            {links.map((link) => (
              <motion.li
                className="h-full flex items-center justify-center relative sm:gap-1" // <-- Ajuste de estilo
                key={link.hash}
                // Si deseas animar la aparición/desaparición de las secciones, puedes usar 'layout' aquí
              >
                <Link
                  className={clsx(
                    'flex w-full items-center justify-center px-3 py-3 transition hover:text-gray-950 dark:text-gray-500 dark:hover:text-gray-300',
                    {
                      'text-gray-950 dark:text-gray-200':
                        activeSection === link.name,
                    }
                  )}
                  href={link.hash}
                  onClick={() => {
                    setActiveSection(link.name);
                    setTimeOfLastClick(Date.now());
                  }}
                >
                  {link.name}

                  {link.name === activeSection && (
                    <motion.span
                      className="bg-gray-100 rounded-full absolute inset-0 -z-10 dark:bg-gray-800"
                      layoutId="activeSection" // <-- CLAVE: Esto habilita el movimiento "slide"
                      transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                    ></motion.span>
                  )}
                </Link>
              </motion.li>
            ))}
          </ul>
        </nav>
        
        {/* ThemeSwitch permanece dentro del contenedor principal, alineado a la derecha */}
        <ThemeSwitch />
      </motion.div>
    </header>
  );
}