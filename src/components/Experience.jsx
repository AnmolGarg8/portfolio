import { motion } from 'framer-motion';
import { Briefcase, Activity } from 'lucide-react';

const Experience = () => {
  return (
    <section className="py-24 bg-pure-white relative overflow-hidden" id="experience">
      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-electric-indigo/5 rounded-full blur-[100px] -z-10 translate-y-[50%]"></div>
      
      <div className="container mx-auto px-6 md:px-12">
        <div className="max-w-4xl mx-auto">
          
          {/* Section Header */}
          <motion.div 
            className="flex items-center gap-4 mb-16"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-5xl font-heading font-bold text-gray-900">
              Work <span className="text-electric-indigo">Experience</span>
            </h2>
            <div className="h-px bg-gray-200 flex-1"></div>
          </motion.div>

          {/* Timeline Container */}
          <div className="relative border-l-2 border-electric-indigo/20 ml-6 md:ml-10">
            
            {/* Animated Glow Line on Timeline */}
            <motion.div 
              className="absolute top-0 left-0 w-0.5 h-full bg-gradient-to-b from-electric-indigo to-soft-gold -ml-[2px]"
              initial={{ height: 0 }}
              whileInView={{ height: '100%' }}
              viewport={{ once: true }}
              transition={{ duration: 1.5, ease: "easeInOut" }}
            />

            {/* Experience Item */}
            <motion.div 
              className="pl-12 pb-16 relative"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              {/* Timeline Dot/Icon */}
              <div className="absolute left-[-26px] top-0 w-12 h-12 bg-white rounded-full border-4 border-electric-indigo flex items-center justify-center shadow-[0_0_15px_rgba(92,107,192,0.5)] z-10 group">
                <Briefcase size={20} className="text-electric-indigo group-hover:scale-110 transition-transform" />
              </div>

              {/* Content Card */}
              <div className="glass-card p-6 md:p-8 hover:shadow-[0_15px_30px_-5px_rgba(92,107,192,0.1)] transition-shadow duration-300 group">
                <div className="flex flex-col md:flex-row md:items-center justify-between mb-4 gap-2">
                  <h3 className="text-xl md:text-2xl font-heading font-bold text-gray-900 flex items-center gap-3">
                    Co-Founder
                    <span className="text-sm px-3 py-1 bg-soft-gold/20 text-soft-gold rounded-full font-medium ml-2 animate-pulse">Present</span>
                  </h3>
                  <span className="text-gray-500 font-body text-sm font-medium">Ongoing</span>
                </div>
                
                <h4 className="text-electric-indigo font-body font-semibold text-lg mb-6 flex items-center gap-2">
                  <Activity size={18} />
                  Kenet Technologies
                </h4>
                
                <p className="text-gray-700 font-body leading-relaxed md:text-lg">
                  Building technology-driven solutions at the intersection of AI, IoT, and Fintech. Leading product development, architecting scalable backend systems, and collaborating on hardware integration to solve real-world problems for MSMEs and local governments.
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mt-6">
                  {['AI/ML', 'IoT', 'Fintech', 'Product Scaling', 'Hardware'].map(tag => (
                    <span key={tag} className="px-3 py-1 text-xs font-semibold text-gray-600 bg-gray-100 rounded-full group-hover:bg-electric-indigo/10 group-hover:text-electric-indigo transition-colors">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
