import { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { Download, Award } from 'lucide-react';

const About = () => {
  const containerRef = useRef(null);
  const statsRef = useRef(null);

  const [countProjects, setCountProjects] = useState(0);
  const [countStartup, setCountStartup] = useState(0);
  const [countNationally, setCountNationally] = useState(0);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.about-heading', {
        scrollTrigger: {
            trigger: containerRef.current,
            start: "top 80%",
        },
        y: 50,
        opacity: 0,
        duration: 1,
        ease: "power3.out"
      });

      gsap.from('.about-line', {
        scrollTrigger: {
            trigger: containerRef.current,
            start: "top 80%",
        },
        scaleX: 0,
        transformOrigin: "left center",
        duration: 1.5,
        ease: "power4.out",
        delay: 0.2
      });

      // Bio text reveal
      gsap.from('.bio-text', {
        scrollTrigger: {
            trigger: ".bio-text",
            start: "top 85%",
        },
        opacity: 0,
        y: 20,
        duration: 0.8,
        stagger: 0.1,
        ease: "power2.out"
      });

      // Stat counters animation setup
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
    <section id="about" ref={containerRef} className="w-full py-24 relative overflow-hidden">
      <div className="container mx-auto px-6 md:px-12 grid md:grid-cols-[1fr_2fr] gap-12 lg:gap-24 relative z-10">
        
        {/* Left Col - Heading */}
        <div className="relative">
          <div className="about-heading text-[8rem] md:text-[12rem] font-heading font-extrabold leading-none text-white/5 absolute -top-8 -left-8 md:-left-16 pointer-events-none select-none">
            01
          </div>
          <h2 className="about-heading text-4xl md:text-5xl font-heading font-bold text-white relative z-10">
            About Me
          </h2>
          <div className="about-line w-24 md:w-32 h-[2px] bg-cyan-glow mt-4 shadow-[0_0_10px_#00F5FF]"></div>
        </div>

        {/* Right Col - Content */}
        <div className="flex flex-col space-y-8">
          <div className="text-lg md:text-xl text-gray-300 leading-relaxed max-w-3xl bio-text font-light">
            <span className="bio-text inline-block">Aspiring Software Engineer and AI Developer </span>
            <span className="bio-text inline-block text-cyan-glow font-medium glow-cyan bg-cyan- glow/10 px-1 rounded mx-1">passionate about Artificial Intelligence, Machine Learning</span>
            <span className="bio-text inline-block">, IoT, and Cybersecurity. I build </span>
            <span className="bio-text inline-block text-violet-neon font-medium mx-1">intelligent sensor-based systems</span>
            <span className="bio-text inline-block"> and scalable full-stack applications that solve real-world problems.</span>
          </div>

          <div ref={statsRef} className="grid grid-cols-3 gap-6 pt-6 border-t border-white/5">
             <div className="flex flex-col">
               <span className="text-4xl md:text-5xl font-heading font-bold text-white mb-2">{countProjects}+</span>
               <span className="text-sm text-gray-400">Projects</span>
             </div>
             <div className="flex flex-col">
               <span className="text-4xl md:text-5xl font-heading font-bold text-white mb-2">{countStartup}</span>
               <span className="text-sm text-gray-400">Startup</span>
             </div>
             <div className="flex flex-col">
               <span className="text-4xl md:text-5xl font-heading font-bold text-gradient mb-2 glow-violet">Top {countNationally}</span>
               <span className="text-sm text-gray-400">Nationally</span>
             </div>
          </div>

          <div className="w-max mt-4">
              <div className="inline-flex items-center space-x-3 bg-[#FFD700]/10 border border-[#FFD700]/30 rounded-lg px-5 py-3 glow-gold backdrop-blur-sm mb-6">
                 <Award className="text-gold-pulse" />
                 <span className="text-gold-pulse font-medium text-sm md:text-base tracking-wide">🏆 Samsung Solve for Tomorrow 2025 — Top 10 National Semifinalist</span>
              </div>
          </div>

          <div>
            <button className="flex items-center space-x-3 px-6 py-3 border border-cyan-glow/40 text-white rounded bg-dark/50 hover:bg-cyan-glow hover:text-dark hover:border-transparent transition-all duration-300 group shadow-[0_0_15px_rgba(0,245,255,0.1)] hover:shadow-[0_0_20px_rgba(0,245,255,0.6)]">
              <span>Download Resume</span>
              <Download size={18} className="group-hover:translate-y-1 transition-transform" />
            </button>
          </div>

        </div>

      </div>
    </section>
  );
};

export default About;
