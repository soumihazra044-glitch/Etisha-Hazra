import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Education } from './components/Education';
import { Skills } from './components/Skills';
import { Projects } from './components/Projects';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { ProjectModal } from './components/ProjectModal';
import { ResumeModal } from './components/ResumeModal';
import { ProjectItem } from './types';

export default function App() {
  const [darkMode, setDarkMode] = useState<boolean>(() => {
    if (typeof window !== 'undefined') {
      const savedTheme = localStorage.getItem('theme');
      if (savedTheme) return savedTheme === 'dark';
      return window.matchMedia('(prefers-color-scheme: dark)').matches;
    }
    return false;
  });

  const [selectedProject, setSelectedProject] = useState<ProjectItem | null>(null);
  const [resumeOpen, setResumeOpen] = useState(false);

  useEffect(() => {
    const root = document.documentElement;
    if (darkMode) {
      root.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      root.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [darkMode]);

  return (
    <div className="min-h-screen bg-[#f8fafc] text-slate-900 dark:bg-[#0d0e1a] dark:text-slate-100 transition-colors duration-300 selection:bg-blue-500 selection:text-white font-sans relative overflow-x-hidden">
      {/* Frosted Glass Ambient Glowing Orbs Background */}
      <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
        {/* Top-left purple glow */}
        <div className="absolute -top-32 -left-32 w-[550px] h-[550px] bg-purple-500/20 dark:bg-purple-600/25 rounded-full blur-[140px] animate-glow" />
        {/* Bottom-right blue glow */}
        <div className="absolute top-1/3 -right-32 w-[600px] h-[600px] bg-blue-500/20 dark:bg-blue-600/25 rounded-full blur-[160px] animate-glow" style={{ animationDelay: '2s' }} />
        {/* Bottom-left indigo/emerald glow */}
        <div className="absolute -bottom-32 left-1/4 w-[500px] h-[500px] bg-indigo-500/15 dark:bg-indigo-600/20 rounded-full blur-[140px] animate-glow" style={{ animationDelay: '4s' }} />
      </div>

      <div className="relative z-10">
        {/* Header Navigation */}
        <Navbar 
          darkMode={darkMode} 
          setDarkMode={setDarkMode} 
          onOpenResume={() => setResumeOpen(true)} 
        />

        {/* Main Content Sections */}
        <main className="relative">
          {/* 1. Hero Section */}
          <Hero onOpenResume={() => setResumeOpen(true)} />

          {/* 2. About Me Section */}
          <About />

          {/* 3. Education Timeline / Section */}
          <Education />

          {/* 4. Skills & Code Concepts Section */}
          <Skills />

          {/* 5. Projects & Interactive Showcase Section */}
          <Projects onSelectProject={(project) => setSelectedProject(project)} />

          {/* 6. Contact Section */}
          <Contact />
        </main>

        {/* 7. Footer */}
        <Footer />
      </div>

      {/* Interactive Project Preview & Code Modal */}
      <ProjectModal 
        project={selectedProject} 
        onClose={() => setSelectedProject(null)} 
      />

      {/* Academic CV & Profile Modal */}
      <ResumeModal 
        isOpen={resumeOpen} 
        onClose={() => setResumeOpen(false)} 
      />
    </div>
  );
}
