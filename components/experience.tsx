"use client";

import React from "react";
import SectionHeading from "./section-heading";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import { experiencesData } from "@/lib/data"; // Mantenemos experiencesData
import { useSectionInView } from "@/lib/hooks";
import { useTheme } from "@/context/theme-context";

// Usamos el tipo TimelineItem definido en types.ts (implícitamente a través de experiencesData)
export default function Experience() {
  const { ref } = useSectionInView("Experience");
  const { theme } = useTheme();

  return (
    <section id="experience" ref={ref} className="scroll-mt-28 mb-28 sm:mb-40 min-w-full">
      <SectionHeading>My experience</SectionHeading>
      <VerticalTimeline lineColor="">
        {/* Mapeamos sobre experiencesData */}
        {experiencesData.map((item, index) => (
          <React.Fragment key={index}>
            <VerticalTimelineElement
              visible={true} // Asegura que el elemento sea visible por defecto
              contentStyle={{
                background:
                  theme === "light" ? "#f3f4f6" : "rgba(255, 255, 255, 0.05)",
                boxShadow: "none",
                border: "1px solid rgba(0, 0, 0, 0.05)",
                textAlign: "left",
                padding: "1.3rem 2rem", // Padding consistente con education
              }}
              contentArrowStyle={{
                borderRight:
                  theme === "light"
                    ? "0.4rem solid #9ca3af"
                    : "0.4rem solid rgba(255, 255, 255, 0.5)", // Estilo de flecha consistente
              }}
              date={item.date}
              dateClassName="asdasd"
              icon={item.icon}
              iconStyle={{
                background:
                  theme === "light" ? "white" : "rgba(255, 255, 255, 0.15)", // Estilo de icono consistente
                fontSize: "1.5rem",
              }}
            >
              {/* --- ESTRUCTURA DE RENDERIZADO IDÉNTICA A EDUCATION --- */}
              {/* Título */}
              <h3 className="font-semibold capitalize text-gray-900 dark:text-white/90">{item.title}</h3>

              {/* Ubicación (mapeo sobre el array) */}
              <p className="!mt-0 !font-normal text-gray-800 dark:text-gray-400">{item.location[0]}</p>

              {/* Descripción (mapeo sobre el array en una lista) */}
              {/* Usamos las mismas clases para la lista ul que en education.tsx */}
              <ul className="!mt-2 !font-normal text-gray-700 dark:text-white/75 list-disc pl-5 space-y-1">
                {item.description.map((point, i) => (
                  // El li hereda el estilo del ul, consistente con education.tsx para puntos simples
                  <li key={i}>
                    {point}
                  </li>
                ))}
              </ul>
            </VerticalTimelineElement>
          </React.Fragment>
        ))}
      </VerticalTimeline>
    </section>
  );
}