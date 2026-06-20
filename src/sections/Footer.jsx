import React from 'react';
import { Heart } from 'lucide-react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

const Footer = () => {
  const handleNavClick = (e, href) => {
    e.preventDefault();
    const id = href.substring(1);
    const element = document.getElementById(id);
    if (element) {
      const offsetTop = element.offsetTop - 85;
      window.scrollTo({
        top: offsetTop,
        behavior: 'smooth',
      });
    }
  };

  return (
    <footer className="border-t border-slate-200/50 dark:border-slate-800/40 bg-white/40 dark:bg-[#030712]/40 backdrop-blur-md py-12">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-8">
        
        {/* Brand details */}
        <div className="flex flex-col items-center md:items-start text-center md:text-left gap-1">
          <div className="flex items-center gap-2 font-extrabold text-slate-850 dark:text-white text-base">
            <span className="w-8 h-8 rounded-lg bg-gradient-to-tr from-primary-600 to-accent-violet flex items-center justify-center font-bold text-white text-xs">
              AS
            </span>
            <span>Abhishek Singh</span>
          </div>
          <p className="text-xs text-slate-500 dark:text-slate-450 mt-1">
            IIT Jodhpur Applied AI & Data Science (2025-2029)
          </p>
        </div>

        {/* Navigation Quick Links */}
        <div className="flex flex-wrap justify-center gap-x-6 gap-y-2 text-xs font-semibold text-slate-500 dark:text-slate-400">
          <a href="#home" onClick={(e) => handleNavClick(e, '#home')} className="hover:text-primary-500 dark:hover:text-primary-400 transition-colors">Home</a>
          <a href="#about" onClick={(e) => handleNavClick(e, '#about')} className="hover:text-primary-500 dark:hover:text-primary-400 transition-colors">About</a>
          <a href="#skills" onClick={(e) => handleNavClick(e, '#skills')} className="hover:text-primary-500 dark:hover:text-primary-400 transition-colors">Skills</a>
          <a href="#projects" onClick={(e) => handleNavClick(e, '#projects')} className="hover:text-primary-500 dark:hover:text-primary-400 transition-colors">Projects</a>
          <a href="#education" onClick={(e) => handleNavClick(e, '#education')} className="hover:text-primary-500 dark:hover:text-primary-400 transition-colors">Education</a>
          <a href="#github" onClick={(e) => handleNavClick(e, '#github')} className="hover:text-primary-500 dark:hover:text-primary-400 transition-colors">GitHub</a>
          <a href="#journey" onClick={(e) => handleNavClick(e, '#journey')} className="hover:text-primary-500 dark:hover:text-primary-400 transition-colors">Journey</a>
          <a href="#contact" onClick={(e) => handleNavClick(e, '#contact')} className="hover:text-primary-500 dark:hover:text-primary-400 transition-colors">Contact</a>
        </div>

        {/* Right side: Copyright & Socials */}
        <div className="flex flex-col items-center md:items-end gap-3 text-center md:text-right">
          <div className="flex gap-4 text-slate-500 dark:text-slate-400">
            <a
              href="https://github.com/ABHISHEKSINGH-64"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition-colors"
            >
              <FaGithub className="w-4.5 h-4.5" />
            </a>
            <a
              href="https://www.linkedin.com/in/abhishek-singh1570/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#0077b5] transition-colors"
            >
              <FaLinkedin className="w-4.5 h-4.5" />
            </a>
          </div>
          <p className="text-[10px] text-slate-400 dark:text-slate-500 flex items-center gap-1">
            <span>&copy; {new Date().getFullYear()} Abhishek Singh.</span>
            <span className="flex items-center text-rose-500/80">
              Made with <Heart className="w-3 h-3 fill-rose-500 mx-0.5" /> React & Tailwind
            </span>
          </p>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
