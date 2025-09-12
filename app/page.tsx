'use client';
import {Home} from "@/components/navPages/Home"
import {About} from "@/components/navPages/About";
import { Projects } from '@/components/navPages/Projects';
import Contact from '@/components/navPages/Contact';
import SkillsSection from "@/components/navPages/Skills";
import Head from 'next/head';
import Footer from "@/components/Footer";


export default function HomePage() {
  return (
  
    <main className={`flex flex-col items-center justify-center scroll-smooth`}>
      <Home/>
      <About/>
      <Projects/>
      <SkillsSection/>
      <Contact/>
      <Footer/>
    </main>
    
  );
}
