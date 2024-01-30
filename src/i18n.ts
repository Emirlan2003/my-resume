import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import XHR from "i18next-xhr-backend";
import { LocalStorageKey } from "./enums/localStorage";
import { LocalStorage } from "./localStorage";

i18n
  .use(XHR)
  .use(initReactI18next)
  .init({
    fallbackLng: LocalStorage.getItem(LocalStorageKey.Lang) || "en",
    debug: true,
    backend: {
      loadPath: "/locales/{{lng}}/{{ns}}.json",
    },
    interpolation: {
      escapeValue: false,
    },
    supportedLngs: ["en", "ru"],
  });

export default i18n;
