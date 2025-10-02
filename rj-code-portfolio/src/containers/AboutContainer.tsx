'use client';
import React from 'react';
import Image from 'next/image';
import { useTranslation } from 'react-i18next';
import { motion, useInView } from 'framer-motion';
import { Tooltip } from '../components/ui/Tooltip';
import Button from "../components/ui/Button";
import { technologies } from '../const/techItems';

export default function AboutContainer() {
  const { t } = useTranslation('about');
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const scrollToContact = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const whyWorkWithUsItems = [
    'experiencedTeam',
    'modernTools',
    'customerCentric',
    'endToEnd'
  ];

  return (
    <section id="about" className="relative min-h-screen py-32 overflow-hidden" ref={ref}>
      {/* Enhanced Background Effects */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div 
          className="absolute -right-1/4 -top-1/4 w-1/2 h-1/2 bg-primary/5 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.1, 1],
            opacity: [0.05, 0.1, 0.05],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div 
          className="absolute -left-1/4 -bottom-1/4 w-1/2 h-1/2 bg-secondary/5 rounded-full blur-3xl"
          animate={{
            scale: [1.1, 1, 1.1],
            opacity: [0.1, 0.05, 0.1],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        {/* Grid Pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(138,43,226,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(138,43,226,0.03)_1px,transparent_1px)] bg-[size:100px_100px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_50%,black,transparent)]" />
      </div>
      <div className="container mx-auto px-6 relative space-y-20">
        {/* Title Section with Animation */}
        <motion.div 
          className="text-center"
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-6xl md:text-7xl font-bold mb-8 text-white bg-clip-text text-transparent bg-gradient-to-r from-primary via-secondary to-accent animate-gradient bg-[length:200%_auto]">
            {t('whoWeAre')}
          </h2>
          <p className="text-xl md:text-2xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
            {t('whoWeAreDesc')}
          </p>
        </motion.div>

        {/* Cards Grid with Staggered Animation */}
        <div className="grid md:grid-cols-2 gap-20">
          <motion.div 
            className="backdrop-blur-sm rounded-3xl p-10 border border-white/10 bg-white/5 h-full hover:border-primary/30 hover:shadow-card-hover transition-all duration-500 relative overflow-hidden group"
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            whileHover={{ scale: 1.02 }}
          >
            {/* Shimmer Effect on Hover */}
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
              <div className="absolute inset-0 bg-shimmer animate-shimmer" />
            </div>
            <div className="relative z-10">
              <div className="mb-20">
                <h3 className="text-3xl font-bold mb-6 text-white">{t('trustedPartner')}</h3>
                <p className="text-gray-400 leading-relaxed text-lg">
                  {t('trustedPartnerDesc')}
                </p>
              </div>
              <div className="mt-16">
                <h3 className="text-3xl font-bold mb-8 text-white">{t('whyWorkWithUs')}</h3>
                <ul className="space-y-8">
                  {whyWorkWithUsItems.map((item, index) => (
                    <motion.li 
                      key={item} 
                      className="flex items-start space-x-6"
                      initial={{ opacity: 0, x: -20 }}
                      animate={isInView ? { opacity: 1, x: 0 } : {}}
                      transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                    >
                      <span className="flex-shrink-0 w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center shadow-glow-primary">
                        <span className="w-3 h-3 rounded-full bg-primary animate-pulse" />
                      </span>
                      <div>
                        <h4 className="font-semibold text-xl text-white mb-2">
                          {t(`whyWorkWithUsItems.${item}.title`)}
                        </h4>
                        <p className="text-gray-400 text-lg">
                          {t(`whyWorkWithUsItems.${item}.desc`)}
                        </p>
                      </div>
                    </motion.li>
                  ))}
                </ul>
              </div>
            </div>
          </motion.div>
          <motion.div 
            className="backdrop-blur-sm rounded-3xl p-10 border border-white/10 bg-white/5 h-full hover:border-primary/30 hover:shadow-card-hover transition-all duration-500 relative overflow-hidden group"
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            whileHover={{ scale: 1.02 }}
          >
            {/* Shimmer Effect on Hover */}
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
              <div className="absolute inset-0 bg-shimmer animate-shimmer" />
            </div>
            <div className="relative z-10">
              <h3 className="text-3xl font-bold mb-6 text-white">{t('toolsAndTech')}</h3>
              <p className="text-gray-400 mb-10 text-lg leading-relaxed">
                {t('toolsAndTechDesc')}
              </p>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-10 mt-10">
                {technologies.map((tech, index) => (
                  <Tooltip key={tech.key} content={t(`technologies.${tech.key}.description`)}>
                    <motion.div 
                      className="flex flex-col items-center gap-3 p-5 rounded-xl hover:bg-white/5 transition-all duration-300 hover:scale-110 cursor-pointer"
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={isInView ? { opacity: 1, scale: 1 } : {}}
                      transition={{ duration: 0.5, delay: 0.6 + index * 0.05 }}
                      whileHover={{ y: -5 }}
                    >
                      <div className={`w-20 h-20 relative ${tech.className}`}>
                        <Image
                          src={tech.icon}
                          alt={t(`technologies.${tech.key}.name`)}
                          fill
                          className="object-contain"
                        />
                      </div>
                      <span className="text-base font-medium text-gray-300">
                        {t(`technologies.${tech.key}.name`)}
                      </span>
                    </motion.div>
                  </Tooltip>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
        <motion.div 
          className="text-center"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          <p className="text-xl mb-8 text-gray-400">
            {t('callToAction')}
          </p>
          <Button 
            size="lg"
            onClick={scrollToContact}
            className="px-8 py-6 text-lg shadow-glow-primary hover:shadow-card-hover transition-all duration-300"
          >
            {t('contactUs')}
          </Button>
        </motion.div>
      </div>
    </section>
  );
}