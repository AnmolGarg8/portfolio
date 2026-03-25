import { motion } from 'framer-motion';
import { GraduationCap, Calendar, MapPin } from 'lucide-react';

const Education = () => {
  return (
    <section className="py-20 bg-pure-white relative overflow-hidden" id="education">
      <div className="absolute top-1/2 left-0 w-[500px] h-[500px] bg-electric-indigo/5 rounded-full blur-[120px] -z-10 translate-y-[-50%]"></div>
      
      <div className="container mx-auto px-6 md:px-12">
        <motion.div 
          className="max-w-4xl mx-auto"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
        >
          {/* Section Header */}
          <div className="flex items-center gap-4 mb-16">
            <h2 className="text-4xl md:text-5xl font-heading font-bold text-gray-900">
              My <span className="text-soft-gold">Education</span>
            </h2>
            <div className="h-px bg-gray-200 flex-1"></div>
          </div>

          {/* Education Card */}
          <motion.div 
            className="glass-card p-1 relative border border-gray-100 group"
            whileHover={{ y: -5 }}
            transition={{ duration: 0.3 }}
          >
            {/* Animated Gradient Border Layer */}
            <div className="absolute inset-0 bg-gradient-to-r from-electric-indigo to-soft-gold rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-sm -z-10"></div>
            
            <div className="bg-white rounded-xl p-8 md:p-10 relative z-10 flex flex-col md:flex-row gap-8 items-start md:items-center h-full w-full">
              
              {/* Badge */}
              <div className="flex-shrink-0 w-20 h-20 rounded-2xl bg-gradient-to-br from-electric-indigo/10 to-soft-gold/20 flex items-center justify-center border border-white/50 shadow-inner">
                <GraduationCap size={40} className="text-electric-indigo" />
              </div>

              {/* Content */}
              <div className="flex-1">
                <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-4 mb-4">
                  <div>
                    <h3 className="text-2xl font-heading font-bold text-gray-900 mb-2">
                      B.Tech in Computer Science
                    </h3>
                    <h4 className="text-lg font-body font-medium text-gray-700">
                      Vivekananda Institute of Professional Studies
                    </h4>
                  </div>
                  
                  <div className="flex flex-col gap-2 shrink-0">
                    <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-soft-gold/10 text-soft-gold text-sm font-semibold whitespace-nowrap">
                      <Calendar size={14} />
                      Batch 2024–2028
                    </div>
                    <div className="inline-flex items-center gap-2 text-gray-500 text-sm font-medium">
                      <MapPin size={14} />
                      New Delhi, India
                    </div>
                  </div>
                </div>
                
                <p className="text-gray-600 font-body leading-relaxed mt-4">
                  Focused on core computer science subjects, artificial intelligence, and software engineering principles. Active participant in technical clubs and hackathons.
                </p>
              </div>
            </div>
          </motion.div>

        </motion.div>
      </div>
    </section>
  );
};

export default Education;
