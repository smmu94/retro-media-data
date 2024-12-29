"use client";
import React, { useContext } from "react";
import { useTranslation } from "../../../../i18n/client";
import { CardProps } from "./types";
import styles from "./card.module.sass";
import { LanguageContext } from "../../../../context/lng";
import Image from "next/image";
import { cardContent } from "./constants";
import {
  Category,
  CategoryTranslations,
  getRoute,
} from "../../../../utils/constants";
import { getClassNames } from "./utils";
import Link from "next/link";

const Card = ({ index, isExpanded, onToggle }: CardProps) => {
  const { language } = useContext(LanguageContext);
  const { t } = useTranslation(language, ["home"]);
  return (
    <div
      className={`${styles.card} ${
        isExpanded ? styles.expanded : styles.collapsed
      }`}
      onClick={() => onToggle(index)}
    >
      {!isExpanded && <p>{t(`common:${CategoryTranslations[index]}`)}</p>}
      {isExpanded && (
        <>
          <Image
            src={`/assets/${cardContent[index].imageRoute}`}
            alt={`image-${index}`}
            className={`${styles.img} ${styles[getClassNames(index)]}`}
            width={400}
            height={300}
          />
          <div
            className={`${styles.container} ${styles[getClassNames(index)]}`}
          >
            <h2 className={styles.title}>{t(cardContent[index].title)}</h2>
            <p className={styles.description}>
              {t(cardContent[index].description)}
            </p>

            {index !== Category.HOME && (
              <Link
                href={{
                  pathname: getRoute[index],
                }}
                className={`${styles.button} ${styles[getClassNames(index)]}`}
              >
                {t("common:goTo")}{" "}
                {t(`common:${CategoryTranslations[index]}`)}
              </Link>
            )}
          </div>
        </>
      )}
    </div>
  );
};

export default Card;
