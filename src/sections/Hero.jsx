import React, { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import RobotCanvas from '../components/RobotCanvas';

export default function Hero() {
  const nameRef = useRef(null);
  const [typedText, setTypedText] = useState('INNOVATOR');
  const words = ['INNOVATOR', 'DEVELOPER', 'BUILDER', 'CREATOR'];

  useEffect(() => {
    // GSAP blur-to-sharp reveal on load
    if (nameRef.current) {
      const spans = nameRef.current.querySelectorAll('span');
      gsap.fromTo(spans, 
        { filter: 'blur(10px)', opacity: 0, y: 40 },
        { filter: 'blur(0px)', opacity: 1, y: 0, stagger: 0.15, duration: 0.8, ease: 'power2.out' }
      );
    }

    // Typewriter cycling
    let currentIndex = 0;
    const interval = setInterval(() => {
      currentIndex = (currentIndex + 1) % words.length;
      setTypedText(words[currentIndex]);
    }, 2000); // changes every 2s
    
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="hero" className="hero">
      <div className="hero-orb-cyan"></div>
      <div className="hero-orb-violet"></div>
      
      {/* Left Col */}
      <div className="relative z-10 flex flex-col justify-center items-start">
        <div className="hero-badge mb-4">[HELLO! I'M]</div>
        <h1 className="hero-name word-keep uppercase" ref={nameRef}>
          <span style={{ display: 'inline-block' }}>ANMOL</span><br />
          <span style={{ display: 'inline-block' }}>GARG</span>
        </h1>
        <p className="text-muted mt-2 word-keep" style={{ fontSize: '1rem' }}>
          Full Stack Developer & AI Innovator
        </p>
      </div>

      {/* Center Col - Robot */}
      <div className="hero-robot-wrap z-10">
        <RobotCanvas height={680} cameraZ={3.2} section="hero" />
      </div>

      {/* Right Col */}
      <div className="hero-right-col relative z-10 flex flex-col justify-center items-end text-right gap-4">
        <div className="text-[0.65rem] tracking-[0.2em] text-[#00F5FF]">
          B.TECH CSE · NOIDA, INDIA
        </div>
        <div 
          className="font-heading font-black word-keep"
          style={{ fontSize: 'clamp(1.8rem, 3vw, 3.5rem)' }}
        >
          {typedText}
        </div>
        <div className="hero-badge mt-4">
          [CO-FOUNDER @ KENET TECHNOLOGIES]
        </div>
      </div>
    </section>
  );
}
