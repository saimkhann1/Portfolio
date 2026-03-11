// src/components/Hero.jsx
import React from 'react';
import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center bg-[#181a1b] px-6 pt-20">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <p className="text-blue-700 font-bold tracking-widest uppercase mb-4 text-sm">
            Available for Projects
          </p>
          
          <h1 className="text-5xl md:text-7xl font-black text-white leading-[1.1] mb-6">
            I'm <span className="text-blue-700">Saim Khan.</span> <br />
            Full-Stack Developer.
          </h1>

          <p className="text-lg md:text-xl text-gray-400 mb-10 max-w-lg leading-relaxed">
            I build high-end web applications with <span className="text-white font-semibold underline decoration-blue-700">Laravel</span> and <span className="text-white font-semibold underline decoration-cyan-400">React</span>. Specialized in creating seamless digital experiences.
          </p>

          <div className="flex flex-wrap gap-4">
            <a href="#projects" className="px-8 py-4 bg-blue-700 text-white font-bold rounded-2xl hover:bg-blue-600 transition-all shadow-xl hover:-translate-y-1">
              View Projects
            </a>
            <a href="#contact" className="px-8 py-4 bg-transparent text-white font-bold rounded-2xl border-2 border-gray-600 hover:border-white hover:bg-gray-800 transition-all">
              Contact Me
            </a>
          </div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative flex justify-center"
        >
          {/* Opacity reduced for dark mode to prevent blinding glare */}
          <div className="absolute -top-10 -right-10 w-32 h-32 bg-blue-700 rounded-full blur-3xl opacity-20"></div>
          <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-cyan-500 rounded-full blur-3xl opacity-20"></div>
          
          <div className="relative z-10 group">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-700 to-cyan-400 rounded-[2rem] rotate-6 group-hover:rotate-3 transition-transform duration-500 -z-10 shadow-2xl"></div>
            
            <div className="w-72 h-72 md:w-[400px] md:h-[450px] bg-gray-800 rounded-[2rem] overflow-hidden border-4 border-gray-700 shadow-2xl">
              <img 
                src="/my-photo.jpg" 
                alt="Saim Ali Khan" 
                className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
              />
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default Hero;