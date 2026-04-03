import { useEffect, useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './sections/Hero';
import About from './sections/About';
import Skills from './sections/Skills';
import Projects from './sections/Projects';
import Achievements from './sections/Achievements';
import Education from './sections/Education';
import Contact from './sections/Contact';
import CursorGlow from './components/CursorGlow';
import ScrollTimeline from './components/ScrollTimeline';
import { motion, AnimatePresence } from 'framer-motion';

function App() {
  const [scrollWidth, setScrollWidth] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const winScroll = document.body.scrollTop || document.documentElement.scrollTop;
      const height = document.documentElement.scrollHeight - window.innerHeight;
      const scrolled = (winScroll / height) * 100;
      setScrollWidth(scrolled);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Intersection Observer for section entrance
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('section-visible');
        }
      });
    }, { threshold: 0.15 });

    const sections = document.querySelectorAll('section');
    sections.forEach(section => observer.observe(section));

    return () => sections.forEach(section => observer.unobserve(section));
  }, []);

  return (
    <div className="relative min-h-screen">
      <div className="bg-grid" />
      <div 
        className="scroll-progress-bar" 
        style={{ width: `${scrollWidth}%` }}
      />
      <ScrollTimeline />
      
      <CursorGlow />
      <Navbar />
      
      <main className="lg:pl-32"> {/* Offset content slightly on desktop for the left timeline */}
        <section-wrapper>
          <Hero />
          <About />
          <Skills />
          <Projects />
          <Achievements />
          <Education />
          <Contact />
        </section-wrapper>
      </main>

      <footer className="py-12 border-t border-[var(--glass-border)] bg-black/40 backdrop-blur-md">
        <div className="section-container flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="text-center md:text-left">
            <h4 className="text-xl font-black text-white mb-2">Anmol Garg</h4>
            <p className="text-sm text-[var(--accent-secondary)] uppercase tracking-widest">Engineer • Developer • Innovator</p>
          </div>
          
          <div className="text-[var(--text-secondary)] text-sm font-medium">
            © {new Date().getFullYear()} Designed & Built by Anmol Garg
          </div>

          <div className="flex gap-6">
            <a href="https://github.com/AnmolGarg8" target="_blank" className="hover:text-[var(--accent-primary)] transition-colors">GitHub</a>
            <a href="https://linkedin.com/in/anmol-garg2005" target="_blank" className="hover:text-[var(--accent-primary)] transition-colors">LinkedIn</a>
          </div>
        </div>
      </footer>

      <style dangerouslySetInnerHTML={{ __html: `
        section {
          opacity: 0;
          transform: translateY(40px);
          transition: opacity 0.7s cubic-bezier(0.22, 1, 0.36, 1), transform 0.7s cubic-bezier(0.22, 1, 0.36, 1);
        }
        section.section-visible {
          opacity: 1;
          transform: translateY(0);
        }
        /* Stagger children in visible sections */
        .section-visible > * {
          animation: fadeInUpStagger 1s forwards;
        }
      `}} />
    </div>
  )
}

export default App
