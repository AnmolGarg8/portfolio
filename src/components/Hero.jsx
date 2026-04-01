import { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { Mail, ArrowRight } from 'lucide-react';
import Hero3D from './Hero3D';

const Hero = () => {
  const containerRef = useRef(null);
  const textRef = useRef(null);
  const subtitleRef = useRef(null);

  const titles = [
    "Full Stack Developer",
    "AI & IoT Innovator",
    "Co-Founder @ Kenet Technologies",
    "Samsung Top 10 Nationally"
  ];
  const [currentTitleIndex, setCurrentTitleIndex] = useState(0);

  useEffect(() => {
    // Typewriter effect interval
    const interval = setInterval(() => {
      setCurrentTitleIndex((prev) => (prev + 1) % titles.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [titles.length]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Blur to sharp animation for heading words
      const words = document.querySelectorAll('.hero-word');
      
      gsap.fromTo(words, 
        { 
          opacity: 0, 
          filter: "blur(20px)", 
          y: 40 
        },
        { 
          opacity: 1, 
          filter: "blur(0px)", 
          y: 0, 
          duration: 1.2, 
          stagger: 0.2, 
          ease: "power3.out",
          delay: 1.5 // After preloader
        }
      );

      // Fade in other elements
      gsap.fromTo('.hero-fade-in',
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 1, stagger: 0.2, delay: 2.2, ease: "power2.out" }
      );
    }, containerRef);
    
    return () => ctx.revert();
  }, []);

  return (
    <section 
      id="hero" 
      ref={containerRef}
      className="relative w-full h-screen min-h-[800px] flex items-center pt-20 overflow-hidden"
    >
      <Hero3D />

      <div className="container mx-auto px-6 md:px-12 z-10 grid md:grid-cols-2 gap-8 relative">
        
        {/* Left Content */}
        <div className="flex flex-col justify-center max-w-2xl pointer-events-auto">
          
          <div className="hero-fade-in inline-flex items-center space-x-2 bg-dark/50 border border-white/10 rounded-full px-4 py-1.5 w-max mb-6 backdrop-blur-md">
            <span className="w-2 h-2 rounded-full bg-cyan-glow animate-pulse"></span>
            <span className="text-sm tracking-wide text-gray-300">Noida, India</span>
          </div>

          <div ref={textRef} className="font-heading font-extrabold text-5xl md:text-7xl lg:text-8xl leading-none mb-6">
            <div className="hero-word text-white">Hi, I'm</div>
            <div className="hero-word text-gradient glow-cyan mix-blend-screen" style={{ WebkitTextFillColor: 'transparent' }}>Anmol</div>
            <div className="hero-word text-gradient glow-violet mix-blend-screen" style={{ WebkitTextFillColor: 'transparent' }}>Garg</div>
          </div>

          <div className="hero-fade-in h-[32px] mb-8 overflow-hidden">
             {/* Typewriter text container */}
             <div 
               key={currentTitleIndex}
               className="text-xl md:text-2xl text-gray-300 font-medium animate-[slideUp_0.5s_ease-out]"
             >
               {titles[currentTitleIndex]}
             </div>
          </div>

          <div className="hero-fade-in flex flex-wrap items-center gap-4 mb-10">
            <button className="px-6 py-3 bg-cyan-glow text-dark font-bold rounded hover:shadow-[0_0_20px_#00F5FF] hover:scale-105 transition-all duration-300 flex items-center space-x-2 group">
              <span>See My Work</span>
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </button>
            <button className="px-6 py-3 border border-white/20 text-white font-medium rounded hover:bg-white/5 hover:border-cyan-glow/50 transition-all duration-300">
              Let's Connect
            </button>
          </div>

          <div className="hero-fade-in flex items-center space-x-6 text-gray-400">
            <a href="https://github.com/AnmolGarg8" target="_blank" rel="noreferrer" className="hover:text-cyan-glow hover:scale-110 transition-all duration-300">
              <FaGithub size={24} />
            </a>
            <a href="https://linkedin.com/in/anmol-garg2005" target="_blank" rel="noreferrer" className="hover:text-violet-neon hover:scale-110 transition-all duration-300">
              <FaLinkedin size={24} />
            </a>
            <a href="mailto:garganmol205@gmail.com" className="hover:text-cyan-glow hover:scale-110 transition-all duration-300">
              <Mail size={24} />
            </a>
          </div>

        </div>

        {/* Right empty to let 3D sphere show perfectly via Hero3D */}
      </div>

      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex flex-col items-center animate-bounce opacity-60">
        <div className="w-[1px] h-12 bg-gradient-to-b from-cyan-glow to-transparent"></div>
        <ArrowRight size={16} className="text-cyan-glow mt-2 transform rotate-90" />
      </div>

      <style>{`
        @keyframes slideUp {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </section>
  );
};

export default Hero;
