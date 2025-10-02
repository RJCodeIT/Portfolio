"use client";

import FAQCard from "../components/ui/FAQCard";
import Button from "../components/ui/Button";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import { useFaqData } from "../const/faq";

export default function FAQContainer() {
  const { t } = useTranslation("faq");
  const faqData = useFaqData();

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
  };

  const scrollToContact = () => {
    const contactSection = document.getElementById("contact");
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section 
      id="faq" 
      className="relative w-full py-32 overflow-hidden"
      aria-label="Często zadawane pytania o nasze usługi IT"
      itemScope
      itemType="https://schema.org/FAQPage"
    >
      {/* Enhanced Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div 
          className="absolute top-1/4 left-1/3 w-96 h-96 bg-primary/10 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.3, 1],
            x: [0, 50, 0],
            y: [0, -50, 0],
            opacity: [0.1, 0.2, 0.1],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div 
          className="absolute bottom-1/4 right-1/3 w-96 h-96 bg-accent/10 rounded-full blur-3xl"
          animate={{
            scale: [1.3, 1, 1.3],
            x: [0, -50, 0],
            y: [0, 50, 0],
            opacity: [0.2, 0.1, 0.2],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        {/* Decorative elements */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(138,43,226,0.05),transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(75,0,130,0.05),transparent_50%)]" />
      </div>

      <motion.div
        className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <motion.div className="text-center mb-16" variants={itemVariants}>
          <h2 
            className="text-5xl md:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-primary via-secondary to-accent animate-gradient bg-[length:200%_auto]"
            itemProp="headline"
          >
            {t("title")}
          </h2>
          <p 
            className="text-white max-w-2xl mx-auto text-xl md:text-2xl leading-relaxed"
            itemProp="description"
          >
            {t("description")}
          </p>
          <meta itemProp="keywords" content="FAQ IT, pytania o strony internetowe, rozwiązania webowe, aplikacje mobilne, wsparcie techniczne" />
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
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
            >
              <FAQCard
                question={faq.question}
                answer={faq.answer}
                preserveWhitespace={faq.preserveWhitespace}
                itemProp="mainEntity"
                itemScope
                itemType="https://schema.org/Question"
              />
            </motion.div>
          ))}
        </div>

        <motion.div className="text-center mt-12" variants={itemVariants}>
          <Button 
            variant="primary" 
            onClick={scrollToContact}
            className="shadow-glow-primary hover:shadow-card-hover transition-all duration-300"
          >
            {t("button")}
          </Button>
        </motion.div>
      </motion.div>
    </section>
  );
}
