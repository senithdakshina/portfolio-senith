import React from 'react'
import { ThemeToggle } from '../components/ThemeToggle';
import { StarBackground } from '../components/StarBackground';
import { Navbar } from '../components/Navbar';
import { Herosection } from '../components/Herosection';
import { AboutMe } from '../components/AboutMe';
import { SkillSection } from '../components/SkillSection';
import { ProjectSection } from '../components/ProjectSection';
import { ContactSection } from '../components/ContactSection';
import { Footer } from '../components/Footer';

export const Home =() =>{
    return <div className='min-h-screen bg-background text-foreground overflow-x-hidden'>
       
        <ThemeToggle></ThemeToggle>
        <StarBackground></StarBackground>
        <Navbar></Navbar>

        <main>
            
            <Herosection></Herosection>
            <AboutMe></AboutMe>
            <SkillSection></SkillSection>
            <ProjectSection></ProjectSection>
            <ContactSection></ContactSection>
        </main>
        <Footer></Footer>
        </div>;
};