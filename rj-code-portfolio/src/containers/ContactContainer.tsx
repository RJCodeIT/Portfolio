"use client";

import React, { useState, useEffect, useMemo } from "react";
import { motion } from "framer-motion";
import ContactForm from "./ContactForm";
import ContactInformation from "./ContactInformation";
import { useTranslation } from "react-i18next";

function ContactContainer() {
  const { t } = useTranslation("contact");

  /** -----------------------------
   *  PARTICLES (light optimization)
   * ------------------------------*/
  const [particles, setParticles] = useState<
    Array<{ left: string; top: string; delay: number; duration: number }>
  >([]);

  useEffect(() => {
    setParticles(
      Array.from({ length: 12 }).map(() => ({
        left: `${Math.random() * 100}%`,
        top: `${Math.random() * 100}%`,
        delay: Math.random() * 2,
        duration: 4 + Math.random() * 3,
      }))
    );
  }, []);

  /** -----------------------------
   *  VARIANTS (memoized)
   * ------------------------------*/
  const containerVariants = useMemo(
    () => ({
      hidden: { opacity: 0 },
      visible: {
        opacity: 1,
        transition: {
          staggerChildren: 0.2,
          delayChildren: 0.3,
        },
      },
    }),
    []
  );

  return (
    <section
      id="contact"
      className="w-full py-32 relative overflow-hidden"
      aria-label="Skontaktuj się z nami - formularz kontaktowy i dane kontaktowe"
      itemScope
      itemType="https://schema.org/ContactPage"
    >
      {/* Enhanced Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute top-1/3 right-0 w-[500px] h-[500px] bg-primary/15 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.4, 1],
            x: [0, -100, 0],
            opacity: [0.15, 0.25, 0.15],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />

        <motion.div
          className="absolute bottom-1/3 left-0 w-[500px] h-[500px] bg-secondary/15 rounded-full blur-3xl"
          animate={{
            scale: [1.4, 1, 1.4],
            x: [0, 100, 0],
            opacity: [0.25, 0.15, 0.25],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />

        {particles.map((p, i) => (
          <motion.div
            key={i}
            className="absolute w-1.5 h-1.5 bg-primary/40 rounded-full"
            style={{ left: p.left, top: p.top }}
            animate={{
              y: [0, -40, 0],
              opacity: [0.2, 0.6, 0.2],
              scale: [1, 1.5, 1],
            }}
            transition={{
              duration: p.duration,
              repeat: Infinity,
              delay: p.delay,
            }}
          />
        ))}
      </div>

      {/* Content */}
      <motion.div
        className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
      >
        {/* Title */}
        <motion.div className="text-center mb-10 md:mb-20">
          <h2
            className="text-5xl md:text-6xl font-bold mb-6 text-gray-100 bg-clip-text text-transparent bg-gradient-to-r from-primary via-secondary to-accent animate-gradient bg-[length:200%_auto]"
            itemProp="headline"
          >
            {t("title")}
          </h2>

          <p
            className="text-gray-400 max-w-2xl mx-auto text-xl md:text-2xl leading-relaxed"
            itemProp="description"
          >
            {t("description")}
          </p>

          <meta
            itemProp="keywords"
            content="kontakt IT, rozwiązania webowe, strony internetowe, aplikacje mobilne, konsultacja IT"
          />
        </motion.div>

        {/* GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 items-stretch">
          {/* FORM */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            itemProp="mainContentOfPage"
          >
            <ContactForm />
          </motion.div>

          {/* CONTACT INFO */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
            itemProp="contactPoint"
            itemScope
            itemType="https://schema.org/ContactPoint"
          >
            <ContactInformation />
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}

export default React.memo(ContactContainer);
