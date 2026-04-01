import React, { useEffect, useRef } from 'react';

export default function CustomCursor() {
  const dotRef = useRef(null);
  const ringRef = useRef(null);

  useEffect(() => {
    let mouseX = 0;
    let mouseY = 0;
    let ringX = 0;
    let ringY = 0;

    const onMouseMove = (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
      if (dotRef.current) {
        dotRef.current.style.transform = `translate3d(${mouseX}px, ${mouseY}px, 0)`;
      }
    };

    window.addEventListener('mousemove', onMouseMove);

    const render = () => {
      ringX += (mouseX - ringX) * 0.12;
      ringY += (mouseY - ringY) * 0.12;
      
      if (ringRef.current) {
        ringRef.current.style.transform = `translate3d(${ringX}px, ${ringY}px, 0)`;
      }
      requestAnimationFrame(render);
    };
    const req = requestAnimationFrame(render);

    const handleMouseOver = (e) => {
      if (['A', 'BUTTON'].includes(e.target.tagName) || e.target.closest('a') || e.target.closest('button')) {
        if (ringRef.current) ringRef.current.style.width = '64px';
        if (ringRef.current) ringRef.current.style.height = '64px';
      }
    };

    const handleMouseOut = (e) => {
      if (['A', 'BUTTON'].includes(e.target.tagName) || e.target.closest('a') || e.target.closest('button')) {
        if (ringRef.current) ringRef.current.style.width = '32px';
        if (ringRef.current) ringRef.current.style.height = '32px';
      }
    };

    document.addEventListener('mouseover', handleMouseOver);
    document.addEventListener('mouseout', handleMouseOut);

    return () => {
      window.removeEventListener('mousemove', onMouseMove);
      document.removeEventListener('mouseover', handleMouseOver);
      document.removeEventListener('mouseout', handleMouseOut);
      cancelAnimationFrame(req);
    };
  }, []);

  return (
    <>
      <div 
        ref={dotRef}
        style={{
          width: '8px', height: '8px', 
          backgroundColor: '#00F5FF', 
          position: 'fixed', 
          top: -4, left: -4, 
          pointerEvents: 'none', 
          zIndex: 9999,
          borderRadius: '50%'
        }}
      />
      <div 
        ref={ringRef}
        style={{
          width: '32px', height: '32px', 
          border: '1px solid rgba(0,245,255,0.5)', 
          position: 'fixed', 
          top: -16, left: -16, 
          pointerEvents: 'none', 
          zIndex: 9998,
          borderRadius: '50%',
          transition: 'width 0.3s, height 0.3s'
        }}
      />
    </>
  );
}
