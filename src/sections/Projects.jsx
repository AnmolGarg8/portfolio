import React, { useEffect } from 'react';

const projects = [
  {
    num: '01',
    category: 'IOT / FINTECH',
    name: 'NoteNetra',
    tags: ['IoT', 'React', 'Node.js', 'AI/ML', 'Sensors'],
    desc: 'IoT-based system tracking offline MSME cash transactions via smart sensors. Generates alternative credit scores improving financial inclusion.',
    github: '#'
  },
  {
    num: '02',
    category: 'ARTIFICIAL INTELLIGENCE',
    name: 'AIKosh',
    tags: ['AI', 'React', 'Node.js', 'Express', 'Data Analysis'],
    desc: 'AI-powered platform mapping MSMEs with the most relevant financial agents and resources using intelligent data analysis.',
    github: '#'
  },
  {
    num: '03',
    category: 'HARDWARE / IOT',
    name: 'Smart Vape Detection System',
    tags: ['IoT', 'Embedded C', 'Hardware', 'Sensors', 'Campus Safety'],
    desc: 'Hardware-based sensor system detecting vaping in restricted campus environments using embedded IoT sensors.',
    github: '#'
  }
];

const ProjectCard = ({ project }) => (
  <div className="project-card reveal" style={{
    display: 'grid',
    gridTemplateColumns: '120px 1fr auto',
    alignItems: 'center',
    gap: '4rem',
    padding: '4rem 3rem',
    borderBottom: '1px solid rgba(255, 255, 255, 0.05)',
    position: 'relative',
    transition: '0.4s ease'
  }}>
    {/* Hover Left Bar */}
    <div className="hover-bar" style={{
      position: 'absolute',
      left: 0,
      bottom: 0,
      width: '3px',
      height: '100%',
      background: '#7c3aed',
      transform: 'scaleY(0)',
      transformOrigin: 'bottom',
      transition: '0.4s cubic-bezier(0.4, 0, 0.2, 1)',
      boxShadow: '0 0 20px #7c3aed'
    }} />

    {/* Faded Number */}
    <div className="project-num" style={{
      fontFamily: 'Cormorant Garamond',
      fontSize: '4.5rem',
      fontWeight: 700,
      color: '#FFFFFF',
      opacity: 0.06,
      transition: '0.3s'
    }}>{project.num}</div>

    {/* Project Info */}
    <div style={{ display: 'flex', flexDirection: 'column', gap: '0.8rem' }}>
      <span style={{ 
        fontFamily: 'DM Mono', 
        fontSize: '0.7rem', 
        color: '#a78bfa', 
        letterSpacing: '0.2em',
        fontWeight: 600
      }}>{project.category}</span>
      
      <h3 style={{ 
        fontFamily: 'Cormorant Garamond', 
        fontSize: '2.2rem', 
        color: '#FFFFFF',
        margin: 0
      }}>{project.name}</h3>
      
      <p style={{
        fontFamily: 'DM Mono',
        fontSize: '0.9rem',
        color: 'rgba(255, 255, 255, 0.5)',
        maxWidth: '600px',
        lineHeight: '1.7',
        fontWeight: 300
      }}>{project.desc}</p>

      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.8rem', marginTop: '0.5rem' }}>
        {project.tags.map((tag, i) => (
          <span key={i} style={{
            fontFamily: 'DM Mono',
            fontSize: '0.65rem',
            color: 'rgba(255, 255, 255, 0.4)',
            border: '1px solid rgba(255, 255, 255, 0.1)',
            padding: '0.2rem 0.6rem',
            borderRadius: '2px'
          }}>{tag}</span>
        ))}
      </div>
    </div>

    {/* Actions */}
    <a href={project.github} className="project-link" style={{
      fontFamily: 'DM Mono',
      fontSize: '0.8rem',
      color: 'rgba(255, 255, 255, 0.4)',
      letterSpacing: '0.1em',
      display: 'flex',
      alignItems: 'center',
      gap: '0.5rem',
      transition: '0.3s'
    }}>
      GITHUB <span style={{ fontSize: '1.2rem' }}>↗</span>
    </a>

    <style>{`
      .project-card:hover {
        background: rgba(255, 255, 255, 0.02);
      }
      .project-card:hover .hover-bar {
        transform: scaleY(1);
      }
      .project-card:hover .project-num {
        opacity: 0.15;
        transform: translateX(10px);
      }
      .project-card:hover .project-link {
        color: #a78bfa;
      }
    `}</style>
  </div>
);

const Projects = () => {
  return (
    <section className="projects" id="work" style={{
      padding: '10rem 10vw',
      background: '#080810'
    }}>
      <span className="section-label reveal">// SELECTED WORK</span>
      <h2 className="reveal" style={{
        fontSize: 'clamp(2.5rem, 4vw, 4rem)',
        color: '#FFFFFF',
        marginBottom: '5rem'
      }}>Things I've <span className="italic-accent">Built</span></h2>
      
      <div style={{ display: 'flex', flexDirection: 'column' }}>
        {projects.map((project, i) => (
          <ProjectCard key={i} project={project} />
        ))}
      </div>
    </section>
  );
};

export default Projects;
