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
      className={`w-full border border-gray-200 rounded-lg shadow-sm hover:shadow-lg transition-all duration-300 
      ${isOpen ? 'bg-gray-50' : 'bg-white'}`}
    >
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full p-6 text-left flex justify-between items-center gap-4 group"
      >
        <motion.h3 
          className="text-lg font-semibold text-gray-900 group-hover:translate-x-1 transition-transform duration-300"
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
          className="w-6 h-6 text-gray-500 flex-shrink-0 group-hover:text-gray-700 transition-colors duration-300"
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
                className={`px-6 pb-6 text-gray-600 leading-relaxed ${
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
              className="absolute left-6 right-6 top-0 h-px bg-gray-200"
            />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
