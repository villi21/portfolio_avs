"use client";

import React from "react";
import SectionHeading from "./section-heading";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import { educationData } from "@/lib/data"; // 1. Importa 'educationData'
import { useSectionInView } from "@/lib/hooks";
import { useTheme } from "@/context/theme-context";

// 2. Nombre de la función cambiado a "Education"
export default function Education() {
  // 3. Hook apunta a "Education"
  const { ref } = useSectionInView("Education"); 
  const { theme } = useTheme();

  return (
    // 4. ID de la sección cambiado a "education"
    <section id="education" ref={ref} className="scroll-mt-28 mb-28 sm:mb-40 min-w-full">
      {/* 5. Título de la sección cambiado */}
      <SectionHeading>My Education</SectionHeading>
      <VerticalTimeline lineColor="">
        {/* 6. Mapea sobre 'educationData' */}
        {educationData.map((item, index) => (
          <React.Fragment key={index}>
            <VerticalTimelineElement
            visible = {true}
              contentStyle={{
                background:
                  theme === "light" ? "#f3f4f6" : "rgba(255, 255, 255, 0.05)",
                boxShadow: "none",
                border: "1px solid rgba(0, 0, 0, 0.05)",
                textAlign: "left",
                padding: "1.3rem 2rem",
              }}
              contentArrowStyle={{
                borderRight:
                  theme === "light"
                    ? "0.4rem solid #9ca3af"
                    : "0.4rem solid rgba(255, 255, 255, 0.5)",
              }}
              date={item.date}
              icon={item.icon}
              iconStyle={{
                background:
                  theme === "light" ? "white" : "rgba(255, 255, 255, 0.15)",
                fontSize: "1.5rem",
              }}
            >
              {/* --- ESTRUCTURA DE RENDERIZADO CORRECTA --- */}
              <h3 className="font-semibold capitalize text-gray-900 dark:text-white/90">{item.title}</h3>
              {/* Muestra la ubicación (ahora funciona porque 'location' tiene 2 strings) */}
              <p className="!mt-0 !font-normal text-gray-800 dark:text-gray-400">{item.location[0]}</p>
              
              {/* Muestra la descripción */}
              <ul className="!mt-2 !font-normal text-gray-700 dark:text-white/75 list-disc pl-5 space-y-1">
                {item.description.map((point, idx) => (
                  // Simplemente renderiza cada punto como un elemento de lista estándar
                  <li key={idx}>{point}</li>
                ))}
              </ul>
            </VerticalTimelineElement>
          </React.Fragment>
        ))}
      </VerticalTimeline>
    </section>
  );
}