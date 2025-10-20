"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";

export default function About() {
  const { ref } = useSectionInView("About");

  return (
    <motion.section
      ref={ref}
      className="mb-28 max-w-[47rem] text-center leading-8 sm:mb-40 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
     <SectionHeading>About me</SectionHeading>
    <p className="mb-3">
        I have been interested in computing since I was very young, but more specifically in programming. Throughout my childhood, I believed that I would work in this field and that this was my path in life. However, everything changed when I discovered the world of cybersecurity while I was in secondary school. I only had to do a little research to realise that this was my true calling. To this day, I still feel the same way.
      </p>

      <p>
        My name is <span className="font-bold">Alex Villegas</span> and I am a <span className="font-bold">cybersecurity student</span> at <span className="font-bold">ENTI-UB</span>. Driven by curiosity, I am always looking for ways to expand my knowledge and improve, which is why I think this field suits me so well. I am also very proactive and restless, so the dynamic and non-monotonous nature of cybersecurity is perfect for me.
      </p>
    </motion.section>
  );
}
