// src/components/ContactSection.jsx
import React, { useState } from 'react';
import { motion } from 'framer-motion';

const ContactSection = () => {
  // Yeh React ki "memory" hai jo form ka data store karegi
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  // Jab user type karta hai, yeh function data update karta hai
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Jab user submit button dabata hai
  const handleSubmit = (e) => {
    e.preventDefault(); // Yeh page ko reload hone se rokta hai
    console.log("Form Data Ready for Laravel:", formData);
    // Yahan hum baad mein Laravel API ko data bhejenge
    alert("Message ready to be sent! (Backend connection pending)");
  };

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          
          {/* Left Side: Contact Information */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="flex flex-col justify-center"
          >
            <h2 className="text-4xl font-extrabold text-gray-900 mb-6">Let's Work Together</h2>
            <p className="text-lg text-gray-600 mb-8">
              Whether you have a project in mind or just want to say hi, my inbox is always open. I'll try my best to get back to you!
            </p>
            <div className="text-gray-800 font-medium">
              <p className="mb-2">📍 Multan, Punjab, Pakistan</p>
              <p>✉️ saimkhannofficial@gmail.com</p> {/* Yahan apna asli email likh dein */}
            </div>
          </motion.div>

          {/* Right Side: High-End Contact Form */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="bg-gray-50 p-8 rounded-2xl shadow-sm border border-gray-100"
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Name</label>
                <input 
                  type="text" 
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-600 focus:border-transparent transition-all outline-none"
                  placeholder="John Doe"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                <input 
                  type="email" 
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-600 focus:border-transparent transition-all outline-none"
                  placeholder="john@example.com"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Message</label>
                <textarea 
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows="4"
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-600 focus:border-transparent transition-all outline-none resize-none"
                  placeholder="Tell me about your project..."
                ></textarea>
              </div>

              <button 
                type="submit"
                className="w-full bg-gray-900 text-white font-bold py-4 rounded-lg hover:bg-blue-600 transition-colors duration-300 shadow-md hover:shadow-lg"
              >
                Send Message
              </button>

            </form>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default ContactSection;