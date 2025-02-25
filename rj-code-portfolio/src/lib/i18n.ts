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
import howWeWorkEn from "../locales/en/howWeWork.json";
import howWeWorkPl from "../locales/pl/howWeWork.json";
import reviewsEn from "../locales/en/reviews.json";
import reviewsPl from "../locales/pl/reviews.json";
import servicesEn from "../locales/en/services.json";
import servicesPl from "../locales/pl/services.json";
import heroEn from "../locales/en/hero.json";
import heroPl from "../locales/pl/hero.json";
import aboutEn from "../locales/en/about.json";
import aboutPl from "../locales/pl/about.json";
import projectsEn from "../locales/en/projects.json";
import projectsPl from "../locales/pl/projects.json";
import cookieConsentEn from "../locales/en/cookieConsent.json";
import cookieConsentPl from "../locales/pl/cookieConsent.json";
import privacyPolicyEn from "../locales/en/privacyPolicy.json";
import privacyPolicyPl from "../locales/pl/privacyPolicy.json";

const resources = {
  en: {
    navbar: navbarEn,
    footer: footerEn,
    faq: faqEn,
    contact: contactEn,
    howWeWork: howWeWorkEn,
    reviews: reviewsEn,
    services: servicesEn,
    hero: heroEn,
    about: aboutEn,
    projects: projectsEn,
    cookieConsent: cookieConsentEn,
    privacyPolicy: privacyPolicyEn
  },
  pl: {
    navbar: navbarPl,
    footer: footerPl,
    faq: faqPl,
    contact: contactPl,
    howWeWork: howWeWorkPl,
    reviews: reviewsPl,
    services: servicesPl,
    hero: heroPl,
    about: aboutPl,
    projects: projectsPl,
    cookieConsent: cookieConsentPl,
    privacyPolicy: privacyPolicyPl
  },
};

i18n.use(initReactI18next).init({
  resources,
  lng: "en",
  fallbackLng: "en",
  interpolation: { escapeValue: false },
});

export default i18n;
