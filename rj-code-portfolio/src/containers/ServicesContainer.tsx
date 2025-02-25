"use client";

import { useServices } from "../const/services";
import ServiceCard from "../components/ui/ServiceCard";
import Button from "../components/ui/Button";
import Link from "next/link";
import Image from "next/image";
import { useTranslation } from "react-i18next";

export default function ServicesContainer() {
  const { t } = useTranslation("services");
  const services = useServices();

  const scrollToContact = () => {
    const contactSection = document.getElementById("contact");
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="services" className="min-h-screen py-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-20">
          <h2 className="text-4xl font-bold text-white mb-6">
            {t("title")}
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto leading-relaxed">
            {t("subtitle")}
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mb-20">
          {services.map((service, index) => (
            <ServiceCard
              key={index}
              icon={
                <Image
                  src={service.icon}
                  alt={service.title}
                  width={40}
                  height={40}
                  className="dark:invert"
                />
              }
              title={service.title}
              description={service.description}
              benefits={service.benefits}
              caption={service.caption}
            />
          ))}
        </div>
        <div className="text-center">
          <h3 className="text-2xl font-semibold text-white mb-8">
            {t("ctaTitle")}
          </h3>
          <Link href="#contact">
            <Button
              variant="primary"
              size="lg"
              className="font-medium"
              onClick={scrollToContact}
            >
              {t("ctaButton")}
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
