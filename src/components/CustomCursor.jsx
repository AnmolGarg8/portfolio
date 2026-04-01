import React, { useEffect, useRef, useState } from 'react';

const CustomCursor = () => {
  const dot = useRef(null);
  const ring = useRef(null);
  const [isHovered, setIsHovered] = useState(false);
  const [isClicked, setIsClicked] = useState(false);

  useEffect(() => {
    let mouseX = 0;
    let mouseY = 0;
    let ringX = 0;
    let ringY = 0;

    const moveCursor = (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
      
      if (dot.current) {
        dot.current.style.transform = `translate(${mouseX}px, ${mouseY}px)`;
      }
    };

    const animateRing = () => {
      ringX += (mouseX - ringX) * 0.15; // lerp for delay
      ringY += (mouseY - ringY) * 0.15;
      
      if (ring.current) {
        ring.current.style.transform = `translate(${ringX}px, ${ringY}px)`;
      }
      
      requestAnimationFrame(animateRing);
    };

    const handleHover = () => setIsHovered(true);
    const handleUnhover = () => setIsHovered(false);
    const handleClick = () => {
      setIsClicked(true);
      setTimeout(() => setIsClicked(false), 200);
    };

    window.addEventListener('mousemove', moveCursor);
    window.addEventListener('mousedown', handleClick);
    
    const interactiveElements = document.querySelectorAll('a, button, .service-item, .project-card, input, textarea');
    interactiveElements.forEach(el => {
      el.addEventListener('mouseenter', handleHover);
      el.addEventListener('mouseleave', handleUnhover);
    });

    const animationId = requestAnimationFrame(animateRing);

    return () => {
      window.removeEventListener('mousemove', moveCursor);
      window.removeEventListener('mousedown', handleClick);
      cancelAnimationFrame(animationId);
      interactiveElements.forEach(el => {
        el.removeEventListener('mouseenter', handleHover);
        el.removeEventListener('mouseleave', handleUnhover);
      });
    };
  }, []);

  return (
    <div className="cursor-wrapper" style={{ pointerEvents: 'none' }}>
      <div
        ref={dot}
        className="cursor-dot"
        style={{
          position: 'fixed',
          top: -3,
          left: -3,
          width: '6px',
          height: '6px',
          backgroundColor: '#00E5FF',
          borderRadius: '50%',
          zIndex: 9999,
          pointerEvents: 'none',
          willChange: 'transform'
        }}
      />
      <div
        ref={ring}
        className={`cursor-ring ${isHovered ? 'hovered' : ''} ${isClicked ? 'clicked' : ''}`}
        style={{
          position: 'fixed',
          top: -20,
          left: -20,
          width: '40px',
          height: '40px',
          border: '1px solid rgba(0, 229, 255, 0.4)',
          borderRadius: '50%',
          zIndex: 9998,
          pointerEvents: 'none',
          transition: 'width 0.3s, height 0.3s, border-color 0.3s, opacity 0.3s, scale 0.3s',
          willChange: 'transform'
        }}
      />
      <style>{`
        body { cursor: none !important; }
        a, button, input, textarea { cursor: none !important; }
        
        .cursor-ring.hovered {
          scale: 1.8;
          background: rgba(0, 229, 255, 0.05);
          border-color: rgba(0, 229, 255, 0.6);
          opacity: 0.6;
        }
        
        .cursor-ring.clicked {
          scale: 0.8;
          border-color: #F8FAFC;
        }
        
        @media (max-width: 1024px) {
          .cursor-wrapper { display: none !important; }
          body { cursor: default !important; }
        }
      `}</style>
    </div>
  );
};

export default CustomCursor;
