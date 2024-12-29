"use client";
import React, { useState } from "react";
import styles from "./home.module.sass";
import Card from "./components/card";
import { Category, CategoryTranslations } from "../../utils/constants";

const Home = () => {
  const [expandedCard, setExpandedCard] = useState<Category>(Category.HOME);
  const handleToggle = (index: number) => {
    setExpandedCard(index);
  };

  return (
    <div className={styles["wrapper"]}>
      <div className={styles["card-container"]}>
        {[...Array(5)].map((_, index: keyof typeof CategoryTranslations) => (
          <Card
            key={index}
            index={index}
            isExpanded={expandedCard === index}
            onToggle={handleToggle}
          />
        ))}
      </div>
    </div>
  );
};

export default Home;
