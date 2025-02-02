"use client";
import { useTranslation } from "react-i18next";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const LanguageSwitcher = () => {
  const { i18n } = useTranslation();
  const [language, setLanguage] = useState("en");

  useEffect(() => {
    const storedLang = localStorage.getItem("language");
    if (storedLang) {
      setLanguage(storedLang);
      i18n.changeLanguage(storedLang);
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const toggleLanguage = () => {
    const newLang = language === "pl" ? "en" : "pl";
    localStorage.setItem("language", newLang);
    setLanguage(newLang);
    i18n.changeLanguage(newLang);
  };

  return (
    <motion.div
      onClick={toggleLanguage}
      className="fixed top-6 right-6 flex items-center justify-center w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 text-white font-semibold shadow-lg cursor-pointer backdrop-blur-md transition duration-300 z-50 pointer-events-auto"
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
    >
      {language === "pl" ? "EN" : "PL"}
    </motion.div>
  );
};

export default LanguageSwitcher;
