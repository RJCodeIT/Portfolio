'use client';

import { FaReact, FaCode, FaMobile, FaPlug } from 'react-icons/fa';
import ServiceCard from '../components/ui/ServiceCard';
import Button from '../components/ui/Button';
import Link from 'next/link';
import { motion } from 'framer-motion';

export default function ServicesContainer() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    }
  };

  const services = [
    {
      icon: <FaReact />,
      title: "Web Applications",
      description: "We build modern web applications tailored to your business needs.",
      benefits: [
        "Interactive and scalable applications using React and Next.js",
        "Secure and efficient backends with Node.js and MongoDB",
        "Responsive designs for all devices, ensuring a seamless user experience"
      ]
    },
    {
      icon: <FaCode />,
      title: "Websites",
      description: "Custom websites designed to represent your brand and engage your audience.",
      benefits: [
        "Pixel-perfect designs for desktop and mobile",
        "SEO-friendly and high-performance websites",
        "Fully customizable, with intuitive CMS integration"
      ]
    },
    {
      icon: <FaMobile />,
      title: "Progressive Web Apps",
      description: "Fast, reliable, and engaging PWAs to bridge the gap between web and mobile.",
      benefits: [
        "Offline functionality and instant loading",
        "Push notifications to keep users engaged",
        "Optimized for performance and cross-platform compatibility"
      ]
    },
    {
      icon: <FaPlug />,
      title: "API Integrations",
      description: "Connect your systems seamlessly with powerful API integrations.",
      benefits: [
        "Integration with third-party services (e.g., payment gateways, CRMs, analytics)",
        "Custom API development to meet unique business requirements",
        "Secure and scalable solutions for smooth data flow"
      ]
    }
  ];

  return (
    <section id="services" className="min-h-screen py-20 bg-gray-50 dark:bg-gray-900">
      <motion.div 
        className="container mx-auto px-4"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
      >
        {/* Section Header */}
        <motion.div 
          className="text-center mb-16"
          variants={itemVariants}
        >
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Our Expertise
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Explore our range of professional services, tailored to bring your ideas to life.
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {services.map((service, index) => (
            <motion.div 
              key={index}
              variants={itemVariants}
            >
              <ServiceCard
                icon={service.icon}
                title={service.title}
                description={service.description}
                benefits={service.benefits}
              />
            </motion.div>
          ))}
        </div>

        {/* CTA Section */}
        <motion.div 
          className="text-center"
          variants={itemVariants}
        >
          <h3 className="text-2xl font-semibold text-gray-800 dark:text-white mb-6">
            Have a project in mind? Let&apos;s bring it to life!
          </h3>
          <Link href="#contact">
            <Button
              variant="primary"
              size="lg"
            >
              Contact Us Today
            </Button>
          </Link>
        </motion.div>
      </motion.div>
    </section>
  );
}