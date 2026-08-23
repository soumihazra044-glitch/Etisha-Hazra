import React from 'react';
import { PERSONAL_INFO, NAV_LINKS } from '../data/portfolioData';
import { ArrowUp, Github, Linkedin, Mail, Heart, Sparkles, GraduationCap } from 'lucide-react';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer id="main-footer" className="bg-slate-950 text-slate-400 pt-16 pb-12 border-t border-slate-800 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-slate-800/80 items-start">
          
          {/* Brand Col */}
          <div className="md:col-span-5 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-blue-600 to-indigo-600 text-white flex items-center justify-center font-bold text-lg shadow-md">
                EH
              </div>
              <div>
                <span className="font-bold text-lg text-white block font-display">
                  {PERSONAL_INFO.name}
                </span>
                <span className="text-xs text-blue-400 font-medium">
                  BCA 2nd Year • Swami Vivekananda University
                </span>
              </div>
            </div>

            <p className="text-xs text-slate-400 leading-relaxed max-w-sm">
              Dedicated BCA student learning C, Web Development, and Computer Applications to build a successful career in the IT industry.
            </p>

            <div className="flex items-center gap-3 pt-2">
              <a
                href={PERSONAL_INFO.github}
                target="_blank"
                rel="noreferrer"
                aria-label="GitHub"
                className="w-9 h-9 rounded-xl bg-slate-900 border border-slate-800 hover:border-blue-500 hover:text-white flex items-center justify-center text-slate-400 transition-colors"
              >
                <Github className="w-4 h-4" />
              </a>
              <a
                href={PERSONAL_INFO.linkedin}
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn"
                className="w-9 h-9 rounded-xl bg-slate-900 border border-slate-800 hover:border-blue-500 hover:text-white flex items-center justify-center text-slate-400 transition-colors"
              >
                <Linkedin className="w-4 h-4" />
              </a>
              <a
                href={`mailto:${PERSONAL_INFO.email}`}
                aria-label="Email"
                className="w-9 h-9 rounded-xl bg-slate-900 border border-slate-800 hover:border-blue-500 hover:text-white flex items-center justify-center text-slate-400 transition-colors"
              >
                <Mail className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick Nav Links */}
          <div className="md:col-span-4 space-y-3">
            <h4 className="text-xs font-bold text-white uppercase tracking-wider">
              Quick Navigation
            </h4>
            <ul className="grid grid-cols-2 gap-2 text-xs">
              {NAV_LINKS.map((link) => (
                <li key={link.id}>
                  <a
                    href={link.href}
                    onClick={(e) => handleNavClick(e, link.href)}
                    className="hover:text-blue-400 transition-colors inline-block py-1"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Academic Journey Badge & Back to Top */}
          <div className="md:col-span-3 space-y-4 text-left md:text-right flex flex-col md:items-end">
            <div className="p-4 rounded-2xl bg-slate-900 border border-slate-800 text-xs space-y-1 inline-block text-left">
              <div className="flex items-center gap-1.5 text-blue-400 font-bold">
                <GraduationCap className="w-4 h-4" />
                <span>Academic Status</span>
              </div>
              <p className="text-slate-300 font-medium">BCA 2nd Year Undergrad</p>
              <p className="text-[11px] text-slate-500">Swami Vivekananda University</p>
            </div>

            <button
              onClick={scrollToTop}
              id="footer-back-to-top-btn"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-slate-900 hover:bg-slate-800 border border-slate-800 text-xs font-semibold text-slate-300 hover:text-white transition-colors"
            >
              <span>Back to top</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>

        </div>

        {/* Copyright notice as strictly requested */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <p id="copyright-text">
            © 2026 Etisha Hazra. All Rights Reserved.
          </p>

          <p className="flex items-center gap-1">
            <span>Crafted for modern web standards with</span>
            <Heart className="w-3.5 h-3.5 text-rose-500 inline fill-rose-500" />
            <span>& BCA Passion</span>
          </p>
        </div>

      </div>
    </footer>
  );
};
