"use client";

import React, { useState } from "react";
import Input from "../components/ui/Input";
import Button from "../components/ui/Button";
import { motion } from "framer-motion";
import emailjs from "emailjs-com";
import confetti, { Options } from "canvas-confetti";
import { useTranslation } from "react-i18next";

export default function ContactForm() {
  const { t } = useTranslation("contact");
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    message: "",
  });

  const [isSending, setIsSending] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);

  const successAnimation = {
    scale: [1, 1.2, 1],
    rotate: [0, 10, -10, 0],
    transition: { duration: 0.6 },
  };

  const errorAnimation = {
    x: [0, -10, 10, -10, 10, 0],
    transition: { duration: 0.5 },
  };

  const triggerConfetti = () => {
    const count = 200;
    const defaults: Options = {
      origin: { y: 0.7 },
    };

    function fire(particleRatio: number, opts: Options) {
      confetti({
        ...defaults,
        ...opts,
        particleCount: Math.floor(count * particleRatio),
      });
    }

    fire(0.25, {
      spread: 26,
      startVelocity: 55,
    });

    fire(0.2, {
      spread: 60,
    });

    fire(0.35, {
      spread: 100,
      decay: 0.91,
      scalar: 0.8,
    });

    fire(0.1, {
      spread: 120,
      startVelocity: 25,
      decay: 0.92,
      scalar: 1.2,
    });

    fire(0.1, {
      spread: 120,
      startVelocity: 45,
    });
  };

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.fullName || !formData.email || !formData.message) {
      setError(true);
      return;
    }

    setIsSending(true);
    setSuccess(false);
    setError(false);

    try {
      await emailjs.send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
        {
          fullName: formData.fullName,
          reply_to: formData.email,
          message: formData.message,
        },
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!
      );

      setIsSending(false);
      setSuccess(true);
      setIsAnimating(true);
      triggerConfetti();
      setFormData({ fullName: "", email: "", message: "" });
    } catch {
      setIsSending(false);
      setError(true);
      setIsAnimating(true);
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" },
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
        {t("contactForm.title")}
      </motion.h3>
      <form className="flex-grow" onSubmit={handleSubmit}>
        <div className="space-y-6">
          <div className="grid grid-cols-1 gap-6">
            <motion.div variants={itemVariants}>
              <Input
                label={t("contactForm.fields.fullName.label")}
                placeholder={t("contactForm.fields.fullName.placeholder")}
                required
                value={formData.fullName}
                onChange={handleInputChange}
                name="fullName"
              />
            </motion.div>

            <motion.div variants={itemVariants}>
              <Input
                label={t("contactForm.fields.email.label")}
                placeholder={t("contactForm.fields.email.placeholder")}
                type="email"
                required
                value={formData.email}
                onChange={handleInputChange}
                name="email"
              />
            </motion.div>

            <motion.div variants={itemVariants}>
              <Input
                label={t("contactForm.fields.message.label")}
                placeholder={t("contactForm.fields.message.placeholder")}
                type="textarea"
                required
                value={formData.message}
                onChange={handleInputChange}
                name="message"
              />
            </motion.div>
          </div>
        </div>
        <motion.div
          variants={itemVariants}
          animate={
            isAnimating
              ? success
                ? successAnimation
                : error
                ? errorAnimation
                : {}
              : {}
          }
          onAnimationComplete={() => setIsAnimating(false)}
        >
          <Button
            type="submit"
            variant="primary"
            size="lg"
            className="w-full mt-8"
            disabled={isSending}
          >
            {isSending ? t("sending") : t("button")}
          </Button>
        </motion.div>
      </form>
    </motion.div>
  );
}
