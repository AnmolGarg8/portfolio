import React from 'react';
import Character from '../components/Character';

const SocialIcon = ({ path, href }) => (
  <a href={href} style={{ opacity: 0.6, transition: 'opacity 0.3s' }} onMouseEnter={e => e.currentTarget.style.opacity = 1} onMouseLeave={e => e.currentTarget.style.opacity = 0.6}>
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d={path}></path>
    </svg>
  </a>
);

const Hero = () => {
  return (
    <section className="hero" id="home" style={{
      minHeight: '100vh',
      width: '100%',
      position: 'relative',
      overflow: 'hidden',
      background: '#000000',
      display: 'flex',
      alignItems: 'center',
      padding: '0 8rem',
      gap: '2rem'
    }}>
      {/* Top Navbar Simulation */}
      <div style={{ position: 'absolute', top: '2.5rem', left: '5rem', display: 'flex', alignItems: 'center' }}>
        <div style={{ 
          width: '0', 
          height: '0', 
          borderLeft: '12px solid transparent', 
          borderRight: '12px solid transparent', 
          borderBottom: '20px solid #F8FAFC' 
        }}></div>
      </div>
      <div style={{ position: 'absolute', top: '2.5rem', right: '5rem', display: 'flex', alignItems: 'center', gap: '2rem' }}>
        <div style={{ display: 'flex', gap: '4px' }}>
          {[1,2,3,4].map(i => (
            <div key={i} style={{ width: '3px', height: `${10 + i * 4}px`, background: '#7C3AED', borderRadius: '4px' }}></div>
          ))}
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '6px', cursor: 'pointer' }}>
          <div style={{ width: '30px', height: '2px', background: '#F8FAFC' }}></div>
          <div style={{ width: '30px', height: '2px', background: '#F8FAFC' }}></div>
        </div>
      </div>

      <div className="hero-left" style={{ flex: 1.2, position: 'relative', zIndex: 10 }}>
        <span style={{
          color: '#7C3AED',
          fontFamily: 'Times New Roman', // Consistent with user's global font choice
          fontSize: '1rem',
          letterSpacing: '0.1em',
          marginBottom: '0.8rem',
          display: 'block'
        }}>Hi, my name is</span>
        
        <h1 className="hero-title" style={{
          fontFamily: 'Times New Roman',
          fontWeight: 700,
          fontSize: 'clamp(3rem, 10vw, 6.5rem)',
          lineHeight: '0.95',
          color: '#F8FAFC',
          margin: '0 0 2rem',
          position: 'relative'
        }}>
          <span style={{ 
            position: 'relative',
            display: 'inline-block'
          }}>
            Anmol
            <div style={{ 
              position: 'absolute', 
              bottom: '5px', 
              left: 0, 
              width: '100%', 
              height: '8px', 
              background: '#7C3AED', 
              opacity: 0.6,
              zIndex: -1 
            }}></div>
          </span> Garg
        </h1>

        <div style={{
          fontFamily: 'Times New Roman',
          fontSize: '1.4rem',
          color: 'rgba(248,250,252,0.4)',
          marginBottom: '3rem',
          display: 'flex',
          alignItems: 'center'
        }}>
          <span>I build things for the web|</span>
        </div>

        <div className="social-icons" style={{ display: 'flex', gap: '1.5rem', marginBottom: '3.5rem' }}>
          {/* Mail */}
          <SocialIcon path="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z M22 6l-10 7L2 6" href="#" />
          {/* Linkedin */}
          <SocialIcon path="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z M2 9h4v12H2z M4 2a2 2 0 1 1 0 4 2 2 0 0 1 0-4z" href="#" />
          {/* Github */}
          <SocialIcon path="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" href="#" />
          {/* Instagram */}
          <SocialIcon path="M17 2H7a5 5 0 0 0-5 5v10a5 5 0 0 0 5 5h10a5 5 0 0 0 5-5V7a5 5 0 0 0-5-5z M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z M17.5 6.5h.01" href="#" />
          {/* Twitter */}
          <SocialIcon path="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z" href="#" />
        </div>

        <button style={{
          background: 'transparent',
          border: '2px solid #7C3AED',
          borderRadius: '8px',
          padding: '1rem 3rem',
          color: '#F8FAFC',
          fontFamily: 'Times New Roman',
          fontSize: '0.9rem',
          fontWeight: 700,
          cursor: 'pointer',
          transition: 'all 0.3s ease',
          boxShadow: '0 0 15px rgba(124, 58, 237, 0.2)'
        }}>Let's Talk</button>
      </div>

      <div className="hero-right" style={{ 
        flex: 1, 
        height: '100vh', 
        position: 'relative'
      }}>
        <div style={{
          position: 'absolute',
          right: '-6rem',
          top: '40%',
          transform: 'rotate(90deg)',
          fontSize: '15rem',
          fontWeight: 900,
          fontFamily: 'Times New Roman',
          color: 'rgba(255,255,255,0.04)',
          pointerEvents: 'none',
          letterSpacing: '0.1em',
          whiteSpace: 'nowrap',
          zIndex: 0
        }}>DEV</div>
        
        <div style={{ width: '100%', height: '100%', position: 'relative', zIndex: 5 }}>
          <Character />
        </div>
      </div>

      {/* Bottom Icon */}
      <div style={{ position: 'absolute', bottom: '4rem', left: '5rem', opacity: 0.6 }}>
        <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z"></path>
          <circle cx="12" cy="13" r="4"></circle>
        </svg>
      </div>
    </section>
  );
};

export default Hero;
