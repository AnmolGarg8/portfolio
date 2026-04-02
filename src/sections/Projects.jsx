import React, { useRef, useState, useEffect } from 'react';

const ProjectCard = ({ project, index }) => {
  return (
    <div 
      className="project-card reveal-stagger"
      style={{
        flex: '0 0 420px',
        height: '520px',
        background: 'linear-gradient(160deg, #0e0e1e, #0a0a15)',
        border: '1px solid rgba(255, 255, 255, 0.06)',
        borderRadius: '32px',
        padding: '32px',
        position: 'relative',
        overflow: 'hidden',
        transition: 'all 0.5s cubic-bezier(0.19, 1, 0.22, 1)',
        display: 'flex',
        flexDirection: 'column',
        scrollSnapAlign: 'start',
        cursor: 'pointer',
        transitionDelay: `${0.1 * index}s`,
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.borderColor = 'rgba(124, 58, 237, 0.4)';
        e.currentTarget.style.boxShadow = '0 0 50px rgba(124, 58, 237, 0.08)';
        e.currentTarget.querySelector('.visual-zone').style.transform = 'scale(1.05)';
        e.currentTarget.querySelector('.overlay-btn').style.opacity = '1';
        e.currentTarget.querySelector('.overlay-btn').style.transform = 'translate(-50%, -50%) scale(1)';
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.06)';
        e.currentTarget.style.boxShadow = 'none';
        e.currentTarget.querySelector('.visual-zone').style.transform = 'scale(1)';
        e.currentTarget.querySelector('.overlay-btn').style.opacity = '0';
        e.currentTarget.querySelector('.overlay-btn').style.transform = 'translate(-50%, -50%) scale(0.9)';
      }}
    >
      {/* Top Section - Visual Zone (40% height) */}
      <div 
        className="visual-zone"
        style={{
          height: '40%',
          width: '100%',
          background: 'rgba(124, 58, 237, 0.03)',
          borderRadius: '20px',
          marginBottom: '32px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          position: 'relative',
          overflow: 'hidden',
          transition: 'transform 0.6s cubic-bezier(0.19, 1, 0.22, 1)',
        }}
      >
        {/* Abstract Background for Visual Zone */}
        <div style={{ position: 'absolute', inset: 0, opacity: 0.2, pointerEvents: 'none' }}>
           {project.category === 'IOT / FINTECH' && (
             <svg width="100%" height="100%">
               <defs>
                 <pattern id="grid" width="30" height="30" patternUnits="userSpaceOnUse">
                   <path d="M 30 0 L 0 0 0 30" fill="none" stroke="#7c3aed" strokeWidth="0.5"/>
                 </pattern>
               </defs>
               <rect width="100%" height="100%" fill="url(#grid)" />
               <circle cx="60" cy="80" r="4" fill="#a78bfa" />
               <circle cx="120" cy="40" r="3" fill="#67e8f9" />
               <circle cx="180" cy="100" r="5" fill="#7c3aed" />
             </svg>
           )}
           {project.category === 'ARTIFICIAL INTELLIGENCE' && (
             <svg width="100%" height="100%">
               <circle cx="50" cy="50" r="4" fill="#7c3aed" />
               <circle cx="150" cy="50" r="4" fill="#7c3aed" />
               <circle cx="100" cy="100" r="4" fill="#7c3aed" />
               <line x1="50" y1="50" x2="100" y2="100" stroke="#a78bfa" strokeWidth="1" />
               <line x1="150" y1="50" x2="100" y2="100" stroke="#a78bfa" strokeWidth="1" />
               <circle cx="100" cy="50" r="2" fill="#67e8f9" />
               <circle cx="75" cy="75" r="2" fill="#67e8f9" />
             </svg>
           )}
           {project.category === 'HARDWARE / IOT' && (
             <svg width="100%" height="100%">
               <path d="M 0 80 Q 50 20 100 80 T 200 80" fill="none" stroke="#7c3aed" strokeWidth="2" strokeDasharray="5,5" />
               <polygon points="100,40 120,70 80,70" fill="none" stroke="#fb923c" strokeWidth="1" />
             </svg>
           )}
        </div>

        {/* View Project Overlay */}
        <div 
          className="overlay-btn"
          style={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%) scale(0.9)',
            padding: '12px 24px',
            background: 'rgba(124, 58, 237, 0.95)',
            color: '#fff',
            fontFamily: 'DM Mono',
            fontSize: '0.7rem',
            fontWeight: '600',
            borderRadius: '50px',
            opacity: 0,
            transition: 'all 0.4s ease',
            whiteSpace: 'nowrap',
            backdropFilter: 'blur(10px)',
            zIndex: 2,
            letterSpacing: '0.1em'
          }}
        >
          VIEW PROJECT →
        </div>
      </div>

      {/* Project Details */}
      <div style={{ flex: 1, padding: '0 8px' }}>
        <div style={{ 
          fontFamily: 'DM Mono', 
          fontSize: '0.65rem', 
          color: '#a78bfa', 
          textTransform: 'uppercase', 
          letterSpacing: '0.15em', 
          marginBottom: '12px' 
        }}>
          {project.category}
        </div>
        <h3 style={{ 
          fontFamily: 'Cormorant Garamond', 
          fontSize: '2rem', 
          fontWeight: '600', 
          lineHeight: '1.2', 
          color: '#f0eeff', 
          marginBottom: '16px' 
        }}>
          {project.name}
        </h3>
        <p style={{ 
          fontFamily: 'DM Mono', 
          fontSize: '0.78rem', 
          color: 'rgba(240,238,255,0.45)', 
          lineHeight: '1.7', 
          marginBottom: '24px' 
        }}>
          {project.description}
        </p>
      </div>

      {/* Footer Tags & Links */}
      <div style={{ 
        display: 'flex', 
        justifyContent: 'space-between', 
        alignItems: 'center', 
        marginTop: 'auto',
        padding: '0 8px'
      }}>
        <div style={{ display: 'flex', gap: '8px' }}>
          {project.tags.slice(0, 2).map((tag, i) => (
            <span key={i} style={{ 
              fontFamily: 'DM Mono', 
              fontSize: '0.65rem', 
              color: 'rgba(167, 139, 250, 0.6)',
              textTransform: 'uppercase'
            }}>
              #{tag}
            </span>
          ))}
        </div>
        <a href={project.github} style={{ 
          fontFamily: 'DM Mono', 
          fontSize: '0.7rem', 
          color: '#f0eeff', 
          display: 'flex', 
          alignItems: 'center', 
          gap: '6px',
          fontWeight: '500'
        }}>
          GITHUB ↗
        </a>
      </div>

      {/* Watermark Section Number */}
      <div style={{
        position: 'absolute',
        bottom: '10px',
        right: '24px',
        fontFamily: 'Cormorant Garamond',
        fontSize: '6rem',
        fontWeight: '700',
        opacity: 0.04,
        color: '#f0eeff',
        lineHeight: '1',
        pointerEvents: 'none'
      }}>
        {index < 9 ? `0${index + 1}` : index + 1}
      </div>
    </div>
  );
};

const Projects = () => {
  const containerRef = useRef(null);
  const [scrollIndex, setScrollIndex] = useState(0);

  const projects = [
    {
      name: 'NoteNetra',
      category: 'IOT / FINTECH',
      description: 'IoT-based system tracking offline MSME cash transactions via smart sensors. Generates alternative credit scores for financial inclusion.',
      tags: ['IoT', 'React', 'Node.js', 'AI/ML', 'Sensors'],
      github: '#'
    },
    {
      name: 'AIKosh',
      category: 'ARTIFICIAL INTELLIGENCE',
      description: 'AI-powered platform mapping MSMEs with the most relevant financial agents using intelligent data analysis.',
      tags: ['AI', 'React', 'Node.js', 'Express', 'Data Analysis'],
      github: '#'
    },
    {
      name: 'Smart Vape Detection System',
      category: 'HARDWARE / IOT',
      description: 'Hardware-based sensor system detecting vaping in restricted campus environments using embedded IoT sensors.',
      tags: ['IoT', 'Embedded C', 'Hardware', 'Sensors', 'Campus Safety'],
      github: '#'
    }
  ];

  const handleScroll = (direction) => {
    if (!containerRef.current) return;
    const scrollAmount = direction === 'next' ? 444 : -444; // 420px card + 24px gap
    containerRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
  };

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;
    const onScroll = () => {
      const idx = Math.round(el.scrollLeft / 444);
      setScrollIndex(idx);
    };
    el.addEventListener('scroll', onScroll);
    return () => el.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <section id="work" style={{ 
      padding: '120px 10vw', 
      background: '#080810',
      minHeight: '100vh',
      overflow: 'hidden'
    }}>
      <div style={{ maxWidth: '1200px', margin: '0 0 60px auto', position: 'relative' }} className="reveal">
        <div style={{ 
          display: 'flex', 
          justifyContent: 'space-between', 
          alignItems: 'flex-end',
          width: '100%'
        }}>
          <div>
            <span className="section-label" style={{ color: '#7c3aed' }}>// THINGS I'VE BUILT</span>
            <h2 style={{ 
              fontFamily: 'Cormorant Garamond', 
              fontSize: '4.5rem', 
              fontWeight: '700', 
              lineHeight: '1',
              color: '#f0eeff'
            }}>
              Crafting <span style={{ fontStyle: 'italic', color: '#a78bfa' }}>Impactful</span> <br /> Solutions.
            </h2>
          </div>

          <div className="nav-controls" style={{ display: 'flex', gap: '12px', marginBottom: '12px' }}>
            <button 
              onClick={() => handleScroll('prev')}
              style={{
                width: '48px',
                height: '48px',
                borderRadius: '50%',
                border: '1px solid rgba(255,255,255,0.1)',
                background: 'transparent',
                color: '#fff',
                cursor: 'pointer',
                transition: 'all 0.3s ease',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
              }}
              onMouseEnter={(e) => { e.currentTarget.style.background = '#7c3aed'; e.currentTarget.style.borderColor = '#7c3aed'; }}
              onMouseLeave={(e) => { e.currentTarget.style.background = 'transparent'; e.currentTarget.style.borderColor = 'rgba(255,255,255,0.1)'; }}
            >
              ←
            </button>
            <button 
              onClick={() => handleScroll('next')}
              style={{
                width: '48px',
                height: '48px',
                borderRadius: '50%',
                border: '1px solid rgba(255,255,255,0.1)',
                background: 'transparent',
                color: '#fff',
                cursor: 'pointer',
                transition: 'all 0.3s ease',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
              }}
              onMouseEnter={(e) => { e.currentTarget.style.background = '#7c3aed'; e.currentTarget.style.borderColor = '#7c3aed'; }}
              onMouseLeave={(e) => { e.currentTarget.style.background = 'transparent'; e.currentTarget.style.borderColor = 'rgba(255,255,255,0.1)'; }}
            >
              →
            </button>
          </div>
        </div>
      </div>

      <div 
        ref={containerRef}
        className="projects-carousel hide-scrollbar"
        style={{
          display: 'flex',
          gap: '24px',
          overflowX: 'auto',
          scrollSnapType: 'x mandatory',
          paddingBottom: '60px',
          paddingLeft: 'max(10vw, calc((100vw - 1200px) / 2))',
          paddingRight: '10vw',
          marginLeft: 'calc(-1 * max(10vw, calc((100vw - 1200px) / 2)))',
          marginRight: '-10vw',
          width: '100vw'
        }}
      >
        {projects.map((p, idx) => (
          <ProjectCard key={idx} project={p} index={idx} />
        ))}
      </div>

      {/* Progress Dots */}
      <div style={{ 
        display: 'flex', 
        justifyContent: 'center', 
        gap: '8px', 
        marginTop: '20px' 
      }}>
        {projects.map((_, idx) => (
          <div 
            key={idx}
            style={{
              width: scrollIndex === idx ? '24px' : '8px',
              height: '8px',
              borderRadius: '100px',
              background: scrollIndex === idx ? '#7c3aed' : 'rgba(255,255,255,0.1)',
              transition: 'all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275)'
            }}
          />
        ))}
      </div>

      <style>{`
        @media (max-width: 768px) {
          .nav-controls {
            display: none !important;
          }
          .projects-carousel {
            flex-direction: column !important;
            scroll-snap-type: none !important;
            padding: 0 5vw !important;
            margin: 0 !important;
            width: 100% !important;
            overflow: visible !important;
          }
          .project-card {
            flex: 0 0 100% !important;
            width: 100% !important;
            max-width: 100% !important;
          }
          h2 {
            font-size: 3rem !important;
          }
        }
      `}</style>
    </section>
  );
};

export default Projects;
