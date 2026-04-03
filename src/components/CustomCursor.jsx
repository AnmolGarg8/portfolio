import { useEffect, useState } from 'react';

const CustomCursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [trailingPosition, setTrailingPosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    const onMouseMove = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    const onMouseOver = (e) => {
      if (e.target.closest('a, button, input, textarea, .skill-pill')) {
        setIsHovering(true);
      } else {
        setIsHovering(false);
      }
    };

    window.addEventListener('mousemove', onMouseMove);
    window.addEventListener('mouseover', onMouseOver);

    return () => {
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('mouseover', onMouseOver);
    };
  }, []);

  // Lerp for trailing ring
  useEffect(() => {
    let animationFrame;
    const lerp = () => {
      setTrailingPosition(prev => ({
        x: prev.x + (position.x - prev.x) * 0.15,
        y: prev.y + (position.y - prev.y) * 0.15,
      }));
      animationFrame = requestAnimationFrame(lerp);
    };
    lerp();
    return () => cancelAnimationFrame(animationFrame);
  }, [position]);

  return (
    <div className={`hidden md:block ${isHovering ? 'cursor-hover' : ''}`}>
      <div 
        className="cursor-dot"
        style={{ left: `${position.x}px`, top: `${position.y}px` }}
      />
      <div 
        className="cursor-ring"
        style={{ left: `${trailingPosition.x}px`, top: `${trailingPosition.y}px` }}
      />
    </div>
  );
};

export default CustomCursor;
