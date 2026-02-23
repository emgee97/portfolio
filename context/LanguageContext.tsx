"use client";

import React, { createContext, useContext, useState, useEffect } from "react";
import { en } from "@/translations/en";
import { fr } from "@/translations/fr";
import type { Translations } from "@/translations/en";

type Language = "en" | "fr";

interface LanguageContextType {
  lang: Language;
  setLang: (lang: Language) => void;
  t: Translations;
}

const LanguageContext = createContext<LanguageContextType>({
  lang: "en",
  setLang: () => {},
  t: en,
});

function getCookieLang(): Language {
  const match = document.cookie.match(/(?:^|;\s*)lang=([^;]*)/);
  const value = match?.[1];
  return value === "en" || value === "fr" ? value : "en";
}

export const LanguageProvider = ({ children }: { children: React.ReactNode }) => {
  // Always start with "en" on the server to avoid hydration mismatch
  const [lang, setLangState] = useState<Language>("en");

  // After hydration, read the cookie (client-side only)
  useEffect(() => {
    setLangState(getCookieLang());
  }, []);

  const t = lang === "fr" ? fr : en;

  const setLang = (newLang: Language) => {
    setLangState(newLang);
    document.cookie = `lang=${newLang}; path=/; max-age=${60 * 60 * 24 * 365}; samesite=lax`;
  };

  return (
    <LanguageContext.Provider value={{ lang, setLang, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => useContext(LanguageContext);
