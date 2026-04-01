import React from 'react';

const Footer = () => {
  return (
    <footer className="footer" style={{
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      padding: '2.5rem 5rem',
      borderTop: '1px solid rgba(248, 250, 252, 0.12)',
      background: '#060608',
      flexWrap: 'wrap',
      gap: '2rem'
    }}>
      <div className="footer-left" style={{ display: 'flex', alignItems: 'center', gap: '1.5rem' }}>
        <span className="footer-logo gradient-text" style={{ fontFamily: 'Clash Display', fontWeight: 700, fontSize: '1.2rem' }}>[AG]</span>
        <span className="footer-copy" style={{ fontFamily: 'Inter', fontSize: '0.78rem', color: 'rgba(248, 250, 252, 0.4)' }}>
          © 2025 Anmol Garg. Built with Passion.
        </span>
      </div>

      <div className="footer-right" style={{ display: 'flex', alignItems: 'center', gap: '2.5rem' }}>
        <span className="footer-made" style={{ fontFamily: 'JetBrains Mono', fontSize: '0.7rem', color: 'rgba(248, 250, 252, 0.12)', letterSpacing: '0.05em' }}>
          REACT + THREE.JS + GSAP
        </span>
        <button 
          className="back-top" 
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          style={{
            fontFamily: 'JetBrains Mono',
            fontSize: '0.7rem',
            letterSpacing: '0.15em',
            color: '#00E5FF',
            background: 'transparent',
            border: '1px solid rgba(0, 229, 255, 0.2)',
            padding: '0.5rem 1rem',
            cursor: 'pointer',
            transition: 'all 0.2s',
            borderRadius: '2px'
          }}
        >
          ↑ TOP
        </button>
      </div>

      <style>{`
        .back-top:hover {
          background: rgba(0, 229, 255, 0.08);
          border-color: #00E5FF;
        }
        @media (max-width: 768px) {
          .footer {
            flex-direction: column !important;
            text-align: center !important;
            padding: 4rem 1.5rem !important;
          }
          .footer-left, .footer-right {
            flex-direction: column !important;
            gap: 1rem !important;
          }
        }
      `}</style>
    </footer>
  );
};

export default Footer;
