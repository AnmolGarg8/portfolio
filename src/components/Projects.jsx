import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Tilt } from 'react-tilt';
import { ExternalLink } from 'lucide-react';
import { FaGithub as Github } from 'react-icons/fa';

const PROJECTS = [
  {
    id: 1,
    title: 'NoteNetra — IoT Fintech Intelligence Platform',
    category: 'IoT',
    borderColor: 'border-electric-indigo',
    gradientClass: 'from-electric-indigo to-blue-500',
    description: 'IoT-based system tracking offline MSME cash transactions using smart sensors. Generates alternative credit scores to improve financial inclusion for small businesses.',
    tech: ['IoT', 'Node.js', 'React', 'AI/ML'],
    github: '#',
    demo: '#',
  },
  {
    id: 2,
    title: 'AIKosh — AI-Powered MSME Agent Mapping Tool',
    category: 'AI',
    borderColor: 'border-purple-500',
    gradientClass: 'from-purple-500 to-pink-500',
    description: 'Maps MSMEs to the most relevant financial agents and resources using intelligent data analysis. Improves discoverability of financial support for small enterprises.',
    tech: ['AI', 'React', 'Node.js', 'Express'],
    github: '#',
    demo: '#',
  },
  {
    id: 3,
    title: 'Smart Vape Detection System',
    category: 'Hardware',
    borderColor: 'border-soft-gold',
    gradientClass: 'from-soft-gold to-orange-400',
    description: 'Hardware-based IoT sensor system detecting vaping in restricted campus environments. Enhances safety monitoring in schools and colleges via embedded sensors.',
    tech: ['IoT', 'Embedded Systems', 'Hardware Sensors'],
    github: '#',
    demo: '#',
  },
];

const FILTER_TABS = ['All', 'IoT', 'AI', 'Hardware'];

const Projects = () => {
  const [activeTab, setActiveTab] = useState('All');

  const filteredProjects = PROJECTS.filter(
    proj => activeTab === 'All' || proj.category === activeTab || (activeTab === 'Hardware' && proj.tech.includes('Hardware Sensors'))
  );

  return (
    <section className="py-24 relative overflow-hidden" id="projects">
      <div className="container mx-auto px-6 md:px-12">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-5xl font-heading font-bold text-gray-900 mb-8"
          >
            Featured <span className="text-soft-gold">Projects</span>
          </motion.h2>

          {/* Filter Tabs */}
          <motion.div 
            className="flex flex-wrap items-center justify-center gap-4 border border-gray-200 rounded-full p-2 mx-auto max-w-lg bg-white/50 backdrop-blur-md"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
          >
            {FILTER_TABS.map(tab => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`interactive relative px-6 py-2 rounded-full text-sm font-semibold transition-colors duration-300 z-10 ${
                  activeTab === tab ? 'text-white' : 'text-gray-600 hover:text-gray-900'
                }`}
              >
                {activeTab === tab && (
                  <motion.div
                    layoutId="active-tab"
                    className="absolute inset-0 bg-electric-indigo rounded-full -z-10 shadow-md shadow-electric-indigo/30"
                    transition={{ type: "spring", stiffness: 400, damping: 30 }}
                  />
                )}
                {tab}
              </button>
            ))}
          </motion.div>
        </div>

        {/* Projects Grid */}
        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 max-w-7xl mx-auto">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project, i) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
              >
                <Tilt options={{ max: 15, scale: 1.02, speed: 400, glare: true, 'max-glare': 0.1 }} className="h-full">
                  <div className={`glass-panel h-full flex flex-col relative overflow-hidden group`}>
                    
                    {/* Top Gradient Border */}
                    <div className={`h-2 w-full bg-gradient-to-r ${project.gradientClass}`}></div>
                    
                    {/* Background glow on hover */}
                    <div className="absolute inset-0 bg-gray-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10"></div>
                    
                    <div className="p-8 flex flex-col h-full flex-grow">
                      
                      <h3 className="text-2xl font-heading font-bold text-gray-900 mb-4 group-hover:text-electric-indigo transition-colors">
                        {project.title}
                      </h3>
                      
                      <p className="text-gray-600 font-body text-sm leading-relaxed mb-8 flex-grow">
                        {project.description}
                      </p>
                      
                      {/* Tech Stack Tags */}
                      <div className="flex flex-wrap gap-2 mb-8">
                        {project.tech.map((techItem, techIdx) => (
                          <span 
                            key={techIdx} 
                            className="px-3 py-1 bg-gray-100 text-gray-600 rounded-full text-xs font-semibold group-hover:scale-105 transition-transform"
                            style={{ transitionDelay: `${techIdx * 50}ms` }}
                          >
                            {techItem}
                          </span>
                        ))}
                      </div>
                      
                      {/* Actions */}
                      <div className="flex items-center gap-4 mt-auto border-t border-gray-100 pt-6">
                        <a 
                          href={project.github} 
                          className="interactive flex items-center justify-center gap-2 flex-1 py-3 px-4 rounded-xl border border-gray-200 text-gray-700 font-medium hover:border-electric-indigo hover:text-electric-indigo transition-all duration-300"
                        >
                          <Github size={18} />
                          <span>Code</span>
                        </a>
                        <a 
                          href={project.demo} 
                          className="interactive flex flex-1 items-center justify-center gap-2 py-3 px-4 rounded-xl relative overflow-hidden group/btn"
                        >
                          <div className={`absolute inset-0 bg-gradient-to-r opacity-10 group-hover/btn:opacity-100 transition-opacity duration-300 ${project.gradientClass} rounded-xl`}></div>
                          
                          <span className={`relative flex items-center gap-2 z-10 font-bold bg-clip-text text-transparent bg-gradient-to-r ${project.gradientClass}`}>
                            <ExternalLink size={18} className="text-gray-900 group-hover/btn:text-white transition-colors" />
                            <span className="text-gray-900 group-hover/btn:text-white transition-colors">Demo</span>
                          </span>
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
