import React, { useMemo } from 'react';
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

const Sparkles = () => {
  const particles = useMemo(() => Array.from({ length: 15 }).map((_, i) => ({
    id: i,
    top: `${Math.random() * 80 + 10}%`,
    left: `${Math.random() * 80 + 10}%`,
    duration: `${Math.random() * 3 + 2}s`,
    delay: `${Math.random() * 5}s`,
    size: `${Math.random() * 3 + 1}px`,
  })), []);

  return (
    <div style={{ position: 'absolute', inset: 0, pointerEvents: 'none', zIndex: 2 }}>
      {particles.map(p => (
        <span key={p.id} style={{
          position: 'absolute',
          top: p.top,
          left: p.left,
          width: p.size,
          height: p.size,
          backgroundColor: '#FFFFFF',
          borderRadius: '50%',
          boxShadow: '0 0 10px #7C3AED, 0 0 20px #FFFFFF',
          animation: `twinkle ${p.duration} infinite ease-in-out`,
          animationDelay: p.delay,
          opacity: 0.8
        }} />
      ))}
    </div>
  );
};

const OrbitRings = () => (
  <div style={{ position: 'absolute', inset: 0, pointerEvents: 'none', zIndex: 1 }}>
    {/* Ring 1 */}
    <div style={{
      position: 'absolute',
      top: '45%',
      left: '50%',
      width: '550px',
      height: '550px',
      border: '1.5px solid rgba(255, 255, 255, 0.08)',
      borderRadius: '50%',
      transformStyle: 'preserve-3d',
      animation: 'orbit-rotate-1 25s infinite linear',
      pointerEvents: 'none'
    }} />
    {/* Ring 2 */}
    <div style={{
      position: 'absolute',
      top: '45%',
      left: '50%',
      width: '450px',
      height: '450px',
      border: '1px solid rgba(124, 58, 237, 0.15)',
      borderRadius: '50%',
      transformStyle: 'preserve-3d',
      animation: 'orbit-rotate-2 18s infinite linear',
      pointerEvents: 'none'
    }} />
  </div>
);

const CharacterCenterpiece = () => {
  return (
    <div style={{ 
      position: 'absolute', 
      left: '50%', 
      top: '50%', 
      transform: 'translate(-50%, -50%)',
      width: '600px',
      height: '80vh',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      zIndex: 5
    }}>
      {/* Radial Glow */}
      <div style={{
        position: 'absolute',
        width: '550px',
        height: '550px',
        background: 'radial-gradient(ellipse at center, rgba(124, 58, 237, 0.35) 0%, transparent 75%)',
        zIndex: 0,
        pointerEvents: 'none'
      }} />

      {/* Orbiting Rings */}
      <OrbitRings />

      {/* Sparkling Particles */}
      <Sparkles />

      {/* Character Image */}
      <img 
        src={characterImage} 
        alt="Portfolio Centerpiece" 
        style={{ 
          height: '100%', 
          width: 'auto',
          objectFit: 'contain',
          position: 'relative',
          zIndex: 4,
          mixBlendMode: 'screen',
          WebkitMaskImage: 'linear-gradient(to bottom, black 70%, transparent 100%)',
          maskImage: 'linear-gradient(to bottom, black 70%, transparent 100%)',
          filter: 'contrast(1.05) brightness(1.05) saturate(1.1)',
          animation: 'character-bob 6s infinite ease-in-out',
          pointerEvents: 'none'
        }} 
      />
    </div>
  );
};

const Hero = () => {
  return (
    <section className="hero" id="home" style={{
      minHeight: '100vh',
      width: '100vw',
      position: 'relative',
      overflow: 'hidden',
      background: '#0a0a0f',
      display: 'flex',
      alignItems: 'center',
      padding: '0 5vw',
    }}>
      <style>{`
        @keyframes character-bob { 
          0%, 100% { transform: translateY(0); } 
          50% { transform: translateY(-20px); } 
        }
        @keyframes aurora-glow {
          0% { opacity: 0.3; transform: scale(1); }
          50% { opacity: 0.6; transform: scale(1.1); }
          100% { opacity: 0.3; transform: scale(1); }
        }
      `}</style>

      {/* Background Atmosphere */}
      <div style={{
        position: 'absolute',
        inset: 0,
        background: 'radial-gradient(circle at 50% 50%, rgba(20, 20, 45, 1) 0%, #0a0a0f 70%)',
        zIndex: -1
      }} />

      {/* Character Visualization */}
      <CharacterCenterpiece />

      {/* Hero Content Overlay */}
      <div style={{ 
        width: '100%', 
        display: 'flex', 
        justifyContent: 'space-between', 
        alignItems: 'center', 
        zIndex: 20,
        pointerEvents: 'none'
      }}>
        {/* Left Column */}
        <div style={{ width: '40%', pointerEvents: 'auto' }}>
          <span style={{ 
            color: '#A78BFA', 
            fontFamily: 'Inter, sans-serif', 
            fontSize: '1rem', 
            letterSpacing: '0.2em',
            fontWeight: 500, 
            marginBottom: '1rem', 
            display: 'block' 
          }}>PORTFOLIO 2026</span>
          <h1 style={{
            fontFamily: 'Syne, sans-serif',
            fontWeight: 800,
            fontSize: 'clamp(4rem, 8vw, 7rem)',
            lineHeight: '0.85',
            color: '#FFFFFF',
            margin: 0,
            letterSpacing: '-3px',
            textTransform: 'uppercase'
          }}>
            Anmol<br />Garg
          </h1>
        </div>

        {/* Right Column */}
        <div style={{ width: '40%', textAlign: 'right', pointerEvents: 'auto' }}>
          <h2 style={{
            fontFamily: 'Syne, sans-serif',
            fontWeight: 800,
            fontSize: 'clamp(3rem, 5vw, 4.5rem)',
            lineHeight: '0.9',
            margin: 0,
            letterSpacing: '-1px'
          }}>
            <span style={{ 
              background: 'linear-gradient(to right, #7C3AED, #F472B6)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent'
            }}>DEVELOPER</span><br />
            <span style={{ color: '#FFFFFF' }}>& DESIGNER</span>
          </h2>
          <p style={{ 
            color: 'rgba(255,255,255,0.5)', 
            fontFamily: 'Inter, sans-serif', 
            fontSize: '0.9rem', 
            marginTop: '1.5rem',
            maxWidth: '300px',
            marginLeft: 'auto'
          }}>
            Crafting premium digital experiences through motion, depth, and cinematic interfaces.
          </p>
        </div>
      </div>

      {/* Navbar Overlay */}
      <div style={{ position: 'absolute', top: '3rem', left: '5vw', right: '5vw', display: 'flex', justifyContent: 'space-between', alignItems: 'center', zIndex: 100 }}>
        <div style={{ fontFamily: 'Syne, sans-serif', fontWeight: 800, fontSize: '1.5rem', color: '#fff' }}>AG</div>
        <div style={{ display: 'flex', gap: '4rem', fontFamily: 'Inter, sans-serif', fontSize: '0.85rem', fontWeight: 500 }}>
           {['Work', 'About', 'Contact'].map(item => (
             <a key={item} href={`#${item.toLowerCase()}`} style={{ color: 'rgba(255,255,255,0.7)', textDecoration: 'none', transition: 'color 0.3s' }}>{item}</a>
           ))}
        </div>
      </div>

      {/* Bottom Bar Elements */}
      <div style={{ position: 'absolute', left: '5vw', bottom: '3rem', display: 'flex', gap: '1.5rem', zIndex: 100 }}>
        <SocialIcon path="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z M2 9h4v12H2z" href="#" />
        <SocialIcon path="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" href="#" active />
      </div>

      <div style={{ position: 'absolute', bottom: '3.5rem', right: '5vw', zIndex: 100 }}>
        <div style={{ color: 'rgba(255,255,255,0.4)', fontFamily: 'JetBrains Mono, monospace', fontSize: '0.75rem' }}>
          SCROLL TO EXPLORE ↓
        </div>
      </div>
    </section>
  );
};

export default Hero;

