import { useEffect } from 'react';
import { Canvas } from '@react-three/fiber';
import { Robot } from './components/Robot';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Projects from './components/Projects';
import Achievements from './components/Achievements';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Cursor from './components/Cursor';

import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { motion } from 'framer-motion';

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

    // Staggered fade ups
    const fadeUps = document.querySelectorAll('.gsap-fade-up');
    fadeUps.forEach((el) => {
      gsap.fromTo(el, 
        { y: 60, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: el,
            start: "top 85%",
          }
        }
      );
    });

  }, []);

  return (
    <div className="relative min-h-screen font-body text-white w-full overflow-x-hidden bg-[#07070F]">
      <Cursor />
      
      {/* Global Persisting 3D Context */}
      <div className="fixed inset-0 z-0 pointer-events-none opacity-0 animate-[fadeIn_1s_ease-in-out_forwards]">
         <Canvas camera={{ position: [0, 0, 6], fov: 50 }} dpr={[1, 2]}>
            <ambientLight intensity={0.5} color="#0a0a1a" />
            <Robot />
         </Canvas>
      </div>

      <Navbar />

      <main className="relative z-10 w-full flex flex-col items-center">
        <Hero />
        
        <div className="w-full h-px bg-white/10 section-divider-line my-10"></div>
        <About />
        
        <div className="w-full h-px bg-white/10 section-divider-line my-10"></div>
        <Services />
        
        <div className="w-full h-px bg-white/10 section-divider-line my-10"></div>
        <Projects />
        
        <div className="w-full h-px bg-gradient-to-r from-transparent via-gold-pulse to-transparent opacity-30 section-divider-line my-10"></div>
        <Achievements />
        
        <div className="w-full h-px bg-white/10 section-divider-line my-10"></div>
        <Contact />
      </main>

      <Footer />
      
      <style>{`
         @keyframes fadeIn {
            from { opacity: 0; }
            to { opacity: 1; }
         }
      `}</style>
    </div>
  );
}

export default App;
