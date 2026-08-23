import React from 'react';
import { PROJECTS_LIST } from '../data/portfolioData';
import { ProjectItem } from '../types';
import { 
  FolderGit2, 
  ExternalLink, 
  Github, 
  Sparkles, 
  ArrowUpRight, 
  Code, 
  Layers,
  GraduationCap
} from 'lucide-react';

interface ProjectsProps {
  onSelectProject: (project: ProjectItem) => void;
}

export const Projects: React.FC<ProjectsProps> = ({ onSelectProject }) => {
  return (
    <section id="projects" className="py-20 bg-transparent relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-blue-500/10 dark:bg-blue-500/15 text-blue-600 dark:text-blue-400 border border-blue-500/20 backdrop-blur-md text-xs font-bold tracking-widest uppercase">
            <FolderGit2 className="w-3.5 h-3.5" />
            <span>Featured Portfolio Work</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Learning Projects & Practice Works
          </h2>
          <p className="text-base text-slate-600 dark:text-slate-400">
            A showcase of hands-on student projects built while exploring C programming, HTML5, CSS3, and JavaScript fundamentals.
          </p>
        </div>

        {/* Project Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {PROJECTS_LIST.map((project) => (
            <div
              key={project.id}
              id={`project-card-${project.id}`}
              className="group bg-white/70 dark:bg-white/[0.05] backdrop-blur-xl rounded-3xl overflow-hidden border border-slate-200/70 dark:border-white/10 shadow-xl hover:border-blue-500/40 dark:hover:border-white/20 transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                {/* Top Banner Gradient */}
                <div className={`h-24 bg-gradient-to-r ${project.previewColor} p-6 flex items-start justify-between relative overflow-hidden`}>
                  <div className="absolute -right-6 -bottom-6 w-24 h-24 bg-white/20 rounded-full blur-xl" />
                  
                  {/* Category Pill */}
                  <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-black/20 backdrop-blur-md text-white text-xs font-semibold border border-white/20">
                    <Code className="w-3 h-3" />
                    {project.category}
                  </span>

                  {/* Student Project Badge */}
                  <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-amber-400/90 text-slate-950 text-[11px] font-bold shadow-md backdrop-blur-sm">
                    <GraduationCap className="w-3 h-3" />
                    Learning Project
                  </span>
                </div>

                {/* Card Body */}
                <div className="p-6 sm:p-8 space-y-4">
                  <div>
                    <h3 className="text-xl font-bold text-slate-900 dark:text-white group-hover:text-blue-500 dark:group-hover:text-blue-400 transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-xs font-semibold text-blue-600 dark:text-blue-400 mt-1">
                      {project.subtitle}
                    </p>
                  </div>

                  <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed font-light">
                    {project.description}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 pt-2">
                    {project.tags.map((tag, idx) => (
                      <span
                        key={idx}
                        className="px-2.5 py-1 rounded-lg bg-blue-500/10 dark:bg-white/[0.05] text-slate-700 dark:text-slate-300 text-xs font-medium border border-blue-500/15 dark:border-white/10"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Action Buttons Footer */}
              <div className="p-6 pt-0 border-t border-slate-200/60 dark:border-white/10 flex items-center justify-between gap-3 mt-4">
                {/* View Project Demo Button */}
                <button
                  id={`view-project-btn-${project.id}`}
                  onClick={() => onSelectProject(project)}
                  className="flex-1 inline-flex items-center justify-center gap-1.5 px-4 py-2.5 rounded-xl font-semibold text-xs text-white bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 shadow-lg shadow-blue-500/25 transition-all"
                >
                  <span>View Project Demo</span>
                  <ArrowUpRight className="w-4 h-4" />
                </button>

                {/* GitHub Repo Button */}
                <a
                  id={`github-project-btn-${project.id}`}
                  href={project.githubLink || 'https://github.com/etishahazra'}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center justify-center gap-1.5 px-4 py-2.5 rounded-xl font-semibold text-xs text-slate-700 dark:text-slate-200 bg-white/60 dark:bg-white/10 hover:bg-white dark:hover:bg-white/20 border border-slate-200/80 dark:border-white/15 backdrop-blur-md transition-all shadow-sm"
                >
                  <Github className="w-4 h-4" />
                  <span>GitHub</span>
                </a>
              </div>

            </div>
          ))}
        </div>

        {/* Learning Note Banner */}
        <div className="mt-12 text-center p-6 rounded-3xl bg-white/60 dark:bg-white/[0.04] backdrop-blur-xl border border-slate-200/60 dark:border-white/10 max-w-2xl mx-auto shadow-lg">
          <p className="text-xs text-slate-600 dark:text-slate-400 font-light">
            🌱 <em>"Continuously building new coding exercises and full-stack experiments as part of the BCA syllabus at Swami Vivekananda University."</em>
          </p>
        </div>

      </div>
    </section>
  );
};
