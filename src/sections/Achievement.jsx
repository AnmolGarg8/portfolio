import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Trophy } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const Achievement = () => {
    const containerRef = useRef(null);

    useEffect(() => {
        let ctx = gsap.context(() => {
            // Trophy Pulse
            gsap.fromTo('.trophy-pulse', 
                { scale: 0.8, opacity: 0.5 },
                { scale: 1.1, opacity: 1, duration: 2, yoyo: true, repeat: -1, ease: "sine.inOut" }
            );

            // Shimmer text effect
            gsap.fromTo('.shimmer-text', 
                { backgroundPosition: '200% center' },
                { backgroundPosition: '-200% center', duration: 3, repeat: -1, ease: 'linear' }
            );

            // Ring expansion
            gsap.fromTo('.concentric-ring',
                { scale: 0.5, opacity: 0.5 },
                { scale: 2.5, opacity: 0, duration: 3, repeat: -1, ease: 'power2.out', stagger: 1 }
            );
            
            // Text fade up
            gsap.from('.achieve-fade', {
                scrollTrigger: {
                    trigger: containerRef.current,
                    start: "top 75%",
                },
                y: 50,
                opacity: 0,
                duration: 1,
                stagger: 0.2,
                ease: "power2.out"
            });
        }, containerRef);
        return () => ctx.revert();
    }, []);

    return (
        <section id="achievement" ref={containerRef} className="w-full py-40 relative overflow-hidden bg-[#07070F]">
            
            <div className="absolute inset-0 flex justify-center items-center opacity-30 pointer-events-none">
                <div className="concentric-ring absolute w-[300px] h-[300px] border border-[#FFD700] rounded-full"></div>
                <div className="concentric-ring absolute w-[300px] h-[300px] border border-[#FFD700] rounded-full"></div>
                <div className="concentric-ring absolute w-[300px] h-[300px] border border-[#FFD700] rounded-full"></div>
                
                <div className="w-[600px] h-[600px] bg-[#FFD700]/5 rounded-full blur-[100px] mix-blend-screen"></div>
            </div>

            <div className="container mx-auto px-6 md:px-12 z-10 relative flex flex-col items-center justify-center text-center">
                
                <div className="relative mb-12">
                    <div className="trophy-pulse w-32 h-32 md:w-40 md:h-40 bg-[#FFD700]/5 rounded-full border border-[#FFD700]/50 flex items-center justify-center backdrop-blur-md" style={{ boxShadow: '0 0 20px rgba(255,215,0,0.2)' }}>
                        <Trophy size={64} className="text-[#FFD700] drop-shadow-[0_0_15px_#FFD700]" />
                    </div>
                </div>

                <h2 className="achieve-fade font-heading font-black mb-6 tracking-tighter" style={{ fontSize: 'clamp(4rem, 10vw, 8rem)', wordBreak: 'keep-all', overflowWrap: 'normal', hyphens: 'none' }}>
                    <span 
                        className="shimmer-text text-transparent bg-clip-text" 
                        style={{
                            backgroundImage: 'linear-gradient(to right, #FFD700 20%, #FFFDE7 40%, #FFFDE7 60%, #FFD700 80%)',
                            backgroundSize: '200% auto',
                            filter: 'drop-shadow(0 0 15px rgba(255,215,0,0.6))'
                        }}
                    >
                        TOP 10
                    </span>
                </h2>
                
                <p className="achieve-fade text-lg md:text-xl text-white/70 font-bold tracking-[0.2em] max-w-2xl text-center uppercase">
                    Samsung Solve for Tomorrow 2025 <br/>
                    <span className="text-white/40 block mt-2 text-sm">National Semifinalist</span>
                </p>
                
            </div>
        </section>
    );
};

export default Achievement;
