import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Linkedin, Github, Mail, ArrowDown } from 'lucide-react';

const Hero = () => {
  const [text, setText] = useState('');
  const roles = ["Software Engineer", "AI Developer", "IoT Systems Builder", "ML Enthusiast", "Cybersecurity Learner"];
  const [roleIndex, setRoleIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const handleType = () => {
      const currentRole = roles[roleIndex];
      const speed = isDeleting ? 40 : 80;

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
    <section id="home" className="min-h-screen pt-24 items-center relative overflow-hidden flex">
      {/* Background Decor */}
      <div className="gradient-mesh">
        <div className="mesh-orb orb-1" />
        <div className="mesh-orb orb-2" />
      </div>
      <div className="bg-grid-faint" />
      <div className="bg-noise" />

      <div className="section-container lg:grid items-center gap-12">
        {/* Left Column */}
        <div className="z-10">
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="flex items-center gap-3 px-4 py-1_5 rounded-full border border-green-500/30 bg-green-500/5 w-fit mb-8"
          >
            <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
            <span className="text-[12px] font-bold text-green-500 uppercase tracking-widest">
              Available for Opportunities
            </span>
          </motion.div>

          <motion.h1 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
            className="text-[72px] font-bold leading-none mb-2" 
            style={{ fontFamily: 'Space Grotesk' }}
          >
            Hi, I'm
          </motion.h1>

          <motion.h1 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.5 }}
            className="text-[96px] font-black leading-none mb-6 title-gradient"
            style={{ fontFamily: 'Space Grotesk' }}
          >
            Anmol Garg
          </motion.h1>

          <div className="min-h-[40px] text-2xl md:text-3xl font-light text-[var(--accent-secondary)] mb-4 flex items-center">
            <span>{text}</span>
            <span className="w-[3px] h-[30px] bg-[var(--accent-primary)] ml-2 animate-pulse" />
          </div>

          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.5 }}
            className="text-xl text-[var(--text-secondary)] mb-10 font-[Inter]"
          >
            I build things that think.
          </motion.p>

          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1 }}
            className="flex flex-wrap gap-6 items-center"
          >
            <button className="btn-neon">Explore My Work →</button>
            <button className="btn-ghost">Download Resume ↓</button>
            
            <div className="flex gap-4 ml-2">
              <a href="#" className="p-3 glass-panel rounded-full hover:rotate-12 hover:scale-110 transition-all text-[var(--text-secondary)] hover:text-white">
                <Linkedin size={20} />
              </a>
              <a href="#" className="p-3 glass-panel rounded-full hover:rotate-12 hover:scale-110 transition-all text-[var(--text-secondary)] hover:text-white">
                <Github size={20} />
              </a>
              <a href="#" className="p-3 glass-panel rounded-full hover:rotate-12 hover:scale-110 transition-all text-[var(--text-secondary)] hover:text-white">
                <Mail size={20} />
              </a>
            </div>
          </motion.div>
        </div>

        {/* Right Column - Avatar */}
        <motion.div 
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.6, duration: 1 }}
          className="relative flex justify-center items-center"
        >
          <div className="relative group">
            {/* Halo Gradient */}
            <div className="absolute inset-0 bg-[#7c3aed]/20 blur-[100px] rounded-full" />
            
            <motion.div 
              animate={{ translateY: [-12, 12, -12] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="relative z-10"
            >
              <img 
                src="/avatar.jpeg" 
                alt="3D Avatar" 
                className="max-h-80vh w-auto object-contain drop-shadow-[0_0_30px_rgba(124,58,237,0.4)]"
              />
            </motion.div>

            {/* Floating Cards */}
            <motion.div 
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 1.2, duration: 0.5 }}
              className="absolute -top-10 -right-10 glass-panel p-4 px-6 scale-90 md:scale-100"
            >
              <p className="font-bold text-sm">🏆 Top 10 National</p>
              <p className="text-xs opacity-60">Samsung 2025</p>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 1.4, duration: 0.5 }}
              className="absolute bottom-10 -left-16 glass-panel p-4 px-6 scale-90 md:scale-100"
            >
              <p className="font-bold text-sm">⚡ 3+ Projects Shipped</p>
              <p className="text-xs opacity-60">Production Level</p>
            </motion.div>
          </div>
        </motion.div>
      </div>

      <motion.div 
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-40 hover:opacity-100 transition-opacity"
      >
        <span className="text-[10px] uppercase tracking-[0.3em] font-bold">Scroll to Explore</span>
        <ArrowDown size={16} className="text-[var(--accent-primary)]" />
      </motion.div>
    </section>
  );
};

export default Hero;
