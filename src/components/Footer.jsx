import { motion } from 'framer-motion';
import { Github, Linkedin, Mail } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-[#050510] py-16 text-center relative overflow-hidden">
      {/* Divider */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[80%] h-[1px] bg-gradient-to-r from-transparent via-[var(--accent-primary)] to-transparent opacity-30" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-[1px] bg-[var(--accent-primary)] shadow-[0_0_15px_var(--accent-primary)]" />

      <div className="section-container">
        <h4 className="text-2xl font-black title-gradient mb-4">Anmol Garg</h4>
        <p className="text-sm font-bold tracking-[0.3em] text-[#6b6090] uppercase mb-10">
          Designed & Developed by Anmol Garg
        </p>

        <div className="flex justify-center gap-8 mb-12">
          <a href="#" className="p-4 rounded-full glass-panel text-[var(--text-secondary)] hover:text-white hover:shadow-[0_0_20px_rgba(124,58,237,0.3)] transition-all transform hover:-translate-y-2">
            <Github size={24} />
          </a>
          <a href="#" className="p-4 rounded-full glass-panel text-[var(--text-secondary)] hover:text-white hover:shadow-[0_0_20px_rgba(124,58,237,0.3)] transition-all transform hover:-translate-y-2">
            <Linkedin size={24} />
          </a>
          <a href="mailto:anmolgarg1605@gmail.com" className="p-4 rounded-full glass-panel text-[var(--text-secondary)] hover:text-white hover:shadow-[0_0_20px_rgba(124,58,237,0.3)] transition-all transform hover:-translate-y-2">
            <Mail size={24} />
          </a>
        </div>

        <p className="text-[#3d3660] text-xs uppercase tracking-[0.4em] font-black">
          © {new Date().getFullYear()} Anmol Garg. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
