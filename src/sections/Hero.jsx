import React from 'react';
import Character from '../components/Character';

const SocialIcon = ({ path, href }) => (
  <a href={href} style={{ opacity: 0.4, transition: 'all 0.3s' }} onMouseEnter={e => e.currentTarget.style.opacity = 1} onMouseLeave={e => e.currentTarget.style.opacity = 0.4}>
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
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
      background: '#060608',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      padding: '0 10.5rem'
    }}>
      {/* Top Navbar */}
      <div style={{ position: 'absolute', top: '3.5rem', width: 'calc(100% - 21rem)', display: 'flex', justifyContent: 'space-between', alignItems: 'center', zIndex: 100 }}>
        <div style={{ fontFamily: 'Times New Roman', fontWeight: 600, fontSize: '1.4rem', letterSpacing: '0.05em' }}>Anmol</div>
        <div style={{ display: 'flex', gap: '4rem', fontFamily: 'Times New Roman', fontSize: '0.9rem', color: 'rgba(255,255,255,0.7)', letterSpacing: '0.1em' }}>
           <a href="#about" style={{ color: 'inherit', textDecoration: 'none' }}>About Us</a>
           <a href="#projects" style={{ color: 'inherit', textDecoration: 'none' }}>Projects</a>
           <a href="#contact" style={{ color: 'inherit', textDecoration: 'none' }}>Contact</a>
        </div>
      </div>

      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', height: '100%', position: 'relative' }}>
        {/* Left: Name Group */}
        <div className="hero-left" style={{ flex: 1, zIndex: 10, position: 'relative', top: '-2rem' }}>
          <span style={{ color: '#A78BFA', fontFamily: 'Times New Roman', fontSize: '1.4rem', fontWeight: 500, marginBottom: '1.8rem', display: 'block' }}>Hello, I'm</span>
          <h1 style={{
            fontFamily: 'Times New Roman',
            fontWeight: 700,
            fontSize: 'clamp(4rem, 8vw, 7.5rem)',
            lineHeight: '0.9',
            color: '#F8FAFC',
            margin: 0,
            display: 'flex',
            flexDirection: 'column'
          }}>
            <span>Anmol</span>
            <span>Garg</span>
          </h1>
        </div>

        {/* Center: Hero Character & Atmos */}
        <div className="hero-center" style={{ 
          position: 'absolute',
          left: '50%',
          top: '50%',
          transform: 'translate(-50%, -50%)',
          width: '100%',
          height: '100%',
          zIndex: 5
        }}>
           {/* Primary Violet Glow */}
           <div style={{
             position: 'absolute',
             left: '48%',
             top: '55%',
             transform: 'translate(-50%, -50%)',
             width: '90vw',
             height: '90vw',
             background: 'radial-gradient(circle at center, rgba(124, 58, 237, 0.22) 0%, transparent 55%)',
             pointerEvents: 'none'
           }} />
           <Character />
        </div>

        {/* Right: Title Group */}
        <div className="hero-right" style={{ flex: 1, textAlign: 'right', zIndex: 10, position: 'relative', top: '-1rem' }}>
           <span style={{ color: '#A78BFA', fontFamily: 'Times New Roman', fontSize: '1.4rem', fontWeight: 500, marginBottom: '1.8rem', display: 'block' }}>Creative</span>
           <div style={{ position: 'relative' }}>
              <h2 style={{
                fontFamily: 'Times New Roman',
                fontWeight: 700,
                fontSize: 'clamp(4rem, 8vw, 7.5rem)',
                lineHeight: '0.9',
                margin: 0,
                display: 'flex',
                flexDirection: 'column'
              }}>
                <span style={{ 
                   color: 'transparent',
                   WebkitTextStroke: '1px rgba(167, 139, 250, 0.2)',
                   fontSize: '110%',
                   letterSpacing: '0.02em'
                }}>Developer</span>
                <span style={{ color: '#F8FAFC' }}>& Designer</span>
              </h2>
           </div>
        </div>
      </div>

      {/* Bottom Interface */}
      <div style={{ position: 'absolute', bottom: '5rem', left: '10.5rem', display: 'flex', flexDirection: 'column', gap: '1.8rem', zIndex: 20 }}>
          <SocialIcon path="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z M2 9h4v12H2z M4 2a2 2 0 1 1 0 4 2 2 0 0 1 0-4z" href="#" />
          <SocialIcon path="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" href="#" />
          <SocialIcon path="M17 2H7a5 5 0 0 0-5 5v10a5 5 0 0 0 5 5h10a5 5 0 0 0 5-5V7a5 5 0 0 0-5-5z M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z M17.5 6.5h.01" href="#" />
          <SocialIcon path="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z" href="#" />
      </div>

      <div style={{ position: 'absolute', bottom: '5rem', right: '10.5rem', zIndex: 20 }}>
        <a href="#" style={{ 
          fontFamily: 'Times New Roman', 
          color: '#F8FAFC', 
          fontSize: '1rem', 
          fontWeight: 600,
          textDecoration: 'none',
          display: 'flex',
          alignItems: 'center',
          gap: '1rem',
          letterSpacing: '0.1em'
        }}>
          RESUME <span style={{ 
             display: 'inline-flex',
             padding: '4px 8px',
             border: '1px solid rgba(255,255,255,0.2)',
             borderRadius: '4px',
             fontSize: '0.8rem'
          }}>↗</span>
        </a>
      </div>
    </section>
  );
};

export default Hero;
