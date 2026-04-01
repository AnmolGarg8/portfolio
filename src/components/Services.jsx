import { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';

const Services = () => {
    const containerRef = useRef(null);
    const [activeIndex, setActiveIndex] = useState(-1);

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
    <section id="services" ref={containerRef} className="what-i-do-section w-full">
        
        {/* Watermark Column */}
        <div className="what-watermark font-heading font-extrabold uppercase">
            <div>WHAT</div>
            <div>I DO</div>
        </div>

        {/* Robot Column */}
        <div className="what-robot-col robot-canvas-container"></div>

        {/* Cards Column */}
        <div className="what-cards-col pr-4">
            {services.map((s, i) => (
                <div 
                    key={s.id}
                    className={`service-card bracket-card cursor-pointer transition-all duration-500 group ${
                        activeIndex === i ? 'expanded' : ''
                    }`}
                    onClick={() => setActiveIndex(i)}
                >
                    <div className="service-card-number">⬡ {s.id}</div>
                    <h3 className="service-card-title uppercase">{s.title}</h3>
                    <div className="service-card-tags">{s.tech}</div>
                    <div className="service-card-desc">
                        {s.details}
                    </div>
                </div>
            ))}
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
