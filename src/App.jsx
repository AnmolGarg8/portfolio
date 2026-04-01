import React, { useState, useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Components
import Loader from './components/Loader';
import Navbar from './components/Navbar';
import SocialSidebar from './components/SocialSidebar';
import ResumeButton from './components/ResumeButton';
import CustomCursor from './components/CustomCursor';
import ScrollProgress from './components/ScrollProgress';

// Sections
import Hero from './sections/Hero';
import About from './sections/About';
import Skills from './sections/Skills';
import WhatIDo from './sections/WhatIDo';
import Projects from './sections/Projects';
import Achievement from './sections/Achievement';
import Contact from './sections/Contact';
import Footer from './sections/Footer';

// Register GSAP plugins
gsap.registerPlugin(ScrollTrigger);

function App() {
  const [loading, setLoading] = useState(true);

  const onLoaderComplete = () => {
    setLoading(false);
  };

  useEffect(() => {
    if (!loading) {
      // Initialize global animations after loader is finished
      const tl = gsap.timeline({ delay: 0.2 });

      tl.from('.hero-eyebrow', { 
        opacity: 0, 
        y: 20, 
        duration: 0.5 
      })
      .from('.word', { 
        opacity: 0, 
        y: 80, 
        skewY: 3, 
        stagger: 0.15, 
        duration: 0.8, 
        ease: 'power4.out' 
      }, '-=0.2')
      .from('.hero-role', { 
        opacity: 0, 
        x: -30, 
        duration: 0.6 
      }, '-=0.4')
      .from('.hero-meta', { 
        opacity: 0, 
        duration: 0.5 
      }, '-=0.3')
      .from('.hero-ctas > *', { 
        opacity: 0, 
        y: 20, 
        stagger: 0.1, 
        duration: 0.5 
      }, '-=0.2')
      .from('.hero-visual', { 
        opacity: 0, 
        scale: 0.9, 
        duration: 1.2, 
        ease: 'power3.out' 
      }, '-=0.8');

      // Refresh ScrollTrigger after animations mount
      setTimeout(() => {
        ScrollTrigger.refresh();
      }, 500);
    }
  }, [loading]);

  return (
    <div className="app-container">
      <CustomCursor />
      <ScrollProgress />
      {loading ? (
        <Loader onComplete={onLoaderComplete} />
      ) : (
        <>
          <Navbar />
          <SocialSidebar />
          <ResumeButton />
          
          <main>
            <Hero />
            <About />
            <Skills />
            <WhatIDo />
            <Projects />
            <Achievement />
            <Contact />
          </main>
          
          <Footer />
        </>
      )}
    </div>
  );
}

export default App;
