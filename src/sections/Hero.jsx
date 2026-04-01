import React from 'react';
import Character from '../components/Character';

const SocialIcon = ({ path, href, active }) => (
  <a href={href} style={{ 
    opacity: active ? 1 : 0.4, 
    transition: 'all 0.3s',
    backgroundColor: 'rgba(255, 255, 255, 0.05)',
    width: '44px',
    height: '44px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: '50%',
    border: active ? '2px solid #7C3AED' : '1px solid rgba(255, 255, 255, 0.1)',
    boxShadow: active ? '0 0 15px rgba(124, 58, 237, 0.5)' : 'none',
    transform: active ? 'scale(1.15)' : 'scale(1)'
  }} onMouseEnter={e => e.currentTarget.style.opacity = 1} onMouseLeave={e => !active && (e.currentTarget.style.opacity = 0.4)}>
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
      background: '#080808',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      padding: '0 10rem'
    }}>
      {/* Dramatic Purple Radial Glow behind character */}
      <div style={{
        position: 'absolute',
        left: '50%',
        top: '50%',
        transform: 'translate(-50%, -50%)',
        width: '100vw',
        height: '100vw',
        background: 'radial-gradient(circle at center, rgba(107, 33, 168, 0.25) 0%, transparent 60%)',
        pointerEvents: 'none',
        zIndex: 0
      }} />

      {/* Aurora Wisps (Light Streaks) Animation Simulation */}
      <svg style={{ position: 'absolute', width: '100%', height: '100%', pointerEvents: 'none', zIndex: 1 }}>
         <defs>
            <filter id="blur">
               <feGaussianBlur in="SourceGraphic" stdDeviation="10" />
            </filter>
         </defs>
         <path 
           d="M -100 800 Q 400 400 1440 800" 
           stroke="#7C3AED" 
           strokeWidth="2" 
           fill="none" 
           opacity="0.1" 
           filter="url(#blur)" 
           style={{ transformOrigin: 'center', animation: 'aurora 8s ease-in-out infinite alternate' }}
         />
         <path 
           d="M 1540 100 Q 1000 500 -100 100" 
           stroke="#A855F7" 
           strokeWidth="1.5" 
           fill="none" 
           opacity="0.15" 
           filter="url(#blur)" 
           style={{ transformOrigin: 'center', animation: 'aurora 10s ease-in-out infinite alternate-reverse' }}
         />
      </svg>
      <style>{`
        @keyframes aurora {
           0% { transform: scale(1) rotate(0deg) translate(0,0); opacity: 0.1; }
           100% { transform: scale(1.1) rotate(2deg) translate(50px, -20px); opacity: 0.25; }
        }
      `}</style>

      {/* Minimal Top Nav */}
      <div style={{ position: 'absolute', top: '3rem', left: '10rem', right: '10rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center', zIndex: 100 }}>
        <div style={{ fontFamily: 'Syne, sans-serif', fontWeight: 600, fontSize: '1.4rem', color: '#fff', letterSpacing: '0.02em' }}>Anmol</div>
        <div style={{ display: 'flex', gap: '3.5rem', fontFamily: 'Syne, sans-serif', fontSize: '0.85rem', color: 'rgba(255,255,255,0.7)', letterSpacing: '0.1em' }}>
           <a href="#about" style={{ color: 'inherit', textDecoration: 'none' }}>About Us</a>
           <a href="#projects" style={{ color: 'inherit', textDecoration: 'none' }}>Projects</a>
           <a href="#contact" style={{ color: 'inherit', textDecoration: 'none' }}>Contact</a>
        </div>
      </div>

      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', height: '100%', position: 'relative' }}>
        {/* Left: Huge Name */}
        <div className="hero-left" style={{ flex: 1, zIndex: 10, position: 'relative' }}>
          <span style={{ 
             color: '#A78BFA', 
             fontFamily: 'Syne, sans-serif', 
             fontSize: '1rem', 
             fontWeight: 500, 
             marginBottom: '1.5rem', 
             display: 'block',
             textTransform: 'none' 
          }}>Hello, I'm</span>
          <h1 style={{
            fontFamily: 'Syne, sans-serif',
            fontWeight: 800,
            fontSize: 'max(5.5rem, 7.5vw)',
            lineHeight: '0.85',
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

        {/* Center: Character Container */}
        <div className="hero-center" style={{ 
          position: 'absolute',
          left: '50%',
          top: '50%',
          transform: 'translate(-50%, -50%)',
          width: '100%',
          height: '100%',
          zIndex: 5
        }}>
           <Character />
        </div>

        {/* Right: Title Column */}
        <div className="hero-right" style={{ flex: 1, textAlign: 'right', zIndex: 10 }}>
           <span style={{ color: '#A78BFA', fontFamily: 'Syne, sans-serif', fontSize: '1rem', marginBottom: '1.8rem', display: 'block' }}>Creative</span>
           <h2 style={{
             fontFamily: 'Syne, sans-serif',
             fontWeight: 800,
             fontSize: 'max(5rem, 6.5vw)',
             lineHeight: '0.9',
             margin: 0,
             display: 'flex',
             flexDirection: 'column'
           }}>
             <span style={{ 
                background: 'linear-gradient(to right, #7C3AED, #A855F7)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                display: 'inline-block'
             }}>Developer</span>
             <span style={{ color: '#FFFFFF' }}>& Designer</span>
           </h2>
        </div>
      </div>

      {/* Social Pillar (Left Edge) */}
      <div style={{ position: 'absolute', left: '2.5rem', top: '50%', transform: 'translateY(-50%)', display: 'flex', flexDirection: 'column', gap: '1.2rem', zIndex: 100 }}>
          <SocialIcon path="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z M2 9h4v12H2z M4 2a2 2 0 1 1 0 4 2 2 0 0 1 0-4z" href="#" />
          <SocialIcon path="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" href="#" active />
          <SocialIcon path="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 15h-2v-6h2v6zm-1-7c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1zm5 7h-2v-6h2v6zm-1-7c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1-1z" href="#" />
          <SocialIcon path="M22.65 14.39L12 22.13 1.35 14.39a.84.84 0 0 1-.3-.94l1.22-3.74 2.53 1.83L3.1 14.75 12 21.27l8.9-6.52-1.7-3.23 2.53-1.83 1.22 3.74a.84.84 0 0 1-.3.94z M12 2.1l2.43 7.33H9.57z" href="#" />
      </div>

      {/* Bottom Interface Elements */}
      <div style={{ position: 'absolute', bottom: '3rem', right: '10rem', display: 'flex', alignItems: 'center', gap: '3rem', zIndex: 100 }}>
        <a href="#" style={{ 
          fontFamily: 'Syne, sans-serif', 
          color: '#F8FAFC', 
          fontSize: '0.85rem', 
          fontWeight: 600,
          textDecoration: 'none',
          padding: '10px 24px',
          backgroundColor: 'rgba(255, 255, 255, 0.05)',
          border: '1px solid rgba(255, 255, 255, 0.1)',
          borderRadius: '50px',
          display: 'flex',
          alignItems: 'center',
          gap: '0.8rem',
          letterSpacing: '0.05em'
        }}>
          RESUME <span style={{ fontSize: '1rem' }}>↗</span>
        </a>
      </div>

      {/* Decorative Glyph */}
      <div style={{ 
        position: 'absolute', 
        bottom: '3rem', 
        right: '3rem', 
        color: '#FFFFFF', 
        fontSize: '2rem', 
        opacity: 0.6,
        textShadow: '0 0 10px #fff'
      }}>✦</div>
    </section>
  );
};

export default Hero;
