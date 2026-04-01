import React from 'react';
import RobotCanvas from '../components/RobotCanvas';

export default function About() {
  return (
    <section id="about" className="about">
      <div className="about-robot">
        <RobotCanvas height={440} cameraZ={3} section="about" />
      </div>

      <div className="about-content">
        <div style={{
          display: 'inline-block',
          border: '1px solid #00F5FF',
          color: '#00F5FF',
          padding: '0.25rem 0.75rem',
          fontSize: '0.75rem',
          letterSpacing: '0.1em',
          fontWeight: 700,
          width: 'max-content'
        }}>
          [ABOUT ME]
        </div>
        
        <h2 className="font-heading font-black word-keep" style={{ fontSize: 'clamp(1.8rem, 2.8vw, 3.2rem)' }}>
          I BUILD INTELLIGENT SYSTEMS AT THE INTERSECTION OF AI, IOT & FULL STACK DEVELOPMENT.
        </h2>
        
        <p className="text-muted" style={{ lineHeight: 1.6 }}>
          As a developer scaling the boundaries of emerging tech, I specialize in crafting robust, high-performance web applications and hardware-integrated solutions. My journey is fueled by a restless curiosity to solve complex problems and an obsession with seamless user experiences. I bridge the gap between intelligent algorithms and impactful, real-world execution.
        </p>
      </div>

      <div className="about-stats">
        <div className="stat">
          <span className="stat-n">3+</span>
          <span className="stat-l">PROJECTS</span>
        </div>
        <div className="stat">
          <span className="stat-n">1</span>
          <span className="stat-l">STARTUP FOUNDED</span>
        </div>
      </div>
    </section>
  );
}
