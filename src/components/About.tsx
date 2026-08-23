import React from 'react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { 
  User, 
  GraduationCap, 
  Code, 
  Sparkles, 
  Target, 
  Rocket, 
  CheckCircle2,
  BookOpen,
  Laptop
} from 'lucide-react';

export const About: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-transparent relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-blue-500/10 dark:bg-blue-500/15 text-blue-600 dark:text-blue-400 border border-blue-500/20 backdrop-blur-md text-xs font-bold tracking-widest uppercase">
            <User className="w-3.5 h-3.5" />
            <span>About Me</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Get to Know My Story & Aspirations
          </h2>
          <p className="text-base text-slate-600 dark:text-slate-400">
            A passionate BCA student dedicated to mastering computer science foundations and modern web technologies.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Stylized Visual Card & Stats */}
          <div className="lg:col-span-5 space-y-6">
            <div className="relative rounded-3xl bg-gradient-to-br from-blue-500/40 via-indigo-500/30 to-purple-500/40 p-0.5 shadow-2xl backdrop-blur-xl">
              <div className="bg-white/80 dark:bg-slate-900/80 backdrop-blur-2xl rounded-[22px] p-6 sm:p-8 space-y-6 border border-white/40 dark:border-white/10">
                
                <div className="flex items-center justify-between border-b border-slate-200/60 dark:border-white/10 pb-5">
                  <div>
                    <h3 className="text-xl font-bold text-slate-900 dark:text-white">
                      Etisha Hazra
                    </h3>
                    <p className="text-xs text-blue-600 dark:text-blue-400 font-semibold mt-0.5">
                      BCA Student • 2nd Year
                    </p>
                  </div>
                  <div className="w-12 h-12 rounded-2xl bg-blue-500/10 dark:bg-blue-500/20 border border-blue-500/20 flex items-center justify-center text-blue-600 dark:text-blue-400">
                    <Laptop className="w-6 h-6" />
                  </div>
                </div>

                {/* Key Attributes List */}
                <div className="space-y-3.5 text-sm">
                  <div className="flex items-start gap-3">
                    <GraduationCap className="w-4 h-4 text-blue-500 mt-0.5 shrink-0" />
                    <div>
                      <span className="font-semibold text-slate-900 dark:text-slate-200">University: </span>
                      <span className="text-slate-600 dark:text-slate-400">Swami Vivekananda University</span>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <BookOpen className="w-4 h-4 text-purple-500 mt-0.5 shrink-0" />
                    <div>
                      <span className="font-semibold text-slate-900 dark:text-slate-200">School: </span>
                      <span className="text-slate-600 dark:text-slate-400">Rajkumari Memorial Girls' HS (2025)</span>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <Code className="w-4 h-4 text-indigo-500 mt-0.5 shrink-0" />
                    <div>
                      <span className="font-semibold text-slate-900 dark:text-slate-200">Core Focus: </span>
                      <span className="text-slate-600 dark:text-slate-400">C Programming, HTML, CSS, JavaScript</span>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <Target className="w-4 h-4 text-emerald-500 mt-0.5 shrink-0" />
                    <div>
                      <span className="font-semibold text-slate-900 dark:text-slate-200">Career Goal: </span>
                      <span className="text-slate-600 dark:text-slate-400">Professional IT & Software Developer</span>
                    </div>
                  </div>
                </div>

                {/* Motivational Quote pill */}
                <div className="p-4 rounded-2xl bg-white/60 dark:bg-white/[0.04] border border-slate-200/60 dark:border-white/10 backdrop-blur-md">
                  <p className="text-xs italic text-slate-600 dark:text-slate-300 leading-relaxed">
                    "Every great coder began with curiosity and a willingness to learn one concept at a time."
                  </p>
                </div>

              </div>
            </div>

            {/* Metric Pills */}
            <div className="grid grid-cols-2 gap-4">
              <div className="p-4 rounded-2xl bg-white/70 dark:bg-white/[0.05] backdrop-blur-xl border border-blue-500/20 text-center shadow-lg">
                <span className="block text-2xl font-extrabold bg-gradient-to-r from-blue-500 to-indigo-500 bg-clip-text text-transparent">2nd Year</span>
                <span className="text-xs font-medium text-slate-600 dark:text-slate-400">BCA Undergraduate</span>
              </div>
              <div className="p-4 rounded-2xl bg-white/70 dark:bg-white/[0.05] backdrop-blur-xl border border-purple-500/20 text-center shadow-lg">
                <span className="block text-2xl font-extrabold bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent">2025</span>
                <span className="text-xs font-medium text-slate-600 dark:text-slate-400">HS Completed</span>
              </div>
            </div>

          </div>

          {/* Right Column: Bio Paragraph & Pillars */}
          <div className="lg:col-span-7 space-y-6">
            
            {/* Primary Bio Box */}
            <div className="bg-white/70 dark:bg-white/[0.05] backdrop-blur-xl rounded-3xl p-6 sm:p-8 border border-slate-200/70 dark:border-white/10 shadow-xl space-y-4">
              <h3 className="text-xs font-bold uppercase tracking-widest text-blue-500 dark:text-blue-400 flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-blue-500" />
                Professional Summary & Bio
              </h3>
              
              <blockquote className="text-base sm:text-lg text-slate-700 dark:text-slate-200 leading-relaxed font-light italic">
                "{PERSONAL_INFO.bio}"
              </blockquote>
            </div>

            {/* Three Pillars Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2">
              
              <div className="p-5 rounded-2xl bg-white/70 dark:bg-white/[0.05] backdrop-blur-xl border border-slate-200/70 dark:border-white/10 shadow-sm hover:border-blue-500/40 dark:hover:border-white/30 transition-all">
                <div className="w-10 h-10 rounded-xl bg-blue-500/10 dark:bg-blue-500/20 border border-blue-500/20 text-blue-500 dark:text-blue-400 flex items-center justify-center mb-3">
                  <GraduationCap className="w-5 h-5" />
                </div>
                <h4 className="font-bold text-sm text-slate-900 dark:text-white mb-1">Academic Drive</h4>
                <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                  Pursuing strong foundational depth in data structures, C, and computing logic.
                </p>
              </div>

              <div className="p-5 rounded-2xl bg-white/70 dark:bg-white/[0.05] backdrop-blur-xl border border-slate-200/70 dark:border-white/10 shadow-sm hover:border-indigo-500/40 dark:hover:border-white/30 transition-all">
                <div className="w-10 h-10 rounded-xl bg-indigo-500/10 dark:bg-indigo-500/20 border border-indigo-500/20 text-indigo-500 dark:text-indigo-400 flex items-center justify-center mb-3">
                  <Code className="w-5 h-5" />
                </div>
                <h4 className="font-bold text-sm text-slate-900 dark:text-white mb-1">Hands-on Web Dev</h4>
                <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                  Building responsive layouts with HTML5, modern CSS3, and JavaScript interactivity.
                </p>
              </div>

              <div className="p-5 rounded-2xl bg-white/70 dark:bg-white/[0.05] backdrop-blur-xl border border-slate-200/70 dark:border-white/10 shadow-sm hover:border-purple-500/40 dark:hover:border-white/30 transition-all">
                <div className="w-10 h-10 rounded-xl bg-purple-500/10 dark:bg-purple-500/20 border border-purple-500/20 text-purple-500 dark:text-purple-400 flex items-center justify-center mb-3">
                  <Rocket className="w-5 h-5" />
                </div>
                <h4 className="font-bold text-sm text-slate-900 dark:text-white mb-1">Future IT Career</h4>
                <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                  Committed to continual learning and stepping forward into professional software roles.
                </p>
              </div>

            </div>

            {/* Quick Interest Tags */}
            <div className="pt-2">
              <span className="text-xs font-bold text-slate-400 dark:text-slate-500 uppercase tracking-widest block mb-2.5">
                Areas of Active Learning & Interest
              </span>
              <div className="flex flex-wrap gap-2">
                {PERSONAL_INFO.interests.map((interest, idx) => (
                  <span 
                    key={idx}
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-white/60 dark:bg-white/[0.05] text-slate-700 dark:text-slate-300 text-xs font-medium border border-slate-200/80 dark:border-white/10 backdrop-blur-md hover:border-blue-400/40 transition-colors"
                  >
                    <CheckCircle2 className="w-3.5 h-3.5 text-blue-500 dark:text-blue-400" />
                    {interest}
                  </span>
                ))}
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
