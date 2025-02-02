import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import navbarEn from "../locales/en/navbar.json";
import navbarPl from "../locales/pl/navbar.json";
import footerEn from "../locales/en/footer.json";
import footerPl from "../locales/pl/footer.json";
import faqEn from "../locales/en/faq.json";
import faqPl from "../locales/pl/faq.json";
import contactEn from "../locales/en/contact.json";
import contactPl from "../locales/pl/contact.json";

const resources = {
  en: { navbar: navbarEn, footer: footerEn, faq: faqEn, contact: contactEn },
  pl: { navbar: navbarPl, footer: footerPl, faq: faqPl, contact: contactPl },
};

i18n.use(initReactI18next).init({
  resources,
  lng: "en",
  fallbackLng: "en",
  interpolation: { escapeValue: false },
});

export default i18n;
