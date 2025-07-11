import React from 'react';
import './App.css';
import { Toaster } from './components/ui/toaster';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import Skills from './components/Skills';
import Certifications from './components/Certifications';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Education from './components/Education';
import Contact from './components/Contact';

function App() {
  return (
    <div className="App">
      <Navigation />
      <Hero />
      <Skills />
      <Certifications />
      <Projects />
      <Experience />
      <Education />
      <Contact />
      <Toaster />
    </div>
  );
}

export default App;