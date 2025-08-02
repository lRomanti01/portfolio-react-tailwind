// i18n.js
import i18n from "i18next";
import { initReactI18next } from "react-i18next";

// Importar los archivos de traducción
import enTranslation from "./translations/en.json";
import esTranslation from "./translations/es.json";

i18n.use(initReactI18next).init({
  resources: {
    en: { translation: enTranslation },
    es: { translation: esTranslation },
  },
  lng: "en", // Idioma por defecto
  fallbackLng: "en", // Idioma de respaldo
  interpolation: {
    escapeValue: false, // React ya se encarga de escapar por seguridad
  },
});

export default i18n;
