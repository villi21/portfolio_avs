"use client";

import React from "react";
import SectionHeading from "./section-heading";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import { educationData } from "@/lib/data";
import { useSectionInView } from "@/lib/hooks";
import { useTheme } from "@/context/theme-context";

export default function Education() {
  const { ref } = useSectionInView("Education");
  const { theme } = useTheme();

  return (
    <section id="education" ref={ref} className="scroll-mt-28 mb-28 sm:mb-40">
      <SectionHeading>Educación</SectionHeading>
      <VerticalTimeline lineColor="">
        {educationData.map((item, index) => (
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
              // 👇 CAMBIO CLAVE: Ajustamos dinámicamente la flecha 👇
              contentArrowStyle={{
                // Para los elementos de la izquierda (índice par), la flecha apunta a la izquierda.
                // Para los de la derecha (índice impar), apunta a la derecha.
                borderRight: index % 2 === 0 
                  ? (theme === "light" ? "0.4rem solid #9ca3af" : "0.4rem solid rgba(255, 255, 255, 0.5)")
                  : "none",
                borderLeft: index % 2 !== 0
                  ? (theme === "light" ? "0.4rem solid #9ca3af" : "0.4rem solid rgba(255, 255, 255, 0.5)")
                  : "none",
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
              <p className="font-normal !mt-0">{item.location.join(', ')}</p>
              <ul className="!mt-2 !font-normal text-gray-700 dark:text-white/75 list-disc pl-5 space-y-1">
                {item.description.map((point, idx) => (
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