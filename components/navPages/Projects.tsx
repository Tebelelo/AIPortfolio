import { Heart } from "lucide-react";
import React, { JSX, useState } from "react";
import ProjectCard from "../ProjectCard";
import ProjectModal from "../ProjectModal"; // ⬅️ You must have this file
import { jetbrainsMono } from "@/app/font";

import {
  FaReact,
  FaNodeJs,
  FaHtml5,
  FaCss3Alt,
  FaJsSquare,
} from "react-icons/fa";
import { SiMongodb, SiExpress, SiTypescript, SiNextdotjs, SiPostgresql,SiGoogle,} from "react-icons/si";
import { SiFirebase } from "react-icons/si";

export const techIconMap: Record<string, JSX.Element> = {
  react: <FaReact className="text-cyan-300" />,
  node: <FaNodeJs className="text-green-500" />,
  express: <SiExpress className="text-white" />,
  mongo: <SiMongodb className="text-green-400" />,
  ts: <SiTypescript className="text-blue-500" />,
  next: <SiNextdotjs className="text-white" />,
  postgres: <SiPostgresql className="text-sky-500" />,
  firebase: <SiFirebase className="text-yellow-400" />,
  gemini: <SiGoogle className="text-blue-400" />,
  html: <FaHtml5 className="text-orange-600" />, 
  css: <FaCss3Alt className="text-blue-600" />, 
  javascript: <FaJsSquare className="text-yellow-400" />,
};

const projects = [
  {
    title: "AI Study Buddy",
    description:
      "An AI-powered study companion taking advantage of Gemini Pro to provide personalized learning experiences.",
    thumbnail: "/project1.png",
    techStack: ["ts", "react", "firebase"],
    gradient: "#8A2BE2, rgb(13, 1, 60)",
    github: "https://github.com/MediLex-Tech-group/AIStudyBuddy.git",
    live: "https://ai-study-buddy-bmwm.vercel.app/",
  },
  {
    title: "Resume Builder",
    description:
      "Your personal ATS-friendly resume builder with customizable templates and easy export options.Leverages the gemini API for enhanced user experience.",
    thumbnail: "/project2.1.png",
    techStack: ["react", "ts"],
    gradient: "#8A2BE2, rgb(13, 1, 60)",
    github: "https://kagisogotech.github.io/ResumeGen/loggedIn.html",
    live: "https://kagisogotech.github.io/ResumeGen/",
    descriptionColor: "text-black",
    buttonTextColor: "text-black",
  },
  {
    title: "Review Sentiment Analyzer",
    description:
      "An AI-powered review sentiment analysis tool desgned for businesses to analyze customer feedback and improve their services.",
    thumbnail: "/Project3.png",
    techStack: ["react", "ts"],
    gradient: "#8A2BE2, rgb(13, 1, 60)",
    github: "https://github.com/RockyPacks/Sentiment-Analysis.git",
    live: "https://sentiment-analysis-two-puce.vercel.app/",
  },
  {
    title: "Todo App",
    description:
      "A responsive To-Do List web application to help users manage daily tasks efficiently",
    thumbnail: "/Project4.jpg",
    techStack: ["html", "css", "javascript"],
    gradient: "#8A2BE2, rgb(13, 1, 60)",
    descriptionColor: "text-black",
    github: "https://github.com/Tebelelo/TODO_APP.git",
    live: "https://todo-app-yuaa.onrender.com/",
  },
  {
    title: "Practice Exam Generator",
    description:
      "Developed a web application that allows users to create, customize, and manage exams with various question types.",
    thumbnail: "/Project5.jpg",
    techStack: ["html", "css", "javascript", "node", "gemini"],
    gradient: "#8A2BE2, rgb(13, 1, 60)",
    descriptionColor: "text-black",
    github: "https://github.com/Tebelelo/exam_paper_generator.git",
    live: "https://exam-paper-generator-7i0y.onrender.com",
  },
  {
    title: "Omnifood",
    description:
      "Developed a static, responsive landing page for a fictional nutrition food brand to promote and sell healthy food products.",
    thumbnail: "/Project6.PNG",
    techStack: ["html", "css", "javascript"],
    gradient: "#8A2BE2, rgb(13, 1, 60)",
    descriptionColor: "text-black",
    github: "https://github.com/Tebelelo/Webdevelopment.git",
    live: "https://omnifood-clone-website.netlify.app/",
  },
];

type Project = (typeof projects)[0];

export function Projects() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  return (
    <div id='projects' className={`  ${jetbrainsMono.className} flex flex-col gap-10 items-center justify-center px-4 pb-20 w-full max-w-7xl`}>
      {/* Header */}
      <div className="flex flex-col items-center justify-center gap-2">
        <p className="flex gap-2 text-[#e8390d]">
          Made with <Heart />
        </p>
        <h1 className="text-4xl md:text-6xl text-center font-bold">
          My Projects
        </h1>
      </div>

      {/* Cards */}
      <div className={`${jetbrainsMono.className} grid w-full grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-3`}>
        {projects.map((project, index) => (
          <ProjectCard
            key={index}
            {...project}
            onClick={() => setSelectedProject(project)}
          />
        ))}
      </div>

      {/* Modal */}
      {selectedProject && (
        <ProjectModal
          {...selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      )}
    </div>
  );
}
