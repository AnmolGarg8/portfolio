import React from 'react';
import { Github, Linkedin, Twitter, Instagram } from 'lucide-react';

const SocialSidebar = () => {
  const socials = [
    { icon: <Github size={18} />, href: 'https://github.com/AnmolGarg8' },
    { icon: <Linkedin size={18} />, href: 'https://linkedin.com/in/anmol-garg2005' },
    { icon: <Twitter size={18} />, href: '#' },
    { icon: <Instagram size={18} />, href: '#' },
  ];

  return (
    <div className="social-sidebar" style={{
      position: 'fixed',
      left: '1.5rem',
      top: '50%',
      transform: 'translateY(-50%)',
      display: 'flex',
      flexDirection: 'column',
      gap: '2rem',
      zIndex: 500,
      alignItems: 'center'
    }}>
      <div className="social-line top"></div>
      
      {socials.map((social, i) => (
        <a 
          key={i} 
          href={social.href} 
          target="_blank" 
          rel="noopener noreferrer"
          className="social-icon-wrapper"
          style={{
            color: 'rgba(248, 250, 252, 0.4)',
            transition: 'all 0.3s ease'
          }}
        >
          {social.icon}
        </a>
      ))}
      
      <div className="social-line bottom"></div>

      <style>{`
        .social-line {
          width: 1px;
          height: 60px;
          background: rgba(248, 250, 252, 0.12);
        }
        .social-icon-wrapper:hover {
          color: #00E5FF;
          transform: translateX(4px);
        }
        @media (max-width: 1024px) {
          .social-sidebar {
            display: none !important;
          }
        }
      `}</style>
    </div>
  );
};

export default SocialSidebar;
