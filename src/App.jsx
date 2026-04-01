import React, { useState, useEffect } from 'react';
import Loader from './components/Loader';
import CustomCursor from './components/CustomCursor';
import ScrollProgress from './components/ScrollProgress';

// Sections
import Hero from './sections/Hero';
import About from './sections/About';
import Skills from './sections/Skills';
import WhatIDo from './sections/WhatIDo';
import Projects from './sections/Projects';
import Achievement from './sections/Achievement';
import Contact from './sections/Contact';
import Footer from './sections/Footer';

function App() {
  const [loading, setLoading] = useState(true);

  const onLoaderComplete = () => {
    setLoading(false);
  };

  return (
    <div className="app-container">
      <CustomCursor />
      <ScrollProgress />
      {loading ? (
        <Loader onComplete={onLoaderComplete} />
      ) : (
        <>
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
        </>
      )}
    </div>
  );
}

export default App;
