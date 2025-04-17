import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaServer } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import enterpriseMicroserviceImg from "@/public/cloudImageProject.jpg";
import chronicleAppImg from "@/public/smallchroniclePhotoProject.jpg";

export const links = [
  { name: "Home", hash: "#home" },
  { name: "About", hash: "#about" },
  { name: "Projects", hash: "#projects" },
  { name: "Skills", hash: "#skills" },
  { name: "Experience", hash: "#experience" },
  { name: "Contact", hash: "#contact" },
] as const;

export const experiencesData = [
  {
    title: "Software Application Developer (Co-op)",
    location: "Government of Ontario, Toronto, ON",
    description:
      "Developed a multi-tenant web app using JavaScript and Node.js, supporting 1,000+ users. Managed 150+ support tickets monthly and optimized SQL queries.",
    icon: React.createElement(CgWorkAlt),
    date: "September 2022 - April 2023",
  },
  {
    title: "Technical Support Engineer Volunteer",
    location: "Hispanotech, Toronto, ON",
    description:
      "Mentored junior engineers, participated in daily standups, and assisted in troubleshooting technical issues.",
    icon: React.createElement(CgWorkAlt),
    date: "January 2022 – August 2022",
  },
] as const;

export const projectsData = [
  {
    title: "Enterprise Microservice Platform",
    description:
      "Built a high-performance microservice platform with robust CRUD operations and seamless CI/CD pipelines.",
    tags: ["Node.js", "Linux", "AWS", "Docker", "CI/CD"],
    imageUrl: enterpriseMicroserviceImg,
  },
  {
    title: "Chronicle App (Social Journal Application)",
    description:
      "Developed a multi-tenant journal app with real-time state management and an intuitive user interface.",
    tags: ["MongoDB", "Express.js", "React", "Node.js", "Next.js", "Redux", "TypeScript"],
    imageUrl: chronicleAppImg,
  },
] as const;

export const skillsData = [
  "C#",
  "JavaScript",
  "TypeScript",
  ".NET Core",
  "ASP.NET",
  "React",
  "Redux",
  "Node.js",
  "Google Cloud Platform",
  "Docker",
  "Kubernetes",
  "PostgreSQL",
  "SQL Server",
  "Git",
  "CI/CD",
  "Test-Driven Development",
  "Agile",
] as const;
