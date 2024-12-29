"use client";

import React, { useContext } from "react";
import styles from "./footer.module.sass";
import { useTranslation } from "../../i18n/client";
import { LanguageContext } from "../../context/lng";

export default function Footer() {
  const { language } = useContext(LanguageContext);
  const { t } = useTranslation(language, "common");
  return (
    <footer className={styles.footer}>	
      <div className={styles.content}>
        <p className={styles.text}>© 2024 - 80&apos;s Retro Media</p>
        <p className={styles.text}>
          {t("footer.description")}
        </p>
      </div>
    </footer>
  );
}
