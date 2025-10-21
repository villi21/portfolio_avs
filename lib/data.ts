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
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Education",
    hash: "#education",
  },
  {
    name: "Certificates",
    hash: "#certificates",
  },

  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  // 👇 ASEGÚRATE DE QUE TIENES ESTE CONTENIDO DENTRO DE LOS CORCHETES [] 👇
  {
    title: "Buscando mi primera oportunidad laboral",
    location: ["Abierto a roles de Ciberseguridad Junior"],
    description: [
      "Aunque si tengo experiencia en el campo de la ciberseguridad, todavía no he tenido la oportunidad de empezar mi carrera laboral.",
    ],
    icon: React.createElement(CgWorkAlt), // Asegúrate de que el icono está importado
    date: "Actualmente",
  },
  // ... (puedes añadir más experiencias aquí)
] as const;

export const educationData = [
  // 👇 ASEGÚRATE DE QUE TIENES ESTE CONTENIDO DENTRO DE LOS CORCHETES [] 👇
  {
    title: "Grado en Ciberseguridad",
    location: ["ENTI - Universitat de Barcelona"],
    description: [
      "Hacking Ético & Auditoría",
      "Informática forense y análisis de malware",
      // ... etc
    ],
    icon: React.createElement(LuGraduationCap), // Asegúrate de que el icono está importado
    date: "Septiembre 2025 - Actualmente",
  },
  {
    title: "Bachillerato Científico-Tecnológico",
    location: ["Institut Joaquim Rubió I Ors"],
    description: [
      "Fundamentos de la programación",
      "Principios de la electrónica",
      // ... etc
    ],
    icon: React.createElement(LuGraduationCap),
    date: "Septiembre 2022 - Junio 2025",
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
