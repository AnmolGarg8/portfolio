import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const Cursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    const handleMouseOver = (e) => {
      const target = e.target;
      if (
        target.tagName.toLowerCase() === 'a' ||
        target.tagName.toLowerCase() === 'button' ||
        target.classList.contains('interactive') ||
        target.closest('a') ||
        target.closest('button')
      ) {
        setIsHovered(true);
      } else {
        setIsHovered(false);
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseover', handleMouseOver);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseover', handleMouseOver);
    };
  }, []);

  // Only show custom cursor on non-touch devices
  const [isTouchDevice, setIsTouchDevice] = useState(false);
  useEffect(() => {
    setIsTouchDevice('ontouchstart' in window || navigator.maxTouchPoints > 0);
  }, []);

  if (isTouchDevice) return null;

  return (
    <motion.div
      className="fixed pointer-events-none z-[9999] rounded-full mix-blend-difference"
      animate={{
        x: position.x - (isHovered ? 25 : 10),
        y: position.y - (isHovered ? 25 : 10),
        scale: isHovered ? 1.5 : 1,
        backgroundColor: isHovered ? 'rgba(92, 107, 192, 1)' : 'transparent',
        border: isHovered ? 'none' : '2px solid #5C6BC0',
        width: isHovered ? 50 : 20,
        height: isHovered ? 50 : 20,
      }}
      transition={{
        type: 'spring',
        stiffness: 700,
        damping: 30,
        mass: 0.5,
      }}
    />
  );
};

export default Cursor;
