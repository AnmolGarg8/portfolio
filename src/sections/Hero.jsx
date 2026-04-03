import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Linkedin, Github, Mail, ArrowDown, Medal, Rocket } from 'lucide-react';

const Hero = () => {
  const [text, setText] = useState('');
  const roles = ["Software Engineer", "AI Developer", "IoT Builder", "ML Enthusiast", "Cybersecurity Learner"];
  const [roleIndex, setRoleIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const handleType = () => {
      const currentRole = roles[roleIndex];
      const speed = isDeleting ? 50 : 100;

      if (!isDeleting && charIndex < currentRole.length) {
        setText(currentRole.substring(0, charIndex + 1));
        setCharIndex(prev => prev + 1);
      } else if (isDeleting && charIndex > 0) {
        setText(currentRole.substring(0, charIndex - 1));
        setCharIndex(prev => prev - 1);
      } else if (!isDeleting && charIndex === currentRole.length) {
        setTimeout(() => setIsDeleting(true), 1500);
      } else {
        setIsDeleting(false);
        setRoleIndex(idx => (idx + 1) % roles.length);
        setCharIndex(0);
      }
    };

    const timer = setTimeout(handleType, isDeleting ? 50 : 100);
    return () => clearTimeout(timer);
  }, [charIndex, isDeleting, roleIndex]);

  return (
    <section id="home" className="hero-section">
      {/* Absolute Background Elements */}
      <div className="absolute inset-0 -z-10 bg-[#0a0a12]">
        <div className="absolute top-[20%] left-[10%] w-[400px] h-[400px] bg-[#7c3aed]/10 rounded-full blur-[100px]" />
        <div className="bg-grid-faint opacity-20 inset-0 absolute" />
      </div>

      <div className="hero-grid-wrapper">
        {/* LEFT COLUMN: Text Content */}
        <div className="hero-left">
          
          {/* Available Pill Badge */}
          <div className="available-pill">
            <div className="pill-dot" />
            <span className="text-[11px] font-bold text-[#86efac] uppercase tracking-[0.07em]">
              Available for Opportunities
            </span>
          </div>

          <div className="space-y-0">
            <p className="hero-hi">Hi, I'm</p>
            <h1 className="hero-name">Anmol Garg</h1>
          </div>

          {/* Typewriter Row */}
          <div style={{ height: '40px', display: 'flex', alignItems: 'center' }}>
            <span className="text-[22px] font-medium text-[#e2dffa] whitespace-nowrap min-w-[280px] inline-block">
              {text}
              <span className="animate-blink" style={{ marginLeft: '4px', width: '2px', height: '24px', backgroundColor: '#7c3aed', display: 'inline-block' }}>|</span>
            </span>
          </div>

          <p className="text-xl text-[var(--text-secondary)] font-medium max-w-[500px] m-0">
            Engineering Intelligence. Building the Future.
          </p>

          <p className="text-base text-[rgba(255,255,255,0.6)] max-w-[550px] leading-relaxed m-0">
            I build intelligent systems that sit at the intersection of hardware and software. 
            From ESP32-based IoT platforms to NLP-driven AI tools — I engineer real solutions to real problems.
          </p>

          {/* CTA Buttons */}
          <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', gap: '16px', marginTop: '8px' }}>
            <a href="#projects" className="btn-primary-hero no-underline text-white">
              Explore My Work →
            </a>
            <a href="/resume.pdf" target="_blank" className="btn-secondary-hero no-underline text-[#a78bfa]">
              Download Resume ↓
            </a>
          </div>

          {/* Social Icons */}
          <div style={{ display: 'flex', gap: '12px', marginTop: '4px' }}>
            <a href="https://linkedin.com/in/anmol-garg2005" target="_blank" className="social-icon-hero no-underline"><Linkedin size={20} /></a>
            <a href="https://github.com/AnmolGarg8" target="_blank" className="social-icon-hero no-underline"><Github size={20} /></a>
            <a href="mailto:anmolgarg1605@gmail.com" className="social-icon-hero no-underline"><Mail size={20} /></a>
          </div>
        </div>

        {/* RIGHT COLUMN: Avatar & Floating Cards */}
        <div className="hero-right">
          <div className="avatar-wrapper">
            {/* Radial Glow behind */}
            <div className="avatar-glow" />
            
            {/* Main Image with mask */}
            <img 
              src="/avatar.jpeg" 
              alt="Anmol Garg"
              className="avatar-image"
            />

            {/* Achievement Cards (Forced visibility for verification) */}
            <div className="absolute" style={{ top: '15%', left: '-80px', zIndex: 10 }}>
              <div className="glass-panel p-4 flex items-center gap-3 border border-[rgba(124,58,237,0.4)] bg-[#0a0823]/88 backdrop-blur-xl rounded-[14px] shadow-2xl animate-float-card-1">
                <div style={{ width: '40px', height: '40px', borderRadius: '8px', backgroundColor: 'rgba(124,58,237,0.2)', color: '#7c3aed', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <Medal size={20} />
                </div>
                <div style={{ paddingRight: '12px' }}>
                  <p className="text-[10px] font-bold uppercase tracking-tight text-[var(--accent-secondary)] m-0">Samsung Solve 2025</p>
                  <p className="text-[13px] font-bold text-[#e2dffa] whitespace-nowrap m-0">🏆 Top 10 National</p>
                </div>
              </div>
            </div>

            <div className="absolute" style={{ bottom: '22%', right: '-70px', zIndex: 10 }}>
              <div className="glass-panel p-4 flex items-center gap-3 border border-[rgba(124,58,237,0.4)] bg-[#0a0823]/88 backdrop-blur-xl rounded-[14px] shadow-2xl animate-float-card-2">
                <div style={{ width: '40px', height: '40px', borderRadius: '8px', backgroundColor: 'rgba(6,182,212,0.2)', color: '#06b6d4', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <Rocket size={20} />
                </div>
                <div style={{ paddingRight: '12px' }}>
                  <p className="text-[10px] font-bold uppercase tracking-tight text-[var(--accent-highlight)] m-0">Impact Level</p>
                  <p className="text-[13px] font-bold text-[#e2dffa] whitespace-nowrap m-0">⚡ 3+ Projects Shipped</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

    </section>
  );
};

export default Hero;
