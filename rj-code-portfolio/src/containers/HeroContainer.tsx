"use client";
import { motion } from "framer-motion";
import Button from "@/components/ui/Button";
import LanguageSwitcher from "@/components/ui/LanguageSwitcher";
import { useTranslation } from "react-i18next";

export default function HeroContainer() {
  const { t } = useTranslation("hero");

  const scrollToAbout = () => {
    const aboutSection = document.getElementById("about");
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="h-screen w-full flex flex-col items-center justify-center text-white px-4">
      <LanguageSwitcher />
      <motion.div
        className="max-w-4xl text-center"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
      >
        <motion.h1
          className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 1, ease: "easeOut" }}
        >
          <motion.div
            className="block bg-gradient-to-r from-[#8a2be2] via-[#4b0082] to-[#191970] bg-clip-text text-transparent"
            initial={{ scale: 0.8 }}
            animate={{ scale: 1 }}
            transition={{
              duration: 0.8,
              yoyo: Infinity,
              ease: "easeInOut",
              repeatDelay: 1,
            }}
          >
            {t("title.gradient")}
          </motion.div>
          <motion.div className="block">
            {t("title.solid")}
          </motion.div>
        </motion.h1>
        <motion.p
          className="text-xl md:text-2xl text-gray-300 mb-8 max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 1, ease: "easeOut" }}
        >
          {t("subtitle")}
        </motion.p>
        <motion.div
          initial={{ scale: 0.9 }}
          animate={{ scale: 1 }}
          transition={{
            duration: 0.8,
            yoyo: Infinity,
            ease: "easeInOut",
          }}
        >
          <Button variant="primary" size="lg" onClick={scrollToAbout}>
            {t("ctaButton")}
          </Button>
        </motion.div>
      </motion.div>
    </section>
  );
}
