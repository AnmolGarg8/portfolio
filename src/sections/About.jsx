import React, { useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const About = () => {
  useEffect(() => {
    // Animation logic
    gsap.from('.about-terminal', {
      scrollTrigger: {
        trigger: '.about',
        start: 'top 85%'
      },
      scale: 0.95,
      x: -60,
      duration: 0.9,
      ease: 'power3.out'
    });

    gsap.fromTo('.about-content > *', 
      { opacity: 0.1, y: 40 },
      {
        scrollTrigger: {
          trigger: '.about-content',
          start: 'top 90%'
        },
        opacity: 1,
        y: 0,
        stagger: 0.15,
        duration: 0.8,
        ease: 'power3.out'
      }
    );
  }, []);

  return (
    <section className="about" id="about" style={{
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: '8rem',
      padding: '10rem 5rem',
      alignItems: 'center',
      background: '#0C0C14',
      position: 'relative'
    }}>
      <div className="about-terminal" style={{
        background: '#0A0A12',
        border: '1px solid rgba(0, 229, 255, 0.15)',
        borderRadius: '12px',
        overflow: 'hidden',
        boxShadow: '0 0 60px rgba(0, 229, 255, 0.06), 0 40px 80px rgba(0,0,0,0.5)',
        fontFamily: 'JetBrains Mono'
      }}>
        <div className="terminal-header" style={{
          background: '#111120',
          padding: '1rem 1.5rem',
          display: 'flex',
          alignItems: 'center',
          gap: '0.5rem',
          borderBottom: '1px solid rgba(255, 255, 255, 0.05)'
        }}>
          <span className="dot" style={{ width: '12px', height: '12px', borderRadius: '50%', backgroundColor: '#FF5F57' }}></span>
          <span className="dot" style={{ width: '12px', height: '12px', borderRadius: '50%', backgroundColor: '#FEBC2E' }}></span>
          <span className="dot" style={{ width: '12px', height: '12px', borderRadius: '50%', backgroundColor: '#28C840' }}></span>
          <span className="terminal-title" style={{ marginLeft: 'auto', fontSize: '0.7rem', color: 'var(--muted)' }}>anmol@kenet:~</span>
        </div>
        <div className="terminal-body" style={{
          padding: '2rem',
          display: 'flex',
          flexDirection: 'column',
          gap: '0.7rem'
        }}>
          <p style={{ fontSize: '0.85rem' }}><span style={{ color: '#7C3AED' }}>name</span>: <span style={{ color: '#00E5FF' }}>"Anmol Garg"</span></p>
          <p style={{ fontSize: '0.85rem' }}><span style={{ color: '#7C3AED' }}>role</span>: <span style={{ color: '#00E5FF' }}>"Full Stack Developer"</span></p>
          <p style={{ fontSize: '0.85rem' }}><span style={{ color: '#7C3AED' }}>focus</span>: [<span style={{ color: '#F59E0B' }}>"AI"</span>, <span style={{ color: '#F59E0B' }}>"IoT"</span>, <span style={{ color: '#F59E0B' }}>"Cybersecurity"</span>]</p>
          <p style={{ fontSize: '0.85rem' }}><span style={{ color: '#7C3AED' }}>startup</span>: <span style={{ color: '#00E5FF' }}>"Kenet Technologies"</span></p>
          <p style={{ fontSize: '0.85rem' }}><span style={{ color: '#7C3AED' }}>education</span>: <span style={{ color: '#00E5FF' }}>"VIPS, B.Tech CSE 2024-28"</span></p>
          <p style={{ fontSize: '0.85rem' }}><span style={{ color: '#7C3AED' }}>achievement</span>: <span style={{ color: '#F59E0B' }}>"Samsung Top 10 National"</span></p>
          <p style={{ fontSize: '0.85rem' }}><span style={{ color: '#7C3AED' }}>location</span>: <span style={{ color: '#00E5FF' }}>"Noida, India"</span></p>
          <p style={{ fontSize: '0.85rem' }} className="t-cursor">█</p>
        </div>
      </div>

      <div className="about-content" style={{ position: 'relative', zIndex: 5 }}>
        <span className="section-label">// ABOUT ME</span>
        <h2 className="about-heading" style={{
          fontFamily: 'Times New Roman',
          fontWeight: 700,
          fontSize: 'clamp(1.8rem, 3vw, 2.8rem)',
          lineHeight: '1.15',
          color: '#F8FAFC',
          marginBottom: '1.5rem'
        }}>
          Building the future, one <span className="gradient-text">intelligent system</span> at a time.
        </h2>
        <p className="about-bio" style={{
          fontFamily: 'Times New Roman',
          fontSize: '1rem',
          lineHeight: '1.8',
          color: 'var(--muted)',
          marginBottom: '2.5rem',
          maxWidth: '52ch'
        }}>
          Aspiring Software Engineer from Noida, India, passionate about Artificial Intelligence, Machine Learning, IoT and Cybersecurity. I build intelligent sensor-based systems and scalable full-stack applications that solve real-world problems. Co-Founder of Kenet Technologies — Top 10 National Semifinalist at Samsung Solve for Tomorrow 2025.
        </p>
        
        <a href="#" className="btn-download" style={{
          display: 'inline-flex',
          alignItems: 'center',
          gap: '0.5rem',
          border: '1px solid var(--dim)',
          color: 'var(--muted)',
          padding: '0.8rem 1.8rem',
          fontFamily: 'Times New Roman',
          fontSize: '0.85rem',
          letterSpacing: '0.08em',
          textDecoration: 'none',
          transition: 'all 0.3s ease'
        }}>
          DOWNLOAD RESUME ↓
        </a>
      </div>

      <style>{`
        .t-cursor { animation: blink 1s infinite; color: #00E5FF; }
        .btn-download:hover {
          border-color: #00E5FF;
          color: #00E5FF;
          transform: translateY(-2px);
        }
        @media (max-width: 768px) {
          .about {
            grid-template-columns: 1fr !important;
            gap: 4rem !important;
          }
        }
      `}</style>
    </section>
  );
};

export default About;
