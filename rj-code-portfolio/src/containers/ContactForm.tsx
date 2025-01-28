"use client";

import React, { useState } from "react";
import Input from "../components/ui/Input";
import Button from "../components/ui/Button";
import { motion } from "framer-motion";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    message: "",
  });

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
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

  return (
    <motion.div
      className="backdrop-blur-lg bg-white/10 rounded-2xl shadow-2xl p-8 hover:shadow-3xl transition-all duration-300 border border-white/20 flex flex-col h-full"
      variants={itemVariants}
    >
      <motion.h3
        className="text-2xl font-semibold mb-8 text-gray-100"
        variants={itemVariants}
      >
        Send Us a Message
      </motion.h3>
      <form className="flex-grow">
        <div className="space-y-6">
          <div className="grid grid-cols-1 gap-6">
            <motion.div variants={itemVariants}>
              <Input
                label="Full Name"
                placeholder="Enter your full name"
                required
                value={formData.fullName}
                onChange={handleInputChange}
                name="fullName"
              />
            </motion.div>

            <motion.div variants={itemVariants}>
              <Input
                label="Email Address"
                placeholder="Enter your email address"
                type="email"
                required
                value={formData.email}
                onChange={handleInputChange}
                name="email"
              />
            </motion.div>

            <motion.div variants={itemVariants}>
              <Input
                label="Message"
                placeholder="Write your message here"
                type="textarea"
                required
                value={formData.message}
                onChange={handleInputChange}
                name="message"
              />
            </motion.div>
          </div>
        </div>
        <motion.div variants={itemVariants}>
          <Button
            type="submit"
            variant="primary"
            size="lg"
            className="w-full mt-8"
          >
            Send Message
          </Button>
        </motion.div>
      </form>
    </motion.div>
  );
}
