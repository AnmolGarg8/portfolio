import React, { useEffect, useRef } from 'react';

const About = () => {
  const revealRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('active');
          }
        });
      },
      { threshold: 0.1 }
    );

    const revealElements = document.querySelectorAll('.reveal');
    revealElements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  const terminalData = {
    name: "Anmol Garg",
    role: "Full Stack Developer",
    focus: ["AI", "IoT", "Cybersecurity"],
    startup: "Kenet Technologies",
    education: "VIPS, B.Tech CSE 2024-28",
    achievement: "Samsung Top 10 National",
    location: "Noida, India",
    status: "Available for work"
  };

  return (
    <section className="about" id="about" style={{
      padding: '10rem 10vw',
      display: 'grid',
      gridTemplateColumns: '1.2fr 1fr',
      gap: '8rem',
      alignItems: 'center',
      background: '#080810',
      position: 'relative',
      overflow: 'hidden'
    }}>
      
      {/* LEFT: TERMINAL WINDOW */}
      <div className="reveal" style={{
        background: '#0a0a14',
        border: '1px solid rgba(255, 255, 255, 0.05)',
        borderRadius: '12px',
        overflow: 'hidden',
        boxShadow: '0 40px 100px rgba(0,0,0,0.4)',
        position: 'relative'
      }}>
        {/* Terminal Header */}
        <div style={{
          background: 'rgba(255, 255, 255, 0.03)',
          padding: '1rem 1.5rem',
          display: 'flex',
          gap: '0.6rem',
          alignItems: 'center',
          borderBottom: '1px solid rgba(255, 255, 255, 0.05)'
        }}>
          <div style={{ width: '12px', height: '12px', borderRadius: '50%', background: '#FF5F57' }} />
          <div style={{ width: '12px', height: '12px', borderRadius: '50%', background: '#FEBC2E' }} />
          <div style={{ width: '12px', height: '12px', borderRadius: '50%', background: '#28C840' }} />
          <div style={{ marginLeft: 'auto', fontFamily: 'DM Mono', fontSize: '0.7rem', opacity: 0.3, letterSpacing: '0.1em' }}>anmol_garg.json</div>
        </div>
        
        {/* Terminal Body */}
        <div style={{ padding: '2.5rem', fontFamily: 'DM Mono', fontSize: '0.85rem', lineHeight: '1.8' }}>
          <div><span style={{ color: '#a78bfa' }}>"name"</span>: <span style={{ color: '#86efac' }}>"{terminalData.name}"</span>,</div>
          <div><span style={{ color: '#a78bfa' }}>"role"</span>: <span style={{ color: '#86efac' }}>"{terminalData.role}"</span>,</div>
          <div>
            <span style={{ color: '#a78bfa' }}>"focus"</span>: [
            <span style={{ color: '#67e8f9' }}>"{terminalData.focus[0]}"</span>, 
            <span style={{ color: '#67e8f9' }}>"{terminalData.focus[1]}"</span>, 
            <span style={{ color: '#67e8f9' }}>"{terminalData.focus[2]}"</span>
            ],
          </div>
          <div><span style={{ color: '#a78bfa' }}>"startup"</span>: <span style={{ color: '#86efac' }}>"{terminalData.startup}"</span>,</div>
          <div><span style={{ color: '#a78bfa' }}>"education"</span>: <span style={{ color: '#86efac' }}>"{terminalData.education}"</span>,</div>
          <div><span style={{ color: '#a78bfa' }}>"achievement"</span>: <span style={{ color: '#86efac' }}>"{terminalData.achievement}"</span>,</div>
          <div><span style={{ color: '#a78bfa' }}>"location"</span>: <span style={{ color: '#86efac' }}>"{terminalData.location}"</span>,</div>
          <div>
            <span style={{ color: '#a78bfa' }}>"status"</span>: <span style={{ color: '#86efac' }}>"{terminalData.status}"</span>
            <span style={{ display: 'inline-block', width: '8px', height: '15px', background: '#a78bfa', marginLeft: '5px', animation: 'blink 1s infinite', verticalAlign: 'middle' }} />
          </div>
        </div>
      </div>

      {/* RIGHT: CONTENT */}
      <div className="reveal">
        <span className="section-label">// ABOUT ME</span>
        <h2 style={{
          fontSize: 'clamp(2rem, 3.5vw, 3rem)',
          lineHeight: '1.1',
          marginBottom: '2rem',
          color: '#FFFFFF'
        }}>
          Building the future, one <span className="italic-accent">intelligent system</span> at a time.
        </h2>
        
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem', marginBottom: '3rem' }}>
          <p style={{ fontFamily: 'DM Mono', fontSize: '0.95rem', color: 'rgba(248, 250, 252, 0.7)', fontWeight: 300 }}>
            I am a software engineer and hardware enthusiast from Noida, India, specializing in the convergence of AI, IoT, and Cybersecurity. My work focuses on building resilient systems that solve tangible real-world problems.
          </p>
          <p style={{ fontFamily: 'DM Mono', fontSize: '0.95rem', color: 'rgba(248, 250, 252, 0.7)', fontWeight: 300 }}>
            As the Co-Founder of Kenet Technologies, I was recognized as a Top 10 National Semifinalist at Samsung Solve for Tomorrow 2025, validating my commitment to high-impact innovation and scalable architecture.
          </p>
        </div>

        <a href="#" style={{
          display: 'inline-flex',
          alignItems: 'center',
          gap: '1rem',
          padding: '1rem 2rem',
          border: '1px solid rgba(255, 255, 255, 0.15)',
          color: '#FFFFFF',
          fontFamily: 'DM Mono',
          fontSize: '0.8rem',
          letterSpacing: '0.1em',
          transition: '0.3s'
        }} className="about-cta">
          DOWNLOAD RESUME ↓
        </a>
      </div>

      <style>{`
        .about-cta:hover {
          border-color: #a78bfa;
          background: rgba(124, 58, 237, 0.05);
          transform: translateY(-5px);
        }
      `}</style>
    </section>
  );
};

export default About;
