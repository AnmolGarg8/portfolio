import { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';

const Services = () => {
    const containerRef = useRef(null);
    const [activeIndex, setActiveIndex] = useState(0);

    const services = [
        {
            id: '01',
            title: 'FULL STACK DEVELOPMENT',
            tech: 'React · Node.js · Express · DBs',
            details: 'Building robust, scalable architectures with modern web technologies. Focus on clean code, microservices, and high-performance server logic.'
        },
        {
            id: '02',
            title: 'AI & MACHINE LEARNING',
            tech: 'Intelligent systems · Data analysis',
            details: 'Integrating Large Language Models and custom neural networks into production environments. Creating predictive pipelines and intelligent agent mappings.'
        },
        {
            id: '03',
            title: 'IOT & EMBEDDED SYSTEMS',
            tech: 'Smart sensors · Hardware · MSMEs',
            details: 'Designing end-to-end hardware solutions integrating remote sensors securely to the cloud. Tracking data logic securely in real-time.'
        },
        {
            id: '04',
            title: 'CYBERSECURITY',
            tech: 'Security-focused architecture',
            details: 'Implementing rigorous encryption, penetration testing principles, and zero-trust mechanisms across application networks.'
        }
    ];

    useEffect(() => {
        let ctx = gsap.context(() => {
            gsap.fromTo('.service-card',
                { opacity: 0, x: 50 },
                {
                    opacity: 1, 
                    x: 0,
                    duration: 0.8,
                    stagger: 0.15,
                    ease: "power2.out",
                    scrollTrigger: {
                        trigger: '.services-list',
                        start: "top 80%"
                    }
                }
            );

            // Remove any dynamic text splitting that might break word-keeping rules
            const textLines = document.querySelectorAll('.what-do-title');
            if (textLines.length > 0) {
                // Rely on CSS branding
            }

            gsap.to('.split-char-2', {
                scrollTrigger: {
                    trigger: containerRef.current,
                    start: "top 70%",
                },
                opacity: 1,
                y: 0,
                duration: 0.5,
                stagger: 0.05,
                ease: "power2.out"
            });
        }, containerRef);
        return () => ctx.revert();
    }, []);

  return (
    <section id="services" ref={containerRef} className="what-i-do-section w-full relative overflow-hidden pointer-events-none" style={{ padding: '8rem 5rem 8rem 8rem', isolation: 'isolate' }}>
        
        {/* MASSIVE TEXT Watermark */}
        <div className="what-i-do-watermark hidden md:block" style={{ position: 'absolute', left: '2rem', top: '50%', transform: 'translateY(-50%)', opacity: 0.04, pointerEvents: 'none', zIndex: 0, whiteSpace: 'nowrap', color: 'white' }}>
            <h2 className="font-heading font-extrabold leading-[0.8] tracking-[0.05em] uppercase" style={{ fontSize: 'clamp(5rem, 10vw, 8rem)' }}>
                <div className="what-do-title">WHAT</div>
                <div className="what-do-title">I DO</div>
            </h2>
        </div>

        <div className="container mx-auto relative z-10 pointer-events-auto flex flex-col md:grid md:grid-cols-[minmax(300px,420px)_1fr] items-start gap-24 py-12 md:py-0">
            
            {/* Left: Robot Container */}
            <div className="robot-center hidden md:block w-full h-[560px] relative" style={{ gridColumn: '1', zIndex: 1, pointerEvents: 'none', overflow: 'hidden' }}></div>

            {/* Right: Accordion Cards */}
            <div className="service-cards-column flex flex-col w-full relative z-10 pl-4 md:pl-12" style={{ gridColumn: '2', maxWidth: '100%', overflowY: 'auto', maxHeight: '70vh', paddingRight: '20px' }}>
                {services.map((s, i) => (
                    <div 
                        key={s.id}
                        className={`service-card bracket-card cursor-pointer transition-all duration-500 group ${
                            activeIndex === i ? 'bg-cyan-glow/5 border-cyan-glow/50' : ''
                        }`}
                        style={{ 
                            marginBottom: '1rem', 
                            padding: '1.8rem 2rem', 
                            overflow: 'hidden',
                            background: activeIndex === i ? 'rgba(0, 245, 255, 0.05)' : 'rgba(255, 255, 255, 0.03)',
                            border: activeIndex === i ? '1px solid rgba(0, 245, 255, 0.5)' : '1px solid rgba(255, 255, 255, 0.08)'
                        }}
                        onClick={() => setActiveIndex(i)}
                    >
                        <div className="flex items-center justify-between mb-2">
                            <span className={`text-xs font-bold tracking-[0.2em] transition-colors ${activeIndex === i ? 'text-cyan-glow' : 'text-white/40 group-hover:text-white'}`}>
                                ⬡ {s.id}
                            </span>
                        </div>
                        
                        <h3 className={`font-heading font-bold tracking-[0.1em] mb-2 transition-colors ${activeIndex === i ? 'text-white' : 'text-white/70 group-hover:text-white'}`} style={{ fontSize: '1.4rem' }}>
                            {s.title}
                        </h3>
                        
                        <div className={`font-bold tracking-[0.15em] mb-4 transition-colors ${activeIndex === i ? 'text-cyan-glow' : 'text-white/30'}`} style={{ fontSize: '0.85rem', color: '#00F5FF' }}>
                            {s.tech}
                        </div>

                        <div 
                            className={`text-white/60 font-light leading-relaxed overflow-hidden transition-all duration-500 ease-in-out ${
                                activeIndex === i ? 'max-h-40 opacity-100' : 'max-h-0 opacity-0'
                            }`}
                            style={{ fontSize: '0.95rem', lineHeight: '1.7' }}
                        >
                            {s.details}
                        </div>
                    </div>
                ))}
            </div>

        </div>

        <style>{`
            @media (max-width: 768px) {
                .what-i-do-section {
                    padding: 8rem 1.5rem !important;
                }
                .what-i-do-watermark {
                    display: none !important;
                }
                .container {
                    grid-template-columns: 1fr !important;
                }
                .robot-center {
                    display: none !important;
                }
            }
        `}</style>
    </section>
  );
};

export default Services;
