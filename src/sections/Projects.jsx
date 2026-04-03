import { motion } from 'framer-motion';
import { ExternalLink, Github, Monitor,Cpu, FileJson } from 'lucide-react';

const Projects = () => {
  const allProjects = [
    {
      title: "NoteNetra — IoT Fintech Platform",
      tags: ["ESP32", "IoT", "Cloud", "Fintech"],
      description: "An ESP32-based IoT system capturing offline cash transactions and syncing to a cloud dashboard, converting cashflow into credit insights.",
      icon: <Cpu className="text-[var(--accent-primary)]" size={32} />
    },
    {
      title: "Smart Vape Detection System",
      tags: ["Hardware", "Sensors", "Embedded"],
      description: "A hardware-based detection system using sensors to identify vape smoke in restricted areas, triggering buzzer alerts to notify authorities.",
      icon: <Monitor className="text-[var(--accent-primary)]" size={32} />
    },
    {
      title: "AlKosh — SAMARTH-AI Tool",
      tags: ["NLP", "AI", "Semantic Similarity", "Web"],
      description: "AI-driven MSME onboarding platform automating product categorization and enterprise mapping using NLP models with confidence scoring.",
      icon: <FileJson className="text-[var(--accent-primary)]" size={32} />
    }
  ];

  return (
    <section id="projects" className="section-container">
      <div className="mb-16">
        <h2 className="text-4xl md:text-5xl mb-4">Things I've <span className="text-[var(--accent-primary)]">Built</span></h2>
        <p className="text-[var(--text-secondary)] italic">Where engineering meets innovation</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {allProjects.map((project, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            whileHover={{ y: -10 }}
            className="glass-panel p-8 relative flex flex-col h-full group"
          >
            <div className="mb-6">{project.icon}</div>
            <h3 className="text-2xl font-bold mb-4">{project.title}</h3>
            <p className="text-[var(--text-secondary)] mb-6 flex-grow">{project.description}</p>
            
            <div className="flex flex-wrap gap-2 mb-8">
              {project.tags.map((tag, ti) => (
                <span key={ti} className="text-xs px-2 py-1 bg-white/5 border border-white/10 rounded-md text-[var(--accent-secondary)] uppercase">
                  {tag}
                </span>
              ))}
            </div>

            <div className="flex gap-4 pt-4 border-t border-white/5">
              <a href="#" className="text-sm font-bold flex items-center gap-2 text-[var(--accent-secondary)] hover:text-white transition-colors">
                <Github size={18} /> Code
              </a>
              <a href="#" className="text-sm font-bold flex items-center gap-2 text-[var(--accent-secondary)] hover:text-white transition-colors">
                <ExternalLink size={18} /> Demo
              </a>
            </div>
            
            {/* Hover Glow */}
            <div className="absolute inset-x-0 bottom-0 h-1 bg-gradient-to-r from-transparent via-[var(--accent-primary)] to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
