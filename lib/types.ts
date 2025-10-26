import { links } from "./data";
import React from "react"; // Importamos React

export type SectionName = (typeof links)[number]["name"];

// 👇 AÑADE ESTA DEFINICIÓN DE TIPO 👇
// Le decimos a TypeScript cómo es la estructura de los datos
export type TimelineItem = {
  title: string;
  location: string[]; // <-- CAMBIO: Lo definimos como un array de strings (string[])
  description: string[];
  icon: React.ReactElement;
  date: string;
};