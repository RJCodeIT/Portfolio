"use client";

import React, { useState } from "react";
import Input from "../components/ui/Input";
import Button from "../components/ui/Button";
import Checkbox from "../components/ui/Checkbox";
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
    privacyPolicy: false,
  });

  const [isSending, setIsSending] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [privacyPolicyError, setPrivacyPolicyError] = useState(false);
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
    const { name, value, type } = e.target;
    const val = type === "checkbox" ? (e.target as HTMLInputElement).checked : value;
    
    setFormData((prev) => ({
      ...prev,
      [name]: val,
    }));
    
    if (name === "privacyPolicy" && val === true) {
      setPrivacyPolicyError(false);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted");
    console.log("Environment variables:", {
      serviceId: process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID,
      templateId: process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID,
      publicKey: process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY ? "[exists]" : "[missing]",
    });

    if (!formData.fullName || !formData.email || !formData.message) {
      console.log("Form validation failed: missing required fields");
      setError(true);
      return;
    }
    
    if (!formData.privacyPolicy) {
      console.log("Form validation failed: privacy policy not accepted");
      setPrivacyPolicyError(true);
      return;
    }

    setIsSending(true);
    setSuccess(false);
    setError(false);
    console.log("Sending email with data:", {
      fullName: formData.fullName,
      email: formData.email,
      messageLength: formData.message.length,
    });

    try {
      // Inicjalizacja EmailJS przed wysłaniem
      emailjs.init(process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!);
      
      // Przygotowanie parametrów zgodnie z dokumentacją EmailJS
      // Dodajemy różne nazwy parametrów, które mogą być używane w szablonie
      const templateParams = {
        // Standardowe parametry
        from_name: formData.fullName,
        name: formData.fullName,           // alternatywna nazwa
        fullName: formData.fullName,       // alternatywna nazwa
        
        // Email
        reply_to: formData.email,
        email: formData.email,             // alternatywna nazwa
        
        // Wiadomość
        message: formData.message,
        content: formData.message,         // alternatywna nazwa
        
        // Dodatkowe informacje
        subject: "Wiadomość z formularza kontaktowego",
        to_name: "RJ Code IT",
      };
      
      // Wysłanie wiadomości
      const response = await emailjs.send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
        templateParams,
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!
      );
      
      console.log("Email sent successfully:", response);
      setIsSending(false);
      setSuccess(true);
      setIsAnimating(true);
      triggerConfetti();
      setFormData({ fullName: "", email: "", message: "", privacyPolicy: false });
    } catch (error) {
      console.error("Failed to send email:", error);
      
      // Szczegółowa diagnostyka błędu
      const emailJSError = error as { status?: number };
      if (emailJSError && emailJSError.status === 412) {
        console.error("Precondition Failed (412): Sprawdź, czy nazwy parametrów w szablonie EmailJS są zgodne z wysłanymi.");
        console.log("Szablon powinien zawierać zmienne: {{from_name}}, {{reply_to}}, {{message}} lub podobne.");
      }
      
      setIsSending(false);
      setError(true);
      setIsAnimating(true);
      
      // Ustawiamy komunikat o błędzie dla użytkownika
      setErrorMessage(t("error"));
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
            
            <motion.div variants={itemVariants} className="mt-4">
              <Checkbox
                label={t("contactForm.fields.privacyPolicy.label")}
                required
                checked={formData.privacyPolicy}
                onChange={handleInputChange}
                name="privacyPolicy"
                error={t("contactForm.fields.privacyPolicy.error")}
                showError={privacyPolicyError}
                linkText={t("contactForm.fields.privacyPolicy.linkText")}
                linkHref="/privacyPolicy"
              />
            </motion.div>
          </div>
        </div>
        <motion.div
          variants={itemVariants}
          animate={{
            ...isAnimating
              ? success
                ? successAnimation
                : error
                ? errorAnimation
                : {}
              : {}
          }}
          onAnimationComplete={() => setIsAnimating(false)}
        >
          {error && errorMessage && (
            <div className="bg-red-500/20 border border-red-500/50 text-white p-4 rounded-lg mb-4">
              <p>{errorMessage}</p>
            </div>
          )}
          
          {success && (
            <div className="bg-green-500/20 border border-green-500/50 text-white p-4 rounded-lg mb-4">
              <p>{t("success")}</p>
            </div>
          )}
          
          <Button
            type="submit"
            variant="primary"
            size="lg"
            className="w-full mt-4"
            disabled={isSending}
          >
            {isSending ? t("sending") : t("button")}
          </Button>
        </motion.div>
      </form>
    </motion.div>
  );
}
