import React from 'react';
import { PERSONAL_INFO, EDUCATION_LIST, SKILLS_LIST, PROJECTS_LIST } from '../data/portfolioData';
import { 
  X, 
  Printer, 
  Download, 
  GraduationCap, 
  Mail, 
  MapPin, 
  Linkedin, 
  Github, 
  BookOpen, 
  Code, 
  CheckCircle2 
} from 'lucide-react';

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ResumeModal: React.FC<ResumeModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  return (
    <div 
      id="resume-modal-backdrop"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-slate-950/80 backdrop-blur-sm overflow-y-auto"
      onClick={onClose}
    >
      <div 
        id="resume-modal-content"
        className="relative w-full max-w-3xl bg-white dark:bg-slate-900 rounded-3xl shadow-2xl border border-slate-200 dark:border-slate-800 overflow-hidden my-8"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Controls Top Bar */}
        <div className="p-4 sm:px-8 bg-slate-100 dark:bg-slate-800/80 border-b border-slate-200 dark:border-slate-700 flex items-center justify-between">
          <div className="flex items-center gap-2 text-xs font-bold text-slate-700 dark:text-slate-200">
            <GraduationCap className="w-4 h-4 text-blue-600 dark:text-blue-400" />
            <span>Academic Curriculum Vitae — Etisha Hazra</span>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handlePrint}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold bg-white dark:bg-slate-700 text-slate-700 dark:text-slate-200 border border-slate-300 dark:border-slate-600 hover:bg-slate-50 transition-colors"
            >
              <Printer className="w-3.5 h-3.5" />
              <span>Print / Save PDF</span>
            </button>
            <button
              onClick={onClose}
              className="p-1.5 rounded-lg bg-white dark:bg-slate-700 text-slate-500 hover:text-slate-700 dark:text-slate-300"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Printable Resume Document Body */}
        <div className="p-6 sm:p-10 max-h-[75vh] overflow-y-auto space-y-6 text-slate-800 dark:text-slate-200">
          
          {/* Header Info */}
          <div className="border-b border-slate-200 dark:border-slate-800 pb-6 text-center sm:text-left flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div>
              <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white">
                {PERSONAL_INFO.name}
              </h1>
              <p className="text-sm font-semibold text-blue-600 dark:text-blue-400 mt-0.5">
                BCA Student (2nd Year) • Swami Vivekananda University
              </p>
              <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">
                Aspiring Software & Web Development Professional
              </p>
            </div>

            <div className="text-xs text-slate-600 dark:text-slate-400 space-y-1 sm:text-right">
              <p className="flex items-center sm:justify-end gap-1.5">
                <MapPin className="w-3.5 h-3.5 text-blue-500" />
                <span>{PERSONAL_INFO.location}</span>
              </p>
              <p className="flex items-center sm:justify-end gap-1.5">
                <Mail className="w-3.5 h-3.5 text-blue-500" />
                <span>{PERSONAL_INFO.email}</span>
              </p>
              <p className="flex items-center sm:justify-end gap-1.5">
                <Github className="w-3.5 h-3.5 text-slate-500" />
                <span>github.com/etishahazra</span>
              </p>
            </div>
          </div>

          {/* Objective / Summary */}
          <div>
            <h2 className="text-xs font-bold uppercase tracking-wider text-blue-600 dark:text-blue-400 mb-2 border-b border-blue-100 dark:border-blue-900 pb-1">
              Professional Summary
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
              {PERSONAL_INFO.bio}
            </p>
          </div>

          {/* Education */}
          <div>
            <h2 className="text-xs font-bold uppercase tracking-wider text-blue-600 dark:text-blue-400 mb-3 border-b border-blue-100 dark:border-blue-900 pb-1">
              Education
            </h2>
            <div className="space-y-4">
              {EDUCATION_LIST.map((edu) => (
                <div key={edu.id} className="text-xs sm:text-sm space-y-1">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between font-bold text-slate-900 dark:text-white">
                    <span>{edu.degree}</span>
                    <span className="text-xs text-slate-500 font-normal">{edu.duration}</span>
                  </div>
                  <div className="text-xs font-semibold text-indigo-600 dark:text-indigo-400">
                    {edu.institution}
                  </div>
                  <p className="text-xs text-slate-600 dark:text-slate-400">
                    {edu.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Technical Skills */}
          <div>
            <h2 className="text-xs font-bold uppercase tracking-wider text-blue-600 dark:text-blue-400 mb-2 border-b border-blue-100 dark:border-blue-900 pb-1">
              Technical Skills
            </h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 text-xs">
              {SKILLS_LIST.map((skill) => (
                <div key={skill.name} className="p-2 rounded-lg bg-slate-50 dark:bg-slate-800 border border-slate-100 dark:border-slate-700">
                  <span className="font-semibold text-slate-900 dark:text-white block">{skill.name}</span>
                  <span className="text-[11px] text-slate-500">{skill.levelLabel}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Academic Projects */}
          <div>
            <h2 className="text-xs font-bold uppercase tracking-wider text-blue-600 dark:text-blue-400 mb-3 border-b border-blue-100 dark:border-blue-900 pb-1">
              Academic & Learning Projects
            </h2>
            <div className="space-y-3">
              {PROJECTS_LIST.map((p) => (
                <div key={p.id} className="text-xs space-y-0.5">
                  <div className="font-bold text-slate-900 dark:text-white flex items-center justify-between">
                    <span>{p.title}</span>
                    <span className="text-[11px] text-indigo-500 font-medium">({p.tags.join(', ')})</span>
                  </div>
                  <p className="text-slate-600 dark:text-slate-400">
                    {p.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Strengths & Declarations */}
          <div className="pt-2 border-t border-slate-100 dark:border-slate-800 text-xs text-slate-500 flex flex-col sm:flex-row items-center justify-between gap-2">
            <span>Declaration: The above information is true to the best of my knowledge.</span>
            <span className="font-semibold text-slate-700 dark:text-slate-300">Etisha Hazra</span>
          </div>

        </div>
      </div>
    </div>
  );
};
