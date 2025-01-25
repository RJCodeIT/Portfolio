'use client';

import FAQCard from '../components/ui/FAQCard';
import { motion } from 'framer-motion';

export default function FAQContainer() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
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

  return (
    <section className="w-full py-24 bg-gradient-to-b from-transparent to-gray-50/50">
      <motion.div 
        className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
      >
        <motion.div 
          className="text-center mb-12"
          variants={itemVariants}
        >
          <h2 className="text-4xl font-bold mb-4">Got questions? We have answers!</h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            Browse through our frequently asked questions or reach out if you need more information.
          </p>
        </motion.div>

        <motion.div 
          className="space-y-4"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <motion.div variants={itemVariants}>
            <FAQCard
              question="What kind of projects do you work on?"
              answer="We work on a wide range of IT projects, from web applications to complex backend systems. We specialize in technologies such as React, Next.js, Node.js, MongoDB, and TailwindCSS."
            />
          </motion.div>

          <motion.div variants={itemVariants}>
            <FAQCard
              question="Can you work on an existing project?"
              answer="Yes, we offer support for developing existing applications, improving their performance, or adding new features."
            />
          </motion.div>

          <motion.div variants={itemVariants}>
            <FAQCard
              question="How long does it take to complete a project?"
              answer="The project timeline depends on its complexity and requirements. Smaller projects typically take a few weeks, while larger ones can take several months."
            />
          </motion.div>

          <motion.div variants={itemVariants}>
            <FAQCard
              question="Do you offer technical support after the project is completed?"
              answer="Yes, we provide technical support, maintenance, and possible updates after the project is deployed."
            />
          </motion.div>

          <motion.div variants={itemVariants}>
            <FAQCard
              question="What technologies do you use?"
              answer={"We use modern technologies, such as:\n• Frontend: React, Next.js, Vite, TailwindCSS\n• Backend: Node.js, Express, MongoDB\n• Others: API integrations, Microsoft Graph"}
              preserveWhitespace={true}
            />
          </motion.div>

          <motion.div variants={itemVariants}>
            <FAQCard
              question="How can I start working with you?"
              answer="Simply contact us through the contact form, and we will respond within 24 hours to discuss the project details."
            />
          </motion.div>
        </motion.div>

        <motion.div 
          className="text-center mt-16"
          variants={itemVariants}
        >
          <p className="text-xl font-medium text-gray-700 mb-6">
            Didn&apos;t find the answer to your question?
          </p>
          <motion.p 
            className="text-gray-600"
            variants={itemVariants}
          >
            Contact us directly and we&apos;ll be happy to help you with any additional questions.
          </motion.p>
        </motion.div>
      </motion.div>
    </section>
  );
}