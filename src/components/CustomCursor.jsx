import React, { useEffect, useRef, useState } from 'react';

const CustomCursor = () => {
  const dotRef = useRef(null);
  const ringRef = useRef(null);
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    let mouseX = 0;
    let mouseY = 0;
    let ringX = 0;
    let ringY = 0;

    const onMouseMove = (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
      if (dotRef.current) {
        dotRef.current.style.transform = `translate(${mouseX}px, ${mouseY}px)`;
      }
    };

    const animateRing = () => {
      ringX += (mouseX - ringX) * 0.15;
      ringY += (mouseY - ringY) * 0.15;
      if (ringRef.current) {
        ringRef.current.style.transform = `translate(${ringX}px, ${ringY}px)`;
      }
      requestAnimationFrame(animateRing);
    };

    const handleMouseEnter = () => setIsHovering(true);
    const handleMouseLeave = () => setIsHovering(false);

    window.addEventListener('mousemove', onMouseMove);
    const elements = document.querySelectorAll('a, button, input, textarea, .project-card, .contact-row');
    elements.forEach(el => {
      el.addEventListener('mouseenter', handleMouseEnter);
      el.addEventListener('mouseleave', handleMouseLeave);
    });

    const animationId = requestAnimationFrame(animateRing);

    return () => {
      window.removeEventListener('mousemove', onMouseMove);
      cancelAnimationFrame(animationId);
      elements.forEach(el => {
        el.removeEventListener('mouseenter', handleMouseEnter);
        el.removeEventListener('mouseleave', handleMouseLeave);
      });
    };
  }, []);

  return (
    <>
      <div
        ref={dotRef}
        style={{
          position: 'fixed',
          top: -5,
          left: -5,
          width: '10px',
          height: '10px',
          backgroundColor: '#7c3aed',
          borderRadius: '50%',
          zIndex: 10000,
          pointerEvents: 'none',
          willChange: 'transform'
        }}
      />
      <div
        ref={ringRef}
        style={{
          position: 'fixed',
          top: -18,
          left: -18,
          width: '36px',
          height: '36px',
          border: '1px solid #7c3aed',
          borderRadius: '50%',
          zIndex: 9999,
          pointerEvents: 'none',
          willChange: 'transform',
          transition: 'width 0.3s, height 0.3s, background 0.3s',
          ...(isHovering && {
            width: '60px',
            height: '60px',
            top: -30,
            left: -30,
            background: 'rgba(124, 58, 237, 0.1)',
            borderColor: '#a78bfa'
          })
        }}
      />
      <style>{`
        body { cursor: none !important; }
        a, button, input, textarea { cursor: none !important; }
        @media (max-width: 1024px) {
          div[style*="fixed"] { display: none !important; }
          body { cursor: default !important; }
        }
      `}</style>
    </>
  );
};

export default CustomCursor;
