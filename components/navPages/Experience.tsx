"use client";

import React from "react";
import { jetbrainsMono } from "@/app/font";
import { Briefcase } from "lucide-react";

const experiences = [
  {
    role: "Bootcamp Assistant",
    company: "WethinkCode",
    date: "May 2025 - July 2025",
    description:
      "Assisted bootcamp participants in understanding and applying Python programming concepts through clear explanations and practical examples.Provided one-on-one and group support to enhance problem-solving skills and foster independent learning.",
  },
  {
    role: "Software Developer Intern",
    company: "UVU Africa",
    date: "August 2025 - Present",
    description:
      "Participating in a structured internship focused on building practical software development skills   through self-paced courses and project-based learning.Gaining hands-on experience with full-stack development, version control (Git/GitHub), and collaborative workflows",
  },
];

export const Experience = () => {
  return (
    <section id="experience" className="w-full max-w-5xl px-6 py-20">
      <h2 className="text-4xl sm:text-5xl font-bold mb-16 text-center">
        My <span className="text-[#e8390d]">Journey</span>
      </h2>
      <div className="relative">
        {/* Vertical line */}
        <div className="absolute left-1/2 -translate-x-1/2 h-full w-0.5 bg-border" />

        {experiences.map((exp, index) => (
          <div
            key={index}
            className={`mb-12 flex items-center w-full ${
              index % 2 === 0 ? "flex-row-reverse" : ""
            }`}
          >
            <div className="w-1/2 flex justify-center">
              <div className="z-10 bg-background p-2 rounded-full border-2 border-[#e8390d]">
                <Briefcase className="text-[#e8390d]" />
              </div>
            </div>
            <div className="w-1/2">
              <div className={`p-6 bg-background/50 dark:bg-zinc-900/50 border border-border rounded-xl hover:border-[#e8390d] transition-all duration-300 transform hover:-translate-y-2 shadow-md hover:shadow-lg dark:shadow-none ${index % 2 === 0 ? "mr-4" : "ml-4"} text-left`}>
                <h3 className="font-bold text-lg text-[#e8390d]">{exp.role}</h3>
                <p className="italic text-foreground/80">{exp.company}</p>
                <p className="text-sm text-muted-foreground mb-2">{exp.date}</p>
                <p className={`text-sm text-foreground/80 leading-relaxed ${jetbrainsMono.className}`}>{exp.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}