import React, { useRef, useState } from 'react';

const projects = [
  {
    num: '01',
    category: 'IOT / FINTECH',
    name: 'NoteNetra',
    desc: 'IoT-based system tracking offline MSME cash transactions via smart sensors. Generates alternative credit scores for financial inclusion.',
    tags: ['IoT', 'React', 'Node.js', 'AI/ML', 'Sensors'],
    github: '#',
    type: 'iot'
  },
  {
    num: '02',
    category: 'ARTIFICIAL INTELLIGENCE',
    name: 'AIKosh',
    desc: 'AI-powered platform mapping MSMEs with the most relevant financial agents using intelligent data analysis.',
    tags: ['AI', 'React', 'Node.js', 'Express', 'Data Analysis'],
    github: '#',
    type: 'ai'
  },
  {
    num: '03',
    category: 'HARDWARE / IOT',
    name: 'Smart Vape Detection',
    desc: 'Hardware-based sensor system detecting vaping in restricted campus environments using embedded IoT sensors.',
    tags: ['IoT', 'Embedded C', 'Hardware', 'Sensors', 'Campus Safety'],
    github: '#',
    type: 'hardware'
  }
];

const ProjectVisual = ({ type }) => {
  if (type === 'iot') return (
    <div style={{ position: 'relative', width: '100%', height: '100%', background: 'rgba(124, 58, 237, 0.03)', overflow: 'hidden' }}>
      <div style={{ position: 'absolute', inset: 0, backgroundImage: 'radial-gradient(rgba(124,58,237,0.15) 1px, transparent 1px)', backgroundSize: '20px 20px' }} />
      <div style={{ position: 'absolute', top: '50%', left: '0', right: '0', height: '1px', background: 'rgba(124,58,237,0.2)' }} />
      <div style={{ position: 'absolute', left: '50%', top: '0', bottom: '0', width: '1px', background: 'rgba(124,58,237,0.2)' }} />
      <div style={{ 
        position: 'absolute', top: '50%', left: '50%', width: '100px', height: '100px', 
        border: '1px solid #7c3aed', borderRadius: '10px', transform: 'translate(-50%, -50%) rotate(45deg)'
      }} />
      <div style={{ position: 'absolute', top: '50%', left: '50%', width: '60px', height: '60px', border: '1px dashed #7c3aed', borderRadius: '50%', transform: 'translate(-50%, -50%)' }} />
    </div>
  );
  if (type === 'ai') return (
    <div style={{ position: 'relative', width: '100%', height: '100%', background: 'rgba(167, 139, 250, 0.03)', overflow: 'hidden' }}>
      <div style={{ 
        position: 'absolute', top: '50%', left: '10%', right: '10%', height: '80px', display: 'flex', justifyContent: 'space-between', transform: 'translateY(-50%)' 
      }}>
        {[...Array(3)].map((_, i) => (
          <div key={i} style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-around' }}>
             {[...Array(i === 1 ? 4 : 3)].map((_, j) => (
               <div key={j} style={{ width: '10px', height: '10px', rounded: '50%', background: 'rgba(167, 139, 250, 0.4)', borderRadius: '50%' }} />
             ))}
          </div>
        ))}
      </div>
      <svg width="100%" height="100%" style={{ position: 'absolute' }}>
        <line x1="25%" y1="35%" x2="48%" y2="28%" stroke="rgba(167, 139, 250, 0.2)" strokeWidth="0.5" />
        <line x1="25%" y1="65%" x2="48%" y2="72%" stroke="rgba(167, 139, 250, 0.2)" strokeWidth="0.5" />
        <line x1="48%" y1="50%" x2="72%" y2="50%" stroke="rgba(167, 139, 250, 0.2)" strokeWidth="0.5" />
      </svg>
    </div>
  );
  return (
    <div style={{ position: 'relative', width: '100%', height: '100%', background: 'rgba(16, 185, 129, 0.03)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      <div style={{ width: '80px', height: '80px', border: '1px solid #10b981', position: 'relative', transform: 'rotate(45deg)' }}>
        <div style={{ position: 'absolute', inset: '10px', border: '1px dashed rgba(16, 185, 129, 0.4)' }} />
      </div>
      <div style={{ position: 'absolute', top: '50%', left: '20%', right: '20%', height: '1px', background: 'rgba(16, 185, 129, 0.2)', animation: 'pulse-glow 2s infinite' }} />
    </div>
  );
};

const ProjectCard = ({ project }) => {
  return (
    <div className="project-card reveal" style={{
      minWidth: '420px',
      height: '520px',
      background: 'linear-gradient(160deg, #0e0e1e, #0a0a15)',
      border: '1px solid rgba(255, 255, 255, 0.06)',
      borderRadius: '24px',
      overflow: 'hidden',
      position: 'relative',
      scrollSnapAlign: 'start',
      transition: 'all 0.5s cubic-bezier(0.85, 0, 0.15, 1)',
      display: 'flex',
      flexDirection: 'column'
    }}>
      {/* Top Visual Zone */}
      <div style={{ height: '40%', position: 'relative', overflow: 'hidden' }} className="visual-zone">
        <ProjectVisual type={project.type} />
        
        {/* Hover Overlay */}
        <div className="hover-overlay" style={{
          position: 'absolute', inset: 0, background: 'rgba(124, 58, 237, 0.12)',
          backdropFilter: 'blur(8px)', opacity: 0, transition: '0.4s',
          display: 'flex', alignItems: 'center', justifyContent: 'center', zIndex: 10
        }}>
          <span style={{ 
            fontFamily: 'Syne', fontWeight: 700, fontSize: '0.8rem', color: '#fff', letterSpacing: '0.2em' 
          }}>VIEW PROJECT ↗</span>
        </div>
      </div>

      {/* Info Section */}
      <div style={{ padding: '2.5rem', display: 'flex', flexDirection: 'column', gap: '1.2rem', position: 'relative', zIndex: 2 }}>
        <span style={{ 
          fontFamily: 'DM Mono', fontSize: '0.7rem', color: '#a78bfa', letterSpacing: '0.15em', fontWeight: 600 
        }}>{project.category}</span>
        
        <h3 style={{ 
          fontFamily: 'Cormorant Garamond', fontSize: '2.2rem', color: '#FFFFFF', margin: 0 
        }}>{project.name}</h3>
        
        <p style={{
          fontFamily: 'DM Mono', fontSize: '0.78rem', color: 'rgba(255, 255, 255, 0.45)',
          lineHeight: '1.7', fontWeight: 300
        }}>{project.desc}</p>

        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.6rem', marginTop: 'auto' }}>
          {project.tags.map((tag, i) => (
            <span key={i} style={{
              fontFamily: 'DM Mono', fontSize: '0.6rem', color: 'rgba(255, 255, 255, 0.3)',
              border: '1px solid rgba(255, 255, 255, 0.1)', padding: '0.3rem 0.7rem', borderRadius: '4px'
            }}>{tag}</span>
          ))}
        </div>
      </div>

      {/* Bottom Link */}
      <div style={{ padding: '0 2.5rem 2.5rem', display: 'flex', justifyContent: 'flex-end', zIndex: 2 }}>
        <a href={project.github} style={{
          fontFamily: 'DM Mono', fontSize: '0.75rem', color: '#a78bfa', display: 'flex', alignItems: 'center', gap: '0.5rem'
        }}>GITHUB <span style={{ fontSize: '1.2rem' }}>↗</span></a>
      </div>

      {/* Watermark Number */}
      <div style={{
        position: 'absolute', bottom: '2.5rem', left: '2.5rem', fontFamily: 'Cormorant Garamond',
        fontSize: '6rem', fontWeight: 700, color: '#fff', opacity: 0.04, zIndex: 1
      }}>{project.num}</div>

      <style>{`
        .project-card:hover { transform: translateY(-10px); border-color: rgba(124, 58, 237, 0.4) !important; box-shadow: 0 40px 100px rgba(0,0,0,0.5); }
        .project-card:hover .hover-overlay { opacity: 1; }
        .project-card:hover .visual-zone > div { transform: scale(1.1); transition: 0.8s; }
      `}</style>
    </div>
  );
};

const Projects = () => {
  const carouselRef = useRef(null);
  const [scrollProgress, setScrollProgress] = useState(0);

  const slide = (direction) => {
    if (carouselRef.current) {
      const scrollAmount = 450;
      carouselRef.current.scrollBy({ left: direction === 'right' ? scrollAmount : -scrollAmount, behavior: 'smooth' });
    }
  };

  const handleScroll = (e) => {
    const { scrollLeft, scrollWidth, clientWidth } = e.target;
    setScrollProgress(scrollLeft / (scrollWidth - clientWidth));
  };

  return (
    <section id="work" style={{
      padding: '120px 10vw',
      background: '#080810',
      overflow: 'hidden'
    }}>
      <div style={{ 
        display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: '6rem' 
      }}>
        <div style={{ display: 'flex', flexDirection: 'column' }}>
          <span className="section-label reveal">// THINGS I'VE BUILT</span>
          <h2 className="reveal" style={{
            fontSize: 'clamp(2.5rem, 5vw, 4.5rem)', color: '#FFFFFF', lineHeight: 1
          }}>Digital <span style={{ fontStyle: 'italic', fontWeight: 500, color: '#a78bfa' }}>Constellations</span></h2>
        </div>

        {/* Carousel Nav */}
        <div style={{ display: 'flex', gap: '1rem' }} className="reveal">
          <button onClick={() => slide('left')} style={{
            width: '48px', height: '48px', borderRadius: '50%', border: '1px solid rgba(255,255,255,0.1)',
            background: 'transparent', color: '#fff', cursor: 'pointer', transition: '0.3s'
          }} className="nav-btn">←</button>
          <button onClick={() => slide('right')} style={{
            width: '48px', height: '48px', borderRadius: '50%', border: '1px solid rgba(255,255,255,0.1)',
            background: 'transparent', color: '#fff', cursor: 'pointer', transition: '0.3s'
          }} className="nav-btn">→</button>
        </div>
      </div>

      <div 
        ref={carouselRef}
        onScroll={handleScroll}
        className="hide-scrollbar"
        style={{
          display: 'flex', gap: '2rem', overflowX: 'auto', scrollSnapType: 'x mandatory', paddingBottom: '2rem'
        }}
      >
        {projects.map((project, i) => (
          <ProjectCard key={i} project={project} />
        ))}
      </div>

      {/* Progress Indicator */}
      <div style={{ display: 'flex', justifyContent: 'center', gap: '8px', marginTop: '3rem' }}>
        {projects.map((_, i) => {
          const isActive = (scrollProgress * (projects.length - 1)) >= (i - 0.4) && (scrollProgress * (projects.length - 1)) <= (i + 0.4);
          return (
            <div key={i} style={{
              width: isActive ? '24px' : '8px',
              height: '8px',
              borderRadius: '10px',
              background: isActive ? '#7c3aed' : 'rgba(255,255,255,0.1)',
              transition: 'all 0.4s'
            }} />
          );
        })}
      </div>

      <style>{`
        .nav-btn:hover { background: #7c3aed !important; border-color: #7c3aed !important; transform: scale(1.1); box-shadow: 0 0 20px rgba(124, 58, 237, 0.4); }
      `}</style>
    </section>
  );
};

export default Projects;
