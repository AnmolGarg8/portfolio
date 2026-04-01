import React from 'react';
import Character from '../components/Character';

const SocialIcon = ({ path, href, active }) => (
  <a href={href} rel="noopener noreferrer" target="_blank" style={{ 
    opacity: active ? 1 : 0.4, 
    transition: 'all 0.3s',
    backgroundColor: 'rgba(255, 255, 255, 0.04)',
    width: '42px',
    height: '42px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: '50%',
    border: active ? '1.5px solid #7C3AED' : '1px solid rgba(255, 255, 255, 0.1)',
    boxShadow: active ? '0 0 15px rgba(124, 58, 237, 0.3)' : 'none',
    transform: active ? 'scale(1.1)' : 'scale(1)'
  }} onMouseEnter={e => e.currentTarget.style.opacity = 1} onMouseLeave={e => !active && (e.currentTarget.style.opacity = 0.4)}>
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
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
      background: '#080808',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      padding: '0 6rem'
    }}>
      {/* Dramatic Spotlight Glow */}
      <div style={{
        position: 'absolute',
        left: '50%',
        top: '50%',
        transform: 'translate(-50%, -50%)',
        width: '120vw',
        height: '110vh',
        background: 'radial-gradient(circle at center, rgba(107, 33, 168, 0.2) 0%, transparent 60%)',
        pointerEvents: 'none',
        zIndex: 0
      }} />

      {/* Aurora Wisp light streaks layer */}
      <div style={{ position: 'absolute', inset: 0, pointerEvents: 'none', zIndex: 1, opacity: 0.3 }}>
        <svg width="100%" height="100%" viewBox="0 0 1440 800" preserveAspectRatio="none">
          <filter id="glow-fx">
            <feGaussianBlur in="SourceGraphic" stdDeviation="12" />
          </filter>
          <path d="M-100,600 Q300,100 1540,600" stroke="#7C3AED" strokeWidth="4" fill="none" filter="url(#glow-fx)" style={{ animation: 'aurora-1 14s infinite alternate ease-in-out' }} />
          <path d="M1540,200 Q1100,550 -100,200" stroke="#A855F7" strokeWidth="3" fill="none" filter="url(#glow-fx)" style={{ animation: 'aurora-2 18s infinite alternate-reverse ease-in-out' }} />
        </svg>
      </div>
      <style>{`
        @keyframes aurora-1 { 0% { transform: translate(0,0) rotate(0deg); opacity: 0.2; } 100% { transform: translate(60px,-30px) rotate(2deg); opacity: 0.6; } }
        @keyframes aurora-2 { 0% { transform: translate(0,0) rotate(0deg); opacity: 0.3; } 100% { transform: translate(-40px,50px) rotate(-2deg); opacity: 0.7; } }
      `}</style>

      {/* Minimal Top Nav */}
      <div style={{ position: 'absolute', top: '2.5rem', left: '6rem', right: '6rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center', zIndex: 100 }}>
        <div style={{ fontFamily: 'Syne, sans-serif', fontWeight: 600, fontSize: '1.6rem', color: '#fff', letterSpacing: '-0.5px' }}>Anmol</div>
        <div style={{ display: 'flex', gap: '3.5rem', fontFamily: 'Inter, sans-serif', fontSize: '0.85rem', color: 'rgba(255,255,255,0.7)', letterSpacing: '0.1em', fontWeight: 500 }}>
           <a href="#about" style={{ color: 'inherit', textDecoration: 'none' }}>About Us</a>
           <a href="#work" style={{ color: 'inherit', textDecoration: 'none' }}>Projects</a>
           <a href="#contact" style={{ color: 'inherit', textDecoration: 'none' }}>Contact</a>
        </div>
      </div>

      {/* Content Layout */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', height: '100%', position: 'relative', width: '100%' }}>
        {/* Left Column */}
        <div className="hero-left-col" style={{ flex: '0 0 32%', zIndex: 15, paddingLeft: '2rem' }}>
          <span className="hero-eyebrow" style={{ 
             color: '#A78BFA', 
             fontFamily: 'Inter, sans-serif', 
             fontSize: '1rem', 
             fontWeight: 500, 
             marginBottom: '1rem', 
             display: 'block' 
          }}>Hello, I'm</span>
          <h1 className="hero-name" style={{
            fontFamily: 'Syne, sans-serif',
            fontWeight: 800,
            fontSize: '5rem',
            lineHeight: '0.88',
            color: '#FFFFFF',
            margin: 0,
            display: 'flex',
            flexDirection: 'column',
            letterSpacing: '-2.5px'
          }}>
            <span className="word">Anmol</span>
            <span className="word">Garg</span>
          </h1>
        </div>

        {/* Focal Centerpiece */}
        <div className="hero-visual" style={{ 
          position: 'absolute',
          left: '50%',
          top: '55%',
          transform: 'translate(-50%, -50%)',
          width: '500px',
          height: '100%',
          zIndex: 5,
          pointerEvents: 'none'
        }}>
           <Character />
        </div>

        {/* Right Column */}
        <div className="hero-right-col" style={{ flex: '0 0 32%', textAlign: 'right', zIndex: 15, paddingRight: '2rem' }}>
           <span className="hero-role-label" style={{ color: '#A78BFA', fontFamily: 'Inter, sans-serif', fontSize: '1rem', marginBottom: '1.2rem', display: 'block' }}>Creative</span>
           <h2 className="hero-role" style={{
             fontFamily: 'Syne, sans-serif',
             fontWeight: 800,
             fontSize: '4.5rem',
             lineHeight: '1',
             margin: 0,
             display: 'flex',
             flexDirection: 'column',
             letterSpacing: '-1.5px'
           }}>
             <span className="gradient-text">Developer</span>
             <span style={{ color: '#FFFFFF' }}>& Designer</span>
           </h2>
        </div>
      </div>

      {/* Social Interface Pillar */}
      <div className="hero-meta" style={{ position: 'absolute', left: '2rem', top: '50%', transform: 'translateY(-50%)', display: 'flex', flexDirection: 'column', gap: '1rem', zIndex: 100 }}>
          <SocialIcon path="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z M2 9h4v12H2z" href="#" />
          <SocialIcon path="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" href="#" active />
          <SocialIcon path="M15 10l-4 4l6 6l4-16l-18 7l4 2l2 6l3-4" href="#" />
          <SocialIcon path="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" href="#" />
      </div>

      {/* Resume Link */}
      <div className="hero-ctas" style={{ position: 'absolute', bottom: '3rem', right: '6rem', zIndex: 100 }}>
        <a href="#" style={{ 
          fontFamily: 'Inter, sans-serif', 
          color: '#FFFFFF', 
          fontSize: '0.9rem', 
          fontWeight: 600,
          padding: '12px 30px',
          backgroundColor: 'rgba(255, 255, 255, 0.05)',
          border: '1px solid rgba(255, 255, 255, 0.1)',
          borderRadius: '50px',
          textDecoration: 'none',
          display: 'flex',
          alignItems: 'center',
          gap: '1rem',
          letterSpacing: '0.05em'
        }}>
          RESUME ↗
        </a>
      </div>

      {/* Decorative Glyph */}
      <div style={{ 
        position: 'absolute', 
        bottom: '3rem', 
        right: '2rem', 
        color: '#FFFFFF', 
        fontSize: '2.2rem', 
        opacity: 0.4,
        textShadow: '0 0 15px rgba(255,255,255,0.3)',
        zIndex: 10
      }}>✦</div>
    </section>
  );
};

export default Hero;
