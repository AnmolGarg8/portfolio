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
      <div className="mb-12">
        <h2 className="text-5xl font-bold mb-4 title-gradient" style={{ fontFamily: 'Space Grotesk' }}>Technical Arsenal</h2>
        <p className="text-[var(--text-secondary)] max-w-xl">
          Tools and technologies I use to build production-ready systems.
        </p>
      </div>

      {/* Tabs */}
      <div className="flex flex-wrap gap-3 mb-12">
        {categories.map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`px-5 py-2 rounded-full text-[13px] transition-all cursor-pointer border ${
              activeTab === tab 
                ? 'bg-[#7c3aed] border-[#7c3aed] text-white font-semibold' 
                : 'bg-white/[0.04] border-[rgba(124,58,237,0.3)] text-[rgba(200,196,248,0.7)] hover:bg-[rgba(124,58,237,0.15)] hover:border-[rgba(124,58,237,0.6)] hover:text-[#e2dffa]'
            }`}
          >
            {tab}
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
                className="px-[18px] py-[8px] rounded-full border border-[rgba(167,139,250,0.25)] bg-[rgba(124,58,237,0.1)] text-[#c4b5fd] font-medium text-[13px] flex items-center gap-2 hover:border-[rgba(167,139,250,0.6)] hover:bg-[rgba(124,58,237,0.25)] hover:text-[#e9e3ff] hover:scale-[1.04] transition-all cursor-default"
              >
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
