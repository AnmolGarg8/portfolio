import React from 'react';
import { FaGithub, FaLinkedin, FaTwitter, FaInstagram } from 'react-icons/fa';

export default function SocialSidebar() {
  const socials = [
    { icon: <FaGithub size={18} />, url: 'https://github.com/AnmolGarg8' },
    { icon: <FaLinkedin size={18} />, url: 'https://linkedin.com/in/anmol-garg2005' },
    { icon: <FaTwitter size={18} />, url: '#' },
    { icon: <FaInstagram size={18} />, url: '#' },
  ];

  return (
    <div style={{
      position: 'fixed',
      left: '1.2rem',
      top: '50%',
      transform: 'translateY(-50%)',
      zIndex: 500,
      display: 'flex',
      flexDirection: 'column',
      gap: '1.5rem'
    }}>
      {socials.map((s, i) => (
        <a 
          key={i} 
          href={s.url} 
          target="_blank" 
          rel="noreferrer"
          style={{
            color: 'rgba(255,255,255,0.35)',
            transition: 'all 0.3s ease',
            display: 'block'
          }}
          onMouseEnter={e => {
            e.currentTarget.style.color = '#00F5FF';
            e.currentTarget.style.transform = 'translateX(3px)';
          }}
          onMouseLeave={e => {
            e.currentTarget.style.color = 'rgba(255,255,255,0.35)';
            e.currentTarget.style.transform = 'translateX(0)';
          }}
        >
          {s.icon}
        </a>
      ))}
    </div>
  );
}
