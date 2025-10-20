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
      <span className="font-medium">Rahul Kumar</span> is a cybersecurity
      professional specializing in <span className="font-bold">Web Application Security</span>, 
      <span className="font-bold">Network Security</span>, and <span className="font-bold">Penetration Testing</span>. 
      He recently completed his master's degree from <span className="font-bold">George Mason University</span>, 
      Virginia, USA, in <span className="font-bold">Cybersecurity Engineering</span>, a program ranked in the nation's top 10. 
      Rahul holds a profound interest in <span className="italic">threat hunting</span> and employs automation tools for 
      <span className="italic">data protection</span>. He actively engages in extensive research on 
      <span className="italic">data privacy and the exposure of sensitive information</span>.
    </p>


      <p>
        In addition to his academic pursuits, Rahul has been serving as a{" "}
        <span className="font-bold">Graduate Teaching Assistant</span> at his
        university for the <span className="italic">past two years</span>,
        contributing to the academic success of over{" "}
        <span className="font-bold">500 students</span>.
      </p>

      <p>
        Beyond his formal engagements, Rahul is a dedicated cybersecurity
        enthusiast. He invests his free time in tackling challenges on platforms
        such as <span className="font-bold">TryHackMe</span> and{" "}
        <span className="font-bold">HackTheBox</span>, boasting a track record
        of completing over <span className="italic">100 labs</span>.
        Furthermore, he enjoys sharing his technical insights by contributing to
        technical blogs on <span className="font-bold">Medium</span>, with a
        focus on <span className="italic">Cybersecurity labs walkthroughs</span>
        .
      </p>
    </motion.section>
  );
}
