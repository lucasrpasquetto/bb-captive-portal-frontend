import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

import en from "./locales/en.json";
import ptBr from "./locales/pt-br.json";
import es from "./locales/es.json";

const resources = {
  'English': en,
  'Português': ptBr,
  'Español': es,
};

export const availableLanguages = Object.keys(resources);

i18n.use(initReactI18next).use(LanguageDetector).init({
  resources,
  defaultNS: "common",
  fallbackLng: "en",
});
