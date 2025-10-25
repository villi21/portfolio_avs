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
  const { ref } = useSectionInView("Education"); // Asegura que coincide con lib/data.ts links
  const { theme } = useTheme();

  return (
    <section id="education" ref={ref} className="scroll-mt-28 mb-28 sm:mb-40">
      <SectionHeading>Educación</SectionHeading>
      <VerticalTimeline>
        {educationData.map((item, index) => (
          <React.Fragment key={index}>
            <VerticalTimelineElement
              // 👇 FUERZA POSICIÓN IZQUIERDA 👇
              position="left" 
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
                // 👇 FLECHA IZQUIERDA 👇
                borderLeft:
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
              <h3 className="font-semibold capitalize text-gray-900 dark:text-white/90">{item.title}</h3>
               {item.location && item.location.map((loc, i) => (
                 <p key={i} className="!mt-0 !font-normal text-gray-800 dark:text-gray-400">{loc}</p>
              ))}
              <ul className="!mt-2 !font-normal text-gray-700 dark:text-white/75 list-disc pl-5 space-y-1">
                {item.description.map((point, idx) => {
                  const parts = point.split(":");
                  if (parts.length > 1 && (parts[0] === "GPA" || parts[0] === "Relevant Coursework")) {
                    return (
                      <li key={idx}>
                        <strong>{parts[0]}:</strong>{parts.slice(1).join(":")}
                      </li>
                    );
                  }
                  return <li key={idx}>{point}</li>;
                })}
              </ul>
            </VerticalTimelineElement>
          </React.Fragment>
        ))}
      </VerticalTimeline>
    </section>
  );
}