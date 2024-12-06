"use client";

import Link from "next/link";
import styles from "./navbar.module.sass";
import Image from "next/image";
import { Category, CategoryTranslations } from "@/constants/categories";
import routes from "@/utils/routes";
import useTranslation from "next-translate/useTranslation";

export default function Navbar() {
  const { t } = useTranslation("common");
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
        <select>
          <option key="en" value="en">
            EN
          </option>
          <option key="es" value="es">
            ES
          </option>
        </select>
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
            pathname: routes.posters.main,
          }}
          className={styles.link}
        >
          {t(CategoryTranslations[Category.POSTERS])}
        </Link>
      </nav>
    </div>
  );
}
