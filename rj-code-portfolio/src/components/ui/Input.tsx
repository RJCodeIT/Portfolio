'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';

interface InputProps {
  label: string;
  placeholder: string;
  type?: string;
  required?: boolean;
  value?: string;
  name?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
}

export default function Input({
  label,
  placeholder,
  type = 'text',
  required = false,
  value,
  name,
  onChange,
}: InputProps) {
  const [isFocused, setIsFocused] = useState(false);
  const isTextArea = type === 'textarea';
  const InputComponent = isTextArea ? 'textarea' : 'input';

  return (
    <motion.div 
      className="flex flex-col gap-2 w-full relative"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      whileHover={{ scale: 1.01 }}
    >
      <motion.div 
        className="flex items-center gap-2"
        animate={{ color: isFocused ? '#2563eb' : '#374151' }}
        transition={{ duration: 0.2 }}
      >
        <motion.label className="font-medium">
          {label}
          {required && (
            <motion.span 
              className="text-red-500 ml-1"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
            >
              *
            </motion.span>
          )}
        </motion.label>
      </motion.div>

      <div className="relative">
        <motion.div
          className="absolute -inset-0.5 rounded-lg bg-gradient-to-r from-blue-600 to-indigo-600 opacity-0"
          initial={false}
          animate={{ opacity: isFocused ? 0.1 : 0 }}
          transition={{ duration: 0.2 }}
        />
        <InputComponent
          className={`
            w-full px-4 py-2 bg-white border border-gray-300 rounded-md
            focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent
            relative z-10
            ${isTextArea ? 'min-h-[120px] resize-none' : 'h-10'}
            transition-all duration-200
            ${isFocused ? 'border-blue-500 shadow-lg shadow-blue-500/20' : ''}
          `}
          placeholder={placeholder}
          type={!isTextArea ? type : undefined}
          required={required}
          value={value}
          name={name}
          onChange={onChange}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
        />
        <motion.div
          className="absolute inset-0 rounded-md pointer-events-none"
          animate={{
            boxShadow: isFocused 
              ? '0 0 0 2px rgba(37, 99, 235, 0.2)' 
              : '0 0 0 0px rgba(37, 99, 235, 0)'
          }}
          transition={{ duration: 0.2 }}
        />
      </div>
    </motion.div>
  );
}