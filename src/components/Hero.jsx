import { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { FaGithub, FaLinkedin, FaInstagram, FaTwitter } from 'react-icons/fa';
import useWindowSize from '../hooks/useWindowSize';

const Hero = () => {
  const containerRef = useRef(null);
  const size = useWindowSize();

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
      className="hero-glow hero-section" 
    >
      {/* Blurred Orbs */}
      <div className="hero-orb absolute top-20 left-20 w-64 h-64 rounded-full bg-cyan-glow/20 blur-[80px]"></div>
      <div className="hero-orb absolute bottom-20 right-20 w-64 h-64 rounded-full bg-violet-neon/20 blur-[80px]"></div>

      {/* Left Column */}
      <div className="hero-left flex flex-col justify-center">
        <div className="hero-label-snap inline-block px-3 py-1 border border-cyan-glow/50 text-cyan-glow text-xs font-bold tracking-[0.25em] mb-6 w-max bg-cyan-glow/5 backdrop-blur-sm">
          HELLO! I'M
        </div>
        
        <h1 className="hero-statement font-heading font-extrabold text-white" style={{ fontSize: 'clamp(3rem, 5.5vw, 6.5rem)', fontWeight: 900, lineHeight: 0.95 }}>
          <div className="hero-name-line cinematic-text">ANMOL</div>
          <div className="hero-name-line cinematic-text">GARG</div>
        </h1>

        <div className="hero-name-line text-white/50 text-sm font-medium tracking-[0.1em] mt-8 max-w-xs leading-loose">
          Full Stack Developer <br/> & AI Innovator
        </div>
      </div>

      {/* Center Column: Robot */}
      <div className="hero-robot-container robot-canvas-container"></div>

      {/* Right Column */}
      <div className="hero-right hero-right-col flex flex-col justify-center items-end text-right">
          <div className="text-cyan-glow text-xs font-bold tracking-[0.25em] mb-8">
            B.TECH CSE · NOIDA, INDIA
          </div>
          
          <div className="relative h-[80px] md:h-[120px] flex justify-end items-center mb-6">
              <span className="absolute font-heading font-extrabold text-white/5 pointer-events-none tracking-wider hero-ghost-text uppercase">
                  DEVELOPER
              </span>
              <div key={currentTitle} className="font-heading font-extrabold text-white animate-[slideUp_0.5s_ease-out] z-10 hero-role-text">
                  {titles[currentTitle]}
              </div>
          </div>

          <div className="mt-6">
              <span className="hero-cofounder-badge font-bold bg-white/5 backdrop-blur-md">
                  CO-FOUNDER @ KENET TECHNOLOGIES
              </span>
          </div>
      </div>

      {/* Fixed Sidebar Socials */}
      <div className="fixed-sidebar social-sidebar hidden md:flex">
        {[
          { icon: <FaGithub size={20}/>, url: 'https://github.com/AnmolGarg8' },
          { icon: <FaLinkedin size={20}/>, url: 'https://linkedin.com/in/anmol-garg2005' },
          { icon: <FaTwitter size={20}/>, url: '#' },
          { icon: <FaInstagram size={20}/>, url: '#' }
        ].map((item, i) => (
          <a key={i} href={item.url} target="_blank" rel="noreferrer">
            {item.icon}
          </a>
        ))}
      </div>

      {/* Fixed Bottom Right Resume Button */}
      <div className="fixed-sidebar resume-fixed">
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
