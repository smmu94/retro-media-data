"use client";

import React, { useContext } from "react";
import Link from "next/link";
import styles from "./navbar.module.sass";
import Image from "next/image";
import LanguageSwitcher from "./components/languageSwitcher";
import routes from "../../utils/routes";
import { useTranslation } from "../../i18n/client";
import { LanguageContext } from "../../context/lng";
import { CategoryTranslations, Category } from "../../utils/constants";

export default function Navbar() {
  const { language } = useContext(LanguageContext);
  const { t } = useTranslation(language, "common");
  return (
    <div className={styles.wrapper}>
      <Image
        src="/assets/logo.png"
        alt="logo"
        placeholder="blur"
        blurDataURL="/assets/logo.png"
        width={120}
        height={120}
      />
      <nav className={styles.nav}>
        <Link
          href={{
            pathname: routes.home.main,
          }}
          className={styles.link}
        >
          {t(CategoryTranslations[Category.HOME])}
        </Link>
        <Link
          href={{
            pathname: routes.music.main,
          }}
          className={styles.link}
        >
          {t(CategoryTranslations[Category.MUSIC])}
        </Link>
        <Link
          href={{
            pathname: routes.movies.main,
          }}
          className={styles.link}
        >
          {t(CategoryTranslations[Category.MOVIES])}
        </Link>
        <Link
          href={{
            pathname: routes.series.main,
          }}
          className={styles.link}
        >
          {t(CategoryTranslations[Category.SERIES])}
        </Link>
        <Link
          href={{
            pathname: routes.games.main,
          }}
          className={styles.link}
        >
          {t(CategoryTranslations[Category.GAMES])}
        </Link>
      </nav>
      <LanguageSwitcher />
    </div>
  );
}
