import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import loading_en from "./en/loading.json";
import loading_es from "./es/loading.json";
const resources = {
  en: { loading: loading_en },
  es: { loading: loading_es },
};
i18n
  .use(initReactI18next)
  .init({ resources, lng: "en", interpolation: { escapeValue: false } });
export default i18n;
