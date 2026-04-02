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
    tags: ['Python', 'TensorFlow', 'Data Analysis']
  },
  {
    title: 'IOT & EMBEDDED SYSTEMS',
    description: 'Hardware prototyping with smart sensors and MSMEs. Designing low-latency communication protocols for connected industrial and consumer devices.',
    tags: ['IoT Sensors', 'Embedded C', 'Hardware']
  },
  {
    title: 'CYBERSECURITY',
    description: 'Architecting secure systems and performing network analysis. Focus on Linux hardening and implementing Zero-Trust network principles for enterprise applications.',
    tags: ['Linux', 'Network Security', 'Vulnerability Assessment']
  }
];

const WhatIDo = () => {
  const [open, setOpen] = useState(0);

  return (
    <section className="what-i-do" id="services" style={{
      padding: '10rem 10vw',
      background: '#080810',
      display: 'grid',
      gridTemplateColumns: '1fr 1.5fr',
      gap: '8rem',
      alignItems: 'start'
    }}>
      
      {/* LEFT COLUMN: STICKY TITLE */}
      <div className="reveal" style={{ position: 'sticky', top: '10rem' }}>
        <div style={{
          fontFamily: 'Cormorant Garamond',
          fontSize: '10rem',
          fontWeight: 700,
          color: '#FFFFFF',
          opacity: 0.08,
          lineHeight: 0.8,
          position: 'absolute',
          top: '-4rem',
          left: '-2rem',
          zIndex: -1
        }}>04</div>
        <span className="section-label">// WHAT I DO</span>
        <h2 style={{
          fontSize: 'clamp(3rem, 5vw, 4.5rem)',
          color: '#FFFFFF',
          lineHeight: '1',
          marginTop: '1rem'
        }}>
          How I Can <br />
          <span className="italic-accent">Help</span> You
        </h2>
      </div>

      {/* RIGHT COLUMN: ACCORDION */}
      <div className="reveal">
        {services.map((service, i) => (
          <div 
            key={i} 
            onClick={() => setOpen(open === i ? -1 : i)}
            style={{
              borderTop: '1px solid rgba(255, 255, 255, 0.08)',
              padding: '2.5rem 0',
              cursor: 'pointer',
              transition: '0.3s'
            }}
          >
            <div style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between'
            }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '2rem' }}>
                <span style={{ 
                  fontFamily: 'DM Mono', 
                  fontSize: '0.8rem', 
                  color: '#7c3aed',
                  fontWeight: 600
                }}>0{i + 1}</span>
                <h3 style={{
                  fontFamily: 'DM Mono',
                  fontSize: '1.1rem',
                  fontWeight: 700,
                  color: open === i ? '#a78bfa' : '#FFFFFF',
                  letterSpacing: '0.05em',
                  margin: 0,
                  transition: '0.3s'
                }}>{service.title}</h3>
              </div>
              <div style={{
                width: '32px',
                height: '32px',
                borderRadius: '50%',
                border: '1px solid rgba(255, 255, 255, 0.15)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '1.5rem',
                color: open === i ? '#a78bfa' : '#FFFFFF',
                transition: '0.4s cubic-bezier(0.4, 0, 0.2, 1)',
                transform: open === i ? 'rotate(45deg)' : 'rotate(0)'
              }}>+</div>
            </div>

            <div style={{
              maxHeight: open === i ? '300px' : '0',
              overflow: 'hidden',
              transition: 'all 0.5s cubic-bezier(0.4, 0, 0.2, 1)',
              opacity: open === i ? 1 : 0,
              paddingLeft: '3.5rem'
            }}>
              <p style={{
                fontFamily: 'DM Mono',
                fontSize: '0.9rem',
                color: 'rgba(255,255,255,0.6)',
                margin: '2rem 0',
                lineHeight: '1.8'
              }}>{service.description}</p>
              
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.8rem' }}>
                {service.tags.map((tag, j) => (
                  <span key={j} style={{
                    fontFamily: 'DM Mono',
                    fontSize: '0.7rem',
                    color: '#a78bfa',
                    border: '1px solid rgba(124, 58, 237, 0.3)',
                    padding: '0.2rem 0.8rem',
                    borderRadius: '2px'
                  }}>{tag}</span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default WhatIDo;
