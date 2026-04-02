import React from 'react';

const Achievement = () => {
  return (
    <section className="recognition" id="recognition" style={{
      padding: '15rem 5vw',
      textAlign: 'center',
      background: '#080810',
      position: 'relative',
      overflow: 'hidden',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center'
    }}>
      {/* Background Atmosphere */}
      <div style={{
        position: 'absolute',
        width: '600px',
        height: '600px',
        background: 'radial-gradient(circle, rgba(124, 58, 237, 0.15) 0%, transparent 70%)',
        zIndex: 0
      }} />

      {/* Decorative Rings */}
      <div style={{ position: 'absolute', inset: 0, display: 'flex', alignItems: 'center', justifyContent: 'center', pointerEvents: 'none', zIndex: 1 }}>
        <div style={{ position: 'absolute', width: '300px', height: '300px', borderRadius: '50%', border: '1px solid rgba(124, 58, 237, 0.08)' }} />
        <div style={{ position: 'absolute', width: '500px', height: '500px', borderRadius: '50%', border: '1px solid rgba(124, 58, 237, 0.06)' }} />
        <div style={{ position: 'absolute', width: '700px', height: '700px', borderRadius: '50%', border: '1px solid rgba(124, 58, 237, 0.04)' }} />
      </div>

      <div className="reveal" style={{ position: 'relative', zIndex: 2 }}>
        <div style={{
          display: 'inline-flex',
          alignItems: 'center',
          gap: '0.8rem',
          background: 'rgba(245, 158, 11, 0.05)',
          border: '1px solid rgba(245, 158, 11, 0.2)',
          padding: '0.6rem 1.5rem',
          borderRadius: '50px',
          marginBottom: '3rem'
        }}>
          <span style={{ fontSize: '1.2rem' }}>🏆</span>
          <span style={{ 
            fontFamily: 'DM Mono', 
            fontSize: '0.75rem', 
            color: '#F59E0B', 
            letterSpacing: '0.2em',
            fontWeight: 700
          }}>NATIONAL SEMIFINALIST</span>
        </div>

        <h2 style={{
          fontFamily: 'Cormorant Garamond',
          fontWeight: 700,
          fontSize: 'clamp(3.5rem, 8vw, 7rem)',
          lineHeight: '0.9',
          color: '#FFFFFF',
          marginBottom: '2rem',
          letterSpacing: '-2px'
        }}>
          SAMSUNG <br />
          SOLVE FOR <br />
          <span style={{ color: '#f59e0b', fontStyle: 'italic' }}>TOMORROW</span> <br />
          <span style={{ color: '#f97316' }}>2025</span>
        </h2>

        <p style={{
          fontFamily: 'DM Mono',
          fontSize: '1rem',
          color: 'rgba(255, 255, 255, 0.4)',
          maxWidth: '500px',
          margin: '0 auto',
          letterSpacing: '0.05em',
          fontWeight: 300
        }}>
          Top 10 out of thousands of entries across India
        </p>
      </div>
    </section>
  );
};

export default Achievement;
 Greenland: 0,
