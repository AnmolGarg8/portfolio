import React, { useState, useEffect, useRef } from 'react';

const About = () => {
  const [typedLines, setTypedLines] = useState([]);
  const [isTypingDone, setIsTypingDone] = useState(false);
  
  const jsonContent = [
    '{',
    '  "name": "Anmol Garg",',
    '  "role": "Full Stack & AI Engineer",',
    '  "location": "India",',
    '  "founder": "Kenet Technologies",',
    '  "focus": ["AI", "IoT", "Security"],',
    '  "status": "Building Future Systems"',
    '}'
  ];

  useEffect(() => {
    let lineIndex = 0;
    const interval = setInterval(() => {
      if (lineIndex < jsonContent.length) {
        setTypedLines(prev => [...prev, jsonContent[lineIndex]]);
        lineIndex++;
      } else {
        clearInterval(interval);
        setIsTypingDone(true);
      }
    }, 250);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="about" style={{
      padding: '120px 10vw',
      background: '#080810',
      width: '100vw',
      overflow: 'hidden'
    }}>
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'minmax(0, 1.2fr) minmax(0, 1fr)',
        gap: '6rem',
        alignItems: 'start'
      }}>
        
        {/* LEFT: INTERACTIVE TERMINAL */}
        <div className="reveal active" style={{ 
          position: 'relative',
          animation: 'fadeUp 1.2s cubic-bezier(0.2, 0.8, 0.2, 1) forwards'
        }}>
          <div style={{
            background: '#08080f',
            borderRadius: '14px',
            boxShadow: '0 40px 80px rgba(0,0,0,0.6), 0 0 0 1px rgba(124,58,237,0.15), inset 0 1px 0 rgba(255,255,255,0.05)',
            overflow: 'hidden',
            position: 'relative'
          }}>
            {/* macOS Bar */}
            <div style={{
              background: 'rgba(255,255,255,0.03)',
              padding: '0.8rem 1.2rem',
              display: 'flex',
              alignItems: 'center',
              borderBottom: '1px solid rgba(255,255,255,0.05)'
            }}>
              <div style={{ display: 'flex', gap: '8px' }}>
                <div style={{ width: '12px', height: '12px', borderRadius: '50%', background: '#ff5f56' }} />
                <div style={{ width: '12px', height: '12px', borderRadius: '50%', background: '#ffbd2e' }} />
                <div style={{ width: '12px', height: '12px', borderRadius: '50%', background: '#27c93f' }} />
              </div>
              <div style={{
                flex: 1,
                textAlign: 'center',
                fontFamily: 'DM Mono',
                fontSize: '0.7rem',
                color: 'rgba(255,255,255,0.3)',
                letterSpacing: '0.05em'
              }}>anmol_garg.json</div>
            </div>

            {/* Terminal Body */}
            <div style={{ padding: '2rem', minHeight: '320px', position: 'relative' }}>
              <div style={{ fontFamily: 'DM Mono', fontSize: '0.9rem', lineHeight: '1.8' }}>
                {typedLines.map((line, i) => {
                  // Basic syntax highlighting
                  const isKey = line.includes('":');
                  const isBrace = line === '{' || line === '}';
                  
                  return (
                    <div key={i} style={{ whiteSpace: 'pre-wrap' }}>
                      {line.split(/(":|",|\[|\]|{|}|")/g).map((part, j) => {
                        let color = 'white';
                        if (part === '{' || part === '}' || part === '[' || part === ']') color = 'rgba(255,255,255,0.4)';
                        else if (part.startsWith('  "')) color = '#a78bfa'; // keys
                        else if (part.length > 2 && !part.includes(':')) color = '#86efac'; // strings
                        
                        return <span key={j} style={{ color }}>{part}</span>;
                      })}
                    </div>
                  );
                })}
                {isTypingDone && (
                  <span style={{ 
                    display: 'inline-block', 
                    width: '10px', 
                    height: '18px', 
                    background: '#7c3aed', 
                    marginLeft: '5px',
                    animation: 'blink 1s infinite'
                  }}>█</span>
                )}
              </div>

              {/* Scanline Overlay */}
              <div style={{
                position: 'absolute',
                inset: 0,
                pointerEvents: 'none',
                background: 'repeating-linear-gradient(rgba(124, 58, 237, 0.02) 0px, rgba(124, 58, 237, 0.02) 1px, transparent 1px, transparent 2px)',
                backgroundSize: '100% 2px'
              }} />
            </div>
          </div>
        </div>

        {/* RIGHT: BIO CONTENT */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '3rem' }}>
          <div className="reveal" style={{ animation: 'fadeUp 0.8s 0.2s forwards' }}>
            <span className="section-label">// ABOUT ME</span>
            <h2 style={{
              fontSize: 'clamp(2.5rem, 4vw, 4rem)',
              lineHeight: '1.1',
              color: '#FFFFFF',
              margin: '1.5rem 0 2.5rem'
            }}>
              Building the future, one <br />
              <span style={{ fontStyle: 'italic', color: '#a78bfa' }}>intelligent system</span> <br />
              at a time.
            </h2>
            
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
              <p style={{
                fontFamily: 'DM Mono',
                fontSize: '0.85rem',
                color: 'rgba(240,238,255,0.55)',
                lineHeight: '1.85',
                maxWidth: '90%'
              }}>
                I am a focused developer passionate about crafting high-impact digital solutions. From architecting end-to-end full stack applications to building hardware-integrated IoT systems, I thrive at the intersection of complexity and elegance.
              </p>
              <p style={{
                fontFamily: 'DM Mono',
                fontSize: '0.85rem',
                color: 'rgba(240,238,255,0.55)',
                lineHeight: '1.85',
                maxWidth: '90%'
              }}>
                As the Co-Founder of Kenet Technologies, I focus on building scalable platforms that leverage AI and machine learning to solve real-world problems.
              </p>
            </div>
          </div>

          {/* Stat Pills */}
          <div className="reveal" style={{ 
            display: 'flex', 
            alignItems: 'center', 
            gap: '2.5rem',
            animation: 'fadeUp 0.8s 0.4s forwards'
          }}>
            {[
              { val: '3+', label: 'PROJECTS' },
              { val: 'Top 10', label: 'NATIONAL' },
              { val: '2024', label: 'BATCH' },
              { val: '4', label: 'TECH DOMAINS' }
            ].map((stat, i) => (
              <React.Fragment key={i}>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '5px' }}>
                  <span style={{ 
                    fontFamily: 'Cormorant Garamond', 
                    fontSize: '2.2rem', 
                    fontWeight: 700, 
                    color: '#fff',
                    lineHeight: 1
                  }}>{stat.val}</span>
                  <span style={{ 
                    fontFamily: 'DM Mono', 
                    fontSize: '0.6rem', 
                    color: 'rgba(255,255,255,0.3)',
                    letterSpacing: '0.15em'
                  }}>{stat.label}</span>
                </div>
                {i < 3 && <div style={{ width: '1px', height: '40px', background: 'rgba(255,255,255,0.1)' }} />}
              </React.Fragment>
            ))}
          </div>

          {/* Resume Button */}
          <div className="reveal" style={{ animation: 'fadeUp 0.8s 0.6s forwards' }}>
            <button className="btn-fill-purple" style={{
              background: 'transparent',
              border: '1px solid #7c3aed',
              color: '#fff',
              padding: '1.2rem 2.8rem',
              fontFamily: 'Syne',
              fontWeight: 700,
              fontSize: '0.85rem',
              letterSpacing: '0.1em',
              cursor: 'pointer',
              transition: '0.3s'
            }}>
              DOWNLOAD RESUME ↓
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
