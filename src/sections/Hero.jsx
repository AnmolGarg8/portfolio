import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import Character from '../components/Character';

const SocialIcon = ({ path, href, active, label }) => (
  <div className="social-icon-wrapper" style={{ position: 'relative' }}>
    <a href={href} rel="noopener noreferrer" target="_blank" style={{ 
      opacity: active ? 1 : 0.5, 
      transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
      backgroundColor: 'rgba(255, 255, 255, 0.03)',
      width: '40px',
      height: '40px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      borderRadius: '50%',
      border: active ? '1.5px solid #7C3AED' : '1px solid rgba(255, 255, 255, 0.1)',
      boxShadow: active ? '0 0 20px rgba(124, 58, 237, 0.4)' : 'none',
      transform: active ? 'scale(1.18)' : 'scale(1)',
      cursor: 'pointer',
      zIndex: 10
    }} onMouseEnter={e => {
        e.currentTarget.style.opacity = 1;
        e.currentTarget.style.background = 'rgba(255, 255, 255, 0.08)';
    }} onMouseLeave={e => {
        if (!active) {
            e.currentTarget.style.opacity = 0.5;
            e.currentTarget.style.background = 'rgba(255, 255, 255, 0.03)';
        }
    }}>
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d={path}></path>
      </svg>
    </a>
  </div>
);

const Hero = () => {
    const leftRef = useRef(null);
    const rightRef = useRef(null);
    const charRef = useRef(null);
    const navRef = useRef(null);
    const metaRef = useRef(null);

    useEffect(() => {
        const tl = gsap.timeline({ delay: 0.5 });
        
        tl.from(navRef.current, { y: -20, opacity: 0, duration: 0.8, ease: 'power3.out' })
          .from([leftRef.current, rightRef.current], { 
                y: 40, 
                opacity: 0, 
                duration: 1.2, 
                stagger: 0.2, 
                ease: 'expo.out' 
          }, '-=0.4')
          .from(charRef.current, { scale: 0.8, opacity: 0, duration: 1.5, ease: 'power4.out' }, '-=1')
          .from(metaRef.current?.children || [], { 
                x: -20, 
                opacity: 0, 
                stagger: 0.1, 
                duration: 0.6 
          }, '-=1');
    }, []);

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
      padding: '0 8rem'
    }}>
      {/* Background Halo Glow with Breathe Animation */}
      <div style={{
        position: 'absolute',
        left: '50%',
        top: '50%',
        transform: 'translate(-50%, -50%)',
        width: '110vw',
        height: '110vh',
        background: 'radial-gradient(circle at center, rgba(91, 33, 182, 0.22) 0%, transparent 60%)',
        pointerEvents: 'none',
        zIndex: 0,
        animation: 'glow-breathe 4s infinite ease-in-out'
      }} />

      {/* Aurora Light Streaks (Wisps) */}
      <div style={{ position: 'absolute', inset: 0, pointerEvents: 'none', zIndex: 1, opacity: 0.2 }}>
        <svg width="100%" height="100%" viewBox="0 0 1440 800" preserveAspectRatio="none">
          <filter id="aurora-blur-fx">
            <feGaussianBlur in="SourceGraphic" stdDeviation="15" />
          </filter>
          <path d="M-100,650 Q400,200 1540,650" stroke="#7C3AED" strokeWidth="3" fill="none" filter="url(#aurora-blur-fx)" style={{ animation: 'aurora-float 10s infinite alternate linear' }} />
          <path d="M1540,150 Q1040,550 -100,150" stroke="#A855F7" strokeWidth="2" fill="none" filter="url(#aurora-blur-fx)" style={{ animation: 'aurora-float 14s infinite alternate-reverse linear' }} />
        </svg>
      </div>

      <style>{`
        @keyframes glow-breathe { 0%, 100% { transform: translate(-50%, -50%) scale(1); opacity: 0.8; } 50% { transform: translate(-50%, -50%) scale(1.1); opacity: 1; } }
        @keyframes aurora-float { 0% { transform: scale(1) translate(0,0); } 100% { transform: scale(1.1) translate(30px,-20px); } }
        @keyframes pulse-star { 0%, 100% { opacity: 0.3; transform: scale(0.9); } 50% { opacity: 0.8; transform: scale(1.1); } }
      `}</style>

      {/* Transparent Nav */}
      <div ref={navRef} style={{ position: 'absolute', top: '2.5rem', left: '6rem', right: '6rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center', zIndex: 100 }}>
        <div style={{ fontFamily: 'Syne, sans-serif', fontWeight: 800, fontSize: '1.6rem', color: '#fff', letterSpacing: '-1px' }}>Anmol</div>
        <div style={{ display: 'flex', gap: '3.5rem', fontFamily: 'Inter, sans-serif', fontSize: '0.85rem', color: 'rgba(255,255,255,0.7)', letterSpacing: '0.05em', fontWeight: 400 }}>
           <a href="#about" style={{ color: 'inherit', textDecoration: 'none' }}>About Us</a>
           <a href="#work" style={{ color: 'inherit', textDecoration: 'none' }}>Projects</a>
           <a href="#contact" style={{ color: 'inherit', textDecoration: 'none' }}>Contact</a>
        </div>
      </div>

      {/* Split Hero Content */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', height: '100%', position: 'relative', width: '100%' }}>
        {/* Left Typography Block */}
        <div ref={leftRef} style={{ flex: '0 0 35%', zIndex: 10, paddingLeft: '2rem' }}>
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
            fontSize: 'max(5.5rem, 8vw)',
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

        {/* Center CGI Character Focal Point */}
        <div ref={charRef} style={{ 
          position: 'absolute',
          left: '50%',
          top: '55%',
          transform: 'translate(-50%, -50%)',
          width: '550px',
          height: '100%',
          zIndex: 5,
          pointerEvents: 'none'
        }}>
           <Character />
        </div>

        {/* Right Typography Block */}
        <div ref={rightRef} style={{ flex: '0 0 35%', textAlign: 'right', zIndex: 10, paddingRight: '2rem' }}>
           <span style={{ color: '#A78BFA', fontFamily: 'Inter, sans-serif', fontSize: '1.1rem', marginBottom: '1.5rem', display: 'block' }}>Creative</span>
           <h2 style={{
             fontFamily: 'Syne, sans-serif',
             fontWeight: 800,
             fontSize: 'max(5rem, 7vw)',
             lineHeight: '0.94',
             margin: 0,
             display: 'flex',
             flexDirection: 'column',
             letterSpacing: '-1.5px'
           }}>
             <span className="gradient-text" style={{ 
                background: 'linear-gradient(to right, #7C3AED, #C084FC)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                display: 'inline-block'
             }}>Developer</span>
             <span style={{ color: '#FFFFFF' }}>& Designer</span>
           </h2>
        </div>
      </div>

      {/* Social Pillar (Left Edge) */}
      <div ref={metaRef} style={{ position: 'absolute', left: '1.5rem', top: '50%', transform: 'translateY(-50%)', display: 'flex', flexDirection: 'column', gap: '1.2rem', zIndex: 100 }}>
          <SocialIcon path="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z M2 9h4v12H2z" href="#" />
          <SocialIcon path="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" href="#" active />
          <SocialIcon path="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" href="#" />
          <SocialIcon path="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" href="#" />
      </div>

      {/* Resume Link Pillar */}
      <div style={{ position: 'absolute', bottom: '3rem', right: '6rem', zIndex: 100 }}>
        <a href="#" style={{ 
          fontFamily: 'Inter, sans-serif', 
          color: '#FFFFFF', 
          fontSize: '0.9rem', 
          fontWeight: 600,
          padding: '12px 32px',
          backgroundColor: 'rgba(255, 255, 255, 0.04)',
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

      {/* Decorative Glyph Anchor */}
      <div style={{ 
        position: 'absolute', 
        bottom: '2.5rem', 
        right: '2.5rem', 
        color: '#FFFFFF', 
        fontSize: '2.2rem', 
        opacity: 0.6,
        textShadow: '0 0 20px rgba(255,255,255,0.4)',
        zIndex: 10,
        animation: 'pulse-star 3s infinite ease-in-out'
      }}>✦</div>
    </section>
  );
};

export default Hero;
