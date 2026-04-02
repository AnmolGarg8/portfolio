import React, { useEffect } from 'react';

const skillCategories = [
  {
    title: 'FRONTEND',
    icon: '🔷',
    tags: ['React.js', 'JavaScript', 'HTML/CSS', 'Tailwind']
  },
  {
    title: 'BACKEND',
    icon: '⌥',
    tags: ['Node.js', 'Express.js', 'REST APIs', 'MongoDB']
  },
  {
    title: 'AI / ML / IOT',
    icon: '⚠',
    tags: ['Python', 'TensorFlow', 'IoT Sensors', 'Embedded C']
  },
  {
    title: 'SECURITY',
    icon: '🔒',
    tags: ['Cybersecurity', 'Network Security', 'Linux', 'Git']
  }
];

const SkillCard = ({ category }) => (
  <div className="skill-card reveal" style={{
    background: '#111122',
    border: '1px solid rgba(255, 255, 255, 0.05)',
    padding: '3rem 2rem',
    position: 'relative',
    transition: 'all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275)',
    borderRadius: '8px',
    display: 'flex',
    flexDirection: 'column',
    gap: '1.5rem'
  }}>
    {/* Hover Top Line */}
    <div className="hover-line" style={{
      position: 'absolute',
      top: 0,
      left: 0,
      width: '100%',
      height: '2px',
      background: '#7c3aed',
      opacity: 0,
      transition: '0.3s'
    }} />

    <div style={{ fontSize: '2rem' }}>{category.icon}</div>
    
    <div style={{
      fontFamily: 'DM Mono',
      fontSize: '0.9rem',
      fontWeight: 700,
      color: '#FFFFFF',
      letterSpacing: '0.15em'
    }}>{category.title}</div>

    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.6rem', marginTop: 'auto' }}>
      {category.tags.map((tag, i) => (
        <span key={i} style={{
          fontFamily: 'DM Mono',
          fontSize: '0.7rem',
          color: '#a78bfa',
          background: 'rgba(124, 58, 237, 0.12)',
          border: '1px solid rgba(124, 58, 237, 0.25)',
          padding: '0.3rem 0.8rem',
          borderRadius: '50px',
          fontWeight: 500
        }}>{tag}</span>
      ))}
    </div>

    <style>{`
      .skill-card:hover {
        transform: translateY(-8px);
        box-shadow: 0 20px 40px rgba(124, 58, 237, 0.1);
        border-color: rgba(124, 58, 237, 0.3);
      }
      .skill-card:hover .hover-line {
        opacity: 1;
      }
    `}</style>
  </div>
);

const Skills = () => {
  return (
    <section className="skills" id="work" style={{
      padding: '10rem 10vw',
      background: '#080810'
    }}>
      <span className="section-label reveal">// TECH ARSENAL</span>
      <h2 className="reveal" style={{
        fontSize: 'clamp(2.5rem, 4vw, 4rem)',
        color: '#FFFFFF',
        marginBottom: '5rem'
      }}>Tools I <span className="italic-accent">Build</span> With</h2>
      
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
        gap: '2rem'
      }}>
        {skillCategories.map((cat, i) => (
          <SkillCard key={i} category={cat} />
        ))}
      </div>
    </section>
  );
};

export default Skills;
 Greenland: 0,
