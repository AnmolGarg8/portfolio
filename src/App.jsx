import React from 'react';
import Navbar from './components/Navbar';
import SocialSidebar from './components/SocialSidebar';
import ResumeButton from './components/ResumeButton';
import CustomCursor from './components/CustomCursor';

import Hero from './sections/Hero';
import About from './sections/About';
import WhatIDo from './sections/WhatIDo';
import Projects from './sections/Projects';
import Achievement from './sections/Achievement';
import Contact from './sections/Contact';

export default function App() {
  return (
    <>
      <CustomCursor />
      <Navbar />
      <SocialSidebar />
      <ResumeButton />
      <main>
        <Hero />
        <About />
        <WhatIDo />
        <Projects />
        <Achievement />
        <Contact />
      </main>
    </>
  );
}
