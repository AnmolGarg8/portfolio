import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Mail, Phone, Linkedin, Check, Send } from 'lucide-react';

const Contact = () => {
  const [isSending, setIsSending] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSending(true);
    // Simulate sending
    setTimeout(() => {
      setIsSending(false);
      setIsSuccess(true);
      setTimeout(() => setIsSuccess(false), 3000);
    }, 1500);
  };

  const contactInfo = [
    { label: "Email", value: "anmolgarg1605@gmail.com", icon: <Mail size={18} />, href: "mailto:anmolgarg1605@gmail.com" },
    { label: "Phone", value: "+91 9625652435", icon: <Phone size={18} />, href: "tel:+919625652435" },
    { label: "LinkedIn", value: "anmol-garg2005", icon: <Linkedin size={18} />, href: "https://linkedin.com/in/anmol-garg2005" }
  ];

  return (
    <section id="contact" className="section-container">
      <div className="mb-20">
        <h2 className="text-5xl font-bold mb-4 title-gradient" style={{ fontFamily: 'Space Grotesk' }}>Let's Build Something Great</h2>
        <p className="text-[var(--text-secondary)] text-xl tracking-tight">Open to internships, collaborations, and full-time opportunities. Let's talk.</p>
      </div>

      <div className="grid md:contact-grid gap-12 lg:gap-16">
        {/* Left Column - Contact Info */}
        <div className="space-y-4">
          {contactInfo.map((info, i) => (
            <motion.a
              key={i}
              href={info.href}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="glass-panel p-6 flex items-center gap-5 border border-white/5 hover:border-[var(--accent-secondary)] group transition-all"
              style={{ background: 'rgba(255,255,255,0.02)' }}
            >
              <div className="p-3 rounded-full bg-[var(--accent-primary)]/10 text-[var(--accent-primary)] group-hover:scale-110 transition-transform">
                {info.icon}
              </div>
              <div>
                <p className="text-[10px] uppercase tracking-widest font-black opacity-30 mb-0.5">{info.label}</p>
                <p className="text-lg font-bold text-white group-hover:text-[var(--accent-secondary)] transition-colors">{info.value}</p>
              </div>
            </motion.a>
          ))}
        </div>

        {/* Right Column - Contact Form */}
        <div className="glass-panel p-8 md:p-10 contact-form group overflow-hidden relative" style={{ background: 'rgba(255,255,255,0.03)' }}>
          <AnimatePresence>
            {isSuccess && (
              <motion.div 
                initial={{ opacity: 0 }} 
                animate={{ opacity: 1 }} 
                exit={{ opacity: 0 }} 
                className="absolute inset-0 z-20 bg-[var(--bg-deep)]/95 backdrop-blur-md flex flex-col items-center justify-center text-center p-8"
              >
                <div className="w-16 h-16 rounded-full bg-green-500/20 text-green-500 flex items-center justify-center mb-4 border border-green-500/30">
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ type: "spring", stiffness: 200 }}
                  >
                    <Check size={32} />
                  </motion.div>
                </div>
                <h3 className="text-xl font-bold text-white mb-1">Message Sent!</h3>
                <p className="text-sm text-[var(--text-secondary)]">Thanks for reaching out. I'll get back to you soon.</p>
              </motion.div>
            )}
          </AnimatePresence>

          <form onSubmit={handleSubmit} className="space-y-5 relative z-10">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              <div className="space-y-1.5">
                <label className="text-[10px] font-bold uppercase tracking-widest opacity-40 ml-1">Full Name</label>
                <input required type="text" placeholder="John Doe" />
              </div>
              <div className="space-y-1.5">
                <label className="text-[10px] font-bold uppercase tracking-widest opacity-40 ml-1">Email Address</label>
                <input required type="email" placeholder="john@example.com" />
              </div>
            </div>
            <div className="space-y-1.5">
              <label className="text-[10px] font-bold uppercase tracking-widest opacity-40 ml-1">Subject</label>
              <input required type="text" placeholder="Project Inquiry" />
            </div>
            <div className="space-y-1.5">
              <label className="text-[10px] font-bold uppercase tracking-widest opacity-40 ml-1">Message</label>
              <textarea required rows="4" placeholder="Tell me about your project..."></textarea>
            </div>

            <button 
              type="submit" 
              disabled={isSending}
              className={`w-full group flex items-center justify-center gap-3 py-4 rounded-xl font-black uppercase tracking-widest text-xs transition-all duration-300 relative overflow-hidden ${
                isSending ? 'opacity-70 cursor-wait' : 'bg-gradient-to-r from-[#7c3aed] to-[#06b6d4] hover:shadow-[0_0_25px_rgba(124,58,237,0.4)] hover:scale-[1.02] active:scale-[0.98]'
              }`}
            >
              {isSending ? 'Sending...' : (
                <>
                  <span>Send Message</span>
                  <Send size={16} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                </>
              )}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
