import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Skills = () => {
  const [activeTab, setActiveTab] = useState('All');

  const categories = ["All", "Languages", "AI & ML", "IoT & Hardware", "Tools", "Cybersecurity"];

  const skillsData = [
    { name: "Python", category: "Languages" },
    { name: "C++", category: "Languages" },
    { name: "Java", category: "Languages" },
    { name: "Machine Learning", category: "AI & ML" },
    { name: "NLP", category: "AI & ML" },
    { name: "Semantic Similarity Models", category: "AI & ML" },
    { name: "TensorFlow (basics)", category: "AI & ML" },
    { name: "ESP32", category: "IoT & Hardware" },
    { name: "Embedded Systems", category: "IoT & Hardware" },
    { name: "Sensor Integration", category: "IoT & Hardware" },
    { name: "IoT Cloud Sync", category: "IoT & Hardware" },
    { name: "Firebase", category: "Tools" },
    { name: "Git", category: "Tools" },
    { name: "GitHub", category: "Tools" },
    { name: "Flutter", category: "Tools" },
    { name: "Android Studio", category: "Tools" },
    { name: "VS Code", category: "Tools" },
    { name: "Network Security", category: "Cybersecurity" },
    { name: "Vulnerability Analysis", category: "Cybersecurity" },
  ];

  const filteredSkills = activeTab === 'All' 
    ? skillsData 
    : skillsData.filter(s => s.category === activeTab);

  return (
    <section id="skills" className="section-container">
      <div className="section-watermark">03</div>
      
      <div className="mb-12">
        <h2 className="text-5xl font-bold mb-4 title-gradient" style={{ fontFamily: 'Space Grotesk' }}>Technical Arsenal</h2>
        <p className="text-[var(--text-secondary)] max-w-xl">
          Tools and technologies I use to build production-ready systems.
        </p>
      </div>

      {/* Tabs */}
      <div className="flex flex-wrap gap-4 mb-12 border-b border-white/10 pb-4">
        {categories.map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`cursor-pointer px-4 py-2 text-sm font-semibold transition-all relative ${
              activeTab === tab ? 'text-white' : 'text-slate-500 hover:text-white'
            }`}
          >
            {tab}
            {activeTab === tab && (
              <motion.div 
                layoutId="activeTabUnderline"
                className="absolute bottom-[-17px] left-0 right-0 h-[2px] bg-[var(--accent-highlight)] shadow-[0_0_10px_var(--accent-highlight)]"
              />
            )}
          </button>
        ))}
      </div>

      {/* Skills Grid */}
      <motion.div 
        layout
        className="flex flex-wrap gap-4 min-h-[200px]"
      >
        <AnimatePresence mode="popLayout">
          {filteredSkills.map((skill, idx) => (
            <motion.div
              key={skill.name}
              layout
              initial={{ opacity: 0, scale: 0.8, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.8 }}
              transition={{ duration: 0.4, delay: idx * 0.05 }}
              className="group"
            >
              <div 
                className="px-6 py-2 rounded-full border border-[var(--accent-secondary)]/30 bg-[var(--accent-primary)]/10 text-[var(--accent-secondary)] font-medium text-sm flex items-center gap-2 hover:border-[var(--accent-highlight)] hover:bg-[var(--accent-primary)]/20 transition-all hover:scale-105"
              >
                <div className="w-1.5 h-1.5 rounded-full bg-[var(--accent-primary)] group-hover:bg-[var(--accent-highlight)] shadow-[0_0_5px_var(--accent-primary)]" />
                {skill.name}
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>
    </section>
  );
};

export default Skills;
