import { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';

const Cursor = () => {
  const dotRef = useRef(null);
  const ringRef = useRef(null);
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    const mouse = { x: 0, y: 0 };
    const dotPos = { x: 0, y: 0 };
    const ringPos = { x: 0, y: 0 };

    const handleMouseMove = (e) => {
      mouse.x = e.clientX;
      mouse.y = e.clientY;
    };

    const handleMouseOver = (e) => {
      if (
        e.target.tagName.toLowerCase() === 'button' ||
        e.target.tagName.toLowerCase() === 'a' ||
        e.target.closest('button') ||
        e.target.closest('a')
      ) {
        setIsHovering(true);
      } else {
        setIsHovering(false);
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseover', handleMouseOver);

    let ctx = gsap.context(() => {
      gsap.ticker.add(() => {
        dotPos.x += (mouse.x - dotPos.x) * 1;
        dotPos.y += (mouse.y - dotPos.y) * 1;
        gsap.set(dotRef.current, { x: dotPos.x, y: dotPos.y });

        ringPos.x += (mouse.x - ringPos.x) * 0.15; // lerp lag
        ringPos.y += (mouse.y - ringPos.y) * 0.15;
        gsap.set(ringRef.current, { x: ringPos.x, y: ringPos.y });
      });
    });

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseover', handleMouseOver);
      ctx.revert();
    };
  }, []);

  return (
    <div className="hidden md:block pointer-events-none fixed inset-0 z-[99999]">
      {/* 8px solid cyan dot */}
      <div 
        ref={dotRef} 
        className="absolute w-2 h-2 rounded-full bg-cyan-glow transform -translate-x-1/2 -translate-y-1/2"
        style={{ willChange: 'transform' }}
      />
      {/* 32px transparent ring tracking */}
      <div 
        ref={ringRef} 
        className={`absolute w-8 h-8 rounded-full border border-cyan-glow transform -translate-x-1/2 -translate-y-1/2 transition-all duration-300 ${
            isHovering ? 'w-12 h-12 bg-cyan-glow/10 border-cyan-glow/80' : ''
        }`}
        style={{ willChange: 'transform' }}
      />
    </div>
  );
};

export default Cursor;
