"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";

const envelopeIcon = "/envelope.svg";
const githubIcon = "/github.svg";
const linkedinIcon = "/linkedin.svg";
const phoneIcon = "/phone.svg";

export default function ContactInformation() {
  const contactItemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
  };

  return (
    <motion.div
      className="backdrop-blur-lg bg-white/10 rounded-2xl shadow-2xl p-8 hover:shadow-3xl transition-all duration-300 border border-white/20 flex flex-col h-full"
      variants={contactItemVariants}
    >
      <motion.h3
        className="text-2xl font-semibold mb-8 text-gray-100"
        variants={contactItemVariants}
      >
        Contact Information
      </motion.h3>
      <div className="space-y-10 flex-grow">
        <div className="space-y-8">
          {[
            {
              icon: envelopeIcon,
              label: "Email us at",
              value: "rjcodeit@gmail.com",
              link: "mailto:rjcodeit@gmail.com",
            },
            {
              icon: phoneIcon,
              label: "Call us at",
              value: "+48 698 952 035 or +48 664 082 178",
              link: "",
            },
            {
              icon: linkedinIcon,
              label: "Connect with us",
              value: "LinkedIn Profile",
              link: "https://www.linkedin.com/company/rj-code",
            },
            {
              icon: githubIcon,
              label: "Check our work",
              value: "GitHub Projects",
              link: "https://github.com/RJCodeIT",
            },
          ].map((item, index) => (
            <motion.div
              key={index}
              className="flex items-center space-x-6 group"
              variants={contactItemVariants}
              whileHover={{ x: 8 }}
            >
              <div className="flex-shrink-0 w-14 h-14 flex items-center justify-center rounded-full bg-white/5 group-hover:bg-white/10 transition-colors duration-300 backdrop-blur-sm border border-white/10">
                <Image
                  src={item.icon}
                  alt={`${item.label} Icon`}
                  width={32}
                  height={32}
                  className="brightness-0 invert"
                />
              </div>
              <div>
                <p className="text-sm text-gray-400 mb-1">{item.label}</p>
                {item.link ? (
                  <a
                    href={item.link}
                    className="text-gray-200 hover:text-blue-400 transition-colors duration-200 text-lg"
                  >
                    {item.value}
                  </a>
                ) : (
                  <p className="font-medium text-lg text-gray-200">
                    {item.value}
                  </p>
                )}
              </div>
            </motion.div>
          ))}
        </div>
        <motion.div
          className="pt-8 border-t border-white/10"
          variants={contactItemVariants}
        >
          <p className="text-gray-400">
            Have a question or an idea? Reach out via the form or contact
            details above, and we&apos;ll get back to you soon!
          </p>
        </motion.div>
      </div>
    </motion.div>
  );
}
