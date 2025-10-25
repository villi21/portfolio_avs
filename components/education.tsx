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

export default function Experience() {
  const { ref } = useSectionInView("Experience");
  const { theme } = useTheme();

  return (
    <section id="experience" ref={ref} className="scroll-mt-28 mb-28 sm:mb-40">
      <SectionHeading>My experience</SectionHeading>
      <VerticalTimeline lineColor="">
        {/* Bloque 1 (Izquierda) */}
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
              date={item.date}
              icon={item.icon}
              iconStyle={{
                background:
                  theme === "light" ? "white" : "rgba(255, 255, 255, 0.15)",
                fontSize: "1.5rem",
              }}
            >
              <h3 className="font-semibold capitalize">{item.title}</h3>
              {item.location.map((loc, i) => (
                <p key={i} className="font-normal !mt-0">{loc}</p>
              ))}
              <ul className="list-disc pl-5 mt-2 space-y-1">
                {item.description.map((point, i) => (
                  <li key={i} className="!mt-1 !font-normal text-gray-700 dark:text-white/75">
                    {point}
                  </li>
                ))}
              </ul>
            </VerticalTimelineElement>
          </React.Fragment>
        ))}

        {/* --- NUEVO BLOQUE (Derecha) con flecha apuntando a la izquierda --- */}
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
            // 👇 CAMBIO CLAVE: Añadimos la flecha a la izquierda para este bloque 👇
            contentArrowStyle={{
              borderLeft: // La flecha "sale" del lado izquierdo del bloque
                theme === "light"
                  ? "0.4rem solid #f3f4f6" // Color del fondo del bloque en light mode
                  : "0.4rem solid rgba(255, 255, 255, 0.05)", // Color del fondo del bloque en dark mode
            }}
            date="2022 - 2025"
            icon={experiencesData.length > 0 ? experiencesData[0].icon : <></>}
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