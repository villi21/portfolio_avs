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

// Usamos el tipo TimelineItem importado (implícitamente a través de experiencesData)
export default function Experience() {
  const { ref } = useSectionInView("Experience");
  const { theme } = useTheme();

  return (
    <section id="experience" ref={ref} className="scroll-mt-28 mb-28 sm:mb-40">
      <SectionHeading>My experience</SectionHeading>
      <VerticalTimeline lineColor="">
        {/* Mapeamos sobre experiencesData */}
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
              {/* --- ESTRUCTURA DE RENDERIZADO SIMILAR A EDUCATION --- */}
              <h3 className="font-semibold capitalize text-gray-900 dark:text-white/90">{item.title}</h3>
              {/* Mapeamos sobre el array de location */}
              {item.location.map((loc, i) => (
                 <p key={i} className="!mt-0 !font-normal text-gray-800 dark:text-gray-400">{loc}</p>
              ))}

              {/* Mapeamos sobre el array de description */}
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
      </VerticalTimeline>
    </section>
  );
}