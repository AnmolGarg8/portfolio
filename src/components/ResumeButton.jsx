import React from 'react';

export default function ResumeButton() {
  return (
    <a 
      href="/resume.pdf" 
      target="_blank" 
      rel="noreferrer"
      style={{
        position: 'fixed',
        bottom: '2rem',
        right: '2rem',
        zIndex: 500,
        border: '1px solid rgba(255,255,255,0.3)',
        padding: '0.6rem 1.2rem',
        letterSpacing: '0.15em',
        fontSize: '0.75rem',
        color: 'white',
        textDecoration: 'none',
        background: 'transparent',
        transition: 'all 0.3s ease'
      }}
      onMouseEnter={e => {
        e.currentTarget.style.borderColor = '#00F5FF';
        e.currentTarget.style.color = '#00F5FF';
      }}
      onMouseLeave={e => {
        e.currentTarget.style.borderColor = 'rgba(255,255,255,0.3)';
        e.currentTarget.style.color = 'white';
      }}
    >
      RESUME
    </a>
  );
}
