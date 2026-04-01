import React, { useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const skillCategories = [
  {
    title: 'FRONTEND',
    icon: '◈',
    color: '#00E5FF',
    tags: ['React.js', 'JavaScript', 'HTML/CSS', 'Tailwind']
  },
  {
    title: 'BACKEND',
    icon: '⌥',
    color: '#7C3AED',
    tags: ['Node.js', 'Express.js', 'REST APIs', 'MongoDB']
  },
  {
    title: 'AI / ML / IOT',
    icon: '◬',
    color: '#F59E0B',
    tags: ['Python', 'TensorFlow', 'IoT Sensors', 'Embedded C']
  },
  {
    title: 'SECURITY',
    icon: '⍥',
    color: '#10B981',
    tags: ['Cybersecurity', 'Network Security', 'Linux', 'Git']
  }
];

const SkillCard = ({ category }) => (
  <div className="skill-card" style={{
    background: '#111120',
    border: '1px solid rgba(248, 250, 252, 0.12)',
    padding: '2rem 1.8rem',
    position: 'relative',
    overflow: 'hidden',
    transition: 'all 0.3s',
    borderRadius: '4px',
    '--card-color': category.color
  }}>
    <div className="skill-icon" style={{ 
      fontSize: '2rem', 
      marginBottom: '1rem', 
      color: category.color 
    }}>{category.icon}</div>
    <div className="skill-title" style={{
      fontFamily: 'Clash Display',
      fontSize: '1rem',
      fontWeight: 700,
      color: '#F8FAFC',
      letterSpacing: '0.05em',
      marginBottom: '1rem'
    }}>{category.title}</div>
    <div className="skill-tags" style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
      {category.tags.map((tag, i) => (
        <span key={i} className="skill-tag" style={{
          fontFamily: 'JetBrains Mono',
          fontSize: '0.68rem',
          color: 'rgba(248, 250, 252, 0.4)',
          border: '1px solid rgba(248, 250, 252, 0.12)',
          padding: '0.2rem 0.6rem',
          borderRadius: '2px',
          transition: 'all 0.2s'
        }}>{tag}</span>
      ))}
    </div>

    <style>{`
      .skill-card::before {
        content: ''; position: absolute;
        top: 0; left: 0; right: 0; height: 2px;
        background: var(--card-color);
        box-shadow: 0 0 20px var(--card-color);
        opacity: 0; transition: opacity 0.3s;
      }
      .skill-card:hover::before { opacity: 1; }
      .skill-card:hover { 
        border-color: rgba(255, 255, 255, 0.15); 
        transform: translateY(-4px); 
      }
      .skill-card:hover .skill-tag { 
        color: #F8FAFC; 
        border-color: rgba(255, 255, 255, 0.2); 
      }
    `}</style>
  </div>
);

const Skills = () => {
  useEffect(() => {
    gsap.from('.skill-card', {
      scrollTrigger: {
        trigger: '.skills-grid',
        start: 'top 75%'
      },
      opacity: 0,
      y: 60,
      stagger: 0.12,
      duration: 0.7,
      ease: 'power3.out'
    });
  }, []);

  return (
    <section className="skills" id="skills" style={{
      padding: '10rem 5rem',
      background: '#060608'
    }}>
      <span className="section-label">// TECH ARSENAL</span>
      <h2 className="skills-heading" style={{
        fontFamily: 'Clash Display',
        fontWeight: 700,
        fontSize: 'clamp(2rem, 4vw, 3.5rem)',
        color: '#F8FAFC',
        marginBottom: '4rem'
      }}>Tools I Build With</h2>
      
      <div className="skills-grid" style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
        gap: '1.5rem',
        marginTop: '4rem'
      }}>
        {skillCategories.map((cat, i) => (
          <SkillCard key={i} category={cat} />
        ))}
      </div>
    </section>
  );
};

export default Skills;
