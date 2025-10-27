"use client";

import React, { useEffect, useState, createContext, useContext, ReactNode } from "react";

type Theme = "light" | "dark";

type ThemeContextProviderProps = {
  children: ReactNode;
};

// 👇 CAMBIO: Eliminado toggleTheme del tipo
type ThemeContextType = {
  theme: Theme;
};

const ThemeContext = createContext<ThemeContextType | null>(null);

export default function ThemeContextProvider({
  children,
}: ThemeContextProviderProps) {
  // 👇 CAMBIO: El estado se fija en "dark" y no hay función para cambiarlo
  const theme: Theme = "dark";

  // 👇 CAMBIO: useEffect ahora solo añade la clase "dark" por si acaso
  useEffect(() => {
    document.documentElement.classList.add("dark");
  }, []);

  return (
    <ThemeContext.Provider
      value={{
        theme,
        // 👇 CAMBIO: toggleTheme ya no se proporciona
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const context = useContext(ThemeContext);

  if (context === null) {
    throw new Error("useTheme must be used within a ThemeContextProvider");
  }

  return context;
}
