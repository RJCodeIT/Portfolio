'use client';

import React, { useState } from 'react';
import Input from '../components/ui/Input';
import { FaLinkedin, FaGithub, FaEnvelope, FaPhone } from 'react-icons/fa';
import { motion } from 'framer-motion';

export default function ContactContainer() {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    message: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    }
  };

  const contactItemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    }
  };

  return (
    <section className="w-full py-24 bg-gradient-to-b from-transparent to-gray-50/50">
      <motion.div 
        className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
      >
        <motion.div 
          className="text-center mb-16"
          variants={itemVariants}
        >
          <h2 className="text-4xl font-bold mb-4">Get in Touch with Us!</h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            Have a question or an idea? We&apos;d love to hear from you. Send us a message and we&apos;ll respond as soon as possible.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* Contact Form */}
          <motion.div 
            className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-xl transition-shadow duration-300"
            variants={itemVariants}
          >
            <div className="space-y-6">
              <div className="grid grid-cols-1 gap-6">
                <motion.div variants={itemVariants}>
                  <Input
                    label="Full Name"
                    placeholder="Enter your full name"
                    required
                    value={formData.fullName}
                    onChange={handleInputChange}
                    name="fullName"
                  />
                </motion.div>
                
                <motion.div variants={itemVariants}>
                  <Input
                    label="Email Address"
                    placeholder="Enter your email address"
                    type="email"
                    required
                    value={formData.email}
                    onChange={handleInputChange}
                    name="email"
                  />
                </motion.div>
                
                <motion.div variants={itemVariants}>
                  <Input
                    label="Message"
                    placeholder="Write your message here"
                    type="textarea"
                    required
                    value={formData.message}
                    onChange={handleInputChange}
                    name="message"
                  />
                </motion.div>
              </div>
            </div>
          </motion.div>

          {/* Contact Details */}
          <motion.div 
            className="lg:pl-8"
            variants={itemVariants}
          >
            <div className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-xl transition-shadow duration-300">
              <motion.h3 
                className="text-2xl font-semibold mb-6"
                variants={itemVariants}
              >
                Contact Information
              </motion.h3>
              
              <div className="space-y-8">
                <div className="space-y-6">
                  <motion.div 
                    className="flex items-center space-x-4 group"
                    variants={contactItemVariants}
                    whileHover={{ x: 8 }}
                  >
                    <div className="flex-shrink-0 w-12 h-12 flex items-center justify-center rounded-full bg-blue-50 group-hover:bg-blue-100 transition-colors duration-200">
                      <motion.div
                        whileHover={{ scale: 1.2 }}
                        transition={{ type: "spring", stiffness: 400, damping: 10 }}
                      >
                        <FaEnvelope className="text-xl text-blue-600" />
                      </motion.div>
                    </div>
                    <div>
                      <p className="text-sm text-gray-500">Email us at</p>
                      <a href="mailto:hello@rjcodeit.com" className="text-blue-600 hover:underline">hello@rjcodeit.com</a>
                    </div>
                  </motion.div>
                  
                  <motion.div 
                    className="flex items-center space-x-4 group"
                    variants={contactItemVariants}
                    whileHover={{ x: 8 }}
                  >
                    <div className="flex-shrink-0 w-12 h-12 flex items-center justify-center rounded-full bg-blue-50 group-hover:bg-blue-100 transition-colors duration-200">
                      <motion.div
                        whileHover={{ scale: 1.2 }}
                        transition={{ type: "spring", stiffness: 400, damping: 10 }}
                      >
                        <FaPhone className="text-xl text-blue-600" />
                      </motion.div>
                    </div>
                    <div>
                      <p className="text-sm text-gray-500">Call us at</p>
                      <p className="font-medium">+48 123 456 789</p>
                    </div>
                  </motion.div>
                  
                  <motion.div 
                    className="flex items-center space-x-4 group"
                    variants={contactItemVariants}
                    whileHover={{ x: 8 }}
                  >
                    <div className="flex-shrink-0 w-12 h-12 flex items-center justify-center rounded-full bg-blue-50 group-hover:bg-blue-100 transition-colors duration-200">
                      <motion.div
                        whileHover={{ scale: 1.2 }}
                        transition={{ type: "spring", stiffness: 400, damping: 10 }}
                      >
                        <FaLinkedin className="text-xl text-blue-600" />
                      </motion.div>
                    </div>
                    <div>
                      <p className="text-sm text-gray-500">Connect with us</p>
                      <a href="#" className="hover:underline font-medium">LinkedIn Profile</a>
                    </div>
                  </motion.div>
                  
                  <motion.div 
                    className="flex items-center space-x-4 group"
                    variants={contactItemVariants}
                    whileHover={{ x: 8 }}
                  >
                    <div className="flex-shrink-0 w-12 h-12 flex items-center justify-center rounded-full bg-blue-50 group-hover:bg-blue-100 transition-colors duration-200">
                      <motion.div
                        whileHover={{ scale: 1.2 }}
                        transition={{ type: "spring", stiffness: 400, damping: 10 }}
                      >
                        <FaGithub className="text-xl text-blue-600" />
                      </motion.div>
                    </div>
                    <div>
                      <p className="text-sm text-gray-500">Check our work</p>
                      <a href="#" className="hover:underline font-medium">GitHub Projects</a>
                    </div>
                  </motion.div>
                </div>

                <motion.div 
                  className="pt-6 border-t border-gray-100"
                  variants={itemVariants}
                >
                  <p className="text-gray-600">
                    Have a question or an idea? Reach out via the form or contact details above, and we&apos;ll get back to you soon!
                  </p>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}