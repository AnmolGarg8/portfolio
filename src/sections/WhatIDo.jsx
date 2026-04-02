import React, { useState } from 'react';

const services = [
  {
    num: '01',
    name: 'Full Stack Development',
    desc: 'End-to-end web applications built for scale and performance with modern architecture.',
    deliverables: ['React dashboards & SPAs', 'RESTful API architecture', 'MongoDB database design', 'Production deployment & CI/CD'],
    tags: ['React', 'Node.js', 'Express', 'MongoDB'],
    accent: '#7c3aed'
  },
  {
    num: '02',
    name: 'AI & Machine Learning',
    desc: 'Intelligent systems that learn, adapt and solve real-world problems through data analysis.',
    deliverables: ['Predictive ML models', 'Data pipelines & analysis', 'TensorFlow implementations', 'Real-world AI integrations'],
    tags: ['Python', 'TensorFlow', 'Data Analysis'],
    accent: '#a78bfa'
  },
  {
    num: '03',
    name: 'IoT & Embedded Systems',
    desc: 'Hardware meets software — sensor systems that work and communicate in the real world.',
    deliverables: ['IoT sensor networks', 'Embedded C firmware', 'Hardware prototyping', 'Real-time data systems'],
    tags: ['IoT Sensors', 'Embedded C', 'Hardware'],
    accent: '#10b981'
  },
  {
    num: '04',
    name: 'Cybersecurity',
    desc: 'Hardening systems and thinking like an attacker to keep your digital assets secure.',
    deliverables: ['Vulnerability assessment', 'Network security audits', 'Linux system hardening', 'Security architecture review'],
    tags: ['Linux', 'Net Security', 'Cybersecurity'],
    accent: '#f43f5e'
  }
];

const AbstractGraphic = ({ index }) => {
  if (index === 0) return (
    <div style={{ position: 'relative', width: '130px', height: '130px' }}>
      <div style={{ position: 'absolute', inset: 0, border: '1px solid rgba(124, 58, 237, 0.4)', borderRadius: '15px' }} />
      <div style={{ position: 'absolute', top: '25%', left: '20%', right: '20%', height: '8px', background: 'rgba(124, 58, 237, 0.5)', borderRadius: '4px' }} />
      <div style={{ position: 'absolute', top: '45%', left: '20%', width: '40px', height: '5px', background: 'rgba(124, 58, 237, 0.3)', borderRadius: '2px' }} />
      <div style={{ position: 'absolute', bottom: '20%', left: '20%', right: '20%', height: '25px', border: '1px dashed rgba(124, 58, 237, 0.4)', borderRadius: '4px' }} />
    </div>
  );
  if (index === 1) return (
    <div style={{ position: 'relative', width: '130px', height: '130px', display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
      {[...Array(9)].map((_, i) => (
        <div key={i} style={{ 
          width: '35px', height: '35px', border: '1px solid rgba(167, 139, 250, 0.35)', borderRadius: '50%',
          display: 'flex', alignItems: 'center', justifyContent: 'center'
        }}>
          <div style={{ width: '8px', height: '8px', background: i % 2 === 0 ? '#a78bfa' : 'transparent', borderRadius: '50%', border: '1px solid #a78bfa' }} />
        </div>
      ))}
    </div>
  );
  if (index === 2) return (
    <div style={{ position: 'relative', width: '130px', height: '130px' }}>
      <div style={{ position: 'absolute', top: '50%', left: '0', right: '0', height: '1px', background: 'rgba(16, 185, 129, 0.4)', transform: 'translateY(-50%)' }} />
      <div style={{ position: 'absolute', left: '50%', top: '0', bottom: '0', width: '1px', background: 'rgba(16, 185, 129, 0.4)', transform: 'translateX(-50%)' }} />
      <div style={{ position: 'absolute', inset: '35px', border: '2px solid #10b981', borderRadius: '50%' }} />
      <div style={{ position: 'absolute', inset: '15px', border: '1px dashed rgba(16, 185, 129, 0.5)', borderRadius: '50%' }} />
    </div>
  );
  return (
    <div style={{ position: 'relative', width: '130px', height: '130px' }}>
      <div style={{ 
        position: 'absolute', top: '20%', left: '20%', right: '20%', bottom: '20%', 
        background: 'rgba(244, 63, 94, 0.1)', border: '2px solid #f43f5e', clipPath: 'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)'
      }} />
      <div style={{ position: 'absolute', top: '48%', left: '42%', width: '16%', height: '14%', border: '1px solid #f43f5e', borderRadius: '2px' }} />
    </div>
  );
};

const WhatIDo = () => {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <section id="services" style={{
      padding: '120px 10vw', background: '#080810', display: 'grid', gridTemplateColumns: 'minmax(0, 1.2fr) minmax(0, 2fr)',
      gap: '8rem', alignItems: 'start'
    }}>
      
      {/* LEFT: STICKY heading */}
      <div style={{ position: 'sticky', top: '150px' }}>
        <span className="section-label reveal">// WHAT I DO</span>
        <h2 className="reveal" style={{ 
          fontSize: 'clamp(2.5rem, 5vw, 4.5rem)', lineHeight: '1.05', color: '#FFFFFF', margin: '1.5rem 0 3.5rem' 
        }}>How I Can <br />Help You</h2>

        <div style={{ position: 'relative', width: '2px', height: '220px', background: 'rgba(255,255,255,0.06)', marginLeft: '12px' }}>
          <div style={{
            position: 'absolute', top: 0, left: 0, width: '100%',
            height: `${((activeTab + 1) / services.length) * 100}%`,
            background: '#7c3aed', transition: 'height 0.5s cubic-bezier(0.19, 1, 0.22, 1)', boxShadow: '0 0 15px #7c3aed'
          }} />
        </div>

        <div key={activeTab} style={{
          position: 'absolute', top: '180px', left: '-30px', fontFamily: 'Cormorant Garamond', fontSize: '14rem', 
          fontWeight: 700, color: '#fff', opacity: 0.04, pointerEvents: 'none', zIndex: -1, animation: 'fadeUp 0.8s forwards'
        }}>
          {services[activeTab].num}
        </div>
      </div>

      {/* RIGHT: TABS */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: '3.5rem' }}>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.8rem' }}>
          {services.map((service, i) => (
            <button key={i} onClick={() => setActiveTab(i)} style={{
              background: activeTab === i ? 'rgba(124, 58, 237, 0.08)' : 'transparent', border: 'none',
              borderLeft: activeTab === i ? '4px solid #7c3aed' : '4px solid transparent',
              textAlign: 'left', padding: '1.8rem 2.5rem', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '2.5rem', transition: '0.4s'
            }}>
              <span style={{ fontFamily: 'DM Mono', fontSize: '0.85rem', color: activeTab === i ? '#7c3aed' : 'rgba(255,255,255,0.2)', fontWeight: 700 }}>{service.num}</span>
              <span style={{ fontFamily: 'Syne', fontSize: '1.05rem', fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', color: activeTab === i ? '#fff' : 'rgba(255,255,255,0.3)' }}>{service.name}</span>
            </button>
          ))}
        </div>

        <div key={activeTab} className="reveal-stagger active" style={{
          background: 'linear-gradient(135deg, #0f0f1e 0%, #0a0a14 100%)', borderRadius: '28px', padding: '4.5rem',
          display: 'flex', justifyContent: 'space-between', alignItems: 'center', border: '1px solid rgba(255,255,255,0.04)',
          boxShadow: '0 40px 120px rgba(0,0,0,0.5), inset 0 1px 1px rgba(255,255,255,0.05)', position: 'relative', overflow: 'hidden'
        }}>
          <div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: '2.5rem' }}>
            <h3 style={{ fontFamily: 'Cormorant Garamond', fontSize: '2.8rem', fontWeight: 500, fontStyle: 'italic', color: '#fff', lineHeight: 1 }}>{services[activeTab].name}</h3>
            <p style={{ fontFamily: 'DM Mono', fontSize: '0.88rem', color: 'rgba(255,255,255,0.5)', maxWidth: '480px', lineHeight: '1.8' }}>{services[activeTab].desc}</p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.2rem' }}>
              {services[activeTab].deliverables.map((item, i) => (
                <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '1.5rem', fontFamily: 'DM Mono', fontSize: '0.82rem', color: '#fff' }}>
                  <span style={{ color: '#7c3aed', fontSize: '1.4rem' }}>›</span>{item}
                </div>
              ))}
            </div>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.8rem', marginTop: '1.2rem' }}>
              {services[activeTab].tags.map((tag, i) => (
                <span key={i} style={{
                  fontFamily: 'DM Mono', fontSize: '0.68rem', color: services[activeTab].accent,
                  border: `1px solid rgba(${activeTab === 0 ? '124, 58, 237' : activeTab === 1 ? '167, 139, 250' : activeTab === 2 ? '16, 185, 129' : '244, 63, 94'}, 0.3)`,
                  padding: '0.5rem 1.2rem', borderRadius: '50px'
                }}>{tag}</span>
              ))}
            </div>
          </div>
          <div style={{ width: '220px', height: '220px', display: 'flex', alignItems: 'center', justifyContent: 'center', opacity: 0.8 }}>
            <AbstractGraphic index={activeTab} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhatIDo;
