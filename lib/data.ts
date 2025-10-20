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
    name: "Skills",
    hash: "#skills",
  },

  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [

   {
    title: "George Mason University",
    location: ["Graduate Research Assistant", "Fairfax, VA, USA"],
    description: [
      "Actively involved in the development and execution of innovative research programs in Applied Information Technology and Data Analytics, collaborating closely with supervisors and leading researchers to refine large-scale assessment methodologies.",
      "Spearhead the creation of multimedia content and oversee the management of project websites, contributing to the effective dissemination and presentation of research findings.",
      "Play a critical role in the research process through comprehensive data collection and analysis, supporting team efforts in reporting and enhancing research designs to apply cutting-edge technologies and analytical techniques.",
    ],
    icon: React.createElement(LuGraduationCap),
    date: "Feb 2023 - Present",
  },
  {
    title: "George Mason University",
    location: ["Graduate Teaching Assistant", "Fairfax, VA, USA"],
    description: [
      "Responsible for setting and maintaining course and lab work for graduate and undergraduate courses in Computer Networking (CYSE 230) and Cyber Security (CYSE 499/610).",
      "Worked to facilitate classroom learning for over 80 students every semester, including assignment and exam grading and feedback, conducting office hours, outlook email replies etc.",
    ],
    icon: React.createElement(LuGraduationCap),
    date: "Jan 2022 - Dec 2023",
  },
  {
    title: "Cyber3ra",
    location: [
      "Cyber Security Intern",
      "Remote - New Delhi, India",
    ],
    description: [
      "Enhanced vulnerability assessments for premier clients, introducing methods that escalated detection efficiency by 25%.",
      "Enriched cybersecurity training, effectively mentoring over 100 participants in cutting-edge digital security best practices, markedly boosting their security proficiency.",
    ],
    icon: React.createElement(CgWorkAlt),
    date: "May 2021 - Aug 2021",
  },
  {
    title: "JSC Golla Engineering Pvt Ltd",
    location: [
      "Security Analyst",
      "Remote - Delhi, India",
    ],
    description: [
      "Optimized and maintained metrics and reports on vulnerability assessments, implementing best security strategies that reduced cyber-attacks by ~13%. ",
      "Expertly analyzed and monitored SIEM alerts with IBM QRadar and Splunk, elevating threat detection by ~10% through advanced network and log data analysis, significantly enhancing cybersecurity defenses.",
      "Directed investigations into malicious email, led vulnerability assessments, coordinating with internal teams to identify threats. Conducted security training for 50+ staff, enhancing organizational security awareness.",
      "Spearheaded technical support and revitalized vulnerability management program, driving continuous improvements, and proposing effective mitigation and remediation solutions. ",
    ],
    icon: React.createElement(CgPolaroid),
    date: "June 2019 - Apr 2021",
  },
] as const;

export const educationData = [
  {
    title: "George Mason University",
    location: [
      "Master's of Science in Cybersecurit and Information Systems",
      "Fairfax, Virginia, United States",
    ],
    description: [
      "GPA: 3.75/4.0",
      "Relevant Coursework: Computer Networking, Hardware and Cyber-Physical Systems, Cybersecurity Engineering Fundamentals, Cloud Computing Security, Malware Reverse Engineering, Secure Software Programming, Penetration Testing and Digital Forensics, etc.",
    ],
    icon: React.createElement(LuGraduationCap),
    date: "August 2021 - December 2023",
  },
  {
    title: "Madan Mohan Malaviya University of Technology",
    location: [
      "Bachelor of Technology in Computer Science and Engineering",
      "Gorakhpur, Uttar Pradesh, India",
    ],
    description: [
      "GPA: 3.5/4.0",
      "Relevant Coursework: Artifical Intelligence, Database Systems, Parallel and Distributed Computing, Operating Systems, Web Technology, Intro to Machine Learning, etc.",
    ],
    icon: React.createElement(LuGraduationCap),
    date: "July 2017 - August 2021",
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
      "https://github.com/rahulkumarmmmut/SecurityReconSuite",
    ],
  },
  {
    title: "Android Music Store",
    description:
      "An android application for a music store that needs to develop a customer loyalty program supported by an Oracle database backend.",
    tags: ["Java", "JSP", "Android Development", "Oracle", "SQL"],
    imageUrl:android,
    gitLink: [
      "https://github.com/rahulkumarmmmut/Android-Application--Music-Store",
    ],
  },
  {
    title: "MyPass Manage",
    description:
      "MyPass is a python application used for storing website login information, offering password generation and search functionality.",
    tags: ["Python", "JSON", "Tkinter"],
    imageUrl: mypass,
    gitLink: ["https://github.com/rahulkumarmmmut/PasswordManager"],
  },
  {
    title: "Word Analytics",
    description:
      "An Android application that assists color-blind individuals to be able to identify colors they are not able to see.",
    tags: ["Kotlin", "Retrofit", "Android Application"],
    imageUrl: colordetector,
    gitLink: ["https://github.com/rahulkumarmmmut/colordetection"],
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
