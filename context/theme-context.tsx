"use client";

import React, { useEffect, useState, createContext, useContext, ReactNode } from "react";

// El tipo Theme sigue existiendo, pero solo usaremos 'dark'
type Theme = "light" | "dark";

type ThemeContextProviderProps = {
  children: ReactNode;
};

// Modificamos el tipo del contexto: toggleTheme ya no es necesario
type ThemeContextType = {
  theme: Theme;
};

const ThemeContext = createContext<ThemeContextType | null>(null);

export default function ThemeContextProvider({
  children,
}: ThemeContextProviderProps) {
  // 👇 CAMBIO: Forzamos el estado inicial y único a 'dark'
  const [theme, setTheme] = useState<Theme>("dark");

  // 👇 CAMBIO: La función toggleTheme ahora no hace nada o se puede eliminar
  const toggleTheme = () => {
    // Esta función ya no se usará ni se exportará en el contexto
    console.log("Theme switching is disabled.");
  };

  // 👇 CAMBIO: Simplificamos useEffect para añadir siempre la clase 'dark'
  useEffect(() => {
    document.documentElement.classList.add("dark");
    // Opcional: Asegurarse de que 'light' no esté presente
    document.documentElement.classList.remove("light");
  }, []); // Se ejecuta solo una vez al montar

  return (
    <ThemeContext.Provider
      value={{
        theme,
        // No pasamos toggleTheme
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
}

// El hook useTheme sigue igual, pero solo devolverá 'dark'
export function useTheme() {
  const context = useContext(ThemeContext);

  if (context === null) {
    throw new Error("useTheme must be used within a ThemeContextProvider");
  }

  return context;
}