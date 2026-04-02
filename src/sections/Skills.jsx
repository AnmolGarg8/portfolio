import React from 'react';

const BentoTile = ({ category, name, tags, wide, fullWidth, mesh, shimmer, index }) => {
  return (
    <div 
      className={`reveal-stagger ${mesh ? 'mesh-gradient-bg' : ''} ${shimmer ? 'shimmer-bg' : ''}`}
      style={{
        gridColumn: fullWidth ? 'span 4' : (wide ? 'span 2' : 'span 1'),
        background: mesh ? 'none' : 'linear-gradient(135deg, #0f0f1e 0%, #111128 100%)',
        border: '1px solid rgba(255,255,255,0.06)',
        borderRadius: '24px',
        padding: '32px',
        position: 'relative',
        overflow: 'hidden',
        transition: 'all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275)',
        display: 'flex',
        flexDirection: fullWidth ? 'row' : 'column',
        alignItems: fullWidth ? 'center' : 'flex-start',
        gap: '24px',
        minHeight: fullWidth ? 'auto' : '240px',
        transitionDelay: `${0.1 * index}s`,
        cursor: 'default'
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.borderColor = 'rgba(124,58,237,0.5)';
        e.currentTarget.style.boxShadow = '0 0 40px rgba(124,58,237,0.12)';
        e.currentTarget.style.transform = 'translateY(-6px)';
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.borderColor = 'rgba(255,255,255,0.06)';
        e.currentTarget.style.boxShadow = 'none';
        e.currentTarget.style.transform = 'translateY(0)';
      }}
    >
      {/* Category Icon */}
      <div style={{
        width: '40px',
        height: '40px',
        borderRadius: '50%',
        background: 'rgba(124,58,237,0.15)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        color: '#a78bfa',
        fontSize: '1.2rem',
        flexShrink: 0
      }}>
        {category === 'FRONTEND' ? '◇' : 
         category === 'BACKEND' ? '◈' : 
         category === 'SECURITY' ? '⚔' : '⌬'}
      </div>

      <div style={{ flex: 1, width: '100%' }}>
        <span style={{ 
          display: 'block',
          fontFamily: 'Syne', 
          fontWeight: '700', 
          fontSize: '0.7rem', 
          letterSpacing: '0.2em', 
          color: '#f0eeff', 
          textTransform: 'uppercase',
          marginBottom: fullWidth ? '4px' : '16px'
        }}>
          {category}
        </span>

        {fullWidth && (
          <h3 style={{ 
            fontFamily: 'Cormorant Garamond', 
            fontSize: '1.5rem', 
            color: '#f0eeff',
            marginBottom: '0' 
          }}>
            {name}
          </h3>
        )}

        <div style={{ 
          display: 'flex', 
          flexWrap: 'wrap', 
          gap: '8px',
          marginTop: fullWidth ? '0' : 'auto'
        }}>
          {tags.map((tag, i) => (
            <span 
              key={i} 
              style={{
                padding: '4px 12px',
                background: 'rgba(124,58,237,0.1)',
                border: '1px solid rgba(124,58,237,0.25)',
                borderRadius: '50px',
                fontFamily: 'DM Mono',
                fontSize: '0.7rem',
                color: '#a78bfa',
                transition: 'all 0.3s ease'
              }}
              className="tag-pill"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>

      {/* Watermark */}
      <span style={{
        position: 'absolute',
        bottom: '-1rem',
        right: '1rem',
        fontFamily: 'Cormorant Garamond',
        fontSize: '5rem',
        fontWeight: '700',
        opacity: 0.04,
        color: '#f0eeff',
        lineHeight: '1',
        pointerEvents: 'none'
      }}>
        {index < 9 ? `0${index + 1}` : index + 1}
      </span>

      <style>{`
        .tag-pill:hover {
          background: rgba(124, 58, 237, 0.25);
          color: #fff;
          border-color: #a78bfa;
        }
      `}</style>
    </div>
  );
};

const Skills = () => {
  const arsenal = [
    {
      category: 'FRONTEND',
      name: 'Dynamic Interfaces',
      tags: ['React', 'Next.js', 'Tailwind', 'Three.js', 'Framer Motion'],
      wide: true,
      mesh: true
    },
    {
      category: 'BACKEND',
      name: 'Robust Systems',
      tags: ['Node.js', 'Go', 'Express', 'Prisma', 'PostgreSQL', 'MongoDB'],
      wide: false
    },
    {
      category: 'SECURITY',
      name: 'Hardened Code',
      tags: ['Linux', 'Network Security', 'OWASP', 'Vulnerability Assessment'],
      wide: false
    },
    {
      category: 'AI/ML/IOT',
      name: 'INTELLIGENCE & CONNECTIVITY',
      tags: ['Python', 'TensorFlow', 'Data Analysis', 'IoT Sensors', 'Embedded C', 'Hardware Prototyping'],
      fullWidth: true,
      shimmer: true
    }
  ];

  return (
    <section id="arsenal" style={{ 
      padding: '120px 10vw', 
      background: '#080810',
      minHeight: '100vh',
    }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        <div className="reveal" style={{ marginBottom: '80px' }}>
          <span className="section-label" style={{ color: '#7c3aed' }}>// TECH ARSENAL</span>
          <h2 style={{ 
            fontFamily: 'Cormorant Garamond', 
            fontSize: 'max(2.5rem, 4vw)', 
            fontWeight: '700', 
            lineHeight: '1',
            color: '#f0eeff'
          }}>
            Mastering the <span style={{ fontStyle: 'italic', color: '#a78bfa' }}>Digital Forge</span>.
          </h2>
        </div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(4, 1fr)',
          gridAutoRows: 'minmax(240px, auto)',
          gap: '24px',
        }}>
          {arsenal.map((item, idx) => (
            <BentoTile key={idx} {...item} index={idx} />
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 991px) {
          div[style*="gridTemplateColumns"] {
            grid-template-columns: repeat(2, 1fr) !important;
          }
          div[style*="gridColumn: span 2"] {
            grid-column: span 2 !important;
          }
          div[style*="gridColumn: span 4"] {
            grid-column: span 2 !important;
          }
          div[style*="flexDirection: row"] {
            flex-direction: column !important;
            align-items: flex-start !important;
          }
        }
        @media (max-width: 480px) {
          div[style*="gridTemplateColumns"] {
            grid-template-columns: 1fr !important;
          }
          div[style*="gridColumn: span 2"] {
            grid-column: span 1 !important;
          }
          div[style*="gridColumn: span 4"] {
            grid-column: span 1 !important;
          }
        }
      `}</style>
    </section>
  );
};

export default Skills;
