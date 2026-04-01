import React, { useEffect, useState } from 'react';

const ScrollProgress = () => {
  const [scrollWidth, setScrollWidth] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = (window.scrollY / totalHeight) * 100;
      setScrollWidth(progress);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div style={{
      position: 'fixed',
      top: 0,
      left: 0,
      width: '100%',
      height: '2px',
      zIndex: 1001,
      pointerEvents: 'none',
      backgroundColor: 'rgba(248, 250, 252, 0.05)'
    }}>
      <div style={{
        width: `${scrollWidth}%`,
        height: '100%',
        background: 'linear-gradient(90deg, #00E5FF, #7C3AED, #F59E0B)',
        boxShadow: '0 0 10px #00E5FF',
        transition: 'width 0.1s linear'
      }} />
    </div>
  );
};

export default ScrollProgress;
