import React, { useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Achievement = () => {
  useEffect(() => {
    gsap.from('.achievement-inner > *', {
      scrollTrigger: {
        trigger: '.achievement',
        start: 'top 70%'
      },
      opacity: 0,
      y: 40,
      stagger: 0.2,
      duration: 1,
      ease: 'power3.out'
    });
  }, []);

  return (
    <section className="achievement" id="achievements" style={{
      padding: '10rem 5rem',
      textAlign: 'center',
      position: 'relative',
      overflow: 'hidden',
      background: '#0C0C14'
    }}>
      <div className="achievement-inner" style={{ position: 'relative', zIndex: 1 }}>
        <span className="section-label" style={{ marginBottom: '1.5rem' }}>// RECOGNITION</span>
        
        <div className="achievement-badge" style={{
          display: 'inline-flex',
          alignItems: 'center',
          gap: '0.8rem',
          border: '1px solid rgba(245, 158, 11, 0.3)',
          padding: '0.5rem 1.5rem',
          marginBottom: '3rem',
          fontFamily: 'JetBrains Mono',
          fontSize: '0.75rem',
          color: '#F59E0B',
          letterSpacing: '0.2em',
          background: 'rgba(245, 158, 11, 0.05)',
          textTransform: 'uppercase'
        }}>
          <span className="badge-icon" style={{ fontSize: '1.2rem' }}>🏆</span>
          <span className="badge-text" style={{ position: 'relative', top: '1px' }}>NATIONAL SEMIFINALIST</span>
        </div>

        <h2 className="achievement-title" style={{
          fontFamily: 'Clash Display',
          fontWeight: 700,
          fontSize: 'clamp(3.5rem, 8vw, 9rem)',
          lineHeight: '0.9',
          letterSpacing: '-0.02em',
          color: '#F8FAFC',
          marginBottom: '2rem',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center'
        }}>
          <span className="title-line">SAMSUNG</span>
          <span className="title-line">SOLVE FOR</span>
          <span className="title-line accent-gold">TOMORROW 2025</span>
        </h2>

        <p className="achievement-sub" style={{
          fontFamily: 'Inter',
          color: 'rgba(248, 250, 252, 0.4)',
          fontSize: '1.1rem',
          letterSpacing: '0.05em',
          maxWidth: '60ch',
          margin: '0 auto'
        }}>
          Top 10 out of thousands of entries across India
        </p>

        <div className="achievement-rings" style={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          pointerEvents: 'none',
          zIndex: -1
        }}>
          <div className="ring ring-1"></div>
          <div className="ring ring-2"></div>
          <div className="ring ring-3"></div>
        </div>
      </div>

      <style>{`
        .accent-gold {
          background: linear-gradient(135deg, #F59E0B, #EF4444);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }
        .ring {
          position: absolute;
          border-radius: 50%;
          border: 1px solid rgba(245, 158, 11, 0.08);
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          animation: expandRing 4s ease-out infinite;
        }
        .ring-1 { width: 300px; height: 300px; animation-delay: 0s; }
        .ring-2 { width: 500px; height: 500px; animation-delay: 1.3s; }
        .ring-3 { width: 700px; height: 700px; animation-delay: 2.6s; }
        
        @media (max-width: 768px) {
          .achievement-title { font-size: 3rem !important; }
        }
      `}</style>
    </section>
  );
};

export default Achievement;
