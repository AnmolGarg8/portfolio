import { useEffect, useRef, useState } from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';

const ScrollTimeline = () => {
  const [pathLength, setPathLength] = useState(0);
  const [scrolled, setScrolled] = useState(0);
  const pathRef = useRef(null);
  const [dots, setDots] = useState([]);

  const sections = [
    { id: 'home', label: 'Hero' },
    { id: 'about', label: 'About' },
    { id: 'skills', label: 'Skills' },
    { id: 'projects', label: 'Projects' },
    { id: 'achievements', label: 'Awards' },
    { id: 'education', label: 'Education' },
    { id: 'contact', label: 'Contact' }
  ];

  useEffect(() => {
    if (pathRef.current) {
      setPathLength(pathRef.current.getTotalLength());
    }

    const calculateDots = () => {
      const newDots = sections.map(section => {
        const el = document.getElementById(section.id);
        if (el) {
          const rect = el.getBoundingClientRect();
          const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
          const offsetTop = rect.top + scrollTop;
          const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
          const progress = offsetTop / totalHeight;
          return { ...section, progress: Math.min(Math.max(progress, 0), 1) };
        }
        return null;
      }).filter(d => d !== null);
      setDots(newDots);
    };

    const handleScroll = () => {
      const winScroll = document.body.scrollTop || document.documentElement.scrollTop;
      const height = document.documentElement.scrollHeight - window.innerHeight;
      const scrolled = winScroll / height;
      setScrolled(scrolled);
    };

    calculateDots();
    window.addEventListener('scroll', handleScroll);
    window.addEventListener('resize', calculateDots);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', calculateDots);
    };
  }, []);

  // Lerp logic for smoother drawing
  const [currentOffset, setCurrentOffset] = useState(0);
  useEffect(() => {
    let animationFrame;
    const animate = () => {
      const target = pathLength - (pathLength * scrolled);
      setCurrentOffset(prev => prev + (target - prev) * 0.08);
      animationFrame = requestAnimationFrame(animate);
    };
    animate();
    return () => cancelAnimationFrame(animationFrame);
  }, [scrolled, pathLength]);

  return (
    <div className="timeline-container">
      <svg width="100" height="100%" className="h-full">
        <defs>
          <linearGradient id="purpleGradient" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#7c3aed" />
            <stop offset="100%" stopColor="#a78bfa" />
          </linearGradient>
        </defs>
        <line 
          x1="41" y1="0" x2="41" y2="100%" 
          stroke="rgba(124, 58, 237, 0.1)" 
          strokeWidth="2" 
        />
        <path
          ref={pathRef}
          d="M 41 0 L 41 10000" /* Long enough path */
          fill="none"
          stroke="url(#purpleGradient)"
          strokeWidth="2"
          style={{ 
            strokeDasharray: pathLength, 
            strokeDashoffset: currentOffset 
          }}
        />
        
        {dots.map((dot, i) => (
          <g key={i} transform={`translate(41, ${dot.progress * 100}%)`}>
            {scrolled >= dot.progress && (
              <motion.circle
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                r="4"
                fill="#7c3aed"
                className="timeline-dot"
                style={{ filter: 'drop-shadow(0 0 5px #7c3aed)' }}
              />
            )}
            <text
              x="20"
              y="4"
              className="timeline-label"
              style={{ 
                opacity: scrolled >= dot.progress ? 1 : 0.4,
                transition: 'opacity 0.3s'
              }}
            >
              {dot.label}
            </text>
          </g>
        ))}
      </svg>
    </div>
  );
};

export default ScrollTimeline;
