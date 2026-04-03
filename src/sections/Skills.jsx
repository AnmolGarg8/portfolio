import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Code, Brain, Cpu, Wrench, Shield, Globe } from 'lucide-react';

const Skills = () => {
  const [activeTab, setActiveTab] = useState('All');

  const categories = [
    { name: "All", icon: <Globe size={18} /> },
    { name: "Languages", icon: <Code size={18} /> },
    { name: "AI & ML", icon: <Brain size={18} /> },
    { name: "IoT & Hardware", icon: <Cpu size={18} /> },
    { name: "Tools", icon: <Wrench size={18} /> },
    { name: "Cybersecurity", icon: <Shield size={18} /> }
  ];

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

  const filteredCategories = activeTab === 'All' 
    ? categories.filter(c => c.name !== 'All')
    : categories.filter(c => c.name === activeTab);

  return (
    <section id="skills" className="section" style={{ padding: '120px 0', position: 'relative' }}>
      <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 24px' }}>
        <header style={{ marginBottom: '80px' }}>
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '16px' }}
          >
            <div style={{ width: '40px', height: '1px', backgroundColor: '#7c3aed' }} />
            <span style={{ color: '#a78bfa', fontSize: '12px', fontWeight: '800', textTransform: 'uppercase', letterSpacing: '0.15em' }}>Expertise</span>
          </motion.div>
          <h2 className="text-5xl font-black title-gradient" style={{ marginBottom: '24px' }}>Technical Arsenal</h2>
          <p style={{ color: 'rgba(255,255,255,0.6)', maxWidth: '600px', fontSize: '18px', lineHeight: '1.6', margin: 0 }}>
            I specialize in building intelligent, sensor-driven ecosystems that bridge the gap between AI and physical hardware.
          </p>
        </header>

        {/* Tab Filter */}
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '12px', marginBottom: '60px' }}>
          {categories.map((cat) => (
            <button
              key={cat.name}
              onClick={() => setActiveTab(cat.name)}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '8px',
                padding: '12px 24px',
                borderRadius: '14px',
                fontSize: '14px',
                fontWeight: '600',
                cursor: 'pointer',
                transition: 'all 0.3s',
                backgroundColor: activeTab === cat.name ? 'rgba(124,58,237,0.15)' : 'rgba(255,255,255,0.03)',
                color: activeTab === cat.name ? '#ffffff' : 'rgba(255,255,255,0.5)',
                border: `1px solid ${activeTab === cat.name ? 'rgba(124,58,237,0.5)' : 'rgba(255,255,255,0.08)'}`,
                boxShadow: activeTab === cat.name ? '0 8px 16px rgba(124,58,237,0.1)' : 'none'
              }}
              className="hover:scale-105"
            >
              {cat.icon}
              {cat.name}
            </button>
          ))}
        </div>

        {/* Grid System */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(360px, 1fr))', gap: '32px' }}>
          <AnimatePresence mode="popLayout">
            {filteredCategories.map((cat, i) => (
              <motion.div
                key={cat.name}
                layout
                initial={{ opacity: 0, scale: 0.95, y: 30 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                style={{
                  background: 'rgba(255,255,255,0.02)',
                  backdropFilter: 'blur(20px)',
                  borderRadius: '24px',
                  padding: '40px',
                  border: '1px solid rgba(255,255,255,0.05)',
                  position: 'relative',
                  overflow: 'hidden'
                }}
                className="group hover:border-[#7c3aed]/40 transition-all duration-500"
              >
                <div style={{ position: 'absolute', top: 0, right: 0, width: '150px', height: '150px', background: 'radial-gradient(circle, rgba(124,58,237,0.05) 0%, transparent 70%)', zIndex: -1 }} />
                
                <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '32px' }}>
                  <div style={{ width: '56px', height: '56px', borderRadius: '16px', backgroundColor: 'rgba(124,58,237,0.1)', border: '1px solid rgba(124,58,237,0.2)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#a78bfa' }}>
                    {cat.icon}
                  </div>
                  <h3 style={{ fontSize: '22px', fontWeight: '800', color: '#e2dffa', margin: 0 }}>{cat.name}</h3>
                </div>

                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px' }}>
                  {skillsData
                    .filter(s => s.category === cat.name)
                    .map((skill) => (
                      <span 
                        key={skill.name}
                        style={{
                          padding: '8px 16px',
                          borderRadius: '10px',
                          backgroundColor: 'rgba(255,255,255,0.03)',
                          border: '1px solid rgba(255,255,255,0.05)',
                          color: 'rgba(255,255,255,0.8)',
                          fontSize: '13px',
                          fontWeight: '500',
                          transition: 'all 0.3s'
                        }}
                        className="hover:bg-[#7c3aed]/10 hover:border-[#7c3aed]/30 hover:text-white"
                      >
                        {skill.name}
                      </span>
                    ))}
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};

export default Skills;
