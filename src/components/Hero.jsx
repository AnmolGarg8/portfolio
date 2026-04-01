import { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { FaGithub, FaLinkedin, FaInstagram, FaTwitter } from 'react-icons/fa';

const Hero = () => {
  const containerRef = useRef(null);

  const titles = ["INNOVATOR", "BUILDER", "CREATOR", "CO-FOUNDER"];
  const [currentTitle, setCurrentTitle] = useState(0);

  useEffect(() => {
    const cycle = setInterval(() => {
      setCurrentTitle(prev => (prev + 1) % titles.length);
    }, 2500);
    return () => clearInterval(cycle);
  }, []);

  useEffect(() => {
    let ctx = gsap.context(() => {
      // Small cyan label snap-in
      gsap.fromTo('.hero-label-snap',
         { opacity: 0, scale: 0.8 },
         { opacity: 1, scale: 1, duration: 0.5, delay: 1, ease: 'back.out(2)' }
      );

      // Name lines blur to sharp + slide up stagger
      gsap.fromTo('.hero-name-line',
        { opacity: 0, filter: 'blur(30px)', y: 100 },
        { 
          opacity: 1, 
          filter: 'blur(0px)', 
          y: 0, 
          duration: 1.2,
          stagger: 0.15,
          delay: 1.2,
          ease: 'power3.out'
        }
      );

      // Right column fade
      gsap.fromTo('.hero-right-col',
        { opacity: 0, x: 50 },
        { opacity: 1, x: 0, duration: 1, delay: 1.8, ease: 'power2.out' }
      );

      // Fixed sidebars fade in
      gsap.fromTo('.fixed-sidebar',
        { opacity: 0 },
        { opacity: 1, duration: 1.5, delay: 2 }
      );

      // Orbs floating randomly
      gsap.to('.hero-orb', {
        y: 'random(-40, 40)',
        x: 'random(-40, 40)',
        duration: 4,
        ease: 'sine.inOut',
        yoyo: true,
        repeat: -1,
        stagger: { amount: 2, from: 'random' }
      });
      
    }, containerRef);
    return () => ctx.revert();
  }, []);

  return (
    <section 
      id="hero" 
      ref={containerRef}
      className="hero-glow relative w-full h-screen min-h-[850px] flex items-center overflow-hidden" 
      style={{ padding: '0 4rem' }}
    >
      {/* Blurred Orbs */}
      <div className="hero-orb absolute top-20 left-20 w-64 h-64 rounded-full bg-cyan-glow/20 blur-[80px]"></div>
      <div className="hero-orb absolute bottom-20 right-20 w-64 h-64 rounded-full bg-violet-neon/20 blur-[80px]"></div>

      <div className="container mx-auto grid grid-cols-1 md:grid-cols-[1fr_minmax(0,500px)_1fr] items-center gap-8 relative z-10 w-full" style={{ zIndex: 1 }}>
        
        {/* Left Column */}
        <div className="flex flex-col justify-center pointer-events-none relative" style={{ zIndex: 1, maxWidth: '580px', width: '100%' }}>
          <div className="hero-label-snap inline-block px-3 py-1 border border-cyan-glow/50 text-cyan-glow text-xs font-bold tracking-[0.25em] mb-6 w-max bg-cyan-glow/5 backdrop-blur-sm">
            HELLO! I'M
          </div>
          
          <h1 className="font-heading font-extrabold leading-[0.85] tracking-[0.05em]" style={{ fontSize: 'clamp(1.8rem, 6vw, 4.5rem)', wordBreak: 'keep-all', overflowWrap: 'normal', hyphens: 'none' }}>
            <div className="hero-name-line cinematic-text text-white">ANMOL</div>
            <div className="hero-name-line cinematic-text text-white">GARG</div>
          </h1>

          <div className="hero-name-line text-white/50 text-sm font-medium tracking-[0.1em] mt-8 max-w-xs leading-loose">
            Full Stack Developer <br/> & AI Innovator
          </div>
        </div>

        {/* Center Empty for Robot */}
        <div className="robot-canvas-container w-full relative h-[300px] md:h-[600px]" style={{ maxWidth: '500px', zIndex: 2 }}></div>

        {/* Right Column */}
        <div className="hero-right-col flex flex-col justify-center lg:items-end lg:text-right pointer-events-none relative" style={{ zIndex: 1, maxWidth: '580px', width: '100%' }}>
            <div className="text-cyan-glow text-xs font-bold tracking-[0.25em] mb-8">
              B.TECH CSE · NOIDA, INDIA
            </div>
            
            <div className="relative h-[80px] md:h-[120px] flex lg:justify-end items-center mb-6">
                {/* Ghost Text */}
                <span className="absolute font-heading font-bold text-white/5 pointer-events-none tracking-wider" style={{ fontSize: 'clamp(2rem, 8vw, 6rem)', wordBreak: 'keep-all', overflowWrap: 'normal', hyphens: 'none' }}>
                   DEVELOPER
                </span>
                {/* Typewriter Text */}
                <div key={currentTitle} className="font-heading font-bold text-white animate-[slideUp_0.5s_ease-out] z-10 pointer-events-auto" style={{ fontSize: 'clamp(1.5rem, 4vw, 3.5rem)', wordBreak: 'keep-all', overflowWrap: 'normal', hyphens: 'none' }}>
                   {titles[currentTitle]}
                </div>
            </div>

            <div className="mt-6">
               <span className="inline-block px-4 py-2 border border-white/20 text-white/70 text-xs font-bold tracking-[0.2em] bg-white/5 backdrop-blur-md">
                   CO-FOUNDER @ KENET TECHNOLOGIES
               </span>
            </div>
        </div>
      </div>

      {/* Fixed Sidebar Socials */}
      <div className="fixed-sidebar fixed left-6 top-1/2 -translate-y-1/2 flex-col space-y-6 z-50 pointer-events-auto hidden md:flex" style={{ left: '1.5rem' }}>
        <div className="w-[1px] h-12 bg-white/20 mx-auto mb-4"></div>
        {[
          { icon: <FaGithub size={20}/>, url: 'https://github.com/AnmolGarg8' },
          { icon: <FaLinkedin size={20}/>, url: 'https://linkedin.com/in/anmol-garg2005' },
          { icon: <FaTwitter size={20}/>, url: '#' },
          { icon: <FaInstagram size={20}/>, url: '#' }
        ].map((item, i) => (
          <a key={i} href={item.url} target="_blank" rel="noreferrer" className="text-white/40 hover:text-cyan-glow transition-colors duration-300 hover:-translate-y-1">
            {item.icon}
          </a>
        ))}
        <div className="w-[1px] h-12 bg-white/20 mx-auto mt-4"></div>
      </div>

      {/* Horizontal Socials for Mobile */}
      <div className="flex md:hidden justify-center space-x-6 mt-4 pointer-events-auto z-50">
        {[
          { icon: <FaGithub size={20}/>, url: 'https://github.com/AnmolGarg8' },
          { icon: <FaLinkedin size={20}/>, url: 'https://linkedin.com/in/anmol-garg2005' },
          { icon: <FaTwitter size={20}/>, url: '#' },
          { icon: <FaInstagram size={20}/>, url: '#' }
        ].map((item, i) => (
          <a key={i} href={item.url} target="_blank" rel="noreferrer" className="text-white/40 hover:text-cyan-glow transition-colors duration-300">
            {item.icon}
          </a>
        ))}
      </div>

      {/* Fixed Bottom Right Resume Button */}
      <div className="fixed-sidebar fixed z-50 pointer-events-auto" style={{ bottom: '2rem', right: '2rem' }}>
        <a href="#" className="flex items-center space-x-3 px-6 py-3 bg-[#0a0a14] border border-white hover:bg-white hover:text-black transition-all duration-300 group">
          <span className="text-xs font-bold tracking-[0.25em]">RESUME</span>
          <span className="opacity-70 group-hover:text-black">⬡</span>
        </a>
      </div>

      <style>{`
        @keyframes slideUp {
          from { opacity: 0; transform: translateY(15px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </section>
  );
};

export default Hero;
