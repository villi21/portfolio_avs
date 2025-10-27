import { links } from "./data";
import React from "react"; 
export type SectionName = (typeof links)[number]["name"];
export type TimelineItem = {
  title: string;
  location: string[];
  description: string[];
  icon: React.ReactElement;
  date: string;
};