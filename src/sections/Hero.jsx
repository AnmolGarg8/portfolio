import React, { useMemo } from 'react';
import characterImage from '../assets/character.png';

const Hero = () => {
  const particles = useMemo(() => Array.from({ length: 6 }).map((_, i) => ({
    id: i,
    top: `${Math.random() * 60 + 20}%`,
    left: `${Math.random() * 60 + 20}%`,
    delay: `${Math.random() * 5}s`,
    size: `${Math.random() * 3 + 2}px`
  })), []);

  return (
    <section className="hero" id="home" style={{ 
      minHeight: '100vh', 
      width: '100vw', 
      position: 'relative', 
      overflow: 'hidden',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      padding: '0 5vw',
      paddingTop: '80px'
    }}>
      {/* Background Atmosphere */}
      <div style={{
        position: 'absolute',
        inset: 0,
        background: 'radial-gradient(circle at 50% 50%, rgba(20, 20, 45, 0.4) 0%, #080810 80%)',
        zIndex: -1
      }} />

      {/* Main 3-Column Grid */}
      <div style={{
        display: 'grid',
        gridTemplateColumns: '1fr 1.2fr 1fr',
        alignItems: 'center',
        width: '100%',
        gap: '4rem',
        position: 'relative',
        zIndex: 10
      }}>
        
        {/* LEFT COLUMN: IDENTIFICATION */}
        <div className="reveal active" style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
            <div style={{ width: '30px', height: '1.5px', background: '#7c3aed' }} />
            <span style={{ fontFamily: 'DM Mono', fontSize: '0.85rem', color: '#a78bfa', letterSpacing: '0.1em' }}>FULL STACK DEVELOPER</span>
          </div>
          
          <h1 style={{ 
            fontSize: 'clamp(4rem, 7vw, 6.5rem)', 
            lineHeight: '0.9', 
            color: '#FFFFFF', 
            margin: 0,
            letterSpacing: '-2px'
          }}>
            Hello, I'm <br />
            <span className="italic-accent">Anmol</span> <br />
            Garg
          </h1>

          <p style={{ 
            fontFamily: 'DM Mono', 
            fontSize: '0.9rem', 
            fontWeight: 300, 
            color: 'rgba(255,255,255,0.7)', 
            maxWidth: '380px',
            lineHeight: '1.6'
          }}>
            Building intelligent systems at the intersection of AI, IoT & Cybersecurity. Co-Founder @ Kenet Technologies.
          </p>

          <div style={{ display: 'flex', gap: '1.5rem', marginTop: '1rem' }}>
            <a href="#work" style={{
              background: '#7c3aed',
              color: 'white',
              padding: '1rem 2rem',
              fontFamily: 'Syne',
              fontWeight: 700,
              fontSize: '0.8rem',
              letterSpacing: '0.15em',
              clipPath: 'polygon(10% 0, 100% 0, 90% 100%, 0% 100%)',
              transition: 'all 0.3s'
            }}>VIEW PROJECTS</a>
            <a href="#contact" style={{
              border: '1px solid rgba(255,255,255,0.2)',
              color: 'white',
              padding: '1rem 2rem',
              fontFamily: 'Syne',
              fontWeight: 700,
              fontSize: '0.8rem',
              letterSpacing: '0.15em',
              transition: 'all 0.3s'
            }}>LET'S TALK</a>
          </div>
        </div>

        {/* CENTER COLUMN: CHARACTER CENTERPIECE */}
        <div style={{ position: 'relative', height: '80vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          {/* Radial Glow */}
          <div style={{
            position: 'absolute',
            width: '100%',
            height: '100%',
            background: 'radial-gradient(ellipse at center, rgba(124, 60, 237, 0.45) 0%, transparent 70%)',
            zIndex: 0,
            animation: 'pulse-glow 6s infinite ease-in-out'
          }} />

          {/* Orbiting Rings */}
          <div style={{ position: 'absolute', inset: 0, zIndex: 1, pointerEvents: 'none' }}>
            <div style={{ 
              position: 'absolute', top: '50%', left: '50%', width: '480px', height: '480px', 
              border: '1px solid rgba(167, 139, 250, 0.15)', borderRadius: '50%', 
              animation: 'orbit-rotate-1 25s infinite linear' 
            }} />
            <div style={{ 
              position: 'absolute', top: '50%', left: '50%', width: '380px', height: '380px', 
              border: '1px solid rgba(167, 139, 250, 0.12)', borderRadius: '50%', 
              animation: 'orbit-rotate-2 18s infinite linear' 
            }} />
          </div>

          {/* Particles */}
          <div style={{ position: 'absolute', inset: 0, zIndex: 2, pointerEvents: 'none' }}>
            {particles.map(p => (
              <span key={p.id} style={{
                position: 'absolute', top: p.top, left: p.left, width: p.size, height: p.size,
                background: 'white', borderRadius: '50%', boxShadow: '0 0 10px #7c3aed',
                animation: 'twinkle 3s infinite ease-in-out', animationDelay: p.delay
              }} />
            ))}
          </div>

          <img 
            src={characterImage} 
            alt="3D Character" 
            style={{
              height: '100%', width: 'auto', objectFit: 'contain', position: 'relative', zIndex: 5,
              mixBlendMode: 'screen',
              WebkitMaskImage: 'linear-gradient(to bottom, black 55%, transparent 100%)',
              maskImage: 'linear-gradient(to bottom, black 55%, transparent 100%)',
              userSelect: 'none', pointerEvents: 'none'
            }}
          />
        </div>

        {/* RIGHT COLUMN: PROFESSIONAL STATS */}
        <div className="reveal active" style={{ textAlign: 'right', display: 'flex', flexDirection: 'column', alignItems: 'flex-end', gap: '4rem' }}>
          <h2 style={{ 
            fontSize: 'clamp(3rem, 5vw, 4.5rem)', lineHeight: '1', margin: 0, color: '#FFFFFF',
            textAlign: 'right'
          }}>
            <span className="italic-accent">Creative</span> <br />
            Developer, <br />
            & Designer
          </h2>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
            {[
              { val: '3+', label: 'Projects' },
              { val: 'Top 10', label: 'National Samsung' },
              { val: '2024', label: 'B.Tech CSE' }
            ].map((stat, i) => (
              <div key={i} style={{ borderLeft: '2px solid #7c3aed', paddingLeft: '1.5rem', textAlign: 'left' }}>
                <div style={{ fontFamily: 'Cormorant Garamond', fontSize: '1.8rem', fontWeight: 700, lineHeight: 1 }}>{stat.val}</div>
                <div style={{ fontFamily: 'DM Mono', fontSize: '0.7rem', textTransform: 'uppercase', color: 'rgba(255,255,255,0.4)', letterSpacing: '0.1em', marginTop: '5px' }}>{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* HERO BOTTOM BAR */}
      <div style={{ 
        position: 'absolute', bottom: 0, left: 0, width: '100%', 
        borderTop: '1px solid rgba(255,255,255,0.08)', padding: '1.5rem 5vw',
        display: 'flex', justifyContent: 'space-between', alignItems: 'center', zIndex: 20
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
          <div style={{ width: '1px', height: '20px', background: 'rgba(255,255,255,0.2)', position: 'relative', overflow: 'hidden' }}>
            <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', background: '#7c3aed', animation: 'scanline 2s infinite linear' }} />
          </div>
          <span style={{ fontFamily: 'DM Mono', fontSize: '0.7rem', letterSpacing: '0.1em', opacity: 0.6 }}>SCROLL TO EXPLORE</span>
        </div>
        
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.8rem' }}>
           <span className="pulse-circle" />
           <span style={{ fontFamily: 'DM Mono', fontSize: '0.7rem', letterSpacing: '0.1em', opacity: 0.6 }}>NOIDA, INDIA — AVAILABLE FOR WORK</span>
        </div>
      </div>
    </section>
  );
};

export default Hero;
