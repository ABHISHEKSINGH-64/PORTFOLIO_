import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Compass, Calendar, ArrowRight, CheckCircle2, Award } from 'lucide-react';
import Card from '../components/Card';
import Badge from '../components/Badge';

const journeyData = [
  {
    year: '2025',
    title: 'Foundations & Math',
    subtitle: 'Initiating IIT Jodhpur BSc Program',
    desc: 'Focusing on mathematics, statistical metrics, Python script paradigms, and core frontend structures (HTML5/CSS3) to lay a robust computational foundation.',
    skills: ['Python Basics', 'Linear Algebra', 'Descriptive Statistics', 'HTML5 & CSS3'],
    milestone: 'Enrolled in IIT Jodhpur Online BSc Applied AI & Data Science (2025-2029)',
    color: 'cyan',
  },
  {
    year: '2026',
    title: 'Web Systems & SQL',
    subtitle: 'Full-Stack Data Engineering',
    desc: 'Exploring relational databases, SQL queries, PostgreSQL engines, React interfaces, and backend systems utilizing Node.js and PHP architectures.',
    skills: ['React Component Systems', 'Node.js & PHP APIs', 'PostgreSQL Queries', 'Tailwind CSS'],
    milestone: 'Constructed Blood Bank Management and citizen guidance platform engines.',
    color: 'violet',
  },
  {
    year: '2027',
    title: 'Machine Learning',
    subtitle: 'Applied Predictive Models',
    desc: 'Diving deep into supervised and unsupervised algorithms, training validation workflows, feature engineering, and statistical prediction systems.',
    skills: ['Scikit-Learn', 'Data Preprocessing', 'Regression Models', 'Clustering Algorithms'],
    milestone: 'Designing custom predictive database dashboard analytics.',
    color: 'emerald',
  },
  {
    year: '2028',
    title: 'Deep Learning & AI',
    subtitle: 'Neural Models & AI Integrations',
    desc: 'Engineering complex neural networks, Natural Language Processing, computer vision, and building Retrieval-Augmented Generation (RAG) assistant nodes.',
    skills: ['Neural Networks', 'NLP Foundations', 'Vector Databases', 'LLM API Integrations'],
    milestone: 'Integrating advanced LLM interfaces for enterprise search services.',
    color: 'amber',
  },
  {
    year: '2029',
    title: 'Graduation & Launch',
    subtitle: 'BSc Graduation & Core Systems Deployment',
    desc: 'Completing the IIT Jodhpur BSc curriculum, preparing production-ready deployments, testing robustness, and launching high-throughput systems.',
    skills: ['Production Deployment', 'MLOps pipelines', 'System Architectures', 'Problem Solving'],
    milestone: 'BSc in Applied AI & Data Science Degree completed.',
    color: 'rose',
  },
];

const LearningJourney = () => {
  const [selectedYear, setSelectedYear] = useState('2025');
  const activeData = journeyData.find((d) => d.year === selectedYear);

  const colors = {
    cyan: 'border-cyan-500 text-cyan-400 bg-cyan-500/10',
    violet: 'border-violet-500 text-violet-400 bg-violet-500/10',
    emerald: 'border-emerald-500 text-emerald-400 bg-emerald-500/10',
    amber: 'border-amber-500 text-amber-400 bg-amber-500/10',
    rose: 'border-rose-500 text-rose-400 bg-rose-500/10',
  };

  const glowColors = {
    cyan: 'rgba(6, 182, 212, 0.12)',
    violet: 'rgba(139, 92, 246, 0.12)',
    emerald: 'rgba(16, 185, 129, 0.12)',
    amber: 'rgba(245, 158, 11, 0.12)',
    rose: 'rgba(244, 63, 94, 0.12)',
  };

  return (
    <section id="journey" className="relative py-24 sm:py-32 bg-slate-950/20">
      <div className="absolute bottom-[20%] left-[10%] w-72 h-72 bg-primary-500/5 blur-3xl pointer-events-none" />

      <div className="max-w-5xl mx-auto px-6">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full border border-primary-500/10 dark:border-primary-500/20 bg-primary-500/5 text-primary-600 dark:text-primary-400 text-xs font-semibold mb-4">
            <Compass className="w-3.5 h-3.5" />
            <span>Academic & Skill Roadmap</span>
          </div>
          
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white">
            Learning Journey (2025 - 2029)
          </h2>
          <div className="w-12 h-1 bg-gradient-to-r from-primary-500 to-accent-cyan rounded-full mt-4" />
        </div>

        {/* Roadmap Year Pills */}
        <div className="flex justify-between items-center relative mb-12 max-w-2xl mx-auto px-4">
          {/* Horizontal connecting track line */}
          <div className="absolute left-6 right-6 top-1/2 -translate-y-1/2 h-0.5 bg-slate-200 dark:bg-slate-800 z-0" />

          {journeyData.map((d) => {
            const isActive = selectedYear === d.year;
            return (
              <button
                key={d.year}
                onClick={() => setSelectedYear(d.year)}
                className={`relative z-10 w-11 h-11 rounded-full border flex items-center justify-center font-bold text-xs transition-all duration-300 ${
                  isActive
                    ? 'border-primary-500 bg-slate-900 text-white dark:bg-white dark:text-slate-950 scale-110 shadow-lg shadow-primary-500/20'
                    : 'border-slate-200 dark:border-slate-800 bg-white dark:bg-[#030712] text-slate-500 dark:text-slate-400 hover:border-slate-400 dark:hover:border-slate-600'
                }`}
              >
                {d.year}
              </button>
            );
          })}
        </div>

        {/* Selected Roadmap Details */}
        <div className="max-w-3xl mx-auto">
          {activeData && (
            <Card
              key={activeData.year}
              glowColor={glowColors[activeData.color]}
              className="p-8 relative overflow-hidden"
            >
              {/* Year large watermark */}
              <div className="absolute -bottom-8 -right-8 text-8xl font-black text-slate-100 dark:text-slate-900/30 font-mono select-none pointer-events-none">
                {activeData.year}
              </div>

              <div className="flex flex-col gap-6 relative z-10">
                {/* Header metadata */}
                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-4">
                  <div>
                    <span className={`inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full border text-[10px] font-bold uppercase tracking-wider ${colors[activeData.color]}`}>
                      <Calendar className="w-3 h-3" />
                      Year {parseInt(activeData.year) - 2024}
                    </span>
                    <h3 className="text-xl md:text-2xl font-extrabold text-slate-850 dark:text-white mt-2">
                      {activeData.title}
                    </h3>
                    <h4 className="text-sm font-semibold text-slate-500 dark:text-slate-400 mt-1">
                      {activeData.subtitle}
                    </h4>
                  </div>
                </div>

                <p className="text-slate-600 dark:text-slate-350 text-sm leading-relaxed max-w-2xl">
                  {activeData.desc}
                </p>

                {/* Milestones indicator */}
                <div className="flex items-start gap-3 bg-slate-50/50 dark:bg-slate-950/20 rounded-xl p-4 border border-slate-200/50 dark:border-slate-800/40 max-w-2xl">
                  <Award className="w-5 h-5 text-amber-500 shrink-0 mt-0.5" />
                  <div>
                    <h5 className="text-[10px] uppercase font-bold text-slate-500 dark:text-slate-450 tracking-wider">
                      Key Program Milestone
                    </h5>
                    <p className="text-xs font-semibold text-slate-700 dark:text-slate-300 mt-0.5">
                      {activeData.milestone}
                    </p>
                  </div>
                </div>

                {/* Skills tags list */}
                <div className="space-y-3">
                  <h5 className="text-[10px] uppercase font-bold text-slate-500 dark:text-slate-450 tracking-wider">
                    Target Skills & Topics
                  </h5>
                  <div className="flex flex-wrap gap-2">
                    {activeData.skills.map((skill) => (
                      <Badge key={skill} color={activeData.color}>
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </div>
              </div>
            </Card>
          )}
        </div>
      </div>
    </section>
  );
};

export default LearningJourney;
