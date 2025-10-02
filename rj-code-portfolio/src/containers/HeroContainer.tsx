"use client";
import { motion } from "framer-motion";
import Button from "@/components/ui/Button";
import LanguageSwitcher from "@/components/ui/LanguageSwitcher";
import { useTranslation } from "react-i18next";
import { useState, useEffect } from "react";

export default function HeroContainer() {
  const { t } = useTranslation("hero");
  const [particles, setParticles] = useState<Array<{ left: string; top: string; delay: number; duration: number }>>([]);

  useEffect(() => {
    // Generate particles only on client side to avoid hydration mismatch
    setParticles(
      Array.from({ length: 20 }).map(() => ({
        left: `${Math.random() * 100}%`,
        top: `${Math.random() * 100}%`,
        delay: Math.random() * 2,
        duration: 3 + Math.random() * 4,
      }))
    );
  }, []);

  const scrollToServices = () => {
    const servicesSection = document.getElementById("services");
    if (servicesSection) {
      servicesSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="relative h-screen w-full flex flex-col items-center justify-center text-white px-4 overflow-hidden">
      {/* Animated Background Particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {particles.map((particle, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-primary/30 rounded-full blur-sm"
            style={{
              left: particle.left,
              top: particle.top,
            }}
            animate={{
              y: [0, -30, 0],
              x: [0, 10, 0],
              opacity: [0.3, 0.8, 0.3],
              scale: [1, 1.5, 1],
            }}
            transition={{
              duration: particle.duration,
              repeat: Infinity,
              delay: particle.delay,
              ease: "easeInOut",
            }}
          />
        ))}
      </div>

      {/* Gradient Orbs */}
      <motion.div
        className="absolute top-20 left-10 w-96 h-96 bg-primary/20 rounded-full blur-3xl"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      <motion.div
        className="absolute bottom-20 right-10 w-96 h-96 bg-secondary/20 rounded-full blur-3xl"
        animate={{
          scale: [1.2, 1, 1.2],
          opacity: [0.5, 0.3, 0.5],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      <LanguageSwitcher />
      
      <motion.div
        className="relative max-w-5xl text-center z-10"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
      >
        <motion.h1
          className="text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold mb-8 leading-tight"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 1, ease: "easeOut" }}
        >
          <motion.div
            className="block bg-gradient-to-r from-[#8a2be2] via-[#4b0082] to-[#191970] bg-clip-text text-transparent drop-shadow-2xl"
            style={{
              backgroundSize: '200% 200%',
            }}
            animate={{
              backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
            }}
            transition={{
              duration: 5,
              repeat: Infinity,
              ease: "linear",
            }}
          >
            {t("title.gradient")}
          </motion.div>
          <motion.div 
            className="block mt-2 relative"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            <span className="relative inline-block">
              {t("title.solid")}
              <motion.span
                className="absolute -inset-1 bg-gradient-to-r from-primary/20 via-secondary/20 to-accent/20 blur-xl"
                animate={{
                  opacity: [0.5, 0.8, 0.5],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />
            </span>
          </motion.div>
        </motion.h1>
        
        <motion.p
          className="text-xl md:text-2xl lg:text-3xl text-gray-300 mb-12 max-w-3xl mx-auto leading-relaxed font-light"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 1, ease: "easeOut" }}
        >
          {t("subtitle")}
        </motion.p>
        
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.8, duration: 0.5 }}
          whileHover={{ scale: 1.05 }}
          className="inline-block"
        >
          <Button 
            variant="primary" 
            size="lg" 
            onClick={scrollToServices}
            className="relative overflow-hidden group shadow-glow-primary hover:shadow-card-hover transition-all duration-300"
          >
            <span className="relative z-10">{t("ctaButton")}</span>
            <motion.div
              className="absolute inset-0 bg-shimmer"
              animate={{
                x: ['-100%', '100%'],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                repeatDelay: 1,
              }}
            />
          </Button>
        </motion.div>

      </motion.div>
    </section>
  );
}
