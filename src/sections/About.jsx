import React, { useState, useEffect } from 'react';

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
    }, 200);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="about" style={{
      padding: '120px 10vw',
      background: '#080810',
      width: '100vw',
      display: 'flex',
      alignItems: 'center'
    }}>
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'minmax(0, 1.2fr) minmax(0, 1fr)',
        gap: '6rem',
        alignItems: 'start',
        width: '100%'
      }}>
        
        {/* LEFT: TERMINAL */}
        <div className="reveal" style={{ transitionDelay: '0.2s' }}>
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

            <div style={{ padding: '2rem', minHeight: '320px', position: 'relative' }}>
              <div style={{ fontFamily: 'DM Mono', fontSize: '0.9rem', lineHeight: '1.8' }}>
                {typedLines.map((line, i) => (
                  <div key={i} style={{ whiteSpace: 'pre-wrap' }}>
                    {line.split(/(":|",|\[|\]|{|}|")/g).map((part, j) => {
                      let color = 'white';
                      if (part === '{' || part === '}' || part === '[' || part === ']') color = 'rgba(255,255,255,0.4)';
                      else if (part.startsWith('  "')) color = '#a78bfa'; // keys
                      else if (part.length > 2 && !part.includes(':')) color = '#86efac'; // strings
                      else if (!isNaN(part) || part === 'true' || part === 'false') color = '#fb923c'; // types
                      return <span key={j} style={{ color }}>{part}</span>;
                    })}
                  </div>
                ))}
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
              <div style={{
                position: 'absolute', inset: 0, pointerEvents: 'none',
                background: 'repeating-linear-gradient(rgba(124, 58, 237, 0.02) 0px, rgba(124, 58, 237, 0.02) 1px, transparent 1px, transparent 2px)',
                backgroundSize: '100% 2px'
              }} />
            </div>
          </div>
        </div>

        {/* RIGHT: CONTENT */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '3.5rem' }}>
          <div className="reveal" style={{ transitionDelay: '0.3s' }}>
            <span className="section-label" style={{ marginBottom: '1.5rem' }}>// ABOUT ME</span>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
              <h2 style={{ fontSize: 'clamp(2.5rem, 4.5vw, 4rem)', lineHeight: '1', color: '#FFFFFF', margin: 0 }}>Building the future, one</h2>
              <h2 style={{ fontSize: 'clamp(2.5rem, 4.5vw, 4rem)', lineHeight: '1', color: '#a78bfa', fontStyle: 'italic', margin: 0 }}>intelligent system</h2>
              <h2 style={{ fontSize: 'clamp(2.5rem, 4.5vw, 4rem)', lineHeight: '1', color: '#FFFFFF', margin: 0 }}>at a time.</h2>
            </div>
            
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem', marginTop: '2.5rem' }}>
              <p style={{ fontFamily: 'DM Mono', fontSize: '0.85rem', color: 'rgba(240,238,255,0.55)', lineHeight: '1.85' }}>
                I am a focused developer passionate about crafting high-impact digital solutions. From architecting end-to-end full stack applications to building hardware-integrated IoT systems, I thrive at the intersection of complexity and elegance.
              </p>
              <p style={{ fontFamily: 'DM Mono', fontSize: '0.85rem', color: 'rgba(240,238,255,0.55)', lineHeight: '1.85' }}>
                As the Co-Founder of Kenet Technologies, I focus on building scalable platforms that leverage AI and machine learning to solve real-world problems.
              </p>
            </div>
          </div>

          {/* Stats */}
          <div className="reveal" style={{ display: 'flex', alignItems: 'center', gap: '3rem', transitionDelay: '0.4s' }}>
            {[
              { val: '3+', label: 'PROJECTS' },
              { val: 'Top 10', label: 'NATIONAL' },
              { val: '2024', label: 'BATCH' },
              { val: '4', label: 'DOMAINS' }
            ].map((stat, i) => (
              <React.Fragment key={i}>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '5px' }}>
                  <span style={{ fontFamily: 'Cormorant Garamond', fontSize: '2.5rem', fontWeight: 700, color: '#fff', lineHeight: 1 }}>{stat.val}</span>
                  <span style={{ fontFamily: 'DM Mono', fontSize: '0.65rem', color: 'rgba(255,255,255,0.3)', letterSpacing: '0.15em' }}>{stat.label}</span>
                </div>
                {i < 3 && <div style={{ width: '1px', height: '45px', background: 'rgba(255,255,255,0.1)' }} />}
              </React.Fragment>
            ))}
          </div>

          <div className="reveal" style={{ transitionDelay: '0.5s' }}>
            <button className="btn-fill-purple" style={{
              background: 'transparent', border: '1px solid #7c3aed', color: '#fff', padding: '1.2rem 2.5rem',
              fontFamily: 'Syne', fontWeight: 700, fontSize: '0.8rem', letterSpacing: '0.15em', cursor: 'pointer',
              textTransform: 'uppercase'
            }}>DOWNLOAD RESUME ↓</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
