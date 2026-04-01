import { ArrowUp } from 'lucide-react';

const Footer = () => {
    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };

    return (
        <footer className="w-full py-12 border-t border-white/5 relative z-10 bg-[#07070F]">
            <div className="container mx-auto px-6 md:px-12 flex flex-col items-center justify-center gap-6 pointer-events-auto">
                
                <button 
                    onClick={scrollToTop}
                    className="w-12 h-12 rounded-full border border-cyan-glow/30 flex items-center justify-center text-cyan-glow hover:bg-cyan-glow hover:text-[#07070F] transition-all duration-300 group glow-cyan"
                    aria-label="Back to top"
                >
                    <ArrowUp size={20} className="group-hover:-translate-y-1 transition-transform" />
                </button>

                <div className="text-xs text-white/30 font-medium tracking-[0.2em] text-center uppercase">
                    Designed & Built by <span className="text-white/70 hover:text-cyan-glow transition-colors cursor-pointer" onClick={scrollToTop}>Anmol Garg</span>
                </div>

            </div>
        </footer>
    );
};

export default Footer;
