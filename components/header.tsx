'use client';

import React from "react";
import { motion } from "framer-motion";
import { links } from "@/lib/data";
import Link from "next/link";
import clsx from "clsx";
import { useActiveSectionContext } from "@/context/active-section-context";
// 👇 CAMBIO: Eliminamos la importación de ThemeSwitch
// import ThemeSwitch from "./theme-switch";

export default function Header() {
  const { activeSection, setActiveSection, setTimeOfLastClick } =
    useActiveSectionContext();

  return (
    <header className="z-[999] relative">
      <motion.div
        // 👇 CAMBIO: Quitamos flex y gap, ya que solo queda la navegación
        className="fixed top-6 left-1/2 -translate-x-1/2 h-[3.25rem] rounded-full border border-white border-opacity-40 bg-white bg-opacity-80 shadow-lg shadow-black/[0.03] backdrop-blur-[0.5rem] dark:bg-gray-950 dark:border-black/40 dark:bg-opacity-75 p-2" // Eliminado flex items-center justify-center sm:gap-4
        initial={{ y: -100, x: "-50%", opacity: 0 }}
        animate={{ y: 0, x: "-50%", opacity: 1 }}
      >
        <nav className="h-full flex items-center justify-center"> {/* Centramos la nav */}
          <ul className="flex h-full items-center justify-center gap-y-1 text-[0.9rem] font-medium text-gray-500 sm:w-[initial] sm:flex-nowrap">
            {links.map((link) => (
              <motion.li
                className="h-full flex items-center justify-center relative sm:gap-1"
                key={link.hash}
              >
                <Link
                  className={clsx(
                    'flex w-full items-center justify-center px-3 py-3 transition hover:text-gray-950 dark:text-gray-500 dark:hover:text-gray-300',
                    {
                      'text-gray-950 dark:text-gray-200': // Estilos dark: se aplicarán
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
                      // Estilos dark: se aplicarán
                      className="bg-gray-100 rounded-full absolute inset-0 -z-10 dark:bg-gray-800"
                      layoutId="activeSection"
                      transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                    ></motion.span>
                  )}
                </Link>
              </motion.li>
            ))}
          </ul>
        </nav>
        {/* 👇 CAMBIO: Eliminamos ThemeSwitch de aquí */}
      </motion.div>
    </header>
  );
}