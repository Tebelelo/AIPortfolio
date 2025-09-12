'use client';

import React from 'react';
import { jetbrainsMono } from '@/app/font';
import { User, Briefcase, Target } from 'lucide-react';

export function About() {
    return (
        <div id="about" className="w-full max-w-5xl flex flex-col items-center justify-center px-6 py-20 sm:min-h-screen">
            <h2 className="text-4xl sm:text-5xl font-bold mb-12 text-center">
                About <span className="text-[#e8390d]">Me</span>
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full">
                {/* Personal Branding Statement */}
                <div className="bg-background/50 dark:bg-zinc-900/50 border border-border rounded-xl p-6 flex flex-col items-center text-center hover:border-[#e8390d] transition-all duration-300 transform hover:-translate-y-2 shadow-md hover:shadow-lg dark:shadow-none">
                    <div className="flex items-center justify-center bg-[#e8390d]/10 text-[#e8390d] p-4 rounded-full mb-4">
                        <User size={28} />
                    </div>
                    <h3 className="text-xl font-semibold mb-3">Personal Statement</h3>
                    <p className={`text-sm text-foreground/80 text-center leading-relaxed ${jetbrainsMono.className}`}>
                        A motivated Full-Stack Developer specializing in AI/ML. I bridge the gap between complex data and intuitive user experiences, building intelligent, data-driven applications.
                    </p>
                </div>

                {/* Professional Biography */}
                <div className="bg-background/50 dark:bg-zinc-900/50 border border-border rounded-xl p-6 flex flex-col items-center text-center hover:border-[#e8390d] transition-all duration-300 transform hover:-translate-y-2 shadow-md hover:shadow-lg dark:shadow-none">
                    <div className="flex items-center justify-center bg-[#e8390d]/10 text-[#e8390d] p-4 rounded-full mb-4">
                        <Briefcase size={28} />
                    </div>
                    <h3 className="text-xl font-semibold mb-3">Professional Biography</h3>
                    <p className={`text-sm text-foreground/80 text-center leading-relaxed ${jetbrainsMono.className}`}>
                        With a strong foundation in computer science, I have hands-on experience with the MERN stack, Python, and data science libraries, creating responsive UIs and implementing ML models.
                    </p>
                </div>

                {/* Career Objectives */}
                <div className="bg-background/50 dark:bg-zinc-900/50 border border-border rounded-xl p-6 flex flex-col items-center text-center hover:border-[#e8390d] transition-all duration-300 transform hover:-translate-y-2 shadow-md hover:shadow-lg dark:shadow-none">
                    <div className="flex items-center justify-center bg-[#e8390d]/10 text-[#e8390d] p-4 rounded-full mb-4">
                        <Target size={28} />
                    </div>
                    <h3 className="text-xl font-semibold mb-3">Career Objectives</h3>
                    <p className={`text-sm text-foreground/80 text-center leading-relaxed ${jetbrainsMono.className}`}>
                        Seeking a role to apply my skills in software engineering and AI. I aim to contribute to a forward-thinking team and develop cutting-edge, scalable, and intelligent systems.
                    </p>
                </div>
            </div>
        </div>
    );
}
