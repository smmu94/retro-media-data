"use client";
import React, { useContext } from "react";
import { LanguageContext } from "../../../../context/lng";
import { useRouter } from "next/navigation";
import { useTranslation } from "../../../../i18n/client";

const LanguageSwitcher = () => {
  const router = useRouter();
  const { language, setLanguage } = useContext(LanguageContext);
  const { t } = useTranslation(language, "common");
  const handleLanguageChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setLanguage(e.target.value);
    router.push(`/${e.target.value}`);
  };

  return (
    <select
      value={language}
      style={{
        padding: "10px",
        borderRadius: "6px",
        border: "none",
        background: "#f9dc5c",
        color: "black",
        fontSize: "16px",
        appearance: "none",
        outline: "none",
        textAlign: "center",
      }}
      onChange={handleLanguageChange}
    >
      <option value="en">{t("language.english")}</option>
      <option value="es">{t("language.spanish")}</option>
    </select>
  );
};

export default LanguageSwitcher;
