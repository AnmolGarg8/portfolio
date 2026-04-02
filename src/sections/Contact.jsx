import React from 'react';

const Contact = () => {
  return (
    <section className="contact" id="contact" style={{
      padding: '10rem 10vw',
      background: '#080810',
      display: 'grid',
      gridTemplateColumns: '1fr 1.2fr',
      gap: '8rem',
      alignItems: 'start'
    }}>
      
      {/* LEFT: CONTACT INFO */}
      <div className="reveal">
        <span className="section-label">// CONTACT</span>
        <h2 style={{
          fontSize: 'clamp(2.5rem, 5vw, 4rem)',
          lineHeight: '1.1',
          color: '#FFFFFF',
          marginBottom: '2rem'
        }}>
          Let's Build <br />
          Something <span className="italic-accent">Incredible</span>
        </h2>
        
        <p style={{
          fontFamily: 'DM Mono',
          fontSize: '0.95rem',
          color: 'rgba(255, 255, 255, 0.4)',
          marginBottom: '4rem',
          maxWidth: '400px',
          lineHeight: '1.8'
        }}>
          Whether it's a startup idea, a complex AI system, or a quick chat about tech — I'm always open to new connections.
        </p>

        <div style={{ display: 'flex', flexDirection: 'column' }}>
          {[
            { label: 'EMAIL', val: 'anmolgarg1605@gmail.com', icon: '✉' },
            { label: 'GITHUB', val: 'github.com/AnmolGarg8', icon: '⌥' },
            { label: 'LINKEDIN', val: 'linkedin.com/in/anmol-garg', icon: '◈' }
          ].map((item, i) => (
            <div key={i} style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              padding: '2rem 0',
              borderBottom: '1px solid rgba(255, 255, 255, 0.08)',
              transition: '0.3s'
            }} className="contact-row">
              <div style={{ display: 'flex', alignItems: 'center', gap: '2rem' }}>
                <div style={{
                  width: '40px',
                  height: '40px',
                  borderRadius: '50%',
                  border: '1px solid rgba(255, 255, 255, 0.1)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '1rem',
                  color: '#a78bfa'
                }}>{item.icon}</div>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.3rem' }}>
                  <span style={{ fontFamily: 'DM Mono', fontSize: '0.65rem', color: 'rgba(255, 255, 255, 0.3)', letterSpacing: '0.1em' }}>{item.label}</span>
                  <span style={{ fontFamily: 'DM Mono', fontSize: '0.9rem', color: '#FFFFFF' }}>{item.val}</span>
                </div>
              </div>
              <div className="arrow" style={{ opacity: 0, transition: '0.3s', color: '#a78bfa' }}>↗</div>
            </div>
          ))}
        </div>
      </div>

      {/* RIGHT: FORM */}
      <div className="reveal" style={{ background: '#0a0a14', padding: '4rem', borderRadius: '4px', border: '1px solid rgba(255, 255, 255, 0.03)' }}>
        <form style={{ display: 'flex', flexDirection: 'column', gap: '2.5rem' }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.8rem' }}>
            <label style={{ fontFamily: 'DM Mono', fontSize: '0.7rem', color: 'rgba(255, 255, 255, 0.3)', letterSpacing: '0.1em' }}>YOUR NAME</label>
            <input type="text" style={{
              background: '#111122', border: '1px solid rgba(255, 255, 255, 0.08)', padding: '1.2rem', color: '#FFFFFF', fontFamily: 'DM Mono', fontSize: '0.9rem', outline: 'none', transition: '0.3s'
            }} onFocus={(e) => e.target.style.borderColor = '#7c3aed'} onBlur={(e) => e.target.style.borderColor = 'rgba(255, 255, 255, 0.08)'} />
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.8rem' }}>
            <label style={{ fontFamily: 'DM Mono', fontSize: '0.7rem', color: 'rgba(255, 255, 255, 0.3)', letterSpacing: '0.1em' }}>EMAIL ADDRESS</label>
            <input type="email" style={{
              background: '#111122', border: '1px solid rgba(255, 255, 255, 0.08)', padding: '1.2rem', color: '#FFFFFF', fontFamily: 'DM Mono', fontSize: '0.9rem', outline: 'none', transition: '0.3s'
            }} onFocus={(e) => e.target.style.borderColor = '#7c3aed'} onBlur={(e) => e.target.style.borderColor = 'rgba(255, 255, 255, 0.08)'} />
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.8rem' }}>
            <label style={{ fontFamily: 'DM Mono', fontSize: '0.7rem', color: 'rgba(255, 255, 255, 0.3)', letterSpacing: '0.1em' }}>YOUR MESSAGE</label>
            <textarea style={{
              background: '#111122', border: '1px solid rgba(255, 255, 255, 0.08)', padding: '1.2rem', color: '#FFFFFF', fontFamily: 'DM Mono', fontSize: '0.9rem', outline: 'none', minHeight: '150px', resize: 'vertical', transition: '0.3s'
            }} onFocus={(e) => e.target.style.borderColor = '#7c3aed'} onBlur={(e) => e.target.style.borderColor = 'rgba(255, 255, 255, 0.08)'} />
          </div>

          <button type="submit" style={{
            background: '#7c3aed',
            color: '#FFFFFF',
            padding: '1.2rem 3rem',
            fontFamily: 'Syne',
            fontWeight: 700,
            fontSize: '0.85rem',
            letterSpacing: '0.15em',
            border: 'none',
            cursor: 'pointer',
            marginTop: '1rem',
            alignSelf: 'flex-start',
            clipPath: 'polygon(10% 0, 100% 0, 90% 100%, 0% 100%)',
            transition: '0.3s'
          }} className="submit-btn">SEND MESSAGE</button>
        </form>
      </div>

      <style>{`
        .contact-row:hover { background: rgba(255, 255, 255, 0.02); padding-left: 1rem; }
        .contact-row:hover .arrow { opacity: 1; transform: translateX(5px); }
        .submit-btn:hover { background: #6d28d9; transform: translateY(-3px); box-shadow: 0 10px 30px rgba(124, 58, 237, 0.3); }
      `}</style>
    </section>
  );
};

export default Contact;
