import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ProjectsSection from './components/ProjectsSection';
import SkillsSection from './components/SkillsSection';
import ContactSection from './components/ContactSection';

function App() {
  return (
    // 'scroll-smooth' ensures that clicking navbar links glides beautifully instead of instantly jumping
    <div className="bg-[#181a1b] min-h-screen font-sans text-gray-200 scroll-smooth">
      
      {/* 1. Top Navigation Bar */}
      <Navbar />
      
      {/* 2. The Main Content of Your Portfolio */}
      <main className='pt-20' >
        <Hero />
        <ProjectsSection />
        <SkillsSection />
        <ContactSection />
      </main>

      {/* 3. A Clean, Professional Footer */}
      <footer className="bg-[#3333] text-white text-center py-8 mt-12">
        <p className="text-sm text-gray-400">
          Built with React & Tailwind CSS.
        </p>
        <p className="text-sm mt-2">
          &copy; {new Date().getFullYear()} Saim Ali Khan. All rights reserved.
        </p>
      </footer>

    </div>
  );
}

export default App;