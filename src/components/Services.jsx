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

            // SplitText effect
            const textLines = document.querySelectorAll('.what-do-title');
            textLines.forEach(line => {
                line.innerHTML = line.textContent.split('').map(char => `<span class="split-char-2 inline-block opacity-0 translate-y-4">${char === ' ' ? '&nbsp;' : char}</span>`).join('');
            });

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
        <section id="services" ref={containerRef} className="w-full py-32 relative overflow-hidden pointer-events-none">
            <div className="container mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-[1fr_2fr_1.5fr] gap-12 relative z-10 pointer-events-auto items-center">
                
                {/* Left: MASSIVE TEXT */}
                <div className="flex flex-col justify-center">
                    <h2 className="font-heading font-extrabold text-[5rem] lg:text-[7rem] leading-[0.8] tracking-[0.05em] text-white/10 uppercase">
                        <div className="what-do-title">WHAT</div>
                        <div className="what-do-title">I DO</div>
                    </h2>
                </div>

                {/* Center: Empty spacing for Robot Sitting Pose */}
                <div className="hidden lg:block h-[500px]"></div>

                {/* Right: Accordion Cards */}
                <div className="services-list flex flex-col space-y-4">
                    {services.map((s, i) => (
                        <div 
                            key={s.id}
                            className={`service-card bracket-card cursor-pointer p-6 transition-all duration-500 group ${
                                activeIndex === i ? 'bg-cyan-glow/5 border-cyan-glow/50' : 'hover:bg-white/5'
                            }`}
                            onClick={() => setActiveIndex(i)}
                        >
                            <div className="flex items-center justify-between mb-2">
                                <span className={`text-xs font-bold tracking-[0.2em] transition-colors ${activeIndex === i ? 'text-cyan-glow' : 'text-white/40 group-hover:text-white'}`}>
                                    ⬡ {s.id}
                                </span>
                            </div>
                            
                            <h3 className={`font-heading font-bold text-xl tracking-[0.1em] mb-2 transition-colors ${activeIndex === i ? 'text-white' : 'text-white/70 group-hover:text-white'}`}>
                                {s.title}
                            </h3>
                            
                            <div className={`text-xs font-bold tracking-[0.15em] mb-4 transition-colors ${activeIndex === i ? 'text-violet-neon' : 'text-white/30'}`}>
                                {s.tech}
                            </div>

                            <div 
                                className={`text-sm text-white/60 font-light leading-relaxed overflow-hidden transition-all duration-500 ease-in-out ${
                                    activeIndex === i ? 'max-h-40 opacity-100' : 'max-h-0 opacity-0'
                                }`}
                            >
                                {s.details}
                            </div>
                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
};

export default Services;
