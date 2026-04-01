import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import Character from '../components/Character';

const SocialIcon = ({ path, href, active }) => (
  <a href={href} rel="noopener noreferrer" target="_blank" style={{ 
    opacity: active ? 1 : 0.4, 
    transition: 'all 0.4s',
    backgroundColor: 'rgba(255, 255, 255, 0.03)',
    width: '42px',
    height: '42px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: '50%',
    border: active ? '1.8px solid #7C3AED' : '1px solid rgba(255, 255, 255, 0.1)',
    boxShadow: active ? '0 0 15px rgba(124, 58, 237, 0.3)' : 'none',
    transform: active ? 'scale(1.1)' : 'scale(1)',
    zIndex: 10
  }}>
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d={path}></path>
    </svg>
  </a>
);

const Hero = () => {
    const heroRef = useRef(null);
    const leftText = useRef(null);
    const rightText = useRef(null);
    const charBox = useRef(null);
    const navBar = useRef(null);

    useEffect(() => {
        const tl = gsap.timeline({ delay: 0.5 });
        tl.from(navBar.current, { y: -20, opacity: 0, duration: 0.8, ease: 'power2.out' })
          .from([leftText.current, rightText.current], { 
                y: 50, 
                opacity: 0, 
                duration: 1.2, 
                stagger: 0.2, 
                ease: 'expo.out' 
          }, '-=0.4')
          .from(charBox.current, { scale: 0.85, opacity: 0, duration: 1.5, ease: 'power4.out' }, '-=1');
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
      padding: '0 6rem'
    }}>
      {/* Background Atmosphere Atmosphere */}
      <div style={{
        position: 'absolute',
        left: '50%',
        top: '50%',
        transform: 'translate(-50%, -50%)',
        width: '120vw',
        height: '110vh',
        background: 'radial-gradient(circle at center, rgba(124, 58, 237, 0.25) 0%, transparent 60%)',
        pointerEvents: 'none',
        zIndex: 0,
        animation: 'breath-halo 6s infinite ease-in-out'
      }} />

      {/* Aurora glow streaks wisps layer */}
      <div style={{ position: 'absolute', inset: 0, pointerEvents: 'none', zIndex: 1, opacity: 0.2 }}>
        <svg width="100%" height="100%" viewBox="0 0 1440 800" preserveAspectRatio="none">
          <filter id="wisps-glow">
            <feGaussianBlur in="SourceGraphic" stdDeviation="15" />
          </filter>
          <path d="M-100,600 Q400,200 1540,600" stroke="#7C3AED" strokeWidth="4" fill="none" filter="url(#wisps-glow)" style={{ animation: 'float-wisps 15s infinite alternate linear' }} />
          <path d="M1540,250 Q1040,550 -100,250" stroke="#A855F7" strokeWidth="3" fill="none" filter="url(#wisps-glow)" style={{ animation: 'float-wisps 18s infinite alternate-reverse linear' }} />
        </svg>
      </div>

      <style>{`
        @keyframes breath-halo { 0%, 100% { opacity: 0.6; transform: translate(-50%, -50%) scale(1); } 50% { opacity: 0.9; transform: translate(-50%, -50%) scale(1.1); } }
        @keyframes float-wisps { 0% { transform: scale(1) translate(0,0); } 100% { transform: scale(1.1) translate(40px,-20px); } }
        @keyframes pulse-star { 0%, 100% { opacity: 0.4; transform: scale(0.9); } 50% { opacity: 0.9; transform: scale(1.1); } }
      `}</style>

      {/* Minimal Top Navigation */}
      <div ref={navBar} style={{ position: 'absolute', top: '2.5rem', left: '6rem', right: '6rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center', zIndex: 100 }}>
        <div style={{ fontFamily: 'Syne, sans-serif', fontWeight: 800, fontSize: '1.6rem', color: '#fff', letterSpacing: '-1px' }}>Anmol</div>
        <div style={{ display: 'flex', gap: '3rem', fontFamily: 'Inter, sans-serif', fontSize: '0.85rem', color: 'white', letterSpacing: '0.05em', fontWeight: 400 }}>
           <a href="#about" style={{ color: 'inherit', textDecoration: 'none' }}>About Us</a>
           <a href="#work" style={{ color: 'inherit', textDecoration: 'none' }}>Projects</a>
           <a href="#contact" style={{ color: 'inherit', textDecoration: 'none' }}>Contact</a>
        </div>
      </div>

      {/* Main Structural Layout - NO OVERLAP */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', width: '100%', height: '100%', position: 'relative' }}>
        {/* Left Typographic Frame */}
        <div ref={leftText} style={{ flex: '0 0 30%', zIndex: 10 }}>
          <span style={{ 
             color: '#A78BFA', 
             fontFamily: 'Inter, sans-serif', 
             fontSize: '1rem', 
             fontWeight: 500, 
             marginBottom: '1rem', 
             display: 'block' 
          }}>Hello, I'm</span>
          <h1 style={{
            fontFamily: 'Syne, sans-serif',
            fontWeight: 800,
            fontSize: '5rem',
            lineHeight: '0.9',
            color: '#FFFFFF',
            margin: 0,
            display: 'flex',
            flexDirection: 'column',
            letterSpacing: '-2.5px'
          }}>
            <span>Anmol</span>
            <span>Garg</span>
          </h1>
        </div>

        {/* Center Animated Divider (CGI Character Focal Space) */}
        <div ref={charBox} style={{ 
          flex: '0 0 38%', // Explicit wide divider
          height: '100%',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          position: 'relative',
          zIndex: 5
        }}>
           <div style={{ width: '100%', height: '100%' }}>
             <Character />
           </div>
        </div>

        {/* Right Typographic Frame */}
        <div ref={rightText} style={{ flex: '0 0 30%', textAlign: 'right', zIndex: 10 }}>
           <span style={{ color: '#A78BFA', fontFamily: 'Inter, sans-serif', fontSize: '1rem', marginBottom: '1.2rem', display: 'block' }}>Creative</span>
           <h2 style={{
             fontFamily: 'Syne, sans-serif',
             fontWeight: 800,
             fontSize: '4.5rem',
             lineHeight: '1',
             margin: 0,
             display: 'flex',
             flexDirection: 'column',
             letterSpacing: '-1.5px'
           }}>
             <span className="gradient-text" style={{ 
                background: 'linear-gradient(to right, #7C3AED, #C084FC)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                display: 'inline-flex'
             }}>Developer</span>
             <span style={{ color: '#FFFFFF' }}>& Designer</span>
           </h2>
        </div>
      </div>

      {/* Social Interface indicators Pillars */}
      <div style={{ position: 'absolute', left: '2rem', top: '50%', transform: 'translateY(-50%)', display: 'flex', flexDirection: 'column', gap: '1.2rem', zIndex: 100 }}>
          <SocialIcon path="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z M2 9h4v12H2z" href="#" />
          <SocialIcon path="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" href="#" active />
          <SocialIcon path="M22 2L11 13M22 2l-7 20-4-9-9-4 20-7z" href="#" />
          <SocialIcon path="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" href="#" />
      </div>

      <div style={{ position: 'absolute', bottom: '3rem', right: '6rem', zIndex: 100 }}>
        <a href="#" style={{ 
          fontFamily: 'Inter, sans-serif', 
          color: '#FFFFFF', 
          fontSize: '0.85rem', 
          fontWeight: 600,
          padding: '12px 32px',
          backgroundColor: 'rgba(255, 255, 255, 0.05)',
          border: '1px solid rgba(255, 255, 255, 0.15)',
          borderRadius: '50px',
          textDecoration: 'none',
          display: 'flex',
          alignItems: 'center',
          gap: '1rem',
          letterSpacing: '0.1em'
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
        animation: 'pulse-star 3s infinite ease-in-out'
      }}>✦</div>
    </section>
  );
};

export default Hero;
