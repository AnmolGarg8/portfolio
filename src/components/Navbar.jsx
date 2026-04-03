import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);

      const sections = ['home', 'about', 'skills', 'projects', 'achievements', 'education', 'contact'];
      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top >= -200 && rect.top <= 400) {
            setActiveSection(section);
            break;
          }
        }
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home', id: 'home' },
    { name: 'About', href: '#about', id: 'about' },
    { name: 'Skills', href: '#skills', id: 'skills' },
    { name: 'Projects', href: '#projects', id: 'projects' },
    { name: 'Achievements', href: '#achievements', id: 'achievements' },
    { name: 'Education', href: '#education', id: 'education' },
    { name: 'Contact', href: '#contact', id: 'contact' },
  ];

  return (
    <>
      <nav className="nav-fixed" style={{ padding: isScrolled ? '12px 0' : '20px 0' }}>
        <div className="nav-container">
          {/* Glass Background - First child for DOM order layering */}
          <div style={{ position: 'absolute', inset: '0 24px', backgroundColor: 'rgba(255,255,255,0.04)', backdropFilter: 'blur(20px)', borderRadius: '16px', border: '1px solid rgba(255,255,255,0.1)' }} />

          {/* Logo */}
          <a href="#home" className="no-underline" style={{ display: 'flex', alignItems: 'center', gap: '8px', zIndex: 10, position: 'relative' }}>
            <div style={{ width: '40px', height: '40px', borderRadius: '12px', background: 'linear-gradient(135deg, #7c3aed, #06b6d4)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white', fontWeight: '900', fontSize: '20px', boxShadow: '0 0 20px rgba(124,58,237,0.3)' }}>
              AG
            </div>
            <span style={{ color: 'white', fontWeight: '700', letterSpacing: '-0.05em', fontSize: '18px' }} className="hidden sm:block">ANMOL.</span>
          </a>

          {/* Nav Links */}
          <div className="nav-links-desktop" style={{ position: 'relative', zIndex: 10 }}>
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className={`nav-link-underline no-underline ${activeSection === link.id ? 'nav-link-active' : ''}`}
                style={{ fontSize: '14px', fontWeight: '500', color: activeSection === link.id ? '#ffffff' : 'rgba(200,196,248,0.75)', padding: '6px 2px', transition: 'all 0.3s' }}
              >
                {link.name}
              </a>
            ))}
          </div>

          {/* Mobile Toggle Button */}
          <button 
            style={{ border: 'none', background: 'transparent', cursor: 'pointer', zIndex: 10, position: 'relative', flexDirection: 'column', gap: '6px' }}
            className="md-hide"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            <div style={{ width: '24px', height: '2px', backgroundColor: 'white', transition: 'all 0.3s', transform: isMobileMenuOpen ? 'rotate(45deg) translateY(11px)' : '' }} />
            <div style={{ width: '24px', height: '2px', backgroundColor: 'white', transition: 'all 0.3s', opacity: isMobileMenuOpen ? 0 : 1 }} />
            <div style={{ width: '24px', height: '2px', backgroundColor: 'white', transition: 'all 0.3s', transform: isMobileMenuOpen ? 'rotate(-45deg) translateY(-11px)' : '' }} />
          </button>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            className="md:hidden fixed inset-0 z-40 bg-[#0a0a14]/95 backdrop-blur-2xl flex flex-col items-center justify-center gap-10"
          >
            {navLinks.map((link, i) => (
              <motion.a
                key={link.name}
                href={link.href}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                onClick={() => setIsMobileMenuOpen(false)}
                className={`text-3xl font-bold transition-all no-underline ${
                  activeSection === link.id ? 'text-[var(--accent-primary)]' : 'text-white/60'
                }`}
              >
                {link.name}
              </motion.a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
