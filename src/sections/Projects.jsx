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
    <div style={{ position: 'relative', width: '100%', height: '100%', background: 'rgba(124, 58, 237, 0.05)', overflow: 'hidden' }}>
      <div style={{ position: 'absolute', inset: 0, backgroundImage: 'radial-gradient(rgba(124,58,237,0.18) 1.2px, transparent 1.2px)', backgroundSize: '24px 24px' }} />
      <div style={{ position: 'absolute', top: '50%', left: '0', right: '0', height: '1.5px', background: 'rgba(124,58,237,0.25)' }} />
      <div style={{ position: 'absolute', left: '50%', top: '0', bottom: '0', width: '1.5px', background: 'rgba(124,58,237,0.25)' }} />
      <div style={{ position: 'absolute', top: '50%', left: '50%', width: '110px', height: '110px', border: '1.5px solid #7c3aed', borderRadius: '12px', transform: 'translate(-50%, -50%) rotate(45deg)' }} />
      <div style={{ position: 'absolute', top: '50%', left: '50%', width: '70px', height: '70px', border: '1.2px dashed #7c3aed', borderRadius: '50%', transform: 'translate(-50%, -50%)' }} />
    </div>
  );
  if (type === 'ai') return (
    <div style={{ position: 'relative', width: '100%', height: '100%', background: 'rgba(167, 139, 250, 0.05)', overflow: 'hidden' }}>
      <div style={{ position: 'absolute', top: '50%', left: '15%', right: '15%', height: '90px', display: 'flex', justifyContent: 'space-between', transform: 'translateY(-50%)' }}>
        {[...Array(3)].map((_, i) => (
          <div key={i} style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-around' }}>
             {[...Array(i === 1 ? 5 : 4)].map((_, j) => (
               <div key={j} style={{ width: '11px', height: '11px', background: 'rgba(167, 139, 250, 0.45)', borderRadius: '50%' }} />
             ))}
          </div>
        ))}
      </div>
      <svg width="100%" height="100%" style={{ position: 'absolute', inset: 0 }}>
        <line x1="30%" y1="35%" x2="48%" y2="28%" stroke="rgba(167, 139, 250, 0.25)" strokeWidth="0.8" />
        <line x1="30%" y1="65%" x2="48%" y2="72%" stroke="rgba(167, 139, 250, 0.25)" strokeWidth="0.8" />
        <line x1="48%" y1="50%" x2="70%" y2="50%" stroke="rgba(167, 139, 250, 0.25)" strokeWidth="0.8" />
      </svg>
    </div>
  );
  return (
    <div style={{ position: 'relative', width: '100%', height: '100%', background: 'rgba(16, 185, 129, 0.05)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      <div style={{ width: '90px', height: '90px', border: '2px solid #10b981', position: 'relative', transform: 'rotate(45deg)' }}>
        <div style={{ position: 'absolute', inset: '12px', border: '1.2px dashed rgba(16, 185, 129, 0.5)' }} />
      </div>
      <div style={{ position: 'absolute', top: '50%', left: '25%', right: '25%', height: '2px', background: 'rgba(16, 185, 129, 0.35)', animation: 'pulse-glow 2.5s infinite' }} />
    </div>
  );
};

const ProjectCard = ({ project, index }) => {
  return (
    <div className="project-card reveal" style={{
      minWidth: '420px', height: '520px', background: 'linear-gradient(160deg, #0e0e1e, #0a0a15)',
      border: '1px solid rgba(255, 255, 255, 0.06)', borderRadius: '28px', overflow: 'hidden',
      position: 'relative', scrollSnapAlign: 'start', transition: 'all 0.6s cubic-bezier(0.19, 1, 0.22, 1)',
      display: 'flex', flexDirection: 'column', boxShadow: 'inset 0 1px 1px rgba(255,255,255,0.04)',
      transitionDelay: `${index * 0.15}s`
    }}>
      <div style={{ height: '40%', position: 'relative', overflow: 'hidden' }} className="visual-zone">
        <ProjectVisual type={project.type} />
        <div className="hover-overlay" style={{
          position: 'absolute', inset: 0, background: 'rgba(124, 58, 237, 0.15)',
          backdropFilter: 'blur(10px)', opacity: 0, transition: '0.4s',
          display: 'flex', alignItems: 'center', justifyContent: 'center', zIndex: 10
        }}>
          <span style={{ 
            fontFamily: 'Syne', fontWeight: 700, fontSize: '0.85rem', color: '#fff', letterSpacing: '0.25em' 
          }}>VIEW PROJECT ↗</span>
        </div>
      </div>

      <div style={{ padding: '3rem', flex: 1, display: 'flex', flexDirection: 'column', gap: '1.5rem', position: 'relative', zIndex: 2 }}>
        <span style={{ fontFamily: 'DM Mono', fontSize: '0.75rem', color: '#a78bfa', letterSpacing: '0.2em', fontWeight: 700 }}>{project.category}</span>
        <h3 style={{ fontFamily: 'Cormorant Garamond', fontSize: '2.4rem', color: '#FFFFFF', margin: 0, lineHeight: 1.1 }}>{project.name}</h3>
        <p style={{ fontFamily: 'DM Mono', fontSize: '0.82rem', color: 'rgba(255, 255, 255, 0.5)', lineHeight: '1.8', fontWeight: 400 }}>{project.desc}</p>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.8rem', marginTop: 'auto' }}>
          {project.tags.map((tag, i) => (
            <span key={i} style={{
              fontFamily: 'DM Mono', fontSize: '0.65rem', color: 'rgba(255, 255, 255, 0.35)',
              border: '1px solid rgba(255, 255, 255, 0.12)', padding: '0.4rem 0.9rem', borderRadius: '5px'
            }}>{tag}</span>
          ))}
        </div>
      </div>

      <div style={{ padding: '0 3rem 3rem', display: 'flex', justifyContent: 'flex-end', zIndex: 2 }}>
        <a href={project.github} className="gh-link" style={{
          fontFamily: 'DM Mono', fontSize: '0.8rem', color: '#a78bfa', display: 'flex', alignItems: 'center', gap: '0.6rem', fontWeight: 600
        }}>GITHUB <span style={{ fontSize: '1.3rem' }}>↗</span></a>
      </div>

      <div style={{
        position: 'absolute', bottom: '2rem', left: '3rem', fontFamily: 'Cormorant Garamond',
        fontSize: '7.5rem', fontWeight: 700, color: '#fff', opacity: 0.035, zIndex: 1
      }}>{project.num}</div>

      <style>{`
        .project-card:hover { transform: translateY(-12px); border-color: rgba(124, 58, 237, 0.5) !important; box-shadow: 0 50px 120px rgba(0,0,0,0.6), inset 0 1px 1px rgba(255,255,255,0.08); }
        .project-card:hover .hover-overlay { opacity: 1; }
        .project-card:hover .visual-zone > div { transform: scale(1.15); transition: 1s ease; }
        .gh-link:hover { color: #fff !important; transform: translateX(5px); transition: 0.3s; }
      `}</style>
    </div>
  );
};

const Projects = () => {
  const carouselRef = useRef(null);
  const [scrollProgress, setScrollProgress] = useState(0);

  const slide = (direction) => {
    if (carouselRef.current) {
      const scrollAmount = 480;
      carouselRef.current.scrollBy({ left: direction === 'right' ? scrollAmount : -scrollAmount, behavior: 'smooth' });
    }
  };

  const handleScroll = (e) => {
    const { scrollLeft, scrollWidth, clientWidth } = e.target;
    setScrollProgress(scrollLeft / (scrollWidth - clientWidth));
  };

  return (
    <section id="work" style={{ padding: '120px 10vw', background: '#080810', overflow: 'hidden' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '7rem' }}>
        <div style={{ display: 'flex', flexDirection: 'column' }}>
          <span className="section-label reveal">// THINGS I'VE BUILT</span>
          <h2 className="reveal" style={{ fontSize: 'clamp(2.5rem, 5vw, 4.5rem)', color: '#FFFFFF', lineHeight: 1.1 }}>Digital <span style={{ fontStyle: 'italic', fontWeight: 500, color: '#a78bfa' }}>Constellations</span></h2>
        </div>
        <div style={{ display: 'flex', gap: '1.2rem' }} className="reveal">
          <button onClick={() => slide('left')} className="nav-btn">←</button>
          <button onClick={() => slide('right')} className="nav-btn">→</button>
        </div>
      </div>

      <div 
        ref={carouselRef} onScroll={handleScroll} className="hide-scrollbar"
        style={{ display: 'flex', gap: '2.5rem', overflowX: 'auto', scrollSnapType: 'x mandatory', paddingBottom: '3rem' }}
      >
        {projects.map((project, i) => (
          <ProjectCard key={i} project={project} index={i} />
        ))}
      </div>

      <div style={{ display: 'flex', justifyContent: 'center', gap: '10px', marginTop: '4rem' }}>
        {projects.map((_, i) => {
          const progressVal = (scrollProgress * (projects.length - 1));
          const isActive = progressVal >= (i - 0.45) && progressVal <= (i + 0.45);
          return (
            <div key={i} style={{ width: isActive ? '32px' : '10px', height: '10px', borderRadius: '10px', background: isActive ? '#7c3aed' : 'rgba(255,255,255,0.12)', transition: 'all 0.5s' }} />
          );
        })}
      </div>

      <style>{`
        .nav-btn { width: 56px; height: 56px; borderRadius: 50%; border: 1.5px solid rgba(255,255,255,0.1); background: transparent; color: #fff; cursor: pointer; transition: 0.4s cubic-bezier(0.19, 1, 0.22, 1); fontSize: 1.2rem; }
        .nav-btn:hover { background: #7c3aed !important; border-color: #7c3aed !important; transform: scale(1.15); box-shadow: 0 0 25px rgba(124, 58, 237, 0.5); }
      `}</style>
    </section>
  );
};

export default Projects;
