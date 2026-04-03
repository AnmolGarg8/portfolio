import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import { ArrowDown } from 'lucide-react';

const Hero = () => {
  const [text, setText] = useState('');
  const roles = ["Software Engineer", "AI Developer", "IoT Builder", "ML Enthusiast", "Cybersecurity Expert"];
  const [roleIndex, setRoleIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const type = () => {
      const currentRole = roles[roleIndex];
      const speed = isDeleting ? 70 : 150;

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
        setRoleIndex(next => (next + 1) % roles.length);
        setCharIndex(0);
      }
    };

    const timer = setTimeout(type, isDeleting ? 50 : 100);
    return () => clearTimeout(timer);
  }, [charIndex, isDeleting, roleIndex]);

  return (
    <section id="home" className="min-h-screen pt-24 flex items-center relative overflow-hidden">
      {/* Background Decor */}
      <div className="absolute inset-0 pointer-events-none opacity-20">
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute font-mono text-xs text-[var(--accent-secondary)]"
            initial={{ 
              x: Math.random() * 100 + '%', 
              y: Math.random() * 100 + '%',
              opacity: 0 
            }}
            animate={{
              y: ['-10%', '110%'],
              opacity: [0, 1, 0]
            }}
            transition={{
              duration: 10 + Math.random() * 20,
              repeat: Infinity,
              ease: "linear"
            }}
          >
            {`{ status: "coding", activity: "building_the_future" }`}
          </motion.div>
        ))}
      </div>

      <div className="section-container grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Left Content */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="z-10"
        >
          <motion.p 
            className="text-[var(--accent-secondary)] font-medium mb-4 tracking-widest uppercase text-sm"
          >
            Welcome to my personal portfolio
          </motion.p>
          <h1 className="text-5xl md:text-7xl mb-6 leading-tight">
            Hi, I'm <br />
            <span className="title-gradient">Anmol Garg</span>
          </h1>
          
          <div className="min-w-[320px] h-12 text-2xl md:text-3xl font-light text-[var(--accent-secondary)] mb-10 flex items-center whitespace-nowrap overflow-visible">
            <span>{text}</span>
            <span className="inline-block w-1 h-8 bg-[var(--accent-primary)] ml-2 animate-pulse" />
          </div>
          
          <div className="flex flex-wrap gap-4">
            <a href="#projects" className="btn-primary">
              View Projects →
            </a>
            <a 
              href="#" 
              className="px-8 py-3.5 border border-[var(--glass-border)] hover:bg-white/5 transition-all rounded-[10px] font-bold text-lg backdrop-blur-sm"
            >
              Download Resume
            </a>
          </div>
        </motion.div>

        {/* Right Content - 3D character */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="relative flex justify-center items-center"
        >
          {/* Avatar Container with Halo */}
          <div className="relative max-h-[85vh] max-w-full lg:max-w-[50%] flex justify-center items-center">
            <div className="avatar-halo" />
            <motion.div 
              className="relative z-10 animate-float"
            >
              <img 
                src="/avatar.jpeg" 
                alt="3D Avatar" 
                className="w-full max-h-[75vh] object-contain drop-shadow-[0_0_30px_rgba(124,58,237,0.3)]"
                style={{ maskImage: 'linear-gradient(to bottom, black 85%, transparent 100%)' }}
              />
            </motion.div>
          </div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div 
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <span className="text-xs uppercase tracking-widest text-[var(--accent-secondary)]">Explore</span>
        <ArrowDown className="w-5 h-5 text-[var(--accent-primary)]" />
      </motion.div>
    </section>
  );
};

export default Hero;
