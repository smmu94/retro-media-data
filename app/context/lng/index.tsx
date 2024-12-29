"use client";
import React, { createContext, useState, ReactNode } from "react";

interface LanguageContextProps {
  language: string;
  setLanguage: (lang: string) => void;
}

export const LanguageContext = createContext<LanguageContextProps>({language: "en", setLanguage: () => {} });

export const LanguageProvider = ({ children, language }: { children: ReactNode; language: string; }) => {
  const [currentLanguage, setCurrentLanguage] = useState(language);

  const setLanguage = (lang: string) => {
    setCurrentLanguage(lang);
  };

  return (
    <LanguageContext.Provider value={{ language: currentLanguage, setLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
};