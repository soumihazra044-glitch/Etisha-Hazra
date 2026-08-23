import React, { useState, useEffect } from 'react';
import { NAV_LINKS, PERSONAL_INFO } from '../data/portfolioData';
import { Menu, X, Sun, Moon, Sparkles, FileText, ArrowRight } from 'lucide-react';

interface NavbarProps {
  darkMode: boolean;
  setDarkMode: (val: boolean | ((prev: boolean) => boolean)) => void;
  onOpenResume: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ darkMode, setDarkMode, onOpenResume }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      const sections = NAV_LINKS.map(link => link.id);
      const scrollPosition = window.scrollY + 120;

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = document.getElementById(sections[i]);
        if (section) {
          const top = section.offsetTop;
          if (scrollPosition >= top) {
            setActiveSection(sections[i]);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header
      id="main-navbar"
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/70 dark:bg-white/[0.04] backdrop-blur-xl shadow-lg shadow-black/5 dark:shadow-black/30 border-b border-slate-200/60 dark:border-white/10 py-3'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Brand Logo */}
          <a
            href="#home"
            id="nav-brand-logo"
            onClick={(e) => handleNavClick(e, '#home')}
            className="flex items-center gap-3 group"
          >
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-blue-400 to-purple-500 text-white flex items-center justify-center font-bold text-lg shadow-lg shadow-purple-500/20 group-hover:scale-105 transition-transform duration-200">
              EH
            </div>
            <div>
              <span className="font-bold text-lg tracking-tight text-slate-900 dark:text-white flex items-center gap-1.5 font-display">
                {PERSONAL_INFO.name}
                <Sparkles className="w-4 h-4 text-purple-400 inline-block animate-pulse" />
              </span>
              <span className="block text-xs font-medium text-slate-500 dark:text-slate-400">
                BCA 2nd Year • SVU
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav id="desktop-nav-menu" className="hidden md:flex items-center gap-1 bg-white/60 dark:bg-white/5 backdrop-blur-md px-3.5 py-1.5 rounded-full border border-slate-200/70 dark:border-white/10 shadow-sm">
            {NAV_LINKS.map((link) => {
              const isActive = activeSection === link.id;
              return (
                <a
                  key={link.id}
                  id={`nav-link-${link.id}`}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className={`px-3.5 py-1.5 rounded-full text-xs uppercase tracking-wider font-semibold transition-all duration-200 ${
                    isActive
                      ? 'bg-blue-600 dark:bg-blue-500 text-white shadow-md shadow-blue-500/25'
                      : 'text-slate-600 dark:text-slate-400 hover:text-blue-600 dark:hover:text-white hover:bg-slate-200/50 dark:hover:bg-white/10'
                  }`}
                >
                  {link.name}
                </a>
              );
            })}
          </nav>

          {/* Right Action Buttons */}
          <div className="hidden md:flex items-center gap-2.5">
            {/* Dark Mode Toggle */}
            <button
              id="theme-toggle-btn"
              onClick={() => setDarkMode((prev: boolean) => !prev)}
              aria-label="Toggle color theme"
              className="p-2 rounded-xl text-slate-600 dark:text-slate-300 bg-white/50 dark:bg-white/5 backdrop-blur-md hover:bg-slate-100 dark:hover:bg-white/10 border border-slate-200/80 dark:border-white/10 transition-colors"
            >
              {darkMode ? <Sun className="w-4 h-4 text-amber-300" /> : <Moon className="w-4 h-4 text-slate-700" />}
            </button>

            {/* Academic CV Modal Button */}
            <button
              id="nav-resume-btn"
              onClick={onOpenResume}
              className="inline-flex items-center gap-1.5 px-3.5 py-2 text-xs font-semibold text-purple-600 dark:text-purple-300 bg-purple-500/10 dark:bg-purple-500/15 hover:bg-purple-500/20 border border-purple-500/25 rounded-xl backdrop-blur-md transition-all"
            >
              <FileText className="w-3.5 h-3.5" />
              <span>Academic CV</span>
            </button>

            {/* Contact CTA */}
            <a
              id="nav-contact-cta-btn"
              href="#contact"
              onClick={(e) => handleNavClick(e, '#contact')}
              className="inline-flex items-center gap-1.5 px-4 py-2 text-xs font-semibold text-white bg-blue-600 hover:bg-blue-500 active:bg-blue-700 rounded-xl shadow-md shadow-blue-600/25 transition-all hover:shadow-lg"
            >
              <span>Contact Me</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </a>
          </div>

          {/* Mobile Menu Toggle Button */}
          <div className="flex md:hidden items-center gap-2">
            <button
              id="mobile-theme-toggle"
              onClick={() => setDarkMode((prev: boolean) => !prev)}
              aria-label="Toggle color theme"
              className="p-2 rounded-lg text-slate-600 dark:text-slate-300 bg-white/50 dark:bg-white/5 backdrop-blur-md hover:bg-slate-100 dark:hover:bg-white/10 border border-slate-200 dark:border-white/10"
            >
              {darkMode ? <Sun className="w-4 h-4 text-amber-300" /> : <Moon className="w-4 h-4" />}
            </button>
            <button
              id="mobile-menu-toggle-btn"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg text-slate-700 dark:text-slate-200 bg-white/50 dark:bg-white/5 backdrop-blur-md hover:bg-slate-100 dark:hover:bg-white/10 border border-slate-200 dark:border-white/10"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div
          id="mobile-nav-drawer"
          className="md:hidden bg-white/95 dark:bg-[#0d0e1a]/95 backdrop-blur-2xl border-b border-slate-200 dark:border-white/10 px-4 pt-2 pb-6 space-y-2 shadow-2xl"
        >
          <div className="flex flex-col space-y-1">
            {NAV_LINKS.map((link) => (
              <a
                key={link.id}
                id={`mobile-link-${link.id}`}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className={`px-4 py-2.5 rounded-lg text-sm font-medium transition-colors ${
                  activeSection === link.id
                    ? 'bg-blue-500/15 text-blue-600 dark:text-blue-400 font-semibold border border-blue-500/20'
                    : 'text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-white/5'
                }`}
              >
                {link.name}
              </a>
            ))}
          </div>

          <div className="pt-3 border-t border-slate-200 dark:border-white/10 flex flex-col gap-2">
            <button
              id="mobile-resume-btn"
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenResume();
              }}
              className="w-full flex items-center justify-center gap-2 px-4 py-2.5 text-sm font-semibold text-purple-600 dark:text-purple-300 bg-purple-500/10 dark:bg-purple-500/20 rounded-xl border border-purple-500/20"
            >
              <FileText className="w-4 h-4" />
              <span>View Academic CV</span>
            </button>
            <a
              id="mobile-contact-btn"
              href="#contact"
              onClick={(e) => handleNavClick(e, '#contact')}
              className="w-full flex items-center justify-center gap-2 px-4 py-2.5 text-sm font-semibold text-white bg-blue-600 hover:bg-blue-500 rounded-xl shadow-md"
            >
              <span>Contact Me</span>
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
