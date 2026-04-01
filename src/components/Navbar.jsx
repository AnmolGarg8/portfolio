import { useEffect, useState } from 'react';

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
      className={`fixed top-0 left-0 right-0 z-[100] flex items-center justify-between px-6 md:px-12 py-6 transition-all duration-300 ${
        hasScrolled ? 'bg-[#07070F]/80 backdrop-blur-md border-b border-white/5 py-4' : 'bg-transparent'
      }`}
    >
      <div className="flex-1 text-2xl font-heading font-extrabold flex group cursor-pointer" onClick={() => window.scrollTo({top: 0, behavior: 'smooth'})}>
        <span className="text-cyan-glow tracking-[0.25em] glow-cyan">AG</span>
      </div>

      <div className="hidden lg:flex flex-1 justify-center text-sm font-medium text-white/50 tracking-wider">
        anmolgarg1605@gmail.com
      </div>

      <div className="flex-1 flex justify-end items-center space-x-8 text-sm font-medium tracking-[0.25em]">
        <nav className="hidden md:flex items-center space-x-6">
          {['ABOUT', 'WORK', 'CONTACT'].map((item) => (
            <button 
              key={item}
              onClick={() => scrollTo(item === 'WORK' ? 'projects' : item.toLowerCase())}
              className="text-gray-400 hover:text-white relative group overflow-hidden tracking-[0.25em] text-xs"
            >
              {item}
              <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-cyan-glow transition-all duration-300 ease-out group-hover:w-full"></span>
            </button>
          ))}
        </nav>

        <button 
          onClick={() => scrollTo('contact')}
          className="px-5 py-2 rounded-none border border-cyan-glow/50 text-white text-xs tracking-[0.25em] font-medium hover:bg-cyan-glow hover:text-dark transition-all duration-300 glow-cyan backdrop-blur-sm"
        >
          SAY HELLO
        </button>
      </div>
    </header>
  );
};

export default Navbar;
