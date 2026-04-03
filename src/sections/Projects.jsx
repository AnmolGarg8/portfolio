import { motion } from 'framer-motion';
import { Database, Zap, Cpu, Github, ExternalLink } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      id: "01",
      name: "NoteNetra",
      role: "IoT Fintech Platform",
      impact: "Designed an ESP32-powered system that transforms offline cash transactions into structured digital credit data — bridging the financial inclusion gap for MSMEs and farmers across rural India.",
      tags: ["ESP32", "IoT", "Cloud Dashboard", "Firebase", "Fintech"],
      icon: <Database size={40} className="text-[var(--accent-primary)]" />,
      stagger: 0
    },
    {
      id: "02",
      name: "Smart Vape Detection System",
      role: "Sensor-based Alert Engine",
      impact: "Engineered a real-time sensor-based detection system that identifies vape smoke in restricted environments and instantly alerts authorities — applied sensor fusion and threshold logic for reliable detection.",
      tags: ["Hardware", "MQ Sensors", "Buzzer Alert", "Embedded C"],
      icon: <Zap size={40} className="text-[var(--accent-primary)]" />,
      stagger: 40
    },
    {
      id: "03",
      name: "AlKosh",
      role: "SAMARTH-AI MSME Platform",
      impact: "Built an AI-driven onboarding engine that classifies unstructured product descriptions into structured enterprise taxonomy using NLP and semantic similarity models — with confidence scoring for enterprise-grade reliability.",
      tags: ["NLP", "Semantic Similarity", "Python", "REST API", "AI"],
      icon: <Cpu size={40} className="text-[var(--accent-primary)]" />,
      stagger: 20
    }
  ];

  return (
    <section id="projects" className="section-container">
      <div className="section-watermark">04</div>
      
      <div className="mb-20">
        <h2 className="text-5xl font-bold mb-4 title-gradient" style={{ fontFamily: 'Space Grotesk' }}>Things I've Engineered</h2>
        <p className="text-[var(--text-secondary)] text-xl tracking-tight">Real-world solutions. Real-world impact.</p>
      </div>

      <div className="grid lg:grid-cols-3 gap-12 lg:gap-14 items-start">
        {projects.map((project, idx) => (
          <motion.div
            key={project.id}
            initial={{ opacity: 0, y: 50 + project.stagger }}
            whileInView={{ opacity: 1, y: project.stagger }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="glass-panel p-8 relative flex flex-col group min-h-[520px] shadow-[0_15px_35px_rgba(0,0,0,0.2)]"
          >
            {/* Top Accent Line */}
            <div className="absolute top-0 left-0 w-full h-[3px] bg-gradient-to-r from-[var(--accent-primary)] to-[var(--accent-highlight)] opacity-60 group-hover:opacity-100 transition-opacity" />
            
            {/* Project Number */}
            <div className="absolute top-6 right-8 text-4xl font-black opacity-10 text-[var(--accent-secondary)] italic select-none">
              {project.id}
            </div>

            <div className="mb-8 p-4 rounded-2xl bg-white/[0.03] w-fit shadow-inner">
              {project.icon}
            </div>

            <div className="mb-4">
              <p className="text-xs uppercase tracking-[0.2em] font-bold text-[var(--accent-secondary)] mb-2">{project.role}</p>
              <h3 className="text-2xl font-bold text-white group-hover:text-[var(--accent-highlight)] transition-colors">
                {project.name}
              </h3>
            </div>

            <p className="text-[#b0a8d0] leading-relaxed mb-8 flex-grow">
              {project.impact}
            </p>

            <div className="flex flex-wrap gap-2 mb-8">
              {project.tags.map(tag => (
                <span key={tag} className="text-[10px] font-mono font-bold tracking-wider uppercase px-3 py-1 bg-white/5 border border-white/10 rounded-full text-[var(--accent-secondary)]">
                  {tag}
                </span>
              ))}
            </div>

            <div className="flex gap-6 mt-auto pt-6 border-t border-white/5">
              <a href="#" className="flex items-center gap-2 text-sm font-bold opacity-60 hover:opacity-100 transition-opacity relative group/link">
                <Github size={16} /> <span>Code</span>
                <div className="absolute -bottom-1 left-0 w-0 h-[1px] bg-[var(--accent-highlight)] group-hover/link:w-full transition-all duration-300" />
              </a>
              <a href="#" className="flex items-center gap-2 text-sm font-bold opacity-60 hover:opacity-100 transition-opacity relative group/link">
                <ExternalLink size={16} /> <span>Live Demo</span>
                <div className="absolute -bottom-1 left-0 w-0 h-[1px] bg-[var(--accent-highlight)] group-hover/link:w-full transition-all duration-300" />
              </a>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
