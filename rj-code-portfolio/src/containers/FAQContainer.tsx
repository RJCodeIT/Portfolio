'use client';

import FAQCard from '../components/ui/FAQCard';
import Button from '../components/ui/Button';
import { motion } from 'framer-motion';
import { faqData } from '../const/faq';

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

  const scrollToContact = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };
  
  return (
    <section id="faq" className="w-full py-32">
      <motion.div 
        className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <motion.div 
          className="text-center mb-16"
          variants={itemVariants}
        >
          <h2 className="text-4xl font-bold mb-6 bg-clip-text text-white">Got questions? We have answers!</h2>
          <p className="text-white max-w-2xl mx-auto text-lg">
            Browse through our frequently asked questions or reach out if you need more information.
          </p>
        </motion.div>

        <div className="space-y-6">
          {faqData.map((faq, index) => (
            <motion.div 
              key={index} 
              variants={itemVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              custom={index}
            >
              <FAQCard
                question={faq.question}
                answer={faq.answer}
                preserveWhitespace={faq.preserveWhitespace}
              />
            </motion.div>
          ))}
        </div>

        <motion.div 
          className="text-center mt-12"
          variants={itemVariants}
        >
          <Button 
            variant="primary"
            onClick={scrollToContact}
          >
            Ask a Question
          </Button>
        </motion.div>
      </motion.div>
    </section>
  );
}