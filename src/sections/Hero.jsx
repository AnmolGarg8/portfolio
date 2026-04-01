import React from 'react';
import characterImage from '../assets/character.png';

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
    boxShadow: active ? '0 0 20px rgba(124, 58, 237, 0.4)' : 'none',
    transform: active ? 'scale(1.15)' : 'scale(1)',
    zIndex: 10,
    textDecoration: 'none'
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
      width: '100vw',
      position: 'relative',
      overflow: 'hidden',
      background: '#050505',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      padding: '0 5vw',
      boxSizing: 'border-box'
    }}>
      {/* Background Cinematic Atmosphere */}
      <div style={{
        position: 'absolute',
        left: '50%',
        top: '50%',
        transform: 'translate(-50%, -50%)',
        width: '130vw',
        height: '110vh',
        background: 'radial-gradient(circle at center, rgba(107, 33, 168, 0.25) 0%, transparent 65%)',
        pointerEvents: 'none',
        zIndex: 0,
        animation: 'halo-pulse 8s infinite ease-in-out'
      }} />

      {/* Aurora Wisp streaks layer */}
      <div style={{ position: 'absolute', inset: 0, pointerEvents: 'none', zIndex: 1, opacity: 0.25 }}>
        <svg width="100%" height="100%" viewBox="0 0 1440 800" preserveAspectRatio="none">
          <filter id="aurora-fx">
            <feGaussianBlur in="SourceGraphic" stdDeviation="15" />
          </filter>
          <path d="M-100,600 Q400,200 1540,600" stroke="#7C3AED" strokeWidth="5" fill="none" filter="url(#aurora-fx)" style={{ animation: 'aurora-shift 15s infinite alternate linear' }} />
          <path d="M1540,250 Q1040,650 -100,250" stroke="#A855F7" strokeWidth="4" fill="none" filter="url(#aurora-fx)" style={{ animation: 'aurora-shift 18s infinite alternate-reverse linear' }} />
        </svg>
      </div>

      <style>{`
        @keyframes halo-pulse { 0%, 100% { opacity: 0.6; transform: translate(-50%, -50%) scale(1); } 50% { opacity: 1; transform: translate(-50%, -50%) scale(1.05); } }
        @keyframes aurora-shift { 0% { transform: translate(0,0) rotate(0deg); } 100% { transform: translate(40px,-20px) rotate(2.5deg); } }
        @keyframes character-float { 0%, 100% { transform: translateY(0); } 50% { transform: translateY(-15px); } }
      `}</style>

      {/* Navbar Container */}
      <div style={{ position: 'absolute', top: '2.5rem', left: '5vw', right: '5vw', display: 'flex', justifyContent: 'space-between', alignItems: 'center', zIndex: 100 }}>
        <div style={{ fontFamily: 'Syne, sans-serif', fontWeight: 800, fontSize: '1.7rem', color: '#fff', letterSpacing: '-1px' }}>Anmol</div>
        <div style={{ display: 'flex', gap: '3.5rem', fontFamily: 'Inter, sans-serif', fontSize: '0.85rem', color: 'rgba(255,255,255,0.9)', letterSpacing: '0.08em', fontWeight: 500 }}>
           <a href="#about" style={{ color: 'inherit', textDecoration: 'none' }}>About Us</a>
           <a href="#work" style={{ color: 'inherit', textDecoration: 'none' }}>Projects</a>
           <a href="#contact" style={{ color: 'inherit', textDecoration: 'none' }}>Contact</a>
        </div>
      </div>

      {/* Main Structural Layout (3-Column architecture for ZERO OVERLAP) */}
      <div style={{ display: 'flex', width: '100%', alignItems: 'center', position: 'relative', zIndex: 10, flex: 1 }}>
        {/* Left Typography Pillar (32% width) */}
        <div style={{ width: '32%', overflow: 'hidden' }}>
          <span style={{ 
             color: '#A78BFA', 
             fontFamily: 'Inter, sans-serif', 
             fontSize: '1.1rem', 
             fontWeight: 500, 
             marginBottom: '1.2rem', 
             display: 'block' 
          }}>Hello, I'm</span>
          <h1 style={{
            fontFamily: 'Syne, sans-serif',
            fontWeight: 800,
            fontSize: 'clamp(3rem, 4.5vw, 4.2rem)',
            lineHeight: '0.88',
            color: '#FFFFFF',
            margin: 0,
            display: 'flex',
            flexDirection: 'column',
            letterSpacing: '-2px'
          }}>
            <span>Anmol</span>
            <span>Garg</span>
          </h1>
        </div>

        {/* Center Visual Space (36% width divider) - Using defined Image centerpiece with precision Masking */}
        <div style={{ 
          width: '36%', 
          height: '100%', 
          position: 'relative', 
          zIndex: 5, 
          pointerEvents: 'none', 
          display: 'flex', 
          alignItems: 'flex-end', 
          justifyContent: 'center',
          overflow: 'hidden'
        }}>
           <img 
               src={characterImage} 
               alt="Definitive 3D Character" 
               style={{ 
                  height: '110%', 
                  width: 'auto',
                  maxWidth: '180%', 
                  objectFit: 'contain', 
                  objectPosition: 'center 20%',
                  animation: 'character-float 6s infinite ease-in-out',
                  userSelect: 'none',
                  clipPath: 'inset(18% 5% 0 5%)', // Surgical mask to remove top nav & side UI from source screenshot
                  mixBlendMode: 'screen', // Liquid blend into #050505 background
                  filter: 'contrast(1.05) brightness(1.02)'
               }} 
           />
        </div>


        {/* Right Typography Pillar (32% width) */}
        <div style={{ width: '32%', textAlign: 'right', overflow: 'hidden' }}>
           <span style={{ color: '#A78BFA', fontFamily: 'Inter, sans-serif', fontSize: '1.1rem', marginBottom: '1.2rem', display: 'block' }}>Creative</span>
           <h2 style={{
             fontFamily: 'Syne, sans-serif',
             fontWeight: 800,
             fontSize: 'clamp(2.8rem, 4vw, 3.8rem)',
             lineHeight: '0.95',
             margin: 0,
             display: 'flex',
             flexDirection: 'column',
             letterSpacing: '-1px'
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


      {/* Persistent Social Indicator Sidebar indicators */}
      <div style={{ position: 'absolute', left: '2rem', top: '50%', transform: 'translateY(-50%)', display: 'flex', flexDirection: 'column', gap: '1.2rem', zIndex: 100 }}>
          <SocialIcon path="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z M2 9h4v12H2z" href="#" />
          <SocialIcon path="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" href="#" active />
          <SocialIcon path="M22 2L11 13M22 2l-7 20-4-9-9-4 20-7z" href="#" />
          <SocialIcon path="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" href="#" />
      </div>

      <div style={{ position: 'absolute', bottom: '3rem', right: '5vw', zIndex: 100 }}>
        <a href="#" style={{ 
          fontFamily: 'Inter, sans-serif', 
          color: '#FFFFFF', 
          fontSize: '0.85rem', 
          fontWeight: 600,
          padding: '12px 32px',
          backgroundColor: 'rgba(255, 255, 255, 0.08)',
          border: '1px solid rgba(255, 255, 255, 0.2)',
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

    </section>
  );
};

export default Hero;
