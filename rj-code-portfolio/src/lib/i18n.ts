import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import navbarEn from "../locales/en/navbar.json";
import navbarPl from "../locales/pl/navbar.json";

const resources = {
  en: { navbar: navbarEn },
  pl: { navbar: navbarPl },
};

i18n.use(initReactI18next).init({
  resources,
  lng: "en",
  fallbackLng: "en",
  interpolation: { escapeValue: false },
});

export default i18n;
