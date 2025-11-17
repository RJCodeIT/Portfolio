"use client";

import React, { useMemo, useCallback, memo } from "react";
import HowWeWorkCard from "../components/ui/HowWeWorkCard";
import Button from "../components/ui/Button";
import { motion } from "framer-motion";
import { useHowWeWorkItems, HowWeWorkStep } from "../const/howWeWorkItems";
import { useTranslation } from "react-i18next";

function HowWeWorkContainerComponent() {
  const { t } = useTranslation("howWeWork");

  // Stable array
  const howWeWorkItems = useHowWeWorkItems();

  // Memoized variants (prevent unnecessary rerenders)
  const containerVariants = useMemo(
    () => ({
      hidden: { opacity: 0 },
      visible: {
        opacity: 1,
        transition: {
          staggerChildren: 0.2,
          delayChildren: 0.3,
          duration: 1.2,
        },
      },
    }),
    []
  );

  const titleVariants = useMemo(
    () => ({
      hidden: { opacity: 0, y: -30 },
      visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 1.2, ease: "easeOut" },
      },
    }),
    []
  );

  const subtitleVariants = useMemo(
    () => ({
      hidden: { opacity: 0 },
      visible: {
        opacity: 1,
        transition: { duration: 1.2, delay: 0.2, ease: "easeOut" },
      },
    }),
    []
  );

  const cardVariants = useMemo(
    () => ({
      hidden: { opacity: 0, x: -50 },
      visible: {
        opacity: 1,
        x: 0,
        transition: { duration: 1.2, ease: "easeOut" },
      },
    }),
    []
  );

  const ctaVariants = useMemo(
    () => ({
      hidden: { opacity: 0, y: 20 },
      visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 1.2, delay: 0.6, ease: "easeOut" },
      },
    }),
    []
  );

  const scrollToContact = useCallback(() => {
    const contactSection = document.getElementById("contact");
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" });
    }
  }, []);

  return (
    <section
      id="howWeWork"
      className="relative w-full py-24 overflow-hidden"
      aria-label="Metodologia realizacji projektów IT"
    >
      {/* Enhanced Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute top-0 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl"
          animate={{ scale: [1, 1.2, 1], y: [0, 50, 0], opacity: [0.1, 0.15, 0.1] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute bottom-0 right-1/4 w-96 h-96 bg-accent/10 rounded-full blur-3xl"
          animate={{ scale: [1.2, 1, 1.2], y: [0, -50, 0], opacity: [0.15, 0.1, 0.15] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        />

        {/* Animated Lines */}
        <svg className="absolute inset-0 w-full h-full opacity-10">
          <motion.line
            x1="10%"
            y1="0%"
            x2="90%"
            y2="100%"
            stroke="url(#gradient1)"
            strokeWidth="2"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
          />
          <defs>
            <linearGradient id="gradient1" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#8a2be2" stopOpacity="0" />
              <stop offset="50%" stopColor="#4b0082" stopOpacity="1" />
              <stop offset="100%" stopColor="#191970" stopOpacity="0" />
            </linearGradient>
          </defs>
        </svg>
      </div>

      <motion.div
        className="container mx-auto px-4 sm:px-6 lg:px-8 relative"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        itemScope
        itemType="https://schema.org/HowTo"
      >
        <motion.h2
          className="text-5xl md:text-6xl lg:text-7xl font-bold text-center text-white mb-6 bg-clip-text text-transparent bg-gradient-to-r from-primary via-secondary to-accent animate-gradient bg-[length:200%_auto]"
          variants={titleVariants}
          itemProp="headline"
        >
          {t("title")}
        </motion.h2>

        <motion.p
          className="text-xl md:text-2xl text-white/80 text-center mb-20 max-w-3xl mx-auto"
          variants={subtitleVariants}
          itemProp="description"
        >
          {t("subtitle")}
        </motion.p>

        <meta
          itemProp="keywords"
          content="metodologia projektów IT, proces tworzenia aplikacji, rozwój oprogramowania, React, Next.js, React Native"
        />

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 lg:gap-10">
          {howWeWorkItems.map((item: HowWeWorkStep, index: number) => (
            <motion.div
              key={item.stepNumber}
              variants={cardVariants}
              custom={index}
              whileHover={{ y: -10, scale: 1.05 }}
              transition={{ duration: 0.3 }}
            >
              <HowWeWorkCard
                stepNumber={item.stepNumber}
                icon={item.icon}
                title={item.title}
                content={item.content}
                itemProp="step"
                itemScope
                itemType="https://schema.org/HowToStep"
              />
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div className="text-center mt-16" variants={ctaVariants}>
          <h3 className="text-2xl md:text-3xl font-semibold text-white mb-6">
            {t("ctaTitle")}
          </h3>

          <Button
            variant="primary"
            size="lg"
            onClick={scrollToContact}
            className="shadow-glow-primary hover:shadow-card-hover transition-all duration-300"
          >
            {t("ctaButton")}
          </Button>
        </motion.div>
      </motion.div>
    </section>
  );
}

export default memo(HowWeWorkContainerComponent);
