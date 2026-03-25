import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MapPin, Mail, ArrowRight } from 'lucide-react';
import { FaGithub as Github, FaLinkedin as Linkedin } from 'react-icons/fa';
import Hero3D from './Hero3D';

const ROLES = [
  "Full Stack Developer",
  "AI & IoT Innovator",
  "Co-Founder @ Kenet Technologies",
  "Samsung Solve for Tomorrow — Top 10 Nationally"
];

const Hero = () => {
  const [roleIndex, setRoleIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setRoleIndex((current) => (current + 1) % ROLES.length);
    }, 4000); // 4 seconds per role
    return () => clearInterval(intervalId);
  }, []);

  const headingWords = "Hi, I'm Anmol Garg".split(" ");

  return (
    <section className="min-h-screen relative flex items-center pt-24 pb-12 overflow-hidden" id="home">
      <div className="container mx-auto px-6 md:px-12 grid lg:grid-cols-2 gap-12 items-center relative z-10">
        
        {/* Left Side: Content */}
        <div className="flex flex-col items-start justify-center h-full pt-10 lg:pt-0">
          
          {/* Location Badge */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.6, duration: 0.6 }}
            className="flex items-center gap-2 px-4 py-2 rounded-full bg-off-white border border-gray-100 mb-6 shadow-sm"
          >
            <MapPin size={16} className="text-electric-indigo" />
            <span className="text-sm font-medium text-gray-600">Noida, India</span>
          </motion.div>

          {/* Big Heading */}
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-heading font-extrabold tracking-tight mb-4 flex flex-wrap gap-[0.3em]">
            {headingWords.map((word, i) => (
              <motion.span
                key={i}
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.8,
                  ease: [0.33, 1, 0.68, 1],
                  delay: 2 + i * 0.1, // starts after preloader
                }}
                className={word === "Anmol" || word === "Garg" ? "text-gradient" : "text-gray-900"}
              >
                {word}
              </motion.span>
            ))}
          </h1>

          {/* Animated Role Typewriter */}
          <div className="h-10 md:h-12 flex items-center mb-8 relative w-full overflow-hidden">
            <AnimatePresence mode="wait">
              <motion.div
                key={roleIndex}
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: -20, opacity: 0 }}
                transition={{ duration: 0.5, ease: "easeInOut" }}
                className="absolute inset-0 flex items-center"
              >
                <p className="text-xl md:text-2xl lg:text-3xl font-body font-medium text-gray-700">
                  {ROLES[roleIndex]}
                </p>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* CTA Buttons */}
          <motion.div 
            className="flex flex-wrap gap-4 mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 2.5, duration: 0.6 }}
          >
            <a 
              href="#projects" 
              className="group interactive relative px-8 py-3 rounded-full bg-electric-indigo text-white font-medium overflow-hidden shadow-lg shadow-electric-indigo/20 flex items-center gap-2"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-electric-indigo to-soft-gold opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <span className="relative z-10">See My Work</span>
              <ArrowRight size={18} className="relative z-10 group-hover:translate-x-1 transition-transform" />
            </a>
            
            <a 
              href="#contact" 
              className="interactive px-8 py-3 rounded-full border-2 border-gray-200 text-gray-800 font-medium hover:border-electric-indigo hover:text-electric-indigo transition-colors duration-300"
            >
              Let's Connect
            </a>
          </motion.div>

          {/* Social Row */}
          <motion.div 
            className="flex items-center gap-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 2.8, duration: 0.8 }}
          >
            <a href="https://github.com/AnmolGarg8" target="_blank" rel="noreferrer" className="interactive group flex items-center gap-2 text-gray-500 hover:text-electric-indigo transition-colors">
              <span className="p-2 rounded-full bg-gray-50 group-hover:bg-electric-indigo/10 transition-colors">
                <Github size={20} />
              </span>
              <span className="text-sm font-medium">AnmolGarg8</span>
            </a>
            <a href="https://linkedin.com/in/anmol-garg2005" target="_blank" rel="noreferrer" className="interactive group flex items-center gap-2 text-gray-500 hover:text-electric-indigo transition-colors">
              <span className="p-2 rounded-full bg-gray-50 group-hover:bg-electric-indigo/10 transition-colors">
                <Linkedin size={20} />
              </span>
              <span className="text-sm font-medium border-b border-transparent group-hover:border-electric-indigo">anmol-garg2005</span>
            </a>
            <a href="mailto:anmolgarg1605@gmail.com" className="interactive group flex items-center gap-2 text-gray-500 hover:text-electric-indigo transition-colors">
              <span className="p-2 rounded-full bg-gray-50 group-hover:bg-electric-indigo/10 transition-colors">
                <Mail size={20} />
              </span>
            </a>
          </motion.div>

        </div>

        {/* Right Side: 3D Object */}
        <motion.div 
          className="relative lg:block"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 2, duration: 1, ease: "easeOut" }}
        >
          <div className="absolute inset-0 bg-gradient-to-tr from-electric-indigo/10 to-soft-gold/10 rounded-full blur-[100px] -z-10 animate-pulse"></div>
          <Hero3D />
        </motion.div>
      </div>

    </section>
  );
};

export default Hero;
