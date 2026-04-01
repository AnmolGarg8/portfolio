import { useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ExternalLink } from 'lucide-react';
import { FaGithub } from 'react-icons/fa';
import gsap from 'gsap';

const projectsData = [
  {
    id: 1,
    title: "NoteNetra",
    description: "IoT Fintech Intelligence Platform tracking offline MSME cash transactions via IoT sensors. Generates alternative credit scores for financial inclusion.",
    category: "IoT Campus Safety",
    tags: ["IoT", "React", "Node.js", "AI"],
    github: "#",
    live: "#",
    color: "cyan"
  },
  {
    id: 2,
    title: "AIKosh",
    description: "AI-Powered MSME Agent Mapping that connects MSMEs to relevant financial agents using intelligent data analysis.",
    category: "AI",
    tags: ["AI", "React", "Express"],
    github: "#",
    live: "#",
    color: "violet"
  },
  {
    id: 3,
    title: "Smart Vape Detection System",
    description: "Embedded IoT sensor system detecting vaping in restricted campus environments.",
    category: "Hardware",
    tags: ["IoT", "Embedded", "Hardware"],
    github: "#",
    live: "#",
    color: "gold"
  }
];

const Projects = () => {
  const containerRef = useRef(null);

  useEffect(() => {
     let ctx = gsap.context(() => {
        gsap.from('.proj-heading', {
            scrollTrigger: {
                trigger: containerRef.current,
                start: "top 80%",
            },
            y: 50,
            opacity: 0,
            duration: 1,
            ease: "power3.out"
        });
     }, containerRef);
     return () => ctx.revert();
  }, []);

  const getBorderColor = (color) => {
      switch(color) {
          case 'cyan': return 'border-t-[#00F5FF]';
          case 'violet': return 'border-t-[#9B59FF]';
          case 'gold': return 'border-t-[#FFD700]';
          default: return 'border-t-white';
      }
  };

  return (
    <section id="projects" ref={containerRef} className="projects-section w-full relative overflow-hidden pointer-events-none" style={{ padding: '8rem 5rem', isolation: 'isolate' }}>
      <div className="container mx-auto z-10 relative pointer-events-auto">
        
        <div className="flex flex-col mb-12">
            <div className="proj-heading inline-block px-3 py-1 border border-cyan-glow/50 text-cyan-glow text-xs font-bold tracking-[0.25em] w-max glow-cyan">
                SELECTED WORK
            </div>
        </div>

        <div className="projects-grid grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[2rem] mt-[3rem]">
            {projectsData.map((project, index) => (
                <motion.div 
                    key={project.id}
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.6, delay: index * 0.15 }}
                    whileHover={{ y: -4, borderColor: 'rgba(0,245,255,0.3)', boxShadow: '0 20px 60px rgba(0,245,255,0.08)' }}
                    className={`rounded-[12px] p-8 flex flex-col justify-between border border-white/5 transition-all duration-500 group cursor-pointer h-full ${getBorderColor(project.color)}`}
                    style={{ background: 'rgba(255,255,255,0.03)', borderTopWidth: '4px' }}
                >
                    <div className="relative z-10 pointer-events-none">
                        <div className={`text-[10px] font-bold tracking-[0.2em] mb-4 ${
                            project.color === 'cyan' ? 'text-cyan-glow' 
                            : project.color === 'violet' ? 'text-violet-neon' 
                            : 'text-[#FFD700]'
                        }`}>
                            ⬡ {project.category.toUpperCase()}
                        </div>

                        <h3 className="text-2xl font-bold font-heading text-white mb-4 group-hover:text-white transition-colors duration-300">
                            {project.title}
                        </h3>
                        <p className="text-white/50 text-sm font-light leading-relaxed mb-8">
                            {project.description}
                        </p>
                    </div>

                    <div className="relative z-20">
                        <div className="flex flex-wrap gap-2 mb-8 pointer-events-none">
                            {project.tags.map((tag, i) => (
                                <span 
                                    key={i} 
                                    className="text-[10px] font-medium px-2 py-1 rounded border border-white/10 text-white/50 bg-white/5"
                                >
                                    {tag}
                                </span>
                            ))}
                        </div>

                        <div className="flex items-center space-x-6">
                            <a href={project.github} className="text-white/40 hover:text-white hover:-translate-y-1 transition-all duration-300 pointer-events-auto" target="_blank" rel="noreferrer">
                                <FaGithub size={18} />
                            </a>
                            <a href={project.live} className="text-white/40 hover:text-cyan-glow hover:-translate-y-1 transition-all duration-300 pointer-events-auto" target="_blank" rel="noreferrer">
                                <ExternalLink size={18} />
                            </a>
                        </div>
                    </div>
                </motion.div>
            ))}
        </div>

      </div>
    </section>
  );
};

export default Projects;
