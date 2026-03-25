import { useState, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Send, Mail, MapPin } from 'lucide-react';
import { FaGithub as Github, FaLinkedin as Linkedin } from 'react-icons/fa';

const Contact = () => {
  const formRef = useRef(null);
  const isInView = useInView(formRef, { once: true, margin: "-100px" });
  
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [status, setStatus] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate EmailJS or form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setStatus("success");
      setFormData({ name: '', email: '', message: '' });
      setTimeout(() => setStatus(null), 3000);
    }, 1500);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  return (
    <section className="py-24 relative overflow-hidden bg-pure-white" id="contact">
      <div className="container mx-auto px-6 md:px-12 relative z-10">
        
        <div className="flex flex-col md:flex-row gap-16 md:gap-24 items-start max-w-6xl mx-auto" ref={formRef}>
          
          {/* Left Text Side */}
          <motion.div 
            className="flex-1 w-full"
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-5xl md:text-7xl font-heading font-extrabold text-gray-900 mb-6 leading-tight">
              Let's build <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-electric-indigo to-soft-gold">
                something great.
              </span>
            </h2>
            <p className="text-xl font-body text-gray-600 mb-12 max-w-lg">
              Open to opportunities, freelance projects, and exciting collaborations. Let me know how I can help!
            </p>

            <div className="space-y-6">
              <a href="mailto:anmolgarg1605@gmail.com" className="group interactive flex items-center gap-4 text-gray-800 hover:text-electric-indigo transition-colors w-fit">
                <div className="w-12 h-12 flex items-center justify-center rounded-full bg-electric-indigo/10 group-hover:bg-electric-indigo group-hover:text-white transition-colors duration-300">
                  <Mail size={24} />
                </div>
                <span className="text-lg font-medium font-body">anmolgarg1605@gmail.com</span>
              </a>
              
              <div className="flex items-center gap-4 text-gray-800">
                <div className="w-12 h-12 flex items-center justify-center rounded-full bg-gray-100">
                  <MapPin size={24} />
                </div>
                <span className="text-lg font-medium font-body">Noida, India</span>
              </div>
            </div>

            <div className="flex items-center gap-4 mt-12">
              <a href="https://github.com/AnmolGarg8" target="_blank" rel="noreferrer" className="w-14 h-14 interactive flex items-center justify-center rounded-full border border-gray-200 text-gray-600 hover:border-electric-indigo hover:text-electric-indigo hover:shadow-[0_0_20px_rgba(92,107,192,0.3)] transition-all duration-300">
                <Github size={24} />
              </a>
              <a href="https://linkedin.com/in/anmol-garg2005" target="_blank" rel="noreferrer" className="w-14 h-14 interactive flex items-center justify-center rounded-full border border-gray-200 text-gray-600 hover:border-[#0077b5] hover:text-[#0077b5] hover:shadow-[0_0_20px_rgba(0,119,181,0.3)] transition-all duration-300">
                <Linkedin size={24} />
              </a>
            </div>
          </motion.div>

          {/* Right Form Side */}
          <motion.div 
            className="flex-1 w-full"
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <form onSubmit={handleSubmit} className="glass-panel p-8 md:p-10 w-full flex flex-col gap-6 shadow-2xl shadow-blue-900/5">
              
              {/* Floating Label Input - Name */}
              <div className="relative group">
                <input 
                  type="text" 
                  name="name" 
                  id="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="interactive w-full bg-transparent border-b-2 border-gray-200 outline-none text-gray-900 font-body text-lg py-3 peer focus:border-electric-indigo transition-colors"
                  placeholder=" "
                />
                <label 
                  htmlFor="name" 
                  className="absolute left-0 top-1/2 -translate-y-1/2 text-gray-400 font-body text-lg transition-all 
                             peer-focus:-top-2 peer-focus:text-sm peer-focus:text-electric-indigo
                             peer-not-placeholder-shown:-top-2 peer-not-placeholder-shown:text-sm"
                >
                  Your Name
                </label>
              </div>

              {/* Floating Label Input - Email */}
              <div className="relative group mt-4">
                <input 
                  type="email" 
                  name="email" 
                  id="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="interactive w-full bg-transparent border-b-2 border-gray-200 outline-none text-gray-900 font-body text-lg py-3 peer focus:border-electric-indigo transition-colors"
                  placeholder=" "
                />
                <label 
                  htmlFor="email" 
                  className="absolute left-0 top-1/2 -translate-y-1/2 text-gray-400 font-body text-lg transition-all 
                             peer-focus:-top-2 peer-focus:text-sm peer-focus:text-electric-indigo
                             peer-not-placeholder-shown:-top-2 peer-not-placeholder-shown:text-sm"
                >
                  Your Email
                </label>
              </div>

              {/* Floating Label Input - Message */}
              <div className="relative group mt-4">
                <textarea 
                  name="message" 
                  id="message"
                  rows="4"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  className="interactive w-full bg-transparent border-b-2 border-gray-200 outline-none text-gray-900 font-body text-lg py-3 peer focus:border-electric-indigo transition-colors resize-none"
                  placeholder=" "
                ></textarea>
                <label 
                  htmlFor="message" 
                  className="absolute left-0 top-5 -translate-y-1/2 text-gray-400 font-body text-lg transition-all 
                             peer-focus:-top-2 peer-focus:text-sm peer-focus:text-electric-indigo
                             peer-not-placeholder-shown:-top-2 peer-not-placeholder-shown:text-sm"
                >
                  Your Message
                </label>
              </div>

              {/* Submit Button */}
              <button 
                type="submit" 
                disabled={isSubmitting}
                className={`interactive group relative mt-6 w-full py-4 rounded-xl flex items-center justify-center gap-2 overflow-hidden transition-all duration-300
                  ${status === 'success' ? 'bg-green-500 text-white' : 'bg-electric-indigo text-white shadow-lg shadow-electric-indigo/30 hover:shadow-electric-indigo/50'}
                `}
              >
                {!isSubmitting && status !== 'success' && (
                  <>
                    <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
                    <span className="relative z-10 font-bold text-lg">Send Message</span>
                    <Send size={20} className="relative z-10 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                  </>
                )}
                
                {isSubmitting && (
                  <span className="relative z-10 font-bold text-lg flex items-center gap-2">
                    <svg className="animate-spin h-5 w-5 text-white" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8H4z"></path>
                    </svg>
                    Sending...
                  </span>
                )}
                
                {status === 'success' && (
                  <span className="relative z-10 font-bold text-lg">Message Sent!</span>
                )}
              </button>
            </form>
          </motion.div>
        </div>
      </div>
      
      {/* Animated Gradient Wave Bottom */}
      <div className="absolute bottom-0 left-0 w-[200%] md:w-full h-32 md:h-48 translate-y-1/2 opacity-30 pointer-events-none -z-10">
        <svg viewBox="0 0 1440 320" xmlns="http://www.w3.org/2000/svg" className="w-full h-full animate-[wave_10s_ease-in-out_infinite_alternate]">
           <path fill="#5C6BC0" fillOpacity="0.8" d="M0,160L40,170.7C80,181,160,203,240,192C320,181,400,139,480,138.7C560,139,640,181,720,186.7C800,192,880,160,960,149.3C1040,139,1120,149,1200,160C1280,171,1360,181,1400,186.7L1440,192L1440,320L1400,320C1360,320,1280,320,1200,320C1120,320,1040,320,960,320C880,320,800,320,720,320C640,320,560,320,480,320C400,320,320,320,240,320C160,320,80,320,40,320L0,320Z"></path>
        </svg>
      </div>
    </section>
  );
};

export default Contact;
