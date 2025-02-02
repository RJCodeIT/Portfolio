"use client";

import Image from "next/image";
import { useTranslation } from "react-i18next";

const envelopeIcon = "/envelope.svg";
const githubIcon = "/github.svg";
const linkedinIcon = "/linkedin.svg";
const instagramIcon = "/instagram.svg";

export default function Footer() {
  const { t } = useTranslation("footer");
  const handleScroll = (id: string) => {
    if (id === "home") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else {
      const section = document.getElementById(id);
      if (section) {
        section.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer className="from-gray-900 via-gray-800 to-gray-900 text-white relative backdrop-blur-lg bg-white/10 border border-white/20 rounded-2xl shadow-2xl">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-16">
          <div className="space-y-5">
            <h3 className="text-3xl font-bold bg-gradient-to-r from-blue-400 via-purple-400 to-purple-500 bg-clip-text text-transparent">
              {t("brand.name")}
            </h3>
            <p className="text-gray-300 text-sm leading-relaxed">
              {t("brand.description")}
            </p>
          </div>

          <div className="space-y-5">
            <h4 className="text-xl font-semibold text-gray-100">
              {t("quickLinks.title")}
            </h4>
            <ul className="space-y-3">
              {["home", "projects", "about", "contact"].map((id) => (
                <li key={id}>
                  <button
                    onClick={() => handleScroll(id)}
                    className="text-gray-400 hover:text-white transition-all duration-300 text-sm hover:translate-x-2 inline-block transform hover:shadow-lg"
                  >
                    {t(`quickLinks.links.${id}`)}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <div className="space-y-5">
            <h4 className="text-xl font-semibold text-gray-100">
              {t("contact.title")}
            </h4>
            <div className="space-y-3">
              <a
                href={`mailto:${t("contact.email")}`}
                className="flex items-center text-gray-400 hover:text-white transition-all duration-300 text-sm group hover:translate-x-1"
              >
                <div className="mr-3 h-5 w-5 group-hover:scale-110 transition-transform duration-300">
                  <Image
                    src={envelopeIcon}
                    alt="Envelope Icon"
                    width={20}
                    height={20}
                    className="brightness-0 invert"
                  />
                </div>
                {t("contact.email")}
              </a>
            </div>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-gray-700/50">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-6 md:space-y-0">
            <div className="text-gray-400 text-sm font-light">
              {t("copyright", { year: currentYear })}
            </div>
            <div className="flex space-x-8">
              {["github", "linkedin", "instagram"].map((social, index) => (
                <a
                  key={index}
                  href={t(`social.${social}`)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-white transition-all duration-300 hover:-translate-y-1"
                >
                  <div className="h-6 w-6 hover:scale-110 transform transition-transform duration-300">
                    <Image
                      src={
                        social === "github"
                          ? githubIcon
                          : social === "linkedin"
                          ? linkedinIcon
                          : instagramIcon
                      }
                      alt="Social Icon"
                      width={24}
                      height={24}
                      className="brightness-0 invert"
                    />
                  </div>
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
