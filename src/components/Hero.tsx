import React from 'react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { 
  ArrowRight, 
  Sparkles, 
  GraduationCap, 
  Code2, 
  Compass, 
  FileText, 
  Github, 
  Linkedin, 
  Mail, 
  ChevronDown,
  BookOpen
} from 'lucide-react';

interface HeroProps {
  onOpenResume: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenResume }) => {
  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section 
      id="home" 
      className="relative min-h-[90vh] flex items-center justify-center pt-28 pb-16 overflow-hidden bg-transparent"
    >
      {/* Background Decorative Frosted Gradients */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[550px] bg-gradient-to-tr from-purple-500/15 via-blue-500/15 to-indigo-500/15 dark:from-purple-600/20 dark:via-blue-600/20 dark:to-indigo-600/20 rounded-full blur-[130px] pointer-events-none -z-10" />
      <div className="absolute top-20 right-10 w-72 h-72 bg-blue-400/10 dark:bg-blue-600/15 rounded-full blur-[100px] pointer-events-none -z-10" />
      <div className="absolute bottom-10 left-10 w-72 h-72 bg-purple-400/10 dark:bg-purple-600/15 rounded-full blur-[100px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Hero Content */}
          <div className="lg:col-span-7 text-center lg:text-left space-y-6">
            
            {/* Monospace Code Pill Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-500/10 dark:bg-blue-500/15 text-blue-600 dark:text-blue-400 border border-blue-500/20 backdrop-blur-md shadow-sm text-xs font-mono font-medium">
              <span className="w-2 h-2 rounded-full bg-blue-500 animate-ping" />
              <span className="w-2 h-2 rounded-full bg-blue-500 absolute" />
              <span className="ml-1">&lt;hello world /&gt;</span>
              <span className="text-slate-400 dark:text-slate-500">|</span>
              <span className="text-slate-600 dark:text-slate-300 font-sans">BCA 2nd Year • SVU</span>
            </div>

            {/* Main Hero Headings */}
            <div className="space-y-3">
              <h1 
                id="hero-title"
                className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-slate-900 dark:text-white leading-[1.15]"
              >
                I'm{' '}
                <span className="bg-gradient-to-r from-blue-500 via-indigo-400 to-purple-500 dark:from-blue-400 dark:via-indigo-300 dark:to-purple-400 bg-clip-text text-transparent">
                  {PERSONAL_INFO.name}
                </span>
              </h1>
              
              <p 
                id="hero-tagline"
                className="text-lg sm:text-xl font-light italic text-indigo-600 dark:text-slate-300 tracking-wide"
              >
                {PERSONAL_INFO.tagline}
              </p>
            </div>

            {/* Professional Summary Description */}
            <p 
              id="hero-description"
              className="text-base sm:text-lg text-slate-600 dark:text-slate-300 leading-relaxed max-w-2xl mx-auto lg:mx-0 font-light"
            >
              Welcome to my portfolio! I am an enthusiastic computer applications student eager to learn modern programming, explore web development, and build software solutions for the future.
            </p>

            {/* Call To Action Buttons */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-3.5 pt-2">
              <button
                id="hero-view-portfolio-btn"
                onClick={() => scrollToSection('projects')}
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-semibold text-white bg-blue-600 hover:bg-blue-500 active:bg-blue-700 shadow-lg shadow-blue-600/25 hover:shadow-blue-600/40 transition-all transform hover:-translate-y-0.5"
              >
                <span>View Portfolio</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <button
                id="hero-contact-btn"
                onClick={() => scrollToSection('contact')}
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-semibold text-slate-800 dark:text-white bg-white/60 dark:bg-white/10 hover:bg-white/80 dark:hover:bg-white/20 border border-slate-200/80 dark:border-white/10 backdrop-blur-md shadow-sm hover:shadow transition-all transform hover:-translate-y-0.5"
              >
                <span>Contact Me</span>
                <Mail className="w-4 h-4 text-blue-500 dark:text-blue-400" />
              </button>

              <button
                id="hero-cv-btn"
                onClick={onOpenResume}
                className="inline-flex items-center gap-2 px-4 py-3 rounded-xl font-medium text-purple-600 dark:text-purple-300 bg-purple-500/10 hover:bg-purple-500/20 border border-purple-500/20 backdrop-blur-md transition-all text-sm"
              >
                <FileText className="w-4 h-4 text-purple-500 dark:text-purple-400" />
                <span>Academic Profile & CV</span>
              </button>
            </div>

            {/* Quick Social / Connect links */}
            <div className="pt-2 flex items-center justify-center lg:justify-start gap-4 text-slate-500 dark:text-slate-400">
              <span className="text-xs font-semibold uppercase tracking-wider text-slate-400 dark:text-slate-500">Connect:</span>
              <a 
                href={PERSONAL_INFO.github} 
                target="_blank" 
                rel="noreferrer"
                aria-label="GitHub Profile"
                className="p-2.5 rounded-xl bg-white/60 dark:bg-white/5 border border-slate-200/80 dark:border-white/10 backdrop-blur-md hover:text-blue-500 dark:hover:text-blue-400 hover:border-blue-400/40 dark:hover:border-white/30 transition-all shadow-sm"
              >
                <Github className="w-4 h-4" />
              </a>
              <a 
                href={PERSONAL_INFO.linkedin} 
                target="_blank" 
                rel="noreferrer"
                aria-label="LinkedIn Profile"
                className="p-2.5 rounded-xl bg-white/60 dark:bg-white/5 border border-slate-200/80 dark:border-white/10 backdrop-blur-md hover:text-blue-500 dark:hover:text-blue-400 hover:border-blue-400/40 dark:hover:border-white/30 transition-all shadow-sm"
              >
                <Linkedin className="w-4 h-4" />
              </a>
              <a 
                href={`mailto:${PERSONAL_INFO.email}`}
                aria-label="Send Email"
                className="p-2.5 rounded-xl bg-white/60 dark:bg-white/5 border border-slate-200/80 dark:border-white/10 backdrop-blur-md hover:text-blue-500 dark:hover:text-blue-400 hover:border-blue-400/40 dark:hover:border-white/30 transition-all shadow-sm"
              >
                <Mail className="w-4 h-4" />
              </a>
            </div>

          </div>

          {/* Right Hero Visual Card */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="relative w-full max-w-md">
              
              {/* Main Profile Showcase Card */}
              <div 
                id="hero-profile-card"
                className="relative bg-white/70 dark:bg-white/[0.05] backdrop-blur-xl rounded-3xl p-6 sm:p-8 border border-slate-200/70 dark:border-white/10 shadow-2xl shadow-purple-900/10 dark:shadow-black/40 space-y-6"
              >
                {/* Top Profile Header */}
                <div className="flex items-center gap-4">
                  <div className="relative">
                    <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-blue-400 via-indigo-500 to-purple-600 p-0.5 shadow-lg shadow-purple-500/25">
                      <div className="w-full h-full rounded-[14px] bg-slate-900/90 backdrop-blur-sm flex items-center justify-center text-white font-bold text-2xl">
                        EH
                      </div>
                    </div>
                    <div className="absolute -bottom-1 -right-1 w-6 h-6 rounded-full bg-emerald-500 border-2 border-white dark:border-[#0d0e1a] flex items-center justify-center" title="Active Student">
                      <div className="w-2 h-2 rounded-full bg-white" />
                    </div>
                  </div>
                  <div>
                    <h2 className="text-xl font-bold text-slate-900 dark:text-white">
                      {PERSONAL_INFO.name}
                    </h2>
                    <p className="text-xs font-semibold text-blue-600 dark:text-blue-400">
                      BCA Undergraduate
                    </p>
                    <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">
                      Swami Vivekananda University
                    </p>
                  </div>
                </div>

                {/* Quick Info Grid */}
                <div className="grid grid-cols-2 gap-3 pt-2">
                  <div className="p-3.5 rounded-2xl bg-white/60 dark:bg-white/[0.04] border border-slate-200/60 dark:border-white/10 backdrop-blur-md">
                    <div className="flex items-center gap-2 text-blue-600 dark:text-blue-400 mb-1">
                      <GraduationCap className="w-4 h-4" />
                      <span className="text-xs font-semibold">Degree</span>
                    </div>
                    <p className="text-sm font-bold text-slate-800 dark:text-slate-200">BCA 2nd Year</p>
                    <p className="text-[11px] text-slate-500 dark:text-slate-400">Swami Vivekananda Univ.</p>
                  </div>

                  <div className="p-3.5 rounded-2xl bg-white/60 dark:bg-white/[0.04] border border-slate-200/60 dark:border-white/10 backdrop-blur-md">
                    <div className="flex items-center gap-2 text-purple-600 dark:text-purple-400 mb-1">
                      <BookOpen className="w-4 h-4" />
                      <span className="text-xs font-semibold">Schooling</span>
                    </div>
                    <p className="text-sm font-bold text-slate-800 dark:text-slate-200">HS Completed</p>
                    <p className="text-[11px] text-slate-500 dark:text-slate-400">Rajkumari Girls' (2025)</p>
                  </div>
                </div>

                {/* Learning Progress Highlights */}
                <div className="space-y-2 pt-1">
                  <div className="flex items-center justify-between text-xs">
                    <span className="font-semibold text-slate-700 dark:text-slate-300 flex items-center gap-1.5">
                      <Code2 className="w-3.5 h-3.5 text-purple-400" />
                      Web & Programming Focus
                    </span>
                    <span className="text-blue-600 dark:text-blue-400 font-mono text-[11px]">C • HTML • CSS • JS</span>
                  </div>
                  <div className="w-full bg-slate-200/60 dark:bg-white/10 rounded-full h-2 overflow-hidden backdrop-blur-sm">
                    <div className="bg-gradient-to-r from-blue-500 to-purple-500 h-full rounded-full w-[85%]" />
                  </div>
                </div>

                {/* Floating pill badge */}
                <div className="p-3 rounded-2xl bg-gradient-to-r from-blue-500/10 via-indigo-500/10 to-purple-500/10 border border-blue-500/20 dark:border-white/10 flex items-center justify-between backdrop-blur-md">
                  <div className="flex items-center gap-2">
                    <Sparkles className="w-4 h-4 text-purple-400" />
                    <span className="text-xs font-medium text-slate-700 dark:text-slate-300">
                      Goal: Building a Career in IT
                    </span>
                  </div>
                  <span className="text-[11px] font-bold px-2 py-0.5 rounded-full bg-purple-500/20 text-purple-600 dark:text-purple-300 border border-purple-500/30">
                    Active
                  </span>
                </div>

              </div>

              {/* Decorative Floating Badges */}
              <div className="hidden sm:flex absolute -top-4 -right-4 bg-white/80 dark:bg-slate-900/80 backdrop-blur-xl rounded-2xl px-3.5 py-2 shadow-xl border border-slate-200/80 dark:border-white/10 items-center gap-2 animate-float">
                <span className="text-xl">💻</span>
                <div className="text-left">
                  <p className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">Learning Focus</p>
                  <p className="text-xs font-bold text-slate-800 dark:text-slate-200">Tech & Web Dev</p>
                </div>
              </div>

              <div className="hidden sm:flex absolute -bottom-4 -left-4 bg-white/80 dark:bg-slate-900/80 backdrop-blur-xl rounded-2xl px-3.5 py-2 shadow-xl border border-slate-200/80 dark:border-white/10 items-center gap-2">
                <Compass className="w-5 h-5 text-blue-500" />
                <div className="text-left">
                  <p className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">Location</p>
                  <p className="text-xs font-bold text-slate-800 dark:text-slate-200">{PERSONAL_INFO.location}</p>
                </div>
              </div>

            </div>
          </div>

        </div>

        {/* Scroll Indicator */}
        <div className="pt-12 text-center flex flex-col items-center">
          <button 
            onClick={() => scrollToSection('about')}
            aria-label="Scroll to About section"
            className="inline-flex flex-col items-center text-xs font-semibold text-slate-400 hover:text-blue-500 dark:hover:text-blue-400 transition-colors"
          >
            <span>Explore My Journey</span>
            <ChevronDown className="w-4 h-4 animate-bounce mt-1" />
          </button>
        </div>

      </div>
    </section>
  );
};
