"use client";

import { useTranslation } from "react-i18next";
import { memo, useCallback, useMemo, useRef } from "react";
import { useServices } from "../const/services";
import ServiceCard from "../components/ui/ServiceCard";
import Button from "../components/ui/Button";
import Link from "next/link";
import Image from "next/image";
import { motion, useInView } from "framer-motion";

function ServicesContainerComponent() {
  const { t } = useTranslation("services");
  const rawServices = useServices();

  // Prevent array regeneration
  const services = useMemo(() => rawServices, [rawServices]);

  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const scrollToContact = useCallback(() => {
    const contactSection = document.getElementById("contact");
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" });
    }
  }, []);

  return (
    <section
      id="services"
      className="relative min-h-screen py-24 overflow-hidden"
      ref={ref}
      aria-label="Profesjonalne usługi IT dla firm"
    >
      {/* Enhanced Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute top-1/4 right-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.3, 1],
            x: [0, -50, 0],
            opacity: [0.1, 0.2, 0.1],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute bottom-1/4 left-0 w-96 h-96 bg-secondary/10 rounded-full blur-3xl"
          animate={{
            scale: [1.3, 1, 1.3],
            x: [0, 50, 0],
            opacity: [0.2, 0.1, 0.2],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <div className="absolute inset-0 bg-[linear-gradient(rgba(138,43,226,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(138,43,226,0.02)_1px,transparent_1px)] bg-[size:80px_80px]" />
      </div>

      <div className="container mx-auto px-4 relative">
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <h2
            className="text-5xl md:text-6xl font-bold text-white mb-6 bg-clip-text text-transparent bg-gradient-to-r from-primary via-secondary to-accent animate-gradient bg-[length:200%_auto]"
            itemProp="headline"
          >
            {t("title")}
          </h2>
          <p
            className="text-xl md:text-2xl text-gray-400 max-w-3xl mx-auto leading-relaxed"
            itemProp="description"
          >
            {t("subtitle")}
          </p>

          <meta
            itemProp="keywords"
            content="strony internetowe, aplikacje webowe, aplikacje mobilne, PWA, React Native, Next.js, integracje API"
          />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mb-20">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 50, scale: 0.9 }}
              animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
              transition={{ duration: 0.6, delay: index * 0.15 }}
            >
              <ServiceCard
                icon={
                  <Image
                    src={service.icon}
                    alt={service.title}
                    width={40}
                    height={40}
                    className="brightness-0 invert opacity-90"
                  />
                }
                title={service.title}
                description={service.description}
                benefits={service.benefits}
                caption={service.caption}
                itemProp="offers"
                itemScope
                itemType="https://schema.org/Service"
              />
            </motion.div>
          ))}
        </div>

        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <h3 className="text-2xl md:text-3xl font-semibold text-white mb-8">
            {t("ctaTitle")}
          </h3>
          <Link href="#contact">
            <Button
              variant="primary"
              size="lg"
              className="font-medium shadow-glow-primary hover:shadow-card-hover transition-all duration-300"
              onClick={scrollToContact}
            >
              {t("ctaButton")}
            </Button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}

export default memo(ServicesContainerComponent);
