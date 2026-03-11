// src/components/Navbar.jsx
import React, { useState } from 'react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full bg-[#5555] backdrop-blur-xl border-b border-gray-800 z-[100]">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="flex justify-between items-center h-20">

          <div className="flex-shrink-0 flex items-center gap-2">
            <div className="w-10 h-10 bg-blue-800 rounded-xl flex items-center justify-center text-white font-black">S</div>
            <span className="font-extrabold text-xl tracking-tight text-white">
              DEV<span className="text-blue-500">.SAIM</span>
            </span>
          </div>

          <div className="hidden md:flex items-center space-x-10">
            {['Home', 'Projects', 'Skills'].map((item) => (
              <a
                key={item}
                href={item === 'Home' ? '#' : `#${item.toLowerCase()}`} 
                className="text-md font-semibold text-gray-300 hover:text-blue-400 transition-all duration-300"
              >
                {item}
              </a>
            ))}
            <a
              href="#contact"
              className="px-6 py-2.5 bg-blue-800 text-white text-sm font-bold rounded-full hover:bg-blue-700 hover:shadow-lg hover:shadow-blue-900/50 transition-all duration-300"
            >
              Contact Me
            </a>
          </div>

          <div className="md:hidden flex items-center">
            <button onClick={() => setIsOpen(!isOpen)} className="text-white focus:outline-none">
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden bg-[#181a1b] border-b border-gray-800 px-6 py-6 space-y-4 animate-in slide-in-from-top duration-300">
          <a href="#home" className="block text-lg font-semibold text-white">Home</a>
          <a href="#projects" className="block text-lg font-semibold text-white">Projects</a>
          <a href="#skills" className="block text-lg font-semibold text-white">Skills</a>
          <a href="#contact" className="block text-center py-3 bg-blue-600 text-white rounded-xl font-bold">Contact Me</a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;