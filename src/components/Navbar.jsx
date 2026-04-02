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
    { name: 'Work', href: '#work' },
    { name: 'About', href: '#about' },
    { name: 'Recognition', href: '#recognition' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav style={{
      position: 'fixed',
      top: 0,
      width: '100%',
      zIndex: 1000,
      background: isScrolled ? 'rgba(8, 8, 16, 0.8)' : 'transparent',
      backdropFilter: isScrolled ? 'blur(20px)' : 'none',
      borderBottom: isScrolled ? '1px solid rgba(255, 255, 255, 0.05)' : 'none',
      transition: 'all 0.4s cubic-bezier(0.19, 1, 0.22, 1)',
      padding: isScrolled ? '1.2rem 5vw' : '2.5rem 5vw',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center'
    }}>
      {/* LOGO */}
      <div style={{
        fontFamily: 'Cormorant Garamond',
        fontWeight: 700,
        fontSize: '1.8rem',
        color: '#FFFFFF',
        display: 'flex',
        alignItems: 'center',
        gap: '2px'
      }}>
        Anmol<span style={{ color: '#7c3aed' }}>.</span>
      </div>

      {/* NAV LINKS */}
      <div style={{
        display: 'flex',
        gap: '4rem',
        alignItems: 'center'
      }}>
        {navLinks.map((link) => (
          <a
            key={link.name}
            href={link.href}
            style={{
              fontFamily: 'Syne',
              fontWeight: 500,
              fontSize: '0.75rem',
              letterSpacing: '0.2em',
              color: 'rgba(255, 255, 255, 0.7)',
              textTransform: 'uppercase',
              transition: '0.3s'
            }}
            className="navbar-link"
          >
            {link.name}
          </a>
        ))}
      </div>

      {/* CTA */}
      <a href="#contact" style={{
        fontFamily: 'Syne',
        fontWeight: 700,
        fontSize: '0.75rem',
        letterSpacing: '0.15em',
        color: '#FFFFFF',
        border: '1px solid rgba(255, 255, 255, 0.15)',
        padding: '0.8rem 1.8rem',
        transition: '0.3s'
      }} className="navbar-cta">
        LET'S TALK
      </a>

      <style>{`
        .navbar-link:hover {
          color: #a78bfa;
        }
        .navbar-cta:hover {
          border-color: #a78bfa;
          background: rgba(124, 58, 237, 0.1);
          transform: translateY(-2px);
        }
        @media (max-width: 768px) {
          .nav-links { display: none; }
        }
      `}</style>
    </nav>
  );
};

export default Navbar;
