import React, { useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const projects = [
  {
    num: '01',
    category: 'IOT / FINTECH',
    name: 'NoteNetra',
    accent: '#00E5FF',
    tags: ['IoT', 'React', 'Node.js', 'AI/ML', 'Sensors'],
    desc: 'IoT-based system tracking offline MSME cash transactions via smart sensors. Generates alternative credit scores improving financial inclusion for small businesses.',
    github: 'https://github.com/AnmolGarg8'
  },
  {
    num: '02',
    category: 'ARTIFICIAL INTELLIGENCE',
    name: 'AIKosh',
    accent: '#7C3AED',
    tags: ['AI', 'React', 'Node.js', 'Express', 'Data Analysis'],
    desc: 'AI-powered platform mapping MSMEs with the most relevant financial agents and resources using intelligent data analysis.',
    github: 'https://github.com/AnmolGarg8'
  },
  {
    num: '03',
    category: 'HARDWARE / IOT',
    name: 'Smart Vape Detection System',
    accent: '#F59E0B',
    tags: ['IoT', 'Embedded C', 'Hardware', 'Sensors', 'Campus Safety'],
    desc: 'Hardware-based sensor system detecting vaping in restricted campus environments. Enhances institutional safety monitoring using embedded IoT sensors.',
    github: 'https://github.com/AnmolGarg8'
  }
];

const Projects = () => {
  useEffect(() => {
    gsap.fromTo('.project-card', 
      { opacity: 0.1, x: -60 },
      {
        scrollTrigger: {
          trigger: '.projects-list',
          start: 'top 90%'
        },
        opacity: 1,
        x: 0,
        stagger: 0.2,
        duration: 0.8,
        ease: 'power3.out'
      }
    );
  }, []);

  return (
    <section className="projects" id="work" style={{
      padding: '10rem 5rem',
      background: '#060608'
    }}>
      <div className="projects-header">
        <span className="section-label">// SELECTED WORK</span>
        <h2 style={{
          fontFamily: 'Space Grotesk',
          fontSize: 'clamp(2rem, 4vw, 3.5rem)',
          fontWeight: 700,
          color: '#F8FAFC'
        }}>Things I've Built</h2>
      </div>

      <div className="projects-list" style={{
        display: 'flex',
        flexDirection: 'column',
        gap: '2px', // Thin gap for premium look
        marginTop: '4rem'
      }}>
        {projects.map((p, i) => (
          <div key={i} className="project-card" style={{
            display: 'grid',
            gridTemplateColumns: '80px 1fr auto',
            alignItems: 'center',
            gap: '3rem',
            padding: '4rem 3rem',
            background: '#111120',
            border: '1px solid var(--dim)',
            borderRadius: '4px',
            position: 'relative',
            overflow: 'hidden',
            '--accent-color': p.accent
          }}>
            <span className="project-num" style={{
              fontFamily: 'Space Grotesk',
              fontSize: '3rem',
              fontWeight: 700,
              color: 'var(--dim)',
              transition: 'color 0.3s'
            }}>{p.num}</span>

            <div className="project-info" style={{ flex: 1 }}>
              <div className="project-category" style={{
                fontFamily: 'JetBrains Mono',
                fontSize: '0.65rem',
                color: p.accent,
                letterSpacing: '0.2em',
                marginBottom: '0.5rem',
                textTransform: 'uppercase'
              }}>{p.category}</div>
              <h3 className="project-name" style={{
                fontFamily: 'Space Grotesk',
                fontSize: '1.8rem',
                fontWeight: 700,
                color: '#F8FAFC',
                marginBottom: '0.6rem'
              }}>{p.name}</h3>
              <p className="project-desc" style={{
                fontFamily: 'Inter',
                fontSize: '0.95rem',
                color: 'var(--muted)',
                lineHeight: '1.6',
                maxWidth: '55ch',
                marginBottom: '1.2rem'
              }}>{p.desc}</p>
              <div className="project-tags" style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
                {p.tags.map(t => (
                  <span key={t} className="project-tag" style={{
                    fontFamily: 'JetBrains Mono',
                    fontSize: '0.65rem',
                    color: 'var(--muted)',
                    border: '1px solid var(--dim)',
                    padding: '0.2rem 0.5rem',
                    borderRadius: '2px'
                  }}>{t}</span>
                ))}
              </div>
            </div>

            <div className="project-actions" style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '0.8rem',
              alignItems: 'flex-end'
            }}>
              <a href={p.github} target="_blank" rel="noopener noreferrer" className="project-link" style={{
                fontFamily: 'JetBrains Mono',
                fontSize: '0.72rem',
                color: 'var(--muted)',
                textDecoration: 'none',
                letterSpacing: '0.1em',
                display: 'flex',
                alignItems: 'center',
                gap: '0.4rem',
                transition: 'color 0.2s'
              }}>
                GITHUB <span style={{ fontSize: '1.1rem' }}>↗</span>
              </a>
            </div>

            <style>{`
              .project-card::before {
                content: ''; position: absolute;
                left: 0; top: 0; bottom: 0; width: 3px;
                background: var(--accent-color);
                transform: scaleY(0); transform-origin: bottom;
                transition: transform 0.4s ease;
                box-shadow: 0 0 15px var(--accent-color);
              }
              .project-card:hover::before { transform: scaleY(1); }
              .project-card:hover {
                background: rgba(255, 255, 255, 0.02);
                border-color: rgba(255, 255, 255, 0.1);
                transform: translateX(6px);
              }
              .project-card:hover .project-num {
                color: var(--accent-color);
              }
              .project-link:hover {
                color: #00E5FF;
              }
              @media (max-width: 768px) {
                .project-card {
                  grid-template-columns: 1fr !important;
                  gap: 1.5rem !important;
                  padding: 2.5rem 1.5rem !important;
                }
                .project-actions {
                  align-items: flex-start !important;
                }
              }
            `}</style>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
