import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Card from '../components/Card';
import Button from '../components/Button';
import { GitCommit, Star, GitPullRequest, Code, HelpCircle, Activity } from 'lucide-react';
import { FaGithub } from 'react-icons/fa';

const GithubStats = () => {
  const [hoveredCell, setHoveredCell] = useState(null);

  // Generate 53 weeks * 7 days of simulated commits matching Python / JS development patterns
  const generateSimulatedGrid = () => {
    const days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
    const grid = [];
    const today = new Date();
    
    // Create contribution patterns
    for (let w = 0; w < 32; w++) {
      const week = [];
      for (let d = 0; d < 7; d++) {
        // Higher commits on Mon-Fri, random peaks
        let count = 0;
        const rand = Math.random();
        if (d >= 1 && d <= 5) {
          if (rand > 0.8) count = Math.floor(Math.random() * 8) + 3;
          else if (rand > 0.4) count = Math.floor(Math.random() * 4) + 1;
        } else {
          if (rand > 0.85) count = Math.floor(Math.random() * 3) + 1;
        }
        
        // Colors mapping: 0, 1-2 (low), 3-5 (med), 6+ (high)
        let level = 0;
        if (count >= 1 && count <= 2) level = 1;
        else if (count >= 3 && count <= 5) level = 2;
        else if (count >= 6) level = 3;

        // Calculate a virtual date going backward from today
        const dateObj = new Date(today);
        dateObj.setDate(today.getDate() - ((31 - w) * 7 + (6 - d)));
        const dateString = dateObj.toLocaleDateString('en-US', {
          month: 'short',
          day: 'numeric',
          year: 'numeric',
        });

        week.push({ count, level, date: dateString });
      }
      grid.push(week);
    }
    return grid;
  };

  const gridData = generateSimulatedGrid();

  const metrics = [
    { label: 'Total Commits (YTD)', value: '624', icon: GitCommit, color: 'emerald' },
    { label: 'Repositories', value: '18', icon: Code, color: 'cyan' },
    { label: 'Pull Requests', value: '42', icon: GitPullRequest, color: 'violet' },
    { label: 'Stars Earned', value: '12', icon: Star, color: 'amber' },
  ];

  const languages = [
    { name: 'Python', percent: 45, color: '#3572A5' },
    { name: 'JavaScript', percent: 35, color: '#f1e05a' },
    { name: 'PHP', percent: 20, color: '#4F5D95' },
  ];

  return (
    <section id="github" className="relative py-24 sm:py-32">
      <div className="absolute top-[30%] right-[10%] w-80 h-80 rounded-full bg-emerald-500/5 blur-3xl pointer-events-none" />

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
            <Activity className="w-3.5 h-3.5" />
            <span>Open Source Contributions</span>
          </motion.div>
          
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white"
          >
            GitHub Activity & Statistics
          </motion.h2>
          <div className="w-12 h-1 bg-gradient-to-r from-emerald-500 to-accent-cyan rounded-full mt-4" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Metrics Overview & Language Breakdown */}
          <div className="lg:col-span-5 space-y-6">
            {/* Quick Metrics Grid */}
            <div className="grid grid-cols-2 gap-4">
              {metrics.map((metric, idx) => {
                const colors = {
                  emerald: 'rgba(16, 185, 129, 0.15)',
                  cyan: 'rgba(6, 182, 212, 0.15)',
                  violet: 'rgba(139, 92, 246, 0.15)',
                  amber: 'rgba(245, 158, 11, 0.15)',
                };
                const textColors = {
                  emerald: 'text-emerald-500',
                  cyan: 'text-cyan-400',
                  violet: 'text-violet-400',
                  amber: 'text-amber-500',
                };
                return (
                  <Card
                    key={metric.label}
                    glowColor={colors[metric.color]}
                    delay={idx * 0.05}
                    className="p-5 flex flex-col gap-2"
                  >
                    <div className="flex justify-between items-center text-slate-500 dark:text-slate-450">
                      <span className="text-[10px] uppercase font-bold tracking-wider">{metric.label}</span>
                      <metric.icon className={`w-4 h-4 ${textColors[metric.color]}`} />
                    </div>
                    <span className="text-2xl font-extrabold text-slate-800 dark:text-white font-mono">
                      {metric.value}
                    </span>
                  </Card>
                );
              })}
            </div>

            {/* Language Distribution Card */}
            <Card glowColor="rgba(6, 182, 212, 0.15)" className="p-6">
              <h3 className="font-bold text-slate-850 dark:text-slate-100 text-sm mb-5 flex items-center gap-2">
                <Code className="w-4 h-4 text-cyan-400" />
                Languages Distribution
              </h3>
              
              {/* Stacked Percentage bar */}
              <div className="h-4 w-full bg-slate-100 dark:bg-slate-850 rounded-full overflow-hidden flex mb-6">
                {languages.map((lang) => (
                  <div
                    key={lang.name}
                    style={{
                      width: `${lang.percent}%`,
                      backgroundColor: lang.color,
                    }}
                    className="h-full first:rounded-l-full last:rounded-r-full transition-all hover:opacity-90"
                    title={`${lang.name}: ${lang.percent}%`}
                  />
                ))}
              </div>

              {/* Legends list */}
              <div className="space-y-3">
                {languages.map((lang) => (
                  <div key={lang.name} className="flex justify-between items-center text-xs">
                    <div className="flex items-center gap-2">
                      <span
                        className="w-3 h-3 rounded-full"
                        style={{ backgroundColor: lang.color }}
                      />
                      <span className="font-bold text-slate-700 dark:text-slate-200">{lang.name}</span>
                    </div>
                    <span className="text-slate-500 font-mono font-medium">{lang.percent}%</span>
                  </div>
                ))}
              </div>
            </Card>
          </div>

          {/* Right Column: Simulated Contribution Matrix Grid */}
          <div className="lg:col-span-7 h-full">
            <Card glowColor="rgba(16, 185, 129, 0.12)" className="p-6 flex flex-col justify-between h-full">
              <div>
                {/* Dashboard Header */}
                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-4 mb-6 pb-4 border-b border-slate-200/50 dark:border-slate-800/40">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-center font-bold text-white shadow-md shadow-primary-500/10">
                      <FaGithub className="w-5 h-5 text-emerald-400" />
                    </div>
                    <div>
                      <h4 className="font-bold text-slate-800 dark:text-slate-150 text-sm">
                        @ABHISHEKSINGH-64
                      </h4>
                      <span className="text-[10px] text-slate-500 dark:text-slate-400">
                        Public Contributions Dashboard
                      </span>
                    </div>
                  </div>
                  <Button
                    href="https://github.com/ABHISHEKSINGH-64"
                    variant="secondary"
                    size="sm"
                  >
                    View on GitHub
                  </Button>
                </div>

                {/* Calendar Grid wrapper */}
                <div className="relative overflow-x-auto pb-4">
                  <div className="flex flex-col min-w-[520px]">
                    {/* Month headers placeholder */}
                    <div className="flex text-[9px] text-slate-500 font-semibold mb-2 pl-6 gap-6">
                      <span>Oct</span>
                      <span>Nov</span>
                      <span>Dec</span>
                      <span>Jan</span>
                      <span>Feb</span>
                      <span>Mar</span>
                      <span>Apr</span>
                      <span>May</span>
                      <span>Jun</span>
                    </div>

                    <div className="flex gap-1.5 relative">
                      {/* Weekday indicators */}
                      <div className="flex flex-col justify-between text-[9px] text-slate-500 font-semibold h-[92px] pr-2 py-0.5 leading-none">
                        <span>Mon</span>
                        <span>Wed</span>
                        <span>Fri</span>
                      </div>

                      {/* Contribution squares grid */}
                      <div className="flex gap-1.5">
                        {gridData.map((week, wIdx) => (
                          <div key={wIdx} className="flex flex-col gap-1.5">
                            {week.map((cell, dIdx) => {
                              const bgColors = {
                                0: 'bg-slate-100 dark:bg-slate-900 border-slate-200 dark:border-slate-800/50',
                                1: 'bg-emerald-500/20 border-emerald-500/10 dark:bg-emerald-950/40 dark:border-emerald-900/10',
                                2: 'bg-emerald-500/50 border-emerald-500/20 dark:bg-emerald-700/60 dark:border-emerald-650/10',
                                3: 'bg-emerald-500 dark:bg-emerald-500 border-emerald-400/20',
                              };
                              return (
                                <div
                                  key={dIdx}
                                  onMouseEnter={(e) => {
                                    const rect = e.currentTarget.getBoundingClientRect();
                                    setHoveredCell({
                                      ...cell,
                                      x: rect.left + rect.width / 2,
                                      y: rect.top - 8,
                                    });
                                  }}
                                  onMouseLeave={() => setHoveredCell(null)}
                                  className={`w-2.5 h-2.5 rounded-sm border cursor-pointer transition-all duration-200 hover:scale-125 ${bgColors[cell.level]}`}
                                />
                              );
                            })}
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Tooltip Popup */}
                <AnimatePresence>
                  {hoveredCell && (
                    <motion.div
                      initial={{ opacity: 0, scale: 0.95 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.95 }}
                      style={{
                        position: 'fixed',
                        left: hoveredCell.x,
                        top: hoveredCell.y,
                        transform: 'translate(-50%, -100%)',
                      }}
                      className="z-50 pointer-events-none px-2.5 py-1.5 rounded-lg bg-slate-900 text-white text-[10px] font-semibold shadow-xl border border-slate-800 flex items-center gap-1.5"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                      <span>
                        {hoveredCell.count === 0 ? 'No' : hoveredCell.count}{' '}
                        {hoveredCell.count === 1 ? 'contribution' : 'contributions'}{' '}
                        on {hoveredCell.date}
                      </span>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* Grid Legend Footer */}
              <div className="flex justify-between items-center text-[10px] text-slate-500 dark:text-slate-400 mt-6 pt-4 border-t border-slate-200/50 dark:border-slate-800/40">
                <span className="flex items-center gap-1.5">
                  <HelpCircle className="w-3.5 h-3.5 text-slate-500" />
                  Hover over cells to see commits
                </span>
                
                <div className="flex items-center gap-1">
                  <span>Less</span>
                  <div className="w-2.5 h-2.5 rounded-sm bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-slate-800/50" />
                  <div className="w-2.5 h-2.5 rounded-sm bg-emerald-500/20 dark:bg-emerald-950/40 border border-emerald-500/10" />
                  <div className="w-2.5 h-2.5 rounded-sm bg-emerald-500/50 dark:bg-emerald-700/60 border border-emerald-500/20" />
                  <div className="w-2.5 h-2.5 rounded-sm bg-emerald-500 dark:bg-emerald-500" />
                  <span>More</span>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GithubStats;
