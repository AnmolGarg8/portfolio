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

    // Animation loop for lag effect
    let ctx = gsap.context(() => {
      gsap.ticker.add(() => {
        // Dot follows instantly
        dotPos.x += (mouse.x - dotPos.x) * 0.5;
        dotPos.y += (mouse.y - dotPos.y) * 0.5;
        gsap.set(dotRef.current, { x: dotPos.x, y: dotPos.y });

        // Ring follows with lag
        ringPos.x += (mouse.x - ringPos.x) * 0.15;
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
    <div className="hidden md:block pointer-events-none fixed inset-0 z-[9999]">
      <div 
        ref={dotRef} 
        className={`absolute w-2 h-2 rounded-full bg-cyan-glow glow-cyan transform -translate-x-1/2 -translate-y-1/2 transition-all duration-200 ${isHovering ? 'scale-[2.5] opacity-50' : 'scale-100'}`}
      />
      <div 
        ref={ringRef} 
        className={`absolute w-8 h-8 rounded-full border border-cyan-glow/50 transform -translate-x-1/2 -translate-y-1/2 transition-all duration-300 ${isHovering ? 'scale-150 border-violet-neon/70 bg-violet-neon/10 backdrop-blur-[2px]' : 'scale-100'}`}
      />
    </div>
  );
};

export default Cursor;
