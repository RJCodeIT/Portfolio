"use client";

import { useTranslation } from "react-i18next";
import { useEffect, useCallback, memo } from "react";
import { motion } from "framer-motion";

function LanguageSwitcherComponent() {
  const { i18n } = useTranslation();

  // Load language once on mount
  useEffect(() => {
    const storedLang = localStorage.getItem("language");
    if (storedLang && storedLang !== i18n.language) {
      i18n.changeLanguage(storedLang);
    }
  }, [i18n]);

  // Toggle language
  const toggleLanguage = useCallback(() => {
    const newLang = i18n.language === "pl" ? "en" : "pl";
    localStorage.setItem("language", newLang);
    i18n.changeLanguage(newLang);
  }, [i18n.language, i18n]);

  return (
    <motion.div
      onClick={toggleLanguage}
      className="fixed top-6 right-6 flex items-center justify-center w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 text-white font-semibold shadow-lg cursor-pointer backdrop-blur-md transition duration-300 z-50 pointer-events-auto"
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
    >
      {i18n.language === "pl" ? "EN" : "PL"}
    </motion.div>
  );
}

export default memo(LanguageSwitcherComponent);
