'use client';

import React, { useState } from 'react';
import Input from '../components/ui/Input';
import Button from '../components/ui/Button';
import { motion } from 'framer-motion';
import Image from 'next/image';

const envelopeIcon = '/envelope.svg';
const githubIcon = '/github.svg';
const linkedinIcon = '/linkedin.svg';
const phoneIcon = '/phone.svg';

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
    <section id="contact" className="w-full py-32 relative">
      <motion.div 
        className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
      >
        <motion.div 
          className="text-center mb-20"
          variants={itemVariants}
        >
          <h2 className="text-4xl font-bold mb-6 text-gray-100">Get in Touch with Us!</h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            Have a question or an idea? We&apos;d love to hear from you. Send us a message and we&apos;ll respond as soon as possible.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          <motion.div 
            className="backdrop-blur-lg bg-white/10 rounded-2xl shadow-2xl p-8 hover:shadow-3xl transition-all duration-300 border border-white/20 flex flex-col h-full"
            variants={itemVariants}
          >
            <motion.h3 
              className="text-2xl font-semibold mb-8 text-gray-100"
              variants={itemVariants}
            >
              Send Us a Message
            </motion.h3>
            <form className="flex-grow">
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
              <motion.div variants={itemVariants}>
                <Button 
                  type="submit"
                  variant="primary"
                  size="lg"
                  className="w-full mt-8"
                >
                  Send Message
                </Button>
              </motion.div>
            </form>
          </motion.div>
          <motion.div 
            className="lg:pl-8 h-full"
            variants={itemVariants}
          >
            <div className="backdrop-blur-lg bg-white/10 rounded-2xl shadow-2xl p-8 hover:shadow-3xl transition-all duration-300 border border-white/20 flex flex-col h-full">
              <motion.h3 
                className="text-2xl font-semibold mb-8 text-gray-100"
                variants={itemVariants}
              >
                Contact Information
              </motion.h3>
              
              <div className="space-y-10 flex-grow">
                <div className="space-y-8">
                  <motion.div 
                    className="flex items-center space-x-6 group"
                    variants={contactItemVariants}
                    whileHover={{ x: 8 }}
                  >
                    <div className="flex-shrink-0 w-14 h-14 flex items-center justify-center rounded-full bg-white/5 group-hover:bg-white/10 transition-colors duration-300 backdrop-blur-sm border border-white/10">
                      <Image src={envelopeIcon} alt="Envelope Icon" width={32} height={32} className="brightness-0 invert" />
                    </div>
                    <div>
                      <p className="text-sm text-gray-400 mb-1">Email us at</p>
                      <a href="mailto:hello@rjcodeit.com" className="text-gray-200 hover:text-blue-400 transition-colors duration-200 text-lg">hello@rjcodeit.com</a>
                    </div>
                  </motion.div>
                  <motion.div 
                    className="flex items-center space-x-6 group"
                    variants={contactItemVariants}
                    whileHover={{ x: 8 }}
                  >
                    <div className="flex-shrink-0 w-14 h-14 flex items-center justify-center rounded-full bg-white/5 group-hover:bg-white/10 transition-colors duration-300 backdrop-blur-sm border border-white/10">
                      <Image src={phoneIcon} alt="Phone Icon" width={32} height={32} className="brightness-0 invert" />
                    </div>
                    <div>
                      <p className="text-sm text-gray-400 mb-1">Call us at</p>
                      <p className="font-medium text-lg text-gray-200">+48 123 456 789</p>
                    </div>
                  </motion.div>
                  <motion.div 
                    className="flex items-center space-x-6 group"
                    variants={contactItemVariants}
                    whileHover={{ x: 8 }}
                  >
                    <div className="flex-shrink-0 w-14 h-14 flex items-center justify-center rounded-full bg-white/5 group-hover:bg-white/10 transition-colors duration-300 backdrop-blur-sm border border-white/10">
                      <Image src={linkedinIcon} alt="LinkedIn Icon" width={32} height={32} className="brightness-0 invert" />
                    </div>
                    <div>
                      <p className="text-sm text-gray-400 mb-1">Connect with us</p>
                      <a href="#" className="text-gray-200 hover:text-blue-400 transition-colors duration-200 text-lg">LinkedIn Profile</a>
                    </div>
                  </motion.div>
                  <motion.div 
                    className="flex items-center space-x-6 group"
                    variants={contactItemVariants}
                    whileHover={{ x: 8 }}
                  >
                    <div className="flex-shrink-0 w-14 h-14 flex items-center justify-center rounded-full bg-white/5 group-hover:bg-white/10 transition-colors duration-300 backdrop-blur-sm border border-white/10">
                      <Image src={githubIcon} alt="GitHub Icon" width={32} height={32} className="brightness-0 invert" />
                    </div>
                    <div>
                      <p className="text-sm text-gray-400 mb-1">Check our work</p>
                      <a href="#" className="text-gray-200 hover:text-blue-400 transition-colors duration-200 text-lg">GitHub Projects</a>
                    </div>
                  </motion.div>
                </div>

                <motion.div 
                  className="pt-8 border-t border-white/10"
                  variants={itemVariants}
                >
                  <p className="text-gray-400">
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
