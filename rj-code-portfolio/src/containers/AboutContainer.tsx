'use client';
import React, { JSX } from 'react';
import { FaReact, FaNodeJs, FaDatabase } from 'react-icons/fa';
import { SiTypescript, SiJavascript, SiNextdotjs, SiExpress, SiMongodb } from 'react-icons/si';
import { Tooltip } from '../components/ui/Tooltip';
import Button from "../components/ui/Button";
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

interface TechItem {
  name: string;
  icon: JSX.Element;
  description: string;
}

export default function AboutContainer() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const technologies: TechItem[] = [
    { name: 'React', icon: <FaReact className="text-4xl text-[#61DAFB]" />, description: 'A library for building user interfaces' },
    { name: 'Next.js', icon: <SiNextdotjs className="text-4xl text-black" />, description: 'The React Framework for Production' },
    { name: 'JavaScript', icon: <SiJavascript className="text-4xl text-[#F7DF1E]" />, description: 'The language of the web' },
    { name: 'TypeScript', icon: <SiTypescript className="text-4xl text-[#3178C6]" />, description: 'Typed JavaScript at Any Scale' },
    { name: 'Node.js', icon: <FaNodeJs className="text-4xl text-[#339933]" />, description: 'JavaScript runtime built on Chrome\'s V8 engine' },
    { name: 'Express', icon: <SiExpress className="text-4xl text-black" />, description: 'Fast, unopinionated web framework for Node.js' },
    { name: 'MongoDB', icon: <SiMongodb className="text-4xl text-[#47A248]" />, description: 'The most popular NoSQL database' },
    { name: 'MS SQL Server', icon: <FaDatabase className="text-4xl text-[#CC2927]" />, description: 'Enterprise-grade relational database management system' },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        duration: 0.5
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5
      }
    }
  };

  return (
    <section ref={ref} id="about" className="relative min-h-screen bg-gradient-to-b from-white to-gray-50 py-24 overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -right-1/4 -top-1/4 w-1/2 h-1/2 bg-gradient-to-br from-primary/10 to-transparent rounded-full blur-3xl" />
        <div className="absolute -left-1/4 -bottom-1/4 w-1/2 h-1/2 bg-gradient-to-tr from-secondary/10 to-transparent rounded-full blur-3xl" />
      </div>

      <motion.div 
        className="container mx-auto px-4 relative"
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
      >
        {/* Header Section */}
        <motion.div 
          className="text-center mb-20"
          variants={itemVariants}
        >
          <h2 className="text-5xl font-bold mb-6 bg-clip-text text-gray-900">
            Who We Are
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Get to know RJ Code IT – a team dedicated to building innovative web solutions tailored to your needs.
          </p>
        </motion.div>

        {/* Two Column Layout */}
        <div className="grid md:grid-cols-2 gap-16 mb-20">
          {/* Left Column - Content */}
          <motion.div 
            className="space-y-12"
            variants={itemVariants}
          >
            {/* Introduction */}
            <motion.div 
              className="bg-white/50 backdrop-blur-sm rounded-2xl p-8 shadow-lg border border-gray-100"
              variants={itemVariants}
            >
              <h3 className="text-2xl font-bold mb-4 text-gray-900">Your Trusted Partner in Web Development</h3>
              <p className="text-gray-700 leading-relaxed">
                At RJ Code IT, we specialize in crafting high-quality web applications and websites. 
                Our goal is to empower businesses with tailored solutions built using modern technologies. 
                We value innovation, collaboration, and delivering results that exceed expectations.
              </p>
            </motion.div>

            {/* Why Choose Us */}
            <motion.div 
              className="bg-white/50 backdrop-blur-sm rounded-2xl p-8 shadow-lg border border-gray-100"
              variants={itemVariants}
            >
              <h3 className="text-2xl font-bold mb-6 text-gray-900">Why Work With Us?</h3>
              <ul className="space-y-6">
                {[
                  { title: 'Experienced Team', desc: 'Years of expertise in building scalable and efficient web solutions.' },
                  { title: 'Modern Tools', desc: 'We leverage the latest technologies to deliver cutting-edge products.' },
                  { title: 'Customer-Centric Approach', desc: 'We listen, adapt, and create solutions that fit your unique needs.' },
                  { title: 'End-to-End Services', desc: 'From design to deployment – we&apos;ve got you covered.' }
                ].map((item, index) => (
                  <motion.li 
                    key={index}
                    className="flex items-start space-x-4"
                    variants={itemVariants}
                  >
                    <span className="flex-shrink-0 w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center">
                      <span className="w-3 h-3 rounded-full bg-primary" />
                    </span>
                    <div>
                      <h4 className="font-semibold text-gray-900">{item.title}</h4>
                      <p className="text-gray-600 mt-1">{item.desc}</p>
                    </div>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          </motion.div>

          {/* Right Column - Technologies */}
          <motion.div 
            className="bg-white/50 backdrop-blur-sm rounded-2xl p-8 shadow-lg border border-gray-100"
            variants={itemVariants}
          >
            <h3 className="text-2xl font-bold mb-6 text-gray-900">Our Tools & Technologies</h3>
            <p className="text-gray-700 mb-8">
              We rely on a robust tech stack to deliver reliable and efficient solutions for our clients. 
              Here&apos;s what we work with:
            </p>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-6">
              {technologies.map((tech) => (
                <motion.div
                  key={tech.name}
                  variants={itemVariants}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Tooltip content={tech.description}>
                    <div className="flex flex-col items-center p-4 bg-white rounded-xl shadow-sm border border-gray-100 transition-all hover:shadow-md">
                      <div className="mb-3">
                        {tech.icon}
                      </div>
                      <span className="text-sm font-medium text-gray-800">{tech.name}</span>
                    </div>
                  </Tooltip>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* CTA Section */}
        <motion.div 
          className="text-center"
          variants={itemVariants}
        >
          <p className="text-xl mb-8 text-gray-700">
            Want to work with a team you can trust? Let&apos;s make your vision a reality!
          </p>
          <Button 
            size="lg"
            className="px-8 py-6 text-lg shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-200"
          >
            Get in Touch
          </Button>
        </motion.div>
      </motion.div>
    </section>
  );
}