import React, { useEffect } from 'react';

// Components
import Navbar from './components/Navbar';
import CustomCursor from './components/CustomCursor';

// Sections
import Hero from './sections/Hero';
import About from './sections/About';
import Skills from './sections/Skills';
import WhatIDo from './sections/WhatIDo';
import Projects from './sections/Projects';
import Achievement from './sections/Achievement';
import Contact from './sections/Contact';

const SocialSidebar = () => {
  const icons = [
    { name: 'GitHub', icon: '⌥', href: 'https://github.com/AnmolGarg8' },
    { name: 'LinkedIn', icon: '◈', href: 'https://linkedin.com/in/anmol-garg' },
    { name: 'Email', icon: '✉', href: 'mailto:anmolgarg1605@gmail.com' }
  ];

  return (
    <div style={{
      position: 'fixed',
      left: '2rem',
      top: '50%',
      transform: 'translateY(-50%)',
      display: 'flex',
      flexDirection: 'column',
      gap: '1.2rem',
      zIndex: 1000
    }}>
      {icons.map((item, i) => (
        <a 
          key={i} 
          href={item.href} 
          target="_blank" 
          rel="noopener noreferrer"
          style={{
            width: '42px',
            height: '42px',
            borderRadius: '50%',
            background: '#0a0a14',
            border: '1px solid rgba(255, 255, 255, 0.1)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: 'rgba(255, 255, 255, 0.4)',
            transition: '0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275)'
          }}
          className="sidebar-icon"
        >
          <span style={{ fontSize: '1rem' }}>{item.icon}</span>
        </a>
      ))}
      <style>{`
        .sidebar-icon:hover {
          border-color: #7c3aed;
          color: #a78bfa;
          box-shadow: 0 0 20px rgba(124, 58, 237, 0.3);
          transform: scale(1.1) rotate(5deg);
        }
      `}</style>
    </div>
  );
};

function App() {
  useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('active');
        }
      });
    }, observerOptions);

    const revealElements = document.querySelectorAll('.reveal');
    revealElements.forEach(el => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <div className="portfolio-root" style={{ background: '#080810', minHeight: '100vh' }}>
      <CustomCursor />
      <Navbar />
      <SocialSidebar />
      
      <main>
        <Hero />
        <About />
        <Skills />
        <WhatIDo />
        <Projects />
        <Achievement />
        <Contact />
      </main>

      <footer style={{ 
        padding: '5rem 10vw', 
        borderTop: '1px solid rgba(255, 255, 255, 0.05)',
        textAlign: 'center',
        background: '#080810'
      }}>
        <div style={{ fontFamily: 'DM Mono', fontSize: '0.7rem', color: 'rgba(255, 255, 255, 0.3)', letterSpacing: '0.15em' }}>
          © 2026 ANMOL GARG — CRAFTED WITH DEPTH & PRECISION
        </div>
      </footer>
    </div>
  );
}

export default App;
