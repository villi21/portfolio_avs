import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { LuGraduationCap } from "react-icons/lu";
import srs from "@/public/srs.png";
import android from "@/public/android.jpeg";
import mypass from "@/public/mypass.jpeg";
import colordetector from "@/public/colordetector.jpeg";
import CAE from "@/public/CAE.png";

export const links = [
  { name: "Home", hash: "#home" },
  { name: "About", hash: "#about" },
  { name: "Experience", hash: "#experience" },
  { name: "Projects", hash: "#projects" },
  { name: "Education", hash: "#education" },
  { name: "Certificates", hash: "#certificates" },
  { name: "Contact", hash: "#contact" },
] as const;

export const experiencesData = [
  {
    title: "Cybersecurity Student",
    location: ["Open to Internships & Collaborative Projects"],
    description: [
      "Applying theoretical knowledge from my cybersecurity degree to practical, hands-on projects.",
      "Actively seeking challenging projects and internship opportunities to further develop my expertise."
    ],
    icon: React.createElement(CgWorkAlt),
    date: "Currently",
  },
] as const;

export const educationData = [
  {
    title: "Bachelor Degree In Cybersecurity",
    // 👇 CAMBIO: Separado en dos líneas para que coincida con la plantilla original 👇
    location: [
      "ENTI - Universitat de Barcelona, Catalonia, Spain"
    ],
    description: [
      "Ethical Hacking & Auditing, Computer Forensics & Malware Analysis, Secure Systems & Networks, Security Governance & Compliance",
    ],
    icon: React.createElement(LuGraduationCap),
    date: "2025 - Currently",
  },
  {
    title: "HS Diploma, Science & Technology Specialisation",
    // 👇 CAMBIO: Separado en dos líneas para que coincida con la plantilla original 👇
    location: [
      "Institut Joaquim Rubió I Ors, Catalonia, Spain"
    ],
    description: [
      "Fundamentals of Programming",
      "Principles of Electronics",
      "Industrial Technology",
      "Advanced Mathematics & Physics"
    ],
    icon: React.createElement(LuGraduationCap),
    date: "September 2022 - June 2025",
  },
] as const;

export const projectsData = [
   {
    title: "Security Recon Suite",
    description:
      "A comprehensive tool for identifying vulnerabilities and gathering critical security information to enhance system protection.",
    tags: ["Python", "Socket", "Subprocess"],
    imageUrl:srs,
    gitLink: [""],
  },
  {
    title: "Android Music Store",
    description:
      "An android application for a music store that needs to develop a customer loyalty program supported by an Oracle database backend.",
    tags: ["Java", "JSP", "Android Development", "Oracle", "SQL"],
    imageUrl:android,
    gitLink: [""],
  },
  {
    title: "MyPass Manage",
    description:
      "MyPass is a python application used for storing website login information, offering password generation and search functionality.",
    tags: ["Python", "JSON", "Tkinter"],
    imageUrl: mypass,
    gitLink: [""],
  },
  {
    title: "Word Analytics",
    description:
      "An Android application that assists color-blind individuals to be able to identify colors they are not able to see.",
    tags: ["Kotlin", "Retrofit", "Android Application"],
    imageUrl: colordetector,
    gitLink: [""],
  },
] as const;

export const certificatesData = [
  {
    title: "Cambridge English: C1 Advanced (CAE)",
    tags: [
      "FLUENT COMMUNICATION",
      "FLEXIBLE LANGUAGE USE",
      "ADVANCED COMPREHENSION",
      "ACADEMIC & PROFESSIONAL ENGLISH",
    ],
    imageUrl: CAE,
  }
] as const;

export const skillsData = [
  "Python", "Bash Scripting", "MySQL", "C Language", "HTML", "CSS",
  "Git", "OSINT", "OWASP", "SEIM", "ISO 27001", "ISO 27002", "HIPPA", 
  "GDPR", "NIST", "PCI DSS", "Burp Suite", "Nmap", "Metasploit", 
  "Wireshark", "Dirbuster", "John the Ripper", "Ettercap", "Aircrack-ng", 
  "Nessus", "Acunetix", "Splunk", "Malware Reverse Engineering", "Cryptography",
] as const;