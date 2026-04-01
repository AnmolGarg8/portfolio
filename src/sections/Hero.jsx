import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import Character from '../components/Character';

const SocialIcon = ({ path, href, active }) => (
  <a href={href} rel="noopener noreferrer" target="_blank" style={{ 
    opacity: active ? 1 : 0.45, 
    transition: 'all 0.4s cubic-bezier(0.17, 0.67, 0.83, 0.67)',
    backgroundColor: 'rgba(255, 255, 255, 0.04)',
    width: '42px',
    height: '42px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: '50%',
    border: active ? '1.8px solid #7C3AED' : '1px solid rgba(255, 255, 255, 0.1)',
    boxShadow: active ? '0 0 20px rgba(124, 58, 237, 0.5)' : 'none',
    transform: active ? 'scale(1.15)' : 'scale(1)',
    zIndex: 10
  }} onMouseEnter={e => e.currentTarget.style.opacity = 1} onMouseLeave={e => !active && (e.currentTarget.style.opacity = 0.45)}>
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d={path}></path>
    </svg>
  </a>
);

const Hero = () => {
    const heroRef = useRef(null);

    useEffect(() => {
        // We'll trust App.jsx timeline or add local reveal if needed
        // Since subagent reported target not found, let's ensure class names are exact.
    }, []);

  return (
    <section className="hero" id="home" ref={heroRef} style={{
      minHeight: '100vh',
      width: '100%',
      position: 'relative',
      overflow: 'hidden',
      background: '#050505',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      padding: '0 8rem'
    }}>
      {/* Background Spotlight Halo with Breathe-Breathe Animation */}
      <div style={{
        position: 'absolute',
        left: '50%',
        top: '50%',
        transform: 'translate(-50%, -50%)',
        width: '120vw',
        height: '110vh',
        background: 'radial-gradient(circle at center, rgba(91, 33, 182, 0.28) 0%, transparent 65%)',
        pointerEvents: 'none',
        zIndex: 0,
        animation: 'spotlight-breathe 6s infinite ease-in-out'
      }} />

      {/* Aurora light wisps streaks layer */}
      <div style={{ position: 'absolute', inset: 0, pointerEvents: 'none', zIndex: 1, opacity: 0.25 }}>
        <svg width="100%" height="100%" viewBox="0 0 1440 800" preserveAspectRatio="none">
          <filter id="wisps-glow">
            <feGaussianBlur in="SourceGraphic" stdDeviation="15" />
          </filter>
          <path d="M-200,600 Q400,200 1640,600" stroke="#7C3AED" strokeWidth="3" fill="none" filter="url(#wisps-glow)" style={{ animation: 'wisps-float 15s infinite alternate linear' }} />
          <path d="M1640,250 Q1000,550 -200,250" stroke="#A855F7" strokeWidth="2.5" fill="none" filter="url(#wisps-glow)" style={{ animation: 'wisps-float 18s infinite alternate-reverse linear' }} />
        </svg>
      </div>

      <style>{`
        @keyframes spotlight-breathe { 0%, 100% { opacity: 0.7; transform: translate(-50%, -50%) scale(1); } 50% { opacity: 1; transform: translate(-50%, -50%) scale(1.1); } }
        @keyframes wisps-float { 0% { transform: scale(1) translate(0,0) rotate(0deg); } 100% { transform: scale(1.2) translate(50px,-30px) rotate(2deg); } }
        @keyframes star-pulse { 0%, 100% { opacity: 0.3; transform: scale(0.9); } 50% { opacity: 0.9; transform: scale(1.1); filter: drop-shadow(0 0 8px #fff); } }
      `}</style>

      {/* Transparent Minimal Navbar */}
      <div className="nav-container" style={{ position: 'absolute', top: '2.5rem', left: '6rem', right: '6rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center', zIndex: 100 }}>
        <div style={{ fontFamily: 'Syne, sans-serif', fontWeight: 800, fontSize: '1.6rem', color: '#fff', letterSpacing: '-1px' }}>Anmol</div>
        <div style={{ display: 'flex', gap: '3rem', fontFamily: 'Inter, sans-serif', fontSize: '0.85rem', color: 'white', letterSpacing: '0.05em', fontWeight: 400 }}>
           <a href="#about" style={{ color: 'inherit', textDecoration: 'none' }}>About Us</a>
           <a href="#work" style={{ color: 'inherit', textDecoration: 'none' }}>Projects</a>
           <a href="#contact" style={{ color: 'inherit', textDecoration: 'none' }}>Contact</a>
        </div>
      </div>

      {/* Main Split Layout Interface */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', height: '100%', position: 'relative', width: '100%' }}>
        {/* Left Column (Anmol Garg) */}
        <div style={{ flex: '0 0 35%', zIndex: 10, paddingLeft: '2rem' }}>
          <span className="hero-eyebrow" style={{ 
             color: '#A78BFA', 
             fontFamily: 'Inter, sans-serif', 
             fontSize: '1rem', 
             fontWeight: 500, 
             marginBottom: '1rem', 
             display: 'block',
             opacity: 1 // Managed by App.jsx
          }}>Hello, I'm</span>
          <h1 className="hero-name" style={{
            fontFamily: 'Syne, sans-serif',
            fontWeight: 800,
            fontSize: '5.5rem',
            lineHeight: '0.9',
            color: '#FFFFFF',
            margin: 0,
            display: 'flex',
            flexDirection: 'column',
            letterSpacing: '-3px'
          }}>
            <span className="word">Anmol</span>
            <span className="word">Garg</span>
          </h1>
        </div>

        {/* Center CGI Highlight - CHARACTER FOCAL POINT */}
        <div className="hero-visual" style={{ 
          position: 'absolute',
          left: '50%',
          top: '55%',
          transform: 'translate(-50%, -50%)',
          width: '550px',
          height: '100%',
          zIndex: 5,
          pointerEvents: 'none',
          opacity: 1 // Managed by App.jsx
        }}>
           <Character />
        </div>

        {/* Right Column (Developer & Designer) */}
        <div style={{ flex: '0 0 35%', textAlign: 'right', zIndex: 10, paddingRight: '2rem' }}>
           <span className="hero-role-label" style={{ color: '#A78BFA', fontFamily: 'Inter, sans-serif', fontSize: '1rem', marginBottom: '1.5rem', display: 'block' }}>Creative</span>
           <h2 className="hero-role" style={{
             fontFamily: 'Syne, sans-serif',
             fontWeight: 800,
             fontSize: '4.8rem',
             lineHeight: '0.95',
             margin: 0,
             display: 'flex',
             flexDirection: 'column',
             letterSpacing: '-1.5px',
             opacity: 1 // Managed by App.jsx
           }}>
             <span className="gradient-text">Developer</span>
             <span style={{ color: '#FFFFFF' }}>& Designer</span>
           </h2>
        </div>
      </div>

      {/* Social Indicator Pillar (Left Edge) */}
      <div className="hero-meta" style={{ position: 'absolute', left: '1.5rem', top: '50%', transform: 'translateY(-50%)', display: 'flex', flexDirection: 'column', gap: '1.2rem', zIndex: 100, opacity: 1 }}>
          <SocialIcon path="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z M2 9h4v12H2z" href="#" />
          <SocialIcon path="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" href="#" active />
          <SocialIcon path="M22 2L11 13M22 2l-7 20-4-9-9-4 20-7z" href="#" /> {/* Telegram/Send */}
          <SocialIcon path="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" href="#" />
      </div>

      {/* Pill-shaped Resume CTA */}
      <div className="hero-ctas" style={{ position: 'absolute', bottom: '3rem', right: '6rem', zIndex: 100, opacity: 1 }}>
        <a href="#" style={{ 
          fontFamily: 'Inter, sans-serif', 
          color: '#FFFFFF', 
          fontSize: '0.9rem', 
          fontWeight: 600,
          padding: '12px 34px',
          backgroundColor: 'rgba(255, 255, 255, 0.05)',
          border: '1px solid rgba(255, 255, 255, 0.15)',
          borderRadius: '50px',
          textDecoration: 'none',
          display: 'flex',
          alignItems: 'center',
          gap: '1rem',
          letterSpacing: '0.08em'
        }}>
          RESUME ↗
        </a>
      </div>

      {/* Decorative Signature Glyph ✦ */}
      <div style={{ 
        position: 'absolute', 
        bottom: '2.5rem', 
        right: '2.5rem', 
        color: '#FFFFFF', 
        fontSize: '2.4rem', 
        opacity: 0.6,
        zIndex: 10,
        animation: 'star-pulse 3.5s infinite ease-in-out'
      }}>✦</div>
    </section>
  );
};

export default Hero;
