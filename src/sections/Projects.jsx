import React from 'react';

export default function Projects() {
  const projects = [
    { 
      title: 'NoteNetra', 
      type: 'iot', 
      category: 'IOT / ML',
      desc: 'An AI-powered document analysis system leveraging computer vision to extract and interpret critical physical notes instantly.' 
    },
    { 
      title: 'AIKosh', 
      type: 'ai', 
      category: 'ARTIFICIAL INTELLIGENCE',
      desc: 'A robust intelligent knowledge base utilizing LLMs to synthesize, analyze, and generate technical content autonomously.' 
    },
    { 
      title: 'Smart Vape Detection', 
      type: 'hw', 
      category: 'HARDWARE / SYSTEMS',
      desc: 'An embedded sensor architecture designed to detect aerosol signatures in real-time, built for institutional scalability.' 
    }
  ];

  return (
    <section id="projects" className="projects">
      <div className="text-center">
        <div style={{
          display: 'inline-block',
          border: '1px solid #00F5FF',
          color: '#00F5FF',
          padding: '0.25rem 0.75rem',
          fontSize: '0.75rem',
          letterSpacing: '0.1em',
          fontWeight: 700,
          marginBottom: '2rem'
        }}>
          [SELECTED WORK]
        </div>
      </div>
      
      <div className="projects-grid">
        {projects.map((p, i) => (
          <div key={i} className={`pcard ${p.type}`}>
            <div style={{ fontSize: '0.65rem', letterSpacing: '0.15em', color: 'rgba(255,255,255,0.4)', marginBottom: '1rem', fontWeight: 600 }}>
              {p.category}
            </div>
            <h3 className="font-heading font-bold" style={{ fontSize: '1.4rem', marginBottom: '1rem', color: '#fff' }}>
              {p.title}
            </h3>
            <p className="text-muted text-sm" style={{ lineHeight: 1.6 }}>
              {p.desc}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
