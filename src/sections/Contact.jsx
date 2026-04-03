import { motion } from 'framer-motion';
import { Mail, Phone, Linkedin, Send } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contact" className="section-container">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl mb-4 title-gradient">Let's <span className="text-white">Connect</span></h2>
          <p className="text-[var(--accent-secondary)] tracking-widest uppercase text-sm">Building connections for a smarter world</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div className="glass-panel p-8 flex items-center gap-6 group">
              <div className="p-4 rounded-full bg-[var(--accent-primary)]/10 text-[var(--accent-primary)] group-hover:bg-[var(--accent-primary)] group-hover:text-white transition-all transform group-hover:scale-110">
                <Mail size={24} />
              </div>
              <div>
                <p className="text-xs text-[var(--accent-secondary)] uppercase font-mono mb-1">Email Me</p>
                <p className="text-xl font-bold">anmolgarg1605@gmail.com</p>
              </div>
            </div>

            <div className="glass-panel p-8 flex items-center gap-6 group">
              <div className="p-4 rounded-full bg-[var(--accent-primary)]/10 text-[var(--accent-primary)] group-hover:bg-[var(--accent-primary)] group-hover:text-white transition-all transform group-hover:scale-110">
                <Phone size={24} />
              </div>
              <div>
                <p className="text-xs text-[var(--accent-secondary)] uppercase font-mono mb-1">Call Me</p>
                <p className="text-xl font-bold">+91 9625652435</p>
              </div>
            </div>

            <div className="glass-panel p-8 flex items-center gap-6 group">
              <div className="p-4 rounded-full bg-[var(--accent-primary)]/10 text-[var(--accent-primary)] group-hover:bg-[var(--accent-primary)] group-hover:text-white transition-all transform group-hover:scale-110">
                <Linkedin size={24} />
              </div>
              <div>
                <p className="text-xs text-[var(--accent-secondary)] uppercase font-mono mb-1">LinkedIn</p>
                <a href="https://linkedin.com/in/anmol-garg2005" target="_blank" className="text-xl font-bold hover:text-[var(--accent-primary)] transition-colors">anmol-garg2005</a>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="glass-panel p-8"
          >
            <form className="space-y-6">
              <div className="space-y-2">
                <label className="text-sm font-medium text-[var(--accent-secondary)] ml-1">Full Name</label>
                <input 
                  type="text" 
                  placeholder="Enter your name" 
                  className="contact-input"
                />
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium text-[var(--accent-secondary)] ml-1">Email Address</label>
                <input 
                  type="email" 
                  placeholder="Enter your email" 
                  className="contact-input"
                />
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium text-[var(--accent-secondary)] ml-1">Message</label>
                <textarea 
                  rows="4" 
                  placeholder="How can I help you?" 
                  className="contact-input resize-none"
                ></textarea>
              </div>

              <button className="w-full btn-primary">
                Send Message <span className="group-hover:translate-x-1 transition-transform">→</span>
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
