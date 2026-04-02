import React, { useState, useEffect, useRef } from 'react';

const GeometricGraphic = ({ type }) => {
  if (type === 'fullstack') {
    return (
      <div style={{ position: 'relative', width: '120px', height: '120px', opacity: 0.2 }}>
        <div style={{ position: 'absolute', inset: 0, border: '1px solid #7c3aed', borderRadius: '4px' }} />
        <div style={{ position: 'absolute', top: '10px', left: '10px', width: '30px', height: '30px', background: '#7c3aed', opacity: 0.3 }} />
        <div style={{ position: 'absolute', bottom: '15px', right: '15px', width: '50px', height: '50px', border: '1px solid #a78bfa', borderRadius: '50%' }} />
        <div style={{ position: 'absolute', top: '20px', right: '20px', width: '20px', height: '1px', background: '#f0eeff' }} />
        <div style={{ position: 'absolute', top: '25px', right: '20px', width: '15px', height: '1px', background: '#f0eeff' }} />
      </div>
    );
  }
  if (type === 'ai') {
    return (
      <div style={{ position: 'relative', width: '120px', height: '120px', opacity: 0.2 }}>
        <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', width: '60px', height: '60px', border: '1px dotted #7c3aed', borderRadius: '50%' }} />
        <div style={{ position: 'absolute', top: '50%', left: '25%', width: '8px', height: '8px', background: '#f0eeff', borderRadius: '50%' }} />
        <div style={{ position: 'absolute', top: '50%', right: '25%', width: '8px', height: '8px', background: '#f0eeff', borderRadius: '50%' }} />
        <div style={{ position: 'absolute', top: '25%', left: '50%', width: '8px', height: '8px', background: '#f0eeff', borderRadius: '50%' }} />
        <div style={{ position: 'absolute', bottom: '25%', left: '50%', width: '8px', height: '8px', background: '#f0eeff', borderRadius: '50%' }} />
        <div style={{ position: 'absolute', top: '50%', left: '32%', width: '40px', height: '1px', background: 'rgba(255,255,255,0.2)' }} />
        <div style={{ position: 'absolute', top: '35%', left: '50%', width: '1px', height: '40px', background: 'rgba(255,255,255,0.2)' }} />
      </div>
    );
  }
  if (type === 'iot') {
    return (
      <div style={{ position: 'relative', width: '120px', height: '120px', opacity: 0.2 }}>
        {[...Array(4)].map((_, i) => (
          <div key={i} style={{ 
            position: 'absolute', 
            top: '50%', 
            left: '50%', 
            transform: `translate(-50%, -50%) scale(${0.4 + i*0.2})`, 
            width: '100px', 
            height: '100px', 
            border: '1px solid #7c3aed', 
            borderRadius: '50%',
            opacity: 1 - i*0.2
          }} />
        ))}
        <div style={{ position: 'absolute', top: '20%', left: '50%', transform: 'translateX(-50%)', width: '2px', height: '30px', background: '#a78bfa' }} />
      </div>
    );
  }
  if (type === 'security') {
    return (
      <div style={{ position: 'relative', width: '120px', height: '120px', opacity: 0.2 }}>
        <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%) rotate(45deg)', width: '60px', height: '60px', border: '2px solid #7c3aed' }} />
        <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', width: '30px', height: '30px', background: '#f0eeff', opacity: 0.3, borderRadius: '2px' }} />
        <div style={{ position: 'absolute', top: '10px', right: '10px', width: '15px', height: '15px', border: '1px solid #a78bfa' }} />
      </div>
    );
  }
  return null;
};

const WhatIDo = () => {
  const [activeTab, setActiveTab] = useState(0);
  const [scrollProgress, setScrollProgress] = useState(0);
  const sectionRef = useRef(null);

  const services = [
    {
      id: '01',
      title: 'Full Stack Development',
      subtitle: 'End-to-end web applications built for scale and performance',
      deliverables: ['React dashboards & SPAs', 'RESTful API architecture', 'MongoDB database design', 'Production deployment & CI/CD'],
      tags: ['React', 'Node.js', 'Express', 'MongoDB'],
      graphic: 'fullstack'
    },
    {
      id: '02',
      title: 'AI & Machine Learning',
      subtitle: 'Intelligent systems that learn, adapt and solve real problems',
      deliverables: ['Predictive ML models', 'Data pipelines & analysis', 'TensorFlow implementations', 'Real-world AI integrations'],
      tags: ['Python', 'TensorFlow', 'Data Analysis'],
      graphic: 'ai'
    },
    {
      id: '03',
      title: 'IoT & Embedded Systems',
      subtitle: 'Hardware meets software — sensor systems that work in the real world',
      deliverables: ['IoT sensor networks', 'Embedded C firmware', 'Hardware prototyping', 'Real-time data systems'],
      tags: ['IoT Sensors', 'Embedded C', 'Hardware'],
      graphic: 'iot'
    },
    {
      id: '04',
      title: 'Cybersecurity',
      subtitle: 'Hardening systems and thinking like an attacker to keep things secure',
      deliverables: ['Vulnerability assessment', 'Network security audits', 'Linux system hardening', 'Security architecture review'],
      tags: ['Linux', 'Network Security', 'Cybersecurity'],
      graphic: 'security'
    }
  ];

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return;
      const rect = sectionRef.current.getBoundingClientRect();
      const scrollY = window.scrollY;
      const sectionTop = rect.top + scrollY;
      const sectionHeight = rect.height;
      const scrollPos = scrollY - sectionTop;
      
      let progress = (scrollPos / (sectionHeight - window.innerHeight)) * 100;
      progress = Math.max(0, Math.min(100, progress));
      setScrollProgress(progress);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section id="services" ref={sectionRef} style={{ 
      padding: '120px 10vw', 
      background: '#080810',
      minHeight: '120vh',
      display: 'flex',
      gap: '80px',
      position: 'relative'
    }}>
      {/* LEFT COLUMN: Sticky Heading */}
      <div style={{
        flex: '1',
        maxWidth: '400px',
        height: 'fit-content',
        position: 'sticky',
        top: '120px'
      }} className="reveal">
        <span className="section-label" style={{ color: '#7c3aed' }}>// WHAT I DO</span>
        <h2 style={{ 
          fontFamily: 'Cormorant Garamond', 
          fontSize: '4.5rem', 
          fontWeight: '700', 
          lineHeight: '0.9',
          color: '#f0eeff',
          marginBottom: '2rem'
        }}>
          How I Can <br />
          <span style={{ fontStyle: 'italic', color: '#a78bfa' }}>Help You</span>
        </h2>

        {/* Progress Bar Container */}
        <div style={{ position: 'relative', height: '300px', width: '2px', background: 'rgba(255,255,255,0.05)', marginLeft: '4px' }}>
          <div style={{ 
            position: 'absolute', 
            top: 0, 
            left: 0, 
            width: '100%', 
            height: `${scrollProgress}%`, 
            background: '#7c3aed',
            boxShadow: '0 0 10px #7c3aed'
          }} />
        </div>

        {/* Giant Number Background */}
        <div style={{
          position: 'absolute',
          bottom: '-120px',
          left: '-20px',
          fontFamily: 'Cormorant Garamond',
          fontSize: '10rem',
          fontWeight: '700',
          opacity: 0.03,
          color: '#f0eeff',
          pointerEvents: 'none',
          transition: 'all 0.5s ease',
          transform: `translateY(${activeTab * 10}px)`
        }}>
          {services[activeTab].id}
        </div>
      </div>

      {/* RIGHT COLUMN: Interactive Tab Panel */}
      <div style={{ 
        flex: '1.5',
        display: 'flex',
        flexDirection: 'column',
        gap: '40px'
      }}>
        {/* Tab Buttons */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
          {services.map((service, idx) => (
            <button
              key={idx}
              onClick={() => setActiveTab(idx)}
              style={{
                background: activeTab === idx ? 'rgba(124,58,237,0.06)' : 'transparent',
                border: 'none',
                borderLeft: activeTab === idx ? '3px solid #7c3aed' : '3px solid transparent',
                padding: '24px',
                textAlign: 'left',
                cursor: 'pointer',
                transition: 'all 0.3s ease',
                display: 'flex',
                alignItems: 'center',
                gap: '20px'
              }}
            >
              <span style={{ 
                fontFamily: 'DM Mono', 
                color: activeTab === idx ? '#7c3aed' : 'rgba(240,238,255,0.2)', 
                fontSize: '0.8rem' 
              }}>
                {service.id}
              </span>
              <span style={{ 
                fontFamily: 'Syne', 
                fontWeight: '700', 
                color: activeTab === idx ? '#f0eeff' : 'rgba(240,238,255,0.4)', 
                fontSize: '0.9rem',
                textTransform: 'uppercase',
                letterSpacing: '0.1em'
              }}>
                {service.title}
              </span>
            </button>
          ))}
        </div>

        {/* Content Panel */}
        <div 
          key={activeTab}
          style={{
            background: 'linear-gradient(135deg, rgba(255,255,255,0.02) 0%, transparent 100%)',
            border: '1px solid rgba(255,255,255,0.04)',
            borderRadius: '24px',
            padding: '48px',
            animation: 'slideIn 0.5s cubic-bezier(0.2, 0.8, 0.2, 1) forwards',
            display: 'flex',
            justifyContent: 'space-between',
            gap: '40px'
          }}
        >
          <div style={{ flex: 1 }}>
            <h3 style={{ 
              fontFamily: 'Cormorant Garamond', 
              fontSize: '2.5rem', 
              fontStyle: 'italic', 
              color: '#f0eeff',
              marginBottom: '1rem'
            }}>
              {services[activeTab].title}
            </h3>
            <p style={{ 
              fontFamily: 'DM Mono', 
              fontSize: '0.85rem', 
              color: 'rgba(240,238,255,0.45)', 
              marginBottom: '2.5rem',
              maxWidth: '450px'
            }}>
              {services[activeTab].subtitle}
            </p>

            <div style={{ marginBottom: '2.5rem' }}>
              <div style={{ color: '#a78bfa', fontFamily: 'DM Mono', fontSize: '0.65rem', marginBottom: '1rem', textTransform: 'uppercase', letterSpacing: '0.1em' }}>Deliverables</div>
              {services[activeTab].deliverables.map((item, i) => (
                <div key={i} style={{ 
                  fontFamily: 'DM Mono', 
                  fontSize: '0.8rem', 
                  color: '#f0eeff', 
                  display: 'flex', 
                  alignItems: 'center', 
                  gap: '12px',
                  marginBottom: '12px'
                }}>
                  <span style={{ color: '#7c3aed' }}>›</span>
                  {item}
                </div>
              ))}
            </div>

            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px' }}>
              {services[activeTab].tags.map((tag, i) => (
                <span key={i} style={{ 
                  padding: '6px 14px', 
                  background: 'rgba(124,58,237,0.1)', 
                  border: '1px solid rgba(124,58,237,0.2)', 
                  borderRadius: '100px',
                  color: '#a78bfa',
                  fontFamily: 'DM Mono',
                  fontSize: '0.7rem'
                }}>
                  {tag}
                </span>
              ))}
            </div>
          </div>

          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <GeometricGraphic type={services[activeTab].graphic} />
          </div>
        </div>
      </div>

      <style>{`
        @keyframes slideIn {
          from { opacity: 0; transform: translateX(-20px); }
          to { opacity: 1; transform: translateX(0); }
        }
        @media (max-width: 991px) {
          section#services {
            flex-direction: column;
            gap: 40px;
          }
          div[style*="maxWidth: 400px"] {
            position: relative;
            top: 0;
            max-width: 100% !important;
          }
          div[style*="height: 300px"] {
            display: none;
          }
        }
      `}</style>
    </section>
  );
};

export default WhatIDo;
