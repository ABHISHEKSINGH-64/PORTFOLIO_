import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Card from '../components/Card';
import Badge from '../components/Badge';
import Button from '../components/Button';
import { FolderGit2, ExternalLink, X, ChevronRight, CheckCircle2 } from 'lucide-react';
import { FaGithub } from 'react-icons/fa';

const projectsData = [
  {
    id: 1,
    title: 'Mana Seva',
    category: 'AI & Data Science',
    shortDesc: 'AI-powered citizen assistance platform inspired by MeeSeva, guiding citizens through government services, scholarships, Aadhaar, Voter ID, and passport documentation.',
    longDesc: 'Mana Seva is a digital-first assistance platform designed to simplify complex bureaucratic workflows for citizens. It leverages AI models to parse policies, guidelines, and document structures for services such as Aadhaar registrations, passport issuance, banking operations, and local health schemes. The platform provides interactive step-by-step assistance, removing confusion and reducing citizen friction.',
    tags: ['React', 'Node.js', 'PostgreSQL', 'Applied AI', 'Tailwind CSS'],
    features: [
      'AI-powered contextual chat guidance for citizen query routing.',
      'Comprehensive indexing of 50+ central and state government service forms.',
      'Eligibility checker tool for scholarships, health benefits, and loan allocations.',
      'Offline-friendly local utility catalog mapping local service centers.',
    ],
    github: 'https://github.com/ABHISHEKSINGH-64',
    demo: 'https://github.com/ABHISHEKSINGH-64',
    glowColor: 'rgba(6, 182, 212, 0.15)', // cyan glow
    accentColor: 'cyan',
  },
  {
    id: 2,
    title: 'Blood Bank Management System',
    category: 'Web Development',
    shortDesc: 'A cohesive digital ecosystem linking blood donors, medical recipients, and bank inventories with real-time tracking, searches, and emergency request flags.',
    longDesc: 'A full-stack database application designed to bridge the critical gap between blood centers, voluntary donors, and emergency recipients. The application maintains an updated stock ledger of blood products categorized by type and coordinates dispatch logs. Featuring real-time notification alerts, donor screening questionnaires, and database inventory verification workflows.',
    tags: ['React', 'PHP', 'PostgreSQL', 'Node.js', 'Tailwind CSS'],
    features: [
      'Donor registration and screening workflow logs.',
      'Real-time blood stock level monitoring counters.',
      'Location-based search functionality for finding blood banks and donor groups.',
      'One-click emergency broadcast flags for critical blood type shortages.',
    ],
    github: 'https://github.com/ABHISHEKSINGH-64',
    demo: 'https://github.com/ABHISHEKSINGH-64',
    glowColor: 'rgba(139, 92, 246, 0.15)', // violet glow
    accentColor: 'violet',
  },
];

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState('All');
  const [selectedProject, setSelectedProject] = useState(null);

  const filteredProjects = activeFilter === 'All'
    ? projectsData
    : projectsData.filter((p) => p.category === activeFilter);

  return (
    <section id="projects" className="relative py-24 sm:py-32">
      {/* Background radial effects */}
      <div className="absolute top-[40%] right-[10%] w-96 h-96 rounded-full bg-primary-600/5 dark:bg-primary-500/5 blur-3xl pointer-events-none" />
      <div className="absolute bottom-[30%] left-[10%] w-80 h-80 rounded-full bg-accent-violet/5 dark:bg-accent-violet/5 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full border border-primary-500/10 dark:border-primary-500/20 bg-primary-500/5 text-primary-600 dark:text-primary-400 text-xs font-semibold mb-4"
          >
            <FolderGit2 className="w-3.5 h-3.5" />
            <span>My Engineering Output</span>
          </motion.div>
          
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white"
          >
            Featured Projects
          </motion.h2>
          <div className="w-12 h-1 bg-gradient-to-r from-primary-500 to-accent-cyan rounded-full mt-4" />
        </div>

        {/* Filter Pill Tab bar */}
        <div className="flex items-center justify-center gap-2 mb-12">
          {['All', 'AI & Data Science', 'Web Development'].map((filter) => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={`px-4 py-2 text-xs font-bold rounded-xl transition-all duration-300 ${
                activeFilter === filter
                  ? 'bg-slate-900 text-white dark:bg-slate-100 dark:text-slate-900 shadow-md'
                  : 'text-slate-600 dark:text-slate-400 hover:text-slate-800 dark:hover:text-white'
              }`}
            >
              {filter}
            </button>
          ))}
        </div>

        {/* Projects Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 20 }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
              >
                <Card
                  glowColor={project.glowColor}
                  className="flex flex-col h-full justify-between"
                >
                  <div className="space-y-4">
                    {/* Header */}
                    <div className="flex items-start justify-between">
                      <span className="text-[10px] uppercase font-bold tracking-widest text-primary-500 dark:text-primary-400">
                        {project.category}
                      </span>
                      <div className="flex gap-2">
                        <a
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="p-2 rounded-lg border border-slate-200 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-950/20 text-slate-500 hover:text-slate-800 dark:hover:text-white transition-colors"
                        >
                          <FaGithub className="w-4 h-4" />
                        </a>
                      </div>
                    </div>

                    {/* Title */}
                    <h3 className="text-xl font-bold text-slate-800 dark:text-white group-hover:text-primary-500 dark:group-hover:text-primary-400 transition-colors">
                      {project.title}
                    </h3>

                    {/* Description */}
                    <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                      {project.shortDesc}
                    </p>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-2 pt-2">
                      {project.tags.map((tag) => (
                        <Badge key={tag} color={project.accentColor}>
                          {tag}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  {/* Actions */}
                  <div className="flex items-center gap-4 mt-8 pt-4 border-t border-slate-200/50 dark:border-slate-800/40">
                    <Button
                      onClick={() => setSelectedProject(project)}
                      variant="secondary"
                      size="sm"
                      icon={ChevronRight}
                      iconPosition="right"
                      className="w-full sm:w-auto"
                    >
                      View Details
                    </Button>
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-xs font-semibold text-slate-600 hover:text-primary-500 dark:text-slate-400 dark:hover:text-primary-450 transition-colors py-2 px-1 ml-auto"
                    >
                      <span>Repository</span>
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                  </div>
                </Card>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>

      {/* Slide Drawer Modal overlay for Project Details */}
      <AnimatePresence>
        {selectedProject && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.5 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedProject(null)}
              className="fixed inset-0 z-50 bg-black cursor-pointer"
            />

            {/* Sliding Drawer */}
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 220 }}
              className="fixed right-0 top-0 bottom-0 z-50 w-full sm:max-w-xl md:max-w-2xl bg-white dark:bg-[#060a16] border-l border-slate-200 dark:border-slate-800 shadow-2xl overflow-y-auto"
            >
              {/* Drawer Container */}
              <div className="p-8 md:p-10 flex flex-col h-full justify-between">
                <div>
                  {/* Top Bar */}
                  <div className="flex justify-between items-center mb-8 border-b border-slate-200/55 dark:border-slate-800/60 pb-5">
                    <div className="flex flex-col">
                      <span className="text-[10px] uppercase font-bold tracking-widest text-primary-500 dark:text-primary-400">
                        {selectedProject.category}
                      </span>
                      <h3 className="text-2xl font-bold text-slate-900 dark:text-white mt-1">
                        {selectedProject.title}
                      </h3>
                    </div>
                    <button
                      onClick={() => setSelectedProject(null)}
                      className="p-2 rounded-xl bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-slate-500 dark:text-slate-400 hover:text-slate-850 dark:hover:text-white hover:scale-105 transition-all duration-200 outline-none"
                    >
                      <X className="w-5 h-5" />
                    </button>
                  </div>

                  {/* Body description */}
                  <div className="space-y-6">
                    <div>
                      <h4 className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-2">
                        Project Overview
                      </h4>
                      <p className="text-slate-600 dark:text-slate-350 text-sm leading-relaxed">
                        {selectedProject.longDesc}
                      </p>
                    </div>

                    {/* Features checklist */}
                    <div>
                      <h4 className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-3">
                        Key Features & Capabilities
                      </h4>
                      <ul className="space-y-2.5">
                        {selectedProject.features.map((feat, idx) => (
                          <li key={idx} className="flex gap-2.5 items-start text-slate-600 dark:text-slate-350 text-sm">
                            <CheckCircle2 className="w-4.5 h-4.5 text-emerald-500 shrink-0 mt-0.5" />
                            <span>{feat}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Tech Stack Pills */}
                    <div>
                      <h4 className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-3">
                        Technologies Leveraged
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {selectedProject.tags.map((tag) => (
                          <Badge key={tag} color={selectedProject.accentColor}>
                            {tag}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Bottom Action buttons */}
                <div className="flex flex-col sm:flex-row gap-4 border-t border-slate-200/55 dark:border-slate-800/60 pt-6 mt-12">
                  <Button
                    href={selectedProject.github}
                    variant="primary"
                    className="flex-1"
                    icon={FaGithub}
                  >
                    View Source Code
                  </Button>
                  <Button
                    href={selectedProject.demo}
                    variant="secondary"
                    className="flex-1"
                    icon={ExternalLink}
                    iconPosition="right"
                  >
                    Live Repository
                  </Button>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Projects;
