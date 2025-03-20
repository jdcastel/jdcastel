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
      id="about"
      className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
    >
      <SectionHeading>About Me</SectionHeading>
      <p className="mb-3">
        <span className="font-medium">I am a Software Developer</span> with over{" "}
        <span className="font-medium">3 years</span> of experience building scalable enterprise applications using <span className="font-medium">Next.js</span> and <span className="font-medium">React</span>. I specialize in developing robust backend services with <span className="font-medium">.NET Core</span>, optimizing database performance, and creating modern web applications.
      </p>
      <p>
        I earned an{" "}
        <span className="font-medium">Advanced Diploma in Computer Programming and Analysis</span> from{" "}
        <span className="font-medium">Seneca Polytechnic</span> in Toronto, where I deepened my expertise in cloud infrastructure, databases, and DevOps practices. When I’m not coding, I enjoy exploring new technologies, working on innovative projects, and expanding my knowledge in cloud computing and container orchestration.
      </p>
    </motion.section>
  );
}
