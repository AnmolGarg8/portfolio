import React, { useEffect, useState } from 'react';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav 
      style={{
        position: 'fixed',
        top: 0, left: 0, right: 0,
        zIndex: 1000,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: '1.5rem 3rem',
        background: scrolled ? 'rgba(7,7,15,0.8)' : 'transparent',
        backdropFilter: scrolled ? 'blur(12px)' : 'none',
        transition: 'all 0.3s ease',
        borderBottom: scrolled ? '1px solid rgba(255,255,255,0.05)' : 'none'
      }}
    >
      <div style={{ display: 'flex', alignItems: 'center', gap: '0.2rem', fontFamily: 'Syne', fontWeight: 900, fontSize: '1.5rem', letterSpacing: '0.1em' }}>
        <span style={{ 
          background: 'linear-gradient(135deg, #00F5FF, #9B59FF)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent'
        }}>[AG]</span>
        <span style={{ color: '#00F5FF', animation: 'blink 1s infinite' }}>.</span>
      </div>

      <style dangerouslySetInnerHTML={{__html: `
        @keyframes blink { 0%, 100% { opacity: 1; } 50% { opacity: 0; } }
      `}} />

      <div style={{ display: 'flex', gap: '3rem', fontSize: '0.75rem', fontWeight: 700, letterSpacing: '0.15em', fontFamily: 'Space Grotesk' }}>
        {['ABOUT', 'WORK', 'CONTACT'].map(item => (
          <a key={item} href={`#${item.toLowerCase()}`} style={{ color: 'white', textDecoration: 'none', transition: 'color 0.3s' }} onMouseEnter={e => e.target.style.color = '#00F5FF'} onMouseLeave={e => e.target.style.color = 'white'}>
            {item}
          </a>
        ))}
      </div>

      <div>
         <a href="#contact" style={{
           display: 'inline-block',
           border: '1px solid rgba(255,255,255,0.3)',
           padding: '0.6rem 1.2rem',
           fontSize: '0.75rem',
           letterSpacing: '0.15em',
           fontFamily: 'Space Grotesk',
           color: 'white',
           textDecoration: 'none',
           textTransform: 'uppercase',
           transition: 'all 0.3s ease',
           cursor: 'pointer'
         }} onMouseEnter={e => { e.target.style.borderColor = '#00F5FF'; e.target.style.color = '#00F5FF'; }} onMouseLeave={e => { e.target.style.borderColor = 'rgba(255,255,255,0.3)'; e.target.style.color = 'white'; }}>
           SAY HELLO
         </a>
      </div>
    </nav>
  );
}
