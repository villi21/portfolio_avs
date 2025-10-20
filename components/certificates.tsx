"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { certificatesData } from "@/lib/data";
import { useSectionInView } from "@/lib/hooks";
import Certificate from "./certificate";

export default function Certificates() {
  const { ref } = useSectionInView("Certificates", 0.5);

  return (
    <section ref={ref} id="certificates" className="scroll-mt-28 mb-28">
      <SectionHeading>My certifications</SectionHeading>
      <div>
        {certificatesData.map((certificate, index) => (
          <React.Fragment key={index}>
            <Certificate {...certificate} />
          </React.Fragment>
        ))}
      </div>
    </section>
  );
}
