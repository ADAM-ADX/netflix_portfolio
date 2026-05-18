import React, { useState } from 'react';
import { FaEnvelope, FaPhone, FaLinkedin, FaGithub } from 'react-icons/fa';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Thank you for your message! I will get back to you soon.');
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  return (
    <div className="min-h-screen bg-black pt-20 py-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-5xl font-bold text-white mb-12 text-center">Get In Touch</h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div>
            <h2 className="text-3xl font-bold text-red-600 mb-8">Contact Information</h2>

            <div className="space-y-8">
              <div className="flex items-start space-x-4">
                <FaEnvelope className="text-red-600 text-2xl mt-2" />
                <div>
                  <h3 className="text-xl font-semibold text-white mb-2">Email</h3>
                  <a href="mailto:adammohammad25x@gmail.com" className="text-gray-400 hover:text-red-600 transition">
                    adammohammad25x@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <FaPhone className="text-red-600 text-2xl mt-2" />
                <div>
                  <h3 className="text-xl font-semibold text-white mb-2">Phone</h3>
                  <a href="tel:+917599954761" className="text-gray-400 hover:text-red-600 transition">
                    +91 7599954761
                  </a>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <FaLinkedin className="text-red-600 text-2xl mt-2" />
                <div>
                  <h3 className="text-xl font-semibold text-white mb-2">LinkedIn</h3>
                  <a href="https://linkedin.com/in/welcomeadam" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-red-600 transition">
                    linkedin.com/in/welcomeadam
                  </a>
                </div>
              </div>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-white font-semibold mb-2">Your Name</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full bg-gray-900 border border-gray-800 text-white px-4 py-3 rounded-lg focus:outline-none focus:border-red-600 transition"
                placeholder="Enter your name"
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-white font-semibold mb-2">Your Email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full bg-gray-900 border border-gray-800 text-white px-4 py-3 rounded-lg focus:outline-none focus:border-red-600 transition"
                placeholder="Enter your email"
              />
            </div>

            <div>
              <label htmlFor="subject" className="block text-white font-semibold mb-2">Subject</label>
              <input
                type="text"
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                required
                className="w-full bg-gray-900 border border-gray-800 text-white px-4 py-3 rounded-lg focus:outline-none focus:border-red-600 transition"
                placeholder="What is this about?"
              />
            </div>

            <div>
              <label htmlFor="message" className="block text-white font-semibold mb-2">Message</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={6}
                className="w-full bg-gray-900 border border-gray-800 text-white px-4 py-3 rounded-lg focus:outline-none focus:border-red-600 transition resize-none"
                placeholder="Your message here..."
              />
            </div>

            <button
              type="submit"
              className="w-full bg-red-600 hover:bg-red-700 text-white font-bold py-3 rounded-lg transition"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
