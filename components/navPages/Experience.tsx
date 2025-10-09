"use client";

import React from "react";
import { jetbrainsMono } from "@/app/font";
import { Briefcase } from "lucide-react";

const experiences = [
  {
    role: "Data Science Intern",
    company: "Absa Group",
    date: "Jan 2024 - Present",
    description: "Developed and implemented machine learning models to analyze customer data, resulting in a 15% improvement in fraud detection accuracy. Collaborated with cross-functional teams to integrate AI solutions into existing banking products.",
  },
  {
    role: "Software Developer Intern",
    company: "Capaciti",
    date: "Jun 2023 - Dec 2023",
    description: "Contributed to the development of a new mobile banking app using React Native. Wrote and maintained unit tests, ensuring code quality and reliability. Participated in agile development cycles and code reviews.",
  },
  // You can add more experiences here
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
              <div className={`p-6 bg-background/50 dark:bg-zinc-900/50 border border-border rounded-xl hover:border-[#e8390d] transition-all duration-300 transform hover:-translate-y-2 shadow-md hover:shadow-lg dark:shadow-none ${index % 2 === 0 ? "mr-4 text-left" : "ml-4 text-right"}`}>
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