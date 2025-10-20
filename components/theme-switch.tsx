"use client";

import { useTheme } from "@/context/theme-context";
import React from "react";
import { BsMoon, BsSun } from "react-icons/bs";

export default function ThemeSwitch() {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      // 👇 CAMBIO: Eliminamos las clases de posicionamiento (fixed, top, right) y de fondo (bg-white, dark:bg-gray-950)
      className="w-[3rem] h-[3rem] rounded-full flex items-center justify-center hover:scale-[1.15] active:scale-105 transition-all"
      onClick={toggleTheme}
      aria-label="Switch color theme"
    >
      {theme === "light" ? <BsSun /> : <BsMoon />}
    </button>
  );
}