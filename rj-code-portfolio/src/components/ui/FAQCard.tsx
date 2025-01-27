"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface FAQCardProps {
  question: string;
  answer: string;
  preserveWhitespace?: boolean;
}

export default function FAQCard({
  question,
  answer,
  preserveWhitespace = false,
}: FAQCardProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div 
      className={`w-full backdrop-blur-md border border-white/10 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 
      ${isOpen ? 'bg-white/10' : 'bg-white/5'}`}
    >
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full p-8 text-left flex justify-between items-center gap-8 group"
      >
        <motion.h3 
          className="text-lg font-semibold text-white group-hover:translate-x-1 transition-transform duration-300"
        >
          {question}
        </motion.h3>
        <motion.div
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ 
            type: "spring",
            stiffness: 300,
            damping: 20
          }}
          className="w-6 h-6 text-white/70 flex-shrink-0 group-hover:text-white transition-colors duration-300"
        >
          <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M6 9l6 6 6-6" />
          </svg>
        </motion.div>
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ 
              height: "auto", 
              opacity: 1,
            }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ 
              height: {
                type: "spring",
                stiffness: 500,
                damping: 40,
              },
              opacity: { duration: 0.2 }
            }}
            className="overflow-hidden relative"
          >
            <motion.div
              initial={{ x: -20 }}
              animate={{ x: 0 }}
              transition={{ duration: 0.3, delay: 0.1 }}
            >
              <p
                className={`px-8 pb-8 text-white/80 leading-relaxed ${
                  preserveWhitespace ? "whitespace-pre-line" : ""
                }`}
              >
                {answer}
              </p>
            </motion.div>
            <motion.div
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              exit={{ scaleX: 0 }}
              transition={{ duration: 0.3 }}
              className="absolute left-8 right-8 top-0 h-px bg-white/10"
            />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
