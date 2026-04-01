import { useState, useRef, useEffect } from 'react';
import emailjs from '@emailjs/browser';
import gsap from 'gsap';
import { ArrowRight, Mail, Check } from 'lucide-react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

const Contact = () => {
    const containerRef = useRef(null);
    const formRef = useRef(null);
    const [status, setStatus] = useState('');

    useEffect(() => {
        let ctx = gsap.context(() => {
            gsap.from('.contact-fade', {
                scrollTrigger: {
                    trigger: containerRef.current,
                    start: "top 80%",
                },
                y: 50,
                opacity: 0,
                duration: 1,
                stagger: 0.2,
                ease: "power3.out"
            });
        }, containerRef);
        return () => ctx.revert();
    }, []);

    const handleSubmit = (e) => {
        e.preventDefault();
        setStatus('sending');

        emailjs.sendForm('service_placeholder', 'template_placeholder', formRef.current, 'public_key_placeholder')
            .then((result) => {
                setStatus('success');
                formRef.current.reset();
                setTimeout(() => setStatus(''), 5000);
            }, (error) => {
                setStatus('error');
                setTimeout(() => setStatus(''), 5000);
            });
    };

    return (
        <section id="contact" ref={containerRef} className="w-full py-32 relative overflow-hidden bg-[#07070F]">
            {/* Animated Gradient Wave Bottom */}
            <div className="absolute bottom-0 left-0 w-full h-[50vh] bg-gradient-to-t from-cyan-glow/5 to-transparent z-0 pointer-events-none mix-blend-screen opacity-30"></div>

            <div className="container mx-auto px-6 md:px-12 z-10 relative pointer-events-auto">
                
                <div className="flex flex-col md:flex-row gap-16 md:gap-24">
                    
                    <div className="flex-1 flex flex-col justify-center">
                        <div className="contact-fade inline-block px-3 py-1 border border-cyan-glow/50 text-cyan-glow text-xs font-bold tracking-[0.25em] mb-8 w-max glow-cyan">
                            LET'S BUILD SOMETHING
                        </div>
                        
                        <p className="contact-fade text-white/50 text-lg md:text-xl font-light leading-relaxed mb-12 max-w-lg">
                            Whether it's a new startup idea, a complex AI implementation, or just a quick chat about tech—I'm always open to new connections and collaborations.
                        </p>

                        <div className="contact-fade flex items-center gap-6">
                            <a href="mailto:garganmol205@gmail.com" className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center text-white/50 hover:text-cyan-glow hover:border-cyan-glow hover:bg-cyan-glow/5 transition-all duration-300">
                                <Mail size={20} />
                            </a>
                            <a href="https://github.com/AnmolGarg8" target="_blank" rel="noreferrer" className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center text-white/50 hover:text-cyan-glow hover:border-cyan-glow hover:bg-cyan-glow/5 transition-all duration-300">
                                <FaGithub size={20} />
                            </a>
                            <a href="https://linkedin.com/in/anmol-garg2005" target="_blank" rel="noreferrer" className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center text-white/50 hover:text-cyan-glow hover:border-cyan-glow hover:bg-cyan-glow/5 transition-all duration-300">
                                <FaLinkedin size={20} />
                            </a>
                        </div>
                    </div>

                    <div className="flex-1 contact-fade">
                        <form ref={formRef} onSubmit={handleSubmit} className="bg-[#0a0a14] p-10 md:p-12 border border-white/5 relative overflow-hidden group">
                           
                           <div className="absolute inset-0 bg-gradient-to-br from-cyan-glow/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-1000 blur-xl pointer-events-none"></div>

                           <div className="relative z-10 flex flex-col gap-10">
                               
                               <div className="relative">
                                    <input 
                                        type="text" 
                                        id="name"
                                        name="user_name"
                                        required
                                        className="peer w-full bg-transparent border-b border-white/20 text-white placeholder-transparent py-2 focus:outline-none focus:border-cyan-glow transition-colors duration-300"
                                        placeholder="Name"
                                    />
                                    <label htmlFor="name" className="absolute left-0 top-2 text-white/30 text-xs font-medium tracking-[0.1em] peer-focus:-top-4 peer-focus:text-[10px] peer-focus:text-cyan-glow peer-valid:-top-4 peer-valid:text-[10px] transition-all duration-300 pointer-events-none">
                                        NAME
                                    </label>
                               </div>

                               <div className="relative">
                                    <input 
                                        type="email" 
                                        id="email"
                                        name="user_email"
                                        required
                                        className="peer w-full bg-transparent border-b border-white/20 text-white placeholder-transparent py-2 focus:outline-none focus:border-cyan-glow transition-colors duration-300"
                                        placeholder="Email"
                                    />
                                    <label htmlFor="email" className="absolute left-0 top-2 text-white/30 text-xs font-medium tracking-[0.1em] peer-focus:-top-4 peer-focus:text-[10px] peer-focus:text-cyan-glow peer-valid:-top-4 peer-valid:text-[10px] transition-all duration-300 pointer-events-none">
                                        EMAIL
                                    </label>
                               </div>

                               <div className="relative">
                                    <textarea 
                                        id="message"
                                        name="message"
                                        required
                                        rows="3"
                                        className="peer w-full bg-transparent border-b border-white/20 text-white placeholder-transparent py-2 focus:outline-none focus:border-cyan-glow transition-colors duration-300 resize-none"
                                        placeholder="Message"
                                    ></textarea>
                                    <label htmlFor="message" className="absolute left-0 top-2 text-white/30 text-xs font-medium tracking-[0.1em] peer-focus:-top-4 peer-focus:text-[10px] peer-focus:text-cyan-glow peer-valid:-top-4 peer-valid:text-[10px] transition-all duration-300 pointer-events-none">
                                        MESSAGE
                                    </label>
                               </div>

                               <button 
                                  type="submit" 
                                  disabled={status === 'sending'}
                                  className={`w-full py-4 text-[#07070F] text-xs font-extrabold tracking-[0.2em] flex items-center justify-center gap-3 rounded-none transition-all duration-300 ${
                                      status === 'success' 
                                      ? 'bg-green-500 shadow-[0_0_20px_rgba(34,197,94,0.5)]' 
                                      : 'bg-cyan-glow hover:bg-white hover:text-[#07070F] shadow-[0_0_15px_rgba(0,245,255,0.3)] hover:shadow-[0_0_25px_rgba(255,255,255,0.4)]'
                                  }`}
                               >
                                  {status === 'sending' ? 'SENDING...' : status === 'success' ? <><Check size={18} /> MESSAGE SENT</> : <>SEND TRANSMISSION <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" /></>}
                               </button>
                               {status === 'error' && <p className="text-red-500 text-xs text-center tracking-[0.1em]">FAILED TO SEND. PLEASE TRY AGAIN.</p>}
                           </div>
                        </form>
                    </div>

                </div>

            </div>
        </section>
    );
};

export default Contact;
