import { useState, useRef, useEffect } from 'react';
import emailjs from '@emailjs/browser';
import { ArrowRight, Mail, Check } from 'lucide-react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import gsap from 'gsap';

const Contact = () => {
    const containerRef = useRef(null);
    const formRef = useRef(null);
    const [status, setStatus] = useState(''); // '', 'sending', 'success', 'error'

    useEffect(() => {
        const ctx = gsap.context(() => {
            gsap.from('.contact-heading', {
                scrollTrigger: {
                    trigger: containerRef.current,
                    start: "top 80%",
                },
                y: 50,
                opacity: 0,
                duration: 1,
                ease: "power3.out"
            });

            gsap.from('.contact-form', {
                scrollTrigger: {
                    trigger: containerRef.current,
                    start: "top 75%",
                },
                x: 50,
                opacity: 0,
                duration: 1,
                ease: "power3.out",
                delay: 0.2
            });

            gsap.from('.contact-info', {
                scrollTrigger: {
                    trigger: containerRef.current,
                    start: "top 75%",
                },
                x: -50,
                opacity: 0,
                duration: 1,
                ease: "power3.out",
                delay: 0.2
            });
        }, containerRef);
        return () => ctx.revert();
    }, []);

    const handleSubmit = (e) => {
        e.preventDefault();
        setStatus('sending');

        // EmailJS implementation (replace with real keys later if needed, but keeping existing setup requirement)
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
        <section id="contact" ref={containerRef} className="w-full py-24 relative overflow-hidden bg-dark">
            {/* Subtle animated background wave via CSS */}
            <div className="absolute inset-0 z-0 bg-dark-grad opacity-50"></div>

            <div className="container mx-auto px-6 md:px-12 z-10 relative">
                
                <div className="flex flex-col md:flex-row gap-16 md:gap-24">
                    
                    {/* Left Column - Heading & Info */}
                    <div className="flex-1 contact-info flex flex-col justify-center">
                        <div className="flex flex-col relative mb-8">
                            <div className="text-[6rem] md:text-[8rem] font-heading font-extrabold leading-none text-white/5 absolute -top-10 -left-6 pointer-events-none select-none">
                                04
                            </div>
                            <h2 className="contact-heading text-4xl md:text-5xl font-heading font-bold text-white relative z-10">
                                Let's Build Something
                            </h2>
                            <div className="contact-heading w-24 md:w-32 h-[2px] bg-cyan-glow mt-4 shadow-[0_0_10px_#00F5FF]"></div>
                        </div>

                        <p className="text-gray-400 text-lg md:text-xl leading-relaxed mb-12 max-w-lg font-light">
                            Whether it's a new startup idea, a complex AI implementation, or just a quick chat about tech—I'm always open to new connections and collaborations.
                        </p>

                        <div className="flex items-center gap-6">
                            <a href="mailto:garganmol205@gmail.com" className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center text-gray-400 hover:text-cyan-glow hover:border-cyan-glow hover:shadow-[0_0_15px_rgba(0,245,255,0.4)] transition-all duration-300">
                                <Mail size={20} />
                            </a>
                            <a href="https://github.com/AnmolGarg8" target="_blank" rel="noreferrer" className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center text-gray-400 hover:text-cyan-glow hover:border-cyan-glow hover:shadow-[0_0_15px_rgba(0,245,255,0.4)] transition-all duration-300">
                                <FaGithub size={20} />
                            </a>
                            <a href="https://linkedin.com/in/anmol-garg2005" target="_blank" rel="noreferrer" className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center text-gray-400 hover:text-cyan-glow hover:border-cyan-glow hover:shadow-[0_0_15px_rgba(0,245,255,0.4)] transition-all duration-300">
                                <FaLinkedin size={20} />
                            </a>
                        </div>
                    </div>

                    {/* Right Column - Form */}
                    <div className="flex-1 contact-form">
                        <form ref={formRef} onSubmit={handleSubmit} className="glass-panel p-8 md:p-12 rounded-2xl border-t border-t-cyan-glow/50 relative overflow-hidden group">
                           
                           {/* Glow effect on hover */}
                           <div className="absolute inset-0 bg-gradient-to-br from-cyan-glow/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-1000 blur-xl"></div>

                           <div className="relative z-10 flex flex-col gap-8">
                               
                               <div className="relative">
                                    <input 
                                        type="text" 
                                        id="name"
                                        name="user_name"
                                        required
                                        className="peer w-full bg-transparent border-b border-white/20 text-white placeholder-transparent py-2 focus:outline-none focus:border-cyan-glow transition-colors duration-300"
                                        placeholder="Name"
                                    />
                                    <label htmlFor="name" className="absolute left-0 top-2 text-gray-500 text-sm peer-focus:-top-4 peer-focus:text-xs peer-focus:text-cyan-glow peer-valid:-top-4 peer-valid:text-xs transition-all duration-300 cursor-text user-select-none">
                                        Name
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
                                    <label htmlFor="email" className="absolute left-0 top-2 text-gray-500 text-sm peer-focus:-top-4 peer-focus:text-xs peer-focus:text-cyan-glow peer-valid:-top-4 peer-valid:text-xs transition-all duration-300 cursor-text user-select-none">
                                        Email
                                    </label>
                               </div>

                               <div className="relative">
                                    <textarea 
                                        id="message"
                                        name="message"
                                        required
                                        rows="4"
                                        className="peer w-full bg-transparent border-b border-white/20 text-white placeholder-transparent py-2 focus:outline-none focus:border-cyan-glow transition-colors duration-300 resize-none"
                                        placeholder="Message"
                                    ></textarea>
                                    <label htmlFor="message" className="absolute left-0 top-2 text-gray-500 text-sm peer-focus:-top-4 peer-focus:text-xs peer-focus:text-cyan-glow peer-valid:-top-4 peer-valid:text-xs transition-all duration-300 cursor-text user-select-none">
                                        Message
                                    </label>
                               </div>

                               <button 
                                  type="submit" 
                                  disabled={status === 'sending'}
                                  className={`w-full py-4 text-dark font-bold flex items-center justify-center gap-2 rounded transition-all duration-300 ${
                                      status === 'success' 
                                      ? 'bg-green-500 shadow-[0_0_20px_rgba(34,197,94,0.5)]' 
                                      : 'bg-cyan-glow hover:bg-cyan-400 shadow-[0_0_15px_rgba(0,245,255,0.3)] hover:shadow-[0_0_25px_rgba(0,245,255,0.6)]'
                                  }`}
                               >
                                  {status === 'sending' ? 'Sending...' : status === 'success' ? <><Check size={20} /> Sent Successfully!</> : <>Send Message <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" /></>}
                               </button>
                               {status === 'error' && <p className="text-red-500 text-sm text-center">Failed to send message. Please try again.</p>}
                           </div>
                        </form>
                    </div>

                </div>

            </div>
        </section>
    );
};

export default Contact;
