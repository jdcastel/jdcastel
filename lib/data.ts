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
    title: "Application Developer Internship",
    location: "Government of Ontario, Toronto, ON",
    description:
      "Collaborated with IT staff to design, develop, and test web-based applications. Assisted in writing clean, maintainable code (C#, .NET) and optimizing database queries. Participated in Agile ceremonies, conducted code reviews, and helped maintain CI/CD pipelines. Created technical documentation and supported end-user testing.",  
    icon: React.createElement(CgWorkAlt),
    date: "September 2022 - April 2023",
  },
  {
    title: "Technical Support Engineer Volunteer",
    location: "Hispanotech, Toronto, ON",
    description:
      "Provided first- and second-tier technical support for hardware and software issues. Diagnosed and resolved incidents via chat, email, and phone; escalated complex problems to senior teams.",  
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
