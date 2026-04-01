import React, { useState, useEffect } from 'react';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'ABOUT', href: '#about' },
    { name: 'WORK', href: '#work' },
    { name: 'ACHIEVEMENTS', href: '#achievements' },
    { name: 'CONTACT', href: '#contact' },
  ];

  return (
    <nav className={`navbar ${isScrolled ? 'scrolled' : ''}`} style={{
      position: 'fixed',
      top: 0,
      width: '100%',
      zIndex: 1000,
      background: isScrolled ? 'rgba(6, 6, 8, 0.9)' : 'transparent',
      backdropFilter: isScrolled ? 'blur(20px)' : 'none',
      borderBottom: isScrolled ? '1px solid rgba(248, 250, 252, 0.12)' : 'none',
      transition: 'all 0.4s ease',
      padding: '1.2rem 4rem',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center'
    }}>
      <div className="nav-logo" style={{
        fontFamily: 'Clash Display',
        fontWeight: 700,
        fontSize: '1.5rem',
        display: 'flex',
        alignItems: 'center',
        gap: '0.5rem'
      }}>
        <span className="gradient-text" style={{ cursor: 'pointer' }}>[AG].</span>
        <span style={{ 
          width: '6px', 
          height: '6px', 
          backgroundColor: '#00E5FF', 
          borderRadius: '50%',
          boxShadow: '0 0 10px #00E5FF',
          animation: 'blink 1.5s infinite' 
        }}></span>
      </div>

      <div className="nav-links" style={{
        display: 'flex',
        gap: '3rem',
        alignItems: 'center'
      }}>
        {navLinks.map((link) => (
          <a
            key={link.name}
            href={link.href}
            className="nav-link-item"
            style={{
              fontFamily: 'Inter',
              fontWeight: 500,
              fontSize: '0.75rem',
              letterSpacing: '0.15em',
              color: '#F8FAFC',
              position: 'relative',
              padding: '0.5rem 0'
            }}
          >
            {link.name}
            <span className="nav-hover-line"></span>
          </a>
        ))}
      </div>

      <a href="#contact" className="nav-say-hello" style={{
        border: '1px solid #00E5FF',
        color: '#00E5FF',
        padding: '0.6rem 1.4rem',
        fontFamily: 'JetBrains Mono',
        fontSize: '0.75rem',
        letterSpacing: '0.1em',
        transition: 'all 0.3s ease'
      }}>
        [ SAY HELLO ]
      </a>

      <style>{`
        .nav-link-item:hover {
          color: #00E5FF;
        }
        .nav-hover-line {
          position: absolute;
          bottom: 0;
          left: 0;
          width: 0;
          height: 1px;
          background: #00E5FF;
          transition: width 0.3s ease;
        }
        .nav-link-item:hover .nav-hover-line {
          width: 100%;
        }
        .nav-say-hello:hover {
          background: #00E5FF;
          color: #060608;
          box-shadow: 0 0 20px rgba(0, 229, 255, 0.4);
        }
        @media (max-width: 768px) {
          .navbar {
            padding: 1rem 1.5rem !important;
          }
          .nav-links {
            display: none !important;
          }
        }
      `}</style>
    </nav>
  );
};

export default Navbar;
