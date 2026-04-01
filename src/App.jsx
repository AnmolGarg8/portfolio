import React from 'react';

// Sections
import Hero from './sections/Hero';
import About from './sections/About';
import Skills from './sections/Skills';
import WhatIDo from './sections/WhatIDo';
import Projects from './sections/Projects';
import Achievement from './sections/Achievement';
import Contact from './sections/Contact';
import Footer from './sections/Footer';

import CustomCursor from './components/CustomCursor';
import ScrollProgress from './components/ScrollProgress';

function App() {
  return (
    <div className="app-container">
      <CustomCursor />
      <ScrollProgress />
      <main>
        <Hero />
        <About />
        <Skills />
        <WhatIDo />
        <Projects />
        <Achievement />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
