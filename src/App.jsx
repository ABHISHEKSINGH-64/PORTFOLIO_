import React from 'react';
import { ThemeProvider } from './context/ThemeContext';
import Navbar from './components/Navbar';
import Hero from './sections/Hero';
import About from './sections/About';
import Skills from './sections/Skills';
import Projects from './sections/Projects';
import Education from './sections/Education';
import GithubStats from './sections/GithubStats';
import LearningJourney from './sections/LearningJourney';
import Contact from './sections/Contact';
import Footer from './sections/Footer';

const App = () => {
  return (
    <ThemeProvider>
      <div className="min-h-screen bg-brand-bg-light dark:bg-brand-bg-dark text-slate-800 dark:text-slate-100 font-sans antialiased overflow-x-hidden selection:bg-primary-500/30 selection:text-primary-300 transition-colors duration-300">
        
        {/* Core floating Navigation */}
        <Navbar />

        {/* Page Sections layout */}
        <main className="relative z-10">
          <Hero />
          
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <hr className="border-slate-200/50 dark:border-slate-800/40 my-0" />
            <About />
            
            <hr className="border-slate-200/50 dark:border-slate-800/40 my-0" />
            <Skills />
            
            <hr className="border-slate-200/50 dark:border-slate-800/40 my-0" />
            <Projects />
            
            <hr className="border-slate-200/50 dark:border-slate-800/40 my-0" />
            <Education />
            
            <hr className="border-slate-200/50 dark:border-slate-800/40 my-0" />
            <GithubStats />
            
            <hr className="border-slate-200/50 dark:border-slate-800/40 my-0" />
            <LearningJourney />
            
            <hr className="border-slate-200/50 dark:border-slate-800/40 my-0" />
            <Contact />
          </div>
        </main>

        {/* Global Footer */}
        <Footer />
        
      </div>
    </ThemeProvider>
  );
};

export default App;
