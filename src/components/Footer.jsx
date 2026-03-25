import { motion } from 'framer-motion';
import { ArrowUp } from 'lucide-react';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-gray-900 border-t border-gray-800 text-white py-12 relative overflow-hidden">
      <div className="container mx-auto px-6 md:px-12 flex flex-col md:flex-row items-center justify-between gap-6 relative z-10">
        
        {/* Left Side: Copy */}
        <div className="flex flex-col items-center md:items-start group">
          <p className="font-body text-gray-400 text-sm font-medium">
            Designed & Built by
          </p>
          <a href="#" onClick={(e) => { e.preventDefault(); scrollToTop(); }} className="interactive text-xl font-heading font-bold bg-clip-text text-transparent bg-gradient-to-r from-electric-indigo to-soft-gold opacity-90 group-hover:opacity-100 transition-opacity">
            Anmol Garg
          </a>
        </div>

        {/* Right Side: Back to Top */}
        <motion.button 
          onClick={scrollToTop}
          className="interactive group relative w-12 h-12 flex items-center justify-center rounded-full bg-white/5 border border-white/10 hover:border-soft-gold hover:bg-soft-gold/20 transition-colors"
          whileHover={{ y: -5 }}
          whileTap={{ scale: 0.95 }}
        >
          <ArrowUp size={20} className="text-gray-400 group-hover:text-soft-gold group-hover:animate-bounce" />
          
          {/* Subtle glow ring on hover */}
          <div className="absolute inset-0 rounded-full box-shadow-[0_0_15px_rgba(244,185,66,0)] group-hover:shadow-[0_0_20px_rgba(244,185,66,0.3)] transition-shadow"></div>
        </motion.button>
        
      </div>
      
      {/* Background Decor */}
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-electric-indigo/10 via-transparent to-transparent opacity-50 block"></div>
    </footer>
  );
};

export default Footer;
