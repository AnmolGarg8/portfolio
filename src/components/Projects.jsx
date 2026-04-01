import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink } from 'lucide-react';
import { FaGithub } from 'react-icons/fa';
import gsap from 'gsap';

const projectsData = [
  {
    id: 1,
    title: "NoteNetra",
    description: "IoT Fintech Intelligence Platform tracking offline MSME cash transactions via IoT sensors. Generates alternative credit scores for financial inclusion.",
    category: "IoT",
    tags: ["IoT", "Node.js", "React", "AI/ML"],
    github: "#",
    live: "#"
  },
  {
    id: 2,
    title: "AIKosh",
    description: "AI-Powered MSME Agent Mapping that connects MSMEs to relevant financial agents using intelligent data analysis.",
    category: "AI",
    tags: ["AI", "React", "Node.js", "Express"],
    github: "#",
    live: "#"
  },
  {
    id: 3,
    title: "Smart Vape Detection System",
    description: "Embedded IoT sensor system detecting vaping in restricted campus environments.",
    category: "Hardware",
    tags: ["IoT", "Embedded Systems", "Hardware"],
    github: "#",
    live: "#"
  }
];

const Projects = () => {
  const containerRef = useRef(null);
  const [filter, setFilter] = useState('All');
  const filters = ['All', 'IoT', 'AI', 'Hardware'];

  useEffect(() => {
     const ctx = gsap.context(() => {
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

  const filteredProjects = filter === 'All' 
    ? projectsData 
    : projectsData.filter(p => p.category === filter);

  const getBorderColor = (category) => {
      switch(category) {
          case 'IoT': return 'border-t-[#00F5FF] shadow-[0_-5px_15px_rgba(0,245,255,0.2)] hover:shadow-[0_-5px_30px_rgba(0,245,255,0.5)]';
          case 'AI': return 'border-t-[#9B59FF] shadow-[0_-5px_15px_rgba(155,89,255,0.2)] hover:shadow-[0_-5px_30px_rgba(155,89,255,0.5)]';
          case 'Hardware': return 'border-t-[#FFD700] shadow-[0_-5px_15px_rgba(255,215,0,0.2)] hover:shadow-[0_-5px_30px_rgba(255,215,0,0.5)]';
          default: return 'border-t-white';
      }
  };

  const getTagColor = (tag) => {
    if(['React', 'Node.js', 'Express', 'Hardware'].includes(tag)) return 'text-violet-neon bg-violet-neon/10 border-violet-neon/20';
    if(['AI/ML', 'AI'].includes(tag)) return 'text-gold-pulse bg-gold-pulse/10 border-gold-pulse/20';
    return 'text-cyan-glow bg-cyan-glow/10 border-cyan-glow/20';
  };

  const defaultTiltOptions = {
      reverse:        false,
      max:            15,
      perspective:    1000,
      scale:          1.02,
      speed:          1000,
      transition:     true,
      axis:           null,
      reset:          true,
      easing:         "cubic-bezier(.03,.98,.52,.99)",
  };

  return (
    <section id="projects" ref={containerRef} className="w-full py-24 relative overflow-hidden">
      <div className="container mx-auto px-6 md:px-12 z-10 relative">
        
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8">
            <div className="flex flex-col relative">
                <div className="text-[6rem] md:text-[8rem] font-heading font-extrabold leading-none text-white/5 absolute -top-8 -left-6 pointer-events-none select-none">
                    03
                </div>
                <h2 className="proj-heading text-4xl md:text-5xl font-heading font-bold text-white relative z-10">
                    Selected Work
                </h2>
                <div className="proj-heading w-24 md:w-32 h-[2px] bg-cyan-glow mt-4 shadow-[0_0_10px_#00F5FF]"></div>
            </div>

            <div className="flex gap-4 proj-heading overflow-x-auto pb-4 md:pb-0 scrollbar-hide">
                {filters.map((f) => (
                    <button 
                        key={f}
                        onClick={() => setFilter(f)}
                        className={`px-5 py-2 rounded-full font-medium transition-all duration-300 border text-sm whitespace-nowrap ${
                            filter === f 
                                ? 'bg-cyan-glow/10 text-cyan-glow border-cyan-glow shadow-[0_0_15px_rgba(0,245,255,0.4)]' 
                                : 'bg-transparent text-gray-400 border-white/10 hover:border-cyan-glow/50 hover:text-white'
                        }`}
                    >
                        {f}
                    </button>
                ))}
            </div>
        </div>

        <motion.div layout className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <AnimatePresence>
                {filteredProjects.map((project) => (
                    <motion.div
                        key={project.id}
                        layout
                        initial={{ opacity: 0, y: 20, scale: 0.9 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.9 }}
                        transition={{ duration: 0.5 }}
                        className="h-full"
                    >
                        <Tilt options={defaultTiltOptions} className="h-full">
                            <div className={`glass-panel h-full rounded-2xl p-8 flex flex-col justify-between border-t-2 transition-all duration-500 group ${getBorderColor(project.category)}`}>
                                <div>
                                    <h3 className="text-2xl font-bold font-heading text-white mb-4 group-hover:text-cyan-glow transition-colors duration-300">
                                        {project.title}
                                    </h3>
                                    <p className="text-gray-400 text-sm leading-relaxed mb-6">
                                        {project.description}
                                    </p>
                                </div>

                                <div>
                                    <div className="flex flex-wrap gap-2 mb-8">
                                        {project.tags.map((tag, i) => (
                                            <span 
                                                key={i} 
                                                className={`text-[11px] font-bold px-3 py-1 rounded-full border ${getTagColor(tag)}`}
                                            >
                                                {tag}
                                            </span>
                                        ))}
                                    </div>

                                    <div className="flex items-center space-x-4">
                                        <a href={project.github} className="text-gray-400 hover:text-white hover:scale-110 transition-all duration-300" target="_blank" rel="noreferrer">
                                            <FaGithub size={20} />
                                        </a>
                                        <a href={project.live} className="text-gray-400 hover:text-cyan-glow hover:scale-110 transition-all duration-300" target="_blank" rel="noreferrer">
                                            <ExternalLink size={20} />
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </Tilt>
                    </motion.div>
                ))}
            </AnimatePresence>
        </motion.div>

      </div>
    </section>
  );
};

export default Projects;
