import React, { useState, useEffect } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';
import { ArrowRight, Terminal, Database, Sparkles, Brain } from 'lucide-react';
import Button from '../components/Button';

const titles = [
  'AI & Data Science Student',
  'Full Stack Web Developer',
  'Data Analyst & Problem Solver',
];

const Hero = () => {
  const [currentTitleIndex, setCurrentTitleIndex] = useState(0);
  const [currentText, setCurrentText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [typingSpeed, setTypingSpeed] = useState(100);

  // Custom typing animation logic
  useEffect(() => {
    let timer;
    const fullText = titles[currentTitleIndex];

    const handleType = () => {
      if (!isDeleting) {
        // Typing
        setCurrentText(fullText.substring(0, currentText.length + 1));
        setTypingSpeed(100);

        if (currentText === fullText) {
          // Pause at the end
          timer = setTimeout(() => setIsDeleting(true), 2000);
          return;
        }
      } else {
        // Deleting
        setCurrentText(fullText.substring(0, currentText.length - 1));
        setTypingSpeed(50);

        if (currentText === '') {
          setIsDeleting(false);
          setCurrentTitleIndex((prev) => (prev + 1) % titles.length);
        }
      }

      timer = setTimeout(handleType, typingSpeed);
    };

    timer = setTimeout(handleType, typingSpeed);
    return () => clearTimeout(timer);
  }, [currentText, isDeleting, currentTitleIndex, typingSpeed]);

  // Premium Mouse Trailing Interactive Background effect
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springConfig = { damping: 40, stiffness: 200, mass: 0.5 };
  const trailX = useSpring(mouseX, springConfig);
  const trailY = useSpring(mouseY, springConfig);

  const handleMouseMove = (e) => {
    const { clientX, clientY } = e;
    mouseX.set(clientX - 250); // Offset to center the glow
    mouseY.set(clientY - 250);
  };

  const handleCTA = (e, targetId) => {
    e.preventDefault();
    const element = document.getElementById(targetId);
    if (element) {
      const offsetTop = element.offsetTop - 85;
      window.scrollTo({
        top: offsetTop,
        behavior: 'smooth',
      });
    }
  };

  return (
    <section
      id="home"
      onMouseMove={handleMouseMove}
      className="relative min-h-screen flex items-center justify-center overflow-hidden py-24 sm:py-32"
    >
      {/* Decorative Interactive Grid Overlay */}
      <div className="absolute inset-0 interactive-grid-light dark:interactive-grid opacity-[0.6] pointer-events-none" />
      
      {/* Glow follows cursor (only dark mode) */}
      <motion.div
        className="absolute w-[500px] h-[500px] rounded-full bg-gradient-to-tr from-primary-500/10 to-accent-cyan/10 blur-[100px] pointer-events-none hidden dark:block"
        style={{
          left: trailX,
          top: trailY,
        }}
      />

      {/* Decorative mesh background gradients (static ambient fallback) */}
      <div className="absolute inset-0 grid-mesh-light dark:grid-mesh pointer-events-none" />

      {/* Top Floating Background Shapes */}
      <div className="absolute top-[20%] left-[10%] w-72 h-72 rounded-full bg-primary-600/5 dark:bg-primary-500/5 blur-3xl animate-float pointer-events-none" />
      <div className="absolute bottom-[20%] right-[10%] w-96 h-96 rounded-full bg-accent-cyan/5 dark:bg-accent-cyan/5 blur-3xl animate-float-delayed pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10 w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        {/* Left text column */}
        <div className="lg:col-span-7 flex flex-col items-start text-left">
          {/* Animated top micro-tag */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-primary-500/10 dark:border-primary-500/20 bg-primary-500/5 text-primary-600 dark:text-primary-400 text-xs font-semibold mb-6 shadow-glow-primary"
          >
            <Sparkles className="w-3.5 h-3.5 text-primary-500" />
            <span>Welcome to my Developer Space</span>
          </motion.div>

          {/* Name Header */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight text-slate-900 dark:text-white leading-[1.1] mb-4"
          >
            Hi, I am{' '}
            <span className="bg-gradient-to-r from-primary-500 via-primary-300 to-accent-cyan bg-clip-text text-transparent dark:text-glow-primary">
              Abhishek Singh
            </span>
          </motion.h1>

          {/* Typing Title */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="h-10 sm:h-12 flex items-center mb-6"
          >
            <span className="text-xl sm:text-2xl md:text-3xl font-bold text-slate-700 dark:text-slate-200">
              I'm a{' '}
              <span className="bg-gradient-to-r from-accent-violet to-accent-cyan bg-clip-text text-transparent border-r-2 border-primary-500 dark:border-primary-400 pr-1 animate-pulse-slow">
                {currentText}
              </span>
            </span>
          </motion.div>

          {/* About Me summary sentence */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-base sm:text-lg text-slate-600 dark:text-slate-400 max-w-xl mb-10 leading-relaxed"
          >
            I am pursuing an{' '}
            <span className="font-semibold text-slate-800 dark:text-white">
              Online BSc in Applied AI & Data Science
            </span>{' '}
            at{' '}
            <span className="font-semibold text-primary-600 dark:text-primary-400">
              IIT Jodhpur (2025-2029)
            </span>
            . I design modern full-stack web applications and build data systems to solve everyday problems.
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-wrap gap-4"
          >
            <Button
              onClick={(e) => handleCTA(e, 'projects')}
              variant="primary"
              size="lg"
              icon={ArrowRight}
              iconPosition="right"
            >
              Explore My Projects
            </Button>
            <Button
              onClick={(e) => handleCTA(e, 'contact')}
              variant="secondary"
              size="lg"
            >
              Get In Touch
            </Button>
          </motion.div>
        </div>

        {/* Right dashboard asset column */}
        <div className="lg:col-span-5 relative flex justify-center items-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="relative w-full max-w-[400px] aspect-square"
          >
            {/* Ambient outer rotating gradient ring */}
            <div className="absolute inset-0 rounded-3xl bg-gradient-to-tr from-primary-500/20 via-accent-violet/10 to-accent-cyan/20 blur-xl animate-float-delayed pointer-events-none" />

            {/* Glowing dashboard card */}
            <div className="absolute inset-0 rounded-3xl border border-slate-200/50 dark:border-slate-800/40 bg-white/40 dark:bg-[#070b19]/40 backdrop-blur-xl p-8 flex flex-col justify-between shadow-2xl dark:shadow-slate-950/50">
              {/* Header icons */}
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-1.5">
                  <div className="w-3 h-3 rounded-full bg-rose-500" />
                  <div className="w-3 h-3 rounded-full bg-amber-500" />
                  <div className="w-3 h-3 rounded-full bg-emerald-500" />
                </div>
                <Brain className="w-5 h-5 text-primary-400" />
              </div>

              {/* Center tech graphic */}
              <div className="my-6 flex flex-col items-center justify-center">
                {/* Simulated database graph nodes */}
                <div className="relative w-40 h-40 flex items-center justify-center">
                  <div className="absolute inset-0 rounded-full border border-dashed border-primary-500/20 dark:border-slate-800 animate-[spin_40s_linear_infinite]" />
                  <div className="absolute w-28 h-28 rounded-full border border-dotted border-accent-cyan/30 dark:border-slate-700 animate-[spin_20s_linear_infinite]" />
                  
                  {/* Central Node */}
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary-600 to-accent-violet flex items-center justify-center shadow-lg shadow-primary-500/30">
                    <Terminal className="w-7 h-7 text-white" />
                  </div>

                  {/* Satellite Node 1: AI */}
                  <motion.div
                    animate={{ y: [0, -6, 0] }}
                    transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                    className="absolute -top-2 left-6 w-9 h-9 rounded-xl bg-slate-900 border border-slate-800/80 shadow-md flex items-center justify-center"
                  >
                    <Sparkles className="w-4 h-4 text-cyan-400" />
                  </motion.div>

                  {/* Satellite Node 2: DB */}
                  <motion.div
                    animate={{ y: [0, 6, 0] }}
                    transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                    className="absolute -bottom-2 right-6 w-9 h-9 rounded-xl bg-slate-900 border border-slate-800/80 shadow-md flex items-center justify-center"
                  >
                    <Database className="w-4 h-4 text-emerald-400" />
                  </motion.div>
                </div>
              </div>

              {/* Bottom statistics panel */}
              <div className="space-y-3.5">
                <div className="flex justify-between items-center text-xs">
                  <span className="text-slate-500 dark:text-slate-400">Current Status:</span>
                  <span className="font-semibold text-emerald-500 flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                    Open to opportunities
                  </span>
                </div>
                <div className="h-1.5 w-full bg-slate-100 dark:bg-slate-800/50 rounded-full overflow-hidden">
                  <div className="h-full bg-gradient-to-r from-primary-500 to-accent-cyan rounded-full w-[85%]" />
                </div>
                <div className="flex justify-between text-[10px] text-slate-500">
                  <span>Data Science Core</span>
                  <span>Full Stack Dev</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
