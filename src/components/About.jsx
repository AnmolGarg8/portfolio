import { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const About = () => {
  const containerRef = useRef(null);
  const statsRef = useRef(null);

  const [countProjects, setCountProjects] = useState(0);
  const [countStartup, setCountStartup] = useState(0);
  const [countNationally, setCountNationally] = useState(0);

  useEffect(() => {
    let ctx = gsap.context(() => {
      // Heading SplitText simple simulation
      const text = document.querySelector('.about-title');
      if (text) {
        text.innerHTML = text.textContent.split('').map(char => `<span class="split-char inline-block opacity-0 translate-y-4">${char === ' ' ? '&nbsp;' : char}</span>`).join('');
        
        gsap.to('.split-char', {
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top 80%",
          },
          opacity: 1,
          y: 0,
          duration: 0.5,
          stagger: 0.05,
          ease: "power2.out"
        });
      }

      // Stats Animation
      ScrollTrigger.create({
        trigger: statsRef.current,
        start: "top 90%",
        onEnter: () => {
          gsap.to({ val: 0 }, { val: 3, duration: 2, ease: "power1.out", onUpdate: function() { setCountProjects(Math.floor(this.targets()[0].val)); }});
          gsap.to({ val: 0 }, { val: 1, duration: 2, ease: "power1.out", onUpdate: function() { setCountStartup(Math.floor(this.targets()[0].val)); }});
          gsap.to({ val: 0 }, { val: 10, duration: 2.5, ease: "power1.out", onUpdate: function() { setCountNationally(Math.floor(this.targets()[0].val)); }});
        },
        once: true
      });

    }, containerRef);
    
    return () => ctx.revert();
  }, []);

  return (
    <section id="about" ref={containerRef} className="w-full py-32 relative overflow-hidden pointer-events-none">
      
      <div className="container mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-2 gap-16 relative z-10 w-full pointer-events-auto">
        
        {/* Left Side: Empty spacing for Robot Profile view */}
        <div className="hidden lg:block min-h-[500px]"></div>

        {/* Right Side: Content */}
        <div className="flex flex-col justify-center max-w-2xl">
          
          <div className="gsap-fade-up inline-block px-3 py-1 border border-cyan-glow/50 text-cyan-glow text-xs font-bold tracking-[0.25em] mb-8 w-max glow-cyan">
            ABOUT ME
          </div>

          <h2 className="about-title text-[2.5rem] md:text-[3.5rem] font-heading font-extrabold leading-[1.1] text-white tracking-[0.05em] mb-8">
            I BUILD INTELLIGENT SYSTEMS AT THE INTERSECTION OF AI, IOT & FULL STACK DEVELOPMENT.
          </h2>

          <p className="gsap-fade-up text-lg text-white/70 font-light leading-relaxed mb-12">
            Aspiring Software Engineer with deep interests in <span className="text-white font-medium">AI, Machine Learning, IoT and Cybersecurity</span>. I create sensor-based systems and scalable applications that solve real-world problems. National innovator — <span className="text-[#FFD700] glow-gold">Top 10 Semifinalist, Samsung Solve for Tomorrow 2025.</span>
          </p>

          {/* Stats */}
          <div ref={statsRef} className="gsap-fade-up grid grid-cols-1 md:grid-cols-3 gap-8 py-8 border-y border-white/10 mb-10">
            <div className="flex flex-col">
              <span className="text-[3rem] font-heading font-bold text-cyan-glow tracking-tighter leading-none mb-2">{countProjects}</span>
              <span className="text-xs text-white/50 tracking-[0.2em]">PROJECTS</span>
            </div>
            <div className="flex flex-col">
              <span className="text-[3rem] font-heading font-bold text-violet-neon tracking-tighter leading-none mb-2">{countStartup}</span>
              <span className="text-xs text-white/50 tracking-[0.2em]">STARTUP FOUNDED</span>
            </div>
            <div className="flex flex-col">
              <span className="text-[3rem] font-heading font-bold text-[#FFD700] tracking-tighter leading-none mb-2">TOP {countNationally}</span>
              <span className="text-xs text-white/50 tracking-[0.2em]">NATIONALLY</span>
            </div>
          </div>

          <div className="gsap-fade-up flex items-center gap-6 flex-wrap">
            <div className="inline-flex items-center space-x-3 border border-[#FFD700]/30 rounded-none px-4 py-2 glow-gold bg-[#FFD700]/5 backdrop-blur-sm">
              <span className="text-[#FFD700] text-xs font-bold tracking-[0.2em]">🏅 SAMSUNG SOLVE FOR TOMORROW — TOP 10</span>
            </div>

            <button className="px-6 py-3 border border-cyan-glow text-cyan-glow bg-cyan-glow/5 hover:bg-cyan-glow hover:text-[#07070F] text-xs font-bold tracking-[0.2em] transition-all duration-300">
              DOWNLOAD RESUME
            </button>
          </div>

        </div>

      </div>
    </section>
  );
};

export default About;
