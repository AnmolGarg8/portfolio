import { useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Experience from './components/Experience';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Achievements from './components/Achievements';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Cursor from './components/Cursor';
import Preloader from './components/Preloader';

import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

function App() {
  
  useEffect(() => {
    // Reveal section dividers
    const lines = document.querySelectorAll('.section-divider-line');
    lines.forEach((line) => {
      gsap.fromTo(line, 
        { scaleX: 0, transformOrigin: "left center" },
        {
          scaleX: 1,
          scrollTrigger: {
            trigger: line,
            start: "top 85%",
            end: "bottom center",
            scrub: 1,
          }
        }
      );
    });
  }, []);

  return (
    <div className="relative min-h-screen font-body text-white bg-dark">
      <div className="noise-bg pointer-events-none z-50"></div>
      
      <Cursor />
      <Preloader />
      
      <Navbar />

      <main className="relative z-10 w-full flex flex-col items-center">
        <Hero />
        
        <div className="w-full h-px bg-gradient-to-r from-transparent via-cyan-glow to-transparent opacity-30 section-divider-line my-10"></div>
        <About />
        
        <div className="w-full h-px bg-gradient-to-r from-transparent via-cyan-glow to-transparent opacity-30 section-divider-line my-10"></div>
        <Experience />
        
        <div className="w-full h-px bg-gradient-to-r from-transparent via-cyan-glow to-transparent opacity-30 section-divider-line my-10"></div>
        <Skills />
        
        <div className="w-full h-px bg-gradient-to-r from-transparent via-cyan-glow to-transparent opacity-30 section-divider-line my-10"></div>
        <Projects />
        
        <div className="w-full h-px bg-gradient-to-r from-transparent via-gold-pulse to-transparent opacity-30 section-divider-line my-10"></div>
        <Achievements />
        
        <div className="w-full h-px bg-gradient-to-r from-transparent via-cyan-glow to-transparent opacity-30 section-divider-line my-10"></div>
        <Contact />
      </main>

      <Footer />
    </div>
  );
}

export default App;
