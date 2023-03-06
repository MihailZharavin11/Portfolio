import React from "react";
import styles from "./fifthSection.module.scss";

export const FifthSection = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.card}>
        <span className={styles.cardText}>{"<LINKEDIN/>"}</span>
      </div>
      <div className={styles.card}>
        <span>{"<EMAIL/>"}</span>
      </div>
      <div className={styles.card}>
        <span>{"<TELEGRAM/>"}</span>
      </div>
      <div className={`${styles.card} ${styles.purple}`}>
        <span>{"<RESUME/>"}</span>
      </div>
    </div>
  );
};
