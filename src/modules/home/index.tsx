"use client";
import React, { useState } from "react";
import AudioPlayer from "@/modules/home/components/audioPlayer";
import styles from "./home.module.sass";
import { Category, CategoryTranslations } from "@/constants/categories";

const Home = () => {
  const [expandedCard, setExpandedCard] = useState<Category>(Category.HOME);

  const handleToggle = (index: Category): void => {
    setExpandedCard(expandedCard === index ? Category.HOME : index);
  };

  return (
    <div className={styles["wrapper"]}>
      <AudioPlayer />
      <div className={styles["card-container"]}>
        {[...Array(5)].map((_, index: keyof typeof CategoryTranslations) => (
          <div
            key={index}
            className={`${styles.card} ${
              expandedCard === index ? styles.expanded : styles.collapsed
            }`}
            onClick={() => handleToggle(index)}
          >
            <p>{CategoryTranslations[index]} {expandedCard === index ? "Details" : ""}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
