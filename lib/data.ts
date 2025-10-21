import React from "react";
import { CgPolaroid, CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import android from "@/public/android.jpeg";
import mypass from "@/public/mypass.jpeg";
import comptiasecurity from "@/public/comptiasecurity.png";
import comptiacysa from "@/public/comptiacysa.png";
import securityknowledge from "@/public/securityknowledge.png";
import eccouncil from "@/public/eccouncil.png";
import mta1 from "@/public/mta1.png";
import mta2 from "@/public/mta2.png";
import srs from "@/public/srs.png";
import colordetector from "@/public/colordetector.jpeg";

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
  "Actively seeking challenging projects and internship opportunities to further develop my knowledge and contribute to a real-world security team."
],
    icon: React.createElement(CgWorkAlt),
    date: "Currently",
  },
] as const;

export const educationData = [
  {
    title: "Grado en Ciberseguridad",
    location: ["ENTI - Universitat de Barcelona, España"],
    description: [
      "GPA: N/A (en curso)",
      "Relevant Coursework: Hacking Ético, Análisis Forense, Redes Seguras.",
    ],
    icon: React.createElement(LuGraduationCap),
    date: "2025 - Presente",
  },
  {
    title: "Bachillerato Científico-Tecnológico",
    location: ["Institut Joaquim Rubió I Ors, España"],
    description: [
      "Especialización en programación, electrónica y tecnología industrial.",
      "Fundamentos de física y matemáticas avanzadas.",
    ],
    icon: React.createElement(LuGraduationCap),
    date: "2022 - 2025",
  },
] as const;

export const projectsData = [
   {
    title: "Security Recon Suite",
    description:
      "A comprehensive tool for identifying vulnerabilities and gathering critical security information to enhance system protection.",
    tags: ["Python", "Socket", "Subprocess"],
    imageUrl:srs,
    gitLink: [
      "",
    ],
  },
  {
    title: "Android Music Store",
    description:
      "An android application for a music store that needs to develop a customer loyalty program supported by an Oracle database backend.",
    tags: ["Java", "JSP", "Android Development", "Oracle", "SQL"],
    imageUrl:android,
    gitLink: [
      "",
    ],
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
    title: "Comptia: Security+ CE",
    tags: [
      "Access Control",
      "Cryptography",
      "Threat Analysis",
      "Threat Detection",
      "Network Security",
      "Security Policies",
      "Disaster Recovery Planning",
    ],
    imageUrl: comptiasecurity,
  },
  {
    title: "Comptia: CySA+ CS0-003",
    tags: [
      "Threat and Vuln Management",
      "Security Operations & Monitoring",
      "Incident Response",
      "GRC Assessment",
      "Software and System Security",
      "Security Architecture and Toolset",
    ],
    imageUrl: comptiacysa,
  },
  {
    title: "Certificate of Cloud Security Knowledge V4",
    tags: [
      "Cloud Architecture Understanding",
      "Cloud Security Governance",
      "Data Security for Cloud Env",
      "Cloud Infrastructure Security",
      "Incident Response & Disaster Rec",
    ],
    imageUrl: securityknowledge,
  },
  {
    title: "EC-Council: Certified Ethical Hacker",
    tags: [
      "Vulnerability Assessment",
      "Social Engineering Attacks",
      "Malware Threat Analysis",
      "Hacking Mobile Platform",
      "Footprinting and Reconnaissance",
    ],
    imageUrl: eccouncil,
  },
  {
    title: "MTA: Security Fundamental",
    tags: [
      "Security Layers",
      "Operating System Security",
      "Network Security",
      "Security Protocol and Standard",
      "Software Security",
    ],
    imageUrl: mta1,
  },
  {
    title: "MTA: Networking Fundamentals",
    tags: [
      "Networking Infrastructure",
      "Network Hardware",
      "Protocols and Services",
      "Network Security",
      "TCP/IP Configuration",
      "Wireless Networking",
    ],
    imageUrl: mta2,
  },
] as const;

export const skillsData = [
  "Python",
  "Bash Scripting",
  "MySQL",
  "R Language",
  "C Language",
  "HTML",
  "CSS",
  "Git",
  "OSINT",
  "OWASP",
  "SEIM",
  "ISO 27001",
  "ISO 27002",
  "HIPPA",
  "GDPR",
  "NIST",
  "PCI DSS",
  "Burp Suite",
  "Nmap",
  "Metasploit",
  "Wireshark",
  "Dirbuster",
  "John the Ripper",
  "Ettercap",
  "Aircrack-ng",
  "Nessus",
  "Acunetix",
  "Splunk",
  "Malware Reverse Engineering",
  "Cryptography",
] as const;
