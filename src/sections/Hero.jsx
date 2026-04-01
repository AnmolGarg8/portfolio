import React from 'react';
import Character from '../components/Character';

const SocialIcon = ({ path, href, active }) => (
  <a href={href} rel="noopener noreferrer" target="_blank" style={{ 
    opacity: active ? 1 : 0.45, 
    transition: 'all 0.3s',
    backgroundColor: 'rgba(255, 255, 255, 0.05)',
    width: '42px',
    height: '42px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: '50%',
    border: active ? '1.8px solid #7C3AED' : '1px solid rgba(255, 255, 255, 0.1)',
    boxShadow: active ? '0 0 15px rgba(124, 58, 237, 0.4)' : 'none',
    transform: active ? 'scale(1.1)' : 'scale(1)',
    zIndex: 10
  }}>
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d={path}></path>
    </svg>
  </a>
);

const Hero = () => {
  return (
    <section className="hero" id="home" style={{
      minHeight: '100vh',
      width: '100%',
      position: 'relative',
      overflow: 'hidden',
      background: '#050505',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      padding: '0 6rem'
    }}>
      {/* Background Spotlight Glow */}
      <div style={{
        position: 'absolute',
        left: '50%',
        top: '50%',
        transform: 'translate(-50%, -50%)',
        width: '150vw',
        height: '150vh',
        background: 'radial-gradient(circle at center, rgba(124, 58, 237, 0.35) 0%, transparent 70%)',
        pointerEvents: 'none',
        zIndex: 0,
        animation: 'glow-breathe 8s infinite ease-in-out'
      }} />

      {/* Aurora Wisp light streaks layer */}
      <div style={{ position: 'absolute', inset: 0, pointerEvents: 'none', zIndex: 1, opacity: 0.3 }}>
        <svg width="100%" height="100%" viewBox="0 0 1440 800" preserveAspectRatio="none">
          <filter id="glow-fx">
            <feGaussianBlur in="SourceGraphic" stdDeviation="15" />
          </filter>
          <path d="M-100,500 Q400,100 1540,500" stroke="#7C3AED" strokeWidth="4" fill="none" filter="url(#glow-fx)" style={{ animation: 'aurora-1 20s infinite alternate ease-in-out' }} />
          <path d="M1540,300 Q1040,600 -100,300" stroke="#A855F7" strokeWidth="3" fill="none" filter="url(#glow-fx)" style={{ animation: 'aurora-2 25s infinite alternate-reverse ease-in-out' }} />
        </svg>
      </div>

      <style>{`
        @keyframes glow-breathe { 0%, 100% { opacity: 0.7; transform: translate(-50%, -50%) scale(1); } 50% { opacity: 1; transform: translate(-50%, -50%) scale(1.05); } }
        @keyframes aurora-1 { 0% { transform: translate(0,0); } 100% { transform: translate(30px,-20px); } }
        @keyframes aurora-2 { 0% { transform: translate(0,0); } 100% { transform: translate(-30px,20px); } }
        @keyframes star-pulse { 0%, 100% { opacity: 0.3; transform: scale(0.9); } 50% { opacity: 1; transform: scale(1.1); filter: drop-shadow(0 0 10px #fff); } }
      `}</style>

      {/* Minimal Top Nav */}
      <div className="nav-container" style={{ position: 'absolute', top: '2.5rem', left: '6rem', right: '6rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center', zIndex: 100 }}>
        <div style={{ fontFamily: 'Syne, sans-serif', fontWeight: 800, fontSize: '1.6rem', color: '#fff', letterSpacing: '-0.5px' }}>Anmol</div>
        <div style={{ display: 'flex', gap: '3.5rem', fontFamily: 'Inter, sans-serif', fontSize: '0.85rem', color: 'rgba(255,255,255,1)', letterSpacing: '0.05em', fontWeight: 500 }}>
           <a href="#about" style={{ color: 'inherit', textDecoration: 'none' }}>About Us</a>
           <a href="#work" style={{ color: 'inherit', textDecoration: 'none' }}>Projects</a>
           <a href="#contact" style={{ color: 'inherit', textDecoration: 'none' }}>Contact</a>
        </div>
      </div>

      {/* Hero Layout - NO OVERLAP GRID */}
      <div style={{ 
        display: 'grid', 
        gridTemplateColumns: '1fr 1.5fr 1fr', 
        alignItems: 'center', 
        width: '100%', 
        height: '100%', 
        position: 'relative',
        zIndex: 10
      }}>
        {/* Left Column */}
        <div style={{ paddingLeft: '2rem' }}>
          <span style={{ color: '#A78BFA', fontFamily: 'Inter, sans-serif', fontSize: '1.2rem', fontWeight: 500, marginBottom: '1.5rem', display: 'block' }}>Hello, I'm</span>
          <h1 style={{
            fontFamily: 'Syne, sans-serif',
            fontWeight: 800,
            fontSize: '5.5rem',
            lineHeight: '0.85',
            color: '#FFFFFF',
            margin: 0,
            display: 'flex',
            flexDirection: 'column',
            letterSpacing: '-3.5px'
          }}>
            <span>Anmol</span>
            <span>Garg</span>
          </h1>
        </div>

        {/* Center CGI Highlight - GUARANTEED FRAME */}
        <div style={{ height: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
           <div style={{ width: '100%', height: '100%', position: 'relative' }}>
             <Character />
           </div>
        </div>

        {/* Right Column */}
        <div style={{ textAlign: 'right', paddingRight: '2rem' }}>
           <span style={{ color: '#A78BFA', fontFamily: 'Inter, sans-serif', fontSize: '1.2rem', marginBottom: '1.5rem', display: 'block' }}>Creative</span>
           <h2 style={{
             fontFamily: 'Syne, sans-serif',
             fontWeight: 800,
             fontSize: '4.8rem',
             lineHeight: '1',
             margin: 0,
             display: 'flex',
             flexDirection: 'column',
             letterSpacing: '-1.5px'
           }}>
             <span style={{ 
                background: 'linear-gradient(to right, #7C3AED, #C084FC)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                display: 'inline-block'
             }}>Developer</span>
             <span style={{ color: '#FFFFFF' }}>& Designer</span>
           </h2>
        </div>
      </div>

      {/* Social Pillar Indicators (Left Edge) */}
      <div style={{ position: 'absolute', left: '2rem', top: '50%', transform: 'translateY(-50%)', display: 'flex', flexDirection: 'column', gap: '1.5rem', zIndex: 100 }}>
          <SocialIcon path="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z M2 9h4v12H2z" href="#" />
          <SocialIcon path="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" href="#" active />
          <SocialIcon path="M22 2L11 13M22 2l-7 20-4-9-9-4 20-7z" href="#" />
          <SocialIcon path="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" href="#" />
      </div>

      {/* Resume Link Pill indicator */}
      <div style={{ position: 'absolute', bottom: '3rem', right: '6rem', zIndex: 100 }}>
        <a href="#" style={{ 
          fontFamily: 'Inter, sans-serif', 
          color: '#FFFFFF', 
          fontSize: '0.9rem', 
          fontWeight: 600,
          padding: '12px 35px',
          backgroundColor: 'rgba(255, 255, 255, 0.08)',
          border: '1px solid rgba(255, 255, 255, 0.25)',
          borderRadius: '50px',
          textDecoration: 'none',
          display: 'flex',
          alignItems: 'center',
          gap: '1rem',
          letterSpacing: '0.12em'
        }}>
          RESUME ↗
        </a>
      </div>

      {/* Decorative Star ✦ */}
      <div style={{ 
        position: 'absolute', 
        bottom: '2.5rem', 
        right: '2.5rem', 
        color: '#FFFFFF', 
        fontSize: '2.8rem', 
        opacity: 0.8,
        zIndex: 10,
        animation: 'star-pulse 4s infinite ease-in-out'
      }}>✦</div>
    </section>
  );
};

export default Hero;
