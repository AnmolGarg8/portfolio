import { useEffect, useState } from 'react';
import gsap from 'gsap';

const Navbar = () => {
  const [hasScrolled, setHasScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setHasScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollTo = (id) => {
    const element = document.getElementById(id);
    if (element) {
      window.scrollTo({
        top: element.offsetTop - 80,
        behavior: 'smooth'
      });
    }
  };

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-[60] flex items-center justify-between px-6 md:px-12 py-4 transition-all duration-300 ${
        hasScrolled ? 'bg-dark/80 backdrop-blur-md border-b border-white/5 py-3' : 'bg-transparent'
      }`}
    >
      <div className="flex items-center space-x-2 group cursor-pointer" onClick={() => window.scrollTo({top: 0, behavior: 'smooth'})}>
        <div className="text-2xl font-heading font-extrabold flex">
          <span className="text-cyan-glow group-hover:glow-cyan transition-all duration-300">A</span>
          <span className="text-white">G</span>
        </div>
        <div className="w-1 h-5 transform-origin-bottom flex flex-col justify-end space-y-[2px]">
          <div className="w-1 h-1 bg-violet-neon rounded-full group-hover:h-3 transition-all duration-300"></div>
          <div className="w-1 h-1 bg-cyan-glow rounded-full group-hover:h-1 transition-all duration-300"></div>
        </div>
      </div>

      <nav className="hidden md:flex items-center space-x-8 text-sm font-medium">
        {['About', 'Experience', 'Projects', 'Contact'].map((item) => (
          <button 
            key={item}
            onClick={() => scrollTo(item.toLowerCase())}
            className="text-gray-400 hover:text-white relative group overflow-hidden"
          >
            {item}
            <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-cyan-glow transition-all duration-300 ease-out group-hover:w-full"></span>
          </button>
        ))}
      </nav>

      <button 
        onClick={() => scrollTo('contact')}
        className="px-5 py-2 rounded border border-cyan-glow/50 text-cyan-glow text-sm font-medium hover:bg-cyan-glow hover:text-dark transition-all duration-300 shadow-[0_0_10px_rgba(0,245,255,0)] hover:shadow-[0_0_15px_rgba(0,245,255,0.4)]"
      >
        Say Hello
      </button>
    </header>
  );
};

export default Navbar;
