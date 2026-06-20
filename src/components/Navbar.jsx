import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useTheme } from '../context/ThemeContext';
import { Sun, Moon, Menu, X, Download } from 'lucide-react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import Button from './Button';

const navItems = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Education', href: '#education' },
  { label: 'GitHub', href: '#github' },
  { label: 'Journey', href: '#journey' },
  { label: 'Contact', href: '#contact' },
];

const Navbar = () => {
  const { theme, toggleTheme } = useTheme();
  const [activeSection, setActiveSection] = useState('home');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Monitor scroll to update active section and glass state
  useEffect(() => {
    const handleScroll = () => {
      // Scrolled styling trigger
      setScrolled(window.scrollY > 20);

      // Section highlighters
      const sections = navItems.map((item) => {
        const id = item.href.substring(1);
        const element = document.getElementById(id);
        if (element) {
          const rect = element.getBoundingClientRect();
          return {
            id,
            offsetTop: element.offsetTop - 120,
            offsetBottom: element.offsetTop + element.offsetHeight - 120,
          };
        }
        return null;
      }).filter(Boolean);

      const scrollPos = window.scrollY;
      const current = sections.find(
        (sec) => scrollPos >= sec.offsetTop && scrollPos < sec.offsetBottom
      );

      if (current) {
        setActiveSection(current.id);
      } else if (scrollPos < 100) {
        setActiveSection('home');
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

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
      setActiveSection(id);
      setMobileMenuOpen(false);
    }
  };

  return (
    <>
      <motion.nav
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? 'glass-nav-light dark:glass-nav-dark py-3.5 shadow-md shadow-slate-900/5'
            : 'bg-transparent py-5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
          {/* Brand Logo */}
          <a
            href="#home"
            onClick={(e) => handleNavClick(e, '#home')}
            className="flex items-center gap-2 group cursor-pointer"
          >
            <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-primary-600 to-accent-violet flex items-center justify-center font-bold text-white shadow-md shadow-primary-600/10 group-hover:scale-105 transition-transform duration-300">
              AS
            </div>
            <div className="hidden sm:block">
              <span className="font-extrabold text-slate-800 dark:text-white group-hover:text-primary-500 dark:group-hover:text-primary-400 transition-colors duration-200 block text-sm leading-none">
                Abhishek Singh
              </span>
              <span className="text-xs text-slate-500 dark:text-slate-400 leading-none">
                Portfolio
              </span>
            </div>
          </a>

          {/* Desktop Navigation Link Pills */}
          <div className="hidden lg:flex items-center gap-1.5 p-1.5 rounded-full border border-slate-200/40 dark:border-slate-800/40 bg-slate-50/50 dark:bg-slate-950/20">
            {navItems.map((item) => {
              const id = item.href.substring(1);
              const isActive = activeSection === id;
              return (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={(e) => handleNavClick(e, item.href)}
                  className={`relative px-4 py-2 text-xs font-semibold rounded-full transition-all duration-300 ${
                    isActive
                      ? 'text-white dark:text-slate-950'
                      : 'text-slate-600 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white'
                  }`}
                >
                  {isActive && (
                    <motion.div
                      layoutId="activeTabIndicator"
                      transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                      className="absolute inset-0 bg-slate-800 dark:bg-slate-100 rounded-full z-0"
                    />
                  )}
                  <span className="relative z-10">{item.label}</span>
                </a>
              );
            })}
          </div>

          {/* Right Action Bar (Theme Toggle, Social Links, Resume) */}
          <div className="hidden md:flex items-center gap-3">
            {/* Theme toggle */}
            <motion.button
              onClick={toggleTheme}
              className="p-2.5 rounded-xl border border-slate-200/60 dark:border-slate-800 bg-slate-50/40 dark:bg-slate-950/30 text-slate-600 dark:text-slate-400 hover:text-primary-500 dark:hover:text-primary-400 hover:border-primary-500/30 dark:hover:border-primary-500/30 transition-all duration-200 outline-none"
              whileTap={{ scale: 0.95 }}
            >
              {theme === 'dark' ? <Sun className="w-4.5 h-4.5" /> : <Moon className="w-4.5 h-4.5" />}
            </motion.button>

            {/* Socials */}
            <a
              href="https://github.com/ABHISHEKSINGH-64"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-xl border border-slate-200/60 dark:border-slate-800 bg-slate-50/40 dark:bg-slate-950/30 text-slate-600 dark:text-slate-400 hover:text-white dark:hover:text-white hover:bg-slate-800 dark:hover:bg-slate-900 transition-all duration-200"
            >
              <FaGithub className="w-4.5 h-4.5" />
            </a>
            
            <a
              href="https://www.linkedin.com/in/abhishek-singh1570/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-xl border border-slate-200/60 dark:border-slate-800 bg-slate-50/40 dark:bg-slate-950/30 text-slate-600 dark:text-slate-400 hover:text-white hover:bg-[#0077b5] dark:hover:bg-[#0077b5] transition-all duration-200"
            >
              <FaLinkedin className="w-4.5 h-4.5" />
            </a>

            {/* Download Resume Button */}
            <Button
              href="/resume.pdf"
              download="Abhishek_Singh_Resume.pdf"
              variant="primary"
              size="sm"
              icon={Download}
            >
              Resume
            </Button>
          </div>

          {/* Mobile Navigation controls */}
          <div className="flex lg:hidden items-center gap-3">
            {/* Theme Toggle (Mobile) */}
            <button
              onClick={toggleTheme}
              className="p-2.5 rounded-xl border border-slate-200/60 dark:border-slate-800 text-slate-600 dark:text-slate-400"
            >
              {theme === 'dark' ? <Sun className="w-4.5 h-4.5" /> : <Moon className="w-4.5 h-4.5" />}
            </button>

            {/* Hamburger Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2.5 rounded-xl border border-slate-200/60 dark:border-slate-800 text-slate-600 dark:text-slate-400"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu Panel */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed top-[73px] left-0 right-0 z-40 bg-white dark:bg-[#030712] border-b border-slate-200 dark:border-slate-800/80 shadow-xl lg:hidden max-h-[85vh] overflow-y-auto"
          >
            <div className="px-6 py-6 flex flex-col gap-4">
              {navItems.map((item) => {
                const id = item.href.substring(1);
                const isActive = activeSection === id;
                return (
                  <a
                    key={item.href}
                    href={item.href}
                    onClick={(e) => handleNavClick(e, item.href)}
                    className={`text-sm font-semibold py-2 px-3 rounded-xl transition-colors duration-200 ${
                      isActive
                        ? 'bg-primary-500/10 text-primary-500'
                        : 'text-slate-700 hover:bg-slate-50 dark:text-slate-300 dark:hover:bg-slate-900/50'
                    }`}
                  >
                    {item.label}
                  </a>
                );
              })}

              <hr className="border-slate-200 dark:border-slate-800 my-2" />

              <div className="flex items-center justify-between py-2">
                <span className="text-sm font-semibold text-slate-600 dark:text-slate-400">Socials</span>
                <div className="flex gap-3">
                  <a
                    href="https://github.com/ABHISHEKSINGH-64"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2.5 rounded-xl border border-slate-200 dark:border-slate-800 text-slate-600 dark:text-slate-400"
                  >
                    <FaGithub className="w-4.5 h-4.5" />
                  </a>
                  <a
                    href="https://www.linkedin.com/in/abhishek-singh1570/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2.5 rounded-xl border border-slate-200 dark:border-slate-800 text-slate-600 dark:text-slate-400"
                  >
                    <FaLinkedin className="w-4.5 h-4.5" />
                  </a>
                </div>
              </div>

              <Button
                href="/resume.pdf"
                download="Abhishek_Singh_Resume.pdf"
                variant="primary"
                size="md"
                icon={Download}
                className="w-full mt-2"
              >
                Download Resume
              </Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
