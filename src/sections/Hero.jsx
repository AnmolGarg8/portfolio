import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import NeuralNetwork from '../components/NeuralNetwork';

const Hero = () => {
  const heroRef = useRef(null);

  useEffect(() => {
    // GSAP ScrollTrigger and animations are handled in App.jsx via timeline
  }, []);

  return (
    <section className="hero" id="home" ref={heroRef} style={{
      minHeight: '100vh',
      width: '100%',
      position: 'relative',
      overflow: 'hidden',
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      alignItems: 'center',
      padding: '0 5rem',
      backgroundColor: '#060608'
    }}>
      <div className="hero-left" style={{ position: 'relative', zIndex: 10 }}>
        <div className="hero-eyebrow" style={{
          display: 'flex',
          alignItems: 'center',
          gap: '0.6rem',
          fontFamily: 'JetBrains Mono',
          fontSize: '0.75rem',
          color: '#00E5FF',
          letterSpacing: '0.1em',
          marginBottom: '1.5rem'
        }}>
          <span className="dot-pulse" style={{
            width: '8px',
            height: '8px',
            background: '#00E5FF',
            borderRadius: '50%',
            animation: 'pulse 2s infinite'
          }}></span>
          <span>AVAILABLE FOR OPPORTUNITIES</span>
        </div>

        <h1 className="hero-title" style={{
          fontFamily: 'Clash Display',
          fontWeight: 700,
          fontSize: 'clamp(3rem, 7vw, 8rem)',
          lineHeight: '0.9',
          letterSpacing: '-0.02em',
          color: '#F8FAFC',
          margin: '0 0 1.5rem',
          display: 'flex',
          flexDirection: 'column'
        }}>
          <span className="word">ANMOL</span>
          <span className="word gradient-text">GARG</span>
        </h1>

        <div className="hero-role" style={{
          fontFamily: 'Inter',
          fontSize: '1.1rem',
          color: 'var(--muted)',
          marginBottom: '1rem',
          display: 'flex',
          alignItems: 'center',
          gap: '0.8rem'
        }}>
          <span className="role-static">Full Stack Developer</span>
          <span className="role-divider" style={{ color: 'rgba(248,250,252,0.12)' }}>·</span>
          <span className="role-typewriter" style={{ color: '#00E5FF', minWidth: '150px' }}>AI Innovator</span>
        </div>

        <div className="hero-meta" style={{
          fontFamily: 'JetBrains Mono',
          fontSize: '0.75rem',
          color: 'rgba(248,250,252,0.25)',
          letterSpacing: '0.08em',
          display: 'flex',
          gap: '0.8rem',
          marginBottom: '2.5rem'
        }}>
          <span>📍 NOIDA, INDIA</span>
          <span>·</span>
          <span>B.TECH CSE 2024–28</span>
        </div>

        <div className="hero-ctas" style={{ display: 'flex', gap: '1rem' }}>
          <a href="#work" className="btn-primary" style={{
            background: '#00E5FF',
            color: '#060608',
            padding: '0.9rem 2rem',
            fontFamily: 'Inter',
            fontWeight: 600,
            fontSize: '0.9rem',
            letterSpacing: '0.05em',
            border: 'none',
            display: 'inline-block'
          }}>
            VIEW MY WORK →
          </a>
          <a href="#contact" className="btn-ghost" style={{
            border: '1px solid rgba(248, 250, 252, 0.12)',
            color: 'rgba(248, 250, 252, 0.4)',
            padding: '0.9rem 2rem',
            fontFamily: 'Inter',
            fontSize: '0.9rem',
            display: 'inline-block'
          }}>
            LET'S CONNECT
          </a>
        </div>
      </div>

      <div className="hero-visual" style={{
        gridColumn: 2,
        height: '100vh',
        position: 'relative',
        overflow: 'hidden'
      }}>
        <NeuralNetwork />
        
        {/* Fade edges */}
        <div className="hero-visual-mask" style={{
          position: 'absolute',
          inset: 0,
          background: 'radial-gradient(ellipse at center, transparent 30%, #060608 90%)',
          pointerEvents: 'none',
          zIndex: 2
        }}></div>
      </div>

      <style>{`
        .btn-primary:hover {
          background: #F8FAFC !important;
          transform: translateY(-2px);
          box-shadow: 0 10px 30px rgba(0, 229, 255, 0.3);
        }
        .btn-ghost:hover {
          border-color: #00E5FF;
          color: #00E5FF;
          transform: translateY(-2px);
        }
        @media (max-width: 768px) {
          .hero {
            grid-template-columns: 1fr !important;
            padding-top: 8rem !important;
          }
          .hero-visual {
            grid-column: 1 !important;
            height: 320px !important;
            margin-top: 2rem;
          }
          .hero-title {
            font-size: 4rem !important;
          }
        }
      `}</style>
    </section>
  );
};

export default Hero;
