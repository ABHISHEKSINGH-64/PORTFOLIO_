import React from 'react';
import { motion } from 'framer-motion';
import Card from '../components/Card';
import { GraduationCap, Award, BookOpen, Heart, Laptop, Sparkles } from 'lucide-react';

const About = () => {
  const coreValues = [
    {
      icon: Laptop,
      title: 'Web Development',
      desc: 'Creating fluid user interfaces and scalable database applications using React, Node, and Tailwind.',
      color: 'cyan',
    },
    {
      icon: GraduationCap,
      title: 'Applied AI & Data Science',
      desc: 'Studying core algorithms, statistical methodologies, and neural networks at IIT Jodhpur.',
      color: 'violet',
    },
    {
      icon: Award,
      title: 'Problem Solving',
      desc: 'Committed to writing efficient algorithms and designing solutions that address real-world client concerns.',
      color: 'emerald',
    },
  ];

  return (
    <section id="about" className="relative py-24 sm:py-32">
      {/* Background decoration */}
      <div className="absolute top-[30%] right-[5%] w-72 h-72 rounded-full bg-primary-500/5 dark:bg-primary-500/5 blur-3xl pointer-events-none" />
      <div className="absolute bottom-[20%] left-[5%] w-80 h-80 rounded-full bg-accent-cyan/5 dark:bg-accent-cyan/5 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16 sm:mb-20">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full border border-primary-500/10 dark:border-primary-500/20 bg-primary-500/5 text-primary-600 dark:text-primary-400 text-xs font-semibold mb-4"
          >
            <BookOpen className="w-3.5 h-3.5" />
            <span>My Background</span>
          </motion.div>
          
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white"
          >
            About Me
          </motion.h2>
          <div className="w-12 h-1 bg-gradient-to-r from-primary-500 to-accent-cyan rounded-full mt-4" />
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Premium Student Identity Card */}
          <div className="lg:col-span-5 flex justify-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
              className="relative w-full max-w-[360px] aspect-[1.58/1] rounded-2xl glass-card-light dark:glass-card-dark border border-slate-200/60 dark:border-slate-800/40 p-6 flex flex-col justify-between shadow-xl overflow-hidden group"
            >
              {/* Decorative Card chip */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-primary-500/10 to-accent-cyan/10 rounded-full blur-2xl pointer-events-none group-hover:scale-125 transition-transform duration-500" />
              
              {/* Card Header */}
              <div className="flex justify-between items-start">
                <div>
                  <span className="text-[10px] uppercase font-bold tracking-widest text-slate-500 dark:text-slate-400">
                    IIT Jodhpur Student Card
                  </span>
                  <h3 className="text-lg font-bold text-slate-800 dark:text-white mt-0.5">
                    Abhishek Singh
                  </h3>
                </div>
                {/* Logo Representation */}
                <div className="w-8 h-8 rounded-lg bg-gradient-to-tr from-primary-600 to-accent-violet flex items-center justify-center font-bold text-white text-xs">
                  IITJ
                </div>
              </div>

              {/* Card Body */}
              <div className="my-4 space-y-2">
                <div className="flex flex-col">
                  <span className="text-[9px] uppercase tracking-wider text-slate-500 dark:text-slate-400">Program</span>
                  <span className="text-xs font-semibold text-slate-700 dark:text-slate-200">
                    BSc in Applied AI & Data Science
                  </span>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div className="flex flex-col">
                    <span className="text-[9px] uppercase tracking-wider text-slate-500 dark:text-slate-400">Batch</span>
                    <span className="text-xs font-semibold text-slate-700 dark:text-slate-200">2025 - 2029</span>
                  </div>
                  <div className="flex flex-col">
                    <span className="text-[9px] uppercase tracking-wider text-slate-500 dark:text-slate-400">Status</span>
                    <span className="text-xs font-semibold text-emerald-600 dark:text-emerald-400">Active</span>
                  </div>
                </div>
              </div>

              {/* Card Footer */}
              <div className="flex justify-between items-center border-t border-slate-200/50 dark:border-slate-800/60 pt-3">
                <span className="text-[9px] text-slate-400 dark:text-slate-500 font-mono">
                  ID: AS-IITJ-2025-064
                </span>
                <div className="flex items-center gap-1">
                  <Sparkles className="w-3 h-3 text-primary-400 animate-pulse" />
                  <span className="text-[9px] font-semibold text-primary-600 dark:text-primary-400 uppercase tracking-widest">
                    Applied AI
                  </span>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Right Column: Bio and Core Values */}
          <div className="lg:col-span-7 flex flex-col gap-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="space-y-4"
            >
              <h3 className="text-xl sm:text-2xl font-bold text-slate-800 dark:text-white">
                Fusing Web Technologies with Artificial Intelligence
              </h3>
              <p className="text-slate-600 dark:text-slate-400 leading-relaxed text-sm sm:text-base">
                I am a student at the <strong className="text-slate-800 dark:text-white">Indian Institute of Technology, Jodhpur</strong>, completing my online BSc in Applied AI & Data Science. I focus on the intersection of modern software development, data pipeline construction, and intelligent decision systems.
              </p>
              <p className="text-slate-600 dark:text-slate-400 leading-relaxed text-sm sm:text-base">
                My engineering philosophy centers on <strong className="text-slate-800 dark:text-white">building real-world applications that solve everyday problems</strong>. Whether designing blood donation networks or engineering digital citizen assistants with generative AI models, I enjoy writing clean code to create meaningful human impact.
              </p>
            </motion.div>

            {/* Core Values / Interest Pills */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mt-4">
              {coreValues.map((val, idx) => {
                const colors = {
                  cyan: 'rgba(6, 182, 212, 0.15)',
                  violet: 'rgba(139, 92, 246, 0.15)',
                  emerald: 'rgba(16, 185, 129, 0.15)',
                };
                return (
                  <Card
                    key={val.title}
                    glowColor={colors[val.color]}
                    delay={idx * 0.1}
                    className="p-5 flex flex-col gap-3 h-full"
                  >
                    <div className={`w-10 h-10 rounded-xl flex items-center justify-center bg-slate-100 dark:bg-slate-900 border border-slate-200/50 dark:border-slate-800`}>
                      <val.icon className={`w-5 h-5 ${
                        val.color === 'cyan' ? 'text-cyan-500' : val.color === 'violet' ? 'text-violet-500' : 'text-emerald-500'
                      }`} />
                    </div>
                    <h4 className="font-bold text-sm text-slate-800 dark:text-white mt-1">
                      {val.title}
                    </h4>
                    <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed">
                      {val.desc}
                    </p>
                  </Card>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
