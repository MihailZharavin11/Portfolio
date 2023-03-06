import React from "react";
import styles from "./firstSection.module.scss";
export const FirstSection = () => {
  return (
    <div className={styles.firstSection}>
      <div className={styles.title}>
        <div className={styles.titleTop}>
          <span className={styles.text}>FRONT</span>
          <div className={styles.gifWrapper}>
            <div className={styles.gif1}></div>
            <div className={styles.gif2}></div>
          </div>
          <span className={styles.text}>END</span>
        </div>
        <div className={styles.titleBottom}>DEVELOPER</div>
      </div>
    </div>
  );
};
