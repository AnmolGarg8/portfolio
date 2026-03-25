import { useState, useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Cursor from './components/Cursor';
import Preloader from './components/Preloader';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Education from './components/Education';
import Experience from './components/Experience';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Achievements from './components/Achievements';
import Contact from './components/Contact';
import Footer from './components/Footer';

gsap.registerPlugin(ScrollTrigger);

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Wait for 3 seconds then hide preloader
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <Preloader loading={loading} />
      
      {!loading && (
        <div className="bg-pure-white min-h-screen text-gray-900 overflow-x-hidden relative" id="smooth-wrapper">
          <Cursor />
          <Navbar />
          <div id="smooth-content">
            <Hero />
            <div className="section-break bg-off-white h-full pb-10">
              <About />
              <Education />
              <Experience />
            </div>
            
            <Skills />
            
            <div className="section-break bg-off-white py-20">
              <Projects />
              <Achievements />
            </div>
            
            <Contact />
            <Footer />
          </div>
        </div>
      )}
    </>
  );
}

export default App;
