import { useEffect, useRef } from 'react';
import gsap from 'gsap';

const Preloader = () => {
  const containerRef = useRef(null);
  const textRef = useRef(null);
  
  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline();
      
      // Init split
      gsap.set('.letter-a, .letter-g', { x: (i) => i === 0 ? '-50vw' : '50vw', opacity: 0 });

      // Slam together
      tl.to('.letter-a, .letter-g', {
        x: 0,
        opacity: 1,
        duration: 0.8,
        ease: 'power4.inOut',
        stagger: 0.1
      })
      .to('.glow-shockwave', {
        scale: 15,
        opacity: 0,
        duration: 0.6,
        ease: 'power2.out'
      }, "-=0.2")
      .to(containerRef.current, {
        yPercent: -100,
        duration: 0.8,
        ease: 'power3.inOut',
        delay: 0.5,
      });

    }, containerRef);
    
    return () => ctx.revert();
  }, []);

  return (
    <div 
      ref={containerRef}
      className="fixed inset-0 z-[100] flex items-center justify-center bg-dark text-white overflow-hidden"
    >
      <div className="relative flex items-center justify-center" ref={textRef}>
        <div className="absolute w-10 h-10 rounded-full bg-cyan-glow opacity-0 glow-shockwave"></div>
        <span className="letter-a text-6xl md:text-8xl font-heading font-bold glow-cyan text-gradient tracking-tighter">A</span>
        <span className="letter-g text-6xl md:text-8xl font-heading font-bold text-violet-neon glow-violet tracking-tighter mix-blend-screen">G</span>
      </div>
    </div>
  );
};

export default Preloader;
