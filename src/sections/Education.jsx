import React from 'react';
import { motion } from 'framer-motion';
import Card from '../components/Card';
import Badge from '../components/Badge';
import { GraduationCap, Landmark, Calendar, MapPin } from 'lucide-react';

const educationData = [
  {
    institution: 'IIT Jodhpur',
    degree: 'Online BSc in Applied AI & Data Science',
    duration: '2025 - 2029',
    location: 'Jodhpur, India (Remote)',
    description: 'Specializing in mathematics for machine learning, data structures, relational databases, data preprocessing, analytics, and building applied neural models.',
    highlights: [
      'Foundations of Machine Learning & Statistics',
      'Data Warehousing, SQL & Python Pipelines',
      'Neural Networks & Natural Language Processing',
      'Hands-on projects with predictive analytics',
    ],
    accent: 'cyan',
  },
  {
    institution: 'LeapStart School of Technology',
    degree: 'Software Development & Tech Fundamentals',
    duration: '2023 - 2024',
    location: 'India',
    description: 'Immersive curriculum focused on full-stack web architectures, client-server models, styling systems, system design concepts, and development best practices.',
    highlights: [
      'Full Stack Javascript Architecture (MERN)',
      'Relational Database Modeling & Queries',
      'Modern CSS paradigms (Tailwind, Flexbox, Grids)',
      'Git workflows & source control management',
    ],
    accent: 'violet',
  },
];

const Education = () => {
  return (
    <section id="education" className="relative py-24 sm:py-32 bg-slate-950/20">
      {/* Background ambient light */}
      <div className="absolute top-[20%] left-[5%] w-72 h-72 rounded-full bg-primary-500/5 blur-3xl pointer-events-none" />
      <div className="absolute bottom-[20%] right-[5%] w-80 h-80 rounded-full bg-accent-cyan/5 blur-3xl pointer-events-none" />

      <div className="max-w-4xl mx-auto px-6">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16 sm:mb-20">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full border border-primary-500/10 dark:border-primary-500/20 bg-primary-500/5 text-primary-600 dark:text-primary-400 text-xs font-semibold mb-4"
          >
            <GraduationCap className="w-3.5 h-3.5" />
            <span>Academic Pathway</span>
          </motion.div>
          
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white"
          >
            Education
          </motion.h2>
          <div className="w-12 h-1 bg-gradient-to-r from-primary-500 to-accent-cyan rounded-full mt-4" />
        </div>

        {/* Timeline Path */}
        <div className="relative border-l border-slate-200 dark:border-slate-800 ml-4 md:ml-6 pl-8 md:pl-10 space-y-12">
          {educationData.map((edu, idx) => {
            const glowColors = {
              cyan: 'rgba(6, 182, 212, 0.12)',
              violet: 'rgba(139, 92, 246, 0.12)',
            };
            return (
              <div key={edu.institution} className="relative">
                {/* Timeline node icon */}
                <motion.div
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ type: 'spring', stiffness: 300, delay: idx * 0.1 }}
                  className={`absolute -left-[53px] md:-left-[61px] top-1.5 w-10 h-10 rounded-full border ${
                    edu.accent === 'cyan'
                      ? 'border-cyan-500 bg-cyan-950/80 text-cyan-400'
                      : 'border-violet-500 bg-violet-950/80 text-violet-400'
                  } flex items-center justify-center shadow-lg z-10`}
                >
                  <Landmark className="w-5 h-5" />
                </motion.div>

                {/* Card details */}
                <Card
                  glowColor={glowColors[edu.accent]}
                  delay={idx * 0.15}
                  className="p-6 md:p-8 flex flex-col gap-4 relative overflow-hidden"
                >
                  {/* Glowing background hint */}
                  <div className={`absolute top-0 right-0 w-24 h-24 bg-gradient-to-br ${
                    edu.accent === 'cyan' ? 'from-cyan-500/5 to-cyan-500/0' : 'from-violet-500/5 to-violet-500/0'
                  } rounded-bl-3xl pointer-events-none`} />

                  {/* Header metadata */}
                  <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-2.5">
                    <div>
                      <h3 className="text-lg md:text-xl font-bold text-slate-850 dark:text-white">
                        {edu.degree}
                      </h3>
                      <h4 className={`text-sm font-semibold mt-1 ${
                        edu.accent === 'cyan' ? 'text-cyan-500' : 'text-violet-500'
                      }`}>
                        {edu.institution}
                      </h4>
                    </div>

                    <div className="flex flex-col items-start md:items-end gap-1.5 text-xs text-slate-500 dark:text-slate-400">
                      <span className="flex items-center gap-1.5 font-semibold">
                        <Calendar className="w-3.5 h-3.5" />
                        {edu.duration}
                      </span>
                      <span className="flex items-center gap-1.5">
                        <MapPin className="w-3.5 h-3.5" />
                        {edu.location}
                      </span>
                    </div>
                  </div>

                  {/* Core description */}
                  <p className="text-slate-650 dark:text-slate-350 text-sm leading-relaxed">
                    {edu.description}
                  </p>

                  {/* Syllabus / Highlights pills */}
                  <div className="space-y-3 pt-2">
                    <h5 className="text-[10px] uppercase font-bold tracking-widest text-slate-500 dark:text-slate-450">
                      Key Highlights & Coursework
                    </h5>
                    <div className="flex flex-wrap gap-2">
                      {edu.highlights.map((item) => (
                        <Badge key={item} color={edu.accent}>
                          {item}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </Card>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Education;
