// src/components/ContactSection.jsx
import React, { useState } from 'react';
import { motion } from 'framer-motion';

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  
  // Status check karne ke liye (Jaise "Sending..." ya "Sent!")
  const [status, setStatus] = useState('');

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault(); 
    setStatus('Sending...');

    // Web3Forms API Data
    const object = {
      ...formData,
      access_key: "09d258f2-d720-415b-a983-655d6b75466a" // <-- YAHAN APNI WEB3FORMS KEY PASTE KAREIN
    };
    const json = JSON.stringify(object);

    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json"
        },
        body: json
      });
      const resData = await res.json();

      if (resData.success) {
        setStatus('Message Sent Successfully! ✅');
        setFormData({ name: '', email: '', message: '' }); // Send hone ke baad form khali ho jayega
        
        // 3 second baad success message ghayab ho jayega
        setTimeout(() => setStatus(''), 3000);
      } else {
        setStatus('Failed to send message. ❌');
      }
    } catch (error) {
      setStatus('Something went wrong. ❌');
    }
  };

  return (
    <section id="contact" className="py-20 bg-[#181a1b]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="flex flex-col justify-center"
          >
            <h2 className="text-4xl font-extrabold text-white mb-6">Let's Work Together</h2>
            <p className="text-lg text-gray-400 mb-8">
              Whether you have a project in mind or just want to say hi, my inbox is always open. I'll try my best to get back to you!
            </p>
            <div className="text-gray-300 font-medium">
              <p className="mb-2">📍 Multan, Punjab, Pakistan</p>
              <p>✉️ saimkhannofficial@gmail.com</p> 
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="bg-[#242729] p-8 rounded-2xl shadow-sm border border-gray-800"
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-1">Name</label>
                <input 
                  type="text" 
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-lg bg-[#181a1b] border border-gray-700 text-white focus:ring-2 focus:ring-violet-600 focus:border-transparent transition-all outline-none"
                  placeholder="John Doe"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-300 mb-1">Email</label>
                <input 
                  type="email" 
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-lg bg-[#181a1b] border border-gray-700 text-white focus:ring-2 focus:ring-violet-600 focus:border-transparent transition-all outline-none"
                  placeholder="john@example.com"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-300 mb-1">Message</label>
                <textarea 
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows="4"
                  className="w-full px-4 py-3 rounded-lg bg-[#181a1b] border border-gray-700 text-white focus:ring-2 focus:ring-violet-600 focus:border-transparent transition-all outline-none resize-none"
                  placeholder="Tell me about your project..."
                ></textarea>
              </div>

              <button 
                type="submit"
                disabled={status === 'Sending...'}
                className="w-full bg-violet-600 text-white font-bold py-4 rounded-lg hover:bg-violet-700 transition-colors duration-300 shadow-md hover:shadow-lg disabled:opacity-50"
              >
                {status === 'Sending...' ? 'Sending...' : 'Send Message'}
              </button>

              {/* Message ka feedback */}
              {status && status !== 'Sending...' && (
                <p className={`text-center mt-4 font-semibold ${status.includes('Successfully') ? 'text-green-400' : 'text-red-400'}`}>
                  {status}
                </p>
              )}

            </form>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default ContactSection;