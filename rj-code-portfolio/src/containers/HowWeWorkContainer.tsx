'use client';

import React from 'react';
import HowWeWorkCard from "../components/ui/HowWeWorkCard";
import Button from "../components/ui/Button";
import { motion } from 'framer-motion';

export default function HowWeWorkContainer() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
        duration: 1.2
      }
    }
  };

  const titleVariants = {
    hidden: { opacity: 0, y: -30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 1.2,
        ease: "easeOut"
      }
    }
  };

  const subtitleVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 1.2,
        delay: 0.2,
        ease: "easeOut"
      }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 1.2,
        ease: "easeOut"
      }
    }
  };

  const ctaVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 1.2,
        delay: 0.6,
        ease: "easeOut"
      }
    }
  };

  const scrollToContact = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="howWeWork" className="w-full py-24 overflow-hidden">
      <motion.div 
        className="container mx-auto px-8"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
      >
        <motion.h2 
          className="text-5xl md:text-6xl font-bold text-center text-white mb-6"
          variants={titleVariants}
        >
          A transparent process
        </motion.h2>
        <motion.p 
          className="text-xl text-white/80 text-center mb-20 max-w-3xl mx-auto"
          variants={subtitleVariants}
        >
          Step by step, we&apos;ll turn your vision into reality
        </motion.p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-10">
          <motion.div variants={cardVariants} custom={0}>
            <HowWeWorkCard
              stepNumber={1}
              icon="💬"
              title="Consultations"
              content="We start with a conversation to understand your needs, business goals, and expectations. Together, we define the project vision and scope."
            />
          </motion.div>
          <motion.div variants={cardVariants} custom={1}>
            <HowWeWorkCard
              stepNumber={2}
              icon="🛠️"
              title="Solution Proposal"
              content="We create a tailored solution that best fits your requirements. We present a detailed action plan, estimated timeline, and project cost."
            />
          </motion.div>
          <motion.div variants={cardVariants} custom={2}>
            <HowWeWorkCard
              stepNumber={3}
              icon="💻"
              title="Project Implementation"
              content="Once approved, we begin the implementation process. We use proven technologies and adhere to the highest coding standards. You'll be regularly updated on the progress."
            />
          </motion.div>
          <motion.div variants={cardVariants} custom={3}>
            <HowWeWorkCard
              stepNumber={4}
              icon="✅"
              title="Testing and Deployment"
              content="Before the final release, the project undergoes rigorous testing to ensure everything works flawlessly. We also assist you with deployment and product launch."
            />
          </motion.div>
        </div>

        <motion.div 
          className="text-center mt-16"
          variants={ctaVariants}
        >
          <h3 className="text-2xl font-semibold text-white mb-6">Ready to get started? Contact us and see how we can help you!</h3>
          <Button 
            variant="primary" 
            size="lg"
            onClick={scrollToContact}
          >
            Contact Us
          </Button>
        </motion.div>
      </motion.div>
    </section>
  );
}
