"use client";

import React, { memo, useMemo } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { useTranslation } from "react-i18next";

const ICONS = {
  email: "/envelope.svg",
  phone: "/phone.svg",
  linkedin: "/linkedin.svg",
  github: "/github.svg",
} as const;

const CONTACT_ITEMS = [
  { key: "email", link: "mailto:rjcodeit@gmail.com" },
  { key: "phone", link: "" },
  { key: "linkedin", link: "https://www.linkedin.com/company/rj-code" },
  { key: "github", link: "https://github.com/RJCodeIT" },
] as const;

function ContactInformationComponent() {
  const { t } = useTranslation("contact");

  // Stable animation variants
  const contactItemVariants = useMemo(
    () => ({
      hidden: { opacity: 0, x: -20 },
      visible: {
        opacity: 1,
        x: 0,
        transition: { duration: 0.5, ease: "easeOut" },
      },
    }),
    []
  );

  return (
    <motion.div
      className="backdrop-blur-lg bg-white/10 rounded-2xl shadow-2xl p-8 hover:shadow-3xl transition-all duration-300 border border-white/20 flex flex-col h-full"
      variants={contactItemVariants}
    >
      <motion.h3
        className="text-2xl font-semibold mb-8 text-gray-100"
        variants={contactItemVariants}
      >
        {t("contactInfo.title")}
      </motion.h3>

      <div className="space-y-10 flex-grow">
        <div className="space-y-8">
          {CONTACT_ITEMS.map(({ key, link }) => (
            <motion.div
              key={key}
              className="flex items-center space-x-6 group"
              variants={contactItemVariants}
              whileHover={{ x: 8 }}
            >
              {/* ICON */}
              <div className="flex-shrink-0 w-14 h-14 flex items-center justify-center rounded-full bg-white/5 group-hover:bg-white/10 transition-colors duration-300 backdrop-blur-sm border border-white/10">
                <Image
                  src={ICONS[key]}
                  alt={`${t(`contactInfo.${key}.label`)} Icon`}
                  width={32}
                  height={32}
                  className="brightness-0 invert"
                />
              </div>

              <div>
                <p className="text-sm text-gray-400 mb-1">
                  {t(`contactInfo.${key}.label`)}
                </p>

                {link ? (
                  <a
                    href={link}
                    className="text-gray-200 hover:text-blue-400 transition-colors duration-200 text-lg"
                  >
                    {t(`contactInfo.${key}.value`)}
                  </a>
                ) : (
                  <p className="font-medium text-lg text-gray-200">
                    {t(`contactInfo.${key}.value`)}
                  </p>
                )}
              </div>
            </motion.div>
          ))}
        </div>

        {/* NOTE */}
        <motion.div
          className="pt-8 border-t border-white/10"
          variants={contactItemVariants}
        >
          <p className="text-gray-400">{t("contactInfo.note")}</p>
        </motion.div>
      </div>
    </motion.div>
  );
}

export default memo(ContactInformationComponent);
