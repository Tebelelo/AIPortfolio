'use client';

import React, { useState } from 'react';
import Lottie from 'lottie-react';
import Typewriter from 'typewriter-effect';
import scrollDownAnimation from '@/public/scroll-down.json';
import { jetbrainsMono } from '@/app/font';
import Image from 'next/image';
import AyushImg from "@/public/grad2.png";
import { MapPin } from 'lucide-react';
import Socials from '../Socials';
import { InteractiveHoverButton } from '../ui/interactive-hover-button';
import { useReducedMotion } from 'framer-motion';

export function Home() {
    const [isHandHovered, setIsHandHovered] = useState(false);
    const [isImageHovered, setIsImageHovered] = useState(false);
    const shouldReduceMotion = useReducedMotion();

    const handleViewResume = () => {
        window.open('/resume.pdf', '_blank');
    };

    return (
        <div id='home' className="w-full max-w-4xl flex flex-col items-center justify-center px-6 pt-20 pb-65 sm:min-h-screen relative">
            <div className="flex flex-col-reverse md:flex-row md:items-center justify-between gap-10 w-full">
                <div className="flex-1 md:max-w-lg">
                    <div className="flex items-center gap-3">
                        <h1 className="text-4xl sm:text-6xl font-bold ">
                            Hi, I&apos;m <span className='text-[#e8390d]'>Tebelelo</span>
                        </h1>
                        <span
                            className="text-4xl sm:text-5xl"
                            onMouseEnter={() => setIsHandHovered(true)}
                            onMouseLeave={() => setIsHandHovered(false)}
                            style={{
                                transformOrigin: '70% 70%',
                                animation: isHandHovered && !shouldReduceMotion ? 'wave 1.2s ease-in-out infinite' : 'none',
                                display: 'inline-block',
                            }}
                        >
                            👋
                        </span>
                    </div>
                    <p className={` ${jetbrainsMono.className} flex items-center mt-4 text-[#dd431d] gap-2 text-sm sm:text-lg text-right`}> <MapPin /> Gauteng,Johannesburg,South Africa</p>

                    <span className="tailwind-wrapper mt-4 text-lg sm:text-3xl font-medium block text-left text-zinc-800 dark:text-zinc-200">
                        <Typewriter
                            options={{
                                strings: ['Full-Stack Developer'],
                                autoStart: true,
                                loop: true,
                                delay: 20,
                                deleteSpeed: 5,
                            }}
                        />
                    </span>

                    <div className="flex flex-wrap gap-4 items-center">
                        <Socials />
                        <InteractiveHoverButton onClick={handleViewResume} />
                    </div>
                </div>

                {/* Image Section */}
                <div
                    className="w-64 h-64 sm:w-80 sm:h-80 relative shrink-0 rounded-full overflow-hidden transition-all duration-300"
                    onMouseEnter={() => setIsImageHovered(true)}
                    onMouseLeave={() => setIsImageHovered(false)}
                >
                    <Image
                        // NOTE: You are using the same image for the base and hover states.
                        // You might want to use a different image for `isImageHovered ? AyushImg2 : AyushImg`
                        src={isImageHovered ? AyushImg : AyushImg}
                        alt="Ayush"
                        fill
                        className="object-contain rounded-full transition-opacity duration-300"
                    />
                </div>


            </div>

            {/* Scroll Down Animation */}
            <div className="absolute bottom-8 left-1/2 -translate-x-1/2 w-14 z-10 hidden md:block">
                <Lottie animationData={scrollDownAnimation} loop />
            </div>
        </div>
    );
}
