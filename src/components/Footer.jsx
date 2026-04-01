import { useEffect } from 'react';
import { ArrowUp } from 'lucide-react';
import gsap from 'gsap';

const Footer = () => {

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };

    return (
        <footer className="w-full py-8 border-t border-white/5 relative z-10 bg-[#050508]">
            <div className="container mx-auto px-6 md:px-12 flex flex-col md:flex-row items-center justify-between gap-4">
                
                <div className="flex items-center space-x-2 opacity-50">
                    <span className="text-cyan-glow font-heading font-extrabold text-xl">A</span>
                    <span className="text-white font-heading font-extrabold text-xl">G</span>
                </div>

                <div className="text-sm text-gray-500 font-light tracking-wide text-center">
                    Designed & Built by <span className="text-gray-300 font-medium hover:text-cyan-glow transition-colors cursor-pointer" onClick={scrollToTop}>Anmol Garg</span>
                </div>

                <button 
                    onClick={scrollToTop}
                    className="w-10 h-10 rounded-full border border-cyan-glow/30 flex items-center justify-center text-cyan-glow hover:bg-cyan-glow hover:text-dark hover:shadow-[0_0_15px_rgba(0,245,255,0.5)] transition-all duration-300 group"
                    aria-label="Back to top"
                >
                    <ArrowUp size={18} className="group-hover:-translate-y-1 transition-transform" />
                </button>

            </div>
        </footer>
    );
};

export default Footer;
