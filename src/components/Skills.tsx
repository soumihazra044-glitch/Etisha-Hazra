import React, { useState } from 'react';
import { SKILLS_LIST } from '../data/portfolioData';
import { SkillItem } from '../types';
import { 
  Code2, 
  FileCode2, 
  Palette, 
  Zap, 
  Globe, 
  Terminal, 
  Sparkles, 
  Check, 
  Copy, 
  Layers,
  ChevronRight,
  BookOpen
} from 'lucide-react';

const iconMap: Record<string, React.ReactNode> = {
  Code2: <Code2 className="w-5 h-5" />,
  FileCode2: <FileCode2 className="w-5 h-5" />,
  Palette: <Palette className="w-5 h-5" />,
  Zap: <Zap className="w-5 h-5" />,
  Globe: <Globe className="w-5 h-5" />,
  Terminal: <Terminal className="w-5 h-5" />
};

export const Skills: React.FC = () => {
  const [selectedSkill, setSelectedSkill] = useState<SkillItem>(SKILLS_LIST[0]);
  const [copied, setCopied] = useState(false);
  const [filter, setFilter] = useState<'all' | 'programming' | 'web' | 'fundamentals'>('all');

  const filteredSkills = SKILLS_LIST.filter(skill => {
    if (filter === 'all') return true;
    return skill.category === filter;
  });

  const handleCopyCode = (code: string) => {
    navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="skills" className="py-20 bg-transparent relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-purple-500/10 dark:bg-purple-500/15 text-purple-600 dark:text-purple-400 border border-purple-500/20 backdrop-blur-md text-xs font-bold tracking-widest uppercase">
            <Layers className="w-3.5 h-3.5" />
            <span>Technical Foundation</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Skills & Knowledge Stack
          </h2>
          <p className="text-base text-slate-600 dark:text-slate-400">
            Core programming languages, web technologies, and computational foundations learned during my BCA journey.
          </p>

          {/* Filter Pills */}
          <div className="flex flex-wrap items-center justify-center gap-2 pt-4">
            <button
              onClick={() => setFilter('all')}
              className={`px-4 py-1.5 rounded-full text-xs font-semibold backdrop-blur-md transition-all ${
                filter === 'all'
                  ? 'bg-blue-600 dark:bg-blue-500 text-white shadow-lg shadow-blue-500/30'
                  : 'bg-white/60 dark:bg-white/[0.05] text-slate-600 dark:text-slate-300 border border-slate-200/80 dark:border-white/10 hover:bg-white/80 dark:hover:bg-white/10'
              }`}
            >
              All Skills ({SKILLS_LIST.length})
            </button>
            <button
              onClick={() => setFilter('programming')}
              className={`px-4 py-1.5 rounded-full text-xs font-semibold backdrop-blur-md transition-all ${
                filter === 'programming'
                  ? 'bg-blue-600 dark:bg-blue-500 text-white shadow-lg shadow-blue-500/30'
                  : 'bg-white/60 dark:bg-white/[0.05] text-slate-600 dark:text-slate-300 border border-slate-200/80 dark:border-white/10 hover:bg-white/80 dark:hover:bg-white/10'
              }`}
            >
              Programming (C & JS)
            </button>
            <button
              onClick={() => setFilter('web')}
              className={`px-4 py-1.5 rounded-full text-xs font-semibold backdrop-blur-md transition-all ${
                filter === 'web'
                  ? 'bg-blue-600 dark:bg-blue-500 text-white shadow-lg shadow-blue-500/30'
                  : 'bg-white/60 dark:bg-white/[0.05] text-slate-600 dark:text-slate-300 border border-slate-200/80 dark:border-white/10 hover:bg-white/80 dark:hover:bg-white/10'
              }`}
            >
              Web Dev (HTML & CSS)
            </button>
            <button
              onClick={() => setFilter('fundamentals')}
              className={`px-4 py-1.5 rounded-full text-xs font-semibold backdrop-blur-md transition-all ${
                filter === 'fundamentals'
                  ? 'bg-blue-600 dark:bg-blue-500 text-white shadow-lg shadow-blue-500/30'
                  : 'bg-white/60 dark:bg-white/[0.05] text-slate-600 dark:text-slate-300 border border-slate-200/80 dark:border-white/10 hover:bg-white/80 dark:hover:bg-white/10'
              }`}
            >
              Computer Tools & Fundamentals
            </button>
          </div>
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {filteredSkills.map((skill) => {
            const isSelected = selectedSkill.name === skill.name;

            return (
              <div
                key={skill.name}
                id={`skill-card-${skill.name.toLowerCase().replace(/[^a-z0-9]/g, '-')}`}
                onClick={() => setSelectedSkill(skill)}
                className={`cursor-pointer rounded-3xl p-6 transition-all duration-300 backdrop-blur-xl border relative ${
                  isSelected
                    ? 'bg-white/90 dark:bg-white/[0.08] border-blue-500 dark:border-purple-400 shadow-2xl ring-2 ring-purple-500/20'
                    : 'bg-white/70 dark:bg-white/[0.04] border-slate-200/70 dark:border-white/10 hover:border-blue-400/40 dark:hover:border-white/20 shadow-lg'
                }`}
              >
                {/* Header: Icon & Skill Name */}
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <div className={`w-12 h-12 rounded-2xl flex items-center justify-center transition-colors ${
                      isSelected
                        ? 'bg-gradient-to-br from-blue-500 to-purple-600 text-white shadow-lg shadow-blue-500/25'
                        : 'bg-blue-500/10 dark:bg-blue-500/20 text-blue-600 dark:text-blue-400 border border-blue-500/20'
                    }`}>
                      {iconMap[skill.iconName] || <Code2 className="w-5 h-5" />}
                    </div>
                    <div>
                      <h3 className="font-bold text-base text-slate-900 dark:text-white">
                        {skill.name}
                      </h3>
                      <span className="text-xs font-medium text-slate-500 dark:text-slate-400">
                        {skill.levelLabel}
                      </span>
                    </div>
                  </div>

                  <span className="text-sm font-extrabold text-blue-600 dark:text-blue-400">
                    {skill.level}%
                  </span>
                </div>

                {/* Description */}
                <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed mb-4 font-light">
                  {skill.description}
                </p>

                {/* Progress Bar */}
                <div className="w-full bg-slate-200/60 dark:bg-white/10 rounded-full h-2 overflow-hidden mb-4 backdrop-blur-sm">
                  <div 
                    className="bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-500 h-full rounded-full transition-all duration-500"
                    style={{ width: `${skill.level}%` }}
                  />
                </div>

                {/* Topic Badges */}
                <div className="flex flex-wrap gap-1.5 pt-1">
                  {skill.topics.slice(0, 3).map((topic, i) => (
                    <span 
                      key={i}
                      className="px-2.5 py-1 rounded-lg bg-blue-500/10 dark:bg-white/[0.05] border border-blue-500/15 dark:border-white/10 text-[11px] font-medium text-slate-700 dark:text-slate-300"
                    >
                      {topic}
                    </span>
                  ))}
                  {skill.topics.length > 3 && (
                    <span className="px-2.5 py-1 rounded-lg bg-slate-100 dark:bg-white/[0.05] text-[11px] font-medium text-slate-500 border border-transparent dark:border-white/5">
                      +{skill.topics.length - 3} more
                    </span>
                  )}
                </div>

                {/* Selection indicator hint */}
                <div className="mt-4 pt-3 border-t border-slate-200/60 dark:border-white/10 flex items-center justify-between text-xs text-blue-600 dark:text-blue-400 font-semibold">
                  <span>{isSelected ? 'Currently Viewing Code' : 'Click to View Code Snippet'}</span>
                  <ChevronRight className="w-3.5 h-3.5" />
                </div>

              </div>
            );
          })}
        </div>

        {/* Interactive Code Snippet & Concept Explorer for Selected Skill */}
        {selectedSkill && selectedSkill.sampleCode && (
          <div 
            id="skill-snippet-viewer"
            className="rounded-3xl bg-white/80 dark:bg-white/[0.05] backdrop-blur-2xl text-slate-900 dark:text-white p-6 sm:p-8 shadow-2xl border border-slate-200 dark:border-white/10 space-y-5"
          >
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-200/70 dark:border-white/10 pb-5">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-2xl bg-blue-500/10 border border-blue-500/20 text-blue-500 dark:text-blue-400 flex items-center justify-center">
                  <Code2 className="w-5 h-5" />
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <span className="text-xs uppercase font-bold tracking-widest text-blue-500 dark:text-blue-400">
                      Hands-On Concept Demo
                    </span>
                    <span className="text-xs text-slate-400">•</span>
                    <span className="text-xs text-slate-400 font-mono capitalize">{selectedSkill.sampleCode.language}</span>
                  </div>
                  <h3 className="text-lg font-bold text-slate-900 dark:text-white">
                    {selectedSkill.name} — Practical Learning Example
                  </h3>
                </div>
              </div>

              {/* Copy Code Button */}
              <button
                onClick={() => handleCopyCode(selectedSkill.sampleCode!.code)}
                className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-white/80 dark:bg-white/10 hover:bg-white dark:hover:bg-white/20 text-xs font-semibold text-slate-800 dark:text-slate-200 border border-slate-200 dark:border-white/15 backdrop-blur-md transition-all self-start sm:self-center shadow-sm"
              >
                {copied ? (
                  <>
                    <Check className="w-3.5 h-3.5 text-emerald-400" />
                    <span className="text-emerald-500 dark:text-emerald-400">Copied!</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-3.5 h-3.5 text-slate-400" />
                    <span>Copy Code</span>
                  </>
                )}
              </button>
            </div>

            {/* Code Block Container */}
            <div className="relative rounded-2xl bg-slate-950/90 dark:bg-[#080911]/90 p-4 sm:p-5 border border-slate-800 dark:border-white/10 overflow-x-auto font-mono text-xs sm:text-sm text-blue-300 leading-relaxed shadow-inner">
              <pre>
                <code>{selectedSkill.sampleCode.code}</code>
              </pre>
            </div>

            {/* Explanation & Topic list */}
            <div className="grid grid-cols-1 md:grid-cols-12 gap-4 items-center pt-1 text-xs">
              <div className="md:col-span-8 flex items-start gap-2 text-slate-700 dark:text-slate-300">
                <Sparkles className="w-4 h-4 text-purple-500 dark:text-purple-400 shrink-0 mt-0.5" />
                <span>
                  <strong className="text-slate-900 dark:text-white">Explanation: </strong>
                  {selectedSkill.sampleCode.explanation}
                </span>
              </div>
              <div className="md:col-span-4 text-left md:text-right">
                <span className="text-slate-500 dark:text-slate-400">Proficiency Track: </span>
                <span className="text-blue-600 dark:text-blue-400 font-bold">{selectedSkill.levelLabel} ({selectedSkill.level}%)</span>
              </div>
            </div>

          </div>
        )}

      </div>
    </section>
  );
};
