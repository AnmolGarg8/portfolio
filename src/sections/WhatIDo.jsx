import React, { useState } from 'react';

const services = [
  {
    title: 'FULL STACK DEVELOPMENT',
    description: 'Specializing in building scalable, high-performance web applications using modern frameworks and distributed systems. From complex React dashboards to secure Node.js microservices.',
    tags: ['React', 'Node.js', 'Express', 'MongoDB', 'REST APIs']
  },
  {
    title: 'AI & MACHINE LEARNING',
    description: 'Developing intelligent agents and automated data pipelines. Implementing computer vision and natural language processing to solve real-world predictive modeling challenges.',
    tags: ['Python', 'TensorFlow', 'Intelligent Agents', 'Data Pipelines']
  },
  {
    title: 'IOT & EMBEDDED SYSTEMS',
    description: 'Hardware prototyping with smart sensors and MSMEs. Designing low-latency communication protocols for interconnected industrial and consumer devices.',
    tags: ['Smart Sensors', 'MSMEs', 'Hardware Prototyping', 'Embedded C']
  },
  {
    title: 'CYBERSECURITY',
    description: 'Architecting secure systems and performing network analysis. Focus on Linux hardening and implementing Zero-Trust network principles for enterprise applications.',
    tags: ['Secure Architecture', 'Network Analysis', 'Linux Hardening']
  }
];

const WhatIDo = () => {
  const [open, setOpen] = useState(0);

  const toggle = (i) => {
    setOpen(open === i ? -1 : i);
  };

  return (
    <section className="whatido" id="services" style={{
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: '8rem',
      padding: '10rem 5rem',
      alignItems: 'start',
      background: '#0C0C14'
    }}>
      <div className="whatido-left" style={{ position: 'sticky', top: '15rem' }}>
        <h2 className="whatido-heading" style={{
          fontFamily: 'Clash Display',
          fontWeight: 700,
          fontSize: 'clamp(3rem, 7vw, 9rem)',
          lineHeight: '0.88',
          letterSpacing: '-0.03em',
          color: '#F8FAFC'
        }}>
          WHAT <br />
          <span className="line2 gradient-text">I DO</span>
        </h2>
      </div>

      <div className="whatido-right">
        {services.map((s, i) => (
          <div 
            className="service-item" 
            key={i} 
            onClick={() => toggle(i)}
            style={{
              borderBottom: '1px solid rgba(248, 250, 252, 0.12)',
              padding: '2.5rem 0',
              cursor: 'pointer',
              transition: 'padding-left 0.3s ease'
            }}
          >
            <div className="service-header" style={{
              display: 'flex',
              alignItems: 'center',
              gap: '1.5rem',
              position: 'relative'
            }}>
              <span className="service-num" style={{
                fontFamily: 'JetBrains Mono',
                fontSize: '0.7rem',
                color: '#00E5FF',
                letterSpacing: '0.1em',
                minWidth: '2.5rem'
              }}>0{i + 1}</span>
              <span className="service-title" style={{
                fontFamily: 'Clash Display',
                fontSize: '1.4rem',
                fontWeight: 700,
                color: '#F8FAFC',
                flex: 1,
                letterSpacing: '0.02em'
              }}>{s.title}</span>
              <span className="service-arrow" style={{
                color: '#00E5FF',
                fontSize: '1.8rem',
                transition: 'transform 0.4s ease',
                transform: open === i ? 'rotate(45deg)' : 'rotate(0)'
              }}>+</span>
            </div>
            <div className={`service-body ${open === i ? 'open' : ''}`} style={{
              maxHeight: open === i ? '300px' : '0',
              overflow: 'hidden',
              transition: 'all 0.5s cubic-bezier(0.4, 0, 0.2, 1)',
              paddingLeft: '4rem',
              opacity: open === i ? 1 : 0
            }}>
              <p style={{
                color: 'rgba(248, 250, 252, 0.4)',
                fontFamily: 'Inter',
                lineHeight: '1.8',
                margin: '1.2rem 0',
                maxWidth: '50ch'
              }}>{s.description}</p>
              <div className="service-tags" style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
                {s.tags.map(t => (
                  <span key={t} style={{
                    fontFamily: 'JetBrains Mono',
                    fontSize: '0.68rem',
                    color: '#00E5FF',
                    border: '1px solid rgba(0, 229, 255, 0.2)',
                    padding: '0.2rem 0.6rem',
                    borderRadius: '2px'
                  }}>{t}</span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>

      <style>{`
        .service-item:hover {
          padding-left: 0.5rem;
        }
        .service-item:hover .service-title {
          color: #00E5FF;
        }
        @media (max-width: 1024px) {
          .whatido {
            grid-template-columns: 1fr !important;
            gap: 4rem !important;
          }
          .whatido-left {
            position: relative !important;
            top: 0 !important;
          }
        }
      `}</style>
    </section>
  );
};

export default WhatIDo;
