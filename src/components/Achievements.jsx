import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { Trophy } from 'lucide-react';

const Achievements = () => {
    const containerRef = useRef(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            gsap.from('.achieve-burst', {
                scrollTrigger: {
                    trigger: containerRef.current,
                    start: "top 75%",
                },
                scale: 0,
                opacity: 0,
                rotation: -180,
                duration: 1.5,
                ease: "elastic.out(1, 0.4)"
            });

            gsap.from('.achieve-text', {
                scrollTrigger: {
                    trigger: containerRef.current,
                    start: "top 75%",
                },
                y: 50,
                opacity: 0,
                duration: 1,
                stagger: 0.2,
                autoAlpha: 1,
                delay: 0.5,
                ease: "power2.out"
            });
        }, containerRef);
        
        return () => ctx.revert();
    }, []);

    return (
        <section id="achievements" ref={containerRef} className="w-full py-32 relative overflow-hidden bg-[#0A0A0F]">
            {/* Background glowing particles */}
            <div className="absolute inset-0 z-0 flex justify-center items-center pointer-events-none opacity-40">
                <div className="w-[800px] h-[800px] bg-gold-pulse/10 rounded-full blur-[120px] mix-blend-screen"></div>
            </div>

            <div className="container mx-auto px-6 md:px-12 z-10 relative flex flex-col items-center justify-center text-center">
                
                <div className="achieve-burst relative mb-12">
                    {/* Ring animation */}
                    <div className="absolute inset-0 rounded-full border-2 border-gold-pulse animate-[ping_3s_ease-out_infinite] opacity-50 scale-[1.5]"></div>
                    <div className="absolute inset-0 rounded-full border border-gold-pulse animate-[ping_3s_ease-out_infinite_1s] opacity-30 scale-[2]"></div>
                    
                    {/* Trophy container */}
                    <div className="w-32 h-32 md:w-40 md:h-40 bg-gold-pulse/10 rounded-full border border-gold-pulse flex items-center justify-center glow-gold backdrop-blur-sm relative z-10">
                        <Trophy size={64} className="text-gold-pulse drop-shadow-[0_0_15px_#FFD700]" />
                    </div>
                </div>

                <h2 className="achieve-text text-4xl md:text-6xl lg:text-7xl font-heading font-extrabold text-white mb-6 tracking-tight max-w-4xl">
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-gold-pulse to-yellow-200 drop-shadow-[0_0_10px_rgba(255,215,0,0.5)]">
                        Top 10 — Samsung Solve for Tomorrow 2025
                    </span>
                </h2>
                
                <p className="achieve-text text-xl md:text-2xl text-gray-300 font-light max-w-2xl text-center">
                    Selected as a National Semifinalist out of thousands of entries across India.
                </p>
                
            </div>
        </section>
    );
};

export default Achievements;
