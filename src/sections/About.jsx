import React, { useEffect, useState, useRef } from 'react';

const Terminal = () => {
  const [lines, setLines] = useState([]);
  const [isDone, setIsDone] = useState(false);
  const containerRef = useRef(null);

  const jsonContent = [
    { key: '"name"', value: '"Anmol Garg"', type: 'string' },
    { key: '"role"', value: '"Full Stack Developer & AI Enthusiast"', type: 'string' },
    { key: '"education"', value: '"B.Tech in Computer Science"', type: 'string' },
    { key: '"location"', value: '"India"', type: 'string' },
    { key: '"passionate_about"', value: '["AI", "FinTech", "IoT"]', type: 'array' },
    { key: '"open_to_work"', value: 'true', type: 'boolean' }
  ];

  useEffect(() => {
    let currentLine = 0;
    let currentChar = 0;
    let typedLines = [];

    const typeLine = () => {
      if (currentLine >= jsonContent.length) {
        setIsDone(true);
        return;
      }

      const line = jsonContent[currentLine];
      const fullLineText = `  ${line.key}: ${line.value}${currentLine === jsonContent.length - 1 ? '' : ','}`;
      
      if (currentChar === 0) {
        typedLines.push({ ...line, currentText: '' });
      }

      if (currentChar < fullLineText.length) {
        typedLines[currentLine].currentText = fullLineText.substring(0, currentChar + 1);
        setLines([...typedLines]);
        currentChar++;
        setTimeout(typeLine, 20); // Character typing speed
      } else {
        currentLine++;
        currentChar = 0;
        setTimeout(typeLine, 200); // Delay between lines
      }
    };

    const startTimeout = setTimeout(typeLine, 1000);
    return () => clearTimeout(startTimeout);
  }, []);

  return (
    <div 
      ref={containerRef}
      className="reveal"
      style={{
        background: '#08080f',
        borderRadius: '14px',
        boxShadow: '0 40px 80px rgba(0,0,0,0.6), 0 0 0 1px rgba(124,58,237,0.15), inset 0 1px 0 rgba(255,255,255,0.05)',
        width: '100%',
        maxWidth: '550px',
        margin: '0 auto',
        overflow: 'hidden',
        position: 'relative'
      }}
    >
      {/* Scanline Overlay */}
      <div style={{
        position: 'absolute',
        inset: 0,
        pointerEvents: 'none',
        background: 'repeating-linear-gradient(rgba(124,58,237,0.02) 0px, rgba(124,58,237,0.02) 1px, transparent 1px, transparent 2px)',
        backgroundSize: '100% 2px',
        zIndex: 10
      }} />

      {/* Terminal Top Bar */}
      <div style={{
        padding: '12px 16px',
        background: 'rgba(255,255,255,0.03)',
        display: 'flex',
        alignItems: 'center',
        borderBottom: '1px solid rgba(255,255,255,0.05)'
      }}>
        <div style={{ display: 'flex', gap: '6px' }}>
          <div style={{ width: '10px', height: '10px', borderRadius: '50%', background: '#ff5f56' }} />
          <div style={{ width: '10px', height: '10px', borderRadius: '50%', background: '#ffbd2e' }} />
          <div style={{ width: '10px', height: '10px', borderRadius: '50%', background: '#27c93f' }} />
        </div>
        <div style={{ flex: 1, textAlign: 'center', fontFamily: 'DM Mono', fontSize: '0.7rem', color: 'rgba(255,255,255,0.4)' }}>
          anmol_garg.json
        </div>
      </div>

      {/* JSON Content */}
      <div style={{ padding: '24px', fontFamily: 'DM Mono', fontSize: '0.85rem', lineHeight: '1.6', minHeight: '300px' }}>
        <div style={{ color: 'rgba(255,255,255,0.8)' }}>{'{'}</div>
        {lines.map((line, i) => (
          <div key={i} style={{ whiteSpace: 'pre-wrap' }}>
            {/* Split key and value for coloring */}
            {line.currentText.includes(':') ? (
              <>
                <span style={{ color: '#a78bfa' }}>{line.currentText.split(':')[0]}</span>:
                <span style={{ 
                  color: line.type === 'string' ? '#86efac' : 
                         line.type === 'array' ? '#67e8f9' : 
                         line.type === 'boolean' ? '#fb923c' : '#f0eeff'
                }}>
                  {line.currentText.split(':')[1]}
                </span>
              </>
            ) : (
              <span style={{ color: '#a78bfa' }}>{line.currentText}</span>
            )}
          </div>
        ))}
        {isDone && (
          <div style={{ marginLeft: '12px' }}>
            <span style={{ color: 'rgba(255,255,255,0.8)' }}>{'}'}</span>
            <span className="blinking-cursor" style={{ marginLeft: '4px', color: '#7c3aed' }}>█</span>
          </div>
        )}
      </div>

      <style>{`
        @keyframes blink {
          0%, 100% { opacity: 1; }
          50% { opacity: 0; }
        }
        .blinking-cursor {
          animation: blink 1s step-end infinite;
        }
      `}</style>
    </div>
  );
};

const StatPill = ({ number, label }) => (
  <div style={{ 
    display: 'flex', 
    flexDirection: 'column', 
    gap: '4px',
    padding: '0 24px',
    borderRight: '1px solid rgba(255,255,255,0.08)'
  }}>
    <span style={{ 
      fontFamily: 'Cormorant Garamond', 
      fontSize: '1.8rem', 
      fontWeight: '600', 
      color: '#f0eeff',
      lineHeight: '1'
    }}>
      {number}
    </span>
    <span style={{ 
      fontFamily: 'DM Mono', 
      fontSize: '0.6rem', 
      color: 'rgba(240,238,255,0.4)',
      textTransform: 'uppercase',
      letterSpacing: '0.1em'
    }}>
      {label}
    </span>
  </div>
);

const About = () => {
  return (
    <section id="about" style={{ 
      padding: '120px 10vw', 
      background: '#080810',
      minHeight: '100vh',
      display: 'flex',
      alignItems: 'center'
    }}>
      <div style={{ 
        width: '100%', 
        maxWidth: '1200px', 
        margin: '0 auto',
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))',
        gap: '80px',
        alignItems: 'center'
      }}>
        {/* LEFT COLUMN: Terminal */}
        <div style={{ position: 'relative' }}>
          <Terminal />
        </div>

        {/* RIGHT COLUMN: Bio */}
        <div className="reveal">
          <span className="section-label" style={{ color: '#7c3aed' }}>// ABOUT ME</span>
          <h2 style={{ 
            fontFamily: 'Cormorant Garamond', 
            fontSize: 'max(2.5rem, 4vw)', 
            fontWeight: '700', 
            lineHeight: '1.1',
            marginBottom: '2.5rem',
            color: '#f0eeff'
          }}>
            <div className="reveal-stagger" style={{ transitionDelay: '0.1s' }}>Building the future, one</div>
            <div className="reveal-stagger" style={{ transitionDelay: '0.2s', fontStyle: 'italic', color: '#a78bfa' }}>intelligent system</div>
            <div className="reveal-stagger" style={{ transitionDelay: '0.3s' }}>at a time.</div>
          </h2>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem', marginBottom: '3rem' }}>
            <p className="reveal-stagger" style={{ 
              fontFamily: 'DM Mono', 
              fontSize: '0.85rem', 
              color: 'rgba(240,238,255,0.55)', 
              lineHeight: '1.85',
              transitionDelay: '0.4s'
            }}>
              I am a developer who lives at the intersection of powerful software and intelligent design. My work focuses on building scalable full-stack applications while integrating AI and IoT to solve tangible, real-world problems.
            </p>
            <p className="reveal-stagger" style={{ 
              fontFamily: 'DM Mono', 
              fontSize: '0.85rem', 
              color: 'rgba(240,238,255,0.55)', 
              lineHeight: '1.85',
              transitionDelay: '0.5s'
            }}>
              Whether it's deploying neural networks for financial inclusion or engineering sensor-based systems for safety, I am driven by the potential of technology to uplift communities and streamline industries.
            </p>
          </div>

          <div className="reveal-stagger" style={{ 
            display: 'flex', 
            alignItems: 'center', 
            marginLeft: '-24px', 
            marginBottom: '3rem',
            transitionDelay: '0.6s'
          }}>
            <StatPill number="3+" label="Projects" />
            <StatPill number="Top 10" label="National" />
            <StatPill number="2024" label="Batch" />
            <StatPill number="4" label="Tech Domains" />
          </div>

          <a 
            href="/resume.pdf" 
            className="reveal-stagger btn-fill-purple" 
            style={{ 
              display: 'inline-flex',
              padding: '14px 28px',
              border: '1px solid #7c3aed',
              fontFamily: 'DM Mono',
              fontSize: '0.75rem',
              color: '#f0eeff',
              letterSpacing: '0.1em',
              transitionDelay: '0.7s',
              textTransform: 'uppercase'
            }}
          >
            DOWNLOAD RESUME ↓
          </a>
        </div>
      </div>
      
      <style>{`
        @media (max-width: 768px) {
          section#about {
            padding: 60px 5vw;
          }
          div[style*="gridTemplateColumns"] {
            grid-template-columns: 1fr !important;
            gap: 40px !important;
          }
        }
      `}</style>
    </section>
  );
};

export default About;
