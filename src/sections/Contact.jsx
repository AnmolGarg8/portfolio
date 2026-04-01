import React from 'react';

const Contact = () => {
  return (
    <section className="contact" id="contact" style={{
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: '8rem',
      padding: '10rem 5rem',
      alignItems: 'start',
      background: '#060608'
    }}>
      <div className="contact-left">
        <span className="section-label">// GET IN TOUCH</span>
        <h2 className="contact-heading" style={{
          fontFamily: 'Clash Display',
          fontWeight: 700,
          fontSize: 'clamp(2.5rem, 5vw, 4.5rem)',
          lineHeight: '1.1',
          color: '#F8FAFC',
          marginBottom: '2rem'
        }}>
          Let's Build Something <br />
          <span className="gradient-text">Incredible</span>
        </h2>
        <p className="contact-desc" style={{
          fontFamily: 'Inter',
          color: 'rgba(248, 250, 252, 0.4)',
          fontSize: '1rem',
          lineHeight: '1.8',
          marginBottom: '3rem',
          maxWidth: '45ch'
        }}>
          Whether it's a startup idea, a complex AI system, or a quick chat about tech — I'm always open to new connections.
        </p>

        <div className="contact-links" style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
          <a href="mailto:anmolgarg1605@gmail.com" className="contact-link" style={{
            display: 'flex', alignItems: 'center', gap: '1rem', color: 'rgba(248, 250, 252, 0.4)', textDecoration: 'none', transition: 'all 0.3s'
          }}>
            <span style={{ color: '#00E5FF' }}>✉</span> anmolgarg1605@gmail.com
          </a>
          <a href="https://github.com/AnmolGarg8" target="_blank" rel="noopener noreferrer" className="contact-link" style={{
            display: 'flex', alignItems: 'center', gap: '1rem', color: 'rgba(248, 250, 252, 0.4)', textDecoration: 'none', transition: 'all 0.3s'
          }}>
            <span style={{ color: '#00E5FF' }}>⌥</span> github.com/AnmolGarg8
          </a>
          <a href="https://linkedin.com/in/anmol-garg2005" target="_blank" rel="noopener noreferrer" className="contact-link" style={{
            display: 'flex', alignItems: 'center', gap: '1rem', color: 'rgba(248, 250, 252, 0.4)', textDecoration: 'none', transition: 'all 0.3s'
          }}>
            <span style={{ color: '#00E5FF' }}>◈</span> linkedin.com/in/anmol-garg2005
          </a>
        </div>
      </div>

      <div className="contact-right">
        <form className="contact-form" style={{ display: 'flex', flexDirection: 'column', gap: '2.5rem' }}>
          <div className="form-group" style={{ position: 'relative' }}>
            <input type="text" className="form-input" placeholder=" " required style={{
              width: '100%', background: 'transparent', border: 'none', borderBottom: '1px solid rgba(248, 250, 252, 0.12)', padding: '1rem 0', color: '#F8FAFC', outline: 'none'
            }} />
            <label className="form-label" style={{
              position: 'absolute', top: '1rem', left: 0, pointerEvents: 'none', color: 'rgba(248, 250, 252, 0.4)', fontSize: '0.7rem', textTransform: 'uppercase', letterSpacing: '0.1em', transition: 'all 0.3s'
            }}>Your Name</label>
          </div>

          <div className="form-group" style={{ position: 'relative' }}>
            <input type="email" className="form-input" placeholder=" " required style={{
              width: '100%', background: 'transparent', border: 'none', borderBottom: '1px solid rgba(248, 250, 252, 0.12)', padding: '1rem 0', color: '#F8FAFC', outline: 'none'
            }} />
            <label className="form-label" style={{
              position: 'absolute', top: '1rem', left: 0, pointerEvents: 'none', color: 'rgba(248, 250, 252, 0.4)', fontSize: '0.7rem', textTransform: 'uppercase', letterSpacing: '0.1em', transition: 'all 0.3s'
            }}>Email Address</label>
          </div>

          <div className="form-group" style={{ position: 'relative' }}>
            <textarea className="form-textarea" placeholder=" " required style={{
              width: '100%', minHeight: '120px', background: 'transparent', border: 'none', borderBottom: '1px solid rgba(248, 250, 252, 0.12)', padding: '1rem 0', color: '#F8FAFC', outline: 'none'
            }}></textarea>
            <label className="form-label" style={{
              position: 'absolute', top: '1rem', left: 0, pointerEvents: 'none', color: 'rgba(248, 250, 252, 0.4)', fontSize: '0.7rem', textTransform: 'uppercase', letterSpacing: '0.1em', transition: 'all 0.3s'
            }}>Your Message</label>
          </div>

          <button type="submit" className="btn-submit" style={{
            background: 'linear-gradient(135deg, #00E5FF, #7C3AED)', border: 'none', padding: '1.2rem 3rem', color: '#060608', fontFamily: 'Inter', fontWeight: 700, fontSize: '0.9rem', letterSpacing: '0.1em', textTransform: 'uppercase', cursor: 'pointer', alignSelf: 'flex-start', transition: 'all 0.3s ease'
          }}>SEND MESSAGE</button>
        </form>
      </div>

      <style>{`
        .form-input:focus ~ .form-label,
        .form-input:not(:placeholder-shown) ~ .form-label,
        .form-textarea:focus ~ .form-label,
        .form-textarea:not(:placeholder-shown) ~ .form-label {
          top: -1rem; font-size: 0.6rem; color: #00E5FF;
        }
        .form-input:focus, .form-textarea:focus { border-bottom-color: #00E5FF !important; }
        .contact-link:hover { color: #00E5FF !important; transform: translateX(5px); }
        .btn-submit:hover { transform: translateY(-3px); box-shadow: 0 10px 30px rgba(0, 229, 255, 0.3); opacity: 0.9; }
        @media (max-width: 1024px) {
          .contact { grid-template-columns: 1fr !important; gap: 5rem !important; }
        }
      `}</style>
    </section>
  );
};

export default Contact;
