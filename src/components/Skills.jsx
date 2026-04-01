import { useEffect, useRef } from 'react';
import gsap from 'gsap';

const Skills = () => {
    const containerRef = useRef(null);

    const skillCategories = [
        {
            title: "Frontend",
            color: "cyan",
            skills: ["React.js", "Next.js", "Tailwind CSS", "GSAP", "Three.js", "Framer Motion", "Vite"]
        },
        {
            title: "Backend",
            color: "violet",
            skills: ["Node.js", "Express", "REST APIs", "GraphQL", "MongoDB", "PostgreSQL"]
        },
        {
            title: "AI/ML",
            color: "gold",
            skills: ["Python", "TensorFlow", "PyTorch", "OpenAI API", "Data Analysis", "RAG"]
        },
        {
            title: "IoT & Hardware",
            color: "cyan",
            skills: ["C/C++", "Arduino", "Raspberry Pi", "Embedded Systems", "Sensors"]
        },
        {
            title: "Cybersecurity",
            color: "violet",
            skills: ["Penetration Testing", "Network Security", "Cryptography", "Linux"]
        }
    ];

    useEffect(() => {
        const ctx = gsap.context(() => {
            gsap.from('.skills-heading', {
                scrollTrigger: {
                    trigger: containerRef.current,
                    start: "top 80%",
                },
                y: 50,
                opacity: 0,
                duration: 1,
                ease: "power3.out"
            });

            gsap.from('.skill-badge', {
                scrollTrigger: {
                    trigger: containerRef.current,
                    start: "top 75%",
                },
                scale: 0,
                opacity: 0,
                rotation: -15,
                duration: 1.2,
                stagger: {
                    amount: 1.5,
                    from: "random"
                },
                ease: "elastic.out(1, 0.5)"
            });
        }, containerRef);
        return () => ctx.revert();
    }, []);

    const getColorVars = (color) => {
        if(color === "cyan") return "border-cyan-glow/30 text-cyan-200 shadow-[0_0_15px_rgba(0,245,255,0.15)] hover:bg-cyan-glow/10 hover:border-cyan-glow hover:text-cyan-glow hover:shadow-[0_0_25px_rgba(0,245,255,0.6)]";
        if(color === "violet") return "border-violet-neon/30 text-violet-200 shadow-[0_0_15px_rgba(155,89,255,0.15)] hover:bg-violet-neon/10 hover:border-violet-neon hover:text-violet-neon hover:shadow-[0_0_25px_rgba(155,89,255,0.6)]";
        if(color === "gold") return "border-gold-pulse/30 text-yellow-200 shadow-[0_0_15px_rgba(255,215,0,0.15)] hover:bg-gold-pulse/10 hover:border-gold-pulse hover:text-gold-pulse hover:shadow-[0_0_25px_rgba(255,215,0,0.6)]";
        return "";
    };

    return (
        <section id="skills" ref={containerRef} className="w-full py-24 relative overflow-hidden">
            <div className="container mx-auto px-6 md:px-12 z-10 relative">
                
                <div className="flex flex-col mb-20 relative">
                    <div className="text-[6rem] md:text-[10rem] font-heading font-extrabold leading-none text-white/5 absolute -top-12 md:-top-20 -left-6 md:-left-10 pointer-events-none select-none">
                        02
                    </div>
                    <h2 className="skills-heading text-4xl md:text-5xl font-heading font-bold text-white relative z-10">
                        Tech Arsenal
                    </h2>
                    <div className="skills-heading w-24 md:w-32 h-[2px] bg-cyan-glow mt-4 shadow-[0_0_10px_#00F5FF]"></div>
                </div>

                <div className="flex flex-col gap-12">
                    {skillCategories.map((cat, i) => (
                        <div key={i} className="flex flex-col md:flex-row items-start md:items-center gap-6">
                            <h3 className={`text-xl font-bold font-heading whitespace-nowrap min-w-[150px] ${
                                cat.color === 'cyan' ? 'text-cyan-glow' : cat.color === 'violet' ? 'text-violet-neon' : 'text-gold-pulse'
                            }`}>
                                {cat.title}
                            </h3>
                            <div className="flex flex-wrap gap-4">
                                {cat.skills.map((skill, j) => (
                                    <div 
                                        key={j} 
                                        className={`skill-badge animate-float px-6 py-2 rounded-full border bg-dark/60 backdrop-blur-md transition-all duration-300 transform cursor-none ${getColorVars(cat.color)}`}
                                        style={{ animationDelay: `${Math.random() * 2}s` }}
                                    >
                                        <span className="font-medium tracking-wide text-sm">{skill}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
};

export default Skills;
