import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Card from '../components/Card';
import Badge from '../components/Badge';
import { Search, Code2, Database as DbIcon, Terminal as TermIcon, Settings, Cpu } from 'lucide-react';
import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaNodeJs,
  FaPhp,
  FaPython,
  FaGitAlt,
  FaGithub,
  FaLinux,
  FaServer,
  FaCode,
} from 'react-icons/fa';
import {
  SiTailwindcss,
  SiPostgresql,
  SiVercel,
} from 'react-icons/si';

const skillsData = [
  // Frontend
  { name: 'HTML5', category: 'Frontend', level: 95, icon: FaHtml5, color: 'rose' },
  { name: 'CSS3', category: 'Frontend', level: 90, icon: FaCss3Alt, color: 'cyan' },
  { name: 'JavaScript', category: 'Frontend', level: 90, icon: FaJs, color: 'amber' },
  { name: 'React', category: 'Frontend', level: 85, icon: FaReact, color: 'cyan' },
  { name: 'Tailwind CSS', category: 'Frontend', level: 90, icon: SiTailwindcss, color: 'cyan' },
  
  // Backend
  { name: 'Node.js', category: 'Backend', level: 80, icon: FaNodeJs, color: 'emerald' },
  { name: 'PHP', category: 'Backend', level: 75, icon: FaPhp, color: 'violet' },
  
  // Database
  { name: 'PostgreSQL', category: 'Database', level: 80, icon: SiPostgresql, color: 'cyan' },
  
  // Programming Languages
  { name: 'JavaScript', category: 'Languages', level: 90, icon: FaJs, color: 'amber' },
  { name: 'Python', category: 'Languages', level: 85, icon: FaPython, color: 'violet' },
  { name: 'PHP', category: 'Languages', level: 75, icon: FaPhp, color: 'violet' },
  
  // Tools & Technologies
  { name: 'Git', category: 'Tools', level: 85, icon: FaGitAlt, color: 'rose' },
  { name: 'GitHub', category: 'Tools', level: 90, icon: FaGithub, color: 'slate' },
  { name: 'XAMPP', category: 'Tools', level: 80, icon: FaServer, color: 'amber' },
  { name: 'VS Code', category: 'Tools', level: 95, icon: FaCode, color: 'cyan' },
  { name: 'Vercel', category: 'Tools', level: 85, icon: SiVercel, color: 'slate' },
  { name: 'Linux', category: 'Tools', level: 75, icon: FaLinux, color: 'slate' },
];

const categories = ['All', 'Frontend', 'Backend', 'Languages', 'Database', 'Tools'];

const Skills = () => {
  const [activeTab, setActiveTab] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');

  // Remove duplicates when displaying "All" (e.g. JavaScript & PHP are in both Languages and Frontend/Backend)
  const getFilteredSkills = () => {
    let filtered = skillsData;
    
    // Filter by tab
    if (activeTab !== 'All') {
      filtered = skillsData.filter((skill) => skill.category === activeTab);
    } else {
      // De-duplicate skills by name for 'All' tab
      const uniqueNames = new Set();
      filtered = skillsData.filter((skill) => {
        if (uniqueNames.has(skill.name)) {
          return false;
        }
        uniqueNames.add(skill.name);
        return true;
      });
    }

    // Filter by search query
    if (searchQuery.trim()) {
      filtered = filtered.filter((skill) =>
        skill.name.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }

    return filtered;
  };

  const filteredSkills = getFilteredSkills();

  const getGlowColor = (color) => {
    switch (color) {
      case 'rose': return 'rgba(244, 63, 94, 0.15)';
      case 'cyan': return 'rgba(6, 182, 212, 0.15)';
      case 'amber': return 'rgba(245, 158, 11, 0.15)';
      case 'emerald': return 'rgba(16, 185, 129, 0.15)';
      case 'violet': return 'rgba(139, 92, 246, 0.15)';
      default: return 'rgba(148, 163, 184, 0.15)';
    }
  };

  const getIconColor = (color) => {
    switch (color) {
      case 'rose': return 'text-rose-500';
      case 'cyan': return 'text-cyan-400';
      case 'amber': return 'text-amber-500';
      case 'emerald': return 'text-emerald-500';
      case 'violet': return 'text-violet-400';
      default: return 'text-slate-400';
    }
  };

  const getProgressGradient = (color) => {
    switch (color) {
      case 'rose': return 'from-rose-500 to-rose-400';
      case 'cyan': return 'from-cyan-500 to-cyan-400';
      case 'amber': return 'from-amber-500 to-amber-400';
      case 'emerald': return 'from-emerald-500 to-emerald-400';
      case 'violet': return 'from-violet-500 to-violet-400';
      default: return 'from-slate-500 to-slate-400';
    }
  };

  return (
    <section id="skills" className="relative py-24 sm:py-32 bg-slate-950/20">
      <div className="absolute top-[20%] left-[2%] w-80 h-80 rounded-full bg-primary-500/5 dark:bg-primary-500/5 blur-3xl pointer-events-none" />

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
            <Cpu className="w-3.5 h-3.5" />
            <span>Tech Stack & Competencies</span>
          </motion.div>
          
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white"
          >
            Skills & Technologies
          </motion.h2>
          <div className="w-12 h-1 bg-gradient-to-r from-primary-500 to-accent-cyan rounded-full mt-4" />
        </div>

        {/* Search and Filters Controls */}
        <div className="flex flex-col md:flex-row gap-5 items-center justify-between mb-12">
          {/* Category Tabs */}
          <div className="flex flex-wrap items-center gap-2 p-1.5 rounded-2xl glass-card-light dark:glass-card-dark border border-slate-200/50 dark:border-slate-800/40 w-full md:w-auto">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveTab(cat)}
                className={`px-4 py-2 text-xs font-bold rounded-xl transition-all duration-300 ${
                  activeTab === cat
                    ? 'bg-slate-900 text-white dark:bg-slate-100 dark:text-slate-900 shadow-md'
                    : 'text-slate-600 dark:text-slate-400 hover:text-slate-800 dark:hover:text-white'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Search Box */}
          <div className="relative w-full md:w-72">
            <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4.5 h-4.5 text-slate-500 dark:text-slate-400" />
            <input
              type="text"
              placeholder="Search technologies..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2.5 rounded-2xl glass-card-light dark:glass-card-dark border border-slate-200/60 dark:border-slate-800/50 bg-white/40 dark:bg-slate-950/40 text-slate-800 dark:text-slate-100 placeholder-slate-400 dark:placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-primary-500/50 text-sm transition-all"
            />
          </div>
        </div>

        {/* Skills Cards Grid */}
        <motion.div
          layout
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6"
        >
          <AnimatePresence mode="popLayout">
            {filteredSkills.map((skill, index) => {
              const SkillIcon = skill.icon || Code2;
              return (
                <motion.div
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.4, delay: index * 0.03 }}
                  key={`${skill.name}-${skill.category}`}
                >
                  <Card
                    hoverGlow={true}
                    glowColor={getGlowColor(skill.color)}
                    className="p-5 flex flex-col justify-between h-36"
                  >
                    <div className="flex justify-between items-start">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-xl bg-slate-50/50 dark:bg-slate-900 border border-slate-200/50 dark:border-slate-800 flex items-center justify-center shadow-sm">
                          <SkillIcon className={`w-5 h-5 ${getIconColor(skill.color)}`} />
                        </div>
                        <div>
                          <h3 className="font-bold text-slate-850 dark:text-slate-100 text-sm">
                            {skill.name}
                          </h3>
                          <span className="text-[10px] text-slate-500 uppercase tracking-wider">
                            {skill.category}
                          </span>
                        </div>
                      </div>
                      <span className="text-xs font-mono font-semibold text-slate-400 dark:text-slate-500">
                        {skill.level}%
                      </span>
                    </div>

                    <div className="space-y-1.5 mt-auto">
                      <div className="h-1.5 w-full bg-slate-100 dark:bg-slate-800/40 rounded-full overflow-hidden">
                        <motion.div
                          initial={{ width: 0 }}
                          whileInView={{ width: `${skill.level}%` }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.8, delay: 0.2 }}
                          className={`h-full bg-gradient-to-r ${getProgressGradient(skill.color)} rounded-full`}
                        />
                      </div>
                    </div>
                  </Card>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </motion.div>

        {/* Empty Search Fallback */}
        {filteredSkills.length === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="flex flex-col items-center justify-center py-20 text-center"
          >
            <div className="w-16 h-16 rounded-2xl bg-slate-900/50 border border-slate-800 flex items-center justify-center text-slate-500 mb-4">
              <Search className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-bold text-slate-700 dark:text-slate-350">
              No matching skills found
            </h3>
            <p className="text-xs text-slate-500 max-w-xs mt-1">
              Try searching for common terms like "React", "Python", "SQL", or check another tab.
            </p>
          </motion.div>
        )}
      </div>
    </section>
  );
};

export default Skills;
