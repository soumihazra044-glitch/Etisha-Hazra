import React from 'react';
import { EDUCATION_LIST } from '../data/portfolioData';
import { 
  GraduationCap, 
  School, 
  Calendar, 
  CheckCircle, 
  BookOpen, 
  Building2, 
  Sparkles,
  Award
} from 'lucide-react';

export const Education: React.FC = () => {
  return (
    <section id="education" className="py-20 bg-transparent relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Title */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-emerald-500/10 dark:bg-emerald-500/15 text-emerald-600 dark:text-emerald-400 border border-emerald-500/20 backdrop-blur-md text-xs font-bold tracking-widest uppercase">
            <GraduationCap className="w-3.5 h-3.5" />
            <span>Academic Journey</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Education & Qualifications
          </h2>
          <p className="text-base text-slate-600 dark:text-slate-400">
            A clear timeline of my formal academic qualifications, university studies, and foundational schooling.
          </p>
        </div>

        {/* Education Timeline / Cards Layout */}
        <div className="max-w-4xl mx-auto relative">
          
          {/* Vertical Connecting Line (desktop) */}
          <div className="hidden md:block absolute left-8 top-8 bottom-8 w-0.5 bg-gradient-to-b from-blue-500 via-purple-500 to-emerald-500 opacity-40" />

          <div className="space-y-8">
            {EDUCATION_LIST.map((edu, index) => {
              const isFirst = index === 0;

              return (
                <div 
                  key={edu.id}
                  id={`education-card-${edu.id}`}
                  className="relative md:pl-20 group"
                >
                  {/* Timeline Node Icon (Desktop) */}
                  <div className="hidden md:flex absolute left-4 -translate-x-1/2 top-6 w-10 h-10 rounded-2xl bg-white/80 dark:bg-slate-900/80 backdrop-blur-xl border border-blue-500/30 dark:border-white/20 items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                    {edu.iconType === 'university' ? (
                      <GraduationCap className="w-4 h-4 text-blue-500 dark:text-blue-400" />
                    ) : (
                      <School className="w-4 h-4 text-purple-500 dark:text-purple-400" />
                    )}
                  </div>

                  {/* Main Education Card */}
                  <div className="bg-white/70 dark:bg-white/[0.05] backdrop-blur-xl rounded-3xl p-6 sm:p-8 border border-slate-200/70 dark:border-white/10 shadow-xl hover:border-blue-500/30 dark:hover:border-white/20 transition-all">
                    
                    {/* Top Row: Degree & Status */}
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-slate-200/60 dark:border-white/10 pb-5">
                      <div className="space-y-1">
                        <div className="flex items-center gap-2">
                          <span className="px-3 py-1 rounded-lg text-xs font-semibold bg-blue-500/10 border border-blue-500/20 text-blue-600 dark:text-blue-300">
                            {edu.badge}
                          </span>
                          {isFirst && (
                            <span className="flex items-center gap-1 px-3 py-1 rounded-lg text-xs font-semibold bg-emerald-500/10 border border-emerald-500/20 text-emerald-600 dark:text-emerald-300">
                              <Sparkles className="w-3 h-3" /> Current Study
                            </span>
                          )}
                        </div>
                        <h3 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white">
                          {edu.degree}
                        </h3>
                      </div>

                      {/* Timeline Duration Pill */}
                      <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl bg-white/60 dark:bg-white/[0.05] text-slate-700 dark:text-slate-300 text-xs font-semibold self-start sm:self-center border border-slate-200/80 dark:border-white/10 backdrop-blur-md">
                        <Calendar className="w-3.5 h-3.5 text-indigo-500 dark:text-indigo-400" />
                        <span>{edu.duration}</span>
                      </div>
                    </div>

                    {/* Middle Row: Institution & Description */}
                    <div className="py-4 space-y-3">
                      <div className="flex items-center gap-2 text-indigo-600 dark:text-indigo-400 font-semibold text-base">
                        <Building2 className="w-4 h-4" />
                        <span>{edu.institution}</span>
                      </div>
                      
                      <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed font-light">
                        {edu.description}
                      </p>
                    </div>

                    {/* Highlights List */}
                    <div className="pt-3 border-t border-slate-200/60 dark:border-white/10">
                      <h4 className="text-xs font-bold uppercase tracking-widest text-slate-400 dark:text-slate-400 mb-3 flex items-center gap-1.5">
                        <BookOpen className="w-3.5 h-3.5" />
                        Key Learnings & Academic Highlights
                      </h4>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                        {edu.highlights.map((item, idx) => (
                          <div key={idx} className="flex items-start gap-2 text-xs sm:text-sm text-slate-700 dark:text-slate-300">
                            <CheckCircle className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                            <span>{item}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                  </div>
                </div>
              );
            })}
          </div>

          {/* Academic Values Banner */}
          <div className="mt-12 bg-gradient-to-r from-blue-600/80 via-indigo-600/80 to-purple-600/80 backdrop-blur-xl border border-white/20 rounded-3xl p-6 text-white shadow-2xl flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center shrink-0">
                <Award className="w-6 h-6 text-white" />
              </div>
              <div>
                <h4 className="font-bold text-base">Committed to Continuous Learning</h4>
                <p className="text-xs text-blue-100/90 font-light">
                  Actively combining university curriculum at SVU with self-paced programming and web development projects.
                </p>
              </div>
            </div>
            <a
              href="#skills"
              className="px-5 py-2.5 bg-white/20 hover:bg-white/30 text-white border border-white/30 text-xs font-bold rounded-xl shadow-md transition-all shrink-0 backdrop-blur-md"
            >
              Explore Skills Below ↓
            </a>
          </div>

        </div>

      </div>
    </section>
  );
};
