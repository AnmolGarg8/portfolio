import React from 'react';

const SkillTile = ({ title, icon, tags, watermark, isWide = false, isFull = false, hasMesh = false, hasShimmer = false }) => {
  return (
    <div className={`skill-tile reveal ${hasMesh ? 'mesh-gradient-bg' : ''}`} style={{
      gridColumn: isFull ? 'span 4' : isWide ? 'span 2' : 'span 1',
      background: !hasMesh ? 'linear-gradient(135deg, #0f0f1e 0%, #111128 100%)' : 'none',
      border: '1px solid rgba(255, 255, 255, 0.06)',
      borderRadius: '24px',
      padding: isFull ? '2rem 3rem' : '3rem',
      position: 'relative',
      overflow: 'hidden',
      transition: 'all 0.5s cubic-bezier(0.85, 0, 0.15, 1)',
      display: 'flex',
      flexDirection: isFull ? 'row' : 'column',
      alignItems: isFull ? 'center' : 'flex-start',
      gap: isFull ? '3rem' : '1.5rem'
    }}>
      {hasShimmer && <div className="shimmer-bg" style={{ position: 'absolute', inset: 0, pointerEvents: 'none', zIndex: 1 }} />}

      {/* Watermark */}
      <div style={{
        position: 'absolute',
        bottom: '0',
        right: '2rem',
        fontFamily: 'Cormorant Garamond',
        fontSize: '6.5rem',
        fontWeight: 700,
        color: '#fff',
        opacity: 0.04,
        zIndex: 0,
        pointerEvents: 'none'
      }}>{watermark}</div>

      <div style={{
        width: '48px',
        height: '48px',
        borderRadius: '50%',
        background: 'rgba(124, 58, 237, 0.12)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        fontSize: '1.2rem',
        zIndex: 2,
        border: '1px solid rgba(124, 58, 237, 0.15)'
      }}>{icon}</div>

      <div style={{ 
        display: 'flex', 
        flexDirection: 'column', 
        gap: isFull ? '0.2rem' : '1.2rem',
        zIndex: 2,
        flex: isFull ? 'none' : '1',
        width: isFull ? '200px' : 'auto'
      }}>
        <h3 style={{
          fontFamily: 'Syne',
          fontSize: '0.75rem',
          fontWeight: 700,
          letterSpacing: '0.25em',
          color: '#fff',
          textTransform: 'uppercase',
          margin: 0
        }}>{title}</h3>
        
        {!isFull && (
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.6rem' }}>
            {tags.map((tag, i) => (
              <span key={i} className="skill-tag" style={{
                fontFamily: 'DM Mono',
                fontSize: '0.65rem',
                color: '#a78bfa',
                background: 'rgba(124, 58, 237, 0.08)',
                border: '1px solid rgba(124, 58, 237, 0.2)',
                padding: '0.4rem 0.8rem',
                borderRadius: '50px',
                transition: '0.3s'
              }}>{tag}</span>
            ))}
          </div>
        )}
      </div>

      {isFull && (
        <div style={{ 
          display: 'flex', 
          flexWrap: 'wrap', 
          gap: '0.8rem',
          zIndex: 2,
          flex: 1,
          justifyContent: 'flex-start'
        }}>
          {tags.map((tag, i) => (
            <span key={i} className="skill-tag" style={{
              fontFamily: 'DM Mono',
              fontSize: '0.75rem',
              color: '#a78bfa',
              background: 'rgba(124, 58, 237, 0.08)',
              border: '1px solid rgba(124, 58, 237, 0.2)',
              padding: '0.5rem 1.2rem',
              borderRadius: '50px',
              transition: '0.3s'
            }}>{tag}</span>
          ))}
        </div>
      )}

      <style>{`
        .skill-tile:hover {
          transform: translateY(-8px);
          border-color: rgba(124, 58, 237, 0.3) !important;
          box-shadow: 0 40px 100px rgba(0,0,0,0.5), 0 0 40px rgba(124,58,237,0.12);
        }
        .skill-tag:hover {
          background: rgba(124, 58, 237, 0.2) !important;
          color: #fff !important;
          border-color: #a78bfa !important;
          transform: scale(1.05);
        }
      `}</style>
    </div>
  );
};

const Skills = () => {
  return (
    <section id="arsenal" style={{
      padding: '120px 10vw',
      background: '#080810'
    }}>
      <div style={{ marginBottom: '6rem' }}>
        <span className="section-label reveal">// TECH ARSENAL</span>
        <h2 className="reveal" style={{
          fontSize: 'clamp(2.5rem, 5vw, 4.5rem)',
          lineHeight: '1',
          color: '#FFFFFF'
        }}>The <span style={{ fontStyle: 'italic', fontWeight: 500, color: '#a78bfa' }}>Architecture</span> of My Craft</h2>
      </div>

      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(4, 1fr)',
        gap: '1.5rem',
        gridAutoRows: 'minmax(320px, auto)'
      }}>
        {/* ROW 1 */}
        <SkillTile 
          title="FRONTEND" 
          icon="🔷" 
          watermark="01" 
          isWide={true} 
          hasMesh={true}
          tags={['React.js', 'JavaScript', 'HTML/CSS', 'Tailwind', 'Next.js']}
        />
        <SkillTile 
          title="BACKEND" 
          icon="⌥" 
          watermark="02" 
          tags={['Node.js', 'Express.js', 'REST APIs', 'MongoDB']}
        />
        <SkillTile 
          title="SECURITY" 
          icon="🔒" 
          watermark="03" 
          tags={['Linux', 'Net Security', 'Cybersecurity', 'Git']}
        />

        {/* ROW 2 */}
        <SkillTile 
          title="AI / ML / IOT" 
          icon="⚛" 
          watermark="04" 
          isFull={true} 
          hasShimmer={true}
          tags={['Python', 'TensorFlow', 'IoT Sensors', 'Embedded C', 'Hardware Prototyping']}
        />
      </div>
    </section>
  );
};

export default Skills;
