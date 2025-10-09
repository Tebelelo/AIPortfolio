import Image from "next/image";
import React, { useEffect, useState } from "react";
import { techIconMap } from "./navPages/Projects";

interface ProjectCardProps {
    title: string;
    description: string;
    thumbnail: string;
    techStack: string[];
    gradient: string;
    descriptionColor?: string;
    buttonTextColor?: string;
    onClick?: () => void;
}

export default function ProjectCard({
    title,
    description,
    thumbnail,
    techStack,
    gradient,
    descriptionColor = "text-white/90", // Default color
    buttonTextColor = "text-white", // Default color
    onClick,
}: ProjectCardProps) {
    const [isDarkMode, setIsDarkMode] = useState(false);

    useEffect(() => {
        if (typeof window !== "undefined") {
            setIsDarkMode(window.matchMedia("(prefers-color-scheme: dark)").matches);
        }
    }, []);

    const lightShadow = {
        boxShadow: `
      rgba(0, 0, 0, 0.5) 0px 15px 25px,
      rgba(0, 0, 0, 0.35) 0px 10px 15px,
      rgba(0, 0, 0, 0.25) 0px 4px 6px
    `,
    };

    const darkShadow = {
        boxShadow: `
      rgba(200, 200, 200, 0.2) 2px 2px 6px,
      rgba(160, 160, 160, 0.15) 0px 6px 10px
    `,
    };

    return (
        <div
            onClick={onClick}
            className="relative cursor-pointer border-[10px] dark:border-slate-900 rounded-xl overflow-hidden group transition-all duration-300 h-[400px] flex flex-col"
            style={{
                ...(isDarkMode ? lightShadow : darkShadow),
            }}
        >
            {/* Background Image */}
            <Image
                src={thumbnail}
                alt={title}
                layout="fill"
                objectFit="cover"
                className="absolute inset-0 z-0 transition-all duration-500 group-hover:scale-110 group-hover:blur-sm"
            />
            {/* Gradient Overlay for text readability */}
            <div className="absolute inset-0 z-10 bg-gradient-to-b from-black/60 via-transparent to-black/80" />

            {/* Main content */}
            <div className="relative z-20 flex flex-col flex-grow p-6 justify-between">
                {/* Top part: Title and Description */}
                <div className="text-white">
                    <h2 className="text-xl md:text-2xl font-bold">{title}</h2>
                    <p className={`mt-2 text-sm md:text-base ${descriptionColor} font-semibold drop-shadow-md opacity-0 transform -translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 delay-100`}>
                        {description}
                    </p>
                    {/* "View Project" button appears on hover */}
                    <div className="mt-4 opacity-0 transform -translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 delay-200">
                        <div className={`inline-block px-4 py-2 bg-white/10 backdrop-blur-md border border-white/20 rounded-lg ${buttonTextColor} font-semibold text-sm`}>
                            View Project
                        </div>
                    </div>
                </div>

                {/* Bottom part: Tech stack */}
                <div className="mt-auto">
                    <div className="flex justify-end transition-all duration-500">
                        {techStack.map((tech, index) => (
                            <div
                                key={index}
                                className={`w-12 h-12 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 flex items-center justify-center text-[24px] sm:text-[28px] shadow-md transition-all duration-500
            -ml-4 group-hover:ml-0`}
                                style={{ zIndex: techStack.length - index }}
                            >
                                {techIconMap[tech] || null}
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}
