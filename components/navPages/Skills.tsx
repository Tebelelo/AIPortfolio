"use client";
import { FaReact } from "react-icons/fa6";
import {SiDocker } from "react-icons/si";
import { FaGitAlt, FaNodeJs } from "react-icons/fa";
import { RiCss3Fill, RiHtml5Fill, RiNextjsFill, RiTailwindCssFill,RiJavascriptFill } from "react-icons/ri";
import { SiPython,SiPandas} from "react-icons/si"
import { SiTypescript } from "react-icons/si";
import { SiFirebase } from "react-icons/si";
import SkillCard from "../SkillCard";
import { jetbrainsMono } from "@/app/font";

const skills = [
  {
    name: "HTML 5",
    icon: <RiHtml5Fill />,
    hoverColor: "group-hover:text-orange-500",
  },
  {
    name: "CSS",
    icon: <RiCss3Fill />,
    hoverColor: "group-hover:text-blue-500",
  },
  {
    name: "JavaScript",
    icon: <RiJavascriptFill />,
    hoverColor: "group-hover:text-sky-500",
  },
  {
    name: "React.js",
    icon: <FaReact />,
    hoverColor: "group-hover:text-cyan-300",
  },
  {
    name: "Node.js",
    icon: <FaNodeJs />,
    hoverColor: "group-hover:text-green-500",
  },
  {
    name: "Firebase",
    icon: <SiFirebase />,
    hoverColor: "group-hover:text-orange-400",
  },
  { name: "Git", icon: <FaGitAlt />, hoverColor: "group-hover:text-red-500" },
  {
    name: "Python",
    icon: <SiPython />,
    hoverColor: "group-hover:text-yellow-300",
  },
  {
    name: "Pandas",
    icon: <SiPandas />,
    hoverColor: "group-hover:text-blue-300",
  },
  {
    name: "Docker",
    icon: <SiDocker />,
    hoverColor: "group-hover:text-blue-400",
  },
  {
    name: "Excel",
    icon: (
      <img
        src="https://upload.wikimedia.org/wikipedia/commons/7/73/Microsoft_Excel_2013-2019_logo.svg"
        alt="Excel"
        className="w-6 h-6"
      />
    ),
    hoverColor: "group-hover:text-green-600",
  },
  {
    name: "Power BI",
    icon: (
      <img
        src="https://upload.wikimedia.org/wikipedia/commons/c/cf/New_Power_BI_Logo.svg"
        alt="Power BI"
        className="w-6 h-6"
      />
    ),
    hoverColor: "group-hover:text-yellow-600",
  },
  {
    name: "SQL",
    icon: (
      <img
        src="https://upload.wikimedia.org/wikipedia/commons/8/87/Sql_data_base_with_logo.png"
        alt="SQL"
        className="w-6 h-6 object-contain"
      />
    ),
    hoverColor: "group-hover:text-indigo-500",
  },
];



export default function SkillsSection() {
    return (
        <section id="skills" className={` ${jetbrainsMono.className} flex flex-col gap-10 py-16 px-4`}>
            <div className="flex flex-col items-center justify-center gap-2">
                <h1 className="text-4xl md:text-6xl text-center font-bold">
                    My Skills
                </h1>
            </div>
            <div className="flex flex-wrap max-w-4xl mx-auto gap-6 items-center justify-center">
                {skills.map((skill, index) => (
                    <SkillCard key={index} {...skill} />
                ))}
            </div>
        </section>
    );
}
