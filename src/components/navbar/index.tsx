import Link from "next/link";
import styles from "./navbar.module.sass";
import Image from "next/image";
import { Category, CategoryTranslations } from "@/constants/categories";
import routes from "@/utils/routes";

export default function Navbar() {
  return (
    <div className={styles.wrapper}>
      <Image
        src="/assets/logo.png"
        alt="logo"
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
          {CategoryTranslations[Category.HOME]}
        </Link>
        <Link
          href={{
            pathname: routes.music.main,
          }}
          className={styles.link}
        >
          {CategoryTranslations[Category.MUSIC]}
        </Link>
        <Link
          href={{
            pathname: routes.movies.main,
          }}
          className={styles.link}
        >
          {CategoryTranslations[Category.MOVIES]}
        </Link>
        <Link
          href={{
            pathname: routes.series.main,
          }}
          className={styles.link}
        >
          {CategoryTranslations[Category.SERIES]}
        </Link>
        <Link
          href={{
            pathname: routes.posters.main,
          }}
          className={styles.link}
        >
          {CategoryTranslations[Category.POSTERS]}
        </Link>
      </nav>
    </div>
  );
}
