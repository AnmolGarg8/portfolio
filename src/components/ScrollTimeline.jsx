import { useEffect, useRef, useState } from 'react';

const ScrollTimeline = () => {
  const [scrolled, setScrolled] = useState(0);
  const pathRef = useRef(null);
  const [pathLength, setPathLength] = useState(0);

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

    const handleScroll = () => {
      const winScroll = document.body.scrollTop || document.documentElement.scrollTop;
      const height = document.documentElement.scrollHeight - window.innerHeight;
      setScrolled(winScroll / height);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Lerp for smooth drawing
  const [currentOffset, setCurrentOffset] = useState(10000); // Start way off
  useEffect(() => {
    if (pathLength === 0) return;
    
    let animationFrame;
    const lerp = () => {
      const target = pathLength - (pathLength * scrolled);
      setCurrentOffset(prev => prev + (target - prev) * 0.06);
      animationFrame = requestAnimationFrame(lerp);
    };
    lerp();
    return () => cancelAnimationFrame(animationFrame);
  }, [scrolled, pathLength]);

  return (
    <div className="scroll-timeline">
      <svg width="100%" height="100%" style={{ overflow: 'visible' }}>
        <defs>
          <linearGradient id="lineGrad" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#7c3aed" />
            <stop offset="100%" stopColor="#06b6d4" />
          </linearGradient>
        </defs>
        
        {/* Background dashed line */}
        <line 
          x1="0" y1="0" x2="0" y2="100%" 
          stroke="rgba(124, 58, 237, 0.2)" 
          strokeWidth="2" 
          strokeDasharray="8 6"
        />

        {/* Drawing line */}
        <path
          ref={pathRef}
          d="M 0 0 L 0 5000" /* Dummy long path */
          fill="none"
          stroke="url(#lineGrad)"
          strokeWidth="2"
          className="timeline-line"
          style={{ 
            strokeDasharray: pathLength || 10000, 
            strokeDashoffset: currentOffset 
          }}
        />

        {/* Section Nodes */}
        {sections.map((section, idx) => {
          // Approximate calculation for node position
          // In a real app, you'd calculate exact element offsets
          const segment = 1 / (sections.length - 1);
          const pos = idx * segment * 100;
          const isActive = scrolled >= idx * segment - 0.05;

          return (
            <g key={section.id} style={{ transform: `translateY(${pos}%)` }}>
              <circle
                r="4"
                fill={isActive ? "#fff" : "rgba(124, 58, 237, 0.5)"}
                stroke="#7c3aed"
                strokeWidth="2"
                className={`timeline-node ${isActive ? 'active' : ''}`}
              />
              <text
                x="20"
                y="4"
                className="timeline-label"
                style={{ opacity: isActive ? 1 : 0.4 }}
              >
                {section.label}
              </text>
            </g>
          );
        })}
      </svg>
    </div>
  );
};

export default ScrollTimeline;
