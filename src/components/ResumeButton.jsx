import React from 'react';

const ResumeButton = () => {
  return (
    <a href="#" className="resume-button" style={{
      position: 'fixed',
      bottom: '2rem',
      right: '2rem',
      zIndex: 500,
      border: '1px solid rgba(248, 250, 252, 0.12)',
      color: 'rgba(248, 250, 252, 0.4)',
      padding: '0.6rem 1.2rem',
      fontFamily: 'JetBrains Mono',
      fontSize: '0.7rem',
      letterSpacing: '0.15em',
      textDecoration: 'none',
      display: 'flex',
      alignItems: 'center',
      gap: '0.5rem',
      transition: 'all 0.3s ease',
      borderRadius: '2px',
      background: 'rgba(6, 6, 8, 0.6)',
      backdropFilter: 'blur(5px)'
    }}>
      RESUME
      <span className="dot-circle">○</span>
      
      <style>{`
        .resume-button:hover {
          border-color: #00E5FF;
          color: #00E5FF;
          transform: translateY(-3px);
          box-shadow: 0 5px 15px rgba(0, 229, 255, 0.15);
        }
        .dot-circle {
          font-size: 0.8rem;
          transition: transform 0.3s ease;
        }
        .resume-button:hover .dot-circle {
          transform: scale(1.2);
        }
        @media (max-width: 768px) {
          .resume-button {
            bottom: 1rem;
            right: 1rem;
            padding: 0.5rem 1rem;
          }
        }
      `}</style>
    </a>
  );
};

export default ResumeButton;
