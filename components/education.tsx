"use client";

import React from "react";
import SectionHeading from "./section-heading";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import { experiencesData } from "@/lib/data";
import { useSectionInView } from "@/lib/hooks";
import { useTheme } from "@/context/theme-context";
import { LuGraduationCap } from "react-icons/lu";

export default function Experience() {
  const { ref } = useSectionInView("Experience");
  const { theme } = useTheme();

  return (
    <section id="experience" ref={ref} className="scroll-mt-28 mb-28 sm:mb-40">
      <SectionHeading>My education</SectionHeading>
      <VerticalTimeline lineColor="">
        {/* Bloque 1 (Izquierda - usa el map original) */}
        {experiencesData.map((item, index) => (
          <React.Fragment key={index}>
            <VerticalTimelineElement
              visible={true}
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
              date={"2025 - Currently"}
              icon={React.createElement(LuGraduationCap)}
              iconStyle={{
                background:
                  theme === "light" ? "white" : "rgba(255, 255, 255, 0.15)",
                fontSize: "1.5rem",
              }}
            >
              <h3 className="font-semibold capitalize">{"Bachelor degree in Cybersecurity"}</h3>
              {["ENTI - Universitat de Barcelona, Catalonia, Spain"].map((loc, i) => (
                <p key={i} className="font-normal !mt-0">{loc}</p>
              ))}
              <ul className="list-disc pl-5 mt-2 space-y-1">
                {[
      "Ethical Hacking & Auditing",
      "Computer Forensics & Malware Analysis",
      "Secure Systems & Networks",
      "Security Governance & Compliance"
    ].map((point, i) => (
                  <li key={i} className="!mt-1 !font-normal text-gray-700 dark:text-white/75">
                    {point}
                  </li>
                ))}
              </ul>
            </VerticalTimelineElement>
          </React.Fragment>
        ))}

        {/* --- NUEVO BLOQUE AÑADIDO (Derecha) --- */}
        {/* Aquí la flecha roja será eliminada */}
        <React.Fragment>
          <VerticalTimelineElement
            position="right"
            visible={true}
            contentStyle={{
              background:
                theme === "light" ? "#f3f4f6" : "rgba(255, 255, 255, 0.05)",
              boxShadow: "none",
              border: "1px solid rgba(0, 0, 0, 0.05)",
              textAlign: "left",
              padding: "1.3rem 2rem",
            }}
            // 👇 CAMBIO CLAVE: Quitamos la flecha completamente para este bloque 👇
            contentArrowStyle={{
                borderLeft:
                  theme === "light"
                    ? "0.4rem solid #9ca3af"
                    : "0.4rem solid rgba(255, 255, 255, 0.5)",
            }}
            date="2022 - 2025" // Texto de ejemplo para la fecha
            icon={React.createElement(LuGraduationCap)} // Reutilizamos el icono
            iconStyle={{
              background:
                theme === "light" ? "white" : "rgba(255, 255, 255, 0.15)",
              fontSize: "1.5rem",
            }}
          >
            <h3 className="font-semibold capitalize">Título del Bloque Derecho</h3>
            <p className="font-normal !mt-0">Ubicación de ejemplo</p>
            <ul className="list-disc pl-5 mt-2 space-y-1">
              <li className="!mt-1 !font-normal text-gray-700 dark:text-white/75">
                Descripción de ejemplo 1.
              </li>
              <li className="!mt-1 !font-normal text-gray-700 dark:text-white/75">
                Descripción de ejemplo 2.
              </li>
            </ul>
          </VerticalTimelineElement>
        </React.Fragment>

      </VerticalTimeline>
    </section>
  );
}