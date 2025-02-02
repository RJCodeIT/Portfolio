"use client";

import React from "react";
import HowWeWorkCard from "../components/ui/HowWeWorkCard";
import Button from "../components/ui/Button";
import { motion } from "framer-motion";
import { useHowWeWorkItems, HowWeWorkStep } from "../const/howWeWorkItems";
import { useTranslation } from "react-i18next";

export default function HowWeWorkContainer() {
  const { t } = useTranslation("howWeWork");
  const howWeWorkItems = useHowWeWorkItems();

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
    const contactSection = document.getElementById("contact");
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" });
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
        <motion.h2 className="text-5xl md:text-6xl font-bold text-center text-white mb-6" variants={titleVariants}>
          {t("title")}
        </motion.h2>
        <motion.p className="text-xl text-white/80 text-center mb-20 max-w-3xl mx-auto" variants={subtitleVariants}>
          {t("subtitle")}
        </motion.p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-10">
          {howWeWorkItems.map((item: HowWeWorkStep, index: number) => (
            <motion.div key={index} variants={cardVariants} custom={index}>
              <HowWeWorkCard
                stepNumber={item.stepNumber}
                icon={item.icon}
                title={item.title}
                content={item.content}
              />
            </motion.div>
          ))}
        </div>

        <motion.div className="text-center mt-16" variants={ctaVariants}>
          <h3 className="text-2xl font-semibold text-white mb-6">
            {t("ctaTitle")}
          </h3>
          <Button variant="primary" size="lg" onClick={scrollToContact}>
            {t("ctaButton")}
          </Button>
        </motion.div>
      </motion.div>
    </section>
  );
}
