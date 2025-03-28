"use client";

import React from "react";
import { motion } from "framer-motion";
import ContactForm from "./ContactForm";
import ContactInformation from "./ContactInformation";
import { useTranslation } from "react-i18next";

export default function ContactContainer() {
  const { t } = useTranslation("contact");
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
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
        <motion.div className="text-center mb-20">
          <h2 className="text-4xl font-bold mb-6 text-gray-100">
            {t("title")}
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            {t("description")}
          </p>
        </motion.div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          <ContactForm />
          <ContactInformation />
        </div>
      </motion.div>
    </section>
  );
}
